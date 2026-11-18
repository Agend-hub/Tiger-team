
document.addEventListener('DOMContentLoaded', () => {
    
    if (productsBtn) {
    productsBtn.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
    }
    if (cartBtn) {
    cartBtn.addEventListener('click', function () {
        if (IsHaveAccount === 0) {
            window.location.href = 'Login.html';
        } else {
            window.location.href = 'Cart.html';
        }
    });
    }
    if (aboutBtn) {
    aboutBtn.addEventListener('click', function () {
        window.location.href = 'About.html';
    });
    }
});
if (mainBtn) {
mainBtn.addEventListener('click', function () {
    window.location.href = 'Main.html';
  });
}
if (MarketBtn) {
MarketBtn.addEventListener('click', function () {
    window.location.href = 'Cart.html';
  });
}
if (WalletBtn) {
WalletBtn.addEventListener('click', function () {
    window.location.href = 'TopUp.html';
  });
}

const topupForm = document.getElementById('topup-form');
if (topupForm) {
    topupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedAmount = topupForm.querySelector('input[name="amount"]:checked');
        const status = document.getElementById('topup-status');
        if (!selectedAmount) {
            status.textContent = 'Сначала выберите сумму пополнения.';
            return;
        }

        totalValue += Number(selectedAmount.value);
        localStorage.setItem('totalValueMDL', totalValue.toFixed(2));
        if (Mainvalue) {
            Mainvalue.textContent = 'MDL:' + totalValue.toFixed(2);
        }
        status.textContent = 'Баланс пополнен на ' + selectedAmount.value + ' MDL.';
        selectedAmount.checked = false;
    });
}
