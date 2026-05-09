# 🔍 GitHub Random Repo

Um buscador aleatório de repositórios do GitHub que permite explorar projetos por linguagem de programação. Desenvolvido para praticar consumo de APIs, estados de interface e manipulação do DOM com JavaScript puro.

![Rascunho do Projeto](./img/draft-random-repository.png)

## 🎯 Objetivo
Este projeto é baseado no desafio [GitHub Random Repo](https://roadmap.sh/projects/github-random-repo) do **Roadmap.sh**. O objetivo é resolver o problema de "o que estudar hoje?" ao sugerir um repositório aleatório com base na linguagem de preferência do usuário, utilizando a API oficial do GitHub.

## ✨ Funcionalidades
- **Seleção de Linguagem:** Escolha entre as linguagens mais populares.
- **Busca Assíncrona:** Integração em tempo real com a API do GitHub.
- **Estados de Interface (UX):**
  - 📥 **Loading:** Feedback visual durante a busca.
  - ❌ **Error:** Tratamento de erros com opção de tentativa (Retry).
  - 📭 **Empty:** Estado inicial limpo e convidativo.
  - ✅ **Success:** Card detalhado com Nome, Descrição, Estrelas, Forks e Issues.
- **Sorteio Aleatório:** Cada busca traz um resultado diferente dentro da mesma linguagem.

## 🛠️ Tecnologias
- **HTML5:** Estrutura semântica.
- **CSS3:** Layout moderno com Flexbox e variáveis CSS.
- **JavaScript (ES6+):** Lógica de estados e Fetch API.
- **Jest:** Testes automatizados para garantir a integridade da UI.

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/gabrielgomesxp/github-random-repository.git
   ```

2. **Abra o projeto:**
   Basta abrir o arquivo `index.html` no seu navegador ou utilizar um servidor local:
   ```bash
   python3 -m http.server 8000
   ```

3. **Rodar Testes:**
   Se desejar validar a integridade do código:
   ```bash
   npm install
   npm test
   ```

## 🧠 Pensamento Computacional
Este projeto foi construído seguindo uma metodologia de planejamento rigorosa. Você pode conferir todo o mapeamento lógico, decisões técnicas e fluxo de usuário no arquivo [REQUIREMENTS.md](./REQUIREMENTS.md).

---
Desenvolvido por **Gabriel** como parte do seu aprendizado contínuo em Ciência da Computação. 🚀
