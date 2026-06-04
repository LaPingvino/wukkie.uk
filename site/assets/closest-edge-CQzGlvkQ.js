import { t as e } from "./defineProperty-Df_FyI5P.js";
function t(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function n(n2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var i2 = arguments[r2] == null ? {} : arguments[r2];
    r2 % 2 ? t(Object(i2), true).forEach(function(t2) {
      e(n2, t2, i2[t2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n2, Object.getOwnPropertyDescriptors(i2)) : t(Object(i2)).forEach(function(e2) {
      Object.defineProperty(n2, e2, Object.getOwnPropertyDescriptor(i2, e2));
    });
  }
  return n2;
}
var r = { top: function(e2, t2) {
  return Math.abs(t2.y - e2.top);
}, right: function(e2, t2) {
  return Math.abs(e2.right - t2.x);
}, bottom: function(e2, t2) {
  return Math.abs(e2.bottom - t2.y);
}, left: function(e2, t2) {
  return Math.abs(t2.x - e2.left);
} }, i = Symbol(`closestEdge`);
function a(t2, a2) {
  var _a;
  var o2 = a2.element, s = a2.input, c = a2.allowedEdges, l = { x: s.clientX, y: s.clientY }, u = o2.getBoundingClientRect(), d = ((_a = c.map(function(e2) {
    return { edge: e2, value: r[e2](u, l) };
  }).sort(function(e2, t3) {
    return e2.value - t3.value;
  })[0]) == null ? void 0 : _a.edge) ?? null;
  return n(n({}, t2), {}, e({}, i, d));
}
function o(e2) {
  return e2[i] ?? null;
}
export {
  a as attachClosestEdge,
  o as extractClosestEdge
};
