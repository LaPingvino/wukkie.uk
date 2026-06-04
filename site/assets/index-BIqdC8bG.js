import { _ as S, K as _r, c as g, L as rr, l as J, D as ar, E as A, H as Qt, T as Wt, C as I, M as D, d as Pr, e as cr, f as bs, g as fs, s as he, h as nr, i as Qi, j as $i, V as Ft, k as q, m as L, n as Yi, o as Zi, I as zt, p as Xi, q as Pt, r as es, A as ws, t as hs, u as xr, v as ms, w as vs, U as bn, x as $t, S as fn, y as wn, z as hn, B as ur, F as mn, G as x, J as T, N as ir, O as be, P as Gt, Q as N, R as ks } from "./main-DH90_hYv.js";
import { g as Ss } from "./index-0Fsa7gDP.js";
class Ar {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ug.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_attachment_free(e, 0);
  }
  static decrypt(e) {
    f(e, ae);
    const t = n.attachment_decrypt(e.__wbg_ptr);
    if (t[3]) throw l(t[2]);
    var r = z(t[0], t[1]).slice();
    return n.__wbindgen_free(t[0], t[1] * 1, 1), r;
  }
  static encrypt(e) {
    const t = Z(e, n.__wbindgen_malloc), r = d, s = n.attachment_encrypt(t, r);
    if (s[2]) throw l(s[1]);
    return ae.__wrap(s[0]);
  }
}
Symbol.dispose && (Ar.prototype[Symbol.dispose] = Ar.prototype.free);
class F {
  static __wrap(e) {
    const t = Object.create(F.prototype);
    return t.__wbg_ptr = e, vn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, vn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_backupdecryptionkey_free(e, 0);
  }
  static createRandomKey() {
    const e = n.backupdecryptionkey_createRandomKey();
    return F.__wrap(e);
  }
  decryptV1(e, t, r) {
    let s, o;
    try {
      const c = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), u = d, y = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), m = d, k = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), K = d, U = n.backupdecryptionkey_decryptV1(this.__wbg_ptr, c, u, y, m, k, K);
      var _ = U[0], a = U[1];
      if (U[3]) throw _ = 0, a = 0, l(U[2]);
      return s = _, o = a, b(_, a);
    } finally {
      n.__wbindgen_free(s, o, 1);
    }
  }
  static fromBase64(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.backupdecryptionkey_fromBase64(t, r);
    if (s[2]) throw l(s[1]);
    return F.__wrap(s[0]);
  }
  get megolmV1PublicKey() {
    const e = n.backupdecryptionkey_megolmV1PublicKey(this.__wbg_ptr);
    return gt.__wrap(e);
  }
  toBase64() {
    return n.backupdecryptionkey_toBase64(this.__wbg_ptr);
  }
}
Symbol.dispose && (F.prototype[Symbol.dispose] = F.prototype.free);
class We {
  static __wrap(e) {
    const t = Object.create(We.prototype);
    return t.__wbg_ptr = e, kn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, kn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_backupkeys_free(e, 0);
  }
  get decryptionKeyBase64() {
    return n.backupkeys_decryptionKeyBase64(this.__wbg_ptr);
  }
  get backupVersion() {
    const e = n.__wbg_get_backupkeys_backupVersion(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get decryptionKey() {
    const e = n.__wbg_get_backupkeys_decryptionKey(this.__wbg_ptr);
    return e === 0 ? void 0 : F.__wrap(e);
  }
  set backupVersion(e) {
    var t = h(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_backupkeys_backupVersion(this.__wbg_ptr, t, r);
  }
  set decryptionKey(e) {
    let t = 0;
    h(e) || (f(e, F), t = e.__destroy_into_raw()), n.__wbg_set_backupkeys_decryptionKey(this.__wbg_ptr, t);
  }
}
Symbol.dispose && (We.prototype[Symbol.dispose] = We.prototype.free);
class Ge {
  static __wrap(e) {
    const t = Object.create(Ge.prototype);
    return t.__wbg_ptr = e, Sn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Sn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_backupsecretsbundle_free(e, 0);
  }
  get backup_version() {
    let e, t;
    try {
      const r = n.__wbg_get_backupsecretsbundle_backup_version(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get key() {
    let e, t;
    try {
      const r = n.__wbg_get_backupsecretsbundle_key(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set backup_version(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_backupsecretsbundle_backup_version(this.__wbg_ptr, t, r);
  }
  set key(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_backupsecretsbundle_key(this.__wbg_ptr, t, r);
  }
}
Symbol.dispose && (Ge.prototype[Symbol.dispose] = Ge.prototype.free);
class me {
  static __wrap(e) {
    const t = Object.create(me.prototype);
    return t.__wbg_ptr = e, lr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, lr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_base64encodedpkmessage_free(e, 0);
  }
  constructor(e, t, r) {
    const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d, _ = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), a = d, c = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), u = d, y = n.base64encodedpkmessage_new(s, o, _, a, c, u);
    return this.__wbg_ptr = y, lr.register(this, this.__wbg_ptr, this), this;
  }
  get ciphertext() {
    let e, t;
    try {
      const r = n.__wbg_get_base64encodedpkmessage_ciphertext(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get ephemeralKey() {
    let e, t;
    try {
      const r = n.__wbg_get_base64encodedpkmessage_ephemeralKey(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get mac() {
    let e, t;
    try {
      const r = n.__wbg_get_base64encodedpkmessage_mac(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set ciphertext(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_base64encodedpkmessage_ciphertext(this.__wbg_ptr, t, r);
  }
  set ephemeralKey(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_base64encodedpkmessage_ephemeralKey(this.__wbg_ptr, t, r);
  }
  set mac(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_base64encodedpkmessage_mac(this.__wbg_ptr, t, r);
  }
}
Symbol.dispose && (me.prototype[Symbol.dispose] = me.prototype.free);
class At {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Rn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_basemigrationdata_free(e, 0);
  }
  constructor() {
    const e = n.basemigrationdata_new();
    return this.__wbg_ptr = e, Rn.register(this, this.__wbg_ptr, this), this;
  }
  get backupRecoveryKey() {
    const e = n.__wbg_get_basemigrationdata_backupRecoveryKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get backupVersion() {
    const e = n.__wbg_get_basemigrationdata_backupVersion(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get deviceId() {
    const e = n.__wbg_get_basemigrationdata_deviceId(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  get pickledAccount() {
    let e, t;
    try {
      const r = n.__wbg_get_basemigrationdata_pickledAccount(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get privateCrossSigningMasterKey() {
    const e = n.__wbg_get_basemigrationdata_privateCrossSigningMasterKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get privateCrossSigningSelfSigningKey() {
    const e = n.__wbg_get_basemigrationdata_privateCrossSigningSelfSigningKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get privateCrossSigningUserSigningKey() {
    const e = n.__wbg_get_basemigrationdata_privateCrossSigningUserSigningKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get userId() {
    const e = n.__wbg_get_basemigrationdata_userId(this.__wbg_ptr);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  set backupRecoveryKey(e) {
    var t = h(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_basemigrationdata_backupRecoveryKey(this.__wbg_ptr, t, r);
  }
  set backupVersion(e) {
    var t = h(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_basemigrationdata_backupVersion(this.__wbg_ptr, t, r);
  }
  set deviceId(e) {
    let t = 0;
    h(e) || (f(e, C), t = e.__destroy_into_raw()), n.__wbg_set_basemigrationdata_deviceId(this.__wbg_ptr, t);
  }
  set pickledAccount(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_basemigrationdata_pickledAccount(this.__wbg_ptr, t, r);
  }
  set privateCrossSigningMasterKey(e) {
    var t = h(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_basemigrationdata_privateCrossSigningMasterKey(this.__wbg_ptr, t, r);
  }
  set privateCrossSigningSelfSigningKey(e) {
    var t = h(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_basemigrationdata_privateCrossSigningSelfSigningKey(this.__wbg_ptr, t, r);
  }
  set privateCrossSigningUserSigningKey(e) {
    var t = h(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_basemigrationdata_privateCrossSigningUserSigningKey(this.__wbg_ptr, t, r);
  }
  set userId(e) {
    let t = 0;
    h(e) || (f(e, w), t = e.__destroy_into_raw()), n.__wbg_set_basemigrationdata_userId(this.__wbg_ptr, t);
  }
}
Symbol.dispose && (At.prototype[Symbol.dispose] = At.prototype.free);
class se {
  static __wrap(e) {
    const t = Object.create(se.prototype);
    return t.__wbg_ptr = e, Kn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Kn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_cancelinfo_free(e, 0);
  }
  cancelCode() {
    let e, t;
    try {
      const r = n.cancelinfo_cancelCode(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  cancelledbyUs() {
    return n.cancelinfo_cancelledbyUs(this.__wbg_ptr) !== 0;
  }
  reason() {
    return n.cancelinfo_reason(this.__wbg_ptr);
  }
}
Symbol.dispose && (se.prototype[Symbol.dispose] = se.prototype.free);
class Je {
  static __wrap(e) {
    const t = Object.create(Je.prototype);
    return t.__wbg_ptr = e, In.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, In.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_checkcode_free(e, 0);
  }
  as_bytes() {
    const e = n.checkcode_as_bytes(this.__wbg_ptr);
    var t = z(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  to_digit() {
    return n.checkcode_to_digit(this.__wbg_ptr);
  }
}
Symbol.dispose && (Je.prototype[Symbol.dispose] = Je.prototype.free);
class B {
  static __wrap(e) {
    const t = Object.create(B.prototype);
    return t.__wbg_ptr = e, Cn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Cn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_collectstrategy_free(e, 0);
  }
  static allDevices() {
    const e = n.collectstrategy_allDevices();
    return B.__wrap(e);
  }
  static deviceBasedStrategy(e, t) {
    const r = n.collectstrategy_deviceBasedStrategy(e, t);
    return B.__wrap(r);
  }
  eq(e) {
    return f(e, B), n.collectstrategy_eq(this.__wbg_ptr, e.__wbg_ptr) !== 0;
  }
  static errorOnUnverifiedUserProblem() {
    const e = n.collectstrategy_errorOnUnverifiedUserProblem();
    return B.__wrap(e);
  }
  static identityBasedStrategy() {
    const e = n.collectstrategy_identityBasedStrategy();
    return B.__wrap(e);
  }
  static onlyTrustedDevices() {
    const e = n.collectstrategy_onlyTrustedDevices();
    return B.__wrap(e);
  }
}
Symbol.dispose && (B.prototype[Symbol.dispose] = B.prototype.free);
class He {
  static __wrap(e) {
    const t = Object.create(He.prototype);
    return t.__wbg_ptr = e, Dn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Dn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_crosssigningbootstraprequests_free(e, 0);
  }
  get uploadKeysRequest() {
    return n.__wbg_get_crosssigningbootstraprequests_uploadKeysRequest(this.__wbg_ptr);
  }
  get uploadSignaturesRequest() {
    const e = n.__wbg_get_crosssigningbootstraprequests_uploadSignaturesRequest(this.__wbg_ptr);
    return pe.__wrap(e);
  }
  get uploadSigningKeysRequest() {
    const e = n.__wbg_get_crosssigningbootstraprequests_uploadSigningKeysRequest(this.__wbg_ptr);
    return Ae.__wrap(e);
  }
}
Symbol.dispose && (He.prototype[Symbol.dispose] = He.prototype.free);
class Qe {
  static __wrap(e) {
    const t = Object.create(Qe.prototype);
    return t.__wbg_ptr = e, En.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, En.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_crosssigningkeyexport_free(e, 0);
  }
  get masterKey() {
    const e = n.crosssigningkeyexport_masterKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get self_signing_key() {
    const e = n.crosssigningkeyexport_self_signing_key(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get userSigningKey() {
    const e = n.crosssigningkeyexport_userSigningKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
}
Symbol.dispose && (Qe.prototype[Symbol.dispose] = Qe.prototype.free);
class $e {
  static __wrap(e) {
    const t = Object.create($e.prototype);
    return t.__wbg_ptr = e, On.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, On.unregister(this), e;
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
Symbol.dispose && ($e.prototype[Symbol.dispose] = $e.prototype.free);
class O {
  static __wrap(e) {
    const t = Object.create(O.prototype);
    return t.__wbg_ptr = e, pr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, pr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_curve25519publickey_free(e, 0);
  }
  get length() {
    return n.curve25519publickey_length(this.__wbg_ptr) >>> 0;
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.curve25519publickey_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0], pr.register(this, this.__wbg_ptr, this), this;
  }
  toBase64() {
    let e, t;
    try {
      const r = n.curve25519publickey_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (O.prototype[Symbol.dispose] = O.prototype.free);
class G {
  static __wrap(e) {
    const t = Object.create(G.prototype);
    return t.__wbg_ptr = e, Mn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Mn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_curve25519secretkey_free(e, 0);
  }
  static fromBase64(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.curve25519secretkey_fromBase64(t, r);
    if (s[2]) throw l(s[1]);
    return G.__wrap(s[0]);
  }
  static fromUint8Array(e) {
    const t = Z(e, n.__wbindgen_malloc), r = d, s = n.curve25519secretkey_fromUint8Array(t, r);
    if (s[2]) throw l(s[1]);
    return G.__wrap(s[0]);
  }
  static new() {
    const e = n.curve25519secretkey_new();
    return G.__wrap(e);
  }
  toBase64() {
    let e, t;
    try {
      const r = n.curve25519secretkey_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  toUint8Array() {
    const e = n.curve25519secretkey_toUint8Array(this.__wbg_ptr);
    var t = z(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
}
Symbol.dispose && (G.prototype[Symbol.dispose] = G.prototype.free);
class Ye {
  static __wrap(e) {
    const t = Object.create(Ye.prototype);
    return t.__wbg_ptr = e, Bn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Bn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_decryptedroomevent_free(e, 0);
  }
  get forwarder() {
    const e = n.decryptedroomevent_forwarder(this.__wbg_ptr);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  get forwarderDevice() {
    const e = n.decryptedroomevent_forwarderDevice(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  get forwardingCurve25519KeyChain() {
    return n.decryptedroomevent_forwardingCurve25519KeyChain(this.__wbg_ptr);
  }
  get sender() {
    const e = n.decryptedroomevent_sender(this.__wbg_ptr);
    return w.__wrap(e);
  }
  get senderClaimedEd25519Key() {
    return n.decryptedroomevent_senderClaimedEd25519Key(this.__wbg_ptr);
  }
  get senderCurve25519Key() {
    let e, t;
    try {
      const r = n.decryptedroomevent_senderCurve25519Key(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get senderDevice() {
    const e = n.decryptedroomevent_senderDevice(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  shieldState(e) {
    const t = n.decryptedroomevent_shieldState(this.__wbg_ptr, e);
    return Te.__wrap(t);
  }
  get event() {
    return n.__wbg_get_decryptedroomevent_event(this.__wbg_ptr);
  }
}
Symbol.dispose && (Ye.prototype[Symbol.dispose] = Ye.prototype.free);
class Ze {
  static __wrap(e) {
    const t = Object.create(Ze.prototype);
    return t.__wbg_ptr = e, qn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_decryptedtodeviceevent_free(e, 0);
  }
  get type() {
    return n.decryptedtodeviceevent_type(this.__wbg_ptr);
  }
  get encryptionInfo() {
    const e = n.__wbg_get_decryptedtodeviceevent_encryptionInfo(this.__wbg_ptr);
    return It.__wrap(e);
  }
  get rawEvent() {
    return n.__wbg_get_decryptedtodeviceevent_rawEvent(this.__wbg_ptr);
  }
}
Symbol.dispose && (Ze.prototype[Symbol.dispose] = Ze.prototype.free);
const te = Object.freeze({ MissingRoomKey: 0, 0: "MissingRoomKey", UnknownMessageIndex: 1, 1: "UnknownMessageIndex", MismatchedIdentityKeys: 2, 2: "MismatchedIdentityKeys", UnknownSenderDevice: 3, 3: "UnknownSenderDevice", UnsignedSenderDevice: 4, 4: "UnsignedSenderDevice", SenderIdentityVerificationViolation: 5, 5: "SenderIdentityVerificationViolation", UnableToDecrypt: 6, 6: "UnableToDecrypt", MismatchedSender: 7, 7: "MismatchedSender" });
class ve {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Fn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_decryptionsettings_free(e, 0);
  }
  constructor(e) {
    const t = n.decryptionsettings_new(e);
    return this.__wbg_ptr = t, Fn.register(this, this.__wbg_ptr, this), this;
  }
  get sender_device_trust_requirement() {
    return n.__wbg_get_decryptionsettings_sender_device_trust_requirement(this.__wbg_ptr);
  }
  set sender_device_trust_requirement(e) {
    n.__wbg_set_decryptionsettings_sender_device_trust_requirement(this.__wbg_ptr, e);
  }
}
Symbol.dispose && (ve.prototype[Symbol.dispose] = ve.prototype.free);
class Xe {
  static __wrap(e) {
    const t = Object.create(Xe.prototype);
    return t.__wbg_ptr = e, zn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_dehydrateddevice_free(e, 0);
  }
  keysForUpload(e, t) {
    return f(t, j), n.dehydrateddevice_keysForUpload(this.__wbg_ptr, e, t.__wbg_ptr);
  }
}
Symbol.dispose && (Xe.prototype[Symbol.dispose] = Xe.prototype.free);
class j {
  static __wrap(e) {
    const t = Object.create(j.prototype);
    return t.__wbg_ptr = e, Un.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Un.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_dehydrateddevicekey_free(e, 0);
  }
  static createKeyFromArray(e) {
    const t = n.dehydrateddevicekey_createKeyFromArray(e);
    if (t[2]) throw l(t[1]);
    return j.__wrap(t[0]);
  }
  static createRandomKey() {
    const e = n.dehydrateddevicekey_createRandomKey();
    return j.__wrap(e);
  }
  toBase64() {
    return n.dehydrateddevicekey_toBase64(this.__wbg_ptr);
  }
}
Symbol.dispose && (j.prototype[Symbol.dispose] = j.prototype.free);
class et {
  static __wrap(e) {
    const t = Object.create(et.prototype);
    return t.__wbg_ptr = e, Vn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Vn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_dehydrateddevices_free(e, 0);
  }
  create() {
    return n.dehydrateddevices_create(this.__wbg_ptr);
  }
  deleteDehydratedDeviceKey() {
    return n.dehydrateddevices_deleteDehydratedDeviceKey(this.__wbg_ptr);
  }
  getDehydratedDeviceKey() {
    return n.dehydrateddevices_getDehydratedDeviceKey(this.__wbg_ptr);
  }
  rehydrate(e, t, r) {
    f(e, j), f(t, C);
    const s = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d;
    return n.dehydrateddevices_rehydrate(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, s, o);
  }
  saveDehydratedDeviceKey(e) {
    return f(e, j), n.dehydrateddevices_saveDehydratedDeviceKey(this.__wbg_ptr, e.__wbg_ptr);
  }
}
Symbol.dispose && (et.prototype[Symbol.dispose] = et.prototype.free);
class ke {
  static __wrap(e) {
    const t = Object.create(ke.prototype);
    return t.__wbg_ptr = e, Tn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Tn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_device_free(e, 0);
  }
  get algorithms() {
    return n.device_algorithms(this.__wbg_ptr);
  }
  get curve25519Key() {
    const e = n.device_curve25519Key(this.__wbg_ptr);
    return e === 0 ? void 0 : O.__wrap(e);
  }
  get deviceId() {
    const e = n.device_deviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  get displayName() {
    const e = n.device_displayName(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get ed25519Key() {
    const e = n.device_ed25519Key(this.__wbg_ptr);
    return e === 0 ? void 0 : H.__wrap(e);
  }
  encryptToDeviceEvent(e, t, r) {
    const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d;
    let _ = 0;
    return h(r) || (f(r, B), _ = r.__destroy_into_raw()), n.device_encryptToDeviceEvent(this.__wbg_ptr, s, o, t, _);
  }
  firstTimeSeen() {
    const e = n.device_firstTimeSeen(this.__wbg_ptr);
    return BigInt.asUintN(64, e);
  }
  getKey(e) {
    const t = n.device_getKey(this.__wbg_ptr, e);
    if (t[2]) throw l(t[1]);
    return t[0] === 0 ? void 0 : Se.__wrap(t[0]);
  }
  isBlacklisted() {
    return n.device_isBlacklisted(this.__wbg_ptr) !== 0;
  }
  isCrossSignedByOwner() {
    return n.device_isCrossSignedByOwner(this.__wbg_ptr) !== 0;
  }
  isCrossSigningTrusted() {
    return n.device_isCrossSigningTrusted(this.__wbg_ptr) !== 0;
  }
  get isDehydrated() {
    return n.device_isDehydrated(this.__wbg_ptr) !== 0;
  }
  isDeleted() {
    return n.device_isDeleted(this.__wbg_ptr) !== 0;
  }
  isLocallyTrusted() {
    return n.device_isLocallyTrusted(this.__wbg_ptr) !== 0;
  }
  isVerified() {
    return n.device_isVerified(this.__wbg_ptr) !== 0;
  }
  get keys() {
    return n.device_keys(this.__wbg_ptr);
  }
  get localTrustState() {
    return n.device_localTrustState(this.__wbg_ptr);
  }
  requestVerification(e) {
    var t = h(e) ? 0 : V(e, n.__wbindgen_malloc), r = d;
    const s = n.device_requestVerification(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return l(s[0]);
  }
  setLocalTrust(e) {
    return n.device_setLocalTrust(this.__wbg_ptr, e);
  }
  get signatures() {
    const e = n.device_signatures(this.__wbg_ptr);
    return je.__wrap(e);
  }
  get userId() {
    const e = n.device_userId(this.__wbg_ptr);
    return w.__wrap(e);
  }
  verify() {
    return n.device_verify(this.__wbg_ptr);
  }
}
Symbol.dispose && (ke.prototype[Symbol.dispose] = ke.prototype.free);
class C {
  static __wrap(e) {
    const t = Object.create(C.prototype);
    return t.__wbg_ptr = e, yr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, yr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_deviceid_free(e, 0);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.deviceid_new(t, r);
    return this.__wbg_ptr = s, yr.register(this, this.__wbg_ptr, this), this;
  }
  toString() {
    let e, t;
    try {
      const r = n.deviceid_toString(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (C.prototype[Symbol.dispose] = C.prototype.free);
class Se {
  static __wrap(e) {
    const t = Object.create(Se.prototype);
    return t.__wbg_ptr = e, jn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, jn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_devicekey_free(e, 0);
  }
  get curve25519() {
    const e = n.devicekey_curve25519(this.__wbg_ptr);
    return e === 0 ? void 0 : O.__wrap(e);
  }
  get ed25519() {
    const e = n.devicekey_ed25519(this.__wbg_ptr);
    return e === 0 ? void 0 : H.__wrap(e);
  }
  get name() {
    return n.devicekey_name(this.__wbg_ptr);
  }
  toBase64() {
    let e, t;
    try {
      const r = n.devicekey_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get unknown() {
    const e = n.devicekey_unknown(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
}
Symbol.dispose && (Se.prototype[Symbol.dispose] = Se.prototype.free);
class tt {
  static __wrap(e) {
    const t = Object.create(tt.prototype);
    return t.__wbg_ptr = e, Pn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Pn.unregister(this), e;
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
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (tt.prototype[Symbol.dispose] = tt.prototype.free);
const Rs = Object.freeze({ Ed25519: 0, 0: "Ed25519", Curve25519: 1, 1: "Curve25519", Unknown: 3, 3: "Unknown" });
class oe {
  static __wrap(e) {
    const t = Object.create(oe.prototype);
    return t.__wbg_ptr = e, br.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, br.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_devicekeyid_free(e, 0);
  }
  get algorithm() {
    const e = n.devicekeyid_algorithm(this.__wbg_ptr);
    return tt.__wrap(e);
  }
  get deviceId() {
    const e = n.devicekeyid_deviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.devicekeyid_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0], br.register(this, this.__wbg_ptr, this), this;
  }
  toString() {
    let e, t;
    try {
      const r = n.devicekeyid_toString(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (oe.prototype[Symbol.dispose] = oe.prototype.free);
const Ks = Object.freeze({ Curve25519: 0, 0: "Curve25519", Ed25519: 1, 1: "Ed25519", Unknown: 2, 2: "Unknown" });
class rt {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_devicelists_free(e, 0);
  }
  get changed() {
    const e = n.devicelists_changed(this.__wbg_ptr);
    var t = Mt(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 4, 4), t;
  }
  isEmpty() {
    return n.devicelists_isEmpty(this.__wbg_ptr) !== 0;
  }
  get left() {
    const e = n.devicelists_left(this.__wbg_ptr);
    var t = Mt(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 4, 4), t;
  }
  constructor(e, t) {
    var r = h(e) ? 0 : V(e, n.__wbindgen_malloc), s = d, o = h(t) ? 0 : V(t, n.__wbindgen_malloc), _ = d;
    const a = n.devicelists_new(r, s, o, _);
    if (a[2]) throw l(a[1]);
    return this.__wbg_ptr = a[0], xn.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (rt.prototype[Symbol.dispose] = rt.prototype.free);
class Nr {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, An.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_ecies_free(e, 0);
  }
  establish_inbound_channel(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.ecies_establish_inbound_channel(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return _t.__wrap(s[0]);
  }
  establish_outbound_channel(e, t) {
    f(e, O);
    const r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d, o = n.ecies_establish_outbound_channel(this.__wbg_ptr, e.__wbg_ptr, r, s);
    if (o[2]) throw l(o[1]);
    return ut.__wrap(o[0]);
  }
  constructor() {
    const e = n.ecies_new();
    return this.__wbg_ptr = e, An.register(this, this.__wbg_ptr, this), this;
  }
  public_key() {
    const e = n.ecies_public_key(this.__wbg_ptr);
    return O.__wrap(e);
  }
}
Symbol.dispose && (Nr.prototype[Symbol.dispose] = Nr.prototype.free);
class H {
  static __wrap(e) {
    const t = Object.create(H.prototype);
    return t.__wbg_ptr = e, Nn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Nn.unregister(this), e;
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
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (H.prototype[Symbol.dispose] = H.prototype.free);
class _e {
  static __wrap(e) {
    const t = Object.create(_e.prototype);
    return t.__wbg_ptr = e, fr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, fr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_ed25519signature_free(e, 0);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.ed25519signature_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0], fr.register(this, this.__wbg_ptr, this), this;
  }
  toBase64() {
    let e, t;
    try {
      const r = n.ed25519signature_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (_e.prototype[Symbol.dispose] = _e.prototype.free);
class nt {
  static __wrap(e) {
    const t = Object.create(nt.prototype);
    return t.__wbg_ptr = e, Ln.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ln.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_emoji_free(e, 0);
  }
  get description() {
    return n.emoji_description(this.__wbg_ptr);
  }
  get symbol() {
    return n.emoji_symbol(this.__wbg_ptr);
  }
}
Symbol.dispose && (nt.prototype[Symbol.dispose] = nt.prototype.free);
class ae {
  static __wrap(e) {
    const t = Object.create(ae.prototype);
    return t.__wbg_ptr = e, wr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, wr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_encryptedattachment_free(e, 0);
  }
  get encryptedData() {
    const e = n.encryptedattachment_encryptedData(this.__wbg_ptr);
    var t = z(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  get hasMediaEncryptionInfoBeenConsumed() {
    return n.encryptedattachment_hasMediaEncryptionInfoBeenConsumed(this.__wbg_ptr) !== 0;
  }
  get mediaEncryptionInfo() {
    const e = n.encryptedattachment_mediaEncryptionInfo(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  constructor(e, t) {
    const r = Z(e, n.__wbindgen_malloc), s = d, o = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), _ = d, a = n.encryptedattachment_new(r, s, o, _);
    if (a[2]) throw l(a[1]);
    return this.__wbg_ptr = a[0], wr.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (ae.prototype[Symbol.dispose] = ae.prototype.free);
const it = Object.freeze({ OlmV1Curve25519AesSha2: 0, 0: "OlmV1Curve25519AesSha2", MegolmV1AesSha2: 1, 1: "MegolmV1AesSha2", Unknown: 2, 2: "Unknown" });
class st {
  static __wrap(e) {
    const t = Object.create(st.prototype);
    return t.__wbg_ptr = e, Wn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Wn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_encryptioninfo_free(e, 0);
  }
  shieldState(e) {
    const t = n.encryptioninfo_shieldState(this.__wbg_ptr, e);
    return Te.__wrap(t);
  }
  get forwarderDevice() {
    const e = n.__wbg_get_encryptioninfo_forwarderDevice(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  get forwarder() {
    const e = n.__wbg_get_encryptioninfo_forwarder(this.__wbg_ptr);
    return e === 0 ? void 0 : w.__wrap(e);
  }
  get senderClaimedEd25519Key() {
    const e = n.__wbg_get_encryptioninfo_senderClaimedEd25519Key(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get senderCurve25519Key() {
    let e, t;
    try {
      const r = n.__wbg_get_encryptioninfo_senderCurve25519Key(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get senderDevice() {
    const e = n.__wbg_get_encryptioninfo_senderDevice(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  get sender() {
    const e = n.__wbg_get_encryptioninfo_sender(this.__wbg_ptr);
    return w.__wrap(e);
  }
  set forwarderDevice(e) {
    let t = 0;
    h(e) || (f(e, C), t = e.__destroy_into_raw()), n.__wbg_set_encryptioninfo_forwarderDevice(this.__wbg_ptr, t);
  }
  set forwarder(e) {
    let t = 0;
    h(e) || (f(e, w), t = e.__destroy_into_raw()), n.__wbg_set_encryptioninfo_forwarder(this.__wbg_ptr, t);
  }
  set senderClaimedEd25519Key(e) {
    var t = h(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_encryptioninfo_senderClaimedEd25519Key(this.__wbg_ptr, t, r);
  }
  set senderCurve25519Key(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_encryptioninfo_senderCurve25519Key(this.__wbg_ptr, t, r);
  }
  set senderDevice(e) {
    let t = 0;
    h(e) || (f(e, C), t = e.__destroy_into_raw()), n.__wbg_set_encryptioninfo_senderDevice(this.__wbg_ptr, t);
  }
  set sender(e) {
    f(e, w);
    var t = e.__destroy_into_raw();
    n.__wbg_set_encryptioninfo_sender(this.__wbg_ptr, t);
  }
}
Symbol.dispose && (st.prototype[Symbol.dispose] = st.prototype.free);
class Nt {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Gn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_encryptionsettings_free(e, 0);
  }
  constructor() {
    const e = n.encryptionsettings_new();
    return this.__wbg_ptr = e, Gn.register(this, this.__wbg_ptr, this), this;
  }
  get algorithm() {
    return n.__wbg_get_encryptionsettings_algorithm(this.__wbg_ptr);
  }
  get encryptStateEvents() {
    return n.__wbg_get_encryptionsettings_encryptStateEvents(this.__wbg_ptr) !== 0;
  }
  get historyVisibility() {
    return n.__wbg_get_encryptionsettings_historyVisibility(this.__wbg_ptr);
  }
  get rotationPeriodMessages() {
    const e = n.__wbg_get_encryptionsettings_rotationPeriodMessages(this.__wbg_ptr);
    return BigInt.asUintN(64, e);
  }
  get rotationPeriod() {
    const e = n.__wbg_get_encryptionsettings_rotationPeriod(this.__wbg_ptr);
    return BigInt.asUintN(64, e);
  }
  get sharingStrategy() {
    const e = n.__wbg_get_encryptionsettings_sharingStrategy(this.__wbg_ptr);
    return B.__wrap(e);
  }
  set algorithm(e) {
    n.__wbg_set_encryptionsettings_algorithm(this.__wbg_ptr, e);
  }
  set encryptStateEvents(e) {
    n.__wbg_set_encryptionsettings_encryptStateEvents(this.__wbg_ptr, e);
  }
  set historyVisibility(e) {
    n.__wbg_set_encryptionsettings_historyVisibility(this.__wbg_ptr, e);
  }
  set rotationPeriodMessages(e) {
    n.__wbg_set_encryptionsettings_rotationPeriodMessages(this.__wbg_ptr, e);
  }
  set rotationPeriod(e) {
    n.__wbg_set_encryptionsettings_rotationPeriod(this.__wbg_ptr, e);
  }
  set sharingStrategy(e) {
    f(e, B);
    var t = e.__destroy_into_raw();
    n.__wbg_set_encryptionsettings_sharingStrategy(this.__wbg_ptr, t);
  }
}
Symbol.dispose && (Nt.prototype[Symbol.dispose] = Nt.prototype.free);
class Q {
  static __wrap(e) {
    const t = Object.create(Q.prototype);
    return t.__wbg_ptr = e, Jn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Jn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_establishedecies_free(e, 0);
  }
  check_code() {
    const e = n.establishedecies_check_code(this.__wbg_ptr);
    return Je.__wrap(e);
  }
  decrypt(e) {
    let t, r;
    try {
      const _ = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), a = d, c = n.establishedecies_decrypt(this.__wbg_ptr, _, a);
      var s = c[0], o = c[1];
      if (c[3]) throw s = 0, o = 0, l(c[2]);
      return t = s, r = o, b(s, o);
    } finally {
      n.__wbindgen_free(t, r, 1);
    }
  }
  encrypt(e) {
    let t, r;
    try {
      const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d, _ = n.establishedecies_encrypt(this.__wbg_ptr, s, o);
      return t = _[0], r = _[1], b(_[0], _[1]);
    } finally {
      n.__wbindgen_free(t, r, 1);
    }
  }
  public_key() {
    const e = n.establishedecies_public_key(this.__wbg_ptr);
    return O.__wrap(e);
  }
}
Symbol.dispose && (Q.prototype[Symbol.dispose] = Q.prototype.free);
class Lt {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Hn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_eventid_free(e, 0);
  }
  get localpart() {
    let e, t;
    try {
      const r = n.eventid_localpart(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.eventid_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0], Hn.register(this, this.__wbg_ptr, this), this;
  }
  get serverName() {
    const e = n.eventid_serverName(this.__wbg_ptr);
    return e === 0 ? void 0 : Ve.__wrap(e);
  }
  toString() {
    let e, t;
    try {
      const r = n.eventid_toString(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (Lt.prototype[Symbol.dispose] = Lt.prototype.free);
const Ut = Object.freeze({ Invited: 0, 0: "Invited", Joined: 1, 1: "Joined", Shared: 2, 2: "Shared", WorldReadable: 3, 3: "WorldReadable" });
class ot {
  static __wrap(e) {
    const t = Object.create(ot.prototype);
    return t.__wbg_ptr = e, Qn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Qn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_identitykeys_free(e, 0);
  }
  get curve25519() {
    const e = n.__wbg_get_identitykeys_curve25519(this.__wbg_ptr);
    return O.__wrap(e);
  }
  get ed25519() {
    const e = n.__wbg_get_identitykeys_ed25519(this.__wbg_ptr);
    return H.__wrap(e);
  }
  set curve25519(e) {
    f(e, O);
    var t = e.__destroy_into_raw();
    n.__wbg_set_identitykeys_curve25519(this.__wbg_ptr, t);
  }
  set ed25519(e) {
    f(e, H);
    var t = e.__destroy_into_raw();
    n.__wbg_set_identitykeys_ed25519(this.__wbg_ptr, t);
  }
}
Symbol.dispose && (ot.prototype[Symbol.dispose] = ot.prototype.free);
class _t {
  static __wrap(e) {
    const t = Object.create(_t.prototype);
    return t.__wbg_ptr = e, $n.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $n.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_inboundcreationresult_free(e, 0);
  }
  get channel() {
    const e = n.__wbg_get_inboundcreationresult_channel(this.__wbg_ptr);
    return Q.__wrap(e);
  }
  get message() {
    let e, t;
    try {
      const r = n.__wbg_get_inboundcreationresult_message(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set channel(e) {
    f(e, Q);
    var t = e.__destroy_into_raw();
    n.__wbg_set_inboundcreationresult_channel(this.__wbg_ptr, t);
  }
  set message(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_inboundcreationresult_message(this.__wbg_ptr, t, r);
  }
}
Symbol.dispose && (_t.prototype[Symbol.dispose] = _t.prototype.free);
class at {
  static __wrap(e) {
    const t = Object.create(at.prototype);
    return t.__wbg_ptr = e, Yn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Yn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_inboundgroupsession_free(e, 0);
  }
  hasBeenImported() {
    return n.inboundgroupsession_hasBeenImported(this.__wbg_ptr) !== 0;
  }
  get roomId() {
    const e = n.inboundgroupsession_roomId(this.__wbg_ptr);
    return R.__wrap(e);
  }
  get senderKey() {
    const e = n.inboundgroupsession_senderKey(this.__wbg_ptr);
    return O.__wrap(e);
  }
  get sessionId() {
    let e, t;
    try {
      const r = n.inboundgroupsession_sessionId(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (at.prototype[Symbol.dispose] = at.prototype.free);
class ct {
  static __wrap(e) {
    const t = Object.create(ct.prototype);
    return t.__wbg_ptr = e, Zn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Zn.unregister(this), e;
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
Symbol.dispose && (ct.prototype[Symbol.dispose] = ct.prototype.free);
class Re {
  static __wrap(e) {
    const t = Object.create(Re.prototype);
    return t.__wbg_ptr = e, hr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, hr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_keysbackuprequest_free(e, 0);
  }
  get body() {
    return n.__wbg_get_keysbackuprequest_body(this.__wbg_ptr);
  }
  get id() {
    return n.__wbg_get_keysbackuprequest_id(this.__wbg_ptr);
  }
  get version() {
    return n.__wbg_get_keysbackuprequest_version(this.__wbg_ptr);
  }
  constructor(e, t, r) {
    const s = n.keysbackuprequest_new(e, t, r);
    return this.__wbg_ptr = s, hr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.keysbackuprequest_type(this.__wbg_ptr);
  }
}
Symbol.dispose && (Re.prototype[Symbol.dispose] = Re.prototype.free);
class Ke {
  static __wrap(e) {
    const t = Object.create(Ke.prototype);
    return t.__wbg_ptr = e, mr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, mr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_keysclaimrequest_free(e, 0);
  }
  get body() {
    return n.__wbg_get_keysclaimrequest_body(this.__wbg_ptr);
  }
  get id() {
    return n.__wbg_get_keysclaimrequest_id(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = n.keysclaimrequest_new(e, t);
    return this.__wbg_ptr = r, mr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.keysclaimrequest_type(this.__wbg_ptr);
  }
}
Symbol.dispose && (Ke.prototype[Symbol.dispose] = Ke.prototype.free);
class ce {
  static __wrap(e) {
    const t = Object.create(ce.prototype);
    return t.__wbg_ptr = e, vr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, vr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_keysqueryrequest_free(e, 0);
  }
  get body() {
    return n.__wbg_get_keysqueryrequest_body(this.__wbg_ptr);
  }
  get id() {
    return n.__wbg_get_keysqueryrequest_id(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = n.keysqueryrequest_new(e, t);
    return this.__wbg_ptr = r, vr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.keysqueryrequest_type(this.__wbg_ptr);
  }
}
Symbol.dispose && (ce.prototype[Symbol.dispose] = ce.prototype.free);
class Ie {
  static __wrap(e) {
    const t = Object.create(Ie.prototype);
    return t.__wbg_ptr = e, kr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, kr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_keysuploadrequest_free(e, 0);
  }
  get body() {
    return n.__wbg_get_keysuploadrequest_body(this.__wbg_ptr);
  }
  get id() {
    return n.__wbg_get_keysuploadrequest_id(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = n.keysuploadrequest_new(e, t);
    return this.__wbg_ptr = r, kr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.keysuploadrequest_type(this.__wbg_ptr);
  }
}
Symbol.dispose && (Ie.prototype[Symbol.dispose] = Ie.prototype.free);
const Lr = Object.freeze({ Verified: 0, 0: "Verified", BlackListed: 1, 1: "BlackListed", Ignored: 2, 2: "Ignored", Unset: 3, 3: "Unset" }), Is = Object.freeze({ Trace: 0, 0: "Trace", Debug: 1, 1: "Debug", Info: 2, 2: "Info", Warn: 3, 3: "Warn", Error: 4, 4: "Error" });
class Ce {
  static __wrap(e) {
    const t = Object.create(Ce.prototype);
    return t.__wbg_ptr = e, Xn.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Xn.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_maybesignature_free(e, 0);
  }
  get invalidSignatureSource() {
    const e = n.maybesignature_invalidSignatureSource(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  isInvalid() {
    return n.maybesignature_isInvalid(this.__wbg_ptr) !== 0;
  }
  isValid() {
    return n.maybesignature_isValid(this.__wbg_ptr) !== 0;
  }
  get signature() {
    const e = n.maybesignature_signature(this.__wbg_ptr);
    return e === 0 ? void 0 : Rt.__wrap(e);
  }
}
Symbol.dispose && (Ce.prototype[Symbol.dispose] = Ce.prototype.free);
class ge {
  static __wrap(e) {
    const t = Object.create(ge.prototype);
    return t.__wbg_ptr = e, ei.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ei.unregister(this), e;
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
    const e = n.megolmdecryptionerror_maybe_withheld(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  static unable_to_decrypt(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.megolmdecryptionerror_unable_to_decrypt(t, r);
    return ge.__wrap(s);
  }
  get withheldCode() {
    const e = n.megolmdecryptionerror_withheldCode(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
}
Symbol.dispose && (ge.prototype[Symbol.dispose] = ge.prototype.free);
class gt {
  static __wrap(e) {
    const t = Object.create(gt.prototype);
    return t.__wbg_ptr = e, ti.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ti.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_megolmv1backupkey_free(e, 0);
  }
  get algorithm() {
    return n.megolmv1backupkey_algorithm(this.__wbg_ptr);
  }
  get publicKeyBase64() {
    return n.megolmv1backupkey_publicKeyBase64(this.__wbg_ptr);
  }
}
Symbol.dispose && (gt.prototype[Symbol.dispose] = gt.prototype.free);
class dt {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, lg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_migration_free(e, 0);
  }
  static migrateBaseData(e, t, r, s) {
    return f(e, At), f(r, P), n.migration_migrateBaseData(e.__wbg_ptr, t, r.__wbg_ptr, h(s) ? 0 : E(s));
  }
  static migrateMegolmSessions(e, t, r, s) {
    const o = V(e, n.__wbindgen_malloc), _ = d;
    f(r, P);
    const a = n.migration_migrateMegolmSessions(o, _, t, r.__wbg_ptr, h(s) ? 0 : E(s));
    if (a[2]) throw l(a[1]);
    return l(a[0]);
  }
  static migrateOlmSessions(e, t, r, s) {
    const o = V(e, n.__wbindgen_malloc), _ = d;
    f(r, P);
    const a = n.migration_migrateOlmSessions(o, _, t, r.__wbg_ptr, h(s) ? 0 : E(s));
    if (a[2]) throw l(a[1]);
    return l(a[0]);
  }
}
Symbol.dispose && (dt.prototype[Symbol.dispose] = dt.prototype.free);
class De {
  static __wrap(e) {
    const t = Object.create(De.prototype);
    return t.__wbg_ptr = e, ri.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ri.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_msc4108intentdata_free(e, 0);
  }
  get rendezvousUrl() {
    let e, t;
    try {
      const r = n.__wbg_get_msc4108intentdata_rendezvousUrl(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get serverName() {
    const e = n.__wbg_get_msc4108intentdata_serverName(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  set rendezvousUrl(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_msc4108intentdata_rendezvousUrl(this.__wbg_ptr, t, r);
  }
  set serverName(e) {
    var t = h(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_msc4108intentdata_serverName(this.__wbg_ptr, t, r);
  }
}
Symbol.dispose && (De.prototype[Symbol.dispose] = De.prototype.free);
class Ee {
  static __wrap(e) {
    const t = Object.create(Ee.prototype);
    return t.__wbg_ptr = e, ni.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ni.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_msc4388intentdata_free(e, 0);
  }
  get baseUrl() {
    let e, t;
    try {
      const r = n.__wbg_get_msc4388intentdata_baseUrl(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get rendezvousId() {
    let e, t;
    try {
      const r = n.__wbg_get_msc4388intentdata_rendezvousId(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set baseUrl(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_msc4388intentdata_baseUrl(this.__wbg_ptr, t, r);
  }
  set rendezvousId(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_msc4388intentdata_rendezvousId(this.__wbg_ptr, t, r);
  }
}
Symbol.dispose && (Ee.prototype[Symbol.dispose] = Ee.prototype.free);
class Oe {
  static __wrap(e) {
    const t = Object.create(Oe.prototype);
    return t.__wbg_ptr = e, Sr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Sr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_olmmachine_free(e, 0);
  }
  backupRoomKeys() {
    return n.olmmachine_backupRoomKeys(this.__wbg_ptr);
  }
  bootstrapCrossSigning(e) {
    return n.olmmachine_bootstrapCrossSigning(this.__wbg_ptr, e);
  }
  buildRoomKeyBundle(e) {
    return f(e, R), n.olmmachine_buildRoomKeyBundle(this.__wbg_ptr, e.__wbg_ptr);
  }
  clearRoomPendingKeyBundle(e) {
    return f(e, R), n.olmmachine_clearRoomPendingKeyBundle(this.__wbg_ptr, e.__wbg_ptr);
  }
  close() {
    const e = this.__destroy_into_raw();
    n.olmmachine_close(e);
  }
  crossSigningStatus() {
    return n.olmmachine_crossSigningStatus(this.__wbg_ptr);
  }
  static decryptExportedRoomKeys(e, t) {
    let r, s;
    try {
      const a = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), c = d, u = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), y = d, m = n.olmmachine_decryptExportedRoomKeys(a, c, u, y);
      var o = m[0], _ = m[1];
      if (m[3]) throw o = 0, _ = 0, l(m[2]);
      return r = o, s = _, b(o, _);
    } finally {
      n.__wbindgen_free(r, s, 1);
    }
  }
  decryptRoomEvent(e, t, r) {
    const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d;
    f(t, R), f(r, ve);
    const _ = n.olmmachine_decryptRoomEvent(this.__wbg_ptr, s, o, t.__wbg_ptr, r.__wbg_ptr);
    if (_[2]) throw l(_[1]);
    return l(_[0]);
  }
  dehydratedDevices() {
    const e = n.olmmachine_dehydratedDevices(this.__wbg_ptr);
    return et.__wrap(e);
  }
  deleteSecretsFromInbox(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    return n.olmmachine_deleteSecretsFromInbox(this.__wbg_ptr, t, r);
  }
  get deviceCreationTimeMs() {
    return n.olmmachine_deviceCreationTimeMs(this.__wbg_ptr);
  }
  get deviceId() {
    const e = n.olmmachine_deviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  disableBackup() {
    return n.olmmachine_disableBackup(this.__wbg_ptr);
  }
  get displayName() {
    return n.olmmachine_displayName(this.__wbg_ptr);
  }
  enableBackupV1(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d, o = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), _ = d, a = n.olmmachine_enableBackupV1(this.__wbg_ptr, r, s, o, _);
    if (a[2]) throw l(a[1]);
    return l(a[0]);
  }
  static encryptExportedRoomKeys(e, t, r) {
    let s, o;
    try {
      const c = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), u = d, y = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), m = d, k = n.olmmachine_encryptExportedRoomKeys(c, u, y, m, r);
      var _ = k[0], a = k[1];
      if (k[3]) throw _ = 0, a = 0, l(k[2]);
      return s = _, o = a, b(_, a);
    } finally {
      n.__wbindgen_free(s, o, 1);
    }
  }
  encryptRoomEvent(e, t, r) {
    f(e, R);
    const s = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d, _ = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), a = d, c = n.olmmachine_encryptRoomEvent(this.__wbg_ptr, e.__wbg_ptr, s, o, _, a);
    if (c[2]) throw l(c[1]);
    return l(c[0]);
  }
  encryptStateEvent(e, t, r, s) {
    f(e, R);
    const o = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), _ = d, a = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), c = d, u = p(s, n.__wbindgen_malloc, n.__wbindgen_realloc), y = d, m = n.olmmachine_encryptStateEvent(this.__wbg_ptr, e.__wbg_ptr, o, _, a, c, u, y);
    if (m[2]) throw l(m[1]);
    return l(m[0]);
  }
  exportCrossSigningKeys() {
    return n.olmmachine_exportCrossSigningKeys(this.__wbg_ptr);
  }
  exportRoomKeys(e) {
    return n.olmmachine_exportRoomKeys(this.__wbg_ptr, e);
  }
  exportSecretsBundle() {
    return n.olmmachine_exportSecretsBundle(this.__wbg_ptr);
  }
  getAllRoomsPendingKeyBundles() {
    return n.olmmachine_getAllRoomsPendingKeyBundles(this.__wbg_ptr);
  }
  getBackupKeys() {
    return n.olmmachine_getBackupKeys(this.__wbg_ptr);
  }
  getDevice(e, t, r) {
    return f(e, w), f(t, C), n.olmmachine_getDevice(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, !h(r), h(r) ? 0 : r);
  }
  getIdentity(e) {
    return f(e, w), n.olmmachine_getIdentity(this.__wbg_ptr, e.__wbg_ptr);
  }
  getMissingSessions(e) {
    const t = V(e, n.__wbindgen_malloc), r = d;
    return n.olmmachine_getMissingSessions(this.__wbg_ptr, t, r);
  }
  getPendingKeyBundleDetailsForRoom(e) {
    return f(e, R), n.olmmachine_getPendingKeyBundleDetailsForRoom(this.__wbg_ptr, e.__wbg_ptr);
  }
  getReceivedRoomKeyBundleData(e, t) {
    return f(e, R), f(t, w), n.olmmachine_getReceivedRoomKeyBundleData(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
  }
  getRoomEventEncryptionInfo(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d;
    f(t, R);
    const o = n.olmmachine_getRoomEventEncryptionInfo(this.__wbg_ptr, r, s, t.__wbg_ptr);
    if (o[2]) throw l(o[1]);
    return l(o[0]);
  }
  getRoomSettings(e) {
    return f(e, R), n.olmmachine_getRoomSettings(this.__wbg_ptr, e.__wbg_ptr);
  }
  getSecretsFromInbox(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    return n.olmmachine_getSecretsFromInbox(this.__wbg_ptr, t, r);
  }
  getUserDevices(e, t) {
    return f(e, w), n.olmmachine_getUserDevices(this.__wbg_ptr, e.__wbg_ptr, !h(t), h(t) ? 0 : t);
  }
  getVerification(e, t) {
    f(e, w);
    const r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d, o = n.olmmachine_getVerification(this.__wbg_ptr, e.__wbg_ptr, r, s);
    if (o[2]) throw l(o[1]);
    return l(o[0]);
  }
  getVerificationRequest(e, t) {
    f(e, w);
    const r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d, o = n.olmmachine_getVerificationRequest(this.__wbg_ptr, e.__wbg_ptr, r, s);
    return o === 0 ? void 0 : ye.__wrap(o);
  }
  getVerificationRequests(e) {
    return f(e, w), n.olmmachine_getVerificationRequests(this.__wbg_ptr, e.__wbg_ptr);
  }
  hasDownloadedAllRoomKeys(e) {
    return f(e, R), n.olmmachine_hasDownloadedAllRoomKeys(this.__wbg_ptr, e.__wbg_ptr);
  }
  get identityKeys() {
    const e = n.olmmachine_identityKeys(this.__wbg_ptr);
    return ot.__wrap(e);
  }
  importBackedUpRoomKeys(e, t, r) {
    const s = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d, _ = n.olmmachine_importBackedUpRoomKeys(this.__wbg_ptr, e, h(t) ? 0 : E(t), s, o);
    if (_[2]) throw l(_[1]);
    return l(_[0]);
  }
  importCrossSigningKeys(e, t, r) {
    var s = h(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d, _ = h(t) ? 0 : p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), a = d, c = h(r) ? 0 : p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), u = d;
    return n.olmmachine_importCrossSigningKeys(this.__wbg_ptr, s, o, _, a, c, u);
  }
  importExportedRoomKeys(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d, o = n.olmmachine_importExportedRoomKeys(this.__wbg_ptr, r, s, t);
    if (o[2]) throw l(o[1]);
    return l(o[0]);
  }
  importRoomKeys(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d, o = n.olmmachine_importRoomKeys(this.__wbg_ptr, r, s, t);
    if (o[2]) throw l(o[1]);
    return l(o[0]);
  }
  importSecretsBundle(e) {
    f(e, Y);
    var t = e.__destroy_into_raw();
    return n.olmmachine_importSecretsBundle(this.__wbg_ptr, t);
  }
  static initFromStore(e, t, r, s) {
    return f(e, w), f(t, C), f(r, P), n.olmmachine_initFromStore(e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, h(s) ? 0 : E(s));
  }
  static initialize(e, t, r, s, o) {
    f(e, w), f(t, C);
    var _ = h(r) ? 0 : p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), a = d, c = h(s) ? 0 : p(s, n.__wbindgen_malloc, n.__wbindgen_realloc), u = d;
    return n.olmmachine_initialize(e.__wbg_ptr, t.__wbg_ptr, _, a, c, u, h(o) ? 0 : E(o));
  }
  invalidateGroupSession(e) {
    return f(e, R), n.olmmachine_invalidateGroupSession(this.__wbg_ptr, e.__wbg_ptr);
  }
  isBackupEnabled() {
    return n.olmmachine_isBackupEnabled(this.__wbg_ptr);
  }
  markAllTrackedUsersAsDirty() {
    return n.olmmachine_markAllTrackedUsersAsDirty(this.__wbg_ptr);
  }
  markRequestAsSent(e, t, r) {
    const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d, _ = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), a = d, c = n.olmmachine_markRequestAsSent(this.__wbg_ptr, s, o, t, _, a);
    if (c[2]) throw l(c[1]);
    return l(c[0]);
  }
  constructor() {
    const e = n.olmmachine_new();
    if (e[2]) throw l(e[1]);
    return this.__wbg_ptr = e[0], Sr.register(this, this.__wbg_ptr, this), this;
  }
  outgoingRequests() {
    return n.olmmachine_outgoingRequests(this.__wbg_ptr);
  }
  pushSecretToVerifiedDevices(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    return n.olmmachine_pushSecretToVerifiedDevices(this.__wbg_ptr, t, r);
  }
  queryKeysForUsers(e) {
    const t = V(e, n.__wbindgen_malloc), r = d, s = n.olmmachine_queryKeysForUsers(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return ce.__wrap(s[0]);
  }
  receiveRoomKeyBundle(e, t) {
    f(e, Pe);
    var r = e.__destroy_into_raw();
    const s = Z(t, n.__wbindgen_malloc), o = d, _ = n.olmmachine_receiveRoomKeyBundle(this.__wbg_ptr, r, s, o);
    if (_[2]) throw l(_[1]);
    return l(_[0]);
  }
  receiveSyncChanges(e, t, r, s, o) {
    const _ = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), a = d;
    f(t, rt);
    let c = 0;
    h(o) || (f(o, ve), c = o.__destroy_into_raw());
    const u = n.olmmachine_receiveSyncChanges(this.__wbg_ptr, _, a, t.__wbg_ptr, r, h(s) ? 0 : E(s), c);
    if (u[2]) throw l(u[1]);
    return l(u[0]);
  }
  receiveVerificationEvent(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d;
    f(t, R);
    const o = n.olmmachine_receiveVerificationEvent(this.__wbg_ptr, r, s, t.__wbg_ptr);
    if (o[2]) throw l(o[1]);
    return l(o[0]);
  }
  registerDevicesUpdatedCallback(e) {
    n.olmmachine_registerDevicesUpdatedCallback(this.__wbg_ptr, e);
  }
  registerReceiveSecretCallback(e) {
    n.olmmachine_registerReceiveSecretCallback(this.__wbg_ptr, e);
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
  requestMissingSecretsIfNeeded() {
    return n.olmmachine_requestMissingSecretsIfNeeded(this.__wbg_ptr);
  }
  roomKeyCounts() {
    return n.olmmachine_roomKeyCounts(this.__wbg_ptr);
  }
  get roomKeyForwardingEnabled() {
    return n.olmmachine_roomKeyForwardingEnabled(this.__wbg_ptr) !== 0;
  }
  get roomKeyRequestsEnabled() {
    return n.olmmachine_roomKeyRequestsEnabled(this.__wbg_ptr) !== 0;
  }
  saveBackupDecryptionKey(e, t) {
    f(e, F);
    const r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d;
    return n.olmmachine_saveBackupDecryptionKey(this.__wbg_ptr, e.__wbg_ptr, r, s);
  }
  setHasDownloadedAllRoomKeys(e) {
    return f(e, R), n.olmmachine_setHasDownloadedAllRoomKeys(this.__wbg_ptr, e.__wbg_ptr);
  }
  setRoomSettings(e, t) {
    return f(e, R), f(t, $), n.olmmachine_setRoomSettings(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
  }
  set roomKeyForwardingEnabled(e) {
    n.olmmachine_set_roomKeyForwardingEnabled(this.__wbg_ptr, e);
  }
  set roomKeyRequestsEnabled(e) {
    n.olmmachine_set_roomKeyRequestsEnabled(this.__wbg_ptr, e);
  }
  shareRoomKey(e, t, r) {
    f(e, R);
    const s = V(t, n.__wbindgen_malloc), o = d;
    return f(r, Nt), n.olmmachine_shareRoomKey(this.__wbg_ptr, e.__wbg_ptr, s, o, r.__wbg_ptr);
  }
  shareRoomKeyBundleData(e, t, r, s, o) {
    f(e, w), f(t, R);
    const _ = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), a = d;
    var c = h(s) ? 0 : p(s, n.__wbindgen_malloc, n.__wbindgen_realloc), u = d;
    f(o, B);
    var y = o.__destroy_into_raw();
    const m = n.olmmachine_shareRoomKeyBundleData(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, _, a, c, u, y);
    if (m[2]) throw l(m[1]);
    return l(m[0]);
  }
  sign(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    return n.olmmachine_sign(this.__wbg_ptr, t, r);
  }
  storeRoomPendingKeyBundle(e, t) {
    return f(e, R), f(t, w), n.olmmachine_storeRoomPendingKeyBundle(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
  }
  trackedUsers() {
    const e = n.olmmachine_trackedUsers(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  updateTrackedUsers(e) {
    const t = V(e, n.__wbindgen_malloc), r = d;
    return n.olmmachine_updateTrackedUsers(this.__wbg_ptr, t, r);
  }
  get userId() {
    const e = n.olmmachine_userId(this.__wbg_ptr);
    return w.__wrap(e);
  }
  verifyBackup(e) {
    const t = n.olmmachine_verifyBackup(this.__wbg_ptr, e);
    if (t[2]) throw l(t[1]);
    return l(t[0]);
  }
}
Symbol.dispose && (Oe.prototype[Symbol.dispose] = Oe.prototype.free);
class Me {
  static __wrap(e) {
    const t = Object.create(Me.prototype);
    return t.__wbg_ptr = e, ii.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ii.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_otheruseridentity_free(e, 0);
  }
  hasVerificationViolation() {
    return n.otheruseridentity_hasVerificationViolation(this.__wbg_ptr) !== 0;
  }
  identityNeedsUserApproval() {
    return n.otheruseridentity_identityNeedsUserApproval(this.__wbg_ptr) !== 0;
  }
  isVerified() {
    return n.otheruseridentity_isVerified(this.__wbg_ptr) !== 0;
  }
  get masterKey() {
    let e, t;
    try {
      const o = n.otheruseridentity_masterKey(this.__wbg_ptr);
      var r = o[0], s = o[1];
      if (o[3]) throw r = 0, s = 0, l(o[2]);
      return e = r, t = s, b(r, s);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  pinCurrentMasterKey() {
    return n.otheruseridentity_pinCurrentMasterKey(this.__wbg_ptr);
  }
  requestVerification(e, t, r) {
    f(e, R), f(t, Lt);
    var s = h(r) ? 0 : V(r, n.__wbindgen_malloc), o = d;
    const _ = n.otheruseridentity_requestVerification(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, s, o);
    if (_[2]) throw l(_[1]);
    return ye.__wrap(_[0]);
  }
  get selfSigningKey() {
    let e, t;
    try {
      const o = n.otheruseridentity_selfSigningKey(this.__wbg_ptr);
      var r = o[0], s = o[1];
      if (o[3]) throw r = 0, s = 0, l(o[2]);
      return e = r, t = s, b(r, s);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  verificationRequestContent(e) {
    let t, r;
    try {
      var s = h(e) ? 0 : V(e, n.__wbindgen_malloc), o = d;
      const c = n.otheruseridentity_verificationRequestContent(this.__wbg_ptr, s, o);
      var _ = c[0], a = c[1];
      if (c[3]) throw _ = 0, a = 0, l(c[2]);
      return t = _, r = a, b(_, a);
    } finally {
      n.__wbindgen_free(t, r, 1);
    }
  }
  verify() {
    return n.otheruseridentity_verify(this.__wbg_ptr);
  }
  wasPreviouslyVerified() {
    return n.otheruseridentity_wasPreviouslyVerified(this.__wbg_ptr) !== 0;
  }
  withdrawVerification() {
    return n.otheruseridentity_withdrawVerification(this.__wbg_ptr);
  }
}
Symbol.dispose && (Me.prototype[Symbol.dispose] = Me.prototype.free);
class ut {
  static __wrap(e) {
    const t = Object.create(ut.prototype);
    return t.__wbg_ptr = e, si.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, si.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_outboundcreationresult_free(e, 0);
  }
  get channel() {
    const e = n.__wbg_get_outboundcreationresult_channel(this.__wbg_ptr);
    return Q.__wrap(e);
  }
  get initial_message() {
    let e, t;
    try {
      const r = n.__wbg_get_outboundcreationresult_initial_message(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  set channel(e) {
    f(e, Q);
    var t = e.__destroy_into_raw();
    n.__wbg_set_outboundcreationresult_channel(this.__wbg_ptr, t);
  }
  set initial_message(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_outboundcreationresult_initial_message(this.__wbg_ptr, t, r);
  }
}
Symbol.dispose && (ut.prototype[Symbol.dispose] = ut.prototype.free);
class Be {
  static __wrap(e) {
    const t = Object.create(Be.prototype);
    return t.__wbg_ptr = e, oi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, oi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_ownuseridentity_free(e, 0);
  }
  hasVerificationViolation() {
    return n.ownuseridentity_hasVerificationViolation(this.__wbg_ptr) !== 0;
  }
  isVerified() {
    return n.ownuseridentity_isVerified(this.__wbg_ptr) !== 0;
  }
  get masterKey() {
    let e, t;
    try {
      const o = n.ownuseridentity_masterKey(this.__wbg_ptr);
      var r = o[0], s = o[1];
      if (o[3]) throw r = 0, s = 0, l(o[2]);
      return e = r, t = s, b(r, s);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  requestVerification(e) {
    var t = h(e) ? 0 : V(e, n.__wbindgen_malloc), r = d;
    const s = n.ownuseridentity_requestVerification(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return l(s[0]);
  }
  get selfSigningKey() {
    let e, t;
    try {
      const o = n.ownuseridentity_selfSigningKey(this.__wbg_ptr);
      var r = o[0], s = o[1];
      if (o[3]) throw r = 0, s = 0, l(o[2]);
      return e = r, t = s, b(r, s);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  trustsOurOwnDevice() {
    return n.ownuseridentity_trustsOurOwnDevice(this.__wbg_ptr);
  }
  get userSigningKey() {
    let e, t;
    try {
      const o = n.ownuseridentity_userSigningKey(this.__wbg_ptr);
      var r = o[0], s = o[1];
      if (o[3]) throw r = 0, s = 0, l(o[2]);
      return e = r, t = s, b(r, s);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  verify() {
    return n.ownuseridentity_verify(this.__wbg_ptr);
  }
  wasPreviouslyVerified() {
    return n.ownuseridentity_wasPreviouslyVerified(this.__wbg_ptr) !== 0;
  }
  withdrawVerification() {
    return n.ownuseridentity_withdrawVerification(this.__wbg_ptr);
  }
}
Symbol.dispose && (Be.prototype[Symbol.dispose] = Be.prototype.free);
class qe {
  static __unwrap(e) {
    return e instanceof qe ? e.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, _i.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_pickledinboundgroupsession_free(e, 0);
  }
  get backedUp() {
    return n.__wbg_get_pickledinboundgroupsession_backedUp(this.__wbg_ptr) !== 0;
  }
  get imported() {
    return n.__wbg_get_pickledinboundgroupsession_imported(this.__wbg_ptr) !== 0;
  }
  get pickle() {
    let e, t;
    try {
      const r = n.__wbg_get_pickledinboundgroupsession_pickle(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get roomId() {
    const e = n.__wbg_get_pickledinboundgroupsession_roomId(this.__wbg_ptr);
    return e === 0 ? void 0 : R.__wrap(e);
  }
  get senderKey() {
    let e, t;
    try {
      const r = n.__wbg_get_pickledinboundgroupsession_senderKey(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get senderSigningKey() {
    const e = n.__wbg_get_pickledinboundgroupsession_senderSigningKey(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  constructor() {
    const e = n.pickledinboundgroupsession_new();
    return this.__wbg_ptr = e, _i.register(this, this.__wbg_ptr, this), this;
  }
  set backedUp(e) {
    n.__wbg_set_pickledinboundgroupsession_backedUp(this.__wbg_ptr, e);
  }
  set imported(e) {
    n.__wbg_set_pickledinboundgroupsession_imported(this.__wbg_ptr, e);
  }
  set pickle(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_pickledinboundgroupsession_pickle(this.__wbg_ptr, t, r);
  }
  set roomId(e) {
    let t = 0;
    h(e) || (f(e, R), t = e.__destroy_into_raw()), n.__wbg_set_pickledinboundgroupsession_roomId(this.__wbg_ptr, t);
  }
  set senderKey(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_pickledinboundgroupsession_senderKey(this.__wbg_ptr, t, r);
  }
  set senderSigningKey(e) {
    var t = h(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_pickledinboundgroupsession_senderSigningKey(this.__wbg_ptr, t, r);
  }
}
Symbol.dispose && (qe.prototype[Symbol.dispose] = qe.prototype.free);
class Fe {
  static __unwrap(e) {
    return e instanceof Fe ? e.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ai.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_pickledsession_free(e, 0);
  }
  get createdUsingFallbackKey() {
    return n.__wbg_get_pickledsession_createdUsingFallbackKey(this.__wbg_ptr) !== 0;
  }
  get creationTime() {
    return n.__wbg_get_pickledsession_creationTime(this.__wbg_ptr);
  }
  get lastUseTime() {
    return n.__wbg_get_pickledsession_lastUseTime(this.__wbg_ptr);
  }
  get pickle() {
    let e, t;
    try {
      const r = n.__wbg_get_pickledsession_pickle(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get senderKey() {
    let e, t;
    try {
      const r = n.__wbg_get_pickledsession_senderKey(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  constructor() {
    const e = n.pickledsession_new();
    return this.__wbg_ptr = e, ai.register(this, this.__wbg_ptr, this), this;
  }
  set createdUsingFallbackKey(e) {
    n.__wbg_set_pickledsession_createdUsingFallbackKey(this.__wbg_ptr, e);
  }
  set creationTime(e) {
    n.__wbg_set_pickledsession_creationTime(this.__wbg_ptr, e);
  }
  set lastUseTime(e) {
    n.__wbg_set_pickledsession_lastUseTime(this.__wbg_ptr, e);
  }
  set pickle(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_pickledsession_pickle(this.__wbg_ptr, t, r);
  }
  set senderKey(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_pickledsession_senderKey(this.__wbg_ptr, t, r);
  }
}
Symbol.dispose && (Fe.prototype[Symbol.dispose] = Fe.prototype.free);
class lt {
  static __wrap(e) {
    const t = Object.create(lt.prototype);
    return t.__wbg_ptr = e, Rr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Rr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_pkdecryption_free(e, 0);
  }
  decrypt(e) {
    f(e, W);
    const t = n.pkdecryption_decrypt(this.__wbg_ptr, e.__wbg_ptr);
    if (t[3]) throw l(t[2]);
    var r = z(t[0], t[1]).slice();
    return n.__wbindgen_free(t[0], t[1] * 1, 1), r;
  }
  decryptString(e) {
    let t, r;
    try {
      f(e, W);
      const _ = n.pkdecryption_decryptString(this.__wbg_ptr, e.__wbg_ptr);
      var s = _[0], o = _[1];
      if (_[3]) throw s = 0, o = 0, l(_[2]);
      return t = s, r = o, b(s, o);
    } finally {
      n.__wbindgen_free(t, r, 1);
    }
  }
  static fromKey(e) {
    f(e, G);
    const t = n.pkdecryption_fromKey(e.__wbg_ptr);
    return lt.__wrap(t);
  }
  constructor() {
    const e = n.pkdecryption_new();
    return this.__wbg_ptr = e, Rr.register(this, this.__wbg_ptr, this), this;
  }
  publicKey() {
    const e = n.pkdecryption_publicKey(this.__wbg_ptr);
    return O.__wrap(e);
  }
  secretKey() {
    const e = n.pkdecryption_secretKey(this.__wbg_ptr);
    return G.__wrap(e);
  }
}
Symbol.dispose && (lt.prototype[Symbol.dispose] = lt.prototype.free);
class pt {
  static __wrap(e) {
    const t = Object.create(pt.prototype);
    return t.__wbg_ptr = e, ci.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ci.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_pkencryption_free(e, 0);
  }
  encrypt(e) {
    const t = Z(e, n.__wbindgen_malloc), r = d, s = n.pkencryption_encrypt(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return W.__wrap(s[0]);
  }
  encryptString(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.pkencryption_encryptString(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return W.__wrap(s[0]);
  }
  static fromKey(e) {
    f(e, O);
    const t = n.pkencryption_fromKey(e.__wbg_ptr);
    return pt.__wrap(t);
  }
}
Symbol.dispose && (pt.prototype[Symbol.dispose] = pt.prototype.free);
class W {
  static __wrap(e) {
    const t = Object.create(W.prototype);
    return t.__wbg_ptr = e, gi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, gi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_pkmessage_free(e, 0);
  }
  ciphertext() {
    const e = n.pkmessage_ciphertext(this.__wbg_ptr);
    var t = z(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  ephemeralKey() {
    const e = n.pkmessage_ephemeralKey(this.__wbg_ptr);
    return O.__wrap(e);
  }
  static fromBase64(e) {
    f(e, me);
    const t = n.pkmessage_fromBase64(e.__wbg_ptr);
    if (t[2]) throw l(t[1]);
    return W.__wrap(t[0]);
  }
  static fromParts(e, t, r) {
    const s = Z(e, n.__wbindgen_malloc), o = d, _ = Z(t, n.__wbindgen_malloc), a = d;
    f(r, O);
    const c = n.pkmessage_fromParts(s, o, _, a, r.__wbg_ptr);
    return W.__wrap(c);
  }
  mac() {
    const e = n.pkmessage_mac(this.__wbg_ptr);
    var t = z(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  toBase64() {
    const e = n.pkmessage_toBase64(this.__wbg_ptr);
    return me.__wrap(e);
  }
}
Symbol.dispose && (W.prototype[Symbol.dispose] = W.prototype.free);
class yt {
  static __wrap(e) {
    const t = Object.create(yt.prototype);
    return t.__wbg_ptr = e, di.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, di.unregister(this), e;
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
Symbol.dispose && (yt.prototype[Symbol.dispose] = yt.prototype.free);
const Vt = Object.freeze({ Decrypted: 0, 0: "Decrypted", UnableToDecrypt: 1, 1: "UnableToDecrypt", PlainText: 2, 2: "PlainText", Invalid: 3, 3: "Invalid" });
class ze {
  static __wrap(e) {
    const t = Object.create(ze.prototype);
    return t.__wbg_ptr = e, Kr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Kr.unregister(this), e;
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
    return this.__wbg_ptr = t, Kr.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (ze.prototype[Symbol.dispose] = ze.prototype.free);
class de {
  static __wrap(e) {
    const t = Object.create(de.prototype);
    return t.__wbg_ptr = e, ui.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ui.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_qr_free(e, 0);
  }
  cancel() {
    const e = n.qr_cancel(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  cancelInfo() {
    const e = n.qr_cancelInfo(this.__wbg_ptr);
    return e === 0 ? void 0 : se.__wrap(e);
  }
  cancelWithCode(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.qr_cancelWithCode(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return l(s[0]);
  }
  confirmScanning() {
    const e = n.qr_confirmScanning(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  get flowId() {
    let e, t;
    try {
      const r = n.qr_flowId(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  hasBeenConfirmed() {
    return n.qr_hasBeenConfirmed(this.__wbg_ptr) !== 0;
  }
  hasBeenScanned() {
    return n.qr_hasBeenScanned(this.__wbg_ptr) !== 0;
  }
  isCancelled() {
    return n.qr_isCancelled(this.__wbg_ptr) !== 0;
  }
  isDone() {
    return n.qr_isDone(this.__wbg_ptr) !== 0;
  }
  isSelfVerification() {
    return n.qr_isSelfVerification(this.__wbg_ptr) !== 0;
  }
  get otherDeviceId() {
    const e = n.qr_otherDeviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  get otherUserId() {
    const e = n.qr_otherUserId(this.__wbg_ptr);
    return w.__wrap(e);
  }
  reciprocate() {
    const e = n.qr_reciprocate(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  reciprocated() {
    return n.qr_reciprocated(this.__wbg_ptr) !== 0;
  }
  registerChangesCallback(e) {
    n.qr_registerChangesCallback(this.__wbg_ptr, e);
  }
  get roomId() {
    const e = n.qr_roomId(this.__wbg_ptr);
    return e === 0 ? void 0 : R.__wrap(e);
  }
  state() {
    return n.qr_state(this.__wbg_ptr);
  }
  toBytes() {
    const e = n.qr_toBytes(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  toQrCode() {
    const e = n.qr_toQrCode(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return bt.__wrap(e[0]);
  }
  get userId() {
    const e = n.qr_userId(this.__wbg_ptr);
    return w.__wrap(e);
  }
  weStarted() {
    return n.qr_weStarted(this.__wbg_ptr) !== 0;
  }
}
Symbol.dispose && (de.prototype[Symbol.dispose] = de.prototype.free);
class bt {
  static __wrap(e) {
    const t = Object.create(bt.prototype);
    return t.__wbg_ptr = e, li.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, li.unregister(this), e;
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
Symbol.dispose && (bt.prototype[Symbol.dispose] = bt.prototype.free);
class ie {
  static __wrap(e) {
    const t = Object.create(ie.prototype);
    return t.__wbg_ptr = e, Ir.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ir.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_qrcodedata_free(e, 0);
  }
  static fromBase64(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.qrcodedata_fromBase64(t, r);
    if (s[2]) throw l(s[1]);
    return ie.__wrap(s[0]);
  }
  static fromBytes(e) {
    const t = Z(e, n.__wbindgen_malloc), r = d, s = n.qrcodedata_fromBytes(t, r);
    if (s[2]) throw l(s[1]);
    return ie.__wrap(s[0]);
  }
  get intentData() {
    const e = n.qrcodedata_intentData(this.__wbg_ptr);
    return ft.__wrap(e);
  }
  get mode() {
    return n.qrcodedata_mode(this.__wbg_ptr);
  }
  constructor(e, t, r) {
    f(e, O);
    var s = e.__destroy_into_raw();
    const o = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), _ = d;
    var a = h(r) ? 0 : p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), c = d;
    const u = n.qrcodedata_new(s, o, _, a, c);
    if (u[2]) throw l(u[1]);
    return this.__wbg_ptr = u[0], Ir.register(this, this.__wbg_ptr, this), this;
  }
  static newMsc4388(e, t, r, s) {
    f(e, O);
    var o = e.__destroy_into_raw();
    const _ = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), a = d, c = p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), u = d, y = n.qrcodedata_newMsc4388(o, _, a, c, u, s);
    if (y[2]) throw l(y[1]);
    return ie.__wrap(y[0]);
  }
  get publicKey() {
    const e = n.qrcodedata_publicKey(this.__wbg_ptr);
    return O.__wrap(e);
  }
  get rendezvousUrl() {
    const e = n.qrcodedata_rendezvousUrl(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get serverName() {
    const e = n.qrcodedata_serverName(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  toBase64() {
    let e, t;
    try {
      const r = n.qrcodedata_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  toBytes() {
    const e = n.qrcodedata_toBytes(this.__wbg_ptr);
    var t = z(e[0], e[1]).slice();
    return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
}
Symbol.dispose && (ie.prototype[Symbol.dispose] = ie.prototype.free);
const Cs = Object.freeze({ Login: 0, 0: "Login", Reciprocate: 1, 1: "Reciprocate" });
class ft {
  static __wrap(e) {
    const t = Object.create(ft.prototype);
    return t.__wbg_ptr = e, pi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, pi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_qrcodeintentdata_free(e, 0);
  }
  get msc4108() {
    const e = n.__wbg_get_qrcodeintentdata_msc4108(this.__wbg_ptr);
    return e === 0 ? void 0 : De.__wrap(e);
  }
  get msc4388() {
    const e = n.__wbg_get_qrcodeintentdata_msc4388(this.__wbg_ptr);
    return e === 0 ? void 0 : Ee.__wrap(e);
  }
  set msc4108(e) {
    let t = 0;
    h(e) || (f(e, De), t = e.__destroy_into_raw()), n.__wbg_set_qrcodeintentdata_msc4108(this.__wbg_ptr, t);
  }
  set msc4388(e) {
    let t = 0;
    h(e) || (f(e, Ee), t = e.__destroy_into_raw()), n.__wbg_set_qrcodeintentdata_msc4388(this.__wbg_ptr, t);
  }
}
Symbol.dispose && (ft.prototype[Symbol.dispose] = ft.prototype.free);
class ue {
  static __wrap(e) {
    const t = Object.create(ue.prototype);
    return t.__wbg_ptr = e, yi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, yi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_qrcodescan_free(e, 0);
  }
  static fromBytes(e) {
    const t = n.qrcodescan_fromBytes(e);
    if (t[2]) throw l(t[1]);
    return ue.__wrap(t[0]);
  }
}
Symbol.dispose && (ue.prototype[Symbol.dispose] = ue.prototype.free);
const fe = Object.freeze({ Created: 0, 0: "Created", Scanned: 1, 1: "Scanned", Confirmed: 2, 2: "Confirmed", Reciprocated: 3, 3: "Reciprocated", Done: 4, 4: "Done", Cancelled: 5, 5: "Cancelled" });
class wt {
  static __wrap(e) {
    const t = Object.create(wt.prototype);
    return t.__wbg_ptr = e, bi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, bi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_rehydrateddevice_free(e, 0);
  }
  receiveEvents(e, t) {
    const r = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d;
    let o = 0;
    return h(t) || (f(t, ve), o = t.__destroy_into_raw()), n.rehydrateddevice_receiveEvents(this.__wbg_ptr, r, s, o);
  }
}
Symbol.dispose && (wt.prototype[Symbol.dispose] = wt.prototype.free);
const Ds = Object.freeze({ KeysUpload: 0, 0: "KeysUpload", KeysQuery: 1, 1: "KeysQuery", KeysClaim: 2, 2: "KeysClaim", ToDevice: 3, 3: "ToDevice", SignatureUpload: 4, 4: "SignatureUpload", RoomMessage: 5, 5: "RoomMessage", KeysBackup: 6, 6: "KeysBackup" });
class R {
  static __wrap(e) {
    const t = Object.create(R.prototype);
    return t.__wbg_ptr = e, Cr.register(t, t.__wbg_ptr, t), t;
  }
  static __unwrap(e) {
    return e instanceof R ? e.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Cr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roomid_free(e, 0);
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.roomid_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0], Cr.register(this, this.__wbg_ptr, this), this;
  }
  toString() {
    let e, t;
    try {
      const r = n.roomid_toString(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (R.prototype[Symbol.dispose] = R.prototype.free);
class ht {
  static __wrap(e) {
    const t = Object.create(ht.prototype);
    return t.__wbg_ptr = e, fi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, fi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roomkeycounts_free(e, 0);
  }
  get backedUp() {
    return n.__wbg_get_roomkeycounts_backedUp(this.__wbg_ptr);
  }
  get total() {
    return n.__wbg_get_roomkeycounts_total(this.__wbg_ptr);
  }
  set backedUp(e) {
    n.__wbg_set_roomkeycounts_backedUp(this.__wbg_ptr, e);
  }
  set total(e) {
    n.__wbg_set_roomkeycounts_total(this.__wbg_ptr, e);
  }
}
Symbol.dispose && (ht.prototype[Symbol.dispose] = ht.prototype.free);
class mt {
  static __wrap(e) {
    const t = Object.create(mt.prototype);
    return t.__wbg_ptr = e, wi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, wi.unregister(this), e;
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
Symbol.dispose && (mt.prototype[Symbol.dispose] = mt.prototype.free);
class vt {
  static __wrap(e) {
    const t = Object.create(vt.prototype);
    return t.__wbg_ptr = e, hi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, hi.unregister(this), e;
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
    return O.__wrap(e);
  }
  get sessionId() {
    let e, t;
    try {
      const r = n.roomkeyinfo_sessionId(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (vt.prototype[Symbol.dispose] = vt.prototype.free);
class kt {
  static __wrap(e) {
    const t = Object.create(kt.prototype);
    return t.__wbg_ptr = e, mi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, mi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roomkeywithheldinfo_free(e, 0);
  }
  get algorithm() {
    return n.roomkeywithheldinfo_algorithm(this.__wbg_ptr);
  }
  get roomId() {
    const e = n.roomkeywithheldinfo_roomId(this.__wbg_ptr);
    return R.__wrap(e);
  }
  get sender() {
    const e = n.roomkeywithheldinfo_sender(this.__wbg_ptr);
    return w.__wrap(e);
  }
  get sessionId() {
    let e, t;
    try {
      const r = n.roomkeywithheldinfo_sessionId(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get withheldCode() {
    let e, t;
    try {
      const r = n.roomkeywithheldinfo_withheldCode(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (kt.prototype[Symbol.dispose] = kt.prototype.free);
class Ue {
  static __wrap(e) {
    const t = Object.create(Ue.prototype);
    return t.__wbg_ptr = e, Dr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Dr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roommessagerequest_free(e, 0);
  }
  get body() {
    return n.__wbg_get_roommessagerequest_body(this.__wbg_ptr);
  }
  get event_type() {
    return n.__wbg_get_roommessagerequest_event_type(this.__wbg_ptr);
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
  constructor(e, t, r, s, o) {
    const _ = n.roommessagerequest_new(e, t, r, s, o);
    return this.__wbg_ptr = _, Dr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.roommessagerequest_type(this.__wbg_ptr);
  }
}
Symbol.dispose && (Ue.prototype[Symbol.dispose] = Ue.prototype.free);
class St {
  static __wrap(e) {
    const t = Object.create(St.prototype);
    return t.__wbg_ptr = e, vi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, vi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roompendingkeybundledetails_free(e, 0);
  }
  get inviteAcceptedAtMillis() {
    return n.roompendingkeybundledetails_inviteAcceptedAtMillis(this.__wbg_ptr);
  }
  get inviterId() {
    const e = n.roompendingkeybundledetails_inviterId(this.__wbg_ptr);
    return w.__wrap(e);
  }
  get roomId() {
    const e = n.roompendingkeybundledetails_roomId(this.__wbg_ptr);
    return R.__wrap(e);
  }
}
Symbol.dispose && (St.prototype[Symbol.dispose] = St.prototype.free);
class $ {
  static __wrap(e) {
    const t = Object.create($.prototype);
    return t.__wbg_ptr = e, Er.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Er.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_roomsettings_free(e, 0);
  }
  get algorithm() {
    return n.__wbg_get_roomsettings_algorithm(this.__wbg_ptr);
  }
  get encryptStateEvents() {
    return n.__wbg_get_roomsettings_encryptStateEvents(this.__wbg_ptr) !== 0;
  }
  get onlyAllowTrustedDevices() {
    return n.__wbg_get_roomsettings_onlyAllowTrustedDevices(this.__wbg_ptr) !== 0;
  }
  get sessionRotationPeriodMessages() {
    const e = n.__wbg_get_roomsettings_sessionRotationPeriodMessages(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  get sessionRotationPeriodMs() {
    const e = n.__wbg_get_roomsettings_sessionRotationPeriodMs(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  constructor() {
    const e = n.roomsettings_new();
    return this.__wbg_ptr = e, Er.register(this, this.__wbg_ptr, this), this;
  }
  set algorithm(e) {
    n.__wbg_set_roomsettings_algorithm(this.__wbg_ptr, e);
  }
  set encryptStateEvents(e) {
    n.__wbg_set_roomsettings_encryptStateEvents(this.__wbg_ptr, e);
  }
  set onlyAllowTrustedDevices(e) {
    n.__wbg_set_roomsettings_onlyAllowTrustedDevices(this.__wbg_ptr, e);
  }
  set sessionRotationPeriodMessages(e) {
    n.__wbg_set_roomsettings_sessionRotationPeriodMessages(this.__wbg_ptr, !h(e), h(e) ? 0 : e);
  }
  set sessionRotationPeriodMs(e) {
    n.__wbg_set_roomsettings_sessionRotationPeriodMs(this.__wbg_ptr, !h(e), h(e) ? 0 : e);
  }
}
Symbol.dispose && ($.prototype[Symbol.dispose] = $.prototype.free);
class le {
  static __wrap(e) {
    const t = Object.create(le.prototype);
    return t.__wbg_ptr = e, ki.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ki.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_sas_free(e, 0);
  }
  accept() {
    const e = n.sas_accept(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  canBePresented() {
    return n.sas_canBePresented(this.__wbg_ptr) !== 0;
  }
  cancel() {
    const e = n.sas_cancel(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  cancelInfo() {
    const e = n.sas_cancelInfo(this.__wbg_ptr);
    return e === 0 ? void 0 : se.__wrap(e);
  }
  cancelWithCode(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.sas_cancelWithCode(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return l(s[0]);
  }
  confirm() {
    return n.sas_confirm(this.__wbg_ptr);
  }
  decimals() {
    const e = n.sas_decimals(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = pg(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 2, 2)), t;
  }
  get deviceId() {
    const e = n.sas_deviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  emoji() {
    const e = n.sas_emoji(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = Mt(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 4, 4)), t;
  }
  emojiIndex() {
    const e = n.sas_emojiIndex(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = z(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
  get flowId() {
    let e, t;
    try {
      const r = n.sas_flowId(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  hasBeenAccepted() {
    return n.sas_hasBeenAccepted(this.__wbg_ptr) !== 0;
  }
  haveWeConfirmed() {
    return n.sas_haveWeConfirmed(this.__wbg_ptr) !== 0;
  }
  isCancelled() {
    return n.sas_isCancelled(this.__wbg_ptr) !== 0;
  }
  isDone() {
    return n.sas_isDone(this.__wbg_ptr) !== 0;
  }
  isSelfVerification() {
    return n.sas_isSelfVerification(this.__wbg_ptr) !== 0;
  }
  get otherDeviceId() {
    const e = n.sas_otherDeviceId(this.__wbg_ptr);
    return C.__wrap(e);
  }
  get otherUserId() {
    const e = n.sas_otherUserId(this.__wbg_ptr);
    return w.__wrap(e);
  }
  registerChangesCallback(e) {
    n.sas_registerChangesCallback(this.__wbg_ptr, e);
  }
  get roomId() {
    const e = n.sas_roomId(this.__wbg_ptr);
    return e === 0 ? void 0 : R.__wrap(e);
  }
  startedFromRequest() {
    return n.sas_startedFromRequest(this.__wbg_ptr) !== 0;
  }
  supportsEmoji() {
    return n.sas_supportsEmoji(this.__wbg_ptr) !== 0;
  }
  timedOut() {
    return n.sas_timedOut(this.__wbg_ptr) !== 0;
  }
  get userId() {
    const e = n.sas_userId(this.__wbg_ptr);
    return w.__wrap(e);
  }
  weStarted() {
    return n.sas_weStarted(this.__wbg_ptr) !== 0;
  }
}
Symbol.dispose && (le.prototype[Symbol.dispose] = le.prototype.free);
class Y {
  static __wrap(e) {
    const t = Object.create(Y.prototype);
    return t.__wbg_ptr = e, Si.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Si.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_secretsbundle_free(e, 0);
  }
  get backupBundle() {
    const e = n.secretsbundle_backupBundle(this.__wbg_ptr);
    return e === 0 ? void 0 : Ge.__wrap(e);
  }
  static from_json(e) {
    const t = n.secretsbundle_from_json(e);
    if (t[2]) throw l(t[1]);
    return Y.__wrap(t[0]);
  }
  get masterKey() {
    let e, t;
    try {
      const r = n.secretsbundle_masterKey(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get selfSigningKey() {
    let e, t;
    try {
      const r = n.secretsbundle_selfSigningKey(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  to_json() {
    const e = n.secretsbundle_to_json(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  get userSigningKey() {
    let e, t;
    try {
      const r = n.secretsbundle_userSigningKey(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (Y.prototype[Symbol.dispose] = Y.prototype.free);
class Ve {
  static __wrap(e) {
    const t = Object.create(Ve.prototype);
    return t.__wbg_ptr = e, Or.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Or.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_servername_free(e, 0);
  }
  get host() {
    let e, t;
    try {
      const r = n.servername_host(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  isIpLiteral() {
    return n.servername_isIpLiteral(this.__wbg_ptr) !== 0;
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.servername_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0], Or.register(this, this.__wbg_ptr, this), this;
  }
  get port() {
    const e = n.servername_port(this.__wbg_ptr);
    return e === 16777215 ? void 0 : e;
  }
}
Symbol.dispose && (Ve.prototype[Symbol.dispose] = Ve.prototype.free);
const Wr = Object.freeze({ Red: 0, 0: "Red", Grey: 1, 1: "Grey", None: 2, 2: "None" });
class Te {
  static __wrap(e) {
    const t = Object.create(Te.prototype);
    return t.__wbg_ptr = e, Ri.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ri.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_shieldstate_free(e, 0);
  }
  get code() {
    const e = n.__wbg_get_shieldstate_code(this.__wbg_ptr);
    return e === 6 ? void 0 : e;
  }
  get color() {
    return n.__wbg_get_shieldstate_color(this.__wbg_ptr);
  }
  set code(e) {
    n.__wbg_set_shieldstate_code(this.__wbg_ptr, h(e) ? 6 : e);
  }
  set color(e) {
    n.__wbg_set_shieldstate_color(this.__wbg_ptr, e);
  }
  get message() {
    const e = n.shieldstate_message(this.__wbg_ptr);
    let t;
    return e[0] !== 0 && (t = b(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
  }
}
Symbol.dispose && (Te.prototype[Symbol.dispose] = Te.prototype.free);
const we = Object.freeze({ AuthenticityNotGuaranteed: 0, 0: "AuthenticityNotGuaranteed", UnknownDevice: 1, 1: "UnknownDevice", UnsignedDevice: 2, 2: "UnsignedDevice", UnverifiedIdentity: 3, 3: "UnverifiedIdentity", VerificationViolation: 4, 4: "VerificationViolation", MismatchedSender: 5, 5: "MismatchedSender" });
class Rt {
  static __wrap(e) {
    const t = Object.create(Rt.prototype);
    return t.__wbg_ptr = e, Ki.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ki.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_signature_free(e, 0);
  }
  get ed25519() {
    const e = n.signature_ed25519(this.__wbg_ptr);
    return e === 0 ? void 0 : _e.__wrap(e);
  }
  toBase64() {
    let e, t;
    try {
      const r = n.signature_toBase64(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (Rt.prototype[Symbol.dispose] = Rt.prototype.free);
const Es = Object.freeze({ Missing: 0, 0: "Missing", Invalid: 1, 1: "Invalid", ValidButNotTrusted: 2, 2: "ValidButNotTrusted", ValidAndTrusted: 3, 3: "ValidAndTrusted" });
class pe {
  static __wrap(e) {
    const t = Object.create(pe.prototype);
    return t.__wbg_ptr = e, Mr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Mr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_signatureuploadrequest_free(e, 0);
  }
  get body() {
    return n.__wbg_get_signatureuploadrequest_body(this.__wbg_ptr);
  }
  get id() {
    return n.__wbg_get_signatureuploadrequest_id(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = n.signatureuploadrequest_new(e, t);
    return this.__wbg_ptr = r, Mr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.signatureuploadrequest_type(this.__wbg_ptr);
  }
}
Symbol.dispose && (pe.prototype[Symbol.dispose] = pe.prototype.free);
class Kt {
  static __wrap(e) {
    const t = Object.create(Kt.prototype);
    return t.__wbg_ptr = e, Ii.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ii.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_signatureverification_free(e, 0);
  }
  get deviceState() {
    return n.signatureverification_deviceState(this.__wbg_ptr);
  }
  trusted() {
    return n.signatureverification_trusted(this.__wbg_ptr) !== 0;
  }
  get userState() {
    return n.signatureverification_userState(this.__wbg_ptr);
  }
}
Symbol.dispose && (Kt.prototype[Symbol.dispose] = Kt.prototype.free);
class je {
  static __wrap(e) {
    const t = Object.create(je.prototype);
    return t.__wbg_ptr = e, Br.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Br.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_signatures_free(e, 0);
  }
  addSignature(e, t, r) {
    f(e, w), f(t, oe), f(r, _e);
    const s = n.signatures_addSignature(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr);
    return s === 0 ? void 0 : Ce.__wrap(s);
  }
  asJSON() {
    const e = n.signatures_asJSON(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  clear() {
    n.signatures_clear(this.__wbg_ptr);
  }
  get count() {
    return n.signatures_count(this.__wbg_ptr) >>> 0;
  }
  get(e) {
    return f(e, w), n.signatures_get(this.__wbg_ptr, e.__wbg_ptr);
  }
  getSignature(e, t) {
    f(e, w), f(t, oe);
    const r = n.signatures_getSignature(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
    return r === 0 ? void 0 : _e.__wrap(r);
  }
  isEmpty() {
    return n.signatures_isEmpty(this.__wbg_ptr) !== 0;
  }
  constructor() {
    const e = n.signatures_new();
    return this.__wbg_ptr = e, Br.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (je.prototype[Symbol.dispose] = je.prototype.free);
class P {
  static __wrap(e) {
    const t = Object.create(P.prototype);
    return t.__wbg_ptr = e, Ci.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ci.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_storehandle_free(e, 0);
  }
  static open(e, t, r) {
    var s = h(e) ? 0 : p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d, _ = h(t) ? 0 : p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), a = d;
    return n.storehandle_open(s, o, _, a, h(r) ? 0 : E(r));
  }
  static openWithKey(e, t, r) {
    const s = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d, _ = Z(t, n.__wbindgen_malloc), a = d;
    return n.storehandle_openWithKey(s, o, _, a, h(r) ? 0 : E(r));
  }
}
Symbol.dispose && (P.prototype[Symbol.dispose] = P.prototype.free);
class Pe {
  static __wrap(e) {
    const t = Object.create(Pe.prototype);
    return t.__wbg_ptr = e, Di.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Di.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_storedroomkeybundledata_free(e, 0);
  }
  get encryptionInfo() {
    let e, t;
    try {
      const r = n.storedroomkeybundledata_encryptionInfo(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get roomId() {
    const e = n.storedroomkeybundledata_roomId(this.__wbg_ptr);
    return R.__wrap(e);
  }
  get senderUser() {
    const e = n.storedroomkeybundledata_senderUser(this.__wbg_ptr);
    return w.__wrap(e);
  }
  get url() {
    let e, t;
    try {
      const r = n.storedroomkeybundledata_url(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (Pe.prototype[Symbol.dispose] = Pe.prototype.free);
class It {
  static __wrap(e) {
    const t = Object.create(It.prototype);
    return t.__wbg_ptr = e, Ei.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ei.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_todeviceencryptioninfo_free(e, 0);
  }
  get senderCurve25519Key() {
    let e, t;
    try {
      const r = n.__wbg_get_todeviceencryptioninfo_senderCurve25519Key(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  get senderDevice() {
    const e = n.__wbg_get_todeviceencryptioninfo_senderDevice(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  get sender() {
    const e = n.__wbg_get_todeviceencryptioninfo_sender(this.__wbg_ptr);
    return w.__wrap(e);
  }
  set senderCurve25519Key(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d;
    n.__wbg_set_todeviceencryptioninfo_senderCurve25519Key(this.__wbg_ptr, t, r);
  }
  set senderDevice(e) {
    let t = 0;
    h(e) || (f(e, C), t = e.__destroy_into_raw()), n.__wbg_set_todeviceencryptioninfo_senderDevice(this.__wbg_ptr, t);
  }
  set sender(e) {
    f(e, w);
    var t = e.__destroy_into_raw();
    n.__wbg_set_todeviceencryptioninfo_sender(this.__wbg_ptr, t);
  }
  isSenderVerified() {
    return n.todeviceencryptioninfo_isSenderVerified(this.__wbg_ptr) !== 0;
  }
}
Symbol.dispose && (It.prototype[Symbol.dispose] = It.prototype.free);
class xe {
  static __wrap(e) {
    const t = Object.create(xe.prototype);
    return t.__wbg_ptr = e, qr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_todevicerequest_free(e, 0);
  }
  get body() {
    return n.__wbg_get_todevicerequest_body(this.__wbg_ptr);
  }
  get event_type() {
    return n.__wbg_get_todevicerequest_event_type(this.__wbg_ptr);
  }
  get id() {
    return n.__wbg_get_todevicerequest_id(this.__wbg_ptr);
  }
  get txn_id() {
    return n.__wbg_get_todevicerequest_txn_id(this.__wbg_ptr);
  }
  constructor(e, t, r, s) {
    const o = n.todevicerequest_new(e, t, r, s);
    return this.__wbg_ptr = o, qr.register(this, this.__wbg_ptr, this), this;
  }
  get type() {
    return n.todevicerequest_type(this.__wbg_ptr);
  }
}
Symbol.dispose && (xe.prototype[Symbol.dispose] = xe.prototype.free);
class Ct {
  static __wrap(e) {
    const t = Object.create(Ct.prototype);
    return t.__wbg_ptr = e, Oi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Oi.unregister(this), e;
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
Symbol.dispose && (Ct.prototype[Symbol.dispose] = Ct.prototype.free);
const Os = Object.freeze({ DecryptionFailure: 0, 0: "DecryptionFailure", UnverifiedSenderDevice: 1, 1: "UnverifiedSenderDevice", NoOlmMachine: 2, 2: "NoOlmMachine", EncryptionIsDisabled: 3, 3: "EncryptionIsDisabled" });
class Gr {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Mi.unregister(this), e;
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
    return this.__wbg_ptr = t[0], Mi.register(this, this.__wbg_ptr, this), this;
  }
  set minLevel(e) {
    const t = n.tracing_set_minLevel(this.__wbg_ptr, e);
    if (t[1]) throw l(t[0]);
  }
  turnOff() {
    const e = n.tracing_turnOff(this.__wbg_ptr);
    if (e[1]) throw l(e[0]);
  }
  turnOn() {
    const e = n.tracing_turnOn(this.__wbg_ptr);
    if (e[1]) throw l(e[0]);
  }
}
Symbol.dispose && (Gr.prototype[Symbol.dispose] = Gr.prototype.free);
const Jr = Object.freeze({ Untrusted: 0, 0: "Untrusted", CrossSignedOrLegacy: 1, 1: "CrossSignedOrLegacy", CrossSigned: 2, 2: "CrossSigned" });
class Dt {
  static __wrap(e) {
    const t = Object.create(Dt.prototype);
    return t.__wbg_ptr = e, Bi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Bi.unregister(this), e;
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
    return Ct.__wrap(e);
  }
  get type() {
    return n.utdtodeviceevent_type(this.__wbg_ptr);
  }
}
Symbol.dispose && (Dt.prototype[Symbol.dispose] = Dt.prototype.free);
class Ae {
  static __wrap(e) {
    const t = Object.create(Ae.prototype);
    return t.__wbg_ptr = e, Fr.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Fr.unregister(this), e;
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
    return this.__wbg_ptr = t, Fr.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (Ae.prototype[Symbol.dispose] = Ae.prototype.free);
class Et {
  static __wrap(e) {
    const t = Object.create(Et.prototype);
    return t.__wbg_ptr = e, qi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_userdevices_free(e, 0);
  }
  devices() {
    return n.userdevices_devices(this.__wbg_ptr);
  }
  get(e) {
    f(e, C);
    const t = n.userdevices_get(this.__wbg_ptr, e.__wbg_ptr);
    return t === 0 ? void 0 : ke.__wrap(t);
  }
  isAnyVerified() {
    return n.userdevices_isAnyVerified(this.__wbg_ptr) !== 0;
  }
  keys() {
    return n.userdevices_keys(this.__wbg_ptr);
  }
}
Symbol.dispose && (Et.prototype[Symbol.dispose] = Et.prototype.free);
class w {
  static __wrap(e) {
    const t = Object.create(w.prototype);
    return t.__wbg_ptr = e, zr.register(t, t.__wbg_ptr, t), t;
  }
  static __unwrap(e) {
    return e instanceof w ? e.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zr.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_userid_free(e, 0);
  }
  clone() {
    const e = n.userid_clone(this.__wbg_ptr);
    return w.__wrap(e);
  }
  isHistorical() {
    return n.userid_isHistorical(this.__wbg_ptr) !== 0;
  }
  get localpart() {
    let e, t;
    try {
      const r = n.userid_localpart(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  constructor(e) {
    const t = p(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = d, s = n.userid_new(t, r);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0], zr.register(this, this.__wbg_ptr, this), this;
  }
  get serverName() {
    const e = n.userid_serverName(this.__wbg_ptr);
    return Ve.__wrap(e);
  }
  toString() {
    let e, t;
    try {
      const r = n.userid_toString(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (w.prototype[Symbol.dispose] = w.prototype.free);
const Tt = Object.freeze({ SasV1: 0, 0: "SasV1", QrCodeScanV1: 1, 1: "QrCodeScanV1", QrCodeShowV1: 2, 2: "QrCodeShowV1", ReciprocateV1: 3, 3: "ReciprocateV1" });
class ye {
  static __wrap(e) {
    const t = Object.create(ye.prototype);
    return t.__wbg_ptr = e, Fi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Fi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_verificationrequest_free(e, 0);
  }
  accept() {
    const e = n.verificationrequest_accept(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  acceptWithMethods(e) {
    const t = V(e, n.__wbindgen_malloc), r = d, s = n.verificationrequest_acceptWithMethods(this.__wbg_ptr, t, r);
    if (s[2]) throw l(s[1]);
    return l(s[0]);
  }
  cancel() {
    const e = n.verificationrequest_cancel(this.__wbg_ptr);
    if (e[2]) throw l(e[1]);
    return l(e[0]);
  }
  get cancelInfo() {
    const e = n.verificationrequest_cancelInfo(this.__wbg_ptr);
    return e === 0 ? void 0 : se.__wrap(e);
  }
  get flowId() {
    let e, t;
    try {
      const r = n.verificationrequest_flowId(this.__wbg_ptr);
      return e = r[0], t = r[1], b(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  generateQrCode() {
    return n.verificationrequest_generateQrCode(this.__wbg_ptr);
  }
  getVerification() {
    return n.verificationrequest_getVerification(this.__wbg_ptr);
  }
  isCancelled() {
    return n.verificationrequest_isCancelled(this.__wbg_ptr) !== 0;
  }
  isDone() {
    return n.verificationrequest_isDone(this.__wbg_ptr) !== 0;
  }
  isPassive() {
    return n.verificationrequest_isPassive(this.__wbg_ptr) !== 0;
  }
  isReady() {
    return n.verificationrequest_isReady(this.__wbg_ptr) !== 0;
  }
  isSelfVerification() {
    return n.verificationrequest_isSelfVerification(this.__wbg_ptr) !== 0;
  }
  get otherDeviceId() {
    const e = n.verificationrequest_otherDeviceId(this.__wbg_ptr);
    return e === 0 ? void 0 : C.__wrap(e);
  }
  get otherUserId() {
    const e = n.verificationrequest_otherUserId(this.__wbg_ptr);
    return w.__wrap(e);
  }
  get ourSupportedMethods() {
    const e = n.verificationrequest_ourSupportedMethods(this.__wbg_ptr);
    if (e[3]) throw l(e[2]);
    let t;
    return e[0] !== 0 && (t = Mt(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 4, 4)), t;
  }
  get ownUserId() {
    const e = n.verificationrequest_ownUserId(this.__wbg_ptr);
    return w.__wrap(e);
  }
  phase() {
    return n.verificationrequest_phase(this.__wbg_ptr);
  }
  registerChangesCallback(e) {
    n.verificationrequest_registerChangesCallback(this.__wbg_ptr, e);
  }
  static request(e, t, r, s) {
    let o, _;
    try {
      f(e, w), f(t, C), f(r, w);
      var a = h(s) ? 0 : V(s, n.__wbindgen_malloc), c = d;
      const m = n.verificationrequest_request(e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, a, c);
      var u = m[0], y = m[1];
      if (m[3]) throw u = 0, y = 0, l(m[2]);
      return o = u, _ = y, b(u, y);
    } finally {
      n.__wbindgen_free(o, _, 1);
    }
  }
  get roomId() {
    const e = n.verificationrequest_roomId(this.__wbg_ptr);
    return e === 0 ? void 0 : R.__wrap(e);
  }
  scanQrCode(e) {
    return f(e, ue), n.verificationrequest_scanQrCode(this.__wbg_ptr, e.__wbg_ptr);
  }
  startSas() {
    return n.verificationrequest_startSas(this.__wbg_ptr);
  }
  get theirSupportedMethods() {
    const e = n.verificationrequest_theirSupportedMethods(this.__wbg_ptr);
    if (e[3]) throw l(e[2]);
    let t;
    return e[0] !== 0 && (t = Mt(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 4, 4)), t;
  }
  timeRemainingMillis() {
    return n.verificationrequest_timeRemainingMillis(this.__wbg_ptr);
  }
  timedOut() {
    return n.verificationrequest_timedOut(this.__wbg_ptr) !== 0;
  }
  weStarted() {
    return n.verificationrequest_weStarted(this.__wbg_ptr) !== 0;
  }
}
Symbol.dispose && (ye.prototype[Symbol.dispose] = ye.prototype.free);
const re = Object.freeze({ Created: 0, 0: "Created", Requested: 1, 1: "Requested", Ready: 2, 2: "Ready", Transitioned: 3, 3: "Transitioned", Done: 4, 4: "Done", Cancelled: 5, 5: "Cancelled" });
class Ot {
  static __wrap(e) {
    const t = Object.create(Ot.prototype);
    return t.__wbg_ptr = e, zi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_versions_free(e, 0);
  }
  get git_description() {
    return n.__wbg_get_versions_git_description(this.__wbg_ptr);
  }
  get git_sha() {
    return n.__wbg_get_versions_git_sha(this.__wbg_ptr);
  }
  get matrix_sdk_crypto() {
    return n.__wbg_get_versions_matrix_sdk_crypto(this.__wbg_ptr);
  }
  get vodozemac() {
    return n.__wbg_get_versions_vodozemac(this.__wbg_ptr);
  }
}
Symbol.dispose && (Ot.prototype[Symbol.dispose] = Ot.prototype.free);
function ts() {
  const i = n.getVersions();
  return Ot.__wrap(i);
}
function Ms() {
  n.start();
}
function Bs(i, e) {
  return Error(b(i, e));
}
function qs(i) {
  return Number(i);
}
function Fs(i, e) {
  const t = String(e), r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d;
  M().setInt32(i + 4 * 1, s, true), M().setInt32(i + 4 * 0, r, true);
}
function zs(i) {
  return i.Window;
}
function Us(i) {
  return i.WorkerGlobalScope;
}
function Vs(i, e) {
  const t = e, r = typeof t == "bigint" ? t : void 0;
  M().setBigInt64(i + 8 * 1, h(r) ? BigInt(0) : r, true), M().setInt32(i + 4 * 0, !h(r), true);
}
function Ts(i) {
  const e = i, t = typeof e == "boolean" ? e : void 0;
  return h(t) ? 16777215 : t ? 1 : 0;
}
function js(i, e) {
  const t = Hr(e), r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d;
  M().setInt32(i + 4 * 1, s, true), M().setInt32(i + 4 * 0, r, true);
}
function Ps(i, e) {
  return i in e;
}
function xs(i) {
  return typeof i == "bigint";
}
function As(i) {
  return typeof i == "function";
}
function Ns(i) {
  return i === null;
}
function Ls(i) {
  const e = i;
  return typeof e == "object" && e !== null;
}
function Ws(i) {
  return typeof i == "string";
}
function Gs(i) {
  return i === void 0;
}
function Js(i, e) {
  return i === e;
}
function Hs(i, e) {
  return i == e;
}
function Qs(i, e) {
  const t = e, r = typeof t == "number" ? t : void 0;
  M().setFloat64(i + 8 * 1, h(r) ? 0 : r, true), M().setInt32(i + 4 * 0, !h(r), true);
}
function $s(i, e) {
  const t = e, r = typeof t == "string" ? t : void 0;
  var s = h(r) ? 0 : p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d;
  M().setInt32(i + 4 * 1, o, true), M().setInt32(i + 4 * 0, s, true);
}
function Ys(i, e) {
  throw new Error(b(i, e));
}
function Zs(i) {
  i._wbg_cb_unref();
}
function Xs() {
  return v(function(i) {
    i.abort();
  }, arguments);
}
function eo(i, e) {
  return i.add(e);
}
function to() {
  return v(function(i, e, t) {
    return i.add(e, t);
  }, arguments);
}
function ro(i, e) {
  return i.at(e);
}
function no(i) {
  return We.__wrap(i);
}
function io() {
  return v(function(i, e, t, r) {
    return IDBKeyRange.bound(i, e, t !== 0, r !== 0);
  }, arguments);
}
function so() {
  return v(function(i, e, t, r, s) {
    return i.call(e, t, r, s);
  }, arguments);
}
function oo() {
  return v(function(i, e) {
    return i.call(e);
  }, arguments);
}
function _o() {
  return v(function(i, e, t) {
    return i.call(e, t);
  }, arguments);
}
function ao() {
  return v(function(i, e, t, r) {
    return i.call(e, t, r);
  }, arguments);
}
function co(i) {
  return clearTimeout(i);
}
function go() {
  return v(function(i) {
    return i.clear();
  }, arguments);
}
function uo(i) {
  i.close();
}
function lo(i) {
  return i.code;
}
function po() {
  return v(function(i) {
    i.commit();
  }, arguments);
}
function yo() {
  return v(function(i) {
    i.continue();
  }, arguments);
}
function bo() {
  return v(function(i) {
    return i.count();
  }, arguments);
}
function fo() {
  return v(function(i) {
    return i.count();
  }, arguments);
}
function wo() {
  return v(function(i, e, t, r, s) {
    return i.createIndex(b(e, t), r, s);
  }, arguments);
}
function ho() {
  return v(function(i, e, t, r) {
    return i.createIndex(b(e, t), r);
  }, arguments);
}
function mo() {
  return v(function(i, e, t) {
    return i.createObjectStore(b(e, t));
  }, arguments);
}
function vo(i) {
  return He.__wrap(i);
}
function ko(i) {
  return Qe.__wrap(i);
}
function So(i) {
  return $e.__wrap(i);
}
function Ro(i) {
  return i.crypto;
}
function Ko(i, e) {
  i.debug(e);
}
function Io(i) {
  console.debug(i);
}
function Co(i) {
  return Ye.__wrap(i);
}
function Do(i) {
  return Ze.__wrap(i);
}
function Eo(i) {
  return Xe.__wrap(i);
}
function Oo(i) {
  return j.__wrap(i);
}
function Mo() {
  return v(function(i, e, t) {
    i.deleteObjectStore(b(e, t));
  }, arguments);
}
function Bo() {
  return v(function(i) {
    return i.delete();
  }, arguments);
}
function qo() {
  return v(function(i, e) {
    return i.delete(e);
  }, arguments);
}
function Fo(i) {
  return ke.__wrap(i);
}
function zo(i) {
  return C.__wrap(i);
}
function Uo(i) {
  return Se.__wrap(i);
}
function Vo(i) {
  return oe.__wrap(i);
}
function To(i) {
  return i.done;
}
function jo(i) {
  return nt.__wrap(i);
}
function Po(i) {
  return ae.__wrap(i);
}
function xo(i) {
  return st.__wrap(i);
}
function Ao(i) {
  return Object.entries(i);
}
function No(i) {
  return i.entries();
}
function Lo(i, e) {
  let t, r;
  try {
    t = i, r = e, console.error(b(i, e));
  } finally {
    n.__wbindgen_free(t, r, 1);
  }
}
function Wo(i, e) {
  i.error(e);
}
function Go() {
  return v(function(i) {
    const e = i.error;
    return h(e) ? 0 : E(e);
  }, arguments);
}
function Jo(i) {
  console.error(i);
}
function Ho(i) {
  return Array.from(i);
}
function Qo() {
  return v(function(i) {
    return i.getAllKeys();
  }, arguments);
}
function $o() {
  return v(function(i) {
    return i.getAll();
  }, arguments);
}
function Yo() {
  return v(function(i, e) {
    return i.getAll(e);
  }, arguments);
}
function Zo() {
  return v(function(i) {
    return i.getAll();
  }, arguments);
}
function Xo() {
  return v(function(i, e, t) {
    return i.getAll(e, t >>> 0);
  }, arguments);
}
function e_() {
  return v(function(i, e) {
    globalThis.crypto.getRandomValues(z(i, e));
  }, arguments);
}
function t_() {
  return v(function(i, e) {
    i.getRandomValues(e);
  }, arguments);
}
function r_() {
  return v(function(i, e) {
    globalThis.crypto.getRandomValues(z(i, e));
  }, arguments);
}
function n_(i) {
  return i.getTime();
}
function i_() {
  return v(function(i, e) {
    return i.get(e);
  }, arguments);
}
function s_() {
  return v(function(i, e) {
    return Reflect.get(i, e);
  }, arguments);
}
function o_(i, e) {
  return i[e >>> 0];
}
function __() {
  return v(function(i, e) {
    return i.get(e);
  }, arguments);
}
function a_() {
  return v(function(i, e) {
    return Reflect.get(i, e);
  }, arguments);
}
function c_(i, e) {
  return i[e >>> 0];
}
function g_(i, e) {
  return i[e];
}
function d_(i) {
  return i.global;
}
function u_(i) {
  return at.__wrap(i);
}
function l_() {
  return v(function(i, e, t) {
    return i.index(b(e, t));
  }, arguments);
}
function p_() {
  return v(function(i) {
    const e = i.indexedDB;
    return h(e) ? 0 : E(e);
  }, arguments);
}
function y_() {
  return v(function(i) {
    const e = i.indexedDB;
    return h(e) ? 0 : E(e);
  }, arguments);
}
function b_() {
  return v(function(i) {
    const e = i.indexedDB;
    return h(e) ? 0 : E(e);
  }, arguments);
}
function f_(i, e) {
  i.info(e);
}
function w_(i) {
  console.info(i);
}
function h_(i) {
  let e;
  try {
    e = i instanceof ArrayBuffer;
  } catch {
    e = false;
  }
  return e;
}
function m_(i) {
  let e;
  try {
    e = i instanceof IDBCursorWithValue;
  } catch {
    e = false;
  }
  return e;
}
function v_(i) {
  let e;
  try {
    e = i instanceof DOMException;
  } catch {
    e = false;
  }
  return e;
}
function k_(i) {
  let e;
  try {
    e = i instanceof Error;
  } catch {
    e = false;
  }
  return e;
}
function S_(i) {
  let e;
  try {
    e = i instanceof IDBCursor;
  } catch {
    e = false;
  }
  return e;
}
function R_(i) {
  let e;
  try {
    e = i instanceof IDBDatabase;
  } catch {
    e = false;
  }
  return e;
}
function K_(i) {
  let e;
  try {
    e = i instanceof IDBOpenDBRequest;
  } catch {
    e = false;
  }
  return e;
}
function I_(i) {
  let e;
  try {
    e = i instanceof IDBRequest;
  } catch {
    e = false;
  }
  return e;
}
function C_(i) {
  let e;
  try {
    e = i instanceof Map;
  } catch {
    e = false;
  }
  return e;
}
function D_(i) {
  let e;
  try {
    e = i instanceof Promise;
  } catch {
    e = false;
  }
  return e;
}
function E_(i) {
  let e;
  try {
    e = i instanceof Uint8Array;
  } catch {
    e = false;
  }
  return e;
}
function O_(i) {
  return ct.__wrap(i);
}
function M_(i) {
  return Array.isArray(i);
}
function B_(i) {
  return Array.isArray(i);
}
function q_(i) {
  return Number.isSafeInteger(i);
}
function F_(i, e, t) {
  const r = e.item(t >>> 0);
  var s = h(r) ? 0 : p(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = d;
  M().setInt32(i + 4 * 1, o, true), M().setInt32(i + 4 * 0, s, true);
}
function z_() {
  return Symbol.iterator;
}
function U_() {
  return v(function(i) {
    return i.key;
  }, arguments);
}
function V_(i) {
  return Re.__wrap(i);
}
function T_(i) {
  return Ke.__wrap(i);
}
function j_(i) {
  return ce.__wrap(i);
}
function P_(i) {
  return Ie.__wrap(i);
}
function x_(i) {
  return i.length;
}
function A_(i) {
  return i.length;
}
function N_(i) {
  return i.length;
}
function L_() {
  return v(function(i, e) {
    return IDBKeyRange.lowerBound(i, e !== 0);
  }, arguments);
}
function W_(i) {
  return Ce.__wrap(i);
}
function G_(i) {
  return ge.__wrap(i);
}
function J_(i) {
  return i.message;
}
function H_(i, e) {
  const t = e.message, r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d;
  M().setInt32(i + 4 * 1, s, true), M().setInt32(i + 4 * 0, r, true);
}
function Q_(i) {
  return i.msCrypto;
}
function $_(i, e) {
  const t = e.name, r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d;
  M().setInt32(i + 4 * 1, s, true), M().setInt32(i + 4 * 0, r, true);
}
function Y_() {
  return new Object();
}
function Z_() {
  return /* @__PURE__ */ new Map();
}
function X_(i, e) {
  return new Error(b(i, e));
}
function ea() {
  return new Error();
}
function ta() {
  return new Array();
}
function ra(i) {
  return new Set(i);
}
function na(i) {
  return new Uint8Array(i);
}
function ia(i) {
  return new Date(i);
}
function sa(i, e) {
  try {
    var t = { a: i, b: e }, r = (o, _) => {
      const a = t.a;
      t.a = 0;
      try {
        return rs(a, t.b, o, _);
      } finally {
        t.a = a;
      }
    };
    return new Promise(r);
  } finally {
    t.a = 0;
  }
}
function oa(i, e) {
  try {
    var t = { a: i, b: e }, r = (o, _) => {
      const a = t.a;
      t.a = 0;
      try {
        return rs(a, t.b, o, _);
      } finally {
        t.a = a;
      }
    };
    return new Promise(r);
  } finally {
    t.a = 0;
  }
}
function _a(i) {
  return new Uint8Array(i >>> 0);
}
function aa(i) {
  return new Uint8ClampedArray(i >>> 0);
}
function ca(i) {
  return i.next;
}
function ga() {
  return v(function(i) {
    return i.next();
  }, arguments);
}
function da(i) {
  return i.node;
}
function ua() {
  return Date.now();
}
function la(i) {
  return i.now();
}
function pa(i) {
  return i.objectStoreNames;
}
function ya() {
  return v(function(i, e, t) {
    return i.objectStore(b(e, t));
  }, arguments);
}
function ba(i) {
  return i.oldVersion;
}
function fa(i) {
  return Oe.__wrap(i);
}
function wa() {
  return v(function(i) {
    return i.openCursor();
  }, arguments);
}
function ha() {
  return v(function(i, e) {
    return i.openCursor(e);
  }, arguments);
}
function ma() {
  return v(function(i) {
    return i.openCursor();
  }, arguments);
}
function va() {
  return v(function(i, e, t, r) {
    return i.open(b(e, t), r >>> 0);
  }, arguments);
}
function ka() {
  return v(function(i, e, t) {
    return i.open(b(e, t));
  }, arguments);
}
function Sa(i) {
  return Me.__wrap(i);
}
function Ra(i) {
  return Be.__wrap(i);
}
function Ka() {
  return v(function(i, e) {
    return JSON.parse(b(i, e));
  }, arguments);
}
function Ia(i) {
  return i.performance;
}
function Ca(i) {
  return qe.__unwrap(i);
}
function Da(i) {
  return Fe.__unwrap(i);
}
function Ea(i) {
  return yt.__wrap(i);
}
function Oa(i) {
  return i.process;
}
function Ma(i, e, t) {
  Uint8ClampedArray.prototype.set.call(z(i, e), t);
}
function Ba(i, e, t) {
  Uint8Array.prototype.set.call(z(i, e), t);
}
function qa(i, e) {
  return i.push(e);
}
function Fa() {
  return v(function(i, e, t) {
    return i.put(e, t);
  }, arguments);
}
function za(i) {
  return ze.__wrap(i);
}
function Ua(i) {
  return de.__wrap(i);
}
function Va(i) {
  return i.queueMicrotask;
}
function Ta(i) {
  queueMicrotask(i);
}
function ja() {
  return v(function(i, e) {
    i.randomFillSync(e);
  }, arguments);
}
function Pa(i) {
  const e = i.readyState;
  return (dg.indexOf(e) + 1 || 3) - 1;
}
function xa(i) {
  return wt.__wrap(i);
}
function Aa(i) {
  return i.request;
}
function Na(i) {
  return i.request;
}
function La() {
  return v(function() {
    return module.require;
  }, arguments);
}
function Wa(i) {
  return Promise.resolve(i);
}
function Ga() {
  return v(function(i) {
    return i.result;
  }, arguments);
}
function Ja(i) {
  return R.__unwrap(i);
}
function Ha(i) {
  return ht.__wrap(i);
}
function Qa(i) {
  return mt.__wrap(i);
}
function $a(i) {
  return vt.__wrap(i);
}
function Ya(i) {
  return kt.__wrap(i);
}
function Za(i) {
  return Ue.__wrap(i);
}
function Xa(i) {
  return St.__wrap(i);
}
function ec(i) {
  return $.__wrap(i);
}
function tc(i) {
  return le.__wrap(i);
}
function rc(i) {
  return Y.__wrap(i);
}
function nc() {
  return v(function(i, e) {
    return setTimeout(i, e);
  }, arguments);
}
function ic(i, e, t) {
  i[e] = t;
}
function sc(i, e, t) {
  i[e >>> 0] = t;
}
function oc(i, e, t) {
  i.set(z(e, t));
}
function _c(i, e, t) {
  return i.set(e, t);
}
function ac(i, e) {
  i.onabort = e;
}
function cc(i, e) {
  i.oncomplete = e;
}
function gc(i, e) {
  i.onerror = e;
}
function dc(i, e) {
  i.onerror = e;
}
function uc(i, e) {
  i.onsuccess = e;
}
function lc(i, e) {
  i.onupgradeneeded = e;
}
function pc(i, e) {
  i.unique = e !== 0;
}
function yc(i) {
  return je.__wrap(i);
}
function bc(i) {
  return pe.__wrap(i);
}
function fc(i) {
  return Kt.__wrap(i);
}
function wc(i, e) {
  const t = e.stack, r = p(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = d;
  M().setInt32(i + 4 * 1, s, true), M().setInt32(i + 4 * 0, r, true);
}
function hc() {
  const i = typeof globalThis > "u" ? null : globalThis;
  return h(i) ? 0 : E(i);
}
function mc() {
  const i = typeof global > "u" ? null : global;
  return h(i) ? 0 : E(i);
}
function vc() {
  const i = typeof self > "u" ? null : self;
  return h(i) ? 0 : E(i);
}
function kc() {
  const i = typeof window > "u" ? null : window;
  return h(i) ? 0 : E(i);
}
function Sc(i) {
  return Pe.__wrap(i);
}
function Rc(i) {
  return P.__wrap(i);
}
function Kc() {
  return v(function(i) {
    return JSON.stringify(i);
  }, arguments);
}
function Ic(i, e, t) {
  return i.subarray(e >>> 0, t >>> 0);
}
function Cc(i) {
  const e = i.target;
  return h(e) ? 0 : E(e);
}
function Dc(i, e) {
  return i.then(e);
}
function Ec(i, e, t) {
  return i.then(e, t);
}
function Oc(i) {
  return i.toString();
}
function Mc(i) {
  return xe.__wrap(i);
}
function Bc(i) {
  return i.transaction;
}
function qc() {
  return v(function(i, e, t) {
    return i.transaction(e, ns[t]);
  }, arguments);
}
function Fc(i) {
  const e = i.transaction;
  return h(e) ? 0 : E(e);
}
function zc() {
  return v(function(i, e, t, r) {
    return i.transaction(b(e, t), ns[r]);
  }, arguments);
}
function Uc() {
  return v(function(i, e) {
    return i.update(e);
  }, arguments);
}
function Vc() {
  return v(function(i, e) {
    return IDBKeyRange.upperBound(i, e !== 0);
  }, arguments);
}
function Tc(i) {
  return Et.__wrap(i);
}
function jc(i) {
  return w.__wrap(i);
}
function Pc(i) {
  return w.__unwrap(i);
}
function xc(i) {
  return Dt.__wrap(i);
}
function Ac() {
  return v(function(i) {
    return i.value;
  }, arguments);
}
function Nc(i) {
  return i.value;
}
function Lc(i) {
  return i.values();
}
function Wc(i) {
  return ye.__wrap(i);
}
function Gc(i) {
  return i.version;
}
function Jc(i) {
  return i.versions;
}
function Hc(i, e) {
  i.warn(e);
}
function Qc(i) {
  console.warn(i);
}
function $c(i, e) {
  return gr(i, e, cg);
}
function Yc(i, e) {
  return gr(i, e, ag);
}
function Zc(i, e) {
  return gr(i, e, gg);
}
function Xc(i, e) {
  return gr(i, e, _g);
}
function eg(i) {
  return i;
}
function tg(i) {
  return i;
}
function rg(i, e) {
  return z(i, e);
}
function ng(i, e) {
  return b(i, e);
}
function ig(i) {
  return BigInt.asUintN(64, i);
}
function sg(i, e) {
  var t = Mt(i, e).slice();
  return n.__wbindgen_free(i, e * 4, 4), t;
}
function og() {
  const i = n.__wbindgen_externrefs, e = i.grow(4);
  i.set(0, void 0), i.set(e + 0, void 0), i.set(e + 1, null), i.set(e + 2, true), i.set(e + 3, false);
}
function _g(i, e) {
  n.wasm_bindgen__convert__closures_____invoke__h3fc5f4d47ac7b23e(i, e);
}
function ag(i, e, t) {
  n.wasm_bindgen__convert__closures_____invoke__hc98e844383b6010d(i, e, t);
}
function cg(i, e, t) {
  const r = n.wasm_bindgen__convert__closures_____invoke__h6cc6e60feaea7523(i, e, t);
  if (r[1]) throw l(r[0]);
}
function gg(i, e, t) {
  const r = n.wasm_bindgen__convert__closures_____invoke__h6cc6e60feaea7523_2(i, e, t);
  if (r[1]) throw l(r[0]);
}
function rs(i, e, t, r) {
  n.wasm_bindgen__convert__closures_____invoke__h33afbfdbaf3c68e2(i, e, t, r);
}
const dg = ["pending", "done"], ns = ["readonly", "readwrite", "versionchange", "readwriteflush", "cleanup"], ug = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_attachment_free(i, 1)), vn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_backupdecryptionkey_free(i, 1)), kn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_backupkeys_free(i, 1)), Sn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_backupsecretsbundle_free(i, 1)), lr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_base64encodedpkmessage_free(i, 1)), Rn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_basemigrationdata_free(i, 1)), Kn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_cancelinfo_free(i, 1)), In = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_checkcode_free(i, 1)), Cn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_collectstrategy_free(i, 1)), Dn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_crosssigningbootstraprequests_free(i, 1)), En = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_crosssigningkeyexport_free(i, 1)), On = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_crosssigningstatus_free(i, 1)), pr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_curve25519publickey_free(i, 1)), Mn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_curve25519secretkey_free(i, 1)), Bn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_decryptedroomevent_free(i, 1)), qn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_decryptedtodeviceevent_free(i, 1)), Fn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_decryptionsettings_free(i, 1)), zn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_dehydrateddevice_free(i, 1)), Un = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_dehydrateddevicekey_free(i, 1)), Vn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_dehydrateddevices_free(i, 1)), Tn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_device_free(i, 1)), yr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_deviceid_free(i, 1)), jn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_devicekey_free(i, 1)), Pn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_devicekeyalgorithm_free(i, 1)), br = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_devicekeyid_free(i, 1)), xn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_devicelists_free(i, 1)), An = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_ecies_free(i, 1)), Nn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_ed25519publickey_free(i, 1)), fr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_ed25519signature_free(i, 1)), Ln = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_emoji_free(i, 1)), wr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_encryptedattachment_free(i, 1)), Wn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_encryptioninfo_free(i, 1)), Gn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_encryptionsettings_free(i, 1)), Jn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_establishedecies_free(i, 1)), Hn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_eventid_free(i, 1)), Qn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_identitykeys_free(i, 1)), $n = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_inboundcreationresult_free(i, 1)), Yn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_inboundgroupsession_free(i, 1)), Zn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_invalidtodeviceevent_free(i, 1)), hr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_keysbackuprequest_free(i, 1)), mr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_keysclaimrequest_free(i, 1)), vr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_keysqueryrequest_free(i, 1)), kr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_keysuploadrequest_free(i, 1)), Xn = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_maybesignature_free(i, 1)), ei = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_megolmdecryptionerror_free(i, 1)), ti = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_megolmv1backupkey_free(i, 1)), lg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_migration_free(i, 1)), ri = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_msc4108intentdata_free(i, 1)), ni = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_msc4388intentdata_free(i, 1)), Sr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_olmmachine_free(i, 1)), ii = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_otheruseridentity_free(i, 1)), si = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_outboundcreationresult_free(i, 1)), oi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_ownuseridentity_free(i, 1)), _i = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_pickledinboundgroupsession_free(i, 1)), ai = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_pickledsession_free(i, 1)), Rr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_pkdecryption_free(i, 1)), ci = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_pkencryption_free(i, 1)), gi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_pkmessage_free(i, 1)), di = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_plaintexttodeviceevent_free(i, 1)), Kr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_putdehydrateddevicerequest_free(i, 1)), ui = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_qr_free(i, 1)), li = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_qrcode_free(i, 1)), Ir = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_qrcodedata_free(i, 1)), pi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_qrcodeintentdata_free(i, 1)), yi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_qrcodescan_free(i, 1)), bi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_rehydrateddevice_free(i, 1)), Cr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomid_free(i, 1)), fi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomkeycounts_free(i, 1)), wi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomkeyimportresult_free(i, 1)), hi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomkeyinfo_free(i, 1)), mi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomkeywithheldinfo_free(i, 1)), Dr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roommessagerequest_free(i, 1)), vi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roompendingkeybundledetails_free(i, 1)), Er = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_roomsettings_free(i, 1)), ki = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_sas_free(i, 1)), Si = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_secretsbundle_free(i, 1)), Or = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_servername_free(i, 1)), Ri = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_shieldstate_free(i, 1)), Ki = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_signature_free(i, 1)), Mr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_signatureuploadrequest_free(i, 1)), Ii = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_signatureverification_free(i, 1)), Br = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_signatures_free(i, 1)), Ci = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_storehandle_free(i, 1)), Di = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_storedroomkeybundledata_free(i, 1)), Ei = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_todeviceencryptioninfo_free(i, 1)), qr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_todevicerequest_free(i, 1)), Oi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_todeviceunabletodecryptinfo_free(i, 1)), Mi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_tracing_free(i, 1)), Bi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_utdtodeviceevent_free(i, 1)), Fr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_uploadsigningkeysrequest_free(i, 1)), qi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_userdevices_free(i, 1)), zr = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_userid_free(i, 1)), Fi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_verificationrequest_free(i, 1)), zi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbg_versions_free(i, 1));
function E(i) {
  const e = n.__externref_table_alloc();
  return n.__wbindgen_externrefs.set(e, i), e;
}
function f(i, e) {
  if (!(i instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
const Ui = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => n.__wbindgen_destroy_closure(i.a, i.b));
function Hr(i) {
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
    s > 0 && (o += Hr(i[0]));
    for (let _ = 1; _ < s; _++) o += ", " + Hr(i[_]);
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
function Mt(i, e) {
  i = i >>> 0;
  const t = M(), r = [];
  for (let s = i; s < i + 4 * e; s += 4) r.push(n.__wbindgen_externrefs.get(t.getUint32(s, true)));
  return n.__externref_drop_slice(i, e), r;
}
function pg(i, e) {
  return i = i >>> 0, yg().subarray(i / 2, i / 2 + e);
}
function z(i, e) {
  return i = i >>> 0, Le().subarray(i / 1, i / 1 + e);
}
let Ne = null;
function M() {
  return (Ne === null || Ne.buffer.detached === true || Ne.buffer.detached === void 0 && Ne.buffer !== n.memory.buffer) && (Ne = new DataView(n.memory.buffer)), Ne;
}
function b(i, e) {
  return fg(i >>> 0, e);
}
let Yt = null;
function yg() {
  return (Yt === null || Yt.byteLength === 0) && (Yt = new Uint16Array(n.memory.buffer)), Yt;
}
let Zt = null;
function Le() {
  return (Zt === null || Zt.byteLength === 0) && (Zt = new Uint8Array(n.memory.buffer)), Zt;
}
function v(i, e) {
  try {
    return i.apply(this, e);
  } catch (t) {
    const r = E(t);
    n.__wbindgen_exn_store(r);
  }
}
function h(i) {
  return i == null;
}
function gr(i, e, t) {
  const r = { a: i, b: e, cnt: 1 }, s = (...o) => {
    r.cnt++;
    const _ = r.a;
    r.a = 0;
    try {
      return t(_, r.b, ...o);
    } finally {
      r.a = _, s._wbg_cb_unref();
    }
  };
  return s._wbg_cb_unref = () => {
    --r.cnt === 0 && (n.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, Ui.unregister(r));
  }, Ui.register(s, r, r), s;
}
function Z(i, e) {
  const t = e(i.length * 1, 1) >>> 0;
  return Le().set(i, t / 1), d = i.length, t;
}
function V(i, e) {
  const t = e(i.length * 4, 4) >>> 0;
  for (let r = 0; r < i.length; r++) {
    const s = E(i[r]);
    M().setUint32(t + 4 * r, s, true);
  }
  return d = i.length, t;
}
function p(i, e, t) {
  if (t === void 0) {
    const a = xt.encode(i), c = e(a.length, 1) >>> 0;
    return Le().subarray(c, c + a.length).set(a), d = a.length, c;
  }
  let r = i.length, s = e(r, 1) >>> 0;
  const o = Le();
  let _ = 0;
  for (; _ < r; _++) {
    const a = i.charCodeAt(_);
    if (a > 127) break;
    o[s + _] = a;
  }
  if (_ !== r) {
    _ !== 0 && (i = i.slice(_)), s = t(s, r, r = _ + i.length * 3, 1) >>> 0;
    const a = Le().subarray(s + _, s + r), c = xt.encodeInto(i, a);
    _ += c.written, s = t(s, r, _, 1) >>> 0;
  }
  return d = _, s;
}
function l(i) {
  const e = n.__wbindgen_externrefs.get(i);
  return n.__externref_table_dealloc(i), e;
}
let sr = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
sr.decode();
const bg = 2146435072;
let Ur = 0;
function fg(i, e) {
  return Ur += e, Ur >= bg && (sr = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), sr.decode(), Ur = e), sr.decode(Le().subarray(i, i + e));
}
const xt = new TextEncoder();
"encodeInto" in xt || (xt.encodeInto = function(i, e) {
  const t = xt.encode(i);
  return e.set(t), { read: i.length, written: t.length };
});
let d = 0, n;
function dn(i) {
  n = i;
}
const wg = Object.freeze(Object.defineProperty({ __proto__: null, Attachment: Ar, BackupDecryptionKey: F, BackupKeys: We, BackupSecretsBundle: Ge, Base64EncodedPkMessage: me, BaseMigrationData: At, CancelInfo: se, CheckCode: Je, CollectStrategy: B, CrossSigningBootstrapRequests: He, CrossSigningKeyExport: Qe, CrossSigningStatus: $e, Curve25519PublicKey: O, Curve25519SecretKey: G, DecryptedRoomEvent: Ye, DecryptedToDeviceEvent: Ze, DecryptionErrorCode: te, DecryptionSettings: ve, DehydratedDevice: Xe, DehydratedDeviceKey: j, DehydratedDevices: et, Device: ke, DeviceId: C, DeviceKey: Se, DeviceKeyAlgorithm: tt, DeviceKeyAlgorithmName: Rs, DeviceKeyId: oe, DeviceKeyName: Ks, DeviceLists: rt, Ecies: Nr, Ed25519PublicKey: H, Ed25519Signature: _e, Emoji: nt, EncryptedAttachment: ae, EncryptionAlgorithm: it, EncryptionInfo: st, EncryptionSettings: Nt, EstablishedEcies: Q, EventId: Lt, HistoryVisibility: Ut, IdentityKeys: ot, InboundCreationResult: _t, InboundGroupSession: at, InvalidToDeviceEvent: ct, KeysBackupRequest: Re, KeysClaimRequest: Ke, KeysQueryRequest: ce, KeysUploadRequest: Ie, LocalTrust: Lr, LoggerLevel: Is, MaybeSignature: Ce, MegolmDecryptionError: ge, MegolmV1BackupKey: gt, Migration: dt, Msc4108IntentData: De, Msc4388IntentData: Ee, OlmMachine: Oe, OtherUserIdentity: Me, OutboundCreationResult: ut, OwnUserIdentity: Be, PickledInboundGroupSession: qe, PickledSession: Fe, PkDecryption: lt, PkEncryption: pt, PkMessage: W, PlainTextToDeviceEvent: yt, ProcessedToDeviceEventType: Vt, PutDehydratedDeviceRequest: ze, Qr: de, QrCode: bt, QrCodeData: ie, QrCodeIntent: Cs, QrCodeIntentData: ft, QrCodeScan: ue, QrState: fe, RehydratedDevice: wt, RequestType: Ds, RoomId: R, RoomKeyCounts: ht, RoomKeyImportResult: mt, RoomKeyInfo: vt, RoomKeyWithheldInfo: kt, RoomMessageRequest: Ue, RoomPendingKeyBundleDetails: St, RoomSettings: $, Sas: le, SecretsBundle: Y, ServerName: Ve, ShieldColor: Wr, ShieldState: Te, ShieldStateCode: we, Signature: Rt, SignatureState: Es, SignatureUploadRequest: pe, SignatureVerification: Kt, Signatures: je, StoreHandle: P, StoredRoomKeyBundleData: Pe, ToDeviceEncryptionInfo: It, ToDeviceRequest: xe, ToDeviceUnableToDecryptInfo: Ct, ToDeviceUnableToDecryptReason: Os, Tracing: Gr, TrustRequirement: Jr, UTDToDeviceEvent: Dt, UploadSigningKeysRequest: Ae, UserDevices: Et, UserId: w, VerificationMethod: Tt, VerificationRequest: ye, VerificationRequestPhase: re, Versions: Ot, __wbg_Error_bce6d499ff0a4aff: Bs, __wbg_Number_b7972a139bfbfdf0: qs, __wbg_String_8564e559799eccda: Fs, __wbg_Window_241244be8c9776c1: zs, __wbg_WorkerGlobalScope_8623a7c9030fbce2: Us, __wbg___wbindgen_bigint_get_as_i64_410e28c7b761ad83: Vs, __wbg___wbindgen_boolean_get_2304fb8c853028c8: Ts, __wbg___wbindgen_debug_string_edece8177ad01481: js, __wbg___wbindgen_in_07056af4f902c445: Ps, __wbg___wbindgen_is_bigint_aeae3893f30ed54e: xs, __wbg___wbindgen_is_function_5cd60d5cf78b4eef: As, __wbg___wbindgen_is_null_2042690d351e14f0: Ns, __wbg___wbindgen_is_object_b4593df85baada48: Ls, __wbg___wbindgen_is_string_dde0fd9020db4434: Ws, __wbg___wbindgen_is_undefined_35bb9f4c7fd651d5: Gs, __wbg___wbindgen_jsval_eq_c0ed08b3e0f393b9: Js, __wbg___wbindgen_jsval_loose_eq_0ad77b7717db155c: Hs, __wbg___wbindgen_number_get_f73a1244370fcc2c: Qs, __wbg___wbindgen_string_get_d109740c0d18f4d7: $s, __wbg___wbindgen_throw_9c31b086c2b26051: Ys, __wbg__wbg_cb_unref_3fa391f3fcdb55f8: Zs, __wbg_abort_70a701fced9ad53a: Xs, __wbg_add_07a7ab95134233b9: eo, __wbg_add_2d9a55f3b0313ab0: to, __wbg_at_3bffe427b0245c4e: ro, __wbg_backupkeys_new: no, __wbg_bound_8d5dfa042d13a74b: io, __wbg_call_084ee3e860ee9f92: so, __wbg_call_13665d9f14390edc: oo, __wbg_call_dfde26266607c996: _o, __wbg_call_faa0a261f288f846: ao, __wbg_clearTimeout_113b1cde814ec762: co, __wbg_clear_bb1b3ff877b62598: go, __wbg_close_b66c780bfc7dd92c: uo, __wbg_code_b725fad05a5aceb3: lo, __wbg_commit_ebd6d9676954e0d2: po, __wbg_continue_6f5a7d3d3bc4a125: yo, __wbg_count_048ba344d77978d6: bo, __wbg_count_0e78b9f66eb6a1d6: fo, __wbg_createIndex_4dedb55a60318332: wo, __wbg_createIndex_82392a1ffeb84021: ho, __wbg_createObjectStore_ce6be0d6715f0760: mo, __wbg_crosssigningbootstraprequests_new: vo, __wbg_crosssigningkeyexport_new: ko, __wbg_crosssigningstatus_new: So, __wbg_crypto_38df2bab126b63dc: Ro, __wbg_debug_1ac2ea5532f70f4c: Ko, __wbg_debug_83758bc0b77ada71: Io, __wbg_decryptedroomevent_new: Co, __wbg_decryptedtodeviceevent_new: Do, __wbg_dehydrateddevice_new: Eo, __wbg_dehydrateddevicekey_new: Oo, __wbg_deleteObjectStore_91d035f22c860ba0: Mo, __wbg_delete_9c4e8b22a8b0ff3c: Bo, __wbg_delete_bc03f88e7f14db56: qo, __wbg_device_new: Fo, __wbg_deviceid_new: zo, __wbg_devicekey_new: Uo, __wbg_devicekeyid_new: Vo, __wbg_done_54b8da57023b7ed2: To, __wbg_emoji_new: jo, __wbg_encryptedattachment_new: Po, __wbg_encryptioninfo_new: xo, __wbg_entries_564a7e8b1e54ede5: Ao, __wbg_entries_c5ae2149eef72ab2: No, __wbg_error_a6fa202b58aa1cd3: Lo, __wbg_error_dbd3752906405f8d: Wo, __wbg_error_ef9cbaece146d1d5: Go, __wbg_error_f085d7e62279b703: Jo, __wbg_from_fa561fa561dc8031: Ho, __wbg_getAllKeys_07d656e168400060: Qo, __wbg_getAll_31747a1df22443f5: $o, __wbg_getAll_a0a54eef6ac20915: Yo, __wbg_getAll_bc4f4ec6a1504163: Zo, __wbg_getAll_f658d6ff0380c8c0: Xo, __wbg_getRandomValues_76dfc69825c9c552: e_, __wbg_getRandomValues_c44a50d8cfdaebeb: t_, __wbg_getRandomValues_ef12552bf5acd2fe: r_, __wbg_getTime_09f1dd40a44edb30: n_, __wbg_get_335f027bf0ad3391: i_, __wbg_get_3e9a707ab7d352eb: s_, __wbg_get_98fdf51d029a75eb: o_, __wbg_get_b6f278d067d9edad: __, __wbg_get_dcf82ab8aad1a593: a_, __wbg_get_unchecked_1dfe6d05ad91d9b7: c_, __wbg_get_with_ref_key_6412cf3094599694: g_, __wbg_global_94a489d2e6a0c5fd: d_, __wbg_inboundgroupsession_new: u_, __wbg_index_1eb6fae6472ecb14: l_, __wbg_indexedDB_2e82cb845ce6b3ad: p_, __wbg_indexedDB_47c354eb27472a00: y_, __wbg_indexedDB_cbfeacc981615a77: b_, __wbg_info_929f1b00bd4820a9: f_, __wbg_info_d2226ca1698bd09c: w_, __wbg_instanceof_ArrayBuffer_53db37b06f6b9afe: h_, __wbg_instanceof_CursorSys_383984afc1fa1bbc: m_, __wbg_instanceof_DomException_bc16ce893e8c7439: v_, __wbg_instanceof_Error_b3f7e146d654031a: k_, __wbg_instanceof_IdbCursor_9dd6ddde8160efcf: S_, __wbg_instanceof_IdbDatabase_102b0fe5255eee9c: R_, __wbg_instanceof_IdbOpenDbRequest_2cce7fd687448f0f: K_, __wbg_instanceof_IdbRequest_eef501cff5d0b7c1: I_, __wbg_instanceof_Map_16f217b9a2a08d8c: C_, __wbg_instanceof_Promise_09012cfa9708520a: D_, __wbg_instanceof_Uint8Array_abd07d4bd221d50b: E_, __wbg_invalidtodeviceevent_new: O_, __wbg_isArray_74b636a53056fecb: M_, __wbg_isArray_94898ed3aad6947b: B_, __wbg_isSafeInteger_01e964d144ad3a55: q_, __wbg_item_c9a2ae22eb138d82: F_, __wbg_iterator_1441b47f341dc34f: z_, __wbg_key_387cdde352276f3a: U_, __wbg_keysbackuprequest_new: V_, __wbg_keysclaimrequest_new: T_, __wbg_keysqueryrequest_new: j_, __wbg_keysuploadrequest_new: P_, __wbg_length_2591a0f4f659a55c: x_, __wbg_length_56fcd3e2b7e0299d: A_, __wbg_length_949f85b73ce6595d: N_, __wbg_lowerBound_a64226f683db77bb: L_, __wbg_maybesignature_new: W_, __wbg_megolmdecryptionerror_new: G_, __wbg_message_324ac511aeaf710e: J_, __wbg_message_e88a8d3ba2b91c2a: H_, __wbg_msCrypto_bd5a034af96bcba6: Q_, __wbg_name_fe88cfc178ec40b8: $_, __wbg_new_02d162bc6cf02f60: Y_, __wbg_new_070df68d66325372: Z_, __wbg_new_1f236d63ba0c4784: X_, __wbg_new_227d7c05414eb861: ea, __wbg_new_310879b66b6e95e1: ta, __wbg_new_6c6169c583e23af8: ra, __wbg_new_7ddec6de44ff8f5d: na, __wbg_new_859b9002e2668e82: ia, __wbg_new_d8dfd33fa007511d: sa, __wbg_new_typed_c072c4ce9a2a0cdf: oa, __wbg_new_with_length_99887c91eae4abab: _a, __wbg_new_with_length_f193d8561d89261d: aa, __wbg_next_2a4e19f4f5083b0f: ca, __wbg_next_6429a146bf756f93: ga, __wbg_node_84ea875411254db1: da, __wbg_now_81363d44c96dd239: ua, __wbg_now_e7c6795a7f81e10f: la, __wbg_objectStoreNames_7eb10221ec542d29: pa, __wbg_objectStore_b28adb984a77902e: ya, __wbg_oldVersion_afd7254bce31480c: ba, __wbg_olmmachine_new: fa, __wbg_openCursor_3f4e3e61d07887e9: wa, __wbg_openCursor_61c49273b7c65183: ha, __wbg_openCursor_7423d75422835a48: ma, __wbg_open_40ab11cdd8f5ac5a: va, __wbg_open_a9584db064190886: ka, __wbg_otheruseridentity_new: Sa, __wbg_ownuseridentity_new: Ra, __wbg_parse_2c1cad6215e84999: Ka, __wbg_performance_3fcf6e32a7e1ed0a: Ia, __wbg_pickledinboundgroupsession_unwrap: Ca, __wbg_pickledsession_unwrap: Da, __wbg_plaintexttodeviceevent_new: Ea, __wbg_process_44c7a14e11e9f69e: Oa, __wbg_prototypesetcall_337df880a7679568: Ma, __wbg_prototypesetcall_5f9bdc8d75e07276: Ba, __wbg_push_b77c476b01548d0a: qa, __wbg_put_ad17713e2c2f12fa: Fa, __wbg_putdehydrateddevicerequest_new: za, __wbg_qr_new: Ua, __wbg_queueMicrotask_78d584b53af520f5: Va, __wbg_queueMicrotask_b39ea83c7f01971a: Ta, __wbg_randomFillSync_6c25eac9869eb53c: ja, __wbg_readyState_b7c530197b76b93b: Pa, __wbg_rehydrateddevice_new: xa, __wbg_request_64abeba15a72c084: Aa, __wbg_request_72a78988f2edecad: Na, __wbg_require_b4edbdcf3e2a1ef0: La, __wbg_resolve_d17db9352f5a220e: Wa, __wbg_result_c4cb33cd39c97cac: Ga, __wbg_roomid_unwrap: Ja, __wbg_roomkeycounts_new: Ha, __wbg_roomkeyimportresult_new: Qa, __wbg_roomkeyinfo_new: $a, __wbg_roomkeywithheldinfo_new: Ya, __wbg_roommessagerequest_new: Za, __wbg_roompendingkeybundledetails_new: Xa, __wbg_roomsettings_new: ec, __wbg_sas_new: tc, __wbg_secretsbundle_new: rc, __wbg_setTimeout_ef24d2fc3ad97385: nc, __wbg_set_6be42768c690e380: ic, __wbg_set_78ea6a19f4818587: sc, __wbg_set_bf22f3de29cb1fce: oc, __wbg_set_facb7a5914e0fa39: _c, __wbg_set_onabort_ed56d2172d920901: ac, __wbg_set_oncomplete_3f428ec13b20d7cc: cc, __wbg_set_onerror_38740b892815eedc: gc, __wbg_set_onerror_457b093a5063c7ec: dc, __wbg_set_onsuccess_b556141053d02ea7: uc, __wbg_set_onupgradeneeded_f885fa17614acd2b: lc, __wbg_set_unique_c307b08264e831b2: pc, __wbg_set_wasm: dn, __wbg_signatures_new: yc, __wbg_signatureuploadrequest_new: bc, __wbg_signatureverification_new: fc, __wbg_stack_3b0d974bbf31e44f: wc, __wbg_static_accessor_GLOBAL_THIS_02344c9b09eb08a9: hc, __wbg_static_accessor_GLOBAL_ac6d4ac874d5cd54: mc, __wbg_static_accessor_SELF_9b2406c23aeb2023: vc, __wbg_static_accessor_WINDOW_b34d2126934e16ba: kc, __wbg_storedroomkeybundledata_new: Sc, __wbg_storehandle_new: Rc, __wbg_stringify_ef0c105b1ccc3849: Kc, __wbg_subarray_7c6a0da8f3b4a1ba: Ic, __wbg_target_84e05e84ffc12989: Cc, __wbg_then_837494e384b37459: Dc, __wbg_then_bd927500e8905df2: Ec, __wbg_toString_1dda136fd8f30a5f: Oc, __wbg_todevicerequest_new: Mc, __wbg_transaction_213e4f585d3d1b40: Bc, __wbg_transaction_38cea079a9d82352: qc, __wbg_transaction_623d0b0d88e248ee: Fc, __wbg_transaction_b7261fed68fa4264: zc, __wbg_update_5c0f974a3c0850fc: Uc, __wbg_upperBound_f7daa7529e579cfc: Vc, __wbg_userdevices_new: Tc, __wbg_userid_new: jc, __wbg_userid_unwrap: Pc, __wbg_utdtodeviceevent_new: xc, __wbg_value_308a5bab6b4eb311: Ac, __wbg_value_9cc0518af87a489c: Nc, __wbg_values_2e4d34d52f9540dc: Lc, __wbg_verificationrequest_new: Wc, __wbg_version_0fcb42f756365cc1: Gc, __wbg_versions_276b2795b1c6a219: Jc, __wbg_warn_b62de6508e8608cc: Hc, __wbg_warn_c4e0780980765a86: Qc, __wbindgen_cast_0000000000000001: $c, __wbindgen_cast_0000000000000002: Yc, __wbindgen_cast_0000000000000003: Zc, __wbindgen_cast_0000000000000004: Xc, __wbindgen_cast_0000000000000005: eg, __wbindgen_cast_0000000000000006: tg, __wbindgen_cast_0000000000000007: rg, __wbindgen_cast_0000000000000008: ng, __wbindgen_cast_0000000000000009: ig, __wbindgen_cast_000000000000000a: sg, __wbindgen_init_externref_table: og, getVersions: ts, start: Ms }, Symbol.toStringTag, { value: "Module" })), hg = new URL("/assets/matrix_sdk_crypto_wasm_bg-DwIieW7K.wasm", import.meta.url);
dn(new Proxy({}, { get() {
  throw new Error("@matrix-org/matrix-sdk-crypto-wasm was used before it was initialized. Call `initAsync` first.");
} }));
let Vr = null;
async function mg(i) {
  const { instance: e } = await WebAssembly.instantiateStreaming(fetch(i), { "./matrix_sdk_crypto_wasm_bg.js": wg });
  dn(e.exports), e.exports.__wbindgen_start();
}
async function is(i = hg) {
  Vr || (Vr = mg(i)), await Vr;
}
var Vi = /[\\\"\x00-\x1F]/g, X = {};
for (var Xt = 0; Xt < 32; ++Xt) X[String.fromCharCode(Xt)] = "\\U" + ("0000" + Xt.toString(16)).slice(-4).toUpperCase();
X["\b"] = "\\b";
X["	"] = "\\t";
X[`
`] = "\\n";
X["\f"] = "\\f";
X["\r"] = "\\r";
X['"'] = '\\"';
X["\\"] = "\\\\";
function ss(i) {
  return Vi.lastIndex = 0, i.replace(Vi, function(e) {
    return X[e];
  });
}
function un(i) {
  switch (typeof i) {
    case "string":
      return '"' + ss(i) + '"';
    case "number":
      return isFinite(i) ? i : "null";
    case "boolean":
      return i;
    case "object":
      return i === null ? "null" : Array.isArray(i) ? vg(i) : kg(i);
    default:
      throw new Error("Cannot stringify: " + typeof i);
  }
}
function vg(i) {
  for (var e = "[", t = "", r = 0; r < i.length; ++r) t += e, e = ",", t += un(i[r]);
  return e != "," ? "[]" : t + "]";
}
function kg(i) {
  var e = "{", t = "", r = Object.keys(i);
  r.sort();
  for (var s = 0; s < r.length; ++s) {
    var o = r[s];
    t += e + '"' + ss(o) + '":', e = ",", t += un(i[o]);
  }
  return e != "," ? "{}" : t + "}";
}
var Sg = { stringify: un };
const Rg = Ss(Sg);
class Kg {
  constructor(e, t, r, s, o, _) {
    this.prefixedLogger = e, this.olmMachine = t, this.keyClaimManager = r, this.outgoingRequestManager = s, this.room = o, this.encryptionSettings = _, S(this, "lazyLoadedMembersResolved", false), S(this, "currentEncryptionPromise", Promise.resolve());
    var a = o.getJoinedMembers();
    this.olmMachine.updateTrackedUsers(a.map((c) => new w(c.userId))).catch((c) => this.prefixedLogger.error("Error initializing tracked users", c));
  }
  onCryptoEvent(e) {
    if (JSON.stringify(this.encryptionSettings) != JSON.stringify(e)) throw new Error("Cannot reconfigure an active RoomEncryptor");
  }
  onRoomMembership(e) {
    (e.membership == _r.Join || e.membership == _r.Invite && this.room.shouldEncryptForInvitedMembers()) && this.olmMachine.updateTrackedUsers([new w(e.userId)]).catch((t) => {
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
    var s, o = this, _ = new rr(this.prefixedLogger, e ? (s = e.getTxnId()) !== null && s !== void 0 ? s : "" : "prepareForEncryption"), a = this.currentEncryptionPromise.catch(() => {
    }).then(g(function* () {
      yield J(_, "ensureEncryptionSession", g(function* () {
        yield o.ensureEncryptionSession(_, t, r);
      })), e && (yield J(_, "encryptEventInner", g(function* () {
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
      s.lazyLoadedMembersResolved ? (e.debug("Processing outgoing requests in background"), s.outgoingRequestManager.doProcessOutgoingRequests()) : (yield J(e, "loadMembersIfNeeded: updateTrackedUsers", g(function* () {
        yield s.olmMachine.updateTrackedUsers(o.map((y) => new w(y.userId)));
      })), e.debug("Updated tracked users"), s.lazyLoadedMembersResolved = true, e.debug("Processing outgoing requests"), yield J(e, "doProcessOutgoingRequests", g(function* () {
        yield s.outgoingRequestManager.doProcessOutgoingRequests();
      }))), e.debug("Encrypting for users (shouldEncryptForInvitedMembers: ".concat(s.room.shouldEncryptForInvitedMembers(), "):"), o.map((y) => "".concat(y.userId, " (").concat(y.membership, ")")));
      var _ = o.map((y) => new w(y.userId));
      yield J(e, "ensureSessionsForUsers", g(function* () {
        yield s.keyClaimManager.ensureSessionsForUsers(e, _);
      }));
      var a = new Nt();
      switch (a.historyVisibility = Ig(s.room.getHistoryVisibility()), a.algorithm = it.MegolmV1AesSha2, typeof s.encryptionSettings.rotation_period_ms == "number" && (a.rotationPeriod = BigInt(s.encryptionSettings.rotation_period_ms * 1e3)), typeof s.encryptionSettings.rotation_period_msgs == "number" && (a.rotationPeriodMessages = BigInt(s.encryptionSettings.rotation_period_msgs)), r.kind) {
        case ar.AllDevicesIsolationMode:
          {
            var c, u = (c = s.room.getBlacklistUnverifiedDevices()) !== null && c !== void 0 ? c : t;
            a.sharingStrategy = B.deviceBasedStrategy(u, r.errorOnVerifiedUserProblems);
          }
          break;
        case ar.OnlySignedDevicesIsolationMode:
          a.sharingStrategy = B.identityBasedStrategy();
          break;
      }
      yield J(e, "shareRoomKey", g(function* () {
        var y = yield s.olmMachine.shareRoomKey(new R(s.room.roomId), _, a);
        if (y) for (var m of y) yield s.outgoingRequestManager.outgoingRequestProcessor.makeOutgoingRequest(m);
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
      t.makeEncrypted(A.RoomMessageEncrypted, JSON.parse(s), r.olmMachine.identityKeys.curve25519.toBase64(), r.olmMachine.identityKeys.ed25519.toBase64()), e.debug("Encrypted event successfully");
    })();
  }
}
function Ig(i) {
  switch (i) {
    case Qt.Invited:
      return Ut.Invited;
    case Qt.Joined:
      return Ut.Joined;
    case Qt.Shared:
      return Ut.Shared;
    case Qt.WorldReadable:
      return Ut.WorldReadable;
  }
}
var jt = "/_matrix/client/unstable/org.matrix.msc3814.v1", Tr = "org.matrix.msc3814", Cg = 7 * 24 * 60 * 60 * 1e3;
class Dg extends Wt {
  constructor(e, t, r, s, o) {
    super(), this.logger = e, this.olmMachine = t, this.http = r, this.outgoingRequestProcessor = s, this.secretStorage = o, S(this, "intervalId", void 0);
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
        yield e.http.authedRequest(D.Get, "/dehydrated_device", void 0, void 0, { prefix: jt });
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
      return !!(yield e.secretStorage.isStored(Tr));
    })();
  }
  resetKey() {
    var e = this;
    return g(function* () {
      var t = j.createRandomKey();
      return yield e.secretStorage.store(Tr, t.toBase64()), yield e.cacheKey(t), t;
    })();
  }
  getKey(e) {
    var t = this;
    return g(function* () {
      var r = yield t.olmMachine.dehydratedDevices().getDehydratedDeviceKey();
      if (r) return r;
      var s = yield t.secretStorage.get(Tr);
      if (s === void 0) return e ? yield t.resetKey() : null;
      var o = Pr(s);
      try {
        var _ = j.createKeyFromArray(o);
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
        r = yield e.http.authedRequest(D.Get, "/dehydrated_device", void 0, void 0, { prefix: jt });
      } catch (k) {
        var s = k;
        if (s.errcode === "M_NOT_FOUND" || s.errcode === "M_UNRECOGNIZED") return e.logger.info("dehydration: No dehydrated device"), false;
        throw s;
      }
      e.logger.info("dehydration: dehydrated device found"), e.emit(I.RehydrationStarted);
      var o = yield e.olmMachine.dehydratedDevices().rehydrate(t, new C(r.device_id), JSON.stringify(r.device_data));
      e.logger.info("dehydration: device rehydrated");
      for (var _ = void 0, a = 0, c = 0, u = cr("/dehydrated_device/$device_id/events", { $device_id: r.device_id }); ; ) {
        var y = yield e.http.authedRequest(D.Post, u, void 0, _ ? { next_batch: _ } : {}, { prefix: jt });
        if (y.events.length === 0) break;
        a += y.events.length, _ = y.next_batch;
        var m = yield o.receiveEvents(JSON.stringify(y.events));
        c += m.length, e.emit(I.RehydrationProgress, c, a);
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
      }, Cg);
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
        yield e.http.authedRequest(D.Delete, "/dehydrated_device", void 0, {}, { prefix: jt });
      } catch (r) {
        var t = r;
        if (t.errcode === "M_UNRECOGNIZED") return;
        if (t.errcode === "M_NOT_FOUND") return;
        throw r;
      }
    })();
  }
}
function Ti(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(i, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Eg(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ti(Object(t), true).forEach(function(r) {
      S(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Ti(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
class Og {
  constructor(e, t, r) {
    this.logger = e, this.olmMachine = t, this.http = r;
  }
  makeOutgoingRequest(e, t) {
    var r = this;
    return g(function* () {
      var s;
      if (e instanceof Ie) s = yield r.requestWithRetry(D.Post, "/_matrix/client/v3/keys/upload", {}, e.body);
      else if (e instanceof ce) s = yield r.requestWithRetry(D.Post, "/_matrix/client/v3/keys/query", {}, e.body);
      else if (e instanceof Ke) s = yield r.requestWithRetry(D.Post, "/_matrix/client/v3/keys/claim", {}, e.body);
      else if (e instanceof pe) s = yield r.requestWithRetry(D.Post, "/_matrix/client/v3/keys/signatures/upload", {}, e.body);
      else if (e instanceof Re) s = yield r.requestWithRetry(D.Put, "/_matrix/client/v3/room_keys/keys", { version: e.version }, e.body);
      else if (e instanceof xe) s = yield r.sendToDeviceRequest(e);
      else if (e instanceof Ue) {
        var o = "/_matrix/client/v3/rooms/".concat(encodeURIComponent(e.room_id), "/send/") + "".concat(encodeURIComponent(e.event_type), "/").concat(encodeURIComponent(e.txn_id));
        s = yield r.requestWithRetry(D.Put, o, {}, e.body);
      } else if (e instanceof Ae) {
        yield r.makeRequestWithUIA(D.Post, "/_matrix/client/v3/keys/device_signing/upload", {}, e.body, t);
        return;
      } else if (e instanceof ze) {
        var _ = jt + "/dehydrated_device";
        yield r.rawJsonRequest(D.Put, _, {}, e.body);
        return;
      } else r.logger.warn("Unsupported outgoing message", Object.getPrototypeOf(e)), s = "";
      if (e.id) try {
        yield J(r.logger, "Mark Request as sent ".concat(e.type), g(function* () {
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
      for (var [o, _] of Object.entries(r.messages)) for (var [a, c] of Object.entries(_)) s.push("".concat(o, "/").concat(a, " (msgid ").concat(c[bs], ")"));
      t.logger.info("Sending batch of to-device messages. type=".concat(e.event_type, " txnid=").concat(e.txn_id), s);
      var u = "/_matrix/client/v3/sendToDevice/".concat(encodeURIComponent(e.event_type), "/") + encodeURIComponent(e.txn_id);
      return yield t.requestWithRetry(D.Put, u, {}, e.body);
    })();
  }
  makeRequestWithUIA(e, t, r, s, o) {
    var _ = this;
    return g(function* () {
      if (!o) return yield _.requestWithRetry(e, t, r, s);
      var a = JSON.parse(s), c = function() {
        var y = g(function* (m) {
          var k = Eg({}, a);
          m !== null && (k.auth = m);
          var K = yield _.requestWithRetry(e, t, r, JSON.stringify(k));
          return JSON.parse(K);
        });
        return function(k) {
          return y.apply(this, arguments);
        };
      }(), u = yield o(c);
      return JSON.stringify(u);
    })();
  }
  requestWithRetry(e, t, r, s) {
    var o = this;
    return g(function* () {
      for (var _ = 0; ; ) try {
        return yield o.rawJsonRequest(e, t, r, s);
      } catch (c) {
        _++;
        var a = fs(c, _, true);
        if (a < 0) throw c;
        yield he(a);
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
class Mg {
  constructor(e, t) {
    this.olmMachine = e, this.outgoingRequestProcessor = t, S(this, "currentClaimPromise", void 0), S(this, "stopped", false), this.currentClaimPromise = Promise.resolve();
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
function Bg(i, e) {
  var t = /* @__PURE__ */ new Map();
  for (var [r, s] of i.keys.entries()) t.set(r.toString(), s.toBase64());
  var o = nr.Unverified;
  i.isBlacklisted() ? o = nr.Blocked : i.isVerified() && (o = nr.Verified);
  var _ = /* @__PURE__ */ new Map(), a = i.signatures.get(e);
  if (a) {
    var c = /* @__PURE__ */ new Map();
    for (var [u, y] of a.entries()) y.isValid() && y.signature && c.set(u, y.signature.toBase64());
    _.set(e.toString(), c);
  }
  var m = i.algorithms, k = /* @__PURE__ */ new Set();
  return m.forEach((K) => {
    switch (K) {
      case it.MegolmV1AesSha2:
        k.add("m.megolm.v1.aes-sha2");
        break;
      case it.OlmV1Curve25519AesSha2:
      default:
        k.add("m.olm.v1.curve25519-aes-sha2");
        break;
    }
  }), new Qi({ deviceId: i.deviceId.toString(), userId: e.toString(), keys: t, algorithms: Array.from(k), verified: o, signatures: _, displayName: i.displayName, dehydrated: i.isDehydrated });
}
function qg(i) {
  return new Map(Object.entries(i).map((e) => {
    var [t, r] = e;
    return [t, Fg(r)];
  }));
}
function Fg(i) {
  var e, t = new Map(Object.entries(i.keys)), r = (e = i.unsigned) === null || e === void 0 ? void 0 : e.device_display_name, s = /* @__PURE__ */ new Map();
  if (i.signatures) for (var o in i.signatures) s.set(o, new Map(Object.entries(i.signatures[o])));
  return new Qi({ deviceId: i.device_id, userId: i.user_id, keys: t, algorithms: i.algorithms, verified: nr.Unverified, signatures: s, displayName: r });
}
class zg {
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
        var u = yield t.olmMachine.importCrossSigningKeys(s, o, _);
        if (!u.hasMaster || !u.hasSelfSigning || !u.hasUserSigning) throw new Error("importCrossSigningKeys failed to import the keys");
        var y = yield t.olmMachine.getDevice(t.olmMachine.userId, t.olmMachine.deviceId);
        try {
          var m = yield y.verify();
          yield t.outgoingRequestProcessor.makeOutgoingRequest(m);
        } finally {
          y.free();
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
function ji(i) {
  return Qr.apply(this, arguments);
}
function Qr() {
  return Qr = g(function* (i) {
    return os(i, ["m.cross_signing.master", "m.cross_signing.user_signing", "m.cross_signing.self_signing"]);
  }), Qr.apply(this, arguments);
}
function os(i, e) {
  return $r.apply(this, arguments);
}
function $r() {
  return $r = g(function* (i, e) {
    var t = yield i.getDefaultKeyId();
    if (!t) return false;
    for (var r of e) {
      var s = (yield i.isStored(r)) || {};
      if (!(t in s)) return false;
    }
    return true;
  }), $r.apply(this, arguments);
}
class Ug extends Wt {
  constructor(e, t, r, s, o) {
    super(), this.logger = e, this.olmMachine = t, this.inner = r, this.outgoingRequestProcessor = s, this.supportedVerificationMethods = o, S(this, "reEmitter", void 0), S(this, "_accepting", false), S(this, "_cancelling", false), S(this, "_verifier", void 0), this.reEmitter = new $i(this);
    var _ = new WeakRef(this);
    r.registerChangesCallback(g(function* () {
      var a;
      return (a = _.deref()) === null || a === void 0 ? void 0 : a.onChange();
    }));
  }
  onChange() {
    var e = this.inner.getVerification();
    e instanceof le ? this._verifier === void 0 || this._verifier instanceof Pi ? this.setVerifier(new xi(e, this, this.outgoingRequestProcessor)) : this._verifier instanceof xi && this._verifier.replaceInner(e) : e instanceof de && this._verifier === void 0 && this.setVerifier(new Pi(e, this.outgoingRequestProcessor)), this.emit(Ft.Change);
  }
  setVerifier(e) {
    this._verifier && this.reEmitter.stopReEmitting(this._verifier, [Ft.Change]), this._verifier = e, this.reEmitter.reEmit(this._verifier, [Ft.Change]);
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
      case re.Created:
      case re.Requested:
        return q.Requested;
      case re.Ready:
        return this._accepting ? q.Requested : q.Ready;
      case re.Transitioned:
        if (!this._verifier) throw new Error("VerificationRequest: inner phase == Transitioned but no verifier!");
        return this._verifier.verificationPhase;
      case re.Done:
        return q.Done;
      case re.Cancelled:
        return q.Cancelled;
    }
    throw new Error("Unknown verification phase ".concat(e));
  }
  get pending() {
    if (this.inner.isPassive()) return false;
    var e = this.phase;
    return e !== q.Done && e !== q.Cancelled;
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
    if (this.phase !== q.Started) return null;
    var e = this.inner.getVerification();
    return e instanceof le ? L.Sas : e instanceof de ? L.Reciprocate : null;
  }
  otherPartySupportsMethod(e) {
    var t = this.inner.theirSupportedMethods;
    if (t === void 0) return false;
    var r = as[e];
    return t.some((s) => s === r);
  }
  accept() {
    var e = this;
    return g(function* () {
      if (e.inner.phase() !== re.Requested || e._accepting) throw new Error("Cannot accept a verification request in phase ".concat(e.phase));
      e._accepting = true;
      try {
        var t = e.inner.acceptWithMethods(e.supportedVerificationMethods.map(or));
        t && (yield e.outgoingRequestProcessor.makeOutgoingRequest(t));
      } finally {
        e._accepting = false;
      }
      e.emit(Ft.Change);
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
      if (e !== L.Sas) throw new Error("Unsupported verification method ".concat(e));
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
      var r = ue.fromBytes(e), s = yield t.inner.scanQrCode(r);
      if (!t._verifier) throw new Error("Still no verifier after scanQrCode() call");
      var o = s.reciprocate();
      return o && (yield t.outgoingRequestProcessor.makeOutgoingRequest(o)), t._verifier;
    })();
  }
  get verifier() {
    return this.phase === q.Started ? this._verifier : void 0;
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
class _s extends Wt {
  constructor(e, t) {
    super(), this.inner = e, this.outgoingRequestProcessor = t, S(this, "completionDeferred", void 0), this.completionDeferred = Promise.withResolvers();
    var r = new WeakRef(this);
    e.registerChangesCallback(g(function* () {
      var s;
      return (s = r.deref()) === null || s === void 0 ? void 0 : s.onChange();
    })), this.completionDeferred.promise.catch(() => null);
  }
  onChange() {
    if (this.inner.isDone()) console.warn("[sdk][verify] verifier onChange: DONE"), this.completionDeferred.resolve(void 0);
    else if (this.inner.isCancelled()) {
      var e = this.inner.cancelInfo();
      console.warn("[sdk][verify] verifier onChange: CANCELLED by ".concat(e.cancelledbyUs() ? "US" : "THEM", " code=").concat(e.cancelCode(), " reason=").concat(e.reason())), this.completionDeferred.reject(new Error("Verification cancelled by ".concat(e.cancelledbyUs() ? "us" : "them", " with code ").concat(e.cancelCode(), ": ").concat(e.reason())));
    }
    this.emit(Ft.Change);
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
class Pi extends _s {
  constructor(e, t) {
    super(e, t), S(this, "callbacks", null);
  }
  onChange() {
    this.callbacks === null && this.inner.hasBeenScanned() && (this.callbacks = { confirm: () => {
      this.confirmScanning();
    }, cancel: () => this.cancel() }), super.onChange();
  }
  verify() {
    var e = this;
    return g(function* () {
      e.callbacks !== null && e.emit(Zi.ShowReciprocateQr, e.callbacks), yield e.completionDeferred.promise;
    })();
  }
  get verificationPhase() {
    switch (this.inner.state()) {
      case fe.Created:
        return q.Ready;
      case fe.Scanned:
        return q.Started;
      case fe.Confirmed:
        return q.Started;
      case fe.Reciprocated:
        return q.Started;
      case fe.Done:
        return q.Done;
      case fe.Cancelled:
        return q.Cancelled;
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
class xi extends _s {
  constructor(e, t, r) {
    super(e, r), S(this, "callbacks", null);
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
          console.warn("[sdk][verify] ShowSasCallbacks.confirm() called");
          var a = yield e.inner.confirm();
          console.warn("[sdk][verify] confirm() produced ".concat(a.length, " outgoing request(s)"));
          for (var c of a) yield e.outgoingRequestProcessor.makeOutgoingRequest(c);
        });
        function _() {
          return o.apply(this, arguments);
        }
        return _;
      }(), mismatch: () => {
        console.warn("[sdk][verify] ShowSasCallbacks.mismatch() called \u2014 JS-originated m.mismatched_sas", new Error("mismatch() call site").stack);
        var o = this.inner.cancelWithCode("m.mismatched_sas");
        o && this.outgoingRequestProcessor.makeOutgoingRequest(o);
      }, cancel: () => {
        console.warn("[sdk][verify] ShowSasCallbacks.cancel() called \u2014 JS-originated m.user", new Error("cancel() call site").stack);
        var o = this.inner.cancelWithCode("m.user");
        o && this.outgoingRequestProcessor.makeOutgoingRequest(o);
      } }, this.emit(Zi.ShowSas, this.callbacks);
    }
  }
  get verificationPhase() {
    return q.Started;
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
var as = { [L.Sas]: Tt.SasV1, [L.ScanQrCode]: Tt.QrCodeScanV1, [L.ShowQrCode]: Tt.QrCodeShowV1, [L.Reciprocate]: Tt.ReciprocateV1 };
function or(i) {
  var e = as[i];
  if (e === void 0) throw new Error("Unknown verification method ".concat(i));
  return e;
}
function Vg(i) {
  switch (i.getType()) {
    case A.KeyVerificationCancel:
    case A.KeyVerificationDone:
    case A.KeyVerificationMac:
    case A.KeyVerificationStart:
    case A.KeyVerificationKey:
    case A.KeyVerificationReady:
    case A.KeyVerificationAccept:
      return true;
    case A.RoomMessage:
      return i.getContent().msgtype === Yi.KeyVerificationRequest;
    default:
      return false;
  }
}
class Tg extends Wt {
  constructor(e, t, r, s) {
    super(), this.logger = e, this.olmMachine = t, this.http = r, this.outgoingRequestProcessor = s, S(this, "checkedForBackup", false), S(this, "serverBackupInfo", void 0), S(this, "activeBackupVersion", null), S(this, "stopped", false), S(this, "backupKeysLoopRunning", false), S(this, "keyBackupCheckInProgress", null);
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
        var o = F.fromBase64(e), _ = t.backupInfoMatchesBackupDecryptionKey(s, o);
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
        var _, a = { total: Number(o), successes: Number(s), stage: zt.LoadKeys, failures: 0 };
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
      yield s.olmMachine.importBackedUpRoomKeys(o, (c, u, y) => {
        var m, k = { total: Number(u), successes: Number(c), stage: zt.LoadKeys, failures: Number(y) };
        r == null || (m = r.progressCallback) === null || m === void 0 || m.call(r, k);
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
      yield he(s);
      try {
        for (var o = 0, _ = null, a = true; !t.stopped; ) {
          var c = void 0;
          try {
            c = yield J(t.logger, "BackupRoomKeys: Get keys to backup from rust crypto-sdk", g(function* () {
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
              var u = yield t.olmMachine.roomKeyCounts();
              _ = u.total - u.backedUp;
            } catch (K) {
              t.logger.error("Backup: Failed to get key counts from rust crypto-sdk", K);
            }
            if (_ !== null) {
              t.emit(I.KeyBackupSessionsRemaining, _);
              var y = t.keysCountInBatch(c);
              _ = Math.max(_ - y, 0);
            }
          } catch (K) {
            if (o++, t.logger.error("Backup: Error processing backup request for rust crypto-sdk", K), K instanceof Xi) {
              var m = K.data.errcode;
              if (m == "M_NOT_FOUND" || m == "M_WRONG_ROOM_KEYS_VERSION") {
                t.logger.debug("Backup: Failed to upload keys to current vesion: ".concat(m, "."));
                try {
                  yield t.disableKeyBackup();
                } catch (U) {
                  t.logger.error("Backup: An error occurred while disabling key backup:", U);
                }
                t.emit(I.KeyBackupFailed, K.data.errcode), t.backupKeysLoopRunning = false, t.checkKeyBackupAndEnable(true);
                return;
              } else if (K.isRateLimitError()) try {
                var k = K.getRetryAfterMs();
                if (k && k > 0) {
                  yield he(k);
                  continue;
                }
              } catch (U) {
                t.logger.warn("Backup: An error occurred while retrieving a rate-limit retry delay", U);
              }
            }
            yield he(1e3 * Math.pow(2, Math.min(o - 1, 4)));
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
    return Ai(t);
  }
  requestKeyBackupVersion(e) {
    var t = this;
    return g(function* () {
      return yield cs(t.http, e);
    })();
  }
  setupKeyBackup(e) {
    var t = this;
    return g(function* () {
      yield t.deleteAllKeyBackupVersions();
      var r = F.createRandomKey(), s = r.megolmV1PublicKey, o = { public_key: s.publicKeyBase64 };
      yield e(o);
      var _ = yield t.http.authedRequest(D.Post, "/room_keys/version", void 0, { algorithm: s.algorithm, auth_data: o }, { prefix: Pt.V3 });
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
      var r = cr("/room_keys/version/$version", { $version: e });
      yield t.http.authedRequest(D.Delete, r, void 0, void 0, { prefix: Pt.V3 }), t.activeBackupVersion === e && (t.serverBackupInfo = null, yield t.disableKeyBackup());
    })();
  }
  createBackupDecryptor(e) {
    return new jg(this.logger, e);
  }
  restoreKeyBackup(e, t, r) {
    var s = this;
    return g(function* () {
      var o = yield s.downloadKeyBackup(e);
      return s.importKeyBackup(o, e, t, r);
    })();
  }
  downloadKeyBackup(e) {
    return this.http.authedRequest(D.Get, "/room_keys/keys", { version: e }, void 0, { prefix: Pt.V3 });
  }
  importKeyBackup(e, t, r, s) {
    var o = this;
    return g(function* () {
      var _, a = 200, c = Ai(e), u = 0, y = 0;
      s == null || (_ = s.progressCallback) === null || _ === void 0 || _.call(s, { total: c, successes: u, stage: zt.LoadKeys, failures: y });
      var m = function() {
        var us = g(function* (dr) {
          var Jt, Ht = [], ls = function* (pn) {
            var ys = yield r.decryptSessions(dr.get(pn));
            ys.forEach((yn) => {
              yn.room_id = pn, Ht.push(yn);
            });
          };
          for (var ps of dr.keys()) yield* ls(ps);
          try {
            yield o.importBackedUpRoomKeys(Ht, t), u += Ht.length;
          } catch (ln) {
            y += Ht.length, o.logger.error("Error importing keys from backup", ln);
          }
          s == null || (Jt = s.progressCallback) === null || Jt === void 0 || Jt.call(s, { total: c, successes: u, stage: zt.LoadKeys, failures: y });
        });
        return function(Jt) {
          return us.apply(this, arguments);
        };
      }(), k = 0, K = /* @__PURE__ */ new Map();
      for (var [U, ee] of Object.entries(e.rooms)) if (ee.sessions) {
        K.set(U, {});
        for (var [Bt, gs] of Object.entries(ee.sessions)) {
          var ds = K.get(U);
          ds[Bt] = gs, k += 1, k >= a && (yield m(K), K = /* @__PURE__ */ new Map(), K.set(U, {}), k = 0);
        }
      }
      return k > 0 && (yield m(K)), { total: c, imported: u };
    })();
  }
  backupInfoMatchesBackupDecryptionKey(e, t) {
    var r;
    return e.algorithm !== "m.megolm_backup.v1.curve25519-aes-sha2" ? (this.logger.warn("backupMatchesPrivateKey: Unsupported backup algorithm", e.algorithm), false) : ((r = e.auth_data) === null || r === void 0 ? void 0 : r.public_key) === t.megolmV1PublicKey.publicKeyBase64;
  }
}
class jg {
  constructor(e, t) {
    this.logger = e, S(this, "decryptionKey", void 0), S(this, "sourceTrusted", void 0), this.decryptionKey = t, this.sourceTrusted = false;
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
function cs(i, e) {
  return Yr.apply(this, arguments);
}
function Yr() {
  return Yr = g(function* (i, e) {
    try {
      var t = e ? cr("/room_keys/version/$version", { $version: e }) : "/room_keys/version";
      return yield i.authedRequest(D.Get, t, void 0, void 0, { prefix: Pt.V3 });
    } catch (r) {
      if (r.errcode === "M_NOT_FOUND") return null;
      throw r;
    }
  }), Yr.apply(this, arguments);
}
function jr(i, e) {
  var t = e.auth_data;
  return t.public_key === i.megolmV1PublicKey.publicKeyBase64;
}
function Ai(i) {
  var e = 0;
  for (var { sessions: t } of Object.values(i.rooms)) e += Object.keys(t).length;
  return e;
}
class Pg {
  constructor(e, t, r) {
    this.logger = e, this.olmMachine = t, this.outgoingRequestProcessor = r, S(this, "stopped", false), S(this, "outgoingRequestLoopRunning", false), S(this, "nextLoopDeferred", void 0);
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
            yield J(e.logger, "Make outgoing request ".concat(a.type), g(function* () {
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
var er = 5e3, ne = function(i) {
  return i.MISSING_DECRYPTION_KEY = "MISSING_DECRYPTION_KEY", i.NETWORK_ERROR = "NETWORK_ERROR", i.STOPPED = "STOPPED", i;
}(ne || {});
class qt extends Error {
  constructor(e) {
    super("Failed to get key from backup: ".concat(e)), this.code = e, this.name = "KeyDownloadError";
  }
}
class Ni extends Error {
  constructor(e) {
    super("Failed to get key from backup: rate limited"), this.retryMillis = e, this.name = "KeyDownloadRateLimitError";
  }
}
class xg {
  constructor(e, t, r, s) {
    this.olmMachine = t, this.http = r, this.backupManager = s, S(this, "stopped", false), S(this, "configuration", null), S(this, "sessionLastCheckAttemptedTime", /* @__PURE__ */ new Map()), S(this, "logger", void 0), S(this, "downloadLoopRunning", false), S(this, "queuedRequests", []), S(this, "hasConfigurationProblem", false), S(this, "currentBackupVersionCheck", null), S(this, "onBackupStatusChanged", () => {
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
    this.sessionLastCheckAttemptedTime.set(e, t), this.sessionLastCheckAttemptedTime.size > 100 && (this.sessionLastCheckAttemptedTime = new Map(Array.from(this.sessionLastCheckAttemptedTime).filter((r, s) => Math.max(t - s, 0) < er)));
  }
  wasRequestedRecently(e) {
    var t = this.sessionLastCheckAttemptedTime.get(e);
    return t ? Math.max(Date.now() - t, 0) < er : false;
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
      var o = cr("/room_keys/keys/$roomId/$sessionId", { $roomId: t, $sessionId: r });
      return yield s.http.authedRequest(D.Get, o, { version: e }, void 0, { prefix: Pt.V3 });
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
              if (o instanceof qt) switch (o.code) {
                case ne.MISSING_DECRYPTION_KEY:
                  e.markAsNotFoundInBackup(t.megolmSessionId), e.queuedRequests.shift();
                  break;
                case ne.NETWORK_ERROR:
                  yield he(er);
                  break;
                case ne.STOPPED:
                  e.downloadLoopRunning = false;
                  return;
              }
              else o instanceof Ni && (yield he(o.retryMillis));
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
      if (s.logger.debug("Checking key backup for session ".concat(t)), s.stopped) throw new qt(ne.STOPPED);
      try {
        var o = yield s.requestRoomKeyFromBackup(r.backupVersion, e, t);
        return s.logger.debug("Got key from backup for sessionId:".concat(t)), o;
      } catch (u) {
        if (s.stopped) throw new qt(ne.STOPPED);
        if (s.logger.info("No luck requesting key backup for session ".concat(t, ": ").concat(u)), u instanceof Xi) {
          var _ = u.data.errcode;
          if (_ == "M_NOT_FOUND") throw new qt(ne.MISSING_DECRYPTION_KEY);
          if (u.isRateLimitError()) {
            var a;
            try {
              var c;
              a = (c = u.getRetryAfterMs()) !== null && c !== void 0 ? c : void 0;
            } catch (y) {
              s.logger.warn("Error while retrieving a rate-limit retry delay", y);
            }
            throw a && a > 0 && s.logger.info("Rate limited by server, waiting ".concat(a, "ms")), new Ni(a ?? er);
          }
        }
        throw new qt(ne.NETWORK_ERROR);
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
      } catch (m) {
        return e.logger.debug("Backup: error while checking server version: ".concat(m)), e.hasConfigurationProblem = true, null;
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
      var u = o.auth_data;
      if (u.public_key != c.decryptionKey.megolmV1PublicKey.publicKeyBase64) return e.logger.debug("Key backup on server does not match our decryption key"), e.hasConfigurationProblem = true, null;
      var y = e.backupManager.createBackupDecryptor(c.decryptionKey);
      return e.hasConfigurationProblem = false, e.configuration = { decryptor: y, backupVersion: a }, e.configuration;
    })();
  }
}
function Ag(i, e) {
  if (!i.private_key_salt || !i.private_key_iterations) throw new Error("Salt and/or iterations not found: this backup cannot be restored with a passphrase");
  return es(e, i.private_key_salt, i.private_key_iterations, i.private_key_bits);
}
function Li(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(i, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Wi(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Li(Object(t), true).forEach(function(r) {
      S(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Li(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
var Gi = [L.Sas, L.ScanQrCode, L.ShowQrCode, L.Reciprocate];
class Ng extends Wt {
  constructor(e, t, r, s, o, _, a) {
    super(), this.logger = e, this.olmMachine = t, this.http = r, this.userId = s, this.secretStorage = _, this.cryptoCallbacks = a, S(this, "RECOVERY_KEY_DERIVATION_ITERATIONS", 5e5), S(this, "_trustCrossSignedDevices", true), S(this, "deviceIsolationMode", new ws(false)), S(this, "stopped", false), S(this, "roomEncryptors", {}), S(this, "eventDecryptor", void 0), S(this, "keyClaimManager", void 0), S(this, "outgoingRequestProcessor", void 0), S(this, "crossSigningIdentity", void 0), S(this, "backupManager", void 0), S(this, "outgoingRequestsManager", void 0), S(this, "perSessionBackupDownloader", void 0), S(this, "dehydratedDeviceManager", void 0), S(this, "reemitter", new $i(this)), S(this, "globalBlacklistUnverifiedDevices", false), S(this, "_supportedVerificationMethods", Gi), this.outgoingRequestProcessor = new Og(e, t, r), this.outgoingRequestsManager = new Pg(this.logger, t, this.outgoingRequestProcessor), this.keyClaimManager = new Mg(t, this.outgoingRequestProcessor), this.backupManager = new Tg(e, t, r, this.outgoingRequestProcessor), this.perSessionBackupDownloader = new xg(this.logger, this.olmMachine, this.http, this.backupManager), this.dehydratedDeviceManager = new Dg(this.logger, t, r, this.outgoingRequestProcessor, _), this.eventDecryptor = new Lg(this.logger, t, this.perSessionBackupDownloader), this.reemitter.reEmit(this.backupManager, [I.KeyBackupStatus, I.KeyBackupSessionsRemaining, I.KeyBackupFailed, I.KeyBackupDecryptionKeyCached]), this.reemitter.reEmit(this.dehydratedDeviceManager, [I.DehydratedDeviceCreated, I.DehydratedDeviceUploaded, I.RehydrationStarted, I.RehydrationProgress, I.RehydrationCompleted, I.RehydrationError, I.DehydrationKeyCached, I.DehydratedDeviceRotationError]), this.crossSigningIdentity = new zg(e, t, this.outgoingRequestProcessor, _), this.checkKeyBackupAndEnable();
  }
  getOlmMachineOrThrow() {
    if (this.stopped) throw new hs();
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
      if ((e == null ? void 0 : e.algorithm) != "m.megolm_backup.v1.curve25519-aes-sha2") throw new Error("getBackupDecryptor: Unsupported algorithm ".concat(e == null ? void 0 : e.algorithm));
      var s = F.fromBase64(xr(t));
      if (!jr(s, e)) throw new Error("getBackupDecryptor: key backup on server does not match the decryption key");
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
      var s = new rr(r.logger, "maybeAcceptKeyBundle(".concat(e, ", ").concat(t, ")")), o = yield r.olmMachine.getReceivedRoomKeyBundleData(new R(e), new w(t));
      if (!o) {
        s.info("No key bundle found for user");
        return;
      }
      s.info("Fetching key bundle ".concat(o.url));
      var _ = ms(r.http.opts.baseUrl, o.url, void 0, void 0, void 0, false, true, true), a;
      try {
        var c = new URL(_);
        a = yield r.http.authedRequest(D.Get, c.pathname + c.search, {}, void 0, { rawResponseBody: true, prefix: "" });
      } catch (u) {
        throw s.warn("Error downloading encrypted bundle from ".concat(_, ":"), u), u;
      }
      s.info("Received blob of length ".concat(a.size));
      try {
        yield r.olmMachine.receiveRoomKeyBundle(o, new Uint8Array(yield a.arrayBuffer()));
      } catch (u) {
        throw s.warn("Error receiving encrypted bundle:", u), u;
      }
    })();
  }
  getVersion() {
    var e = ts();
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
        var u = yield t.olmMachine.getIdentity(_);
        return u == null ? void 0 : u.free(), u !== void 0;
      } else if (s) {
        var y, m = yield t.downloadDeviceList(/* @__PURE__ */ new Set([r])), k = (y = m.master_keys) === null || y === void 0 ? void 0 : y[r];
        return k ? !!Object.values(k.keys)[0] : false;
      } else return false;
    })();
  }
  getUserDeviceInfo(e) {
    var t = arguments, r = this;
    return g(function* () {
      var s = t.length > 1 && t[1] !== void 0 ? t[1] : false, o = /* @__PURE__ */ new Map(), _ = yield r.getOlmMachineOrThrow().trackedUsers(), a = /* @__PURE__ */ new Set();
      _.forEach((m) => a.add(m.toString()));
      var c = /* @__PURE__ */ new Set();
      for (var u of e) a.has(u) ? o.set(u, yield r.getUserDevices(u)) : c.add(u);
      if (s && c.size >= 1) {
        var y = yield r.downloadDeviceList(c);
        Object.entries(y.device_keys).forEach((m) => {
          var [k, K] = m;
          return o.set(k, qg(K));
        });
      }
      return o;
    })();
  }
  getUserDevices(e) {
    var t = this;
    return g(function* () {
      var r = new w(e), s = yield t.olmMachine.getUserDevices(r, 1);
      try {
        var o = s.devices();
        try {
          return new Map(o.map((_) => [_.deviceId.toString(), Bg(_, r)]));
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
      return e.forEach((s) => r.device_keys[s] = []), yield t.http.authedRequest(D.Post, "/_matrix/client/v3/keys/query", void 0, r, { prefix: "" });
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
      var o = r.length > 2 && r[2] !== void 0 ? r[2] : true, _ = yield s.olmMachine.getDevice(new w(e), new C(t));
      if (!_) throw new Error("Unknown device ".concat(e, "|").concat(t));
      try {
        yield _.setLocalTrust(o ? Lr.Verified : Lr.Unset);
      } finally {
        _.free();
      }
    })();
  }
  crossSignDevice(e) {
    var t = this;
    return g(function* () {
      var r = yield t.olmMachine.getDevice(new w(t.userId), new C(e));
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
      var s = yield r.olmMachine.getDevice(new w(e), new C(t));
      if (!s) return null;
      try {
        return new vs({ signedByOwner: s.isCrossSignedByOwner(), crossSigningVerified: s.isCrossSigningTrusted(), localVerified: s.isLocallyTrusted(), trustCrossSignedDevices: r._trustCrossSignedDevices });
      } finally {
        s.free();
      }
    })();
  }
  getUserVerificationStatus(e) {
    var t = this;
    return g(function* () {
      var r = yield t.getOlmMachineOrThrow().getIdentity(new w(e));
      if (r === void 0) return new bn(false, false, false);
      var s = r.isVerified(), o = r.wasPreviouslyVerified(), _ = r instanceof Me ? r.identityNeedsUserApproval() : false;
      return r.free(), new bn(s, o, false, _);
    })();
  }
  pinCurrentUserIdentity(e) {
    var t = this;
    return g(function* () {
      var r = yield t.getOlmMachineOrThrow().getIdentity(new w(e));
      if (r === void 0) throw new Error("Cannot pin identity of unknown user");
      if (r instanceof Be) throw new Error("Cannot pin identity of own user");
      yield r.pinCurrentMasterKey();
    })();
  }
  withdrawVerificationRequirement(e) {
    var t = this;
    return g(function* () {
      var r = yield t.getOlmMachineOrThrow().getIdentity(new w(e));
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
      var r = e.length > 0 && e[0] !== void 0 ? e[0] : $t.Master, s = yield t.olmMachine.getIdentity(new w(t.userId));
      if (!s) return null;
      try {
        var o = yield t.olmMachine.crossSigningStatus(), _ = o.hasMaster && o.hasUserSigning && o.hasSelfSigning;
        if (!_ || !s.isVerified()) return null;
        var a;
        switch (r) {
          case $t.Master:
            a = s.masterKey;
            break;
          case $t.SelfSigning:
            a = s.selfSigningKey;
            break;
          case $t.UserSigning:
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
      return r && t.push("m.megolm_backup.v1"), os(e.secretStorage, t);
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
      var c = yield t.olmMachine.exportCrossSigningKeys(), u = c && c.masterKey !== void 0 && c.self_signing_key !== void 0 && c.userSigningKey !== void 0;
      u && (_ || !(yield ji(t.secretStorage))) && (t.logger.info("bootstrapSecretStorage: cross-signing keys not yet exported; doing so now."), yield t.secretStorage.store("m.cross_signing.master", c.masterKey), yield t.secretStorage.store("m.cross_signing.user_signing", c.userSigningKey), yield t.secretStorage.store("m.cross_signing.self_signing", c.self_signing_key)), o ? yield t.resetKeyBackup() : yield t.saveBackupKeyToStorage();
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
      if (!jr(r.decryptionKey, t)) {
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
      var r, s, o, _, a = yield t.secretStorage.addKey(fn, { passphrase: (r = e.keyInfo) === null || r === void 0 ? void 0 : r.passphrase, name: (s = e.keyInfo) === null || s === void 0 ? void 0 : s.name, key: e.privateKey });
      yield t.secretStorage.setDefaultKeyId(a.keyId), (o = (_ = t.cryptoCallbacks).cacheSecretStorageKey) === null || o === void 0 || o.call(_, a.keyId, a.keyInfo, e.privateKey);
    })();
  }
  secretStorageHasAESKey() {
    var e = this;
    return g(function* () {
      var t = yield e.secretStorage.getKey();
      if (!t) return false;
      var [, r] = t;
      return r.algorithm === fn;
    })();
  }
  getCrossSigningStatus() {
    var e = this;
    return g(function* () {
      var t = yield e.getOlmMachineOrThrow().getIdentity(new w(e.userId)), r = !!(t == null ? void 0 : t.masterKey) && !!(t == null ? void 0 : t.selfSigningKey) && !!(t == null ? void 0 : t.userSigningKey);
      t == null ? void 0 : t.free();
      var s = yield ji(e.secretStorage), o = yield e.getOlmMachineOrThrow().crossSigningStatus();
      return { publicKeysOnDevice: r, privateKeysInSecretStorage: s, privateKeysCachedLocally: { masterKey: !!(o == null ? void 0 : o.hasMaster), userSigningKey: !!(o == null ? void 0 : o.hasUserSigning), selfSigningKey: !!(o == null ? void 0 : o.hasSelfSigning) } };
    })();
  }
  createRecoveryKeyFromPassphrase(e) {
    var t = this;
    return g(function* () {
      if (e) {
        var r = wn(32), s = yield es(e, r, t.RECOVERY_KEY_DERIVATION_ITERATIONS);
        return { keyInfo: { passphrase: { algorithm: "m.pbkdf2", iterations: t.RECOVERY_KEY_DERIVATION_ITERATIONS, salt: r } }, privateKey: s, encodedPrivateKey: hn(s) };
      } else {
        var o = new Uint8Array(32);
        return globalThis.crypto.getRandomValues(o), { privateKey: o, encodedPrivateKey: hn(o) };
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
    var t = this.olmMachine.getVerificationRequests(new w(e));
    return t.filter((r) => r.roomId === void 0).map((r) => this.makeVerificationRequest(r));
  }
  findVerificationRequestDMInProgress(e, t) {
    if (!t) throw new Error("missing userId");
    var r = this.olmMachine.getVerificationRequests(new w(t)), s = r.find((o) => {
      var _;
      return ((_ = o.roomId) === null || _ === void 0 ? void 0 : _.toString()) === e;
    });
    if (s) return this.makeVerificationRequest(s);
  }
  requestVerificationDM(e, t) {
    var r = this;
    return g(function* () {
      var s = yield r.olmMachine.getIdentity(new w(e));
      if (!s) throw new Error("unknown userId ".concat(e));
      try {
        var o = r._supportedVerificationMethods.map((u) => or(u)), _ = yield s.verificationRequestContent(o), a = yield r.sendVerificationRequestContent(t, _), c = yield s.requestVerification(new R(t), new Lt(a), o);
        return r.makeVerificationRequest(c);
      } finally {
        s.free();
      }
    })();
  }
  sendVerificationRequestContent(e, t) {
    var r = this;
    return g(function* () {
      var s = wn(32), { event_id: o } = yield r.http.authedRequest(D.Put, "/_matrix/client/v3/rooms/".concat(encodeURIComponent(e), "/send/m.room.message/").concat(encodeURIComponent(s)), void 0, t, { prefix: "" });
      return o;
    })();
  }
  setSupportedVerificationMethods(e) {
    this._supportedVerificationMethods = e ?? Gi;
  }
  requestOwnUserVerification() {
    var e = this;
    return g(function* () {
      var t = yield e.olmMachine.getIdentity(new w(e.userId));
      if (t === void 0) throw new Error("cannot request verification for this device when there is no existing cross-signing key");
      try {
        var [r, s] = yield t.requestVerification(e._supportedVerificationMethods.map(or));
        return yield e.outgoingRequestProcessor.makeOutgoingRequest(s), e.makeVerificationRequest(r);
      } finally {
        t.free();
      }
    })();
  }
  requestDeviceVerification(e, t) {
    var r = this;
    return g(function* () {
      var s = yield r.olmMachine.getDevice(new w(e), new C(t));
      if (!s) throw new Error("Not a known device");
      try {
        var [o, _] = s.requestVerification(r._supportedVerificationMethods.map(or));
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
      return t.decryptionKey ? Pr(t.decryptionKey.toBase64()) : null;
    })();
  }
  storeSessionBackupPrivateKey(e, t) {
    var r = this;
    return g(function* () {
      var s = xr(e);
      if (!t) throw new Error("storeSessionBackupPrivateKey: version is required");
      yield r.backupManager.saveBackupDecryptionKey(F.fromBase64(s), t);
    })();
  }
  loadSessionBackupPrivateKeyFromSecretStorage() {
    var e = this;
    return g(function* () {
      var t = yield e.secretStorage.get("m.megolm_backup.v1");
      if (!t) throw new Error("loadSessionBackupPrivateKeyFromSecretStorage: missing decryption key in secret storage");
      var r = yield e.backupManager.getServerBackupInfo();
      if (!r || !r.version) throw new Error("loadSessionBackupPrivateKeyFromSecretStorage: unable to get backup version");
      var s = F.fromBase64(t);
      if (!jr(s, r)) throw new Error("loadSessionBackupPrivateKeyFromSecretStorage: decryption key does not match backup info");
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
      var o = r.get(t.userId) || {}, _ = Rg.stringify(e), a = yield t.olmMachine.sign(_), c = JSON.parse(a.asJSON());
      r.set(t.userId, Wi(Wi({}, o), c[t.userId])), s !== void 0 && (e.unsigned = s), e.signatures = Object.fromEntries(r.entries());
    })();
  }
  restoreKeyBackupWithPassphrase(e, t) {
    var r = this;
    return g(function* () {
      var s = yield r.backupManager.getServerBackupInfo();
      if (!(s != null && s.version)) throw new Error("No backup info available");
      var o = yield Ag(s.auth_data, e);
      return yield r.storeSessionBackupPrivateKey(o, s.version), r.restoreKeyBackup(t);
    })();
  }
  restoreKeyBackup(e) {
    var t = this;
    return g(function* () {
      var r = yield t.olmMachine.getBackupKeys(), { decryptionKey: s, backupVersion: o } = r;
      if (!s || !o) throw new Error("No decryption key found in crypto store");
      var _ = Pr(s.toBase64()), a = yield t.backupManager.requestKeyBackupVersion(o);
      if (!a) throw new Error("Backup version to restore ".concat(o, " not found on server"));
      var c = yield t.getBackupDecryptor(a, _);
      try {
        var u;
        return e == null || (u = e.progressCallback) === null || u === void 0 || u.call(e, { stage: zt.Fetch }), yield t.backupManager.restoreKeyBackup(o, c, e);
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
      var r = Y.from_json(e);
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
      var o = new rr(s.logger, "encryptToDeviceMessages"), _ = new Set(t.map((c) => {
        var { userId: u } = c;
        return u;
      }));
      yield s.keyClaimManager.ensureSessionsForUsers(o, Array.from(_).map((c) => new w(c)));
      var a = { batch: [], eventType: A.RoomMessageEncrypted };
      return yield Promise.all(t.map(function() {
        var c = g(function* (u) {
          var { userId: y, deviceId: m } = u, k = yield s.olmMachine.getDevice(new w(y), new C(m));
          if (k) {
            var K = JSON.parse(yield k.encryptToDeviceEvent(e, r));
            a.batch.push({ deviceId: m, userId: y, payload: K });
          } else s.logger.warn("encryptToDeviceMessages: unknown device ".concat(y, ":").concat(m));
        });
        return function(u) {
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
      var s = new rr(r.logger, "shareRoomHistoryWithUser(".concat(e, ", ").concat(t, ")")), o = yield r.getOwnIdentity();
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
      var c = r.getOlmMachineOrThrow().queryKeysForUsers([new w(t)]);
      yield r.outgoingRequestProcessor.makeOutgoingRequest(c), yield r.keyClaimManager.ensureSessionsForUsers(s, [new w(t)]);
      var u = yield r.getOlmMachineOrThrow().shareRoomKeyBundleData(new w(t), new R(e), a.content_uri, _.mediaEncryptionInfo, B.identityBasedStrategy());
      for (var y of u) yield r.outgoingRequestProcessor.makeOutgoingRequest(y);
    })();
  }
  receiveSyncChanges(e) {
    var t = this;
    return g(function* () {
      var { events: r, oneTimeKeysCounts: s = /* @__PURE__ */ new Map(), unusedFallbackKeys: o, devices: _ = new rt() } = e;
      return yield t.olmMachine.receiveSyncChanges(r ? JSON.stringify(r) : "[]", _, s, o);
    })();
  }
  preprocessToDeviceMessages(e) {
    var t = this;
    return g(function* () {
      var r = yield t.receiveSyncChanges({ events: e }), s = [];
      for (var o of r) {
        var _ = JSON.parse(o.rawEvent);
        if (_.type === A.KeyVerificationRequest) {
          var a = _.sender, c = _.content.transaction_id;
          c && a && t.onIncomingKeyVerificationRequest(a, c);
        }
        switch (o.type) {
          case Vt.Decrypted: {
            var u, y = o.encryptionInfo;
            s.push({ message: _, encryptionInfo: { sender: y.sender.toString(), senderDevice: (u = y.senderDevice) === null || u === void 0 ? void 0 : u.toString(), senderCurve25519KeyBase64: y.senderCurve25519Key, senderVerified: y.isSenderVerified() } });
            break;
          }
          case Vt.PlainText: {
            s.push({ message: _, encryptionInfo: null });
            break;
          }
          case Vt.UnableToDecrypt:
            break;
          case Vt.Invalid:
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
      var r, s, o = new rt((r = e.changed) === null || r === void 0 ? void 0 : r.map((_) => new w(_)), (s = e.left) === null || s === void 0 ? void 0 : s.map((_) => new w(_)));
      yield t.receiveSyncChanges({ devices: o });
    })();
  }
  onCryptoEvent(e, t) {
    var r = this;
    return g(function* () {
      var s = t.getContent(), o = new $();
      if (s.algorithm === "m.megolm.v1.aes-sha2") o.algorithm = it.MegolmV1AesSha2;
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
      _ ? _.onCryptoEvent(s) : r.roomEncryptors[e.roomId] = new Kg(r.logger.getChild("[".concat(e.roomId, " encryption]")), r.olmMachine, r.keyClaimManager, r.outgoingRequestsManager, e, s);
    })();
  }
  onSyncCompleted(e) {
    var t = this;
    return g(function* () {
      try {
        yield t.outgoingRequestsManager.doProcessOutgoingRequests();
      } catch (r) {
        t.logger.warn("onSyncCompleted: Error processing outgoing requests", r);
      }
    })();
  }
  markAllTrackedUsersAsDirty() {
    var e = this;
    return g(function* () {
      yield e.olmMachine.markAllTrackedUsersAsDirty();
    })();
  }
  onIncomingKeyVerificationRequest(e, t) {
    var r = this.olmMachine.getVerificationRequest(new w(e), t);
    r ? this.emit(I.VerificationRequestReceived, this.makeVerificationRequest(r)) : this.logger.info("Ignoring just-received verification request ".concat(t, " which did not start a rust-side verification"));
  }
  makeVerificationRequest(e) {
    return new Ug(this.logger, this.olmMachine, e, this.outgoingRequestProcessor, this._supportedVerificationMethods);
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
            Vg(e) && (yield t.onKeyVerificationEvent(c));
          });
          return function(u) {
            return a.apply(this, arguments);
          };
        }();
        if (e.isDecryptionFailure() || e.isEncrypted()) {
          var s = 3e5, o = setTimeout(() => e.off(ur.Decrypted, _), s), _ = (a, c) => {
            c || (clearTimeout(o), e.off(ur.Decrypted, _), r(a));
          };
          e.on(ur.Decrypted, _);
        } else yield r(e);
      }
    })();
  }
  onKeyVerificationEvent(e) {
    var t = this;
    return g(function* () {
      var r = e.getRoomId();
      if (!r) throw new Error("missing roomId in the event");
      t.logger.debug("Incoming verification event ".concat(e.getId(), " type ").concat(e.getType(), " from ").concat(e.getSender())), yield t.olmMachine.receiveVerificationEvent(JSON.stringify({ event_id: e.getId(), type: e.getType(), sender: e.getSender(), state_key: e.getStateKey(), content: e.getContent(), origin_server_ts: e.getTs() }), new R(r)), e.getType() === A.RoomMessage && e.getContent().msgtype === Yi.KeyVerificationRequest && t.onIncomingKeyVerificationRequest(e.getSender(), e.getId()), t.outgoingRequestsManager.doProcessOutgoingRequests().catch((s) => {
        t.logger.warn("onKeyVerificationRequest: Error processing outgoing requests", s);
      });
    })();
  }
  getOwnIdentity() {
    var e = this;
    return g(function* () {
      return yield e.olmMachine.getIdentity(new w(e.userId));
    })();
  }
}
class Lg {
  constructor(e, t, r) {
    this.logger = e, this.olmMachine = t, this.perSessionBackupDownloader = r, S(this, "eventsPendingKey", new mn(() => new mn(() => /* @__PURE__ */ new Set())));
  }
  attemptEventDecryption(e, t) {
    var r = this;
    return g(function* () {
      r.addEventToPendingList(e);
      var s;
      switch (t.kind) {
        case ar.AllDevicesIsolationMode:
          s = Jr.Untrusted;
          break;
        case ar.OnlySignedDevicesIsolationMode:
          s = Jr.CrossSignedOrLegacy;
          break;
      }
      try {
        var o = yield r.olmMachine.decryptRoomEvent(Ji(e), new R(e.getRoomId()), new ve(s));
        return r.removeEventFromPendingList(e), { clearEvent: JSON.parse(o.event), claimedEd25519Key: o.senderClaimedEd25519Key, senderCurve25519Key: o.senderCurve25519Key, forwardingCurve25519KeyChain: o.forwardingCurve25519KeyChain };
      } catch (_) {
        if (_ instanceof ge) r.onMegolmDecryptionError(e, _, yield r.perSessionBackupDownloader.getServerBackupInfo());
        else throw new x(T.UNKNOWN_ERROR, "Unknown error");
      }
    })();
  }
  onMegolmDecryptionError(e, t, r) {
    var s = e.getWireContent(), o = { sender_key: s.sender_key, session_id: s.session_id };
    if (t.code === te.MissingRoomKey || t.code === te.UnknownMessageIndex) {
      this.perSessionBackupDownloader.onDecryptionKeyMissingError(e.getRoomId(), s.session_id);
      var _ = e.getMembershipAtEvent();
      if (_ && _ !== _r.Join && _ !== _r.Invite) throw new x(T.HISTORICAL_MESSAGE_USER_NOT_JOINED, "This message was sent when we were not a member of the room.", o);
      if (e.getTs() <= this.olmMachine.deviceCreationTimeMs) throw r === null ? new x(T.HISTORICAL_MESSAGE_NO_KEY_BACKUP, "This message was sent before this device logged in, and there is no key backup on the server.", o) : this.perSessionBackupDownloader.isKeyBackupDownloadConfigured() ? new x(T.HISTORICAL_MESSAGE_WORKING_BACKUP, "This message was sent before this device logged in. Key backup is working, but we still do not (yet) have the key.", o) : new x(T.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED, "This message was sent before this device logged in, and key backup is not working.", o);
    }
    if (t.maybe_withheld) {
      var a = t.maybe_withheld === "The sender has disabled encrypting to unverified devices." ? T.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE : T.MEGOLM_KEY_WITHHELD;
      throw new x(a, t.maybe_withheld, o);
    }
    switch (t.code) {
      case te.MissingRoomKey:
        throw new x(T.MEGOLM_UNKNOWN_INBOUND_SESSION_ID, "The sender's device has not sent us the keys for this message.", o);
      case te.UnknownMessageIndex:
        throw new x(T.OLM_UNKNOWN_MESSAGE_INDEX, "The sender's device has not sent us the keys for this message at this index.", o);
      case te.SenderIdentityVerificationViolation:
        throw this.removeEventFromPendingList(e), new x(T.SENDER_IDENTITY_PREVIOUSLY_VERIFIED, "The sender identity is unverified, but was previously verified.");
      case te.UnknownSenderDevice:
        throw this.removeEventFromPendingList(e), new x(T.UNKNOWN_SENDER_DEVICE, "The sender device is not known.");
      case te.UnsignedSenderDevice:
        throw this.removeEventFromPendingList(e), new x(T.UNSIGNED_SENDER_DEVICE, "The sender identity is not cross-signed.");
      default:
        throw new x(T.UNKNOWN_ERROR, t.description, o);
    }
  }
  getEncryptionInfoForEvent(e) {
    var t = this;
    return g(function* () {
      if (!e.getClearContent() || e.isDecryptionFailure()) return null;
      if (e.status !== null) return { shieldColour: ir.NONE, shieldReason: null };
      var r = yield t.olmMachine.getRoomEventEncryptionInfo(Ji(e), new R(e.getRoomId()));
      return Wg(t.logger, r);
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
function Ji(i) {
  return JSON.stringify({ event_id: i.getId(), type: i.getWireType(), sender: i.getSender(), state_key: i.getStateKey(), content: i.getWireContent(), origin_server_ts: i.getTs() });
}
function Wg(i, e) {
  if (e === void 0) return null;
  var t = e.shieldState(false), r;
  switch (t.color) {
    case Wr.Grey:
      r = ir.GREY;
      break;
    case Wr.None:
      r = ir.NONE;
      break;
    default:
      r = ir.RED;
  }
  var s;
  switch (t.code) {
    case void 0:
    case null:
      s = null;
      break;
    case we.AuthenticityNotGuaranteed:
      s = be.AUTHENTICITY_NOT_GUARANTEED;
      break;
    case we.UnknownDevice:
      s = be.UNKNOWN_DEVICE;
      break;
    case we.UnsignedDevice:
      s = be.UNSIGNED_DEVICE;
      break;
    case we.UnverifiedIdentity:
      s = be.UNVERIFIED_IDENTITY;
      break;
    case we.VerificationViolation:
      s = be.VERIFICATION_VIOLATION;
      break;
    case we.MismatchedSender:
      s = be.MISMATCHED_SENDER;
      break;
    default:
      s = be.UNKNOWN;
      break;
  }
  return { shieldColour: r, shieldReason: s };
}
function Gg(i) {
  return Zr.apply(this, arguments);
}
function Zr() {
  return Zr = g(function* (i) {
    var e, { logger: t, legacyStore: r } = i;
    if (yield is(), !(yield r.containsData())) return;
    yield r.startup();
    var s = null;
    if (yield r.doTxn("readonly", [Gt.STORE_ACCOUNT], (k) => {
      r.getAccount(k, (K) => {
        s = K;
      });
    }), !s) {
      t.debug("Legacy crypto store is not set up (no account found). Not migrating.");
      return;
    }
    var o = yield r.getMigrationState();
    if (o >= N.MEGOLM_SESSIONS_MIGRATED) return;
    var _ = yield Hg(t, r), a = yield Qg(t, r), c = 1 + _ + a;
    t.info("Migrating data from legacy crypto store. ".concat(_, " olm sessions and ").concat(a, " megolm sessions to migrate."));
    var u = 0;
    function y(k) {
      var K;
      u += k, (K = i.legacyMigrationProgressListener) === null || K === void 0 || K.call(i, u, c);
    }
    y(0);
    var m = new TextEncoder().encode(i.legacyPickleKey);
    o === N.NOT_STARTED && (t.info("Migrating data from legacy crypto store. Step 1: base data"), yield Jg(i.http, i.userId, i.deviceId, r, m, i.storeHandle, t), o = N.INITIAL_DATA_MIGRATED, yield r.setMigrationState(o)), y(1), o === N.INITIAL_DATA_MIGRATED && (t.info("Migrating data from legacy crypto store. Step 2: olm sessions (".concat(_, " sessions to migrate).")), yield $g(t, r, m, i.storeHandle, y), o = N.OLM_SESSIONS_MIGRATED, yield r.setMigrationState(o)), o === N.OLM_SESSIONS_MIGRATED && (t.info("Migrating data from legacy crypto store. Step 3: megolm sessions (".concat(a, " sessions to migrate).")), yield Yg(t, r, m, i.storeHandle, y), o = N.MEGOLM_SESSIONS_MIGRATED, yield r.setMigrationState(o)), (e = i.legacyMigrationProgressListener) === null || e === void 0 || e.call(i, -1, -1), t.info("Migration from legacy crypto store complete");
  }), Zr.apply(this, arguments);
}
function Jg(i, e, t, r, s, o, _) {
  return Xr.apply(this, arguments);
}
function Xr() {
  return Xr = g(function* (i, e, t, r, s, o, _) {
    var a = new At();
    a.userId = new w(e), a.deviceId = new C(t), yield r.doTxn("readonly", [Gt.STORE_ACCOUNT], (ee) => r.getAccount(ee, (Bt) => {
      a.pickledAccount = Bt ?? "";
    }));
    var c = yield tr(r, s, "m.megolm_backup.v1");
    if (c) {
      for (var u = false, y = null; !u; ) try {
        y = yield cs(i), u = true;
      } catch (ee) {
        _.info("Failed to get backup version during migration, retrying in 2 seconds", ee), yield he(2e3);
      }
      if (y && y.algorithm == "m.megolm_backup.v1.curve25519-aes-sha2") try {
        var m, k = F.fromBase64(c), K = (m = y.auth_data) === null || m === void 0 ? void 0 : m.public_key, U = k.megolmV1PublicKey.publicKeyBase64 == K;
        U ? (a.backupVersion = y.version, a.backupRecoveryKey = c) : _.debug("The backup key to migrate does not match the active backup version", "Cached pub key: ".concat(k.megolmV1PublicKey.publicKeyBase64), "Active pub key: ".concat(K));
      } catch (ee) {
        _.warn("Failed to check if the backup key to migrate matches the active backup version", ee);
      }
    }
    a.privateCrossSigningMasterKey = yield tr(r, s, "master"), a.privateCrossSigningSelfSigningKey = yield tr(r, s, "self_signing"), a.privateCrossSigningUserSigningKey = yield tr(r, s, "user_signing"), yield dt.migrateBaseData(a, s, o, _);
  }), Xr.apply(this, arguments);
}
function Hg(i, e) {
  return en.apply(this, arguments);
}
function en() {
  return en = g(function* (i, e) {
    i.debug("Counting olm sessions to be migrated");
    var t;
    return yield e.doTxn("readonly", [Gt.STORE_SESSIONS], (r) => e.countEndToEndSessions(r, (s) => t = s)), t;
  }), en.apply(this, arguments);
}
function Qg(i, e) {
  return tn.apply(this, arguments);
}
function tn() {
  return tn = g(function* (i, e) {
    return i.debug("Counting megolm sessions to be migrated"), yield e.countEndToEndInboundGroupSessions();
  }), tn.apply(this, arguments);
}
function $g(i, e, t, r, s) {
  return rn.apply(this, arguments);
}
function rn() {
  return rn = g(function* (i, e, t, r, s) {
    for (; ; ) {
      var o = yield e.getEndToEndSessionsBatch();
      if (o === null) return;
      i.debug("Migrating batch of ".concat(o.length, " olm sessions"));
      var _ = [];
      for (var a of o) {
        var c = new Fe();
        c.senderKey = a.deviceKey, c.pickle = a.session, c.lastUseTime = c.creationTime = new Date(a.lastReceivedMessageTs), _.push(c);
      }
      yield dt.migrateOlmSessions(_, t, r, i), yield e.deleteEndToEndSessionsBatch(o), s(o.length);
    }
  }), rn.apply(this, arguments);
}
function Yg(i, e, t, r, s) {
  return nn.apply(this, arguments);
}
function nn() {
  return nn = g(function* (i, e, t, r, s) {
    for (; ; ) {
      var o = yield e.getEndToEndInboundGroupSessionsBatch();
      if (o === null) return;
      i.debug("Migrating batch of ".concat(o.length, " megolm sessions"));
      var _ = [];
      for (var a of o) {
        var c, u = a.sessionData, y = new qe();
        y.pickle = u.session, y.roomId = new R(u.room_id), y.senderKey = a.senderKey, y.senderSigningKey = (c = u.keysClaimed) === null || c === void 0 ? void 0 : c.ed25519, y.backedUp = !a.needsBackup, y.imported = u.untrusted === true, _.push(y);
      }
      yield dt.migrateMegolmSessions(_, t, r, i), yield e.deleteEndToEndInboundGroupSessionsBatch(o), s(o.length);
    }
  }), nn.apply(this, arguments);
}
function Zg(i) {
  return sn.apply(this, arguments);
}
function sn() {
  return sn = g(function* (i) {
    var { logger: e, legacyStore: t, olmMachine: r } = i;
    if (yield t.containsData()) {
      var s = yield t.getMigrationState();
      if (!(s >= N.ROOM_SETTINGS_MIGRATED)) {
        var o = {};
        yield t.doTxn("readwrite", [Gt.STORE_ROOMS], (u) => {
          t.getEndToEndRooms(u, (y) => {
            o = y;
          });
        }), e.debug("Migrating ".concat(Object.keys(o).length, " sets of room settings"));
        for (var [_, a] of Object.entries(o)) try {
          var c = new $();
          if (a.algorithm !== "m.megolm.v1.aes-sha2") {
            e.warn("Room ".concat(_, ": ignoring room with invalid algorithm ").concat(a.algorithm));
            continue;
          }
          c.algorithm = it.MegolmV1AesSha2, c.sessionRotationPeriodMs = a.rotation_period_ms, c.sessionRotationPeriodMessages = a.rotation_period_msgs, yield r.setRoomSettings(new R(_), c);
        } catch (u) {
          e.warn("Room ".concat(_, ": ignoring settings ").concat(JSON.stringify(a), " which caused error ").concat(u));
        }
        e.debug("Completed room settings migration"), yield t.setMigrationState(N.ROOM_SETTINGS_MIGRATED);
      }
    }
  }), sn.apply(this, arguments);
}
function tr(i, e, t) {
  return on.apply(this, arguments);
}
function on() {
  return on = g(function* (i, e, t) {
    var r = yield new Promise((s) => {
      i.doTxn("readonly", [Gt.STORE_ACCOUNT], (o) => {
        i.getSecretStorePrivateKey(o, s, t);
      });
    });
    return r && r.ciphertext && r.iv && r.mac ? yield ks(r, e, t) : r instanceof Uint8Array ? xr(r) : void 0;
  }), on.apply(this, arguments);
}
function Xg(i) {
  return _n.apply(this, arguments);
}
function _n() {
  return _n = g(function* (i) {
    var { legacyCryptoStore: e, rustCrypto: t, logger: r } = i, s = yield t.getOwnIdentity();
    if (s && !s.isVerified()) {
      var o = yield ed(e);
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
  }), _n.apply(this, arguments);
}
function ed(i) {
  return an.apply(this, arguments);
}
function an() {
  return an = g(function* (i) {
    var e = null;
    return yield i.doTxn("readonly", "account", (t) => {
      i.getCrossSigningKeys(t, (r) => {
        var s = r == null ? void 0 : r.master;
        s && Object.keys(s.keys).length != 0 && (e = Object.values(s.keys)[0]);
      });
    }), e;
  }), an.apply(this, arguments);
}
function Hi(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(i, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function td(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Hi(Object(t), true).forEach(function(r) {
      S(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Hi(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function sd(i) {
  return cn.apply(this, arguments);
}
function cn() {
  return cn = g(function* (i) {
    var { logger: e } = i;
    e.debug("Initialising Rust crypto-sdk WASM artifact"), yield is(), e.debug("Opening Rust CryptoStore");
    var t;
    i.storePrefix ? i.storeKey ? t = yield P.openWithKey(i.storePrefix, i.storeKey, e) : t = yield P.open(i.storePrefix, i.storePassphrase, e) : t = yield P.open(null, null, e), i.legacyCryptoStore && (yield Gg(td({ legacyStore: i.legacyCryptoStore, storeHandle: t }, i)));
    var r = yield rd(e, i.http, i.userId, i.deviceId, i.secretStorage, i.cryptoCallbacks, t, i.legacyCryptoStore);
    return t.free(), e.debug("Completed rust crypto-sdk setup"), r;
  }), cn.apply(this, arguments);
}
function rd(i, e, t, r, s, o, _, a) {
  return gn.apply(this, arguments);
}
function gn() {
  return gn = g(function* (i, e, t, r, s, o, _, a) {
    i.debug("Init OlmMachine");
    var c = yield Oe.initFromStore(new w(t), new C(r), _, i);
    a && (yield Zg({ logger: i, legacyStore: a, olmMachine: c })), c.roomKeyRequestsEnabled = false;
    var u = new Ng(i, c, e, t, r, s, o);
    if (yield c.registerRoomKeyUpdatedCallback((k) => u.onRoomKeysUpdated(k)), yield c.registerRoomKeysWithheldCallback((k) => u.onRoomKeysWithheld(k)), yield c.registerUserIdentityUpdatedCallback((k) => u.onUserIdentityUpdated(k)), yield c.registerDevicesUpdatedCallback((k) => u.onDevicesUpdated(k)), u.checkSecrets("m.megolm_backup.v1"), yield c.registerReceiveSecretCallback((k, K) => u.checkSecrets(k)), yield c.outgoingRequests(), a && (yield a.containsData())) {
      var y = yield a.getMigrationState();
      if (y < N.INITIAL_OWN_KEY_QUERY_DONE) {
        i.debug("Performing initial key query after migration");
        for (var m = false; !m; ) try {
          yield u.userHasCrossSigningKeys(t), m = true;
        } catch (k) {
          i.error("Failed to check for cross-signing keys after migration, retrying", k);
        }
        yield Xg({ legacyCryptoStore: a, rustCrypto: u, logger: i }), yield a.setMigrationState(N.INITIAL_OWN_KEY_QUERY_DONE);
      }
    }
    return u;
  }), gn.apply(this, arguments);
}
export {
  sd as initRustCrypto
};
