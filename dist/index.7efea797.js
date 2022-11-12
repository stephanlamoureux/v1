// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

;(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {}
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' && globalObject[parcelRequireName]

  var cache = previousRequire.cache || {}
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module)

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' && globalObject[parcelRequireName]
        if (!jumped && currentRequire) {
          return currentRequire(name, true)
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true)
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name)
        }

        var err = new Error("Cannot find module '" + name + "'")
        err.code = 'MODULE_NOT_FOUND'
        throw err
      }

      localRequire.resolve = resolve
      localRequire.cache = {}

      var module = (cache[name] = new newRequire.Module(name))

      modules[name][0].call(module.exports, localRequire, module, module.exports, this)
    }

    return cache[name].exports

    function localRequire(x) {
      var res = localRequire.resolve(x)
      return res === false ? {} : newRequire(res)
    }

    function resolve(x) {
      var id = modules[name][1][x]
      return id != null ? id : x
    }
  }

  function Module(moduleName) {
    this.id = moduleName
    this.bundle = newRequire
    this.exports = {}
  }

  newRequire.isParcelRequire = true
  newRequire.Module = Module
  newRequire.modules = modules
  newRequire.cache = cache
  newRequire.parent = previousRequire
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports
      },
      {},
    ]
  }

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName]
    },
  })

  globalObject[parcelRequireName] = newRequire

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i])
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry)

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports
      })

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports
    }
  }
})(
  {
    '1uCsm': [
      function (require, module, exports) {
        'use strict'
        var global = arguments[3]
        var HMR_HOST = null
        var HMR_PORT = null
        var HMR_SECURE = false
        var HMR_ENV_HASH = 'd6ea1d42532a7575'
        module.bundle.HMR_BUNDLE_ID = 'b2b2939b7efea797'
        /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__'
        var OldModule = module.bundle.Module
        function Module(moduleName) {
          OldModule.call(this, moduleName)
          this.hot = {
            data: module.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function (fn) {
              this._acceptCallbacks.push(fn || function () {})
            },
            dispose: function (fn) {
              this._disposeCallbacks.push(fn)
            },
          }
          module.bundle.hotData = undefined
        }
        module.bundle.Module = Module
        var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */
        function getHostname() {
          return (
            HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost')
          )
        }
        function getPort() {
          return HMR_PORT || location.port
        } // eslint-disable-next-line no-redeclare
        var parent = module.bundle.parent
        if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
          var hostname = getHostname()
          var port = getPort()
          var protocol =
            HMR_SECURE ||
            (location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname))
              ? 'wss'
              : 'ws'
          var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/') // Web extension context
          var extCtx =
            typeof chrome === 'undefined'
              ? typeof browser === 'undefined'
                ? null
                : browser
              : chrome // Safari doesn't support sourceURL in error stacks.
          // eval may also be disabled via CSP, so do a quick check.
          var supportsSourceURL = false
          try {
            ;(0, eval)('throw new Error("test"); //# sourceURL=test.js')
          } catch (err) {
            supportsSourceURL = err.stack.includes('test.js')
          } // $FlowFixMe
          ws.onmessage = async function (event) {
            checkedAssets = {} /*: {|[string]: boolean|} */
            acceptedAssets = {} /*: {|[string]: boolean|} */
            assetsToAccept = []
            var data = JSON.parse(event.data)
            if (data.type === 'update') {
              // Remove error overlay if there is one
              if (typeof document !== 'undefined') removeErrorOverlay()
              let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH) // Handle HMR Update
              let handled = assets.every(asset => {
                return (
                  asset.type === 'css' ||
                  (asset.type === 'js' &&
                    hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle))
                )
              })
              if (handled) {
                console.clear() // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined')
                  window.dispatchEvent(new CustomEvent('parcelhmraccept'))
                await hmrApplyUpdates(assets)
                for (var i = 0; i < assetsToAccept.length; i++) {
                  var id = assetsToAccept[i][1]
                  if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id)
                }
              } else fullReload()
            }
            if (data.type === 'error') {
              // Log parcel errors to console
              for (let ansiDiagnostic of data.diagnostics.ansi) {
                let stack = ansiDiagnostic.codeframe
                  ? ansiDiagnostic.codeframe
                  : ansiDiagnostic.stack
                console.error(
                  '\uD83D\uDEA8 [parcel]: ' +
                    ansiDiagnostic.message +
                    '\n' +
                    stack +
                    '\n\n' +
                    ansiDiagnostic.hints.join('\n')
                )
              }
              if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay()
                var overlay = createErrorOverlay(data.diagnostics.html) // $FlowFixMe
                document.body.appendChild(overlay)
              }
            }
          }
          ws.onerror = function (e) {
            console.error(e.message)
          }
          ws.onclose = function () {
            console.warn('[parcel] \uD83D\uDEA8 Connection to the HMR server was lost')
          }
        }
        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID)
          if (overlay) {
            overlay.remove()
            console.log('[parcel] \u2728 Error resolved')
          }
        }
        function createErrorOverlay(diagnostics) {
          var overlay = document.createElement('div')
          overlay.id = OVERLAY_ID
          let errorHTML =
            '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">'
          for (let diagnostic of diagnostics) {
            let stack = diagnostic.frames.length
              ? diagnostic.frames.reduce((p, frame) => {
                  return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(
                    frame.location
                  )}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${
                    frame.location
                  }</a>
${frame.code}`
                }, '')
              : diagnostic.stack
            errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>\uD83D\uDCA1 ' + hint + '</div>').join('')}
        </div>
        ${
          diagnostic.documentation
            ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>`
            : ''
        }
      </div>
    `
          }
          errorHTML += '</div>'
          overlay.innerHTML = errorHTML
          return overlay
        }
        function fullReload() {
          if ('reload' in location) location.reload()
          else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload()
        }
        function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
          var modules = bundle.modules
          if (!modules) return []
          var parents = []
          var k, d, dep
          for (k in modules)
            for (d in modules[k][1]) {
              dep = modules[k][1][d]
              if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id))
                parents.push([bundle, k])
            }
          if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id))
          return parents
        }
        function updateLink(link) {
          var newLink = link.cloneNode()
          newLink.onload = function () {
            if (link.parentNode !== null)
              // $FlowFixMe
              link.parentNode.removeChild(link)
          }
          newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()) // $FlowFixMe
          link.parentNode.insertBefore(newLink, link.nextSibling)
        }
        var cssTimeout = null
        function reloadCSS() {
          if (cssTimeout) return
          cssTimeout = setTimeout(function () {
            var links = document.querySelectorAll('link[rel="stylesheet"]')
            for (var i = 0; i < links.length; i++) {
              // $FlowFixMe[incompatible-type]
              var href = links[i].getAttribute('href')
              var hostname = getHostname()
              var servedFromHMRServer =
                hostname === 'localhost'
                  ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(
                      href
                    )
                  : href.indexOf(hostname + ':' + getPort())
              var absolute =
                /^https?:\/\//i.test(href) &&
                href.indexOf(location.origin) !== 0 &&
                !servedFromHMRServer
              if (!absolute) updateLink(links[i])
            }
            cssTimeout = null
          }, 50)
        }
        function hmrDownload(asset) {
          if (asset.type === 'js') {
            if (typeof document !== 'undefined') {
              let script = document.createElement('script')
              script.src = asset.url + '?t=' + Date.now()
              if (asset.outputFormat === 'esmodule') script.type = 'module'
              return new Promise((resolve, reject) => {
                var _document$head
                script.onload = () => resolve(script)
                script.onerror = reject
                ;(_document$head = document.head) === null ||
                  _document$head === void 0 ||
                  _document$head.appendChild(script)
              })
            } else if (typeof importScripts === 'function') {
              // Worker scripts
              if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now())
              else
                return new Promise((resolve, reject) => {
                  try {
                    importScripts(asset.url + '?t=' + Date.now())
                    resolve()
                  } catch (err) {
                    reject(err)
                  }
                })
            }
          }
        }
        async function hmrApplyUpdates(assets) {
          global.parcelHotUpdate = Object.create(null)
          let scriptsToRemove
          try {
            // If sourceURL comments aren't supported in eval, we need to load
            // the update from the dev server over HTTP so that stack traces
            // are correct in errors/logs. This is much slower than eval, so
            // we only do it if needed (currently just Safari).
            // https://bugs.webkit.org/show_bug.cgi?id=137297
            // This path is also taken if a CSP disallows eval.
            if (!supportsSourceURL) {
              let promises = assets.map(asset => {
                var _hmrDownload
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0
                  ? void 0
                  : _hmrDownload.catch(err => {
                      // Web extension bugfix for Chromium
                      // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                      if (
                        extCtx &&
                        extCtx.runtime &&
                        extCtx.runtime.getManifest().manifest_version == 3
                      ) {
                        if (
                          typeof ServiceWorkerGlobalScope != 'undefined' &&
                          global instanceof ServiceWorkerGlobalScope
                        ) {
                          extCtx.runtime.reload()
                          return
                        }
                        asset.url = extCtx.runtime.getURL(
                          '/__parcel_hmr_proxy__?url=' +
                            encodeURIComponent(asset.url + '?t=' + Date.now())
                        )
                        return hmrDownload(asset)
                      }
                      throw err
                    })
              })
              scriptsToRemove = await Promise.all(promises)
            }
            assets.forEach(function (asset) {
              hmrApply(module.bundle.root, asset)
            })
          } finally {
            delete global.parcelHotUpdate
            if (scriptsToRemove)
              scriptsToRemove.forEach(script => {
                if (script) {
                  var _document$head2
                  ;(_document$head2 = document.head) === null ||
                    _document$head2 === void 0 ||
                    _document$head2.removeChild(script)
                }
              })
          }
        }
        function hmrApply(bundle, asset) {
          var modules = bundle.modules
          if (!modules) return
          if (asset.type === 'css') reloadCSS()
          else if (asset.type === 'js') {
            let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID]
            if (deps) {
              if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1]
                for (let dep in oldDeps)
                  if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep]
                    let parents = getParents(module.bundle.root, id)
                    if (parents.length === 1) hmrDelete(module.bundle.root, id)
                  }
              }
              if (supportsSourceURL)
                // Global eval. We would use `new Function` here but browser
                // support for source maps is better with eval.
                (0, eval)(asset.output)
              // $FlowFixMe
              let fn = global.parcelHotUpdate[asset.id]
              modules[asset.id] = [fn, deps]
            } else if (bundle.parent) hmrApply(bundle.parent, asset)
          }
        }
        function hmrDelete(bundle, id1) {
          let modules = bundle.modules
          if (!modules) return
          if (modules[id1]) {
            // Collect dependencies that will become orphaned when this module is deleted.
            let deps = modules[id1][1]
            let orphans = []
            for (let dep in deps) {
              let parents = getParents(module.bundle.root, deps[dep])
              if (parents.length === 1) orphans.push(deps[dep])
            } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
            delete modules[id1]
            delete bundle.cache[id1] // Now delete the orphans.
            orphans.forEach(id => {
              hmrDelete(module.bundle.root, id)
            })
          } else if (bundle.parent) hmrDelete(bundle.parent, id1)
        }
        function hmrAcceptCheck(bundle, id, depsByBundle) {
          if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true
          // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
          let parents = getParents(module.bundle.root, id)
          let accepted = false
          while (parents.length > 0) {
            let v = parents.shift()
            let a = hmrAcceptCheckOne(v[0], v[1], null)
            if (a)
              // If this parent accepts, stop traversing upward, but still consider siblings.
              accepted = true
            else {
              // Otherwise, queue the parents in the next level upward.
              let p = getParents(module.bundle.root, v[1])
              if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false
                break
              }
              parents.push(...p)
            }
          }
          return accepted
        }
        function hmrAcceptCheckOne(bundle, id, depsByBundle) {
          var modules = bundle.modules
          if (!modules) return
          if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
            // If we reached the root bundle without finding where the asset should go,
            // there's nothing to do. Mark as "accepted" so we don't reload the page.
            if (!bundle.parent) return true
            return hmrAcceptCheck(bundle.parent, id, depsByBundle)
          }
          if (checkedAssets[id]) return true
          checkedAssets[id] = true
          var cached = bundle.cache[id]
          assetsToAccept.push([bundle, id])
          if (!cached || (cached.hot && cached.hot._acceptCallbacks.length)) return true
        }
        function hmrAcceptRun(bundle, id) {
          var cached = bundle.cache[id]
          bundle.hotData = {}
          if (cached && cached.hot) cached.hot.data = bundle.hotData
          if (cached && cached.hot && cached.hot._disposeCallbacks.length)
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData)
            })
          delete bundle.cache[id]
          bundle(id)
          cached = bundle.cache[id]
          if (cached && cached.hot && cached.hot._acceptCallbacks.length)
            cached.hot._acceptCallbacks.forEach(function (cb) {
              var assetsToAlsoAccept = cb(function () {
                return getParents(module.bundle.root, id)
              })
              if (assetsToAlsoAccept && assetsToAccept.length)
                // $FlowFixMe[method-unbinding]
                assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept)
            })
          acceptedAssets[id] = true
        }
      },
      {},
    ],
    lN05r: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        var _tippyJs = require('tippy.js')
        var _tippyJsDefault = parcelHelpers.interopDefault(_tippyJs)
        var _tippyCss = require('tippy.js/dist/tippy.css')
        var _scaleExtremeCss = require('tippy.js/animations/scale-extreme.css')
        var _borderCss = require('tippy.js/dist/border.css')
        var _svgArrowCss = require('tippy.js/dist/svg-arrow.css')
        ;(0, _tippyJsDefault.default)('#tippy', {
          content: 'Hire Me!',
          delay: [175, null],
          inertia: true,
          offset: [0, 15],
          animation: 'scale-extreme',
          theme: 'gradient',
          arrow: (0, _tippyJs.roundArrow),
          touch: false,
        })
      },
      {
        'tippy.js': 'ccpCS',
        'tippy.js/dist/tippy.css': '2hEyg',
        'tippy.js/animations/scale-extreme.css': 'fYEd8',
        'tippy.js/dist/border.css': 'lIqzD',
        'tippy.js/dist/svg-arrow.css': '9LNWv',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    ccpCS: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        parcelHelpers.export(exports, 'animateFill', () => animateFill)
        parcelHelpers.export(exports, 'createSingleton', () => createSingleton)
        parcelHelpers.export(exports, 'delegate', () => delegate)
        parcelHelpers.export(exports, 'followCursor', () => followCursor)
        parcelHelpers.export(exports, 'hideAll', () => hideAll)
        parcelHelpers.export(exports, 'inlinePositioning', () => inlinePositioning)
        parcelHelpers.export(exports, 'roundArrow', () => ROUND_ARROW)
        parcelHelpers.export(exports, 'sticky', () => sticky)
        /**!
         * tippy.js v6.3.7
         * (c) 2017-2021 atomiks
         * MIT License
         */ var _core = require('@popperjs/core')
        var ROUND_ARROW =
          '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>'
        var BOX_CLASS = 'tippy-box'
        var CONTENT_CLASS = 'tippy-content'
        var BACKDROP_CLASS = 'tippy-backdrop'
        var ARROW_CLASS = 'tippy-arrow'
        var SVG_ARROW_CLASS = 'tippy-svg-arrow'
        var TOUCH_OPTIONS = {
          passive: true,
          capture: true,
        }
        var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
          return document.body
        }
        function hasOwnProperty(obj, key) {
          return {}.hasOwnProperty.call(obj, key)
        }
        function getValueAtIndexOrReturn(value, index, defaultValue) {
          if (Array.isArray(value)) {
            var v = value[index]
            return v == null
              ? Array.isArray(defaultValue)
                ? defaultValue[index]
                : defaultValue
              : v
          }
          return value
        }
        function isType(value, type) {
          var str = {}.toString.call(value)
          return str.indexOf('[object') === 0 && str.indexOf(type + ']') > -1
        }
        function invokeWithArgsOrReturn(value, args) {
          return typeof value === 'function' ? value.apply(void 0, args) : value
        }
        function debounce(fn, ms) {
          // Avoid wrapping in `setTimeout` if ms is 0 anyway
          if (ms === 0) return fn
          var timeout
          return function (arg) {
            clearTimeout(timeout)
            timeout = setTimeout(function () {
              fn(arg)
            }, ms)
          }
        }
        function removeProperties(obj, keys) {
          var clone = Object.assign({}, obj)
          keys.forEach(function (key) {
            delete clone[key]
          })
          return clone
        }
        function splitBySpaces(value) {
          return value.split(/\s+/).filter(Boolean)
        }
        function normalizeToArray(value) {
          return [].concat(value)
        }
        function pushIfUnique(arr, value) {
          if (arr.indexOf(value) === -1) arr.push(value)
        }
        function unique(arr) {
          return arr.filter(function (item, index) {
            return arr.indexOf(item) === index
          })
        }
        function getBasePlacement(placement) {
          return placement.split('-')[0]
        }
        function arrayFrom(value) {
          return [].slice.call(value)
        }
        function removeUndefinedProps(obj) {
          return Object.keys(obj).reduce(function (acc, key) {
            if (obj[key] !== undefined) acc[key] = obj[key]
            return acc
          }, {})
        }
        function div() {
          return document.createElement('div')
        }
        function isElement(value) {
          return ['Element', 'Fragment'].some(function (type) {
            return isType(value, type)
          })
        }
        function isNodeList(value) {
          return isType(value, 'NodeList')
        }
        function isMouseEvent(value) {
          return isType(value, 'MouseEvent')
        }
        function isReferenceElement(value) {
          return !!(value && value._tippy && value._tippy.reference === value)
        }
        function getArrayOfElements(value) {
          if (isElement(value)) return [value]
          if (isNodeList(value)) return arrayFrom(value)
          if (Array.isArray(value)) return value
          return arrayFrom(document.querySelectorAll(value))
        }
        function setTransitionDuration(els, value) {
          els.forEach(function (el) {
            if (el) el.style.transitionDuration = value + 'ms'
          })
        }
        function setVisibilityState(els, state) {
          els.forEach(function (el) {
            if (el) el.setAttribute('data-state', state)
          })
        }
        function getOwnerDocument(elementOrElements) {
          var _element$ownerDocumen
          var _normalizeToArray = normalizeToArray(elementOrElements),
            element = _normalizeToArray[0] // Elements created via a <template> have an ownerDocument with no reference to the body
          return element != null &&
            (_element$ownerDocumen = element.ownerDocument) != null &&
            _element$ownerDocumen.body
            ? element.ownerDocument
            : document
        }
        function isCursorOutsideInteractiveBorder(popperTreeData, event) {
          var clientX = event.clientX,
            clientY = event.clientY
          return popperTreeData.every(function (_ref) {
            var popperRect = _ref.popperRect,
              popperState = _ref.popperState,
              props = _ref.props
            var interactiveBorder = props.interactiveBorder
            var basePlacement = getBasePlacement(popperState.placement)
            var offsetData = popperState.modifiersData.offset
            if (!offsetData) return true
            var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0
            var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0
            var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0
            var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0
            var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder
            var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder
            var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder
            var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder
            return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight
          })
        }
        function updateTransitionEndListener(box, action, listener) {
          var method = action + 'EventListener' // some browsers apparently support `transition` (unprefixed) but only fire
          // `webkitTransitionEnd`...
          ;['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
            box[method](event, listener)
          })
        }
        /**
         * Compared to xxx.contains, this function works for dom structures with shadow
         * dom
         */ function actualContains(parent, child) {
          var target = child
          while (target) {
            var _target$getRootNode
            if (parent.contains(target)) return true
            target =
              target.getRootNode == null
                ? void 0
                : (_target$getRootNode = target.getRootNode()) == null
                ? void 0
                : _target$getRootNode.host
          }
          return false
        }
        var currentInput = {
          isTouch: false,
        }
        var lastMouseMoveTime = 0
        /**
         * When a `touchstart` event is fired, it's assumed the user is using touch
         * input. We'll bind a `mousemove` event listener to listen for mouse input in
         * the future. This way, the `isTouch` property is fully dynamic and will handle
         * hybrid devices that use a mix of touch + mouse input.
         */ function onDocumentTouchStart() {
          if (currentInput.isTouch) return
          currentInput.isTouch = true
          if (window.performance) document.addEventListener('mousemove', onDocumentMouseMove)
        }
        /**
         * When two `mousemove` event are fired consecutively within 20ms, it's assumed
         * the user is using mouse input again. `mousemove` can fire on touch devices as
         * well, but very rarely that quickly.
         */ function onDocumentMouseMove() {
          var now = performance.now()
          if (now - lastMouseMoveTime < 20) {
            currentInput.isTouch = false
            document.removeEventListener('mousemove', onDocumentMouseMove)
          }
          lastMouseMoveTime = now
        }
        /**
         * When an element is in focus and has a tippy, leaving the tab/window and
         * returning causes it to show again. For mouse users this is unexpected, but
         * for keyboard use it makes sense.
         * TODO: find a better technique to solve this problem
         */ function onWindowBlur() {
          var activeElement = document.activeElement
          if (isReferenceElement(activeElement)) {
            var instance = activeElement._tippy
            if (activeElement.blur && !instance.state.isVisible) activeElement.blur()
          }
        }
        function bindGlobalEventListeners() {
          document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS)
          window.addEventListener('blur', onWindowBlur)
        }
        var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'
        var isIE11 = isBrowser ? !!window.msCrypto : false
        function createMemoryLeakWarning(method) {
          var txt = method === 'destroy' ? 'n already-' : ' '
          return [
            method + '() was called on a' + txt + 'destroyed instance. This is a no-op but',
            'indicates a potential memory leak.',
          ].join(' ')
        }
        function clean(value) {
          var spacesAndTabs = /[ \t]{2,}/g
          var lineStartWithSpaces = /^[ \t]*/gm
          return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim()
        }
        function getDevMessage(message) {
          return clean(
            '\n  %ctippy.js\n\n  %c' +
              clean(message) +
              '\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  '
          )
        }
        function getFormattedMessage(message) {
          return [
            getDevMessage(message),
            'color: #00C584; font-size: 1.3em; font-weight: bold;',
            'line-height: 1.5',
            'color: #a6a095;',
          ]
        } // Assume warnings and errors never have the same message
        var visitedMessages
        resetVisitedMessages()
        function resetVisitedMessages() {
          visitedMessages = new Set()
        }
        function warnWhen(condition, message) {
          if (condition && !visitedMessages.has(message)) {
            var _console
            visitedMessages.add(message)
            ;(_console = console).warn.apply(_console, getFormattedMessage(message))
          }
        }
        function errorWhen(condition, message) {
          if (condition && !visitedMessages.has(message)) {
            var _console2
            visitedMessages.add(message)
            ;(_console2 = console).error.apply(_console2, getFormattedMessage(message))
          }
        }
        function validateTargets(targets) {
          var didPassFalsyValue = !targets
          var didPassPlainObject =
            Object.prototype.toString.call(targets) === '[object Object]' &&
            !targets.addEventListener
          errorWhen(
            didPassFalsyValue,
            [
              'tippy() was passed',
              '`' + String(targets) + '`',
              'as its targets (first) argument. Valid types are: String, Element,',
              'Element[], or NodeList.',
            ].join(' ')
          )
          errorWhen(
            didPassPlainObject,
            [
              'tippy() was passed a plain object which is not supported as an argument',
              'for virtual positioning. Use props.getReferenceClientRect instead.',
            ].join(' ')
          )
        }
        var pluginProps = {
          animateFill: false,
          followCursor: false,
          inlinePositioning: false,
          sticky: false,
        }
        var renderProps = {
          allowHTML: false,
          animation: 'fade',
          arrow: true,
          content: '',
          inertia: false,
          maxWidth: 350,
          role: 'tooltip',
          theme: '',
          zIndex: 9999,
        }
        var defaultProps = Object.assign(
          {
            appendTo: TIPPY_DEFAULT_APPEND_TO,
            aria: {
              content: 'auto',
              expanded: 'auto',
            },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: true,
            ignoreAttributes: false,
            interactive: false,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: '',
            offset: [0, 10],
            onAfterUpdate: function onAfterUpdate() {},
            onBeforeUpdate: function onBeforeUpdate() {},
            onCreate: function onCreate() {},
            onDestroy: function onDestroy() {},
            onHidden: function onHidden() {},
            onHide: function onHide() {},
            onMount: function onMount() {},
            onShow: function onShow() {},
            onShown: function onShown() {},
            onTrigger: function onTrigger() {},
            onUntrigger: function onUntrigger() {},
            onClickOutside: function onClickOutside() {},
            placement: 'top',
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: false,
            touch: true,
            trigger: 'mouseenter focus',
            triggerTarget: null,
          },
          pluginProps,
          renderProps
        )
        var defaultKeys = Object.keys(defaultProps)
        var setDefaultProps = function setDefaultProps(partialProps) {
          validateProps(partialProps, [])
          var keys = Object.keys(partialProps)
          keys.forEach(function (key) {
            defaultProps[key] = partialProps[key]
          })
        }
        function getExtendedPassedProps(passedProps) {
          var plugins = passedProps.plugins || []
          var pluginProps1 = plugins.reduce(function (acc, plugin) {
            var name = plugin.name,
              defaultValue = plugin.defaultValue
            if (name) {
              var _name
              acc[name] =
                passedProps[name] !== undefined
                  ? passedProps[name]
                  : (_name = defaultProps[name]) != null
                  ? _name
                  : defaultValue
            }
            return acc
          }, {})
          return Object.assign({}, passedProps, pluginProps1)
        }
        function getDataAttributeProps(reference, plugins) {
          var propKeys = plugins
            ? Object.keys(
                getExtendedPassedProps(
                  Object.assign({}, defaultProps, {
                    plugins: plugins,
                  })
                )
              )
            : defaultKeys
          var props = propKeys.reduce(function (acc, key) {
            var valueAsString = (reference.getAttribute('data-tippy-' + key) || '').trim()
            if (!valueAsString) return acc
            if (key === 'content') acc[key] = valueAsString
            else
              try {
                acc[key] = JSON.parse(valueAsString)
              } catch (e) {
                acc[key] = valueAsString
              }
            return acc
          }, {})
          return props
        }
        function evaluateProps(reference, props) {
          var out = Object.assign(
            {},
            props,
            {
              content: invokeWithArgsOrReturn(props.content, [reference]),
            },
            props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins)
          )
          out.aria = Object.assign({}, defaultProps.aria, out.aria)
          out.aria = {
            expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
            content:
              out.aria.content === 'auto'
                ? props.interactive
                  ? null
                  : 'describedby'
                : out.aria.content,
          }
          return out
        }
        function validateProps(partialProps, plugins) {
          if (partialProps === void 0) partialProps = {}
          if (plugins === void 0) plugins = []
          var keys = Object.keys(partialProps)
          keys.forEach(function (prop) {
            var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps))
            var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop) // Check if the prop exists in `plugins`
            if (didPassUnknownProp)
              didPassUnknownProp =
                plugins.filter(function (plugin) {
                  return plugin.name === prop
                }).length === 0
            warnWhen(
              didPassUnknownProp,
              [
                '`' + prop + '`',
                "is not a valid prop. You may have spelled it incorrectly, or if it's",
                'a plugin, forgot to pass it in an array as props.plugins.',
                '\n\n',
                'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n',
                'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/',
              ].join(' ')
            )
          })
        }
        var innerHTML = function innerHTML() {
          return 'innerHTML'
        }
        function dangerouslySetInnerHTML(element, html) {
          element[innerHTML()] = html
        }
        function createArrowElement(value) {
          var arrow = div()
          if (value === true) arrow.className = ARROW_CLASS
          else {
            arrow.className = SVG_ARROW_CLASS
            if (isElement(value)) arrow.appendChild(value)
            else dangerouslySetInnerHTML(arrow, value)
          }
          return arrow
        }
        function setContent(content, props) {
          if (isElement(props.content)) {
            dangerouslySetInnerHTML(content, '')
            content.appendChild(props.content)
          } else if (typeof props.content !== 'function') {
            if (props.allowHTML) dangerouslySetInnerHTML(content, props.content)
            else content.textContent = props.content
          }
        }
        function getChildren(popper) {
          var box = popper.firstElementChild
          var boxChildren = arrayFrom(box.children)
          return {
            box: box,
            content: boxChildren.find(function (node) {
              return node.classList.contains(CONTENT_CLASS)
            }),
            arrow: boxChildren.find(function (node) {
              return (
                node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS)
              )
            }),
            backdrop: boxChildren.find(function (node) {
              return node.classList.contains(BACKDROP_CLASS)
            }),
          }
        }
        function render(instance) {
          var popper = div()
          var box1 = div()
          box1.className = BOX_CLASS
          box1.setAttribute('data-state', 'hidden')
          box1.setAttribute('tabindex', '-1')
          var content1 = div()
          content1.className = CONTENT_CLASS
          content1.setAttribute('data-state', 'hidden')
          setContent(content1, instance.props)
          popper.appendChild(box1)
          box1.appendChild(content1)
          onUpdate(instance.props, instance.props)
          function onUpdate(prevProps, nextProps) {
            var _getChildren = getChildren(popper),
              box = _getChildren.box,
              content = _getChildren.content,
              arrow = _getChildren.arrow
            if (nextProps.theme) box.setAttribute('data-theme', nextProps.theme)
            else box.removeAttribute('data-theme')
            if (typeof nextProps.animation === 'string')
              box.setAttribute('data-animation', nextProps.animation)
            else box.removeAttribute('data-animation')
            if (nextProps.inertia) box.setAttribute('data-inertia', '')
            else box.removeAttribute('data-inertia')
            box.style.maxWidth =
              typeof nextProps.maxWidth === 'number'
                ? nextProps.maxWidth + 'px'
                : nextProps.maxWidth
            if (nextProps.role) box.setAttribute('role', nextProps.role)
            else box.removeAttribute('role')
            if (
              prevProps.content !== nextProps.content ||
              prevProps.allowHTML !== nextProps.allowHTML
            )
              setContent(content, instance.props)
            if (nextProps.arrow) {
              if (!arrow) box.appendChild(createArrowElement(nextProps.arrow))
              else if (prevProps.arrow !== nextProps.arrow) {
                box.removeChild(arrow)
                box.appendChild(createArrowElement(nextProps.arrow))
              }
            } else if (arrow) box.removeChild(arrow)
          }
          return {
            popper: popper,
            onUpdate: onUpdate,
          }
        } // Runtime check to identify if the render function is the default one; this
        // way we can apply default CSS transitions logic and it can be tree-shaken away
        render.$$tippy = true
        var idCounter = 1
        var mouseMoveListeners = [] // Used by `hideAll()`
        var mountedInstances = []
        function createTippy(reference, passedProps) {
          var props = evaluateProps(
            reference,
            Object.assign(
              {},
              defaultProps,
              getExtendedPassedProps(removeUndefinedProps(passedProps))
            )
          ) // ===========================================================================
          // 🔒 Private members
          // ===========================================================================
          var showTimeout
          var hideTimeout
          var scheduleHideAnimationFrame
          var isVisibleFromClick = false
          var didHideDueToDocumentMouseDown = false
          var didTouchMove = false
          var ignoreOnFirstUpdate = false
          var lastTriggerEvent
          var currentTransitionEndListener
          var onFirstUpdate
          var listeners = []
          var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce)
          var currentTarget // ===========================================================================
          // 🔑 Public members
          // ===========================================================================
          var id1 = idCounter++
          var popperInstance = null
          var plugins = unique(props.plugins)
          var state1 = {
            // Is the instance currently enabled?
            isEnabled: true,
            // Is the tippy currently showing and not transitioning out?
            isVisible: false,
            // Has the instance been destroyed?
            isDestroyed: false,
            // Is the tippy currently mounted to the DOM?
            isMounted: false,
            // Has the tippy finished transitioning in?
            isShown: false,
          }
          var instance1 = {
            // properties
            id: id1,
            reference: reference,
            popper: div(),
            popperInstance: popperInstance,
            props: props,
            state: state1,
            plugins: plugins,
            // methods
            clearDelayTimeouts: clearDelayTimeouts,
            setProps: setProps,
            setContent: setContent1,
            show: show,
            hide: hide,
            hideWithInteractivity: hideWithInteractivity,
            enable: enable,
            disable: disable,
            unmount: unmount,
            destroy: destroy,
          } // TODO: Investigate why this early return causes a TDZ error in the tests —
          // it doesn't seem to happen in the browser
          /* istanbul ignore if */ if (!props.render) {
            errorWhen(true, 'render() function has not been supplied.')
            return instance1
          } // ===========================================================================
          // Initial mutations
          // ===========================================================================
          var _props$render = props.render(instance1),
            popper1 = _props$render.popper,
            onUpdate = _props$render.onUpdate
          popper1.setAttribute('data-tippy-root', '')
          popper1.id = 'tippy-' + instance1.id
          instance1.popper = popper1
          reference._tippy = instance1
          popper1._tippy = instance1
          var pluginsHooks = plugins.map(function (plugin) {
            return plugin.fn(instance1)
          })
          var hasAriaExpanded = reference.hasAttribute('aria-expanded')
          addListeners()
          handleAriaExpandedAttribute()
          handleStyles()
          invokeHook('onCreate', [instance1])
          if (props.showOnCreate) scheduleShow()
          // Prevent a tippy with a delay from hiding if the cursor left then returned
          // before it started hiding
          popper1.addEventListener('mouseenter', function () {
            if (instance1.props.interactive && instance1.state.isVisible)
              instance1.clearDelayTimeouts()
          })
          popper1.addEventListener('mouseleave', function () {
            if (instance1.props.interactive && instance1.props.trigger.indexOf('mouseenter') >= 0)
              getDocument().addEventListener('mousemove', debouncedOnMouseMove)
          })
          return instance1 // ===========================================================================
          // 🔒 Private methods
          // ===========================================================================
          function getNormalizedTouchSettings() {
            var touch = instance1.props.touch
            return Array.isArray(touch) ? touch : [touch, 0]
          }
          function getIsCustomTouchBehavior() {
            return getNormalizedTouchSettings()[0] === 'hold'
          }
          function getIsDefaultRenderFn() {
            var _instance$props$rende
            // @ts-ignore
            return !!(
              (_instance$props$rende = instance1.props.render) != null &&
              _instance$props$rende.$$tippy
            )
          }
          function getCurrentTarget() {
            return currentTarget || reference
          }
          function getDocument() {
            var parent = getCurrentTarget().parentNode
            return parent ? getOwnerDocument(parent) : document
          }
          function getDefaultTemplateChildren() {
            return getChildren(popper1)
          }
          function getDelay(isShow) {
            // For touch or keyboard input, force `0` delay for UX reasons
            // Also if the instance is mounted but not visible (transitioning out),
            // ignore delay
            if (
              (instance1.state.isMounted && !instance1.state.isVisible) ||
              currentInput.isTouch ||
              (lastTriggerEvent && lastTriggerEvent.type === 'focus')
            ) {
              return 0
            }
            return getValueAtIndexOrReturn(
              instance1.props.delay,
              isShow ? 0 : 1,
              defaultProps.delay
            )
          }
          function handleStyles(fromHide) {
            if (fromHide === void 0) {
              fromHide = false
            }
            popper1.style.pointerEvents = instance1.props.interactive && !fromHide ? '' : 'none'
            popper1.style.zIndex = '' + instance1.props.zIndex
          }
          function invokeHook(hook, args, shouldInvokePropsHook) {
            if (shouldInvokePropsHook === void 0) {
              shouldInvokePropsHook = true
            }
            pluginsHooks.forEach(function (pluginHooks) {
              if (pluginHooks[hook]) {
                pluginHooks[hook].apply(pluginHooks, args)
              }
            })
            if (shouldInvokePropsHook) {
              var _instance$props
              ;(_instance$props = instance1.props)[hook].apply(_instance$props, args)
            }
          }
          function handleAriaContentAttribute() {
            var aria = instance1.props.aria
            if (!aria.content) {
              return
            }
            var attr = 'aria-' + aria.content
            var id = popper1.id
            var nodes = normalizeToArray(instance1.props.triggerTarget || reference)
            nodes.forEach(function (node) {
              var currentValue = node.getAttribute(attr)
              if (instance1.state.isVisible) {
                node.setAttribute(attr, currentValue ? currentValue + ' ' + id : id)
              } else {
                var nextValue = currentValue && currentValue.replace(id, '').trim()
                if (nextValue) {
                  node.setAttribute(attr, nextValue)
                } else {
                  node.removeAttribute(attr)
                }
              }
            })
          }
          function handleAriaExpandedAttribute() {
            if (hasAriaExpanded || !instance1.props.aria.expanded) {
              return
            }
            var nodes = normalizeToArray(instance1.props.triggerTarget || reference)
            nodes.forEach(function (node) {
              if (instance1.props.interactive) {
                node.setAttribute(
                  'aria-expanded',
                  instance1.state.isVisible && node === getCurrentTarget() ? 'true' : 'false'
                )
              } else {
                node.removeAttribute('aria-expanded')
              }
            })
          }
          function cleanupInteractiveMouseListeners() {
            getDocument().removeEventListener('mousemove', debouncedOnMouseMove)
            mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
              return listener !== debouncedOnMouseMove
            })
          }
          function onDocumentPress(event) {
            // Moved finger to scroll instead of an intentional tap outside
            if (currentInput.isTouch) {
              if (didTouchMove || event.type === 'mousedown') {
                return
              }
            }
            var actualTarget = (event.composedPath && event.composedPath()[0]) || event.target // Clicked on interactive popper
            if (instance1.props.interactive && actualContains(popper1, actualTarget)) {
              return
            } // Clicked on the event listeners target
            if (
              normalizeToArray(instance1.props.triggerTarget || reference).some(function (el) {
                return actualContains(el, actualTarget)
              })
            ) {
              if (currentInput.isTouch) {
                return
              }
              if (instance1.state.isVisible && instance1.props.trigger.indexOf('click') >= 0) {
                return
              }
            } else {
              invokeHook('onClickOutside', [instance1, event])
            }
            if (instance1.props.hideOnClick === true) {
              instance1.clearDelayTimeouts()
              instance1.hide() // `mousedown` event is fired right before `focus` if pressing the
              // currentTarget. This lets a tippy with `focus` trigger know that it
              // should not show
              didHideDueToDocumentMouseDown = true
              setTimeout(function () {
                didHideDueToDocumentMouseDown = false
              }) // The listener gets added in `scheduleShow()`, but this may be hiding it
              // before it shows, and hide()'s early bail-out behavior can prevent it
              // from being cleaned up
              if (!instance1.state.isMounted) {
                removeDocumentPress()
              }
            }
          }
          function onTouchMove() {
            didTouchMove = true
          }
          function onTouchStart() {
            didTouchMove = false
          }
          function addDocumentPress() {
            var doc = getDocument()
            doc.addEventListener('mousedown', onDocumentPress, true)
            doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS)
            doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS)
            doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS)
          }
          function removeDocumentPress() {
            var doc = getDocument()
            doc.removeEventListener('mousedown', onDocumentPress, true)
            doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS)
            doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS)
            doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS)
          }
          function onTransitionedOut(duration, callback) {
            onTransitionEnd(duration, function () {
              if (
                !instance1.state.isVisible &&
                popper1.parentNode &&
                popper1.parentNode.contains(popper1)
              ) {
                callback()
              }
            })
          }
          function onTransitionedIn(duration, callback) {
            onTransitionEnd(duration, callback)
          }
          function onTransitionEnd(duration, callback) {
            var box = getDefaultTemplateChildren().box
            function listener(event) {
              if (event.target === box) {
                updateTransitionEndListener(box, 'remove', listener)
                callback()
              }
            } // Make callback synchronous if duration is 0
            // `transitionend` won't fire otherwise
            if (duration === 0) {
              return callback()
            }
            updateTransitionEndListener(box, 'remove', currentTransitionEndListener)
            updateTransitionEndListener(box, 'add', listener)
            currentTransitionEndListener = listener
          }
          function on(eventType, handler, options) {
            if (options === void 0) {
              options = false
            }
            var nodes = normalizeToArray(instance1.props.triggerTarget || reference)
            nodes.forEach(function (node) {
              node.addEventListener(eventType, handler, options)
              listeners.push({
                node: node,
                eventType: eventType,
                handler: handler,
                options: options,
              })
            })
          }
          function addListeners() {
            if (getIsCustomTouchBehavior()) {
              on('touchstart', onTrigger, {
                passive: true,
              })
              on('touchend', onMouseLeave, {
                passive: true,
              })
            }
            splitBySpaces(instance1.props.trigger).forEach(function (eventType) {
              if (eventType === 'manual') {
                return
              }
              on(eventType, onTrigger)
              switch (eventType) {
                case 'mouseenter':
                  on('mouseleave', onMouseLeave)
                  break
                case 'focus':
                  on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut)
                  break
                case 'focusin':
                  on('focusout', onBlurOrFocusOut)
                  break
              }
            })
          }
          function removeListeners() {
            listeners.forEach(function (_ref) {
              var node = _ref.node,
                eventType = _ref.eventType,
                handler = _ref.handler,
                options = _ref.options
              node.removeEventListener(eventType, handler, options)
            })
            listeners = []
          }
          function onTrigger(event) {
            var _lastTriggerEvent
            var shouldScheduleClickHide = false
            if (
              !instance1.state.isEnabled ||
              isEventListenerStopped(event) ||
              didHideDueToDocumentMouseDown
            ) {
              return
            }
            var wasFocused =
              ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) ===
              'focus'
            lastTriggerEvent = event
            currentTarget = event.currentTarget
            handleAriaExpandedAttribute()
            if (!instance1.state.isVisible && isMouseEvent(event)) {
              // If scrolling, `mouseenter` events can be fired if the cursor lands
              // over a new target, but `mousemove` events don't get fired. This
              // causes interactive tooltips to get stuck open until the cursor is
              // moved
              mouseMoveListeners.forEach(function (listener) {
                return listener(event)
              })
            } // Toggle show/hide when clicking click-triggered tooltips
            if (
              event.type === 'click' &&
              (instance1.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) &&
              instance1.props.hideOnClick !== false &&
              instance1.state.isVisible
            ) {
              shouldScheduleClickHide = true
            } else {
              scheduleShow(event)
            }
            if (event.type === 'click') {
              isVisibleFromClick = !shouldScheduleClickHide
            }
            if (shouldScheduleClickHide && !wasFocused) {
              scheduleHide(event)
            }
          }
          function onMouseMove(event) {
            var target = event.target
            var isCursorOverReferenceOrPopper =
              getCurrentTarget().contains(target) || popper1.contains(target)
            if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
              return
            }
            var popperTreeData = getNestedPopperTree()
              .concat(popper1)
              .map(function (popper) {
                var _instance$popperInsta
                var instance = popper._tippy
                var state =
                  (_instance$popperInsta = instance.popperInstance) == null
                    ? void 0
                    : _instance$popperInsta.state
                if (state) {
                  return {
                    popperRect: popper.getBoundingClientRect(),
                    popperState: state,
                    props: props,
                  }
                }
                return null
              })
              .filter(Boolean)
            if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
              cleanupInteractiveMouseListeners()
              scheduleHide(event)
            }
          }
          function onMouseLeave(event) {
            var shouldBail =
              isEventListenerStopped(event) ||
              (instance1.props.trigger.indexOf('click') >= 0 && isVisibleFromClick)
            if (shouldBail) {
              return
            }
            if (instance1.props.interactive) {
              instance1.hideWithInteractivity(event)
              return
            }
            scheduleHide(event)
          }
          function onBlurOrFocusOut(event) {
            if (
              instance1.props.trigger.indexOf('focusin') < 0 &&
              event.target !== getCurrentTarget()
            ) {
              return
            } // If focus was moved to within the popper
            if (
              instance1.props.interactive &&
              event.relatedTarget &&
              popper1.contains(event.relatedTarget)
            ) {
              return
            }
            scheduleHide(event)
          }
          function isEventListenerStopped(event) {
            return currentInput.isTouch
              ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0
              : false
          }
          function createPopperInstance() {
            destroyPopperInstance()
            var _instance$props2 = instance1.props,
              popperOptions = _instance$props2.popperOptions,
              placement = _instance$props2.placement,
              offset = _instance$props2.offset,
              getReferenceClientRect = _instance$props2.getReferenceClientRect,
              moveTransition = _instance$props2.moveTransition
            var arrow = getIsDefaultRenderFn() ? getChildren(popper1).arrow : null
            var computedReference = getReferenceClientRect
              ? {
                  getBoundingClientRect: getReferenceClientRect,
                  contextElement: getReferenceClientRect.contextElement || getCurrentTarget(),
                }
              : reference
            var tippyModifier = {
              name: '$$tippy',
              enabled: true,
              phase: 'beforeWrite',
              requires: ['computeStyles'],
              fn: function fn(_ref2) {
                var state = _ref2.state
                if (getIsDefaultRenderFn()) {
                  var _getDefaultTemplateCh = getDefaultTemplateChildren(),
                    box = _getDefaultTemplateCh.box
                  ;['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
                    if (attr === 'placement') {
                      box.setAttribute('data-placement', state.placement)
                    } else {
                      if (state.attributes.popper['data-popper-' + attr]) {
                        box.setAttribute('data-' + attr, '')
                      } else {
                        box.removeAttribute('data-' + attr)
                      }
                    }
                  })
                  state.attributes.popper = {}
                }
              },
            }
            var modifiers = [
              {
                name: 'offset',
                options: {
                  offset: offset,
                },
              },
              {
                name: 'preventOverflow',
                options: {
                  padding: {
                    top: 2,
                    bottom: 2,
                    left: 5,
                    right: 5,
                  },
                },
              },
              {
                name: 'flip',
                options: {
                  padding: 5,
                },
              },
              {
                name: 'computeStyles',
                options: {
                  adaptive: !moveTransition,
                },
              },
              tippyModifier,
            ]
            if (getIsDefaultRenderFn() && arrow) {
              modifiers.push({
                name: 'arrow',
                options: {
                  element: arrow,
                  padding: 3,
                },
              })
            }
            modifiers.push.apply(
              modifiers,
              (popperOptions == null ? void 0 : popperOptions.modifiers) || []
            )
            instance1.popperInstance = (0, _core.createPopper)(
              computedReference,
              popper1,
              Object.assign({}, popperOptions, {
                placement: placement,
                onFirstUpdate: onFirstUpdate,
                modifiers: modifiers,
              })
            )
          }
          function destroyPopperInstance() {
            if (instance1.popperInstance) {
              instance1.popperInstance.destroy()
              instance1.popperInstance = null
            }
          }
          function mount() {
            var appendTo = instance1.props.appendTo
            var parentNode // By default, we'll append the popper to the triggerTargets's parentNode so
            // it's directly after the reference element so the elements inside the
            // tippy can be tabbed to
            // If there are clipping issues, the user can specify a different appendTo
            // and ensure focus management is handled correctly manually
            var node = getCurrentTarget()
            if (
              (instance1.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO) ||
              appendTo === 'parent'
            ) {
              parentNode = node.parentNode
            } else {
              parentNode = invokeWithArgsOrReturn(appendTo, [node])
            } // The popper element needs to exist on the DOM before its position can be
            // updated as Popper needs to read its dimensions
            if (!parentNode.contains(popper1)) {
              parentNode.appendChild(popper1)
            }
            instance1.state.isMounted = true
            createPopperInstance()
            /* istanbul ignore else */ if (true) {
              // Accessibility check
              warnWhen(
                instance1.props.interactive &&
                  appendTo === defaultProps.appendTo &&
                  node.nextElementSibling !== popper1,
                [
                  'Interactive tippy element may not be accessible via keyboard',
                  'navigation because it is not directly after the reference element',
                  'in the DOM source order.',
                  '\n\n',
                  'Using a wrapper <div> or <span> tag around the reference element',
                  'solves this by creating a new parentNode context.',
                  '\n\n',
                  'Specifying `appendTo: document.body` silences this warning, but it',
                  'assumes you are using a focus management solution to handle',
                  'keyboard navigation.',
                  '\n\n',
                  'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity',
                ].join(' ')
              )
            }
          }
          function getNestedPopperTree() {
            return arrayFrom(popper1.querySelectorAll('[data-tippy-root]'))
          }
          function scheduleShow(event) {
            instance1.clearDelayTimeouts()
            if (event) {
              invokeHook('onTrigger', [instance1, event])
            }
            addDocumentPress()
            var delay = getDelay(true)
            var _getNormalizedTouchSe = getNormalizedTouchSettings(),
              touchValue = _getNormalizedTouchSe[0],
              touchDelay = _getNormalizedTouchSe[1]
            if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
              delay = touchDelay
            }
            if (delay) {
              showTimeout = setTimeout(function () {
                instance1.show()
              }, delay)
            } else {
              instance1.show()
            }
          }
          function scheduleHide(event) {
            instance1.clearDelayTimeouts()
            invokeHook('onUntrigger', [instance1, event])
            if (!instance1.state.isVisible) {
              removeDocumentPress()
              return
            } // For interactive tippies, scheduleHide is added to a document.body handler
            // from onMouseLeave so must intercept scheduled hides from mousemove/leave
            // events when trigger contains mouseenter and click, and the tip is
            // currently shown as a result of a click.
            if (
              instance1.props.trigger.indexOf('mouseenter') >= 0 &&
              instance1.props.trigger.indexOf('click') >= 0 &&
              ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 &&
              isVisibleFromClick
            ) {
              return
            }
            var delay = getDelay(false)
            if (delay) {
              hideTimeout = setTimeout(function () {
                if (instance1.state.isVisible) {
                  instance1.hide()
                }
              }, delay)
            } else {
              // Fixes a `transitionend` problem when it fires 1 frame too
              // late sometimes, we don't want hide() to be called.
              scheduleHideAnimationFrame = requestAnimationFrame(function () {
                instance1.hide()
              })
            }
          } // ===========================================================================
          // 🔑 Public methods
          // ===========================================================================
          function enable() {
            instance1.state.isEnabled = true
          }
          function disable() {
            // Disabling the instance should also hide it
            // https://github.com/atomiks/tippy.js-react/issues/106
            instance1.hide()
            instance1.state.isEnabled = false
          }
          function clearDelayTimeouts() {
            clearTimeout(showTimeout)
            clearTimeout(hideTimeout)
            cancelAnimationFrame(scheduleHideAnimationFrame)
          }
          function setProps(partialProps) {
            /* istanbul ignore else */ if (true) {
              warnWhen(instance1.state.isDestroyed, createMemoryLeakWarning('setProps'))
            }
            if (instance1.state.isDestroyed) {
              return
            }
            invokeHook('onBeforeUpdate', [instance1, partialProps])
            removeListeners()
            var prevProps = instance1.props
            var nextProps = evaluateProps(
              reference,
              Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
                ignoreAttributes: true,
              })
            )
            instance1.props = nextProps
            addListeners()
            if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
              cleanupInteractiveMouseListeners()
              debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce)
            } // Ensure stale aria-expanded attributes are removed
            if (prevProps.triggerTarget && !nextProps.triggerTarget) {
              normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
                node.removeAttribute('aria-expanded')
              })
            } else if (nextProps.triggerTarget) {
              reference.removeAttribute('aria-expanded')
            }
            handleAriaExpandedAttribute()
            handleStyles()
            if (onUpdate) {
              onUpdate(prevProps, nextProps)
            }
            if (instance1.popperInstance) {
              createPopperInstance() // Fixes an issue with nested tippies if they are all getting re-rendered,
              // and the nested ones get re-rendered first.
              // https://github.com/atomiks/tippyjs-react/issues/177
              // TODO: find a cleaner / more efficient solution(!)
              getNestedPopperTree().forEach(function (nestedPopper) {
                // React (and other UI libs likely) requires a rAF wrapper as it flushes
                // its work in one
                requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate)
              })
            }
            invokeHook('onAfterUpdate', [instance1, partialProps])
          }
          function setContent1(content) {
            instance1.setProps({
              content: content,
            })
          }
          function show() {
            /* istanbul ignore else */ if (true) {
              warnWhen(instance1.state.isDestroyed, createMemoryLeakWarning('show'))
            } // Early bail-out
            var isAlreadyVisible = instance1.state.isVisible
            var isDestroyed = instance1.state.isDestroyed
            var isDisabled = !instance1.state.isEnabled
            var isTouchAndTouchDisabled = currentInput.isTouch && !instance1.props.touch
            var duration = getValueAtIndexOrReturn(
              instance1.props.duration,
              0,
              defaultProps.duration
            )
            if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
              return
            } // Normalize `disabled` behavior across browsers.
            // Firefox allows events on disabled elements, but Chrome doesn't.
            // Using a wrapper element (i.e. <span>) is recommended.
            if (getCurrentTarget().hasAttribute('disabled')) {
              return
            }
            invokeHook('onShow', [instance1], false)
            if (instance1.props.onShow(instance1) === false) {
              return
            }
            instance1.state.isVisible = true
            if (getIsDefaultRenderFn()) {
              popper1.style.visibility = 'visible'
            }
            handleStyles()
            addDocumentPress()
            if (!instance1.state.isMounted) {
              popper1.style.transition = 'none'
            } // If flipping to the opposite side after hiding at least once, the
            // animation will use the wrong placement without resetting the duration
            if (getIsDefaultRenderFn()) {
              var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
                box = _getDefaultTemplateCh2.box,
                content = _getDefaultTemplateCh2.content
              setTransitionDuration([box, content], 0)
            }
            onFirstUpdate = function onFirstUpdate() {
              var _instance$popperInsta2
              if (!instance1.state.isVisible || ignoreOnFirstUpdate) {
                return
              }
              ignoreOnFirstUpdate = true // reflow
              void popper1.offsetHeight
              popper1.style.transition = instance1.props.moveTransition
              if (getIsDefaultRenderFn() && instance1.props.animation) {
                var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
                  _box = _getDefaultTemplateCh3.box,
                  _content = _getDefaultTemplateCh3.content
                setTransitionDuration([_box, _content], duration)
                setVisibilityState([_box, _content], 'visible')
              }
              handleAriaContentAttribute()
              handleAriaExpandedAttribute()
              pushIfUnique(mountedInstances, instance1) // certain modifiers (e.g. `maxSize`) require a second update after the
              // popper has been positioned for the first time
              ;(_instance$popperInsta2 = instance1.popperInstance) == null
                ? void 0
                : _instance$popperInsta2.forceUpdate()
              invokeHook('onMount', [instance1])
              if (instance1.props.animation && getIsDefaultRenderFn()) {
                onTransitionedIn(duration, function () {
                  instance1.state.isShown = true
                  invokeHook('onShown', [instance1])
                })
              }
            }
            mount()
          }
          function hide() {
            /* istanbul ignore else */ if (true) {
              warnWhen(instance1.state.isDestroyed, createMemoryLeakWarning('hide'))
            } // Early bail-out
            var isAlreadyHidden = !instance1.state.isVisible
            var isDestroyed = instance1.state.isDestroyed
            var isDisabled = !instance1.state.isEnabled
            var duration = getValueAtIndexOrReturn(
              instance1.props.duration,
              1,
              defaultProps.duration
            )
            if (isAlreadyHidden || isDestroyed || isDisabled) {
              return
            }
            invokeHook('onHide', [instance1], false)
            if (instance1.props.onHide(instance1) === false) {
              return
            }
            instance1.state.isVisible = false
            instance1.state.isShown = false
            ignoreOnFirstUpdate = false
            isVisibleFromClick = false
            if (getIsDefaultRenderFn()) {
              popper1.style.visibility = 'hidden'
            }
            cleanupInteractiveMouseListeners()
            removeDocumentPress()
            handleStyles(true)
            if (getIsDefaultRenderFn()) {
              var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
                box = _getDefaultTemplateCh4.box,
                content = _getDefaultTemplateCh4.content
              if (instance1.props.animation) {
                setTransitionDuration([box, content], duration)
                setVisibilityState([box, content], 'hidden')
              }
            }
            handleAriaContentAttribute()
            handleAriaExpandedAttribute()
            if (instance1.props.animation) {
              if (getIsDefaultRenderFn()) {
                onTransitionedOut(duration, instance1.unmount)
              }
            } else {
              instance1.unmount()
            }
          }
          function hideWithInteractivity(event) {
            /* istanbul ignore else */ if (true) {
              warnWhen(
                instance1.state.isDestroyed,
                createMemoryLeakWarning('hideWithInteractivity')
              )
            }
            getDocument().addEventListener('mousemove', debouncedOnMouseMove)
            pushIfUnique(mouseMoveListeners, debouncedOnMouseMove)
            debouncedOnMouseMove(event)
          }
          function unmount() {
            /* istanbul ignore else */ if (true) {
              warnWhen(instance1.state.isDestroyed, createMemoryLeakWarning('unmount'))
            }
            if (instance1.state.isVisible) {
              instance1.hide()
            }
            if (!instance1.state.isMounted) {
              return
            }
            destroyPopperInstance() // If a popper is not interactive, it will be appended outside the popper
            // tree by default. This seems mainly for interactive tippies, but we should
            // find a workaround if possible
            getNestedPopperTree().forEach(function (nestedPopper) {
              nestedPopper._tippy.unmount()
            })
            if (popper1.parentNode) {
              popper1.parentNode.removeChild(popper1)
            }
            mountedInstances = mountedInstances.filter(function (i) {
              return i !== instance1
            })
            instance1.state.isMounted = false
            invokeHook('onHidden', [instance1])
          }
          function destroy() {
            /* istanbul ignore else */ if (true) {
              warnWhen(instance1.state.isDestroyed, createMemoryLeakWarning('destroy'))
            }
            if (instance1.state.isDestroyed) {
              return
            }
            instance1.clearDelayTimeouts()
            instance1.unmount()
            removeListeners()
            delete reference._tippy
            instance1.state.isDestroyed = true
            invokeHook('onDestroy', [instance1])
          }
        }
        function tippy(targets, optionalProps) {
          if (optionalProps === void 0) optionalProps = {}
          var plugins = defaultProps.plugins.concat(optionalProps.plugins || [])
          validateTargets(targets)
          validateProps(optionalProps, plugins)
          bindGlobalEventListeners()
          var passedProps = Object.assign({}, optionalProps, {
            plugins: plugins,
          })
          var elements = getArrayOfElements(targets)
          var isSingleContentElement = isElement(passedProps.content)
          var isMoreThanOneReferenceElement = elements.length > 1
          warnWhen(
            isSingleContentElement && isMoreThanOneReferenceElement,
            [
              'tippy() was passed an Element as the `content` prop, but more than',
              'one tippy instance was created by this invocation. This means the',
              'content element will only be appended to the last tippy instance.',
              '\n\n',
              'Instead, pass the .innerHTML of the element, or use a function that',
              'returns a cloned version of the element instead.',
              '\n\n',
              '1) content: element.innerHTML\n',
              '2) content: () => element.cloneNode(true)',
            ].join(' ')
          )
          var instances = elements.reduce(function (acc, reference) {
            var instance = reference && createTippy(reference, passedProps)
            if (instance) acc.push(instance)
            return acc
          }, [])
          return isElement(targets) ? instances[0] : instances
        }
        tippy.defaultProps = defaultProps
        tippy.setDefaultProps = setDefaultProps
        tippy.currentInput = currentInput
        var hideAll = function hideAll(_temp) {
          var _ref = _temp === void 0 ? {} : _temp,
            excludedReferenceOrInstance = _ref.exclude,
            duration = _ref.duration
          mountedInstances.forEach(function (instance) {
            var isExcluded = false
            if (excludedReferenceOrInstance)
              isExcluded = isReferenceElement(excludedReferenceOrInstance)
                ? instance.reference === excludedReferenceOrInstance
                : instance.popper === excludedReferenceOrInstance.popper
            if (!isExcluded) {
              var originalDuration = instance.props.duration
              instance.setProps({
                duration: duration,
              })
              instance.hide()
              if (!instance.state.isDestroyed)
                instance.setProps({
                  duration: originalDuration,
                })
            }
          })
        }
        // every time the popper is destroyed (i.e. a new target), removing the styles
        // and causing transitions to break for singletons when the console is open, but
        // most notably for non-transform styles being used, `gpuAcceleration: false`.
        var applyStylesModifier = Object.assign({}, (0, _core.applyStyles), {
          effect: function effect(_ref) {
            var state = _ref.state
            var initialStyles = {
              popper: {
                position: state.options.strategy,
                left: '0',
                top: '0',
                margin: '0',
              },
              arrow: {
                position: 'absolute',
              },
              reference: {},
            }
            Object.assign(state.elements.popper.style, initialStyles.popper)
            state.styles = initialStyles
            if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow)
            // intentionally return no cleanup function
            // return () => { ... }
          },
        })
        var createSingleton = function createSingleton(tippyInstances, optionalProps) {
          var _optionalProps$popper
          if (optionalProps === void 0) optionalProps = {}
          errorWhen(
            !Array.isArray(tippyInstances),
            [
              'The first argument passed to createSingleton() must be an array of',
              'tippy instances. The passed value was',
              String(tippyInstances),
            ].join(' ')
          )
          var individualInstances = tippyInstances
          var references = []
          var triggerTargets = []
          var currentTarget
          var overrides = optionalProps.overrides
          var interceptSetPropsCleanups = []
          var shownOnCreate = false
          function setTriggerTargets() {
            triggerTargets = individualInstances
              .map(function (instance) {
                return normalizeToArray(instance.props.triggerTarget || instance.reference)
              })
              .reduce(function (acc, item) {
                return acc.concat(item)
              }, [])
          }
          function setReferences() {
            references = individualInstances.map(function (instance) {
              return instance.reference
            })
          }
          function enableInstances(isEnabled) {
            individualInstances.forEach(function (instance) {
              if (isEnabled) instance.enable()
              else instance.disable()
            })
          }
          function interceptSetProps(singleton) {
            return individualInstances.map(function (instance) {
              var originalSetProps = instance.setProps
              instance.setProps = function (props) {
                originalSetProps(props)
                if (instance.reference === currentTarget) singleton.setProps(props)
              }
              return function () {
                instance.setProps = originalSetProps
              }
            })
          } // have to pass singleton, as it maybe undefined on first call
          function prepareInstance(singleton, target) {
            var index = triggerTargets.indexOf(target) // bail-out
            if (target === currentTarget) return
            currentTarget = target
            var overrideProps = (overrides || []).concat('content').reduce(function (acc, prop) {
              acc[prop] = individualInstances[index].props[prop]
              return acc
            }, {})
            singleton.setProps(
              Object.assign({}, overrideProps, {
                getReferenceClientRect:
                  typeof overrideProps.getReferenceClientRect === 'function'
                    ? overrideProps.getReferenceClientRect
                    : function () {
                        var _references$index
                        return (_references$index = references[index]) == null
                          ? void 0
                          : _references$index.getBoundingClientRect()
                      },
              })
            )
          }
          enableInstances(false)
          setReferences()
          setTriggerTargets()
          var plugin = {
            fn: function fn() {
              return {
                onDestroy: function onDestroy() {
                  enableInstances(true)
                },
                onHidden: function onHidden() {
                  currentTarget = null
                },
                onClickOutside: function onClickOutside(instance) {
                  if (instance.props.showOnCreate && !shownOnCreate) {
                    shownOnCreate = true
                    currentTarget = null
                  }
                },
                onShow: function onShow(instance) {
                  if (instance.props.showOnCreate && !shownOnCreate) {
                    shownOnCreate = true
                    prepareInstance(instance, references[0])
                  }
                },
                onTrigger: function onTrigger(instance, event) {
                  prepareInstance(instance, event.currentTarget)
                },
              }
            },
          }
          var singleton1 = tippy(
            div(),
            Object.assign({}, removeProperties(optionalProps, ['overrides']), {
              plugins: [plugin].concat(optionalProps.plugins || []),
              triggerTarget: triggerTargets,
              popperOptions: Object.assign({}, optionalProps.popperOptions, {
                modifiers: [].concat(
                  ((_optionalProps$popper = optionalProps.popperOptions) == null
                    ? void 0
                    : _optionalProps$popper.modifiers) || [],
                  [applyStylesModifier]
                ),
              }),
            })
          )
          var originalShow = singleton1.show
          singleton1.show = function (target) {
            originalShow() // first time, showOnCreate or programmatic call with no params
            // default to showing first instance
            if (!currentTarget && target == null) return prepareInstance(singleton1, references[0])
            // triggered from event (do nothing as prepareInstance already called by onTrigger)
            // programmatic call with no params when already visible (do nothing again)
            if (currentTarget && target == null) return
            // target is index of instance
            if (typeof target === 'number')
              return references[target] && prepareInstance(singleton1, references[target])
            // target is a child tippy instance
            if (individualInstances.indexOf(target) >= 0) {
              var ref = target.reference
              return prepareInstance(singleton1, ref)
            } // target is a ReferenceElement
            if (references.indexOf(target) >= 0) return prepareInstance(singleton1, target)
          }
          singleton1.showNext = function () {
            var first = references[0]
            if (!currentTarget) return singleton1.show(0)
            var index = references.indexOf(currentTarget)
            singleton1.show(references[index + 1] || first)
          }
          singleton1.showPrevious = function () {
            var last = references[references.length - 1]
            if (!currentTarget) return singleton1.show(last)
            var index = references.indexOf(currentTarget)
            var target = references[index - 1] || last
            singleton1.show(target)
          }
          var originalSetProps1 = singleton1.setProps
          singleton1.setProps = function (props) {
            overrides = props.overrides || overrides
            originalSetProps1(props)
          }
          singleton1.setInstances = function (nextInstances) {
            enableInstances(true)
            interceptSetPropsCleanups.forEach(function (fn) {
              return fn()
            })
            individualInstances = nextInstances
            enableInstances(false)
            setReferences()
            setTriggerTargets()
            interceptSetPropsCleanups = interceptSetProps(singleton1)
            singleton1.setProps({
              triggerTarget: triggerTargets,
            })
          }
          interceptSetPropsCleanups = interceptSetProps(singleton1)
          return singleton1
        }
        var BUBBLING_EVENTS_MAP = {
          mouseover: 'mouseenter',
          focusin: 'focus',
          click: 'click',
        }
        /**
         * Creates a delegate instance that controls the creation of tippy instances
         * for child elements (`target` CSS selector).
         */ function delegate(targets, props) {
          errorWhen(
            !(props && props.target),
            [
              'You must specity a `target` prop indicating a CSS selector string matching',
              'the target elements that should receive a tippy.',
            ].join(' ')
          )
          var listeners = []
          var childTippyInstances = []
          var disabled = false
          var target = props.target
          var nativeProps = removeProperties(props, ['target'])
          var parentProps = Object.assign({}, nativeProps, {
            trigger: 'manual',
            touch: false,
          })
          var childProps = Object.assign(
            {
              touch: defaultProps.touch,
            },
            nativeProps,
            {
              showOnCreate: true,
            }
          )
          var returnValue = tippy(targets, parentProps)
          var normalizedReturnValue = normalizeToArray(returnValue)
          function onTrigger(event) {
            if (!event.target || disabled) return
            var targetNode = event.target.closest(target)
            if (!targetNode) return
            // Get relevant trigger with fallbacks:
            // 1. Check `data-tippy-trigger` attribute on target node
            // 2. Fallback to `trigger` passed to `delegate()`
            // 3. Fallback to `defaultProps.trigger`
            var trigger =
              targetNode.getAttribute('data-tippy-trigger') || props.trigger || defaultProps.trigger // @ts-ignore
            if (targetNode._tippy) return
            if (event.type === 'touchstart' && typeof childProps.touch === 'boolean') return
            if (event.type !== 'touchstart' && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0)
              return
            var instance = tippy(targetNode, childProps)
            if (instance) childTippyInstances = childTippyInstances.concat(instance)
          }
          function on(node, eventType, handler, options) {
            if (options === void 0) options = false
            node.addEventListener(eventType, handler, options)
            listeners.push({
              node: node,
              eventType: eventType,
              handler: handler,
              options: options,
            })
          }
          function addEventListeners(instance) {
            var reference = instance.reference
            on(reference, 'touchstart', onTrigger, TOUCH_OPTIONS)
            on(reference, 'mouseover', onTrigger)
            on(reference, 'focusin', onTrigger)
            on(reference, 'click', onTrigger)
          }
          function removeEventListeners() {
            listeners.forEach(function (_ref) {
              var node = _ref.node,
                eventType = _ref.eventType,
                handler = _ref.handler,
                options = _ref.options
              node.removeEventListener(eventType, handler, options)
            })
            listeners = []
          }
          function applyMutations(instance2) {
            var originalDestroy = instance2.destroy
            var originalEnable = instance2.enable
            var originalDisable = instance2.disable
            instance2.destroy = function (shouldDestroyChildInstances) {
              if (shouldDestroyChildInstances === void 0) shouldDestroyChildInstances = true
              if (shouldDestroyChildInstances)
                childTippyInstances.forEach(function (instance) {
                  instance.destroy()
                })
              childTippyInstances = []
              removeEventListeners()
              originalDestroy()
            }
            instance2.enable = function () {
              originalEnable()
              childTippyInstances.forEach(function (instance) {
                return instance.enable()
              })
              disabled = false
            }
            instance2.disable = function () {
              originalDisable()
              childTippyInstances.forEach(function (instance) {
                return instance.disable()
              })
              disabled = true
            }
            addEventListeners(instance2)
          }
          normalizedReturnValue.forEach(applyMutations)
          return returnValue
        }
        var animateFill = {
          name: 'animateFill',
          defaultValue: false,
          fn: function fn(instance) {
            var _instance$props$rende
            // @ts-ignore
            if (
              !(
                (_instance$props$rende = instance.props.render) != null &&
                _instance$props$rende.$$tippy
              )
            ) {
              errorWhen(
                instance.props.animateFill,
                'The `animateFill` plugin requires the default render function.'
              )
              return {}
            }
            var _getChildren = getChildren(instance.popper),
              box = _getChildren.box,
              content = _getChildren.content
            var backdrop = instance.props.animateFill ? createBackdropElement() : null
            return {
              onCreate: function onCreate() {
                if (backdrop) {
                  box.insertBefore(backdrop, box.firstElementChild)
                  box.setAttribute('data-animatefill', '')
                  box.style.overflow = 'hidden'
                  instance.setProps({
                    arrow: false,
                    animation: 'shift-away',
                  })
                }
              },
              onMount: function onMount() {
                if (backdrop) {
                  var transitionDuration = box.style.transitionDuration
                  var duration = Number(transitionDuration.replace('ms', '')) // The content should fade in after the backdrop has mostly filled the
                  // tooltip element. `clip-path` is the other alternative but is not
                  // well-supported and is buggy on some devices.
                  content.style.transitionDelay = Math.round(duration / 10) + 'ms'
                  backdrop.style.transitionDuration = transitionDuration
                  setVisibilityState([backdrop], 'visible')
                }
              },
              onShow: function onShow() {
                if (backdrop) backdrop.style.transitionDuration = '0ms'
              },
              onHide: function onHide() {
                if (backdrop) setVisibilityState([backdrop], 'hidden')
              },
            }
          },
        }
        function createBackdropElement() {
          var backdrop = div()
          backdrop.className = BACKDROP_CLASS
          setVisibilityState([backdrop], 'hidden')
          return backdrop
        }
        var mouseCoords = {
          clientX: 0,
          clientY: 0,
        }
        var activeInstances = []
        function storeMouseCoords(_ref) {
          var clientX = _ref.clientX,
            clientY = _ref.clientY
          mouseCoords = {
            clientX: clientX,
            clientY: clientY,
          }
        }
        function addMouseCoordsListener(doc) {
          doc.addEventListener('mousemove', storeMouseCoords)
        }
        function removeMouseCoordsListener(doc) {
          doc.removeEventListener('mousemove', storeMouseCoords)
        }
        var followCursor = {
          name: 'followCursor',
          defaultValue: false,
          fn: function fn(instance) {
            var reference = instance.reference
            var doc = getOwnerDocument(instance.props.triggerTarget || reference)
            var isInternalUpdate = false
            var wasFocusEvent = false
            var isUnmounted = true
            var prevProps = instance.props
            function getIsInitialBehavior() {
              return instance.props.followCursor === 'initial' && instance.state.isVisible
            }
            function addListener() {
              doc.addEventListener('mousemove', onMouseMove)
            }
            function removeListener() {
              doc.removeEventListener('mousemove', onMouseMove)
            }
            function unsetGetReferenceClientRect() {
              isInternalUpdate = true
              instance.setProps({
                getReferenceClientRect: null,
              })
              isInternalUpdate = false
            }
            function onMouseMove(event) {
              // If the instance is interactive, avoid updating the position unless it's
              // over the reference element
              var isCursorOverReference = event.target ? reference.contains(event.target) : true
              var followCursor1 = instance.props.followCursor
              var clientX = event.clientX,
                clientY = event.clientY
              var rect1 = reference.getBoundingClientRect()
              var relativeX = clientX - rect1.left
              var relativeY = clientY - rect1.top
              if (isCursorOverReference || !instance.props.interactive)
                instance.setProps({
                  // @ts-ignore - unneeded DOMRect properties
                  getReferenceClientRect: function getReferenceClientRect() {
                    var rect = reference.getBoundingClientRect()
                    var x = clientX
                    var y = clientY
                    if (followCursor1 === 'initial') {
                      x = rect.left + relativeX
                      y = rect.top + relativeY
                    }
                    var top = followCursor1 === 'horizontal' ? rect.top : y
                    var right = followCursor1 === 'vertical' ? rect.right : x
                    var bottom = followCursor1 === 'horizontal' ? rect.bottom : y
                    var left = followCursor1 === 'vertical' ? rect.left : x
                    return {
                      width: right - left,
                      height: bottom - top,
                      top: top,
                      right: right,
                      bottom: bottom,
                      left: left,
                    }
                  },
                })
            }
            function create() {
              if (instance.props.followCursor) {
                activeInstances.push({
                  instance: instance,
                  doc: doc,
                })
                addMouseCoordsListener(doc)
              }
            }
            function destroy() {
              activeInstances = activeInstances.filter(function (data) {
                return data.instance !== instance
              })
              if (
                activeInstances.filter(function (data) {
                  return data.doc === doc
                }).length === 0
              )
                removeMouseCoordsListener(doc)
            }
            return {
              onCreate: create,
              onDestroy: destroy,
              onBeforeUpdate: function onBeforeUpdate() {
                prevProps = instance.props
              },
              onAfterUpdate: function onAfterUpdate(_, _ref2) {
                var followCursor2 = _ref2.followCursor
                if (isInternalUpdate) return
                if (followCursor2 !== undefined && prevProps.followCursor !== followCursor2) {
                  destroy()
                  if (followCursor2) {
                    create()
                    if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior())
                      addListener()
                  } else {
                    removeListener()
                    unsetGetReferenceClientRect()
                  }
                }
              },
              onMount: function onMount() {
                if (instance.props.followCursor && !wasFocusEvent) {
                  if (isUnmounted) {
                    onMouseMove(mouseCoords)
                    isUnmounted = false
                  }
                  if (!getIsInitialBehavior()) addListener()
                }
              },
              onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event))
                  mouseCoords = {
                    clientX: event.clientX,
                    clientY: event.clientY,
                  }
                wasFocusEvent = event.type === 'focus'
              },
              onHidden: function onHidden() {
                if (instance.props.followCursor) {
                  unsetGetReferenceClientRect()
                  removeListener()
                  isUnmounted = true
                }
              },
            }
          },
        }
        function getProps(props, modifier) {
          var _props$popperOptions
          return {
            popperOptions: Object.assign({}, props.popperOptions, {
              modifiers: [].concat(
                (
                  ((_props$popperOptions = props.popperOptions) == null
                    ? void 0
                    : _props$popperOptions.modifiers) || []
                ).filter(function (_ref) {
                  var name = _ref.name
                  return name !== modifier.name
                }),
                [modifier]
              ),
            }),
          }
        }
        var inlinePositioning = {
          name: 'inlinePositioning',
          defaultValue: false,
          fn: function fn(instance) {
            var reference = instance.reference
            function isEnabled() {
              return !!instance.props.inlinePositioning
            }
            var placement1
            var cursorRectIndex = -1
            var isInternalUpdate = false
            var triedPlacements = []
            var modifier = {
              name: 'tippyInlinePositioning',
              enabled: true,
              phase: 'afterWrite',
              fn: function fn(_ref2) {
                var state = _ref2.state
                if (isEnabled()) {
                  if (triedPlacements.indexOf(state.placement) !== -1) triedPlacements = []
                  if (
                    placement1 !== state.placement &&
                    triedPlacements.indexOf(state.placement) === -1
                  ) {
                    triedPlacements.push(state.placement)
                    instance.setProps({
                      // @ts-ignore - unneeded DOMRect properties
                      getReferenceClientRect: function getReferenceClientRect() {
                        return _getReferenceClientRect(state.placement)
                      },
                    })
                  }
                  placement1 = state.placement
                }
              },
            }
            function _getReferenceClientRect(placement) {
              return getInlineBoundingClientRect(
                getBasePlacement(placement),
                reference.getBoundingClientRect(),
                arrayFrom(reference.getClientRects()),
                cursorRectIndex
              )
            }
            function setInternalProps(partialProps) {
              isInternalUpdate = true
              instance.setProps(partialProps)
              isInternalUpdate = false
            }
            function addModifier() {
              if (!isInternalUpdate) setInternalProps(getProps(instance.props, modifier))
            }
            return {
              onCreate: addModifier,
              onAfterUpdate: addModifier,
              onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event)) {
                  var rects = arrayFrom(instance.reference.getClientRects())
                  var cursorRect = rects.find(function (rect) {
                    return (
                      rect.left - 2 <= event.clientX &&
                      rect.right + 2 >= event.clientX &&
                      rect.top - 2 <= event.clientY &&
                      rect.bottom + 2 >= event.clientY
                    )
                  })
                  var index = rects.indexOf(cursorRect)
                  cursorRectIndex = index > -1 ? index : cursorRectIndex
                }
              },
              onHidden: function onHidden() {
                cursorRectIndex = -1
              },
            }
          },
        }
        function getInlineBoundingClientRect(
          currentBasePlacement,
          boundingRect,
          clientRects,
          cursorRectIndex
        ) {
          // Not an inline element, or placement is not yet known
          if (clientRects.length < 2 || currentBasePlacement === null) return boundingRect
          // There are two rects and they are disjoined
          if (
            clientRects.length === 2 &&
            cursorRectIndex >= 0 &&
            clientRects[0].left > clientRects[1].right
          )
            return clientRects[cursorRectIndex] || boundingRect
          switch (currentBasePlacement) {
            case 'top':
            case 'bottom':
              var firstRect = clientRects[0]
              var lastRect = clientRects[clientRects.length - 1]
              var isTop = currentBasePlacement === 'top'
              var top = firstRect.top
              var bottom = lastRect.bottom
              var left = isTop ? firstRect.left : lastRect.left
              var right = isTop ? firstRect.right : lastRect.right
              var width = right - left
              var height = bottom - top
              return {
                top: top,
                bottom: bottom,
                left: left,
                right: right,
                width: width,
                height: height,
              }
            case 'left':
            case 'right':
              var minLeft = Math.min.apply(
                Math,
                clientRects.map(function (rects) {
                  return rects.left
                })
              )
              var maxRight = Math.max.apply(
                Math,
                clientRects.map(function (rects) {
                  return rects.right
                })
              )
              var measureRects = clientRects.filter(function (rect) {
                return currentBasePlacement === 'left'
                  ? rect.left === minLeft
                  : rect.right === maxRight
              })
              var _top = measureRects[0].top
              var _bottom = measureRects[measureRects.length - 1].bottom
              var _left = minLeft
              var _right = maxRight
              var _width = _right - _left
              var _height = _bottom - _top
              return {
                top: _top,
                bottom: _bottom,
                left: _left,
                right: _right,
                width: _width,
                height: _height,
              }
            default:
              return boundingRect
          }
        }
        var sticky = {
          name: 'sticky',
          defaultValue: false,
          fn: function fn(instance) {
            var reference = instance.reference,
              popper = instance.popper
            function getReference() {
              return instance.popperInstance
                ? instance.popperInstance.state.elements.reference
                : reference
            }
            function shouldCheck(value) {
              return instance.props.sticky === true || instance.props.sticky === value
            }
            var prevRefRect = null
            var prevPopRect = null
            function updatePosition() {
              var currentRefRect = shouldCheck('reference')
                ? getReference().getBoundingClientRect()
                : null
              var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null
              if (
                (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect)) ||
                (currentPopRect && areRectsDifferent(prevPopRect, currentPopRect))
              ) {
                if (instance.popperInstance) instance.popperInstance.update()
              }
              prevRefRect = currentRefRect
              prevPopRect = currentPopRect
              if (instance.state.isMounted) requestAnimationFrame(updatePosition)
            }
            return {
              onMount: function onMount() {
                if (instance.props.sticky) updatePosition()
              },
            }
          },
        }
        function areRectsDifferent(rectA, rectB) {
          if (rectA && rectB)
            return (
              rectA.top !== rectB.top ||
              rectA.right !== rectB.right ||
              rectA.bottom !== rectB.bottom ||
              rectA.left !== rectB.left
            )
          return true
        }
        tippy.setDefaultProps({
          render: render,
        })
        exports.default = tippy
      },
      { '@popperjs/core': '7unqC', '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '7unqC': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        parcelHelpers.export(exports, 'popperGenerator', () => (0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
        parcelHelpers.export(exports, 'detectOverflow', () => (0, _createPopperJs.detectOverflow))
        parcelHelpers.export(exports, 'createPopperBase', () => (0, _createPopperJs.createPopper))
        parcelHelpers.export(exports, 'createPopper', () => (0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
        parcelHelpers.export(exports, 'createPopperLite', () => (0, _popperLiteJs.createPopper))
        var _enumsJs = require('./enums.js')
        parcelHelpers.exportAll(_enumsJs, exports)
        var _indexJs = require('./modifiers/index.js') // eslint-disable-next-line import/no-unused-modules
        parcelHelpers.exportAll(_indexJs, exports)
        var _createPopperJs = require('./createPopper.js')
        var _popperJs = require('./popper.js')
        var _popperLiteJs = require('./popper-lite.js')
      },
      {
        './enums.js': 'lCAq5',
        './modifiers/index.js': 'cap3W',
        './createPopper.js': 'cHuNp',
        './popper.js': '1PuRF',
        './popper-lite.js': false,
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    lCAq5: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        parcelHelpers.export(exports, 'top', () => top)
        parcelHelpers.export(exports, 'bottom', () => bottom)
        parcelHelpers.export(exports, 'right', () => right)
        parcelHelpers.export(exports, 'left', () => left)
        parcelHelpers.export(exports, 'auto', () => auto)
        parcelHelpers.export(exports, 'basePlacements', () => basePlacements)
        parcelHelpers.export(exports, 'start', () => start)
        parcelHelpers.export(exports, 'end', () => end)
        parcelHelpers.export(exports, 'clippingParents', () => clippingParents)
        parcelHelpers.export(exports, 'viewport', () => viewport)
        parcelHelpers.export(exports, 'popper', () => popper)
        parcelHelpers.export(exports, 'reference', () => reference)
        parcelHelpers.export(exports, 'variationPlacements', () => variationPlacements)
        parcelHelpers.export(exports, 'placements', () => placements)
        parcelHelpers.export(exports, 'beforeRead', () => beforeRead)
        parcelHelpers.export(exports, 'read', () => read)
        parcelHelpers.export(exports, 'afterRead', () => afterRead)
        parcelHelpers.export(exports, 'beforeMain', () => beforeMain)
        parcelHelpers.export(exports, 'main', () => main)
        parcelHelpers.export(exports, 'afterMain', () => afterMain)
        parcelHelpers.export(exports, 'beforeWrite', () => beforeWrite)
        parcelHelpers.export(exports, 'write', () => write)
        parcelHelpers.export(exports, 'afterWrite', () => afterWrite)
        parcelHelpers.export(exports, 'modifierPhases', () => modifierPhases)
        var top = 'top'
        var bottom = 'bottom'
        var right = 'right'
        var left = 'left'
        var auto = 'auto'
        var basePlacements = [top, bottom, right, left]
        var start = 'start'
        var end = 'end'
        var clippingParents = 'clippingParents'
        var viewport = 'viewport'
        var popper = 'popper'
        var reference = 'reference'
        var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function (acc, placement) {
          return acc.concat([placement + '-' + start, placement + '-' + end])
        }, [])
        var placements = /*#__PURE__*/ []
          .concat(basePlacements, [auto])
          .reduce(function (acc, placement) {
            return acc.concat([placement, placement + '-' + start, placement + '-' + end])
          }, []) // modifiers that need to read the DOM
        var beforeRead = 'beforeRead'
        var read = 'read'
        var afterRead = 'afterRead' // pure-logic modifiers
        var beforeMain = 'beforeMain'
        var main = 'main'
        var afterMain = 'afterMain' // modifier with the purpose to write to the DOM (or write into a framework state)
        var beforeWrite = 'beforeWrite'
        var write = 'write'
        var afterWrite = 'afterWrite'
        var modifierPhases = [
          beforeRead,
          read,
          afterRead,
          beforeMain,
          main,
          afterMain,
          beforeWrite,
          write,
          afterWrite,
        ]
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    gkKU3: [
      function (require, module, exports) {
        exports.interopDefault = function (a) {
          return a && a.__esModule
            ? a
            : {
                default: a,
              }
        }
        exports.defineInteropFlag = function (a) {
          Object.defineProperty(a, '__esModule', {
            value: true,
          })
        }
        exports.exportAll = function (source, dest) {
          Object.keys(source).forEach(function (key) {
            if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return
            Object.defineProperty(dest, key, {
              enumerable: true,
              get: function () {
                return source[key]
              },
            })
          })
          return dest
        }
        exports.export = function (dest, destName, get) {
          Object.defineProperty(dest, destName, {
            enumerable: true,
            get: get,
          })
        }
      },
      {},
    ],
    cap3W: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        parcelHelpers.export(exports, 'applyStyles', () => (0, _applyStylesJsDefault.default))
        parcelHelpers.export(exports, 'arrow', () => (0, _arrowJsDefault.default))
        parcelHelpers.export(exports, 'computeStyles', () => (0, _computeStylesJsDefault.default))
        parcelHelpers.export(exports, 'eventListeners', () => (0, _eventListenersJsDefault.default))
        parcelHelpers.export(exports, 'flip', () => (0, _flipJsDefault.default))
        parcelHelpers.export(exports, 'hide', () => (0, _hideJsDefault.default))
        parcelHelpers.export(exports, 'offset', () => (0, _offsetJsDefault.default))
        parcelHelpers.export(exports, 'popperOffsets', () => (0, _popperOffsetsJsDefault.default))
        parcelHelpers.export(
          exports,
          'preventOverflow',
          () => (0, _preventOverflowJsDefault.default)
        )
        var _applyStylesJs = require('./applyStyles.js')
        var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs)
        var _arrowJs = require('./arrow.js')
        var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs)
        var _computeStylesJs = require('./computeStyles.js')
        var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs)
        var _eventListenersJs = require('./eventListeners.js')
        var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs)
        var _flipJs = require('./flip.js')
        var _flipJsDefault = parcelHelpers.interopDefault(_flipJs)
        var _hideJs = require('./hide.js')
        var _hideJsDefault = parcelHelpers.interopDefault(_hideJs)
        var _offsetJs = require('./offset.js')
        var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs)
        var _popperOffsetsJs = require('./popperOffsets.js')
        var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs)
        var _preventOverflowJs = require('./preventOverflow.js')
        var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs)
      },
      {
        './applyStyles.js': '4iMn4',
        './arrow.js': '31HFW',
        './computeStyles.js': 'gDlm2',
        './eventListeners.js': 'hBKsL',
        './flip.js': 'fv5wq',
        './hide.js': '2g4OF',
        './offset.js': '3GKVY',
        './popperOffsets.js': '6I679',
        './preventOverflow.js': '1AMhb',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '4iMn4': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getNodeNameJs = require('../dom-utils/getNodeName.js')
        var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs)
        var _instanceOfJs = require('../dom-utils/instanceOf.js') // This modifier takes the styles prepared by the `computeStyles` modifier
        // and applies them to the HTMLElements such as popper and arrow
        function applyStyles(_ref) {
          var state = _ref.state
          Object.keys(state.elements).forEach(function (name1) {
            var style = state.styles[name1] || {}
            var attributes = state.attributes[name1] || {}
            var element = state.elements[name1] // arrow is optional + virtual elements
            if (
              !(0, _instanceOfJs.isHTMLElement)(element) ||
              !(0, _getNodeNameJsDefault.default)(element)
            )
              return
            // Flow doesn't support to extend this property, but it's the most
            // effective way to apply styles to an HTMLElement
            // $FlowFixMe[cannot-write]
            Object.assign(element.style, style)
            Object.keys(attributes).forEach(function (name) {
              var value = attributes[name]
              if (value === false) element.removeAttribute(name)
              else element.setAttribute(name, value === true ? '' : value)
            })
          })
        }
        function effect(_ref2) {
          var state = _ref2.state
          var initialStyles = {
            popper: {
              position: state.options.strategy,
              left: '0',
              top: '0',
              margin: '0',
            },
            arrow: {
              position: 'absolute',
            },
            reference: {},
          }
          Object.assign(state.elements.popper.style, initialStyles.popper)
          state.styles = initialStyles
          if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow)
          return function () {
            Object.keys(state.elements).forEach(function (name) {
              var element = state.elements[name]
              var attributes = state.attributes[name] || {}
              var styleProperties = Object.keys(
                state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]
              ) // Set all values to an empty string to unset them
              var style1 = styleProperties.reduce(function (style, property) {
                style[property] = ''
                return style
              }, {}) // arrow is optional + virtual elements
              if (
                !(0, _instanceOfJs.isHTMLElement)(element) ||
                !(0, _getNodeNameJsDefault.default)(element)
              )
                return
              Object.assign(element.style, style1)
              Object.keys(attributes).forEach(function (attribute) {
                element.removeAttribute(attribute)
              })
            })
          }
        } // eslint-disable-next-line import/no-unused-modules
        exports.default = {
          name: 'applyStyles',
          enabled: true,
          phase: 'write',
          fn: applyStyles,
          effect: effect,
          requires: ['computeStyles'],
        }
      },
      {
        '../dom-utils/getNodeName.js': 'a2Qom',
        '../dom-utils/instanceOf.js': 'gYFUC',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    a2Qom: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function getNodeName(element) {
          return element ? (element.nodeName || '').toLowerCase() : null
        }
        exports.default = getNodeName
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    gYFUC: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        parcelHelpers.export(exports, 'isElement', () => isElement)
        parcelHelpers.export(exports, 'isHTMLElement', () => isHTMLElement)
        parcelHelpers.export(exports, 'isShadowRoot', () => isShadowRoot)
        var _getWindowJs = require('./getWindow.js')
        var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs)
        function isElement(node) {
          var OwnElement = (0, _getWindowJsDefault.default)(node).Element
          return node instanceof OwnElement || node instanceof Element
        }
        function isHTMLElement(node) {
          var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement
          return node instanceof OwnElement || node instanceof HTMLElement
        }
        function isShadowRoot(node) {
          // IE 11 has no ShadowRoot
          if (typeof ShadowRoot === 'undefined') return false
          var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot
          return node instanceof OwnElement || node instanceof ShadowRoot
        }
      },
      { './getWindow.js': '2SkOo', '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '2SkOo': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function getWindow(node) {
          if (node == null) return window
          if (node.toString() !== '[object Window]') {
            var ownerDocument = node.ownerDocument
            return ownerDocument ? ownerDocument.defaultView || window : window
          }
          return node
        }
        exports.default = getWindow
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '31HFW': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getBasePlacementJs = require('../utils/getBasePlacement.js')
        var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs)
        var _getLayoutRectJs = require('../dom-utils/getLayoutRect.js')
        var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs)
        var _containsJs = require('../dom-utils/contains.js')
        var _containsJsDefault = parcelHelpers.interopDefault(_containsJs)
        var _getOffsetParentJs = require('../dom-utils/getOffsetParent.js')
        var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs)
        var _getMainAxisFromPlacementJs = require('../utils/getMainAxisFromPlacement.js')
        var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(
          _getMainAxisFromPlacementJs
        )
        var _withinJs = require('../utils/within.js')
        var _mergePaddingObjectJs = require('../utils/mergePaddingObject.js')
        var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs)
        var _expandToHashMapJs = require('../utils/expandToHashMap.js')
        var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs)
        var _enumsJs = require('../enums.js')
        var _instanceOfJs = require('../dom-utils/instanceOf.js') // eslint-disable-next-line import/no-unused-modules
        var toPaddingObject = function toPaddingObject(padding, state) {
          padding =
            typeof padding === 'function'
              ? padding(
                  Object.assign({}, state.rects, {
                    placement: state.placement,
                  })
                )
              : padding
          return (0, _mergePaddingObjectJsDefault.default)(
            typeof padding !== 'number'
              ? padding
              : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements))
          )
        }
        function arrow(_ref) {
          var _state$modifiersData$
          var state = _ref.state,
            name = _ref.name,
            options = _ref.options
          var arrowElement = state.elements.arrow
          var popperOffsets = state.modifiersData.popperOffsets
          var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement)
          var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement)
          var isVertical = [(0, _enumsJs.left), (0, _enumsJs.right)].indexOf(basePlacement) >= 0
          var len = isVertical ? 'height' : 'width'
          if (!arrowElement || !popperOffsets) return
          var paddingObject = toPaddingObject(options.padding, state)
          var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement)
          var minProp = axis === 'y' ? (0, _enumsJs.top) : (0, _enumsJs.left)
          var maxProp = axis === 'y' ? (0, _enumsJs.bottom) : (0, _enumsJs.right)
          var endDiff =
            state.rects.reference[len] +
            state.rects.reference[axis] -
            popperOffsets[axis] -
            state.rects.popper[len]
          var startDiff = popperOffsets[axis] - state.rects.reference[axis]
          var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement)
          var clientSize = arrowOffsetParent
            ? axis === 'y'
              ? arrowOffsetParent.clientHeight || 0
              : arrowOffsetParent.clientWidth || 0
            : 0
          var centerToReference = endDiff / 2 - startDiff / 2 // Make sure the arrow doesn't overflow the popper if the center point is
          // outside of the popper bounds
          var min = paddingObject[minProp]
          var max = clientSize - arrowRect[len] - paddingObject[maxProp]
          var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference
          var offset = (0, _withinJs.within)(min, center, max) // Prevents breaking syntax highlighting...
          var axisProp = axis
          state.modifiersData[name] =
            ((_state$modifiersData$ = {}),
            (_state$modifiersData$[axisProp] = offset),
            (_state$modifiersData$.centerOffset = offset - center),
            _state$modifiersData$)
        }
        function effect(_ref2) {
          var state = _ref2.state,
            options = _ref2.options
          var _options$element = options.element,
            arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element
          if (arrowElement == null) return
          // CSS selector
          if (typeof arrowElement === 'string') {
            arrowElement = state.elements.popper.querySelector(arrowElement)
            if (!arrowElement) return
          }
          if (!(0, _instanceOfJs.isHTMLElement)(arrowElement))
            console.error(
              [
                'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
                'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
                'the arrow.',
              ].join(' ')
            )
          if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) {
            console.error(
              [
                'Popper: "arrow" modifier\'s `element` must be a child of the popper',
                'element.',
              ].join(' ')
            )
            return
          }
          state.elements.arrow = arrowElement
        } // eslint-disable-next-line import/no-unused-modules
        exports.default = {
          name: 'arrow',
          enabled: true,
          phase: 'main',
          fn: arrow,
          effect: effect,
          requires: ['popperOffsets'],
          requiresIfExists: ['preventOverflow'],
        }
      },
      {
        '../utils/getBasePlacement.js': '59Wp3',
        '../dom-utils/getLayoutRect.js': 'jvjuf',
        '../dom-utils/contains.js': '4QxRR',
        '../dom-utils/getOffsetParent.js': 'laoYw',
        '../utils/getMainAxisFromPlacement.js': '1Xlom',
        '../utils/within.js': '3glSz',
        '../utils/mergePaddingObject.js': 'lEIf9',
        '../utils/expandToHashMap.js': 'iQlH5',
        '../enums.js': 'lCAq5',
        '../dom-utils/instanceOf.js': 'gYFUC',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '59Wp3': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _enumsJs = require('../enums.js')
        function getBasePlacement(placement) {
          return placement.split('-')[0]
        }
        exports.default = getBasePlacement
      },
      { '../enums.js': 'lCAq5', '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    jvjuf: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getBoundingClientRectJs = require('./getBoundingClientRect.js') // Returns the layout rect of an element relative to its offsetParent. Layout
        var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs)
        function getLayoutRect(element) {
          var clientRect = (0, _getBoundingClientRectJsDefault.default)(element) // Use the clientRect sizes if it's not been transformed.
          // Fixes https://github.com/popperjs/popper-core/issues/1223
          var width = element.offsetWidth
          var height = element.offsetHeight
          if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width
          if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height
          return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: width,
            height: height,
          }
        }
        exports.default = getLayoutRect
      },
      {
        './getBoundingClientRect.js': '9CFSQ',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '9CFSQ': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _instanceOfJs = require('./instanceOf.js')
        var _mathJs = require('../utils/math.js')
        function getBoundingClientRect(element, includeScale) {
          if (includeScale === void 0) includeScale = false
          var rect = element.getBoundingClientRect()
          var scaleX = 1
          var scaleY = 1
          if ((0, _instanceOfJs.isHTMLElement)(element) && includeScale) {
            var offsetHeight = element.offsetHeight
            var offsetWidth = element.offsetWidth // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
            // Fallback to 1 in case both values are `0`
            if (offsetWidth > 0) scaleX = (0, _mathJs.round)(rect.width) / offsetWidth || 1
            if (offsetHeight > 0) scaleY = (0, _mathJs.round)(rect.height) / offsetHeight || 1
          }
          return {
            width: rect.width / scaleX,
            height: rect.height / scaleY,
            top: rect.top / scaleY,
            right: rect.right / scaleX,
            bottom: rect.bottom / scaleY,
            left: rect.left / scaleX,
            x: rect.left / scaleX,
            y: rect.top / scaleY,
          }
        }
        exports.default = getBoundingClientRect
      },
      {
        './instanceOf.js': 'gYFUC',
        '../utils/math.js': 'gQqVe',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    gQqVe: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        parcelHelpers.export(exports, 'max', () => max)
        parcelHelpers.export(exports, 'min', () => min)
        parcelHelpers.export(exports, 'round', () => round)
        var max = Math.max
        var min = Math.min
        var round = Math.round
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '4QxRR': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _instanceOfJs = require('./instanceOf.js')
        function contains(parent, child) {
          var rootNode = child.getRootNode && child.getRootNode() // First, attempt with faster native method
          if (parent.contains(child)) return true
          else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
            var next = child
            do {
              if (next && parent.isSameNode(next)) return true
              // $FlowFixMe[prop-missing]: need a better way to handle this...
              next = next.parentNode || next.host
            } while (next)
          } // Give up, the result is false
          return false
        }
        exports.default = contains
      },
      { './instanceOf.js': 'gYFUC', '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    laoYw: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getWindowJs = require('./getWindow.js')
        var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs)
        var _getNodeNameJs = require('./getNodeName.js')
        var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs)
        var _getComputedStyleJs = require('./getComputedStyle.js')
        var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs)
        var _instanceOfJs = require('./instanceOf.js')
        var _isTableElementJs = require('./isTableElement.js')
        var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs)
        var _getParentNodeJs = require('./getParentNode.js')
        var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs)
        function getTrueOffsetParent(element) {
          if (
            !(0, _instanceOfJs.isHTMLElement)(element) ||
            (0, _getComputedStyleJsDefault.default)(element).position === 'fixed'
          )
            return null
          return element.offsetParent
        } // `.offsetParent` reports `null` for fixed elements, while absolute elements
        // return the containing block
        function getContainingBlock(element) {
          var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1
          var isIE = navigator.userAgent.indexOf('Trident') !== -1
          if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
            // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
            var elementCss = (0, _getComputedStyleJsDefault.default)(element)
            if (elementCss.position === 'fixed') return null
          }
          var currentNode = (0, _getParentNodeJsDefault.default)(element)
          if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host
          while (
            (0, _instanceOfJs.isHTMLElement)(currentNode) &&
            ['html', 'body'].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0
          ) {
            var css = (0, _getComputedStyleJsDefault.default)(currentNode) // This is non-exhaustive but covers the most common CSS properties that
            // create a containing block.
            // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
            if (
              css.transform !== 'none' ||
              css.perspective !== 'none' ||
              css.contain === 'paint' ||
              ['transform', 'perspective'].indexOf(css.willChange) !== -1 ||
              (isFirefox && css.willChange === 'filter') ||
              (isFirefox && css.filter && css.filter !== 'none')
            )
              return currentNode
            else currentNode = currentNode.parentNode
          }
          return null
        } // Gets the closest ancestor positioned element. Handles some edge cases,
        function getOffsetParent(element) {
          var window = (0, _getWindowJsDefault.default)(element)
          var offsetParent = getTrueOffsetParent(element)
          while (
            offsetParent &&
            (0, _isTableElementJsDefault.default)(offsetParent) &&
            (0, _getComputedStyleJsDefault.default)(offsetParent).position === 'static'
          )
            offsetParent = getTrueOffsetParent(offsetParent)
          if (
            offsetParent &&
            ((0, _getNodeNameJsDefault.default)(offsetParent) === 'html' ||
              ((0, _getNodeNameJsDefault.default)(offsetParent) === 'body' &&
                (0, _getComputedStyleJsDefault.default)(offsetParent).position === 'static'))
          )
            return window
          return offsetParent || getContainingBlock(element) || window
        }
        exports.default = getOffsetParent
      },
      {
        './getWindow.js': '2SkOo',
        './getNodeName.js': 'a2Qom',
        './getComputedStyle.js': '3mZjB',
        './instanceOf.js': 'gYFUC',
        './isTableElement.js': '2qBb7',
        './getParentNode.js': 'bIHpd',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '3mZjB': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getWindowJs = require('./getWindow.js')
        var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs)
        function getComputedStyle(element) {
          return (0, _getWindowJsDefault.default)(element).getComputedStyle(element)
        }
        exports.default = getComputedStyle
      },
      { './getWindow.js': '2SkOo', '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '2qBb7': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getNodeNameJs = require('./getNodeName.js')
        var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs)
        function isTableElement(element) {
          return ['table', 'td', 'th'].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0
        }
        exports.default = isTableElement
      },
      { './getNodeName.js': 'a2Qom', '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    bIHpd: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getNodeNameJs = require('./getNodeName.js')
        var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs)
        var _getDocumentElementJs = require('./getDocumentElement.js')
        var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs)
        var _instanceOfJs = require('./instanceOf.js')
        function getParentNode(element) {
          if ((0, _getNodeNameJsDefault.default)(element) === 'html') return element
          return (
            // $FlowFixMe[incompatible-return]
            // $FlowFixMe[prop-missing]
            element.assignedSlot ||
            element.parentNode ||
            ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // $FlowFixMe[incompatible-call]: HTMLElement is a Node
            (0, _getDocumentElementJsDefault.default)(element) // fallback
          )
        }
        exports.default = getParentNode
      },
      {
        './getNodeName.js': 'a2Qom',
        './getDocumentElement.js': 'eJ9Y1',
        './instanceOf.js': 'gYFUC',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    eJ9Y1: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _instanceOfJs = require('./instanceOf.js')
        function getDocumentElement(element) {
          // $FlowFixMe[incompatible-return]: assume body is always available
          return (
            ((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) ||
            window.document
          ).documentElement
        }
        exports.default = getDocumentElement
      },
      { './instanceOf.js': 'gYFUC', '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '1Xlom': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function getMainAxisFromPlacement(placement) {
          return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y'
        }
        exports.default = getMainAxisFromPlacement
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '3glSz': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        parcelHelpers.export(exports, 'within', () => within)
        parcelHelpers.export(exports, 'withinMaxClamp', () => withinMaxClamp)
        var _mathJs = require('./math.js')
        function within(min, value, max) {
          return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max))
        }
        function withinMaxClamp(min, value, max) {
          var v = within(min, value, max)
          return v > max ? max : v
        }
      },
      { './math.js': 'gQqVe', '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    lEIf9: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getFreshSideObjectJs = require('./getFreshSideObject.js')
        var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs)
        function mergePaddingObject(paddingObject) {
          return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject)
        }
        exports.default = mergePaddingObject
      },
      {
        './getFreshSideObject.js': 'g4xOt',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    g4xOt: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function getFreshSideObject() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }
        }
        exports.default = getFreshSideObject
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    iQlH5: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function expandToHashMap(value, keys) {
          return keys.reduce(function (hashMap, key) {
            hashMap[key] = value
            return hashMap
          }, {})
        }
        exports.default = expandToHashMap
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    gDlm2: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        parcelHelpers.export(exports, 'mapToStyles', () => mapToStyles)
        var _enumsJs = require('../enums.js')
        var _getOffsetParentJs = require('../dom-utils/getOffsetParent.js')
        var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs)
        var _getWindowJs = require('../dom-utils/getWindow.js')
        var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs)
        var _getDocumentElementJs = require('../dom-utils/getDocumentElement.js')
        var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs)
        var _getComputedStyleJs = require('../dom-utils/getComputedStyle.js')
        var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs)
        var _getBasePlacementJs = require('../utils/getBasePlacement.js')
        var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs)
        var _getVariationJs = require('../utils/getVariation.js')
        var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs)
        var _mathJs = require('../utils/math.js') // eslint-disable-next-line import/no-unused-modules
        var unsetSides = {
          top: 'auto',
          right: 'auto',
          bottom: 'auto',
          left: 'auto',
        } // Round the offsets to the nearest suitable subpixel based on the DPR.
        // Zooming can change the DPR, but it seems to report a value that will
        // cleanly divide the values into the appropriate subpixels.
        function roundOffsetsByDPR(_ref) {
          var x = _ref.x,
            y = _ref.y
          var win = window
          var dpr = win.devicePixelRatio || 1
          return {
            x: (0, _mathJs.round)(x * dpr) / dpr || 0,
            y: (0, _mathJs.round)(y * dpr) / dpr || 0,
          }
        }
        function mapToStyles(_ref2) {
          var _Object$assign2
          var popper = _ref2.popper,
            popperRect = _ref2.popperRect,
            placement = _ref2.placement,
            variation = _ref2.variation,
            offsets = _ref2.offsets,
            position = _ref2.position,
            gpuAcceleration = _ref2.gpuAcceleration,
            adaptive = _ref2.adaptive,
            roundOffsets = _ref2.roundOffsets,
            isFixed = _ref2.isFixed
          var _offsets$x = offsets.x,
            x = _offsets$x === void 0 ? 0 : _offsets$x,
            _offsets$y = offsets.y,
            y = _offsets$y === void 0 ? 0 : _offsets$y
          var _ref3 =
            typeof roundOffsets === 'function'
              ? roundOffsets({
                  x: x,
                  y: y,
                })
              : {
                  x: x,
                  y: y,
                }
          x = _ref3.x
          y = _ref3.y
          var hasX = offsets.hasOwnProperty('x')
          var hasY = offsets.hasOwnProperty('y')
          var sideX = (0, _enumsJs.left)
          var sideY = (0, _enumsJs.top)
          var win = window
          if (adaptive) {
            var offsetParent = (0, _getOffsetParentJsDefault.default)(popper)
            var heightProp = 'clientHeight'
            var widthProp = 'clientWidth'
            if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
              offsetParent = (0, _getDocumentElementJsDefault.default)(popper)
              if (
                (0, _getComputedStyleJsDefault.default)(offsetParent).position !== 'static' &&
                position === 'absolute'
              ) {
                heightProp = 'scrollHeight'
                widthProp = 'scrollWidth'
              }
            } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
            offsetParent
            if (
              placement === (0, _enumsJs.top) ||
              ((placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) &&
                variation === (0, _enumsJs.end))
            ) {
              sideY = (0, _enumsJs.bottom)
              var offsetY =
                isFixed && offsetParent === win && win.visualViewport
                  ? win.visualViewport.height
                  : offsetParent[heightProp]
              y -= offsetY - popperRect.height
              y *= gpuAcceleration ? 1 : -1
            }
            if (
              placement === (0, _enumsJs.left) ||
              ((placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) &&
                variation === (0, _enumsJs.end))
            ) {
              sideX = (0, _enumsJs.right)
              var offsetX =
                isFixed && offsetParent === win && win.visualViewport
                  ? win.visualViewport.width
                  : offsetParent[widthProp]
              x -= offsetX - popperRect.width
              x *= gpuAcceleration ? 1 : -1
            }
          }
          var commonStyles = Object.assign(
            {
              position: position,
            },
            adaptive && unsetSides
          )
          var _ref4 =
            roundOffsets === true
              ? roundOffsetsByDPR({
                  x: x,
                  y: y,
                })
              : {
                  x: x,
                  y: y,
                }
          x = _ref4.x
          y = _ref4.y
          if (gpuAcceleration) {
            var _Object$assign
            return Object.assign(
              {},
              commonStyles,
              ((_Object$assign = {}),
              (_Object$assign[sideY] = hasY ? '0' : ''),
              (_Object$assign[sideX] = hasX ? '0' : ''),
              (_Object$assign.transform =
                (win.devicePixelRatio || 1) <= 1
                  ? 'translate(' + x + 'px, ' + y + 'px)'
                  : 'translate3d(' + x + 'px, ' + y + 'px, 0)'),
              _Object$assign)
            )
          }
          return Object.assign(
            {},
            commonStyles,
            ((_Object$assign2 = {}),
            (_Object$assign2[sideY] = hasY ? y + 'px' : ''),
            (_Object$assign2[sideX] = hasX ? x + 'px' : ''),
            (_Object$assign2.transform = ''),
            _Object$assign2)
          )
        }
        function computeStyles(_ref5) {
          var state = _ref5.state,
            options = _ref5.options
          var _options$gpuAccelerat = options.gpuAcceleration,
            gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
            _options$adaptive = options.adaptive,
            adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
            _options$roundOffsets = options.roundOffsets,
            roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets
          var transitionProperty =
            (0, _getComputedStyleJsDefault.default)(state.elements.popper).transitionProperty || ''
          if (
            adaptive &&
            ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
              return transitionProperty.indexOf(property) >= 0
            })
          )
            console.warn(
              [
                'Popper: Detected CSS transitions on at least one of the following',
                'CSS properties: "transform", "top", "right", "bottom", "left".',
                '\n\n',
                'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
                'for smooth transitions, or remove these properties from the CSS',
                'transition declaration on the popper element if only transitioning',
                'opacity or background-color for example.',
                '\n\n',
                'We recommend using the popper element as a wrapper around an inner',
                'element that can have any CSS property transitioned for animations.',
              ].join(' ')
            )
          var commonStyles = {
            placement: (0, _getBasePlacementJsDefault.default)(state.placement),
            variation: (0, _getVariationJsDefault.default)(state.placement),
            popper: state.elements.popper,
            popperRect: state.rects.popper,
            gpuAcceleration: gpuAcceleration,
            isFixed: state.options.strategy === 'fixed',
          }
          if (state.modifiersData.popperOffsets != null)
            state.styles.popper = Object.assign(
              {},
              state.styles.popper,
              mapToStyles(
                Object.assign({}, commonStyles, {
                  offsets: state.modifiersData.popperOffsets,
                  position: state.options.strategy,
                  adaptive: adaptive,
                  roundOffsets: roundOffsets,
                })
              )
            )
          if (state.modifiersData.arrow != null)
            state.styles.arrow = Object.assign(
              {},
              state.styles.arrow,
              mapToStyles(
                Object.assign({}, commonStyles, {
                  offsets: state.modifiersData.arrow,
                  position: 'absolute',
                  adaptive: false,
                  roundOffsets: roundOffsets,
                })
              )
            )
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            'data-popper-placement': state.placement,
          })
        } // eslint-disable-next-line import/no-unused-modules
        exports.default = {
          name: 'computeStyles',
          enabled: true,
          phase: 'beforeWrite',
          fn: computeStyles,
          data: {},
        }
      },
      {
        '../enums.js': 'lCAq5',
        '../dom-utils/getOffsetParent.js': 'laoYw',
        '../dom-utils/getWindow.js': '2SkOo',
        '../dom-utils/getDocumentElement.js': 'eJ9Y1',
        '../dom-utils/getComputedStyle.js': '3mZjB',
        '../utils/getBasePlacement.js': '59Wp3',
        '../utils/getVariation.js': 'hIo7Y',
        '../utils/math.js': 'gQqVe',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    hIo7Y: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function getVariation(placement) {
          return placement.split('-')[1]
        }
        exports.default = getVariation
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    hBKsL: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getWindowJs = require('../dom-utils/getWindow.js') // eslint-disable-next-line import/no-unused-modules
        var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs)
        var passive = {
          passive: true,
        }
        function effect(_ref) {
          var state = _ref.state,
            instance = _ref.instance,
            options = _ref.options
          var _options$scroll = options.scroll,
            scroll = _options$scroll === void 0 ? true : _options$scroll,
            _options$resize = options.resize,
            resize = _options$resize === void 0 ? true : _options$resize
          var window = (0, _getWindowJsDefault.default)(state.elements.popper)
          var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper)
          if (scroll)
            scrollParents.forEach(function (scrollParent) {
              scrollParent.addEventListener('scroll', instance.update, passive)
            })
          if (resize) window.addEventListener('resize', instance.update, passive)
          return function () {
            if (scroll)
              scrollParents.forEach(function (scrollParent) {
                scrollParent.removeEventListener('scroll', instance.update, passive)
              })
            if (resize) window.removeEventListener('resize', instance.update, passive)
          }
        } // eslint-disable-next-line import/no-unused-modules
        exports.default = {
          name: 'eventListeners',
          enabled: true,
          phase: 'write',
          fn: function fn() {},
          effect: effect,
          data: {},
        }
      },
      {
        '../dom-utils/getWindow.js': '2SkOo',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    fv5wq: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getOppositePlacementJs = require('../utils/getOppositePlacement.js')
        var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs)
        var _getBasePlacementJs = require('../utils/getBasePlacement.js')
        var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs)
        var _getOppositeVariationPlacementJs = require('../utils/getOppositeVariationPlacement.js')
        var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(
          _getOppositeVariationPlacementJs
        )
        var _detectOverflowJs = require('../utils/detectOverflow.js')
        var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs)
        var _computeAutoPlacementJs = require('../utils/computeAutoPlacement.js')
        var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs)
        var _enumsJs = require('../enums.js')
        var _getVariationJs = require('../utils/getVariation.js') // eslint-disable-next-line import/no-unused-modules
        var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs)
        function getExpandedFallbackPlacements(placement) {
          if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return []
          var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement)
          return [
            (0, _getOppositeVariationPlacementJsDefault.default)(placement),
            oppositePlacement,
            (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement),
          ]
        }
        function flip(_ref) {
          var state = _ref.state,
            options = _ref.options,
            name = _ref.name
          if (state.modifiersData[name]._skip) return
          var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
            specifiedFallbackPlacements = options.fallbackPlacements,
            padding = options.padding,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            _options$flipVariatio = options.flipVariations,
            flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
            allowedAutoPlacements = options.allowedAutoPlacements
          var preferredPlacement = state.options.placement
          var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement)
          var isBasePlacement = basePlacement === preferredPlacement
          var fallbackPlacements =
            specifiedFallbackPlacements ||
            (isBasePlacement || !flipVariations
              ? [(0, _getOppositePlacementJsDefault.default)(preferredPlacement)]
              : getExpandedFallbackPlacements(preferredPlacement))
          var placements = [preferredPlacement]
            .concat(fallbackPlacements)
            .reduce(function (acc, placement) {
              return acc.concat(
                (0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)
                  ? (0, _computeAutoPlacementJsDefault.default)(state, {
                      placement: placement,
                      boundary: boundary,
                      rootBoundary: rootBoundary,
                      padding: padding,
                      flipVariations: flipVariations,
                      allowedAutoPlacements: allowedAutoPlacements,
                    })
                  : placement
              )
            }, [])
          var referenceRect = state.rects.reference
          var popperRect = state.rects.popper
          var checksMap = new Map()
          var makeFallbackChecks = true
          var firstFittingPlacement = placements[0]
          for (var i = 0; i < placements.length; i++) {
            var placement1 = placements[i]
            var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement1)
            var isStartVariation =
              (0, _getVariationJsDefault.default)(placement1) === (0, _enumsJs.start)
            var isVertical = [(0, _enumsJs.top), (0, _enumsJs.bottom)].indexOf(_basePlacement) >= 0
            var len = isVertical ? 'width' : 'height'
            var overflow = (0, _detectOverflowJsDefault.default)(state, {
              placement: placement1,
              boundary: boundary,
              rootBoundary: rootBoundary,
              altBoundary: altBoundary,
              padding: padding,
            })
            var mainVariationSide = isVertical
              ? isStartVariation
                ? (0, _enumsJs.right)
                : (0, _enumsJs.left)
              : isStartVariation
              ? (0, _enumsJs.bottom)
              : (0, _enumsJs.top)
            if (referenceRect[len] > popperRect[len])
              mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide)
            var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide)
            var checks = []
            if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0)
            if (checkAltAxis)
              checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0)
            if (
              checks.every(function (check) {
                return check
              })
            ) {
              firstFittingPlacement = placement1
              makeFallbackChecks = false
              break
            }
            checksMap.set(placement1, checks)
          }
          if (makeFallbackChecks) {
            // `2` may be desired in some cases – research later
            var numberOfChecks = flipVariations ? 3 : 1
            var _loop = function _loop(_i) {
              var fittingPlacement = placements.find(function (placement) {
                var checks = checksMap.get(placement)
                if (checks)
                  return checks.slice(0, _i).every(function (check) {
                    return check
                  })
              })
              if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement
                return 'break'
              }
            }
            for (var _i1 = numberOfChecks; _i1 > 0; _i1--) {
              var _ret = _loop(_i1)
              if (_ret === 'break') break
            }
          }
          if (state.placement !== firstFittingPlacement) {
            state.modifiersData[name]._skip = true
            state.placement = firstFittingPlacement
            state.reset = true
          }
        } // eslint-disable-next-line import/no-unused-modules
        exports.default = {
          name: 'flip',
          enabled: true,
          phase: 'main',
          fn: flip,
          requiresIfExists: ['offset'],
          data: {
            _skip: false,
          },
        }
      },
      {
        '../utils/getOppositePlacement.js': 'a8CY0',
        '../utils/getBasePlacement.js': '59Wp3',
        '../utils/getOppositeVariationPlacement.js': 'bKTLC',
        '../utils/detectOverflow.js': 'ltCuw',
        '../utils/computeAutoPlacement.js': 'gytMj',
        '../enums.js': 'lCAq5',
        '../utils/getVariation.js': 'hIo7Y',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    a8CY0: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var hash = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom',
        }
        function getOppositePlacement(placement) {
          return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash[matched]
          })
        }
        exports.default = getOppositePlacement
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    bKTLC: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var hash = {
          start: 'end',
          end: 'start',
        }
        function getOppositeVariationPlacement(placement) {
          return placement.replace(/start|end/g, function (matched) {
            return hash[matched]
          })
        }
        exports.default = getOppositeVariationPlacement
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    ltCuw: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getClippingRectJs = require('../dom-utils/getClippingRect.js')
        var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs)
        var _getDocumentElementJs = require('../dom-utils/getDocumentElement.js')
        var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs)
        var _getBoundingClientRectJs = require('../dom-utils/getBoundingClientRect.js')
        var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs)
        var _computeOffsetsJs = require('./computeOffsets.js')
        var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs)
        var _rectToClientRectJs = require('./rectToClientRect.js')
        var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs)
        var _enumsJs = require('../enums.js')
        var _instanceOfJs = require('../dom-utils/instanceOf.js')
        var _mergePaddingObjectJs = require('./mergePaddingObject.js')
        var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs)
        var _expandToHashMapJs = require('./expandToHashMap.js') // eslint-disable-next-line import/no-unused-modules
        var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs)
        function detectOverflow(state, options) {
          if (options === void 0) options = {}
          var _options = options,
            _options$placement = _options.placement,
            placement = _options$placement === void 0 ? state.placement : _options$placement,
            _options$boundary = _options.boundary,
            boundary =
              _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary,
            _options$rootBoundary = _options.rootBoundary,
            rootBoundary =
              _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary,
            _options$elementConte = _options.elementContext,
            elementContext =
              _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte,
            _options$altBoundary = _options.altBoundary,
            altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
            _options$padding = _options.padding,
            padding = _options$padding === void 0 ? 0 : _options$padding
          var paddingObject = (0, _mergePaddingObjectJsDefault.default)(
            typeof padding !== 'number'
              ? padding
              : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements))
          )
          var altContext =
            elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper)
          var popperRect = state.rects.popper
          var element = state.elements[altBoundary ? altContext : elementContext]
          var clippingClientRect = (0, _getClippingRectJsDefault.default)(
            (0, _instanceOfJs.isElement)(element)
              ? element
              : element.contextElement ||
                  (0, _getDocumentElementJsDefault.default)(state.elements.popper),
            boundary,
            rootBoundary
          )
          var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(
            state.elements.reference
          )
          var popperOffsets = (0, _computeOffsetsJsDefault.default)({
            reference: referenceClientRect,
            element: popperRect,
            strategy: 'absolute',
            placement: placement,
          })
          var popperClientRect = (0, _rectToClientRectJsDefault.default)(
            Object.assign({}, popperRect, popperOffsets)
          )
          var elementClientRect =
            elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect // positive = overflowing the clipping rect
          // 0 or negative = within the clipping rect
          var overflowOffsets = {
            top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
            bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
            left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
            right: elementClientRect.right - clippingClientRect.right + paddingObject.right,
          }
          var offsetData = state.modifiersData.offset // Offsets can be applied only to the popper element
          if (elementContext === (0, _enumsJs.popper) && offsetData) {
            var offset = offsetData[placement]
            Object.keys(overflowOffsets).forEach(function (key) {
              var multiply = [(0, _enumsJs.right), (0, _enumsJs.bottom)].indexOf(key) >= 0 ? 1 : -1
              var axis = [(0, _enumsJs.top), (0, _enumsJs.bottom)].indexOf(key) >= 0 ? 'y' : 'x'
              overflowOffsets[key] += offset[axis] * multiply
            })
          }
          return overflowOffsets
        }
        exports.default = detectOverflow
      },
      {
        '../dom-utils/getClippingRect.js': 'eeg2s',
        '../dom-utils/getDocumentElement.js': 'eJ9Y1',
        '../dom-utils/getBoundingClientRect.js': '9CFSQ',
        './computeOffsets.js': '7jtXk',
        './rectToClientRect.js': 'cQ3tg',
        '../enums.js': 'lCAq5',
        '../dom-utils/instanceOf.js': 'gYFUC',
        './mergePaddingObject.js': 'lEIf9',
        './expandToHashMap.js': 'iQlH5',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    eeg2s: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _enumsJs = require('../enums.js')
        var _getViewportRectJs = require('./getViewportRect.js')
        var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs)
        var _getDocumentRectJs = require('./getDocumentRect.js')
        var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs)
        var _listScrollParentsJs = require('./listScrollParents.js')
        var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs)
        var _getOffsetParentJs = require('./getOffsetParent.js')
        var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs)
        var _getDocumentElementJs = require('./getDocumentElement.js')
        var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs)
        var _getComputedStyleJs = require('./getComputedStyle.js')
        var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs)
        var _instanceOfJs = require('./instanceOf.js')
        var _getBoundingClientRectJs = require('./getBoundingClientRect.js')
        var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs)
        var _getParentNodeJs = require('./getParentNode.js')
        var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs)
        var _containsJs = require('./contains.js')
        var _containsJsDefault = parcelHelpers.interopDefault(_containsJs)
        var _getNodeNameJs = require('./getNodeName.js')
        var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs)
        var _rectToClientRectJs = require('../utils/rectToClientRect.js')
        var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs)
        var _mathJs = require('../utils/math.js')
        function getInnerBoundingClientRect(element) {
          var rect = (0, _getBoundingClientRectJsDefault.default)(element)
          rect.top = rect.top + element.clientTop
          rect.left = rect.left + element.clientLeft
          rect.bottom = rect.top + element.clientHeight
          rect.right = rect.left + element.clientWidth
          rect.width = element.clientWidth
          rect.height = element.clientHeight
          rect.x = rect.left
          rect.y = rect.top
          return rect
        }
        function getClientRectFromMixedType(element, clippingParent) {
          return clippingParent === (0, _enumsJs.viewport)
            ? (0, _rectToClientRectJsDefault.default)(
                (0, _getViewportRectJsDefault.default)(element)
              )
            : (0, _instanceOfJs.isElement)(clippingParent)
            ? getInnerBoundingClientRect(clippingParent)
            : (0, _rectToClientRectJsDefault.default)(
                (0, _getDocumentRectJsDefault.default)(
                  (0, _getDocumentElementJsDefault.default)(element)
                )
              )
        } // A "clipping parent" is an overflowable container with the characteristic of
        // clipping (or hiding) overflowing elements with a position different from
        // `initial`
        function getClippingParents(element) {
          var clippingParents = (0, _listScrollParentsJsDefault.default)(
            (0, _getParentNodeJsDefault.default)(element)
          )
          var canEscapeClipping =
            ['absolute', 'fixed'].indexOf(
              (0, _getComputedStyleJsDefault.default)(element).position
            ) >= 0
          var clipperElement =
            canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element)
              ? (0, _getOffsetParentJsDefault.default)(element)
              : element
          if (!(0, _instanceOfJs.isElement)(clipperElement)) return []
          // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
          return clippingParents.filter(function (clippingParent) {
            return (
              (0, _instanceOfJs.isElement)(clippingParent) &&
              (0, _containsJsDefault.default)(clippingParent, clipperElement) &&
              (0, _getNodeNameJsDefault.default)(clippingParent) !== 'body'
            )
          })
        } // Gets the maximum area that the element is visible in due to any number of
        function getClippingRect(element, boundary, rootBoundary) {
          var mainClippingParents =
            boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary)
          var clippingParents = [].concat(mainClippingParents, [rootBoundary])
          var firstClippingParent = clippingParents[0]
          var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
            var rect = getClientRectFromMixedType(element, clippingParent)
            accRect.top = (0, _mathJs.max)(rect.top, accRect.top)
            accRect.right = (0, _mathJs.min)(rect.right, accRect.right)
            accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom)
            accRect.left = (0, _mathJs.max)(rect.left, accRect.left)
            return accRect
          }, getClientRectFromMixedType(element, firstClippingParent))
          clippingRect.width = clippingRect.right - clippingRect.left
          clippingRect.height = clippingRect.bottom - clippingRect.top
          clippingRect.x = clippingRect.left
          clippingRect.y = clippingRect.top
          return clippingRect
        }
        exports.default = getClippingRect
      },
      {
        '../enums.js': 'lCAq5',
        './getViewportRect.js': 'cnH2G',
        './getDocumentRect.js': 'd94SC',
        './listScrollParents.js': '2di3T',
        './getOffsetParent.js': 'laoYw',
        './getDocumentElement.js': 'eJ9Y1',
        './getComputedStyle.js': '3mZjB',
        './instanceOf.js': 'gYFUC',
        './getBoundingClientRect.js': '9CFSQ',
        './getParentNode.js': 'bIHpd',
        './contains.js': '4QxRR',
        './getNodeName.js': 'a2Qom',
        '../utils/rectToClientRect.js': 'cQ3tg',
        '../utils/math.js': 'gQqVe',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    cnH2G: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getWindowJs = require('./getWindow.js')
        var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs)
        var _getDocumentElementJs = require('./getDocumentElement.js')
        var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs)
        var _getWindowScrollBarXJs = require('./getWindowScrollBarX.js')
        var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs)
        function getViewportRect(element) {
          var win = (0, _getWindowJsDefault.default)(element)
          var html = (0, _getDocumentElementJsDefault.default)(element)
          var visualViewport = win.visualViewport
          var width = html.clientWidth
          var height = html.clientHeight
          var x = 0
          var y = 0 // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
          // can be obscured underneath it.
          // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
          // if it isn't open, so if this isn't available, the popper will be detected
          // to overflow the bottom of the screen too early.
          if (visualViewport) {
            width = visualViewport.width
            height = visualViewport.height // Uses Layout Viewport (like Chrome; Safari does not currently)
            // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
            // errors due to floating point numbers, so we need to check precision.
            // Safari returns a number <= 0, usually < -1 when pinch-zoomed
            // Feature detection fails in mobile emulation mode in Chrome.
            // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
            // 0.001
            // Fallback here: "Not Safari" userAgent
            if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
              x = visualViewport.offsetLeft
              y = visualViewport.offsetTop
            }
          }
          return {
            width: width,
            height: height,
            x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
            y: y,
          }
        }
        exports.default = getViewportRect
      },
      {
        './getWindow.js': '2SkOo',
        './getDocumentElement.js': 'eJ9Y1',
        './getWindowScrollBarX.js': 'sz4Ld',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    sz4Ld: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getBoundingClientRectJs = require('./getBoundingClientRect.js')
        var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs)
        var _getDocumentElementJs = require('./getDocumentElement.js')
        var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs)
        var _getWindowScrollJs = require('./getWindowScroll.js')
        var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs)
        function getWindowScrollBarX(element) {
          // If <html> has a CSS width greater than the viewport, then this will be
          // incorrect for RTL.
          // Popper 1 is broken in this case and never had a bug report so let's assume
          // it's not an issue. I don't think anyone ever specifies width on <html>
          // anyway.
          // Browsers where the left scrollbar doesn't cause an issue report `0` for
          // this (e.g. Edge 2019, IE11, Safari)
          return (
            (0, _getBoundingClientRectJsDefault.default)(
              (0, _getDocumentElementJsDefault.default)(element)
            ).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft
          )
        }
        exports.default = getWindowScrollBarX
      },
      {
        './getBoundingClientRect.js': '9CFSQ',
        './getDocumentElement.js': 'eJ9Y1',
        './getWindowScroll.js': '1XUtN',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '1XUtN': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getWindowJs = require('./getWindow.js')
        var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs)
        function getWindowScroll(node) {
          var win = (0, _getWindowJsDefault.default)(node)
          var scrollLeft = win.pageXOffset
          var scrollTop = win.pageYOffset
          return {
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
          }
        }
        exports.default = getWindowScroll
      },
      { './getWindow.js': '2SkOo', '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    d94SC: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getDocumentElementJs = require('./getDocumentElement.js')
        var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs)
        var _getComputedStyleJs = require('./getComputedStyle.js')
        var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs)
        var _getWindowScrollBarXJs = require('./getWindowScrollBarX.js')
        var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs)
        var _getWindowScrollJs = require('./getWindowScroll.js')
        var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs)
        var _mathJs = require('../utils/math.js') // Gets the entire size of the scrollable document area, even extending outside
        function getDocumentRect(element) {
          var _element$ownerDocumen
          var html = (0, _getDocumentElementJsDefault.default)(element)
          var winScroll = (0, _getWindowScrollJsDefault.default)(element)
          var body =
            (_element$ownerDocumen = element.ownerDocument) == null
              ? void 0
              : _element$ownerDocumen.body
          var width = (0, _mathJs.max)(
            html.scrollWidth,
            html.clientWidth,
            body ? body.scrollWidth : 0,
            body ? body.clientWidth : 0
          )
          var height = (0, _mathJs.max)(
            html.scrollHeight,
            html.clientHeight,
            body ? body.scrollHeight : 0,
            body ? body.clientHeight : 0
          )
          var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element)
          var y = -winScroll.scrollTop
          if ((0, _getComputedStyleJsDefault.default)(body || html).direction === 'rtl')
            x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width
          return {
            width: width,
            height: height,
            x: x,
            y: y,
          }
        }
        exports.default = getDocumentRect
      },
      {
        './getDocumentElement.js': 'eJ9Y1',
        './getComputedStyle.js': '3mZjB',
        './getWindowScrollBarX.js': 'sz4Ld',
        './getWindowScroll.js': '1XUtN',
        '../utils/math.js': 'gQqVe',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '2di3T': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getScrollParentJs = require('./getScrollParent.js')
        var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs)
        var _getParentNodeJs = require('./getParentNode.js')
        var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs)
        var _getWindowJs = require('./getWindow.js')
        var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs)
        var _isScrollParentJs = require('./isScrollParent.js')
        var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs)
        function listScrollParents(element, list) {
          var _element$ownerDocumen
          if (list === void 0) list = []
          var scrollParent = (0, _getScrollParentJsDefault.default)(element)
          var isBody =
            scrollParent ===
            ((_element$ownerDocumen = element.ownerDocument) == null
              ? void 0
              : _element$ownerDocumen.body)
          var win = (0, _getWindowJsDefault.default)(scrollParent)
          var target = isBody
            ? [win].concat(
                win.visualViewport || [],
                (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []
              )
            : scrollParent
          var updatedList = list.concat(target)
          return isBody
            ? updatedList
            : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)))
        }
        exports.default = listScrollParents
      },
      {
        './getScrollParent.js': 'jy4ZS',
        './getParentNode.js': 'bIHpd',
        './getWindow.js': '2SkOo',
        './isScrollParent.js': '9rLGO',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    jy4ZS: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getParentNodeJs = require('./getParentNode.js')
        var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs)
        var _isScrollParentJs = require('./isScrollParent.js')
        var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs)
        var _getNodeNameJs = require('./getNodeName.js')
        var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs)
        var _instanceOfJs = require('./instanceOf.js')
        function getScrollParent(node) {
          if (['html', 'body', '#document'].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0)
            // $FlowFixMe[incompatible-return]: assume body is always available
            return node.ownerDocument.body
          if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node))
            return node
          return getScrollParent((0, _getParentNodeJsDefault.default)(node))
        }
        exports.default = getScrollParent
      },
      {
        './getParentNode.js': 'bIHpd',
        './isScrollParent.js': '9rLGO',
        './getNodeName.js': 'a2Qom',
        './instanceOf.js': 'gYFUC',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '9rLGO': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getComputedStyleJs = require('./getComputedStyle.js')
        var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs)
        function isScrollParent(element) {
          // Firefox wants us to check `-x` and `-y` variations as well
          var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element),
            overflow = _getComputedStyle.overflow,
            overflowX = _getComputedStyle.overflowX,
            overflowY = _getComputedStyle.overflowY
          return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)
        }
        exports.default = isScrollParent
      },
      {
        './getComputedStyle.js': '3mZjB',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    cQ3tg: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function rectToClientRect(rect) {
          return Object.assign({}, rect, {
            left: rect.x,
            top: rect.y,
            right: rect.x + rect.width,
            bottom: rect.y + rect.height,
          })
        }
        exports.default = rectToClientRect
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '7jtXk': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getBasePlacementJs = require('./getBasePlacement.js')
        var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs)
        var _getVariationJs = require('./getVariation.js')
        var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs)
        var _getMainAxisFromPlacementJs = require('./getMainAxisFromPlacement.js')
        var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(
          _getMainAxisFromPlacementJs
        )
        var _enumsJs = require('../enums.js')
        function computeOffsets(_ref) {
          var reference = _ref.reference,
            element = _ref.element,
            placement = _ref.placement
          var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null
          var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null
          var commonX = reference.x + reference.width / 2 - element.width / 2
          var commonY = reference.y + reference.height / 2 - element.height / 2
          var offsets
          switch (basePlacement) {
            case (0, _enumsJs.top):
              offsets = {
                x: commonX,
                y: reference.y - element.height,
              }
              break
            case (0, _enumsJs.bottom):
              offsets = {
                x: commonX,
                y: reference.y + reference.height,
              }
              break
            case (0, _enumsJs.right):
              offsets = {
                x: reference.x + reference.width,
                y: commonY,
              }
              break
            case (0, _enumsJs.left):
              offsets = {
                x: reference.x - element.width,
                y: commonY,
              }
              break
            default:
              offsets = {
                x: reference.x,
                y: reference.y,
              }
          }
          var mainAxis = basePlacement
            ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement)
            : null
          if (mainAxis != null) {
            var len = mainAxis === 'y' ? 'height' : 'width'
            switch (variation) {
              case (0, _enumsJs.start):
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2)
                break
              case (0, _enumsJs.end):
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2)
                break
              default:
            }
          }
          return offsets
        }
        exports.default = computeOffsets
      },
      {
        './getBasePlacement.js': '59Wp3',
        './getVariation.js': 'hIo7Y',
        './getMainAxisFromPlacement.js': '1Xlom',
        '../enums.js': 'lCAq5',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    gytMj: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getVariationJs = require('./getVariation.js')
        var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs)
        var _enumsJs = require('../enums.js')
        var _detectOverflowJs = require('./detectOverflow.js')
        var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs)
        var _getBasePlacementJs = require('./getBasePlacement.js')
        var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs)
        function computeAutoPlacement(state, options) {
          if (options === void 0) options = {}
          var _options = options,
            placement1 = _options.placement,
            boundary = _options.boundary,
            rootBoundary = _options.rootBoundary,
            padding = _options.padding,
            flipVariations = _options.flipVariations,
            _options$allowedAutoP = _options.allowedAutoPlacements,
            allowedAutoPlacements =
              _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP
          var variation = (0, _getVariationJsDefault.default)(placement1)
          var placements = variation
            ? flipVariations
              ? (0, _enumsJs.variationPlacements)
              : (0, _enumsJs.variationPlacements).filter(function (placement) {
                  return (0, _getVariationJsDefault.default)(placement) === variation
                })
            : (0, _enumsJs.basePlacements)
          var allowedPlacements = placements.filter(function (placement) {
            return allowedAutoPlacements.indexOf(placement) >= 0
          })
          if (allowedPlacements.length === 0) {
            allowedPlacements = placements
            console.error(
              [
                'Popper: The `allowedAutoPlacements` option did not allow any',
                'placements. Ensure the `placement` option matches the variation',
                'of the allowed placements.',
                'For example, "auto" cannot be used to allow "bottom-start".',
                'Use "auto-start" instead.',
              ].join(' ')
            )
          } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
          var overflows = allowedPlacements.reduce(function (acc, placement) {
            acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding,
            })[(0, _getBasePlacementJsDefault.default)(placement)]
            return acc
          }, {})
          return Object.keys(overflows).sort(function (a, b) {
            return overflows[a] - overflows[b]
          })
        }
        exports.default = computeAutoPlacement
      },
      {
        './getVariation.js': 'hIo7Y',
        '../enums.js': 'lCAq5',
        './detectOverflow.js': 'ltCuw',
        './getBasePlacement.js': '59Wp3',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '2g4OF': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _enumsJs = require('../enums.js')
        var _detectOverflowJs = require('../utils/detectOverflow.js')
        var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs)
        function getSideOffsets(overflow, rect, preventedOffsets) {
          if (preventedOffsets === void 0)
            preventedOffsets = {
              x: 0,
              y: 0,
            }
          return {
            top: overflow.top - rect.height - preventedOffsets.y,
            right: overflow.right - rect.width + preventedOffsets.x,
            bottom: overflow.bottom - rect.height + preventedOffsets.y,
            left: overflow.left - rect.width - preventedOffsets.x,
          }
        }
        function isAnySideFullyClipped(overflow) {
          return [
            (0, _enumsJs.top),
            (0, _enumsJs.right),
            (0, _enumsJs.bottom),
            (0, _enumsJs.left),
          ].some(function (side) {
            return overflow[side] >= 0
          })
        }
        function hide(_ref) {
          var state = _ref.state,
            name = _ref.name
          var referenceRect = state.rects.reference
          var popperRect = state.rects.popper
          var preventedOffsets = state.modifiersData.preventOverflow
          var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
            elementContext: 'reference',
          })
          var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
            altBoundary: true,
          })
          var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect)
          var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets)
          var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets)
          var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets)
          state.modifiersData[name] = {
            referenceClippingOffsets: referenceClippingOffsets,
            popperEscapeOffsets: popperEscapeOffsets,
            isReferenceHidden: isReferenceHidden,
            hasPopperEscaped: hasPopperEscaped,
          }
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            'data-popper-reference-hidden': isReferenceHidden,
            'data-popper-escaped': hasPopperEscaped,
          })
        } // eslint-disable-next-line import/no-unused-modules
        exports.default = {
          name: 'hide',
          enabled: true,
          phase: 'main',
          requiresIfExists: ['preventOverflow'],
          fn: hide,
        }
      },
      {
        '../enums.js': 'lCAq5',
        '../utils/detectOverflow.js': 'ltCuw',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '3GKVY': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        parcelHelpers.export(exports, 'distanceAndSkiddingToXY', () => distanceAndSkiddingToXY)
        var _getBasePlacementJs = require('../utils/getBasePlacement.js')
        var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs)
        var _enumsJs = require('../enums.js') // eslint-disable-next-line import/no-unused-modules
        function distanceAndSkiddingToXY(placement, rects, offset1) {
          var basePlacement = (0, _getBasePlacementJsDefault.default)(placement)
          var invertDistance =
            [(0, _enumsJs.left), (0, _enumsJs.top)].indexOf(basePlacement) >= 0 ? -1 : 1
          var _ref =
              typeof offset1 === 'function'
                ? offset1(
                    Object.assign({}, rects, {
                      placement: placement,
                    })
                  )
                : offset1,
            skidding = _ref[0],
            distance = _ref[1]
          skidding = skidding || 0
          distance = (distance || 0) * invertDistance
          return [(0, _enumsJs.left), (0, _enumsJs.right)].indexOf(basePlacement) >= 0
            ? {
                x: distance,
                y: skidding,
              }
            : {
                x: skidding,
                y: distance,
              }
        }
        function offset(_ref2) {
          var state = _ref2.state,
            options = _ref2.options,
            name = _ref2.name
          var _options$offset = options.offset,
            offset2 = _options$offset === void 0 ? [0, 0] : _options$offset
          var data = (0, _enumsJs.placements).reduce(function (acc, placement) {
            acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2)
            return acc
          }, {})
          var _data$state$placement = data[state.placement],
            x = _data$state$placement.x,
            y = _data$state$placement.y
          if (state.modifiersData.popperOffsets != null) {
            state.modifiersData.popperOffsets.x += x
            state.modifiersData.popperOffsets.y += y
          }
          state.modifiersData[name] = data
        } // eslint-disable-next-line import/no-unused-modules
        exports.default = {
          name: 'offset',
          enabled: true,
          phase: 'main',
          requires: ['popperOffsets'],
          fn: offset,
        }
      },
      {
        '../utils/getBasePlacement.js': '59Wp3',
        '../enums.js': 'lCAq5',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '6I679': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _computeOffsetsJs = require('../utils/computeOffsets.js')
        var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs)
        function popperOffsets(_ref) {
          var state = _ref.state,
            name = _ref.name
          // Offsets are the actual position the popper needs to have to be
          // properly positioned near its reference element
          // This is the most basic placement, and will be adjusted by
          // the modifiers in the next step
          state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
            reference: state.rects.reference,
            element: state.rects.popper,
            strategy: 'absolute',
            placement: state.placement,
          })
        } // eslint-disable-next-line import/no-unused-modules
        exports.default = {
          name: 'popperOffsets',
          enabled: true,
          phase: 'read',
          fn: popperOffsets,
          data: {},
        }
      },
      {
        '../utils/computeOffsets.js': '7jtXk',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '1AMhb': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _enumsJs = require('../enums.js')
        var _getBasePlacementJs = require('../utils/getBasePlacement.js')
        var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs)
        var _getMainAxisFromPlacementJs = require('../utils/getMainAxisFromPlacement.js')
        var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(
          _getMainAxisFromPlacementJs
        )
        var _getAltAxisJs = require('../utils/getAltAxis.js')
        var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs)
        var _withinJs = require('../utils/within.js')
        var _getLayoutRectJs = require('../dom-utils/getLayoutRect.js')
        var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs)
        var _getOffsetParentJs = require('../dom-utils/getOffsetParent.js')
        var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs)
        var _detectOverflowJs = require('../utils/detectOverflow.js')
        var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs)
        var _getVariationJs = require('../utils/getVariation.js')
        var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs)
        var _getFreshSideObjectJs = require('../utils/getFreshSideObject.js')
        var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs)
        var _mathJs = require('../utils/math.js')
        function preventOverflow(_ref) {
          var state = _ref.state,
            options = _ref.options,
            name = _ref.name
          var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            padding = options.padding,
            _options$tether = options.tether,
            tether = _options$tether === void 0 ? true : _options$tether,
            _options$tetherOffset = options.tetherOffset,
            tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset
          var overflow = (0, _detectOverflowJsDefault.default)(state, {
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            altBoundary: altBoundary,
          })
          var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement)
          var variation = (0, _getVariationJsDefault.default)(state.placement)
          var isBasePlacement = !variation
          var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement)
          var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis)
          var popperOffsets = state.modifiersData.popperOffsets
          var referenceRect = state.rects.reference
          var popperRect = state.rects.popper
          var tetherOffsetValue =
            typeof tetherOffset === 'function'
              ? tetherOffset(
                  Object.assign({}, state.rects, {
                    placement: state.placement,
                  })
                )
              : tetherOffset
          var normalizedTetherOffsetValue =
            typeof tetherOffsetValue === 'number'
              ? {
                  mainAxis: tetherOffsetValue,
                  altAxis: tetherOffsetValue,
                }
              : Object.assign(
                  {
                    mainAxis: 0,
                    altAxis: 0,
                  },
                  tetherOffsetValue
                )
          var offsetModifierState = state.modifiersData.offset
            ? state.modifiersData.offset[state.placement]
            : null
          var data = {
            x: 0,
            y: 0,
          }
          if (!popperOffsets) return
          if (checkMainAxis) {
            var _offsetModifierState$
            var mainSide = mainAxis === 'y' ? (0, _enumsJs.top) : (0, _enumsJs.left)
            var altSide = mainAxis === 'y' ? (0, _enumsJs.bottom) : (0, _enumsJs.right)
            var len = mainAxis === 'y' ? 'height' : 'width'
            var offset = popperOffsets[mainAxis]
            var min = offset + overflow[mainSide]
            var max = offset - overflow[altSide]
            var additive = tether ? -popperRect[len] / 2 : 0
            var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len]
            var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len] // We need to include the arrow in the calculation so the arrow doesn't go
            // outside the reference bounds
            var arrowElement = state.elements.arrow
            var arrowRect =
              tether && arrowElement
                ? (0, _getLayoutRectJsDefault.default)(arrowElement)
                : {
                    width: 0,
                    height: 0,
                  }
            var arrowPaddingObject = state.modifiersData['arrow#persistent']
              ? state.modifiersData['arrow#persistent'].padding
              : (0, _getFreshSideObjectJsDefault.default)()
            var arrowPaddingMin = arrowPaddingObject[mainSide]
            var arrowPaddingMax = arrowPaddingObject[altSide] // If the reference length is smaller than the arrow length, we don't want
            // to include its full size in the calculation. If the reference is small
            // and near the edge of a boundary, the popper can overflow even if the
            // reference is not overflowing as well (e.g. virtual elements with no
            // width or height)
            var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len])
            var minOffset = isBasePlacement
              ? referenceRect[len] / 2 -
                additive -
                arrowLen -
                arrowPaddingMin -
                normalizedTetherOffsetValue.mainAxis
              : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis
            var maxOffset = isBasePlacement
              ? -referenceRect[len] / 2 +
                additive +
                arrowLen +
                arrowPaddingMax +
                normalizedTetherOffsetValue.mainAxis
              : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis
            var arrowOffsetParent =
              state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow)
            var clientOffset = arrowOffsetParent
              ? mainAxis === 'y'
                ? arrowOffsetParent.clientTop || 0
                : arrowOffsetParent.clientLeft || 0
              : 0
            var offsetModifierValue =
              (_offsetModifierState$ =
                offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null
                ? _offsetModifierState$
                : 0
            var tetherMin = offset + minOffset - offsetModifierValue - clientOffset
            var tetherMax = offset + maxOffset - offsetModifierValue
            var preventedOffset = (0, _withinJs.within)(
              tether ? (0, _mathJs.min)(min, tetherMin) : min,
              offset,
              tether ? (0, _mathJs.max)(max, tetherMax) : max
            )
            popperOffsets[mainAxis] = preventedOffset
            data[mainAxis] = preventedOffset - offset
          }
          if (checkAltAxis) {
            var _offsetModifierState$2
            var _mainSide = mainAxis === 'x' ? (0, _enumsJs.top) : (0, _enumsJs.left)
            var _altSide = mainAxis === 'x' ? (0, _enumsJs.bottom) : (0, _enumsJs.right)
            var _offset = popperOffsets[altAxis]
            var _len = altAxis === 'y' ? 'height' : 'width'
            var _min = _offset + overflow[_mainSide]
            var _max = _offset - overflow[_altSide]
            var isOriginSide = [(0, _enumsJs.top), (0, _enumsJs.left)].indexOf(basePlacement) !== -1
            var _offsetModifierValue =
              (_offsetModifierState$2 =
                offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null
                ? _offsetModifierState$2
                : 0
            var _tetherMin = isOriginSide
              ? _min
              : _offset -
                referenceRect[_len] -
                popperRect[_len] -
                _offsetModifierValue +
                normalizedTetherOffsetValue.altAxis
            var _tetherMax = isOriginSide
              ? _offset +
                referenceRect[_len] +
                popperRect[_len] -
                _offsetModifierValue -
                normalizedTetherOffsetValue.altAxis
              : _max
            var _preventedOffset =
              tether && isOriginSide
                ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax)
                : (0, _withinJs.within)(
                    tether ? _tetherMin : _min,
                    _offset,
                    tether ? _tetherMax : _max
                  )
            popperOffsets[altAxis] = _preventedOffset
            data[altAxis] = _preventedOffset - _offset
          }
          state.modifiersData[name] = data
        } // eslint-disable-next-line import/no-unused-modules
        exports.default = {
          name: 'preventOverflow',
          enabled: true,
          phase: 'main',
          fn: preventOverflow,
          requiresIfExists: ['offset'],
        }
      },
      {
        '../enums.js': 'lCAq5',
        '../utils/getBasePlacement.js': '59Wp3',
        '../utils/getMainAxisFromPlacement.js': '1Xlom',
        '../utils/getAltAxis.js': '59FWE',
        '../utils/within.js': '3glSz',
        '../dom-utils/getLayoutRect.js': 'jvjuf',
        '../dom-utils/getOffsetParent.js': 'laoYw',
        '../utils/detectOverflow.js': 'ltCuw',
        '../utils/getVariation.js': 'hIo7Y',
        '../utils/getFreshSideObject.js': 'g4xOt',
        '../utils/math.js': 'gQqVe',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '59FWE': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function getAltAxis(axis) {
          return axis === 'x' ? 'y' : 'x'
        }
        exports.default = getAltAxis
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    cHuNp: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        parcelHelpers.export(exports, 'popperGenerator', () => popperGenerator)
        parcelHelpers.export(exports, 'createPopper', () => createPopper)
        parcelHelpers.export(exports, 'detectOverflow', () => (0, _detectOverflowJsDefault.default))
        var _getCompositeRectJs = require('./dom-utils/getCompositeRect.js')
        var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs)
        var _getLayoutRectJs = require('./dom-utils/getLayoutRect.js')
        var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs)
        var _listScrollParentsJs = require('./dom-utils/listScrollParents.js')
        var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs)
        var _getOffsetParentJs = require('./dom-utils/getOffsetParent.js')
        var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs)
        var _getComputedStyleJs = require('./dom-utils/getComputedStyle.js')
        var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs)
        var _orderModifiersJs = require('./utils/orderModifiers.js')
        var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs)
        var _debounceJs = require('./utils/debounce.js')
        var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs)
        var _validateModifiersJs = require('./utils/validateModifiers.js')
        var _validateModifiersJsDefault = parcelHelpers.interopDefault(_validateModifiersJs)
        var _uniqueByJs = require('./utils/uniqueBy.js')
        var _uniqueByJsDefault = parcelHelpers.interopDefault(_uniqueByJs)
        var _getBasePlacementJs = require('./utils/getBasePlacement.js')
        var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs)
        var _mergeByNameJs = require('./utils/mergeByName.js')
        var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs)
        var _detectOverflowJs = require('./utils/detectOverflow.js')
        var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs)
        var _instanceOfJs = require('./dom-utils/instanceOf.js')
        var _enumsJs = require('./enums.js')
        var INVALID_ELEMENT_ERROR =
          'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.'
        var INFINITE_LOOP_ERROR =
          'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.'
        var DEFAULT_OPTIONS = {
          placement: 'bottom',
          modifiers: [],
          strategy: 'absolute',
        }
        function areValidElements() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
            args[_key] = arguments[_key]
          return !args.some(function (element) {
            return !(element && typeof element.getBoundingClientRect === 'function')
          })
        }
        function popperGenerator(generatorOptions) {
          if (generatorOptions === void 0) generatorOptions = {}
          var _generatorOptions = generatorOptions,
            _generatorOptions$def = _generatorOptions.defaultModifiers,
            defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
            _generatorOptions$def2 = _generatorOptions.defaultOptions,
            defaultOptions =
              _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2
          return function createPopper(reference1, popper1, options1) {
            if (options1 === void 0) options1 = defaultOptions
            var state1 = {
              placement: 'bottom',
              orderedModifiers: [],
              options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
              modifiersData: {},
              elements: {
                reference: reference1,
                popper: popper1,
              },
              attributes: {},
              styles: {},
            }
            var effectCleanupFns = []
            var isDestroyed = false
            var instance = {
              state: state1,
              setOptions: function setOptions(setOptionsAction) {
                var options =
                  typeof setOptionsAction === 'function'
                    ? setOptionsAction(state1.options)
                    : setOptionsAction
                cleanupModifierEffects()
                state1.options = Object.assign({}, defaultOptions, state1.options, options)
                state1.scrollParents = {
                  reference: (0, _instanceOfJs.isElement)(reference1)
                    ? (0, _listScrollParentsJsDefault.default)(reference1)
                    : reference1.contextElement
                    ? (0, _listScrollParentsJsDefault.default)(reference1.contextElement)
                    : [],
                  popper: (0, _listScrollParentsJsDefault.default)(popper1),
                } // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)(
                  (0, _mergeByNameJsDefault.default)(
                    [].concat(defaultModifiers, state1.options.modifiers)
                  )
                ) // Strip out disabled modifiers
                state1.orderedModifiers = orderedModifiers.filter(function (m) {
                  return m.enabled
                }) // Validate the provided modifiers so that the consumer will get warned
                var modifiers = (0, _uniqueByJsDefault.default)(
                  [].concat(orderedModifiers, state1.options.modifiers),
                  function (_ref) {
                    var name = _ref.name
                    return name
                  }
                )
                ;(0, _validateModifiersJsDefault.default)(modifiers)
                if (
                  (0, _getBasePlacementJsDefault.default)(state1.options.placement) ===
                  (0, _enumsJs.auto)
                ) {
                  var flipModifier = state1.orderedModifiers.find(function (_ref2) {
                    var name = _ref2.name
                    return name === 'flip'
                  })
                  if (!flipModifier)
                    console.error(
                      [
                        'Popper: "auto" placements require the "flip" modifier be',
                        'present and enabled to work.',
                      ].join(' ')
                    )
                }
                var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(popper1),
                  marginTop = _getComputedStyle.marginTop,
                  marginRight = _getComputedStyle.marginRight,
                  marginBottom = _getComputedStyle.marginBottom,
                  marginLeft = _getComputedStyle.marginLeft // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if (
                  [marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
                    return parseFloat(margin)
                  })
                )
                  console.warn(
                    [
                      'Popper: CSS "margin" styles cannot be used to apply padding',
                      'between the popper and its reference element or boundary.',
                      'To replicate margin, use the `offset` modifier, as well as',
                      'the `padding` option in the `preventOverflow` and `flip`',
                      'modifiers.',
                    ].join(' ')
                  )
                runModifierEffects()
                return instance.update()
              },
              // Sync update – it will always be executed, even if not necessary. This
              // is useful for low frequency updates where sync behavior simplifies the
              // logic.
              // For high frequency updates (e.g. `resize` and `scroll` events), always
              // prefer the async Popper#update method
              forceUpdate: function forceUpdate() {
                if (isDestroyed) return
                var _state$elements = state1.elements,
                  reference = _state$elements.reference,
                  popper = _state$elements.popper // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                  console.error(INVALID_ELEMENT_ERROR)
                  return
                } // Store the reference and popper rects to be read by modifiers
                state1.rects = {
                  reference: (0, _getCompositeRectJsDefault.default)(
                    reference,
                    (0, _getOffsetParentJsDefault.default)(popper),
                    state1.options.strategy === 'fixed'
                  ),
                  popper: (0, _getLayoutRectJsDefault.default)(popper),
                } // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state1.reset = false
                state1.placement = state1.options.placement // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state1.orderedModifiers.forEach(function (modifier) {
                  return (state1.modifiersData[modifier.name] = Object.assign({}, modifier.data))
                })
                var __debug_loops__ = 0
                for (var index = 0; index < state1.orderedModifiers.length; index++) {
                  __debug_loops__ += 1
                  if (__debug_loops__ > 100) {
                    console.error(INFINITE_LOOP_ERROR)
                    break
                  }
                  if (state1.reset === true) {
                    state1.reset = false
                    index = -1
                    continue
                  }
                  var _state$orderedModifie = state1.orderedModifiers[index],
                    fn = _state$orderedModifie.fn,
                    _state$orderedModifie2 = _state$orderedModifie.options,
                    _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                    name = _state$orderedModifie.name
                  if (typeof fn === 'function')
                    state1 =
                      fn({
                        state: state1,
                        options: _options,
                        name: name,
                        instance: instance,
                      }) || state1
                }
              },
              // Async and optimistically optimized update – it will not be executed if
              // not necessary (debounced to run at most once-per-tick)
              update: (0, _debounceJsDefault.default)(function () {
                return new Promise(function (resolve) {
                  instance.forceUpdate()
                  resolve(state1)
                })
              }),
              destroy: function destroy() {
                cleanupModifierEffects()
                isDestroyed = true
              },
            }
            if (!areValidElements(reference1, popper1)) {
              console.error(INVALID_ELEMENT_ERROR)
              return instance
            }
            instance.setOptions(options1).then(function (state) {
              if (!isDestroyed && options1.onFirstUpdate) options1.onFirstUpdate(state)
            }) // Modifiers have the ability to execute arbitrary code before the first
            // update cycle runs. They will be executed in the same order as the update
            // cycle. This is useful when a modifier adds some persistent data that
            // other modifiers need to use, but the modifier is run after the dependent
            // one.
            function runModifierEffects() {
              state1.orderedModifiers.forEach(function (_ref3) {
                var name = _ref3.name,
                  _ref3$options = _ref3.options,
                  options = _ref3$options === void 0 ? {} : _ref3$options,
                  effect = _ref3.effect
                if (typeof effect === 'function') {
                  var cleanupFn = effect({
                    state: state1,
                    name: name,
                    instance: instance,
                    options: options,
                  })
                  var noopFn = function noopFn() {}
                  effectCleanupFns.push(cleanupFn || noopFn)
                }
              })
            }
            function cleanupModifierEffects() {
              effectCleanupFns.forEach(function (fn) {
                return fn()
              })
              effectCleanupFns = []
            }
            return instance
          }
        }
        var createPopper = /*#__PURE__*/ popperGenerator() // eslint-disable-next-line import/no-unused-modules
      },
      {
        './dom-utils/getCompositeRect.js': 'ijPls',
        './dom-utils/getLayoutRect.js': 'jvjuf',
        './dom-utils/listScrollParents.js': '2di3T',
        './dom-utils/getOffsetParent.js': 'laoYw',
        './dom-utils/getComputedStyle.js': '3mZjB',
        './utils/orderModifiers.js': 'N0VO0',
        './utils/debounce.js': 'g6Chr',
        './utils/validateModifiers.js': '1S5dQ',
        './utils/uniqueBy.js': 'hhl2M',
        './utils/getBasePlacement.js': '59Wp3',
        './utils/mergeByName.js': '2zTVN',
        './utils/detectOverflow.js': 'ltCuw',
        './dom-utils/instanceOf.js': 'gYFUC',
        './enums.js': 'lCAq5',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    ijPls: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getBoundingClientRectJs = require('./getBoundingClientRect.js')
        var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs)
        var _getNodeScrollJs = require('./getNodeScroll.js')
        var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs)
        var _getNodeNameJs = require('./getNodeName.js')
        var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs)
        var _instanceOfJs = require('./instanceOf.js')
        var _getWindowScrollBarXJs = require('./getWindowScrollBarX.js')
        var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs)
        var _getDocumentElementJs = require('./getDocumentElement.js')
        var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs)
        var _isScrollParentJs = require('./isScrollParent.js')
        var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs)
        var _mathJs = require('../utils/math.js')
        function isElementScaled(element) {
          var rect = element.getBoundingClientRect()
          var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1
          var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1
          return scaleX !== 1 || scaleY !== 1
        } // Returns the composite rect of an element relative to its offsetParent.
        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
          if (isFixed === void 0) isFixed = false
          var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent)
          var offsetParentIsScaled =
            (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent)
          var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent)
          var rect = (0, _getBoundingClientRectJsDefault.default)(
            elementOrVirtualElement,
            offsetParentIsScaled
          )
          var scroll = {
            scrollLeft: 0,
            scrollTop: 0,
          }
          var offsets = {
            x: 0,
            y: 0,
          }
          if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
            if (
              (0, _getNodeNameJsDefault.default)(offsetParent) !== 'body' ||
              (0, _isScrollParentJsDefault.default)(documentElement)
            )
              scroll = (0, _getNodeScrollJsDefault.default)(offsetParent)
            if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
              offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true)
              offsets.x += offsetParent.clientLeft
              offsets.y += offsetParent.clientTop
            } else if (documentElement)
              offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement)
          }
          return {
            x: rect.left + scroll.scrollLeft - offsets.x,
            y: rect.top + scroll.scrollTop - offsets.y,
            width: rect.width,
            height: rect.height,
          }
        }
        exports.default = getCompositeRect
      },
      {
        './getBoundingClientRect.js': '9CFSQ',
        './getNodeScroll.js': 'bBjCr',
        './getNodeName.js': 'a2Qom',
        './instanceOf.js': 'gYFUC',
        './getWindowScrollBarX.js': 'sz4Ld',
        './getDocumentElement.js': 'eJ9Y1',
        './isScrollParent.js': '9rLGO',
        '../utils/math.js': 'gQqVe',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    bBjCr: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _getWindowScrollJs = require('./getWindowScroll.js')
        var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs)
        var _getWindowJs = require('./getWindow.js')
        var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs)
        var _instanceOfJs = require('./instanceOf.js')
        var _getHTMLElementScrollJs = require('./getHTMLElementScroll.js')
        var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs)
        function getNodeScroll(node) {
          if (
            node === (0, _getWindowJsDefault.default)(node) ||
            !(0, _instanceOfJs.isHTMLElement)(node)
          )
            return (0, _getWindowScrollJsDefault.default)(node)
          else return (0, _getHTMLElementScrollJsDefault.default)(node)
        }
        exports.default = getNodeScroll
      },
      {
        './getWindowScroll.js': '1XUtN',
        './getWindow.js': '2SkOo',
        './instanceOf.js': 'gYFUC',
        './getHTMLElementScroll.js': '6pwY2',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '6pwY2': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function getHTMLElementScroll(element) {
          return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop,
          }
        }
        exports.default = getHTMLElementScroll
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    N0VO0: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _enumsJs = require('../enums.js') // source: https://stackoverflow.com/questions/49875255
        function order(modifiers) {
          var map = new Map()
          var visited = new Set()
          var result = []
          modifiers.forEach(function (modifier) {
            map.set(modifier.name, modifier)
          }) // On visiting object, check for its dependencies and visit them recursively
          function sort(modifier) {
            visited.add(modifier.name)
            var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || [])
            requires.forEach(function (dep) {
              if (!visited.has(dep)) {
                var depModifier = map.get(dep)
                if (depModifier) sort(depModifier)
              }
            })
            result.push(modifier)
          }
          modifiers.forEach(function (modifier) {
            if (!visited.has(modifier.name))
              // check for visited object
              sort(modifier)
          })
          return result
        }
        function orderModifiers(modifiers) {
          // order based on dependencies
          var orderedModifiers = order(modifiers) // order based on phase
          return (0, _enumsJs.modifierPhases).reduce(function (acc, phase) {
            return acc.concat(
              orderedModifiers.filter(function (modifier) {
                return modifier.phase === phase
              })
            )
          }, [])
        }
        exports.default = orderModifiers
      },
      { '../enums.js': 'lCAq5', '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    g6Chr: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function debounce(fn) {
          var pending
          return function () {
            if (!pending)
              pending = new Promise(function (resolve) {
                Promise.resolve().then(function () {
                  pending = undefined
                  resolve(fn())
                })
              })
            return pending
          }
        }
        exports.default = debounce
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '1S5dQ': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        var _formatJs = require('./format.js')
        var _formatJsDefault = parcelHelpers.interopDefault(_formatJs)
        var _enumsJs = require('../enums.js')
        var INVALID_MODIFIER_ERROR =
          'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s'
        var MISSING_DEPENDENCY_ERROR =
          'Popper: modifier "%s" requires "%s", but "%s" modifier is not available'
        var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options']
        function validateModifiers(modifiers) {
          modifiers.forEach(function (modifier) {
            ;[]
              .concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
              .filter(function (value, index, self) {
                return self.indexOf(value) === index
              })
              .forEach(function (key) {
                switch (key) {
                  case 'name':
                    if (typeof modifier.name !== 'string')
                      console.error(
                        (0, _formatJsDefault.default)(
                          INVALID_MODIFIER_ERROR,
                          String(modifier.name),
                          '"name"',
                          '"string"',
                          '"' + String(modifier.name) + '"'
                        )
                      )
                    break
                  case 'enabled':
                    if (typeof modifier.enabled !== 'boolean')
                      console.error(
                        (0, _formatJsDefault.default)(
                          INVALID_MODIFIER_ERROR,
                          modifier.name,
                          '"enabled"',
                          '"boolean"',
                          '"' + String(modifier.enabled) + '"'
                        )
                      )
                    break
                  case 'phase':
                    if ((0, _enumsJs.modifierPhases).indexOf(modifier.phase) < 0)
                      console.error(
                        (0, _formatJsDefault.default)(
                          INVALID_MODIFIER_ERROR,
                          modifier.name,
                          '"phase"',
                          'either ' + (0, _enumsJs.modifierPhases).join(', '),
                          '"' + String(modifier.phase) + '"'
                        )
                      )
                    break
                  case 'fn':
                    if (typeof modifier.fn !== 'function')
                      console.error(
                        (0, _formatJsDefault.default)(
                          INVALID_MODIFIER_ERROR,
                          modifier.name,
                          '"fn"',
                          '"function"',
                          '"' + String(modifier.fn) + '"'
                        )
                      )
                    break
                  case 'effect':
                    if (modifier.effect != null && typeof modifier.effect !== 'function')
                      console.error(
                        (0, _formatJsDefault.default)(
                          INVALID_MODIFIER_ERROR,
                          modifier.name,
                          '"effect"',
                          '"function"',
                          '"' + String(modifier.fn) + '"'
                        )
                      )
                    break
                  case 'requires':
                    if (modifier.requires != null && !Array.isArray(modifier.requires))
                      console.error(
                        (0, _formatJsDefault.default)(
                          INVALID_MODIFIER_ERROR,
                          modifier.name,
                          '"requires"',
                          '"array"',
                          '"' + String(modifier.requires) + '"'
                        )
                      )
                    break
                  case 'requiresIfExists':
                    if (!Array.isArray(modifier.requiresIfExists))
                      console.error(
                        (0, _formatJsDefault.default)(
                          INVALID_MODIFIER_ERROR,
                          modifier.name,
                          '"requiresIfExists"',
                          '"array"',
                          '"' + String(modifier.requiresIfExists) + '"'
                        )
                      )
                    break
                  case 'options':
                  case 'data':
                    break
                  default:
                    console.error(
                      'PopperJS: an invalid property has been provided to the "' +
                        modifier.name +
                        '" modifier, valid properties are ' +
                        VALID_PROPERTIES.map(function (s) {
                          return '"' + s + '"'
                        }).join(', ') +
                        '; but "' +
                        key +
                        '" was provided.'
                    )
                }
                modifier.requires &&
                  modifier.requires.forEach(function (requirement) {
                    if (
                      modifiers.find(function (mod) {
                        return mod.name === requirement
                      }) == null
                    )
                      console.error(
                        (0, _formatJsDefault.default)(
                          MISSING_DEPENDENCY_ERROR,
                          String(modifier.name),
                          requirement,
                          requirement
                        )
                      )
                  })
              })
          })
        }
        exports.default = validateModifiers
      },
      {
        './format.js': 'baNIW',
        '../enums.js': 'lCAq5',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    baNIW: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function format(str) {
          for (
            var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
            _key < _len;
            _key++
          )
            args[_key - 1] = arguments[_key]
          return [].concat(args).reduce(function (p, c) {
            return p.replace(/%s/, c)
          }, str)
        }
        exports.default = format
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    hhl2M: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function uniqueBy(arr, fn) {
          var identifiers = new Set()
          return arr.filter(function (item) {
            var identifier = fn(item)
            if (!identifiers.has(identifier)) {
              identifiers.add(identifier)
              return true
            }
          })
        }
        exports.default = uniqueBy
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '2zTVN': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        function mergeByName(modifiers) {
          var merged1 = modifiers.reduce(function (merged, current) {
            var existing = merged[current.name]
            merged[current.name] = existing
              ? Object.assign({}, existing, current, {
                  options: Object.assign({}, existing.options, current.options),
                  data: Object.assign({}, existing.data, current.data),
                })
              : current
            return merged
          }, {}) // IE11 does not support Object.values
          return Object.keys(merged1).map(function (key) {
            return merged1[key]
          })
        }
        exports.default = mergeByName
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '1PuRF': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
        parcelHelpers.defineInteropFlag(exports)
        parcelHelpers.export(exports, 'createPopper', () => createPopper) // eslint-disable-next-line import/no-unused-modules
        parcelHelpers.export(exports, 'popperGenerator', () => (0, _createPopperJs.popperGenerator))
        parcelHelpers.export(exports, 'defaultModifiers', () => defaultModifiers)
        parcelHelpers.export(exports, 'detectOverflow', () => (0, _createPopperJs.detectOverflow))
        parcelHelpers.export(exports, 'createPopperLite', () => (0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
        var _createPopperJs = require('./createPopper.js')
        var _eventListenersJs = require('./modifiers/eventListeners.js')
        var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs)
        var _popperOffsetsJs = require('./modifiers/popperOffsets.js')
        var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs)
        var _computeStylesJs = require('./modifiers/computeStyles.js')
        var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs)
        var _applyStylesJs = require('./modifiers/applyStyles.js')
        var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs)
        var _offsetJs = require('./modifiers/offset.js')
        var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs)
        var _flipJs = require('./modifiers/flip.js')
        var _flipJsDefault = parcelHelpers.interopDefault(_flipJs)
        var _preventOverflowJs = require('./modifiers/preventOverflow.js')
        var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs)
        var _arrowJs = require('./modifiers/arrow.js')
        var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs)
        var _hideJs = require('./modifiers/hide.js')
        var _hideJsDefault = parcelHelpers.interopDefault(_hideJs)
        var _popperLiteJs = require('./popper-lite.js')
        var _indexJs = require('./modifiers/index.js')
        parcelHelpers.exportAll(_indexJs, exports)
        var defaultModifiers = [
          (0, _eventListenersJsDefault.default),
          (0, _popperOffsetsJsDefault.default),
          (0, _computeStylesJsDefault.default),
          (0, _applyStylesJsDefault.default),
          (0, _offsetJsDefault.default),
          (0, _flipJsDefault.default),
          (0, _preventOverflowJsDefault.default),
          (0, _arrowJsDefault.default),
          (0, _hideJsDefault.default),
        ]
        var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
          defaultModifiers: defaultModifiers,
        }) // eslint-disable-next-line import/no-unused-modules
      },
      {
        './createPopper.js': 'cHuNp',
        './modifiers/eventListeners.js': 'hBKsL',
        './modifiers/popperOffsets.js': '6I679',
        './modifiers/computeStyles.js': 'gDlm2',
        './modifiers/applyStyles.js': '4iMn4',
        './modifiers/offset.js': '3GKVY',
        './modifiers/flip.js': 'fv5wq',
        './modifiers/preventOverflow.js': '1AMhb',
        './modifiers/arrow.js': '31HFW',
        './modifiers/hide.js': '2g4OF',
        './popper-lite.js': false,
        './modifiers/index.js': 'cap3W',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '2hEyg': [function () {}, {}],
    fYEd8: [function () {}, {}],
    lIqzD: [function () {}, {}],
    '9LNWv': [function () {}, {}],
  },
  ['1uCsm', 'lN05r'],
  'lN05r',
  'parcelRequire390d'
)

//# sourceMappingURL=index.7efea797.js.map
