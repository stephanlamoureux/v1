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

const button = document.querySelector('.mode-toggle')

button.addEventListener('click', function () {
  localStorage.setItem('light-mode', true)
  if (localStorage.getItem('light-mode')) {
    document.body.classList.toggle('light-mode')
    document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.toggle('fa-moon'))
  } else {
    document.body.classList.remove('light-mode')
    localStorage.setItem('light-mode', false)
  }
})

function checkLightMode() {
  if (localStorage.getItem('light-mode')) {
    body.classList.add('light-mode')
  }
}

// const theme = window.localStorage.currentTheme
// const button = document.querySelector('.mode-toggle')
// const themeIcon = document.querySelector('mode-icon')
// const body = document.body

// body.addClass(theme)

// if (body.hasClass('light-mode')) {
//   themeIcon.addClass('fa-moon')
//   themeIcon.removeClass('fa-sun')
// } else {
//   themeIcon.removeClass('fa-moon')
//   themeIcon.addClass('fa-sun')
// }

// themeIcon.click(function () {
//   themeIcon.toggleClass('fa-moon')
//   themeIcon.toggleClass('fa-sun')

//   if (body.hasClass('light-mode')) {
//     body.toggleClass('light-mode')
//     localStorage.removeItem('currentTheme')
//     localStorage.currentTheme = 'dark-mode'
//   } else {
//     body.toggleClass('light-mode')
//     localStorage.removeItem('currentTheme')
//     localStorage.currentTheme = 'light-mode'
//   }
// })

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
