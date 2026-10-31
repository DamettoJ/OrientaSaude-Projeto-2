(() => {
  "use strict";
  const sourceBox = document.getElementById("source-status");
  const list = document.getElementById("news-list");
  const selector = document.getElementById("region");
  const updated = document.getElementById("last-update");
  const labels = {parana:"Paraná",paraguai:"Paraguai",argentina:"Argentina"};
  let data = null;

  function fmt(iso) {
    if (!iso) return "data não divulgada";
    const date = new Date(iso);
    return Number.isNaN(date.getTime()) ? "data não divulgada" :
      date.toLocaleString("pt-BR", {dateStyle:"short",timeStyle:"short"});
  }

  function textNode(tag, value, className) {
    const node = document.createElement(tag);
    node.textContent = value || "";
    if (className) node.className = className;
    return node;
  }

  function render() {
    if (!data) return;
    const filter = selector.value;
    list.replaceChildren();
    sourceBox.replaceChildren();
    const sources = Array.isArray(data.sources) ? data.sources : [];
    sources.filter(s => filter === "all" || s.id === filter).forEach(s => {
      const isOk = s.status === "ok";
      const stamp = s.last_success_at ? " Última leitura: " + fmt(s.last_success_at) : "";
      sourceBox.appendChild(textNode("p",
        s.name + " — " + (isOk ? "acesso confirmado" : "fonte indisponível ou ainda não consultada") + "." + stamp,
        isOk ? "ok" : "bad"));
    });
    const items = (Array.isArray(data.items) ? data.items : [])
      .filter(item => filter === "all" || item.source_id === filter)
      .slice(0, 30);
    if (!items.length) {
      list.appendChild(textNode("p",
        "Nenhuma publicação disponível nesta fonte. Isso não indica ausência de risco epidemiológico.", "empty"));
      return;
    }
    items.forEach(item => {
      const article = document.createElement("article");
      article.className = "news-item";
      article.appendChild(textNode("div", item.source + " · " + item.coverage, "origin"));
      const heading = document.createElement("h3");
      const a = document.createElement("a");
      // Links públicos usam HTTPS e abrem separadamente; não inserir HTML do feed.
      try {
        const url = new URL(item.url);
        if (url.protocol !== "https:") throw Error("URL inválida");
        a.href = url.href;
      } catch (e) { return; }
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = item.title;
      heading.appendChild(a);
      article.appendChild(heading);
      if (item.summary) article.appendChild(textNode("p", item.summary));
      article.appendChild(textNode("small", "Publicado: " + fmt(item.published_at) + " · Abrir fonte oficial"));
      list.appendChild(article);
    });
  }

  selector.addEventListener("change", render);
  fetch("./data/news.json", {cache:"no-store"})
    .then(response => {
      if (!response.ok) throw Error("arquivo não encontrado");
      return response.json();
    })
    .then(payload => {
      data = payload;
      const last = payload.checked_at ? new Date(payload.checked_at) : null;
      updated.textContent = last && !Number.isNaN(last.getTime()) ?
        "Última consulta automática: " + fmt(payload.checked_at) :
        "A primeira atualização automática ainda não foi executada.";
      if (last && Date.now() - last.getTime() > 36 * 60 * 60 * 1000) {
        updated.textContent += " · Dados possivelmente desatualizados.";
      }
      render();
    })
    .catch(() => {
      updated.textContent = "Não foi possível obter o arquivo atualizado.";
      list.replaceChildren(textNode("p",
        "Fonte temporariamente indisponível. Consulte diretamente os órgãos oficiais.", "empty"));
    });
})();
