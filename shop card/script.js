document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const totalElement = document.getElementById('total');
    let total = 0.00;

    items.forEach(item => {
        const quantityElement = item.querySelector('.quantity');
        const increaseBtn = item.querySelector('.btn-increase');
        const decreaseBtn = item.querySelector('.btn-decrease');
        const likeBtn = item.querySelector('.btn-like');
        const deleteBtn = item.querySelector('.btn-delete');

        // Initial price and quantity of the item
        const itemPrice = 20.00;
        let itemQuantity = 1;

        // Update total price based on the quantity
        const updateTotal = () => {
            total = total - itemPrice * itemQuantity;
            itemQuantity = parseInt(quantityElement.textContent);
            total = total + itemPrice * itemQuantity;
            totalElement.textContent = total.toFixed(2);
        };

        // Event listeners for buttons
        increaseBtn.addEventListener('click', () => {
            itemQuantity++;
            quantityElement.textContent = itemQuantity;
            updateTotal();
        });

        decreaseBtn.addEventListener('click', () => {
            if (itemQuantity > 1) {
                itemQuantity--;
                quantityElement.textContent = itemQuantity;
                updateTotal();
            }
        });

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });

        deleteBtn.addEventListener('click', () => {
            item.remove();
            total = total - itemPrice * itemQuantity;
            totalElement.textContent = total.toFixed(2);
        });

        // Initial total calculation
        updateTotal();
    });
});
