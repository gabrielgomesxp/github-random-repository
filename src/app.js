/**
 * TODO 1: Selecionar os elementos do DOM.
 * Você vai precisar de:
 * - Os 4 containers de estado: state-empty, state-loading, state-error, state-success.
 * - O botão de busca: search-btn.
 * - O select de linguagem: language-select.
 * 
 * Dica: Use document.getElementById('id-do-elemento')
 */

// Escreva aqui as variáveis (ex: const stateEmpty = ...)


/**
 * TODO 2: Criar a função updateState(state)
 * Essa função deve:
 * 1. Receber uma string 'empty', 'loading', 'error' ou 'success'.
 * 2. Esconder todos os 4 containers (adicionando a classe 'hidden').
 * 3. Mostrar apenas o container solicitado (removendo a classe 'hidden').
 * 
 * Dica: Você pode fazer isso com vários 'if' ou de uma forma mais 
 * elegante usando um array/objeto e um loop.
 */
function updateState(state) {
    const states = {
        'empty': document.getElementById('state-empty'),
        'loading': document.getElementById('state-loading'),
        'error': document.getElementById('state-error'),
        'success': document.getElementById('state-success')
    };

    // Esconde todos os containers 
    for (let key in states) {
        const element = states[key];
        if (element) {
            element.classList.add('hidden');
        }
    }
    
    // Mostra o container solicitado
    if (states[state]) {
        states[state].classList.remove('hidden');
    }
    
}


// --- NÃO MEXA DAQUI PARA BAIXO ---
// Isso permite que os testes funcionem no seu código
if (typeof module !== 'undefined') {
    module.exports = { updateState };
}
