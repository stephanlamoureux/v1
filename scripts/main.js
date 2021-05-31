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
	strings: ["A Frontend Fanatic.", "^2000 The Gradient Gangsta.", "^2000 The Duke of Dark Mode.", "^2000 Something witty goes here."],
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

// Footer hover effect

let hash = document.getElementById("hash");
let vwc = document.getElementById("vwc");

vwc.addEventListener("mouseenter", function (event) {
	hash.style.color = "var(--dracula-foreground)";
	hash.style.transition = "0.5s ease all"
});

vwc.addEventListener("mouseleave", function (event) {
	hash.style.color = "var(--dracula-background)";
	hash.style.transition = "0.5s ease all"
});

// Nav links keep underline effect when clicked

const link = document.querySelector(".link");
link.addEventListener("click", toggleActive);

function toggleActive() {
	link.classList.toggle("is-active");
};