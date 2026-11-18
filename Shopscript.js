
function render(card, p) {
  const isPurchased = localStorage.getItem('bought-' + p.title) === '1';
  card.innerHTML =
    '<img class="product-icon" alt="" />' +
    '<div class="product-details"><h2></h2><div class="price"></div><p></p>' +
    '<button type="button"></button></div>';

  card.querySelector('.product-icon').src = p.image;
  card.querySelector('h2').textContent = p.title;
  card.querySelector('p').textContent = 'Min ' + p.description + ' KG';
  card.querySelector('.price').textContent = p.price.toLocaleString('ru-RU') + ' MDL/KG';
  card.querySelector('p').textContent = "MDL:"+p.price+".00";
  const btn = card.querySelector('button');
  if (isPurchased) {
    btn.className = 'buy-btn_red';
    btn.textContent = 'Уже куплено';
    btn.disabled = true;
  } else if (p.isbuy) {
    btn.className = 'buy-btn';
    btn.textContent = 'Купить продукт';
  } else {
    btn.className = 'buy-btn_red';
    btn.textContent = 'Убрать из корзины';
  }

  btn.addEventListener('click', function () {
    if (isPurchased) return;
    if (IsHaveAccount === 0) {
      alert('Пожалуйста, войдите в систему, чтобы совершать покупки.');
      return;
    }
    p.isbuy = !p.isbuy;
    localStorage.setItem("buy-" + p.title, p.isbuy ? 0 : 1);
    render(card, p);
    updateCount();
  });
}

products.forEach(function (p) {
  const card = document.createElement('section');
  card.className = 'buy-panel';
  let IsBuy = Number(localStorage.getItem("buy-" + p.title)) || 0;
  if (IsHaveAccount === 1) {
    p.isbuy = !IsBuy;
  }
  else {
    p.isbuy = true;
  }
  console.log('Product updated:', p.title, p.isbuy);
  render(card, p);
  catalog.appendChild(card);
});

function updateCount() {
  count = products.filter(function (p) {
    return localStorage.getItem('buy-' + p.title) === '1';
  }).length;
  localStorage.setItem("counter", count);
  console.log('Count updated:', count);
  if (cartCount) cartCount.textContent = count;
  
}
const page = window.location.pathname.split('/').pop() || 'index.html';

updateCount(); 
