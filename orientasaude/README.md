# OrientaSaúde

Sistema de Orientação sobre Sintomas e Busca por Atendimento Médico – protótipo web (HTML, CSS e JavaScript puros, sem dependências).

Projeto da disciplina de Engenharia de Software · Ciência da Computação · Centro Universitário Dinâmica das Cataratas · ODS 3 – Saúde e Bem-Estar.

> **Aviso:** o aplicativo é informativo e educativo. Não realiza diagnósticos, não indica medicamentos e não substitui a avaliação de um profissional de saúde.

## Como visualizar

- **Local:** abra o `index.html` no navegador (duplo clique).
- **GitHub Pages:** suba os arquivos na raiz do repositório e ative em *Settings → Pages → Deploy from a branch → main / (root)*. O link ficará em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Arquivos

| Arquivo | Função |
|---|---|
| `index.html` | Estrutura da página e navegação inferior |
| `style.css` | Visual e responsividade (celular, tablet e computador) |
| `app.js` | Telas, regras de orientação, lembretes e armazenamento local |

## Responsividade

- **Celular:** tela cheia, como nas imagens.
- **Tablet e computador:** o app aparece dentro de uma moldura de celular centralizada (em telas largas, com painel lateral do projeto).

## Requisitos atendidos

| Requisito | Onde |
|---|---|
| RF01 – Consultar informações sobre sintomas | Descrever sintomas / Educação em saúde |
| RF02 – Sinais de alerta | Tela Orientação inicial e “Entenda sinais de alerta” |
| RF03 – Nível de urgência (baixa, média, alta) | Selo na tela Orientação inicial (regras em `urgency()` no `app.js`) |
| RF04 – Medidas iniciais seguras | Educação em saúde → “Medidas iniciais seguras” |
| RF05 – Recomendar atendimento | Próximo passo recomendado + Encontrar atendimento |
| RF06 – Lembretes de medicamentos e consultas | Aba Lembretes → Meus lembretes |
| RF07 – Conteúdos educativos | Educação em saúde / Dicas de saúde |
| RF08 – Aviso permanente | Textos informativos em todas as telas e na Orientação inicial |

## Pontos de atenção antes do uso real

- Os conteúdos de saúde e as regras de urgência são **exemplos** e precisam ser revisados por profissionais qualificados.
- Em `UNITS` (no `app.js`) estão unidades de exemplo, sem endereço. Cadastre endereços e horários oficiais.
- Os dados (registros e lembretes) ficam apenas no navegador do usuário (`localStorage`).
- Os avisos de lembrete funcionam com o app aberto.


## Notícias oficiais de saúde (atualização automática)

A página `noticias.html` exibe publicações oficiais, separadas por fonte:
- Foz do Iguaçu: Secretaria da Saúde do **Paraná** (fonte estadual, não municipal).
- Ciudad del Este: Dirección General de Vigilancia de la Salud do **Paraguai** (fonte nacional).
- Puerto Iguazú: Ministério da Saúde da **Argentina** (fonte nacional).

O script `scripts/update_news.py` coleta os feeds RSS oficiais, valida se cada link pertence ao domínio da fonte, remove marcação HTML das descrições e publica `orientasaude/data/news.json`. O workflow `.github/workflows/update-news.yml` está agendado para executar **a cada 6 horas**, com opção de execução manual em **Actions → Atualizar notícias oficiais de saúde (Tríplice Fronteira) → Run workflow**.

**Para ativar depois de integrar a alteração à branch padrão:**
1. Habilite GitHub Actions nas configurações do repositório.
2. Em **Settings → Actions → General**, permita à automação gravar os conteúdos do repositório (*Read and write permissions*) quando necessário; caso contrário o passo de publicação falhará.
3. Execute manualmente o workflow uma vez e confirme que o arquivo `orientasaude/data/news.json` recebeu os dados atuais.
4. Publique a pasta `orientasaude/` como a raiz do site estático (por exemplo, mova os arquivos para a pasta de publicação ou configure um processo de deploy). GitHub Pages não publica diretamente uma subpasta arbitrária via "Deploy from a branch".

Se um feed não responder, a última lista de publicações daquela fonte é mantida, com identificação de **fonte indisponível**. A tela mostra a data da última consulta e avisa quando os dados estiverem antigos. Notícias estaduais/nacionais **não são provas de surtos na cidade selecionada**, tampouco substituem alertas oficiais ou avaliação médica. O app não acessa dados privados de saúde nem sistemas internos de vigilância.
