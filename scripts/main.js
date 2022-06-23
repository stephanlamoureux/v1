// Hamburger Menu

const navbar = document.querySelector('.navbar')
const menu = document.querySelector('.menu')

menu.addEventListener('click', toggleMenu)

function toggleMenu() {
  navbar.classList.toggle('showNav')
  menu.classList.toggle('showClose')
}

const menuLinks = document.querySelectorAll('.menu-link')

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', toggleMenu)
})

// Typed.js

var typed = new Typed('#typed', {
  strings: [
    'A Frontend Fanatic.',
    "^2000 The <span class='typed-gradient'>Gradient</span> Gangsta.",
    '^2000 The Duke of Dark Mode.',
    '^2000 An Over-Caffeinated Coder.',
  ],
  typeSpeed: 70,
  loop: true,
  startDelay: 1000,
  backDelay: 3000,
  backSpeed: 50,
})

function lightMode() {
  document.body.classList.toggle('light-mode')
  document.querySelector('.fa-sun').classList.toggle('fa-moon')
}

// Hover effect for Currently Working On section

// const links = document.querySelectorAll('.tech-used-link')

// links.forEach(link => {
//   const bullet = link.parentElement.querySelector('.bullet')
//   link.addEventListener('mouseover', () => {
//     bullet.style.color = 'var(--dracula-purple)'
//     bullet.style.transition = 'ease 0.1s'
//   })
//   link.addEventListener('mouseleave', () => {
//     bullet.style.color = ''
//   })
// })
