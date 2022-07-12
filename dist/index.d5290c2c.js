// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9g4DV":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "75b21438d5290c2c";
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
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"l5ITb":[function(require,module,exports) {
!function(a1, b) {
    "use strict";
    "object" == typeof module.exports ? module.exports = a1.document ? b(a1, !0) : function(a) {
        if (!a.document) throw new Error("AniJS-RWWD");
        return b(a);
    } : b(a1);
}("undefined" != typeof window ? window : this, function(a2, b1) {
    var c1 = function(b2) {
        var c2 = "data-anijs", d1 = "default", e1 = "|", f1 = "$", g1 = "if", h1 = "on", i1 = [
            "do",
            "after",
            "before",
            "to"
        ], j1 = "(\\s+|^)", k1 = "(\\s+|$)", l1 = "animationend", m = "transitionend", n = "target";
        b2 = {
            rootDOMTravelScope: {},
            notifierCollection: {},
            init: function() {
                o._t = {};
                var a = o._a();
                b2.registerHelper(d1, a), o._u = d1, b2.rootDOMTravelScope = document, b2.Parser = o.Parser, o._v = o._p(), o._w = "";
            },
            setDOMRootTravelScope: function(a) {
                var c, d = document;
                try {
                    "document" === a ? c = d : (c = d.querySelector(a), c || (c = d));
                } catch (e) {
                    c = d;
                }
                b2.rootDOMTravelScope = c;
            },
            run: function() {
                var a = [], d = {};
                b2.purgeAll(), b2.notifierCollection = {}, a = o._o(b2.rootDOMTravelScope);
                var e, f = a.length, g = 0;
                for(g; f > g; g++)e = a[g], d = o._n(e.getAttribute(c2)), o._c(e, d);
                var h = b2.getNotifier("AniJSNotifier");
                h && h.dispatchEvent("onRunFinished");
            },
            createAnimation: function(a, b) {
                var c = b || "";
                o._c(c, a);
            },
            getHelper: function(a) {
                var b = o._t;
                return b[a] || b[d1];
            },
            registerHelper: function(a, b) {
                o._t[a] = b;
            },
            purge: function(a) {
                if (a && "" !== a && " " !== a) {
                    var c = document.querySelectorAll(a), d = c.length, e = 0;
                    for(e; d > e; e++)b2.EventSystem.purgeEventTarget(c[e]);
                }
            },
            purgeAll: function() {
                b2.EventSystem.purgeAll();
            },
            purgeEventTarget: function(a) {
                b2.EventSystem.purgeEventTarget(a);
            },
            setClassNamesWhenAnim: function(a) {
                o._w = " " + a;
            },
            createNotifier: function() {
                return b2.EventSystem.createEventTarget();
            },
            registerNotifier: function(a) {
                var c = b2.notifierCollection;
                return a.id && a.value && b2.EventSystem.isEventTarget(a.value) ? (c[a.id] = a.value, 1) : "";
            },
            getNotifier: function(a) {
                return b2.notifierCollection[a];
            }
        };
        var o = {};
        return o._a = function() {
            var a3 = {
                removeAnim: function(a, b) {
                    a.target && a.type && b.nodeHelper.removeClass(a.target, b.behavior);
                },
                holdAnimClass: function() {},
                fireOnce: function(a, b) {
                    b.eventSystem.removeEventListenerHelper(b.eventTarget, b.event.type, b.listener);
                },
                emit: function(a, c, d) {
                    var e = d[0] || null, f = "";
                    if (null !== e) {
                        e = e.split("."), e.length > 1 ? (f = e[0], e = e[1]) : (f = "", e = e[0]);
                        var g = b2.getNotifier(f) || null;
                        null !== g && g.dispatchEvent(e);
                    }
                    c.hasRunned || c.run();
                }
            };
            return a3;
        }, o._b = function() {
            return new Parser;
        }, o._c = function(a, b) {
            var c, d, e, f, g = b.length, h = 0;
            for(h; g > h; h++)c = b[h], e = c.after, d = c.before, f = c.behavior, e && (c.after = o.Parser.parseDoDefinition(e)), d && (c.before = o.Parser.parseDoDefinition(d)), f && (c.behavior = o.Parser.parseDoDefinition(f)), o._d(a, c);
        }, o._d = function(a, c) {
            var d, e2 = o._e(c), f2 = o._f(a, c);
            if (c.after && o.Util._x(c.after) && (d = c.after[0]), "" !== e2) {
                var g2, h2 = f2.length, i2 = 0;
                for(i2; h2 > i2; i2++)if (g2 = f2[i2], b2.EventSystem.isEventTarget(g2)) {
                    var j = function(e) {
                        var f = o._g(a, c, e), g = o._h(c), h = o._j(a, c), i = o._i(a, c);
                        "" !== o._w && (o.Util._x(g) || (g += o._w));
                        var k = {
                            behaviorTargetList: f,
                            nodeHelper: o.NodeHelper,
                            animationEndEvent: o._v,
                            behavior: g,
                            after: i,
                            eventSystem: b2.EventSystem,
                            eventTarget: e.currentTarget,
                            afterFunctionName: d,
                            dataAniJSOwner: a,
                            listener: j,
                            event: e,
                            before: h
                        }, l = new b2.AnimationContext(k);
                        l.runAll(k);
                    };
                    b2.EventSystem.addEventListenerHelper(g2, e2, j, !1), b2.EventSystem.registerEventHandle(g2, e2, j);
                }
            }
        }, o._e = function(a) {
            var b = "", c = a.event || b;
            return c === l1 ? c = o._p() : c === m && (c = o._q()), c;
        }, o._f = function(c, d) {
            var e, f = c, g = [
                f
            ], h = b2.rootDOMTravelScope;
            if (d.eventTarget) {
                if (e = o._notifierHelper(d.eventTarget), e.length > 0) g = e;
                else if ("document" === d.eventTarget) g = [
                    document
                ];
                else if ("window" === d.eventTarget) g = [
                    a2
                ];
                else if (d.eventTarget.split) try {
                    g = h.querySelectorAll(d.eventTarget);
                } catch (i) {
                    g = [];
                }
            }
            return g;
        }, o._g = function(a, c, d) {
            var e = a, g = [
                e
            ], h = b2.rootDOMTravelScope, i = c.behaviorTarget;
            if (i) {
                if (o.Util._x(i)) {
                    var j = this._y(a, c, i);
                    j && o.Util.isFunction(j[0]) && (g = j[0](d, {
                        dataAniJSOwner: a
                    }, o._z(j)));
                } else if (i === n && d.currentTarget) g = [
                    d.currentTarget
                ];
                else {
                    i = i.split(f1).join(",");
                    try {
                        g = h.querySelectorAll(i);
                    } catch (k) {
                        g = [];
                    }
                }
            }
            return g;
        }, o._h = function(a) {
            return this._y({}, a, a.behavior);
        }, o._i = function(a, b) {
            var c = b.after;
            return o.Util._x(c) ? this._y(a, b, c) : o._k(a, b, c);
        }, o._j = function(a, b) {
            var c = b.before;
            return o.Util._x(c) ? this._y(a, b, c) : o._k(a, b, c);
        }, o._y = function(a, b, c) {
            var d, e = c || "";
            return o.Util._x(e) && (d = o._k(a, b, e[0]), d ? e[0] = d : e = e.join(" ")), e;
        }, o._k = function(a, b, c) {
            var d = c || "", e = o._l(b);
            if (d && !o.Util.isFunction(d)) {
                var f = o._t, g = f[e];
                d = g && o.Util.isFunction(g[d]) ? g[d] : !1;
            }
            return d;
        }, o._l = function(a) {
            var b = a.helper || o._u;
            return b;
        }, o._notifierHelper = function(a) {
            var c = [];
            b2.notifierCollection;
            if (a) {
                if (a.id && b2.EventSystem.isEventTarget(a.value)) c.push(a.value), b2.registerNotifier(a);
                else if (a.split) {
                    notifierIDList = a.split("$");
                    var d, e = notifierIDList.length, f = 1;
                    for(f; e > f; f++)if (d = notifierIDList[f], d && " " !== d) {
                        d = d.trim();
                        var g = b2.getNotifier(d);
                        g || (g = b2.EventSystem.createEventTarget(), b2.registerNotifier({
                            id: d,
                            value: g
                        })), c.push(g);
                    }
                }
            }
            return c;
        }, o._z = function(a) {
            for(var b = [], c = a.length; c-- > 1;)b[c - 1] = a[c];
            return b;
        }, o._n = function(a) {
            return o.Parser.parse(a);
        }, o._o = function(a) {
            var b = "[" + c2 + "]";
            return a.querySelectorAll(b);
        }, o._p = function() {
            var a = o._r(), b = [
                l1,
                "oAnimationEnd",
                l1,
                "webkitAnimationEnd"
            ];
            return b[a];
        }, o._q = function() {
            var a = o._r(), b = [
                m,
                "oTransitionEnd",
                m,
                "webkitTransitionEnd"
            ];
            return b[a];
        }, o._r = function() {
            for(var a = document.createElement("fe"), b = "Animation", c = [
                "animation",
                "O" + b,
                "Moz" + b,
                "webkit" + b
            ], d = 0; d < c.length; d++)if (void 0 !== a.style[c[d]]) return d;
        }, b2.AnimationContext = function(a4) {
            var c = this;
            c.init = function(a) {
                c.behaviorTargetList = a.behaviorTargetList || [], c.nodeHelper = a.nodeHelper, c.animationEndEvent = a.animationEndEvent, c.behavior = a.behavior, c.after = a.after, c.eventSystem = a.eventSystem, c.eventTarget = a.eventTarget, c.afterFunctionName = a.afterFunctionName, c.dataAniJSOwner = a.dataAniJSOwner, c.listener = a.listener, c.event = a.event, c.before = a.before;
            }, c.doDefaultAction = function(a5, b) {
                var d, e = c, f = e.nodeHelper, g = e.animationEndEvent, h = e.after, i = e.afterFunctionName;
                e.eventSystem.addEventListenerHelper(a5, g, function(a) {
                    a.stopPropagation(), e.eventSystem.removeEventListenerHelper(a.target, a.type, arguments.callee), h && (o.Util.isFunction(h) ? h(a, c) : o.Util._x(h) && h[0](a, c, o._z(h)));
                }), "holdAnimClass" !== i && "$holdAnimClass" !== i && (d = a5._ajLastBehavior, d && f.removeClass(a5, d), a5._ajLastBehavior = b), a5.offsetWidth = a5.offsetWidth, f.addClass(a5, b);
            }, c.doFunctionAction = function(a, b) {
                var d = c, e = d.after, f = {
                    target: a
                };
                b[0](f, c, o._z(b)), o.Util.isFunction(e) ? e(f, c) : o.Util._x(e) && e[0](f, c, o._z(e));
            }, c.runAll = function() {
                var a, d, e = c, f = e.behaviorTargetList, g = f.length, h = (e.behavior, 0), i = e.before, j = c.event;
                for(h; g > h; h++)d = {
                    behaviorTargetList: [
                        f[h]
                    ],
                    nodeHelper: c.nodeHelper,
                    animationEndEvent: c.animationEndEvent,
                    behavior: c.behavior,
                    after: c.after,
                    eventSystem: c.eventSystem,
                    eventTarget: c.eventTarget,
                    afterFunctionName: c.afterFunctionName,
                    dataAniJSOwner: c.dataAniJSOwner,
                    listener: c.listener,
                    event: j
                }, a = new b2.AnimationContext(d), i ? o.Util.isFunction(i) ? i(j, a) : o.Util._x(i) && i[0](j, a, o._z(i)) : a.run();
            }, c.run = function() {
                var a = c, b = a.behavior, d = a.behaviorTargetList[0];
                c.hasRunned = 1, o.Util._x(b) ? a.doFunctionAction(d, b) : a.doDefaultAction(d, b);
            }, c.init(a4);
        }, o.Parser = {
            parse: function(a) {
                return this.parseDeclaration(a);
            },
            parseDeclaration: function(a) {
                var b, c, d = [];
                b = a.split(";");
                var e = b.length, f = 0;
                for(f; e > f; f++)c = this.parseSentence(b[f]), d.push(c);
                return d;
            },
            parseSentence: function(a) {
                var b, c, d = {};
                b = a.split(",");
                var e = b.length, f = 0;
                for(f; e > f; f++)c = this.parseDefinition(b[f]), d[c.key] = c.value;
                return d;
            },
            parseDefinition: function(a) {
                var b, c, d, e = {}, f = "event", j = "eventTarget", k = [
                    "behavior",
                    "after",
                    "before",
                    "behaviorTarget"
                ];
                if (b = a.split(":"), b.length > 1) {
                    if (c = b[0].trim(), b.length > 2 ? (d = b.slice(1), d = d.join(":"), d = d.trim()) : d = b[1].trim(), e.value = d, c === g1) c = f;
                    else if (c === h1) c = j;
                    else for(var l = i1.length - 1; l >= 0; l--)c === i1[l] && (c = k[l], "after" !== c && "before" !== c || "$" === d[0] || (d = "$" + d), d = this.parseDoDefinition(d));
                    e.key = c, e.value = d;
                }
                return e;
            },
            parseDoDefinition: function(a) {
                var b = /^\$(\w+)\s*/g, c = b.exec(a), d = "", f = 1;
                if (null !== c) {
                    d = c[1], doDefinitionArray = a.split(c[0])[1], doDefinitionArray = null !== doDefinitionArray ? doDefinitionArray.split(e1) : [], a = [], a[0] = d;
                    for(var g = 0; g < doDefinitionArray.length; g++)"" !== doDefinitionArray[g] && (a[f++] = doDefinitionArray[g].trim());
                    return a;
                }
                return a;
            }
        }, o.NodeHelper = {
            addClass: function(a, b) {
                b instanceof Array || (b = b.split(" "));
                for(var c = 0, d = b.length; d > c; ++c)b[c] && !new RegExp(j1 + b[c] + k1).test(a.className) && (a.className = "" === a.className ? b[c] : a.className.trim() + " " + b[c]);
            },
            removeClass: function(a, b) {
                b instanceof Array || (b = b.split(" "));
                for(var c = 0, d = b.length; d > c; ++c)a.className = a.className.replace(new RegExp(j1 + b[c] + k1), " ").trim();
            },
            hasClass: function(a, b) {
                return b && new RegExp(j1 + b + k1).test(a.className);
            }
        }, o.Util = {
            isFunction: function(a) {
                return !!(a && a.constructor && a.call && a.apply);
            },
            _x: function(a) {
                return Array.isArray(a);
            }
        }, b2.EventSystem = {
            eventCollection: {},
            eventIdCounter: 0,
            isEventTarget: function(a) {
                return a.addEventListener ? 1 : 0;
            },
            createEventTarget: function() {
                return new b2.EventTarget;
            },
            addEventListenerHelper: function(a, b, c) {
                a.addEventListener(b, c, !1);
            },
            removeEventListenerHelper: function(a, b, c) {
                a && a.removeEventListener(b, c);
            },
            purgeAll: function() {
                var a, b, c = this, d = c.eventCollection, e = Object.keys(d), f = e.length, g = 0;
                for(g; f > g; g++)a = e[g], b = d[a], b && b.handleCollection && b.handleCollection.length > 0 && c.purgeEventTarget(b.handleCollection[0].element), delete d[a];
            },
            purgeAllNodes: function(a) {
                var b = a.querySelectorAll("*");
                size = b.length;
                for(var c = size - 1; c >= 0; c--)this.purgeEventTarget(b[c]);
            },
            purgeEventTarget: function(a) {
                var b, c = this, d = a._aniJSEventID;
                if (d) {
                    b = c.eventCollection[d].handleCollection;
                    var e, f = b.length, g = 0;
                    for(g; f > g; g++)e = b[g], c.removeEventListenerHelper(a, e.eventType, e.listener);
                    c.eventCollection[d] = a._aniJSEventID = null, delete c.eventCollection[d], delete a._aniJSEventID;
                }
            },
            registerEventHandle: function(a, b, c) {
                var d = this, e = a._aniJSEventID, f = d.eventCollection, g = {
                    eventType: b,
                    listener: c,
                    element: a
                };
                if (e) f[e].handleCollection.push(g);
                else {
                    var h = {
                        handleCollection: [
                            g
                        ]
                    };
                    f[++d.eventIdCounter] = h, a._aniJSEventID = d.eventIdCounter;
                }
            }
        }, b2.EventTarget = function() {
            this._listeners = {};
        }, b2.EventTarget.prototype = {
            constructor: b2.EventTarget,
            addEventListener: function(a, b) {
                var c = this;
                "undefined" == typeof c._listeners[a] && (c._listeners[a] = []), c._listeners[a].push(b);
            },
            dispatchEvent: function(a) {
                var b = this;
                if ("string" == typeof a && (a = {
                    type: a
                }), a.target || (a.target = b), !a.type) throw new Error("error");
                if (this._listeners[a.type] instanceof Array) for(var c = b._listeners[a.type], d = 0, e = c.length; e > d; d++)c[d].call(b, a);
            },
            removeEventListener: function(a, b) {
                var c = this;
                if (c._listeners[a] instanceof Array) {
                    for(var d = c._listeners[a], e = 0, f = d.length; f > e; e++)if (d[e] === b) {
                        d.splice(e, 1);
                        break;
                    }
                }
            }
        }, b2;
    }(c1 || {});
    return c1.init(), c1.run(), "function" == typeof define && define.amd && define("anijs", [], function() {
        return c1;
    }), "undefined" == typeof b1 && (a2.AniJS = c1), c1;
});

},{}]},["9g4DV","l5ITb"], "l5ITb", "parcelRequire390d")

//# sourceMappingURL=index.d5290c2c.js.map
