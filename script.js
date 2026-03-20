document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    // Adiciona uma sombra ao navbar quando o usuário rolar a página
    window.addEventListener('scroll', function() {
        if (window.scrollY > 850) {
            // Adiciona uma classe para dar um fundo sólido e uma sombra
            navbar.style.backgroundColor = '#5a5a5a';
            navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.02)';
        } else {
            // Remove a classe quando o usuário volta ao topo
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Rolagem suave para os links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});