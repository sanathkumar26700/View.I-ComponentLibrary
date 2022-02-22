const modalDemoBtn = document.querySelector('#modal__demo--btn');
const modalCloseBtn = document.querySelector('#modal__close--btn');
const demoModal = document.querySelector('.modal__container');


const toastExampleCloseBtn = document.querySelector("#demo--close-toast");

modalCloseBtn.addEventListener("click", () => {
    demoModal.style.display = "none";
    document.body.style.overflow = "visible"
})


modalDemoBtn.addEventListener("click", () => {
    demoModal.style.display = "flex";
    document.body.style.overflow = "hidden"
})