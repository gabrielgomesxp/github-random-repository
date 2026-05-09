const fs = require('fs');
const path = require('path');

// No Jest com testEnvironment: 'jsdom', o 'document' já é global.
// Só precisamos carregar o HTML para dentro dele.
const htmlPath = path.join(process.cwd(), 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

describe('App Logic - State Management', () => {
    let app;

    beforeEach(() => {
        // Injetamos o nosso HTML no corpo do documento global do Jest
        // Pegamos apenas o que está dentro do body para evitar conflitos de tag <html>
        const bodyContent = html.match(/<body>([\s\S]*)<\/body>/i)[1];
        document.body.innerHTML = bodyContent;

        // Limpa o cache e carrega o seu app.js
        jest.resetModules();
        app = require('../src/app.js');
    });

    test('updateState("loading") deve mostrar apenas o loading e esconder os outros', () => {
        app.updateState('loading');

        const loading = document.getElementById('state-loading');
        const empty = document.getElementById('state-empty');

        expect(loading.classList.contains('hidden')).toBe(false);
        expect(empty.classList.contains('hidden')).toBe(true);
    });

    test('updateState("error") deve mostrar apenas o erro', () => {
        app.updateState('error');
        const error = document.getElementById('state-error');
        expect(error.classList.contains('hidden')).toBe(false);
    });
});
