!(function () {
  function t(t) {
    return t && t.__esModule ? t.default : t
  }
  const o = { _origin: 'https://api.emailjs.com' },
    e = (t, o, e) => {
      if (!t) throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account'
      if (!o) throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin'
      if (!e)
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates'
      return !0
    }
  class i {
    constructor(t) {
      ;(this.status = t.status), (this.text = t.responseText)
    }
  }
  const s = (t, e, s = {}) =>
    new Promise((n, a) => {
      const r = new XMLHttpRequest()
      r.addEventListener('load', ({ target: t }) => {
        const o = new i(t)
        200 === o.status || 'OK' === o.text ? n(o) : a(o)
      }),
        r.addEventListener('error', ({ target: t }) => {
          a(new i(t))
        }),
        r.open('POST', o._origin + t, !0),
        Object.keys(s).forEach(t => {
          r.setRequestHeader(t, s[t])
        }),
        r.send(e)
    })
  var n,
    a,
    r = {
      init: (t, e = 'https://api.emailjs.com') => {
        ;(o._userID = t), (o._origin = e)
      },
      send: (t, i, n, a) => {
        const r = a || o._userID
        e(r, t, i)
        const l = {
          lib_version: '3.6.2',
          user_id: r,
          service_id: t,
          template_id: i,
          template_params: n,
        }
        return s('/api/v1.0/email/send', JSON.stringify(l), { 'Content-type': 'application/json' })
      },
      sendForm: (t, i, n, a) => {
        const r = a || o._userID,
          l = (t => {
            let o
            if (
              ((o = 'string' == typeof t ? document.querySelector(t) : t),
              !o || 'FORM' !== o.nodeName)
            )
              throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form'
            return o
          })(n)
        e(r, t, i)
        const d = new FormData(l)
        return (
          d.append('lib_version', '3.6.2'),
          d.append('service_id', t),
          d.append('template_id', i),
          d.append('user_id', r),
          s('/api/v1.0/email/send-form', d)
        )
      },
    },
    l = {}
  /*!
   * Toastify js 1.12.0
   * https://github.com/apvarun/toastify-js
   * @license MIT licensed
   *
   * Copyright (C) 2018 Varun A P
   */
  ;(n = l),
    (a = function (t) {
      var o = function (t) {
        return new o.lib.init(t)
      }
      function e(t, o) {
        return o.offset[t] ? (isNaN(o.offset[t]) ? o.offset[t] : o.offset[t] + 'px') : '0px'
      }
      function i(t, o) {
        return !(
          !t ||
          'string' != typeof o ||
          !(t.className && t.className.trim().split(/\s+/gi).indexOf(o) > -1)
        )
      }
      return (
        (o.defaults = {
          oldestFirst: !0,
          text: 'Toastify is awesome!',
          node: void 0,
          duration: 3e3,
          selector: void 0,
          callback: function () {},
          destination: void 0,
          newWindow: !1,
          close: !1,
          gravity: 'toastify-top',
          positionLeft: !1,
          position: '',
          backgroundColor: '',
          avatar: '',
          className: '',
          stopOnFocus: !0,
          onClick: function () {},
          offset: { x: 0, y: 0 },
          escapeMarkup: !0,
          ariaLive: 'polite',
          style: { background: '' },
        }),
        (o.lib = o.prototype =
          {
            toastify: '1.12.0',
            constructor: o,
            init: function (t) {
              return (
                t || (t = {}),
                (this.options = {}),
                (this.toastElement = null),
                (this.options.text = t.text || o.defaults.text),
                (this.options.node = t.node || o.defaults.node),
                (this.options.duration = 0 === t.duration ? 0 : t.duration || o.defaults.duration),
                (this.options.selector = t.selector || o.defaults.selector),
                (this.options.callback = t.callback || o.defaults.callback),
                (this.options.destination = t.destination || o.defaults.destination),
                (this.options.newWindow = t.newWindow || o.defaults.newWindow),
                (this.options.close = t.close || o.defaults.close),
                (this.options.gravity =
                  'bottom' === t.gravity ? 'toastify-bottom' : o.defaults.gravity),
                (this.options.positionLeft = t.positionLeft || o.defaults.positionLeft),
                (this.options.position = t.position || o.defaults.position),
                (this.options.backgroundColor = t.backgroundColor || o.defaults.backgroundColor),
                (this.options.avatar = t.avatar || o.defaults.avatar),
                (this.options.className = t.className || o.defaults.className),
                (this.options.stopOnFocus =
                  void 0 === t.stopOnFocus ? o.defaults.stopOnFocus : t.stopOnFocus),
                (this.options.onClick = t.onClick || o.defaults.onClick),
                (this.options.offset = t.offset || o.defaults.offset),
                (this.options.escapeMarkup =
                  void 0 !== t.escapeMarkup ? t.escapeMarkup : o.defaults.escapeMarkup),
                (this.options.ariaLive = t.ariaLive || o.defaults.ariaLive),
                (this.options.style = t.style || o.defaults.style),
                t.backgroundColor && (this.options.style.background = t.backgroundColor),
                this
              )
            },
            buildToast: function () {
              if (!this.options) throw 'Toastify is not initialized'
              var t = document.createElement('div')
              for (var o in ((t.className = 'toastify on ' + this.options.className),
              this.options.position
                ? (t.className += ' toastify-' + this.options.position)
                : !0 === this.options.positionLeft
                ? ((t.className += ' toastify-left'),
                  console.warn(
                    'Property `positionLeft` will be depreciated in further versions. Please use `position` instead.'
                  ))
                : (t.className += ' toastify-right'),
              (t.className += ' ' + this.options.gravity),
              this.options.backgroundColor &&
                console.warn(
                  'DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'
                ),
              this.options.style))
                t.style[o] = this.options.style[o]
              if (
                (this.options.ariaLive && t.setAttribute('aria-live', this.options.ariaLive),
                this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE)
              )
                t.appendChild(this.options.node)
              else if (
                (this.options.escapeMarkup
                  ? (t.innerText = this.options.text)
                  : (t.innerHTML = this.options.text),
                '' !== this.options.avatar)
              ) {
                var i = document.createElement('img')
                ;(i.src = this.options.avatar),
                  (i.className = 'toastify-avatar'),
                  'left' == this.options.position || !0 === this.options.positionLeft
                    ? t.appendChild(i)
                    : t.insertAdjacentElement('afterbegin', i)
              }
              if (!0 === this.options.close) {
                var s = document.createElement('button')
                ;(s.type = 'button'),
                  s.setAttribute('aria-label', 'Close'),
                  (s.className = 'toast-close'),
                  (s.innerHTML = '&#10006;'),
                  s.addEventListener(
                    'click',
                    function (t) {
                      t.stopPropagation(),
                        this.removeElement(this.toastElement),
                        window.clearTimeout(this.toastElement.timeOutValue)
                    }.bind(this)
                  )
                var n = window.innerWidth > 0 ? window.innerWidth : screen.width
                ;('left' == this.options.position || !0 === this.options.positionLeft) && n > 360
                  ? t.insertAdjacentElement('afterbegin', s)
                  : t.appendChild(s)
              }
              if (this.options.stopOnFocus && this.options.duration > 0) {
                var a = this
                t.addEventListener('mouseover', function (o) {
                  window.clearTimeout(t.timeOutValue)
                }),
                  t.addEventListener('mouseleave', function () {
                    t.timeOutValue = window.setTimeout(function () {
                      a.removeElement(t)
                    }, a.options.duration)
                  })
              }
              if (
                (void 0 !== this.options.destination &&
                  t.addEventListener(
                    'click',
                    function (t) {
                      t.stopPropagation(),
                        !0 === this.options.newWindow
                          ? window.open(this.options.destination, '_blank')
                          : (window.location = this.options.destination)
                    }.bind(this)
                  ),
                'function' == typeof this.options.onClick &&
                  void 0 === this.options.destination &&
                  t.addEventListener(
                    'click',
                    function (t) {
                      t.stopPropagation(), this.options.onClick()
                    }.bind(this)
                  ),
                'object' == typeof this.options.offset)
              ) {
                var r = e('x', this.options),
                  l = e('y', this.options),
                  d = 'left' == this.options.position ? r : '-' + r,
                  c = 'toastify-top' == this.options.gravity ? l : '-' + l
                t.style.transform = 'translate(' + d + ',' + c + ')'
              }
              return t
            },
            showToast: function () {
              var t
              if (
                ((this.toastElement = this.buildToast()),
                !(t =
                  'string' == typeof this.options.selector
                    ? document.getElementById(this.options.selector)
                    : this.options.selector instanceof HTMLElement ||
                      ('undefined' != typeof ShadowRoot &&
                        this.options.selector instanceof ShadowRoot)
                    ? this.options.selector
                    : document.body))
              )
                throw 'Root element is not defined'
              var e = o.defaults.oldestFirst ? t.firstChild : t.lastChild
              return (
                t.insertBefore(this.toastElement, e),
                o.reposition(),
                this.options.duration > 0 &&
                  (this.toastElement.timeOutValue = window.setTimeout(
                    function () {
                      this.removeElement(this.toastElement)
                    }.bind(this),
                    this.options.duration
                  )),
                this
              )
            },
            hideToast: function () {
              this.toastElement.timeOutValue && clearTimeout(this.toastElement.timeOutValue),
                this.removeElement(this.toastElement)
            },
            removeElement: function (t) {
              ;(t.className = t.className.replace(' on', '')),
                window.setTimeout(
                  function () {
                    this.options.node &&
                      this.options.node.parentNode &&
                      this.options.node.parentNode.removeChild(this.options.node),
                      t.parentNode && t.parentNode.removeChild(t),
                      this.options.callback.call(t),
                      o.reposition()
                  }.bind(this),
                  400
                )
            },
          }),
        (o.reposition = function () {
          for (
            var t,
              o = { top: 15, bottom: 15 },
              e = { top: 15, bottom: 15 },
              s = { top: 15, bottom: 15 },
              n = document.getElementsByClassName('toastify'),
              a = 0;
            a < n.length;
            a++
          ) {
            t = !0 === i(n[a], 'toastify-top') ? 'toastify-top' : 'toastify-bottom'
            var r = n[a].offsetHeight
            ;(t = t.substr(9, t.length - 1)),
              (window.innerWidth > 0 ? window.innerWidth : screen.width) <= 360
                ? ((n[a].style[t] = s[t] + 'px'), (s[t] += r + 15))
                : !0 === i(n[a], 'toastify-left')
                ? ((n[a].style[t] = o[t] + 'px'), (o[t] += r + 15))
                : ((n[a].style[t] = e[t] + 'px'), (e[t] += r + 15))
          }
          return this
        }),
        (o.lib.init.prototype = o.lib),
        o
      )
    }),
    l ? (l = a()) : (n.Toastify = a()),
    r.init('user_hYeCfF0DkAoQPn3bOS7WR'),
    (window.onload = function () {
      document.getElementById('contact-form').addEventListener('submit', function (o) {
        o.preventDefault()
        document.getElementById('submit').value = 'Sending...'
        ;(this.contact_number.value = (1e5 * Math.random()) | 0),
          r.sendForm('contact_service', 'contact_form', this).then(
            function () {
              ;(document.getElementById('submit').value = 'Success!'),
                (document.getElementById('submit').style.cssText =
                  'background: var(--dracula-green); color: var(--dracula-background); text-shadow: none; box-shadow: 0 3px 0 rgb(16, 197, 61);')
              console.log('SUCCESS!'),
                setTimeout(function () {
                  document.forms['contact-form'].reset(),
                    (document.getElementById('submit').value = 'Submit'),
                    (document.getElementById('submit').style = '')
                }, 3e3)
            },
            function (o) {
              t(l)({
                text: 'Error: Unable to Connect To Email Server',
                duration: -1,
                close: !0,
                gravity: 'top',
                position: 'right',
                stopOnFocus: !0,
                offset: { x: 10, y: 100 },
                style: { background: 'var(--dracula-red)' },
                onClick: function () {},
              }).showToast()
              ;(document.getElementById('submit').value = 'Failed!'),
                (document.getElementById('submit').style.cssText =
                  'background: var(--dracula-red); box-shadow: 0 3px 0 rgb(219, 43, 43); color: var(--dracula-foreground')
              console.log('FAILED...', o),
                setTimeout(function () {
                  document.forms['contact-form'].reset(),
                    (document.getElementById('submit').value = 'Submit'),
                    (document.getElementById('submit').style = '')
                }, 3e3),
                console.log(o)
            }
          )
      })
    })
})()
//# sourceMappingURL=contact.d7b9878e.js.map
