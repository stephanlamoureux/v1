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

// Currently working on section hover effect

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

// Light Mode

function lightMode() {
  // All
  document.body.classList.toggle('light-mode')
  document.querySelector('.fa-sun').classList.toggle('fa-moon')
  document.querySelectorAll('.line').forEach(line => line.classList.toggle('light-mode'))
  document
    .querySelectorAll('.custom-shape-divider-bottom-1619735001 .shape-fill')
    .forEach(shape => shape.classList.toggle('light-mode'))
  // About
  document.querySelectorAll('.about-p').forEach(p => p.classList.toggle('light-mode'))
  document.querySelectorAll('.p-icon').forEach(icon => icon.classList.toggle('light-mode'))
  document.querySelectorAll('.bullet').forEach(bullet => bullet.classList.toggle('light-mode'))
  document.querySelectorAll('.tech-used-link').forEach(link => link.classList.toggle('light-mode'))
  document.querySelectorAll('.tech-used-list').forEach(list => list.classList.toggle('light-mode'))
  document.querySelector('.paragraph .about-header').classList.toggle('light-mode')
  document.querySelector('.paragraph .working-on-header').classList.toggle('light-mode')
  // Blog
  document.querySelectorAll('#devArticle').forEach(blog => blog.classList.toggle('light-mode'))
}
