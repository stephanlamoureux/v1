class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
		<header>
			<div class="center-header">
				<h1 class="header-title">
					<span class="header-gradient">
						<span class="spacing">Stephan <span class="hidden">Lamoureu</span></span
						><span class="hidden">x</span></span
					>
					<span class="show header-gradient">L.</span>
				</h1>
			</div>
`;
    }
}
customElements.define("my-header", myHeader);

//# sourceMappingURL=index.f40aa18f.js.map
