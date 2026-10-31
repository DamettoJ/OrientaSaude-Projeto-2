#!/usr/bin/env python3
"""Atualiza notícias oficiais no OrientaSaúde sem chaves/API externas.

Somente publicações públicas verificáveis. Nunca transforma notícia nacional
em alerta municipal e nunca interpreta indisponibilidade como ausência de risco.
"""
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from html import unescape
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys
from urllib.parse import urlparse
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

DATA = Path("orientasaude/data/news.json")
FEEDS = (
    {"id": "parana", "name": "Secretaria da Saúde do Paraná",
     "coverage": "Paraná · Brasil", "host": "saude.pr.gov.br",
     "url": "https://www.saude.pr.gov.br/rss.xml"},
    {"id": "paraguai", "name": "Dirección General de Vigilancia de la Salud",
     "coverage": "Paraguai · abrangência nacional", "host": "dgvs.mspbs.gov.py",
     "url": "https://dgvs.mspbs.gov.py/feed/"},
    {"id": "argentina", "name": "Ministerio de Salud de Argentina",
     "coverage": "Argentina · abrangência nacional", "host": "argentina.gob.ar",
     "url": "https://www.argentina.gob.ar/salud/noticias/rss"},
)
MAX_PER_SOURCE = 12

class TextOnly(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []

    def handle_data(self, data):
        self.parts.append(data)

def plain(value, limit):
    parser = TextOnly()
    parser.feed(value or "")
    result = unescape(" ".join(parser.parts))
    return re.sub(r"\s+", " ", result).strip()[:limit]

def iso_date(value):
    if not value:
        return None
    try:
        parsed = parsedate_to_datetime(value)
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=timezone.utc)
        return parsed.astimezone(timezone.utc).isoformat(timespec="seconds")
    except (TypeError, ValueError, IndexError):
        try:
            parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
            if parsed.tzinfo is None:
                parsed = parsed.replace(tzinfo=timezone.utc)
            return parsed.astimezone(timezone.utc).isoformat(timespec="seconds")
        except (TypeError, ValueError):
            return None

def trusted_link(url, host):
    try:
        parsed = urlparse(url.strip())
        domain = (parsed.hostname or "").lower()
        return parsed.scheme == "https" and (domain == host or domain.endswith("." + host))
    except ValueError:
        return False

def fetch_articles(feed):
    request = Request(feed["url"], headers={
        "User-Agent": "OrientaSaudeNews/1.0 (+public-health-news; GitHub Actions)",
        "Accept": "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.4",
    })
    with urlopen(request, timeout=25) as response:
        body = response.read(2_000_001)
    if len(body) > 2_000_000:
        raise ValueError("Feed ultrapassou limite de 2 MB")
    # Alguns feeds oficiais incluem espaços ou linhas vazias antes do XML.
    root = ET.fromstring(body.lstrip())
    entries = root.findall("./channel/item")
    if not entries:
        raise ValueError("Feed sem itens RSS reconhecíveis")
    articles = []
    seen = set()
    for entry in entries:
        title = plain(entry.findtext("title") or "", 170)
        link = (entry.findtext("link") or "").strip()
        if not title or not trusted_link(link, feed["host"]) or link in seen:
            continue
        seen.add(link)
        published = (entry.findtext("pubDate") or
                     entry.findtext("{http://purl.org/dc/elements/1.1/}date"))
        articles.append({
            "title": title,
            "url": link,
            "summary": plain(entry.findtext("description") or "", 260),
            "published_at": iso_date(published),
            "source_id": feed["id"],
            "source": feed["name"],
            "coverage": feed["coverage"],
        })
        if len(articles) >= MAX_PER_SOURCE:
            break
    if not articles:
        raise ValueError("Feed sem links de notícias oficiais válidos")
    return articles

def main():
    previous = {}
    if DATA.exists():
        try:
            previous = json.loads(DATA.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            print("Aviso: arquivo de notícias anterior inválido", file=sys.stderr)
    old_sources = {s.get("id"): s for s in previous.get("sources", [])}
    old_articles = previous.get("items", [])
    now = datetime.now(timezone.utc).isoformat(timespec="seconds")
    sources, items = [], []
    failures = 0

    for feed in FEEDS:
        old_source = old_sources.get(feed["id"], {})
        entry = {
            "id": feed["id"],
            "name": feed["name"],
            "coverage": feed["coverage"],
            "url": feed["url"],
            "status": "ok",
            "last_success_at": now,
        }
        try:
            current = fetch_articles(feed)
            items.extend(current)
            print(f"{feed['id']}: {len(current)} notícias")
        except Exception as exc:
            failures += 1
            entry["status"] = "indisponivel"
            entry["last_success_at"] = old_source.get("last_success_at")
            cached = [item for item in old_articles
                      if item.get("source_id") == feed["id"]]
            items.extend(cached[:MAX_PER_SOURCE])
            print(f"FONTE INDISPONÍVEL: {feed['id']}: {exc}", file=sys.stderr)
        sources.append(entry)

    # Datas não informadas permanecem nulas, nunca recebem a data da consulta.
    items.sort(key=lambda item: item.get("published_at") or "", reverse=True)
    output = {
        "checked_at": now,
        "disclaimer": "Notícias oficiais para consulta. Não são alertas locais confirmados nem vigilância em tempo real.",
        "sources": sources,
        "items": items,
    }
    DATA.parent.mkdir(parents=True, exist_ok=True)
    DATA.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n",
                    encoding="utf-8")
    if failures:
        print(f"Aviso: {failures} fonte(s) indisponível(is); notícias anteriores preservadas.", file=sys.stderr)

if __name__ == "__main__":
    main()
