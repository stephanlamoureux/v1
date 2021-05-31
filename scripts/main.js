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

/*
//--> you need to get all the elements in the nodeList
const links = document.querySelectorAll(".link");
//--> loop over these elements and add the eventListener
links.forEach(link => link.addEventListener("click", toggleActive));

//--> note the e passing into the function, this will be the event from the eventListener
function toggleActive(e) {
	//--> remove all instances of the classList on these nodes
	links.forEach(link => link.classList.remove("is-active"));
	//--> now use the event.target to add the active class to the classList
	e.target.classList.add("is-active");
};
*/

