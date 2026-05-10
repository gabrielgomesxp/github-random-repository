# 🏗️ Testes e CI: A Maquete e o Computador Fantasma

Neste projeto, descobrimos que testar um site é como construir uma maquete para garantir que a casa real não vai cair. Mas e se a maquete não tiver encanamento?

## 1. O que é JSDOM? (A Maquete)
Para testar o nosso site sem precisar abrir o Chrome toda hora, usamos o **JSDOM**. Imagine que o JSDOM é uma maquete de papelão perfeita do navegador. 
- Quando dizemos `document.getElementById`, o teste vai lá na maquete e vê se o botão existe.
- Se o botão estiver lá na maquete, o teste passa. Se não, ele falha.

## 2. O Desafio do GitHub Actions (O Computador Fantasma)
O **GitHub Actions** é o "CI" (Integração Contínua). Ele é um computador que mora na nuvem e acorda toda vez que enviamos código.
O problema é que esse computador é "puro". No meu PC, os testes passavam porque meu ambiente era completo. No computador do GitHub, a maquete (JSDOM) veio sem o comando `fetch`.

## 3. Como resolvemos a "Falta de Encanamento"?
Aprendemos dois conceitos fundamentais:
- **Polyfill (node-fetch):** Como a maquete não tinha "encanamento" (o comando fetch), nós instalamos o `node-fetch` manualmente. Agora, a maquete funciona em qualquer computador do mundo.
- **Isolamento (isolateModules):** Aprendemos que um teste pode "sujar" o outro. Usamos o isolamento para garantir que cada teste comece com uma maquete limpa e novinha, sem restos do teste anterior.

## 📚 Para ler mais (Links oficiais)
- [O que é o JSDOM?](https://github.com/jsdom/jsdom) — Entenda a maquete por dentro.
- [Guia do Jest: Mocks](https://jestjs.io/docs/mock-functions) — Como simular respostas de API.
- [GitHub Actions: Introdução](https://docs.github.com/pt/actions/learn-github-actions/understanding-github-actions) — Conheça o robô da nuvem.
