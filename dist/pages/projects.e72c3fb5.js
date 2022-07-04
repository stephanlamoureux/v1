// Light Mode
const buttons = document.querySelectorAll(".mode-toggle");
const links = document.querySelectorAll(".working-on-link");
buttons.forEach((button)=>{
    button.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
        document.querySelectorAll(".fa-sun").forEach((icon)=>{
            icon.classList.toggle("fa-moon");
            icon.style.transition = "ease-in all 0.1s";
        });
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("lightMode", "enabled");
            hoverLightChevron();
        } else {
            localStorage.setItem("lightMode", "disabled");
            hoverDarkChevron();
        }
    });
});
if (localStorage.getItem("lightMode") === "enabled") {
    document.body.classList.add("light-mode");
    document.querySelectorAll(".fa-sun").forEach((icon)=>icon.classList.add("fa-moon"));
    hoverLightChevron();
} else hoverDarkChevron();
// Mobile Nav
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
menu.addEventListener("click", toggleMenu);
function toggleMenu() {
    navbar.classList.toggle("showNav");
    menu.classList.toggle("showClose");
}
const menuLinks = document.querySelectorAll(".menu-link");
menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener("click", toggleMenu);
});
// Typed.js
var typed = new Typed("#typed", {
    strings: [
        "A Frontend Fanatic.",
        "^2000 The <span class='typed-gradient'>Gradient</span> Gangsta.",
        "^2000 The Duke of Dark Mode.",
        "^2000 An Over-Caffeinated Coder.", 
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    backDelay: 3000,
    backSpeed: 50
});
function hoverLightChevron() {
    // Hover effect on currently-working-on chevrons (light mode)
    links.forEach((link)=>{
        const bullet = link.parentElement.querySelector(".bullet");
        link.addEventListener("mouseover", ()=>{
            bullet.style.color = "white";
            bullet.style.transition = "ease 0.1s";
        });
        link.addEventListener("mouseleave", ()=>{
            bullet.style.color = "";
            bullet.style.transition = "ease 0.1s";
        });
    });
}
function hoverDarkChevron() {
    // Hover effect on currently-working-on chevrons (dark mode)
    links.forEach((link)=>{
        const bullet = link.parentElement.querySelector(".bullet");
        link.addEventListener("mouseover", ()=>{
            bullet.style.color = "var(--dracula-pink)";
            bullet.style.transition = "ease 0.1s";
        });
        link.addEventListener("mouseleave", ()=>{
            bullet.style.color = "";
            bullet.style.transition = "ease 0.1s";
        });
    });
}

//# sourceMappingURL=contact.e72c3fb5.js.map
