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

async function fetchRepository() {
    const language = document.getElementById('language-select').value;
    if (!language) return;

    updateState('loading');

    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`);

        if (!response.ok) {
            // Se o status for 403, provavelmente é Rate Limit da API do GitHub
            if (response.status === 403) {
                throw new Error('RateLimit');
            }
            throw new Error('Erro na resposta da API');
        }

        const data = await response.json();        const repos = data.items;

        if (!repos || repos.length === 0) {
            throw new Error('Nenhum repositório encontrado');
        }

        const randomRepo = repos[Math.floor(Math.random() * repos.length)];

        document.getElementById('repo-name').textContent = randomRepo.name || 'N/A';
        document.getElementById('repo-link').href = randomRepo.html_url || '#';
        document.getElementById('repo-description').textContent = randomRepo.description || 'N/A';
        document.getElementById('repo-stars').textContent = randomRepo.stargazers_count || '0';
        document.getElementById('repo-forks').textContent = randomRepo.forks_count || '0';
        document.getElementById('repo-issues').textContent = randomRepo.open_issues_count || '0';

        updateState('success');
    } catch (error) {
        console.error(error);
        const errorMsg = document.querySelector('.error-msg');
        
        if (error.message === 'Nenhum repositório encontrado') {
            updateState('empty');
            alert('Nenhum repositório encontrado para esta linguagem.');
        } else if (error.message === 'RateLimit') {
            if (errorMsg) errorMsg.textContent = 'Limite de buscas atingido. Aguarde um minuto e tente novamente.';
            updateState('error');
        } else {
            if (errorMsg) errorMsg.textContent = 'Erro ao buscar repositórios. Tente novamente.';
            updateState('error');
        }
    }
}

/**
 * Inicializa os Event Listeners e o estado da aplicação
 */
function init() {
    const searchBtn = document.getElementById('search-btn');
    const retryBtn = document.getElementById('retry-btn');
    const refreshBtn = document.getElementById('refresh-btn');

    if (searchBtn) searchBtn.addEventListener('click', fetchRepository);
    if (retryBtn) retryBtn.addEventListener('click', fetchRepository);
    if (refreshBtn) refreshBtn.addEventListener('click', fetchRepository);
}

// Inicializa o app quando o DOM estiver pronto
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}

// --- NÃO MEXA DAQUI PARA BAIXO ---
if (typeof module !== 'undefined') {
    module.exports = { updateState, fetchRepository, init };
}
