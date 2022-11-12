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
function o(e) {
  return (
    'undefined' != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
  )
}
var i = {
    name: 'applyStyles',
    enabled: !0,
    phase: 'write',
    fn: function (t) {
      var n = t.state
      Object.keys(n.elements).forEach(function (t) {
        var o = n.styles[t] || {},
          i = n.attributes[t] || {},
          a = n.elements[t]
        r(a) &&
          e(a) &&
          (Object.assign(a.style, o),
          Object.keys(i).forEach(function (e) {
            var t = i[e]
            !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? '' : t)
          }))
      })
    },
    effect: function (t) {
      var n = t.state,
        o = {
          popper: { position: n.options.strategy, left: '0', top: '0', margin: '0' },
          arrow: { position: 'absolute' },
          reference: {},
        }
      return (
        Object.assign(n.elements.popper.style, o.popper),
        (n.styles = o),
        n.elements.arrow && Object.assign(n.elements.arrow.style, o.arrow),
        function () {
          Object.keys(n.elements).forEach(function (t) {
            var i = n.elements[t],
              a = n.attributes[t] || {},
              s = Object.keys(n.styles.hasOwnProperty(t) ? n.styles[t] : o[t]).reduce(function (
                e,
                t
              ) {
                return (e[t] = ''), e
              },
              {})
            r(i) &&
              e(i) &&
              (Object.assign(i.style, s),
              Object.keys(a).forEach(function (e) {
                i.removeAttribute(e)
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
    o = 1,
    i = 1
  if (r(e) && t) {
    var a = e.offsetHeight,
      s = e.offsetWidth
    s > 0 && (o = c(n.width) / s || 1), a > 0 && (i = c(n.height) / a || 1)
  }
  return {
    width: n.width / o,
    height: n.height / i,
    top: n.top / i,
    right: n.right / o,
    bottom: n.bottom / i,
    left: n.left / o,
    x: n.left / o,
    y: n.top / i,
  }
}
function p(e) {
  var n = t(e)
  return { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset }
}
function f(e) {
  return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function d(e) {
  return u(f(e)).left + p(e).scrollLeft
}
function l(e) {
  return t(e).getComputedStyle(e)
}
function m(e) {
  var t = l(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY
  return /auto|scroll|overlay|hidden/.test(n + o + r)
}
function v(n, o, i) {
  void 0 === i && (i = !1)
  var a,
    s,
    l = r(o),
    v =
      r(o) &&
      (function (e) {
        var t = e.getBoundingClientRect(),
          n = c(t.width) / e.offsetWidth || 1,
          r = c(t.height) / e.offsetHeight || 1
        return 1 !== n || 1 !== r
      })(o),
    h = f(o),
    g = u(n, v),
    b = { scrollLeft: 0, scrollTop: 0 },
    y = { x: 0, y: 0 }
  return (
    (l || (!l && !i)) &&
      (('body' !== e(o) || m(h)) &&
        (b =
          (a = o) !== t(a) && r(a)
            ? { scrollLeft: (s = a).scrollLeft, scrollTop: s.scrollTop }
            : p(a)),
      r(o) ? (((y = u(o, !0)).x += o.clientLeft), (y.y += o.clientTop)) : h && (y.x = d(h))),
    {
      x: g.left + b.scrollLeft - y.x,
      y: g.top + b.scrollTop - y.y,
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
  return 'html' === e(t) ? t : t.assignedSlot || t.parentNode || (o(t) ? t.host : null) || f(t)
}
function b(t) {
  return ['html', 'body', '#document'].indexOf(e(t)) >= 0
    ? t.ownerDocument.body
    : r(t) && m(t)
    ? t
    : b(g(t))
}
function y(e, n) {
  var r
  void 0 === n && (n = [])
  var o = b(e),
    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
    a = t(o),
    s = i ? [a].concat(a.visualViewport || [], m(o) ? o : []) : o,
    c = n.concat(s)
  return i ? c : c.concat(y(g(s)))
}
function w(t) {
  return ['table', 'td', 'th'].indexOf(e(t)) >= 0
}
function x(e) {
  return r(e) && 'fixed' !== l(e).position ? e.offsetParent : null
}
function O(n) {
  for (var i = t(n), a = x(n); a && w(a) && 'static' === l(a).position; ) a = x(a)
  return a && ('html' === e(a) || ('body' === e(a) && 'static' === l(a).position))
    ? i
    : a ||
        (function (t) {
          var n = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox')
          if (-1 !== navigator.userAgent.indexOf('Trident') && r(t) && 'fixed' === l(t).position)
            return null
          var i = g(t)
          for (o(i) && (i = i.host); r(i) && ['html', 'body'].indexOf(e(i)) < 0; ) {
            var a = l(i)
            if (
              'none' !== a.transform ||
              'none' !== a.perspective ||
              'paint' === a.contain ||
              -1 !== ['transform', 'perspective'].indexOf(a.willChange) ||
              (n && 'filter' === a.willChange) ||
              (n && a.filter && 'none' !== a.filter)
            )
              return i
            i = i.parentNode
          }
          return null
        })(n) ||
        i
}
var E = ['top', 'bottom', 'right', 'left'],
  A = E.reduce(function (e, t) {
    return e.concat([t + '-start', t + '-end'])
  }, []),
  T = [].concat(E, ['auto']).reduce(function (e, t) {
    return e.concat([t, t + '-start', t + '-end'])
  }, []),
  D = [
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
function j(e) {
  var t = new Map(),
    n = new Set(),
    r = []
  function o(e) {
    n.add(e.name),
      [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
        if (!n.has(e)) {
          var r = t.get(e)
          r && o(r)
        }
      }),
      r.push(e)
  }
  return (
    e.forEach(function (e) {
      t.set(e.name, e)
    }),
    e.forEach(function (e) {
      n.has(e.name) || o(e)
    }),
    r
  )
}
function L(e) {
  var t = j(e)
  return D.reduce(function (e, n) {
    return e.concat(
      t.filter(function (e) {
        return e.phase === n
      })
    )
  }, [])
}
function k(e) {
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
var C = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function M() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return !t.some(function (e) {
    return !(e && 'function' == typeof e.getBoundingClientRect)
  })
}
function H(e) {
  void 0 === e && (e = {})
  var t = e,
    r = t.defaultModifiers,
    o = void 0 === r ? [] : r,
    i = t.defaultOptions,
    a = void 0 === i ? C : i
  return function (e, t, r) {
    void 0 === r && (r = a)
    var i,
      s,
      c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, C, a),
        modifiersData: {},
        elements: { reference: e, popper: t },
        attributes: {},
        styles: {},
      },
      u = [],
      p = !1,
      f = {
        state: c,
        setOptions: function (r) {
          var i = 'function' == typeof r ? r(c.options) : r
          d(),
            (c.options = Object.assign({}, a, c.options, i)),
            (c.scrollParents = {
              reference: n(e) ? y(e) : e.contextElement ? y(e.contextElement) : [],
              popper: y(t),
            })
          var s = L(k([].concat(o, c.options.modifiers)))
          return (
            (c.orderedModifiers = s.filter(function (e) {
              return e.enabled
            })),
            c.orderedModifiers.forEach(function (e) {
              var t = e.name,
                n = e.options,
                r = void 0 === n ? {} : n,
                o = e.effect
              if ('function' == typeof o) {
                var i = o({ state: c, name: t, instance: f, options: r }),
                  a = function () {}
                u.push(i || a)
              }
            }),
            f.update()
          )
        },
        forceUpdate: function () {
          if (!p) {
            var e = c.elements,
              t = e.reference,
              n = e.popper
            if (M(t, n)) {
              ;(c.rects = { reference: v(t, O(n), 'fixed' === c.options.strategy), popper: h(n) }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (e) {
                  return (c.modifiersData[e.name] = Object.assign({}, e.data))
                })
              for (var r = 0; r < c.orderedModifiers.length; r++)
                if (!0 !== c.reset) {
                  var o = c.orderedModifiers[r],
                    i = o.fn,
                    a = o.options,
                    s = void 0 === a ? {} : a,
                    u = o.name
                  'function' == typeof i &&
                    (c = i({ state: c, options: s, name: u, instance: f }) || c)
                } else (c.reset = !1), (r = -1)
            }
          }
        },
        update:
          ((i = function () {
            return new Promise(function (e) {
              f.forceUpdate(), e(c)
            })
          }),
          function () {
            return (
              s ||
                (s = new Promise(function (e) {
                  Promise.resolve().then(function () {
                    ;(s = void 0), e(i())
                  })
                })),
              s
            )
          }),
        destroy: function () {
          d(), (p = !0)
        },
      }
    if (!M(e, t)) return f
    function d() {
      u.forEach(function (e) {
        return e()
      }),
        (u = [])
    }
    return (
      f.setOptions(r).then(function (e) {
        !p && r.onFirstUpdate && r.onFirstUpdate(e)
      }),
      f
    )
  }
}
var V = { passive: !0 }
function S(e) {
  return e.split('-')[0]
}
function P(e) {
  return e.split('-')[1]
}
function W(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function B(e) {
  var t,
    n = e.reference,
    r = e.element,
    o = e.placement,
    i = o ? S(o) : null,
    a = o ? P(o) : null,
    s = n.x + n.width / 2 - r.width / 2,
    c = n.y + n.height / 2 - r.height / 2
  switch (i) {
    case 'top':
      t = { x: s, y: n.y - r.height }
      break
    case 'bottom':
      t = { x: s, y: n.y + n.height }
      break
    case 'right':
      t = { x: n.x + n.width, y: c }
      break
    case 'left':
      t = { x: n.x - r.width, y: c }
      break
    default:
      t = { x: n.x, y: n.y }
  }
  var u = i ? W(i) : null
  if (null != u) {
    var p = 'y' === u ? 'height' : 'width'
    switch (a) {
      case 'start':
        t[u] = t[u] - (n[p] / 2 - r[p] / 2)
        break
      case 'end':
        t[u] = t[u] + (n[p] / 2 - r[p] / 2)
    }
  }
  return t
}
var R = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function N(e) {
  var n,
    r = e.popper,
    o = e.popperRect,
    i = e.placement,
    a = e.variation,
    s = e.offsets,
    u = e.position,
    p = e.gpuAcceleration,
    d = e.adaptive,
    m = e.roundOffsets,
    v = e.isFixed,
    h = s.x,
    g = void 0 === h ? 0 : h,
    b = s.y,
    y = void 0 === b ? 0 : b,
    w = 'function' == typeof m ? m({ x: g, y: y }) : { x: g, y: y }
  ;(g = w.x), (y = w.y)
  var x = s.hasOwnProperty('x'),
    E = s.hasOwnProperty('y'),
    A = 'left',
    T = 'top',
    D = window
  if (d) {
    var j = O(r),
      L = 'clientHeight',
      k = 'clientWidth'
    if (
      (j === t(r) &&
        'static' !== l((j = f(r))).position &&
        'absolute' === u &&
        ((L = 'scrollHeight'), (k = 'scrollWidth')),
      'top' === i || (('left' === i || 'right' === i) && 'end' === a))
    )
      (T = 'bottom'),
        (y -= (v && j === D && D.visualViewport ? D.visualViewport.height : j[L]) - o.height),
        (y *= p ? 1 : -1)
    if ('left' === i || (('top' === i || 'bottom' === i) && 'end' === a))
      (A = 'right'),
        (g -= (v && j === D && D.visualViewport ? D.visualViewport.width : j[k]) - o.width),
        (g *= p ? 1 : -1)
  }
  var C,
    M = Object.assign({ position: u }, d && R),
    H =
      !0 === m
        ? (function (e) {
            var t = e.x,
              n = e.y,
              r = window.devicePixelRatio || 1
            return { x: c(t * r) / r || 0, y: c(n * r) / r || 0 }
          })({ x: g, y: y })
        : { x: g, y: y }
  return (
    (g = H.x),
    (y = H.y),
    p
      ? Object.assign(
          {},
          M,
          (((C = {})[T] = E ? '0' : ''),
          (C[A] = x ? '0' : ''),
          (C.transform =
            (D.devicePixelRatio || 1) <= 1
              ? 'translate(' + g + 'px, ' + y + 'px)'
              : 'translate3d(' + g + 'px, ' + y + 'px, 0)'),
          C)
        )
      : Object.assign(
          {},
          M,
          (((n = {})[T] = E ? y + 'px' : ''), (n[A] = x ? g + 'px' : ''), (n.transform = ''), n)
        )
  )
}
var I = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function q(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return I[e]
  })
}
var U = { start: 'end', end: 'start' }
function _(e) {
  return e.replace(/start|end/g, function (e) {
    return U[e]
  })
}
function F(e) {
  var n = t(e),
    r = f(e),
    o = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    s = 0,
    c = 0
  return (
    o &&
      ((i = o.width),
      (a = o.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((s = o.offsetLeft), (c = o.offsetTop))),
    { width: i, height: a, x: s + d(e), y: c }
  )
}
function z(e) {
  var t,
    n = f(e),
    r = p(e),
    o = null == (t = e.ownerDocument) ? void 0 : t.body,
    i = a(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
    s = a(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
    c = -r.scrollLeft + d(e),
    u = -r.scrollTop
  return (
    'rtl' === l(o || n).direction && (c += a(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: s, x: c, y: u }
  )
}
function $(e, t) {
  var n = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (n && o(n)) {
    var r = t
    do {
      if (r && e.isSameNode(r)) return !0
      r = r.parentNode || r.host
    } while (r)
  }
  return !1
}
function X(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height })
}
function Y(e, t) {
  return 'viewport' === t
    ? X(F(e))
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
    : X(z(f(e)))
}
function J(t, o, i) {
  var c =
      'clippingParents' === o
        ? (function (t) {
            var o = y(g(t)),
              i = ['absolute', 'fixed'].indexOf(l(t).position) >= 0 && r(t) ? O(t) : t
            return n(i)
              ? o.filter(function (t) {
                  return n(t) && $(t, i) && 'body' !== e(t)
                })
              : []
          })(t)
        : [].concat(o),
    u = [].concat(c, [i]),
    p = u[0],
    f = u.reduce(function (e, n) {
      var r = Y(t, n)
      return (
        (e.top = a(r.top, e.top)),
        (e.right = s(r.right, e.right)),
        (e.bottom = s(r.bottom, e.bottom)),
        (e.left = a(r.left, e.left)),
        e
      )
    }, Y(t, p))
  return (
    (f.width = f.right - f.left), (f.height = f.bottom - f.top), (f.x = f.left), (f.y = f.top), f
  )
}
function G(e) {
  return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e)
}
function K(e, t) {
  return t.reduce(function (t, n) {
    return (t[n] = e), t
  }, {})
}
function Q(e, t) {
  void 0 === t && (t = {})
  var r = t,
    o = r.placement,
    i = void 0 === o ? e.placement : o,
    a = r.boundary,
    s = void 0 === a ? 'clippingParents' : a,
    c = r.rootBoundary,
    p = void 0 === c ? 'viewport' : c,
    d = r.elementContext,
    l = void 0 === d ? 'popper' : d,
    m = r.altBoundary,
    v = void 0 !== m && m,
    h = r.padding,
    g = void 0 === h ? 0 : h,
    b = G('number' != typeof g ? g : K(g, E)),
    y = 'popper' === l ? 'reference' : 'popper',
    w = e.rects.popper,
    x = e.elements[v ? y : l],
    O = J(n(x) ? x : x.contextElement || f(e.elements.popper), s, p),
    A = u(e.elements.reference),
    T = B({ reference: A, element: w, strategy: 'absolute', placement: i }),
    D = X(Object.assign({}, w, T)),
    j = 'popper' === l ? D : A,
    L = {
      top: O.top - j.top + b.top,
      bottom: j.bottom - O.bottom + b.bottom,
      left: O.left - j.left + b.left,
      right: j.right - O.right + b.right,
    },
    k = e.modifiersData.offset
  if ('popper' === l && k) {
    var C = k[i]
    Object.keys(L).forEach(function (e) {
      var t = ['right', 'bottom'].indexOf(e) >= 0 ? 1 : -1,
        n = ['top', 'bottom'].indexOf(e) >= 0 ? 'y' : 'x'
      L[e] += C[n] * t
    })
  }
  return L
}
function Z(e, t) {
  void 0 === t && (t = {})
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    s = n.flipVariations,
    c = n.allowedAutoPlacements,
    u = void 0 === c ? T : c,
    p = P(r),
    f = p
      ? s
        ? A
        : A.filter(function (e) {
            return P(e) === p
          })
      : E,
    d = f.filter(function (e) {
      return u.indexOf(e) >= 0
    })
  0 === d.length && (d = f)
  var l = d.reduce(function (t, n) {
    return (t[n] = Q(e, { placement: n, boundary: o, rootBoundary: i, padding: a })[S(n)]), t
  }, {})
  return Object.keys(l).sort(function (e, t) {
    return l[e] - l[t]
  })
}
function ee(e, t, n) {
  return a(e, s(t, n))
}
function te(e, t, n) {
  var r = ee(e, t, n)
  return r > n ? n : r
}
function ne(e, t, n) {
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
function re(e) {
  return ['top', 'right', 'bottom', 'left'].some(function (t) {
    return e[t] >= 0
  })
}
var oe = H({
    defaultModifiers: [
      {
        name: 'eventListeners',
        enabled: !0,
        phase: 'write',
        fn: function () {},
        effect: function (e) {
          var n = e.state,
            r = e.instance,
            o = e.options,
            i = o.scroll,
            a = void 0 === i || i,
            s = o.resize,
            c = void 0 === s || s,
            u = t(n.elements.popper),
            p = [].concat(n.scrollParents.reference, n.scrollParents.popper)
          return (
            a &&
              p.forEach(function (e) {
                e.addEventListener('scroll', r.update, V)
              }),
            c && u.addEventListener('resize', r.update, V),
            function () {
              a &&
                p.forEach(function (e) {
                  e.removeEventListener('scroll', r.update, V)
                }),
                c && u.removeEventListener('resize', r.update, V)
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
          t.modifiersData[n] = B({
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
            o = void 0 === r || r,
            i = n.adaptive,
            a = void 0 === i || i,
            s = n.roundOffsets,
            c = void 0 === s || s,
            u = {
              placement: S(t.placement),
              variation: P(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
              isFixed: 'fixed' === t.options.strategy,
            }
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              N(
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
                N(
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
      i,
      {
        name: 'offset',
        enabled: !0,
        phase: 'main',
        requires: ['popperOffsets'],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            i = void 0 === o ? [0, 0] : o,
            a = T.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = S(e),
                    o = ['left', 'top'].indexOf(r) >= 0 ? -1 : 1,
                    i = 'function' == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
                    a = i[0],
                    s = i[1]
                  return (
                    (a = a || 0),
                    (s = (s || 0) * o),
                    ['left', 'right'].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                  )
                })(n, t.rects, i)),
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
              var o = n.mainAxis,
                i = void 0 === o || o,
                a = n.altAxis,
                s = void 0 === a || a,
                c = n.fallbackPlacements,
                u = n.padding,
                p = n.boundary,
                f = n.rootBoundary,
                d = n.altBoundary,
                l = n.flipVariations,
                m = void 0 === l || l,
                v = n.allowedAutoPlacements,
                h = t.options.placement,
                g = S(h),
                b =
                  c ||
                  (g === h || !m
                    ? [q(h)]
                    : (function (e) {
                        if ('auto' === S(e)) return []
                        var t = q(e)
                        return [_(e), t, _(t)]
                      })(h)),
                y = [h].concat(b).reduce(function (e, n) {
                  return e.concat(
                    'auto' === S(n)
                      ? Z(t, {
                          placement: n,
                          boundary: p,
                          rootBoundary: f,
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
                E = !0,
                A = y[0],
                T = 0;
              T < y.length;
              T++
            ) {
              var D = y[T],
                j = S(D),
                L = 'start' === P(D),
                k = ['top', 'bottom'].indexOf(j) >= 0,
                C = k ? 'width' : 'height',
                M = Q(t, {
                  placement: D,
                  boundary: p,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: u,
                }),
                H = k ? (L ? 'right' : 'left') : L ? 'bottom' : 'top'
              w[C] > x[C] && (H = q(H))
              var V = q(H),
                W = []
              if (
                (i && W.push(M[j] <= 0),
                s && W.push(M[H] <= 0, M[V] <= 0),
                W.every(function (e) {
                  return e
                }))
              ) {
                ;(A = D), (E = !1)
                break
              }
              O.set(D, W)
            }
            if (E)
              for (
                var B = function (e) {
                    var t = y.find(function (t) {
                      var n = O.get(t)
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e
                        })
                    })
                    if (t) return (A = t), 'break'
                  },
                  R = m ? 3 : 1;
                R > 0;
                R--
              ) {
                if ('break' === B(R)) break
              }
            t.placement !== A &&
              ((t.modifiersData[r]._skip = !0), (t.placement = A), (t.reset = !0))
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
            o = n.mainAxis,
            i = void 0 === o || o,
            c = n.altAxis,
            u = void 0 !== c && c,
            p = n.boundary,
            f = n.rootBoundary,
            d = n.altBoundary,
            l = n.padding,
            m = n.tether,
            v = void 0 === m || m,
            g = n.tetherOffset,
            b = void 0 === g ? 0 : g,
            y = Q(t, { boundary: p, rootBoundary: f, padding: l, altBoundary: d }),
            w = S(t.placement),
            x = P(t.placement),
            E = !x,
            A = W(w),
            T = 'x' === A ? 'y' : 'x',
            D = t.modifiersData.popperOffsets,
            j = t.rects.reference,
            L = t.rects.popper,
            k =
              'function' == typeof b
                ? b(Object.assign({}, t.rects, { placement: t.placement }))
                : b,
            C =
              'number' == typeof k
                ? { mainAxis: k, altAxis: k }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
            M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            H = { x: 0, y: 0 }
          if (D) {
            if (i) {
              var V,
                B = 'y' === A ? 'top' : 'left',
                R = 'y' === A ? 'bottom' : 'right',
                N = 'y' === A ? 'height' : 'width',
                I = D[A],
                q = I + y[B],
                U = I - y[R],
                _ = v ? -L[N] / 2 : 0,
                F = 'start' === x ? j[N] : L[N],
                z = 'start' === x ? -L[N] : -j[N],
                $ = t.elements.arrow,
                X = v && $ ? h($) : { width: 0, height: 0 },
                Y = t.modifiersData['arrow#persistent']
                  ? t.modifiersData['arrow#persistent'].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                J = Y[B],
                G = Y[R],
                K = ee(0, j[N], X[N]),
                Z = E ? j[N] / 2 - _ - K - J - C.mainAxis : F - K - J - C.mainAxis,
                ne = E ? -j[N] / 2 + _ + K + G + C.mainAxis : z + K + G + C.mainAxis,
                re = t.elements.arrow && O(t.elements.arrow),
                oe = re ? ('y' === A ? re.clientTop || 0 : re.clientLeft || 0) : 0,
                ie = null != (V = null == M ? void 0 : M[A]) ? V : 0,
                ae = I + ne - ie,
                se = ee(v ? s(q, I + Z - ie - oe) : q, I, v ? a(U, ae) : U)
              ;(D[A] = se), (H[A] = se - I)
            }
            if (u) {
              var ce,
                ue = 'x' === A ? 'top' : 'left',
                pe = 'x' === A ? 'bottom' : 'right',
                fe = D[T],
                de = 'y' === T ? 'height' : 'width',
                le = fe + y[ue],
                me = fe - y[pe],
                ve = -1 !== ['top', 'left'].indexOf(w),
                he = null != (ce = null == M ? void 0 : M[T]) ? ce : 0,
                ge = ve ? le : fe - j[de] - L[de] - he + C.altAxis,
                be = ve ? fe + j[de] + L[de] - he - C.altAxis : me,
                ye = v && ve ? te(ge, fe, be) : ee(v ? ge : le, fe, v ? be : me)
              ;(D[T] = ye), (H[T] = ye - fe)
            }
            t.modifiersData[r] = H
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
            o = e.options,
            i = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            s = S(n.placement),
            c = W(s),
            u = ['left', 'right'].indexOf(s) >= 0 ? 'height' : 'width'
          if (i && a) {
            var p = (function (e, t) {
                return G(
                  'number' !=
                    typeof (e =
                      'function' == typeof e
                        ? e(Object.assign({}, t.rects, { placement: t.placement }))
                        : e)
                    ? e
                    : K(e, E)
                )
              })(o.padding, n),
              f = h(i),
              d = 'y' === c ? 'top' : 'left',
              l = 'y' === c ? 'bottom' : 'right',
              m = n.rects.reference[u] + n.rects.reference[c] - a[c] - n.rects.popper[u],
              v = a[c] - n.rects.reference[c],
              g = O(i),
              b = g ? ('y' === c ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
              y = m / 2 - v / 2,
              w = p[d],
              x = b - f[u] - p[l],
              A = b / 2 - f[u] / 2 + y,
              T = ee(w, A, x),
              D = c
            n.modifiersData[r] = (((t = {})[D] = T), (t.centerOffset = T - A), t)
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? '[data-popper-arrow]' : n
          null != r &&
            ('string' != typeof r || (r = t.elements.popper.querySelector(r))) &&
            $(t.elements.popper, r) &&
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
            o = t.rects.popper,
            i = t.modifiersData.preventOverflow,
            a = Q(t, { elementContext: 'reference' }),
            s = Q(t, { altBoundary: !0 }),
            c = ne(a, r),
            u = ne(s, o, i),
            p = re(c),
            f = re(u)
          ;(t.modifiersData[n] = {
            referenceClippingOffsets: c,
            popperEscapeOffsets: u,
            isReferenceHidden: p,
            hasPopperEscaped: f,
          }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              'data-popper-reference-hidden': p,
              'data-popper-escaped': f,
            }))
        },
      },
    ],
  }),
  ie = { passive: !0, capture: !0 },
  ae = function () {
    return document.body
  }
function se(e, t, n) {
  if (Array.isArray(e)) {
    var r = e[t]
    return null == r ? (Array.isArray(n) ? n[t] : n) : r
  }
  return e
}
function ce(e, t) {
  var n = {}.toString.call(e)
  return 0 === n.indexOf('[object') && n.indexOf(t + ']') > -1
}
function ue(e, t) {
  return 'function' == typeof e ? e.apply(void 0, t) : e
}
function pe(e, t) {
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
function fe(e) {
  return [].concat(e)
}
function de(e, t) {
  ;-1 === e.indexOf(t) && e.push(t)
}
function le(e) {
  return e.split('-')[0]
}
function me(e) {
  return [].slice.call(e)
}
function ve(e) {
  return Object.keys(e).reduce(function (t, n) {
    return void 0 !== e[n] && (t[n] = e[n]), t
  }, {})
}
function he() {
  return document.createElement('div')
}
function ge(e) {
  return ['Element', 'Fragment'].some(function (t) {
    return ce(e, t)
  })
}
function be(e) {
  return ce(e, 'MouseEvent')
}
function ye(e) {
  return !(!e || !e._tippy || e._tippy.reference !== e)
}
function we(e) {
  return ge(e)
    ? [e]
    : (function (e) {
        return ce(e, 'NodeList')
      })(e)
    ? me(e)
    : Array.isArray(e)
    ? e
    : me(document.querySelectorAll(e))
}
function xe(e, t) {
  e.forEach(function (e) {
    e && (e.style.transitionDuration = t + 'ms')
  })
}
function Oe(e, t) {
  e.forEach(function (e) {
    e && e.setAttribute('data-state', t)
  })
}
function Ee(e) {
  var t,
    n = fe(e)[0]
  return null != n && null != (t = n.ownerDocument) && t.body ? n.ownerDocument : document
}
function Ae(e, t, n) {
  var r = t + 'EventListener'
  ;['transitionend', 'webkitTransitionEnd'].forEach(function (t) {
    e[r](t, n)
  })
}
function Te(e, t) {
  for (var n = t; n; ) {
    var r
    if (e.contains(n)) return !0
    n = null == n.getRootNode || null == (r = n.getRootNode()) ? void 0 : r.host
  }
  return !1
}
var De = { isTouch: !1 },
  je = 0
function Le() {
  De.isTouch ||
    ((De.isTouch = !0), window.performance && document.addEventListener('mousemove', ke))
}
function ke() {
  var e = performance.now()
  e - je < 20 && ((De.isTouch = !1), document.removeEventListener('mousemove', ke)), (je = e)
}
function Ce() {
  var e = document.activeElement
  if (ye(e)) {
    var t = e._tippy
    e.blur && !t.state.isVisible && e.blur()
  }
}
var Me = !!('undefined' != typeof window && 'undefined' != typeof document) && !!window.msCrypto
var He = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
  Ve = Object.assign(
    {
      appendTo: ae,
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
    He,
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
  Se = Object.keys(Ve)
function Pe(e) {
  var t = (e.plugins || []).reduce(function (t, n) {
    var r,
      o = n.name,
      i = n.defaultValue
    o && (t[o] = void 0 !== e[o] ? e[o] : null != (r = Ve[o]) ? r : i)
    return t
  }, {})
  return Object.assign({}, e, t)
}
function We(e, t) {
  var n = Object.assign(
    {},
    t,
    { content: ue(t.content, [e]) },
    t.ignoreAttributes
      ? {}
      : (function (e, t) {
          return (t ? Object.keys(Pe(Object.assign({}, Ve, { plugins: t }))) : Se).reduce(function (
            t,
            n
          ) {
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
          {})
        })(e, t.plugins)
  )
  return (
    (n.aria = Object.assign({}, Ve.aria, n.aria)),
    (n.aria = {
      expanded: 'auto' === n.aria.expanded ? t.interactive : n.aria.expanded,
      content: 'auto' === n.aria.content ? (t.interactive ? null : 'describedby') : n.aria.content,
    }),
    n
  )
}
function Be(e, t) {
  e.innerHTML = t
}
function Re(e) {
  var t = he()
  return (
    !0 === e
      ? (t.className = 'tippy-arrow')
      : ((t.className = 'tippy-svg-arrow'), ge(e) ? t.appendChild(e) : Be(t, e)),
    t
  )
}
function Ne(e, t) {
  ge(t.content)
    ? (Be(e, ''), e.appendChild(t.content))
    : 'function' != typeof t.content &&
      (t.allowHTML ? Be(e, t.content) : (e.textContent = t.content))
}
function Ie(e) {
  var t = e.firstElementChild,
    n = me(t.children)
  return {
    box: t,
    content: n.find(function (e) {
      return e.classList.contains('tippy-content')
    }),
    arrow: n.find(function (e) {
      return e.classList.contains('tippy-arrow') || e.classList.contains('tippy-svg-arrow')
    }),
    backdrop: n.find(function (e) {
      return e.classList.contains('tippy-backdrop')
    }),
  }
}
function qe(e) {
  var t = he(),
    n = he()
  ;(n.className = 'tippy-box'),
    n.setAttribute('data-state', 'hidden'),
    n.setAttribute('tabindex', '-1')
  var r = he()
  function o(n, r) {
    var o = Ie(t),
      i = o.box,
      a = o.content,
      s = o.arrow
    r.theme ? i.setAttribute('data-theme', r.theme) : i.removeAttribute('data-theme'),
      'string' == typeof r.animation
        ? i.setAttribute('data-animation', r.animation)
        : i.removeAttribute('data-animation'),
      r.inertia ? i.setAttribute('data-inertia', '') : i.removeAttribute('data-inertia'),
      (i.style.maxWidth = 'number' == typeof r.maxWidth ? r.maxWidth + 'px' : r.maxWidth),
      r.role ? i.setAttribute('role', r.role) : i.removeAttribute('role'),
      (n.content === r.content && n.allowHTML === r.allowHTML) || Ne(a, e.props),
      r.arrow
        ? s
          ? n.arrow !== r.arrow && (i.removeChild(s), i.appendChild(Re(r.arrow)))
          : i.appendChild(Re(r.arrow))
        : s && i.removeChild(s)
  }
  return (
    (r.className = 'tippy-content'),
    r.setAttribute('data-state', 'hidden'),
    Ne(r, e.props),
    t.appendChild(n),
    n.appendChild(r),
    o(e.props, e.props),
    { popper: t, onUpdate: o }
  )
}
qe.$$tippy = !0
var Ue = 1,
  _e = [],
  Fe = []
function ze(e, t) {
  var n,
    r,
    o,
    i,
    a,
    s,
    c,
    u,
    p = We(e, Object.assign({}, Ve, Pe(ve(t)))),
    f = !1,
    d = !1,
    l = !1,
    m = !1,
    v = [],
    h = pe(X, p.interactiveDebounce),
    g = Ue++,
    b = (u = p.plugins).filter(function (e, t) {
      return u.indexOf(e) === t
    }),
    y = {
      id: g,
      reference: e,
      popper: he(),
      popperInstance: null,
      props: p,
      state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
      plugins: b,
      clearDelayTimeouts: function () {
        clearTimeout(n), clearTimeout(r), cancelAnimationFrame(o)
      },
      setProps: function (t) {
        0
        if (y.state.isDestroyed) return
        V('onBeforeUpdate', [y, t]), z()
        var n = y.props,
          r = We(e, Object.assign({}, n, ve(t), { ignoreAttributes: !0 }))
        ;(y.props = r),
          F(),
          n.interactiveDebounce !== r.interactiveDebounce &&
            (W(), (h = pe(X, r.interactiveDebounce)))
        n.triggerTarget && !r.triggerTarget
          ? fe(n.triggerTarget).forEach(function (e) {
              e.removeAttribute('aria-expanded')
            })
          : r.triggerTarget && e.removeAttribute('aria-expanded')
        P(), H(), O && O(n, r)
        y.popperInstance &&
          (K(),
          Z().forEach(function (e) {
            requestAnimationFrame(e._tippy.popperInstance.forceUpdate)
          }))
        V('onAfterUpdate', [y, t])
      },
      setContent: function (e) {
        y.setProps({ content: e })
      },
      show: function () {
        0
        var e = y.state.isVisible,
          t = y.state.isDestroyed,
          n = !y.state.isEnabled,
          r = De.isTouch && !y.props.touch,
          o = se(y.props.duration, 0, Ve.duration)
        if (e || t || n || r) return
        if (L().hasAttribute('disabled')) return
        if ((V('onShow', [y], !1), !1 === y.props.onShow(y))) return
        ;(y.state.isVisible = !0), j() && (x.style.visibility = 'visible')
        H(), I(), y.state.isMounted || (x.style.transition = 'none')
        if (j()) {
          var i = C(),
            a = i.box,
            c = i.content
          xe([a, c], 0)
        }
        ;(s = function () {
          var e
          if (y.state.isVisible && !m) {
            if (
              ((m = !0),
              x.offsetHeight,
              (x.style.transition = y.props.moveTransition),
              j() && y.props.animation)
            ) {
              var t = C(),
                n = t.box,
                r = t.content
              xe([n, r], o), Oe([n, r], 'visible')
            }
            S(),
              P(),
              de(Fe, y),
              null == (e = y.popperInstance) || e.forceUpdate(),
              V('onMount', [y]),
              y.props.animation &&
                j() &&
                (function (e, t) {
                  U(e, t)
                })(o, function () {
                  ;(y.state.isShown = !0), V('onShown', [y])
                })
          }
        }),
          (function () {
            var e,
              t = y.props.appendTo,
              n = L()
            e = (y.props.interactive && t === ae) || 'parent' === t ? n.parentNode : ue(t, [n])
            e.contains(x) || e.appendChild(x)
            ;(y.state.isMounted = !0), K(), !1
          })()
      },
      hide: function () {
        0
        var e = !y.state.isVisible,
          t = y.state.isDestroyed,
          n = !y.state.isEnabled,
          r = se(y.props.duration, 1, Ve.duration)
        if (e || t || n) return
        if ((V('onHide', [y], !1), !1 === y.props.onHide(y))) return
        ;(y.state.isVisible = !1),
          (y.state.isShown = !1),
          (m = !1),
          (f = !1),
          j() && (x.style.visibility = 'hidden')
        if ((W(), q(), H(!0), j())) {
          var o = C(),
            i = o.box,
            a = o.content
          y.props.animation && (xe([i, a], r), Oe([i, a], 'hidden'))
        }
        S(),
          P(),
          y.props.animation
            ? j() &&
              (function (e, t) {
                U(e, function () {
                  !y.state.isVisible && x.parentNode && x.parentNode.contains(x) && t()
                })
              })(r, y.unmount)
            : y.unmount()
      },
      hideWithInteractivity: function (e) {
        0
        k().addEventListener('mousemove', h), de(_e, h), h(e)
      },
      enable: function () {
        y.state.isEnabled = !0
      },
      disable: function () {
        y.hide(), (y.state.isEnabled = !1)
      },
      unmount: function () {
        0
        y.state.isVisible && y.hide()
        if (!y.state.isMounted) return
        Q(),
          Z().forEach(function (e) {
            e._tippy.unmount()
          }),
          x.parentNode && x.parentNode.removeChild(x)
        ;(Fe = Fe.filter(function (e) {
          return e !== y
        })),
          (y.state.isMounted = !1),
          V('onHidden', [y])
      },
      destroy: function () {
        0
        if (y.state.isDestroyed) return
        y.clearDelayTimeouts(),
          y.unmount(),
          z(),
          delete e._tippy,
          (y.state.isDestroyed = !0),
          V('onDestroy', [y])
      },
    }
  if (!p.render) return y
  var w = p.render(y),
    x = w.popper,
    O = w.onUpdate
  x.setAttribute('data-tippy-root', ''),
    (x.id = 'tippy-' + y.id),
    (y.popper = x),
    (e._tippy = y),
    (x._tippy = y)
  var E = b.map(function (e) {
      return e.fn(y)
    }),
    A = e.hasAttribute('aria-expanded')
  return (
    F(),
    P(),
    H(),
    V('onCreate', [y]),
    p.showOnCreate && ee(),
    x.addEventListener('mouseenter', function () {
      y.props.interactive && y.state.isVisible && y.clearDelayTimeouts()
    }),
    x.addEventListener('mouseleave', function () {
      y.props.interactive &&
        y.props.trigger.indexOf('mouseenter') >= 0 &&
        k().addEventListener('mousemove', h)
    }),
    y
  )
  function T() {
    var e = y.props.touch
    return Array.isArray(e) ? e : [e, 0]
  }
  function D() {
    return 'hold' === T()[0]
  }
  function j() {
    var e
    return !(null == (e = y.props.render) || !e.$$tippy)
  }
  function L() {
    return c || e
  }
  function k() {
    var e = L().parentNode
    return e ? Ee(e) : document
  }
  function C() {
    return Ie(x)
  }
  function M(e) {
    return (y.state.isMounted && !y.state.isVisible) || De.isTouch || (i && 'focus' === i.type)
      ? 0
      : se(y.props.delay, e ? 0 : 1, Ve.delay)
  }
  function H(e) {
    void 0 === e && (e = !1),
      (x.style.pointerEvents = y.props.interactive && !e ? '' : 'none'),
      (x.style.zIndex = '' + y.props.zIndex)
  }
  function V(e, t, n) {
    var r
    ;(void 0 === n && (n = !0),
    E.forEach(function (n) {
      n[e] && n[e].apply(n, t)
    }),
    n) && (r = y.props)[e].apply(r, t)
  }
  function S() {
    var t = y.props.aria
    if (t.content) {
      var n = 'aria-' + t.content,
        r = x.id
      fe(y.props.triggerTarget || e).forEach(function (e) {
        var t = e.getAttribute(n)
        if (y.state.isVisible) e.setAttribute(n, t ? t + ' ' + r : r)
        else {
          var o = t && t.replace(r, '').trim()
          o ? e.setAttribute(n, o) : e.removeAttribute(n)
        }
      })
    }
  }
  function P() {
    !A &&
      y.props.aria.expanded &&
      fe(y.props.triggerTarget || e).forEach(function (e) {
        y.props.interactive
          ? e.setAttribute('aria-expanded', y.state.isVisible && e === L() ? 'true' : 'false')
          : e.removeAttribute('aria-expanded')
      })
  }
  function W() {
    k().removeEventListener('mousemove', h),
      (_e = _e.filter(function (e) {
        return e !== h
      }))
  }
  function B(t) {
    if (!De.isTouch || (!l && 'mousedown' !== t.type)) {
      var n = (t.composedPath && t.composedPath()[0]) || t.target
      if (!y.props.interactive || !Te(x, n)) {
        if (
          fe(y.props.triggerTarget || e).some(function (e) {
            return Te(e, n)
          })
        ) {
          if (De.isTouch) return
          if (y.state.isVisible && y.props.trigger.indexOf('click') >= 0) return
        } else V('onClickOutside', [y, t])
        !0 === y.props.hideOnClick &&
          (y.clearDelayTimeouts(),
          y.hide(),
          (d = !0),
          setTimeout(function () {
            d = !1
          }),
          y.state.isMounted || q())
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
      e.addEventListener('touchend', B, ie),
      e.addEventListener('touchstart', N, ie),
      e.addEventListener('touchmove', R, ie)
  }
  function q() {
    var e = k()
    e.removeEventListener('mousedown', B, !0),
      e.removeEventListener('touchend', B, ie),
      e.removeEventListener('touchstart', N, ie),
      e.removeEventListener('touchmove', R, ie)
  }
  function U(e, t) {
    var n = C().box
    function r(e) {
      e.target === n && (Ae(n, 'remove', r), t())
    }
    if (0 === e) return t()
    Ae(n, 'remove', a), Ae(n, 'add', r), (a = r)
  }
  function _(t, n, r) {
    void 0 === r && (r = !1),
      fe(y.props.triggerTarget || e).forEach(function (e) {
        e.addEventListener(t, n, r), v.push({ node: e, eventType: t, handler: n, options: r })
      })
  }
  function F() {
    var e
    D() && (_('touchstart', $, { passive: !0 }), _('touchend', Y, { passive: !0 })),
      ((e = y.props.trigger), e.split(/\s+/).filter(Boolean)).forEach(function (e) {
        if ('manual' !== e)
          switch ((_(e, $), e)) {
            case 'mouseenter':
              _('mouseleave', Y)
              break
            case 'focus':
              _(Me ? 'focusout' : 'blur', J)
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
        o = e.options
      t.removeEventListener(n, r, o)
    }),
      (v = [])
  }
  function $(e) {
    var t,
      n = !1
    if (y.state.isEnabled && !G(e) && !d) {
      var r = 'focus' === (null == (t = i) ? void 0 : t.type)
      ;(i = e),
        (c = e.currentTarget),
        P(),
        !y.state.isVisible &&
          be(e) &&
          _e.forEach(function (t) {
            return t(e)
          }),
        'click' === e.type &&
        (y.props.trigger.indexOf('mouseenter') < 0 || f) &&
        !1 !== y.props.hideOnClick &&
        y.state.isVisible
          ? (n = !0)
          : ee(e),
        'click' === e.type && (f = !n),
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
            o = e.popperState,
            i = e.props.interactiveBorder,
            a = le(o.placement),
            s = o.modifiersData.offset
          if (!s) return !0
          var c = 'bottom' === a ? s.top.y : 0,
            u = 'top' === a ? s.bottom.y : 0,
            p = 'right' === a ? s.left.x : 0,
            f = 'left' === a ? s.right.x : 0,
            d = t.top - r + c > i,
            l = r - t.bottom - u > i,
            m = t.left - n + p > i,
            v = n - t.right - f > i
          return d || l || m || v
        })
      })(
        Z()
          .concat(x)
          .map(function (e) {
            var t,
              n = null == (t = e._tippy.popperInstance) ? void 0 : t.state
            return n ? { popperRect: e.getBoundingClientRect(), popperState: n, props: p } : null
          })
          .filter(Boolean),
        e
      ) &&
        (W(), te(e)))
  }
  function Y(e) {
    G(e) ||
      (y.props.trigger.indexOf('click') >= 0 && f) ||
      (y.props.interactive ? y.hideWithInteractivity(e) : te(e))
  }
  function J(e) {
    ;(y.props.trigger.indexOf('focusin') < 0 && e.target !== L()) ||
      (y.props.interactive && e.relatedTarget && x.contains(e.relatedTarget)) ||
      te(e)
  }
  function G(e) {
    return !!De.isTouch && D() !== e.type.indexOf('touch') >= 0
  }
  function K() {
    Q()
    var t = y.props,
      n = t.popperOptions,
      r = t.placement,
      o = t.offset,
      i = t.getReferenceClientRect,
      a = t.moveTransition,
      c = j() ? Ie(x).arrow : null,
      u = i ? { getBoundingClientRect: i, contextElement: i.contextElement || L() } : e,
      p = [
        { name: 'offset', options: { offset: o } },
        { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
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
    j() && c && p.push({ name: 'arrow', options: { element: c, padding: 3 } }),
      p.push.apply(p, (null == n ? void 0 : n.modifiers) || []),
      (y.popperInstance = oe(
        u,
        x,
        Object.assign({}, n, { placement: r, onFirstUpdate: s, modifiers: p })
      ))
  }
  function Q() {
    y.popperInstance && (y.popperInstance.destroy(), (y.popperInstance = null))
  }
  function Z() {
    return me(x.querySelectorAll('[data-tippy-root]'))
  }
  function ee(e) {
    y.clearDelayTimeouts(), e && V('onTrigger', [y, e]), I()
    var t = M(!0),
      r = T(),
      o = r[0],
      i = r[1]
    De.isTouch && 'hold' === o && i && (t = i),
      t
        ? (n = setTimeout(function () {
            y.show()
          }, t))
        : y.show()
  }
  function te(e) {
    if ((y.clearDelayTimeouts(), V('onUntrigger', [y, e]), y.state.isVisible)) {
      if (
        !(
          y.props.trigger.indexOf('mouseenter') >= 0 &&
          y.props.trigger.indexOf('click') >= 0 &&
          ['mouseleave', 'mousemove'].indexOf(e.type) >= 0 &&
          f
        )
      ) {
        var t = M(!1)
        t
          ? (r = setTimeout(function () {
              y.state.isVisible && y.hide()
            }, t))
          : (o = requestAnimationFrame(function () {
              y.hide()
            }))
      }
    } else q()
  }
}
function $e(e, t) {
  void 0 === t && (t = {})
  var n = Ve.plugins.concat(t.plugins || [])
  document.addEventListener('touchstart', Le, ie), window.addEventListener('blur', Ce)
  var r = Object.assign({}, t, { plugins: n }),
    o = we(e).reduce(function (e, t) {
      var n = t && ze(t, r)
      return n && e.push(n), e
    }, [])
  return ge(e) ? o[0] : o
}
;($e.defaultProps = Ve),
  ($e.setDefaultProps = function (e) {
    Object.keys(e).forEach(function (t) {
      Ve[t] = e[t]
    })
  }),
  ($e.currentInput = De)
Object.assign({}, i, {
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
$e.setDefaultProps({ render: qe }),
  $e('#tippy', {
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
//# sourceMappingURL=index.f589cf86.js.map
