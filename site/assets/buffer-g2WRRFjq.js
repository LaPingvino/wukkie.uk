import { t as e } from "./chunk-Dmt67uKV.js";
var t = e(((e2) => {
  e2.byteLength = c, e2.toByteArray = u, e2.fromByteArray = p;
  for (var t2 = [], n2 = [], r2 = typeof Uint8Array < `u` ? Uint8Array : Array, i = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, a = 0, o = i.length; a < o; ++a) t2[a] = i[a], n2[i.charCodeAt(a)] = a;
  n2[45] = 62, n2[95] = 63;
  function s(e3) {
    var t3 = e3.length;
    if (t3 % 4 > 0) throw Error(`Invalid string. Length must be a multiple of 4`);
    var n3 = e3.indexOf(`=`);
    n3 === -1 && (n3 = t3);
    var r3 = n3 === t3 ? 0 : 4 - n3 % 4;
    return [n3, r3];
  }
  function c(e3) {
    var t3 = s(e3), n3 = t3[0], r3 = t3[1];
    return (n3 + r3) * 3 / 4 - r3;
  }
  function l(e3, t3, n3) {
    return (t3 + n3) * 3 / 4 - n3;
  }
  function u(e3) {
    var t3, i2 = s(e3), a2 = i2[0], o2 = i2[1], c2 = new r2(l(e3, a2, o2)), u2 = 0, d2 = o2 > 0 ? a2 - 4 : a2, f2;
    for (f2 = 0; f2 < d2; f2 += 4) t3 = n2[e3.charCodeAt(f2)] << 18 | n2[e3.charCodeAt(f2 + 1)] << 12 | n2[e3.charCodeAt(f2 + 2)] << 6 | n2[e3.charCodeAt(f2 + 3)], c2[u2++] = t3 >> 16 & 255, c2[u2++] = t3 >> 8 & 255, c2[u2++] = t3 & 255;
    return o2 === 2 && (t3 = n2[e3.charCodeAt(f2)] << 2 | n2[e3.charCodeAt(f2 + 1)] >> 4, c2[u2++] = t3 & 255), o2 === 1 && (t3 = n2[e3.charCodeAt(f2)] << 10 | n2[e3.charCodeAt(f2 + 1)] << 4 | n2[e3.charCodeAt(f2 + 2)] >> 2, c2[u2++] = t3 >> 8 & 255, c2[u2++] = t3 & 255), c2;
  }
  function d(e3) {
    return t2[e3 >> 18 & 63] + t2[e3 >> 12 & 63] + t2[e3 >> 6 & 63] + t2[e3 & 63];
  }
  function f(e3, t3, n3) {
    for (var r3, i2 = [], a2 = t3; a2 < n3; a2 += 3) r3 = (e3[a2] << 16 & 16711680) + (e3[a2 + 1] << 8 & 65280) + (e3[a2 + 2] & 255), i2.push(d(r3));
    return i2.join(``);
  }
  function p(e3) {
    for (var n3, r3 = e3.length, i2 = r3 % 3, a2 = [], o2 = 16383, s2 = 0, c2 = r3 - i2; s2 < c2; s2 += o2) a2.push(f(e3, s2, s2 + o2 > c2 ? c2 : s2 + o2));
    return i2 === 1 ? (n3 = e3[r3 - 1], a2.push(t2[n3 >> 2] + t2[n3 << 4 & 63] + `==`)) : i2 === 2 && (n3 = (e3[r3 - 2] << 8) + e3[r3 - 1], a2.push(t2[n3 >> 10] + t2[n3 >> 4 & 63] + t2[n3 << 2 & 63] + `=`)), a2.join(``);
  }
})), n = e(((e2) => {
  e2.read = function(e3, t2, n2, r2, i) {
    var a, o, s = i * 8 - r2 - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n2 ? i - 1 : 0, f = n2 ? -1 : 1, p = e3[t2 + d];
    for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e3[t2 + d], d += f, u -= 8) ;
    for (o = a & (1 << -u) - 1, a >>= -u, u += r2; u > 0; o = o * 256 + e3[t2 + d], d += f, u -= 8) ;
    if (a === 0) a = 1 - l;
    else if (a === c) return o ? NaN : (p ? -1 : 1) * (1 / 0);
    else o += 2 ** r2, a -= l;
    return (p ? -1 : 1) * o * 2 ** (a - r2);
  }, e2.write = function(e3, t2, n2, r2, i, a) {
    var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r2 ? 0 : a - 1, m = r2 ? 1 : -1, h = t2 < 0 || t2 === 0 && 1 / t2 < 0 ? 1 : 0;
    for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (s = isNaN(t2) ? 1 : 0, o = u) : (o = Math.floor(Math.log(t2) / Math.LN2), t2 * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t2 += f / c : t2 += f * 2 ** (1 - d), t2 * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t2 * c - 1) * 2 ** i, o += d) : (s = t2 * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e3[n2 + p] = s & 255, p += m, s /= 256, i -= 8) ;
    for (o = o << i | s, l += i; l > 0; e3[n2 + p] = o & 255, p += m, o /= 256, l -= 8) ;
    e3[n2 + p - m] |= h * 128;
  };
})), r = e(((e2) => {
  var r2 = t(), i = n(), a = typeof Symbol == `function` && typeof Symbol.for == `function` ? /* @__PURE__ */ Symbol.for(`nodejs.util.inspect.custom`) : null;
  e2.Buffer = l, e2.SlowBuffer = y, e2.INSPECT_MAX_BYTES = 50;
  var o = 2147483647;
  e2.kMaxLength = o, l.TYPED_ARRAY_SUPPORT = s(), !l.TYPED_ARRAY_SUPPORT && typeof console < `u` && typeof console.error == `function` && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function s() {
    try {
      let e3 = new Uint8Array(1), t2 = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(t2, Uint8Array.prototype), Object.setPrototypeOf(e3, t2), e3.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(l.prototype, `parent`, { enumerable: true, get: function() {
    if (l.isBuffer(this)) return this.buffer;
  } }), Object.defineProperty(l.prototype, `offset`, { enumerable: true, get: function() {
    if (l.isBuffer(this)) return this.byteOffset;
  } });
  function c(e3) {
    if (e3 > o) throw RangeError(`The value "` + e3 + `" is invalid for option "size"`);
    let t2 = new Uint8Array(e3);
    return Object.setPrototypeOf(t2, l.prototype), t2;
  }
  function l(e3, t2, n2) {
    if (typeof e3 == `number`) {
      if (typeof t2 == `string`) throw TypeError(`The "string" argument must be of type string. Received type number`);
      return p(e3);
    }
    return u(e3, t2, n2);
  }
  l.poolSize = 8192;
  function u(e3, t2, n2) {
    if (typeof e3 == `string`) return m(e3, t2);
    if (ArrayBuffer.isView(e3)) return ee(e3);
    if (e3 == null) throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e3);
    if (Z(e3, ArrayBuffer) || e3 && Z(e3.buffer, ArrayBuffer) || typeof SharedArrayBuffer < `u` && (Z(e3, SharedArrayBuffer) || e3 && Z(e3.buffer, SharedArrayBuffer))) return g(e3, t2, n2);
    if (typeof e3 == `number`) throw TypeError(`The "value" argument must not be of type number. Received type number`);
    let r3 = e3.valueOf && e3.valueOf();
    if (r3 != null && r3 !== e3) return l.from(r3, t2, n2);
    let i2 = _(e3);
    if (i2) return i2;
    if (typeof Symbol < `u` && Symbol.toPrimitive != null && typeof e3[Symbol.toPrimitive] == `function`) return l.from(e3[Symbol.toPrimitive](`string`), t2, n2);
    throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e3);
  }
  l.from = function(e3, t2, n2) {
    return u(e3, t2, n2);
  }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array);
  function d(e3) {
    if (typeof e3 != `number`) throw TypeError(`"size" argument must be of type number`);
    if (e3 < 0) throw RangeError(`The value "` + e3 + `" is invalid for option "size"`);
  }
  function f(e3, t2, n2) {
    return d(e3), e3 <= 0 || t2 === void 0 ? c(e3) : typeof n2 == `string` ? c(e3).fill(t2, n2) : c(e3).fill(t2);
  }
  l.alloc = function(e3, t2, n2) {
    return f(e3, t2, n2);
  };
  function p(e3) {
    return d(e3), c(e3 < 0 ? 0 : v(e3) | 0);
  }
  l.allocUnsafe = function(e3) {
    return p(e3);
  }, l.allocUnsafeSlow = function(e3) {
    return p(e3);
  };
  function m(e3, t2) {
    if ((typeof t2 != `string` || t2 === ``) && (t2 = `utf8`), !l.isEncoding(t2)) throw TypeError(`Unknown encoding: ` + t2);
    let n2 = b(e3, t2) | 0, r3 = c(n2), i2 = r3.write(e3, t2);
    return i2 !== n2 && (r3 = r3.slice(0, i2)), r3;
  }
  function h(e3) {
    let t2 = e3.length < 0 ? 0 : v(e3.length) | 0, n2 = c(t2);
    for (let r3 = 0; r3 < t2; r3 += 1) n2[r3] = e3[r3] & 255;
    return n2;
  }
  function ee(e3) {
    if (Z(e3, Uint8Array)) {
      let t2 = new Uint8Array(e3);
      return g(t2.buffer, t2.byteOffset, t2.byteLength);
    }
    return h(e3);
  }
  function g(e3, t2, n2) {
    if (t2 < 0 || e3.byteLength < t2) throw RangeError(`"offset" is outside of buffer bounds`);
    if (e3.byteLength < t2 + (n2 || 0)) throw RangeError(`"length" is outside of buffer bounds`);
    let r3;
    return r3 = t2 === void 0 && n2 === void 0 ? new Uint8Array(e3) : n2 === void 0 ? new Uint8Array(e3, t2) : new Uint8Array(e3, t2, n2), Object.setPrototypeOf(r3, l.prototype), r3;
  }
  function _(e3) {
    if (l.isBuffer(e3)) {
      let t2 = v(e3.length) | 0, n2 = c(t2);
      return n2.length === 0 || e3.copy(n2, 0, 0, t2), n2;
    }
    if (e3.length !== void 0) return typeof e3.length != `number` || Q(e3.length) ? c(0) : h(e3);
    if (e3.type === `Buffer` && Array.isArray(e3.data)) return h(e3.data);
  }
  function v(e3) {
    if (e3 >= o) throw RangeError(`Attempt to allocate Buffer larger than maximum size: 0x` + o.toString(16) + ` bytes`);
    return e3 | 0;
  }
  function y(e3) {
    return +e3 != e3 && (e3 = 0), l.alloc(+e3);
  }
  l.isBuffer = function(e3) {
    return e3 != null && e3._isBuffer === true && e3 !== l.prototype;
  }, l.compare = function(e3, t2) {
    if (Z(e3, Uint8Array) && (e3 = l.from(e3, e3.offset, e3.byteLength)), Z(t2, Uint8Array) && (t2 = l.from(t2, t2.offset, t2.byteLength)), !l.isBuffer(e3) || !l.isBuffer(t2)) throw TypeError(`The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`);
    if (e3 === t2) return 0;
    let n2 = e3.length, r3 = t2.length;
    for (let i2 = 0, a2 = Math.min(n2, r3); i2 < a2; ++i2) if (e3[i2] !== t2[i2]) {
      n2 = e3[i2], r3 = t2[i2];
      break;
    }
    return n2 < r3 ? -1 : r3 < n2 ? 1 : 0;
  }, l.isEncoding = function(e3) {
    switch (String(e3).toLowerCase()) {
      case `hex`:
      case `utf8`:
      case `utf-8`:
      case `ascii`:
      case `latin1`:
      case `binary`:
      case `base64`:
      case `ucs2`:
      case `ucs-2`:
      case `utf16le`:
      case `utf-16le`:
        return true;
      default:
        return false;
    }
  }, l.concat = function(e3, t2) {
    if (!Array.isArray(e3)) throw TypeError(`"list" argument must be an Array of Buffers`);
    if (e3.length === 0) return l.alloc(0);
    let n2;
    if (t2 === void 0) for (t2 = 0, n2 = 0; n2 < e3.length; ++n2) t2 += e3[n2].length;
    let r3 = l.allocUnsafe(t2), i2 = 0;
    for (n2 = 0; n2 < e3.length; ++n2) {
      let t3 = e3[n2];
      if (Z(t3, Uint8Array)) i2 + t3.length > r3.length ? (l.isBuffer(t3) || (t3 = l.from(t3)), t3.copy(r3, i2)) : Uint8Array.prototype.set.call(r3, t3, i2);
      else if (l.isBuffer(t3)) t3.copy(r3, i2);
      else throw TypeError(`"list" argument must be an Array of Buffers`);
      i2 += t3.length;
    }
    return r3;
  };
  function b(e3, t2) {
    if (l.isBuffer(e3)) return e3.length;
    if (ArrayBuffer.isView(e3) || Z(e3, ArrayBuffer)) return e3.byteLength;
    if (typeof e3 != `string`) throw TypeError(`The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ` + typeof e3);
    let n2 = e3.length, r3 = arguments.length > 2 && arguments[2] === true;
    if (!r3 && n2 === 0) return 0;
    let i2 = false;
    for (; ; ) switch (t2) {
      case `ascii`:
      case `latin1`:
      case `binary`:
        return n2;
      case `utf8`:
      case `utf-8`:
        return J(e3).length;
      case `ucs2`:
      case `ucs-2`:
      case `utf16le`:
      case `utf-16le`:
        return n2 * 2;
      case `hex`:
        return n2 >>> 1;
      case `base64`:
        return Y(e3).length;
      default:
        if (i2) return r3 ? -1 : J(e3).length;
        t2 = (`` + t2).toLowerCase(), i2 = true;
    }
  }
  l.byteLength = b;
  function x(e3, t2, n2) {
    let r3 = false;
    if ((t2 === void 0 || t2 < 0) && (t2 = 0), t2 > this.length || ((n2 === void 0 || n2 > this.length) && (n2 = this.length), n2 <= 0) || (n2 >>>= 0, t2 >>>= 0, n2 <= t2)) return ``;
    for (e3 ||= `utf8`; ; ) switch (e3) {
      case `hex`:
        return j(this, t2, n2);
      case `utf8`:
      case `utf-8`:
        return E(this, t2, n2);
      case `ascii`:
        return k(this, t2, n2);
      case `latin1`:
      case `binary`:
        return A(this, t2, n2);
      case `base64`:
        return T(this, t2, n2);
      case `ucs2`:
      case `ucs-2`:
      case `utf16le`:
      case `utf-16le`:
        return M(this, t2, n2);
      default:
        if (r3) throw TypeError(`Unknown encoding: ` + e3);
        e3 = (e3 + ``).toLowerCase(), r3 = true;
    }
  }
  l.prototype._isBuffer = true;
  function S(e3, t2, n2) {
    let r3 = e3[t2];
    e3[t2] = e3[n2], e3[n2] = r3;
  }
  l.prototype.swap16 = function() {
    let e3 = this.length;
    if (e3 % 2 != 0) throw RangeError(`Buffer size must be a multiple of 16-bits`);
    for (let t2 = 0; t2 < e3; t2 += 2) S(this, t2, t2 + 1);
    return this;
  }, l.prototype.swap32 = function() {
    let e3 = this.length;
    if (e3 % 4 != 0) throw RangeError(`Buffer size must be a multiple of 32-bits`);
    for (let t2 = 0; t2 < e3; t2 += 4) S(this, t2, t2 + 3), S(this, t2 + 1, t2 + 2);
    return this;
  }, l.prototype.swap64 = function() {
    let e3 = this.length;
    if (e3 % 8 != 0) throw RangeError(`Buffer size must be a multiple of 64-bits`);
    for (let t2 = 0; t2 < e3; t2 += 8) S(this, t2, t2 + 7), S(this, t2 + 1, t2 + 6), S(this, t2 + 2, t2 + 5), S(this, t2 + 3, t2 + 4);
    return this;
  }, l.prototype.toString = function() {
    let e3 = this.length;
    return e3 === 0 ? `` : arguments.length === 0 ? E(this, 0, e3) : x.apply(this, arguments);
  }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(e3) {
    if (!l.isBuffer(e3)) throw TypeError(`Argument must be a Buffer`);
    return this === e3 ? true : l.compare(this, e3) === 0;
  }, l.prototype.inspect = function() {
    let t2 = ``, n2 = e2.INSPECT_MAX_BYTES;
    return t2 = this.toString(`hex`, 0, n2).replace(/(.{2})/g, `$1 `).trim(), this.length > n2 && (t2 += ` ... `), `<Buffer ` + t2 + `>`;
  }, a && (l.prototype[a] = l.prototype.inspect), l.prototype.compare = function(e3, t2, n2, r3, i2) {
    if (Z(e3, Uint8Array) && (e3 = l.from(e3, e3.offset, e3.byteLength)), !l.isBuffer(e3)) throw TypeError(`The "target" argument must be one of type Buffer or Uint8Array. Received type ` + typeof e3);
    if (t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = e3 ? e3.length : 0), r3 === void 0 && (r3 = 0), i2 === void 0 && (i2 = this.length), t2 < 0 || n2 > e3.length || r3 < 0 || i2 > this.length) throw RangeError(`out of range index`);
    if (r3 >= i2 && t2 >= n2) return 0;
    if (r3 >= i2) return -1;
    if (t2 >= n2) return 1;
    if (t2 >>>= 0, n2 >>>= 0, r3 >>>= 0, i2 >>>= 0, this === e3) return 0;
    let a2 = i2 - r3, o2 = n2 - t2, s2 = Math.min(a2, o2), c2 = this.slice(r3, i2), u2 = e3.slice(t2, n2);
    for (let e4 = 0; e4 < s2; ++e4) if (c2[e4] !== u2[e4]) {
      a2 = c2[e4], o2 = u2[e4];
      break;
    }
    return a2 < o2 ? -1 : o2 < a2 ? 1 : 0;
  };
  function C(e3, t2, n2, r3, i2) {
    if (e3.length === 0) return -1;
    if (typeof n2 == `string` ? (r3 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, Q(n2) && (n2 = i2 ? 0 : e3.length - 1), n2 < 0 && (n2 = e3.length + n2), n2 >= e3.length) {
      if (i2) return -1;
      n2 = e3.length - 1;
    } else if (n2 < 0) if (i2) n2 = 0;
    else return -1;
    if (typeof t2 == `string` && (t2 = l.from(t2, r3)), l.isBuffer(t2)) return t2.length === 0 ? -1 : w(e3, t2, n2, r3, i2);
    if (typeof t2 == `number`) return t2 &= 255, typeof Uint8Array.prototype.indexOf == `function` ? i2 ? Uint8Array.prototype.indexOf.call(e3, t2, n2) : Uint8Array.prototype.lastIndexOf.call(e3, t2, n2) : w(e3, [t2], n2, r3, i2);
    throw TypeError(`val must be string, number or Buffer`);
  }
  function w(e3, t2, n2, r3, i2) {
    let a2 = 1, o2 = e3.length, s2 = t2.length;
    if (r3 !== void 0 && (r3 = String(r3).toLowerCase(), r3 === `ucs2` || r3 === `ucs-2` || r3 === `utf16le` || r3 === `utf-16le`)) {
      if (e3.length < 2 || t2.length < 2) return -1;
      a2 = 2, o2 /= 2, s2 /= 2, n2 /= 2;
    }
    function c2(e4, t3) {
      return a2 === 1 ? e4[t3] : e4.readUInt16BE(t3 * a2);
    }
    let l2;
    if (i2) {
      let r4 = -1;
      for (l2 = n2; l2 < o2; l2++) if (c2(e3, l2) === c2(t2, r4 === -1 ? 0 : l2 - r4)) {
        if (r4 === -1 && (r4 = l2), l2 - r4 + 1 === s2) return r4 * a2;
      } else r4 !== -1 && (l2 -= l2 - r4), r4 = -1;
    } else for (n2 + s2 > o2 && (n2 = o2 - s2), l2 = n2; l2 >= 0; l2--) {
      let n3 = true;
      for (let r4 = 0; r4 < s2; r4++) if (c2(e3, l2 + r4) !== c2(t2, r4)) {
        n3 = false;
        break;
      }
      if (n3) return l2;
    }
    return -1;
  }
  l.prototype.includes = function(e3, t2, n2) {
    return this.indexOf(e3, t2, n2) !== -1;
  }, l.prototype.indexOf = function(e3, t2, n2) {
    return C(this, e3, t2, n2, true);
  }, l.prototype.lastIndexOf = function(e3, t2, n2) {
    return C(this, e3, t2, n2, false);
  };
  function te(e3, t2, n2, r3) {
    n2 = Number(n2) || 0;
    let i2 = e3.length - n2;
    r3 ? (r3 = Number(r3), r3 > i2 && (r3 = i2)) : r3 = i2;
    let a2 = t2.length;
    r3 > a2 / 2 && (r3 = a2 / 2);
    let o2;
    for (o2 = 0; o2 < r3; ++o2) {
      let r4 = parseInt(t2.substr(o2 * 2, 2), 16);
      if (Q(r4)) return o2;
      e3[n2 + o2] = r4;
    }
    return o2;
  }
  function ne(e3, t2, n2, r3) {
    return X(J(t2, e3.length - n2), e3, n2, r3);
  }
  function re(e3, t2, n2, r3) {
    return X(se(t2), e3, n2, r3);
  }
  function ie(e3, t2, n2, r3) {
    return X(Y(t2), e3, n2, r3);
  }
  function ae(e3, t2, n2, r3) {
    return X(ce(t2, e3.length - n2), e3, n2, r3);
  }
  l.prototype.write = function(e3, t2, n2, r3) {
    if (t2 === void 0) r3 = `utf8`, n2 = this.length, t2 = 0;
    else if (n2 === void 0 && typeof t2 == `string`) r3 = t2, n2 = this.length, t2 = 0;
    else if (isFinite(t2)) t2 >>>= 0, isFinite(n2) ? (n2 >>>= 0, r3 === void 0 && (r3 = `utf8`)) : (r3 = n2, n2 = void 0);
    else throw Error(`Buffer.write(string, encoding, offset[, length]) is no longer supported`);
    let i2 = this.length - t2;
    if ((n2 === void 0 || n2 > i2) && (n2 = i2), e3.length > 0 && (n2 < 0 || t2 < 0) || t2 > this.length) throw RangeError(`Attempt to write outside buffer bounds`);
    r3 ||= `utf8`;
    let a2 = false;
    for (; ; ) switch (r3) {
      case `hex`:
        return te(this, e3, t2, n2);
      case `utf8`:
      case `utf-8`:
        return ne(this, e3, t2, n2);
      case `ascii`:
      case `latin1`:
      case `binary`:
        return re(this, e3, t2, n2);
      case `base64`:
        return ie(this, e3, t2, n2);
      case `ucs2`:
      case `ucs-2`:
      case `utf16le`:
      case `utf-16le`:
        return ae(this, e3, t2, n2);
      default:
        if (a2) throw TypeError(`Unknown encoding: ` + r3);
        r3 = (`` + r3).toLowerCase(), a2 = true;
    }
  }, l.prototype.toJSON = function() {
    return { type: `Buffer`, data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function T(e3, t2, n2) {
    return t2 === 0 && n2 === e3.length ? r2.fromByteArray(e3) : r2.fromByteArray(e3.slice(t2, n2));
  }
  function E(e3, t2, n2) {
    n2 = Math.min(e3.length, n2);
    let r3 = [], i2 = t2;
    for (; i2 < n2; ) {
      let t3 = e3[i2], a2 = null, o2 = t3 > 239 ? 4 : t3 > 223 ? 3 : t3 > 191 ? 2 : 1;
      if (i2 + o2 <= n2) {
        let n3, r4, s2, c2;
        switch (o2) {
          case 1:
            t3 < 128 && (a2 = t3);
            break;
          case 2:
            n3 = e3[i2 + 1], (n3 & 192) == 128 && (c2 = (t3 & 31) << 6 | n3 & 63, c2 > 127 && (a2 = c2));
            break;
          case 3:
            n3 = e3[i2 + 1], r4 = e3[i2 + 2], (n3 & 192) == 128 && (r4 & 192) == 128 && (c2 = (t3 & 15) << 12 | (n3 & 63) << 6 | r4 & 63, c2 > 2047 && (c2 < 55296 || c2 > 57343) && (a2 = c2));
            break;
          case 4:
            n3 = e3[i2 + 1], r4 = e3[i2 + 2], s2 = e3[i2 + 3], (n3 & 192) == 128 && (r4 & 192) == 128 && (s2 & 192) == 128 && (c2 = (t3 & 15) << 18 | (n3 & 63) << 12 | (r4 & 63) << 6 | s2 & 63, c2 > 65535 && c2 < 1114112 && (a2 = c2));
        }
      }
      a2 === null ? (a2 = 65533, o2 = 1) : a2 > 65535 && (a2 -= 65536, r3.push(a2 >>> 10 & 1023 | 55296), a2 = 56320 | a2 & 1023), r3.push(a2), i2 += o2;
    }
    return O(r3);
  }
  var D = 4096;
  function O(e3) {
    let t2 = e3.length;
    if (t2 <= D) return String.fromCharCode.apply(String, e3);
    let n2 = ``, r3 = 0;
    for (; r3 < t2; ) n2 += String.fromCharCode.apply(String, e3.slice(r3, r3 += D));
    return n2;
  }
  function k(e3, t2, n2) {
    let r3 = ``;
    n2 = Math.min(e3.length, n2);
    for (let i2 = t2; i2 < n2; ++i2) r3 += String.fromCharCode(e3[i2] & 127);
    return r3;
  }
  function A(e3, t2, n2) {
    let r3 = ``;
    n2 = Math.min(e3.length, n2);
    for (let i2 = t2; i2 < n2; ++i2) r3 += String.fromCharCode(e3[i2]);
    return r3;
  }
  function j(e3, t2, n2) {
    let r3 = e3.length;
    (!t2 || t2 < 0) && (t2 = 0), (!n2 || n2 < 0 || n2 > r3) && (n2 = r3);
    let i2 = ``;
    for (let r4 = t2; r4 < n2; ++r4) i2 += le[e3[r4]];
    return i2;
  }
  function M(e3, t2, n2) {
    let r3 = e3.slice(t2, n2), i2 = ``;
    for (let e4 = 0; e4 < r3.length - 1; e4 += 2) i2 += String.fromCharCode(r3[e4] + r3[e4 + 1] * 256);
    return i2;
  }
  l.prototype.slice = function(e3, t2) {
    let n2 = this.length;
    e3 = ~~e3, t2 = t2 === void 0 ? n2 : ~~t2, e3 < 0 ? (e3 += n2, e3 < 0 && (e3 = 0)) : e3 > n2 && (e3 = n2), t2 < 0 ? (t2 += n2, t2 < 0 && (t2 = 0)) : t2 > n2 && (t2 = n2), t2 < e3 && (t2 = e3);
    let r3 = this.subarray(e3, t2);
    return Object.setPrototypeOf(r3, l.prototype), r3;
  };
  function N(e3, t2, n2) {
    if (e3 % 1 != 0 || e3 < 0) throw RangeError(`offset is not uint`);
    if (e3 + t2 > n2) throw RangeError(`Trying to access beyond buffer length`);
  }
  l.prototype.readUintLE = l.prototype.readUIntLE = function(e3, t2, n2) {
    e3 >>>= 0, t2 >>>= 0, n2 || N(e3, t2, this.length);
    let r3 = this[e3], i2 = 1, a2 = 0;
    for (; ++a2 < t2 && (i2 *= 256); ) r3 += this[e3 + a2] * i2;
    return r3;
  }, l.prototype.readUintBE = l.prototype.readUIntBE = function(e3, t2, n2) {
    e3 >>>= 0, t2 >>>= 0, n2 || N(e3, t2, this.length);
    let r3 = this[e3 + --t2], i2 = 1;
    for (; t2 > 0 && (i2 *= 256); ) r3 += this[e3 + --t2] * i2;
    return r3;
  }, l.prototype.readUint8 = l.prototype.readUInt8 = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 1, this.length), this[e3];
  }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 2, this.length), this[e3] | this[e3 + 1] << 8;
  }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 2, this.length), this[e3] << 8 | this[e3 + 1];
  }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 4, this.length), (this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16) + this[e3 + 3] * 16777216;
  }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 4, this.length), this[e3] * 16777216 + (this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3]);
  }, l.prototype.readBigUInt64LE = $(function(e3) {
    e3 >>>= 0, G(e3, `offset`);
    let t2 = this[e3], n2 = this[e3 + 7];
    (t2 === void 0 || n2 === void 0) && K(e3, this.length - 8);
    let r3 = t2 + this[++e3] * 2 ** 8 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 24, i2 = this[++e3] + this[++e3] * 2 ** 8 + this[++e3] * 2 ** 16 + n2 * 2 ** 24;
    return BigInt(r3) + (BigInt(i2) << BigInt(32));
  }), l.prototype.readBigUInt64BE = $(function(e3) {
    e3 >>>= 0, G(e3, `offset`);
    let t2 = this[e3], n2 = this[e3 + 7];
    (t2 === void 0 || n2 === void 0) && K(e3, this.length - 8);
    let r3 = t2 * 2 ** 24 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + this[++e3], i2 = this[++e3] * 2 ** 24 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + n2;
    return (BigInt(r3) << BigInt(32)) + BigInt(i2);
  }), l.prototype.readIntLE = function(e3, t2, n2) {
    e3 >>>= 0, t2 >>>= 0, n2 || N(e3, t2, this.length);
    let r3 = this[e3], i2 = 1, a2 = 0;
    for (; ++a2 < t2 && (i2 *= 256); ) r3 += this[e3 + a2] * i2;
    return i2 *= 128, r3 >= i2 && (r3 -= 2 ** (8 * t2)), r3;
  }, l.prototype.readIntBE = function(e3, t2, n2) {
    e3 >>>= 0, t2 >>>= 0, n2 || N(e3, t2, this.length);
    let r3 = t2, i2 = 1, a2 = this[e3 + --r3];
    for (; r3 > 0 && (i2 *= 256); ) a2 += this[e3 + --r3] * i2;
    return i2 *= 128, a2 >= i2 && (a2 -= 2 ** (8 * t2)), a2;
  }, l.prototype.readInt8 = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 1, this.length), this[e3] & 128 ? (255 - this[e3] + 1) * -1 : this[e3];
  }, l.prototype.readInt16LE = function(e3, t2) {
    e3 >>>= 0, t2 || N(e3, 2, this.length);
    let n2 = this[e3] | this[e3 + 1] << 8;
    return n2 & 32768 ? n2 | 4294901760 : n2;
  }, l.prototype.readInt16BE = function(e3, t2) {
    e3 >>>= 0, t2 || N(e3, 2, this.length);
    let n2 = this[e3 + 1] | this[e3] << 8;
    return n2 & 32768 ? n2 | 4294901760 : n2;
  }, l.prototype.readInt32LE = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 4, this.length), this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16 | this[e3 + 3] << 24;
  }, l.prototype.readInt32BE = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 4, this.length), this[e3] << 24 | this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3];
  }, l.prototype.readBigInt64LE = $(function(e3) {
    e3 >>>= 0, G(e3, `offset`);
    let t2 = this[e3], n2 = this[e3 + 7];
    (t2 === void 0 || n2 === void 0) && K(e3, this.length - 8);
    let r3 = this[e3 + 4] + this[e3 + 5] * 2 ** 8 + this[e3 + 6] * 2 ** 16 + (n2 << 24);
    return (BigInt(r3) << BigInt(32)) + BigInt(t2 + this[++e3] * 2 ** 8 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 24);
  }), l.prototype.readBigInt64BE = $(function(e3) {
    e3 >>>= 0, G(e3, `offset`);
    let t2 = this[e3], n2 = this[e3 + 7];
    (t2 === void 0 || n2 === void 0) && K(e3, this.length - 8);
    let r3 = (t2 << 24) + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + this[++e3];
    return (BigInt(r3) << BigInt(32)) + BigInt(this[++e3] * 2 ** 24 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + n2);
  }), l.prototype.readFloatLE = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 4, this.length), i.read(this, e3, true, 23, 4);
  }, l.prototype.readFloatBE = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 4, this.length), i.read(this, e3, false, 23, 4);
  }, l.prototype.readDoubleLE = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 8, this.length), i.read(this, e3, true, 52, 8);
  }, l.prototype.readDoubleBE = function(e3, t2) {
    return e3 >>>= 0, t2 || N(e3, 8, this.length), i.read(this, e3, false, 52, 8);
  };
  function P(e3, t2, n2, r3, i2, a2) {
    if (!l.isBuffer(e3)) throw TypeError(`"buffer" argument must be a Buffer instance`);
    if (t2 > i2 || t2 < a2) throw RangeError(`"value" argument is out of bounds`);
    if (n2 + r3 > e3.length) throw RangeError(`Index out of range`);
  }
  l.prototype.writeUintLE = l.prototype.writeUIntLE = function(e3, t2, n2, r3) {
    if (e3 = +e3, t2 >>>= 0, n2 >>>= 0, !r3) {
      let r4 = 2 ** (8 * n2) - 1;
      P(this, e3, t2, n2, r4, 0);
    }
    let i2 = 1, a2 = 0;
    for (this[t2] = e3 & 255; ++a2 < n2 && (i2 *= 256); ) this[t2 + a2] = e3 / i2 & 255;
    return t2 + n2;
  }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(e3, t2, n2, r3) {
    if (e3 = +e3, t2 >>>= 0, n2 >>>= 0, !r3) {
      let r4 = 2 ** (8 * n2) - 1;
      P(this, e3, t2, n2, r4, 0);
    }
    let i2 = n2 - 1, a2 = 1;
    for (this[t2 + i2] = e3 & 255; --i2 >= 0 && (a2 *= 256); ) this[t2 + i2] = e3 / a2 & 255;
    return t2 + n2;
  }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(e3, t2, n2) {
    return e3 = +e3, t2 >>>= 0, n2 || P(this, e3, t2, 1, 255, 0), this[t2] = e3 & 255, t2 + 1;
  }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(e3, t2, n2) {
    return e3 = +e3, t2 >>>= 0, n2 || P(this, e3, t2, 2, 65535, 0), this[t2] = e3 & 255, this[t2 + 1] = e3 >>> 8, t2 + 2;
  }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(e3, t2, n2) {
    return e3 = +e3, t2 >>>= 0, n2 || P(this, e3, t2, 2, 65535, 0), this[t2] = e3 >>> 8, this[t2 + 1] = e3 & 255, t2 + 2;
  }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(e3, t2, n2) {
    return e3 = +e3, t2 >>>= 0, n2 || P(this, e3, t2, 4, 4294967295, 0), this[t2 + 3] = e3 >>> 24, this[t2 + 2] = e3 >>> 16, this[t2 + 1] = e3 >>> 8, this[t2] = e3 & 255, t2 + 4;
  }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(e3, t2, n2) {
    return e3 = +e3, t2 >>>= 0, n2 || P(this, e3, t2, 4, 4294967295, 0), this[t2] = e3 >>> 24, this[t2 + 1] = e3 >>> 16, this[t2 + 2] = e3 >>> 8, this[t2 + 3] = e3 & 255, t2 + 4;
  };
  function F(e3, t2, n2, r3, i2) {
    W(t2, r3, i2, e3, n2, 7);
    let a2 = Number(t2 & BigInt(4294967295));
    e3[n2++] = a2, a2 >>= 8, e3[n2++] = a2, a2 >>= 8, e3[n2++] = a2, a2 >>= 8, e3[n2++] = a2;
    let o2 = Number(t2 >> BigInt(32) & BigInt(4294967295));
    return e3[n2++] = o2, o2 >>= 8, e3[n2++] = o2, o2 >>= 8, e3[n2++] = o2, o2 >>= 8, e3[n2++] = o2, n2;
  }
  function I(e3, t2, n2, r3, i2) {
    W(t2, r3, i2, e3, n2, 7);
    let a2 = Number(t2 & BigInt(4294967295));
    e3[n2 + 7] = a2, a2 >>= 8, e3[n2 + 6] = a2, a2 >>= 8, e3[n2 + 5] = a2, a2 >>= 8, e3[n2 + 4] = a2;
    let o2 = Number(t2 >> BigInt(32) & BigInt(4294967295));
    return e3[n2 + 3] = o2, o2 >>= 8, e3[n2 + 2] = o2, o2 >>= 8, e3[n2 + 1] = o2, o2 >>= 8, e3[n2] = o2, n2 + 8;
  }
  l.prototype.writeBigUInt64LE = $(function(e3, t2 = 0) {
    return F(this, e3, t2, BigInt(0), BigInt(`0xffffffffffffffff`));
  }), l.prototype.writeBigUInt64BE = $(function(e3, t2 = 0) {
    return I(this, e3, t2, BigInt(0), BigInt(`0xffffffffffffffff`));
  }), l.prototype.writeIntLE = function(e3, t2, n2, r3) {
    if (e3 = +e3, t2 >>>= 0, !r3) {
      let r4 = 2 ** (8 * n2 - 1);
      P(this, e3, t2, n2, r4 - 1, -r4);
    }
    let i2 = 0, a2 = 1, o2 = 0;
    for (this[t2] = e3 & 255; ++i2 < n2 && (a2 *= 256); ) e3 < 0 && o2 === 0 && this[t2 + i2 - 1] !== 0 && (o2 = 1), this[t2 + i2] = (e3 / a2 >> 0) - o2 & 255;
    return t2 + n2;
  }, l.prototype.writeIntBE = function(e3, t2, n2, r3) {
    if (e3 = +e3, t2 >>>= 0, !r3) {
      let r4 = 2 ** (8 * n2 - 1);
      P(this, e3, t2, n2, r4 - 1, -r4);
    }
    let i2 = n2 - 1, a2 = 1, o2 = 0;
    for (this[t2 + i2] = e3 & 255; --i2 >= 0 && (a2 *= 256); ) e3 < 0 && o2 === 0 && this[t2 + i2 + 1] !== 0 && (o2 = 1), this[t2 + i2] = (e3 / a2 >> 0) - o2 & 255;
    return t2 + n2;
  }, l.prototype.writeInt8 = function(e3, t2, n2) {
    return e3 = +e3, t2 >>>= 0, n2 || P(this, e3, t2, 1, 127, -128), e3 < 0 && (e3 = 255 + e3 + 1), this[t2] = e3 & 255, t2 + 1;
  }, l.prototype.writeInt16LE = function(e3, t2, n2) {
    return e3 = +e3, t2 >>>= 0, n2 || P(this, e3, t2, 2, 32767, -32768), this[t2] = e3 & 255, this[t2 + 1] = e3 >>> 8, t2 + 2;
  }, l.prototype.writeInt16BE = function(e3, t2, n2) {
    return e3 = +e3, t2 >>>= 0, n2 || P(this, e3, t2, 2, 32767, -32768), this[t2] = e3 >>> 8, this[t2 + 1] = e3 & 255, t2 + 2;
  }, l.prototype.writeInt32LE = function(e3, t2, n2) {
    return e3 = +e3, t2 >>>= 0, n2 || P(this, e3, t2, 4, 2147483647, -2147483648), this[t2] = e3 & 255, this[t2 + 1] = e3 >>> 8, this[t2 + 2] = e3 >>> 16, this[t2 + 3] = e3 >>> 24, t2 + 4;
  }, l.prototype.writeInt32BE = function(e3, t2, n2) {
    return e3 = +e3, t2 >>>= 0, n2 || P(this, e3, t2, 4, 2147483647, -2147483648), e3 < 0 && (e3 = 4294967295 + e3 + 1), this[t2] = e3 >>> 24, this[t2 + 1] = e3 >>> 16, this[t2 + 2] = e3 >>> 8, this[t2 + 3] = e3 & 255, t2 + 4;
  }, l.prototype.writeBigInt64LE = $(function(e3, t2 = 0) {
    return F(this, e3, t2, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`));
  }), l.prototype.writeBigInt64BE = $(function(e3, t2 = 0) {
    return I(this, e3, t2, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`));
  });
  function L(e3, t2, n2, r3, i2, a2) {
    if (n2 + r3 > e3.length || n2 < 0) throw RangeError(`Index out of range`);
  }
  function R(e3, t2, n2, r3, a2) {
    return t2 = +t2, n2 >>>= 0, a2 || L(e3, t2, n2, 4, 34028234663852886e22, -34028234663852886e22), i.write(e3, t2, n2, r3, 23, 4), n2 + 4;
  }
  l.prototype.writeFloatLE = function(e3, t2, n2) {
    return R(this, e3, t2, true, n2);
  }, l.prototype.writeFloatBE = function(e3, t2, n2) {
    return R(this, e3, t2, false, n2);
  };
  function z(e3, t2, n2, r3, a2) {
    return t2 = +t2, n2 >>>= 0, a2 || L(e3, t2, n2, 8, 17976931348623157e292, -17976931348623157e292), i.write(e3, t2, n2, r3, 52, 8), n2 + 8;
  }
  l.prototype.writeDoubleLE = function(e3, t2, n2) {
    return z(this, e3, t2, true, n2);
  }, l.prototype.writeDoubleBE = function(e3, t2, n2) {
    return z(this, e3, t2, false, n2);
  }, l.prototype.copy = function(e3, t2, n2, r3) {
    if (!l.isBuffer(e3)) throw TypeError(`argument should be a Buffer`);
    if (n2 ||= 0, !r3 && r3 !== 0 && (r3 = this.length), t2 >= e3.length && (t2 = e3.length), t2 ||= 0, r3 > 0 && r3 < n2 && (r3 = n2), r3 === n2 || e3.length === 0 || this.length === 0) return 0;
    if (t2 < 0) throw RangeError(`targetStart out of bounds`);
    if (n2 < 0 || n2 >= this.length) throw RangeError(`Index out of range`);
    if (r3 < 0) throw RangeError(`sourceEnd out of bounds`);
    r3 > this.length && (r3 = this.length), e3.length - t2 < r3 - n2 && (r3 = e3.length - t2 + n2);
    let i2 = r3 - n2;
    return this === e3 && typeof Uint8Array.prototype.copyWithin == `function` ? this.copyWithin(t2, n2, r3) : Uint8Array.prototype.set.call(e3, this.subarray(n2, r3), t2), i2;
  }, l.prototype.fill = function(e3, t2, n2, r3) {
    if (typeof e3 == `string`) {
      if (typeof t2 == `string` ? (r3 = t2, t2 = 0, n2 = this.length) : typeof n2 == `string` && (r3 = n2, n2 = this.length), r3 !== void 0 && typeof r3 != `string`) throw TypeError(`encoding must be a string`);
      if (typeof r3 == `string` && !l.isEncoding(r3)) throw TypeError(`Unknown encoding: ` + r3);
      if (e3.length === 1) {
        let t3 = e3.charCodeAt(0);
        (r3 === `utf8` && t3 < 128 || r3 === `latin1`) && (e3 = t3);
      }
    } else typeof e3 == `number` ? e3 &= 255 : typeof e3 == `boolean` && (e3 = Number(e3));
    if (t2 < 0 || this.length < t2 || this.length < n2) throw RangeError(`Out of range index`);
    if (n2 <= t2) return this;
    t2 >>>= 0, n2 = n2 === void 0 ? this.length : n2 >>> 0, e3 ||= 0;
    let i2;
    if (typeof e3 == `number`) for (i2 = t2; i2 < n2; ++i2) this[i2] = e3;
    else {
      let a2 = l.isBuffer(e3) ? e3 : l.from(e3, r3), o2 = a2.length;
      if (o2 === 0) throw TypeError(`The value "` + e3 + `" is invalid for argument "value"`);
      for (i2 = 0; i2 < n2 - t2; ++i2) this[i2 + t2] = a2[i2 % o2];
    }
    return this;
  };
  var B = {};
  function V(e3, t2, n2) {
    B[e3] = class extends n2 {
      constructor() {
        super(), Object.defineProperty(this, `message`, { value: t2.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e3}]`, this.stack, delete this.name;
      }
      get code() {
        return e3;
      }
      set code(e4) {
        Object.defineProperty(this, `code`, { configurable: true, enumerable: true, value: e4, writable: true });
      }
      toString() {
        return `${this.name} [${e3}]: ${this.message}`;
      }
    };
  }
  V(`ERR_BUFFER_OUT_OF_BOUNDS`, function(e3) {
    return e3 ? `${e3} is outside of buffer bounds` : `Attempt to access memory outside buffer bounds`;
  }, RangeError), V(`ERR_INVALID_ARG_TYPE`, function(e3, t2) {
    return `The "${e3}" argument must be of type number. Received type ${typeof t2}`;
  }, TypeError), V(`ERR_OUT_OF_RANGE`, function(e3, t2, n2) {
    let r3 = `The value of "${e3}" is out of range.`, i2 = n2;
    return Number.isInteger(n2) && Math.abs(n2) > 2 ** 32 ? i2 = H(String(n2)) : typeof n2 == `bigint` && (i2 = String(n2), (n2 > BigInt(2) ** BigInt(32) || n2 < -(BigInt(2) ** BigInt(32))) && (i2 = H(i2)), i2 += `n`), r3 += ` It must be ${t2}. Received ${i2}`, r3;
  }, RangeError);
  function H(e3) {
    let t2 = ``, n2 = e3.length, r3 = e3[0] === `-` ? 1 : 0;
    for (; n2 >= r3 + 4; n2 -= 3) t2 = `_${e3.slice(n2 - 3, n2)}${t2}`;
    return `${e3.slice(0, n2)}${t2}`;
  }
  function U(e3, t2, n2) {
    G(t2, `offset`), (e3[t2] === void 0 || e3[t2 + n2] === void 0) && K(t2, e3.length - (n2 + 1));
  }
  function W(e3, t2, n2, r3, i2, a2) {
    if (e3 > n2 || e3 < t2) {
      let r4 = typeof t2 == `bigint` ? `n` : ``, i3;
      throw i3 = a2 > 3 ? t2 === 0 || t2 === BigInt(0) ? `>= 0${r4} and < 2${r4} ** ${(a2 + 1) * 8}${r4}` : `>= -(2${r4} ** ${(a2 + 1) * 8 - 1}${r4}) and < 2 ** ${(a2 + 1) * 8 - 1}${r4}` : `>= ${t2}${r4} and <= ${n2}${r4}`, new B.ERR_OUT_OF_RANGE(`value`, i3, e3);
    }
    U(r3, i2, a2);
  }
  function G(e3, t2) {
    if (typeof e3 != `number`) throw new B.ERR_INVALID_ARG_TYPE(t2, `number`, e3);
  }
  function K(e3, t2, n2) {
    throw Math.floor(e3) === e3 ? t2 < 0 ? new B.ERR_BUFFER_OUT_OF_BOUNDS() : new B.ERR_OUT_OF_RANGE(n2 || `offset`, `>= ${n2 ? 1 : 0} and <= ${t2}`, e3) : (G(e3, n2), new B.ERR_OUT_OF_RANGE(n2 || `offset`, `an integer`, e3));
  }
  var q = /[^+/0-9A-Za-z-_]/g;
  function oe(e3) {
    if (e3 = e3.split(`=`)[0], e3 = e3.trim().replace(q, ``), e3.length < 2) return ``;
    for (; e3.length % 4 != 0; ) e3 += `=`;
    return e3;
  }
  function J(e3, t2) {
    t2 ||= 1 / 0;
    let n2, r3 = e3.length, i2 = null, a2 = [];
    for (let o2 = 0; o2 < r3; ++o2) {
      if (n2 = e3.charCodeAt(o2), n2 > 55295 && n2 < 57344) {
        if (!i2) {
          if (n2 > 56319) {
            (t2 -= 3) > -1 && a2.push(239, 191, 189);
            continue;
          } else if (o2 + 1 === r3) {
            (t2 -= 3) > -1 && a2.push(239, 191, 189);
            continue;
          }
          i2 = n2;
          continue;
        }
        if (n2 < 56320) {
          (t2 -= 3) > -1 && a2.push(239, 191, 189), i2 = n2;
          continue;
        }
        n2 = (i2 - 55296 << 10 | n2 - 56320) + 65536;
      } else i2 && (t2 -= 3) > -1 && a2.push(239, 191, 189);
      if (i2 = null, n2 < 128) {
        if (--t2 < 0) break;
        a2.push(n2);
      } else if (n2 < 2048) {
        if ((t2 -= 2) < 0) break;
        a2.push(n2 >> 6 | 192, n2 & 63 | 128);
      } else if (n2 < 65536) {
        if ((t2 -= 3) < 0) break;
        a2.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, n2 & 63 | 128);
      } else if (n2 < 1114112) {
        if ((t2 -= 4) < 0) break;
        a2.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, n2 & 63 | 128);
      } else throw Error(`Invalid code point`);
    }
    return a2;
  }
  function se(e3) {
    let t2 = [];
    for (let n2 = 0; n2 < e3.length; ++n2) t2.push(e3.charCodeAt(n2) & 255);
    return t2;
  }
  function ce(e3, t2) {
    let n2, r3, i2, a2 = [];
    for (let o2 = 0; o2 < e3.length && !((t2 -= 2) < 0); ++o2) n2 = e3.charCodeAt(o2), r3 = n2 >> 8, i2 = n2 % 256, a2.push(i2), a2.push(r3);
    return a2;
  }
  function Y(e3) {
    return r2.toByteArray(oe(e3));
  }
  function X(e3, t2, n2, r3) {
    let i2;
    for (i2 = 0; i2 < r3 && !(i2 + n2 >= t2.length || i2 >= e3.length); ++i2) t2[i2 + n2] = e3[i2];
    return i2;
  }
  function Z(e3, t2) {
    return e3 instanceof t2 || e3 != null && e3.constructor != null && e3.constructor.name != null && e3.constructor.name === t2.name;
  }
  function Q(e3) {
    return e3 !== e3;
  }
  var le = (function() {
    let e3 = `0123456789abcdef`, t2 = Array(256);
    for (let n2 = 0; n2 < 16; ++n2) {
      let r3 = n2 * 16;
      for (let i2 = 0; i2 < 16; ++i2) t2[r3 + i2] = e3[n2] + e3[i2];
    }
    return t2;
  })();
  function $(e3) {
    return typeof BigInt > `u` ? ue : e3;
  }
  function ue() {
    throw Error(`BigInt not supported`);
  }
}));
export {
  r as t
};
