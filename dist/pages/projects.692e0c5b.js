!(function () {
  const e = document.querySelector('.modal'),
    t = document.querySelector('.trigger'),
    o = document.querySelector('.close-button'),
    n = document.querySelector('body')
  function c() {
    e.classList.toggle('show-modal'), l()
  }
  t.addEventListener('click', c),
    o.addEventListener('click', c),
    window.addEventListener('click', function (t) {
      t.target === e && (c(), l())
    })
  const l = function (t) {
    e.classList.contains('show-modal') ? (n.style.overflow = 'hidden') : (n.style.overflow = 'auto')
  }
})()
//# sourceMappingURL=projects.692e0c5b.js.map
