import { _ as k, K as bt, c as g, L as ut, l as W, D as ft, E as j, H as it, T as Fe, C as I, M as E, d as qr, e as St, f as os, g as _s, s as ne, h as dt, i as Ti, j as ji, V as Se, k as B, m as P, n as xi, o as Pi, I as Re, p as Ai, q as De, r as Ni, A as as, t as cs, u as Fr, v as gs, w as us, U as gn, x as st, S as un, y as dn, z as ln, B as sr, F as pn, G as T, J as z, N as lt, O as $, P as Ue, Q as x, R as ds } from "./main-CbBlLJEx.js";
import { g as ls } from "./index-0Fsa7gDP.js";
let n;
function en(i) {
  n = i;
}
let ot = null;
function ce() {
  return (ot === null || ot.byteLength === 0) && (ot = new Uint8Array(n.memory.buffer)), ot;
}
const Li = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
let pt = new Li("utf-8", { ignoreBOM: true, fatal: true });
pt.decode();
const ps = 2146435072;
let or = 0;
function ws(i, e) {
  return or += e, or >= ps && (pt = new Li("utf-8", { ignoreBOM: true, fatal: true }), pt.decode(), or = e), pt.decode(ce().subarray(i, i + e));
}
function y(i, e) {
  return i = i >>> 0, ws(i, e);
}
let u = 0;
const ys = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder, wt = new ys("utf-8"), bs = typeof wt.encodeInto == "function" ? function(i, e) {
  return wt.encodeInto(i, e);
} : function(i, e) {
  const t = wt.encode(i);
  return e.set(t), { read: i.length, written: t.length };
};
function p(i, e, t) {
  if (t === void 0) {
    const a = wt.encode(i), c = e(a.length, 1) >>> 0;
    return ce().subarray(c, c + a.length).set(a), u = a.length, c;
  }
  let r = i.length, s = e(r, 1) >>> 0;
  const o = ce();
  let _ = 0;
  for (; _ < r; _++) {
    const a = i.charCodeAt(_);
    if (a > 127) break;
    o[s + _] = a;
  }
  if (_ !== r) {
    _ !== 0 && (i = i.slice(_)), s = t(s, r, r = _ + i.length * 3, 1) >>> 0;
    const a = ce().subarray(s + _, s + r), c = bs(i, a);
    _ += c.written, s = t(s, r, _, 1) >>> 0;
  }
  return u = _, s;
}
let ae = null;
function O() {
  return (ae === null || ae.buffer.detached === true || ae.buffer.detached === void 0 && ae.buffer !== n.memory.buffer) && (ae = new DataView(n.memory.buffer)), ae;
}
function D(i) {
  const e = n.__externref_table_alloc();
  return n.__wbindgen_export_4.set(e, i), e;
}
function S(i, e) {
  try {
    return i.apply(this, e);
  } catch (t) {
    const r = D(t);
    n.__wbindgen_exn_store(r);
  }
}
function v(i) {
  return i == null;
}
function L(i, e) {
  return i = i >>> 0, ce().subarray(i / 1, i / 1 + e);
}
const ht = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => {
  n.__wbindgen_export_6.get(i.dtor)(i.a, i.b);
});
function tn(i, e, t, r) {
  const s = { a: i, b: e, cnt: 1, dtor: t }, o = (..._) => {
    s.cnt++;
    const a = s.a;
    s.a = 0;
    try {
      return r(a, s.b, ..._);
    } finally {
      --s.cnt === 0 ? (n.__wbindgen_export_6.get(s.dtor)(a, s.b), ht.unregister(s)) : s.a = a;
    }
  };
  return o.original = s, ht.register(o, s, s), o;
}
function Wi(i, e, t, r) {
  const s = { a: i, b: e, cnt: 1, dtor: t }, o = (..._) => {
    s.cnt++;
    try {
      return r(s.a, s.b, ..._);
    } finally {
      --s.cnt === 0 && (n.__wbindgen_export_6.get(s.dtor)(s.a, s.b), s.a = 0, ht.unregister(s));
    }
  };
  return o.original = s, ht.register(o, s, s), o;
}
function Ur(i) {
  const e = typeof i;
  if (e == "number" || e == "boolean" || i == null) return `${i}`;
  if (e == "string") return `"${i}"`;
  if (e == "symbol") {
    const s = i.description;
    return s == null ? "Symbol" : `Symbol(${s})`;
  }
  if (e == "function") {
    const s = i.name;
    return typeof s == "string" && s.length > 0 ? `Function(${s})` : "Function";
  }
  if (Array.isArray(i)) {
    const s = i.length;
    let o = "[";
    s > 0 && (o += Ur(i[0]));
    for (let _ = 1; _ < s; _++) o += ", " + Ur(i[_]);
    return o += "]", o;
  }
  const t = /\[object ([^\]]+)\]/.exec(toString.call(i));
  let r;
  if (t && t.length > 1) r = t[1];
  else return toString.call(i);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(i) + ")";
  } catch {
    return "Object";
  }
  return i instanceof Error ? `${i.name}: ${i.message}
${i.stack}` : r;
}
function J(i, e) {
  const t = e(i.length * 1, 1) >>> 0;
  return ce().set(i, t / 1), u = i.length, t;
}
function l(i) {
  const e = n.__wbindgen_export_4.get(i);
  return n.__externref_table_dealloc(i), e;
}
function b(i, e) {
  if (!(i instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
function U(i, e) {
  const t = e(i.length * 4, 4) >>> 0;
  for (let r = 0; r < i.length; r++) {
    const s = D(i[r]);
    O().setUint32(t + 4 * r, s, true);
  }
  return u = i.length, t;
}
function Me(i, e) {
  i = i >>> 0;
  const t = O(), r = [];
  for (let s = i; s < i + 4 * e; s += 4) r.push(n.__wbindgen_export_4.get(t.getUint32(s, true)));
  return n.__externref_drop_slice(i, e), r;
}
let _t = null;
function fs() {
  return (_t === null || _t.byteLength === 0) && (_t = new Uint16Array(n.memory.buffer)), _t;
}
function hs(i, e) {
  return i = i >>> 0, fs().subarray(i / 2, i / 2 + e);
}
function Gi() {
  const i = n.getVersions();
  return nr.__wrap(i);
}
function vs() {
  n.start();
}
function ms(i, e, t) {
  const r = n.closure41_externref_shim_multivalue_shim(i, e, t);
  if (r[1]) throw l(r[0]);
}
function ks(i, e) {
  n.wasm_bindgen__convert__closures_____invoke__h8861d869601ff522(i, e);
}
function Ss(i, e, t) {
  n.closure756_externref_shim(i, e, t);
}
function Rs(i, e, t) {
  n.closure438_externref_shim(i, e, t);
}
function Ks(i, e) {
  n.wasm_bindgen__convert__closures_____invoke__hce61fd14ea1a6ce1(i, e);
}
function Is(i, e, t, r) {
  n.closure451_externref_shim(i, e, t, r);
}
const Y = Object.freeze({ MissingRoomKey: 0, 0: "MissingRoomKey", UnknownMessageIndex: 1, 1: "UnknownMessageIndex", MismatchedIdentityKeys: 2, 2: "MismatchedIdentityKeys", UnknownSenderDevice: 3, 3: "UnknownSenderDevice", UnsignedSenderDevice: 4, 4: "UnsignedSenderDevice", SenderIdentityVerificationViolation: 5, 5: "SenderIdentityVerificationViolation", UnableToDecrypt: 6, 6: "UnableToDecrypt", MismatchedSender: 7, 7: "MismatchedSender" }), Cs = Object.freeze({ Ed25519: 0, 0: "Ed25519", Curve25519: 1, 1: "Curve25519", Unknown: 3, 3: "Unknown" }), Es = Object.freeze({ Curve25519: 0, 0: "Curve25519", Ed25519: 1, 1: "Ed25519", Unknown: 2, 2: "Unknown" }), ge = Object.freeze({ OlmV1Curve25519AesSha2: 0, 0: "OlmV1Curve25519AesSha2", MegolmV1AesSha2: 1, 1: "MegolmV1AesSha2", Unknown: 2, 2: "Unknown" }), Ke = Object.freeze({ Invited: 0, 0: "Invited", Joined: 1, 1: "Joined", Shared: 2, 2: "Shared", WorldReadable: 3, 3: "WorldReadable" }), Vr = Object.freeze({ Verified: 0, 0: "Verified", BlackListed: 1, 1: "BlackListed", Ignored: 2, 2: "Ignored", Unset: 3, 3: "Unset" }), Ds = Object.freeze({ Trace: 0, 0: "Trace", Debug: 1, 1: "Debug", Info: 2, 2: "Info", Warn: 3, 3: "Warn", Error: 4, 4: "Error" }), Ie = Object.freeze({ Decrypted: 0, 0: "Decrypted", UnableToDecrypt: 1, 1: "UnableToDecrypt", PlainText: 2, 2: "PlainText", Invalid: 3, 3: "Invalid" }), Os = Object.freeze({ Login: 0, 0: "Login", Reciprocate: 1, 1: "Reciprocate" }), re = Object.freeze({ Created: 0, 0: "Created", Scanned: 1, 1: "Scanned", Confirmed: 2, 2: "Confirmed", Reciprocated: 3, 3: "Reciprocated", Done: 4, 4: "Done", Cancelled: 5, 5: "Cancelled" }), Ms = Object.freeze({ KeysUpload: 0, 0: "KeysUpload", KeysQuery: 1, 1: "KeysQuery", KeysClaim: 2, 2: "KeysClaim", ToDevice: 3, 3: "ToDevice", SignatureUpload: 4, 4: "SignatureUpload", RoomMessage: 5, 5: "RoomMessage", KeysBackup: 6, 6: "KeysBackup" }), zr = Object.freeze({ Red: 0, 0: "Red", Grey: 1, 1: "Grey", None: 2, 2: "None" }), Z = Object.freeze({ AuthenticityNotGuaranteed: 0, 0: "AuthenticityNotGuaranteed", UnknownDevice: 1, 1: "UnknownDevice", UnsignedDevice: 2, 2: "UnsignedDevice", UnverifiedIdentity: 3, 3: "UnverifiedIdentity", SentInClear: 4, 4: "SentInClear", VerificationViolation: 5, 5: "VerificationViolation", MismatchedSender: 6, 6: "MismatchedSender" }), Bs = Object.freeze({ Missing: 0, 0: "Missing", Invalid: 1, 1: "Invalid", ValidButNotTrusted: 2, 2: "ValidButNotTrusted", ValidAndTrusted: 3, 3: "ValidAndTrusted" }), qs = Object.freeze({ DecryptionFailure: 0, 0: "DecryptionFailure", UnverifiedSenderDevice: 1, 1: "UnverifiedSenderDevice", NoOlmMachine: 2, 2: "NoOlmMachine", EncryptionIsDisabled: 3, 3: "EncryptionIsDisabled" }), Tr = Object.freeze({ Untrusted: 0, 0: "Untrusted", CrossSignedOrLegacy: 1, 1: "CrossSignedOrLegacy", CrossSigned: 2, 2: "CrossSigned" }), Ce = Object.freeze({ SasV1: 0, 0: "SasV1", QrCodeScanV1: 1, 1: "QrCodeScanV1", QrCodeShowV1: 2, 2: "QrCodeShowV1", ReciprocateV1: 3, 3: "ReciprocateV1" }), X = Object.freeze({ Created: 0, 0: "Created", Requested: 1, 1: "Requested", Ready: 2, 2: "Ready", Transitioned: 3, 3: "Transitioned", Done: 4, 4: "Done", Cancelled: 5, 5: "Cancelled" }), Fs = ["pending", "done"], Ji = ["readonly", "readwrite", "versionchange", "readwriteflush", "cleanup"], Us = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_attachment_free(i >>> 0, 1));
class Vs {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Us.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_attachment_free(e, 0);
  }
  static encrypt(e) {
    const t = J(e, n.__wbindgen_malloc), r = u, s = n.attachment_encrypt(t, r);
    if (s[2]) throw l(s[1]);
    return le.__wrap(s[0]);
  }
  static decrypt(e) {
    b(e, le);
    const t = n.attachment_decrypt(e.__wbg_ptr);
    if (t[3]) throw l(t[2]);
    var r = L(t[0], t[1]).slice();
    return n.__wbindgen_free(t[0], t[1] * 1, 1), r;
  }
}
const wn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_backupdecryptionkey_free(i >>> 0, 1));
class V {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(V.prototype);
    return t.__wbg_ptr = e, wn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, wn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_backupdecryptionkey_free(e, 0);
  }
  static createRandomKey() {
    const e = n.backupdecryptionkey_createRandomKey();
    return V.__wrap(e);
  }
  static fromBase64(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.backupdecryptionkey_fromBase64(t, r);
    if (s[2]) throw l(s[1]);
    return V.__wrap(s[0]);
  }
  toBase64() {
    return n.backupdecryptionkey_toBase64(this.__wbg_ptr);
  }
  get megolmV1PublicKey() {
    const e = n.backupdecryptionkey_megolmV1PublicKey(this.__wbg_ptr);
    return Pt.__wrap(e);
  }
  decryptV1(e, t, r) {
    let s, o;
    try {
      const c = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), d = u, w = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), h = u, m = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), K = u, F = n.backupdecryptionkey_decryptV1(this.__wbg_ptr, c, d, w, h, m, K);
      var _ = F[0], a = F[1];
      if (F[3]) throw _ = 0, a = 0, l(F[2]);
      return s = _, o = a, y(_, a);
    } finally {
      n.__wbindgen_free(s, o, 1);
    }
  }
}
const yn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_backupkeys_free(i >>> 0, 1));
class Rt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Rt.prototype);
    return t.__wbg_ptr = e, yn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, yn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_backupkeys_free(e, 0);
  }
  get decryptionKey() {
    const e = n.__wbg_get_backupkeys_decryptionKey(this.__wbg_ptr);
    return e === 0 ? void 0 : V.__wrap(e);
  }
  set decryptionKey(e) {
    let t = 0;
    v(e) || (b(e, V), t = e.__destroy_into_raw()), n.__wbg_set_backupkeys_decryptionKey(this.__wbg_ptr, t);
  }
  get backupVersion() {
    const e = n.__wbg_get_backupkeys_backupVersion(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  set backupVersion(e) {
    var t = v(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupkeys_backupVersion(this.__wbg_ptr, t, r);
  }
  get decryptionKeyBase64() {
    return n.backupkeys_decryptionKeyBase64(this.__wbg_ptr);
  }
}
const bn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_backupsecretsbundle_free(i >>> 0, 1));
class Kt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Kt.prototype);
    return t.__wbg_ptr = e, bn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, bn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_backupsecretsbundle_free(e, 0);
  }
  get key() {
    let e, t;
    try {
      const r = n.__wbg_get_backupsecretsbundle_key(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set key(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_key(this.__wbg_ptr, t, r);
  }
  get backup_version() {
    let e, t;
    try {
      const r = n.__wbg_get_backupsecretsbundle_backup_version(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set backup_version(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_backup_version(this.__wbg_ptr, t, r);
  }
}
const _r = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_base64encodedpkmessage_free(i >>> 0, 1));
class Be {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Be.prototype);
    return t.__wbg_ptr = e, _r.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, _r.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_base64encodedpkmessage_free(e, 0);
  }
  get ciphertext() {
    let e, t;
    try {
      const r = n.__wbg_get_base64encodedpkmessage_ciphertext(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set ciphertext(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_key(this.__wbg_ptr, t, r);
  }
  get mac() {
    let e, t;
    try {
      const r = n.__wbg_get_base64encodedpkmessage_mac(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set mac(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_backup_version(this.__wbg_ptr, t, r);
  }
  get ephemeralKey() {
    let e, t;
    try {
      const r = n.__wbg_get_base64encodedpkmessage_ephemeralKey(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set ephemeralKey(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_base64encodedpkmessage_ephemeralKey(this.__wbg_ptr, t, r);
  }
  constructor(e, t, r) {
    const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u, _ = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), a = u, c = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), d = u, w = n.base64encodedpkmessage_new(s, o, _, a, c, d);
    return this.__wbg_ptr = w >>> 0, _r.register(this, this.__wbg_ptr, this), this;
  }
}
const fn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_basemigrationdata_free(i >>> 0, 1));
class rn {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, fn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_basemigrationdata_free(e, 0);
  }
  get userId() {
    const e = n.__wbg_get_basemigrationdata_userId(this.__wbg_ptr);
    return e === 0 ? void 0 : f.__wrap(e);
  }
  set userId(e) {
    let t = 0;
    v(e) || (b(e, f), t = e.__destroy_into_raw()), n.__wbg_set_basemigrationdata_userId(this.__wbg_ptr, t);
  }
  get deviceId() {
    const e = n.__wbg_get_basemigrationdata_deviceId(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  set deviceId(e) {
    let t = 0;
    v(e) || (b(e, C), t = e.__destroy_into_raw()), n.__wbg_set_basemigrationdata_deviceId(this.__wbg_ptr, t);
  }
  get pickledAccount() {
    let e, t;
    try {
      const r = n.__wbg_get_basemigrationdata_pickledAccount(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set pickledAccount(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_key(this.__wbg_ptr, t, r);
  }
  get backupVersion() {
    const e = n.__wbg_get_basemigrationdata_backupVersion(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  set backupVersion(e) {
    var t = v(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_basemigrationdata_backupVersion(this.__wbg_ptr, t, r);
  }
  get backupRecoveryKey() {
    const e = n.__wbg_get_basemigrationdata_backupRecoveryKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  set backupRecoveryKey(e) {
    var t = v(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_basemigrationdata_backupRecoveryKey(this.__wbg_ptr, t, r);
  }
  get privateCrossSigningMasterKey() {
    const e = n.__wbg_get_basemigrationdata_privateCrossSigningMasterKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  set privateCrossSigningMasterKey(e) {
    var t = v(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_basemigrationdata_privateCrossSigningMasterKey(this.__wbg_ptr, t, r);
  }
  get privateCrossSigningSelfSigningKey() {
    const e = n.__wbg_get_basemigrationdata_privateCrossSigningSelfSigningKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  set privateCrossSigningSelfSigningKey(e) {
    var t = v(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_basemigrationdata_privateCrossSigningSelfSigningKey(this.__wbg_ptr, t, r);
  }
  get privateCrossSigningUserSigningKey() {
    const e = n.__wbg_get_basemigrationdata_privateCrossSigningUserSigningKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  set privateCrossSigningUserSigningKey(e) {
    var t = v(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_basemigrationdata_privateCrossSigningUserSigningKey(this.__wbg_ptr, t, r);
  }
  constructor() {
    const e = n.basemigrationdata_new();
    return this.__wbg_ptr = e >>> 0, fn.register(this, this.__wbg_ptr, this), this;
  }
}
const hn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_cancelinfo_free(i >>> 0, 1));
class be {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(be.prototype);
    return t.__wbg_ptr = e, hn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, hn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_cancelinfo_free(e, 0);
  }
  reason() {
    return n.cancelinfo_reason(this.__wbg_ptr);
  }
  cancelCode() {
    let e, t;
    try {
      const r = n.cancelinfo_cancelCode(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  cancelledbyUs() {
    return n.cancelinfo_cancelledbyUs(this.__wbg_ptr) !== 0;
  }
}
const vn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_checkcode_free(i >>> 0, 1));
class It {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(It.prototype);
    return t.__wbg_ptr = e, vn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, vn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_checkcode_free(e, 0);
  }
  as_bytes() {
    const e = n.checkcode_as_bytes(this.__wbg_ptr);
    var t = L(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  to_digit() {
    return n.checkcode_to_digit(this.__wbg_ptr);
  }
}
const mn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_collectstrategy_free(i >>> 0, 1));
class q {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(q.prototype);
    return t.__wbg_ptr = e, mn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, mn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_collectstrategy_free(e, 0);
  }
  eq(e) {
    return b(e, q), n.collectstrategy_eq(this.__wbg_ptr, e.__wbg_ptr) !== 0;
  }
  static deviceBasedStrategy(e, t) {
    const r = n.collectstrategy_deviceBasedStrategy(e, t);
    return q.__wrap(r);
  }
  static allDevices() {
    const e = n.collectstrategy_allDevices();
    return q.__wrap(e);
  }
  static errorOnUnverifiedUserProblem() {
    const e = n.collectstrategy_errorOnUnverifiedUserProblem();
    return q.__wrap(e);
  }
  static identityBasedStrategy() {
    const e = n.collectstrategy_identityBasedStrategy();
    return q.__wrap(e);
  }
  static onlyTrustedDevices() {
    const e = n.collectstrategy_onlyTrustedDevices();
    return q.__wrap(e);
  }
}
const kn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_crosssigningbootstraprequests_free(i >>> 0, 1));
class Ct {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Ct.prototype);
    return t.__wbg_ptr = e, kn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, kn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_crosssigningbootstraprequests_free(e, 0);
  }
  get uploadKeysRequest() {
    return n.__wbg_get_crosssigningbootstraprequests_uploadKeysRequest(this.__wbg_ptr);
  }
  get uploadSigningKeysRequest() {
    const e = n.__wbg_get_crosssigningbootstraprequests_uploadSigningKeysRequest(this.__wbg_ptr);
    return tt.__wrap(e);
  }
  get uploadSignaturesRequest() {
    const e = n.__wbg_get_crosssigningbootstraprequests_uploadSignaturesRequest(this.__wbg_ptr);
    return he.__wrap(e);
  }
}
const Sn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_crosssigningkeyexport_free(i >>> 0, 1));
class Et {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Et.prototype);
    return t.__wbg_ptr = e, Sn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Sn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_crosssigningkeyexport_free(e, 0);
  }
  get masterKey() {
    const e = n.crosssigningkeyexport_masterKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get self_signing_key() {
    const e = n.crosssigningkeyexport_self_signing_key(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get userSigningKey() {
    const e = n.crosssigningkeyexport_userSigningKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
}
const Rn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_crosssigningstatus_free(i >>> 0, 1));
class Dt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Dt.prototype);
    return t.__wbg_ptr = e, Rn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Rn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_crosssigningstatus_free(e, 0);
  }
  get hasMaster() {
    return n.crosssigningstatus_hasMaster(this.__wbg_ptr) !== 0;
  }
  get hasSelfSigning() {
    return n.crosssigningstatus_hasSelfSigning(this.__wbg_ptr) !== 0;
  }
  get hasUserSigning() {
    return n.crosssigningstatus_hasUserSigning(this.__wbg_ptr) !== 0;
  }
}
const ar = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_curve25519publickey_free(i >>> 0, 1));
class M {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(M.prototype);
    return t.__wbg_ptr = e, ar.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ar.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_curve25519publickey_free(e, 0);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.curve25519publickey_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0] >>> 0, ar.register(this, this.__wbg_ptr, this), this;
  }
  get length() {
    return n.curve25519publickey_length(this.__wbg_ptr) >>> 0;
  }
  toBase64() {
    let e, t;
    try {
      const r = n.curve25519publickey_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const Kn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_curve25519secretkey_free(i >>> 0, 1));
class te {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(te.prototype);
    return t.__wbg_ptr = e, Kn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Kn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_curve25519secretkey_free(e, 0);
  }
  static new() {
    const e = n.curve25519secretkey_new();
    return te.__wrap(e);
  }
  static fromBase64(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.curve25519secretkey_fromBase64(t, r);
    if (s[2]) throw l(s[1]);
    return te.__wrap(s[0]);
  }
  toBase64() {
    let e, t;
    try {
      const r = n.curve25519secretkey_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  toUint8Array() {
    const e = n.curve25519secretkey_toUint8Array(this.__wbg_ptr);
    var t = L(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  static fromUint8Array(e) {
    const t = J(e, n.__wbindgen_malloc), r = u, s = n.curve25519secretkey_fromUint8Array(t, r);
    if (s[2]) throw l(s[1]);
    return te.__wrap(s[0]);
  }
}
const In = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_decryptedroomevent_free(i >>> 0, 1));
class Ot {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Ot.prototype);
    return t.__wbg_ptr = e, In.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, In.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_decryptedroomevent_free(e, 0);
  }
  get event() {
    return n.__wbg_get_decryptedroomevent_event(this.__wbg_ptr);
  }
  get sender() {
    const e = n.decryptedroomevent_sender(this.__wbg_ptr);
    return f.__wrap(e);
  }
  get senderDevice() {
    const e = n.decryptedroomevent_senderDevice(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  get senderCurve25519Key() {
    let e, t;
    try {
      const r = n.decryptedroomevent_senderCurve25519Key(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get senderClaimedEd25519Key() {
    return n.decryptedroomevent_senderClaimedEd25519Key(this.__wbg_ptr);
  }
  get forwardingCurve25519KeyChain() {
    return n.decryptedroomevent_forwardingCurve25519KeyChain(this.__wbg_ptr);
  }
  shieldState(e) {
    const t = n.decryptedroomevent_shieldState(this.__wbg_ptr, e);
    return Ye.__wrap(t);
  }
}
const Cn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_decryptedtodeviceevent_free(i >>> 0, 1));
class Mt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Mt.prototype);
    return t.__wbg_ptr = e, Cn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Cn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_decryptedtodeviceevent_free(e, 0);
  }
  get rawEvent() {
    return n.__wbg_get_decryptedtodeviceevent_rawEvent(this.__wbg_ptr);
  }
  get encryptionInfo() {
    const e = n.__wbg_get_decryptedtodeviceevent_encryptionInfo(this.__wbg_ptr);
    return Xt.__wrap(e);
  }
  get type() {
    return n.decryptedtodeviceevent_type(this.__wbg_ptr);
  }
}
const En = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_decryptionsettings_free(i >>> 0, 1));
class qe {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, En.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_decryptionsettings_free(e, 0);
  }
  get sender_device_trust_requirement() {
    return n.__wbg_get_decryptionsettings_sender_device_trust_requirement(this.__wbg_ptr);
  }
  set sender_device_trust_requirement(e) {
    n.__wbg_set_decryptionsettings_sender_device_trust_requirement(this.__wbg_ptr, e);
  }
  constructor(e) {
    const t = n.decryptionsettings_new(e);
    return this.__wbg_ptr = t >>> 0, En.register(this, this.__wbg_ptr, this), this;
  }
}
const Dn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_dehydrateddevice_free(i >>> 0, 1));
class Bt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Bt.prototype);
    return t.__wbg_ptr = e, Dn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Dn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_dehydrateddevice_free(e, 0);
  }
  keysForUpload(e, t) {
    return b(t, A), n.dehydrateddevice_keysForUpload(this.__wbg_ptr, e, t.__wbg_ptr);
  }
}
const On = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_dehydrateddevicekey_free(i >>> 0, 1));
class A {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(A.prototype);
    return t.__wbg_ptr = e, On.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, On.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_dehydrateddevicekey_free(e, 0);
  }
  static createRandomKey() {
    const e = n.dehydrateddevicekey_createRandomKey();
    if (e[2]) throw l(e[1]);
    return A.__wrap(e[0]);
  }
  static createKeyFromArray(e) {
    const t = n.dehydrateddevicekey_createKeyFromArray(e);
    if (t[2]) throw l(t[1]);
    return A.__wrap(t[0]);
  }
  toBase64() {
    return n.dehydrateddevicekey_toBase64(this.__wbg_ptr);
  }
}
const Mn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_dehydrateddevices_free(i >>> 0, 1));
class qt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(qt.prototype);
    return t.__wbg_ptr = e, Mn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Mn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_dehydrateddevices_free(e, 0);
  }
  create() {
    return n.dehydrateddevices_create(this.__wbg_ptr);
  }
  rehydrate(e, t, r) {
    b(e, A), b(t, C);
    const s = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u;
    return n.dehydrateddevices_rehydrate(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, s, o);
  }
  getDehydratedDeviceKey() {
    return n.dehydrateddevices_getDehydratedDeviceKey(this.__wbg_ptr);
  }
  saveDehydratedDeviceKey(e) {
    return b(e, A), n.dehydrateddevices_saveDehydratedDeviceKey(this.__wbg_ptr, e.__wbg_ptr);
  }
  deleteDehydratedDeviceKey() {
    return n.dehydrateddevices_deleteDehydratedDeviceKey(this.__wbg_ptr);
  }
}
const Bn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_device_free(i >>> 0, 1));
class Ve {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Ve.prototype);
    return t.__wbg_ptr = e, Bn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Bn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_device_free(e, 0);
  }
  requestVerification(e) {
    var t = v(e) ? 0 : U(e, n.__wbindgen_malloc), r = u;
    const s = n.device_requestVerification(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return l(s[0]);
  }
  encryptToDeviceEvent(e, t, r) {
    const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u;
    let _ = 0;
    return v(r) || (b(r, q), _ = r.__destroy_into_raw()), n.device_encryptToDeviceEvent(this.__wbg_ptr, s, o, t, _);
  }
  isVerified() {
    return n.device_isVerified(this.__wbg_ptr) !== 0;
  }
  isCrossSigningTrusted() {
    return n.device_isCrossSigningTrusted(this.__wbg_ptr) !== 0;
  }
  isCrossSignedByOwner() {
    return n.device_isCrossSignedByOwner(this.__wbg_ptr) !== 0;
  }
  setLocalTrust(e) {
    return n.device_setLocalTrust(this.__wbg_ptr, e);
  }
  get userId() {
    const e = n.device_userId(this.__wbg_ptr);
    return f.__wrap(e);
  }
  get deviceId() {
    const e = n.device_deviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  get displayName() {
    const e = n.device_displayName(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  getKey(e) {
    const t = n.device_getKey(this.__wbg_ptr, e);
    if (t[2]) throw l(t[1]);
    return t[0] === 0 ? void 0 : ze.__wrap(t[0]);
  }
  get curve25519Key() {
    const e = n.device_curve25519Key(this.__wbg_ptr);
    return e === 0 ? void 0 : M.__wrap(e);
  }
  get ed25519Key() {
    const e = n.device_ed25519Key(this.__wbg_ptr);
    return e === 0 ? void 0 : ie.__wrap(e);
  }
  get keys() {
    return n.device_keys(this.__wbg_ptr);
  }
  get algorithms() {
    return n.device_algorithms(this.__wbg_ptr);
  }
  get signatures() {
    const e = n.device_signatures(this.__wbg_ptr);
    return Ze.__wrap(e);
  }
  get localTrustState() {
    return n.device_localTrustState(this.__wbg_ptr);
  }
  isLocallyTrusted() {
    return n.device_isLocallyTrusted(this.__wbg_ptr) !== 0;
  }
  isBlacklisted() {
    return n.device_isBlacklisted(this.__wbg_ptr) !== 0;
  }
  isDeleted() {
    return n.device_isDeleted(this.__wbg_ptr) !== 0;
  }
  firstTimeSeen() {
    const e = n.device_firstTimeSeen(this.__wbg_ptr);
    return BigInt.asUintN(64, e);
  }
  verify() {
    return n.device_verify(this.__wbg_ptr);
  }
  get isDehydrated() {
    return n.device_isDehydrated(this.__wbg_ptr) !== 0;
  }
}
const cr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_deviceid_free(i >>> 0, 1));
class C {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(C.prototype);
    return t.__wbg_ptr = e, cr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, cr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_deviceid_free(e, 0);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.deviceid_new(t, r);
    return this.__wbg_ptr = s >>> 0, cr.register(this, this.__wbg_ptr, this), this;
  }
  toString() {
    let e, t;
    try {
      const r = n.deviceid_toString(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const qn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_devicekey_free(i >>> 0, 1));
class ze {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(ze.prototype);
    return t.__wbg_ptr = e, qn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_devicekey_free(e, 0);
  }
  get name() {
    return n.devicekey_name(this.__wbg_ptr);
  }
  get curve25519() {
    const e = n.devicekey_curve25519(this.__wbg_ptr);
    return e === 0 ? void 0 : M.__wrap(e);
  }
  get ed25519() {
    const e = n.devicekey_ed25519(this.__wbg_ptr);
    return e === 0 ? void 0 : ie.__wrap(e);
  }
  get unknown() {
    const e = n.devicekey_unknown(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  toBase64() {
    let e, t;
    try {
      const r = n.devicekey_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const Fn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_devicekeyalgorithm_free(i >>> 0, 1));
class Ft {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Ft.prototype);
    return t.__wbg_ptr = e, Fn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Fn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_devicekeyalgorithm_free(e, 0);
  }
  get name() {
    return n.devicekeyalgorithm_name(this.__wbg_ptr);
  }
  toString() {
    let e, t;
    try {
      const r = n.devicekeyalgorithm_toString(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const gr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_devicekeyid_free(i >>> 0, 1));
class ue {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(ue.prototype);
    return t.__wbg_ptr = e, gr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, gr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_devicekeyid_free(e, 0);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.devicekeyid_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0] >>> 0, gr.register(this, this.__wbg_ptr, this), this;
  }
  get algorithm() {
    const e = n.devicekeyid_algorithm(this.__wbg_ptr);
    return Ft.__wrap(e);
  }
  get deviceId() {
    const e = n.devicekeyid_deviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  toString() {
    let e, t;
    try {
      const r = n.devicekeyid_toString(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const Un = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_devicelists_free(i >>> 0, 1));
class vt {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Un.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_devicelists_free(e, 0);
  }
  constructor(e, t) {
    var r = v(e) ? 0 : U(e, n.__wbindgen_malloc), s = u, o = v(t) ? 0 : U(t, n.__wbindgen_malloc), _ = u;
    const a = n.devicelists_new(r, s, o, _);
    if (a[2]) throw l(a[1]);
    return this.__wbg_ptr = a[0] >>> 0, Un.register(this, this.__wbg_ptr, this), this;
  }
  isEmpty() {
    return n.devicelists_isEmpty(this.__wbg_ptr) !== 0;
  }
  get changed() {
    const e = n.devicelists_changed(this.__wbg_ptr);
    var t = Me(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 4, 4), t;
  }
  get left() {
    const e = n.devicelists_left(this.__wbg_ptr);
    var t = Me(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 4, 4), t;
  }
}
const Vn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_ecies_free(i >>> 0, 1));
class zs {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Vn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_ecies_free(e, 0);
  }
  constructor() {
    const e = n.ecies_new();
    return this.__wbg_ptr = e >>> 0, Vn.register(this, this.__wbg_ptr, this), this;
  }
  public_key() {
    const e = n.ecies_public_key(this.__wbg_ptr);
    return M.__wrap(e);
  }
  establish_inbound_channel(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.ecies_establish_inbound_channel(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return Tt.__wrap(s[0]);
  }
  establish_outbound_channel(e, t) {
    b(e, M);
    const r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u, o = n.ecies_establish_outbound_channel(this.__wbg_ptr, e.__wbg_ptr, r, s);
    if (o[2]) throw l(o[1]);
    return Nt.__wrap(o[0]);
  }
}
const zn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_ed25519publickey_free(i >>> 0, 1));
class ie {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(ie.prototype);
    return t.__wbg_ptr = e, zn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_ed25519publickey_free(e, 0);
  }
  get length() {
    return n.ed25519publickey_length(this.__wbg_ptr) >>> 0;
  }
  toBase64() {
    let e, t;
    try {
      const r = n.ed25519publickey_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const ur = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_ed25519signature_free(i >>> 0, 1));
class de {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(de.prototype);
    return t.__wbg_ptr = e, ur.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ur.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_ed25519signature_free(e, 0);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.ed25519signature_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0] >>> 0, ur.register(this, this.__wbg_ptr, this), this;
  }
  toBase64() {
    let e, t;
    try {
      const r = n.ed25519signature_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const Tn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_emoji_free(i >>> 0, 1));
class Ut {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Ut.prototype);
    return t.__wbg_ptr = e, Tn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Tn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_emoji_free(e, 0);
  }
  get symbol() {
    return n.emoji_symbol(this.__wbg_ptr);
  }
  get description() {
    return n.emoji_description(this.__wbg_ptr);
  }
}
const dr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_encryptedattachment_free(i >>> 0, 1));
class le {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(le.prototype);
    return t.__wbg_ptr = e, dr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, dr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_encryptedattachment_free(e, 0);
  }
  constructor(e, t) {
    const r = J(e, n.__wbindgen_malloc), s = u, o = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), _ = u, a = n.encryptedattachment_new(r, s, o, _);
    if (a[2]) throw l(a[1]);
    return this.__wbg_ptr = a[0] >>> 0, dr.register(this, this.__wbg_ptr, this), this;
  }
  get encryptedData() {
    const e = n.encryptedattachment_encryptedData(this.__wbg_ptr);
    var t = L(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  get mediaEncryptionInfo() {
    const e = n.encryptedattachment_mediaEncryptionInfo(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get hasMediaEncryptionInfoBeenConsumed() {
    return n.encryptedattachment_hasMediaEncryptionInfoBeenConsumed(this.__wbg_ptr) !== 0;
  }
}
const jn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_encryptioninfo_free(i >>> 0, 1));
class Vt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Vt.prototype);
    return t.__wbg_ptr = e, jn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, jn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_encryptioninfo_free(e, 0);
  }
  get sender() {
    const e = n.__wbg_get_encryptioninfo_sender(this.__wbg_ptr);
    return f.__wrap(e);
  }
  set sender(e) {
    b(e, f);
    var t = e.__destroy_into_raw();
    n.__wbg_set_encryptioninfo_sender(this.__wbg_ptr, t);
  }
  get senderDevice() {
    const e = n.__wbg_get_encryptioninfo_senderDevice(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  set senderDevice(e) {
    let t = 0;
    v(e) || (b(e, C), t = e.__destroy_into_raw()), n.__wbg_set_encryptioninfo_senderDevice(this.__wbg_ptr, t);
  }
  get senderCurve25519Key() {
    let e, t;
    try {
      const r = n.__wbg_get_encryptioninfo_senderCurve25519Key(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set senderCurve25519Key(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_key(this.__wbg_ptr, t, r);
  }
  get senderClaimedEd25519Key() {
    const e = n.__wbg_get_encryptioninfo_senderClaimedEd25519Key(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  set senderClaimedEd25519Key(e) {
    var t = v(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_basemigrationdata_backupVersion(this.__wbg_ptr, t, r);
  }
  shieldState(e) {
    const t = n.encryptioninfo_shieldState(this.__wbg_ptr, e);
    return Ye.__wrap(t);
  }
}
const xn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_encryptionsettings_free(i >>> 0, 1));
class nn {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_encryptionsettings_free(e, 0);
  }
  get algorithm() {
    return n.__wbg_get_encryptionsettings_algorithm(this.__wbg_ptr);
  }
  set algorithm(e) {
    n.__wbg_set_encryptionsettings_algorithm(this.__wbg_ptr, e);
  }
  get encryptStateEvents() {
    return n.__wbg_get_encryptionsettings_encryptStateEvents(this.__wbg_ptr) !== 0;
  }
  set encryptStateEvents(e) {
    n.__wbg_set_encryptionsettings_encryptStateEvents(this.__wbg_ptr, e);
  }
  get rotationPeriod() {
    const e = n.__wbg_get_encryptionsettings_rotationPeriod(this.__wbg_ptr);
    return BigInt.asUintN(64, e);
  }
  set rotationPeriod(e) {
    n.__wbg_set_encryptionsettings_rotationPeriod(this.__wbg_ptr, e);
  }
  get rotationPeriodMessages() {
    const e = n.__wbg_get_encryptionsettings_rotationPeriodMessages(this.__wbg_ptr);
    return BigInt.asUintN(64, e);
  }
  set rotationPeriodMessages(e) {
    n.__wbg_set_encryptionsettings_rotationPeriodMessages(this.__wbg_ptr, e);
  }
  get historyVisibility() {
    return n.__wbg_get_encryptionsettings_historyVisibility(this.__wbg_ptr);
  }
  set historyVisibility(e) {
    n.__wbg_set_encryptionsettings_historyVisibility(this.__wbg_ptr, e);
  }
  get sharingStrategy() {
    const e = n.__wbg_get_encryptionsettings_sharingStrategy(this.__wbg_ptr);
    return q.__wrap(e);
  }
  set sharingStrategy(e) {
    b(e, q);
    var t = e.__destroy_into_raw();
    n.__wbg_set_encryptionsettings_sharingStrategy(this.__wbg_ptr, t);
  }
  constructor() {
    const e = n.encryptionsettings_new();
    return this.__wbg_ptr = e >>> 0, xn.register(this, this.__wbg_ptr, this), this;
  }
}
const Pn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_establishedecies_free(i >>> 0, 1));
class se {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(se.prototype);
    return t.__wbg_ptr = e, Pn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Pn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_establishedecies_free(e, 0);
  }
  public_key() {
    const e = n.establishedecies_public_key(this.__wbg_ptr);
    return M.__wrap(e);
  }
  encrypt(e) {
    let t, r;
    try {
      const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u, _ = n.establishedecies_encrypt(this.__wbg_ptr, s, o);
      return t = _[0], r = _[1], y(_[0], _[1]);
    } finally {
      n.__wbindgen_free(t, r, 1);
    }
  }
  decrypt(e) {
    let t, r;
    try {
      const _ = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), a = u, c = n.establishedecies_decrypt(this.__wbg_ptr, _, a);
      var s = c[0], o = c[1];
      if (c[3]) throw s = 0, o = 0, l(c[2]);
      return t = s, r = o, y(s, o);
    } finally {
      n.__wbindgen_free(t, r, 1);
    }
  }
  check_code() {
    const e = n.establishedecies_check_code(this.__wbg_ptr);
    return It.__wrap(e);
  }
}
const An = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_eventid_free(i >>> 0, 1));
class sn {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, An.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_eventid_free(e, 0);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.eventid_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0] >>> 0, An.register(this, this.__wbg_ptr, this), this;
  }
  get localpart() {
    let e, t;
    try {
      const r = n.eventid_localpart(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get serverName() {
    const e = n.eventid_serverName(this.__wbg_ptr);
    return e === 0 ? void 0 : $e.__wrap(e);
  }
  toString() {
    let e, t;
    try {
      const r = n.eventid_toString(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const Nn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_identitykeys_free(i >>> 0, 1));
class zt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(zt.prototype);
    return t.__wbg_ptr = e, Nn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Nn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_identitykeys_free(e, 0);
  }
  get ed25519() {
    const e = n.__wbg_get_identitykeys_ed25519(this.__wbg_ptr);
    return ie.__wrap(e);
  }
  set ed25519(e) {
    b(e, ie);
    var t = e.__destroy_into_raw();
    n.__wbg_set_identitykeys_ed25519(this.__wbg_ptr, t);
  }
  get curve25519() {
    const e = n.__wbg_get_identitykeys_curve25519(this.__wbg_ptr);
    return M.__wrap(e);
  }
  set curve25519(e) {
    b(e, M);
    var t = e.__destroy_into_raw();
    n.__wbg_set_identitykeys_curve25519(this.__wbg_ptr, t);
  }
}
const Ln = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_inboundcreationresult_free(i >>> 0, 1));
class Tt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Tt.prototype);
    return t.__wbg_ptr = e, Ln.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ln.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_inboundcreationresult_free(e, 0);
  }
  get channel() {
    const e = n.__wbg_get_inboundcreationresult_channel(this.__wbg_ptr);
    return se.__wrap(e);
  }
  set channel(e) {
    b(e, se);
    var t = e.__destroy_into_raw();
    n.__wbg_set_inboundcreationresult_channel(this.__wbg_ptr, t);
  }
  get message() {
    let e, t;
    try {
      const r = n.__wbg_get_inboundcreationresult_message(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set message(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_key(this.__wbg_ptr, t, r);
  }
}
const Wn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_inboundgroupsession_free(i >>> 0, 1));
class jt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(jt.prototype);
    return t.__wbg_ptr = e, Wn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Wn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_inboundgroupsession_free(e, 0);
  }
  get roomId() {
    const e = n.inboundgroupsession_roomId(this.__wbg_ptr);
    return R.__wrap(e);
  }
  get senderKey() {
    const e = n.inboundgroupsession_senderKey(this.__wbg_ptr);
    return M.__wrap(e);
  }
  get sessionId() {
    let e, t;
    try {
      const r = n.inboundgroupsession_sessionId(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  hasBeenImported() {
    return n.inboundgroupsession_hasBeenImported(this.__wbg_ptr) !== 0;
  }
}
const Gn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_invalidtodeviceevent_free(i >>> 0, 1));
class xt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(xt.prototype);
    return t.__wbg_ptr = e, Gn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Gn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_invalidtodeviceevent_free(e, 0);
  }
  get rawEvent() {
    return n.__wbg_get_invalidtodeviceevent_rawEvent(this.__wbg_ptr);
  }
  get type() {
    return n.invalidtodeviceevent_type(this.__wbg_ptr);
  }
}
const lr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_keysbackuprequest_free(i >>> 0, 1));
class Te {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Te.prototype);
    return t.__wbg_ptr = e, lr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, lr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_keysbackuprequest_free(e, 0);
  }
  get id() {
    return n.__wbg_get_keysbackuprequest_id(this.__wbg_ptr);
  }
  get body() {
    return n.__wbg_get_keysbackuprequest_body(this.__wbg_ptr);
  }
  get version() {
    return n.__wbg_get_keysbackuprequest_version(this.__wbg_ptr);
  }
  constructor(e, t, r) {
    const s = n.keysbackuprequest_new(e, t, r);
    return this.__wbg_ptr = s >>> 0, lr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.keysbackuprequest_type(this.__wbg_ptr);
  }
}
const pr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_keysclaimrequest_free(i >>> 0, 1));
class je {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(je.prototype);
    return t.__wbg_ptr = e, pr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, pr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_keysclaimrequest_free(e, 0);
  }
  get id() {
    return n.__wbg_get_keysclaimrequest_id(this.__wbg_ptr);
  }
  get body() {
    return n.__wbg_get_keysclaimrequest_body(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = n.keysclaimrequest_new(e, t);
    return this.__wbg_ptr = r >>> 0, pr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.keysclaimrequest_type(this.__wbg_ptr);
  }
}
const wr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_keysqueryrequest_free(i >>> 0, 1));
class fe {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(fe.prototype);
    return t.__wbg_ptr = e, wr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, wr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_keysqueryrequest_free(e, 0);
  }
  get id() {
    return n.__wbg_get_keysqueryrequest_id(this.__wbg_ptr);
  }
  get body() {
    return n.__wbg_get_keysqueryrequest_body(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = n.keysqueryrequest_new(e, t);
    return this.__wbg_ptr = r >>> 0, wr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.keysqueryrequest_type(this.__wbg_ptr);
  }
}
const yr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_keysuploadrequest_free(i >>> 0, 1));
class xe {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(xe.prototype);
    return t.__wbg_ptr = e, yr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, yr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_keysuploadrequest_free(e, 0);
  }
  get id() {
    return n.__wbg_get_keysuploadrequest_id(this.__wbg_ptr);
  }
  get body() {
    return n.__wbg_get_keysuploadrequest_body(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = n.keysuploadrequest_new(e, t);
    return this.__wbg_ptr = r >>> 0, yr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.keysuploadrequest_type(this.__wbg_ptr);
  }
}
const Jn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_maybesignature_free(i >>> 0, 1));
class Pe {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Pe.prototype);
    return t.__wbg_ptr = e, Jn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Jn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_maybesignature_free(e, 0);
  }
  isValid() {
    return n.maybesignature_isValid(this.__wbg_ptr) !== 0;
  }
  isInvalid() {
    return n.maybesignature_isInvalid(this.__wbg_ptr) !== 0;
  }
  get signature() {
    const e = n.maybesignature_signature(this.__wbg_ptr);
    return e === 0 ? void 0 : Yt.__wrap(e);
  }
  get invalidSignatureSource() {
    const e = n.maybesignature_invalidSignatureSource(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
}
const Hn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_megolmdecryptionerror_free(i >>> 0, 1));
class Ae {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Ae.prototype);
    return t.__wbg_ptr = e, Hn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Hn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_megolmdecryptionerror_free(e, 0);
  }
  get code() {
    return n.__wbg_get_megolmdecryptionerror_code(this.__wbg_ptr);
  }
  get description() {
    return n.__wbg_get_megolmdecryptionerror_description(this.__wbg_ptr);
  }
  get maybe_withheld() {
    return n.__wbg_get_megolmdecryptionerror_maybe_withheld(this.__wbg_ptr);
  }
}
const Qn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_megolmv1backupkey_free(i >>> 0, 1));
class Pt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Pt.prototype);
    return t.__wbg_ptr = e, Qn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Qn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_megolmv1backupkey_free(e, 0);
  }
  get publicKeyBase64() {
    return n.megolmv1backupkey_publicKeyBase64(this.__wbg_ptr);
  }
  get algorithm() {
    return n.megolmv1backupkey_algorithm(this.__wbg_ptr);
  }
}
const Ts = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_migration_free(i >>> 0, 1));
class At {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ts.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_migration_free(e, 0);
  }
  static migrateBaseData(e, t, r, s) {
    return b(e, rn), b(r, N), n.migration_migrateBaseData(e.__wbg_ptr, t, r.__wbg_ptr, v(s) ? 0 : D(s));
  }
  static migrateOlmSessions(e, t, r, s) {
    const o = U(e, n.__wbindgen_malloc), _ = u;
    b(r, N);
    const a = n.migration_migrateOlmSessions(o, _, t, r.__wbg_ptr, v(s) ? 0 : D(s));
    if (a[2]) throw l(a[1]);
    return l(a[0]);
  }
  static migrateMegolmSessions(e, t, r, s) {
    const o = U(e, n.__wbindgen_malloc), _ = u;
    b(r, N);
    const a = n.migration_migrateMegolmSessions(o, _, t, r.__wbg_ptr, v(s) ? 0 : D(s));
    if (a[2]) throw l(a[1]);
    return l(a[0]);
  }
}
const br = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_olmmachine_free(i >>> 0, 1));
class Ne {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Ne.prototype);
    return t.__wbg_ptr = e, br.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, br.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_olmmachine_free(e, 0);
  }
  constructor() {
    const e = n.olmmachine_new();
    if (e[2]) throw l(e[1]);
    return this.__wbg_ptr = e[0] >>> 0, br.register(this, this.__wbg_ptr, this), this;
  }
  static initialize(e, t, r, s, o) {
    b(e, f), b(t, C);
    var _ = v(r) ? 0 : p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), a = u, c = v(s) ? 0 : p(s, n.__wbindgen_malloc, n.__wbindgen_realloc), d = u;
    return n.olmmachine_initialize(e.__wbg_ptr, t.__wbg_ptr, _, a, c, d, v(o) ? 0 : D(o));
  }
  static initFromStore(e, t, r, s) {
    return b(e, f), b(t, C), b(r, N), n.olmmachine_initFromStore(e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, v(s) ? 0 : D(s));
  }
  get userId() {
    const e = n.olmmachine_userId(this.__wbg_ptr);
    return f.__wrap(e);
  }
  get deviceId() {
    const e = n.olmmachine_deviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  get deviceCreationTimeMs() {
    return n.olmmachine_deviceCreationTimeMs(this.__wbg_ptr);
  }
  get identityKeys() {
    const e = n.olmmachine_identityKeys(this.__wbg_ptr);
    return zt.__wrap(e);
  }
  get displayName() {
    return n.olmmachine_displayName(this.__wbg_ptr);
  }
  get roomKeyRequestsEnabled() {
    return n.olmmachine_roomKeyRequestsEnabled(this.__wbg_ptr) !== 0;
  }
  set roomKeyRequestsEnabled(e) {
    n.olmmachine_set_roomKeyRequestsEnabled(this.__wbg_ptr, e);
  }
  get roomKeyForwardingEnabled() {
    return n.olmmachine_roomKeyForwardingEnabled(this.__wbg_ptr) !== 0;
  }
  set roomKeyForwardingEnabled(e) {
    n.olmmachine_set_roomKeyForwardingEnabled(this.__wbg_ptr, e);
  }
  trackedUsers() {
    const e = n.olmmachine_trackedUsers(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  updateTrackedUsers(e) {
    const t = U(e, n.__wbindgen_malloc), r = u;
    return n.olmmachine_updateTrackedUsers(this.__wbg_ptr, t, r);
  }
  markAllTrackedUsersAsDirty() {
    return n.olmmachine_markAllTrackedUsersAsDirty(this.__wbg_ptr);
  }
  receiveSyncChanges(e, t, r, s, o) {
    const _ = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), a = u;
    b(t, vt);
    let c = 0;
    v(o) || (b(o, qe), c = o.__destroy_into_raw());
    const d = n.olmmachine_receiveSyncChanges(this.__wbg_ptr, _, a, t.__wbg_ptr, r, v(s) ? 0 : D(s), c);
    if (d[2]) throw l(d[1]);
    return l(d[0]);
  }
  outgoingRequests() {
    return n.olmmachine_outgoingRequests(this.__wbg_ptr);
  }
  markRequestAsSent(e, t, r) {
    const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u, _ = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), a = u, c = n.olmmachine_markRequestAsSent(this.__wbg_ptr, s, o, t, _, a);
    if (c[2]) throw l(c[1]);
    return l(c[0]);
  }
  encryptRoomEvent(e, t, r) {
    b(e, R);
    const s = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u, _ = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), a = u, c = n.olmmachine_encryptRoomEvent(this.__wbg_ptr, e.__wbg_ptr, s, o, _, a);
    if (c[2]) throw l(c[1]);
    return l(c[0]);
  }
  encryptStateEvent(e, t, r, s) {
    b(e, R);
    const o = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), _ = u, a = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), c = u, d = p(s, n.__wbindgen_malloc, n.__wbindgen_realloc), w = u, h = n.olmmachine_encryptStateEvent(this.__wbg_ptr, e.__wbg_ptr, o, _, a, c, d, w);
    if (h[2]) throw l(h[1]);
    return l(h[0]);
  }
  decryptRoomEvent(e, t, r) {
    const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u;
    b(t, R), b(r, qe);
    const _ = n.olmmachine_decryptRoomEvent(this.__wbg_ptr, s, o, t.__wbg_ptr, r.__wbg_ptr);
    if (_[2]) throw l(_[1]);
    return l(_[0]);
  }
  getRoomEventEncryptionInfo(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u;
    b(t, R);
    const o = n.olmmachine_getRoomEventEncryptionInfo(this.__wbg_ptr, r, s, t.__wbg_ptr);
    if (o[2]) throw l(o[1]);
    return l(o[0]);
  }
  crossSigningStatus() {
    return n.olmmachine_crossSigningStatus(this.__wbg_ptr);
  }
  exportSecretsBundle() {
    return n.olmmachine_exportSecretsBundle(this.__wbg_ptr);
  }
  importSecretsBundle(e) {
    b(e, oe);
    var t = e.__destroy_into_raw();
    return n.olmmachine_importSecretsBundle(this.__wbg_ptr, t);
  }
  exportCrossSigningKeys() {
    return n.olmmachine_exportCrossSigningKeys(this.__wbg_ptr);
  }
  importCrossSigningKeys(e, t, r) {
    var s = v(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u, _ = v(t) ? 0 : p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), a = u, c = v(r) ? 0 : p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), d = u;
    return n.olmmachine_importCrossSigningKeys(this.__wbg_ptr, s, o, _, a, c, d);
  }
  bootstrapCrossSigning(e) {
    return n.olmmachine_bootstrapCrossSigning(this.__wbg_ptr, e);
  }
  getIdentity(e) {
    return b(e, f), n.olmmachine_getIdentity(this.__wbg_ptr, e.__wbg_ptr);
  }
  sign(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    return n.olmmachine_sign(this.__wbg_ptr, t, r);
  }
  invalidateGroupSession(e) {
    return b(e, R), n.olmmachine_invalidateGroupSession(this.__wbg_ptr, e.__wbg_ptr);
  }
  shareRoomKey(e, t, r) {
    b(e, R);
    const s = U(t, n.__wbindgen_malloc), o = u;
    return b(r, nn), n.olmmachine_shareRoomKey(this.__wbg_ptr, e.__wbg_ptr, s, o, r.__wbg_ptr);
  }
  queryKeysForUsers(e) {
    const t = U(e, n.__wbindgen_malloc), r = u, s = n.olmmachine_queryKeysForUsers(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return fe.__wrap(s[0]);
  }
  getMissingSessions(e) {
    const t = U(e, n.__wbindgen_malloc), r = u;
    return n.olmmachine_getMissingSessions(this.__wbg_ptr, t, r);
  }
  getUserDevices(e, t) {
    return b(e, f), n.olmmachine_getUserDevices(this.__wbg_ptr, e.__wbg_ptr, !v(t), v(t) ? 0 : t);
  }
  getDevice(e, t, r) {
    return b(e, f), b(t, C), n.olmmachine_getDevice(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, !v(r), v(r) ? 0 : r);
  }
  getVerification(e, t) {
    b(e, f);
    const r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u, o = n.olmmachine_getVerification(this.__wbg_ptr, e.__wbg_ptr, r, s);
    if (o[2]) throw l(o[1]);
    return l(o[0]);
  }
  getVerificationRequest(e, t) {
    b(e, f);
    const r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u, o = n.olmmachine_getVerificationRequest(this.__wbg_ptr, e.__wbg_ptr, r, s);
    return o === 0 ? void 0 : ve.__wrap(o);
  }
  getVerificationRequests(e) {
    return b(e, f), n.olmmachine_getVerificationRequests(this.__wbg_ptr, e.__wbg_ptr);
  }
  receiveVerificationEvent(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u;
    b(t, R);
    const o = n.olmmachine_receiveVerificationEvent(this.__wbg_ptr, r, s, t.__wbg_ptr);
    if (o[2]) throw l(o[1]);
    return l(o[0]);
  }
  exportRoomKeys(e) {
    return n.olmmachine_exportRoomKeys(this.__wbg_ptr, e);
  }
  importRoomKeys(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u, o = n.olmmachine_importRoomKeys(this.__wbg_ptr, r, s, t);
    if (o[2]) throw l(o[1]);
    return l(o[0]);
  }
  importExportedRoomKeys(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u, o = n.olmmachine_importExportedRoomKeys(this.__wbg_ptr, r, s, t);
    if (o[2]) throw l(o[1]);
    return l(o[0]);
  }
  importBackedUpRoomKeys(e, t, r) {
    const s = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u, _ = n.olmmachine_importBackedUpRoomKeys(this.__wbg_ptr, e, v(t) ? 0 : D(t), s, o);
    if (_[2]) throw l(_[1]);
    return l(_[0]);
  }
  saveBackupDecryptionKey(e, t) {
    b(e, V);
    const r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u;
    return n.olmmachine_saveBackupDecryptionKey(this.__wbg_ptr, e.__wbg_ptr, r, s);
  }
  getBackupKeys() {
    return n.olmmachine_getBackupKeys(this.__wbg_ptr);
  }
  verifyBackup(e) {
    const t = n.olmmachine_verifyBackup(this.__wbg_ptr, e);
    if (t[2]) throw l(t[1]);
    return l(t[0]);
  }
  enableBackupV1(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u, o = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), _ = u, a = n.olmmachine_enableBackupV1(this.__wbg_ptr, r, s, o, _);
    if (a[2]) throw l(a[1]);
    return l(a[0]);
  }
  isBackupEnabled() {
    return n.olmmachine_isBackupEnabled(this.__wbg_ptr);
  }
  disableBackup() {
    return n.olmmachine_disableBackup(this.__wbg_ptr);
  }
  backupRoomKeys() {
    return n.olmmachine_backupRoomKeys(this.__wbg_ptr);
  }
  roomKeyCounts() {
    return n.olmmachine_roomKeyCounts(this.__wbg_ptr);
  }
  static encryptExportedRoomKeys(e, t, r) {
    let s, o;
    try {
      const c = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), d = u, w = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), h = u, m = n.olmmachine_encryptExportedRoomKeys(c, d, w, h, r);
      var _ = m[0], a = m[1];
      if (m[3]) throw _ = 0, a = 0, l(m[2]);
      return s = _, o = a, y(_, a);
    } finally {
      n.__wbindgen_free(s, o, 1);
    }
  }
  static decryptExportedRoomKeys(e, t) {
    let r, s;
    try {
      const a = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), c = u, d = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), w = u, h = n.olmmachine_decryptExportedRoomKeys(a, c, d, w);
      var o = h[0], _ = h[1];
      if (h[3]) throw o = 0, _ = 0, l(h[2]);
      return r = o, s = _, y(o, _);
    } finally {
      n.__wbindgen_free(r, s, 1);
    }
  }
  registerRoomKeyUpdatedCallback(e) {
    n.olmmachine_registerRoomKeyUpdatedCallback(this.__wbg_ptr, e);
  }
  registerRoomKeysWithheldCallback(e) {
    n.olmmachine_registerRoomKeysWithheldCallback(this.__wbg_ptr, e);
  }
  registerUserIdentityUpdatedCallback(e) {
    n.olmmachine_registerUserIdentityUpdatedCallback(this.__wbg_ptr, e);
  }
  registerDevicesUpdatedCallback(e) {
    n.olmmachine_registerDevicesUpdatedCallback(this.__wbg_ptr, e);
  }
  registerReceiveSecretCallback(e) {
    n.olmmachine_registerReceiveSecretCallback(this.__wbg_ptr, e);
  }
  getSecretsFromInbox(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    return n.olmmachine_getSecretsFromInbox(this.__wbg_ptr, t, r);
  }
  deleteSecretsFromInbox(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    return n.olmmachine_deleteSecretsFromInbox(this.__wbg_ptr, t, r);
  }
  requestMissingSecretsIfNeeded() {
    return n.olmmachine_requestMissingSecretsIfNeeded(this.__wbg_ptr);
  }
  getRoomSettings(e) {
    return b(e, R), n.olmmachine_getRoomSettings(this.__wbg_ptr, e.__wbg_ptr);
  }
  setRoomSettings(e, t) {
    return b(e, R), b(t, _e), n.olmmachine_setRoomSettings(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
  }
  dehydratedDevices() {
    const e = n.olmmachine_dehydratedDevices(this.__wbg_ptr);
    return qt.__wrap(e);
  }
  buildRoomKeyBundle(e) {
    return b(e, R), n.olmmachine_buildRoomKeyBundle(this.__wbg_ptr, e.__wbg_ptr);
  }
  shareRoomKeyBundleData(e, t, r, s, o) {
    b(e, f), b(t, R);
    const _ = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), a = u;
    var c = v(s) ? 0 : p(s, n.__wbindgen_malloc, n.__wbindgen_realloc), d = u;
    b(o, q);
    var w = o.__destroy_into_raw();
    const h = n.olmmachine_shareRoomKeyBundleData(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, _, a, c, d, w);
    if (h[2]) throw l(h[1]);
    return l(h[0]);
  }
  getReceivedRoomKeyBundleData(e, t) {
    return b(e, R), b(t, f), n.olmmachine_getReceivedRoomKeyBundleData(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
  }
  receiveRoomKeyBundle(e, t) {
    b(e, Xe);
    var r = e.__destroy_into_raw();
    const s = J(t, n.__wbindgen_malloc), o = u, _ = n.olmmachine_receiveRoomKeyBundle(this.__wbg_ptr, r, s, o);
    if (_[2]) throw l(_[1]);
    return l(_[0]);
  }
  close() {
    const e = this.__destroy_into_raw();
    n.olmmachine_close(e);
  }
}
const $n = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_otheruseridentity_free(i >>> 0, 1));
class Le {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Le.prototype);
    return t.__wbg_ptr = e, $n.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $n.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_otheruseridentity_free(e, 0);
  }
  isVerified() {
    return n.otheruseridentity_isVerified(this.__wbg_ptr) !== 0;
  }
  verify() {
    return n.otheruseridentity_verify(this.__wbg_ptr);
  }
  requestVerification(e, t, r) {
    b(e, R), b(t, sn);
    var s = v(r) ? 0 : U(r, n.__wbindgen_malloc), o = u;
    const _ = n.otheruseridentity_requestVerification(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, s, o);
    if (_[2]) throw l(_[1]);
    return ve.__wrap(_[0]);
  }
  verificationRequestContent(e) {
    let t, r;
    try {
      var s = v(e) ? 0 : U(e, n.__wbindgen_malloc), o = u;
      const c = n.otheruseridentity_verificationRequestContent(this.__wbg_ptr, s, o);
      var _ = c[0], a = c[1];
      if (c[3]) throw _ = 0, a = 0, l(c[2]);
      return t = _, r = a, y(_, a);
    } finally {
      n.__wbindgen_free(t, r, 1);
    }
  }
  get masterKey() {
    let e, t;
    try {
      const o = n.otheruseridentity_masterKey(this.__wbg_ptr);
      var r = o[0], s = o[1];
      if (o[3]) throw r = 0, s = 0, l(o[2]);
      return e = r, t = s, y(r, s);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get selfSigningKey() {
    let e, t;
    try {
      const o = n.otheruseridentity_selfSigningKey(this.__wbg_ptr);
      var r = o[0], s = o[1];
      if (o[3]) throw r = 0, s = 0, l(o[2]);
      return e = r, t = s, y(r, s);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  pinCurrentMasterKey() {
    return n.otheruseridentity_pinCurrentMasterKey(this.__wbg_ptr);
  }
  identityNeedsUserApproval() {
    return n.otheruseridentity_identityNeedsUserApproval(this.__wbg_ptr) !== 0;
  }
  wasPreviouslyVerified() {
    return n.otheruseridentity_wasPreviouslyVerified(this.__wbg_ptr) !== 0;
  }
  withdrawVerification() {
    return n.otheruseridentity_withdrawVerification(this.__wbg_ptr);
  }
  hasVerificationViolation() {
    return n.otheruseridentity_hasVerificationViolation(this.__wbg_ptr) !== 0;
  }
}
const Yn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_outboundcreationresult_free(i >>> 0, 1));
class Nt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Nt.prototype);
    return t.__wbg_ptr = e, Yn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Yn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_outboundcreationresult_free(e, 0);
  }
  get channel() {
    const e = n.__wbg_get_inboundcreationresult_channel(this.__wbg_ptr);
    return se.__wrap(e);
  }
  set channel(e) {
    b(e, se);
    var t = e.__destroy_into_raw();
    n.__wbg_set_inboundcreationresult_channel(this.__wbg_ptr, t);
  }
  get initial_message() {
    let e, t;
    try {
      const r = n.__wbg_get_outboundcreationresult_initial_message(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set initial_message(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_key(this.__wbg_ptr, t, r);
  }
}
const Zn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_ownuseridentity_free(i >>> 0, 1));
class We {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(We.prototype);
    return t.__wbg_ptr = e, Zn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Zn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_ownuseridentity_free(e, 0);
  }
  isVerified() {
    return n.ownuseridentity_isVerified(this.__wbg_ptr) !== 0;
  }
  verify() {
    return n.ownuseridentity_verify(this.__wbg_ptr);
  }
  requestVerification(e) {
    var t = v(e) ? 0 : U(e, n.__wbindgen_malloc), r = u;
    const s = n.ownuseridentity_requestVerification(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return l(s[0]);
  }
  trustsOurOwnDevice() {
    return n.ownuseridentity_trustsOurOwnDevice(this.__wbg_ptr);
  }
  get masterKey() {
    let e, t;
    try {
      const o = n.ownuseridentity_masterKey(this.__wbg_ptr);
      var r = o[0], s = o[1];
      if (o[3]) throw r = 0, s = 0, l(o[2]);
      return e = r, t = s, y(r, s);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get selfSigningKey() {
    let e, t;
    try {
      const o = n.ownuseridentity_selfSigningKey(this.__wbg_ptr);
      var r = o[0], s = o[1];
      if (o[3]) throw r = 0, s = 0, l(o[2]);
      return e = r, t = s, y(r, s);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get userSigningKey() {
    let e, t;
    try {
      const o = n.ownuseridentity_userSigningKey(this.__wbg_ptr);
      var r = o[0], s = o[1];
      if (o[3]) throw r = 0, s = 0, l(o[2]);
      return e = r, t = s, y(r, s);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  wasPreviouslyVerified() {
    return n.ownuseridentity_wasPreviouslyVerified(this.__wbg_ptr) !== 0;
  }
  withdrawVerification() {
    return n.ownuseridentity_withdrawVerification(this.__wbg_ptr);
  }
  hasVerificationViolation() {
    return n.ownuseridentity_hasVerificationViolation(this.__wbg_ptr) !== 0;
  }
}
const Xn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_pickledinboundgroupsession_free(i >>> 0, 1));
class Ge {
  static __unwrap(e) {
    return e instanceof Ge ? e.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Xn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_pickledinboundgroupsession_free(e, 0);
  }
  get pickle() {
    let e, t;
    try {
      const r = n.__wbg_get_pickledinboundgroupsession_pickle(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set pickle(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_key(this.__wbg_ptr, t, r);
  }
  get senderKey() {
    let e, t;
    try {
      const r = n.__wbg_get_pickledinboundgroupsession_senderKey(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set senderKey(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_backup_version(this.__wbg_ptr, t, r);
  }
  get senderSigningKey() {
    const e = n.__wbg_get_pickledinboundgroupsession_senderSigningKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  set senderSigningKey(e) {
    var t = v(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_basemigrationdata_backupRecoveryKey(this.__wbg_ptr, t, r);
  }
  get roomId() {
    const e = n.__wbg_get_pickledinboundgroupsession_roomId(this.__wbg_ptr);
    return e === 0 ? void 0 : R.__wrap(e);
  }
  set roomId(e) {
    let t = 0;
    v(e) || (b(e, R), t = e.__destroy_into_raw()), n.__wbg_set_pickledinboundgroupsession_roomId(this.__wbg_ptr, t);
  }
  get imported() {
    return n.__wbg_get_pickledinboundgroupsession_imported(this.__wbg_ptr) !== 0;
  }
  set imported(e) {
    n.__wbg_set_pickledinboundgroupsession_imported(this.__wbg_ptr, e);
  }
  get backedUp() {
    return n.__wbg_get_pickledinboundgroupsession_backedUp(this.__wbg_ptr) !== 0;
  }
  set backedUp(e) {
    n.__wbg_set_pickledinboundgroupsession_backedUp(this.__wbg_ptr, e);
  }
  constructor() {
    const e = n.pickledinboundgroupsession_new();
    return this.__wbg_ptr = e >>> 0, Xn.register(this, this.__wbg_ptr, this), this;
  }
}
const ei = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_pickledsession_free(i >>> 0, 1));
class Je {
  static __unwrap(e) {
    return e instanceof Je ? e.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ei.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_pickledsession_free(e, 0);
  }
  get pickle() {
    let e, t;
    try {
      const r = n.__wbg_get_pickledsession_pickle(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set pickle(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_key(this.__wbg_ptr, t, r);
  }
  get senderKey() {
    let e, t;
    try {
      const r = n.__wbg_get_pickledsession_senderKey(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set senderKey(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_backup_version(this.__wbg_ptr, t, r);
  }
  get createdUsingFallbackKey() {
    return n.__wbg_get_pickledsession_createdUsingFallbackKey(this.__wbg_ptr) !== 0;
  }
  set createdUsingFallbackKey(e) {
    n.__wbg_set_pickledsession_createdUsingFallbackKey(this.__wbg_ptr, e);
  }
  get creationTime() {
    return n.__wbg_get_pickledsession_creationTime(this.__wbg_ptr);
  }
  set creationTime(e) {
    n.__wbg_set_pickledsession_creationTime(this.__wbg_ptr, e);
  }
  get lastUseTime() {
    return n.__wbg_get_pickledsession_lastUseTime(this.__wbg_ptr);
  }
  set lastUseTime(e) {
    n.__wbg_set_pickledsession_lastUseTime(this.__wbg_ptr, e);
  }
  constructor() {
    const e = n.pickledsession_new();
    return this.__wbg_ptr = e >>> 0, ei.register(this, this.__wbg_ptr, this), this;
  }
}
const fr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_pkdecryption_free(i >>> 0, 1));
class mt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(mt.prototype);
    return t.__wbg_ptr = e, fr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, fr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_pkdecryption_free(e, 0);
  }
  constructor() {
    const e = n.pkdecryption_new();
    return this.__wbg_ptr = e >>> 0, fr.register(this, this.__wbg_ptr, this), this;
  }
  static fromKey(e) {
    b(e, te);
    const t = n.pkdecryption_fromKey(e.__wbg_ptr);
    return mt.__wrap(t);
  }
  secretKey() {
    const e = n.pkdecryption_secretKey(this.__wbg_ptr);
    return te.__wrap(e);
  }
  publicKey() {
    const e = n.pkdecryption_publicKey(this.__wbg_ptr);
    return M.__wrap(e);
  }
  decryptString(e) {
    let t, r;
    try {
      b(e, G);
      const _ = n.pkdecryption_decryptString(this.__wbg_ptr, e.__wbg_ptr);
      var s = _[0], o = _[1];
      if (_[3]) throw s = 0, o = 0, l(_[2]);
      return t = s, r = o, y(s, o);
    } finally {
      n.__wbindgen_free(t, r, 1);
    }
  }
  decrypt(e) {
    b(e, G);
    const t = n.pkdecryption_decrypt(this.__wbg_ptr, e.__wbg_ptr);
    if (t[3]) throw l(t[2]);
    var r = L(t[0], t[1]).slice();
    return n.__wbindgen_free(t[0], t[1] * 1, 1), r;
  }
}
const ti = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_pkencryption_free(i >>> 0, 1));
class kt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(kt.prototype);
    return t.__wbg_ptr = e, ti.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ti.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_pkencryption_free(e, 0);
  }
  static fromKey(e) {
    b(e, M);
    const t = n.pkencryption_fromKey(e.__wbg_ptr);
    return kt.__wrap(t);
  }
  encrypt(e) {
    const t = J(e, n.__wbindgen_malloc), r = u, s = n.pkencryption_encrypt(this.__wbg_ptr, t, r);
    return G.__wrap(s);
  }
  encryptString(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.pkencryption_encrypt(this.__wbg_ptr, t, r);
    return G.__wrap(s);
  }
}
const ri = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_pkmessage_free(i >>> 0, 1));
class G {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(G.prototype);
    return t.__wbg_ptr = e, ri.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ri.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_pkmessage_free(e, 0);
  }
  ciphertext() {
    const e = n.pkmessage_ciphertext(this.__wbg_ptr);
    var t = L(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  mac() {
    const e = n.pkmessage_mac(this.__wbg_ptr);
    var t = L(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  ephemeralKey() {
    const e = n.pkmessage_ephemeralKey(this.__wbg_ptr);
    return M.__wrap(e);
  }
  static fromParts(e, t, r) {
    const s = J(e, n.__wbindgen_malloc), o = u, _ = J(t, n.__wbindgen_malloc), a = u;
    b(r, M);
    const c = n.pkmessage_fromParts(s, o, _, a, r.__wbg_ptr);
    return G.__wrap(c);
  }
  static fromBase64(e) {
    b(e, Be);
    const t = n.pkmessage_fromBase64(e.__wbg_ptr);
    if (t[2]) throw l(t[1]);
    return G.__wrap(t[0]);
  }
  toBase64() {
    const e = n.pkmessage_toBase64(this.__wbg_ptr);
    return Be.__wrap(e);
  }
}
const ni = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_plaintexttodeviceevent_free(i >>> 0, 1));
class Lt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Lt.prototype);
    return t.__wbg_ptr = e, ni.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ni.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_plaintexttodeviceevent_free(e, 0);
  }
  get rawEvent() {
    return n.__wbg_get_plaintexttodeviceevent_rawEvent(this.__wbg_ptr);
  }
  get type() {
    return n.plaintexttodeviceevent_type(this.__wbg_ptr);
  }
}
const hr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_putdehydrateddevicerequest_free(i >>> 0, 1));
class He {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(He.prototype);
    return t.__wbg_ptr = e, hr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, hr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_putdehydrateddevicerequest_free(e, 0);
  }
  get body() {
    return n.__wbg_get_putdehydrateddevicerequest_body(this.__wbg_ptr);
  }
  constructor(e) {
    const t = n.putdehydrateddevicerequest_new(e);
    return this.__wbg_ptr = t >>> 0, hr.register(this, this.__wbg_ptr, this), this;
  }
}
const ii = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_qr_free(i >>> 0, 1));
class pe {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(pe.prototype);
    return t.__wbg_ptr = e, ii.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ii.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_qr_free(e, 0);
  }
  state() {
    return n.qr_state(this.__wbg_ptr);
  }
  hasBeenScanned() {
    return n.qr_hasBeenScanned(this.__wbg_ptr) !== 0;
  }
  hasBeenConfirmed() {
    return n.qr_hasBeenConfirmed(this.__wbg_ptr) !== 0;
  }
  get userId() {
    const e = n.qr_userId(this.__wbg_ptr);
    return f.__wrap(e);
  }
  get otherUserId() {
    const e = n.qr_otherUserId(this.__wbg_ptr);
    return f.__wrap(e);
  }
  get otherDeviceId() {
    const e = n.qr_otherDeviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  weStarted() {
    return n.qr_weStarted(this.__wbg_ptr) !== 0;
  }
  cancelInfo() {
    const e = n.qr_cancelInfo(this.__wbg_ptr);
    return e === 0 ? void 0 : be.__wrap(e);
  }
  isDone() {
    return n.qr_isDone(this.__wbg_ptr) !== 0;
  }
  isCancelled() {
    return n.qr_isCancelled(this.__wbg_ptr) !== 0;
  }
  isSelfVerification() {
    return n.qr_isSelfVerification(this.__wbg_ptr) !== 0;
  }
  reciprocated() {
    return n.qr_reciprocated(this.__wbg_ptr) !== 0;
  }
  get flowId() {
    let e, t;
    try {
      const r = n.qr_flowId(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get roomId() {
    const e = n.qr_roomId(this.__wbg_ptr);
    return e === 0 ? void 0 : R.__wrap(e);
  }
  toQrCode() {
    const e = n.qr_toQrCode(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return Wt.__wrap(e[0]);
  }
  toBytes() {
    const e = n.qr_toBytes(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  reciprocate() {
    const e = n.qr_reciprocate(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  confirmScanning() {
    const e = n.qr_confirmScanning(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  cancel() {
    const e = n.qr_cancel(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  cancelWithCode(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.qr_cancelWithCode(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return l(s[0]);
  }
  registerChangesCallback(e) {
    n.qr_registerChangesCallback(this.__wbg_ptr, e);
  }
}
const si = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_qrcode_free(i >>> 0, 1));
class Wt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Wt.prototype);
    return t.__wbg_ptr = e, si.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, si.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_qrcode_free(e, 0);
  }
  renderIntoBuffer() {
    const e = n.qrcode_renderIntoBuffer(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
}
const vr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_qrcodedata_free(i >>> 0, 1));
class Oe {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Oe.prototype);
    return t.__wbg_ptr = e, vr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, vr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_qrcodedata_free(e, 0);
  }
  constructor(e, t, r) {
    b(e, M);
    var s = e.__destroy_into_raw();
    const o = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), _ = u;
    var a = v(r) ? 0 : p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), c = u;
    const d = n.qrcodedata_new(s, o, _, a, c);
    if (d[2]) throw l(d[1]);
    return this.__wbg_ptr = d[0] >>> 0, vr.register(this, this.__wbg_ptr, this), this;
  }
  static fromBytes(e) {
    const t = J(e, n.__wbindgen_malloc), r = u, s = n.qrcodedata_fromBytes(t, r);
    if (s[2]) throw l(s[1]);
    return Oe.__wrap(s[0]);
  }
  toBytes() {
    const e = n.qrcodedata_toBytes(this.__wbg_ptr);
    var t = L(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  static fromBase64(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.qrcodedata_fromBase64(t, r);
    if (s[2]) throw l(s[1]);
    return Oe.__wrap(s[0]);
  }
  toBase64() {
    let e, t;
    try {
      const r = n.qrcodedata_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get publicKey() {
    const e = n.qrcodedata_publicKey(this.__wbg_ptr);
    return M.__wrap(e);
  }
  get rendezvousUrl() {
    let e, t;
    try {
      const r = n.qrcodedata_rendezvousUrl(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get serverName() {
    const e = n.qrcodedata_serverName(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get mode() {
    return n.qrcodedata_mode(this.__wbg_ptr);
  }
}
const oi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_qrcodescan_free(i >>> 0, 1));
class we {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(we.prototype);
    return t.__wbg_ptr = e, oi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, oi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_qrcodescan_free(e, 0);
  }
  static fromBytes(e) {
    const t = n.qrcodescan_fromBytes(e);
    if (t[2]) throw l(t[1]);
    return we.__wrap(t[0]);
  }
}
const _i = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_rehydrateddevice_free(i >>> 0, 1));
class Gt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Gt.prototype);
    return t.__wbg_ptr = e, _i.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, _i.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_rehydrateddevice_free(e, 0);
  }
  receiveEvents(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u;
    let o = 0;
    return v(t) || (b(t, qe), o = t.__destroy_into_raw()), n.rehydrateddevice_receiveEvents(this.__wbg_ptr, r, s, o);
  }
}
const mr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomid_free(i >>> 0, 1));
class R {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(R.prototype);
    return t.__wbg_ptr = e, mr.register(t, t.__wbg_ptr, t), t;
  }
  static __unwrap(e) {
    return e instanceof R ? e.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, mr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roomid_free(e, 0);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.roomid_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0] >>> 0, mr.register(this, this.__wbg_ptr, this), this;
  }
  toString() {
    let e, t;
    try {
      const r = n.roomid_toString(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const ai = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomkeycounts_free(i >>> 0, 1));
class Jt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Jt.prototype);
    return t.__wbg_ptr = e, ai.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ai.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roomkeycounts_free(e, 0);
  }
  get total() {
    return n.__wbg_get_roomkeycounts_total(this.__wbg_ptr);
  }
  set total(e) {
    n.__wbg_set_roomkeycounts_total(this.__wbg_ptr, e);
  }
  get backedUp() {
    return n.__wbg_get_roomkeycounts_backedUp(this.__wbg_ptr);
  }
  set backedUp(e) {
    n.__wbg_set_roomkeycounts_backedUp(this.__wbg_ptr, e);
  }
}
const ci = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomkeyimportresult_free(i >>> 0, 1));
class Ht {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Ht.prototype);
    return t.__wbg_ptr = e, ci.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ci.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roomkeyimportresult_free(e, 0);
  }
  get importedCount() {
    return n.__wbg_get_roomkeyimportresult_importedCount(this.__wbg_ptr) >>> 0;
  }
  get totalCount() {
    return n.__wbg_get_roomkeyimportresult_totalCount(this.__wbg_ptr) >>> 0;
  }
  keys() {
    return n.roomkeyimportresult_keys(this.__wbg_ptr);
  }
}
const gi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomkeyinfo_free(i >>> 0, 1));
class Qt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Qt.prototype);
    return t.__wbg_ptr = e, gi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, gi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roomkeyinfo_free(e, 0);
  }
  get algorithm() {
    return n.roomkeyinfo_algorithm(this.__wbg_ptr);
  }
  get roomId() {
    const e = n.roomkeyinfo_roomId(this.__wbg_ptr);
    return R.__wrap(e);
  }
  get senderKey() {
    const e = n.roomkeyinfo_senderKey(this.__wbg_ptr);
    return M.__wrap(e);
  }
  get sessionId() {
    let e, t;
    try {
      const r = n.roomkeyinfo_sessionId(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const ui = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomkeywithheldinfo_free(i >>> 0, 1));
class $t {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create($t.prototype);
    return t.__wbg_ptr = e, ui.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ui.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roomkeywithheldinfo_free(e, 0);
  }
  get sender() {
    const e = n.roomkeywithheldinfo_sender(this.__wbg_ptr);
    return f.__wrap(e);
  }
  get algorithm() {
    return n.roomkeywithheldinfo_algorithm(this.__wbg_ptr);
  }
  get withheldCode() {
    let e, t;
    try {
      const r = n.roomkeywithheldinfo_withheldCode(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get roomId() {
    const e = n.roomkeywithheldinfo_roomId(this.__wbg_ptr);
    return R.__wrap(e);
  }
  get sessionId() {
    let e, t;
    try {
      const r = n.roomkeywithheldinfo_sessionId(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const kr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roommessagerequest_free(i >>> 0, 1));
class Qe {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Qe.prototype);
    return t.__wbg_ptr = e, kr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, kr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roommessagerequest_free(e, 0);
  }
  get id() {
    return n.__wbg_get_roommessagerequest_id(this.__wbg_ptr);
  }
  get room_id() {
    return n.__wbg_get_roommessagerequest_room_id(this.__wbg_ptr);
  }
  get txn_id() {
    return n.__wbg_get_roommessagerequest_txn_id(this.__wbg_ptr);
  }
  get event_type() {
    return n.__wbg_get_roommessagerequest_event_type(this.__wbg_ptr);
  }
  get body() {
    return n.__wbg_get_roommessagerequest_body(this.__wbg_ptr);
  }
  constructor(e, t, r, s, o) {
    const _ = n.roommessagerequest_new(e, t, r, s, o);
    return this.__wbg_ptr = _ >>> 0, kr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.roommessagerequest_type(this.__wbg_ptr);
  }
}
const Sr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomsettings_free(i >>> 0, 1));
class _e {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(_e.prototype);
    return t.__wbg_ptr = e, Sr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Sr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roomsettings_free(e, 0);
  }
  get algorithm() {
    return n.__wbg_get_roomsettings_algorithm(this.__wbg_ptr);
  }
  set algorithm(e) {
    n.__wbg_set_roomsettings_algorithm(this.__wbg_ptr, e);
  }
  get encryptStateEvents() {
    return n.__wbg_get_roomsettings_encryptStateEvents(this.__wbg_ptr) !== 0;
  }
  set encryptStateEvents(e) {
    n.__wbg_set_roomsettings_encryptStateEvents(this.__wbg_ptr, e);
  }
  get onlyAllowTrustedDevices() {
    return n.__wbg_get_roomsettings_onlyAllowTrustedDevices(this.__wbg_ptr) !== 0;
  }
  set onlyAllowTrustedDevices(e) {
    n.__wbg_set_roomsettings_onlyAllowTrustedDevices(this.__wbg_ptr, e);
  }
  get sessionRotationPeriodMs() {
    const e = n.__wbg_get_roomsettings_sessionRotationPeriodMs(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set sessionRotationPeriodMs(e) {
    n.__wbg_set_roomsettings_sessionRotationPeriodMs(this.__wbg_ptr, !v(e), v(e) ? 0 : e);
  }
  get sessionRotationPeriodMessages() {
    const e = n.__wbg_get_roomsettings_sessionRotationPeriodMessages(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set sessionRotationPeriodMessages(e) {
    n.__wbg_set_roomsettings_sessionRotationPeriodMessages(this.__wbg_ptr, !v(e), v(e) ? 0 : e);
  }
  constructor() {
    const e = n.roomsettings_new();
    return this.__wbg_ptr = e >>> 0, Sr.register(this, this.__wbg_ptr, this), this;
  }
}
const di = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_sas_free(i >>> 0, 1));
class ye {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(ye.prototype);
    return t.__wbg_ptr = e, di.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, di.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_sas_free(e, 0);
  }
  get userId() {
    const e = n.sas_userId(this.__wbg_ptr);
    return f.__wrap(e);
  }
  get deviceId() {
    const e = n.sas_deviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  get otherUserId() {
    const e = n.sas_otherUserId(this.__wbg_ptr);
    return f.__wrap(e);
  }
  get otherDeviceId() {
    const e = n.sas_otherDeviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  get flowId() {
    let e, t;
    try {
      const r = n.sas_flowId(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get roomId() {
    const e = n.sas_roomId(this.__wbg_ptr);
    return e === 0 ? void 0 : R.__wrap(e);
  }
  supportsEmoji() {
    return n.sas_supportsEmoji(this.__wbg_ptr) !== 0;
  }
  startedFromRequest() {
    return n.sas_startedFromRequest(this.__wbg_ptr) !== 0;
  }
  isSelfVerification() {
    return n.sas_isSelfVerification(this.__wbg_ptr) !== 0;
  }
  haveWeConfirmed() {
    return n.sas_haveWeConfirmed(this.__wbg_ptr) !== 0;
  }
  hasBeenAccepted() {
    return n.sas_hasBeenAccepted(this.__wbg_ptr) !== 0;
  }
  cancelInfo() {
    const e = n.sas_cancelInfo(this.__wbg_ptr);
    return e === 0 ? void 0 : be.__wrap(e);
  }
  weStarted() {
    return n.sas_weStarted(this.__wbg_ptr) !== 0;
  }
  accept() {
    const e = n.sas_accept(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  confirm() {
    return n.sas_confirm(this.__wbg_ptr);
  }
  cancel() {
    const e = n.sas_cancel(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  cancelWithCode(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.sas_cancelWithCode(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return l(s[0]);
  }
  timedOut() {
    return n.sas_timedOut(this.__wbg_ptr) !== 0;
  }
  canBePresented() {
    return n.sas_canBePresented(this.__wbg_ptr) !== 0;
  }
  isDone() {
    return n.sas_isDone(this.__wbg_ptr) !== 0;
  }
  isCancelled() {
    return n.sas_isCancelled(this.__wbg_ptr) !== 0;
  }
  emoji() {
    const e = n.sas_emoji(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = Me(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 4, 4)), t;
  }
  emojiIndex() {
    const e = n.sas_emojiIndex(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = L(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  decimals() {
    const e = n.sas_decimals(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = hs(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 2, 2)), t;
  }
  registerChangesCallback(e) {
    n.sas_registerChangesCallback(this.__wbg_ptr, e);
  }
}
const li = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_secretsbundle_free(i >>> 0, 1));
class oe {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(oe.prototype);
    return t.__wbg_ptr = e, li.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, li.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_secretsbundle_free(e, 0);
  }
  get masterKey() {
    let e, t;
    try {
      const r = n.secretsbundle_masterKey(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get selfSigningKey() {
    let e, t;
    try {
      const r = n.secretsbundle_selfSigningKey(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get userSigningKey() {
    let e, t;
    try {
      const r = n.secretsbundle_userSigningKey(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get backupBundle() {
    const e = n.secretsbundle_backupBundle(this.__wbg_ptr);
    return e === 0 ? void 0 : Kt.__wrap(e);
  }
  to_json() {
    const e = n.secretsbundle_to_json(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  static from_json(e) {
    const t = n.secretsbundle_from_json(e);
    if (t[2]) throw l(t[1]);
    return oe.__wrap(t[0]);
  }
}
const Rr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_servername_free(i >>> 0, 1));
class $e {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create($e.prototype);
    return t.__wbg_ptr = e, Rr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Rr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_servername_free(e, 0);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.servername_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0] >>> 0, Rr.register(this, this.__wbg_ptr, this), this;
  }
  get host() {
    let e, t;
    try {
      const r = n.servername_host(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get port() {
    const e = n.servername_port(this.__wbg_ptr);
    return e === 16777215 ? void 0 : e;
  }
  isIpLiteral() {
    return n.servername_isIpLiteral(this.__wbg_ptr) !== 0;
  }
}
const pi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_shieldstate_free(i >>> 0, 1));
class Ye {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Ye.prototype);
    return t.__wbg_ptr = e, pi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, pi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_shieldstate_free(e, 0);
  }
  get color() {
    return n.__wbg_get_shieldstate_color(this.__wbg_ptr);
  }
  set color(e) {
    n.__wbg_set_shieldstate_color(this.__wbg_ptr, e);
  }
  get code() {
    const e = n.__wbg_get_shieldstate_code(this.__wbg_ptr);
    return e === 7 ? void 0 : e;
  }
  set code(e) {
    n.__wbg_set_shieldstate_code(this.__wbg_ptr, v(e) ? 7 : e);
  }
  get message() {
    const e = n.shieldstate_message(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
}
const wi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_signature_free(i >>> 0, 1));
class Yt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Yt.prototype);
    return t.__wbg_ptr = e, wi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, wi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_signature_free(e, 0);
  }
  get ed25519() {
    const e = n.signature_ed25519(this.__wbg_ptr);
    return e === 0 ? void 0 : de.__wrap(e);
  }
  toBase64() {
    let e, t;
    try {
      const r = n.signature_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const Kr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_signatureuploadrequest_free(i >>> 0, 1));
class he {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(he.prototype);
    return t.__wbg_ptr = e, Kr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Kr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_signatureuploadrequest_free(e, 0);
  }
  get id() {
    return n.__wbg_get_signatureuploadrequest_id(this.__wbg_ptr);
  }
  get body() {
    return n.__wbg_get_signatureuploadrequest_body(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = n.signatureuploadrequest_new(e, t);
    return this.__wbg_ptr = r >>> 0, Kr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.signatureuploadrequest_type(this.__wbg_ptr);
  }
}
const yi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_signatureverification_free(i >>> 0, 1));
class Zt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Zt.prototype);
    return t.__wbg_ptr = e, yi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, yi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_signatureverification_free(e, 0);
  }
  get deviceState() {
    return n.signatureverification_deviceState(this.__wbg_ptr);
  }
  get userState() {
    return n.signatureverification_userState(this.__wbg_ptr);
  }
  trusted() {
    return n.signatureverification_trusted(this.__wbg_ptr) !== 0;
  }
}
const Ir = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_signatures_free(i >>> 0, 1));
class Ze {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Ze.prototype);
    return t.__wbg_ptr = e, Ir.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ir.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_signatures_free(e, 0);
  }
  constructor() {
    const e = n.signatures_new();
    return this.__wbg_ptr = e >>> 0, Ir.register(this, this.__wbg_ptr, this), this;
  }
  addSignature(e, t, r) {
    b(e, f), b(t, ue), b(r, de);
    const s = n.signatures_addSignature(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr);
    return s === 0 ? void 0 : Pe.__wrap(s);
  }
  getSignature(e, t) {
    b(e, f), b(t, ue);
    const r = n.signatures_getSignature(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
    return r === 0 ? void 0 : de.__wrap(r);
  }
  get(e) {
    return b(e, f), n.signatures_get(this.__wbg_ptr, e.__wbg_ptr);
  }
  clear() {
    n.signatures_clear(this.__wbg_ptr);
  }
  isEmpty() {
    return n.signatures_isEmpty(this.__wbg_ptr) !== 0;
  }
  get count() {
    return n.signatures_count(this.__wbg_ptr) >>> 0;
  }
  asJSON() {
    const e = n.signatures_asJSON(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
}
const bi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_storehandle_free(i >>> 0, 1));
class N {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(N.prototype);
    return t.__wbg_ptr = e, bi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, bi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_storehandle_free(e, 0);
  }
  static open(e, t, r) {
    var s = v(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u, _ = v(t) ? 0 : p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), a = u;
    return n.storehandle_open(s, o, _, a, v(r) ? 0 : D(r));
  }
  static openWithKey(e, t, r) {
    const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u, _ = J(t, n.__wbindgen_malloc), a = u;
    return n.storehandle_openWithKey(s, o, _, a, v(r) ? 0 : D(r));
  }
}
const fi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_storedroomkeybundledata_free(i >>> 0, 1));
class Xe {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Xe.prototype);
    return t.__wbg_ptr = e, fi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, fi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_storedroomkeybundledata_free(e, 0);
  }
  get senderUser() {
    const e = n.storedroomkeybundledata_senderUser(this.__wbg_ptr);
    return f.__wrap(e);
  }
  get roomId() {
    const e = n.storedroomkeybundledata_roomId(this.__wbg_ptr);
    return R.__wrap(e);
  }
  get url() {
    let e, t;
    try {
      const r = n.storedroomkeybundledata_url(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get encryptionInfo() {
    let e, t;
    try {
      const r = n.storedroomkeybundledata_encryptionInfo(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
const hi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_todeviceencryptioninfo_free(i >>> 0, 1));
class Xt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Xt.prototype);
    return t.__wbg_ptr = e, hi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, hi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_todeviceencryptioninfo_free(e, 0);
  }
  get senderCurve25519Key() {
    let e, t;
    try {
      const r = n.__wbg_get_todeviceencryptioninfo_senderCurve25519Key(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set senderCurve25519Key(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u;
    n.__wbg_set_backupsecretsbundle_key(this.__wbg_ptr, t, r);
  }
  get sender() {
    const e = n.__wbg_get_todeviceencryptioninfo_sender(this.__wbg_ptr);
    return f.__wrap(e);
  }
  set sender(e) {
    b(e, f);
    var t = e.__destroy_into_raw();
    n.__wbg_set_todeviceencryptioninfo_sender(this.__wbg_ptr, t);
  }
  get senderDevice() {
    const e = n.__wbg_get_todeviceencryptioninfo_senderDevice(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  set senderDevice(e) {
    let t = 0;
    v(e) || (b(e, C), t = e.__destroy_into_raw()), n.__wbg_set_todeviceencryptioninfo_senderDevice(this.__wbg_ptr, t);
  }
  isSenderVerified() {
    return n.todeviceencryptioninfo_isSenderVerified(this.__wbg_ptr) !== 0;
  }
}
const Cr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_todevicerequest_free(i >>> 0, 1));
class et {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(et.prototype);
    return t.__wbg_ptr = e, Cr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Cr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_todevicerequest_free(e, 0);
  }
  get id() {
    return n.__wbg_get_todevicerequest_id(this.__wbg_ptr);
  }
  get event_type() {
    return n.__wbg_get_todevicerequest_event_type(this.__wbg_ptr);
  }
  get txn_id() {
    return n.__wbg_get_todevicerequest_txn_id(this.__wbg_ptr);
  }
  get body() {
    return n.__wbg_get_todevicerequest_body(this.__wbg_ptr);
  }
  constructor(e, t, r, s) {
    const o = n.todevicerequest_new(e, t, r, s);
    return this.__wbg_ptr = o >>> 0, Cr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.todevicerequest_type(this.__wbg_ptr);
  }
}
const vi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_todeviceunabletodecryptinfo_free(i >>> 0, 1));
class er {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(er.prototype);
    return t.__wbg_ptr = e, vi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, vi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_todeviceunabletodecryptinfo_free(e, 0);
  }
  get reason() {
    return n.__wbg_get_todeviceunabletodecryptinfo_reason(this.__wbg_ptr);
  }
  set reason(e) {
    n.__wbg_set_todeviceunabletodecryptinfo_reason(this.__wbg_ptr, e);
  }
}
const mi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_tracing_free(i >>> 0, 1));
class js {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, mi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_tracing_free(e, 0);
  }
  static isAvailable() {
    return n.tracing_isAvailable() !== 0;
  }
  constructor(e) {
    const t = n.tracing_new(e);
    if (t[2]) throw l(t[1]);
    return this.__wbg_ptr = t[0] >>> 0, mi.register(this, this.__wbg_ptr, this), this;
  }
  set minLevel(e) {
    const t = n.tracing_set_minLevel(this.__wbg_ptr, e);
    if (t[1]) throw l(t[0]);
  }
  turnOn() {
    const e = n.tracing_turnOn(this.__wbg_ptr);
    if (e[1]) throw l(e[0]);
  }
  turnOff() {
    const e = n.tracing_turnOff(this.__wbg_ptr);
    if (e[1]) throw l(e[0]);
  }
}
const ki = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_utdtodeviceevent_free(i >>> 0, 1));
class tr {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(tr.prototype);
    return t.__wbg_ptr = e, ki.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ki.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_utdtodeviceevent_free(e, 0);
  }
  get rawEvent() {
    return n.__wbg_get_utdtodeviceevent_rawEvent(this.__wbg_ptr);
  }
  get utdInfo() {
    const e = n.__wbg_get_utdtodeviceevent_utdInfo(this.__wbg_ptr);
    return er.__wrap(e);
  }
  get type() {
    return n.utdtodeviceevent_type(this.__wbg_ptr);
  }
}
const Er = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_uploadsigningkeysrequest_free(i >>> 0, 1));
class tt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(tt.prototype);
    return t.__wbg_ptr = e, Er.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Er.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_uploadsigningkeysrequest_free(e, 0);
  }
  get body() {
    return n.__wbg_get_uploadsigningkeysrequest_body(this.__wbg_ptr);
  }
  constructor(e) {
    const t = n.uploadsigningkeysrequest_new(e);
    return this.__wbg_ptr = t >>> 0, Er.register(this, this.__wbg_ptr, this), this;
  }
}
const Si = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_userdevices_free(i >>> 0, 1));
class rr {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(rr.prototype);
    return t.__wbg_ptr = e, Si.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Si.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_userdevices_free(e, 0);
  }
  get(e) {
    b(e, C);
    const t = n.userdevices_get(this.__wbg_ptr, e.__wbg_ptr);
    return t === 0 ? void 0 : Ve.__wrap(t);
  }
  isAnyVerified() {
    return n.userdevices_isAnyVerified(this.__wbg_ptr) !== 0;
  }
  keys() {
    return n.userdevices_keys(this.__wbg_ptr);
  }
  devices() {
    return n.userdevices_devices(this.__wbg_ptr);
  }
}
const Dr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_userid_free(i >>> 0, 1));
class f {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(f.prototype);
    return t.__wbg_ptr = e, Dr.register(t, t.__wbg_ptr, t), t;
  }
  static __unwrap(e) {
    return e instanceof f ? e.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Dr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_userid_free(e, 0);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = u, s = n.userid_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0] >>> 0, Dr.register(this, this.__wbg_ptr, this), this;
  }
  get localpart() {
    let e, t;
    try {
      const r = n.userid_localpart(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get serverName() {
    const e = n.userid_serverName(this.__wbg_ptr);
    return $e.__wrap(e);
  }
  isHistorical() {
    return n.userid_isHistorical(this.__wbg_ptr) !== 0;
  }
  toString() {
    let e, t;
    try {
      const r = n.userid_toString(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  clone() {
    const e = n.userid_clone(this.__wbg_ptr);
    return f.__wrap(e);
  }
}
const Ri = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_verificationrequest_free(i >>> 0, 1));
class ve {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(ve.prototype);
    return t.__wbg_ptr = e, Ri.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ri.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_verificationrequest_free(e, 0);
  }
  static request(e, t, r, s) {
    let o, _;
    try {
      b(e, f), b(t, C), b(r, f);
      var a = v(s) ? 0 : U(s, n.__wbindgen_malloc), c = u;
      const h = n.verificationrequest_request(e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, a, c);
      var d = h[0], w = h[1];
      if (h[3]) throw d = 0, w = 0, l(h[2]);
      return o = d, _ = w, y(d, w);
    } finally {
      n.__wbindgen_free(o, _, 1);
    }
  }
  get ownUserId() {
    const e = n.verificationrequest_ownUserId(this.__wbg_ptr);
    return f.__wrap(e);
  }
  get otherUserId() {
    const e = n.verificationrequest_otherUserId(this.__wbg_ptr);
    return f.__wrap(e);
  }
  get otherDeviceId() {
    const e = n.verificationrequest_otherDeviceId(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  get roomId() {
    const e = n.verificationrequest_roomId(this.__wbg_ptr);
    return e === 0 ? void 0 : R.__wrap(e);
  }
  get cancelInfo() {
    const e = n.verificationrequest_cancelInfo(this.__wbg_ptr);
    return e === 0 ? void 0 : be.__wrap(e);
  }
  isPassive() {
    return n.verificationrequest_isPassive(this.__wbg_ptr) !== 0;
  }
  isReady() {
    return n.verificationrequest_isReady(this.__wbg_ptr) !== 0;
  }
  timedOut() {
    return n.verificationrequest_timedOut(this.__wbg_ptr) !== 0;
  }
  timeRemainingMillis() {
    return n.verificationrequest_timeRemainingMillis(this.__wbg_ptr);
  }
  get theirSupportedMethods() {
    const e = n.verificationrequest_theirSupportedMethods(this.__wbg_ptr);
    if (e[3]) throw l(e[2]);
    let t;
    return e[0] !== 0 && (t = Me(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 4, 4)), t;
  }
  get ourSupportedMethods() {
    const e = n.verificationrequest_ourSupportedMethods(this.__wbg_ptr);
    if (e[3]) throw l(e[2]);
    let t;
    return e[0] !== 0 && (t = Me(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 4, 4)), t;
  }
  get flowId() {
    let e, t;
    try {
      const r = n.verificationrequest_flowId(this.__wbg_ptr);
      return e = r[0], t = r[1], y(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  isSelfVerification() {
    return n.verificationrequest_isSelfVerification(this.__wbg_ptr) !== 0;
  }
  weStarted() {
    return n.verificationrequest_weStarted(this.__wbg_ptr) !== 0;
  }
  isDone() {
    return n.verificationrequest_isDone(this.__wbg_ptr) !== 0;
  }
  phase() {
    return n.verificationrequest_phase(this.__wbg_ptr);
  }
  getVerification() {
    return n.verificationrequest_getVerification(this.__wbg_ptr);
  }
  registerChangesCallback(e) {
    n.verificationrequest_registerChangesCallback(this.__wbg_ptr, e);
  }
  isCancelled() {
    return n.verificationrequest_isCancelled(this.__wbg_ptr) !== 0;
  }
  acceptWithMethods(e) {
    const t = U(e, n.__wbindgen_malloc), r = u, s = n.verificationrequest_acceptWithMethods(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return l(s[0]);
  }
  accept() {
    const e = n.verificationrequest_accept(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  cancel() {
    const e = n.verificationrequest_cancel(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  startSas() {
    return n.verificationrequest_startSas(this.__wbg_ptr);
  }
  generateQrCode() {
    return n.verificationrequest_generateQrCode(this.__wbg_ptr);
  }
  scanQrCode(e) {
    return b(e, we), n.verificationrequest_scanQrCode(this.__wbg_ptr, e.__wbg_ptr);
  }
}
const Ki = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_versions_free(i >>> 0, 1));
class nr {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(nr.prototype);
    return t.__wbg_ptr = e, Ki.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ki.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_versions_free(e, 0);
  }
  get vodozemac() {
    return n.__wbg_get_versions_vodozemac(this.__wbg_ptr);
  }
  get matrix_sdk_crypto() {
    return n.__wbg_get_versions_matrix_sdk_crypto(this.__wbg_ptr);
  }
  get git_sha() {
    return n.__wbg_get_versions_git_sha(this.__wbg_ptr);
  }
  get git_description() {
    return n.__wbg_get_versions_git_description(this.__wbg_ptr);
  }
}
function xs(i, e) {
  return Error(y(i, e));
}
function Ps(i, e) {
  const t = String(e), r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u;
  O().setInt32(i + 4 * 1, s, true), O().setInt32(i + 4 * 0, r, true);
}
function As(i) {
  return i.Window;
}
function Ns(i) {
  return i.WorkerGlobalScope;
}
function Ls() {
  return S(function(i, e, t) {
    return i.add(e, t);
  }, arguments);
}
function Ws(i, e) {
  return i.add(e);
}
function Gs(i, e) {
  return i.at(e);
}
function Js(i) {
  return Rt.__wrap(i);
}
function Hs() {
  return S(function(i, e) {
    return IDBKeyRange.bound(i, e);
  }, arguments);
}
function Qs() {
  return S(function(i, e, t, r) {
    return IDBKeyRange.bound(i, e, t !== 0, r !== 0);
  }, arguments);
}
function $s(i) {
  return i.buffer;
}
function Ys() {
  return S(function(i, e, t, r) {
    return i.call(e, t, r);
  }, arguments);
}
function Zs() {
  return S(function(i, e, t, r, s) {
    return i.call(e, t, r, s);
  }, arguments);
}
function Xs() {
  return S(function(i, e, t) {
    return i.call(e, t);
  }, arguments);
}
function eo() {
  return S(function(i, e) {
    return i.call(e);
  }, arguments);
}
function to(i) {
  return clearTimeout(i);
}
function ro() {
  return S(function(i) {
    return i.clear();
  }, arguments);
}
function no(i) {
  i.close();
}
function io(i) {
  return i.code;
}
function so() {
  return S(function(i) {
    i.continue();
  }, arguments);
}
function oo() {
  return S(function(i) {
    return i.count();
  }, arguments);
}
function _o() {
  return S(function(i) {
    return i.count();
  }, arguments);
}
function ao() {
  return S(function(i, e, t, r) {
    return i.createIndex(y(e, t), r);
  }, arguments);
}
function co() {
  return S(function(i, e, t, r, s) {
    return i.createIndex(y(e, t), r, s);
  }, arguments);
}
function go() {
  return S(function(i, e, t) {
    return i.createObjectStore(y(e, t));
  }, arguments);
}
function uo(i) {
  return Ct.__wrap(i);
}
function lo(i) {
  return Et.__wrap(i);
}
function po(i) {
  return Dt.__wrap(i);
}
function wo(i) {
  return i.crypto;
}
function yo(i) {
  console.debug(i);
}
function bo(i, e) {
  i.debug(e);
}
function fo(i) {
  return Ot.__wrap(i);
}
function ho(i) {
  return Mt.__wrap(i);
}
function vo(i) {
  return Bt.__wrap(i);
}
function mo(i) {
  return A.__wrap(i);
}
function ko() {
  return S(function(i, e, t) {
    i.deleteObjectStore(y(e, t));
  }, arguments);
}
function So() {
  return S(function(i) {
    return i.delete();
  }, arguments);
}
function Ro() {
  return S(function(i, e) {
    return i.delete(e);
  }, arguments);
}
function Ko(i) {
  return Ve.__wrap(i);
}
function Io(i) {
  return C.__wrap(i);
}
function Co(i) {
  return ze.__wrap(i);
}
function Eo(i) {
  return ue.__wrap(i);
}
function Do(i) {
  return i.done;
}
function Oo(i) {
  return Ut.__wrap(i);
}
function Mo(i) {
  return le.__wrap(i);
}
function Bo(i) {
  return Vt.__wrap(i);
}
function qo(i) {
  return Object.entries(i);
}
function Fo(i) {
  return i.entries();
}
function Uo(i, e) {
  i.error(e);
}
function Vo() {
  return S(function(i) {
    const e = i.error;
    return v(e) ? 0 : D(e);
  }, arguments);
}
function zo(i) {
  console.error(i);
}
function To(i, e) {
  let t, r;
  try {
    t = i, r = e, console.error(y(i, e));
  } finally {
    n.__wbindgen_free(t, r, 1);
  }
}
function jo(i) {
  return Array.from(i);
}
function xo() {
  return S(function(i) {
    return i.getAllKeys();
  }, arguments);
}
function Po() {
  return S(function(i) {
    return i.getAll();
  }, arguments);
}
function Ao() {
  return S(function(i, e, t) {
    return i.getAll(e, t >>> 0);
  }, arguments);
}
function No() {
  return S(function(i, e) {
    return i.getAll(e);
  }, arguments);
}
function Lo() {
  return S(function(i, e) {
    globalThis.crypto.getRandomValues(L(i, e));
  }, arguments);
}
function Wo() {
  return S(function(i, e) {
    i.getRandomValues(e);
  }, arguments);
}
function Go(i) {
  return i.getTime();
}
function Jo() {
  return S(function(i, e) {
    return Reflect.get(i, e);
  }, arguments);
}
function Ho(i, e) {
  return i[e >>> 0];
}
function Qo() {
  return S(function(i, e) {
    return i.get(e);
  }, arguments);
}
function $o() {
  return S(function(i, e) {
    return i.get(e);
  }, arguments);
}
function Yo(i, e) {
  return i[e];
}
function Zo(i) {
  return i.global;
}
function Xo(i) {
  return jt.__wrap(i);
}
function e_() {
  return S(function(i, e, t) {
    return i.index(y(e, t));
  }, arguments);
}
function t_() {
  return S(function(i) {
    const e = i.indexedDB;
    return v(e) ? 0 : D(e);
  }, arguments);
}
function r_() {
  return S(function(i) {
    const e = i.indexedDB;
    return v(e) ? 0 : D(e);
  }, arguments);
}
function n_() {
  return S(function(i) {
    const e = i.indexedDB;
    return v(e) ? 0 : D(e);
  }, arguments);
}
function i_(i) {
  console.info(i);
}
function s_(i, e) {
  i.info(e);
}
function o_(i) {
  let e;
  try {
    e = i instanceof ArrayBuffer;
  } catch {
    e = false;
  }
  return e;
}
function __(i) {
  let e;
  try {
    e = i instanceof Map;
  } catch {
    e = false;
  }
  return e;
}
function a_(i) {
  let e;
  try {
    e = i instanceof Promise;
  } catch {
    e = false;
  }
  return e;
}
function c_(i) {
  let e;
  try {
    e = i instanceof Uint8Array;
  } catch {
    e = false;
  }
  return e;
}
function g_(i) {
  return xt.__wrap(i);
}
function u_(i) {
  return Array.isArray(i);
}
function d_(i) {
  return Array.isArray(i);
}
function l_(i) {
  return Number.isSafeInteger(i);
}
function p_(i, e, t) {
  const r = e.item(t >>> 0);
  var s = v(r) ? 0 : p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u;
  O().setInt32(i + 4 * 1, o, true), O().setInt32(i + 4 * 0, s, true);
}
function w_() {
  return Symbol.iterator;
}
function y_() {
  return S(function(i) {
    return i.key;
  }, arguments);
}
function b_(i) {
  return Te.__wrap(i);
}
function f_(i) {
  return je.__wrap(i);
}
function h_(i) {
  return fe.__wrap(i);
}
function v_(i) {
  return xe.__wrap(i);
}
function m_(i) {
  return i.length;
}
function k_(i) {
  return i.length;
}
function S_(i) {
  return i.length;
}
function R_() {
  return S(function(i, e) {
    return IDBKeyRange.lowerBound(i, e !== 0);
  }, arguments);
}
function K_(i) {
  return Pe.__wrap(i);
}
function I_(i) {
  return Ae.__wrap(i);
}
function C_(i, e) {
  const t = e.message, r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u;
  O().setInt32(i + 4 * 1, s, true), O().setInt32(i + 4 * 0, r, true);
}
function E_(i) {
  return i.msCrypto;
}
function D_(i, e) {
  const t = e.name, r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u;
  O().setInt32(i + 4 * 1, s, true), O().setInt32(i + 4 * 0, r, true);
}
function O_() {
  return new Object();
}
function M_() {
  return new Array();
}
function B_() {
  return new Error();
}
function q_(i) {
  return new Date(i);
}
function F_() {
  return /* @__PURE__ */ new Map();
}
function U_(i) {
  return new Uint8ClampedArray(i);
}
function V_(i) {
  return new Set(i);
}
function z_(i, e) {
  try {
    var t = { a: i, b: e }, r = (o, _) => {
      const a = t.a;
      t.a = 0;
      try {
        return Is(a, t.b, o, _);
      } finally {
        t.a = a;
      }
    };
    return new Promise(r);
  } finally {
    t.a = t.b = 0;
  }
}
function T_(i) {
  return new Uint8Array(i);
}
function j_(i, e) {
  return new Function(y(i, e));
}
function x_(i, e, t) {
  return new Uint8ClampedArray(i, e >>> 0, t >>> 0);
}
function P_(i, e, t) {
  return new Uint8Array(i, e >>> 0, t >>> 0);
}
function A_(i) {
  return new Uint8Array(i >>> 0);
}
function N_(i) {
  return new Uint8ClampedArray(i >>> 0);
}
function L_() {
  return S(function(i, e) {
    return new DOMException(y(i, e));
  }, arguments);
}
function W_(i) {
  return i.next;
}
function G_() {
  return S(function(i) {
    return i.next();
  }, arguments);
}
function J_(i) {
  return i.node;
}
function H_(i) {
  return i.now();
}
function Q_() {
  return Date.now();
}
function $_(i) {
  return i.objectStoreNames;
}
function Y_() {
  return S(function(i, e, t) {
    return i.objectStore(y(e, t));
  }, arguments);
}
function Z_(i) {
  return i.oldVersion;
}
function X_(i) {
  return Ne.__wrap(i);
}
function ea() {
  return S(function(i) {
    return i.openCursor();
  }, arguments);
}
function ta() {
  return S(function(i, e) {
    return i.openCursor(e);
  }, arguments);
}
function ra() {
  return S(function(i) {
    return i.openCursor();
  }, arguments);
}
function na() {
  return S(function(i, e, t, r) {
    return i.open(y(e, t), r >>> 0);
  }, arguments);
}
function ia() {
  return S(function(i, e, t) {
    return i.open(y(e, t));
  }, arguments);
}
function sa(i) {
  return Le.__wrap(i);
}
function oa(i) {
  return We.__wrap(i);
}
function _a() {
  return S(function(i, e) {
    return JSON.parse(y(i, e));
  }, arguments);
}
function aa(i) {
  return i.performance;
}
function ca(i) {
  return Ge.__unwrap(i);
}
function ga(i) {
  return Je.__unwrap(i);
}
function ua(i) {
  return Lt.__wrap(i);
}
function da(i) {
  return i.process;
}
function la(i, e) {
  return i.push(e);
}
function pa() {
  return S(function(i, e, t) {
    return i.put(e, t);
  }, arguments);
}
function wa(i) {
  return He.__wrap(i);
}
function ya(i) {
  return pe.__wrap(i);
}
function ba(i) {
  queueMicrotask(i);
}
function fa(i) {
  return i.queueMicrotask;
}
function ha() {
  return S(function(i, e) {
    i.randomFillSync(e);
  }, arguments);
}
function va(i) {
  const e = i.readyState;
  return (Fs.indexOf(e) + 1 || 3) - 1;
}
function ma(i) {
  return Gt.__wrap(i);
}
function ka() {
  return S(function() {
    return module.require;
  }, arguments);
}
function Sa(i) {
  return Promise.resolve(i);
}
function Ra() {
  return S(function(i) {
    return i.result;
  }, arguments);
}
function Ka(i) {
  return R.__unwrap(i);
}
function Ia(i) {
  return Jt.__wrap(i);
}
function Ca(i) {
  return Ht.__wrap(i);
}
function Ea(i) {
  return Qt.__wrap(i);
}
function Da(i) {
  return $t.__wrap(i);
}
function Oa(i) {
  return Qe.__wrap(i);
}
function Ma(i) {
  return _e.__wrap(i);
}
function Ba(i) {
  return ye.__wrap(i);
}
function qa(i) {
  return oe.__wrap(i);
}
function Fa() {
  return S(function(i, e) {
    return setTimeout(i, e);
  }, arguments);
}
function Ua(i, e, t) {
  i[e] = t;
}
function Va(i, e, t) {
  i[e >>> 0] = t;
}
function za(i, e, t) {
  return i.set(e, t);
}
function Ta(i, e, t) {
  i.set(e, t >>> 0);
}
function ja(i, e, t) {
  i.set(e, t >>> 0);
}
function xa(i, e) {
  i.onabort = e;
}
function Pa(i, e) {
  i.onblocked = e;
}
function Aa(i, e) {
  i.oncomplete = e;
}
function Na(i, e) {
  i.onerror = e;
}
function La(i, e) {
  i.onerror = e;
}
function Wa(i, e) {
  i.onsuccess = e;
}
function Ga(i, e) {
  i.onupgradeneeded = e;
}
function Ja(i, e) {
  i.onversionchange = e;
}
function Ha(i, e) {
  i.unique = e !== 0;
}
function Qa(i) {
  return Ze.__wrap(i);
}
function $a(i) {
  return he.__wrap(i);
}
function Ya(i) {
  return Zt.__wrap(i);
}
function Za(i, e) {
  const t = e.stack, r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u;
  O().setInt32(i + 4 * 1, s, true), O().setInt32(i + 4 * 0, r, true);
}
function Xa() {
  const i = typeof global > "u" ? null : global;
  return v(i) ? 0 : D(i);
}
function ec() {
  const i = typeof globalThis > "u" ? null : globalThis;
  return v(i) ? 0 : D(i);
}
function tc() {
  const i = typeof self > "u" ? null : self;
  return v(i) ? 0 : D(i);
}
function rc() {
  const i = typeof window > "u" ? null : window;
  return v(i) ? 0 : D(i);
}
function nc(i) {
  return Xe.__wrap(i);
}
function ic(i) {
  return N.__wrap(i);
}
function sc() {
  return S(function(i) {
    return JSON.stringify(i);
  }, arguments);
}
function oc(i, e, t) {
  return i.subarray(e >>> 0, t >>> 0);
}
function _c(i) {
  const e = i.target;
  return v(e) ? 0 : D(e);
}
function ac(i, e, t) {
  return i.then(e, t);
}
function cc(i, e) {
  return i.then(e);
}
function gc(i) {
  return et.__wrap(i);
}
function uc(i) {
  const e = i.transaction;
  return v(e) ? 0 : D(e);
}
function dc() {
  return S(function(i, e, t, r) {
    return i.transaction(y(e, t), Ji[r]);
  }, arguments);
}
function lc() {
  return S(function(i, e, t) {
    return i.transaction(e, Ji[t]);
  }, arguments);
}
function pc() {
  return S(function(i, e) {
    return i.update(e);
  }, arguments);
}
function wc(i) {
  return rr.__wrap(i);
}
function yc(i) {
  return f.__wrap(i);
}
function bc(i) {
  return f.__unwrap(i);
}
function fc(i) {
  return tr.__wrap(i);
}
function hc(i) {
  return i.value;
}
function vc() {
  return S(function(i) {
    return i.value;
  }, arguments);
}
function mc(i) {
  return i.values();
}
function kc(i) {
  return ve.__wrap(i);
}
function Sc(i) {
  return i.version;
}
function Rc(i) {
  return i.versions;
}
function Kc(i, e) {
  i.warn(e);
}
function Ic(i) {
  console.warn(i);
}
function Cc() {
  return [];
}
function Ec(i, e) {
  i.push(e);
}
function Dc(i) {
  return +i;
}
function Oc(i) {
  return i;
}
function Mc(i) {
  return BigInt.asUintN(64, i);
}
function Bc(i, e) {
  const t = e, r = typeof t == "bigint" ? t : void 0;
  O().setBigInt64(i + 8 * 1, v(r) ? BigInt(0) : r, true), O().setInt32(i + 4 * 0, !v(r), true);
}
function qc(i) {
  const e = i;
  return typeof e == "boolean" ? e ? 1 : 0 : 2;
}
function Fc(i) {
  const e = i.original;
  return e.cnt-- == 1 ? (e.a = 0, true) : false;
}
function Uc(i, e, t) {
  return tn(i, e, 40, ms);
}
function Vc(i, e, t) {
  return tn(i, e, 432, ks);
}
function zc(i, e, t) {
  return tn(i, e, 432, Ss);
}
function Tc(i, e, t) {
  return Wi(i, e, 437, Rs);
}
function jc(i, e, t) {
  return Wi(i, e, 437, Ks);
}
function xc(i, e) {
  const t = Ur(e), r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = u;
  O().setInt32(i + 4 * 1, s, true), O().setInt32(i + 4 * 0, r, true);
}
function Pc(i, e) {
  return i in e;
}
function Ac() {
  const i = n.__wbindgen_export_4, e = i.grow(4);
  i.set(0, void 0), i.set(e + 0, void 0), i.set(e + 1, null), i.set(e + 2, true), i.set(e + 3, false);
}
function Nc(i) {
  return typeof i == "bigint";
}
function Lc(i) {
  return typeof i == "function";
}
function Wc(i) {
  return i === null;
}
function Gc(i) {
  const e = i;
  return typeof e == "object" && e !== null;
}
function Jc(i) {
  return typeof i == "string";
}
function Hc(i) {
  return i === void 0;
}
function Qc(i, e) {
  return i === e;
}
function $c(i, e) {
  return i == e;
}
function Yc() {
  return n.memory;
}
function Zc(i, e) {
  const t = e, r = typeof t == "number" ? t : void 0;
  O().setFloat64(i + 8 * 1, v(r) ? 0 : r, true), O().setInt32(i + 4 * 0, !v(r), true);
}
function Xc(i) {
  return i;
}
function eg(i, e) {
  const t = e, r = typeof t == "string" ? t : void 0;
  var s = v(r) ? 0 : p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = u;
  O().setInt32(i + 4 * 1, o, true), O().setInt32(i + 4 * 0, s, true);
}
function tg(i, e) {
  return y(i, e);
}
function rg(i, e) {
  throw new Error(y(i, e));
}
function ng(i) {
  let e;
  try {
    e = +i;
  } catch (r) {
    e = r;
  }
  return e;
}
const ig = Object.freeze(Object.defineProperty({ __proto__: null, Attachment: Vs, BackupDecryptionKey: V, BackupKeys: Rt, BackupSecretsBundle: Kt, Base64EncodedPkMessage: Be, BaseMigrationData: rn, CancelInfo: be, CheckCode: It, CollectStrategy: q, CrossSigningBootstrapRequests: Ct, CrossSigningKeyExport: Et, CrossSigningStatus: Dt, Curve25519PublicKey: M, Curve25519SecretKey: te, DecryptedRoomEvent: Ot, DecryptedToDeviceEvent: Mt, DecryptionErrorCode: Y, DecryptionSettings: qe, DehydratedDevice: Bt, DehydratedDeviceKey: A, DehydratedDevices: qt, Device: Ve, DeviceId: C, DeviceKey: ze, DeviceKeyAlgorithm: Ft, DeviceKeyAlgorithmName: Cs, DeviceKeyId: ue, DeviceKeyName: Es, DeviceLists: vt, Ecies: zs, Ed25519PublicKey: ie, Ed25519Signature: de, Emoji: Ut, EncryptedAttachment: le, EncryptionAlgorithm: ge, EncryptionInfo: Vt, EncryptionSettings: nn, EstablishedEcies: se, EventId: sn, HistoryVisibility: Ke, IdentityKeys: zt, InboundCreationResult: Tt, InboundGroupSession: jt, InvalidToDeviceEvent: xt, KeysBackupRequest: Te, KeysClaimRequest: je, KeysQueryRequest: fe, KeysUploadRequest: xe, LocalTrust: Vr, LoggerLevel: Ds, MaybeSignature: Pe, MegolmDecryptionError: Ae, MegolmV1BackupKey: Pt, Migration: At, OlmMachine: Ne, OtherUserIdentity: Le, OutboundCreationResult: Nt, OwnUserIdentity: We, PickledInboundGroupSession: Ge, PickledSession: Je, PkDecryption: mt, PkEncryption: kt, PkMessage: G, PlainTextToDeviceEvent: Lt, ProcessedToDeviceEventType: Ie, PutDehydratedDeviceRequest: He, Qr: pe, QrCode: Wt, QrCodeData: Oe, QrCodeMode: Os, QrCodeScan: we, QrState: re, RehydratedDevice: Gt, RequestType: Ms, RoomId: R, RoomKeyCounts: Jt, RoomKeyImportResult: Ht, RoomKeyInfo: Qt, RoomKeyWithheldInfo: $t, RoomMessageRequest: Qe, RoomSettings: _e, Sas: ye, SecretsBundle: oe, ServerName: $e, ShieldColor: zr, ShieldState: Ye, ShieldStateCode: Z, Signature: Yt, SignatureState: Bs, SignatureUploadRequest: he, SignatureVerification: Zt, Signatures: Ze, StoreHandle: N, StoredRoomKeyBundleData: Xe, ToDeviceEncryptionInfo: Xt, ToDeviceRequest: et, ToDeviceUnableToDecryptInfo: er, ToDeviceUnableToDecryptReason: qs, Tracing: js, TrustRequirement: Tr, UTDToDeviceEvent: tr, UploadSigningKeysRequest: tt, UserDevices: rr, UserId: f, VerificationMethod: Ce, VerificationRequest: ve, VerificationRequestPhase: X, Versions: nr, __wbg_Error_0497d5bdba9362e5: xs, __wbg_String_8f0eb39a4a4c2f66: Ps, __wbg_Window_b0044ac7db258535: As, __wbg_WorkerGlobalScope_b74cefefc62a37da: Ns, __wbg_add_64c6e51ab0ed12dd: Ls, __wbg_add_dd833f9f523abe36: Ws, __wbg_at_5b2884630cb66ea6: Gs, __wbg_backupkeys_new: Js, __wbg_bound_0274374bea7f6bca: Hs, __wbg_bound_eb572b424befade3: Qs, __wbg_buffer_a1a27a0dfa70165d: $s, __wbg_call_1b920c3ac0afee4b: Ys, __wbg_call_36f1bbf64b4cf7c7: Zs, __wbg_call_f2db6205e5c51dc8: Xs, __wbg_call_fbe8be8bf6436ce5: eo, __wbg_clearTimeout_5a54f8841c30079a: to, __wbg_clear_e6ec1cc113e1555e: ro, __wbg_close_2079e209ea5709b5: no, __wbg_code_5e459ca721f994f5: io, __wbg_continue_7d9cdafc888cb902: so, __wbg_count_2941fdbb8154c02d: oo, __wbg_count_5ceb291ba9a02b4b: _o, __wbg_createIndex_32ba53785b2ef24e: ao, __wbg_createIndex_a343510ba567e58c: co, __wbg_createObjectStore_b1f08961900155dd: go, __wbg_crosssigningbootstraprequests_new: uo, __wbg_crosssigningkeyexport_new: lo, __wbg_crosssigningstatus_new: po, __wbg_crypto_574e78ad8b13b65f: wo, __wbg_debug_58d16ea352cfbca1: yo, __wbg_debug_ada37632f0e8cdde: bo, __wbg_decryptedroomevent_new: fo, __wbg_decryptedtodeviceevent_new: ho, __wbg_dehydrateddevice_new: vo, __wbg_dehydrateddevicekey_new: mo, __wbg_deleteObjectStore_7b427b19378475fd: ko, __wbg_delete_1af2aac87b36c0f1: So, __wbg_delete_71b7921c73aa9378: Ro, __wbg_device_new: Ko, __wbg_deviceid_new: Io, __wbg_devicekey_new: Co, __wbg_devicekeyid_new: Eo, __wbg_done_4d01f352bade43b7: Do, __wbg_emoji_new: Oo, __wbg_encryptedattachment_new: Mo, __wbg_encryptioninfo_new: Bo, __wbg_entries_41651c850143b957: qo, __wbg_entries_c951fa14164704e7: Fo, __wbg_error_24afdcd463ac8bd9: Uo, __wbg_error_4e978abc9692c0c5: Vo, __wbg_error_51ecdd39ec054205: zo, __wbg_error_7534b8e9a36f1ab4: To, __wbg_from_12ff8e47307bd4c7: jo, __wbg_getAllKeys_fce3f6ef8201c450: xo, __wbg_getAll_22a744d3b40f0fb5: Po, __wbg_getAll_654e689108532352: Ao, __wbg_getAll_864be044b219e256: No, __wbg_getRandomValues_38a1ff1ea09f6cc7: Lo, __wbg_getRandomValues_b8f5dbd5f3995a9e: Wo, __wbg_getTime_2afe67905d873e92: Go, __wbg_get_92470be87867c2e5: Jo, __wbg_get_a131a44bd1eb6979: Ho, __wbg_get_a4719581b0d717ad: Qo, __wbg_get_d37904b955701f99: $o, __wbg_getwithrefkey_1dc361bd10053bfe: Yo, __wbg_global_b6f5c73312f62313: Zo, __wbg_inboundgroupsession_new: Xo, __wbg_index_405783ca8da5f008: e_, __wbg_indexedDB_317016dcb8a872d6: t_, __wbg_indexedDB_601ec26c63e333de: r_, __wbg_indexedDB_63b82e158eb67cbd: n_, __wbg_info_e56933705c348038: i_, __wbg_info_f3589034369581f6: s_, __wbg_instanceof_ArrayBuffer_a8b6f580b363f2bc: o_, __wbg_instanceof_Map_80cc65041c96417a: __, __wbg_instanceof_Promise_66f94afc64d9039f: a_, __wbg_instanceof_Uint8Array_ca460677bc155827: c_, __wbg_invalidtodeviceevent_new: g_, __wbg_isArray_2a07fd175d45c496: u_, __wbg_isArray_5f090bed72bd4f89: d_, __wbg_isSafeInteger_90d7c4674047d684: l_, __wbg_item_15285ca2d766f142: p_, __wbg_iterator_4068add5b2aef7a6: w_, __wbg_key_a17a68df9ec1b180: y_, __wbg_keysbackuprequest_new: b_, __wbg_keysclaimrequest_new: f_, __wbg_keysqueryrequest_new: h_, __wbg_keysuploadrequest_new: v_, __wbg_length_471141fa24df24b2: m_, __wbg_length_ab6d22b5ead75c72: k_, __wbg_length_f00ec12454a5d9fd: S_, __wbg_lowerBound_13c8e875a3fb9f7d: R_, __wbg_maybesignature_new: K_, __wbg_megolmdecryptionerror_new: I_, __wbg_message_2d95ea5aff0d63b9: C_, __wbg_msCrypto_a61aeb35a24c1329: E_, __wbg_name_2acff1e83d9735f9: D_, __wbg_new_07b483f72211fd66: O_, __wbg_new_58353953ad2097cc: M_, __wbg_new_8a6f238a6ece86ea: B_, __wbg_new_a2957aa5684de228: q_, __wbg_new_a979b4b45bd55c7f: F_, __wbg_new_b3a08d2910ee5170: U_, __wbg_new_db7d9b0ee94df522: V_, __wbg_new_e30c39c06edaabf2: z_, __wbg_new_e52b3efaaa774f96: T_, __wbg_newnoargs_ff528e72d35de39a: j_, __wbg_newwithbyteoffsetandlength_06e8c938173769b5: x_, __wbg_newwithbyteoffsetandlength_3b01ecda099177e8: P_, __wbg_newwithlength_08f872dc1e3ada2e: A_, __wbg_newwithlength_8a0d31010560ce9a: N_, __wbg_newwithmessage_54042111509ba20c: L_, __wbg_next_8bb824d217961b5d: W_, __wbg_next_e2da48d8fff7439a: G_, __wbg_node_905d3e251edff8a2: J_, __wbg_now_2c95c9de01293173: H_, __wbg_now_eb0821f3bd9f6529: Q_, __wbg_objectStoreNames_e82275eb2d403a92: $_, __wbg_objectStore_b463d32c86d6b543: Y_, __wbg_oldVersion_af5af638a028177c: Z_, __wbg_olmmachine_new: X_, __wbg_openCursor_7c13a2cd32c6258b: ea, __wbg_openCursor_a53133c898e0829c: ta, __wbg_openCursor_dbd279400634ae67: ra, __wbg_open_0f04f50fa4d98f67: na, __wbg_open_b70fb421d97aad40: ia, __wbg_otheruseridentity_new: sa, __wbg_ownuseridentity_new: oa, __wbg_parse_c7ba327fb6231e7f: _a, __wbg_performance_7a3ffd0b17f663ad: aa, __wbg_pickledinboundgroupsession_unwrap: ca, __wbg_pickledsession_unwrap: ga, __wbg_plaintexttodeviceevent_new: ua, __wbg_process_dc0fbacc7c1c06f7: da, __wbg_push_73fd7b5550ebf707: la, __wbg_put_7f0b4dcc666f09e3: pa, __wbg_putdehydrateddevicerequest_new: wa, __wbg_qr_new: ya, __wbg_queueMicrotask_46c1df247678729f: ba, __wbg_queueMicrotask_8acf3ccb75ed8d11: fa, __wbg_randomFillSync_ac0988aba3254290: ha, __wbg_readyState_249e5707a38b7a7a: va, __wbg_rehydrateddevice_new: ma, __wbg_require_60cc747a6bc5215a: ka, __wbg_resolve_0dac8c580ffd4678: Sa, __wbg_result_a0f1bf2fe64a516c: Ra, __wbg_roomid_unwrap: Ka, __wbg_roomkeycounts_new: Ia, __wbg_roomkeyimportresult_new: Ca, __wbg_roomkeyinfo_new: Ea, __wbg_roomkeywithheldinfo_new: Da, __wbg_roommessagerequest_new: Oa, __wbg_roomsettings_new: Ma, __wbg_sas_new: Ba, __wbg_secretsbundle_new: qa, __wbg_setTimeout_db2dbaeefb6f39c7: Fa, __wbg_set_3f1d0b984ed272ed: Ua, __wbg_set_7422acbe992d64ab: Va, __wbg_set_d6bdfd275fb8a4ce: za, __wbg_set_fd40eacc85c5ab66: Ta, __wbg_set_fe4e79d1ed3b0e9b: ja, __wbg_set_wasm: en, __wbg_setonabort_479ebb5884fcb171: xa, __wbg_setonblocked_046331b614d6f8e3: Pa, __wbg_setoncomplete_27bdbca012e45c05: Aa, __wbg_setonerror_537b68f474e27d4e: Na, __wbg_setonerror_ce5c4d34aed931bb: La, __wbg_setonsuccess_0b2b45bd8cc13b95: Wa, __wbg_setonupgradeneeded_be2e0ae927917f82: Ga, __wbg_setonversionchange_407ebf1ad930c84c: Ja, __wbg_setunique_727cefd7e14cf677: Ha, __wbg_signatures_new: Qa, __wbg_signatureuploadrequest_new: $a, __wbg_signatureverification_new: Ya, __wbg_stack_0ed75d68575b0f3c: Za, __wbg_static_accessor_GLOBAL_487c52c58d65314d: Xa, __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291: ec, __wbg_static_accessor_SELF_78c9e3071b912620: tc, __wbg_static_accessor_WINDOW_a093d21393777366: rc, __wbg_storedroomkeybundledata_new: nc, __wbg_storehandle_new: ic, __wbg_stringify_c242842b97f054cc: sc, __wbg_subarray_dd4ade7d53bd8e26: oc, __wbg_target_15f1da583855ac4e: _c, __wbg_then_82ab9fb4080f1707: ac, __wbg_then_db882932c0c714c6: cc, __wbg_todevicerequest_new: gc, __wbg_transaction_34c41b46ca391af6: uc, __wbg_transaction_36c8b28ed4349a9a: dc, __wbg_transaction_399fc15f5bba1880: lc, __wbg_update_297181dae0cc0af4: pc, __wbg_userdevices_new: wc, __wbg_userid_new: yc, __wbg_userid_unwrap: bc, __wbg_utdtodeviceevent_new: fc, __wbg_value_17b896954e14f896: hc, __wbg_value_648dc44894c8dc95: vc, __wbg_values_81045499c3c8e670: mc, __wbg_verificationrequest_new: kc, __wbg_version_2c3ed4a311fdabdf: Sc, __wbg_versions_c01dfd4722a88165: Rc, __wbg_warn_9b968a0475b49f6b: Kc, __wbg_warn_d89f6637da554c8d: Ic, __wbindgen_array_new: Cc, __wbindgen_array_push: Ec, __wbindgen_as_number: Dc, __wbindgen_bigint_from_i64: Oc, __wbindgen_bigint_from_u64: Mc, __wbindgen_bigint_get_as_i64: Bc, __wbindgen_boolean_get: qc, __wbindgen_cb_drop: Fc, __wbindgen_closure_wrapper1160: Uc, __wbindgen_closure_wrapper2391: Vc, __wbindgen_closure_wrapper5618: zc, __wbindgen_closure_wrapper7116: Tc, __wbindgen_closure_wrapper7121: jc, __wbindgen_debug_string: xc, __wbindgen_in: Pc, __wbindgen_init_externref_table: Ac, __wbindgen_is_bigint: Nc, __wbindgen_is_function: Lc, __wbindgen_is_null: Wc, __wbindgen_is_object: Gc, __wbindgen_is_string: Jc, __wbindgen_is_undefined: Hc, __wbindgen_jsval_eq: Qc, __wbindgen_jsval_loose_eq: $c, __wbindgen_memory: Yc, __wbindgen_number_get: Zc, __wbindgen_number_new: Xc, __wbindgen_string_get: eg, __wbindgen_string_new: tg, __wbindgen_throw: rg, __wbindgen_try_into_number: ng, getVersions: Gi, start: vs }, Symbol.toStringTag, { value: "Module" })), sg = new URL("/assets/matrix_sdk_crypto_wasm_bg-dMeGppz-.wasm", import.meta.url);
en(new Proxy({}, { get() {
  throw new Error("@matrix-org/matrix-sdk-crypto-wasm was used before it was initialized. Call `initAsync` first.");
} }));
let Or = null;
async function og(i) {
  const { instance: e } = await WebAssembly.instantiateStreaming(fetch(i), { "./matrix_sdk_crypto_wasm_bg.js": ig });
  en(e.exports), e.exports.__wbindgen_start();
}
async function Hi(i = sg) {
  Or || (Or = og(i)), await Or;
}
var Ii = /[\\\"\x00-\x1F]/g, H = {};
for (var at = 0; at < 32; ++at) H[String.fromCharCode(at)] = "\\U" + ("0000" + at.toString(16)).slice(-4).toUpperCase();
H["\b"] = "\\b";
H["	"] = "\\t";
H[`
`] = "\\n";
H["\f"] = "\\f";
H["\r"] = "\\r";
H['"'] = '\\"';
H["\\"] = "\\\\";
function Qi(i) {
  return Ii.lastIndex = 0, i.replace(Ii, function(e) {
    return H[e];
  });
}
function on(i) {
  switch (typeof i) {
    case "string":
      return '"' + Qi(i) + '"';
    case "number":
      return isFinite(i) ? i : "null";
    case "boolean":
      return i;
    case "object":
      return i === null ? "null" : Array.isArray(i) ? _g(i) : ag(i);
    default:
      throw new Error("Cannot stringify: " + typeof i);
  }
}
function _g(i) {
  for (var e = "[", t = "", r = 0; r < i.length; ++r) t += e, e = ",", t += on(i[r]);
  return e != "," ? "[]" : t + "]";
}
function ag(i) {
  var e = "{", t = "", r = Object.keys(i);
  r.sort();
  for (var s = 0; s < r.length; ++s) {
    var o = r[s];
    t += e + '"' + Qi(o) + '":', e = ",", t += on(i[o]);
  }
  return e != "," ? "{}" : t + "}";
}
var cg = { stringify: on };
const gg = ls(cg);
class ug {
  constructor(e, t, r, s, o, _) {
    this.prefixedLogger = e, this.olmMachine = t, this.keyClaimManager = r, this.outgoingRequestManager = s, this.room = o, this.encryptionSettings = _, k(this, "lazyLoadedMembersResolved", false), k(this, "currentEncryptionPromise", Promise.resolve());
    var a = o.getJoinedMembers();
    this.olmMachine.updateTrackedUsers(a.map((c) => new f(c.userId))).catch((c) => this.prefixedLogger.error("Error initializing tracked users", c));
  }
  onCryptoEvent(e) {
    if (JSON.stringify(this.encryptionSettings) != JSON.stringify(e)) throw new Error("Cannot reconfigure an active RoomEncryptor");
  }
  onRoomMembership(e) {
    (e.membership == bt.Join || e.membership == bt.Invite && this.room.shouldEncryptForInvitedMembers()) && this.olmMachine.updateTrackedUsers([new f(e.userId)]).catch((t) => {
      this.prefixedLogger.error("Unable to update tracked users", t);
    });
  }
  prepareForEncryption(e, t) {
    var r = this;
    return g(function* () {
      yield r.encryptEvent(null, e, t);
    })();
  }
  encryptEvent(e, t, r) {
    var s, o = this, _ = new ut(this.prefixedLogger, e ? (s = e.getTxnId()) !== null && s !== void 0 ? s : "" : "prepareForEncryption"), a = this.currentEncryptionPromise.catch(() => {
    }).then(g(function* () {
      yield W(_, "ensureEncryptionSession", g(function* () {
        yield o.ensureEncryptionSession(_, t, r);
      })), e && (yield W(_, "encryptEventInner", g(function* () {
        yield o.encryptEventInner(_, e);
      })));
    }));
    return this.currentEncryptionPromise = a, a;
  }
  ensureEncryptionSession(e, t, r) {
    var s = this;
    return g(function* () {
      if (s.encryptionSettings.algorithm !== "m.megolm.v1.aes-sha2") throw new Error("Cannot encrypt in ".concat(s.room.roomId, " for unsupported algorithm '").concat(s.encryptionSettings.algorithm, "'"));
      e.debug("Starting encryption");
      var o = yield s.room.getEncryptionTargetMembers();
      s.lazyLoadedMembersResolved ? (e.debug("Processing outgoing requests in background"), s.outgoingRequestManager.doProcessOutgoingRequests()) : (yield W(e, "loadMembersIfNeeded: updateTrackedUsers", g(function* () {
        yield s.olmMachine.updateTrackedUsers(o.map((w) => new f(w.userId)));
      })), e.debug("Updated tracked users"), s.lazyLoadedMembersResolved = true, e.debug("Processing outgoing requests"), yield W(e, "doProcessOutgoingRequests", g(function* () {
        yield s.outgoingRequestManager.doProcessOutgoingRequests();
      }))), e.debug("Encrypting for users (shouldEncryptForInvitedMembers: ".concat(s.room.shouldEncryptForInvitedMembers(), "):"), o.map((w) => "".concat(w.userId, " (").concat(w.membership, ")")));
      var _ = o.map((w) => new f(w.userId));
      yield W(e, "ensureSessionsForUsers", g(function* () {
        yield s.keyClaimManager.ensureSessionsForUsers(e, _);
      }));
      var a = new nn();
      switch (a.historyVisibility = dg(s.room.getHistoryVisibility()), a.algorithm = ge.MegolmV1AesSha2, typeof s.encryptionSettings.rotation_period_ms == "number" && (a.rotationPeriod = BigInt(s.encryptionSettings.rotation_period_ms * 1e3)), typeof s.encryptionSettings.rotation_period_msgs == "number" && (a.rotationPeriodMessages = BigInt(s.encryptionSettings.rotation_period_msgs)), r.kind) {
        case ft.AllDevicesIsolationMode:
          {
            var c, d = (c = s.room.getBlacklistUnverifiedDevices()) !== null && c !== void 0 ? c : t;
            a.sharingStrategy = q.deviceBasedStrategy(d, r.errorOnVerifiedUserProblems);
          }
          break;
        case ft.OnlySignedDevicesIsolationMode:
          a.sharingStrategy = q.identityBasedStrategy();
          break;
      }
      yield W(e, "shareRoomKey", g(function* () {
        var w = yield s.olmMachine.shareRoomKey(new R(s.room.roomId), _, a);
        if (w) for (var h of w) yield s.outgoingRequestManager.outgoingRequestProcessor.makeOutgoingRequest(h);
      }));
    })();
  }
  forceDiscardSession() {
    var e = this;
    return g(function* () {
      var t = yield e.olmMachine.invalidateGroupSession(new R(e.room.roomId));
      t && e.prefixedLogger.info("Discarded existing group session");
    })();
  }
  encryptEventInner(e, t) {
    var r = this;
    return g(function* () {
      e.debug("Encrypting actual message content");
      var s = yield r.olmMachine.encryptRoomEvent(new R(r.room.roomId), t.getType(), JSON.stringify(t.getContent()));
      t.makeEncrypted(j.RoomMessageEncrypted, JSON.parse(s), r.olmMachine.identityKeys.curve25519.toBase64(), r.olmMachine.identityKeys.ed25519.toBase64()), e.debug("Encrypted event successfully");
    })();
  }
}
function dg(i) {
  switch (i) {
    case it.Invited:
      return Ke.Invited;
    case it.Joined:
      return Ke.Joined;
    case it.Shared:
      return Ke.Shared;
    case it.WorldReadable:
      return Ke.WorldReadable;
  }
}
var Ee = "/_matrix/client/unstable/org.matrix.msc3814.v1", Mr = "org.matrix.msc3814", lg = 7 * 24 * 60 * 60 * 1e3;
class pg extends Fe {
  constructor(e, t, r, s, o) {
    super(), this.logger = e, this.olmMachine = t, this.http = r, this.outgoingRequestProcessor = s, this.secretStorage = o, k(this, "intervalId", void 0);
  }
  cacheKey(e) {
    var t = this;
    return g(function* () {
      yield t.olmMachine.dehydratedDevices().saveDehydratedDeviceKey(e), t.emit(I.DehydrationKeyCached);
    })();
  }
  isSupported() {
    var e = this;
    return g(function* () {
      try {
        yield e.http.authedRequest(E.Get, "/dehydrated_device", void 0, void 0, { prefix: Ee });
      } catch (r) {
        var t = r;
        if (t.errcode === "M_UNRECOGNIZED") return false;
        if (t.errcode === "M_NOT_FOUND") return true;
        throw r;
      }
      return true;
    })();
  }
  start() {
    var e = arguments, t = this;
    return g(function* () {
      var r = e.length > 0 && e[0] !== void 0 ? e[0] : {};
      if (typeof r == "boolean" && (r = { createNewKey: r }), !(r.onlyIfKeyCached && !(yield t.olmMachine.dehydratedDevices().getDehydratedDeviceKey()))) {
        if (t.stop(), r.rehydrate !== false) try {
          yield t.rehydrateDeviceIfAvailable();
        } catch (s) {
          t.logger.info("dehydration: Error rehydrating device:", s), t.emit(I.RehydrationError, s.message);
        }
        r.createNewKey && (yield t.resetKey()), yield t.scheduleDeviceDehydration();
      }
    })();
  }
  isKeyStored() {
    var e = this;
    return g(function* () {
      return !!(yield e.secretStorage.isStored(Mr));
    })();
  }
  resetKey() {
    var e = this;
    return g(function* () {
      var t = A.createRandomKey();
      return yield e.secretStorage.store(Mr, t.toBase64()), yield e.cacheKey(t), t;
    })();
  }
  getKey(e) {
    var t = this;
    return g(function* () {
      var r = yield t.olmMachine.dehydratedDevices().getDehydratedDeviceKey();
      if (r) return r;
      var s = yield t.secretStorage.get(Mr);
      if (s === void 0) return e ? yield t.resetKey() : null;
      var o = qr(s);
      try {
        var _ = A.createKeyFromArray(o);
        return yield t.cacheKey(_), _;
      } finally {
        o.fill(0);
      }
    })();
  }
  rehydrateDeviceIfAvailable() {
    var e = this;
    return g(function* () {
      var t = yield e.getKey(false);
      if (!t) return false;
      var r;
      try {
        r = yield e.http.authedRequest(E.Get, "/dehydrated_device", void 0, void 0, { prefix: Ee });
      } catch (m) {
        var s = m;
        if (s.errcode === "M_NOT_FOUND" || s.errcode === "M_UNRECOGNIZED") return e.logger.info("dehydration: No dehydrated device"), false;
        throw s;
      }
      e.logger.info("dehydration: dehydrated device found"), e.emit(I.RehydrationStarted);
      var o = yield e.olmMachine.dehydratedDevices().rehydrate(t, new C(r.device_id), JSON.stringify(r.device_data));
      e.logger.info("dehydration: device rehydrated");
      for (var _ = void 0, a = 0, c = 0, d = St("/dehydrated_device/$device_id/events", { $device_id: r.device_id }); ; ) {
        var w = yield e.http.authedRequest(E.Post, d, void 0, _ ? { next_batch: _ } : {}, { prefix: Ee });
        if (w.events.length === 0) break;
        a += w.events.length, _ = w.next_batch;
        var h = yield o.receiveEvents(JSON.stringify(w.events));
        c += h.length, e.emit(I.RehydrationProgress, c, a);
      }
      return e.logger.info("dehydration: received ".concat(c, " room keys from ").concat(a, " to-device events")), e.emit(I.RehydrationCompleted), true;
    })();
  }
  createAndUploadDehydratedDevice() {
    var e = this;
    return g(function* () {
      var t = yield e.getKey(true), r = yield e.olmMachine.dehydratedDevices().create();
      e.emit(I.DehydratedDeviceCreated);
      var s = yield r.keysForUpload("Dehydrated device", t);
      yield e.outgoingRequestProcessor.makeOutgoingRequest(s), e.emit(I.DehydratedDeviceUploaded), e.logger.info("dehydration: uploaded device");
    })();
  }
  scheduleDeviceDehydration() {
    var e = this;
    return g(function* () {
      e.stop(), yield e.createAndUploadDehydratedDevice(), e.intervalId = setInterval(() => {
        e.createAndUploadDehydratedDevice().catch((t) => {
          e.emit(I.DehydratedDeviceRotationError, t.message), e.logger.error("Error creating dehydrated device:", t);
        });
      }, lg);
    })();
  }
  stop() {
    this.intervalId && (clearInterval(this.intervalId), this.intervalId = void 0);
  }
  delete() {
    var e = this;
    return g(function* () {
      e.stop();
      try {
        yield e.http.authedRequest(E.Delete, "/dehydrated_device", void 0, {}, { prefix: Ee });
      } catch (r) {
        var t = r;
        if (t.errcode === "M_UNRECOGNIZED") return;
        if (t.errcode === "M_NOT_FOUND") return;
        throw r;
      }
    })();
  }
}
function Ci(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(i, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function wg(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ci(Object(t), true).forEach(function(r) {
      k(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Ci(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
class yg {
  constructor(e, t, r) {
    this.logger = e, this.olmMachine = t, this.http = r;
  }
  makeOutgoingRequest(e, t) {
    var r = this;
    return g(function* () {
      var s;
      if (e instanceof xe) s = yield r.requestWithRetry(E.Post, "/_matrix/client/v3/keys/upload", {}, e.body);
      else if (e instanceof fe) s = yield r.requestWithRetry(E.Post, "/_matrix/client/v3/keys/query", {}, e.body);
      else if (e instanceof je) s = yield r.requestWithRetry(E.Post, "/_matrix/client/v3/keys/claim", {}, e.body);
      else if (e instanceof he) s = yield r.requestWithRetry(E.Post, "/_matrix/client/v3/keys/signatures/upload", {}, e.body);
      else if (e instanceof Te) s = yield r.requestWithRetry(E.Put, "/_matrix/client/v3/room_keys/keys", { version: e.version }, e.body);
      else if (e instanceof et) s = yield r.sendToDeviceRequest(e);
      else if (e instanceof Qe) {
        var o = "/_matrix/client/v3/rooms/".concat(encodeURIComponent(e.room_id), "/send/") + "".concat(encodeURIComponent(e.event_type), "/").concat(encodeURIComponent(e.txn_id));
        s = yield r.requestWithRetry(E.Put, o, {}, e.body);
      } else if (e instanceof tt) {
        yield r.makeRequestWithUIA(E.Post, "/_matrix/client/v3/keys/device_signing/upload", {}, e.body, t);
        return;
      } else if (e instanceof He) {
        var _ = Ee + "/dehydrated_device";
        yield r.rawJsonRequest(E.Put, _, {}, e.body);
        return;
      } else r.logger.warn("Unsupported outgoing message", Object.getPrototypeOf(e)), s = "";
      if (e.id) try {
        yield W(r.logger, "Mark Request as sent ".concat(e.type), g(function* () {
          yield r.olmMachine.markRequestAsSent(e.id, e.type, s);
        }));
      } catch (a) {
        if (a instanceof Error && (a.message === "Attempt to use a moved value" || a.message === "null pointer passed to rust")) r.logger.debug("Ignoring error '".concat(a.message, "': client is likely shutting down"));
        else throw a;
      }
      else r.logger.trace("Outgoing request type:".concat(e.type, " does not have an ID"));
    })();
  }
  sendToDeviceRequest(e) {
    var t = this;
    return g(function* () {
      var r = JSON.parse(e.body), s = [];
      for (var [o, _] of Object.entries(r.messages)) for (var [a, c] of Object.entries(_)) s.push("".concat(o, "/").concat(a, " (msgid ").concat(c[os], ")"));
      t.logger.info("Sending batch of to-device messages. type=".concat(e.event_type, " txnid=").concat(e.txn_id), s);
      var d = "/_matrix/client/v3/sendToDevice/".concat(encodeURIComponent(e.event_type), "/") + encodeURIComponent(e.txn_id);
      return yield t.requestWithRetry(E.Put, d, {}, e.body);
    })();
  }
  makeRequestWithUIA(e, t, r, s, o) {
    var _ = this;
    return g(function* () {
      if (!o) return yield _.requestWithRetry(e, t, r, s);
      var a = JSON.parse(s), c = function() {
        var w = g(function* (h) {
          var m = wg({}, a);
          h !== null && (m.auth = h);
          var K = yield _.requestWithRetry(e, t, r, JSON.stringify(m));
          return JSON.parse(K);
        });
        return function(m) {
          return w.apply(this, arguments);
        };
      }(), d = yield o(c);
      return JSON.stringify(d);
    })();
  }
  requestWithRetry(e, t, r, s) {
    var o = this;
    return g(function* () {
      for (var _ = 0; ; ) try {
        return yield o.rawJsonRequest(e, t, r, s);
      } catch (c) {
        _++;
        var a = _s(c, _, true);
        if (a < 0) throw c;
        yield ne(a);
      }
    })();
  }
  rawJsonRequest(e, t, r, s) {
    var o = this;
    return g(function* () {
      var _ = { json: false, headers: { "Content-Type": "application/json", Accept: "application/json" }, prefix: "", localTimeoutMs: 6e4 };
      return yield o.http.authedRequest(e, t, r, s, _);
    })();
  }
}
class bg {
  constructor(e, t) {
    this.olmMachine = e, this.outgoingRequestProcessor = t, k(this, "currentClaimPromise", void 0), k(this, "stopped", false), this.currentClaimPromise = Promise.resolve();
  }
  stop() {
    this.stopped = true;
  }
  ensureSessionsForUsers(e, t) {
    var r = this.currentClaimPromise.catch(() => {
    }).then(() => this.ensureSessionsForUsersInner(e, t));
    return this.currentClaimPromise = r, r;
  }
  ensureSessionsForUsersInner(e, t) {
    var r = this;
    return g(function* () {
      if (r.stopped) throw new Error("Cannot ensure Olm sessions: shutting down");
      e.info("Checking for missing Olm sessions");
      var s = yield r.olmMachine.getMissingSessions(t.map((o) => o.clone()));
      s && (e.info("Making /keys/claim request"), yield r.outgoingRequestProcessor.makeOutgoingRequest(s)), e.info("Olm sessions prepared");
    })();
  }
}
function fg(i, e) {
  var t = /* @__PURE__ */ new Map();
  for (var [r, s] of i.keys.entries()) t.set(r.toString(), s.toBase64());
  var o = dt.Unverified;
  i.isBlacklisted() ? o = dt.Blocked : i.isVerified() && (o = dt.Verified);
  var _ = /* @__PURE__ */ new Map(), a = i.signatures.get(e);
  if (a) {
    var c = /* @__PURE__ */ new Map();
    for (var [d, w] of a.entries()) w.isValid() && w.signature && c.set(d, w.signature.toBase64());
    _.set(e.toString(), c);
  }
  var h = i.algorithms, m = /* @__PURE__ */ new Set();
  return h.forEach((K) => {
    switch (K) {
      case ge.MegolmV1AesSha2:
        m.add("m.megolm.v1.aes-sha2");
        break;
      case ge.OlmV1Curve25519AesSha2:
      default:
        m.add("m.olm.v1.curve25519-aes-sha2");
        break;
    }
  }), new Ti({ deviceId: i.deviceId.toString(), userId: e.toString(), keys: t, algorithms: Array.from(m), verified: o, signatures: _, displayName: i.displayName, dehydrated: i.isDehydrated });
}
function hg(i) {
  return new Map(Object.entries(i).map((e) => {
    var [t, r] = e;
    return [t, vg(r)];
  }));
}
function vg(i) {
  var e, t = new Map(Object.entries(i.keys)), r = (e = i.unsigned) === null || e === void 0 ? void 0 : e.device_display_name, s = /* @__PURE__ */ new Map();
  if (i.signatures) for (var o in i.signatures) s.set(o, new Map(Object.entries(i.signatures[o])));
  return new Ti({ deviceId: i.device_id, userId: i.user_id, keys: t, algorithms: i.algorithms, verified: dt.Unverified, signatures: s, displayName: r });
}
class mg {
  constructor(e, t, r, s) {
    this.logger = e, this.olmMachine = t, this.outgoingRequestProcessor = r, this.secretStorage = s;
  }
  bootstrapCrossSigning(e) {
    var t = this;
    return g(function* () {
      if (e.setupNewCrossSigning) {
        yield t.resetCrossSigning(e.authUploadDeviceSigningKeys);
        return;
      }
      var r = yield t.olmMachine.crossSigningStatus(), s = yield t.secretStorage.get("m.cross_signing.master"), o = yield t.secretStorage.get("m.cross_signing.self_signing"), _ = yield t.secretStorage.get("m.cross_signing.user_signing"), a = !!(s && o && _), c = r.hasMaster && r.hasUserSigning && r.hasSelfSigning;
      if (t.logger.debug("bootstrapCrossSigning: starting", { setupNewCrossSigning: e.setupNewCrossSigning, olmDeviceHasMaster: r.hasMaster, olmDeviceHasUserSigning: r.hasUserSigning, olmDeviceHasSelfSigning: r.hasSelfSigning, privateKeysInSecretStorage: a }), c) (yield t.secretStorage.hasKey()) ? a ? t.logger.debug("bootstrapCrossSigning: Olm device has private keys and they are saved in secret storage; doing nothing") : (t.logger.debug("bootstrapCrossSigning: Olm device has private keys: exporting to secret storage"), yield t.exportCrossSigningKeysToStorage()) : t.logger.warn("bootstrapCrossSigning: Olm device has private keys, but secret storage is not yet set up; doing nothing for now.");
      else if (a) {
        t.logger.debug("bootstrapCrossSigning: Cross-signing private keys not found locally, but they are available in secret storage, reading storage and caching locally");
        var d = yield t.olmMachine.importCrossSigningKeys(s, o, _);
        if (!d.hasMaster || !d.hasSelfSigning || !d.hasUserSigning) throw new Error("importCrossSigningKeys failed to import the keys");
        var w = yield t.olmMachine.getDevice(t.olmMachine.userId, t.olmMachine.deviceId);
        try {
          var h = yield w.verify();
          yield t.outgoingRequestProcessor.makeOutgoingRequest(h);
        } finally {
          w.free();
        }
      } else t.logger.debug("bootstrapCrossSigning: Cross-signing private keys not found locally or in secret storage, creating new keys"), yield t.resetCrossSigning(e.authUploadDeviceSigningKeys);
      t.logger.debug("bootstrapCrossSigning: complete");
    })();
  }
  resetCrossSigning(e) {
    var t = this;
    return g(function* () {
      var r = yield t.olmMachine.bootstrapCrossSigning(true);
      (yield t.secretStorage.hasKey()) ? (t.logger.debug("resetCrossSigning: exporting private keys to secret storage"), yield t.exportCrossSigningKeysToStorage()) : t.logger.warn("resetCrossSigning: Secret storage is not yet set up; not exporting keys to secret storage yet."), t.logger.debug("resetCrossSigning: publishing public keys to server");
      for (var s of [r.uploadKeysRequest, r.uploadSigningKeysRequest, r.uploadSignaturesRequest]) s && (yield t.outgoingRequestProcessor.makeOutgoingRequest(s, e));
    })();
  }
  exportCrossSigningKeysToStorage() {
    var e = this;
    return g(function* () {
      var t = yield e.olmMachine.exportCrossSigningKeys();
      t != null && t.masterKey ? yield e.secretStorage.store("m.cross_signing.master", t.masterKey) : e.logger.error("Cannot export MSK to secret storage, private key unknown"), t != null && t.self_signing_key ? yield e.secretStorage.store("m.cross_signing.self_signing", t.self_signing_key) : e.logger.error("Cannot export SSK to secret storage, private key unknown"), t != null && t.userSigningKey ? yield e.secretStorage.store("m.cross_signing.user_signing", t.userSigningKey) : e.logger.error("Cannot export USK to secret storage, private key unknown");
    })();
  }
}
function Ei(i) {
  return jr.apply(this, arguments);
}
function jr() {
  return jr = g(function* (i) {
    return $i(i, ["m.cross_signing.master", "m.cross_signing.user_signing", "m.cross_signing.self_signing"]);
  }), jr.apply(this, arguments);
}
function $i(i, e) {
  return xr.apply(this, arguments);
}
function xr() {
  return xr = g(function* (i, e) {
    var t = yield i.getDefaultKeyId();
    if (!t) return false;
    for (var r of e) {
      var s = (yield i.isStored(r)) || {};
      if (!(t in s)) return false;
    }
    return true;
  }), xr.apply(this, arguments);
}
class kg extends Fe {
  constructor(e, t, r, s, o) {
    super(), this.logger = e, this.olmMachine = t, this.inner = r, this.outgoingRequestProcessor = s, this.supportedVerificationMethods = o, k(this, "reEmitter", void 0), k(this, "_accepting", false), k(this, "_cancelling", false), k(this, "_verifier", void 0), this.reEmitter = new ji(this);
    var _ = new WeakRef(this);
    r.registerChangesCallback(g(function* () {
      var a;
      return (a = _.deref()) === null || a === void 0 ? void 0 : a.onChange();
    }));
  }
  onChange() {
    var e = this.inner.getVerification();
    e instanceof ye ? this._verifier === void 0 || this._verifier instanceof Di ? this.setVerifier(new Oi(e, this, this.outgoingRequestProcessor)) : this._verifier instanceof Oi && this._verifier.replaceInner(e) : e instanceof pe && this._verifier === void 0 && this.setVerifier(new Di(e, this.outgoingRequestProcessor)), this.emit(Se.Change);
  }
  setVerifier(e) {
    this._verifier && this.reEmitter.stopReEmitting(this._verifier, [Se.Change]), this._verifier = e, this.reEmitter.reEmit(this._verifier, [Se.Change]);
  }
  get transactionId() {
    return this.inner.flowId;
  }
  get roomId() {
    var e;
    return (e = this.inner.roomId) === null || e === void 0 ? void 0 : e.toString();
  }
  get initiatedByMe() {
    return this.inner.weStarted();
  }
  get otherUserId() {
    return this.inner.otherUserId.toString();
  }
  get otherDeviceId() {
    var e;
    return (e = this.inner.otherDeviceId) === null || e === void 0 ? void 0 : e.toString();
  }
  getOtherDevice() {
    var e = this;
    return g(function* () {
      var t = e.inner.otherDeviceId;
      if (t) return yield e.olmMachine.getDevice(e.inner.otherUserId, t, 5);
    })();
  }
  get isSelfVerification() {
    return this.inner.isSelfVerification();
  }
  get phase() {
    var e = this.inner.phase();
    switch (e) {
      case X.Created:
      case X.Requested:
        return B.Requested;
      case X.Ready:
        return this._accepting ? B.Requested : B.Ready;
      case X.Transitioned:
        if (!this._verifier) throw new Error("VerificationRequest: inner phase == Transitioned but no verifier!");
        return this._verifier.verificationPhase;
      case X.Done:
        return B.Done;
      case X.Cancelled:
        return B.Cancelled;
    }
    throw new Error("Unknown verification phase ".concat(e));
  }
  get pending() {
    if (this.inner.isPassive()) return false;
    var e = this.phase;
    return e !== B.Done && e !== B.Cancelled;
  }
  get accepting() {
    return this._accepting;
  }
  get declining() {
    return this._cancelling;
  }
  get timeout() {
    return this.inner.timeRemainingMillis();
  }
  get methods() {
    throw new Error("not implemented");
  }
  get chosenMethod() {
    if (this.phase !== B.Started) return null;
    var e = this.inner.getVerification();
    return e instanceof ye ? P.Sas : e instanceof pe ? P.Reciprocate : null;
  }
  otherPartySupportsMethod(e) {
    var t = this.inner.theirSupportedMethods;
    if (t === void 0) return false;
    var r = Zi[e];
    return t.some((s) => s === r);
  }
  accept() {
    var e = this;
    return g(function* () {
      if (e.inner.phase() !== X.Requested || e._accepting) throw new Error("Cannot accept a verification request in phase ".concat(e.phase));
      e._accepting = true;
      try {
        var t = e.inner.acceptWithMethods(e.supportedVerificationMethods.map(yt));
        t && (yield e.outgoingRequestProcessor.makeOutgoingRequest(t));
      } finally {
        e._accepting = false;
      }
      e.emit(Se.Change);
    })();
  }
  cancel(e) {
    var t = this;
    return g(function* () {
      if (!t._cancelling) {
        t.logger.info("Cancelling verification request with params:", e), t._cancelling = true;
        try {
          var r = t.inner.cancel();
          r && (yield t.outgoingRequestProcessor.makeOutgoingRequest(r));
        } finally {
          t._cancelling = false;
        }
      }
    })();
  }
  beginKeyVerification(e, t) {
    throw new Error("not implemented");
  }
  startVerification(e) {
    var t = this;
    return g(function* () {
      if (e !== P.Sas) throw new Error("Unsupported verification method ".concat(e));
      if (!(yield t.getOtherDevice())) throw new Error("startVerification(): other device is unknown");
      var r = yield t.inner.startSas();
      if (r) {
        var [, s] = r;
        yield t.outgoingRequestProcessor.makeOutgoingRequest(s);
      }
      if (!t._verifier) throw new Error("Still no verifier after startSas() call");
      return t._verifier;
    })();
  }
  scanQRCode(e) {
    var t = this;
    return g(function* () {
      var r = we.fromBytes(e), s = yield t.inner.scanQrCode(r);
      if (!t._verifier) throw new Error("Still no verifier after scanQrCode() call");
      var o = s.reciprocate();
      return o && (yield t.outgoingRequestProcessor.makeOutgoingRequest(o)), t._verifier;
    })();
  }
  get verifier() {
    return this.phase === B.Started ? this._verifier : void 0;
  }
  getQRCodeBytes() {
    throw new Error("getQRCodeBytes() unsupported in Rust Crypto; use generateQRCode() instead.");
  }
  generateQRCode() {
    var e = this;
    return g(function* () {
      if (!(yield e.getOtherDevice())) throw new Error("generateQRCode(): other device is unknown");
      var t = yield e.inner.generateQrCode();
      if (t) return t.toBytes();
    })();
  }
  get cancellationCode() {
    var e, t;
    return (e = (t = this.inner.cancelInfo) === null || t === void 0 ? void 0 : t.cancelCode()) !== null && e !== void 0 ? e : null;
  }
  get cancellingUserId() {
    var e = this.inner.cancelInfo;
    if (e) return e.cancelledbyUs() ? this.olmMachine.userId.toString() : this.inner.otherUserId.toString();
  }
}
class Yi extends Fe {
  constructor(e, t) {
    super(), this.inner = e, this.outgoingRequestProcessor = t, k(this, "completionDeferred", void 0), this.completionDeferred = Promise.withResolvers();
    var r = new WeakRef(this);
    e.registerChangesCallback(g(function* () {
      var s;
      return (s = r.deref()) === null || s === void 0 ? void 0 : s.onChange();
    })), this.completionDeferred.promise.catch(() => null);
  }
  onChange() {
    if (this.inner.isDone()) this.completionDeferred.resolve(void 0);
    else if (this.inner.isCancelled()) {
      var e = this.inner.cancelInfo();
      this.completionDeferred.reject(new Error("Verification cancelled by ".concat(e.cancelledbyUs() ? "us" : "them", " with code ").concat(e.cancelCode(), ": ").concat(e.reason())));
    }
    this.emit(Se.Change);
  }
  get hasBeenCancelled() {
    return this.inner.isCancelled();
  }
  get userId() {
    return this.inner.otherUserId.toString();
  }
  cancel(e) {
    var t = this.inner.cancel();
    t && this.outgoingRequestProcessor.makeOutgoingRequest(t);
  }
  getShowSasCallbacks() {
    return null;
  }
  getReciprocateQrCodeCallbacks() {
    return null;
  }
}
class Di extends Yi {
  constructor(e, t) {
    super(e, t), k(this, "callbacks", null);
  }
  onChange() {
    this.callbacks === null && this.inner.hasBeenScanned() && (this.callbacks = { confirm: () => {
      this.confirmScanning();
    }, cancel: () => this.cancel() }), super.onChange();
  }
  verify() {
    var e = this;
    return g(function* () {
      e.callbacks !== null && e.emit(Pi.ShowReciprocateQr, e.callbacks), yield e.completionDeferred.promise;
    })();
  }
  get verificationPhase() {
    switch (this.inner.state()) {
      case re.Created:
        return B.Ready;
      case re.Scanned:
        return B.Started;
      case re.Confirmed:
        return B.Started;
      case re.Reciprocated:
        return B.Started;
      case re.Done:
        return B.Done;
      case re.Cancelled:
        return B.Cancelled;
      default:
        throw new Error("Unknown qr code state ".concat(this.inner.state()));
    }
  }
  getReciprocateQrCodeCallbacks() {
    return this.callbacks;
  }
  confirmScanning() {
    var e = this;
    return g(function* () {
      var t = e.inner.confirmScanning();
      t && (yield e.outgoingRequestProcessor.makeOutgoingRequest(t));
    })();
  }
}
class Oi extends Yi {
  constructor(e, t, r) {
    super(e, r), k(this, "callbacks", null);
  }
  verify() {
    var e = this;
    return g(function* () {
      yield e.sendAccept(), yield e.completionDeferred.promise;
    })();
  }
  sendAccept() {
    var e = this;
    return g(function* () {
      var t = e.inner.accept();
      t && (yield e.outgoingRequestProcessor.makeOutgoingRequest(t));
    })();
  }
  onChange() {
    var e = this;
    if (super.onChange(), this.callbacks === null) {
      var t = this.inner.emoji(), r = this.inner.decimals();
      if (t === void 0 && r === void 0) return;
      var s = {};
      t && (s.emoji = t.map((o) => [o.symbol, o.description])), r && (s.decimal = [r[0], r[1], r[2]]), this.callbacks = { sas: s, confirm: function() {
        var o = g(function* () {
          var a = yield e.inner.confirm();
          for (var c of a) yield e.outgoingRequestProcessor.makeOutgoingRequest(c);
        });
        function _() {
          return o.apply(this, arguments);
        }
        return _;
      }(), mismatch: () => {
        var o = this.inner.cancelWithCode("m.mismatched_sas");
        o && this.outgoingRequestProcessor.makeOutgoingRequest(o);
      }, cancel: () => {
        var o = this.inner.cancelWithCode("m.user");
        o && this.outgoingRequestProcessor.makeOutgoingRequest(o);
      } }, this.emit(Pi.ShowSas, this.callbacks);
    }
  }
  get verificationPhase() {
    return B.Started;
  }
  getShowSasCallbacks() {
    return this.callbacks;
  }
  replaceInner(e) {
    if (this.inner != e) {
      this.inner = e;
      var t = new WeakRef(this);
      e.registerChangesCallback(g(function* () {
        var r;
        return (r = t.deref()) === null || r === void 0 ? void 0 : r.onChange();
      })), this.sendAccept(), this.onChange();
    }
  }
}
var Zi = { [P.Sas]: Ce.SasV1, [P.ScanQrCode]: Ce.QrCodeScanV1, [P.ShowQrCode]: Ce.QrCodeShowV1, [P.Reciprocate]: Ce.ReciprocateV1 };
function yt(i) {
  var e = Zi[i];
  if (e === void 0) throw new Error("Unknown verification method ".concat(i));
  return e;
}
function Sg(i) {
  switch (i.getType()) {
    case j.KeyVerificationCancel:
    case j.KeyVerificationDone:
    case j.KeyVerificationMac:
    case j.KeyVerificationStart:
    case j.KeyVerificationKey:
    case j.KeyVerificationReady:
    case j.KeyVerificationAccept:
      return true;
    case j.RoomMessage:
      return i.getContent().msgtype === xi.KeyVerificationRequest;
    default:
      return false;
  }
}
class Rg extends Fe {
  constructor(e, t, r, s) {
    super(), this.logger = e, this.olmMachine = t, this.http = r, this.outgoingRequestProcessor = s, k(this, "checkedForBackup", false), k(this, "serverBackupInfo", void 0), k(this, "activeBackupVersion", null), k(this, "stopped", false), k(this, "backupKeysLoopRunning", false), k(this, "keyBackupCheckInProgress", null);
  }
  stop() {
    this.stopped = true;
  }
  getActiveBackupVersion() {
    var e = this;
    return g(function* () {
      return (yield e.olmMachine.isBackupEnabled()) ? e.activeBackupVersion : null;
    })();
  }
  getServerBackupInfo() {
    var e = this;
    return g(function* () {
      return yield e.checkKeyBackupAndEnable(false), e.serverBackupInfo;
    })();
  }
  isKeyBackupTrusted(e) {
    var t = this;
    return g(function* () {
      var r = yield t.olmMachine.verifyBackup(e), s = yield t.olmMachine.getBackupKeys(), o = s == null ? void 0 : s.decryptionKey, _ = !!o && t.backupInfoMatchesBackupDecryptionKey(e, o);
      return { matchesDecryptionKey: _, trusted: r.trusted() };
    })();
  }
  checkKeyBackupAndEnable(e) {
    return !e && this.checkedForBackup ? Promise.resolve(null) : (this.keyBackupCheckInProgress || (this.keyBackupCheckInProgress = this.doCheckKeyBackup().finally(() => {
      this.keyBackupCheckInProgress = null;
    })), this.keyBackupCheckInProgress);
  }
  handleBackupSecretReceived(e) {
    var t = this;
    return g(function* () {
      var r, s;
      try {
        s = yield t.requestKeyBackupVersion();
      } catch (a) {
        return t.logger.warn("handleBackupSecretReceived: Error checking for latest key backup", a), false;
      }
      if (!((r = s) !== null && r !== void 0 && r.version)) return t.logger.warn("handleBackupSecretReceived: Received a backup decryption key, but there is no trusted server-side key backup"), false;
      try {
        var o = V.fromBase64(e), _ = t.backupInfoMatchesBackupDecryptionKey(s, o);
        return _ ? (t.logger.info("handleBackupSecretReceived: A valid backup decryption key has been received and stored in cache."), yield t.saveBackupDecryptionKey(o, s.version), true) : (t.logger.warn("handleBackupSecretReceived: Private decryption key does not match the public key of the current remote backup."), false);
      } catch (a) {
        t.logger.warn("handleBackupSecretReceived: Invalid backup decryption key", a);
      }
      return false;
    })();
  }
  saveBackupDecryptionKey(e, t) {
    var r = this;
    return g(function* () {
      yield r.olmMachine.saveBackupDecryptionKey(e, t), r.emit(I.KeyBackupDecryptionKeyCached, t);
    })();
  }
  importRoomKeys(e, t) {
    var r = this;
    return g(function* () {
      yield r.importRoomKeysAsJson(JSON.stringify(e), t);
    })();
  }
  importRoomKeysAsJson(e, t) {
    var r = this;
    return g(function* () {
      yield r.olmMachine.importExportedRoomKeys(e, (s, o) => {
        var _, a = { total: Number(o), successes: Number(s), stage: Re.LoadKeys, failures: 0 };
        t == null || (_ = t.progressCallback) === null || _ === void 0 || _.call(t, a);
      });
    })();
  }
  importBackedUpRoomKeys(e, t, r) {
    var s = this;
    return g(function* () {
      var o = /* @__PURE__ */ new Map();
      for (var _ of e) {
        var a = new R(_.room_id);
        o.has(a) || o.set(a, /* @__PURE__ */ new Map()), o.get(a).set(_.session_id, _);
      }
      yield s.olmMachine.importBackedUpRoomKeys(o, (c, d, w) => {
        var h, m = { total: Number(d), successes: Number(c), stage: Re.LoadKeys, failures: Number(w) };
        r == null || (h = r.progressCallback) === null || h === void 0 || h.call(r, m);
      }, t);
    })();
  }
  doCheckKeyBackup() {
    var e = this;
    return g(function* () {
      e.logger.debug("Checking key backup status...");
      var t;
      try {
        t = yield e.requestKeyBackupVersion();
      } catch (o) {
        return e.logger.warn("Error checking for active key backup", o), e.serverBackupInfo = void 0, null;
      }
      e.checkedForBackup = true, t && !t.version && (e.logger.warn("active backup lacks a useful 'version'; ignoring it"), t = void 0), e.serverBackupInfo = t;
      var r = yield e.getActiveBackupVersion();
      if (!t) return r !== null ? (e.logger.debug("No key backup present on server: disabling key backup"), yield e.disableKeyBackup()) : e.logger.debug("No key backup present on server: not enabling key backup"), null;
      var s = yield e.isKeyBackupTrusted(t);
      return !s.matchesDecryptionKey && !s.trusted ? r !== null ? (e.logger.debug("Key backup present on server but not trusted: disabling key backup"), yield e.disableKeyBackup()) : e.logger.debug("Key backup present on server but not trusted: not enabling key backup") : r === null ? (e.logger.debug("Found usable key backup v".concat(t.version, ": enabling key backups")), yield e.enableKeyBackup(t)) : r !== t.version ? (e.logger.debug("On backup version ".concat(r, " but found version ").concat(t.version, ": switching.")), yield e.disableKeyBackup(), yield e.enableKeyBackup(t)) : e.logger.debug("Backup version ".concat(t.version, " still current")), { backupInfo: t, trustInfo: s };
    })();
  }
  enableKeyBackup(e) {
    var t = this;
    return g(function* () {
      yield t.olmMachine.enableBackupV1(e.auth_data.public_key, e.version), t.activeBackupVersion = e.version, t.emit(I.KeyBackupStatus, true), t.backupKeysLoop();
    })();
  }
  maybeUploadKey() {
    var e = this;
    return g(function* () {
      e.activeBackupVersion != null && e.backupKeysLoop();
    })();
  }
  disableKeyBackup() {
    var e = this;
    return g(function* () {
      yield e.olmMachine.disableBackup(), e.activeBackupVersion = null, e.emit(I.KeyBackupStatus, false);
    })();
  }
  backupKeysLoop() {
    var e = arguments, t = this;
    return g(function* () {
      var r = e.length > 0 && e[0] !== void 0 ? e[0] : 1e4;
      if (t.backupKeysLoopRunning) {
        t.logger.debug("Backup loop already running");
        return;
      }
      t.backupKeysLoopRunning = true, t.logger.debug("Backup: Starting keys upload loop for backup version:".concat(t.activeBackupVersion, "."));
      var s = Math.random() * r;
      yield ne(s);
      try {
        for (var o = 0, _ = null, a = true; !t.stopped; ) {
          var c = void 0;
          try {
            c = yield W(t.logger, "BackupRoomKeys: Get keys to backup from rust crypto-sdk", g(function* () {
              return yield t.olmMachine.backupRoomKeys();
            }));
          } catch (K) {
            t.logger.error("Backup: Failed to get keys to backup from rust crypto-sdk", K);
          }
          if (!c || t.stopped || !t.activeBackupVersion) {
            t.logger.debug("Backup: Ending loop for version ".concat(t.activeBackupVersion, ".")), c || t.emit(I.KeyBackupSessionsRemaining, 0);
            return;
          }
          try {
            if (yield t.outgoingRequestProcessor.makeOutgoingRequest(c), o = 0, t.stopped) break;
            if (!a && _ === null) try {
              var d = yield t.olmMachine.roomKeyCounts();
              _ = d.total - d.backedUp;
            } catch (K) {
              t.logger.error("Backup: Failed to get key counts from rust crypto-sdk", K);
            }
            if (_ !== null) {
              t.emit(I.KeyBackupSessionsRemaining, _);
              var w = t.keysCountInBatch(c);
              _ = Math.max(_ - w, 0);
            }
          } catch (K) {
            if (o++, t.logger.error("Backup: Error processing backup request for rust crypto-sdk", K), K instanceof Ai) {
              var h = K.data.errcode;
              if (h == "M_NOT_FOUND" || h == "M_WRONG_ROOM_KEYS_VERSION") {
                t.logger.debug("Backup: Failed to upload keys to current vesion: ".concat(h, "."));
                try {
                  yield t.disableKeyBackup();
                } catch (F) {
                  t.logger.error("Backup: An error occurred while disabling key backup:", F);
                }
                t.emit(I.KeyBackupFailed, K.data.errcode), t.backupKeysLoopRunning = false, t.checkKeyBackupAndEnable(true);
                return;
              } else if (K.isRateLimitError()) try {
                var m = K.getRetryAfterMs();
                if (m && m > 0) {
                  yield ne(m);
                  continue;
                }
              } catch (F) {
                t.logger.warn("Backup: An error occurred while retrieving a rate-limit retry delay", F);
              }
            }
            yield ne(1e3 * Math.pow(2, Math.min(o - 1, 4)));
          }
          a = false;
        }
      } finally {
        t.backupKeysLoopRunning = false;
      }
    })();
  }
  keysCountInBatch(e) {
    var t = JSON.parse(e.body);
    return Mi(t);
  }
  requestKeyBackupVersion(e) {
    var t = this;
    return g(function* () {
      return yield Xi(t.http, e);
    })();
  }
  setupKeyBackup(e) {
    var t = this;
    return g(function* () {
      yield t.deleteAllKeyBackupVersions();
      var r = V.createRandomKey(), s = r.megolmV1PublicKey, o = { public_key: s.publicKeyBase64 };
      yield e(o);
      var _ = yield t.http.authedRequest(E.Post, "/room_keys/version", void 0, { algorithm: s.algorithm, auth_data: o }, { prefix: De.V3 });
      return yield t.saveBackupDecryptionKey(r, _.version), { version: _.version, algorithm: s.algorithm, authData: o, decryptionKey: r };
    })();
  }
  deleteAllKeyBackupVersions() {
    var e = this;
    return g(function* () {
      for (var t, r, s = (t = (r = yield e.requestKeyBackupVersion()) === null || r === void 0 ? void 0 : r.version) !== null && t !== void 0 ? t : null; s != null; ) {
        var o, _;
        yield e.deleteKeyBackupVersion(s), s = (o = (_ = yield e.requestKeyBackupVersion()) === null || _ === void 0 ? void 0 : _.version) !== null && o !== void 0 ? o : null;
      }
    })();
  }
  deleteKeyBackupVersion(e) {
    var t = this;
    return g(function* () {
      t.logger.debug("deleteKeyBackupVersion v:".concat(e));
      var r = St("/room_keys/version/$version", { $version: e });
      yield t.http.authedRequest(E.Delete, r, void 0, void 0, { prefix: De.V3 }), t.activeBackupVersion === e && (t.serverBackupInfo = null, yield t.disableKeyBackup());
    })();
  }
  createBackupDecryptor(e) {
    return new Kg(this.logger, e);
  }
  restoreKeyBackup(e, t, r) {
    var s = this;
    return g(function* () {
      var o = yield s.downloadKeyBackup(e);
      return s.importKeyBackup(o, e, t, r);
    })();
  }
  downloadKeyBackup(e) {
    return this.http.authedRequest(E.Get, "/room_keys/keys", { version: e }, void 0, { prefix: De.V3 });
  }
  importKeyBackup(e, t, r, s) {
    var o = this;
    return g(function* () {
      var _, a = 200, c = Mi(e), d = 0, w = 0;
      s == null || (_ = s.progressCallback) === null || _ === void 0 || _.call(s, { total: c, successes: d, stage: Re.LoadKeys, failures: w });
      var h = function() {
        var rs = g(function* (ir) {
          var rt, nt = [], ns = function* (an) {
            var ss = yield r.decryptSessions(ir.get(an));
            ss.forEach((cn) => {
              cn.room_id = an, nt.push(cn);
            });
          };
          for (var is of ir.keys()) yield* ns(is);
          try {
            yield o.importBackedUpRoomKeys(nt, t), d += nt.length;
          } catch (_n) {
            w += nt.length, o.logger.error("Error importing keys from backup", _n);
          }
          s == null || (rt = s.progressCallback) === null || rt === void 0 || rt.call(s, { total: c, successes: d, stage: Re.LoadKeys, failures: w });
        });
        return function(rt) {
          return rs.apply(this, arguments);
        };
      }(), m = 0, K = /* @__PURE__ */ new Map();
      for (var [F, Q] of Object.entries(e.rooms)) if (Q.sessions) {
        K.set(F, {});
        for (var [me, es] of Object.entries(Q.sessions)) {
          var ts = K.get(F);
          ts[me] = es, m += 1, m >= a && (yield h(K), K = /* @__PURE__ */ new Map(), K.set(F, {}), m = 0);
        }
      }
      return m > 0 && (yield h(K)), { total: c, imported: d };
    })();
  }
  backupInfoMatchesBackupDecryptionKey(e, t) {
    var r;
    return e.algorithm !== "m.megolm_backup.v1.curve25519-aes-sha2" ? (this.logger.warn("backupMatchesPrivateKey: Unsupported backup algorithm", e.algorithm), false) : ((r = e.auth_data) === null || r === void 0 ? void 0 : r.public_key) === t.megolmV1PublicKey.publicKeyBase64;
  }
}
class Kg {
  constructor(e, t) {
    this.logger = e, k(this, "decryptionKey", void 0), k(this, "sourceTrusted", void 0), this.decryptionKey = t, this.sourceTrusted = false;
  }
  decryptSessions(e) {
    var t = this;
    return g(function* () {
      var r = [];
      for (var [s, o] of Object.entries(e)) try {
        var _ = JSON.parse(t.decryptionKey.decryptV1(o.session_data.ephemeral, o.session_data.mac, o.session_data.ciphertext));
        _.session_id = s, r.push(_);
      } catch (a) {
        t.logger.debug("Failed to decrypt megolm session from backup", a, o);
      }
      return r;
    })();
  }
  free() {
    this.decryptionKey.free();
  }
}
function Xi(i, e) {
  return Pr.apply(this, arguments);
}
function Pr() {
  return Pr = g(function* (i, e) {
    try {
      var t = e ? St("/room_keys/version/$version", { $version: e }) : "/room_keys/version";
      return yield i.authedRequest(E.Get, t, void 0, void 0, { prefix: De.V3 });
    } catch (r) {
      if (r.errcode === "M_NOT_FOUND") return null;
      throw r;
    }
  }), Pr.apply(this, arguments);
}
function Br(i, e) {
  var t = e.auth_data;
  return t.public_key === i.megolmV1PublicKey.publicKeyBase64;
}
function Mi(i) {
  var e = 0;
  for (var { sessions: t } of Object.values(i.rooms)) e += Object.keys(t).length;
  return e;
}
class Ig {
  constructor(e, t, r) {
    this.logger = e, this.olmMachine = t, this.outgoingRequestProcessor = r, k(this, "stopped", false), k(this, "outgoingRequestLoopRunning", false), k(this, "nextLoopDeferred", void 0);
  }
  stop() {
    this.stopped = true;
  }
  doProcessOutgoingRequests() {
    this.nextLoopDeferred || (this.nextLoopDeferred = Promise.withResolvers());
    var e = this.nextLoopDeferred.promise;
    return this.outgoingRequestLoopRunning || this.outgoingRequestLoop().catch((t) => {
      this.logger.error("Uncaught error in outgoing request loop", t);
    }), e;
  }
  outgoingRequestLoop() {
    var e = this;
    return g(function* () {
      if (e.outgoingRequestLoopRunning) throw new Error("Cannot run two outgoing request loops");
      e.outgoingRequestLoopRunning = true;
      try {
        for (; !e.stopped && e.nextLoopDeferred; ) {
          var t = e.nextLoopDeferred;
          e.nextLoopDeferred = void 0, yield e.processOutgoingRequests().then(t.resolve, t.reject);
        }
      } finally {
        e.outgoingRequestLoopRunning = false;
      }
      e.nextLoopDeferred && e.nextLoopDeferred.reject(new Error("OutgoingRequestsManager was stopped"));
    })();
  }
  processOutgoingRequests() {
    var e = this;
    return g(function* () {
      if (!e.stopped) {
        var t = yield e.olmMachine.outgoingRequests(), r = function* (a) {
          if (e.stopped) return { v: void 0 };
          try {
            yield W(e.logger, "Make outgoing request ".concat(a.type), g(function* () {
              yield e.outgoingRequestProcessor.makeOutgoingRequest(a);
            }));
          } catch (c) {
            e.logger.error("Failed to process outgoing request ".concat(a.type, ": ").concat(c));
          }
        }, s;
        for (var o of t) if (s = yield* r(o), s) return s.v;
      }
    })();
  }
}
var ct = 5e3, ee = function(i) {
  return i.MISSING_DECRYPTION_KEY = "MISSING_DECRYPTION_KEY", i.NETWORK_ERROR = "NETWORK_ERROR", i.STOPPED = "STOPPED", i;
}(ee || {});
class ke extends Error {
  constructor(e) {
    super("Failed to get key from backup: ".concat(e)), this.code = e, this.name = "KeyDownloadError";
  }
}
class Bi extends Error {
  constructor(e) {
    super("Failed to get key from backup: rate limited"), this.retryMillis = e, this.name = "KeyDownloadRateLimitError";
  }
}
class Cg {
  constructor(e, t, r, s) {
    this.olmMachine = t, this.http = r, this.backupManager = s, k(this, "stopped", false), k(this, "configuration", null), k(this, "sessionLastCheckAttemptedTime", /* @__PURE__ */ new Map()), k(this, "logger", void 0), k(this, "downloadLoopRunning", false), k(this, "queuedRequests", []), k(this, "hasConfigurationProblem", false), k(this, "currentBackupVersionCheck", null), k(this, "onBackupStatusChanged", () => {
      this.hasConfigurationProblem = false, this.configuration = null, this.getOrCreateBackupConfiguration().then((o) => {
        o && this.downloadKeysLoop();
      });
    }), this.logger = e.getChild("[PerSessionKeyBackupDownloader]"), s.on(I.KeyBackupStatus, this.onBackupStatusChanged), s.on(I.KeyBackupFailed, this.onBackupStatusChanged), s.on(I.KeyBackupDecryptionKeyCached, this.onBackupStatusChanged);
  }
  isKeyBackupDownloadConfigured() {
    return this.configuration !== null;
  }
  getServerBackupInfo() {
    var e = this;
    return g(function* () {
      return yield e.backupManager.getServerBackupInfo();
    })();
  }
  onDecryptionKeyMissingError(e, t) {
    if (this.isAlreadyInQueue(e, t)) {
      this.logger.trace("Not checking key backup for session ".concat(t, " as it is already queued"));
      return;
    }
    if (this.wasRequestedRecently(t)) {
      this.logger.trace("Not checking key backup for session ".concat(t, " as it was already requested recently"));
      return;
    }
    this.queuedRequests.push({ roomId: e, megolmSessionId: t }), this.downloadKeysLoop();
  }
  stop() {
    this.stopped = true, this.backupManager.off(I.KeyBackupStatus, this.onBackupStatusChanged), this.backupManager.off(I.KeyBackupFailed, this.onBackupStatusChanged), this.backupManager.off(I.KeyBackupDecryptionKeyCached, this.onBackupStatusChanged);
  }
  isAlreadyInQueue(e, t) {
    return this.queuedRequests.some((r) => r.roomId == e && r.megolmSessionId == t);
  }
  markAsNotFoundInBackup(e) {
    var t = Date.now();
    this.sessionLastCheckAttemptedTime.set(e, t), this.sessionLastCheckAttemptedTime.size > 100 && (this.sessionLastCheckAttemptedTime = new Map(Array.from(this.sessionLastCheckAttemptedTime).filter((r, s) => Math.max(t - s, 0) < ct)));
  }
  wasRequestedRecently(e) {
    var t = this.sessionLastCheckAttemptedTime.get(e);
    return t ? Math.max(Date.now() - t, 0) < ct : false;
  }
  getBackupDecryptionKey() {
    var e = this;
    return g(function* () {
      try {
        return yield e.olmMachine.getBackupKeys();
      } catch {
        return null;
      }
    })();
  }
  requestRoomKeyFromBackup(e, t, r) {
    var s = this;
    return g(function* () {
      var o = St("/room_keys/keys/$roomId/$sessionId", { $roomId: t, $sessionId: r });
      return yield s.http.authedRequest(E.Get, o, { version: e }, void 0, { prefix: De.V3 });
    })();
  }
  downloadKeysLoop() {
    var e = this;
    return g(function* () {
      if (!e.downloadLoopRunning && !e.hasConfigurationProblem) {
        e.downloadLoopRunning = true;
        try {
          for (; e.queuedRequests.length > 0; ) {
            var t = e.queuedRequests[0];
            try {
              var r = yield e.getOrCreateBackupConfiguration();
              if (!r) {
                e.downloadLoopRunning = false;
                return;
              }
              var s = yield e.queryKeyBackup(t.roomId, t.megolmSessionId, r);
              if (e.stopped) return;
              try {
                yield e.decryptAndImport(t, s, r);
              } catch (o) {
                e.logger.error("Error while decrypting and importing key backup for session ".concat(t.megolmSessionId), o);
              }
              e.queuedRequests.shift();
            } catch (o) {
              if (o instanceof ke) switch (o.code) {
                case ee.MISSING_DECRYPTION_KEY:
                  e.markAsNotFoundInBackup(t.megolmSessionId), e.queuedRequests.shift();
                  break;
                case ee.NETWORK_ERROR:
                  yield ne(ct);
                  break;
                case ee.STOPPED:
                  e.downloadLoopRunning = false;
                  return;
              }
              else o instanceof Bi && (yield ne(o.retryMillis));
            }
          }
        } finally {
          e.downloadLoopRunning = false;
        }
      }
    })();
  }
  queryKeyBackup(e, t, r) {
    var s = this;
    return g(function* () {
      if (s.logger.debug("Checking key backup for session ".concat(t)), s.stopped) throw new ke(ee.STOPPED);
      try {
        var o = yield s.requestRoomKeyFromBackup(r.backupVersion, e, t);
        return s.logger.debug("Got key from backup for sessionId:".concat(t)), o;
      } catch (d) {
        if (s.stopped) throw new ke(ee.STOPPED);
        if (s.logger.info("No luck requesting key backup for session ".concat(t, ": ").concat(d)), d instanceof Ai) {
          var _ = d.data.errcode;
          if (_ == "M_NOT_FOUND") throw new ke(ee.MISSING_DECRYPTION_KEY);
          if (d.isRateLimitError()) {
            var a;
            try {
              var c;
              a = (c = d.getRetryAfterMs()) !== null && c !== void 0 ? c : void 0;
            } catch (w) {
              s.logger.warn("Error while retrieving a rate-limit retry delay", w);
            }
            throw a && a > 0 && s.logger.info("Rate limited by server, waiting ".concat(a, "ms")), new Bi(a ?? ct);
          }
        }
        throw new ke(ee.NETWORK_ERROR);
      }
    })();
  }
  decryptAndImport(e, t, r) {
    var s = this;
    return g(function* () {
      var o = { [e.megolmSessionId]: t }, _ = yield r.decryptor.decryptSessions(o);
      for (var a of _) a.room_id = e.roomId;
      yield s.backupManager.importBackedUpRoomKeys(_, r.backupVersion);
    })();
  }
  getOrCreateBackupConfiguration() {
    var e = this;
    return g(function* () {
      if (e.configuration) return e.configuration;
      if (e.hasConfigurationProblem) return null;
      if (e.currentBackupVersionCheck != null) return e.logger.debug("Already checking server version, use current promise"), yield e.currentBackupVersionCheck;
      e.currentBackupVersionCheck = e.internalCheckFromServer();
      try {
        return yield e.currentBackupVersionCheck;
      } finally {
        e.currentBackupVersionCheck = null;
      }
    })();
  }
  internalCheckFromServer() {
    var e = this;
    return g(function* () {
      var t, r, s, o = null;
      try {
        o = yield e.backupManager.getServerBackupInfo();
      } catch (h) {
        return e.logger.debug("Backup: error while checking server version: ".concat(h)), e.hasConfigurationProblem = true, null;
      }
      if (e.logger.debug("Got current backup version from server: ".concat((t = o) === null || t === void 0 ? void 0 : t.version)), ((r = o) === null || r === void 0 ? void 0 : r.algorithm) != "m.megolm_backup.v1.curve25519-aes-sha2") {
        var _;
        return e.logger.info("Unsupported algorithm ".concat((_ = o) === null || _ === void 0 ? void 0 : _.algorithm)), e.hasConfigurationProblem = true, null;
      }
      if (!((s = o) !== null && s !== void 0 && s.version)) return e.logger.info("No current key backup"), e.hasConfigurationProblem = true, null;
      var a = yield e.backupManager.getActiveBackupVersion();
      if (a == null || o.version != a) return e.logger.info("The current backup version on the server (".concat(o.version, ") is not trusted. Version we are currently backing up to: ").concat(a)), e.hasConfigurationProblem = true, null;
      var c = yield e.getBackupDecryptionKey();
      if (!(c != null && c.decryptionKey)) return e.logger.debug("Not checking key backup for session (no decryption key)"), e.hasConfigurationProblem = true, null;
      if (a != c.backupVersion) return e.logger.debug("Version for which we have a decryption key (".concat(c.backupVersion, ") doesn't match the version we are backing up to (").concat(a, ")")), e.hasConfigurationProblem = true, null;
      var d = o.auth_data;
      if (d.public_key != c.decryptionKey.megolmV1PublicKey.publicKeyBase64) return e.logger.debug("Key backup on server does not match our decryption key"), e.hasConfigurationProblem = true, null;
      var w = e.backupManager.createBackupDecryptor(c.decryptionKey);
      return e.hasConfigurationProblem = false, e.configuration = { decryptor: w, backupVersion: a }, e.configuration;
    })();
  }
}
function Eg(i, e) {
  if (!i.private_key_salt || !i.private_key_iterations) throw new Error("Salt and/or iterations not found: this backup cannot be restored with a passphrase");
  return Ni(e, i.private_key_salt, i.private_key_iterations, i.private_key_bits);
}
function qi(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(i, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Fi(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qi(Object(t), true).forEach(function(r) {
      k(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : qi(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
var Ui = [P.Sas, P.ScanQrCode, P.ShowQrCode, P.Reciprocate];
class Dg extends Fe {
  constructor(e, t, r, s, o, _, a) {
    super(), this.logger = e, this.olmMachine = t, this.http = r, this.userId = s, this.secretStorage = _, this.cryptoCallbacks = a, k(this, "RECOVERY_KEY_DERIVATION_ITERATIONS", 5e5), k(this, "_trustCrossSignedDevices", true), k(this, "deviceIsolationMode", new as(false)), k(this, "stopped", false), k(this, "roomEncryptors", {}), k(this, "eventDecryptor", void 0), k(this, "keyClaimManager", void 0), k(this, "outgoingRequestProcessor", void 0), k(this, "crossSigningIdentity", void 0), k(this, "backupManager", void 0), k(this, "outgoingRequestsManager", void 0), k(this, "perSessionBackupDownloader", void 0), k(this, "dehydratedDeviceManager", void 0), k(this, "reemitter", new ji(this)), k(this, "globalBlacklistUnverifiedDevices", false), k(this, "_supportedVerificationMethods", Ui), this.outgoingRequestProcessor = new yg(e, t, r), this.outgoingRequestsManager = new Ig(this.logger, t, this.outgoingRequestProcessor), this.keyClaimManager = new bg(t, this.outgoingRequestProcessor), this.backupManager = new Rg(e, t, r, this.outgoingRequestProcessor), this.perSessionBackupDownloader = new Cg(this.logger, this.olmMachine, this.http, this.backupManager), this.dehydratedDeviceManager = new pg(this.logger, t, r, this.outgoingRequestProcessor, _), this.eventDecryptor = new Og(this.logger, t, this.perSessionBackupDownloader), this.reemitter.reEmit(this.backupManager, [I.KeyBackupStatus, I.KeyBackupSessionsRemaining, I.KeyBackupFailed, I.KeyBackupDecryptionKeyCached]), this.reemitter.reEmit(this.dehydratedDeviceManager, [I.DehydratedDeviceCreated, I.DehydratedDeviceUploaded, I.RehydrationStarted, I.RehydrationProgress, I.RehydrationCompleted, I.RehydrationError, I.DehydrationKeyCached, I.DehydratedDeviceRotationError]), this.crossSigningIdentity = new mg(e, t, this.outgoingRequestProcessor, _), this.checkKeyBackupAndEnable();
  }
  getOlmMachineOrThrow() {
    if (this.stopped) throw new cs();
    return this.olmMachine;
  }
  set globalErrorOnUnknownDevices(e) {
  }
  get globalErrorOnUnknownDevices() {
    return false;
  }
  stop() {
    this.stopped || (this.stopped = true, this.keyClaimManager.stop(), this.backupManager.stop(), this.outgoingRequestsManager.stop(), this.perSessionBackupDownloader.stop(), this.dehydratedDeviceManager.stop(), this.olmMachine.close());
  }
  encryptEvent(e, t) {
    var r = this;
    return g(function* () {
      var s = e.getRoomId(), o = r.roomEncryptors[s];
      if (!o) throw new Error("Cannot encrypt event in unconfigured room ".concat(s));
      yield o.encryptEvent(e, r.globalBlacklistUnverifiedDevices, r.deviceIsolationMode);
    })();
  }
  decryptEvent(e) {
    var t = this;
    return g(function* () {
      var r = e.getRoomId();
      if (!r) throw new Error("to-device event was not decrypted in preprocessToDeviceMessages");
      return yield t.eventDecryptor.attemptEventDecryption(e, t.deviceIsolationMode);
    })();
  }
  getBackupDecryptor(e, t) {
    var r = this;
    return g(function* () {
      if (!(t instanceof Uint8Array)) throw new Error("getBackupDecryptor: expects Uint8Array");
      if (e.algorithm != "m.megolm_backup.v1.curve25519-aes-sha2") throw new Error("getBackupDecryptor: Unsupported algorithm ".concat(e.algorithm));
      var s = V.fromBase64(Fr(t));
      if (!Br(s, e)) throw new Error("getBackupDecryptor: key backup on server does not match the decryption key");
      return r.backupManager.createBackupDecryptor(s);
    })();
  }
  importBackedUpRoomKeys(e, t, r) {
    var s = this;
    return g(function* () {
      return yield s.backupManager.importBackedUpRoomKeys(e, t, r);
    })();
  }
  maybeAcceptKeyBundle(e, t) {
    var r = this;
    return g(function* () {
      var s = new ut(r.logger, "maybeAcceptKeyBundle(".concat(e, ", ").concat(t, ")")), o = yield r.olmMachine.getReceivedRoomKeyBundleData(new R(e), new f(t));
      if (!o) {
        s.info("No key bundle found for user");
        return;
      }
      s.info("Fetching key bundle ".concat(o.url));
      var _ = gs(r.http.opts.baseUrl, o.url, void 0, void 0, void 0, false, true, true), a;
      try {
        var c = new URL(_);
        a = yield r.http.authedRequest(E.Get, c.pathname + c.search, {}, void 0, { rawResponseBody: true, prefix: "" });
      } catch (d) {
        throw s.warn("Error downloading encrypted bundle from ".concat(_, ":"), d), d;
      }
      s.info("Received blob of length ".concat(a.size));
      try {
        yield r.olmMachine.receiveRoomKeyBundle(o, new Uint8Array(yield a.arrayBuffer()));
      } catch (d) {
        throw s.warn("Error receiving encrypted bundle:", d), d;
      }
    })();
  }
  getVersion() {
    var e = Gi();
    return "Rust SDK ".concat(e.matrix_sdk_crypto, " (").concat(e.git_sha, "), Vodozemac ").concat(e.vodozemac);
  }
  setDeviceIsolationMode(e) {
    this.deviceIsolationMode = e;
  }
  isEncryptionEnabledInRoom(e) {
    var t = this;
    return g(function* () {
      var r = yield t.olmMachine.getRoomSettings(new R(e));
      return !!(r == null ? void 0 : r.algorithm);
    })();
  }
  getOwnDeviceKeys() {
    var e = this;
    return g(function* () {
      var t = e.olmMachine.identityKeys;
      return { ed25519: t.ed25519.toBase64(), curve25519: t.curve25519.toBase64() };
    })();
  }
  prepareToEncrypt(e) {
    var t = this.roomEncryptors[e.roomId];
    t && t.prepareForEncryption(this.globalBlacklistUnverifiedDevices, this.deviceIsolationMode);
  }
  forceDiscardSession(e) {
    var t;
    return (t = this.roomEncryptors[e]) === null || t === void 0 ? void 0 : t.forceDiscardSession();
  }
  exportRoomKeys() {
    var e = this;
    return g(function* () {
      var t = yield e.olmMachine.exportRoomKeys(() => true);
      return JSON.parse(t);
    })();
  }
  exportRoomKeysAsJson() {
    var e = this;
    return g(function* () {
      return yield e.olmMachine.exportRoomKeys(() => true);
    })();
  }
  importRoomKeys(e, t) {
    var r = this;
    return g(function* () {
      return yield r.backupManager.importRoomKeys(e, t);
    })();
  }
  importRoomKeysAsJson(e, t) {
    var r = this;
    return g(function* () {
      return yield r.backupManager.importRoomKeysAsJson(e, t);
    })();
  }
  userHasCrossSigningKeys() {
    var e = arguments, t = this;
    return g(function* () {
      var r = e.length > 0 && e[0] !== void 0 ? e[0] : t.userId, s = e.length > 1 && e[1] !== void 0 ? e[1] : false, o = yield t.olmMachine.trackedUsers(), _;
      for (var a of o) if (r === a.toString()) {
        _ = a;
        break;
      }
      if (_ !== void 0) {
        if (r === t.userId) {
          var c = t.olmMachine.queryKeysForUsers([_.clone()]);
          yield t.outgoingRequestProcessor.makeOutgoingRequest(c);
        }
        var d = yield t.olmMachine.getIdentity(_);
        return d == null ? void 0 : d.free(), d !== void 0;
      } else if (s) {
        var w, h = yield t.downloadDeviceList(/* @__PURE__ */ new Set([r])), m = (w = h.master_keys) === null || w === void 0 ? void 0 : w[r];
        return m ? !!Object.values(m.keys)[0] : false;
      } else return false;
    })();
  }
  getUserDeviceInfo(e) {
    var t = arguments, r = this;
    return g(function* () {
      var s = t.length > 1 && t[1] !== void 0 ? t[1] : false, o = /* @__PURE__ */ new Map(), _ = yield r.getOlmMachineOrThrow().trackedUsers(), a = /* @__PURE__ */ new Set();
      _.forEach((h) => a.add(h.toString()));
      var c = /* @__PURE__ */ new Set();
      for (var d of e) a.has(d) ? o.set(d, yield r.getUserDevices(d)) : c.add(d);
      if (s && c.size >= 1) {
        var w = yield r.downloadDeviceList(c);
        Object.entries(w.device_keys).forEach((h) => {
          var [m, K] = h;
          return o.set(m, hg(K));
        });
      }
      return o;
    })();
  }
  getUserDevices(e) {
    var t = this;
    return g(function* () {
      var r = new f(e), s = yield t.olmMachine.getUserDevices(r, 1);
      try {
        var o = s.devices();
        try {
          return new Map(o.map((_) => [_.deviceId.toString(), fg(_, r)]));
        } finally {
          o.forEach((_) => _.free());
        }
      } finally {
        s.free();
      }
    })();
  }
  downloadDeviceList(e) {
    var t = this;
    return g(function* () {
      var r = { device_keys: {} };
      return e.forEach((s) => r.device_keys[s] = []), yield t.http.authedRequest(E.Post, "/_matrix/client/v3/keys/query", void 0, r, { prefix: "" });
    })();
  }
  getTrustCrossSignedDevices() {
    return this._trustCrossSignedDevices;
  }
  setTrustCrossSignedDevices(e) {
    this._trustCrossSignedDevices = e;
  }
  setDeviceVerified(e, t) {
    var r = arguments, s = this;
    return g(function* () {
      var o = r.length > 2 && r[2] !== void 0 ? r[2] : true, _ = yield s.olmMachine.getDevice(new f(e), new C(t));
      if (!_) throw new Error("Unknown device ".concat(e, "|").concat(t));
      try {
        yield _.setLocalTrust(o ? Vr.Verified : Vr.Unset);
      } finally {
        _.free();
      }
    })();
  }
  crossSignDevice(e) {
    var t = this;
    return g(function* () {
      var r = yield t.olmMachine.getDevice(new f(t.userId), new C(e));
      if (!r) throw new Error("Unknown device ".concat(e));
      try {
        var s = yield r.verify();
        yield t.outgoingRequestProcessor.makeOutgoingRequest(s);
      } finally {
        r.free();
      }
    })();
  }
  getDeviceVerificationStatus(e, t) {
    var r = this;
    return g(function* () {
      var s = yield r.olmMachine.getDevice(new f(e), new C(t));
      if (!s) return null;
      try {
        return new us({ signedByOwner: s.isCrossSignedByOwner(), crossSigningVerified: s.isCrossSigningTrusted(), localVerified: s.isLocallyTrusted(), trustCrossSignedDevices: r._trustCrossSignedDevices });
      } finally {
        s.free();
      }
    })();
  }
  getUserVerificationStatus(e) {
    var t = this;
    return g(function* () {
      var r = yield t.getOlmMachineOrThrow().getIdentity(new f(e));
      if (r === void 0) return new gn(false, false, false);
      var s = r.isVerified(), o = r.wasPreviouslyVerified(), _ = r instanceof Le ? r.identityNeedsUserApproval() : false;
      return r.free(), new gn(s, o, false, _);
    })();
  }
  pinCurrentUserIdentity(e) {
    var t = this;
    return g(function* () {
      var r = yield t.getOlmMachineOrThrow().getIdentity(new f(e));
      if (r === void 0) throw new Error("Cannot pin identity of unknown user");
      if (r instanceof We) throw new Error("Cannot pin identity of own user");
      yield r.pinCurrentMasterKey();
    })();
  }
  withdrawVerificationRequirement(e) {
    var t = this;
    return g(function* () {
      var r = yield t.getOlmMachineOrThrow().getIdentity(new f(e));
      if (r === void 0) throw new Error("Cannot withdraw verification of unknown user");
      yield r.withdrawVerification();
    })();
  }
  isCrossSigningReady() {
    var e = this;
    return g(function* () {
      var { privateKeysInSecretStorage: t, privateKeysCachedLocally: r } = yield e.getCrossSigningStatus(), s = !!r.masterKey && !!r.selfSigningKey && !!r.userSigningKey, o = yield e.getOwnIdentity();
      return !!(o != null && o.isVerified()) && (s || t);
    })();
  }
  getCrossSigningKeyId() {
    var e = arguments, t = this;
    return g(function* () {
      var r = e.length > 0 && e[0] !== void 0 ? e[0] : st.Master, s = yield t.olmMachine.getIdentity(new f(t.userId));
      if (!s) return null;
      try {
        var o = yield t.olmMachine.crossSigningStatus(), _ = o.hasMaster && o.hasUserSigning && o.hasSelfSigning;
        if (!_ || !s.isVerified()) return null;
        var a;
        switch (r) {
          case st.Master:
            a = s.masterKey;
            break;
          case st.SelfSigning:
            a = s.selfSigningKey;
            break;
          case st.UserSigning:
            a = s.userSigningKey;
            break;
          default:
            return null;
        }
        var c = JSON.parse(a);
        return Object.values(c.keys)[0];
      } finally {
        s.free();
      }
    })();
  }
  bootstrapCrossSigning(e) {
    var t = this;
    return g(function* () {
      yield t.crossSigningIdentity.bootstrapCrossSigning(e);
    })();
  }
  isSecretStorageReady() {
    var e = this;
    return g(function* () {
      var t = ["m.cross_signing.master", "m.cross_signing.user_signing", "m.cross_signing.self_signing"], r = (yield e.backupManager.getActiveBackupVersion()) != null;
      return r && t.push("m.megolm_backup.v1"), $i(e.secretStorage, t);
    })();
  }
  bootstrapSecretStorage() {
    var e = arguments, t = this;
    return g(function* () {
      var { createSecretStorageKey: r, setupNewSecretStorage: s, setupNewKeyBackup: o } = e.length > 0 && e[0] !== void 0 ? e[0] : {}, _ = s || !(yield t.secretStorageHasAESKey());
      if (_) {
        if (!r) throw new Error("unable to create a new secret storage key, createSecretStorageKey is not set");
        t.logger.info("bootstrapSecretStorage: creating new secret storage key");
        var a = yield r();
        if (!a) throw new Error("createSecretStorageKey() callback did not return a secret storage key");
        yield t.addSecretStorageKeyToSecretStorage(a);
      }
      var c = yield t.olmMachine.exportCrossSigningKeys(), d = c && c.masterKey !== void 0 && c.self_signing_key !== void 0 && c.userSigningKey !== void 0;
      d && (_ || !(yield Ei(t.secretStorage))) && (t.logger.info("bootstrapSecretStorage: cross-signing keys not yet exported; doing so now."), yield t.secretStorage.store("m.cross_signing.master", c.masterKey), yield t.secretStorage.store("m.cross_signing.user_signing", c.userSigningKey), yield t.secretStorage.store("m.cross_signing.self_signing", c.self_signing_key)), o ? yield t.resetKeyBackup() : yield t.saveBackupKeyToStorage();
    })();
  }
  saveBackupKeyToStorage() {
    var e = this;
    return g(function* () {
      var t = yield e.backupManager.getServerBackupInfo();
      if (!t || !t.version) {
        e.logger.info("Not saving backup key to secret storage: no backup info");
        return;
      }
      var r = yield e.olmMachine.getBackupKeys();
      if (!r.decryptionKey) {
        e.logger.info("Not saving backup key to secret storage: no backup key");
        return;
      }
      if (!Br(r.decryptionKey, t)) {
        e.logger.info("Not saving backup key to secret storage: decryption key does not match backup info");
        return;
      }
      var s = r.decryptionKey.toBase64();
      yield e.secretStorage.store("m.megolm_backup.v1", s);
    })();
  }
  addSecretStorageKeyToSecretStorage(e) {
    var t = this;
    return g(function* () {
      var r, s, o, _, a = yield t.secretStorage.addKey(un, { passphrase: (r = e.keyInfo) === null || r === void 0 ? void 0 : r.passphrase, name: (s = e.keyInfo) === null || s === void 0 ? void 0 : s.name, key: e.privateKey });
      yield t.secretStorage.setDefaultKeyId(a.keyId), (o = (_ = t.cryptoCallbacks).cacheSecretStorageKey) === null || o === void 0 || o.call(_, a.keyId, a.keyInfo, e.privateKey);
    })();
  }
  secretStorageHasAESKey() {
    var e = this;
    return g(function* () {
      var t = yield e.secretStorage.getKey();
      if (!t) return false;
      var [, r] = t;
      return r.algorithm === un;
    })();
  }
  getCrossSigningStatus() {
    var e = this;
    return g(function* () {
      var t = yield e.getOlmMachineOrThrow().getIdentity(new f(e.userId)), r = !!(t == null ? void 0 : t.masterKey) && !!(t == null ? void 0 : t.selfSigningKey) && !!(t == null ? void 0 : t.userSigningKey);
      t == null ? void 0 : t.free();
      var s = yield Ei(e.secretStorage), o = yield e.getOlmMachineOrThrow().crossSigningStatus();
      return { publicKeysOnDevice: r, privateKeysInSecretStorage: s, privateKeysCachedLocally: { masterKey: !!(o == null ? void 0 : o.hasMaster), userSigningKey: !!(o == null ? void 0 : o.hasUserSigning), selfSigningKey: !!(o == null ? void 0 : o.hasSelfSigning) } };
    })();
  }
  createRecoveryKeyFromPassphrase(e) {
    var t = this;
    return g(function* () {
      if (e) {
        var r = dn(32), s = yield Ni(e, r, t.RECOVERY_KEY_DERIVATION_ITERATIONS);
        return { keyInfo: { passphrase: { algorithm: "m.pbkdf2", iterations: t.RECOVERY_KEY_DERIVATION_ITERATIONS, salt: r } }, privateKey: s, encodedPrivateKey: ln(s) };
      } else {
        var o = new Uint8Array(32);
        return globalThis.crypto.getRandomValues(o), { privateKey: o, encodedPrivateKey: ln(o) };
      }
    })();
  }
  getEncryptionInfoForEvent(e) {
    var t = this;
    return g(function* () {
      return t.eventDecryptor.getEncryptionInfoForEvent(e);
    })();
  }
  getVerificationRequestsToDeviceInProgress(e) {
    var t = this.olmMachine.getVerificationRequests(new f(e));
    return t.filter((r) => r.roomId === void 0).map((r) => this.makeVerificationRequest(r));
  }
  findVerificationRequestDMInProgress(e, t) {
    if (!t) throw new Error("missing userId");
    var r = this.olmMachine.getVerificationRequests(new f(t)), s = r.find((o) => {
      var _;
      return ((_ = o.roomId) === null || _ === void 0 ? void 0 : _.toString()) === e;
    });
    if (s) return this.makeVerificationRequest(s);
  }
  requestVerificationDM(e, t) {
    var r = this;
    return g(function* () {
      var s = yield r.olmMachine.getIdentity(new f(e));
      if (!s) throw new Error("unknown userId ".concat(e));
      try {
        var o = r._supportedVerificationMethods.map((d) => yt(d)), _ = yield s.verificationRequestContent(o), a = yield r.sendVerificationRequestContent(t, _), c = yield s.requestVerification(new R(t), new sn(a), o);
        return r.makeVerificationRequest(c);
      } finally {
        s.free();
      }
    })();
  }
  sendVerificationRequestContent(e, t) {
    var r = this;
    return g(function* () {
      var s = dn(32), { event_id: o } = yield r.http.authedRequest(E.Put, "/_matrix/client/v3/rooms/".concat(encodeURIComponent(e), "/send/m.room.message/").concat(encodeURIComponent(s)), void 0, t, { prefix: "" });
      return o;
    })();
  }
  setSupportedVerificationMethods(e) {
    this._supportedVerificationMethods = e ?? Ui;
  }
  requestOwnUserVerification() {
    var e = this;
    return g(function* () {
      var t = yield e.olmMachine.getIdentity(new f(e.userId));
      if (t === void 0) throw new Error("cannot request verification for this device when there is no existing cross-signing key");
      try {
        var [r, s] = yield t.requestVerification(e._supportedVerificationMethods.map(yt));
        return yield e.outgoingRequestProcessor.makeOutgoingRequest(s), e.makeVerificationRequest(r);
      } finally {
        t.free();
      }
    })();
  }
  requestDeviceVerification(e, t) {
    var r = this;
    return g(function* () {
      var s = yield r.olmMachine.getDevice(new f(e), new C(t));
      if (!s) throw new Error("Not a known device");
      try {
        var [o, _] = s.requestVerification(r._supportedVerificationMethods.map(yt));
        return yield r.outgoingRequestProcessor.makeOutgoingRequest(_), r.makeVerificationRequest(o);
      } finally {
        s.free();
      }
    })();
  }
  getSessionBackupPrivateKey() {
    var e = this;
    return g(function* () {
      var t = yield e.olmMachine.getBackupKeys();
      return t.decryptionKey ? qr(t.decryptionKey.toBase64()) : null;
    })();
  }
  storeSessionBackupPrivateKey(e, t) {
    var r = this;
    return g(function* () {
      var s = Fr(e);
      if (!t) throw new Error("storeSessionBackupPrivateKey: version is required");
      yield r.backupManager.saveBackupDecryptionKey(V.fromBase64(s), t);
    })();
  }
  loadSessionBackupPrivateKeyFromSecretStorage() {
    var e = this;
    return g(function* () {
      var t = yield e.secretStorage.get("m.megolm_backup.v1");
      if (!t) throw new Error("loadSessionBackupPrivateKeyFromSecretStorage: missing decryption key in secret storage");
      var r = yield e.backupManager.getServerBackupInfo();
      if (!r || !r.version) throw new Error("loadSessionBackupPrivateKeyFromSecretStorage: unable to get backup version");
      var s = V.fromBase64(t);
      if (!Br(s, r)) throw new Error("loadSessionBackupPrivateKeyFromSecretStorage: decryption key does not match backup info");
      yield e.backupManager.saveBackupDecryptionKey(s, r.version);
    })();
  }
  getActiveSessionBackupVersion() {
    var e = this;
    return g(function* () {
      return yield e.backupManager.getActiveBackupVersion();
    })();
  }
  getKeyBackupInfo() {
    var e = this;
    return g(function* () {
      return (yield e.backupManager.getServerBackupInfo()) || null;
    })();
  }
  isKeyBackupTrusted(e) {
    var t = this;
    return g(function* () {
      return yield t.backupManager.isKeyBackupTrusted(e);
    })();
  }
  checkKeyBackupAndEnable() {
    var e = this;
    return g(function* () {
      return yield e.backupManager.checkKeyBackupAndEnable(true);
    })();
  }
  deleteKeyBackupVersion(e) {
    var t = this;
    return g(function* () {
      yield t.backupManager.deleteKeyBackupVersion(e);
    })();
  }
  resetKeyBackup() {
    var e = this;
    return g(function* () {
      var t = yield e.backupManager.setupKeyBackup((r) => e.signObject(r));
      (yield e.secretStorageHasAESKey()) && (yield e.secretStorage.store("m.megolm_backup.v1", t.decryptionKey.toBase64())), e.checkKeyBackupAndEnable();
    })();
  }
  disableKeyStorage() {
    var e = this;
    return g(function* () {
      var t = yield e.getKeyBackupInfo();
      t != null && t.version ? yield e.deleteKeyBackupVersion(t.version) : e.logger.error("Can't delete key backup version: no version available"), yield e.deleteSecretStorage(), yield e.dehydratedDeviceManager.delete();
    })();
  }
  signObject(e) {
    var t = this;
    return g(function* () {
      var r = new Map(Object.entries(e.signatures || {})), s = e.unsigned;
      delete e.signatures, delete e.unsigned;
      var o = r.get(t.userId) || {}, _ = gg.stringify(e), a = yield t.olmMachine.sign(_), c = JSON.parse(a.asJSON());
      r.set(t.userId, Fi(Fi({}, o), c[t.userId])), s !== void 0 && (e.unsigned = s), e.signatures = Object.fromEntries(r.entries());
    })();
  }
  restoreKeyBackupWithPassphrase(e, t) {
    var r = this;
    return g(function* () {
      var s = yield r.backupManager.getServerBackupInfo();
      if (!(s != null && s.version)) throw new Error("No backup info available");
      var o = yield Eg(s.auth_data, e);
      return yield r.storeSessionBackupPrivateKey(o, s.version), r.restoreKeyBackup(t);
    })();
  }
  restoreKeyBackup(e) {
    var t = this;
    return g(function* () {
      var r = yield t.olmMachine.getBackupKeys(), { decryptionKey: s, backupVersion: o } = r;
      if (!s || !o) throw new Error("No decryption key found in crypto store");
      var _ = qr(s.toBase64()), a = yield t.backupManager.requestKeyBackupVersion(o);
      if (!a) throw new Error("Backup version to restore ".concat(o, " not found on server"));
      var c = yield t.getBackupDecryptor(a, _);
      try {
        var d;
        return e == null || (d = e.progressCallback) === null || d === void 0 || d.call(e, { stage: Re.Fetch }), yield t.backupManager.restoreKeyBackup(o, c, e);
      } finally {
        c.free();
      }
    })();
  }
  isDehydrationSupported() {
    var e = this;
    return g(function* () {
      return yield e.dehydratedDeviceManager.isSupported();
    })();
  }
  startDehydration() {
    var e = arguments, t = this;
    return g(function* () {
      var r = e.length > 0 && e[0] !== void 0 ? e[0] : {};
      if (!(yield t.isCrossSigningReady()) || !(yield t.isSecretStorageReady())) throw new Error("Device dehydration requires cross-signing and secret storage to be set up");
      return yield t.dehydratedDeviceManager.start(r || {});
    })();
  }
  importSecretsBundle(e) {
    var t = this;
    return g(function* () {
      var r = oe.from_json(e);
      yield t.getOlmMachineOrThrow().importSecretsBundle(r);
    })();
  }
  exportSecretsBundle() {
    var e = this;
    return g(function* () {
      var t = yield e.getOlmMachineOrThrow().exportSecretsBundle(), r = t.to_json();
      return t.free(), r;
    })();
  }
  encryptToDeviceMessages(e, t, r) {
    var s = this;
    return g(function* () {
      var o = new ut(s.logger, "encryptToDeviceMessages"), _ = new Set(t.map((c) => {
        var { userId: d } = c;
        return d;
      }));
      yield s.keyClaimManager.ensureSessionsForUsers(o, Array.from(_).map((c) => new f(c)));
      var a = { batch: [], eventType: j.RoomMessageEncrypted };
      return yield Promise.all(t.map(function() {
        var c = g(function* (d) {
          var { userId: w, deviceId: h } = d, m = yield s.olmMachine.getDevice(new f(w), new C(h));
          if (m) {
            var K = JSON.parse(yield m.encryptToDeviceEvent(e, r));
            a.batch.push({ deviceId: h, userId: w, payload: K });
          } else s.logger.warn("encryptToDeviceMessages: unknown device ".concat(w, ":").concat(h));
        });
        return function(d) {
          return c.apply(this, arguments);
        };
      }())), a;
    })();
  }
  resetEncryption(e) {
    var t = this;
    return g(function* () {
      t.logger.debug("resetEncryption: resetting encryption"), t.dehydratedDeviceManager.delete(), yield t.backupManager.deleteAllKeyBackupVersions(), yield t.deleteSecretStorage(), yield t.crossSigningIdentity.bootstrapCrossSigning({ setupNewCrossSigning: true, authUploadDeviceSigningKeys: e }), yield t.resetKeyBackup(), t.logger.debug("resetEncryption: ended");
    })();
  }
  deleteSecretStorage() {
    var e = this;
    return g(function* () {
      yield e.secretStorage.store("m.cross_signing.master", null), yield e.secretStorage.store("m.cross_signing.self_signing", null), yield e.secretStorage.store("m.cross_signing.user_signing", null), yield e.secretStorage.store("m.megolm_backup.v1", null);
      var t = yield e.secretStorage.getDefaultKeyId();
      t && (yield e.secretStorage.store("m.secret_storage.key.".concat(t), null)), yield e.secretStorage.setDefaultKeyId(null);
    })();
  }
  shareRoomHistoryWithUser(e, t) {
    var r = this;
    return g(function* () {
      var s = new ut(r.logger, "shareRoomHistoryWithUser(".concat(e, ", ").concat(t, ")")), o = yield r.getOwnIdentity();
      if (!(o != null && o.isVerified())) {
        s.warn("Not sharing message history as the current device is not verified by our cross-signing identity");
        return;
      }
      s.info("Sharing message history");
      var _ = yield r.getOlmMachineOrThrow().buildRoomKeyBundle(new R(e));
      if (!_) {
        s.info("No keys to share");
        return;
      }
      var a = yield r.http.uploadContent(_.encryptedData);
      s.info("Uploaded encrypted key blob: ".concat(JSON.stringify(a)));
      var c = r.getOlmMachineOrThrow().queryKeysForUsers([new f(t)]);
      yield r.outgoingRequestProcessor.makeOutgoingRequest(c), yield r.keyClaimManager.ensureSessionsForUsers(s, [new f(t)]);
      var d = yield r.getOlmMachineOrThrow().shareRoomKeyBundleData(new f(t), new R(e), a.content_uri, _.mediaEncryptionInfo, q.identityBasedStrategy());
      for (var w of d) yield r.outgoingRequestProcessor.makeOutgoingRequest(w);
    })();
  }
  receiveSyncChanges(e) {
    var t = this;
    return g(function* () {
      var { events: r, oneTimeKeysCounts: s = /* @__PURE__ */ new Map(), unusedFallbackKeys: o, devices: _ = new vt() } = e;
      return yield t.olmMachine.receiveSyncChanges(r ? JSON.stringify(r) : "[]", _, s, o);
    })();
  }
  preprocessToDeviceMessages(e) {
    var t = this;
    return g(function* () {
      var r = yield t.receiveSyncChanges({ events: e }), s = [];
      for (var o of r) {
        var _ = JSON.parse(o.rawEvent);
        if (_.type === j.KeyVerificationRequest) {
          var a = _.sender, c = _.content.transaction_id;
          c && a && t.onIncomingKeyVerificationRequest(a, c);
        }
        switch (o.type) {
          case Ie.Decrypted: {
            var d, w = o.encryptionInfo;
            s.push({ message: _, encryptionInfo: { sender: w.sender.toString(), senderDevice: (d = w.senderDevice) === null || d === void 0 ? void 0 : d.toString(), senderCurve25519KeyBase64: w.senderCurve25519Key, senderVerified: w.isSenderVerified() } });
            break;
          }
          case Ie.PlainText: {
            s.push({ message: _, encryptionInfo: null });
            break;
          }
          case Ie.UnableToDecrypt:
            break;
          case Ie.Invalid:
            break;
        }
      }
      return s;
    })();
  }
  processKeyCounts(e, t) {
    var r = this;
    return g(function* () {
      var s = e && new Map(Object.entries(e)), o = t && new Set(t);
      (s !== void 0 || o !== void 0) && (yield r.receiveSyncChanges({ oneTimeKeysCounts: s, unusedFallbackKeys: o }));
    })();
  }
  processDeviceLists(e) {
    var t = this;
    return g(function* () {
      var r, s, o = new vt((r = e.changed) === null || r === void 0 ? void 0 : r.map((_) => new f(_)), (s = e.left) === null || s === void 0 ? void 0 : s.map((_) => new f(_)));
      yield t.receiveSyncChanges({ devices: o });
    })();
  }
  onCryptoEvent(e, t) {
    var r = this;
    return g(function* () {
      var s = t.getContent(), o = new _e();
      if (s.algorithm === "m.megolm.v1.aes-sha2") o.algorithm = ge.MegolmV1AesSha2;
      else {
        r.logger.warn("Room ".concat(e.roomId, ": ignoring crypto event with invalid algorithm ").concat(s.algorithm));
        return;
      }
      try {
        o.sessionRotationPeriodMs = s.rotation_period_ms, o.sessionRotationPeriodMessages = s.rotation_period_msgs, yield r.olmMachine.setRoomSettings(new R(e.roomId), o);
      } catch (a) {
        r.logger.warn("Room ".concat(e.roomId, ": ignoring crypto event which caused error: ").concat(a));
        return;
      }
      var _ = r.roomEncryptors[e.roomId];
      _ ? _.onCryptoEvent(s) : r.roomEncryptors[e.roomId] = new ug(r.logger.getChild("[".concat(e.roomId, " encryption]")), r.olmMachine, r.keyClaimManager, r.outgoingRequestsManager, e, s);
    })();
  }
  onSyncCompleted(e) {
    this.outgoingRequestsManager.doProcessOutgoingRequests().catch((t) => {
      this.logger.warn("onSyncCompleted: Error processing outgoing requests", t);
    });
  }
  markAllTrackedUsersAsDirty() {
    var e = this;
    return g(function* () {
      yield e.olmMachine.markAllTrackedUsersAsDirty();
    })();
  }
  onIncomingKeyVerificationRequest(e, t) {
    var r = this.olmMachine.getVerificationRequest(new f(e), t);
    r ? this.emit(I.VerificationRequestReceived, this.makeVerificationRequest(r)) : this.logger.info("Ignoring just-received verification request ".concat(t, " which did not start a rust-side verification"));
  }
  makeVerificationRequest(e) {
    return new kg(this.logger, this.olmMachine, e, this.outgoingRequestProcessor, this._supportedVerificationMethods);
  }
  onRoomMembership(e, t, r) {
    var s = this.roomEncryptors[e.getRoomId()];
    s && s.onRoomMembership(t);
  }
  onRoomKeysUpdated(e) {
    var t = this;
    return g(function* () {
      for (var r of e) t.onRoomKeyUpdated(r);
      t.backupManager.maybeUploadKey();
    })();
  }
  onRoomKeyUpdated(e) {
    var t = this;
    if (!this.stopped) {
      this.logger.debug("Got update for session ".concat(e.sessionId, " from sender ").concat(e.senderKey.toBase64(), " in ").concat(e.roomId.toString()));
      var r = this.eventDecryptor.getEventsPendingRoomKey(e.roomId.toString(), e.sessionId);
      if (r.length !== 0) {
        this.logger.debug("Retrying decryption on events:", r.map((_) => "".concat(_.getId())));
        var s = function(a) {
          a.attemptDecryption(t, { isRetry: true }).catch((c) => {
            t.logger.info("Still unable to decrypt event ".concat(a.getId(), " after receiving key"));
          });
        };
        for (var o of r) s(o);
      }
    }
  }
  onRoomKeysWithheld(e) {
    var t = this;
    return g(function* () {
      for (var r of e) {
        t.logger.debug("Got withheld message for session ".concat(r.sessionId, " in ").concat(r.roomId.toString()));
        var s = t.eventDecryptor.getEventsPendingRoomKey(r.roomId.toString(), r.sessionId);
        if (s.length === 0) return;
        t.logger.debug("Retrying decryption on events:", s.map((_) => "".concat(_.getId())));
        for (var o of s) o.attemptDecryption(t, { isRetry: true }).catch((_) => {
        });
      }
    })();
  }
  onUserIdentityUpdated(e) {
    var t = this;
    return g(function* () {
      var r = yield t.getUserVerificationStatus(e.toString());
      t.emit(I.UserTrustStatusChanged, e.toString(), r), e.toString() === t.userId && (t.emit(I.KeysChanged, {}), yield t.checkKeyBackupAndEnable());
    })();
  }
  onDevicesUpdated(e) {
    var t = this;
    return g(function* () {
      t.emit(I.WillUpdateDevices, e, false), t.emit(I.DevicesUpdated, e, false);
    })();
  }
  handleSecretReceived(e, t) {
    var r = this;
    return g(function* () {
      return r.logger.debug("onReceiveSecret: Received secret ".concat(e)), e === "m.megolm_backup.v1" ? yield r.backupManager.handleBackupSecretReceived(t) : false;
    })();
  }
  checkSecrets(e) {
    var t = this;
    return g(function* () {
      var r = yield t.olmMachine.getSecretsFromInbox(e);
      for (var s of r) if (yield t.handleSecretReceived(e, s)) break;
      yield t.olmMachine.deleteSecretsFromInbox(e);
    })();
  }
  onLiveEventFromSync(e) {
    var t = this;
    return g(function* () {
      if (!(e.isState() || e.getUnsigned().transaction_id)) {
        var r = function() {
          var a = g(function* (c) {
            Sg(e) && (yield t.onKeyVerificationEvent(c));
          });
          return function(d) {
            return a.apply(this, arguments);
          };
        }();
        if (e.isDecryptionFailure() || e.isEncrypted()) {
          var s = 3e5, o = setTimeout(() => e.off(sr.Decrypted, _), s), _ = (a, c) => {
            c || (clearTimeout(o), e.off(sr.Decrypted, _), r(a));
          };
          e.on(sr.Decrypted, _);
        } else yield r(e);
      }
    })();
  }
  onKeyVerificationEvent(e) {
    var t = this;
    return g(function* () {
      var r = e.getRoomId();
      if (!r) throw new Error("missing roomId in the event");
      t.logger.debug("Incoming verification event ".concat(e.getId(), " type ").concat(e.getType(), " from ").concat(e.getSender())), yield t.olmMachine.receiveVerificationEvent(JSON.stringify({ event_id: e.getId(), type: e.getType(), sender: e.getSender(), state_key: e.getStateKey(), content: e.getContent(), origin_server_ts: e.getTs() }), new R(r)), e.getType() === j.RoomMessage && e.getContent().msgtype === xi.KeyVerificationRequest && t.onIncomingKeyVerificationRequest(e.getSender(), e.getId()), t.outgoingRequestsManager.doProcessOutgoingRequests().catch((s) => {
        t.logger.warn("onKeyVerificationRequest: Error processing outgoing requests", s);
      });
    })();
  }
  getOwnIdentity() {
    var e = this;
    return g(function* () {
      return yield e.olmMachine.getIdentity(new f(e.userId));
    })();
  }
}
class Og {
  constructor(e, t, r) {
    this.logger = e, this.olmMachine = t, this.perSessionBackupDownloader = r, k(this, "eventsPendingKey", new pn(() => new pn(() => /* @__PURE__ */ new Set())));
  }
  attemptEventDecryption(e, t) {
    var r = this;
    return g(function* () {
      r.addEventToPendingList(e);
      var s;
      switch (t.kind) {
        case ft.AllDevicesIsolationMode:
          s = Tr.Untrusted;
          break;
        case ft.OnlySignedDevicesIsolationMode:
          s = Tr.CrossSignedOrLegacy;
          break;
      }
      try {
        var o = yield r.olmMachine.decryptRoomEvent(Vi(e), new R(e.getRoomId()), new qe(s));
        return r.removeEventFromPendingList(e), { clearEvent: JSON.parse(o.event), claimedEd25519Key: o.senderClaimedEd25519Key, senderCurve25519Key: o.senderCurve25519Key, forwardingCurve25519KeyChain: o.forwardingCurve25519KeyChain };
      } catch (_) {
        if (_ instanceof Ae) r.onMegolmDecryptionError(e, _, yield r.perSessionBackupDownloader.getServerBackupInfo());
        else throw new T(z.UNKNOWN_ERROR, "Unknown error");
      }
    })();
  }
  onMegolmDecryptionError(e, t, r) {
    var s = e.getWireContent(), o = { sender_key: s.sender_key, session_id: s.session_id };
    if (t.code === Y.MissingRoomKey || t.code === Y.UnknownMessageIndex) {
      this.perSessionBackupDownloader.onDecryptionKeyMissingError(e.getRoomId(), s.session_id);
      var _ = e.getMembershipAtEvent();
      if (_ && _ !== bt.Join && _ !== bt.Invite) throw new T(z.HISTORICAL_MESSAGE_USER_NOT_JOINED, "This message was sent when we were not a member of the room.", o);
      if (e.getTs() <= this.olmMachine.deviceCreationTimeMs) throw r === null ? new T(z.HISTORICAL_MESSAGE_NO_KEY_BACKUP, "This message was sent before this device logged in, and there is no key backup on the server.", o) : this.perSessionBackupDownloader.isKeyBackupDownloadConfigured() ? new T(z.HISTORICAL_MESSAGE_WORKING_BACKUP, "This message was sent before this device logged in. Key backup is working, but we still do not (yet) have the key.", o) : new T(z.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED, "This message was sent before this device logged in, and key backup is not working.", o);
    }
    if (t.maybe_withheld) {
      var a = t.maybe_withheld === "The sender has disabled encrypting to unverified devices." ? z.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE : z.MEGOLM_KEY_WITHHELD;
      throw new T(a, t.maybe_withheld, o);
    }
    switch (t.code) {
      case Y.MissingRoomKey:
        throw new T(z.MEGOLM_UNKNOWN_INBOUND_SESSION_ID, "The sender's device has not sent us the keys for this message.", o);
      case Y.UnknownMessageIndex:
        throw new T(z.OLM_UNKNOWN_MESSAGE_INDEX, "The sender's device has not sent us the keys for this message at this index.", o);
      case Y.SenderIdentityVerificationViolation:
        throw this.removeEventFromPendingList(e), new T(z.SENDER_IDENTITY_PREVIOUSLY_VERIFIED, "The sender identity is unverified, but was previously verified.");
      case Y.UnknownSenderDevice:
        throw this.removeEventFromPendingList(e), new T(z.UNKNOWN_SENDER_DEVICE, "The sender device is not known.");
      case Y.UnsignedSenderDevice:
        throw this.removeEventFromPendingList(e), new T(z.UNSIGNED_SENDER_DEVICE, "The sender identity is not cross-signed.");
      default:
        throw new T(z.UNKNOWN_ERROR, t.description, o);
    }
  }
  getEncryptionInfoForEvent(e) {
    var t = this;
    return g(function* () {
      if (!e.getClearContent() || e.isDecryptionFailure()) return null;
      if (e.status !== null) return { shieldColour: lt.NONE, shieldReason: null };
      var r = yield t.olmMachine.getRoomEventEncryptionInfo(Vi(e), new R(e.getRoomId()));
      return Mg(t.logger, r);
    })();
  }
  getEventsPendingRoomKey(e, t) {
    var r = this.eventsPendingKey.get(e);
    if (!r) return [];
    var s = r.get(t);
    return s ? [...s] : [];
  }
  addEventToPendingList(e) {
    var t = e.getRoomId();
    if (t) {
      var r = this.eventsPendingKey.getOrCreate(t), s = r.getOrCreate(e.getWireContent().session_id);
      s.add(e);
    }
  }
  removeEventFromPendingList(e) {
    var t = e.getRoomId();
    if (t) {
      var r = this.eventsPendingKey.getOrCreate(t);
      if (r) {
        var s = r.get(e.getWireContent().session_id);
        s && (s.delete(e), s.size === 0 && (r.delete(e.getWireContent().session_id), r.size === 0 && this.eventsPendingKey.delete(t)));
      }
    }
  }
}
function Vi(i) {
  return JSON.stringify({ event_id: i.getId(), type: i.getWireType(), sender: i.getSender(), state_key: i.getStateKey(), content: i.getWireContent(), origin_server_ts: i.getTs() });
}
function Mg(i, e) {
  if (e === void 0) return null;
  var t = e.shieldState(false), r;
  switch (t.color) {
    case zr.Grey:
      r = lt.GREY;
      break;
    case zr.None:
      r = lt.NONE;
      break;
    default:
      r = lt.RED;
  }
  var s;
  switch (t.code) {
    case void 0:
    case null:
      s = null;
      break;
    case Z.AuthenticityNotGuaranteed:
      s = $.AUTHENTICITY_NOT_GUARANTEED;
      break;
    case Z.UnknownDevice:
      s = $.UNKNOWN_DEVICE;
      break;
    case Z.UnsignedDevice:
      s = $.UNSIGNED_DEVICE;
      break;
    case Z.UnverifiedIdentity:
      s = $.UNVERIFIED_IDENTITY;
      break;
    case Z.SentInClear:
      s = $.SENT_IN_CLEAR;
      break;
    case Z.VerificationViolation:
      s = $.VERIFICATION_VIOLATION;
      break;
    case Z.MismatchedSender:
      s = $.MISMATCHED_SENDER;
      break;
    default:
      s = $.UNKNOWN;
      break;
  }
  return { shieldColour: r, shieldReason: s };
}
function Bg(i) {
  return Ar.apply(this, arguments);
}
function Ar() {
  return Ar = g(function* (i) {
    var e, { logger: t, legacyStore: r } = i;
    if (yield Hi(), !(yield r.containsData())) return;
    yield r.startup();
    var s = null;
    if (yield r.doTxn("readonly", [Ue.STORE_ACCOUNT], (m) => {
      r.getAccount(m, (K) => {
        s = K;
      });
    }), !s) {
      t.debug("Legacy crypto store is not set up (no account found). Not migrating.");
      return;
    }
    var o = yield r.getMigrationState();
    if (o >= x.MEGOLM_SESSIONS_MIGRATED) return;
    var _ = yield Fg(t, r), a = yield Ug(t, r), c = 1 + _ + a;
    t.info("Migrating data from legacy crypto store. ".concat(_, " olm sessions and ").concat(a, " megolm sessions to migrate."));
    var d = 0;
    function w(m) {
      var K;
      d += m, (K = i.legacyMigrationProgressListener) === null || K === void 0 || K.call(i, d, c);
    }
    w(0);
    var h = new TextEncoder().encode(i.legacyPickleKey);
    o === x.NOT_STARTED && (t.info("Migrating data from legacy crypto store. Step 1: base data"), yield qg(i.http, i.userId, i.deviceId, r, h, i.storeHandle, t), o = x.INITIAL_DATA_MIGRATED, yield r.setMigrationState(o)), w(1), o === x.INITIAL_DATA_MIGRATED && (t.info("Migrating data from legacy crypto store. Step 2: olm sessions (".concat(_, " sessions to migrate).")), yield Vg(t, r, h, i.storeHandle, w), o = x.OLM_SESSIONS_MIGRATED, yield r.setMigrationState(o)), o === x.OLM_SESSIONS_MIGRATED && (t.info("Migrating data from legacy crypto store. Step 3: megolm sessions (".concat(a, " sessions to migrate).")), yield zg(t, r, h, i.storeHandle, w), o = x.MEGOLM_SESSIONS_MIGRATED, yield r.setMigrationState(o)), (e = i.legacyMigrationProgressListener) === null || e === void 0 || e.call(i, -1, -1), t.info("Migration from legacy crypto store complete");
  }), Ar.apply(this, arguments);
}
function qg(i, e, t, r, s, o, _) {
  return Nr.apply(this, arguments);
}
function Nr() {
  return Nr = g(function* (i, e, t, r, s, o, _) {
    var a = new rn();
    a.userId = new f(e), a.deviceId = new C(t), yield r.doTxn("readonly", [Ue.STORE_ACCOUNT], (Q) => r.getAccount(Q, (me) => {
      a.pickledAccount = me ?? "";
    }));
    var c = yield gt(r, s, "m.megolm_backup.v1");
    if (c) {
      for (var d = false, w = null; !d; ) try {
        w = yield Xi(i), d = true;
      } catch (Q) {
        _.info("Failed to get backup version during migration, retrying in 2 seconds", Q), yield ne(2e3);
      }
      if (w && w.algorithm == "m.megolm_backup.v1.curve25519-aes-sha2") try {
        var h, m = V.fromBase64(c), K = (h = w.auth_data) === null || h === void 0 ? void 0 : h.public_key, F = m.megolmV1PublicKey.publicKeyBase64 == K;
        F ? (a.backupVersion = w.version, a.backupRecoveryKey = c) : _.debug("The backup key to migrate does not match the active backup version", "Cached pub key: ".concat(m.megolmV1PublicKey.publicKeyBase64), "Active pub key: ".concat(K));
      } catch (Q) {
        _.warn("Failed to check if the backup key to migrate matches the active backup version", Q);
      }
    }
    a.privateCrossSigningMasterKey = yield gt(r, s, "master"), a.privateCrossSigningSelfSigningKey = yield gt(r, s, "self_signing"), a.privateCrossSigningUserSigningKey = yield gt(r, s, "user_signing"), yield At.migrateBaseData(a, s, o, _);
  }), Nr.apply(this, arguments);
}
function Fg(i, e) {
  return Lr.apply(this, arguments);
}
function Lr() {
  return Lr = g(function* (i, e) {
    i.debug("Counting olm sessions to be migrated");
    var t;
    return yield e.doTxn("readonly", [Ue.STORE_SESSIONS], (r) => e.countEndToEndSessions(r, (s) => t = s)), t;
  }), Lr.apply(this, arguments);
}
function Ug(i, e) {
  return Wr.apply(this, arguments);
}
function Wr() {
  return Wr = g(function* (i, e) {
    return i.debug("Counting megolm sessions to be migrated"), yield e.countEndToEndInboundGroupSessions();
  }), Wr.apply(this, arguments);
}
function Vg(i, e, t, r, s) {
  return Gr.apply(this, arguments);
}
function Gr() {
  return Gr = g(function* (i, e, t, r, s) {
    for (; ; ) {
      var o = yield e.getEndToEndSessionsBatch();
      if (o === null) return;
      i.debug("Migrating batch of ".concat(o.length, " olm sessions"));
      var _ = [];
      for (var a of o) {
        var c = new Je();
        c.senderKey = a.deviceKey, c.pickle = a.session, c.lastUseTime = c.creationTime = new Date(a.lastReceivedMessageTs), _.push(c);
      }
      yield At.migrateOlmSessions(_, t, r, i), yield e.deleteEndToEndSessionsBatch(o), s(o.length);
    }
  }), Gr.apply(this, arguments);
}
function zg(i, e, t, r, s) {
  return Jr.apply(this, arguments);
}
function Jr() {
  return Jr = g(function* (i, e, t, r, s) {
    for (; ; ) {
      var o = yield e.getEndToEndInboundGroupSessionsBatch();
      if (o === null) return;
      i.debug("Migrating batch of ".concat(o.length, " megolm sessions"));
      var _ = [];
      for (var a of o) {
        var c, d = a.sessionData, w = new Ge();
        w.pickle = d.session, w.roomId = new R(d.room_id), w.senderKey = a.senderKey, w.senderSigningKey = (c = d.keysClaimed) === null || c === void 0 ? void 0 : c.ed25519, w.backedUp = !a.needsBackup, w.imported = d.untrusted === true, _.push(w);
      }
      yield At.migrateMegolmSessions(_, t, r, i), yield e.deleteEndToEndInboundGroupSessionsBatch(o), s(o.length);
    }
  }), Jr.apply(this, arguments);
}
function Tg(i) {
  return Hr.apply(this, arguments);
}
function Hr() {
  return Hr = g(function* (i) {
    var { logger: e, legacyStore: t, olmMachine: r } = i;
    if (yield t.containsData()) {
      var s = yield t.getMigrationState();
      if (!(s >= x.ROOM_SETTINGS_MIGRATED)) {
        var o = {};
        yield t.doTxn("readwrite", [Ue.STORE_ROOMS], (d) => {
          t.getEndToEndRooms(d, (w) => {
            o = w;
          });
        }), e.debug("Migrating ".concat(Object.keys(o).length, " sets of room settings"));
        for (var [_, a] of Object.entries(o)) try {
          var c = new _e();
          if (a.algorithm !== "m.megolm.v1.aes-sha2") {
            e.warn("Room ".concat(_, ": ignoring room with invalid algorithm ").concat(a.algorithm));
            continue;
          }
          c.algorithm = ge.MegolmV1AesSha2, c.sessionRotationPeriodMs = a.rotation_period_ms, c.sessionRotationPeriodMessages = a.rotation_period_msgs, yield r.setRoomSettings(new R(_), c);
        } catch (d) {
          e.warn("Room ".concat(_, ": ignoring settings ").concat(JSON.stringify(a), " which caused error ").concat(d));
        }
        e.debug("Completed room settings migration"), yield t.setMigrationState(x.ROOM_SETTINGS_MIGRATED);
      }
    }
  }), Hr.apply(this, arguments);
}
function gt(i, e, t) {
  return Qr.apply(this, arguments);
}
function Qr() {
  return Qr = g(function* (i, e, t) {
    var r = yield new Promise((s) => {
      i.doTxn("readonly", [Ue.STORE_ACCOUNT], (o) => {
        i.getSecretStorePrivateKey(o, s, t);
      });
    });
    return r && r.ciphertext && r.iv && r.mac ? yield ds(r, e, t) : r instanceof Uint8Array ? Fr(r) : void 0;
  }), Qr.apply(this, arguments);
}
function jg(i) {
  return $r.apply(this, arguments);
}
function $r() {
  return $r = g(function* (i) {
    var { legacyCryptoStore: e, rustCrypto: t, logger: r } = i, s = yield t.getOwnIdentity();
    if (s && !s.isVerified()) {
      var o = yield xg(e);
      if (o) {
        var _ = JSON.parse(s.masterKey);
        if (!_.keys || Object.keys(_.keys).length === 0) {
          r.error("Post Migration | Unexpected error: no master key in the rust session.");
          return;
        }
        var a = Object.values(_.keys)[0];
        a && a == o && (r.info("Post Migration: Migrating legacy trusted MSK: ".concat(o, " to locally verified.")), yield s.verify());
      }
    }
  }), $r.apply(this, arguments);
}
function xg(i) {
  return Yr.apply(this, arguments);
}
function Yr() {
  return Yr = g(function* (i) {
    var e = null;
    return yield i.doTxn("readonly", "account", (t) => {
      i.getCrossSigningKeys(t, (r) => {
        var s = r == null ? void 0 : r.master;
        s && Object.keys(s.keys).length != 0 && (e = Object.values(s.keys)[0]);
      });
    }), e;
  }), Yr.apply(this, arguments);
}
function zi(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(i, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Pg(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zi(Object(t), true).forEach(function(r) {
      k(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : zi(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function Wg(i) {
  return Zr.apply(this, arguments);
}
function Zr() {
  return Zr = g(function* (i) {
    var { logger: e } = i;
    e.debug("Initialising Rust crypto-sdk WASM artifact"), yield Hi(), e.debug("Opening Rust CryptoStore");
    var t;
    i.storePrefix ? i.storeKey ? t = yield N.openWithKey(i.storePrefix, i.storeKey, e) : t = yield N.open(i.storePrefix, i.storePassphrase, e) : t = yield N.open(null, null, e), i.legacyCryptoStore && (yield Bg(Pg({ legacyStore: i.legacyCryptoStore, storeHandle: t }, i)));
    var r = yield Ag(e, i.http, i.userId, i.deviceId, i.secretStorage, i.cryptoCallbacks, t, i.legacyCryptoStore);
    return t.free(), e.debug("Completed rust crypto-sdk setup"), r;
  }), Zr.apply(this, arguments);
}
function Ag(i, e, t, r, s, o, _, a) {
  return Xr.apply(this, arguments);
}
function Xr() {
  return Xr = g(function* (i, e, t, r, s, o, _, a) {
    i.debug("Init OlmMachine");
    var c = yield Ne.initFromStore(new f(t), new C(r), _, i);
    a && (yield Tg({ logger: i, legacyStore: a, olmMachine: c })), c.roomKeyRequestsEnabled = false;
    var d = new Dg(i, c, e, t, r, s, o);
    if (yield c.registerRoomKeyUpdatedCallback((m) => d.onRoomKeysUpdated(m)), yield c.registerRoomKeysWithheldCallback((m) => d.onRoomKeysWithheld(m)), yield c.registerUserIdentityUpdatedCallback((m) => d.onUserIdentityUpdated(m)), yield c.registerDevicesUpdatedCallback((m) => d.onDevicesUpdated(m)), d.checkSecrets("m.megolm_backup.v1"), yield c.registerReceiveSecretCallback((m, K) => d.checkSecrets(m)), yield c.outgoingRequests(), a && (yield a.containsData())) {
      var w = yield a.getMigrationState();
      if (w < x.INITIAL_OWN_KEY_QUERY_DONE) {
        i.debug("Performing initial key query after migration");
        for (var h = false; !h; ) try {
          yield d.userHasCrossSigningKeys(t), h = true;
        } catch (m) {
          i.error("Failed to check for cross-signing keys after migration, retrying", m);
        }
        yield jg({ legacyCryptoStore: a, rustCrypto: d, logger: i }), yield a.setMigrationState(x.INITIAL_OWN_KEY_QUERY_DONE);
      }
    }
    return d;
  }), Xr.apply(this, arguments);
}
export {
  Wg as initRustCrypto
};
