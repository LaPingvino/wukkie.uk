import { t as e } from "./chunk-Dmt67uKV.js";
import { t } from "./defineProperty-Df_FyI5P.js";
import { t as n } from "./combine-D_M9jo5P.js";
function r(e2) {
  if (Array.isArray(e2))
    return e2;
}
function i(e2, t2) {
  var n2 = e2 == null ? null : typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (n2 != null) {
    var r2, i2, a2, o2, s2 = [], c2 = true, l2 = false;
    try {
      if (a2 = (n2 = n2.call(e2)).next, t2 === 0) {
        if (Object(n2) !== n2)
          return;
        c2 = false;
      } else
        for (; !(c2 = (r2 = a2.call(n2)).done) && (s2.push(r2.value), s2.length !== t2); c2 = true)
          ;
    } catch (e3) {
      l2 = true, i2 = e3;
    } finally {
      try {
        if (!c2 && n2.return != null && (o2 = n2.return(), Object(o2) !== o2))
          return;
      } finally {
        if (l2)
          throw i2;
      }
    }
    return s2;
  }
}
function a(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function o(e2, t2) {
  if (e2) {
    if (typeof e2 == `string`)
      return a(e2, t2);
    var n2 = {}.toString.call(e2).slice(8, -1);
    return n2 === `Object` && e2.constructor && (n2 = e2.constructor.name), n2 === `Map` || n2 === `Set` ? Array.from(e2) : n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? a(e2, t2) : void 0;
  }
}
function s() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function c(e2, t2) {
  return r(e2) || i(e2, t2) || o(e2, t2) || s();
}
var l = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.bind = void 0;
  function t2(e3, t3) {
    var n2 = t3.type, r2 = t3.listener, i2 = t3.options;
    return e3.addEventListener(n2, r2, i2), function() {
      e3.removeEventListener(n2, r2, i2);
    };
  }
  e2.bind = t2;
}), u = e((e2) => {
  var t2 = e2 && e2.__assign || function() {
    return t2 = Object.assign || function(e3) {
      for (var t3, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
        for (var i3 in t3 = arguments[n3], t3)
          Object.prototype.hasOwnProperty.call(t3, i3) && (e3[i3] = t3[i3]);
      return e3;
    }, t2.apply(this, arguments);
  };
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.bindAll = void 0;
  var n2 = l();
  function r2(e3) {
    if (e3 !== void 0)
      return typeof e3 == `boolean` ? { capture: e3 } : e3;
  }
  function i2(e3, n3) {
    return n3 == null ? e3 : t2(t2({}, e3), { options: t2(t2({}, r2(n3)), r2(e3.options)) });
  }
  function a2(e3, t3, r3) {
    var a3 = t3.map(function(t4) {
      var a4 = i2(t4, r3);
      return (0, n2.bind)(e3, a4);
    });
    return function() {
      a3.forEach(function(e4) {
        return e4();
      });
    };
  }
  e2.bindAll = a2;
}), d = e((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.bindAll = e2.bind = void 0;
  var t2 = l();
  Object.defineProperty(e2, `bind`, { enumerable: true, get: function() {
    return t2.bind;
  } });
  var n2 = u();
  Object.defineProperty(e2, `bindAll`, { enumerable: true, get: function() {
    return n2.bindAll;
  } });
}), f = `data-pdnd-honey-pot`;
function p(e2) {
  return e2 instanceof Element && e2.hasAttribute(`data-pdnd-honey-pot`);
}
function m(e2) {
  var t2 = c(document.elementsFromPoint(e2.x, e2.y), 2), n2 = t2[0], r2 = t2[1];
  return n2 ? p(n2) ? r2 ?? null : n2 : null;
}
var h = 2147483647, g = d();
function _(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function v(e2) {
  for (var n2 = 1; n2 < arguments.length; n2++) {
    var r2 = arguments[n2] == null ? {} : arguments[n2];
    n2 % 2 ? _(Object(r2), true).forEach(function(n3) {
      t(e2, n3, r2[n3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : _(Object(r2)).forEach(function(t2) {
      Object.defineProperty(e2, t2, Object.getOwnPropertyDescriptor(r2, t2));
    });
  }
  return e2;
}
var y = 2, b = y / 2;
function ee(e2) {
  return { x: Math.floor(e2.x), y: Math.floor(e2.y) };
}
function te(e2) {
  return { x: e2.x - b, y: e2.y - b };
}
function ne(e2) {
  return { x: Math.max(e2.x, 0), y: Math.max(e2.y, 0) };
}
function re(e2) {
  return { x: Math.min(e2.x, window.innerWidth - y), y: Math.min(e2.y, window.innerHeight - y) };
}
function x(e2) {
  var t2 = e2.client, n2 = re(ne(te(ee(t2))));
  return DOMRect.fromRect({ x: n2.x, y: n2.y, width: y, height: y });
}
function S(e2) {
  var t2 = e2.clientRect;
  return { left: `${t2.left}px`, top: `${t2.top}px`, width: `${t2.width}px`, height: `${t2.height}px` };
}
function ie(e2) {
  var t2 = e2.client, n2 = e2.clientRect;
  return t2.x >= n2.x && t2.x <= n2.x + n2.width && t2.y >= n2.y && t2.y <= n2.y + n2.height;
}
function ae(e2) {
  var t2 = e2.initial, n2 = document.createElement(`div`);
  n2.setAttribute(f, `true`);
  var r2 = x({ client: t2 });
  Object.assign(n2.style, v(v({ backgroundColor: `transparent`, position: `fixed`, padding: 0, margin: 0, boxSizing: `border-box` }, S({ clientRect: r2 })), {}, { pointerEvents: `auto`, zIndex: h })), document.body.appendChild(n2);
  var i2 = (0, g.bind)(window, { type: `pointermove`, listener: function(e3) {
    r2 = x({ client: { x: e3.clientX, y: e3.clientY } }), Object.assign(n2.style, S({ clientRect: r2 }));
  }, options: { capture: true } });
  return function(e3) {
    var t3 = e3.current;
    if (i2(), ie({ client: t3, clientRect: r2 })) {
      n2.remove();
      return;
    }
    function a2() {
      o2(), n2.remove();
    }
    var o2 = (0, g.bindAll)(window, [{ type: `pointerdown`, listener: a2 }, { type: `pointermove`, listener: a2 }, { type: `focusin`, listener: a2 }, { type: `focusout`, listener: a2 }, { type: `dragstart`, listener: a2 }, { type: `dragenter`, listener: a2 }, { type: `dragover`, listener: a2 }], { capture: true });
  };
}
function oe() {
  var e2 = null;
  function t2() {
    return e2 = null, (0, g.bind)(window, { type: `pointermove`, listener: function(t3) {
      e2 = { x: t3.clientX, y: t3.clientY };
    }, options: { capture: true } });
  }
  function n2() {
    var t3 = null;
    return function(n3) {
      var r2 = n3.eventName, i2 = n3.payload;
      if (r2 === `onDragStart`) {
        var a2 = i2.location.initial.input;
        t3 = ae({ initial: e2 ?? { x: a2.clientX, y: a2.clientY } });
      }
      if (r2 === `onDrop`) {
        var o2, s2 = i2.location.current.input;
        (o2 = t3) == null || o2({ current: { x: s2.clientX, y: s2.clientY } }), t3 = null, e2 = null;
      }
    };
  }
  return { bindEvents: t2, getOnPostDispatch: n2 };
}
function C(e2) {
  if (Array.isArray(e2))
    return a(e2);
}
function w(e2) {
  if (typeof Symbol < `u` && e2[Symbol.iterator] != null || e2[`@@iterator`] != null)
    return Array.from(e2);
}
function T() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E(e2) {
  return C(e2) || w(e2) || o(e2) || T();
}
function D(e2) {
  var t2 = null;
  return function() {
    if (!t2) {
      var n2 = [...arguments];
      t2 = { result: e2.apply(this, n2) };
    }
    return t2.result;
  };
}
var se = D(function() {
  return navigator.userAgent.includes(`Firefox`);
}), O = D(function() {
  var e2 = navigator.userAgent;
  return e2.includes(`AppleWebKit`) && !e2.includes(`Chrome`);
}), ce = d(), k = { isLeavingWindow: Symbol(`leaving`), isEnteringWindow: Symbol(`entering`) };
function le(e2) {
  var t2 = e2.dragLeave;
  return O() ? t2.hasOwnProperty(k.isLeavingWindow) : false;
}
(function() {
  if (typeof window > `u` || !O())
    return;
  function e2() {
    return { enterCount: 0, isOverWindow: false };
  }
  var t2 = e2();
  function n2() {
    t2 = e2();
  }
  (0, ce.bindAll)(window, [{ type: `dragstart`, listener: function() {
    t2.enterCount = 0, t2.isOverWindow = true;
  } }, { type: `drop`, listener: n2 }, { type: `dragend`, listener: n2 }, { type: `dragenter`, listener: function(e3) {
    !t2.isOverWindow && t2.enterCount === 0 && (e3[k.isEnteringWindow] = true), t2.isOverWindow = true, t2.enterCount++;
  } }, { type: `dragleave`, listener: function(e3) {
    t2.enterCount--, t2.isOverWindow && t2.enterCount === 0 && (e3[k.isLeavingWindow] = true, t2.isOverWindow = false);
  } }], { capture: true });
})();
function ue(e2) {
  return `nodeName` in e2;
}
function de(e2) {
  return ue(e2) && e2.ownerDocument !== document;
}
function fe(e2) {
  var t2 = e2.dragLeave, n2 = t2.type, r2 = t2.relatedTarget;
  return n2 === `dragleave` ? O() ? le({ dragLeave: t2 }) : r2 == null ? true : se() ? de(r2) : r2 instanceof HTMLIFrameElement : false;
}
function pe(e2) {
  var t2 = e2.onDragEnd;
  return [{ type: `pointermove`, listener: /* @__PURE__ */ function() {
    var e3 = 0;
    return function() {
      if (e3 < 20) {
        e3++;
        return;
      }
      t2();
    };
  }() }, { type: `pointerdown`, listener: t2 }];
}
function A(e2) {
  return { altKey: e2.altKey, button: e2.button, buttons: e2.buttons, ctrlKey: e2.ctrlKey, metaKey: e2.metaKey, shiftKey: e2.shiftKey, clientX: e2.clientX, clientY: e2.clientY, pageX: e2.pageX, pageY: e2.pageY };
}
var j = function(e2) {
  var t2 = [], n2 = null, r2 = function() {
    t2 = [...arguments], !n2 && (n2 = requestAnimationFrame(function() {
      n2 = null, e2.apply(void 0, t2);
    }));
  };
  return r2.cancel = function() {
    n2 && (n2 = (cancelAnimationFrame(n2), null));
  }, r2;
}(function(e2) {
  return e2();
}), M = /* @__PURE__ */ function() {
  var e2 = null;
  function t2(t3) {
    e2 = { frameId: requestAnimationFrame(function() {
      e2 = null, t3();
    }), fn: t3 };
  }
  function n2() {
    e2 && (e2 = (cancelAnimationFrame(e2.frameId), e2.fn(), null));
  }
  return { schedule: t2, flush: n2 };
}();
function me(e2) {
  var t2 = e2.source, n2 = e2.initial, r2 = e2.dispatchEvent, i2 = { dropTargets: [] };
  function a2(e3) {
    r2(e3), i2 = { dropTargets: e3.payload.location.current.dropTargets };
  }
  return { start: function(e3) {
    var r3 = e3.nativeSetDragImage, o2 = { current: n2, previous: i2, initial: n2 };
    a2({ eventName: `onGenerateDragPreview`, payload: { source: t2, location: o2, nativeSetDragImage: r3 } }), M.schedule(function() {
      a2({ eventName: `onDragStart`, payload: { source: t2, location: o2 } });
    });
  }, dragUpdate: function(e3) {
    var r3 = e3.current;
    M.flush(), j.cancel(), a2({ eventName: `onDropTargetChange`, payload: { source: t2, location: { initial: n2, previous: i2, current: r3 } } });
  }, drag: function(e3) {
    var r3 = e3.current;
    j(function() {
      M.flush(), a2({ eventName: `onDrag`, payload: { source: t2, location: { initial: n2, previous: i2, current: r3 } } });
    });
  }, drop: function(e3) {
    var r3 = e3.current, o2 = e3.updatedSourcePayload;
    M.flush(), j.cancel(), a2({ eventName: `onDrop`, payload: { source: o2 ?? t2, location: { current: r3, previous: i2, initial: n2 } } });
  } };
}
var N = d(), P = { isActive: false };
function F() {
  return !P.isActive;
}
function I(e2) {
  return e2.dataTransfer ? e2.dataTransfer.setDragImage.bind(e2.dataTransfer) : null;
}
function L(e2) {
  var t2 = e2.current, n2 = e2.next;
  if (t2.length !== n2.length)
    return true;
  for (var r2 = 0; r2 < t2.length; r2++)
    if (t2[r2].element !== n2[r2].element)
      return true;
  return false;
}
function R(e2) {
  var t2 = e2.event, n2 = e2.dragType, r2 = e2.getDropTargetsOver, i2 = e2.dispatchEvent;
  if (!F())
    return;
  var a2 = he({ event: t2, dragType: n2, getDropTargetsOver: r2 });
  P.isActive = true;
  var o2 = { current: a2 };
  z({ event: t2, current: a2.dropTargets });
  var s2 = me({ source: n2.payload, dispatchEvent: i2, initial: a2 });
  function c2(e3) {
    var t3 = L({ current: o2.current.dropTargets, next: e3.dropTargets });
    o2.current = e3, t3 && s2.dragUpdate({ current: o2.current });
  }
  function l2(e3) {
    var t3 = A(e3), i3 = r2({ target: p(e3.target) ? m({ x: t3.clientX, y: t3.clientY }) : e3.target, input: t3, source: n2.payload, current: o2.current.dropTargets });
    i3.length && (e3.preventDefault(), z({ event: e3, current: i3 })), c2({ dropTargets: i3, input: t3 });
  }
  function u2() {
    o2.current.dropTargets.length && c2({ dropTargets: [], input: o2.current.input }), s2.drop({ current: o2.current, updatedSourcePayload: null }), d2();
  }
  function d2() {
    P.isActive = false, f2();
  }
  var f2 = (0, N.bindAll)(window, [{ type: `dragover`, listener: function(e3) {
    l2(e3), s2.drag({ current: o2.current });
  } }, { type: `dragenter`, listener: l2 }, { type: `dragleave`, listener: function(e3) {
    fe({ dragLeave: e3 }) && (c2({ input: o2.current.input, dropTargets: [] }), n2.startedFrom === `external` && u2());
  } }, { type: `drop`, listener: function(e3) {
    if (o2.current = { dropTargets: o2.current.dropTargets, input: A(e3) }, !o2.current.dropTargets.length) {
      u2();
      return;
    }
    e3.preventDefault(), z({ event: e3, current: o2.current.dropTargets }), s2.drop({ current: o2.current, updatedSourcePayload: n2.type === `external` ? n2.getDropPayload(e3) : null }), d2();
  } }, { type: `dragend`, listener: function(e3) {
    o2.current = { dropTargets: o2.current.dropTargets, input: A(e3) }, u2();
  } }].concat(E(pe({ onDragEnd: u2 }))), { capture: true });
  s2.start({ nativeSetDragImage: I(t2) });
}
function z(e2) {
  var _a;
  var t2 = e2.event, n2 = (_a = e2.current[0]) == null ? void 0 : _a.dropEffect;
  n2 != null && t2.dataTransfer && (t2.dataTransfer.dropEffect = n2);
}
function he(e2) {
  var t2 = e2.event, n2 = e2.dragType, r2 = e2.getDropTargetsOver, i2 = A(t2);
  return n2.startedFrom === `external` ? { input: i2, dropTargets: [] } : { input: i2, dropTargets: r2({ input: i2, source: n2.payload, target: t2.target, current: [] }) };
}
var B = { canStart: F, start: R }, V = /* @__PURE__ */ new Map();
function ge(e2) {
  var t2 = e2.typeKey, n2 = e2.mount, r2 = V.get(t2);
  if (r2)
    return r2.usageCount++, r2;
  var i2 = { typeKey: t2, unmount: n2(), usageCount: 1 };
  return V.set(t2, i2), i2;
}
function _e(e2) {
  var t2 = ge(e2);
  return function() {
    t2.usageCount--, !(t2.usageCount > 0) && (t2.unmount(), V.delete(e2.typeKey));
  };
}
function H(e2, t2) {
  var n2 = t2.attribute, r2 = t2.value;
  return e2.setAttribute(n2, r2), function() {
    return e2.removeAttribute(n2);
  };
}
function U(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function W(e2) {
  for (var n2 = 1; n2 < arguments.length; n2++) {
    var r2 = arguments[n2] == null ? {} : arguments[n2];
    n2 % 2 ? U(Object(r2), true).forEach(function(n3) {
      t(e2, n3, r2[n3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : U(Object(r2)).forEach(function(t2) {
      Object.defineProperty(e2, t2, Object.getOwnPropertyDescriptor(r2, t2));
    });
  }
  return e2;
}
function G(e2, t2) {
  var n2 = typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (!n2) {
    if (Array.isArray(e2) || (n2 = ve(e2)) || t2 && e2 && typeof e2.length == `number`) {
      n2 && (e2 = n2);
      var r2 = 0, i2 = function() {
      };
      return { s: i2, n: function() {
        return r2 >= e2.length ? { done: true } : { done: false, value: e2[r2++] };
      }, e: function(e3) {
        throw e3;
      }, f: i2 };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a2, o2 = true, s2 = false;
  return { s: function() {
    n2 = n2.call(e2);
  }, n: function() {
    var e3 = n2.next();
    return o2 = e3.done, e3;
  }, e: function(e3) {
    s2 = true, a2 = e3;
  }, f: function() {
    try {
      o2 || n2.return == null || n2.return();
    } finally {
      if (s2)
        throw a2;
    }
  } };
}
function ve(e2, t2) {
  if (e2) {
    if (typeof e2 == `string`)
      return K(e2, t2);
    var n2 = {}.toString.call(e2).slice(8, -1);
    return n2 === `Object` && e2.constructor && (n2 = e2.constructor.name), n2 === `Map` || n2 === `Set` ? Array.from(e2) : n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? K(e2, t2) : void 0;
  }
}
function K(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function q(e2) {
  return e2.slice(0).reverse();
}
function ye(e2) {
  var t2 = e2.typeKey, r2 = e2.defaultDropEffect, i2 = /* @__PURE__ */ new WeakMap(), a2 = `data-drop-target-for-${t2}`, o2 = `[${a2}]`;
  function s2(e3) {
    return i2.set(e3.element, e3), function() {
      return i2.delete(e3.element);
    };
  }
  function c2(e3) {
    return D(n(H(e3.element, { attribute: a2, value: `true` }), s2(e3)));
  }
  function l2(e3) {
    var _a, _b;
    var t3 = e3.source, n2 = e3.target, a3 = e3.input, s3 = e3.result, c3 = s3 === void 0 ? [] : s3;
    if (n2 == null)
      return c3;
    if (!(n2 instanceof Element))
      return n2 instanceof Node ? l2({ source: t3, target: n2.parentElement, input: a3, result: c3 }) : c3;
    var u3 = n2.closest(o2);
    if (u3 == null)
      return c3;
    var d3 = i2.get(u3);
    if (d3 == null)
      return c3;
    var f3 = { input: a3, source: t3, element: d3.element };
    if (d3.canDrop && !d3.canDrop(f3))
      return l2({ source: t3, target: d3.element.parentElement, input: a3, result: c3 });
    var p3 = ((_a = d3.getData) == null ? void 0 : _a.call(d3, f3)) ?? {}, m2 = ((_b = d3.getDropEffect) == null ? void 0 : _b.call(d3, f3)) ?? r2, h2 = { data: p3, element: d3.element, dropEffect: m2, isActiveDueToStickiness: false };
    return l2({ source: t3, target: d3.element.parentElement, input: a3, result: [].concat(E(c3), [h2]) });
  }
  function u2(e3) {
    var t3 = e3.eventName, n2 = e3.payload, r3 = G(n2.location.current.dropTargets), a3;
    try {
      for (r3.s(); !(a3 = r3.n()).done; ) {
        var o3, s3 = a3.value, c3 = i2.get(s3.element), l3 = W(W({}, n2), {}, { self: s3 });
        c3 == null || (o3 = c3[t3]) == null || o3.call(c3, l3);
      }
    } catch (e4) {
      r3.e(e4);
    } finally {
      r3.f();
    }
  }
  var d2 = { onGenerateDragPreview: u2, onDrag: u2, onDragStart: u2, onDrop: u2, onDropTargetChange: function(e3) {
    var t3 = e3.payload, n2 = new Set(t3.location.current.dropTargets.map(function(e4) {
      return e4.element;
    })), r3 = /* @__PURE__ */ new Set(), a3 = G(t3.location.previous.dropTargets), o3;
    try {
      for (a3.s(); !(o3 = a3.n()).done; ) {
        var s3, c3 = o3.value;
        r3.add(c3.element);
        var l3 = i2.get(c3.element), u3 = n2.has(c3.element), d3 = W(W({}, t3), {}, { self: c3 });
        if (l3 == null || (s3 = l3.onDropTargetChange) == null || s3.call(l3, d3), !u3) {
          var f3;
          l3 == null || (f3 = l3.onDragLeave) == null || f3.call(l3, d3);
        }
      }
    } catch (e4) {
      a3.e(e4);
    } finally {
      a3.f();
    }
    var p3 = G(t3.location.current.dropTargets), m2;
    try {
      for (p3.s(); !(m2 = p3.n()).done; ) {
        var h2, g2, _2 = m2.value;
        if (!r3.has(_2.element)) {
          var v2 = W(W({}, t3), {}, { self: _2 }), y2 = i2.get(_2.element);
          y2 == null || (h2 = y2.onDropTargetChange) == null || h2.call(y2, v2), y2 == null || (g2 = y2.onDragEnter) == null || g2.call(y2, v2);
        }
      }
    } catch (e4) {
      p3.e(e4);
    } finally {
      p3.f();
    }
  } };
  function f2(e3) {
    d2[e3.eventName](e3);
  }
  function p2(e3) {
    var t3 = e3.source, n2 = e3.target, r3 = e3.input, a3 = e3.current, o3 = l2({ source: t3, target: n2, input: r3 });
    if (o3.length >= a3.length)
      return o3;
    for (var s3 = q(a3), c3 = q(o3), u3 = [], d3 = 0; d3 < s3.length; d3++) {
      var f3, p3 = s3[d3], m2 = c3[d3];
      if (m2 != null) {
        u3.push(m2);
        continue;
      }
      var h2 = u3[d3 - 1], g2 = s3[d3 - 1];
      if ((h2 == null ? void 0 : h2.element) !== (g2 == null ? void 0 : g2.element))
        break;
      var _2 = i2.get(p3.element);
      if (!_2)
        break;
      var v2 = { input: r3, source: t3, element: _2.element };
      if (_2.canDrop && !_2.canDrop(v2) || !((f3 = _2.getIsSticky) != null && f3.call(_2, v2)))
        break;
      u3.push(W(W({}, p3), {}, { isActiveDueToStickiness: true }));
    }
    return q(u3);
  }
  return { dropTargetForConsumers: c2, getIsOver: p2, dispatchEvent: f2 };
}
function be(e2, t2) {
  var n2 = typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (!n2) {
    if (Array.isArray(e2) || (n2 = xe(e2)) || t2 && e2 && typeof e2.length == `number`) {
      n2 && (e2 = n2);
      var r2 = 0, i2 = function() {
      };
      return { s: i2, n: function() {
        return r2 >= e2.length ? { done: true } : { done: false, value: e2[r2++] };
      }, e: function(e3) {
        throw e3;
      }, f: i2 };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a2, o2 = true, s2 = false;
  return { s: function() {
    n2 = n2.call(e2);
  }, n: function() {
    var e3 = n2.next();
    return o2 = e3.done, e3;
  }, e: function(e3) {
    s2 = true, a2 = e3;
  }, f: function() {
    try {
      o2 || n2.return == null || n2.return();
    } finally {
      if (s2)
        throw a2;
    }
  } };
}
function xe(e2, t2) {
  if (e2) {
    if (typeof e2 == `string`)
      return J(e2, t2);
    var n2 = {}.toString.call(e2).slice(8, -1);
    return n2 === `Object` && e2.constructor && (n2 = e2.constructor.name), n2 === `Map` || n2 === `Set` ? Array.from(e2) : n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? J(e2, t2) : void 0;
  }
}
function J(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function Y(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Se(e2) {
  for (var n2 = 1; n2 < arguments.length; n2++) {
    var r2 = arguments[n2] == null ? {} : arguments[n2];
    n2 % 2 ? Y(Object(r2), true).forEach(function(n3) {
      t(e2, n3, r2[n3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : Y(Object(r2)).forEach(function(t2) {
      Object.defineProperty(e2, t2, Object.getOwnPropertyDescriptor(r2, t2));
    });
  }
  return e2;
}
function Ce() {
  var e2 = /* @__PURE__ */ new Set(), t2 = null;
  function n2(e3) {
    t2 && (!e3.canMonitor || e3.canMonitor(t2.canMonitorArgs)) && t2.active.add(e3);
  }
  function r2(r3) {
    var i3 = Se({}, r3);
    e2.add(i3), n2(i3);
    function a2() {
      e2.delete(i3), t2 && t2.active.delete(i3);
    }
    return D(a2);
  }
  function i2(r3) {
    var i3 = r3.eventName, a2 = r3.payload;
    if (i3 === `onGenerateDragPreview`) {
      t2 = { canMonitorArgs: { initial: a2.location.initial, source: a2.source }, active: /* @__PURE__ */ new Set() };
      var o2 = be(e2), s2;
      try {
        for (o2.s(); !(s2 = o2.n()).done; ) {
          var c2 = s2.value;
          n2(c2);
        }
      } catch (e3) {
        o2.e(e3);
      } finally {
        o2.f();
      }
    }
    if (t2) {
      for (var l2 = Array.from(t2.active), u2 = 0, d2 = l2; u2 < d2.length; u2++) {
        var f2 = d2[u2];
        if (t2.active.has(f2)) {
          var p2;
          (p2 = f2[i3]) == null || p2.call(f2, a2);
        }
      }
      i3 === `onDrop` && (t2.active.clear(), t2 = null);
    }
  }
  return { dispatchEvent: i2, monitorForConsumers: r2 };
}
function we(e2) {
  var t2 = e2.typeKey, n2 = e2.mount, r2 = e2.dispatchEventToSource, i2 = e2.onPostDispatch, a2 = e2.defaultDropEffect, o2 = Ce(), s2 = ye({ typeKey: t2, defaultDropEffect: a2 });
  function c2(e3) {
    r2 == null ? void 0 : r2(e3), s2.dispatchEvent(e3), o2.dispatchEvent(e3), i2 == null ? void 0 : i2(e3);
  }
  function l2(e3) {
    var t3 = e3.event, n3 = e3.dragType;
    B.start({ event: t3, dragType: n3, getDropTargetsOver: s2.getIsOver, dispatchEvent: c2 });
  }
  function u2() {
    function e3() {
      return n2({ canStart: B.canStart, start: l2 });
    }
    return _e({ typeKey: t2, mount: e3 });
  }
  return { registerUsage: u2, dropTarget: s2.dropTargetForConsumers, monitor: o2.monitorForConsumers };
}
var Te = D(function() {
  return navigator.userAgent.toLocaleLowerCase().includes(`android`);
}), Ee = `pdnd:android-fallback`, X = `text/plain`, De = `application/vnd.pdnd`, Oe = d(), Z = /* @__PURE__ */ new WeakMap();
function ke(e2) {
  return Z.set(e2.element, e2), function() {
    Z.delete(e2.element);
  };
}
var Q = oe(), $ = we({ typeKey: `element`, defaultDropEffect: `move`, mount: function(e2) {
  return n(Q.bindEvents(), (0, Oe.bind)(document, { type: `dragstart`, listener: function(t2) {
    var _a, _b;
    if (e2.canStart(t2) && !t2.defaultPrevented && t2.dataTransfer) {
      var n2 = t2.target;
      if (n2 instanceof HTMLElement) {
        var r2 = Z.get(n2);
        if (r2) {
          var i2 = A(t2), a2 = { element: r2.element, dragHandle: r2.dragHandle ?? null, input: i2 };
          if (r2.canDrag && !r2.canDrag(a2)) {
            t2.preventDefault();
            return;
          }
          if (r2.dragHandle) {
            var o2 = m({ x: i2.clientX, y: i2.clientY });
            if (!r2.dragHandle.contains(o2)) {
              t2.preventDefault();
              return;
            }
          }
          var s2 = ((_a = r2.getInitialDataForExternal) == null ? void 0 : _a.call(r2, a2)) ?? null;
          if (s2)
            for (var l2 = 0, u2 = Object.entries(s2); l2 < u2.length; l2++) {
              var d2 = c(u2[l2], 2), f2 = d2[0], p2 = d2[1];
              t2.dataTransfer.setData(f2, p2 ?? ``);
            }
          Te() && !t2.dataTransfer.types.includes(`text/plain`) && !t2.dataTransfer.types.includes(`text/uri-list`) && t2.dataTransfer.setData(X, Ee), t2.dataTransfer.setData(De, ``);
          var h2 = { type: `element`, payload: { element: r2.element, dragHandle: r2.dragHandle ?? null, data: ((_b = r2.getInitialData) == null ? void 0 : _b.call(r2, a2)) ?? {} }, startedFrom: `internal` };
          e2.start({ event: t2, dragType: h2 });
        }
      }
    }
  } }));
}, dispatchEventToSource: function(e2) {
  var t2, n2, r2 = e2.eventName, i2 = e2.payload;
  (t2 = Z.get(i2.source.element)) == null || (n2 = t2[r2]) == null || n2.call(t2, i2);
}, onPostDispatch: Q.getOnPostDispatch() }), Ae = $.dropTarget, je = $.monitor;
function Me(e2) {
  return D(n($.registerUsage(), ke(e2), H(e2.element, { attribute: `draggable`, value: `true` })));
}
export {
  Ae as n,
  je as r,
  Me as t
};
