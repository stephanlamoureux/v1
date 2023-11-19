function initializeTyped2() {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initializeTyped2)
	} else {
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
		}
	}
}

initializeTyped2()
