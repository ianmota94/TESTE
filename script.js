// ====================================
// 1. MODO ESCURO (DARK MODE) e ÍCONE SLIDER
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    const STORAGE_KEY = 'themePreference';

    // 1.1. Função para aplicar o tema e atualizar o ícone
    function applyTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            themeToggle.classList.add('active'); // Ativa o visual do slider
        } else {
            body.classList.remove('dark-mode');
            themeToggle.classList.remove('active'); // Desativa o visual do slider
        }
    }

    // 1.2. Define o tema inicial (FORÇANDO TEMA CLARO POR PADRÃO)
    const savedPreference = localStorage.getItem(STORAGE_KEY);
    let initialThemeIsDark = false;
    
    if (savedPreference) {
        // Se houver preferência salva, usa ela
        initialThemeIsDark = savedPreference === 'dark';
    } else {
        // Se NENHUMA preferência for salva, força o Tema Claro (initialThemeIsDark permanece false).
        // Ignoramos a preferência de cor do sistema operacional (prefers-color-scheme).
        initialThemeIsDark = false; 
    }
    
    // Aplica o tema inicial
    applyTheme(initialThemeIsDark);
    
    // 1.3. Adiciona o listener para o clique no interruptor
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isCurrentlyDark = body.classList.contains('dark-mode');
            
            // Alterna o tema
            applyTheme(!isCurrentlyDark);
            
            // Salva a nova preferência
            const newPreference = !isCurrentlyDark ? 'dark' : 'light';
            localStorage.setItem(STORAGE_KEY, newPreference);
        });
    }
});

// ====================================
// 2. EFEITO VISUAL: HOVER MAIS SUAVE (Cartões de Vantagem)
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    const vantagemItems = document.querySelectorAll('.vantagem-item');

    vantagemItems.forEach(item => {
        // Quando o mouse entra
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-3px)'; // Move ligeiramente para cima
        });

        // Quando o mouse sai
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)'; // Volta ao normal
        });
    });
});


// ====================================
// 3. MENU HAMBURGUER (Funciona em todas as telas)
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            // Alterna a classe 'active' no menu para exibir/ocultar
            navList.classList.toggle('active');
        });
        
        // Fechar o menu quando um link interno é clicado (útil para navegação)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Fechar após o clique
                navList.classList.remove('active');
            });
        });
    }
});