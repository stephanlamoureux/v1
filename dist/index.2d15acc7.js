class mobileNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
		<!-- Mobile Menu -->
		<div id="nav-wrapper" class="nav-wrapper">
			<button
				class="menu hamburger hamburger--vortex"
				type="button"
				aria-label="Menu"
				aria-controls="navigation"
			>
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
			<nav id="navigation" class="navbar">
				<ul class="nav-list" role="menu">
					<li class="menu-link" role="none">
						<a href="/index.html" role="menuitem">
							<div
								class="mobile-profile"
								role="img"
								aria-label="portfolio picture of Stephan"
							></div>
						</a>
					</li>
					<li class="menu-link" role="none">
						<a href="/" role="menuitem">About</a>
					</li>
					<li class="menu-link" role="none">
						<a href="/blog.html" role="menuitem">Blog</a>
					</li>
					<li class="menu-link" role="none">
						<a href="/projects" role="menuitem">Projects</a>
					</li>
					<li class="menu-link" role="none">
						<a href="/contact" role="menuitem">Contact</a>
					</li>
					<!-- Mobile Color Mode Toggle -->
					<li role="none">
						<div class="mode-toggle" role="menuitem">
							<input
								type="checkbox"
								class="mobile-mode-toggle checkbox"
								id="mobile-checkbox"
								aria-label="color mode selector"
							/>
							<label for="mobile-checkbox" class="checkbox-label">
								<i class="fas fa-moon" alt="moon icon"></i>
								<i class="fas fa-sun" alt="sun icon"></i>
								<div class="ball"></div>
							</label>
						</div>
					</li>
					<!-- End Mobile Color Mode Toggle -->
				</ul>
			</nav>
		</div>
		<!-- End Mobile Menu -->
`;
        this.updateNavWrapperClass();
        this.setActiveLink();
    }
    updateNavWrapperClass() {
        const currentPath = window.location.pathname;
        const navWrapper = this.querySelector("#nav-wrapper");
        // Add the about-nav-wrapper class if on index.html or root path
        if (currentPath === "/") navWrapper.classList.add("about-nav-wrapper");
    }
    setActiveLink() {
        const currentPath = window.location.pathname;
        const links = this.querySelectorAll(".link");
        links.forEach((link)=>{
            const href = link.getAttribute("href");
            // Check if the href matches either the root path or index.html
            if (href === currentPath || currentPath === "/" && href === "/") link.classList.add("is-active");
            else link.classList.remove("is-active");
        });
    }
}
customElements.define("mobile-nav", mobileNav);

//# sourceMappingURL=index.2d15acc7.js.map
