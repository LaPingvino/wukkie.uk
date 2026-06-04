import { t as e } from "./chunk-Dmt67uKV.js";
var t = e((e2, t2) => {
  var n = typeof Reflect == `object` ? Reflect : null, r = n && typeof n.apply == `function` ? n.apply : function(e3, t3, n2) {
    return Function.prototype.apply.call(e3, t3, n2);
  }, i = n && typeof n.ownKeys == `function` ? n.ownKeys : Object.getOwnPropertySymbols ? function(e3) {
    return Object.getOwnPropertyNames(e3).concat(Object.getOwnPropertySymbols(e3));
  } : function(e3) {
    return Object.getOwnPropertyNames(e3);
  };
  function a(e3) {
    console && console.warn && console.warn(e3);
  }
  var o = Number.isNaN || function(e3) {
    return e3 !== e3;
  };
  function s() {
    s.init.call(this);
  }
  t2.exports = s, t2.exports.once = y, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
  var c = 10;
  function l(e3) {
    if (typeof e3 != `function`)
      throw TypeError(`The "listener" argument must be of type Function. Received type ` + typeof e3);
  }
  Object.defineProperty(s, `defaultMaxListeners`, { enumerable: true, get: function() {
    return c;
  }, set: function(e3) {
    if (typeof e3 != `number` || e3 < 0 || o(e3))
      throw RangeError(`The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ` + e3 + `.`);
    c = e3;
  } }), s.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, s.prototype.setMaxListeners = function(e3) {
    if (typeof e3 != `number` || e3 < 0 || o(e3))
      throw RangeError(`The value of "n" is out of range. It must be a non-negative number. Received ` + e3 + `.`);
    return this._maxListeners = e3, this;
  };
  function u(e3) {
    return e3._maxListeners === void 0 ? s.defaultMaxListeners : e3._maxListeners;
  }
  s.prototype.getMaxListeners = function() {
    return u(this);
  }, s.prototype.emit = function(e3) {
    for (var t3 = [], n2 = 1; n2 < arguments.length; n2++)
      t3.push(arguments[n2]);
    var i2 = e3 === `error`, a2 = this._events;
    if (a2 !== void 0)
      i2 && (i2 = a2.error === void 0);
    else if (!i2)
      return false;
    if (i2) {
      var o2;
      if (t3.length > 0 && (o2 = t3[0]), o2 instanceof Error)
        throw o2;
      var s2 = Error(`Unhandled error.` + (o2 ? ` (` + o2.message + `)` : ``));
      throw s2.context = o2, s2;
    }
    var c2 = a2[e3];
    if (c2 === void 0)
      return false;
    if (typeof c2 == `function`)
      r(c2, this, t3);
    else
      for (var l2 = c2.length, u2 = g(c2, l2), n2 = 0; n2 < l2; ++n2)
        r(u2[n2], this, t3);
    return true;
  };
  function d(e3, t3, n2, r2) {
    var i2, o2, s2;
    if (l(n2), o2 = e3._events, o2 === void 0 ? (o2 = e3._events = /* @__PURE__ */ Object.create(null), e3._eventsCount = 0) : (o2.newListener !== void 0 && (e3.emit(`newListener`, t3, n2.listener ? n2.listener : n2), o2 = e3._events), s2 = o2[t3]), s2 === void 0)
      s2 = o2[t3] = n2, ++e3._eventsCount;
    else if (typeof s2 == `function` ? s2 = o2[t3] = r2 ? [n2, s2] : [s2, n2] : r2 ? s2.unshift(n2) : s2.push(n2), i2 = u(e3), i2 > 0 && s2.length > i2 && !s2.warned) {
      s2.warned = true;
      var c2 = Error(`Possible EventEmitter memory leak detected. ` + s2.length + ` ` + String(t3) + ` listeners added. Use emitter.setMaxListeners() to increase limit`);
      c2.name = `MaxListenersExceededWarning`, c2.emitter = e3, c2.type = t3, c2.count = s2.length, a(c2);
    }
    return e3;
  }
  s.prototype.addListener = function(e3, t3) {
    return d(this, e3, t3, false);
  }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e3, t3) {
    return d(this, e3, t3, true);
  };
  function f() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function p(e3, t3, n2) {
    var r2 = { fired: false, wrapFn: void 0, target: e3, type: t3, listener: n2 }, i2 = f.bind(r2);
    return i2.listener = n2, r2.wrapFn = i2, i2;
  }
  s.prototype.once = function(e3, t3) {
    return l(t3), this.on(e3, p(this, e3, t3)), this;
  }, s.prototype.prependOnceListener = function(e3, t3) {
    return l(t3), this.prependListener(e3, p(this, e3, t3)), this;
  }, s.prototype.removeListener = function(e3, t3) {
    var n2, r2, i2, a2, o2;
    if (l(t3), r2 = this._events, r2 === void 0 || (n2 = r2[e3], n2 === void 0))
      return this;
    if (n2 === t3 || n2.listener === t3)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete r2[e3], r2.removeListener && this.emit(`removeListener`, e3, n2.listener || t3));
    else if (typeof n2 != `function`) {
      for (i2 = -1, a2 = n2.length - 1; a2 >= 0; a2--)
        if (n2[a2] === t3 || n2[a2].listener === t3) {
          o2 = n2[a2].listener, i2 = a2;
          break;
        }
      if (i2 < 0)
        return this;
      i2 === 0 ? n2.shift() : _(n2, i2), n2.length === 1 && (r2[e3] = n2[0]), r2.removeListener !== void 0 && this.emit(`removeListener`, e3, o2 || t3);
    }
    return this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e3) {
    var t3, n2 = this._events, r2;
    if (n2 === void 0)
      return this;
    if (n2.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n2[e3] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n2[e3]), this;
    if (arguments.length === 0) {
      var i2 = Object.keys(n2), a2;
      for (r2 = 0; r2 < i2.length; ++r2)
        a2 = i2[r2], a2 !== `removeListener` && this.removeAllListeners(a2);
      return this.removeAllListeners(`removeListener`), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (t3 = n2[e3], typeof t3 == `function`)
      this.removeListener(e3, t3);
    else if (t3 !== void 0)
      for (r2 = t3.length - 1; r2 >= 0; r2--)
        this.removeListener(e3, t3[r2]);
    return this;
  };
  function m(e3, t3, n2) {
    var r2 = e3._events;
    if (r2 === void 0)
      return [];
    var i2 = r2[t3];
    return i2 === void 0 ? [] : typeof i2 == `function` ? n2 ? [i2.listener || i2] : [i2] : n2 ? v(i2) : g(i2, i2.length);
  }
  s.prototype.listeners = function(e3) {
    return m(this, e3, true);
  }, s.prototype.rawListeners = function(e3) {
    return m(this, e3, false);
  }, s.listenerCount = function(e3, t3) {
    return typeof e3.listenerCount == `function` ? e3.listenerCount(t3) : h.call(e3, t3);
  }, s.prototype.listenerCount = h;
  function h(e3) {
    var t3 = this._events;
    if (t3 !== void 0) {
      var n2 = t3[e3];
      if (typeof n2 == `function`)
        return 1;
      if (n2 !== void 0)
        return n2.length;
    }
    return 0;
  }
  s.prototype.eventNames = function() {
    return this._eventsCount > 0 ? i(this._events) : [];
  };
  function g(e3, t3) {
    for (var n2 = Array(t3), r2 = 0; r2 < t3; ++r2)
      n2[r2] = e3[r2];
    return n2;
  }
  function _(e3, t3) {
    for (; t3 + 1 < e3.length; t3++)
      e3[t3] = e3[t3 + 1];
    e3.pop();
  }
  function v(e3) {
    for (var t3 = Array(e3.length), n2 = 0; n2 < t3.length; ++n2)
      t3[n2] = e3[n2].listener || e3[n2];
    return t3;
  }
  function y(e3, t3) {
    return new Promise(function(n2, r2) {
      function i2(n3) {
        e3.removeListener(t3, a2), r2(n3);
      }
      function a2() {
        typeof e3.removeListener == `function` && e3.removeListener(`error`, i2), n2([].slice.call(arguments));
      }
      x(e3, t3, a2, { once: true }), t3 !== `error` && b(e3, i2, { once: true });
    });
  }
  function b(e3, t3, n2) {
    typeof e3.on == `function` && x(e3, `error`, t3, n2);
  }
  function x(e3, t3, n2, r2) {
    if (typeof e3.on == `function`)
      r2.once ? e3.once(t3, n2) : e3.on(t3, n2);
    else if (typeof e3.addEventListener == `function`)
      e3.addEventListener(t3, function i2(a2) {
        r2.once && e3.removeEventListener(t3, i2), n2(a2);
      });
    else
      throw TypeError(`The "emitter" argument must be of type EventEmitter. Received type ` + typeof e3);
  }
});
export {
  t
};
