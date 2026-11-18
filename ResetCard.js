let resetCardFirstKeyAt = 0;

document.addEventListener('keydown', function (event) {
  if (event.repeat || event.ctrlKey || event.altKey || event.metaKey) return;

  const key = event.key.toLowerCase();
  if (key === 'g') {
    resetCardFirstKeyAt = Date.now();
    return;
  }

  if (key !== 'r' || Date.now() - resetCardFirstKeyAt > 1500) return;
  resetCardFirstKeyAt = 0;

  products.forEach(function (product) {
    localStorage.removeItem('bought-' + product.title);
  });
  window.location.reload();
});
