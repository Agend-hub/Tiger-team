// Альт. название
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let rnd = randInt(1, 2);
console.log(rnd);
if (rnd === 1) {
    
    const Yellow = document.querySelector('.yellow');
    Yellow.style.color = '#d4a626';
    Yellow.textContent = 'Stefan';
}