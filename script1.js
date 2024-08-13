const cartItems = [];

function addToCart(product, price) {
    cartItems.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = 'cart';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = $ {item.product} - $${item.price.toFixed(2)};
        cartList.appendChild(li);
    });
}

function proceedToPayment() {
    window.location.href = '#payment';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
    this.reset();
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment successful!');
    this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const logoImage = document.getElementById('logo-image');

    logoImage.addEventListener('mouseenter', () => {
        logoImage.style.animation = 'spin 1s ease-in-out forwards';
    });

    logoImage.addEventListener('mouseleave', () => {
        logoImage.style.animation = '';
    });
});