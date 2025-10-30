document.addEventListener('DOMContentLoaded', function() {
    // Simulação de envio de formulário (mantida para a simulação)
    const form = document.querySelector('.contato-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        });
    }

    // Inicialização do SimpleLightbox para o portfólio
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
        // Inicializa o Lightbox apenas para os itens que têm o atributo data-lightbox
        new SimpleLightbox('.portfolio-grid a', {
            navText: ['<', '>'],
            captionDelay: 250,
            captionSelector: 'img',
            captionType: 'attr',
            captionsData: 'alt',
            closeText: 'Fechar',
            nextText: 'Próximo',
            prevText: 'Anterior',
            quitOnImageClick: false
        });
    }
});
