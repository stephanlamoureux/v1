const e = document.querySelector('.modal'),
  t = document.querySelector('.trigger'),
  o = document.querySelector('.close-button'),
  c = document.querySelector('body')
function n() {
  e.classList.toggle('show-modal'), l()
}
t.addEventListener('click', n),
  o.addEventListener('click', n),
  window.addEventListener('click', function (t) {
    t.target === e && (n(), l())
  })
const l = function (t) {
  e.classList.contains('show-modal') ? (c.style.overflow = 'hidden') : (c.style.overflow = 'auto')
}
//# sourceMappingURL=projects.c7589636.js.map
