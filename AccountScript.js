
if (accountBtn) {
    accountBtn.addEventListener('click', function () {
        if (IsHaveAccount === 1) {
        if (!confirm("Хотите выйти?")) {
            return;
        }
        }
        IsHaveAccount = IsHaveAccount ? 0 : 1;
        localStorage.setItem("IsHaveAccount", IsHaveAccount)
        if (IsHaveAccount === 1) {
        window.location.href = 'login.html';
        
        } else {
        
        location.reload();
        }
    });
}
if (LoginAccount) {
LoginAccount.addEventListener('submit', function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  IsHaveAccount = 1;
  localStorage.setItem("IsHaveAccount", IsHaveAccount);
  window.location.href = 'index.html';
  console.log('User logged in:', email, password);
});
}
let count = Number(localStorage.getItem("counter")) || 0;

console.log('Count updated:', count);
if (accountBtn) {
if (IsHaveAccount === 1) {
  Mainvalue.textContent = 'MDL:' + totalValue.toFixed(2);
  accountBtn.textContent = 'Выйти';
}
else {
  Mainvalue.remove();
  accountBtn.textContent = 'Войти';
}
}
