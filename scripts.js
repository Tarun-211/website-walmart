document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];

    function updateCart() {
        const cartItemsList = document.getElementById('cart-items');
        cartItemsList.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(listItem);
            total += item.price;
        });

        document.getElementById('total').innerText = total.toFixed(2);
    }

    window.addToCart = (name, price) => {
        cartItems.push({ name, price });
        updateCart();
        alert(`${name} added to cart!`);
    };

    window.goToPayment = () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        window.location.href = 'payment.html';
    };

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
