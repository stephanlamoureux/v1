!(function () {
	AniJS.EventSystem
	;(AniJS.EventSystem.isEventTarget = function (a) {
		return a.trigger ? 1 : 0
	}),
		(AniJS.EventSystem.createEventTarget = function () {
			return $({})
		}),
		(AniJS.EventSystem.addEventListenerHelper = function (a, b, c) {
			$(a).on(b, c)
		}),
		(AniJS.EventSystem.removeEventListenerHelper = function (a, b, c) {
			$(a).off(b, c)
		})
})(window)
