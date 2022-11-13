// Project card modals

const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const trigger = document.querySelector('.trigger')
const closeButton = document.querySelector('.close-button')

function toggleModal() {
  modal.classList.toggle('show-modal')
  showModal()
}

function windowOnClick(event) {
  if (this.event.target === modal) {
    toggleModal()
    showModal()
  }
}

trigger.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)
window.addEventListener('click', windowOnClick)

// Disable body scroll with modal open

const showModal = function (e) {
  if (modal.classList.contains('show-modal')) {
    // Disable scroll
    body.style.overflow = 'hidden'
  } else {
    // Enable scroll
    body.style.overflow = 'auto'
  }
}

// function toggleModal(modal) {
//   modal.classList.toggle('show-modal')
//   showModal(modal)
// }

// document.addEventListener('click', function (event) {
//   if (event.target.classList.contains('modal')) {
//     toggleModal(event.target)
//     showModal(event.target)
//   } else if (event.target.classList.contains('trigger')) {
//     toggleModal(document.getElementById(event.target.getAttribute('data-target')))
//   } else if (event.target.classList.contains('close-button')) {
//     toggleModal(document.getElementById(event.target.getAttribute('data-target')))
//   }
// })
