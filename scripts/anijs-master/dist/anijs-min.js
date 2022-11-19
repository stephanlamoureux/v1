!(function (a, b) {
	'use strict'
	'object' == typeof module && 'object' == typeof module.exports
		? (module.exports = a.document
				? b(a, !0)
				: function (a) {
						if (!a.document) throw new Error('AniJS-RWWD')
						return b(a)
				  })
		: b(a)
})('undefined' != typeof window ? window : this, function (a, b) {
	var c = (function (b) {
		var c = 'data-anijs',
			d = 'default',
			e = '|',
			f = '$',
			g = 'if',
			h = 'on',
			i = ['do', 'after', 'before', 'to'],
			j = '(\\s+|^)',
			k = '(\\s+|$)',
			l = 'animationend',
			m = 'transitionend',
			n = 'target'
		b = {
			rootDOMTravelScope: {},
			notifierCollection: {},
			init: function () {
				o._t = {}
				var a = o._a()
				b.registerHelper(d, a),
					(o._u = d),
					(b.rootDOMTravelScope = document),
					(b.Parser = o.Parser),
					(o._v = o._p()),
					(o._w = '')
			},
			setDOMRootTravelScope: function (a) {
				var c,
					d = document
				try {
					'document' === a ? (c = d) : ((c = d.querySelector(a)), c || (c = d))
				} catch (e) {
					c = d
				}
				b.rootDOMTravelScope = c
			},
			run: function () {
				var a = [],
					d = {}
				b.purgeAll(), (b.notifierCollection = {}), (a = o._o(b.rootDOMTravelScope))
				var e,
					f = a.length,
					g = 0
				for (g; f > g; g++) (e = a[g]), (d = o._n(e.getAttribute(c))), o._c(e, d)
				var h = b.getNotifier('AniJSNotifier')
				h && h.dispatchEvent('onRunFinished')
			},
			createAnimation: function (a, b) {
				var c = b || ''
				o._c(c, a)
			},
			getHelper: function (a) {
				var b = o._t
				return b[a] || b[d]
			},
			registerHelper: function (a, b) {
				o._t[a] = b
			},
			purge: function (a) {
				if (a && '' !== a && ' ' !== a) {
					var c = document.querySelectorAll(a),
						d = c.length,
						e = 0
					for (e; d > e; e++) b.EventSystem.purgeEventTarget(c[e])
				}
			},
			purgeAll: function () {
				b.EventSystem.purgeAll()
			},
			purgeEventTarget: function (a) {
				b.EventSystem.purgeEventTarget(a)
			},
			setClassNamesWhenAnim: function (a) {
				o._w = ' ' + a
			},
			createNotifier: function () {
				return b.EventSystem.createEventTarget()
			},
			registerNotifier: function (a) {
				var c = b.notifierCollection
				return a.id && a.value && b.EventSystem.isEventTarget(a.value)
					? ((c[a.id] = a.value), 1)
					: ''
			},
			getNotifier: function (a) {
				return b.notifierCollection[a]
			},
		}
		var o = {}
		return (
			(o._a = function () {
				var a = {
					removeAnim: function (a, b) {
						a.target && a.type && b.nodeHelper.removeClass(a.target, b.behavior)
					},
					holdAnimClass: function () {},
					fireOnce: function (a, b) {
						b.eventSystem.removeEventListenerHelper(b.eventTarget, b.event.type, b.listener)
					},
					emit: function (a, c, d) {
						var e = d[0] || null,
							f = ''
						if (null !== e) {
							;(e = e.split('.')), e.length > 1 ? ((f = e[0]), (e = e[1])) : ((f = ''), (e = e[0]))
							var g = b.getNotifier(f) || null
							null !== g && g.dispatchEvent(e)
						}
						c.hasRunned || c.run()
					},
				}
				return a
			}),
			(o._b = function () {
				return new Parser()
			}),
			(o._c = function (a, b) {
				var c,
					d,
					e,
					f,
					g = b.length,
					h = 0
				for (h; g > h; h++)
					(c = b[h]),
						(e = c.after),
						(d = c.before),
						(f = c.behavior),
						e && (c.after = o.Parser.parseDoDefinition(e)),
						d && (c.before = o.Parser.parseDoDefinition(d)),
						f && (c.behavior = o.Parser.parseDoDefinition(f)),
						o._d(a, c)
			}),
			(o._d = function (a, c) {
				var d,
					e = o._e(c),
					f = o._f(a, c)
				if ((c.after && o.Util._x(c.after) && (d = c.after[0]), '' !== e)) {
					var g,
						h = f.length,
						i = 0
					for (i; h > i; i++)
						if (((g = f[i]), b.EventSystem.isEventTarget(g))) {
							var j = function (e) {
								var f = o._g(a, c, e),
									g = o._h(c),
									h = o._j(a, c),
									i = o._i(a, c)
								'' !== o._w && (o.Util._x(g) || (g += o._w))
								var k = {
										behaviorTargetList: f,
										nodeHelper: o.NodeHelper,
										animationEndEvent: o._v,
										behavior: g,
										after: i,
										eventSystem: b.EventSystem,
										eventTarget: e.currentTarget,
										afterFunctionName: d,
										dataAniJSOwner: a,
										listener: j,
										event: e,
										before: h,
									},
									l = new b.AnimationContext(k)
								l.runAll(k)
							}
							b.EventSystem.addEventListenerHelper(g, e, j, !1),
								b.EventSystem.registerEventHandle(g, e, j)
						}
				}
			}),
			(o._e = function (a) {
				var b = '',
					c = a.event || b
				return c === l ? (c = o._p()) : c === m && (c = o._q()), c
			}),
			(o._f = function (c, d) {
				var e,
					f = c,
					g = [f],
					h = b.rootDOMTravelScope
				if (d.eventTarget)
					if (((e = o._notifierHelper(d.eventTarget)), e.length > 0)) g = e
					else if ('document' === d.eventTarget) g = [document]
					else if ('window' === d.eventTarget) g = [a]
					else if (d.eventTarget.split)
						try {
							g = h.querySelectorAll(d.eventTarget)
						} catch (i) {
							g = []
						}
				return g
			}),
			(o._g = function (a, c, d) {
				var e = a,
					g = [e],
					h = b.rootDOMTravelScope,
					i = c.behaviorTarget
				if (i)
					if (o.Util._x(i)) {
						var j = this._y(a, c, i)
						j && o.Util.isFunction(j[0]) && (g = j[0](d, { dataAniJSOwner: a }, o._z(j)))
					} else if (i === n && d.currentTarget) g = [d.currentTarget]
					else {
						i = i.split(f).join(',')
						try {
							g = h.querySelectorAll(i)
						} catch (k) {
							g = []
						}
					}
				return g
			}),
			(o._h = function (a) {
				return this._y({}, a, a.behavior)
			}),
			(o._i = function (a, b) {
				var c = b.after
				return o.Util._x(c) ? this._y(a, b, c) : o._k(a, b, c)
			}),
			(o._j = function (a, b) {
				var c = b.before
				return o.Util._x(c) ? this._y(a, b, c) : o._k(a, b, c)
			}),
			(o._y = function (a, b, c) {
				var d,
					e = c || ''
				return o.Util._x(e) && ((d = o._k(a, b, e[0])), d ? (e[0] = d) : (e = e.join(' '))), e
			}),
			(o._k = function (a, b, c) {
				var d = c || '',
					e = o._l(b)
				if (d && !o.Util.isFunction(d)) {
					var f = o._t,
						g = f[e]
					d = g && o.Util.isFunction(g[d]) ? g[d] : !1
				}
				return d
			}),
			(o._l = function (a) {
				var b = a.helper || o._u
				return b
			}),
			(o._notifierHelper = function (a) {
				{
					var c = []
					b.notifierCollection
				}
				if (a)
					if (a.id && b.EventSystem.isEventTarget(a.value)) c.push(a.value), b.registerNotifier(a)
					else if (a.split) {
						notifierIDList = a.split('$')
						var d,
							e = notifierIDList.length,
							f = 1
						for (f; e > f; f++)
							if (((d = notifierIDList[f]), d && ' ' !== d)) {
								d = d.trim()
								var g = b.getNotifier(d)
								g ||
									((g = b.EventSystem.createEventTarget()),
									b.registerNotifier({ id: d, value: g })),
									c.push(g)
							}
					}
				return c
			}),
			(o._z = function (a) {
				for (var b = [], c = a.length; c-- > 1; ) b[c - 1] = a[c]
				return b
			}),
			(o._n = function (a) {
				return o.Parser.parse(a)
			}),
			(o._o = function (a) {
				var b = '[' + c + ']'
				return a.querySelectorAll(b)
			}),
			(o._p = function () {
				var a = o._r(),
					b = [l, 'oAnimationEnd', l, 'webkitAnimationEnd']
				return b[a]
			}),
			(o._q = function () {
				var a = o._r(),
					b = [m, 'oTransitionEnd', m, 'webkitTransitionEnd']
				return b[a]
			}),
			(o._r = function () {
				for (
					var a = document.createElement('fe'),
						b = 'Animation',
						c = ['animation', 'O' + b, 'Moz' + b, 'webkit' + b],
						d = 0;
					d < c.length;
					d++
				)
					if (void 0 !== a.style[c[d]]) return d
			}),
			(b.AnimationContext = function (a) {
				var c = this
				;(c.init = function (a) {
					;(c.behaviorTargetList = a.behaviorTargetList || []),
						(c.nodeHelper = a.nodeHelper),
						(c.animationEndEvent = a.animationEndEvent),
						(c.behavior = a.behavior),
						(c.after = a.after),
						(c.eventSystem = a.eventSystem),
						(c.eventTarget = a.eventTarget),
						(c.afterFunctionName = a.afterFunctionName),
						(c.dataAniJSOwner = a.dataAniJSOwner),
						(c.listener = a.listener),
						(c.event = a.event),
						(c.before = a.before)
				}),
					(c.doDefaultAction = function (a, b) {
						var d,
							e = c,
							f = e.nodeHelper,
							g = e.animationEndEvent,
							h = e.after,
							i = e.afterFunctionName
						e.eventSystem.addEventListenerHelper(a, g, function (a) {
							a.stopPropagation(),
								e.eventSystem.removeEventListenerHelper(a.target, a.type, arguments.callee),
								h && (o.Util.isFunction(h) ? h(a, c) : o.Util._x(h) && h[0](a, c, o._z(h)))
						}),
							'holdAnimClass' !== i &&
								'$holdAnimClass' !== i &&
								((d = a._ajLastBehavior), d && f.removeClass(a, d), (a._ajLastBehavior = b)),
							(a.offsetWidth = a.offsetWidth),
							f.addClass(a, b)
					}),
					(c.doFunctionAction = function (a, b) {
						var d = c,
							e = d.after,
							f = { target: a }
						b[0](f, c, o._z(b)),
							o.Util.isFunction(e) ? e(f, c) : o.Util._x(e) && e[0](f, c, o._z(e))
					}),
					(c.runAll = function () {
						var a,
							d,
							e = c,
							f = e.behaviorTargetList,
							g = f.length,
							h = (e.behavior, 0),
							i = e.before,
							j = c.event
						for (h; g > h; h++)
							(d = {
								behaviorTargetList: [f[h]],
								nodeHelper: c.nodeHelper,
								animationEndEvent: c.animationEndEvent,
								behavior: c.behavior,
								after: c.after,
								eventSystem: c.eventSystem,
								eventTarget: c.eventTarget,
								afterFunctionName: c.afterFunctionName,
								dataAniJSOwner: c.dataAniJSOwner,
								listener: c.listener,
								event: j,
							}),
								(a = new b.AnimationContext(d)),
								i ? (o.Util.isFunction(i) ? i(j, a) : o.Util._x(i) && i[0](j, a, o._z(i))) : a.run()
					}),
					(c.run = function () {
						var a = c,
							b = a.behavior,
							d = a.behaviorTargetList[0]
						;(c.hasRunned = 1), o.Util._x(b) ? a.doFunctionAction(d, b) : a.doDefaultAction(d, b)
					}),
					c.init(a)
			}),
			(o.Parser = {
				parse: function (a) {
					return this.parseDeclaration(a)
				},
				parseDeclaration: function (a) {
					var b,
						c,
						d = []
					b = a.split(';')
					var e = b.length,
						f = 0
					for (f; e > f; f++) (c = this.parseSentence(b[f])), d.push(c)
					return d
				},
				parseSentence: function (a) {
					var b,
						c,
						d = {}
					b = a.split(',')
					var e = b.length,
						f = 0
					for (f; e > f; f++) (c = this.parseDefinition(b[f])), (d[c.key] = c.value)
					return d
				},
				parseDefinition: function (a) {
					var b,
						c,
						d,
						e = {},
						f = 'event',
						j = 'eventTarget',
						k = ['behavior', 'after', 'before', 'behaviorTarget']
					if (((b = a.split(':')), b.length > 1)) {
						if (
							((c = b[0].trim()),
							b.length > 2
								? ((d = b.slice(1)), (d = d.join(':')), (d = d.trim()))
								: (d = b[1].trim()),
							(e.value = d),
							c === g)
						)
							c = f
						else if (c === h) c = j
						else
							for (var l = i.length - 1; l >= 0; l--)
								c === i[l] &&
									((c = k[l]),
									('after' !== c && 'before' !== c) || '$' === d[0] || (d = '$' + d),
									(d = this.parseDoDefinition(d)))
						;(e.key = c), (e.value = d)
					}
					return e
				},
				parseDoDefinition: function (a) {
					var b = /^\$(\w+)\s*/g,
						c = b.exec(a),
						d = '',
						f = 1
					if (null !== c) {
						;(d = c[1]),
							(doDefinitionArray = a.split(c[0])[1]),
							(doDefinitionArray = null !== doDefinitionArray ? doDefinitionArray.split(e) : []),
							(a = []),
							(a[0] = d)
						for (var g = 0; g < doDefinitionArray.length; g++)
							'' !== doDefinitionArray[g] && (a[f++] = doDefinitionArray[g].trim())
						return a
					}
					return a
				},
			}),
			(o.NodeHelper = {
				addClass: function (a, b) {
					b instanceof Array || (b = b.split(' '))
					for (var c = 0, d = b.length; d > c; ++c)
						b[c] &&
							!new RegExp(j + b[c] + k).test(a.className) &&
							(a.className = '' === a.className ? b[c] : a.className.trim() + ' ' + b[c])
				},
				removeClass: function (a, b) {
					b instanceof Array || (b = b.split(' '))
					for (var c = 0, d = b.length; d > c; ++c)
						a.className = a.className.replace(new RegExp(j + b[c] + k), ' ').trim()
				},
				hasClass: function (a, b) {
					return b && new RegExp(j + b + k).test(a.className)
				},
			}),
			(o.Util = {
				isFunction: function (a) {
					return !!(a && a.constructor && a.call && a.apply)
				},
				_x: function (a) {
					return Array.isArray(a)
				},
			}),
			(b.EventSystem = {
				eventCollection: {},
				eventIdCounter: 0,
				isEventTarget: function (a) {
					return a.addEventListener ? 1 : 0
				},
				createEventTarget: function () {
					return new b.EventTarget()
				},
				addEventListenerHelper: function (a, b, c) {
					a.addEventListener(b, c, !1)
				},
				removeEventListenerHelper: function (a, b, c) {
					a && a.removeEventListener(b, c)
				},
				purgeAll: function () {
					var a,
						b,
						c = this,
						d = c.eventCollection,
						e = Object.keys(d),
						f = e.length,
						g = 0
					for (g; f > g; g++)
						(a = e[g]),
							(b = d[a]),
							b &&
								b.handleCollection &&
								b.handleCollection.length > 0 &&
								c.purgeEventTarget(b.handleCollection[0].element),
							delete d[a]
				},
				purgeAllNodes: function (a) {
					var b = a.querySelectorAll('*')
					size = b.length
					for (var c = size - 1; c >= 0; c--) this.purgeEventTarget(b[c])
				},
				purgeEventTarget: function (a) {
					var b,
						c = this,
						d = a._aniJSEventID
					if (d) {
						b = c.eventCollection[d].handleCollection
						var e,
							f = b.length,
							g = 0
						for (g; f > g; g++) (e = b[g]), c.removeEventListenerHelper(a, e.eventType, e.listener)
						;(c.eventCollection[d] = a._aniJSEventID = null),
							delete c.eventCollection[d],
							delete a._aniJSEventID
					}
				},
				registerEventHandle: function (a, b, c) {
					var d = this,
						e = a._aniJSEventID,
						f = d.eventCollection,
						g = { eventType: b, listener: c, element: a }
					if (e) f[e].handleCollection.push(g)
					else {
						var h = { handleCollection: [g] }
						;(f[++d.eventIdCounter] = h), (a._aniJSEventID = d.eventIdCounter)
					}
				},
			}),
			(b.EventTarget = function () {
				this._listeners = {}
			}),
			(b.EventTarget.prototype = {
				constructor: b.EventTarget,
				addEventListener: function (a, b) {
					var c = this
					'undefined' == typeof c._listeners[a] && (c._listeners[a] = []), c._listeners[a].push(b)
				},
				dispatchEvent: function (a) {
					var b = this
					if (('string' == typeof a && (a = { type: a }), a.target || (a.target = b), !a.type))
						throw new Error('error')
					if (this._listeners[a.type] instanceof Array)
						for (var c = b._listeners[a.type], d = 0, e = c.length; e > d; d++) c[d].call(b, a)
				},
				removeEventListener: function (a, b) {
					var c = this
					if (c._listeners[a] instanceof Array)
						for (var d = c._listeners[a], e = 0, f = d.length; f > e; e++)
							if (d[e] === b) {
								d.splice(e, 1)
								break
							}
				},
			}),
			b
		)
	})(c || {})
	return (
		c.init(),
		c.run(),
		'function' == typeof define &&
			define.amd &&
			define('anijs', [], function () {
				return c
			}),
		'undefined' == typeof b && (a.AniJS = c),
		c
	)
})
