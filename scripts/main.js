// Hamburger Menu

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
	navbar.classList.toggle("showNav");
	menu.classList.toggle("showClose");
}

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(
	function (menuLink) {
		menuLink.addEventListener("click", toggleMenu);
	}
);

// Typed.js

var typed = new Typed('#typed', {
	strings: ["Frontend Web Developer.", "^1000 Veteran.", "^1000 Gangster of Gradients.", "^1000 Dark Mode Connoisseur."],
	typeSpeed: 70,
	loop: true,
	startDelay: 1000,
	backDelay: 3000,
	backSpeed: 50
});


// EmailJS

(function () {
	// https://dashboard.emailjs.com/admin/integration
	emailjs.init('user_hYeCfF0DkAoQPn3bOS7WR');
})();

window.onload = function () {
	document.getElementById('contact-form').addEventListener('submit', function (event) {
		event.preventDefault();
		// generate a five digit number for the contact_number variable
		this.contact_number.value = Math.random() * 100000 | 0;
		// these IDs from the previous steps
		emailjs.sendForm('contact_service', 'contact_form', this)
			.then(function () {
				let submitButton = document.getElementById('submit').value = "Success!";
				let successButton = document.getElementById('submit').style.background = "var(--dracula-green)";
				console.log('SUCCESS!');
			}, function (error) {
				console.log('FAILED...', error);
			});
	});
}