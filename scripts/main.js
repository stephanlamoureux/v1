import gtag, { install } from 'ga-gtag'

// Google Analytics
install('G-YYTQ7PKV12')

// Light Mode
const checkboxes = document.querySelectorAll('.checkbox')
const links = document.querySelectorAll('.working-on-link')
const balls = document.querySelectorAll('.ball')

/*
Event listeners for the toggle switches on the desktop nav and mobile nav.

The default mode is dark, so when the toggle is checked:
1. Light mode stylesheet is enabled
2. Local storage is updated to "light mode: enabled"
3. The ball on both the desktop and mobile toggle is slid to the left
4. The chevron hover effect is set to light mode

When the toggle is unchecked:
1. Light mode stylesheet is disabled
2. Local storage is updated to "light mode: disabled"
3. The ball on both the desktop and mobile toggle is slid to the right
4. The chevron hover effect is set to dark mode
*/

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

  // If the user has previously checked the light mode toggle
  // the page will load in light mode and vice versa using the same logic as above.

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
const navbar = document.querySelector('.nav-wrapper .navbar')
const menu = document.querySelector('.nav-wrapper .menu')
const toggle = document.querySelector('.mobile-mode-toggle')
const nav = document.getElementById('nav-wrapper')
const hamburger = document.querySelector('.nav-wrapper .hamburger')

menu.addEventListener('click', toggleMenu)

function toggleMenu() {
  hamburger.classList.toggle('is-active')
  navbar.classList.toggle('showNav')
}

// Close the menu when a link is clicked
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', toggleMenu)
})

// Close the mobile nav menu when you click outside of it
document.addEventListener('click', event => {
  const isClickedInside = nav.contains(event.target)
  if (!isClickedInside) {
    navbar.classList.remove('showNav')
    hamburger.classList.remove('is-active')
  }
})

// Keep the mobile nav menu open when the color mode toggle is clicked
navbar.addEventListener('change', event => {
  const modeToggle = toggle.contains(event.target)
  if (!modeToggle) {
    navbar.classList.add('showNav')
    hamburger.classList.add('is-active')
  }
})

// About Me page hover effect
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
