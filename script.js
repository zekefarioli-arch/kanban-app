// script.js
document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        new Sortable(column, {
            animation: 300,
            handle: '.add-card-form',
            onEnd: (evt) => {
                // Handle card reordering logic here
                console.log('Card moved from', evt.from.id, 'to', evt.to.id);
            }
        });
    });

    // Add new card functionality
    const addCardForms = document.querySelectorAll('.add-card-form');
    addCardForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input[type="text"]');
            const cardText = input.value.trim();
            if (cardText) {
                const newCard = document.createElement('div');
                newCard.className = 'card';
                newCard.textContent = cardText;
                evt.to.appendChild(newCard);
                input.value = '';
            }
        });
    });
});
