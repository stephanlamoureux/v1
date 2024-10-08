!(function () {
	function a(a, b) {
		var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector
		return c.call(a, b)
	}
	function b(a) {
		return document.querySelectorAll(a)
	}
	function c(a) {
		for (var b = a.length; b-- > 0; )
			AniJS.EventSystem.purgeAllNodes(a[b]), a[b].parentNode.removeChild(a[b])
	}
	function d(a, b) {
		for (var c = !1, d = 0; d < a.length && !c; d++) c = a[d] === b
		return c
	}
	function e(a, b, c, d) {
		for (var e = 0; c > e++; ) b === a ? d(b, b.parentNode) : d(a, b)
	}
	function f(a, b) {
		for (
			var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector;
			a;

		) {
			if (c.call(a, b)) return a
			a = a.parentElement
		}
		return !1
	}
	function g(b, c) {
		var d = []
		for (null === c && (c = '*'); b && 'html' !== b.tagName; )
			a(b, c) && d.push(b), (b = b.parentElement)
		return d
	}
	function h(a, c, d) {
		var e = [],
			f = '*'
		return (
			(e = 0 === d.length ? [c.dataAniJSOwner] : 'target' === d[0] ? [a.currentTarget] : b(d[0])),
			d.length > 1 && (f = d[1]),
			{ elements: e, selector: f }
		)
	}
	function i(a, b) {
		return a.querySelectorAll(b)
	}
	function j(a, b) {
		for (var c, e = a.length; e-- > 0; ) (c = a[e]), c && !d(b, c) && b.push(c)
		return b
	}
	var k = AniJS.getHelper()
	;(k.addClass = function (a, b, c) {
		k.makeClassAction(a, b, c, 0, a.target)
	}),
		(k.removeClass = function (a, b, c) {
			k.makeClassAction(a, b, c, 1, a.target)
		}),
		(k.toggleClass = function (a, b, c) {
			k.makeClassAction(a, b, c, 2, a.target)
		}),
		(k.makeClassAction = function (a, b, c, d, e) {
			for (var f = b.behaviorTargetList, g = 0; g < f.length; g++)
				(element = f[g]),
					(e = element),
					0 === d
						? b.nodeHelper.addClass(e, c[0])
						: 1 === d
						? b.nodeHelper.removeClass(e, c[0])
						: b.nodeHelper.hasClass(e, c[0])
						? b.nodeHelper.removeClass(e, c[0])
						: b.nodeHelper.addClass(e, c[0])
			b.hasRunned || b.run()
		}),
		(k.remove = function (a, d, e) {
			var f = e.length,
				g = a.target,
				h = null
			if (0 === f) c([g])
			else for (; f-- > 0; ) (h = b(e[f]) || []), c(h)
			d.hasRunned || d.run()
		}),
		(k.clone = function (a, c, d) {
			var f = d.length,
				g = a.target,
				h = c.eventTarget,
				i = null,
				j = k.cloneNodeHelper,
				l = 1
			if (0 === f) e(h, g, l, j)
			else {
				if (1 == f) {
					if (((l = parseInt(d[0]) || null), null !== l))
						return e(h, g, l, j), void (c.hasRunned || c.run())
					l = 1
				} else l = parseInt(d[1]) || 1
				i = b(d[0])
				for (var m = 0; m < i.length; m++) e(i[m], g, l, j)
			}
			c.hasRunned || c.run(), AniJS.run()
		}),
		(k.parent = function (a, b, c) {
			for (var e, f = h(a, b, c), g = f.elements, i = [], j = g.length; j-- > 0; )
				(e = g[j].parentNode), d(i, e) || i.push(e)
			return i
		}),
		(k.ancestors = function (a, b, c) {
			var e = h(a, b, c),
				f = e.elements,
				i = e.selector,
				j = [],
				k = [],
				l = 0,
				m = 0
			for (l = f.length; l-- > 0; )
				for (k = g(f[l].parentNode, i), m = k.length; m-- > 0; ) d(j, k[m]) || j.push(k[m])
			return j
		}),
		(k.closest = function (a, b, c) {
			for (var e, g = h(a, b, c), i = g.elements, j = g.selector, k = i.length, l = []; k-- > 0; )
				(e = f(i[k].parentNode, j)), e && !d(l, e) && l.push(e)
			return l
		}),
		(k.find = function (a, b, c) {
			for (var d = h(a, b, c), e = d.elements, f = d.selector, g = e.length, k = []; g-- > 0; )
				(tempFoundedNodeList = i(e[g], f)), (k = j(tempFoundedNodeList, k))
			return k
		}),
		(k.children = function (b, c, d) {
			for (
				var e = h(b, c, d), f = e.elements, g = e.selector, i = f.length, k = 0, l = [], m = null;
				i-- > 0;

			)
				for (m = f[i].children; k < m.length; k++) a(m[k], g) && j([m[k]], l)
			return l
		}),
		(k.cloneNodeHelper = function (a, b) {
			if (null !== b) {
				var c = a.cloneNode(!0)
				AniJS.purgeEventTarget(c), c.removeAttribute('id'), b.appendChild(c)
			}
		})
})(window)
