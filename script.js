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

    // 1.2. Verifica a preferência salva ao carregar a página
    const savedPreference = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    let initialThemeIsDark = false;
    
    if (savedPreference) {
        // Se houver preferência salva, usa ela
        initialThemeIsDark = savedPreference === 'dark';
    } else if (prefersDark) {
        // Se não houver, usa a preferência do sistema operacional
        initialThemeIsDark = true; 
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
// 2. EFEITO VISUAL: HOVER MAIS SUAVE (Manipulação de Transform para os cartões)
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
// 3. MENU HAMBURGUER
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            // Alterna a classe 'active' no menu para exibir/ocultar
            navList.classList.toggle('active');
        });
        
        // Fechar o menu quando um link interno é clicado (útil em mobile)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Fechar após o clique
                navList.classList.remove('active');
            });
        });
    }
});