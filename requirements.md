# requirements.md

## 📋 Enunciado

Este projeto foi desenvolvido para apresentar a você o trabalho com APIs externas, o tratamento de requisições assíncronas e o gerenciamento de diferentes estados da interface usando JavaScript.

Você irá criar um buscador de repositórios do GitHub que permitirá aos usuários selecionar uma linguagem de programação em um menu dropdown. O aplicativo então utilizará a API de Busca de Repositórios do GitHub para buscar e exibir um repositório aleatório que corresponda à linguagem selecionada. As informações exibidas devem incluir:

- Nome do repositório
- Descrição
- Número de estrelas
- Forks
- Issues abertas

Os usuários poderão buscar outro repositório aleatório clicando em um botão.

## GitHub Random Repository

A aplicação deve lidar corretamente com os estados de:

- Carregamento (loading)
- Vazio (empty)
- Erro (error)

Após buscar um repositório com sucesso, um botão de “Atualizar” (Refresh) deve aparecer para permitir que o usuário obtenha outro repositório aleatório.

Aqui estão os links para os recursos que você precisará neste projeto:

- API de Busca de Repositórios do GitHub ( https://docs.github.com/en/rest/reference/search#search-repositories )
- Dados das Linguagens de Programação ( https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json )

Este projeto ajudará você a praticar:

- Integração com APIs
- Gerenciamento de dados assíncronos
- Melhoria da experiência do usuário com estados responsivos da interface

---

## 🧠 Meu Raciocínio

### Visão Geral
Um sistema que busca um repositório aleatório no GitHub com base em uma linguagem de programação selecionada pelo usuário.

### Macro — As grandes partes do sistema
- **Entrada de Dados:** Seletor (dropdown) e busca por texto para definir a linguagem.
- **Integração:** Consumo da API de busca de repositórios do GitHub.
- **Lógica de Sorteio:** Seleção aleatória de um item dentro da lista retornada pela API.
- **Interface (UI):** Renderização dinâmica dos dados do repositório e gerenciamento de estados.

### Frontend
- **Telas/Estados:**
  - **Vazio:** Estado inicial pedindo para selecionar uma linguagem.
  - **Carregamento:** Mensagem de "Loading, please wait" durante a requisição.
  - **Erro:** Mensagem "Error fetching repositories" com um botão "Click to retry" em vermelho.
  - **Sucesso:** Exibição do card do repositório com as informações solicitadas.

### Backend
- Não haverá backend próprio (Serverless/Frontend-only).
- Consumo direto da API do GitHub via `fetch`.

### Banco de Dados
- Não há banco de dados persistente. Os dados são mantidos em memória (estado da aplicação) durante a sessão.

### Fluxo do Usuário
1. Usuário seleciona ou digita uma linguagem.
2. Usuário clica no botão para buscar.
3. O sistema exibe o estado de carregamento.
4. Após a resposta, o sistema sorteia um repositório e o exibe na tela.
5. Um botão "Atualizar" aparece para permitir novo sorteio com a mesma linguagem.
6. Em caso de erro, o usuário pode clicar em "Retry" para tentar novamente.

### Micro — Decisões técnicas
- **URL Dinâmica:** Uso de Template Literals (`` `...${language}` ``) para montar a query da API.
- **Aleatoriedade:** Uso de `Math.random()` multiplicado pelo comprimento do array de resultados.
- **Dados:** Manipulação de objetos JSON vindos da API (acesso via `ponto` ou `colchetes`).
- **Estados:** Uso de classes CSS ou variáveis de estado JS para alternar o que é visível na tela.
