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
