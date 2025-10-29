// script.js
document.addEventListener('DOMContentLoaded', () => {
    const galeriaLinks = document.querySelectorAll('#servicos a');

    galeriaLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Simulação de abertura de galeria
            const servico = link.closest('li').querySelector('h3').textContent;
            
            alert(`Funcionalidade em desenvolvimento: Abrir galeria para: ${servico}.`);
            
            // Aqui seria onde o código para abrir uma galeria modal seria implementado.
            // Por enquanto, usamos um alerta simples para mostrar que o botão está funcionando.
        });
    });

    // Adicionar funcionalidade para o botão de Enviar Mensagem (simulação)
    const form = document.querySelector('#contato form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            form.reset();
        });
    }
});

