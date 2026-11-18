function renderCartProduct(card, product) {
  card.innerHTML =
    '<img class="product-icon" alt="" />' +
    '<div class="product-details"><h2></h2><div class="price"></div><p></p>' +
    '<button type="button" class="buy-btn_red">Убрать из корзины</button></div>';

  card.querySelector('.product-icon').src = product.image;
  card.querySelector('h2').textContent = product.title;
  card.querySelector('p').textContent = 'Минимальный заказ: ' + product.description + ' кг';
  card.querySelector('.price').textContent = product.price.toLocaleString('ru-RU') + ' MDL/KG';

  card.querySelector('button').addEventListener('click', function () {
    localStorage.setItem('buy-' + product.title, '0');
    card.remove();
    updateCartCount();
    renderCartTotal();
    if (!catalog.querySelector('.buy-panel')) {
      const emptyMessage = document.createElement('p');
      emptyMessage.className = 'empty-cart';
      emptyMessage.textContent = 'Корзина пуста.';
      catalog.appendChild(emptyMessage);
    }
  });
}

function updateCartCount() {
  const cartTotal = products.filter(function (product) {
    return localStorage.getItem('buy-' + product.title) === '1';
  }).length;
  localStorage.setItem('counter', cartTotal);
  const checkoutButton = document.getElementById('checkout-btn');
  if (checkoutButton) checkoutButton.hidden = cartTotal === 0;
}

function calculateCartTotal(cartProducts) {
  return cartProducts.reduce(function (sum, product) {
    return sum + product.price* 1.6;
  }, 0);
}

/*function renderCartTotal() {
  let totalElement = document.getElementById('cart-total');
  if (!totalElement) {
    totalElement = document.createElement('p');
    totalElement.id = 'cart-total';
    totalElement.className = 'cart-total';
    catalog.parentNode.insertBefore(totalElement, catalog);
  }
  const cartProducts = products.filter(function (product) {
    return localStorage.getItem('buy-' + product.title) === '1';
  });
  totalElement.textContent = 'Итого в корзине: ' + calculateCartTotal(cartProducts).toFixed(2) + ' MDL';
}*/

let cartProductsCount = 0;
products.forEach(function (product) {
  if (localStorage.getItem('buy-' + product.title) !== '1') return;

  const card = document.createElement('section');
  card.className = 'buy-panel';
  renderCartProduct(card, product);
  catalog.appendChild(card);
  cartProductsCount += 1;
});

updateCartCount();
renderCartTotal();

const checkoutButton = document.getElementById('checkout-btn');
if (checkoutButton) {
  checkoutButton.addEventListener('click', function () {
    const cartProducts = products.filter(function (product) {
      return localStorage.getItem('buy-' + product.title) === '1';
    });
    if (cartProducts.length === 0) return;

    const totalCost = calculateCartTotal(cartProducts);
    const balance = Number(localStorage.getItem('totalValueMDL')) || 0;
    const status = document.getElementById('checkout-status');

    if (balance < totalCost) {
      status.textContent = 'Недостаточно средств. Нужно: ' + totalCost.toFixed(2) + ' MDL.';
      return;
    }

    localStorage.setItem('totalValueMDL', (balance - totalCost).toFixed(2));
    cartProducts.forEach(function (product) {
      localStorage.setItem('bought-' + product.title, '1');
      localStorage.setItem('buy-' + product.title, '0');
    });
    localStorage.setItem('counter', '0');
    window.location.href = 'CompliteCart.html';
  });
}

if (cartProductsCount === 0) {
  const emptyMessage = document.createElement('p');
  emptyMessage.className = 'empty-cart';
  emptyMessage.textContent = 'Корзина пуста.';
  catalog.appendChild(emptyMessage);
}
function calculateCartTotal(cartProducts) {
  return cartProducts.reduce(function (sum, product) {
    return sum + product.price * 1.6;
  }, 0);
}

function renderCartTotal() {
  let totalElement = document.getElementById('cart-total');
  if (!totalElement) {
    totalElement = document.createElement('p');
    totalElement.id = 'cart-total';
    totalElement.className = 'cart-total';
    catalog.parentNode.insertBefore(totalElement, catalog);
  }
  const cartProducts = products.filter(function (product) {
    return localStorage.getItem('buy-' + product.title) === '1';
  });
  totalElement.textContent = 'Итого в корзине: ' + calculateCartTotal(cartProducts).toFixed(2) + ' MDL';
}