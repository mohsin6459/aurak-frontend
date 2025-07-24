// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total-price');

  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    totalDisplay.textContent = '';
    return;
  }

  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement('div');
    div.innerHTML = `
      <p>${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">Remove</button></p>
    `;
    cartContainer.appendChild(div);
  });

  totalDisplay.textContent = `Total: $${total}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty.");
    return;
  }

  // Simulated order process
  document.getElementById('confirmation').textContent = 'Order placed! Thank you.';
  cart = [];
  localStorage.removeItem('cart');
  renderCart();
}

// Run on load for checkout.html
window.onload = function () {
  renderCart();
};
