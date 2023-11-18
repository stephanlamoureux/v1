import Typed from 'typed.js'

class myHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
				<div class="center-header">
				<h1 class="header-title">
					<span class="header-gradient">
						<span class="spacing">Stephan <span class="hidden">Lamoureu</span></span
						><span class="hidden">x</span></span
					>
					<span class="show header-gradient">L.</span>
				</h1>
				<p class="header-sub">
					<span id="typed2" class="typed2"></span>
				</p>
			</div>
        `

		this.initializeTyped()
	}

	initializeTyped() {
		if (this.querySelector('#typed2')) {
			new Typed('#typed2', {
				// Typed.js options
			})
		} else {
			// Retry initialization after a brief delay
			setTimeout(() => this.initializeTyped(), 100)
		}
	}
}

customElements.define('my-header', myHeader)
