// Scroll suave para âncoras

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.length > 1 && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Destacar menu ativo automaticamente

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href'))) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Feedback visual ao enviar formulários

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Feedback acessível
        const msg = document.createElement('div');
        msg.textContent = 'Formulário enviado com sucesso!';
        msg.className = 'alert alert-success mt-3';
        form.parentNode.insertBefore(msg, form.nextSibling);
        setTimeout(() => msg.remove(), 3000);
        form.reset();
    });
});
