const demoBtn = document.querySelector('#toast__demo--btn');
const demoToast = document.querySelector('.toast--demo');


const toastExampleCloseBtn = document.querySelector("#demo--close-toast");

toastExampleCloseBtn.addEventListener("click", () => {
    demoToast.style.display = "none";
})

demoBtn.addEventListener("click", () => {
    demoToast.style.display = "block";
    setTimeout(() => demoToast.style.display = "none", 3000)
})