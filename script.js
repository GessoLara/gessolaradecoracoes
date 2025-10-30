// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contato-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            form.reset();
        });
    }
});

