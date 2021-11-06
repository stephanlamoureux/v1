// Hamburger Menu

const navbar = document.querySelector('.navbar')
const menu = document.querySelector('.menu')

menu.addEventListener('click', toggleMenu)

function toggleMenu() {
  navbar.classList.toggle('showNav')
  menu.classList.toggle('showClose')
}

const menuLinks = document.querySelectorAll('.menu-link')

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', toggleMenu)
})

// Typed.js

var typed = new Typed('#typed', {
  strings: [
    'A Frontend Fanatic.',
    "^2000 The <span class='typed-gradient'>Gradient</span> Gangsta.",
    '^2000 The Duke of Dark Mode.',
    '^2000 Something witty goes here.',
  ],
  typeSpeed: 70,
  loop: true,
  startDelay: 1000,
  backDelay: 3000,
  backSpeed: 50,
})

// EmailJS

;(function () {
  // https://dashboard.emailjs.com/admin/integration
  emailjs.init('user_hYeCfF0DkAoQPn3bOS7WR')
})()

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const sendingButton = (document.getElementById('submit').value = 'Sending...')
    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0
    // these IDs from the previous steps
    emailjs.sendForm('contact_service', 'contact_form', this).then(
      function () {
        const submitButton = (document.getElementById('submit').value = 'Success!')
        const successButton = (document.getElementById('submit').style.background =
          'var(--dracula-green)')
        console.log('SUCCESS!')
        setTimeout(function () {
          document.forms['contact-form'].reset()
          document.getElementById('submit').value = 'Submit'
          document.getElementById('submit').style = ''
        }, 5000)
      },
      function (error) {
        const submitButton = (document.getElementById('submit').value = 'Failed!')
        const successButton = (document.getElementById('submit').style.background =
          'var(--dracula-red)')
        console.log('FAILED...', error)
        setTimeout(function () {
          document.forms['contact-form'].reset()
          document.getElementById('submit').value = 'Submit'
          document.getElementById('submit').style = ''
        }, 5000)
      }
    )
  })
}
