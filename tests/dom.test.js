const fs = require('fs');
const path = require('path');

// Polyfills para compatibilidade com JSDOM
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('DOM Structure', () => {
    let dom;
    let container;

    beforeEach(() => {
        dom = new JSDOM(html);
        container = dom.window.document.body;
    });

    test('deve ter o título correto', () => {
        const h1 = container.querySelector('h1');
        expect(h1.textContent).toBe('GitHub Random Repo');
    });

    test('deve ter todos os containers de estado', () => {
        expect(container.querySelector('#state-empty')).not.toBeNull();
        expect(container.querySelector('#state-loading')).not.toBeNull();
        expect(container.querySelector('#state-error')).not.toBeNull();
        expect(container.querySelector('#state-success')).not.toBeNull();
    });

    test('apenas o estado "empty" deve estar visível inicialmente', () => {
        const empty = container.querySelector('#state-empty');
        const loading = container.querySelector('#state-loading');
        const error = container.querySelector('#state-error');
        const success = container.querySelector('#state-success');

        expect(empty.classList.contains('hidden')).toBe(false);
        expect(loading.classList.contains('hidden')).toBe(true);
        expect(error.classList.contains('hidden')).toBe(true);
        expect(success.classList.contains('hidden')).toBe(true);
    });

    test('deve ter os botões principais', () => {
        expect(container.querySelector('#search-btn')).not.toBeNull();
        expect(container.querySelector('#retry-btn')).not.toBeNull();
        expect(container.querySelector('#refresh-btn')).not.toBeNull();
    });
});
