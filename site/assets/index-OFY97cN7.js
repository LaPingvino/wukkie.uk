function Rs(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r) if (i !== "default" && !(i in e)) {
        const o = Object.getOwnPropertyDescriptor(r, i);
        o && Object.defineProperty(e, i, o.get ? o : { enumerable: true, get: () => r[i] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i) if (o.type === "childList") for (const l of o.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: true, subtree: true });
  function n(i) {
    const o = {};
    return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function r(i) {
    if (i.ep) return;
    i.ep = true;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var yh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function la(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function gh(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : { enumerable: true, get: function() {
      return e[r];
    } });
  }), n;
}
var Os = { exports: {} }, vo = {}, Ds = { exports: {} }, ue = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var oi = Symbol.for("react.element"), qf = Symbol.for("react.portal"), ed = Symbol.for("react.fragment"), td = Symbol.for("react.strict_mode"), nd = Symbol.for("react.profiler"), rd = Symbol.for("react.provider"), id = Symbol.for("react.context"), od = Symbol.for("react.forward_ref"), ld = Symbol.for("react.suspense"), ad = Symbol.for("react.memo"), ud = Symbol.for("react.lazy"), lu = Symbol.iterator;
function sd(e) {
  return e === null || typeof e != "object" ? null : (e = lu && e[lu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var As = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ms = Object.assign, bs = {};
function ar(e, t, n) {
  this.props = e, this.context = t, this.refs = bs, this.updater = n || As;
}
ar.prototype.isReactComponent = {};
ar.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ar.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ls() {
}
Ls.prototype = ar.prototype;
function aa(e, t, n) {
  this.props = e, this.context = t, this.refs = bs, this.updater = n || As;
}
var ua = aa.prototype = new Ls();
ua.constructor = aa;
Ms(ua, ar.prototype);
ua.isPureReactComponent = true;
var au = Array.isArray, Is = Object.prototype.hasOwnProperty, sa = { current: null }, js = { key: true, ref: true, __self: true, __source: true };
function Ws(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) Is.call(t, r) && !js.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    i.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) i[r] === void 0 && (i[r] = u[r]);
  return { $$typeof: oi, type: e, key: o, ref: l, props: i, _owner: sa.current };
}
function cd(e, t) {
  return { $$typeof: oi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ca(e) {
  return typeof e == "object" && e !== null && e.$$typeof === oi;
}
function fd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var uu = /\/+/g;
function Fo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? fd("" + e.key) : t.toString(36);
}
function Ai(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = false;
  if (e === null) l = true;
  else switch (o) {
    case "string":
    case "number":
      l = true;
      break;
    case "object":
      switch (e.$$typeof) {
        case oi:
        case qf:
          l = true;
      }
  }
  if (l) return l = e, i = i(l), e = r === "" ? "." + Fo(l, 0) : r, au(i) ? (n = "", e != null && (n = e.replace(uu, "$&/") + "/"), Ai(i, t, n, "", function(f) {
    return f;
  })) : i != null && (ca(i) && (i = cd(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(uu, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", au(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + Fo(o, u);
    l += Ai(o, t, n, s, i);
  }
  else if (s = sd(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Fo(o, u++), l += Ai(o, t, n, s, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function pi(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ai(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function dd(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ge = { current: null }, Mi = { transition: null }, pd = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: Mi, ReactCurrentOwner: sa };
ue.Children = { map: pi, forEach: function(e, t, n) {
  pi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return pi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return pi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ca(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ue.Component = ar;
ue.Fragment = ed;
ue.Profiler = nd;
ue.PureComponent = aa;
ue.StrictMode = td;
ue.Suspense = ld;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pd;
ue.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ms({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = sa.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) Is.call(t, s) && !js.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: oi, type: e.type, key: i, ref: o, props: r, _owner: l };
};
ue.createContext = function(e) {
  return e = { $$typeof: id, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: rd, _context: e }, e.Consumer = e;
};
ue.createElement = Ws;
ue.createFactory = function(e) {
  var t = Ws.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: od, render: e };
};
ue.isValidElement = ca;
ue.lazy = function(e) {
  return { $$typeof: ud, _payload: { _status: -1, _result: e }, _init: dd };
};
ue.memo = function(e, t) {
  return { $$typeof: ad, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function(e) {
  var t = Mi.transition;
  Mi.transition = {};
  try {
    e();
  } finally {
    Mi.transition = t;
  }
};
ue.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
ue.useCallback = function(e, t) {
  return Ge.current.useCallback(e, t);
};
ue.useContext = function(e) {
  return Ge.current.useContext(e);
};
ue.useDebugValue = function() {
};
ue.useDeferredValue = function(e) {
  return Ge.current.useDeferredValue(e);
};
ue.useEffect = function(e, t) {
  return Ge.current.useEffect(e, t);
};
ue.useId = function() {
  return Ge.current.useId();
};
ue.useImperativeHandle = function(e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
ue.useInsertionEffect = function(e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
ue.useLayoutEffect = function(e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
ue.useMemo = function(e, t) {
  return Ge.current.useMemo(e, t);
};
ue.useReducer = function(e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
ue.useRef = function(e) {
  return Ge.current.useRef(e);
};
ue.useState = function(e) {
  return Ge.current.useState(e);
};
ue.useSyncExternalStore = function(e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
ue.useTransition = function() {
  return Ge.current.useTransition();
};
ue.version = "18.2.0";
Ds.exports = ue;
var ho = Ds.exports;
const vd = la(ho), wh = Rs({ __proto__: null, default: vd }, [ho]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var hd = ho, md = Symbol.for("react.element"), yd = Symbol.for("react.fragment"), gd = Object.prototype.hasOwnProperty, wd = hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Sd = { key: true, ref: true, __self: true, __source: true };
function Ns(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) gd.call(t, r) && !Sd.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: md, type: e, key: o, ref: l, props: i, _owner: wd.current };
}
vo.Fragment = yd;
vo.jsx = Ns;
vo.jsxs = Ns;
Os.exports = vo;
var Sh = Os.exports, Us = { exports: {} }, at = {}, Fs = { exports: {} }, zs = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e) {
  function t(H, te) {
    var ne = H.length;
    H.push(te);
    e: for (; 0 < ne; ) {
      var ve = ne - 1 >>> 1, se = H[ve];
      if (0 < i(se, te)) H[ve] = te, H[ne] = se, ne = ve;
      else break e;
    }
  }
  function n(H) {
    return H.length === 0 ? null : H[0];
  }
  function r(H) {
    if (H.length === 0) return null;
    var te = H[0], ne = H.pop();
    if (ne !== te) {
      H[0] = ne;
      e: for (var ve = 0, se = H.length, At = se >>> 1; ve < At; ) {
        var N = 2 * (ve + 1) - 1, B = H[N], g = N + 1, v = H[g];
        if (0 > i(B, ne)) g < se && 0 > i(v, B) ? (H[ve] = v, H[g] = ne, ve = g) : (H[ve] = B, H[N] = ne, ve = N);
        else if (g < se && 0 > i(v, ne)) H[ve] = v, H[g] = ne, ve = g;
        else break e;
      }
    }
    return te;
  }
  function i(H, te) {
    var ne = H.sortIndex - te.sortIndex;
    return ne !== 0 ? ne : H.id - te.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var s = [], f = [], S = 1, C = null, m = 3, M = false, P = false, L = false, ee = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _(H) {
    for (var te = n(f); te !== null; ) {
      if (te.callback === null) r(f);
      else if (te.startTime <= H) r(f), te.sortIndex = te.expirationTime, t(s, te);
      else break;
      te = n(f);
    }
  }
  function I(H) {
    if (L = false, _(H), !P) if (n(s) !== null) P = true, et(W);
    else {
      var te = n(f);
      te !== null && $e(I, te.startTime - H);
    }
  }
  function W(H, te) {
    P = false, L && (L = false, k(d), d = -1), M = true;
    var ne = m;
    try {
      for (_(te), C = n(s); C !== null && (!(C.expirationTime > te) || H && !ie()); ) {
        var ve = C.callback;
        if (typeof ve == "function") {
          C.callback = null, m = C.priorityLevel;
          var se = ve(C.expirationTime <= te);
          te = e.unstable_now(), typeof se == "function" ? C.callback = se : C === n(s) && r(s), _(te);
        } else r(s);
        C = n(s);
      }
      if (C !== null) var At = true;
      else {
        var N = n(f);
        N !== null && $e(I, N.startTime - te), At = false;
      }
      return At;
    } finally {
      C = null, m = ne, M = false;
    }
  }
  var b = false, O = null, d = -1, F = 5, Q = -1;
  function ie() {
    return !(e.unstable_now() - Q < F);
  }
  function pe() {
    if (O !== null) {
      var H = e.unstable_now();
      Q = H;
      var te = true;
      try {
        te = O(true, H);
      } finally {
        te ? re() : (b = false, O = null);
      }
    } else b = false;
  }
  var re;
  if (typeof h == "function") re = function() {
    h(pe);
  };
  else if (typeof MessageChannel < "u") {
    var Ue = new MessageChannel(), fe = Ue.port2;
    Ue.port1.onmessage = pe, re = function() {
      fe.postMessage(null);
    };
  } else re = function() {
    ee(pe, 0);
  };
  function et(H) {
    O = H, b || (b = true, re());
  }
  function $e(H, te) {
    d = ee(function() {
      H(e.unstable_now());
    }, te);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(H) {
    H.callback = null;
  }, e.unstable_continueExecution = function() {
    P || M || (P = true, et(W));
  }, e.unstable_forceFrameRate = function(H) {
    0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < H ? Math.floor(1e3 / H) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(H) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var te = 3;
        break;
      default:
        te = m;
    }
    var ne = m;
    m = te;
    try {
      return H();
    } finally {
      m = ne;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(H, te) {
    switch (H) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        H = 3;
    }
    var ne = m;
    m = H;
    try {
      return te();
    } finally {
      m = ne;
    }
  }, e.unstable_scheduleCallback = function(H, te, ne) {
    var ve = e.unstable_now();
    switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? ve + ne : ve) : ne = ve, H) {
      case 1:
        var se = -1;
        break;
      case 2:
        se = 250;
        break;
      case 5:
        se = 1073741823;
        break;
      case 4:
        se = 1e4;
        break;
      default:
        se = 5e3;
    }
    return se = ne + se, H = { id: S++, callback: te, priorityLevel: H, startTime: ne, expirationTime: se, sortIndex: -1 }, ne > ve ? (H.sortIndex = ne, t(f, H), n(s) === null && H === n(f) && (L ? (k(d), d = -1) : L = true, $e(I, ne - ve))) : (H.sortIndex = se, t(s, H), P || M || (P = true, et(W))), H;
  }, e.unstable_shouldYield = ie, e.unstable_wrapCallback = function(H) {
    var te = m;
    return function() {
      var ne = m;
      m = te;
      try {
        return H.apply(this, arguments);
      } finally {
        m = ne;
      }
    };
  };
})(zs);
Fs.exports = zs;
var Ed = Fs.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var xs = ho, lt = Ed;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Vs = /* @__PURE__ */ new Set(), zr = {};
function An(e, t) {
  er(e, t), er(e + "Capture", t);
}
function er(e, t) {
  for (zr[e] = t, e = 0; e < t.length; e++) Vs.add(t[e]);
}
var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), dl = Object.prototype.hasOwnProperty, kd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, su = {}, cu = {};
function _d(e) {
  return dl.call(cu, e) ? true : dl.call(su, e) ? false : kd.test(e) ? cu[e] = true : (su[e] = true, false);
}
function Cd(e, t, n, r) {
  if (n !== null && n.type === 0) return false;
  switch (typeof t) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return false;
  }
}
function Pd(e, t, n, r) {
  if (t === null || typeof t > "u" || Cd(e, t, n, r)) return true;
  if (r) return false;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === false;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return false;
}
function Ke(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ne[e] = new Ke(e, 0, false, e, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ne[t] = new Ke(t, 1, false, e[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ne[e] = new Ke(e, 2, false, e.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ne[e] = new Ke(e, 2, false, e, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ne[e] = new Ke(e, 3, false, e.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ne[e] = new Ke(e, 3, true, e, null, false, false);
});
["capture", "download"].forEach(function(e) {
  Ne[e] = new Ke(e, 4, false, e, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ne[e] = new Ke(e, 6, false, e, null, false, false);
});
["rowSpan", "start"].forEach(function(e) {
  Ne[e] = new Ke(e, 5, false, e.toLowerCase(), null, false, false);
});
var fa = /[\-:]([a-z])/g;
function da(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(fa, da);
  Ne[t] = new Ke(t, 1, false, e, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(fa, da);
  Ne[t] = new Ke(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(fa, da);
  Ne[t] = new Ke(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ne[e] = new Ke(e, 1, false, e.toLowerCase(), null, false, false);
});
Ne.xlinkHref = new Ke("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ne[e] = new Ke(e, 1, false, e.toLowerCase(), null, true, true);
});
function pa(e, t, n, r) {
  var i = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Pd(t, n, i, r) && (n = null), r || i === null ? _d(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? false : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Bt = xs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vi = Symbol.for("react.element"), jn = Symbol.for("react.portal"), Wn = Symbol.for("react.fragment"), va = Symbol.for("react.strict_mode"), pl = Symbol.for("react.profiler"), Bs = Symbol.for("react.provider"), Hs = Symbol.for("react.context"), ha = Symbol.for("react.forward_ref"), vl = Symbol.for("react.suspense"), hl = Symbol.for("react.suspense_list"), ma = Symbol.for("react.memo"), Kt = Symbol.for("react.lazy"), Qs = Symbol.for("react.offscreen"), fu = Symbol.iterator;
function pr(e) {
  return e === null || typeof e != "object" ? null : (e = fu && e[fu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Te = Object.assign, zo;
function Tr(e) {
  if (zo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    zo = t && t[1] || "";
  }
  return `
` + zo + e;
}
var xo = false;
function Vo(e, t) {
  if (!e || xo) return "";
  xo = true;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (f) {
        var r = f;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (f) {
        r = f;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var i = f.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, u = o.length - 1; 1 <= l && 0 <= u && i[l] !== o[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (i[l] !== o[u]) {
        if (l !== 1 || u !== 1) do
          if (l--, u--, 0 > u || i[l] !== o[u]) {
            var s = `
` + i[l].replace(" at new ", " at ");
            return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
          }
        while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    xo = false, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Tr(e) : "";
}
function Td(e) {
  switch (e.tag) {
    case 5:
      return Tr(e.type);
    case 16:
      return Tr("Lazy");
    case 13:
      return Tr("Suspense");
    case 19:
      return Tr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Vo(e.type, false), e;
    case 11:
      return e = Vo(e.type.render, false), e;
    case 1:
      return e = Vo(e.type, true), e;
    default:
      return "";
  }
}
function ml(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wn:
      return "Fragment";
    case jn:
      return "Portal";
    case pl:
      return "Profiler";
    case va:
      return "StrictMode";
    case vl:
      return "Suspense";
    case hl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Hs:
      return (e.displayName || "Context") + ".Consumer";
    case Bs:
      return (e._context.displayName || "Context") + ".Provider";
    case ha:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ma:
      return t = e.displayName || null, t !== null ? t : ml(e.type) || "Memo";
    case Kt:
      t = e._payload, e = e._init;
      try {
        return ml(e(t));
      } catch {
      }
  }
  return null;
}
function Rd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ml(t);
    case 8:
      return t === va ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Gs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Od(e) {
  var t = Gs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: true, get: function() {
      return i.call(this);
    }, set: function(l) {
      r = "" + l, o.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function hi(e) {
  e._valueTracker || (e._valueTracker = Od(e));
}
function Ks(e) {
  if (!e) return false;
  var t = e._valueTracker;
  if (!t) return true;
  var n = t.getValue(), r = "";
  return e && (r = Gs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
}
function Bi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yl(e, t) {
  var n = t.checked;
  return Te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function du(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = un(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function $s(e, t) {
  t = t.checked, t != null && pa(e, "checked", t, false);
}
function gl(e, t) {
  $s(e, t);
  var n = un(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? wl(e, t.type, n) : t.hasOwnProperty("defaultValue") && wl(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function pu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function wl(e, t, n) {
  (t !== "number" || Bi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rr = Array.isArray;
function Kn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = true;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = true);
  } else {
    for (n = "" + un(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = true, r && (e[i].defaultSelected = true);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = true);
  }
}
function Sl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return Te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function vu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(V(92));
      if (Rr(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: un(n) };
}
function Ys(e, t) {
  var n = un(t.value), r = un(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function hu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function El(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Xs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var mi, Zs = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (mi = mi || document.createElement("div"), mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mr = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Dd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function(e) {
  Dd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Mr[t] = Mr[e];
  });
});
function Js(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mr.hasOwnProperty(e) && Mr[e] ? ("" + t).trim() : t + "px";
}
function qs(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Js(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Ad = Te({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function kl(e, t) {
  if (t) {
    if (Ad[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function _l(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var Cl = null;
function ya(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Pl = null, $n = null, Yn = null;
function mu(e) {
  if (e = ui(e)) {
    if (typeof Pl != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = So(t), Pl(e.stateNode, e.type, t));
  }
}
function ec(e) {
  $n ? Yn ? Yn.push(e) : Yn = [e] : $n = e;
}
function tc() {
  if ($n) {
    var e = $n, t = Yn;
    if (Yn = $n = null, mu(e), t) for (e = 0; e < t.length; e++) mu(t[e]);
  }
}
function nc(e, t) {
  return e(t);
}
function rc() {
}
var Bo = false;
function ic(e, t, n) {
  if (Bo) return e(t, n);
  Bo = true;
  try {
    return nc(e, t, n);
  } finally {
    Bo = false, ($n !== null || Yn !== null) && (rc(), tc());
  }
}
function Vr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = So(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = false;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(V(231, t, typeof n));
  return n;
}
var Tl = false;
if (Ft) try {
  var vr = {};
  Object.defineProperty(vr, "passive", { get: function() {
    Tl = true;
  } }), window.addEventListener("test", vr, vr), window.removeEventListener("test", vr, vr);
} catch {
  Tl = false;
}
function Md(e, t, n, r, i, o, l, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (S) {
    this.onError(S);
  }
}
var br = false, Hi = null, Qi = false, Rl = null, bd = { onError: function(e) {
  br = true, Hi = e;
} };
function Ld(e, t, n, r, i, o, l, u, s) {
  br = false, Hi = null, Md.apply(bd, arguments);
}
function Id(e, t, n, r, i, o, l, u, s) {
  if (Ld.apply(this, arguments), br) {
    if (br) {
      var f = Hi;
      br = false, Hi = null;
    } else throw Error(V(198));
    Qi || (Qi = true, Rl = f);
  }
}
function Mn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function oc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function yu(e) {
  if (Mn(e) !== e) throw Error(V(188));
}
function jd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mn(e), t === null) throw Error(V(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return yu(i), e;
        if (o === r) return yu(i), t;
        o = o.sibling;
      }
      throw Error(V(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var l = false, u = i.child; u; ) {
        if (u === n) {
          l = true, n = i, r = o;
          break;
        }
        if (u === r) {
          l = true, r = i, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = o.child; u; ) {
          if (u === n) {
            l = true, n = o, r = i;
            break;
          }
          if (u === r) {
            l = true, r = o, n = i;
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(V(189));
      }
    }
    if (n.alternate !== r) throw Error(V(190));
  }
  if (n.tag !== 3) throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function lc(e) {
  return e = jd(e), e !== null ? ac(e) : null;
}
function ac(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ac(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var uc = lt.unstable_scheduleCallback, gu = lt.unstable_cancelCallback, Wd = lt.unstable_shouldYield, Nd = lt.unstable_requestPaint, De = lt.unstable_now, Ud = lt.unstable_getCurrentPriorityLevel, ga = lt.unstable_ImmediatePriority, sc = lt.unstable_UserBlockingPriority, Gi = lt.unstable_NormalPriority, Fd = lt.unstable_LowPriority, cc = lt.unstable_IdlePriority, mo = null, Tt = null;
function zd(e) {
  if (Tt && typeof Tt.onCommitFiberRoot == "function") try {
    Tt.onCommitFiberRoot(mo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var St = Math.clz32 ? Math.clz32 : Bd, xd = Math.log, Vd = Math.LN2;
function Bd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (xd(e) / Vd | 0) | 0;
}
var yi = 64, gi = 4194304;
function Or(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ki(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~i;
    u !== 0 ? r = Or(u) : (o &= l, o !== 0 && (r = Or(o)));
  } else l = n & ~i, l !== 0 ? r = Or(l) : o !== 0 && (r = Or(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - St(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Hd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Qd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - St(o), u = 1 << l, s = i[l];
    s === -1 ? (!(u & n) || u & r) && (i[l] = Hd(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Ol(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function fc() {
  var e = yi;
  return yi <<= 1, !(yi & 4194240) && (yi = 64), e;
}
function Ho(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function li(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
}
function Gd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - St(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function wa(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var he = 0;
function dc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var pc, Sa, vc, hc, mc, Dl = false, wi = [], qt = null, en = null, tn = null, Br = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), Yt = [], Kd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function wu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qt = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      Br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hr.delete(t.pointerId);
  }
}
function hr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = ui(t), t !== null && Sa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function $d(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return qt = hr(qt, e, t, n, r, i), true;
    case "dragenter":
      return en = hr(en, e, t, n, r, i), true;
    case "mouseover":
      return tn = hr(tn, e, t, n, r, i), true;
    case "pointerover":
      var o = i.pointerId;
      return Br.set(o, hr(Br.get(o) || null, e, t, n, r, i)), true;
    case "gotpointercapture":
      return o = i.pointerId, Hr.set(o, hr(Hr.get(o) || null, e, t, n, r, i)), true;
  }
  return false;
}
function yc(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = oc(n), t !== null) {
          e.blockedOn = t, mc(e.priority, function() {
            vc(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function bi(e) {
  if (e.blockedOn !== null) return false;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Cl = r, n.target.dispatchEvent(r), Cl = null;
    } else return t = ui(n), t !== null && Sa(t), e.blockedOn = n, false;
    t.shift();
  }
  return true;
}
function Su(e, t, n) {
  bi(e) && n.delete(t);
}
function Yd() {
  Dl = false, qt !== null && bi(qt) && (qt = null), en !== null && bi(en) && (en = null), tn !== null && bi(tn) && (tn = null), Br.forEach(Su), Hr.forEach(Su);
}
function mr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Dl || (Dl = true, lt.unstable_scheduleCallback(lt.unstable_NormalPriority, Yd)));
}
function Qr(e) {
  function t(i) {
    return mr(i, e);
  }
  if (0 < wi.length) {
    mr(wi[0], e);
    for (var n = 1; n < wi.length; n++) {
      var r = wi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (qt !== null && mr(qt, e), en !== null && mr(en, e), tn !== null && mr(tn, e), Br.forEach(t), Hr.forEach(t), n = 0; n < Yt.length; n++) r = Yt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yt.length && (n = Yt[0], n.blockedOn === null); ) yc(n), n.blockedOn === null && Yt.shift();
}
var Xn = Bt.ReactCurrentBatchConfig, $i = true;
function Xd(e, t, n, r) {
  var i = he, o = Xn.transition;
  Xn.transition = null;
  try {
    he = 1, Ea(e, t, n, r);
  } finally {
    he = i, Xn.transition = o;
  }
}
function Zd(e, t, n, r) {
  var i = he, o = Xn.transition;
  Xn.transition = null;
  try {
    he = 4, Ea(e, t, n, r);
  } finally {
    he = i, Xn.transition = o;
  }
}
function Ea(e, t, n, r) {
  if ($i) {
    var i = Al(e, t, n, r);
    if (i === null) el(e, t, r, Yi, n), wu(e, r);
    else if ($d(i, e, t, n, r)) r.stopPropagation();
    else if (wu(e, r), t & 4 && -1 < Kd.indexOf(e)) {
      for (; i !== null; ) {
        var o = ui(i);
        if (o !== null && pc(o), o = Al(e, t, n, r), o === null && el(e, t, r, Yi, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else el(e, t, r, null, n);
  }
}
var Yi = null;
function Al(e, t, n, r) {
  if (Yi = null, e = ya(r), e = Sn(e), e !== null) if (t = Mn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = oc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Yi = e, null;
}
function gc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ud()) {
        case ga:
          return 1;
        case sc:
          return 4;
        case Gi:
        case Fd:
          return 16;
        case cc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zt = null, ka = null, Li = null;
function wc() {
  if (Li) return Li;
  var e, t = ka, n = t.length, r, i = "value" in Zt ? Zt.value : Zt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++) ;
  return Li = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Ii(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Si() {
  return true;
}
function Eu() {
  return false;
}
function ut(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? Si : Eu, this.isPropagationStopped = Eu, this;
  }
  return Te(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Si);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Si);
  }, persist: function() {
  }, isPersistent: Si }), t;
}
var ur = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _a = ut(ur), ai = Te({}, ur, { view: 0, detail: 0 }), Jd = ut(ai), Qo, Go, yr, yo = Te({}, ai, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ca, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== yr && (yr && e.type === "mousemove" ? (Qo = e.screenX - yr.screenX, Go = e.screenY - yr.screenY) : Go = Qo = 0, yr = e), Qo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Go;
} }), ku = ut(yo), qd = Te({}, yo, { dataTransfer: 0 }), ep = ut(qd), tp = Te({}, ai, { relatedTarget: 0 }), Ko = ut(tp), np = Te({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rp = ut(np), ip = Te({}, ur, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), op = ut(ip), lp = Te({}, ur, { data: 0 }), _u = ut(lp), ap = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, up = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, sp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function cp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sp[e]) ? !!t[e] : false;
}
function Ca() {
  return cp;
}
var fp = Te({}, ai, { key: function(e) {
  if (e.key) {
    var t = ap[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ii(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? up[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ca, charCode: function(e) {
  return e.type === "keypress" ? Ii(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ii(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), dp = ut(fp), pp = Te({}, yo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cu = ut(pp), vp = Te({}, ai, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ca }), hp = ut(vp), mp = Te({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yp = ut(mp), gp = Te({}, yo, { deltaX: function(e) {
  return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
}, deltaY: function(e) {
  return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), wp = ut(gp), Sp = [9, 13, 27, 32], Pa = Ft && "CompositionEvent" in window, Lr = null;
Ft && "documentMode" in document && (Lr = document.documentMode);
var Ep = Ft && "TextEvent" in window && !Lr, Sc = Ft && (!Pa || Lr && 8 < Lr && 11 >= Lr), Pu = " ", Tu = false;
function Ec(e, t) {
  switch (e) {
    case "keyup":
      return Sp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function kc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Nn = false;
function kp(e, t) {
  switch (e) {
    case "compositionend":
      return kc(t);
    case "keypress":
      return t.which !== 32 ? null : (Tu = true, Pu);
    case "textInput":
      return e = t.data, e === Pu && Tu ? null : e;
    default:
      return null;
  }
}
function _p(e, t) {
  if (Nn) return e === "compositionend" || !Pa && Ec(e, t) ? (e = wc(), Li = ka = Zt = null, Nn = false, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Sc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cp = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cp[e.type] : t === "textarea";
}
function _c(e, t, n, r) {
  ec(r), t = Xi(t, "onChange"), 0 < t.length && (n = new _a("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ir = null, Gr = null;
function Pp(e) {
  Ic(e, 0);
}
function go(e) {
  var t = zn(e);
  if (Ks(t)) return e;
}
function Tp(e, t) {
  if (e === "change") return t;
}
var Cc = false;
if (Ft) {
  var $o;
  if (Ft) {
    var Yo = "oninput" in document;
    if (!Yo) {
      var Ou = document.createElement("div");
      Ou.setAttribute("oninput", "return;"), Yo = typeof Ou.oninput == "function";
    }
    $o = Yo;
  } else $o = false;
  Cc = $o && (!document.documentMode || 9 < document.documentMode);
}
function Du() {
  Ir && (Ir.detachEvent("onpropertychange", Pc), Gr = Ir = null);
}
function Pc(e) {
  if (e.propertyName === "value" && go(Gr)) {
    var t = [];
    _c(t, Gr, e, ya(e)), ic(Pp, t);
  }
}
function Rp(e, t, n) {
  e === "focusin" ? (Du(), Ir = t, Gr = n, Ir.attachEvent("onpropertychange", Pc)) : e === "focusout" && Du();
}
function Op(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return go(Gr);
}
function Dp(e, t) {
  if (e === "click") return go(t);
}
function Ap(e, t) {
  if (e === "input" || e === "change") return go(t);
}
function Mp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var kt = typeof Object.is == "function" ? Object.is : Mp;
function Kr(e, t) {
  if (kt(e, t)) return true;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!dl.call(t, i) || !kt(e[i], t[i])) return false;
  }
  return true;
}
function Au(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mu(e, t) {
  var n = Au(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Au(n);
  }
}
function Tc(e, t) {
  return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Tc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
}
function Rc() {
  for (var e = window, t = Bi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = false;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Bi(e.document);
  }
  return t;
}
function Ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function bp(e) {
  var t = Rc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Tc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ta(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Mu(n, o);
        var l = Mu(n, r);
        i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Lp = Ft && "documentMode" in document && 11 >= document.documentMode, Un = null, Ml = null, jr = null, bl = false;
function bu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bl || Un == null || Un !== Bi(r) || (r = Un, "selectionStart" in r && Ta(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), jr && Kr(jr, r) || (jr = r, r = Xi(Ml, "onSelect"), 0 < r.length && (t = new _a("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Un)));
}
function Ei(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Fn = { animationend: Ei("Animation", "AnimationEnd"), animationiteration: Ei("Animation", "AnimationIteration"), animationstart: Ei("Animation", "AnimationStart"), transitionend: Ei("Transition", "TransitionEnd") }, Xo = {}, Oc = {};
Ft && (Oc = document.createElement("div").style, "AnimationEvent" in window || (delete Fn.animationend.animation, delete Fn.animationiteration.animation, delete Fn.animationstart.animation), "TransitionEvent" in window || delete Fn.transitionend.transition);
function wo(e) {
  if (Xo[e]) return Xo[e];
  if (!Fn[e]) return e;
  var t = Fn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Oc) return Xo[e] = t[n];
  return e;
}
var Dc = wo("animationend"), Ac = wo("animationiteration"), Mc = wo("animationstart"), bc = wo("transitionend"), Lc = /* @__PURE__ */ new Map(), Lu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fn(e, t) {
  Lc.set(e, t), An(t, [e]);
}
for (var Zo = 0; Zo < Lu.length; Zo++) {
  var Jo = Lu[Zo], Ip = Jo.toLowerCase(), jp = Jo[0].toUpperCase() + Jo.slice(1);
  fn(Ip, "on" + jp);
}
fn(Dc, "onAnimationEnd");
fn(Ac, "onAnimationIteration");
fn(Mc, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(bc, "onTransitionEnd");
er("onMouseEnter", ["mouseout", "mouseover"]);
er("onMouseLeave", ["mouseout", "mouseover"]);
er("onPointerEnter", ["pointerout", "pointerover"]);
er("onPointerLeave", ["pointerout", "pointerover"]);
An("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
An("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
An("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
An("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
An("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
function Iu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Id(r, t, void 0, e), e.currentTarget = null;
}
function Ic(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== o && i.isPropagationStopped()) break e;
        Iu(i, u, f), o = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, f = u.currentTarget, u = u.listener, s !== o && i.isPropagationStopped()) break e;
        Iu(i, u, f), o = s;
      }
    }
  }
  if (Qi) throw e = Rl, Qi = false, Rl = null, e;
}
function ge(e, t) {
  var n = t[Nl];
  n === void 0 && (n = t[Nl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (jc(t, e, 2, false), n.add(r));
}
function qo(e, t, n) {
  var r = 0;
  t && (r |= 4), jc(n, e, r, t);
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
  if (!e[ki]) {
    e[ki] = true, Vs.forEach(function(n) {
      n !== "selectionchange" && (Wp.has(n) || qo(n, false, e), qo(n, true, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ki] || (t[ki] = true, qo("selectionchange", false, t));
  }
}
function jc(e, t, n, r) {
  switch (gc(t)) {
    case 1:
      var i = Xd;
      break;
    case 4:
      i = Zd;
      break;
    default:
      i = Ea;
  }
  n = i.bind(null, t, n, e), i = void 0, !Tl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = true), r ? i !== void 0 ? e.addEventListener(t, n, { capture: true, passive: i }) : e.addEventListener(t, n, true) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, false);
}
function el(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var u = r.stateNode.containerInfo;
      if (u === i || u.nodeType === 8 && u.parentNode === i) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var s = l.tag;
        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === i || s.nodeType === 8 && s.parentNode === i)) return;
        l = l.return;
      }
      for (; u !== null; ) {
        if (l = Sn(u), l === null) return;
        if (s = l.tag, s === 5 || s === 6) {
          r = o = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  ic(function() {
    var f = o, S = ya(n), C = [];
    e: {
      var m = Lc.get(e);
      if (m !== void 0) {
        var M = _a, P = e;
        switch (e) {
          case "keypress":
            if (Ii(n) === 0) break e;
          case "keydown":
          case "keyup":
            M = dp;
            break;
          case "focusin":
            P = "focus", M = Ko;
            break;
          case "focusout":
            P = "blur", M = Ko;
            break;
          case "beforeblur":
          case "afterblur":
            M = Ko;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            M = ku;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            M = ep;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            M = hp;
            break;
          case Dc:
          case Ac:
          case Mc:
            M = rp;
            break;
          case bc:
            M = yp;
            break;
          case "scroll":
            M = Jd;
            break;
          case "wheel":
            M = wp;
            break;
          case "copy":
          case "cut":
          case "paste":
            M = op;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            M = Cu;
        }
        var L = (t & 4) !== 0, ee = !L && e === "scroll", k = L ? m !== null ? m + "Capture" : null : m;
        L = [];
        for (var h = f, _; h !== null; ) {
          _ = h;
          var I = _.stateNode;
          if (_.tag === 5 && I !== null && (_ = I, k !== null && (I = Vr(h, k), I != null && L.push(Yr(h, I, _)))), ee) break;
          h = h.return;
        }
        0 < L.length && (m = new M(m, P, null, n, S), C.push({ event: m, listeners: L }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", m && n !== Cl && (P = n.relatedTarget || n.fromElement) && (Sn(P) || P[zt])) break e;
        if ((M || m) && (m = S.window === S ? S : (m = S.ownerDocument) ? m.defaultView || m.parentWindow : window, M ? (P = n.relatedTarget || n.toElement, M = f, P = P ? Sn(P) : null, P !== null && (ee = Mn(P), P !== ee || P.tag !== 5 && P.tag !== 6) && (P = null)) : (M = null, P = f), M !== P)) {
          if (L = ku, I = "onMouseLeave", k = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (L = Cu, I = "onPointerLeave", k = "onPointerEnter", h = "pointer"), ee = M == null ? m : zn(M), _ = P == null ? m : zn(P), m = new L(I, h + "leave", M, n, S), m.target = ee, m.relatedTarget = _, I = null, Sn(S) === f && (L = new L(k, h + "enter", P, n, S), L.target = _, L.relatedTarget = ee, I = L), ee = I, M && P) t: {
            for (L = M, k = P, h = 0, _ = L; _; _ = In(_)) h++;
            for (_ = 0, I = k; I; I = In(I)) _++;
            for (; 0 < h - _; ) L = In(L), h--;
            for (; 0 < _ - h; ) k = In(k), _--;
            for (; h--; ) {
              if (L === k || k !== null && L === k.alternate) break t;
              L = In(L), k = In(k);
            }
            L = null;
          }
          else L = null;
          M !== null && ju(C, m, M, L, false), P !== null && ee !== null && ju(C, ee, P, L, true);
        }
      }
      e: {
        if (m = f ? zn(f) : window, M = m.nodeName && m.nodeName.toLowerCase(), M === "select" || M === "input" && m.type === "file") var W = Tp;
        else if (Ru(m)) if (Cc) W = Ap;
        else {
          W = Op;
          var b = Rp;
        }
        else (M = m.nodeName) && M.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (W = Dp);
        if (W && (W = W(e, f))) {
          _c(C, W, n, S);
          break e;
        }
        b && b(e, m, f), e === "focusout" && (b = m._wrapperState) && b.controlled && m.type === "number" && wl(m, "number", m.value);
      }
      switch (b = f ? zn(f) : window, e) {
        case "focusin":
          (Ru(b) || b.contentEditable === "true") && (Un = b, Ml = f, jr = null);
          break;
        case "focusout":
          jr = Ml = Un = null;
          break;
        case "mousedown":
          bl = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          bl = false, bu(C, n, S);
          break;
        case "selectionchange":
          if (Lp) break;
        case "keydown":
        case "keyup":
          bu(C, n, S);
      }
      var O;
      if (Pa) e: {
        switch (e) {
          case "compositionstart":
            var d = "onCompositionStart";
            break e;
          case "compositionend":
            d = "onCompositionEnd";
            break e;
          case "compositionupdate":
            d = "onCompositionUpdate";
            break e;
        }
        d = void 0;
      }
      else Nn ? Ec(e, n) && (d = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (d = "onCompositionStart");
      d && (Sc && n.locale !== "ko" && (Nn || d !== "onCompositionStart" ? d === "onCompositionEnd" && Nn && (O = wc()) : (Zt = S, ka = "value" in Zt ? Zt.value : Zt.textContent, Nn = true)), b = Xi(f, d), 0 < b.length && (d = new _u(d, e, null, n, S), C.push({ event: d, listeners: b }), O ? d.data = O : (O = kc(n), O !== null && (d.data = O)))), (O = Ep ? kp(e, n) : _p(e, n)) && (f = Xi(f, "onBeforeInput"), 0 < f.length && (S = new _u("onBeforeInput", "beforeinput", null, n, S), C.push({ event: S, listeners: f }), S.data = O));
    }
    Ic(C, t);
  });
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Vr(e, n), o != null && r.unshift(Yr(e, o, i)), o = Vr(e, t), o != null && r.push(Yr(e, o, i))), e = e.return;
  }
  return r;
}
function In(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ju(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, i ? (s = Vr(n, o), s != null && l.unshift(Yr(n, s, u))) : i || (s = Vr(n, o), s != null && l.push(Yr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Np = /\r\n?/g, Up = /\u0000|\uFFFD/g;
function Wu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Np, `
`).replace(Up, "");
}
function _i(e, t, n) {
  if (t = Wu(t), Wu(e) !== t && n) throw Error(V(425));
}
function Zi() {
}
var Ll = null, Il = null;
function jl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Wl = typeof setTimeout == "function" ? setTimeout : void 0, Fp = typeof clearTimeout == "function" ? clearTimeout : void 0, Nu = typeof Promise == "function" ? Promise : void 0, zp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nu < "u" ? function(e) {
  return Nu.resolve(null).then(e).catch(xp);
} : Wl;
function xp(e) {
  setTimeout(function() {
    throw e;
  });
}
function tl(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Qr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Qr(t);
}
function nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Uu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sr = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + sr, Xr = "__reactProps$" + sr, zt = "__reactContainer$" + sr, Nl = "__reactEvents$" + sr, Vp = "__reactListeners$" + sr, Bp = "__reactHandles$" + sr;
function Sn(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zt] || n[Pt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Uu(e); e !== null; ) {
        if (n = e[Pt]) return n;
        e = Uu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ui(e) {
  return e = e[Pt] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function So(e) {
  return e[Xr] || null;
}
var Ul = [], xn = -1;
function dn(e) {
  return { current: e };
}
function we(e) {
  0 > xn || (e.current = Ul[xn], Ul[xn] = null, xn--);
}
function ye(e, t) {
  xn++, Ul[xn] = e.current, e.current = t;
}
var sn = {}, Ve = dn(sn), Ze = dn(false), Pn = sn;
function tr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function Ji() {
  we(Ze), we(Ve);
}
function Fu(e, t, n) {
  if (Ve.current !== sn) throw Error(V(168));
  ye(Ve, t), ye(Ze, n);
}
function Wc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(V(108, Rd(e) || "Unknown", i));
  return Te({}, n, r);
}
function qi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn, Pn = Ve.current, ye(Ve, e), ye(Ze, Ze.current), true;
}
function zu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = Wc(e, t, Pn), r.__reactInternalMemoizedMergedChildContext = e, we(Ze), we(Ve), ye(Ve, e)) : we(Ze), ye(Ze, n);
}
var jt = null, Eo = false, nl = false;
function Nc(e) {
  jt === null ? jt = [e] : jt.push(e);
}
function Hp(e) {
  Eo = true, Nc(e);
}
function pn() {
  if (!nl && jt !== null) {
    nl = true;
    var e = 0, t = he;
    try {
      var n = jt;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(true);
        while (r !== null);
      }
      jt = null, Eo = false;
    } catch (i) {
      throw jt !== null && (jt = jt.slice(e + 1)), uc(ga, pn), i;
    } finally {
      he = t, nl = false;
    }
  }
  return null;
}
var Vn = [], Bn = 0, eo = null, to = 0, st = [], ct = 0, Tn = null, Wt = 1, Nt = "";
function gn(e, t) {
  Vn[Bn++] = to, Vn[Bn++] = eo, eo = e, to = t;
}
function Uc(e, t, n) {
  st[ct++] = Wt, st[ct++] = Nt, st[ct++] = Tn, Tn = e;
  var r = Wt;
  e = Nt;
  var i = 32 - St(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - St(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, Wt = 1 << 32 - St(t) + i | n << i | r, Nt = o + e;
  } else Wt = 1 << o | n << i | r, Nt = e;
}
function Ra(e) {
  e.return !== null && (gn(e, 1), Uc(e, 1, 0));
}
function Oa(e) {
  for (; e === eo; ) eo = Vn[--Bn], Vn[Bn] = null, to = Vn[--Bn], Vn[Bn] = null;
  for (; e === Tn; ) Tn = st[--ct], st[ct] = null, Nt = st[--ct], st[ct] = null, Wt = st[--ct], st[ct] = null;
}
var ot = null, it = null, Ee = false, wt = null;
function Fc(e, t) {
  var n = ft(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function xu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ot = e, it = nn(t.firstChild), true) : false;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ot = e, it = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tn !== null ? { id: Wt, overflow: Nt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ot = e, it = null, true) : false;
    default:
      return false;
  }
}
function Fl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zl(e) {
  if (Ee) {
    var t = it;
    if (t) {
      var n = t;
      if (!xu(e, t)) {
        if (Fl(e)) throw Error(V(418));
        t = nn(n.nextSibling);
        var r = ot;
        t && xu(e, t) ? Fc(r, n) : (e.flags = e.flags & -4097 | 2, Ee = false, ot = e);
      }
    } else {
      if (Fl(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, Ee = false, ot = e;
    }
  }
}
function Vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ot = e;
}
function Ci(e) {
  if (e !== ot) return false;
  if (!Ee) return Vu(e), Ee = true, false;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !jl(e.type, e.memoizedProps)), t && (t = it)) {
    if (Fl(e)) throw zc(), Error(V(418));
    for (; t; ) Fc(e, t), t = nn(t.nextSibling);
  }
  if (Vu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = nn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = ot ? nn(e.stateNode.nextSibling) : null;
  return true;
}
function zc() {
  for (var e = it; e; ) e = nn(e.nextSibling);
}
function nr() {
  it = ot = null, Ee = false;
}
function Da(e) {
  wt === null ? wt = [e] : wt.push(e);
}
var Qp = Bt.ReactCurrentBatchConfig;
function yt(e, t) {
  if (e && e.defaultProps) {
    t = Te({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var no = dn(null), ro = null, Hn = null, Aa = null;
function Ma() {
  Aa = Hn = ro = null;
}
function ba(e) {
  var t = no.current;
  we(no), e._currentValue = t;
}
function xl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Zn(e, t) {
  ro = e, Aa = Hn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Xe = true), e.firstContext = null);
}
function vt(e) {
  var t = e._currentValue;
  if (Aa !== e) if (e = { context: e, memoizedValue: t, next: null }, Hn === null) {
    if (ro === null) throw Error(V(308));
    Hn = e, ro.dependencies = { lanes: 0, firstContext: e };
  } else Hn = Hn.next = e;
  return t;
}
var En = null;
function La(e) {
  En === null ? En = [e] : En.push(e);
}
function xc(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, La(t)) : (n.next = i.next, i.next = n), t.interleaved = n, xt(e, r);
}
function xt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var $t = false;
function Ia(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Vc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ut(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ce & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, xt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, La(r)) : (t.next = i.next, i.next = t), r.interleaved = t, xt(e, n);
}
function ji(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wa(e, n);
  }
}
function Bu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = l : o = o.next = l, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function io(e, t, n, r) {
  var i = e.updateQueue;
  $t = false;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, l === null ? o = f : l.next = f, l = s;
    var S = e.alternate;
    S !== null && (S = S.updateQueue, u = S.lastBaseUpdate, u !== l && (u === null ? S.firstBaseUpdate = f : u.next = f, S.lastBaseUpdate = s));
  }
  if (o !== null) {
    var C = i.baseState;
    l = 0, S = f = s = null, u = o;
    do {
      var m = u.lane, M = u.eventTime;
      if ((r & m) === m) {
        S !== null && (S = S.next = { eventTime: M, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
        e: {
          var P = e, L = u;
          switch (m = t, M = n, L.tag) {
            case 1:
              if (P = L.payload, typeof P == "function") {
                C = P.call(M, C, m);
                break e;
              }
              C = P;
              break e;
            case 3:
              P.flags = P.flags & -65537 | 128;
            case 0:
              if (P = L.payload, m = typeof P == "function" ? P.call(M, C, m) : P, m == null) break e;
              C = Te({}, C, m);
              break e;
            case 2:
              $t = true;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = i.effects, m === null ? i.effects = [u] : m.push(u));
      } else M = { eventTime: M, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, S === null ? (f = S = M, s = C) : S = S.next = M, l |= m;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null;
      }
    } while (true);
    if (S === null && (s = C), i.baseState = s, i.firstBaseUpdate = f, i.lastBaseUpdate = S, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    On |= l, e.lanes = l, e.memoizedState = C;
  }
}
function Hu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(V(191, i));
      i.call(r);
    }
  }
}
var Bc = new xs.Component().refs;
function Vl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ko = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mn(e) === e : false;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), i = ln(e), o = Ut(r, i);
  o.payload = t, n != null && (o.callback = n), t = rn(e, o, i), t !== null && (Et(t, e, i, r), ji(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), i = ln(e), o = Ut(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = rn(e, o, i), t !== null && (Et(t, e, i, r), ji(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qe(), r = ln(e), i = Ut(n, r);
  i.tag = 2, t != null && (i.callback = t), t = rn(e, i, r), t !== null && (Et(t, e, r, n), ji(t, e, r));
} };
function Qu(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !Kr(n, r) || !Kr(i, o) : true;
}
function Hc(e, t, n) {
  var r = false, i = sn, o = t.contextType;
  return typeof o == "object" && o !== null ? o = vt(o) : (i = Je(t) ? Pn : Ve.current, r = t.contextTypes, o = (r = r != null) ? tr(e, i) : sn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ko, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Gu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ko.enqueueReplaceState(t, t.state, null);
}
function Bl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = Bc, Ia(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = vt(o) : (o = Je(t) ? Pn : Ve.current, i.context = tr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Vl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ko.enqueueReplaceState(i, i.state, null), io(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function gr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(V(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
        var u = i.refs;
        u === Bc && (u = i.refs = {}), l === null ? delete u[o] : u[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function Pi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ku(e) {
  var t = e._init;
  return t(e._payload);
}
function Qc(e) {
  function t(k, h) {
    if (e) {
      var _ = k.deletions;
      _ === null ? (k.deletions = [h], k.flags |= 16) : _.push(h);
    }
  }
  function n(k, h) {
    if (!e) return null;
    for (; h !== null; ) t(k, h), h = h.sibling;
    return null;
  }
  function r(k, h) {
    for (k = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? k.set(h.key, h) : k.set(h.index, h), h = h.sibling;
    return k;
  }
  function i(k, h) {
    return k = an(k, h), k.index = 0, k.sibling = null, k;
  }
  function o(k, h, _) {
    return k.index = _, e ? (_ = k.alternate, _ !== null ? (_ = _.index, _ < h ? (k.flags |= 2, h) : _) : (k.flags |= 2, h)) : (k.flags |= 1048576, h);
  }
  function l(k) {
    return e && k.alternate === null && (k.flags |= 2), k;
  }
  function u(k, h, _, I) {
    return h === null || h.tag !== 6 ? (h = sl(_, k.mode, I), h.return = k, h) : (h = i(h, _), h.return = k, h);
  }
  function s(k, h, _, I) {
    var W = _.type;
    return W === Wn ? S(k, h, _.props.children, I, _.key) : h !== null && (h.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Kt && Ku(W) === h.type) ? (I = i(h, _.props), I.ref = gr(k, h, _), I.return = k, I) : (I = xi(_.type, _.key, _.props, null, k.mode, I), I.ref = gr(k, h, _), I.return = k, I);
  }
  function f(k, h, _, I) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== _.containerInfo || h.stateNode.implementation !== _.implementation ? (h = cl(_, k.mode, I), h.return = k, h) : (h = i(h, _.children || []), h.return = k, h);
  }
  function S(k, h, _, I, W) {
    return h === null || h.tag !== 7 ? (h = Cn(_, k.mode, I, W), h.return = k, h) : (h = i(h, _), h.return = k, h);
  }
  function C(k, h, _) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = sl("" + h, k.mode, _), h.return = k, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vi:
          return _ = xi(h.type, h.key, h.props, null, k.mode, _), _.ref = gr(k, null, h), _.return = k, _;
        case jn:
          return h = cl(h, k.mode, _), h.return = k, h;
        case Kt:
          var I = h._init;
          return C(k, I(h._payload), _);
      }
      if (Rr(h) || pr(h)) return h = Cn(h, k.mode, _, null), h.return = k, h;
      Pi(k, h);
    }
    return null;
  }
  function m(k, h, _, I) {
    var W = h !== null ? h.key : null;
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return W !== null ? null : u(k, h, "" + _, I);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case vi:
          return _.key === W ? s(k, h, _, I) : null;
        case jn:
          return _.key === W ? f(k, h, _, I) : null;
        case Kt:
          return W = _._init, m(k, h, W(_._payload), I);
      }
      if (Rr(_) || pr(_)) return W !== null ? null : S(k, h, _, I, null);
      Pi(k, _);
    }
    return null;
  }
  function M(k, h, _, I, W) {
    if (typeof I == "string" && I !== "" || typeof I == "number") return k = k.get(_) || null, u(h, k, "" + I, W);
    if (typeof I == "object" && I !== null) {
      switch (I.$$typeof) {
        case vi:
          return k = k.get(I.key === null ? _ : I.key) || null, s(h, k, I, W);
        case jn:
          return k = k.get(I.key === null ? _ : I.key) || null, f(h, k, I, W);
        case Kt:
          var b = I._init;
          return M(k, h, _, b(I._payload), W);
      }
      if (Rr(I) || pr(I)) return k = k.get(_) || null, S(h, k, I, W, null);
      Pi(h, I);
    }
    return null;
  }
  function P(k, h, _, I) {
    for (var W = null, b = null, O = h, d = h = 0, F = null; O !== null && d < _.length; d++) {
      O.index > d ? (F = O, O = null) : F = O.sibling;
      var Q = m(k, O, _[d], I);
      if (Q === null) {
        O === null && (O = F);
        break;
      }
      e && O && Q.alternate === null && t(k, O), h = o(Q, h, d), b === null ? W = Q : b.sibling = Q, b = Q, O = F;
    }
    if (d === _.length) return n(k, O), Ee && gn(k, d), W;
    if (O === null) {
      for (; d < _.length; d++) O = C(k, _[d], I), O !== null && (h = o(O, h, d), b === null ? W = O : b.sibling = O, b = O);
      return Ee && gn(k, d), W;
    }
    for (O = r(k, O); d < _.length; d++) F = M(O, k, d, _[d], I), F !== null && (e && F.alternate !== null && O.delete(F.key === null ? d : F.key), h = o(F, h, d), b === null ? W = F : b.sibling = F, b = F);
    return e && O.forEach(function(ie) {
      return t(k, ie);
    }), Ee && gn(k, d), W;
  }
  function L(k, h, _, I) {
    var W = pr(_);
    if (typeof W != "function") throw Error(V(150));
    if (_ = W.call(_), _ == null) throw Error(V(151));
    for (var b = W = null, O = h, d = h = 0, F = null, Q = _.next(); O !== null && !Q.done; d++, Q = _.next()) {
      O.index > d ? (F = O, O = null) : F = O.sibling;
      var ie = m(k, O, Q.value, I);
      if (ie === null) {
        O === null && (O = F);
        break;
      }
      e && O && ie.alternate === null && t(k, O), h = o(ie, h, d), b === null ? W = ie : b.sibling = ie, b = ie, O = F;
    }
    if (Q.done) return n(k, O), Ee && gn(k, d), W;
    if (O === null) {
      for (; !Q.done; d++, Q = _.next()) Q = C(k, Q.value, I), Q !== null && (h = o(Q, h, d), b === null ? W = Q : b.sibling = Q, b = Q);
      return Ee && gn(k, d), W;
    }
    for (O = r(k, O); !Q.done; d++, Q = _.next()) Q = M(O, k, d, Q.value, I), Q !== null && (e && Q.alternate !== null && O.delete(Q.key === null ? d : Q.key), h = o(Q, h, d), b === null ? W = Q : b.sibling = Q, b = Q);
    return e && O.forEach(function(pe) {
      return t(k, pe);
    }), Ee && gn(k, d), W;
  }
  function ee(k, h, _, I) {
    if (typeof _ == "object" && _ !== null && _.type === Wn && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case vi:
          e: {
            for (var W = _.key, b = h; b !== null; ) {
              if (b.key === W) {
                if (W = _.type, W === Wn) {
                  if (b.tag === 7) {
                    n(k, b.sibling), h = i(b, _.props.children), h.return = k, k = h;
                    break e;
                  }
                } else if (b.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Kt && Ku(W) === b.type) {
                  n(k, b.sibling), h = i(b, _.props), h.ref = gr(k, b, _), h.return = k, k = h;
                  break e;
                }
                n(k, b);
                break;
              } else t(k, b);
              b = b.sibling;
            }
            _.type === Wn ? (h = Cn(_.props.children, k.mode, I, _.key), h.return = k, k = h) : (I = xi(_.type, _.key, _.props, null, k.mode, I), I.ref = gr(k, h, _), I.return = k, k = I);
          }
          return l(k);
        case jn:
          e: {
            for (b = _.key; h !== null; ) {
              if (h.key === b) if (h.tag === 4 && h.stateNode.containerInfo === _.containerInfo && h.stateNode.implementation === _.implementation) {
                n(k, h.sibling), h = i(h, _.children || []), h.return = k, k = h;
                break e;
              } else {
                n(k, h);
                break;
              }
              else t(k, h);
              h = h.sibling;
            }
            h = cl(_, k.mode, I), h.return = k, k = h;
          }
          return l(k);
        case Kt:
          return b = _._init, ee(k, h, b(_._payload), I);
      }
      if (Rr(_)) return P(k, h, _, I);
      if (pr(_)) return L(k, h, _, I);
      Pi(k, _);
    }
    return typeof _ == "string" && _ !== "" || typeof _ == "number" ? (_ = "" + _, h !== null && h.tag === 6 ? (n(k, h.sibling), h = i(h, _), h.return = k, k = h) : (n(k, h), h = sl(_, k.mode, I), h.return = k, k = h), l(k)) : n(k, h);
  }
  return ee;
}
var rr = Qc(true), Gc = Qc(false), si = {}, Rt = dn(si), Zr = dn(si), Jr = dn(si);
function kn(e) {
  if (e === si) throw Error(V(174));
  return e;
}
function ja(e, t) {
  switch (ye(Jr, t), ye(Zr, e), ye(Rt, si), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : El(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = El(t, e);
  }
  we(Rt), ye(Rt, t);
}
function ir() {
  we(Rt), we(Zr), we(Jr);
}
function Kc(e) {
  kn(Jr.current);
  var t = kn(Rt.current), n = El(t, e.type);
  t !== n && (ye(Zr, e), ye(Rt, n));
}
function Wa(e) {
  Zr.current === e && (we(Rt), we(Zr));
}
var Ce = dn(0);
function oo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var rl = [];
function Na() {
  for (var e = 0; e < rl.length; e++) rl[e]._workInProgressVersionPrimary = null;
  rl.length = 0;
}
var Wi = Bt.ReactCurrentDispatcher, il = Bt.ReactCurrentBatchConfig, Rn = 0, Pe = null, Me = null, Le = null, lo = false, Wr = false, qr = 0, Gp = 0;
function Fe() {
  throw Error(V(321));
}
function Ua(e, t) {
  if (t === null) return false;
  for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return false;
  return true;
}
function Fa(e, t, n, r, i, o) {
  if (Rn = o, Pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wi.current = e === null || e.memoizedState === null ? Xp : Zp, e = n(r, i), Wr) {
    o = 0;
    do {
      if (Wr = false, qr = 0, 25 <= o) throw Error(V(301));
      o += 1, Le = Me = null, t.updateQueue = null, Wi.current = Jp, e = n(r, i);
    } while (Wr);
  }
  if (Wi.current = ao, t = Me !== null && Me.next !== null, Rn = 0, Le = Me = Pe = null, lo = false, t) throw Error(V(300));
  return e;
}
function za() {
  var e = qr !== 0;
  return qr = 0, e;
}
function Ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Le === null ? Pe.memoizedState = Le = e : Le = Le.next = e, Le;
}
function ht() {
  if (Me === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Me.next;
  var t = Le === null ? Pe.memoizedState : Le.next;
  if (t !== null) Le = t, Me = e;
  else {
    if (e === null) throw Error(V(310));
    Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, Le === null ? Pe.memoizedState = Le = e : Le = Le.next = e;
  }
  return Le;
}
function ei(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ol(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = Me, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var u = l = null, s = null, f = o;
    do {
      var S = f.lane;
      if ((Rn & S) === S) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var C = { lane: S, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null };
        s === null ? (u = s = C, l = r) : s = s.next = C, Pe.lanes |= S, On |= S;
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? l = r : s.next = u, kt(r, t.memoizedState) || (Xe = true), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, Pe.lanes |= o, On |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ll(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== i);
    kt(o, t.memoizedState) || (Xe = true), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function $c() {
}
function Yc(e, t) {
  var n = Pe, r = ht(), i = t(), o = !kt(r.memoizedState, i);
  if (o && (r.memoizedState = i, Xe = true), r = r.queue, xa(Jc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Le !== null && Le.memoizedState.tag & 1) {
    if (n.flags |= 2048, ti(9, Zc.bind(null, n, r, i, t), void 0, null), Ie === null) throw Error(V(349));
    Rn & 30 || Xc(n, t, i);
  }
  return i;
}
function Xc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Zc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, qc(t) && ef(e);
}
function Jc(e, t, n) {
  return n(function() {
    qc(t) && ef(e);
  });
}
function qc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return true;
  }
}
function ef(e) {
  var t = xt(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function $u(e) {
  var t = Ct();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: e }, t.queue = e, e = e.dispatch = Yp.bind(null, Pe, e), [t.memoizedState, e];
}
function ti(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function tf() {
  return ht().memoizedState;
}
function Ni(e, t, n, r) {
  var i = Ct();
  Pe.flags |= e, i.memoizedState = ti(1 | t, n, void 0, r === void 0 ? null : r);
}
function _o(e, t, n, r) {
  var i = ht();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Me !== null) {
    var l = Me.memoizedState;
    if (o = l.destroy, r !== null && Ua(r, l.deps)) {
      i.memoizedState = ti(t, n, o, r);
      return;
    }
  }
  Pe.flags |= e, i.memoizedState = ti(1 | t, n, o, r);
}
function Yu(e, t) {
  return Ni(8390656, 8, e, t);
}
function xa(e, t) {
  return _o(2048, 8, e, t);
}
function nf(e, t) {
  return _o(4, 2, e, t);
}
function rf(e, t) {
  return _o(4, 4, e, t);
}
function of(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function lf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _o(4, 4, of.bind(null, t, e), n);
}
function Va() {
}
function af(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ua(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function uf(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ua(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function sf(e, t, n) {
  return Rn & 21 ? (kt(n, t) || (n = fc(), Pe.lanes |= n, On |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, Xe = true), e.memoizedState = n);
}
function Kp(e, t) {
  var n = he;
  he = n !== 0 && 4 > n ? n : 4, e(true);
  var r = il.transition;
  il.transition = {};
  try {
    e(false), t();
  } finally {
    he = n, il.transition = r;
  }
}
function cf() {
  return ht().memoizedState;
}
function $p(e, t, n) {
  var r = ln(e);
  if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, ff(e)) df(t, n);
  else if (n = xc(e, t, n, r), n !== null) {
    var i = Qe();
    Et(n, e, r, i), pf(n, t, r);
  }
}
function Yp(e, t, n) {
  var r = ln(e), i = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
  if (ff(e)) df(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var l = t.lastRenderedState, u = o(l, n);
      if (i.hasEagerState = true, i.eagerState = u, kt(u, l)) {
        var s = t.interleaved;
        s === null ? (i.next = i, La(t)) : (i.next = s.next, s.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = xc(e, t, i, r), n !== null && (i = Qe(), Et(n, e, r, i), pf(n, t, r));
  }
}
function ff(e) {
  var t = e.alternate;
  return e === Pe || t !== null && t === Pe;
}
function df(e, t) {
  Wr = lo = true;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function pf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wa(e, n);
  }
}
var ao = { readContext: vt, useCallback: Fe, useContext: Fe, useEffect: Fe, useImperativeHandle: Fe, useInsertionEffect: Fe, useLayoutEffect: Fe, useMemo: Fe, useReducer: Fe, useRef: Fe, useState: Fe, useDebugValue: Fe, useDeferredValue: Fe, useTransition: Fe, useMutableSource: Fe, useSyncExternalStore: Fe, useId: Fe, unstable_isNewReconciler: false }, Xp = { readContext: vt, useCallback: function(e, t) {
  return Ct().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: vt, useEffect: Yu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ni(4194308, 4, of.bind(null, t, e), n);
}, useLayoutEffect: function(e, t) {
  return Ni(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ni(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ct();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ct();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = $p.bind(null, Pe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ct();
  return e = { current: e }, t.memoizedState = e;
}, useState: $u, useDebugValue: Va, useDeferredValue: function(e) {
  return Ct().memoizedState = e;
}, useTransition: function() {
  var e = $u(false), t = e[0];
  return e = Kp.bind(null, e[1]), Ct().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Pe, i = Ct();
  if (Ee) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), Ie === null) throw Error(V(349));
    Rn & 30 || Xc(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, Yu(Jc.bind(null, r, o, e), [e]), r.flags |= 2048, ti(9, Zc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ct(), t = Ie.identifierPrefix;
  if (Ee) {
    var n = Nt, r = Wt;
    n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Gp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: false }, Zp = { readContext: vt, useCallback: af, useContext: vt, useEffect: xa, useImperativeHandle: lf, useInsertionEffect: nf, useLayoutEffect: rf, useMemo: uf, useReducer: ol, useRef: tf, useState: function() {
  return ol(ei);
}, useDebugValue: Va, useDeferredValue: function(e) {
  var t = ht();
  return sf(t, Me.memoizedState, e);
}, useTransition: function() {
  var e = ol(ei)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: $c, useSyncExternalStore: Yc, useId: cf, unstable_isNewReconciler: false }, Jp = { readContext: vt, useCallback: af, useContext: vt, useEffect: xa, useImperativeHandle: lf, useInsertionEffect: nf, useLayoutEffect: rf, useMemo: uf, useReducer: ll, useRef: tf, useState: function() {
  return ll(ei);
}, useDebugValue: Va, useDeferredValue: function(e) {
  var t = ht();
  return Me === null ? t.memoizedState = e : sf(t, Me.memoizedState, e);
}, useTransition: function() {
  var e = ll(ei)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: $c, useSyncExternalStore: Yc, useId: cf, unstable_isNewReconciler: false };
function or(e, t) {
  try {
    var n = "", r = t;
    do
      n += Td(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var qp = typeof WeakMap == "function" ? WeakMap : Map;
function vf(e, t, n) {
  n = Ut(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    so || (so = true, ea = r), Hl(e, t);
  }, n;
}
function hf(e, t, n) {
  n = Ut(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Hl(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Hl(e, t), typeof r != "function" && (on === null ? on = /* @__PURE__ */ new Set([this]) : on.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qp();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = pv.bind(null, e, t, n), t.then(e, e));
}
function Zu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ju(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ut(-1, 1), t.tag = 2, rn(n, t, 1))), n.lanes |= 1), e);
}
var ev = Bt.ReactCurrentOwner, Xe = false;
function He(e, t, n, r) {
  t.child = e === null ? Gc(t, null, n, r) : rr(t, e.child, n, r);
}
function qu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return Zn(t, i), r = Fa(e, t, n, r, o, i), n = za(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Vt(e, t, i)) : (Ee && n && Ra(t), t.flags |= 1, He(e, t, r, i), t.child);
}
function es(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Xa(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, mf(e, t, o, r, i)) : (e = xi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Kr, n(l, r) && e.ref === t.ref) return Vt(e, t, i);
  }
  return t.flags |= 1, e = an(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function mf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Kr(o, r) && e.ref === t.ref) if (Xe = false, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Xe = true);
    else return t.lanes = e.lanes, Vt(e, t, i);
  }
  return Ql(e, t, n, r, i);
}
function yf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(Gn, rt), rt |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(Gn, rt), rt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ye(Gn, rt), rt |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ye(Gn, rt), rt |= r;
  return He(e, t, i, n), t.child;
}
function gf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ql(e, t, n, r, i) {
  var o = Je(n) ? Pn : Ve.current;
  return o = tr(t, o), Zn(t, i), n = Fa(e, t, n, r, o, i), r = za(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Vt(e, t, i)) : (Ee && r && Ra(t), t.flags |= 1, He(e, t, n, i), t.child);
}
function ts(e, t, n, r, i) {
  if (Je(n)) {
    var o = true;
    qi(t);
  } else o = false;
  if (Zn(t, i), t.stateNode === null) Ui(e, t), Hc(t, n, r), Bl(t, n, r, i), r = true;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = vt(f) : (f = Je(n) ? Pn : Ve.current, f = tr(t, f));
    var S = n.getDerivedStateFromProps, C = typeof S == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    C || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== f) && Gu(t, l, r, f), $t = false;
    var m = t.memoizedState;
    l.state = m, io(t, r, l, i), s = t.memoizedState, u !== r || m !== s || Ze.current || $t ? (typeof S == "function" && (Vl(t, n, S, r), s = t.memoizedState), (u = $t || Qu(t, n, u, r, m, s, f)) ? (C || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = f, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = false);
  } else {
    l = t.stateNode, Vc(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : yt(t.type, u), l.props = f, C = t.pendingProps, m = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = vt(s) : (s = Je(n) ? Pn : Ve.current, s = tr(t, s));
    var M = n.getDerivedStateFromProps;
    (S = typeof M == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== C || m !== s) && Gu(t, l, r, s), $t = false, m = t.memoizedState, l.state = m, io(t, r, l, i);
    var P = t.memoizedState;
    u !== C || m !== P || Ze.current || $t ? (typeof M == "function" && (Vl(t, n, M, r), P = t.memoizedState), (f = $t || Qu(t, n, f, r, m, P, s) || false) ? (S || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, P, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, P, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = P), l.props = r, l.state = P, l.context = s, r = f) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = false);
  }
  return Gl(e, t, n, r, o, i);
}
function Gl(e, t, n, r, i, o) {
  gf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && zu(t, n, false), Vt(e, t, o);
  r = t.stateNode, ev.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = rr(t, e.child, null, o), t.child = rr(t, null, u, o)) : He(e, t, u, o), t.memoizedState = r.state, i && zu(t, n, true), t.child;
}
function wf(e) {
  var t = e.stateNode;
  t.pendingContext ? Fu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fu(e, t.context, false), ja(e, t.containerInfo);
}
function ns(e, t, n, r, i) {
  return nr(), Da(i), t.flags |= 256, He(e, t, n, r), t.child;
}
var Kl = { dehydrated: null, treeContext: null, retryLane: 0 };
function $l(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sf(e, t, n) {
  var r = t.pendingProps, i = Ce.current, o = false, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? false : (i & 2) !== 0), u ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ye(Ce, i & 1), e === null) return zl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = To(l, r, 0, null), e = Cn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = $l(n), t.memoizedState = Kl, e) : Ba(t, l));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return tv(e, t, l, r, u, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, u = i.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = an(i, s), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = an(u, o) : (o = Cn(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? $l(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Kl, r;
  }
  return o = e.child, e = o.sibling, r = an(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ba(e, t) {
  return t = To({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ti(e, t, n, r) {
  return r !== null && Da(r), rr(t, e.child, null, n), e = Ba(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function tv(e, t, n, r, i, o, l) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = al(Error(V(422))), Ti(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = To({ mode: "visible", children: r.children }, i, 0, null), o = Cn(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && rr(t, e.child, null, l), t.child.memoizedState = $l(l), t.memoizedState = Kl, o);
  if (!(t.mode & 1)) return Ti(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(V(419)), r = al(o, r, void 0), Ti(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Xe || u) {
    if (r = Ie, r !== null) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, xt(e, i), Et(r, e, i, -1));
    }
    return Ya(), r = al(Error(V(421))), Ti(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = vv.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, it = nn(i.nextSibling), ot = t, Ee = true, wt = null, e !== null && (st[ct++] = Wt, st[ct++] = Nt, st[ct++] = Tn, Wt = e.id, Nt = e.overflow, Tn = t), t = Ba(t, r.children), t.flags |= 4096, t);
}
function rs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xl(e.return, t, n);
}
function ul(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Ef(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (He(e, t, r.children, n), r = Ce.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && rs(e, n, t);
      else if (e.tag === 19) rs(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ye(Ce, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && oo(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ul(t, false, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && oo(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      ul(t, true, n, null, o);
      break;
    case "together":
      ul(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ui(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Vt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), On |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = an(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function nv(e, t, n) {
  switch (t.tag) {
    case 3:
      wf(t), nr();
      break;
    case 5:
      Kc(t);
      break;
    case 1:
      Je(t.type) && qi(t);
      break;
    case 4:
      ja(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      ye(no, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ye(Ce, Ce.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Sf(e, t, n) : (ye(Ce, Ce.current & 1), e = Vt(e, t, n), e !== null ? e.sibling : null);
      ye(Ce, Ce.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ef(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ye(Ce, Ce.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, yf(e, t, n);
  }
  return Vt(e, t, n);
}
var kf, Yl, _f, Cf;
kf = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Yl = function() {
};
_f = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, kn(Rt.current);
    var o = null;
    switch (n) {
      case "input":
        i = yl(e, i), r = yl(e, r), o = [];
        break;
      case "select":
        i = Te({}, i, { value: void 0 }), r = Te({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Sl(e, i), r = Sl(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zi);
    }
    kl(n, r);
    var l;
    n = null;
    for (f in i) if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && i[f] != null) if (f === "style") {
      var u = i[f];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (zr.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = i == null ? void 0 : i[f], r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (o || (o = []), o.push(f, n)), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (zr.hasOwnProperty(f) ? (s != null && f === "onScroll" && ge("scroll", e), o || u === s || (o = [])) : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Cf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wr(e, t) {
  if (!Ee) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function rv(e, t, n) {
  var r = t.pendingProps;
  switch (Oa(t), t.tag) {
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
      return ze(t), null;
    case 1:
      return Je(t.type) && Ji(), ze(t), null;
    case 3:
      return r = t.stateNode, ir(), we(Ze), we(Ve), Na(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ci(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (ra(wt), wt = null))), Yl(e, t), ze(t), null;
    case 5:
      Wa(t);
      var i = kn(Jr.current);
      if (n = t.type, e !== null && t.stateNode != null) _f(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return ze(t), null;
        }
        if (e = kn(Rt.current), Ci(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Pt] = t, r[Xr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ge("cancel", r), ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Dr.length; i++) ge(Dr[i], r);
              break;
            case "source":
              ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ge("error", r), ge("load", r);
              break;
            case "details":
              ge("toggle", r);
              break;
            case "input":
              du(r, o), ge("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, ge("invalid", r);
              break;
            case "textarea":
              vu(r, o), ge("invalid", r);
          }
          kl(n, o), i = null;
          for (var l in o) if (o.hasOwnProperty(l)) {
            var u = o[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== true && _i(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== true && _i(r.textContent, u, e), i = ["children", "" + u]) : zr.hasOwnProperty(l) && u != null && l === "onScroll" && ge("scroll", r);
          }
          switch (n) {
            case "input":
              hi(r), pu(r, o, true);
              break;
            case "textarea":
              hi(r), hu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = true : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Pt] = t, e[Xr] = r, kf(e, t, false, false), t.stateNode = e;
          e: {
            switch (l = _l(n, r), n) {
              case "dialog":
                ge("cancel", e), ge("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Dr.length; i++) ge(Dr[i], e);
                i = r;
                break;
              case "source":
                ge("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                ge("error", e), ge("load", e), i = r;
                break;
              case "details":
                ge("toggle", e), i = r;
                break;
              case "input":
                du(e, r), i = yl(e, r), ge("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Te({}, r, { value: void 0 }), ge("invalid", e);
                break;
              case "textarea":
                vu(e, r), i = Sl(e, r), ge("invalid", e);
                break;
              default:
                i = r;
            }
            kl(n, i), u = i;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? qs(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Zs(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && xr(e, s) : typeof s == "number" && xr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (zr.hasOwnProperty(o) ? s != null && o === "onScroll" && ge("scroll", e) : s != null && pa(e, o, s, l));
            }
            switch (n) {
              case "input":
                hi(e), pu(e, r, false);
                break;
              case "textarea":
                hi(e), hu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Kn(e, !!r.multiple, o, false) : r.defaultValue != null && Kn(e, !!r.multiple, r.defaultValue, true);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Zi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = true;
                break e;
              default:
                r = false;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) Cf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = kn(Jr.current), kn(Rt.current), Ci(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Pt] = t, (o = r.nodeValue !== n) && (e = ot, e !== null)) switch (e.tag) {
            case 3:
              _i(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== true && _i(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Pt] = t, t.stateNode = r;
      }
      return ze(t), null;
    case 13:
      if (we(Ce), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ee && it !== null && t.mode & 1 && !(t.flags & 128)) zc(), nr(), t.flags |= 98560, o = false;
        else if (o = Ci(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(V(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(V(317));
            o[Pt] = t;
          } else nr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ze(t), o = false;
        } else wt !== null && (ra(wt), wt = null), o = true;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ce.current & 1 ? be === 0 && (be = 3) : Ya())), t.updateQueue !== null && (t.flags |= 4), ze(t), null);
    case 4:
      return ir(), Yl(e, t), e === null && $r(t.stateNode.containerInfo), ze(t), null;
    case 10:
      return ba(t.type._context), ze(t), null;
    case 17:
      return Je(t.type) && Ji(), ze(t), null;
    case 19:
      if (we(Ce), o = t.memoizedState, o === null) return ze(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) wr(o, false);
      else {
        if (be !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = oo(e), l !== null) {
            for (t.flags |= 128, wr(o, false), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ye(Ce, Ce.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && De() > lr && (t.flags |= 128, r = true, wr(o, false), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = oo(l), e !== null) {
          if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wr(o, true), o.tail === null && o.tailMode === "hidden" && !l.alternate && !Ee) return ze(t), null;
        } else 2 * De() - o.renderingStartTime > lr && n !== 1073741824 && (t.flags |= 128, r = true, wr(o, false), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = De(), t.sibling = null, n = Ce.current, ye(Ce, r ? n & 1 | 2 : n & 1), t) : (ze(t), null);
    case 22:
    case 23:
      return $a(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? rt & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function iv(e, t) {
  switch (Oa(t), t.tag) {
    case 1:
      return Je(t.type) && Ji(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ir(), we(Ze), we(Ve), Na(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Wa(t), null;
    case 13:
      if (we(Ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        nr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return we(Ce), null;
    case 4:
      return ir(), null;
    case 10:
      return ba(t.type._context), null;
    case 22:
    case 23:
      return $a(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ri = false, xe = false, ov = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
function Qn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Re(e, t, r);
  }
  else n.current = null;
}
function Xl(e, t, n) {
  try {
    n();
  } catch (r) {
    Re(e, t, r);
  }
}
var is = false;
function lv(e, t) {
  if (Ll = $i, e = Rc(), Ta(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, u = -1, s = -1, f = 0, S = 0, C = e, m = null;
        t: for (; ; ) {
          for (var M; C !== n || i !== 0 && C.nodeType !== 3 || (u = l + i), C !== o || r !== 0 && C.nodeType !== 3 || (s = l + r), C.nodeType === 3 && (l += C.nodeValue.length), (M = C.firstChild) !== null; ) m = C, C = M;
          for (; ; ) {
            if (C === e) break t;
            if (m === n && ++f === i && (u = l), m === o && ++S === r && (s = l), (M = C.nextSibling) !== null) break;
            C = m, m = C.parentNode;
          }
          C = M;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Il = { focusedElem: e, selectionRange: n }, $i = false, Y = t; Y !== null; ) if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Y = e;
  else for (; Y !== null; ) {
    t = Y;
    try {
      var P = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (P !== null) {
            var L = P.memoizedProps, ee = P.memoizedState, k = t.stateNode, h = k.getSnapshotBeforeUpdate(t.elementType === t.type ? L : yt(t.type, L), ee);
            k.__reactInternalSnapshotBeforeUpdate = h;
          }
          break;
        case 3:
          var _ = t.stateNode.containerInfo;
          _.nodeType === 1 ? _.textContent = "" : _.nodeType === 9 && _.documentElement && _.removeChild(_.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(V(163));
      }
    } catch (I) {
      Re(t, t.return, I);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, Y = e;
      break;
    }
    Y = t.return;
  }
  return P = is, is = false, P;
}
function Nr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Xl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Co(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Zl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Pf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Pf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Pt], delete t[Xr], delete t[Nl], delete t[Vp], delete t[Bp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Tf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function os(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Jl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Jl(e, t, n), e = e.sibling; e !== null; ) Jl(e, t, n), e = e.sibling;
}
function ql(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ql(e, t, n), e = e.sibling; e !== null; ) ql(e, t, n), e = e.sibling;
}
var je = null, gt = false;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) Rf(e, t, n), n = n.sibling;
}
function Rf(e, t, n) {
  if (Tt && typeof Tt.onCommitFiberUnmount == "function") try {
    Tt.onCommitFiberUnmount(mo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      xe || Qn(n, t);
    case 6:
      var r = je, i = gt;
      je = null, Qt(e, t, n), je = r, gt = i, je !== null && (gt ? (e = je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null && (gt ? (e = je, n = n.stateNode, e.nodeType === 8 ? tl(e.parentNode, n) : e.nodeType === 1 && tl(e, n), Qr(e)) : tl(je, n.stateNode));
      break;
    case 4:
      r = je, i = gt, je = n.stateNode.containerInfo, gt = true, Qt(e, t, n), je = r, gt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && Xl(n, t, l), i = i.next;
        } while (i !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (!xe && (Qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Re(n, t, u);
      }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (xe = (r = xe) || n.memoizedState !== null, Qt(e, t, n), xe = r) : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ov()), t.forEach(function(r) {
      var i = hv.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            je = u.stateNode, gt = false;
            break e;
          case 3:
            je = u.stateNode.containerInfo, gt = true;
            break e;
          case 4:
            je = u.stateNode.containerInfo, gt = true;
            break e;
        }
        u = u.return;
      }
      if (je === null) throw Error(V(160));
      Rf(o, l, i), je = null, gt = false;
      var s = i.alternate;
      s !== null && (s.return = null), i.return = null;
    } catch (f) {
      Re(i, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Of(t, e), t = t.sibling;
}
function Of(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (mt(t, e), _t(e), r & 4) {
        try {
          Nr(3, e, e.return), Co(3, e);
        } catch (L) {
          Re(e, e.return, L);
        }
        try {
          Nr(5, e, e.return);
        } catch (L) {
          Re(e, e.return, L);
        }
      }
      break;
    case 1:
      mt(t, e), _t(e), r & 512 && n !== null && Qn(n, n.return);
      break;
    case 5:
      if (mt(t, e), _t(e), r & 512 && n !== null && Qn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          xr(i, "");
        } catch (L) {
          Re(e, e.return, L);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && $s(i, o), _l(u, l);
          var f = _l(u, o);
          for (l = 0; l < s.length; l += 2) {
            var S = s[l], C = s[l + 1];
            S === "style" ? qs(i, C) : S === "dangerouslySetInnerHTML" ? Zs(i, C) : S === "children" ? xr(i, C) : pa(i, S, C, f);
          }
          switch (u) {
            case "input":
              gl(i, o);
              break;
            case "textarea":
              Ys(i, o);
              break;
            case "select":
              var m = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var M = o.value;
              M != null ? Kn(i, !!o.multiple, M, false) : m !== !!o.multiple && (o.defaultValue != null ? Kn(i, !!o.multiple, o.defaultValue, true) : Kn(i, !!o.multiple, o.multiple ? [] : "", false));
          }
          i[Xr] = o;
        } catch (L) {
          Re(e, e.return, L);
        }
      }
      break;
    case 6:
      if (mt(t, e), _t(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (L) {
          Re(e, e.return, L);
        }
      }
      break;
    case 3:
      if (mt(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Qr(t.containerInfo);
      } catch (L) {
        Re(e, e.return, L);
      }
      break;
    case 4:
      mt(t, e), _t(e);
      break;
    case 13:
      mt(t, e), _t(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ga = De())), r & 4 && ls(e);
      break;
    case 22:
      if (S = n !== null && n.memoizedState !== null, e.mode & 1 ? (xe = (f = xe) || S, mt(t, e), xe = f) : mt(t, e), _t(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !S && e.mode & 1) for (Y = e, S = e.child; S !== null; ) {
          for (C = Y = S; Y !== null; ) {
            switch (m = Y, M = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Nr(4, m, m.return);
                break;
              case 1:
                Qn(m, m.return);
                var P = m.stateNode;
                if (typeof P.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, P.props = t.memoizedProps, P.state = t.memoizedState, P.componentWillUnmount();
                  } catch (L) {
                    Re(r, n, L);
                  }
                }
                break;
              case 5:
                Qn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  us(C);
                  continue;
                }
            }
            M !== null ? (M.return = m, Y = M) : us(C);
          }
          S = S.sibling;
        }
        e: for (S = null, C = e; ; ) {
          if (C.tag === 5) {
            if (S === null) {
              S = C;
              try {
                i = C.stateNode, f ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = C.stateNode, s = C.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Js("display", l));
              } catch (L) {
                Re(e, e.return, L);
              }
            }
          } else if (C.tag === 6) {
            if (S === null) try {
              C.stateNode.nodeValue = f ? "" : C.memoizedProps;
            } catch (L) {
              Re(e, e.return, L);
            }
          } else if ((C.tag !== 22 && C.tag !== 23 || C.memoizedState === null || C === e) && C.child !== null) {
            C.child.return = C, C = C.child;
            continue;
          }
          if (C === e) break e;
          for (; C.sibling === null; ) {
            if (C.return === null || C.return === e) break e;
            S === C && (S = null), C = C.return;
          }
          S === C && (S = null), C.sibling.return = C.return, C = C.sibling;
        }
      }
      break;
    case 19:
      mt(t, e), _t(e), r & 4 && ls(e);
      break;
    case 21:
      break;
    default:
      mt(t, e), _t(e);
  }
}
function _t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Tf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (xr(i, ""), r.flags &= -33);
          var o = os(e);
          ql(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = os(e);
          Jl(e, u, l);
          break;
        default:
          throw Error(V(161));
      }
    } catch (s) {
      Re(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function av(e, t, n) {
  Y = e, Df(e);
}
function Df(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var i = Y, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Ri;
      if (!l) {
        var u = i.alternate, s = u !== null && u.memoizedState !== null || xe;
        u = Ri;
        var f = xe;
        if (Ri = l, (xe = s) && !f) for (Y = i; Y !== null; ) l = Y, s = l.child, l.tag === 22 && l.memoizedState !== null ? ss(i) : s !== null ? (s.return = l, Y = s) : ss(i);
        for (; o !== null; ) Y = o, Df(o), o = o.sibling;
        Y = i, Ri = u, xe = f;
      }
      as(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, Y = o) : as(e);
  }
}
function as(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            xe || Co(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !xe) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Hu(t, o, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Hu(t, l, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
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
            if (t.memoizedState === null) {
              var f = t.alternate;
              if (f !== null) {
                var S = f.memoizedState;
                if (S !== null) {
                  var C = S.dehydrated;
                  C !== null && Qr(C);
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
            throw Error(V(163));
        }
        xe || t.flags & 512 && Zl(t);
      } catch (m) {
        Re(t, t.return, m);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, Y = n;
      break;
    }
    Y = t.return;
  }
}
function us(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, Y = n;
      break;
    }
    Y = t.return;
  }
}
function ss(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Co(4, t);
          } catch (s) {
            Re(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Re(t, i, s);
            }
          }
          var o = t.return;
          try {
            Zl(t);
          } catch (s) {
            Re(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Zl(t);
          } catch (s) {
            Re(t, l, s);
          }
      }
    } catch (s) {
      Re(t, t.return, s);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, Y = u;
      break;
    }
    Y = t.return;
  }
}
var uv = Math.ceil, uo = Bt.ReactCurrentDispatcher, Ha = Bt.ReactCurrentOwner, dt = Bt.ReactCurrentBatchConfig, ce = 0, Ie = null, Ae = null, We = 0, rt = 0, Gn = dn(0), be = 0, ni = null, On = 0, Po = 0, Qa = 0, Ur = null, Ye = null, Ga = 0, lr = 1 / 0, It = null, so = false, ea = null, on = null, Oi = false, Jt = null, co = 0, Fr = 0, ta = null, Fi = -1, zi = 0;
function Qe() {
  return ce & 6 ? De() : Fi !== -1 ? Fi : Fi = De();
}
function ln(e) {
  return e.mode & 1 ? ce & 2 && We !== 0 ? We & -We : Qp.transition !== null ? (zi === 0 && (zi = fc()), zi) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : gc(e.type)), e) : 1;
}
function Et(e, t, n, r) {
  if (50 < Fr) throw Fr = 0, ta = null, Error(V(185));
  li(e, n, r), (!(ce & 2) || e !== Ie) && (e === Ie && (!(ce & 2) && (Po |= n), be === 4 && Xt(e, We)), qe(e, r), n === 1 && ce === 0 && !(t.mode & 1) && (lr = De() + 500, Eo && pn()));
}
function qe(e, t) {
  var n = e.callbackNode;
  Qd(e, t);
  var r = Ki(e, e === Ie ? We : 0);
  if (r === 0) n !== null && gu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && gu(n), t === 1) e.tag === 0 ? Hp(cs.bind(null, e)) : Nc(cs.bind(null, e)), zp(function() {
      !(ce & 6) && pn();
    }), n = null;
    else {
      switch (dc(r)) {
        case 1:
          n = ga;
          break;
        case 4:
          n = sc;
          break;
        case 16:
          n = Gi;
          break;
        case 536870912:
          n = cc;
          break;
        default:
          n = Gi;
      }
      n = Nf(n, Af.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Af(e, t) {
  if (Fi = -1, zi = 0, ce & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (Jn() && e.callbackNode !== n) return null;
  var r = Ki(e, e === Ie ? We : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fo(e, r);
  else {
    t = r;
    var i = ce;
    ce |= 2;
    var o = bf();
    (Ie !== e || We !== t) && (It = null, lr = De() + 500, _n(e, t));
    do
      try {
        fv();
        break;
      } catch (u) {
        Mf(e, u);
      }
    while (true);
    Ma(), uo.current = o, ce = i, Ae !== null ? t = 0 : (Ie = null, We = 0, t = be);
  }
  if (t !== 0) {
    if (t === 2 && (i = Ol(e), i !== 0 && (r = i, t = na(e, i))), t === 1) throw n = ni, _n(e, 0), Xt(e, r), qe(e, De()), n;
    if (t === 6) Xt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !sv(i) && (t = fo(e, r), t === 2 && (o = Ol(e), o !== 0 && (r = o, t = na(e, o))), t === 1)) throw n = ni, _n(e, 0), Xt(e, r), qe(e, De()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          wn(e, Ye, It);
          break;
        case 3:
          if (Xt(e, r), (r & 130023424) === r && (t = Ga + 500 - De(), 10 < t)) {
            if (Ki(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Qe(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Wl(wn.bind(null, e, Ye, It), t);
            break;
          }
          wn(e, Ye, It);
          break;
        case 4:
          if (Xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - St(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = De() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * uv(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Wl(wn.bind(null, e, Ye, It), r);
            break;
          }
          wn(e, Ye, It);
          break;
        case 5:
          wn(e, Ye, It);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return qe(e, De()), e.callbackNode === n ? Af.bind(null, e) : null;
}
function na(e, t) {
  var n = Ur;
  return e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256), e = fo(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && ra(t)), e;
}
function ra(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function sv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!kt(o(), i)) return false;
        } catch {
          return false;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return true;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return true;
}
function Xt(e, t) {
  for (t &= ~Qa, t &= ~Po, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - St(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function cs(e) {
  if (ce & 6) throw Error(V(327));
  Jn();
  var t = Ki(e, 0);
  if (!(t & 1)) return qe(e, De()), null;
  var n = fo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ol(e);
    r !== 0 && (t = r, n = na(e, r));
  }
  if (n === 1) throw n = ni, _n(e, 0), Xt(e, t), qe(e, De()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, wn(e, Ye, It), qe(e, De()), null;
}
function Ka(e, t) {
  var n = ce;
  ce |= 1;
  try {
    return e(t);
  } finally {
    ce = n, ce === 0 && (lr = De() + 500, Eo && pn());
  }
}
function Dn(e) {
  Jt !== null && Jt.tag === 0 && !(ce & 6) && Jn();
  var t = ce;
  ce |= 1;
  var n = dt.transition, r = he;
  try {
    if (dt.transition = null, he = 1, e) return e();
  } finally {
    he = r, dt.transition = n, ce = t, !(ce & 6) && pn();
  }
}
function $a() {
  rt = Gn.current, we(Gn);
}
function _n(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Fp(n)), Ae !== null) for (n = Ae.return; n !== null; ) {
    var r = n;
    switch (Oa(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ji();
        break;
      case 3:
        ir(), we(Ze), we(Ve), Na();
        break;
      case 5:
        Wa(r);
        break;
      case 4:
        ir();
        break;
      case 13:
        we(Ce);
        break;
      case 19:
        we(Ce);
        break;
      case 10:
        ba(r.type._context);
        break;
      case 22:
      case 23:
        $a();
    }
    n = n.return;
  }
  if (Ie = e, Ae = e = an(e.current, null), We = rt = t, be = 0, ni = null, Qa = Po = On = 0, Ye = Ur = null, En !== null) {
    for (t = 0; t < En.length; t++) if (n = En[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var l = o.next;
        o.next = i, r.next = l;
      }
      n.pending = r;
    }
    En = null;
  }
  return e;
}
function Mf(e, t) {
  do {
    var n = Ae;
    try {
      if (Ma(), Wi.current = ao, lo) {
        for (var r = Pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        lo = false;
      }
      if (Rn = 0, Le = Me = Pe = null, Wr = false, qr = 0, Ha.current = null, n === null || n.return === null) {
        be = 1, ni = t, Ae = null;
        break;
      }
      e: {
        var o = e, l = n.return, u = n, s = t;
        if (t = We, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, S = u, C = S.tag;
          if (!(S.mode & 1) && (C === 0 || C === 11 || C === 15)) {
            var m = S.alternate;
            m ? (S.updateQueue = m.updateQueue, S.memoizedState = m.memoizedState, S.lanes = m.lanes) : (S.updateQueue = null, S.memoizedState = null);
          }
          var M = Zu(l);
          if (M !== null) {
            M.flags &= -257, Ju(M, l, u, o, t), M.mode & 1 && Xu(o, f, t), t = M, s = f;
            var P = t.updateQueue;
            if (P === null) {
              var L = /* @__PURE__ */ new Set();
              L.add(s), t.updateQueue = L;
            } else P.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Xu(o, f, t), Ya();
              break e;
            }
            s = Error(V(426));
          }
        } else if (Ee && u.mode & 1) {
          var ee = Zu(l);
          if (ee !== null) {
            !(ee.flags & 65536) && (ee.flags |= 256), Ju(ee, l, u, o, t), Da(or(s, u));
            break e;
          }
        }
        o = s = or(s, u), be !== 4 && (be = 2), Ur === null ? Ur = [o] : Ur.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var k = vf(o, s, t);
              Bu(o, k);
              break e;
            case 1:
              u = s;
              var h = o.type, _ = o.stateNode;
              if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (on === null || !on.has(_)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var I = hf(o, u, t);
                Bu(o, I);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      If(n);
    } catch (W) {
      t = W, Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (true);
}
function bf() {
  var e = uo.current;
  return uo.current = ao, e === null ? ao : e;
}
function Ya() {
  (be === 0 || be === 3 || be === 2) && (be = 4), Ie === null || !(On & 268435455) && !(Po & 268435455) || Xt(Ie, We);
}
function fo(e, t) {
  var n = ce;
  ce |= 2;
  var r = bf();
  (Ie !== e || We !== t) && (It = null, _n(e, t));
  do
    try {
      cv();
      break;
    } catch (i) {
      Mf(e, i);
    }
  while (true);
  if (Ma(), ce = n, uo.current = r, Ae !== null) throw Error(V(261));
  return Ie = null, We = 0, be;
}
function cv() {
  for (; Ae !== null; ) Lf(Ae);
}
function fv() {
  for (; Ae !== null && !Wd(); ) Lf(Ae);
}
function Lf(e) {
  var t = Wf(e.alternate, e, rt);
  e.memoizedProps = e.pendingProps, t === null ? If(e) : Ae = t, Ha.current = null;
}
function If(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = iv(n, t), n !== null) {
        n.flags &= 32767, Ae = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        be = 6, Ae = null;
        return;
      }
    } else if (n = rv(n, t, rt), n !== null) {
      Ae = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ae = t;
      return;
    }
    Ae = t = e;
  } while (t !== null);
  be === 0 && (be = 5);
}
function wn(e, t, n) {
  var r = he, i = dt.transition;
  try {
    dt.transition = null, he = 1, dv(e, t, n, r);
  } finally {
    dt.transition = i, he = r;
  }
  return null;
}
function dv(e, t, n, r) {
  do
    Jn();
  while (Jt !== null);
  if (ce & 6) throw Error(V(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Gd(e, o), e === Ie && (Ae = Ie = null, We = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Oi || (Oi = true, Nf(Gi, function() {
    return Jn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = dt.transition, dt.transition = null;
    var l = he;
    he = 1;
    var u = ce;
    ce |= 4, Ha.current = null, lv(e, n), Of(n, e), bp(Il), $i = !!Ll, Il = Ll = null, e.current = n, av(n), Nd(), ce = u, he = l, dt.transition = o;
  } else e.current = n;
  if (Oi && (Oi = false, Jt = e, co = i), o = e.pendingLanes, o === 0 && (on = null), zd(n.stateNode), qe(e, De()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (so) throw so = false, e = ea, ea = null, e;
  return co & 1 && e.tag !== 0 && Jn(), o = e.pendingLanes, o & 1 ? e === ta ? Fr++ : (Fr = 0, ta = e) : Fr = 0, pn(), null;
}
function Jn() {
  if (Jt !== null) {
    var e = dc(co), t = dt.transition, n = he;
    try {
      if (dt.transition = null, he = 16 > e ? 16 : e, Jt === null) var r = false;
      else {
        if (e = Jt, Jt = null, co = 0, ce & 6) throw Error(V(331));
        var i = ce;
        for (ce |= 4, Y = e.current; Y !== null; ) {
          var o = Y, l = o.child;
          if (Y.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (Y = f; Y !== null; ) {
                  var S = Y;
                  switch (S.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nr(8, S, o);
                  }
                  var C = S.child;
                  if (C !== null) C.return = S, Y = C;
                  else for (; Y !== null; ) {
                    S = Y;
                    var m = S.sibling, M = S.return;
                    if (Pf(S), S === f) {
                      Y = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = M, Y = m;
                      break;
                    }
                    Y = M;
                  }
                }
              }
              var P = o.alternate;
              if (P !== null) {
                var L = P.child;
                if (L !== null) {
                  P.child = null;
                  do {
                    var ee = L.sibling;
                    L.sibling = null, L = ee;
                  } while (L !== null);
                }
              }
              Y = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) l.return = o, Y = l;
          else e: for (; Y !== null; ) {
            if (o = Y, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Nr(9, o, o.return);
            }
            var k = o.sibling;
            if (k !== null) {
              k.return = o.return, Y = k;
              break e;
            }
            Y = o.return;
          }
        }
        var h = e.current;
        for (Y = h; Y !== null; ) {
          l = Y;
          var _ = l.child;
          if (l.subtreeFlags & 2064 && _ !== null) _.return = l, Y = _;
          else e: for (l = h; Y !== null; ) {
            if (u = Y, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Co(9, u);
              }
            } catch (W) {
              Re(u, u.return, W);
            }
            if (u === l) {
              Y = null;
              break e;
            }
            var I = u.sibling;
            if (I !== null) {
              I.return = u.return, Y = I;
              break e;
            }
            Y = u.return;
          }
        }
        if (ce = i, pn(), Tt && typeof Tt.onPostCommitFiberRoot == "function") try {
          Tt.onPostCommitFiberRoot(mo, e);
        } catch {
        }
        r = true;
      }
      return r;
    } finally {
      he = n, dt.transition = t;
    }
  }
  return false;
}
function fs(e, t, n) {
  t = or(n, t), t = vf(e, t, 1), e = rn(e, t, 1), t = Qe(), e !== null && (li(e, 1, t), qe(e, t));
}
function Re(e, t, n) {
  if (e.tag === 3) fs(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      fs(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
        e = or(n, e), e = hf(t, e, 1), t = rn(t, e, 1), e = Qe(), t !== null && (li(t, 1, e), qe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function pv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, Ie === e && (We & n) === n && (be === 4 || be === 3 && (We & 130023424) === We && 500 > De() - Ga ? _n(e, 0) : Qa |= n), qe(e, t);
}
function jf(e, t) {
  t === 0 && (e.mode & 1 ? (t = gi, gi <<= 1, !(gi & 130023424) && (gi = 4194304)) : t = 1);
  var n = Qe();
  e = xt(e, t), e !== null && (li(e, t, n), qe(e, n));
}
function vv(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), jf(e, n);
}
function hv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(V(314));
  }
  r !== null && r.delete(t), jf(e, n);
}
var Wf;
Wf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) Xe = true;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Xe = false, nv(e, t, n);
    Xe = !!(e.flags & 131072);
  }
  else Xe = false, Ee && t.flags & 1048576 && Uc(t, to, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ui(e, t), e = t.pendingProps;
      var i = tr(t, Ve.current);
      Zn(t, n), i = Fa(null, t, r, e, i, n);
      var o = za();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (o = true, qi(t)) : o = false, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ia(t), i.updater = ko, t.stateNode = i, i._reactInternals = t, Bl(t, r, e, n), t = Gl(null, t, r, true, o, n)) : (t.tag = 0, Ee && o && Ra(t), He(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ui(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = yv(r), e = yt(r, e), i) {
          case 0:
            t = Ql(null, t, r, e, n);
            break e;
          case 1:
            t = ts(null, t, r, e, n);
            break e;
          case 11:
            t = qu(null, t, r, e, n);
            break e;
          case 14:
            t = es(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(V(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yt(r, i), Ql(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yt(r, i), ts(e, t, r, i, n);
    case 3:
      e: {
        if (wf(t), e === null) throw Error(V(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Vc(e, t), io(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated) if (o = { element: r, isDehydrated: false, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = or(Error(V(423)), t), t = ns(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = or(Error(V(424)), t), t = ns(e, t, r, n, i);
          break e;
        } else for (it = nn(t.stateNode.containerInfo.firstChild), ot = t, Ee = true, wt = null, n = Gc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (nr(), r === i) {
            t = Vt(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Kc(t), e === null && zl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, jl(r, i) ? l = null : o !== null && jl(r, o) && (t.flags |= 32), gf(e, t), He(e, t, l, n), t.child;
    case 6:
      return e === null && zl(t), null;
    case 13:
      return Sf(e, t, n);
    case 4:
      return ja(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = rr(t, null, r, n) : He(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yt(r, i), qu(e, t, r, i, n);
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, ye(no, r._currentValue), r._currentValue = l, o !== null) if (kt(o.value, l)) {
          if (o.children === i.children && !Ze.current) {
            t = Vt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            l = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Ut(-1, n & -n), s.tag = 2;
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var S = f.pending;
                    S === null ? s.next = s : (s.next = S.next, S.next = s), f.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), xl(o.return, n, t), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (l = o.return, l === null) throw Error(V(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), xl(l, n, t), l = o.sibling;
          } else l = o.child;
          if (l !== null) l.return = o;
          else for (l = o; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (o = l.sibling, o !== null) {
              o.return = l.return, l = o;
              break;
            }
            l = l.return;
          }
          o = l;
        }
        He(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Zn(t, n), i = vt(i), r = r(i), t.flags |= 1, He(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = yt(r, t.pendingProps), i = yt(r.type, i), es(e, t, r, i, n);
    case 15:
      return mf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yt(r, i), Ui(e, t), t.tag = 1, Je(r) ? (e = true, qi(t)) : e = false, Zn(t, n), Hc(t, r, i), Bl(t, r, i, n), Gl(null, t, r, true, e, n);
    case 19:
      return Ef(e, t, n);
    case 22:
      return yf(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function Nf(e, t) {
  return uc(e, t);
}
function mv(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ft(e, t, n, r) {
  return new mv(e, t, n, r);
}
function Xa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function yv(e) {
  if (typeof e == "function") return Xa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ha) return 11;
    if (e === ma) return 14;
  }
  return 2;
}
function an(e, t) {
  var n = e.alternate;
  return n === null ? (n = ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function xi(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function") Xa(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Wn:
      return Cn(n.children, i, o, t);
    case va:
      l = 8, i |= 8;
      break;
    case pl:
      return e = ft(12, n, t, i | 2), e.elementType = pl, e.lanes = o, e;
    case vl:
      return e = ft(13, n, t, i), e.elementType = vl, e.lanes = o, e;
    case hl:
      return e = ft(19, n, t, i), e.elementType = hl, e.lanes = o, e;
    case Qs:
      return To(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Bs:
          l = 10;
          break e;
        case Hs:
          l = 9;
          break e;
        case ha:
          l = 11;
          break e;
        case ma:
          l = 14;
          break e;
        case Kt:
          l = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = ft(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Cn(e, t, n, r) {
  return e = ft(7, e, r, t), e.lanes = n, e;
}
function To(e, t, n, r) {
  return e = ft(22, e, r, t), e.elementType = Qs, e.lanes = n, e.stateNode = { isHidden: false }, e;
}
function sl(e, t, n) {
  return e = ft(6, e, null, t), e.lanes = n, e;
}
function cl(e, t, n) {
  return t = ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function gv(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ho(0), this.expirationTimes = Ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ho(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Za(e, t, n, r, i, o, l, u, s) {
  return e = new gv(e, t, n, u, s), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = ft(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ia(o), e;
}
function wv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Uf(e) {
  if (!e) return sn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return Wc(e, n, t);
  }
  return t;
}
function Ff(e, t, n, r, i, o, l, u, s) {
  return e = Za(n, r, true, e, i, o, l, u, s), e.context = Uf(null), n = e.current, r = Qe(), i = ln(n), o = Ut(r, i), o.callback = t ?? null, rn(n, o, i), e.current.lanes = i, li(e, i, r), qe(e, r), e;
}
function Ro(e, t, n, r) {
  var i = t.current, o = Qe(), l = ln(i);
  return n = Uf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ut(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = rn(i, t, l), e !== null && (Et(e, i, l, o), ji(e, i, l)), l;
}
function po(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ds(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ja(e, t) {
  ds(e, t), (e = e.alternate) && ds(e, t);
}
function Sv() {
  return null;
}
var zf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qa(e) {
  this._internalRoot = e;
}
Oo.prototype.render = qa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  Ro(e, t, null, null);
};
Oo.prototype.unmount = qa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dn(function() {
      Ro(null, e, null, null);
    }), t[zt] = null;
  }
};
function Oo(e) {
  this._internalRoot = e;
}
Oo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = hc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++) ;
    Yt.splice(n, 0, e), n === 0 && yc(e);
  }
};
function eu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Do(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ps() {
}
function Ev(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = po(l);
        o.call(f);
      };
    }
    var l = Ff(t, r, e, 0, null, false, false, "", ps);
    return e._reactRootContainer = l, e[zt] = l.current, $r(e.nodeType === 8 ? e.parentNode : e), Dn(), l;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = po(s);
      u.call(f);
    };
  }
  var s = Za(e, 0, false, null, null, false, false, "", ps);
  return e._reactRootContainer = s, e[zt] = s.current, $r(e.nodeType === 8 ? e.parentNode : e), Dn(function() {
    Ro(t, s, n, r);
  }), s;
}
function Ao(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var s = po(l);
        u.call(s);
      };
    }
    Ro(t, l, e, i);
  } else l = Ev(n, t, e, i, r);
  return po(l);
}
pc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Or(t.pendingLanes);
        n !== 0 && (wa(t, n | 1), qe(t, De()), !(ce & 6) && (lr = De() + 500, pn()));
      }
      break;
    case 13:
      Dn(function() {
        var r = xt(e, 1);
        if (r !== null) {
          var i = Qe();
          Et(r, e, 1, i);
        }
      }), Ja(e, 1);
  }
};
Sa = function(e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = Qe();
      Et(t, e, 134217728, n);
    }
    Ja(e, 134217728);
  }
};
vc = function(e) {
  if (e.tag === 13) {
    var t = ln(e), n = xt(e, t);
    if (n !== null) {
      var r = Qe();
      Et(n, e, t, r);
    }
    Ja(e, t);
  }
};
hc = function() {
  return he;
};
mc = function(e, t) {
  var n = he;
  try {
    return he = e, t();
  } finally {
    he = n;
  }
};
Pl = function(e, t, n) {
  switch (t) {
    case "input":
      if (gl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = So(r);
            if (!i) throw Error(V(90));
            Ks(r), gl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ys(e, n);
      break;
    case "select":
      t = n.value, t != null && Kn(e, !!n.multiple, t, false);
  }
};
nc = Ka;
rc = Dn;
var kv = { usingClientEntryPoint: false, Events: [ui, zn, So, ec, tc, Ka] }, Sr = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, _v = { bundleType: Sr.bundleType, version: Sr.version, rendererPackageName: Sr.rendererPackageName, rendererConfig: Sr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Bt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = lc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Sr.findFiberByHostInstance || Sv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Di.isDisabled && Di.supportsFiber) try {
    mo = Di.inject(_v), Tt = Di;
  } catch {
  }
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kv;
at.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!eu(t)) throw Error(V(200));
  return wv(e, t, null, n);
};
at.createRoot = function(e, t) {
  if (!eu(e)) throw Error(V(299));
  var n = false, r = "", i = zf;
  return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Za(e, 1, false, null, null, n, false, r, i), e[zt] = t.current, $r(e.nodeType === 8 ? e.parentNode : e), new qa(t);
};
at.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = lc(t), e = e === null ? null : e.stateNode, e;
};
at.flushSync = function(e) {
  return Dn(e);
};
at.hydrate = function(e, t, n) {
  if (!Do(t)) throw Error(V(200));
  return Ao(null, e, t, true, n);
};
at.hydrateRoot = function(e, t, n) {
  if (!eu(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, i = false, o = "", l = zf;
  if (n != null && (n.unstable_strictMode === true && (i = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Ff(t, null, e, 1, n ?? null, i, false, o, l), e[zt] = t.current, $r(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
  return new Oo(t);
};
at.render = function(e, t, n) {
  if (!Do(t)) throw Error(V(200));
  return Ao(null, e, t, false, n);
};
at.unmountComponentAtNode = function(e) {
  if (!Do(e)) throw Error(V(40));
  return e._reactRootContainer ? (Dn(function() {
    Ao(null, null, e, false, function() {
      e._reactRootContainer = null, e[zt] = null;
    });
  }), true) : false;
};
at.unstable_batchedUpdates = Ka;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Do(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return Ao(e, t, n, false, r);
};
at.version = "18.2.0-next-9e3b772b8-20220608";
function xf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf);
  } catch (e) {
    console.error(e);
  }
}
xf(), Us.exports = at;
var tu = Us.exports;
const Cv = la(tu), Eh = Rs({ __proto__: null, default: Cv }, [tu]);
var Pv, vs = tu;
Pv = vs.createRoot, vs.hydrateRoot;
var nu = { exports: {} }, qn = typeof Reflect == "object" ? Reflect : null, hs = qn && typeof qn.apply == "function" ? qn.apply : function(t, n, r) {
  return Function.prototype.apply.call(t, n, r);
}, Vi;
qn && typeof qn.ownKeys == "function" ? Vi = qn.ownKeys : Object.getOwnPropertySymbols ? Vi = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Vi = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Tv(e) {
  console && console.warn && console.warn(e);
}
var Vf = Number.isNaN || function(t) {
  return t !== t;
};
function me() {
  me.init.call(this);
}
nu.exports = me;
nu.exports.once = Av;
me.EventEmitter = me;
me.prototype._events = void 0;
me.prototype._eventsCount = 0;
me.prototype._maxListeners = void 0;
var ms = 10;
function Mo(e) {
  if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(me, "defaultMaxListeners", { enumerable: true, get: function() {
  return ms;
}, set: function(e) {
  if (typeof e != "number" || e < 0 || Vf(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
  ms = e;
} });
me.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
me.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Vf(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Bf(e) {
  return e._maxListeners === void 0 ? me.defaultMaxListeners : e._maxListeners;
}
me.prototype.getMaxListeners = function() {
  return Bf(this);
};
me.prototype.emit = function(t) {
  for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
  var i = t === "error", o = this._events;
  if (o !== void 0) i = i && o.error === void 0;
  else if (!i) return false;
  if (i) {
    var l;
    if (n.length > 0 && (l = n[0]), l instanceof Error) throw l;
    var u = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
    throw u.context = l, u;
  }
  var s = o[t];
  if (s === void 0) return false;
  if (typeof s == "function") hs(s, this, n);
  else for (var f = s.length, S = $f(s, f), r = 0; r < f; ++r) hs(S[r], this, n);
  return true;
};
function Hf(e, t, n, r) {
  var i, o, l;
  if (Mo(n), o = e._events, o === void 0 ? (o = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), l = o[t]), l === void 0) l = o[t] = n, ++e._eventsCount;
  else if (typeof l == "function" ? l = o[t] = r ? [n, l] : [l, n] : r ? l.unshift(n) : l.push(n), i = Bf(e), i > 0 && l.length > i && !l.warned) {
    l.warned = true;
    var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, Tv(u);
  }
  return e;
}
me.prototype.addListener = function(t, n) {
  return Hf(this, t, n, false);
};
me.prototype.on = me.prototype.addListener;
me.prototype.prependListener = function(t, n) {
  return Hf(this, t, n, true);
};
function Rv() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Qf(e, t, n) {
  var r = { fired: false, wrapFn: void 0, target: e, type: t, listener: n }, i = Rv.bind(r);
  return i.listener = n, r.wrapFn = i, i;
}
me.prototype.once = function(t, n) {
  return Mo(n), this.on(t, Qf(this, t, n)), this;
};
me.prototype.prependOnceListener = function(t, n) {
  return Mo(n), this.prependListener(t, Qf(this, t, n)), this;
};
me.prototype.removeListener = function(t, n) {
  var r, i, o, l, u;
  if (Mo(n), i = this._events, i === void 0) return this;
  if (r = i[t], r === void 0) return this;
  if (r === n || r.listener === n) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || n));
  else if (typeof r != "function") {
    for (o = -1, l = r.length - 1; l >= 0; l--) if (r[l] === n || r[l].listener === n) {
      u = r[l].listener, o = l;
      break;
    }
    if (o < 0) return this;
    o === 0 ? r.shift() : Ov(r, o), r.length === 1 && (i[t] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", t, u || n);
  }
  return this;
};
me.prototype.off = me.prototype.removeListener;
me.prototype.removeAllListeners = function(t) {
  var n, r, i;
  if (r = this._events, r === void 0) return this;
  if (r.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[t]), this;
  if (arguments.length === 0) {
    var o = Object.keys(r), l;
    for (i = 0; i < o.length; ++i) l = o[i], l !== "removeListener" && this.removeAllListeners(l);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (n = r[t], typeof n == "function") this.removeListener(t, n);
  else if (n !== void 0) for (i = n.length - 1; i >= 0; i--) this.removeListener(t, n[i]);
  return this;
};
function Gf(e, t, n) {
  var r = e._events;
  if (r === void 0) return [];
  var i = r[t];
  return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? Dv(i) : $f(i, i.length);
}
me.prototype.listeners = function(t) {
  return Gf(this, t, true);
};
me.prototype.rawListeners = function(t) {
  return Gf(this, t, false);
};
me.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Kf.call(e, t);
};
me.prototype.listenerCount = Kf;
function Kf(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function") return 1;
    if (n !== void 0) return n.length;
  }
  return 0;
}
me.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Vi(this._events) : [];
};
function $f(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
  return n;
}
function Ov(e, t) {
  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
  e.pop();
}
function Dv(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
  return t;
}
function Av(e, t) {
  return new Promise(function(n, r) {
    function i(l) {
      e.removeListener(t, o), r(l);
    }
    function o() {
      typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments));
    }
    Yf(e, t, o, { once: true }), t !== "error" && Mv(e, i, { once: true });
  });
}
function Mv(e, t, n) {
  typeof e.on == "function" && Yf(e, "error", t, n);
}
function Yf(e, t, n, r) {
  if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function") e.addEventListener(t, function i(o) {
    r.once && e.removeEventListener(t, i), n(o);
  });
  else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var bo = nu.exports;
const kh = la(bo);
var fl = {}, yn = {}, bn = {};
Object.defineProperty(bn, "__esModule", { value: true });
bn.WidgetApiDirection = void 0;
bn.invertedDirection = bv;
var Ar = function(e) {
  return e.ToWidget = "toWidget", e.FromWidget = "fromWidget", e;
}({});
bn.WidgetApiDirection = Ar;
function bv(e) {
  if (e === Ar.ToWidget) return Ar.FromWidget;
  if (e === Ar.FromWidget) return Ar.ToWidget;
  throw new Error("Invalid direction");
}
var Ot = {};
Object.defineProperty(Ot, "__esModule", { value: true });
Ot.UnstableApiVersion = Ot.MatrixApiVersion = Ot.CurrentApiVersions = void 0;
var ia = function(e) {
  return e.Prerelease1 = "0.0.1", e.Prerelease2 = "0.0.2", e;
}({});
Ot.MatrixApiVersion = ia;
var tt = function(e) {
  return e.MSC2762 = "org.matrix.msc2762", e.MSC2762_UPDATE_STATE = "org.matrix.msc2762_update_state", e.MSC2871 = "org.matrix.msc2871", e.MSC2873 = "org.matrix.msc2873", e.MSC2931 = "org.matrix.msc2931", e.MSC2974 = "org.matrix.msc2974", e.MSC2876 = "org.matrix.msc2876", e.MSC3819 = "org.matrix.msc3819", e.MSC3846 = "town.robin.msc3846", e.MSC3869 = "org.matrix.msc3869", e.MSC3973 = "org.matrix.msc3973", e.MSC4039 = "org.matrix.msc4039", e;
}({});
Ot.UnstableApiVersion = tt;
var Lv = [ia.Prerelease1, ia.Prerelease2, tt.MSC2762, tt.MSC2762_UPDATE_STATE, tt.MSC2871, tt.MSC2873, tt.MSC2931, tt.MSC2974, tt.MSC2876, tt.MSC3819, tt.MSC3846, tt.MSC3869, tt.MSC3973, tt.MSC4039];
Ot.CurrentApiVersions = Lv;
var Er = {}, ys;
function ru() {
  if (ys) return Er;
  ys = 1, Object.defineProperty(Er, "__esModule", { value: true }), Er.PostmessageTransport = void 0;
  var e = bo, t = Uo(), n = ["message"];
  function r(b) {
    "@babel/helpers - typeof";
    return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(O) {
      return typeof O;
    } : function(O) {
      return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
    }, r(b);
  }
  function i(b, O) {
    if (b == null) return {};
    var d = o(b, O), F, Q;
    if (Object.getOwnPropertySymbols) {
      var ie = Object.getOwnPropertySymbols(b);
      for (Q = 0; Q < ie.length; Q++) F = ie[Q], !(O.indexOf(F) >= 0) && Object.prototype.propertyIsEnumerable.call(b, F) && (d[F] = b[F]);
    }
    return d;
  }
  function o(b, O) {
    if (b == null) return {};
    var d = {}, F = Object.keys(b), Q, ie;
    for (ie = 0; ie < F.length; ie++) Q = F[ie], !(O.indexOf(Q) >= 0) && (d[Q] = b[Q]);
    return d;
  }
  function l(b, O) {
    var d = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols(b);
      O && (F = F.filter(function(Q) {
        return Object.getOwnPropertyDescriptor(b, Q).enumerable;
      })), d.push.apply(d, F);
    }
    return d;
  }
  function u(b) {
    for (var O = 1; O < arguments.length; O++) {
      var d = arguments[O] != null ? arguments[O] : {};
      O % 2 ? l(Object(d), true).forEach(function(F) {
        h(b, F, d[F]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(d)) : l(Object(d)).forEach(function(F) {
        Object.defineProperty(b, F, Object.getOwnPropertyDescriptor(d, F));
      });
    }
    return b;
  }
  function s(b, O) {
    if (!(b instanceof O)) throw new TypeError("Cannot call a class as a function");
  }
  function f(b, O) {
    for (var d = 0; d < O.length; d++) {
      var F = O[d];
      F.enumerable = F.enumerable || false, F.configurable = true, "value" in F && (F.writable = true), Object.defineProperty(b, _(F.key), F);
    }
  }
  function S(b, O, d) {
    return O && f(b.prototype, O), Object.defineProperty(b, "prototype", { writable: false }), b;
  }
  function C(b, O) {
    if (typeof O != "function" && O !== null) throw new TypeError("Super expression must either be null or a function");
    b.prototype = Object.create(O && O.prototype, { constructor: { value: b, writable: true, configurable: true } }), Object.defineProperty(b, "prototype", { writable: false }), O && m(b, O);
  }
  function m(b, O) {
    return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(F, Q) {
      return F.__proto__ = Q, F;
    }, m(b, O);
  }
  function M(b) {
    var O = ee();
    return function() {
      var F = k(b), Q;
      if (O) {
        var ie = k(this).constructor;
        Q = Reflect.construct(F, arguments, ie);
      } else Q = F.apply(this, arguments);
      return P(this, Q);
    };
  }
  function P(b, O) {
    if (O && (r(O) === "object" || typeof O == "function")) return O;
    if (O !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return L(b);
  }
  function L(b) {
    if (b === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b;
  }
  function ee() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function k(b) {
    return k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(d) {
      return d.__proto__ || Object.getPrototypeOf(d);
    }, k(b);
  }
  function h(b, O, d) {
    return O = _(O), O in b ? Object.defineProperty(b, O, { value: d, enumerable: true, configurable: true, writable: true }) : b[O] = d, b;
  }
  function _(b) {
    var O = I(b, "string");
    return r(O) === "symbol" ? O : String(O);
  }
  function I(b, O) {
    if (r(b) !== "object" || b === null) return b;
    var d = b[Symbol.toPrimitive];
    if (d !== void 0) {
      var F = d.call(b, O);
      if (r(F) !== "object") return F;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (O === "string" ? String : Number)(b);
  }
  var W = function(b) {
    C(d, b);
    var O = M(d);
    function d(F, Q, ie, pe) {
      var re;
      return s(this, d), re = O.call(this), re.sendDirection = F, re.transportWindow = ie, re.inboundWindow = pe, h(L(re), "strictOriginCheck", false), h(L(re), "targetOrigin", "*"), h(L(re), "timeoutSeconds", 10), h(L(re), "_ready", false), h(L(re), "_widgetId", void 0), h(L(re), "outboundRequests", /* @__PURE__ */ new Map()), h(L(re), "stopController", new AbortController()), h(L(re), "handleMessage", function(Ue) {
        if (!re.stopController.signal.aborted && Ue.data && !(re.strictOriginCheck && Ue.origin !== globalThis.origin)) {
          var fe = Ue.data;
          if (!(!fe.action || !fe.requestId || !fe.widgetId)) if (fe.response) {
            if (fe.api !== re.sendDirection) return;
            re.handleResponse(fe);
          } else {
            var et = fe;
            if (et.api !== (0, t.invertedDirection)(re.sendDirection)) return;
            re.handleRequest(et);
          }
        }
      }), re._widgetId = Q, re;
    }
    return S(d, [{ key: "ready", get: function() {
      return this._ready;
    } }, { key: "widgetId", get: function() {
      return this._widgetId || null;
    } }, { key: "nextRequestId", get: function() {
      for (var Q = "widgetapi-".concat(Date.now()), ie = 0, pe = Q; this.outboundRequests.has(pe); ) pe = "".concat(Q, "-").concat(ie++);
      return this.outboundRequests.set(pe, null), pe;
    } }, { key: "sendInternal", value: function(Q) {
      console.log("[PostmessageTransport] Sending object to ".concat(this.targetOrigin, ": "), Q), this.transportWindow.postMessage(Q, this.targetOrigin);
    } }, { key: "reply", value: function(Q, ie) {
      return this.sendInternal(u(u({}, Q), {}, { response: ie }));
    } }, { key: "send", value: function(Q, ie) {
      return this.sendComplete(Q, ie).then(function(pe) {
        return pe.response;
      });
    } }, { key: "sendComplete", value: function(Q, ie) {
      var pe = this;
      if (!this.ready || !this.widgetId) return Promise.reject(new Error("Not ready or unknown widget ID"));
      var re = { api: this.sendDirection, widgetId: this.widgetId, requestId: this.nextRequestId, action: Q, data: ie };
      return Q === t.WidgetApiToWidgetAction.UpdateVisibility && (re.visible = ie.visible), new Promise(function(Ue, fe) {
        var et = function(se) {
          ne(), Ue(se);
        }, $e = function(se) {
          ne(), fe(se);
        }, H = setTimeout(function() {
          return $e(new Error("Request timed out"));
        }, (pe.timeoutSeconds || 1) * 1e3), te = function() {
          return $e(new Error("Transport stopped"));
        };
        pe.stopController.signal.addEventListener("abort", te);
        var ne = function() {
          pe.outboundRequests.delete(re.requestId), clearTimeout(H), pe.stopController.signal.removeEventListener("abort", te);
        };
        pe.outboundRequests.set(re.requestId, { request: re, resolve: et, reject: $e }), pe.sendInternal(re);
      });
    } }, { key: "start", value: function() {
      this.inboundWindow.addEventListener("message", this.handleMessage), this._ready = true;
    } }, { key: "stop", value: function() {
      this._ready = false, this.stopController.abort(), this.inboundWindow.removeEventListener("message", this.handleMessage);
    } }, { key: "handleRequest", value: function(Q) {
      if (this.widgetId) {
        if (this.widgetId !== Q.widgetId) return;
      } else this._widgetId = Q.widgetId;
      this.emit("message", new CustomEvent("message", { detail: Q }));
    } }, { key: "handleResponse", value: function(Q) {
      if (Q.widgetId === this.widgetId) {
        var ie = this.outboundRequests.get(Q.requestId);
        if (ie) if ((0, t.isErrorResponse)(Q.response)) {
          var pe = Q.response.error, re = pe.message, Ue = i(pe, n);
          ie.reject(new t.WidgetApiResponseError(re, Ue));
        } else ie.resolve(Q);
      }
    } }]), d;
  }(e.EventEmitter);
  return Er.PostmessageTransport = W, Er;
}
var cn = {};
Object.defineProperty(cn, "__esModule", { value: true });
cn.WidgetApiToWidgetAction = cn.WidgetApiFromWidgetAction = void 0;
var Iv = function(e) {
  return e.SupportedApiVersions = "supported_api_versions", e.Capabilities = "capabilities", e.NotifyCapabilities = "notify_capabilities", e.ThemeChange = "theme_change", e.LanguageChange = "language_change", e.TakeScreenshot = "screenshot", e.UpdateVisibility = "visibility", e.OpenIDCredentials = "openid_credentials", e.WidgetConfig = "widget_config", e.CloseModalWidget = "close_modal", e.ButtonClicked = "button_clicked", e.SendEvent = "send_event", e.SendToDevice = "send_to_device", e.UpdateState = "update_state", e.UpdateTurnServers = "update_turn_servers", e;
}({});
cn.WidgetApiToWidgetAction = Iv;
var jv = function(e) {
  return e.SupportedApiVersions = "supported_api_versions", e.ContentLoaded = "content_loaded", e.SendSticker = "m.sticker", e.UpdateAlwaysOnScreen = "set_always_on_screen", e.GetOpenIDCredentials = "get_openid", e.CloseModalWidget = "close_modal", e.OpenModalWidget = "open_modal", e.SetModalButtonEnabled = "set_button_enabled", e.SendEvent = "send_event", e.SendToDevice = "send_to_device", e.WatchTurnServers = "watch_turn_servers", e.UnwatchTurnServers = "unwatch_turn_servers", e.BeeperReadRoomAccountData = "com.beeper.read_room_account_data", e.MSC2876ReadEvents = "org.matrix.msc2876.read_events", e.MSC2931Navigate = "org.matrix.msc2931.navigate", e.MSC2974RenegotiateCapabilities = "org.matrix.msc2974.request_capabilities", e.MSC3869ReadRelations = "org.matrix.msc3869.read_relations", e.MSC3973UserDirectorySearch = "org.matrix.msc3973.user_directory_search", e.MSC4039GetMediaConfigAction = "org.matrix.msc4039.get_media_config", e.MSC4039UploadFileAction = "org.matrix.msc4039.upload_file", e.MSC4039DownloadFileAction = "org.matrix.msc4039.download_file", e.MSC4157UpdateDelayedEvent = "org.matrix.msc4157.update_delayed_event", e;
}({});
cn.WidgetApiFromWidgetAction = jv;
var cr = {};
Object.defineProperty(cr, "__esModule", { value: true });
cr.OpenIDRequestState = void 0;
var Wv = function(e) {
  return e.Allowed = "allowed", e.Blocked = "blocked", e.PendingUserConfirmation = "request", e;
}({});
cr.OpenIDRequestState = Wv;
var ci = {};
Object.defineProperty(ci, "__esModule", { value: true });
ci.MatrixWidgetType = void 0;
var Nv = function(e) {
  return e.Custom = "m.custom", e.JitsiMeet = "m.jitsi", e.Stickerpicker = "m.stickerpicker", e;
}({});
ci.MatrixWidgetType = Nv;
var fi = {};
Object.defineProperty(fi, "__esModule", { value: true });
fi.BuiltInModalButtonID = void 0;
var Uv = function(e) {
  return e.Close = "m.close", e;
}({});
fi.BuiltInModalButtonID = Uv;
var Dt = {};
Object.defineProperty(Dt, "__esModule", { value: true });
Dt.WidgetEventCapability = Dt.EventKind = Dt.EventDirection = void 0;
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function Fv(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = zv(e)) || t) {
      n && (e = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= e.length ? { done: true } : { done: false, value: e[r++] };
      }, e: function(f) {
        throw f;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = true, l = false, u;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var f = n.next();
    return o = f.done, f;
  }, e: function(f) {
    l = true, u = f;
  }, f: function() {
    try {
      !o && n.return != null && n.return();
    } finally {
      if (l) throw u;
    }
  } };
}
function zv(e, t) {
  if (e) {
    if (typeof e == "string") return gs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gs(e, t);
  }
}
function gs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function xv(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ws(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, Bv(r.key), r);
  }
}
function Vv(e, t, n) {
  return t && ws(e.prototype, t), n && ws(e, n), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function Bv(e) {
  var t = Hv(e, "string");
  return ri(t) === "symbol" ? t : String(t);
}
function Hv(e, t) {
  if (ri(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ri(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var nt = function(e) {
  return e.Event = "event", e.State = "state_event", e.ToDevice = "to_device", e.RoomAccount = "room_account", e;
}({});
Dt.EventKind = nt;
var Gt = function(e) {
  return e.Send = "send", e.Receive = "receive", e;
}({});
Dt.EventDirection = Gt;
var Qv = function() {
  function e(t, n, r, i, o) {
    xv(this, e), this.direction = t, this.eventType = n, this.kind = r, this.keyStr = i, this.raw = o;
  }
  return Vv(e, [{ key: "matchesAsStateEvent", value: function(n, r, i) {
    return this.kind !== nt.State || this.direction !== n || this.eventType !== r ? false : this.keyStr === null || this.keyStr === i;
  } }, { key: "matchesAsToDeviceEvent", value: function(n, r) {
    return !(this.kind !== nt.ToDevice || this.direction !== n || this.eventType !== r);
  } }, { key: "matchesAsRoomEvent", value: function(n, r) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (this.kind !== nt.Event || this.direction !== n || this.eventType !== r) return false;
    if (this.eventType === "m.room.message") {
      if (this.keyStr === null || this.keyStr === i) return true;
    } else return true;
    return false;
  } }, { key: "matchesAsRoomAccountData", value: function(n, r) {
    return !(this.kind !== nt.RoomAccount || this.direction !== n || this.eventType !== r);
  } }], [{ key: "forStateEvent", value: function(n, r, i) {
    r = r.replace(/#/g, "\\#"), i = i != null ? "#".concat(i) : "";
    var o = "org.matrix.msc2762.".concat(n, ".state_event:").concat(r).concat(i);
    return e.findEventCapabilities([o])[0];
  } }, { key: "forToDeviceEvent", value: function(n, r) {
    var i = "org.matrix.msc3819.".concat(n, ".to_device:").concat(r);
    return e.findEventCapabilities([i])[0];
  } }, { key: "forRoomEvent", value: function(n, r) {
    var i = "org.matrix.msc2762.".concat(n, ".event:").concat(r);
    return e.findEventCapabilities([i])[0];
  } }, { key: "forRoomMessageEvent", value: function(n, r) {
    r = r ?? "";
    var i = "org.matrix.msc2762.".concat(n, ".event:m.room.message#").concat(r);
    return e.findEventCapabilities([i])[0];
  } }, { key: "forRoomAccountData", value: function(n, r) {
    var i = "com.beeper.capabilities.".concat(n, ".room_account_data:").concat(r);
    return e.findEventCapabilities([i])[0];
  } }, { key: "findEventCapabilities", value: function(n) {
    var r = [], i = Fv(n), o;
    try {
      for (i.s(); !(o = i.n()).done; ) {
        var l = o.value, u = null, s = void 0, f = null;
        if (l.startsWith("org.matrix.msc2762.send.event:") ? (u = Gt.Send, f = nt.Event, s = l.substring(30)) : l.startsWith("org.matrix.msc2762.send.state_event:") ? (u = Gt.Send, f = nt.State, s = l.substring(36)) : l.startsWith("org.matrix.msc3819.send.to_device:") ? (u = Gt.Send, f = nt.ToDevice, s = l.substring(34)) : l.startsWith("org.matrix.msc2762.receive.event:") ? (u = Gt.Receive, f = nt.Event, s = l.substring(33)) : l.startsWith("org.matrix.msc2762.receive.state_event:") ? (u = Gt.Receive, f = nt.State, s = l.substring(39)) : l.startsWith("org.matrix.msc3819.receive.to_device:") ? (u = Gt.Receive, f = nt.ToDevice, s = l.substring(37)) : l.startsWith("com.beeper.capabilities.receive.room_account_data:") && (u = Gt.Receive, f = nt.RoomAccount, s = l.substring(50)), !(u === null || f === null || s === void 0)) {
          var S = s.startsWith("m.room.message#") || f === nt.State, C = null;
          if (s.includes("#") && S) {
            var m = s.split("#"), M = m.findIndex(function(P) {
              return !P.endsWith("\\");
            });
            s = m.slice(0, M + 1).map(function(P) {
              return P.endsWith("\\") ? P.substring(0, P.length - 1) : P;
            }).join("#"), C = m.slice(M + 1).join("#");
          }
          r.push(new e(u, s, f, C, l));
        }
      }
    } catch (P) {
      i.e(P);
    } finally {
      i.f();
    }
    return r;
  } }]), e;
}();
Dt.WidgetEventCapability = Qv;
var fr = {};
Object.defineProperty(fr, "__esModule", { value: true });
fr.Symbols = void 0;
var Gv = function(e) {
  return e.AnyRoom = "*", e;
}({});
fr.Symbols = Gv;
var dr = {};
Object.defineProperty(dr, "__esModule", { value: true });
dr.UpdateDelayedEventAction = void 0;
var Kv = function(e) {
  return e.Cancel = "cancel", e.Restart = "restart", e.Send = "send", e;
}({});
dr.UpdateDelayedEventAction = Kv;
var Ss;
function $v() {
  if (Ss) return yn;
  Ss = 1;
  function e(g) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
      return typeof v;
    } : function(v) {
      return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
    }, e(g);
  }
  Object.defineProperty(yn, "__esModule", { value: true }), yn.WidgetApiResponseError = yn.WidgetApi = void 0;
  var t = bo, n = bn, r = Ot, i = ru(), o = cn, l = cr, u = ci, s = fi, f = Dt, S = fr, C = dr;
  function m() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    m = function() {
      return g;
    };
    var g = {}, v = Object.prototype, c = v.hasOwnProperty, p = Object.defineProperty || function(R, D, j) {
      R[D] = j.value;
    }, a = typeof Symbol == "function" ? Symbol : {}, w = a.iterator || "@@iterator", y = a.asyncIterator || "@@asyncIterator", E = a.toStringTag || "@@toStringTag";
    function T(R, D, j) {
      return Object.defineProperty(R, D, { value: j, enumerable: true, configurable: true, writable: true }), R[D];
    }
    try {
      T({}, "");
    } catch {
      T = function(j, x, X) {
        return j[x] = X;
      };
    }
    function A(R, D, j, x) {
      var X = D && D.prototype instanceof Z ? D : Z, J = Object.create(X.prototype), ae = new Ln(x || []);
      return p(J, "_invoke", { value: Oe(R, j, ae) }), J;
    }
    function U(R, D, j) {
      try {
        return { type: "normal", arg: R.call(D, j) };
      } catch (x) {
        return { type: "throw", arg: x };
      }
    }
    g.wrap = A;
    var q = {};
    function Z() {
    }
    function $() {
    }
    function le() {
    }
    var de = {};
    T(de, w, function() {
      return this;
    });
    var Se = Object.getPrototypeOf, G = Se && Se(Se(K([])));
    G && G !== v && c.call(G, w) && (de = G);
    var oe = le.prototype = Z.prototype = Object.create(de);
    function Mt(R) {
      ["next", "throw", "return"].forEach(function(D) {
        T(R, D, function(j) {
          return this._invoke(D, j);
        });
      });
    }
    function bt(R, D) {
      function j(X, J, ae, ke) {
        var _e = U(R[X], R, J);
        if (_e.type !== "throw") {
          var Be = _e.arg, Ht = Be.value;
          return Ht && e(Ht) == "object" && c.call(Ht, "__await") ? D.resolve(Ht.__await).then(function(mn) {
            j("next", mn, ae, ke);
          }, function(mn) {
            j("throw", mn, ae, ke);
          }) : D.resolve(Ht).then(function(mn) {
            Be.value = mn, ae(Be);
          }, function(mn) {
            return j("throw", mn, ae, ke);
          });
        }
        ke(_e.arg);
      }
      var x;
      p(this, "_invoke", { value: function(J, ae) {
        function ke() {
          return new D(function(_e, Be) {
            j(J, ae, _e, Be);
          });
        }
        return x = x ? x.then(ke, ke) : ke();
      } });
    }
    function Oe(R, D, j) {
      var x = "suspendedStart";
      return function(X, J) {
        if (x === "executing") throw new Error("Generator is already running");
        if (x === "completed") {
          if (X === "throw") throw J;
          return z();
        }
        for (j.method = X, j.arg = J; ; ) {
          var ae = j.delegate;
          if (ae) {
            var ke = Lt(ae, j);
            if (ke) {
              if (ke === q) continue;
              return ke;
            }
          }
          if (j.method === "next") j.sent = j._sent = j.arg;
          else if (j.method === "throw") {
            if (x === "suspendedStart") throw x = "completed", j.arg;
            j.dispatchException(j.arg);
          } else j.method === "return" && j.abrupt("return", j.arg);
          x = "executing";
          var _e = U(R, D, j);
          if (_e.type === "normal") {
            if (x = j.done ? "completed" : "suspendedYield", _e.arg === q) continue;
            return { value: _e.arg, done: j.done };
          }
          _e.type === "throw" && (x = "completed", j.method = "throw", j.arg = _e.arg);
        }
      };
    }
    function Lt(R, D) {
      var j = D.method, x = R.iterator[j];
      if (x === void 0) return D.delegate = null, j === "throw" && R.iterator.return && (D.method = "return", D.arg = void 0, Lt(R, D), D.method === "throw") || j !== "return" && (D.method = "throw", D.arg = new TypeError("The iterator does not provide a '" + j + "' method")), q;
      var X = U(x, R.iterator, D.arg);
      if (X.type === "throw") return D.method = "throw", D.arg = X.arg, D.delegate = null, q;
      var J = X.arg;
      return J ? J.done ? (D[R.resultName] = J.value, D.next = R.nextLoc, D.method !== "return" && (D.method = "next", D.arg = void 0), D.delegate = null, q) : J : (D.method = "throw", D.arg = new TypeError("iterator result is not an object"), D.delegate = null, q);
    }
    function vn(R) {
      var D = { tryLoc: R[0] };
      1 in R && (D.catchLoc = R[1]), 2 in R && (D.finallyLoc = R[2], D.afterLoc = R[3]), this.tryEntries.push(D);
    }
    function hn(R) {
      var D = R.completion || {};
      D.type = "normal", delete D.arg, R.completion = D;
    }
    function Ln(R) {
      this.tryEntries = [{ tryLoc: "root" }], R.forEach(vn, this), this.reset(true);
    }
    function K(R) {
      if (R) {
        var D = R[w];
        if (D) return D.call(R);
        if (typeof R.next == "function") return R;
        if (!isNaN(R.length)) {
          var j = -1, x = function X() {
            for (; ++j < R.length; ) if (c.call(R, j)) return X.value = R[j], X.done = false, X;
            return X.value = void 0, X.done = true, X;
          };
          return x.next = x;
        }
      }
      return { next: z };
    }
    function z() {
      return { value: void 0, done: true };
    }
    return $.prototype = le, p(oe, "constructor", { value: le, configurable: true }), p(le, "constructor", { value: $, configurable: true }), $.displayName = T(le, E, "GeneratorFunction"), g.isGeneratorFunction = function(R) {
      var D = typeof R == "function" && R.constructor;
      return !!D && (D === $ || (D.displayName || D.name) === "GeneratorFunction");
    }, g.mark = function(R) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(R, le) : (R.__proto__ = le, T(R, E, "GeneratorFunction")), R.prototype = Object.create(oe), R;
    }, g.awrap = function(R) {
      return { __await: R };
    }, Mt(bt.prototype), T(bt.prototype, y, function() {
      return this;
    }), g.AsyncIterator = bt, g.async = function(R, D, j, x, X) {
      X === void 0 && (X = Promise);
      var J = new bt(A(R, D, j, x), X);
      return g.isGeneratorFunction(D) ? J : J.next().then(function(ae) {
        return ae.done ? ae.value : J.next();
      });
    }, Mt(oe), T(oe, E, "Generator"), T(oe, w, function() {
      return this;
    }), T(oe, "toString", function() {
      return "[object Generator]";
    }), g.keys = function(R) {
      var D = Object(R), j = [];
      for (var x in D) j.push(x);
      return j.reverse(), function X() {
        for (; j.length; ) {
          var J = j.pop();
          if (J in D) return X.value = J, X.done = false, X;
        }
        return X.done = true, X;
      };
    }, g.values = K, Ln.prototype = { constructor: Ln, reset: function(D) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(hn), !D) for (var j in this) j.charAt(0) === "t" && c.call(this, j) && !isNaN(+j.slice(1)) && (this[j] = void 0);
    }, stop: function() {
      this.done = true;
      var D = this.tryEntries[0].completion;
      if (D.type === "throw") throw D.arg;
      return this.rval;
    }, dispatchException: function(D) {
      if (this.done) throw D;
      var j = this;
      function x(Be, Ht) {
        return ae.type = "throw", ae.arg = D, j.next = Be, Ht && (j.method = "next", j.arg = void 0), !!Ht;
      }
      for (var X = this.tryEntries.length - 1; X >= 0; --X) {
        var J = this.tryEntries[X], ae = J.completion;
        if (J.tryLoc === "root") return x("end");
        if (J.tryLoc <= this.prev) {
          var ke = c.call(J, "catchLoc"), _e = c.call(J, "finallyLoc");
          if (ke && _e) {
            if (this.prev < J.catchLoc) return x(J.catchLoc, true);
            if (this.prev < J.finallyLoc) return x(J.finallyLoc);
          } else if (ke) {
            if (this.prev < J.catchLoc) return x(J.catchLoc, true);
          } else {
            if (!_e) throw new Error("try statement without catch or finally");
            if (this.prev < J.finallyLoc) return x(J.finallyLoc);
          }
        }
      }
    }, abrupt: function(D, j) {
      for (var x = this.tryEntries.length - 1; x >= 0; --x) {
        var X = this.tryEntries[x];
        if (X.tryLoc <= this.prev && c.call(X, "finallyLoc") && this.prev < X.finallyLoc) {
          var J = X;
          break;
        }
      }
      J && (D === "break" || D === "continue") && J.tryLoc <= j && j <= J.finallyLoc && (J = null);
      var ae = J ? J.completion : {};
      return ae.type = D, ae.arg = j, J ? (this.method = "next", this.next = J.finallyLoc, q) : this.complete(ae);
    }, complete: function(D, j) {
      if (D.type === "throw") throw D.arg;
      return D.type === "break" || D.type === "continue" ? this.next = D.arg : D.type === "return" ? (this.rval = this.arg = D.arg, this.method = "return", this.next = "end") : D.type === "normal" && j && (this.next = j), q;
    }, finish: function(D) {
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var x = this.tryEntries[j];
        if (x.finallyLoc === D) return this.complete(x.completion, x.afterLoc), hn(x), q;
      }
    }, catch: function(D) {
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var x = this.tryEntries[j];
        if (x.tryLoc === D) {
          var X = x.completion;
          if (X.type === "throw") {
            var J = X.arg;
            hn(x);
          }
          return J;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(D, j, x) {
      return this.delegate = { iterator: K(D), resultName: j, nextLoc: x }, this.method === "next" && (this.arg = void 0), q;
    } }, g;
  }
  function M(g, v, c, p, a, w, y) {
    try {
      var E = g[w](y), T = E.value;
    } catch (A) {
      c(A);
      return;
    }
    E.done ? v(T) : Promise.resolve(T).then(p, a);
  }
  function P(g) {
    return function() {
      var v = this, c = arguments;
      return new Promise(function(p, a) {
        var w = g.apply(v, c);
        function y(T) {
          M(w, p, a, y, E, "next", T);
        }
        function E(T) {
          M(w, p, a, y, E, "throw", T);
        }
        y(void 0);
      });
    };
  }
  function L(g, v) {
    var c = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(g);
      v && (p = p.filter(function(a) {
        return Object.getOwnPropertyDescriptor(g, a).enumerable;
      })), c.push.apply(c, p);
    }
    return c;
  }
  function ee(g) {
    for (var v = 1; v < arguments.length; v++) {
      var c = arguments[v] != null ? arguments[v] : {};
      v % 2 ? L(Object(c), true).forEach(function(p) {
        I(g, p, c[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(c)) : L(Object(c)).forEach(function(p) {
        Object.defineProperty(g, p, Object.getOwnPropertyDescriptor(c, p));
      });
    }
    return g;
  }
  function k(g, v) {
    var c = typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
    if (!c) {
      if (Array.isArray(g) || (c = h(g)) || v) {
        c && (g = c);
        var p = 0, a = function() {
        };
        return { s: a, n: function() {
          return p >= g.length ? { done: true } : { done: false, value: g[p++] };
        }, e: function(A) {
          throw A;
        }, f: a };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var w = true, y = false, E;
    return { s: function() {
      c = c.call(g);
    }, n: function() {
      var A = c.next();
      return w = A.done, A;
    }, e: function(A) {
      y = true, E = A;
    }, f: function() {
      try {
        !w && c.return != null && c.return();
      } finally {
        if (y) throw E;
      }
    } };
  }
  function h(g, v) {
    if (g) {
      if (typeof g == "string") return _(g, v);
      var c = Object.prototype.toString.call(g).slice(8, -1);
      if (c === "Object" && g.constructor && (c = g.constructor.name), c === "Map" || c === "Set") return Array.from(g);
      if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return _(g, v);
    }
  }
  function _(g, v) {
    (v == null || v > g.length) && (v = g.length);
    for (var c = 0, p = new Array(v); c < v; c++) p[c] = g[c];
    return p;
  }
  function I(g, v, c) {
    return v = O(v), v in g ? Object.defineProperty(g, v, { value: c, enumerable: true, configurable: true, writable: true }) : g[v] = c, g;
  }
  function W(g, v) {
    for (var c = 0; c < v.length; c++) {
      var p = v[c];
      p.enumerable = p.enumerable || false, p.configurable = true, "value" in p && (p.writable = true), Object.defineProperty(g, O(p.key), p);
    }
  }
  function b(g, v, c) {
    return v && W(g.prototype, v), Object.defineProperty(g, "prototype", { writable: false }), g;
  }
  function O(g) {
    var v = d(g, "string");
    return e(v) === "symbol" ? v : String(v);
  }
  function d(g, v) {
    if (e(g) !== "object" || g === null) return g;
    var c = g[Symbol.toPrimitive];
    if (c !== void 0) {
      var p = c.call(g, v);
      if (e(p) !== "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(g);
  }
  function F(g, v) {
    if (!(g instanceof v)) throw new TypeError("Cannot call a class as a function");
  }
  function Q(g, v) {
    if (typeof v != "function" && v !== null) throw new TypeError("Super expression must either be null or a function");
    g.prototype = Object.create(v && v.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), v && H(g, v);
  }
  function ie(g) {
    var v = et();
    return function() {
      var p = te(g), a;
      if (v) {
        var w = te(this).constructor;
        a = Reflect.construct(p, arguments, w);
      } else a = p.apply(this, arguments);
      return pe(this, a);
    };
  }
  function pe(g, v) {
    if (v && (e(v) === "object" || typeof v == "function")) return v;
    if (v !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return re(g);
  }
  function re(g) {
    if (g === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return g;
  }
  function Ue(g) {
    var v = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return Ue = function(p) {
      if (p === null || !$e(p)) return p;
      if (typeof p != "function") throw new TypeError("Super expression must either be null or a function");
      if (typeof v < "u") {
        if (v.has(p)) return v.get(p);
        v.set(p, a);
      }
      function a() {
        return fe(p, arguments, te(this).constructor);
      }
      return a.prototype = Object.create(p.prototype, { constructor: { value: a, enumerable: false, writable: true, configurable: true } }), H(a, p);
    }, Ue(g);
  }
  function fe(g, v, c) {
    return et() ? fe = Reflect.construct.bind() : fe = function(a, w, y) {
      var E = [null];
      E.push.apply(E, w);
      var T = Function.bind.apply(a, E), A = new T();
      return y && H(A, y.prototype), A;
    }, fe.apply(null, arguments);
  }
  function et() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function $e(g) {
    return Function.toString.call(g).indexOf("[native code]") !== -1;
  }
  function H(g, v) {
    return H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, a) {
      return p.__proto__ = a, p;
    }, H(g, v);
  }
  function te(g) {
    return te = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(c) {
      return c.__proto__ || Object.getPrototypeOf(c);
    }, te(g);
  }
  function ne(g) {
    return new At(g, 0);
  }
  function ve(g) {
    return function() {
      return new se(g.apply(this, arguments));
    };
  }
  function se(g) {
    var v, c;
    function p(w, y) {
      try {
        var E = g[w](y), T = E.value, A = T instanceof At;
        Promise.resolve(A ? T.v : T).then(function(U) {
          if (A) {
            var q = w === "return" ? "return" : "next";
            if (!T.k || U.done) return p(q, U);
            U = g[q](U).value;
          }
          a(E.done ? "return" : "normal", U);
        }, function(U) {
          p("throw", U);
        });
      } catch (U) {
        a("throw", U);
      }
    }
    function a(w, y) {
      switch (w) {
        case "return":
          v.resolve({ value: y, done: true });
          break;
        case "throw":
          v.reject(y);
          break;
        default:
          v.resolve({ value: y, done: false });
      }
      (v = v.next) ? p(v.key, v.arg) : c = null;
    }
    this._invoke = function(w, y) {
      return new Promise(function(E, T) {
        var A = { key: w, arg: y, resolve: E, reject: T, next: null };
        c ? c = c.next = A : (v = c = A, p(w, y));
      });
    }, typeof g.return != "function" && (this.return = void 0);
  }
  se.prototype[typeof Symbol == "function" && Symbol.asyncIterator || "@@asyncIterator"] = function() {
    return this;
  }, se.prototype.next = function(g) {
    return this._invoke("next", g);
  }, se.prototype.throw = function(g) {
    return this._invoke("throw", g);
  }, se.prototype.return = function(g) {
    return this._invoke("return", g);
  };
  function At(g, v) {
    this.v = g, this.k = v;
  }
  var N = function(g) {
    Q(c, g);
    var v = ie(c);
    function c(p, a) {
      var w;
      return F(this, c), w = v.call(this, p), w.data = a, w;
    }
    return b(c);
  }(Ue(Error));
  yn.WidgetApiResponseError = N, N.prototype.name = N.name;
  var B = function(g) {
    Q(c, g);
    var v = ie(c);
    function c() {
      var p, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (F(this, c), p = v.call(this), I(re(p), "transport", void 0), I(re(p), "capabilitiesFinished", false), I(re(p), "supportsMSC2974Renegotiate", false), I(re(p), "requestedCapabilities", []), I(re(p), "approvedCapabilities", void 0), I(re(p), "cachedClientVersions", void 0), I(re(p), "turnServerWatchers", 0), !globalThis.parent) throw new Error("No parent window. This widget doesn't appear to be embedded properly.");
      return p.transport = new i.PostmessageTransport(n.WidgetApiDirection.FromWidget, a, globalThis.parent, globalThis), p.transport.targetOrigin = w, p.transport.on("message", p.handleMessage.bind(re(p))), p;
    }
    return b(c, [{ key: "hasCapability", value: function(a) {
      return Array.isArray(this.approvedCapabilities) ? this.approvedCapabilities.includes(a) : this.requestedCapabilities.includes(a);
    } }, { key: "requestCapability", value: function(a) {
      if (this.capabilitiesFinished && !this.supportsMSC2974Renegotiate) throw new Error("Capabilities have already been negotiated");
      this.requestedCapabilities.push(a);
    } }, { key: "requestCapabilities", value: function(a) {
      var w = k(a), y;
      try {
        for (w.s(); !(y = w.n()).done; ) {
          var E = y.value;
          this.requestCapability(E);
        }
      } catch (T) {
        w.e(T);
      } finally {
        w.f();
      }
    } }, { key: "requestCapabilityForRoomTimeline", value: function(a) {
      this.requestCapability("org.matrix.msc2762.timeline:".concat(a));
    } }, { key: "requestCapabilityToSendState", value: function(a, w) {
      this.requestCapability(f.WidgetEventCapability.forStateEvent(f.EventDirection.Send, a, w).raw);
    } }, { key: "requestCapabilityToReceiveState", value: function(a, w) {
      this.requestCapability(f.WidgetEventCapability.forStateEvent(f.EventDirection.Receive, a, w).raw);
    } }, { key: "requestCapabilityToSendToDevice", value: function(a) {
      this.requestCapability(f.WidgetEventCapability.forToDeviceEvent(f.EventDirection.Send, a).raw);
    } }, { key: "requestCapabilityToReceiveToDevice", value: function(a) {
      this.requestCapability(f.WidgetEventCapability.forToDeviceEvent(f.EventDirection.Receive, a).raw);
    } }, { key: "requestCapabilityToSendEvent", value: function(a) {
      this.requestCapability(f.WidgetEventCapability.forRoomEvent(f.EventDirection.Send, a).raw);
    } }, { key: "requestCapabilityToReceiveEvent", value: function(a) {
      this.requestCapability(f.WidgetEventCapability.forRoomEvent(f.EventDirection.Receive, a).raw);
    } }, { key: "requestCapabilityToSendMessage", value: function(a) {
      this.requestCapability(f.WidgetEventCapability.forRoomMessageEvent(f.EventDirection.Send, a).raw);
    } }, { key: "requestCapabilityToReceiveMessage", value: function(a) {
      this.requestCapability(f.WidgetEventCapability.forRoomMessageEvent(f.EventDirection.Receive, a).raw);
    } }, { key: "requestCapabilityToReceiveRoomAccountData", value: function(a) {
      this.requestCapability(f.WidgetEventCapability.forRoomAccountData(f.EventDirection.Receive, a).raw);
    } }, { key: "requestOpenIDConnectToken", value: function() {
      var a = this;
      return new Promise(function(w, y) {
        a.transport.sendComplete(o.WidgetApiFromWidgetAction.GetOpenIDCredentials, {}).then(function(E) {
          var T = E.response;
          if (T.state === l.OpenIDRequestState.Allowed) w(T);
          else if (T.state === l.OpenIDRequestState.Blocked) y(new Error("User declined to verify their identity"));
          else if (T.state === l.OpenIDRequestState.PendingUserConfirmation) {
            var A = function U(q) {
              q.preventDefault();
              var Z = q.detail;
              Z.data.original_request_id === E.requestId && (Z.data.state === l.OpenIDRequestState.Allowed ? (w(Z.data), a.transport.reply(Z, {})) : Z.data.state === l.OpenIDRequestState.Blocked ? (y(new Error("User declined to verify their identity")), a.transport.reply(Z, {})) : (y(new Error("Invalid state on reply: " + T.state)), a.transport.reply(Z, { error: { message: "Invalid state" } })), a.off("action:".concat(o.WidgetApiToWidgetAction.OpenIDCredentials), U));
            };
            a.on("action:".concat(o.WidgetApiToWidgetAction.OpenIDCredentials), A);
          } else y(new Error("Invalid state: " + T.state));
        }).catch(y);
      });
    } }, { key: "updateRequestedCapabilities", value: function() {
      return this.transport.send(o.WidgetApiFromWidgetAction.MSC2974RenegotiateCapabilities, { capabilities: this.requestedCapabilities }).then();
    } }, { key: "sendContentLoaded", value: function() {
      return this.transport.send(o.WidgetApiFromWidgetAction.ContentLoaded, {}).then();
    } }, { key: "sendSticker", value: function(a) {
      return this.transport.send(o.WidgetApiFromWidgetAction.SendSticker, a).then();
    } }, { key: "setAlwaysOnScreen", value: function(a) {
      return this.transport.send(o.WidgetApiFromWidgetAction.UpdateAlwaysOnScreen, { value: a }).then(function(w) {
        return w.success;
      });
    } }, { key: "openModalWidget", value: function(a, w) {
      var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], E = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, T = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : u.MatrixWidgetType.Custom;
      return this.transport.send(o.WidgetApiFromWidgetAction.OpenModalWidget, { type: T, url: a, name: w, buttons: y, data: E }).then();
    } }, { key: "closeModalWidget", value: function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.transport.send(o.WidgetApiFromWidgetAction.CloseModalWidget, a).then();
    } }, { key: "sendRoomEvent", value: function(a, w, y, E, T, A) {
      return this.sendEvent(a, void 0, w, y, E, T, A);
    } }, { key: "sendStateEvent", value: function(a, w, y, E, T, A) {
      return this.sendEvent(a, w, y, E, T, A);
    } }, { key: "sendEvent", value: function(a, w, y, E, T, A, U) {
      return this.transport.send(o.WidgetApiFromWidgetAction.SendEvent, ee(ee(ee(ee(ee({ type: a, content: y }, w !== void 0 && { state_key: w }), E !== void 0 && { room_id: E }), T !== void 0 && { delay: T }), A !== void 0 && { parent_delay_id: A }), U !== void 0 && { sticky_duration_ms: U }));
    } }, { key: "cancelScheduledDelayedEvent", value: function(a) {
      return this.transport.send(o.WidgetApiFromWidgetAction.MSC4157UpdateDelayedEvent, { delay_id: a, action: C.UpdateDelayedEventAction.Cancel });
    } }, { key: "restartScheduledDelayedEvent", value: function(a) {
      return this.transport.send(o.WidgetApiFromWidgetAction.MSC4157UpdateDelayedEvent, { delay_id: a, action: C.UpdateDelayedEventAction.Restart });
    } }, { key: "sendScheduledDelayedEvent", value: function(a) {
      return this.transport.send(o.WidgetApiFromWidgetAction.MSC4157UpdateDelayedEvent, { delay_id: a, action: C.UpdateDelayedEventAction.Send });
    } }, { key: "sendToDevice", value: function(a, w, y) {
      return this.transport.send(o.WidgetApiFromWidgetAction.SendToDevice, { type: a, encrypted: w, messages: y });
    } }, { key: "readRoomAccountData", value: function(a, w) {
      var y = { type: a };
      return w && (w.includes(S.Symbols.AnyRoom) ? y.room_ids = S.Symbols.AnyRoom : y.room_ids = w), this.transport.send(o.WidgetApiFromWidgetAction.BeeperReadRoomAccountData, y).then(function(E) {
        return E.events;
      });
    } }, { key: "readRoomEvents", value: function(a, w, y, E, T) {
      var A = { type: a, msgtype: y };
      return w !== void 0 && (A.limit = w), E && (E.includes(S.Symbols.AnyRoom) ? A.room_ids = S.Symbols.AnyRoom : A.room_ids = E), T && (A.since = T), this.transport.send(o.WidgetApiFromWidgetAction.MSC2876ReadEvents, A).then(function(U) {
        return U.events;
      });
    } }, { key: "readEventRelations", value: function() {
      var p = P(m().mark(function w(y, E, T, A, U, q, Z, $) {
        var le, de;
        return m().wrap(function(G) {
          for (; ; ) switch (G.prev = G.next) {
            case 0:
              return G.next = 2, this.getClientVersions();
            case 2:
              if (le = G.sent, le.includes(r.UnstableApiVersion.MSC3869)) {
                G.next = 5;
                break;
              }
              throw new Error("The read_relations action is not supported by the client.");
            case 5:
              return de = { event_id: y, rel_type: T, event_type: A, room_id: E, to: Z, from: q, limit: U, direction: $ }, G.abrupt("return", this.transport.send(o.WidgetApiFromWidgetAction.MSC3869ReadRelations, de));
            case 7:
            case "end":
              return G.stop();
          }
        }, w, this);
      }));
      function a(w, y, E, T, A, U, q, Z) {
        return p.apply(this, arguments);
      }
      return a;
    }() }, { key: "readStateEvents", value: function(a, w, y, E) {
      var T = { type: a, state_key: y === void 0 ? true : y };
      return w !== void 0 && (T.limit = w), E && (E.includes(S.Symbols.AnyRoom) ? T.room_ids = S.Symbols.AnyRoom : T.room_ids = E), this.transport.send(o.WidgetApiFromWidgetAction.MSC2876ReadEvents, T).then(function(A) {
        return A.events;
      });
    } }, { key: "setModalButtonEnabled", value: function(a, w) {
      if (a === s.BuiltInModalButtonID.Close) throw new Error("The close button cannot be disabled");
      return this.transport.send(o.WidgetApiFromWidgetAction.SetModalButtonEnabled, { button: a, enabled: w }).then();
    } }, { key: "navigateTo", value: function(a) {
      if (!a || !a.startsWith("https://matrix.to/#")) throw new Error("Invalid matrix.to URI");
      return this.transport.send(o.WidgetApiFromWidgetAction.MSC2931Navigate, { uri: a }).then();
    } }, { key: "getTurnServers", value: function() {
      var a = this;
      return ve(m().mark(function w() {
        var y, E;
        return m().wrap(function(A) {
          for (; ; ) switch (A.prev = A.next) {
            case 0:
              if (E = function() {
                var U = P(m().mark(function q(Z) {
                  return m().wrap(function(le) {
                    for (; ; ) switch (le.prev = le.next) {
                      case 0:
                        Z.preventDefault(), y(Z.detail.data), a.transport.reply(Z.detail, {});
                      case 3:
                      case "end":
                        return le.stop();
                    }
                  }, q);
                }));
                return function(Z) {
                  return U.apply(this, arguments);
                };
              }(), a.on("action:".concat(o.WidgetApiToWidgetAction.UpdateTurnServers), E), a.turnServerWatchers !== 0) {
                A.next = 12;
                break;
              }
              return A.prev = 3, A.next = 6, ne(a.transport.send(o.WidgetApiFromWidgetAction.WatchTurnServers, {}));
            case 6:
              A.next = 12;
              break;
            case 8:
              throw A.prev = 8, A.t0 = A.catch(3), a.off("action:".concat(o.WidgetApiToWidgetAction.UpdateTurnServers), E), A.t0;
            case 12:
              a.turnServerWatchers++, A.prev = 13;
            case 14:
              return A.next = 17, ne(new Promise(function(U) {
                return y = U;
              }));
            case 17:
              return A.next = 19, A.sent;
            case 19:
              A.next = 14;
              break;
            case 21:
              if (A.prev = 21, a.off("action:".concat(o.WidgetApiToWidgetAction.UpdateTurnServers), E), a.turnServerWatchers--, a.turnServerWatchers !== 0) {
                A.next = 27;
                break;
              }
              return A.next = 27, ne(a.transport.send(o.WidgetApiFromWidgetAction.UnwatchTurnServers, {}));
            case 27:
              return A.finish(21);
            case 28:
            case "end":
              return A.stop();
          }
        }, w, null, [[3, 8], [13, , 21, 28]]);
      }))();
    } }, { key: "searchUserDirectory", value: function() {
      var p = P(m().mark(function w(y, E) {
        var T, A;
        return m().wrap(function(q) {
          for (; ; ) switch (q.prev = q.next) {
            case 0:
              return q.next = 2, this.getClientVersions();
            case 2:
              if (T = q.sent, T.includes(r.UnstableApiVersion.MSC3973)) {
                q.next = 5;
                break;
              }
              throw new Error("The user_directory_search action is not supported by the client.");
            case 5:
              return A = { search_term: y, limit: E }, q.abrupt("return", this.transport.send(o.WidgetApiFromWidgetAction.MSC3973UserDirectorySearch, A));
            case 7:
            case "end":
              return q.stop();
          }
        }, w, this);
      }));
      function a(w, y) {
        return p.apply(this, arguments);
      }
      return a;
    }() }, { key: "getMediaConfig", value: function() {
      var p = P(m().mark(function w() {
        var y, E;
        return m().wrap(function(A) {
          for (; ; ) switch (A.prev = A.next) {
            case 0:
              return A.next = 2, this.getClientVersions();
            case 2:
              if (y = A.sent, y.includes(r.UnstableApiVersion.MSC4039)) {
                A.next = 5;
                break;
              }
              throw new Error("The get_media_config action is not supported by the client.");
            case 5:
              return E = {}, A.abrupt("return", this.transport.send(o.WidgetApiFromWidgetAction.MSC4039GetMediaConfigAction, E));
            case 7:
            case "end":
              return A.stop();
          }
        }, w, this);
      }));
      function a() {
        return p.apply(this, arguments);
      }
      return a;
    }() }, { key: "uploadFile", value: function() {
      var p = P(m().mark(function w(y) {
        var E, T;
        return m().wrap(function(U) {
          for (; ; ) switch (U.prev = U.next) {
            case 0:
              return U.next = 2, this.getClientVersions();
            case 2:
              if (E = U.sent, E.includes(r.UnstableApiVersion.MSC4039)) {
                U.next = 5;
                break;
              }
              throw new Error("The upload_file action is not supported by the client.");
            case 5:
              return T = { file: y }, U.abrupt("return", this.transport.send(o.WidgetApiFromWidgetAction.MSC4039UploadFileAction, T));
            case 7:
            case "end":
              return U.stop();
          }
        }, w, this);
      }));
      function a(w) {
        return p.apply(this, arguments);
      }
      return a;
    }() }, { key: "downloadFile", value: function() {
      var p = P(m().mark(function w(y) {
        var E, T;
        return m().wrap(function(U) {
          for (; ; ) switch (U.prev = U.next) {
            case 0:
              return U.next = 2, this.getClientVersions();
            case 2:
              if (E = U.sent, E.includes(r.UnstableApiVersion.MSC4039)) {
                U.next = 5;
                break;
              }
              throw new Error("The download_file action is not supported by the client.");
            case 5:
              return T = { content_uri: y }, U.abrupt("return", this.transport.send(o.WidgetApiFromWidgetAction.MSC4039DownloadFileAction, T));
            case 7:
            case "end":
              return U.stop();
          }
        }, w, this);
      }));
      function a(w) {
        return p.apply(this, arguments);
      }
      return a;
    }() }, { key: "start", value: function() {
      var a = this;
      this.transport.start(), this.getClientVersions().then(function(w) {
        w.includes(r.UnstableApiVersion.MSC2974) && (a.supportsMSC2974Renegotiate = true);
      });
    } }, { key: "handleMessage", value: function(a) {
      var w = new CustomEvent("action:".concat(a.detail.action), { detail: a.detail, cancelable: true });
      if (this.emit("action:".concat(a.detail.action), w), !w.defaultPrevented) switch (a.detail.action) {
        case o.WidgetApiToWidgetAction.SupportedApiVersions:
          return this.replyVersions(a.detail);
        case o.WidgetApiToWidgetAction.Capabilities:
          return this.handleCapabilities(a.detail);
        case o.WidgetApiToWidgetAction.UpdateVisibility:
          return this.transport.reply(a.detail, {});
        case o.WidgetApiToWidgetAction.NotifyCapabilities:
          return this.transport.reply(a.detail, {});
        default:
          return this.transport.reply(a.detail, { error: { message: "Unknown or unsupported to-widget action: " + a.detail.action } });
      }
    } }, { key: "replyVersions", value: function(a) {
      this.transport.reply(a, { supported_versions: r.CurrentApiVersions });
    } }, { key: "getClientVersions", value: function() {
      var a = this;
      return Array.isArray(this.cachedClientVersions) ? Promise.resolve(this.cachedClientVersions) : this.transport.send(o.WidgetApiFromWidgetAction.SupportedApiVersions, {}).then(function(w) {
        return a.cachedClientVersions = w.supported_versions, w.supported_versions;
      }).catch(function(w) {
        return console.warn("non-fatal error getting supported client versions: ", w), [];
      });
    } }, { key: "handleCapabilities", value: function(a) {
      var w = this;
      return this.capabilitiesFinished ? this.transport.reply(a, { error: { message: "Capability negotiation already completed" } }) : this.getClientVersions().then(function(y) {
        return y.includes(r.UnstableApiVersion.MSC2871) ? w.once("action:".concat(o.WidgetApiToWidgetAction.NotifyCapabilities), function(E) {
          w.approvedCapabilities = E.detail.data.approved, w.emit("ready");
        }) : w.emit("ready"), w.capabilitiesFinished = true, w.transport.reply(a, { capabilities: w.requestedCapabilities });
      });
    } }]), c;
  }(t.EventEmitter);
  return yn.WidgetApi = B, yn;
}
var kr = {}, pt = {};
Object.defineProperty(pt, "__esModule", { value: true });
pt.VideoConferenceCapabilities = pt.StickerpickerCapabilities = pt.MatrixCapabilities = void 0;
pt.getTimelineRoomIDFromCapability = qv;
pt.isTimelineCapability = Zv;
pt.isTimelineCapabilityFor = Jv;
var iu = function(e) {
  return e.Screenshots = "m.capability.screenshot", e.StickerSending = "m.sticker", e.AlwaysOnScreen = "m.always_on_screen", e.RequiresClient = "io.element.requires_client", e.MSC2931Navigate = "org.matrix.msc2931.navigate", e.MSC3846TurnServers = "town.robin.msc3846.turn_servers", e.MSC3973UserDirectorySearch = "org.matrix.msc3973.user_directory_search", e.MSC4039UploadFile = "org.matrix.msc4039.upload_file", e.MSC4039DownloadFile = "org.matrix.msc4039.download_file", e.MSC4157SendDelayedEvent = "org.matrix.msc4157.send.delayed_event", e.MSC4157UpdateDelayedEvent = "org.matrix.msc4157.update_delayed_event", e.MSC4407SendStickyEvent = "org.matrix.msc4407.send.sticky_event", e.MSC4407ReceiveStickyEvent = "org.matrix.msc4407.receive.sticky_event", e;
}({});
pt.MatrixCapabilities = iu;
var Yv = [iu.StickerSending];
pt.StickerpickerCapabilities = Yv;
var Xv = [iu.AlwaysOnScreen];
pt.VideoConferenceCapabilities = Xv;
function Zv(e) {
  return e == null ? void 0 : e.startsWith("org.matrix.msc2762.timeline:");
}
function Jv(e, t) {
  return e === "org.matrix.msc2762.timeline:".concat(t);
}
function qv(e) {
  return e.substring(e.indexOf(":") + 1);
}
var di = {};
Object.defineProperty(di, "__esModule", { value: true });
di.SimpleObservable = void 0;
function ii(e) {
  "@babel/helpers - typeof";
  return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ii(e);
}
function eh(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = th(e)) || t) {
      n && (e = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= e.length ? { done: true } : { done: false, value: e[r++] };
      }, e: function(f) {
        throw f;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = true, l = false, u;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var f = n.next();
    return o = f.done, f;
  }, e: function(f) {
    l = true, u = f;
  }, f: function() {
    try {
      !o && n.return != null && n.return();
    } finally {
      if (l) throw u;
    }
  } };
}
function th(e, t) {
  if (e) {
    if (typeof e == "string") return Es(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Es(e, t);
  }
}
function Es(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function nh(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function rh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, Xf(r.key), r);
  }
}
function ih(e, t, n) {
  return t && rh(e.prototype, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function oh(e, t, n) {
  return t = Xf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: true, configurable: true, writable: true }) : e[t] = n, e;
}
function Xf(e) {
  var t = lh(e, "string");
  return ii(t) === "symbol" ? t : String(t);
}
function lh(e, t) {
  if (ii(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ii(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ah = function() {
  function e(t) {
    nh(this, e), oh(this, "listeners", []), t && this.listeners.push(t);
  }
  return ih(e, [{ key: "onUpdate", value: function(n) {
    this.listeners.push(n);
  } }, { key: "update", value: function(n) {
    var r = eh(this.listeners), i;
    try {
      for (r.s(); !(i = r.n()).done; ) {
        var o = i.value;
        o(n);
      }
    } catch (l) {
      r.e(l);
    } finally {
      r.f();
    }
  } }, { key: "close", value: function() {
    this.listeners = [];
  } }]), e;
}();
di.SimpleObservable = ah;
var ks;
function uh() {
  if (ks) return kr;
  ks = 1, Object.defineProperty(kr, "__esModule", { value: true }), kr.ClientWidgetApi = void 0;
  var e = bo, t = ru(), n = bn, r = cn, i = pt, o = Ot, l = Dt, u = cr, s = di, f = fr, S = dr;
  function C(N) {
    "@babel/helpers - typeof";
    return C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
      return typeof B;
    } : function(B) {
      return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
    }, C(N);
  }
  function m(N, B) {
    var g = Object.keys(N);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(N);
      B && (v = v.filter(function(c) {
        return Object.getOwnPropertyDescriptor(N, c).enumerable;
      })), g.push.apply(g, v);
    }
    return g;
  }
  function M(N) {
    for (var B = 1; B < arguments.length; B++) {
      var g = arguments[B] != null ? arguments[B] : {};
      B % 2 ? m(Object(g), true).forEach(function(v) {
        H(N, v, g[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(g)) : m(Object(g)).forEach(function(v) {
        Object.defineProperty(N, v, Object.getOwnPropertyDescriptor(g, v));
      });
    }
    return N;
  }
  function P(N, B) {
    var g = typeof Symbol < "u" && N[Symbol.iterator] || N["@@iterator"];
    if (!g) {
      if (Array.isArray(N) || (g = k(N)) || B) {
        g && (N = g);
        var v = 0, c = function() {
        };
        return { s: c, n: function() {
          return v >= N.length ? { done: true } : { done: false, value: N[v++] };
        }, e: function(E) {
          throw E;
        }, f: c };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var p = true, a = false, w;
    return { s: function() {
      g = g.call(N);
    }, n: function() {
      var E = g.next();
      return p = E.done, E;
    }, e: function(E) {
      a = true, w = E;
    }, f: function() {
      try {
        !p && g.return != null && g.return();
      } finally {
        if (a) throw w;
      }
    } };
  }
  function L(N) {
    return _(N) || h(N) || k(N) || ee();
  }
  function ee() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function k(N, B) {
    if (N) {
      if (typeof N == "string") return I(N, B);
      var g = Object.prototype.toString.call(N).slice(8, -1);
      if (g === "Object" && N.constructor && (g = N.constructor.name), g === "Map" || g === "Set") return Array.from(N);
      if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return I(N, B);
    }
  }
  function h(N) {
    if (typeof Symbol < "u" && N[Symbol.iterator] != null || N["@@iterator"] != null) return Array.from(N);
  }
  function _(N) {
    if (Array.isArray(N)) return I(N);
  }
  function I(N, B) {
    (B == null || B > N.length) && (B = N.length);
    for (var g = 0, v = new Array(B); g < B; g++) v[g] = N[g];
    return v;
  }
  function W() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    W = function() {
      return N;
    };
    var N = {}, B = Object.prototype, g = B.hasOwnProperty, v = Object.defineProperty || function(K, z, R) {
      K[z] = R.value;
    }, c = typeof Symbol == "function" ? Symbol : {}, p = c.iterator || "@@iterator", a = c.asyncIterator || "@@asyncIterator", w = c.toStringTag || "@@toStringTag";
    function y(K, z, R) {
      return Object.defineProperty(K, z, { value: R, enumerable: true, configurable: true, writable: true }), K[z];
    }
    try {
      y({}, "");
    } catch {
      y = function(R, D, j) {
        return R[D] = j;
      };
    }
    function E(K, z, R, D) {
      var j = z && z.prototype instanceof U ? z : U, x = Object.create(j.prototype), X = new vn(D || []);
      return v(x, "_invoke", { value: Mt(K, R, X) }), x;
    }
    function T(K, z, R) {
      try {
        return { type: "normal", arg: K.call(z, R) };
      } catch (D) {
        return { type: "throw", arg: D };
      }
    }
    N.wrap = E;
    var A = {};
    function U() {
    }
    function q() {
    }
    function Z() {
    }
    var $ = {};
    y($, p, function() {
      return this;
    });
    var le = Object.getPrototypeOf, de = le && le(le(hn([])));
    de && de !== B && g.call(de, p) && ($ = de);
    var Se = Z.prototype = U.prototype = Object.create($);
    function G(K) {
      ["next", "throw", "return"].forEach(function(z) {
        y(K, z, function(R) {
          return this._invoke(z, R);
        });
      });
    }
    function oe(K, z) {
      function R(j, x, X, J) {
        var ae = T(K[j], K, x);
        if (ae.type !== "throw") {
          var ke = ae.arg, _e = ke.value;
          return _e && C(_e) == "object" && g.call(_e, "__await") ? z.resolve(_e.__await).then(function(Be) {
            R("next", Be, X, J);
          }, function(Be) {
            R("throw", Be, X, J);
          }) : z.resolve(_e).then(function(Be) {
            ke.value = Be, X(ke);
          }, function(Be) {
            return R("throw", Be, X, J);
          });
        }
        J(ae.arg);
      }
      var D;
      v(this, "_invoke", { value: function(x, X) {
        function J() {
          return new z(function(ae, ke) {
            R(x, X, ae, ke);
          });
        }
        return D = D ? D.then(J, J) : J();
      } });
    }
    function Mt(K, z, R) {
      var D = "suspendedStart";
      return function(j, x) {
        if (D === "executing") throw new Error("Generator is already running");
        if (D === "completed") {
          if (j === "throw") throw x;
          return Ln();
        }
        for (R.method = j, R.arg = x; ; ) {
          var X = R.delegate;
          if (X) {
            var J = bt(X, R);
            if (J) {
              if (J === A) continue;
              return J;
            }
          }
          if (R.method === "next") R.sent = R._sent = R.arg;
          else if (R.method === "throw") {
            if (D === "suspendedStart") throw D = "completed", R.arg;
            R.dispatchException(R.arg);
          } else R.method === "return" && R.abrupt("return", R.arg);
          D = "executing";
          var ae = T(K, z, R);
          if (ae.type === "normal") {
            if (D = R.done ? "completed" : "suspendedYield", ae.arg === A) continue;
            return { value: ae.arg, done: R.done };
          }
          ae.type === "throw" && (D = "completed", R.method = "throw", R.arg = ae.arg);
        }
      };
    }
    function bt(K, z) {
      var R = z.method, D = K.iterator[R];
      if (D === void 0) return z.delegate = null, R === "throw" && K.iterator.return && (z.method = "return", z.arg = void 0, bt(K, z), z.method === "throw") || R !== "return" && (z.method = "throw", z.arg = new TypeError("The iterator does not provide a '" + R + "' method")), A;
      var j = T(D, K.iterator, z.arg);
      if (j.type === "throw") return z.method = "throw", z.arg = j.arg, z.delegate = null, A;
      var x = j.arg;
      return x ? x.done ? (z[K.resultName] = x.value, z.next = K.nextLoc, z.method !== "return" && (z.method = "next", z.arg = void 0), z.delegate = null, A) : x : (z.method = "throw", z.arg = new TypeError("iterator result is not an object"), z.delegate = null, A);
    }
    function Oe(K) {
      var z = { tryLoc: K[0] };
      1 in K && (z.catchLoc = K[1]), 2 in K && (z.finallyLoc = K[2], z.afterLoc = K[3]), this.tryEntries.push(z);
    }
    function Lt(K) {
      var z = K.completion || {};
      z.type = "normal", delete z.arg, K.completion = z;
    }
    function vn(K) {
      this.tryEntries = [{ tryLoc: "root" }], K.forEach(Oe, this), this.reset(true);
    }
    function hn(K) {
      if (K) {
        var z = K[p];
        if (z) return z.call(K);
        if (typeof K.next == "function") return K;
        if (!isNaN(K.length)) {
          var R = -1, D = function j() {
            for (; ++R < K.length; ) if (g.call(K, R)) return j.value = K[R], j.done = false, j;
            return j.value = void 0, j.done = true, j;
          };
          return D.next = D;
        }
      }
      return { next: Ln };
    }
    function Ln() {
      return { value: void 0, done: true };
    }
    return q.prototype = Z, v(Se, "constructor", { value: Z, configurable: true }), v(Z, "constructor", { value: q, configurable: true }), q.displayName = y(Z, w, "GeneratorFunction"), N.isGeneratorFunction = function(K) {
      var z = typeof K == "function" && K.constructor;
      return !!z && (z === q || (z.displayName || z.name) === "GeneratorFunction");
    }, N.mark = function(K) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(K, Z) : (K.__proto__ = Z, y(K, w, "GeneratorFunction")), K.prototype = Object.create(Se), K;
    }, N.awrap = function(K) {
      return { __await: K };
    }, G(oe.prototype), y(oe.prototype, a, function() {
      return this;
    }), N.AsyncIterator = oe, N.async = function(K, z, R, D, j) {
      j === void 0 && (j = Promise);
      var x = new oe(E(K, z, R, D), j);
      return N.isGeneratorFunction(z) ? x : x.next().then(function(X) {
        return X.done ? X.value : x.next();
      });
    }, G(Se), y(Se, w, "Generator"), y(Se, p, function() {
      return this;
    }), y(Se, "toString", function() {
      return "[object Generator]";
    }), N.keys = function(K) {
      var z = Object(K), R = [];
      for (var D in z) R.push(D);
      return R.reverse(), function j() {
        for (; R.length; ) {
          var x = R.pop();
          if (x in z) return j.value = x, j.done = false, j;
        }
        return j.done = true, j;
      };
    }, N.values = hn, vn.prototype = { constructor: vn, reset: function(z) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(Lt), !z) for (var R in this) R.charAt(0) === "t" && g.call(this, R) && !isNaN(+R.slice(1)) && (this[R] = void 0);
    }, stop: function() {
      this.done = true;
      var z = this.tryEntries[0].completion;
      if (z.type === "throw") throw z.arg;
      return this.rval;
    }, dispatchException: function(z) {
      if (this.done) throw z;
      var R = this;
      function D(ke, _e) {
        return X.type = "throw", X.arg = z, R.next = ke, _e && (R.method = "next", R.arg = void 0), !!_e;
      }
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var x = this.tryEntries[j], X = x.completion;
        if (x.tryLoc === "root") return D("end");
        if (x.tryLoc <= this.prev) {
          var J = g.call(x, "catchLoc"), ae = g.call(x, "finallyLoc");
          if (J && ae) {
            if (this.prev < x.catchLoc) return D(x.catchLoc, true);
            if (this.prev < x.finallyLoc) return D(x.finallyLoc);
          } else if (J) {
            if (this.prev < x.catchLoc) return D(x.catchLoc, true);
          } else {
            if (!ae) throw new Error("try statement without catch or finally");
            if (this.prev < x.finallyLoc) return D(x.finallyLoc);
          }
        }
      }
    }, abrupt: function(z, R) {
      for (var D = this.tryEntries.length - 1; D >= 0; --D) {
        var j = this.tryEntries[D];
        if (j.tryLoc <= this.prev && g.call(j, "finallyLoc") && this.prev < j.finallyLoc) {
          var x = j;
          break;
        }
      }
      x && (z === "break" || z === "continue") && x.tryLoc <= R && R <= x.finallyLoc && (x = null);
      var X = x ? x.completion : {};
      return X.type = z, X.arg = R, x ? (this.method = "next", this.next = x.finallyLoc, A) : this.complete(X);
    }, complete: function(z, R) {
      if (z.type === "throw") throw z.arg;
      return z.type === "break" || z.type === "continue" ? this.next = z.arg : z.type === "return" ? (this.rval = this.arg = z.arg, this.method = "return", this.next = "end") : z.type === "normal" && R && (this.next = R), A;
    }, finish: function(z) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var D = this.tryEntries[R];
        if (D.finallyLoc === z) return this.complete(D.completion, D.afterLoc), Lt(D), A;
      }
    }, catch: function(z) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var D = this.tryEntries[R];
        if (D.tryLoc === z) {
          var j = D.completion;
          if (j.type === "throw") {
            var x = j.arg;
            Lt(D);
          }
          return x;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(z, R, D) {
      return this.delegate = { iterator: hn(z), resultName: R, nextLoc: D }, this.method === "next" && (this.arg = void 0), A;
    } }, N;
  }
  function b(N, B, g, v, c, p, a) {
    try {
      var w = N[p](a), y = w.value;
    } catch (E) {
      g(E);
      return;
    }
    w.done ? B(y) : Promise.resolve(y).then(v, c);
  }
  function O(N) {
    return function() {
      var B = this, g = arguments;
      return new Promise(function(v, c) {
        var p = N.apply(B, g);
        function a(y) {
          b(p, v, c, a, w, "next", y);
        }
        function w(y) {
          b(p, v, c, a, w, "throw", y);
        }
        a(void 0);
      });
    };
  }
  function d(N, B) {
    if (!(N instanceof B)) throw new TypeError("Cannot call a class as a function");
  }
  function F(N, B) {
    for (var g = 0; g < B.length; g++) {
      var v = B[g];
      v.enumerable = v.enumerable || false, v.configurable = true, "value" in v && (v.writable = true), Object.defineProperty(N, te(v.key), v);
    }
  }
  function Q(N, B, g) {
    return B && F(N.prototype, B), Object.defineProperty(N, "prototype", { writable: false }), N;
  }
  function ie(N, B) {
    if (typeof B != "function" && B !== null) throw new TypeError("Super expression must either be null or a function");
    N.prototype = Object.create(B && B.prototype, { constructor: { value: N, writable: true, configurable: true } }), Object.defineProperty(N, "prototype", { writable: false }), B && pe(N, B);
  }
  function pe(N, B) {
    return pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, c) {
      return v.__proto__ = c, v;
    }, pe(N, B);
  }
  function re(N) {
    var B = et();
    return function() {
      var v = $e(N), c;
      if (B) {
        var p = $e(this).constructor;
        c = Reflect.construct(v, arguments, p);
      } else c = v.apply(this, arguments);
      return Ue(this, c);
    };
  }
  function Ue(N, B) {
    if (B && (C(B) === "object" || typeof B == "function")) return B;
    if (B !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return fe(N);
  }
  function fe(N) {
    if (N === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return N;
  }
  function et() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function $e(N) {
    return $e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(g) {
      return g.__proto__ || Object.getPrototypeOf(g);
    }, $e(N);
  }
  function H(N, B, g) {
    return B = te(B), B in N ? Object.defineProperty(N, B, { value: g, enumerable: true, configurable: true, writable: true }) : N[B] = g, N;
  }
  function te(N) {
    var B = ne(N, "string");
    return C(B) === "symbol" ? B : String(B);
  }
  function ne(N, B) {
    if (C(N) !== "object" || N === null) return N;
    var g = N[Symbol.toPrimitive];
    if (g !== void 0) {
      var v = g.call(N, B);
      if (C(v) !== "object") return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (B === "string" ? String : Number)(N);
  }
  function ve(N) {
    var B, g, v, c = 2;
    for (typeof Symbol < "u" && (g = Symbol.asyncIterator, v = Symbol.iterator); c--; ) {
      if (g && (B = N[g]) != null) return B.call(N);
      if (v && (B = N[v]) != null) return new se(B.call(N));
      g = "@@asyncIterator", v = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
  }
  function se(N) {
    function B(g) {
      if (Object(g) !== g) return Promise.reject(new TypeError(g + " is not an object."));
      var v = g.done;
      return Promise.resolve(g.value).then(function(c) {
        return { value: c, done: v };
      });
    }
    return se = function(v) {
      this.s = v, this.n = v.next;
    }, se.prototype = { s: null, n: null, next: function() {
      return B(this.n.apply(this.s, arguments));
    }, return: function(v) {
      var c = this.s.return;
      return c === void 0 ? Promise.resolve({ value: v, done: true }) : B(c.apply(this.s, arguments));
    }, throw: function(v) {
      var c = this.s.return;
      return c === void 0 ? Promise.reject(v) : B(c.apply(this.s, arguments));
    } }, new se(N);
  }
  var At = function(N) {
    ie(g, N);
    var B = re(g);
    function g(v, c, p) {
      var a;
      if (d(this, g), a = B.call(this), a.widget = v, a.driver = p, H(fe(a), "transport", void 0), H(fe(a), "cachedWidgetVersions", null), H(fe(a), "contentLoadedActionSent", false), H(fe(a), "allowedCapabilities", /* @__PURE__ */ new Set()), H(fe(a), "allowedEvents", []), H(fe(a), "isStopped", false), H(fe(a), "turnServers", null), H(fe(a), "contentLoadedWaitTimer", void 0), H(fe(a), "pushRoomStateTasks", /* @__PURE__ */ new Set()), H(fe(a), "pushRoomStateResult", /* @__PURE__ */ new Map()), H(fe(a), "flushRoomStateTask", null), H(fe(a), "viewedRoomId", null), !(c != null && c.contentWindow)) throw new Error("No iframe supplied");
      if (!v) throw new Error("Invalid widget");
      if (!p) throw new Error("Invalid driver");
      return a.transport = new t.PostmessageTransport(n.WidgetApiDirection.ToWidget, v.id, c.contentWindow, globalThis), a.transport.targetOrigin = v.origin, a.transport.on("message", a.handleMessage.bind(fe(a))), c.addEventListener("load", a.onIframeLoad.bind(fe(a))), a.transport.start(), a;
    }
    return Q(g, [{ key: "hasCapability", value: function(c) {
      return this.allowedCapabilities.has(c);
    } }, { key: "canUseRoomTimeline", value: function(c) {
      return this.hasCapability("org.matrix.msc2762.timeline:".concat(f.Symbols.AnyRoom)) || this.hasCapability("org.matrix.msc2762.timeline:".concat(c));
    } }, { key: "canSendRoomEvent", value: function(c) {
      var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return this.allowedEvents.some(function(a) {
        return a.matchesAsRoomEvent(l.EventDirection.Send, c, p);
      });
    } }, { key: "canSendStateEvent", value: function(c, p) {
      return this.allowedEvents.some(function(a) {
        return a.matchesAsStateEvent(l.EventDirection.Send, c, p);
      });
    } }, { key: "canSendToDeviceEvent", value: function(c) {
      return this.allowedEvents.some(function(p) {
        return p.matchesAsToDeviceEvent(l.EventDirection.Send, c);
      });
    } }, { key: "canReceiveRoomEvent", value: function(c) {
      var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return this.allowedEvents.some(function(a) {
        return a.matchesAsRoomEvent(l.EventDirection.Receive, c, p);
      });
    } }, { key: "canReceiveStateEvent", value: function(c, p) {
      return this.allowedEvents.some(function(a) {
        return a.matchesAsStateEvent(l.EventDirection.Receive, c, p);
      });
    } }, { key: "canReceiveToDeviceEvent", value: function(c) {
      return this.allowedEvents.some(function(p) {
        return p.matchesAsToDeviceEvent(l.EventDirection.Receive, c);
      });
    } }, { key: "canReceiveRoomAccountData", value: function(c) {
      return this.allowedEvents.some(function(p) {
        return p.matchesAsRoomAccountData(l.EventDirection.Receive, c);
      });
    } }, { key: "stop", value: function() {
      this.isStopped = true, this.transport.stop();
    } }, { key: "getWidgetVersions", value: function() {
      var v = O(W().mark(function p() {
        var a;
        return W().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              if (!Array.isArray(this.cachedWidgetVersions)) {
                y.next = 2;
                break;
              }
              return y.abrupt("return", this.cachedWidgetVersions);
            case 2:
              return y.prev = 2, y.next = 5, this.transport.send(r.WidgetApiToWidgetAction.SupportedApiVersions, {});
            case 5:
              return a = y.sent, this.cachedWidgetVersions = a.supported_versions, y.abrupt("return", a.supported_versions);
            case 10:
              return y.prev = 10, y.t0 = y.catch(2), console.warn("non-fatal error getting supported widget versions: ", y.t0), y.abrupt("return", []);
            case 14:
            case "end":
              return y.stop();
          }
        }, p, this, [[2, 10]]);
      }));
      function c() {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "beginCapabilities", value: function() {
      var c = this;
      this.emit("preparing");
      var p;
      this.transport.send(r.WidgetApiToWidgetAction.Capabilities, {}).then(function(a) {
        return p = a.capabilities, c.driver.validateCapabilities(new Set(a.capabilities));
      }).then(function(a) {
        c.allowCapabilities(L(a), p), c.emit("ready");
      }).catch(function(a) {
        c.emit("error:preparing", a);
      });
    } }, { key: "allowCapabilities", value: function(c, p) {
      var a, w = this;
      console.log("Widget ".concat(this.widget.id, " is allowed capabilities:"), c);
      var y = P(c), E;
      try {
        for (y.s(); !(E = y.n()).done; ) {
          var T = E.value;
          this.allowedCapabilities.add(T);
        }
      } catch (Oe) {
        y.e(Oe);
      } finally {
        y.f();
      }
      var A = l.WidgetEventCapability.findEventCapabilities(c);
      (a = this.allowedEvents).push.apply(a, L(A)), this.transport.send(r.WidgetApiToWidgetAction.NotifyCapabilities, { requested: p, approved: Array.from(this.allowedCapabilities) }).catch(function(Oe) {
        console.warn("non-fatal error notifying widget of approved capabilities:", Oe);
      }).then(function() {
        w.emit("capabilitiesNotified");
      });
      var U = P(c), q;
      try {
        for (U.s(); !(q = U.n()).done; ) {
          var Z = q.value;
          if ((0, i.isTimelineCapability)(Z)) {
            var $ = (0, i.getTimelineRoomIDFromCapability)(Z);
            if ($ === f.Symbols.AnyRoom) {
              var le = P(this.driver.getKnownRooms()), de;
              try {
                for (le.s(); !(de = le.n()).done; ) {
                  var Se = de.value;
                  this.pushRoomState(Se);
                }
              } catch (Oe) {
                le.e(Oe);
              } finally {
                le.f();
              }
            } else this.pushRoomState($);
          }
        }
      } catch (Oe) {
        U.e(Oe);
      } finally {
        U.f();
      }
      if (c.includes(i.MatrixCapabilities.MSC4407ReceiveStickyEvent)) {
        console.debug("Widget ".concat(this.widget.id, " is allowed to receive sticky events, check current sticky state."));
        var G = c.filter(function(Oe) {
          return (0, i.isTimelineCapability)(Oe);
        }).map(function(Oe) {
          return (0, i.getTimelineRoomIDFromCapability)(Oe);
        }).flatMap(function(Oe) {
          return Oe === f.Symbols.AnyRoom ? w.driver.getKnownRooms() : Oe;
        });
        console.debug("Widget ".concat(this.widget.id, " is allowed to receive sticky events in rooms:"), G);
        var oe = P(G), Mt;
        try {
          var bt = function() {
            var Lt = Mt.value;
            w.pushStickyState(Lt).catch(function(vn) {
              console.error("Failed to push sticky events to widget ".concat(w.widget.id, " for room ").concat(Lt, ":"), vn);
            });
          };
          for (oe.s(); !(Mt = oe.n()).done; ) bt();
        } catch (Oe) {
          oe.e(Oe);
        } finally {
          oe.f();
        }
      }
      A.length > 0 && this.viewedRoomId !== null && !this.canUseRoomTimeline(this.viewedRoomId) && this.pushRoomState(this.viewedRoomId);
    } }, { key: "onIframeLoad", value: function(c) {
      this.widget.waitForIframeLoad ? this.beginCapabilities() : (console.log("waitForIframeLoad is false: waiting for widget to send contentLoaded"), this.contentLoadedWaitTimer = setTimeout(function() {
        console.error("Widget specified waitForIframeLoad=false but timed out waiting for contentLoaded event!");
      }, 1e4), this.contentLoadedActionSent = false);
    } }, { key: "handleContentLoadedAction", value: function(c) {
      if (this.contentLoadedWaitTimer !== void 0 && (clearTimeout(this.contentLoadedWaitTimer), this.contentLoadedWaitTimer = void 0), this.contentLoadedActionSent) throw new Error("Improper sequence: ContentLoaded Action can only be sent once after the widget loaded and should only be used if waitForIframeLoad is false (default=true)");
      this.widget.waitForIframeLoad ? this.transport.reply(c, { error: { message: "Improper sequence: not expecting ContentLoaded event if waitForIframeLoad is true (default=true)" } }) : (this.transport.reply(c, {}), this.beginCapabilities()), this.contentLoadedActionSent = true;
    } }, { key: "replyVersions", value: function(c) {
      this.transport.reply(c, { supported_versions: o.CurrentApiVersions });
    } }, { key: "supportsUpdateState", value: function() {
      var v = O(W().mark(function p() {
        return W().wrap(function(w) {
          for (; ; ) switch (w.prev = w.next) {
            case 0:
              return w.next = 2, this.getWidgetVersions();
            case 2:
              return w.abrupt("return", w.sent.includes(o.UnstableApiVersion.MSC2762_UPDATE_STATE));
            case 3:
            case "end":
              return w.stop();
          }
        }, p, this);
      }));
      function c() {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "handleCapabilitiesRenegotiate", value: function(c) {
      var p, a = this;
      this.transport.reply(c, {});
      var w = ((p = c.data) === null || p === void 0 ? void 0 : p.capabilities) || [], y = new Set(w.filter(function(E) {
        return !a.hasCapability(E);
      }));
      y.size === 0 && this.allowCapabilities([], []), this.driver.validateCapabilities(y).then(function(E) {
        return a.allowCapabilities(L(E), L(y));
      });
    } }, { key: "handleNavigate", value: function(c) {
      var p, a = this;
      if (!this.hasCapability(i.MatrixCapabilities.MSC2931Navigate)) return this.transport.reply(c, { error: { message: "Missing capability" } });
      if (!((p = c.data) !== null && p !== void 0 && p.uri.startsWith("https://matrix.to/#"))) return this.transport.reply(c, { error: { message: "Invalid matrix.to URI" } });
      var w = function(E) {
        console.error("[ClientWidgetApi] Failed to handle navigation: ", E), a.handleDriverError(E, c, "Error handling navigation");
      };
      try {
        this.driver.navigate(c.data.uri.toString()).catch(function(y) {
          return w(y);
        }).then(function() {
          return a.transport.reply(c, {});
        });
      } catch (y) {
        return w(y);
      }
    } }, { key: "handleOIDC", value: function(c) {
      var p = this, a = 1, w = function(A, U) {
        return U = U || {}, a > 1 ? p.transport.send(r.WidgetApiToWidgetAction.OpenIDCredentials, M({ state: A, original_request_id: c.requestId }, U)) : p.transport.reply(c, M({ state: A }, U));
      }, y = function(A) {
        return console.error("[ClientWidgetApi] Failed to handle OIDC: ", A), a > 1 ? w(u.OpenIDRequestState.Blocked) : p.transport.reply(c, { error: { message: A } });
      }, E = new s.SimpleObservable(function(T) {
        if (T.state === u.OpenIDRequestState.PendingUserConfirmation && a > 1) return E.close(), y("client provided out-of-phase response to OIDC flow");
        if (T.state === u.OpenIDRequestState.PendingUserConfirmation) {
          w(T.state), a++;
          return;
        }
        return T.state === u.OpenIDRequestState.Allowed && !T.token ? y("client provided invalid OIDC token for an allowed request") : (T.state === u.OpenIDRequestState.Blocked && (T.token = void 0), E.close(), w(T.state, T.token));
      });
      this.driver.askOpenID(E);
    } }, { key: "handleReadRoomAccountData", value: function(c) {
      var p = this, a = this.driver.readRoomAccountData(c.data.type);
      return this.canReceiveRoomAccountData(c.data.type) ? a.then(function(w) {
        p.transport.reply(c, { events: w });
      }) : this.transport.reply(c, { error: { message: "Cannot read room account data of this type" } });
    } }, { key: "handleReadEvents", value: function() {
      var v = O(W().mark(function p(a) {
        var w = this, y, E, T, A, U, q, Z, $, le, de;
        return W().wrap(function(G) {
          for (; ; ) switch (G.prev = G.next) {
            case 0:
              if (a.data.type) {
                G.next = 2;
                break;
              }
              return G.abrupt("return", this.transport.reply(a, { error: { message: "Invalid request - missing event type" } }));
            case 2:
              if (!(a.data.limit !== void 0 && (!a.data.limit || a.data.limit < 0))) {
                G.next = 4;
                break;
              }
              return G.abrupt("return", this.transport.reply(a, { error: { message: "Invalid request - limit out of range" } }));
            case 4:
              if (a.data.room_ids !== void 0) {
                G.next = 8;
                break;
              }
              y = this.viewedRoomId === null ? [] : [this.viewedRoomId], G.next = 30;
              break;
            case 8:
              if (a.data.room_ids !== f.Symbols.AnyRoom) {
                G.next = 12;
                break;
              }
              y = this.driver.getKnownRooms().filter(function(oe) {
                return w.canUseRoomTimeline(oe);
              }), G.next = 30;
              break;
            case 12:
              y = a.data.room_ids, E = P(y), G.prev = 14, E.s();
            case 16:
              if ((T = E.n()).done) {
                G.next = 22;
                break;
              }
              if (A = T.value, this.canUseRoomTimeline(A)) {
                G.next = 20;
                break;
              }
              return G.abrupt("return", this.transport.reply(a, { error: { message: "Unable to access room timeline: ".concat(A) } }));
            case 20:
              G.next = 16;
              break;
            case 22:
              G.next = 27;
              break;
            case 24:
              G.prev = 24, G.t0 = G.catch(14), E.e(G.t0);
            case 27:
              return G.prev = 27, E.f(), G.finish(27);
            case 30:
              if (U = a.data.limit || 0, q = a.data.since, Z = void 0, $ = void 0, a.data.state_key === void 0) {
                G.next = 40;
                break;
              }
              if (Z = a.data.state_key === true ? void 0 : a.data.state_key.toString(), this.canReceiveStateEvent(a.data.type, (le = Z) !== null && le !== void 0 ? le : null)) {
                G.next = 38;
                break;
              }
              return G.abrupt("return", this.transport.reply(a, { error: { message: "Cannot read state events of this type" } }));
            case 38:
              G.next = 43;
              break;
            case 40:
              if ($ = a.data.msgtype, this.canReceiveRoomEvent(a.data.type, $)) {
                G.next = 43;
                break;
              }
              return G.abrupt("return", this.transport.reply(a, { error: { message: "Cannot read room events of this type" } }));
            case 43:
              if (!(a.data.room_ids === void 0 && y.length === 0)) {
                G.next = 50;
                break;
              }
              return console.warn("The widgetDriver uses deprecated behaviour:\n It does not set the viewedRoomId using `setViewedRoomId`"), G.next = 47, a.data.state_key === void 0 ? this.driver.readRoomEvents(a.data.type, $, U, null, q) : this.driver.readStateEvents(a.data.type, Z, U, null);
            case 47:
              de = G.sent, G.next = 68;
              break;
            case 50:
              return G.next = 52, this.supportsUpdateState();
            case 52:
              if (!G.sent) {
                G.next = 58;
                break;
              }
              return G.next = 55, Promise.all(y.map(function(oe) {
                return w.driver.readRoomTimeline(oe, a.data.type, $, Z, U, q);
              }));
            case 55:
              de = G.sent.flat(1), G.next = 68;
              break;
            case 58:
              if (a.data.state_key !== void 0) {
                G.next = 64;
                break;
              }
              return G.next = 61, Promise.all(y.map(function(oe) {
                return w.driver.readRoomTimeline(oe, a.data.type, $, Z, U, q);
              }));
            case 61:
              G.t1 = G.sent, G.next = 67;
              break;
            case 64:
              return G.next = 66, Promise.all(y.map(function(oe) {
                return w.driver.readRoomState(oe, a.data.type, Z);
              }));
            case 66:
              G.t1 = G.sent;
            case 67:
              de = G.t1.flat(1);
            case 68:
              this.transport.reply(a, { events: de });
            case 69:
            case "end":
              return G.stop();
          }
        }, p, this, [[14, 24, 27, 30]]);
      }));
      function c(p) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "handleSendEvent", value: function(c) {
      var p = this;
      if (!c.data.type) return this.transport.reply(c, { error: { message: "Invalid request - missing event type" } });
      if (c.data.room_id && !this.canUseRoomTimeline(c.data.room_id)) return this.transport.reply(c, { error: { message: "Unable to access room timeline: ".concat(c.data.room_id) } });
      var a = c.data.delay !== void 0 || c.data.parent_delay_id !== void 0;
      if (a && !this.hasCapability(i.MatrixCapabilities.MSC4157SendDelayedEvent)) return this.transport.reply(c, { error: { message: "Missing capability for ".concat(i.MatrixCapabilities.MSC4157SendDelayedEvent) } });
      var w = c.data.sticky_duration_ms !== void 0;
      if (w && !this.hasCapability(i.MatrixCapabilities.MSC4407SendStickyEvent)) return this.transport.reply(c, { error: { message: "Missing capability for ".concat(i.MatrixCapabilities.MSC4407SendStickyEvent) } });
      var y;
      if (c.data.state_key !== void 0) {
        if (!this.canSendStateEvent(c.data.type, c.data.state_key)) return this.transport.reply(c, { error: { message: "Cannot send state events of this type" } });
        if (w) return this.transport.reply(c, { error: { message: "Cannot send a state event with a sticky duration" } });
        if (a) {
          var E, T;
          y = this.driver.sendDelayedEvent((E = c.data.delay) !== null && E !== void 0 ? E : null, (T = c.data.parent_delay_id) !== null && T !== void 0 ? T : null, c.data.type, c.data.content || {}, c.data.state_key, c.data.room_id);
        } else y = this.driver.sendEvent(c.data.type, c.data.content || {}, c.data.state_key, c.data.room_id);
      } else {
        var A = c.data.content || {}, U = A.msgtype;
        if (!this.canSendRoomEvent(c.data.type, U)) return this.transport.reply(c, { error: { message: "Cannot send room events of this type" } });
        var q = [c.data.type, A, null, c.data.room_id];
        if (a && c.data.sticky_duration_ms) {
          var Z, $;
          y = this.driver.sendDelayedStickyEvent((Z = c.data.delay) !== null && Z !== void 0 ? Z : null, ($ = c.data.parent_delay_id) !== null && $ !== void 0 ? $ : null, c.data.sticky_duration_ms, c.data.type, A, c.data.room_id);
        } else if (a) {
          var le, de, Se;
          y = (le = this.driver).sendDelayedEvent.apply(le, [(de = c.data.delay) !== null && de !== void 0 ? de : null, (Se = c.data.parent_delay_id) !== null && Se !== void 0 ? Se : null].concat(q));
        } else if (c.data.sticky_duration_ms) y = this.driver.sendStickyEvent(c.data.sticky_duration_ms, c.data.type, A, c.data.room_id);
        else {
          var G;
          y = (G = this.driver).sendEvent.apply(G, q);
        }
      }
      y.then(function(oe) {
        return p.transport.reply(c, M({ room_id: oe.roomId }, "eventId" in oe ? { event_id: oe.eventId } : { delay_id: oe.delayId }));
      }).catch(function(oe) {
        console.error("error sending event: ", oe), p.handleDriverError(oe, c, "Error sending event");
      });
    } }, { key: "handleUpdateDelayedEvent", value: function(c) {
      var p = this;
      if (!c.data.delay_id) return this.transport.reply(c, { error: { message: "Invalid request - missing delay_id" } });
      if (!this.hasCapability(i.MatrixCapabilities.MSC4157UpdateDelayedEvent)) return this.transport.reply(c, { error: { message: "Missing capability" } });
      var a;
      switch (c.data.action) {
        case S.UpdateDelayedEventAction.Cancel:
          a = this.driver.cancelScheduledDelayedEvent;
          break;
        case S.UpdateDelayedEventAction.Restart:
          a = this.driver.restartScheduledDelayedEvent;
          break;
        case S.UpdateDelayedEventAction.Send:
          a = this.driver.sendScheduledDelayedEvent;
          break;
        default:
          return this.transport.reply(c, { error: { message: "Invalid request - unsupported action" } });
      }
      a.call(this.driver, c.data.delay_id).then(function() {
        return p.transport.reply(c, {});
      }).catch(function(w) {
        console.error("error updating delayed event: ", w), p.handleDriverError(w, c, "Error updating delayed event");
      });
    } }, { key: "handleSendToDevice", value: function() {
      var v = O(W().mark(function p(a) {
        return W().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              if (a.data.type) {
                y.next = 4;
                break;
              }
              this.transport.reply(a, { error: { message: "Invalid request - missing event type" } }), y.next = 26;
              break;
            case 4:
              if (a.data.messages) {
                y.next = 8;
                break;
              }
              this.transport.reply(a, { error: { message: "Invalid request - missing event contents" } }), y.next = 26;
              break;
            case 8:
              if (typeof a.data.encrypted == "boolean") {
                y.next = 12;
                break;
              }
              this.transport.reply(a, { error: { message: "Invalid request - missing encryption flag" } }), y.next = 26;
              break;
            case 12:
              if (this.canSendToDeviceEvent(a.data.type)) {
                y.next = 16;
                break;
              }
              this.transport.reply(a, { error: { message: "Cannot send to-device events of this type" } }), y.next = 26;
              break;
            case 16:
              return y.prev = 16, y.next = 19, this.driver.sendToDevice(a.data.type, a.data.encrypted, a.data.messages);
            case 19:
              this.transport.reply(a, {}), y.next = 26;
              break;
            case 22:
              y.prev = 22, y.t0 = y.catch(16), console.error("error sending to-device event", y.t0), this.handleDriverError(y.t0, a, "Error sending event");
            case 26:
            case "end":
              return y.stop();
          }
        }, p, this, [[16, 22]]);
      }));
      function c(p) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "pollTurnServers", value: function() {
      var v = O(W().mark(function p(a, w) {
        var y, E, T, A, U, q;
        return W().wrap(function($) {
          for (; ; ) switch ($.prev = $.next) {
            case 0:
              return $.prev = 0, $.next = 3, this.transport.send(r.WidgetApiToWidgetAction.UpdateTurnServers, w);
            case 3:
              y = false, E = false, $.prev = 5, A = ve(a);
            case 7:
              return $.next = 9, A.next();
            case 9:
              if (!(y = !(U = $.sent).done)) {
                $.next = 16;
                break;
              }
              return q = U.value, $.next = 13, this.transport.send(r.WidgetApiToWidgetAction.UpdateTurnServers, q);
            case 13:
              y = false, $.next = 7;
              break;
            case 16:
              $.next = 22;
              break;
            case 18:
              $.prev = 18, $.t0 = $.catch(5), E = true, T = $.t0;
            case 22:
              if ($.prev = 22, $.prev = 23, !(y && A.return != null)) {
                $.next = 27;
                break;
              }
              return $.next = 27, A.return();
            case 27:
              if ($.prev = 27, !E) {
                $.next = 30;
                break;
              }
              throw T;
            case 30:
              return $.finish(27);
            case 31:
              return $.finish(22);
            case 32:
              $.next = 37;
              break;
            case 34:
              $.prev = 34, $.t1 = $.catch(0), console.error("error polling for TURN servers", $.t1);
            case 37:
            case "end":
              return $.stop();
          }
        }, p, this, [[0, 34], [5, 18, 22, 32], [23, , 27, 31]]);
      }));
      function c(p, a) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "handleWatchTurnServers", value: function() {
      var v = O(W().mark(function p(a) {
        var w, y, E, T;
        return W().wrap(function(U) {
          for (; ; ) switch (U.prev = U.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC3846TurnServers)) {
                U.next = 4;
                break;
              }
              this.transport.reply(a, { error: { message: "Missing capability" } }), U.next = 26;
              break;
            case 4:
              if (!this.turnServers) {
                U.next = 8;
                break;
              }
              this.transport.reply(a, {}), U.next = 26;
              break;
            case 8:
              return U.prev = 8, w = this.driver.getTurnServers(), U.next = 12, w.next();
            case 12:
              if (y = U.sent, E = y.done, T = y.value, !E) {
                U.next = 17;
                break;
              }
              throw new Error("Client refuses to provide any TURN servers");
            case 17:
              this.transport.reply(a, {}), this.pollTurnServers(w, T), this.turnServers = w, U.next = 26;
              break;
            case 22:
              U.prev = 22, U.t0 = U.catch(8), console.error("error getting first TURN server results", U.t0), this.transport.reply(a, { error: { message: "TURN servers not available" } });
            case 26:
            case "end":
              return U.stop();
          }
        }, p, this, [[8, 22]]);
      }));
      function c(p) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "handleUnwatchTurnServers", value: function() {
      var v = O(W().mark(function p(a) {
        return W().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC3846TurnServers)) {
                y.next = 4;
                break;
              }
              this.transport.reply(a, { error: { message: "Missing capability" } }), y.next = 12;
              break;
            case 4:
              if (this.turnServers) {
                y.next = 8;
                break;
              }
              this.transport.reply(a, {}), y.next = 12;
              break;
            case 8:
              return y.next = 10, this.turnServers.return(void 0);
            case 10:
              this.turnServers = null, this.transport.reply(a, {});
            case 12:
            case "end":
              return y.stop();
          }
        }, p, this);
      }));
      function c(p) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "handleReadRelations", value: function() {
      var v = O(W().mark(function p(a) {
        var w = this, y, E;
        return W().wrap(function(A) {
          for (; ; ) switch (A.prev = A.next) {
            case 0:
              if (a.data.event_id) {
                A.next = 2;
                break;
              }
              return A.abrupt("return", this.transport.reply(a, { error: { message: "Invalid request - missing event ID" } }));
            case 2:
              if (!(a.data.limit !== void 0 && a.data.limit < 0)) {
                A.next = 4;
                break;
              }
              return A.abrupt("return", this.transport.reply(a, { error: { message: "Invalid request - limit out of range" } }));
            case 4:
              if (!(a.data.room_id !== void 0 && !this.canUseRoomTimeline(a.data.room_id))) {
                A.next = 6;
                break;
              }
              return A.abrupt("return", this.transport.reply(a, { error: { message: "Unable to access room timeline: ".concat(a.data.room_id) } }));
            case 6:
              return A.prev = 6, A.next = 9, this.driver.readEventRelations(a.data.event_id, a.data.room_id, a.data.rel_type, a.data.event_type, a.data.from, a.data.to, a.data.limit, a.data.direction);
            case 9:
              return y = A.sent, E = y.chunk.filter(function(U) {
                return U.state_key !== void 0 ? w.canReceiveStateEvent(U.type, U.state_key) : w.canReceiveRoomEvent(U.type, U.content.msgtype);
              }), A.abrupt("return", this.transport.reply(a, { chunk: E, prev_batch: y.prevBatch, next_batch: y.nextBatch }));
            case 14:
              A.prev = 14, A.t0 = A.catch(6), console.error("error getting the relations", A.t0), this.handleDriverError(A.t0, a, "Unexpected error while reading relations");
            case 18:
            case "end":
              return A.stop();
          }
        }, p, this, [[6, 14]]);
      }));
      function c(p) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "handleUserDirectorySearch", value: function() {
      var v = O(W().mark(function p(a) {
        var w;
        return W().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC3973UserDirectorySearch)) {
                E.next = 2;
                break;
              }
              return E.abrupt("return", this.transport.reply(a, { error: { message: "Missing capability" } }));
            case 2:
              if (typeof a.data.search_term == "string") {
                E.next = 4;
                break;
              }
              return E.abrupt("return", this.transport.reply(a, { error: { message: "Invalid request - missing search term" } }));
            case 4:
              if (!(a.data.limit !== void 0 && a.data.limit < 0)) {
                E.next = 6;
                break;
              }
              return E.abrupt("return", this.transport.reply(a, { error: { message: "Invalid request - limit out of range" } }));
            case 6:
              return E.prev = 6, E.next = 9, this.driver.searchUserDirectory(a.data.search_term, a.data.limit);
            case 9:
              return w = E.sent, E.abrupt("return", this.transport.reply(a, { limited: w.limited, results: w.results.map(function(T) {
                return { user_id: T.userId, display_name: T.displayName, avatar_url: T.avatarUrl };
              }) }));
            case 13:
              E.prev = 13, E.t0 = E.catch(6), console.error("error searching in the user directory", E.t0), this.handleDriverError(E.t0, a, "Unexpected error while searching in the user directory");
            case 17:
            case "end":
              return E.stop();
          }
        }, p, this, [[6, 13]]);
      }));
      function c(p) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "handleGetMediaConfig", value: function() {
      var v = O(W().mark(function p(a) {
        var w;
        return W().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC4039UploadFile)) {
                E.next = 2;
                break;
              }
              return E.abrupt("return", this.transport.reply(a, { error: { message: "Missing capability" } }));
            case 2:
              return E.prev = 2, E.next = 5, this.driver.getMediaConfig();
            case 5:
              return w = E.sent, E.abrupt("return", this.transport.reply(a, w));
            case 9:
              E.prev = 9, E.t0 = E.catch(2), console.error("error while getting the media configuration", E.t0), this.handleDriverError(E.t0, a, "Unexpected error while getting the media configuration");
            case 13:
            case "end":
              return E.stop();
          }
        }, p, this, [[2, 9]]);
      }));
      function c(p) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "handleUploadFile", value: function() {
      var v = O(W().mark(function p(a) {
        var w;
        return W().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC4039UploadFile)) {
                E.next = 2;
                break;
              }
              return E.abrupt("return", this.transport.reply(a, { error: { message: "Missing capability" } }));
            case 2:
              return E.prev = 2, E.next = 5, this.driver.uploadFile(a.data.file);
            case 5:
              return w = E.sent, E.abrupt("return", this.transport.reply(a, { content_uri: w.contentUri }));
            case 9:
              E.prev = 9, E.t0 = E.catch(2), console.error("error while uploading a file", E.t0), this.handleDriverError(E.t0, a, "Unexpected error while uploading a file");
            case 13:
            case "end":
              return E.stop();
          }
        }, p, this, [[2, 9]]);
      }));
      function c(p) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "handleDownloadFile", value: function() {
      var v = O(W().mark(function p(a) {
        var w;
        return W().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC4039DownloadFile)) {
                E.next = 2;
                break;
              }
              return E.abrupt("return", this.transport.reply(a, { error: { message: "Missing capability" } }));
            case 2:
              return E.prev = 2, E.next = 5, this.driver.downloadFile(a.data.content_uri);
            case 5:
              return w = E.sent, E.abrupt("return", this.transport.reply(a, { file: w.file }));
            case 9:
              E.prev = 9, E.t0 = E.catch(2), console.error("error while downloading a file", E.t0), this.handleDriverError(E.t0, a, "Unexpected error while downloading a file");
            case 13:
            case "end":
              return E.stop();
          }
        }, p, this, [[2, 9]]);
      }));
      function c(p) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "handleDriverError", value: function(c, p, a) {
      var w = this.driver.processError(c);
      this.transport.reply(p, { error: M({ message: a }, w) });
    } }, { key: "handleMessage", value: function(c) {
      if (!this.isStopped) {
        var p = new CustomEvent("action:".concat(c.detail.action), { detail: c.detail, cancelable: true });
        if (this.emit("action:".concat(c.detail.action), p), !p.defaultPrevented) switch (c.detail.action) {
          case r.WidgetApiFromWidgetAction.ContentLoaded:
            return this.handleContentLoadedAction(c.detail);
          case r.WidgetApiFromWidgetAction.SupportedApiVersions:
            return this.replyVersions(c.detail);
          case r.WidgetApiFromWidgetAction.SendEvent:
            return this.handleSendEvent(c.detail);
          case r.WidgetApiFromWidgetAction.SendToDevice:
            return this.handleSendToDevice(c.detail);
          case r.WidgetApiFromWidgetAction.GetOpenIDCredentials:
            return this.handleOIDC(c.detail);
          case r.WidgetApiFromWidgetAction.MSC2931Navigate:
            return this.handleNavigate(c.detail);
          case r.WidgetApiFromWidgetAction.MSC2974RenegotiateCapabilities:
            return this.handleCapabilitiesRenegotiate(c.detail);
          case r.WidgetApiFromWidgetAction.MSC2876ReadEvents:
            return this.handleReadEvents(c.detail);
          case r.WidgetApiFromWidgetAction.WatchTurnServers:
            return this.handleWatchTurnServers(c.detail);
          case r.WidgetApiFromWidgetAction.UnwatchTurnServers:
            return this.handleUnwatchTurnServers(c.detail);
          case r.WidgetApiFromWidgetAction.MSC3869ReadRelations:
            return this.handleReadRelations(c.detail);
          case r.WidgetApiFromWidgetAction.MSC3973UserDirectorySearch:
            return this.handleUserDirectorySearch(c.detail);
          case r.WidgetApiFromWidgetAction.BeeperReadRoomAccountData:
            return this.handleReadRoomAccountData(c.detail);
          case r.WidgetApiFromWidgetAction.MSC4039GetMediaConfigAction:
            return this.handleGetMediaConfig(c.detail);
          case r.WidgetApiFromWidgetAction.MSC4039UploadFileAction:
            return this.handleUploadFile(c.detail);
          case r.WidgetApiFromWidgetAction.MSC4039DownloadFileAction:
            return this.handleDownloadFile(c.detail);
          case r.WidgetApiFromWidgetAction.MSC4157UpdateDelayedEvent:
            return this.handleUpdateDelayedEvent(c.detail);
          default:
            return this.transport.reply(c.detail, { error: { message: "Unknown or unsupported from-widget action: " + c.detail.action } });
        }
      }
    } }, { key: "updateTheme", value: function(c) {
      return this.transport.send(r.WidgetApiToWidgetAction.ThemeChange, c);
    } }, { key: "updateLanguage", value: function(c) {
      return this.transport.send(r.WidgetApiToWidgetAction.LanguageChange, { lang: c });
    } }, { key: "takeScreenshot", value: function() {
      return this.transport.send(r.WidgetApiToWidgetAction.TakeScreenshot, {});
    } }, { key: "updateVisibility", value: function(c) {
      return this.transport.send(r.WidgetApiToWidgetAction.UpdateVisibility, { visible: c });
    } }, { key: "sendWidgetConfig", value: function(c) {
      return this.transport.send(r.WidgetApiToWidgetAction.WidgetConfig, c).then();
    } }, { key: "notifyModalWidgetButtonClicked", value: function(c) {
      return this.transport.send(r.WidgetApiToWidgetAction.ButtonClicked, { id: c }).then();
    } }, { key: "notifyModalWidgetClose", value: function(c) {
      return this.transport.send(r.WidgetApiToWidgetAction.CloseModalWidget, c).then();
    } }, { key: "feedEvent", value: function() {
      var v = O(W().mark(function p(a, w) {
        var y;
        return W().wrap(function(T) {
          for (; ; ) switch (T.prev = T.next) {
            case 0:
              if (w !== void 0 && this.setViewedRoomId(w), !(a.room_id !== this.viewedRoomId && !this.canUseRoomTimeline(a.room_id))) {
                T.next = 3;
                break;
              }
              return T.abrupt("return");
            case 3:
              if (!(a.state_key !== void 0 && a.state_key !== null)) {
                T.next = 8;
                break;
              }
              if (this.canReceiveStateEvent(a.type, a.state_key)) {
                T.next = 6;
                break;
              }
              return T.abrupt("return");
            case 6:
              T.next = 10;
              break;
            case 8:
              if (this.canReceiveRoomEvent(a.type, (y = a.content) === null || y === void 0 ? void 0 : y.msgtype)) {
                T.next = 10;
                break;
              }
              return T.abrupt("return");
            case 10:
              return T.next = 12, this.transport.send(r.WidgetApiToWidgetAction.SendEvent, a);
            case 12:
            case "end":
              return T.stop();
          }
        }, p, this);
      }));
      function c(p, a) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "feedToDevice", value: function() {
      var v = O(W().mark(function p(a, w) {
        return W().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              if (!this.canReceiveToDeviceEvent(a.type)) {
                E.next = 3;
                break;
              }
              return E.next = 3, this.transport.send(r.WidgetApiToWidgetAction.SendToDevice, M(M({}, a), {}, { encrypted: w }));
            case 3:
            case "end":
              return E.stop();
          }
        }, p, this);
      }));
      function c(p, a) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "setViewedRoomId", value: function(c) {
      this.viewedRoomId = c, c !== null && !this.canUseRoomTimeline(c) && this.pushRoomState(c);
    } }, { key: "flushRoomState", value: function() {
      var v = O(W().mark(function p() {
        var a, w, y, E, T, A, U;
        return W().wrap(function(Z) {
          for (; ; ) switch (Z.prev = Z.next) {
            case 0:
              Z.prev = 0;
            case 1:
              return Z.next = 3, Promise.all(this.pushRoomStateTasks);
            case 3:
              if (this.pushRoomStateTasks.size > 0) {
                Z.next = 1;
                break;
              }
            case 4:
              a = [], w = P(this.pushRoomStateResult.values());
              try {
                for (w.s(); !(y = w.n()).done; ) {
                  E = y.value, T = P(E.values());
                  try {
                    for (T.s(); !(A = T.n()).done; ) U = A.value, a.push.apply(a, L(U.values()));
                  } catch ($) {
                    T.e($);
                  } finally {
                    T.f();
                  }
                }
              } catch ($) {
                w.e($);
              } finally {
                w.f();
              }
              return Z.next = 9, this.getWidgetVersions();
            case 9:
              if (!Z.sent.includes(o.UnstableApiVersion.MSC2762_UPDATE_STATE)) {
                Z.next = 12;
                break;
              }
              return Z.next = 12, this.transport.send(r.WidgetApiToWidgetAction.UpdateState, { state: a });
            case 12:
              return Z.prev = 12, this.flushRoomStateTask = null, Z.finish(12);
            case 15:
            case "end":
              return Z.stop();
          }
        }, p, this, [[0, , 12, 15]]);
      }));
      function c() {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "pushStickyState", value: function() {
      var v = O(W().mark(function p(a) {
        var w = this;
        return W().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              return console.debug("Pushing sticky state to widget for room", a), E.abrupt("return", this.driver.readStickyEvents(a).then(function(T) {
                var A = T.filter(function(U) {
                  var q;
                  return w.canReceiveRoomEvent(U.type, typeof ((q = U.content) === null || q === void 0 ? void 0 : q.msgtype) == "string" ? U.content.msgtype : null);
                });
                return { roomId: a, stickyEvents: A };
              }).then(function() {
                var T = O(W().mark(function A(U) {
                  var q, Z, $;
                  return W().wrap(function(de) {
                    for (; ; ) switch (de.prev = de.next) {
                      case 0:
                        return q = U.roomId, Z = U.stickyEvents, console.debug("Pushing", Z.length, "sticky events to widget for room", q), $ = Z.map(function(Se) {
                          return w.transport.send(r.WidgetApiToWidgetAction.SendEvent, Se);
                        }), de.next = 5, Promise.all($);
                      case 5:
                      case "end":
                        return de.stop();
                    }
                  }, A);
                }));
                return function(A) {
                  return T.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return E.stop();
          }
        }, p, this);
      }));
      function c(p) {
        return v.apply(this, arguments);
      }
      return c;
    }() }, { key: "pushRoomState", value: function(c) {
      var p = this, a = P(this.allowedEvents), w;
      try {
        var y = function() {
          var T = w.value;
          if (T.kind === l.EventKind.State && T.direction === l.EventDirection.Receive) {
            var A, U, q = p.driver.readRoomState(c, T.eventType, (A = T.keyStr) !== null && A !== void 0 ? A : void 0), Z = q.then(function($) {
              var le = P($), de;
              try {
                for (le.s(); !(de = le.n()).done; ) {
                  var Se = de.value, G = p.pushRoomStateResult.get(c);
                  G === void 0 && (G = /* @__PURE__ */ new Map(), p.pushRoomStateResult.set(c, G));
                  var oe = G.get(T.eventType);
                  oe === void 0 && (oe = /* @__PURE__ */ new Map(), G.set(T.eventType, oe)), oe.has(Se.state_key) || oe.set(Se.state_key, Se);
                }
              } catch (Mt) {
                le.e(Mt);
              } finally {
                le.f();
              }
            }, function($) {
              return console.error("Failed to read room state for ".concat(c, " (").concat(T.eventType, ", ").concat(T.keyStr, ")"), $);
            }).then(function() {
              p.pushRoomStateTasks.delete(Z);
            });
            p.pushRoomStateTasks.add(Z), (U = p.flushRoomStateTask) !== null && U !== void 0 || (p.flushRoomStateTask = p.flushRoomState()), p.flushRoomStateTask.catch(function($) {
              return console.error("Failed to push room state", $);
            });
          }
        };
        for (a.s(); !(w = a.n()).done; ) y();
      } catch (E) {
        a.e(E);
      } finally {
        a.f();
      }
    } }, { key: "feedStateUpdate", value: function() {
      var v = O(W().mark(function p(a) {
        var w, y;
        return W().wrap(function(T) {
          for (; ; ) switch (T.prev = T.next) {
            case 0:
              if (a.state_key !== void 0) {
                T.next = 2;
                break;
              }
              throw new Error("Not a state event");
            case 2:
              if (!((a.room_id === this.viewedRoomId || this.canUseRoomTimeline(a.room_id)) && this.canReceiveStateEvent(a.type, a.state_key))) {
                T.next = 21;
                break;
              }
              if (this.pushRoomStateTasks.size !== 0) {
                T.next = 11;
                break;
              }
              return T.next = 6, this.getWidgetVersions();
            case 6:
              if (!T.sent.includes(o.UnstableApiVersion.MSC2762_UPDATE_STATE)) {
                T.next = 9;
                break;
              }
              return T.next = 9, this.transport.send(r.WidgetApiToWidgetAction.UpdateState, { state: [a] });
            case 9:
              T.next = 21;
              break;
            case 11:
              w = this.pushRoomStateResult.get(a.room_id), w === void 0 && (w = /* @__PURE__ */ new Map(), this.pushRoomStateResult.set(a.room_id, w)), y = w.get(a.type), y === void 0 && (y = /* @__PURE__ */ new Map(), w.set(a.type, y)), y.has(a.type) || y.set(a.state_key, a);
            case 16:
              return T.next = 18, Promise.all(this.pushRoomStateTasks);
            case 18:
              if (this.pushRoomStateTasks.size > 0) {
                T.next = 16;
                break;
              }
            case 19:
              return T.next = 21, this.flushRoomStateTask;
            case 21:
            case "end":
              return T.stop();
          }
        }, p, this);
      }));
      function c(p) {
        return v.apply(this, arguments);
      }
      return c;
    }() }]), g;
  }(e.EventEmitter);
  return kr.ClientWidgetApi = At, kr;
}
var ou = {};
Object.defineProperty(ou, "__esModule", { value: true });
ou.isErrorResponse = sh;
function oa(e) {
  "@babel/helpers - typeof";
  return oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oa(e);
}
function sh(e) {
  var t = e.error;
  return oa(t) === "object" && t !== null && "message" in t && typeof t.message == "string";
}
var Lo = {};
Object.defineProperty(Lo, "__esModule", { value: true });
Lo.WidgetKind = void 0;
var ch = function(e) {
  return e.Room = "room", e.Account = "account", e.Modal = "modal", e;
}({});
Lo.WidgetKind = ch;
var Io = {};
Object.defineProperty(Io, "__esModule", { value: true });
Io.ModalButtonKind = void 0;
var fh = function(e) {
  return e.Primary = "m.primary", e.Secondary = "m.secondary", e.Warning = "m.warning", e.Danger = "m.danger", e.Link = "m.link", e;
}({});
Io.ModalButtonKind = fh;
var jo = {};
Object.defineProperty(jo, "__esModule", { value: true });
jo.isValidUrl = dh;
function dh(e) {
  if (!e) return false;
  try {
    var t = new URL(e);
    return !(t.protocol !== "http" && t.protocol !== "https");
  } catch (n) {
    if (n instanceof TypeError) return false;
    throw n;
  }
}
var Wo = {};
Object.defineProperty(Wo, "__esModule", { value: true });
Wo.assertPresent = ph;
function ph(e, t) {
  if (!e[t]) throw new Error("".concat(String(t), " is required"));
}
var _r = {}, _s;
function Zf() {
  if (_s) return _r;
  _s = 1, Object.defineProperty(_r, "__esModule", { value: true }), _r.Widget = void 0;
  var e = Uo(), t = Wo;
  function n(f) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
      return typeof S;
    } : function(S) {
      return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
    }, n(f);
  }
  function r(f, S) {
    if (!(f instanceof S)) throw new TypeError("Cannot call a class as a function");
  }
  function i(f, S) {
    for (var C = 0; C < S.length; C++) {
      var m = S[C];
      m.enumerable = m.enumerable || false, m.configurable = true, "value" in m && (m.writable = true), Object.defineProperty(f, l(m.key), m);
    }
  }
  function o(f, S, C) {
    return S && i(f.prototype, S), Object.defineProperty(f, "prototype", { writable: false }), f;
  }
  function l(f) {
    var S = u(f, "string");
    return n(S) === "symbol" ? S : String(S);
  }
  function u(f, S) {
    if (n(f) !== "object" || f === null) return f;
    var C = f[Symbol.toPrimitive];
    if (C !== void 0) {
      var m = C.call(f, S);
      if (n(m) !== "object") return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(f);
  }
  var s = function() {
    function f(S) {
      if (r(this, f), this.definition = S, !this.definition) throw new Error("Definition is required");
      (0, t.assertPresent)(S, "id"), (0, t.assertPresent)(S, "creatorUserId"), (0, t.assertPresent)(S, "type"), (0, t.assertPresent)(S, "url");
    }
    return o(f, [{ key: "creatorUserId", get: function() {
      return this.definition.creatorUserId;
    } }, { key: "type", get: function() {
      return this.definition.type;
    } }, { key: "id", get: function() {
      return this.definition.id;
    } }, { key: "name", get: function() {
      return this.definition.name || null;
    } }, { key: "title", get: function() {
      return this.rawData.title || null;
    } }, { key: "templateUrl", get: function() {
      return this.definition.url;
    } }, { key: "origin", get: function() {
      return new URL(this.templateUrl).origin;
    } }, { key: "waitForIframeLoad", get: function() {
      return this.definition.waitForIframeLoad === false ? false : (this.definition.waitForIframeLoad === true, true);
    } }, { key: "rawData", get: function() {
      return this.definition.data || {};
    } }, { key: "getCompleteUrl", value: function(C) {
      return (0, e.runTemplate)(this.templateUrl, this.definition, C);
    } }]), f;
  }();
  return _r.Widget = s, _r;
}
var Cr = {}, Cs;
function vh() {
  if (Cs) return Cr;
  Cs = 1, Object.defineProperty(Cr, "__esModule", { value: true }), Cr.WidgetParser = void 0;
  var e = Zf(), t = jo;
  function n(m) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(M) {
      return typeof M;
    } : function(M) {
      return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M;
    }, n(m);
  }
  function r(m, M) {
    var P = typeof Symbol < "u" && m[Symbol.iterator] || m["@@iterator"];
    if (!P) {
      if (Array.isArray(m) || (P = i(m)) || M) {
        P && (m = P);
        var L = 0, ee = function() {
        };
        return { s: ee, n: function() {
          return L >= m.length ? { done: true } : { done: false, value: m[L++] };
        }, e: function(W) {
          throw W;
        }, f: ee };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var k = true, h = false, _;
    return { s: function() {
      P = P.call(m);
    }, n: function() {
      var W = P.next();
      return k = W.done, W;
    }, e: function(W) {
      h = true, _ = W;
    }, f: function() {
      try {
        !k && P.return != null && P.return();
      } finally {
        if (h) throw _;
      }
    } };
  }
  function i(m, M) {
    if (m) {
      if (typeof m == "string") return o(m, M);
      var P = Object.prototype.toString.call(m).slice(8, -1);
      if (P === "Object" && m.constructor && (P = m.constructor.name), P === "Map" || P === "Set") return Array.from(m);
      if (P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)) return o(m, M);
    }
  }
  function o(m, M) {
    (M == null || M > m.length) && (M = m.length);
    for (var P = 0, L = new Array(M); P < M; P++) L[P] = m[P];
    return L;
  }
  function l(m, M) {
    if (!(m instanceof M)) throw new TypeError("Cannot call a class as a function");
  }
  function u(m, M) {
    for (var P = 0; P < M.length; P++) {
      var L = M[P];
      L.enumerable = L.enumerable || false, L.configurable = true, "value" in L && (L.writable = true), Object.defineProperty(m, f(L.key), L);
    }
  }
  function s(m, M, P) {
    return P && u(m, P), Object.defineProperty(m, "prototype", { writable: false }), m;
  }
  function f(m) {
    var M = S(m, "string");
    return n(M) === "symbol" ? M : String(M);
  }
  function S(m, M) {
    if (n(m) !== "object" || m === null) return m;
    var P = m[Symbol.toPrimitive];
    if (P !== void 0) {
      var L = P.call(m, M);
      if (n(L) !== "object") return L;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(m);
  }
  var C = function() {
    function m() {
      l(this, m);
    }
    return s(m, null, [{ key: "parseAccountData", value: function(P) {
      if (!P) return [];
      for (var L = [], ee = 0, k = Object.keys(P); ee < k.length; ee++) {
        var h = k[ee], _ = P[h];
        if (_ && !(_.type !== "m.widget" && _.type !== "im.vector.modular.widgets") && _.sender) {
          var I = _.state_key || _.id;
          if (I === h) {
            var W = { content: _.content, sender: _.sender, type: "m.widget", state_key: h, event_id: "$example", room_id: "!example", origin_server_ts: 1 }, b = m.parseRoomWidget(W);
            b && L.push(b);
          }
        }
      }
      return L;
    } }, { key: "parseWidgetsFromRoomState", value: function(P) {
      if (!P) return [];
      var L = [], ee = r(P), k;
      try {
        for (ee.s(); !(k = ee.n()).done; ) {
          var h = k.value, _ = m.parseRoomWidget(h);
          _ && L.push(_);
        }
      } catch (I) {
        ee.e(I);
      } finally {
        ee.f();
      }
      return L;
    } }, { key: "parseRoomWidget", value: function(P) {
      if (!P || P.type !== "m.widget" && P.type !== "im.vector.modular.widgets") return null;
      var L = P.content || {}, ee = { id: P.state_key, creatorUserId: L.creatorUserId || P.sender, name: L.name, type: L.type, url: L.url, waitForIframeLoad: L.waitForIframeLoad, data: L.data };
      return m.processEstimatedWidget(ee);
    } }, { key: "processEstimatedWidget", value: function(P) {
      return !P.id || !P.creatorUserId || !P.type || !(0, t.isValidUrl)(P.url) ? null : new e.Widget(P);
    } }]), m;
  }();
  return Cr.WidgetParser = C, Cr;
}
var No = {};
Object.defineProperty(No, "__esModule", { value: true });
No.runTemplate = hh;
No.toString = Jf;
function hh(e, t, n) {
  for (var r = Object.assign({}, t.data, { matrix_room_id: n.widgetRoomId || "", matrix_user_id: n.currentUserId, matrix_display_name: n.userDisplayName || n.currentUserId, matrix_avatar_url: n.userHttpAvatarUrl || "", matrix_widget_id: t.id, "org.matrix.msc2873.client_id": n.clientId || "", "org.matrix.msc2873.client_theme": n.clientTheme || "", "org.matrix.msc2873.client_language": n.clientLanguage || "", "org.matrix.msc3819.matrix_device_id": n.deviceId || "", "org.matrix.msc4039.matrix_base_url": n.baseUrl || "" }), i = e, o = 0, l = Object.keys(r); o < l.length; o++) {
    var u = l[o], s = "$".concat(u).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), f = new RegExp(s, "g");
    i = i.replace(f, encodeURIComponent(Jf(r[u])));
  }
  return i;
}
function Jf(e) {
  return e == null ? "".concat(e) : String(e);
}
var Pr = {}, Ps;
function mh() {
  if (Ps) return Pr;
  Ps = 1, Object.defineProperty(Pr, "__esModule", { value: true }), Pr.WidgetDriver = void 0;
  var e = Uo();
  function t(s) {
    "@babel/helpers - typeof";
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
      return typeof f;
    } : function(f) {
      return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
    }, t(s);
  }
  function n(s, f) {
    if (!(s instanceof f)) throw new TypeError("Cannot call a class as a function");
  }
  function r(s, f) {
    for (var S = 0; S < f.length; S++) {
      var C = f[S];
      C.enumerable = C.enumerable || false, C.configurable = true, "value" in C && (C.writable = true), Object.defineProperty(s, o(C.key), C);
    }
  }
  function i(s, f, S) {
    return f && r(s.prototype, f), Object.defineProperty(s, "prototype", { writable: false }), s;
  }
  function o(s) {
    var f = l(s, "string");
    return t(f) === "symbol" ? f : String(f);
  }
  function l(s, f) {
    if (t(s) !== "object" || s === null) return s;
    var S = s[Symbol.toPrimitive];
    if (S !== void 0) {
      var C = S.call(s, f);
      if (t(C) !== "object") return C;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(s);
  }
  var u = function() {
    function s() {
      n(this, s);
    }
    return i(s, [{ key: "validateCapabilities", value: function(S) {
      return Promise.resolve(/* @__PURE__ */ new Set());
    } }, { key: "sendEvent", value: function(S, C) {
      return Promise.reject(new Error("Failed to override function"));
    } }, { key: "sendStickyEvent", value: function(S, C, m) {
      throw new Error("Method not implemented.");
    } }, { key: "sendDelayedEvent", value: function(S, C, m, M) {
      return Promise.reject(new Error("Failed to override function"));
    } }, { key: "sendDelayedStickyEvent", value: function(S, C, m, M, P) {
      throw new Error("Method not implemented.");
    } }, { key: "cancelScheduledDelayedEvent", value: function(S) {
      return Promise.reject(new Error("Failed to override function"));
    } }, { key: "restartScheduledDelayedEvent", value: function(S) {
      return Promise.reject(new Error("Failed to override function"));
    } }, { key: "sendScheduledDelayedEvent", value: function(S) {
      return Promise.reject(new Error("Failed to override function"));
    } }, { key: "sendToDevice", value: function(S, C, m) {
      return Promise.reject(new Error("Failed to override function"));
    } }, { key: "readRoomAccountData", value: function(S) {
      return Promise.resolve([]);
    } }, { key: "readRoomEvents", value: function(S, C, m) {
      return Promise.resolve([]);
    } }, { key: "readStateEvents", value: function(S, C, m) {
      return Promise.resolve([]);
    } }, { key: "readStickyEvents", value: function(S) {
      throw new Error("readStickyEvents is not implemented");
    } }, { key: "readRoomTimeline", value: function(S, C, m, M, P, L) {
      return M === void 0 ? this.readRoomEvents(C, m, P, [S], L) : this.readStateEvents(C, M, P, [S]);
    } }, { key: "readRoomState", value: function(S, C, m) {
      return this.readStateEvents(C, m, Number.MAX_SAFE_INTEGER, [S]);
    } }, { key: "readEventRelations", value: function(S, C, m, M, P, L, ee, k) {
      return Promise.resolve({ chunk: [] });
    } }, { key: "askOpenID", value: function(S) {
      S.update({ state: e.OpenIDRequestState.Blocked });
    } }, { key: "navigate", value: function(S) {
      throw new Error("Navigation is not implemented");
    } }, { key: "getTurnServers", value: function() {
      throw new Error("TURN server support is not implemented");
    } }, { key: "searchUserDirectory", value: function(S, C) {
      return Promise.resolve({ limited: false, results: [] });
    } }, { key: "getMediaConfig", value: function() {
      throw new Error("Get media config is not implemented");
    } }, { key: "uploadFile", value: function(S) {
      throw new Error("Upload file is not implemented");
    } }, { key: "downloadFile", value: function(S) {
      throw new Error("Download file is not implemented");
    } }, { key: "getKnownRooms", value: function() {
      throw new Error("Querying known rooms is not implemented");
    } }, { key: "processError", value: function(S) {
    } }]), s;
  }();
  return Pr.WidgetDriver = u, Pr;
}
var Ts;
function Uo() {
  return Ts || (Ts = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: true });
    var t = $v();
    Object.keys(t).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === t[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return t[d];
      } });
    });
    var n = uh();
    Object.keys(n).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === n[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return n[d];
      } });
    });
    var r = fr;
    Object.keys(r).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === r[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return r[d];
      } });
    });
    var i = ru();
    Object.keys(i).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === i[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return i[d];
      } });
    });
    var o = ci;
    Object.keys(o).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === o[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return o[d];
      } });
    });
    var l = ou;
    Object.keys(l).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === l[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return l[d];
      } });
    });
    var u = cn;
    Object.keys(u).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === u[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return u[d];
      } });
    });
    var s = bn;
    Object.keys(s).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === s[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return s[d];
      } });
    });
    var f = Ot;
    Object.keys(f).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === f[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return f[d];
      } });
    });
    var S = pt;
    Object.keys(S).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === S[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return S[d];
      } });
    });
    var C = cr;
    Object.keys(C).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === C[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return C[d];
      } });
    });
    var m = Lo;
    Object.keys(m).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === m[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return m[d];
      } });
    });
    var M = Io;
    Object.keys(M).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === M[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return M[d];
      } });
    });
    var P = fi;
    Object.keys(P).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === P[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return P[d];
      } });
    });
    var L = dr;
    Object.keys(L).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === L[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return L[d];
      } });
    });
    var ee = Dt;
    Object.keys(ee).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === ee[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return ee[d];
      } });
    });
    var k = jo;
    Object.keys(k).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === k[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return k[d];
      } });
    });
    var h = Wo;
    Object.keys(h).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === h[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return h[d];
      } });
    });
    var _ = Zf();
    Object.keys(_).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === _[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return _[d];
      } });
    });
    var I = vh();
    Object.keys(I).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === I[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return I[d];
      } });
    });
    var W = No;
    Object.keys(W).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === W[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return W[d];
      } });
    });
    var b = di;
    Object.keys(b).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === b[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return b[d];
      } });
    });
    var O = mh();
    Object.keys(O).forEach(function(d) {
      d === "default" || d === "__esModule" || d in e && e[d] === O[d] || Object.defineProperty(e, d, { enumerable: true, get: function() {
        return O[d];
      } });
    });
  }(fl)), fl;
}
var _h = Uo();
export {
  kh as E,
  vd as R,
  tu as a,
  wh as b,
  Eh as c,
  gh as d,
  yh as e,
  bo as f,
  la as g,
  Cv as h,
  Pv as i,
  Sh as j,
  _h as l,
  ho as r
};
