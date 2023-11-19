import Typed from 'typed.js'

function initializeTyped2() {
	// Check if the element exists
	const element = document.querySelector('#typed2')
	if (element) {
		// Initialize Typed.js on the element
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
		// If the element is not found, retry after a brief delay
		setTimeout(initializeTyped2, 100)
	}
}

// Immediately call the function
initializeTyped2()
