import { _ as l } from "./main-CbBlLJEx.js";
import "./index-0Fsa7gDP.js";
function a(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function c(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? a(Object(e), true).forEach(function(n) {
      l(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : a(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
var y = { top: function(t, e) {
  return Math.abs(e.y - t.top);
}, right: function(t, e) {
  return Math.abs(t.right - e.x);
}, bottom: function(t, e) {
  return Math.abs(t.bottom - e.y);
}, left: function(t, e) {
  return Math.abs(e.x - t.left);
} }, s = Symbol("closestEdge");
function h(r, t) {
  var e, n, i = t.element, u = t.input, p = t.allowedEdges, g = { x: u.clientX, y: u.clientY }, f = i.getBoundingClientRect(), b = p.map(function(o) {
    return { edge: o, value: y[o](f, g) };
  }), d = (e = (n = b.sort(function(o, v) {
    return o.value - v.value;
  })[0]) === null || n === void 0 ? void 0 : n.edge) !== null && e !== void 0 ? e : null;
  return c(c({}, r), {}, l({}, s, d));
}
function j(r) {
  var t;
  return (t = r[s]) !== null && t !== void 0 ? t : null;
}
export {
  h as attachClosestEdge,
  j as extractClosestEdge
};
