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

