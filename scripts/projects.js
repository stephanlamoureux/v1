const body = document.querySelector('body');
const modals = document.querySelectorAll('.modal');
const triggers = document.querySelectorAll('.trigger');
const closeButtons = document.querySelectorAll('.close-button');

function toggleModal(index) {
  modals[index].classList.toggle('show-modal');
  if (modals[index].classList.contains('show-modal')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
}

function closeModal(index) {
  modals[index].classList.toggle('show-modal');
  body.style.overflow = 'auto';
}

function closeAllModals() {
  modals.forEach((modal) => {
    modal.classList.remove('show-modal');
  });
  body.style.overflow = 'auto';
}

triggers.forEach((trigger, index) => {
  trigger.onclick = () => toggleModal(index);
});

closeButtons.forEach((closeButton, index) => {
  closeButton.onclick = () => closeModal(index);
});

window.onclick = (event) => {
  modals.forEach((modal, index) => {
    if (event.target === modal) {
      closeModal(index);
    }
  });
};

// Prevent scroll on modal open and close
modals.forEach((modal) => {
  modal.addEventListener('scroll', (event) => {
    event.stopPropagation();
  });
});
