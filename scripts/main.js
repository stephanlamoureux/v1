import gtag, { install } from 'ga-gtag'

// Google Analytics
install('G-YYTQ7PKV12')

// Light Mode

const checkboxes = document.querySelectorAll('.checkbox')
const links = document.querySelectorAll('.working-on-link')
const balls = document.querySelectorAll('.ball')

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light-mode')

    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('lightMode', 'enabled')
      balls.forEach(ball => {
        ball.style.transform = 'translateX(-24px)'
      })
      hoverLightChevron()
    } else {
      localStorage.setItem('lightMode', 'disabled')
      balls.forEach(ball => {
        ball.style.transition = 'transform 0.2s linear'
        ball.style.transform = 'translateX(0px)'
      })
      hoverDarkChevron()
    }
  })

  if (localStorage.getItem('lightMode') === 'enabled') {
    document.body.classList.add('light-mode')
    balls.forEach(ball => {
      ball.style.transition = 'none'
      ball.style.transform = 'translateX(-24px)'
    })
    hoverLightChevron()
  } else {
    balls.forEach(ball => {
      ball.style.transform = 'translateX(0px)'
    })
    hoverDarkChevron()
  }
})

// Mobile Nav

const menuLinks = document.querySelectorAll('.menu-link')
const navbar = document.querySelector('.navbar')
const menu = document.querySelector('.menu')

menu.addEventListener('click', toggleMenu)

function toggleMenu() {
  navbar.classList.toggle('showNav')
  menu.classList.toggle('showClose')
}

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', toggleMenu)
})

// close the navbar when you click outside of it, but not when the color mode toggle is clicked
const toggle = document.querySelector('.mobile-mode-toggle')

document.addEventListener('click', function (event) {
  const isClickedInside = menu.contains(event.target)
  if (!isClickedInside) {
    navbar.classList.remove('showNav')
    menu.classList.remove('showClose')
  }
})

document.addEventListener('change', event => {
  const modeToggle = toggle.contains(event.target)
  if (!modeToggle) {
    navbar.classList.add('showNav')
    menu.classList.add('showClose')
  }
})

// Currently working on section hover effect

function hoverLightChevron() {
  // Hover effect on currently-working-on chevrons (light mode)
  links.forEach(link => {
    const bullet = link.parentElement.querySelector('.bullet')
    link.addEventListener('mouseover', () => {
      bullet.style.color = 'white'
      bullet.style.transition = 'ease 0.1s'
      bullet.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.75)'
    })
    link.addEventListener('mouseleave', () => {
      bullet.style.color = ''
      bullet.style.transition = 'ease 0.1s'
      bullet.style.textShadow = ''
    })
  })
}

function hoverDarkChevron() {
  // Hover effect on currently-working-on chevrons (dark mode)
  links.forEach(link => {
    const bullet = link.parentElement.querySelector('.bullet')
    link.addEventListener('mouseover', () => {
      bullet.style.color = 'var(--dracula-pink)'
      bullet.style.transition = 'ease 0.1s'
    })
    link.addEventListener('mouseleave', () => {
      bullet.style.color = ''
      bullet.style.transition = 'ease 0.1s'
    })
  })
}
