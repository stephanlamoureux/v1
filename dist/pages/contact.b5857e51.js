/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */ (function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e();
})(this, function() {
    return function(t) {
        function e(n) {
            if (s[n]) return s[n].exports;
            var i = s[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
        }
        var s = {};
        return e.m = t, e.c = s, e.p = "", e(0);
    }([
        function(t1, e1, s1) {
            "use strict";
            function n1(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(e1, "__esModule", {
                value: !0
            });
            var i1 = function() {
                function t2(t, e) {
                    for(var s = 0; s < e.length; s++){
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }
                return function(e, s, n) {
                    return s && t2(e.prototype, s), n && t2(e, n), e;
                };
            }(), r1 = s1(1), o = s1(3), a1 = function() {
                function t3(e, s) {
                    n1(this, t3), r1.initializer.load(this, s, e), this.begin();
                }
                return i1(t3, [
                    {
                        key: "toggle",
                        value: function() {
                            this.pause.status ? this.start() : this.stop();
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
                        }
                    },
                    {
                        key: "start",
                        value: function() {
                            this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            this.reset(!1), this.options.onDestroy(this);
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
                        }
                    },
                    {
                        key: "begin",
                        value: function() {
                            var t = this;
                            this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                                t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
                            }, this.startDelay);
                        }
                    },
                    {
                        key: "typewrite",
                        value: function(t, e) {
                            var s = this;
                            this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                            var n2 = this.humanizer(this.typeSpeed), i = 1;
                            return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void (this.timeout = setTimeout(function() {
                                e = o.htmlParser.typeHtmlChars(t, e, s);
                                var n = 0, r = t.substr(e);
                                if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                                    var a = 1;
                                    r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0);
                                }
                                if ("`" === r.charAt(0)) {
                                    for(; "`" !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length)););
                                    var u = t.substring(0, e), l = t.substring(u.length + 1, e + i), c = t.substring(e + i + 1);
                                    t = u + l + c, i--;
                                }
                                s.timeout = setTimeout(function() {
                                    s.toggleBlinking(!1), e >= t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s));
                                }, n);
                            }, n2));
                        }
                    },
                    {
                        key: "keepTyping",
                        value: function(t, e, s) {
                            0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
                            var n = t.substr(0, e);
                            this.replaceText(n), this.typewrite(t, e);
                        }
                    },
                    {
                        key: "doneTyping",
                        value: function(t, e) {
                            var s = this;
                            this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                                s.backspace(t, e);
                            }, this.backDelay));
                        }
                    },
                    {
                        key: "backspace",
                        value: function(t, e) {
                            var s = this;
                            if (this.pause.status === !0) return void this.setPauseStatus(t, e, !1);
                            if (this.fadeOut) return this.initFadeOut();
                            this.toggleBlinking(!1);
                            var n3 = this.humanizer(this.backSpeed);
                            this.timeout = setTimeout(function() {
                                e = o.htmlParser.backSpaceHtmlChars(t, e, s);
                                var n = t.substr(0, e);
                                if (s.replaceText(n), s.smartBackspace) {
                                    var i = s.strings[s.arrayPos + 1];
                                    i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0;
                                }
                                e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
                            }, n3);
                        }
                    },
                    {
                        key: "complete",
                        value: function() {
                            this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
                        }
                    },
                    {
                        key: "setPauseStatus",
                        value: function(t, e, s) {
                            this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e;
                        }
                    },
                    {
                        key: "toggleBlinking",
                        value: function(t) {
                            this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
                        }
                    },
                    {
                        key: "humanizer",
                        value: function(t) {
                            return Math.round(Math.random() * t / 2) + t;
                        }
                    },
                    {
                        key: "shuffleStringsIfNeeded",
                        value: function() {
                            this.shuffle && (this.sequence = this.sequence.sort(function() {
                                return Math.random() - .5;
                            }));
                        }
                    },
                    {
                        key: "initFadeOut",
                        value: function() {
                            var t = this;
                            return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                                t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
                            }, this.fadeOutDelay);
                        }
                    },
                    {
                        key: "replaceText",
                        value: function(t) {
                            this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
                        }
                    },
                    {
                        key: "bindFocusEvents",
                        value: function() {
                            var t = this;
                            this.isInput && (this.el.addEventListener("focus", function(e) {
                                t.stop();
                            }), this.el.addEventListener("blur", function(e) {
                                t.el.value && 0 !== t.el.value.length || t.start();
                            }));
                        }
                    },
                    {
                        key: "insertCursor",
                        value: function() {
                            this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
                        }
                    }
                ]), t3;
            }();
            e1["default"] = a1, t1.exports = e1["default"];
        },
        function(t4, e2, s2) {
            "use strict";
            function n4(t) {
                return t && t.__esModule ? t : {
                    "default": t
                };
            }
            function i2(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(e2, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(t) {
                for(var e = 1; e < arguments.length; e++){
                    var s = arguments[e];
                    for(var n in s)Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
                }
                return t;
            }, o1 = function() {
                function t5(t, e) {
                    for(var s = 0; s < e.length; s++){
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }
                return function(e, s, n) {
                    return s && t5(e.prototype, s), n && t5(e, n), e;
                };
            }(), a2 = s2(2), u = n4(a2), l = function() {
                function t6() {
                    i2(this, t6);
                }
                return o1(t6, [
                    {
                        key: "load",
                        value: function(t7, e, s) {
                            if ("string" == typeof s ? t7.el = document.querySelector(s) : t7.el = s, t7.options = r({}, u["default"], e), t7.isInput = "input" === t7.el.tagName.toLowerCase(), t7.attr = t7.options.attr, t7.bindInputFocusEvents = t7.options.bindInputFocusEvents, t7.showCursor = !t7.isInput && t7.options.showCursor, t7.cursorChar = t7.options.cursorChar, t7.cursorBlinking = !0, t7.elContent = t7.attr ? t7.el.getAttribute(t7.attr) : t7.el.textContent, t7.contentType = t7.options.contentType, t7.typeSpeed = t7.options.typeSpeed, t7.startDelay = t7.options.startDelay, t7.backSpeed = t7.options.backSpeed, t7.smartBackspace = t7.options.smartBackspace, t7.backDelay = t7.options.backDelay, t7.fadeOut = t7.options.fadeOut, t7.fadeOutClass = t7.options.fadeOutClass, t7.fadeOutDelay = t7.options.fadeOutDelay, t7.isPaused = !1, t7.strings = t7.options.strings.map(function(t) {
                                return t.trim();
                            }), "string" == typeof t7.options.stringsElement ? t7.stringsElement = document.querySelector(t7.options.stringsElement) : t7.stringsElement = t7.options.stringsElement, t7.stringsElement) {
                                t7.strings = [], t7.stringsElement.style.display = "none";
                                var n = Array.prototype.slice.apply(t7.stringsElement.children), i = n.length;
                                if (i) for(var o = 0; o < i; o += 1){
                                    var a = n[o];
                                    t7.strings.push(a.innerHTML.trim());
                                }
                            }
                            t7.strPos = 0, t7.arrayPos = 0, t7.stopNum = 0, t7.loop = t7.options.loop, t7.loopCount = t7.options.loopCount, t7.curLoop = 0, t7.shuffle = t7.options.shuffle, t7.sequence = [], t7.pause = {
                                status: !1,
                                typewrite: !0,
                                curString: "",
                                curStrPos: 0
                            }, t7.typingComplete = !1;
                            for(var o in t7.strings)t7.sequence[o] = o;
                            t7.currentElContent = this.getCurrentElContent(t7), t7.autoInsertCss = t7.options.autoInsertCss, this.appendAnimationCss(t7);
                        }
                    },
                    {
                        key: "getCurrentElContent",
                        value: function(t) {
                            var e = "";
                            return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
                        }
                    },
                    {
                        key: "appendAnimationCss",
                        value: function(t) {
                            var e = "data-typed-js-css";
                            if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                                var s = document.createElement("style");
                                s.type = "text/css", s.setAttribute(e, !0);
                                var n = "";
                                t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s));
                            }
                        }
                    }
                ]), t6;
            }();
            e2["default"] = l;
            var c = new l;
            e2.initializer = c;
        },
        function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = {
                strings: [
                    "These are the default values...",
                    "You know what you should do?",
                    "Use your own!",
                    "Have a great day!"
                ],
                stringsElement: null,
                typeSpeed: 0,
                startDelay: 0,
                backSpeed: 0,
                smartBackspace: !0,
                shuffle: !1,
                backDelay: 700,
                fadeOut: !1,
                fadeOutClass: "typed-fade-out",
                fadeOutDelay: 500,
                loop: !1,
                loopCount: 1 / 0,
                showCursor: !0,
                cursorChar: "|",
                autoInsertCss: !0,
                attr: null,
                bindInputFocusEvents: !1,
                contentType: "html",
                onBegin: function(t) {},
                onComplete: function(t) {},
                preStringTyped: function(t, e) {},
                onStringTyped: function(t, e) {},
                onLastStringBackspaced: function(t) {},
                onTypingPaused: function(t, e) {},
                onTypingResumed: function(t, e) {},
                onReset: function(t) {},
                onStop: function(t, e) {},
                onStart: function(t, e) {},
                onDestroy: function(t) {}
            };
            e["default"] = s, t.exports = e["default"];
        },
        function(t8, e3) {
            "use strict";
            function s3(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(e3, "__esModule", {
                value: !0
            });
            var n5 = function() {
                function t9(t, e) {
                    for(var s = 0; s < e.length; s++){
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }
                return function(e, s, n) {
                    return s && t9(e.prototype, s), n && t9(e, n), e;
                };
            }(), i3 = function() {
                function t10() {
                    s3(this, t10);
                }
                return n5(t10, [
                    {
                        key: "typeHtmlChars",
                        value: function(t, e, s) {
                            if ("html" !== s.contentType) return e;
                            var n = t.substr(e).charAt(0);
                            if ("<" === n || "&" === n) {
                                var i = "";
                                for(i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++, !(e + 1 > t.length)););
                                e++;
                            }
                            return e;
                        }
                    },
                    {
                        key: "backSpaceHtmlChars",
                        value: function(t, e, s) {
                            if ("html" !== s.contentType) return e;
                            var n = t.substr(e).charAt(0);
                            if (">" === n || ";" === n) {
                                var i = "";
                                for(i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0)););
                                e--;
                            }
                            return e;
                        }
                    }
                ]), t10;
            }();
            e3["default"] = i3;
            var r = new i3;
            e3.htmlParser = r;
        }
    ]);
});

//# sourceMappingURL=contact.b5857e51.js.map
