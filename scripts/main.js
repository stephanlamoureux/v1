// Hamburger Menu

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
    navbar.classList.toggle("showNav");
    menu.classList.toggle("showClose");
}

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleMenu);
    }
);