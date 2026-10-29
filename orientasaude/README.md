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
