const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const htmlPath = path.join(process.cwd(), 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

describe('App Logic - API Integration', () => {
    let app;

    beforeEach(() => {
        // Limpamos o cache de módulos e o DOM
        jest.resetModules();
        document.body.innerHTML = html;
        
        // Mock robusto do fetch usando polyfill
        const fetchMock = jest.fn();
        global.fetch = fetchMock;
        window.fetch = fetchMock;

        // Isolamos o carregamento do módulo
        jest.isolateModules(() => {
            app = require('../src/app.js');
        });
    });

    test('fetchRepository deve preencher os dados em caso de sucesso', async () => {
        const mockRepo = {
            name: 'Repo-Teste',
            html_url: 'https://github.com/teste/repo',
            description: 'Descrição de teste',
            stargazers_count: 10,
            forks_count: 5,
            open_issues_count: 2
        };

        global.fetch.mockResolvedValue({
            ok: true,
            json: async () => ({ items: [mockRepo] })
        });

        document.getElementById('language-select').value = 'javascript';

        await app.fetchRepository();

        // Aguarda microtasks (promessas) resolverem
        await new Promise(resolve => setTimeout(resolve, 0));

        expect(global.fetch).toHaveBeenCalled();
        expect(document.getElementById('repo-name').textContent).toBe('Repo-Teste');
        expect(document.getElementById('repo-link').href).toBe('https://github.com/teste/repo');
        expect(document.getElementById('state-success').classList.contains('hidden')).toBe(false);
    });

    test('fetchRepository deve mostrar estado de erro se a API falhar', async () => {
        global.fetch.mockRejectedValue(new Error('Falha na rede'));
        
        document.getElementById('language-select').value = 'javascript';

        await app.fetchRepository();

        expect(document.getElementById('state-error').classList.contains('hidden')).toBe(false);
    });
});
