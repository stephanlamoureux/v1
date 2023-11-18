import Typed from 'typed.js'

class myHeader extends HTMLElement {
	connectedCallback() {
		this.render()
		this.initializeTyped()
	}

	render() {
		this.innerHTML = `
            <div class="center-header">
                <h1 class="header-title">
                    <span class="header-gradient">
                        <span class="spacing">Stephan <span class="hidden">Lamoureu</span></span>
                        <span class="hidden">x</span>
                    </span>
                    <span class="show header-gradient">L.</span>
                </h1>
                <p class="header-sub">
                    <span id="typed2" class="typed2"></span>
                </p>
            </div>
        `
	}

	initializeTyped() {
		// Ensuring the element is in the DOM
		if (this.querySelector('#typed2')) {
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
			setTimeout(() => this.initializeTyped(), 100)
		}
	}
}

customElements.define('my-header', myHeader)
