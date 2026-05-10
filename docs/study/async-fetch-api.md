# 🌐 Async/Await & Fetch: O Garçom e o Pager

Se você já foi em um restaurante como o Outback ou o Madero, você já entende como o JavaScript funciona "por baixo do capô". Este documento explica como pegamos dados do GitHub sem travar o nosso site.

## 1. O que é esse tal de Assíncrono?
Imagina que você chega num restaurante lotado.
- **O jeito Síncrono (Errado):** O garçom te leva até a mesa, mas ele fica parado na sua frente, sem piscar, esperando você decidir o pedido. Enquanto você não decide, ele não atende mais ninguém, a cozinha para e o restaurante trava.
- **O jeito Assíncrono (Certo):** O garçom te entrega o cardápio e um **Pager** (aquele aparelhinho que vibra). Ele vai atender outras pessoas. Quando sua comida (os dados) está pronta, o Pager vibra e você recebe o que pediu.

No JavaScript, o `Async/Await` é o nosso Pager. O site continua funcionando enquanto a internet busca as informações.

## 2. O comando Fetch (O Mensageiro)
O `fetch` é o nosso mensageiro que vai até o servidor do GitHub bater na porta e perguntar: "Ei, tem algum repositório legal de JavaScript aí?".

### Como lemos o código:
```javascript
async function buscarDados() {
    // 1. "await fetch" significa: "Vou pedir os dados e esperar o Pager vibrar"
    const resposta = await fetch('https://api.github.com/search...');

    // 2. Depois que o Pager vibra, transformamos a resposta em algo que o JS entende (JSON)
    const dados = await resposta.json();
}
```

## 3. O que aprendemos com os erros?
Às vezes o mensageiro volta com notícias ruins. No nosso projeto, aprendemos a tratar dois casos:
- **A API cansou (Rate Limit - Erro 403):** O GitHub é muito procurado. Se pedirmos muitas vezes seguidas, ele diz: "Ei, calma aí! Espera um minuto". No código, capturamos esse `403` para avisar o usuário com educação, em vez de deixar o site quebrar.
- **Não achei nada:** Se pedirmos uma linguagem que não existe ou não tem repositórios, a lista volta vazia. Aprendemos que é importante checar se a lista tem tamanho zero antes de tentar mostrar algo na tela.

## 📚 Para ler mais (Links oficiais)
- [O que é uma Promise? (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) — Para entender o "Pager".
- [Guia do Fetch API (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) — Como o mensageiro trabalha.
- [GitHub API Rate Limiting](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) — Por que o GitHub às vezes nos manda esperar.
