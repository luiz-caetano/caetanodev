const modoBtn = document.getElementById('modo-btn');
const body = document.body;
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');

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

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
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
            // Close mobile menu after clicking a link
            navUl.classList.remove('active');
        }
    });
});