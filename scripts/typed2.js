import Typed from 'typed.js'

function initializeTyped2() {
	const element = document.querySelector('#typed2')
	if (element) {
		new Typed('#typed2', {
			strings: [
				'A Frontend Fanatic.',
				"^2000 The <span class='typed-gradient'>Gradient</span> Gangsta.",
				'^2000 A Caffeine Connoisseur.',
				'^2000 The Duke of Dark Mode.',
			],
			typeSpeed: 70,
			loop: true,
			startDelay: 1000,
			backDelay: 3000,
			backSpeed: 50,
		})
	} else {
		// Retry initialization after a brief delay
		setTimeout(initializeTyped2, 100)
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initializeTyped2()
})
