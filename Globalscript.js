//Main button
const mainBtn = document.getElementById('main-btn');
const productsBtn = document.getElementById('products-btn');
const cartBtn = document.getElementById('cart-btn');
const aboutBtn = document.getElementById('about-btn');
const MarketBtn = document.getElementById('market-btn');
const WalletBtn = document.getElementById('wallet-btn');
// Account
let totalValue = Number(localStorage.getItem("totalValueMDL")) || 0.00;
let IsHaveAccount = Number(localStorage.getItem("IsHaveAccount")) || 0;
const accountBtn = document.querySelector('.account');
const LoginAccount = document.getElementById('LoginAccount');
const Mainvalue = document.querySelector('.main_value');
//Cart Management
const products = [
  { title: "Молдавские помидоры", description: "50", price: 50, image: "../img/Tomato.png", isbuy: true },
  { title: "Картошки", description: "100", price: 10, image: "../img/Potate.png", isbuy: true },
  { title: "Ананасы", description: "10", price: 100, image: "../img/Ananas.png", isbuy: true },
  { title: "Яблоки", description: "50", price: 25, image: "../img/Apple.png", isbuy: true },
  { title: "Сыр", description: "100", price: 85, image: "../img/Cheese.png", isbuy: true },
  { title: "Огурцы", description: "10", price: 15, image: "../img/Pickle.png", isbuy: true }
];
const catalog = document.getElementById('catalog');
const cartCount = document.getElementById('cart-count');
