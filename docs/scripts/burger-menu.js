
const burgerMenuBtn = document.querySelector(".burger-menu");
const navLeft = document.querySelector(".nav-left");
const navRigth = document.querySelector(".nav-right");
const burgerIcon = document.querySelector(".burger-icon");

burgerMenuBtn.addEventListener("click", function () {
    if (navLeft.style.display === "flex") {
        navLeft.style.display = "none";
        navRigth.style.display = "none";
        burgerIcon.innerHTML = "&#9776;";
    } else {
        navLeft.style.display = "flex";
        navRigth.style.display = "flex";
        burgerIcon.innerHTML = "&times;";
    }
});