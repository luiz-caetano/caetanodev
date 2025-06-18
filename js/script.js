const modoBtn = document.getElementById('modo-btn');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const body = document.body;

// Verifica se há preferência salva no localStorage
const darkMode = localStorage.getItem('darkMode') === 'true';
if (darkMode) {
    body.classList.add('dark-mode');
    modoBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

// Alterna entre modo claro e escuro
modoBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    // Salva a preferência no localStorage
    localStorage.setItem('darkMode', isDark);

    // Atualiza o ícone do botão
    modoBtn.innerHTML = isDark 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação para botões CTA ao carregar a página
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Menu Hamburguer Toggle

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
  
  // Alternar ícone (hamburguer vs X)
  hamburgerBtn.innerHTML = navMenu.classList.contains('active')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});
