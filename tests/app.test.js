const fs = require('fs');
const path = require('path');

const htmlPath = path.join(process.cwd(), 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

describe('App Logic - API Integration', () => {
    let app;

    beforeEach(() => {
        // Injetamos o HTML diretamente no document global do Jest
        document.body.innerHTML = html;
        
        // Mock do fetch global
        global.fetch = jest.fn();

        jest.resetModules();
        app = require('../src/app.js');
    });

    test('fetchRepository deve preencher os dados em caso de sucesso', async () => {
        // Mock de uma resposta da API do GitHub
        const mockRepo = {
            name: 'Repo-Teste',
            description: 'Descrição de teste',
            stargazers_count: 10,
            forks_count: 5,
            open_issues_count: 2
        };

        global.fetch.mockResolvedValue({
            ok: true,
            json: async () => ({ items: [mockRepo] })
        });

        // Simulamos a seleção de uma linguagem
        document.getElementById('language-select').value = 'javascript';

        await app.fetchRepository();

        expect(document.getElementById('repo-name').textContent).toBe('Repo-Teste');
        expect(document.getElementById('state-success').classList.contains('hidden')).toBe(false);
    });

    test('fetchRepository deve mostrar estado de erro se a API falhar', async () => {
        global.fetch.mockRejectedValue(new Error('Falha na rede'));
        
        document.getElementById('language-select').value = 'javascript';

        await app.fetchRepository();

        expect(document.getElementById('state-error').classList.contains('hidden')).toBe(false);
    });
});
