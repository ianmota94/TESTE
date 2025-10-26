// ====================================
// 1. MODO ESCURO (DARK MODE)
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    // 1.1. Seleciona o botão de alternância de tema
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Chave para armazenar a preferência no navegador
    const STORAGE_KEY = 'themePreference';

    // 1.2. Função para aplicar o tema
    function applyTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            themeToggle.textContent = 'Modo Claro'; // Altera o texto do botão
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = 'Modo Escuro'; // Altera o texto do botão
        }
    }

    // 1.3. Verifica a preferência salva ao carregar a página
    const savedPreference = localStorage.getItem(STORAGE_KEY);

    if (savedPreference) {
        // Se houver uma preferência salva, aplica-a
        applyTheme(savedPreference === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não houver preferência salva, verifica a preferência do sistema operacional
        applyTheme(true); 
    } else {
        // Padrão: Modo Claro
        applyTheme(false);
    }
    
    // 1.4. Adiciona o listener para o clique no botão
    themeToggle.addEventListener('click', () => {
        const isCurrentlyDark = body.classList.contains('dark-mode');
        
        // Alterna o tema
        applyTheme(!isCurrentlyDark);
        
        // Salva a nova preferência no armazenamento local
        const newPreference = !isCurrentlyDark ? 'dark' : 'light';
        localStorage.setItem(STORAGE_KEY, newPreference);
    });
});

// ====================================
// 2. EFEITO VISUAL: HOVER MAIS SUAVE
// ====================================

// Adicionar um efeito de sombra suave ao passar o mouse nos cartões de vantagem.
// OBS: Embora este efeito possa ser feito puramente com CSS, vamos usar JS para
// selecionar os elementos e demonstrar a manipulação do DOM.

document.addEventListener('DOMContentLoaded', () => {
    const vantagemItems = document.querySelectorAll('.vantagem-item');

    vantagemItems.forEach(item => {
        // Adiciona um evento quando o mouse entra no elemento
        item.addEventListener('mouseenter', () => {
            // Usa o JS para mudar o estilo (aumenta levemente a sombra)
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)'; 
            item.style.transform = 'translateY(-3px)'; // Move ligeiramente para cima
            item.style.transition = 'all 0.3s ease'; // Adiciona transição
        });

        // Adiciona um evento quando o mouse sai do elemento
        item.addEventListener('mouseleave', () => {
            // Retorna o estilo ao normal
            // Verifica se o modo escuro está ativo para manter a sombra correta
            const shadow = document.body.classList.contains('dark-mode') ? 
                '0 2px 10px rgba(0, 0, 0, 0.5)' : 
                '0 2px 5px rgba(0, 0, 0, 0.1)';

            item.style.boxShadow = shadow;
            item.style.transform = 'translateY(0)';
        });
    });
});


// ====================================
// 3. SUGESTÃO: DESTAQUE NO BOTÃO PRINCIPAL
// ====================================

// O botão principal ("Quero Validar Minhas Metas") vai ter um leve pulso
// para chamar mais atenção, usando uma classe de animação.

document.addEventListener('DOMContentLoaded', () => {
    const mainButton = document.querySelector('.hero .primary-btn');
    // Adiciona uma classe CSS que irá aplicar a animação (ver CSS)
    mainButton.classList.add('pulse-animation');
});