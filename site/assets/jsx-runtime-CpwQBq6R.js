import { t as e } from "./chunk-Dmt67uKV.js";
var t = e((e2) => {
  var t2 = Symbol.for(`react.element`), n2 = Symbol.for(`react.portal`), r2 = Symbol.for(`react.fragment`), i2 = Symbol.for(`react.strict_mode`), a = Symbol.for(`react.profiler`), o = Symbol.for(`react.provider`), s = Symbol.for(`react.context`), c = Symbol.for(`react.forward_ref`), l = Symbol.for(`react.suspense`), u = Symbol.for(`react.memo`), d = Symbol.for(`react.lazy`), f = Symbol.iterator;
  function p(e3) {
    return typeof e3 != `object` || !e3 ? null : (e3 = f && e3[f] || e3[`@@iterator`], typeof e3 == `function` ? e3 : null);
  }
  var m = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, h = Object.assign, g = {};
  function _(e3, t3, n3) {
    this.props = e3, this.context = t3, this.refs = g, this.updater = n3 || m;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(e3, t3) {
    if (typeof e3 != `object` && typeof e3 != `function` && e3 != null)
      throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);
    this.updater.enqueueSetState(this, e3, t3, `setState`);
  }, _.prototype.forceUpdate = function(e3) {
    this.updater.enqueueForceUpdate(this, e3, `forceUpdate`);
  };
  function v() {
  }
  v.prototype = _.prototype;
  function y(e3, t3, n3) {
    this.props = e3, this.context = t3, this.refs = g, this.updater = n3 || m;
  }
  var b = y.prototype = new v();
  b.constructor = y, h(b, _.prototype), b.isPureReactComponent = true;
  var x = Array.isArray, S = Object.prototype.hasOwnProperty, C = { current: null }, w = { key: true, ref: true, __self: true, __source: true };
  function T(e3, n3, r3) {
    var i3, a2 = {}, o2 = null, s2 = null;
    if (n3 != null)
      for (i3 in n3.ref !== void 0 && (s2 = n3.ref), n3.key !== void 0 && (o2 = `` + n3.key), n3)
        S.call(n3, i3) && !w.hasOwnProperty(i3) && (a2[i3] = n3[i3]);
    var c2 = arguments.length - 2;
    if (c2 === 1)
      a2.children = r3;
    else if (1 < c2) {
      for (var l2 = Array(c2), u2 = 0; u2 < c2; u2++)
        l2[u2] = arguments[u2 + 2];
      a2.children = l2;
    }
    if (e3 && e3.defaultProps)
      for (i3 in c2 = e3.defaultProps, c2)
        a2[i3] === void 0 && (a2[i3] = c2[i3]);
    return { $$typeof: t2, type: e3, key: o2, ref: s2, props: a2, _owner: C.current };
  }
  function E(e3, n3) {
    return { $$typeof: t2, type: e3.type, key: n3, ref: e3.ref, props: e3.props, _owner: e3._owner };
  }
  function D(e3) {
    return typeof e3 == `object` && !!e3 && e3.$$typeof === t2;
  }
  function O(e3) {
    var t3 = { "=": `=0`, ":": `=2` };
    return `$` + e3.replace(/[=:]/g, function(e4) {
      return t3[e4];
    });
  }
  var k = /\/+/g;
  function A(e3, t3) {
    return typeof e3 == `object` && e3 && e3.key != null ? O(`` + e3.key) : t3.toString(36);
  }
  function j(e3, r3, i3, a2, o2) {
    var s2 = typeof e3;
    (s2 === `undefined` || s2 === `boolean`) && (e3 = null);
    var c2 = false;
    if (e3 === null)
      c2 = true;
    else
      switch (s2) {
        case `string`:
        case `number`:
          c2 = true;
          break;
        case `object`:
          switch (e3.$$typeof) {
            case t2:
            case n2:
              c2 = true;
          }
      }
    if (c2)
      return c2 = e3, o2 = o2(c2), e3 = a2 === `` ? `.` + A(c2, 0) : a2, x(o2) ? (i3 = ``, e3 != null && (i3 = e3.replace(k, `$&/`) + `/`), j(o2, r3, i3, ``, function(e4) {
        return e4;
      })) : o2 != null && (D(o2) && (o2 = E(o2, i3 + (!o2.key || c2 && c2.key === o2.key ? `` : (`` + o2.key).replace(k, `$&/`) + `/`) + e3)), r3.push(o2)), 1;
    if (c2 = 0, a2 = a2 === `` ? `.` : a2 + `:`, x(e3))
      for (var l2 = 0; l2 < e3.length; l2++) {
        s2 = e3[l2];
        var u2 = a2 + A(s2, l2);
        c2 += j(s2, r3, i3, u2, o2);
      }
    else if (u2 = p(e3), typeof u2 == `function`)
      for (e3 = u2.call(e3), l2 = 0; !(s2 = e3.next()).done; )
        s2 = s2.value, u2 = a2 + A(s2, l2++), c2 += j(s2, r3, i3, u2, o2);
    else if (s2 === `object`)
      throw r3 = String(e3), Error(`Objects are not valid as a React child (found: ` + (r3 === `[object Object]` ? `object with keys {` + Object.keys(e3).join(`, `) + `}` : r3) + `). If you meant to render a collection of children, use an array instead.`);
    return c2;
  }
  function M(e3, t3, n3) {
    if (e3 == null)
      return e3;
    var r3 = [], i3 = 0;
    return j(e3, r3, ``, ``, function(e4) {
      return t3.call(n3, e4, i3++);
    }), r3;
  }
  function N(e3) {
    if (e3._status === -1) {
      var t3 = e3._result;
      t3 = t3(), t3.then(function(t4) {
        (e3._status === 0 || e3._status === -1) && (e3._status = 1, e3._result = t4);
      }, function(t4) {
        (e3._status === 0 || e3._status === -1) && (e3._status = 2, e3._result = t4);
      }), e3._status === -1 && (e3._status = 0, e3._result = t3);
    }
    if (e3._status === 1)
      return e3._result.default;
    throw e3._result;
  }
  var P = { current: null }, F = { transition: null }, I = { ReactCurrentDispatcher: P, ReactCurrentBatchConfig: F, ReactCurrentOwner: C };
  e2.Children = { map: M, forEach: function(e3, t3, n3) {
    M(e3, function() {
      t3.apply(this, arguments);
    }, n3);
  }, count: function(e3) {
    var t3 = 0;
    return M(e3, function() {
      t3++;
    }), t3;
  }, toArray: function(e3) {
    return M(e3, function(e4) {
      return e4;
    }) || [];
  }, only: function(e3) {
    if (!D(e3))
      throw Error(`React.Children.only expected to receive a single React element child.`);
    return e3;
  } }, e2.Component = _, e2.Fragment = r2, e2.Profiler = a, e2.PureComponent = y, e2.StrictMode = i2, e2.Suspense = l, e2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, e2.cloneElement = function(e3, n3, r3) {
    if (e3 == null)
      throw Error(`React.cloneElement(...): The argument must be a React element, but you passed ` + e3 + `.`);
    var i3 = h({}, e3.props), a2 = e3.key, o2 = e3.ref, s2 = e3._owner;
    if (n3 != null) {
      if (n3.ref !== void 0 && (o2 = n3.ref, s2 = C.current), n3.key !== void 0 && (a2 = `` + n3.key), e3.type && e3.type.defaultProps)
        var c2 = e3.type.defaultProps;
      for (l2 in n3)
        S.call(n3, l2) && !w.hasOwnProperty(l2) && (i3[l2] = n3[l2] === void 0 && c2 !== void 0 ? c2[l2] : n3[l2]);
    }
    var l2 = arguments.length - 2;
    if (l2 === 1)
      i3.children = r3;
    else if (1 < l2) {
      c2 = Array(l2);
      for (var u2 = 0; u2 < l2; u2++)
        c2[u2] = arguments[u2 + 2];
      i3.children = c2;
    }
    return { $$typeof: t2, type: e3.type, key: a2, ref: o2, props: i3, _owner: s2 };
  }, e2.createContext = function(e3) {
    return e3 = { $$typeof: s, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e3.Provider = { $$typeof: o, _context: e3 }, e3.Consumer = e3;
  }, e2.createElement = T, e2.createFactory = function(e3) {
    var t3 = T.bind(null, e3);
    return t3.type = e3, t3;
  }, e2.createRef = function() {
    return { current: null };
  }, e2.forwardRef = function(e3) {
    return { $$typeof: c, render: e3 };
  }, e2.isValidElement = D, e2.lazy = function(e3) {
    return { $$typeof: d, _payload: { _status: -1, _result: e3 }, _init: N };
  }, e2.memo = function(e3, t3) {
    return { $$typeof: u, type: e3, compare: t3 === void 0 ? null : t3 };
  }, e2.startTransition = function(e3) {
    var t3 = F.transition;
    F.transition = {};
    try {
      e3();
    } finally {
      F.transition = t3;
    }
  }, e2.unstable_act = function() {
    throw Error(`act(...) is not supported in production builds of React.`);
  }, e2.useCallback = function(e3, t3) {
    return P.current.useCallback(e3, t3);
  }, e2.useContext = function(e3) {
    return P.current.useContext(e3);
  }, e2.useDebugValue = function() {
  }, e2.useDeferredValue = function(e3) {
    return P.current.useDeferredValue(e3);
  }, e2.useEffect = function(e3, t3) {
    return P.current.useEffect(e3, t3);
  }, e2.useId = function() {
    return P.current.useId();
  }, e2.useImperativeHandle = function(e3, t3, n3) {
    return P.current.useImperativeHandle(e3, t3, n3);
  }, e2.useInsertionEffect = function(e3, t3) {
    return P.current.useInsertionEffect(e3, t3);
  }, e2.useLayoutEffect = function(e3, t3) {
    return P.current.useLayoutEffect(e3, t3);
  }, e2.useMemo = function(e3, t3) {
    return P.current.useMemo(e3, t3);
  }, e2.useReducer = function(e3, t3, n3) {
    return P.current.useReducer(e3, t3, n3);
  }, e2.useRef = function(e3) {
    return P.current.useRef(e3);
  }, e2.useState = function(e3) {
    return P.current.useState(e3);
  }, e2.useSyncExternalStore = function(e3, t3, n3) {
    return P.current.useSyncExternalStore(e3, t3, n3);
  }, e2.useTransition = function() {
    return P.current.useTransition();
  }, e2.version = `18.2.0`;
}), n = e((e2, n2) => {
  n2.exports = t();
}), r = e((e2) => {
  var t2 = n(), r2 = Symbol.for(`react.element`), i2 = Symbol.for(`react.fragment`), a = Object.prototype.hasOwnProperty, o = t2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: true, ref: true, __self: true, __source: true };
  function c(e3, t3, n2) {
    var i3, c2 = {}, l = null, u = null;
    for (i3 in n2 !== void 0 && (l = `` + n2), t3.key !== void 0 && (l = `` + t3.key), t3.ref !== void 0 && (u = t3.ref), t3)
      a.call(t3, i3) && !s.hasOwnProperty(i3) && (c2[i3] = t3[i3]);
    if (e3 && e3.defaultProps)
      for (i3 in t3 = e3.defaultProps, t3)
        c2[i3] === void 0 && (c2[i3] = t3[i3]);
    return { $$typeof: r2, type: e3, key: l, ref: u, props: c2, _owner: o.current };
  }
  e2.Fragment = i2, e2.jsx = c, e2.jsxs = c;
}), i = e((e2, t2) => {
  t2.exports = r();
});
export {
  n,
  i as t
};
