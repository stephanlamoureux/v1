!(function () {
  function e(e) {
    return e ? (e.nodeName || '').toLowerCase() : null
  }
  function t(e) {
    if (null == e) return window
    if ('[object Window]' !== e.toString()) {
      var t = e.ownerDocument
      return (t && t.defaultView) || window
    }
    return e
  }
  function n(e) {
    return e instanceof t(e).Element || e instanceof Element
  }
  function r(e) {
    return e instanceof t(e).HTMLElement || e instanceof HTMLElement
  }
  function i(e) {
    return (
      'undefined' != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
    )
  }
  var o = {
      name: 'applyStyles',
      enabled: !0,
      phase: 'write',
      fn: function (t) {
        var n = t.state
        Object.keys(n.elements).forEach(function (t) {
          var i = n.styles[t] || {},
            o = n.attributes[t] || {},
            a = n.elements[t]
          r(a) &&
            e(a) &&
            (Object.assign(a.style, i),
            Object.keys(o).forEach(function (e) {
              var t = o[e]
              !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? '' : t)
            }))
        })
      },
      effect: function (t) {
        var n = t.state,
          i = {
            popper: { position: n.options.strategy, left: '0', top: '0', margin: '0' },
            arrow: { position: 'absolute' },
            reference: {},
          }
        return (
          Object.assign(n.elements.popper.style, i.popper),
          (n.styles = i),
          n.elements.arrow && Object.assign(n.elements.arrow.style, i.arrow),
          function () {
            Object.keys(n.elements).forEach(function (t) {
              var o = n.elements[t],
                a = n.attributes[t] || {},
                s = Object.keys(n.styles.hasOwnProperty(t) ? n.styles[t] : i[t]).reduce(function (
                  e,
                  t
                ) {
                  return (e[t] = ''), e
                },
                {})
              r(o) &&
                e(o) &&
                (Object.assign(o.style, s),
                Object.keys(a).forEach(function (e) {
                  o.removeAttribute(e)
                }))
            })
          }
        )
      },
      requires: ['computeStyles'],
    },
    a = Math.max,
    s = Math.min,
    c = Math.round
  function u(e, t) {
    void 0 === t && (t = !1)
    var n = e.getBoundingClientRect(),
      i = 1,
      o = 1
    if (r(e) && t) {
      var a = e.offsetHeight,
        s = e.offsetWidth
      s > 0 && (i = c(n.width) / s || 1), a > 0 && (o = c(n.height) / a || 1)
    }
    return {
      width: n.width / i,
      height: n.height / o,
      top: n.top / o,
      right: n.right / i,
      bottom: n.bottom / o,
      left: n.left / i,
      x: n.left / i,
      y: n.top / o,
    }
  }
  function f(e) {
    var n = t(e)
    return { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset }
  }
  function p(e) {
    return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement
  }
  function d(e) {
    return u(p(e)).left + f(e).scrollLeft
  }
  function l(e) {
    return t(e).getComputedStyle(e)
  }
  function m(e) {
    var t = l(e),
      n = t.overflow,
      r = t.overflowX,
      i = t.overflowY
    return /auto|scroll|overlay|hidden/.test(n + i + r)
  }
  function v(n, i, o) {
    void 0 === o && (o = !1)
    var a,
      s,
      l = r(i),
      v =
        r(i) &&
        (function (e) {
          var t = e.getBoundingClientRect(),
            n = c(t.width) / e.offsetWidth || 1,
            r = c(t.height) / e.offsetHeight || 1
          return 1 !== n || 1 !== r
        })(i),
      h = p(i),
      g = u(n, v),
      y = { scrollLeft: 0, scrollTop: 0 },
      b = { x: 0, y: 0 }
    return (
      (l || (!l && !o)) &&
        (('body' !== e(i) || m(h)) &&
          (y =
            (a = i) !== t(a) && r(a)
              ? { scrollLeft: (s = a).scrollLeft, scrollTop: s.scrollTop }
              : f(a)),
        r(i) ? (((b = u(i, !0)).x += i.clientLeft), (b.y += i.clientTop)) : h && (b.x = d(h))),
      {
        x: g.left + y.scrollLeft - b.x,
        y: g.top + y.scrollTop - b.y,
        width: g.width,
        height: g.height,
      }
    )
  }
  function h(e) {
    var t = u(e),
      n = e.offsetWidth,
      r = e.offsetHeight
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    )
  }
  function g(t) {
    return 'html' === e(t) ? t : t.assignedSlot || t.parentNode || (i(t) ? t.host : null) || p(t)
  }
  function y(t) {
    return ['html', 'body', '#document'].indexOf(e(t)) >= 0
      ? t.ownerDocument.body
      : r(t) && m(t)
      ? t
      : y(g(t))
  }
  function b(e, n) {
    var r
    void 0 === n && (n = [])
    var i = y(e),
      o = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
      a = t(i),
      s = o ? [a].concat(a.visualViewport || [], m(i) ? i : []) : i,
      c = n.concat(s)
    return o ? c : c.concat(b(g(s)))
  }
  function w(t) {
    return ['table', 'td', 'th'].indexOf(e(t)) >= 0
  }
  function x(e) {
    return r(e) && 'fixed' !== l(e).position ? e.offsetParent : null
  }
  function O(n) {
    for (var o = t(n), a = x(n); a && w(a) && 'static' === l(a).position; ) a = x(a)
    return a && ('html' === e(a) || ('body' === e(a) && 'static' === l(a).position))
      ? o
      : a ||
          (function (t) {
            var n = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox')
            if (-1 !== navigator.userAgent.indexOf('Trident') && r(t) && 'fixed' === l(t).position)
              return null
            var o = g(t)
            for (i(o) && (o = o.host); r(o) && ['html', 'body'].indexOf(e(o)) < 0; ) {
              var a = l(o)
              if (
                'none' !== a.transform ||
                'none' !== a.perspective ||
                'paint' === a.contain ||
                -1 !== ['transform', 'perspective'].indexOf(a.willChange) ||
                (n && 'filter' === a.willChange) ||
                (n && a.filter && 'none' !== a.filter)
              )
                return o
              o = o.parentNode
            }
            return null
          })(n) ||
          o
  }
  var E = 'top',
    A = 'bottom',
    T = 'right',
    D = 'left',
    j = 'auto',
    L = [E, A, T, D],
    k = 'start',
    C = 'end',
    M = 'viewport',
    H = 'popper',
    V = L.reduce(function (e, t) {
      return e.concat([t + '-' + k, t + '-' + C])
    }, []),
    S = [].concat(L, [j]).reduce(function (e, t) {
      return e.concat([t, t + '-' + k, t + '-' + C])
    }, []),
    P = [
      'beforeRead',
      'read',
      'afterRead',
      'beforeMain',
      'main',
      'afterMain',
      'beforeWrite',
      'write',
      'afterWrite',
    ]
  function W(e) {
    var t = new Map(),
      n = new Set(),
      r = []
    function i(e) {
      n.add(e.name),
        [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
          if (!n.has(e)) {
            var r = t.get(e)
            r && i(r)
          }
        }),
        r.push(e)
    }
    return (
      e.forEach(function (e) {
        t.set(e.name, e)
      }),
      e.forEach(function (e) {
        n.has(e.name) || i(e)
      }),
      r
    )
  }
  function B(e) {
    var t = W(e)
    return P.reduce(function (e, n) {
      return e.concat(
        t.filter(function (e) {
          return e.phase === n
        })
      )
    }, [])
  }
  function R(e) {
    var t = e.reduce(function (e, t) {
      var n = e[t.name]
      return (
        (e[t.name] = n
          ? Object.assign({}, n, t, {
              options: Object.assign({}, n.options, t.options),
              data: Object.assign({}, n.data, t.data),
            })
          : t),
        e
      )
    }, {})
    return Object.keys(t).map(function (e) {
      return t[e]
    })
  }
  var N = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
  function I() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
    return !t.some(function (e) {
      return !(e && 'function' == typeof e.getBoundingClientRect)
    })
  }
  function q(e) {
    void 0 === e && (e = {})
    var t = e,
      r = t.defaultModifiers,
      i = void 0 === r ? [] : r,
      o = t.defaultOptions,
      a = void 0 === o ? N : o
    return function (e, t, r) {
      void 0 === r && (r = a)
      var o,
        s,
        c = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, N, a),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        u = [],
        f = !1,
        p = {
          state: c,
          setOptions: function (r) {
            var o = 'function' == typeof r ? r(c.options) : r
            d(),
              (c.options = Object.assign({}, a, c.options, o)),
              (c.scrollParents = {
                reference: n(e) ? b(e) : e.contextElement ? b(e.contextElement) : [],
                popper: b(t),
              })
            var s = B(R([].concat(i, c.options.modifiers)))
            return (
              (c.orderedModifiers = s.filter(function (e) {
                return e.enabled
              })),
              c.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options,
                  r = void 0 === n ? {} : n,
                  i = e.effect
                if ('function' == typeof i) {
                  var o = i({ state: c, name: t, instance: p, options: r }),
                    a = function () {}
                  u.push(o || a)
                }
              }),
              p.update()
            )
          },
          forceUpdate: function () {
            if (!f) {
              var e = c.elements,
                t = e.reference,
                n = e.popper
              if (I(t, n)) {
                ;(c.rects = {
                  reference: v(t, O(n), 'fixed' === c.options.strategy),
                  popper: h(n),
                }),
                  (c.reset = !1),
                  (c.placement = c.options.placement),
                  c.orderedModifiers.forEach(function (e) {
                    return (c.modifiersData[e.name] = Object.assign({}, e.data))
                  })
                for (var r = 0; r < c.orderedModifiers.length; r++)
                  if (!0 !== c.reset) {
                    var i = c.orderedModifiers[r],
                      o = i.fn,
                      a = i.options,
                      s = void 0 === a ? {} : a,
                      u = i.name
                    'function' == typeof o &&
                      (c = o({ state: c, options: s, name: u, instance: p }) || c)
                  } else (c.reset = !1), (r = -1)
              }
            }
          },
          update:
            ((o = function () {
              return new Promise(function (e) {
                p.forceUpdate(), e(c)
              })
            }),
            function () {
              return (
                s ||
                  (s = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      ;(s = void 0), e(o())
                    })
                  })),
                s
              )
            }),
          destroy: function () {
            d(), (f = !0)
          },
        }
      if (!I(e, t)) return p
      function d() {
        u.forEach(function (e) {
          return e()
        }),
          (u = [])
      }
      return (
        p.setOptions(r).then(function (e) {
          !f && r.onFirstUpdate && r.onFirstUpdate(e)
        }),
        p
      )
    }
  }
  var U = { passive: !0 }
  function _(e) {
    return e.split('-')[0]
  }
  function F(e) {
    return e.split('-')[1]
  }
  function z(e) {
    return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
  }
  function $(e) {
    var t,
      n = e.reference,
      r = e.element,
      i = e.placement,
      o = i ? _(i) : null,
      a = i ? F(i) : null,
      s = n.x + n.width / 2 - r.width / 2,
      c = n.y + n.height / 2 - r.height / 2
    switch (o) {
      case E:
        t = { x: s, y: n.y - r.height }
        break
      case A:
        t = { x: s, y: n.y + n.height }
        break
      case T:
        t = { x: n.x + n.width, y: c }
        break
      case D:
        t = { x: n.x - r.width, y: c }
        break
      default:
        t = { x: n.x, y: n.y }
    }
    var u = o ? z(o) : null
    if (null != u) {
      var f = 'y' === u ? 'height' : 'width'
      switch (a) {
        case k:
          t[u] = t[u] - (n[f] / 2 - r[f] / 2)
          break
        case C:
          t[u] = t[u] + (n[f] / 2 - r[f] / 2)
      }
    }
    return t
  }
  var X = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
  function Y(e) {
    var n,
      r = e.popper,
      i = e.popperRect,
      o = e.placement,
      a = e.variation,
      s = e.offsets,
      u = e.position,
      f = e.gpuAcceleration,
      d = e.adaptive,
      m = e.roundOffsets,
      v = e.isFixed,
      h = s.x,
      g = void 0 === h ? 0 : h,
      y = s.y,
      b = void 0 === y ? 0 : y,
      w = 'function' == typeof m ? m({ x: g, y: b }) : { x: g, y: b }
    ;(g = w.x), (b = w.y)
    var x = s.hasOwnProperty('x'),
      j = s.hasOwnProperty('y'),
      L = D,
      k = E,
      M = window
    if (d) {
      var H = O(r),
        V = 'clientHeight',
        S = 'clientWidth'
      if (
        (H === t(r) &&
          'static' !== l((H = p(r))).position &&
          'absolute' === u &&
          ((V = 'scrollHeight'), (S = 'scrollWidth')),
        o === E || ((o === D || o === T) && a === C))
      )
        (k = A),
          (b -= (v && H === M && M.visualViewport ? M.visualViewport.height : H[V]) - i.height),
          (b *= f ? 1 : -1)
      if (o === D || ((o === E || o === A) && a === C))
        (L = T),
          (g -= (v && H === M && M.visualViewport ? M.visualViewport.width : H[S]) - i.width),
          (g *= f ? 1 : -1)
    }
    var P,
      W = Object.assign({ position: u }, d && X),
      B =
        !0 === m
          ? (function (e) {
              var t = e.x,
                n = e.y,
                r = window.devicePixelRatio || 1
              return { x: c(t * r) / r || 0, y: c(n * r) / r || 0 }
            })({ x: g, y: b })
          : { x: g, y: b }
    return (
      (g = B.x),
      (b = B.y),
      f
        ? Object.assign(
            {},
            W,
            (((P = {})[k] = j ? '0' : ''),
            (P[L] = x ? '0' : ''),
            (P.transform =
              (M.devicePixelRatio || 1) <= 1
                ? 'translate(' + g + 'px, ' + b + 'px)'
                : 'translate3d(' + g + 'px, ' + b + 'px, 0)'),
            P)
          )
        : Object.assign(
            {},
            W,
            (((n = {})[k] = j ? b + 'px' : ''), (n[L] = x ? g + 'px' : ''), (n.transform = ''), n)
          )
    )
  }
  var J = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
  function G(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return J[e]
    })
  }
  var K = { start: 'end', end: 'start' }
  function Q(e) {
    return e.replace(/start|end/g, function (e) {
      return K[e]
    })
  }
  function Z(e) {
    var n = t(e),
      r = p(e),
      i = n.visualViewport,
      o = r.clientWidth,
      a = r.clientHeight,
      s = 0,
      c = 0
    return (
      i &&
        ((o = i.width),
        (a = i.height),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
          ((s = i.offsetLeft), (c = i.offsetTop))),
      { width: o, height: a, x: s + d(e), y: c }
    )
  }
  function ee(e) {
    var t,
      n = p(e),
      r = f(e),
      i = null == (t = e.ownerDocument) ? void 0 : t.body,
      o = a(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
      s = a(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
      c = -r.scrollLeft + d(e),
      u = -r.scrollTop
    return (
      'rtl' === l(i || n).direction && (c += a(n.clientWidth, i ? i.clientWidth : 0) - o),
      { width: o, height: s, x: c, y: u }
    )
  }
  function te(e, t) {
    var n = t.getRootNode && t.getRootNode()
    if (e.contains(t)) return !0
    if (n && i(n)) {
      var r = t
      do {
        if (r && e.isSameNode(r)) return !0
        r = r.parentNode || r.host
      } while (r)
    }
    return !1
  }
  function ne(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    })
  }
  function re(e, t) {
    return t === M
      ? ne(Z(e))
      : n(t)
      ? (function (e) {
          var t = u(e)
          return (
            (t.top = t.top + e.clientTop),
            (t.left = t.left + e.clientLeft),
            (t.bottom = t.top + e.clientHeight),
            (t.right = t.left + e.clientWidth),
            (t.width = e.clientWidth),
            (t.height = e.clientHeight),
            (t.x = t.left),
            (t.y = t.top),
            t
          )
        })(t)
      : ne(ee(p(e)))
  }
  function ie(t, i, o) {
    var c =
        'clippingParents' === i
          ? (function (t) {
              var i = b(g(t)),
                o = ['absolute', 'fixed'].indexOf(l(t).position) >= 0 && r(t) ? O(t) : t
              return n(o)
                ? i.filter(function (t) {
                    return n(t) && te(t, o) && 'body' !== e(t)
                  })
                : []
            })(t)
          : [].concat(i),
      u = [].concat(c, [o]),
      f = u[0],
      p = u.reduce(function (e, n) {
        var r = re(t, n)
        return (
          (e.top = a(r.top, e.top)),
          (e.right = s(r.right, e.right)),
          (e.bottom = s(r.bottom, e.bottom)),
          (e.left = a(r.left, e.left)),
          e
        )
      }, re(t, f))
    return (
      (p.width = p.right - p.left), (p.height = p.bottom - p.top), (p.x = p.left), (p.y = p.top), p
    )
  }
  function oe(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e)
  }
  function ae(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t
    }, {})
  }
  function se(e, t) {
    void 0 === t && (t = {})
    var r = t,
      i = r.placement,
      o = void 0 === i ? e.placement : i,
      a = r.boundary,
      s = void 0 === a ? 'clippingParents' : a,
      c = r.rootBoundary,
      f = void 0 === c ? M : c,
      d = r.elementContext,
      l = void 0 === d ? H : d,
      m = r.altBoundary,
      v = void 0 !== m && m,
      h = r.padding,
      g = void 0 === h ? 0 : h,
      y = oe('number' != typeof g ? g : ae(g, L)),
      b = l === H ? 'reference' : H,
      w = e.rects.popper,
      x = e.elements[v ? b : l],
      O = ie(n(x) ? x : x.contextElement || p(e.elements.popper), s, f),
      D = u(e.elements.reference),
      j = $({ reference: D, element: w, strategy: 'absolute', placement: o }),
      k = ne(Object.assign({}, w, j)),
      C = l === H ? k : D,
      V = {
        top: O.top - C.top + y.top,
        bottom: C.bottom - O.bottom + y.bottom,
        left: O.left - C.left + y.left,
        right: C.right - O.right + y.right,
      },
      S = e.modifiersData.offset
    if (l === H && S) {
      var P = S[o]
      Object.keys(V).forEach(function (e) {
        var t = [T, A].indexOf(e) >= 0 ? 1 : -1,
          n = [E, A].indexOf(e) >= 0 ? 'y' : 'x'
        V[e] += P[n] * t
      })
    }
    return V
  }
  function ce(e, t) {
    void 0 === t && (t = {})
    var n = t,
      r = n.placement,
      i = n.boundary,
      o = n.rootBoundary,
      a = n.padding,
      s = n.flipVariations,
      c = n.allowedAutoPlacements,
      u = void 0 === c ? S : c,
      f = F(r),
      p = f
        ? s
          ? V
          : V.filter(function (e) {
              return F(e) === f
            })
        : L,
      d = p.filter(function (e) {
        return u.indexOf(e) >= 0
      })
    0 === d.length && (d = p)
    var l = d.reduce(function (t, n) {
      return (t[n] = se(e, { placement: n, boundary: i, rootBoundary: o, padding: a })[_(n)]), t
    }, {})
    return Object.keys(l).sort(function (e, t) {
      return l[e] - l[t]
    })
  }
  function ue(e, t, n) {
    return a(e, s(t, n))
  }
  function fe(e, t, n) {
    var r = ue(e, t, n)
    return r > n ? n : r
  }
  function pe(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    )
  }
  function de(e) {
    return [E, T, A, D].some(function (t) {
      return e[t] >= 0
    })
  }
  var le = q({
      defaultModifiers: [
        {
          name: 'eventListeners',
          enabled: !0,
          phase: 'write',
          fn: function () {},
          effect: function (e) {
            var n = e.state,
              r = e.instance,
              i = e.options,
              o = i.scroll,
              a = void 0 === o || o,
              s = i.resize,
              c = void 0 === s || s,
              u = t(n.elements.popper),
              f = [].concat(n.scrollParents.reference, n.scrollParents.popper)
            return (
              a &&
                f.forEach(function (e) {
                  e.addEventListener('scroll', r.update, U)
                }),
              c && u.addEventListener('resize', r.update, U),
              function () {
                a &&
                  f.forEach(function (e) {
                    e.removeEventListener('scroll', r.update, U)
                  }),
                  c && u.removeEventListener('resize', r.update, U)
              }
            )
          },
          data: {},
        },
        {
          name: 'popperOffsets',
          enabled: !0,
          phase: 'read',
          fn: function (e) {
            var t = e.state,
              n = e.name
            t.modifiersData[n] = $({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: 'absolute',
              placement: t.placement,
            })
          },
          data: {},
        },
        {
          name: 'computeStyles',
          enabled: !0,
          phase: 'beforeWrite',
          fn: function (e) {
            var t = e.state,
              n = e.options,
              r = n.gpuAcceleration,
              i = void 0 === r || r,
              o = n.adaptive,
              a = void 0 === o || o,
              s = n.roundOffsets,
              c = void 0 === s || s,
              u = {
                placement: _(t.placement),
                variation: F(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: i,
                isFixed: 'fixed' === t.options.strategy,
              }
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                Y(
                  Object.assign({}, u, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: a,
                    roundOffsets: c,
                  })
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  Y(
                    Object.assign({}, u, {
                      offsets: t.modifiersData.arrow,
                      position: 'absolute',
                      adaptive: !1,
                      roundOffsets: c,
                    })
                  )
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                'data-popper-placement': t.placement,
              }))
          },
          data: {},
        },
        o,
        {
          name: 'offset',
          enabled: !0,
          phase: 'main',
          requires: ['popperOffsets'],
          fn: function (e) {
            var t = e.state,
              n = e.options,
              r = e.name,
              i = n.offset,
              o = void 0 === i ? [0, 0] : i,
              a = S.reduce(function (e, n) {
                return (
                  (e[n] = (function (e, t, n) {
                    var r = _(e),
                      i = [D, E].indexOf(r) >= 0 ? -1 : 1,
                      o = 'function' == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
                      a = o[0],
                      s = o[1]
                    return (
                      (a = a || 0),
                      (s = (s || 0) * i),
                      [D, T].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                    )
                  })(n, t.rects, o)),
                  e
                )
              }, {}),
              s = a[t.placement],
              c = s.x,
              u = s.y
            null != t.modifiersData.popperOffsets &&
              ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += u)),
              (t.modifiersData[r] = a)
          },
        },
        {
          name: 'flip',
          enabled: !0,
          phase: 'main',
          fn: function (e) {
            var t = e.state,
              n = e.options,
              r = e.name
            if (!t.modifiersData[r]._skip) {
              for (
                var i = n.mainAxis,
                  o = void 0 === i || i,
                  a = n.altAxis,
                  s = void 0 === a || a,
                  c = n.fallbackPlacements,
                  u = n.padding,
                  f = n.boundary,
                  p = n.rootBoundary,
                  d = n.altBoundary,
                  l = n.flipVariations,
                  m = void 0 === l || l,
                  v = n.allowedAutoPlacements,
                  h = t.options.placement,
                  g = _(h),
                  y =
                    c ||
                    (g === h || !m
                      ? [G(h)]
                      : (function (e) {
                          if (_(e) === j) return []
                          var t = G(e)
                          return [Q(e), t, Q(t)]
                        })(h)),
                  b = [h].concat(y).reduce(function (e, n) {
                    return e.concat(
                      _(n) === j
                        ? ce(t, {
                            placement: n,
                            boundary: f,
                            rootBoundary: p,
                            padding: u,
                            flipVariations: m,
                            allowedAutoPlacements: v,
                          })
                        : n
                    )
                  }, []),
                  w = t.rects.reference,
                  x = t.rects.popper,
                  O = new Map(),
                  L = !0,
                  C = b[0],
                  M = 0;
                M < b.length;
                M++
              ) {
                var H = b[M],
                  V = _(H),
                  S = F(H) === k,
                  P = [E, A].indexOf(V) >= 0,
                  W = P ? 'width' : 'height',
                  B = se(t, {
                    placement: H,
                    boundary: f,
                    rootBoundary: p,
                    altBoundary: d,
                    padding: u,
                  }),
                  R = P ? (S ? T : D) : S ? A : E
                w[W] > x[W] && (R = G(R))
                var N = G(R),
                  I = []
                if (
                  (o && I.push(B[V] <= 0),
                  s && I.push(B[R] <= 0, B[N] <= 0),
                  I.every(function (e) {
                    return e
                  }))
                ) {
                  ;(C = H), (L = !1)
                  break
                }
                O.set(H, I)
              }
              if (L)
                for (
                  var q = function (e) {
                      var t = b.find(function (t) {
                        var n = O.get(t)
                        if (n)
                          return n.slice(0, e).every(function (e) {
                            return e
                          })
                      })
                      if (t) return (C = t), 'break'
                    },
                    U = m ? 3 : 1;
                  U > 0;
                  U--
                ) {
                  if ('break' === q(U)) break
                }
              t.placement !== C &&
                ((t.modifiersData[r]._skip = !0), (t.placement = C), (t.reset = !0))
            }
          },
          requiresIfExists: ['offset'],
          data: { _skip: !1 },
        },
        {
          name: 'preventOverflow',
          enabled: !0,
          phase: 'main',
          fn: function (e) {
            var t = e.state,
              n = e.options,
              r = e.name,
              i = n.mainAxis,
              o = void 0 === i || i,
              c = n.altAxis,
              u = void 0 !== c && c,
              f = n.boundary,
              p = n.rootBoundary,
              d = n.altBoundary,
              l = n.padding,
              m = n.tether,
              v = void 0 === m || m,
              g = n.tetherOffset,
              y = void 0 === g ? 0 : g,
              b = se(t, { boundary: f, rootBoundary: p, padding: l, altBoundary: d }),
              w = _(t.placement),
              x = F(t.placement),
              j = !x,
              L = z(w),
              C = 'x' === L ? 'y' : 'x',
              M = t.modifiersData.popperOffsets,
              H = t.rects.reference,
              V = t.rects.popper,
              S =
                'function' == typeof y
                  ? y(Object.assign({}, t.rects, { placement: t.placement }))
                  : y,
              P =
                'number' == typeof S
                  ? { mainAxis: S, altAxis: S }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
              W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
              B = { x: 0, y: 0 }
            if (M) {
              if (o) {
                var R,
                  N = 'y' === L ? E : D,
                  I = 'y' === L ? A : T,
                  q = 'y' === L ? 'height' : 'width',
                  U = M[L],
                  $ = U + b[N],
                  X = U - b[I],
                  Y = v ? -V[q] / 2 : 0,
                  J = x === k ? H[q] : V[q],
                  G = x === k ? -V[q] : -H[q],
                  K = t.elements.arrow,
                  Q = v && K ? h(K) : { width: 0, height: 0 },
                  Z = t.modifiersData['arrow#persistent']
                    ? t.modifiersData['arrow#persistent'].padding
                    : { top: 0, right: 0, bottom: 0, left: 0 },
                  ee = Z[N],
                  te = Z[I],
                  ne = ue(0, H[q], Q[q]),
                  re = j ? H[q] / 2 - Y - ne - ee - P.mainAxis : J - ne - ee - P.mainAxis,
                  ie = j ? -H[q] / 2 + Y + ne + te + P.mainAxis : G + ne + te + P.mainAxis,
                  oe = t.elements.arrow && O(t.elements.arrow),
                  ae = oe ? ('y' === L ? oe.clientTop || 0 : oe.clientLeft || 0) : 0,
                  ce = null != (R = null == W ? void 0 : W[L]) ? R : 0,
                  pe = U + ie - ce,
                  de = ue(v ? s($, U + re - ce - ae) : $, U, v ? a(X, pe) : X)
                ;(M[L] = de), (B[L] = de - U)
              }
              if (u) {
                var le,
                  me = 'x' === L ? E : D,
                  ve = 'x' === L ? A : T,
                  he = M[C],
                  ge = 'y' === C ? 'height' : 'width',
                  ye = he + b[me],
                  be = he - b[ve],
                  we = -1 !== [E, D].indexOf(w),
                  xe = null != (le = null == W ? void 0 : W[C]) ? le : 0,
                  Oe = we ? ye : he - H[ge] - V[ge] - xe + P.altAxis,
                  Ee = we ? he + H[ge] + V[ge] - xe - P.altAxis : be,
                  Ae = v && we ? fe(Oe, he, Ee) : ue(v ? Oe : ye, he, v ? Ee : be)
                ;(M[C] = Ae), (B[C] = Ae - he)
              }
              t.modifiersData[r] = B
            }
          },
          requiresIfExists: ['offset'],
        },
        {
          name: 'arrow',
          enabled: !0,
          phase: 'main',
          fn: function (e) {
            var t,
              n = e.state,
              r = e.name,
              i = e.options,
              o = n.elements.arrow,
              a = n.modifiersData.popperOffsets,
              s = _(n.placement),
              c = z(s),
              u = [D, T].indexOf(s) >= 0 ? 'height' : 'width'
            if (o && a) {
              var f = (function (e, t) {
                  return oe(
                    'number' !=
                      typeof (e =
                        'function' == typeof e
                          ? e(Object.assign({}, t.rects, { placement: t.placement }))
                          : e)
                      ? e
                      : ae(e, L)
                  )
                })(i.padding, n),
                p = h(o),
                d = 'y' === c ? E : D,
                l = 'y' === c ? A : T,
                m = n.rects.reference[u] + n.rects.reference[c] - a[c] - n.rects.popper[u],
                v = a[c] - n.rects.reference[c],
                g = O(o),
                y = g ? ('y' === c ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
                b = m / 2 - v / 2,
                w = f[d],
                x = y - p[u] - f[l],
                j = y / 2 - p[u] / 2 + b,
                k = ue(w, j, x),
                C = c
              n.modifiersData[r] = (((t = {})[C] = k), (t.centerOffset = k - j), t)
            }
          },
          effect: function (e) {
            var t = e.state,
              n = e.options.element,
              r = void 0 === n ? '[data-popper-arrow]' : n
            null != r &&
              ('string' != typeof r || (r = t.elements.popper.querySelector(r))) &&
              te(t.elements.popper, r) &&
              (t.elements.arrow = r)
          },
          requires: ['popperOffsets'],
          requiresIfExists: ['preventOverflow'],
        },
        {
          name: 'hide',
          enabled: !0,
          phase: 'main',
          requiresIfExists: ['preventOverflow'],
          fn: function (e) {
            var t = e.state,
              n = e.name,
              r = t.rects.reference,
              i = t.rects.popper,
              o = t.modifiersData.preventOverflow,
              a = se(t, { elementContext: 'reference' }),
              s = se(t, { altBoundary: !0 }),
              c = pe(a, r),
              u = pe(s, i, o),
              f = de(c),
              p = de(u)
            ;(t.modifiersData[n] = {
              referenceClippingOffsets: c,
              popperEscapeOffsets: u,
              isReferenceHidden: f,
              hasPopperEscaped: p,
            }),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                'data-popper-reference-hidden': f,
                'data-popper-escaped': p,
              }))
          },
        },
      ],
    }),
    me = 'tippy-content',
    ve = 'tippy-backdrop',
    he = 'tippy-arrow',
    ge = 'tippy-svg-arrow',
    ye = { passive: !0, capture: !0 },
    be = function () {
      return document.body
    }
  function we(e, t, n) {
    if (Array.isArray(e)) {
      var r = e[t]
      return null == r ? (Array.isArray(n) ? n[t] : n) : r
    }
    return e
  }
  function xe(e, t) {
    var n = {}.toString.call(e)
    return 0 === n.indexOf('[object') && n.indexOf(t + ']') > -1
  }
  function Oe(e, t) {
    return 'function' == typeof e ? e.apply(void 0, t) : e
  }
  function Ee(e, t) {
    return 0 === t
      ? e
      : function (r) {
          clearTimeout(n),
            (n = setTimeout(function () {
              e(r)
            }, t))
        }
    var n
  }
  function Ae(e) {
    return [].concat(e)
  }
  function Te(e, t) {
    ;-1 === e.indexOf(t) && e.push(t)
  }
  function De(e) {
    return e.split('-')[0]
  }
  function je(e) {
    return [].slice.call(e)
  }
  function Le(e) {
    return Object.keys(e).reduce(function (t, n) {
      return void 0 !== e[n] && (t[n] = e[n]), t
    }, {})
  }
  function ke() {
    return document.createElement('div')
  }
  function Ce(e) {
    return ['Element', 'Fragment'].some(function (t) {
      return xe(e, t)
    })
  }
  function Me(e) {
    return xe(e, 'MouseEvent')
  }
  function He(e) {
    return !(!e || !e._tippy || e._tippy.reference !== e)
  }
  function Ve(e) {
    return Ce(e)
      ? [e]
      : (function (e) {
          return xe(e, 'NodeList')
        })(e)
      ? je(e)
      : Array.isArray(e)
      ? e
      : je(document.querySelectorAll(e))
  }
  function Se(e, t) {
    e.forEach(function (e) {
      e && (e.style.transitionDuration = t + 'ms')
    })
  }
  function Pe(e, t) {
    e.forEach(function (e) {
      e && e.setAttribute('data-state', t)
    })
  }
  function We(e) {
    var t,
      n = Ae(e)[0]
    return null != n && null != (t = n.ownerDocument) && t.body ? n.ownerDocument : document
  }
  function Be(e, t, n) {
    var r = t + 'EventListener'
    ;['transitionend', 'webkitTransitionEnd'].forEach(function (t) {
      e[r](t, n)
    })
  }
  function Re(e, t) {
    for (var n = t; n; ) {
      var r
      if (e.contains(n)) return !0
      n = null == n.getRootNode || null == (r = n.getRootNode()) ? void 0 : r.host
    }
    return !1
  }
  var Ne = { isTouch: !1 },
    Ie = 0
  function qe() {
    Ne.isTouch ||
      ((Ne.isTouch = !0), window.performance && document.addEventListener('mousemove', Ue))
  }
  function Ue() {
    var e = performance.now()
    e - Ie < 20 && ((Ne.isTouch = !1), document.removeEventListener('mousemove', Ue)), (Ie = e)
  }
  function _e() {
    var e = document.activeElement
    if (He(e)) {
      var t = e._tippy
      e.blur && !t.state.isVisible && e.blur()
    }
  }
  var Fe = !!('undefined' != typeof window && 'undefined' != typeof document) && !!window.msCrypto
  var ze = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
    $e = Object.assign(
      {
        appendTo: be,
        aria: { content: 'auto', expanded: 'auto' },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: '',
        offset: [0, 10],
        onAfterUpdate: function () {},
        onBeforeUpdate: function () {},
        onCreate: function () {},
        onDestroy: function () {},
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        onUntrigger: function () {},
        onClickOutside: function () {},
        placement: 'top',
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: 'mouseenter focus',
        triggerTarget: null,
      },
      ze,
      {
        allowHTML: !1,
        animation: 'fade',
        arrow: !0,
        content: '',
        inertia: !1,
        maxWidth: 350,
        role: 'tooltip',
        theme: '',
        zIndex: 9999,
      }
    ),
    Xe = Object.keys($e)
  function Ye(e) {
    var t = (e.plugins || []).reduce(function (t, n) {
      var r,
        i = n.name,
        o = n.defaultValue
      i && (t[i] = void 0 !== e[i] ? e[i] : null != (r = $e[i]) ? r : o)
      return t
    }, {})
    return Object.assign({}, e, t)
  }
  function Je(e, t) {
    var n = Object.assign(
      {},
      t,
      { content: Oe(t.content, [e]) },
      t.ignoreAttributes
        ? {}
        : (function (e, t) {
            return (t ? Object.keys(Ye(Object.assign({}, $e, { plugins: t }))) : Xe).reduce(
              function (t, n) {
                var r = (e.getAttribute('data-tippy-' + n) || '').trim()
                if (!r) return t
                if ('content' === n) t[n] = r
                else
                  try {
                    t[n] = JSON.parse(r)
                  } catch (e) {
                    t[n] = r
                  }
                return t
              },
              {}
            )
          })(e, t.plugins)
    )
    return (
      (n.aria = Object.assign({}, $e.aria, n.aria)),
      (n.aria = {
        expanded: 'auto' === n.aria.expanded ? t.interactive : n.aria.expanded,
        content:
          'auto' === n.aria.content ? (t.interactive ? null : 'describedby') : n.aria.content,
      }),
      n
    )
  }
  function Ge(e, t) {
    e.innerHTML = t
  }
  function Ke(e) {
    var t = ke()
    return (
      !0 === e ? (t.className = he) : ((t.className = ge), Ce(e) ? t.appendChild(e) : Ge(t, e)), t
    )
  }
  function Qe(e, t) {
    Ce(t.content)
      ? (Ge(e, ''), e.appendChild(t.content))
      : 'function' != typeof t.content &&
        (t.allowHTML ? Ge(e, t.content) : (e.textContent = t.content))
  }
  function Ze(e) {
    var t = e.firstElementChild,
      n = je(t.children)
    return {
      box: t,
      content: n.find(function (e) {
        return e.classList.contains(me)
      }),
      arrow: n.find(function (e) {
        return e.classList.contains(he) || e.classList.contains(ge)
      }),
      backdrop: n.find(function (e) {
        return e.classList.contains(ve)
      }),
    }
  }
  function et(e) {
    var t = ke(),
      n = ke()
    ;(n.className = 'tippy-box'),
      n.setAttribute('data-state', 'hidden'),
      n.setAttribute('tabindex', '-1')
    var r = ke()
    function i(n, r) {
      var i = Ze(t),
        o = i.box,
        a = i.content,
        s = i.arrow
      r.theme ? o.setAttribute('data-theme', r.theme) : o.removeAttribute('data-theme'),
        'string' == typeof r.animation
          ? o.setAttribute('data-animation', r.animation)
          : o.removeAttribute('data-animation'),
        r.inertia ? o.setAttribute('data-inertia', '') : o.removeAttribute('data-inertia'),
        (o.style.maxWidth = 'number' == typeof r.maxWidth ? r.maxWidth + 'px' : r.maxWidth),
        r.role ? o.setAttribute('role', r.role) : o.removeAttribute('role'),
        (n.content === r.content && n.allowHTML === r.allowHTML) || Qe(a, e.props),
        r.arrow
          ? s
            ? n.arrow !== r.arrow && (o.removeChild(s), o.appendChild(Ke(r.arrow)))
            : o.appendChild(Ke(r.arrow))
          : s && o.removeChild(s)
    }
    return (
      (r.className = me),
      r.setAttribute('data-state', 'hidden'),
      Qe(r, e.props),
      t.appendChild(n),
      n.appendChild(r),
      i(e.props, e.props),
      { popper: t, onUpdate: i }
    )
  }
  et.$$tippy = !0
  var tt = 1,
    nt = [],
    rt = []
  function it(e, t) {
    var n,
      r,
      i,
      o,
      a,
      s,
      c,
      u,
      f = Je(e, Object.assign({}, $e, Ye(Le(t)))),
      p = !1,
      d = !1,
      l = !1,
      m = !1,
      v = [],
      h = Ee(X, f.interactiveDebounce),
      g = tt++,
      y = (u = f.plugins).filter(function (e, t) {
        return u.indexOf(e) === t
      }),
      b = {
        id: g,
        reference: e,
        popper: ke(),
        popperInstance: null,
        props: f,
        state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
        plugins: y,
        clearDelayTimeouts: function () {
          clearTimeout(n), clearTimeout(r), cancelAnimationFrame(i)
        },
        setProps: function (t) {
          0
          if (b.state.isDestroyed) return
          V('onBeforeUpdate', [b, t]), z()
          var n = b.props,
            r = Je(e, Object.assign({}, n, Le(t), { ignoreAttributes: !0 }))
          ;(b.props = r),
            F(),
            n.interactiveDebounce !== r.interactiveDebounce &&
              (W(), (h = Ee(X, r.interactiveDebounce)))
          n.triggerTarget && !r.triggerTarget
            ? Ae(n.triggerTarget).forEach(function (e) {
                e.removeAttribute('aria-expanded')
              })
            : r.triggerTarget && e.removeAttribute('aria-expanded')
          P(), H(), O && O(n, r)
          b.popperInstance &&
            (K(),
            Z().forEach(function (e) {
              requestAnimationFrame(e._tippy.popperInstance.forceUpdate)
            }))
          V('onAfterUpdate', [b, t])
        },
        setContent: function (e) {
          b.setProps({ content: e })
        },
        show: function () {
          0
          var e = b.state.isVisible,
            t = b.state.isDestroyed,
            n = !b.state.isEnabled,
            r = Ne.isTouch && !b.props.touch,
            i = we(b.props.duration, 0, $e.duration)
          if (e || t || n || r) return
          if (L().hasAttribute('disabled')) return
          if ((V('onShow', [b], !1), !1 === b.props.onShow(b))) return
          ;(b.state.isVisible = !0), j() && (x.style.visibility = 'visible')
          H(), I(), b.state.isMounted || (x.style.transition = 'none')
          if (j()) {
            var o = C(),
              a = o.box,
              c = o.content
            Se([a, c], 0)
          }
          ;(s = function () {
            var e
            if (b.state.isVisible && !m) {
              if (
                ((m = !0),
                x.offsetHeight,
                (x.style.transition = b.props.moveTransition),
                j() && b.props.animation)
              ) {
                var t = C(),
                  n = t.box,
                  r = t.content
                Se([n, r], i), Pe([n, r], 'visible')
              }
              S(),
                P(),
                Te(rt, b),
                null == (e = b.popperInstance) || e.forceUpdate(),
                V('onMount', [b]),
                b.props.animation &&
                  j() &&
                  (function (e, t) {
                    U(e, t)
                  })(i, function () {
                    ;(b.state.isShown = !0), V('onShown', [b])
                  })
            }
          }),
            (function () {
              var e,
                t = b.props.appendTo,
                n = L()
              e = (b.props.interactive && t === be) || 'parent' === t ? n.parentNode : Oe(t, [n])
              e.contains(x) || e.appendChild(x)
              ;(b.state.isMounted = !0), K(), !1
            })()
        },
        hide: function () {
          0
          var e = !b.state.isVisible,
            t = b.state.isDestroyed,
            n = !b.state.isEnabled,
            r = we(b.props.duration, 1, $e.duration)
          if (e || t || n) return
          if ((V('onHide', [b], !1), !1 === b.props.onHide(b))) return
          ;(b.state.isVisible = !1),
            (b.state.isShown = !1),
            (m = !1),
            (p = !1),
            j() && (x.style.visibility = 'hidden')
          if ((W(), q(), H(!0), j())) {
            var i = C(),
              o = i.box,
              a = i.content
            b.props.animation && (Se([o, a], r), Pe([o, a], 'hidden'))
          }
          S(),
            P(),
            b.props.animation
              ? j() &&
                (function (e, t) {
                  U(e, function () {
                    !b.state.isVisible && x.parentNode && x.parentNode.contains(x) && t()
                  })
                })(r, b.unmount)
              : b.unmount()
        },
        hideWithInteractivity: function (e) {
          0
          k().addEventListener('mousemove', h), Te(nt, h), h(e)
        },
        enable: function () {
          b.state.isEnabled = !0
        },
        disable: function () {
          b.hide(), (b.state.isEnabled = !1)
        },
        unmount: function () {
          0
          b.state.isVisible && b.hide()
          if (!b.state.isMounted) return
          Q(),
            Z().forEach(function (e) {
              e._tippy.unmount()
            }),
            x.parentNode && x.parentNode.removeChild(x)
          ;(rt = rt.filter(function (e) {
            return e !== b
          })),
            (b.state.isMounted = !1),
            V('onHidden', [b])
        },
        destroy: function () {
          0
          if (b.state.isDestroyed) return
          b.clearDelayTimeouts(),
            b.unmount(),
            z(),
            delete e._tippy,
            (b.state.isDestroyed = !0),
            V('onDestroy', [b])
        },
      }
    if (!f.render) return b
    var w = f.render(b),
      x = w.popper,
      O = w.onUpdate
    x.setAttribute('data-tippy-root', ''),
      (x.id = 'tippy-' + b.id),
      (b.popper = x),
      (e._tippy = b),
      (x._tippy = b)
    var E = y.map(function (e) {
        return e.fn(b)
      }),
      A = e.hasAttribute('aria-expanded')
    return (
      F(),
      P(),
      H(),
      V('onCreate', [b]),
      f.showOnCreate && ee(),
      x.addEventListener('mouseenter', function () {
        b.props.interactive && b.state.isVisible && b.clearDelayTimeouts()
      }),
      x.addEventListener('mouseleave', function () {
        b.props.interactive &&
          b.props.trigger.indexOf('mouseenter') >= 0 &&
          k().addEventListener('mousemove', h)
      }),
      b
    )
    function T() {
      var e = b.props.touch
      return Array.isArray(e) ? e : [e, 0]
    }
    function D() {
      return 'hold' === T()[0]
    }
    function j() {
      var e
      return !(null == (e = b.props.render) || !e.$$tippy)
    }
    function L() {
      return c || e
    }
    function k() {
      var e = L().parentNode
      return e ? We(e) : document
    }
    function C() {
      return Ze(x)
    }
    function M(e) {
      return (b.state.isMounted && !b.state.isVisible) || Ne.isTouch || (o && 'focus' === o.type)
        ? 0
        : we(b.props.delay, e ? 0 : 1, $e.delay)
    }
    function H(e) {
      void 0 === e && (e = !1),
        (x.style.pointerEvents = b.props.interactive && !e ? '' : 'none'),
        (x.style.zIndex = '' + b.props.zIndex)
    }
    function V(e, t, n) {
      var r
      ;(void 0 === n && (n = !0),
      E.forEach(function (n) {
        n[e] && n[e].apply(n, t)
      }),
      n) && (r = b.props)[e].apply(r, t)
    }
    function S() {
      var t = b.props.aria
      if (t.content) {
        var n = 'aria-' + t.content,
          r = x.id
        Ae(b.props.triggerTarget || e).forEach(function (e) {
          var t = e.getAttribute(n)
          if (b.state.isVisible) e.setAttribute(n, t ? t + ' ' + r : r)
          else {
            var i = t && t.replace(r, '').trim()
            i ? e.setAttribute(n, i) : e.removeAttribute(n)
          }
        })
      }
    }
    function P() {
      !A &&
        b.props.aria.expanded &&
        Ae(b.props.triggerTarget || e).forEach(function (e) {
          b.props.interactive
            ? e.setAttribute('aria-expanded', b.state.isVisible && e === L() ? 'true' : 'false')
            : e.removeAttribute('aria-expanded')
        })
    }
    function W() {
      k().removeEventListener('mousemove', h),
        (nt = nt.filter(function (e) {
          return e !== h
        }))
    }
    function B(t) {
      if (!Ne.isTouch || (!l && 'mousedown' !== t.type)) {
        var n = (t.composedPath && t.composedPath()[0]) || t.target
        if (!b.props.interactive || !Re(x, n)) {
          if (
            Ae(b.props.triggerTarget || e).some(function (e) {
              return Re(e, n)
            })
          ) {
            if (Ne.isTouch) return
            if (b.state.isVisible && b.props.trigger.indexOf('click') >= 0) return
          } else V('onClickOutside', [b, t])
          !0 === b.props.hideOnClick &&
            (b.clearDelayTimeouts(),
            b.hide(),
            (d = !0),
            setTimeout(function () {
              d = !1
            }),
            b.state.isMounted || q())
        }
      }
    }
    function R() {
      l = !0
    }
    function N() {
      l = !1
    }
    function I() {
      var e = k()
      e.addEventListener('mousedown', B, !0),
        e.addEventListener('touchend', B, ye),
        e.addEventListener('touchstart', N, ye),
        e.addEventListener('touchmove', R, ye)
    }
    function q() {
      var e = k()
      e.removeEventListener('mousedown', B, !0),
        e.removeEventListener('touchend', B, ye),
        e.removeEventListener('touchstart', N, ye),
        e.removeEventListener('touchmove', R, ye)
    }
    function U(e, t) {
      var n = C().box
      function r(e) {
        e.target === n && (Be(n, 'remove', r), t())
      }
      if (0 === e) return t()
      Be(n, 'remove', a), Be(n, 'add', r), (a = r)
    }
    function _(t, n, r) {
      void 0 === r && (r = !1),
        Ae(b.props.triggerTarget || e).forEach(function (e) {
          e.addEventListener(t, n, r), v.push({ node: e, eventType: t, handler: n, options: r })
        })
    }
    function F() {
      var e
      D() && (_('touchstart', $, { passive: !0 }), _('touchend', Y, { passive: !0 })),
        ((e = b.props.trigger), e.split(/\s+/).filter(Boolean)).forEach(function (e) {
          if ('manual' !== e)
            switch ((_(e, $), e)) {
              case 'mouseenter':
                _('mouseleave', Y)
                break
              case 'focus':
                _(Fe ? 'focusout' : 'blur', J)
                break
              case 'focusin':
                _('focusout', J)
            }
        })
    }
    function z() {
      v.forEach(function (e) {
        var t = e.node,
          n = e.eventType,
          r = e.handler,
          i = e.options
        t.removeEventListener(n, r, i)
      }),
        (v = [])
    }
    function $(e) {
      var t,
        n = !1
      if (b.state.isEnabled && !G(e) && !d) {
        var r = 'focus' === (null == (t = o) ? void 0 : t.type)
        ;(o = e),
          (c = e.currentTarget),
          P(),
          !b.state.isVisible &&
            Me(e) &&
            nt.forEach(function (t) {
              return t(e)
            }),
          'click' === e.type &&
          (b.props.trigger.indexOf('mouseenter') < 0 || p) &&
          !1 !== b.props.hideOnClick &&
          b.state.isVisible
            ? (n = !0)
            : ee(e),
          'click' === e.type && (p = !n),
          n && !r && te(e)
      }
    }
    function X(e) {
      var t = e.target,
        n = L().contains(t) || x.contains(t)
      ;('mousemove' === e.type && n) ||
        ((function (e, t) {
          var n = t.clientX,
            r = t.clientY
          return e.every(function (e) {
            var t = e.popperRect,
              i = e.popperState,
              o = e.props.interactiveBorder,
              a = De(i.placement),
              s = i.modifiersData.offset
            if (!s) return !0
            var c = 'bottom' === a ? s.top.y : 0,
              u = 'top' === a ? s.bottom.y : 0,
              f = 'right' === a ? s.left.x : 0,
              p = 'left' === a ? s.right.x : 0,
              d = t.top - r + c > o,
              l = r - t.bottom - u > o,
              m = t.left - n + f > o,
              v = n - t.right - p > o
            return d || l || m || v
          })
        })(
          Z()
            .concat(x)
            .map(function (e) {
              var t,
                n = null == (t = e._tippy.popperInstance) ? void 0 : t.state
              return n ? { popperRect: e.getBoundingClientRect(), popperState: n, props: f } : null
            })
            .filter(Boolean),
          e
        ) &&
          (W(), te(e)))
    }
    function Y(e) {
      G(e) ||
        (b.props.trigger.indexOf('click') >= 0 && p) ||
        (b.props.interactive ? b.hideWithInteractivity(e) : te(e))
    }
    function J(e) {
      ;(b.props.trigger.indexOf('focusin') < 0 && e.target !== L()) ||
        (b.props.interactive && e.relatedTarget && x.contains(e.relatedTarget)) ||
        te(e)
    }
    function G(e) {
      return !!Ne.isTouch && D() !== e.type.indexOf('touch') >= 0
    }
    function K() {
      Q()
      var t = b.props,
        n = t.popperOptions,
        r = t.placement,
        i = t.offset,
        o = t.getReferenceClientRect,
        a = t.moveTransition,
        c = j() ? Ze(x).arrow : null,
        u = o ? { getBoundingClientRect: o, contextElement: o.contextElement || L() } : e,
        f = [
          { name: 'offset', options: { offset: i } },
          {
            name: 'preventOverflow',
            options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
          },
          { name: 'flip', options: { padding: 5 } },
          { name: 'computeStyles', options: { adaptive: !a } },
          {
            name: '$$tippy',
            enabled: !0,
            phase: 'beforeWrite',
            requires: ['computeStyles'],
            fn: function (e) {
              var t = e.state
              if (j()) {
                var n = C().box
                ;['placement', 'reference-hidden', 'escaped'].forEach(function (e) {
                  'placement' === e
                    ? n.setAttribute('data-placement', t.placement)
                    : t.attributes.popper['data-popper-' + e]
                    ? n.setAttribute('data-' + e, '')
                    : n.removeAttribute('data-' + e)
                }),
                  (t.attributes.popper = {})
              }
            },
          },
        ]
      j() && c && f.push({ name: 'arrow', options: { element: c, padding: 3 } }),
        f.push.apply(f, (null == n ? void 0 : n.modifiers) || []),
        (b.popperInstance = le(
          u,
          x,
          Object.assign({}, n, { placement: r, onFirstUpdate: s, modifiers: f })
        ))
    }
    function Q() {
      b.popperInstance && (b.popperInstance.destroy(), (b.popperInstance = null))
    }
    function Z() {
      return je(x.querySelectorAll('[data-tippy-root]'))
    }
    function ee(e) {
      b.clearDelayTimeouts(), e && V('onTrigger', [b, e]), I()
      var t = M(!0),
        r = T(),
        i = r[0],
        o = r[1]
      Ne.isTouch && 'hold' === i && o && (t = o),
        t
          ? (n = setTimeout(function () {
              b.show()
            }, t))
          : b.show()
    }
    function te(e) {
      if ((b.clearDelayTimeouts(), V('onUntrigger', [b, e]), b.state.isVisible)) {
        if (
          !(
            b.props.trigger.indexOf('mouseenter') >= 0 &&
            b.props.trigger.indexOf('click') >= 0 &&
            ['mouseleave', 'mousemove'].indexOf(e.type) >= 0 &&
            p
          )
        ) {
          var t = M(!1)
          t
            ? (r = setTimeout(function () {
                b.state.isVisible && b.hide()
              }, t))
            : (i = requestAnimationFrame(function () {
                b.hide()
              }))
        }
      } else q()
    }
  }
  function ot(e, t) {
    void 0 === t && (t = {})
    var n = $e.plugins.concat(t.plugins || [])
    document.addEventListener('touchstart', qe, ye), window.addEventListener('blur', _e)
    var r = Object.assign({}, t, { plugins: n }),
      i = Ve(e).reduce(function (e, t) {
        var n = t && it(t, r)
        return n && e.push(n), e
      }, [])
    return Ce(e) ? i[0] : i
  }
  ;(ot.defaultProps = $e),
    (ot.setDefaultProps = function (e) {
      Object.keys(e).forEach(function (t) {
        $e[t] = e[t]
      })
    }),
    (ot.currentInput = Ne)
  Object.assign({}, o, {
    effect: function (e) {
      var t = e.state,
        n = {
          popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
          arrow: { position: 'absolute' },
          reference: {},
        }
      Object.assign(t.elements.popper.style, n.popper),
        (t.styles = n),
        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow)
    },
  })
  ot.setDefaultProps({ render: et }),
    ot('#tippy', {
      content: 'Hire Me!',
      delay: [175, null],
      inertia: !0,
      offset: [0, 15],
      animation: 'scale-extreme',
      theme: 'gradient',
      arrow:
        '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
      touch: !1,
    })
})()
//# sourceMappingURL=index.8cc084ae.js.map
