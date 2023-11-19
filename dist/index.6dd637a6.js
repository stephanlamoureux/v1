class desktopNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
		<!-- Desktop Nav -->
		<div class="nav-desktop">
			<ul class="desktop-list" role="menu">
				<li role="none">
					<a href="index.html" role="menuitem">
						<div class="brand" role="img" aria-label="portfolio picture of Stephan"></div>
					</a>
				</li>
				<li class="desktop-link" role="none">
					<a class="link is-active" href="/index.html" role="menuitem">About</a>
				</li>
				<li class="desktop-link" role="none">
					<a class="link" href="/blog.html" role="menuitem">Blog</a>
				</li>
				<li class="desktop-link" role="none">
					<a class="link" href="/projects.html" role="menuitem">Projects</a>
				</li>
				<li class="desktop-link" role="none">
					<a class="link" href="/contact.html" role="menuitem">Contact</a>
				</li>
				<!-- Desktop Color Mode Toggle -->
				<li role="none">
					<div class="mode-toggle" role="menuitem">
						<input
							type="checkbox"
							class="checkbox"
							id="desktop-checkbox"
							aria-label="color mode selector"
						/>
						<label for="desktop-checkbox" class="checkbox-label">
							<i class="fas fa-moon" alt="moon icon"></i>
							<i class="fas fa-sun" alt="sun icon"></i>
							<div class="ball"></div>
						</label>
					</div>
				</li>
				<!-- End Desktop Color Mode Toggle -->
			</ul>
		</div>
		<!-- End Desktop Nav -->
`;
    }
}
customElements.define("desktop-nav", desktopNav);

//# sourceMappingURL=index.6dd637a6.js.map
