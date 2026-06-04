import { t as e } from "./chunk-Dmt67uKV.js";
import { n as t } from "./jsx-runtime-CpwQBq6R.js";
import { t as n } from "./events-CLlx15qY.js";
(function() {
  let e2 = document.createElement(`link`).relList;
  if (e2 && e2.supports && e2.supports(`modulepreload`))
    return;
  for (let e3 of document.querySelectorAll(`link[rel="modulepreload"]`))
    n2(e3);
  new MutationObserver((e3) => {
    for (let t3 of e3)
      if (t3.type === `childList`)
        for (let e4 of t3.addedNodes)
          e4.tagName === `LINK` && e4.rel === `modulepreload` && n2(e4);
  }).observe(document, { childList: true, subtree: true });
  function t2(e3) {
    let t3 = {};
    return e3.integrity && (t3.integrity = e3.integrity), e3.referrerPolicy && (t3.referrerPolicy = e3.referrerPolicy), e3.crossOrigin === `use-credentials` ? t3.credentials = `include` : e3.crossOrigin === `anonymous` ? t3.credentials = `omit` : t3.credentials = `same-origin`, t3;
  }
  function n2(e3) {
    if (e3.ep)
      return;
    e3.ep = true;
    let n3 = t2(e3);
    fetch(e3.href, n3);
  }
})();
var r = e((e2) => {
  function t2(e3, t3) {
    var n3 = e3.length;
    e3.push(t3);
    a:
      for (; 0 < n3; ) {
        var r3 = n3 - 1 >>> 1, a3 = e3[r3];
        if (0 < i2(a3, t3))
          e3[r3] = t3, e3[n3] = a3, n3 = r3;
        else
          break a;
      }
  }
  function n2(e3) {
    return e3.length === 0 ? null : e3[0];
  }
  function r2(e3) {
    if (e3.length === 0)
      return null;
    var t3 = e3[0], n3 = e3.pop();
    if (n3 !== t3) {
      e3[0] = n3;
      a:
        for (var r3 = 0, a3 = e3.length, o3 = a3 >>> 1; r3 < o3; ) {
          var s3 = 2 * (r3 + 1) - 1, c3 = e3[s3], l3 = s3 + 1, u3 = e3[l3];
          if (0 > i2(c3, n3))
            l3 < a3 && 0 > i2(u3, c3) ? (e3[r3] = u3, e3[l3] = n3, r3 = l3) : (e3[r3] = c3, e3[s3] = n3, r3 = s3);
          else if (l3 < a3 && 0 > i2(u3, n3))
            e3[r3] = u3, e3[l3] = n3, r3 = l3;
          else
            break a;
        }
    }
    return t3;
  }
  function i2(e3, t3) {
    var n3 = e3.sortIndex - t3.sortIndex;
    return n3 === 0 ? e3.id - t3.id : n3;
  }
  if (typeof performance == `object` && typeof performance.now == `function`) {
    var a2 = performance;
    e2.unstable_now = function() {
      return a2.now();
    };
  } else {
    var o2 = Date, s2 = o2.now();
    e2.unstable_now = function() {
      return o2.now() - s2;
    };
  }
  var c2 = [], l2 = [], u2 = 1, d2 = null, f2 = 3, p2 = false, m2 = false, h2 = false, g2 = typeof setTimeout == `function` ? setTimeout : null, _2 = typeof clearTimeout == `function` ? clearTimeout : null, v2 = typeof setImmediate < `u` ? setImmediate : null;
  typeof navigator < `u` && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y2(e3) {
    for (var i3 = n2(l2); i3 !== null; ) {
      if (i3.callback === null)
        r2(l2);
      else if (i3.startTime <= e3)
        r2(l2), i3.sortIndex = i3.expirationTime, t2(c2, i3);
      else
        break;
      i3 = n2(l2);
    }
  }
  function b2(e3) {
    if (h2 = false, y2(e3), !m2)
      if (n2(c2) !== null)
        m2 = true, ie(x2);
      else {
        var t3 = n2(l2);
        t3 !== null && O(b2, t3.startTime - e3);
      }
  }
  function x2(t3, i3) {
    m2 = false, h2 && (h2 = false, _2(w2), w2 = -1), p2 = true;
    var a3 = f2;
    try {
      for (y2(i3), d2 = n2(c2); d2 !== null && (!(d2.expirationTime > i3) || t3 && !D2()); ) {
        var o3 = d2.callback;
        if (typeof o3 == `function`) {
          d2.callback = null, f2 = d2.priorityLevel;
          var s3 = o3(d2.expirationTime <= i3);
          i3 = e2.unstable_now(), typeof s3 == `function` ? d2.callback = s3 : d2 === n2(c2) && r2(c2), y2(i3);
        } else
          r2(c2);
        d2 = n2(c2);
      }
      if (d2 !== null)
        var u3 = true;
      else {
        var g3 = n2(l2);
        g3 !== null && O(b2, g3.startTime - i3), u3 = false;
      }
      return u3;
    } finally {
      d2 = null, f2 = a3, p2 = false;
    }
  }
  var S2 = false, C2 = null, w2 = -1, T2 = 5, E2 = -1;
  function D2() {
    return !(e2.unstable_now() - E2 < T2);
  }
  function ee2() {
    if (C2 !== null) {
      var t3 = e2.unstable_now();
      E2 = t3;
      var n3 = true;
      try {
        n3 = C2(true, t3);
      } finally {
        n3 ? te2() : (S2 = false, C2 = null);
      }
    } else
      S2 = false;
  }
  var te2;
  if (typeof v2 == `function`)
    te2 = function() {
      v2(ee2);
    };
  else if (typeof MessageChannel < `u`) {
    var ne2 = new MessageChannel(), re2 = ne2.port2;
    ne2.port1.onmessage = ee2, te2 = function() {
      re2.postMessage(null);
    };
  } else
    te2 = function() {
      g2(ee2, 0);
    };
  function ie(e3) {
    C2 = e3, S2 || (S2 = true, te2());
  }
  function O(t3, n3) {
    w2 = g2(function() {
      t3(e2.unstable_now());
    }, n3);
  }
  e2.unstable_IdlePriority = 5, e2.unstable_ImmediatePriority = 1, e2.unstable_LowPriority = 4, e2.unstable_NormalPriority = 3, e2.unstable_Profiling = null, e2.unstable_UserBlockingPriority = 2, e2.unstable_cancelCallback = function(e3) {
    e3.callback = null;
  }, e2.unstable_continueExecution = function() {
    m2 || p2 || (m2 = true, ie(x2));
  }, e2.unstable_forceFrameRate = function(e3) {
    0 > e3 || 125 < e3 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : T2 = 0 < e3 ? Math.floor(1e3 / e3) : 5;
  }, e2.unstable_getCurrentPriorityLevel = function() {
    return f2;
  }, e2.unstable_getFirstCallbackNode = function() {
    return n2(c2);
  }, e2.unstable_next = function(e3) {
    switch (f2) {
      case 1:
      case 2:
      case 3:
        var t3 = 3;
        break;
      default:
        t3 = f2;
    }
    var n3 = f2;
    f2 = t3;
    try {
      return e3();
    } finally {
      f2 = n3;
    }
  }, e2.unstable_pauseExecution = function() {
  }, e2.unstable_requestPaint = function() {
  }, e2.unstable_runWithPriority = function(e3, t3) {
    switch (e3) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e3 = 3;
    }
    var n3 = f2;
    f2 = e3;
    try {
      return t3();
    } finally {
      f2 = n3;
    }
  }, e2.unstable_scheduleCallback = function(r3, i3, a3) {
    var o3 = e2.unstable_now();
    switch (typeof a3 == `object` && a3 ? (a3 = a3.delay, a3 = typeof a3 == `number` && 0 < a3 ? o3 + a3 : o3) : a3 = o3, r3) {
      case 1:
        var s3 = -1;
        break;
      case 2:
        s3 = 250;
        break;
      case 5:
        s3 = 1073741823;
        break;
      case 4:
        s3 = 1e4;
        break;
      default:
        s3 = 5e3;
    }
    return s3 = a3 + s3, r3 = { id: u2++, callback: i3, priorityLevel: r3, startTime: a3, expirationTime: s3, sortIndex: -1 }, a3 > o3 ? (r3.sortIndex = a3, t2(l2, r3), n2(c2) === null && r3 === n2(l2) && (h2 ? (_2(w2), w2 = -1) : h2 = true, O(b2, a3 - o3))) : (r3.sortIndex = s3, t2(c2, r3), m2 || p2 || (m2 = true, ie(x2))), r3;
  }, e2.unstable_shouldYield = D2, e2.unstable_wrapCallback = function(e3) {
    var t3 = f2;
    return function() {
      var n3 = f2;
      f2 = t3;
      try {
        return e3.apply(this, arguments);
      } finally {
        f2 = n3;
      }
    };
  };
}), i = e((e2, t2) => {
  t2.exports = r();
}), a = e((e2) => {
  var n2 = t(), r2 = i();
  function a2(e3) {
    for (var t2 = `https://reactjs.org/docs/error-decoder.html?invariant=` + e3, n3 = 1; n3 < arguments.length; n3++)
      t2 += `&args[]=` + encodeURIComponent(arguments[n3]);
    return `Minified React error #` + e3 + `; visit ` + t2 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  var o2 = /* @__PURE__ */ new Set(), s2 = {};
  function c2(e3, t2) {
    l2(e3, t2), l2(e3 + `Capture`, t2);
  }
  function l2(e3, t2) {
    for (s2[e3] = t2, e3 = 0; e3 < t2.length; e3++)
      o2.add(t2[e3]);
  }
  var u2 = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0), d2 = Object.prototype.hasOwnProperty, f2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p2 = {}, m2 = {};
  function h2(e3) {
    return d2.call(m2, e3) ? true : d2.call(p2, e3) ? false : f2.test(e3) ? m2[e3] = true : (p2[e3] = true, false);
  }
  function g2(e3, t2, n3, r3) {
    if (n3 !== null && n3.type === 0)
      return false;
    switch (typeof t2) {
      case `function`:
      case `symbol`:
        return true;
      case `boolean`:
        return r3 ? false : n3 === null ? (e3 = e3.toLowerCase().slice(0, 5), e3 !== `data-` && e3 !== `aria-`) : !n3.acceptsBooleans;
      default:
        return false;
    }
  }
  function _2(e3, t2, n3, r3) {
    if (t2 == null || g2(e3, t2, n3, r3))
      return true;
    if (r3)
      return false;
    if (n3 !== null)
      switch (n3.type) {
        case 3:
          return !t2;
        case 4:
          return false === t2;
        case 5:
          return isNaN(t2);
        case 6:
          return isNaN(t2) || 1 > t2;
      }
    return false;
  }
  function v2(e3, t2, n3, r3, i2, a3, o3) {
    this.acceptsBooleans = t2 === 2 || t2 === 3 || t2 === 4, this.attributeName = r3, this.attributeNamespace = i2, this.mustUseProperty = n3, this.propertyName = e3, this.type = t2, this.sanitizeURL = a3, this.removeEmptyString = o3;
  }
  var y2 = {};
  `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e3) {
    y2[e3] = new v2(e3, 0, false, e3, null, false, false);
  }), [[`acceptCharset`, `accept-charset`], [`className`, `class`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`]].forEach(function(e3) {
    var t2 = e3[0];
    y2[t2] = new v2(t2, 1, false, e3[1], null, false, false);
  }), [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function(e3) {
    y2[e3] = new v2(e3, 2, false, e3.toLowerCase(), null, false, false);
  }), [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(function(e3) {
    y2[e3] = new v2(e3, 2, false, e3, null, false, false);
  }), `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e3) {
    y2[e3] = new v2(e3, 3, false, e3.toLowerCase(), null, false, false);
  }), [`checked`, `multiple`, `muted`, `selected`].forEach(function(e3) {
    y2[e3] = new v2(e3, 3, true, e3, null, false, false);
  }), [`capture`, `download`].forEach(function(e3) {
    y2[e3] = new v2(e3, 4, false, e3, null, false, false);
  }), [`cols`, `rows`, `size`, `span`].forEach(function(e3) {
    y2[e3] = new v2(e3, 6, false, e3, null, false, false);
  }), [`rowSpan`, `start`].forEach(function(e3) {
    y2[e3] = new v2(e3, 5, false, e3.toLowerCase(), null, false, false);
  });
  var b2 = /[\-:]([a-z])/g;
  function x2(e3) {
    return e3[1].toUpperCase();
  }
  `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e3) {
    var t2 = e3.replace(b2, x2);
    y2[t2] = new v2(t2, 1, false, e3, null, false, false);
  }), `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e3) {
    var t2 = e3.replace(b2, x2);
    y2[t2] = new v2(t2, 1, false, e3, `http://www.w3.org/1999/xlink`, false, false);
  }), [`xml:base`, `xml:lang`, `xml:space`].forEach(function(e3) {
    var t2 = e3.replace(b2, x2);
    y2[t2] = new v2(t2, 1, false, e3, `http://www.w3.org/XML/1998/namespace`, false, false);
  }), [`tabIndex`, `crossOrigin`].forEach(function(e3) {
    y2[e3] = new v2(e3, 1, false, e3.toLowerCase(), null, false, false);
  }), y2.xlinkHref = new v2(`xlinkHref`, 1, false, `xlink:href`, `http://www.w3.org/1999/xlink`, true, false), [`src`, `href`, `action`, `formAction`].forEach(function(e3) {
    y2[e3] = new v2(e3, 1, false, e3.toLowerCase(), null, true, true);
  });
  function S2(e3, t2, n3, r3) {
    var i2 = y2.hasOwnProperty(t2) ? y2[t2] : null;
    (i2 === null ? r3 || !(2 < t2.length) || t2[0] !== `o` && t2[0] !== `O` || t2[1] !== `n` && t2[1] !== `N` : i2.type !== 0) && (_2(t2, n3, i2, r3) && (n3 = null), r3 || i2 === null ? h2(t2) && (n3 === null ? e3.removeAttribute(t2) : e3.setAttribute(t2, `` + n3)) : i2.mustUseProperty ? e3[i2.propertyName] = n3 === null ? i2.type === 3 ? false : `` : n3 : (t2 = i2.attributeName, r3 = i2.attributeNamespace, n3 === null ? e3.removeAttribute(t2) : (i2 = i2.type, n3 = i2 === 3 || i2 === 4 && true === n3 ? `` : `` + n3, r3 ? e3.setAttributeNS(r3, t2, n3) : e3.setAttribute(t2, n3))));
  }
  var C2 = n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w2 = Symbol.for(`react.element`), T2 = Symbol.for(`react.portal`), E2 = Symbol.for(`react.fragment`), D2 = Symbol.for(`react.strict_mode`), ee2 = Symbol.for(`react.profiler`), te2 = Symbol.for(`react.provider`), ne2 = Symbol.for(`react.context`), re2 = Symbol.for(`react.forward_ref`), ie = Symbol.for(`react.suspense`), O = Symbol.for(`react.suspense_list`), ae = Symbol.for(`react.memo`), k = Symbol.for(`react.lazy`), oe = Symbol.for(`react.offscreen`), se = Symbol.iterator;
  function ce(e3) {
    return typeof e3 != `object` || !e3 ? null : (e3 = se && e3[se] || e3[`@@iterator`], typeof e3 == `function` ? e3 : null);
  }
  var A = Object.assign, le;
  function ue(e3) {
    if (le === void 0)
      try {
        throw Error();
      } catch (e4) {
        var t2 = e4.stack.trim().match(/\n( *(at )?)/);
        le = t2 && t2[1] || ``;
      }
    return `
` + le + e3;
  }
  var de = false;
  function j(e3, t2) {
    if (!e3 || de)
      return ``;
    de = true;
    var n3 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t2)
        if (t2 = function() {
          throw Error();
        }, Object.defineProperty(t2.prototype, `props`, { set: function() {
          throw Error();
        } }), typeof Reflect == `object` && Reflect.construct) {
          try {
            Reflect.construct(t2, []);
          } catch (e4) {
            var r3 = e4;
          }
          Reflect.construct(e3, [], t2);
        } else {
          try {
            t2.call();
          } catch (e4) {
            r3 = e4;
          }
          e3.call(t2.prototype);
        }
      else {
        try {
          throw Error();
        } catch (e4) {
          r3 = e4;
        }
        e3();
      }
    } catch (t3) {
      if (t3 && r3 && typeof t3.stack == `string`) {
        for (var i2 = t3.stack.split(`
`), a3 = r3.stack.split(`
`), o3 = i2.length - 1, s3 = a3.length - 1; 1 <= o3 && 0 <= s3 && i2[o3] !== a3[s3]; )
          s3--;
        for (; 1 <= o3 && 0 <= s3; o3--, s3--)
          if (i2[o3] !== a3[s3]) {
            if (o3 !== 1 || s3 !== 1)
              do
                if (o3--, s3--, 0 > s3 || i2[o3] !== a3[s3]) {
                  var c3 = `
` + i2[o3].replace(` at new `, ` at `);
                  return e3.displayName && c3.includes(`<anonymous>`) && (c3 = c3.replace(`<anonymous>`, e3.displayName)), c3;
                }
              while (1 <= o3 && 0 <= s3);
            break;
          }
      }
    } finally {
      de = false, Error.prepareStackTrace = n3;
    }
    return (e3 = e3 ? e3.displayName || e3.name : ``) ? ue(e3) : ``;
  }
  function fe(e3) {
    switch (e3.tag) {
      case 5:
        return ue(e3.type);
      case 16:
        return ue(`Lazy`);
      case 13:
        return ue(`Suspense`);
      case 19:
        return ue(`SuspenseList`);
      case 0:
      case 2:
      case 15:
        return e3 = j(e3.type, false), e3;
      case 11:
        return e3 = j(e3.type.render, false), e3;
      case 1:
        return e3 = j(e3.type, true), e3;
      default:
        return ``;
    }
  }
  function pe(e3) {
    if (e3 == null)
      return null;
    if (typeof e3 == `function`)
      return e3.displayName || e3.name || null;
    if (typeof e3 == `string`)
      return e3;
    switch (e3) {
      case E2:
        return `Fragment`;
      case T2:
        return `Portal`;
      case ee2:
        return `Profiler`;
      case D2:
        return `StrictMode`;
      case ie:
        return `Suspense`;
      case O:
        return `SuspenseList`;
    }
    if (typeof e3 == `object`)
      switch (e3.$$typeof) {
        case ne2:
          return (e3.displayName || `Context`) + `.Consumer`;
        case te2:
          return (e3._context.displayName || `Context`) + `.Provider`;
        case re2:
          var t2 = e3.render;
          return e3 = e3.displayName, e3 || (e3 = (e3 = t2.displayName || t2.name || ``, e3 === `` ? `ForwardRef` : `ForwardRef(` + e3 + `)`)), e3;
        case ae:
          return t2 = e3.displayName || null, t2 === null ? pe(e3.type) || `Memo` : t2;
        case k:
          t2 = e3._payload, e3 = e3._init;
          try {
            return pe(e3(t2));
          } catch {
          }
      }
    return null;
  }
  function M(e3) {
    var t2 = e3.type;
    switch (e3.tag) {
      case 24:
        return `Cache`;
      case 9:
        return (t2.displayName || `Context`) + `.Consumer`;
      case 10:
        return (t2._context.displayName || `Context`) + `.Provider`;
      case 18:
        return `DehydratedFragment`;
      case 11:
        return e3 = t2.render, e3 = e3.displayName || e3.name || ``, t2.displayName || (e3 === `` ? `ForwardRef` : `ForwardRef(` + e3 + `)`);
      case 7:
        return `Fragment`;
      case 5:
        return t2;
      case 4:
        return `Portal`;
      case 3:
        return `Root`;
      case 6:
        return `Text`;
      case 16:
        return pe(t2);
      case 8:
        return t2 === D2 ? `StrictMode` : `Mode`;
      case 22:
        return `Offscreen`;
      case 12:
        return `Profiler`;
      case 21:
        return `Scope`;
      case 13:
        return `Suspense`;
      case 19:
        return `SuspenseList`;
      case 25:
        return `TracingMarker`;
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t2 == `function`)
          return t2.displayName || t2.name || null;
        if (typeof t2 == `string`)
          return t2;
    }
    return null;
  }
  function me(e3) {
    switch (typeof e3) {
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e3;
      case `object`:
        return e3;
      default:
        return ``;
    }
  }
  function he(e3) {
    var t2 = e3.type;
    return (e3 = e3.nodeName) && e3.toLowerCase() === `input` && (t2 === `checkbox` || t2 === `radio`);
  }
  function ge(e3) {
    var t2 = he(e3) ? `checked` : `value`, n3 = Object.getOwnPropertyDescriptor(e3.constructor.prototype, t2), r3 = `` + e3[t2];
    if (!e3.hasOwnProperty(t2) && n3 !== void 0 && typeof n3.get == `function` && typeof n3.set == `function`) {
      var i2 = n3.get, a3 = n3.set;
      return Object.defineProperty(e3, t2, { configurable: true, get: function() {
        return i2.call(this);
      }, set: function(e4) {
        r3 = `` + e4, a3.call(this, e4);
      } }), Object.defineProperty(e3, t2, { enumerable: n3.enumerable }), { getValue: function() {
        return r3;
      }, setValue: function(e4) {
        r3 = `` + e4;
      }, stopTracking: function() {
        e3._valueTracker = null, delete e3[t2];
      } };
    }
  }
  function _e(e3) {
    e3._valueTracker || (e3._valueTracker = ge(e3));
  }
  function ve(e3) {
    if (!e3)
      return false;
    var t2 = e3._valueTracker;
    if (!t2)
      return true;
    var n3 = t2.getValue(), r3 = ``;
    return e3 && (r3 = he(e3) ? e3.checked ? `true` : `false` : e3.value), e3 = r3, e3 === n3 ? false : (t2.setValue(e3), true);
  }
  function ye(e3) {
    if (e3 || (e3 = typeof document < `u` ? document : void 0), e3 === void 0)
      return null;
    try {
      return e3.activeElement || e3.body;
    } catch {
      return e3.body;
    }
  }
  function be(e3, t2) {
    var n3 = t2.checked;
    return A({}, t2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n3 ?? e3._wrapperState.initialChecked });
  }
  function xe(e3, t2) {
    var n3 = t2.defaultValue == null ? `` : t2.defaultValue, r3 = t2.checked == null ? t2.defaultChecked : t2.checked;
    n3 = me(t2.value == null ? n3 : t2.value), e3._wrapperState = { initialChecked: r3, initialValue: n3, controlled: t2.type === `checkbox` || t2.type === `radio` ? t2.checked != null : t2.value != null };
  }
  function Se(e3, t2) {
    t2 = t2.checked, t2 != null && S2(e3, `checked`, t2, false);
  }
  function Ce(e3, t2) {
    Se(e3, t2);
    var n3 = me(t2.value), r3 = t2.type;
    if (n3 != null)
      r3 === `number` ? (n3 === 0 && e3.value === `` || e3.value != n3) && (e3.value = `` + n3) : e3.value !== `` + n3 && (e3.value = `` + n3);
    else if (r3 === `submit` || r3 === `reset`) {
      e3.removeAttribute(`value`);
      return;
    }
    t2.hasOwnProperty(`value`) ? Te(e3, t2.type, n3) : t2.hasOwnProperty(`defaultValue`) && Te(e3, t2.type, me(t2.defaultValue)), t2.checked == null && t2.defaultChecked != null && (e3.defaultChecked = !!t2.defaultChecked);
  }
  function we(e3, t2, n3) {
    if (t2.hasOwnProperty(`value`) || t2.hasOwnProperty(`defaultValue`)) {
      var r3 = t2.type;
      if (!(r3 !== `submit` && r3 !== `reset` || t2.value !== void 0 && t2.value !== null))
        return;
      t2 = `` + e3._wrapperState.initialValue, n3 || t2 === e3.value || (e3.value = t2), e3.defaultValue = t2;
    }
    n3 = e3.name, n3 !== `` && (e3.name = ``), e3.defaultChecked = !!e3._wrapperState.initialChecked, n3 !== `` && (e3.name = n3);
  }
  function Te(e3, t2, n3) {
    (t2 !== `number` || ye(e3.ownerDocument) !== e3) && (n3 == null ? e3.defaultValue = `` + e3._wrapperState.initialValue : e3.defaultValue !== `` + n3 && (e3.defaultValue = `` + n3));
  }
  var Ee = Array.isArray;
  function De(e3, t2, n3, r3) {
    if (e3 = e3.options, t2) {
      t2 = {};
      for (var i2 = 0; i2 < n3.length; i2++)
        t2[`$` + n3[i2]] = true;
      for (n3 = 0; n3 < e3.length; n3++)
        i2 = t2.hasOwnProperty(`$` + e3[n3].value), e3[n3].selected !== i2 && (e3[n3].selected = i2), i2 && r3 && (e3[n3].defaultSelected = true);
    } else {
      for (n3 = `` + me(n3), t2 = null, i2 = 0; i2 < e3.length; i2++) {
        if (e3[i2].value === n3) {
          e3[i2].selected = true, r3 && (e3[i2].defaultSelected = true);
          return;
        }
        t2 !== null || e3[i2].disabled || (t2 = e3[i2]);
      }
      t2 !== null && (t2.selected = true);
    }
  }
  function Oe(e3, t2) {
    if (t2.dangerouslySetInnerHTML != null)
      throw Error(a2(91));
    return A({}, t2, { value: void 0, defaultValue: void 0, children: `` + e3._wrapperState.initialValue });
  }
  function ke(e3, t2) {
    var n3 = t2.value;
    if (n3 == null) {
      if (n3 = t2.children, t2 = t2.defaultValue, n3 != null) {
        if (t2 != null)
          throw Error(a2(92));
        if (Ee(n3)) {
          if (1 < n3.length)
            throw Error(a2(93));
          n3 = n3[0];
        }
        t2 = n3;
      }
      t2 ?? (t2 = ``), n3 = t2;
    }
    e3._wrapperState = { initialValue: me(n3) };
  }
  function Ae(e3, t2) {
    var n3 = me(t2.value), r3 = me(t2.defaultValue);
    n3 != null && (n3 = `` + n3, n3 !== e3.value && (e3.value = n3), t2.defaultValue == null && e3.defaultValue !== n3 && (e3.defaultValue = n3)), r3 != null && (e3.defaultValue = `` + r3);
  }
  function je(e3) {
    var t2 = e3.textContent;
    t2 === e3._wrapperState.initialValue && t2 !== `` && t2 !== null && (e3.value = t2);
  }
  function Me(e3) {
    switch (e3) {
      case `svg`:
        return `http://www.w3.org/2000/svg`;
      case `math`:
        return `http://www.w3.org/1998/Math/MathML`;
      default:
        return `http://www.w3.org/1999/xhtml`;
    }
  }
  function Ne(e3, t2) {
    return e3 == null || e3 === `http://www.w3.org/1999/xhtml` ? Me(t2) : e3 === `http://www.w3.org/2000/svg` && t2 === `foreignObject` ? `http://www.w3.org/1999/xhtml` : e3;
  }
  var Pe, Fe = function(e3) {
    return typeof MSApp < `u` && MSApp.execUnsafeLocalFunction ? function(t2, n3, r3, i2) {
      MSApp.execUnsafeLocalFunction(function() {
        return e3(t2, n3, r3, i2);
      });
    } : e3;
  }(function(e3, t2) {
    if (e3.namespaceURI !== `http://www.w3.org/2000/svg` || `innerHTML` in e3)
      e3.innerHTML = t2;
    else {
      for (Pe || (Pe = document.createElement(`div`)), Pe.innerHTML = `<svg>` + t2.valueOf().toString() + `</svg>`, t2 = Pe.firstChild; e3.firstChild; )
        e3.removeChild(e3.firstChild);
      for (; t2.firstChild; )
        e3.appendChild(t2.firstChild);
    }
  });
  function Ie(e3, t2) {
    if (t2) {
      var n3 = e3.firstChild;
      if (n3 && n3 === e3.lastChild && n3.nodeType === 3) {
        n3.nodeValue = t2;
        return;
      }
    }
    e3.textContent = t2;
  }
  var Le = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Re = [`Webkit`, `ms`, `Moz`, `O`];
  Object.keys(Le).forEach(function(e3) {
    Re.forEach(function(t2) {
      t2 = t2 + e3.charAt(0).toUpperCase() + e3.substring(1), Le[t2] = Le[e3];
    });
  });
  function ze(e3, t2, n3) {
    return t2 == null || typeof t2 == `boolean` || t2 === `` ? `` : n3 || typeof t2 != `number` || t2 === 0 || Le.hasOwnProperty(e3) && Le[e3] ? (`` + t2).trim() : t2 + `px`;
  }
  function Be(e3, t2) {
    for (var n3 in e3 = e3.style, t2)
      if (t2.hasOwnProperty(n3)) {
        var r3 = n3.indexOf(`--`) === 0, i2 = ze(n3, t2[n3], r3);
        n3 === `float` && (n3 = `cssFloat`), r3 ? e3.setProperty(n3, i2) : e3[n3] = i2;
      }
  }
  var Ve = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function He(e3, t2) {
    if (t2) {
      if (Ve[e3] && (t2.children != null || t2.dangerouslySetInnerHTML != null))
        throw Error(a2(137, e3));
      if (t2.dangerouslySetInnerHTML != null) {
        if (t2.children != null)
          throw Error(a2(60));
        if (typeof t2.dangerouslySetInnerHTML != `object` || !(`__html` in t2.dangerouslySetInnerHTML))
          throw Error(a2(61));
      }
      if (t2.style != null && typeof t2.style != `object`)
        throw Error(a2(62));
    }
  }
  function Ue(e3, t2) {
    if (e3.indexOf(`-`) === -1)
      return typeof t2.is == `string`;
    switch (e3) {
      case `annotation-xml`:
      case `color-profile`:
      case `font-face`:
      case `font-face-src`:
      case `font-face-uri`:
      case `font-face-format`:
      case `font-face-name`:
      case `missing-glyph`:
        return false;
      default:
        return true;
    }
  }
  var We = null;
  function Ge(e3) {
    return e3 = e3.target || e3.srcElement || window, e3.correspondingUseElement && (e3 = e3.correspondingUseElement), e3.nodeType === 3 ? e3.parentNode : e3;
  }
  var Ke = null, qe = null, Je = null;
  function Ye(e3) {
    if (e3 = qi(e3)) {
      if (typeof Ke != `function`)
        throw Error(a2(280));
      var t2 = e3.stateNode;
      t2 && (t2 = Yi(t2), Ke(e3.stateNode, e3.type, t2));
    }
  }
  function Xe(e3) {
    qe ? Je ? Je.push(e3) : Je = [e3] : qe = e3;
  }
  function Ze() {
    if (qe) {
      var e3 = qe, t2 = Je;
      if (Je = qe = null, Ye(e3), t2)
        for (e3 = 0; e3 < t2.length; e3++)
          Ye(t2[e3]);
    }
  }
  function Qe(e3, t2) {
    return e3(t2);
  }
  function $e() {
  }
  var et = false;
  function tt(e3, t2, n3) {
    if (et)
      return e3(t2, n3);
    et = true;
    try {
      return Qe(e3, t2, n3);
    } finally {
      et = false, (qe !== null || Je !== null) && ($e(), Ze());
    }
  }
  function nt(e3, t2) {
    var n3 = e3.stateNode;
    if (n3 === null)
      return null;
    var r3 = Yi(n3);
    if (r3 === null)
      return null;
    n3 = r3[t2];
    a:
      switch (t2) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          (r3 = !r3.disabled) || (e3 = e3.type, r3 = !(e3 === `button` || e3 === `input` || e3 === `select` || e3 === `textarea`)), e3 = !r3;
          break a;
        default:
          e3 = false;
      }
    if (e3)
      return null;
    if (n3 && typeof n3 != `function`)
      throw Error(a2(231, t2, typeof n3));
    return n3;
  }
  var rt = false;
  if (u2)
    try {
      var it = {};
      Object.defineProperty(it, `passive`, { get: function() {
        rt = true;
      } }), window.addEventListener(`test`, it, it), window.removeEventListener(`test`, it, it);
    } catch {
      rt = false;
    }
  function at(e3, t2, n3, r3, i2, a3, o3, s3, c3) {
    var l3 = Array.prototype.slice.call(arguments, 3);
    try {
      t2.apply(n3, l3);
    } catch (e4) {
      this.onError(e4);
    }
  }
  var ot = false, st = null, ct = false, lt = null, ut = { onError: function(e3) {
    ot = true, st = e3;
  } };
  function dt(e3, t2, n3, r3, i2, a3, o3, s3, c3) {
    ot = false, st = null, at.apply(ut, arguments);
  }
  function ft(e3, t2, n3, r3, i2, o3, s3, c3, l3) {
    if (dt.apply(this, arguments), ot) {
      if (ot) {
        var u3 = st;
        ot = false, st = null;
      } else
        throw Error(a2(198));
      ct || (ct = true, lt = u3);
    }
  }
  function pt(e3) {
    var t2 = e3, n3 = e3;
    if (e3.alternate)
      for (; t2.return; )
        t2 = t2.return;
    else {
      e3 = t2;
      do
        t2 = e3, t2.flags & 4098 && (n3 = t2.return), e3 = t2.return;
      while (e3);
    }
    return t2.tag === 3 ? n3 : null;
  }
  function mt(e3) {
    if (e3.tag === 13) {
      var t2 = e3.memoizedState;
      if (t2 === null && (e3 = e3.alternate, e3 !== null && (t2 = e3.memoizedState)), t2 !== null)
        return t2.dehydrated;
    }
    return null;
  }
  function ht(e3) {
    if (pt(e3) !== e3)
      throw Error(a2(188));
  }
  function gt(e3) {
    var t2 = e3.alternate;
    if (!t2) {
      if (t2 = pt(e3), t2 === null)
        throw Error(a2(188));
      return t2 === e3 ? e3 : null;
    }
    for (var n3 = e3, r3 = t2; ; ) {
      var i2 = n3.return;
      if (i2 === null)
        break;
      var o3 = i2.alternate;
      if (o3 === null) {
        if (r3 = i2.return, r3 !== null) {
          n3 = r3;
          continue;
        }
        break;
      }
      if (i2.child === o3.child) {
        for (o3 = i2.child; o3; ) {
          if (o3 === n3)
            return ht(i2), e3;
          if (o3 === r3)
            return ht(i2), t2;
          o3 = o3.sibling;
        }
        throw Error(a2(188));
      }
      if (n3.return !== r3.return)
        n3 = i2, r3 = o3;
      else {
        for (var s3 = false, c3 = i2.child; c3; ) {
          if (c3 === n3) {
            s3 = true, n3 = i2, r3 = o3;
            break;
          }
          if (c3 === r3) {
            s3 = true, r3 = i2, n3 = o3;
            break;
          }
          c3 = c3.sibling;
        }
        if (!s3) {
          for (c3 = o3.child; c3; ) {
            if (c3 === n3) {
              s3 = true, n3 = o3, r3 = i2;
              break;
            }
            if (c3 === r3) {
              s3 = true, r3 = o3, n3 = i2;
              break;
            }
            c3 = c3.sibling;
          }
          if (!s3)
            throw Error(a2(189));
        }
      }
      if (n3.alternate !== r3)
        throw Error(a2(190));
    }
    if (n3.tag !== 3)
      throw Error(a2(188));
    return n3.stateNode.current === n3 ? e3 : t2;
  }
  function _t(e3) {
    return e3 = gt(e3), e3 === null ? null : vt(e3);
  }
  function vt(e3) {
    if (e3.tag === 5 || e3.tag === 6)
      return e3;
    for (e3 = e3.child; e3 !== null; ) {
      var t2 = vt(e3);
      if (t2 !== null)
        return t2;
      e3 = e3.sibling;
    }
    return null;
  }
  var yt = r2.unstable_scheduleCallback, bt = r2.unstable_cancelCallback, xt = r2.unstable_shouldYield, St = r2.unstable_requestPaint, N = r2.unstable_now, Ct = r2.unstable_getCurrentPriorityLevel, wt = r2.unstable_ImmediatePriority, Tt = r2.unstable_UserBlockingPriority, Et = r2.unstable_NormalPriority, Dt = r2.unstable_LowPriority, Ot = r2.unstable_IdlePriority, kt = null, At = null;
  function jt(e3) {
    if (At && typeof At.onCommitFiberRoot == `function`)
      try {
        At.onCommitFiberRoot(kt, e3, void 0, (e3.current.flags & 128) == 128);
      } catch {
      }
  }
  var Mt = Math.clz32 ? Math.clz32 : Ft, Nt = Math.log, Pt = Math.LN2;
  function Ft(e3) {
    return e3 >>>= 0, e3 === 0 ? 32 : 31 - (Nt(e3) / Pt | 0) | 0;
  }
  var It = 64, Lt = 4194304;
  function Rt(e3) {
    switch (e3 & -e3) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e3 & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e3 & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e3;
    }
  }
  function zt(e3, t2) {
    var n3 = e3.pendingLanes;
    if (n3 === 0)
      return 0;
    var r3 = 0, i2 = e3.suspendedLanes, a3 = e3.pingedLanes, o3 = n3 & 268435455;
    if (o3 !== 0) {
      var s3 = o3 & ~i2;
      s3 === 0 ? (a3 &= o3, a3 !== 0 && (r3 = Rt(a3))) : r3 = Rt(s3);
    } else
      o3 = n3 & ~i2, o3 === 0 ? a3 !== 0 && (r3 = Rt(a3)) : r3 = Rt(o3);
    if (r3 === 0)
      return 0;
    if (t2 !== 0 && t2 !== r3 && (t2 & i2) === 0 && (i2 = r3 & -r3, a3 = t2 & -t2, i2 >= a3 || i2 === 16 && a3 & 4194240))
      return t2;
    if (r3 & 4 && (r3 |= n3 & 16), t2 = e3.entangledLanes, t2 !== 0)
      for (e3 = e3.entanglements, t2 &= r3; 0 < t2; )
        n3 = 31 - Mt(t2), i2 = 1 << n3, r3 |= e3[n3], t2 &= ~i2;
    return r3;
  }
  function Bt(e3, t2) {
    switch (e3) {
      case 1:
      case 2:
      case 4:
        return t2 + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t2 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Vt(e3, t2) {
    for (var n3 = e3.suspendedLanes, r3 = e3.pingedLanes, i2 = e3.expirationTimes, a3 = e3.pendingLanes; 0 < a3; ) {
      var o3 = 31 - Mt(a3), s3 = 1 << o3, c3 = i2[o3];
      c3 === -1 ? ((s3 & n3) === 0 || (s3 & r3) !== 0) && (i2[o3] = Bt(s3, t2)) : c3 <= t2 && (e3.expiredLanes |= s3), a3 &= ~s3;
    }
  }
  function Ht(e3) {
    return e3 = e3.pendingLanes & -1073741825, e3 === 0 ? e3 & 1073741824 ? 1073741824 : 0 : e3;
  }
  function Ut() {
    var e3 = It;
    return It <<= 1, !(It & 4194240) && (It = 64), e3;
  }
  function Wt(e3) {
    for (var t2 = [], n3 = 0; 31 > n3; n3++)
      t2.push(e3);
    return t2;
  }
  function Gt(e3, t2, n3) {
    e3.pendingLanes |= t2, t2 !== 536870912 && (e3.suspendedLanes = 0, e3.pingedLanes = 0), e3 = e3.eventTimes, t2 = 31 - Mt(t2), e3[t2] = n3;
  }
  function Kt(e3, t2) {
    var n3 = e3.pendingLanes & ~t2;
    e3.pendingLanes = t2, e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.expiredLanes &= t2, e3.mutableReadLanes &= t2, e3.entangledLanes &= t2, t2 = e3.entanglements;
    var r3 = e3.eventTimes;
    for (e3 = e3.expirationTimes; 0 < n3; ) {
      var i2 = 31 - Mt(n3), a3 = 1 << i2;
      t2[i2] = 0, r3[i2] = -1, e3[i2] = -1, n3 &= ~a3;
    }
  }
  function qt(e3, t2) {
    var n3 = e3.entangledLanes |= t2;
    for (e3 = e3.entanglements; n3; ) {
      var r3 = 31 - Mt(n3), i2 = 1 << r3;
      i2 & t2 | e3[r3] & t2 && (e3[r3] |= t2), n3 &= ~i2;
    }
  }
  var P = 0;
  function Jt(e3) {
    return e3 &= -e3, 1 < e3 ? 4 < e3 ? e3 & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Yt, Xt, Zt, Qt, $t, en = false, tn = [], nn = null, rn = null, an = null, on = /* @__PURE__ */ new Map(), sn = /* @__PURE__ */ new Map(), cn = [], ln = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);
  function un(e3, t2) {
    switch (e3) {
      case `focusin`:
      case `focusout`:
        nn = null;
        break;
      case `dragenter`:
      case `dragleave`:
        rn = null;
        break;
      case `mouseover`:
      case `mouseout`:
        an = null;
        break;
      case `pointerover`:
      case `pointerout`:
        on.delete(t2.pointerId);
        break;
      case `gotpointercapture`:
      case `lostpointercapture`:
        sn.delete(t2.pointerId);
    }
  }
  function dn(e3, t2, n3, r3, i2, a3) {
    return e3 === null || e3.nativeEvent !== a3 ? (e3 = { blockedOn: t2, domEventName: n3, eventSystemFlags: r3, nativeEvent: a3, targetContainers: [i2] }, t2 !== null && (t2 = qi(t2), t2 !== null && Xt(t2)), e3) : (e3.eventSystemFlags |= r3, t2 = e3.targetContainers, i2 !== null && t2.indexOf(i2) === -1 && t2.push(i2), e3);
  }
  function fn(e3, t2, n3, r3, i2) {
    switch (t2) {
      case `focusin`:
        return nn = dn(nn, e3, t2, n3, r3, i2), true;
      case `dragenter`:
        return rn = dn(rn, e3, t2, n3, r3, i2), true;
      case `mouseover`:
        return an = dn(an, e3, t2, n3, r3, i2), true;
      case `pointerover`:
        var a3 = i2.pointerId;
        return on.set(a3, dn(on.get(a3) || null, e3, t2, n3, r3, i2)), true;
      case `gotpointercapture`:
        return a3 = i2.pointerId, sn.set(a3, dn(sn.get(a3) || null, e3, t2, n3, r3, i2)), true;
    }
    return false;
  }
  function pn(e3) {
    var t2 = Ki(e3.target);
    if (t2 !== null) {
      var n3 = pt(t2);
      if (n3 !== null) {
        if (t2 = n3.tag, t2 === 13) {
          if (t2 = mt(n3), t2 !== null) {
            e3.blockedOn = t2, $t(e3.priority, function() {
              Zt(n3);
            });
            return;
          }
        } else if (t2 === 3 && n3.stateNode.current.memoizedState.isDehydrated) {
          e3.blockedOn = n3.tag === 3 ? n3.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e3.blockedOn = null;
  }
  function mn(e3) {
    if (e3.blockedOn !== null)
      return false;
    for (var t2 = e3.targetContainers; 0 < t2.length; ) {
      var n3 = Tn(e3.domEventName, e3.eventSystemFlags, t2[0], e3.nativeEvent);
      if (n3 === null) {
        n3 = e3.nativeEvent;
        var r3 = new n3.constructor(n3.type, n3);
        We = r3, n3.target.dispatchEvent(r3), We = null;
      } else
        return t2 = qi(n3), t2 !== null && Xt(t2), e3.blockedOn = n3, false;
      t2.shift();
    }
    return true;
  }
  function hn(e3, t2, n3) {
    mn(e3) && n3.delete(t2);
  }
  function gn() {
    en = false, nn !== null && mn(nn) && (nn = null), rn !== null && mn(rn) && (rn = null), an !== null && mn(an) && (an = null), on.forEach(hn), sn.forEach(hn);
  }
  function _n(e3, t2) {
    e3.blockedOn === t2 && (e3.blockedOn = null, en || (en = true, r2.unstable_scheduleCallback(r2.unstable_NormalPriority, gn)));
  }
  function vn(e3) {
    function t2(t3) {
      return _n(t3, e3);
    }
    if (0 < tn.length) {
      _n(tn[0], e3);
      for (var n3 = 1; n3 < tn.length; n3++) {
        var r3 = tn[n3];
        r3.blockedOn === e3 && (r3.blockedOn = null);
      }
    }
    for (nn !== null && _n(nn, e3), rn !== null && _n(rn, e3), an !== null && _n(an, e3), on.forEach(t2), sn.forEach(t2), n3 = 0; n3 < cn.length; n3++)
      r3 = cn[n3], r3.blockedOn === e3 && (r3.blockedOn = null);
    for (; 0 < cn.length && (n3 = cn[0], n3.blockedOn === null); )
      pn(n3), n3.blockedOn === null && cn.shift();
  }
  var yn = C2.ReactCurrentBatchConfig, bn = true;
  function xn(e3, t2, n3, r3) {
    var i2 = P, a3 = yn.transition;
    yn.transition = null;
    try {
      P = 1, Cn(e3, t2, n3, r3);
    } finally {
      P = i2, yn.transition = a3;
    }
  }
  function Sn(e3, t2, n3, r3) {
    var i2 = P, a3 = yn.transition;
    yn.transition = null;
    try {
      P = 4, Cn(e3, t2, n3, r3);
    } finally {
      P = i2, yn.transition = a3;
    }
  }
  function Cn(e3, t2, n3, r3) {
    if (bn) {
      var i2 = Tn(e3, t2, n3, r3);
      if (i2 === null)
        vi(e3, t2, r3, wn, n3), un(e3, r3);
      else if (fn(i2, e3, t2, n3, r3))
        r3.stopPropagation();
      else if (un(e3, r3), t2 & 4 && -1 < ln.indexOf(e3)) {
        for (; i2 !== null; ) {
          var a3 = qi(i2);
          if (a3 !== null && Yt(a3), a3 = Tn(e3, t2, n3, r3), a3 === null && vi(e3, t2, r3, wn, n3), a3 === i2)
            break;
          i2 = a3;
        }
        i2 !== null && r3.stopPropagation();
      } else
        vi(e3, t2, r3, null, n3);
    }
  }
  var wn = null;
  function Tn(e3, t2, n3, r3) {
    if (wn = null, e3 = Ge(r3), e3 = Ki(e3), e3 !== null)
      if (t2 = pt(e3), t2 === null)
        e3 = null;
      else if (n3 = t2.tag, n3 === 13) {
        if (e3 = mt(t2), e3 !== null)
          return e3;
        e3 = null;
      } else if (n3 === 3) {
        if (t2.stateNode.current.memoizedState.isDehydrated)
          return t2.tag === 3 ? t2.stateNode.containerInfo : null;
        e3 = null;
      } else
        t2 !== e3 && (e3 = null);
    return wn = e3, null;
  }
  function En(e3) {
    switch (e3) {
      case `cancel`:
      case `click`:
      case `close`:
      case `contextmenu`:
      case `copy`:
      case `cut`:
      case `auxclick`:
      case `dblclick`:
      case `dragend`:
      case `dragstart`:
      case `drop`:
      case `focusin`:
      case `focusout`:
      case `input`:
      case `invalid`:
      case `keydown`:
      case `keypress`:
      case `keyup`:
      case `mousedown`:
      case `mouseup`:
      case `paste`:
      case `pause`:
      case `play`:
      case `pointercancel`:
      case `pointerdown`:
      case `pointerup`:
      case `ratechange`:
      case `reset`:
      case `resize`:
      case `seeked`:
      case `submit`:
      case `touchcancel`:
      case `touchend`:
      case `touchstart`:
      case `volumechange`:
      case `change`:
      case `selectionchange`:
      case `textInput`:
      case `compositionstart`:
      case `compositionend`:
      case `compositionupdate`:
      case `beforeblur`:
      case `afterblur`:
      case `beforeinput`:
      case `blur`:
      case `fullscreenchange`:
      case `focus`:
      case `hashchange`:
      case `popstate`:
      case `select`:
      case `selectstart`:
        return 1;
      case `drag`:
      case `dragenter`:
      case `dragexit`:
      case `dragleave`:
      case `dragover`:
      case `mousemove`:
      case `mouseout`:
      case `mouseover`:
      case `pointermove`:
      case `pointerout`:
      case `pointerover`:
      case `scroll`:
      case `toggle`:
      case `touchmove`:
      case `wheel`:
      case `mouseenter`:
      case `mouseleave`:
      case `pointerenter`:
      case `pointerleave`:
        return 4;
      case `message`:
        switch (Ct()) {
          case wt:
            return 1;
          case Tt:
            return 4;
          case Et:
          case Dt:
            return 16;
          case Ot:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dn = null, On = null, kn = null;
  function An() {
    if (kn)
      return kn;
    var e3, t2 = On, n3 = t2.length, r3, i2 = `value` in Dn ? Dn.value : Dn.textContent, a3 = i2.length;
    for (e3 = 0; e3 < n3 && t2[e3] === i2[e3]; e3++)
      ;
    var o3 = n3 - e3;
    for (r3 = 1; r3 <= o3 && t2[n3 - r3] === i2[a3 - r3]; r3++)
      ;
    return kn = i2.slice(e3, 1 < r3 ? 1 - r3 : void 0);
  }
  function jn(e3) {
    var t2 = e3.keyCode;
    return `charCode` in e3 ? (e3 = e3.charCode, e3 === 0 && t2 === 13 && (e3 = 13)) : e3 = t2, e3 === 10 && (e3 = 13), 32 <= e3 || e3 === 13 ? e3 : 0;
  }
  function Mn() {
    return true;
  }
  function Nn() {
    return false;
  }
  function Pn(e3) {
    function t2(t3, n3, r3, i2, a3) {
      for (var o3 in this._reactName = t3, this._targetInst = r3, this.type = n3, this.nativeEvent = i2, this.target = a3, this.currentTarget = null, e3)
        e3.hasOwnProperty(o3) && (t3 = e3[o3], this[o3] = t3 ? t3(i2) : i2[o3]);
      return this.isDefaultPrevented = (i2.defaultPrevented == null ? false === i2.returnValue : i2.defaultPrevented) ? Mn : Nn, this.isPropagationStopped = Nn, this;
    }
    return A(t2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e4 = this.nativeEvent;
      e4 && (e4.preventDefault ? e4.preventDefault() : typeof e4.returnValue != `unknown` && (e4.returnValue = false), this.isDefaultPrevented = Mn);
    }, stopPropagation: function() {
      var e4 = this.nativeEvent;
      e4 && (e4.stopPropagation ? e4.stopPropagation() : typeof e4.cancelBubble != `unknown` && (e4.cancelBubble = true), this.isPropagationStopped = Mn);
    }, persist: function() {
    }, isPersistent: Mn }), t2;
  }
  var Fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e3) {
    return e3.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, In = Pn(Fn), Ln = A({}, Fn, { view: 0, detail: 0 }), Rn = Pn(Ln), zn, Bn, Vn, Hn = A({}, Ln, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $n, button: 0, buttons: 0, relatedTarget: function(e3) {
    return e3.relatedTarget === void 0 ? e3.fromElement === e3.srcElement ? e3.toElement : e3.fromElement : e3.relatedTarget;
  }, movementX: function(e3) {
    return `movementX` in e3 ? e3.movementX : (e3 !== Vn && (Vn && e3.type === `mousemove` ? (zn = e3.screenX - Vn.screenX, Bn = e3.screenY - Vn.screenY) : Bn = zn = 0, Vn = e3), zn);
  }, movementY: function(e3) {
    return `movementY` in e3 ? e3.movementY : Bn;
  } }), Un = Pn(Hn), Wn = Pn(A({}, Hn, { dataTransfer: 0 })), Gn = Pn(A({}, Ln, { relatedTarget: 0 })), Kn = Pn(A({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), qn = Pn(A({}, Fn, { clipboardData: function(e3) {
    return `clipboardData` in e3 ? e3.clipboardData : window.clipboardData;
  } })), Jn = Pn(A({}, Fn, { data: 0 })), Yn = { Esc: `Escape`, Spacebar: ` `, Left: `ArrowLeft`, Up: `ArrowUp`, Right: `ArrowRight`, Down: `ArrowDown`, Del: `Delete`, Win: `OS`, Menu: `ContextMenu`, Apps: `ContextMenu`, Scroll: `ScrollLock`, MozPrintableKey: `Unidentified` }, Xn = { 8: `Backspace`, 9: `Tab`, 12: `Clear`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 19: `Pause`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 45: `Insert`, 46: `Delete`, 112: `F1`, 113: `F2`, 114: `F3`, 115: `F4`, 116: `F5`, 117: `F6`, 118: `F7`, 119: `F8`, 120: `F9`, 121: `F10`, 122: `F11`, 123: `F12`, 144: `NumLock`, 145: `ScrollLock`, 224: `Meta` }, Zn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
  function Qn(e3) {
    var t2 = this.nativeEvent;
    return t2.getModifierState ? t2.getModifierState(e3) : (e3 = Zn[e3]) ? !!t2[e3] : false;
  }
  function $n() {
    return Qn;
  }
  var er = Pn(A({}, Ln, { key: function(e3) {
    if (e3.key) {
      var t2 = Yn[e3.key] || e3.key;
      if (t2 !== `Unidentified`)
        return t2;
    }
    return e3.type === `keypress` ? (e3 = jn(e3), e3 === 13 ? `Enter` : String.fromCharCode(e3)) : e3.type === `keydown` || e3.type === `keyup` ? Xn[e3.keyCode] || `Unidentified` : ``;
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $n, charCode: function(e3) {
    return e3.type === `keypress` ? jn(e3) : 0;
  }, keyCode: function(e3) {
    return e3.type === `keydown` || e3.type === `keyup` ? e3.keyCode : 0;
  }, which: function(e3) {
    return e3.type === `keypress` ? jn(e3) : e3.type === `keydown` || e3.type === `keyup` ? e3.keyCode : 0;
  } })), tr = Pn(A({}, Hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), nr = Pn(A({}, Ln, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $n })), rr = Pn(A({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), ir = Pn(A({}, Hn, { deltaX: function(e3) {
    return `deltaX` in e3 ? e3.deltaX : `wheelDeltaX` in e3 ? -e3.wheelDeltaX : 0;
  }, deltaY: function(e3) {
    return `deltaY` in e3 ? e3.deltaY : `wheelDeltaY` in e3 ? -e3.wheelDeltaY : `wheelDelta` in e3 ? -e3.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 })), ar = [9, 13, 27, 32], or = u2 && `CompositionEvent` in window, sr = null;
  u2 && `documentMode` in document && (sr = document.documentMode);
  var cr = u2 && `TextEvent` in window && !sr, lr = u2 && (!or || sr && 8 < sr && 11 >= sr), ur = ` `, dr = false;
  function fr(e3, t2) {
    switch (e3) {
      case `keyup`:
        return ar.indexOf(t2.keyCode) !== -1;
      case `keydown`:
        return t2.keyCode !== 229;
      case `keypress`:
      case `mousedown`:
      case `focusout`:
        return true;
      default:
        return false;
    }
  }
  function pr(e3) {
    return e3 = e3.detail, typeof e3 == `object` && `data` in e3 ? e3.data : null;
  }
  var mr = false;
  function hr(e3, t2) {
    switch (e3) {
      case `compositionend`:
        return pr(t2);
      case `keypress`:
        return t2.which === 32 ? (dr = true, ur) : null;
      case `textInput`:
        return e3 = t2.data, e3 === ur && dr ? null : e3;
      default:
        return null;
    }
  }
  function gr(e3, t2) {
    if (mr)
      return e3 === `compositionend` || !or && fr(e3, t2) ? (e3 = An(), kn = On = Dn = null, mr = false, e3) : null;
    switch (e3) {
      case `paste`:
        return null;
      case `keypress`:
        if (!(t2.ctrlKey || t2.altKey || t2.metaKey) || t2.ctrlKey && t2.altKey) {
          if (t2.char && 1 < t2.char.length)
            return t2.char;
          if (t2.which)
            return String.fromCharCode(t2.which);
        }
        return null;
      case `compositionend`:
        return lr && t2.locale !== `ko` ? null : t2.data;
      default:
        return null;
    }
  }
  var _r = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function vr(e3) {
    var t2 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
    return t2 === `input` ? !!_r[e3.type] : t2 === `textarea`;
  }
  function yr(e3, t2, n3, r3) {
    Xe(r3), t2 = bi(t2, `onChange`), 0 < t2.length && (n3 = new In(`onChange`, `change`, null, n3, r3), e3.push({ event: n3, listeners: t2 }));
  }
  var br = null, xr = null;
  function Sr(e3) {
    pi(e3, 0);
  }
  function Cr(e3) {
    if (ve(Ji(e3)))
      return e3;
  }
  function wr(e3, t2) {
    if (e3 === `change`)
      return t2;
  }
  var Tr = false;
  if (u2) {
    var Er;
    if (u2) {
      var Dr = `oninput` in document;
      if (!Dr) {
        var Or = document.createElement(`div`);
        Or.setAttribute(`oninput`, `return;`), Dr = typeof Or.oninput == `function`;
      }
      Er = Dr;
    } else
      Er = false;
    Tr = Er && (!document.documentMode || 9 < document.documentMode);
  }
  function kr() {
    br && (br.detachEvent(`onpropertychange`, Ar), xr = br = null);
  }
  function Ar(e3) {
    if (e3.propertyName === `value` && Cr(xr)) {
      var t2 = [];
      yr(t2, xr, e3, Ge(e3)), tt(Sr, t2);
    }
  }
  function jr(e3, t2, n3) {
    e3 === `focusin` ? (kr(), br = t2, xr = n3, br.attachEvent(`onpropertychange`, Ar)) : e3 === `focusout` && kr();
  }
  function Mr(e3) {
    if (e3 === `selectionchange` || e3 === `keyup` || e3 === `keydown`)
      return Cr(xr);
  }
  function Nr(e3, t2) {
    if (e3 === `click`)
      return Cr(t2);
  }
  function Pr(e3, t2) {
    if (e3 === `input` || e3 === `change`)
      return Cr(t2);
  }
  function Fr(e3, t2) {
    return e3 === t2 && (e3 !== 0 || 1 / e3 == 1 / t2) || e3 !== e3 && t2 !== t2;
  }
  var Ir = typeof Object.is == `function` ? Object.is : Fr;
  function Lr(e3, t2) {
    if (Ir(e3, t2))
      return true;
    if (typeof e3 != `object` || !e3 || typeof t2 != `object` || !t2)
      return false;
    var n3 = Object.keys(e3), r3 = Object.keys(t2);
    if (n3.length !== r3.length)
      return false;
    for (r3 = 0; r3 < n3.length; r3++) {
      var i2 = n3[r3];
      if (!d2.call(t2, i2) || !Ir(e3[i2], t2[i2]))
        return false;
    }
    return true;
  }
  function Rr(e3) {
    for (; e3 && e3.firstChild; )
      e3 = e3.firstChild;
    return e3;
  }
  function zr(e3, t2) {
    var n3 = Rr(e3);
    e3 = 0;
    for (var r3; n3; ) {
      if (n3.nodeType === 3) {
        if (r3 = e3 + n3.textContent.length, e3 <= t2 && r3 >= t2)
          return { node: n3, offset: t2 - e3 };
        e3 = r3;
      }
      a: {
        for (; n3; ) {
          if (n3.nextSibling) {
            n3 = n3.nextSibling;
            break a;
          }
          n3 = n3.parentNode;
        }
        n3 = void 0;
      }
      n3 = Rr(n3);
    }
  }
  function Br(e3, t2) {
    return e3 && t2 ? e3 === t2 ? true : e3 && e3.nodeType === 3 ? false : t2 && t2.nodeType === 3 ? Br(e3, t2.parentNode) : `contains` in e3 ? e3.contains(t2) : e3.compareDocumentPosition ? !!(e3.compareDocumentPosition(t2) & 16) : false : false;
  }
  function Vr() {
    for (var e3 = window, t2 = ye(); t2 instanceof e3.HTMLIFrameElement; ) {
      try {
        var n3 = typeof t2.contentWindow.location.href == `string`;
      } catch {
        n3 = false;
      }
      if (n3)
        e3 = t2.contentWindow;
      else
        break;
      t2 = ye(e3.document);
    }
    return t2;
  }
  function Hr(e3) {
    var t2 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
    return t2 && (t2 === `input` && (e3.type === `text` || e3.type === `search` || e3.type === `tel` || e3.type === `url` || e3.type === `password`) || t2 === `textarea` || e3.contentEditable === `true`);
  }
  function Ur(e3) {
    var t2 = Vr(), n3 = e3.focusedElem, r3 = e3.selectionRange;
    if (t2 !== n3 && n3 && n3.ownerDocument && Br(n3.ownerDocument.documentElement, n3)) {
      if (r3 !== null && Hr(n3)) {
        if (t2 = r3.start, e3 = r3.end, e3 === void 0 && (e3 = t2), `selectionStart` in n3)
          n3.selectionStart = t2, n3.selectionEnd = Math.min(e3, n3.value.length);
        else if (e3 = (t2 = n3.ownerDocument || document) && t2.defaultView || window, e3.getSelection) {
          e3 = e3.getSelection();
          var i2 = n3.textContent.length, a3 = Math.min(r3.start, i2);
          r3 = r3.end === void 0 ? a3 : Math.min(r3.end, i2), !e3.extend && a3 > r3 && (i2 = r3, r3 = a3, a3 = i2), i2 = zr(n3, a3);
          var o3 = zr(n3, r3);
          i2 && o3 && (e3.rangeCount !== 1 || e3.anchorNode !== i2.node || e3.anchorOffset !== i2.offset || e3.focusNode !== o3.node || e3.focusOffset !== o3.offset) && (t2 = t2.createRange(), t2.setStart(i2.node, i2.offset), e3.removeAllRanges(), a3 > r3 ? (e3.addRange(t2), e3.extend(o3.node, o3.offset)) : (t2.setEnd(o3.node, o3.offset), e3.addRange(t2)));
        }
      }
      for (t2 = [], e3 = n3; e3 = e3.parentNode; )
        e3.nodeType === 1 && t2.push({ element: e3, left: e3.scrollLeft, top: e3.scrollTop });
      for (typeof n3.focus == `function` && n3.focus(), n3 = 0; n3 < t2.length; n3++)
        e3 = t2[n3], e3.element.scrollLeft = e3.left, e3.element.scrollTop = e3.top;
    }
  }
  var Wr = u2 && `documentMode` in document && 11 >= document.documentMode, Gr = null, Kr = null, qr = null, Jr = false;
  function Yr(e3, t2, n3) {
    var r3 = n3.window === n3 ? n3.document : n3.nodeType === 9 ? n3 : n3.ownerDocument;
    Jr || Gr == null || Gr !== ye(r3) || (r3 = Gr, `selectionStart` in r3 && Hr(r3) ? r3 = { start: r3.selectionStart, end: r3.selectionEnd } : (r3 = (r3.ownerDocument && r3.ownerDocument.defaultView || window).getSelection(), r3 = { anchorNode: r3.anchorNode, anchorOffset: r3.anchorOffset, focusNode: r3.focusNode, focusOffset: r3.focusOffset }), qr && Lr(qr, r3) || (qr = r3, r3 = bi(Kr, `onSelect`), 0 < r3.length && (t2 = new In(`onSelect`, `select`, null, t2, n3), e3.push({ event: t2, listeners: r3 }), t2.target = Gr)));
  }
  function Xr(e3, t2) {
    var n3 = {};
    return n3[e3.toLowerCase()] = t2.toLowerCase(), n3[`Webkit` + e3] = `webkit` + t2, n3[`Moz` + e3] = `moz` + t2, n3;
  }
  var Zr = { animationend: Xr(`Animation`, `AnimationEnd`), animationiteration: Xr(`Animation`, `AnimationIteration`), animationstart: Xr(`Animation`, `AnimationStart`), transitionend: Xr(`Transition`, `TransitionEnd`) }, Qr = {}, $r = {};
  u2 && ($r = document.createElement(`div`).style, `AnimationEvent` in window || (delete Zr.animationend.animation, delete Zr.animationiteration.animation, delete Zr.animationstart.animation), `TransitionEvent` in window || delete Zr.transitionend.transition);
  function ei(e3) {
    if (Qr[e3])
      return Qr[e3];
    if (!Zr[e3])
      return e3;
    var t2 = Zr[e3], n3;
    for (n3 in t2)
      if (t2.hasOwnProperty(n3) && n3 in $r)
        return Qr[e3] = t2[n3];
    return e3;
  }
  var ti = ei(`animationend`), ni = ei(`animationiteration`), ri = ei(`animationstart`), ii = ei(`transitionend`), ai = /* @__PURE__ */ new Map(), oi = `abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  function si(e3, t2) {
    ai.set(e3, t2), c2(t2, [e3]);
  }
  for (var ci = 0; ci < oi.length; ci++) {
    var li = oi[ci];
    si(li.toLowerCase(), `on` + (li[0].toUpperCase() + li.slice(1)));
  }
  si(ti, `onAnimationEnd`), si(ni, `onAnimationIteration`), si(ri, `onAnimationStart`), si(`dblclick`, `onDoubleClick`), si(`focusin`, `onFocus`), si(`focusout`, `onBlur`), si(ii, `onTransitionEnd`), l2(`onMouseEnter`, [`mouseout`, `mouseover`]), l2(`onMouseLeave`, [`mouseout`, `mouseover`]), l2(`onPointerEnter`, [`pointerout`, `pointerover`]), l2(`onPointerLeave`, [`pointerout`, `pointerover`]), c2(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), c2(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), c2(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), c2(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), c2(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), c2(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var ui = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), di = new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ui));
  function fi(e3, t2, n3) {
    var r3 = e3.type || `unknown-event`;
    e3.currentTarget = n3, ft(r3, t2, void 0, e3), e3.currentTarget = null;
  }
  function pi(e3, t2) {
    t2 = (t2 & 4) != 0;
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3], i2 = r3.event;
      r3 = r3.listeners;
      a: {
        var a3 = void 0;
        if (t2)
          for (var o3 = r3.length - 1; 0 <= o3; o3--) {
            var s3 = r3[o3], c3 = s3.instance, l3 = s3.currentTarget;
            if (s3 = s3.listener, c3 !== a3 && i2.isPropagationStopped())
              break a;
            fi(i2, s3, l3), a3 = c3;
          }
        else
          for (o3 = 0; o3 < r3.length; o3++) {
            if (s3 = r3[o3], c3 = s3.instance, l3 = s3.currentTarget, s3 = s3.listener, c3 !== a3 && i2.isPropagationStopped())
              break a;
            fi(i2, s3, l3), a3 = c3;
          }
      }
    }
    if (ct)
      throw e3 = lt, ct = false, lt = null, e3;
  }
  function F(e3, t2) {
    var n3 = t2[Ui];
    n3 === void 0 && (n3 = t2[Ui] = /* @__PURE__ */ new Set());
    var r3 = e3 + `__bubble`;
    n3.has(r3) || (_i(t2, e3, 2, false), n3.add(r3));
  }
  function mi(e3, t2, n3) {
    var r3 = 0;
    t2 && (r3 |= 4), _i(n3, e3, r3, t2);
  }
  var hi = `_reactListening` + Math.random().toString(36).slice(2);
  function gi(e3) {
    if (!e3[hi]) {
      e3[hi] = true, o2.forEach(function(t3) {
        t3 !== `selectionchange` && (di.has(t3) || mi(t3, false, e3), mi(t3, true, e3));
      });
      var t2 = e3.nodeType === 9 ? e3 : e3.ownerDocument;
      t2 === null || t2[hi] || (t2[hi] = true, mi(`selectionchange`, false, t2));
    }
  }
  function _i(e3, t2, n3, r3) {
    switch (En(t2)) {
      case 1:
        var i2 = xn;
        break;
      case 4:
        i2 = Sn;
        break;
      default:
        i2 = Cn;
    }
    n3 = i2.bind(null, t2, n3, e3), i2 = void 0, !rt || t2 !== `touchstart` && t2 !== `touchmove` && t2 !== `wheel` || (i2 = true), r3 ? i2 === void 0 ? e3.addEventListener(t2, n3, true) : e3.addEventListener(t2, n3, { capture: true, passive: i2 }) : i2 === void 0 ? e3.addEventListener(t2, n3, false) : e3.addEventListener(t2, n3, { passive: i2 });
  }
  function vi(e3, t2, n3, r3, i2) {
    var a3 = r3;
    if (!(t2 & 1) && !(t2 & 2) && r3 !== null)
      a:
        for (; ; ) {
          if (r3 === null)
            return;
          var o3 = r3.tag;
          if (o3 === 3 || o3 === 4) {
            var s3 = r3.stateNode.containerInfo;
            if (s3 === i2 || s3.nodeType === 8 && s3.parentNode === i2)
              break;
            if (o3 === 4)
              for (o3 = r3.return; o3 !== null; ) {
                var c3 = o3.tag;
                if ((c3 === 3 || c3 === 4) && (c3 = o3.stateNode.containerInfo, c3 === i2 || c3.nodeType === 8 && c3.parentNode === i2))
                  return;
                o3 = o3.return;
              }
            for (; s3 !== null; ) {
              if (o3 = Ki(s3), o3 === null)
                return;
              if (c3 = o3.tag, c3 === 5 || c3 === 6) {
                r3 = a3 = o3;
                continue a;
              }
              s3 = s3.parentNode;
            }
          }
          r3 = r3.return;
        }
    tt(function() {
      var r4 = a3, i3 = Ge(n3), o4 = [];
      a: {
        var s4 = ai.get(e3);
        if (s4 !== void 0) {
          var c4 = In, l3 = e3;
          switch (e3) {
            case `keypress`:
              if (jn(n3) === 0)
                break a;
            case `keydown`:
            case `keyup`:
              c4 = er;
              break;
            case `focusin`:
              l3 = `focus`, c4 = Gn;
              break;
            case `focusout`:
              l3 = `blur`, c4 = Gn;
              break;
            case `beforeblur`:
            case `afterblur`:
              c4 = Gn;
              break;
            case `click`:
              if (n3.button === 2)
                break a;
            case `auxclick`:
            case `dblclick`:
            case `mousedown`:
            case `mousemove`:
            case `mouseup`:
            case `mouseout`:
            case `mouseover`:
            case `contextmenu`:
              c4 = Un;
              break;
            case `drag`:
            case `dragend`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `dragstart`:
            case `drop`:
              c4 = Wn;
              break;
            case `touchcancel`:
            case `touchend`:
            case `touchmove`:
            case `touchstart`:
              c4 = nr;
              break;
            case ti:
            case ni:
            case ri:
              c4 = Kn;
              break;
            case ii:
              c4 = rr;
              break;
            case `scroll`:
              c4 = Rn;
              break;
            case `wheel`:
              c4 = ir;
              break;
            case `copy`:
            case `cut`:
            case `paste`:
              c4 = qn;
              break;
            case `gotpointercapture`:
            case `lostpointercapture`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `pointerup`:
              c4 = tr;
          }
          var u3 = (t2 & 4) != 0, d3 = !u3 && e3 === `scroll`, f3 = u3 ? s4 === null ? null : s4 + `Capture` : s4;
          u3 = [];
          for (var p3 = r4, m3; p3 !== null; ) {
            m3 = p3;
            var h3 = m3.stateNode;
            if (m3.tag === 5 && h3 !== null && (m3 = h3, f3 !== null && (h3 = nt(p3, f3), h3 != null && u3.push(yi(p3, h3, m3)))), d3)
              break;
            p3 = p3.return;
          }
          0 < u3.length && (s4 = new c4(s4, l3, null, n3, i3), o4.push({ event: s4, listeners: u3 }));
        }
      }
      if (!(t2 & 7)) {
        a: {
          if (s4 = e3 === `mouseover` || e3 === `pointerover`, c4 = e3 === `mouseout` || e3 === `pointerout`, s4 && n3 !== We && (l3 = n3.relatedTarget || n3.fromElement) && (Ki(l3) || l3[Hi]))
            break a;
          if ((c4 || s4) && (s4 = i3.window === i3 ? i3 : (s4 = i3.ownerDocument) ? s4.defaultView || s4.parentWindow : window, c4 ? (l3 = n3.relatedTarget || n3.toElement, c4 = r4, l3 = l3 ? Ki(l3) : null, l3 !== null && (d3 = pt(l3), l3 !== d3 || l3.tag !== 5 && l3.tag !== 6) && (l3 = null)) : (c4 = null, l3 = r4), c4 !== l3)) {
            if (u3 = Un, h3 = `onMouseLeave`, f3 = `onMouseEnter`, p3 = `mouse`, (e3 === `pointerout` || e3 === `pointerover`) && (u3 = tr, h3 = `onPointerLeave`, f3 = `onPointerEnter`, p3 = `pointer`), d3 = c4 == null ? s4 : Ji(c4), m3 = l3 == null ? s4 : Ji(l3), s4 = new u3(h3, p3 + `leave`, c4, n3, i3), s4.target = d3, s4.relatedTarget = m3, h3 = null, Ki(i3) === r4 && (u3 = new u3(f3, p3 + `enter`, l3, n3, i3), u3.target = m3, u3.relatedTarget = d3, h3 = u3), d3 = h3, c4 && l3)
              b: {
                for (u3 = c4, f3 = l3, p3 = 0, m3 = u3; m3; m3 = xi(m3))
                  p3++;
                for (m3 = 0, h3 = f3; h3; h3 = xi(h3))
                  m3++;
                for (; 0 < p3 - m3; )
                  u3 = xi(u3), p3--;
                for (; 0 < m3 - p3; )
                  f3 = xi(f3), m3--;
                for (; p3--; ) {
                  if (u3 === f3 || f3 !== null && u3 === f3.alternate)
                    break b;
                  u3 = xi(u3), f3 = xi(f3);
                }
                u3 = null;
              }
            else
              u3 = null;
            c4 !== null && Si(o4, s4, c4, u3, false), l3 !== null && d3 !== null && Si(o4, d3, l3, u3, true);
          }
        }
        a: {
          if (s4 = r4 ? Ji(r4) : window, c4 = s4.nodeName && s4.nodeName.toLowerCase(), c4 === `select` || c4 === `input` && s4.type === `file`)
            var g3 = wr;
          else if (vr(s4))
            if (Tr)
              g3 = Pr;
            else {
              g3 = Mr;
              var _3 = jr;
            }
          else
            (c4 = s4.nodeName) && c4.toLowerCase() === `input` && (s4.type === `checkbox` || s4.type === `radio`) && (g3 = Nr);
          if (g3 && (g3 = g3(e3, r4))) {
            yr(o4, g3, n3, i3);
            break a;
          }
          _3 && _3(e3, s4, r4), e3 === `focusout` && (_3 = s4._wrapperState) && _3.controlled && s4.type === `number` && Te(s4, `number`, s4.value);
        }
        switch (_3 = r4 ? Ji(r4) : window, e3) {
          case `focusin`:
            (vr(_3) || _3.contentEditable === `true`) && (Gr = _3, Kr = r4, qr = null);
            break;
          case `focusout`:
            qr = Kr = Gr = null;
            break;
          case `mousedown`:
            Jr = true;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            Jr = false, Yr(o4, n3, i3);
            break;
          case `selectionchange`:
            if (Wr)
              break;
          case `keydown`:
          case `keyup`:
            Yr(o4, n3, i3);
        }
        var v3;
        if (or)
          b: {
            switch (e3) {
              case `compositionstart`:
                var y3 = `onCompositionStart`;
                break b;
              case `compositionend`:
                y3 = `onCompositionEnd`;
                break b;
              case `compositionupdate`:
                y3 = `onCompositionUpdate`;
                break b;
            }
            y3 = void 0;
          }
        else
          mr ? fr(e3, n3) && (y3 = `onCompositionEnd`) : e3 === `keydown` && n3.keyCode === 229 && (y3 = `onCompositionStart`);
        y3 && (lr && n3.locale !== `ko` && (mr || y3 !== `onCompositionStart` ? y3 === `onCompositionEnd` && mr && (v3 = An()) : (Dn = i3, On = `value` in Dn ? Dn.value : Dn.textContent, mr = true)), _3 = bi(r4, y3), 0 < _3.length && (y3 = new Jn(y3, e3, null, n3, i3), o4.push({ event: y3, listeners: _3 }), v3 ? y3.data = v3 : (v3 = pr(n3), v3 !== null && (y3.data = v3)))), (v3 = cr ? hr(e3, n3) : gr(e3, n3)) && (r4 = bi(r4, `onBeforeInput`), 0 < r4.length && (i3 = new Jn(`onBeforeInput`, `beforeinput`, null, n3, i3), o4.push({ event: i3, listeners: r4 }), i3.data = v3));
      }
      pi(o4, t2);
    });
  }
  function yi(e3, t2, n3) {
    return { instance: e3, listener: t2, currentTarget: n3 };
  }
  function bi(e3, t2) {
    for (var n3 = t2 + `Capture`, r3 = []; e3 !== null; ) {
      var i2 = e3, a3 = i2.stateNode;
      i2.tag === 5 && a3 !== null && (i2 = a3, a3 = nt(e3, n3), a3 != null && r3.unshift(yi(e3, a3, i2)), a3 = nt(e3, t2), a3 != null && r3.push(yi(e3, a3, i2))), e3 = e3.return;
    }
    return r3;
  }
  function xi(e3) {
    if (e3 === null)
      return null;
    do
      e3 = e3.return;
    while (e3 && e3.tag !== 5);
    return e3 || null;
  }
  function Si(e3, t2, n3, r3, i2) {
    for (var a3 = t2._reactName, o3 = []; n3 !== null && n3 !== r3; ) {
      var s3 = n3, c3 = s3.alternate, l3 = s3.stateNode;
      if (c3 !== null && c3 === r3)
        break;
      s3.tag === 5 && l3 !== null && (s3 = l3, i2 ? (c3 = nt(n3, a3), c3 != null && o3.unshift(yi(n3, c3, s3))) : i2 || (c3 = nt(n3, a3), c3 != null && o3.push(yi(n3, c3, s3)))), n3 = n3.return;
    }
    o3.length !== 0 && e3.push({ event: t2, listeners: o3 });
  }
  var Ci = /\r\n?/g, wi = /\u0000|\uFFFD/g;
  function Ti(e3) {
    return (typeof e3 == `string` ? e3 : `` + e3).replace(Ci, `
`).replace(wi, ``);
  }
  function Ei(e3, t2, n3) {
    if (t2 = Ti(t2), Ti(e3) !== t2 && n3)
      throw Error(a2(425));
  }
  function Di() {
  }
  var Oi = null, ki = null;
  function Ai(e3, t2) {
    return e3 === `textarea` || e3 === `noscript` || typeof t2.children == `string` || typeof t2.children == `number` || typeof t2.dangerouslySetInnerHTML == `object` && t2.dangerouslySetInnerHTML !== null && t2.dangerouslySetInnerHTML.__html != null;
  }
  var ji = typeof setTimeout == `function` ? setTimeout : void 0, Mi = typeof clearTimeout == `function` ? clearTimeout : void 0, Ni = typeof Promise == `function` ? Promise : void 0, Pi = typeof queueMicrotask == `function` ? queueMicrotask : Ni === void 0 ? ji : function(e3) {
    return Ni.resolve(null).then(e3).catch(Fi);
  };
  function Fi(e3) {
    setTimeout(function() {
      throw e3;
    });
  }
  function Ii(e3, t2) {
    var n3 = t2, r3 = 0;
    do {
      var i2 = n3.nextSibling;
      if (e3.removeChild(n3), i2 && i2.nodeType === 8)
        if (n3 = i2.data, n3 === `/$`) {
          if (r3 === 0) {
            e3.removeChild(i2), vn(t2);
            return;
          }
          r3--;
        } else
          n3 !== `$` && n3 !== `$?` && n3 !== `$!` || r3++;
      n3 = i2;
    } while (n3);
    vn(t2);
  }
  function Li(e3) {
    for (; e3 != null; e3 = e3.nextSibling) {
      var t2 = e3.nodeType;
      if (t2 === 1 || t2 === 3)
        break;
      if (t2 === 8) {
        if (t2 = e3.data, t2 === `$` || t2 === `$!` || t2 === `$?`)
          break;
        if (t2 === `/$`)
          return null;
      }
    }
    return e3;
  }
  function Ri(e3) {
    e3 = e3.previousSibling;
    for (var t2 = 0; e3; ) {
      if (e3.nodeType === 8) {
        var n3 = e3.data;
        if (n3 === `$` || n3 === `$!` || n3 === `$?`) {
          if (t2 === 0)
            return e3;
          t2--;
        } else
          n3 === `/$` && t2++;
      }
      e3 = e3.previousSibling;
    }
    return null;
  }
  var zi = Math.random().toString(36).slice(2), Bi = `__reactFiber$` + zi, Vi = `__reactProps$` + zi, Hi = `__reactContainer$` + zi, Ui = `__reactEvents$` + zi, Wi = `__reactListeners$` + zi, Gi = `__reactHandles$` + zi;
  function Ki(e3) {
    var t2 = e3[Bi];
    if (t2)
      return t2;
    for (var n3 = e3.parentNode; n3; ) {
      if (t2 = n3[Hi] || n3[Bi]) {
        if (n3 = t2.alternate, t2.child !== null || n3 !== null && n3.child !== null)
          for (e3 = Ri(e3); e3 !== null; ) {
            if (n3 = e3[Bi])
              return n3;
            e3 = Ri(e3);
          }
        return t2;
      }
      e3 = n3, n3 = e3.parentNode;
    }
    return null;
  }
  function qi(e3) {
    return e3 = e3[Bi] || e3[Hi], !e3 || e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 13 && e3.tag !== 3 ? null : e3;
  }
  function Ji(e3) {
    if (e3.tag === 5 || e3.tag === 6)
      return e3.stateNode;
    throw Error(a2(33));
  }
  function Yi(e3) {
    return e3[Vi] || null;
  }
  var Xi = [], Zi = -1;
  function Qi(e3) {
    return { current: e3 };
  }
  function I(e3) {
    0 > Zi || (e3.current = Xi[Zi], Xi[Zi] = null, Zi--);
  }
  function L(e3, t2) {
    Zi++, Xi[Zi] = e3.current, e3.current = t2;
  }
  var $i = {}, ea = Qi($i), ta = Qi(false), na = $i;
  function ra(e3, t2) {
    var n3 = e3.type.contextTypes;
    if (!n3)
      return $i;
    var r3 = e3.stateNode;
    if (r3 && r3.__reactInternalMemoizedUnmaskedChildContext === t2)
      return r3.__reactInternalMemoizedMaskedChildContext;
    var i2 = {}, a3;
    for (a3 in n3)
      i2[a3] = t2[a3];
    return r3 && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = t2, e3.__reactInternalMemoizedMaskedChildContext = i2), i2;
  }
  function ia(e3) {
    return e3 = e3.childContextTypes, e3 != null;
  }
  function aa() {
    I(ta), I(ea);
  }
  function oa(e3, t2, n3) {
    if (ea.current !== $i)
      throw Error(a2(168));
    L(ea, t2), L(ta, n3);
  }
  function sa(e3, t2, n3) {
    var r3 = e3.stateNode;
    if (t2 = t2.childContextTypes, typeof r3.getChildContext != `function`)
      return n3;
    for (var i2 in r3 = r3.getChildContext(), r3)
      if (!(i2 in t2))
        throw Error(a2(108, M(e3) || `Unknown`, i2));
    return A({}, n3, r3);
  }
  function ca(e3) {
    return e3 = (e3 = e3.stateNode) && e3.__reactInternalMemoizedMergedChildContext || $i, na = ea.current, L(ea, e3), L(ta, ta.current), true;
  }
  function la(e3, t2, n3) {
    var r3 = e3.stateNode;
    if (!r3)
      throw Error(a2(169));
    n3 ? (e3 = sa(e3, t2, na), r3.__reactInternalMemoizedMergedChildContext = e3, I(ta), I(ea), L(ea, e3)) : I(ta), L(ta, n3);
  }
  var ua = null, da = false, fa = false;
  function pa(e3) {
    ua === null ? ua = [e3] : ua.push(e3);
  }
  function ma(e3) {
    da = true, pa(e3);
  }
  function ha() {
    if (!fa && ua !== null) {
      fa = true;
      var e3 = 0, t2 = P;
      try {
        var n3 = ua;
        for (P = 1; e3 < n3.length; e3++) {
          var r3 = n3[e3];
          do
            r3 = r3(true);
          while (r3 !== null);
        }
        ua = null, da = false;
      } catch (t3) {
        throw ua !== null && (ua = ua.slice(e3 + 1)), yt(wt, ha), t3;
      } finally {
        P = t2, fa = false;
      }
    }
    return null;
  }
  var ga = [], _a = 0, va = null, ya = 0, ba = [], xa = 0, Sa = null, Ca = 1, wa = ``;
  function Ta(e3, t2) {
    ga[_a++] = ya, ga[_a++] = va, va = e3, ya = t2;
  }
  function Ea(e3, t2, n3) {
    ba[xa++] = Ca, ba[xa++] = wa, ba[xa++] = Sa, Sa = e3;
    var r3 = Ca;
    e3 = wa;
    var i2 = 32 - Mt(r3) - 1;
    r3 &= ~(1 << i2), n3 += 1;
    var a3 = 32 - Mt(t2) + i2;
    if (30 < a3) {
      var o3 = i2 - i2 % 5;
      a3 = (r3 & (1 << o3) - 1).toString(32), r3 >>= o3, i2 -= o3, Ca = 1 << 32 - Mt(t2) + i2 | n3 << i2 | r3, wa = a3 + e3;
    } else
      Ca = 1 << a3 | n3 << i2 | r3, wa = e3;
  }
  function Da(e3) {
    e3.return !== null && (Ta(e3, 1), Ea(e3, 1, 0));
  }
  function Oa(e3) {
    for (; e3 === va; )
      va = ga[--_a], ga[_a] = null, ya = ga[--_a], ga[_a] = null;
    for (; e3 === Sa; )
      Sa = ba[--xa], ba[xa] = null, wa = ba[--xa], ba[xa] = null, Ca = ba[--xa], ba[xa] = null;
  }
  var ka = null, Aa = null, R = false, ja = null;
  function Ma(e3, t2) {
    var n3 = ql(5, null, null, 0);
    n3.elementType = `DELETED`, n3.stateNode = t2, n3.return = e3, t2 = e3.deletions, t2 === null ? (e3.deletions = [n3], e3.flags |= 16) : t2.push(n3);
  }
  function Na(e3, t2) {
    switch (e3.tag) {
      case 5:
        var n3 = e3.type;
        return t2 = t2.nodeType !== 1 || n3.toLowerCase() !== t2.nodeName.toLowerCase() ? null : t2, t2 === null ? false : (e3.stateNode = t2, ka = e3, Aa = Li(t2.firstChild), true);
      case 6:
        return t2 = e3.pendingProps === `` || t2.nodeType !== 3 ? null : t2, t2 === null ? false : (e3.stateNode = t2, ka = e3, Aa = null, true);
      case 13:
        return t2 = t2.nodeType === 8 ? t2 : null, t2 === null ? false : (n3 = Sa === null ? null : { id: Ca, overflow: wa }, e3.memoizedState = { dehydrated: t2, treeContext: n3, retryLane: 1073741824 }, n3 = ql(18, null, null, 0), n3.stateNode = t2, n3.return = e3, e3.child = n3, ka = e3, Aa = null, true);
      default:
        return false;
    }
  }
  function Pa(e3) {
    return (e3.mode & 1) != 0 && (e3.flags & 128) == 0;
  }
  function Fa(e3) {
    if (R) {
      var t2 = Aa;
      if (t2) {
        var n3 = t2;
        if (!Na(e3, t2)) {
          if (Pa(e3))
            throw Error(a2(418));
          t2 = Li(n3.nextSibling);
          var r3 = ka;
          t2 && Na(e3, t2) ? Ma(r3, n3) : (e3.flags = e3.flags & -4097 | 2, R = false, ka = e3);
        }
      } else {
        if (Pa(e3))
          throw Error(a2(418));
        e3.flags = e3.flags & -4097 | 2, R = false, ka = e3;
      }
    }
  }
  function Ia(e3) {
    for (e3 = e3.return; e3 !== null && e3.tag !== 5 && e3.tag !== 3 && e3.tag !== 13; )
      e3 = e3.return;
    ka = e3;
  }
  function La(e3) {
    if (e3 !== ka)
      return false;
    if (!R)
      return Ia(e3), R = true, false;
    var t2;
    if ((t2 = e3.tag !== 3) && !(t2 = e3.tag !== 5) && (t2 = e3.type, t2 = t2 !== `head` && t2 !== `body` && !Ai(e3.type, e3.memoizedProps)), t2 && (t2 = Aa)) {
      if (Pa(e3))
        throw Ra(), Error(a2(418));
      for (; t2; )
        Ma(e3, t2), t2 = Li(t2.nextSibling);
    }
    if (Ia(e3), e3.tag === 13) {
      if (e3 = e3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3)
        throw Error(a2(317));
      a: {
        for (e3 = e3.nextSibling, t2 = 0; e3; ) {
          if (e3.nodeType === 8) {
            var n3 = e3.data;
            if (n3 === `/$`) {
              if (t2 === 0) {
                Aa = Li(e3.nextSibling);
                break a;
              }
              t2--;
            } else
              n3 !== `$` && n3 !== `$!` && n3 !== `$?` || t2++;
          }
          e3 = e3.nextSibling;
        }
        Aa = null;
      }
    } else
      Aa = ka ? Li(e3.stateNode.nextSibling) : null;
    return true;
  }
  function Ra() {
    for (var e3 = Aa; e3; )
      e3 = Li(e3.nextSibling);
  }
  function za() {
    Aa = ka = null, R = false;
  }
  function Ba(e3) {
    ja === null ? ja = [e3] : ja.push(e3);
  }
  var Va = C2.ReactCurrentBatchConfig;
  function Ha(e3, t2) {
    if (e3 && e3.defaultProps) {
      for (var n3 in t2 = A({}, t2), e3 = e3.defaultProps, e3)
        t2[n3] === void 0 && (t2[n3] = e3[n3]);
      return t2;
    }
    return t2;
  }
  var Ua = Qi(null), Wa = null, Ga = null, Ka = null;
  function qa() {
    Ka = Ga = Wa = null;
  }
  function Ja(e3) {
    var t2 = Ua.current;
    I(Ua), e3._currentValue = t2;
  }
  function Ya(e3, t2, n3) {
    for (; e3 !== null; ) {
      var r3 = e3.alternate;
      if ((e3.childLanes & t2) === t2 ? r3 !== null && (r3.childLanes & t2) !== t2 && (r3.childLanes |= t2) : (e3.childLanes |= t2, r3 !== null && (r3.childLanes |= t2)), e3 === n3)
        break;
      e3 = e3.return;
    }
  }
  function Xa(e3, t2) {
    Wa = e3, Ka = Ga = null, e3 = e3.dependencies, e3 !== null && e3.firstContext !== null && ((e3.lanes & t2) !== 0 && (Vs = true), e3.firstContext = null);
  }
  function Za(e3) {
    var t2 = e3._currentValue;
    if (Ka !== e3)
      if (e3 = { context: e3, memoizedValue: t2, next: null }, Ga === null) {
        if (Wa === null)
          throw Error(a2(308));
        Ga = e3, Wa.dependencies = { lanes: 0, firstContext: e3 };
      } else
        Ga = Ga.next = e3;
    return t2;
  }
  var Qa = null;
  function $a(e3) {
    Qa === null ? Qa = [e3] : Qa.push(e3);
  }
  function eo(e3, t2, n3, r3) {
    var i2 = t2.interleaved;
    return i2 === null ? (n3.next = n3, $a(t2)) : (n3.next = i2.next, i2.next = n3), t2.interleaved = n3, to(e3, r3);
  }
  function to(e3, t2) {
    e3.lanes |= t2;
    var n3 = e3.alternate;
    for (n3 !== null && (n3.lanes |= t2), n3 = e3, e3 = e3.return; e3 !== null; )
      e3.childLanes |= t2, n3 = e3.alternate, n3 !== null && (n3.childLanes |= t2), n3 = e3, e3 = e3.return;
    return n3.tag === 3 ? n3.stateNode : null;
  }
  var no = false;
  function ro(e3) {
    e3.updateQueue = { baseState: e3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function io(e3, t2) {
    e3 = e3.updateQueue, t2.updateQueue === e3 && (t2.updateQueue = { baseState: e3.baseState, firstBaseUpdate: e3.firstBaseUpdate, lastBaseUpdate: e3.lastBaseUpdate, shared: e3.shared, effects: e3.effects });
  }
  function ao(e3, t2) {
    return { eventTime: e3, lane: t2, tag: 0, payload: null, callback: null, next: null };
  }
  function oo(e3, t2, n3) {
    var r3 = e3.updateQueue;
    if (r3 === null)
      return null;
    if (r3 = r3.shared, J & 2) {
      var i2 = r3.pending;
      return i2 === null ? t2.next = t2 : (t2.next = i2.next, i2.next = t2), r3.pending = t2, to(e3, n3);
    }
    return i2 = r3.interleaved, i2 === null ? (t2.next = t2, $a(r3)) : (t2.next = i2.next, i2.next = t2), r3.interleaved = t2, to(e3, n3);
  }
  function so(e3, t2, n3) {
    if (t2 = t2.updateQueue, t2 !== null && (t2 = t2.shared, n3 & 4194240)) {
      var r3 = t2.lanes;
      r3 &= e3.pendingLanes, n3 |= r3, t2.lanes = n3, qt(e3, n3);
    }
  }
  function co(e3, t2) {
    var n3 = e3.updateQueue, r3 = e3.alternate;
    if (r3 !== null && (r3 = r3.updateQueue, n3 === r3)) {
      var i2 = null, a3 = null;
      if (n3 = n3.firstBaseUpdate, n3 !== null) {
        do {
          var o3 = { eventTime: n3.eventTime, lane: n3.lane, tag: n3.tag, payload: n3.payload, callback: n3.callback, next: null };
          a3 === null ? i2 = a3 = o3 : a3 = a3.next = o3, n3 = n3.next;
        } while (n3 !== null);
        a3 === null ? i2 = a3 = t2 : a3 = a3.next = t2;
      } else
        i2 = a3 = t2;
      n3 = { baseState: r3.baseState, firstBaseUpdate: i2, lastBaseUpdate: a3, shared: r3.shared, effects: r3.effects }, e3.updateQueue = n3;
      return;
    }
    e3 = n3.lastBaseUpdate, e3 === null ? n3.firstBaseUpdate = t2 : e3.next = t2, n3.lastBaseUpdate = t2;
  }
  function lo(e3, t2, n3, r3) {
    var i2 = e3.updateQueue;
    no = false;
    var a3 = i2.firstBaseUpdate, o3 = i2.lastBaseUpdate, s3 = i2.shared.pending;
    if (s3 !== null) {
      i2.shared.pending = null;
      var c3 = s3, l3 = c3.next;
      c3.next = null, o3 === null ? a3 = l3 : o3.next = l3, o3 = c3;
      var u3 = e3.alternate;
      u3 !== null && (u3 = u3.updateQueue, s3 = u3.lastBaseUpdate, s3 !== o3 && (s3 === null ? u3.firstBaseUpdate = l3 : s3.next = l3, u3.lastBaseUpdate = c3));
    }
    if (a3 !== null) {
      var d3 = i2.baseState;
      o3 = 0, u3 = l3 = c3 = null, s3 = a3;
      do {
        var f3 = s3.lane, p3 = s3.eventTime;
        if ((r3 & f3) === f3) {
          u3 !== null && (u3 = u3.next = { eventTime: p3, lane: 0, tag: s3.tag, payload: s3.payload, callback: s3.callback, next: null });
          a: {
            var m3 = e3, h3 = s3;
            switch (f3 = t2, p3 = n3, h3.tag) {
              case 1:
                if (m3 = h3.payload, typeof m3 == `function`) {
                  d3 = m3.call(p3, d3, f3);
                  break a;
                }
                d3 = m3;
                break a;
              case 3:
                m3.flags = m3.flags & -65537 | 128;
              case 0:
                if (m3 = h3.payload, f3 = typeof m3 == `function` ? m3.call(p3, d3, f3) : m3, f3 == null)
                  break a;
                d3 = A({}, d3, f3);
                break a;
              case 2:
                no = true;
            }
          }
          s3.callback !== null && s3.lane !== 0 && (e3.flags |= 64, f3 = i2.effects, f3 === null ? i2.effects = [s3] : f3.push(s3));
        } else
          p3 = { eventTime: p3, lane: f3, tag: s3.tag, payload: s3.payload, callback: s3.callback, next: null }, u3 === null ? (l3 = u3 = p3, c3 = d3) : u3 = u3.next = p3, o3 |= f3;
        if (s3 = s3.next, s3 === null) {
          if (s3 = i2.shared.pending, s3 === null)
            break;
          f3 = s3, s3 = f3.next, f3.next = null, i2.lastBaseUpdate = f3, i2.shared.pending = null;
        }
      } while (1);
      if (u3 === null && (c3 = d3), i2.baseState = c3, i2.firstBaseUpdate = l3, i2.lastBaseUpdate = u3, t2 = i2.shared.interleaved, t2 !== null) {
        i2 = t2;
        do
          o3 |= i2.lane, i2 = i2.next;
        while (i2 !== t2);
      } else
        a3 === null && (i2.shared.lanes = 0);
      Xc |= o3, e3.lanes = o3, e3.memoizedState = d3;
    }
  }
  function uo(e3, t2, n3) {
    if (e3 = t2.effects, t2.effects = null, e3 !== null)
      for (t2 = 0; t2 < e3.length; t2++) {
        var r3 = e3[t2], i2 = r3.callback;
        if (i2 !== null) {
          if (r3.callback = null, r3 = n3, typeof i2 != `function`)
            throw Error(a2(191, i2));
          i2.call(r3);
        }
      }
  }
  var fo = new n2.Component().refs;
  function po(e3, t2, n3, r3) {
    t2 = e3.memoizedState, n3 = n3(r3, t2), n3 = n3 == null ? t2 : A({}, t2, n3), e3.memoizedState = n3, e3.lanes === 0 && (e3.updateQueue.baseState = n3);
  }
  var mo = { isMounted: function(e3) {
    return (e3 = e3._reactInternals) ? pt(e3) === e3 : false;
  }, enqueueSetState: function(e3, t2, n3) {
    e3 = e3._reactInternals;
    var r3 = ml(), i2 = hl(e3), a3 = ao(r3, i2);
    a3.payload = t2, n3 != null && (a3.callback = n3), t2 = oo(e3, a3, i2), t2 !== null && (gl(t2, e3, i2, r3), so(t2, e3, i2));
  }, enqueueReplaceState: function(e3, t2, n3) {
    e3 = e3._reactInternals;
    var r3 = ml(), i2 = hl(e3), a3 = ao(r3, i2);
    a3.tag = 1, a3.payload = t2, n3 != null && (a3.callback = n3), t2 = oo(e3, a3, i2), t2 !== null && (gl(t2, e3, i2, r3), so(t2, e3, i2));
  }, enqueueForceUpdate: function(e3, t2) {
    e3 = e3._reactInternals;
    var n3 = ml(), r3 = hl(e3), i2 = ao(n3, r3);
    i2.tag = 2, t2 != null && (i2.callback = t2), t2 = oo(e3, i2, r3), t2 !== null && (gl(t2, e3, r3, n3), so(t2, e3, r3));
  } };
  function ho(e3, t2, n3, r3, i2, a3, o3) {
    return e3 = e3.stateNode, typeof e3.shouldComponentUpdate == `function` ? e3.shouldComponentUpdate(r3, a3, o3) : t2.prototype && t2.prototype.isPureReactComponent ? !Lr(n3, r3) || !Lr(i2, a3) : true;
  }
  function go(e3, t2, n3) {
    var r3 = false, i2 = $i, a3 = t2.contextType;
    return typeof a3 == `object` && a3 ? a3 = Za(a3) : (i2 = ia(t2) ? na : ea.current, r3 = t2.contextTypes, a3 = (r3 = r3 != null) ? ra(e3, i2) : $i), t2 = new t2(n3, a3), e3.memoizedState = t2.state !== null && t2.state !== void 0 ? t2.state : null, t2.updater = mo, e3.stateNode = t2, t2._reactInternals = e3, r3 && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = i2, e3.__reactInternalMemoizedMaskedChildContext = a3), t2;
  }
  function _o(e3, t2, n3, r3) {
    e3 = t2.state, typeof t2.componentWillReceiveProps == `function` && t2.componentWillReceiveProps(n3, r3), typeof t2.UNSAFE_componentWillReceiveProps == `function` && t2.UNSAFE_componentWillReceiveProps(n3, r3), t2.state !== e3 && mo.enqueueReplaceState(t2, t2.state, null);
  }
  function vo(e3, t2, n3, r3) {
    var i2 = e3.stateNode;
    i2.props = n3, i2.state = e3.memoizedState, i2.refs = fo, ro(e3);
    var a3 = t2.contextType;
    typeof a3 == `object` && a3 ? i2.context = Za(a3) : (a3 = ia(t2) ? na : ea.current, i2.context = ra(e3, a3)), i2.state = e3.memoizedState, a3 = t2.getDerivedStateFromProps, typeof a3 == `function` && (po(e3, t2, a3, n3), i2.state = e3.memoizedState), typeof t2.getDerivedStateFromProps == `function` || typeof i2.getSnapshotBeforeUpdate == `function` || typeof i2.UNSAFE_componentWillMount != `function` && typeof i2.componentWillMount != `function` || (t2 = i2.state, typeof i2.componentWillMount == `function` && i2.componentWillMount(), typeof i2.UNSAFE_componentWillMount == `function` && i2.UNSAFE_componentWillMount(), t2 !== i2.state && mo.enqueueReplaceState(i2, i2.state, null), lo(e3, n3, i2, r3), i2.state = e3.memoizedState), typeof i2.componentDidMount == `function` && (e3.flags |= 4194308);
  }
  function yo(e3, t2, n3) {
    if (e3 = n3.ref, e3 !== null && typeof e3 != `function` && typeof e3 != `object`) {
      if (n3._owner) {
        if (n3 = n3._owner, n3) {
          if (n3.tag !== 1)
            throw Error(a2(309));
          var r3 = n3.stateNode;
        }
        if (!r3)
          throw Error(a2(147, e3));
        var i2 = r3, o3 = `` + e3;
        return t2 !== null && t2.ref !== null && typeof t2.ref == `function` && t2.ref._stringRef === o3 ? t2.ref : (t2 = function(e4) {
          var t3 = i2.refs;
          t3 === fo && (t3 = i2.refs = {}), e4 === null ? delete t3[o3] : t3[o3] = e4;
        }, t2._stringRef = o3, t2);
      }
      if (typeof e3 != `string`)
        throw Error(a2(284));
      if (!n3._owner)
        throw Error(a2(290, e3));
    }
    return e3;
  }
  function bo(e3, t2) {
    throw e3 = Object.prototype.toString.call(t2), Error(a2(31, e3 === `[object Object]` ? `object with keys {` + Object.keys(t2).join(`, `) + `}` : e3));
  }
  function xo(e3) {
    var t2 = e3._init;
    return t2(e3._payload);
  }
  function So(e3) {
    function t2(t3, n4) {
      if (e3) {
        var r4 = t3.deletions;
        r4 === null ? (t3.deletions = [n4], t3.flags |= 16) : r4.push(n4);
      }
    }
    function n3(n4, r4) {
      if (!e3)
        return null;
      for (; r4 !== null; )
        t2(n4, r4), r4 = r4.sibling;
      return null;
    }
    function r3(e4, t3) {
      for (e4 = /* @__PURE__ */ new Map(); t3 !== null; )
        t3.key === null ? e4.set(t3.index, t3) : e4.set(t3.key, t3), t3 = t3.sibling;
      return e4;
    }
    function i2(e4, t3) {
      return e4 = Xl(e4, t3), e4.index = 0, e4.sibling = null, e4;
    }
    function o3(t3, n4, r4) {
      return t3.index = r4, e3 ? (r4 = t3.alternate, r4 === null ? (t3.flags |= 2, n4) : (r4 = r4.index, r4 < n4 ? (t3.flags |= 2, n4) : r4)) : (t3.flags |= 1048576, n4);
    }
    function s3(t3) {
      return e3 && t3.alternate === null && (t3.flags |= 2), t3;
    }
    function c3(e4, t3, n4, r4) {
      return t3 === null || t3.tag !== 6 ? (t3 = eu(n4, e4.mode, r4), t3.return = e4, t3) : (t3 = i2(t3, n4), t3.return = e4, t3);
    }
    function l3(e4, t3, n4, r4) {
      var a3 = n4.type;
      return a3 === E2 ? d3(e4, t3, n4.props.children, r4, n4.key) : t3 !== null && (t3.elementType === a3 || typeof a3 == `object` && a3 && a3.$$typeof === k && xo(a3) === t3.type) ? (r4 = i2(t3, n4.props), r4.ref = yo(e4, t3, n4), r4.return = e4, r4) : (r4 = Zl(n4.type, n4.key, n4.props, null, e4.mode, r4), r4.ref = yo(e4, t3, n4), r4.return = e4, r4);
    }
    function u3(e4, t3, n4, r4) {
      return t3 === null || t3.tag !== 4 || t3.stateNode.containerInfo !== n4.containerInfo || t3.stateNode.implementation !== n4.implementation ? (t3 = tu(n4, e4.mode, r4), t3.return = e4, t3) : (t3 = i2(t3, n4.children || []), t3.return = e4, t3);
    }
    function d3(e4, t3, n4, r4, a3) {
      return t3 === null || t3.tag !== 7 ? (t3 = Ql(n4, e4.mode, r4, a3), t3.return = e4, t3) : (t3 = i2(t3, n4), t3.return = e4, t3);
    }
    function f3(e4, t3, n4) {
      if (typeof t3 == `string` && t3 !== `` || typeof t3 == `number`)
        return t3 = eu(`` + t3, e4.mode, n4), t3.return = e4, t3;
      if (typeof t3 == `object` && t3) {
        switch (t3.$$typeof) {
          case w2:
            return n4 = Zl(t3.type, t3.key, t3.props, null, e4.mode, n4), n4.ref = yo(e4, null, t3), n4.return = e4, n4;
          case T2:
            return t3 = tu(t3, e4.mode, n4), t3.return = e4, t3;
          case k:
            var r4 = t3._init;
            return f3(e4, r4(t3._payload), n4);
        }
        if (Ee(t3) || ce(t3))
          return t3 = Ql(t3, e4.mode, n4, null), t3.return = e4, t3;
        bo(e4, t3);
      }
      return null;
    }
    function p3(e4, t3, n4, r4) {
      var i3 = t3 === null ? null : t3.key;
      if (typeof n4 == `string` && n4 !== `` || typeof n4 == `number`)
        return i3 === null ? c3(e4, t3, `` + n4, r4) : null;
      if (typeof n4 == `object` && n4) {
        switch (n4.$$typeof) {
          case w2:
            return n4.key === i3 ? l3(e4, t3, n4, r4) : null;
          case T2:
            return n4.key === i3 ? u3(e4, t3, n4, r4) : null;
          case k:
            return i3 = n4._init, p3(e4, t3, i3(n4._payload), r4);
        }
        if (Ee(n4) || ce(n4))
          return i3 === null ? d3(e4, t3, n4, r4, null) : null;
        bo(e4, n4);
      }
      return null;
    }
    function m3(e4, t3, n4, r4, i3) {
      if (typeof r4 == `string` && r4 !== `` || typeof r4 == `number`)
        return e4 = e4.get(n4) || null, c3(t3, e4, `` + r4, i3);
      if (typeof r4 == `object` && r4) {
        switch (r4.$$typeof) {
          case w2:
            return e4 = e4.get(r4.key === null ? n4 : r4.key) || null, l3(t3, e4, r4, i3);
          case T2:
            return e4 = e4.get(r4.key === null ? n4 : r4.key) || null, u3(t3, e4, r4, i3);
          case k:
            var a3 = r4._init;
            return m3(e4, t3, n4, a3(r4._payload), i3);
        }
        if (Ee(r4) || ce(r4))
          return e4 = e4.get(n4) || null, d3(t3, e4, r4, i3, null);
        bo(t3, r4);
      }
      return null;
    }
    function h3(i3, a3, s4, c4) {
      for (var l4 = null, u4 = null, d4 = a3, h4 = a3 = 0, g4 = null; d4 !== null && h4 < s4.length; h4++) {
        d4.index > h4 ? (g4 = d4, d4 = null) : g4 = d4.sibling;
        var _4 = p3(i3, d4, s4[h4], c4);
        if (_4 === null) {
          d4 === null && (d4 = g4);
          break;
        }
        e3 && d4 && _4.alternate === null && t2(i3, d4), a3 = o3(_4, a3, h4), u4 === null ? l4 = _4 : u4.sibling = _4, u4 = _4, d4 = g4;
      }
      if (h4 === s4.length)
        return n3(i3, d4), R && Ta(i3, h4), l4;
      if (d4 === null) {
        for (; h4 < s4.length; h4++)
          d4 = f3(i3, s4[h4], c4), d4 !== null && (a3 = o3(d4, a3, h4), u4 === null ? l4 = d4 : u4.sibling = d4, u4 = d4);
        return R && Ta(i3, h4), l4;
      }
      for (d4 = r3(i3, d4); h4 < s4.length; h4++)
        g4 = m3(d4, i3, h4, s4[h4], c4), g4 !== null && (e3 && g4.alternate !== null && d4.delete(g4.key === null ? h4 : g4.key), a3 = o3(g4, a3, h4), u4 === null ? l4 = g4 : u4.sibling = g4, u4 = g4);
      return e3 && d4.forEach(function(e4) {
        return t2(i3, e4);
      }), R && Ta(i3, h4), l4;
    }
    function g3(i3, s4, c4, l4) {
      var u4 = ce(c4);
      if (typeof u4 != `function`)
        throw Error(a2(150));
      if (c4 = u4.call(c4), c4 == null)
        throw Error(a2(151));
      for (var d4 = u4 = null, h4 = s4, g4 = s4 = 0, _4 = null, v3 = c4.next(); h4 !== null && !v3.done; g4++, v3 = c4.next()) {
        h4.index > g4 ? (_4 = h4, h4 = null) : _4 = h4.sibling;
        var y3 = p3(i3, h4, v3.value, l4);
        if (y3 === null) {
          h4 === null && (h4 = _4);
          break;
        }
        e3 && h4 && y3.alternate === null && t2(i3, h4), s4 = o3(y3, s4, g4), d4 === null ? u4 = y3 : d4.sibling = y3, d4 = y3, h4 = _4;
      }
      if (v3.done)
        return n3(i3, h4), R && Ta(i3, g4), u4;
      if (h4 === null) {
        for (; !v3.done; g4++, v3 = c4.next())
          v3 = f3(i3, v3.value, l4), v3 !== null && (s4 = o3(v3, s4, g4), d4 === null ? u4 = v3 : d4.sibling = v3, d4 = v3);
        return R && Ta(i3, g4), u4;
      }
      for (h4 = r3(i3, h4); !v3.done; g4++, v3 = c4.next())
        v3 = m3(h4, i3, g4, v3.value, l4), v3 !== null && (e3 && v3.alternate !== null && h4.delete(v3.key === null ? g4 : v3.key), s4 = o3(v3, s4, g4), d4 === null ? u4 = v3 : d4.sibling = v3, d4 = v3);
      return e3 && h4.forEach(function(e4) {
        return t2(i3, e4);
      }), R && Ta(i3, g4), u4;
    }
    function _3(e4, r4, a3, o4) {
      if (typeof a3 == `object` && a3 && a3.type === E2 && a3.key === null && (a3 = a3.props.children), typeof a3 == `object` && a3) {
        switch (a3.$$typeof) {
          case w2:
            a: {
              for (var c4 = a3.key, l4 = r4; l4 !== null; ) {
                if (l4.key === c4) {
                  if (c4 = a3.type, c4 === E2) {
                    if (l4.tag === 7) {
                      n3(e4, l4.sibling), r4 = i2(l4, a3.props.children), r4.return = e4, e4 = r4;
                      break a;
                    }
                  } else if (l4.elementType === c4 || typeof c4 == `object` && c4 && c4.$$typeof === k && xo(c4) === l4.type) {
                    n3(e4, l4.sibling), r4 = i2(l4, a3.props), r4.ref = yo(e4, l4, a3), r4.return = e4, e4 = r4;
                    break a;
                  }
                  n3(e4, l4);
                  break;
                } else
                  t2(e4, l4);
                l4 = l4.sibling;
              }
              a3.type === E2 ? (r4 = Ql(a3.props.children, e4.mode, o4, a3.key), r4.return = e4, e4 = r4) : (o4 = Zl(a3.type, a3.key, a3.props, null, e4.mode, o4), o4.ref = yo(e4, r4, a3), o4.return = e4, e4 = o4);
            }
            return s3(e4);
          case T2:
            a: {
              for (l4 = a3.key; r4 !== null; ) {
                if (r4.key === l4)
                  if (r4.tag === 4 && r4.stateNode.containerInfo === a3.containerInfo && r4.stateNode.implementation === a3.implementation) {
                    n3(e4, r4.sibling), r4 = i2(r4, a3.children || []), r4.return = e4, e4 = r4;
                    break a;
                  } else {
                    n3(e4, r4);
                    break;
                  }
                else
                  t2(e4, r4);
                r4 = r4.sibling;
              }
              r4 = tu(a3, e4.mode, o4), r4.return = e4, e4 = r4;
            }
            return s3(e4);
          case k:
            return l4 = a3._init, _3(e4, r4, l4(a3._payload), o4);
        }
        if (Ee(a3))
          return h3(e4, r4, a3, o4);
        if (ce(a3))
          return g3(e4, r4, a3, o4);
        bo(e4, a3);
      }
      return typeof a3 == `string` && a3 !== `` || typeof a3 == `number` ? (a3 = `` + a3, r4 !== null && r4.tag === 6 ? (n3(e4, r4.sibling), r4 = i2(r4, a3), r4.return = e4, e4 = r4) : (n3(e4, r4), r4 = eu(a3, e4.mode, o4), r4.return = e4, e4 = r4), s3(e4)) : n3(e4, r4);
    }
    return _3;
  }
  var Co = So(true), wo = So(false), To = {}, Eo = Qi(To), Do = Qi(To), Oo = Qi(To);
  function ko(e3) {
    if (e3 === To)
      throw Error(a2(174));
    return e3;
  }
  function Ao(e3, t2) {
    switch (L(Oo, t2), L(Do, e3), L(Eo, To), e3 = t2.nodeType, e3) {
      case 9:
      case 11:
        t2 = (t2 = t2.documentElement) ? t2.namespaceURI : Ne(null, ``);
        break;
      default:
        e3 = e3 === 8 ? t2.parentNode : t2, t2 = e3.namespaceURI || null, e3 = e3.tagName, t2 = Ne(t2, e3);
    }
    I(Eo), L(Eo, t2);
  }
  function jo() {
    I(Eo), I(Do), I(Oo);
  }
  function Mo(e3) {
    ko(Oo.current);
    var t2 = ko(Eo.current), n3 = Ne(t2, e3.type);
    t2 !== n3 && (L(Do, e3), L(Eo, n3));
  }
  function No(e3) {
    Do.current === e3 && (I(Eo), I(Do));
  }
  var z = Qi(0);
  function Po(e3) {
    for (var t2 = e3; t2 !== null; ) {
      if (t2.tag === 13) {
        var n3 = t2.memoizedState;
        if (n3 !== null && (n3 = n3.dehydrated, n3 === null || n3.data === `$?` || n3.data === `$!`))
          return t2;
      } else if (t2.tag === 19 && t2.memoizedProps.revealOrder !== void 0) {
        if (t2.flags & 128)
          return t2;
      } else if (t2.child !== null) {
        t2.child.return = t2, t2 = t2.child;
        continue;
      }
      if (t2 === e3)
        break;
      for (; t2.sibling === null; ) {
        if (t2.return === null || t2.return === e3)
          return null;
        t2 = t2.return;
      }
      t2.sibling.return = t2.return, t2 = t2.sibling;
    }
    return null;
  }
  var Fo = [];
  function Io() {
    for (var e3 = 0; e3 < Fo.length; e3++)
      Fo[e3]._workInProgressVersionPrimary = null;
    Fo.length = 0;
  }
  var Lo = C2.ReactCurrentDispatcher, Ro = C2.ReactCurrentBatchConfig, zo = 0, B = null, V = null, H = null, Bo = false, Vo = false, Ho = 0, Uo = 0;
  function U() {
    throw Error(a2(321));
  }
  function Wo(e3, t2) {
    if (t2 === null)
      return false;
    for (var n3 = 0; n3 < t2.length && n3 < e3.length; n3++)
      if (!Ir(e3[n3], t2[n3]))
        return false;
    return true;
  }
  function Go(e3, t2, n3, r3, i2, o3) {
    if (zo = o3, B = t2, t2.memoizedState = null, t2.updateQueue = null, t2.lanes = 0, Lo.current = e3 === null || e3.memoizedState === null ? Os : ks, e3 = n3(r3, i2), Vo) {
      o3 = 0;
      do {
        if (Vo = false, Ho = 0, 25 <= o3)
          throw Error(a2(301));
        o3 += 1, H = V = null, t2.updateQueue = null, Lo.current = As, e3 = n3(r3, i2);
      } while (Vo);
    }
    if (Lo.current = Ds, t2 = V !== null && V.next !== null, zo = 0, H = V = B = null, Bo = false, t2)
      throw Error(a2(300));
    return e3;
  }
  function Ko() {
    var e3 = Ho !== 0;
    return Ho = 0, e3;
  }
  function qo() {
    var e3 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return H === null ? B.memoizedState = H = e3 : H = H.next = e3, H;
  }
  function Jo() {
    if (V === null) {
      var e3 = B.alternate;
      e3 = e3 === null ? null : e3.memoizedState;
    } else
      e3 = V.next;
    var t2 = H === null ? B.memoizedState : H.next;
    if (t2 !== null)
      H = t2, V = e3;
    else {
      if (e3 === null)
        throw Error(a2(310));
      V = e3, e3 = { memoizedState: V.memoizedState, baseState: V.baseState, baseQueue: V.baseQueue, queue: V.queue, next: null }, H === null ? B.memoizedState = H = e3 : H = H.next = e3;
    }
    return H;
  }
  function Yo(e3, t2) {
    return typeof t2 == `function` ? t2(e3) : t2;
  }
  function Xo(e3) {
    var t2 = Jo(), n3 = t2.queue;
    if (n3 === null)
      throw Error(a2(311));
    n3.lastRenderedReducer = e3;
    var r3 = V, i2 = r3.baseQueue, o3 = n3.pending;
    if (o3 !== null) {
      if (i2 !== null) {
        var s3 = i2.next;
        i2.next = o3.next, o3.next = s3;
      }
      r3.baseQueue = i2 = o3, n3.pending = null;
    }
    if (i2 !== null) {
      o3 = i2.next, r3 = r3.baseState;
      var c3 = s3 = null, l3 = null, u3 = o3;
      do {
        var d3 = u3.lane;
        if ((zo & d3) === d3)
          l3 !== null && (l3 = l3.next = { lane: 0, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }), r3 = u3.hasEagerState ? u3.eagerState : e3(r3, u3.action);
        else {
          var f3 = { lane: d3, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null };
          l3 === null ? (c3 = l3 = f3, s3 = r3) : l3 = l3.next = f3, B.lanes |= d3, Xc |= d3;
        }
        u3 = u3.next;
      } while (u3 !== null && u3 !== o3);
      l3 === null ? s3 = r3 : l3.next = c3, Ir(r3, t2.memoizedState) || (Vs = true), t2.memoizedState = r3, t2.baseState = s3, t2.baseQueue = l3, n3.lastRenderedState = r3;
    }
    if (e3 = n3.interleaved, e3 !== null) {
      i2 = e3;
      do
        o3 = i2.lane, B.lanes |= o3, Xc |= o3, i2 = i2.next;
      while (i2 !== e3);
    } else
      i2 === null && (n3.lanes = 0);
    return [t2.memoizedState, n3.dispatch];
  }
  function Zo(e3) {
    var t2 = Jo(), n3 = t2.queue;
    if (n3 === null)
      throw Error(a2(311));
    n3.lastRenderedReducer = e3;
    var r3 = n3.dispatch, i2 = n3.pending, o3 = t2.memoizedState;
    if (i2 !== null) {
      n3.pending = null;
      var s3 = i2 = i2.next;
      do
        o3 = e3(o3, s3.action), s3 = s3.next;
      while (s3 !== i2);
      Ir(o3, t2.memoizedState) || (Vs = true), t2.memoizedState = o3, t2.baseQueue === null && (t2.baseState = o3), n3.lastRenderedState = o3;
    }
    return [o3, r3];
  }
  function Qo() {
  }
  function $o(e3, t2) {
    var n3 = B, r3 = Jo(), i2 = t2(), o3 = !Ir(r3.memoizedState, i2);
    if (o3 && (r3.memoizedState = i2, Vs = true), r3 = r3.queue, ds(ns.bind(null, n3, r3, e3), [e3]), r3.getSnapshot !== t2 || o3 || H !== null && H.memoizedState.tag & 1) {
      if (n3.flags |= 2048, os(9, ts.bind(null, n3, r3, i2, t2), void 0, null), Y === null)
        throw Error(a2(349));
      zo & 30 || es(n3, t2, i2);
    }
    return i2;
  }
  function es(e3, t2, n3) {
    e3.flags |= 16384, e3 = { getSnapshot: t2, value: n3 }, t2 = B.updateQueue, t2 === null ? (t2 = { lastEffect: null, stores: null }, B.updateQueue = t2, t2.stores = [e3]) : (n3 = t2.stores, n3 === null ? t2.stores = [e3] : n3.push(e3));
  }
  function ts(e3, t2, n3, r3) {
    t2.value = n3, t2.getSnapshot = r3, rs(t2) && is(e3);
  }
  function ns(e3, t2, n3) {
    return n3(function() {
      rs(t2) && is(e3);
    });
  }
  function rs(e3) {
    var t2 = e3.getSnapshot;
    e3 = e3.value;
    try {
      var n3 = t2();
      return !Ir(e3, n3);
    } catch {
      return true;
    }
  }
  function is(e3) {
    var t2 = to(e3, 1);
    t2 !== null && gl(t2, e3, 1, -1);
  }
  function as(e3) {
    var t2 = qo();
    return typeof e3 == `function` && (e3 = e3()), t2.memoizedState = t2.baseState = e3, e3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yo, lastRenderedState: e3 }, t2.queue = e3, e3 = e3.dispatch = Cs.bind(null, B, e3), [t2.memoizedState, e3];
  }
  function os(e3, t2, n3, r3) {
    return e3 = { tag: e3, create: t2, destroy: n3, deps: r3, next: null }, t2 = B.updateQueue, t2 === null ? (t2 = { lastEffect: null, stores: null }, B.updateQueue = t2, t2.lastEffect = e3.next = e3) : (n3 = t2.lastEffect, n3 === null ? t2.lastEffect = e3.next = e3 : (r3 = n3.next, n3.next = e3, e3.next = r3, t2.lastEffect = e3)), e3;
  }
  function ss() {
    return Jo().memoizedState;
  }
  function cs(e3, t2, n3, r3) {
    var i2 = qo();
    B.flags |= e3, i2.memoizedState = os(1 | t2, n3, void 0, r3 === void 0 ? null : r3);
  }
  function ls(e3, t2, n3, r3) {
    var i2 = Jo();
    r3 = r3 === void 0 ? null : r3;
    var a3 = void 0;
    if (V !== null) {
      var o3 = V.memoizedState;
      if (a3 = o3.destroy, r3 !== null && Wo(r3, o3.deps)) {
        i2.memoizedState = os(t2, n3, a3, r3);
        return;
      }
    }
    B.flags |= e3, i2.memoizedState = os(1 | t2, n3, a3, r3);
  }
  function us(e3, t2) {
    return cs(8390656, 8, e3, t2);
  }
  function ds(e3, t2) {
    return ls(2048, 8, e3, t2);
  }
  function fs(e3, t2) {
    return ls(4, 2, e3, t2);
  }
  function ps(e3, t2) {
    return ls(4, 4, e3, t2);
  }
  function ms(e3, t2) {
    if (typeof t2 == `function`)
      return e3 = e3(), t2(e3), function() {
        t2(null);
      };
    if (t2 != null)
      return e3 = e3(), t2.current = e3, function() {
        t2.current = null;
      };
  }
  function hs(e3, t2, n3) {
    return n3 = n3 == null ? null : n3.concat([e3]), ls(4, 4, ms.bind(null, t2, e3), n3);
  }
  function gs() {
  }
  function _s(e3, t2) {
    var n3 = Jo();
    t2 = t2 === void 0 ? null : t2;
    var r3 = n3.memoizedState;
    return r3 !== null && t2 !== null && Wo(t2, r3[1]) ? r3[0] : (n3.memoizedState = [e3, t2], e3);
  }
  function vs(e3, t2) {
    var n3 = Jo();
    t2 = t2 === void 0 ? null : t2;
    var r3 = n3.memoizedState;
    return r3 !== null && t2 !== null && Wo(t2, r3[1]) ? r3[0] : (e3 = e3(), n3.memoizedState = [e3, t2], e3);
  }
  function ys(e3, t2, n3) {
    return zo & 21 ? (Ir(n3, t2) || (n3 = Ut(), B.lanes |= n3, Xc |= n3, e3.baseState = true), t2) : (e3.baseState && (e3.baseState = false, Vs = true), e3.memoizedState = n3);
  }
  function bs(e3, t2) {
    var n3 = P;
    P = n3 !== 0 && 4 > n3 ? n3 : 4, e3(true);
    var r3 = Ro.transition;
    Ro.transition = {};
    try {
      e3(false), t2();
    } finally {
      P = n3, Ro.transition = r3;
    }
  }
  function xs() {
    return Jo().memoizedState;
  }
  function Ss(e3, t2, n3) {
    var r3 = hl(e3);
    if (n3 = { lane: r3, action: n3, hasEagerState: false, eagerState: null, next: null }, ws(e3))
      Ts(t2, n3);
    else if (n3 = eo(e3, t2, n3, r3), n3 !== null) {
      var i2 = ml();
      gl(n3, e3, r3, i2), Es(n3, t2, r3);
    }
  }
  function Cs(e3, t2, n3) {
    var r3 = hl(e3), i2 = { lane: r3, action: n3, hasEagerState: false, eagerState: null, next: null };
    if (ws(e3))
      Ts(t2, i2);
    else {
      var a3 = e3.alternate;
      if (e3.lanes === 0 && (a3 === null || a3.lanes === 0) && (a3 = t2.lastRenderedReducer, a3 !== null))
        try {
          var o3 = t2.lastRenderedState, s3 = a3(o3, n3);
          if (i2.hasEagerState = true, i2.eagerState = s3, Ir(s3, o3)) {
            var c3 = t2.interleaved;
            c3 === null ? (i2.next = i2, $a(t2)) : (i2.next = c3.next, c3.next = i2), t2.interleaved = i2;
            return;
          }
        } catch {
        }
      n3 = eo(e3, t2, i2, r3), n3 !== null && (i2 = ml(), gl(n3, e3, r3, i2), Es(n3, t2, r3));
    }
  }
  function ws(e3) {
    var t2 = e3.alternate;
    return e3 === B || t2 !== null && t2 === B;
  }
  function Ts(e3, t2) {
    Vo = Bo = true;
    var n3 = e3.pending;
    n3 === null ? t2.next = t2 : (t2.next = n3.next, n3.next = t2), e3.pending = t2;
  }
  function Es(e3, t2, n3) {
    if (n3 & 4194240) {
      var r3 = t2.lanes;
      r3 &= e3.pendingLanes, n3 |= r3, t2.lanes = n3, qt(e3, n3);
    }
  }
  var Ds = { readContext: Za, useCallback: U, useContext: U, useEffect: U, useImperativeHandle: U, useInsertionEffect: U, useLayoutEffect: U, useMemo: U, useReducer: U, useRef: U, useState: U, useDebugValue: U, useDeferredValue: U, useTransition: U, useMutableSource: U, useSyncExternalStore: U, useId: U, unstable_isNewReconciler: false }, Os = { readContext: Za, useCallback: function(e3, t2) {
    return qo().memoizedState = [e3, t2 === void 0 ? null : t2], e3;
  }, useContext: Za, useEffect: us, useImperativeHandle: function(e3, t2, n3) {
    return n3 = n3 == null ? null : n3.concat([e3]), cs(4194308, 4, ms.bind(null, t2, e3), n3);
  }, useLayoutEffect: function(e3, t2) {
    return cs(4194308, 4, e3, t2);
  }, useInsertionEffect: function(e3, t2) {
    return cs(4, 2, e3, t2);
  }, useMemo: function(e3, t2) {
    var n3 = qo();
    return t2 = t2 === void 0 ? null : t2, e3 = e3(), n3.memoizedState = [e3, t2], e3;
  }, useReducer: function(e3, t2, n3) {
    var r3 = qo();
    return t2 = n3 === void 0 ? t2 : n3(t2), r3.memoizedState = r3.baseState = t2, e3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e3, lastRenderedState: t2 }, r3.queue = e3, e3 = e3.dispatch = Ss.bind(null, B, e3), [r3.memoizedState, e3];
  }, useRef: function(e3) {
    var t2 = qo();
    return e3 = { current: e3 }, t2.memoizedState = e3;
  }, useState: as, useDebugValue: gs, useDeferredValue: function(e3) {
    return qo().memoizedState = e3;
  }, useTransition: function() {
    var e3 = as(false), t2 = e3[0];
    return e3 = bs.bind(null, e3[1]), qo().memoizedState = e3, [t2, e3];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e3, t2, n3) {
    var r3 = B, i2 = qo();
    if (R) {
      if (n3 === void 0)
        throw Error(a2(407));
      n3 = n3();
    } else {
      if (n3 = t2(), Y === null)
        throw Error(a2(349));
      zo & 30 || es(r3, t2, n3);
    }
    i2.memoizedState = n3;
    var o3 = { value: n3, getSnapshot: t2 };
    return i2.queue = o3, us(ns.bind(null, r3, o3, e3), [e3]), r3.flags |= 2048, os(9, ts.bind(null, r3, o3, n3, t2), void 0, null), n3;
  }, useId: function() {
    var e3 = qo(), t2 = Y.identifierPrefix;
    if (R) {
      var n3 = wa, r3 = Ca;
      n3 = (r3 & ~(1 << 32 - Mt(r3) - 1)).toString(32) + n3, t2 = `:` + t2 + `R` + n3, n3 = Ho++, 0 < n3 && (t2 += `H` + n3.toString(32)), t2 += `:`;
    } else
      n3 = Uo++, t2 = `:` + t2 + `r` + n3.toString(32) + `:`;
    return e3.memoizedState = t2;
  }, unstable_isNewReconciler: false }, ks = { readContext: Za, useCallback: _s, useContext: Za, useEffect: ds, useImperativeHandle: hs, useInsertionEffect: fs, useLayoutEffect: ps, useMemo: vs, useReducer: Xo, useRef: ss, useState: function() {
    return Xo(Yo);
  }, useDebugValue: gs, useDeferredValue: function(e3) {
    return ys(Jo(), V.memoizedState, e3);
  }, useTransition: function() {
    return [Xo(Yo)[0], Jo().memoizedState];
  }, useMutableSource: Qo, useSyncExternalStore: $o, useId: xs, unstable_isNewReconciler: false }, As = { readContext: Za, useCallback: _s, useContext: Za, useEffect: ds, useImperativeHandle: hs, useInsertionEffect: fs, useLayoutEffect: ps, useMemo: vs, useReducer: Zo, useRef: ss, useState: function() {
    return Zo(Yo);
  }, useDebugValue: gs, useDeferredValue: function(e3) {
    var t2 = Jo();
    return V === null ? t2.memoizedState = e3 : ys(t2, V.memoizedState, e3);
  }, useTransition: function() {
    return [Zo(Yo)[0], Jo().memoizedState];
  }, useMutableSource: Qo, useSyncExternalStore: $o, useId: xs, unstable_isNewReconciler: false };
  function js(e3, t2) {
    try {
      var n3 = ``, r3 = t2;
      do
        n3 += fe(r3), r3 = r3.return;
      while (r3);
      var i2 = n3;
    } catch (e4) {
      i2 = `
Error generating stack: ` + e4.message + `
` + e4.stack;
    }
    return { value: e3, source: t2, stack: i2, digest: null };
  }
  function Ms(e3, t2, n3) {
    return { value: e3, source: null, stack: n3 ?? null, digest: t2 ?? null };
  }
  function Ns(e3, t2) {
    try {
      console.error(t2.value);
    } catch (e4) {
      setTimeout(function() {
        throw e4;
      });
    }
  }
  var Ps = typeof WeakMap == `function` ? WeakMap : Map;
  function Fs(e3, t2, n3) {
    n3 = ao(-1, n3), n3.tag = 3, n3.payload = { element: null };
    var r3 = t2.value;
    return n3.callback = function() {
      il || (il = true, al = r3), Ns(e3, t2);
    }, n3;
  }
  function Is(e3, t2, n3) {
    n3 = ao(-1, n3), n3.tag = 3;
    var r3 = e3.type.getDerivedStateFromError;
    if (typeof r3 == `function`) {
      var i2 = t2.value;
      n3.payload = function() {
        return r3(i2);
      }, n3.callback = function() {
        Ns(e3, t2);
      };
    }
    var a3 = e3.stateNode;
    return a3 !== null && typeof a3.componentDidCatch == `function` && (n3.callback = function() {
      Ns(e3, t2), typeof r3 != `function` && (ol === null ? ol = /* @__PURE__ */ new Set([this]) : ol.add(this));
      var n4 = t2.stack;
      this.componentDidCatch(t2.value, { componentStack: n4 === null ? `` : n4 });
    }), n3;
  }
  function Ls(e3, t2, n3) {
    var r3 = e3.pingCache;
    if (r3 === null) {
      r3 = e3.pingCache = new Ps();
      var i2 = /* @__PURE__ */ new Set();
      r3.set(t2, i2);
    } else
      i2 = r3.get(t2), i2 === void 0 && (i2 = /* @__PURE__ */ new Set(), r3.set(t2, i2));
    i2.has(n3) || (i2.add(n3), e3 = Bl.bind(null, e3, t2, n3), t2.then(e3, e3));
  }
  function Rs(e3) {
    do {
      var t2;
      if ((t2 = e3.tag === 13) && (t2 = e3.memoizedState, t2 = t2 === null ? true : t2.dehydrated !== null), t2)
        return e3;
      e3 = e3.return;
    } while (e3 !== null);
    return null;
  }
  function zs(e3, t2, n3, r3, i2) {
    return e3.mode & 1 ? (e3.flags |= 65536, e3.lanes = i2, e3) : (e3 === t2 ? e3.flags |= 65536 : (e3.flags |= 128, n3.flags |= 131072, n3.flags &= -52805, n3.tag === 1 && (n3.alternate === null ? n3.tag = 17 : (t2 = ao(-1, 1), t2.tag = 2, oo(n3, t2, 1))), n3.lanes |= 1), e3);
  }
  var Bs = C2.ReactCurrentOwner, Vs = false;
  function Hs(e3, t2, n3, r3) {
    t2.child = e3 === null ? wo(t2, null, n3, r3) : Co(t2, e3.child, n3, r3);
  }
  function Us(e3, t2, n3, r3, i2) {
    n3 = n3.render;
    var a3 = t2.ref;
    return Xa(t2, i2), r3 = Go(e3, t2, n3, r3, a3, i2), n3 = Ko(), e3 !== null && !Vs ? (t2.updateQueue = e3.updateQueue, t2.flags &= -2053, e3.lanes &= ~i2, lc(e3, t2, i2)) : (R && n3 && Da(t2), t2.flags |= 1, Hs(e3, t2, r3, i2), t2.child);
  }
  function Ws(e3, t2, n3, r3, i2) {
    if (e3 === null) {
      var a3 = n3.type;
      return typeof a3 == `function` && !Jl(a3) && a3.defaultProps === void 0 && n3.compare === null && n3.defaultProps === void 0 ? (t2.tag = 15, t2.type = a3, Gs(e3, t2, a3, r3, i2)) : (e3 = Zl(n3.type, null, r3, t2, t2.mode, i2), e3.ref = t2.ref, e3.return = t2, t2.child = e3);
    }
    if (a3 = e3.child, (e3.lanes & i2) === 0) {
      var o3 = a3.memoizedProps;
      if (n3 = n3.compare, n3 = n3 === null ? Lr : n3, n3(o3, r3) && e3.ref === t2.ref)
        return lc(e3, t2, i2);
    }
    return t2.flags |= 1, e3 = Xl(a3, r3), e3.ref = t2.ref, e3.return = t2, t2.child = e3;
  }
  function Gs(e3, t2, n3, r3, i2) {
    if (e3 !== null) {
      var a3 = e3.memoizedProps;
      if (Lr(a3, r3) && e3.ref === t2.ref)
        if (Vs = false, t2.pendingProps = r3 = a3, (e3.lanes & i2) !== 0)
          e3.flags & 131072 && (Vs = true);
        else
          return t2.lanes = e3.lanes, lc(e3, t2, i2);
    }
    return Js(e3, t2, n3, r3, i2);
  }
  function Ks(e3, t2, n3) {
    var r3 = t2.pendingProps, i2 = r3.children, a3 = e3 === null ? null : e3.memoizedState;
    if (r3.mode === `hidden`)
      if (!(t2.mode & 1))
        t2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, L(Jc, qc), qc |= n3;
      else {
        if (!(n3 & 1073741824))
          return e3 = a3 === null ? n3 : a3.baseLanes | n3, t2.lanes = t2.childLanes = 1073741824, t2.memoizedState = { baseLanes: e3, cachePool: null, transitions: null }, t2.updateQueue = null, L(Jc, qc), qc |= e3, null;
        t2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r3 = a3 === null ? n3 : a3.baseLanes, L(Jc, qc), qc |= r3;
      }
    else
      a3 === null ? r3 = n3 : (r3 = a3.baseLanes | n3, t2.memoizedState = null), L(Jc, qc), qc |= r3;
    return Hs(e3, t2, i2, n3), t2.child;
  }
  function qs(e3, t2) {
    var n3 = t2.ref;
    (e3 === null && n3 !== null || e3 !== null && e3.ref !== n3) && (t2.flags |= 512, t2.flags |= 2097152);
  }
  function Js(e3, t2, n3, r3, i2) {
    var a3 = ia(n3) ? na : ea.current;
    return a3 = ra(t2, a3), Xa(t2, i2), n3 = Go(e3, t2, n3, r3, a3, i2), r3 = Ko(), e3 !== null && !Vs ? (t2.updateQueue = e3.updateQueue, t2.flags &= -2053, e3.lanes &= ~i2, lc(e3, t2, i2)) : (R && r3 && Da(t2), t2.flags |= 1, Hs(e3, t2, n3, i2), t2.child);
  }
  function Ys(e3, t2, n3, r3, i2) {
    if (ia(n3)) {
      var a3 = true;
      ca(t2);
    } else
      a3 = false;
    if (Xa(t2, i2), t2.stateNode === null)
      cc(e3, t2), go(t2, n3, r3), vo(t2, n3, r3, i2), r3 = true;
    else if (e3 === null) {
      var o3 = t2.stateNode, s3 = t2.memoizedProps;
      o3.props = s3;
      var c3 = o3.context, l3 = n3.contextType;
      typeof l3 == `object` && l3 ? l3 = Za(l3) : (l3 = ia(n3) ? na : ea.current, l3 = ra(t2, l3));
      var u3 = n3.getDerivedStateFromProps, d3 = typeof u3 == `function` || typeof o3.getSnapshotBeforeUpdate == `function`;
      d3 || typeof o3.UNSAFE_componentWillReceiveProps != `function` && typeof o3.componentWillReceiveProps != `function` || (s3 !== r3 || c3 !== l3) && _o(t2, o3, r3, l3), no = false;
      var f3 = t2.memoizedState;
      o3.state = f3, lo(t2, r3, o3, i2), c3 = t2.memoizedState, s3 !== r3 || f3 !== c3 || ta.current || no ? (typeof u3 == `function` && (po(t2, n3, u3, r3), c3 = t2.memoizedState), (s3 = no || ho(t2, n3, s3, r3, f3, c3, l3)) ? (d3 || typeof o3.UNSAFE_componentWillMount != `function` && typeof o3.componentWillMount != `function` || (typeof o3.componentWillMount == `function` && o3.componentWillMount(), typeof o3.UNSAFE_componentWillMount == `function` && o3.UNSAFE_componentWillMount()), typeof o3.componentDidMount == `function` && (t2.flags |= 4194308)) : (typeof o3.componentDidMount == `function` && (t2.flags |= 4194308), t2.memoizedProps = r3, t2.memoizedState = c3), o3.props = r3, o3.state = c3, o3.context = l3, r3 = s3) : (typeof o3.componentDidMount == `function` && (t2.flags |= 4194308), r3 = false);
    } else {
      o3 = t2.stateNode, io(e3, t2), s3 = t2.memoizedProps, l3 = t2.type === t2.elementType ? s3 : Ha(t2.type, s3), o3.props = l3, d3 = t2.pendingProps, f3 = o3.context, c3 = n3.contextType, typeof c3 == `object` && c3 ? c3 = Za(c3) : (c3 = ia(n3) ? na : ea.current, c3 = ra(t2, c3));
      var p3 = n3.getDerivedStateFromProps;
      (u3 = typeof p3 == `function` || typeof o3.getSnapshotBeforeUpdate == `function`) || typeof o3.UNSAFE_componentWillReceiveProps != `function` && typeof o3.componentWillReceiveProps != `function` || (s3 !== d3 || f3 !== c3) && _o(t2, o3, r3, c3), no = false, f3 = t2.memoizedState, o3.state = f3, lo(t2, r3, o3, i2);
      var m3 = t2.memoizedState;
      s3 !== d3 || f3 !== m3 || ta.current || no ? (typeof p3 == `function` && (po(t2, n3, p3, r3), m3 = t2.memoizedState), (l3 = no || ho(t2, n3, l3, r3, f3, m3, c3) || false) ? (u3 || typeof o3.UNSAFE_componentWillUpdate != `function` && typeof o3.componentWillUpdate != `function` || (typeof o3.componentWillUpdate == `function` && o3.componentWillUpdate(r3, m3, c3), typeof o3.UNSAFE_componentWillUpdate == `function` && o3.UNSAFE_componentWillUpdate(r3, m3, c3)), typeof o3.componentDidUpdate == `function` && (t2.flags |= 4), typeof o3.getSnapshotBeforeUpdate == `function` && (t2.flags |= 1024)) : (typeof o3.componentDidUpdate != `function` || s3 === e3.memoizedProps && f3 === e3.memoizedState || (t2.flags |= 4), typeof o3.getSnapshotBeforeUpdate != `function` || s3 === e3.memoizedProps && f3 === e3.memoizedState || (t2.flags |= 1024), t2.memoizedProps = r3, t2.memoizedState = m3), o3.props = r3, o3.state = m3, o3.context = c3, r3 = l3) : (typeof o3.componentDidUpdate != `function` || s3 === e3.memoizedProps && f3 === e3.memoizedState || (t2.flags |= 4), typeof o3.getSnapshotBeforeUpdate != `function` || s3 === e3.memoizedProps && f3 === e3.memoizedState || (t2.flags |= 1024), r3 = false);
    }
    return Xs(e3, t2, n3, r3, a3, i2);
  }
  function Xs(e3, t2, n3, r3, i2, a3) {
    qs(e3, t2);
    var o3 = (t2.flags & 128) != 0;
    if (!r3 && !o3)
      return i2 && la(t2, n3, false), lc(e3, t2, a3);
    r3 = t2.stateNode, Bs.current = t2;
    var s3 = o3 && typeof n3.getDerivedStateFromError != `function` ? null : r3.render();
    return t2.flags |= 1, e3 !== null && o3 ? (t2.child = Co(t2, e3.child, null, a3), t2.child = Co(t2, null, s3, a3)) : Hs(e3, t2, s3, a3), t2.memoizedState = r3.state, i2 && la(t2, n3, true), t2.child;
  }
  function Zs(e3) {
    var t2 = e3.stateNode;
    t2.pendingContext ? oa(e3, t2.pendingContext, t2.pendingContext !== t2.context) : t2.context && oa(e3, t2.context, false), Ao(e3, t2.containerInfo);
  }
  function Qs(e3, t2, n3, r3, i2) {
    return za(), Ba(i2), t2.flags |= 256, Hs(e3, t2, n3, r3), t2.child;
  }
  var $s = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ec(e3) {
    return { baseLanes: e3, cachePool: null, transitions: null };
  }
  function tc(e3, t2, n3) {
    var r3 = t2.pendingProps, i2 = z.current, a3 = false, o3 = (t2.flags & 128) != 0, s3;
    if ((s3 = o3) || (s3 = e3 !== null && e3.memoizedState === null ? false : (i2 & 2) != 0), s3 ? (a3 = true, t2.flags &= -129) : (e3 === null || e3.memoizedState !== null) && (i2 |= 1), L(z, i2 & 1), e3 === null)
      return Fa(t2), e3 = t2.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null) ? (t2.mode & 1 ? e3.data === `$!` ? t2.lanes = 8 : t2.lanes = 1073741824 : t2.lanes = 1, null) : (o3 = r3.children, e3 = r3.fallback, a3 ? (r3 = t2.mode, a3 = t2.child, o3 = { mode: `hidden`, children: o3 }, !(r3 & 1) && a3 !== null ? (a3.childLanes = 0, a3.pendingProps = o3) : a3 = $l(o3, r3, 0, null), e3 = Ql(e3, r3, n3, null), a3.return = t2, e3.return = t2, a3.sibling = e3, t2.child = a3, t2.child.memoizedState = ec(n3), t2.memoizedState = $s, e3) : nc(t2, o3));
    if (i2 = e3.memoizedState, i2 !== null && (s3 = i2.dehydrated, s3 !== null))
      return ic(e3, t2, o3, r3, s3, i2, n3);
    if (a3) {
      a3 = r3.fallback, o3 = t2.mode, i2 = e3.child, s3 = i2.sibling;
      var c3 = { mode: `hidden`, children: r3.children };
      return !(o3 & 1) && t2.child !== i2 ? (r3 = t2.child, r3.childLanes = 0, r3.pendingProps = c3, t2.deletions = null) : (r3 = Xl(i2, c3), r3.subtreeFlags = i2.subtreeFlags & 14680064), s3 === null ? (a3 = Ql(a3, o3, n3, null), a3.flags |= 2) : a3 = Xl(s3, a3), a3.return = t2, r3.return = t2, r3.sibling = a3, t2.child = r3, r3 = a3, a3 = t2.child, o3 = e3.child.memoizedState, o3 = o3 === null ? ec(n3) : { baseLanes: o3.baseLanes | n3, cachePool: null, transitions: o3.transitions }, a3.memoizedState = o3, a3.childLanes = e3.childLanes & ~n3, t2.memoizedState = $s, r3;
    }
    return a3 = e3.child, e3 = a3.sibling, r3 = Xl(a3, { mode: `visible`, children: r3.children }), !(t2.mode & 1) && (r3.lanes = n3), r3.return = t2, r3.sibling = null, e3 !== null && (n3 = t2.deletions, n3 === null ? (t2.deletions = [e3], t2.flags |= 16) : n3.push(e3)), t2.child = r3, t2.memoizedState = null, r3;
  }
  function nc(e3, t2) {
    return t2 = $l({ mode: `visible`, children: t2 }, e3.mode, 0, null), t2.return = e3, e3.child = t2;
  }
  function rc(e3, t2, n3, r3) {
    return r3 !== null && Ba(r3), Co(t2, e3.child, null, n3), e3 = nc(t2, t2.pendingProps.children), e3.flags |= 2, t2.memoizedState = null, e3;
  }
  function ic(e3, t2, n3, r3, i2, o3, s3) {
    if (n3)
      return t2.flags & 256 ? (t2.flags &= -257, r3 = Ms(Error(a2(422))), rc(e3, t2, s3, r3)) : t2.memoizedState === null ? (o3 = r3.fallback, i2 = t2.mode, r3 = $l({ mode: `visible`, children: r3.children }, i2, 0, null), o3 = Ql(o3, i2, s3, null), o3.flags |= 2, r3.return = t2, o3.return = t2, r3.sibling = o3, t2.child = r3, t2.mode & 1 && Co(t2, e3.child, null, s3), t2.child.memoizedState = ec(s3), t2.memoizedState = $s, o3) : (t2.child = e3.child, t2.flags |= 128, null);
    if (!(t2.mode & 1))
      return rc(e3, t2, s3, null);
    if (i2.data === `$!`) {
      if (r3 = i2.nextSibling && i2.nextSibling.dataset, r3)
        var c3 = r3.dgst;
      return r3 = c3, o3 = Error(a2(419)), r3 = Ms(o3, r3, void 0), rc(e3, t2, s3, r3);
    }
    if (c3 = (s3 & e3.childLanes) !== 0, Vs || c3) {
      if (r3 = Y, r3 !== null) {
        switch (s3 & -s3) {
          case 4:
            i2 = 2;
            break;
          case 16:
            i2 = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i2 = 32;
            break;
          case 536870912:
            i2 = 268435456;
            break;
          default:
            i2 = 0;
        }
        i2 = (i2 & (r3.suspendedLanes | s3)) === 0 ? i2 : 0, i2 !== 0 && i2 !== o3.retryLane && (o3.retryLane = i2, to(e3, i2), gl(r3, e3, i2, -1));
      }
      return Al(), r3 = Ms(Error(a2(421))), rc(e3, t2, s3, r3);
    }
    return i2.data === `$?` ? (t2.flags |= 128, t2.child = e3.child, t2 = Hl.bind(null, e3), i2._reactRetry = t2, null) : (e3 = o3.treeContext, Aa = Li(i2.nextSibling), ka = t2, R = true, ja = null, e3 !== null && (ba[xa++] = Ca, ba[xa++] = wa, ba[xa++] = Sa, Ca = e3.id, wa = e3.overflow, Sa = t2), t2 = nc(t2, r3.children), t2.flags |= 4096, t2);
  }
  function ac(e3, t2, n3) {
    e3.lanes |= t2;
    var r3 = e3.alternate;
    r3 !== null && (r3.lanes |= t2), Ya(e3.return, t2, n3);
  }
  function oc(e3, t2, n3, r3, i2) {
    var a3 = e3.memoizedState;
    a3 === null ? e3.memoizedState = { isBackwards: t2, rendering: null, renderingStartTime: 0, last: r3, tail: n3, tailMode: i2 } : (a3.isBackwards = t2, a3.rendering = null, a3.renderingStartTime = 0, a3.last = r3, a3.tail = n3, a3.tailMode = i2);
  }
  function sc(e3, t2, n3) {
    var r3 = t2.pendingProps, i2 = r3.revealOrder, a3 = r3.tail;
    if (Hs(e3, t2, r3.children, n3), r3 = z.current, r3 & 2)
      r3 = r3 & 1 | 2, t2.flags |= 128;
    else {
      if (e3 !== null && e3.flags & 128)
        a:
          for (e3 = t2.child; e3 !== null; ) {
            if (e3.tag === 13)
              e3.memoizedState !== null && ac(e3, n3, t2);
            else if (e3.tag === 19)
              ac(e3, n3, t2);
            else if (e3.child !== null) {
              e3.child.return = e3, e3 = e3.child;
              continue;
            }
            if (e3 === t2)
              break a;
            for (; e3.sibling === null; ) {
              if (e3.return === null || e3.return === t2)
                break a;
              e3 = e3.return;
            }
            e3.sibling.return = e3.return, e3 = e3.sibling;
          }
      r3 &= 1;
    }
    if (L(z, r3), !(t2.mode & 1))
      t2.memoizedState = null;
    else
      switch (i2) {
        case `forwards`:
          for (n3 = t2.child, i2 = null; n3 !== null; )
            e3 = n3.alternate, e3 !== null && Po(e3) === null && (i2 = n3), n3 = n3.sibling;
          n3 = i2, n3 === null ? (i2 = t2.child, t2.child = null) : (i2 = n3.sibling, n3.sibling = null), oc(t2, false, i2, n3, a3);
          break;
        case `backwards`:
          for (n3 = null, i2 = t2.child, t2.child = null; i2 !== null; ) {
            if (e3 = i2.alternate, e3 !== null && Po(e3) === null) {
              t2.child = i2;
              break;
            }
            e3 = i2.sibling, i2.sibling = n3, n3 = i2, i2 = e3;
          }
          oc(t2, true, n3, null, a3);
          break;
        case `together`:
          oc(t2, false, null, null, void 0);
          break;
        default:
          t2.memoizedState = null;
      }
    return t2.child;
  }
  function cc(e3, t2) {
    !(t2.mode & 1) && e3 !== null && (e3.alternate = null, t2.alternate = null, t2.flags |= 2);
  }
  function lc(e3, t2, n3) {
    if (e3 !== null && (t2.dependencies = e3.dependencies), Xc |= t2.lanes, (n3 & t2.childLanes) === 0)
      return null;
    if (e3 !== null && t2.child !== e3.child)
      throw Error(a2(153));
    if (t2.child !== null) {
      for (e3 = t2.child, n3 = Xl(e3, e3.pendingProps), t2.child = n3, n3.return = t2; e3.sibling !== null; )
        e3 = e3.sibling, n3 = n3.sibling = Xl(e3, e3.pendingProps), n3.return = t2;
      n3.sibling = null;
    }
    return t2.child;
  }
  function uc(e3, t2, n3) {
    switch (t2.tag) {
      case 3:
        Zs(t2), za();
        break;
      case 5:
        Mo(t2);
        break;
      case 1:
        ia(t2.type) && ca(t2);
        break;
      case 4:
        Ao(t2, t2.stateNode.containerInfo);
        break;
      case 10:
        var r3 = t2.type._context, i2 = t2.memoizedProps.value;
        L(Ua, r3._currentValue), r3._currentValue = i2;
        break;
      case 13:
        if (r3 = t2.memoizedState, r3 !== null)
          return r3.dehydrated === null ? (n3 & t2.child.childLanes) === 0 ? (L(z, z.current & 1), e3 = lc(e3, t2, n3), e3 === null ? null : e3.sibling) : tc(e3, t2, n3) : (L(z, z.current & 1), t2.flags |= 128, null);
        L(z, z.current & 1);
        break;
      case 19:
        if (r3 = (n3 & t2.childLanes) !== 0, e3.flags & 128) {
          if (r3)
            return sc(e3, t2, n3);
          t2.flags |= 128;
        }
        if (i2 = t2.memoizedState, i2 !== null && (i2.rendering = null, i2.tail = null, i2.lastEffect = null), L(z, z.current), r3)
          break;
        return null;
      case 22:
      case 23:
        return t2.lanes = 0, Ks(e3, t2, n3);
    }
    return lc(e3, t2, n3);
  }
  var dc = function(e3, t2) {
    for (var n3 = t2.child; n3 !== null; ) {
      if (n3.tag === 5 || n3.tag === 6)
        e3.appendChild(n3.stateNode);
      else if (n3.tag !== 4 && n3.child !== null) {
        n3.child.return = n3, n3 = n3.child;
        continue;
      }
      if (n3 === t2)
        break;
      for (; n3.sibling === null; ) {
        if (n3.return === null || n3.return === t2)
          return;
        n3 = n3.return;
      }
      n3.sibling.return = n3.return, n3 = n3.sibling;
    }
  }, fc = function(e3, t2, n3, r3) {
    var i2 = e3.memoizedProps;
    if (i2 !== r3) {
      e3 = t2.stateNode, ko(Eo.current);
      var a3 = null;
      switch (n3) {
        case `input`:
          i2 = be(e3, i2), r3 = be(e3, r3), a3 = [];
          break;
        case `select`:
          i2 = A({}, i2, { value: void 0 }), r3 = A({}, r3, { value: void 0 }), a3 = [];
          break;
        case `textarea`:
          i2 = Oe(e3, i2), r3 = Oe(e3, r3), a3 = [];
          break;
        default:
          typeof i2.onClick != `function` && typeof r3.onClick == `function` && (e3.onclick = Di);
      }
      He(n3, r3);
      var o3;
      for (u3 in n3 = null, i2)
        if (!r3.hasOwnProperty(u3) && i2.hasOwnProperty(u3) && i2[u3] != null)
          if (u3 === `style`) {
            var c3 = i2[u3];
            for (o3 in c3)
              c3.hasOwnProperty(o3) && (n3 || (n3 = {}), n3[o3] = ``);
          } else
            u3 !== `dangerouslySetInnerHTML` && u3 !== `children` && u3 !== `suppressContentEditableWarning` && u3 !== `suppressHydrationWarning` && u3 !== `autoFocus` && (s2.hasOwnProperty(u3) ? a3 || (a3 = []) : (a3 || (a3 = [])).push(u3, null));
      for (u3 in r3) {
        var l3 = r3[u3];
        if (c3 = i2 == null ? void 0 : i2[u3], r3.hasOwnProperty(u3) && l3 !== c3 && (l3 != null || c3 != null))
          if (u3 === `style`)
            if (c3) {
              for (o3 in c3)
                !c3.hasOwnProperty(o3) || l3 && l3.hasOwnProperty(o3) || (n3 || (n3 = {}), n3[o3] = ``);
              for (o3 in l3)
                l3.hasOwnProperty(o3) && c3[o3] !== l3[o3] && (n3 || (n3 = {}), n3[o3] = l3[o3]);
            } else
              n3 || (a3 || (a3 = []), a3.push(u3, n3)), n3 = l3;
          else
            u3 === `dangerouslySetInnerHTML` ? (l3 = l3 ? l3.__html : void 0, c3 = c3 ? c3.__html : void 0, l3 != null && c3 !== l3 && (a3 || (a3 = [])).push(u3, l3)) : u3 === `children` ? typeof l3 != `string` && typeof l3 != `number` || (a3 || (a3 = [])).push(u3, `` + l3) : u3 !== `suppressContentEditableWarning` && u3 !== `suppressHydrationWarning` && (s2.hasOwnProperty(u3) ? (l3 != null && u3 === `onScroll` && F(`scroll`, e3), a3 || c3 === l3 || (a3 = [])) : (a3 || (a3 = [])).push(u3, l3));
      }
      n3 && (a3 || (a3 = [])).push(`style`, n3);
      var u3 = a3;
      (t2.updateQueue = u3) && (t2.flags |= 4);
    }
  }, pc = function(e3, t2, n3, r3) {
    n3 !== r3 && (t2.flags |= 4);
  };
  function mc(e3, t2) {
    if (!R)
      switch (e3.tailMode) {
        case `hidden`:
          t2 = e3.tail;
          for (var n3 = null; t2 !== null; )
            t2.alternate !== null && (n3 = t2), t2 = t2.sibling;
          n3 === null ? e3.tail = null : n3.sibling = null;
          break;
        case `collapsed`:
          n3 = e3.tail;
          for (var r3 = null; n3 !== null; )
            n3.alternate !== null && (r3 = n3), n3 = n3.sibling;
          r3 === null ? t2 || e3.tail === null ? e3.tail = null : e3.tail.sibling = null : r3.sibling = null;
      }
  }
  function W(e3) {
    var t2 = e3.alternate !== null && e3.alternate.child === e3.child, n3 = 0, r3 = 0;
    if (t2)
      for (var i2 = e3.child; i2 !== null; )
        n3 |= i2.lanes | i2.childLanes, r3 |= i2.subtreeFlags & 14680064, r3 |= i2.flags & 14680064, i2.return = e3, i2 = i2.sibling;
    else
      for (i2 = e3.child; i2 !== null; )
        n3 |= i2.lanes | i2.childLanes, r3 |= i2.subtreeFlags, r3 |= i2.flags, i2.return = e3, i2 = i2.sibling;
    return e3.subtreeFlags |= r3, e3.childLanes = n3, t2;
  }
  function hc(e3, t2, n3) {
    var r3 = t2.pendingProps;
    switch (Oa(t2), t2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return W(t2), null;
      case 1:
        return ia(t2.type) && aa(), W(t2), null;
      case 3:
        return r3 = t2.stateNode, jo(), I(ta), I(ea), Io(), r3.pendingContext && (r3.pendingContext = (r3.context = r3.pendingContext, null)), (e3 === null || e3.child === null) && (La(t2) ? t2.flags |= 4 : e3 === null || e3.memoizedState.isDehydrated && !(t2.flags & 256) || (t2.flags |= 1024, ja !== null && (bl(ja), ja = null))), W(t2), null;
      case 5:
        No(t2);
        var i2 = ko(Oo.current);
        if (n3 = t2.type, e3 !== null && t2.stateNode != null)
          fc(e3, t2, n3, r3, i2), e3.ref !== t2.ref && (t2.flags |= 512, t2.flags |= 2097152);
        else {
          if (!r3) {
            if (t2.stateNode === null)
              throw Error(a2(166));
            return W(t2), null;
          }
          if (e3 = ko(Eo.current), La(t2)) {
            r3 = t2.stateNode, n3 = t2.type;
            var o3 = t2.memoizedProps;
            switch (r3[Bi] = t2, r3[Vi] = o3, e3 = (t2.mode & 1) != 0, n3) {
              case `dialog`:
                F(`cancel`, r3), F(`close`, r3);
                break;
              case `iframe`:
              case `object`:
              case `embed`:
                F(`load`, r3);
                break;
              case `video`:
              case `audio`:
                for (i2 = 0; i2 < ui.length; i2++)
                  F(ui[i2], r3);
                break;
              case `source`:
                F(`error`, r3);
                break;
              case `img`:
              case `image`:
              case `link`:
                F(`error`, r3), F(`load`, r3);
                break;
              case `details`:
                F(`toggle`, r3);
                break;
              case `input`:
                xe(r3, o3), F(`invalid`, r3);
                break;
              case `select`:
                r3._wrapperState = { wasMultiple: !!o3.multiple }, F(`invalid`, r3);
                break;
              case `textarea`:
                ke(r3, o3), F(`invalid`, r3);
            }
            for (var c3 in He(n3, o3), i2 = null, o3)
              if (o3.hasOwnProperty(c3)) {
                var l3 = o3[c3];
                c3 === `children` ? typeof l3 == `string` ? r3.textContent !== l3 && (true !== o3.suppressHydrationWarning && Ei(r3.textContent, l3, e3), i2 = [`children`, l3]) : typeof l3 == `number` && r3.textContent !== `` + l3 && (true !== o3.suppressHydrationWarning && Ei(r3.textContent, l3, e3), i2 = [`children`, `` + l3]) : s2.hasOwnProperty(c3) && l3 != null && c3 === `onScroll` && F(`scroll`, r3);
              }
            switch (n3) {
              case `input`:
                _e(r3), we(r3, o3, true);
                break;
              case `textarea`:
                _e(r3), je(r3);
                break;
              case `select`:
              case `option`:
                break;
              default:
                typeof o3.onClick == `function` && (r3.onclick = Di);
            }
            r3 = i2, t2.updateQueue = r3, r3 !== null && (t2.flags |= 4);
          } else {
            c3 = i2.nodeType === 9 ? i2 : i2.ownerDocument, e3 === `http://www.w3.org/1999/xhtml` && (e3 = Me(n3)), e3 === `http://www.w3.org/1999/xhtml` ? n3 === `script` ? (e3 = c3.createElement(`div`), e3.innerHTML = `<script><\/script>`, e3 = e3.removeChild(e3.firstChild)) : typeof r3.is == `string` ? e3 = c3.createElement(n3, { is: r3.is }) : (e3 = c3.createElement(n3), n3 === `select` && (c3 = e3, r3.multiple ? c3.multiple = true : r3.size && (c3.size = r3.size))) : e3 = c3.createElementNS(e3, n3), e3[Bi] = t2, e3[Vi] = r3, dc(e3, t2, false, false), t2.stateNode = e3;
            a: {
              switch (c3 = Ue(n3, r3), n3) {
                case `dialog`:
                  F(`cancel`, e3), F(`close`, e3), i2 = r3;
                  break;
                case `iframe`:
                case `object`:
                case `embed`:
                  F(`load`, e3), i2 = r3;
                  break;
                case `video`:
                case `audio`:
                  for (i2 = 0; i2 < ui.length; i2++)
                    F(ui[i2], e3);
                  i2 = r3;
                  break;
                case `source`:
                  F(`error`, e3), i2 = r3;
                  break;
                case `img`:
                case `image`:
                case `link`:
                  F(`error`, e3), F(`load`, e3), i2 = r3;
                  break;
                case `details`:
                  F(`toggle`, e3), i2 = r3;
                  break;
                case `input`:
                  xe(e3, r3), i2 = be(e3, r3), F(`invalid`, e3);
                  break;
                case `option`:
                  i2 = r3;
                  break;
                case `select`:
                  e3._wrapperState = { wasMultiple: !!r3.multiple }, i2 = A({}, r3, { value: void 0 }), F(`invalid`, e3);
                  break;
                case `textarea`:
                  ke(e3, r3), i2 = Oe(e3, r3), F(`invalid`, e3);
                  break;
                default:
                  i2 = r3;
              }
              for (o3 in He(n3, i2), l3 = i2, l3)
                if (l3.hasOwnProperty(o3)) {
                  var u3 = l3[o3];
                  o3 === `style` ? Be(e3, u3) : o3 === `dangerouslySetInnerHTML` ? (u3 = u3 ? u3.__html : void 0, u3 != null && Fe(e3, u3)) : o3 === `children` ? typeof u3 == `string` ? (n3 !== `textarea` || u3 !== ``) && Ie(e3, u3) : typeof u3 == `number` && Ie(e3, `` + u3) : o3 !== `suppressContentEditableWarning` && o3 !== `suppressHydrationWarning` && o3 !== `autoFocus` && (s2.hasOwnProperty(o3) ? u3 != null && o3 === `onScroll` && F(`scroll`, e3) : u3 != null && S2(e3, o3, u3, c3));
                }
              switch (n3) {
                case `input`:
                  _e(e3), we(e3, r3, false);
                  break;
                case `textarea`:
                  _e(e3), je(e3);
                  break;
                case `option`:
                  r3.value != null && e3.setAttribute(`value`, `` + me(r3.value));
                  break;
                case `select`:
                  e3.multiple = !!r3.multiple, o3 = r3.value, o3 == null ? r3.defaultValue != null && De(e3, !!r3.multiple, r3.defaultValue, true) : De(e3, !!r3.multiple, o3, false);
                  break;
                default:
                  typeof i2.onClick == `function` && (e3.onclick = Di);
              }
              switch (n3) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r3 = !!r3.autoFocus;
                  break a;
                case `img`:
                  r3 = true;
                  break a;
                default:
                  r3 = false;
              }
            }
            r3 && (t2.flags |= 4);
          }
          t2.ref !== null && (t2.flags |= 512, t2.flags |= 2097152);
        }
        return W(t2), null;
      case 6:
        if (e3 && t2.stateNode != null)
          pc(e3, t2, e3.memoizedProps, r3);
        else {
          if (typeof r3 != `string` && t2.stateNode === null)
            throw Error(a2(166));
          if (n3 = ko(Oo.current), ko(Eo.current), La(t2)) {
            if (r3 = t2.stateNode, n3 = t2.memoizedProps, r3[Bi] = t2, (o3 = r3.nodeValue !== n3) && (e3 = ka, e3 !== null))
              switch (e3.tag) {
                case 3:
                  Ei(r3.nodeValue, n3, (e3.mode & 1) != 0);
                  break;
                case 5:
                  true !== e3.memoizedProps.suppressHydrationWarning && Ei(r3.nodeValue, n3, (e3.mode & 1) != 0);
              }
            o3 && (t2.flags |= 4);
          } else
            r3 = (n3.nodeType === 9 ? n3 : n3.ownerDocument).createTextNode(r3), r3[Bi] = t2, t2.stateNode = r3;
        }
        return W(t2), null;
      case 13:
        if (I(z), r3 = t2.memoizedState, e3 === null || e3.memoizedState !== null && e3.memoizedState.dehydrated !== null) {
          if (R && Aa !== null && t2.mode & 1 && !(t2.flags & 128))
            Ra(), za(), t2.flags |= 98560, o3 = false;
          else if (o3 = La(t2), r3 !== null && r3.dehydrated !== null) {
            if (e3 === null) {
              if (!o3)
                throw Error(a2(318));
              if (o3 = t2.memoizedState, o3 = o3 === null ? null : o3.dehydrated, !o3)
                throw Error(a2(317));
              o3[Bi] = t2;
            } else
              za(), !(t2.flags & 128) && (t2.memoizedState = null), t2.flags |= 4;
            W(t2), o3 = false;
          } else
            ja !== null && (bl(ja), ja = null), o3 = true;
          if (!o3)
            return t2.flags & 65536 ? t2 : null;
        }
        return t2.flags & 128 ? (t2.lanes = n3, t2) : (r3 = r3 !== null, r3 !== (e3 !== null && e3.memoizedState !== null) && r3 && (t2.child.flags |= 8192, t2.mode & 1 && (e3 === null || z.current & 1 ? Q === 0 && (Q = 3) : Al())), t2.updateQueue !== null && (t2.flags |= 4), W(t2), null);
      case 4:
        return jo(), e3 === null && gi(t2.stateNode.containerInfo), W(t2), null;
      case 10:
        return Ja(t2.type._context), W(t2), null;
      case 17:
        return ia(t2.type) && aa(), W(t2), null;
      case 19:
        if (I(z), o3 = t2.memoizedState, o3 === null)
          return W(t2), null;
        if (r3 = (t2.flags & 128) != 0, c3 = o3.rendering, c3 === null)
          if (r3)
            mc(o3, false);
          else {
            if (Q !== 0 || e3 !== null && e3.flags & 128)
              for (e3 = t2.child; e3 !== null; ) {
                if (c3 = Po(e3), c3 !== null) {
                  for (t2.flags |= 128, mc(o3, false), r3 = c3.updateQueue, r3 !== null && (t2.updateQueue = r3, t2.flags |= 4), t2.subtreeFlags = 0, r3 = n3, n3 = t2.child; n3 !== null; )
                    o3 = n3, e3 = r3, o3.flags &= 14680066, c3 = o3.alternate, c3 === null ? (o3.childLanes = 0, o3.lanes = e3, o3.child = null, o3.subtreeFlags = 0, o3.memoizedProps = null, o3.memoizedState = null, o3.updateQueue = null, o3.dependencies = null, o3.stateNode = null) : (o3.childLanes = c3.childLanes, o3.lanes = c3.lanes, o3.child = c3.child, o3.subtreeFlags = 0, o3.deletions = null, o3.memoizedProps = c3.memoizedProps, o3.memoizedState = c3.memoizedState, o3.updateQueue = c3.updateQueue, o3.type = c3.type, e3 = c3.dependencies, o3.dependencies = e3 === null ? null : { lanes: e3.lanes, firstContext: e3.firstContext }), n3 = n3.sibling;
                  return L(z, z.current & 1 | 2), t2.child;
                }
                e3 = e3.sibling;
              }
            o3.tail !== null && N() > nl && (t2.flags |= 128, r3 = true, mc(o3, false), t2.lanes = 4194304);
          }
        else {
          if (!r3)
            if (e3 = Po(c3), e3 !== null) {
              if (t2.flags |= 128, r3 = true, n3 = e3.updateQueue, n3 !== null && (t2.updateQueue = n3, t2.flags |= 4), mc(o3, true), o3.tail === null && o3.tailMode === `hidden` && !c3.alternate && !R)
                return W(t2), null;
            } else
              2 * N() - o3.renderingStartTime > nl && n3 !== 1073741824 && (t2.flags |= 128, r3 = true, mc(o3, false), t2.lanes = 4194304);
          o3.isBackwards ? (c3.sibling = t2.child, t2.child = c3) : (n3 = o3.last, n3 === null ? t2.child = c3 : n3.sibling = c3, o3.last = c3);
        }
        return o3.tail === null ? (W(t2), null) : (t2 = o3.tail, o3.rendering = t2, o3.tail = t2.sibling, o3.renderingStartTime = N(), t2.sibling = null, n3 = z.current, L(z, r3 ? n3 & 1 | 2 : n3 & 1), t2);
      case 22:
      case 23:
        return El(), r3 = t2.memoizedState !== null, e3 !== null && e3.memoizedState !== null !== r3 && (t2.flags |= 8192), r3 && t2.mode & 1 ? qc & 1073741824 && (W(t2), t2.subtreeFlags & 6 && (t2.flags |= 8192)) : W(t2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a2(156, t2.tag));
  }
  function gc(e3, t2) {
    switch (Oa(t2), t2.tag) {
      case 1:
        return ia(t2.type) && aa(), e3 = t2.flags, e3 & 65536 ? (t2.flags = e3 & -65537 | 128, t2) : null;
      case 3:
        return jo(), I(ta), I(ea), Io(), e3 = t2.flags, e3 & 65536 && !(e3 & 128) ? (t2.flags = e3 & -65537 | 128, t2) : null;
      case 5:
        return No(t2), null;
      case 13:
        if (I(z), e3 = t2.memoizedState, e3 !== null && e3.dehydrated !== null) {
          if (t2.alternate === null)
            throw Error(a2(340));
          za();
        }
        return e3 = t2.flags, e3 & 65536 ? (t2.flags = e3 & -65537 | 128, t2) : null;
      case 19:
        return I(z), null;
      case 4:
        return jo(), null;
      case 10:
        return Ja(t2.type._context), null;
      case 22:
      case 23:
        return El(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _c = false, G = false, vc = typeof WeakSet == `function` ? WeakSet : Set, K = null;
  function yc(e3, t2) {
    var n3 = e3.ref;
    if (n3 !== null)
      if (typeof n3 == `function`)
        try {
          n3(null);
        } catch (n4) {
          $(e3, t2, n4);
        }
      else
        n3.current = null;
  }
  function bc(e3, t2, n3) {
    try {
      n3();
    } catch (n4) {
      $(e3, t2, n4);
    }
  }
  var xc = false;
  function Sc(e3, t2) {
    if (Oi = bn, e3 = Vr(), Hr(e3)) {
      if (`selectionStart` in e3)
        var n3 = { start: e3.selectionStart, end: e3.selectionEnd };
      else
        a: {
          n3 = (n3 = e3.ownerDocument) && n3.defaultView || window;
          var r3 = n3.getSelection && n3.getSelection();
          if (r3 && r3.rangeCount !== 0) {
            n3 = r3.anchorNode;
            var i2 = r3.anchorOffset, o3 = r3.focusNode;
            r3 = r3.focusOffset;
            try {
              n3.nodeType, o3.nodeType;
            } catch {
              n3 = null;
              break a;
            }
            var s3 = 0, c3 = -1, l3 = -1, u3 = 0, d3 = 0, f3 = e3, p3 = null;
            b:
              for (; ; ) {
                for (var m3; f3 !== n3 || i2 !== 0 && f3.nodeType !== 3 || (c3 = s3 + i2), f3 !== o3 || r3 !== 0 && f3.nodeType !== 3 || (l3 = s3 + r3), f3.nodeType === 3 && (s3 += f3.nodeValue.length), (m3 = f3.firstChild) !== null; )
                  p3 = f3, f3 = m3;
                for (; ; ) {
                  if (f3 === e3)
                    break b;
                  if (p3 === n3 && ++u3 === i2 && (c3 = s3), p3 === o3 && ++d3 === r3 && (l3 = s3), (m3 = f3.nextSibling) !== null)
                    break;
                  f3 = p3, p3 = f3.parentNode;
                }
                f3 = m3;
              }
            n3 = c3 === -1 || l3 === -1 ? null : { start: c3, end: l3 };
          } else
            n3 = null;
        }
      n3 || (n3 = { start: 0, end: 0 });
    } else
      n3 = null;
    for (ki = { focusedElem: e3, selectionRange: n3 }, bn = false, K = t2; K !== null; )
      if (t2 = K, e3 = t2.child, t2.subtreeFlags & 1028 && e3 !== null)
        e3.return = t2, K = e3;
      else
        for (; K !== null; ) {
          t2 = K;
          try {
            var h3 = t2.alternate;
            if (t2.flags & 1024)
              switch (t2.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (h3 !== null) {
                    var g3 = h3.memoizedProps, _3 = h3.memoizedState, v3 = t2.stateNode;
                    v3.__reactInternalSnapshotBeforeUpdate = v3.getSnapshotBeforeUpdate(t2.elementType === t2.type ? g3 : Ha(t2.type, g3), _3);
                  }
                  break;
                case 3:
                  var y3 = t2.stateNode.containerInfo;
                  y3.nodeType === 1 ? y3.textContent = `` : y3.nodeType === 9 && y3.documentElement && y3.removeChild(y3.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a2(163));
              }
          } catch (e4) {
            $(t2, t2.return, e4);
          }
          if (e3 = t2.sibling, e3 !== null) {
            e3.return = t2.return, K = e3;
            break;
          }
          K = t2.return;
        }
    return h3 = xc, xc = false, h3;
  }
  function Cc(e3, t2, n3) {
    var r3 = t2.updateQueue;
    if (r3 = r3 === null ? null : r3.lastEffect, r3 !== null) {
      var i2 = r3 = r3.next;
      do {
        if ((i2.tag & e3) === e3) {
          var a3 = i2.destroy;
          i2.destroy = void 0, a3 !== void 0 && bc(t2, n3, a3);
        }
        i2 = i2.next;
      } while (i2 !== r3);
    }
  }
  function wc(e3, t2) {
    if (t2 = t2.updateQueue, t2 = t2 === null ? null : t2.lastEffect, t2 !== null) {
      var n3 = t2 = t2.next;
      do {
        if ((n3.tag & e3) === e3) {
          var r3 = n3.create;
          n3.destroy = r3();
        }
        n3 = n3.next;
      } while (n3 !== t2);
    }
  }
  function Tc(e3) {
    var t2 = e3.ref;
    if (t2 !== null) {
      var n3 = e3.stateNode;
      switch (e3.tag) {
        case 5:
          e3 = n3;
          break;
        default:
          e3 = n3;
      }
      typeof t2 == `function` ? t2(e3) : t2.current = e3;
    }
  }
  function Ec(e3) {
    var t2 = e3.alternate;
    t2 !== null && (e3.alternate = null, Ec(t2)), e3.child = null, e3.deletions = null, e3.sibling = null, e3.tag === 5 && (t2 = e3.stateNode, t2 !== null && (delete t2[Bi], delete t2[Vi], delete t2[Ui], delete t2[Wi], delete t2[Gi])), e3.stateNode = null, e3.return = null, e3.dependencies = null, e3.memoizedProps = null, e3.memoizedState = null, e3.pendingProps = null, e3.stateNode = null, e3.updateQueue = null;
  }
  function Dc(e3) {
    return e3.tag === 5 || e3.tag === 3 || e3.tag === 4;
  }
  function Oc(e3) {
    a:
      for (; ; ) {
        for (; e3.sibling === null; ) {
          if (e3.return === null || Dc(e3.return))
            return null;
          e3 = e3.return;
        }
        for (e3.sibling.return = e3.return, e3 = e3.sibling; e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 18; ) {
          if (e3.flags & 2 || e3.child === null || e3.tag === 4)
            continue a;
          e3.child.return = e3, e3 = e3.child;
        }
        if (!(e3.flags & 2))
          return e3.stateNode;
      }
  }
  function kc(e3, t2, n3) {
    var r3 = e3.tag;
    if (r3 === 5 || r3 === 6)
      e3 = e3.stateNode, t2 ? n3.nodeType === 8 ? n3.parentNode.insertBefore(e3, t2) : n3.insertBefore(e3, t2) : (n3.nodeType === 8 ? (t2 = n3.parentNode, t2.insertBefore(e3, n3)) : (t2 = n3, t2.appendChild(e3)), n3 = n3._reactRootContainer, n3 != null || t2.onclick !== null || (t2.onclick = Di));
    else if (r3 !== 4 && (e3 = e3.child, e3 !== null))
      for (kc(e3, t2, n3), e3 = e3.sibling; e3 !== null; )
        kc(e3, t2, n3), e3 = e3.sibling;
  }
  function Ac(e3, t2, n3) {
    var r3 = e3.tag;
    if (r3 === 5 || r3 === 6)
      e3 = e3.stateNode, t2 ? n3.insertBefore(e3, t2) : n3.appendChild(e3);
    else if (r3 !== 4 && (e3 = e3.child, e3 !== null))
      for (Ac(e3, t2, n3), e3 = e3.sibling; e3 !== null; )
        Ac(e3, t2, n3), e3 = e3.sibling;
  }
  var q = null, jc = false;
  function Mc(e3, t2, n3) {
    for (n3 = n3.child; n3 !== null; )
      Nc(e3, t2, n3), n3 = n3.sibling;
  }
  function Nc(e3, t2, n3) {
    if (At && typeof At.onCommitFiberUnmount == `function`)
      try {
        At.onCommitFiberUnmount(kt, n3);
      } catch {
      }
    switch (n3.tag) {
      case 5:
        G || yc(n3, t2);
      case 6:
        var r3 = q, i2 = jc;
        q = null, Mc(e3, t2, n3), q = r3, jc = i2, q !== null && (jc ? (e3 = q, n3 = n3.stateNode, e3.nodeType === 8 ? e3.parentNode.removeChild(n3) : e3.removeChild(n3)) : q.removeChild(n3.stateNode));
        break;
      case 18:
        q !== null && (jc ? (e3 = q, n3 = n3.stateNode, e3.nodeType === 8 ? Ii(e3.parentNode, n3) : e3.nodeType === 1 && Ii(e3, n3), vn(e3)) : Ii(q, n3.stateNode));
        break;
      case 4:
        r3 = q, i2 = jc, q = n3.stateNode.containerInfo, jc = true, Mc(e3, t2, n3), q = r3, jc = i2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!G && (r3 = n3.updateQueue, r3 !== null && (r3 = r3.lastEffect, r3 !== null))) {
          i2 = r3 = r3.next;
          do {
            var a3 = i2, o3 = a3.destroy;
            a3 = a3.tag, o3 !== void 0 && (a3 & 2 || a3 & 4) && bc(n3, t2, o3), i2 = i2.next;
          } while (i2 !== r3);
        }
        Mc(e3, t2, n3);
        break;
      case 1:
        if (!G && (yc(n3, t2), r3 = n3.stateNode, typeof r3.componentWillUnmount == `function`))
          try {
            r3.props = n3.memoizedProps, r3.state = n3.memoizedState, r3.componentWillUnmount();
          } catch (e4) {
            $(n3, t2, e4);
          }
        Mc(e3, t2, n3);
        break;
      case 21:
        Mc(e3, t2, n3);
        break;
      case 22:
        n3.mode & 1 ? (G = (r3 = G) || n3.memoizedState !== null, Mc(e3, t2, n3), G = r3) : Mc(e3, t2, n3);
        break;
      default:
        Mc(e3, t2, n3);
    }
  }
  function Pc(e3) {
    var t2 = e3.updateQueue;
    if (t2 !== null) {
      e3.updateQueue = null;
      var n3 = e3.stateNode;
      n3 === null && (n3 = e3.stateNode = new vc()), t2.forEach(function(t3) {
        var r3 = Ul.bind(null, e3, t3);
        n3.has(t3) || (n3.add(t3), t3.then(r3, r3));
      });
    }
  }
  function Fc(e3, t2) {
    var n3 = t2.deletions;
    if (n3 !== null)
      for (var r3 = 0; r3 < n3.length; r3++) {
        var i2 = n3[r3];
        try {
          var o3 = e3, s3 = t2, c3 = s3;
          a:
            for (; c3 !== null; ) {
              switch (c3.tag) {
                case 5:
                  q = c3.stateNode, jc = false;
                  break a;
                case 3:
                  q = c3.stateNode.containerInfo, jc = true;
                  break a;
                case 4:
                  q = c3.stateNode.containerInfo, jc = true;
                  break a;
              }
              c3 = c3.return;
            }
          if (q === null)
            throw Error(a2(160));
          Nc(o3, s3, i2), q = null, jc = false;
          var l3 = i2.alternate;
          l3 !== null && (l3.return = null), i2.return = null;
        } catch (e4) {
          $(i2, t2, e4);
        }
      }
    if (t2.subtreeFlags & 12854)
      for (t2 = t2.child; t2 !== null; )
        Ic(t2, e3), t2 = t2.sibling;
  }
  function Ic(e3, t2) {
    var n3 = e3.alternate, r3 = e3.flags;
    switch (e3.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Fc(t2, e3), Lc(e3), r3 & 4) {
          try {
            Cc(3, e3, e3.return), wc(3, e3);
          } catch (t3) {
            $(e3, e3.return, t3);
          }
          try {
            Cc(5, e3, e3.return);
          } catch (t3) {
            $(e3, e3.return, t3);
          }
        }
        break;
      case 1:
        Fc(t2, e3), Lc(e3), r3 & 512 && n3 !== null && yc(n3, n3.return);
        break;
      case 5:
        if (Fc(t2, e3), Lc(e3), r3 & 512 && n3 !== null && yc(n3, n3.return), e3.flags & 32) {
          var i2 = e3.stateNode;
          try {
            Ie(i2, ``);
          } catch (t3) {
            $(e3, e3.return, t3);
          }
        }
        if (r3 & 4 && (i2 = e3.stateNode, i2 != null)) {
          var o3 = e3.memoizedProps, s3 = n3 === null ? o3 : n3.memoizedProps, c3 = e3.type, l3 = e3.updateQueue;
          if (e3.updateQueue = null, l3 !== null)
            try {
              c3 === `input` && o3.type === `radio` && o3.name != null && Se(i2, o3), Ue(c3, s3);
              var u3 = Ue(c3, o3);
              for (s3 = 0; s3 < l3.length; s3 += 2) {
                var d3 = l3[s3], f3 = l3[s3 + 1];
                d3 === `style` ? Be(i2, f3) : d3 === `dangerouslySetInnerHTML` ? Fe(i2, f3) : d3 === `children` ? Ie(i2, f3) : S2(i2, d3, f3, u3);
              }
              switch (c3) {
                case `input`:
                  Ce(i2, o3);
                  break;
                case `textarea`:
                  Ae(i2, o3);
                  break;
                case `select`:
                  var p3 = i2._wrapperState.wasMultiple;
                  i2._wrapperState.wasMultiple = !!o3.multiple;
                  var m3 = o3.value;
                  m3 == null ? p3 !== !!o3.multiple && (o3.defaultValue == null ? De(i2, !!o3.multiple, o3.multiple ? [] : ``, false) : De(i2, !!o3.multiple, o3.defaultValue, true)) : De(i2, !!o3.multiple, m3, false);
              }
              i2[Vi] = o3;
            } catch (t3) {
              $(e3, e3.return, t3);
            }
        }
        break;
      case 6:
        if (Fc(t2, e3), Lc(e3), r3 & 4) {
          if (e3.stateNode === null)
            throw Error(a2(162));
          i2 = e3.stateNode, o3 = e3.memoizedProps;
          try {
            i2.nodeValue = o3;
          } catch (t3) {
            $(e3, e3.return, t3);
          }
        }
        break;
      case 3:
        if (Fc(t2, e3), Lc(e3), r3 & 4 && n3 !== null && n3.memoizedState.isDehydrated)
          try {
            vn(t2.containerInfo);
          } catch (t3) {
            $(e3, e3.return, t3);
          }
        break;
      case 4:
        Fc(t2, e3), Lc(e3);
        break;
      case 13:
        Fc(t2, e3), Lc(e3), i2 = e3.child, i2.flags & 8192 && (o3 = i2.memoizedState !== null, i2.stateNode.isHidden = o3, !o3 || i2.alternate !== null && i2.alternate.memoizedState !== null || (tl = N())), r3 & 4 && Pc(e3);
        break;
      case 22:
        if (d3 = n3 !== null && n3.memoizedState !== null, e3.mode & 1 ? (G = (u3 = G) || d3, Fc(t2, e3), G = u3) : Fc(t2, e3), Lc(e3), r3 & 8192) {
          if (u3 = e3.memoizedState !== null, (e3.stateNode.isHidden = u3) && !d3 && e3.mode & 1)
            for (K = e3, d3 = e3.child; d3 !== null; ) {
              for (f3 = K = d3; K !== null; ) {
                switch (p3 = K, m3 = p3.child, p3.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Cc(4, p3, p3.return);
                    break;
                  case 1:
                    yc(p3, p3.return);
                    var h3 = p3.stateNode;
                    if (typeof h3.componentWillUnmount == `function`) {
                      r3 = p3, n3 = p3.return;
                      try {
                        t2 = r3, h3.props = t2.memoizedProps, h3.state = t2.memoizedState, h3.componentWillUnmount();
                      } catch (e4) {
                        $(r3, n3, e4);
                      }
                    }
                    break;
                  case 5:
                    yc(p3, p3.return);
                    break;
                  case 22:
                    if (p3.memoizedState !== null) {
                      Vc(f3);
                      continue;
                    }
                }
                m3 === null ? Vc(f3) : (m3.return = p3, K = m3);
              }
              d3 = d3.sibling;
            }
          a:
            for (d3 = null, f3 = e3; ; ) {
              if (f3.tag === 5) {
                if (d3 === null) {
                  d3 = f3;
                  try {
                    i2 = f3.stateNode, u3 ? (o3 = i2.style, typeof o3.setProperty == `function` ? o3.setProperty(`display`, `none`, `important`) : o3.display = `none`) : (c3 = f3.stateNode, l3 = f3.memoizedProps.style, s3 = l3 != null && l3.hasOwnProperty(`display`) ? l3.display : null, c3.style.display = ze(`display`, s3));
                  } catch (t3) {
                    $(e3, e3.return, t3);
                  }
                }
              } else if (f3.tag === 6) {
                if (d3 === null)
                  try {
                    f3.stateNode.nodeValue = u3 ? `` : f3.memoizedProps;
                  } catch (t3) {
                    $(e3, e3.return, t3);
                  }
              } else if ((f3.tag !== 22 && f3.tag !== 23 || f3.memoizedState === null || f3 === e3) && f3.child !== null) {
                f3.child.return = f3, f3 = f3.child;
                continue;
              }
              if (f3 === e3)
                break a;
              for (; f3.sibling === null; ) {
                if (f3.return === null || f3.return === e3)
                  break a;
                d3 === f3 && (d3 = null), f3 = f3.return;
              }
              d3 === f3 && (d3 = null), f3.sibling.return = f3.return, f3 = f3.sibling;
            }
        }
        break;
      case 19:
        Fc(t2, e3), Lc(e3), r3 & 4 && Pc(e3);
        break;
      case 21:
        break;
      default:
        Fc(t2, e3), Lc(e3);
    }
  }
  function Lc(e3) {
    var t2 = e3.flags;
    if (t2 & 2) {
      try {
        a: {
          for (var n3 = e3.return; n3 !== null; ) {
            if (Dc(n3)) {
              var r3 = n3;
              break a;
            }
            n3 = n3.return;
          }
          throw Error(a2(160));
        }
        switch (r3.tag) {
          case 5:
            var i2 = r3.stateNode;
            r3.flags & 32 && (Ie(i2, ``), r3.flags &= -33), Ac(e3, Oc(e3), i2);
            break;
          case 3:
          case 4:
            var o3 = r3.stateNode.containerInfo;
            kc(e3, Oc(e3), o3);
            break;
          default:
            throw Error(a2(161));
        }
      } catch (t3) {
        $(e3, e3.return, t3);
      }
      e3.flags &= -3;
    }
    t2 & 4096 && (e3.flags &= -4097);
  }
  function Rc(e3, t2, n3) {
    K = e3, zc(e3, t2, n3);
  }
  function zc(e3, t2, n3) {
    for (var r3 = (e3.mode & 1) != 0; K !== null; ) {
      var i2 = K, a3 = i2.child;
      if (i2.tag === 22 && r3) {
        var o3 = i2.memoizedState !== null || _c;
        if (!o3) {
          var s3 = i2.alternate, c3 = s3 !== null && s3.memoizedState !== null || G;
          s3 = _c;
          var l3 = G;
          if (_c = o3, (G = c3) && !l3)
            for (K = i2; K !== null; )
              o3 = K, c3 = o3.child, o3.tag === 22 && o3.memoizedState !== null || c3 === null ? Hc(i2) : (c3.return = o3, K = c3);
          for (; a3 !== null; )
            K = a3, zc(a3, t2, n3), a3 = a3.sibling;
          K = i2, _c = s3, G = l3;
        }
        Bc(e3, t2, n3);
      } else
        i2.subtreeFlags & 8772 && a3 !== null ? (a3.return = i2, K = a3) : Bc(e3, t2, n3);
    }
  }
  function Bc(e3) {
    for (; K !== null; ) {
      var t2 = K;
      if (t2.flags & 8772) {
        var n3 = t2.alternate;
        try {
          if (t2.flags & 8772)
            switch (t2.tag) {
              case 0:
              case 11:
              case 15:
                G || wc(5, t2);
                break;
              case 1:
                var r3 = t2.stateNode;
                if (t2.flags & 4 && !G)
                  if (n3 === null)
                    r3.componentDidMount();
                  else {
                    var i2 = t2.elementType === t2.type ? n3.memoizedProps : Ha(t2.type, n3.memoizedProps);
                    r3.componentDidUpdate(i2, n3.memoizedState, r3.__reactInternalSnapshotBeforeUpdate);
                  }
                var o3 = t2.updateQueue;
                o3 !== null && uo(t2, o3, r3);
                break;
              case 3:
                var s3 = t2.updateQueue;
                if (s3 !== null) {
                  if (n3 = null, t2.child !== null)
                    switch (t2.child.tag) {
                      case 5:
                        n3 = t2.child.stateNode;
                        break;
                      case 1:
                        n3 = t2.child.stateNode;
                    }
                  uo(t2, s3, n3);
                }
                break;
              case 5:
                var c3 = t2.stateNode;
                if (n3 === null && t2.flags & 4) {
                  n3 = c3;
                  var l3 = t2.memoizedProps;
                  switch (t2.type) {
                    case `button`:
                    case `input`:
                    case `select`:
                    case `textarea`:
                      l3.autoFocus && n3.focus();
                      break;
                    case `img`:
                      l3.src && (n3.src = l3.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t2.memoizedState === null) {
                  var u3 = t2.alternate;
                  if (u3 !== null) {
                    var d3 = u3.memoizedState;
                    if (d3 !== null) {
                      var f3 = d3.dehydrated;
                      f3 !== null && vn(f3);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a2(163));
            }
          G || t2.flags & 512 && Tc(t2);
        } catch (e4) {
          $(t2, t2.return, e4);
        }
      }
      if (t2 === e3) {
        K = null;
        break;
      }
      if (n3 = t2.sibling, n3 !== null) {
        n3.return = t2.return, K = n3;
        break;
      }
      K = t2.return;
    }
  }
  function Vc(e3) {
    for (; K !== null; ) {
      var t2 = K;
      if (t2 === e3) {
        K = null;
        break;
      }
      var n3 = t2.sibling;
      if (n3 !== null) {
        n3.return = t2.return, K = n3;
        break;
      }
      K = t2.return;
    }
  }
  function Hc(e3) {
    for (; K !== null; ) {
      var t2 = K;
      try {
        switch (t2.tag) {
          case 0:
          case 11:
          case 15:
            var n3 = t2.return;
            try {
              wc(4, t2);
            } catch (e4) {
              $(t2, n3, e4);
            }
            break;
          case 1:
            var r3 = t2.stateNode;
            if (typeof r3.componentDidMount == `function`) {
              var i2 = t2.return;
              try {
                r3.componentDidMount();
              } catch (e4) {
                $(t2, i2, e4);
              }
            }
            var a3 = t2.return;
            try {
              Tc(t2);
            } catch (e4) {
              $(t2, a3, e4);
            }
            break;
          case 5:
            var o3 = t2.return;
            try {
              Tc(t2);
            } catch (e4) {
              $(t2, o3, e4);
            }
        }
      } catch (e4) {
        $(t2, t2.return, e4);
      }
      if (t2 === e3) {
        K = null;
        break;
      }
      var s3 = t2.sibling;
      if (s3 !== null) {
        s3.return = t2.return, K = s3;
        break;
      }
      K = t2.return;
    }
  }
  var Uc = Math.ceil, Wc = C2.ReactCurrentDispatcher, Gc = C2.ReactCurrentOwner, Kc = C2.ReactCurrentBatchConfig, J = 0, Y = null, X = null, Z = 0, qc = 0, Jc = Qi(0), Q = 0, Yc = null, Xc = 0, Zc = 0, Qc = 0, $c = null, el = null, tl = 0, nl = 1 / 0, rl = null, il = false, al = null, ol = null, sl = false, cl = null, ll = 0, ul = 0, dl = null, fl = -1, pl = 0;
  function ml() {
    return J & 6 ? N() : fl === -1 ? fl = N() : fl;
  }
  function hl(e3) {
    return e3.mode & 1 ? J & 2 && Z !== 0 ? Z & -Z : Va.transition === null ? (e3 = P, e3 === 0 ? (e3 = window.event, e3 = e3 === void 0 ? 16 : En(e3.type), e3) : e3) : (pl === 0 && (pl = Ut()), pl) : 1;
  }
  function gl(e3, t2, n3, r3) {
    if (50 < ul)
      throw ul = 0, dl = null, Error(a2(185));
    Gt(e3, n3, r3), (!(J & 2) || e3 !== Y) && (e3 === Y && (!(J & 2) && (Zc |= n3), Q === 4 && Sl(e3, Z)), _l(e3, r3), n3 === 1 && J === 0 && !(t2.mode & 1) && (nl = N() + 500, da && ha()));
  }
  function _l(e3, t2) {
    var n3 = e3.callbackNode;
    Vt(e3, t2);
    var r3 = zt(e3, e3 === Y ? Z : 0);
    if (r3 === 0)
      n3 !== null && bt(n3), e3.callbackNode = null, e3.callbackPriority = 0;
    else if (t2 = r3 & -r3, e3.callbackPriority !== t2) {
      if (n3 != null && bt(n3), t2 === 1)
        e3.tag === 0 ? ma(Cl.bind(null, e3)) : pa(Cl.bind(null, e3)), Pi(function() {
          !(J & 6) && ha();
        }), n3 = null;
      else {
        switch (Jt(r3)) {
          case 1:
            n3 = wt;
            break;
          case 4:
            n3 = Tt;
            break;
          case 16:
            n3 = Et;
            break;
          case 536870912:
            n3 = Ot;
            break;
          default:
            n3 = Et;
        }
        n3 = Gl(n3, vl.bind(null, e3));
      }
      e3.callbackPriority = t2, e3.callbackNode = n3;
    }
  }
  function vl(e3, t2) {
    if (fl = -1, pl = 0, J & 6)
      throw Error(a2(327));
    var n3 = e3.callbackNode;
    if (Rl() && e3.callbackNode !== n3)
      return null;
    var r3 = zt(e3, e3 === Y ? Z : 0);
    if (r3 === 0)
      return null;
    if (r3 & 30 || (r3 & e3.expiredLanes) !== 0 || t2)
      t2 = jl(e3, r3);
    else {
      t2 = r3;
      var i2 = J;
      J |= 2;
      var o3 = kl();
      (Y !== e3 || Z !== t2) && (rl = null, nl = N() + 500, Dl(e3, t2));
      do
        try {
          Nl();
          break;
        } catch (t3) {
          Ol(e3, t3);
        }
      while (1);
      qa(), Wc.current = o3, J = i2, X === null ? (Y = null, Z = 0, t2 = Q) : t2 = 0;
    }
    if (t2 !== 0) {
      if (t2 === 2 && (i2 = Ht(e3), i2 !== 0 && (r3 = i2, t2 = yl(e3, i2))), t2 === 1)
        throw n3 = Yc, Dl(e3, 0), Sl(e3, r3), _l(e3, N()), n3;
      if (t2 === 6)
        Sl(e3, r3);
      else {
        if (i2 = e3.current.alternate, !(r3 & 30) && !xl(i2) && (t2 = jl(e3, r3), t2 === 2 && (o3 = Ht(e3), o3 !== 0 && (r3 = o3, t2 = yl(e3, o3))), t2 === 1))
          throw n3 = Yc, Dl(e3, 0), Sl(e3, r3), _l(e3, N()), n3;
        switch (e3.finishedWork = i2, e3.finishedLanes = r3, t2) {
          case 0:
          case 1:
            throw Error(a2(345));
          case 2:
            Il(e3, el, rl);
            break;
          case 3:
            if (Sl(e3, r3), (r3 & 130023424) === r3 && (t2 = tl + 500 - N(), 10 < t2)) {
              if (zt(e3, 0) !== 0)
                break;
              if (i2 = e3.suspendedLanes, (i2 & r3) !== r3) {
                ml(), e3.pingedLanes |= e3.suspendedLanes & i2;
                break;
              }
              e3.timeoutHandle = ji(Il.bind(null, e3, el, rl), t2);
              break;
            }
            Il(e3, el, rl);
            break;
          case 4:
            if (Sl(e3, r3), (r3 & 4194240) === r3)
              break;
            for (t2 = e3.eventTimes, i2 = -1; 0 < r3; ) {
              var s3 = 31 - Mt(r3);
              o3 = 1 << s3, s3 = t2[s3], s3 > i2 && (i2 = s3), r3 &= ~o3;
            }
            if (r3 = i2, r3 = N() - r3, r3 = (120 > r3 ? 120 : 480 > r3 ? 480 : 1080 > r3 ? 1080 : 1920 > r3 ? 1920 : 3e3 > r3 ? 3e3 : 4320 > r3 ? 4320 : 1960 * Uc(r3 / 1960)) - r3, 10 < r3) {
              e3.timeoutHandle = ji(Il.bind(null, e3, el, rl), r3);
              break;
            }
            Il(e3, el, rl);
            break;
          case 5:
            Il(e3, el, rl);
            break;
          default:
            throw Error(a2(329));
        }
      }
    }
    return _l(e3, N()), e3.callbackNode === n3 ? vl.bind(null, e3) : null;
  }
  function yl(e3, t2) {
    var n3 = $c;
    return e3.current.memoizedState.isDehydrated && (Dl(e3, t2).flags |= 256), e3 = jl(e3, t2), e3 !== 2 && (t2 = el, el = n3, t2 !== null && bl(t2)), e3;
  }
  function bl(e3) {
    el === null ? el = e3 : el.push.apply(el, e3);
  }
  function xl(e3) {
    for (var t2 = e3; ; ) {
      if (t2.flags & 16384) {
        var n3 = t2.updateQueue;
        if (n3 !== null && (n3 = n3.stores, n3 !== null))
          for (var r3 = 0; r3 < n3.length; r3++) {
            var i2 = n3[r3], a3 = i2.getSnapshot;
            i2 = i2.value;
            try {
              if (!Ir(a3(), i2))
                return false;
            } catch {
              return false;
            }
          }
      }
      if (n3 = t2.child, t2.subtreeFlags & 16384 && n3 !== null)
        n3.return = t2, t2 = n3;
      else {
        if (t2 === e3)
          break;
        for (; t2.sibling === null; ) {
          if (t2.return === null || t2.return === e3)
            return true;
          t2 = t2.return;
        }
        t2.sibling.return = t2.return, t2 = t2.sibling;
      }
    }
    return true;
  }
  function Sl(e3, t2) {
    for (t2 &= ~Qc, t2 &= ~Zc, e3.suspendedLanes |= t2, e3.pingedLanes &= ~t2, e3 = e3.expirationTimes; 0 < t2; ) {
      var n3 = 31 - Mt(t2), r3 = 1 << n3;
      e3[n3] = -1, t2 &= ~r3;
    }
  }
  function Cl(e3) {
    if (J & 6)
      throw Error(a2(327));
    Rl();
    var t2 = zt(e3, 0);
    if (!(t2 & 1))
      return _l(e3, N()), null;
    var n3 = jl(e3, t2);
    if (e3.tag !== 0 && n3 === 2) {
      var r3 = Ht(e3);
      r3 !== 0 && (t2 = r3, n3 = yl(e3, r3));
    }
    if (n3 === 1)
      throw n3 = Yc, Dl(e3, 0), Sl(e3, t2), _l(e3, N()), n3;
    if (n3 === 6)
      throw Error(a2(345));
    return e3.finishedWork = e3.current.alternate, e3.finishedLanes = t2, Il(e3, el, rl), _l(e3, N()), null;
  }
  function wl(e3, t2) {
    var n3 = J;
    J |= 1;
    try {
      return e3(t2);
    } finally {
      J = n3, J === 0 && (nl = N() + 500, da && ha());
    }
  }
  function Tl(e3) {
    cl !== null && cl.tag === 0 && !(J & 6) && Rl();
    var t2 = J;
    J |= 1;
    var n3 = Kc.transition, r3 = P;
    try {
      if (Kc.transition = null, P = 1, e3)
        return e3();
    } finally {
      P = r3, Kc.transition = n3, J = t2, !(J & 6) && ha();
    }
  }
  function El() {
    qc = Jc.current, I(Jc);
  }
  function Dl(e3, t2) {
    e3.finishedWork = null, e3.finishedLanes = 0;
    var n3 = e3.timeoutHandle;
    if (n3 !== -1 && (e3.timeoutHandle = -1, Mi(n3)), X !== null)
      for (n3 = X.return; n3 !== null; ) {
        var r3 = n3;
        switch (Oa(r3), r3.tag) {
          case 1:
            r3 = r3.type.childContextTypes, r3 != null && aa();
            break;
          case 3:
            jo(), I(ta), I(ea), Io();
            break;
          case 5:
            No(r3);
            break;
          case 4:
            jo();
            break;
          case 13:
            I(z);
            break;
          case 19:
            I(z);
            break;
          case 10:
            Ja(r3.type._context);
            break;
          case 22:
          case 23:
            El();
        }
        n3 = n3.return;
      }
    if (Y = e3, X = e3 = Xl(e3.current, null), Z = qc = t2, Q = 0, Yc = null, Qc = Zc = Xc = 0, el = $c = null, Qa !== null) {
      for (t2 = 0; t2 < Qa.length; t2++)
        if (n3 = Qa[t2], r3 = n3.interleaved, r3 !== null) {
          n3.interleaved = null;
          var i2 = r3.next, a3 = n3.pending;
          if (a3 !== null) {
            var o3 = a3.next;
            a3.next = i2, r3.next = o3;
          }
          n3.pending = r3;
        }
      Qa = null;
    }
    return e3;
  }
  function Ol(e3, t2) {
    do {
      var n3 = X;
      try {
        if (qa(), Lo.current = Ds, Bo) {
          for (var r3 = B.memoizedState; r3 !== null; ) {
            var i2 = r3.queue;
            i2 !== null && (i2.pending = null), r3 = r3.next;
          }
          Bo = false;
        }
        if (zo = 0, H = V = B = null, Vo = false, Ho = 0, Gc.current = null, n3 === null || n3.return === null) {
          Q = 1, Yc = t2, X = null;
          break;
        }
        a: {
          var o3 = e3, s3 = n3.return, c3 = n3, l3 = t2;
          if (t2 = Z, c3.flags |= 32768, typeof l3 == `object` && l3 && typeof l3.then == `function`) {
            var u3 = l3, d3 = c3, f3 = d3.tag;
            if (!(d3.mode & 1) && (f3 === 0 || f3 === 11 || f3 === 15)) {
              var p3 = d3.alternate;
              p3 ? (d3.updateQueue = p3.updateQueue, d3.memoizedState = p3.memoizedState, d3.lanes = p3.lanes) : (d3.updateQueue = null, d3.memoizedState = null);
            }
            var m3 = Rs(s3);
            if (m3 !== null) {
              m3.flags &= -257, zs(m3, s3, c3, o3, t2), m3.mode & 1 && Ls(o3, u3, t2), t2 = m3, l3 = u3;
              var h3 = t2.updateQueue;
              if (h3 === null) {
                var g3 = /* @__PURE__ */ new Set();
                g3.add(l3), t2.updateQueue = g3;
              } else
                h3.add(l3);
              break a;
            } else {
              if (!(t2 & 1)) {
                Ls(o3, u3, t2), Al();
                break a;
              }
              l3 = Error(a2(426));
            }
          } else if (R && c3.mode & 1) {
            var _3 = Rs(s3);
            if (_3 !== null) {
              !(_3.flags & 65536) && (_3.flags |= 256), zs(_3, s3, c3, o3, t2), Ba(js(l3, c3));
              break a;
            }
          }
          o3 = l3 = js(l3, c3), Q !== 4 && (Q = 2), $c === null ? $c = [o3] : $c.push(o3), o3 = s3;
          do {
            switch (o3.tag) {
              case 3:
                o3.flags |= 65536, t2 &= -t2, o3.lanes |= t2;
                var v3 = Fs(o3, l3, t2);
                co(o3, v3);
                break a;
              case 1:
                c3 = l3;
                var y3 = o3.type, b3 = o3.stateNode;
                if (!(o3.flags & 128) && (typeof y3.getDerivedStateFromError == `function` || b3 !== null && typeof b3.componentDidCatch == `function` && (ol === null || !ol.has(b3)))) {
                  o3.flags |= 65536, t2 &= -t2, o3.lanes |= t2;
                  var x3 = Is(o3, c3, t2);
                  co(o3, x3);
                  break a;
                }
            }
            o3 = o3.return;
          } while (o3 !== null);
        }
        Fl(n3);
      } catch (e4) {
        t2 = e4, X === n3 && n3 !== null && (X = n3 = n3.return);
        continue;
      }
      break;
    } while (1);
  }
  function kl() {
    var e3 = Wc.current;
    return Wc.current = Ds, e3 === null ? Ds : e3;
  }
  function Al() {
    (Q === 0 || Q === 3 || Q === 2) && (Q = 4), Y === null || !(Xc & 268435455) && !(Zc & 268435455) || Sl(Y, Z);
  }
  function jl(e3, t2) {
    var n3 = J;
    J |= 2;
    var r3 = kl();
    (Y !== e3 || Z !== t2) && (rl = null, Dl(e3, t2));
    do
      try {
        Ml();
        break;
      } catch (t3) {
        Ol(e3, t3);
      }
    while (1);
    if (qa(), J = n3, Wc.current = r3, X !== null)
      throw Error(a2(261));
    return Y = null, Z = 0, Q;
  }
  function Ml() {
    for (; X !== null; )
      Pl(X);
  }
  function Nl() {
    for (; X !== null && !xt(); )
      Pl(X);
  }
  function Pl(e3) {
    var t2 = Wl(e3.alternate, e3, qc);
    e3.memoizedProps = e3.pendingProps, t2 === null ? Fl(e3) : X = t2, Gc.current = null;
  }
  function Fl(e3) {
    var t2 = e3;
    do {
      var n3 = t2.alternate;
      if (e3 = t2.return, t2.flags & 32768) {
        if (n3 = gc(n3, t2), n3 !== null) {
          n3.flags &= 32767, X = n3;
          return;
        }
        if (e3 !== null)
          e3.flags |= 32768, e3.subtreeFlags = 0, e3.deletions = null;
        else {
          Q = 6, X = null;
          return;
        }
      } else if (n3 = hc(n3, t2, qc), n3 !== null) {
        X = n3;
        return;
      }
      if (t2 = t2.sibling, t2 !== null) {
        X = t2;
        return;
      }
      X = t2 = e3;
    } while (t2 !== null);
    Q === 0 && (Q = 5);
  }
  function Il(e3, t2, n3) {
    var r3 = P, i2 = Kc.transition;
    try {
      Kc.transition = null, P = 1, Ll(e3, t2, n3, r3);
    } finally {
      Kc.transition = i2, P = r3;
    }
    return null;
  }
  function Ll(e3, t2, n3, r3) {
    do
      Rl();
    while (cl !== null);
    if (J & 6)
      throw Error(a2(327));
    n3 = e3.finishedWork;
    var i2 = e3.finishedLanes;
    if (n3 === null)
      return null;
    if (e3.finishedWork = null, e3.finishedLanes = 0, n3 === e3.current)
      throw Error(a2(177));
    e3.callbackNode = null, e3.callbackPriority = 0;
    var o3 = n3.lanes | n3.childLanes;
    if (Kt(e3, o3), e3 === Y && (X = Y = null, Z = 0), !(n3.subtreeFlags & 2064) && !(n3.flags & 2064) || sl || (sl = true, Gl(Et, function() {
      return Rl(), null;
    })), o3 = (n3.flags & 15990) != 0, n3.subtreeFlags & 15990 || o3) {
      o3 = Kc.transition, Kc.transition = null;
      var s3 = P;
      P = 1;
      var c3 = J;
      J |= 4, Gc.current = null, Sc(e3, n3), Ic(n3, e3), Ur(ki), bn = !!Oi, ki = Oi = null, e3.current = n3, Rc(n3, e3, i2), St(), J = c3, P = s3, Kc.transition = o3;
    } else
      e3.current = n3;
    if (sl && (sl = false, cl = e3, ll = i2), o3 = e3.pendingLanes, o3 === 0 && (ol = null), jt(n3.stateNode, r3), _l(e3, N()), t2 !== null)
      for (r3 = e3.onRecoverableError, n3 = 0; n3 < t2.length; n3++)
        i2 = t2[n3], r3(i2.value, { componentStack: i2.stack, digest: i2.digest });
    if (il)
      throw il = false, e3 = al, al = null, e3;
    return ll & 1 && e3.tag !== 0 && Rl(), o3 = e3.pendingLanes, o3 & 1 ? e3 === dl ? ul++ : (ul = 0, dl = e3) : ul = 0, ha(), null;
  }
  function Rl() {
    if (cl !== null) {
      var e3 = Jt(ll), t2 = Kc.transition, n3 = P;
      try {
        if (Kc.transition = null, P = 16 > e3 ? 16 : e3, cl === null)
          var r3 = false;
        else {
          if (e3 = cl, cl = null, ll = 0, J & 6)
            throw Error(a2(331));
          var i2 = J;
          for (J |= 4, K = e3.current; K !== null; ) {
            var o3 = K, s3 = o3.child;
            if (K.flags & 16) {
              var c3 = o3.deletions;
              if (c3 !== null) {
                for (var l3 = 0; l3 < c3.length; l3++) {
                  var u3 = c3[l3];
                  for (K = u3; K !== null; ) {
                    var d3 = K;
                    switch (d3.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cc(8, d3, o3);
                    }
                    var f3 = d3.child;
                    if (f3 !== null)
                      f3.return = d3, K = f3;
                    else
                      for (; K !== null; ) {
                        d3 = K;
                        var p3 = d3.sibling, m3 = d3.return;
                        if (Ec(d3), d3 === u3) {
                          K = null;
                          break;
                        }
                        if (p3 !== null) {
                          p3.return = m3, K = p3;
                          break;
                        }
                        K = m3;
                      }
                  }
                }
                var h3 = o3.alternate;
                if (h3 !== null) {
                  var g3 = h3.child;
                  if (g3 !== null) {
                    h3.child = null;
                    do {
                      var _3 = g3.sibling;
                      g3.sibling = null, g3 = _3;
                    } while (g3 !== null);
                  }
                }
                K = o3;
              }
            }
            if (o3.subtreeFlags & 2064 && s3 !== null)
              s3.return = o3, K = s3;
            else
              b:
                for (; K !== null; ) {
                  if (o3 = K, o3.flags & 2048)
                    switch (o3.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cc(9, o3, o3.return);
                    }
                  var v3 = o3.sibling;
                  if (v3 !== null) {
                    v3.return = o3.return, K = v3;
                    break b;
                  }
                  K = o3.return;
                }
          }
          var y3 = e3.current;
          for (K = y3; K !== null; ) {
            s3 = K;
            var b3 = s3.child;
            if (s3.subtreeFlags & 2064 && b3 !== null)
              b3.return = s3, K = b3;
            else
              b:
                for (s3 = y3; K !== null; ) {
                  if (c3 = K, c3.flags & 2048)
                    try {
                      switch (c3.tag) {
                        case 0:
                        case 11:
                        case 15:
                          wc(9, c3);
                      }
                    } catch (e4) {
                      $(c3, c3.return, e4);
                    }
                  if (c3 === s3) {
                    K = null;
                    break b;
                  }
                  var x3 = c3.sibling;
                  if (x3 !== null) {
                    x3.return = c3.return, K = x3;
                    break b;
                  }
                  K = c3.return;
                }
          }
          if (J = i2, ha(), At && typeof At.onPostCommitFiberRoot == `function`)
            try {
              At.onPostCommitFiberRoot(kt, e3);
            } catch {
            }
          r3 = true;
        }
        return r3;
      } finally {
        P = n3, Kc.transition = t2;
      }
    }
    return false;
  }
  function zl(e3, t2, n3) {
    t2 = js(n3, t2), t2 = Fs(e3, t2, 1), e3 = oo(e3, t2, 1), t2 = ml(), e3 !== null && (Gt(e3, 1, t2), _l(e3, t2));
  }
  function $(e3, t2, n3) {
    if (e3.tag === 3)
      zl(e3, e3, n3);
    else
      for (; t2 !== null; ) {
        if (t2.tag === 3) {
          zl(t2, e3, n3);
          break;
        } else if (t2.tag === 1) {
          var r3 = t2.stateNode;
          if (typeof t2.type.getDerivedStateFromError == `function` || typeof r3.componentDidCatch == `function` && (ol === null || !ol.has(r3))) {
            e3 = js(n3, e3), e3 = Is(t2, e3, 1), t2 = oo(t2, e3, 1), e3 = ml(), t2 !== null && (Gt(t2, 1, e3), _l(t2, e3));
            break;
          }
        }
        t2 = t2.return;
      }
  }
  function Bl(e3, t2, n3) {
    var r3 = e3.pingCache;
    r3 !== null && r3.delete(t2), t2 = ml(), e3.pingedLanes |= e3.suspendedLanes & n3, Y === e3 && (Z & n3) === n3 && (Q === 4 || Q === 3 && (Z & 130023424) === Z && 500 > N() - tl ? Dl(e3, 0) : Qc |= n3), _l(e3, t2);
  }
  function Vl(e3, t2) {
    t2 === 0 && (e3.mode & 1 ? (t2 = Lt, Lt <<= 1, !(Lt & 130023424) && (Lt = 4194304)) : t2 = 1);
    var n3 = ml();
    e3 = to(e3, t2), e3 !== null && (Gt(e3, t2, n3), _l(e3, n3));
  }
  function Hl(e3) {
    var t2 = e3.memoizedState, n3 = 0;
    t2 !== null && (n3 = t2.retryLane), Vl(e3, n3);
  }
  function Ul(e3, t2) {
    var n3 = 0;
    switch (e3.tag) {
      case 13:
        var r3 = e3.stateNode, i2 = e3.memoizedState;
        i2 !== null && (n3 = i2.retryLane);
        break;
      case 19:
        r3 = e3.stateNode;
        break;
      default:
        throw Error(a2(314));
    }
    r3 !== null && r3.delete(t2), Vl(e3, n3);
  }
  var Wl = function(e3, t2, n3) {
    if (e3 !== null)
      if (e3.memoizedProps !== t2.pendingProps || ta.current)
        Vs = true;
      else {
        if ((e3.lanes & n3) === 0 && !(t2.flags & 128))
          return Vs = false, uc(e3, t2, n3);
        Vs = !!(e3.flags & 131072);
      }
    else
      Vs = false, R && t2.flags & 1048576 && Ea(t2, ya, t2.index);
    switch (t2.lanes = 0, t2.tag) {
      case 2:
        var r3 = t2.type;
        cc(e3, t2), e3 = t2.pendingProps;
        var i2 = ra(t2, ea.current);
        Xa(t2, n3), i2 = Go(null, t2, r3, e3, i2, n3);
        var o3 = Ko();
        return t2.flags |= 1, typeof i2 == `object` && i2 && typeof i2.render == `function` && i2.$$typeof === void 0 ? (t2.tag = 1, t2.memoizedState = null, t2.updateQueue = null, ia(r3) ? (o3 = true, ca(t2)) : o3 = false, t2.memoizedState = i2.state !== null && i2.state !== void 0 ? i2.state : null, ro(t2), i2.updater = mo, t2.stateNode = i2, i2._reactInternals = t2, vo(t2, r3, e3, n3), t2 = Xs(null, t2, r3, true, o3, n3)) : (t2.tag = 0, R && o3 && Da(t2), Hs(null, t2, i2, n3), t2 = t2.child), t2;
      case 16:
        r3 = t2.elementType;
        a: {
          switch (cc(e3, t2), e3 = t2.pendingProps, i2 = r3._init, r3 = i2(r3._payload), t2.type = r3, i2 = t2.tag = Yl(r3), e3 = Ha(r3, e3), i2) {
            case 0:
              t2 = Js(null, t2, r3, e3, n3);
              break a;
            case 1:
              t2 = Ys(null, t2, r3, e3, n3);
              break a;
            case 11:
              t2 = Us(null, t2, r3, e3, n3);
              break a;
            case 14:
              t2 = Ws(null, t2, r3, Ha(r3.type, e3), n3);
              break a;
          }
          throw Error(a2(306, r3, ``));
        }
        return t2;
      case 0:
        return r3 = t2.type, i2 = t2.pendingProps, i2 = t2.elementType === r3 ? i2 : Ha(r3, i2), Js(e3, t2, r3, i2, n3);
      case 1:
        return r3 = t2.type, i2 = t2.pendingProps, i2 = t2.elementType === r3 ? i2 : Ha(r3, i2), Ys(e3, t2, r3, i2, n3);
      case 3:
        a: {
          if (Zs(t2), e3 === null)
            throw Error(a2(387));
          r3 = t2.pendingProps, o3 = t2.memoizedState, i2 = o3.element, io(e3, t2), lo(t2, r3, null, n3);
          var s3 = t2.memoizedState;
          if (r3 = s3.element, o3.isDehydrated)
            if (o3 = { element: r3, isDehydrated: false, cache: s3.cache, pendingSuspenseBoundaries: s3.pendingSuspenseBoundaries, transitions: s3.transitions }, t2.updateQueue.baseState = o3, t2.memoizedState = o3, t2.flags & 256) {
              i2 = js(Error(a2(423)), t2), t2 = Qs(e3, t2, r3, n3, i2);
              break a;
            } else if (r3 !== i2) {
              i2 = js(Error(a2(424)), t2), t2 = Qs(e3, t2, r3, n3, i2);
              break a;
            } else
              for (Aa = Li(t2.stateNode.containerInfo.firstChild), ka = t2, R = true, ja = null, n3 = wo(t2, null, r3, n3), t2.child = n3; n3; )
                n3.flags = n3.flags & -3 | 4096, n3 = n3.sibling;
          else {
            if (za(), r3 === i2) {
              t2 = lc(e3, t2, n3);
              break a;
            }
            Hs(e3, t2, r3, n3);
          }
          t2 = t2.child;
        }
        return t2;
      case 5:
        return Mo(t2), e3 === null && Fa(t2), r3 = t2.type, i2 = t2.pendingProps, o3 = e3 === null ? null : e3.memoizedProps, s3 = i2.children, Ai(r3, i2) ? s3 = null : o3 !== null && Ai(r3, o3) && (t2.flags |= 32), qs(e3, t2), Hs(e3, t2, s3, n3), t2.child;
      case 6:
        return e3 === null && Fa(t2), null;
      case 13:
        return tc(e3, t2, n3);
      case 4:
        return Ao(t2, t2.stateNode.containerInfo), r3 = t2.pendingProps, e3 === null ? t2.child = Co(t2, null, r3, n3) : Hs(e3, t2, r3, n3), t2.child;
      case 11:
        return r3 = t2.type, i2 = t2.pendingProps, i2 = t2.elementType === r3 ? i2 : Ha(r3, i2), Us(e3, t2, r3, i2, n3);
      case 7:
        return Hs(e3, t2, t2.pendingProps, n3), t2.child;
      case 8:
        return Hs(e3, t2, t2.pendingProps.children, n3), t2.child;
      case 12:
        return Hs(e3, t2, t2.pendingProps.children, n3), t2.child;
      case 10:
        a: {
          if (r3 = t2.type._context, i2 = t2.pendingProps, o3 = t2.memoizedProps, s3 = i2.value, L(Ua, r3._currentValue), r3._currentValue = s3, o3 !== null)
            if (Ir(o3.value, s3)) {
              if (o3.children === i2.children && !ta.current) {
                t2 = lc(e3, t2, n3);
                break a;
              }
            } else
              for (o3 = t2.child, o3 !== null && (o3.return = t2); o3 !== null; ) {
                var c3 = o3.dependencies;
                if (c3 !== null) {
                  s3 = o3.child;
                  for (var l3 = c3.firstContext; l3 !== null; ) {
                    if (l3.context === r3) {
                      if (o3.tag === 1) {
                        l3 = ao(-1, n3 & -n3), l3.tag = 2;
                        var u3 = o3.updateQueue;
                        if (u3 !== null) {
                          u3 = u3.shared;
                          var d3 = u3.pending;
                          d3 === null ? l3.next = l3 : (l3.next = d3.next, d3.next = l3), u3.pending = l3;
                        }
                      }
                      o3.lanes |= n3, l3 = o3.alternate, l3 !== null && (l3.lanes |= n3), Ya(o3.return, n3, t2), c3.lanes |= n3;
                      break;
                    }
                    l3 = l3.next;
                  }
                } else if (o3.tag === 10)
                  s3 = o3.type === t2.type ? null : o3.child;
                else if (o3.tag === 18) {
                  if (s3 = o3.return, s3 === null)
                    throw Error(a2(341));
                  s3.lanes |= n3, c3 = s3.alternate, c3 !== null && (c3.lanes |= n3), Ya(s3, n3, t2), s3 = o3.sibling;
                } else
                  s3 = o3.child;
                if (s3 !== null)
                  s3.return = o3;
                else
                  for (s3 = o3; s3 !== null; ) {
                    if (s3 === t2) {
                      s3 = null;
                      break;
                    }
                    if (o3 = s3.sibling, o3 !== null) {
                      o3.return = s3.return, s3 = o3;
                      break;
                    }
                    s3 = s3.return;
                  }
                o3 = s3;
              }
          Hs(e3, t2, i2.children, n3), t2 = t2.child;
        }
        return t2;
      case 9:
        return i2 = t2.type, r3 = t2.pendingProps.children, Xa(t2, n3), i2 = Za(i2), r3 = r3(i2), t2.flags |= 1, Hs(e3, t2, r3, n3), t2.child;
      case 14:
        return r3 = t2.type, i2 = Ha(r3, t2.pendingProps), i2 = Ha(r3.type, i2), Ws(e3, t2, r3, i2, n3);
      case 15:
        return Gs(e3, t2, t2.type, t2.pendingProps, n3);
      case 17:
        return r3 = t2.type, i2 = t2.pendingProps, i2 = t2.elementType === r3 ? i2 : Ha(r3, i2), cc(e3, t2), t2.tag = 1, ia(r3) ? (e3 = true, ca(t2)) : e3 = false, Xa(t2, n3), go(t2, r3, i2), vo(t2, r3, i2, n3), Xs(null, t2, r3, true, e3, n3);
      case 19:
        return sc(e3, t2, n3);
      case 22:
        return Ks(e3, t2, n3);
    }
    throw Error(a2(156, t2.tag));
  };
  function Gl(e3, t2) {
    return yt(e3, t2);
  }
  function Kl(e3, t2, n3, r3) {
    this.tag = e3, this.key = n3, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t2, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r3, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ql(e3, t2, n3, r3) {
    return new Kl(e3, t2, n3, r3);
  }
  function Jl(e3) {
    return e3 = e3.prototype, !(!e3 || !e3.isReactComponent);
  }
  function Yl(e3) {
    if (typeof e3 == `function`)
      return Jl(e3) ? 1 : 0;
    if (e3 != null) {
      if (e3 = e3.$$typeof, e3 === re2)
        return 11;
      if (e3 === ae)
        return 14;
    }
    return 2;
  }
  function Xl(e3, t2) {
    var n3 = e3.alternate;
    return n3 === null ? (n3 = ql(e3.tag, t2, e3.key, e3.mode), n3.elementType = e3.elementType, n3.type = e3.type, n3.stateNode = e3.stateNode, n3.alternate = e3, e3.alternate = n3) : (n3.pendingProps = t2, n3.type = e3.type, n3.flags = 0, n3.subtreeFlags = 0, n3.deletions = null), n3.flags = e3.flags & 14680064, n3.childLanes = e3.childLanes, n3.lanes = e3.lanes, n3.child = e3.child, n3.memoizedProps = e3.memoizedProps, n3.memoizedState = e3.memoizedState, n3.updateQueue = e3.updateQueue, t2 = e3.dependencies, n3.dependencies = t2 === null ? null : { lanes: t2.lanes, firstContext: t2.firstContext }, n3.sibling = e3.sibling, n3.index = e3.index, n3.ref = e3.ref, n3;
  }
  function Zl(e3, t2, n3, r3, i2, o3) {
    var s3 = 2;
    if (r3 = e3, typeof e3 == `function`)
      Jl(e3) && (s3 = 1);
    else if (typeof e3 == `string`)
      s3 = 5;
    else
      a:
        switch (e3) {
          case E2:
            return Ql(n3.children, i2, o3, t2);
          case D2:
            s3 = 8, i2 |= 8;
            break;
          case ee2:
            return e3 = ql(12, n3, t2, i2 | 2), e3.elementType = ee2, e3.lanes = o3, e3;
          case ie:
            return e3 = ql(13, n3, t2, i2), e3.elementType = ie, e3.lanes = o3, e3;
          case O:
            return e3 = ql(19, n3, t2, i2), e3.elementType = O, e3.lanes = o3, e3;
          case oe:
            return $l(n3, i2, o3, t2);
          default:
            if (typeof e3 == `object` && e3)
              switch (e3.$$typeof) {
                case te2:
                  s3 = 10;
                  break a;
                case ne2:
                  s3 = 9;
                  break a;
                case re2:
                  s3 = 11;
                  break a;
                case ae:
                  s3 = 14;
                  break a;
                case k:
                  s3 = 16, r3 = null;
                  break a;
              }
            throw Error(a2(130, e3 == null ? e3 : typeof e3, ``));
        }
    return t2 = ql(s3, n3, t2, i2), t2.elementType = e3, t2.type = r3, t2.lanes = o3, t2;
  }
  function Ql(e3, t2, n3, r3) {
    return e3 = ql(7, e3, r3, t2), e3.lanes = n3, e3;
  }
  function $l(e3, t2, n3, r3) {
    return e3 = ql(22, e3, r3, t2), e3.elementType = oe, e3.lanes = n3, e3.stateNode = { isHidden: false }, e3;
  }
  function eu(e3, t2, n3) {
    return e3 = ql(6, e3, null, t2), e3.lanes = n3, e3;
  }
  function tu(e3, t2, n3) {
    return t2 = ql(4, e3.children === null ? [] : e3.children, e3.key, t2), t2.lanes = n3, t2.stateNode = { containerInfo: e3.containerInfo, pendingChildren: null, implementation: e3.implementation }, t2;
  }
  function nu(e3, t2, n3, r3, i2) {
    this.tag = t2, this.containerInfo = e3, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wt(0), this.expirationTimes = Wt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wt(0), this.identifierPrefix = r3, this.onRecoverableError = i2, this.mutableSourceEagerHydrationData = null;
  }
  function ru(e3, t2, n3, r3, i2, a3, o3, s3, c3) {
    return e3 = new nu(e3, t2, n3, s3, c3), t2 === 1 ? (t2 = 1, true === a3 && (t2 |= 8)) : t2 = 0, a3 = ql(3, null, null, t2), e3.current = a3, a3.stateNode = e3, a3.memoizedState = { element: r3, isDehydrated: n3, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ro(a3), e3;
  }
  function iu(e3, t2, n3) {
    var r3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: T2, key: r3 == null ? null : `` + r3, children: e3, containerInfo: t2, implementation: n3 };
  }
  function au(e3) {
    if (!e3)
      return $i;
    e3 = e3._reactInternals;
    a: {
      if (pt(e3) !== e3 || e3.tag !== 1)
        throw Error(a2(170));
      var t2 = e3;
      do {
        switch (t2.tag) {
          case 3:
            t2 = t2.stateNode.context;
            break a;
          case 1:
            if (ia(t2.type)) {
              t2 = t2.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        t2 = t2.return;
      } while (t2 !== null);
      throw Error(a2(171));
    }
    if (e3.tag === 1) {
      var n3 = e3.type;
      if (ia(n3))
        return sa(e3, n3, t2);
    }
    return t2;
  }
  function ou(e3, t2, n3, r3, i2, a3, o3, s3, c3) {
    return e3 = ru(n3, r3, true, e3, i2, a3, o3, s3, c3), e3.context = au(null), n3 = e3.current, r3 = ml(), i2 = hl(n3), a3 = ao(r3, i2), a3.callback = t2 ?? null, oo(n3, a3, i2), e3.current.lanes = i2, Gt(e3, i2, r3), _l(e3, r3), e3;
  }
  function su(e3, t2, n3, r3) {
    var i2 = t2.current, a3 = ml(), o3 = hl(i2);
    return n3 = au(n3), t2.context === null ? t2.context = n3 : t2.pendingContext = n3, t2 = ao(a3, o3), t2.payload = { element: e3 }, r3 = r3 === void 0 ? null : r3, r3 !== null && (t2.callback = r3), e3 = oo(i2, t2, o3), e3 !== null && (gl(e3, i2, o3, a3), so(e3, i2, o3)), o3;
  }
  function cu(e3) {
    if (e3 = e3.current, !e3.child)
      return null;
    switch (e3.child.tag) {
      case 5:
        return e3.child.stateNode;
      default:
        return e3.child.stateNode;
    }
  }
  function lu(e3, t2) {
    if (e3 = e3.memoizedState, e3 !== null && e3.dehydrated !== null) {
      var n3 = e3.retryLane;
      e3.retryLane = n3 !== 0 && n3 < t2 ? n3 : t2;
    }
  }
  function uu(e3, t2) {
    lu(e3, t2), (e3 = e3.alternate) && lu(e3, t2);
  }
  function du() {
    return null;
  }
  var fu = typeof reportError == `function` ? reportError : function(e3) {
    console.error(e3);
  };
  function pu(e3) {
    this._internalRoot = e3;
  }
  mu.prototype.render = pu.prototype.render = function(e3) {
    var t2 = this._internalRoot;
    if (t2 === null)
      throw Error(a2(409));
    su(e3, t2, null, null);
  }, mu.prototype.unmount = pu.prototype.unmount = function() {
    var e3 = this._internalRoot;
    if (e3 !== null) {
      this._internalRoot = null;
      var t2 = e3.containerInfo;
      Tl(function() {
        su(null, e3, null, null);
      }), t2[Hi] = null;
    }
  };
  function mu(e3) {
    this._internalRoot = e3;
  }
  mu.prototype.unstable_scheduleHydration = function(e3) {
    if (e3) {
      var t2 = Qt();
      e3 = { blockedOn: null, target: e3, priority: t2 };
      for (var n3 = 0; n3 < cn.length && t2 !== 0 && t2 < cn[n3].priority; n3++)
        ;
      cn.splice(n3, 0, e3), n3 === 0 && pn(e3);
    }
  };
  function hu(e3) {
    return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11);
  }
  function gu(e3) {
    return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11 && (e3.nodeType !== 8 || e3.nodeValue !== ` react-mount-point-unstable `));
  }
  function _u() {
  }
  function vu(e3, t2, n3, r3, i2) {
    if (i2) {
      if (typeof r3 == `function`) {
        var a3 = r3;
        r3 = function() {
          var e4 = cu(o3);
          a3.call(e4);
        };
      }
      var o3 = ou(t2, r3, e3, 0, null, false, false, ``, _u);
      return e3._reactRootContainer = o3, e3[Hi] = o3.current, gi(e3.nodeType === 8 ? e3.parentNode : e3), Tl(), o3;
    }
    for (; i2 = e3.lastChild; )
      e3.removeChild(i2);
    if (typeof r3 == `function`) {
      var s3 = r3;
      r3 = function() {
        var e4 = cu(c3);
        s3.call(e4);
      };
    }
    var c3 = ru(e3, 0, false, null, null, false, false, ``, _u);
    return e3._reactRootContainer = c3, e3[Hi] = c3.current, gi(e3.nodeType === 8 ? e3.parentNode : e3), Tl(function() {
      su(t2, c3, n3, r3);
    }), c3;
  }
  function yu(e3, t2, n3, r3, i2) {
    var a3 = n3._reactRootContainer;
    if (a3) {
      var o3 = a3;
      if (typeof i2 == `function`) {
        var s3 = i2;
        i2 = function() {
          var e4 = cu(o3);
          s3.call(e4);
        };
      }
      su(t2, o3, e3, i2);
    } else
      o3 = vu(n3, t2, e3, i2, r3);
    return cu(o3);
  }
  Yt = function(e3) {
    switch (e3.tag) {
      case 3:
        var t2 = e3.stateNode;
        if (t2.current.memoizedState.isDehydrated) {
          var n3 = Rt(t2.pendingLanes);
          n3 !== 0 && (qt(t2, n3 | 1), _l(t2, N()), !(J & 6) && (nl = N() + 500, ha()));
        }
        break;
      case 13:
        Tl(function() {
          var t3 = to(e3, 1);
          t3 !== null && gl(t3, e3, 1, ml());
        }), uu(e3, 1);
    }
  }, Xt = function(e3) {
    if (e3.tag === 13) {
      var t2 = to(e3, 134217728);
      t2 !== null && gl(t2, e3, 134217728, ml()), uu(e3, 134217728);
    }
  }, Zt = function(e3) {
    if (e3.tag === 13) {
      var t2 = hl(e3), n3 = to(e3, t2);
      n3 !== null && gl(n3, e3, t2, ml()), uu(e3, t2);
    }
  }, Qt = function() {
    return P;
  }, $t = function(e3, t2) {
    var n3 = P;
    try {
      return P = e3, t2();
    } finally {
      P = n3;
    }
  }, Ke = function(e3, t2, n3) {
    switch (t2) {
      case `input`:
        if (Ce(e3, n3), t2 = n3.name, n3.type === `radio` && t2 != null) {
          for (n3 = e3; n3.parentNode; )
            n3 = n3.parentNode;
          for (n3 = n3.querySelectorAll(`input[name=` + JSON.stringify(`` + t2) + `][type="radio"]`), t2 = 0; t2 < n3.length; t2++) {
            var r3 = n3[t2];
            if (r3 !== e3 && r3.form === e3.form) {
              var i2 = Yi(r3);
              if (!i2)
                throw Error(a2(90));
              ve(r3), Ce(r3, i2);
            }
          }
        }
        break;
      case `textarea`:
        Ae(e3, n3);
        break;
      case `select`:
        t2 = n3.value, t2 != null && De(e3, !!n3.multiple, t2, false);
    }
  }, Qe = wl, $e = Tl;
  var bu = { usingClientEntryPoint: false, Events: [qi, Ji, Yi, Xe, Ze, wl] }, xu = { findFiberByHostInstance: Ki, bundleType: 0, version: `18.2.0`, rendererPackageName: `react-dom` }, Su = { bundleType: xu.bundleType, version: xu.version, rendererPackageName: xu.rendererPackageName, rendererConfig: xu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: C2.ReactCurrentDispatcher, findHostInstanceByFiber: function(e3) {
    return e3 = _t(e3), e3 === null ? null : e3.stateNode;
  }, findFiberByHostInstance: xu.findFiberByHostInstance || du, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: `18.2.0-next-9e3b772b8-20220608` };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cu.isDisabled && Cu.supportsFiber)
      try {
        kt = Cu.inject(Su), At = Cu;
      } catch {
      }
  }
  e2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bu, e2.createPortal = function(e3, t2) {
    var n3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!hu(t2))
      throw Error(a2(200));
    return iu(e3, t2, null, n3);
  }, e2.createRoot = function(e3, t2) {
    if (!hu(e3))
      throw Error(a2(299));
    var n3 = false, r3 = ``, i2 = fu;
    return t2 != null && (true === t2.unstable_strictMode && (n3 = true), t2.identifierPrefix !== void 0 && (r3 = t2.identifierPrefix), t2.onRecoverableError !== void 0 && (i2 = t2.onRecoverableError)), t2 = ru(e3, 1, false, null, null, n3, false, r3, i2), e3[Hi] = t2.current, gi(e3.nodeType === 8 ? e3.parentNode : e3), new pu(t2);
  }, e2.findDOMNode = function(e3) {
    if (e3 == null)
      return null;
    if (e3.nodeType === 1)
      return e3;
    var t2 = e3._reactInternals;
    if (t2 === void 0)
      throw typeof e3.render == `function` ? Error(a2(188)) : (e3 = Object.keys(e3).join(`,`), Error(a2(268, e3)));
    return e3 = _t(t2), e3 = e3 === null ? null : e3.stateNode, e3;
  }, e2.flushSync = function(e3) {
    return Tl(e3);
  }, e2.hydrate = function(e3, t2, n3) {
    if (!gu(t2))
      throw Error(a2(200));
    return yu(null, e3, t2, true, n3);
  }, e2.hydrateRoot = function(e3, t2, n3) {
    if (!hu(e3))
      throw Error(a2(405));
    var r3 = n3 != null && n3.hydratedSources || null, i2 = false, o3 = ``, s3 = fu;
    if (n3 != null && (true === n3.unstable_strictMode && (i2 = true), n3.identifierPrefix !== void 0 && (o3 = n3.identifierPrefix), n3.onRecoverableError !== void 0 && (s3 = n3.onRecoverableError)), t2 = ou(t2, null, e3, 1, n3 ?? null, i2, false, o3, s3), e3[Hi] = t2.current, gi(e3), r3)
      for (e3 = 0; e3 < r3.length; e3++)
        n3 = r3[e3], i2 = n3._getVersion, i2 = i2(n3._source), t2.mutableSourceEagerHydrationData == null ? t2.mutableSourceEagerHydrationData = [n3, i2] : t2.mutableSourceEagerHydrationData.push(n3, i2);
    return new mu(t2);
  }, e2.render = function(e3, t2, n3) {
    if (!gu(t2))
      throw Error(a2(200));
    return yu(null, e3, t2, false, n3);
  }, e2.unmountComponentAtNode = function(e3) {
    if (!gu(e3))
      throw Error(a2(40));
    return e3._reactRootContainer ? (Tl(function() {
      yu(null, null, e3, false, function() {
        e3._reactRootContainer = null, e3[Hi] = null;
      });
    }), true) : false;
  }, e2.unstable_batchedUpdates = wl, e2.unstable_renderSubtreeIntoContainer = function(e3, t2, n3, r3) {
    if (!gu(n3))
      throw Error(a2(200));
    if (e3 == null || e3._reactInternals === void 0)
      throw Error(a2(38));
    return yu(e3, t2, n3, false, r3);
  }, e2.version = `18.2.0-next-9e3b772b8-20220608`;
}), o = e((e2, t2) => {
  function n2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
      } catch (e3) {
        console.error(e3);
      }
  }
  n2(), t2.exports = a();
}), s = e((e2) => {
  var t2 = o();
  e2.createRoot = t2.createRoot, e2.hydrateRoot = t2.hydrateRoot;
}), c = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.WidgetApiDirection = void 0, e2.invertedDirection = n2;
  var t2 = function(e3) {
    return e3.ToWidget = `toWidget`, e3.FromWidget = `fromWidget`, e3;
  }({});
  e2.WidgetApiDirection = t2;
  function n2(e3) {
    if (e3 === t2.ToWidget)
      return t2.FromWidget;
    if (e3 === t2.FromWidget)
      return t2.ToWidget;
    throw Error(`Invalid direction`);
  }
}), l = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.UnstableApiVersion = e2.MatrixApiVersion = e2.CurrentApiVersions = void 0;
  var t2 = function(e3) {
    return e3.Prerelease1 = `0.0.1`, e3.Prerelease2 = `0.0.2`, e3;
  }({});
  e2.MatrixApiVersion = t2;
  var n2 = function(e3) {
    return e3.MSC2762 = `org.matrix.msc2762`, e3.MSC2762_UPDATE_STATE = `org.matrix.msc2762_update_state`, e3.MSC2871 = `org.matrix.msc2871`, e3.MSC2873 = `org.matrix.msc2873`, e3.MSC2931 = `org.matrix.msc2931`, e3.MSC2974 = `org.matrix.msc2974`, e3.MSC2876 = `org.matrix.msc2876`, e3.MSC3819 = `org.matrix.msc3819`, e3.MSC3846 = `town.robin.msc3846`, e3.MSC3869 = `org.matrix.msc3869`, e3.MSC3973 = `org.matrix.msc3973`, e3.MSC4039 = `org.matrix.msc4039`, e3;
  }({});
  e2.UnstableApiVersion = n2, e2.CurrentApiVersions = [t2.Prerelease1, t2.Prerelease2, n2.MSC2762, n2.MSC2762_UPDATE_STATE, n2.MSC2871, n2.MSC2873, n2.MSC2931, n2.MSC2974, n2.MSC2876, n2.MSC3819, n2.MSC3846, n2.MSC3869, n2.MSC3973, n2.MSC4039];
}), u = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.PostmessageTransport = void 0;
  var t2 = n(), r2 = re(), i2 = [`message`];
  function a2(e3) {
    "@babel/helpers - typeof";
    return a2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e4) {
      return typeof e4;
    } : function(e4) {
      return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol.prototype ? `symbol` : typeof e4;
    }, a2(e3);
  }
  function o2(e3, t3) {
    if (e3 == null)
      return {};
    var n2 = s2(e3, t3), r3, i3;
    if (Object.getOwnPropertySymbols) {
      var a3 = Object.getOwnPropertySymbols(e3);
      for (i3 = 0; i3 < a3.length; i3++)
        r3 = a3[i3], !(t3.indexOf(r3) >= 0) && Object.prototype.propertyIsEnumerable.call(e3, r3) && (n2[r3] = e3[r3]);
    }
    return n2;
  }
  function s2(e3, t3) {
    if (e3 == null)
      return {};
    var n2 = {}, r3 = Object.keys(e3), i3, a3;
    for (a3 = 0; a3 < r3.length; a3++)
      i3 = r3[a3], !(t3.indexOf(i3) >= 0) && (n2[i3] = e3[i3]);
    return n2;
  }
  function c2(e3, t3) {
    var n2 = Object.keys(e3);
    if (Object.getOwnPropertySymbols) {
      var r3 = Object.getOwnPropertySymbols(e3);
      t3 && (r3 = r3.filter(function(t4) {
        return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
      })), n2.push.apply(n2, r3);
    }
    return n2;
  }
  function l2(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n2 = arguments[t3] == null ? {} : arguments[t3];
      t3 % 2 ? c2(Object(n2), true).forEach(function(t4) {
        b2(e3, t4, n2[t4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : c2(Object(n2)).forEach(function(t4) {
        Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
      });
    }
    return e3;
  }
  function u2(e3, t3) {
    if (!(e3 instanceof t3))
      throw TypeError(`Cannot call a class as a function`);
  }
  function d2(e3, t3) {
    for (var n2 = 0; n2 < t3.length; n2++) {
      var r3 = t3[n2];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, x2(r3.key), r3);
    }
  }
  function f2(e3, t3, n2) {
    return t3 && d2(e3.prototype, t3), n2 && d2(e3, n2), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function p2(e3, t3) {
    if (typeof t3 != `function` && t3 !== null)
      throw TypeError(`Super expression must either be null or a function`);
    e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, `prototype`, { writable: false }), t3 && m2(e3, t3);
  }
  function m2(e3, t3) {
    return m2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, m2(e3, t3);
  }
  function h2(e3) {
    var t3 = v2();
    return function() {
      var n2 = y2(e3), r3;
      if (t3) {
        var i3 = y2(this).constructor;
        r3 = Reflect.construct(n2, arguments, i3);
      } else
        r3 = n2.apply(this, arguments);
      return g2(this, r3);
    };
  }
  function g2(e3, t3) {
    if (t3 && (a2(t3) === `object` || typeof t3 == `function`))
      return t3;
    if (t3 !== void 0)
      throw TypeError(`Derived constructors may only return object or undefined`);
    return _2(e3);
  }
  function _2(e3) {
    if (e3 === void 0)
      throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
    return e3;
  }
  function v2() {
    if (typeof Reflect > `u` || !Reflect.construct || Reflect.construct.sham)
      return false;
    if (typeof Proxy == `function`)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function y2(e3) {
    return y2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
      return e4.__proto__ || Object.getPrototypeOf(e4);
    }, y2(e3);
  }
  function b2(e3, t3, n2) {
    return t3 = x2(t3), t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
  }
  function x2(e3) {
    var t3 = S2(e3, `string`);
    return a2(t3) === `symbol` ? t3 : String(t3);
  }
  function S2(e3, t3) {
    if (a2(e3) !== `object` || e3 === null)
      return e3;
    var n2 = e3[Symbol.toPrimitive];
    if (n2 !== void 0) {
      var r3 = n2.call(e3, t3 || `default`);
      if (a2(r3) !== `object`)
        return r3;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return (t3 === `string` ? String : Number)(e3);
  }
  e2.PostmessageTransport = function(e3) {
    p2(n2, e3);
    var t3 = h2(n2);
    function n2(e4, r3, i3, a3) {
      var o3;
      return u2(this, n2), o3 = t3.call(this), o3.sendDirection = e4, o3.initialWidgetId = r3, o3.transportWindow = i3, o3.inboundWindow = a3, b2(_2(o3), `strictOriginCheck`, false), b2(_2(o3), `targetOrigin`, `*`), b2(_2(o3), `timeoutSeconds`, 10), b2(_2(o3), `_ready`, false), b2(_2(o3), `_widgetId`, null), b2(_2(o3), `outboundRequests`, /* @__PURE__ */ new Map()), b2(_2(o3), `stopController`, new AbortController()), o3._widgetId = r3, o3;
    }
    return f2(n2, [{ key: `ready`, get: function() {
      return this._ready;
    } }, { key: `widgetId`, get: function() {
      return this._widgetId || null;
    } }, { key: `nextRequestId`, get: function() {
      for (var e4 = `widgetapi-${Date.now()}`, t4 = 0, n3 = e4; this.outboundRequests.has(n3); )
        n3 = `${e4}-${t4++}`;
      return this.outboundRequests.set(n3, null), n3;
    } }, { key: `sendInternal`, value: function(e4) {
      console.log(`[PostmessageTransport] Sending object to ${this.targetOrigin}: `, e4), this.transportWindow.postMessage(e4, this.targetOrigin);
    } }, { key: `reply`, value: function(e4, t4) {
      return this.sendInternal(l2(l2({}, e4), {}, { response: t4 }));
    } }, { key: `send`, value: function(e4, t4) {
      return this.sendComplete(e4, t4).then(function(e5) {
        return e5.response;
      });
    } }, { key: `sendComplete`, value: function(e4, t4) {
      var n3 = this;
      if (!this.ready || !this.widgetId)
        return Promise.reject(Error(`Not ready or unknown widget ID`));
      var i3 = { api: this.sendDirection, widgetId: this.widgetId, requestId: this.nextRequestId, action: e4, data: t4 };
      return e4 === r2.WidgetApiToWidgetAction.UpdateVisibility && (i3.visible = t4.visible), new Promise(function(e5, t5) {
        var r3 = function(t6) {
          c3(), e5(t6);
        }, a3 = function(e6) {
          c3(), t5(e6);
        }, o3 = setTimeout(function() {
          return a3(Error(`Request timed out`));
        }, (n3.timeoutSeconds || 1) * 1e3), s3 = function() {
          return a3(Error(`Transport stopped`));
        };
        n3.stopController.signal.addEventListener(`abort`, s3);
        var c3 = function() {
          n3.outboundRequests.delete(i3.requestId), clearTimeout(o3), n3.stopController.signal.removeEventListener(`abort`, s3);
        };
        n3.outboundRequests.set(i3.requestId, { request: i3, resolve: r3, reject: a3 }), n3.sendInternal(i3);
      });
    } }, { key: `start`, value: function() {
      var e4 = this;
      this.inboundWindow.addEventListener(`message`, function(t4) {
        e4.handleMessage(t4);
      }), this._ready = true;
    } }, { key: `stop`, value: function() {
      this._ready = false, this.stopController.abort();
    } }, { key: `handleMessage`, value: function(e4) {
      if (!this.stopController.signal.aborted && e4.data && !(this.strictOriginCheck && e4.origin !== window.origin)) {
        var t4 = e4.data;
        if (!(!t4.action || !t4.requestId || !t4.widgetId))
          if (t4.response) {
            if (t4.api !== this.sendDirection)
              return;
            this.handleResponse(t4);
          } else {
            var n3 = t4;
            if (n3.api !== (0, r2.invertedDirection)(this.sendDirection))
              return;
            this.handleRequest(n3);
          }
      }
    } }, { key: `handleRequest`, value: function(e4) {
      if (this.widgetId) {
        if (this.widgetId !== e4.widgetId)
          return;
      } else
        this._widgetId = e4.widgetId;
      this.emit(`message`, new CustomEvent(`message`, { detail: e4 }));
    } }, { key: `handleResponse`, value: function(e4) {
      if (e4.widgetId === this.widgetId) {
        var t4 = this.outboundRequests.get(e4.requestId);
        if (t4)
          if ((0, r2.isErrorResponse)(e4.response)) {
            var n3 = e4.response.error, a3 = n3.message, s3 = o2(n3, i2);
            t4.reject(new r2.WidgetApiResponseError(a3, s3));
          } else
            t4.resolve(e4);
      }
    } }]), n2;
  }(t2.EventEmitter);
}), d = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.WidgetApiToWidgetAction = e2.WidgetApiFromWidgetAction = void 0, e2.WidgetApiToWidgetAction = function(e3) {
    return e3.SupportedApiVersions = `supported_api_versions`, e3.Capabilities = `capabilities`, e3.NotifyCapabilities = `notify_capabilities`, e3.ThemeChange = `theme_change`, e3.LanguageChange = `language_change`, e3.TakeScreenshot = `screenshot`, e3.UpdateVisibility = `visibility`, e3.OpenIDCredentials = `openid_credentials`, e3.WidgetConfig = `widget_config`, e3.CloseModalWidget = `close_modal`, e3.ButtonClicked = `button_clicked`, e3.SendEvent = `send_event`, e3.SendToDevice = `send_to_device`, e3.UpdateState = `update_state`, e3.UpdateTurnServers = `update_turn_servers`, e3;
  }({}), e2.WidgetApiFromWidgetAction = function(e3) {
    return e3.SupportedApiVersions = `supported_api_versions`, e3.ContentLoaded = `content_loaded`, e3.SendSticker = `m.sticker`, e3.UpdateAlwaysOnScreen = `set_always_on_screen`, e3.GetOpenIDCredentials = `get_openid`, e3.CloseModalWidget = `close_modal`, e3.OpenModalWidget = `open_modal`, e3.SetModalButtonEnabled = `set_button_enabled`, e3.SendEvent = `send_event`, e3.SendToDevice = `send_to_device`, e3.WatchTurnServers = `watch_turn_servers`, e3.UnwatchTurnServers = `unwatch_turn_servers`, e3.BeeperReadRoomAccountData = `com.beeper.read_room_account_data`, e3.MSC2876ReadEvents = `org.matrix.msc2876.read_events`, e3.MSC2931Navigate = `org.matrix.msc2931.navigate`, e3.MSC2974RenegotiateCapabilities = `org.matrix.msc2974.request_capabilities`, e3.MSC3869ReadRelations = `org.matrix.msc3869.read_relations`, e3.MSC3973UserDirectorySearch = `org.matrix.msc3973.user_directory_search`, e3.MSC4039GetMediaConfigAction = `org.matrix.msc4039.get_media_config`, e3.MSC4039UploadFileAction = `org.matrix.msc4039.upload_file`, e3.MSC4039DownloadFileAction = `org.matrix.msc4039.download_file`, e3.MSC4157UpdateDelayedEvent = `org.matrix.msc4157.update_delayed_event`, e3;
  }({});
}), f = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.OpenIDRequestState = void 0, e2.OpenIDRequestState = function(e3) {
    return e3.Allowed = `allowed`, e3.Blocked = `blocked`, e3.PendingUserConfirmation = `request`, e3;
  }({});
}), p = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.MatrixWidgetType = void 0, e2.MatrixWidgetType = function(e3) {
    return e3.Custom = `m.custom`, e3.JitsiMeet = `m.jitsi`, e3.Stickerpicker = `m.stickerpicker`, e3;
  }({});
}), m = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.BuiltInModalButtonID = void 0, e2.BuiltInModalButtonID = function(e3) {
    return e3.Close = `m.close`, e3;
  }({});
}), h = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.WidgetEventCapability = e2.EventKind = e2.EventDirection = void 0;
  function t2(e3) {
    "@babel/helpers - typeof";
    return t2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e4) {
      return typeof e4;
    } : function(e4) {
      return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol.prototype ? `symbol` : typeof e4;
    }, t2(e3);
  }
  function n2(e3, t3) {
    var n3 = typeof Symbol < `u` && e3[Symbol.iterator] || e3[`@@iterator`];
    if (!n3) {
      if (Array.isArray(e3) || (n3 = r2(e3)) || t3 && e3 && typeof e3.length == `number`) {
        n3 && (e3 = n3);
        var i3 = 0, a3 = function() {
        };
        return { s: a3, n: function() {
          return i3 >= e3.length ? { done: true } : { done: false, value: e3[i3++] };
        }, e: function(e4) {
          throw e4;
        }, f: a3 };
      }
      throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var o3 = true, s3 = false, c3;
    return { s: function() {
      n3 = n3.call(e3);
    }, n: function() {
      var e4 = n3.next();
      return o3 = e4.done, e4;
    }, e: function(e4) {
      s3 = true, c3 = e4;
    }, f: function() {
      try {
        !o3 && n3.return != null && n3.return();
      } finally {
        if (s3)
          throw c3;
      }
    } };
  }
  function r2(e3, t3) {
    if (e3) {
      if (typeof e3 == `string`)
        return i2(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      if (n3 === `Object` && e3.constructor && (n3 = e3.constructor.name), n3 === `Map` || n3 === `Set`)
        return Array.from(e3);
      if (n3 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return i2(e3, t3);
    }
  }
  function i2(e3, t3) {
    (t3 == null || t3 > e3.length) && (t3 = e3.length);
    for (var n3 = 0, r3 = Array(t3); n3 < t3; n3++)
      r3[n3] = e3[n3];
    return r3;
  }
  function a2(e3, t3) {
    if (!(e3 instanceof t3))
      throw TypeError(`Cannot call a class as a function`);
  }
  function o2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, c2(r3.key), r3);
    }
  }
  function s2(e3, t3, n3) {
    return t3 && o2(e3.prototype, t3), n3 && o2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function c2(e3) {
    var n3 = l2(e3, `string`);
    return t2(n3) === `symbol` ? n3 : String(n3);
  }
  function l2(e3, n3) {
    if (t2(e3) !== `object` || e3 === null)
      return e3;
    var r3 = e3[Symbol.toPrimitive];
    if (r3 !== void 0) {
      var i3 = r3.call(e3, n3 || `default`);
      if (t2(i3) !== `object`)
        return i3;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return (n3 === `string` ? String : Number)(e3);
  }
  var u2 = function(e3) {
    return e3.Event = `event`, e3.State = `state_event`, e3.ToDevice = `to_device`, e3.RoomAccount = `room_account`, e3;
  }({});
  e2.EventKind = u2;
  var d2 = function(e3) {
    return e3.Send = `send`, e3.Receive = `receive`, e3;
  }({});
  e2.EventDirection = d2, e2.WidgetEventCapability = function() {
    function e3(t3, n3, r3, i3, o3) {
      a2(this, e3), this.direction = t3, this.eventType = n3, this.kind = r3, this.keyStr = i3, this.raw = o3;
    }
    return s2(e3, [{ key: `matchesAsStateEvent`, value: function(e4, t3, n3) {
      return this.kind !== u2.State || this.direction !== e4 || this.eventType !== t3 ? false : this.keyStr === null || this.keyStr === n3;
    } }, { key: `matchesAsToDeviceEvent`, value: function(e4, t3) {
      return !(this.kind !== u2.ToDevice || this.direction !== e4 || this.eventType !== t3);
    } }, { key: `matchesAsRoomEvent`, value: function(e4, t3) {
      var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (this.kind !== u2.Event || this.direction !== e4 || this.eventType !== t3)
        return false;
      if (this.eventType === `m.room.message`) {
        if (this.keyStr === null || this.keyStr === n3)
          return true;
      } else
        return true;
      return false;
    } }, { key: `matchesAsRoomAccountData`, value: function(e4, t3) {
      return !(this.kind !== u2.RoomAccount || this.direction !== e4 || this.eventType !== t3);
    } }], [{ key: `forStateEvent`, value: function(t3, n3, r3) {
      n3 = n3.replace(/#/g, `\\#`), r3 = r3 == null ? `` : `#${r3}`;
      var i3 = `org.matrix.msc2762.${t3}.state_event:${n3}${r3}`;
      return e3.findEventCapabilities([i3])[0];
    } }, { key: `forToDeviceEvent`, value: function(t3, n3) {
      var r3 = `org.matrix.msc3819.${t3}.to_device:${n3}`;
      return e3.findEventCapabilities([r3])[0];
    } }, { key: `forRoomEvent`, value: function(t3, n3) {
      var r3 = `org.matrix.msc2762.${t3}.event:${n3}`;
      return e3.findEventCapabilities([r3])[0];
    } }, { key: `forRoomMessageEvent`, value: function(t3, n3) {
      n3 ?? (n3 = ``);
      var r3 = `org.matrix.msc2762.${t3}.event:m.room.message#${n3}`;
      return e3.findEventCapabilities([r3])[0];
    } }, { key: `forRoomAccountData`, value: function(t3, n3) {
      var r3 = `com.beeper.capabilities.${t3}.room_account_data:${n3}`;
      return e3.findEventCapabilities([r3])[0];
    } }, { key: `findEventCapabilities`, value: function(t3) {
      var r3 = [], i3 = n2(t3), a3;
      try {
        for (i3.s(); !(a3 = i3.n()).done; ) {
          var o3 = a3.value, s3 = null, c3 = void 0, l3 = null;
          if (o3.startsWith(`org.matrix.msc2762.send.event:`) ? (s3 = d2.Send, l3 = u2.Event, c3 = o3.substring(30)) : o3.startsWith(`org.matrix.msc2762.send.state_event:`) ? (s3 = d2.Send, l3 = u2.State, c3 = o3.substring(36)) : o3.startsWith(`org.matrix.msc3819.send.to_device:`) ? (s3 = d2.Send, l3 = u2.ToDevice, c3 = o3.substring(34)) : o3.startsWith(`org.matrix.msc2762.receive.event:`) ? (s3 = d2.Receive, l3 = u2.Event, c3 = o3.substring(33)) : o3.startsWith(`org.matrix.msc2762.receive.state_event:`) ? (s3 = d2.Receive, l3 = u2.State, c3 = o3.substring(39)) : o3.startsWith(`org.matrix.msc3819.receive.to_device:`) ? (s3 = d2.Receive, l3 = u2.ToDevice, c3 = o3.substring(37)) : o3.startsWith(`com.beeper.capabilities.receive.room_account_data:`) && (s3 = d2.Receive, l3 = u2.RoomAccount, c3 = o3.substring(50)), !(s3 === null || l3 === null || c3 === void 0)) {
            var f2 = c3.startsWith(`m.room.message#`) || l3 === u2.State, p2 = null;
            if (c3.includes(`#`) && f2) {
              var m2 = c3.split(`#`), h2 = m2.findIndex(function(e4) {
                return !e4.endsWith(`\\`);
              });
              c3 = m2.slice(0, h2 + 1).map(function(e4) {
                return e4.endsWith(`\\`) ? e4.substring(0, e4.length - 1) : e4;
              }).join(`#`), p2 = m2.slice(h2 + 1).join(`#`);
            }
            r3.push(new e3(s3, c3, l3, p2, o3));
          }
        }
      } catch (e4) {
        i3.e(e4);
      } finally {
        i3.f();
      }
      return r3;
    } }]), e3;
  }();
}), g = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Symbols = void 0, e2.Symbols = function(e3) {
    return e3.AnyRoom = `*`, e3;
  }({});
}), _ = e((e2) => {
  function t2(e3) {
    "@babel/helpers - typeof";
    return t2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e4) {
      return typeof e4;
    } : function(e4) {
      return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol.prototype ? `symbol` : typeof e4;
    }, t2(e3);
  }
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.WidgetApiResponseError = e2.WidgetApi = void 0;
  var r2 = n(), i2 = c(), a2 = l(), o2 = u(), s2 = d(), _2 = f(), v2 = p(), y2 = m(), b2 = h(), x2 = g();
  function S2() {
    S2 = function() {
      return e3;
    };
    var e3 = {}, n2 = Object.prototype, r3 = n2.hasOwnProperty, i3 = Object.defineProperty || function(e4, t3, n3) {
      e4[t3] = n3.value;
    }, a3 = typeof Symbol == `function` ? Symbol : {}, o3 = a3.iterator || `@@iterator`, s3 = a3.asyncIterator || `@@asyncIterator`, c2 = a3.toStringTag || `@@toStringTag`;
    function l2(e4, t3, n3) {
      return Object.defineProperty(e4, t3, { value: n3, enumerable: true, configurable: true, writable: true }), e4[t3];
    }
    try {
      l2({}, ``);
    } catch {
      l2 = function(e4, t3, n3) {
        return e4[t3] = n3;
      };
    }
    function u2(e4, t3, n3, r4) {
      var a4 = t3 && t3.prototype instanceof p2 ? t3 : p2, o4 = Object.create(a4.prototype);
      return i3(o4, `_invoke`, { value: C3(e4, n3, new D3(r4 || [])) }), o4;
    }
    function d2(e4, t3, n3) {
      try {
        return { type: `normal`, arg: e4.call(t3, n3) };
      } catch (e5) {
        return { type: `throw`, arg: e5 };
      }
    }
    e3.wrap = u2;
    var f2 = {};
    function p2() {
    }
    function m2() {
    }
    function h2() {
    }
    var g2 = {};
    l2(g2, o3, function() {
      return this;
    });
    var _3 = Object.getPrototypeOf, v3 = _3 && _3(_3(ee3([])));
    v3 && v3 !== n2 && r3.call(v3, o3) && (g2 = v3);
    var y3 = h2.prototype = p2.prototype = Object.create(g2);
    function b3(e4) {
      [`next`, `throw`, `return`].forEach(function(t3) {
        l2(e4, t3, function(e5) {
          return this._invoke(t3, e5);
        });
      });
    }
    function x3(e4, n3) {
      function a4(i4, o5, s4, c3) {
        var l3 = d2(e4[i4], e4, o5);
        if (l3.type !== `throw`) {
          var u3 = l3.arg, f3 = u3.value;
          return f3 && t2(f3) == `object` && r3.call(f3, `__await`) ? n3.resolve(f3.__await).then(function(e5) {
            a4(`next`, e5, s4, c3);
          }, function(e5) {
            a4(`throw`, e5, s4, c3);
          }) : n3.resolve(f3).then(function(e5) {
            u3.value = e5, s4(u3);
          }, function(e5) {
            return a4(`throw`, e5, s4, c3);
          });
        }
        c3(l3.arg);
      }
      var o4;
      i3(this, `_invoke`, { value: function(e5, t3) {
        function r4() {
          return new n3(function(n4, r5) {
            a4(e5, t3, n4, r5);
          });
        }
        return o4 = o4 ? o4.then(r4, r4) : r4();
      } });
    }
    function C3(e4, t3, n3) {
      var r4 = `suspendedStart`;
      return function(i4, a4) {
        if (r4 === `executing`)
          throw Error(`Generator is already running`);
        if (r4 === `completed`) {
          if (i4 === `throw`)
            throw a4;
          return te3();
        }
        for (n3.method = i4, n3.arg = a4; ; ) {
          var o4 = n3.delegate;
          if (o4) {
            var s4 = w3(o4, n3);
            if (s4) {
              if (s4 === f2)
                continue;
              return s4;
            }
          }
          if (n3.method === `next`)
            n3.sent = n3._sent = n3.arg;
          else if (n3.method === `throw`) {
            if (r4 === `suspendedStart`)
              throw r4 = `completed`, n3.arg;
            n3.dispatchException(n3.arg);
          } else
            n3.method === `return` && n3.abrupt(`return`, n3.arg);
          r4 = `executing`;
          var c3 = d2(e4, t3, n3);
          if (c3.type === `normal`) {
            if (r4 = n3.done ? `completed` : `suspendedYield`, c3.arg === f2)
              continue;
            return { value: c3.arg, done: n3.done };
          }
          c3.type === `throw` && (r4 = `completed`, n3.method = `throw`, n3.arg = c3.arg);
        }
      };
    }
    function w3(e4, t3) {
      var n3 = t3.method, r4 = e4.iterator[n3];
      if (r4 === void 0)
        return t3.delegate = null, n3 === `throw` && e4.iterator.return && (t3.method = `return`, t3.arg = void 0, w3(e4, t3), t3.method === `throw`) || n3 !== `return` && (t3.method = `throw`, t3.arg = TypeError(`The iterator does not provide a '` + n3 + `' method`)), f2;
      var i4 = d2(r4, e4.iterator, t3.arg);
      if (i4.type === `throw`)
        return t3.method = `throw`, t3.arg = i4.arg, t3.delegate = null, f2;
      var a4 = i4.arg;
      return a4 ? a4.done ? (t3[e4.resultName] = a4.value, t3.next = e4.nextLoc, t3.method !== `return` && (t3.method = `next`, t3.arg = void 0), t3.delegate = null, f2) : a4 : (t3.method = `throw`, t3.arg = TypeError(`iterator result is not an object`), t3.delegate = null, f2);
    }
    function T3(e4) {
      var t3 = { tryLoc: e4[0] };
      1 in e4 && (t3.catchLoc = e4[1]), 2 in e4 && (t3.finallyLoc = e4[2], t3.afterLoc = e4[3]), this.tryEntries.push(t3);
    }
    function E3(e4) {
      var t3 = e4.completion || {};
      t3.type = `normal`, delete t3.arg, e4.completion = t3;
    }
    function D3(e4) {
      this.tryEntries = [{ tryLoc: `root` }], e4.forEach(T3, this), this.reset(true);
    }
    function ee3(e4) {
      if (e4) {
        var t3 = e4[o3];
        if (t3)
          return t3.call(e4);
        if (typeof e4.next == `function`)
          return e4;
        if (!isNaN(e4.length)) {
          var n3 = -1, i4 = function t4() {
            for (; ++n3 < e4.length; )
              if (r3.call(e4, n3))
                return t4.value = e4[n3], t4.done = false, t4;
            return t4.value = void 0, t4.done = true, t4;
          };
          return i4.next = i4;
        }
      }
      return { next: te3 };
    }
    function te3() {
      return { value: void 0, done: true };
    }
    return m2.prototype = h2, i3(y3, `constructor`, { value: h2, configurable: true }), i3(h2, `constructor`, { value: m2, configurable: true }), m2.displayName = l2(h2, c2, `GeneratorFunction`), e3.isGeneratorFunction = function(e4) {
      var t3 = typeof e4 == `function` && e4.constructor;
      return !!t3 && (t3 === m2 || (t3.displayName || t3.name) === `GeneratorFunction`);
    }, e3.mark = function(e4) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e4, h2) : (e4.__proto__ = h2, l2(e4, c2, `GeneratorFunction`)), e4.prototype = Object.create(y3), e4;
    }, e3.awrap = function(e4) {
      return { __await: e4 };
    }, b3(x3.prototype), l2(x3.prototype, s3, function() {
      return this;
    }), e3.AsyncIterator = x3, e3.async = function(t3, n3, r4, i4, a4) {
      a4 === void 0 && (a4 = Promise);
      var o4 = new x3(u2(t3, n3, r4, i4), a4);
      return e3.isGeneratorFunction(n3) ? o4 : o4.next().then(function(e4) {
        return e4.done ? e4.value : o4.next();
      });
    }, b3(y3), l2(y3, c2, `Generator`), l2(y3, o3, function() {
      return this;
    }), l2(y3, `toString`, function() {
      return `[object Generator]`;
    }), e3.keys = function(e4) {
      var t3 = Object(e4), n3 = [];
      for (var r4 in t3)
        n3.push(r4);
      return n3.reverse(), function e5() {
        for (; n3.length; ) {
          var r5 = n3.pop();
          if (r5 in t3)
            return e5.value = r5, e5.done = false, e5;
        }
        return e5.done = true, e5;
      };
    }, e3.values = ee3, D3.prototype = { constructor: D3, reset: function(e4) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = `next`, this.arg = void 0, this.tryEntries.forEach(E3), !e4)
        for (var t3 in this)
          t3.charAt(0) === `t` && r3.call(this, t3) && !isNaN(+t3.slice(1)) && (this[t3] = void 0);
    }, stop: function() {
      this.done = true;
      var e4 = this.tryEntries[0].completion;
      if (e4.type === `throw`)
        throw e4.arg;
      return this.rval;
    }, dispatchException: function(e4) {
      if (this.done)
        throw e4;
      var t3 = this;
      function n3(n4, r4) {
        return o4.type = `throw`, o4.arg = e4, t3.next = n4, r4 && (t3.method = `next`, t3.arg = void 0), !!r4;
      }
      for (var i4 = this.tryEntries.length - 1; i4 >= 0; --i4) {
        var a4 = this.tryEntries[i4], o4 = a4.completion;
        if (a4.tryLoc === `root`)
          return n3(`end`);
        if (a4.tryLoc <= this.prev) {
          var s4 = r3.call(a4, `catchLoc`), c3 = r3.call(a4, `finallyLoc`);
          if (s4 && c3) {
            if (this.prev < a4.catchLoc)
              return n3(a4.catchLoc, true);
            if (this.prev < a4.finallyLoc)
              return n3(a4.finallyLoc);
          } else if (s4) {
            if (this.prev < a4.catchLoc)
              return n3(a4.catchLoc, true);
          } else {
            if (!c3)
              throw Error(`try statement without catch or finally`);
            if (this.prev < a4.finallyLoc)
              return n3(a4.finallyLoc);
          }
        }
      }
    }, abrupt: function(e4, t3) {
      for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
        var i4 = this.tryEntries[n3];
        if (i4.tryLoc <= this.prev && r3.call(i4, `finallyLoc`) && this.prev < i4.finallyLoc) {
          var a4 = i4;
          break;
        }
      }
      a4 && (e4 === `break` || e4 === `continue`) && a4.tryLoc <= t3 && t3 <= a4.finallyLoc && (a4 = null);
      var o4 = a4 ? a4.completion : {};
      return o4.type = e4, o4.arg = t3, a4 ? (this.method = `next`, this.next = a4.finallyLoc, f2) : this.complete(o4);
    }, complete: function(e4, t3) {
      if (e4.type === `throw`)
        throw e4.arg;
      return e4.type === `break` || e4.type === `continue` ? this.next = e4.arg : e4.type === `return` ? (this.rval = this.arg = e4.arg, this.method = `return`, this.next = `end`) : e4.type === `normal` && t3 && (this.next = t3), f2;
    }, finish: function(e4) {
      for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
        var n3 = this.tryEntries[t3];
        if (n3.finallyLoc === e4)
          return this.complete(n3.completion, n3.afterLoc), E3(n3), f2;
      }
    }, catch: function(e4) {
      for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
        var n3 = this.tryEntries[t3];
        if (n3.tryLoc === e4) {
          var r4 = n3.completion;
          if (r4.type === `throw`) {
            var i4 = r4.arg;
            E3(n3);
          }
          return i4;
        }
      }
      throw Error(`illegal catch attempt`);
    }, delegateYield: function(e4, t3, n3) {
      return this.delegate = { iterator: ee3(e4), resultName: t3, nextLoc: n3 }, this.method === `next` && (this.arg = void 0), f2;
    } }, e3;
  }
  function C2(e3, t3, n2, r3, i3, a3, o3) {
    try {
      var s3 = e3[a3](o3), c2 = s3.value;
    } catch (e4) {
      n2(e4);
      return;
    }
    s3.done ? t3(c2) : Promise.resolve(c2).then(r3, i3);
  }
  function w2(e3) {
    return function() {
      var t3 = this, n2 = arguments;
      return new Promise(function(r3, i3) {
        var a3 = e3.apply(t3, n2);
        function o3(e4) {
          C2(a3, r3, i3, o3, s3, `next`, e4);
        }
        function s3(e4) {
          C2(a3, r3, i3, o3, s3, `throw`, e4);
        }
        o3(void 0);
      });
    };
  }
  function T2(e3, t3) {
    var n2 = Object.keys(e3);
    if (Object.getOwnPropertySymbols) {
      var r3 = Object.getOwnPropertySymbols(e3);
      t3 && (r3 = r3.filter(function(t4) {
        return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
      })), n2.push.apply(n2, r3);
    }
    return n2;
  }
  function E2(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n2 = arguments[t3] == null ? {} : arguments[t3];
      t3 % 2 ? T2(Object(n2), true).forEach(function(t4) {
        D2(e3, t4, n2[t4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : T2(Object(n2)).forEach(function(t4) {
        Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
      });
    }
    return e3;
  }
  function D2(e3, t3, n2) {
    return t3 = ne2(t3), t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
  }
  function ee2(e3, t3) {
    for (var n2 = 0; n2 < t3.length; n2++) {
      var r3 = t3[n2];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, ne2(r3.key), r3);
    }
  }
  function te2(e3, t3, n2) {
    return t3 && ee2(e3.prototype, t3), n2 && ee2(e3, n2), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function ne2(e3) {
    var n2 = re2(e3, `string`);
    return t2(n2) === `symbol` ? n2 : String(n2);
  }
  function re2(e3, n2) {
    if (t2(e3) !== `object` || e3 === null)
      return e3;
    var r3 = e3[Symbol.toPrimitive];
    if (r3 !== void 0) {
      var i3 = r3.call(e3, n2 || `default`);
      if (t2(i3) !== `object`)
        return i3;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return (n2 === `string` ? String : Number)(e3);
  }
  function ie(e3, t3) {
    if (!(e3 instanceof t3))
      throw TypeError(`Cannot call a class as a function`);
  }
  function O(e3, t3) {
    if (typeof t3 != `function` && t3 !== null)
      throw TypeError(`Super expression must either be null or a function`);
    e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, `prototype`, { writable: false }), t3 && ue(e3, t3);
  }
  function ae(e3) {
    var t3 = A();
    return function() {
      var n2 = de(e3), r3;
      if (t3) {
        var i3 = de(this).constructor;
        r3 = Reflect.construct(n2, arguments, i3);
      } else
        r3 = n2.apply(this, arguments);
      return k(this, r3);
    };
  }
  function k(e3, n2) {
    if (n2 && (t2(n2) === `object` || typeof n2 == `function`))
      return n2;
    if (n2 !== void 0)
      throw TypeError(`Derived constructors may only return object or undefined`);
    return oe(e3);
  }
  function oe(e3) {
    if (e3 === void 0)
      throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
    return e3;
  }
  function se(e3) {
    var t3 = typeof Map == `function` ? /* @__PURE__ */ new Map() : void 0;
    return se = function(e4) {
      if (e4 === null || !le(e4))
        return e4;
      if (typeof e4 != `function`)
        throw TypeError(`Super expression must either be null or a function`);
      if (t3 !== void 0) {
        if (t3.has(e4))
          return t3.get(e4);
        t3.set(e4, n2);
      }
      function n2() {
        return ce(e4, arguments, de(this).constructor);
      }
      return n2.prototype = Object.create(e4.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), ue(n2, e4);
    }, se(e3);
  }
  function ce(e3, t3, n2) {
    return ce = A() ? Reflect.construct.bind() : function(e4, t4, n3) {
      var r3 = [null];
      r3.push.apply(r3, t4);
      var i3 = new (Function.bind.apply(e4, r3))();
      return n3 && ue(i3, n3.prototype), i3;
    }, ce.apply(null, arguments);
  }
  function A() {
    if (typeof Reflect > `u` || !Reflect.construct || Reflect.construct.sham)
      return false;
    if (typeof Proxy == `function`)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function le(e3) {
    return Function.toString.call(e3).indexOf(`[native code]`) !== -1;
  }
  function ue(e3, t3) {
    return ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, ue(e3, t3);
  }
  function de(e3) {
    return de = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
      return e4.__proto__ || Object.getPrototypeOf(e4);
    }, de(e3);
  }
  function j(e3) {
    return new M(e3, 0);
  }
  function fe(e3) {
    return function() {
      return new pe(e3.apply(this, arguments));
    };
  }
  function pe(e3) {
    var t3, n2;
    function r3(t4, n3) {
      try {
        var a3 = e3[t4](n3), o3 = a3.value, s3 = o3 instanceof M;
        Promise.resolve(s3 ? o3.v : o3).then(function(n4) {
          if (s3) {
            var c2 = t4 === `return` ? `return` : `next`;
            if (!o3.k || n4.done)
              return r3(c2, n4);
            n4 = e3[c2](n4).value;
          }
          i3(a3.done ? `return` : `normal`, n4);
        }, function(e4) {
          r3(`throw`, e4);
        });
      } catch (e4) {
        i3(`throw`, e4);
      }
    }
    function i3(e4, i4) {
      switch (e4) {
        case `return`:
          t3.resolve({ value: i4, done: true });
          break;
        case `throw`:
          t3.reject(i4);
          break;
        default:
          t3.resolve({ value: i4, done: false });
      }
      (t3 = t3.next) ? r3(t3.key, t3.arg) : n2 = null;
    }
    this._invoke = function(e4, i4) {
      return new Promise(function(a3, o3) {
        var s3 = { key: e4, arg: i4, resolve: a3, reject: o3, next: null };
        n2 ? n2 = n2.next = s3 : (t3 = n2 = s3, r3(e4, i4));
      });
    }, typeof e3.return != `function` && (this.return = void 0);
  }
  pe.prototype[typeof Symbol == `function` && Symbol.asyncIterator || `@@asyncIterator`] = function() {
    return this;
  }, pe.prototype.next = function(e3) {
    return this._invoke(`next`, e3);
  }, pe.prototype.throw = function(e3) {
    return this._invoke(`throw`, e3);
  }, pe.prototype.return = function(e3) {
    return this._invoke(`return`, e3);
  };
  function M(e3, t3) {
    this.v = e3, this.k = t3;
  }
  var me = function(e3) {
    O(n2, e3);
    var t3 = ae(n2);
    function n2(e4, r3) {
      var i3;
      return ie(this, n2), i3 = t3.call(this, e4), i3.data = r3, i3;
    }
    return te2(n2);
  }(se(Error));
  e2.WidgetApiResponseError = me, me.prototype.name = me.name, e2.WidgetApi = function(e3) {
    O(n2, e3);
    var t3 = ae(n2);
    function n2() {
      var e4, r3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, a3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (ie(this, n2), e4 = t3.call(this), e4.clientOrigin = a3, D2(oe(e4), `transport`, void 0), D2(oe(e4), `capabilitiesFinished`, false), D2(oe(e4), `supportsMSC2974Renegotiate`, false), D2(oe(e4), `requestedCapabilities`, []), D2(oe(e4), `approvedCapabilities`, void 0), D2(oe(e4), `cachedClientVersions`, void 0), D2(oe(e4), `turnServerWatchers`, 0), !window.parent)
        throw Error(`No parent window. This widget doesn't appear to be embedded properly.`);
      return e4.transport = new o2.PostmessageTransport(i2.WidgetApiDirection.FromWidget, r3, window.parent, window), e4.transport.targetOrigin = a3, e4.transport.on(`message`, e4.handleMessage.bind(oe(e4))), e4;
    }
    return te2(n2, [{ key: `hasCapability`, value: function(e4) {
      return Array.isArray(this.approvedCapabilities) ? this.approvedCapabilities.includes(e4) : this.requestedCapabilities.includes(e4);
    } }, { key: `requestCapability`, value: function(e4) {
      if (this.capabilitiesFinished && !this.supportsMSC2974Renegotiate)
        throw Error(`Capabilities have already been negotiated`);
      this.requestedCapabilities.push(e4);
    } }, { key: `requestCapabilities`, value: function(e4) {
      var t4 = this;
      e4.forEach(function(e5) {
        return t4.requestCapability(e5);
      });
    } }, { key: `requestCapabilityForRoomTimeline`, value: function(e4) {
      this.requestCapability(`org.matrix.msc2762.timeline:${e4}`);
    } }, { key: `requestCapabilityToSendState`, value: function(e4, t4) {
      this.requestCapability(b2.WidgetEventCapability.forStateEvent(b2.EventDirection.Send, e4, t4).raw);
    } }, { key: `requestCapabilityToReceiveState`, value: function(e4, t4) {
      this.requestCapability(b2.WidgetEventCapability.forStateEvent(b2.EventDirection.Receive, e4, t4).raw);
    } }, { key: `requestCapabilityToSendToDevice`, value: function(e4) {
      this.requestCapability(b2.WidgetEventCapability.forToDeviceEvent(b2.EventDirection.Send, e4).raw);
    } }, { key: `requestCapabilityToReceiveToDevice`, value: function(e4) {
      this.requestCapability(b2.WidgetEventCapability.forToDeviceEvent(b2.EventDirection.Receive, e4).raw);
    } }, { key: `requestCapabilityToSendEvent`, value: function(e4) {
      this.requestCapability(b2.WidgetEventCapability.forRoomEvent(b2.EventDirection.Send, e4).raw);
    } }, { key: `requestCapabilityToReceiveEvent`, value: function(e4) {
      this.requestCapability(b2.WidgetEventCapability.forRoomEvent(b2.EventDirection.Receive, e4).raw);
    } }, { key: `requestCapabilityToSendMessage`, value: function(e4) {
      this.requestCapability(b2.WidgetEventCapability.forRoomMessageEvent(b2.EventDirection.Send, e4).raw);
    } }, { key: `requestCapabilityToReceiveMessage`, value: function(e4) {
      this.requestCapability(b2.WidgetEventCapability.forRoomMessageEvent(b2.EventDirection.Receive, e4).raw);
    } }, { key: `requestCapabilityToReceiveRoomAccountData`, value: function(e4) {
      this.requestCapability(b2.WidgetEventCapability.forRoomAccountData(b2.EventDirection.Receive, e4).raw);
    } }, { key: `requestOpenIDConnectToken`, value: function() {
      var e4 = this;
      return new Promise(function(t4, n3) {
        e4.transport.sendComplete(s2.WidgetApiFromWidgetAction.GetOpenIDCredentials, {}).then(function(r3) {
          var i3 = r3.response;
          i3.state === _2.OpenIDRequestState.Allowed ? t4(i3) : i3.state === _2.OpenIDRequestState.Blocked ? n3(Error(`User declined to verify their identity`)) : i3.state === _2.OpenIDRequestState.PendingUserConfirmation ? e4.on(`action:${s2.WidgetApiToWidgetAction.OpenIDCredentials}`, function a3(o3) {
            o3.preventDefault();
            var c2 = o3.detail;
            c2.data.original_request_id === r3.requestId && (c2.data.state === _2.OpenIDRequestState.Allowed ? (t4(c2.data), e4.transport.reply(c2, {})) : c2.data.state === _2.OpenIDRequestState.Blocked ? (n3(Error(`User declined to verify their identity`)), e4.transport.reply(c2, {})) : (n3(Error(`Invalid state on reply: ` + i3.state)), e4.transport.reply(c2, { error: { message: `Invalid state` } })), e4.off(`action:${s2.WidgetApiToWidgetAction.OpenIDCredentials}`, a3));
          }) : n3(Error(`Invalid state: ` + i3.state));
        }).catch(n3);
      });
    } }, { key: `updateRequestedCapabilities`, value: function() {
      return this.transport.send(s2.WidgetApiFromWidgetAction.MSC2974RenegotiateCapabilities, { capabilities: this.requestedCapabilities }).then();
    } }, { key: `sendContentLoaded`, value: function() {
      return this.transport.send(s2.WidgetApiFromWidgetAction.ContentLoaded, {}).then();
    } }, { key: `sendSticker`, value: function(e4) {
      return this.transport.send(s2.WidgetApiFromWidgetAction.SendSticker, e4).then();
    } }, { key: `setAlwaysOnScreen`, value: function(e4) {
      return this.transport.send(s2.WidgetApiFromWidgetAction.UpdateAlwaysOnScreen, { value: e4 }).then(function(e5) {
        return e5.success;
      });
    } }, { key: `openModalWidget`, value: function(e4, t4) {
      var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], r3 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i3 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : v2.MatrixWidgetType.Custom;
      return this.transport.send(s2.WidgetApiFromWidgetAction.OpenModalWidget, { type: i3, url: e4, name: t4, buttons: n3, data: r3 }).then();
    } }, { key: `closeModalWidget`, value: function() {
      var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.transport.send(s2.WidgetApiFromWidgetAction.CloseModalWidget, e4).then();
    } }, { key: `sendRoomEvent`, value: function(e4, t4, n3, r3, i3) {
      return this.sendEvent(e4, void 0, t4, n3, r3, i3);
    } }, { key: `sendStateEvent`, value: function(e4, t4, n3, r3, i3, a3) {
      return this.sendEvent(e4, t4, n3, r3, i3, a3);
    } }, { key: `sendEvent`, value: function(e4, t4, n3, r3, i3, a3) {
      return this.transport.send(s2.WidgetApiFromWidgetAction.SendEvent, E2(E2(E2(E2({ type: e4, content: n3 }, t4 !== void 0 && { state_key: t4 }), r3 !== void 0 && { room_id: r3 }), i3 !== void 0 && { delay: i3 }), a3 !== void 0 && { parent_delay_id: a3 }));
    } }, { key: `updateDelayedEvent`, value: function(e4, t4) {
      return this.transport.send(s2.WidgetApiFromWidgetAction.MSC4157UpdateDelayedEvent, { delay_id: e4, action: t4 });
    } }, { key: `sendToDevice`, value: function(e4, t4, n3) {
      return this.transport.send(s2.WidgetApiFromWidgetAction.SendToDevice, { type: e4, encrypted: t4, messages: n3 });
    } }, { key: `readRoomAccountData`, value: function(e4, t4) {
      var n3 = { type: e4 };
      return t4 && (t4.includes(x2.Symbols.AnyRoom) ? n3.room_ids = x2.Symbols.AnyRoom : n3.room_ids = t4), this.transport.send(s2.WidgetApiFromWidgetAction.BeeperReadRoomAccountData, n3).then(function(e5) {
        return e5.events;
      });
    } }, { key: `readRoomEvents`, value: function(e4, t4, n3, r3, i3) {
      var a3 = { type: e4, msgtype: n3 };
      return t4 !== void 0 && (a3.limit = t4), r3 && (r3.includes(x2.Symbols.AnyRoom) ? a3.room_ids = x2.Symbols.AnyRoom : a3.room_ids = r3), i3 && (a3.since = i3), this.transport.send(s2.WidgetApiFromWidgetAction.MSC2876ReadEvents, a3).then(function(e5) {
        return e5.events;
      });
    } }, { key: `readEventRelations`, value: function() {
      var e4 = w2(S2().mark(function e5(t5, n3, r3, i3, o3, c2, l2, u2) {
        var d2, f2;
        return S2().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                return e6.next = 2, this.getClientVersions();
              case 2:
                if (d2 = e6.sent, d2.includes(a2.UnstableApiVersion.MSC3869)) {
                  e6.next = 5;
                  break;
                }
                throw Error(`The read_relations action is not supported by the client.`);
              case 5:
                return f2 = { event_id: t5, rel_type: r3, event_type: i3, room_id: n3, to: l2, from: c2, limit: o3, direction: u2 }, e6.abrupt(`return`, this.transport.send(s2.WidgetApiFromWidgetAction.MSC3869ReadRelations, f2));
              case 7:
              case `end`:
                return e6.stop();
            }
        }, e5, this);
      }));
      function t4(t5, n3, r3, i3, a3, o3, s3, c2) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `readStateEvents`, value: function(e4, t4, n3, r3) {
      var i3 = { type: e4, state_key: n3 === void 0 ? true : n3 };
      return t4 !== void 0 && (i3.limit = t4), r3 && (r3.includes(x2.Symbols.AnyRoom) ? i3.room_ids = x2.Symbols.AnyRoom : i3.room_ids = r3), this.transport.send(s2.WidgetApiFromWidgetAction.MSC2876ReadEvents, i3).then(function(e5) {
        return e5.events;
      });
    } }, { key: `setModalButtonEnabled`, value: function(e4, t4) {
      if (e4 === y2.BuiltInModalButtonID.Close)
        throw Error(`The close button cannot be disabled`);
      return this.transport.send(s2.WidgetApiFromWidgetAction.SetModalButtonEnabled, { button: e4, enabled: t4 }).then();
    } }, { key: `navigateTo`, value: function(e4) {
      if (!e4 || !e4.startsWith(`https://matrix.to/#`))
        throw Error(`Invalid matrix.to URI`);
      return this.transport.send(s2.WidgetApiFromWidgetAction.MSC2931Navigate, { uri: e4 }).then();
    } }, { key: `getTurnServers`, value: function() {
      var e4 = this;
      return fe(S2().mark(function t4() {
        var n3, r3;
        return S2().wrap(function(t5) {
          for (; ; )
            switch (t5.prev = t5.next) {
              case 0:
                if (r3 = function() {
                  var t6 = w2(S2().mark(function t7(r4) {
                    return S2().wrap(function(t8) {
                      for (; ; )
                        switch (t8.prev = t8.next) {
                          case 0:
                            return r4.preventDefault(), n3(r4.detail.data), t8.next = 4, e4.transport.reply(r4.detail, {});
                          case 4:
                          case `end`:
                            return t8.stop();
                        }
                    }, t7);
                  }));
                  return function(e5) {
                    return t6.apply(this, arguments);
                  };
                }(), e4.on(`action:${s2.WidgetApiToWidgetAction.UpdateTurnServers}`, r3), e4.turnServerWatchers !== 0) {
                  t5.next = 12;
                  break;
                }
                return t5.prev = 3, t5.next = 6, j(e4.transport.send(s2.WidgetApiFromWidgetAction.WatchTurnServers, {}));
              case 6:
                t5.next = 12;
                break;
              case 8:
                throw t5.prev = 8, t5.t0 = t5.catch(3), e4.off(`action:${s2.WidgetApiToWidgetAction.UpdateTurnServers}`, r3), t5.t0;
              case 12:
                e4.turnServerWatchers++, t5.prev = 13;
              case 14:
                return t5.next = 17, j(new Promise(function(e5) {
                  return n3 = e5;
                }));
              case 17:
                return t5.next = 19, t5.sent;
              case 19:
                t5.next = 14;
                break;
              case 21:
                if (t5.prev = 21, e4.off(`action:${s2.WidgetApiToWidgetAction.UpdateTurnServers}`, r3), e4.turnServerWatchers--, e4.turnServerWatchers !== 0) {
                  t5.next = 27;
                  break;
                }
                return t5.next = 27, j(e4.transport.send(s2.WidgetApiFromWidgetAction.UnwatchTurnServers, {}));
              case 27:
                return t5.finish(21);
              case 28:
              case `end`:
                return t5.stop();
            }
        }, t4, null, [[3, 8], [13, , 21, 28]]);
      }))();
    } }, { key: `searchUserDirectory`, value: function() {
      var e4 = w2(S2().mark(function e5(t5, n3) {
        var r3, i3;
        return S2().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                return e6.next = 2, this.getClientVersions();
              case 2:
                if (r3 = e6.sent, r3.includes(a2.UnstableApiVersion.MSC3973)) {
                  e6.next = 5;
                  break;
                }
                throw Error(`The user_directory_search action is not supported by the client.`);
              case 5:
                return i3 = { search_term: t5, limit: n3 }, e6.abrupt(`return`, this.transport.send(s2.WidgetApiFromWidgetAction.MSC3973UserDirectorySearch, i3));
              case 7:
              case `end`:
                return e6.stop();
            }
        }, e5, this);
      }));
      function t4(t5, n3) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `getMediaConfig`, value: function() {
      var e4 = w2(S2().mark(function e5() {
        var t5, n3;
        return S2().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                return e6.next = 2, this.getClientVersions();
              case 2:
                if (t5 = e6.sent, t5.includes(a2.UnstableApiVersion.MSC4039)) {
                  e6.next = 5;
                  break;
                }
                throw Error(`The get_media_config action is not supported by the client.`);
              case 5:
                return n3 = {}, e6.abrupt(`return`, this.transport.send(s2.WidgetApiFromWidgetAction.MSC4039GetMediaConfigAction, n3));
              case 7:
              case `end`:
                return e6.stop();
            }
        }, e5, this);
      }));
      function t4() {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `uploadFile`, value: function() {
      var e4 = w2(S2().mark(function e5(t5) {
        var n3, r3;
        return S2().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                return e6.next = 2, this.getClientVersions();
              case 2:
                if (n3 = e6.sent, n3.includes(a2.UnstableApiVersion.MSC4039)) {
                  e6.next = 5;
                  break;
                }
                throw Error(`The upload_file action is not supported by the client.`);
              case 5:
                return r3 = { file: t5 }, e6.abrupt(`return`, this.transport.send(s2.WidgetApiFromWidgetAction.MSC4039UploadFileAction, r3));
              case 7:
              case `end`:
                return e6.stop();
            }
        }, e5, this);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `downloadFile`, value: function() {
      var e4 = w2(S2().mark(function e5(t5) {
        var n3, r3;
        return S2().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                return e6.next = 2, this.getClientVersions();
              case 2:
                if (n3 = e6.sent, n3.includes(a2.UnstableApiVersion.MSC4039)) {
                  e6.next = 5;
                  break;
                }
                throw Error(`The download_file action is not supported by the client.`);
              case 5:
                return r3 = { content_uri: t5 }, e6.abrupt(`return`, this.transport.send(s2.WidgetApiFromWidgetAction.MSC4039DownloadFileAction, r3));
              case 7:
              case `end`:
                return e6.stop();
            }
        }, e5, this);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `start`, value: function() {
      var e4 = this;
      this.transport.start(), this.getClientVersions().then(function(t4) {
        t4.includes(a2.UnstableApiVersion.MSC2974) && (e4.supportsMSC2974Renegotiate = true);
      });
    } }, { key: `handleMessage`, value: function(e4) {
      var t4 = new CustomEvent(`action:${e4.detail.action}`, { detail: e4.detail, cancelable: true });
      if (this.emit(`action:${e4.detail.action}`, t4), !t4.defaultPrevented)
        switch (e4.detail.action) {
          case s2.WidgetApiToWidgetAction.SupportedApiVersions:
            return this.replyVersions(e4.detail);
          case s2.WidgetApiToWidgetAction.Capabilities:
            return this.handleCapabilities(e4.detail);
          case s2.WidgetApiToWidgetAction.UpdateVisibility:
            return this.transport.reply(e4.detail, {});
          case s2.WidgetApiToWidgetAction.NotifyCapabilities:
            return this.transport.reply(e4.detail, {});
          default:
            return this.transport.reply(e4.detail, { error: { message: `Unknown or unsupported action: ` + e4.detail.action } });
        }
    } }, { key: `replyVersions`, value: function(e4) {
      this.transport.reply(e4, { supported_versions: a2.CurrentApiVersions });
    } }, { key: `getClientVersions`, value: function() {
      var e4 = this;
      return Array.isArray(this.cachedClientVersions) ? Promise.resolve(this.cachedClientVersions) : this.transport.send(s2.WidgetApiFromWidgetAction.SupportedApiVersions, {}).then(function(t4) {
        return e4.cachedClientVersions = t4.supported_versions, t4.supported_versions;
      }).catch(function(e5) {
        return console.warn(`non-fatal error getting supported client versions: `, e5), [];
      });
    } }, { key: `handleCapabilities`, value: function(e4) {
      var t4 = this;
      return this.capabilitiesFinished ? this.transport.reply(e4, { error: { message: `Capability negotiation already completed` } }) : this.getClientVersions().then(function(n3) {
        return n3.includes(a2.UnstableApiVersion.MSC2871) ? t4.once(`action:${s2.WidgetApiToWidgetAction.NotifyCapabilities}`, function(e5) {
          t4.approvedCapabilities = e5.detail.data.approved, t4.emit(`ready`);
        }) : t4.emit(`ready`), t4.capabilitiesFinished = true, t4.transport.reply(e4, { capabilities: t4.requestedCapabilities });
      });
    } }]), n2;
  }(r2.EventEmitter);
}), v = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.VideoConferenceCapabilities = e2.StickerpickerCapabilities = e2.MatrixCapabilities = void 0, e2.getTimelineRoomIDFromCapability = i2, e2.isTimelineCapability = n2, e2.isTimelineCapabilityFor = r2;
  var t2 = function(e3) {
    return e3.Screenshots = `m.capability.screenshot`, e3.StickerSending = `m.sticker`, e3.AlwaysOnScreen = `m.always_on_screen`, e3.RequiresClient = `io.element.requires_client`, e3.MSC2931Navigate = `org.matrix.msc2931.navigate`, e3.MSC3846TurnServers = `town.robin.msc3846.turn_servers`, e3.MSC3973UserDirectorySearch = `org.matrix.msc3973.user_directory_search`, e3.MSC4039UploadFile = `org.matrix.msc4039.upload_file`, e3.MSC4039DownloadFile = `org.matrix.msc4039.download_file`, e3.MSC4157SendDelayedEvent = `org.matrix.msc4157.send.delayed_event`, e3.MSC4157UpdateDelayedEvent = `org.matrix.msc4157.update_delayed_event`, e3;
  }({});
  e2.MatrixCapabilities = t2, e2.StickerpickerCapabilities = [t2.StickerSending], e2.VideoConferenceCapabilities = [t2.AlwaysOnScreen];
  function n2(e3) {
    return e3 == null ? void 0 : e3.startsWith(`org.matrix.msc2762.timeline:`);
  }
  function r2(e3, t3) {
    return e3 === `org.matrix.msc2762.timeline:${t3}`;
  }
  function i2(e3) {
    return e3.substring(e3.indexOf(`:`) + 1);
  }
}), y = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.SimpleObservable = void 0;
  function t2(e3) {
    "@babel/helpers - typeof";
    return t2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e4) {
      return typeof e4;
    } : function(e4) {
      return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol.prototype ? `symbol` : typeof e4;
    }, t2(e3);
  }
  function n2(e3, t3) {
    var n3 = typeof Symbol < `u` && e3[Symbol.iterator] || e3[`@@iterator`];
    if (!n3) {
      if (Array.isArray(e3) || (n3 = r2(e3)) || t3 && e3 && typeof e3.length == `number`) {
        n3 && (e3 = n3);
        var i3 = 0, a3 = function() {
        };
        return { s: a3, n: function() {
          return i3 >= e3.length ? { done: true } : { done: false, value: e3[i3++] };
        }, e: function(e4) {
          throw e4;
        }, f: a3 };
      }
      throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var o3 = true, s3 = false, c3;
    return { s: function() {
      n3 = n3.call(e3);
    }, n: function() {
      var e4 = n3.next();
      return o3 = e4.done, e4;
    }, e: function(e4) {
      s3 = true, c3 = e4;
    }, f: function() {
      try {
        !o3 && n3.return != null && n3.return();
      } finally {
        if (s3)
          throw c3;
      }
    } };
  }
  function r2(e3, t3) {
    if (e3) {
      if (typeof e3 == `string`)
        return i2(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      if (n3 === `Object` && e3.constructor && (n3 = e3.constructor.name), n3 === `Map` || n3 === `Set`)
        return Array.from(e3);
      if (n3 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return i2(e3, t3);
    }
  }
  function i2(e3, t3) {
    (t3 == null || t3 > e3.length) && (t3 = e3.length);
    for (var n3 = 0, r3 = Array(t3); n3 < t3; n3++)
      r3[n3] = e3[n3];
    return r3;
  }
  function a2(e3, t3) {
    if (!(e3 instanceof t3))
      throw TypeError(`Cannot call a class as a function`);
  }
  function o2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, l2(r3.key), r3);
    }
  }
  function s2(e3, t3, n3) {
    return t3 && o2(e3.prototype, t3), n3 && o2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function c2(e3, t3, n3) {
    return t3 = l2(t3), t3 in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
  }
  function l2(e3) {
    var n3 = u2(e3, `string`);
    return t2(n3) === `symbol` ? n3 : String(n3);
  }
  function u2(e3, n3) {
    if (t2(e3) !== `object` || e3 === null)
      return e3;
    var r3 = e3[Symbol.toPrimitive];
    if (r3 !== void 0) {
      var i3 = r3.call(e3, n3 || `default`);
      if (t2(i3) !== `object`)
        return i3;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return (n3 === `string` ? String : Number)(e3);
  }
  e2.SimpleObservable = function() {
    function e3(t3) {
      a2(this, e3), c2(this, `listeners`, []), t3 && this.listeners.push(t3);
    }
    return s2(e3, [{ key: `onUpdate`, value: function(e4) {
      this.listeners.push(e4);
    } }, { key: `update`, value: function(e4) {
      var t3 = n2(this.listeners), r3;
      try {
        for (t3.s(); !(r3 = t3.n()).done; ) {
          var i3 = r3.value;
          i3(e4);
        }
      } catch (e5) {
        t3.e(e5);
      } finally {
        t3.f();
      }
    } }, { key: `close`, value: function() {
      this.listeners = [];
    } }]), e3;
  }();
}), b = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.UpdateDelayedEventAction = void 0, e2.UpdateDelayedEventAction = function(e3) {
    return e3.Cancel = `cancel`, e3.Restart = `restart`, e3.Send = `send`, e3;
  }({});
}), x = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.ClientWidgetApi = void 0;
  var t2 = n(), r2 = u(), i2 = c(), a2 = d(), o2 = v(), s2 = l(), p2 = h(), m2 = f(), _2 = y(), x2 = g(), S2 = b();
  function C2(e3) {
    "@babel/helpers - typeof";
    return C2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e4) {
      return typeof e4;
    } : function(e4) {
      return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol.prototype ? `symbol` : typeof e4;
    }, C2(e3);
  }
  function w2(e3, t3) {
    var n2 = Object.keys(e3);
    if (Object.getOwnPropertySymbols) {
      var r3 = Object.getOwnPropertySymbols(e3);
      t3 && (r3 = r3.filter(function(t4) {
        return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
      })), n2.push.apply(n2, r3);
    }
    return n2;
  }
  function T2(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n2 = arguments[t3] == null ? {} : arguments[t3];
      t3 % 2 ? w2(Object(n2), true).forEach(function(t4) {
        M(e3, t4, n2[t4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : w2(Object(n2)).forEach(function(t4) {
        Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
      });
    }
    return e3;
  }
  function E2(e3, t3) {
    var n2 = typeof Symbol < `u` && e3[Symbol.iterator] || e3[`@@iterator`];
    if (!n2) {
      if (Array.isArray(e3) || (n2 = te2(e3)) || t3 && e3 && typeof e3.length == `number`) {
        n2 && (e3 = n2);
        var r3 = 0, i3 = function() {
        };
        return { s: i3, n: function() {
          return r3 >= e3.length ? { done: true } : { done: false, value: e3[r3++] };
        }, e: function(e4) {
          throw e4;
        }, f: i3 };
      }
      throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var a3 = true, o3 = false, s3;
    return { s: function() {
      n2 = n2.call(e3);
    }, n: function() {
      var e4 = n2.next();
      return a3 = e4.done, e4;
    }, e: function(e4) {
      o3 = true, s3 = e4;
    }, f: function() {
      try {
        !a3 && n2.return != null && n2.return();
      } finally {
        if (o3)
          throw s3;
      }
    } };
  }
  function D2(e3) {
    return re2(e3) || ne2(e3) || te2(e3) || ee2();
  }
  function ee2() {
    throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function te2(e3, t3) {
    if (e3) {
      if (typeof e3 == `string`)
        return ie(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      if (n2 === `Object` && e3.constructor && (n2 = e3.constructor.name), n2 === `Map` || n2 === `Set`)
        return Array.from(e3);
      if (n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return ie(e3, t3);
    }
  }
  function ne2(e3) {
    if (typeof Symbol < `u` && e3[Symbol.iterator] != null || e3[`@@iterator`] != null)
      return Array.from(e3);
  }
  function re2(e3) {
    if (Array.isArray(e3))
      return ie(e3);
  }
  function ie(e3, t3) {
    (t3 == null || t3 > e3.length) && (t3 = e3.length);
    for (var n2 = 0, r3 = Array(t3); n2 < t3; n2++)
      r3[n2] = e3[n2];
    return r3;
  }
  function O() {
    O = function() {
      return e3;
    };
    var e3 = {}, t3 = Object.prototype, n2 = t3.hasOwnProperty, r3 = Object.defineProperty || function(e4, t4, n3) {
      e4[t4] = n3.value;
    }, i3 = typeof Symbol == `function` ? Symbol : {}, a3 = i3.iterator || `@@iterator`, o3 = i3.asyncIterator || `@@asyncIterator`, s3 = i3.toStringTag || `@@toStringTag`;
    function c2(e4, t4, n3) {
      return Object.defineProperty(e4, t4, { value: n3, enumerable: true, configurable: true, writable: true }), e4[t4];
    }
    try {
      c2({}, ``);
    } catch {
      c2 = function(e4, t4, n3) {
        return e4[t4] = n3;
      };
    }
    function l2(e4, t4, n3, i4) {
      var a4 = t4 && t4.prototype instanceof f2 ? t4 : f2, o4 = Object.create(a4.prototype);
      return r3(o4, `_invoke`, { value: x3(e4, n3, new E3(i4 || [])) }), o4;
    }
    function u2(e4, t4, n3) {
      try {
        return { type: `normal`, arg: e4.call(t4, n3) };
      } catch (e5) {
        return { type: `throw`, arg: e5 };
      }
    }
    e3.wrap = l2;
    var d2 = {};
    function f2() {
    }
    function p3() {
    }
    function m3() {
    }
    var h2 = {};
    c2(h2, a3, function() {
      return this;
    });
    var g2 = Object.getPrototypeOf, _3 = g2 && g2(g2(D3([])));
    _3 && _3 !== t3 && n2.call(_3, a3) && (h2 = _3);
    var v2 = m3.prototype = f2.prototype = Object.create(h2);
    function y2(e4) {
      [`next`, `throw`, `return`].forEach(function(t4) {
        c2(e4, t4, function(e5) {
          return this._invoke(t4, e5);
        });
      });
    }
    function b2(e4, t4) {
      function i4(r4, a5, o4, s4) {
        var c3 = u2(e4[r4], e4, a5);
        if (c3.type !== `throw`) {
          var l3 = c3.arg, d3 = l3.value;
          return d3 && C2(d3) == `object` && n2.call(d3, `__await`) ? t4.resolve(d3.__await).then(function(e5) {
            i4(`next`, e5, o4, s4);
          }, function(e5) {
            i4(`throw`, e5, o4, s4);
          }) : t4.resolve(d3).then(function(e5) {
            l3.value = e5, o4(l3);
          }, function(e5) {
            return i4(`throw`, e5, o4, s4);
          });
        }
        s4(c3.arg);
      }
      var a4;
      r3(this, `_invoke`, { value: function(e5, n3) {
        function r4() {
          return new t4(function(t5, r5) {
            i4(e5, n3, t5, r5);
          });
        }
        return a4 = a4 ? a4.then(r4, r4) : r4();
      } });
    }
    function x3(e4, t4, n3) {
      var r4 = `suspendedStart`;
      return function(i4, a4) {
        if (r4 === `executing`)
          throw Error(`Generator is already running`);
        if (r4 === `completed`) {
          if (i4 === `throw`)
            throw a4;
          return ee3();
        }
        for (n3.method = i4, n3.arg = a4; ; ) {
          var o4 = n3.delegate;
          if (o4) {
            var s4 = S3(o4, n3);
            if (s4) {
              if (s4 === d2)
                continue;
              return s4;
            }
          }
          if (n3.method === `next`)
            n3.sent = n3._sent = n3.arg;
          else if (n3.method === `throw`) {
            if (r4 === `suspendedStart`)
              throw r4 = `completed`, n3.arg;
            n3.dispatchException(n3.arg);
          } else
            n3.method === `return` && n3.abrupt(`return`, n3.arg);
          r4 = `executing`;
          var c3 = u2(e4, t4, n3);
          if (c3.type === `normal`) {
            if (r4 = n3.done ? `completed` : `suspendedYield`, c3.arg === d2)
              continue;
            return { value: c3.arg, done: n3.done };
          }
          c3.type === `throw` && (r4 = `completed`, n3.method = `throw`, n3.arg = c3.arg);
        }
      };
    }
    function S3(e4, t4) {
      var n3 = t4.method, r4 = e4.iterator[n3];
      if (r4 === void 0)
        return t4.delegate = null, n3 === `throw` && e4.iterator.return && (t4.method = `return`, t4.arg = void 0, S3(e4, t4), t4.method === `throw`) || n3 !== `return` && (t4.method = `throw`, t4.arg = TypeError(`The iterator does not provide a '` + n3 + `' method`)), d2;
      var i4 = u2(r4, e4.iterator, t4.arg);
      if (i4.type === `throw`)
        return t4.method = `throw`, t4.arg = i4.arg, t4.delegate = null, d2;
      var a4 = i4.arg;
      return a4 ? a4.done ? (t4[e4.resultName] = a4.value, t4.next = e4.nextLoc, t4.method !== `return` && (t4.method = `next`, t4.arg = void 0), t4.delegate = null, d2) : a4 : (t4.method = `throw`, t4.arg = TypeError(`iterator result is not an object`), t4.delegate = null, d2);
    }
    function w3(e4) {
      var t4 = { tryLoc: e4[0] };
      1 in e4 && (t4.catchLoc = e4[1]), 2 in e4 && (t4.finallyLoc = e4[2], t4.afterLoc = e4[3]), this.tryEntries.push(t4);
    }
    function T3(e4) {
      var t4 = e4.completion || {};
      t4.type = `normal`, delete t4.arg, e4.completion = t4;
    }
    function E3(e4) {
      this.tryEntries = [{ tryLoc: `root` }], e4.forEach(w3, this), this.reset(true);
    }
    function D3(e4) {
      if (e4) {
        var t4 = e4[a3];
        if (t4)
          return t4.call(e4);
        if (typeof e4.next == `function`)
          return e4;
        if (!isNaN(e4.length)) {
          var r4 = -1, i4 = function t5() {
            for (; ++r4 < e4.length; )
              if (n2.call(e4, r4))
                return t5.value = e4[r4], t5.done = false, t5;
            return t5.value = void 0, t5.done = true, t5;
          };
          return i4.next = i4;
        }
      }
      return { next: ee3 };
    }
    function ee3() {
      return { value: void 0, done: true };
    }
    return p3.prototype = m3, r3(v2, `constructor`, { value: m3, configurable: true }), r3(m3, `constructor`, { value: p3, configurable: true }), p3.displayName = c2(m3, s3, `GeneratorFunction`), e3.isGeneratorFunction = function(e4) {
      var t4 = typeof e4 == `function` && e4.constructor;
      return !!t4 && (t4 === p3 || (t4.displayName || t4.name) === `GeneratorFunction`);
    }, e3.mark = function(e4) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e4, m3) : (e4.__proto__ = m3, c2(e4, s3, `GeneratorFunction`)), e4.prototype = Object.create(v2), e4;
    }, e3.awrap = function(e4) {
      return { __await: e4 };
    }, y2(b2.prototype), c2(b2.prototype, o3, function() {
      return this;
    }), e3.AsyncIterator = b2, e3.async = function(t4, n3, r4, i4, a4) {
      a4 === void 0 && (a4 = Promise);
      var o4 = new b2(l2(t4, n3, r4, i4), a4);
      return e3.isGeneratorFunction(n3) ? o4 : o4.next().then(function(e4) {
        return e4.done ? e4.value : o4.next();
      });
    }, y2(v2), c2(v2, s3, `Generator`), c2(v2, a3, function() {
      return this;
    }), c2(v2, `toString`, function() {
      return `[object Generator]`;
    }), e3.keys = function(e4) {
      var t4 = Object(e4), n3 = [];
      for (var r4 in t4)
        n3.push(r4);
      return n3.reverse(), function e5() {
        for (; n3.length; ) {
          var r5 = n3.pop();
          if (r5 in t4)
            return e5.value = r5, e5.done = false, e5;
        }
        return e5.done = true, e5;
      };
    }, e3.values = D3, E3.prototype = { constructor: E3, reset: function(e4) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = `next`, this.arg = void 0, this.tryEntries.forEach(T3), !e4)
        for (var t4 in this)
          t4.charAt(0) === `t` && n2.call(this, t4) && !isNaN(+t4.slice(1)) && (this[t4] = void 0);
    }, stop: function() {
      this.done = true;
      var e4 = this.tryEntries[0].completion;
      if (e4.type === `throw`)
        throw e4.arg;
      return this.rval;
    }, dispatchException: function(e4) {
      if (this.done)
        throw e4;
      var t4 = this;
      function r4(n3, r5) {
        return o4.type = `throw`, o4.arg = e4, t4.next = n3, r5 && (t4.method = `next`, t4.arg = void 0), !!r5;
      }
      for (var i4 = this.tryEntries.length - 1; i4 >= 0; --i4) {
        var a4 = this.tryEntries[i4], o4 = a4.completion;
        if (a4.tryLoc === `root`)
          return r4(`end`);
        if (a4.tryLoc <= this.prev) {
          var s4 = n2.call(a4, `catchLoc`), c3 = n2.call(a4, `finallyLoc`);
          if (s4 && c3) {
            if (this.prev < a4.catchLoc)
              return r4(a4.catchLoc, true);
            if (this.prev < a4.finallyLoc)
              return r4(a4.finallyLoc);
          } else if (s4) {
            if (this.prev < a4.catchLoc)
              return r4(a4.catchLoc, true);
          } else {
            if (!c3)
              throw Error(`try statement without catch or finally`);
            if (this.prev < a4.finallyLoc)
              return r4(a4.finallyLoc);
          }
        }
      }
    }, abrupt: function(e4, t4) {
      for (var r4 = this.tryEntries.length - 1; r4 >= 0; --r4) {
        var i4 = this.tryEntries[r4];
        if (i4.tryLoc <= this.prev && n2.call(i4, `finallyLoc`) && this.prev < i4.finallyLoc) {
          var a4 = i4;
          break;
        }
      }
      a4 && (e4 === `break` || e4 === `continue`) && a4.tryLoc <= t4 && t4 <= a4.finallyLoc && (a4 = null);
      var o4 = a4 ? a4.completion : {};
      return o4.type = e4, o4.arg = t4, a4 ? (this.method = `next`, this.next = a4.finallyLoc, d2) : this.complete(o4);
    }, complete: function(e4, t4) {
      if (e4.type === `throw`)
        throw e4.arg;
      return e4.type === `break` || e4.type === `continue` ? this.next = e4.arg : e4.type === `return` ? (this.rval = this.arg = e4.arg, this.method = `return`, this.next = `end`) : e4.type === `normal` && t4 && (this.next = t4), d2;
    }, finish: function(e4) {
      for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
        var n3 = this.tryEntries[t4];
        if (n3.finallyLoc === e4)
          return this.complete(n3.completion, n3.afterLoc), T3(n3), d2;
      }
    }, catch: function(e4) {
      for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
        var n3 = this.tryEntries[t4];
        if (n3.tryLoc === e4) {
          var r4 = n3.completion;
          if (r4.type === `throw`) {
            var i4 = r4.arg;
            T3(n3);
          }
          return i4;
        }
      }
      throw Error(`illegal catch attempt`);
    }, delegateYield: function(e4, t4, n3) {
      return this.delegate = { iterator: D3(e4), resultName: t4, nextLoc: n3 }, this.method === `next` && (this.arg = void 0), d2;
    } }, e3;
  }
  function ae(e3, t3, n2, r3, i3, a3, o3) {
    try {
      var s3 = e3[a3](o3), c2 = s3.value;
    } catch (e4) {
      n2(e4);
      return;
    }
    s3.done ? t3(c2) : Promise.resolve(c2).then(r3, i3);
  }
  function k(e3) {
    return function() {
      var t3 = this, n2 = arguments;
      return new Promise(function(r3, i3) {
        var a3 = e3.apply(t3, n2);
        function o3(e4) {
          ae(a3, r3, i3, o3, s3, `next`, e4);
        }
        function s3(e4) {
          ae(a3, r3, i3, o3, s3, `throw`, e4);
        }
        o3(void 0);
      });
    };
  }
  function oe(e3, t3) {
    if (!(e3 instanceof t3))
      throw TypeError(`Cannot call a class as a function`);
  }
  function se(e3, t3) {
    for (var n2 = 0; n2 < t3.length; n2++) {
      var r3 = t3[n2];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, me(r3.key), r3);
    }
  }
  function ce(e3, t3, n2) {
    return t3 && se(e3.prototype, t3), n2 && se(e3, n2), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function A(e3, t3) {
    if (typeof t3 != `function` && t3 !== null)
      throw TypeError(`Super expression must either be null or a function`);
    e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, `prototype`, { writable: false }), t3 && le(e3, t3);
  }
  function le(e3, t3) {
    return le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, le(e3, t3);
  }
  function ue(e3) {
    var t3 = fe();
    return function() {
      var n2 = pe(e3), r3;
      if (t3) {
        var i3 = pe(this).constructor;
        r3 = Reflect.construct(n2, arguments, i3);
      } else
        r3 = n2.apply(this, arguments);
      return de(this, r3);
    };
  }
  function de(e3, t3) {
    if (t3 && (C2(t3) === `object` || typeof t3 == `function`))
      return t3;
    if (t3 !== void 0)
      throw TypeError(`Derived constructors may only return object or undefined`);
    return j(e3);
  }
  function j(e3) {
    if (e3 === void 0)
      throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
    return e3;
  }
  function fe() {
    if (typeof Reflect > `u` || !Reflect.construct || Reflect.construct.sham)
      return false;
    if (typeof Proxy == `function`)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function pe(e3) {
    return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
      return e4.__proto__ || Object.getPrototypeOf(e4);
    }, pe(e3);
  }
  function M(e3, t3, n2) {
    return t3 = me(t3), t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
  }
  function me(e3) {
    var t3 = he(e3, `string`);
    return C2(t3) === `symbol` ? t3 : String(t3);
  }
  function he(e3, t3) {
    if (C2(e3) !== `object` || e3 === null)
      return e3;
    var n2 = e3[Symbol.toPrimitive];
    if (n2 !== void 0) {
      var r3 = n2.call(e3, t3 || `default`);
      if (C2(r3) !== `object`)
        return r3;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return (t3 === `string` ? String : Number)(e3);
  }
  function ge(e3) {
    var t3, n2, r3, i3 = 2;
    for (typeof Symbol < `u` && (n2 = Symbol.asyncIterator, r3 = Symbol.iterator); i3--; ) {
      if (n2 && (t3 = e3[n2]) != null)
        return t3.call(e3);
      if (r3 && (t3 = e3[r3]) != null)
        return new _e(t3.call(e3));
      n2 = `@@asyncIterator`, r3 = `@@iterator`;
    }
    throw TypeError(`Object is not async iterable`);
  }
  function _e(e3) {
    function t3(e4) {
      if (Object(e4) !== e4)
        return Promise.reject(TypeError(e4 + ` is not an object.`));
      var t4 = e4.done;
      return Promise.resolve(e4.value).then(function(e5) {
        return { value: e5, done: t4 };
      });
    }
    return _e = function(e4) {
      this.s = e4, this.n = e4.next;
    }, _e.prototype = { s: null, n: null, next: function() {
      return t3(this.n.apply(this.s, arguments));
    }, return: function(e4) {
      var n2 = this.s.return;
      return n2 === void 0 ? Promise.resolve({ value: e4, done: true }) : t3(n2.apply(this.s, arguments));
    }, throw: function(e4) {
      var n2 = this.s.return;
      return n2 === void 0 ? Promise.reject(e4) : t3(n2.apply(this.s, arguments));
    } }, new _e(e3);
  }
  e2.ClientWidgetApi = function(e3) {
    A(n2, e3);
    var t3 = ue(n2);
    function n2(e4, a3, o3) {
      var s3;
      if (oe(this, n2), s3 = t3.call(this), s3.widget = e4, s3.iframe = a3, s3.driver = o3, M(j(s3), `transport`, void 0), M(j(s3), `cachedWidgetVersions`, null), M(j(s3), `contentLoadedActionSent`, false), M(j(s3), `allowedCapabilities`, /* @__PURE__ */ new Set()), M(j(s3), `allowedEvents`, []), M(j(s3), `isStopped`, false), M(j(s3), `turnServers`, null), M(j(s3), `contentLoadedWaitTimer`, void 0), M(j(s3), `pushRoomStateTasks`, /* @__PURE__ */ new Set()), M(j(s3), `pushRoomStateResult`, /* @__PURE__ */ new Map()), M(j(s3), `flushRoomStateTask`, null), M(j(s3), `viewedRoomId`, null), !(a3 != null && a3.contentWindow))
        throw Error(`No iframe supplied`);
      if (!e4)
        throw Error(`Invalid widget`);
      if (!o3)
        throw Error(`Invalid driver`);
      return s3.transport = new r2.PostmessageTransport(i2.WidgetApiDirection.ToWidget, e4.id, a3.contentWindow, window), s3.transport.targetOrigin = e4.origin, s3.transport.on(`message`, s3.handleMessage.bind(j(s3))), a3.addEventListener(`load`, s3.onIframeLoad.bind(j(s3))), s3.transport.start(), s3;
    }
    return ce(n2, [{ key: `hasCapability`, value: function(e4) {
      return this.allowedCapabilities.has(e4);
    } }, { key: `canUseRoomTimeline`, value: function(e4) {
      return this.hasCapability(`org.matrix.msc2762.timeline:${x2.Symbols.AnyRoom}`) || this.hasCapability(`org.matrix.msc2762.timeline:${e4}`);
    } }, { key: `canSendRoomEvent`, value: function(e4) {
      var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return this.allowedEvents.some(function(n3) {
        return n3.matchesAsRoomEvent(p2.EventDirection.Send, e4, t4);
      });
    } }, { key: `canSendStateEvent`, value: function(e4, t4) {
      return this.allowedEvents.some(function(n3) {
        return n3.matchesAsStateEvent(p2.EventDirection.Send, e4, t4);
      });
    } }, { key: `canSendToDeviceEvent`, value: function(e4) {
      return this.allowedEvents.some(function(t4) {
        return t4.matchesAsToDeviceEvent(p2.EventDirection.Send, e4);
      });
    } }, { key: `canReceiveRoomEvent`, value: function(e4) {
      var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return this.allowedEvents.some(function(n3) {
        return n3.matchesAsRoomEvent(p2.EventDirection.Receive, e4, t4);
      });
    } }, { key: `canReceiveStateEvent`, value: function(e4, t4) {
      return this.allowedEvents.some(function(n3) {
        return n3.matchesAsStateEvent(p2.EventDirection.Receive, e4, t4);
      });
    } }, { key: `canReceiveToDeviceEvent`, value: function(e4) {
      return this.allowedEvents.some(function(t4) {
        return t4.matchesAsToDeviceEvent(p2.EventDirection.Receive, e4);
      });
    } }, { key: `canReceiveRoomAccountData`, value: function(e4) {
      return this.allowedEvents.some(function(t4) {
        return t4.matchesAsRoomAccountData(p2.EventDirection.Receive, e4);
      });
    } }, { key: `stop`, value: function() {
      this.isStopped = true, this.transport.stop();
    } }, { key: `getWidgetVersions`, value: function() {
      var e4 = k(O().mark(function e5() {
        var t5;
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (!Array.isArray(this.cachedWidgetVersions)) {
                  e6.next = 2;
                  break;
                }
                return e6.abrupt(`return`, Promise.resolve(this.cachedWidgetVersions));
              case 2:
                return e6.prev = 2, e6.next = 5, this.transport.send(a2.WidgetApiToWidgetAction.SupportedApiVersions, {});
              case 5:
                return t5 = e6.sent, this.cachedWidgetVersions = t5.supported_versions, e6.abrupt(`return`, t5.supported_versions);
              case 10:
                return e6.prev = 10, e6.t0 = e6.catch(2), console.warn(`non-fatal error getting supported widget versions: `, e6.t0), e6.abrupt(`return`, []);
              case 14:
              case `end`:
                return e6.stop();
            }
        }, e5, this, [[2, 10]]);
      }));
      function t4() {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `beginCapabilities`, value: function() {
      var e4 = this;
      this.emit(`preparing`);
      var t4;
      this.transport.send(a2.WidgetApiToWidgetAction.Capabilities, {}).then(function(n3) {
        return t4 = n3.capabilities, e4.driver.validateCapabilities(new Set(n3.capabilities));
      }).then(function(n3) {
        e4.allowCapabilities(D2(n3), t4), e4.emit(`ready`);
      }).catch(function(t5) {
        e4.emit(`error:preparing`, t5);
      });
    } }, { key: `allowCapabilities`, value: function(e4, t4) {
      var n3, r3 = this;
      console.log(`Widget ${this.widget.id} is allowed capabilities:`, e4);
      var i3 = E2(e4), s3;
      try {
        for (i3.s(); !(s3 = i3.n()).done; ) {
          var c2 = s3.value;
          this.allowedCapabilities.add(c2);
        }
      } catch (e5) {
        i3.e(e5);
      } finally {
        i3.f();
      }
      var l2 = p2.WidgetEventCapability.findEventCapabilities(e4);
      (n3 = this.allowedEvents).push.apply(n3, D2(l2)), this.transport.send(a2.WidgetApiToWidgetAction.NotifyCapabilities, { requested: t4, approved: Array.from(this.allowedCapabilities) }).catch(function(e5) {
        console.warn(`non-fatal error notifying widget of approved capabilities:`, e5);
      }).then(function() {
        r3.emit(`capabilitiesNotified`);
      });
      var u2 = E2(e4), d2;
      try {
        for (u2.s(); !(d2 = u2.n()).done; ) {
          var f2 = d2.value;
          if ((0, o2.isTimelineCapability)(f2)) {
            var m3 = (0, o2.getTimelineRoomIDFromCapability)(f2);
            if (m3 === x2.Symbols.AnyRoom) {
              var h2 = E2(this.driver.getKnownRooms()), g2;
              try {
                for (h2.s(); !(g2 = h2.n()).done; ) {
                  var _3 = g2.value;
                  this.pushRoomState(_3);
                }
              } catch (e5) {
                h2.e(e5);
              } finally {
                h2.f();
              }
            } else
              this.pushRoomState(m3);
          }
        }
      } catch (e5) {
        u2.e(e5);
      } finally {
        u2.f();
      }
      l2.length > 0 && this.viewedRoomId !== null && !this.canUseRoomTimeline(this.viewedRoomId) && this.pushRoomState(this.viewedRoomId);
    } }, { key: `onIframeLoad`, value: function(e4) {
      this.widget.waitForIframeLoad ? this.beginCapabilities() : (console.log(`waitForIframeLoad is false: waiting for widget to send contentLoaded`), this.contentLoadedWaitTimer = setTimeout(function() {
        console.error(`Widget specified waitForIframeLoad=false but timed out waiting for contentLoaded event!`);
      }, 1e4), this.contentLoadedActionSent = false);
    } }, { key: `handleContentLoadedAction`, value: function(e4) {
      if (this.contentLoadedWaitTimer !== void 0 && (clearTimeout(this.contentLoadedWaitTimer), this.contentLoadedWaitTimer = void 0), this.contentLoadedActionSent)
        throw Error(`Improper sequence: ContentLoaded Action can only be sent once after the widget loaded and should only be used if waitForIframeLoad is false (default=true)`);
      this.widget.waitForIframeLoad ? this.transport.reply(e4, { error: { message: `Improper sequence: not expecting ContentLoaded event if waitForIframeLoad is true (default=true)` } }) : (this.transport.reply(e4, {}), this.beginCapabilities()), this.contentLoadedActionSent = true;
    } }, { key: `replyVersions`, value: function(e4) {
      this.transport.reply(e4, { supported_versions: s2.CurrentApiVersions });
    } }, { key: `handleCapabilitiesRenegotiate`, value: function(e4) {
      var _a;
      var t4 = this;
      this.transport.reply(e4, {});
      var n3 = ((_a = e4.data) == null ? void 0 : _a.capabilities) || [], r3 = new Set(n3.filter(function(e5) {
        return !t4.hasCapability(e5);
      }));
      r3.size === 0 && this.allowCapabilities([], []), this.driver.validateCapabilities(r3).then(function(e5) {
        return t4.allowCapabilities(D2(e5), D2(r3));
      });
    } }, { key: `handleNavigate`, value: function(e4) {
      var t4, n3, r3 = this;
      if (!this.hasCapability(o2.MatrixCapabilities.MSC2931Navigate))
        return this.transport.reply(e4, { error: { message: `Missing capability` } });
      if (!((t4 = e4.data) != null && t4.uri) || !((n3 = e4.data) != null && n3.uri.toString().startsWith(`https://matrix.to/#`)))
        return this.transport.reply(e4, { error: { message: `Invalid matrix.to URI` } });
      var i3 = function(t5) {
        console.error(`[ClientWidgetApi] Failed to handle navigation: `, t5), r3.handleDriverError(t5, e4, `Error handling navigation`);
      };
      try {
        this.driver.navigate(e4.data.uri.toString()).catch(function(e5) {
          return i3(e5);
        }).then(function() {
          return r3.transport.reply(e4, {});
        });
      } catch (e5) {
        return i3(e5);
      }
    } }, { key: `handleOIDC`, value: function(e4) {
      var t4 = this, n3 = 1, r3 = function(r4, i4) {
        return i4 || (i4 = {}), n3 > 1 ? t4.transport.send(a2.WidgetApiToWidgetAction.OpenIDCredentials, T2({ state: r4, original_request_id: e4.requestId }, i4)) : t4.transport.reply(e4, T2({ state: r4 }, i4));
      }, i3 = function(i4) {
        return console.error(`[ClientWidgetApi] Failed to handle OIDC: `, i4), n3 > 1 ? r3(m2.OpenIDRequestState.Blocked) : t4.transport.reply(e4, { error: { message: i4 } });
      }, o3 = new _2.SimpleObservable(function(e5) {
        if (e5.state === m2.OpenIDRequestState.PendingUserConfirmation && n3 > 1)
          return o3.close(), i3(`client provided out-of-phase response to OIDC flow`);
        if (e5.state === m2.OpenIDRequestState.PendingUserConfirmation) {
          r3(e5.state), n3++;
          return;
        }
        return e5.state === m2.OpenIDRequestState.Allowed && !e5.token ? i3(`client provided invalid OIDC token for an allowed request`) : (e5.state === m2.OpenIDRequestState.Blocked && (e5.token = void 0), o3.close(), r3(e5.state, e5.token));
      });
      this.driver.askOpenID(o3);
    } }, { key: `handleReadRoomAccountData`, value: function(e4) {
      var t4 = this, n3 = Promise.resolve([]);
      return n3 = this.driver.readRoomAccountData(e4.data.type), this.canReceiveRoomAccountData(e4.data.type) ? n3.then(function(n4) {
        t4.transport.reply(e4, { events: n4 });
      }) : this.transport.reply(e4, { error: { message: `Cannot read room account data of this type` } });
    } }, { key: `handleReadEvents`, value: function() {
      var e4 = k(O().mark(function e5(t5) {
        var n3 = this, r3, i3, a3, o3, s3, c2, l2, u2, d2;
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (t5.data.type) {
                  e6.next = 2;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Invalid request - missing event type` } }));
              case 2:
                if (!(t5.data.limit !== void 0 && (!t5.data.limit || t5.data.limit < 0))) {
                  e6.next = 4;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Invalid request - limit out of range` } }));
              case 4:
                if (t5.data.room_ids !== void 0) {
                  e6.next = 8;
                  break;
                }
                r3 = this.viewedRoomId === null ? [] : [this.viewedRoomId], e6.next = 30;
                break;
              case 8:
                if (t5.data.room_ids !== x2.Symbols.AnyRoom) {
                  e6.next = 12;
                  break;
                }
                r3 = this.driver.getKnownRooms().filter(function(e7) {
                  return n3.canUseRoomTimeline(e7);
                }), e6.next = 30;
                break;
              case 12:
                r3 = t5.data.room_ids, i3 = E2(r3), e6.prev = 14, i3.s();
              case 16:
                if ((a3 = i3.n()).done) {
                  e6.next = 22;
                  break;
                }
                if (o3 = a3.value, this.canUseRoomTimeline(o3)) {
                  e6.next = 20;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Unable to access room timeline: ${o3}` } }));
              case 20:
                e6.next = 16;
                break;
              case 22:
                e6.next = 27;
                break;
              case 24:
                e6.prev = 24, e6.t0 = e6.catch(14), i3.e(e6.t0);
              case 27:
                return e6.prev = 27, i3.f(), e6.finish(27);
              case 30:
                if (s3 = t5.data.limit || 0, c2 = t5.data.since, l2 = void 0, u2 = void 0, t5.data.state_key === void 0) {
                  e6.next = 40;
                  break;
                }
                if (l2 = t5.data.state_key === true ? void 0 : t5.data.state_key.toString(), this.canReceiveStateEvent(t5.data.type, l2 ?? null)) {
                  e6.next = 38;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Cannot read state events of this type` } }));
              case 38:
                e6.next = 43;
                break;
              case 40:
                if (u2 = t5.data.msgtype, this.canReceiveRoomEvent(t5.data.type, u2)) {
                  e6.next = 43;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Cannot read room events of this type` } }));
              case 43:
                if (!(t5.data.room_ids === void 0 && r3.length === 0)) {
                  e6.next = 49;
                  break;
                }
                return e6.next = 46, t5.data.state_key === void 0 ? this.driver.readRoomEvents(t5.data.type, u2, s3, null, c2) : this.driver.readStateEvents(t5.data.type, l2, s3, null);
              case 46:
                e6.t1 = e6.sent, e6.next = 52;
                break;
              case 49:
                return e6.next = 51, Promise.all(r3.map(function(e7) {
                  return n3.driver.readRoomTimeline(e7, t5.data.type, u2, l2, s3, c2);
                }));
              case 51:
                e6.t1 = e6.sent.flat(1);
              case 52:
                d2 = e6.t1, this.transport.reply(t5, { events: d2 });
              case 54:
              case `end`:
                return e6.stop();
            }
        }, e5, this, [[14, 24, 27, 30]]);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `handleSendEvent`, value: function(e4) {
      var t4 = this;
      if (!e4.data.type)
        return this.transport.reply(e4, { error: { message: `Invalid request - missing event type` } });
      if (e4.data.room_id && !this.canUseRoomTimeline(e4.data.room_id))
        return this.transport.reply(e4, { error: { message: `Unable to access room timeline: ${e4.data.room_id}` } });
      var n3 = e4.data.delay !== void 0 || e4.data.parent_delay_id !== void 0;
      if (n3 && !this.hasCapability(o2.MatrixCapabilities.MSC4157SendDelayedEvent))
        return this.transport.reply(e4, { error: { message: `Missing capability` } });
      var r3;
      if (e4.data.state_key !== void 0) {
        if (!this.canSendStateEvent(e4.data.type, e4.data.state_key))
          return this.transport.reply(e4, { error: { message: `Cannot send state events of this type` } });
        r3 = n3 ? this.driver.sendDelayedEvent(e4.data.delay ?? null, e4.data.parent_delay_id ?? null, e4.data.type, e4.data.content || {}, e4.data.state_key, e4.data.room_id) : this.driver.sendEvent(e4.data.type, e4.data.content || {}, e4.data.state_key, e4.data.room_id);
      } else {
        var i3 = e4.data.content || {}, a3 = i3.msgtype;
        if (!this.canSendRoomEvent(e4.data.type, a3))
          return this.transport.reply(e4, { error: { message: `Cannot send room events of this type` } });
        r3 = n3 ? this.driver.sendDelayedEvent(e4.data.delay ?? null, e4.data.parent_delay_id ?? null, e4.data.type, i3, null, e4.data.room_id) : this.driver.sendEvent(e4.data.type, i3, null, e4.data.room_id);
      }
      r3.then(function(n4) {
        return t4.transport.reply(e4, T2({ room_id: n4.roomId }, `eventId` in n4 ? { event_id: n4.eventId } : { delay_id: n4.delayId }));
      }).catch(function(n4) {
        console.error(`error sending event: `, n4), t4.handleDriverError(n4, e4, `Error sending event`);
      });
    } }, { key: `handleUpdateDelayedEvent`, value: function(e4) {
      var t4 = this;
      if (!e4.data.delay_id)
        return this.transport.reply(e4, { error: { message: `Invalid request - missing delay_id` } });
      if (!this.hasCapability(o2.MatrixCapabilities.MSC4157UpdateDelayedEvent))
        return this.transport.reply(e4, { error: { message: `Missing capability` } });
      switch (e4.data.action) {
        case S2.UpdateDelayedEventAction.Cancel:
        case S2.UpdateDelayedEventAction.Restart:
        case S2.UpdateDelayedEventAction.Send:
          this.driver.updateDelayedEvent(e4.data.delay_id, e4.data.action).then(function() {
            return t4.transport.reply(e4, {});
          }).catch(function(n3) {
            console.error(`error updating delayed event: `, n3), t4.handleDriverError(n3, e4, `Error updating delayed event`);
          });
          break;
        default:
          return this.transport.reply(e4, { error: { message: `Invalid request - unsupported action` } });
      }
    } }, { key: `handleSendToDevice`, value: function() {
      var e4 = k(O().mark(function e5(t5) {
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (t5.data.type) {
                  e6.next = 5;
                  break;
                }
                return e6.next = 3, this.transport.reply(t5, { error: { message: `Invalid request - missing event type` } });
              case 3:
                e6.next = 31;
                break;
              case 5:
                if (t5.data.messages) {
                  e6.next = 10;
                  break;
                }
                return e6.next = 8, this.transport.reply(t5, { error: { message: `Invalid request - missing event contents` } });
              case 8:
                e6.next = 31;
                break;
              case 10:
                if (typeof t5.data.encrypted == `boolean`) {
                  e6.next = 15;
                  break;
                }
                return e6.next = 13, this.transport.reply(t5, { error: { message: `Invalid request - missing encryption flag` } });
              case 13:
                e6.next = 31;
                break;
              case 15:
                if (this.canSendToDeviceEvent(t5.data.type)) {
                  e6.next = 20;
                  break;
                }
                return e6.next = 18, this.transport.reply(t5, { error: { message: `Cannot send to-device events of this type` } });
              case 18:
                e6.next = 31;
                break;
              case 20:
                return e6.prev = 20, e6.next = 23, this.driver.sendToDevice(t5.data.type, t5.data.encrypted, t5.data.messages);
              case 23:
                return e6.next = 25, this.transport.reply(t5, {});
              case 25:
                e6.next = 31;
                break;
              case 27:
                e6.prev = 27, e6.t0 = e6.catch(20), console.error(`error sending to-device event`, e6.t0), this.handleDriverError(e6.t0, t5, `Error sending event`);
              case 31:
              case `end`:
                return e6.stop();
            }
        }, e5, this, [[20, 27]]);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `pollTurnServers`, value: function() {
      var e4 = k(O().mark(function e5(t5, n3) {
        var r3, i3, o3, s3, c2, l2;
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                return e6.prev = 0, e6.next = 3, this.transport.send(a2.WidgetApiToWidgetAction.UpdateTurnServers, n3);
              case 3:
                r3 = false, i3 = false, e6.prev = 5, s3 = ge(t5);
              case 7:
                return e6.next = 9, s3.next();
              case 9:
                if (!(r3 = !(c2 = e6.sent).done)) {
                  e6.next = 16;
                  break;
                }
                return l2 = c2.value, e6.next = 13, this.transport.send(a2.WidgetApiToWidgetAction.UpdateTurnServers, l2);
              case 13:
                r3 = false, e6.next = 7;
                break;
              case 16:
                e6.next = 22;
                break;
              case 18:
                e6.prev = 18, e6.t0 = e6.catch(5), i3 = true, o3 = e6.t0;
              case 22:
                if (e6.prev = 22, e6.prev = 23, !(r3 && s3.return != null)) {
                  e6.next = 27;
                  break;
                }
                return e6.next = 27, s3.return();
              case 27:
                if (e6.prev = 27, !i3) {
                  e6.next = 30;
                  break;
                }
                throw o3;
              case 30:
                return e6.finish(27);
              case 31:
                return e6.finish(22);
              case 32:
                e6.next = 37;
                break;
              case 34:
                e6.prev = 34, e6.t1 = e6.catch(0), console.error(`error polling for TURN servers`, e6.t1);
              case 37:
              case `end`:
                return e6.stop();
            }
        }, e5, this, [[0, 34], [5, 18, 22, 32], [23, , 27, 31]]);
      }));
      function t4(t5, n3) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `handleWatchTurnServers`, value: function() {
      var e4 = k(O().mark(function e5(t5) {
        var n3, r3, i3, a3;
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (this.hasCapability(o2.MatrixCapabilities.MSC3846TurnServers)) {
                  e6.next = 5;
                  break;
                }
                return e6.next = 3, this.transport.reply(t5, { error: { message: `Missing capability` } });
              case 3:
                e6.next = 30;
                break;
              case 5:
                if (!this.turnServers) {
                  e6.next = 10;
                  break;
                }
                return e6.next = 8, this.transport.reply(t5, {});
              case 8:
                e6.next = 30;
                break;
              case 10:
                return e6.prev = 10, n3 = this.driver.getTurnServers(), e6.next = 14, n3.next();
              case 14:
                if (r3 = e6.sent, i3 = r3.done, a3 = r3.value, !i3) {
                  e6.next = 19;
                  break;
                }
                throw Error(`Client refuses to provide any TURN servers`);
              case 19:
                return e6.next = 21, this.transport.reply(t5, {});
              case 21:
                this.pollTurnServers(n3, a3), this.turnServers = n3, e6.next = 30;
                break;
              case 25:
                return e6.prev = 25, e6.t0 = e6.catch(10), console.error(`error getting first TURN server results`, e6.t0), e6.next = 30, this.transport.reply(t5, { error: { message: `TURN servers not available` } });
              case 30:
              case `end`:
                return e6.stop();
            }
        }, e5, this, [[10, 25]]);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `handleUnwatchTurnServers`, value: function() {
      var e4 = k(O().mark(function e5(t5) {
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (this.hasCapability(o2.MatrixCapabilities.MSC3846TurnServers)) {
                  e6.next = 5;
                  break;
                }
                return e6.next = 3, this.transport.reply(t5, { error: { message: `Missing capability` } });
              case 3:
                e6.next = 15;
                break;
              case 5:
                if (this.turnServers) {
                  e6.next = 10;
                  break;
                }
                return e6.next = 8, this.transport.reply(t5, {});
              case 8:
                e6.next = 15;
                break;
              case 10:
                return e6.next = 12, this.turnServers.return(void 0);
              case 12:
                return this.turnServers = null, e6.next = 15, this.transport.reply(t5, {});
              case 15:
              case `end`:
                return e6.stop();
            }
        }, e5, this);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `handleReadRelations`, value: function() {
      var e4 = k(O().mark(function e5(t5) {
        var n3 = this, r3, i3;
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (t5.data.event_id) {
                  e6.next = 2;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Invalid request - missing event ID` } }));
              case 2:
                if (!(t5.data.limit !== void 0 && t5.data.limit < 0)) {
                  e6.next = 4;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Invalid request - limit out of range` } }));
              case 4:
                if (!(t5.data.room_id !== void 0 && !this.canUseRoomTimeline(t5.data.room_id))) {
                  e6.next = 6;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Unable to access room timeline: ${t5.data.room_id}` } }));
              case 6:
                return e6.prev = 6, e6.next = 9, this.driver.readEventRelations(t5.data.event_id, t5.data.room_id, t5.data.rel_type, t5.data.event_type, t5.data.from, t5.data.to, t5.data.limit, t5.data.direction);
              case 9:
                return r3 = e6.sent, i3 = r3.chunk.filter(function(e7) {
                  return e7.state_key === void 0 ? n3.canReceiveRoomEvent(e7.type, e7.content.msgtype) : n3.canReceiveStateEvent(e7.type, e7.state_key);
                }), e6.abrupt(`return`, this.transport.reply(t5, { chunk: i3, prev_batch: r3.prevBatch, next_batch: r3.nextBatch }));
              case 14:
                e6.prev = 14, e6.t0 = e6.catch(6), console.error(`error getting the relations`, e6.t0), this.handleDriverError(e6.t0, t5, `Unexpected error while reading relations`);
              case 18:
              case `end`:
                return e6.stop();
            }
        }, e5, this, [[6, 14]]);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `handleUserDirectorySearch`, value: function() {
      var e4 = k(O().mark(function e5(t5) {
        var n3;
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (this.hasCapability(o2.MatrixCapabilities.MSC3973UserDirectorySearch)) {
                  e6.next = 2;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Missing capability` } }));
              case 2:
                if (typeof t5.data.search_term == `string`) {
                  e6.next = 4;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Invalid request - missing search term` } }));
              case 4:
                if (!(t5.data.limit !== void 0 && t5.data.limit < 0)) {
                  e6.next = 6;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Invalid request - limit out of range` } }));
              case 6:
                return e6.prev = 6, e6.next = 9, this.driver.searchUserDirectory(t5.data.search_term, t5.data.limit);
              case 9:
                return n3 = e6.sent, e6.abrupt(`return`, this.transport.reply(t5, { limited: n3.limited, results: n3.results.map(function(e7) {
                  return { user_id: e7.userId, display_name: e7.displayName, avatar_url: e7.avatarUrl };
                }) }));
              case 13:
                e6.prev = 13, e6.t0 = e6.catch(6), console.error(`error searching in the user directory`, e6.t0), this.handleDriverError(e6.t0, t5, `Unexpected error while searching in the user directory`);
              case 17:
              case `end`:
                return e6.stop();
            }
        }, e5, this, [[6, 13]]);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `handleGetMediaConfig`, value: function() {
      var e4 = k(O().mark(function e5(t5) {
        var n3;
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (this.hasCapability(o2.MatrixCapabilities.MSC4039UploadFile)) {
                  e6.next = 2;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Missing capability` } }));
              case 2:
                return e6.prev = 2, e6.next = 5, this.driver.getMediaConfig();
              case 5:
                return n3 = e6.sent, e6.abrupt(`return`, this.transport.reply(t5, n3));
              case 9:
                e6.prev = 9, e6.t0 = e6.catch(2), console.error(`error while getting the media configuration`, e6.t0), this.handleDriverError(e6.t0, t5, `Unexpected error while getting the media configuration`);
              case 13:
              case `end`:
                return e6.stop();
            }
        }, e5, this, [[2, 9]]);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `handleUploadFile`, value: function() {
      var e4 = k(O().mark(function e5(t5) {
        var n3;
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (this.hasCapability(o2.MatrixCapabilities.MSC4039UploadFile)) {
                  e6.next = 2;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Missing capability` } }));
              case 2:
                return e6.prev = 2, e6.next = 5, this.driver.uploadFile(t5.data.file);
              case 5:
                return n3 = e6.sent, e6.abrupt(`return`, this.transport.reply(t5, { content_uri: n3.contentUri }));
              case 9:
                e6.prev = 9, e6.t0 = e6.catch(2), console.error(`error while uploading a file`, e6.t0), this.handleDriverError(e6.t0, t5, `Unexpected error while uploading a file`);
              case 13:
              case `end`:
                return e6.stop();
            }
        }, e5, this, [[2, 9]]);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `handleDownloadFile`, value: function() {
      var e4 = k(O().mark(function e5(t5) {
        var n3;
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (this.hasCapability(o2.MatrixCapabilities.MSC4039DownloadFile)) {
                  e6.next = 2;
                  break;
                }
                return e6.abrupt(`return`, this.transport.reply(t5, { error: { message: `Missing capability` } }));
              case 2:
                return e6.prev = 2, e6.next = 5, this.driver.downloadFile(t5.data.content_uri);
              case 5:
                return n3 = e6.sent, e6.abrupt(`return`, this.transport.reply(t5, { file: n3.file }));
              case 9:
                e6.prev = 9, e6.t0 = e6.catch(2), console.error(`error while downloading a file`, e6.t0), this.handleDriverError(e6.t0, t5, `Unexpected error while downloading a file`);
              case 13:
              case `end`:
                return e6.stop();
            }
        }, e5, this, [[2, 9]]);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `handleDriverError`, value: function(e4, t4, n3) {
      var r3 = this.driver.processError(e4);
      this.transport.reply(t4, { error: T2({ message: n3 }, r3) });
    } }, { key: `handleMessage`, value: function(e4) {
      if (!this.isStopped) {
        var t4 = new CustomEvent(`action:${e4.detail.action}`, { detail: e4.detail, cancelable: true });
        if (this.emit(`action:${e4.detail.action}`, t4), !t4.defaultPrevented)
          switch (e4.detail.action) {
            case a2.WidgetApiFromWidgetAction.ContentLoaded:
              return this.handleContentLoadedAction(e4.detail);
            case a2.WidgetApiFromWidgetAction.SupportedApiVersions:
              return this.replyVersions(e4.detail);
            case a2.WidgetApiFromWidgetAction.SendEvent:
              return this.handleSendEvent(e4.detail);
            case a2.WidgetApiFromWidgetAction.SendToDevice:
              return this.handleSendToDevice(e4.detail);
            case a2.WidgetApiFromWidgetAction.GetOpenIDCredentials:
              return this.handleOIDC(e4.detail);
            case a2.WidgetApiFromWidgetAction.MSC2931Navigate:
              return this.handleNavigate(e4.detail);
            case a2.WidgetApiFromWidgetAction.MSC2974RenegotiateCapabilities:
              return this.handleCapabilitiesRenegotiate(e4.detail);
            case a2.WidgetApiFromWidgetAction.MSC2876ReadEvents:
              return this.handleReadEvents(e4.detail);
            case a2.WidgetApiFromWidgetAction.WatchTurnServers:
              return this.handleWatchTurnServers(e4.detail);
            case a2.WidgetApiFromWidgetAction.UnwatchTurnServers:
              return this.handleUnwatchTurnServers(e4.detail);
            case a2.WidgetApiFromWidgetAction.MSC3869ReadRelations:
              return this.handleReadRelations(e4.detail);
            case a2.WidgetApiFromWidgetAction.MSC3973UserDirectorySearch:
              return this.handleUserDirectorySearch(e4.detail);
            case a2.WidgetApiFromWidgetAction.BeeperReadRoomAccountData:
              return this.handleReadRoomAccountData(e4.detail);
            case a2.WidgetApiFromWidgetAction.MSC4039GetMediaConfigAction:
              return this.handleGetMediaConfig(e4.detail);
            case a2.WidgetApiFromWidgetAction.MSC4039UploadFileAction:
              return this.handleUploadFile(e4.detail);
            case a2.WidgetApiFromWidgetAction.MSC4039DownloadFileAction:
              return this.handleDownloadFile(e4.detail);
            case a2.WidgetApiFromWidgetAction.MSC4157UpdateDelayedEvent:
              return this.handleUpdateDelayedEvent(e4.detail);
            default:
              return this.transport.reply(e4.detail, { error: { message: `Unknown or unsupported action: ` + e4.detail.action } });
          }
      }
    } }, { key: `updateTheme`, value: function(e4) {
      return this.transport.send(a2.WidgetApiToWidgetAction.ThemeChange, e4);
    } }, { key: `updateLanguage`, value: function(e4) {
      return this.transport.send(a2.WidgetApiToWidgetAction.LanguageChange, { lang: e4 });
    } }, { key: `takeScreenshot`, value: function() {
      return this.transport.send(a2.WidgetApiToWidgetAction.TakeScreenshot, {});
    } }, { key: `updateVisibility`, value: function(e4) {
      return this.transport.send(a2.WidgetApiToWidgetAction.UpdateVisibility, { visible: e4 });
    } }, { key: `sendWidgetConfig`, value: function(e4) {
      return this.transport.send(a2.WidgetApiToWidgetAction.WidgetConfig, e4).then();
    } }, { key: `notifyModalWidgetButtonClicked`, value: function(e4) {
      return this.transport.send(a2.WidgetApiToWidgetAction.ButtonClicked, { id: e4 }).then();
    } }, { key: `notifyModalWidgetClose`, value: function(e4) {
      return this.transport.send(a2.WidgetApiToWidgetAction.CloseModalWidget, e4).then();
    } }, { key: `feedEvent`, value: function() {
      var e4 = k(O().mark(function e5(t5, n3) {
        return O().wrap(function(e6) {
          var _a;
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (n3 !== void 0 && this.setViewedRoomId(n3), !(t5.room_id !== this.viewedRoomId && !this.canUseRoomTimeline(t5.room_id))) {
                  e6.next = 3;
                  break;
                }
                return e6.abrupt(`return`);
              case 3:
                if (!(t5.state_key !== void 0 && t5.state_key !== null)) {
                  e6.next = 8;
                  break;
                }
                if (this.canReceiveStateEvent(t5.type, t5.state_key)) {
                  e6.next = 6;
                  break;
                }
                return e6.abrupt(`return`);
              case 6:
                e6.next = 10;
                break;
              case 8:
                if (this.canReceiveRoomEvent(t5.type, (_a = t5.content) == null ? void 0 : _a.msgtype)) {
                  e6.next = 10;
                  break;
                }
                return e6.abrupt(`return`);
              case 10:
                return e6.next = 12, this.transport.send(a2.WidgetApiToWidgetAction.SendEvent, t5);
              case 12:
              case `end`:
                return e6.stop();
            }
        }, e5, this);
      }));
      function t4(t5, n3) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `feedToDevice`, value: function() {
      var e4 = k(O().mark(function e5(t5, n3) {
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (!this.canReceiveToDeviceEvent(t5.type)) {
                  e6.next = 3;
                  break;
                }
                return e6.next = 3, this.transport.send(a2.WidgetApiToWidgetAction.SendToDevice, T2(T2({}, t5), {}, { encrypted: n3 }));
              case 3:
              case `end`:
                return e6.stop();
            }
        }, e5, this);
      }));
      function t4(t5, n3) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `setViewedRoomId`, value: function(e4) {
      this.viewedRoomId = e4, e4 !== null && !this.canUseRoomTimeline(e4) && this.pushRoomState(e4);
    } }, { key: `flushRoomState`, value: function() {
      var e4 = k(O().mark(function e5() {
        var t5, n3, r3, i3, o3, c2, l2;
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                e6.prev = 0;
              case 1:
                return e6.next = 3, Promise.all(D2(this.pushRoomStateTasks));
              case 3:
                if (this.pushRoomStateTasks.size > 0) {
                  e6.next = 1;
                  break;
                }
              case 4:
                t5 = [], n3 = E2(this.pushRoomStateResult.values());
                try {
                  for (n3.s(); !(r3 = n3.n()).done; ) {
                    i3 = r3.value, o3 = E2(i3.values());
                    try {
                      for (o3.s(); !(c2 = o3.n()).done; )
                        l2 = c2.value, t5.push.apply(t5, D2(l2.values()));
                    } catch (e7) {
                      o3.e(e7);
                    } finally {
                      o3.f();
                    }
                  }
                } catch (e7) {
                  n3.e(e7);
                } finally {
                  n3.f();
                }
                return e6.next = 9, this.getWidgetVersions();
              case 9:
                if (!e6.sent.includes(s2.UnstableApiVersion.MSC2762_UPDATE_STATE)) {
                  e6.next = 12;
                  break;
                }
                return e6.next = 12, this.transport.send(a2.WidgetApiToWidgetAction.UpdateState, { state: t5 });
              case 12:
                return e6.prev = 12, this.flushRoomStateTask = null, e6.finish(12);
              case 15:
              case `end`:
                return e6.stop();
            }
        }, e5, this, [[0, , 12, 15]]);
      }));
      function t4() {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }, { key: `pushRoomState`, value: function(e4) {
      var t4 = this, n3 = E2(this.allowedEvents), r3;
      try {
        var i3 = function() {
          var n4 = r3.value;
          if (n4.kind === p2.EventKind.State && n4.direction === p2.EventDirection.Receive) {
            var i4 = t4.driver.readRoomState(e4, n4.eventType, n4.keyStr ?? void 0).then(function(r4) {
              var i5 = E2(r4), a3;
              try {
                for (i5.s(); !(a3 = i5.n()).done; ) {
                  var o3 = a3.value, s3 = t4.pushRoomStateResult.get(e4);
                  s3 === void 0 && (s3 = /* @__PURE__ */ new Map(), t4.pushRoomStateResult.set(e4, s3));
                  var c2 = s3.get(n4.eventType);
                  c2 === void 0 && (c2 = /* @__PURE__ */ new Map(), s3.set(n4.eventType, c2)), c2.has(o3.state_key) || c2.set(o3.state_key, o3);
                }
              } catch (e5) {
                i5.e(e5);
              } finally {
                i5.f();
              }
            }, function(t5) {
              return console.error(`Failed to read room state for ${e4} (${n4.eventType}, ${n4.keyStr})`, t5);
            }).then(function() {
              t4.pushRoomStateTasks.delete(i4);
            });
            t4.pushRoomStateTasks.add(i4), t4.flushRoomStateTask ?? (t4.flushRoomStateTask = t4.flushRoomState()), t4.flushRoomStateTask.catch(function(e5) {
              return console.error(`Failed to push room state`, e5);
            });
          }
        };
        for (n3.s(); !(r3 = n3.n()).done; )
          i3();
      } catch (e5) {
        n3.e(e5);
      } finally {
        n3.f();
      }
    } }, { key: `feedStateUpdate`, value: function() {
      var e4 = k(O().mark(function e5(t5) {
        var n3, r3;
        return O().wrap(function(e6) {
          for (; ; )
            switch (e6.prev = e6.next) {
              case 0:
                if (t5.state_key !== void 0) {
                  e6.next = 2;
                  break;
                }
                throw Error(`Not a state event`);
              case 2:
                if (!((t5.room_id === this.viewedRoomId || this.canUseRoomTimeline(t5.room_id)) && this.canReceiveStateEvent(t5.type, t5.state_key))) {
                  e6.next = 21;
                  break;
                }
                if (this.pushRoomStateTasks.size !== 0) {
                  e6.next = 11;
                  break;
                }
                return e6.next = 6, this.getWidgetVersions();
              case 6:
                if (!e6.sent.includes(s2.UnstableApiVersion.MSC2762_UPDATE_STATE)) {
                  e6.next = 9;
                  break;
                }
                return e6.next = 9, this.transport.send(a2.WidgetApiToWidgetAction.UpdateState, { state: [t5] });
              case 9:
                e6.next = 21;
                break;
              case 11:
                n3 = this.pushRoomStateResult.get(t5.room_id), n3 === void 0 && (n3 = /* @__PURE__ */ new Map(), this.pushRoomStateResult.set(t5.room_id, n3)), r3 = n3.get(t5.type), r3 === void 0 && (r3 = /* @__PURE__ */ new Map(), n3.set(t5.type, r3)), r3.has(t5.type) || r3.set(t5.state_key, t5);
              case 16:
                return e6.next = 18, Promise.all(D2(this.pushRoomStateTasks));
              case 18:
                if (this.pushRoomStateTasks.size > 0) {
                  e6.next = 16;
                  break;
                }
              case 19:
                return e6.next = 21, this.flushRoomStateTask;
              case 21:
              case `end`:
                return e6.stop();
            }
        }, e5, this);
      }));
      function t4(t5) {
        return e4.apply(this, arguments);
      }
      return t4;
    }() }]), n2;
  }(t2.EventEmitter);
}), S = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.isErrorResponse = n2;
  function t2(e3) {
    "@babel/helpers - typeof";
    return t2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e4) {
      return typeof e4;
    } : function(e4) {
      return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol.prototype ? `symbol` : typeof e4;
    }, t2(e3);
  }
  function n2(e3) {
    var n3 = e3.error;
    return t2(n3) === `object` && n3 !== null && `message` in n3 && typeof n3.message == `string`;
  }
}), C = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.WidgetKind = void 0, e2.WidgetKind = function(e3) {
    return e3.Room = `room`, e3.Account = `account`, e3.Modal = `modal`, e3;
  }({});
}), w = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.ModalButtonKind = void 0, e2.ModalButtonKind = function(e3) {
    return e3.Primary = `m.primary`, e3.Secondary = `m.secondary`, e3.Warning = `m.warning`, e3.Danger = `m.danger`, e3.Link = `m.link`, e3;
  }({});
}), T = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.isValidUrl = t2;
  function t2(e3) {
    if (!e3)
      return false;
    try {
      var t3 = new URL(e3);
      return !(t3.protocol !== `http` && t3.protocol !== `https`);
    } catch (e4) {
      if (e4 instanceof TypeError)
        return false;
      throw e4;
    }
  }
}), E = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.assertPresent = t2;
  function t2(e3, t3) {
    if (!e3[t3])
      throw Error(`${String(t3)} is required`);
  }
}), D = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Widget = void 0;
  var t2 = E(), n2 = re();
  function r2(e3) {
    "@babel/helpers - typeof";
    return r2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e4) {
      return typeof e4;
    } : function(e4) {
      return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol.prototype ? `symbol` : typeof e4;
    }, r2(e3);
  }
  function i2(e3, t3) {
    if (!(e3 instanceof t3))
      throw TypeError(`Cannot call a class as a function`);
  }
  function a2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, s2(r3.key), r3);
    }
  }
  function o2(e3, t3, n3) {
    return t3 && a2(e3.prototype, t3), n3 && a2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function s2(e3) {
    var t3 = c2(e3, `string`);
    return r2(t3) === `symbol` ? t3 : String(t3);
  }
  function c2(e3, t3) {
    if (r2(e3) !== `object` || e3 === null)
      return e3;
    var n3 = e3[Symbol.toPrimitive];
    if (n3 !== void 0) {
      var i3 = n3.call(e3, t3 || `default`);
      if (r2(i3) !== `object`)
        return i3;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return (t3 === `string` ? String : Number)(e3);
  }
  e2.Widget = function() {
    function e3(n3) {
      if (i2(this, e3), this.definition = n3, !this.definition)
        throw Error(`Definition is required`);
      (0, t2.assertPresent)(n3, `id`), (0, t2.assertPresent)(n3, `creatorUserId`), (0, t2.assertPresent)(n3, `type`), (0, t2.assertPresent)(n3, `url`);
    }
    return o2(e3, [{ key: `creatorUserId`, get: function() {
      return this.definition.creatorUserId;
    } }, { key: `type`, get: function() {
      return this.definition.type;
    } }, { key: `id`, get: function() {
      return this.definition.id;
    } }, { key: `name`, get: function() {
      return this.definition.name || null;
    } }, { key: `title`, get: function() {
      return this.rawData.title || null;
    } }, { key: `templateUrl`, get: function() {
      return this.definition.url;
    } }, { key: `origin`, get: function() {
      return new URL(this.templateUrl).origin;
    } }, { key: `waitForIframeLoad`, get: function() {
      return this.definition.waitForIframeLoad === false ? false : (this.definition.waitForIframeLoad, true);
    } }, { key: `rawData`, get: function() {
      return this.definition.data || {};
    } }, { key: `getCompleteUrl`, value: function(e4) {
      return (0, n2.runTemplate)(this.templateUrl, this.definition, e4);
    } }]), e3;
  }();
}), ee = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.WidgetParser = void 0;
  var t2 = D(), n2 = T();
  function r2(e3) {
    "@babel/helpers - typeof";
    return r2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e4) {
      return typeof e4;
    } : function(e4) {
      return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol.prototype ? `symbol` : typeof e4;
    }, r2(e3);
  }
  function i2(e3, t3) {
    var n3 = typeof Symbol < `u` && e3[Symbol.iterator] || e3[`@@iterator`];
    if (!n3) {
      if (Array.isArray(e3) || (n3 = a2(e3)) || t3 && e3 && typeof e3.length == `number`) {
        n3 && (e3 = n3);
        var r3 = 0, i3 = function() {
        };
        return { s: i3, n: function() {
          return r3 >= e3.length ? { done: true } : { done: false, value: e3[r3++] };
        }, e: function(e4) {
          throw e4;
        }, f: i3 };
      }
      throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var o3 = true, s3 = false, c3;
    return { s: function() {
      n3 = n3.call(e3);
    }, n: function() {
      var e4 = n3.next();
      return o3 = e4.done, e4;
    }, e: function(e4) {
      s3 = true, c3 = e4;
    }, f: function() {
      try {
        !o3 && n3.return != null && n3.return();
      } finally {
        if (s3)
          throw c3;
      }
    } };
  }
  function a2(e3, t3) {
    if (e3) {
      if (typeof e3 == `string`)
        return o2(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      if (n3 === `Object` && e3.constructor && (n3 = e3.constructor.name), n3 === `Map` || n3 === `Set`)
        return Array.from(e3);
      if (n3 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return o2(e3, t3);
    }
  }
  function o2(e3, t3) {
    (t3 == null || t3 > e3.length) && (t3 = e3.length);
    for (var n3 = 0, r3 = Array(t3); n3 < t3; n3++)
      r3[n3] = e3[n3];
    return r3;
  }
  function s2(e3, t3) {
    if (!(e3 instanceof t3))
      throw TypeError(`Cannot call a class as a function`);
  }
  function c2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, u2(r3.key), r3);
    }
  }
  function l2(e3, t3, n3) {
    return t3 && c2(e3.prototype, t3), n3 && c2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function u2(e3) {
    var t3 = d2(e3, `string`);
    return r2(t3) === `symbol` ? t3 : String(t3);
  }
  function d2(e3, t3) {
    if (r2(e3) !== `object` || e3 === null)
      return e3;
    var n3 = e3[Symbol.toPrimitive];
    if (n3 !== void 0) {
      var i3 = n3.call(e3, t3 || `default`);
      if (r2(i3) !== `object`)
        return i3;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return (t3 === `string` ? String : Number)(e3);
  }
  e2.WidgetParser = function() {
    function e3() {
      s2(this, e3);
    }
    return l2(e3, null, [{ key: `parseAccountData`, value: function(t3) {
      if (!t3)
        return [];
      for (var n3 = [], r3 = 0, i3 = Object.keys(t3); r3 < i3.length; r3++) {
        var a3 = i3[r3], o3 = t3[a3];
        if (o3 && !(o3.type !== `m.widget` && o3.type !== `im.vector.modular.widgets`) && o3.sender && (o3.state_key || o3.id) === a3) {
          var s3 = { content: o3.content, sender: o3.sender, type: `m.widget`, state_key: a3, event_id: `$example`, room_id: `!example`, origin_server_ts: 1 }, c3 = e3.parseRoomWidget(s3);
          c3 && n3.push(c3);
        }
      }
      return n3;
    } }, { key: `parseWidgetsFromRoomState`, value: function(t3) {
      if (!t3)
        return [];
      var n3 = [], r3 = i2(t3), a3;
      try {
        for (r3.s(); !(a3 = r3.n()).done; ) {
          var o3 = a3.value, s3 = e3.parseRoomWidget(o3);
          s3 && n3.push(s3);
        }
      } catch (e4) {
        r3.e(e4);
      } finally {
        r3.f();
      }
      return n3;
    } }, { key: `parseRoomWidget`, value: function(t3) {
      if (!t3 || t3.type !== `m.widget` && t3.type !== `im.vector.modular.widgets`)
        return null;
      var n3 = t3.content || {}, r3 = { id: t3.state_key, creatorUserId: n3.creatorUserId || t3.sender, name: n3.name, type: n3.type, url: n3.url, waitForIframeLoad: n3.waitForIframeLoad, data: n3.data };
      return e3.processEstimatedWidget(r3);
    } }, { key: `processEstimatedWidget`, value: function(e4) {
      return !e4.id || !e4.creatorUserId || !e4.type || !(0, n2.isValidUrl)(e4.url) ? null : new t2.Widget(e4);
    } }]), e3;
  }();
}), te = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.runTemplate = t2, e2.toString = n2;
  function t2(e3, t3, r2) {
    for (var i2 = Object.assign({}, t3.data, { matrix_room_id: r2.widgetRoomId || ``, matrix_user_id: r2.currentUserId, matrix_display_name: r2.userDisplayName || r2.currentUserId, matrix_avatar_url: r2.userHttpAvatarUrl || ``, matrix_widget_id: t3.id, "org.matrix.msc2873.client_id": r2.clientId || ``, "org.matrix.msc2873.client_theme": r2.clientTheme || ``, "org.matrix.msc2873.client_language": r2.clientLanguage || ``, "org.matrix.msc3819.matrix_device_id": r2.deviceId || ``, "org.matrix.msc4039.matrix_base_url": r2.baseUrl || `` }), a2 = e3, o2 = 0, s2 = Object.keys(i2); o2 < s2.length; o2++) {
      var c2 = s2[o2], l2 = `$${c2}`.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`), u2 = new RegExp(l2, `g`);
      a2 = a2.replace(u2, encodeURIComponent(n2(i2[c2])));
    }
    return a2;
  }
  function n2(e3) {
    return e3 == null ? `${e3}` : String(e3);
  }
}), ne = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.WidgetDriver = void 0;
  var t2 = re();
  function n2(e3) {
    "@babel/helpers - typeof";
    return n2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e4) {
      return typeof e4;
    } : function(e4) {
      return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol.prototype ? `symbol` : typeof e4;
    }, n2(e3);
  }
  function r2(e3, t3) {
    if (!(e3 instanceof t3))
      throw TypeError(`Cannot call a class as a function`);
  }
  function i2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, o2(r3.key), r3);
    }
  }
  function a2(e3, t3, n3) {
    return t3 && i2(e3.prototype, t3), n3 && i2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function o2(e3) {
    var t3 = s2(e3, `string`);
    return n2(t3) === `symbol` ? t3 : String(t3);
  }
  function s2(e3, t3) {
    if (n2(e3) !== `object` || e3 === null)
      return e3;
    var r3 = e3[Symbol.toPrimitive];
    if (r3 !== void 0) {
      var i3 = r3.call(e3, t3 || `default`);
      if (n2(i3) !== `object`)
        return i3;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return (t3 === `string` ? String : Number)(e3);
  }
  e2.WidgetDriver = function() {
    function e3() {
      r2(this, e3);
    }
    return a2(e3, [{ key: `validateCapabilities`, value: function(e4) {
      return Promise.resolve(/* @__PURE__ */ new Set());
    } }, { key: `sendEvent`, value: function(e4, t3) {
      return arguments.length > 2 && arguments[2] !== void 0 && arguments[2], arguments.length > 3 && arguments[3] !== void 0 && arguments[3], Promise.reject(Error(`Failed to override function`));
    } }, { key: `sendDelayedEvent`, value: function(e4, t3, n3, r3) {
      return arguments.length > 4 && arguments[4] !== void 0 && arguments[4], arguments.length > 5 && arguments[5] !== void 0 && arguments[5], Promise.reject(Error(`Failed to override function`));
    } }, { key: `updateDelayedEvent`, value: function(e4, t3) {
      return Promise.reject(Error(`Failed to override function`));
    } }, { key: `sendToDevice`, value: function(e4, t3, n3) {
      return Promise.reject(Error(`Failed to override function`));
    } }, { key: `readRoomAccountData`, value: function(e4) {
      return arguments.length > 1 && arguments[1] !== void 0 && arguments[1], Promise.resolve([]);
    } }, { key: `readRoomEvents`, value: function(e4, t3, n3) {
      return arguments.length > 3 && arguments[3] !== void 0 && arguments[3], arguments.length > 4 && arguments[4], Promise.resolve([]);
    } }, { key: `readStateEvents`, value: function(e4, t3, n3) {
      return arguments.length > 3 && arguments[3] !== void 0 && arguments[3], Promise.resolve([]);
    } }, { key: `readRoomTimeline`, value: function(e4, t3, n3, r3, i3, a3) {
      return r3 === void 0 ? this.readRoomEvents(t3, n3, i3, [e4], a3) : this.readStateEvents(t3, r3, i3, [e4]);
    } }, { key: `readRoomState`, value: function(e4, t3, n3) {
      return Promise.resolve([]);
    } }, { key: `readEventRelations`, value: function(e4, t3, n3, r3, i3, a3, o3, s3) {
      return Promise.resolve({ chunk: [] });
    } }, { key: `askOpenID`, value: function(e4) {
      e4.update({ state: t2.OpenIDRequestState.Blocked });
    } }, { key: `navigate`, value: function(e4) {
      throw Error(`Navigation is not implemented`);
    } }, { key: `getTurnServers`, value: function() {
      throw Error(`TURN server support is not implemented`);
    } }, { key: `searchUserDirectory`, value: function(e4, t3) {
      return Promise.resolve({ limited: false, results: [] });
    } }, { key: `getMediaConfig`, value: function() {
      throw Error(`Get media config is not implemented`);
    } }, { key: `uploadFile`, value: function(e4) {
      throw Error(`Upload file is not implemented`);
    } }, { key: `downloadFile`, value: function(e4) {
      throw Error(`Download file is not implemented`);
    } }, { key: `getKnownRooms`, value: function() {
      throw Error(`Querying known rooms is not implemented`);
    } }, { key: `processError`, value: function(e4) {
    } }]), e3;
  }();
}), re = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true });
  var t2 = _();
  Object.keys(t2).forEach(function(n3) {
    n3 === `default` || n3 === `__esModule` || n3 in e2 && e2[n3] === t2[n3] || Object.defineProperty(e2, n3, { enumerable: true, get: function() {
      return t2[n3];
    } });
  });
  var n2 = x();
  Object.keys(n2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === n2[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return n2[t3];
    } });
  });
  var r2 = g();
  Object.keys(r2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === r2[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return r2[t3];
    } });
  });
  var i2 = u();
  Object.keys(i2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === i2[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return i2[t3];
    } });
  });
  var a2 = p();
  Object.keys(a2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === a2[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return a2[t3];
    } });
  });
  var o2 = S();
  Object.keys(o2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === o2[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return o2[t3];
    } });
  });
  var s2 = d();
  Object.keys(s2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === s2[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return s2[t3];
    } });
  });
  var re2 = c();
  Object.keys(re2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === re2[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return re2[t3];
    } });
  });
  var ie = l();
  Object.keys(ie).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === ie[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return ie[t3];
    } });
  });
  var O = v();
  Object.keys(O).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === O[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return O[t3];
    } });
  });
  var ae = f();
  Object.keys(ae).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === ae[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return ae[t3];
    } });
  });
  var k = C();
  Object.keys(k).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === k[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return k[t3];
    } });
  });
  var oe = w();
  Object.keys(oe).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === oe[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return oe[t3];
    } });
  });
  var se = m();
  Object.keys(se).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === se[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return se[t3];
    } });
  });
  var ce = b();
  Object.keys(ce).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === ce[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return ce[t3];
    } });
  });
  var A = h();
  Object.keys(A).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === A[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return A[t3];
    } });
  });
  var le = T();
  Object.keys(le).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === le[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return le[t3];
    } });
  });
  var ue = E();
  Object.keys(ue).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === ue[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return ue[t3];
    } });
  });
  var de = D();
  Object.keys(de).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === de[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return de[t3];
    } });
  });
  var j = ee();
  Object.keys(j).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === j[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return j[t3];
    } });
  });
  var fe = te();
  Object.keys(fe).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === fe[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return fe[t3];
    } });
  });
  var pe = y();
  Object.keys(pe).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === pe[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return pe[t3];
    } });
  });
  var M = ne();
  Object.keys(M).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === M[t3] || Object.defineProperty(e2, t3, { enumerable: true, get: function() {
      return M[t3];
    } });
  });
});
export {
  s as n,
  o as r,
  re as t
};
