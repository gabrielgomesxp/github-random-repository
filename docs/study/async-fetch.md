# 📚 Estudo: JavaScript Assíncrono (Async/Await & Fetch)

Seja bem-vindo ao próximo nível, Gabriel! Até agora, seu código rodava de forma **Síncrona** (uma linha depois da outra, instantaneamente). Agora, vamos lidar com o mundo real: a internet, onde as coisas demoram.

---

## 1. O Problema: O Garçom Travado (Sincronia)

Imagine um restaurante. Você pede uma pizza. Se o garçom fosse **síncrono**, ele anotaria seu pedido, iria para a cozinha e ficaria lá parado, olhando para o forno, esperando a pizza ficar pronta. Enquanto isso, nenhum outro cliente seria atendido. O restaurante trava.

Na programação, se o JavaScript ficasse parado esperando a resposta da API do GitHub (que pode demorar 2 segundos), o seu navegador travaria. Você não conseguiria clicar em nada, nem rolar a página.

---

## 2. A Solução: O Pager do Outback (Promises)

Uma **Promise** (Promessa) é como aquele aparelhinho (pager) que te dão no Outback. 
- Você faz o pedido (chama a API).
- Eles te dão o pager (**Promise**).
- Você volta a fazer suas coisas (o código continua rodando).
- Quando a comida fica pronta, o pager vibra (**A Promise foi resolvida**).

---

## 3. O Jeito Moderno: Async e Await

Antigamente, usar Promises era confuso (o famoso "Hell de .then()"). O `async/await` foi criado para o código assíncrono **parecer** síncrono e ser fácil de ler.

### 🟡 O que é `async`?
Você coloca essa palavra antes da função para avisar ao JavaScript: *"Ei, esta função vai lidar com coisas que demoram, não se assuste se eu pedir para você esperar"*.

```javascript
async function buscarDados() { ... }
```

### 🟡 O que é `await`?
Você usa o `await` (esperar) dentro de uma função `async`. Ele diz: *"Pare aqui nesta linha e só vá para a próxima quando a resposta chegar"*. O melhor: ele trava apenas **dentro** da função, o resto do navegador continua funcionando normal!

```javascript
const resposta = await fetch(url); // O código pausa aqui até a internet responder
```

---

## 4. Fetch API: O Mensageiro

O `fetch` é a ferramenta nativa do navegador para fazer requisições. Ele é como um mensageiro que você envia para uma URL com uma carta.

```javascript
const resposta = await fetch('https://api.github.com/...');
```

**Importante:** O `fetch` te devolve a "caixa" (a resposta HTTP). Para ver o que tem dentro (os dados), você precisa converter para JSON:

```javascript
const dados = await resposta.json();
```

---

## 5. Por que usar `try...catch`?

Na internet, as coisas falham. O servidor pode cair, ou você pode ficar sem Wi-Fi. O `try...catch` é a sua rede de proteção.

- **try**: "Tente fazer isso aqui..."
- **catch**: "Se algo der errado em qualquer linha do `try`, pule para cá imediatamente para eu avisar o usuário".

---

## 🔗 Referências para Aprofundar (Documentação Oficial)

1.  **MDN - Utilizando a Fetch API**: [Leia aqui](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) - O guia definitivo.
2.  **MDN - Funções Assíncronas (Async/Await)**: [Leia aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function) - Como simplificar seu código.
3.  **JavaScript.info - Promises, async/await**: [Leia aqui](https://javascript.info/async) - Um dos melhores tutoriais do mundo, muito didático.

---

## 🎯 Como aplicaremos no seu projeto?

No seu `fetchRepository()`, faremos exatamente isso:
1. Marcar a função como `async`.
2. Usar o `try` para envolver a busca.
3. Usar `await fetch()` para pegar os dados do GitHub.
4. Usar `await response.json()` para transformar em objeto.
5. Se tudo der certo, usar o `updateState('success')`.
6. Se der erro, o `catch` chama o `updateState('error')`.

---

### Entendeu o conceito do "Garçom que não trava o restaurante"?
Me avisa se tiver qualquer dúvida sobre esses conceitos!
