import emailjs from '@emailjs/browser'
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
        const successButton = (document.getElementById('submit').style.cssText =
          'background: var(--dracula-green); color: var(--dracula-background); text-shadow: none; box-shadow: 0 5px 0 var(--dracula-green);')
        console.log('SUCCESS!')
        setTimeout(function () {
          document.forms['contact-form'].reset()
          document.getElementById('submit').value = 'Submit'
          document.getElementById('submit').style = ''
        }, 5000)
      },
      function (error) {
        const submitButton = (document.getElementById('submit').value = 'Failed!')
        const successButton = (document.getElementById('submit').style.cssText =
          'background: var(--dracula-red) box-shadow: 0 5px 0 var(--dracula-red);')
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
