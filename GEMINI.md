# GitHub Random Repository — GEMINI.md

## 🎯 O que o projeto faz
Buscador aleatório de repositórios do GitHub filtrado por linguagem de programação. Pratica integração com APIs, estados de UI (loading, erro, vazio) e manipulação do DOM com Vanilla JS.

## 🛠️ Stack
- HTML5 (Semântico)
- CSS3 (Vanilla + Flexbox/Grid)
- JavaScript (Vanilla ES6+)
- API: GitHub Search API
- Testes: Jest

## 🗺️ Mapa de Arquivos
- `/`
  - `index.html` — Estrutura da página
  - `GEMINI.md` — Este mapa (Ignorado)
  - `JARVIS.md` — Preferências (Ignorado)
  - `package.json` — Dependências e scripts
- `src/`
  - `style.css` — Estilização
  - `app.js` — Lógica principal
- `docs/`
  - `REQUIREMENTS.md` — Raciocínio computacional (Git)
  - `study/` — Materiais de estudo
- `tests/`
  - `dom.test.js` — Testes de estrutura
  - `app.test.js` — Testes de lógica de estado

## 🚀 Fluxo de Runtime
1. Carregamento da página (Estado: Vazio).
2. Seleção de linguagem -> Clique em Buscar.
3. Fetch na API -> Estado: Loading.
4. Sucesso: Sorteio -> Renderização do Card -> Estado: Sucesso (Refresh ativo).
5. Erro: Renderização de mensagem -> Estado: Erro (Retry ativo).

## ⚙️ Comandos
- `npm test`: Rodar testes do Jest.
- `python3 -m http.server 8000`: Servidor local para testes manuais.

## ⚠️ Armadilhas de Edição
- A API do GitHub tem rate limit. Se fizermos muitas buscas rápidas, ela pode bloquear temporariamente.
- O botão "Refresh" só deve aparecer após a primeira busca bem-sucedida.
- O "Retry" no erro deve limpar o estado anterior antes de tentar novamente.
