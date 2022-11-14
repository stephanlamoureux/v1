// TODO: Refactor modal logic

// Project card modals

const body = document.querySelector('body')
const modal = document.getElementsByClassName('modal')
const trigger = document.getElementsByClassName('trigger')
const closeButton = document.getElementsByClassName('close-button')

// When the user clicks the project image, open the modal

trigger[0].onclick = function () {
  modal[0].classList.toggle('show-modal')
  if (modal[0].classList.contains('show-modal')) {
    // Disable scroll
    body.style.overflow = 'hidden'
  } else {
    // Enable scroll
    body.style.overflow = 'auto'
  }
}

trigger[1].onclick = function () {
  modal[1].classList.toggle('show-modal')
  if (modal[1].classList.contains('show-modal')) {
    // Disable scroll
    body.style.overflow = 'hidden'
  } else {
    // Enable scroll
    body.style.overflow = 'auto'
  }
}

trigger[2].onclick = function () {
  modal[2].classList.toggle('show-modal')
  if (modal[2].classList.contains('show-modal')) {
    // Disable scroll
    body.style.overflow = 'hidden'
  } else {
    // Enable scroll
    body.style.overflow = 'auto'
  }
}

trigger[3].onclick = function () {
  modal[3].classList.toggle('show-modal')
  if (modal[3].classList.contains('show-modal')) {
    // Disable scroll
    body.style.overflow = 'hidden'
  } else {
    // Enable scroll
    body.style.overflow = 'auto'
  }
}

// When the user clicks on (x), close the modal

closeButton[0].onclick = function () {
  modal[0].classList.toggle('show-modal')
  body.style.overflow = 'auto'
}

closeButton[1].onclick = function () {
  modal[1].classList.toggle('show-modal')
  body.style.overflow = 'auto'
}

closeButton[2].onclick = function () {
  modal[2].classList.toggle('show-modal')
  body.style.overflow = 'auto'
}

closeButton[3].onclick = function () {
  modal[3].classList.toggle('show-modal')
  body.style.overflow = 'auto'
}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].classList.toggle('show-modal')
    body.style.overflow = 'auto'
  }
  if (event.target == modal[1]) {
    modal[1].classList.toggle('show-modal')
    body.style.overflow = 'auto'
  }
  if (event.target == modal[2]) {
    modal[2].classList.toggle('show-modal')
    body.style.overflow = 'auto'
  }
  if (event.target == modal[3]) {
    modal[3].classList.toggle('show-modal')
    body.style.overflow = 'auto'
  }
}
