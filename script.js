const contentBtnDown = document.querySelector("#content--btn-down");
const contentBtnUp = document.querySelector("#content--btn-up");
const sideBar = document.querySelector(".main__container--sidebar ");
const mainContent = document.querySelector(".main__container--content");

contentBtnDown.addEventListener("click", () => {
    sideBar.style.display = "block";
    mainContent.style.display = "none";
    contentBtnUp.style.display = "block";
    contentBtnDown.style.display = "none";
})

contentBtnUp.addEventListener("click", () => {
    sideBar.style.display = "none";
    mainContent.style.display = "block";
    contentBtnUp.style.display = "none";
    contentBtnDown.style.display = "block";
})