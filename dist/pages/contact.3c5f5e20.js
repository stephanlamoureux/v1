var e = {}
Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = e.gtag = e.install = void 0)
e.install = function (e) {
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = 'ga-gtag'
  if (!document.getElementById(n)) {
    var o = document,
      s = o.head,
      r = document.createElement('script')
    ;(r.id = n),
      (r.type = 'text/javascript'),
      (r.async = !0),
      (r.src = 'https://www.googletagmanager.com/gtag/js?id='.concat(e)),
      s.insertBefore(r, s.firstChild),
      (window.dataLayer = window.dataLayer || []),
      t('js', new Date()),
      t('config', e, a)
  }
}
var t = function () {
  window.dataLayer.push(arguments)
}
e.gtag = t
var a = t
;(e.default = a), (0, e.install)('G-YYTQ7PKV12')
const n = document.querySelectorAll('.checkbox'),
  o = document.querySelectorAll('.working-on-link'),
  s = document.querySelectorAll('.ball')
n.forEach(e => {
  e.addEventListener('change', () => {
    document.body.classList.toggle('light-mode'),
      document.body.classList.contains('light-mode')
        ? (localStorage.setItem('lightMode', 'enabled'),
          s.forEach(e => {
            e.style.transform = 'translateX(-24px)'
          }),
          g())
        : (localStorage.setItem('lightMode', 'disabled'),
          s.forEach(e => {
            ;(e.style.transition = 'transform 0.2s linear'), (e.style.transform = 'translateX(0px)')
          }),
          y())
  }),
    'enabled' === localStorage.getItem('lightMode')
      ? (document.body.classList.add('light-mode'),
        s.forEach(e => {
          ;(e.style.transition = 'none'), (e.style.transform = 'translateX(-24px)')
        }),
        g())
      : (s.forEach(e => {
          e.style.transform = 'translateX(0px)'
        }),
        y())
})
const r = document.querySelectorAll('.menu-link'),
  l = document.querySelector('.nav-wrapper .navbar'),
  c = document.querySelector('.nav-wrapper .menu'),
  i = document.querySelector('.mobile-mode-toggle'),
  d = document.getElementById('nav-wrapper'),
  u = document.querySelector('.nav-wrapper .hamburger')
function m() {
  u.classList.toggle('is-active'), l.classList.toggle('showNav')
}
function g() {
  o.forEach(e => {
    const t = e.parentElement.querySelector('.bullet')
    e.addEventListener('mouseover', () => {
      ;(t.style.color = 'white'),
        (t.style.transition = 'ease 0.1s'),
        (t.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.75)')
    }),
      e.addEventListener('mouseleave', () => {
        ;(t.style.color = ''), (t.style.transition = 'ease 0.1s'), (t.style.textShadow = '')
      })
  })
}
function y() {
  o.forEach(e => {
    const t = e.parentElement.querySelector('.bullet')
    e.addEventListener('mouseover', () => {
      ;(t.style.color = 'var(--dracula-pink)'), (t.style.transition = 'ease 0.1s')
    }),
      e.addEventListener('mouseleave', () => {
        ;(t.style.color = ''), (t.style.transition = 'ease 0.1s')
      })
  })
}
c.addEventListener('click', m),
  r.forEach(function (e) {
    e.addEventListener('click', m)
  }),
  document.addEventListener('click', e => {
    d.contains(e.target) || (l.classList.remove('showNav'), u.classList.remove('is-active'))
  }),
  l.addEventListener('change', e => {
    i.contains(e.target) || (l.classList.add('showNav'), u.classList.add('is-active'))
  })
//# sourceMappingURL=contact.3c5f5e20.js.map
