const btnMenuOpen = document.querySelector('#btn--menu-open');
const btnMenuClose = document.querySelector('#btn--menu-close');

const sideContentBar = document.querySelector('.side--bar-content');
const fillerContent = document.querySelector('.filler--content');


btnMenuOpen.addEventListener('click', () => {
    btnMenuClose.style.display = 'block';
    btnMenuOpen.style.display = 'none';
    sideContentBar.style.display = "block";
    fillerContent.style.display = "none"
})

btnMenuClose.addEventListener('click', () => {
    btnMenuClose.style.display = 'none';
    btnMenuOpen.style.display = 'block';
    sideContentBar.style.display = "none";
    fillerContent.style.display = "block"

})