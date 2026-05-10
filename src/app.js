/**
 * TODO 2: Criar a função updateState(state)
 * (Você já fez esta parte e ela está ótima!)
 */
function updateState(state) {
    const states = {
        'empty': document.getElementById('state-empty'),
        'loading': document.getElementById('state-loading'),
        'error': document.getElementById('state-error'),
        'success': document.getElementById('state-success')
    };

    for (let key in states) {
        const element = states[key];
        if (element) element.classList.add('hidden');
    }
    
    if (states[state]) {
        states[state].classList.remove('hidden');
    }
}

/**
 * TODO 3: Criar a função fetchRepository()
 * Essa função deve ser ASSÍNCRONA (async).
 * 
 * Passos sugeridos:
 * 1. Pegar o valor da linguagem selecionada no dropdown.
 * 2. Se não houver linguagem, não faz nada.
 * 3. Chamar updateState('loading').
 * 4. Usar o 'fetch' com a URL da API (use template string com a linguagem).
 * 5. Se a resposta for OK (res.ok):
 *    - Converter para JSON.
 *    - Sortear um repositório da lista (Math.random).
 *    - Preencher os dados no HTML (repo-name, repo-description, etc).
 *    - Chamar updateState('success').
 * 6. Se der erro (catch):
 *    - Chamar updateState('error').
 */
async function fetchRepository() {
    const language = document.getElementById('language-select').value;
    if (!language) return;

    updateState('loading');

    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`);
        
        if (!response.ok) throw new Error('Erro na resposta da API');

        const data = await response.json();
        const repos = data.items;
        
        if (repos.length === 0) throw new Error('Nenhum repositório encontrado');

        const randomRepo = repos[Math.floor(Math.random() * repos.length)];

        document.getElementById('repo-name').textContent = randomRepo.name || 'N/A';
        document.getElementById('repo-description').textContent = randomRepo.description || 'N/A';
        document.getElementById('repo-stars').textContent = randomRepo.stargazers_count || '0';
        document.getElementById('repo-forks').textContent = randomRepo.forks_count || '0';
        document.getElementById('repo-issues').textContent = randomRepo.open_issues_count || '0';

        updateState('success');
    } catch (error) {
        console.error(error);
        updateState('error');
    }
}


// --- NÃO MEXA DAQUI PARA BAIXO ---
if (typeof module !== 'undefined') {
    module.exports = { updateState, fetchRepository };
}
