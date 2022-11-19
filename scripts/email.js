import emailjs from '@emailjs/browser'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
;(function () {
	// https://dashboard.emailjs.com/admin/integration
	emailjs.init('user_hYeCfF0DkAoQPn3bOS7WR') // user_hYeCfF0DkAoQPn3bOS7WR
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
				// styling for submit button on success
				const submitButton = (document.getElementById('submit').value = 'Success!')
				const successButton = (document.getElementById('submit').style.cssText =
					'background: var(--dracula-green); color: var(--dracula-background); text-shadow: none; box-shadow: 0 3px 0 rgb(16, 197, 61);')
				console.log('SUCCESS!')
				setTimeout(function () {
					document.forms['contact-form'].reset()
					document.getElementById('submit').value = 'Submit'
					document.getElementById('submit').style = ''
				}, 3000)
			},
			function (error) {
				// toast error message
				Toastify({
					text: 'Error: Unable to Connect To Email Server',
					duration: -1,
					close: true,
					gravity: 'top', // `top` or `bottom`
					position: 'right', // `left`, `center` or `right`
					stopOnFocus: true, // Prevents dismissing of toast on hover
					offset: {
						x: 10, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
						y: 100, // vertical axis - can be a number or a string indicating unity. eg: '2em'
					},
					style: {
						background: 'var(--dracula-red)',
					},
					onClick: function () {}, // Callback after click
				}).showToast()

				// error message styling for submit button
				const submitButton = (document.getElementById('submit').value = 'Failed!')
				const successButton = (document.getElementById('submit').style.cssText =
					'background: var(--dracula-red); box-shadow: 0 3px 0 rgb(219, 43, 43); color: var(--dracula-foreground')
				console.log('FAILED...', error)
				setTimeout(function () {
					document.forms['contact-form'].reset()
					document.getElementById('submit').value = 'Submit'
					document.getElementById('submit').style = ''
				}, 3000)

				console.log(error)
			}
		)
	})
}
