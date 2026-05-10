# 🎨 Design Systems e Temas: A Planta e a Decoração

Você já viu como as grandes empresas (como o próprio GitHub) conseguem manter as cores perfeitas em todo o site? Elas não usam cores "na mão", elas usam uma **Planta de Decoração** chamada Design System.

## 1. Variáveis CSS: O Nome das Tintas
Imagina que você está pintando uma mansão. Em vez de decorar o código da cor (ex: `#0d1117`), você cria um balde de tinta com um nome fácil: `--bg-color`.
- Se você quiser mudar a cor da casa inteira, você só troca o que tem dentro do balde `--bg-color`, e o site todo se atualiza sozinho.

## 2. O GitHub Primer (A Planta Oficial)
Neste projeto, não inventamos as cores. Usamos o **Primer**, que é o conjunto de regras de design do GitHub.
- Aprendemos que o "Preto do GitHub" não é preto puro, é um azul marinho muito escuro que não cansa os olhos.
- Aprendemos que o "Branco do GitHub" no modo Light é um cinza bem clarinho que parece papel.

## 3. Dark Mode e Light Mode: A Troca de Estação
Para fazer o botão de troca de tema, usamos uma técnica muito simples:
1. Definimos todas as cores padrão no `:root` (Modo Dark).
2. Criamos uma "fantasia" chamada `.light-theme`. Quando o `body` veste essa fantasia, as cores dos baldes (`--bg-color`, etc.) mudam para as cores claras.
3. No JavaScript, o botão apenas diz ao site: "Ei, vista (ou tire) a fantasia do Modo Light!".

## 📚 Para ler mais (Links oficiais)
- [Variáveis CSS (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties) — Como criar seus baldes de tinta.
- [GitHub Primer Design System](https://primer.style/foundations/color) — A fonte oficial de todas as cores do projeto.
- [Acessibilidade em Cores](https://web.dev/accessible-colors/) — Por que o contraste é importante.
