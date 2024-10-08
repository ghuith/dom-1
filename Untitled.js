// Sélection des éléments principaux
const cartItems = document.querySelectorAll('.cart-item');
const totalPriceElement = document.querySelector('.total-price');

// Fonction pour calculer le prix total
function updateTotalPrice() {
  let total = 0;
  cartItems.forEach(item => {
    const price = parseFloat(item.getAttribute('data-price'));
    const quantity = parseInt(item.querySelector('.item-quantity').textContent);
    total += price * quantity;
  });
  totalPriceElement.textContent = total.toFixed(1) + "€";
}

// Fonction pour ajuster la quantité d'un article
function adjustQuantity(item, delta) {
  const quantityElement = item.querySelector('.item-quantity');
  let quantity = parseInt(quantityElement.textContent);
  quantity += delta;
  if (quantity < 1) quantity = 1;
  quantityElement.textContent = quantity;
  updateTotalPrice();
}

function removeItem(item) {
  item.remove();
  updateTotalPrice();
}

function toggleLike(button) {
  button.classList.toggle('liked'); 
  // button.style.backgroundColor = button.classList.contains('liked') ? 'red' : 'bleu' ;
}


cartItems.forEach(item => {
  const btnIncrease = item.querySelector('.btn-increase');
  const btnDecrease = item.querySelector('.btn-decrease');
  const btnRemove = item.querySelector('.btn-remove');
  const btnLike = item.querySelector('.btn-like');

  btnIncrease.addEventListener('click', () => adjustQuantity(item, 1));
  btnDecrease.addEventListener('click', () => adjustQuantity(item, -1));
  btnRemove.addEventListener('click', () => removeItem(item));
  btnLike.addEventListener('click', () => toggleLike(btnLike ));

});

