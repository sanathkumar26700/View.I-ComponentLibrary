let btnMain = document.querySelector('.btn-main');
let btnMinus = document.querySelector('.btn-minus');
let btnPlus = document.querySelector('.btn-plus');

btnMain.addEventListener('click', () => {
    btnMain.innerText = '1';
    btnMinus.style.display = 'inline-block';
    btnPlus.style.display = 'inline-block';
});

btnPlus.addEventListener('click', () => {
    btnMain.innerText = Number(btnMain.innerText) + 1;
});

btnMinus.addEventListener('click', () => {
    if (btnMain.innerText <= '1') {
        btnMain.innerText = 'Add to cart';
        btnMinus.style.display = 'none';
        btnPlus.style.display = 'none';
    } else {
        btnMain.innerText = Number(btnMain.innerText) - 1;
    }
});