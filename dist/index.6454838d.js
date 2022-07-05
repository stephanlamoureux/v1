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
})({"M8Ie4":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bbed57246454838d";
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

},{}],"dAQqO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _typedJs = require("typed.js/src/typed.js");
var _typedJsDefault = parcelHelpers.interopDefault(_typedJs);
var typed = new (0, _typedJsDefault.default)("#typed", {
    strings: [
        "A Frontend Fanatic.",
        "^2000 The <span class='typed-gradient'>Gradient</span> Gangsta.",
        "^2000 The Duke of Dark Mode.",
        "^2000 An Over-Caffeinated Coder.", 
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    backDelay: 3000,
    backSpeed: 50
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","typed.js/src/typed.js":"5Lxbm"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5Lxbm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _initializerJs = require("./initializer.js");
var _htmlParserJs = require("./html-parser.js");
class Typed {
    constructor(elementId, options){
        // Initialize it up
        (0, _initializerJs.initializer).load(this, options, elementId);
        // All systems go!
        this.begin();
    }
    /**
   * Toggle start() and stop() of the Typed instance
   * @public
   */ toggle() {
        this.pause.status ? this.start() : this.stop();
    }
    /**
   * Stop typing / backspacing and enable cursor blinking
   * @public
   */ stop() {
        if (this.typingComplete) return;
        if (this.pause.status) return;
        this.toggleBlinking(true);
        this.pause.status = true;
        this.options.onStop(this.arrayPos, this);
    }
    /**
   * Start typing / backspacing after being stopped
   * @public
   */ start() {
        if (this.typingComplete) return;
        if (!this.pause.status) return;
        this.pause.status = false;
        if (this.pause.typewrite) this.typewrite(this.pause.curString, this.pause.curStrPos);
        else this.backspace(this.pause.curString, this.pause.curStrPos);
        this.options.onStart(this.arrayPos, this);
    }
    /**
   * Destroy this instance of Typed
   * @public
   */ destroy() {
        this.reset(false);
        this.options.onDestroy(this);
    }
    /**
   * Reset Typed and optionally restarts
   * @param {boolean} restart
   * @public
   */ reset(restart = true) {
        clearInterval(this.timeout);
        this.replaceText("");
        if (this.cursor && this.cursor.parentNode) {
            this.cursor.parentNode.removeChild(this.cursor);
            this.cursor = null;
        }
        this.strPos = 0;
        this.arrayPos = 0;
        this.curLoop = 0;
        if (restart) {
            this.insertCursor();
            this.options.onReset(this);
            this.begin();
        }
    }
    /**
   * Begins the typing animation
   * @private
   */ begin() {
        this.options.onBegin(this);
        this.typingComplete = false;
        this.shuffleStringsIfNeeded(this);
        this.insertCursor();
        if (this.bindInputFocusEvents) this.bindFocusEvents();
        this.timeout = setTimeout(()=>{
            // Check if there is some text in the element, if yes start by backspacing the default message
            if (!this.currentElContent || this.currentElContent.length === 0) this.typewrite(this.strings[this.sequence[this.arrayPos]], this.strPos);
            else // Start typing
            this.backspace(this.currentElContent, this.currentElContent.length);
        }, this.startDelay);
    }
    /**
   * Called for each character typed
   * @param {string} curString the current string in the strings array
   * @param {number} curStrPos the current position in the curString
   * @private
   */ typewrite(curString, curStrPos) {
        if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
            this.el.classList.remove(this.fadeOutClass);
            if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
        }
        const humanize = this.humanizer(this.typeSpeed);
        let numChars = 1;
        if (this.pause.status === true) {
            this.setPauseStatus(curString, curStrPos, true);
            return;
        }
        // contain typing function in a timeout humanize'd delay
        this.timeout = setTimeout(()=>{
            // skip over any HTML chars
            curStrPos = (0, _htmlParserJs.htmlParser).typeHtmlChars(curString, curStrPos, this);
            let pauseTime = 0;
            let substr = curString.substr(curStrPos);
            // check for an escape character before a pause value
            // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
            // single ^ are removed from string
            if (substr.charAt(0) === "^") {
                if (/^\^\d+/.test(substr)) {
                    let skip = 1; // skip at least 1
                    substr = /\d+/.exec(substr)[0];
                    skip += substr.length;
                    pauseTime = parseInt(substr);
                    this.temporaryPause = true;
                    this.options.onTypingPaused(this.arrayPos, this);
                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                    this.toggleBlinking(true);
                }
            }
            // check for skip characters formatted as
            // "this is a `string to print NOW` ..."
            if (substr.charAt(0) === "`") {
                while(curString.substr(curStrPos + numChars).charAt(0) !== "`"){
                    numChars++;
                    if (curStrPos + numChars > curString.length) break;
                }
                // strip out the escape characters and append all the string in between
                const stringBeforeSkip = curString.substring(0, curStrPos);
                const stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
                const stringAfterSkip = curString.substring(curStrPos + numChars + 1);
                curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
                numChars--;
            }
            // timeout for any pause after a character
            this.timeout = setTimeout(()=>{
                // Accounts for blinking while paused
                this.toggleBlinking(false);
                // We're done with this sentence!
                if (curStrPos >= curString.length) this.doneTyping(curString, curStrPos);
                else this.keepTyping(curString, curStrPos, numChars);
                // end of character pause
                if (this.temporaryPause) {
                    this.temporaryPause = false;
                    this.options.onTypingResumed(this.arrayPos, this);
                }
            }, pauseTime);
        // humanized value for typing
        }, humanize);
    }
    /**
   * Continue to the next string & begin typing
   * @param {string} curString the current string in the strings array
   * @param {number} curStrPos the current position in the curString
   * @private
   */ keepTyping(curString, curStrPos, numChars) {
        // call before functions if applicable
        if (curStrPos === 0) {
            this.toggleBlinking(false);
            this.options.preStringTyped(this.arrayPos, this);
        }
        // start typing each new char into existing string
        // curString: arg, this.el.html: original text inside element
        curStrPos += numChars;
        const nextString = curString.substr(0, curStrPos);
        this.replaceText(nextString);
        // loop the function
        this.typewrite(curString, curStrPos);
    }
    /**
   * We're done typing the current string
   * @param {string} curString the current string in the strings array
   * @param {number} curStrPos the current position in the curString
   * @private
   */ doneTyping(curString, curStrPos) {
        // fires callback function
        this.options.onStringTyped(this.arrayPos, this);
        this.toggleBlinking(true);
        // is this the final string
        if (this.arrayPos === this.strings.length - 1) {
            // callback that occurs on the last typed string
            this.complete();
            // quit if we wont loop back
            if (this.loop === false || this.curLoop === this.loopCount) return;
        }
        this.timeout = setTimeout(()=>{
            this.backspace(curString, curStrPos);
        }, this.backDelay);
    }
    /**
   * Backspaces 1 character at a time
   * @param {string} curString the current string in the strings array
   * @param {number} curStrPos the current position in the curString
   * @private
   */ backspace(curString, curStrPos) {
        if (this.pause.status === true) {
            this.setPauseStatus(curString, curStrPos, false);
            return;
        }
        if (this.fadeOut) return this.initFadeOut();
        this.toggleBlinking(false);
        const humanize = this.humanizer(this.backSpeed);
        this.timeout = setTimeout(()=>{
            curStrPos = (0, _htmlParserJs.htmlParser).backSpaceHtmlChars(curString, curStrPos, this);
            // replace text with base text + typed characters
            const curStringAtPosition = curString.substr(0, curStrPos);
            this.replaceText(curStringAtPosition);
            // if smartBack is enabled
            if (this.smartBackspace) {
                // the remaining part of the current string is equal of the same part of the new string
                let nextString = this.strings[this.arrayPos + 1];
                if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) this.stopNum = curStrPos;
                else this.stopNum = 0;
            }
            // if the number (id of character in current string) is
            // less than the stop number, keep going
            if (curStrPos > this.stopNum) {
                // subtract characters one by one
                curStrPos--;
                // loop the function
                this.backspace(curString, curStrPos);
            } else if (curStrPos <= this.stopNum) {
                // if the stop number has been reached, increase
                // array position to next string
                this.arrayPos++;
                // When looping, begin at the beginning after backspace complete
                if (this.arrayPos === this.strings.length) {
                    this.arrayPos = 0;
                    this.options.onLastStringBackspaced();
                    this.shuffleStringsIfNeeded();
                    this.begin();
                } else this.typewrite(this.strings[this.sequence[this.arrayPos]], curStrPos);
            }
        // humanized value for typing
        }, humanize);
    }
    /**
   * Full animation is complete
   * @private
   */ complete() {
        this.options.onComplete(this);
        if (this.loop) this.curLoop++;
        else this.typingComplete = true;
    }
    /**
   * Has the typing been stopped
   * @param {string} curString the current string in the strings array
   * @param {number} curStrPos the current position in the curString
   * @param {boolean} isTyping
   * @private
   */ setPauseStatus(curString, curStrPos, isTyping) {
        this.pause.typewrite = isTyping;
        this.pause.curString = curString;
        this.pause.curStrPos = curStrPos;
    }
    /**
   * Toggle the blinking cursor
   * @param {boolean} isBlinking
   * @private
   */ toggleBlinking(isBlinking) {
        if (!this.cursor) return;
        // if in paused state, don't toggle blinking a 2nd time
        if (this.pause.status) return;
        if (this.cursorBlinking === isBlinking) return;
        this.cursorBlinking = isBlinking;
        if (isBlinking) this.cursor.classList.add("typed-cursor--blink");
        else this.cursor.classList.remove("typed-cursor--blink");
    }
    /**
   * Speed in MS to type
   * @param {number} speed
   * @private
   */ humanizer(speed) {
        return Math.round(Math.random() * speed / 2) + speed;
    }
    /**
   * Shuffle the sequence of the strings array
   * @private
   */ shuffleStringsIfNeeded() {
        if (!this.shuffle) return;
        this.sequence = this.sequence.sort(()=>Math.random() - 0.5);
    }
    /**
   * Adds a CSS class to fade out current string
   * @private
   */ initFadeOut() {
        this.el.className += ` ${this.fadeOutClass}`;
        if (this.cursor) this.cursor.className += ` ${this.fadeOutClass}`;
        return setTimeout(()=>{
            this.arrayPos++;
            this.replaceText("");
            // Resets current string if end of loop reached
            if (this.strings.length > this.arrayPos) this.typewrite(this.strings[this.sequence[this.arrayPos]], 0);
            else {
                this.typewrite(this.strings[0], 0);
                this.arrayPos = 0;
            }
        }, this.fadeOutDelay);
    }
    /**
   * Replaces current text in the HTML element
   * depending on element type
   * @param {string} str
   * @private
   */ replaceText(str) {
        if (this.attr) this.el.setAttribute(this.attr, str);
        else {
            if (this.isInput) this.el.value = str;
            else if (this.contentType === "html") this.el.innerHTML = str;
            else this.el.textContent = str;
        }
    }
    /**
   * If using input elements, bind focus in order to
   * start and stop the animation
   * @private
   */ bindFocusEvents() {
        if (!this.isInput) return;
        this.el.addEventListener("focus", (e)=>{
            this.stop();
        });
        this.el.addEventListener("blur", (e)=>{
            if (this.el.value && this.el.value.length !== 0) return;
            this.start();
        });
    }
    /**
   * On init, insert the cursor element
   * @private
   */ insertCursor() {
        if (!this.showCursor) return;
        if (this.cursor) return;
        this.cursor = document.createElement("span");
        this.cursor.className = "typed-cursor";
        this.cursor.setAttribute("aria-hidden", true);
        this.cursor.innerHTML = this.cursorChar;
        this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
    }
}
exports.default = Typed;

},{"./initializer.js":"5J6J4","./html-parser.js":"djEo3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5J6J4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initializer", ()=>initializer);
var _defaultsJs = require("./defaults.js");
var _defaultsJsDefault = parcelHelpers.interopDefault(_defaultsJs);
class Initializer {
    /**
   * Load up defaults & options on the Typed instance
   * @param {Typed} self instance of Typed
   * @param {object} options options object
   * @param {string} elementId HTML element ID _OR_ instance of HTML element
   * @private
   */ load(self, options, elementId) {
        // chosen element to manipulate text
        if (typeof elementId === "string") self.el = document.querySelector(elementId);
        else self.el = elementId;
        self.options = {
            ...(0, _defaultsJsDefault.default),
            ...options
        };
        // attribute to type into
        self.isInput = self.el.tagName.toLowerCase() === "input";
        self.attr = self.options.attr;
        self.bindInputFocusEvents = self.options.bindInputFocusEvents;
        // show cursor
        self.showCursor = self.isInput ? false : self.options.showCursor;
        // custom cursor
        self.cursorChar = self.options.cursorChar;
        // Is the cursor blinking
        self.cursorBlinking = true;
        // text content of element
        self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
        // html or plain text
        self.contentType = self.options.contentType;
        // typing speed
        self.typeSpeed = self.options.typeSpeed;
        // add a delay before typing starts
        self.startDelay = self.options.startDelay;
        // backspacing speed
        self.backSpeed = self.options.backSpeed;
        // only backspace what doesn't match the previous string
        self.smartBackspace = self.options.smartBackspace;
        // amount of time to wait before backspacing
        self.backDelay = self.options.backDelay;
        // Fade out instead of backspace
        self.fadeOut = self.options.fadeOut;
        self.fadeOutClass = self.options.fadeOutClass;
        self.fadeOutDelay = self.options.fadeOutDelay;
        // variable to check whether typing is currently paused
        self.isPaused = false;
        // input strings of text
        self.strings = self.options.strings.map((s)=>s.trim());
        // div containing strings
        if (typeof self.options.stringsElement === "string") self.stringsElement = document.querySelector(self.options.stringsElement);
        else self.stringsElement = self.options.stringsElement;
        if (self.stringsElement) {
            self.strings = [];
            self.stringsElement.style.display = "none";
            const strings = Array.prototype.slice.apply(self.stringsElement.children);
            const stringsLength = strings.length;
            if (stringsLength) for(let i = 0; i < stringsLength; i += 1){
                const stringEl = strings[i];
                self.strings.push(stringEl.innerHTML.trim());
            }
        }
        // character number position of current string
        self.strPos = 0;
        // current array position
        self.arrayPos = 0;
        // index of string to stop backspacing on
        self.stopNum = 0;
        // Looping logic
        self.loop = self.options.loop;
        self.loopCount = self.options.loopCount;
        self.curLoop = 0;
        // shuffle the strings
        self.shuffle = self.options.shuffle;
        // the order of strings
        self.sequence = [];
        self.pause = {
            status: false,
            typewrite: true,
            curString: "",
            curStrPos: 0
        };
        // When the typing is complete (when not looped)
        self.typingComplete = false;
        // Set the order in which the strings are typed
        for(let i in self.strings)self.sequence[i] = i;
        // If there is some text in the element
        self.currentElContent = this.getCurrentElContent(self);
        self.autoInsertCss = self.options.autoInsertCss;
        this.appendAnimationCss(self);
    }
    getCurrentElContent(self) {
        let elContent = "";
        if (self.attr) elContent = self.el.getAttribute(self.attr);
        else if (self.isInput) elContent = self.el.value;
        else if (self.contentType === "html") elContent = self.el.innerHTML;
        else elContent = self.el.textContent;
        return elContent;
    }
    appendAnimationCss(self) {
        const cssDataName = "data-typed-js-css";
        if (!self.autoInsertCss) return;
        if (!self.showCursor && !self.fadeOut) return;
        if (document.querySelector(`[${cssDataName}]`)) return;
        let css = document.createElement("style");
        css.type = "text/css";
        css.setAttribute(cssDataName, true);
        let innerCss = "";
        if (self.showCursor) innerCss += `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `;
        if (self.fadeOut) innerCss += `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `;
        if (css.length === 0) return;
        css.innerHTML = innerCss;
        document.body.appendChild(css);
    }
}
exports.default = Initializer;
let initializer = new Initializer();

},{"./defaults.js":"4begJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4begJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Defaults & options
 * @returns {object} Typed defaults & options
 * @public
 */ const defaults = {
    /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */ strings: [
        "These are the default values...",
        "You know what you should do?",
        "Use your own!",
        "Have a great day!"
    ],
    stringsElement: null,
    /**
   * @property {number} typeSpeed type speed in milliseconds
   */ typeSpeed: 0,
    /**
   * @property {number} startDelay time before typing starts in milliseconds
   */ startDelay: 0,
    /**
   * @property {number} backSpeed backspacing speed in milliseconds
   */ backSpeed: 0,
    /**
   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
   */ smartBackspace: true,
    /**
   * @property {boolean} shuffle shuffle the strings
   */ shuffle: false,
    /**
   * @property {number} backDelay time before backspacing in milliseconds
   */ backDelay: 700,
    /**
   * @property {boolean} fadeOut Fade out instead of backspace
   * @property {string} fadeOutClass css class for fade animation
   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
   */ fadeOut: false,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    /**
   * @property {boolean} loop loop strings
   * @property {number} loopCount amount of loops
   */ loop: false,
    loopCount: Infinity,
    /**
   * @property {boolean} showCursor show cursor
   * @property {string} cursorChar character for cursor
   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
   */ showCursor: true,
    cursorChar: "|",
    autoInsertCss: true,
    /**
   * @property {string} attr attribute for typing
   * Ex: input placeholder, value, or just HTML text
   */ attr: null,
    /**
   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
   */ bindInputFocusEvents: false,
    /**
   * @property {string} contentType 'html' or 'null' for plaintext
   */ contentType: "html",
    /**
   * Before it begins typing
   * @param {Typed} self
   */ onBegin: (self)=>{},
    /**
   * All typing is complete
   * @param {Typed} self
   */ onComplete: (self)=>{},
    /**
   * Before each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */ preStringTyped: (arrayPos, self)=>{},
    /**
   * After each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */ onStringTyped: (arrayPos, self)=>{},
    /**
   * During looping, after last string is typed
   * @param {Typed} self
   */ onLastStringBackspaced: (self)=>{},
    /**
   * Typing has been stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */ onTypingPaused: (arrayPos, self)=>{},
    /**
   * Typing has been started after being stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */ onTypingResumed: (arrayPos, self)=>{},
    /**
   * After reset
   * @param {Typed} self
   */ onReset: (self)=>{},
    /**
   * After stop
   * @param {number} arrayPos
   * @param {Typed} self
   */ onStop: (arrayPos, self)=>{},
    /**
   * After start
   * @param {number} arrayPos
   * @param {Typed} self
   */ onStart: (arrayPos, self)=>{},
    /**
   * After destroy
   * @param {Typed} self
   */ onDestroy: (self)=>{}
};
exports.default = defaults;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djEo3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "htmlParser", ()=>htmlParser);
class HTMLParser {
    /**
   * Type HTML tags & HTML Characters
   * @param {string} curString Current string
   * @param {number} curStrPos Position in current string
   * @param {Typed} self instance of Typed
   * @returns {number} a new string position
   * @private
   */ typeHtmlChars(curString, curStrPos, self) {
        if (self.contentType !== "html") return curStrPos;
        const curChar = curString.substr(curStrPos).charAt(0);
        if (curChar === "<" || curChar === "&") {
            let endTag = "";
            if (curChar === "<") endTag = ">";
            else endTag = ";";
            while(curString.substr(curStrPos + 1).charAt(0) !== endTag){
                curStrPos++;
                if (curStrPos + 1 > curString.length) break;
            }
            curStrPos++;
        }
        return curStrPos;
    }
    /**
   * Backspace HTML tags and HTML Characters
   * @param {string} curString Current string
   * @param {number} curStrPos Position in current string
   * @param {Typed} self instance of Typed
   * @returns {number} a new string position
   * @private
   */ backSpaceHtmlChars(curString, curStrPos, self) {
        if (self.contentType !== "html") return curStrPos;
        const curChar = curString.substr(curStrPos).charAt(0);
        if (curChar === ">" || curChar === ";") {
            let endTag = "";
            if (curChar === ">") endTag = "<";
            else endTag = "&";
            while(curString.substr(curStrPos - 1).charAt(0) !== endTag){
                curStrPos--;
                if (curStrPos < 0) break;
            }
            curStrPos--;
        }
        return curStrPos;
    }
}
exports.default = HTMLParser;
let htmlParser = new HTMLParser();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["M8Ie4","dAQqO"], "dAQqO", "parcelRequire390d")

//# sourceMappingURL=index.6454838d.js.map
