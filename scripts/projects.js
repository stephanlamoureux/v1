// Project card modals

const modal = document.querySelector('.modal')
const trigger = document.querySelector('.trigger')
const closeButton = document.querySelector('.close-button')
const body = document.querySelector('body')

function toggleModal() {
  modal.classList.toggle('show-modal')
  showModal()
}

function windowOnClick(event) {
  if (event.target === modal) {
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
