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

// Mapa de cores para as linguagens (Padrão GitHub)
const languageColors = {
    'javascript': '#f1e05a',
    'python': '#3572A5',
    'java': '#b07219',
    'typescript': '#3178c6',
    'csharp': '#178600',
    'c++': '#f34b7d',
    'html': '#e34c26',
    'css': '#563d7c',
    'php': '#4F5D95',
    'ruby': '#701516'
};

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

        const data = await response.json();
        const repos = data.items;

        if (!repos || repos.length === 0) {
            throw new Error('Nenhum repositório encontrado');
        }

        const randomRepo = repos[Math.floor(Math.random() * repos.length)];

        document.getElementById('repo-name').textContent = randomRepo.name || 'N/A';
        document.getElementById('repo-link').href = randomRepo.html_url || '#';
        
        // Atualiza a linguagem e a cor da bolinha
        const repoLang = randomRepo.language || 'N/A';
        document.getElementById('repo-language').textContent = repoLang;
        const colorDot = document.querySelector('.repo-language-color');
        if (colorDot) {
            colorDot.style.backgroundColor = languageColors[repoLang.toLowerCase()] || '#8b949e';
        }

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
 * Alterna entre tema Dark e Light
 */
function toggleTheme() {
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

/**
 * Inicializa os Event Listeners e o estado da aplicação
 */
function init() {
    const searchBtn = document.getElementById('search-btn');
    const retryBtn = document.getElementById('retry-btn');
    const refreshBtn = document.getElementById('refresh-btn');
    const themeBtn = document.getElementById('theme-toggle');

    if (searchBtn) searchBtn.addEventListener('click', fetchRepository);
    if (retryBtn) retryBtn.addEventListener('click', fetchRepository);
    if (refreshBtn) refreshBtn.addEventListener('click', fetchRepository);
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
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
