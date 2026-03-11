function Ps(e, t) {
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
var hh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function iu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function mh(e) {
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
var Rs = { exports: {} }, fo = {}, Os = { exports: {} }, le = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ni = Symbol.for("react.element"), Zf = Symbol.for("react.portal"), Jf = Symbol.for("react.fragment"), qf = Symbol.for("react.strict_mode"), ed = Symbol.for("react.profiler"), td = Symbol.for("react.provider"), nd = Symbol.for("react.context"), rd = Symbol.for("react.forward_ref"), id = Symbol.for("react.suspense"), od = Symbol.for("react.memo"), ld = Symbol.for("react.lazy"), ia = Symbol.iterator;
function ud(e) {
  return e === null || typeof e != "object" ? null : (e = ia && e[ia] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ts = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ds = Object.assign, As = {};
function rr(e, t, n) {
  this.props = e, this.context = t, this.refs = As, this.updater = n || Ts;
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
rr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ms() {
}
Ms.prototype = rr.prototype;
function ou(e, t, n) {
  this.props = e, this.context = t, this.refs = As, this.updater = n || Ts;
}
var lu = ou.prototype = new Ms();
lu.constructor = ou;
Ds(lu, rr.prototype);
lu.isPureReactComponent = true;
var oa = Array.isArray, Ls = Object.prototype.hasOwnProperty, uu = { current: null }, bs = { key: true, ref: true, __self: true, __source: true };
function js(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) Ls.call(t, r) && !bs.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) i[r] === void 0 && (i[r] = u[r]);
  return { $$typeof: ni, type: e, key: o, ref: l, props: i, _owner: uu.current };
}
function ad(e, t) {
  return { $$typeof: ni, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function au(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function sd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var la = /\/+/g;
function No(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? sd("" + e.key) : t.toString(36);
}
function Ti(e, t, n, r, i) {
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
        case ni:
        case Zf:
          l = true;
      }
  }
  if (l) return l = e, i = i(l), e = r === "" ? "." + No(l, 0) : r, oa(i) ? (n = "", e != null && (n = e.replace(la, "$&/") + "/"), Ti(i, t, n, "", function(s) {
    return s;
  })) : i != null && (au(i) && (i = ad(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(la, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", oa(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + No(o, u);
    l += Ti(o, t, n, a, i);
  }
  else if (a = ud(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + No(o, u++), l += Ti(o, t, n, a, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function fi(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ti(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function cd(e) {
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
var Qe = { current: null }, Di = { transition: null }, fd = { ReactCurrentDispatcher: Qe, ReactCurrentBatchConfig: Di, ReactCurrentOwner: uu };
le.Children = { map: fi, forEach: function(e, t, n) {
  fi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return fi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return fi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!au(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
le.Component = rr;
le.Fragment = Jf;
le.Profiler = ed;
le.PureComponent = ou;
le.StrictMode = qf;
le.Suspense = id;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fd;
le.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ds({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = uu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) Ls.call(t, a) && !bs.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: ni, type: e.type, key: i, ref: o, props: r, _owner: l };
};
le.createContext = function(e) {
  return e = { $$typeof: nd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: td, _context: e }, e.Consumer = e;
};
le.createElement = js;
le.createFactory = function(e) {
  var t = js.bind(null, e);
  return t.type = e, t;
};
le.createRef = function() {
  return { current: null };
};
le.forwardRef = function(e) {
  return { $$typeof: rd, render: e };
};
le.isValidElement = au;
le.lazy = function(e) {
  return { $$typeof: ld, _payload: { _status: -1, _result: e }, _init: cd };
};
le.memo = function(e, t) {
  return { $$typeof: od, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function(e) {
  var t = Di.transition;
  Di.transition = {};
  try {
    e();
  } finally {
    Di.transition = t;
  }
};
le.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
le.useCallback = function(e, t) {
  return Qe.current.useCallback(e, t);
};
le.useContext = function(e) {
  return Qe.current.useContext(e);
};
le.useDebugValue = function() {
};
le.useDeferredValue = function(e) {
  return Qe.current.useDeferredValue(e);
};
le.useEffect = function(e, t) {
  return Qe.current.useEffect(e, t);
};
le.useId = function() {
  return Qe.current.useId();
};
le.useImperativeHandle = function(e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function(e, t) {
  return Qe.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function(e, t) {
  return Qe.current.useLayoutEffect(e, t);
};
le.useMemo = function(e, t) {
  return Qe.current.useMemo(e, t);
};
le.useReducer = function(e, t, n) {
  return Qe.current.useReducer(e, t, n);
};
le.useRef = function(e) {
  return Qe.current.useRef(e);
};
le.useState = function(e) {
  return Qe.current.useState(e);
};
le.useSyncExternalStore = function(e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function() {
  return Qe.current.useTransition();
};
le.version = "18.2.0";
Os.exports = le;
var po = Os.exports;
const dd = iu(po), yh = Ps({ __proto__: null, default: dd }, [po]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var pd = po, vd = Symbol.for("react.element"), hd = Symbol.for("react.fragment"), md = Object.prototype.hasOwnProperty, yd = pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, gd = { key: true, ref: true, __self: true, __source: true };
function Is(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) md.call(t, r) && !gd.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: vd, type: e, key: o, ref: l, props: i, _owner: yd.current };
}
fo.Fragment = hd;
fo.jsx = Is;
fo.jsxs = Is;
Rs.exports = fo;
var gh = Rs.exports, Ws = { exports: {} }, lt = {}, Ns = { exports: {} }, Us = {};
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
  function t(Q, ne) {
    var re = Q.length;
    Q.push(ne);
    e: for (; 0 < re; ) {
      var ce = re - 1 >>> 1, I = Q[ce];
      if (0 < i(I, ne)) Q[ce] = ne, Q[re] = I, re = ce;
      else break e;
    }
  }
  function n(Q) {
    return Q.length === 0 ? null : Q[0];
  }
  function r(Q) {
    if (Q.length === 0) return null;
    var ne = Q[0], re = Q.pop();
    if (re !== ne) {
      Q[0] = re;
      e: for (var ce = 0, I = Q.length, H = I >>> 1; ce < H; ) {
        var C = 2 * (ce + 1) - 1, y = Q[C], v = C + 1, p = Q[v];
        if (0 > i(y, re)) v < I && 0 > i(p, y) ? (Q[ce] = p, Q[v] = re, ce = v) : (Q[ce] = y, Q[C] = re, ce = C);
        else if (v < I && 0 > i(p, re)) Q[ce] = p, Q[v] = re, ce = v;
        else break e;
      }
    }
    return ne;
  }
  function i(Q, ne) {
    var re = Q.sortIndex - ne.sortIndex;
    return re !== 0 ? re : Q.id - ne.id;
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
  var a = [], s = [], g = 1, k = null, m = 3, M = false, R = false, b = false, ee = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S(Q) {
    for (var ne = n(s); ne !== null; ) {
      if (ne.callback === null) r(s);
      else if (ne.startTime <= Q) r(s), ne.sortIndex = ne.expirationTime, t(a, ne);
      else break;
      ne = n(s);
    }
  }
  function W(Q) {
    if (b = false, S(Q), !R) if (n(a) !== null) R = true, ht(N);
    else {
      var ne = n(s);
      ne !== null && Ke(W, ne.startTime - Q);
    }
  }
  function N(Q, ne) {
    R = false, b && (b = false, w(f), f = -1), M = true;
    var re = m;
    try {
      for (S(ne), k = n(a); k !== null && (!(k.expirationTime > ne) || Q && !te()); ) {
        var ce = k.callback;
        if (typeof ce == "function") {
          k.callback = null, m = k.priorityLevel;
          var I = ce(k.expirationTime <= ne);
          ne = e.unstable_now(), typeof I == "function" ? k.callback = I : k === n(a) && r(a), S(ne);
        } else r(a);
        k = n(a);
      }
      if (k !== null) var H = true;
      else {
        var C = n(s);
        C !== null && Ke(W, C.startTime - ne), H = false;
      }
      return H;
    } finally {
      k = null, m = re, M = false;
    }
  }
  var L = false, D = null, f = -1, U = 5, B = -1;
  function te() {
    return !(e.unstable_now() - B < U);
  }
  function ue() {
    if (D !== null) {
      var Q = e.unstable_now();
      B = Q;
      var ne = true;
      try {
        ne = D(true, Q);
      } finally {
        ne ? se() : (L = false, D = null);
      }
    } else L = false;
  }
  var se;
  if (typeof h == "function") se = function() {
    h(ue);
  };
  else if (typeof MessageChannel < "u") {
    var $e = new MessageChannel(), he = $e.port2;
    $e.port1.onmessage = ue, se = function() {
      he.postMessage(null);
    };
  } else se = function() {
    ee(ue, 0);
  };
  function ht(Q) {
    D = Q, L || (L = true, se());
  }
  function Ke(Q, ne) {
    f = ee(function() {
      Q(e.unstable_now());
    }, ne);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(Q) {
    Q.callback = null;
  }, e.unstable_continueExecution = function() {
    R || M || (R = true, ht(N));
  }, e.unstable_forceFrameRate = function(Q) {
    0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < Q ? Math.floor(1e3 / Q) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(Q) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var ne = 3;
        break;
      default:
        ne = m;
    }
    var re = m;
    m = ne;
    try {
      return Q();
    } finally {
      m = re;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(Q, ne) {
    switch (Q) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        Q = 3;
    }
    var re = m;
    m = Q;
    try {
      return ne();
    } finally {
      m = re;
    }
  }, e.unstable_scheduleCallback = function(Q, ne, re) {
    var ce = e.unstable_now();
    switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? ce + re : ce) : re = ce, Q) {
      case 1:
        var I = -1;
        break;
      case 2:
        I = 250;
        break;
      case 5:
        I = 1073741823;
        break;
      case 4:
        I = 1e4;
        break;
      default:
        I = 5e3;
    }
    return I = re + I, Q = { id: g++, callback: ne, priorityLevel: Q, startTime: re, expirationTime: I, sortIndex: -1 }, re > ce ? (Q.sortIndex = re, t(s, Q), n(a) === null && Q === n(s) && (b ? (w(f), f = -1) : b = true, Ke(W, re - ce))) : (Q.sortIndex = I, t(a, Q), R || M || (R = true, ht(N))), Q;
  }, e.unstable_shouldYield = te, e.unstable_wrapCallback = function(Q) {
    var ne = m;
    return function() {
      var re = m;
      m = ne;
      try {
        return Q.apply(this, arguments);
      } finally {
        m = re;
      }
    };
  };
})(Us);
Ns.exports = Us;
var wd = Ns.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Fs = po, ot = wd;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var zs = /* @__PURE__ */ new Set(), Nr = {};
function Pn(e, t) {
  Xn(e, t), Xn(e + "Capture", t);
}
function Xn(e, t) {
  for (Nr[e] = t, e = 0; e < t.length; e++) zs.add(t[e]);
}
var It = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), cl = Object.prototype.hasOwnProperty, Sd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ua = {}, aa = {};
function Ed(e) {
  return cl.call(aa, e) ? true : cl.call(ua, e) ? false : Sd.test(e) ? aa[e] = true : (ua[e] = true, false);
}
function kd(e, t, n, r) {
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
function _d(e, t, n, r) {
  if (t === null || typeof t > "u" || kd(e, t, n, r)) return true;
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
function Ge(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  We[e] = new Ge(e, 0, false, e, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  We[t] = new Ge(t, 1, false, e[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  We[e] = new Ge(e, 2, false, e.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  We[e] = new Ge(e, 2, false, e, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  We[e] = new Ge(e, 3, false, e.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  We[e] = new Ge(e, 3, true, e, null, false, false);
});
["capture", "download"].forEach(function(e) {
  We[e] = new Ge(e, 4, false, e, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  We[e] = new Ge(e, 6, false, e, null, false, false);
});
["rowSpan", "start"].forEach(function(e) {
  We[e] = new Ge(e, 5, false, e.toLowerCase(), null, false, false);
});
var su = /[\-:]([a-z])/g;
function cu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(su, cu);
  We[t] = new Ge(t, 1, false, e, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(su, cu);
  We[t] = new Ge(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(su, cu);
  We[t] = new Ge(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  We[e] = new Ge(e, 1, false, e.toLowerCase(), null, false, false);
});
We.xlinkHref = new Ge("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e) {
  We[e] = new Ge(e, 1, false, e.toLowerCase(), null, true, true);
});
function fu(e, t, n, r) {
  var i = We.hasOwnProperty(t) ? We[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_d(t, n, i, r) && (n = null), r || i === null ? Ed(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? false : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = Fs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, di = Symbol.for("react.element"), Mn = Symbol.for("react.portal"), Ln = Symbol.for("react.fragment"), du = Symbol.for("react.strict_mode"), fl = Symbol.for("react.profiler"), xs = Symbol.for("react.provider"), Vs = Symbol.for("react.context"), pu = Symbol.for("react.forward_ref"), dl = Symbol.for("react.suspense"), pl = Symbol.for("react.suspense_list"), vu = Symbol.for("react.memo"), Bt = Symbol.for("react.lazy"), Bs = Symbol.for("react.offscreen"), sa = Symbol.iterator;
function cr(e) {
  return e === null || typeof e != "object" ? null : (e = sa && e[sa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ce = Object.assign, Uo;
function _r(e) {
  if (Uo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Uo = t && t[1] || "";
  }
  return `
` + Uo + e;
}
var Fo = false;
function zo(e, t) {
  if (!e || Fo) return "";
  Fo = true;
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
      } catch (s) {
        var r = s;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (s) {
        r = s;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (var i = s.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, u = o.length - 1; 1 <= l && 0 <= u && i[l] !== o[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (i[l] !== o[u]) {
        if (l !== 1 || u !== 1) do
          if (l--, u--, 0 > u || i[l] !== o[u]) {
            var a = `
` + i[l].replace(" at new ", " at ");
            return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
          }
        while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    Fo = false, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? _r(e) : "";
}
function Cd(e) {
  switch (e.tag) {
    case 5:
      return _r(e.type);
    case 16:
      return _r("Lazy");
    case 13:
      return _r("Suspense");
    case 19:
      return _r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = zo(e.type, false), e;
    case 11:
      return e = zo(e.type.render, false), e;
    case 1:
      return e = zo(e.type, true), e;
    default:
      return "";
  }
}
function vl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ln:
      return "Fragment";
    case Mn:
      return "Portal";
    case fl:
      return "Profiler";
    case du:
      return "StrictMode";
    case dl:
      return "Suspense";
    case pl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Vs:
      return (e.displayName || "Context") + ".Consumer";
    case xs:
      return (e._context.displayName || "Context") + ".Provider";
    case pu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case vu:
      return t = e.displayName || null, t !== null ? t : vl(e.type) || "Memo";
    case Bt:
      t = e._payload, e = e._init;
      try {
        return vl(e(t));
      } catch {
      }
  }
  return null;
}
function Pd(e) {
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
      return vl(t);
    case 8:
      return t === du ? "StrictMode" : "Mode";
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
function rn(e) {
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
function Hs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Rd(e) {
  var t = Hs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function pi(e) {
  e._valueTracker || (e._valueTracker = Rd(e));
}
function Qs(e) {
  if (!e) return false;
  var t = e._valueTracker;
  if (!t) return true;
  var n = t.getValue(), r = "";
  return e && (r = Hs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
}
function xi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hl(e, t) {
  var n = t.checked;
  return Ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ca(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = rn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Gs(e, t) {
  t = t.checked, t != null && fu(e, "checked", t, false);
}
function ml(e, t) {
  Gs(e, t);
  var n = rn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? yl(e, t.type, n) : t.hasOwnProperty("defaultValue") && yl(e, t.type, rn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function fa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function yl(e, t, n) {
  (t !== "number" || xi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Cr = Array.isArray;
function Bn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = true;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = true);
  } else {
    for (n = "" + rn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = true, r && (e[i].defaultSelected = true);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = true);
  }
}
function gl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return Ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function da(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(V(92));
      if (Cr(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: rn(n) };
}
function $s(e, t) {
  var n = rn(t.value), r = rn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function pa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ks(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ks(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var vi, Ys = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (vi = vi || document.createElement("div"), vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tr = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Od = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tr).forEach(function(e) {
  Od.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Tr[t] = Tr[e];
  });
});
function Xs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tr.hasOwnProperty(e) && Tr[e] ? ("" + t).trim() : t + "px";
}
function Zs(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Xs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Td = Ce({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function Sl(e, t) {
  if (t) {
    if (Td[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function El(e, t) {
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
var kl = null;
function hu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var _l = null, Hn = null, Qn = null;
function va(e) {
  if (e = oi(e)) {
    if (typeof _l != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = go(t), _l(e.stateNode, e.type, t));
  }
}
function Js(e) {
  Hn ? Qn ? Qn.push(e) : Qn = [e] : Hn = e;
}
function qs() {
  if (Hn) {
    var e = Hn, t = Qn;
    if (Qn = Hn = null, va(e), t) for (e = 0; e < t.length; e++) va(t[e]);
  }
}
function ec(e, t) {
  return e(t);
}
function tc() {
}
var xo = false;
function nc(e, t, n) {
  if (xo) return e(t, n);
  xo = true;
  try {
    return ec(e, t, n);
  } finally {
    xo = false, (Hn !== null || Qn !== null) && (tc(), qs());
  }
}
function Fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = go(n);
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
var Cl = false;
if (It) try {
  var fr = {};
  Object.defineProperty(fr, "passive", { get: function() {
    Cl = true;
  } }), window.addEventListener("test", fr, fr), window.removeEventListener("test", fr, fr);
} catch {
  Cl = false;
}
function Dd(e, t, n, r, i, o, l, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (g) {
    this.onError(g);
  }
}
var Dr = false, Vi = null, Bi = false, Pl = null, Ad = { onError: function(e) {
  Dr = true, Vi = e;
} };
function Md(e, t, n, r, i, o, l, u, a) {
  Dr = false, Vi = null, Dd.apply(Ad, arguments);
}
function Ld(e, t, n, r, i, o, l, u, a) {
  if (Md.apply(this, arguments), Dr) {
    if (Dr) {
      var s = Vi;
      Dr = false, Vi = null;
    } else throw Error(V(198));
    Bi || (Bi = true, Pl = s);
  }
}
function Rn(e) {
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
function rc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ha(e) {
  if (Rn(e) !== e) throw Error(V(188));
}
function bd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Rn(e), t === null) throw Error(V(188));
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
        if (o === n) return ha(i), e;
        if (o === r) return ha(i), t;
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
function ic(e) {
  return e = bd(e), e !== null ? oc(e) : null;
}
function oc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = oc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var lc = ot.unstable_scheduleCallback, ma = ot.unstable_cancelCallback, jd = ot.unstable_shouldYield, Id = ot.unstable_requestPaint, Re = ot.unstable_now, Wd = ot.unstable_getCurrentPriorityLevel, mu = ot.unstable_ImmediatePriority, uc = ot.unstable_UserBlockingPriority, Hi = ot.unstable_NormalPriority, Nd = ot.unstable_LowPriority, ac = ot.unstable_IdlePriority, vo = null, Rt = null;
function Ud(e) {
  if (Rt && typeof Rt.onCommitFiberRoot == "function") try {
    Rt.onCommitFiberRoot(vo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var St = Math.clz32 ? Math.clz32 : xd, Fd = Math.log, zd = Math.LN2;
function xd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Fd(e) / zd | 0) | 0;
}
var hi = 64, mi = 4194304;
function Pr(e) {
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
function Qi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~i;
    u !== 0 ? r = Pr(u) : (o &= l, o !== 0 && (r = Pr(o)));
  } else l = n & ~i, l !== 0 ? r = Pr(l) : o !== 0 && (r = Pr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - St(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Vd(e, t) {
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
function Bd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - St(o), u = 1 << l, a = i[l];
    a === -1 ? (!(u & n) || u & r) && (i[l] = Vd(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Rl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function sc() {
  var e = hi;
  return hi <<= 1, !(hi & 4194240) && (hi = 64), e;
}
function Vo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ri(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
}
function Hd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - St(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function yu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var fe = 0;
function cc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var fc, gu, dc, pc, vc, Ol = false, yi = [], Yt = null, Xt = null, Zt = null, zr = /* @__PURE__ */ new Map(), xr = /* @__PURE__ */ new Map(), Qt = [], Qd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ya(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yt = null;
      break;
    case "dragenter":
    case "dragleave":
      Xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Zt = null;
      break;
    case "pointerover":
    case "pointerout":
      zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      xr.delete(t.pointerId);
  }
}
function dr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = oi(t), t !== null && gu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Gd(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Yt = dr(Yt, e, t, n, r, i), true;
    case "dragenter":
      return Xt = dr(Xt, e, t, n, r, i), true;
    case "mouseover":
      return Zt = dr(Zt, e, t, n, r, i), true;
    case "pointerover":
      var o = i.pointerId;
      return zr.set(o, dr(zr.get(o) || null, e, t, n, r, i)), true;
    case "gotpointercapture":
      return o = i.pointerId, xr.set(o, dr(xr.get(o) || null, e, t, n, r, i)), true;
  }
  return false;
}
function hc(e) {
  var t = hn(e.target);
  if (t !== null) {
    var n = Rn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = rc(n), t !== null) {
          e.blockedOn = t, vc(e.priority, function() {
            dc(n);
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
function Ai(e) {
  if (e.blockedOn !== null) return false;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Tl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      kl = r, n.target.dispatchEvent(r), kl = null;
    } else return t = oi(n), t !== null && gu(t), e.blockedOn = n, false;
    t.shift();
  }
  return true;
}
function ga(e, t, n) {
  Ai(e) && n.delete(t);
}
function $d() {
  Ol = false, Yt !== null && Ai(Yt) && (Yt = null), Xt !== null && Ai(Xt) && (Xt = null), Zt !== null && Ai(Zt) && (Zt = null), zr.forEach(ga), xr.forEach(ga);
}
function pr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ol || (Ol = true, ot.unstable_scheduleCallback(ot.unstable_NormalPriority, $d)));
}
function Vr(e) {
  function t(i) {
    return pr(i, e);
  }
  if (0 < yi.length) {
    pr(yi[0], e);
    for (var n = 1; n < yi.length; n++) {
      var r = yi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Yt !== null && pr(Yt, e), Xt !== null && pr(Xt, e), Zt !== null && pr(Zt, e), zr.forEach(t), xr.forEach(t), n = 0; n < Qt.length; n++) r = Qt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qt.length && (n = Qt[0], n.blockedOn === null); ) hc(n), n.blockedOn === null && Qt.shift();
}
var Gn = Ft.ReactCurrentBatchConfig, Gi = true;
function Kd(e, t, n, r) {
  var i = fe, o = Gn.transition;
  Gn.transition = null;
  try {
    fe = 1, wu(e, t, n, r);
  } finally {
    fe = i, Gn.transition = o;
  }
}
function Yd(e, t, n, r) {
  var i = fe, o = Gn.transition;
  Gn.transition = null;
  try {
    fe = 4, wu(e, t, n, r);
  } finally {
    fe = i, Gn.transition = o;
  }
}
function wu(e, t, n, r) {
  if (Gi) {
    var i = Tl(e, t, n, r);
    if (i === null) Jo(e, t, r, $i, n), ya(e, r);
    else if (Gd(i, e, t, n, r)) r.stopPropagation();
    else if (ya(e, r), t & 4 && -1 < Qd.indexOf(e)) {
      for (; i !== null; ) {
        var o = oi(i);
        if (o !== null && fc(o), o = Tl(e, t, n, r), o === null && Jo(e, t, r, $i, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Jo(e, t, r, null, n);
  }
}
var $i = null;
function Tl(e, t, n, r) {
  if ($i = null, e = hu(r), e = hn(e), e !== null) if (t = Rn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = rc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return $i = e, null;
}
function mc(e) {
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
      switch (Wd()) {
        case mu:
          return 1;
        case uc:
          return 4;
        case Hi:
        case Nd:
          return 16;
        case ac:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null, Su = null, Mi = null;
function yc() {
  if (Mi) return Mi;
  var e, t = Su, n = t.length, r, i = "value" in $t ? $t.value : $t.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++) ;
  return Mi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Li(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function gi() {
  return true;
}
function wa() {
  return false;
}
function ut(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? gi : wa, this.isPropagationStopped = wa, this;
  }
  return Ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = gi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = gi);
  }, persist: function() {
  }, isPersistent: gi }), t;
}
var ir = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Eu = ut(ir), ii = Ce({}, ir, { view: 0, detail: 0 }), Xd = ut(ii), Bo, Ho, vr, ho = Ce({}, ii, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ku, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== vr && (vr && e.type === "mousemove" ? (Bo = e.screenX - vr.screenX, Ho = e.screenY - vr.screenY) : Ho = Bo = 0, vr = e), Bo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ho;
} }), Sa = ut(ho), Zd = Ce({}, ho, { dataTransfer: 0 }), Jd = ut(Zd), qd = Ce({}, ii, { relatedTarget: 0 }), Qo = ut(qd), ep = Ce({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), tp = ut(ep), np = Ce({}, ir, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), rp = ut(np), ip = Ce({}, ir, { data: 0 }), Ea = ut(ip), op = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, lp = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, up = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ap(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = up[e]) ? !!t[e] : false;
}
function ku() {
  return ap;
}
var sp = Ce({}, ii, { key: function(e) {
  if (e.key) {
    var t = op[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Li(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ku, charCode: function(e) {
  return e.type === "keypress" ? Li(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Li(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), cp = ut(sp), fp = Ce({}, ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ka = ut(fp), dp = Ce({}, ii, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ku }), pp = ut(dp), vp = Ce({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hp = ut(vp), mp = Ce({}, ho, { deltaX: function(e) {
  return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
}, deltaY: function(e) {
  return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), yp = ut(mp), gp = [9, 13, 27, 32], _u = It && "CompositionEvent" in window, Ar = null;
It && "documentMode" in document && (Ar = document.documentMode);
var wp = It && "TextEvent" in window && !Ar, gc = It && (!_u || Ar && 8 < Ar && 11 >= Ar), _a = " ", Ca = false;
function wc(e, t) {
  switch (e) {
    case "keyup":
      return gp.indexOf(t.keyCode) !== -1;
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
function Sc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var bn = false;
function Sp(e, t) {
  switch (e) {
    case "compositionend":
      return Sc(t);
    case "keypress":
      return t.which !== 32 ? null : (Ca = true, _a);
    case "textInput":
      return e = t.data, e === _a && Ca ? null : e;
    default:
      return null;
  }
}
function Ep(e, t) {
  if (bn) return e === "compositionend" || !_u && wc(e, t) ? (e = yc(), Mi = Su = $t = null, bn = false, e) : null;
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
      return gc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kp = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function Pa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kp[e.type] : t === "textarea";
}
function Ec(e, t, n, r) {
  Js(r), t = Ki(t, "onChange"), 0 < t.length && (n = new Eu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Mr = null, Br = null;
function _p(e) {
  Lc(e, 0);
}
function mo(e) {
  var t = Wn(e);
  if (Qs(t)) return e;
}
function Cp(e, t) {
  if (e === "change") return t;
}
var kc = false;
if (It) {
  var Go;
  if (It) {
    var $o = "oninput" in document;
    if (!$o) {
      var Ra = document.createElement("div");
      Ra.setAttribute("oninput", "return;"), $o = typeof Ra.oninput == "function";
    }
    Go = $o;
  } else Go = false;
  kc = Go && (!document.documentMode || 9 < document.documentMode);
}
function Oa() {
  Mr && (Mr.detachEvent("onpropertychange", _c), Br = Mr = null);
}
function _c(e) {
  if (e.propertyName === "value" && mo(Br)) {
    var t = [];
    Ec(t, Br, e, hu(e)), nc(_p, t);
  }
}
function Pp(e, t, n) {
  e === "focusin" ? (Oa(), Mr = t, Br = n, Mr.attachEvent("onpropertychange", _c)) : e === "focusout" && Oa();
}
function Rp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return mo(Br);
}
function Op(e, t) {
  if (e === "click") return mo(t);
}
function Tp(e, t) {
  if (e === "input" || e === "change") return mo(t);
}
function Dp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var kt = typeof Object.is == "function" ? Object.is : Dp;
function Hr(e, t) {
  if (kt(e, t)) return true;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!cl.call(t, i) || !kt(e[i], t[i])) return false;
  }
  return true;
}
function Ta(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Da(e, t) {
  var n = Ta(e);
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
    n = Ta(n);
  }
}
function Cc(e, t) {
  return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Cc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
}
function Pc() {
  for (var e = window, t = xi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = false;
    }
    if (n) e = t.contentWindow;
    else break;
    t = xi(e.document);
  }
  return t;
}
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ap(e) {
  var t = Pc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Cc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Cu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Da(n, o);
        var l = Da(n, r);
        i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Mp = It && "documentMode" in document && 11 >= document.documentMode, jn = null, Dl = null, Lr = null, Al = false;
function Aa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Al || jn == null || jn !== xi(r) || (r = jn, "selectionStart" in r && Cu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Lr && Hr(Lr, r) || (Lr = r, r = Ki(Dl, "onSelect"), 0 < r.length && (t = new Eu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = jn)));
}
function wi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var In = { animationend: wi("Animation", "AnimationEnd"), animationiteration: wi("Animation", "AnimationIteration"), animationstart: wi("Animation", "AnimationStart"), transitionend: wi("Transition", "TransitionEnd") }, Ko = {}, Rc = {};
It && (Rc = document.createElement("div").style, "AnimationEvent" in window || (delete In.animationend.animation, delete In.animationiteration.animation, delete In.animationstart.animation), "TransitionEvent" in window || delete In.transitionend.transition);
function yo(e) {
  if (Ko[e]) return Ko[e];
  if (!In[e]) return e;
  var t = In[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rc) return Ko[e] = t[n];
  return e;
}
var Oc = yo("animationend"), Tc = yo("animationiteration"), Dc = yo("animationstart"), Ac = yo("transitionend"), Mc = /* @__PURE__ */ new Map(), Ma = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function un(e, t) {
  Mc.set(e, t), Pn(t, [e]);
}
for (var Yo = 0; Yo < Ma.length; Yo++) {
  var Xo = Ma[Yo], Lp = Xo.toLowerCase(), bp = Xo[0].toUpperCase() + Xo.slice(1);
  un(Lp, "on" + bp);
}
un(Oc, "onAnimationEnd");
un(Tc, "onAnimationIteration");
un(Dc, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(Ac, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
Pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
function La(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ld(r, t, void 0, e), e.currentTarget = null;
}
function Lc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], a = u.instance, s = u.currentTarget;
        if (u = u.listener, a !== o && i.isPropagationStopped()) break e;
        La(i, u, s), o = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], a = u.instance, s = u.currentTarget, u = u.listener, a !== o && i.isPropagationStopped()) break e;
        La(i, u, s), o = a;
      }
    }
  }
  if (Bi) throw e = Pl, Bi = false, Pl = null, e;
}
function me(e, t) {
  var n = t[Il];
  n === void 0 && (n = t[Il] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (bc(t, e, 2, false), n.add(r));
}
function Zo(e, t, n) {
  var r = 0;
  t && (r |= 4), bc(n, e, r, t);
}
var Si = "_reactListening" + Math.random().toString(36).slice(2);
function Qr(e) {
  if (!e[Si]) {
    e[Si] = true, zs.forEach(function(n) {
      n !== "selectionchange" && (jp.has(n) || Zo(n, false, e), Zo(n, true, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Si] || (t[Si] = true, Zo("selectionchange", false, t));
  }
}
function bc(e, t, n, r) {
  switch (mc(t)) {
    case 1:
      var i = Kd;
      break;
    case 4:
      i = Yd;
      break;
    default:
      i = wu;
  }
  n = i.bind(null, t, n, e), i = void 0, !Cl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = true), r ? i !== void 0 ? e.addEventListener(t, n, { capture: true, passive: i }) : e.addEventListener(t, n, true) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, false);
}
function Jo(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var u = r.stateNode.containerInfo;
      if (u === i || u.nodeType === 8 && u.parentNode === i) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var a = l.tag;
        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
        l = l.return;
      }
      for (; u !== null; ) {
        if (l = hn(u), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = o = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  nc(function() {
    var s = o, g = hu(n), k = [];
    e: {
      var m = Mc.get(e);
      if (m !== void 0) {
        var M = Eu, R = e;
        switch (e) {
          case "keypress":
            if (Li(n) === 0) break e;
          case "keydown":
          case "keyup":
            M = cp;
            break;
          case "focusin":
            R = "focus", M = Qo;
            break;
          case "focusout":
            R = "blur", M = Qo;
            break;
          case "beforeblur":
          case "afterblur":
            M = Qo;
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
            M = Sa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            M = Jd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            M = pp;
            break;
          case Oc:
          case Tc:
          case Dc:
            M = tp;
            break;
          case Ac:
            M = hp;
            break;
          case "scroll":
            M = Xd;
            break;
          case "wheel":
            M = yp;
            break;
          case "copy":
          case "cut":
          case "paste":
            M = rp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            M = ka;
        }
        var b = (t & 4) !== 0, ee = !b && e === "scroll", w = b ? m !== null ? m + "Capture" : null : m;
        b = [];
        for (var h = s, S; h !== null; ) {
          S = h;
          var W = S.stateNode;
          if (S.tag === 5 && W !== null && (S = W, w !== null && (W = Fr(h, w), W != null && b.push(Gr(h, W, S)))), ee) break;
          h = h.return;
        }
        0 < b.length && (m = new M(m, R, null, n, g), k.push({ event: m, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", m && n !== kl && (R = n.relatedTarget || n.fromElement) && (hn(R) || R[Wt])) break e;
        if ((M || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window, M ? (R = n.relatedTarget || n.toElement, M = s, R = R ? hn(R) : null, R !== null && (ee = Rn(R), R !== ee || R.tag !== 5 && R.tag !== 6) && (R = null)) : (M = null, R = s), M !== R)) {
          if (b = Sa, W = "onMouseLeave", w = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (b = ka, W = "onPointerLeave", w = "onPointerEnter", h = "pointer"), ee = M == null ? m : Wn(M), S = R == null ? m : Wn(R), m = new b(W, h + "leave", M, n, g), m.target = ee, m.relatedTarget = S, W = null, hn(g) === s && (b = new b(w, h + "enter", R, n, g), b.target = S, b.relatedTarget = ee, W = b), ee = W, M && R) t: {
            for (b = M, w = R, h = 0, S = b; S; S = An(S)) h++;
            for (S = 0, W = w; W; W = An(W)) S++;
            for (; 0 < h - S; ) b = An(b), h--;
            for (; 0 < S - h; ) w = An(w), S--;
            for (; h--; ) {
              if (b === w || w !== null && b === w.alternate) break t;
              b = An(b), w = An(w);
            }
            b = null;
          }
          else b = null;
          M !== null && ba(k, m, M, b, false), R !== null && ee !== null && ba(k, ee, R, b, true);
        }
      }
      e: {
        if (m = s ? Wn(s) : window, M = m.nodeName && m.nodeName.toLowerCase(), M === "select" || M === "input" && m.type === "file") var N = Cp;
        else if (Pa(m)) if (kc) N = Tp;
        else {
          N = Rp;
          var L = Pp;
        }
        else (M = m.nodeName) && M.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = Op);
        if (N && (N = N(e, s))) {
          Ec(k, N, n, g);
          break e;
        }
        L && L(e, m, s), e === "focusout" && (L = m._wrapperState) && L.controlled && m.type === "number" && yl(m, "number", m.value);
      }
      switch (L = s ? Wn(s) : window, e) {
        case "focusin":
          (Pa(L) || L.contentEditable === "true") && (jn = L, Dl = s, Lr = null);
          break;
        case "focusout":
          Lr = Dl = jn = null;
          break;
        case "mousedown":
          Al = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Al = false, Aa(k, n, g);
          break;
        case "selectionchange":
          if (Mp) break;
        case "keydown":
        case "keyup":
          Aa(k, n, g);
      }
      var D;
      if (_u) e: {
        switch (e) {
          case "compositionstart":
            var f = "onCompositionStart";
            break e;
          case "compositionend":
            f = "onCompositionEnd";
            break e;
          case "compositionupdate":
            f = "onCompositionUpdate";
            break e;
        }
        f = void 0;
      }
      else bn ? wc(e, n) && (f = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (f = "onCompositionStart");
      f && (gc && n.locale !== "ko" && (bn || f !== "onCompositionStart" ? f === "onCompositionEnd" && bn && (D = yc()) : ($t = g, Su = "value" in $t ? $t.value : $t.textContent, bn = true)), L = Ki(s, f), 0 < L.length && (f = new Ea(f, e, null, n, g), k.push({ event: f, listeners: L }), D ? f.data = D : (D = Sc(n), D !== null && (f.data = D)))), (D = wp ? Sp(e, n) : Ep(e, n)) && (s = Ki(s, "onBeforeInput"), 0 < s.length && (g = new Ea("onBeforeInput", "beforeinput", null, n, g), k.push({ event: g, listeners: s }), g.data = D));
    }
    Lc(k, t);
  });
}
function Gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ki(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Fr(e, n), o != null && r.unshift(Gr(e, o, i)), o = Fr(e, t), o != null && r.push(Gr(e, o, i))), e = e.return;
  }
  return r;
}
function An(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ba(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && s !== null && (u = s, i ? (a = Fr(n, o), a != null && l.unshift(Gr(n, a, u))) : i || (a = Fr(n, o), a != null && l.push(Gr(n, a, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Ip = /\r\n?/g, Wp = /\u0000|\uFFFD/g;
function ja(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ip, `
`).replace(Wp, "");
}
function Ei(e, t, n) {
  if (t = ja(t), ja(e) !== t && n) throw Error(V(425));
}
function Yi() {
}
var Ml = null, Ll = null;
function bl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var jl = typeof setTimeout == "function" ? setTimeout : void 0, Np = typeof clearTimeout == "function" ? clearTimeout : void 0, Ia = typeof Promise == "function" ? Promise : void 0, Up = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ia < "u" ? function(e) {
  return Ia.resolve(null).then(e).catch(Fp);
} : jl;
function Fp(e) {
  setTimeout(function() {
    throw e;
  });
}
function qo(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Vr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Vr(t);
}
function Jt(e) {
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
function Wa(e) {
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
var or = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + or, $r = "__reactProps$" + or, Wt = "__reactContainer$" + or, Il = "__reactEvents$" + or, zp = "__reactListeners$" + or, xp = "__reactHandles$" + or;
function hn(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Wt] || n[Pt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Wa(e); e !== null; ) {
        if (n = e[Pt]) return n;
        e = Wa(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function oi(e) {
  return e = e[Pt] || e[Wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function go(e) {
  return e[$r] || null;
}
var Wl = [], Nn = -1;
function an(e) {
  return { current: e };
}
function ye(e) {
  0 > Nn || (e.current = Wl[Nn], Wl[Nn] = null, Nn--);
}
function ve(e, t) {
  Nn++, Wl[Nn] = e.current, e.current = t;
}
var on = {}, xe = an(on), Ze = an(false), Sn = on;
function Zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function Xi() {
  ye(Ze), ye(xe);
}
function Na(e, t, n) {
  if (xe.current !== on) throw Error(V(168));
  ve(xe, t), ve(Ze, n);
}
function jc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(V(108, Pd(e) || "Unknown", i));
  return Ce({}, n, r);
}
function Zi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, Sn = xe.current, ve(xe, e), ve(Ze, Ze.current), true;
}
function Ua(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = jc(e, t, Sn), r.__reactInternalMemoizedMergedChildContext = e, ye(Ze), ye(xe), ve(xe, e)) : ye(Ze), ve(Ze, n);
}
var Mt = null, wo = false, el = false;
function Ic(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function Vp(e) {
  wo = true, Ic(e);
}
function sn() {
  if (!el && Mt !== null) {
    el = true;
    var e = 0, t = fe;
    try {
      var n = Mt;
      for (fe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(true);
        while (r !== null);
      }
      Mt = null, wo = false;
    } catch (i) {
      throw Mt !== null && (Mt = Mt.slice(e + 1)), lc(mu, sn), i;
    } finally {
      fe = t, el = false;
    }
  }
  return null;
}
var Un = [], Fn = 0, Ji = null, qi = 0, at = [], st = 0, En = null, Lt = 1, bt = "";
function pn(e, t) {
  Un[Fn++] = qi, Un[Fn++] = Ji, Ji = e, qi = t;
}
function Wc(e, t, n) {
  at[st++] = Lt, at[st++] = bt, at[st++] = En, En = e;
  var r = Lt;
  e = bt;
  var i = 32 - St(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - St(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, Lt = 1 << 32 - St(t) + i | n << i | r, bt = o + e;
  } else Lt = 1 << o | n << i | r, bt = e;
}
function Pu(e) {
  e.return !== null && (pn(e, 1), Wc(e, 1, 0));
}
function Ru(e) {
  for (; e === Ji; ) Ji = Un[--Fn], Un[Fn] = null, qi = Un[--Fn], Un[Fn] = null;
  for (; e === En; ) En = at[--st], at[st] = null, bt = at[--st], at[st] = null, Lt = at[--st], at[st] = null;
}
var it = null, rt = null, we = false, wt = null;
function Nc(e, t) {
  var n = ct(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Fa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, it = e, rt = Jt(t.firstChild), true) : false;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, it = e, rt = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = En !== null ? { id: Lt, overflow: bt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ct(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, it = e, rt = null, true) : false;
    default:
      return false;
  }
}
function Nl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ul(e) {
  if (we) {
    var t = rt;
    if (t) {
      var n = t;
      if (!Fa(e, t)) {
        if (Nl(e)) throw Error(V(418));
        t = Jt(n.nextSibling);
        var r = it;
        t && Fa(e, t) ? Nc(r, n) : (e.flags = e.flags & -4097 | 2, we = false, it = e);
      }
    } else {
      if (Nl(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, we = false, it = e;
    }
  }
}
function za(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  it = e;
}
function ki(e) {
  if (e !== it) return false;
  if (!we) return za(e), we = true, false;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bl(e.type, e.memoizedProps)), t && (t = rt)) {
    if (Nl(e)) throw Uc(), Error(V(418));
    for (; t; ) Nc(e, t), t = Jt(t.nextSibling);
  }
  if (za(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = it ? Jt(e.stateNode.nextSibling) : null;
  return true;
}
function Uc() {
  for (var e = rt; e; ) e = Jt(e.nextSibling);
}
function Jn() {
  rt = it = null, we = false;
}
function Ou(e) {
  wt === null ? wt = [e] : wt.push(e);
}
var Bp = Ft.ReactCurrentBatchConfig;
function yt(e, t) {
  if (e && e.defaultProps) {
    t = Ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var eo = an(null), to = null, zn = null, Tu = null;
function Du() {
  Tu = zn = to = null;
}
function Au(e) {
  var t = eo.current;
  ye(eo), e._currentValue = t;
}
function Fl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function $n(e, t) {
  to = e, Tu = zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Xe = true), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (Tu !== e) if (e = { context: e, memoizedValue: t, next: null }, zn === null) {
    if (to === null) throw Error(V(308));
    zn = e, to.dependencies = { lanes: 0, firstContext: e };
  } else zn = zn.next = e;
  return t;
}
var mn = null;
function Mu(e) {
  mn === null ? mn = [e] : mn.push(e);
}
function Fc(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Mu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Nt(e, r);
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = false;
function Lu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function zc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ae & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Nt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Mu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Nt(e, n);
}
function bi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yu(e, n);
  }
}
function xa(e, t) {
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
function no(e, t, n, r) {
  var i = e.updateQueue;
  Ht = false;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, l === null ? o = s : l.next = s, l = a;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== l && (u === null ? g.firstBaseUpdate = s : u.next = s, g.lastBaseUpdate = a));
  }
  if (o !== null) {
    var k = i.baseState;
    l = 0, g = s = a = null, u = o;
    do {
      var m = u.lane, M = u.eventTime;
      if ((r & m) === m) {
        g !== null && (g = g.next = { eventTime: M, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
        e: {
          var R = e, b = u;
          switch (m = t, M = n, b.tag) {
            case 1:
              if (R = b.payload, typeof R == "function") {
                k = R.call(M, k, m);
                break e;
              }
              k = R;
              break e;
            case 3:
              R.flags = R.flags & -65537 | 128;
            case 0:
              if (R = b.payload, m = typeof R == "function" ? R.call(M, k, m) : R, m == null) break e;
              k = Ce({}, k, m);
              break e;
            case 2:
              Ht = true;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = i.effects, m === null ? i.effects = [u] : m.push(u));
      } else M = { eventTime: M, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, g === null ? (s = g = M, a = k) : g = g.next = M, l |= m;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null;
      }
    } while (true);
    if (g === null && (a = k), i.baseState = a, i.firstBaseUpdate = s, i.lastBaseUpdate = g, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    _n |= l, e.lanes = l, e.memoizedState = k;
  }
}
function Va(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(V(191, i));
      i.call(r);
    }
  }
}
var xc = new Fs.Component().refs;
function zl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var So = { isMounted: function(e) {
  return (e = e._reactInternals) ? Rn(e) === e : false;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), i = tn(e), o = jt(r, i);
  o.payload = t, n != null && (o.callback = n), t = qt(e, o, i), t !== null && (Et(t, e, i, r), bi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), i = tn(e), o = jt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = qt(e, o, i), t !== null && (Et(t, e, i, r), bi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = He(), r = tn(e), i = jt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = qt(e, i, r), t !== null && (Et(t, e, r, n), bi(t, e, r));
} };
function Ba(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !Hr(n, r) || !Hr(i, o) : true;
}
function Vc(e, t, n) {
  var r = false, i = on, o = t.contextType;
  return typeof o == "object" && o !== null ? o = pt(o) : (i = Je(t) ? Sn : xe.current, r = t.contextTypes, o = (r = r != null) ? Zn(e, i) : on), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = So, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Ha(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && So.enqueueReplaceState(t, t.state, null);
}
function xl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = xc, Lu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = pt(o) : (o = Je(t) ? Sn : xe.current, i.context = Zn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (zl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && So.enqueueReplaceState(i, i.state, null), no(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function hr(e, t, n) {
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
        u === xc && (u = i.refs = {}), l === null ? delete u[o] : u[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function _i(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Qa(e) {
  var t = e._init;
  return t(e._payload);
}
function Bc(e) {
  function t(w, h) {
    if (e) {
      var S = w.deletions;
      S === null ? (w.deletions = [h], w.flags |= 16) : S.push(h);
    }
  }
  function n(w, h) {
    if (!e) return null;
    for (; h !== null; ) t(w, h), h = h.sibling;
    return null;
  }
  function r(w, h) {
    for (w = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? w.set(h.key, h) : w.set(h.index, h), h = h.sibling;
    return w;
  }
  function i(w, h) {
    return w = nn(w, h), w.index = 0, w.sibling = null, w;
  }
  function o(w, h, S) {
    return w.index = S, e ? (S = w.alternate, S !== null ? (S = S.index, S < h ? (w.flags |= 2, h) : S) : (w.flags |= 2, h)) : (w.flags |= 1048576, h);
  }
  function l(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function u(w, h, S, W) {
    return h === null || h.tag !== 6 ? (h = ul(S, w.mode, W), h.return = w, h) : (h = i(h, S), h.return = w, h);
  }
  function a(w, h, S, W) {
    var N = S.type;
    return N === Ln ? g(w, h, S.props.children, W, S.key) : h !== null && (h.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Bt && Qa(N) === h.type) ? (W = i(h, S.props), W.ref = hr(w, h, S), W.return = w, W) : (W = Fi(S.type, S.key, S.props, null, w.mode, W), W.ref = hr(w, h, S), W.return = w, W);
  }
  function s(w, h, S, W) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== S.containerInfo || h.stateNode.implementation !== S.implementation ? (h = al(S, w.mode, W), h.return = w, h) : (h = i(h, S.children || []), h.return = w, h);
  }
  function g(w, h, S, W, N) {
    return h === null || h.tag !== 7 ? (h = wn(S, w.mode, W, N), h.return = w, h) : (h = i(h, S), h.return = w, h);
  }
  function k(w, h, S) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = ul("" + h, w.mode, S), h.return = w, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case di:
          return S = Fi(h.type, h.key, h.props, null, w.mode, S), S.ref = hr(w, null, h), S.return = w, S;
        case Mn:
          return h = al(h, w.mode, S), h.return = w, h;
        case Bt:
          var W = h._init;
          return k(w, W(h._payload), S);
      }
      if (Cr(h) || cr(h)) return h = wn(h, w.mode, S, null), h.return = w, h;
      _i(w, h);
    }
    return null;
  }
  function m(w, h, S, W) {
    var N = h !== null ? h.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return N !== null ? null : u(w, h, "" + S, W);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case di:
          return S.key === N ? a(w, h, S, W) : null;
        case Mn:
          return S.key === N ? s(w, h, S, W) : null;
        case Bt:
          return N = S._init, m(w, h, N(S._payload), W);
      }
      if (Cr(S) || cr(S)) return N !== null ? null : g(w, h, S, W, null);
      _i(w, S);
    }
    return null;
  }
  function M(w, h, S, W, N) {
    if (typeof W == "string" && W !== "" || typeof W == "number") return w = w.get(S) || null, u(h, w, "" + W, N);
    if (typeof W == "object" && W !== null) {
      switch (W.$$typeof) {
        case di:
          return w = w.get(W.key === null ? S : W.key) || null, a(h, w, W, N);
        case Mn:
          return w = w.get(W.key === null ? S : W.key) || null, s(h, w, W, N);
        case Bt:
          var L = W._init;
          return M(w, h, S, L(W._payload), N);
      }
      if (Cr(W) || cr(W)) return w = w.get(S) || null, g(h, w, W, N, null);
      _i(h, W);
    }
    return null;
  }
  function R(w, h, S, W) {
    for (var N = null, L = null, D = h, f = h = 0, U = null; D !== null && f < S.length; f++) {
      D.index > f ? (U = D, D = null) : U = D.sibling;
      var B = m(w, D, S[f], W);
      if (B === null) {
        D === null && (D = U);
        break;
      }
      e && D && B.alternate === null && t(w, D), h = o(B, h, f), L === null ? N = B : L.sibling = B, L = B, D = U;
    }
    if (f === S.length) return n(w, D), we && pn(w, f), N;
    if (D === null) {
      for (; f < S.length; f++) D = k(w, S[f], W), D !== null && (h = o(D, h, f), L === null ? N = D : L.sibling = D, L = D);
      return we && pn(w, f), N;
    }
    for (D = r(w, D); f < S.length; f++) U = M(D, w, f, S[f], W), U !== null && (e && U.alternate !== null && D.delete(U.key === null ? f : U.key), h = o(U, h, f), L === null ? N = U : L.sibling = U, L = U);
    return e && D.forEach(function(te) {
      return t(w, te);
    }), we && pn(w, f), N;
  }
  function b(w, h, S, W) {
    var N = cr(S);
    if (typeof N != "function") throw Error(V(150));
    if (S = N.call(S), S == null) throw Error(V(151));
    for (var L = N = null, D = h, f = h = 0, U = null, B = S.next(); D !== null && !B.done; f++, B = S.next()) {
      D.index > f ? (U = D, D = null) : U = D.sibling;
      var te = m(w, D, B.value, W);
      if (te === null) {
        D === null && (D = U);
        break;
      }
      e && D && te.alternate === null && t(w, D), h = o(te, h, f), L === null ? N = te : L.sibling = te, L = te, D = U;
    }
    if (B.done) return n(w, D), we && pn(w, f), N;
    if (D === null) {
      for (; !B.done; f++, B = S.next()) B = k(w, B.value, W), B !== null && (h = o(B, h, f), L === null ? N = B : L.sibling = B, L = B);
      return we && pn(w, f), N;
    }
    for (D = r(w, D); !B.done; f++, B = S.next()) B = M(D, w, f, B.value, W), B !== null && (e && B.alternate !== null && D.delete(B.key === null ? f : B.key), h = o(B, h, f), L === null ? N = B : L.sibling = B, L = B);
    return e && D.forEach(function(ue) {
      return t(w, ue);
    }), we && pn(w, f), N;
  }
  function ee(w, h, S, W) {
    if (typeof S == "object" && S !== null && S.type === Ln && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case di:
          e: {
            for (var N = S.key, L = h; L !== null; ) {
              if (L.key === N) {
                if (N = S.type, N === Ln) {
                  if (L.tag === 7) {
                    n(w, L.sibling), h = i(L, S.props.children), h.return = w, w = h;
                    break e;
                  }
                } else if (L.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Bt && Qa(N) === L.type) {
                  n(w, L.sibling), h = i(L, S.props), h.ref = hr(w, L, S), h.return = w, w = h;
                  break e;
                }
                n(w, L);
                break;
              } else t(w, L);
              L = L.sibling;
            }
            S.type === Ln ? (h = wn(S.props.children, w.mode, W, S.key), h.return = w, w = h) : (W = Fi(S.type, S.key, S.props, null, w.mode, W), W.ref = hr(w, h, S), W.return = w, w = W);
          }
          return l(w);
        case Mn:
          e: {
            for (L = S.key; h !== null; ) {
              if (h.key === L) if (h.tag === 4 && h.stateNode.containerInfo === S.containerInfo && h.stateNode.implementation === S.implementation) {
                n(w, h.sibling), h = i(h, S.children || []), h.return = w, w = h;
                break e;
              } else {
                n(w, h);
                break;
              }
              else t(w, h);
              h = h.sibling;
            }
            h = al(S, w.mode, W), h.return = w, w = h;
          }
          return l(w);
        case Bt:
          return L = S._init, ee(w, h, L(S._payload), W);
      }
      if (Cr(S)) return R(w, h, S, W);
      if (cr(S)) return b(w, h, S, W);
      _i(w, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, h !== null && h.tag === 6 ? (n(w, h.sibling), h = i(h, S), h.return = w, w = h) : (n(w, h), h = ul(S, w.mode, W), h.return = w, w = h), l(w)) : n(w, h);
  }
  return ee;
}
var qn = Bc(true), Hc = Bc(false), li = {}, Ot = an(li), Kr = an(li), Yr = an(li);
function yn(e) {
  if (e === li) throw Error(V(174));
  return e;
}
function bu(e, t) {
  switch (ve(Yr, t), ve(Kr, e), ve(Ot, li), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wl(t, e);
  }
  ye(Ot), ve(Ot, t);
}
function er() {
  ye(Ot), ye(Kr), ye(Yr);
}
function Qc(e) {
  yn(Yr.current);
  var t = yn(Ot.current), n = wl(t, e.type);
  t !== n && (ve(Kr, e), ve(Ot, n));
}
function ju(e) {
  Kr.current === e && (ye(Ot), ye(Kr));
}
var ke = an(0);
function ro(e) {
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
var tl = [];
function Iu() {
  for (var e = 0; e < tl.length; e++) tl[e]._workInProgressVersionPrimary = null;
  tl.length = 0;
}
var ji = Ft.ReactCurrentDispatcher, nl = Ft.ReactCurrentBatchConfig, kn = 0, _e = null, Te = null, Me = null, io = false, br = false, Xr = 0, Hp = 0;
function Ue() {
  throw Error(V(321));
}
function Wu(e, t) {
  if (t === null) return false;
  for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return false;
  return true;
}
function Nu(e, t, n, r, i, o) {
  if (kn = o, _e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ji.current = e === null || e.memoizedState === null ? Kp : Yp, e = n(r, i), br) {
    o = 0;
    do {
      if (br = false, Xr = 0, 25 <= o) throw Error(V(301));
      o += 1, Me = Te = null, t.updateQueue = null, ji.current = Xp, e = n(r, i);
    } while (br);
  }
  if (ji.current = oo, t = Te !== null && Te.next !== null, kn = 0, Me = Te = _e = null, io = false, t) throw Error(V(300));
  return e;
}
function Uu() {
  var e = Xr !== 0;
  return Xr = 0, e;
}
function Ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Me === null ? _e.memoizedState = Me = e : Me = Me.next = e, Me;
}
function vt() {
  if (Te === null) {
    var e = _e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = Me === null ? _e.memoizedState : Me.next;
  if (t !== null) Me = t, Te = e;
  else {
    if (e === null) throw Error(V(310));
    Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, Me === null ? _e.memoizedState = Me = e : Me = Me.next = e;
  }
  return Me;
}
function Zr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function rl(e) {
  var t = vt(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = Te, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var u = l = null, a = null, s = o;
    do {
      var g = s.lane;
      if ((kn & g) === g) a !== null && (a = a.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var k = { lane: g, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null };
        a === null ? (u = a = k, l = r) : a = a.next = k, _e.lanes |= g, _n |= g;
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? l = r : a.next = u, kt(r, t.memoizedState) || (Xe = true), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, _e.lanes |= o, _n |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function il(e) {
  var t = vt(), n = t.queue;
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
function Gc() {
}
function $c(e, t) {
  var n = _e, r = vt(), i = t(), o = !kt(r.memoizedState, i);
  if (o && (r.memoizedState = i, Xe = true), r = r.queue, Fu(Xc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Me !== null && Me.memoizedState.tag & 1) {
    if (n.flags |= 2048, Jr(9, Yc.bind(null, n, r, i, t), void 0, null), Le === null) throw Error(V(349));
    kn & 30 || Kc(n, t, i);
  }
  return i;
}
function Kc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Yc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Zc(t) && Jc(e);
}
function Xc(e, t, n) {
  return n(function() {
    Zc(t) && Jc(e);
  });
}
function Zc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return true;
  }
}
function Jc(e) {
  var t = Nt(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function Ga(e) {
  var t = Ct();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = $p.bind(null, _e, e), [t.memoizedState, e];
}
function Jr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function qc() {
  return vt().memoizedState;
}
function Ii(e, t, n, r) {
  var i = Ct();
  _e.flags |= e, i.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Eo(e, t, n, r) {
  var i = vt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Te !== null) {
    var l = Te.memoizedState;
    if (o = l.destroy, r !== null && Wu(r, l.deps)) {
      i.memoizedState = Jr(t, n, o, r);
      return;
    }
  }
  _e.flags |= e, i.memoizedState = Jr(1 | t, n, o, r);
}
function $a(e, t) {
  return Ii(8390656, 8, e, t);
}
function Fu(e, t) {
  return Eo(2048, 8, e, t);
}
function ef(e, t) {
  return Eo(4, 2, e, t);
}
function tf(e, t) {
  return Eo(4, 4, e, t);
}
function nf(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function rf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Eo(4, 4, nf.bind(null, t, e), n);
}
function zu() {
}
function of(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function lf(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function uf(e, t, n) {
  return kn & 21 ? (kt(n, t) || (n = sc(), _e.lanes |= n, _n |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, Xe = true), e.memoizedState = n);
}
function Qp(e, t) {
  var n = fe;
  fe = n !== 0 && 4 > n ? n : 4, e(true);
  var r = nl.transition;
  nl.transition = {};
  try {
    e(false), t();
  } finally {
    fe = n, nl.transition = r;
  }
}
function af() {
  return vt().memoizedState;
}
function Gp(e, t, n) {
  var r = tn(e);
  if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, sf(e)) cf(t, n);
  else if (n = Fc(e, t, n, r), n !== null) {
    var i = He();
    Et(n, e, r, i), ff(n, t, r);
  }
}
function $p(e, t, n) {
  var r = tn(e), i = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
  if (sf(e)) cf(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var l = t.lastRenderedState, u = o(l, n);
      if (i.hasEagerState = true, i.eagerState = u, kt(u, l)) {
        var a = t.interleaved;
        a === null ? (i.next = i, Mu(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Fc(e, t, i, r), n !== null && (i = He(), Et(n, e, r, i), ff(n, t, r));
  }
}
function sf(e) {
  var t = e.alternate;
  return e === _e || t !== null && t === _e;
}
function cf(e, t) {
  br = io = true;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ff(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yu(e, n);
  }
}
var oo = { readContext: pt, useCallback: Ue, useContext: Ue, useEffect: Ue, useImperativeHandle: Ue, useInsertionEffect: Ue, useLayoutEffect: Ue, useMemo: Ue, useReducer: Ue, useRef: Ue, useState: Ue, useDebugValue: Ue, useDeferredValue: Ue, useTransition: Ue, useMutableSource: Ue, useSyncExternalStore: Ue, useId: Ue, unstable_isNewReconciler: false }, Kp = { readContext: pt, useCallback: function(e, t) {
  return Ct().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: $a, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ii(4194308, 4, nf.bind(null, t, e), n);
}, useLayoutEffect: function(e, t) {
  return Ii(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ii(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ct();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ct();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Gp.bind(null, _e, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ct();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ga, useDebugValue: zu, useDeferredValue: function(e) {
  return Ct().memoizedState = e;
}, useTransition: function() {
  var e = Ga(false), t = e[0];
  return e = Qp.bind(null, e[1]), Ct().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = _e, i = Ct();
  if (we) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), Le === null) throw Error(V(349));
    kn & 30 || Kc(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, $a(Xc.bind(null, r, o, e), [e]), r.flags |= 2048, Jr(9, Yc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ct(), t = Le.identifierPrefix;
  if (we) {
    var n = bt, r = Lt;
    n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Hp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: false }, Yp = { readContext: pt, useCallback: of, useContext: pt, useEffect: Fu, useImperativeHandle: rf, useInsertionEffect: ef, useLayoutEffect: tf, useMemo: lf, useReducer: rl, useRef: qc, useState: function() {
  return rl(Zr);
}, useDebugValue: zu, useDeferredValue: function(e) {
  var t = vt();
  return uf(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = rl(Zr)[0], t = vt().memoizedState;
  return [e, t];
}, useMutableSource: Gc, useSyncExternalStore: $c, useId: af, unstable_isNewReconciler: false }, Xp = { readContext: pt, useCallback: of, useContext: pt, useEffect: Fu, useImperativeHandle: rf, useInsertionEffect: ef, useLayoutEffect: tf, useMemo: lf, useReducer: il, useRef: qc, useState: function() {
  return il(Zr);
}, useDebugValue: zu, useDeferredValue: function(e) {
  var t = vt();
  return Te === null ? t.memoizedState = e : uf(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = il(Zr)[0], t = vt().memoizedState;
  return [e, t];
}, useMutableSource: Gc, useSyncExternalStore: $c, useId: af, unstable_isNewReconciler: false };
function tr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Cd(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ol(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Zp = typeof WeakMap == "function" ? WeakMap : Map;
function df(e, t, n) {
  n = jt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    uo || (uo = true, Jl = r), Vl(e, t);
  }, n;
}
function pf(e, t, n) {
  n = jt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Vl(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Vl(e, t), typeof r != "function" && (en === null ? en = /* @__PURE__ */ new Set([this]) : en.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Ka(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zp();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = fv.bind(null, e, t, n), t.then(e, e));
}
function Ya(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Xa(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jt(-1, 1), t.tag = 2, qt(n, t, 1))), n.lanes |= 1), e);
}
var Jp = Ft.ReactCurrentOwner, Xe = false;
function Be(e, t, n, r) {
  t.child = e === null ? Hc(t, null, n, r) : qn(t, e.child, n, r);
}
function Za(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return $n(t, i), r = Nu(e, t, n, r, o, i), n = Uu(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ut(e, t, i)) : (we && n && Pu(t), t.flags |= 1, Be(e, t, r, i), t.child);
}
function Ja(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ku(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, vf(e, t, o, r, i)) : (e = Fi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Hr, n(l, r) && e.ref === t.ref) return Ut(e, t, i);
  }
  return t.flags |= 1, e = nn(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function vf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Hr(o, r) && e.ref === t.ref) if (Xe = false, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Xe = true);
    else return t.lanes = e.lanes, Ut(e, t, i);
  }
  return Bl(e, t, n, r, i);
}
function hf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ve(Vn, nt), nt |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ve(Vn, nt), nt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ve(Vn, nt), nt |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ve(Vn, nt), nt |= r;
  return Be(e, t, i, n), t.child;
}
function mf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Bl(e, t, n, r, i) {
  var o = Je(n) ? Sn : xe.current;
  return o = Zn(t, o), $n(t, i), n = Nu(e, t, n, r, o, i), r = Uu(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ut(e, t, i)) : (we && r && Pu(t), t.flags |= 1, Be(e, t, n, i), t.child);
}
function qa(e, t, n, r, i) {
  if (Je(n)) {
    var o = true;
    Zi(t);
  } else o = false;
  if ($n(t, i), t.stateNode === null) Wi(e, t), Vc(t, n, r), xl(t, n, r, i), r = true;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var a = l.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = pt(s) : (s = Je(n) ? Sn : xe.current, s = Zn(t, s));
    var g = n.getDerivedStateFromProps, k = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    k || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || a !== s) && Ha(t, l, r, s), Ht = false;
    var m = t.memoizedState;
    l.state = m, no(t, r, l, i), a = t.memoizedState, u !== r || m !== a || Ze.current || Ht ? (typeof g == "function" && (zl(t, n, g, r), a = t.memoizedState), (u = Ht || Ba(t, n, u, r, m, a, s)) ? (k || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = s, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = false);
  } else {
    l = t.stateNode, zc(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : yt(t.type, u), l.props = s, k = t.pendingProps, m = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = pt(a) : (a = Je(n) ? Sn : xe.current, a = Zn(t, a));
    var M = n.getDerivedStateFromProps;
    (g = typeof M == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== k || m !== a) && Ha(t, l, r, a), Ht = false, m = t.memoizedState, l.state = m, no(t, r, l, i);
    var R = t.memoizedState;
    u !== k || m !== R || Ze.current || Ht ? (typeof M == "function" && (zl(t, n, M, r), R = t.memoizedState), (s = Ht || Ba(t, n, s, r, m, R, a) || false) ? (g || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, R, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, R, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = R), l.props = r, l.state = R, l.context = a, r = s) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = false);
  }
  return Hl(e, t, n, r, o, i);
}
function Hl(e, t, n, r, i, o) {
  mf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Ua(t, n, false), Ut(e, t, o);
  r = t.stateNode, Jp.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = qn(t, e.child, null, o), t.child = qn(t, null, u, o)) : Be(e, t, u, o), t.memoizedState = r.state, i && Ua(t, n, true), t.child;
}
function yf(e) {
  var t = e.stateNode;
  t.pendingContext ? Na(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Na(e, t.context, false), bu(e, t.containerInfo);
}
function es(e, t, n, r, i) {
  return Jn(), Ou(i), t.flags |= 256, Be(e, t, n, r), t.child;
}
var Ql = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gf(e, t, n) {
  var r = t.pendingProps, i = ke.current, o = false, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? false : (i & 2) !== 0), u ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ve(ke, i & 1), e === null) return Ul(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = Co(l, r, 0, null), e = wn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Gl(n), t.memoizedState = Ql, e) : xu(t, l));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return qp(e, t, l, r, u, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, u = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = nn(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = nn(u, o) : (o = wn(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? Gl(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Ql, r;
  }
  return o = e.child, e = o.sibling, r = nn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function xu(e, t) {
  return t = Co({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ci(e, t, n, r) {
  return r !== null && Ou(r), qn(t, e.child, null, n), e = xu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function qp(e, t, n, r, i, o, l) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = ol(Error(V(422))), Ci(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Co({ mode: "visible", children: r.children }, i, 0, null), o = wn(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && qn(t, e.child, null, l), t.child.memoizedState = Gl(l), t.memoizedState = Ql, o);
  if (!(t.mode & 1)) return Ci(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(V(419)), r = ol(o, r, void 0), Ci(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Xe || u) {
    if (r = Le, r !== null) {
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
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Nt(e, i), Et(r, e, i, -1));
    }
    return $u(), r = ol(Error(V(421))), Ci(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = dv.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, rt = Jt(i.nextSibling), it = t, we = true, wt = null, e !== null && (at[st++] = Lt, at[st++] = bt, at[st++] = En, Lt = e.id, bt = e.overflow, En = t), t = xu(t, r.children), t.flags |= 4096, t);
}
function ts(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fl(e.return, t, n);
}
function ll(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function wf(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Be(e, t, r.children, n), r = ke.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ts(e, n, t);
      else if (e.tag === 19) ts(e, n, t);
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
  if (ve(ke, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && ro(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ll(t, false, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && ro(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      ll(t, true, n, null, o);
      break;
    case "together":
      ll(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Wi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ut(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), _n |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ev(e, t, n) {
  switch (t.tag) {
    case 3:
      yf(t), Jn();
      break;
    case 5:
      Qc(t);
      break;
    case 1:
      Je(t.type) && Zi(t);
      break;
    case 4:
      bu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      ve(eo, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ve(ke, ke.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? gf(e, t, n) : (ve(ke, ke.current & 1), e = Ut(e, t, n), e !== null ? e.sibling : null);
      ve(ke, ke.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return wf(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ve(ke, ke.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, hf(e, t, n);
  }
  return Ut(e, t, n);
}
var Sf, $l, Ef, kf;
Sf = function(e, t) {
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
$l = function() {
};
Ef = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, yn(Ot.current);
    var o = null;
    switch (n) {
      case "input":
        i = hl(e, i), r = hl(e, r), o = [];
        break;
      case "select":
        i = Ce({}, i, { value: void 0 }), r = Ce({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = gl(e, i), r = gl(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yi);
    }
    Sl(n, r);
    var l;
    n = null;
    for (s in i) if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null) if (s === "style") {
      var u = i[s];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Nr.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = i == null ? void 0 : i[s], r.hasOwnProperty(s) && a !== u && (a != null || u != null)) if (s === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && u[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (o || (o = []), o.push(s, n)), n = a;
      else s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Nr.hasOwnProperty(s) ? (a != null && s === "onScroll" && me("scroll", e), o || u === a || (o = [])) : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
kf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mr(e, t) {
  if (!we) switch (e.tailMode) {
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
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function tv(e, t, n) {
  var r = t.pendingProps;
  switch (Ru(t), t.tag) {
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
      return Fe(t), null;
    case 1:
      return Je(t.type) && Xi(), Fe(t), null;
    case 3:
      return r = t.stateNode, er(), ye(Ze), ye(xe), Iu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ki(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (tu(wt), wt = null))), $l(e, t), Fe(t), null;
    case 5:
      ju(t);
      var i = yn(Yr.current);
      if (n = t.type, e !== null && t.stateNode != null) Ef(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return Fe(t), null;
        }
        if (e = yn(Ot.current), ki(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Pt] = t, r[$r] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              me("cancel", r), me("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              me("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Rr.length; i++) me(Rr[i], r);
              break;
            case "source":
              me("error", r);
              break;
            case "img":
            case "image":
            case "link":
              me("error", r), me("load", r);
              break;
            case "details":
              me("toggle", r);
              break;
            case "input":
              ca(r, o), me("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, me("invalid", r);
              break;
            case "textarea":
              da(r, o), me("invalid", r);
          }
          Sl(n, o), i = null;
          for (var l in o) if (o.hasOwnProperty(l)) {
            var u = o[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== true && Ei(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== true && Ei(r.textContent, u, e), i = ["children", "" + u]) : Nr.hasOwnProperty(l) && u != null && l === "onScroll" && me("scroll", r);
          }
          switch (n) {
            case "input":
              pi(r), fa(r, o, true);
              break;
            case "textarea":
              pi(r), pa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Yi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ks(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = true : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Pt] = t, e[$r] = r, Sf(e, t, false, false), t.stateNode = e;
          e: {
            switch (l = El(n, r), n) {
              case "dialog":
                me("cancel", e), me("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Rr.length; i++) me(Rr[i], e);
                i = r;
                break;
              case "source":
                me("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                me("error", e), me("load", e), i = r;
                break;
              case "details":
                me("toggle", e), i = r;
                break;
              case "input":
                ca(e, r), i = hl(e, r), me("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Ce({}, r, { value: void 0 }), me("invalid", e);
                break;
              case "textarea":
                da(e, r), i = gl(e, r), me("invalid", e);
                break;
              default:
                i = r;
            }
            Sl(n, i), u = i;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? Zs(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ys(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ur(e, a) : typeof a == "number" && Ur(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Nr.hasOwnProperty(o) ? a != null && o === "onScroll" && me("scroll", e) : a != null && fu(e, o, a, l));
            }
            switch (n) {
              case "input":
                pi(e), fa(e, r, false);
                break;
              case "textarea":
                pi(e), pa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + rn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Bn(e, !!r.multiple, o, false) : r.defaultValue != null && Bn(e, !!r.multiple, r.defaultValue, true);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Yi);
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
      return Fe(t), null;
    case 6:
      if (e && t.stateNode != null) kf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = yn(Yr.current), yn(Ot.current), ki(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Pt] = t, (o = r.nodeValue !== n) && (e = it, e !== null)) switch (e.tag) {
            case 3:
              Ei(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== true && Ei(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Pt] = t, t.stateNode = r;
      }
      return Fe(t), null;
    case 13:
      if (ye(ke), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (we && rt !== null && t.mode & 1 && !(t.flags & 128)) Uc(), Jn(), t.flags |= 98560, o = false;
        else if (o = ki(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(V(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(V(317));
            o[Pt] = t;
          } else Jn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Fe(t), o = false;
        } else wt !== null && (tu(wt), wt = null), o = true;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ke.current & 1 ? De === 0 && (De = 3) : $u())), t.updateQueue !== null && (t.flags |= 4), Fe(t), null);
    case 4:
      return er(), $l(e, t), e === null && Qr(t.stateNode.containerInfo), Fe(t), null;
    case 10:
      return Au(t.type._context), Fe(t), null;
    case 17:
      return Je(t.type) && Xi(), Fe(t), null;
    case 19:
      if (ye(ke), o = t.memoizedState, o === null) return Fe(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) mr(o, false);
      else {
        if (De !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = ro(e), l !== null) {
            for (t.flags |= 128, mr(o, false), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ve(ke, ke.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Re() > nr && (t.flags |= 128, r = true, mr(o, false), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ro(l), e !== null) {
          if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mr(o, true), o.tail === null && o.tailMode === "hidden" && !l.alternate && !we) return Fe(t), null;
        } else 2 * Re() - o.renderingStartTime > nr && n !== 1073741824 && (t.flags |= 128, r = true, mr(o, false), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Re(), t.sibling = null, n = ke.current, ve(ke, r ? n & 1 | 2 : n & 1), t) : (Fe(t), null);
    case 22:
    case 23:
      return Gu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function nv(e, t) {
  switch (Ru(t), t.tag) {
    case 1:
      return Je(t.type) && Xi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return er(), ye(Ze), ye(xe), Iu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ju(t), null;
    case 13:
      if (ye(ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        Jn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(ke), null;
    case 4:
      return er(), null;
    case 10:
      return Au(t.type._context), null;
    case 22:
    case 23:
      return Gu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pi = false, ze = false, rv = typeof WeakSet == "function" ? WeakSet : Set, K = null;
function xn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Pe(e, t, r);
  }
  else n.current = null;
}
function Kl(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var ns = false;
function iv(e, t) {
  if (Ml = Gi, e = Pc(), Cu(e)) {
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
        var l = 0, u = -1, a = -1, s = 0, g = 0, k = e, m = null;
        t: for (; ; ) {
          for (var M; k !== n || i !== 0 && k.nodeType !== 3 || (u = l + i), k !== o || r !== 0 && k.nodeType !== 3 || (a = l + r), k.nodeType === 3 && (l += k.nodeValue.length), (M = k.firstChild) !== null; ) m = k, k = M;
          for (; ; ) {
            if (k === e) break t;
            if (m === n && ++s === i && (u = l), m === o && ++g === r && (a = l), (M = k.nextSibling) !== null) break;
            k = m, m = k.parentNode;
          }
          k = M;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ll = { focusedElem: e, selectionRange: n }, Gi = false, K = t; K !== null; ) if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, K = e;
  else for (; K !== null; ) {
    t = K;
    try {
      var R = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (R !== null) {
            var b = R.memoizedProps, ee = R.memoizedState, w = t.stateNode, h = w.getSnapshotBeforeUpdate(t.elementType === t.type ? b : yt(t.type, b), ee);
            w.__reactInternalSnapshotBeforeUpdate = h;
          }
          break;
        case 3:
          var S = t.stateNode.containerInfo;
          S.nodeType === 1 ? S.textContent = "" : S.nodeType === 9 && S.documentElement && S.removeChild(S.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(V(163));
      }
    } catch (W) {
      Pe(t, t.return, W);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, K = e;
      break;
    }
    K = t.return;
  }
  return R = ns, ns = false, R;
}
function jr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Kl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ko(e, t) {
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
function Yl(e) {
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
function _f(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, _f(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Pt], delete t[$r], delete t[Il], delete t[zp], delete t[xp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Cf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Xl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Xl(e, t, n), e = e.sibling; e !== null; ) Xl(e, t, n), e = e.sibling;
}
function Zl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Zl(e, t, n), e = e.sibling; e !== null; ) Zl(e, t, n), e = e.sibling;
}
var je = null, gt = false;
function xt(e, t, n) {
  for (n = n.child; n !== null; ) Pf(e, t, n), n = n.sibling;
}
function Pf(e, t, n) {
  if (Rt && typeof Rt.onCommitFiberUnmount == "function") try {
    Rt.onCommitFiberUnmount(vo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ze || xn(n, t);
    case 6:
      var r = je, i = gt;
      je = null, xt(e, t, n), je = r, gt = i, je !== null && (gt ? (e = je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null && (gt ? (e = je, n = n.stateNode, e.nodeType === 8 ? qo(e.parentNode, n) : e.nodeType === 1 && qo(e, n), Vr(e)) : qo(je, n.stateNode));
      break;
    case 4:
      r = je, i = gt, je = n.stateNode.containerInfo, gt = true, xt(e, t, n), je = r, gt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && Kl(n, t, l), i = i.next;
        } while (i !== r);
      }
      xt(e, t, n);
      break;
    case 1:
      if (!ze && (xn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Pe(n, t, u);
      }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, xt(e, t, n), ze = r) : xt(e, t, n);
      break;
    default:
      xt(e, t, n);
  }
}
function is(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rv()), t.forEach(function(r) {
      var i = pv.bind(null, e, r);
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
      Pf(o, l, i), je = null, gt = false;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (s) {
      Pe(i, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Rf(t, e), t = t.sibling;
}
function Rf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (mt(t, e), _t(e), r & 4) {
        try {
          jr(3, e, e.return), ko(3, e);
        } catch (b) {
          Pe(e, e.return, b);
        }
        try {
          jr(5, e, e.return);
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      break;
    case 1:
      mt(t, e), _t(e), r & 512 && n !== null && xn(n, n.return);
      break;
    case 5:
      if (mt(t, e), _t(e), r & 512 && n !== null && xn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Ur(i, "");
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Gs(i, o), El(u, l);
          var s = El(u, o);
          for (l = 0; l < a.length; l += 2) {
            var g = a[l], k = a[l + 1];
            g === "style" ? Zs(i, k) : g === "dangerouslySetInnerHTML" ? Ys(i, k) : g === "children" ? Ur(i, k) : fu(i, g, k, s);
          }
          switch (u) {
            case "input":
              ml(i, o);
              break;
            case "textarea":
              $s(i, o);
              break;
            case "select":
              var m = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var M = o.value;
              M != null ? Bn(i, !!o.multiple, M, false) : m !== !!o.multiple && (o.defaultValue != null ? Bn(i, !!o.multiple, o.defaultValue, true) : Bn(i, !!o.multiple, o.multiple ? [] : "", false));
          }
          i[$r] = o;
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      break;
    case 6:
      if (mt(t, e), _t(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      break;
    case 3:
      if (mt(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Vr(t.containerInfo);
      } catch (b) {
        Pe(e, e.return, b);
      }
      break;
    case 4:
      mt(t, e), _t(e);
      break;
    case 13:
      mt(t, e), _t(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Hu = Re())), r & 4 && is(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (s = ze) || g, mt(t, e), ze = s) : mt(t, e), _t(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !g && e.mode & 1) for (K = e, g = e.child; g !== null; ) {
          for (k = K = g; K !== null; ) {
            switch (m = K, M = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                jr(4, m, m.return);
                break;
              case 1:
                xn(m, m.return);
                var R = m.stateNode;
                if (typeof R.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, R.props = t.memoizedProps, R.state = t.memoizedState, R.componentWillUnmount();
                  } catch (b) {
                    Pe(r, n, b);
                  }
                }
                break;
              case 5:
                xn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  ls(k);
                  continue;
                }
            }
            M !== null ? (M.return = m, K = M) : ls(k);
          }
          g = g.sibling;
        }
        e: for (g = null, k = e; ; ) {
          if (k.tag === 5) {
            if (g === null) {
              g = k;
              try {
                i = k.stateNode, s ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = k.stateNode, a = k.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Xs("display", l));
              } catch (b) {
                Pe(e, e.return, b);
              }
            }
          } else if (k.tag === 6) {
            if (g === null) try {
              k.stateNode.nodeValue = s ? "" : k.memoizedProps;
            } catch (b) {
              Pe(e, e.return, b);
            }
          } else if ((k.tag !== 22 && k.tag !== 23 || k.memoizedState === null || k === e) && k.child !== null) {
            k.child.return = k, k = k.child;
            continue;
          }
          if (k === e) break e;
          for (; k.sibling === null; ) {
            if (k.return === null || k.return === e) break e;
            g === k && (g = null), k = k.return;
          }
          g === k && (g = null), k.sibling.return = k.return, k = k.sibling;
        }
      }
      break;
    case 19:
      mt(t, e), _t(e), r & 4 && is(e);
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
          if (Cf(n)) {
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
          r.flags & 32 && (Ur(i, ""), r.flags &= -33);
          var o = rs(e);
          Zl(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = rs(e);
          Xl(e, u, l);
          break;
        default:
          throw Error(V(161));
      }
    } catch (a) {
      Pe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ov(e, t, n) {
  K = e, Of(e);
}
function Of(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var i = K, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Pi;
      if (!l) {
        var u = i.alternate, a = u !== null && u.memoizedState !== null || ze;
        u = Pi;
        var s = ze;
        if (Pi = l, (ze = a) && !s) for (K = i; K !== null; ) l = K, a = l.child, l.tag === 22 && l.memoizedState !== null ? us(i) : a !== null ? (a.return = l, K = a) : us(i);
        for (; o !== null; ) K = o, Of(o), o = o.sibling;
        K = i, Pi = u, ze = s;
      }
      os(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, K = o) : os(e);
  }
}
function os(e) {
  for (; K !== null; ) {
    var t = K;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ze || ko(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ze) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Va(t, o, r);
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
              Va(t, l, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
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
              var s = t.alternate;
              if (s !== null) {
                var g = s.memoizedState;
                if (g !== null) {
                  var k = g.dehydrated;
                  k !== null && Vr(k);
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
        ze || t.flags & 512 && Yl(t);
      } catch (m) {
        Pe(t, t.return, m);
      }
    }
    if (t === e) {
      K = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, K = n;
      break;
    }
    K = t.return;
  }
}
function ls(e) {
  for (; K !== null; ) {
    var t = K;
    if (t === e) {
      K = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, K = n;
      break;
    }
    K = t.return;
  }
}
function us(e) {
  for (; K !== null; ) {
    var t = K;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ko(4, t);
          } catch (a) {
            Pe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Pe(t, i, a);
            }
          }
          var o = t.return;
          try {
            Yl(t);
          } catch (a) {
            Pe(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Yl(t);
          } catch (a) {
            Pe(t, l, a);
          }
      }
    } catch (a) {
      Pe(t, t.return, a);
    }
    if (t === e) {
      K = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, K = u;
      break;
    }
    K = t.return;
  }
}
var lv = Math.ceil, lo = Ft.ReactCurrentDispatcher, Vu = Ft.ReactCurrentOwner, ft = Ft.ReactCurrentBatchConfig, ae = 0, Le = null, Oe = null, Ie = 0, nt = 0, Vn = an(0), De = 0, qr = null, _n = 0, _o = 0, Bu = 0, Ir = null, Ye = null, Hu = 0, nr = 1 / 0, At = null, uo = false, Jl = null, en = null, Ri = false, Kt = null, ao = 0, Wr = 0, ql = null, Ni = -1, Ui = 0;
function He() {
  return ae & 6 ? Re() : Ni !== -1 ? Ni : Ni = Re();
}
function tn(e) {
  return e.mode & 1 ? ae & 2 && Ie !== 0 ? Ie & -Ie : Bp.transition !== null ? (Ui === 0 && (Ui = sc()), Ui) : (e = fe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mc(e.type)), e) : 1;
}
function Et(e, t, n, r) {
  if (50 < Wr) throw Wr = 0, ql = null, Error(V(185));
  ri(e, n, r), (!(ae & 2) || e !== Le) && (e === Le && (!(ae & 2) && (_o |= n), De === 4 && Gt(e, Ie)), qe(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (nr = Re() + 500, wo && sn()));
}
function qe(e, t) {
  var n = e.callbackNode;
  Bd(e, t);
  var r = Qi(e, e === Le ? Ie : 0);
  if (r === 0) n !== null && ma(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ma(n), t === 1) e.tag === 0 ? Vp(as.bind(null, e)) : Ic(as.bind(null, e)), Up(function() {
      !(ae & 6) && sn();
    }), n = null;
    else {
      switch (cc(r)) {
        case 1:
          n = mu;
          break;
        case 4:
          n = uc;
          break;
        case 16:
          n = Hi;
          break;
        case 536870912:
          n = ac;
          break;
        default:
          n = Hi;
      }
      n = If(n, Tf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Tf(e, t) {
  if (Ni = -1, Ui = 0, ae & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = Qi(e, e === Le ? Ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = so(e, r);
  else {
    t = r;
    var i = ae;
    ae |= 2;
    var o = Af();
    (Le !== e || Ie !== t) && (At = null, nr = Re() + 500, gn(e, t));
    do
      try {
        sv();
        break;
      } catch (u) {
        Df(e, u);
      }
    while (true);
    Du(), lo.current = o, ae = i, Oe !== null ? t = 0 : (Le = null, Ie = 0, t = De);
  }
  if (t !== 0) {
    if (t === 2 && (i = Rl(e), i !== 0 && (r = i, t = eu(e, i))), t === 1) throw n = qr, gn(e, 0), Gt(e, r), qe(e, Re()), n;
    if (t === 6) Gt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !uv(i) && (t = so(e, r), t === 2 && (o = Rl(e), o !== 0 && (r = o, t = eu(e, o))), t === 1)) throw n = qr, gn(e, 0), Gt(e, r), qe(e, Re()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          vn(e, Ye, At);
          break;
        case 3:
          if (Gt(e, r), (r & 130023424) === r && (t = Hu + 500 - Re(), 10 < t)) {
            if (Qi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              He(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = jl(vn.bind(null, e, Ye, At), t);
            break;
          }
          vn(e, Ye, At);
          break;
        case 4:
          if (Gt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - St(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = Re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * lv(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = jl(vn.bind(null, e, Ye, At), r);
            break;
          }
          vn(e, Ye, At);
          break;
        case 5:
          vn(e, Ye, At);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return qe(e, Re()), e.callbackNode === n ? Tf.bind(null, e) : null;
}
function eu(e, t) {
  var n = Ir;
  return e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256), e = so(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && tu(t)), e;
}
function tu(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function uv(e) {
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
function Gt(e, t) {
  for (t &= ~Bu, t &= ~_o, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - St(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function as(e) {
  if (ae & 6) throw Error(V(327));
  Kn();
  var t = Qi(e, 0);
  if (!(t & 1)) return qe(e, Re()), null;
  var n = so(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Rl(e);
    r !== 0 && (t = r, n = eu(e, r));
  }
  if (n === 1) throw n = qr, gn(e, 0), Gt(e, t), qe(e, Re()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, vn(e, Ye, At), qe(e, Re()), null;
}
function Qu(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (nr = Re() + 500, wo && sn());
  }
}
function Cn(e) {
  Kt !== null && Kt.tag === 0 && !(ae & 6) && Kn();
  var t = ae;
  ae |= 1;
  var n = ft.transition, r = fe;
  try {
    if (ft.transition = null, fe = 1, e) return e();
  } finally {
    fe = r, ft.transition = n, ae = t, !(ae & 6) && sn();
  }
}
function Gu() {
  nt = Vn.current, ye(Vn);
}
function gn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Np(n)), Oe !== null) for (n = Oe.return; n !== null; ) {
    var r = n;
    switch (Ru(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Xi();
        break;
      case 3:
        er(), ye(Ze), ye(xe), Iu();
        break;
      case 5:
        ju(r);
        break;
      case 4:
        er();
        break;
      case 13:
        ye(ke);
        break;
      case 19:
        ye(ke);
        break;
      case 10:
        Au(r.type._context);
        break;
      case 22:
      case 23:
        Gu();
    }
    n = n.return;
  }
  if (Le = e, Oe = e = nn(e.current, null), Ie = nt = t, De = 0, qr = null, Bu = _o = _n = 0, Ye = Ir = null, mn !== null) {
    for (t = 0; t < mn.length; t++) if (n = mn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var l = o.next;
        o.next = i, r.next = l;
      }
      n.pending = r;
    }
    mn = null;
  }
  return e;
}
function Df(e, t) {
  do {
    var n = Oe;
    try {
      if (Du(), ji.current = oo, io) {
        for (var r = _e.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        io = false;
      }
      if (kn = 0, Me = Te = _e = null, br = false, Xr = 0, Vu.current = null, n === null || n.return === null) {
        De = 1, qr = t, Oe = null;
        break;
      }
      e: {
        var o = e, l = n.return, u = n, a = t;
        if (t = Ie, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a, g = u, k = g.tag;
          if (!(g.mode & 1) && (k === 0 || k === 11 || k === 15)) {
            var m = g.alternate;
            m ? (g.updateQueue = m.updateQueue, g.memoizedState = m.memoizedState, g.lanes = m.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var M = Ya(l);
          if (M !== null) {
            M.flags &= -257, Xa(M, l, u, o, t), M.mode & 1 && Ka(o, s, t), t = M, a = s;
            var R = t.updateQueue;
            if (R === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else R.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ka(o, s, t), $u();
              break e;
            }
            a = Error(V(426));
          }
        } else if (we && u.mode & 1) {
          var ee = Ya(l);
          if (ee !== null) {
            !(ee.flags & 65536) && (ee.flags |= 256), Xa(ee, l, u, o, t), Ou(tr(a, u));
            break e;
          }
        }
        o = a = tr(a, u), De !== 4 && (De = 2), Ir === null ? Ir = [o] : Ir.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var w = df(o, a, t);
              xa(o, w);
              break e;
            case 1:
              u = a;
              var h = o.type, S = o.stateNode;
              if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (en === null || !en.has(S)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var W = pf(o, u, t);
                xa(o, W);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Lf(n);
    } catch (N) {
      t = N, Oe === n && n !== null && (Oe = n = n.return);
      continue;
    }
    break;
  } while (true);
}
function Af() {
  var e = lo.current;
  return lo.current = oo, e === null ? oo : e;
}
function $u() {
  (De === 0 || De === 3 || De === 2) && (De = 4), Le === null || !(_n & 268435455) && !(_o & 268435455) || Gt(Le, Ie);
}
function so(e, t) {
  var n = ae;
  ae |= 2;
  var r = Af();
  (Le !== e || Ie !== t) && (At = null, gn(e, t));
  do
    try {
      av();
      break;
    } catch (i) {
      Df(e, i);
    }
  while (true);
  if (Du(), ae = n, lo.current = r, Oe !== null) throw Error(V(261));
  return Le = null, Ie = 0, De;
}
function av() {
  for (; Oe !== null; ) Mf(Oe);
}
function sv() {
  for (; Oe !== null && !jd(); ) Mf(Oe);
}
function Mf(e) {
  var t = jf(e.alternate, e, nt);
  e.memoizedProps = e.pendingProps, t === null ? Lf(e) : Oe = t, Vu.current = null;
}
function Lf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = nv(n, t), n !== null) {
        n.flags &= 32767, Oe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        De = 6, Oe = null;
        return;
      }
    } else if (n = tv(n, t, nt), n !== null) {
      Oe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Oe = t;
      return;
    }
    Oe = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function vn(e, t, n) {
  var r = fe, i = ft.transition;
  try {
    ft.transition = null, fe = 1, cv(e, t, n, r);
  } finally {
    ft.transition = i, fe = r;
  }
  return null;
}
function cv(e, t, n, r) {
  do
    Kn();
  while (Kt !== null);
  if (ae & 6) throw Error(V(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Hd(e, o), e === Le && (Oe = Le = null, Ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ri || (Ri = true, If(Hi, function() {
    return Kn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = ft.transition, ft.transition = null;
    var l = fe;
    fe = 1;
    var u = ae;
    ae |= 4, Vu.current = null, iv(e, n), Rf(n, e), Ap(Ll), Gi = !!Ml, Ll = Ml = null, e.current = n, ov(n), Id(), ae = u, fe = l, ft.transition = o;
  } else e.current = n;
  if (Ri && (Ri = false, Kt = e, ao = i), o = e.pendingLanes, o === 0 && (en = null), Ud(n.stateNode), qe(e, Re()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (uo) throw uo = false, e = Jl, Jl = null, e;
  return ao & 1 && e.tag !== 0 && Kn(), o = e.pendingLanes, o & 1 ? e === ql ? Wr++ : (Wr = 0, ql = e) : Wr = 0, sn(), null;
}
function Kn() {
  if (Kt !== null) {
    var e = cc(ao), t = ft.transition, n = fe;
    try {
      if (ft.transition = null, fe = 16 > e ? 16 : e, Kt === null) var r = false;
      else {
        if (e = Kt, Kt = null, ao = 0, ae & 6) throw Error(V(331));
        var i = ae;
        for (ae |= 4, K = e.current; K !== null; ) {
          var o = K, l = o.child;
          if (K.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (K = s; K !== null; ) {
                  var g = K;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(8, g, o);
                  }
                  var k = g.child;
                  if (k !== null) k.return = g, K = k;
                  else for (; K !== null; ) {
                    g = K;
                    var m = g.sibling, M = g.return;
                    if (_f(g), g === s) {
                      K = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = M, K = m;
                      break;
                    }
                    K = M;
                  }
                }
              }
              var R = o.alternate;
              if (R !== null) {
                var b = R.child;
                if (b !== null) {
                  R.child = null;
                  do {
                    var ee = b.sibling;
                    b.sibling = null, b = ee;
                  } while (b !== null);
                }
              }
              K = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) l.return = o, K = l;
          else e: for (; K !== null; ) {
            if (o = K, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                jr(9, o, o.return);
            }
            var w = o.sibling;
            if (w !== null) {
              w.return = o.return, K = w;
              break e;
            }
            K = o.return;
          }
        }
        var h = e.current;
        for (K = h; K !== null; ) {
          l = K;
          var S = l.child;
          if (l.subtreeFlags & 2064 && S !== null) S.return = l, K = S;
          else e: for (l = h; K !== null; ) {
            if (u = K, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  ko(9, u);
              }
            } catch (N) {
              Pe(u, u.return, N);
            }
            if (u === l) {
              K = null;
              break e;
            }
            var W = u.sibling;
            if (W !== null) {
              W.return = u.return, K = W;
              break e;
            }
            K = u.return;
          }
        }
        if (ae = i, sn(), Rt && typeof Rt.onPostCommitFiberRoot == "function") try {
          Rt.onPostCommitFiberRoot(vo, e);
        } catch {
        }
        r = true;
      }
      return r;
    } finally {
      fe = n, ft.transition = t;
    }
  }
  return false;
}
function ss(e, t, n) {
  t = tr(n, t), t = df(e, t, 1), e = qt(e, t, 1), t = He(), e !== null && (ri(e, 1, t), qe(e, t));
}
function Pe(e, t, n) {
  if (e.tag === 3) ss(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ss(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
        e = tr(n, e), e = pf(t, e, 1), t = qt(t, e, 1), e = He(), t !== null && (ri(t, 1, e), qe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function fv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = He(), e.pingedLanes |= e.suspendedLanes & n, Le === e && (Ie & n) === n && (De === 4 || De === 3 && (Ie & 130023424) === Ie && 500 > Re() - Hu ? gn(e, 0) : Bu |= n), qe(e, t);
}
function bf(e, t) {
  t === 0 && (e.mode & 1 ? (t = mi, mi <<= 1, !(mi & 130023424) && (mi = 4194304)) : t = 1);
  var n = He();
  e = Nt(e, t), e !== null && (ri(e, t, n), qe(e, n));
}
function dv(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), bf(e, n);
}
function pv(e, t) {
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
  r !== null && r.delete(t), bf(e, n);
}
var jf;
jf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) Xe = true;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Xe = false, ev(e, t, n);
    Xe = !!(e.flags & 131072);
  }
  else Xe = false, we && t.flags & 1048576 && Wc(t, qi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Wi(e, t), e = t.pendingProps;
      var i = Zn(t, xe.current);
      $n(t, n), i = Nu(null, t, r, e, i, n);
      var o = Uu();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (o = true, Zi(t)) : o = false, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Lu(t), i.updater = So, t.stateNode = i, i._reactInternals = t, xl(t, r, e, n), t = Hl(null, t, r, true, o, n)) : (t.tag = 0, we && o && Pu(t), Be(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Wi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = hv(r), e = yt(r, e), i) {
          case 0:
            t = Bl(null, t, r, e, n);
            break e;
          case 1:
            t = qa(null, t, r, e, n);
            break e;
          case 11:
            t = Za(null, t, r, e, n);
            break e;
          case 14:
            t = Ja(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(V(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yt(r, i), Bl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yt(r, i), qa(e, t, r, i, n);
    case 3:
      e: {
        if (yf(t), e === null) throw Error(V(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, zc(e, t), no(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated) if (o = { element: r, isDehydrated: false, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = tr(Error(V(423)), t), t = es(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = tr(Error(V(424)), t), t = es(e, t, r, n, i);
          break e;
        } else for (rt = Jt(t.stateNode.containerInfo.firstChild), it = t, we = true, wt = null, n = Hc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Jn(), r === i) {
            t = Ut(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Qc(t), e === null && Ul(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, bl(r, i) ? l = null : o !== null && bl(r, o) && (t.flags |= 32), mf(e, t), Be(e, t, l, n), t.child;
    case 6:
      return e === null && Ul(t), null;
    case 13:
      return gf(e, t, n);
    case 4:
      return bu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = qn(t, null, r, n) : Be(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yt(r, i), Za(e, t, r, i, n);
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, ve(eo, r._currentValue), r._currentValue = l, o !== null) if (kt(o.value, l)) {
          if (o.children === i.children && !Ze.current) {
            t = Ut(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            l = o.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = jt(-1, n & -n), a.tag = 2;
                  var s = o.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var g = s.pending;
                    g === null ? a.next = a : (a.next = g.next, g.next = a), s.pending = a;
                  }
                }
                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Fl(o.return, n, t), u.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (l = o.return, l === null) throw Error(V(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Fl(l, n, t), l = o.sibling;
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
        Be(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, $n(t, n), i = pt(i), r = r(i), t.flags |= 1, Be(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = yt(r, t.pendingProps), i = yt(r.type, i), Ja(e, t, r, i, n);
    case 15:
      return vf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yt(r, i), Wi(e, t), t.tag = 1, Je(r) ? (e = true, Zi(t)) : e = false, $n(t, n), Vc(t, r, i), xl(t, r, i, n), Hl(null, t, r, true, e, n);
    case 19:
      return wf(e, t, n);
    case 22:
      return hf(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function If(e, t) {
  return lc(e, t);
}
function vv(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ct(e, t, n, r) {
  return new vv(e, t, n, r);
}
function Ku(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function hv(e) {
  if (typeof e == "function") return Ku(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === pu) return 11;
    if (e === vu) return 14;
  }
  return 2;
}
function nn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ct(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Fi(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function") Ku(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Ln:
      return wn(n.children, i, o, t);
    case du:
      l = 8, i |= 8;
      break;
    case fl:
      return e = ct(12, n, t, i | 2), e.elementType = fl, e.lanes = o, e;
    case dl:
      return e = ct(13, n, t, i), e.elementType = dl, e.lanes = o, e;
    case pl:
      return e = ct(19, n, t, i), e.elementType = pl, e.lanes = o, e;
    case Bs:
      return Co(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case xs:
          l = 10;
          break e;
        case Vs:
          l = 9;
          break e;
        case pu:
          l = 11;
          break e;
        case vu:
          l = 14;
          break e;
        case Bt:
          l = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = ct(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function wn(e, t, n, r) {
  return e = ct(7, e, r, t), e.lanes = n, e;
}
function Co(e, t, n, r) {
  return e = ct(22, e, r, t), e.elementType = Bs, e.lanes = n, e.stateNode = { isHidden: false }, e;
}
function ul(e, t, n) {
  return e = ct(6, e, null, t), e.lanes = n, e;
}
function al(e, t, n) {
  return t = ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function mv(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vo(0), this.expirationTimes = Vo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Yu(e, t, n, r, i, o, l, u, a) {
  return e = new mv(e, t, n, u, a), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = ct(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lu(o), e;
}
function yv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Mn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Wf(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1) throw Error(V(170));
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
    if (Je(n)) return jc(e, n, t);
  }
  return t;
}
function Nf(e, t, n, r, i, o, l, u, a) {
  return e = Yu(n, r, true, e, i, o, l, u, a), e.context = Wf(null), n = e.current, r = He(), i = tn(n), o = jt(r, i), o.callback = t ?? null, qt(n, o, i), e.current.lanes = i, ri(e, i, r), qe(e, r), e;
}
function Po(e, t, n, r) {
  var i = t.current, o = He(), l = tn(i);
  return n = Wf(n), t.context === null ? t.context = n : t.pendingContext = n, t = jt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = qt(i, t, l), e !== null && (Et(e, i, l, o), bi(e, i, l)), l;
}
function co(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xu(e, t) {
  cs(e, t), (e = e.alternate) && cs(e, t);
}
function gv() {
  return null;
}
var Uf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zu(e) {
  this._internalRoot = e;
}
Ro.prototype.render = Zu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  Po(e, t, null, null);
};
Ro.prototype.unmount = Zu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function() {
      Po(null, e, null, null);
    }), t[Wt] = null;
  }
};
function Ro(e) {
  this._internalRoot = e;
}
Ro.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = pc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++) ;
    Qt.splice(n, 0, e), n === 0 && hc(e);
  }
};
function Ju(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Oo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function fs() {
}
function wv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var s = co(l);
        o.call(s);
      };
    }
    var l = Nf(t, r, e, 0, null, false, false, "", fs);
    return e._reactRootContainer = l, e[Wt] = l.current, Qr(e.nodeType === 8 ? e.parentNode : e), Cn(), l;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = co(a);
      u.call(s);
    };
  }
  var a = Yu(e, 0, false, null, null, false, false, "", fs);
  return e._reactRootContainer = a, e[Wt] = a.current, Qr(e.nodeType === 8 ? e.parentNode : e), Cn(function() {
    Po(t, a, n, r);
  }), a;
}
function To(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var a = co(l);
        u.call(a);
      };
    }
    Po(t, l, e, i);
  } else l = wv(n, t, e, i, r);
  return co(l);
}
fc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pr(t.pendingLanes);
        n !== 0 && (yu(t, n | 1), qe(t, Re()), !(ae & 6) && (nr = Re() + 500, sn()));
      }
      break;
    case 13:
      Cn(function() {
        var r = Nt(e, 1);
        if (r !== null) {
          var i = He();
          Et(r, e, 1, i);
        }
      }), Xu(e, 1);
  }
};
gu = function(e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = He();
      Et(t, e, 134217728, n);
    }
    Xu(e, 134217728);
  }
};
dc = function(e) {
  if (e.tag === 13) {
    var t = tn(e), n = Nt(e, t);
    if (n !== null) {
      var r = He();
      Et(n, e, t, r);
    }
    Xu(e, t);
  }
};
pc = function() {
  return fe;
};
vc = function(e, t) {
  var n = fe;
  try {
    return fe = e, t();
  } finally {
    fe = n;
  }
};
_l = function(e, t, n) {
  switch (t) {
    case "input":
      if (ml(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = go(r);
            if (!i) throw Error(V(90));
            Qs(r), ml(r, i);
          }
        }
      }
      break;
    case "textarea":
      $s(e, n);
      break;
    case "select":
      t = n.value, t != null && Bn(e, !!n.multiple, t, false);
  }
};
ec = Qu;
tc = Cn;
var Sv = { usingClientEntryPoint: false, Events: [oi, Wn, go, Js, qs, Qu] }, yr = { findFiberByHostInstance: hn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Ev = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ic(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: yr.findFiberByHostInstance || gv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Oi.isDisabled && Oi.supportsFiber) try {
    vo = Oi.inject(Ev), Rt = Oi;
  } catch {
  }
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sv;
lt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ju(t)) throw Error(V(200));
  return yv(e, t, null, n);
};
lt.createRoot = function(e, t) {
  if (!Ju(e)) throw Error(V(299));
  var n = false, r = "", i = Uf;
  return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Yu(e, 1, false, null, null, n, false, r, i), e[Wt] = t.current, Qr(e.nodeType === 8 ? e.parentNode : e), new Zu(t);
};
lt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = ic(t), e = e === null ? null : e.stateNode, e;
};
lt.flushSync = function(e) {
  return Cn(e);
};
lt.hydrate = function(e, t, n) {
  if (!Oo(t)) throw Error(V(200));
  return To(null, e, t, true, n);
};
lt.hydrateRoot = function(e, t, n) {
  if (!Ju(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, i = false, o = "", l = Uf;
  if (n != null && (n.unstable_strictMode === true && (i = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Nf(t, null, e, 1, n ?? null, i, false, o, l), e[Wt] = t.current, Qr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ro(t);
};
lt.render = function(e, t, n) {
  if (!Oo(t)) throw Error(V(200));
  return To(null, e, t, false, n);
};
lt.unmountComponentAtNode = function(e) {
  if (!Oo(e)) throw Error(V(40));
  return e._reactRootContainer ? (Cn(function() {
    To(null, null, e, false, function() {
      e._reactRootContainer = null, e[Wt] = null;
    });
  }), true) : false;
};
lt.unstable_batchedUpdates = Qu;
lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Oo(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return To(e, t, n, false, r);
};
lt.version = "18.2.0-next-9e3b772b8-20220608";
function Ff() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ff);
  } catch (e) {
    console.error(e);
  }
}
Ff(), Ws.exports = lt;
var qu = Ws.exports;
const kv = iu(qu), wh = Ps({ __proto__: null, default: kv }, [qu]);
var _v, ds = qu;
_v = ds.createRoot, ds.hydrateRoot;
var ea = { exports: {} }, Yn = typeof Reflect == "object" ? Reflect : null, ps = Yn && typeof Yn.apply == "function" ? Yn.apply : function(t, n, r) {
  return Function.prototype.apply.call(t, n, r);
}, zi;
Yn && typeof Yn.ownKeys == "function" ? zi = Yn.ownKeys : Object.getOwnPropertySymbols ? zi = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : zi = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Cv(e) {
  console && console.warn && console.warn(e);
}
var zf = Number.isNaN || function(t) {
  return t !== t;
};
function pe() {
  pe.init.call(this);
}
ea.exports = pe;
ea.exports.once = Tv;
pe.EventEmitter = pe;
pe.prototype._events = void 0;
pe.prototype._eventsCount = 0;
pe.prototype._maxListeners = void 0;
var vs = 10;
function Do(e) {
  if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(pe, "defaultMaxListeners", { enumerable: true, get: function() {
  return vs;
}, set: function(e) {
  if (typeof e != "number" || e < 0 || zf(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
  vs = e;
} });
pe.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
pe.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || zf(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function xf(e) {
  return e._maxListeners === void 0 ? pe.defaultMaxListeners : e._maxListeners;
}
pe.prototype.getMaxListeners = function() {
  return xf(this);
};
pe.prototype.emit = function(t) {
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
  var a = o[t];
  if (a === void 0) return false;
  if (typeof a == "function") ps(a, this, n);
  else for (var s = a.length, g = Gf(a, s), r = 0; r < s; ++r) ps(g[r], this, n);
  return true;
};
function Vf(e, t, n, r) {
  var i, o, l;
  if (Do(n), o = e._events, o === void 0 ? (o = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), l = o[t]), l === void 0) l = o[t] = n, ++e._eventsCount;
  else if (typeof l == "function" ? l = o[t] = r ? [n, l] : [l, n] : r ? l.unshift(n) : l.push(n), i = xf(e), i > 0 && l.length > i && !l.warned) {
    l.warned = true;
    var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, Cv(u);
  }
  return e;
}
pe.prototype.addListener = function(t, n) {
  return Vf(this, t, n, false);
};
pe.prototype.on = pe.prototype.addListener;
pe.prototype.prependListener = function(t, n) {
  return Vf(this, t, n, true);
};
function Pv() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Bf(e, t, n) {
  var r = { fired: false, wrapFn: void 0, target: e, type: t, listener: n }, i = Pv.bind(r);
  return i.listener = n, r.wrapFn = i, i;
}
pe.prototype.once = function(t, n) {
  return Do(n), this.on(t, Bf(this, t, n)), this;
};
pe.prototype.prependOnceListener = function(t, n) {
  return Do(n), this.prependListener(t, Bf(this, t, n)), this;
};
pe.prototype.removeListener = function(t, n) {
  var r, i, o, l, u;
  if (Do(n), i = this._events, i === void 0) return this;
  if (r = i[t], r === void 0) return this;
  if (r === n || r.listener === n) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || n));
  else if (typeof r != "function") {
    for (o = -1, l = r.length - 1; l >= 0; l--) if (r[l] === n || r[l].listener === n) {
      u = r[l].listener, o = l;
      break;
    }
    if (o < 0) return this;
    o === 0 ? r.shift() : Rv(r, o), r.length === 1 && (i[t] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", t, u || n);
  }
  return this;
};
pe.prototype.off = pe.prototype.removeListener;
pe.prototype.removeAllListeners = function(t) {
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
function Hf(e, t, n) {
  var r = e._events;
  if (r === void 0) return [];
  var i = r[t];
  return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? Ov(i) : Gf(i, i.length);
}
pe.prototype.listeners = function(t) {
  return Hf(this, t, true);
};
pe.prototype.rawListeners = function(t) {
  return Hf(this, t, false);
};
pe.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Qf.call(e, t);
};
pe.prototype.listenerCount = Qf;
function Qf(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function") return 1;
    if (n !== void 0) return n.length;
  }
  return 0;
}
pe.prototype.eventNames = function() {
  return this._eventsCount > 0 ? zi(this._events) : [];
};
function Gf(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
  return n;
}
function Rv(e, t) {
  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
  e.pop();
}
function Ov(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
  return t;
}
function Tv(e, t) {
  return new Promise(function(n, r) {
    function i(l) {
      e.removeListener(t, o), r(l);
    }
    function o() {
      typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments));
    }
    $f(e, t, o, { once: true }), t !== "error" && Dv(e, i, { once: true });
  });
}
function Dv(e, t, n) {
  typeof e.on == "function" && $f(e, "error", t, n);
}
function $f(e, t, n, r) {
  if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function") e.addEventListener(t, function i(o) {
    r.once && e.removeEventListener(t, i), n(o);
  });
  else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Ao = ea.exports;
const Sh = iu(Ao);
var sl = {}, dn = {}, On = {};
Object.defineProperty(On, "__esModule", { value: true });
On.WidgetApiDirection = void 0;
On.invertedDirection = Av;
var Or = function(e) {
  return e.ToWidget = "toWidget", e.FromWidget = "fromWidget", e;
}({});
On.WidgetApiDirection = Or;
function Av(e) {
  if (e === Or.ToWidget) return Or.FromWidget;
  if (e === Or.FromWidget) return Or.ToWidget;
  throw new Error("Invalid direction");
}
var Tt = {};
Object.defineProperty(Tt, "__esModule", { value: true });
Tt.UnstableApiVersion = Tt.MatrixApiVersion = Tt.CurrentApiVersions = void 0;
var nu = function(e) {
  return e.Prerelease1 = "0.0.1", e.Prerelease2 = "0.0.2", e;
}({});
Tt.MatrixApiVersion = nu;
var et = function(e) {
  return e.MSC2762 = "org.matrix.msc2762", e.MSC2762_UPDATE_STATE = "org.matrix.msc2762_update_state", e.MSC2871 = "org.matrix.msc2871", e.MSC2873 = "org.matrix.msc2873", e.MSC2931 = "org.matrix.msc2931", e.MSC2974 = "org.matrix.msc2974", e.MSC2876 = "org.matrix.msc2876", e.MSC3819 = "org.matrix.msc3819", e.MSC3846 = "town.robin.msc3846", e.MSC3869 = "org.matrix.msc3869", e.MSC3973 = "org.matrix.msc3973", e.MSC4039 = "org.matrix.msc4039", e;
}({});
Tt.UnstableApiVersion = et;
var Mv = [nu.Prerelease1, nu.Prerelease2, et.MSC2762, et.MSC2762_UPDATE_STATE, et.MSC2871, et.MSC2873, et.MSC2931, et.MSC2974, et.MSC2876, et.MSC3819, et.MSC3846, et.MSC3869, et.MSC3973, et.MSC4039];
Tt.CurrentApiVersions = Mv;
var gr = {}, hs;
function ta() {
  if (hs) return gr;
  hs = 1, Object.defineProperty(gr, "__esModule", { value: true }), gr.PostmessageTransport = void 0;
  var e = Ao, t = Wo(), n = ["message"];
  function r(L) {
    "@babel/helpers - typeof";
    return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(D) {
      return typeof D;
    } : function(D) {
      return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D;
    }, r(L);
  }
  function i(L, D) {
    if (L == null) return {};
    var f = o(L, D), U, B;
    if (Object.getOwnPropertySymbols) {
      var te = Object.getOwnPropertySymbols(L);
      for (B = 0; B < te.length; B++) U = te[B], !(D.indexOf(U) >= 0) && Object.prototype.propertyIsEnumerable.call(L, U) && (f[U] = L[U]);
    }
    return f;
  }
  function o(L, D) {
    if (L == null) return {};
    var f = {}, U = Object.keys(L), B, te;
    for (te = 0; te < U.length; te++) B = U[te], !(D.indexOf(B) >= 0) && (f[B] = L[B]);
    return f;
  }
  function l(L, D) {
    var f = Object.keys(L);
    if (Object.getOwnPropertySymbols) {
      var U = Object.getOwnPropertySymbols(L);
      D && (U = U.filter(function(B) {
        return Object.getOwnPropertyDescriptor(L, B).enumerable;
      })), f.push.apply(f, U);
    }
    return f;
  }
  function u(L) {
    for (var D = 1; D < arguments.length; D++) {
      var f = arguments[D] != null ? arguments[D] : {};
      D % 2 ? l(Object(f), true).forEach(function(U) {
        h(L, U, f[U]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(L, Object.getOwnPropertyDescriptors(f)) : l(Object(f)).forEach(function(U) {
        Object.defineProperty(L, U, Object.getOwnPropertyDescriptor(f, U));
      });
    }
    return L;
  }
  function a(L, D) {
    if (!(L instanceof D)) throw new TypeError("Cannot call a class as a function");
  }
  function s(L, D) {
    for (var f = 0; f < D.length; f++) {
      var U = D[f];
      U.enumerable = U.enumerable || false, U.configurable = true, "value" in U && (U.writable = true), Object.defineProperty(L, S(U.key), U);
    }
  }
  function g(L, D, f) {
    return D && s(L.prototype, D), Object.defineProperty(L, "prototype", { writable: false }), L;
  }
  function k(L, D) {
    if (typeof D != "function" && D !== null) throw new TypeError("Super expression must either be null or a function");
    L.prototype = Object.create(D && D.prototype, { constructor: { value: L, writable: true, configurable: true } }), Object.defineProperty(L, "prototype", { writable: false }), D && m(L, D);
  }
  function m(L, D) {
    return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(U, B) {
      return U.__proto__ = B, U;
    }, m(L, D);
  }
  function M(L) {
    var D = ee();
    return function() {
      var U = w(L), B;
      if (D) {
        var te = w(this).constructor;
        B = Reflect.construct(U, arguments, te);
      } else B = U.apply(this, arguments);
      return R(this, B);
    };
  }
  function R(L, D) {
    if (D && (r(D) === "object" || typeof D == "function")) return D;
    if (D !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return b(L);
  }
  function b(L) {
    if (L === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return L;
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
  function w(L) {
    return w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(f) {
      return f.__proto__ || Object.getPrototypeOf(f);
    }, w(L);
  }
  function h(L, D, f) {
    return D = S(D), D in L ? Object.defineProperty(L, D, { value: f, enumerable: true, configurable: true, writable: true }) : L[D] = f, L;
  }
  function S(L) {
    var D = W(L, "string");
    return r(D) === "symbol" ? D : String(D);
  }
  function W(L, D) {
    if (r(L) !== "object" || L === null) return L;
    var f = L[Symbol.toPrimitive];
    if (f !== void 0) {
      var U = f.call(L, D);
      if (r(U) !== "object") return U;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (D === "string" ? String : Number)(L);
  }
  var N = function(L) {
    k(f, L);
    var D = M(f);
    function f(U, B, te, ue) {
      var se;
      return a(this, f), se = D.call(this), se.sendDirection = U, se.initialWidgetId = B, se.transportWindow = te, se.inboundWindow = ue, h(b(se), "strictOriginCheck", false), h(b(se), "targetOrigin", "*"), h(b(se), "timeoutSeconds", 10), h(b(se), "_ready", false), h(b(se), "_widgetId", null), h(b(se), "outboundRequests", /* @__PURE__ */ new Map()), h(b(se), "stopController", new AbortController()), se._widgetId = B, se;
    }
    return g(f, [{ key: "ready", get: function() {
      return this._ready;
    } }, { key: "widgetId", get: function() {
      return this._widgetId || null;
    } }, { key: "nextRequestId", get: function() {
      for (var B = "widgetapi-".concat(Date.now()), te = 0, ue = B; this.outboundRequests.has(ue); ) ue = "".concat(B, "-").concat(te++);
      return this.outboundRequests.set(ue, null), ue;
    } }, { key: "sendInternal", value: function(B) {
      console.log("[PostmessageTransport] Sending object to ".concat(this.targetOrigin, ": "), B), this.transportWindow.postMessage(B, this.targetOrigin);
    } }, { key: "reply", value: function(B, te) {
      return this.sendInternal(u(u({}, B), {}, { response: te }));
    } }, { key: "send", value: function(B, te) {
      return this.sendComplete(B, te).then(function(ue) {
        return ue.response;
      });
    } }, { key: "sendComplete", value: function(B, te) {
      var ue = this;
      if (!this.ready || !this.widgetId) return Promise.reject(new Error("Not ready or unknown widget ID"));
      var se = { api: this.sendDirection, widgetId: this.widgetId, requestId: this.nextRequestId, action: B, data: te };
      return B === t.WidgetApiToWidgetAction.UpdateVisibility && (se.visible = te.visible), new Promise(function($e, he) {
        var ht = function(I) {
          re(), $e(I);
        }, Ke = function(I) {
          re(), he(I);
        }, Q = setTimeout(function() {
          return Ke(new Error("Request timed out"));
        }, (ue.timeoutSeconds || 1) * 1e3), ne = function() {
          return Ke(new Error("Transport stopped"));
        };
        ue.stopController.signal.addEventListener("abort", ne);
        var re = function() {
          ue.outboundRequests.delete(se.requestId), clearTimeout(Q), ue.stopController.signal.removeEventListener("abort", ne);
        };
        ue.outboundRequests.set(se.requestId, { request: se, resolve: ht, reject: Ke }), ue.sendInternal(se);
      });
    } }, { key: "start", value: function() {
      var B = this;
      this.inboundWindow.addEventListener("message", function(te) {
        B.handleMessage(te);
      }), this._ready = true;
    } }, { key: "stop", value: function() {
      this._ready = false, this.stopController.abort();
    } }, { key: "handleMessage", value: function(B) {
      if (!this.stopController.signal.aborted && B.data && !(this.strictOriginCheck && B.origin !== window.origin)) {
        var te = B.data;
        if (!(!te.action || !te.requestId || !te.widgetId)) if (te.response) {
          if (te.api !== this.sendDirection) return;
          this.handleResponse(te);
        } else {
          var ue = te;
          if (ue.api !== (0, t.invertedDirection)(this.sendDirection)) return;
          this.handleRequest(ue);
        }
      }
    } }, { key: "handleRequest", value: function(B) {
      if (this.widgetId) {
        if (this.widgetId !== B.widgetId) return;
      } else this._widgetId = B.widgetId;
      this.emit("message", new CustomEvent("message", { detail: B }));
    } }, { key: "handleResponse", value: function(B) {
      if (B.widgetId === this.widgetId) {
        var te = this.outboundRequests.get(B.requestId);
        if (te) if ((0, t.isErrorResponse)(B.response)) {
          var ue = B.response.error, se = ue.message, $e = i(ue, n);
          te.reject(new t.WidgetApiResponseError(se, $e));
        } else te.resolve(B);
      }
    } }]), f;
  }(e.EventEmitter);
  return gr.PostmessageTransport = N, gr;
}
var ln = {};
Object.defineProperty(ln, "__esModule", { value: true });
ln.WidgetApiToWidgetAction = ln.WidgetApiFromWidgetAction = void 0;
var Lv = function(e) {
  return e.SupportedApiVersions = "supported_api_versions", e.Capabilities = "capabilities", e.NotifyCapabilities = "notify_capabilities", e.ThemeChange = "theme_change", e.LanguageChange = "language_change", e.TakeScreenshot = "screenshot", e.UpdateVisibility = "visibility", e.OpenIDCredentials = "openid_credentials", e.WidgetConfig = "widget_config", e.CloseModalWidget = "close_modal", e.ButtonClicked = "button_clicked", e.SendEvent = "send_event", e.SendToDevice = "send_to_device", e.UpdateState = "update_state", e.UpdateTurnServers = "update_turn_servers", e;
}({});
ln.WidgetApiToWidgetAction = Lv;
var bv = function(e) {
  return e.SupportedApiVersions = "supported_api_versions", e.ContentLoaded = "content_loaded", e.SendSticker = "m.sticker", e.UpdateAlwaysOnScreen = "set_always_on_screen", e.GetOpenIDCredentials = "get_openid", e.CloseModalWidget = "close_modal", e.OpenModalWidget = "open_modal", e.SetModalButtonEnabled = "set_button_enabled", e.SendEvent = "send_event", e.SendToDevice = "send_to_device", e.WatchTurnServers = "watch_turn_servers", e.UnwatchTurnServers = "unwatch_turn_servers", e.BeeperReadRoomAccountData = "com.beeper.read_room_account_data", e.MSC2876ReadEvents = "org.matrix.msc2876.read_events", e.MSC2931Navigate = "org.matrix.msc2931.navigate", e.MSC2974RenegotiateCapabilities = "org.matrix.msc2974.request_capabilities", e.MSC3869ReadRelations = "org.matrix.msc3869.read_relations", e.MSC3973UserDirectorySearch = "org.matrix.msc3973.user_directory_search", e.MSC4039GetMediaConfigAction = "org.matrix.msc4039.get_media_config", e.MSC4039UploadFileAction = "org.matrix.msc4039.upload_file", e.MSC4039DownloadFileAction = "org.matrix.msc4039.download_file", e.MSC4157UpdateDelayedEvent = "org.matrix.msc4157.update_delayed_event", e;
}({});
ln.WidgetApiFromWidgetAction = bv;
var lr = {};
Object.defineProperty(lr, "__esModule", { value: true });
lr.OpenIDRequestState = void 0;
var jv = function(e) {
  return e.Allowed = "allowed", e.Blocked = "blocked", e.PendingUserConfirmation = "request", e;
}({});
lr.OpenIDRequestState = jv;
var ui = {};
Object.defineProperty(ui, "__esModule", { value: true });
ui.MatrixWidgetType = void 0;
var Iv = function(e) {
  return e.Custom = "m.custom", e.JitsiMeet = "m.jitsi", e.Stickerpicker = "m.stickerpicker", e;
}({});
ui.MatrixWidgetType = Iv;
var ai = {};
Object.defineProperty(ai, "__esModule", { value: true });
ai.BuiltInModalButtonID = void 0;
var Wv = function(e) {
  return e.Close = "m.close", e;
}({});
ai.BuiltInModalButtonID = Wv;
var Dt = {};
Object.defineProperty(Dt, "__esModule", { value: true });
Dt.WidgetEventCapability = Dt.EventKind = Dt.EventDirection = void 0;
function ei(e) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ei(e);
}
function Nv(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Uv(e)) || t) {
      n && (e = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= e.length ? { done: true } : { done: false, value: e[r++] };
      }, e: function(s) {
        throw s;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = true, l = false, u;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var s = n.next();
    return o = s.done, s;
  }, e: function(s) {
    l = true, u = s;
  }, f: function() {
    try {
      !o && n.return != null && n.return();
    } finally {
      if (l) throw u;
    }
  } };
}
function Uv(e, t) {
  if (e) {
    if (typeof e == "string") return ms(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ms(e, t);
  }
}
function ms(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Fv(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ys(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, xv(r.key), r);
  }
}
function zv(e, t, n) {
  return t && ys(e.prototype, t), n && ys(e, n), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function xv(e) {
  var t = Vv(e, "string");
  return ei(t) === "symbol" ? t : String(t);
}
function Vv(e, t) {
  if (ei(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ei(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var tt = function(e) {
  return e.Event = "event", e.State = "state_event", e.ToDevice = "to_device", e.RoomAccount = "room_account", e;
}({});
Dt.EventKind = tt;
var Vt = function(e) {
  return e.Send = "send", e.Receive = "receive", e;
}({});
Dt.EventDirection = Vt;
var Bv = function() {
  function e(t, n, r, i, o) {
    Fv(this, e), this.direction = t, this.eventType = n, this.kind = r, this.keyStr = i, this.raw = o;
  }
  return zv(e, [{ key: "matchesAsStateEvent", value: function(n, r, i) {
    return this.kind !== tt.State || this.direction !== n || this.eventType !== r ? false : this.keyStr === null || this.keyStr === i;
  } }, { key: "matchesAsToDeviceEvent", value: function(n, r) {
    return !(this.kind !== tt.ToDevice || this.direction !== n || this.eventType !== r);
  } }, { key: "matchesAsRoomEvent", value: function(n, r) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (this.kind !== tt.Event || this.direction !== n || this.eventType !== r) return false;
    if (this.eventType === "m.room.message") {
      if (this.keyStr === null || this.keyStr === i) return true;
    } else return true;
    return false;
  } }, { key: "matchesAsRoomAccountData", value: function(n, r) {
    return !(this.kind !== tt.RoomAccount || this.direction !== n || this.eventType !== r);
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
    var r = [], i = Nv(n), o;
    try {
      for (i.s(); !(o = i.n()).done; ) {
        var l = o.value, u = null, a = void 0, s = null;
        if (l.startsWith("org.matrix.msc2762.send.event:") ? (u = Vt.Send, s = tt.Event, a = l.substring(30)) : l.startsWith("org.matrix.msc2762.send.state_event:") ? (u = Vt.Send, s = tt.State, a = l.substring(36)) : l.startsWith("org.matrix.msc3819.send.to_device:") ? (u = Vt.Send, s = tt.ToDevice, a = l.substring(34)) : l.startsWith("org.matrix.msc2762.receive.event:") ? (u = Vt.Receive, s = tt.Event, a = l.substring(33)) : l.startsWith("org.matrix.msc2762.receive.state_event:") ? (u = Vt.Receive, s = tt.State, a = l.substring(39)) : l.startsWith("org.matrix.msc3819.receive.to_device:") ? (u = Vt.Receive, s = tt.ToDevice, a = l.substring(37)) : l.startsWith("com.beeper.capabilities.receive.room_account_data:") && (u = Vt.Receive, s = tt.RoomAccount, a = l.substring(50)), !(u === null || s === null || a === void 0)) {
          var g = a.startsWith("m.room.message#") || s === tt.State, k = null;
          if (a.includes("#") && g) {
            var m = a.split("#"), M = m.findIndex(function(R) {
              return !R.endsWith("\\");
            });
            a = m.slice(0, M + 1).map(function(R) {
              return R.endsWith("\\") ? R.substring(0, R.length - 1) : R;
            }).join("#"), k = m.slice(M + 1).join("#");
          }
          r.push(new e(u, a, s, k, l));
        }
      }
    } catch (R) {
      i.e(R);
    } finally {
      i.f();
    }
    return r;
  } }]), e;
}();
Dt.WidgetEventCapability = Bv;
var ur = {};
Object.defineProperty(ur, "__esModule", { value: true });
ur.Symbols = void 0;
var Hv = function(e) {
  return e.AnyRoom = "*", e;
}({});
ur.Symbols = Hv;
var gs;
function Qv() {
  if (gs) return dn;
  gs = 1;
  function e(I) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(H) {
      return typeof H;
    } : function(H) {
      return H && typeof Symbol == "function" && H.constructor === Symbol && H !== Symbol.prototype ? "symbol" : typeof H;
    }, e(I);
  }
  Object.defineProperty(dn, "__esModule", { value: true }), dn.WidgetApiResponseError = dn.WidgetApi = void 0;
  var t = Ao, n = On, r = Tt, i = ta(), o = ln, l = lr, u = ui, a = ai, s = Dt, g = ur;
  function k() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    k = function() {
      return I;
    };
    var I = {}, H = Object.prototype, C = H.hasOwnProperty, y = Object.defineProperty || function($, z, T) {
      $[z] = T.value;
    }, v = typeof Symbol == "function" ? Symbol : {}, p = v.iterator || "@@iterator", d = v.asyncIterator || "@@asyncIterator", _ = v.toStringTag || "@@toStringTag";
    function c($, z, T) {
      return Object.defineProperty($, z, { value: T, enumerable: true, configurable: true, writable: true }), $[z];
    }
    try {
      c({}, "");
    } catch {
      c = function(T, A, j) {
        return T[A] = j;
      };
    }
    function O($, z, T, A) {
      var j = z && z.prototype instanceof F ? z : F, x = Object.create(j.prototype), Z = new sr(A || []);
      return y(x, "_invoke", { value: q($, T, Z) }), x;
    }
    function E($, z, T) {
      try {
        return { type: "normal", arg: $.call(z, T) };
      } catch (A) {
        return { type: "throw", arg: A };
      }
    }
    I.wrap = O;
    var P = {};
    function F() {
    }
    function Y() {
    }
    function G() {
    }
    var de = {};
    c(de, p, function() {
      return this;
    });
    var ie = Object.getPrototypeOf, X = ie && ie(ie(cn([])));
    X && X !== H && C.call(X, p) && (de = X);
    var ge = G.prototype = F.prototype = Object.create(de);
    function Ne($) {
      ["next", "throw", "return"].forEach(function(z) {
        c($, z, function(T) {
          return this._invoke(z, T);
        });
      });
    }
    function Ae($, z) {
      function T(j, x, Z, J) {
        var oe = E($[j], $, x);
        if (oe.type !== "throw") {
          var Se = oe.arg, Ee = Se.value;
          return Ee && e(Ee) == "object" && C.call(Ee, "__await") ? z.resolve(Ee.__await).then(function(Ve) {
            T("next", Ve, Z, J);
          }, function(Ve) {
            T("throw", Ve, Z, J);
          }) : z.resolve(Ee).then(function(Ve) {
            Se.value = Ve, Z(Se);
          }, function(Ve) {
            return T("throw", Ve, Z, J);
          });
        }
        J(oe.arg);
      }
      var A;
      y(this, "_invoke", { value: function(x, Z) {
        function J() {
          return new z(function(oe, Se) {
            T(x, Z, oe, Se);
          });
        }
        return A = A ? A.then(J, J) : J();
      } });
    }
    function q($, z, T) {
      var A = "suspendedStart";
      return function(j, x) {
        if (A === "executing") throw new Error("Generator is already running");
        if (A === "completed") {
          if (j === "throw") throw x;
          return Dn();
        }
        for (T.method = j, T.arg = x; ; ) {
          var Z = T.delegate;
          if (Z) {
            var J = be(Z, T);
            if (J) {
              if (J === P) continue;
              return J;
            }
          }
          if (T.method === "next") T.sent = T._sent = T.arg;
          else if (T.method === "throw") {
            if (A === "suspendedStart") throw A = "completed", T.arg;
            T.dispatchException(T.arg);
          } else T.method === "return" && T.abrupt("return", T.arg);
          A = "executing";
          var oe = E($, z, T);
          if (oe.type === "normal") {
            if (A = T.done ? "completed" : "suspendedYield", oe.arg === P) continue;
            return { value: oe.arg, done: T.done };
          }
          oe.type === "throw" && (A = "completed", T.method = "throw", T.arg = oe.arg);
        }
      };
    }
    function be($, z) {
      var T = z.method, A = $.iterator[T];
      if (A === void 0) return z.delegate = null, T === "throw" && $.iterator.return && (z.method = "return", z.arg = void 0, be($, z), z.method === "throw") || T !== "return" && (z.method = "throw", z.arg = new TypeError("The iterator does not provide a '" + T + "' method")), P;
      var j = E(A, $.iterator, z.arg);
      if (j.type === "throw") return z.method = "throw", z.arg = j.arg, z.delegate = null, P;
      var x = j.arg;
      return x ? x.done ? (z[$.resultName] = x.value, z.next = $.nextLoc, z.method !== "return" && (z.method = "next", z.arg = void 0), z.delegate = null, P) : x : (z.method = "throw", z.arg = new TypeError("iterator result is not an object"), z.delegate = null, P);
    }
    function ar($) {
      var z = { tryLoc: $[0] };
      1 in $ && (z.catchLoc = $[1]), 2 in $ && (z.finallyLoc = $[2], z.afterLoc = $[3]), this.tryEntries.push(z);
    }
    function Tn($) {
      var z = $.completion || {};
      z.type = "normal", delete z.arg, $.completion = z;
    }
    function sr($) {
      this.tryEntries = [{ tryLoc: "root" }], $.forEach(ar, this), this.reset(true);
    }
    function cn($) {
      if ($) {
        var z = $[p];
        if (z) return z.call($);
        if (typeof $.next == "function") return $;
        if (!isNaN($.length)) {
          var T = -1, A = function j() {
            for (; ++T < $.length; ) if (C.call($, T)) return j.value = $[T], j.done = false, j;
            return j.value = void 0, j.done = true, j;
          };
          return A.next = A;
        }
      }
      return { next: Dn };
    }
    function Dn() {
      return { value: void 0, done: true };
    }
    return Y.prototype = G, y(ge, "constructor", { value: G, configurable: true }), y(G, "constructor", { value: Y, configurable: true }), Y.displayName = c(G, _, "GeneratorFunction"), I.isGeneratorFunction = function($) {
      var z = typeof $ == "function" && $.constructor;
      return !!z && (z === Y || (z.displayName || z.name) === "GeneratorFunction");
    }, I.mark = function($) {
      return Object.setPrototypeOf ? Object.setPrototypeOf($, G) : ($.__proto__ = G, c($, _, "GeneratorFunction")), $.prototype = Object.create(ge), $;
    }, I.awrap = function($) {
      return { __await: $ };
    }, Ne(Ae.prototype), c(Ae.prototype, d, function() {
      return this;
    }), I.AsyncIterator = Ae, I.async = function($, z, T, A, j) {
      j === void 0 && (j = Promise);
      var x = new Ae(O($, z, T, A), j);
      return I.isGeneratorFunction(z) ? x : x.next().then(function(Z) {
        return Z.done ? Z.value : x.next();
      });
    }, Ne(ge), c(ge, _, "Generator"), c(ge, p, function() {
      return this;
    }), c(ge, "toString", function() {
      return "[object Generator]";
    }), I.keys = function($) {
      var z = Object($), T = [];
      for (var A in z) T.push(A);
      return T.reverse(), function j() {
        for (; T.length; ) {
          var x = T.pop();
          if (x in z) return j.value = x, j.done = false, j;
        }
        return j.done = true, j;
      };
    }, I.values = cn, sr.prototype = { constructor: sr, reset: function(z) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(Tn), !z) for (var T in this) T.charAt(0) === "t" && C.call(this, T) && !isNaN(+T.slice(1)) && (this[T] = void 0);
    }, stop: function() {
      this.done = true;
      var z = this.tryEntries[0].completion;
      if (z.type === "throw") throw z.arg;
      return this.rval;
    }, dispatchException: function(z) {
      if (this.done) throw z;
      var T = this;
      function A(Se, Ee) {
        return Z.type = "throw", Z.arg = z, T.next = Se, Ee && (T.method = "next", T.arg = void 0), !!Ee;
      }
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var x = this.tryEntries[j], Z = x.completion;
        if (x.tryLoc === "root") return A("end");
        if (x.tryLoc <= this.prev) {
          var J = C.call(x, "catchLoc"), oe = C.call(x, "finallyLoc");
          if (J && oe) {
            if (this.prev < x.catchLoc) return A(x.catchLoc, true);
            if (this.prev < x.finallyLoc) return A(x.finallyLoc);
          } else if (J) {
            if (this.prev < x.catchLoc) return A(x.catchLoc, true);
          } else {
            if (!oe) throw new Error("try statement without catch or finally");
            if (this.prev < x.finallyLoc) return A(x.finallyLoc);
          }
        }
      }
    }, abrupt: function(z, T) {
      for (var A = this.tryEntries.length - 1; A >= 0; --A) {
        var j = this.tryEntries[A];
        if (j.tryLoc <= this.prev && C.call(j, "finallyLoc") && this.prev < j.finallyLoc) {
          var x = j;
          break;
        }
      }
      x && (z === "break" || z === "continue") && x.tryLoc <= T && T <= x.finallyLoc && (x = null);
      var Z = x ? x.completion : {};
      return Z.type = z, Z.arg = T, x ? (this.method = "next", this.next = x.finallyLoc, P) : this.complete(Z);
    }, complete: function(z, T) {
      if (z.type === "throw") throw z.arg;
      return z.type === "break" || z.type === "continue" ? this.next = z.arg : z.type === "return" ? (this.rval = this.arg = z.arg, this.method = "return", this.next = "end") : z.type === "normal" && T && (this.next = T), P;
    }, finish: function(z) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var A = this.tryEntries[T];
        if (A.finallyLoc === z) return this.complete(A.completion, A.afterLoc), Tn(A), P;
      }
    }, catch: function(z) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var A = this.tryEntries[T];
        if (A.tryLoc === z) {
          var j = A.completion;
          if (j.type === "throw") {
            var x = j.arg;
            Tn(A);
          }
          return x;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(z, T, A) {
      return this.delegate = { iterator: cn(z), resultName: T, nextLoc: A }, this.method === "next" && (this.arg = void 0), P;
    } }, I;
  }
  function m(I, H, C, y, v, p, d) {
    try {
      var _ = I[p](d), c = _.value;
    } catch (O) {
      C(O);
      return;
    }
    _.done ? H(c) : Promise.resolve(c).then(y, v);
  }
  function M(I) {
    return function() {
      var H = this, C = arguments;
      return new Promise(function(y, v) {
        var p = I.apply(H, C);
        function d(c) {
          m(p, y, v, d, _, "next", c);
        }
        function _(c) {
          m(p, y, v, d, _, "throw", c);
        }
        d(void 0);
      });
    };
  }
  function R(I, H) {
    var C = Object.keys(I);
    if (Object.getOwnPropertySymbols) {
      var y = Object.getOwnPropertySymbols(I);
      H && (y = y.filter(function(v) {
        return Object.getOwnPropertyDescriptor(I, v).enumerable;
      })), C.push.apply(C, y);
    }
    return C;
  }
  function b(I) {
    for (var H = 1; H < arguments.length; H++) {
      var C = arguments[H] != null ? arguments[H] : {};
      H % 2 ? R(Object(C), true).forEach(function(y) {
        ee(I, y, C[y]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(C)) : R(Object(C)).forEach(function(y) {
        Object.defineProperty(I, y, Object.getOwnPropertyDescriptor(C, y));
      });
    }
    return I;
  }
  function ee(I, H, C) {
    return H = S(H), H in I ? Object.defineProperty(I, H, { value: C, enumerable: true, configurable: true, writable: true }) : I[H] = C, I;
  }
  function w(I, H) {
    for (var C = 0; C < H.length; C++) {
      var y = H[C];
      y.enumerable = y.enumerable || false, y.configurable = true, "value" in y && (y.writable = true), Object.defineProperty(I, S(y.key), y);
    }
  }
  function h(I, H, C) {
    return H && w(I.prototype, H), Object.defineProperty(I, "prototype", { writable: false }), I;
  }
  function S(I) {
    var H = W(I, "string");
    return e(H) === "symbol" ? H : String(H);
  }
  function W(I, H) {
    if (e(I) !== "object" || I === null) return I;
    var C = I[Symbol.toPrimitive];
    if (C !== void 0) {
      var y = C.call(I, H);
      if (e(y) !== "object") return y;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (H === "string" ? String : Number)(I);
  }
  function N(I, H) {
    if (!(I instanceof H)) throw new TypeError("Cannot call a class as a function");
  }
  function L(I, H) {
    if (typeof H != "function" && H !== null) throw new TypeError("Super expression must either be null or a function");
    I.prototype = Object.create(H && H.prototype, { constructor: { value: I, writable: true, configurable: true } }), Object.defineProperty(I, "prototype", { writable: false }), H && $e(I, H);
  }
  function D(I) {
    var H = ue();
    return function() {
      var y = he(I), v;
      if (H) {
        var p = he(this).constructor;
        v = Reflect.construct(y, arguments, p);
      } else v = y.apply(this, arguments);
      return f(this, v);
    };
  }
  function f(I, H) {
    if (H && (e(H) === "object" || typeof H == "function")) return H;
    if (H !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return U(I);
  }
  function U(I) {
    if (I === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return I;
  }
  function B(I) {
    var H = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return B = function(y) {
      if (y === null || !se(y)) return y;
      if (typeof y != "function") throw new TypeError("Super expression must either be null or a function");
      if (typeof H < "u") {
        if (H.has(y)) return H.get(y);
        H.set(y, v);
      }
      function v() {
        return te(y, arguments, he(this).constructor);
      }
      return v.prototype = Object.create(y.prototype, { constructor: { value: v, enumerable: false, writable: true, configurable: true } }), $e(v, y);
    }, B(I);
  }
  function te(I, H, C) {
    return ue() ? te = Reflect.construct.bind() : te = function(v, p, d) {
      var _ = [null];
      _.push.apply(_, p);
      var c = Function.bind.apply(v, _), O = new c();
      return d && $e(O, d.prototype), O;
    }, te.apply(null, arguments);
  }
  function ue() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function se(I) {
    return Function.toString.call(I).indexOf("[native code]") !== -1;
  }
  function $e(I, H) {
    return $e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, v) {
      return y.__proto__ = v, y;
    }, $e(I, H);
  }
  function he(I) {
    return he = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(C) {
      return C.__proto__ || Object.getPrototypeOf(C);
    }, he(I);
  }
  function ht(I) {
    return new ne(I, 0);
  }
  function Ke(I) {
    return function() {
      return new Q(I.apply(this, arguments));
    };
  }
  function Q(I) {
    var H, C;
    function y(p, d) {
      try {
        var _ = I[p](d), c = _.value, O = c instanceof ne;
        Promise.resolve(O ? c.v : c).then(function(E) {
          if (O) {
            var P = p === "return" ? "return" : "next";
            if (!c.k || E.done) return y(P, E);
            E = I[P](E).value;
          }
          v(_.done ? "return" : "normal", E);
        }, function(E) {
          y("throw", E);
        });
      } catch (E) {
        v("throw", E);
      }
    }
    function v(p, d) {
      switch (p) {
        case "return":
          H.resolve({ value: d, done: true });
          break;
        case "throw":
          H.reject(d);
          break;
        default:
          H.resolve({ value: d, done: false });
      }
      (H = H.next) ? y(H.key, H.arg) : C = null;
    }
    this._invoke = function(p, d) {
      return new Promise(function(_, c) {
        var O = { key: p, arg: d, resolve: _, reject: c, next: null };
        C ? C = C.next = O : (H = C = O, y(p, d));
      });
    }, typeof I.return != "function" && (this.return = void 0);
  }
  Q.prototype[typeof Symbol == "function" && Symbol.asyncIterator || "@@asyncIterator"] = function() {
    return this;
  }, Q.prototype.next = function(I) {
    return this._invoke("next", I);
  }, Q.prototype.throw = function(I) {
    return this._invoke("throw", I);
  }, Q.prototype.return = function(I) {
    return this._invoke("return", I);
  };
  function ne(I, H) {
    this.v = I, this.k = H;
  }
  var re = function(I) {
    L(C, I);
    var H = D(C);
    function C(y, v) {
      var p;
      return N(this, C), p = H.call(this, y), p.data = v, p;
    }
    return h(C);
  }(B(Error));
  dn.WidgetApiResponseError = re, re.prototype.name = re.name;
  var ce = function(I) {
    L(C, I);
    var H = D(C);
    function C() {
      var y, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (N(this, C), y = H.call(this), y.clientOrigin = p, ee(U(y), "transport", void 0), ee(U(y), "capabilitiesFinished", false), ee(U(y), "supportsMSC2974Renegotiate", false), ee(U(y), "requestedCapabilities", []), ee(U(y), "approvedCapabilities", void 0), ee(U(y), "cachedClientVersions", void 0), ee(U(y), "turnServerWatchers", 0), !window.parent) throw new Error("No parent window. This widget doesn't appear to be embedded properly.");
      return y.transport = new i.PostmessageTransport(n.WidgetApiDirection.FromWidget, v, window.parent, window), y.transport.targetOrigin = p, y.transport.on("message", y.handleMessage.bind(U(y))), y;
    }
    return h(C, [{ key: "hasCapability", value: function(v) {
      return Array.isArray(this.approvedCapabilities) ? this.approvedCapabilities.includes(v) : this.requestedCapabilities.includes(v);
    } }, { key: "requestCapability", value: function(v) {
      if (this.capabilitiesFinished && !this.supportsMSC2974Renegotiate) throw new Error("Capabilities have already been negotiated");
      this.requestedCapabilities.push(v);
    } }, { key: "requestCapabilities", value: function(v) {
      var p = this;
      v.forEach(function(d) {
        return p.requestCapability(d);
      });
    } }, { key: "requestCapabilityForRoomTimeline", value: function(v) {
      this.requestCapability("org.matrix.msc2762.timeline:".concat(v));
    } }, { key: "requestCapabilityToSendState", value: function(v, p) {
      this.requestCapability(s.WidgetEventCapability.forStateEvent(s.EventDirection.Send, v, p).raw);
    } }, { key: "requestCapabilityToReceiveState", value: function(v, p) {
      this.requestCapability(s.WidgetEventCapability.forStateEvent(s.EventDirection.Receive, v, p).raw);
    } }, { key: "requestCapabilityToSendToDevice", value: function(v) {
      this.requestCapability(s.WidgetEventCapability.forToDeviceEvent(s.EventDirection.Send, v).raw);
    } }, { key: "requestCapabilityToReceiveToDevice", value: function(v) {
      this.requestCapability(s.WidgetEventCapability.forToDeviceEvent(s.EventDirection.Receive, v).raw);
    } }, { key: "requestCapabilityToSendEvent", value: function(v) {
      this.requestCapability(s.WidgetEventCapability.forRoomEvent(s.EventDirection.Send, v).raw);
    } }, { key: "requestCapabilityToReceiveEvent", value: function(v) {
      this.requestCapability(s.WidgetEventCapability.forRoomEvent(s.EventDirection.Receive, v).raw);
    } }, { key: "requestCapabilityToSendMessage", value: function(v) {
      this.requestCapability(s.WidgetEventCapability.forRoomMessageEvent(s.EventDirection.Send, v).raw);
    } }, { key: "requestCapabilityToReceiveMessage", value: function(v) {
      this.requestCapability(s.WidgetEventCapability.forRoomMessageEvent(s.EventDirection.Receive, v).raw);
    } }, { key: "requestCapabilityToReceiveRoomAccountData", value: function(v) {
      this.requestCapability(s.WidgetEventCapability.forRoomAccountData(s.EventDirection.Receive, v).raw);
    } }, { key: "requestOpenIDConnectToken", value: function() {
      var v = this;
      return new Promise(function(p, d) {
        v.transport.sendComplete(o.WidgetApiFromWidgetAction.GetOpenIDCredentials, {}).then(function(_) {
          var c = _.response;
          if (c.state === l.OpenIDRequestState.Allowed) p(c);
          else if (c.state === l.OpenIDRequestState.Blocked) d(new Error("User declined to verify their identity"));
          else if (c.state === l.OpenIDRequestState.PendingUserConfirmation) {
            var O = function E(P) {
              P.preventDefault();
              var F = P.detail;
              F.data.original_request_id === _.requestId && (F.data.state === l.OpenIDRequestState.Allowed ? (p(F.data), v.transport.reply(F, {})) : F.data.state === l.OpenIDRequestState.Blocked ? (d(new Error("User declined to verify their identity")), v.transport.reply(F, {})) : (d(new Error("Invalid state on reply: " + c.state)), v.transport.reply(F, { error: { message: "Invalid state" } })), v.off("action:".concat(o.WidgetApiToWidgetAction.OpenIDCredentials), E));
            };
            v.on("action:".concat(o.WidgetApiToWidgetAction.OpenIDCredentials), O);
          } else d(new Error("Invalid state: " + c.state));
        }).catch(d);
      });
    } }, { key: "updateRequestedCapabilities", value: function() {
      return this.transport.send(o.WidgetApiFromWidgetAction.MSC2974RenegotiateCapabilities, { capabilities: this.requestedCapabilities }).then();
    } }, { key: "sendContentLoaded", value: function() {
      return this.transport.send(o.WidgetApiFromWidgetAction.ContentLoaded, {}).then();
    } }, { key: "sendSticker", value: function(v) {
      return this.transport.send(o.WidgetApiFromWidgetAction.SendSticker, v).then();
    } }, { key: "setAlwaysOnScreen", value: function(v) {
      return this.transport.send(o.WidgetApiFromWidgetAction.UpdateAlwaysOnScreen, { value: v }).then(function(p) {
        return p.success;
      });
    } }, { key: "openModalWidget", value: function(v, p) {
      var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], _ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : u.MatrixWidgetType.Custom;
      return this.transport.send(o.WidgetApiFromWidgetAction.OpenModalWidget, { type: c, url: v, name: p, buttons: d, data: _ }).then();
    } }, { key: "closeModalWidget", value: function() {
      var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.transport.send(o.WidgetApiFromWidgetAction.CloseModalWidget, v).then();
    } }, { key: "sendRoomEvent", value: function(v, p, d, _, c) {
      return this.sendEvent(v, void 0, p, d, _, c);
    } }, { key: "sendStateEvent", value: function(v, p, d, _, c, O) {
      return this.sendEvent(v, p, d, _, c, O);
    } }, { key: "sendEvent", value: function(v, p, d, _, c, O) {
      return this.transport.send(o.WidgetApiFromWidgetAction.SendEvent, b(b(b(b({ type: v, content: d }, p !== void 0 && { state_key: p }), _ !== void 0 && { room_id: _ }), c !== void 0 && { delay: c }), O !== void 0 && { parent_delay_id: O }));
    } }, { key: "updateDelayedEvent", value: function(v, p) {
      return this.transport.send(o.WidgetApiFromWidgetAction.MSC4157UpdateDelayedEvent, { delay_id: v, action: p });
    } }, { key: "sendToDevice", value: function(v, p, d) {
      return this.transport.send(o.WidgetApiFromWidgetAction.SendToDevice, { type: v, encrypted: p, messages: d });
    } }, { key: "readRoomAccountData", value: function(v, p) {
      var d = { type: v };
      return p && (p.includes(g.Symbols.AnyRoom) ? d.room_ids = g.Symbols.AnyRoom : d.room_ids = p), this.transport.send(o.WidgetApiFromWidgetAction.BeeperReadRoomAccountData, d).then(function(_) {
        return _.events;
      });
    } }, { key: "readRoomEvents", value: function(v, p, d, _, c) {
      var O = { type: v, msgtype: d };
      return p !== void 0 && (O.limit = p), _ && (_.includes(g.Symbols.AnyRoom) ? O.room_ids = g.Symbols.AnyRoom : O.room_ids = _), c && (O.since = c), this.transport.send(o.WidgetApiFromWidgetAction.MSC2876ReadEvents, O).then(function(E) {
        return E.events;
      });
    } }, { key: "readEventRelations", value: function() {
      var y = M(k().mark(function p(d, _, c, O, E, P, F, Y) {
        var G, de;
        return k().wrap(function(X) {
          for (; ; ) switch (X.prev = X.next) {
            case 0:
              return X.next = 2, this.getClientVersions();
            case 2:
              if (G = X.sent, G.includes(r.UnstableApiVersion.MSC3869)) {
                X.next = 5;
                break;
              }
              throw new Error("The read_relations action is not supported by the client.");
            case 5:
              return de = { event_id: d, rel_type: c, event_type: O, room_id: _, to: F, from: P, limit: E, direction: Y }, X.abrupt("return", this.transport.send(o.WidgetApiFromWidgetAction.MSC3869ReadRelations, de));
            case 7:
            case "end":
              return X.stop();
          }
        }, p, this);
      }));
      function v(p, d, _, c, O, E, P, F) {
        return y.apply(this, arguments);
      }
      return v;
    }() }, { key: "readStateEvents", value: function(v, p, d, _) {
      var c = { type: v, state_key: d === void 0 ? true : d };
      return p !== void 0 && (c.limit = p), _ && (_.includes(g.Symbols.AnyRoom) ? c.room_ids = g.Symbols.AnyRoom : c.room_ids = _), this.transport.send(o.WidgetApiFromWidgetAction.MSC2876ReadEvents, c).then(function(O) {
        return O.events;
      });
    } }, { key: "setModalButtonEnabled", value: function(v, p) {
      if (v === a.BuiltInModalButtonID.Close) throw new Error("The close button cannot be disabled");
      return this.transport.send(o.WidgetApiFromWidgetAction.SetModalButtonEnabled, { button: v, enabled: p }).then();
    } }, { key: "navigateTo", value: function(v) {
      if (!v || !v.startsWith("https://matrix.to/#")) throw new Error("Invalid matrix.to URI");
      return this.transport.send(o.WidgetApiFromWidgetAction.MSC2931Navigate, { uri: v }).then();
    } }, { key: "getTurnServers", value: function() {
      var v = this;
      return Ke(k().mark(function p() {
        var d, _;
        return k().wrap(function(O) {
          for (; ; ) switch (O.prev = O.next) {
            case 0:
              if (_ = function() {
                var E = M(k().mark(function P(F) {
                  return k().wrap(function(G) {
                    for (; ; ) switch (G.prev = G.next) {
                      case 0:
                        return F.preventDefault(), d(F.detail.data), G.next = 4, v.transport.reply(F.detail, {});
                      case 4:
                      case "end":
                        return G.stop();
                    }
                  }, P);
                }));
                return function(F) {
                  return E.apply(this, arguments);
                };
              }(), v.on("action:".concat(o.WidgetApiToWidgetAction.UpdateTurnServers), _), v.turnServerWatchers !== 0) {
                O.next = 12;
                break;
              }
              return O.prev = 3, O.next = 6, ht(v.transport.send(o.WidgetApiFromWidgetAction.WatchTurnServers, {}));
            case 6:
              O.next = 12;
              break;
            case 8:
              throw O.prev = 8, O.t0 = O.catch(3), v.off("action:".concat(o.WidgetApiToWidgetAction.UpdateTurnServers), _), O.t0;
            case 12:
              v.turnServerWatchers++, O.prev = 13;
            case 14:
              return O.next = 17, ht(new Promise(function(E) {
                return d = E;
              }));
            case 17:
              return O.next = 19, O.sent;
            case 19:
              O.next = 14;
              break;
            case 21:
              if (O.prev = 21, v.off("action:".concat(o.WidgetApiToWidgetAction.UpdateTurnServers), _), v.turnServerWatchers--, v.turnServerWatchers !== 0) {
                O.next = 27;
                break;
              }
              return O.next = 27, ht(v.transport.send(o.WidgetApiFromWidgetAction.UnwatchTurnServers, {}));
            case 27:
              return O.finish(21);
            case 28:
            case "end":
              return O.stop();
          }
        }, p, null, [[3, 8], [13, , 21, 28]]);
      }))();
    } }, { key: "searchUserDirectory", value: function() {
      var y = M(k().mark(function p(d, _) {
        var c, O;
        return k().wrap(function(P) {
          for (; ; ) switch (P.prev = P.next) {
            case 0:
              return P.next = 2, this.getClientVersions();
            case 2:
              if (c = P.sent, c.includes(r.UnstableApiVersion.MSC3973)) {
                P.next = 5;
                break;
              }
              throw new Error("The user_directory_search action is not supported by the client.");
            case 5:
              return O = { search_term: d, limit: _ }, P.abrupt("return", this.transport.send(o.WidgetApiFromWidgetAction.MSC3973UserDirectorySearch, O));
            case 7:
            case "end":
              return P.stop();
          }
        }, p, this);
      }));
      function v(p, d) {
        return y.apply(this, arguments);
      }
      return v;
    }() }, { key: "getMediaConfig", value: function() {
      var y = M(k().mark(function p() {
        var d, _;
        return k().wrap(function(O) {
          for (; ; ) switch (O.prev = O.next) {
            case 0:
              return O.next = 2, this.getClientVersions();
            case 2:
              if (d = O.sent, d.includes(r.UnstableApiVersion.MSC4039)) {
                O.next = 5;
                break;
              }
              throw new Error("The get_media_config action is not supported by the client.");
            case 5:
              return _ = {}, O.abrupt("return", this.transport.send(o.WidgetApiFromWidgetAction.MSC4039GetMediaConfigAction, _));
            case 7:
            case "end":
              return O.stop();
          }
        }, p, this);
      }));
      function v() {
        return y.apply(this, arguments);
      }
      return v;
    }() }, { key: "uploadFile", value: function() {
      var y = M(k().mark(function p(d) {
        var _, c;
        return k().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              return E.next = 2, this.getClientVersions();
            case 2:
              if (_ = E.sent, _.includes(r.UnstableApiVersion.MSC4039)) {
                E.next = 5;
                break;
              }
              throw new Error("The upload_file action is not supported by the client.");
            case 5:
              return c = { file: d }, E.abrupt("return", this.transport.send(o.WidgetApiFromWidgetAction.MSC4039UploadFileAction, c));
            case 7:
            case "end":
              return E.stop();
          }
        }, p, this);
      }));
      function v(p) {
        return y.apply(this, arguments);
      }
      return v;
    }() }, { key: "downloadFile", value: function() {
      var y = M(k().mark(function p(d) {
        var _, c;
        return k().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              return E.next = 2, this.getClientVersions();
            case 2:
              if (_ = E.sent, _.includes(r.UnstableApiVersion.MSC4039)) {
                E.next = 5;
                break;
              }
              throw new Error("The download_file action is not supported by the client.");
            case 5:
              return c = { content_uri: d }, E.abrupt("return", this.transport.send(o.WidgetApiFromWidgetAction.MSC4039DownloadFileAction, c));
            case 7:
            case "end":
              return E.stop();
          }
        }, p, this);
      }));
      function v(p) {
        return y.apply(this, arguments);
      }
      return v;
    }() }, { key: "start", value: function() {
      var v = this;
      this.transport.start(), this.getClientVersions().then(function(p) {
        p.includes(r.UnstableApiVersion.MSC2974) && (v.supportsMSC2974Renegotiate = true);
      });
    } }, { key: "handleMessage", value: function(v) {
      var p = new CustomEvent("action:".concat(v.detail.action), { detail: v.detail, cancelable: true });
      if (this.emit("action:".concat(v.detail.action), p), !p.defaultPrevented) switch (v.detail.action) {
        case o.WidgetApiToWidgetAction.SupportedApiVersions:
          return this.replyVersions(v.detail);
        case o.WidgetApiToWidgetAction.Capabilities:
          return this.handleCapabilities(v.detail);
        case o.WidgetApiToWidgetAction.UpdateVisibility:
          return this.transport.reply(v.detail, {});
        case o.WidgetApiToWidgetAction.NotifyCapabilities:
          return this.transport.reply(v.detail, {});
        default:
          return this.transport.reply(v.detail, { error: { message: "Unknown or unsupported action: " + v.detail.action } });
      }
    } }, { key: "replyVersions", value: function(v) {
      this.transport.reply(v, { supported_versions: r.CurrentApiVersions });
    } }, { key: "getClientVersions", value: function() {
      var v = this;
      return Array.isArray(this.cachedClientVersions) ? Promise.resolve(this.cachedClientVersions) : this.transport.send(o.WidgetApiFromWidgetAction.SupportedApiVersions, {}).then(function(p) {
        return v.cachedClientVersions = p.supported_versions, p.supported_versions;
      }).catch(function(p) {
        return console.warn("non-fatal error getting supported client versions: ", p), [];
      });
    } }, { key: "handleCapabilities", value: function(v) {
      var p = this;
      return this.capabilitiesFinished ? this.transport.reply(v, { error: { message: "Capability negotiation already completed" } }) : this.getClientVersions().then(function(d) {
        return d.includes(r.UnstableApiVersion.MSC2871) ? p.once("action:".concat(o.WidgetApiToWidgetAction.NotifyCapabilities), function(_) {
          p.approvedCapabilities = _.detail.data.approved, p.emit("ready");
        }) : p.emit("ready"), p.capabilitiesFinished = true, p.transport.reply(v, { capabilities: p.requestedCapabilities });
      });
    } }]), C;
  }(t.EventEmitter);
  return dn.WidgetApi = ce, dn;
}
var wr = {}, dt = {};
Object.defineProperty(dt, "__esModule", { value: true });
dt.VideoConferenceCapabilities = dt.StickerpickerCapabilities = dt.MatrixCapabilities = void 0;
dt.getTimelineRoomIDFromCapability = Xv;
dt.isTimelineCapability = Kv;
dt.isTimelineCapabilityFor = Yv;
var na = function(e) {
  return e.Screenshots = "m.capability.screenshot", e.StickerSending = "m.sticker", e.AlwaysOnScreen = "m.always_on_screen", e.RequiresClient = "io.element.requires_client", e.MSC2931Navigate = "org.matrix.msc2931.navigate", e.MSC3846TurnServers = "town.robin.msc3846.turn_servers", e.MSC3973UserDirectorySearch = "org.matrix.msc3973.user_directory_search", e.MSC4039UploadFile = "org.matrix.msc4039.upload_file", e.MSC4039DownloadFile = "org.matrix.msc4039.download_file", e.MSC4157SendDelayedEvent = "org.matrix.msc4157.send.delayed_event", e.MSC4157UpdateDelayedEvent = "org.matrix.msc4157.update_delayed_event", e;
}({});
dt.MatrixCapabilities = na;
var Gv = [na.StickerSending];
dt.StickerpickerCapabilities = Gv;
var $v = [na.AlwaysOnScreen];
dt.VideoConferenceCapabilities = $v;
function Kv(e) {
  return e == null ? void 0 : e.startsWith("org.matrix.msc2762.timeline:");
}
function Yv(e, t) {
  return e === "org.matrix.msc2762.timeline:".concat(t);
}
function Xv(e) {
  return e.substring(e.indexOf(":") + 1);
}
var si = {};
Object.defineProperty(si, "__esModule", { value: true });
si.SimpleObservable = void 0;
function ti(e) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ti(e);
}
function Zv(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Jv(e)) || t) {
      n && (e = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= e.length ? { done: true } : { done: false, value: e[r++] };
      }, e: function(s) {
        throw s;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = true, l = false, u;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var s = n.next();
    return o = s.done, s;
  }, e: function(s) {
    l = true, u = s;
  }, f: function() {
    try {
      !o && n.return != null && n.return();
    } finally {
      if (l) throw u;
    }
  } };
}
function Jv(e, t) {
  if (e) {
    if (typeof e == "string") return ws(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ws(e, t);
  }
}
function ws(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qv(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function eh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, Kf(r.key), r);
  }
}
function th(e, t, n) {
  return t && eh(e.prototype, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function nh(e, t, n) {
  return t = Kf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: true, configurable: true, writable: true }) : e[t] = n, e;
}
function Kf(e) {
  var t = rh(e, "string");
  return ti(t) === "symbol" ? t : String(t);
}
function rh(e, t) {
  if (ti(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ti(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ih = function() {
  function e(t) {
    qv(this, e), nh(this, "listeners", []), t && this.listeners.push(t);
  }
  return th(e, [{ key: "onUpdate", value: function(n) {
    this.listeners.push(n);
  } }, { key: "update", value: function(n) {
    var r = Zv(this.listeners), i;
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
si.SimpleObservable = ih;
var ci = {};
Object.defineProperty(ci, "__esModule", { value: true });
ci.UpdateDelayedEventAction = void 0;
var oh = function(e) {
  return e.Cancel = "cancel", e.Restart = "restart", e.Send = "send", e;
}({});
ci.UpdateDelayedEventAction = oh;
var Ss;
function lh() {
  if (Ss) return wr;
  Ss = 1, Object.defineProperty(wr, "__esModule", { value: true }), wr.ClientWidgetApi = void 0;
  var e = Ao, t = ta(), n = On, r = ln, i = dt, o = Tt, l = Dt, u = lr, a = si, s = ur, g = ci;
  function k(C) {
    "@babel/helpers - typeof";
    return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
      return typeof y;
    } : function(y) {
      return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
    }, k(C);
  }
  function m(C, y) {
    var v = Object.keys(C);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(C);
      y && (p = p.filter(function(d) {
        return Object.getOwnPropertyDescriptor(C, d).enumerable;
      })), v.push.apply(v, p);
    }
    return v;
  }
  function M(C) {
    for (var y = 1; y < arguments.length; y++) {
      var v = arguments[y] != null ? arguments[y] : {};
      y % 2 ? m(Object(v), true).forEach(function(p) {
        Q(C, p, v[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(v)) : m(Object(v)).forEach(function(p) {
        Object.defineProperty(C, p, Object.getOwnPropertyDescriptor(v, p));
      });
    }
    return C;
  }
  function R(C, y) {
    var v = typeof Symbol < "u" && C[Symbol.iterator] || C["@@iterator"];
    if (!v) {
      if (Array.isArray(C) || (v = w(C)) || y) {
        v && (C = v);
        var p = 0, d = function() {
        };
        return { s: d, n: function() {
          return p >= C.length ? { done: true } : { done: false, value: C[p++] };
        }, e: function(P) {
          throw P;
        }, f: d };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var _ = true, c = false, O;
    return { s: function() {
      v = v.call(C);
    }, n: function() {
      var P = v.next();
      return _ = P.done, P;
    }, e: function(P) {
      c = true, O = P;
    }, f: function() {
      try {
        !_ && v.return != null && v.return();
      } finally {
        if (c) throw O;
      }
    } };
  }
  function b(C) {
    return S(C) || h(C) || w(C) || ee();
  }
  function ee() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function w(C, y) {
    if (C) {
      if (typeof C == "string") return W(C, y);
      var v = Object.prototype.toString.call(C).slice(8, -1);
      if (v === "Object" && C.constructor && (v = C.constructor.name), v === "Map" || v === "Set") return Array.from(C);
      if (v === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)) return W(C, y);
    }
  }
  function h(C) {
    if (typeof Symbol < "u" && C[Symbol.iterator] != null || C["@@iterator"] != null) return Array.from(C);
  }
  function S(C) {
    if (Array.isArray(C)) return W(C);
  }
  function W(C, y) {
    (y == null || y > C.length) && (y = C.length);
    for (var v = 0, p = new Array(y); v < y; v++) p[v] = C[v];
    return p;
  }
  function N() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    N = function() {
      return C;
    };
    var C = {}, y = Object.prototype, v = y.hasOwnProperty, p = Object.defineProperty || function(T, A, j) {
      T[A] = j.value;
    }, d = typeof Symbol == "function" ? Symbol : {}, _ = d.iterator || "@@iterator", c = d.asyncIterator || "@@asyncIterator", O = d.toStringTag || "@@toStringTag";
    function E(T, A, j) {
      return Object.defineProperty(T, A, { value: j, enumerable: true, configurable: true, writable: true }), T[A];
    }
    try {
      E({}, "");
    } catch {
      E = function(j, x, Z) {
        return j[x] = Z;
      };
    }
    function P(T, A, j, x) {
      var Z = A && A.prototype instanceof G ? A : G, J = Object.create(Z.prototype), oe = new Dn(x || []);
      return p(J, "_invoke", { value: ar(T, j, oe) }), J;
    }
    function F(T, A, j) {
      try {
        return { type: "normal", arg: T.call(A, j) };
      } catch (x) {
        return { type: "throw", arg: x };
      }
    }
    C.wrap = P;
    var Y = {};
    function G() {
    }
    function de() {
    }
    function ie() {
    }
    var X = {};
    E(X, _, function() {
      return this;
    });
    var ge = Object.getPrototypeOf, Ne = ge && ge(ge($([])));
    Ne && Ne !== y && v.call(Ne, _) && (X = Ne);
    var Ae = ie.prototype = G.prototype = Object.create(X);
    function q(T) {
      ["next", "throw", "return"].forEach(function(A) {
        E(T, A, function(j) {
          return this._invoke(A, j);
        });
      });
    }
    function be(T, A) {
      function j(Z, J, oe, Se) {
        var Ee = F(T[Z], T, J);
        if (Ee.type !== "throw") {
          var Ve = Ee.arg, zt = Ve.value;
          return zt && k(zt) == "object" && v.call(zt, "__await") ? A.resolve(zt.__await).then(function(fn) {
            j("next", fn, oe, Se);
          }, function(fn) {
            j("throw", fn, oe, Se);
          }) : A.resolve(zt).then(function(fn) {
            Ve.value = fn, oe(Ve);
          }, function(fn) {
            return j("throw", fn, oe, Se);
          });
        }
        Se(Ee.arg);
      }
      var x;
      p(this, "_invoke", { value: function(J, oe) {
        function Se() {
          return new A(function(Ee, Ve) {
            j(J, oe, Ee, Ve);
          });
        }
        return x = x ? x.then(Se, Se) : Se();
      } });
    }
    function ar(T, A, j) {
      var x = "suspendedStart";
      return function(Z, J) {
        if (x === "executing") throw new Error("Generator is already running");
        if (x === "completed") {
          if (Z === "throw") throw J;
          return z();
        }
        for (j.method = Z, j.arg = J; ; ) {
          var oe = j.delegate;
          if (oe) {
            var Se = Tn(oe, j);
            if (Se) {
              if (Se === Y) continue;
              return Se;
            }
          }
          if (j.method === "next") j.sent = j._sent = j.arg;
          else if (j.method === "throw") {
            if (x === "suspendedStart") throw x = "completed", j.arg;
            j.dispatchException(j.arg);
          } else j.method === "return" && j.abrupt("return", j.arg);
          x = "executing";
          var Ee = F(T, A, j);
          if (Ee.type === "normal") {
            if (x = j.done ? "completed" : "suspendedYield", Ee.arg === Y) continue;
            return { value: Ee.arg, done: j.done };
          }
          Ee.type === "throw" && (x = "completed", j.method = "throw", j.arg = Ee.arg);
        }
      };
    }
    function Tn(T, A) {
      var j = A.method, x = T.iterator[j];
      if (x === void 0) return A.delegate = null, j === "throw" && T.iterator.return && (A.method = "return", A.arg = void 0, Tn(T, A), A.method === "throw") || j !== "return" && (A.method = "throw", A.arg = new TypeError("The iterator does not provide a '" + j + "' method")), Y;
      var Z = F(x, T.iterator, A.arg);
      if (Z.type === "throw") return A.method = "throw", A.arg = Z.arg, A.delegate = null, Y;
      var J = Z.arg;
      return J ? J.done ? (A[T.resultName] = J.value, A.next = T.nextLoc, A.method !== "return" && (A.method = "next", A.arg = void 0), A.delegate = null, Y) : J : (A.method = "throw", A.arg = new TypeError("iterator result is not an object"), A.delegate = null, Y);
    }
    function sr(T) {
      var A = { tryLoc: T[0] };
      1 in T && (A.catchLoc = T[1]), 2 in T && (A.finallyLoc = T[2], A.afterLoc = T[3]), this.tryEntries.push(A);
    }
    function cn(T) {
      var A = T.completion || {};
      A.type = "normal", delete A.arg, T.completion = A;
    }
    function Dn(T) {
      this.tryEntries = [{ tryLoc: "root" }], T.forEach(sr, this), this.reset(true);
    }
    function $(T) {
      if (T) {
        var A = T[_];
        if (A) return A.call(T);
        if (typeof T.next == "function") return T;
        if (!isNaN(T.length)) {
          var j = -1, x = function Z() {
            for (; ++j < T.length; ) if (v.call(T, j)) return Z.value = T[j], Z.done = false, Z;
            return Z.value = void 0, Z.done = true, Z;
          };
          return x.next = x;
        }
      }
      return { next: z };
    }
    function z() {
      return { value: void 0, done: true };
    }
    return de.prototype = ie, p(Ae, "constructor", { value: ie, configurable: true }), p(ie, "constructor", { value: de, configurable: true }), de.displayName = E(ie, O, "GeneratorFunction"), C.isGeneratorFunction = function(T) {
      var A = typeof T == "function" && T.constructor;
      return !!A && (A === de || (A.displayName || A.name) === "GeneratorFunction");
    }, C.mark = function(T) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(T, ie) : (T.__proto__ = ie, E(T, O, "GeneratorFunction")), T.prototype = Object.create(Ae), T;
    }, C.awrap = function(T) {
      return { __await: T };
    }, q(be.prototype), E(be.prototype, c, function() {
      return this;
    }), C.AsyncIterator = be, C.async = function(T, A, j, x, Z) {
      Z === void 0 && (Z = Promise);
      var J = new be(P(T, A, j, x), Z);
      return C.isGeneratorFunction(A) ? J : J.next().then(function(oe) {
        return oe.done ? oe.value : J.next();
      });
    }, q(Ae), E(Ae, O, "Generator"), E(Ae, _, function() {
      return this;
    }), E(Ae, "toString", function() {
      return "[object Generator]";
    }), C.keys = function(T) {
      var A = Object(T), j = [];
      for (var x in A) j.push(x);
      return j.reverse(), function Z() {
        for (; j.length; ) {
          var J = j.pop();
          if (J in A) return Z.value = J, Z.done = false, Z;
        }
        return Z.done = true, Z;
      };
    }, C.values = $, Dn.prototype = { constructor: Dn, reset: function(A) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(cn), !A) for (var j in this) j.charAt(0) === "t" && v.call(this, j) && !isNaN(+j.slice(1)) && (this[j] = void 0);
    }, stop: function() {
      this.done = true;
      var A = this.tryEntries[0].completion;
      if (A.type === "throw") throw A.arg;
      return this.rval;
    }, dispatchException: function(A) {
      if (this.done) throw A;
      var j = this;
      function x(Ve, zt) {
        return oe.type = "throw", oe.arg = A, j.next = Ve, zt && (j.method = "next", j.arg = void 0), !!zt;
      }
      for (var Z = this.tryEntries.length - 1; Z >= 0; --Z) {
        var J = this.tryEntries[Z], oe = J.completion;
        if (J.tryLoc === "root") return x("end");
        if (J.tryLoc <= this.prev) {
          var Se = v.call(J, "catchLoc"), Ee = v.call(J, "finallyLoc");
          if (Se && Ee) {
            if (this.prev < J.catchLoc) return x(J.catchLoc, true);
            if (this.prev < J.finallyLoc) return x(J.finallyLoc);
          } else if (Se) {
            if (this.prev < J.catchLoc) return x(J.catchLoc, true);
          } else {
            if (!Ee) throw new Error("try statement without catch or finally");
            if (this.prev < J.finallyLoc) return x(J.finallyLoc);
          }
        }
      }
    }, abrupt: function(A, j) {
      for (var x = this.tryEntries.length - 1; x >= 0; --x) {
        var Z = this.tryEntries[x];
        if (Z.tryLoc <= this.prev && v.call(Z, "finallyLoc") && this.prev < Z.finallyLoc) {
          var J = Z;
          break;
        }
      }
      J && (A === "break" || A === "continue") && J.tryLoc <= j && j <= J.finallyLoc && (J = null);
      var oe = J ? J.completion : {};
      return oe.type = A, oe.arg = j, J ? (this.method = "next", this.next = J.finallyLoc, Y) : this.complete(oe);
    }, complete: function(A, j) {
      if (A.type === "throw") throw A.arg;
      return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && j && (this.next = j), Y;
    }, finish: function(A) {
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var x = this.tryEntries[j];
        if (x.finallyLoc === A) return this.complete(x.completion, x.afterLoc), cn(x), Y;
      }
    }, catch: function(A) {
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var x = this.tryEntries[j];
        if (x.tryLoc === A) {
          var Z = x.completion;
          if (Z.type === "throw") {
            var J = Z.arg;
            cn(x);
          }
          return J;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(A, j, x) {
      return this.delegate = { iterator: $(A), resultName: j, nextLoc: x }, this.method === "next" && (this.arg = void 0), Y;
    } }, C;
  }
  function L(C, y, v, p, d, _, c) {
    try {
      var O = C[_](c), E = O.value;
    } catch (P) {
      v(P);
      return;
    }
    O.done ? y(E) : Promise.resolve(E).then(p, d);
  }
  function D(C) {
    return function() {
      var y = this, v = arguments;
      return new Promise(function(p, d) {
        var _ = C.apply(y, v);
        function c(E) {
          L(_, p, d, c, O, "next", E);
        }
        function O(E) {
          L(_, p, d, c, O, "throw", E);
        }
        c(void 0);
      });
    };
  }
  function f(C, y) {
    if (!(C instanceof y)) throw new TypeError("Cannot call a class as a function");
  }
  function U(C, y) {
    for (var v = 0; v < y.length; v++) {
      var p = y[v];
      p.enumerable = p.enumerable || false, p.configurable = true, "value" in p && (p.writable = true), Object.defineProperty(C, ne(p.key), p);
    }
  }
  function B(C, y, v) {
    return y && U(C.prototype, y), Object.defineProperty(C, "prototype", { writable: false }), C;
  }
  function te(C, y) {
    if (typeof y != "function" && y !== null) throw new TypeError("Super expression must either be null or a function");
    C.prototype = Object.create(y && y.prototype, { constructor: { value: C, writable: true, configurable: true } }), Object.defineProperty(C, "prototype", { writable: false }), y && ue(C, y);
  }
  function ue(C, y) {
    return ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, d) {
      return p.__proto__ = d, p;
    }, ue(C, y);
  }
  function se(C) {
    var y = ht();
    return function() {
      var p = Ke(C), d;
      if (y) {
        var _ = Ke(this).constructor;
        d = Reflect.construct(p, arguments, _);
      } else d = p.apply(this, arguments);
      return $e(this, d);
    };
  }
  function $e(C, y) {
    if (y && (k(y) === "object" || typeof y == "function")) return y;
    if (y !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return he(C);
  }
  function he(C) {
    if (C === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return C;
  }
  function ht() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function Ke(C) {
    return Ke = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(v) {
      return v.__proto__ || Object.getPrototypeOf(v);
    }, Ke(C);
  }
  function Q(C, y, v) {
    return y = ne(y), y in C ? Object.defineProperty(C, y, { value: v, enumerable: true, configurable: true, writable: true }) : C[y] = v, C;
  }
  function ne(C) {
    var y = re(C, "string");
    return k(y) === "symbol" ? y : String(y);
  }
  function re(C, y) {
    if (k(C) !== "object" || C === null) return C;
    var v = C[Symbol.toPrimitive];
    if (v !== void 0) {
      var p = v.call(C, y);
      if (k(p) !== "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (y === "string" ? String : Number)(C);
  }
  function ce(C) {
    var y, v, p, d = 2;
    for (typeof Symbol < "u" && (v = Symbol.asyncIterator, p = Symbol.iterator); d--; ) {
      if (v && (y = C[v]) != null) return y.call(C);
      if (p && (y = C[p]) != null) return new I(y.call(C));
      v = "@@asyncIterator", p = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
  }
  function I(C) {
    function y(v) {
      if (Object(v) !== v) return Promise.reject(new TypeError(v + " is not an object."));
      var p = v.done;
      return Promise.resolve(v.value).then(function(d) {
        return { value: d, done: p };
      });
    }
    return I = function(p) {
      this.s = p, this.n = p.next;
    }, I.prototype = { s: null, n: null, next: function() {
      return y(this.n.apply(this.s, arguments));
    }, return: function(p) {
      var d = this.s.return;
      return d === void 0 ? Promise.resolve({ value: p, done: true }) : y(d.apply(this.s, arguments));
    }, throw: function(p) {
      var d = this.s.return;
      return d === void 0 ? Promise.reject(p) : y(d.apply(this.s, arguments));
    } }, new I(C);
  }
  var H = function(C) {
    te(v, C);
    var y = se(v);
    function v(p, d, _) {
      var c;
      if (f(this, v), c = y.call(this), c.widget = p, c.iframe = d, c.driver = _, Q(he(c), "transport", void 0), Q(he(c), "cachedWidgetVersions", null), Q(he(c), "contentLoadedActionSent", false), Q(he(c), "allowedCapabilities", /* @__PURE__ */ new Set()), Q(he(c), "allowedEvents", []), Q(he(c), "isStopped", false), Q(he(c), "turnServers", null), Q(he(c), "contentLoadedWaitTimer", void 0), Q(he(c), "pushRoomStateTasks", /* @__PURE__ */ new Set()), Q(he(c), "pushRoomStateResult", /* @__PURE__ */ new Map()), Q(he(c), "flushRoomStateTask", null), Q(he(c), "viewedRoomId", null), !(d != null && d.contentWindow)) throw new Error("No iframe supplied");
      if (!p) throw new Error("Invalid widget");
      if (!_) throw new Error("Invalid driver");
      return c.transport = new t.PostmessageTransport(n.WidgetApiDirection.ToWidget, p.id, d.contentWindow, window), c.transport.targetOrigin = p.origin, c.transport.on("message", c.handleMessage.bind(he(c))), d.addEventListener("load", c.onIframeLoad.bind(he(c))), c.transport.start(), c;
    }
    return B(v, [{ key: "hasCapability", value: function(d) {
      return this.allowedCapabilities.has(d);
    } }, { key: "canUseRoomTimeline", value: function(d) {
      return this.hasCapability("org.matrix.msc2762.timeline:".concat(s.Symbols.AnyRoom)) || this.hasCapability("org.matrix.msc2762.timeline:".concat(d));
    } }, { key: "canSendRoomEvent", value: function(d) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return this.allowedEvents.some(function(c) {
        return c.matchesAsRoomEvent(l.EventDirection.Send, d, _);
      });
    } }, { key: "canSendStateEvent", value: function(d, _) {
      return this.allowedEvents.some(function(c) {
        return c.matchesAsStateEvent(l.EventDirection.Send, d, _);
      });
    } }, { key: "canSendToDeviceEvent", value: function(d) {
      return this.allowedEvents.some(function(_) {
        return _.matchesAsToDeviceEvent(l.EventDirection.Send, d);
      });
    } }, { key: "canReceiveRoomEvent", value: function(d) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return this.allowedEvents.some(function(c) {
        return c.matchesAsRoomEvent(l.EventDirection.Receive, d, _);
      });
    } }, { key: "canReceiveStateEvent", value: function(d, _) {
      return this.allowedEvents.some(function(c) {
        return c.matchesAsStateEvent(l.EventDirection.Receive, d, _);
      });
    } }, { key: "canReceiveToDeviceEvent", value: function(d) {
      return this.allowedEvents.some(function(_) {
        return _.matchesAsToDeviceEvent(l.EventDirection.Receive, d);
      });
    } }, { key: "canReceiveRoomAccountData", value: function(d) {
      return this.allowedEvents.some(function(_) {
        return _.matchesAsRoomAccountData(l.EventDirection.Receive, d);
      });
    } }, { key: "stop", value: function() {
      this.isStopped = true, this.transport.stop();
    } }, { key: "getWidgetVersions", value: function() {
      var p = D(N().mark(function _() {
        var c;
        return N().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              if (!Array.isArray(this.cachedWidgetVersions)) {
                E.next = 2;
                break;
              }
              return E.abrupt("return", Promise.resolve(this.cachedWidgetVersions));
            case 2:
              return E.prev = 2, E.next = 5, this.transport.send(r.WidgetApiToWidgetAction.SupportedApiVersions, {});
            case 5:
              return c = E.sent, this.cachedWidgetVersions = c.supported_versions, E.abrupt("return", c.supported_versions);
            case 10:
              return E.prev = 10, E.t0 = E.catch(2), console.warn("non-fatal error getting supported widget versions: ", E.t0), E.abrupt("return", []);
            case 14:
            case "end":
              return E.stop();
          }
        }, _, this, [[2, 10]]);
      }));
      function d() {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "beginCapabilities", value: function() {
      var d = this;
      this.emit("preparing");
      var _;
      this.transport.send(r.WidgetApiToWidgetAction.Capabilities, {}).then(function(c) {
        return _ = c.capabilities, d.driver.validateCapabilities(new Set(c.capabilities));
      }).then(function(c) {
        d.allowCapabilities(b(c), _), d.emit("ready");
      }).catch(function(c) {
        d.emit("error:preparing", c);
      });
    } }, { key: "allowCapabilities", value: function(d, _) {
      var c, O = this;
      console.log("Widget ".concat(this.widget.id, " is allowed capabilities:"), d);
      var E = R(d), P;
      try {
        for (E.s(); !(P = E.n()).done; ) {
          var F = P.value;
          this.allowedCapabilities.add(F);
        }
      } catch (q) {
        E.e(q);
      } finally {
        E.f();
      }
      var Y = l.WidgetEventCapability.findEventCapabilities(d);
      (c = this.allowedEvents).push.apply(c, b(Y)), this.transport.send(r.WidgetApiToWidgetAction.NotifyCapabilities, { requested: _, approved: Array.from(this.allowedCapabilities) }).catch(function(q) {
        console.warn("non-fatal error notifying widget of approved capabilities:", q);
      }).then(function() {
        O.emit("capabilitiesNotified");
      });
      var G = R(d), de;
      try {
        for (G.s(); !(de = G.n()).done; ) {
          var ie = de.value;
          if ((0, i.isTimelineCapability)(ie)) {
            var X = (0, i.getTimelineRoomIDFromCapability)(ie);
            if (X === s.Symbols.AnyRoom) {
              var ge = R(this.driver.getKnownRooms()), Ne;
              try {
                for (ge.s(); !(Ne = ge.n()).done; ) {
                  var Ae = Ne.value;
                  this.pushRoomState(Ae);
                }
              } catch (q) {
                ge.e(q);
              } finally {
                ge.f();
              }
            } else this.pushRoomState(X);
          }
        }
      } catch (q) {
        G.e(q);
      } finally {
        G.f();
      }
      Y.length > 0 && this.viewedRoomId !== null && !this.canUseRoomTimeline(this.viewedRoomId) && this.pushRoomState(this.viewedRoomId);
    } }, { key: "onIframeLoad", value: function(d) {
      this.widget.waitForIframeLoad ? this.beginCapabilities() : (console.log("waitForIframeLoad is false: waiting for widget to send contentLoaded"), this.contentLoadedWaitTimer = setTimeout(function() {
        console.error("Widget specified waitForIframeLoad=false but timed out waiting for contentLoaded event!");
      }, 1e4), this.contentLoadedActionSent = false);
    } }, { key: "handleContentLoadedAction", value: function(d) {
      if (this.contentLoadedWaitTimer !== void 0 && (clearTimeout(this.contentLoadedWaitTimer), this.contentLoadedWaitTimer = void 0), this.contentLoadedActionSent) throw new Error("Improper sequence: ContentLoaded Action can only be sent once after the widget loaded and should only be used if waitForIframeLoad is false (default=true)");
      this.widget.waitForIframeLoad ? this.transport.reply(d, { error: { message: "Improper sequence: not expecting ContentLoaded event if waitForIframeLoad is true (default=true)" } }) : (this.transport.reply(d, {}), this.beginCapabilities()), this.contentLoadedActionSent = true;
    } }, { key: "replyVersions", value: function(d) {
      this.transport.reply(d, { supported_versions: o.CurrentApiVersions });
    } }, { key: "handleCapabilitiesRenegotiate", value: function(d) {
      var _, c = this;
      this.transport.reply(d, {});
      var O = ((_ = d.data) === null || _ === void 0 ? void 0 : _.capabilities) || [], E = new Set(O.filter(function(P) {
        return !c.hasCapability(P);
      }));
      E.size === 0 && this.allowCapabilities([], []), this.driver.validateCapabilities(E).then(function(P) {
        return c.allowCapabilities(b(P), b(E));
      });
    } }, { key: "handleNavigate", value: function(d) {
      var _, c, O = this;
      if (!this.hasCapability(i.MatrixCapabilities.MSC2931Navigate)) return this.transport.reply(d, { error: { message: "Missing capability" } });
      if (!((_ = d.data) !== null && _ !== void 0 && _.uri) || !((c = d.data) !== null && c !== void 0 && c.uri.toString().startsWith("https://matrix.to/#"))) return this.transport.reply(d, { error: { message: "Invalid matrix.to URI" } });
      var E = function(F) {
        console.error("[ClientWidgetApi] Failed to handle navigation: ", F), O.handleDriverError(F, d, "Error handling navigation");
      };
      try {
        this.driver.navigate(d.data.uri.toString()).catch(function(P) {
          return E(P);
        }).then(function() {
          return O.transport.reply(d, {});
        });
      } catch (P) {
        return E(P);
      }
    } }, { key: "handleOIDC", value: function(d) {
      var _ = this, c = 1, O = function(Y, G) {
        return G = G || {}, c > 1 ? _.transport.send(r.WidgetApiToWidgetAction.OpenIDCredentials, M({ state: Y, original_request_id: d.requestId }, G)) : _.transport.reply(d, M({ state: Y }, G));
      }, E = function(Y) {
        return console.error("[ClientWidgetApi] Failed to handle OIDC: ", Y), c > 1 ? O(u.OpenIDRequestState.Blocked) : _.transport.reply(d, { error: { message: Y } });
      }, P = new a.SimpleObservable(function(F) {
        if (F.state === u.OpenIDRequestState.PendingUserConfirmation && c > 1) return P.close(), E("client provided out-of-phase response to OIDC flow");
        if (F.state === u.OpenIDRequestState.PendingUserConfirmation) {
          O(F.state), c++;
          return;
        }
        return F.state === u.OpenIDRequestState.Allowed && !F.token ? E("client provided invalid OIDC token for an allowed request") : (F.state === u.OpenIDRequestState.Blocked && (F.token = void 0), P.close(), O(F.state, F.token));
      });
      this.driver.askOpenID(P);
    } }, { key: "handleReadRoomAccountData", value: function(d) {
      var _ = this, c = Promise.resolve([]);
      return c = this.driver.readRoomAccountData(d.data.type), this.canReceiveRoomAccountData(d.data.type) ? c.then(function(O) {
        _.transport.reply(d, { events: O });
      }) : this.transport.reply(d, { error: { message: "Cannot read room account data of this type" } });
    } }, { key: "handleReadEvents", value: function() {
      var p = D(N().mark(function _(c) {
        var O = this, E, P, F, Y, G, de, ie, X, ge, Ne;
        return N().wrap(function(q) {
          for (; ; ) switch (q.prev = q.next) {
            case 0:
              if (c.data.type) {
                q.next = 2;
                break;
              }
              return q.abrupt("return", this.transport.reply(c, { error: { message: "Invalid request - missing event type" } }));
            case 2:
              if (!(c.data.limit !== void 0 && (!c.data.limit || c.data.limit < 0))) {
                q.next = 4;
                break;
              }
              return q.abrupt("return", this.transport.reply(c, { error: { message: "Invalid request - limit out of range" } }));
            case 4:
              if (c.data.room_ids !== void 0) {
                q.next = 8;
                break;
              }
              E = this.viewedRoomId === null ? [] : [this.viewedRoomId], q.next = 30;
              break;
            case 8:
              if (c.data.room_ids !== s.Symbols.AnyRoom) {
                q.next = 12;
                break;
              }
              E = this.driver.getKnownRooms().filter(function(be) {
                return O.canUseRoomTimeline(be);
              }), q.next = 30;
              break;
            case 12:
              E = c.data.room_ids, P = R(E), q.prev = 14, P.s();
            case 16:
              if ((F = P.n()).done) {
                q.next = 22;
                break;
              }
              if (Y = F.value, this.canUseRoomTimeline(Y)) {
                q.next = 20;
                break;
              }
              return q.abrupt("return", this.transport.reply(c, { error: { message: "Unable to access room timeline: ".concat(Y) } }));
            case 20:
              q.next = 16;
              break;
            case 22:
              q.next = 27;
              break;
            case 24:
              q.prev = 24, q.t0 = q.catch(14), P.e(q.t0);
            case 27:
              return q.prev = 27, P.f(), q.finish(27);
            case 30:
              if (G = c.data.limit || 0, de = c.data.since, ie = void 0, X = void 0, c.data.state_key === void 0) {
                q.next = 40;
                break;
              }
              if (ie = c.data.state_key === true ? void 0 : c.data.state_key.toString(), this.canReceiveStateEvent(c.data.type, (ge = ie) !== null && ge !== void 0 ? ge : null)) {
                q.next = 38;
                break;
              }
              return q.abrupt("return", this.transport.reply(c, { error: { message: "Cannot read state events of this type" } }));
            case 38:
              q.next = 43;
              break;
            case 40:
              if (X = c.data.msgtype, this.canReceiveRoomEvent(c.data.type, X)) {
                q.next = 43;
                break;
              }
              return q.abrupt("return", this.transport.reply(c, { error: { message: "Cannot read room events of this type" } }));
            case 43:
              if (!(c.data.room_ids === void 0 && E.length === 0)) {
                q.next = 49;
                break;
              }
              return q.next = 46, c.data.state_key === void 0 ? this.driver.readRoomEvents(c.data.type, X, G, null, de) : this.driver.readStateEvents(c.data.type, ie, G, null);
            case 46:
              q.t1 = q.sent, q.next = 52;
              break;
            case 49:
              return q.next = 51, Promise.all(E.map(function(be) {
                return O.driver.readRoomTimeline(be, c.data.type, X, ie, G, de);
              }));
            case 51:
              q.t1 = q.sent.flat(1);
            case 52:
              Ne = q.t1, this.transport.reply(c, { events: Ne });
            case 54:
            case "end":
              return q.stop();
          }
        }, _, this, [[14, 24, 27, 30]]);
      }));
      function d(_) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "handleSendEvent", value: function(d) {
      var _ = this;
      if (!d.data.type) return this.transport.reply(d, { error: { message: "Invalid request - missing event type" } });
      if (d.data.room_id && !this.canUseRoomTimeline(d.data.room_id)) return this.transport.reply(d, { error: { message: "Unable to access room timeline: ".concat(d.data.room_id) } });
      var c = d.data.delay !== void 0 || d.data.parent_delay_id !== void 0;
      if (c && !this.hasCapability(i.MatrixCapabilities.MSC4157SendDelayedEvent)) return this.transport.reply(d, { error: { message: "Missing capability" } });
      var O;
      if (d.data.state_key !== void 0) {
        if (!this.canSendStateEvent(d.data.type, d.data.state_key)) return this.transport.reply(d, { error: { message: "Cannot send state events of this type" } });
        if (!c) O = this.driver.sendEvent(d.data.type, d.data.content || {}, d.data.state_key, d.data.room_id);
        else {
          var E, P;
          O = this.driver.sendDelayedEvent((E = d.data.delay) !== null && E !== void 0 ? E : null, (P = d.data.parent_delay_id) !== null && P !== void 0 ? P : null, d.data.type, d.data.content || {}, d.data.state_key, d.data.room_id);
        }
      } else {
        var F = d.data.content || {}, Y = F.msgtype;
        if (!this.canSendRoomEvent(d.data.type, Y)) return this.transport.reply(d, { error: { message: "Cannot send room events of this type" } });
        if (!c) O = this.driver.sendEvent(d.data.type, F, null, d.data.room_id);
        else {
          var G, de;
          O = this.driver.sendDelayedEvent((G = d.data.delay) !== null && G !== void 0 ? G : null, (de = d.data.parent_delay_id) !== null && de !== void 0 ? de : null, d.data.type, F, null, d.data.room_id);
        }
      }
      O.then(function(ie) {
        return _.transport.reply(d, M({ room_id: ie.roomId }, "eventId" in ie ? { event_id: ie.eventId } : { delay_id: ie.delayId }));
      }).catch(function(ie) {
        console.error("error sending event: ", ie), _.handleDriverError(ie, d, "Error sending event");
      });
    } }, { key: "handleUpdateDelayedEvent", value: function(d) {
      var _ = this;
      if (!d.data.delay_id) return this.transport.reply(d, { error: { message: "Invalid request - missing delay_id" } });
      if (!this.hasCapability(i.MatrixCapabilities.MSC4157UpdateDelayedEvent)) return this.transport.reply(d, { error: { message: "Missing capability" } });
      switch (d.data.action) {
        case g.UpdateDelayedEventAction.Cancel:
        case g.UpdateDelayedEventAction.Restart:
        case g.UpdateDelayedEventAction.Send:
          this.driver.updateDelayedEvent(d.data.delay_id, d.data.action).then(function() {
            return _.transport.reply(d, {});
          }).catch(function(c) {
            console.error("error updating delayed event: ", c), _.handleDriverError(c, d, "Error updating delayed event");
          });
          break;
        default:
          return this.transport.reply(d, { error: { message: "Invalid request - unsupported action" } });
      }
    } }, { key: "handleSendToDevice", value: function() {
      var p = D(N().mark(function _(c) {
        return N().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              if (c.data.type) {
                E.next = 5;
                break;
              }
              return E.next = 3, this.transport.reply(c, { error: { message: "Invalid request - missing event type" } });
            case 3:
              E.next = 31;
              break;
            case 5:
              if (c.data.messages) {
                E.next = 10;
                break;
              }
              return E.next = 8, this.transport.reply(c, { error: { message: "Invalid request - missing event contents" } });
            case 8:
              E.next = 31;
              break;
            case 10:
              if (typeof c.data.encrypted == "boolean") {
                E.next = 15;
                break;
              }
              return E.next = 13, this.transport.reply(c, { error: { message: "Invalid request - missing encryption flag" } });
            case 13:
              E.next = 31;
              break;
            case 15:
              if (this.canSendToDeviceEvent(c.data.type)) {
                E.next = 20;
                break;
              }
              return E.next = 18, this.transport.reply(c, { error: { message: "Cannot send to-device events of this type" } });
            case 18:
              E.next = 31;
              break;
            case 20:
              return E.prev = 20, E.next = 23, this.driver.sendToDevice(c.data.type, c.data.encrypted, c.data.messages);
            case 23:
              return E.next = 25, this.transport.reply(c, {});
            case 25:
              E.next = 31;
              break;
            case 27:
              E.prev = 27, E.t0 = E.catch(20), console.error("error sending to-device event", E.t0), this.handleDriverError(E.t0, c, "Error sending event");
            case 31:
            case "end":
              return E.stop();
          }
        }, _, this, [[20, 27]]);
      }));
      function d(_) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "pollTurnServers", value: function() {
      var p = D(N().mark(function _(c, O) {
        var E, P, F, Y, G, de;
        return N().wrap(function(X) {
          for (; ; ) switch (X.prev = X.next) {
            case 0:
              return X.prev = 0, X.next = 3, this.transport.send(r.WidgetApiToWidgetAction.UpdateTurnServers, O);
            case 3:
              E = false, P = false, X.prev = 5, Y = ce(c);
            case 7:
              return X.next = 9, Y.next();
            case 9:
              if (!(E = !(G = X.sent).done)) {
                X.next = 16;
                break;
              }
              return de = G.value, X.next = 13, this.transport.send(r.WidgetApiToWidgetAction.UpdateTurnServers, de);
            case 13:
              E = false, X.next = 7;
              break;
            case 16:
              X.next = 22;
              break;
            case 18:
              X.prev = 18, X.t0 = X.catch(5), P = true, F = X.t0;
            case 22:
              if (X.prev = 22, X.prev = 23, !(E && Y.return != null)) {
                X.next = 27;
                break;
              }
              return X.next = 27, Y.return();
            case 27:
              if (X.prev = 27, !P) {
                X.next = 30;
                break;
              }
              throw F;
            case 30:
              return X.finish(27);
            case 31:
              return X.finish(22);
            case 32:
              X.next = 37;
              break;
            case 34:
              X.prev = 34, X.t1 = X.catch(0), console.error("error polling for TURN servers", X.t1);
            case 37:
            case "end":
              return X.stop();
          }
        }, _, this, [[0, 34], [5, 18, 22, 32], [23, , 27, 31]]);
      }));
      function d(_, c) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "handleWatchTurnServers", value: function() {
      var p = D(N().mark(function _(c) {
        var O, E, P, F;
        return N().wrap(function(G) {
          for (; ; ) switch (G.prev = G.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC3846TurnServers)) {
                G.next = 5;
                break;
              }
              return G.next = 3, this.transport.reply(c, { error: { message: "Missing capability" } });
            case 3:
              G.next = 30;
              break;
            case 5:
              if (!this.turnServers) {
                G.next = 10;
                break;
              }
              return G.next = 8, this.transport.reply(c, {});
            case 8:
              G.next = 30;
              break;
            case 10:
              return G.prev = 10, O = this.driver.getTurnServers(), G.next = 14, O.next();
            case 14:
              if (E = G.sent, P = E.done, F = E.value, !P) {
                G.next = 19;
                break;
              }
              throw new Error("Client refuses to provide any TURN servers");
            case 19:
              return G.next = 21, this.transport.reply(c, {});
            case 21:
              this.pollTurnServers(O, F), this.turnServers = O, G.next = 30;
              break;
            case 25:
              return G.prev = 25, G.t0 = G.catch(10), console.error("error getting first TURN server results", G.t0), G.next = 30, this.transport.reply(c, { error: { message: "TURN servers not available" } });
            case 30:
            case "end":
              return G.stop();
          }
        }, _, this, [[10, 25]]);
      }));
      function d(_) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "handleUnwatchTurnServers", value: function() {
      var p = D(N().mark(function _(c) {
        return N().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC3846TurnServers)) {
                E.next = 5;
                break;
              }
              return E.next = 3, this.transport.reply(c, { error: { message: "Missing capability" } });
            case 3:
              E.next = 15;
              break;
            case 5:
              if (this.turnServers) {
                E.next = 10;
                break;
              }
              return E.next = 8, this.transport.reply(c, {});
            case 8:
              E.next = 15;
              break;
            case 10:
              return E.next = 12, this.turnServers.return(void 0);
            case 12:
              return this.turnServers = null, E.next = 15, this.transport.reply(c, {});
            case 15:
            case "end":
              return E.stop();
          }
        }, _, this);
      }));
      function d(_) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "handleReadRelations", value: function() {
      var p = D(N().mark(function _(c) {
        var O = this, E, P;
        return N().wrap(function(Y) {
          for (; ; ) switch (Y.prev = Y.next) {
            case 0:
              if (c.data.event_id) {
                Y.next = 2;
                break;
              }
              return Y.abrupt("return", this.transport.reply(c, { error: { message: "Invalid request - missing event ID" } }));
            case 2:
              if (!(c.data.limit !== void 0 && c.data.limit < 0)) {
                Y.next = 4;
                break;
              }
              return Y.abrupt("return", this.transport.reply(c, { error: { message: "Invalid request - limit out of range" } }));
            case 4:
              if (!(c.data.room_id !== void 0 && !this.canUseRoomTimeline(c.data.room_id))) {
                Y.next = 6;
                break;
              }
              return Y.abrupt("return", this.transport.reply(c, { error: { message: "Unable to access room timeline: ".concat(c.data.room_id) } }));
            case 6:
              return Y.prev = 6, Y.next = 9, this.driver.readEventRelations(c.data.event_id, c.data.room_id, c.data.rel_type, c.data.event_type, c.data.from, c.data.to, c.data.limit, c.data.direction);
            case 9:
              return E = Y.sent, P = E.chunk.filter(function(G) {
                return G.state_key !== void 0 ? O.canReceiveStateEvent(G.type, G.state_key) : O.canReceiveRoomEvent(G.type, G.content.msgtype);
              }), Y.abrupt("return", this.transport.reply(c, { chunk: P, prev_batch: E.prevBatch, next_batch: E.nextBatch }));
            case 14:
              Y.prev = 14, Y.t0 = Y.catch(6), console.error("error getting the relations", Y.t0), this.handleDriverError(Y.t0, c, "Unexpected error while reading relations");
            case 18:
            case "end":
              return Y.stop();
          }
        }, _, this, [[6, 14]]);
      }));
      function d(_) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "handleUserDirectorySearch", value: function() {
      var p = D(N().mark(function _(c) {
        var O;
        return N().wrap(function(P) {
          for (; ; ) switch (P.prev = P.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC3973UserDirectorySearch)) {
                P.next = 2;
                break;
              }
              return P.abrupt("return", this.transport.reply(c, { error: { message: "Missing capability" } }));
            case 2:
              if (typeof c.data.search_term == "string") {
                P.next = 4;
                break;
              }
              return P.abrupt("return", this.transport.reply(c, { error: { message: "Invalid request - missing search term" } }));
            case 4:
              if (!(c.data.limit !== void 0 && c.data.limit < 0)) {
                P.next = 6;
                break;
              }
              return P.abrupt("return", this.transport.reply(c, { error: { message: "Invalid request - limit out of range" } }));
            case 6:
              return P.prev = 6, P.next = 9, this.driver.searchUserDirectory(c.data.search_term, c.data.limit);
            case 9:
              return O = P.sent, P.abrupt("return", this.transport.reply(c, { limited: O.limited, results: O.results.map(function(F) {
                return { user_id: F.userId, display_name: F.displayName, avatar_url: F.avatarUrl };
              }) }));
            case 13:
              P.prev = 13, P.t0 = P.catch(6), console.error("error searching in the user directory", P.t0), this.handleDriverError(P.t0, c, "Unexpected error while searching in the user directory");
            case 17:
            case "end":
              return P.stop();
          }
        }, _, this, [[6, 13]]);
      }));
      function d(_) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "handleGetMediaConfig", value: function() {
      var p = D(N().mark(function _(c) {
        var O;
        return N().wrap(function(P) {
          for (; ; ) switch (P.prev = P.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC4039UploadFile)) {
                P.next = 2;
                break;
              }
              return P.abrupt("return", this.transport.reply(c, { error: { message: "Missing capability" } }));
            case 2:
              return P.prev = 2, P.next = 5, this.driver.getMediaConfig();
            case 5:
              return O = P.sent, P.abrupt("return", this.transport.reply(c, O));
            case 9:
              P.prev = 9, P.t0 = P.catch(2), console.error("error while getting the media configuration", P.t0), this.handleDriverError(P.t0, c, "Unexpected error while getting the media configuration");
            case 13:
            case "end":
              return P.stop();
          }
        }, _, this, [[2, 9]]);
      }));
      function d(_) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "handleUploadFile", value: function() {
      var p = D(N().mark(function _(c) {
        var O;
        return N().wrap(function(P) {
          for (; ; ) switch (P.prev = P.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC4039UploadFile)) {
                P.next = 2;
                break;
              }
              return P.abrupt("return", this.transport.reply(c, { error: { message: "Missing capability" } }));
            case 2:
              return P.prev = 2, P.next = 5, this.driver.uploadFile(c.data.file);
            case 5:
              return O = P.sent, P.abrupt("return", this.transport.reply(c, { content_uri: O.contentUri }));
            case 9:
              P.prev = 9, P.t0 = P.catch(2), console.error("error while uploading a file", P.t0), this.handleDriverError(P.t0, c, "Unexpected error while uploading a file");
            case 13:
            case "end":
              return P.stop();
          }
        }, _, this, [[2, 9]]);
      }));
      function d(_) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "handleDownloadFile", value: function() {
      var p = D(N().mark(function _(c) {
        var O;
        return N().wrap(function(P) {
          for (; ; ) switch (P.prev = P.next) {
            case 0:
              if (this.hasCapability(i.MatrixCapabilities.MSC4039DownloadFile)) {
                P.next = 2;
                break;
              }
              return P.abrupt("return", this.transport.reply(c, { error: { message: "Missing capability" } }));
            case 2:
              return P.prev = 2, P.next = 5, this.driver.downloadFile(c.data.content_uri);
            case 5:
              return O = P.sent, P.abrupt("return", this.transport.reply(c, { file: O.file }));
            case 9:
              P.prev = 9, P.t0 = P.catch(2), console.error("error while downloading a file", P.t0), this.handleDriverError(P.t0, c, "Unexpected error while downloading a file");
            case 13:
            case "end":
              return P.stop();
          }
        }, _, this, [[2, 9]]);
      }));
      function d(_) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "handleDriverError", value: function(d, _, c) {
      var O = this.driver.processError(d);
      this.transport.reply(_, { error: M({ message: c }, O) });
    } }, { key: "handleMessage", value: function(d) {
      if (!this.isStopped) {
        var _ = new CustomEvent("action:".concat(d.detail.action), { detail: d.detail, cancelable: true });
        if (this.emit("action:".concat(d.detail.action), _), !_.defaultPrevented) switch (d.detail.action) {
          case r.WidgetApiFromWidgetAction.ContentLoaded:
            return this.handleContentLoadedAction(d.detail);
          case r.WidgetApiFromWidgetAction.SupportedApiVersions:
            return this.replyVersions(d.detail);
          case r.WidgetApiFromWidgetAction.SendEvent:
            return this.handleSendEvent(d.detail);
          case r.WidgetApiFromWidgetAction.SendToDevice:
            return this.handleSendToDevice(d.detail);
          case r.WidgetApiFromWidgetAction.GetOpenIDCredentials:
            return this.handleOIDC(d.detail);
          case r.WidgetApiFromWidgetAction.MSC2931Navigate:
            return this.handleNavigate(d.detail);
          case r.WidgetApiFromWidgetAction.MSC2974RenegotiateCapabilities:
            return this.handleCapabilitiesRenegotiate(d.detail);
          case r.WidgetApiFromWidgetAction.MSC2876ReadEvents:
            return this.handleReadEvents(d.detail);
          case r.WidgetApiFromWidgetAction.WatchTurnServers:
            return this.handleWatchTurnServers(d.detail);
          case r.WidgetApiFromWidgetAction.UnwatchTurnServers:
            return this.handleUnwatchTurnServers(d.detail);
          case r.WidgetApiFromWidgetAction.MSC3869ReadRelations:
            return this.handleReadRelations(d.detail);
          case r.WidgetApiFromWidgetAction.MSC3973UserDirectorySearch:
            return this.handleUserDirectorySearch(d.detail);
          case r.WidgetApiFromWidgetAction.BeeperReadRoomAccountData:
            return this.handleReadRoomAccountData(d.detail);
          case r.WidgetApiFromWidgetAction.MSC4039GetMediaConfigAction:
            return this.handleGetMediaConfig(d.detail);
          case r.WidgetApiFromWidgetAction.MSC4039UploadFileAction:
            return this.handleUploadFile(d.detail);
          case r.WidgetApiFromWidgetAction.MSC4039DownloadFileAction:
            return this.handleDownloadFile(d.detail);
          case r.WidgetApiFromWidgetAction.MSC4157UpdateDelayedEvent:
            return this.handleUpdateDelayedEvent(d.detail);
          default:
            return this.transport.reply(d.detail, { error: { message: "Unknown or unsupported action: " + d.detail.action } });
        }
      }
    } }, { key: "updateTheme", value: function(d) {
      return this.transport.send(r.WidgetApiToWidgetAction.ThemeChange, d);
    } }, { key: "updateLanguage", value: function(d) {
      return this.transport.send(r.WidgetApiToWidgetAction.LanguageChange, { lang: d });
    } }, { key: "takeScreenshot", value: function() {
      return this.transport.send(r.WidgetApiToWidgetAction.TakeScreenshot, {});
    } }, { key: "updateVisibility", value: function(d) {
      return this.transport.send(r.WidgetApiToWidgetAction.UpdateVisibility, { visible: d });
    } }, { key: "sendWidgetConfig", value: function(d) {
      return this.transport.send(r.WidgetApiToWidgetAction.WidgetConfig, d).then();
    } }, { key: "notifyModalWidgetButtonClicked", value: function(d) {
      return this.transport.send(r.WidgetApiToWidgetAction.ButtonClicked, { id: d }).then();
    } }, { key: "notifyModalWidgetClose", value: function(d) {
      return this.transport.send(r.WidgetApiToWidgetAction.CloseModalWidget, d).then();
    } }, { key: "feedEvent", value: function() {
      var p = D(N().mark(function _(c, O) {
        var E;
        return N().wrap(function(F) {
          for (; ; ) switch (F.prev = F.next) {
            case 0:
              if (O !== void 0 && this.setViewedRoomId(O), !(c.room_id !== this.viewedRoomId && !this.canUseRoomTimeline(c.room_id))) {
                F.next = 3;
                break;
              }
              return F.abrupt("return");
            case 3:
              if (!(c.state_key !== void 0 && c.state_key !== null)) {
                F.next = 8;
                break;
              }
              if (this.canReceiveStateEvent(c.type, c.state_key)) {
                F.next = 6;
                break;
              }
              return F.abrupt("return");
            case 6:
              F.next = 10;
              break;
            case 8:
              if (this.canReceiveRoomEvent(c.type, (E = c.content) === null || E === void 0 ? void 0 : E.msgtype)) {
                F.next = 10;
                break;
              }
              return F.abrupt("return");
            case 10:
              return F.next = 12, this.transport.send(r.WidgetApiToWidgetAction.SendEvent, c);
            case 12:
            case "end":
              return F.stop();
          }
        }, _, this);
      }));
      function d(_, c) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "feedToDevice", value: function() {
      var p = D(N().mark(function _(c, O) {
        return N().wrap(function(P) {
          for (; ; ) switch (P.prev = P.next) {
            case 0:
              if (!this.canReceiveToDeviceEvent(c.type)) {
                P.next = 3;
                break;
              }
              return P.next = 3, this.transport.send(r.WidgetApiToWidgetAction.SendToDevice, M(M({}, c), {}, { encrypted: O }));
            case 3:
            case "end":
              return P.stop();
          }
        }, _, this);
      }));
      function d(_, c) {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "setViewedRoomId", value: function(d) {
      this.viewedRoomId = d, d !== null && !this.canUseRoomTimeline(d) && this.pushRoomState(d);
    } }, { key: "flushRoomState", value: function() {
      var p = D(N().mark(function _() {
        var c, O, E, P, F, Y, G;
        return N().wrap(function(ie) {
          for (; ; ) switch (ie.prev = ie.next) {
            case 0:
              ie.prev = 0;
            case 1:
              return ie.next = 3, Promise.all(b(this.pushRoomStateTasks));
            case 3:
              if (this.pushRoomStateTasks.size > 0) {
                ie.next = 1;
                break;
              }
            case 4:
              c = [], O = R(this.pushRoomStateResult.values());
              try {
                for (O.s(); !(E = O.n()).done; ) {
                  P = E.value, F = R(P.values());
                  try {
                    for (F.s(); !(Y = F.n()).done; ) G = Y.value, c.push.apply(c, b(G.values()));
                  } catch (X) {
                    F.e(X);
                  } finally {
                    F.f();
                  }
                }
              } catch (X) {
                O.e(X);
              } finally {
                O.f();
              }
              return ie.next = 9, this.getWidgetVersions();
            case 9:
              if (!ie.sent.includes(o.UnstableApiVersion.MSC2762_UPDATE_STATE)) {
                ie.next = 12;
                break;
              }
              return ie.next = 12, this.transport.send(r.WidgetApiToWidgetAction.UpdateState, { state: c });
            case 12:
              return ie.prev = 12, this.flushRoomStateTask = null, ie.finish(12);
            case 15:
            case "end":
              return ie.stop();
          }
        }, _, this, [[0, , 12, 15]]);
      }));
      function d() {
        return p.apply(this, arguments);
      }
      return d;
    }() }, { key: "pushRoomState", value: function(d) {
      var _ = this, c = R(this.allowedEvents), O;
      try {
        var E = function() {
          var F = O.value;
          if (F.kind === l.EventKind.State && F.direction === l.EventDirection.Receive) {
            var Y, G, de = _.driver.readRoomState(d, F.eventType, (Y = F.keyStr) !== null && Y !== void 0 ? Y : void 0), ie = de.then(function(X) {
              var ge = R(X), Ne;
              try {
                for (ge.s(); !(Ne = ge.n()).done; ) {
                  var Ae = Ne.value, q = _.pushRoomStateResult.get(d);
                  q === void 0 && (q = /* @__PURE__ */ new Map(), _.pushRoomStateResult.set(d, q));
                  var be = q.get(F.eventType);
                  be === void 0 && (be = /* @__PURE__ */ new Map(), q.set(F.eventType, be)), be.has(Ae.state_key) || be.set(Ae.state_key, Ae);
                }
              } catch (ar) {
                ge.e(ar);
              } finally {
                ge.f();
              }
            }, function(X) {
              return console.error("Failed to read room state for ".concat(d, " (").concat(F.eventType, ", ").concat(F.keyStr, ")"), X);
            }).then(function() {
              _.pushRoomStateTasks.delete(ie);
            });
            _.pushRoomStateTasks.add(ie), (G = _.flushRoomStateTask) !== null && G !== void 0 || (_.flushRoomStateTask = _.flushRoomState()), _.flushRoomStateTask.catch(function(X) {
              return console.error("Failed to push room state", X);
            });
          }
        };
        for (c.s(); !(O = c.n()).done; ) E();
      } catch (P) {
        c.e(P);
      } finally {
        c.f();
      }
    } }, { key: "feedStateUpdate", value: function() {
      var p = D(N().mark(function _(c) {
        var O, E;
        return N().wrap(function(F) {
          for (; ; ) switch (F.prev = F.next) {
            case 0:
              if (c.state_key !== void 0) {
                F.next = 2;
                break;
              }
              throw new Error("Not a state event");
            case 2:
              if (!((c.room_id === this.viewedRoomId || this.canUseRoomTimeline(c.room_id)) && this.canReceiveStateEvent(c.type, c.state_key))) {
                F.next = 21;
                break;
              }
              if (this.pushRoomStateTasks.size !== 0) {
                F.next = 11;
                break;
              }
              return F.next = 6, this.getWidgetVersions();
            case 6:
              if (!F.sent.includes(o.UnstableApiVersion.MSC2762_UPDATE_STATE)) {
                F.next = 9;
                break;
              }
              return F.next = 9, this.transport.send(r.WidgetApiToWidgetAction.UpdateState, { state: [c] });
            case 9:
              F.next = 21;
              break;
            case 11:
              O = this.pushRoomStateResult.get(c.room_id), O === void 0 && (O = /* @__PURE__ */ new Map(), this.pushRoomStateResult.set(c.room_id, O)), E = O.get(c.type), E === void 0 && (E = /* @__PURE__ */ new Map(), O.set(c.type, E)), E.has(c.type) || E.set(c.state_key, c);
            case 16:
              return F.next = 18, Promise.all(b(this.pushRoomStateTasks));
            case 18:
              if (this.pushRoomStateTasks.size > 0) {
                F.next = 16;
                break;
              }
            case 19:
              return F.next = 21, this.flushRoomStateTask;
            case 21:
            case "end":
              return F.stop();
          }
        }, _, this);
      }));
      function d(_) {
        return p.apply(this, arguments);
      }
      return d;
    }() }]), v;
  }(e.EventEmitter);
  return wr.ClientWidgetApi = H, wr;
}
var ra = {};
Object.defineProperty(ra, "__esModule", { value: true });
ra.isErrorResponse = uh;
function ru(e) {
  "@babel/helpers - typeof";
  return ru = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ru(e);
}
function uh(e) {
  var t = e.error;
  return ru(t) === "object" && t !== null && "message" in t && typeof t.message == "string";
}
var Mo = {};
Object.defineProperty(Mo, "__esModule", { value: true });
Mo.WidgetKind = void 0;
var ah = function(e) {
  return e.Room = "room", e.Account = "account", e.Modal = "modal", e;
}({});
Mo.WidgetKind = ah;
var Lo = {};
Object.defineProperty(Lo, "__esModule", { value: true });
Lo.ModalButtonKind = void 0;
var sh = function(e) {
  return e.Primary = "m.primary", e.Secondary = "m.secondary", e.Warning = "m.warning", e.Danger = "m.danger", e.Link = "m.link", e;
}({});
Lo.ModalButtonKind = sh;
var bo = {};
Object.defineProperty(bo, "__esModule", { value: true });
bo.isValidUrl = ch;
function ch(e) {
  if (!e) return false;
  try {
    var t = new URL(e);
    return !(t.protocol !== "http" && t.protocol !== "https");
  } catch (n) {
    if (n instanceof TypeError) return false;
    throw n;
  }
}
var jo = {};
Object.defineProperty(jo, "__esModule", { value: true });
jo.assertPresent = fh;
function fh(e, t) {
  if (!e[t]) throw new Error("".concat(String(t), " is required"));
}
var Sr = {}, Es;
function Yf() {
  if (Es) return Sr;
  Es = 1, Object.defineProperty(Sr, "__esModule", { value: true }), Sr.Widget = void 0;
  var e = jo, t = Wo();
  function n(s) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(g) {
      return typeof g;
    } : function(g) {
      return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
    }, n(s);
  }
  function r(s, g) {
    if (!(s instanceof g)) throw new TypeError("Cannot call a class as a function");
  }
  function i(s, g) {
    for (var k = 0; k < g.length; k++) {
      var m = g[k];
      m.enumerable = m.enumerable || false, m.configurable = true, "value" in m && (m.writable = true), Object.defineProperty(s, l(m.key), m);
    }
  }
  function o(s, g, k) {
    return g && i(s.prototype, g), Object.defineProperty(s, "prototype", { writable: false }), s;
  }
  function l(s) {
    var g = u(s, "string");
    return n(g) === "symbol" ? g : String(g);
  }
  function u(s, g) {
    if (n(s) !== "object" || s === null) return s;
    var k = s[Symbol.toPrimitive];
    if (k !== void 0) {
      var m = k.call(s, g);
      if (n(m) !== "object") return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(s);
  }
  var a = function() {
    function s(g) {
      if (r(this, s), this.definition = g, !this.definition) throw new Error("Definition is required");
      (0, e.assertPresent)(g, "id"), (0, e.assertPresent)(g, "creatorUserId"), (0, e.assertPresent)(g, "type"), (0, e.assertPresent)(g, "url");
    }
    return o(s, [{ key: "creatorUserId", get: function() {
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
    } }, { key: "getCompleteUrl", value: function(k) {
      return (0, t.runTemplate)(this.templateUrl, this.definition, k);
    } }]), s;
  }();
  return Sr.Widget = a, Sr;
}
var Er = {}, ks;
function dh() {
  if (ks) return Er;
  ks = 1, Object.defineProperty(Er, "__esModule", { value: true }), Er.WidgetParser = void 0;
  var e = Yf(), t = bo;
  function n(m) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(M) {
      return typeof M;
    } : function(M) {
      return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M;
    }, n(m);
  }
  function r(m, M) {
    var R = typeof Symbol < "u" && m[Symbol.iterator] || m["@@iterator"];
    if (!R) {
      if (Array.isArray(m) || (R = i(m)) || M) {
        R && (m = R);
        var b = 0, ee = function() {
        };
        return { s: ee, n: function() {
          return b >= m.length ? { done: true } : { done: false, value: m[b++] };
        }, e: function(N) {
          throw N;
        }, f: ee };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var w = true, h = false, S;
    return { s: function() {
      R = R.call(m);
    }, n: function() {
      var N = R.next();
      return w = N.done, N;
    }, e: function(N) {
      h = true, S = N;
    }, f: function() {
      try {
        !w && R.return != null && R.return();
      } finally {
        if (h) throw S;
      }
    } };
  }
  function i(m, M) {
    if (m) {
      if (typeof m == "string") return o(m, M);
      var R = Object.prototype.toString.call(m).slice(8, -1);
      if (R === "Object" && m.constructor && (R = m.constructor.name), R === "Map" || R === "Set") return Array.from(m);
      if (R === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R)) return o(m, M);
    }
  }
  function o(m, M) {
    (M == null || M > m.length) && (M = m.length);
    for (var R = 0, b = new Array(M); R < M; R++) b[R] = m[R];
    return b;
  }
  function l(m, M) {
    if (!(m instanceof M)) throw new TypeError("Cannot call a class as a function");
  }
  function u(m, M) {
    for (var R = 0; R < M.length; R++) {
      var b = M[R];
      b.enumerable = b.enumerable || false, b.configurable = true, "value" in b && (b.writable = true), Object.defineProperty(m, s(b.key), b);
    }
  }
  function a(m, M, R) {
    return R && u(m, R), Object.defineProperty(m, "prototype", { writable: false }), m;
  }
  function s(m) {
    var M = g(m, "string");
    return n(M) === "symbol" ? M : String(M);
  }
  function g(m, M) {
    if (n(m) !== "object" || m === null) return m;
    var R = m[Symbol.toPrimitive];
    if (R !== void 0) {
      var b = R.call(m, M);
      if (n(b) !== "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(m);
  }
  var k = function() {
    function m() {
      l(this, m);
    }
    return a(m, null, [{ key: "parseAccountData", value: function(R) {
      if (!R) return [];
      for (var b = [], ee = 0, w = Object.keys(R); ee < w.length; ee++) {
        var h = w[ee], S = R[h];
        if (S && !(S.type !== "m.widget" && S.type !== "im.vector.modular.widgets") && S.sender) {
          var W = S.state_key || S.id;
          if (W === h) {
            var N = { content: S.content, sender: S.sender, type: "m.widget", state_key: h, event_id: "$example", room_id: "!example", origin_server_ts: 1 }, L = m.parseRoomWidget(N);
            L && b.push(L);
          }
        }
      }
      return b;
    } }, { key: "parseWidgetsFromRoomState", value: function(R) {
      if (!R) return [];
      var b = [], ee = r(R), w;
      try {
        for (ee.s(); !(w = ee.n()).done; ) {
          var h = w.value, S = m.parseRoomWidget(h);
          S && b.push(S);
        }
      } catch (W) {
        ee.e(W);
      } finally {
        ee.f();
      }
      return b;
    } }, { key: "parseRoomWidget", value: function(R) {
      if (!R || R.type !== "m.widget" && R.type !== "im.vector.modular.widgets") return null;
      var b = R.content || {}, ee = { id: R.state_key, creatorUserId: b.creatorUserId || R.sender, name: b.name, type: b.type, url: b.url, waitForIframeLoad: b.waitForIframeLoad, data: b.data };
      return m.processEstimatedWidget(ee);
    } }, { key: "processEstimatedWidget", value: function(R) {
      return !R.id || !R.creatorUserId || !R.type || !(0, t.isValidUrl)(R.url) ? null : new e.Widget(R);
    } }]), m;
  }();
  return Er.WidgetParser = k, Er;
}
var Io = {};
Object.defineProperty(Io, "__esModule", { value: true });
Io.runTemplate = ph;
Io.toString = Xf;
function ph(e, t, n) {
  for (var r = Object.assign({}, t.data, { matrix_room_id: n.widgetRoomId || "", matrix_user_id: n.currentUserId, matrix_display_name: n.userDisplayName || n.currentUserId, matrix_avatar_url: n.userHttpAvatarUrl || "", matrix_widget_id: t.id, "org.matrix.msc2873.client_id": n.clientId || "", "org.matrix.msc2873.client_theme": n.clientTheme || "", "org.matrix.msc2873.client_language": n.clientLanguage || "", "org.matrix.msc3819.matrix_device_id": n.deviceId || "", "org.matrix.msc4039.matrix_base_url": n.baseUrl || "" }), i = e, o = 0, l = Object.keys(r); o < l.length; o++) {
    var u = l[o], a = "$".concat(u).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), s = new RegExp(a, "g");
    i = i.replace(s, encodeURIComponent(Xf(r[u])));
  }
  return i;
}
function Xf(e) {
  return e == null ? "".concat(e) : String(e);
}
var kr = {}, _s;
function vh() {
  if (_s) return kr;
  _s = 1, Object.defineProperty(kr, "__esModule", { value: true }), kr.WidgetDriver = void 0;
  var e = Wo();
  function t(a) {
    "@babel/helpers - typeof";
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, t(a);
  }
  function n(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function r(a, s) {
    for (var g = 0; g < s.length; g++) {
      var k = s[g];
      k.enumerable = k.enumerable || false, k.configurable = true, "value" in k && (k.writable = true), Object.defineProperty(a, o(k.key), k);
    }
  }
  function i(a, s, g) {
    return s && r(a.prototype, s), Object.defineProperty(a, "prototype", { writable: false }), a;
  }
  function o(a) {
    var s = l(a, "string");
    return t(s) === "symbol" ? s : String(s);
  }
  function l(a, s) {
    if (t(a) !== "object" || a === null) return a;
    var g = a[Symbol.toPrimitive];
    if (g !== void 0) {
      var k = g.call(a, s);
      if (t(k) !== "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  var u = function() {
    function a() {
      n(this, a);
    }
    return i(a, [{ key: "validateCapabilities", value: function(g) {
      return Promise.resolve(/* @__PURE__ */ new Set());
    } }, { key: "sendEvent", value: function(g, k) {
      return Promise.reject(new Error("Failed to override function"));
    } }, { key: "sendDelayedEvent", value: function(g, k, m, M) {
      return Promise.reject(new Error("Failed to override function"));
    } }, { key: "updateDelayedEvent", value: function(g, k) {
      return Promise.reject(new Error("Failed to override function"));
    } }, { key: "sendToDevice", value: function(g, k, m) {
      return Promise.reject(new Error("Failed to override function"));
    } }, { key: "readRoomAccountData", value: function(g) {
      return Promise.resolve([]);
    } }, { key: "readRoomEvents", value: function(g, k, m) {
      return Promise.resolve([]);
    } }, { key: "readStateEvents", value: function(g, k, m) {
      return Promise.resolve([]);
    } }, { key: "readRoomTimeline", value: function(g, k, m, M, R, b) {
      return M === void 0 ? this.readRoomEvents(k, m, R, [g], b) : this.readStateEvents(k, M, R, [g]);
    } }, { key: "readRoomState", value: function(g, k, m) {
      return Promise.resolve([]);
    } }, { key: "readEventRelations", value: function(g, k, m, M, R, b, ee, w) {
      return Promise.resolve({ chunk: [] });
    } }, { key: "askOpenID", value: function(g) {
      g.update({ state: e.OpenIDRequestState.Blocked });
    } }, { key: "navigate", value: function(g) {
      throw new Error("Navigation is not implemented");
    } }, { key: "getTurnServers", value: function() {
      throw new Error("TURN server support is not implemented");
    } }, { key: "searchUserDirectory", value: function(g, k) {
      return Promise.resolve({ limited: false, results: [] });
    } }, { key: "getMediaConfig", value: function() {
      throw new Error("Get media config is not implemented");
    } }, { key: "uploadFile", value: function(g) {
      throw new Error("Upload file is not implemented");
    } }, { key: "downloadFile", value: function(g) {
      throw new Error("Download file is not implemented");
    } }, { key: "getKnownRooms", value: function() {
      throw new Error("Querying known rooms is not implemented");
    } }, { key: "processError", value: function(g) {
    } }]), a;
  }();
  return kr.WidgetDriver = u, kr;
}
var Cs;
function Wo() {
  return Cs || (Cs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: true });
    var t = Qv();
    Object.keys(t).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === t[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return t[f];
      } });
    });
    var n = lh();
    Object.keys(n).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === n[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return n[f];
      } });
    });
    var r = ur;
    Object.keys(r).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === r[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return r[f];
      } });
    });
    var i = ta();
    Object.keys(i).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === i[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return i[f];
      } });
    });
    var o = ui;
    Object.keys(o).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === o[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return o[f];
      } });
    });
    var l = ra;
    Object.keys(l).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === l[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return l[f];
      } });
    });
    var u = ln;
    Object.keys(u).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === u[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return u[f];
      } });
    });
    var a = On;
    Object.keys(a).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === a[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return a[f];
      } });
    });
    var s = Tt;
    Object.keys(s).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === s[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return s[f];
      } });
    });
    var g = dt;
    Object.keys(g).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === g[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return g[f];
      } });
    });
    var k = lr;
    Object.keys(k).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === k[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return k[f];
      } });
    });
    var m = Mo;
    Object.keys(m).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === m[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return m[f];
      } });
    });
    var M = Lo;
    Object.keys(M).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === M[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return M[f];
      } });
    });
    var R = ai;
    Object.keys(R).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === R[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return R[f];
      } });
    });
    var b = ci;
    Object.keys(b).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === b[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return b[f];
      } });
    });
    var ee = Dt;
    Object.keys(ee).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === ee[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return ee[f];
      } });
    });
    var w = bo;
    Object.keys(w).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === w[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return w[f];
      } });
    });
    var h = jo;
    Object.keys(h).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === h[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return h[f];
      } });
    });
    var S = Yf();
    Object.keys(S).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === S[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return S[f];
      } });
    });
    var W = dh();
    Object.keys(W).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === W[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return W[f];
      } });
    });
    var N = Io;
    Object.keys(N).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === N[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return N[f];
      } });
    });
    var L = si;
    Object.keys(L).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === L[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return L[f];
      } });
    });
    var D = vh();
    Object.keys(D).forEach(function(f) {
      f === "default" || f === "__esModule" || f in e && e[f] === D[f] || Object.defineProperty(e, f, { enumerable: true, get: function() {
        return D[f];
      } });
    });
  }(sl)), sl;
}
var Eh = Wo();
export {
  Sh as E,
  dd as R,
  qu as a,
  yh as b,
  wh as c,
  mh as d,
  hh as e,
  Ao as f,
  iu as g,
  kv as h,
  _v as i,
  gh as j,
  Eh as l,
  po as r
};
