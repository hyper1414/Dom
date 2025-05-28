document.addEventListener('DOMContentLoaded', () => {
    // Get all necessary DOM elements
    const totalPriceElement = document.querySelector('.total-price span');
    const cards = document.querySelectorAll('.card');

    // Initialize total price
    updateTotalPrice();

    // Add event listeners to each card
    cards.forEach(card => {
        const plusBtn = card.querySelector('.fa-plus-circle');
        const minusBtn = card.querySelector('.fa-minus-circle');
        const deleteBtn = card.querySelector('.fa-trash-alt');
        const heartBtn = card.querySelector('.fa-heart');
        const quantityElement = card.querySelector('.quantity');

        // Get item price from the card
        const priceText = card.querySelector('.card-body p:nth-child(2)').textContent;
        const price = parseFloat(priceText.replace('$', '').trim());

        // Plus button click handler
        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });

        // Minus button click handler
        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });

        // Delete button click handler
        deleteBtn.addEventListener('click', () => {
            card.remove();
            updateTotalPrice();
        });

        // Heart button click handler
        heartBtn.addEventListener('click', () => {
            heartBtn.classList.toggle('liked');
            heartBtn.style.color = heartBtn.classList.contains('liked') ? '#ff0000' : 'black';
        });
    });

    // Function to update total price
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.card').forEach(card => {
            const priceText = card.querySelector('.card-body p:nth-child(2)').textContent;
            const price = parseFloat(priceText.replace('$', '').trim());
            const quantity = parseInt(card.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = `${total.toFixed(2)} $`;
    }
});