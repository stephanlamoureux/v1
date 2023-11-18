class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<footer>
			<div class="icons-flex">
				<span class="fa-stack fa-2x" data-anijs="if: mouseenter, do: rubberBand animated">
					<i class="fas fa-circle fa-stack-2x"></i>
					<a
						href="https://github.com/stephanlamoureux"
						target="_blank"
						class="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my GitHub"
					>
						<i class="fab fa-github fa-stack-1x fa-inverse red"></i>
					</a>
				</span>
				<span class="fa-stack fa-2x" data-anijs="if: mouseenter, do: rubberBand animated">
					<i class="fas fa-circle fa-stack-2x"></i>
					<a
						href="assets/StephanLamoureux.pdf"
						target="_blank"
						class="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my Résumé"
					>
						<i class="fas fa-file-user fa-stack-1x fa-inverse orange"></i>
					</a>
				</span>
				<span class="fa-stack fa-2x" data-anijs="if: mouseenter, do: rubberBand animated">
					<i class="fas fa-circle fa-stack-2x"></i>
					<a
						href="https://twitter.com/sa_lamoureux"
						target="_blank"
						class="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my Twitter"
					>
						<i class="fab fa-twitter fa-stack-1x fa-inverse yellow"></i>
					</a>
				</span>
				<span class="fa-stack fa-2x" data-anijs="if: mouseenter, do: rubberBand animated">
					<i class="fas fa-circle fa-stack-2x"></i>
					<a
						href="https://dev.to/stephanlamoureux"
						target="_blank"
						class="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my Dev.to"
					>
						<i class="fab fa-dev fa-stack-1x fa-inverse green"></i>
					</a>
				</span>
				<span class="fa-stack fa-2x" data-anijs="if: mouseenter, do: rubberBand animated">
					<i class="fas fa-circle fa-stack-2x"></i>
					<a
						href="https://www.linkedin.com/in/stephanlamoureux"
						target="_blank"
						class="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my LinkedIn"
					>
						<i class="fab fa-linkedin fa-stack-1x fa-inverse cyan"></i>
					</a>
				</span>
				<span class="fa-stack fa-2x" data-anijs="if: mouseenter, do: rubberBand animated">
					<i class="fas fa-circle fa-stack-2x"></i>
					<a
						href="mailto:sa.lamoureux@gmail.com"
						target="_blank"
						class="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my email"
					>
						<i class="fa fa-envelope fa-stack-1x fa-inverse purple"></i>
					</a>
				</span>
			</div>
			<p class="coded-by">
			<a href="https://github.com/stephanlamoureux/v1" target="_blank" class="source-link" rel="noopener noreferrer">
					<span class="made">Made with </span>
					<span class="heart animate-beat">🖤</span>
					<span class="stephan">by Stephan Lamoureux &copy; <span id="footer-year"></span></span>
			</a>
	</p>
	</footer>
`

		this.updateYear()
	}

	updateYear() {
		const yearSpan = this.querySelector('#footer-year')
		if (yearSpan) {
			yearSpan.textContent = new Date().getFullYear()
		}
	}
}

customElements.define('my-footer', MyFooter)
