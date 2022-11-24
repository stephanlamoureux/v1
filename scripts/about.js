import gtag, { install } from 'ga-gtag'
import darkArrow from '/assets/images/icons/3d-forward-arrow(1).png'
import lightArrow from '/assets/images/icons/3d-forward-arrow(5).png'

// Google Analytics
install('G-YYTQ7PKV12')

// Light Mode
const checkboxes = document.querySelectorAll('.checkbox')
const balls = document.querySelectorAll('.ball')
const downArrow = document.querySelector('.scribble-image')

/*
Event listeners for the toggle switches on the desktop nav and mobile nav.

The default mode is dark, so when the toggle is checked:
1. Light mode stylesheet is enabled
2. Local storage is updated to "light mode: enabled"
3. The ball on both the desktop and mobile toggle is slid to the left

When the toggle is unchecked:
1. Light mode stylesheet is disabled
2. Local storage is updated to "light mode: disabled"
3. The ball on both the desktop and mobile toggle is slid to the right
*/

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('change', () => {
		document.body.classList.toggle('light-mode')

		if (document.body.classList.contains('light-mode')) {
			localStorage.setItem('lightMode', 'enabled')
			balls.forEach(ball => {
				ball.style.transform = 'translateX(-24px)'
			})
			downArrow.src = lightArrow
		} else {
			localStorage.setItem('lightMode', 'disabled')
			balls.forEach(ball => {
				ball.style.transition = 'transform 0.2s linear'
				ball.style.transform = 'translateX(0px)'
			})
			downArrow.src = darkArrow
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
		downArrow.src = lightArrow
	} else {
		balls.forEach(ball => {
			ball.style.transform = 'translateX(0px)'
		})
		downArrow.src = darkArrow
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
