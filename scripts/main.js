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

// Light Mode

const buttons = document.querySelectorAll('.mode-toggle')

buttons.forEach(button => {
  button.addEventListener('click', function () {
    document.body.classList.toggle('light-mode')
    document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.toggle('fa-moon'))

    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('lightMode', 'enabled')
    } else {
      localStorage.setItem('lightMode', 'disabled')
    }
  })
})

if (localStorage.getItem('lightMode') === 'enabled') {
  document.body.classList.add('light-mode')
  document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.add('fa-moon'))
}

// Hover effect for Currently Working On section list items

const links = document.querySelectorAll('.tech-used-link')

links.forEach(link => {
  const bullet = link.parentElement.querySelector('.bullet')
  link.addEventListener('mouseover', () => {
    bullet.style.color = 'var(--dracula-foreground)'
    bullet.style.transition = 'ease 0.1s'
  })
  link.addEventListener('mouseleave', () => {
    bullet.style.color = ''
    bullet.style.transition = 'ease 0.1s'
  })
})
