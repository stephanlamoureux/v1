const e=document.querySelectorAll(".mode-toggle"),t=document.querySelectorAll(".working-on-link");e.forEach((e=>{e.addEventListener("click",(function(){document.body.classList.toggle("light-mode"),document.querySelectorAll(".fa-sun").forEach((e=>{e.classList.toggle("fa-moon"),e.style.transition="ease-in all 0.1s"})),document.body.classList.contains("light-mode")?(localStorage.setItem("lightMode","enabled"),s()):(localStorage.setItem("lightMode","disabled"),a())}))})),"enabled"===localStorage.getItem("lightMode")?(document.body.classList.add("light-mode"),document.querySelectorAll(".fa-sun").forEach((e=>e.classList.add("fa-moon"))),s()):a();const o=document.querySelector(".navbar"),l=document.querySelector(".menu");function n(){o.classList.toggle("showNav"),l.classList.toggle("showClose")}l.addEventListener("click",n);function s(){t.forEach((e=>{const t=e.parentElement.querySelector(".bullet");e.addEventListener("mouseover",(()=>{t.style.color="white",t.style.transition="ease 0.1s"})),e.addEventListener("mouseleave",(()=>{t.style.color="",t.style.transition="ease 0.1s"}))}))}function a(){t.forEach((e=>{const t=e.parentElement.querySelector(".bullet");e.addEventListener("mouseover",(()=>{t.style.color="var(--dracula-pink)",t.style.transition="ease 0.1s"})),e.addEventListener("mouseleave",(()=>{t.style.color="",t.style.transition="ease 0.1s"}))}))}document.querySelectorAll(".menu-link").forEach((function(e){e.addEventListener("click",n)}));
//# sourceMappingURL=contact.2e05b89b.js.map