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

// About section hover effect

const links = document.querySelectorAll('.tech-used-link')

links.forEach(link => {
  const bullet = link.parentElement.querySelector('.bullet')
  link.addEventListener('mouseover', () => {
    bullet.style.color = 'var(--dracula-purple)'
    bullet.style.transition = 'ease 0.1s'
  })
  link.addEventListener('mouseleave', () => {
    bullet.style.color = 'var(--dracula-foreground)'
  })
})

// for (let i = 0; i < links.length; i++) {
//   const bullet = links[i].parentElement.querySelector('.bullet')

//   if (links[i].classList.contains('light-mode')) {
//     links[i].addEventListener('mouseover', function () {
//       bullet.style.color = 'var(--dracula-foreground)'
//       bullet.style.transition = 'ease 0.1s'
//     })
//     links[i].addEventListener('mouseleave', function () {
//       bullet.style.color = 'var(--dracula-background)'
//     })
//   } else {
//     links[i].addEventListener('mouseover', function () {
//       bullet.style.color = 'var(--dracula-purple)'
//       bullet.style.transition = 'ease 0.1s'
//     })
//     links[i].addEventListener('mouseleave', function () {
//       bullet.style.color = 'var(--dracula-foreground)'
//     })
//   }
// }

function lightChevron() {
  links.forEach(link => {
    const bullet = link.parentElement.querySelector('.bullet')
    link.addEventListener('mouseover', () => {
      bullet.style.color = 'var(--dracula-foreground)'
      bullet.style.transition = 'ease 0.1s'
    })
    link.addEventListener('mouseleave', () => {
      bullet.style.color = 'var(--dracula-background)'
    })
  })
}

// Light Mode

function lightMode() {
  lightChevron()
  document.querySelectorAll('.about-p').forEach(p => p.classList.toggle('light-mode'))
  document.querySelectorAll('.tech-used-link').forEach(link => link.classList.toggle('light-mode'))
  document.querySelectorAll('.tech-used-list').forEach(list => list.classList.toggle('light-mode'))
  document.querySelectorAll('.p-icon').forEach(icon => icon.classList.toggle('light-mode'))
  document.body.classList.toggle('light-mode')
  document.querySelectorAll('#devArticle').forEach(blog => blog.classList.toggle('light-mode'))
  document.querySelector('.fa-sun').classList.toggle('fa-moon')
  document.querySelector('.paragraph .about-header').classList.toggle('light-mode')
  document.querySelector('.paragraph .working-on-header').classList.toggle('light-mode')
  document.querySelectorAll('.line').forEach(line => line.classList.toggle('light-mode'))
  document
    .querySelectorAll('.custom-shape-divider-top-1619733049 .shape-fill')
    .forEach(shape => shape.classList.toggle('light-mode'))
}
