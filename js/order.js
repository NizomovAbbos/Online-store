const API_PATH = 'http://localhost:5000/'

fetch(`${API_PATH}/products`)
  .then(response => response.json())
  .then(products => {
    const cartItems = document.getElementById('cart-items');
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = product.name;
      cartItems.appendChild(li);
    });
  });

document.addEventListener('click', event => {
    if (event.target.matches('.add-to-cart-btn')) {
        const product = event.target.dataset;
        fetch(`${API_PATH}/product/${product.id}`, { method: 'POST' })
        .then(response => response.json())
        .then(cart => {
            const cartTotal = document.getElementById('cart-total');
            cartTotal.textContent = cart.total;
        });
    }
});

document.addEventListener('click', event => {
    if (event.target.matches('.remove-from-cart-btn')) {
      const product = event.target.dataset;
      fetch(`${API_PATH}/product/${product.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(cart => {
            const cartTotal = document.getElementById('cart-total');
          cartTotal.textContent = cart.total;
          event.target.parentElement.remove();
        });
    }
});