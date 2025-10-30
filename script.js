// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o SimpleLightbox para os itens do portfólio
    // A classe '.gallery-grid a' garante que apenas os links dentro da galeria sejam afetados
    var lightbox = new SimpleLightbox('.gallery-grid a', {
        captionSelector: 'self', // Usa o data-caption do link
        captionsData: 'caption', // Usa o atributo data-caption
        captionDelay: 250,
        closeText: 'Fechar',
        navText: ['Anterior', 'Próximo'],
        history: false // Desativa a mudança de URL na lightbox
    });

// O formulário de contato agora usa a ação mailto no HTML, então o JavaScript de simulação foi removido.
});

