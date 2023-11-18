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
`;
    }
}
customElements.define("my-header", myHeader);

//# sourceMappingURL=blog.f40aa18f.js.map
