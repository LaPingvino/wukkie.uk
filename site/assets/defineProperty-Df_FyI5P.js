function e(t2) {
  "@babel/helpers - typeof";
  return e = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == `function` && e2.constructor === Symbol && e2 !== Symbol.prototype ? `symbol` : typeof e2;
  }, e(t2);
}
function t(t2, n2) {
  if (e(t2) != `object` || !t2) return t2;
  var r2 = t2[Symbol.toPrimitive];
  if (r2 !== void 0) {
    var i = r2.call(t2, n2 || `default`);
    if (e(i) != `object`) return i;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (n2 === `string` ? String : Number)(t2);
}
function n(n2) {
  var r2 = t(n2, `string`);
  return e(r2) == `symbol` ? r2 : r2 + ``;
}
function r(e2, t2, r2) {
  return (t2 = n(t2)) in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
}
export {
  r as t
};
