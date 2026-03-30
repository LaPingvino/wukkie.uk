const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-DivFZjc9.js","assets/index-0Fsa7gDP.js","assets/main-D4u-56lv.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
import { a as Ft, b as Gt, __tla as __tla_0 } from "./main-DivFZjc9.js";
import "./index-0Fsa7gDP.js";
let qt, Kt, Qt, Jt, Zt, te, ee, se, ie, ne, re, ae, oe, he, le, ce, de, ue, fe, pe, ge, me, be, Ae, ve, ye, we, Se, xe, Ee, Te, Ce, ke, Re, Fe, Pe, Le, Me, Ie, _e, De, Ne, Oe, He, Be;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Xt = {
    976: (ct, st, $) => {
      var _t, _e2, _s_instances, s_fn, _g_instances, t_fn, e_fn, s_fn2, _t2, _e3, _s2, _n, _r, _i, _a, _l, _h, _d, _u, _c, _o, _p, _g, _f, _A, _H_instances, m_fn, v_fn, w_fn, C_fn, _t3, _t4, _t5, _t6, _t7, _t8, _ot_instances, e_fn2, _t9, _e4, _s3, _ut_instances, n_fn, r_fn;
      $.d(st, {
        AnnotationLayer: () => ut,
        FreeTextAnnotationElement: () => B,
        InkAnnotationElement: () => tt,
        StampAnnotationElement: () => dt
      });
      var w = $(292), z = $(419), _ = $(792);
      function G(et) {
        return Math.floor(Math.max(0, Math.min(1, et)) * 255).toString(16).padStart(2, "0");
      }
      function P(et) {
        return Math.max(0, Math.min(255, 255 * et));
      }
      class C {
        static CMYK_G([m, h, e, n]) {
          return [
            "G",
            1 - Math.min(1, 0.3 * m + 0.59 * e + 0.11 * h + n)
          ];
        }
        static G_CMYK([m]) {
          return [
            "CMYK",
            0,
            0,
            0,
            1 - m
          ];
        }
        static G_RGB([m]) {
          return [
            "RGB",
            m,
            m,
            m
          ];
        }
        static G_rgb([m]) {
          return m = P(m), [
            m,
            m,
            m
          ];
        }
        static G_HTML([m]) {
          const h = G(m);
          return `#${h}${h}${h}`;
        }
        static RGB_G([m, h, e]) {
          return [
            "G",
            0.3 * m + 0.59 * h + 0.11 * e
          ];
        }
        static RGB_rgb(m) {
          return m.map(P);
        }
        static RGB_HTML(m) {
          return `#${m.map(G).join("")}`;
        }
        static T_HTML() {
          return "#00000000";
        }
        static T_rgb() {
          return [
            null
          ];
        }
        static CMYK_RGB([m, h, e, n]) {
          return [
            "RGB",
            1 - Math.min(1, m + n),
            1 - Math.min(1, e + n),
            1 - Math.min(1, h + n)
          ];
        }
        static CMYK_rgb([m, h, e, n]) {
          return [
            P(1 - Math.min(1, m + n)),
            P(1 - Math.min(1, e + n)),
            P(1 - Math.min(1, h + n))
          ];
        }
        static CMYK_HTML(m) {
          const h = this.CMYK_RGB(m).slice(1);
          return this.RGB_HTML(h);
        }
        static RGB_CMYK([m, h, e]) {
          const n = 1 - m, f = 1 - h, o = 1 - e, a = Math.min(n, f, o);
          return [
            "CMYK",
            n,
            f,
            o,
            a
          ];
        }
      }
      var E = $(284);
      const v = 1e3, r = 9, c = /* @__PURE__ */ new WeakSet();
      function l(et) {
        return {
          width: et[2] - et[0],
          height: et[3] - et[1]
        };
      }
      class b {
        static create(m) {
          switch (m.data.annotationType) {
            case w.AnnotationType.LINK:
              return new g(m);
            case w.AnnotationType.TEXT:
              return new t(m);
            case w.AnnotationType.WIDGET:
              switch (m.data.fieldType) {
                case "Tx":
                  return new u(m);
                case "Btn":
                  return m.data.radioButton ? new S(m) : m.data.checkBox ? new y(m) : new L(m);
                case "Ch":
                  return new M(m);
                case "Sig":
                  return new p(m);
              }
              return new i(m);
            case w.AnnotationType.POPUP:
              return new N(m);
            case w.AnnotationType.FREETEXT:
              return new B(m);
            case w.AnnotationType.LINE:
              return new q(m);
            case w.AnnotationType.SQUARE:
              return new nt(m);
            case w.AnnotationType.CIRCLE:
              return new j(m);
            case w.AnnotationType.POLYLINE:
              return new O(m);
            case w.AnnotationType.CARET:
              return new Y(m);
            case w.AnnotationType.INK:
              return new tt(m);
            case w.AnnotationType.POLYGON:
              return new V(m);
            case w.AnnotationType.HIGHLIGHT:
              return new Z(m);
            case w.AnnotationType.UNDERLINE:
              return new at(m);
            case w.AnnotationType.SQUIGGLY:
              return new lt(m);
            case w.AnnotationType.STRIKEOUT:
              return new pt(m);
            case w.AnnotationType.STAMP:
              return new dt(m);
            case w.AnnotationType.FILEATTACHMENT:
              return new ot(m);
            default:
              return new s(m);
          }
        }
      }
      const _s = class _s {
        constructor(m, { isRenderable: h = false, ignoreBorder: e = false, createQuadrilaterals: n = false } = {}) {
          __privateAdd(this, _s_instances);
          __privateAdd(this, _t, null);
          __privateAdd(this, _e2, false);
          this.isRenderable = h, this.data = m.data, this.layer = m.layer, this.linkService = m.linkService, this.downloadManager = m.downloadManager, this.imageResourcesPath = m.imageResourcesPath, this.renderForms = m.renderForms, this.svgFactory = m.svgFactory, this.annotationStorage = m.annotationStorage, this.enableScripting = m.enableScripting, this.hasJSActions = m.hasJSActions, this._fieldObjects = m.fieldObjects, this.parent = m.parent, h && (this.container = this._createContainer(e)), n && this._createQuadrilaterals();
        }
        static _hasPopupData({ titleObj: m, contentsObj: h, richText: e }) {
          return !!((m == null ? void 0 : m.str) || (h == null ? void 0 : h.str) || (e == null ? void 0 : e.str));
        }
        get hasPopupData() {
          return _s._hasPopupData(this.data);
        }
        updateEdited(m) {
          if (!this.container) return;
          __privateGet(this, _t) || __privateSet(this, _t, {
            rect: this.data.rect.slice(0)
          });
          const { rect: h } = m;
          h && __privateMethod(this, _s_instances, s_fn).call(this, h);
        }
        resetEdited() {
          __privateGet(this, _t) && (__privateMethod(this, _s_instances, s_fn).call(this, __privateGet(this, _t).rect), __privateSet(this, _t, null));
        }
        _createContainer(m) {
          const { data: h, parent: { page: e, viewport: n } } = this, f = document.createElement("section");
          f.setAttribute("data-annotation-id", h.id), this instanceof i || (f.tabIndex = v);
          const { style: o } = f;
          if (o.zIndex = this.parent.zIndex++, h.popupRef && f.setAttribute("aria-haspopup", "dialog"), h.alternativeText && (f.title = h.alternativeText), h.noRotate && f.classList.add("norotate"), !h.rect || this instanceof N) {
            const { rotation: F } = h;
            return !h.hasOwnCanvas && F !== 0 && this.setRotation(F, f), f;
          }
          const { width: a, height: d } = l(h.rect);
          if (!m && h.borderStyle.width > 0) {
            o.borderWidth = `${h.borderStyle.width}px`;
            const F = h.borderStyle.horizontalCornerRadius, T = h.borderStyle.verticalCornerRadius;
            if (F > 0 || T > 0) {
              const K = `calc(${F}px * var(--scale-factor)) / calc(${T}px * var(--scale-factor))`;
              o.borderRadius = K;
            } else if (this instanceof S) {
              const K = `calc(${a}px * var(--scale-factor)) / calc(${d}px * var(--scale-factor))`;
              o.borderRadius = K;
            }
            switch (h.borderStyle.style) {
              case w.AnnotationBorderStyleType.SOLID:
                o.borderStyle = "solid";
                break;
              case w.AnnotationBorderStyleType.DASHED:
                o.borderStyle = "dashed";
                break;
              case w.AnnotationBorderStyleType.BEVELED:
                (0, w.warn)("Unimplemented border style: beveled");
                break;
              case w.AnnotationBorderStyleType.INSET:
                (0, w.warn)("Unimplemented border style: inset");
                break;
              case w.AnnotationBorderStyleType.UNDERLINE:
                o.borderBottomStyle = "solid";
                break;
            }
            const U = h.borderColor || null;
            U ? (__privateSet(this, _e2, true), o.borderColor = w.Util.makeHexColor(U[0] | 0, U[1] | 0, U[2] | 0)) : o.borderWidth = 0;
          }
          const A = w.Util.normalizeRect([
            h.rect[0],
            e.view[3] - h.rect[1] + e.view[1],
            h.rect[2],
            e.view[3] - h.rect[3] + e.view[1]
          ]), { pageWidth: x, pageHeight: k, pageX: R, pageY: D } = n.rawDims;
          o.left = `${100 * (A[0] - R) / x}%`, o.top = `${100 * (A[1] - D) / k}%`;
          const { rotation: I } = h;
          return h.hasOwnCanvas || I === 0 ? (o.width = `${100 * a / x}%`, o.height = `${100 * d / k}%`) : this.setRotation(I, f), f;
        }
        setRotation(m, h = this.container) {
          if (!this.data.rect) return;
          const { pageWidth: e, pageHeight: n } = this.parent.viewport.rawDims, { width: f, height: o } = l(this.data.rect);
          let a, d;
          m % 180 === 0 ? (a = 100 * f / e, d = 100 * o / n) : (a = 100 * o / e, d = 100 * f / n), h.style.width = `${a}%`, h.style.height = `${d}%`, h.setAttribute("data-main-rotation", (360 - m) % 360);
        }
        get _commonActions() {
          const m = (h, e, n) => {
            const f = n.detail[h], o = f[0], a = f.slice(1);
            n.target.style[e] = C[`${o}_HTML`](a), this.annotationStorage.setValue(this.data.id, {
              [e]: C[`${o}_rgb`](a)
            });
          };
          return (0, w.shadow)(this, "_commonActions", {
            display: (h) => {
              const { display: e } = h.detail, n = e % 2 === 1;
              this.container.style.visibility = n ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                noView: n,
                noPrint: e === 1 || e === 2
              });
            },
            print: (h) => {
              this.annotationStorage.setValue(this.data.id, {
                noPrint: !h.detail.print
              });
            },
            hidden: (h) => {
              const { hidden: e } = h.detail;
              this.container.style.visibility = e ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                noPrint: e,
                noView: e
              });
            },
            focus: (h) => {
              setTimeout(() => h.target.focus({
                preventScroll: false
              }), 0);
            },
            userName: (h) => {
              h.target.title = h.detail.userName;
            },
            readonly: (h) => {
              h.target.disabled = h.detail.readonly;
            },
            required: (h) => {
              this._setRequired(h.target, h.detail.required);
            },
            bgColor: (h) => {
              m("bgColor", "backgroundColor", h);
            },
            fillColor: (h) => {
              m("fillColor", "backgroundColor", h);
            },
            fgColor: (h) => {
              m("fgColor", "color", h);
            },
            textColor: (h) => {
              m("textColor", "color", h);
            },
            borderColor: (h) => {
              m("borderColor", "borderColor", h);
            },
            strokeColor: (h) => {
              m("strokeColor", "borderColor", h);
            },
            rotation: (h) => {
              const e = h.detail.rotation;
              this.setRotation(e), this.annotationStorage.setValue(this.data.id, {
                rotation: e
              });
            }
          });
        }
        _dispatchEventFromSandbox(m, h) {
          var _a2;
          const e = this._commonActions;
          for (const n of Object.keys(h.detail)) (_a2 = m[n] || e[n]) == null ? void 0 : _a2(h);
        }
        _setDefaultPropertiesFromJS(m) {
          if (!this.enableScripting) return;
          const h = this.annotationStorage.getRawValue(this.data.id);
          if (!h) return;
          const e = this._commonActions;
          for (const [n, f] of Object.entries(h)) {
            const o = e[n];
            if (o) {
              const a = {
                detail: {
                  [n]: f
                },
                target: m
              };
              o(a), delete h[n];
            }
          }
        }
        _createQuadrilaterals() {
          if (!this.container) return;
          const { quadPoints: m } = this.data;
          if (!m) return;
          const [h, e, n, f] = this.data.rect;
          if (m.length === 1) {
            const [, { x: F, y: T }, { x: U, y: K }] = m[0];
            if (n === F && f === T && h === U && e === K) return;
          }
          const { style: o } = this.container;
          let a;
          if (__privateGet(this, _e2)) {
            const { borderColor: F, borderWidth: T } = o;
            o.borderWidth = 0, a = [
              "url('data:image/svg+xml;utf8,",
              '<svg xmlns="http://www.w3.org/2000/svg"',
              ' preserveAspectRatio="none" viewBox="0 0 1 1">',
              `<g fill="transparent" stroke="${F}" stroke-width="${T}">`
            ], this.container.classList.add("hasBorder");
          }
          const d = n - h, A = f - e, { svgFactory: x } = this, k = x.createElement("svg");
          k.classList.add("quadrilateralsContainer"), k.setAttribute("width", 0), k.setAttribute("height", 0);
          const R = x.createElement("defs");
          k.append(R);
          const D = x.createElement("clipPath"), I = `clippath_${this.data.id}`;
          D.setAttribute("id", I), D.setAttribute("clipPathUnits", "objectBoundingBox"), R.append(D);
          for (const [, { x: F, y: T }, { x: U, y: K }] of m) {
            const X = x.createElement("rect"), W = (U - h) / d, rt = (f - T) / A, J = (F - U) / d, Q = (T - K) / A;
            X.setAttribute("x", W), X.setAttribute("y", rt), X.setAttribute("width", J), X.setAttribute("height", Q), D.append(X), a == null ? void 0 : a.push(`<rect vector-effect="non-scaling-stroke" x="${W}" y="${rt}" width="${J}" height="${Q}"/>`);
          }
          __privateGet(this, _e2) && (a.push("</g></svg>')"), o.backgroundImage = a.join("")), this.container.append(k), this.container.style.clipPath = `url(#${I})`;
        }
        _createPopup() {
          const { container: m, data: h } = this;
          m.setAttribute("aria-haspopup", "dialog");
          const e = new N({
            data: {
              color: h.color,
              titleObj: h.titleObj,
              modificationDate: h.modificationDate,
              contentsObj: h.contentsObj,
              richText: h.richText,
              parentRect: h.rect,
              borderStyle: 0,
              id: `popup_${h.id}`,
              rotation: h.rotation
            },
            parent: this.parent,
            elements: [
              this
            ]
          });
          this.parent.div.append(e.render());
        }
        render() {
          (0, w.unreachable)("Abstract method `AnnotationElement.render` called");
        }
        _getElementsByName(m, h = null) {
          const e = [];
          if (this._fieldObjects) {
            const n = this._fieldObjects[m];
            if (n) for (const { page: f, id: o, exportValues: a } of n) {
              if (f === -1 || o === h) continue;
              const d = typeof a == "string" ? a : null, A = document.querySelector(`[data-element-id="${o}"]`);
              if (A && !c.has(A)) {
                (0, w.warn)(`_getElementsByName - element not allowed: ${o}`);
                continue;
              }
              e.push({
                id: o,
                exportValue: d,
                domElement: A
              });
            }
            return e;
          }
          for (const n of document.getElementsByName(m)) {
            const { exportValue: f } = n, o = n.getAttribute("data-element-id");
            o !== h && c.has(n) && e.push({
              id: o,
              exportValue: f,
              domElement: n
            });
          }
          return e;
        }
        show() {
          var _a2;
          this.container && (this.container.hidden = false), (_a2 = this.popup) == null ? void 0 : _a2.maybeShow();
        }
        hide() {
          var _a2;
          this.container && (this.container.hidden = true), (_a2 = this.popup) == null ? void 0 : _a2.forceHide();
        }
        getElementsToTriggerPopup() {
          return this.container;
        }
        addHighlightArea() {
          const m = this.getElementsToTriggerPopup();
          if (Array.isArray(m)) for (const h of m) h.classList.add("highlightArea");
          else m.classList.add("highlightArea");
        }
        get _isEditable() {
          return false;
        }
        _editOnDoubleClick() {
          if (!this._isEditable) return;
          const { annotationEditorType: m, data: { id: h } } = this;
          this.container.addEventListener("dblclick", () => {
            var _a2;
            (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("switchannotationeditormode", {
              source: this,
              mode: m,
              editId: h
            });
          });
        }
      };
      _t = new WeakMap();
      _e2 = new WeakMap();
      _s_instances = new WeakSet();
      s_fn = function(m) {
        const { container: { style: h }, data: { rect: e, rotation: n }, parent: { viewport: { rawDims: { pageWidth: f, pageHeight: o, pageX: a, pageY: d } } } } = this;
        e == null ? void 0 : e.splice(0, 4, ...m);
        const { width: A, height: x } = l(m);
        h.left = `${100 * (m[0] - a) / f}%`, h.top = `${100 * (o - m[3] + d) / o}%`, n === 0 ? (h.width = `${100 * A / f}%`, h.height = `${100 * x / o}%`) : this.setRotation(n);
      };
      let s = _s;
      class g extends s {
        constructor(m, h = null) {
          super(m, {
            isRenderable: true,
            ignoreBorder: !!(h == null ? void 0 : h.ignoreBorder),
            createQuadrilaterals: true
          });
          __privateAdd(this, _g_instances);
          this.isTooltipOnly = m.data.isTooltipOnly;
        }
        render() {
          const { data: m, linkService: h } = this, e = document.createElement("a");
          e.setAttribute("data-element-id", m.id);
          let n = false;
          return m.url ? (h.addLinkAttributes(e, m.url, m.newWindow), n = true) : m.action ? (this._bindNamedAction(e, m.action), n = true) : m.attachment ? (__privateMethod(this, _g_instances, e_fn).call(this, e, m.attachment, m.attachmentDest), n = true) : m.setOCGState ? (__privateMethod(this, _g_instances, s_fn2).call(this, e, m.setOCGState), n = true) : m.dest ? (this._bindLink(e, m.dest), n = true) : (m.actions && (m.actions.Action || m.actions["Mouse Up"] || m.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(e, m), n = true), m.resetForm ? (this._bindResetFormAction(e, m.resetForm), n = true) : this.isTooltipOnly && !n && (this._bindLink(e, ""), n = true)), this.container.classList.add("linkAnnotation"), n && this.container.append(e), this.container;
        }
        _bindLink(m, h) {
          m.href = this.linkService.getDestinationHash(h), m.onclick = () => (h && this.linkService.goToDestination(h), false), (h || h === "") && __privateMethod(this, _g_instances, t_fn).call(this);
        }
        _bindNamedAction(m, h) {
          m.href = this.linkService.getAnchorUrl(""), m.onclick = () => (this.linkService.executeNamedAction(h), false), __privateMethod(this, _g_instances, t_fn).call(this);
        }
        _bindJSAction(m, h) {
          m.href = this.linkService.getAnchorUrl("");
          const e = /* @__PURE__ */ new Map([
            [
              "Action",
              "onclick"
            ],
            [
              "Mouse Up",
              "onmouseup"
            ],
            [
              "Mouse Down",
              "onmousedown"
            ]
          ]);
          for (const n of Object.keys(h.actions)) {
            const f = e.get(n);
            f && (m[f] = () => {
              var _a2;
              return (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: h.id,
                  name: n
                }
              }), false;
            });
          }
          m.onclick || (m.onclick = () => false), __privateMethod(this, _g_instances, t_fn).call(this);
        }
        _bindResetFormAction(m, h) {
          const e = m.onclick;
          if (e || (m.href = this.linkService.getAnchorUrl("")), __privateMethod(this, _g_instances, t_fn).call(this), !this._fieldObjects) {
            (0, w.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), e || (m.onclick = () => false);
            return;
          }
          m.onclick = () => {
            var _a2;
            e == null ? void 0 : e();
            const { fields: n, refs: f, include: o } = h, a = [];
            if (n.length !== 0 || f.length !== 0) {
              const x = new Set(f);
              for (const k of n) {
                const R = this._fieldObjects[k] || [];
                for (const { id: D } of R) x.add(D);
              }
              for (const k of Object.values(this._fieldObjects)) for (const R of k) x.has(R.id) === o && a.push(R);
            } else for (const x of Object.values(this._fieldObjects)) a.push(...x);
            const d = this.annotationStorage, A = [];
            for (const x of a) {
              const { id: k } = x;
              switch (A.push(k), x.type) {
                case "text": {
                  const D = x.defaultValue || "";
                  d.setValue(k, {
                    value: D
                  });
                  break;
                }
                case "checkbox":
                case "radiobutton": {
                  const D = x.defaultValue === x.exportValues;
                  d.setValue(k, {
                    value: D
                  });
                  break;
                }
                case "combobox":
                case "listbox": {
                  const D = x.defaultValue || "";
                  d.setValue(k, {
                    value: D
                  });
                  break;
                }
                default:
                  continue;
              }
              const R = document.querySelector(`[data-element-id="${k}"]`);
              if (R) {
                if (!c.has(R)) {
                  (0, w.warn)(`_bindResetFormAction - element not allowed: ${k}`);
                  continue;
                }
              } else continue;
              R.dispatchEvent(new Event("resetform"));
            }
            return this.enableScripting && ((_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: "app",
                ids: A,
                name: "ResetForm"
              }
            })), false;
          };
        }
      }
      _g_instances = new WeakSet();
      t_fn = function() {
        this.container.setAttribute("data-internal-link", "");
      };
      e_fn = function(m, h, e = null) {
        m.href = this.linkService.getAnchorUrl(""), m.onclick = () => {
          var _a2;
          return (_a2 = this.downloadManager) == null ? void 0 : _a2.openOrDownloadData(h.content, h.filename, e), false;
        }, __privateMethod(this, _g_instances, t_fn).call(this);
      };
      s_fn2 = function(m, h) {
        m.href = this.linkService.getAnchorUrl(""), m.onclick = () => (this.linkService.executeSetOCGState(h), false), __privateMethod(this, _g_instances, t_fn).call(this);
      };
      class t extends s {
        constructor(m) {
          super(m, {
            isRenderable: true
          });
        }
        render() {
          this.container.classList.add("textAnnotation");
          const m = document.createElement("img");
          return m.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", m.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), m.setAttribute("data-l10n-args", JSON.stringify({
            type: this.data.name
          })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(m), this.container;
        }
      }
      class i extends s {
        render() {
          return this.container;
        }
        showElementAndHideCanvas(m) {
          var _a2;
          this.data.hasOwnCanvas && (((_a2 = m.previousSibling) == null ? void 0 : _a2.nodeName) === "CANVAS" && (m.previousSibling.hidden = true), m.hidden = false);
        }
        _getKeyModifier(m) {
          return w.FeatureTest.platform.isMac ? m.metaKey : m.ctrlKey;
        }
        _setEventListener(m, h, e, n, f) {
          e.includes("mouse") ? m.addEventListener(e, (o) => {
            var _a2;
            (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: this.data.id,
                name: n,
                value: f(o),
                shift: o.shiftKey,
                modifier: this._getKeyModifier(o)
              }
            });
          }) : m.addEventListener(e, (o) => {
            var _a2;
            if (e === "blur") {
              if (!h.focused || !o.relatedTarget) return;
              h.focused = false;
            } else if (e === "focus") {
              if (h.focused) return;
              h.focused = true;
            }
            f && ((_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: this.data.id,
                name: n,
                value: f(o)
              }
            }));
          });
        }
        _setEventListeners(m, h, e, n) {
          var _a2, _b, _c2;
          for (const [f, o] of e) (o === "Action" || ((_a2 = this.data.actions) == null ? void 0 : _a2[o])) && ((o === "Focus" || o === "Blur") && (h || (h = {
            focused: false
          })), this._setEventListener(m, h, f, o, n), o === "Focus" && !((_b = this.data.actions) == null ? void 0 : _b.Blur) ? this._setEventListener(m, h, "blur", "Blur", null) : o === "Blur" && !((_c2 = this.data.actions) == null ? void 0 : _c2.Focus) && this._setEventListener(m, h, "focus", "Focus", null));
        }
        _setBackgroundColor(m) {
          const h = this.data.backgroundColor || null;
          m.style.backgroundColor = h === null ? "transparent" : w.Util.makeHexColor(h[0], h[1], h[2]);
        }
        _setTextStyle(m) {
          const h = [
            "left",
            "center",
            "right"
          ], { fontColor: e } = this.data.defaultAppearanceData, n = this.data.defaultAppearanceData.fontSize || r, f = m.style;
          let o;
          const a = 2, d = (A) => Math.round(10 * A) / 10;
          if (this.data.multiLine) {
            const A = Math.abs(this.data.rect[3] - this.data.rect[1] - a), x = Math.round(A / (w.LINE_FACTOR * n)) || 1, k = A / x;
            o = Math.min(n, d(k / w.LINE_FACTOR));
          } else {
            const A = Math.abs(this.data.rect[3] - this.data.rect[1] - a);
            o = Math.min(n, d(A / w.LINE_FACTOR));
          }
          f.fontSize = `calc(${o}px * var(--scale-factor))`, f.color = w.Util.makeHexColor(e[0], e[1], e[2]), this.data.textAlignment !== null && (f.textAlign = h[this.data.textAlignment]);
        }
        _setRequired(m, h) {
          h ? m.setAttribute("required", true) : m.removeAttribute("required"), m.setAttribute("aria-required", h);
        }
      }
      class u extends i {
        constructor(m) {
          const h = m.renderForms || m.data.hasOwnCanvas || !m.data.hasAppearance && !!m.data.fieldValue;
          super(m, {
            isRenderable: h
          });
        }
        setPropertyOnSiblings(m, h, e, n) {
          const f = this.annotationStorage;
          for (const o of this._getElementsByName(m.name, m.id)) o.domElement && (o.domElement[h] = e), f.setValue(o.id, {
            [n]: e
          });
        }
        render() {
          var _a2, _b;
          const m = this.annotationStorage, h = this.data.id;
          this.container.classList.add("textWidgetAnnotation");
          let e = null;
          if (this.renderForms) {
            const n = m.getValue(h, {
              value: this.data.fieldValue
            });
            let f = n.value || "";
            const o = m.getValue(h, {
              charLimit: this.data.maxLen
            }).charLimit;
            o && f.length > o && (f = f.slice(0, o));
            let a = n.formattedValue || ((_a2 = this.data.textContent) == null ? void 0 : _a2.join(`
`)) || null;
            a && this.data.comb && (a = a.replaceAll(/\s+/g, ""));
            const d = {
              userValue: f,
              formattedValue: a,
              lastCommittedValue: null,
              commitKey: 1,
              focused: false
            };
            this.data.multiLine ? (e = document.createElement("textarea"), e.textContent = a ?? f, this.data.doNotScroll && (e.style.overflowY = "hidden")) : (e = document.createElement("input"), e.type = "text", e.setAttribute("value", a ?? f), this.data.doNotScroll && (e.style.overflowX = "hidden")), this.data.hasOwnCanvas && (e.hidden = true), c.add(e), e.setAttribute("data-element-id", h), e.disabled = this.data.readOnly, e.name = this.data.fieldName, e.tabIndex = v, this._setRequired(e, this.data.required), o && (e.maxLength = o), e.addEventListener("input", (x) => {
              m.setValue(h, {
                value: x.target.value
              }), this.setPropertyOnSiblings(e, "value", x.target.value, "value"), d.formattedValue = null;
            }), e.addEventListener("resetform", (x) => {
              const k = this.data.defaultFieldValue ?? "";
              e.value = d.userValue = k, d.formattedValue = null;
            });
            let A = (x) => {
              const { formattedValue: k } = d;
              k != null && (x.target.value = k), x.target.scrollLeft = 0;
            };
            if (this.enableScripting && this.hasJSActions) {
              e.addEventListener("focus", (k) => {
                var _a3;
                if (d.focused) return;
                const { target: R } = k;
                d.userValue && (R.value = d.userValue), d.lastCommittedValue = R.value, d.commitKey = 1, ((_a3 = this.data.actions) == null ? void 0 : _a3.Focus) || (d.focused = true);
              }), e.addEventListener("updatefromsandbox", (k) => {
                this.showElementAndHideCanvas(k.target);
                const R = {
                  value(D) {
                    d.userValue = D.detail.value ?? "", m.setValue(h, {
                      value: d.userValue.toString()
                    }), D.target.value = d.userValue;
                  },
                  formattedValue(D) {
                    const { formattedValue: I } = D.detail;
                    d.formattedValue = I, I != null && D.target !== document.activeElement && (D.target.value = I), m.setValue(h, {
                      formattedValue: I
                    });
                  },
                  selRange(D) {
                    D.target.setSelectionRange(...D.detail.selRange);
                  },
                  charLimit: (D) => {
                    var _a3;
                    const { charLimit: I } = D.detail, { target: F } = D;
                    if (I === 0) {
                      F.removeAttribute("maxLength");
                      return;
                    }
                    F.setAttribute("maxLength", I);
                    let T = d.userValue;
                    !T || T.length <= I || (T = T.slice(0, I), F.value = d.userValue = T, m.setValue(h, {
                      value: T
                    }), (_a3 = this.linkService.eventBus) == null ? void 0 : _a3.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: h,
                        name: "Keystroke",
                        value: T,
                        willCommit: true,
                        commitKey: 1,
                        selStart: F.selectionStart,
                        selEnd: F.selectionEnd
                      }
                    }));
                  }
                };
                this._dispatchEventFromSandbox(R, k);
              }), e.addEventListener("keydown", (k) => {
                var _a3;
                d.commitKey = 1;
                let R = -1;
                if (k.key === "Escape" ? R = 0 : k.key === "Enter" && !this.data.multiLine ? R = 2 : k.key === "Tab" && (d.commitKey = 3), R === -1) return;
                const { value: D } = k.target;
                d.lastCommittedValue !== D && (d.lastCommittedValue = D, d.userValue = D, (_a3 = this.linkService.eventBus) == null ? void 0 : _a3.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: h,
                    name: "Keystroke",
                    value: D,
                    willCommit: true,
                    commitKey: R,
                    selStart: k.target.selectionStart,
                    selEnd: k.target.selectionEnd
                  }
                }));
              });
              const x = A;
              A = null, e.addEventListener("blur", (k) => {
                var _a3, _b2;
                if (!d.focused || !k.relatedTarget) return;
                ((_a3 = this.data.actions) == null ? void 0 : _a3.Blur) || (d.focused = false);
                const { value: R } = k.target;
                d.userValue = R, d.lastCommittedValue !== R && ((_b2 = this.linkService.eventBus) == null ? void 0 : _b2.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: h,
                    name: "Keystroke",
                    value: R,
                    willCommit: true,
                    commitKey: d.commitKey,
                    selStart: k.target.selectionStart,
                    selEnd: k.target.selectionEnd
                  }
                })), x(k);
              }), ((_b = this.data.actions) == null ? void 0 : _b.Keystroke) && e.addEventListener("beforeinput", (k) => {
                var _a3;
                d.lastCommittedValue = null;
                const { data: R, target: D } = k, { value: I, selectionStart: F, selectionEnd: T } = D;
                let U = F, K = T;
                switch (k.inputType) {
                  case "deleteWordBackward": {
                    const X = I.substring(0, F).match(/\w*[^\w]*$/);
                    X && (U -= X[0].length);
                    break;
                  }
                  case "deleteWordForward": {
                    const X = I.substring(F).match(/^[^\w]*\w*/);
                    X && (K += X[0].length);
                    break;
                  }
                  case "deleteContentBackward":
                    F === T && (U -= 1);
                    break;
                  case "deleteContentForward":
                    F === T && (K += 1);
                    break;
                }
                k.preventDefault(), (_a3 = this.linkService.eventBus) == null ? void 0 : _a3.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: h,
                    name: "Keystroke",
                    value: I,
                    change: R || "",
                    willCommit: false,
                    selStart: U,
                    selEnd: K
                  }
                });
              }), this._setEventListeners(e, d, [
                [
                  "focus",
                  "Focus"
                ],
                [
                  "blur",
                  "Blur"
                ],
                [
                  "mousedown",
                  "Mouse Down"
                ],
                [
                  "mouseenter",
                  "Mouse Enter"
                ],
                [
                  "mouseleave",
                  "Mouse Exit"
                ],
                [
                  "mouseup",
                  "Mouse Up"
                ]
              ], (k) => k.target.value);
            }
            if (A && e.addEventListener("blur", A), this.data.comb) {
              const k = (this.data.rect[2] - this.data.rect[0]) / o;
              e.classList.add("comb"), e.style.letterSpacing = `calc(${k}px * var(--scale-factor) - 1ch)`;
            }
          } else e = document.createElement("div"), e.textContent = this.data.fieldValue, e.style.verticalAlign = "middle", e.style.display = "table-cell", this.data.hasOwnCanvas && (e.hidden = true);
          return this._setTextStyle(e), this._setBackgroundColor(e), this._setDefaultPropertiesFromJS(e), this.container.append(e), this.container;
        }
      }
      class p extends i {
        constructor(m) {
          super(m, {
            isRenderable: !!m.data.hasOwnCanvas
          });
        }
      }
      class y extends i {
        constructor(m) {
          super(m, {
            isRenderable: m.renderForms
          });
        }
        render() {
          const m = this.annotationStorage, h = this.data, e = h.id;
          let n = m.getValue(e, {
            value: h.exportValue === h.fieldValue
          }).value;
          typeof n == "string" && (n = n !== "Off", m.setValue(e, {
            value: n
          })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
          const f = document.createElement("input");
          return c.add(f), f.setAttribute("data-element-id", e), f.disabled = h.readOnly, this._setRequired(f, this.data.required), f.type = "checkbox", f.name = h.fieldName, n && f.setAttribute("checked", true), f.setAttribute("exportValue", h.exportValue), f.tabIndex = v, f.addEventListener("change", (o) => {
            const { name: a, checked: d } = o.target;
            for (const A of this._getElementsByName(a, e)) {
              const x = d && A.exportValue === h.exportValue;
              A.domElement && (A.domElement.checked = x), m.setValue(A.id, {
                value: x
              });
            }
            m.setValue(e, {
              value: d
            });
          }), f.addEventListener("resetform", (o) => {
            const a = h.defaultFieldValue || "Off";
            o.target.checked = a === h.exportValue;
          }), this.enableScripting && this.hasJSActions && (f.addEventListener("updatefromsandbox", (o) => {
            const a = {
              value(d) {
                d.target.checked = d.detail.value !== "Off", m.setValue(e, {
                  value: d.target.checked
                });
              }
            };
            this._dispatchEventFromSandbox(a, o);
          }), this._setEventListeners(f, null, [
            [
              "change",
              "Validate"
            ],
            [
              "change",
              "Action"
            ],
            [
              "focus",
              "Focus"
            ],
            [
              "blur",
              "Blur"
            ],
            [
              "mousedown",
              "Mouse Down"
            ],
            [
              "mouseenter",
              "Mouse Enter"
            ],
            [
              "mouseleave",
              "Mouse Exit"
            ],
            [
              "mouseup",
              "Mouse Up"
            ]
          ], (o) => o.target.checked)), this._setBackgroundColor(f), this._setDefaultPropertiesFromJS(f), this.container.append(f), this.container;
        }
      }
      class S extends i {
        constructor(m) {
          super(m, {
            isRenderable: m.renderForms
          });
        }
        render() {
          this.container.classList.add("buttonWidgetAnnotation", "radioButton");
          const m = this.annotationStorage, h = this.data, e = h.id;
          let n = m.getValue(e, {
            value: h.fieldValue === h.buttonValue
          }).value;
          if (typeof n == "string" && (n = n !== h.buttonValue, m.setValue(e, {
            value: n
          })), n) for (const o of this._getElementsByName(h.fieldName, e)) m.setValue(o.id, {
            value: false
          });
          const f = document.createElement("input");
          if (c.add(f), f.setAttribute("data-element-id", e), f.disabled = h.readOnly, this._setRequired(f, this.data.required), f.type = "radio", f.name = h.fieldName, n && f.setAttribute("checked", true), f.tabIndex = v, f.addEventListener("change", (o) => {
            const { name: a, checked: d } = o.target;
            for (const A of this._getElementsByName(a, e)) m.setValue(A.id, {
              value: false
            });
            m.setValue(e, {
              value: d
            });
          }), f.addEventListener("resetform", (o) => {
            const a = h.defaultFieldValue;
            o.target.checked = a != null && a === h.buttonValue;
          }), this.enableScripting && this.hasJSActions) {
            const o = h.buttonValue;
            f.addEventListener("updatefromsandbox", (a) => {
              const d = {
                value: (A) => {
                  const x = o === A.detail.value;
                  for (const k of this._getElementsByName(A.target.name)) {
                    const R = x && k.id === e;
                    k.domElement && (k.domElement.checked = R), m.setValue(k.id, {
                      value: R
                    });
                  }
                }
              };
              this._dispatchEventFromSandbox(d, a);
            }), this._setEventListeners(f, null, [
              [
                "change",
                "Validate"
              ],
              [
                "change",
                "Action"
              ],
              [
                "focus",
                "Focus"
              ],
              [
                "blur",
                "Blur"
              ],
              [
                "mousedown",
                "Mouse Down"
              ],
              [
                "mouseenter",
                "Mouse Enter"
              ],
              [
                "mouseleave",
                "Mouse Exit"
              ],
              [
                "mouseup",
                "Mouse Up"
              ]
            ], (a) => a.target.checked);
          }
          return this._setBackgroundColor(f), this._setDefaultPropertiesFromJS(f), this.container.append(f), this.container;
        }
      }
      class L extends g {
        constructor(m) {
          super(m, {
            ignoreBorder: m.data.hasAppearance
          });
        }
        render() {
          const m = super.render();
          m.classList.add("buttonWidgetAnnotation", "pushButton");
          const h = m.lastChild;
          return this.enableScripting && this.hasJSActions && h && (this._setDefaultPropertiesFromJS(h), h.addEventListener("updatefromsandbox", (e) => {
            this._dispatchEventFromSandbox({}, e);
          })), m;
        }
      }
      class M extends i {
        constructor(m) {
          super(m, {
            isRenderable: m.renderForms
          });
        }
        render() {
          this.container.classList.add("choiceWidgetAnnotation");
          const m = this.annotationStorage, h = this.data.id, e = m.getValue(h, {
            value: this.data.fieldValue
          }), n = document.createElement("select");
          c.add(n), n.setAttribute("data-element-id", h), n.disabled = this.data.readOnly, this._setRequired(n, this.data.required), n.name = this.data.fieldName, n.tabIndex = v;
          let f = this.data.combo && this.data.options.length > 0;
          this.data.combo || (n.size = this.data.options.length, this.data.multiSelect && (n.multiple = true)), n.addEventListener("resetform", (x) => {
            const k = this.data.defaultFieldValue;
            for (const R of n.options) R.selected = R.value === k;
          });
          for (const x of this.data.options) {
            const k = document.createElement("option");
            k.textContent = x.displayValue, k.value = x.exportValue, e.value.includes(x.exportValue) && (k.setAttribute("selected", true), f = false), n.append(k);
          }
          let o = null;
          if (f) {
            const x = document.createElement("option");
            x.value = " ", x.setAttribute("hidden", true), x.setAttribute("selected", true), n.prepend(x), o = () => {
              x.remove(), n.removeEventListener("input", o), o = null;
            }, n.addEventListener("input", o);
          }
          const a = (x) => {
            const k = x ? "value" : "textContent", { options: R, multiple: D } = n;
            return D ? Array.prototype.filter.call(R, (I) => I.selected).map((I) => I[k]) : R.selectedIndex === -1 ? null : R[R.selectedIndex][k];
          };
          let d = a(false);
          const A = (x) => {
            const k = x.target.options;
            return Array.prototype.map.call(k, (R) => ({
              displayValue: R.textContent,
              exportValue: R.value
            }));
          };
          return this.enableScripting && this.hasJSActions ? (n.addEventListener("updatefromsandbox", (x) => {
            const k = {
              value(R) {
                o == null ? void 0 : o();
                const D = R.detail.value, I = new Set(Array.isArray(D) ? D : [
                  D
                ]);
                for (const F of n.options) F.selected = I.has(F.value);
                m.setValue(h, {
                  value: a(true)
                }), d = a(false);
              },
              multipleSelection(R) {
                n.multiple = true;
              },
              remove(R) {
                const D = n.options, I = R.detail.remove;
                D[I].selected = false, n.remove(I), D.length > 0 && Array.prototype.findIndex.call(D, (T) => T.selected) === -1 && (D[0].selected = true), m.setValue(h, {
                  value: a(true),
                  items: A(R)
                }), d = a(false);
              },
              clear(R) {
                for (; n.length !== 0; ) n.remove(0);
                m.setValue(h, {
                  value: null,
                  items: []
                }), d = a(false);
              },
              insert(R) {
                const { index: D, displayValue: I, exportValue: F } = R.detail.insert, T = n.children[D], U = document.createElement("option");
                U.textContent = I, U.value = F, T ? T.before(U) : n.append(U), m.setValue(h, {
                  value: a(true),
                  items: A(R)
                }), d = a(false);
              },
              items(R) {
                const { items: D } = R.detail;
                for (; n.length !== 0; ) n.remove(0);
                for (const I of D) {
                  const { displayValue: F, exportValue: T } = I, U = document.createElement("option");
                  U.textContent = F, U.value = T, n.append(U);
                }
                n.options.length > 0 && (n.options[0].selected = true), m.setValue(h, {
                  value: a(true),
                  items: A(R)
                }), d = a(false);
              },
              indices(R) {
                const D = new Set(R.detail.indices);
                for (const I of R.target.options) I.selected = D.has(I.index);
                m.setValue(h, {
                  value: a(true)
                }), d = a(false);
              },
              editable(R) {
                R.target.disabled = !R.detail.editable;
              }
            };
            this._dispatchEventFromSandbox(k, x);
          }), n.addEventListener("input", (x) => {
            var _a2;
            const k = a(true), R = a(false);
            m.setValue(h, {
              value: k
            }), x.preventDefault(), (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: h,
                name: "Keystroke",
                value: d,
                change: R,
                changeEx: k,
                willCommit: false,
                commitKey: 1,
                keyDown: false
              }
            });
          }), this._setEventListeners(n, null, [
            [
              "focus",
              "Focus"
            ],
            [
              "blur",
              "Blur"
            ],
            [
              "mousedown",
              "Mouse Down"
            ],
            [
              "mouseenter",
              "Mouse Enter"
            ],
            [
              "mouseleave",
              "Mouse Exit"
            ],
            [
              "mouseup",
              "Mouse Up"
            ],
            [
              "input",
              "Action"
            ],
            [
              "input",
              "Validate"
            ]
          ], (x) => x.target.value)) : n.addEventListener("input", function(x) {
            m.setValue(h, {
              value: a(true)
            });
          }), this.data.combo && this._setTextStyle(n), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
        }
      }
      class N extends s {
        constructor(m) {
          const { data: h, elements: e } = m;
          super(m, {
            isRenderable: s._hasPopupData(h)
          }), this.elements = e;
        }
        render() {
          this.container.classList.add("popupAnnotation");
          const m = new H({
            container: this.container,
            color: this.data.color,
            titleObj: this.data.titleObj,
            modificationDate: this.data.modificationDate,
            contentsObj: this.data.contentsObj,
            richText: this.data.richText,
            rect: this.data.rect,
            parentRect: this.data.parentRect || null,
            parent: this.parent,
            elements: this.elements,
            open: this.data.open
          }), h = [];
          for (const e of this.elements) e.popup = m, h.push(e.data.id), e.addHighlightArea();
          return this.container.setAttribute("aria-controls", h.map((e) => `${w.AnnotationPrefix}${e}`).join(",")), this.container;
        }
      }
      class H {
        constructor({ container: m, color: h, elements: e, titleObj: n, modificationDate: f, contentsObj: o, richText: a, parent: d, rect: A, parentRect: x, open: k }) {
          __privateAdd(this, _H_instances);
          __privateAdd(this, _t2, __privateMethod(this, _H_instances, m_fn).bind(this));
          __privateAdd(this, _e3, __privateMethod(this, _H_instances, C_fn).bind(this));
          __privateAdd(this, _s2, __privateMethod(this, _H_instances, w_fn).bind(this));
          __privateAdd(this, _n, __privateMethod(this, _H_instances, v_fn).bind(this));
          __privateAdd(this, _r, null);
          __privateAdd(this, _i, null);
          __privateAdd(this, _a, null);
          __privateAdd(this, _l, null);
          __privateAdd(this, _h, null);
          __privateAdd(this, _d, null);
          __privateAdd(this, _u, null);
          __privateAdd(this, _c, false);
          __privateAdd(this, _o, null);
          __privateAdd(this, _p, null);
          __privateAdd(this, _g, null);
          __privateAdd(this, _f, null);
          __privateAdd(this, _A, false);
          var _a2;
          __privateSet(this, _i, m), __privateSet(this, _f, n), __privateSet(this, _a, o), __privateSet(this, _g, a), __privateSet(this, _d, d), __privateSet(this, _r, h), __privateSet(this, _p, A), __privateSet(this, _u, x), __privateSet(this, _h, e), __privateSet(this, _l, z.PDFDateString.toDateObject(f)), this.trigger = e.flatMap((R) => R.getElementsToTriggerPopup());
          for (const R of this.trigger) R.addEventListener("click", __privateGet(this, _n)), R.addEventListener("mouseenter", __privateGet(this, _s2)), R.addEventListener("mouseleave", __privateGet(this, _e3)), R.classList.add("popupTriggerArea");
          for (const R of e) (_a2 = R.container) == null ? void 0 : _a2.addEventListener("keydown", __privateGet(this, _t2));
          __privateGet(this, _i).hidden = true, k && __privateMethod(this, _H_instances, v_fn).call(this);
        }
        render() {
          if (__privateGet(this, _o)) return;
          const { page: { view: m }, viewport: { rawDims: { pageWidth: h, pageHeight: e, pageX: n, pageY: f } } } = __privateGet(this, _d), o = __privateSet(this, _o, document.createElement("div"));
          if (o.className = "popup", __privateGet(this, _r)) {
            const X = o.style.outlineColor = w.Util.makeHexColor(...__privateGet(this, _r));
            CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? o.style.backgroundColor = `color-mix(in srgb, ${X} 30%, white)` : o.style.backgroundColor = w.Util.makeHexColor(...__privateGet(this, _r).map((rt) => Math.floor(0.7 * (255 - rt) + rt)));
          }
          const a = document.createElement("span");
          a.className = "header";
          const d = document.createElement("h1");
          if (a.append(d), { dir: d.dir, str: d.textContent } = __privateGet(this, _f), o.append(a), __privateGet(this, _l)) {
            const X = document.createElement("span");
            X.classList.add("popupDate"), X.setAttribute("data-l10n-id", "pdfjs-annotation-date-string"), X.setAttribute("data-l10n-args", JSON.stringify({
              date: __privateGet(this, _l).toLocaleDateString(),
              time: __privateGet(this, _l).toLocaleTimeString()
            })), a.append(X);
          }
          const A = __privateGet(this, _a), x = __privateGet(this, _g);
          if ((x == null ? void 0 : x.str) && (!(A == null ? void 0 : A.str) || A.str === x.str)) E.XfaLayer.render({
            xfaHtml: x.html,
            intent: "richText",
            div: o
          }), o.lastChild.classList.add("richText", "popupContent");
          else {
            const X = this._formatContents(A);
            o.append(X);
          }
          let k = !!__privateGet(this, _u), R = k ? __privateGet(this, _u) : __privateGet(this, _p);
          for (const X of __privateGet(this, _h)) if (!R || w.Util.intersect(X.data.rect, R) !== null) {
            R = X.data.rect, k = true;
            break;
          }
          const D = w.Util.normalizeRect([
            R[0],
            m[3] - R[1] + m[1],
            R[2],
            m[3] - R[3] + m[1]
          ]), F = k ? R[2] - R[0] + 5 : 0, T = D[0] + F, U = D[1], { style: K } = __privateGet(this, _i);
          K.left = `${100 * (T - n) / h}%`, K.top = `${100 * (U - f) / e}%`, __privateGet(this, _i).append(o);
        }
        _formatContents({ str: m, dir: h }) {
          const e = document.createElement("p");
          e.classList.add("popupContent"), e.dir = h;
          const n = m.split(/(?:\r\n?|\n)/);
          for (let f = 0, o = n.length; f < o; ++f) {
            const a = n[f];
            e.append(document.createTextNode(a)), f < o - 1 && e.append(document.createElement("br"));
          }
          return e;
        }
        forceHide() {
          __privateSet(this, _A, this.isVisible), __privateGet(this, _A) && (__privateGet(this, _i).hidden = true);
        }
        maybeShow() {
          __privateGet(this, _A) && (__privateSet(this, _A, false), __privateGet(this, _i).hidden = false);
        }
        get isVisible() {
          return __privateGet(this, _i).hidden === false;
        }
      }
      _t2 = new WeakMap();
      _e3 = new WeakMap();
      _s2 = new WeakMap();
      _n = new WeakMap();
      _r = new WeakMap();
      _i = new WeakMap();
      _a = new WeakMap();
      _l = new WeakMap();
      _h = new WeakMap();
      _d = new WeakMap();
      _u = new WeakMap();
      _c = new WeakMap();
      _o = new WeakMap();
      _p = new WeakMap();
      _g = new WeakMap();
      _f = new WeakMap();
      _A = new WeakMap();
      _H_instances = new WeakSet();
      m_fn = function(m) {
        m.altKey || m.shiftKey || m.ctrlKey || m.metaKey || (m.key === "Enter" || m.key === "Escape" && __privateGet(this, _c)) && __privateMethod(this, _H_instances, v_fn).call(this);
      };
      v_fn = function() {
        __privateSet(this, _c, !__privateGet(this, _c)), __privateGet(this, _c) ? (__privateMethod(this, _H_instances, w_fn).call(this), __privateGet(this, _i).addEventListener("click", __privateGet(this, _n)), __privateGet(this, _i).addEventListener("keydown", __privateGet(this, _t2))) : (__privateMethod(this, _H_instances, C_fn).call(this), __privateGet(this, _i).removeEventListener("click", __privateGet(this, _n)), __privateGet(this, _i).removeEventListener("keydown", __privateGet(this, _t2)));
      };
      w_fn = function() {
        __privateGet(this, _o) || this.render(), this.isVisible ? __privateGet(this, _c) && __privateGet(this, _i).classList.add("focused") : (__privateGet(this, _i).hidden = false, __privateGet(this, _i).style.zIndex = parseInt(__privateGet(this, _i).style.zIndex) + 1e3);
      };
      C_fn = function() {
        __privateGet(this, _i).classList.remove("focused"), !(__privateGet(this, _c) || !this.isVisible) && (__privateGet(this, _i).hidden = true, __privateGet(this, _i).style.zIndex = parseInt(__privateGet(this, _i).style.zIndex) - 1e3);
      };
      class B extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true
          }), this.textContent = m.data.textContent, this.textPosition = m.data.textPosition, this.annotationEditorType = w.AnnotationEditorType.FREETEXT;
        }
        render() {
          if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
            const m = document.createElement("div");
            m.classList.add("annotationTextContent"), m.setAttribute("role", "comment");
            for (const h of this.textContent) {
              const e = document.createElement("span");
              e.textContent = h, m.append(e);
            }
            this.container.append(m);
          }
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
        }
        get _isEditable() {
          return this.data.hasOwnCanvas;
        }
      }
      class q extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true
          });
          __privateAdd(this, _t3, null);
        }
        render() {
          this.container.classList.add("lineAnnotation");
          const m = this.data, { width: h, height: e } = l(m.rect), n = this.svgFactory.create(h, e, true), f = __privateSet(this, _t3, this.svgFactory.createElement("svg:line"));
          return f.setAttribute("x1", m.rect[2] - m.lineCoordinates[0]), f.setAttribute("y1", m.rect[3] - m.lineCoordinates[1]), f.setAttribute("x2", m.rect[2] - m.lineCoordinates[2]), f.setAttribute("y2", m.rect[3] - m.lineCoordinates[3]), f.setAttribute("stroke-width", m.borderStyle.width || 1), f.setAttribute("stroke", "transparent"), f.setAttribute("fill", "transparent"), n.append(f), this.container.append(n), !m.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return __privateGet(this, _t3);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      _t3 = new WeakMap();
      class nt extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true
          });
          __privateAdd(this, _t4, null);
        }
        render() {
          this.container.classList.add("squareAnnotation");
          const m = this.data, { width: h, height: e } = l(m.rect), n = this.svgFactory.create(h, e, true), f = m.borderStyle.width, o = __privateSet(this, _t4, this.svgFactory.createElement("svg:rect"));
          return o.setAttribute("x", f / 2), o.setAttribute("y", f / 2), o.setAttribute("width", h - f), o.setAttribute("height", e - f), o.setAttribute("stroke-width", f || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !m.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return __privateGet(this, _t4);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      _t4 = new WeakMap();
      class j extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true
          });
          __privateAdd(this, _t5, null);
        }
        render() {
          this.container.classList.add("circleAnnotation");
          const m = this.data, { width: h, height: e } = l(m.rect), n = this.svgFactory.create(h, e, true), f = m.borderStyle.width, o = __privateSet(this, _t5, this.svgFactory.createElement("svg:ellipse"));
          return o.setAttribute("cx", h / 2), o.setAttribute("cy", e / 2), o.setAttribute("rx", h / 2 - f / 2), o.setAttribute("ry", e / 2 - f / 2), o.setAttribute("stroke-width", f || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !m.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return __privateGet(this, _t5);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      _t5 = new WeakMap();
      class O extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true
          });
          __privateAdd(this, _t6, null);
          this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
        }
        render() {
          this.container.classList.add(this.containerClassName);
          const m = this.data, { width: h, height: e } = l(m.rect), n = this.svgFactory.create(h, e, true);
          let f = [];
          for (const a of m.vertices) {
            const d = a.x - m.rect[0], A = m.rect[3] - a.y;
            f.push(d + "," + A);
          }
          f = f.join(" ");
          const o = __privateSet(this, _t6, this.svgFactory.createElement(this.svgElementName));
          return o.setAttribute("points", f), o.setAttribute("stroke-width", m.borderStyle.width || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !m.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return __privateGet(this, _t6);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      _t6 = new WeakMap();
      class V extends O {
        constructor(m) {
          super(m), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
        }
      }
      class Y extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
      }
      class tt extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true
          });
          __privateAdd(this, _t7, []);
          this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = w.AnnotationEditorType.INK;
        }
        render() {
          this.container.classList.add(this.containerClassName);
          const m = this.data, { width: h, height: e } = l(m.rect), n = this.svgFactory.create(h, e, true);
          for (const f of m.inkLists) {
            let o = [];
            for (const d of f) {
              const A = d.x - m.rect[0], x = m.rect[3] - d.y;
              o.push(`${A},${x}`);
            }
            o = o.join(" ");
            const a = this.svgFactory.createElement(this.svgElementName);
            __privateGet(this, _t7).push(a), a.setAttribute("points", o), a.setAttribute("stroke-width", m.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), !m.popupRef && this.hasPopupData && this._createPopup(), n.append(a);
          }
          return this.container.append(n), this.container;
        }
        getElementsToTriggerPopup() {
          return __privateGet(this, _t7);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      _t7 = new WeakMap();
      class Z extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
        }
      }
      class at extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
        }
      }
      class lt extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
        }
      }
      class pt extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
        }
      }
      class dt extends s {
        constructor(m) {
          super(m, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
      }
      class ot extends s {
        constructor(m) {
          var _a2;
          super(m, {
            isRenderable: true
          });
          __privateAdd(this, _ot_instances);
          __privateAdd(this, _t8, null);
          const { filename: h, content: e } = this.data.file;
          this.filename = (0, z.getFilenameFromUrl)(h, true), this.content = e, (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("fileattachmentannotation", {
            source: this,
            filename: h,
            content: e
          });
        }
        render() {
          this.container.classList.add("fileAttachmentAnnotation");
          const { container: m, data: h } = this;
          let e;
          h.hasAppearance || h.fillAlpha === 0 ? e = document.createElement("div") : (e = document.createElement("img"), e.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(h.name) ? "paperclip" : "pushpin"}.svg`, h.fillAlpha && h.fillAlpha < 1 && (e.style = `filter: opacity(${Math.round(h.fillAlpha * 100)}%);`)), e.addEventListener("dblclick", __privateMethod(this, _ot_instances, e_fn2).bind(this)), __privateSet(this, _t8, e);
          const { isMac: n } = w.FeatureTest.platform;
          return m.addEventListener("keydown", (f) => {
            f.key === "Enter" && (n ? f.metaKey : f.ctrlKey) && __privateMethod(this, _ot_instances, e_fn2).call(this);
          }), !h.popupRef && this.hasPopupData ? this._createPopup() : e.classList.add("popupTriggerArea"), m.append(e), m;
        }
        getElementsToTriggerPopup() {
          return __privateGet(this, _t8);
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      _t8 = new WeakMap();
      _ot_instances = new WeakSet();
      e_fn2 = function() {
        var _a2;
        (_a2 = this.downloadManager) == null ? void 0 : _a2.openOrDownloadData(this.content, this.filename);
      };
      class ut {
        constructor({ div: m, accessibilityManager: h, annotationCanvasMap: e, annotationEditorUIManager: n, page: f, viewport: o }) {
          __privateAdd(this, _ut_instances);
          __privateAdd(this, _t9, null);
          __privateAdd(this, _e4, null);
          __privateAdd(this, _s3, /* @__PURE__ */ new Map());
          this.div = m, __privateSet(this, _t9, h), __privateSet(this, _e4, e), this.page = f, this.viewport = o, this.zIndex = 0, this._annotationEditorUIManager = n;
        }
        async render(m) {
          var _a2;
          const { annotations: h } = m, e = this.div;
          (0, z.setLayerDimensions)(e, this.viewport);
          const n = /* @__PURE__ */ new Map(), f = {
            data: null,
            layer: e,
            linkService: m.linkService,
            downloadManager: m.downloadManager,
            imageResourcesPath: m.imageResourcesPath || "",
            renderForms: m.renderForms !== false,
            svgFactory: new z.DOMSVGFactory(),
            annotationStorage: m.annotationStorage || new _.AnnotationStorage(),
            enableScripting: m.enableScripting === true,
            hasJSActions: m.hasJSActions,
            fieldObjects: m.fieldObjects,
            parent: this,
            elements: null
          };
          for (const o of h) {
            if (o.noHTML) continue;
            const a = o.annotationType === w.AnnotationType.POPUP;
            if (a) {
              const x = n.get(o.id);
              if (!x) continue;
              f.elements = x;
            } else {
              const { width: x, height: k } = l(o.rect);
              if (x <= 0 || k <= 0) continue;
            }
            f.data = o;
            const d = b.create(f);
            if (!d.isRenderable) continue;
            if (!a && o.popupRef) {
              const x = n.get(o.popupRef);
              x ? x.push(d) : n.set(o.popupRef, [
                d
              ]);
            }
            const A = d.render();
            o.hidden && (A.style.visibility = "hidden"), __privateMethod(this, _ut_instances, n_fn).call(this, A, o.id), d.annotationEditorType > 0 && (__privateGet(this, _s3).set(d.data.id, d), (_a2 = this._annotationEditorUIManager) == null ? void 0 : _a2.renderAnnotationElement(d));
          }
          __privateMethod(this, _ut_instances, r_fn).call(this);
        }
        update({ viewport: m }) {
          const h = this.div;
          this.viewport = m, (0, z.setLayerDimensions)(h, {
            rotation: m.rotation
          }), __privateMethod(this, _ut_instances, r_fn).call(this), h.hidden = false;
        }
        getEditableAnnotations() {
          return Array.from(__privateGet(this, _s3).values());
        }
        getEditableAnnotation(m) {
          return __privateGet(this, _s3).get(m);
        }
      }
      _t9 = new WeakMap();
      _e4 = new WeakMap();
      _s3 = new WeakMap();
      _ut_instances = new WeakSet();
      n_fn = function(m, h) {
        var _a2;
        const e = m.firstChild || m;
        e.id = `${w.AnnotationPrefix}${h}`, this.div.append(m), (_a2 = __privateGet(this, _t9)) == null ? void 0 : _a2.moveElementInDOM(this.div, m, e, false);
      };
      r_fn = function() {
        if (!__privateGet(this, _e4)) return;
        const m = this.div;
        for (const [h, e] of __privateGet(this, _e4)) {
          const n = m.querySelector(`[data-annotation-id="${h}"]`);
          if (!n) continue;
          e.className = "annotationContent";
          const { firstChild: f } = n;
          f ? f.nodeName === "CANVAS" ? f.replaceWith(e) : f.classList.contains("annotationContent") ? f.after(e) : f.before(e) : n.append(e);
        }
        __privateGet(this, _e4).clear();
      };
    },
    792: (ct, st, $) => {
      var _t, _e2, _P_instances, s_fn, _t2;
      $.d(st, {
        AnnotationStorage: () => P,
        PrintAnnotationStorage: () => C,
        SerializableEmpty: () => G
      });
      var w = $(292), z = $(310), _ = $(651);
      const G = Object.freeze({
        map: null,
        hash: "",
        transfer: void 0
      });
      class P {
        constructor() {
          __privateAdd(this, _P_instances);
          __privateAdd(this, _t, false);
          __privateAdd(this, _e2, /* @__PURE__ */ new Map());
          this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
        }
        getValue(v, r) {
          const c = __privateGet(this, _e2).get(v);
          return c === void 0 ? r : Object.assign(r, c);
        }
        getRawValue(v) {
          return __privateGet(this, _e2).get(v);
        }
        remove(v) {
          if (__privateGet(this, _e2).delete(v), __privateGet(this, _e2).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
            for (const r of __privateGet(this, _e2).values()) if (r instanceof z.AnnotationEditor) return;
            this.onAnnotationEditor(null);
          }
        }
        setValue(v, r) {
          const c = __privateGet(this, _e2).get(v);
          let l = false;
          if (c !== void 0) for (const [b, s] of Object.entries(r)) c[b] !== s && (l = true, c[b] = s);
          else l = true, __privateGet(this, _e2).set(v, r);
          l && __privateMethod(this, _P_instances, s_fn).call(this), r instanceof z.AnnotationEditor && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(r.constructor._type);
        }
        has(v) {
          return __privateGet(this, _e2).has(v);
        }
        getAll() {
          return __privateGet(this, _e2).size > 0 ? (0, w.objectFromMap)(__privateGet(this, _e2)) : null;
        }
        setAll(v) {
          for (const [r, c] of Object.entries(v)) this.setValue(r, c);
        }
        get size() {
          return __privateGet(this, _e2).size;
        }
        resetModified() {
          __privateGet(this, _t) && (__privateSet(this, _t, false), typeof this.onResetModified == "function" && this.onResetModified());
        }
        get print() {
          return new C(this);
        }
        get serializable() {
          if (__privateGet(this, _e2).size === 0) return G;
          const v = /* @__PURE__ */ new Map(), r = new _.MurmurHash3_64(), c = [], l = /* @__PURE__ */ Object.create(null);
          let b = false;
          for (const [s, g] of __privateGet(this, _e2)) {
            const t = g instanceof z.AnnotationEditor ? g.serialize(false, l) : g;
            t && (v.set(s, t), r.update(`${s}:${JSON.stringify(t)}`), b || (b = !!t.bitmap));
          }
          if (b) for (const s of v.values()) s.bitmap && c.push(s.bitmap);
          return v.size > 0 ? {
            map: v,
            hash: r.hexdigest(),
            transfer: c
          } : G;
        }
        get editorStats() {
          let v = null;
          const r = /* @__PURE__ */ new Map();
          for (const c of __privateGet(this, _e2).values()) {
            if (!(c instanceof z.AnnotationEditor)) continue;
            const l = c.telemetryFinalData;
            if (!l) continue;
            const { type: b } = l;
            r.has(b) || r.set(b, Object.getPrototypeOf(c).constructor), v || (v = /* @__PURE__ */ Object.create(null));
            const s = v[b] || (v[b] = /* @__PURE__ */ new Map());
            for (const [g, t] of Object.entries(l)) {
              if (g === "type") continue;
              let i = s.get(g);
              i || (i = /* @__PURE__ */ new Map(), s.set(g, i));
              const u = i.get(t) ?? 0;
              i.set(t, u + 1);
            }
          }
          for (const [c, l] of r) v[c] = l.computeTelemetryFinalData(v[c]);
          return v;
        }
      }
      _t = new WeakMap();
      _e2 = new WeakMap();
      _P_instances = new WeakSet();
      s_fn = function() {
        __privateGet(this, _t) || (__privateSet(this, _t, true), typeof this.onSetModified == "function" && this.onSetModified());
      };
      class C extends P {
        constructor(v) {
          super();
          __privateAdd(this, _t2);
          const { map: r, hash: c, transfer: l } = v.serializable, b = structuredClone(r, l ? {
            transfer: l
          } : null);
          __privateSet(this, _t2, {
            map: b,
            hash: c,
            transfer: l
          });
        }
        get print() {
          (0, w.unreachable)("Should not call PrintAnnotationStorage.print");
        }
        get serializable() {
          return __privateGet(this, _t2);
        }
      }
      _t2 = new WeakMap();
    },
    831: (ct, st, $) => {
      $.a(ct, async (w, z) => {
        var _t, _t2, _e2, _lt_instances, s_fn, n_fn, _t3, _e3, _a, _t4, _ot_static, e_get, _t5, _e4, _s, _n, _r, _ut_instances, i_fn, _t6, _m_instances, e_fn, _t7, _t8;
        try {
          let nt = function(o) {
            if (typeof o == "string" || o instanceof URL ? o = {
              url: o
            } : (o instanceof ArrayBuffer || ArrayBuffer.isView(o)) && (o = {
              data: o
            }), typeof o != "object") throw new Error("Invalid parameter in getDocument, need parameter object.");
            if (!o.url && !o.data && !o.range) throw new Error("Invalid parameter object: need either .data, .range or .url");
            const a = new tt(), { docId: d } = a, A = o.url ? O(o.url) : null, x = o.data ? V(o.data) : null, k = o.httpHeaders || null, R = o.withCredentials === true, D = o.password ?? null, I = o.range instanceof Z ? o.range : null, F = Number.isInteger(o.rangeChunkSize) && o.rangeChunkSize > 0 ? o.rangeChunkSize : S;
            let T = o.worker instanceof ot ? o.worker : null;
            const U = o.verbosity, K = typeof o.docBaseUrl == "string" && !(0, P.isDataScheme)(o.docBaseUrl) ? o.docBaseUrl : null, X = typeof o.cMapUrl == "string" ? o.cMapUrl : null, W = o.cMapPacked !== false, rt = o.CMapReaderFactory || H, J = typeof o.standardFontDataUrl == "string" ? o.standardFontDataUrl : null, Q = o.StandardFontDataFactory || q, it = o.stopAtErrors !== true, ht = Number.isInteger(o.maxImageSize) && o.maxImageSize > -1 ? o.maxImageSize : -1, gt = o.isEvalSupported !== false, bt = typeof o.isOffscreenCanvasSupported == "boolean" ? o.isOffscreenCanvasSupported : !_.isNodeJS, At = Number.isInteger(o.canvasMaxAreaInBytes) ? o.canvasMaxAreaInBytes : -1, mt = typeof o.disableFontFace == "boolean" ? o.disableFontFace : _.isNodeJS, Ct = o.fontExtraProperties === true, St = o.enableXfa === true, Tt = o.ownerDocument || globalThis.document, vt = o.disableRange === true, xt = o.disableStream === true, kt = o.disableAutoFetch === true, Lt = o.pdfBug === true, _t9 = I ? I.length : o.length ?? NaN, Ht = typeof o.useSystemFonts == "boolean" ? o.useSystemFonts : !_.isNodeJS && !mt, Mt = typeof o.useWorkerFetch == "boolean" ? o.useWorkerFetch : rt === P.DOMCMapReaderFactory && Q === P.DOMStandardFontDataFactory && X && J && (0, P.isValidFetchUrl)(X, document.baseURI) && (0, P.isValidFetchUrl)(J, document.baseURI), Et = o.canvasFactory || new N({
              ownerDocument: Tt
            }), wt = o.filterFactory || new B({
              docId: d,
              ownerDocument: Tt
            }), Bt = null;
            (0, _.setVerbosityLevel)(U);
            const Dt = {
              canvasFactory: Et,
              filterFactory: wt
            };
            if (Mt || (Dt.cMapReaderFactory = new rt({
              baseUrl: X,
              isCompressed: W
            }), Dt.standardFontDataFactory = new Q({
              baseUrl: J
            })), !T) {
              const Nt = {
                verbosity: U,
                port: c.GlobalWorkerOptions.workerPort
              };
              T = Nt.port ? ot.fromPort(Nt) : new ot(Nt), a._worker = T;
            }
            const It = {
              docId: d,
              apiVersion: "4.2.67",
              data: x,
              password: D,
              disableAutoFetch: kt,
              rangeChunkSize: F,
              length: _t9,
              docBaseUrl: K,
              enableXfa: St,
              evaluatorOptions: {
                maxImageSize: ht,
                disableFontFace: mt,
                ignoreErrors: it,
                isEvalSupported: gt,
                isOffscreenCanvasSupported: bt,
                canvasMaxAreaInBytes: At,
                fontExtraProperties: Ct,
                useSystemFonts: Ht,
                cMapUrl: Mt ? X : null,
                standardFontDataUrl: Mt ? J : null
              }
            }, yt = {
              ignoreErrors: it,
              disableFontFace: mt,
              fontExtraProperties: Ct,
              enableXfa: St,
              ownerDocument: Tt,
              disableAutoFetch: kt,
              pdfBug: Lt,
              styleElement: Bt
            };
            return T.promise.then(function() {
              if (a.destroyed) throw new Error("Loading aborted");
              const Nt = j(T, It), $t = new Promise(function(zt) {
                let Ot;
                I ? Ot = new g.PDFDataTransportStream(I, {
                  disableRange: vt,
                  disableStream: xt
                }) : x || (Ot = ((Rt) => _.isNodeJS ? function() {
                  return typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype;
                }() && (0, P.isValidFetchUrl)(Rt.url) ? new t.PDFFetchStream(Rt) : new u.PDFNodeStream(Rt) : (0, P.isValidFetchUrl)(Rt.url) ? new t.PDFFetchStream(Rt) : new i.PDFNetworkStream(Rt))({
                  url: A,
                  length: _t9,
                  httpHeaders: k,
                  withCredentials: R,
                  rangeChunkSize: F,
                  disableRange: vt,
                  disableStream: xt
                })), zt(Ot);
              });
              return Promise.all([
                Nt,
                $t
              ]).then(function([zt, Ot]) {
                if (a.destroyed) throw new Error("Loading aborted");
                const Vt = new l.MessageHandler(d, zt, T.port), Rt = new ut(Vt, a, Ot, yt, Dt);
                a._transport = Rt, Vt.send("Ready", null);
              });
            }).catch(a._capability.reject), a;
          }, O = function(o) {
            if (o instanceof URL) return o.href;
            try {
              return new URL(o, window.location).href;
            } catch {
              if (_.isNodeJS && typeof o == "string") return o;
            }
            throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
          }, V = function(o) {
            if (_.isNodeJS && typeof Gt.Buffer < "u" && o instanceof Gt.Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
            if (o instanceof Uint8Array && o.byteLength === o.buffer.byteLength) return o;
            if (typeof o == "string") return (0, _.stringToBytes)(o);
            if (o instanceof ArrayBuffer || ArrayBuffer.isView(o) || typeof o == "object" && !isNaN(o == null ? void 0 : o.length)) return new Uint8Array(o);
            throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
          }, Y = function(o) {
            return typeof o == "object" && Number.isInteger(o == null ? void 0 : o.num) && o.num >= 0 && Number.isInteger(o == null ? void 0 : o.gen) && o.gen >= 0;
          };
          $.d(st, {
            PDFDataRangeTransport: () => Z,
            PDFWorker: () => ot,
            build: () => f,
            getDocument: () => nt,
            version: () => n
          });
          var _ = $(292), G = $(792), P = $(419), C = $(10), E = $(573), v = $(923), r = $(814), c = $(164), l = $(178), b = $(62), s = $(626), g = $(585), t = $(94), i = $(457), u = $(786), p = $(50), y = w([
            E,
            u
          ]);
          [E, u] = y.then ? (await y)() : y;
          const S = 65536, L = 100, M = 5e3, N = _.isNodeJS ? E.NodeCanvasFactory : P.DOMCanvasFactory, H = _.isNodeJS ? E.NodeCMapReaderFactory : P.DOMCMapReaderFactory, B = _.isNodeJS ? E.NodeFilterFactory : P.DOMFilterFactory, q = _.isNodeJS ? E.NodeStandardFontDataFactory : P.DOMStandardFontDataFactory;
          async function j(o, a) {
            if (o.destroyed) throw new Error("Worker was destroyed");
            const d = await o.messageHandler.sendWithPromise("GetDocRequest", a, a.data ? [
              a.data.buffer
            ] : null);
            if (o.destroyed) throw new Error("Worker was destroyed");
            return d;
          }
          const _tt = class _tt {
            constructor() {
              this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${__privateWrapper(_tt, _t)._++}`, this.destroyed = false, this.onPassword = null, this.onProgress = null;
            }
            get promise() {
              return this._capability.promise;
            }
            async destroy() {
              var _a2, _b, _c;
              this.destroyed = true;
              try {
                ((_a2 = this._worker) == null ? void 0 : _a2.port) && (this._worker._pendingDestroy = true), await ((_b = this._transport) == null ? void 0 : _b.destroy());
              } catch (a) {
                throw ((_c = this._worker) == null ? void 0 : _c.port) && delete this._worker._pendingDestroy, a;
              }
              this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
            }
          };
          _t = new WeakMap();
          __privateAdd(_tt, _t, 0);
          let tt = _tt;
          class Z {
            constructor(a, d, A = false, x = null) {
              this.length = a, this.initialData = d, this.progressiveDone = A, this.contentDispositionFilename = x, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
            }
            addRangeListener(a) {
              this._rangeListeners.push(a);
            }
            addProgressListener(a) {
              this._progressListeners.push(a);
            }
            addProgressiveReadListener(a) {
              this._progressiveReadListeners.push(a);
            }
            addProgressiveDoneListener(a) {
              this._progressiveDoneListeners.push(a);
            }
            onDataRange(a, d) {
              for (const A of this._rangeListeners) A(a, d);
            }
            onDataProgress(a, d) {
              this._readyCapability.promise.then(() => {
                for (const A of this._progressListeners) A(a, d);
              });
            }
            onDataProgressiveRead(a) {
              this._readyCapability.promise.then(() => {
                for (const d of this._progressiveReadListeners) d(a);
              });
            }
            onDataProgressiveDone() {
              this._readyCapability.promise.then(() => {
                for (const a of this._progressiveDoneListeners) a();
              });
            }
            transportReady() {
              this._readyCapability.resolve();
            }
            requestDataRange(a, d) {
              (0, _.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
            }
            abort() {
            }
          }
          class at {
            constructor(a, d) {
              this._pdfInfo = a, this._transport = d;
            }
            get annotationStorage() {
              return this._transport.annotationStorage;
            }
            get filterFactory() {
              return this._transport.filterFactory;
            }
            get numPages() {
              return this._pdfInfo.numPages;
            }
            get fingerprints() {
              return this._pdfInfo.fingerprints;
            }
            get isPureXfa() {
              return (0, _.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
            }
            get allXfaHtml() {
              return this._transport._htmlForXfa;
            }
            getPage(a) {
              return this._transport.getPage(a);
            }
            getPageIndex(a) {
              return this._transport.getPageIndex(a);
            }
            getDestinations() {
              return this._transport.getDestinations();
            }
            getDestination(a) {
              return this._transport.getDestination(a);
            }
            getPageLabels() {
              return this._transport.getPageLabels();
            }
            getPageLayout() {
              return this._transport.getPageLayout();
            }
            getPageMode() {
              return this._transport.getPageMode();
            }
            getViewerPreferences() {
              return this._transport.getViewerPreferences();
            }
            getOpenAction() {
              return this._transport.getOpenAction();
            }
            getAttachments() {
              return this._transport.getAttachments();
            }
            getJSActions() {
              return this._transport.getDocJSActions();
            }
            getOutline() {
              return this._transport.getOutline();
            }
            getOptionalContentConfig({ intent: a = "display" } = {}) {
              const { renderingIntent: d } = this._transport.getRenderingIntent(a);
              return this._transport.getOptionalContentConfig(d);
            }
            getPermissions() {
              return this._transport.getPermissions();
            }
            getMetadata() {
              return this._transport.getMetadata();
            }
            getMarkInfo() {
              return this._transport.getMarkInfo();
            }
            getData() {
              return this._transport.getData();
            }
            saveDocument() {
              return this._transport.saveDocument();
            }
            getDownloadInfo() {
              return this._transport.downloadInfoCapability.promise;
            }
            cleanup(a = false) {
              return this._transport.startCleanup(a || this.isPureXfa);
            }
            destroy() {
              return this.loadingTask.destroy();
            }
            cachedPageNumber(a) {
              return this._transport.cachedPageNumber(a);
            }
            get loadingParams() {
              return this._transport.loadingParams;
            }
            get loadingTask() {
              return this._transport.loadingTask;
            }
            getFieldObjects() {
              return this._transport.getFieldObjects();
            }
            hasJSActions() {
              return this._transport.hasJSActions();
            }
            getCalculationOrderIds() {
              return this._transport.getCalculationOrderIds();
            }
          }
          class lt {
            constructor(a, d, A, x = false) {
              __privateAdd(this, _lt_instances);
              __privateAdd(this, _t2, null);
              __privateAdd(this, _e2, false);
              this._pageIndex = a, this._pageInfo = d, this._transport = A, this._stats = x ? new P.StatTimer() : null, this._pdfBug = x, this.commonObjs = A.commonObjs, this.objs = new m(), this._maybeCleanupAfterRender = false, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = false;
            }
            get pageNumber() {
              return this._pageIndex + 1;
            }
            get rotate() {
              return this._pageInfo.rotate;
            }
            get ref() {
              return this._pageInfo.ref;
            }
            get userUnit() {
              return this._pageInfo.userUnit;
            }
            get view() {
              return this._pageInfo.view;
            }
            getViewport({ scale: a, rotation: d = this.rotate, offsetX: A = 0, offsetY: x = 0, dontFlip: k = false } = {}) {
              return new P.PageViewport({
                viewBox: this.view,
                scale: a,
                rotation: d,
                offsetX: A,
                offsetY: x,
                dontFlip: k
              });
            }
            getAnnotations({ intent: a = "display" } = {}) {
              const { renderingIntent: d } = this._transport.getRenderingIntent(a);
              return this._transport.getAnnotations(this._pageIndex, d);
            }
            getJSActions() {
              return this._transport.getPageJSActions(this._pageIndex);
            }
            get filterFactory() {
              return this._transport.filterFactory;
            }
            get isPureXfa() {
              return (0, _.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
            }
            async getXfa() {
              var _a2;
              return ((_a2 = this._transport._htmlForXfa) == null ? void 0 : _a2.children[this._pageIndex]) || null;
            }
            render({ canvasContext: a, viewport: d, intent: A = "display", annotationMode: x = _.AnnotationMode.ENABLE, transform: k = null, background: R = null, optionalContentConfigPromise: D = null, annotationCanvasMap: I = null, pageColors: F = null, printAnnotationStorage: T = null }) {
              var _a2, _b;
              (_a2 = this._stats) == null ? void 0 : _a2.time("Overall");
              const U = this._transport.getRenderingIntent(A, x, T), { renderingIntent: K, cacheKey: X } = U;
              __privateSet(this, _e2, false), __privateMethod(this, _lt_instances, n_fn).call(this), D || (D = this._transport.getOptionalContentConfig(K));
              let W = this._intentStates.get(X);
              W || (W = /* @__PURE__ */ Object.create(null), this._intentStates.set(X, W)), W.streamReaderCancelTimeout && (clearTimeout(W.streamReaderCancelTimeout), W.streamReaderCancelTimeout = null);
              const rt = !!(K & _.RenderingIntentFlag.PRINT);
              W.displayReadyCapability || (W.displayReadyCapability = Promise.withResolvers(), W.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: false,
                separateAnnots: null
              }, (_b = this._stats) == null ? void 0 : _b.time("Page Request"), this._pumpOperatorList(U));
              const J = (ht) => {
                var _a3, _b2;
                W.renderTasks.delete(Q), (this._maybeCleanupAfterRender || rt) && __privateSet(this, _e2, true), __privateMethod(this, _lt_instances, s_fn).call(this, !rt), ht ? (Q.capability.reject(ht), this._abortOperatorList({
                  intentState: W,
                  reason: ht instanceof Error ? ht : new Error(ht)
                })) : Q.capability.resolve(), (_a3 = this._stats) == null ? void 0 : _a3.timeEnd("Rendering"), (_b2 = this._stats) == null ? void 0 : _b2.timeEnd("Overall");
              }, Q = new e({
                callback: J,
                params: {
                  canvasContext: a,
                  viewport: d,
                  transform: k,
                  background: R
                },
                objs: this.objs,
                commonObjs: this.commonObjs,
                annotationCanvasMap: I,
                operatorList: W.operatorList,
                pageIndex: this._pageIndex,
                canvasFactory: this._transport.canvasFactory,
                filterFactory: this._transport.filterFactory,
                useRequestAnimationFrame: !rt,
                pdfBug: this._pdfBug,
                pageColors: F
              });
              (W.renderTasks || (W.renderTasks = /* @__PURE__ */ new Set())).add(Q);
              const it = Q.task;
              return Promise.all([
                W.displayReadyCapability.promise,
                D
              ]).then(([ht, gt]) => {
                var _a3;
                if (this.destroyed) {
                  J();
                  return;
                }
                if ((_a3 = this._stats) == null ? void 0 : _a3.time("Rendering"), !(gt.renderingIntent & K)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
                Q.initializeGraphics({
                  transparency: ht,
                  optionalContentConfig: gt
                }), Q.operatorListChanged();
              }).catch(J), it;
            }
            getOperatorList({ intent: a = "display", annotationMode: d = _.AnnotationMode.ENABLE, printAnnotationStorage: A = null } = {}) {
              var _a2;
              function x() {
                R.operatorList.lastChunk && (R.opListReadCapability.resolve(R.operatorList), R.renderTasks.delete(D));
              }
              const k = this._transport.getRenderingIntent(a, d, A, true);
              let R = this._intentStates.get(k.cacheKey);
              R || (R = /* @__PURE__ */ Object.create(null), this._intentStates.set(k.cacheKey, R));
              let D;
              return R.opListReadCapability || (D = /* @__PURE__ */ Object.create(null), D.operatorListChanged = x, R.opListReadCapability = Promise.withResolvers(), (R.renderTasks || (R.renderTasks = /* @__PURE__ */ new Set())).add(D), R.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: false,
                separateAnnots: null
              }, (_a2 = this._stats) == null ? void 0 : _a2.time("Page Request"), this._pumpOperatorList(k)), R.opListReadCapability.promise;
            }
            streamTextContent({ includeMarkedContent: a = false, disableNormalization: d = false } = {}) {
              return this._transport.messageHandler.sendWithStream("GetTextContent", {
                pageIndex: this._pageIndex,
                includeMarkedContent: a === true,
                disableNormalization: d === true
              }, {
                highWaterMark: 100,
                size(x) {
                  return x.items.length;
                }
              });
            }
            getTextContent(a = {}) {
              if (this._transport._htmlForXfa) return this.getXfa().then((A) => p.XfaText.textContent(A));
              const d = this.streamTextContent(a);
              return new Promise(function(A, x) {
                function k() {
                  R.read().then(function({ value: I, done: F }) {
                    if (F) {
                      A(D);
                      return;
                    }
                    Object.assign(D.styles, I.styles), D.items.push(...I.items), k();
                  }, x);
                }
                const R = d.getReader(), D = {
                  items: [],
                  styles: /* @__PURE__ */ Object.create(null)
                };
                k();
              });
            }
            getStructTree() {
              return this._transport.getStructTree(this._pageIndex);
            }
            _destroy() {
              this.destroyed = true;
              const a = [];
              for (const d of this._intentStates.values()) if (this._abortOperatorList({
                intentState: d,
                reason: new Error("Page was destroyed."),
                force: true
              }), !d.opListReadCapability) for (const A of d.renderTasks) a.push(A.completed), A.cancel();
              return this.objs.clear(), __privateSet(this, _e2, false), __privateMethod(this, _lt_instances, n_fn).call(this), Promise.all(a);
            }
            cleanup(a = false) {
              __privateSet(this, _e2, true);
              const d = __privateMethod(this, _lt_instances, s_fn).call(this, false);
              return a && d && (this._stats && (this._stats = new P.StatTimer())), d;
            }
            _startRenderPage(a, d) {
              var _a2, _b;
              const A = this._intentStates.get(d);
              A && ((_a2 = this._stats) == null ? void 0 : _a2.timeEnd("Page Request"), (_b = A.displayReadyCapability) == null ? void 0 : _b.resolve(a));
            }
            _renderPageChunk(a, d) {
              for (let A = 0, x = a.length; A < x; A++) d.operatorList.fnArray.push(a.fnArray[A]), d.operatorList.argsArray.push(a.argsArray[A]);
              d.operatorList.lastChunk = a.lastChunk, d.operatorList.separateAnnots = a.separateAnnots;
              for (const A of d.renderTasks) A.operatorListChanged();
              a.lastChunk && __privateMethod(this, _lt_instances, s_fn).call(this, true);
            }
            _pumpOperatorList({ renderingIntent: a, cacheKey: d, annotationStorageSerializable: A }) {
              const { map: x, transfer: k } = A, D = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                pageIndex: this._pageIndex,
                intent: a,
                cacheKey: d,
                annotationStorage: x
              }, k).getReader(), I = this._intentStates.get(d);
              I.streamReader = D;
              const F = () => {
                D.read().then(({ value: T, done: U }) => {
                  if (U) {
                    I.streamReader = null;
                    return;
                  }
                  this._transport.destroyed || (this._renderPageChunk(T, I), F());
                }, (T) => {
                  if (I.streamReader = null, !this._transport.destroyed) {
                    if (I.operatorList) {
                      I.operatorList.lastChunk = true;
                      for (const U of I.renderTasks) U.operatorListChanged();
                      __privateMethod(this, _lt_instances, s_fn).call(this, true);
                    }
                    if (I.displayReadyCapability) I.displayReadyCapability.reject(T);
                    else if (I.opListReadCapability) I.opListReadCapability.reject(T);
                    else throw T;
                  }
                });
              };
              F();
            }
            _abortOperatorList({ intentState: a, reason: d, force: A = false }) {
              if (a.streamReader) {
                if (a.streamReaderCancelTimeout && (clearTimeout(a.streamReaderCancelTimeout), a.streamReaderCancelTimeout = null), !A) {
                  if (a.renderTasks.size > 0) return;
                  if (d instanceof P.RenderingCancelledException) {
                    let x = L;
                    d.extraDelay > 0 && d.extraDelay < 1e3 && (x += d.extraDelay), a.streamReaderCancelTimeout = setTimeout(() => {
                      a.streamReaderCancelTimeout = null, this._abortOperatorList({
                        intentState: a,
                        reason: d,
                        force: true
                      });
                    }, x);
                    return;
                  }
                }
                if (a.streamReader.cancel(new _.AbortException(d.message)).catch(() => {
                }), a.streamReader = null, !this._transport.destroyed) {
                  for (const [x, k] of this._intentStates) if (k === a) {
                    this._intentStates.delete(x);
                    break;
                  }
                  this.cleanup();
                }
              }
            }
            get stats() {
              return this._stats;
            }
          }
          _t2 = new WeakMap();
          _e2 = new WeakMap();
          _lt_instances = new WeakSet();
          s_fn = function(a = false) {
            if (__privateMethod(this, _lt_instances, n_fn).call(this), !__privateGet(this, _e2) || this.destroyed) return false;
            if (a) return __privateSet(this, _t2, setTimeout(() => {
              __privateSet(this, _t2, null), __privateMethod(this, _lt_instances, s_fn).call(this, false);
            }, M)), false;
            for (const { renderTasks: d, operatorList: A } of this._intentStates.values()) if (d.size > 0 || !A.lastChunk) return false;
            return this._intentStates.clear(), this.objs.clear(), __privateSet(this, _e2, false), true;
          };
          n_fn = function() {
            __privateGet(this, _t2) && (clearTimeout(__privateGet(this, _t2)), __privateSet(this, _t2, null));
          };
          class pt {
            constructor() {
              __privateAdd(this, _t3, /* @__PURE__ */ new Set());
              __privateAdd(this, _e3, Promise.resolve());
            }
            postMessage(a, d) {
              const A = {
                data: structuredClone(a, d ? {
                  transfer: d
                } : null)
              };
              __privateGet(this, _e3).then(() => {
                for (const x of __privateGet(this, _t3)) x.call(this, A);
              });
            }
            addEventListener(a, d) {
              __privateGet(this, _t3).add(d);
            }
            removeEventListener(a, d) {
              __privateGet(this, _t3).delete(d);
            }
            terminate() {
              __privateGet(this, _t3).clear();
            }
          }
          _t3 = new WeakMap();
          _e3 = new WeakMap();
          const dt = {
            isWorkerDisabled: false,
            fakeWorkerId: 0
          };
          _.isNodeJS && (dt.isWorkerDisabled = true, (_a = c.GlobalWorkerOptions).workerSrc || (_a.workerSrc = "./pdf.worker.mjs")), dt.isSameOrigin = function(o, a) {
            let d;
            try {
              if (d = new URL(o), !d.origin || d.origin === "null") return false;
            } catch {
              return false;
            }
            const A = new URL(a, d);
            return d.origin === A.origin;
          }, dt.createCDNWrapper = function(o) {
            const a = `await import("${o}");`;
            return URL.createObjectURL(new Blob([
              a
            ], {
              type: "text/javascript"
            }));
          };
          const _ot = class _ot {
            constructor({ name: a = null, port: d = null, verbosity: A = (0, _.getVerbosityLevel)() } = {}) {
              var _a2;
              if (this.name = a, this.destroyed = false, this.verbosity = A, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, d) {
                if ((_a2 = __privateGet(_ot, _t4)) == null ? void 0 : _a2.has(d)) throw new Error("Cannot use more than one PDFWorker per port.");
                (__privateGet(_ot, _t4) || __privateSet(_ot, _t4, /* @__PURE__ */ new WeakMap())).set(d, this), this._initializeFromPort(d);
                return;
              }
              this._initialize();
            }
            get promise() {
              return this._readyCapability.promise;
            }
            get port() {
              return this._port;
            }
            get messageHandler() {
              return this._messageHandler;
            }
            _initializeFromPort(a) {
              this._port = a, this._messageHandler = new l.MessageHandler("main", "worker", a), this._messageHandler.on("ready", function() {
              }), this._readyCapability.resolve(), this._messageHandler.send("configure", {
                verbosity: this.verbosity
              });
            }
            _initialize() {
              if (!dt.isWorkerDisabled && !__privateGet(_ot, _ot_static, e_get)) {
                let { workerSrc: a } = _ot;
                try {
                  dt.isSameOrigin(window.location.href, a) || (a = dt.createCDNWrapper(new URL(a, window.location).href));
                  const d = new Worker(a, {
                    type: "module"
                  }), A = new l.MessageHandler("main", "worker", d), x = () => {
                    d.removeEventListener("error", k), A.destroy(), d.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
                  }, k = () => {
                    this._webWorker || x();
                  };
                  d.addEventListener("error", k), A.on("test", (D) => {
                    if (d.removeEventListener("error", k), this.destroyed) {
                      x();
                      return;
                    }
                    D ? (this._messageHandler = A, this._port = d, this._webWorker = d, this._readyCapability.resolve(), A.send("configure", {
                      verbosity: this.verbosity
                    })) : (this._setupFakeWorker(), A.destroy(), d.terminate());
                  }), A.on("ready", (D) => {
                    if (d.removeEventListener("error", k), this.destroyed) {
                      x();
                      return;
                    }
                    try {
                      R();
                    } catch {
                      this._setupFakeWorker();
                    }
                  });
                  const R = () => {
                    const D = new Uint8Array();
                    A.send("test", D, [
                      D.buffer
                    ]);
                  };
                  R();
                  return;
                } catch {
                  (0, _.info)("The worker has been disabled.");
                }
              }
              this._setupFakeWorker();
            }
            _setupFakeWorker() {
              dt.isWorkerDisabled || ((0, _.warn)("Setting up fake worker."), dt.isWorkerDisabled = true), _ot._setupFakeWorkerGlobal.then((a) => {
                if (this.destroyed) {
                  this._readyCapability.reject(new Error("Worker was destroyed"));
                  return;
                }
                const d = new pt();
                this._port = d;
                const A = `fake${dt.fakeWorkerId++}`, x = new l.MessageHandler(A + "_worker", A, d);
                a.setup(x, d);
                const k = new l.MessageHandler(A, A + "_worker", d);
                this._messageHandler = k, this._readyCapability.resolve(), k.send("configure", {
                  verbosity: this.verbosity
                });
              }).catch((a) => {
                this._readyCapability.reject(new Error(`Setting up fake worker failed: "${a.message}".`));
              });
            }
            destroy() {
              var _a2;
              this.destroyed = true, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (_a2 = __privateGet(_ot, _t4)) == null ? void 0 : _a2.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
            }
            static fromPort(a) {
              var _a2;
              if (!(a == null ? void 0 : a.port)) throw new Error("PDFWorker.fromPort - invalid method signature.");
              const d = (_a2 = __privateGet(this, _t4)) == null ? void 0 : _a2.get(a.port);
              if (d) {
                if (d._pendingDestroy) throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
                return d;
              }
              return new _ot(a);
            }
            static get workerSrc() {
              if (c.GlobalWorkerOptions.workerSrc) return c.GlobalWorkerOptions.workerSrc;
              throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
            }
            static get _setupFakeWorkerGlobal() {
              const a = async () => __privateGet(this, _ot_static, e_get) ? __privateGet(this, _ot_static, e_get) : (await import(this.workerSrc).then(async (m2) => {
                await m2.__tla;
                return m2;
              })).WorkerMessageHandler;
              return (0, _.shadow)(this, "_setupFakeWorkerGlobal", a());
            }
          };
          _t4 = new WeakMap();
          _ot_static = new WeakSet();
          e_get = function() {
            var _a2;
            try {
              return ((_a2 = globalThis.pdfjsWorker) == null ? void 0 : _a2.WorkerMessageHandler) || null;
            } catch {
              return null;
            }
          };
          __privateAdd(_ot, _ot_static);
          __privateAdd(_ot, _t4);
          let ot = _ot;
          class ut {
            constructor(a, d, A, x, k) {
              __privateAdd(this, _ut_instances);
              __privateAdd(this, _t5, /* @__PURE__ */ new Map());
              __privateAdd(this, _e4, /* @__PURE__ */ new Map());
              __privateAdd(this, _s, /* @__PURE__ */ new Map());
              __privateAdd(this, _n, /* @__PURE__ */ new Map());
              __privateAdd(this, _r, null);
              this.messageHandler = a, this.loadingTask = d, this.commonObjs = new m(), this.fontLoader = new C.FontLoader({
                ownerDocument: x.ownerDocument,
                styleElement: x.styleElement
              }), this._params = x, this.canvasFactory = k.canvasFactory, this.filterFactory = k.filterFactory, this.cMapReaderFactory = k.cMapReaderFactory, this.standardFontDataFactory = k.standardFontDataFactory, this.destroyed = false, this.destroyCapability = null, this._networkStream = A, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
            }
            get annotationStorage() {
              return (0, _.shadow)(this, "annotationStorage", new G.AnnotationStorage());
            }
            getRenderingIntent(a, d = _.AnnotationMode.ENABLE, A = null, x = false) {
              let k = _.RenderingIntentFlag.DISPLAY, R = G.SerializableEmpty;
              switch (a) {
                case "any":
                  k = _.RenderingIntentFlag.ANY;
                  break;
                case "display":
                  break;
                case "print":
                  k = _.RenderingIntentFlag.PRINT;
                  break;
                default:
                  (0, _.warn)(`getRenderingIntent - invalid intent: ${a}`);
              }
              switch (d) {
                case _.AnnotationMode.DISABLE:
                  k += _.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                  break;
                case _.AnnotationMode.ENABLE:
                  break;
                case _.AnnotationMode.ENABLE_FORMS:
                  k += _.RenderingIntentFlag.ANNOTATIONS_FORMS;
                  break;
                case _.AnnotationMode.ENABLE_STORAGE:
                  k += _.RenderingIntentFlag.ANNOTATIONS_STORAGE, R = (k & _.RenderingIntentFlag.PRINT && A instanceof G.PrintAnnotationStorage ? A : this.annotationStorage).serializable;
                  break;
                default:
                  (0, _.warn)(`getRenderingIntent - invalid annotationMode: ${d}`);
              }
              return x && (k += _.RenderingIntentFlag.OPLIST), {
                renderingIntent: k,
                cacheKey: `${k}_${R.hash}`,
                annotationStorageSerializable: R
              };
            }
            destroy() {
              var _a2;
              if (this.destroyCapability) return this.destroyCapability.promise;
              this.destroyed = true, this.destroyCapability = Promise.withResolvers(), (_a2 = __privateGet(this, _r)) == null ? void 0 : _a2.reject(new Error("Worker was destroyed during onPassword callback"));
              const a = [];
              for (const A of __privateGet(this, _e4).values()) a.push(A._destroy());
              __privateGet(this, _e4).clear(), __privateGet(this, _s).clear(), __privateGet(this, _n).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
              const d = this.messageHandler.sendWithPromise("Terminate", null);
              return a.push(d), Promise.all(a).then(() => {
                var _a3;
                this.commonObjs.clear(), this.fontLoader.clear(), __privateGet(this, _t5).clear(), this.filterFactory.destroy(), (0, r.cleanupTextLayer)(), (_a3 = this._networkStream) == null ? void 0 : _a3.cancelAllRequests(new _.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
              }, this.destroyCapability.reject), this.destroyCapability.promise;
            }
            setupMessageHandler() {
              const { messageHandler: a, loadingTask: d } = this;
              a.on("GetReader", (A, x) => {
                (0, _.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (k) => {
                  this._lastProgress = {
                    loaded: k.loaded,
                    total: k.total
                  };
                }, x.onPull = () => {
                  this._fullReader.read().then(function({ value: k, done: R }) {
                    if (R) {
                      x.close();
                      return;
                    }
                    (0, _.assert)(k instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), x.enqueue(new Uint8Array(k), 1, [
                      k
                    ]);
                  }).catch((k) => {
                    x.error(k);
                  });
                }, x.onCancel = (k) => {
                  this._fullReader.cancel(k), x.ready.catch((R) => {
                    if (!this.destroyed) throw R;
                  });
                };
              }), a.on("ReaderHeadersReady", (A) => {
                const x = Promise.withResolvers(), k = this._fullReader;
                return k.headersReady.then(() => {
                  var _a2;
                  (!k.isStreamingSupported || !k.isRangeSupported) && (this._lastProgress && ((_a2 = d.onProgress) == null ? void 0 : _a2.call(d, this._lastProgress)), k.onProgress = (R) => {
                    var _a3;
                    (_a3 = d.onProgress) == null ? void 0 : _a3.call(d, {
                      loaded: R.loaded,
                      total: R.total
                    });
                  }), x.resolve({
                    isStreamingSupported: k.isStreamingSupported,
                    isRangeSupported: k.isRangeSupported,
                    contentLength: k.contentLength
                  });
                }, x.reject), x.promise;
              }), a.on("GetRangeReader", (A, x) => {
                (0, _.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                const k = this._networkStream.getRangeReader(A.begin, A.end);
                if (!k) {
                  x.close();
                  return;
                }
                x.onPull = () => {
                  k.read().then(function({ value: R, done: D }) {
                    if (D) {
                      x.close();
                      return;
                    }
                    (0, _.assert)(R instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), x.enqueue(new Uint8Array(R), 1, [
                      R
                    ]);
                  }).catch((R) => {
                    x.error(R);
                  });
                }, x.onCancel = (R) => {
                  k.cancel(R), x.ready.catch((D) => {
                    if (!this.destroyed) throw D;
                  });
                };
              }), a.on("GetDoc", ({ pdfInfo: A }) => {
                this._numPages = A.numPages, this._htmlForXfa = A.htmlForXfa, delete A.htmlForXfa, d._capability.resolve(new at(A, this));
              }), a.on("DocException", function(A) {
                let x;
                switch (A.name) {
                  case "PasswordException":
                    x = new _.PasswordException(A.message, A.code);
                    break;
                  case "InvalidPDFException":
                    x = new _.InvalidPDFException(A.message);
                    break;
                  case "MissingPDFException":
                    x = new _.MissingPDFException(A.message);
                    break;
                  case "UnexpectedResponseException":
                    x = new _.UnexpectedResponseException(A.message, A.status);
                    break;
                  case "UnknownErrorException":
                    x = new _.UnknownErrorException(A.message, A.details);
                    break;
                  default:
                    (0, _.unreachable)("DocException - expected a valid Error.");
                }
                d._capability.reject(x);
              }), a.on("PasswordRequest", (A) => {
                if (__privateSet(this, _r, Promise.withResolvers()), d.onPassword) {
                  const x = (k) => {
                    k instanceof Error ? __privateGet(this, _r).reject(k) : __privateGet(this, _r).resolve({
                      password: k
                    });
                  };
                  try {
                    d.onPassword(x, A.code);
                  } catch (k) {
                    __privateGet(this, _r).reject(k);
                  }
                } else __privateGet(this, _r).reject(new _.PasswordException(A.message, A.code));
                return __privateGet(this, _r).promise;
              }), a.on("DataLoaded", (A) => {
                var _a2;
                (_a2 = d.onProgress) == null ? void 0 : _a2.call(d, {
                  loaded: A.length,
                  total: A.length
                }), this.downloadInfoCapability.resolve(A);
              }), a.on("StartRenderPage", (A) => {
                if (this.destroyed) return;
                __privateGet(this, _e4).get(A.pageIndex)._startRenderPage(A.transparency, A.cacheKey);
              }), a.on("commonobj", ([A, x, k]) => {
                var _a2;
                if (this.destroyed || this.commonObjs.has(A)) return null;
                switch (x) {
                  case "Font":
                    const R = this._params;
                    if ("error" in k) {
                      const T = k.error;
                      (0, _.warn)(`Error during font loading: ${T}`), this.commonObjs.resolve(A, T);
                      break;
                    }
                    const D = R.pdfBug && ((_a2 = globalThis.FontInspector) == null ? void 0 : _a2.enabled) ? (T, U) => globalThis.FontInspector.fontAdded(T, U) : null, I = new C.FontFaceObject(k, {
                      disableFontFace: R.disableFontFace,
                      ignoreErrors: R.ignoreErrors,
                      inspectFont: D
                    });
                    this.fontLoader.bind(I).catch(() => a.sendWithPromise("FontFallback", {
                      id: A
                    })).finally(() => {
                      !R.fontExtraProperties && I.data && (I.data = null), this.commonObjs.resolve(A, I);
                    });
                    break;
                  case "CopyLocalImage":
                    const { imageRef: F } = k;
                    (0, _.assert)(F, "The imageRef must be defined.");
                    for (const T of __privateGet(this, _e4).values()) for (const [, U] of T.objs) if (U.ref === F) return U.dataLen ? (this.commonObjs.resolve(A, structuredClone(U)), U.dataLen) : null;
                    break;
                  case "FontPath":
                  case "Image":
                  case "Pattern":
                    this.commonObjs.resolve(A, k);
                    break;
                  default:
                    throw new Error(`Got unknown common object type ${x}`);
                }
                return null;
              }), a.on("obj", ([A, x, k, R]) => {
                var _a2;
                if (this.destroyed) return;
                const D = __privateGet(this, _e4).get(x);
                if (!D.objs.has(A)) {
                  if (D._intentStates.size === 0) {
                    (_a2 = R == null ? void 0 : R.bitmap) == null ? void 0 : _a2.close();
                    return;
                  }
                  switch (k) {
                    case "Image":
                      D.objs.resolve(A, R), (R == null ? void 0 : R.dataLen) > _.MAX_IMAGE_SIZE_TO_CACHE && (D._maybeCleanupAfterRender = true);
                      break;
                    case "Pattern":
                      D.objs.resolve(A, R);
                      break;
                    default:
                      throw new Error(`Got unknown object type ${k}`);
                  }
                }
              }), a.on("DocProgress", (A) => {
                var _a2;
                this.destroyed || ((_a2 = d.onProgress) == null ? void 0 : _a2.call(d, {
                  loaded: A.loaded,
                  total: A.total
                }));
              }), a.on("FetchBuiltInCMap", (A) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(A) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), a.on("FetchStandardFontData", (A) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(A) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
            }
            getData() {
              return this.messageHandler.sendWithPromise("GetData", null);
            }
            saveDocument() {
              var _a2;
              this.annotationStorage.size <= 0 && (0, _.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
              const { map: a, transfer: d } = this.annotationStorage.serializable;
              return this.messageHandler.sendWithPromise("SaveDocument", {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: a,
                filename: ((_a2 = this._fullReader) == null ? void 0 : _a2.filename) ?? null
              }, d).finally(() => {
                this.annotationStorage.resetModified();
              });
            }
            getPage(a) {
              if (!Number.isInteger(a) || a <= 0 || a > this._numPages) return Promise.reject(new Error("Invalid page request."));
              const d = a - 1, A = __privateGet(this, _s).get(d);
              if (A) return A;
              const x = this.messageHandler.sendWithPromise("GetPage", {
                pageIndex: d
              }).then((k) => {
                if (this.destroyed) throw new Error("Transport destroyed");
                k.refStr && __privateGet(this, _n).set(k.refStr, a);
                const R = new lt(d, k, this, this._params.pdfBug);
                return __privateGet(this, _e4).set(d, R), R;
              });
              return __privateGet(this, _s).set(d, x), x;
            }
            getPageIndex(a) {
              return Y(a) ? this.messageHandler.sendWithPromise("GetPageIndex", {
                num: a.num,
                gen: a.gen
              }) : Promise.reject(new Error("Invalid pageIndex request."));
            }
            getAnnotations(a, d) {
              return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: a,
                intent: d
              });
            }
            getFieldObjects() {
              return __privateMethod(this, _ut_instances, i_fn).call(this, "GetFieldObjects");
            }
            hasJSActions() {
              return __privateMethod(this, _ut_instances, i_fn).call(this, "HasJSActions");
            }
            getCalculationOrderIds() {
              return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
            }
            getDestinations() {
              return this.messageHandler.sendWithPromise("GetDestinations", null);
            }
            getDestination(a) {
              return typeof a != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
                id: a
              });
            }
            getPageLabels() {
              return this.messageHandler.sendWithPromise("GetPageLabels", null);
            }
            getPageLayout() {
              return this.messageHandler.sendWithPromise("GetPageLayout", null);
            }
            getPageMode() {
              return this.messageHandler.sendWithPromise("GetPageMode", null);
            }
            getViewerPreferences() {
              return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
            }
            getOpenAction() {
              return this.messageHandler.sendWithPromise("GetOpenAction", null);
            }
            getAttachments() {
              return this.messageHandler.sendWithPromise("GetAttachments", null);
            }
            getDocJSActions() {
              return __privateMethod(this, _ut_instances, i_fn).call(this, "GetDocJSActions");
            }
            getPageJSActions(a) {
              return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex: a
              });
            }
            getStructTree(a) {
              return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex: a
              });
            }
            getOutline() {
              return this.messageHandler.sendWithPromise("GetOutline", null);
            }
            getOptionalContentConfig(a) {
              return __privateMethod(this, _ut_instances, i_fn).call(this, "GetOptionalContentConfig").then((d) => new s.OptionalContentConfig(d, a));
            }
            getPermissions() {
              return this.messageHandler.sendWithPromise("GetPermissions", null);
            }
            getMetadata() {
              const a = "GetMetadata", d = __privateGet(this, _t5).get(a);
              if (d) return d;
              const A = this.messageHandler.sendWithPromise(a, null).then((x) => {
                var _a2, _b;
                return {
                  info: x[0],
                  metadata: x[1] ? new b.Metadata(x[1]) : null,
                  contentDispositionFilename: ((_a2 = this._fullReader) == null ? void 0 : _a2.filename) ?? null,
                  contentLength: ((_b = this._fullReader) == null ? void 0 : _b.contentLength) ?? null
                };
              });
              return __privateGet(this, _t5).set(a, A), A;
            }
            getMarkInfo() {
              return this.messageHandler.sendWithPromise("GetMarkInfo", null);
            }
            async startCleanup(a = false) {
              if (!this.destroyed) {
                await this.messageHandler.sendWithPromise("Cleanup", null);
                for (const d of __privateGet(this, _e4).values()) if (!d.cleanup()) throw new Error(`startCleanup: Page ${d.pageNumber} is currently rendering.`);
                this.commonObjs.clear(), a || this.fontLoader.clear(), __privateGet(this, _t5).clear(), this.filterFactory.destroy(true), (0, r.cleanupTextLayer)();
              }
            }
            cachedPageNumber(a) {
              if (!Y(a)) return null;
              const d = a.gen === 0 ? `${a.num}R` : `${a.num}R${a.gen}`;
              return __privateGet(this, _n).get(d) ?? null;
            }
            get loadingParams() {
              const { disableAutoFetch: a, enableXfa: d } = this._params;
              return (0, _.shadow)(this, "loadingParams", {
                disableAutoFetch: a,
                enableXfa: d
              });
            }
          }
          _t5 = new WeakMap();
          _e4 = new WeakMap();
          _s = new WeakMap();
          _n = new WeakMap();
          _r = new WeakMap();
          _ut_instances = new WeakSet();
          i_fn = function(a, d = null) {
            const A = __privateGet(this, _t5).get(a);
            if (A) return A;
            const x = this.messageHandler.sendWithPromise(a, d);
            return __privateGet(this, _t5).set(a, x), x;
          };
          const et = Symbol("INITIAL_DATA");
          class m {
            constructor() {
              __privateAdd(this, _m_instances);
              __privateAdd(this, _t6, /* @__PURE__ */ Object.create(null));
            }
            get(a, d = null) {
              if (d) {
                const x = __privateMethod(this, _m_instances, e_fn).call(this, a);
                return x.promise.then(() => d(x.data)), null;
              }
              const A = __privateGet(this, _t6)[a];
              if (!A || A.data === et) throw new Error(`Requesting object that isn't resolved yet ${a}.`);
              return A.data;
            }
            has(a) {
              const d = __privateGet(this, _t6)[a];
              return !!d && d.data !== et;
            }
            resolve(a, d = null) {
              const A = __privateMethod(this, _m_instances, e_fn).call(this, a);
              A.data = d, A.resolve();
            }
            clear() {
              var _a2;
              for (const a in __privateGet(this, _t6)) {
                const { data: d } = __privateGet(this, _t6)[a];
                (_a2 = d == null ? void 0 : d.bitmap) == null ? void 0 : _a2.close();
              }
              __privateSet(this, _t6, /* @__PURE__ */ Object.create(null));
            }
            *[Symbol.iterator]() {
              for (const a in __privateGet(this, _t6)) {
                const { data: d } = __privateGet(this, _t6)[a];
                d !== et && (yield [
                  a,
                  d
                ]);
              }
            }
          }
          _t6 = new WeakMap();
          _m_instances = new WeakSet();
          e_fn = function(a) {
            var _a2;
            return (_a2 = __privateGet(this, _t6))[a] || (_a2[a] = {
              ...Promise.withResolvers(),
              data: et
            });
          };
          class h {
            constructor(a) {
              __privateAdd(this, _t7, null);
              __privateSet(this, _t7, a), this.onContinue = null;
            }
            get promise() {
              return __privateGet(this, _t7).capability.promise;
            }
            cancel(a = 0) {
              __privateGet(this, _t7).cancel(null, a);
            }
            get separateAnnots() {
              const { separateAnnots: a } = __privateGet(this, _t7).operatorList;
              if (!a) return false;
              const { annotationCanvasMap: d } = __privateGet(this, _t7);
              return a.form || a.canvas && (d == null ? void 0 : d.size) > 0;
            }
          }
          _t7 = new WeakMap();
          const _e5 = class _e5 {
            constructor({ callback: a, params: d, objs: A, commonObjs: x, annotationCanvasMap: k, operatorList: R, pageIndex: D, canvasFactory: I, filterFactory: F, useRequestAnimationFrame: T = false, pdfBug: U = false, pageColors: K = null }) {
              this.callback = a, this.params = d, this.objs = A, this.commonObjs = x, this.annotationCanvasMap = k, this.operatorListIdx = null, this.operatorList = R, this._pageIndex = D, this.canvasFactory = I, this.filterFactory = F, this._pdfBug = U, this.pageColors = K, this.running = false, this.graphicsReadyCallback = null, this.graphicsReady = false, this._useRequestAnimationFrame = T === true && typeof window < "u", this.cancelled = false, this.capability = Promise.withResolvers(), this.task = new h(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = d.canvasContext.canvas;
            }
            get completed() {
              return this.capability.promise.catch(function() {
              });
            }
            initializeGraphics({ transparency: a = false, optionalContentConfig: d }) {
              var _a2, _b;
              if (this.cancelled) return;
              if (this._canvas) {
                if (__privateGet(_e5, _t8).has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                __privateGet(_e5, _t8).add(this._canvas);
              }
              this._pdfBug && ((_a2 = globalThis.StepperManager) == null ? void 0 : _a2.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
              const { canvasContext: A, viewport: x, transform: k, background: R } = this.params;
              this.gfx = new v.CanvasGraphics(A, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: d
              }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
                transform: k,
                viewport: x,
                transparency: a,
                background: R
              }), this.operatorListIdx = 0, this.graphicsReady = true, (_b = this.graphicsReadyCallback) == null ? void 0 : _b.call(this);
            }
            cancel(a = null, d = 0) {
              var _a2;
              this.running = false, this.cancelled = true, (_a2 = this.gfx) == null ? void 0 : _a2.endDrawing(), __privateGet(_e5, _t8).delete(this._canvas), this.callback(a || new P.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, d));
            }
            operatorListChanged() {
              var _a2;
              if (!this.graphicsReady) {
                this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
                return;
              }
              (_a2 = this.stepper) == null ? void 0 : _a2.updateOperatorList(this.operatorList), !this.running && this._continue();
            }
            _continue() {
              this.running = true, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
            }
            _scheduleNext() {
              this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
                this._nextBound().catch(this._cancelBound);
              }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
            }
            async _next() {
              this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = false, this.operatorList.lastChunk && (this.gfx.endDrawing(), __privateGet(_e5, _t8).delete(this._canvas), this.callback())));
            }
          };
          _t8 = new WeakMap();
          __privateAdd(_e5, _t8, /* @__PURE__ */ new WeakSet());
          let e = _e5;
          const n = "4.2.67", f = "49b388101";
          z();
        } catch (S) {
          z(S);
        }
      });
    },
    583: (ct, st, $) => {
      $.d(st, {
        BaseCMapReaderFactory: () => G,
        BaseCanvasFactory: () => _,
        BaseFilterFactory: () => z,
        BaseSVGFactory: () => C,
        BaseStandardFontDataFactory: () => P
      });
      var w = $(292);
      class z {
        constructor() {
          this.constructor === z && (0, w.unreachable)("Cannot initialize BaseFilterFactory.");
        }
        addFilter(v) {
          return "none";
        }
        addHCMFilter(v, r) {
          return "none";
        }
        addHighlightHCMFilter(v, r, c, l, b) {
          return "none";
        }
        destroy(v = false) {
        }
      }
      class _ {
        constructor() {
          this.constructor === _ && (0, w.unreachable)("Cannot initialize BaseCanvasFactory.");
        }
        create(v, r) {
          if (v <= 0 || r <= 0) throw new Error("Invalid canvas size");
          const c = this._createCanvas(v, r);
          return {
            canvas: c,
            context: c.getContext("2d")
          };
        }
        reset(v, r, c) {
          if (!v.canvas) throw new Error("Canvas is not specified");
          if (r <= 0 || c <= 0) throw new Error("Invalid canvas size");
          v.canvas.width = r, v.canvas.height = c;
        }
        destroy(v) {
          if (!v.canvas) throw new Error("Canvas is not specified");
          v.canvas.width = 0, v.canvas.height = 0, v.canvas = null, v.context = null;
        }
        _createCanvas(v, r) {
          (0, w.unreachable)("Abstract method `_createCanvas` called.");
        }
      }
      class G {
        constructor({ baseUrl: v = null, isCompressed: r = true }) {
          this.constructor === G && (0, w.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = v, this.isCompressed = r;
        }
        async fetch({ name: v }) {
          if (!this.baseUrl) throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
          if (!v) throw new Error("CMap name must be specified.");
          const r = this.baseUrl + v + (this.isCompressed ? ".bcmap" : ""), c = this.isCompressed ? w.CMapCompressionType.BINARY : w.CMapCompressionType.NONE;
          return this._fetchData(r, c).catch((l) => {
            throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${r}`);
          });
        }
        _fetchData(v, r) {
          (0, w.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      class P {
        constructor({ baseUrl: v = null }) {
          this.constructor === P && (0, w.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = v;
        }
        async fetch({ filename: v }) {
          if (!this.baseUrl) throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
          if (!v) throw new Error("Font filename must be specified.");
          const r = `${this.baseUrl}${v}`;
          return this._fetchData(r).catch((c) => {
            throw new Error(`Unable to load font data at: ${r}`);
          });
        }
        _fetchData(v) {
          (0, w.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      class C {
        constructor() {
          this.constructor === C && (0, w.unreachable)("Cannot initialize BaseSVGFactory.");
        }
        create(v, r, c = false) {
          if (v <= 0 || r <= 0) throw new Error("Invalid SVG dimensions");
          const l = this._createSVG("svg:svg");
          return l.setAttribute("version", "1.1"), c || (l.setAttribute("width", `${v}px`), l.setAttribute("height", `${r}px`)), l.setAttribute("preserveAspectRatio", "none"), l.setAttribute("viewBox", `0 0 ${v} ${r}`), l;
        }
        createElement(v) {
          if (typeof v != "string") throw new Error("Invalid SVG element type");
          return this._createSVG(v);
        }
        _createSVG(v) {
          (0, w.unreachable)("Abstract method `_createSVG` called.");
        }
      }
    },
    923: (ct, st, $) => {
      var _m_instances, t_fn, e_fn;
      $.d(st, {
        CanvasGraphics: () => m
      });
      var w = $(292), z = $(419);
      const _ = {
        FILL: "Fill",
        STROKE: "Stroke",
        SHADING: "Shading"
      };
      function G(h, e) {
        if (!e) return;
        const n = e[2] - e[0], f = e[3] - e[1], o = new Path2D();
        o.rect(e[0], e[1], n, f), h.clip(o);
      }
      class P {
        constructor() {
          this.constructor === P && (0, w.unreachable)("Cannot initialize BaseShadingPattern.");
        }
        getPattern() {
          (0, w.unreachable)("Abstract method `getPattern` called.");
        }
      }
      class C extends P {
        constructor(e) {
          super(), this._type = e[1], this._bbox = e[2], this._colorStops = e[3], this._p0 = e[4], this._p1 = e[5], this._r0 = e[6], this._r1 = e[7], this.matrix = null;
        }
        _createGradient(e) {
          let n;
          this._type === "axial" ? n = e.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (n = e.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
          for (const f of this._colorStops) n.addColorStop(f[0], f[1]);
          return n;
        }
        getPattern(e, n, f, o) {
          let a;
          if (o === _.STROKE || o === _.FILL) {
            const d = n.current.getClippedPathBoundingBox(o, (0, z.getCurrentTransform)(e)) || [
              0,
              0,
              0,
              0
            ], A = Math.ceil(d[2] - d[0]) || 1, x = Math.ceil(d[3] - d[1]) || 1, k = n.cachedCanvases.getCanvas("pattern", A, x, true), R = k.context;
            R.clearRect(0, 0, R.canvas.width, R.canvas.height), R.beginPath(), R.rect(0, 0, R.canvas.width, R.canvas.height), R.translate(-d[0], -d[1]), f = w.Util.transform(f, [
              1,
              0,
              0,
              1,
              d[0],
              d[1]
            ]), R.transform(...n.baseTransform), this.matrix && R.transform(...this.matrix), G(R, this._bbox), R.fillStyle = this._createGradient(R), R.fill(), a = e.createPattern(k.canvas, "no-repeat");
            const D = new DOMMatrix(f);
            a.setTransform(D);
          } else G(e, this._bbox), a = this._createGradient(e);
          return a;
        }
      }
      function E(h, e, n, f, o, a, d, A) {
        const x = e.coords, k = e.colors, R = h.data, D = h.width * 4;
        let I;
        x[n + 1] > x[f + 1] && (I = n, n = f, f = I, I = a, a = d, d = I), x[f + 1] > x[o + 1] && (I = f, f = o, o = I, I = d, d = A, A = I), x[n + 1] > x[f + 1] && (I = n, n = f, f = I, I = a, a = d, d = I);
        const F = (x[n] + e.offsetX) * e.scaleX, T = (x[n + 1] + e.offsetY) * e.scaleY, U = (x[f] + e.offsetX) * e.scaleX, K = (x[f + 1] + e.offsetY) * e.scaleY, X = (x[o] + e.offsetX) * e.scaleX, W = (x[o + 1] + e.offsetY) * e.scaleY;
        if (T >= W) return;
        const rt = k[a], J = k[a + 1], Q = k[a + 2], it = k[d], ht = k[d + 1], gt = k[d + 2], bt = k[A], At = k[A + 1], mt = k[A + 2], Ct = Math.round(T), St = Math.round(W);
        let Tt, vt, xt, kt, Lt, _t, Ht, Mt;
        for (let Et = Ct; Et <= St; Et++) {
          if (Et < K) {
            const yt = Et < T ? 0 : (T - Et) / (T - K);
            Tt = F - (F - U) * yt, vt = rt - (rt - it) * yt, xt = J - (J - ht) * yt, kt = Q - (Q - gt) * yt;
          } else {
            let yt;
            Et > W ? yt = 1 : K === W ? yt = 0 : yt = (K - Et) / (K - W), Tt = U - (U - X) * yt, vt = it - (it - bt) * yt, xt = ht - (ht - At) * yt, kt = gt - (gt - mt) * yt;
          }
          let wt;
          Et < T ? wt = 0 : Et > W ? wt = 1 : wt = (T - Et) / (T - W), Lt = F - (F - X) * wt, _t = rt - (rt - bt) * wt, Ht = J - (J - At) * wt, Mt = Q - (Q - mt) * wt;
          const Bt = Math.round(Math.min(Tt, Lt)), Dt = Math.round(Math.max(Tt, Lt));
          let It = D * Et + Bt * 4;
          for (let yt = Bt; yt <= Dt; yt++) wt = (Tt - yt) / (Tt - Lt), wt < 0 ? wt = 0 : wt > 1 && (wt = 1), R[It++] = vt - (vt - _t) * wt | 0, R[It++] = xt - (xt - Ht) * wt | 0, R[It++] = kt - (kt - Mt) * wt | 0, R[It++] = 255;
        }
      }
      function v(h, e, n) {
        const f = e.coords, o = e.colors;
        let a, d;
        switch (e.type) {
          case "lattice":
            const A = e.verticesPerRow, x = Math.floor(f.length / A) - 1, k = A - 1;
            for (a = 0; a < x; a++) {
              let R = a * A;
              for (let D = 0; D < k; D++, R++) E(h, n, f[R], f[R + 1], f[R + A], o[R], o[R + 1], o[R + A]), E(h, n, f[R + A + 1], f[R + 1], f[R + A], o[R + A + 1], o[R + 1], o[R + A]);
            }
            break;
          case "triangles":
            for (a = 0, d = f.length; a < d; a += 3) E(h, n, f[a], f[a + 1], f[a + 2], o[a], o[a + 1], o[a + 2]);
            break;
          default:
            throw new Error("illegal figure");
        }
      }
      class r extends P {
        constructor(e) {
          super(), this._coords = e[2], this._colors = e[3], this._figures = e[4], this._bounds = e[5], this._bbox = e[7], this._background = e[8], this.matrix = null;
        }
        _createMeshCanvas(e, n, f) {
          const A = Math.floor(this._bounds[0]), x = Math.floor(this._bounds[1]), k = Math.ceil(this._bounds[2]) - A, R = Math.ceil(this._bounds[3]) - x, D = Math.min(Math.ceil(Math.abs(k * e[0] * 1.1)), 3e3), I = Math.min(Math.ceil(Math.abs(R * e[1] * 1.1)), 3e3), F = k / D, T = R / I, U = {
            coords: this._coords,
            colors: this._colors,
            offsetX: -A,
            offsetY: -x,
            scaleX: 1 / F,
            scaleY: 1 / T
          }, K = D + 2 * 2, X = I + 2 * 2, W = f.getCanvas("mesh", K, X, false), rt = W.context, J = rt.createImageData(D, I);
          if (n) {
            const it = J.data;
            for (let ht = 0, gt = it.length; ht < gt; ht += 4) it[ht] = n[0], it[ht + 1] = n[1], it[ht + 2] = n[2], it[ht + 3] = 255;
          }
          for (const it of this._figures) v(J, it, U);
          return rt.putImageData(J, 2, 2), {
            canvas: W.canvas,
            offsetX: A - 2 * F,
            offsetY: x - 2 * T,
            scaleX: F,
            scaleY: T
          };
        }
        getPattern(e, n, f, o) {
          G(e, this._bbox);
          let a;
          if (o === _.SHADING) a = w.Util.singularValueDecompose2dScale((0, z.getCurrentTransform)(e));
          else if (a = w.Util.singularValueDecompose2dScale(n.baseTransform), this.matrix) {
            const A = w.Util.singularValueDecompose2dScale(this.matrix);
            a = [
              a[0] * A[0],
              a[1] * A[1]
            ];
          }
          const d = this._createMeshCanvas(a, o === _.SHADING ? null : this._background, n.cachedCanvases);
          return o !== _.SHADING && (e.setTransform(...n.baseTransform), this.matrix && e.transform(...this.matrix)), e.translate(d.offsetX, d.offsetY), e.scale(d.scaleX, d.scaleY), e.createPattern(d.canvas, "no-repeat");
        }
      }
      class c extends P {
        getPattern() {
          return "hotpink";
        }
      }
      function l(h) {
        switch (h[0]) {
          case "RadialAxial":
            return new C(h);
          case "Mesh":
            return new r(h);
          case "Dummy":
            return new c();
        }
        throw new Error(`Unknown IR type: ${h[0]}`);
      }
      const b = {
        COLORED: 1,
        UNCOLORED: 2
      };
      const _s = class _s {
        constructor(e, n, f, o, a) {
          this.operatorList = e[2], this.matrix = e[3] || [
            1,
            0,
            0,
            1,
            0,
            0
          ], this.bbox = e[4], this.xstep = e[5], this.ystep = e[6], this.paintType = e[7], this.tilingType = e[8], this.color = n, this.ctx = f, this.canvasGraphicsFactory = o, this.baseTransform = a;
        }
        createPatternCanvas(e) {
          const n = this.operatorList, f = this.bbox, o = this.xstep, a = this.ystep, d = this.paintType, A = this.tilingType, x = this.color, k = this.canvasGraphicsFactory;
          (0, w.info)("TilingType: " + A);
          const R = f[0], D = f[1], I = f[2], F = f[3], T = w.Util.singularValueDecompose2dScale(this.matrix), U = w.Util.singularValueDecompose2dScale(this.baseTransform), K = [
            T[0] * U[0],
            T[1] * U[1]
          ], X = this.getSizeAndScale(o, this.ctx.canvas.width, K[0]), W = this.getSizeAndScale(a, this.ctx.canvas.height, K[1]), rt = e.cachedCanvases.getCanvas("pattern", X.size, W.size, true), J = rt.context, Q = k.createCanvasGraphics(J);
          Q.groupLevel = e.groupLevel, this.setFillAndStrokeStyleToContext(Q, d, x);
          let it = R, ht = D, gt = I, bt = F;
          return R < 0 && (it = 0, gt += Math.abs(R)), D < 0 && (ht = 0, bt += Math.abs(D)), J.translate(-(X.scale * it), -(W.scale * ht)), Q.transform(X.scale, 0, 0, W.scale, 0, 0), J.save(), this.clipBbox(Q, it, ht, gt, bt), Q.baseTransform = (0, z.getCurrentTransform)(Q.ctx), Q.executeOperatorList(n), Q.endDrawing(), {
            canvas: rt.canvas,
            scaleX: X.scale,
            scaleY: W.scale,
            offsetX: it,
            offsetY: ht
          };
        }
        getSizeAndScale(e, n, f) {
          e = Math.abs(e);
          const o = Math.max(_s.MAX_PATTERN_SIZE, n);
          let a = Math.ceil(e * f);
          return a >= o ? a = o : f = a / e, {
            scale: f,
            size: a
          };
        }
        clipBbox(e, n, f, o, a) {
          const d = o - n, A = a - f;
          e.ctx.rect(n, f, d, A), e.current.updateRectMinMax((0, z.getCurrentTransform)(e.ctx), [
            n,
            f,
            o,
            a
          ]), e.clip(), e.endPath();
        }
        setFillAndStrokeStyleToContext(e, n, f) {
          const o = e.ctx, a = e.current;
          switch (n) {
            case b.COLORED:
              const d = this.ctx;
              o.fillStyle = d.fillStyle, o.strokeStyle = d.strokeStyle, a.fillColor = d.fillStyle, a.strokeColor = d.strokeStyle;
              break;
            case b.UNCOLORED:
              const A = w.Util.makeHexColor(f[0], f[1], f[2]);
              o.fillStyle = A, o.strokeStyle = A, a.fillColor = A, a.strokeColor = A;
              break;
            default:
              throw new w.FormatError(`Unsupported paint type: ${n}`);
          }
        }
        getPattern(e, n, f, o) {
          let a = f;
          o !== _.SHADING && (a = w.Util.transform(a, n.baseTransform), this.matrix && (a = w.Util.transform(a, this.matrix)));
          const d = this.createPatternCanvas(n);
          let A = new DOMMatrix(a);
          A = A.translate(d.offsetX, d.offsetY), A = A.scale(1 / d.scaleX, 1 / d.scaleY);
          const x = e.createPattern(d.canvas, "repeat");
          return x.setTransform(A), x;
        }
      };
      __publicField(_s, "MAX_PATTERN_SIZE", 3e3);
      let s = _s;
      function g({ src: h, srcPos: e = 0, dest: n, width: f, height: o, nonBlackColor: a = 4294967295, inverseDecode: d = false }) {
        const A = w.FeatureTest.isLittleEndian ? 4278190080 : 255, [x, k] = d ? [
          a,
          A
        ] : [
          A,
          a
        ], R = f >> 3, D = f & 7, I = h.length;
        n = new Uint32Array(n.buffer);
        let F = 0;
        for (let T = 0; T < o; T++) {
          for (const K = e + R; e < K; e++) {
            const X = e < I ? h[e] : 255;
            n[F++] = X & 128 ? k : x, n[F++] = X & 64 ? k : x, n[F++] = X & 32 ? k : x, n[F++] = X & 16 ? k : x, n[F++] = X & 8 ? k : x, n[F++] = X & 4 ? k : x, n[F++] = X & 2 ? k : x, n[F++] = X & 1 ? k : x;
          }
          if (D === 0) continue;
          const U = e < I ? h[e++] : 255;
          for (let K = 0; K < D; K++) n[F++] = U & 1 << 7 - K ? k : x;
        }
        return {
          srcPos: e,
          destPos: F
        };
      }
      const t = 16, i = 100, u = 4096, p = 15, y = 10, S = 1e3, L = 16;
      function M(h, e) {
        if (h._removeMirroring) throw new Error("Context is already forwarding operations.");
        h.__originalSave = h.save, h.__originalRestore = h.restore, h.__originalRotate = h.rotate, h.__originalScale = h.scale, h.__originalTranslate = h.translate, h.__originalTransform = h.transform, h.__originalSetTransform = h.setTransform, h.__originalResetTransform = h.resetTransform, h.__originalClip = h.clip, h.__originalMoveTo = h.moveTo, h.__originalLineTo = h.lineTo, h.__originalBezierCurveTo = h.bezierCurveTo, h.__originalRect = h.rect, h.__originalClosePath = h.closePath, h.__originalBeginPath = h.beginPath, h._removeMirroring = () => {
          h.save = h.__originalSave, h.restore = h.__originalRestore, h.rotate = h.__originalRotate, h.scale = h.__originalScale, h.translate = h.__originalTranslate, h.transform = h.__originalTransform, h.setTransform = h.__originalSetTransform, h.resetTransform = h.__originalResetTransform, h.clip = h.__originalClip, h.moveTo = h.__originalMoveTo, h.lineTo = h.__originalLineTo, h.bezierCurveTo = h.__originalBezierCurveTo, h.rect = h.__originalRect, h.closePath = h.__originalClosePath, h.beginPath = h.__originalBeginPath, delete h._removeMirroring;
        }, h.save = function() {
          e.save(), this.__originalSave();
        }, h.restore = function() {
          e.restore(), this.__originalRestore();
        }, h.translate = function(f, o) {
          e.translate(f, o), this.__originalTranslate(f, o);
        }, h.scale = function(f, o) {
          e.scale(f, o), this.__originalScale(f, o);
        }, h.transform = function(f, o, a, d, A, x) {
          e.transform(f, o, a, d, A, x), this.__originalTransform(f, o, a, d, A, x);
        }, h.setTransform = function(f, o, a, d, A, x) {
          e.setTransform(f, o, a, d, A, x), this.__originalSetTransform(f, o, a, d, A, x);
        }, h.resetTransform = function() {
          e.resetTransform(), this.__originalResetTransform();
        }, h.rotate = function(f) {
          e.rotate(f), this.__originalRotate(f);
        }, h.clip = function(f) {
          e.clip(f), this.__originalClip(f);
        }, h.moveTo = function(n, f) {
          e.moveTo(n, f), this.__originalMoveTo(n, f);
        }, h.lineTo = function(n, f) {
          e.lineTo(n, f), this.__originalLineTo(n, f);
        }, h.bezierCurveTo = function(n, f, o, a, d, A) {
          e.bezierCurveTo(n, f, o, a, d, A), this.__originalBezierCurveTo(n, f, o, a, d, A);
        }, h.rect = function(n, f, o, a) {
          e.rect(n, f, o, a), this.__originalRect(n, f, o, a);
        }, h.closePath = function() {
          e.closePath(), this.__originalClosePath();
        }, h.beginPath = function() {
          e.beginPath(), this.__originalBeginPath();
        };
      }
      class N {
        constructor(e) {
          this.canvasFactory = e, this.cache = /* @__PURE__ */ Object.create(null);
        }
        getCanvas(e, n, f) {
          let o;
          return this.cache[e] !== void 0 ? (o = this.cache[e], this.canvasFactory.reset(o, n, f)) : (o = this.canvasFactory.create(n, f), this.cache[e] = o), o;
        }
        delete(e) {
          delete this.cache[e];
        }
        clear() {
          for (const e in this.cache) {
            const n = this.cache[e];
            this.canvasFactory.destroy(n), delete this.cache[e];
          }
        }
      }
      function H(h, e, n, f, o, a, d, A, x, k) {
        const [R, D, I, F, T, U] = (0, z.getCurrentTransform)(h);
        if (D === 0 && I === 0) {
          const W = d * R + T, rt = Math.round(W), J = A * F + U, Q = Math.round(J), it = (d + x) * R + T, ht = Math.abs(Math.round(it) - rt) || 1, gt = (A + k) * F + U, bt = Math.abs(Math.round(gt) - Q) || 1;
          return h.setTransform(Math.sign(R), 0, 0, Math.sign(F), rt, Q), h.drawImage(e, n, f, o, a, 0, 0, ht, bt), h.setTransform(R, D, I, F, T, U), [
            ht,
            bt
          ];
        }
        if (R === 0 && F === 0) {
          const W = A * I + T, rt = Math.round(W), J = d * D + U, Q = Math.round(J), it = (A + k) * I + T, ht = Math.abs(Math.round(it) - rt) || 1, gt = (d + x) * D + U, bt = Math.abs(Math.round(gt) - Q) || 1;
          return h.setTransform(0, Math.sign(D), Math.sign(I), 0, rt, Q), h.drawImage(e, n, f, o, a, 0, 0, bt, ht), h.setTransform(R, D, I, F, T, U), [
            bt,
            ht
          ];
        }
        h.drawImage(e, n, f, o, a, d, A, x, k);
        const K = Math.hypot(R, D), X = Math.hypot(I, F);
        return [
          K * x,
          X * k
        ];
      }
      function B(h) {
        const { width: e, height: n } = h;
        if (e > S || n > S) return null;
        const f = 1e3, o = new Uint8Array([
          0,
          2,
          4,
          0,
          1,
          0,
          5,
          4,
          8,
          10,
          0,
          8,
          0,
          2,
          1,
          0
        ]), a = e + 1;
        let d = new Uint8Array(a * (n + 1)), A, x, k;
        const R = e + 7 & -8;
        let D = new Uint8Array(R * n), I = 0;
        for (const X of h.data) {
          let W = 128;
          for (; W > 0; ) D[I++] = X & W ? 0 : 255, W >>= 1;
        }
        let F = 0;
        for (I = 0, D[I] !== 0 && (d[0] = 1, ++F), x = 1; x < e; x++) D[I] !== D[I + 1] && (d[x] = D[I] ? 2 : 1, ++F), I++;
        for (D[I] !== 0 && (d[x] = 2, ++F), A = 1; A < n; A++) {
          I = A * R, k = A * a, D[I - R] !== D[I] && (d[k] = D[I] ? 1 : 8, ++F);
          let X = (D[I] ? 4 : 0) + (D[I - R] ? 8 : 0);
          for (x = 1; x < e; x++) X = (X >> 2) + (D[I + 1] ? 4 : 0) + (D[I - R + 1] ? 8 : 0), o[X] && (d[k + x] = o[X], ++F), I++;
          if (D[I - R] !== D[I] && (d[k + x] = D[I] ? 2 : 4, ++F), F > f) return null;
        }
        for (I = R * (n - 1), k = A * a, D[I] !== 0 && (d[k] = 8, ++F), x = 1; x < e; x++) D[I] !== D[I + 1] && (d[k + x] = D[I] ? 4 : 8, ++F), I++;
        if (D[I] !== 0 && (d[k + x] = 4, ++F), F > f) return null;
        const T = new Int32Array([
          0,
          a,
          -1,
          0,
          -a,
          0,
          0,
          0,
          1
        ]), U = new Path2D();
        for (A = 0; F && A <= n; A++) {
          let X = A * a;
          const W = X + e;
          for (; X < W && !d[X]; ) X++;
          if (X === W) continue;
          U.moveTo(X % a, A);
          const rt = X;
          let J = d[X];
          do {
            const Q = T[J];
            do
              X += Q;
            while (!d[X]);
            const it = d[X];
            it !== 5 && it !== 10 ? (J = it, d[X] = 0) : (J = it & 51 * J >> 4, d[X] &= J >> 2 | J << 2), U.lineTo(X % a, X / a | 0), d[X] || --F;
          } while (rt !== X);
          --A;
        }
        return D = null, d = null, function(X) {
          X.save(), X.scale(1 / e, -1 / n), X.translate(0, -n), X.fill(U), X.beginPath(), X.restore();
        };
      }
      class q {
        constructor(e, n) {
          this.alphaIsShape = false, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = w.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = w.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = w.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = false, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([
            0,
            0,
            e,
            n
          ]);
        }
        clone() {
          const e = Object.create(this);
          return e.clipBox = this.clipBox.slice(), e;
        }
        setCurrentPoint(e, n) {
          this.x = e, this.y = n;
        }
        updatePathMinMax(e, n, f) {
          [n, f] = w.Util.applyTransform([
            n,
            f
          ], e), this.minX = Math.min(this.minX, n), this.minY = Math.min(this.minY, f), this.maxX = Math.max(this.maxX, n), this.maxY = Math.max(this.maxY, f);
        }
        updateRectMinMax(e, n) {
          const f = w.Util.applyTransform(n, e), o = w.Util.applyTransform(n.slice(2), e), a = w.Util.applyTransform([
            n[0],
            n[3]
          ], e), d = w.Util.applyTransform([
            n[2],
            n[1]
          ], e);
          this.minX = Math.min(this.minX, f[0], o[0], a[0], d[0]), this.minY = Math.min(this.minY, f[1], o[1], a[1], d[1]), this.maxX = Math.max(this.maxX, f[0], o[0], a[0], d[0]), this.maxY = Math.max(this.maxY, f[1], o[1], a[1], d[1]);
        }
        updateScalingPathMinMax(e, n) {
          w.Util.scaleMinMax(e, n), this.minX = Math.min(this.minX, n[0]), this.minY = Math.min(this.minY, n[1]), this.maxX = Math.max(this.maxX, n[2]), this.maxY = Math.max(this.maxY, n[3]);
        }
        updateCurvePathMinMax(e, n, f, o, a, d, A, x, k, R) {
          const D = w.Util.bezierBoundingBox(n, f, o, a, d, A, x, k, R);
          R || this.updateRectMinMax(e, D);
        }
        getPathBoundingBox(e = _.FILL, n = null) {
          const f = [
            this.minX,
            this.minY,
            this.maxX,
            this.maxY
          ];
          if (e === _.STROKE) {
            n || (0, w.unreachable)("Stroke bounding box must include transform.");
            const o = w.Util.singularValueDecompose2dScale(n), a = o[0] * this.lineWidth / 2, d = o[1] * this.lineWidth / 2;
            f[0] -= a, f[1] -= d, f[2] += a, f[3] += d;
          }
          return f;
        }
        updateClipFromPath() {
          const e = w.Util.intersect(this.clipBox, this.getPathBoundingBox());
          this.startNewPathAndClipBox(e || [
            0,
            0,
            0,
            0
          ]);
        }
        isEmptyClip() {
          return this.minX === 1 / 0;
        }
        startNewPathAndClipBox(e) {
          this.clipBox = e, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
        }
        getClippedPathBoundingBox(e = _.FILL, n = null) {
          return w.Util.intersect(this.clipBox, this.getPathBoundingBox(e, n));
        }
      }
      function nt(h, e) {
        if (typeof ImageData < "u" && e instanceof ImageData) {
          h.putImageData(e, 0, 0);
          return;
        }
        const n = e.height, f = e.width, o = n % L, a = (n - o) / L, d = o === 0 ? a : a + 1, A = h.createImageData(f, L);
        let x = 0, k;
        const R = e.data, D = A.data;
        let I, F, T, U;
        if (e.kind === w.ImageKind.GRAYSCALE_1BPP) {
          const K = R.byteLength, X = new Uint32Array(D.buffer, 0, D.byteLength >> 2), W = X.length, rt = f + 7 >> 3, J = 4294967295, Q = w.FeatureTest.isLittleEndian ? 4278190080 : 255;
          for (I = 0; I < d; I++) {
            for (T = I < a ? L : o, k = 0, F = 0; F < T; F++) {
              const it = K - x;
              let ht = 0;
              const gt = it > rt ? f : it * 8 - 7, bt = gt & -8;
              let At = 0, mt = 0;
              for (; ht < bt; ht += 8) mt = R[x++], X[k++] = mt & 128 ? J : Q, X[k++] = mt & 64 ? J : Q, X[k++] = mt & 32 ? J : Q, X[k++] = mt & 16 ? J : Q, X[k++] = mt & 8 ? J : Q, X[k++] = mt & 4 ? J : Q, X[k++] = mt & 2 ? J : Q, X[k++] = mt & 1 ? J : Q;
              for (; ht < gt; ht++) At === 0 && (mt = R[x++], At = 128), X[k++] = mt & At ? J : Q, At >>= 1;
            }
            for (; k < W; ) X[k++] = 0;
            h.putImageData(A, 0, I * L);
          }
        } else if (e.kind === w.ImageKind.RGBA_32BPP) {
          for (F = 0, U = f * L * 4, I = 0; I < a; I++) D.set(R.subarray(x, x + U)), x += U, h.putImageData(A, 0, F), F += L;
          I < d && (U = f * o * 4, D.set(R.subarray(x, x + U)), h.putImageData(A, 0, F));
        } else if (e.kind === w.ImageKind.RGB_24BPP) for (T = L, U = f * T, I = 0; I < d; I++) {
          for (I >= a && (T = o, U = f * T), k = 0, F = U; F--; ) D[k++] = R[x++], D[k++] = R[x++], D[k++] = R[x++], D[k++] = 255;
          h.putImageData(A, 0, I * L);
        }
        else throw new Error(`bad image kind: ${e.kind}`);
      }
      function j(h, e) {
        if (e.bitmap) {
          h.drawImage(e.bitmap, 0, 0);
          return;
        }
        const n = e.height, f = e.width, o = n % L, a = (n - o) / L, d = o === 0 ? a : a + 1, A = h.createImageData(f, L);
        let x = 0;
        const k = e.data, R = A.data;
        for (let D = 0; D < d; D++) {
          const I = D < a ? L : o;
          ({ srcPos: x } = g({
            src: k,
            srcPos: x,
            dest: R,
            width: f,
            height: I,
            nonBlackColor: 0
          })), h.putImageData(A, 0, D * L);
        }
      }
      function O(h, e) {
        const n = [
          "strokeStyle",
          "fillStyle",
          "fillRule",
          "globalAlpha",
          "lineWidth",
          "lineCap",
          "lineJoin",
          "miterLimit",
          "globalCompositeOperation",
          "font",
          "filter"
        ];
        for (const f of n) h[f] !== void 0 && (e[f] = h[f]);
        h.setLineDash !== void 0 && (e.setLineDash(h.getLineDash()), e.lineDashOffset = h.lineDashOffset);
      }
      function V(h) {
        if (h.strokeStyle = h.fillStyle = "#000000", h.fillRule = "nonzero", h.globalAlpha = 1, h.lineWidth = 1, h.lineCap = "butt", h.lineJoin = "miter", h.miterLimit = 10, h.globalCompositeOperation = "source-over", h.font = "10px sans-serif", h.setLineDash !== void 0 && (h.setLineDash([]), h.lineDashOffset = 0), !w.isNodeJS) {
          const { filter: e } = h;
          e !== "none" && e !== "" && (h.filter = "none");
        }
      }
      function Y(h, e, n, f) {
        const o = h.length;
        for (let a = 3; a < o; a += 4) {
          const d = h[a];
          if (d === 0) h[a - 3] = e, h[a - 2] = n, h[a - 1] = f;
          else if (d < 255) {
            const A = 255 - d;
            h[a - 3] = h[a - 3] * d + e * A >> 8, h[a - 2] = h[a - 2] * d + n * A >> 8, h[a - 1] = h[a - 1] * d + f * A >> 8;
          }
        }
      }
      function tt(h, e, n) {
        const f = h.length, o = 1 / 255;
        for (let a = 3; a < f; a += 4) {
          const d = n ? n[h[a]] : h[a];
          e[a] = e[a] * d * o | 0;
        }
      }
      function Z(h, e, n) {
        const f = h.length;
        for (let o = 3; o < f; o += 4) {
          const a = h[o - 3] * 77 + h[o - 2] * 152 + h[o - 1] * 28;
          e[o] = n ? e[o] * n[a >> 8] >> 8 : e[o] * a >> 16;
        }
      }
      function at(h, e, n, f, o, a, d, A, x, k, R) {
        const D = !!a, I = D ? a[0] : 0, F = D ? a[1] : 0, T = D ? a[2] : 0, U = o === "Luminosity" ? Z : tt, X = Math.min(f, Math.ceil(1048576 / n));
        for (let W = 0; W < f; W += X) {
          const rt = Math.min(X, f - W), J = h.getImageData(A - k, W + (x - R), n, rt), Q = e.getImageData(A, W + x, n, rt);
          D && Y(J.data, I, F, T), U(J.data, Q.data, d), e.putImageData(Q, A, W + x);
        }
      }
      function lt(h, e, n, f) {
        const o = f[0], a = f[1], d = f[2] - o, A = f[3] - a;
        d === 0 || A === 0 || (at(e.context, n, d, A, e.subtype, e.backdrop, e.transferMap, o, a, e.offsetX, e.offsetY), h.save(), h.globalAlpha = 1, h.globalCompositeOperation = "source-over", h.setTransform(1, 0, 0, 1, 0, 0), h.drawImage(n.canvas, 0, 0), h.restore());
      }
      function pt(h, e) {
        if (e) return true;
        const n = w.Util.singularValueDecompose2dScale(h);
        n[0] = Math.fround(n[0]), n[1] = Math.fround(n[1]);
        const f = Math.fround((globalThis.devicePixelRatio || 1) * z.PixelsPerInch.PDF_TO_CSS_UNITS);
        return n[0] <= f && n[1] <= f;
      }
      const dt = [
        "butt",
        "round",
        "square"
      ], ot = [
        "miter",
        "round",
        "bevel"
      ], ut = {}, et = {};
      const _m = class _m {
        constructor(e, n, f, o, a, { optionalContentConfig: d, markedContentStack: A = null }, x, k) {
          __privateAdd(this, _m_instances);
          this.ctx = e, this.current = new q(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = false, this.res = null, this.xobjs = null, this.commonObjs = n, this.objs = f, this.canvasFactory = o, this.filterFactory = a, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = true, this.markedContentStack = A || [], this.optionalContentConfig = d, this.cachedCanvases = new N(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = x, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = k, this._cachedScaleForStroking = [
            -1,
            0
          ], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
        }
        getObject(e, n = null) {
          return typeof e == "string" ? e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e) : n;
        }
        beginDrawing({ transform: e, viewport: n, transparency: f = false, background: o = null }) {
          const a = this.ctx.canvas.width, d = this.ctx.canvas.height, A = this.ctx.fillStyle;
          if (this.ctx.fillStyle = o || "#ffffff", this.ctx.fillRect(0, 0, a, d), this.ctx.fillStyle = A, f) {
            const x = this.cachedCanvases.getCanvas("transparent", a, d);
            this.compositeCtx = this.ctx, this.transparentCanvas = x.canvas, this.ctx = x.context, this.ctx.save(), this.ctx.transform(...(0, z.getCurrentTransform)(this.compositeCtx));
          }
          this.ctx.save(), V(this.ctx), e && (this.ctx.transform(...e), this.outputScaleX = e[0], this.outputScaleY = e[0]), this.ctx.transform(...n.transform), this.viewportScale = n.scale, this.baseTransform = (0, z.getCurrentTransform)(this.ctx);
        }
        executeOperatorList(e, n, f, o) {
          const a = e.argsArray, d = e.fnArray;
          let A = n || 0;
          const x = a.length;
          if (x === A) return A;
          const k = x - A > y && typeof f == "function", R = k ? Date.now() + p : 0;
          let D = 0;
          const I = this.commonObjs, F = this.objs;
          let T;
          for (; ; ) {
            if (o !== void 0 && A === o.nextBreakPoint) return o.breakIt(A, f), A;
            if (T = d[A], T !== w.OPS.dependency) this[T].apply(this, a[A]);
            else for (const U of a[A]) {
              const K = U.startsWith("g_") ? I : F;
              if (!K.has(U)) return K.get(U, f), A;
            }
            if (A++, A === x) return A;
            if (k && ++D > y) {
              if (Date.now() > R) return f(), A;
              D = 0;
            }
          }
        }
        endDrawing() {
          __privateMethod(this, _m_instances, t_fn).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
          for (const e of this._cachedBitmapsMap.values()) {
            for (const n of e.values()) typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement && (n.width = n.height = 0);
            e.clear();
          }
          this._cachedBitmapsMap.clear(), __privateMethod(this, _m_instances, e_fn).call(this);
        }
        _scaleImage(e, n) {
          const f = e.width, o = e.height;
          let a = Math.max(Math.hypot(n[0], n[1]), 1), d = Math.max(Math.hypot(n[2], n[3]), 1), A = f, x = o, k = "prescale1", R, D;
          for (; a > 2 && A > 1 || d > 2 && x > 1; ) {
            let I = A, F = x;
            a > 2 && A > 1 && (I = A >= 16384 ? Math.floor(A / 2) - 1 || 1 : Math.ceil(A / 2), a /= A / I), d > 2 && x > 1 && (F = x >= 16384 ? Math.floor(x / 2) - 1 || 1 : Math.ceil(x) / 2, d /= x / F), R = this.cachedCanvases.getCanvas(k, I, F), D = R.context, D.clearRect(0, 0, I, F), D.drawImage(e, 0, 0, A, x, 0, 0, I, F), e = R.canvas, A = I, x = F, k = k === "prescale1" ? "prescale2" : "prescale1";
          }
          return {
            img: e,
            paintWidth: A,
            paintHeight: x
          };
        }
        _createMaskCanvas(e) {
          const n = this.ctx, { width: f, height: o } = e, a = this.current.fillColor, d = this.current.patternFill, A = (0, z.getCurrentTransform)(n);
          let x, k, R, D;
          if ((e.bitmap || e.data) && e.count > 1) {
            const gt = e.bitmap || e.data.buffer;
            k = JSON.stringify(d ? A : [
              A.slice(0, 4),
              a
            ]), x = this._cachedBitmapsMap.get(gt), x || (x = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(gt, x));
            const bt = x.get(k);
            if (bt && !d) {
              const At = Math.round(Math.min(A[0], A[2]) + A[4]), mt = Math.round(Math.min(A[1], A[3]) + A[5]);
              return {
                canvas: bt,
                offsetX: At,
                offsetY: mt
              };
            }
            R = bt;
          }
          R || (D = this.cachedCanvases.getCanvas("maskCanvas", f, o), j(D.context, e));
          let I = w.Util.transform(A, [
            1 / f,
            0,
            0,
            -1 / o,
            0,
            0
          ]);
          I = w.Util.transform(I, [
            1,
            0,
            0,
            1,
            0,
            -o
          ]);
          const [F, T, U, K] = w.Util.getAxialAlignedBoundingBox([
            0,
            0,
            f,
            o
          ], I), X = Math.round(U - F) || 1, W = Math.round(K - T) || 1, rt = this.cachedCanvases.getCanvas("fillCanvas", X, W), J = rt.context, Q = F, it = T;
          J.translate(-Q, -it), J.transform(...I), R || (R = this._scaleImage(D.canvas, (0, z.getCurrentTransformInverse)(J)), R = R.img, x && d && x.set(k, R)), J.imageSmoothingEnabled = pt((0, z.getCurrentTransform)(J), e.interpolate), H(J, R, 0, 0, R.width, R.height, 0, 0, f, o), J.globalCompositeOperation = "source-in";
          const ht = w.Util.transform((0, z.getCurrentTransformInverse)(J), [
            1,
            0,
            0,
            1,
            -Q,
            -it
          ]);
          return J.fillStyle = d ? a.getPattern(n, this, ht, _.FILL) : a, J.fillRect(0, 0, f, o), x && !d && (this.cachedCanvases.delete("fillCanvas"), x.set(k, rt.canvas)), {
            canvas: rt.canvas,
            offsetX: Math.round(Q),
            offsetY: Math.round(it)
          };
        }
        setLineWidth(e) {
          e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
        }
        setLineCap(e) {
          this.ctx.lineCap = dt[e];
        }
        setLineJoin(e) {
          this.ctx.lineJoin = ot[e];
        }
        setMiterLimit(e) {
          this.ctx.miterLimit = e;
        }
        setDash(e, n) {
          const f = this.ctx;
          f.setLineDash !== void 0 && (f.setLineDash(e), f.lineDashOffset = n);
        }
        setRenderingIntent(e) {
        }
        setFlatness(e) {
        }
        setGState(e) {
          for (const [n, f] of e) switch (n) {
            case "LW":
              this.setLineWidth(f);
              break;
            case "LC":
              this.setLineCap(f);
              break;
            case "LJ":
              this.setLineJoin(f);
              break;
            case "ML":
              this.setMiterLimit(f);
              break;
            case "D":
              this.setDash(f[0], f[1]);
              break;
            case "RI":
              this.setRenderingIntent(f);
              break;
            case "FL":
              this.setFlatness(f);
              break;
            case "Font":
              this.setFont(f[0], f[1]);
              break;
            case "CA":
              this.current.strokeAlpha = f;
              break;
            case "ca":
              this.current.fillAlpha = f, this.ctx.globalAlpha = f;
              break;
            case "BM":
              this.ctx.globalCompositeOperation = f;
              break;
            case "SMask":
              this.current.activeSMask = f ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
              break;
            case "TR":
              this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(f);
              break;
          }
        }
        get inSMaskMode() {
          return !!this.suspendedCtx;
        }
        checkSMaskState() {
          const e = this.inSMaskMode;
          this.current.activeSMask && !e ? this.beginSMaskMode() : !this.current.activeSMask && e && this.endSMaskMode();
        }
        beginSMaskMode() {
          if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
          const e = this.ctx.canvas.width, n = this.ctx.canvas.height, f = "smaskGroupAt" + this.groupLevel, o = this.cachedCanvases.getCanvas(f, e, n);
          this.suspendedCtx = this.ctx, this.ctx = o.context;
          const a = this.ctx;
          a.setTransform(...(0, z.getCurrentTransform)(this.suspendedCtx)), O(this.suspendedCtx, a), M(a, this.suspendedCtx), this.setGState([
            [
              "BM",
              "source-over"
            ],
            [
              "ca",
              1
            ],
            [
              "CA",
              1
            ]
          ]);
        }
        endSMaskMode() {
          if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
          this.ctx._removeMirroring(), O(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
        }
        compose(e) {
          if (!this.current.activeSMask) return;
          e ? (e[0] = Math.floor(e[0]), e[1] = Math.floor(e[1]), e[2] = Math.ceil(e[2]), e[3] = Math.ceil(e[3])) : e = [
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
          ];
          const n = this.current.activeSMask, f = this.suspendedCtx;
          lt(f, n, this.ctx, e), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
        }
        save() {
          this.inSMaskMode ? (O(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
          const e = this.current;
          this.stateStack.push(e), this.current = e.clone();
        }
        restore() {
          this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), O(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
        }
        transform(e, n, f, o, a, d) {
          this.ctx.transform(e, n, f, o, a, d), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
        }
        constructPath(e, n, f) {
          const o = this.ctx, a = this.current;
          let d = a.x, A = a.y, x, k;
          const R = (0, z.getCurrentTransform)(o), D = R[0] === 0 && R[3] === 0 || R[1] === 0 && R[2] === 0, I = D ? f.slice(0) : null;
          for (let F = 0, T = 0, U = e.length; F < U; F++) switch (e[F] | 0) {
            case w.OPS.rectangle:
              d = n[T++], A = n[T++];
              const K = n[T++], X = n[T++], W = d + K, rt = A + X;
              o.moveTo(d, A), K === 0 || X === 0 ? o.lineTo(W, rt) : (o.lineTo(W, A), o.lineTo(W, rt), o.lineTo(d, rt)), D || a.updateRectMinMax(R, [
                d,
                A,
                W,
                rt
              ]), o.closePath();
              break;
            case w.OPS.moveTo:
              d = n[T++], A = n[T++], o.moveTo(d, A), D || a.updatePathMinMax(R, d, A);
              break;
            case w.OPS.lineTo:
              d = n[T++], A = n[T++], o.lineTo(d, A), D || a.updatePathMinMax(R, d, A);
              break;
            case w.OPS.curveTo:
              x = d, k = A, d = n[T + 4], A = n[T + 5], o.bezierCurveTo(n[T], n[T + 1], n[T + 2], n[T + 3], d, A), a.updateCurvePathMinMax(R, x, k, n[T], n[T + 1], n[T + 2], n[T + 3], d, A, I), T += 6;
              break;
            case w.OPS.curveTo2:
              x = d, k = A, o.bezierCurveTo(d, A, n[T], n[T + 1], n[T + 2], n[T + 3]), a.updateCurvePathMinMax(R, x, k, d, A, n[T], n[T + 1], n[T + 2], n[T + 3], I), d = n[T + 2], A = n[T + 3], T += 4;
              break;
            case w.OPS.curveTo3:
              x = d, k = A, d = n[T + 2], A = n[T + 3], o.bezierCurveTo(n[T], n[T + 1], d, A, d, A), a.updateCurvePathMinMax(R, x, k, n[T], n[T + 1], d, A, d, A, I), T += 4;
              break;
            case w.OPS.closePath:
              o.closePath();
              break;
          }
          D && a.updateScalingPathMinMax(R, I), a.setCurrentPoint(d, A);
        }
        closePath() {
          this.ctx.closePath();
        }
        stroke(e = true) {
          const n = this.ctx, f = this.current.strokeColor;
          n.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof f == "object" && (f == null ? void 0 : f.getPattern) ? (n.save(), n.strokeStyle = f.getPattern(n, this, (0, z.getCurrentTransformInverse)(n), _.STROKE), this.rescaleAndStroke(false), n.restore()) : this.rescaleAndStroke(true)), e && this.consumePath(this.current.getClippedPathBoundingBox()), n.globalAlpha = this.current.fillAlpha;
        }
        closeStroke() {
          this.closePath(), this.stroke();
        }
        fill(e = true) {
          const n = this.ctx, f = this.current.fillColor, o = this.current.patternFill;
          let a = false;
          o && (n.save(), n.fillStyle = f.getPattern(n, this, (0, z.getCurrentTransformInverse)(n), _.FILL), a = true);
          const d = this.current.getClippedPathBoundingBox();
          this.contentVisible && d !== null && (this.pendingEOFill ? (n.fill("evenodd"), this.pendingEOFill = false) : n.fill()), a && n.restore(), e && this.consumePath(d);
        }
        eoFill() {
          this.pendingEOFill = true, this.fill();
        }
        fillStroke() {
          this.fill(false), this.stroke(false), this.consumePath();
        }
        eoFillStroke() {
          this.pendingEOFill = true, this.fillStroke();
        }
        closeFillStroke() {
          this.closePath(), this.fillStroke();
        }
        closeEOFillStroke() {
          this.pendingEOFill = true, this.closePath(), this.fillStroke();
        }
        endPath() {
          this.consumePath();
        }
        clip() {
          this.pendingClip = ut;
        }
        eoClip() {
          this.pendingClip = et;
        }
        beginText() {
          this.current.textMatrix = w.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        endText() {
          const e = this.pendingTextPaths, n = this.ctx;
          if (e === void 0) {
            n.beginPath();
            return;
          }
          n.save(), n.beginPath();
          for (const f of e) n.setTransform(...f.transform), n.translate(f.x, f.y), f.addToPath(n, f.fontSize);
          n.restore(), n.clip(), n.beginPath(), delete this.pendingTextPaths;
        }
        setCharSpacing(e) {
          this.current.charSpacing = e;
        }
        setWordSpacing(e) {
          this.current.wordSpacing = e;
        }
        setHScale(e) {
          this.current.textHScale = e / 100;
        }
        setLeading(e) {
          this.current.leading = -e;
        }
        setFont(e, n) {
          var _a;
          const f = this.commonObjs.get(e), o = this.current;
          if (!f) throw new Error(`Can't find font for ${e}`);
          if (o.fontMatrix = f.fontMatrix || w.FONT_IDENTITY_MATRIX, (o.fontMatrix[0] === 0 || o.fontMatrix[3] === 0) && (0, w.warn)("Invalid font matrix for font " + e), n < 0 ? (n = -n, o.fontDirection = -1) : o.fontDirection = 1, this.current.font = f, this.current.fontSize = n, f.isType3Font) return;
          const a = f.loadedName || "sans-serif", d = ((_a = f.systemFontInfo) == null ? void 0 : _a.css) || `"${a}", ${f.fallbackName}`;
          let A = "normal";
          f.black ? A = "900" : f.bold && (A = "bold");
          const x = f.italic ? "italic" : "normal";
          let k = n;
          n < t ? k = t : n > i && (k = i), this.current.fontSizeScale = n / k, this.ctx.font = `${x} ${A} ${k}px ${d}`;
        }
        setTextRenderingMode(e) {
          this.current.textRenderingMode = e;
        }
        setTextRise(e) {
          this.current.textRise = e;
        }
        moveText(e, n) {
          this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += n;
        }
        setLeadingMoveText(e, n) {
          this.setLeading(-n), this.moveText(e, n);
        }
        setTextMatrix(e, n, f, o, a, d) {
          this.current.textMatrix = [
            e,
            n,
            f,
            o,
            a,
            d
          ], this.current.textMatrixScale = Math.hypot(e, n), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        nextLine() {
          this.moveText(0, this.current.leading);
        }
        paintChar(e, n, f, o) {
          const a = this.ctx, d = this.current, A = d.font, x = d.textRenderingMode, k = d.fontSize / d.fontSizeScale, R = x & w.TextRenderingMode.FILL_STROKE_MASK, D = !!(x & w.TextRenderingMode.ADD_TO_PATH_FLAG), I = d.patternFill && !A.missingFile;
          let F;
          (A.disableFontFace || D || I) && (F = A.getPathGenerator(this.commonObjs, e)), A.disableFontFace || I ? (a.save(), a.translate(n, f), a.beginPath(), F(a, k), o && a.setTransform(...o), (R === w.TextRenderingMode.FILL || R === w.TextRenderingMode.FILL_STROKE) && a.fill(), (R === w.TextRenderingMode.STROKE || R === w.TextRenderingMode.FILL_STROKE) && a.stroke(), a.restore()) : ((R === w.TextRenderingMode.FILL || R === w.TextRenderingMode.FILL_STROKE) && a.fillText(e, n, f), (R === w.TextRenderingMode.STROKE || R === w.TextRenderingMode.FILL_STROKE) && a.strokeText(e, n, f)), D && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
            transform: (0, z.getCurrentTransform)(a),
            x: n,
            y: f,
            fontSize: k,
            addToPath: F
          });
        }
        get isFontSubpixelAAEnabled() {
          const { context: e } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
          e.scale(1.5, 1), e.fillText("I", 0, 10);
          const n = e.getImageData(0, 0, 10, 10).data;
          let f = false;
          for (let o = 3; o < n.length; o += 4) if (n[o] > 0 && n[o] < 255) {
            f = true;
            break;
          }
          return (0, w.shadow)(this, "isFontSubpixelAAEnabled", f);
        }
        showText(e) {
          const n = this.current, f = n.font;
          if (f.isType3Font) return this.showType3Text(e);
          const o = n.fontSize;
          if (o === 0) return;
          const a = this.ctx, d = n.fontSizeScale, A = n.charSpacing, x = n.wordSpacing, k = n.fontDirection, R = n.textHScale * k, D = e.length, I = f.vertical, F = I ? 1 : -1, T = f.defaultVMetrics, U = o * n.fontMatrix[0], K = n.textRenderingMode === w.TextRenderingMode.FILL && !f.disableFontFace && !n.patternFill;
          a.save(), a.transform(...n.textMatrix), a.translate(n.x, n.y + n.textRise), k > 0 ? a.scale(R, -1) : a.scale(R, 1);
          let X;
          if (n.patternFill) {
            a.save();
            const it = n.fillColor.getPattern(a, this, (0, z.getCurrentTransformInverse)(a), _.FILL);
            X = (0, z.getCurrentTransform)(a), a.restore(), a.fillStyle = it;
          }
          let W = n.lineWidth;
          const rt = n.textMatrixScale;
          if (rt === 0 || W === 0) {
            const it = n.textRenderingMode & w.TextRenderingMode.FILL_STROKE_MASK;
            (it === w.TextRenderingMode.STROKE || it === w.TextRenderingMode.FILL_STROKE) && (W = this.getSinglePixelWidth());
          } else W /= rt;
          if (d !== 1 && (a.scale(d, d), W /= d), a.lineWidth = W, f.isInvalidPDFjsFont) {
            const it = [];
            let ht = 0;
            for (const gt of e) it.push(gt.unicode), ht += gt.width;
            a.fillText(it.join(""), 0, 0), n.x += ht * U * R, a.restore(), this.compose();
            return;
          }
          let J = 0, Q;
          for (Q = 0; Q < D; ++Q) {
            const it = e[Q];
            if (typeof it == "number") {
              J += F * it * o / 1e3;
              continue;
            }
            let ht = false;
            const gt = (it.isSpace ? x : 0) + A, bt = it.fontChar, At = it.accent;
            let mt, Ct, St = it.width;
            if (I) {
              const vt = it.vmetric || T, xt = -(it.vmetric ? vt[1] : St * 0.5) * U, kt = vt[2] * U;
              St = vt ? -vt[0] : St, mt = xt / d, Ct = (J + kt) / d;
            } else mt = J / d, Ct = 0;
            if (f.remeasure && St > 0) {
              const vt = a.measureText(bt).width * 1e3 / o * d;
              if (St < vt && this.isFontSubpixelAAEnabled) {
                const xt = St / vt;
                ht = true, a.save(), a.scale(xt, 1), mt /= xt;
              } else St !== vt && (mt += (St - vt) / 2e3 * o / d);
            }
            if (this.contentVisible && (it.isInFont || f.missingFile)) {
              if (K && !At) a.fillText(bt, mt, Ct);
              else if (this.paintChar(bt, mt, Ct, X), At) {
                const vt = mt + o * At.offset.x / d, xt = Ct - o * At.offset.y / d;
                this.paintChar(At.fontChar, vt, xt, X);
              }
            }
            const Tt = I ? St * U - gt * k : St * U + gt * k;
            J += Tt, ht && a.restore();
          }
          I ? n.y -= J : n.x += J * R, a.restore(), this.compose();
        }
        showType3Text(e) {
          const n = this.ctx, f = this.current, o = f.font, a = f.fontSize, d = f.fontDirection, A = o.vertical ? 1 : -1, x = f.charSpacing, k = f.wordSpacing, R = f.textHScale * d, D = f.fontMatrix || w.FONT_IDENTITY_MATRIX, I = e.length, F = f.textRenderingMode === w.TextRenderingMode.INVISIBLE;
          let T, U, K, X;
          if (!(F || a === 0)) {
            for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, n.save(), n.transform(...f.textMatrix), n.translate(f.x, f.y), n.scale(R, d), T = 0; T < I; ++T) {
              if (U = e[T], typeof U == "number") {
                X = A * U * a / 1e3, this.ctx.translate(X, 0), f.x += X * R;
                continue;
              }
              const W = (U.isSpace ? k : 0) + x, rt = o.charProcOperatorList[U.operatorListId];
              if (!rt) {
                (0, w.warn)(`Type3 character "${U.operatorListId}" is not available.`);
                continue;
              }
              this.contentVisible && (this.processingType3 = U, this.save(), n.scale(a, a), n.transform(...D), this.executeOperatorList(rt), this.restore()), K = w.Util.applyTransform([
                U.width,
                0
              ], D)[0] * a + W, n.translate(K, 0), f.x += K * R;
            }
            n.restore(), this.processingType3 = null;
          }
        }
        setCharWidth(e, n) {
        }
        setCharWidthAndBounds(e, n, f, o, a, d) {
          this.ctx.rect(f, o, a - f, d - o), this.ctx.clip(), this.endPath();
        }
        getColorN_Pattern(e) {
          let n;
          if (e[0] === "TilingPattern") {
            const f = e[1], o = this.baseTransform || (0, z.getCurrentTransform)(this.ctx), a = {
              createCanvasGraphics: (d) => new _m(d, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: this.optionalContentConfig,
                markedContentStack: this.markedContentStack
              })
            };
            n = new s(e, f, this.ctx, a, o);
          } else n = this._getPattern(e[1], e[2]);
          return n;
        }
        setStrokeColorN() {
          this.current.strokeColor = this.getColorN_Pattern(arguments);
        }
        setFillColorN() {
          this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = true;
        }
        setStrokeRGBColor(e, n, f) {
          const o = w.Util.makeHexColor(e, n, f);
          this.ctx.strokeStyle = o, this.current.strokeColor = o;
        }
        setFillRGBColor(e, n, f) {
          const o = w.Util.makeHexColor(e, n, f);
          this.ctx.fillStyle = o, this.current.fillColor = o, this.current.patternFill = false;
        }
        _getPattern(e, n = null) {
          let f;
          return this.cachedPatterns.has(e) ? f = this.cachedPatterns.get(e) : (f = l(this.getObject(e)), this.cachedPatterns.set(e, f)), n && (f.matrix = n), f;
        }
        shadingFill(e) {
          if (!this.contentVisible) return;
          const n = this.ctx;
          this.save();
          const f = this._getPattern(e);
          n.fillStyle = f.getPattern(n, this, (0, z.getCurrentTransformInverse)(n), _.SHADING);
          const o = (0, z.getCurrentTransformInverse)(n);
          if (o) {
            const { width: a, height: d } = n.canvas, [A, x, k, R] = w.Util.getAxialAlignedBoundingBox([
              0,
              0,
              a,
              d
            ], o);
            this.ctx.fillRect(A, x, k - A, R - x);
          } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
          this.compose(this.current.getClippedPathBoundingBox()), this.restore();
        }
        beginInlineImage() {
          (0, w.unreachable)("Should not call beginInlineImage");
        }
        beginImageData() {
          (0, w.unreachable)("Should not call beginImageData");
        }
        paintFormXObjectBegin(e, n) {
          if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(e) && e.length === 6 && this.transform(...e), this.baseTransform = (0, z.getCurrentTransform)(this.ctx), n)) {
            const f = n[2] - n[0], o = n[3] - n[1];
            this.ctx.rect(n[0], n[1], f, o), this.current.updateRectMinMax((0, z.getCurrentTransform)(this.ctx), n), this.clip(), this.endPath();
          }
        }
        paintFormXObjectEnd() {
          this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
        }
        beginGroup(e) {
          if (!this.contentVisible) return;
          this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
          const n = this.ctx;
          e.isolated || (0, w.info)("TODO: Support non-isolated groups."), e.knockout && (0, w.warn)("Knockout groups not supported.");
          const f = (0, z.getCurrentTransform)(n);
          if (e.matrix && n.transform(...e.matrix), !e.bbox) throw new Error("Bounding box is required.");
          let o = w.Util.getAxialAlignedBoundingBox(e.bbox, (0, z.getCurrentTransform)(n));
          const a = [
            0,
            0,
            n.canvas.width,
            n.canvas.height
          ];
          o = w.Util.intersect(o, a) || [
            0,
            0,
            0,
            0
          ];
          const d = Math.floor(o[0]), A = Math.floor(o[1]);
          let x = Math.max(Math.ceil(o[2]) - d, 1), k = Math.max(Math.ceil(o[3]) - A, 1), R = 1, D = 1;
          x > u && (R = x / u, x = u), k > u && (D = k / u, k = u), this.current.startNewPathAndClipBox([
            0,
            0,
            x,
            k
          ]);
          let I = "groupAt" + this.groupLevel;
          e.smask && (I += "_smask_" + this.smaskCounter++ % 2);
          const F = this.cachedCanvases.getCanvas(I, x, k), T = F.context;
          T.scale(1 / R, 1 / D), T.translate(-d, -A), T.transform(...f), e.smask ? this.smaskStack.push({
            canvas: F.canvas,
            context: T,
            offsetX: d,
            offsetY: A,
            scaleX: R,
            scaleY: D,
            subtype: e.smask.subtype,
            backdrop: e.smask.backdrop,
            transferMap: e.smask.transferMap || null,
            startTransformInverse: null
          }) : (n.setTransform(1, 0, 0, 1, 0, 0), n.translate(d, A), n.scale(R, D), n.save()), O(n, T), this.ctx = T, this.setGState([
            [
              "BM",
              "source-over"
            ],
            [
              "ca",
              1
            ],
            [
              "CA",
              1
            ]
          ]), this.groupStack.push(n), this.groupLevel++;
        }
        endGroup(e) {
          if (!this.contentVisible) return;
          this.groupLevel--;
          const n = this.ctx, f = this.groupStack.pop();
          if (this.ctx = f, this.ctx.imageSmoothingEnabled = false, e.smask) this.tempSMask = this.smaskStack.pop(), this.restore();
          else {
            this.ctx.restore();
            const o = (0, z.getCurrentTransform)(this.ctx);
            this.restore(), this.ctx.save(), this.ctx.setTransform(...o);
            const a = w.Util.getAxialAlignedBoundingBox([
              0,
              0,
              n.canvas.width,
              n.canvas.height
            ], o);
            this.ctx.drawImage(n.canvas, 0, 0), this.ctx.restore(), this.compose(a);
          }
        }
        beginAnnotation(e, n, f, o, a) {
          if (__privateMethod(this, _m_instances, t_fn).call(this), V(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(n) && n.length === 4) {
            const d = n[2] - n[0], A = n[3] - n[1];
            if (a && this.annotationCanvasMap) {
              f = f.slice(), f[4] -= n[0], f[5] -= n[1], n = n.slice(), n[0] = n[1] = 0, n[2] = d, n[3] = A;
              const [x, k] = w.Util.singularValueDecompose2dScale((0, z.getCurrentTransform)(this.ctx)), { viewportScale: R } = this, D = Math.ceil(d * this.outputScaleX * R), I = Math.ceil(A * this.outputScaleY * R);
              this.annotationCanvas = this.canvasFactory.create(D, I);
              const { canvas: F, context: T } = this.annotationCanvas;
              this.annotationCanvasMap.set(e, F), this.annotationCanvas.savedCtx = this.ctx, this.ctx = T, this.ctx.save(), this.ctx.setTransform(x, 0, 0, -k, 0, A * k), V(this.ctx);
            } else V(this.ctx), this.ctx.rect(n[0], n[1], d, A), this.ctx.clip(), this.endPath();
          }
          this.current = new q(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...f), this.transform(...o);
        }
        endAnnotation() {
          this.annotationCanvas && (this.ctx.restore(), __privateMethod(this, _m_instances, e_fn).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
        }
        paintImageMaskXObject(e) {
          if (!this.contentVisible) return;
          const n = e.count;
          e = this.getObject(e.data, e), e.count = n;
          const f = this.ctx, o = this.processingType3;
          if (o && (o.compiled === void 0 && (o.compiled = B(e)), o.compiled)) {
            o.compiled(f);
            return;
          }
          const a = this._createMaskCanvas(e), d = a.canvas;
          f.save(), f.setTransform(1, 0, 0, 1, 0, 0), f.drawImage(d, a.offsetX, a.offsetY), f.restore(), this.compose();
        }
        paintImageMaskXObjectRepeat(e, n, f = 0, o = 0, a, d) {
          if (!this.contentVisible) return;
          e = this.getObject(e.data, e);
          const A = this.ctx;
          A.save();
          const x = (0, z.getCurrentTransform)(A);
          A.transform(n, f, o, a, 0, 0);
          const k = this._createMaskCanvas(e);
          A.setTransform(1, 0, 0, 1, k.offsetX - x[4], k.offsetY - x[5]);
          for (let R = 0, D = d.length; R < D; R += 2) {
            const I = w.Util.transform(x, [
              n,
              f,
              o,
              a,
              d[R],
              d[R + 1]
            ]), [F, T] = w.Util.applyTransform([
              0,
              0
            ], I);
            A.drawImage(k.canvas, F, T);
          }
          A.restore(), this.compose();
        }
        paintImageMaskXObjectGroup(e) {
          if (!this.contentVisible) return;
          const n = this.ctx, f = this.current.fillColor, o = this.current.patternFill;
          for (const a of e) {
            const { data: d, width: A, height: x, transform: k } = a, R = this.cachedCanvases.getCanvas("maskCanvas", A, x), D = R.context;
            D.save();
            const I = this.getObject(d, a);
            j(D, I), D.globalCompositeOperation = "source-in", D.fillStyle = o ? f.getPattern(D, this, (0, z.getCurrentTransformInverse)(n), _.FILL) : f, D.fillRect(0, 0, A, x), D.restore(), n.save(), n.transform(...k), n.scale(1, -1), H(n, R.canvas, 0, 0, A, x, 0, -1, 1, 1), n.restore();
          }
          this.compose();
        }
        paintImageXObject(e) {
          if (!this.contentVisible) return;
          const n = this.getObject(e);
          if (!n) {
            (0, w.warn)("Dependent image isn't ready yet");
            return;
          }
          this.paintInlineImageXObject(n);
        }
        paintImageXObjectRepeat(e, n, f, o) {
          if (!this.contentVisible) return;
          const a = this.getObject(e);
          if (!a) {
            (0, w.warn)("Dependent image isn't ready yet");
            return;
          }
          const d = a.width, A = a.height, x = [];
          for (let k = 0, R = o.length; k < R; k += 2) x.push({
            transform: [
              n,
              0,
              0,
              f,
              o[k],
              o[k + 1]
            ],
            x: 0,
            y: 0,
            w: d,
            h: A
          });
          this.paintInlineImageXObjectGroup(a, x);
        }
        applyTransferMapsToCanvas(e) {
          return this.current.transferMaps !== "none" && (e.filter = this.current.transferMaps, e.drawImage(e.canvas, 0, 0), e.filter = "none"), e.canvas;
        }
        applyTransferMapsToBitmap(e) {
          if (this.current.transferMaps === "none") return e.bitmap;
          const { bitmap: n, width: f, height: o } = e, a = this.cachedCanvases.getCanvas("inlineImage", f, o), d = a.context;
          return d.filter = this.current.transferMaps, d.drawImage(n, 0, 0), d.filter = "none", a.canvas;
        }
        paintInlineImageXObject(e) {
          if (!this.contentVisible) return;
          const n = e.width, f = e.height, o = this.ctx;
          if (this.save(), !w.isNodeJS) {
            const { filter: A } = o;
            A !== "none" && A !== "" && (o.filter = "none");
          }
          o.scale(1 / n, -1 / f);
          let a;
          if (e.bitmap) a = this.applyTransferMapsToBitmap(e);
          else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data) a = e;
          else {
            const x = this.cachedCanvases.getCanvas("inlineImage", n, f).context;
            nt(x, e), a = this.applyTransferMapsToCanvas(x);
          }
          const d = this._scaleImage(a, (0, z.getCurrentTransformInverse)(o));
          o.imageSmoothingEnabled = pt((0, z.getCurrentTransform)(o), e.interpolate), H(o, d.img, 0, 0, d.paintWidth, d.paintHeight, 0, -f, n, f), this.compose(), this.restore();
        }
        paintInlineImageXObjectGroup(e, n) {
          if (!this.contentVisible) return;
          const f = this.ctx;
          let o;
          if (e.bitmap) o = e.bitmap;
          else {
            const a = e.width, d = e.height, x = this.cachedCanvases.getCanvas("inlineImage", a, d).context;
            nt(x, e), o = this.applyTransferMapsToCanvas(x);
          }
          for (const a of n) f.save(), f.transform(...a.transform), f.scale(1, -1), H(f, o, a.x, a.y, a.w, a.h, 0, -1, 1, 1), f.restore();
          this.compose();
        }
        paintSolidColorImageMask() {
          this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
        }
        markPoint(e) {
        }
        markPointProps(e, n) {
        }
        beginMarkedContent(e) {
          this.markedContentStack.push({
            visible: true
          });
        }
        beginMarkedContentProps(e, n) {
          e === "OC" ? this.markedContentStack.push({
            visible: this.optionalContentConfig.isVisible(n)
          }) : this.markedContentStack.push({
            visible: true
          }), this.contentVisible = this.isContentVisible();
        }
        endMarkedContent() {
          this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
        }
        beginCompat() {
        }
        endCompat() {
        }
        consumePath(e) {
          const n = this.current.isEmptyClip();
          this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(e);
          const f = this.ctx;
          this.pendingClip && (n || (this.pendingClip === et ? f.clip("evenodd") : f.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), f.beginPath();
        }
        getSinglePixelWidth() {
          if (!this._cachedGetSinglePixelWidth) {
            const e = (0, z.getCurrentTransform)(this.ctx);
            if (e[1] === 0 && e[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(e[0]), Math.abs(e[3]));
            else {
              const n = Math.abs(e[0] * e[3] - e[2] * e[1]), f = Math.hypot(e[0], e[2]), o = Math.hypot(e[1], e[3]);
              this._cachedGetSinglePixelWidth = Math.max(f, o) / n;
            }
          }
          return this._cachedGetSinglePixelWidth;
        }
        getScaleForStroking() {
          if (this._cachedScaleForStroking[0] === -1) {
            const { lineWidth: e } = this.current, { a: n, b: f, c: o, d: a } = this.ctx.getTransform();
            let d, A;
            if (f === 0 && o === 0) {
              const x = Math.abs(n), k = Math.abs(a);
              if (x === k) if (e === 0) d = A = 1 / x;
              else {
                const R = x * e;
                d = A = R < 1 ? 1 / R : 1;
              }
              else if (e === 0) d = 1 / x, A = 1 / k;
              else {
                const R = x * e, D = k * e;
                d = R < 1 ? 1 / R : 1, A = D < 1 ? 1 / D : 1;
              }
            } else {
              const x = Math.abs(n * a - f * o), k = Math.hypot(n, f), R = Math.hypot(o, a);
              if (e === 0) d = R / x, A = k / x;
              else {
                const D = e * x;
                d = R > D ? R / D : 1, A = k > D ? k / D : 1;
              }
            }
            this._cachedScaleForStroking[0] = d, this._cachedScaleForStroking[1] = A;
          }
          return this._cachedScaleForStroking;
        }
        rescaleAndStroke(e) {
          const { ctx: n } = this, { lineWidth: f } = this.current, [o, a] = this.getScaleForStroking();
          if (n.lineWidth = f || 1, o === 1 && a === 1) {
            n.stroke();
            return;
          }
          const d = n.getLineDash();
          if (e && n.save(), n.scale(o, a), d.length > 0) {
            const A = Math.max(o, a);
            n.setLineDash(d.map((x) => x / A)), n.lineDashOffset /= A;
          }
          n.stroke(), e && n.restore();
        }
        isContentVisible() {
          for (let e = this.markedContentStack.length - 1; e >= 0; e--) if (!this.markedContentStack[e].visible) return false;
          return true;
        }
      };
      _m_instances = new WeakSet();
      t_fn = function() {
        for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
        this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
      };
      e_fn = function() {
        if (this.pageColors) {
          const e = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
          if (e !== "none") {
            const n = this.ctx.filter;
            this.ctx.filter = e, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = n;
          }
        }
      };
      let m = _m;
      for (const h in w.OPS) m.prototype[h] !== void 0 && (m.prototype[w.OPS[h]] = m.prototype[h]);
    },
    419: (ct, st, $) => {
      var _t, _e2, _s, _n, _r, _i, _P_instances, a_get, l_get, h_get, d_fn, u_fn, c_fn, o_fn, p_fn;
      $.d(st, {
        DOMCMapReaderFactory: () => v,
        DOMCanvasFactory: () => C,
        DOMFilterFactory: () => P,
        DOMSVGFactory: () => c,
        DOMStandardFontDataFactory: () => r,
        PDFDateString: () => L,
        PageViewport: () => l,
        PixelsPerInch: () => G,
        RenderingCancelledException: () => b,
        StatTimer: () => u,
        fetchData: () => E,
        getColorValues: () => H,
        getCurrentTransform: () => B,
        getCurrentTransformInverse: () => q,
        getFilenameFromUrl: () => t,
        getPdfFilenameFromUrl: () => i,
        getRGB: () => N,
        getXfaPageViewport: () => M,
        isDataScheme: () => s,
        isPdfFile: () => g,
        isValidFetchUrl: () => p,
        noContextMenu: () => y,
        setLayerDimensions: () => nt
      });
      var w = $(583), z = $(292);
      const _ = "http://www.w3.org/2000/svg";
      const _G = class _G {
      };
      __publicField(_G, "CSS", 96);
      __publicField(_G, "PDF", 72);
      __publicField(_G, "PDF_TO_CSS_UNITS", _G.CSS / _G.PDF);
      let G = _G;
      class P extends w.BaseFilterFactory {
        constructor({ docId: O, ownerDocument: V = globalThis.document } = {}) {
          super();
          __privateAdd(this, _P_instances);
          __privateAdd(this, _t);
          __privateAdd(this, _e2);
          __privateAdd(this, _s);
          __privateAdd(this, _n);
          __privateAdd(this, _r);
          __privateAdd(this, _i, 0);
          __privateSet(this, _s, O), __privateSet(this, _n, V);
        }
        addFilter(O) {
          if (!O) return "none";
          let V = __privateGet(this, _P_instances, a_get).get(O);
          if (V) return V;
          let Y, tt, Z, at;
          if (O.length === 1) {
            const ot = O[0], ut = new Array(256);
            for (let et = 0; et < 256; et++) ut[et] = ot[et] / 255;
            at = Y = tt = Z = ut.join(",");
          } else {
            const [ot, ut, et] = O, m = new Array(256), h = new Array(256), e = new Array(256);
            for (let n = 0; n < 256; n++) m[n] = ot[n] / 255, h[n] = ut[n] / 255, e[n] = et[n] / 255;
            Y = m.join(","), tt = h.join(","), Z = e.join(","), at = `${Y}${tt}${Z}`;
          }
          if (V = __privateGet(this, _P_instances, a_get).get(at), V) return __privateGet(this, _P_instances, a_get).set(O, V), V;
          const lt = `g_${__privateGet(this, _s)}_transfer_map_${__privateWrapper(this, _i)._++}`, pt = `url(#${lt})`;
          __privateGet(this, _P_instances, a_get).set(O, pt), __privateGet(this, _P_instances, a_get).set(at, pt);
          const dt = __privateMethod(this, _P_instances, u_fn).call(this, lt);
          return __privateMethod(this, _P_instances, o_fn).call(this, Y, tt, Z, dt), pt;
        }
        addHCMFilter(O, V) {
          var _a;
          const Y = `${O}-${V}`, tt = "base";
          let Z = __privateGet(this, _P_instances, l_get).get(tt);
          if ((Z == null ? void 0 : Z.key) === Y || (Z ? ((_a = Z.filter) == null ? void 0 : _a.remove(), Z.key = Y, Z.url = "none", Z.filter = null) : (Z = {
            key: Y,
            url: "none",
            filter: null
          }, __privateGet(this, _P_instances, l_get).set(tt, Z)), !O || !V)) return Z.url;
          const at = __privateMethod(this, _P_instances, p_fn).call(this, O);
          O = z.Util.makeHexColor(...at);
          const lt = __privateMethod(this, _P_instances, p_fn).call(this, V);
          if (V = z.Util.makeHexColor(...lt), __privateGet(this, _P_instances, h_get).style.color = "", O === "#000000" && V === "#ffffff" || O === V) return Z.url;
          const pt = new Array(256);
          for (let m = 0; m <= 255; m++) {
            const h = m / 255;
            pt[m] = h <= 0.03928 ? h / 12.92 : ((h + 0.055) / 1.055) ** 2.4;
          }
          const dt = pt.join(","), ot = `g_${__privateGet(this, _s)}_hcm_filter`, ut = Z.filter = __privateMethod(this, _P_instances, u_fn).call(this, ot);
          __privateMethod(this, _P_instances, o_fn).call(this, dt, dt, dt, ut), __privateMethod(this, _P_instances, d_fn).call(this, ut);
          const et = (m, h) => {
            const e = at[m] / 255, n = lt[m] / 255, f = new Array(h + 1);
            for (let o = 0; o <= h; o++) f[o] = e + o / h * (n - e);
            return f.join(",");
          };
          return __privateMethod(this, _P_instances, o_fn).call(this, et(0, 5), et(1, 5), et(2, 5), ut), Z.url = `url(#${ot})`, Z.url;
        }
        addHighlightHCMFilter(O, V, Y, tt, Z) {
          var _a;
          const at = `${V}-${Y}-${tt}-${Z}`;
          let lt = __privateGet(this, _P_instances, l_get).get(O);
          if ((lt == null ? void 0 : lt.key) === at || (lt ? ((_a = lt.filter) == null ? void 0 : _a.remove(), lt.key = at, lt.url = "none", lt.filter = null) : (lt = {
            key: at,
            url: "none",
            filter: null
          }, __privateGet(this, _P_instances, l_get).set(O, lt)), !V || !Y)) return lt.url;
          const [pt, dt] = [
            V,
            Y
          ].map(__privateMethod(this, _P_instances, p_fn).bind(this));
          let ot = Math.round(0.2126 * pt[0] + 0.7152 * pt[1] + 0.0722 * pt[2]), ut = Math.round(0.2126 * dt[0] + 0.7152 * dt[1] + 0.0722 * dt[2]), [et, m] = [
            tt,
            Z
          ].map(__privateMethod(this, _P_instances, p_fn).bind(this));
          ut < ot && ([ot, ut, et, m] = [
            ut,
            ot,
            m,
            et
          ]), __privateGet(this, _P_instances, h_get).style.color = "";
          const h = (f, o, a) => {
            const d = new Array(256), A = (ut - ot) / a, x = f / 255, k = (o - f) / (255 * a);
            let R = 0;
            for (let D = 0; D <= a; D++) {
              const I = Math.round(ot + D * A), F = x + D * k;
              for (let T = R; T <= I; T++) d[T] = F;
              R = I + 1;
            }
            for (let D = R; D < 256; D++) d[D] = d[R - 1];
            return d.join(",");
          }, e = `g_${__privateGet(this, _s)}_hcm_${O}_filter`, n = lt.filter = __privateMethod(this, _P_instances, u_fn).call(this, e);
          return __privateMethod(this, _P_instances, d_fn).call(this, n), __privateMethod(this, _P_instances, o_fn).call(this, h(et[0], m[0], 5), h(et[1], m[1], 5), h(et[2], m[2], 5), n), lt.url = `url(#${e})`, lt.url;
        }
        destroy(O = false) {
          O && __privateGet(this, _P_instances, l_get).size !== 0 || (__privateGet(this, _e2) && (__privateGet(this, _e2).parentNode.parentNode.remove(), __privateSet(this, _e2, null)), __privateGet(this, _t) && (__privateGet(this, _t).clear(), __privateSet(this, _t, null)), __privateSet(this, _i, 0));
        }
      }
      _t = new WeakMap();
      _e2 = new WeakMap();
      _s = new WeakMap();
      _n = new WeakMap();
      _r = new WeakMap();
      _i = new WeakMap();
      _P_instances = new WeakSet();
      a_get = function() {
        return __privateGet(this, _t) || __privateSet(this, _t, /* @__PURE__ */ new Map());
      };
      l_get = function() {
        return __privateGet(this, _r) || __privateSet(this, _r, /* @__PURE__ */ new Map());
      };
      h_get = function() {
        if (!__privateGet(this, _e2)) {
          const O = __privateGet(this, _n).createElement("div"), { style: V } = O;
          V.visibility = "hidden", V.contain = "strict", V.width = V.height = 0, V.position = "absolute", V.top = V.left = 0, V.zIndex = -1;
          const Y = __privateGet(this, _n).createElementNS(_, "svg");
          Y.setAttribute("width", 0), Y.setAttribute("height", 0), __privateSet(this, _e2, __privateGet(this, _n).createElementNS(_, "defs")), O.append(Y), Y.append(__privateGet(this, _e2)), __privateGet(this, _n).body.append(O);
        }
        return __privateGet(this, _e2);
      };
      d_fn = function(O) {
        const V = __privateGet(this, _n).createElementNS(_, "feColorMatrix");
        V.setAttribute("type", "matrix"), V.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), O.append(V);
      };
      u_fn = function(O) {
        const V = __privateGet(this, _n).createElementNS(_, "filter");
        return V.setAttribute("color-interpolation-filters", "sRGB"), V.setAttribute("id", O), __privateGet(this, _P_instances, h_get).append(V), V;
      };
      c_fn = function(O, V, Y) {
        const tt = __privateGet(this, _n).createElementNS(_, V);
        tt.setAttribute("type", "discrete"), tt.setAttribute("tableValues", Y), O.append(tt);
      };
      o_fn = function(O, V, Y, tt) {
        const Z = __privateGet(this, _n).createElementNS(_, "feComponentTransfer");
        tt.append(Z), __privateMethod(this, _P_instances, c_fn).call(this, Z, "feFuncR", O), __privateMethod(this, _P_instances, c_fn).call(this, Z, "feFuncG", V), __privateMethod(this, _P_instances, c_fn).call(this, Z, "feFuncB", Y);
      };
      p_fn = function(O) {
        return __privateGet(this, _P_instances, h_get).style.color = O, N(getComputedStyle(__privateGet(this, _P_instances, h_get)).getPropertyValue("color"));
      };
      class C extends w.BaseCanvasFactory {
        constructor({ ownerDocument: O = globalThis.document } = {}) {
          super(), this._document = O;
        }
        _createCanvas(O, V) {
          const Y = this._document.createElement("canvas");
          return Y.width = O, Y.height = V, Y;
        }
      }
      async function E(j, O = "text") {
        if (p(j, document.baseURI)) {
          const V = await fetch(j);
          if (!V.ok) throw new Error(V.statusText);
          switch (O) {
            case "arraybuffer":
              return V.arrayBuffer();
            case "blob":
              return V.blob();
            case "json":
              return V.json();
          }
          return V.text();
        }
        return new Promise((V, Y) => {
          const tt = new XMLHttpRequest();
          tt.open("GET", j, true), tt.responseType = O, tt.onreadystatechange = () => {
            if (tt.readyState === XMLHttpRequest.DONE) {
              if (tt.status === 200 || tt.status === 0) {
                switch (O) {
                  case "arraybuffer":
                  case "blob":
                  case "json":
                    V(tt.response);
                    return;
                }
                V(tt.responseText);
                return;
              }
              Y(new Error(tt.statusText));
            }
          }, tt.send(null);
        });
      }
      class v extends w.BaseCMapReaderFactory {
        _fetchData(O, V) {
          return E(O, this.isCompressed ? "arraybuffer" : "text").then((Y) => ({
            cMapData: Y instanceof ArrayBuffer ? new Uint8Array(Y) : (0, z.stringToBytes)(Y),
            compressionType: V
          }));
        }
      }
      class r extends w.BaseStandardFontDataFactory {
        _fetchData(O) {
          return E(O, "arraybuffer").then((V) => new Uint8Array(V));
        }
      }
      class c extends w.BaseSVGFactory {
        _createSVG(O) {
          return document.createElementNS(_, O);
        }
      }
      class l {
        constructor({ viewBox: O, scale: V, rotation: Y, offsetX: tt = 0, offsetY: Z = 0, dontFlip: at = false }) {
          this.viewBox = O, this.scale = V, this.rotation = Y, this.offsetX = tt, this.offsetY = Z;
          const lt = (O[2] + O[0]) / 2, pt = (O[3] + O[1]) / 2;
          let dt, ot, ut, et;
          switch (Y %= 360, Y < 0 && (Y += 360), Y) {
            case 180:
              dt = -1, ot = 0, ut = 0, et = 1;
              break;
            case 90:
              dt = 0, ot = 1, ut = 1, et = 0;
              break;
            case 270:
              dt = 0, ot = -1, ut = -1, et = 0;
              break;
            case 0:
              dt = 1, ot = 0, ut = 0, et = -1;
              break;
            default:
              throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
          }
          at && (ut = -ut, et = -et);
          let m, h, e, n;
          dt === 0 ? (m = Math.abs(pt - O[1]) * V + tt, h = Math.abs(lt - O[0]) * V + Z, e = (O[3] - O[1]) * V, n = (O[2] - O[0]) * V) : (m = Math.abs(lt - O[0]) * V + tt, h = Math.abs(pt - O[1]) * V + Z, e = (O[2] - O[0]) * V, n = (O[3] - O[1]) * V), this.transform = [
            dt * V,
            ot * V,
            ut * V,
            et * V,
            m - dt * V * lt - ut * V * pt,
            h - ot * V * lt - et * V * pt
          ], this.width = e, this.height = n;
        }
        get rawDims() {
          const { viewBox: O } = this;
          return (0, z.shadow)(this, "rawDims", {
            pageWidth: O[2] - O[0],
            pageHeight: O[3] - O[1],
            pageX: O[0],
            pageY: O[1]
          });
        }
        clone({ scale: O = this.scale, rotation: V = this.rotation, offsetX: Y = this.offsetX, offsetY: tt = this.offsetY, dontFlip: Z = false } = {}) {
          return new l({
            viewBox: this.viewBox.slice(),
            scale: O,
            rotation: V,
            offsetX: Y,
            offsetY: tt,
            dontFlip: Z
          });
        }
        convertToViewportPoint(O, V) {
          return z.Util.applyTransform([
            O,
            V
          ], this.transform);
        }
        convertToViewportRectangle(O) {
          const V = z.Util.applyTransform([
            O[0],
            O[1]
          ], this.transform), Y = z.Util.applyTransform([
            O[2],
            O[3]
          ], this.transform);
          return [
            V[0],
            V[1],
            Y[0],
            Y[1]
          ];
        }
        convertToPdfPoint(O, V) {
          return z.Util.applyInverseTransform([
            O,
            V
          ], this.transform);
        }
      }
      class b extends z.BaseException {
        constructor(O, V = 0) {
          super(O, "RenderingCancelledException"), this.extraDelay = V;
        }
      }
      function s(j) {
        const O = j.length;
        let V = 0;
        for (; V < O && j[V].trim() === ""; ) V++;
        return j.substring(V, V + 5).toLowerCase() === "data:";
      }
      function g(j) {
        return typeof j == "string" && /\.pdf$/i.test(j);
      }
      function t(j, O = false) {
        return O || ([j] = j.split(/[#?]/, 1)), j.substring(j.lastIndexOf("/") + 1);
      }
      function i(j, O = "document.pdf") {
        if (typeof j != "string") return O;
        if (s(j)) return (0, z.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), O;
        const V = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, Y = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, tt = V.exec(j);
        let Z = Y.exec(tt[1]) || Y.exec(tt[2]) || Y.exec(tt[3]);
        if (Z && (Z = Z[0], Z.includes("%"))) try {
          Z = Y.exec(decodeURIComponent(Z))[0];
        } catch {
        }
        return Z || O;
      }
      class u {
        constructor() {
          __publicField(this, "started", /* @__PURE__ */ Object.create(null));
          __publicField(this, "times", []);
        }
        time(O) {
          O in this.started && (0, z.warn)(`Timer is already running for ${O}`), this.started[O] = Date.now();
        }
        timeEnd(O) {
          O in this.started || (0, z.warn)(`Timer has not been started for ${O}`), this.times.push({
            name: O,
            start: this.started[O],
            end: Date.now()
          }), delete this.started[O];
        }
        toString() {
          const O = [];
          let V = 0;
          for (const { name: Y } of this.times) V = Math.max(Y.length, V);
          for (const { name: Y, start: tt, end: Z } of this.times) O.push(`${Y.padEnd(V)} ${Z - tt}ms
`);
          return O.join("");
        }
      }
      function p(j, O) {
        try {
          const { protocol: V } = O ? new URL(j, O) : new URL(j);
          return V === "http:" || V === "https:";
        } catch {
          return false;
        }
      }
      function y(j) {
        j.preventDefault();
      }
      let S;
      class L {
        static toDateObject(O) {
          if (!O || typeof O != "string") return null;
          S || (S = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
          const V = S.exec(O);
          if (!V) return null;
          const Y = parseInt(V[1], 10);
          let tt = parseInt(V[2], 10);
          tt = tt >= 1 && tt <= 12 ? tt - 1 : 0;
          let Z = parseInt(V[3], 10);
          Z = Z >= 1 && Z <= 31 ? Z : 1;
          let at = parseInt(V[4], 10);
          at = at >= 0 && at <= 23 ? at : 0;
          let lt = parseInt(V[5], 10);
          lt = lt >= 0 && lt <= 59 ? lt : 0;
          let pt = parseInt(V[6], 10);
          pt = pt >= 0 && pt <= 59 ? pt : 0;
          const dt = V[7] || "Z";
          let ot = parseInt(V[8], 10);
          ot = ot >= 0 && ot <= 23 ? ot : 0;
          let ut = parseInt(V[9], 10) || 0;
          return ut = ut >= 0 && ut <= 59 ? ut : 0, dt === "-" ? (at += ot, lt += ut) : dt === "+" && (at -= ot, lt -= ut), new Date(Date.UTC(Y, tt, Z, at, lt, pt));
        }
      }
      function M(j, { scale: O = 1, rotation: V = 0 }) {
        const { width: Y, height: tt } = j.attributes.style, Z = [
          0,
          0,
          parseInt(Y),
          parseInt(tt)
        ];
        return new l({
          viewBox: Z,
          scale: O,
          rotation: V
        });
      }
      function N(j) {
        if (j.startsWith("#")) {
          const O = parseInt(j.slice(1), 16);
          return [
            (O & 16711680) >> 16,
            (O & 65280) >> 8,
            O & 255
          ];
        }
        return j.startsWith("rgb(") ? j.slice(4, -1).split(",").map((O) => parseInt(O)) : j.startsWith("rgba(") ? j.slice(5, -1).split(",").map((O) => parseInt(O)).slice(0, 3) : ((0, z.warn)(`Not a valid color format: "${j}"`), [
          0,
          0,
          0
        ]);
      }
      function H(j) {
        const O = document.createElement("span");
        O.style.visibility = "hidden", document.body.append(O);
        for (const V of j.keys()) {
          O.style.color = V;
          const Y = window.getComputedStyle(O).color;
          j.set(V, N(Y));
        }
        O.remove();
      }
      function B(j) {
        const { a: O, b: V, c: Y, d: tt, e: Z, f: at } = j.getTransform();
        return [
          O,
          V,
          Y,
          tt,
          Z,
          at
        ];
      }
      function q(j) {
        const { a: O, b: V, c: Y, d: tt, e: Z, f: at } = j.getTransform().invertSelf();
        return [
          O,
          V,
          Y,
          tt,
          Z,
          at
        ];
      }
      function nt(j, O, V = false, Y = true) {
        if (O instanceof l) {
          const { pageWidth: tt, pageHeight: Z } = O.rawDims, { style: at } = j, lt = z.FeatureTest.isCSSRoundSupported, pt = `var(--scale-factor) * ${tt}px`, dt = `var(--scale-factor) * ${Z}px`, ot = lt ? `round(${pt}, 1px)` : `calc(${pt})`, ut = lt ? `round(${dt}, 1px)` : `calc(${dt})`;
          !V || O.rotation % 180 === 0 ? (at.width = ot, at.height = ut) : (at.width = ut, at.height = ot);
        }
        Y && j.setAttribute("data-main-rotation", O.rotation);
      }
    },
    47: (ct, st, $) => {
      var _t, _e2, _s, _n, ___static, r_fn, ___instances, i_fn, a_fn;
      $.d(st, {
        DrawLayer: () => _
      });
      var w = $(419), z = $(292);
      const __ = class __ {
        constructor({ pageIndex: P }) {
          __privateAdd(this, ___instances);
          __privateAdd(this, _t, null);
          __privateAdd(this, _e2, 0);
          __privateAdd(this, _s, /* @__PURE__ */ new Map());
          __privateAdd(this, _n, /* @__PURE__ */ new Map());
          this.pageIndex = P;
        }
        setParent(P) {
          if (!__privateGet(this, _t)) {
            __privateSet(this, _t, P);
            return;
          }
          if (__privateGet(this, _t) !== P) {
            if (__privateGet(this, _s).size > 0) for (const C of __privateGet(this, _s).values()) C.remove(), P.append(C);
            __privateSet(this, _t, P);
          }
        }
        static get _svgFactory() {
          return (0, z.shadow)(this, "_svgFactory", new w.DOMSVGFactory());
        }
        highlight(P, C, E, v = false) {
          const r = __privateWrapper(this, _e2)._++, c = __privateMethod(this, ___instances, i_fn).call(this, P.box);
          c.classList.add("highlight"), P.free && c.classList.add("free");
          const l = __._svgFactory.createElement("defs");
          c.append(l);
          const b = __._svgFactory.createElement("path");
          l.append(b);
          const s = `path_p${this.pageIndex}_${r}`;
          b.setAttribute("id", s), b.setAttribute("d", P.toSVGPath()), v && __privateGet(this, _n).set(r, b);
          const g = __privateMethod(this, ___instances, a_fn).call(this, l, s), t = __._svgFactory.createElement("use");
          return c.append(t), c.setAttribute("fill", C), c.setAttribute("fill-opacity", E), t.setAttribute("href", `#${s}`), __privateGet(this, _s).set(r, c), {
            id: r,
            clipPathId: `url(#${g})`
          };
        }
        highlightOutline(P) {
          const C = __privateWrapper(this, _e2)._++, E = __privateMethod(this, ___instances, i_fn).call(this, P.box);
          E.classList.add("highlightOutline");
          const v = __._svgFactory.createElement("defs");
          E.append(v);
          const r = __._svgFactory.createElement("path");
          v.append(r);
          const c = `path_p${this.pageIndex}_${C}`;
          r.setAttribute("id", c), r.setAttribute("d", P.toSVGPath()), r.setAttribute("vector-effect", "non-scaling-stroke");
          let l;
          if (P.free) {
            E.classList.add("free");
            const g = __._svgFactory.createElement("mask");
            v.append(g), l = `mask_p${this.pageIndex}_${C}`, g.setAttribute("id", l), g.setAttribute("maskUnits", "objectBoundingBox");
            const t = __._svgFactory.createElement("rect");
            g.append(t), t.setAttribute("width", "1"), t.setAttribute("height", "1"), t.setAttribute("fill", "white");
            const i = __._svgFactory.createElement("use");
            g.append(i), i.setAttribute("href", `#${c}`), i.setAttribute("stroke", "none"), i.setAttribute("fill", "black"), i.setAttribute("fill-rule", "nonzero"), i.classList.add("mask");
          }
          const b = __._svgFactory.createElement("use");
          E.append(b), b.setAttribute("href", `#${c}`), l && b.setAttribute("mask", `url(#${l})`);
          const s = b.cloneNode();
          return E.append(s), b.classList.add("mainOutline"), s.classList.add("secondaryOutline"), __privateGet(this, _s).set(C, E), C;
        }
        finalizeLine(P, C) {
          const E = __privateGet(this, _n).get(P);
          __privateGet(this, _n).delete(P), this.updateBox(P, C.box), E.setAttribute("d", C.toSVGPath());
        }
        updateLine(P, C) {
          __privateGet(this, _s).get(P).firstChild.firstChild.setAttribute("d", C.toSVGPath());
        }
        removeFreeHighlight(P) {
          this.remove(P), __privateGet(this, _n).delete(P);
        }
        updatePath(P, C) {
          __privateGet(this, _n).get(P).setAttribute("d", C.toSVGPath());
        }
        updateBox(P, C) {
          var _a;
          __privateMethod(_a = __, ___static, r_fn).call(_a, __privateGet(this, _s).get(P), C);
        }
        show(P, C) {
          __privateGet(this, _s).get(P).classList.toggle("hidden", !C);
        }
        rotate(P, C) {
          __privateGet(this, _s).get(P).setAttribute("data-main-rotation", C);
        }
        changeColor(P, C) {
          __privateGet(this, _s).get(P).setAttribute("fill", C);
        }
        changeOpacity(P, C) {
          __privateGet(this, _s).get(P).setAttribute("fill-opacity", C);
        }
        addClass(P, C) {
          __privateGet(this, _s).get(P).classList.add(C);
        }
        removeClass(P, C) {
          __privateGet(this, _s).get(P).classList.remove(C);
        }
        remove(P) {
          __privateGet(this, _t) !== null && (__privateGet(this, _s).get(P).remove(), __privateGet(this, _s).delete(P));
        }
        destroy() {
          __privateSet(this, _t, null);
          for (const P of __privateGet(this, _s).values()) P.remove();
          __privateGet(this, _s).clear();
        }
      };
      _t = new WeakMap();
      _e2 = new WeakMap();
      _s = new WeakMap();
      _n = new WeakMap();
      ___static = new WeakSet();
      r_fn = function(P, { x: C = 0, y: E = 0, width: v = 1, height: r = 1 } = {}) {
        const { style: c } = P;
        c.top = `${100 * E}%`, c.left = `${100 * C}%`, c.width = `${100 * v}%`, c.height = `${100 * r}%`;
      };
      ___instances = new WeakSet();
      i_fn = function(P) {
        var _a;
        const C = __._svgFactory.create(1, 1, true);
        return __privateGet(this, _t).append(C), C.setAttribute("aria-hidden", true), __privateMethod(_a = __, ___static, r_fn).call(_a, C, P), C;
      };
      a_fn = function(P, C) {
        const E = __._svgFactory.createElement("clipPath");
        P.append(E);
        const v = `clip_${C}`;
        E.setAttribute("id", v), E.setAttribute("clipPathUnits", "objectBoundingBox");
        const r = __._svgFactory.createElement("use");
        return E.append(r), r.setAttribute("href", `#${C}`), r.classList.add("clip"), v;
      };
      __privateAdd(__, ___static);
      let _ = __;
    },
    731: (ct, st, $) => {
      var _t, _e2, _s, _n, _r, _i, _a, _l, _h, _d, _C_instances, u_fn, c_fn, o_fn, p_fn, _C_static, g_fn, f_fn, A_fn, m_fn, v_fn, _t2, _e3, _s2, _n2, _r2, _i2, _a2, _l2, _h2, _d2, _u, _c, _o, _p, _g, _f, _A, _m, _v, _c_instances, w_fn, C_fn, k_fn, I_fn, L_fn, y_fn, b_fn, _c_static, S_fn, x_fn, R_fn, T_fn, M_fn, F_fn, __fn, P_fn, _t3, _e4, _s3, _n3, _r3, _i3, _a3, _l3, _h3, _d3, _u2, _c3, _o2, _p2, _g2, _l_instances, f_fn2, A_fn2, m_fn2, v_fn2, w_fn2, C_fn2, k_fn2, I_fn2, L_fn2, y_fn2, b_fn2, S_fn2, x_fn2, R_fn2, T_fn2, M_fn2, F_fn2, __fn2, P_fn2, _l_static, D_fn, V_fn, $_fn, X_fn, G_fn, B_fn, N_fn, _t4, _e5, _s4, _n4, _r4, _i4, _a4, _l5, _h4, _d4, _u3, _b_instances, c_fn2, o_fn2, p_fn2, g_fn2, f_fn3, A_fn3, m_fn3, v_fn3, w_fn3, _t5, _e6, _s5, _n5, _r5, _i5, _a5, _l6, _h5, _d5, _u4, _c4, _o3, _p3, _s_instances, g_fn3, f_get, A_fn4, m_fn4, v_fn4;
      $.d(st, {
        AnnotationEditorLayer: () => s
      });
      var w = $(292), z = $(310), _ = $(830), G = $(976);
      const P = /\r\n?|\n/g;
      const _C = class _C extends z.AnnotationEditor {
        constructor(t) {
          super({
            ...t,
            name: "freeTextEditor"
          });
          __privateAdd(this, _C_instances);
          __privateAdd(this, _t, this.editorDivBlur.bind(this));
          __privateAdd(this, _e2, this.editorDivFocus.bind(this));
          __privateAdd(this, _s, this.editorDivInput.bind(this));
          __privateAdd(this, _n, this.editorDivKeydown.bind(this));
          __privateAdd(this, _r, this.editorDivPaste.bind(this));
          __privateAdd(this, _i);
          __privateAdd(this, _a, "");
          __privateAdd(this, _l, `${this.id}-editor`);
          __privateAdd(this, _h);
          __privateAdd(this, _d, null);
          __privateSet(this, _i, t.color || _C._defaultColor || z.AnnotationEditor._defaultLineColor), __privateSet(this, _h, t.fontSize || _C._defaultFontSize);
        }
        static get _keyboardManager() {
          const t = _C.prototype, i = (y) => y.isEmpty(), u = _.AnnotationEditorUIManager.TRANSLATE_SMALL, p = _.AnnotationEditorUIManager.TRANSLATE_BIG;
          return (0, w.shadow)(this, "_keyboardManager", new _.KeyboardManager([
            [
              [
                "ctrl+s",
                "mac+meta+s",
                "ctrl+p",
                "mac+meta+p"
              ],
              t.commitOrRemove,
              {
                bubbles: true
              }
            ],
            [
              [
                "ctrl+Enter",
                "mac+meta+Enter",
                "Escape",
                "mac+Escape"
              ],
              t.commitOrRemove
            ],
            [
              [
                "ArrowLeft",
                "mac+ArrowLeft"
              ],
              t._translateEmpty,
              {
                args: [
                  -u,
                  0
                ],
                checker: i
              }
            ],
            [
              [
                "ctrl+ArrowLeft",
                "mac+shift+ArrowLeft"
              ],
              t._translateEmpty,
              {
                args: [
                  -p,
                  0
                ],
                checker: i
              }
            ],
            [
              [
                "ArrowRight",
                "mac+ArrowRight"
              ],
              t._translateEmpty,
              {
                args: [
                  u,
                  0
                ],
                checker: i
              }
            ],
            [
              [
                "ctrl+ArrowRight",
                "mac+shift+ArrowRight"
              ],
              t._translateEmpty,
              {
                args: [
                  p,
                  0
                ],
                checker: i
              }
            ],
            [
              [
                "ArrowUp",
                "mac+ArrowUp"
              ],
              t._translateEmpty,
              {
                args: [
                  0,
                  -u
                ],
                checker: i
              }
            ],
            [
              [
                "ctrl+ArrowUp",
                "mac+shift+ArrowUp"
              ],
              t._translateEmpty,
              {
                args: [
                  0,
                  -p
                ],
                checker: i
              }
            ],
            [
              [
                "ArrowDown",
                "mac+ArrowDown"
              ],
              t._translateEmpty,
              {
                args: [
                  0,
                  u
                ],
                checker: i
              }
            ],
            [
              [
                "ctrl+ArrowDown",
                "mac+shift+ArrowDown"
              ],
              t._translateEmpty,
              {
                args: [
                  0,
                  p
                ],
                checker: i
              }
            ]
          ]));
        }
        static initialize(t, i) {
          z.AnnotationEditor.initialize(t, i, {
            strings: [
              "pdfjs-free-text-default-content"
            ]
          });
          const u = getComputedStyle(document.documentElement);
          this._internalPadding = parseFloat(u.getPropertyValue("--freetext-padding"));
        }
        static updateDefaultParams(t, i) {
          switch (t) {
            case w.AnnotationEditorParamsType.FREETEXT_SIZE:
              _C._defaultFontSize = i;
              break;
            case w.AnnotationEditorParamsType.FREETEXT_COLOR:
              _C._defaultColor = i;
              break;
          }
        }
        updateParams(t, i) {
          switch (t) {
            case w.AnnotationEditorParamsType.FREETEXT_SIZE:
              __privateMethod(this, _C_instances, u_fn).call(this, i);
              break;
            case w.AnnotationEditorParamsType.FREETEXT_COLOR:
              __privateMethod(this, _C_instances, c_fn).call(this, i);
              break;
          }
        }
        static get defaultPropertiesToUpdate() {
          return [
            [
              w.AnnotationEditorParamsType.FREETEXT_SIZE,
              _C._defaultFontSize
            ],
            [
              w.AnnotationEditorParamsType.FREETEXT_COLOR,
              _C._defaultColor || z.AnnotationEditor._defaultLineColor
            ]
          ];
        }
        get propertiesToUpdate() {
          return [
            [
              w.AnnotationEditorParamsType.FREETEXT_SIZE,
              __privateGet(this, _h)
            ],
            [
              w.AnnotationEditorParamsType.FREETEXT_COLOR,
              __privateGet(this, _i)
            ]
          ];
        }
        _translateEmpty(t, i) {
          this._uiManager.translateSelectedEditors(t, i, true);
        }
        getInitialTranslation() {
          const t = this.parentScale;
          return [
            -_C._internalPadding * t,
            -(_C._internalPadding + __privateGet(this, _h)) * t
          ];
        }
        rebuild() {
          this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
        }
        enableEditMode() {
          this.isInEditMode() || (this.parent.setEditingState(false), this.parent.updateToolbar(w.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = true, this._isDraggable = false, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", __privateGet(this, _n)), this.editorDiv.addEventListener("focus", __privateGet(this, _e2)), this.editorDiv.addEventListener("blur", __privateGet(this, _t)), this.editorDiv.addEventListener("input", __privateGet(this, _s)), this.editorDiv.addEventListener("paste", __privateGet(this, _r)));
        }
        disableEditMode() {
          this.isInEditMode() && (this.parent.setEditingState(true), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = false, this.div.setAttribute("aria-activedescendant", __privateGet(this, _l)), this._isDraggable = true, this.editorDiv.removeEventListener("keydown", __privateGet(this, _n)), this.editorDiv.removeEventListener("focus", __privateGet(this, _e2)), this.editorDiv.removeEventListener("blur", __privateGet(this, _t)), this.editorDiv.removeEventListener("input", __privateGet(this, _s)), this.editorDiv.removeEventListener("paste", __privateGet(this, _r)), this.div.focus({
            preventScroll: true
          }), this.isEditing = false, this.parent.div.classList.add("freetextEditing"));
        }
        focusin(t) {
          this._focusEventsAllowed && (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus());
        }
        onceAdded() {
          var _a6;
          this.width || (this.enableEditMode(), this.editorDiv.focus(), ((_a6 = this._initialOptions) == null ? void 0 : _a6.isCentered) && this.center(), this._initialOptions = null);
        }
        isEmpty() {
          return !this.editorDiv || this.editorDiv.innerText.trim() === "";
        }
        remove() {
          this.isEditing = false, this.parent && (this.parent.setEditingState(true), this.parent.div.classList.add("freetextEditing")), super.remove();
        }
        commit() {
          if (!this.isInEditMode()) return;
          super.commit(), this.disableEditMode();
          const t = __privateGet(this, _a), i = __privateSet(this, _a, __privateMethod(this, _C_instances, o_fn).call(this).trimEnd());
          if (t === i) return;
          const u = (p) => {
            if (__privateSet(this, _a, p), !p) {
              this.remove();
              return;
            }
            __privateMethod(this, _C_instances, f_fn).call(this), this._uiManager.rebuild(this), __privateMethod(this, _C_instances, p_fn).call(this);
          };
          this.addCommands({
            cmd: () => {
              u(i);
            },
            undo: () => {
              u(t);
            },
            mustExec: false
          }), __privateMethod(this, _C_instances, p_fn).call(this);
        }
        shouldGetKeyboardEvents() {
          return this.isInEditMode();
        }
        enterInEditMode() {
          this.enableEditMode(), this.editorDiv.focus();
        }
        dblclick(t) {
          this.enterInEditMode();
        }
        keydown(t) {
          t.target === this.div && t.key === "Enter" && (this.enterInEditMode(), t.preventDefault());
        }
        editorDivKeydown(t) {
          _C._keyboardManager.exec(this, t);
        }
        editorDivFocus(t) {
          this.isEditing = true;
        }
        editorDivBlur(t) {
          this.isEditing = false;
        }
        editorDivInput(t) {
          this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
        }
        disableEditing() {
          this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
        }
        enableEditing() {
          this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", true);
        }
        render() {
          if (this.div) return this.div;
          let t, i;
          this.width && (t = this.x, i = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", __privateGet(this, _l)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), z.AnnotationEditor._l10nPromise.get("pdfjs-free-text-default-content").then((p) => {
            var _a6;
            return (_a6 = this.editorDiv) == null ? void 0 : _a6.setAttribute("default-content", p);
          }), this.editorDiv.contentEditable = true;
          const { style: u } = this.editorDiv;
          if (u.fontSize = `calc(${__privateGet(this, _h)}px * var(--scale-factor))`, u.color = __privateGet(this, _i), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, _.bindEvents)(this, this.div, [
            "dblclick",
            "keydown"
          ]), this.width) {
            const [p, y] = this.parentDimensions;
            if (this.annotationElementId) {
              const { position: S } = __privateGet(this, _d);
              let [L, M] = this.getInitialTranslation();
              [L, M] = this.pageTranslationToScreen(L, M);
              const [N, H] = this.pageDimensions, [B, q] = this.pageTranslation;
              let nt, j;
              switch (this.rotation) {
                case 0:
                  nt = t + (S[0] - B) / N, j = i + this.height - (S[1] - q) / H;
                  break;
                case 90:
                  nt = t + (S[0] - B) / N, j = i - (S[1] - q) / H, [L, M] = [
                    M,
                    -L
                  ];
                  break;
                case 180:
                  nt = t - this.width + (S[0] - B) / N, j = i - (S[1] - q) / H, [L, M] = [
                    -L,
                    -M
                  ];
                  break;
                case 270:
                  nt = t + (S[0] - B - this.height * H) / N, j = i + (S[1] - q - this.width * N) / H, [L, M] = [
                    -M,
                    L
                  ];
                  break;
              }
              this.setAt(nt * p, j * y, L, M);
            } else this.setAt(t * p, i * y, this.width * p, this.height * y);
            __privateMethod(this, _C_instances, f_fn).call(this), this._isDraggable = true, this.editorDiv.contentEditable = false;
          } else this._isDraggable = false, this.editorDiv.contentEditable = true;
          return this.div;
        }
        editorDivPaste(t) {
          var _a6, _b2, _c5;
          const i = t.clipboardData || window.clipboardData, { types: u } = i;
          if (u.length === 1 && u[0] === "text/plain") return;
          t.preventDefault();
          const p = __privateMethod(_a6 = _C, _C_static, m_fn).call(_a6, i.getData("text") || "").replaceAll(P, `
`);
          if (!p) return;
          const y = window.getSelection();
          if (!y.rangeCount) return;
          this.editorDiv.normalize(), y.deleteFromDocument();
          const S = y.getRangeAt(0);
          if (!p.includes(`
`)) {
            S.insertNode(document.createTextNode(p)), this.editorDiv.normalize(), y.collapseToStart();
            return;
          }
          const { startContainer: L, startOffset: M } = S, N = [], H = [];
          if (L.nodeType === Node.TEXT_NODE) {
            const nt = L.parentElement;
            if (H.push(L.nodeValue.slice(M).replaceAll(P, "")), nt !== this.editorDiv) {
              let j = N;
              for (const O of this.editorDiv.childNodes) {
                if (O === nt) {
                  j = H;
                  continue;
                }
                j.push(__privateMethod(_b2 = _C, _C_static, g_fn).call(_b2, O));
              }
            }
            N.push(L.nodeValue.slice(0, M).replaceAll(P, ""));
          } else if (L === this.editorDiv) {
            let nt = N, j = 0;
            for (const O of this.editorDiv.childNodes) j++ === M && (nt = H), nt.push(__privateMethod(_c5 = _C, _C_static, g_fn).call(_c5, O));
          }
          __privateSet(this, _a, `${N.join(`
`)}${p}${H.join(`
`)}`), __privateMethod(this, _C_instances, f_fn).call(this);
          const B = new Range();
          let q = N.reduce((nt, j) => nt + j.length, 0);
          for (const { firstChild: nt } of this.editorDiv.childNodes) if (nt.nodeType === Node.TEXT_NODE) {
            const j = nt.nodeValue.length;
            if (q <= j) {
              B.setStart(nt, q), B.setEnd(nt, q);
              break;
            }
            q -= j;
          }
          y.removeAllRanges(), y.addRange(B);
        }
        get contentDiv() {
          return this.editorDiv;
        }
        static deserialize(t, i, u) {
          var _a6;
          let p = null;
          if (t instanceof G.FreeTextAnnotationElement) {
            const { data: { defaultAppearanceData: { fontSize: S, fontColor: L }, rect: M, rotation: N, id: H }, textContent: B, textPosition: q, parent: { page: { pageNumber: nt } } } = t;
            if (!B || B.length === 0) return null;
            p = t = {
              annotationType: w.AnnotationEditorType.FREETEXT,
              color: Array.from(L),
              fontSize: S,
              value: B.join(`
`),
              position: q,
              pageIndex: nt - 1,
              rect: M.slice(0),
              rotation: N,
              id: H,
              deleted: false
            };
          }
          const y = super.deserialize(t, i, u);
          return __privateSet(y, _h, t.fontSize), __privateSet(y, _i, w.Util.makeHexColor(...t.color)), __privateSet(y, _a, __privateMethod(_a6 = _C, _C_static, m_fn).call(_a6, t.value)), y.annotationElementId = t.id || null, __privateSet(y, _d, p), y;
        }
        serialize(t = false) {
          if (this.isEmpty()) return null;
          if (this.deleted) return {
            pageIndex: this.pageIndex,
            id: this.annotationElementId,
            deleted: true
          };
          const i = _C._internalPadding * this.parentScale, u = this.getRect(i, i), p = z.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : __privateGet(this, _i)), y = {
            annotationType: w.AnnotationEditorType.FREETEXT,
            color: p,
            fontSize: __privateGet(this, _h),
            value: __privateMethod(this, _C_instances, A_fn).call(this),
            pageIndex: this.pageIndex,
            rect: u,
            rotation: this.rotation,
            structTreeParentId: this._structTreeParentId
          };
          return t ? y : this.annotationElementId && !__privateMethod(this, _C_instances, v_fn).call(this, y) ? null : (y.id = this.annotationElementId, y);
        }
        renderAnnotationElement(t) {
          const i = super.renderAnnotationElement(t);
          if (this.deleted) return i;
          const { style: u } = i;
          u.fontSize = `calc(${__privateGet(this, _h)}px * var(--scale-factor))`, u.color = __privateGet(this, _i), i.replaceChildren();
          for (const y of __privateGet(this, _a).split(`
`)) {
            const S = document.createElement("div");
            S.append(y ? document.createTextNode(y) : document.createElement("br")), i.append(S);
          }
          const p = _C._internalPadding * this.parentScale;
          return t.updateEdited({
            rect: this.getRect(p, p)
          }), i;
        }
        resetAnnotationElement(t) {
          super.resetAnnotationElement(t), t.resetEdited();
        }
      };
      _t = new WeakMap();
      _e2 = new WeakMap();
      _s = new WeakMap();
      _n = new WeakMap();
      _r = new WeakMap();
      _i = new WeakMap();
      _a = new WeakMap();
      _l = new WeakMap();
      _h = new WeakMap();
      _d = new WeakMap();
      _C_instances = new WeakSet();
      u_fn = function(t) {
        const i = (p) => {
          this.editorDiv.style.fontSize = `calc(${p}px * var(--scale-factor))`, this.translate(0, -(p - __privateGet(this, _h)) * this.parentScale), __privateSet(this, _h, p), __privateMethod(this, _C_instances, p_fn).call(this);
        }, u = __privateGet(this, _h);
        this.addCommands({
          cmd: i.bind(this, t),
          undo: i.bind(this, u),
          post: this._uiManager.updateUI.bind(this._uiManager, this),
          mustExec: true,
          type: w.AnnotationEditorParamsType.FREETEXT_SIZE,
          overwriteIfSameType: true,
          keepUndo: true
        });
      };
      c_fn = function(t) {
        const i = (p) => {
          __privateSet(this, _i, this.editorDiv.style.color = p);
        }, u = __privateGet(this, _i);
        this.addCommands({
          cmd: i.bind(this, t),
          undo: i.bind(this, u),
          post: this._uiManager.updateUI.bind(this._uiManager, this),
          mustExec: true,
          type: w.AnnotationEditorParamsType.FREETEXT_COLOR,
          overwriteIfSameType: true,
          keepUndo: true
        });
      };
      o_fn = function() {
        var _a6;
        const t = [];
        this.editorDiv.normalize();
        for (const i of this.editorDiv.childNodes) t.push(__privateMethod(_a6 = _C, _C_static, g_fn).call(_a6, i));
        return t.join(`
`);
      };
      p_fn = function() {
        const [t, i] = this.parentDimensions;
        let u;
        if (this.isAttachedToDOM) u = this.div.getBoundingClientRect();
        else {
          const { currentLayer: p, div: y } = this, S = y.style.display, L = y.classList.contains("hidden");
          y.classList.remove("hidden"), y.style.display = "hidden", p.div.append(this.div), u = y.getBoundingClientRect(), y.remove(), y.style.display = S, y.classList.toggle("hidden", L);
        }
        this.rotation % 180 === this.parentRotation % 180 ? (this.width = u.width / t, this.height = u.height / i) : (this.width = u.height / t, this.height = u.width / i), this.fixAndSetPosition();
      };
      _C_static = new WeakSet();
      g_fn = function(t) {
        return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(P, "");
      };
      f_fn = function() {
        if (this.editorDiv.replaceChildren(), !!__privateGet(this, _a)) for (const t of __privateGet(this, _a).split(`
`)) {
          const i = document.createElement("div");
          i.append(t ? document.createTextNode(t) : document.createElement("br")), this.editorDiv.append(i);
        }
      };
      A_fn = function() {
        return __privateGet(this, _a).replaceAll("\xA0", " ");
      };
      m_fn = function(t) {
        return t.replaceAll(" ", "\xA0");
      };
      v_fn = function(t) {
        const { value: i, fontSize: u, color: p, pageIndex: y } = __privateGet(this, _d);
        return this._hasBeenMoved || t.value !== i || t.fontSize !== u || t.color.some((S, L) => S !== p[L]) || t.pageIndex !== y;
      };
      __privateAdd(_C, _C_static);
      __publicField(_C, "_freeTextDefaultContent", "");
      __publicField(_C, "_internalPadding", 0);
      __publicField(_C, "_defaultColor", null);
      __publicField(_C, "_defaultFontSize", 10);
      __publicField(_C, "_type", "freetext");
      __publicField(_C, "_editorType", w.AnnotationEditorType.FREETEXT);
      let C = _C;
      var E = $(61), v = $(259), r = $(419);
      const _c2 = class _c2 extends z.AnnotationEditor {
        constructor(t) {
          super({
            ...t,
            name: "highlightEditor"
          });
          __privateAdd(this, _c_instances);
          __privateAdd(this, _t2, null);
          __privateAdd(this, _e3, 0);
          __privateAdd(this, _s2);
          __privateAdd(this, _n2, null);
          __privateAdd(this, _r2, null);
          __privateAdd(this, _i2, null);
          __privateAdd(this, _a2, null);
          __privateAdd(this, _l2, 0);
          __privateAdd(this, _h2, null);
          __privateAdd(this, _d2, null);
          __privateAdd(this, _u, null);
          __privateAdd(this, _c, false);
          __privateAdd(this, _o, __privateMethod(this, _c_instances, x_fn).bind(this));
          __privateAdd(this, _p, null);
          __privateAdd(this, _g);
          __privateAdd(this, _f, null);
          __privateAdd(this, _A, "");
          __privateAdd(this, _m);
          __privateAdd(this, _v, "");
          this.color = t.color || _c2._defaultColor, __privateSet(this, _m, t.thickness || _c2._defaultThickness), __privateSet(this, _g, t.opacity || _c2._defaultOpacity), __privateSet(this, _s2, t.boxes || null), __privateSet(this, _v, t.methodOfCreation || ""), __privateSet(this, _A, t.text || ""), this._isDraggable = false, t.highlightId > -1 ? (__privateSet(this, _c, true), __privateMethod(this, _c_instances, C_fn).call(this, t), __privateMethod(this, _c_instances, b_fn).call(this)) : (__privateSet(this, _t2, t.anchorNode), __privateSet(this, _e3, t.anchorOffset), __privateSet(this, _a2, t.focusNode), __privateSet(this, _l2, t.focusOffset), __privateMethod(this, _c_instances, w_fn).call(this), __privateMethod(this, _c_instances, b_fn).call(this), this.rotate(this.rotation));
        }
        static get _keyboardManager() {
          const t = _c2.prototype;
          return (0, w.shadow)(this, "_keyboardManager", new _.KeyboardManager([
            [
              [
                "ArrowLeft",
                "mac+ArrowLeft"
              ],
              t._moveCaret,
              {
                args: [
                  0
                ]
              }
            ],
            [
              [
                "ArrowRight",
                "mac+ArrowRight"
              ],
              t._moveCaret,
              {
                args: [
                  1
                ]
              }
            ],
            [
              [
                "ArrowUp",
                "mac+ArrowUp"
              ],
              t._moveCaret,
              {
                args: [
                  2
                ]
              }
            ],
            [
              [
                "ArrowDown",
                "mac+ArrowDown"
              ],
              t._moveCaret,
              {
                args: [
                  3
                ]
              }
            ]
          ]));
        }
        get telemetryInitialData() {
          return {
            action: "added",
            type: __privateGet(this, _c) ? "free_highlight" : "highlight",
            color: this._uiManager.highlightColorNames.get(this.color),
            thickness: __privateGet(this, _m),
            methodOfCreation: __privateGet(this, _v)
          };
        }
        get telemetryFinalData() {
          return {
            type: "highlight",
            color: this._uiManager.highlightColorNames.get(this.color)
          };
        }
        static computeTelemetryFinalData(t) {
          return {
            numberOfColors: t.get("color").size
          };
        }
        static initialize(t, i) {
          var _a6;
          z.AnnotationEditor.initialize(t, i), _c2._defaultColor || (_c2._defaultColor = ((_a6 = i.highlightColors) == null ? void 0 : _a6.values().next().value) || "#fff066");
        }
        static updateDefaultParams(t, i) {
          switch (t) {
            case w.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
              _c2._defaultColor = i;
              break;
            case w.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
              _c2._defaultThickness = i;
              break;
          }
        }
        translateInPage(t, i) {
        }
        get toolbarPosition() {
          return __privateGet(this, _p);
        }
        updateParams(t, i) {
          switch (t) {
            case w.AnnotationEditorParamsType.HIGHLIGHT_COLOR:
              __privateMethod(this, _c_instances, k_fn).call(this, i);
              break;
            case w.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
              __privateMethod(this, _c_instances, I_fn).call(this, i);
              break;
          }
        }
        static get defaultPropertiesToUpdate() {
          return [
            [
              w.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR,
              _c2._defaultColor
            ],
            [
              w.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS,
              _c2._defaultThickness
            ]
          ];
        }
        get propertiesToUpdate() {
          return [
            [
              w.AnnotationEditorParamsType.HIGHLIGHT_COLOR,
              this.color || _c2._defaultColor
            ],
            [
              w.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS,
              __privateGet(this, _m) || _c2._defaultThickness
            ],
            [
              w.AnnotationEditorParamsType.HIGHLIGHT_FREE,
              __privateGet(this, _c)
            ]
          ];
        }
        async addEditToolbar() {
          const t = await super.addEditToolbar();
          return t ? (this._uiManager.highlightColors && (__privateSet(this, _r2, new v.ColorPicker({
            editor: this
          })), t.addColorPicker(__privateGet(this, _r2))), t) : null;
        }
        disableEditing() {
          super.disableEditing(), this.div.classList.toggle("disabled", true);
        }
        enableEditing() {
          super.enableEditing(), this.div.classList.toggle("disabled", false);
        }
        fixAndSetPosition() {
          return super.fixAndSetPosition(__privateMethod(this, _c_instances, T_fn).call(this));
        }
        getBaseTranslation() {
          return [
            0,
            0
          ];
        }
        getRect(t, i) {
          return super.getRect(t, i, __privateMethod(this, _c_instances, T_fn).call(this));
        }
        onceAdded() {
          this.parent.addUndoableEditor(this), this.div.focus();
        }
        remove() {
          __privateMethod(this, _c_instances, y_fn).call(this), this._reportTelemetry({
            action: "deleted"
          }), super.remove();
        }
        rebuild() {
          this.parent && (super.rebuild(), this.div !== null && (__privateMethod(this, _c_instances, b_fn).call(this), this.isAttachedToDOM || this.parent.add(this)));
        }
        setParent(t) {
          var _a6;
          let i = false;
          this.parent && !t ? __privateMethod(this, _c_instances, y_fn).call(this) : t && (__privateMethod(this, _c_instances, b_fn).call(this, t), i = !this.parent && ((_a6 = this.div) == null ? void 0 : _a6.classList.contains("selectedEditor"))), super.setParent(t), this.show(this._isVisible), i && this.select();
        }
        rotate(t) {
          var _a6, _b2, _c5;
          const { drawLayer: i } = this.parent;
          let u;
          __privateGet(this, _c) ? (t = (t - this.rotation + 360) % 360, u = __privateMethod(_a6 = _c2, _c_static, S_fn).call(_a6, __privateGet(this, _d2).box, t)) : u = __privateMethod(_b2 = _c2, _c_static, S_fn).call(_b2, this, t), i.rotate(__privateGet(this, _u), t), i.rotate(__privateGet(this, _f), t), i.updateBox(__privateGet(this, _u), u), i.updateBox(__privateGet(this, _f), __privateMethod(_c5 = _c2, _c_static, S_fn).call(_c5, __privateGet(this, _i2).box, t));
        }
        render() {
          if (this.div) return this.div;
          const t = super.render();
          __privateGet(this, _A) && (t.setAttribute("aria-label", __privateGet(this, _A)), t.setAttribute("role", "mark")), __privateGet(this, _c) ? t.classList.add("free") : this.div.addEventListener("keydown", __privateGet(this, _o));
          const i = __privateSet(this, _h2, document.createElement("div"));
          t.append(i), i.setAttribute("aria-hidden", "true"), i.className = "internal", i.style.clipPath = __privateGet(this, _n2);
          const [u, p] = this.parentDimensions;
          return this.setDims(this.width * u, this.height * p), (0, _.bindEvents)(this, __privateGet(this, _h2), [
            "pointerover",
            "pointerleave"
          ]), this.enableEditing(), t;
        }
        pointerover() {
          this.parent.drawLayer.addClass(__privateGet(this, _f), "hovered");
        }
        pointerleave() {
          this.parent.drawLayer.removeClass(__privateGet(this, _f), "hovered");
        }
        _moveCaret(t) {
          switch (this.parent.unselect(this), t) {
            case 0:
            case 2:
              __privateMethod(this, _c_instances, R_fn).call(this, true);
              break;
            case 1:
            case 3:
              __privateMethod(this, _c_instances, R_fn).call(this, false);
              break;
          }
        }
        select() {
          var _a6, _b2;
          super.select(), __privateGet(this, _f) && ((_a6 = this.parent) == null ? void 0 : _a6.drawLayer.removeClass(__privateGet(this, _f), "hovered"), (_b2 = this.parent) == null ? void 0 : _b2.drawLayer.addClass(__privateGet(this, _f), "selected"));
        }
        unselect() {
          var _a6;
          super.unselect(), __privateGet(this, _f) && ((_a6 = this.parent) == null ? void 0 : _a6.drawLayer.removeClass(__privateGet(this, _f), "selected"), __privateGet(this, _c) || __privateMethod(this, _c_instances, R_fn).call(this, false));
        }
        get _mustFixPosition() {
          return !__privateGet(this, _c);
        }
        show(t = this._isVisible) {
          super.show(t), this.parent && (this.parent.drawLayer.show(__privateGet(this, _u), t), this.parent.drawLayer.show(__privateGet(this, _f), t));
        }
        static startHighlighting(t, i, { target: u, x: p, y }) {
          const { x: S, y: L, width: M, height: N } = u.getBoundingClientRect(), H = (j) => {
            __privateMethod(this, _c_static, __fn).call(this, t, j);
          }, B = {
            capture: true,
            passive: false
          }, q = (j) => {
            j.preventDefault(), j.stopPropagation();
          }, nt = (j) => {
            u.removeEventListener("pointermove", H), window.removeEventListener("blur", nt), window.removeEventListener("pointerup", nt), window.removeEventListener("pointerdown", q, B), window.removeEventListener("contextmenu", r.noContextMenu), __privateMethod(this, _c_static, P_fn).call(this, t, j);
          };
          window.addEventListener("blur", nt), window.addEventListener("pointerup", nt), window.addEventListener("pointerdown", q, B), window.addEventListener("contextmenu", r.noContextMenu), u.addEventListener("pointermove", H), this._freeHighlight = new E.FreeOutliner({
            x: p,
            y
          }, [
            S,
            L,
            M,
            N
          ], t.scale, this._defaultThickness / 2, i, 1e-3), { id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, true);
        }
        static deserialize(t, i, u) {
          var _a6;
          const p = super.deserialize(t, i, u), { rect: [y, S, L, M], color: N, quadPoints: H } = t;
          p.color = w.Util.makeHexColor(...N), __privateSet(p, _g, t.opacity);
          const [B, q] = p.pageDimensions;
          p.width = (L - y) / B, p.height = (M - S) / q;
          const nt = __privateSet(p, _s2, []);
          for (let j = 0; j < H.length; j += 8) nt.push({
            x: (H[4] - L) / B,
            y: (M - (1 - H[j + 5])) / q,
            width: (H[j + 2] - H[j]) / B,
            height: (H[j + 5] - H[j + 1]) / q
          });
          return __privateMethod(_a6 = p, _c_instances, w_fn).call(_a6), p;
        }
        serialize(t = false) {
          if (this.isEmpty() || t) return null;
          const i = this.getRect(0, 0), u = z.AnnotationEditor._colorManager.convert(this.color);
          return {
            annotationType: w.AnnotationEditorType.HIGHLIGHT,
            color: u,
            opacity: __privateGet(this, _g),
            thickness: __privateGet(this, _m),
            quadPoints: __privateMethod(this, _c_instances, M_fn).call(this),
            outlines: __privateMethod(this, _c_instances, F_fn).call(this, i),
            pageIndex: this.pageIndex,
            rect: i,
            rotation: __privateMethod(this, _c_instances, T_fn).call(this),
            structTreeParentId: this._structTreeParentId
          };
        }
        static canCreateNewEmptyEditor() {
          return false;
        }
      };
      _t2 = new WeakMap();
      _e3 = new WeakMap();
      _s2 = new WeakMap();
      _n2 = new WeakMap();
      _r2 = new WeakMap();
      _i2 = new WeakMap();
      _a2 = new WeakMap();
      _l2 = new WeakMap();
      _h2 = new WeakMap();
      _d2 = new WeakMap();
      _u = new WeakMap();
      _c = new WeakMap();
      _o = new WeakMap();
      _p = new WeakMap();
      _g = new WeakMap();
      _f = new WeakMap();
      _A = new WeakMap();
      _m = new WeakMap();
      _v = new WeakMap();
      _c_instances = new WeakSet();
      w_fn = function() {
        const t = new E.Outliner(__privateGet(this, _s2), 1e-3);
        __privateSet(this, _d2, t.getOutlines()), { x: this.x, y: this.y, width: this.width, height: this.height } = __privateGet(this, _d2).box;
        const i = new E.Outliner(__privateGet(this, _s2), 25e-4, 1e-3, this._uiManager.direction === "ltr");
        __privateSet(this, _i2, i.getOutlines());
        const { lastPoint: u } = __privateGet(this, _i2).box;
        __privateSet(this, _p, [
          (u[0] - this.x) / this.width,
          (u[1] - this.y) / this.height
        ]);
      };
      C_fn = function({ highlightOutlines: t, highlightId: i, clipPathId: u }) {
        var _a6, _b2;
        __privateSet(this, _d2, t);
        const p = 1.5;
        if (__privateSet(this, _i2, t.getNewOutline(__privateGet(this, _m) / 2 + p, 25e-4)), i >= 0) __privateSet(this, _u, i), __privateSet(this, _n2, u), this.parent.drawLayer.finalizeLine(i, t), __privateSet(this, _f, this.parent.drawLayer.highlightOutline(__privateGet(this, _i2)));
        else if (this.parent) {
          const H = this.parent.viewport.rotation;
          this.parent.drawLayer.updateLine(__privateGet(this, _u), t), this.parent.drawLayer.updateBox(__privateGet(this, _u), __privateMethod(_a6 = _c2, _c_static, S_fn).call(_a6, __privateGet(this, _d2).box, (H - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(__privateGet(this, _f), __privateGet(this, _i2)), this.parent.drawLayer.updateBox(__privateGet(this, _f), __privateMethod(_b2 = _c2, _c_static, S_fn).call(_b2, __privateGet(this, _i2).box, H));
        }
        const { x: y, y: S, width: L, height: M } = t.box;
        switch (this.rotation) {
          case 0:
            this.x = y, this.y = S, this.width = L, this.height = M;
            break;
          case 90: {
            const [H, B] = this.parentDimensions;
            this.x = S, this.y = 1 - y, this.width = L * B / H, this.height = M * H / B;
            break;
          }
          case 180:
            this.x = 1 - y, this.y = 1 - S, this.width = L, this.height = M;
            break;
          case 270: {
            const [H, B] = this.parentDimensions;
            this.x = 1 - S, this.y = y, this.width = L * B / H, this.height = M * H / B;
            break;
          }
        }
        const { lastPoint: N } = __privateGet(this, _i2).box;
        __privateSet(this, _p, [
          (N[0] - y) / L,
          (N[1] - S) / M
        ]);
      };
      k_fn = function(t) {
        const i = (p) => {
          var _a6, _b2;
          this.color = p, (_a6 = this.parent) == null ? void 0 : _a6.drawLayer.changeColor(__privateGet(this, _u), p), (_b2 = __privateGet(this, _r2)) == null ? void 0 : _b2.updateColor(p);
        }, u = this.color;
        this.addCommands({
          cmd: i.bind(this, t),
          undo: i.bind(this, u),
          post: this._uiManager.updateUI.bind(this._uiManager, this),
          mustExec: true,
          type: w.AnnotationEditorParamsType.HIGHLIGHT_COLOR,
          overwriteIfSameType: true,
          keepUndo: true
        }), this._reportTelemetry({
          action: "color_changed",
          color: this._uiManager.highlightColorNames.get(t)
        }, true);
      };
      I_fn = function(t) {
        const i = __privateGet(this, _m), u = (p) => {
          __privateSet(this, _m, p), __privateMethod(this, _c_instances, L_fn).call(this, p);
        };
        this.addCommands({
          cmd: u.bind(this, t),
          undo: u.bind(this, i),
          post: this._uiManager.updateUI.bind(this._uiManager, this),
          mustExec: true,
          type: w.AnnotationEditorParamsType.INK_THICKNESS,
          overwriteIfSameType: true,
          keepUndo: true
        }), this._reportTelemetry({
          action: "thickness_changed",
          thickness: t
        }, true);
      };
      L_fn = function(t) {
        if (!__privateGet(this, _c)) return;
        __privateMethod(this, _c_instances, C_fn).call(this, {
          highlightOutlines: __privateGet(this, _d2).getNewOutline(t / 2)
        }), this.fixAndSetPosition();
        const [i, u] = this.parentDimensions;
        this.setDims(this.width * i, this.height * u);
      };
      y_fn = function() {
        __privateGet(this, _u) === null || !this.parent || (this.parent.drawLayer.remove(__privateGet(this, _u)), __privateSet(this, _u, null), this.parent.drawLayer.remove(__privateGet(this, _f)), __privateSet(this, _f, null));
      };
      b_fn = function(t = this.parent) {
        __privateGet(this, _u) === null && ({ id: __privateWrapper(this, _u)._, clipPathId: __privateWrapper(this, _n2)._ } = t.drawLayer.highlight(__privateGet(this, _d2), this.color, __privateGet(this, _g)), __privateSet(this, _f, t.drawLayer.highlightOutline(__privateGet(this, _i2))), __privateGet(this, _h2) && (__privateGet(this, _h2).style.clipPath = __privateGet(this, _n2)));
      };
      _c_static = new WeakSet();
      S_fn = function({ x: t, y: i, width: u, height: p }, y) {
        switch (y) {
          case 90:
            return {
              x: 1 - i - p,
              y: t,
              width: p,
              height: u
            };
          case 180:
            return {
              x: 1 - t - u,
              y: 1 - i - p,
              width: u,
              height: p
            };
          case 270:
            return {
              x: i,
              y: 1 - t - u,
              width: p,
              height: u
            };
        }
        return {
          x: t,
          y: i,
          width: u,
          height: p
        };
      };
      x_fn = function(t) {
        _c2._keyboardManager.exec(this, t);
      };
      R_fn = function(t) {
        if (!__privateGet(this, _t2)) return;
        const i = window.getSelection();
        t ? i.setPosition(__privateGet(this, _t2), __privateGet(this, _e3)) : i.setPosition(__privateGet(this, _a2), __privateGet(this, _l2));
      };
      T_fn = function() {
        return __privateGet(this, _c) ? this.rotation : 0;
      };
      M_fn = function() {
        if (__privateGet(this, _c)) return null;
        const [t, i] = this.pageDimensions, u = __privateGet(this, _s2), p = new Array(u.length * 8);
        let y = 0;
        for (const { x: S, y: L, width: M, height: N } of u) {
          const H = S * t, B = (1 - L - N) * i;
          p[y] = p[y + 4] = H, p[y + 1] = p[y + 3] = B, p[y + 2] = p[y + 6] = H + M * t, p[y + 5] = p[y + 7] = B + N * i, y += 8;
        }
        return p;
      };
      F_fn = function(t) {
        return __privateGet(this, _d2).serialize(t, __privateMethod(this, _c_instances, T_fn).call(this));
      };
      __fn = function(t, i) {
        this._freeHighlight.add(i) && t.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
      };
      P_fn = function(t, i) {
        this._freeHighlight.isEmpty() ? t.drawLayer.removeFreeHighlight(this._freeHighlightId) : t.createAndAddNewEditor(i, false, {
          highlightId: this._freeHighlightId,
          highlightOutlines: this._freeHighlight.getOutlines(),
          clipPathId: this._freeHighlightClipId,
          methodOfCreation: "main_toolbar"
        }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
      };
      __privateAdd(_c2, _c_static);
      __publicField(_c2, "_defaultColor", null);
      __publicField(_c2, "_defaultOpacity", 1);
      __publicField(_c2, "_defaultThickness", 12);
      __publicField(_c2, "_l10nPromise");
      __publicField(_c2, "_type", "highlight");
      __publicField(_c2, "_editorType", w.AnnotationEditorType.HIGHLIGHT);
      __publicField(_c2, "_freeHighlightId", -1);
      __publicField(_c2, "_freeHighlight", null);
      __publicField(_c2, "_freeHighlightClipId", "");
      let c = _c2;
      const _l4 = class _l4 extends z.AnnotationEditor {
        constructor(t) {
          super({
            ...t,
            name: "inkEditor"
          });
          __privateAdd(this, _l_instances);
          __privateAdd(this, _t3, 0);
          __privateAdd(this, _e4, 0);
          __privateAdd(this, _s3, this.canvasPointermove.bind(this));
          __privateAdd(this, _n3, this.canvasPointerleave.bind(this));
          __privateAdd(this, _r3, this.canvasPointerup.bind(this));
          __privateAdd(this, _i3, this.canvasPointerdown.bind(this));
          __privateAdd(this, _a3, null);
          __privateAdd(this, _l3, new Path2D());
          __privateAdd(this, _h3, false);
          __privateAdd(this, _d3, false);
          __privateAdd(this, _u2, false);
          __privateAdd(this, _c3, null);
          __privateAdd(this, _o2, 0);
          __privateAdd(this, _p2, 0);
          __privateAdd(this, _g2, null);
          this.color = t.color || null, this.thickness = t.thickness || null, this.opacity = t.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = true;
        }
        static initialize(t, i) {
          z.AnnotationEditor.initialize(t, i);
        }
        static updateDefaultParams(t, i) {
          switch (t) {
            case w.AnnotationEditorParamsType.INK_THICKNESS:
              _l4._defaultThickness = i;
              break;
            case w.AnnotationEditorParamsType.INK_COLOR:
              _l4._defaultColor = i;
              break;
            case w.AnnotationEditorParamsType.INK_OPACITY:
              _l4._defaultOpacity = i / 100;
              break;
          }
        }
        updateParams(t, i) {
          switch (t) {
            case w.AnnotationEditorParamsType.INK_THICKNESS:
              __privateMethod(this, _l_instances, f_fn2).call(this, i);
              break;
            case w.AnnotationEditorParamsType.INK_COLOR:
              __privateMethod(this, _l_instances, A_fn2).call(this, i);
              break;
            case w.AnnotationEditorParamsType.INK_OPACITY:
              __privateMethod(this, _l_instances, m_fn2).call(this, i);
              break;
          }
        }
        static get defaultPropertiesToUpdate() {
          return [
            [
              w.AnnotationEditorParamsType.INK_THICKNESS,
              _l4._defaultThickness
            ],
            [
              w.AnnotationEditorParamsType.INK_COLOR,
              _l4._defaultColor || z.AnnotationEditor._defaultLineColor
            ],
            [
              w.AnnotationEditorParamsType.INK_OPACITY,
              Math.round(_l4._defaultOpacity * 100)
            ]
          ];
        }
        get propertiesToUpdate() {
          return [
            [
              w.AnnotationEditorParamsType.INK_THICKNESS,
              this.thickness || _l4._defaultThickness
            ],
            [
              w.AnnotationEditorParamsType.INK_COLOR,
              this.color || _l4._defaultColor || z.AnnotationEditor._defaultLineColor
            ],
            [
              w.AnnotationEditorParamsType.INK_OPACITY,
              Math.round(100 * (this.opacity ?? _l4._defaultOpacity))
            ]
          ];
        }
        rebuild() {
          this.parent && (super.rebuild(), this.div !== null && (this.canvas || (__privateMethod(this, _l_instances, T_fn2).call(this), __privateMethod(this, _l_instances, M_fn2).call(this)), this.isAttachedToDOM || (this.parent.add(this), __privateMethod(this, _l_instances, F_fn2).call(this)), __privateMethod(this, _l_instances, N_fn).call(this)));
        }
        remove() {
          this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, __privateGet(this, _a3) && (clearTimeout(__privateGet(this, _a3)), __privateSet(this, _a3, null)), __privateGet(this, _c3).disconnect(), __privateSet(this, _c3, null), super.remove());
        }
        setParent(t) {
          !this.parent && t ? this._uiManager.removeShouldRescale(this) : this.parent && t === null && this._uiManager.addShouldRescale(this), super.setParent(t);
        }
        onScaleChanging() {
          const [t, i] = this.parentDimensions, u = this.width * t, p = this.height * i;
          this.setDimensions(u, p);
        }
        enableEditMode() {
          __privateGet(this, _h3) || this.canvas === null || (super.enableEditMode(), this._isDraggable = false, this.canvas.addEventListener("pointerdown", __privateGet(this, _i3)));
        }
        disableEditMode() {
          !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", __privateGet(this, _i3)));
        }
        onceAdded() {
          this._isDraggable = !this.isEmpty();
        }
        isEmpty() {
          return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
        }
        commit() {
          __privateGet(this, _h3) || (super.commit(), this.isEditing = false, this.disableEditMode(), this.setInForeground(), __privateSet(this, _h3, true), this.div.classList.add("disabled"), __privateMethod(this, _l_instances, N_fn).call(this, true), this.select(), this.parent.addInkEditorIfNeeded(true), this.moveInDOM(), this.div.focus({
            preventScroll: true
          }));
        }
        focusin(t) {
          this._focusEventsAllowed && (super.focusin(t), this.enableEditMode());
        }
        canvasPointerdown(t) {
          t.button !== 0 || !this.isInEditMode() || __privateGet(this, _h3) || (this.setInForeground(), t.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
            preventScroll: true
          }), __privateMethod(this, _l_instances, C_fn2).call(this, t.offsetX, t.offsetY));
        }
        canvasPointermove(t) {
          t.preventDefault(), __privateMethod(this, _l_instances, k_fn2).call(this, t.offsetX, t.offsetY);
        }
        canvasPointerup(t) {
          t.preventDefault(), __privateMethod(this, _l_instances, R_fn2).call(this, t);
        }
        canvasPointerleave(t) {
          __privateMethod(this, _l_instances, R_fn2).call(this, t);
        }
        get isResizable() {
          return !this.isEmpty() && __privateGet(this, _h3);
        }
        render() {
          if (this.div) return this.div;
          let t, i;
          this.width && (t = this.x, i = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
          const [u, p, y, S] = __privateMethod(this, _l_instances, v_fn2).call(this);
          if (this.setAt(u, p, 0, 0), this.setDims(y, S), __privateMethod(this, _l_instances, T_fn2).call(this), this.width) {
            const [L, M] = this.parentDimensions;
            this.setAspectRatio(this.width * L, this.height * M), this.setAt(t * L, i * M, this.width * L, this.height * M), __privateSet(this, _u2, true), __privateMethod(this, _l_instances, F_fn2).call(this), this.setDims(this.width * L, this.height * M), __privateMethod(this, _l_instances, x_fn2).call(this), this.div.classList.add("disabled");
          } else this.div.classList.add("editing"), this.enableEditMode();
          return __privateMethod(this, _l_instances, M_fn2).call(this), this.div;
        }
        setDimensions(t, i) {
          const u = Math.round(t), p = Math.round(i);
          if (__privateGet(this, _o2) === u && __privateGet(this, _p2) === p) return;
          __privateSet(this, _o2, u), __privateSet(this, _p2, p), this.canvas.style.visibility = "hidden";
          const [y, S] = this.parentDimensions;
          this.width = t / y, this.height = i / S, this.fixAndSetPosition(), __privateGet(this, _h3) && __privateMethod(this, _l_instances, __fn2).call(this, t, i), __privateMethod(this, _l_instances, F_fn2).call(this), __privateMethod(this, _l_instances, x_fn2).call(this), this.canvas.style.visibility = "visible", this.fixDims();
        }
        static deserialize(t, i, u) {
          var _a6, _b2, _c5;
          if (t instanceof G.InkAnnotationElement) return null;
          const p = super.deserialize(t, i, u);
          p.thickness = t.thickness, p.color = w.Util.makeHexColor(...t.color), p.opacity = t.opacity;
          const [y, S] = p.pageDimensions, L = p.width * y, M = p.height * S, N = p.parentScale, H = t.thickness / 2;
          __privateSet(p, _h3, true), __privateSet(p, _o2, Math.round(L)), __privateSet(p, _p2, Math.round(M));
          const { paths: B, rect: q, rotation: nt } = t;
          for (let { bezier: O } of B) {
            O = __privateMethod(_a6 = _l4, _l_static, $_fn).call(_a6, O, q, nt);
            const V = [];
            p.paths.push(V);
            let Y = N * (O[0] - H), tt = N * (O[1] - H);
            for (let at = 2, lt = O.length; at < lt; at += 6) {
              const pt = N * (O[at] - H), dt = N * (O[at + 1] - H), ot = N * (O[at + 2] - H), ut = N * (O[at + 3] - H), et = N * (O[at + 4] - H), m = N * (O[at + 5] - H);
              V.push([
                [
                  Y,
                  tt
                ],
                [
                  pt,
                  dt
                ],
                [
                  ot,
                  ut
                ],
                [
                  et,
                  m
                ]
              ]), Y = et, tt = m;
            }
            const Z = __privateMethod(this, _l_static, D_fn).call(this, V);
            p.bezierPath2D.push(Z);
          }
          const j = __privateMethod(_b2 = p, _l_instances, G_fn).call(_b2);
          return __privateSet(p, _e4, Math.max(z.AnnotationEditor.MIN_SIZE, j[2] - j[0])), __privateSet(p, _t3, Math.max(z.AnnotationEditor.MIN_SIZE, j[3] - j[1])), __privateMethod(_c5 = p, _l_instances, __fn2).call(_c5, L, M), p;
        }
        serialize() {
          if (this.isEmpty()) return null;
          const t = this.getRect(0, 0), i = z.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
          return {
            annotationType: w.AnnotationEditorType.INK,
            color: i,
            thickness: this.thickness,
            opacity: this.opacity,
            paths: __privateMethod(this, _l_instances, X_fn).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, t),
            pageIndex: this.pageIndex,
            rect: t,
            rotation: this.rotation,
            structTreeParentId: this._structTreeParentId
          };
        }
      };
      _t3 = new WeakMap();
      _e4 = new WeakMap();
      _s3 = new WeakMap();
      _n3 = new WeakMap();
      _r3 = new WeakMap();
      _i3 = new WeakMap();
      _a3 = new WeakMap();
      _l3 = new WeakMap();
      _h3 = new WeakMap();
      _d3 = new WeakMap();
      _u2 = new WeakMap();
      _c3 = new WeakMap();
      _o2 = new WeakMap();
      _p2 = new WeakMap();
      _g2 = new WeakMap();
      _l_instances = new WeakSet();
      f_fn2 = function(t) {
        const i = (p) => {
          this.thickness = p, __privateMethod(this, _l_instances, N_fn).call(this);
        }, u = this.thickness;
        this.addCommands({
          cmd: i.bind(this, t),
          undo: i.bind(this, u),
          post: this._uiManager.updateUI.bind(this._uiManager, this),
          mustExec: true,
          type: w.AnnotationEditorParamsType.INK_THICKNESS,
          overwriteIfSameType: true,
          keepUndo: true
        });
      };
      A_fn2 = function(t) {
        const i = (p) => {
          this.color = p, __privateMethod(this, _l_instances, x_fn2).call(this);
        }, u = this.color;
        this.addCommands({
          cmd: i.bind(this, t),
          undo: i.bind(this, u),
          post: this._uiManager.updateUI.bind(this._uiManager, this),
          mustExec: true,
          type: w.AnnotationEditorParamsType.INK_COLOR,
          overwriteIfSameType: true,
          keepUndo: true
        });
      };
      m_fn2 = function(t) {
        const i = (p) => {
          this.opacity = p, __privateMethod(this, _l_instances, x_fn2).call(this);
        };
        t /= 100;
        const u = this.opacity;
        this.addCommands({
          cmd: i.bind(this, t),
          undo: i.bind(this, u),
          post: this._uiManager.updateUI.bind(this._uiManager, this),
          mustExec: true,
          type: w.AnnotationEditorParamsType.INK_OPACITY,
          overwriteIfSameType: true,
          keepUndo: true
        });
      };
      v_fn2 = function() {
        const { parentRotation: t, parentDimensions: [i, u] } = this;
        switch (t) {
          case 90:
            return [
              0,
              u,
              u,
              i
            ];
          case 180:
            return [
              i,
              u,
              i,
              u
            ];
          case 270:
            return [
              i,
              0,
              u,
              i
            ];
          default:
            return [
              0,
              0,
              i,
              u
            ];
        }
      };
      w_fn2 = function() {
        const { ctx: t, color: i, opacity: u, thickness: p, parentScale: y, scaleFactor: S } = this;
        t.lineWidth = p * y / S, t.lineCap = "round", t.lineJoin = "round", t.miterLimit = 10, t.strokeStyle = `${i}${(0, _.opacityToHex)(u)}`;
      };
      C_fn2 = function(t, i) {
        this.canvas.addEventListener("contextmenu", r.noContextMenu), this.canvas.addEventListener("pointerleave", __privateGet(this, _n3)), this.canvas.addEventListener("pointermove", __privateGet(this, _s3)), this.canvas.addEventListener("pointerup", __privateGet(this, _r3)), this.canvas.removeEventListener("pointerdown", __privateGet(this, _i3)), this.isEditing = true, __privateGet(this, _u2) || (__privateSet(this, _u2, true), __privateMethod(this, _l_instances, F_fn2).call(this), this.thickness || (this.thickness = _l4._defaultThickness), this.color || (this.color = _l4._defaultColor || z.AnnotationEditor._defaultLineColor), this.opacity ?? (this.opacity = _l4._defaultOpacity)), this.currentPath.push([
          t,
          i
        ]), __privateSet(this, _d3, false), __privateMethod(this, _l_instances, w_fn2).call(this), __privateSet(this, _g2, () => {
          __privateMethod(this, _l_instances, y_fn2).call(this), __privateGet(this, _g2) && window.requestAnimationFrame(__privateGet(this, _g2));
        }), window.requestAnimationFrame(__privateGet(this, _g2));
      };
      k_fn2 = function(t, i) {
        const [u, p] = this.currentPath.at(-1);
        if (this.currentPath.length > 1 && t === u && i === p) return;
        const y = this.currentPath;
        let S = __privateGet(this, _l3);
        if (y.push([
          t,
          i
        ]), __privateSet(this, _d3, true), y.length <= 2) {
          S.moveTo(...y[0]), S.lineTo(t, i);
          return;
        }
        y.length === 3 && (__privateSet(this, _l3, S = new Path2D()), S.moveTo(...y[0])), __privateMethod(this, _l_instances, b_fn2).call(this, S, ...y.at(-3), ...y.at(-2), t, i);
      };
      I_fn2 = function() {
        if (this.currentPath.length === 0) return;
        const t = this.currentPath.at(-1);
        __privateGet(this, _l3).lineTo(...t);
      };
      L_fn2 = function(t, i) {
        __privateSet(this, _g2, null), t = Math.min(Math.max(t, 0), this.canvas.width), i = Math.min(Math.max(i, 0), this.canvas.height), __privateMethod(this, _l_instances, k_fn2).call(this, t, i), __privateMethod(this, _l_instances, I_fn2).call(this);
        let u;
        if (this.currentPath.length !== 1) u = __privateMethod(this, _l_instances, S_fn2).call(this);
        else {
          const M = [
            t,
            i
          ];
          u = [
            [
              M,
              M.slice(),
              M.slice(),
              M
            ]
          ];
        }
        const p = __privateGet(this, _l3), y = this.currentPath;
        this.currentPath = [], __privateSet(this, _l3, new Path2D());
        const S = () => {
          this.allRawPaths.push(y), this.paths.push(u), this.bezierPath2D.push(p), this._uiManager.rebuild(this);
        }, L = () => {
          this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (__privateMethod(this, _l_instances, T_fn2).call(this), __privateMethod(this, _l_instances, M_fn2).call(this)), __privateMethod(this, _l_instances, N_fn).call(this));
        };
        this.addCommands({
          cmd: S,
          undo: L,
          mustExec: true
        });
      };
      y_fn2 = function() {
        if (!__privateGet(this, _d3)) return;
        __privateSet(this, _d3, false);
        const t = Math.ceil(this.thickness * this.parentScale), i = this.currentPath.slice(-3), u = i.map((S) => S[0]), p = i.map((S) => S[1]);
        Math.min(...u) - t, Math.max(...u) + t, Math.min(...p) - t, Math.max(...p) + t;
        const { ctx: y } = this;
        y.save(), y.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const S of this.bezierPath2D) y.stroke(S);
        y.stroke(__privateGet(this, _l3)), y.restore();
      };
      b_fn2 = function(t, i, u, p, y, S, L) {
        const M = (i + p) / 2, N = (u + y) / 2, H = (p + S) / 2, B = (y + L) / 2;
        t.bezierCurveTo(M + 2 * (p - M) / 3, N + 2 * (y - N) / 3, H + 2 * (p - H) / 3, B + 2 * (y - B) / 3, H, B);
      };
      S_fn2 = function() {
        const t = this.currentPath;
        if (t.length <= 2) return [
          [
            t[0],
            t[0],
            t.at(-1),
            t.at(-1)
          ]
        ];
        const i = [];
        let u, [p, y] = t[0];
        for (u = 1; u < t.length - 2; u++) {
          const [q, nt] = t[u], [j, O] = t[u + 1], V = (q + j) / 2, Y = (nt + O) / 2, tt = [
            p + 2 * (q - p) / 3,
            y + 2 * (nt - y) / 3
          ], Z = [
            V + 2 * (q - V) / 3,
            Y + 2 * (nt - Y) / 3
          ];
          i.push([
            [
              p,
              y
            ],
            tt,
            Z,
            [
              V,
              Y
            ]
          ]), [p, y] = [
            V,
            Y
          ];
        }
        const [S, L] = t[u], [M, N] = t[u + 1], H = [
          p + 2 * (S - p) / 3,
          y + 2 * (L - y) / 3
        ], B = [
          M + 2 * (S - M) / 3,
          N + 2 * (L - N) / 3
        ];
        return i.push([
          [
            p,
            y
          ],
          H,
          B,
          [
            M,
            N
          ]
        ]), i;
      };
      x_fn2 = function() {
        if (this.isEmpty()) {
          __privateMethod(this, _l_instances, P_fn2).call(this);
          return;
        }
        __privateMethod(this, _l_instances, w_fn2).call(this);
        const { canvas: t, ctx: i } = this;
        i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, t.width, t.height), __privateMethod(this, _l_instances, P_fn2).call(this);
        for (const u of this.bezierPath2D) i.stroke(u);
      };
      R_fn2 = function(t) {
        this.canvas.removeEventListener("pointerleave", __privateGet(this, _n3)), this.canvas.removeEventListener("pointermove", __privateGet(this, _s3)), this.canvas.removeEventListener("pointerup", __privateGet(this, _r3)), this.canvas.addEventListener("pointerdown", __privateGet(this, _i3)), __privateGet(this, _a3) && clearTimeout(__privateGet(this, _a3)), __privateSet(this, _a3, setTimeout(() => {
          __privateSet(this, _a3, null), this.canvas.removeEventListener("contextmenu", r.noContextMenu);
        }, 10)), __privateMethod(this, _l_instances, L_fn2).call(this, t.offsetX, t.offsetY), this.addToAnnotationStorage(), this.setInBackground();
      };
      T_fn2 = function() {
        this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
      };
      M_fn2 = function() {
        __privateSet(this, _c3, new ResizeObserver((t) => {
          const i = t[0].contentRect;
          i.width && i.height && this.setDimensions(i.width, i.height);
        })), __privateGet(this, _c3).observe(this.div);
      };
      F_fn2 = function() {
        if (!__privateGet(this, _u2)) return;
        const [t, i] = this.parentDimensions;
        this.canvas.width = Math.ceil(this.width * t), this.canvas.height = Math.ceil(this.height * i), __privateMethod(this, _l_instances, P_fn2).call(this);
      };
      __fn2 = function(t, i) {
        const u = __privateMethod(this, _l_instances, B_fn).call(this), p = (t - u) / __privateGet(this, _e4), y = (i - u) / __privateGet(this, _t3);
        this.scaleFactor = Math.min(p, y);
      };
      P_fn2 = function() {
        const t = __privateMethod(this, _l_instances, B_fn).call(this) / 2;
        this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + t, this.translationY * this.scaleFactor + t);
      };
      _l_static = new WeakSet();
      D_fn = function(t) {
        const i = new Path2D();
        for (let u = 0, p = t.length; u < p; u++) {
          const [y, S, L, M] = t[u];
          u === 0 && i.moveTo(...y), i.bezierCurveTo(S[0], S[1], L[0], L[1], M[0], M[1]);
        }
        return i;
      };
      V_fn = function(t, i, u) {
        const [p, y, S, L] = i;
        switch (u) {
          case 0:
            for (let M = 0, N = t.length; M < N; M += 2) t[M] += p, t[M + 1] = L - t[M + 1];
            break;
          case 90:
            for (let M = 0, N = t.length; M < N; M += 2) {
              const H = t[M];
              t[M] = t[M + 1] + p, t[M + 1] = H + y;
            }
            break;
          case 180:
            for (let M = 0, N = t.length; M < N; M += 2) t[M] = S - t[M], t[M + 1] += y;
            break;
          case 270:
            for (let M = 0, N = t.length; M < N; M += 2) {
              const H = t[M];
              t[M] = S - t[M + 1], t[M + 1] = L - H;
            }
            break;
          default:
            throw new Error("Invalid rotation");
        }
        return t;
      };
      $_fn = function(t, i, u) {
        const [p, y, S, L] = i;
        switch (u) {
          case 0:
            for (let M = 0, N = t.length; M < N; M += 2) t[M] -= p, t[M + 1] = L - t[M + 1];
            break;
          case 90:
            for (let M = 0, N = t.length; M < N; M += 2) {
              const H = t[M];
              t[M] = t[M + 1] - y, t[M + 1] = H - p;
            }
            break;
          case 180:
            for (let M = 0, N = t.length; M < N; M += 2) t[M] = S - t[M], t[M + 1] -= y;
            break;
          case 270:
            for (let M = 0, N = t.length; M < N; M += 2) {
              const H = t[M];
              t[M] = L - t[M + 1], t[M + 1] = S - H;
            }
            break;
          default:
            throw new Error("Invalid rotation");
        }
        return t;
      };
      X_fn = function(t, i, u, p) {
        var _a6, _b2;
        const y = [], S = this.thickness / 2, L = t * i + S, M = t * u + S;
        for (const N of this.paths) {
          const H = [], B = [];
          for (let q = 0, nt = N.length; q < nt; q++) {
            const [j, O, V, Y] = N[q];
            if (j[0] === Y[0] && j[1] === Y[1] && nt === 1) {
              const et = t * j[0] + L, m = t * j[1] + M;
              H.push(et, m), B.push(et, m);
              break;
            }
            const tt = t * j[0] + L, Z = t * j[1] + M, at = t * O[0] + L, lt = t * O[1] + M, pt = t * V[0] + L, dt = t * V[1] + M, ot = t * Y[0] + L, ut = t * Y[1] + M;
            q === 0 && (H.push(tt, Z), B.push(tt, Z)), H.push(at, lt, pt, dt, ot, ut), B.push(at, lt), q === nt - 1 && B.push(ot, ut);
          }
          y.push({
            bezier: __privateMethod(_a6 = _l4, _l_static, V_fn).call(_a6, H, p, this.rotation),
            points: __privateMethod(_b2 = _l4, _l_static, V_fn).call(_b2, B, p, this.rotation)
          });
        }
        return y;
      };
      G_fn = function() {
        let t = 1 / 0, i = -1 / 0, u = 1 / 0, p = -1 / 0;
        for (const y of this.paths) for (const [S, L, M, N] of y) {
          const H = w.Util.bezierBoundingBox(...S, ...L, ...M, ...N);
          t = Math.min(t, H[0]), u = Math.min(u, H[1]), i = Math.max(i, H[2]), p = Math.max(p, H[3]);
        }
        return [
          t,
          u,
          i,
          p
        ];
      };
      B_fn = function() {
        return __privateGet(this, _h3) ? Math.ceil(this.thickness * this.parentScale) : 0;
      };
      N_fn = function(t = false) {
        if (this.isEmpty()) return;
        if (!__privateGet(this, _h3)) {
          __privateMethod(this, _l_instances, x_fn2).call(this);
          return;
        }
        const i = __privateMethod(this, _l_instances, G_fn).call(this), u = __privateMethod(this, _l_instances, B_fn).call(this);
        __privateSet(this, _e4, Math.max(z.AnnotationEditor.MIN_SIZE, i[2] - i[0])), __privateSet(this, _t3, Math.max(z.AnnotationEditor.MIN_SIZE, i[3] - i[1]));
        const p = Math.ceil(u + __privateGet(this, _e4) * this.scaleFactor), y = Math.ceil(u + __privateGet(this, _t3) * this.scaleFactor), [S, L] = this.parentDimensions;
        this.width = p / S, this.height = y / L, this.setAspectRatio(p, y);
        const M = this.translationX, N = this.translationY;
        this.translationX = -i[0], this.translationY = -i[1], __privateMethod(this, _l_instances, F_fn2).call(this), __privateMethod(this, _l_instances, x_fn2).call(this), __privateSet(this, _o2, p), __privateSet(this, _p2, y), this.setDims(p, y);
        const H = t ? u / this.scaleFactor / 2 : 0;
        this.translate(M - this.translationX - H, N - this.translationY - H);
      };
      __privateAdd(_l4, _l_static);
      __publicField(_l4, "_defaultColor", null);
      __publicField(_l4, "_defaultOpacity", 1);
      __publicField(_l4, "_defaultThickness", 1);
      __publicField(_l4, "_type", "ink");
      __publicField(_l4, "_editorType", w.AnnotationEditorType.INK);
      let l = _l4;
      const _b = class _b extends z.AnnotationEditor {
        constructor(t) {
          super({
            ...t,
            name: "stampEditor"
          });
          __privateAdd(this, _b_instances);
          __privateAdd(this, _t4, null);
          __privateAdd(this, _e5, null);
          __privateAdd(this, _s4, null);
          __privateAdd(this, _n4, null);
          __privateAdd(this, _r4, null);
          __privateAdd(this, _i4, "");
          __privateAdd(this, _a4, null);
          __privateAdd(this, _l5, null);
          __privateAdd(this, _h4, null);
          __privateAdd(this, _d4, false);
          __privateAdd(this, _u3, false);
          __privateSet(this, _n4, t.bitmapUrl), __privateSet(this, _r4, t.bitmapFile);
        }
        static initialize(t, i) {
          z.AnnotationEditor.initialize(t, i);
        }
        static get supportedTypes() {
          const t = [
            "apng",
            "avif",
            "bmp",
            "gif",
            "jpeg",
            "png",
            "svg+xml",
            "webp",
            "x-icon"
          ];
          return (0, w.shadow)(this, "supportedTypes", t.map((i) => `image/${i}`));
        }
        static get supportedTypesStr() {
          return (0, w.shadow)(this, "supportedTypesStr", this.supportedTypes.join(","));
        }
        static isHandlingMimeForPasting(t) {
          return this.supportedTypes.includes(t);
        }
        static paste(t, i) {
          i.pasteEditor(w.AnnotationEditorType.STAMP, {
            bitmapFile: t.getAsFile()
          });
        }
        remove() {
          var _a6, _b2;
          __privateGet(this, _e5) && (__privateSet(this, _t4, null), this._uiManager.imageManager.deleteId(__privateGet(this, _e5)), (_a6 = __privateGet(this, _a4)) == null ? void 0 : _a6.remove(), __privateSet(this, _a4, null), (_b2 = __privateGet(this, _l5)) == null ? void 0 : _b2.disconnect(), __privateSet(this, _l5, null), __privateGet(this, _h4) && (clearTimeout(__privateGet(this, _h4)), __privateSet(this, _h4, null))), super.remove();
        }
        rebuild() {
          if (!this.parent) {
            __privateGet(this, _e5) && __privateMethod(this, _b_instances, p_fn2).call(this);
            return;
          }
          super.rebuild(), this.div !== null && (__privateGet(this, _e5) && __privateGet(this, _a4) === null && __privateMethod(this, _b_instances, p_fn2).call(this), this.isAttachedToDOM || this.parent.add(this));
        }
        onceAdded() {
          this._isDraggable = true, this.div.focus();
        }
        isEmpty() {
          return !(__privateGet(this, _s4) || __privateGet(this, _t4) || __privateGet(this, _n4) || __privateGet(this, _r4) || __privateGet(this, _e5));
        }
        get isResizable() {
          return true;
        }
        render() {
          if (this.div) return this.div;
          let t, i;
          if (this.width && (t = this.x, i = this.y), super.render(), this.div.hidden = true, this.addAltTextButton(), __privateGet(this, _t4) ? __privateMethod(this, _b_instances, g_fn2).call(this) : __privateMethod(this, _b_instances, p_fn2).call(this), this.width) {
            const [u, p] = this.parentDimensions;
            this.setAt(t * u, i * p, this.width * u, this.height * p);
          }
          return this.div;
        }
        getImageForAltText() {
          return __privateGet(this, _a4);
        }
        static deserialize(t, i, u) {
          if (t instanceof G.StampAnnotationElement) return null;
          const p = super.deserialize(t, i, u), { rect: y, bitmapUrl: S, bitmapId: L, isSvg: M, accessibilityData: N } = t;
          L && u.imageManager.isValidId(L) ? __privateSet(p, _e5, L) : __privateSet(p, _n4, S), __privateSet(p, _d4, M);
          const [H, B] = p.pageDimensions;
          return p.width = (y[2] - y[0]) / H, p.height = (y[3] - y[1]) / B, N && (p.altTextData = N), p;
        }
        serialize(t = false, i = null) {
          if (this.isEmpty()) return null;
          const u = {
            annotationType: w.AnnotationEditorType.STAMP,
            bitmapId: __privateGet(this, _e5),
            pageIndex: this.pageIndex,
            rect: this.getRect(0, 0),
            rotation: this.rotation,
            isSvg: __privateGet(this, _d4),
            structTreeParentId: this._structTreeParentId
          };
          if (t) return u.bitmapUrl = __privateMethod(this, _b_instances, v_fn3).call(this, true), u.accessibilityData = this.altTextData, u;
          const { decorative: p, altText: y } = this.altTextData;
          if (!p && y && (u.accessibilityData = {
            type: "Figure",
            alt: y
          }), i === null) return u;
          i.stamps || (i.stamps = /* @__PURE__ */ new Map());
          const S = __privateGet(this, _d4) ? (u.rect[2] - u.rect[0]) * (u.rect[3] - u.rect[1]) : null;
          if (!i.stamps.has(__privateGet(this, _e5))) i.stamps.set(__privateGet(this, _e5), {
            area: S,
            serialized: u
          }), u.bitmap = __privateMethod(this, _b_instances, v_fn3).call(this, false);
          else if (__privateGet(this, _d4)) {
            const L = i.stamps.get(__privateGet(this, _e5));
            S > L.area && (L.area = S, L.serialized.bitmap.close(), L.serialized.bitmap = __privateMethod(this, _b_instances, v_fn3).call(this, false));
          }
          return u;
        }
      };
      _t4 = new WeakMap();
      _e5 = new WeakMap();
      _s4 = new WeakMap();
      _n4 = new WeakMap();
      _r4 = new WeakMap();
      _i4 = new WeakMap();
      _a4 = new WeakMap();
      _l5 = new WeakMap();
      _h4 = new WeakMap();
      _d4 = new WeakMap();
      _u3 = new WeakMap();
      _b_instances = new WeakSet();
      c_fn2 = function(t, i = false) {
        if (!t) {
          this.remove();
          return;
        }
        __privateSet(this, _t4, t.bitmap), i || (__privateSet(this, _e5, t.id), __privateSet(this, _d4, t.isSvg)), t.file && __privateSet(this, _i4, t.file.name), __privateMethod(this, _b_instances, g_fn2).call(this);
      };
      o_fn2 = function() {
        __privateSet(this, _s4, null), this._uiManager.enableWaiting(false), __privateGet(this, _a4) && this.div.focus();
      };
      p_fn2 = function() {
        if (__privateGet(this, _e5)) {
          this._uiManager.enableWaiting(true), this._uiManager.imageManager.getFromId(__privateGet(this, _e5)).then((i) => __privateMethod(this, _b_instances, c_fn2).call(this, i, true)).finally(() => __privateMethod(this, _b_instances, o_fn2).call(this));
          return;
        }
        if (__privateGet(this, _n4)) {
          const i = __privateGet(this, _n4);
          __privateSet(this, _n4, null), this._uiManager.enableWaiting(true), __privateSet(this, _s4, this._uiManager.imageManager.getFromUrl(i).then((u) => __privateMethod(this, _b_instances, c_fn2).call(this, u)).finally(() => __privateMethod(this, _b_instances, o_fn2).call(this)));
          return;
        }
        if (__privateGet(this, _r4)) {
          const i = __privateGet(this, _r4);
          __privateSet(this, _r4, null), this._uiManager.enableWaiting(true), __privateSet(this, _s4, this._uiManager.imageManager.getFromFile(i).then((u) => __privateMethod(this, _b_instances, c_fn2).call(this, u)).finally(() => __privateMethod(this, _b_instances, o_fn2).call(this)));
          return;
        }
        const t = document.createElement("input");
        t.type = "file", t.accept = _b.supportedTypesStr, __privateSet(this, _s4, new Promise((i) => {
          t.addEventListener("change", async () => {
            if (!t.files || t.files.length === 0) this.remove();
            else {
              this._uiManager.enableWaiting(true);
              const u = await this._uiManager.imageManager.getFromFile(t.files[0]);
              __privateMethod(this, _b_instances, c_fn2).call(this, u);
            }
            i();
          }), t.addEventListener("cancel", () => {
            this.remove(), i();
          });
        }).finally(() => __privateMethod(this, _b_instances, o_fn2).call(this))), t.click();
      };
      g_fn2 = function() {
        const { div: t } = this;
        let { width: i, height: u } = __privateGet(this, _t4);
        const [p, y] = this.pageDimensions, S = 0.75;
        if (this.width) i = this.width * p, u = this.height * y;
        else if (i > S * p || u > S * y) {
          const H = Math.min(S * p / i, S * y / u);
          i *= H, u *= H;
        }
        const [L, M] = this.parentDimensions;
        this.setDims(i * L / p, u * M / y), this._uiManager.enableWaiting(false);
        const N = __privateSet(this, _a4, document.createElement("canvas"));
        t.append(N), t.hidden = false, __privateMethod(this, _b_instances, m_fn3).call(this, i, u), __privateMethod(this, _b_instances, w_fn3).call(this), __privateGet(this, _u3) || (this.parent.addUndoableEditor(this), __privateSet(this, _u3, true)), this._reportTelemetry({
          action: "inserted_image"
        }), __privateGet(this, _i4) && N.setAttribute("aria-label", __privateGet(this, _i4));
      };
      f_fn3 = function(t, i) {
        var _a6;
        const [u, p] = this.parentDimensions;
        this.width = t / u, this.height = i / p, this.setDims(t, i), ((_a6 = this._initialOptions) == null ? void 0 : _a6.isCentered) ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, __privateGet(this, _h4) !== null && clearTimeout(__privateGet(this, _h4));
        const y = 200;
        __privateSet(this, _h4, setTimeout(() => {
          __privateSet(this, _h4, null), __privateMethod(this, _b_instances, m_fn3).call(this, t, i);
        }, y));
      };
      A_fn3 = function(t, i) {
        const { width: u, height: p } = __privateGet(this, _t4);
        let y = u, S = p, L = __privateGet(this, _t4);
        for (; y > 2 * t || S > 2 * i; ) {
          const M = y, N = S;
          y > 2 * t && (y = y >= 16384 ? Math.floor(y / 2) - 1 : Math.ceil(y / 2)), S > 2 * i && (S = S >= 16384 ? Math.floor(S / 2) - 1 : Math.ceil(S / 2));
          const H = new OffscreenCanvas(y, S);
          H.getContext("2d").drawImage(L, 0, 0, M, N, 0, 0, y, S), L = H.transferToImageBitmap();
        }
        return L;
      };
      m_fn3 = function(t, i) {
        t = Math.ceil(t), i = Math.ceil(i);
        const u = __privateGet(this, _a4);
        if (!u || u.width === t && u.height === i) return;
        u.width = t, u.height = i;
        const p = __privateGet(this, _d4) ? __privateGet(this, _t4) : __privateMethod(this, _b_instances, A_fn3).call(this, t, i);
        if (this._uiManager.hasMLManager && !this.hasAltText()) {
          const S = new OffscreenCanvas(t, i);
          S.getContext("2d").drawImage(p, 0, 0, p.width, p.height, 0, 0, t, i), S.convertToBlob().then((M) => {
            const N = new FileReader();
            N.onload = () => {
              const H = N.result;
              this._uiManager.mlGuess({
                service: "image-to-text",
                request: {
                  imageData: H
                }
              }).then((B) => {
                const q = (B == null ? void 0 : B.output) || "";
                this.parent && q && !this.hasAltText() && (this.altTextData = {
                  altText: q,
                  decorative: false
                });
              });
            }, N.readAsDataURL(M);
          });
        }
        const y = u.getContext("2d");
        y.filter = this._uiManager.hcmFilter, y.drawImage(p, 0, 0, p.width, p.height, 0, 0, t, i);
      };
      v_fn3 = function(t) {
        if (t) {
          if (__privateGet(this, _d4)) {
            const p = this._uiManager.imageManager.getSvgUrl(__privateGet(this, _e5));
            if (p) return p;
          }
          const i = document.createElement("canvas");
          return { width: i.width, height: i.height } = __privateGet(this, _t4), i.getContext("2d").drawImage(__privateGet(this, _t4), 0, 0), i.toDataURL();
        }
        if (__privateGet(this, _d4)) {
          const [i, u] = this.pageDimensions, p = Math.round(this.width * i * r.PixelsPerInch.PDF_TO_CSS_UNITS), y = Math.round(this.height * u * r.PixelsPerInch.PDF_TO_CSS_UNITS), S = new OffscreenCanvas(p, y);
          return S.getContext("2d").drawImage(__privateGet(this, _t4), 0, 0, __privateGet(this, _t4).width, __privateGet(this, _t4).height, 0, 0, p, y), S.transferToImageBitmap();
        }
        return structuredClone(__privateGet(this, _t4));
      };
      w_fn3 = function() {
        __privateSet(this, _l5, new ResizeObserver((t) => {
          const i = t[0].contentRect;
          i.width && i.height && __privateMethod(this, _b_instances, f_fn3).call(this, i.width, i.height);
        })), __privateGet(this, _l5).observe(this.div);
      };
      __publicField(_b, "_type", "stamp");
      __publicField(_b, "_editorType", w.AnnotationEditorType.STAMP);
      let b = _b;
      const _s6 = class _s6 {
        constructor({ uiManager: t, pageIndex: i, div: u, accessibilityManager: p, annotationLayer: y, drawLayer: S, textLayer: L, viewport: M, l10n: N }) {
          __privateAdd(this, _s_instances);
          __privateAdd(this, _t5);
          __privateAdd(this, _e6, false);
          __privateAdd(this, _s5, null);
          __privateAdd(this, _n5, null);
          __privateAdd(this, _r5, null);
          __privateAdd(this, _i5, null);
          __privateAdd(this, _a5, null);
          __privateAdd(this, _l6, /* @__PURE__ */ new Map());
          __privateAdd(this, _h5, false);
          __privateAdd(this, _d5, false);
          __privateAdd(this, _u4, false);
          __privateAdd(this, _c4, null);
          __privateAdd(this, _o3);
          const H = [
            ...__privateGet(_s6, _p3).values()
          ];
          if (!_s6._initialized) {
            _s6._initialized = true;
            for (const B of H) B.initialize(N, t);
          }
          t.registerEditorTypes(H), __privateSet(this, _o3, t), this.pageIndex = i, this.div = u, __privateSet(this, _t5, p), __privateSet(this, _s5, y), this.viewport = M, __privateSet(this, _c4, L), this.drawLayer = S, __privateGet(this, _o3).addLayer(this);
        }
        get isEmpty() {
          return __privateGet(this, _l6).size === 0;
        }
        get isInvisible() {
          return this.isEmpty && __privateGet(this, _o3).getMode() === w.AnnotationEditorType.NONE;
        }
        updateToolbar(t) {
          __privateGet(this, _o3).updateToolbar(t);
        }
        updateMode(t = __privateGet(this, _o3).getMode()) {
          switch (__privateMethod(this, _s_instances, v_fn4).call(this), t) {
            case w.AnnotationEditorType.NONE:
              this.disableTextSelection(), this.togglePointerEvents(false), this.toggleAnnotationLayerPointerEvents(true), this.disableClick();
              return;
            case w.AnnotationEditorType.INK:
              this.addInkEditorIfNeeded(false), this.disableTextSelection(), this.togglePointerEvents(true), this.disableClick();
              break;
            case w.AnnotationEditorType.HIGHLIGHT:
              this.enableTextSelection(), this.togglePointerEvents(false), this.disableClick();
              break;
            default:
              this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
          }
          this.toggleAnnotationLayerPointerEvents(false);
          const { classList: i } = this.div;
          for (const u of __privateGet(_s6, _p3).values()) i.toggle(`${u._type}Editing`, t === u._editorType);
          this.div.hidden = false;
        }
        hasTextLayer(t) {
          var _a6;
          return t === ((_a6 = __privateGet(this, _c4)) == null ? void 0 : _a6.div);
        }
        addInkEditorIfNeeded(t) {
          if (__privateGet(this, _o3).getMode() !== w.AnnotationEditorType.INK) return;
          if (!t) {
            for (const u of __privateGet(this, _l6).values()) if (u.isEmpty()) {
              u.setInBackground();
              return;
            }
          }
          this.createAndAddNewEditor({
            offsetX: 0,
            offsetY: 0
          }, false).setInBackground();
        }
        setEditingState(t) {
          __privateGet(this, _o3).setEditingState(t);
        }
        addCommands(t) {
          __privateGet(this, _o3).addCommands(t);
        }
        togglePointerEvents(t = false) {
          this.div.classList.toggle("disabled", !t);
        }
        toggleAnnotationLayerPointerEvents(t = false) {
          var _a6;
          (_a6 = __privateGet(this, _s5)) == null ? void 0 : _a6.div.classList.toggle("disabled", !t);
        }
        enable() {
          this.div.tabIndex = 0, this.togglePointerEvents(true);
          const t = /* @__PURE__ */ new Set();
          for (const u of __privateGet(this, _l6).values()) u.enableEditing(), u.show(true), u.annotationElementId && (__privateGet(this, _o3).removeChangedExistingAnnotation(u), t.add(u.annotationElementId));
          if (!__privateGet(this, _s5)) return;
          const i = __privateGet(this, _s5).getEditableAnnotations();
          for (const u of i) {
            if (u.hide(), __privateGet(this, _o3).isDeletedAnnotationElement(u.data.id) || t.has(u.data.id)) continue;
            const p = this.deserialize(u);
            p && (this.addOrRebuild(p), p.enableEditing());
          }
        }
        disable() {
          var _a6;
          __privateSet(this, _u4, true), this.div.tabIndex = -1, this.togglePointerEvents(false);
          const t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
          for (const p of __privateGet(this, _l6).values()) if (p.disableEditing(), !!p.annotationElementId) {
            if (p.serialize() !== null) {
              t.set(p.annotationElementId, p);
              continue;
            } else i.set(p.annotationElementId, p);
            (_a6 = this.getEditableAnnotation(p.annotationElementId)) == null ? void 0 : _a6.show(), p.remove();
          }
          if (__privateGet(this, _s5)) {
            const p = __privateGet(this, _s5).getEditableAnnotations();
            for (const y of p) {
              const { id: S } = y.data;
              if (__privateGet(this, _o3).isDeletedAnnotationElement(S)) continue;
              let L = i.get(S);
              if (L) {
                L.resetAnnotationElement(y), L.show(false), y.show();
                continue;
              }
              L = t.get(S), L && (__privateGet(this, _o3).addChangedExistingAnnotation(L), L.renderAnnotationElement(y), L.show(false)), y.show();
            }
          }
          __privateMethod(this, _s_instances, v_fn4).call(this), this.isEmpty && (this.div.hidden = true);
          const { classList: u } = this.div;
          for (const p of __privateGet(_s6, _p3).values()) u.remove(`${p._type}Editing`);
          this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(true), __privateSet(this, _u4, false);
        }
        getEditableAnnotation(t) {
          var _a6;
          return ((_a6 = __privateGet(this, _s5)) == null ? void 0 : _a6.getEditableAnnotation(t)) || null;
        }
        setActiveEditor(t) {
          __privateGet(this, _o3).getActive() !== t && __privateGet(this, _o3).setActiveEditor(t);
        }
        enableTextSelection() {
          var _a6;
          this.div.tabIndex = -1, ((_a6 = __privateGet(this, _c4)) == null ? void 0 : _a6.div) && !__privateGet(this, _i5) && (__privateSet(this, _i5, __privateMethod(this, _s_instances, g_fn3).bind(this)), __privateGet(this, _c4).div.addEventListener("pointerdown", __privateGet(this, _i5)), __privateGet(this, _c4).div.classList.add("highlighting"));
        }
        disableTextSelection() {
          var _a6;
          this.div.tabIndex = 0, ((_a6 = __privateGet(this, _c4)) == null ? void 0 : _a6.div) && __privateGet(this, _i5) && (__privateGet(this, _c4).div.removeEventListener("pointerdown", __privateGet(this, _i5)), __privateSet(this, _i5, null), __privateGet(this, _c4).div.classList.remove("highlighting"));
        }
        enableClick() {
          __privateGet(this, _r5) || (__privateSet(this, _r5, this.pointerdown.bind(this)), __privateSet(this, _n5, this.pointerup.bind(this)), this.div.addEventListener("pointerdown", __privateGet(this, _r5)), this.div.addEventListener("pointerup", __privateGet(this, _n5)));
        }
        disableClick() {
          __privateGet(this, _r5) && (this.div.removeEventListener("pointerdown", __privateGet(this, _r5)), this.div.removeEventListener("pointerup", __privateGet(this, _n5)), __privateSet(this, _r5, null), __privateSet(this, _n5, null));
        }
        attach(t) {
          __privateGet(this, _l6).set(t.id, t);
          const { annotationElementId: i } = t;
          i && __privateGet(this, _o3).isDeletedAnnotationElement(i) && __privateGet(this, _o3).removeDeletedAnnotationElement(t);
        }
        detach(t) {
          var _a6;
          __privateGet(this, _l6).delete(t.id), (_a6 = __privateGet(this, _t5)) == null ? void 0 : _a6.removePointerInTextLayer(t.contentDiv), !__privateGet(this, _u4) && t.annotationElementId && __privateGet(this, _o3).addDeletedAnnotationElement(t);
        }
        remove(t) {
          this.detach(t), __privateGet(this, _o3).removeEditor(t), t.div.remove(), t.isAttachedToDOM = false, __privateGet(this, _d5) || this.addInkEditorIfNeeded(false);
        }
        changeParent(t) {
          var _a6;
          t.parent !== this && (t.parent && t.annotationElementId && (__privateGet(this, _o3).addDeletedAnnotationElement(t.annotationElementId), z.AnnotationEditor.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (_a6 = t.parent) == null ? void 0 : _a6.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
        }
        add(t) {
          if (!(t.parent === this && t.isAttachedToDOM)) {
            if (this.changeParent(t), __privateGet(this, _o3).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
              const i = t.render();
              this.div.append(i), t.isAttachedToDOM = true;
            }
            t.fixAndSetPosition(), t.onceAdded(), __privateGet(this, _o3).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
          }
        }
        moveEditorInDOM(t) {
          var _a6;
          if (!t.isAttachedToDOM) return;
          const { activeElement: i } = document;
          t.div.contains(i) && !__privateGet(this, _a5) && (t._focusEventsAllowed = false, __privateSet(this, _a5, setTimeout(() => {
            __privateSet(this, _a5, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = true : (t.div.addEventListener("focusin", () => {
              t._focusEventsAllowed = true;
            }, {
              once: true
            }), i.focus());
          }, 0))), t._structTreeParentId = (_a6 = __privateGet(this, _t5)) == null ? void 0 : _a6.moveElementInDOM(this.div, t.div, t.contentDiv, true);
        }
        addOrRebuild(t) {
          t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
        }
        addUndoableEditor(t) {
          const i = () => t._uiManager.rebuild(t), u = () => {
            t.remove();
          };
          this.addCommands({
            cmd: i,
            undo: u,
            mustExec: false
          });
        }
        getNextId() {
          return __privateGet(this, _o3).getId();
        }
        canCreateNewEmptyEditor() {
          var _a6;
          return (_a6 = __privateGet(this, _s_instances, f_get)) == null ? void 0 : _a6.canCreateNewEmptyEditor();
        }
        pasteEditor(t, i) {
          __privateGet(this, _o3).updateToolbar(t), __privateGet(this, _o3).updateMode(t);
          const { offsetX: u, offsetY: p } = __privateMethod(this, _s_instances, m_fn4).call(this), y = this.getNextId(), S = __privateMethod(this, _s_instances, A_fn4).call(this, {
            parent: this,
            id: y,
            x: u,
            y: p,
            uiManager: __privateGet(this, _o3),
            isCentered: true,
            ...i
          });
          S && this.add(S);
        }
        deserialize(t) {
          var _a6;
          return ((_a6 = __privateGet(_s6, _p3).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : _a6.deserialize(t, this, __privateGet(this, _o3))) || null;
        }
        createAndAddNewEditor(t, i, u = {}) {
          const p = this.getNextId(), y = __privateMethod(this, _s_instances, A_fn4).call(this, {
            parent: this,
            id: p,
            x: t.offsetX,
            y: t.offsetY,
            uiManager: __privateGet(this, _o3),
            isCentered: i,
            ...u
          });
          return y && this.add(y), y;
        }
        addNewEditor() {
          this.createAndAddNewEditor(__privateMethod(this, _s_instances, m_fn4).call(this), true);
        }
        setSelected(t) {
          __privateGet(this, _o3).setSelected(t);
        }
        toggleSelected(t) {
          __privateGet(this, _o3).toggleSelected(t);
        }
        isSelected(t) {
          return __privateGet(this, _o3).isSelected(t);
        }
        unselect(t) {
          __privateGet(this, _o3).unselect(t);
        }
        pointerup(t) {
          const { isMac: i } = w.FeatureTest.platform;
          if (!(t.button !== 0 || t.ctrlKey && i) && t.target === this.div && __privateGet(this, _h5)) {
            if (__privateSet(this, _h5, false), !__privateGet(this, _e6)) {
              __privateSet(this, _e6, true);
              return;
            }
            if (__privateGet(this, _o3).getMode() === w.AnnotationEditorType.STAMP) {
              __privateGet(this, _o3).unselectAll();
              return;
            }
            this.createAndAddNewEditor(t, false);
          }
        }
        pointerdown(t) {
          if (__privateGet(this, _o3).getMode() === w.AnnotationEditorType.HIGHLIGHT && this.enableTextSelection(), __privateGet(this, _h5)) {
            __privateSet(this, _h5, false);
            return;
          }
          const { isMac: i } = w.FeatureTest.platform;
          if (t.button !== 0 || t.ctrlKey && i || t.target !== this.div) return;
          __privateSet(this, _h5, true);
          const u = __privateGet(this, _o3).getActive();
          __privateSet(this, _e6, !u || u.isEmpty());
        }
        findNewParent(t, i, u) {
          const p = __privateGet(this, _o3).findParent(i, u);
          return p === null || p === this ? false : (p.changeParent(t), true);
        }
        destroy() {
          var _a6, _b2;
          ((_a6 = __privateGet(this, _o3).getActive()) == null ? void 0 : _a6.parent) === this && (__privateGet(this, _o3).commitOrRemove(), __privateGet(this, _o3).setActiveEditor(null)), __privateGet(this, _a5) && (clearTimeout(__privateGet(this, _a5)), __privateSet(this, _a5, null));
          for (const t of __privateGet(this, _l6).values()) (_b2 = __privateGet(this, _t5)) == null ? void 0 : _b2.removePointerInTextLayer(t.contentDiv), t.setParent(null), t.isAttachedToDOM = false, t.div.remove();
          this.div = null, __privateGet(this, _l6).clear(), __privateGet(this, _o3).removeLayer(this);
        }
        render({ viewport: t }) {
          this.viewport = t, (0, r.setLayerDimensions)(this.div, t);
          for (const i of __privateGet(this, _o3).getEditors(this.pageIndex)) this.add(i), i.rebuild();
          this.updateMode();
        }
        update({ viewport: t }) {
          __privateGet(this, _o3).commitOrRemove(), __privateMethod(this, _s_instances, v_fn4).call(this);
          const i = this.viewport.rotation, u = t.rotation;
          if (this.viewport = t, (0, r.setLayerDimensions)(this.div, {
            rotation: u
          }), i !== u) for (const p of __privateGet(this, _l6).values()) p.rotate(u);
          this.addInkEditorIfNeeded(false);
        }
        get pageDimensions() {
          const { pageWidth: t, pageHeight: i } = this.viewport.rawDims;
          return [
            t,
            i
          ];
        }
        get scale() {
          return __privateGet(this, _o3).viewParameters.realScale;
        }
      };
      _t5 = new WeakMap();
      _e6 = new WeakMap();
      _s5 = new WeakMap();
      _n5 = new WeakMap();
      _r5 = new WeakMap();
      _i5 = new WeakMap();
      _a5 = new WeakMap();
      _l6 = new WeakMap();
      _h5 = new WeakMap();
      _d5 = new WeakMap();
      _u4 = new WeakMap();
      _c4 = new WeakMap();
      _o3 = new WeakMap();
      _p3 = new WeakMap();
      _s_instances = new WeakSet();
      g_fn3 = function(t) {
        if (__privateGet(this, _o3).unselectAll(), t.target === __privateGet(this, _c4).div) {
          const { isMac: i } = w.FeatureTest.platform;
          if (t.button !== 0 || t.ctrlKey && i) return;
          __privateGet(this, _o3).showAllEditors("highlight", true, true), __privateGet(this, _c4).div.classList.add("free"), c.startHighlighting(this, __privateGet(this, _o3).direction === "ltr", t), __privateGet(this, _c4).div.addEventListener("pointerup", () => {
            __privateGet(this, _c4).div.classList.remove("free");
          }, {
            once: true
          }), t.preventDefault();
        }
      };
      f_get = function() {
        return __privateGet(_s6, _p3).get(__privateGet(this, _o3).getMode());
      };
      A_fn4 = function(t) {
        const i = __privateGet(this, _s_instances, f_get);
        return i ? new i.prototype.constructor(t) : null;
      };
      m_fn4 = function() {
        const { x: t, y: i, width: u, height: p } = this.div.getBoundingClientRect(), y = Math.max(0, t), S = Math.max(0, i), L = Math.min(window.innerWidth, t + u), M = Math.min(window.innerHeight, i + p), N = (y + L) / 2 - t, H = (S + M) / 2 - i, [B, q] = this.viewport.rotation % 180 === 0 ? [
          N,
          H
        ] : [
          H,
          N
        ];
        return {
          offsetX: B,
          offsetY: q
        };
      };
      v_fn4 = function() {
        __privateSet(this, _d5, true);
        for (const t of __privateGet(this, _l6).values()) t.isEmpty() && t.remove();
        __privateSet(this, _d5, false);
      };
      __publicField(_s6, "_initialized", false);
      __privateAdd(_s6, _p3, new Map([
        C,
        l,
        b,
        c
      ].map((t) => [
        t._editorType,
        t
      ])));
      let s = _s6;
    },
    259: (ct, st, $) => {
      var _t, _e2, _s, _n, _r, _i, _a, _l, _h, _d, _u, _c, _G_instances, o_fn, p_fn, g_fn, f_fn, A_fn, m_get;
      $.d(st, {
        ColorPicker: () => G
      });
      var w = $(292), z = $(830), _ = $(419);
      const _G = class _G {
        constructor({ editor: C = null, uiManager: E = null }) {
          __privateAdd(this, _G_instances);
          __privateAdd(this, _t, __privateMethod(this, _G_instances, g_fn).bind(this));
          __privateAdd(this, _e2, __privateMethod(this, _G_instances, A_fn).bind(this));
          __privateAdd(this, _s, null);
          __privateAdd(this, _n, null);
          __privateAdd(this, _r);
          __privateAdd(this, _i, null);
          __privateAdd(this, _a, false);
          __privateAdd(this, _l, false);
          __privateAdd(this, _h, null);
          __privateAdd(this, _d);
          __privateAdd(this, _u, null);
          __privateAdd(this, _c);
          var _a2;
          C ? (__privateSet(this, _l, false), __privateSet(this, _c, w.AnnotationEditorParamsType.HIGHLIGHT_COLOR), __privateSet(this, _h, C)) : (__privateSet(this, _l, true), __privateSet(this, _c, w.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR)), __privateSet(this, _u, (C == null ? void 0 : C._uiManager) || E), __privateSet(this, _d, __privateGet(this, _u)._eventBus), __privateSet(this, _r, (C == null ? void 0 : C.color) || ((_a2 = __privateGet(this, _u)) == null ? void 0 : _a2.highlightColors.values().next().value) || "#FFFF98");
        }
        static get _keyboardManager() {
          return (0, w.shadow)(this, "_keyboardManager", new z.KeyboardManager([
            [
              [
                "Escape",
                "mac+Escape"
              ],
              _G.prototype._hideDropdownFromKeyboard
            ],
            [
              [
                " ",
                "mac+ "
              ],
              _G.prototype._colorSelectFromKeyboard
            ],
            [
              [
                "ArrowDown",
                "ArrowRight",
                "mac+ArrowDown",
                "mac+ArrowRight"
              ],
              _G.prototype._moveToNext
            ],
            [
              [
                "ArrowUp",
                "ArrowLeft",
                "mac+ArrowUp",
                "mac+ArrowLeft"
              ],
              _G.prototype._moveToPrevious
            ],
            [
              [
                "Home",
                "mac+Home"
              ],
              _G.prototype._moveToBeginning
            ],
            [
              [
                "End",
                "mac+End"
              ],
              _G.prototype._moveToEnd
            ]
          ]));
        }
        renderButton() {
          const C = __privateSet(this, _s, document.createElement("button"));
          C.className = "colorPicker", C.tabIndex = "0", C.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), C.setAttribute("aria-haspopup", true), C.addEventListener("click", __privateMethod(this, _G_instances, f_fn).bind(this)), C.addEventListener("keydown", __privateGet(this, _t));
          const E = __privateSet(this, _n, document.createElement("span"));
          return E.className = "swatch", E.setAttribute("aria-hidden", true), E.style.backgroundColor = __privateGet(this, _r), C.append(E), C;
        }
        renderMainDropdown() {
          const C = __privateSet(this, _i, __privateMethod(this, _G_instances, o_fn).call(this));
          return C.setAttribute("aria-orientation", "horizontal"), C.setAttribute("aria-labelledby", "highlightColorPickerLabel"), C;
        }
        _colorSelectFromKeyboard(C) {
          if (C.target === __privateGet(this, _s)) {
            __privateMethod(this, _G_instances, f_fn).call(this, C);
            return;
          }
          const E = C.target.getAttribute("data-color");
          E && __privateMethod(this, _G_instances, p_fn).call(this, E, C);
        }
        _moveToNext(C) {
          var _a2, _b;
          if (!__privateGet(this, _G_instances, m_get)) {
            __privateMethod(this, _G_instances, f_fn).call(this, C);
            return;
          }
          if (C.target === __privateGet(this, _s)) {
            (_a2 = __privateGet(this, _i).firstChild) == null ? void 0 : _a2.focus();
            return;
          }
          (_b = C.target.nextSibling) == null ? void 0 : _b.focus();
        }
        _moveToPrevious(C) {
          var _a2, _b;
          if (C.target === ((_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.firstChild) || C.target === __privateGet(this, _s)) {
            __privateGet(this, _G_instances, m_get) && this._hideDropdownFromKeyboard();
            return;
          }
          __privateGet(this, _G_instances, m_get) || __privateMethod(this, _G_instances, f_fn).call(this, C), (_b = C.target.previousSibling) == null ? void 0 : _b.focus();
        }
        _moveToBeginning(C) {
          var _a2;
          if (!__privateGet(this, _G_instances, m_get)) {
            __privateMethod(this, _G_instances, f_fn).call(this, C);
            return;
          }
          (_a2 = __privateGet(this, _i).firstChild) == null ? void 0 : _a2.focus();
        }
        _moveToEnd(C) {
          var _a2;
          if (!__privateGet(this, _G_instances, m_get)) {
            __privateMethod(this, _G_instances, f_fn).call(this, C);
            return;
          }
          (_a2 = __privateGet(this, _i).lastChild) == null ? void 0 : _a2.focus();
        }
        hideDropdown() {
          var _a2;
          (_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.classList.add("hidden"), window.removeEventListener("pointerdown", __privateGet(this, _e2));
        }
        _hideDropdownFromKeyboard() {
          var _a2;
          if (!__privateGet(this, _l)) {
            if (!__privateGet(this, _G_instances, m_get)) {
              (_a2 = __privateGet(this, _h)) == null ? void 0 : _a2.unselect();
              return;
            }
            this.hideDropdown(), __privateGet(this, _s).focus({
              preventScroll: true,
              focusVisible: __privateGet(this, _a)
            });
          }
        }
        updateColor(C) {
          if (__privateGet(this, _n) && (__privateGet(this, _n).style.backgroundColor = C), !__privateGet(this, _i)) return;
          const E = __privateGet(this, _u).highlightColors.values();
          for (const v of __privateGet(this, _i).children) v.setAttribute("aria-selected", E.next().value === C);
        }
        destroy() {
          var _a2, _b;
          (_a2 = __privateGet(this, _s)) == null ? void 0 : _a2.remove(), __privateSet(this, _s, null), __privateSet(this, _n, null), (_b = __privateGet(this, _i)) == null ? void 0 : _b.remove(), __privateSet(this, _i, null);
        }
      };
      _t = new WeakMap();
      _e2 = new WeakMap();
      _s = new WeakMap();
      _n = new WeakMap();
      _r = new WeakMap();
      _i = new WeakMap();
      _a = new WeakMap();
      _l = new WeakMap();
      _h = new WeakMap();
      _d = new WeakMap();
      _u = new WeakMap();
      _c = new WeakMap();
      _G_instances = new WeakSet();
      o_fn = function() {
        const C = document.createElement("div");
        C.addEventListener("contextmenu", _.noContextMenu), C.className = "dropdown", C.role = "listbox", C.setAttribute("aria-multiselectable", false), C.setAttribute("aria-orientation", "vertical"), C.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
        for (const [E, v] of __privateGet(this, _u).highlightColors) {
          const r = document.createElement("button");
          r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", v), r.title = E, r.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${E}`);
          const c = document.createElement("span");
          r.append(c), c.className = "swatch", c.style.backgroundColor = v, r.setAttribute("aria-selected", v === __privateGet(this, _r)), r.addEventListener("click", __privateMethod(this, _G_instances, p_fn).bind(this, v)), C.append(r);
        }
        return C.addEventListener("keydown", __privateGet(this, _t)), C;
      };
      p_fn = function(C, E) {
        E.stopPropagation(), __privateGet(this, _d).dispatch("switchannotationeditorparams", {
          source: this,
          type: __privateGet(this, _c),
          value: C
        });
      };
      g_fn = function(C) {
        _G._keyboardManager.exec(this, C);
      };
      f_fn = function(C) {
        if (__privateGet(this, _G_instances, m_get)) {
          this.hideDropdown();
          return;
        }
        if (__privateSet(this, _a, C.detail === 0), window.addEventListener("pointerdown", __privateGet(this, _e2)), __privateGet(this, _i)) {
          __privateGet(this, _i).classList.remove("hidden");
          return;
        }
        const E = __privateSet(this, _i, __privateMethod(this, _G_instances, o_fn).call(this));
        __privateGet(this, _s).append(E);
      };
      A_fn = function(C) {
        var _a2;
        ((_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.contains(C.target)) || this.hideDropdown();
      };
      m_get = function() {
        return __privateGet(this, _i) && !__privateGet(this, _i).classList.contains("hidden");
      };
      let G = _G;
    },
    310: (ct, st, $) => {
      var _t, _e2, _s, _n, _r, _i, _a, _G_instances, l_fn, _t2, _e3, _s2, _n2, _r2, _i2, _a2, _l, _h, _d, _u, _c, _o, _p, _g, _f, _A, _m, _v, _w, _C, _C_instances, k_fn, _C_static, I_fn, L_fn, y_fn, b_fn, S_fn, x_fn, R_fn, T_fn, M_fn, F_fn, __fn, P_fn, D_fn;
      $.d(st, {
        AnnotationEditor: () => C
      });
      var w = $(830), z = $(292), _ = $(419);
      const _G = class _G {
        constructor(r) {
          __privateAdd(this, _G_instances);
          __privateAdd(this, _t, "");
          __privateAdd(this, _e2, false);
          __privateAdd(this, _s, null);
          __privateAdd(this, _n, null);
          __privateAdd(this, _r, null);
          __privateAdd(this, _i, false);
          __privateAdd(this, _a, null);
          __privateSet(this, _a, r);
        }
        static initialize(r) {
          _G._l10nPromise || (_G._l10nPromise = r);
        }
        async render() {
          const r = __privateSet(this, _s, document.createElement("button"));
          r.className = "altText";
          const c = await _G._l10nPromise.get("pdfjs-editor-alt-text-button-label");
          r.textContent = c, r.setAttribute("aria-label", c), r.tabIndex = "0", r.addEventListener("contextmenu", _.noContextMenu), r.addEventListener("pointerdown", (b) => b.stopPropagation());
          const l = (b) => {
            b.preventDefault(), __privateGet(this, _a)._uiManager.editAltText(__privateGet(this, _a));
          };
          return r.addEventListener("click", l, {
            capture: true
          }), r.addEventListener("keydown", (b) => {
            b.target === r && b.key === "Enter" && (__privateSet(this, _i, true), l(b));
          }), await __privateMethod(this, _G_instances, l_fn).call(this), r;
        }
        finish() {
          __privateGet(this, _s) && (__privateGet(this, _s).focus({
            focusVisible: __privateGet(this, _i)
          }), __privateSet(this, _i, false));
        }
        isEmpty() {
          return !__privateGet(this, _t) && !__privateGet(this, _e2);
        }
        get data() {
          return {
            altText: __privateGet(this, _t),
            decorative: __privateGet(this, _e2)
          };
        }
        set data({ altText: r, decorative: c }) {
          __privateGet(this, _t) === r && __privateGet(this, _e2) === c || (__privateSet(this, _t, r), __privateSet(this, _e2, c), __privateMethod(this, _G_instances, l_fn).call(this));
        }
        toggle(r = false) {
          __privateGet(this, _s) && (!r && __privateGet(this, _r) && (clearTimeout(__privateGet(this, _r)), __privateSet(this, _r, null)), __privateGet(this, _s).disabled = !r);
        }
        destroy() {
          var _a3;
          (_a3 = __privateGet(this, _s)) == null ? void 0 : _a3.remove(), __privateSet(this, _s, null), __privateSet(this, _n, null);
        }
      };
      _t = new WeakMap();
      _e2 = new WeakMap();
      _s = new WeakMap();
      _n = new WeakMap();
      _r = new WeakMap();
      _i = new WeakMap();
      _a = new WeakMap();
      _G_instances = new WeakSet();
      l_fn = async function() {
        var _a3, _b;
        const r = __privateGet(this, _s);
        if (!r) return;
        if (!__privateGet(this, _t) && !__privateGet(this, _e2)) {
          r.classList.remove("done"), (_a3 = __privateGet(this, _n)) == null ? void 0 : _a3.remove();
          return;
        }
        r.classList.add("done"), _G._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((b) => {
          r.setAttribute("aria-label", b);
        });
        let c = __privateGet(this, _n);
        if (!c) {
          __privateSet(this, _n, c = document.createElement("span")), c.className = "tooltip", c.setAttribute("role", "tooltip");
          const b = c.id = `alt-text-tooltip-${__privateGet(this, _a).id}`;
          r.setAttribute("aria-describedby", b);
          const s = 100;
          r.addEventListener("mouseenter", () => {
            __privateSet(this, _r, setTimeout(() => {
              __privateSet(this, _r, null), __privateGet(this, _n).classList.add("show"), __privateGet(this, _a)._reportTelemetry({
                action: "alt_text_tooltip"
              });
            }, s));
          }), r.addEventListener("mouseleave", () => {
            var _a4;
            __privateGet(this, _r) && (clearTimeout(__privateGet(this, _r)), __privateSet(this, _r, null)), (_a4 = __privateGet(this, _n)) == null ? void 0 : _a4.classList.remove("show");
          });
        }
        c.innerText = __privateGet(this, _e2) ? await _G._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : __privateGet(this, _t), c.parentNode || r.append(c), (_b = __privateGet(this, _a).getImageForAltText()) == null ? void 0 : _b.setAttribute("aria-describedby", c.id);
      };
      __publicField(_G, "_l10nPromise", null);
      let G = _G;
      var P = $(362);
      const _C2 = class _C2 {
        constructor(r) {
          __privateAdd(this, _C_instances);
          __privateAdd(this, _t2, null);
          __privateAdd(this, _e3, null);
          __privateAdd(this, _s2, false);
          __privateAdd(this, _n2, false);
          __privateAdd(this, _r2, null);
          __privateAdd(this, _i2, null);
          __privateAdd(this, _a2, this.focusin.bind(this));
          __privateAdd(this, _l, this.focusout.bind(this));
          __privateAdd(this, _h, null);
          __privateAdd(this, _d, "");
          __privateAdd(this, _u, false);
          __privateAdd(this, _c, null);
          __privateAdd(this, _o, false);
          __privateAdd(this, _p, false);
          __privateAdd(this, _g, false);
          __privateAdd(this, _f, null);
          __privateAdd(this, _A, 0);
          __privateAdd(this, _m, 0);
          __privateAdd(this, _v, null);
          __publicField(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
          __publicField(this, "_isVisible", true);
          __publicField(this, "_uiManager", null);
          __publicField(this, "_focusEventsAllowed", true);
          __publicField(this, "_l10nPromise", null);
          __privateAdd(this, _w, false);
          __privateAdd(this, _C, _C2._zIndex++);
          this.constructor === _C2 && (0, z.unreachable)("Cannot initialize AnnotationEditor."), this.parent = r.parent, this.id = r.id, this.width = this.height = null, this.pageIndex = r.parent.pageIndex, this.name = r.name, this.div = null, this._uiManager = r.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = false, this._initialOptions.isCentered = r.isCentered, this._structTreeParentId = null;
          const { rotation: c, rawDims: { pageWidth: l, pageHeight: b, pageX: s, pageY: g } } = this.parent.viewport;
          this.rotation = c, this.pageRotation = (360 + c - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [
            l,
            b
          ], this.pageTranslation = [
            s,
            g
          ];
          const [t, i] = this.parentDimensions;
          this.x = r.x / t, this.y = r.y / i, this.isAttachedToDOM = false, this.deleted = false;
        }
        static get _resizerKeyboardManager() {
          const r = _C2.prototype._resizeWithKeyboard, c = w.AnnotationEditorUIManager.TRANSLATE_SMALL, l = w.AnnotationEditorUIManager.TRANSLATE_BIG;
          return (0, z.shadow)(this, "_resizerKeyboardManager", new w.KeyboardManager([
            [
              [
                "ArrowLeft",
                "mac+ArrowLeft"
              ],
              r,
              {
                args: [
                  -c,
                  0
                ]
              }
            ],
            [
              [
                "ctrl+ArrowLeft",
                "mac+shift+ArrowLeft"
              ],
              r,
              {
                args: [
                  -l,
                  0
                ]
              }
            ],
            [
              [
                "ArrowRight",
                "mac+ArrowRight"
              ],
              r,
              {
                args: [
                  c,
                  0
                ]
              }
            ],
            [
              [
                "ctrl+ArrowRight",
                "mac+shift+ArrowRight"
              ],
              r,
              {
                args: [
                  l,
                  0
                ]
              }
            ],
            [
              [
                "ArrowUp",
                "mac+ArrowUp"
              ],
              r,
              {
                args: [
                  0,
                  -c
                ]
              }
            ],
            [
              [
                "ctrl+ArrowUp",
                "mac+shift+ArrowUp"
              ],
              r,
              {
                args: [
                  0,
                  -l
                ]
              }
            ],
            [
              [
                "ArrowDown",
                "mac+ArrowDown"
              ],
              r,
              {
                args: [
                  0,
                  c
                ]
              }
            ],
            [
              [
                "ctrl+ArrowDown",
                "mac+shift+ArrowDown"
              ],
              r,
              {
                args: [
                  0,
                  l
                ]
              }
            ],
            [
              [
                "Escape",
                "mac+Escape"
              ],
              _C2.prototype._stopResizingWithKeyboard
            ]
          ]));
        }
        get editorType() {
          return Object.getPrototypeOf(this).constructor._type;
        }
        static get _defaultLineColor() {
          return (0, z.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
        }
        static deleteAnnotationElement(r) {
          const c = new E({
            id: r.parent.getNextId(),
            parent: r.parent,
            uiManager: r._uiManager
          });
          c.annotationElementId = r.annotationElementId, c.deleted = true, c._uiManager.addToAnnotationStorage(c);
        }
        static initialize(r, c, l) {
          if (_C2._l10nPromise || (_C2._l10nPromise = new Map([
            "pdfjs-editor-alt-text-button-label",
            "pdfjs-editor-alt-text-edit-button-label",
            "pdfjs-editor-alt-text-decorative-tooltip",
            "pdfjs-editor-resizer-label-topLeft",
            "pdfjs-editor-resizer-label-topMiddle",
            "pdfjs-editor-resizer-label-topRight",
            "pdfjs-editor-resizer-label-middleRight",
            "pdfjs-editor-resizer-label-bottomRight",
            "pdfjs-editor-resizer-label-bottomMiddle",
            "pdfjs-editor-resizer-label-bottomLeft",
            "pdfjs-editor-resizer-label-middleLeft"
          ].map((s) => [
            s,
            r.get(s.replaceAll(/([A-Z])/g, (g) => `-${g.toLowerCase()}`))
          ]))), l == null ? void 0 : l.strings) for (const s of l.strings) _C2._l10nPromise.set(s, r.get(s));
          if (_C2._borderLineWidth !== -1) return;
          const b = getComputedStyle(document.documentElement);
          _C2._borderLineWidth = parseFloat(b.getPropertyValue("--outline-width")) || 0;
        }
        static updateDefaultParams(r, c) {
        }
        static get defaultPropertiesToUpdate() {
          return [];
        }
        static isHandlingMimeForPasting(r) {
          return false;
        }
        static paste(r, c) {
          (0, z.unreachable)("Not implemented");
        }
        get propertiesToUpdate() {
          return [];
        }
        get _isDraggable() {
          return __privateGet(this, _w);
        }
        set _isDraggable(r) {
          var _a3;
          __privateSet(this, _w, r), (_a3 = this.div) == null ? void 0 : _a3.classList.toggle("draggable", r);
        }
        get isEnterHandled() {
          return true;
        }
        center() {
          const [r, c] = this.pageDimensions;
          switch (this.parentRotation) {
            case 90:
              this.x -= this.height * c / (r * 2), this.y += this.width * r / (c * 2);
              break;
            case 180:
              this.x += this.width / 2, this.y += this.height / 2;
              break;
            case 270:
              this.x += this.height * c / (r * 2), this.y -= this.width * r / (c * 2);
              break;
            default:
              this.x -= this.width / 2, this.y -= this.height / 2;
              break;
          }
          this.fixAndSetPosition();
        }
        addCommands(r) {
          this._uiManager.addCommands(r);
        }
        get currentLayer() {
          return this._uiManager.currentLayer;
        }
        setInBackground() {
          this.div.style.zIndex = 0;
        }
        setInForeground() {
          this.div.style.zIndex = __privateGet(this, _C);
        }
        setParent(r) {
          r !== null ? (this.pageIndex = r.pageIndex, this.pageDimensions = r.pageDimensions) : __privateMethod(this, _C_instances, D_fn).call(this), this.parent = r;
        }
        focusin(r) {
          this._focusEventsAllowed && (__privateGet(this, _u) ? __privateSet(this, _u, false) : this.parent.setSelected(this));
        }
        focusout(r) {
          var _a3, _b;
          !this._focusEventsAllowed || !this.isAttachedToDOM || ((_a3 = r.relatedTarget) == null ? void 0 : _a3.closest(`#${this.id}`)) || (r.preventDefault(), ((_b = this.parent) == null ? void 0 : _b.isMultipleSelection) || this.commitOrRemove());
        }
        commitOrRemove() {
          this.isEmpty() ? this.remove() : this.commit();
        }
        commit() {
          this.addToAnnotationStorage();
        }
        addToAnnotationStorage() {
          this._uiManager.addToAnnotationStorage(this);
        }
        setAt(r, c, l, b) {
          const [s, g] = this.parentDimensions;
          [l, b] = this.screenToPageTranslation(l, b), this.x = (r + l) / s, this.y = (c + b) / g, this.fixAndSetPosition();
        }
        translate(r, c) {
          __privateMethod(this, _C_instances, k_fn).call(this, this.parentDimensions, r, c);
        }
        translateInPage(r, c) {
          __privateGet(this, _c) || __privateSet(this, _c, [
            this.x,
            this.y
          ]), __privateMethod(this, _C_instances, k_fn).call(this, this.pageDimensions, r, c), this.div.scrollIntoView({
            block: "nearest"
          });
        }
        drag(r, c) {
          __privateGet(this, _c) || __privateSet(this, _c, [
            this.x,
            this.y
          ]);
          const [l, b] = this.parentDimensions;
          if (this.x += r / l, this.y += c / b, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
            const { x: u, y: p } = this.div.getBoundingClientRect();
            this.parent.findNewParent(this, u, p) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
          }
          let { x: s, y: g } = this;
          const [t, i] = this.getBaseTranslation();
          s += t, g += i, this.div.style.left = `${(100 * s).toFixed(2)}%`, this.div.style.top = `${(100 * g).toFixed(2)}%`, this.div.scrollIntoView({
            block: "nearest"
          });
        }
        get _hasBeenMoved() {
          return !!__privateGet(this, _c) && (__privateGet(this, _c)[0] !== this.x || __privateGet(this, _c)[1] !== this.y);
        }
        getBaseTranslation() {
          const [r, c] = this.parentDimensions, { _borderLineWidth: l } = _C2, b = l / r, s = l / c;
          switch (this.rotation) {
            case 90:
              return [
                -b,
                s
              ];
            case 180:
              return [
                b,
                s
              ];
            case 270:
              return [
                b,
                -s
              ];
            default:
              return [
                -b,
                -s
              ];
          }
        }
        get _mustFixPosition() {
          return true;
        }
        fixAndSetPosition(r = this.rotation) {
          const [c, l] = this.pageDimensions;
          let { x: b, y: s, width: g, height: t } = this;
          if (g *= c, t *= l, b *= c, s *= l, this._mustFixPosition) switch (r) {
            case 0:
              b = Math.max(0, Math.min(c - g, b)), s = Math.max(0, Math.min(l - t, s));
              break;
            case 90:
              b = Math.max(0, Math.min(c - t, b)), s = Math.min(l, Math.max(g, s));
              break;
            case 180:
              b = Math.min(c, Math.max(g, b)), s = Math.min(l, Math.max(t, s));
              break;
            case 270:
              b = Math.min(c, Math.max(t, b)), s = Math.max(0, Math.min(l - g, s));
              break;
          }
          this.x = b /= c, this.y = s /= l;
          const [i, u] = this.getBaseTranslation();
          b += i, s += u;
          const { style: p } = this.div;
          p.left = `${(100 * b).toFixed(2)}%`, p.top = `${(100 * s).toFixed(2)}%`, this.moveInDOM();
        }
        screenToPageTranslation(r, c) {
          var _a3;
          return __privateMethod(_a3 = _C2, _C_static, I_fn).call(_a3, r, c, this.parentRotation);
        }
        pageTranslationToScreen(r, c) {
          var _a3;
          return __privateMethod(_a3 = _C2, _C_static, I_fn).call(_a3, r, c, 360 - this.parentRotation);
        }
        get parentScale() {
          return this._uiManager.viewParameters.realScale;
        }
        get parentRotation() {
          return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
        }
        get parentDimensions() {
          const { parentScale: r, pageDimensions: [c, l] } = this, b = c * r, s = l * r;
          return z.FeatureTest.isCSSRoundSupported ? [
            Math.round(b),
            Math.round(s)
          ] : [
            b,
            s
          ];
        }
        setDims(r, c) {
          const [l, b] = this.parentDimensions;
          this.div.style.width = `${(100 * r / l).toFixed(2)}%`, __privateGet(this, _n2) || (this.div.style.height = `${(100 * c / b).toFixed(2)}%`);
        }
        fixDims() {
          const { style: r } = this.div, { height: c, width: l } = r, b = l.endsWith("%"), s = !__privateGet(this, _n2) && c.endsWith("%");
          if (b && s) return;
          const [g, t] = this.parentDimensions;
          b || (r.width = `${(100 * parseFloat(l) / g).toFixed(2)}%`), !__privateGet(this, _n2) && !s && (r.height = `${(100 * parseFloat(c) / t).toFixed(2)}%`);
        }
        getInitialTranslation() {
          return [
            0,
            0
          ];
        }
        altTextFinish() {
          var _a3;
          (_a3 = __privateGet(this, _e3)) == null ? void 0 : _a3.finish();
        }
        async addEditToolbar() {
          return __privateGet(this, _h) || __privateGet(this, _p) ? __privateGet(this, _h) : (__privateSet(this, _h, new P.EditorToolbar(this)), this.div.append(__privateGet(this, _h).render()), __privateGet(this, _e3) && __privateGet(this, _h).addAltTextButton(await __privateGet(this, _e3).render()), __privateGet(this, _h));
        }
        removeEditToolbar() {
          var _a3;
          __privateGet(this, _h) && (__privateGet(this, _h).remove(), __privateSet(this, _h, null), (_a3 = __privateGet(this, _e3)) == null ? void 0 : _a3.destroy());
        }
        getClientDimensions() {
          return this.div.getBoundingClientRect();
        }
        async addAltTextButton() {
          __privateGet(this, _e3) || (G.initialize(_C2._l10nPromise), __privateSet(this, _e3, new G(this)), await this.addEditToolbar());
        }
        get altTextData() {
          var _a3;
          return (_a3 = __privateGet(this, _e3)) == null ? void 0 : _a3.data;
        }
        set altTextData(r) {
          __privateGet(this, _e3) && (__privateGet(this, _e3).data = r);
        }
        hasAltText() {
          var _a3;
          return !((_a3 = __privateGet(this, _e3)) == null ? void 0 : _a3.isEmpty());
        }
        render() {
          this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = __privateGet(this, _s2) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), this.div.addEventListener("focusin", __privateGet(this, _a2)), this.div.addEventListener("focusout", __privateGet(this, _l));
          const [r, c] = this.parentDimensions;
          this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * c / r).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * r / c).toFixed(2)}%`);
          const [l, b] = this.getInitialTranslation();
          return this.translate(l, b), (0, w.bindEvents)(this, this.div, [
            "pointerdown"
          ]), this.div;
        }
        pointerdown(r) {
          const { isMac: c } = z.FeatureTest.platform;
          if (r.button !== 0 || r.ctrlKey && c) {
            r.preventDefault();
            return;
          }
          if (__privateSet(this, _u, true), this._isDraggable) {
            __privateMethod(this, _C_instances, T_fn).call(this, r);
            return;
          }
          __privateMethod(this, _C_instances, R_fn).call(this, r);
        }
        moveInDOM() {
          __privateGet(this, _f) && clearTimeout(__privateGet(this, _f)), __privateSet(this, _f, setTimeout(() => {
            var _a3;
            __privateSet(this, _f, null), (_a3 = this.parent) == null ? void 0 : _a3.moveEditorInDOM(this);
          }, 0));
        }
        _setParentAndPosition(r, c, l) {
          r.changeParent(this), this.x = c, this.y = l, this.fixAndSetPosition();
        }
        getRect(r, c, l = this.rotation) {
          const b = this.parentScale, [s, g] = this.pageDimensions, [t, i] = this.pageTranslation, u = r / b, p = c / b, y = this.x * s, S = this.y * g, L = this.width * s, M = this.height * g;
          switch (l) {
            case 0:
              return [
                y + u + t,
                g - S - p - M + i,
                y + u + L + t,
                g - S - p + i
              ];
            case 90:
              return [
                y + p + t,
                g - S + u + i,
                y + p + M + t,
                g - S + u + L + i
              ];
            case 180:
              return [
                y - u - L + t,
                g - S + p + i,
                y - u + t,
                g - S + p + M + i
              ];
            case 270:
              return [
                y - p - M + t,
                g - S - u - L + i,
                y - p + t,
                g - S - u + i
              ];
            default:
              throw new Error("Invalid rotation");
          }
        }
        getRectInCurrentCoords(r, c) {
          const [l, b, s, g] = r, t = s - l, i = g - b;
          switch (this.rotation) {
            case 0:
              return [
                l,
                c - g,
                t,
                i
              ];
            case 90:
              return [
                l,
                c - b,
                i,
                t
              ];
            case 180:
              return [
                s,
                c - b,
                t,
                i
              ];
            case 270:
              return [
                s,
                c - g,
                i,
                t
              ];
            default:
              throw new Error("Invalid rotation");
          }
        }
        onceAdded() {
        }
        isEmpty() {
          return false;
        }
        enableEditMode() {
          __privateSet(this, _p, true);
        }
        disableEditMode() {
          __privateSet(this, _p, false);
        }
        isInEditMode() {
          return __privateGet(this, _p);
        }
        shouldGetKeyboardEvents() {
          return __privateGet(this, _g);
        }
        needsToBeRebuilt() {
          return this.div && !this.isAttachedToDOM;
        }
        rebuild() {
          var _a3, _b;
          (_a3 = this.div) == null ? void 0 : _a3.addEventListener("focusin", __privateGet(this, _a2)), (_b = this.div) == null ? void 0 : _b.addEventListener("focusout", __privateGet(this, _l));
        }
        rotate(r) {
        }
        serialize(r = false, c = null) {
          (0, z.unreachable)("An editor must be serializable");
        }
        static deserialize(r, c, l) {
          const b = new this.prototype.constructor({
            parent: c,
            id: c.getNextId(),
            uiManager: l
          });
          b.rotation = r.rotation;
          const [s, g] = b.pageDimensions, [t, i, u, p] = b.getRectInCurrentCoords(r.rect, g);
          return b.x = t / s, b.y = i / g, b.width = u / s, b.height = p / g, b;
        }
        get hasBeenModified() {
          return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
        }
        remove() {
          if (this.div.removeEventListener("focusin", __privateGet(this, _a2)), this.div.removeEventListener("focusout", __privateGet(this, _l)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), __privateGet(this, _f) && (clearTimeout(__privateGet(this, _f)), __privateSet(this, _f, null)), __privateMethod(this, _C_instances, D_fn).call(this), this.removeEditToolbar(), __privateGet(this, _v)) {
            for (const r of __privateGet(this, _v).values()) clearTimeout(r);
            __privateSet(this, _v, null);
          }
          this.parent = null;
        }
        get isResizable() {
          return false;
        }
        makeResizable() {
          this.isResizable && (__privateMethod(this, _C_instances, y_fn).call(this), __privateGet(this, _r2).classList.remove("hidden"), (0, w.bindEvents)(this, this.div, [
            "keydown"
          ]));
        }
        get toolbarPosition() {
          return null;
        }
        keydown(r) {
          if (!this.isResizable || r.target !== this.div || r.key !== "Enter") return;
          this._uiManager.setSelected(this), __privateSet(this, _i2, {
            savedX: this.x,
            savedY: this.y,
            savedWidth: this.width,
            savedHeight: this.height
          });
          const c = __privateGet(this, _r2).children;
          if (!__privateGet(this, _t2)) {
            __privateSet(this, _t2, Array.from(c));
            const g = __privateMethod(this, _C_instances, M_fn).bind(this), t = __privateMethod(this, _C_instances, F_fn).bind(this);
            for (const i of __privateGet(this, _t2)) {
              const u = i.getAttribute("data-resizer-name");
              i.setAttribute("role", "spinbutton"), i.addEventListener("keydown", g), i.addEventListener("blur", t), i.addEventListener("focus", __privateMethod(this, _C_instances, __fn).bind(this, u)), _C2._l10nPromise.get(`pdfjs-editor-resizer-label-${u}`).then((p) => i.setAttribute("aria-label", p));
            }
          }
          const l = __privateGet(this, _t2)[0];
          let b = 0;
          for (const g of c) {
            if (g === l) break;
            b++;
          }
          const s = (360 - this.rotation + this.parentRotation) % 360 / 90 * (__privateGet(this, _t2).length / 4);
          if (s !== b) {
            if (s < b) for (let t = 0; t < b - s; t++) __privateGet(this, _r2).append(__privateGet(this, _r2).firstChild);
            else if (s > b) for (let t = 0; t < s - b; t++) __privateGet(this, _r2).firstChild.before(__privateGet(this, _r2).lastChild);
            let g = 0;
            for (const t of c) {
              const u = __privateGet(this, _t2)[g++].getAttribute("data-resizer-name");
              _C2._l10nPromise.get(`pdfjs-editor-resizer-label-${u}`).then((p) => t.setAttribute("aria-label", p));
            }
          }
          __privateMethod(this, _C_instances, P_fn).call(this, 0), __privateSet(this, _g, true), __privateGet(this, _r2).firstChild.focus({
            focusVisible: true
          }), r.preventDefault(), r.stopImmediatePropagation();
        }
        _resizeWithKeyboard(r, c) {
          __privateGet(this, _g) && __privateMethod(this, _C_instances, x_fn).call(this, __privateGet(this, _d), {
            movementX: r,
            movementY: c
          });
        }
        _stopResizingWithKeyboard() {
          __privateMethod(this, _C_instances, D_fn).call(this), this.div.focus();
        }
        select() {
          var _a3, _b;
          if (this.makeResizable(), (_a3 = this.div) == null ? void 0 : _a3.classList.add("selectedEditor"), !__privateGet(this, _h)) {
            this.addEditToolbar().then(() => {
              var _a4, _b2;
              ((_a4 = this.div) == null ? void 0 : _a4.classList.contains("selectedEditor")) && ((_b2 = __privateGet(this, _h)) == null ? void 0 : _b2.show());
            });
            return;
          }
          (_b = __privateGet(this, _h)) == null ? void 0 : _b.show();
        }
        unselect() {
          var _a3, _b, _c2, _d2;
          (_a3 = __privateGet(this, _r2)) == null ? void 0 : _a3.classList.add("hidden"), (_b = this.div) == null ? void 0 : _b.classList.remove("selectedEditor"), ((_c2 = this.div) == null ? void 0 : _c2.contains(document.activeElement)) && this._uiManager.currentLayer.div.focus({
            preventScroll: true
          }), (_d2 = __privateGet(this, _h)) == null ? void 0 : _d2.hide();
        }
        updateParams(r, c) {
        }
        disableEditing() {
        }
        enableEditing() {
        }
        enterInEditMode() {
        }
        getImageForAltText() {
          return null;
        }
        get contentDiv() {
          return this.div;
        }
        get isEditing() {
          return __privateGet(this, _o);
        }
        set isEditing(r) {
          __privateSet(this, _o, r), this.parent && (r ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
        }
        setAspectRatio(r, c) {
          __privateSet(this, _n2, true);
          const l = r / c, { style: b } = this.div;
          b.aspectRatio = l, b.height = "auto";
        }
        static get MIN_SIZE() {
          return 16;
        }
        static canCreateNewEmptyEditor() {
          return true;
        }
        get telemetryInitialData() {
          return {
            action: "added"
          };
        }
        get telemetryFinalData() {
          return null;
        }
        _reportTelemetry(r, c = false) {
          if (c) {
            __privateGet(this, _v) || __privateSet(this, _v, /* @__PURE__ */ new Map());
            const { action: l } = r;
            let b = __privateGet(this, _v).get(l);
            b && clearTimeout(b), b = setTimeout(() => {
              this._reportTelemetry(r), __privateGet(this, _v).delete(l), __privateGet(this, _v).size === 0 && __privateSet(this, _v, null);
            }, _C2._telemetryTimeout), __privateGet(this, _v).set(l, b);
            return;
          }
          r.type || (r.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: r
            }
          });
        }
        show(r = this._isVisible) {
          this.div.classList.toggle("hidden", !r), this._isVisible = r;
        }
        enable() {
          this.div && (this.div.tabIndex = 0), __privateSet(this, _s2, false);
        }
        disable() {
          this.div && (this.div.tabIndex = -1), __privateSet(this, _s2, true);
        }
        renderAnnotationElement(r) {
          let c = r.container.querySelector(".annotationContent");
          if (!c) c = document.createElement("div"), c.classList.add("annotationContent", this.editorType), r.container.prepend(c);
          else if (c.nodeName === "CANVAS") {
            const l = c;
            c = document.createElement("div"), c.classList.add("annotationContent", this.editorType), l.before(c);
          }
          return c;
        }
        resetAnnotationElement(r) {
          const { firstChild: c } = r.container;
          c.nodeName === "DIV" && c.classList.contains("annotationContent") && c.remove();
        }
      };
      _t2 = new WeakMap();
      _e3 = new WeakMap();
      _s2 = new WeakMap();
      _n2 = new WeakMap();
      _r2 = new WeakMap();
      _i2 = new WeakMap();
      _a2 = new WeakMap();
      _l = new WeakMap();
      _h = new WeakMap();
      _d = new WeakMap();
      _u = new WeakMap();
      _c = new WeakMap();
      _o = new WeakMap();
      _p = new WeakMap();
      _g = new WeakMap();
      _f = new WeakMap();
      _A = new WeakMap();
      _m = new WeakMap();
      _v = new WeakMap();
      _w = new WeakMap();
      _C = new WeakMap();
      _C_instances = new WeakSet();
      k_fn = function([r, c], l, b) {
        [l, b] = this.screenToPageTranslation(l, b), this.x += l / r, this.y += b / c, this.fixAndSetPosition();
      };
      _C_static = new WeakSet();
      I_fn = function(r, c, l) {
        switch (l) {
          case 90:
            return [
              c,
              -r
            ];
          case 180:
            return [
              -r,
              -c
            ];
          case 270:
            return [
              -c,
              r
            ];
          default:
            return [
              r,
              c
            ];
        }
      };
      L_fn = function(r) {
        switch (r) {
          case 90: {
            const [c, l] = this.pageDimensions;
            return [
              0,
              -c / l,
              l / c,
              0
            ];
          }
          case 180:
            return [
              -1,
              0,
              0,
              -1
            ];
          case 270: {
            const [c, l] = this.pageDimensions;
            return [
              0,
              c / l,
              -l / c,
              0
            ];
          }
          default:
            return [
              1,
              0,
              0,
              1
            ];
        }
      };
      y_fn = function() {
        if (__privateGet(this, _r2)) return;
        __privateSet(this, _r2, document.createElement("div")), __privateGet(this, _r2).classList.add("resizers");
        const r = this._willKeepAspectRatio ? [
          "topLeft",
          "topRight",
          "bottomRight",
          "bottomLeft"
        ] : [
          "topLeft",
          "topMiddle",
          "topRight",
          "middleRight",
          "bottomRight",
          "bottomMiddle",
          "bottomLeft",
          "middleLeft"
        ];
        for (const c of r) {
          const l = document.createElement("div");
          __privateGet(this, _r2).append(l), l.classList.add("resizer", c), l.setAttribute("data-resizer-name", c), l.addEventListener("pointerdown", __privateMethod(this, _C_instances, b_fn).bind(this, c)), l.addEventListener("contextmenu", _.noContextMenu), l.tabIndex = -1;
        }
        this.div.prepend(__privateGet(this, _r2));
      };
      b_fn = function(r, c) {
        var _a3;
        c.preventDefault();
        const { isMac: l } = z.FeatureTest.platform;
        if (c.button !== 0 || c.ctrlKey && l) return;
        (_a3 = __privateGet(this, _e3)) == null ? void 0 : _a3.toggle(false);
        const b = __privateMethod(this, _C_instances, x_fn).bind(this, r), s = this._isDraggable;
        this._isDraggable = false;
        const g = {
          passive: true,
          capture: true
        };
        this.parent.togglePointerEvents(false), window.addEventListener("pointermove", b, g), window.addEventListener("contextmenu", _.noContextMenu);
        const t = this.x, i = this.y, u = this.width, p = this.height, y = this.parent.div.style.cursor, S = this.div.style.cursor;
        this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(c.target).cursor;
        const L = () => {
          var _a4;
          this.parent.togglePointerEvents(true), (_a4 = __privateGet(this, _e3)) == null ? void 0 : _a4.toggle(true), this._isDraggable = s, window.removeEventListener("pointerup", L), window.removeEventListener("blur", L), window.removeEventListener("pointermove", b, g), window.removeEventListener("contextmenu", _.noContextMenu), this.parent.div.style.cursor = y, this.div.style.cursor = S, __privateMethod(this, _C_instances, S_fn).call(this, t, i, u, p);
        };
        window.addEventListener("pointerup", L), window.addEventListener("blur", L);
      };
      S_fn = function(r, c, l, b) {
        const s = this.x, g = this.y, t = this.width, i = this.height;
        s === r && g === c && t === l && i === b || this.addCommands({
          cmd: () => {
            this.width = t, this.height = i, this.x = s, this.y = g;
            const [u, p] = this.parentDimensions;
            this.setDims(u * t, p * i), this.fixAndSetPosition();
          },
          undo: () => {
            this.width = l, this.height = b, this.x = r, this.y = c;
            const [u, p] = this.parentDimensions;
            this.setDims(u * l, p * b), this.fixAndSetPosition();
          },
          mustExec: true
        });
      };
      x_fn = function(r, c) {
        const [l, b] = this.parentDimensions, s = this.x, g = this.y, t = this.width, i = this.height, u = _C2.MIN_SIZE / l, p = _C2.MIN_SIZE / b, y = (m) => Math.round(m * 1e4) / 1e4, S = __privateMethod(this, _C_instances, L_fn).call(this, this.rotation), L = (m, h) => [
          S[0] * m + S[2] * h,
          S[1] * m + S[3] * h
        ], M = __privateMethod(this, _C_instances, L_fn).call(this, 360 - this.rotation), N = (m, h) => [
          M[0] * m + M[2] * h,
          M[1] * m + M[3] * h
        ];
        let H, B, q = false, nt = false;
        switch (r) {
          case "topLeft":
            q = true, H = (m, h) => [
              0,
              0
            ], B = (m, h) => [
              m,
              h
            ];
            break;
          case "topMiddle":
            H = (m, h) => [
              m / 2,
              0
            ], B = (m, h) => [
              m / 2,
              h
            ];
            break;
          case "topRight":
            q = true, H = (m, h) => [
              m,
              0
            ], B = (m, h) => [
              0,
              h
            ];
            break;
          case "middleRight":
            nt = true, H = (m, h) => [
              m,
              h / 2
            ], B = (m, h) => [
              0,
              h / 2
            ];
            break;
          case "bottomRight":
            q = true, H = (m, h) => [
              m,
              h
            ], B = (m, h) => [
              0,
              0
            ];
            break;
          case "bottomMiddle":
            H = (m, h) => [
              m / 2,
              h
            ], B = (m, h) => [
              m / 2,
              0
            ];
            break;
          case "bottomLeft":
            q = true, H = (m, h) => [
              0,
              h
            ], B = (m, h) => [
              m,
              0
            ];
            break;
          case "middleLeft":
            nt = true, H = (m, h) => [
              0,
              h / 2
            ], B = (m, h) => [
              m,
              h / 2
            ];
            break;
        }
        const j = H(t, i), O = B(t, i);
        let V = L(...O);
        const Y = y(s + V[0]), tt = y(g + V[1]);
        let Z = 1, at = 1, [lt, pt] = this.screenToPageTranslation(c.movementX, c.movementY);
        if ([lt, pt] = N(lt / l, pt / b), q) {
          const m = Math.hypot(t, i);
          Z = at = Math.max(Math.min(Math.hypot(O[0] - j[0] - lt, O[1] - j[1] - pt) / m, 1 / t, 1 / i), u / t, p / i);
        } else nt ? Z = Math.max(u, Math.min(1, Math.abs(O[0] - j[0] - lt))) / t : at = Math.max(p, Math.min(1, Math.abs(O[1] - j[1] - pt))) / i;
        const dt = y(t * Z), ot = y(i * at);
        V = L(...B(dt, ot));
        const ut = Y - V[0], et = tt - V[1];
        this.width = dt, this.height = ot, this.x = ut, this.y = et, this.setDims(l * dt, b * ot), this.fixAndSetPosition();
      };
      R_fn = function(r) {
        const { isMac: c } = z.FeatureTest.platform;
        r.ctrlKey && !c || r.shiftKey || r.metaKey && c ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
      };
      T_fn = function(r) {
        const c = this._uiManager.isSelected(this);
        this._uiManager.setUpDragSession();
        let l, b;
        c && (this.div.classList.add("moving"), l = {
          passive: true,
          capture: true
        }, __privateSet(this, _A, r.clientX), __privateSet(this, _m, r.clientY), b = (g) => {
          const { clientX: t, clientY: i } = g, [u, p] = this.screenToPageTranslation(t - __privateGet(this, _A), i - __privateGet(this, _m));
          __privateSet(this, _A, t), __privateSet(this, _m, i), this._uiManager.dragSelectedEditors(u, p);
        }, window.addEventListener("pointermove", b, l));
        const s = () => {
          window.removeEventListener("pointerup", s), window.removeEventListener("blur", s), c && (this.div.classList.remove("moving"), window.removeEventListener("pointermove", b, l)), __privateSet(this, _u, false), this._uiManager.endDragSession() || __privateMethod(this, _C_instances, R_fn).call(this, r);
        };
        window.addEventListener("pointerup", s), window.addEventListener("blur", s);
      };
      M_fn = function(r) {
        _C2._resizerKeyboardManager.exec(this, r);
      };
      F_fn = function(r) {
        var _a3;
        __privateGet(this, _g) && ((_a3 = r.relatedTarget) == null ? void 0 : _a3.parentNode) !== __privateGet(this, _r2) && __privateMethod(this, _C_instances, D_fn).call(this);
      };
      __fn = function(r) {
        __privateSet(this, _d, __privateGet(this, _g) ? r : "");
      };
      P_fn = function(r) {
        if (__privateGet(this, _t2)) for (const c of __privateGet(this, _t2)) c.tabIndex = r;
      };
      D_fn = function() {
        if (__privateSet(this, _g, false), __privateMethod(this, _C_instances, P_fn).call(this, -1), __privateGet(this, _i2)) {
          const { savedX: r, savedY: c, savedWidth: l, savedHeight: b } = __privateGet(this, _i2);
          __privateMethod(this, _C_instances, S_fn).call(this, r, c, l, b), __privateSet(this, _i2, null);
        }
      };
      __privateAdd(_C2, _C_static);
      __publicField(_C2, "_borderLineWidth", -1);
      __publicField(_C2, "_colorManager", new w.ColorManager());
      __publicField(_C2, "_zIndex", 1);
      __publicField(_C2, "_telemetryTimeout", 1e3);
      let C = _C2;
      class E extends C {
        constructor(r) {
          super(r), this.annotationElementId = r.annotationElementId, this.deleted = true;
        }
        serialize() {
          return {
            id: this.annotationElementId,
            deleted: true,
            pageIndex: this.pageIndex
          };
        }
      }
    },
    61: (ct, st, $) => {
      var _t, _e2, _s, _z_instances, n_fn, r_fn, i_fn, a_fn, l_fn, _t2, _e3, _t3, _e4, _s2, _n, _r, _i, _a, _l, _h, _d, _u, _c, _o, _p, _g, _f, _P_instances, A_fn, _t4, _e5, _s3, _n2, _r2, _i2, _a2, _C_instances, l_fn2, h_fn, d_fn;
      $.d(st, {
        FreeOutliner: () => P,
        Outliner: () => z
      });
      var w = $(292);
      class z {
        constructor(v, r = 0, c = 0, l = true) {
          __privateAdd(this, _z_instances);
          __privateAdd(this, _t);
          __privateAdd(this, _e2, []);
          __privateAdd(this, _s, []);
          let b = 1 / 0, s = -1 / 0, g = 1 / 0, t = -1 / 0;
          const i = 10 ** -4;
          for (const { x: N, y: H, width: B, height: q } of v) {
            const nt = Math.floor((N - r) / i) * i, j = Math.ceil((N + B + r) / i) * i, O = Math.floor((H - r) / i) * i, V = Math.ceil((H + q + r) / i) * i, Y = [
              nt,
              O,
              V,
              true
            ], tt = [
              j,
              O,
              V,
              false
            ];
            __privateGet(this, _e2).push(Y, tt), b = Math.min(b, nt), s = Math.max(s, j), g = Math.min(g, O), t = Math.max(t, V);
          }
          const u = s - b + 2 * c, p = t - g + 2 * c, y = b - c, S = g - c, L = __privateGet(this, _e2).at(l ? -1 : -2), M = [
            L[0],
            L[2]
          ];
          for (const N of __privateGet(this, _e2)) {
            const [H, B, q] = N;
            N[0] = (H - y) / u, N[1] = (B - S) / p, N[2] = (q - S) / p;
          }
          __privateSet(this, _t, {
            x: y,
            y: S,
            width: u,
            height: p,
            lastPoint: M
          });
        }
        getOutlines() {
          __privateGet(this, _e2).sort((r, c) => r[0] - c[0] || r[1] - c[1] || r[2] - c[2]);
          const v = [];
          for (const r of __privateGet(this, _e2)) r[3] ? (v.push(...__privateMethod(this, _z_instances, l_fn).call(this, r)), __privateMethod(this, _z_instances, i_fn).call(this, r)) : (__privateMethod(this, _z_instances, a_fn).call(this, r), v.push(...__privateMethod(this, _z_instances, l_fn).call(this, r)));
          return __privateMethod(this, _z_instances, n_fn).call(this, v);
        }
      }
      _t = new WeakMap();
      _e2 = new WeakMap();
      _s = new WeakMap();
      _z_instances = new WeakSet();
      n_fn = function(v) {
        const r = [], c = /* @__PURE__ */ new Set();
        for (const s of v) {
          const [g, t, i] = s;
          r.push([
            g,
            t,
            s
          ], [
            g,
            i,
            s
          ]);
        }
        r.sort((s, g) => s[1] - g[1] || s[0] - g[0]);
        for (let s = 0, g = r.length; s < g; s += 2) {
          const t = r[s][2], i = r[s + 1][2];
          t.push(i), i.push(t), c.add(t), c.add(i);
        }
        const l = [];
        let b;
        for (; c.size > 0; ) {
          const s = c.values().next().value;
          let [g, t, i, u, p] = s;
          c.delete(s);
          let y = g, S = t;
          for (b = [
            g,
            i
          ], l.push(b); ; ) {
            let L;
            if (c.has(u)) L = u;
            else if (c.has(p)) L = p;
            else break;
            c.delete(L), [g, t, i, u, p] = L, y !== g && (b.push(y, S, g, S === t ? t : i), y = g), S = S === t ? i : t;
          }
          b.push(y, S);
        }
        return new G(l, __privateGet(this, _t));
      };
      r_fn = function(v) {
        const r = __privateGet(this, _s);
        let c = 0, l = r.length - 1;
        for (; c <= l; ) {
          const b = c + l >> 1, s = r[b][0];
          if (s === v) return b;
          s < v ? c = b + 1 : l = b - 1;
        }
        return l + 1;
      };
      i_fn = function([, v, r]) {
        const c = __privateMethod(this, _z_instances, r_fn).call(this, v);
        __privateGet(this, _s).splice(c, 0, [
          v,
          r
        ]);
      };
      a_fn = function([, v, r]) {
        const c = __privateMethod(this, _z_instances, r_fn).call(this, v);
        for (let l = c; l < __privateGet(this, _s).length; l++) {
          const [b, s] = __privateGet(this, _s)[l];
          if (b !== v) break;
          if (b === v && s === r) {
            __privateGet(this, _s).splice(l, 1);
            return;
          }
        }
        for (let l = c - 1; l >= 0; l--) {
          const [b, s] = __privateGet(this, _s)[l];
          if (b !== v) break;
          if (b === v && s === r) {
            __privateGet(this, _s).splice(l, 1);
            return;
          }
        }
      };
      l_fn = function(v) {
        const [r, c, l] = v, b = [
          [
            r,
            c,
            l
          ]
        ], s = __privateMethod(this, _z_instances, r_fn).call(this, l);
        for (let g = 0; g < s; g++) {
          const [t, i] = __privateGet(this, _s)[g];
          for (let u = 0, p = b.length; u < p; u++) {
            const [, y, S] = b[u];
            if (!(i <= y || S <= t)) {
              if (y >= t) {
                if (S > i) b[u][1] = i;
                else {
                  if (p === 1) return [];
                  b.splice(u, 1), u--, p--;
                }
                continue;
              }
              b[u][2] = t, S > i && b.push([
                r,
                i,
                S
              ]);
            }
          }
        }
        return b;
      };
      class _ {
        toSVGPath() {
          throw new Error("Abstract method `toSVGPath` must be implemented.");
        }
        get box() {
          throw new Error("Abstract getter `box` must be implemented.");
        }
        serialize(v, r) {
          throw new Error("Abstract method `serialize` must be implemented.");
        }
        get free() {
          return this instanceof C;
        }
      }
      class G extends _ {
        constructor(v, r) {
          super();
          __privateAdd(this, _t2);
          __privateAdd(this, _e3);
          __privateSet(this, _e3, v), __privateSet(this, _t2, r);
        }
        toSVGPath() {
          const v = [];
          for (const r of __privateGet(this, _e3)) {
            let [c, l] = r;
            v.push(`M${c} ${l}`);
            for (let b = 2; b < r.length; b += 2) {
              const s = r[b], g = r[b + 1];
              s === c ? (v.push(`V${g}`), l = g) : g === l && (v.push(`H${s}`), c = s);
            }
            v.push("Z");
          }
          return v.join(" ");
        }
        serialize([v, r, c, l], b) {
          const s = [], g = c - v, t = l - r;
          for (const i of __privateGet(this, _e3)) {
            const u = new Array(i.length);
            for (let p = 0; p < i.length; p += 2) u[p] = v + i[p] * g, u[p + 1] = l - i[p + 1] * t;
            s.push(u);
          }
          return s;
        }
        get box() {
          return __privateGet(this, _t2);
        }
      }
      _t2 = new WeakMap();
      _e3 = new WeakMap();
      const _P = class _P {
        constructor({ x: v, y: r }, c, l, b, s, g = 0) {
          __privateAdd(this, _P_instances);
          __privateAdd(this, _t3);
          __privateAdd(this, _e4, []);
          __privateAdd(this, _s2);
          __privateAdd(this, _n);
          __privateAdd(this, _r, []);
          __privateAdd(this, _i, new Float64Array(18));
          __privateAdd(this, _a);
          __privateAdd(this, _l);
          __privateAdd(this, _h);
          __privateAdd(this, _d);
          __privateAdd(this, _u);
          __privateAdd(this, _c);
          __privateAdd(this, _o, []);
          __privateSet(this, _t3, c), __privateSet(this, _c, b * l), __privateSet(this, _n, s), __privateGet(this, _i).set([
            NaN,
            NaN,
            NaN,
            NaN,
            v,
            r
          ], 6), __privateSet(this, _s2, g), __privateSet(this, _d, __privateGet(_P, _p) * l), __privateSet(this, _h, __privateGet(_P, _f) * l), __privateSet(this, _u, l), __privateGet(this, _o).push(v, r);
        }
        get free() {
          return true;
        }
        isEmpty() {
          return isNaN(__privateGet(this, _i)[8]);
        }
        add({ x: v, y: r }) {
          var _a3;
          __privateSet(this, _a, v), __privateSet(this, _l, r);
          const [c, l, b, s] = __privateGet(this, _t3);
          let [g, t, i, u] = __privateGet(this, _i).subarray(8, 12);
          const p = v - i, y = r - u, S = Math.hypot(p, y);
          if (S < __privateGet(this, _h)) return false;
          const L = S - __privateGet(this, _d), M = L / S, N = M * p, H = M * y;
          let B = g, q = t;
          g = i, t = u, i += N, u += H, (_a3 = __privateGet(this, _o)) == null ? void 0 : _a3.push(v, r);
          const nt = -H / L, j = N / L, O = nt * __privateGet(this, _c), V = j * __privateGet(this, _c);
          return __privateGet(this, _i).set(__privateGet(this, _i).subarray(2, 8), 0), __privateGet(this, _i).set([
            i + O,
            u + V
          ], 4), __privateGet(this, _i).set(__privateGet(this, _i).subarray(14, 18), 12), __privateGet(this, _i).set([
            i - O,
            u - V
          ], 16), isNaN(__privateGet(this, _i)[6]) ? (__privateGet(this, _r).length === 0 && (__privateGet(this, _i).set([
            g + O,
            t + V
          ], 2), __privateGet(this, _r).push(NaN, NaN, NaN, NaN, (g + O - c) / b, (t + V - l) / s), __privateGet(this, _i).set([
            g - O,
            t - V
          ], 14), __privateGet(this, _e4).push(NaN, NaN, NaN, NaN, (g - O - c) / b, (t - V - l) / s)), __privateGet(this, _i).set([
            B,
            q,
            g,
            t,
            i,
            u
          ], 6), !this.isEmpty()) : (__privateGet(this, _i).set([
            B,
            q,
            g,
            t,
            i,
            u
          ], 6), Math.abs(Math.atan2(q - t, B - g) - Math.atan2(H, N)) < Math.PI / 2 ? ([g, t, i, u] = __privateGet(this, _i).subarray(2, 6), __privateGet(this, _r).push(NaN, NaN, NaN, NaN, ((g + i) / 2 - c) / b, ((t + u) / 2 - l) / s), [g, t, B, q] = __privateGet(this, _i).subarray(14, 18), __privateGet(this, _e4).push(NaN, NaN, NaN, NaN, ((B + g) / 2 - c) / b, ((q + t) / 2 - l) / s), true) : ([B, q, g, t, i, u] = __privateGet(this, _i).subarray(0, 6), __privateGet(this, _r).push(((B + 5 * g) / 6 - c) / b, ((q + 5 * t) / 6 - l) / s, ((5 * g + i) / 6 - c) / b, ((5 * t + u) / 6 - l) / s, ((g + i) / 2 - c) / b, ((t + u) / 2 - l) / s), [i, u, g, t, B, q] = __privateGet(this, _i).subarray(12, 18), __privateGet(this, _e4).push(((B + 5 * g) / 6 - c) / b, ((q + 5 * t) / 6 - l) / s, ((5 * g + i) / 6 - c) / b, ((5 * t + u) / 6 - l) / s, ((g + i) / 2 - c) / b, ((t + u) / 2 - l) / s), true));
        }
        toSVGPath() {
          if (this.isEmpty()) return "";
          const v = __privateGet(this, _r), r = __privateGet(this, _e4), c = __privateGet(this, _i).subarray(4, 6), l = __privateGet(this, _i).subarray(16, 18), [b, s, g, t] = __privateGet(this, _t3), [i, u, p, y] = __privateMethod(this, _P_instances, A_fn).call(this);
          if (isNaN(__privateGet(this, _i)[6]) && !this.isEmpty()) return `M${(__privateGet(this, _i)[2] - b) / g} ${(__privateGet(this, _i)[3] - s) / t} L${(__privateGet(this, _i)[4] - b) / g} ${(__privateGet(this, _i)[5] - s) / t} L${i} ${u} L${p} ${y} L${(__privateGet(this, _i)[16] - b) / g} ${(__privateGet(this, _i)[17] - s) / t} L${(__privateGet(this, _i)[14] - b) / g} ${(__privateGet(this, _i)[15] - s) / t} Z`;
          const S = [];
          S.push(`M${v[4]} ${v[5]}`);
          for (let L = 6; L < v.length; L += 6) isNaN(v[L]) ? S.push(`L${v[L + 4]} ${v[L + 5]}`) : S.push(`C${v[L]} ${v[L + 1]} ${v[L + 2]} ${v[L + 3]} ${v[L + 4]} ${v[L + 5]}`);
          S.push(`L${(c[0] - b) / g} ${(c[1] - s) / t} L${i} ${u} L${p} ${y} L${(l[0] - b) / g} ${(l[1] - s) / t}`);
          for (let L = r.length - 6; L >= 6; L -= 6) isNaN(r[L]) ? S.push(`L${r[L + 4]} ${r[L + 5]}`) : S.push(`C${r[L]} ${r[L + 1]} ${r[L + 2]} ${r[L + 3]} ${r[L + 4]} ${r[L + 5]}`);
          return S.push(`L${r[4]} ${r[5]} Z`), S.join(" ");
        }
        getOutlines() {
          var _a3;
          const v = __privateGet(this, _r), r = __privateGet(this, _e4), c = __privateGet(this, _i), l = c.subarray(4, 6), b = c.subarray(16, 18), [s, g, t, i] = __privateGet(this, _t3), u = new Float64Array((((_a3 = __privateGet(this, _o)) == null ? void 0 : _a3.length) ?? 0) + 2);
          for (let H = 0, B = u.length - 2; H < B; H += 2) u[H] = (__privateGet(this, _o)[H] - s) / t, u[H + 1] = (__privateGet(this, _o)[H + 1] - g) / i;
          u[u.length - 2] = (__privateGet(this, _a) - s) / t, u[u.length - 1] = (__privateGet(this, _l) - g) / i;
          const [p, y, S, L] = __privateMethod(this, _P_instances, A_fn).call(this);
          if (isNaN(c[6]) && !this.isEmpty()) {
            const H = new Float64Array(36);
            return H.set([
              NaN,
              NaN,
              NaN,
              NaN,
              (c[2] - s) / t,
              (c[3] - g) / i,
              NaN,
              NaN,
              NaN,
              NaN,
              (c[4] - s) / t,
              (c[5] - g) / i,
              NaN,
              NaN,
              NaN,
              NaN,
              p,
              y,
              NaN,
              NaN,
              NaN,
              NaN,
              S,
              L,
              NaN,
              NaN,
              NaN,
              NaN,
              (c[16] - s) / t,
              (c[17] - g) / i,
              NaN,
              NaN,
              NaN,
              NaN,
              (c[14] - s) / t,
              (c[15] - g) / i
            ], 0), new C(H, u, __privateGet(this, _t3), __privateGet(this, _u), __privateGet(this, _s2), __privateGet(this, _n));
          }
          const M = new Float64Array(__privateGet(this, _r).length + 24 + __privateGet(this, _e4).length);
          let N = v.length;
          for (let H = 0; H < N; H += 2) {
            if (isNaN(v[H])) {
              M[H] = M[H + 1] = NaN;
              continue;
            }
            M[H] = v[H], M[H + 1] = v[H + 1];
          }
          M.set([
            NaN,
            NaN,
            NaN,
            NaN,
            (l[0] - s) / t,
            (l[1] - g) / i,
            NaN,
            NaN,
            NaN,
            NaN,
            p,
            y,
            NaN,
            NaN,
            NaN,
            NaN,
            S,
            L,
            NaN,
            NaN,
            NaN,
            NaN,
            (b[0] - s) / t,
            (b[1] - g) / i
          ], N), N += 24;
          for (let H = r.length - 6; H >= 6; H -= 6) for (let B = 0; B < 6; B += 2) {
            if (isNaN(r[H + B])) {
              M[N] = M[N + 1] = NaN, N += 2;
              continue;
            }
            M[N] = r[H + B], M[N + 1] = r[H + B + 1], N += 2;
          }
          return M.set([
            NaN,
            NaN,
            NaN,
            NaN,
            r[4],
            r[5]
          ], N), new C(M, u, __privateGet(this, _t3), __privateGet(this, _u), __privateGet(this, _s2), __privateGet(this, _n));
        }
      };
      _t3 = new WeakMap();
      _e4 = new WeakMap();
      _s2 = new WeakMap();
      _n = new WeakMap();
      _r = new WeakMap();
      _i = new WeakMap();
      _a = new WeakMap();
      _l = new WeakMap();
      _h = new WeakMap();
      _d = new WeakMap();
      _u = new WeakMap();
      _c = new WeakMap();
      _o = new WeakMap();
      _p = new WeakMap();
      _g = new WeakMap();
      _f = new WeakMap();
      _P_instances = new WeakSet();
      A_fn = function() {
        const v = __privateGet(this, _i).subarray(4, 6), r = __privateGet(this, _i).subarray(16, 18), [c, l, b, s] = __privateGet(this, _t3);
        return [
          (__privateGet(this, _a) + (v[0] - r[0]) / 2 - c) / b,
          (__privateGet(this, _l) + (v[1] - r[1]) / 2 - l) / s,
          (__privateGet(this, _a) + (r[0] - v[0]) / 2 - c) / b,
          (__privateGet(this, _l) + (r[1] - v[1]) / 2 - l) / s
        ];
      };
      __privateAdd(_P, _p, 8);
      __privateAdd(_P, _g, 2);
      __privateAdd(_P, _f, __privateGet(_P, _p) + __privateGet(_P, _g));
      let P = _P;
      class C extends _ {
        constructor(v, r, c, l, b, s) {
          super();
          __privateAdd(this, _C_instances);
          __privateAdd(this, _t4);
          __privateAdd(this, _e5, null);
          __privateAdd(this, _s3);
          __privateAdd(this, _n2);
          __privateAdd(this, _r2);
          __privateAdd(this, _i2);
          __privateAdd(this, _a2);
          __privateSet(this, _a2, v), __privateSet(this, _r2, r), __privateSet(this, _t4, c), __privateSet(this, _i2, l), __privateSet(this, _s3, b), __privateSet(this, _n2, s), __privateMethod(this, _C_instances, d_fn).call(this, s);
          const { x: g, y: t, width: i, height: u } = __privateGet(this, _e5);
          for (let p = 0, y = v.length; p < y; p += 2) v[p] = (v[p] - g) / i, v[p + 1] = (v[p + 1] - t) / u;
          for (let p = 0, y = r.length; p < y; p += 2) r[p] = (r[p] - g) / i, r[p + 1] = (r[p + 1] - t) / u;
        }
        toSVGPath() {
          const v = [
            `M${__privateGet(this, _a2)[4]} ${__privateGet(this, _a2)[5]}`
          ];
          for (let r = 6, c = __privateGet(this, _a2).length; r < c; r += 6) {
            if (isNaN(__privateGet(this, _a2)[r])) {
              v.push(`L${__privateGet(this, _a2)[r + 4]} ${__privateGet(this, _a2)[r + 5]}`);
              continue;
            }
            v.push(`C${__privateGet(this, _a2)[r]} ${__privateGet(this, _a2)[r + 1]} ${__privateGet(this, _a2)[r + 2]} ${__privateGet(this, _a2)[r + 3]} ${__privateGet(this, _a2)[r + 4]} ${__privateGet(this, _a2)[r + 5]}`);
          }
          return v.push("Z"), v.join(" ");
        }
        serialize([v, r, c, l], b) {
          const s = c - v, g = l - r;
          let t, i;
          switch (b) {
            case 0:
              t = __privateMethod(this, _C_instances, l_fn2).call(this, __privateGet(this, _a2), v, l, s, -g), i = __privateMethod(this, _C_instances, l_fn2).call(this, __privateGet(this, _r2), v, l, s, -g);
              break;
            case 90:
              t = __privateMethod(this, _C_instances, h_fn).call(this, __privateGet(this, _a2), v, r, s, g), i = __privateMethod(this, _C_instances, h_fn).call(this, __privateGet(this, _r2), v, r, s, g);
              break;
            case 180:
              t = __privateMethod(this, _C_instances, l_fn2).call(this, __privateGet(this, _a2), c, r, -s, g), i = __privateMethod(this, _C_instances, l_fn2).call(this, __privateGet(this, _r2), c, r, -s, g);
              break;
            case 270:
              t = __privateMethod(this, _C_instances, h_fn).call(this, __privateGet(this, _a2), c, l, -s, -g), i = __privateMethod(this, _C_instances, h_fn).call(this, __privateGet(this, _r2), c, l, -s, -g);
              break;
          }
          return {
            outline: Array.from(t),
            points: [
              Array.from(i)
            ]
          };
        }
        get box() {
          return __privateGet(this, _e5);
        }
        getNewOutline(v, r) {
          const { x: c, y: l, width: b, height: s } = __privateGet(this, _e5), [g, t, i, u] = __privateGet(this, _t4), p = b * i, y = s * u, S = c * i + g, L = l * u + t, M = new P({
            x: __privateGet(this, _r2)[0] * p + S,
            y: __privateGet(this, _r2)[1] * y + L
          }, __privateGet(this, _t4), __privateGet(this, _i2), v, __privateGet(this, _n2), r ?? __privateGet(this, _s3));
          for (let N = 2; N < __privateGet(this, _r2).length; N += 2) M.add({
            x: __privateGet(this, _r2)[N] * p + S,
            y: __privateGet(this, _r2)[N + 1] * y + L
          });
          return M.getOutlines();
        }
      }
      _t4 = new WeakMap();
      _e5 = new WeakMap();
      _s3 = new WeakMap();
      _n2 = new WeakMap();
      _r2 = new WeakMap();
      _i2 = new WeakMap();
      _a2 = new WeakMap();
      _C_instances = new WeakSet();
      l_fn2 = function(v, r, c, l, b) {
        const s = new Float64Array(v.length);
        for (let g = 0, t = v.length; g < t; g += 2) s[g] = r + v[g] * l, s[g + 1] = c + v[g + 1] * b;
        return s;
      };
      h_fn = function(v, r, c, l, b) {
        const s = new Float64Array(v.length);
        for (let g = 0, t = v.length; g < t; g += 2) s[g] = r + v[g + 1] * l, s[g + 1] = c + v[g] * b;
        return s;
      };
      d_fn = function(v) {
        const r = __privateGet(this, _a2);
        let c = r[4], l = r[5], b = c, s = l, g = c, t = l, i = c, u = l;
        const p = v ? Math.max : Math.min;
        for (let N = 6, H = r.length; N < H; N += 6) {
          if (isNaN(r[N])) b = Math.min(b, r[N + 4]), s = Math.min(s, r[N + 5]), g = Math.max(g, r[N + 4]), t = Math.max(t, r[N + 5]), u < r[N + 5] ? (i = r[N + 4], u = r[N + 5]) : u === r[N + 5] && (i = p(i, r[N + 4]));
          else {
            const B = w.Util.bezierBoundingBox(c, l, ...r.slice(N, N + 6));
            b = Math.min(b, B[0]), s = Math.min(s, B[1]), g = Math.max(g, B[2]), t = Math.max(t, B[3]), u < B[3] ? (i = B[2], u = B[3]) : u === B[3] && (i = p(i, B[2]));
          }
          c = r[N + 4], l = r[N + 5];
        }
        const y = b - __privateGet(this, _s3), S = s - __privateGet(this, _s3), L = g - b + 2 * __privateGet(this, _s3), M = t - s + 2 * __privateGet(this, _s3);
        __privateSet(this, _e5, {
          x: y,
          y: S,
          width: L,
          height: M,
          lastPoint: [
            i,
            u
          ]
        });
      };
    },
    362: (ct, st, $) => {
      var _t, _e2, _s, _n, _z_static, r_fn, _z_instances, i_fn, a_fn, l_fn, h_fn, d_get, _t2, _e3, _s2, ___instances, n_fn, r_fn2, i_fn2;
      $.d(st, {
        EditorToolbar: () => z,
        HighlightToolbar: () => _
      });
      var w = $(419);
      const _z = class _z {
        constructor(P) {
          __privateAdd(this, _z_instances);
          __privateAdd(this, _t, null);
          __privateAdd(this, _e2, null);
          __privateAdd(this, _s);
          __privateAdd(this, _n, null);
          __privateSet(this, _s, P);
        }
        render() {
          const P = __privateSet(this, _t, document.createElement("div"));
          P.className = "editToolbar", P.setAttribute("role", "toolbar"), P.addEventListener("contextmenu", w.noContextMenu), P.addEventListener("pointerdown", __privateMethod(_z, _z_static, r_fn));
          const C = __privateSet(this, _n, document.createElement("div"));
          C.className = "buttons", P.append(C);
          const E = __privateGet(this, _s).toolbarPosition;
          if (E) {
            const { style: v } = P, r = __privateGet(this, _s)._uiManager.direction === "ltr" ? 1 - E[0] : E[0];
            v.insetInlineEnd = `${100 * r}%`, v.top = `calc(${100 * E[1]}% + var(--editor-toolbar-vert-offset))`;
          }
          return __privateMethod(this, _z_instances, h_fn).call(this), P;
        }
        hide() {
          var _a;
          __privateGet(this, _t).classList.add("hidden"), (_a = __privateGet(this, _e2)) == null ? void 0 : _a.hideDropdown();
        }
        show() {
          __privateGet(this, _t).classList.remove("hidden");
        }
        addAltTextButton(P) {
          __privateMethod(this, _z_instances, l_fn).call(this, P), __privateGet(this, _n).prepend(P, __privateGet(this, _z_instances, d_get));
        }
        addColorPicker(P) {
          __privateSet(this, _e2, P);
          const C = P.renderButton();
          __privateMethod(this, _z_instances, l_fn).call(this, C), __privateGet(this, _n).prepend(C, __privateGet(this, _z_instances, d_get));
        }
        remove() {
          var _a;
          __privateGet(this, _t).remove(), (_a = __privateGet(this, _e2)) == null ? void 0 : _a.destroy(), __privateSet(this, _e2, null);
        }
      };
      _t = new WeakMap();
      _e2 = new WeakMap();
      _s = new WeakMap();
      _n = new WeakMap();
      _z_static = new WeakSet();
      r_fn = function(P) {
        P.stopPropagation();
      };
      _z_instances = new WeakSet();
      i_fn = function(P) {
        __privateGet(this, _s)._focusEventsAllowed = false, P.preventDefault(), P.stopPropagation();
      };
      a_fn = function(P) {
        __privateGet(this, _s)._focusEventsAllowed = true, P.preventDefault(), P.stopPropagation();
      };
      l_fn = function(P) {
        P.addEventListener("focusin", __privateMethod(this, _z_instances, i_fn).bind(this), {
          capture: true
        }), P.addEventListener("focusout", __privateMethod(this, _z_instances, a_fn).bind(this), {
          capture: true
        }), P.addEventListener("contextmenu", w.noContextMenu);
      };
      h_fn = function() {
        const P = document.createElement("button");
        P.className = "delete", P.tabIndex = 0, P.setAttribute("data-l10n-id", `pdfjs-editor-remove-${__privateGet(this, _s).editorType}-button`), __privateMethod(this, _z_instances, l_fn).call(this, P), P.addEventListener("click", (C) => {
          __privateGet(this, _s)._uiManager.delete();
        }), __privateGet(this, _n).append(P);
      };
      d_get = function() {
        const P = document.createElement("div");
        return P.className = "divider", P;
      };
      __privateAdd(_z, _z_static);
      let z = _z;
      class _ {
        constructor(P) {
          __privateAdd(this, ___instances);
          __privateAdd(this, _t2, null);
          __privateAdd(this, _e3, null);
          __privateAdd(this, _s2);
          __privateSet(this, _s2, P);
        }
        show(P, C, E) {
          const [v, r] = __privateMethod(this, ___instances, r_fn2).call(this, C, E), { style: c } = __privateGet(this, _e3) || __privateSet(this, _e3, __privateMethod(this, ___instances, n_fn).call(this));
          P.append(__privateGet(this, _e3)), c.insetInlineEnd = `${100 * v}%`, c.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
        }
        hide() {
          __privateGet(this, _e3).remove();
        }
      }
      _t2 = new WeakMap();
      _e3 = new WeakMap();
      _s2 = new WeakMap();
      ___instances = new WeakSet();
      n_fn = function() {
        const P = __privateSet(this, _e3, document.createElement("div"));
        P.className = "editToolbar", P.setAttribute("role", "toolbar"), P.addEventListener("contextmenu", w.noContextMenu);
        const C = __privateSet(this, _t2, document.createElement("div"));
        return C.className = "buttons", P.append(C), __privateMethod(this, ___instances, i_fn2).call(this), P;
      };
      r_fn2 = function(P, C) {
        let E = 0, v = 0;
        for (const r of P) {
          const c = r.y + r.height;
          if (c < E) continue;
          const l = r.x + (C ? r.width : 0);
          if (c > E) {
            v = l, E = c;
            continue;
          }
          C ? l > v && (v = l) : l < v && (v = l);
        }
        return [
          C ? 1 - v : v,
          E
        ];
      };
      i_fn2 = function() {
        const P = document.createElement("button");
        P.className = "highlightButton", P.tabIndex = 0, P.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
        const C = document.createElement("span");
        P.append(C), C.className = "visuallyHidden", C.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label"), P.addEventListener("contextmenu", w.noContextMenu), P.addEventListener("click", () => {
          __privateGet(this, _s2).highlightSelection("floating_button");
        }), __privateGet(this, _t2).append(P);
      };
    },
    830: (ct, st, $) => {
      var _t, _t2, _e2, _s, _E_instances, n_fn, _t3, _e3, _s2, _n, _r_instances, t_fn, _t4, _e4, _s3, _n2, _r, _i, _a, _l, _h, _d, _u, _c2, _o, _p, _g, _f, _A, _m, _v, _w, _C, _k, _I, _L, _y, _b, _S, _x, _R, _T, _M, _F, __, _P, _D, _V, _$, _X, _G, _B, _N, _q, _U, _O, _z, _K, _l_instances, Y_fn, nt_fn, rt_fn, W_fn, at_fn, ot_fn, ht_fn, Q_fn, J_fn, Z_fn, tt_fn, et_fn, E_fn, H_fn, lt_fn, ct_fn, st_fn, dt_get, j_fn, it_fn;
      $.d(st, {
        AnnotationEditorUIManager: () => l,
        ColorManager: () => c,
        KeyboardManager: () => r,
        bindEvents: () => G,
        opacityToHex: () => P
      });
      var w = $(292), z = $(419), _ = $(362);
      function G(b, s, g) {
        for (const t of g) s.addEventListener(t, b[t].bind(b));
      }
      function P(b) {
        return Math.round(Math.min(255, Math.max(1, 255 * b))).toString(16).padStart(2, "0");
      }
      class C {
        constructor() {
          __privateAdd(this, _t, 0);
        }
        get id() {
          return `${w.AnnotationEditorPrefix}${__privateWrapper(this, _t)._++}`;
        }
      }
      _t = new WeakMap();
      const _E = class _E {
        constructor() {
          __privateAdd(this, _E_instances);
          __privateAdd(this, _t2, (0, w.getUuid)());
          __privateAdd(this, _e2, 0);
          __privateAdd(this, _s, null);
        }
        static get _isSVGFittingCanvas() {
          const s = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', t = new OffscreenCanvas(1, 3).getContext("2d"), i = new Image();
          i.src = s;
          const u = i.decode().then(() => (t.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(t.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
          return (0, w.shadow)(this, "_isSVGFittingCanvas", u);
        }
        async getFromFile(s) {
          const { lastModified: g, name: t, size: i, type: u } = s;
          return __privateMethod(this, _E_instances, n_fn).call(this, `${g}_${t}_${i}_${u}`, s);
        }
        async getFromUrl(s) {
          return __privateMethod(this, _E_instances, n_fn).call(this, s, s);
        }
        async getFromId(s) {
          __privateGet(this, _s) || __privateSet(this, _s, /* @__PURE__ */ new Map());
          const g = __privateGet(this, _s).get(s);
          return g ? g.bitmap ? (g.refCounter += 1, g) : g.file ? this.getFromFile(g.file) : this.getFromUrl(g.url) : null;
        }
        getSvgUrl(s) {
          const g = __privateGet(this, _s).get(s);
          return (g == null ? void 0 : g.isSvg) ? g.svgUrl : null;
        }
        deleteId(s) {
          __privateGet(this, _s) || __privateSet(this, _s, /* @__PURE__ */ new Map());
          const g = __privateGet(this, _s).get(s);
          g && (g.refCounter -= 1, g.refCounter === 0 && (g.bitmap = null));
        }
        isValidId(s) {
          return s.startsWith(`image_${__privateGet(this, _t2)}_`);
        }
      };
      _t2 = new WeakMap();
      _e2 = new WeakMap();
      _s = new WeakMap();
      _E_instances = new WeakSet();
      n_fn = async function(s, g) {
        __privateGet(this, _s) || __privateSet(this, _s, /* @__PURE__ */ new Map());
        let t = __privateGet(this, _s).get(s);
        if (t === null) return null;
        if (t == null ? void 0 : t.bitmap) return t.refCounter += 1, t;
        try {
          t || (t = {
            bitmap: null,
            id: `image_${__privateGet(this, _t2)}_${__privateWrapper(this, _e2)._++}`,
            refCounter: 0,
            isSvg: false
          });
          let i;
          if (typeof g == "string" ? (t.url = g, i = await (0, z.fetchData)(g, "blob")) : i = t.file = g, i.type === "image/svg+xml") {
            const u = _E._isSVGFittingCanvas, p = new FileReader(), y = new Image(), S = new Promise((L, M) => {
              y.onload = () => {
                t.bitmap = y, t.isSvg = true, L();
              }, p.onload = async () => {
                const N = t.svgUrl = p.result;
                y.src = await u ? `${N}#svgView(preserveAspectRatio(none))` : N;
              }, y.onerror = p.onerror = M;
            });
            p.readAsDataURL(i), await S;
          } else t.bitmap = await createImageBitmap(i);
          t.refCounter = 1;
        } catch (i) {
          console.error(i), t = null;
        }
        return __privateGet(this, _s).set(s, t), t && __privateGet(this, _s).set(t.id, t), t;
      };
      let E = _E;
      class v {
        constructor(s = 128) {
          __privateAdd(this, _t3, []);
          __privateAdd(this, _e3, false);
          __privateAdd(this, _s2);
          __privateAdd(this, _n, -1);
          __privateSet(this, _s2, s);
        }
        add({ cmd: s, undo: g, post: t, mustExec: i, type: u = NaN, overwriteIfSameType: p = false, keepUndo: y = false }) {
          if (i && s(), __privateGet(this, _e3)) return;
          const S = {
            cmd: s,
            undo: g,
            post: t,
            type: u
          };
          if (__privateGet(this, _n) === -1) {
            __privateGet(this, _t3).length > 0 && (__privateGet(this, _t3).length = 0), __privateSet(this, _n, 0), __privateGet(this, _t3).push(S);
            return;
          }
          if (p && __privateGet(this, _t3)[__privateGet(this, _n)].type === u) {
            y && (S.undo = __privateGet(this, _t3)[__privateGet(this, _n)].undo), __privateGet(this, _t3)[__privateGet(this, _n)] = S;
            return;
          }
          const L = __privateGet(this, _n) + 1;
          L === __privateGet(this, _s2) ? __privateGet(this, _t3).splice(0, 1) : (__privateSet(this, _n, L), L < __privateGet(this, _t3).length && __privateGet(this, _t3).splice(L)), __privateGet(this, _t3).push(S);
        }
        undo() {
          if (__privateGet(this, _n) === -1) return;
          __privateSet(this, _e3, true);
          const { undo: s, post: g } = __privateGet(this, _t3)[__privateGet(this, _n)];
          s(), g == null ? void 0 : g(), __privateSet(this, _e3, false), __privateSet(this, _n, __privateGet(this, _n) - 1);
        }
        redo() {
          if (__privateGet(this, _n) < __privateGet(this, _t3).length - 1) {
            __privateSet(this, _n, __privateGet(this, _n) + 1), __privateSet(this, _e3, true);
            const { cmd: s, post: g } = __privateGet(this, _t3)[__privateGet(this, _n)];
            s(), g == null ? void 0 : g(), __privateSet(this, _e3, false);
          }
        }
        hasSomethingToUndo() {
          return __privateGet(this, _n) !== -1;
        }
        hasSomethingToRedo() {
          return __privateGet(this, _n) < __privateGet(this, _t3).length - 1;
        }
        destroy() {
          __privateSet(this, _t3, null);
        }
      }
      _t3 = new WeakMap();
      _e3 = new WeakMap();
      _s2 = new WeakMap();
      _n = new WeakMap();
      class r {
        constructor(s) {
          __privateAdd(this, _r_instances);
          this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
          const { isMac: g } = w.FeatureTest.platform;
          for (const [t, i, u = {}] of s) for (const p of t) {
            const y = p.startsWith("mac+");
            g && y ? (this.callbacks.set(p.slice(4), {
              callback: i,
              options: u
            }), this.allKeys.add(p.split("+").at(-1))) : !g && !y && (this.callbacks.set(p, {
              callback: i,
              options: u
            }), this.allKeys.add(p.split("+").at(-1)));
          }
        }
        exec(s, g) {
          if (!this.allKeys.has(g.key)) return;
          const t = this.callbacks.get(__privateMethod(this, _r_instances, t_fn).call(this, g));
          if (!t) return;
          const { callback: i, options: { bubbles: u = false, args: p = [], checker: y = null } } = t;
          y && !y(s, g) || (i.bind(s, ...p, g)(), u || (g.stopPropagation(), g.preventDefault()));
        }
      }
      _r_instances = new WeakSet();
      t_fn = function(s) {
        s.altKey && this.buffer.push("alt"), s.ctrlKey && this.buffer.push("ctrl"), s.metaKey && this.buffer.push("meta"), s.shiftKey && this.buffer.push("shift"), this.buffer.push(s.key);
        const g = this.buffer.join("+");
        return this.buffer.length = 0, g;
      };
      const _c = class _c {
        get _colors() {
          const s = /* @__PURE__ */ new Map([
            [
              "CanvasText",
              null
            ],
            [
              "Canvas",
              null
            ]
          ]);
          return (0, z.getColorValues)(s), (0, w.shadow)(this, "_colors", s);
        }
        convert(s) {
          const g = (0, z.getRGB)(s);
          if (!window.matchMedia("(forced-colors: active)").matches) return g;
          for (const [t, i] of this._colors) if (i.every((u, p) => u === g[p])) return _c._colorsMapping.get(t);
          return g;
        }
        getHexCode(s) {
          const g = this._colors.get(s);
          return g ? w.Util.makeHexColor(...g) : s;
        }
      };
      __publicField(_c, "_colorsMapping", /* @__PURE__ */ new Map([
        [
          "CanvasText",
          [
            0,
            0,
            0
          ]
        ],
        [
          "Canvas",
          [
            255,
            255,
            255
          ]
        ]
      ]));
      let c = _c;
      const _l2 = class _l2 {
        constructor(s, g, t, i, u, p, y, S, L) {
          __privateAdd(this, _l_instances);
          __privateAdd(this, _t4, null);
          __privateAdd(this, _e4, /* @__PURE__ */ new Map());
          __privateAdd(this, _s3, /* @__PURE__ */ new Map());
          __privateAdd(this, _n2, null);
          __privateAdd(this, _r, null);
          __privateAdd(this, _i, null);
          __privateAdd(this, _a, new v());
          __privateAdd(this, _l, 0);
          __privateAdd(this, _h, /* @__PURE__ */ new Set());
          __privateAdd(this, _d, null);
          __privateAdd(this, _u, null);
          __privateAdd(this, _c2, /* @__PURE__ */ new Set());
          __privateAdd(this, _o, false);
          __privateAdd(this, _p, null);
          __privateAdd(this, _g, null);
          __privateAdd(this, _f, null);
          __privateAdd(this, _A, false);
          __privateAdd(this, _m, null);
          __privateAdd(this, _v, new C());
          __privateAdd(this, _w, false);
          __privateAdd(this, _C, false);
          __privateAdd(this, _k, null);
          __privateAdd(this, _I, null);
          __privateAdd(this, _L, null);
          __privateAdd(this, _y, w.AnnotationEditorType.NONE);
          __privateAdd(this, _b, /* @__PURE__ */ new Set());
          __privateAdd(this, _S, null);
          __privateAdd(this, _x, null);
          __privateAdd(this, _R, null);
          __privateAdd(this, _T, this.blur.bind(this));
          __privateAdd(this, _M, this.focus.bind(this));
          __privateAdd(this, _F, this.copy.bind(this));
          __privateAdd(this, __, this.cut.bind(this));
          __privateAdd(this, _P, this.paste.bind(this));
          __privateAdd(this, _D, this.keydown.bind(this));
          __privateAdd(this, _V, this.keyup.bind(this));
          __privateAdd(this, _$, this.onEditingAction.bind(this));
          __privateAdd(this, _X, this.onPageChanging.bind(this));
          __privateAdd(this, _G, this.onScaleChanging.bind(this));
          __privateAdd(this, _B, __privateMethod(this, _l_instances, rt_fn).bind(this));
          __privateAdd(this, _N, this.onRotationChanging.bind(this));
          __privateAdd(this, _q, {
            isEditing: false,
            isEmpty: true,
            hasSomethingToUndo: false,
            hasSomethingToRedo: false,
            hasSelectedEditor: false,
            hasSelectedText: false
          });
          __privateAdd(this, _U, [
            0,
            0
          ]);
          __privateAdd(this, _O, null);
          __privateAdd(this, _z, null);
          __privateAdd(this, _K, null);
          __privateSet(this, _z, s), __privateSet(this, _K, g), __privateSet(this, _n2, t), this._eventBus = i, this._eventBus._on("editingaction", __privateGet(this, _$)), this._eventBus._on("pagechanging", __privateGet(this, _X)), this._eventBus._on("scalechanging", __privateGet(this, _G)), this._eventBus._on("rotationchanging", __privateGet(this, _N)), __privateMethod(this, _l_instances, at_fn).call(this), __privateMethod(this, _l_instances, J_fn).call(this), __privateSet(this, _r, u.annotationStorage), __privateSet(this, _p, u.filterFactory), __privateSet(this, _x, p), __privateSet(this, _f, y || null), __privateSet(this, _o, S), __privateSet(this, _L, L || null), this.viewParameters = {
            realScale: z.PixelsPerInch.PDF_TO_CSS_UNITS,
            rotation: 0
          }, this.isShiftKeyDown = false;
        }
        static get _keyboardManager() {
          const s = _l2.prototype, g = (p) => __privateGet(p, _z).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && p.hasSomethingToControl(), t = (p, { target: y }) => {
            if (y instanceof HTMLInputElement) {
              const { type: S } = y;
              return S !== "text" && S !== "number";
            }
            return true;
          }, i = this.TRANSLATE_SMALL, u = this.TRANSLATE_BIG;
          return (0, w.shadow)(this, "_keyboardManager", new r([
            [
              [
                "ctrl+a",
                "mac+meta+a"
              ],
              s.selectAll,
              {
                checker: t
              }
            ],
            [
              [
                "ctrl+z",
                "mac+meta+z"
              ],
              s.undo,
              {
                checker: t
              }
            ],
            [
              [
                "ctrl+y",
                "ctrl+shift+z",
                "mac+meta+shift+z",
                "ctrl+shift+Z",
                "mac+meta+shift+Z"
              ],
              s.redo,
              {
                checker: t
              }
            ],
            [
              [
                "Backspace",
                "alt+Backspace",
                "ctrl+Backspace",
                "shift+Backspace",
                "mac+Backspace",
                "mac+alt+Backspace",
                "mac+ctrl+Backspace",
                "Delete",
                "ctrl+Delete",
                "shift+Delete",
                "mac+Delete"
              ],
              s.delete,
              {
                checker: t
              }
            ],
            [
              [
                "Enter",
                "mac+Enter"
              ],
              s.addNewEditorFromKeyboard,
              {
                checker: (p, { target: y }) => !(y instanceof HTMLButtonElement) && __privateGet(p, _z).contains(y) && !p.isEnterHandled
              }
            ],
            [
              [
                " ",
                "mac+ "
              ],
              s.addNewEditorFromKeyboard,
              {
                checker: (p, { target: y }) => !(y instanceof HTMLButtonElement) && __privateGet(p, _z).contains(document.activeElement)
              }
            ],
            [
              [
                "Escape",
                "mac+Escape"
              ],
              s.unselectAll
            ],
            [
              [
                "ArrowLeft",
                "mac+ArrowLeft"
              ],
              s.translateSelectedEditors,
              {
                args: [
                  -i,
                  0
                ],
                checker: g
              }
            ],
            [
              [
                "ctrl+ArrowLeft",
                "mac+shift+ArrowLeft"
              ],
              s.translateSelectedEditors,
              {
                args: [
                  -u,
                  0
                ],
                checker: g
              }
            ],
            [
              [
                "ArrowRight",
                "mac+ArrowRight"
              ],
              s.translateSelectedEditors,
              {
                args: [
                  i,
                  0
                ],
                checker: g
              }
            ],
            [
              [
                "ctrl+ArrowRight",
                "mac+shift+ArrowRight"
              ],
              s.translateSelectedEditors,
              {
                args: [
                  u,
                  0
                ],
                checker: g
              }
            ],
            [
              [
                "ArrowUp",
                "mac+ArrowUp"
              ],
              s.translateSelectedEditors,
              {
                args: [
                  0,
                  -i
                ],
                checker: g
              }
            ],
            [
              [
                "ctrl+ArrowUp",
                "mac+shift+ArrowUp"
              ],
              s.translateSelectedEditors,
              {
                args: [
                  0,
                  -u
                ],
                checker: g
              }
            ],
            [
              [
                "ArrowDown",
                "mac+ArrowDown"
              ],
              s.translateSelectedEditors,
              {
                args: [
                  0,
                  i
                ],
                checker: g
              }
            ],
            [
              [
                "ctrl+ArrowDown",
                "mac+shift+ArrowDown"
              ],
              s.translateSelectedEditors,
              {
                args: [
                  0,
                  u
                ],
                checker: g
              }
            ]
          ]));
        }
        destroy() {
          var _a2, _b2;
          __privateMethod(this, _l_instances, Z_fn).call(this), __privateMethod(this, _l_instances, Q_fn).call(this), this._eventBus._off("editingaction", __privateGet(this, _$)), this._eventBus._off("pagechanging", __privateGet(this, _X)), this._eventBus._off("scalechanging", __privateGet(this, _G)), this._eventBus._off("rotationchanging", __privateGet(this, _N));
          for (const s of __privateGet(this, _s3).values()) s.destroy();
          __privateGet(this, _s3).clear(), __privateGet(this, _e4).clear(), __privateGet(this, _c2).clear(), __privateSet(this, _t4, null), __privateGet(this, _b).clear(), __privateGet(this, _a).destroy(), (_a2 = __privateGet(this, _n2)) == null ? void 0 : _a2.destroy(), (_b2 = __privateGet(this, _m)) == null ? void 0 : _b2.hide(), __privateSet(this, _m, null), __privateGet(this, _g) && (clearTimeout(__privateGet(this, _g)), __privateSet(this, _g, null)), __privateGet(this, _O) && (clearTimeout(__privateGet(this, _O)), __privateSet(this, _O, null)), __privateMethod(this, _l_instances, ot_fn).call(this);
        }
        async mlGuess(s) {
          var _a2;
          return ((_a2 = __privateGet(this, _L)) == null ? void 0 : _a2.guess(s)) || null;
        }
        get hasMLManager() {
          return !!__privateGet(this, _L);
        }
        get hcmFilter() {
          return (0, w.shadow)(this, "hcmFilter", __privateGet(this, _x) ? __privateGet(this, _p).addHCMFilter(__privateGet(this, _x).foreground, __privateGet(this, _x).background) : "none");
        }
        get direction() {
          return (0, w.shadow)(this, "direction", getComputedStyle(__privateGet(this, _z)).direction);
        }
        get highlightColors() {
          return (0, w.shadow)(this, "highlightColors", __privateGet(this, _f) ? new Map(__privateGet(this, _f).split(",").map((s) => s.split("=").map((g) => g.trim()))) : null);
        }
        get highlightColorNames() {
          return (0, w.shadow)(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (s) => s.reverse())) : null);
        }
        setMainHighlightColorPicker(s) {
          __privateSet(this, _I, s);
        }
        editAltText(s) {
          var _a2;
          (_a2 = __privateGet(this, _n2)) == null ? void 0 : _a2.editAltText(this, s);
        }
        onPageChanging({ pageNumber: s }) {
          __privateSet(this, _l, s - 1);
        }
        focusMainContainer() {
          __privateGet(this, _z).focus();
        }
        findParent(s, g) {
          for (const t of __privateGet(this, _s3).values()) {
            const { x: i, y: u, width: p, height: y } = t.div.getBoundingClientRect();
            if (s >= i && s <= i + p && g >= u && g <= u + y) return t;
          }
          return null;
        }
        disableUserSelect(s = false) {
          __privateGet(this, _K).classList.toggle("noUserSelect", s);
        }
        addShouldRescale(s) {
          __privateGet(this, _c2).add(s);
        }
        removeShouldRescale(s) {
          __privateGet(this, _c2).delete(s);
        }
        onScaleChanging({ scale: s }) {
          this.commitOrRemove(), this.viewParameters.realScale = s * z.PixelsPerInch.PDF_TO_CSS_UNITS;
          for (const g of __privateGet(this, _c2)) g.onScaleChanging();
        }
        onRotationChanging({ pagesRotation: s }) {
          this.commitOrRemove(), this.viewParameters.rotation = s;
        }
        highlightSelection(s = "") {
          const g = document.getSelection();
          if (!g || g.isCollapsed) return;
          const { anchorNode: t, anchorOffset: i, focusNode: u, focusOffset: p } = g, y = g.toString(), L = __privateMethod(this, _l_instances, Y_fn).call(this, g).closest(".textLayer"), M = this.getSelectionBoxes(L);
          if (M) {
            g.empty(), __privateGet(this, _y) === w.AnnotationEditorType.NONE && (this._eventBus.dispatch("showannotationeditorui", {
              source: this,
              mode: w.AnnotationEditorType.HIGHLIGHT
            }), this.showAllEditors("highlight", true, true));
            for (const N of __privateGet(this, _s3).values()) if (N.hasTextLayer(L)) {
              N.createAndAddNewEditor({
                x: 0,
                y: 0
              }, false, {
                methodOfCreation: s,
                boxes: M,
                anchorNode: t,
                anchorOffset: i,
                focusNode: u,
                focusOffset: p,
                text: y
              });
              break;
            }
          }
        }
        addToAnnotationStorage(s) {
          !s.isEmpty() && __privateGet(this, _r) && !__privateGet(this, _r).has(s.id) && __privateGet(this, _r).setValue(s.id, s);
        }
        blur() {
          if (this.isShiftKeyDown = false, __privateGet(this, _A) && (__privateSet(this, _A, false), __privateMethod(this, _l_instances, W_fn).call(this, "main_toolbar")), !this.hasSelection) return;
          const { activeElement: s } = document;
          for (const g of __privateGet(this, _b)) if (g.div.contains(s)) {
            __privateSet(this, _k, [
              g,
              s
            ]), g._focusEventsAllowed = false;
            break;
          }
        }
        focus() {
          if (!__privateGet(this, _k)) return;
          const [s, g] = __privateGet(this, _k);
          __privateSet(this, _k, null), g.addEventListener("focusin", () => {
            s._focusEventsAllowed = true;
          }, {
            once: true
          }), g.focus();
        }
        addEditListeners() {
          __privateMethod(this, _l_instances, J_fn).call(this), __privateMethod(this, _l_instances, tt_fn).call(this);
        }
        removeEditListeners() {
          __privateMethod(this, _l_instances, Z_fn).call(this), __privateMethod(this, _l_instances, et_fn).call(this);
        }
        copy(s) {
          var _a2;
          if (s.preventDefault(), (_a2 = __privateGet(this, _t4)) == null ? void 0 : _a2.commitOrRemove(), !this.hasSelection) return;
          const g = [];
          for (const t of __privateGet(this, _b)) {
            const i = t.serialize(true);
            i && g.push(i);
          }
          g.length !== 0 && s.clipboardData.setData("application/pdfjs", JSON.stringify(g));
        }
        cut(s) {
          this.copy(s), this.delete();
        }
        paste(s) {
          s.preventDefault();
          const { clipboardData: g } = s;
          for (const u of g.items) for (const p of __privateGet(this, _u)) if (p.isHandlingMimeForPasting(u.type)) {
            p.paste(u, this.currentLayer);
            return;
          }
          let t = g.getData("application/pdfjs");
          if (!t) return;
          try {
            t = JSON.parse(t);
          } catch (u) {
            (0, w.warn)(`paste: "${u.message}".`);
            return;
          }
          if (!Array.isArray(t)) return;
          this.unselectAll();
          const i = this.currentLayer;
          try {
            const u = [];
            for (const S of t) {
              const L = i.deserialize(S);
              if (!L) return;
              u.push(L);
            }
            const p = () => {
              for (const S of u) __privateMethod(this, _l_instances, st_fn).call(this, S);
              __privateMethod(this, _l_instances, it_fn).call(this, u);
            }, y = () => {
              for (const S of u) S.remove();
            };
            this.addCommands({
              cmd: p,
              undo: y,
              mustExec: true
            });
          } catch (u) {
            (0, w.warn)(`paste: "${u.message}".`);
          }
        }
        keydown(s) {
          !this.isShiftKeyDown && s.key === "Shift" && (this.isShiftKeyDown = true), __privateGet(this, _y) !== w.AnnotationEditorType.NONE && !this.isEditorHandlingKeyboard && _l2._keyboardManager.exec(this, s);
        }
        keyup(s) {
          this.isShiftKeyDown && s.key === "Shift" && (this.isShiftKeyDown = false, __privateGet(this, _A) && (__privateSet(this, _A, false), __privateMethod(this, _l_instances, W_fn).call(this, "main_toolbar")));
        }
        onEditingAction({ name: s }) {
          switch (s) {
            case "undo":
            case "redo":
            case "delete":
            case "selectAll":
              this[s]();
              break;
            case "highlightSelection":
              this.highlightSelection("context_menu");
              break;
          }
        }
        setEditingState(s) {
          s ? (__privateMethod(this, _l_instances, ht_fn).call(this), __privateMethod(this, _l_instances, tt_fn).call(this), __privateMethod(this, _l_instances, E_fn).call(this, {
            isEditing: __privateGet(this, _y) !== w.AnnotationEditorType.NONE,
            isEmpty: __privateMethod(this, _l_instances, j_fn).call(this),
            hasSomethingToUndo: __privateGet(this, _a).hasSomethingToUndo(),
            hasSomethingToRedo: __privateGet(this, _a).hasSomethingToRedo(),
            hasSelectedEditor: false
          })) : (__privateMethod(this, _l_instances, Q_fn).call(this), __privateMethod(this, _l_instances, et_fn).call(this), __privateMethod(this, _l_instances, E_fn).call(this, {
            isEditing: false
          }), this.disableUserSelect(false));
        }
        registerEditorTypes(s) {
          if (!__privateGet(this, _u)) {
            __privateSet(this, _u, s);
            for (const g of __privateGet(this, _u)) __privateMethod(this, _l_instances, H_fn).call(this, g.defaultPropertiesToUpdate);
          }
        }
        getId() {
          return __privateGet(this, _v).id;
        }
        get currentLayer() {
          return __privateGet(this, _s3).get(__privateGet(this, _l));
        }
        getLayer(s) {
          return __privateGet(this, _s3).get(s);
        }
        get currentPageIndex() {
          return __privateGet(this, _l);
        }
        addLayer(s) {
          __privateGet(this, _s3).set(s.pageIndex, s), __privateGet(this, _w) ? s.enable() : s.disable();
        }
        removeLayer(s) {
          __privateGet(this, _s3).delete(s.pageIndex);
        }
        updateMode(s, g = null, t = false) {
          if (__privateGet(this, _y) !== s) {
            if (__privateSet(this, _y, s), s === w.AnnotationEditorType.NONE) {
              this.setEditingState(false), __privateMethod(this, _l_instances, ct_fn).call(this);
              return;
            }
            this.setEditingState(true), __privateMethod(this, _l_instances, lt_fn).call(this), this.unselectAll();
            for (const i of __privateGet(this, _s3).values()) i.updateMode(s);
            if (!g && t) {
              this.addNewEditorFromKeyboard();
              return;
            }
            if (g) {
              for (const i of __privateGet(this, _e4).values()) if (i.annotationElementId === g) {
                this.setSelected(i), i.enterInEditMode();
                break;
              }
            }
          }
        }
        addNewEditorFromKeyboard() {
          this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
        }
        updateToolbar(s) {
          s !== __privateGet(this, _y) && this._eventBus.dispatch("switchannotationeditormode", {
            source: this,
            mode: s
          });
        }
        updateParams(s, g) {
          var _a2;
          if (__privateGet(this, _u)) {
            switch (s) {
              case w.AnnotationEditorParamsType.CREATE:
                this.currentLayer.addNewEditor();
                return;
              case w.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
                (_a2 = __privateGet(this, _I)) == null ? void 0 : _a2.updateColor(g);
                break;
              case w.AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL:
                this._eventBus.dispatch("reporttelemetry", {
                  source: this,
                  details: {
                    type: "editing",
                    data: {
                      type: "highlight",
                      action: "toggle_visibility"
                    }
                  }
                }), (__privateGet(this, _R) || __privateSet(this, _R, /* @__PURE__ */ new Map())).set(s, g), this.showAllEditors("highlight", g);
                break;
            }
            for (const t of __privateGet(this, _b)) t.updateParams(s, g);
            for (const t of __privateGet(this, _u)) t.updateDefaultParams(s, g);
          }
        }
        showAllEditors(s, g, t = false) {
          var _a2;
          for (const u of __privateGet(this, _e4).values()) u.editorType === s && u.show(g);
          (((_a2 = __privateGet(this, _R)) == null ? void 0 : _a2.get(w.AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL)) ?? true) !== g && __privateMethod(this, _l_instances, H_fn).call(this, [
            [
              w.AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL,
              g
            ]
          ]);
        }
        enableWaiting(s = false) {
          if (__privateGet(this, _C) !== s) {
            __privateSet(this, _C, s);
            for (const g of __privateGet(this, _s3).values()) s ? g.disableClick() : g.enableClick(), g.div.classList.toggle("waiting", s);
          }
        }
        getEditors(s) {
          const g = [];
          for (const t of __privateGet(this, _e4).values()) t.pageIndex === s && g.push(t);
          return g;
        }
        getEditor(s) {
          return __privateGet(this, _e4).get(s);
        }
        addEditor(s) {
          __privateGet(this, _e4).set(s.id, s);
        }
        removeEditor(s) {
          var _a2;
          s.div.contains(document.activeElement) && (__privateGet(this, _g) && clearTimeout(__privateGet(this, _g)), __privateSet(this, _g, setTimeout(() => {
            this.focusMainContainer(), __privateSet(this, _g, null);
          }, 0))), __privateGet(this, _e4).delete(s.id), this.unselect(s), (!s.annotationElementId || !__privateGet(this, _h).has(s.annotationElementId)) && ((_a2 = __privateGet(this, _r)) == null ? void 0 : _a2.remove(s.id));
        }
        addDeletedAnnotationElement(s) {
          __privateGet(this, _h).add(s.annotationElementId), this.addChangedExistingAnnotation(s), s.deleted = true;
        }
        isDeletedAnnotationElement(s) {
          return __privateGet(this, _h).has(s);
        }
        removeDeletedAnnotationElement(s) {
          __privateGet(this, _h).delete(s.annotationElementId), this.removeChangedExistingAnnotation(s), s.deleted = false;
        }
        setActiveEditor(s) {
          __privateGet(this, _t4) !== s && (__privateSet(this, _t4, s), s && __privateMethod(this, _l_instances, H_fn).call(this, s.propertiesToUpdate));
        }
        updateUI(s) {
          __privateGet(this, _l_instances, dt_get) === s && __privateMethod(this, _l_instances, H_fn).call(this, s.propertiesToUpdate);
        }
        toggleSelected(s) {
          if (__privateGet(this, _b).has(s)) {
            __privateGet(this, _b).delete(s), s.unselect(), __privateMethod(this, _l_instances, E_fn).call(this, {
              hasSelectedEditor: this.hasSelection
            });
            return;
          }
          __privateGet(this, _b).add(s), s.select(), __privateMethod(this, _l_instances, H_fn).call(this, s.propertiesToUpdate), __privateMethod(this, _l_instances, E_fn).call(this, {
            hasSelectedEditor: true
          });
        }
        setSelected(s) {
          for (const g of __privateGet(this, _b)) g !== s && g.unselect();
          __privateGet(this, _b).clear(), __privateGet(this, _b).add(s), s.select(), __privateMethod(this, _l_instances, H_fn).call(this, s.propertiesToUpdate), __privateMethod(this, _l_instances, E_fn).call(this, {
            hasSelectedEditor: true
          });
        }
        isSelected(s) {
          return __privateGet(this, _b).has(s);
        }
        get firstSelectedEditor() {
          return __privateGet(this, _b).values().next().value;
        }
        unselect(s) {
          s.unselect(), __privateGet(this, _b).delete(s), __privateMethod(this, _l_instances, E_fn).call(this, {
            hasSelectedEditor: this.hasSelection
          });
        }
        get hasSelection() {
          return __privateGet(this, _b).size !== 0;
        }
        get isEnterHandled() {
          return __privateGet(this, _b).size === 1 && this.firstSelectedEditor.isEnterHandled;
        }
        undo() {
          __privateGet(this, _a).undo(), __privateMethod(this, _l_instances, E_fn).call(this, {
            hasSomethingToUndo: __privateGet(this, _a).hasSomethingToUndo(),
            hasSomethingToRedo: true,
            isEmpty: __privateMethod(this, _l_instances, j_fn).call(this)
          });
        }
        redo() {
          __privateGet(this, _a).redo(), __privateMethod(this, _l_instances, E_fn).call(this, {
            hasSomethingToUndo: true,
            hasSomethingToRedo: __privateGet(this, _a).hasSomethingToRedo(),
            isEmpty: __privateMethod(this, _l_instances, j_fn).call(this)
          });
        }
        addCommands(s) {
          __privateGet(this, _a).add(s), __privateMethod(this, _l_instances, E_fn).call(this, {
            hasSomethingToUndo: true,
            hasSomethingToRedo: false,
            isEmpty: __privateMethod(this, _l_instances, j_fn).call(this)
          });
        }
        delete() {
          if (this.commitOrRemove(), !this.hasSelection) return;
          const s = [
            ...__privateGet(this, _b)
          ], g = () => {
            for (const i of s) i.remove();
          }, t = () => {
            for (const i of s) __privateMethod(this, _l_instances, st_fn).call(this, i);
          };
          this.addCommands({
            cmd: g,
            undo: t,
            mustExec: true
          });
        }
        commitOrRemove() {
          var _a2;
          (_a2 = __privateGet(this, _t4)) == null ? void 0 : _a2.commitOrRemove();
        }
        hasSomethingToControl() {
          return __privateGet(this, _t4) || this.hasSelection;
        }
        selectAll() {
          for (const s of __privateGet(this, _b)) s.commit();
          __privateMethod(this, _l_instances, it_fn).call(this, __privateGet(this, _e4).values());
        }
        unselectAll() {
          if (!(__privateGet(this, _t4) && (__privateGet(this, _t4).commitOrRemove(), __privateGet(this, _y) !== w.AnnotationEditorType.NONE)) && this.hasSelection) {
            for (const s of __privateGet(this, _b)) s.unselect();
            __privateGet(this, _b).clear(), __privateMethod(this, _l_instances, E_fn).call(this, {
              hasSelectedEditor: false
            });
          }
        }
        translateSelectedEditors(s, g, t = false) {
          if (t || this.commitOrRemove(), !this.hasSelection) return;
          __privateGet(this, _U)[0] += s, __privateGet(this, _U)[1] += g;
          const [i, u] = __privateGet(this, _U), p = [
            ...__privateGet(this, _b)
          ], y = 1e3;
          __privateGet(this, _O) && clearTimeout(__privateGet(this, _O)), __privateSet(this, _O, setTimeout(() => {
            __privateSet(this, _O, null), __privateGet(this, _U)[0] = __privateGet(this, _U)[1] = 0, this.addCommands({
              cmd: () => {
                for (const S of p) __privateGet(this, _e4).has(S.id) && S.translateInPage(i, u);
              },
              undo: () => {
                for (const S of p) __privateGet(this, _e4).has(S.id) && S.translateInPage(-i, -u);
              },
              mustExec: false
            });
          }, y));
          for (const S of p) S.translateInPage(s, g);
        }
        setUpDragSession() {
          if (this.hasSelection) {
            this.disableUserSelect(true), __privateSet(this, _d, /* @__PURE__ */ new Map());
            for (const s of __privateGet(this, _b)) __privateGet(this, _d).set(s, {
              savedX: s.x,
              savedY: s.y,
              savedPageIndex: s.pageIndex,
              newX: 0,
              newY: 0,
              newPageIndex: -1
            });
          }
        }
        endDragSession() {
          if (!__privateGet(this, _d)) return false;
          this.disableUserSelect(false);
          const s = __privateGet(this, _d);
          __privateSet(this, _d, null);
          let g = false;
          for (const [{ x: i, y: u, pageIndex: p }, y] of s) y.newX = i, y.newY = u, y.newPageIndex = p, g || (g = i !== y.savedX || u !== y.savedY || p !== y.savedPageIndex);
          if (!g) return false;
          const t = (i, u, p, y) => {
            if (__privateGet(this, _e4).has(i.id)) {
              const S = __privateGet(this, _s3).get(y);
              S ? i._setParentAndPosition(S, u, p) : (i.pageIndex = y, i.x = u, i.y = p);
            }
          };
          return this.addCommands({
            cmd: () => {
              for (const [i, { newX: u, newY: p, newPageIndex: y }] of s) t(i, u, p, y);
            },
            undo: () => {
              for (const [i, { savedX: u, savedY: p, savedPageIndex: y }] of s) t(i, u, p, y);
            },
            mustExec: true
          }), true;
        }
        dragSelectedEditors(s, g) {
          if (__privateGet(this, _d)) for (const t of __privateGet(this, _d).keys()) t.drag(s, g);
        }
        rebuild(s) {
          if (s.parent === null) {
            const g = this.getLayer(s.pageIndex);
            g ? (g.changeParent(s), g.addOrRebuild(s)) : (this.addEditor(s), this.addToAnnotationStorage(s), s.rebuild());
          } else s.parent.addOrRebuild(s);
        }
        get isEditorHandlingKeyboard() {
          var _a2;
          return ((_a2 = this.getActive()) == null ? void 0 : _a2.shouldGetKeyboardEvents()) || __privateGet(this, _b).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
        }
        isActive(s) {
          return __privateGet(this, _t4) === s;
        }
        getActive() {
          return __privateGet(this, _t4);
        }
        getMode() {
          return __privateGet(this, _y);
        }
        get imageManager() {
          return (0, w.shadow)(this, "imageManager", new E());
        }
        getSelectionBoxes(s) {
          if (!s) return null;
          const g = document.getSelection();
          for (let L = 0, M = g.rangeCount; L < M; L++) if (!s.contains(g.getRangeAt(L).commonAncestorContainer)) return null;
          const { x: t, y: i, width: u, height: p } = s.getBoundingClientRect();
          let y;
          switch (s.getAttribute("data-main-rotation")) {
            case "90":
              y = (L, M, N, H) => ({
                x: (M - i) / p,
                y: 1 - (L + N - t) / u,
                width: H / p,
                height: N / u
              });
              break;
            case "180":
              y = (L, M, N, H) => ({
                x: 1 - (L + N - t) / u,
                y: 1 - (M + H - i) / p,
                width: N / u,
                height: H / p
              });
              break;
            case "270":
              y = (L, M, N, H) => ({
                x: 1 - (M + H - i) / p,
                y: (L - t) / u,
                width: H / p,
                height: N / u
              });
              break;
            default:
              y = (L, M, N, H) => ({
                x: (L - t) / u,
                y: (M - i) / p,
                width: N / u,
                height: H / p
              });
              break;
          }
          const S = [];
          for (let L = 0, M = g.rangeCount; L < M; L++) {
            const N = g.getRangeAt(L);
            if (!N.collapsed) for (const { x: H, y: B, width: q, height: nt } of N.getClientRects()) q === 0 || nt === 0 || S.push(y(H, B, q, nt));
          }
          return S.length === 0 ? null : S;
        }
        addChangedExistingAnnotation({ annotationElementId: s, id: g }) {
          (__privateGet(this, _i) || __privateSet(this, _i, /* @__PURE__ */ new Map())).set(s, g);
        }
        removeChangedExistingAnnotation({ annotationElementId: s }) {
          var _a2;
          (_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.delete(s);
        }
        renderAnnotationElement(s) {
          var _a2;
          const g = (_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.get(s.data.id);
          if (!g) return;
          const t = __privateGet(this, _r).getRawValue(g);
          t && (__privateGet(this, _y) === w.AnnotationEditorType.NONE && !t.hasBeenModified || t.renderAnnotationElement(s));
        }
      };
      _t4 = new WeakMap();
      _e4 = new WeakMap();
      _s3 = new WeakMap();
      _n2 = new WeakMap();
      _r = new WeakMap();
      _i = new WeakMap();
      _a = new WeakMap();
      _l = new WeakMap();
      _h = new WeakMap();
      _d = new WeakMap();
      _u = new WeakMap();
      _c2 = new WeakMap();
      _o = new WeakMap();
      _p = new WeakMap();
      _g = new WeakMap();
      _f = new WeakMap();
      _A = new WeakMap();
      _m = new WeakMap();
      _v = new WeakMap();
      _w = new WeakMap();
      _C = new WeakMap();
      _k = new WeakMap();
      _I = new WeakMap();
      _L = new WeakMap();
      _y = new WeakMap();
      _b = new WeakMap();
      _S = new WeakMap();
      _x = new WeakMap();
      _R = new WeakMap();
      _T = new WeakMap();
      _M = new WeakMap();
      _F = new WeakMap();
      __ = new WeakMap();
      _P = new WeakMap();
      _D = new WeakMap();
      _V = new WeakMap();
      _$ = new WeakMap();
      _X = new WeakMap();
      _G = new WeakMap();
      _B = new WeakMap();
      _N = new WeakMap();
      _q = new WeakMap();
      _U = new WeakMap();
      _O = new WeakMap();
      _z = new WeakMap();
      _K = new WeakMap();
      _l_instances = new WeakSet();
      Y_fn = function({ anchorNode: s }) {
        return s.nodeType === Node.TEXT_NODE ? s.parentElement : s;
      };
      nt_fn = function() {
        const s = document.getSelection();
        if (!s || s.isCollapsed) return;
        const t = __privateMethod(this, _l_instances, Y_fn).call(this, s).closest(".textLayer"), i = this.getSelectionBoxes(t);
        i && (__privateGet(this, _m) || __privateSet(this, _m, new _.HighlightToolbar(this)), __privateGet(this, _m).show(t, i, this.direction === "ltr"));
      };
      rt_fn = function() {
        var _a2, _b2, _c3;
        const s = document.getSelection();
        if (!s || s.isCollapsed) {
          __privateGet(this, _S) && ((_a2 = __privateGet(this, _m)) == null ? void 0 : _a2.hide(), __privateSet(this, _S, null), __privateMethod(this, _l_instances, E_fn).call(this, {
            hasSelectedText: false
          }));
          return;
        }
        const { anchorNode: g } = s;
        if (g === __privateGet(this, _S)) return;
        if (!__privateMethod(this, _l_instances, Y_fn).call(this, s).closest(".textLayer")) {
          __privateGet(this, _S) && ((_b2 = __privateGet(this, _m)) == null ? void 0 : _b2.hide(), __privateSet(this, _S, null), __privateMethod(this, _l_instances, E_fn).call(this, {
            hasSelectedText: false
          }));
          return;
        }
        if ((_c3 = __privateGet(this, _m)) == null ? void 0 : _c3.hide(), __privateSet(this, _S, g), __privateMethod(this, _l_instances, E_fn).call(this, {
          hasSelectedText: true
        }), !(__privateGet(this, _y) !== w.AnnotationEditorType.HIGHLIGHT && __privateGet(this, _y) !== w.AnnotationEditorType.NONE) && (__privateGet(this, _y) === w.AnnotationEditorType.HIGHLIGHT && this.showAllEditors("highlight", true, true), __privateSet(this, _A, this.isShiftKeyDown), !this.isShiftKeyDown)) {
          const u = (p) => {
            p.type === "pointerup" && p.button !== 0 || (window.removeEventListener("pointerup", u), window.removeEventListener("blur", u), p.type === "pointerup" && __privateMethod(this, _l_instances, W_fn).call(this, "main_toolbar"));
          };
          window.addEventListener("pointerup", u), window.addEventListener("blur", u);
        }
      };
      W_fn = function(s = "") {
        __privateGet(this, _y) === w.AnnotationEditorType.HIGHLIGHT ? this.highlightSelection(s) : __privateGet(this, _o) && __privateMethod(this, _l_instances, nt_fn).call(this);
      };
      at_fn = function() {
        document.addEventListener("selectionchange", __privateGet(this, _B));
      };
      ot_fn = function() {
        document.removeEventListener("selectionchange", __privateGet(this, _B));
      };
      ht_fn = function() {
        window.addEventListener("focus", __privateGet(this, _M)), window.addEventListener("blur", __privateGet(this, _T));
      };
      Q_fn = function() {
        window.removeEventListener("focus", __privateGet(this, _M)), window.removeEventListener("blur", __privateGet(this, _T));
      };
      J_fn = function() {
        window.addEventListener("keydown", __privateGet(this, _D)), window.addEventListener("keyup", __privateGet(this, _V));
      };
      Z_fn = function() {
        window.removeEventListener("keydown", __privateGet(this, _D)), window.removeEventListener("keyup", __privateGet(this, _V));
      };
      tt_fn = function() {
        document.addEventListener("copy", __privateGet(this, _F)), document.addEventListener("cut", __privateGet(this, __)), document.addEventListener("paste", __privateGet(this, _P));
      };
      et_fn = function() {
        document.removeEventListener("copy", __privateGet(this, _F)), document.removeEventListener("cut", __privateGet(this, __)), document.removeEventListener("paste", __privateGet(this, _P));
      };
      E_fn = function(s) {
        Object.entries(s).some(([t, i]) => __privateGet(this, _q)[t] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
          source: this,
          details: Object.assign(__privateGet(this, _q), s)
        }), __privateGet(this, _y) === w.AnnotationEditorType.HIGHLIGHT && s.hasSelectedEditor === false && __privateMethod(this, _l_instances, H_fn).call(this, [
          [
            w.AnnotationEditorParamsType.HIGHLIGHT_FREE,
            true
          ]
        ]));
      };
      H_fn = function(s) {
        this._eventBus.dispatch("annotationeditorparamschanged", {
          source: this,
          details: s
        });
      };
      lt_fn = function() {
        if (!__privateGet(this, _w)) {
          __privateSet(this, _w, true);
          for (const s of __privateGet(this, _s3).values()) s.enable();
          for (const s of __privateGet(this, _e4).values()) s.enable();
        }
      };
      ct_fn = function() {
        if (this.unselectAll(), __privateGet(this, _w)) {
          __privateSet(this, _w, false);
          for (const s of __privateGet(this, _s3).values()) s.disable();
          for (const s of __privateGet(this, _e4).values()) s.disable();
        }
      };
      st_fn = function(s) {
        const g = __privateGet(this, _s3).get(s.pageIndex);
        g ? g.addOrRebuild(s) : (this.addEditor(s), this.addToAnnotationStorage(s));
      };
      dt_get = function() {
        let s = null;
        for (s of __privateGet(this, _b)) ;
        return s;
      };
      j_fn = function() {
        if (__privateGet(this, _e4).size === 0) return true;
        if (__privateGet(this, _e4).size === 1) for (const s of __privateGet(this, _e4).values()) return s.isEmpty();
        return false;
      };
      it_fn = function(s) {
        for (const g of __privateGet(this, _b)) g.unselect();
        __privateGet(this, _b).clear();
        for (const g of s) g.isEmpty() || (__privateGet(this, _b).add(g), g.select());
        __privateMethod(this, _l_instances, E_fn).call(this, {
          hasSelectedEditor: this.hasSelection
        });
      };
      __publicField(_l2, "TRANSLATE_SMALL", 1);
      __publicField(_l2, "TRANSLATE_BIG", 10);
      let l = _l2;
    },
    94: (ct, st, $) => {
      $.d(st, {
        PDFFetchStream: () => C
      });
      var w = $(292), z = $(490);
      function _(r, c, l) {
        return {
          method: "GET",
          headers: r,
          signal: l.signal,
          mode: "cors",
          credentials: c ? "include" : "same-origin",
          redirect: "follow"
        };
      }
      function G(r) {
        const c = new Headers();
        for (const l in r) {
          const b = r[l];
          b !== void 0 && c.append(l, b);
        }
        return c;
      }
      function P(r) {
        return r instanceof Uint8Array ? r.buffer : r instanceof ArrayBuffer ? r : ((0, w.warn)(`getArrayBuffer - unexpected data format: ${r}`), new Uint8Array(r).buffer);
      }
      class C {
        constructor(c) {
          this.source = c, this.isHttp = /^https?:/i.test(c.url), this.httpHeaders = this.isHttp && c.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          var _a;
          return ((_a = this._fullRequestReader) == null ? void 0 : _a._loaded) ?? 0;
        }
        getFullReader() {
          return (0, w.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new E(this), this._fullRequestReader;
        }
        getRangeReader(c, l) {
          if (l <= this._progressiveDataLength) return null;
          const b = new v(this, c, l);
          return this._rangeRequestReaders.push(b), b;
        }
        cancelAllRequests(c) {
          var _a;
          (_a = this._fullRequestReader) == null ? void 0 : _a.cancel(c);
          for (const l of this._rangeRequestReaders.slice(0)) l.cancel(c);
        }
      }
      class E {
        constructor(c) {
          this._stream = c, this._reader = null, this._loaded = 0, this._filename = null;
          const l = c.source;
          this._withCredentials = l.withCredentials || false, this._contentLength = l.length, this._headersCapability = Promise.withResolvers(), this._disableRange = l.disableRange || false, this._rangeChunkSize = l.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._abortController = new AbortController(), this._isStreamingSupported = !l.disableStream, this._isRangeSupported = !l.disableRange, this._headers = G(this._stream.httpHeaders);
          const b = l.url;
          fetch(b, _(this._headers, this._withCredentials, this._abortController)).then((s) => {
            if (!(0, z.validateResponseStatus)(s.status)) throw (0, z.createResponseStatusError)(s.status, b);
            this._reader = s.body.getReader(), this._headersCapability.resolve();
            const g = (u) => s.headers.get(u), { allowRangeRequests: t, suggestedLength: i } = (0, z.validateRangeRequestCapabilities)({
              getResponseHeader: g,
              isHttp: this._stream.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            });
            this._isRangeSupported = t, this._contentLength = i || this._contentLength, this._filename = (0, z.extractFilenameFromHeader)(g), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new w.AbortException("Streaming is disabled."));
          }).catch(this._headersCapability.reject), this.onProgress = null;
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var _a;
          await this._headersCapability.promise;
          const { value: c, done: l } = await this._reader.read();
          return l ? {
            value: c,
            done: l
          } : (this._loaded += c.byteLength, (_a = this.onProgress) == null ? void 0 : _a.call(this, {
            loaded: this._loaded,
            total: this._contentLength
          }), {
            value: P(c),
            done: false
          });
        }
        cancel(c) {
          var _a;
          (_a = this._reader) == null ? void 0 : _a.cancel(c), this._abortController.abort();
        }
      }
      class v {
        constructor(c, l, b) {
          this._stream = c, this._reader = null, this._loaded = 0;
          const s = c.source;
          this._withCredentials = s.withCredentials || false, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !s.disableStream, this._abortController = new AbortController(), this._headers = G(this._stream.httpHeaders), this._headers.append("Range", `bytes=${l}-${b - 1}`);
          const g = s.url;
          fetch(g, _(this._headers, this._withCredentials, this._abortController)).then((t) => {
            if (!(0, z.validateResponseStatus)(t.status)) throw (0, z.createResponseStatusError)(t.status, g);
            this._readCapability.resolve(), this._reader = t.body.getReader();
          }).catch(this._readCapability.reject), this.onProgress = null;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var _a;
          await this._readCapability.promise;
          const { value: c, done: l } = await this._reader.read();
          return l ? {
            value: c,
            done: l
          } : (this._loaded += c.byteLength, (_a = this.onProgress) == null ? void 0 : _a.call(this, {
            loaded: this._loaded
          }), {
            value: P(c),
            done: false
          });
        }
        cancel(c) {
          var _a;
          (_a = this._reader) == null ? void 0 : _a.cancel(c), this._abortController.abort();
        }
      }
    },
    10: (ct, st, $) => {
      var _t;
      $.d(st, {
        FontFaceObject: () => _,
        FontLoader: () => z
      });
      var w = $(292);
      class z {
        constructor({ ownerDocument: P = globalThis.document, styleElement: C = null }) {
          __privateAdd(this, _t, /* @__PURE__ */ new Set());
          this._document = P, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
        }
        addNativeFontFace(P) {
          this.nativeFontFaces.add(P), this._document.fonts.add(P);
        }
        removeNativeFontFace(P) {
          this.nativeFontFaces.delete(P), this._document.fonts.delete(P);
        }
        insertRule(P) {
          this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
          const C = this.styleElement.sheet;
          C.insertRule(P, C.cssRules.length);
        }
        clear() {
          for (const P of this.nativeFontFaces) this._document.fonts.delete(P);
          this.nativeFontFaces.clear(), __privateGet(this, _t).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
        }
        async loadSystemFont({ systemFontInfo: P, _inspectFont: C }) {
          if (!(!P || __privateGet(this, _t).has(P.loadedName))) {
            if ((0, w.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
              const { loadedName: E, src: v, style: r } = P, c = new FontFace(E, v, r);
              this.addNativeFontFace(c);
              try {
                await c.load(), __privateGet(this, _t).add(E), C == null ? void 0 : C(P);
              } catch {
                (0, w.warn)(`Cannot load system font: ${P.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(c);
              }
              return;
            }
            (0, w.unreachable)("Not implemented: loadSystemFont without the Font Loading API.");
          }
        }
        async bind(P) {
          if (P.attached || P.missingFile && !P.systemFontInfo) return;
          if (P.attached = true, P.systemFontInfo) {
            await this.loadSystemFont(P);
            return;
          }
          if (this.isFontLoadingAPISupported) {
            const E = P.createNativeFontFace();
            if (E) {
              this.addNativeFontFace(E);
              try {
                await E.loaded;
              } catch (v) {
                throw (0, w.warn)(`Failed to load font '${E.family}': '${v}'.`), P.disableFontFace = true, v;
              }
            }
            return;
          }
          const C = P.createFontFaceRule();
          if (C) {
            if (this.insertRule(C), this.isSyncFontLoadingSupported) return;
            await new Promise((E) => {
              const v = this._queueLoadingCallback(E);
              this._prepareFontLoadEvent(P, v);
            });
          }
        }
        get isFontLoadingAPISupported() {
          var _a;
          const P = !!((_a = this._document) == null ? void 0 : _a.fonts);
          return (0, w.shadow)(this, "isFontLoadingAPISupported", P);
        }
        get isSyncFontLoadingSupported() {
          let P = false;
          return (w.isNodeJS || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (P = true), (0, w.shadow)(this, "isSyncFontLoadingSupported", P);
        }
        _queueLoadingCallback(P) {
          function C() {
            for ((0, w.assert)(!v.done, "completeRequest() cannot be called twice."), v.done = true; E.length > 0 && E[0].done; ) {
              const r = E.shift();
              setTimeout(r.callback, 0);
            }
          }
          const { loadingRequests: E } = this, v = {
            done: false,
            complete: C,
            callback: P
          };
          return E.push(v), v;
        }
        get _loadTestFont() {
          const P = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
          return (0, w.shadow)(this, "_loadTestFont", P);
        }
        _prepareFontLoadEvent(P, C) {
          function E(H, B) {
            return H.charCodeAt(B) << 24 | H.charCodeAt(B + 1) << 16 | H.charCodeAt(B + 2) << 8 | H.charCodeAt(B + 3) & 255;
          }
          function v(H, B, q, nt) {
            const j = H.substring(0, B), O = H.substring(B + q);
            return j + nt + O;
          }
          let r, c;
          const l = this._document.createElement("canvas");
          l.width = 1, l.height = 1;
          const b = l.getContext("2d");
          let s = 0;
          function g(H, B) {
            if (++s > 30) {
              (0, w.warn)("Load test font never loaded."), B();
              return;
            }
            if (b.font = "30px " + H, b.fillText(".", 0, 20), b.getImageData(0, 0, 1, 1).data[3] > 0) {
              B();
              return;
            }
            setTimeout(g.bind(null, H, B));
          }
          const t = `lt${Date.now()}${this.loadTestFontId++}`;
          let i = this._loadTestFont;
          i = v(i, 976, t.length, t);
          const p = 16, y = 1482184792;
          let S = E(i, p);
          for (r = 0, c = t.length - 3; r < c; r += 4) S = S - y + E(t, r) | 0;
          r < t.length && (S = S - y + E(t + "XXX", r) | 0), i = v(i, p, 4, (0, w.string32)(S));
          const L = `url(data:font/opentype;base64,${btoa(i)});`, M = `@font-face {font-family:"${t}";src:${L}}`;
          this.insertRule(M);
          const N = this._document.createElement("div");
          N.style.visibility = "hidden", N.style.width = N.style.height = "10px", N.style.position = "absolute", N.style.top = N.style.left = "0px";
          for (const H of [
            P.loadedName,
            t
          ]) {
            const B = this._document.createElement("span");
            B.textContent = "Hi", B.style.fontFamily = H, N.append(B);
          }
          this._document.body.append(N), g(t, () => {
            N.remove(), C.complete();
          });
        }
      }
      _t = new WeakMap();
      class _ {
        constructor(P, { disableFontFace: C = false, ignoreErrors: E = false, inspectFont: v = null }) {
          this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
          for (const r in P) this[r] = P[r];
          this.disableFontFace = C === true, this.ignoreErrors = E === true, this._inspectFont = v;
        }
        createNativeFontFace() {
          var _a;
          if (!this.data || this.disableFontFace) return null;
          let P;
          if (!this.cssFontInfo) P = new FontFace(this.loadedName, this.data, {});
          else {
            const C = {
              weight: this.cssFontInfo.fontWeight
            };
            this.cssFontInfo.italicAngle && (C.style = `oblique ${this.cssFontInfo.italicAngle}deg`), P = new FontFace(this.cssFontInfo.fontFamily, this.data, C);
          }
          return (_a = this._inspectFont) == null ? void 0 : _a.call(this, this), P;
        }
        createFontFaceRule() {
          var _a;
          if (!this.data || this.disableFontFace) return null;
          const P = (0, w.bytesToString)(this.data), C = `url(data:${this.mimetype};base64,${btoa(P)});`;
          let E;
          if (!this.cssFontInfo) E = `@font-face {font-family:"${this.loadedName}";src:${C}}`;
          else {
            let v = `font-weight: ${this.cssFontInfo.fontWeight};`;
            this.cssFontInfo.italicAngle && (v += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), E = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${v}src:${C}}`;
          }
          return (_a = this._inspectFont) == null ? void 0 : _a.call(this, this, C), E;
        }
        getPathGenerator(P, C) {
          if (this.compiledGlyphs[C] !== void 0) return this.compiledGlyphs[C];
          let E;
          try {
            E = P.get(this.loadedName + "_path_" + C);
          } catch (r) {
            if (!this.ignoreErrors) throw r;
            (0, w.warn)(`getPathGenerator - ignoring character: "${r}".`);
          }
          if (!Array.isArray(E) || E.length === 0) return this.compiledGlyphs[C] = function(r, c) {
          };
          const v = [];
          for (let r = 0, c = E.length; r < c; ) switch (E[r++]) {
            case w.FontRenderOps.BEZIER_CURVE_TO:
              {
                const [l, b, s, g, t, i] = E.slice(r, r + 6);
                v.push((u) => u.bezierCurveTo(l, b, s, g, t, i)), r += 6;
              }
              break;
            case w.FontRenderOps.MOVE_TO:
              {
                const [l, b] = E.slice(r, r + 2);
                v.push((s) => s.moveTo(l, b)), r += 2;
              }
              break;
            case w.FontRenderOps.LINE_TO:
              {
                const [l, b] = E.slice(r, r + 2);
                v.push((s) => s.lineTo(l, b)), r += 2;
              }
              break;
            case w.FontRenderOps.QUADRATIC_CURVE_TO:
              {
                const [l, b, s, g] = E.slice(r, r + 4);
                v.push((t) => t.quadraticCurveTo(l, b, s, g)), r += 4;
              }
              break;
            case w.FontRenderOps.RESTORE:
              v.push((l) => l.restore());
              break;
            case w.FontRenderOps.SAVE:
              v.push((l) => l.save());
              break;
            case w.FontRenderOps.SCALE:
              (0, w.assert)(v.length === 2, "Scale command is only valid at the third position.");
              break;
            case w.FontRenderOps.TRANSFORM:
              {
                const [l, b, s, g, t, i] = E.slice(r, r + 6);
                v.push((u) => u.transform(l, b, s, g, t, i)), r += 6;
              }
              break;
            case w.FontRenderOps.TRANSLATE:
              {
                const [l, b] = E.slice(r, r + 2);
                v.push((s) => s.translate(l, b)), r += 2;
              }
              break;
          }
          return this.compiledGlyphs[C] = function(c, l) {
            v[0](c), v[1](c), c.scale(l, -l);
            for (let b = 2, s = v.length; b < s; b++) v[b](c);
          };
        }
      }
    },
    62: (ct, st, $) => {
      var _t, _e2;
      $.d(st, {
        Metadata: () => z
      });
      var w = $(292);
      class z {
        constructor({ parsedData: G, rawData: P }) {
          __privateAdd(this, _t);
          __privateAdd(this, _e2);
          __privateSet(this, _t, G), __privateSet(this, _e2, P);
        }
        getRaw() {
          return __privateGet(this, _e2);
        }
        get(G) {
          return __privateGet(this, _t).get(G) ?? null;
        }
        getAll() {
          return (0, w.objectFromMap)(__privateGet(this, _t));
        }
        has(G) {
          return __privateGet(this, _t).has(G);
        }
      }
      _t = new WeakMap();
      _e2 = new WeakMap();
    },
    457: (ct, st, $) => {
      $.d(st, {
        PDFNetworkStream: () => E
      });
      var w = $(292), z = $(490);
      const _ = 200, G = 206;
      function P(c) {
        const l = c.response;
        return typeof l != "string" ? l : (0, w.stringToBytes)(l).buffer;
      }
      class C {
        constructor(l, b = {}) {
          this.url = l, this.isHttp = /^https?:/i.test(l), this.httpHeaders = this.isHttp && b.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = b.withCredentials || false, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
        }
        requestRange(l, b, s) {
          const g = {
            begin: l,
            end: b
          };
          for (const t in s) g[t] = s[t];
          return this.request(g);
        }
        requestFull(l) {
          return this.request(l);
        }
        request(l) {
          const b = new XMLHttpRequest(), s = this.currXhrId++, g = this.pendingRequests[s] = {
            xhr: b
          };
          b.open("GET", this.url), b.withCredentials = this.withCredentials;
          for (const t in this.httpHeaders) {
            const i = this.httpHeaders[t];
            i !== void 0 && b.setRequestHeader(t, i);
          }
          return this.isHttp && "begin" in l && "end" in l ? (b.setRequestHeader("Range", `bytes=${l.begin}-${l.end - 1}`), g.expectedStatus = G) : g.expectedStatus = _, b.responseType = "arraybuffer", l.onError && (b.onerror = function(t) {
            l.onError(b.status);
          }), b.onreadystatechange = this.onStateChange.bind(this, s), b.onprogress = this.onProgress.bind(this, s), g.onHeadersReceived = l.onHeadersReceived, g.onDone = l.onDone, g.onError = l.onError, g.onProgress = l.onProgress, b.send(null), s;
        }
        onProgress(l, b) {
          var _a;
          const s = this.pendingRequests[l];
          s && ((_a = s.onProgress) == null ? void 0 : _a.call(s, b));
        }
        onStateChange(l, b) {
          var _a, _b, _c;
          const s = this.pendingRequests[l];
          if (!s) return;
          const g = s.xhr;
          if (g.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), g.readyState !== 4 || !(l in this.pendingRequests)) return;
          if (delete this.pendingRequests[l], g.status === 0 && this.isHttp) {
            (_a = s.onError) == null ? void 0 : _a.call(s, g.status);
            return;
          }
          const t = g.status || _;
          if (!(t === _ && s.expectedStatus === G) && t !== s.expectedStatus) {
            (_b = s.onError) == null ? void 0 : _b.call(s, g.status);
            return;
          }
          const u = P(g);
          if (t === G) {
            const p = g.getResponseHeader("Content-Range"), y = /bytes (\d+)-(\d+)\/(\d+)/.exec(p);
            s.onDone({
              begin: parseInt(y[1], 10),
              chunk: u
            });
          } else u ? s.onDone({
            begin: 0,
            chunk: u
          }) : (_c = s.onError) == null ? void 0 : _c.call(s, g.status);
        }
        getRequestXhr(l) {
          return this.pendingRequests[l].xhr;
        }
        isPendingRequest(l) {
          return l in this.pendingRequests;
        }
        abortRequest(l) {
          const b = this.pendingRequests[l].xhr;
          delete this.pendingRequests[l], b.abort();
        }
      }
      class E {
        constructor(l) {
          this._source = l, this._manager = new C(l.url, {
            httpHeaders: l.httpHeaders,
            withCredentials: l.withCredentials
          }), this._rangeChunkSize = l.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        _onRangeRequestReaderClosed(l) {
          const b = this._rangeRequestReaders.indexOf(l);
          b >= 0 && this._rangeRequestReaders.splice(b, 1);
        }
        getFullReader() {
          return (0, w.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new v(this._manager, this._source), this._fullRequestReader;
        }
        getRangeReader(l, b) {
          const s = new r(this._manager, l, b);
          return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
        }
        cancelAllRequests(l) {
          var _a;
          (_a = this._fullRequestReader) == null ? void 0 : _a.cancel(l);
          for (const b of this._rangeRequestReaders.slice(0)) b.cancel(l);
        }
      }
      class v {
        constructor(l, b) {
          this._manager = l;
          const s = {
            onHeadersReceived: this._onHeadersReceived.bind(this),
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._url = b.url, this._fullRequestId = l.requestFull(s), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = b.disableRange || false, this._contentLength = b.length, this._rangeChunkSize = b.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._isStreamingSupported = false, this._isRangeSupported = false, this._cachedChunks = [], this._requests = [], this._done = false, this._storedError = void 0, this._filename = null, this.onProgress = null;
        }
        _onHeadersReceived() {
          const l = this._fullRequestId, b = this._manager.getRequestXhr(l), s = (i) => b.getResponseHeader(i), { allowRangeRequests: g, suggestedLength: t } = (0, z.validateRangeRequestCapabilities)({
            getResponseHeader: s,
            isHttp: this._manager.isHttp,
            rangeChunkSize: this._rangeChunkSize,
            disableRange: this._disableRange
          });
          g && (this._isRangeSupported = true), this._contentLength = t || this._contentLength, this._filename = (0, z.extractFilenameFromHeader)(s), this._isRangeSupported && this._manager.abortRequest(l), this._headersReceivedCapability.resolve();
        }
        _onDone(l) {
          if (l && (this._requests.length > 0 ? this._requests.shift().resolve({
            value: l.chunk,
            done: false
          }) : this._cachedChunks.push(l.chunk)), this._done = true, !(this._cachedChunks.length > 0)) {
            for (const b of this._requests) b.resolve({
              value: void 0,
              done: true
            });
            this._requests.length = 0;
          }
        }
        _onError(l) {
          this._storedError = (0, z.createResponseStatusError)(l, this._url), this._headersReceivedCapability.reject(this._storedError);
          for (const b of this._requests) b.reject(this._storedError);
          this._requests.length = 0, this._cachedChunks.length = 0;
        }
        _onProgress(l) {
          var _a;
          (_a = this.onProgress) == null ? void 0 : _a.call(this, {
            loaded: l.loaded,
            total: l.lengthComputable ? l.total : this._contentLength
          });
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        get contentLength() {
          return this._contentLength;
        }
        get headersReady() {
          return this._headersReceivedCapability.promise;
        }
        async read() {
          if (this._storedError) throw this._storedError;
          if (this._cachedChunks.length > 0) return {
            value: this._cachedChunks.shift(),
            done: false
          };
          if (this._done) return {
            value: void 0,
            done: true
          };
          const l = Promise.withResolvers();
          return this._requests.push(l), l.promise;
        }
        cancel(l) {
          this._done = true, this._headersReceivedCapability.reject(l);
          for (const b of this._requests) b.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
        }
      }
      class r {
        constructor(l, b, s) {
          this._manager = l;
          const g = {
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._url = l.url, this._requestId = l.requestRange(b, s, g), this._requests = [], this._queuedChunk = null, this._done = false, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
        }
        _close() {
          var _a;
          (_a = this.onClosed) == null ? void 0 : _a.call(this, this);
        }
        _onDone(l) {
          const b = l.chunk;
          this._requests.length > 0 ? this._requests.shift().resolve({
            value: b,
            done: false
          }) : this._queuedChunk = b, this._done = true;
          for (const s of this._requests) s.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0, this._close();
        }
        _onError(l) {
          this._storedError = (0, z.createResponseStatusError)(l, this._url);
          for (const b of this._requests) b.reject(this._storedError);
          this._requests.length = 0, this._queuedChunk = null;
        }
        _onProgress(l) {
          var _a;
          this.isStreamingSupported || ((_a = this.onProgress) == null ? void 0 : _a.call(this, {
            loaded: l.loaded
          }));
        }
        get isStreamingSupported() {
          return false;
        }
        async read() {
          if (this._storedError) throw this._storedError;
          if (this._queuedChunk !== null) {
            const b = this._queuedChunk;
            return this._queuedChunk = null, {
              value: b,
              done: false
            };
          }
          if (this._done) return {
            value: void 0,
            done: true
          };
          const l = Promise.withResolvers();
          return this._requests.push(l), l.promise;
        }
        cancel(l) {
          this._done = true;
          for (const b of this._requests) b.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
        }
      }
    },
    490: (ct, st, $) => {
      $.d(st, {
        createResponseStatusError: () => C,
        extractFilenameFromHeader: () => P,
        validateRangeRequestCapabilities: () => G,
        validateResponseStatus: () => E
      });
      var w = $(292);
      function z(v) {
        let r = true, c = l("filename\\*", "i").exec(v);
        if (c) {
          c = c[1];
          let p = t(c);
          return p = unescape(p), p = i(p), p = u(p), s(p);
        }
        if (c = g(v), c) {
          const p = u(c);
          return s(p);
        }
        if (c = l("filename", "i").exec(v), c) {
          c = c[1];
          let p = t(c);
          return p = u(p), s(p);
        }
        function l(p, y) {
          return new RegExp("(?:^|;)\\s*" + p + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', y);
        }
        function b(p, y) {
          if (p) {
            if (!/^[\x00-\xFF]+$/.test(y)) return y;
            try {
              const S = new TextDecoder(p, {
                fatal: true
              }), L = (0, w.stringToBytes)(y);
              y = S.decode(L), r = false;
            } catch {
            }
          }
          return y;
        }
        function s(p) {
          return r && /[\x80-\xff]/.test(p) && (p = b("utf-8", p), r && (p = b("iso-8859-1", p))), p;
        }
        function g(p) {
          const y = [];
          let S;
          const L = l("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
          for (; (S = L.exec(p)) !== null; ) {
            let [, N, H, B] = S;
            if (N = parseInt(N, 10), N in y) {
              if (N === 0) break;
              continue;
            }
            y[N] = [
              H,
              B
            ];
          }
          const M = [];
          for (let N = 0; N < y.length && N in y; ++N) {
            let [H, B] = y[N];
            B = t(B), H && (B = unescape(B), N === 0 && (B = i(B))), M.push(B);
          }
          return M.join("");
        }
        function t(p) {
          if (p.startsWith('"')) {
            const y = p.slice(1).split('\\"');
            for (let S = 0; S < y.length; ++S) {
              const L = y[S].indexOf('"');
              L !== -1 && (y[S] = y[S].slice(0, L), y.length = S + 1), y[S] = y[S].replaceAll(/\\(.)/g, "$1");
            }
            p = y.join('"');
          }
          return p;
        }
        function i(p) {
          const y = p.indexOf("'");
          if (y === -1) return p;
          const S = p.slice(0, y), M = p.slice(y + 1).replace(/^[^']*'/, "");
          return b(S, M);
        }
        function u(p) {
          return !p.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(p) ? p : p.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(y, S, L, M) {
            if (L === "q" || L === "Q") return M = M.replaceAll("_", " "), M = M.replaceAll(/=([0-9a-fA-F]{2})/g, function(N, H) {
              return String.fromCharCode(parseInt(H, 16));
            }), b(S, M);
            try {
              M = atob(M);
            } catch {
            }
            return b(S, M);
          });
        }
        return "";
      }
      var _ = $(419);
      function G({ getResponseHeader: v, isHttp: r, rangeChunkSize: c, disableRange: l }) {
        const b = {
          allowRangeRequests: false,
          suggestedLength: void 0
        }, s = parseInt(v("Content-Length"), 10);
        return !Number.isInteger(s) || (b.suggestedLength = s, s <= 2 * c) || l || !r || v("Accept-Ranges") !== "bytes" || (v("Content-Encoding") || "identity") !== "identity" || (b.allowRangeRequests = true), b;
      }
      function P(v) {
        const r = v("Content-Disposition");
        if (r) {
          let c = z(r);
          if (c.includes("%")) try {
            c = decodeURIComponent(c);
          } catch {
          }
          if ((0, _.isPdfFile)(c)) return c;
        }
        return null;
      }
      function C(v, r) {
        return v === 404 || v === 0 && r.startsWith("file:") ? new w.MissingPDFException('Missing PDF "' + r + '".') : new w.UnexpectedResponseException(`Unexpected server response (${v}) while retrieving PDF "${r}".`, v);
      }
      function E(v) {
        return v === 200 || v === 206;
      }
    },
    786: (ct, st, $) => {
      $.a(ct, async (w, z) => {
        try {
          let c = function(y) {
            const S = v.parse(y);
            return S.protocol === "file:" || S.host ? S : /^[a-z]:[/\\]/i.test(y) ? v.parse(`file:///${y}`) : (S.host || (S.protocol = "file:"), S);
          }, g = function(y, S) {
            return {
              protocol: y.protocol,
              auth: y.auth,
              host: y.hostname,
              port: y.port,
              path: y.path,
              method: "GET",
              headers: S
            };
          };
          $.d(st, {
            PDFNodeStream: () => l
          });
          var _ = $(292), G = $(490);
          let P, C, E, v;
          _.isNodeJS && (P = await Ft(() => import("./main-DivFZjc9.js").then(async (m) => {
            await m.__tla;
            return m;
          }).then((y) => y.W), __vite__mapDeps([0,1,2])), C = await Ft(() => import("./main-DivFZjc9.js").then(async (m) => {
            await m.__tla;
            return m;
          }).then((y) => y.W), __vite__mapDeps([0,1,2])), E = await Ft(() => import("./main-DivFZjc9.js").then(async (m) => {
            await m.__tla;
            return m;
          }).then((y) => y.W), __vite__mapDeps([0,1,2])), v = await Ft(() => import("./main-DivFZjc9.js").then(async (m) => {
            await m.__tla;
            return m;
          }).then((y) => y.W), __vite__mapDeps([0,1,2])));
          const r = /^file:\/\/\/[a-zA-Z]:\//;
          class l {
            constructor(S) {
              this.source = S, this.url = c(S.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && S.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              var _a;
              return ((_a = this._fullRequestReader) == null ? void 0 : _a._loaded) ?? 0;
            }
            getFullReader() {
              return (0, _.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new u(this) : new t(this), this._fullRequestReader;
            }
            getRangeReader(S, L) {
              if (L <= this._progressiveDataLength) return null;
              const M = this.isFsUrl ? new p(this, S, L) : new i(this, S, L);
              return this._rangeRequestReaders.push(M), M;
            }
            cancelAllRequests(S) {
              var _a;
              (_a = this._fullRequestReader) == null ? void 0 : _a.cancel(S);
              for (const L of this._rangeRequestReaders.slice(0)) L.cancel(S);
            }
          }
          class b {
            constructor(S) {
              this._url = S.url, this._done = false, this._storedError = null, this.onProgress = null;
              const L = S.source;
              this._contentLength = L.length, this._loaded = 0, this._filename = null, this._disableRange = L.disableRange || false, this._rangeChunkSize = L.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._isStreamingSupported = !L.disableStream, this._isRangeSupported = !L.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var _a;
              if (await this._readCapability.promise, this._done) return {
                value: void 0,
                done: true
              };
              if (this._storedError) throw this._storedError;
              const S = this._readableStream.read();
              return S === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += S.length, (_a = this.onProgress) == null ? void 0 : _a.call(this, {
                loaded: this._loaded,
                total: this._contentLength
              }), {
                value: new Uint8Array(S).buffer,
                done: false
              });
            }
            cancel(S) {
              if (!this._readableStream) {
                this._error(S);
                return;
              }
              this._readableStream.destroy(S);
            }
            _error(S) {
              this._storedError = S, this._readCapability.resolve();
            }
            _setReadableStream(S) {
              this._readableStream = S, S.on("readable", () => {
                this._readCapability.resolve();
              }), S.on("end", () => {
                S.destroy(), this._done = true, this._readCapability.resolve();
              }), S.on("error", (L) => {
                this._error(L);
              }), !this._isStreamingSupported && this._isRangeSupported && this._error(new _.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          class s {
            constructor(S) {
              this._url = S.url, this._done = false, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
              const L = S.source;
              this._isStreamingSupported = !L.disableStream;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var _a;
              if (await this._readCapability.promise, this._done) return {
                value: void 0,
                done: true
              };
              if (this._storedError) throw this._storedError;
              const S = this._readableStream.read();
              return S === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += S.length, (_a = this.onProgress) == null ? void 0 : _a.call(this, {
                loaded: this._loaded
              }), {
                value: new Uint8Array(S).buffer,
                done: false
              });
            }
            cancel(S) {
              if (!this._readableStream) {
                this._error(S);
                return;
              }
              this._readableStream.destroy(S);
            }
            _error(S) {
              this._storedError = S, this._readCapability.resolve();
            }
            _setReadableStream(S) {
              this._readableStream = S, S.on("readable", () => {
                this._readCapability.resolve();
              }), S.on("end", () => {
                S.destroy(), this._done = true, this._readCapability.resolve();
              }), S.on("error", (L) => {
                this._error(L);
              }), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          class t extends b {
            constructor(S) {
              super(S);
              const L = (M) => {
                if (M.statusCode === 404) {
                  const q = new _.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = q, this._headersCapability.reject(q);
                  return;
                }
                this._headersCapability.resolve(), this._setReadableStream(M);
                const N = (q) => this._readableStream.headers[q.toLowerCase()], { allowRangeRequests: H, suggestedLength: B } = (0, G.validateRangeRequestCapabilities)({
                  getResponseHeader: N,
                  isHttp: S.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = H, this._contentLength = B || this._contentLength, this._filename = (0, G.extractFilenameFromHeader)(N);
              };
              this._request = null, this._url.protocol === "http:" ? this._request = C.request(g(this._url, S.httpHeaders), L) : this._request = E.request(g(this._url, S.httpHeaders), L), this._request.on("error", (M) => {
                this._storedError = M, this._headersCapability.reject(M);
              }), this._request.end();
            }
          }
          class i extends s {
            constructor(S, L, M) {
              super(S), this._httpHeaders = {};
              for (const H in S.httpHeaders) {
                const B = S.httpHeaders[H];
                B !== void 0 && (this._httpHeaders[H] = B);
              }
              this._httpHeaders.Range = `bytes=${L}-${M - 1}`;
              const N = (H) => {
                if (H.statusCode === 404) {
                  const B = new _.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = B;
                  return;
                }
                this._setReadableStream(H);
              };
              this._request = null, this._url.protocol === "http:" ? this._request = C.request(g(this._url, this._httpHeaders), N) : this._request = E.request(g(this._url, this._httpHeaders), N), this._request.on("error", (H) => {
                this._storedError = H;
              }), this._request.end();
            }
          }
          class u extends b {
            constructor(S) {
              super(S);
              let L = decodeURIComponent(this._url.path);
              r.test(this._url.href) && (L = L.replace(/^\//, "")), P.promises.lstat(L).then((M) => {
                this._contentLength = M.size, this._setReadableStream(P.createReadStream(L)), this._headersCapability.resolve();
              }, (M) => {
                M.code === "ENOENT" && (M = new _.MissingPDFException(`Missing PDF "${L}".`)), this._storedError = M, this._headersCapability.reject(M);
              });
            }
          }
          class p extends s {
            constructor(S, L, M) {
              super(S);
              let N = decodeURIComponent(this._url.path);
              r.test(this._url.href) && (N = N.replace(/^\//, "")), this._setReadableStream(P.createReadStream(N, {
                start: L,
                end: M - 1
              }));
            }
          }
          z();
        } catch (P) {
          z(P);
        }
      }, 1);
    },
    573: (ct, st, $) => {
      $.a(ct, async (w, z) => {
        try {
          $.d(st, {
            NodeCMapReaderFactory: () => l,
            NodeCanvasFactory: () => c,
            NodeFilterFactory: () => r,
            NodeStandardFontDataFactory: () => b
          });
          var _ = $(583), G = $(292);
          let P, C, E;
          if (G.isNodeJS) {
            P = await Ft(() => import("./main-DivFZjc9.js").then(async (m) => {
              await m.__tla;
              return m;
            }).then((s) => s.W), __vite__mapDeps([0,1,2]));
            try {
              C = await Ft(() => import("./main-DivFZjc9.js").then(async (m) => {
                await m.__tla;
                return m;
              }).then((s) => s.W), __vite__mapDeps([0,1,2]));
            } catch {
            }
            try {
              E = await Ft(() => import("./index-B9fWrEk-.js"), []);
            } catch {
            }
          }
          const v = function(s) {
            return P.promises.readFile(s).then((g) => new Uint8Array(g));
          };
          class r extends _.BaseFilterFactory {
          }
          class c extends _.BaseCanvasFactory {
            _createCanvas(g, t) {
              return C.createCanvas(g, t);
            }
          }
          class l extends _.BaseCMapReaderFactory {
            _fetchData(g, t) {
              return v(g).then((i) => ({
                cMapData: i,
                compressionType: t
              }));
            }
          }
          class b extends _.BaseStandardFontDataFactory {
            _fetchData(g) {
              return v(g);
            }
          }
          z();
        } catch (P) {
          z(P);
        }
      }, 1);
    },
    626: (ct, st, $) => {
      var _t, _e2, _s, _n, _t2, _e3, _s2, _n2, _P_instances, r_fn;
      $.d(st, {
        OptionalContentConfig: () => P
      });
      var w = $(292), z = $(651);
      const _ = Symbol("INTERNAL");
      class G {
        constructor(E, { name: v, intent: r, usage: c }) {
          __privateAdd(this, _t, false);
          __privateAdd(this, _e2, false);
          __privateAdd(this, _s, false);
          __privateAdd(this, _n, true);
          __privateSet(this, _t, !!(E & w.RenderingIntentFlag.DISPLAY)), __privateSet(this, _e2, !!(E & w.RenderingIntentFlag.PRINT)), this.name = v, this.intent = r, this.usage = c;
        }
        get visible() {
          if (__privateGet(this, _s)) return __privateGet(this, _n);
          if (!__privateGet(this, _n)) return false;
          const { print: E, view: v } = this.usage;
          return __privateGet(this, _t) ? (v == null ? void 0 : v.viewState) !== "OFF" : __privateGet(this, _e2) ? (E == null ? void 0 : E.printState) !== "OFF" : true;
        }
        _setVisible(E, v, r = false) {
          E !== _ && (0, w.unreachable)("Internal method `_setVisible` called."), __privateSet(this, _s, r), __privateSet(this, _n, v);
        }
      }
      _t = new WeakMap();
      _e2 = new WeakMap();
      _s = new WeakMap();
      _n = new WeakMap();
      class P {
        constructor(E, v = w.RenderingIntentFlag.DISPLAY) {
          __privateAdd(this, _P_instances);
          __privateAdd(this, _t2, null);
          __privateAdd(this, _e3, /* @__PURE__ */ new Map());
          __privateAdd(this, _s2, null);
          __privateAdd(this, _n2, null);
          if (this.renderingIntent = v, this.name = null, this.creator = null, E !== null) {
            this.name = E.name, this.creator = E.creator, __privateSet(this, _n2, E.order);
            for (const r of E.groups) __privateGet(this, _e3).set(r.id, new G(v, r));
            if (E.baseState === "OFF") for (const r of __privateGet(this, _e3).values()) r._setVisible(_, false);
            for (const r of E.on) __privateGet(this, _e3).get(r)._setVisible(_, true);
            for (const r of E.off) __privateGet(this, _e3).get(r)._setVisible(_, false);
            __privateSet(this, _s2, this.getHash());
          }
        }
        isVisible(E) {
          if (__privateGet(this, _e3).size === 0) return true;
          if (!E) return (0, w.info)("Optional content group not defined."), true;
          if (E.type === "OCG") return __privateGet(this, _e3).has(E.id) ? __privateGet(this, _e3).get(E.id).visible : ((0, w.warn)(`Optional content group not found: ${E.id}`), true);
          if (E.type === "OCMD") {
            if (E.expression) return __privateMethod(this, _P_instances, r_fn).call(this, E.expression);
            if (!E.policy || E.policy === "AnyOn") {
              for (const v of E.ids) {
                if (!__privateGet(this, _e3).has(v)) return (0, w.warn)(`Optional content group not found: ${v}`), true;
                if (__privateGet(this, _e3).get(v).visible) return true;
              }
              return false;
            } else if (E.policy === "AllOn") {
              for (const v of E.ids) {
                if (!__privateGet(this, _e3).has(v)) return (0, w.warn)(`Optional content group not found: ${v}`), true;
                if (!__privateGet(this, _e3).get(v).visible) return false;
              }
              return true;
            } else if (E.policy === "AnyOff") {
              for (const v of E.ids) {
                if (!__privateGet(this, _e3).has(v)) return (0, w.warn)(`Optional content group not found: ${v}`), true;
                if (!__privateGet(this, _e3).get(v).visible) return true;
              }
              return false;
            } else if (E.policy === "AllOff") {
              for (const v of E.ids) {
                if (!__privateGet(this, _e3).has(v)) return (0, w.warn)(`Optional content group not found: ${v}`), true;
                if (__privateGet(this, _e3).get(v).visible) return false;
              }
              return true;
            }
            return (0, w.warn)(`Unknown optional content policy ${E.policy}.`), true;
          }
          return (0, w.warn)(`Unknown group type ${E.type}.`), true;
        }
        setVisibility(E, v = true) {
          const r = __privateGet(this, _e3).get(E);
          if (!r) {
            (0, w.warn)(`Optional content group not found: ${E}`);
            return;
          }
          r._setVisible(_, !!v, true), __privateSet(this, _t2, null);
        }
        setOCGState({ state: E, preserveRB: v }) {
          let r;
          for (const c of E) {
            switch (c) {
              case "ON":
              case "OFF":
              case "Toggle":
                r = c;
                continue;
            }
            const l = __privateGet(this, _e3).get(c);
            if (l) switch (r) {
              case "ON":
                l._setVisible(_, true);
                break;
              case "OFF":
                l._setVisible(_, false);
                break;
              case "Toggle":
                l._setVisible(_, !l.visible);
                break;
            }
          }
          __privateSet(this, _t2, null);
        }
        get hasInitialVisibility() {
          return __privateGet(this, _s2) === null || this.getHash() === __privateGet(this, _s2);
        }
        getOrder() {
          return __privateGet(this, _e3).size ? __privateGet(this, _n2) ? __privateGet(this, _n2).slice() : [
            ...__privateGet(this, _e3).keys()
          ] : null;
        }
        getGroups() {
          return __privateGet(this, _e3).size > 0 ? (0, w.objectFromMap)(__privateGet(this, _e3)) : null;
        }
        getGroup(E) {
          return __privateGet(this, _e3).get(E) || null;
        }
        getHash() {
          if (__privateGet(this, _t2) !== null) return __privateGet(this, _t2);
          const E = new z.MurmurHash3_64();
          for (const [v, r] of __privateGet(this, _e3)) E.update(`${v}:${r.visible}`);
          return __privateSet(this, _t2, E.hexdigest());
        }
      }
      _t2 = new WeakMap();
      _e3 = new WeakMap();
      _s2 = new WeakMap();
      _n2 = new WeakMap();
      _P_instances = new WeakSet();
      r_fn = function(E) {
        const v = E.length;
        if (v < 2) return true;
        const r = E[0];
        for (let c = 1; c < v; c++) {
          const l = E[c];
          let b;
          if (Array.isArray(l)) b = __privateMethod(this, _P_instances, r_fn).call(this, l);
          else if (__privateGet(this, _e3).has(l)) b = __privateGet(this, _e3).get(l).visible;
          else return (0, w.warn)(`Optional content group not found: ${l}`), true;
          switch (r) {
            case "And":
              if (!b) return false;
              break;
            case "Or":
              if (b) return true;
              break;
            case "Not":
              return !b;
            default:
              return true;
          }
        }
        return r === "And";
      };
    },
    814: (ct, st, $) => {
      $.d(st, {
        cleanupTextLayer: () => r,
        renderTextLayer: () => t,
        updateTextLayer: () => i
      });
      var w = $(292), z = $(419);
      const _ = 1e5, G = 30, P = 0.8, C = /* @__PURE__ */ new Map();
      let E = null;
      function v() {
        if (!E) {
          const u = document.createElement("canvas");
          u.className = "hiddenCanvasElement", document.body.append(u), E = u.getContext("2d", {
            alpha: false
          });
        }
        return E;
      }
      function r() {
        E == null ? void 0 : E.canvas.remove(), E = null;
      }
      function c(u) {
        const p = C.get(u);
        if (p) return p;
        const y = v(), S = y.font;
        y.canvas.width = y.canvas.height = G, y.font = `${G}px ${u}`;
        const L = y.measureText("");
        let M = L.fontBoundingBoxAscent, N = Math.abs(L.fontBoundingBoxDescent);
        if (M) {
          const B = M / (M + N);
          return C.set(u, B), y.canvas.width = y.canvas.height = 0, y.font = S, B;
        }
        y.strokeStyle = "red", y.clearRect(0, 0, G, G), y.strokeText("g", 0, 0);
        let H = y.getImageData(0, 0, G, G).data;
        N = 0;
        for (let B = H.length - 1 - 3; B >= 0; B -= 4) if (H[B] > 0) {
          N = Math.ceil(B / 4 / G);
          break;
        }
        y.clearRect(0, 0, G, G), y.strokeText("A", 0, G), H = y.getImageData(0, 0, G, G).data, M = 0;
        for (let B = 0, q = H.length; B < q; B += 4) if (H[B] > 0) {
          M = G - Math.floor(B / 4 / G);
          break;
        }
        if (y.canvas.width = y.canvas.height = 0, y.font = S, M) {
          const B = M / (M + N);
          return C.set(u, B), B;
        }
        return C.set(u, P), P;
      }
      function l(u, p, y) {
        const S = document.createElement("span"), L = {
          angle: 0,
          canvasWidth: 0,
          hasText: p.str !== "",
          hasEOL: p.hasEOL,
          fontSize: 0
        };
        u._textDivs.push(S);
        const M = w.Util.transform(u._transform, p.transform);
        let N = Math.atan2(M[1], M[0]);
        const H = y[p.fontName];
        H.vertical && (N += Math.PI / 2);
        const B = u._fontInspectorEnabled && H.fontSubstitution || H.fontFamily, q = Math.hypot(M[2], M[3]), nt = q * c(B);
        let j, O;
        N === 0 ? (j = M[4], O = M[5] - nt) : (j = M[4] + nt * Math.sin(N), O = M[5] - nt * Math.cos(N));
        const V = "calc(var(--scale-factor)*", Y = S.style;
        u._container === u._rootContainer ? (Y.left = `${(100 * j / u._pageWidth).toFixed(2)}%`, Y.top = `${(100 * O / u._pageHeight).toFixed(2)}%`) : (Y.left = `${V}${j.toFixed(2)}px)`, Y.top = `${V}${O.toFixed(2)}px)`), Y.fontSize = `${V}${q.toFixed(2)}px)`, Y.fontFamily = B, L.fontSize = q, S.setAttribute("role", "presentation"), S.textContent = p.str, S.dir = p.dir, u._fontInspectorEnabled && (S.dataset.fontName = H.fontSubstitutionLoadedName || p.fontName), N !== 0 && (L.angle = N * (180 / Math.PI));
        let tt = false;
        if (p.str.length > 1) tt = true;
        else if (p.str !== " " && p.transform[0] !== p.transform[3]) {
          const Z = Math.abs(p.transform[0]), at = Math.abs(p.transform[3]);
          Z !== at && Math.max(Z, at) / Math.min(Z, at) > 1.5 && (tt = true);
        }
        tt && (L.canvasWidth = H.vertical ? p.height : p.width), u._textDivProperties.set(S, L), u._isReadableStream && u._layoutText(S);
      }
      function b(u) {
        const { div: p, scale: y, properties: S, ctx: L, prevFontSize: M, prevFontFamily: N } = u, { style: H } = p;
        let B = "";
        if (S.canvasWidth !== 0 && S.hasText) {
          const { fontFamily: q } = H, { canvasWidth: nt, fontSize: j } = S;
          (M !== j || N !== q) && (L.font = `${j * y}px ${q}`, u.prevFontSize = j, u.prevFontFamily = q);
          const { width: O } = L.measureText(p.textContent);
          O > 0 && (B = `scaleX(${nt * y / O})`);
        }
        S.angle !== 0 && (B = `rotate(${S.angle}deg) ${B}`), B.length > 0 && (H.transform = B);
      }
      function s(u) {
        if (u._canceled) return;
        const p = u._textDivs, y = u._capability;
        if (p.length > _) {
          y.resolve();
          return;
        }
        if (!u._isReadableStream) for (const L of p) u._layoutText(L);
        y.resolve();
      }
      class g {
        constructor({ textContentSource: p, container: y, viewport: S, textDivs: L, textDivProperties: M, textContentItemsStr: N }) {
          var _a;
          this._textContentSource = p, this._isReadableStream = p instanceof ReadableStream, this._container = this._rootContainer = y, this._textDivs = L || [], this._textContentItemsStr = N || [], this._fontInspectorEnabled = !!((_a = globalThis.FontInspector) == null ? void 0 : _a.enabled), this._reader = null, this._textDivProperties = M || /* @__PURE__ */ new WeakMap(), this._canceled = false, this._capability = Promise.withResolvers(), this._layoutTextParams = {
            prevFontSize: null,
            prevFontFamily: null,
            div: null,
            scale: S.scale * (globalThis.devicePixelRatio || 1),
            properties: null,
            ctx: v()
          };
          const { pageWidth: H, pageHeight: B, pageX: q, pageY: nt } = S.rawDims;
          this._transform = [
            1,
            0,
            0,
            -1,
            -q,
            nt + B
          ], this._pageWidth = H, this._pageHeight = B, (0, z.setLayerDimensions)(y, S), this._capability.promise.finally(() => {
            this._layoutTextParams = null;
          }).catch(() => {
          });
        }
        get promise() {
          return this._capability.promise;
        }
        cancel() {
          this._canceled = true, this._reader && (this._reader.cancel(new w.AbortException("TextLayer task cancelled.")).catch(() => {
          }), this._reader = null), this._capability.reject(new w.AbortException("TextLayer task cancelled."));
        }
        _processItems(p, y) {
          for (const S of p) {
            if (S.str === void 0) {
              if (S.type === "beginMarkedContentProps" || S.type === "beginMarkedContent") {
                const L = this._container;
                this._container = document.createElement("span"), this._container.classList.add("markedContent"), S.id !== null && this._container.setAttribute("id", `${S.id}`), L.append(this._container);
              } else S.type === "endMarkedContent" && (this._container = this._container.parentNode);
              continue;
            }
            this._textContentItemsStr.push(S.str), l(this, S, y);
          }
        }
        _layoutText(p) {
          const y = this._layoutTextParams.properties = this._textDivProperties.get(p);
          if (this._layoutTextParams.div = p, b(this._layoutTextParams), y.hasText && this._container.append(p), y.hasEOL) {
            const S = document.createElement("br");
            S.setAttribute("role", "presentation"), this._container.append(S);
          }
        }
        _render() {
          const { promise: p, resolve: y, reject: S } = Promise.withResolvers();
          let L = /* @__PURE__ */ Object.create(null);
          if (this._isReadableStream) {
            const M = () => {
              this._reader.read().then(({ value: N, done: H }) => {
                if (H) {
                  y();
                  return;
                }
                Object.assign(L, N.styles), this._processItems(N.items, L), M();
              }, S);
            };
            this._reader = this._textContentSource.getReader(), M();
          } else if (this._textContentSource) {
            const { items: M, styles: N } = this._textContentSource;
            this._processItems(M, N), y();
          } else throw new Error('No "textContentSource" parameter specified.');
          p.then(() => {
            L = null, s(this);
          }, this._capability.reject);
        }
      }
      function t(u) {
        const p = new g(u);
        return p._render(), p;
      }
      function i({ container: u, viewport: p, textDivs: y, textDivProperties: S, mustRotate: L = true, mustRescale: M = true }) {
        if (L && (0, z.setLayerDimensions)(u, {
          rotation: p.rotation
        }), M) {
          const N = v(), B = {
            prevFontSize: null,
            prevFontFamily: null,
            div: null,
            scale: p.scale * (globalThis.devicePixelRatio || 1),
            properties: null,
            ctx: N
          };
          for (const q of y) B.properties = S.get(q), B.div = q, b(B);
        }
      }
    },
    585: (ct, st, $) => {
      $.d(st, {
        PDFDataTransportStream: () => _
      });
      var w = $(292), z = $(419);
      class _ {
        constructor(E, { disableRange: v = false, disableStream: r = false }) {
          (0, w.assert)(E, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
          const { length: c, initialData: l, progressiveDone: b, contentDispositionFilename: s } = E;
          if (this._queuedChunks = [], this._progressiveDone = b, this._contentDispositionFilename = s, (l == null ? void 0 : l.length) > 0) {
            const g = l instanceof Uint8Array && l.byteLength === l.buffer.byteLength ? l.buffer : new Uint8Array(l).buffer;
            this._queuedChunks.push(g);
          }
          this._pdfDataRangeTransport = E, this._isStreamingSupported = !r, this._isRangeSupported = !v, this._contentLength = c, this._fullRequestReader = null, this._rangeReaders = [], E.addRangeListener((g, t) => {
            this._onReceiveData({
              begin: g,
              chunk: t
            });
          }), E.addProgressListener((g, t) => {
            this._onProgress({
              loaded: g,
              total: t
            });
          }), E.addProgressiveReadListener((g) => {
            this._onReceiveData({
              chunk: g
            });
          }), E.addProgressiveDoneListener(() => {
            this._onProgressiveDone();
          }), E.transportReady();
        }
        _onReceiveData({ begin: E, chunk: v }) {
          const r = v instanceof Uint8Array && v.byteLength === v.buffer.byteLength ? v.buffer : new Uint8Array(v).buffer;
          if (E === void 0) this._fullRequestReader ? this._fullRequestReader._enqueue(r) : this._queuedChunks.push(r);
          else {
            const c = this._rangeReaders.some(function(l) {
              return l._begin !== E ? false : (l._enqueue(r), true);
            });
            (0, w.assert)(c, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
          }
        }
        get _progressiveDataLength() {
          var _a;
          return ((_a = this._fullRequestReader) == null ? void 0 : _a._loaded) ?? 0;
        }
        _onProgress(E) {
          var _a, _b, _c, _d;
          E.total === void 0 ? (_b = (_a = this._rangeReaders[0]) == null ? void 0 : _a.onProgress) == null ? void 0 : _b.call(_a, {
            loaded: E.loaded
          }) : (_d = (_c = this._fullRequestReader) == null ? void 0 : _c.onProgress) == null ? void 0 : _d.call(_c, {
            loaded: E.loaded,
            total: E.total
          });
        }
        _onProgressiveDone() {
          var _a;
          (_a = this._fullRequestReader) == null ? void 0 : _a.progressiveDone(), this._progressiveDone = true;
        }
        _removeRangeReader(E) {
          const v = this._rangeReaders.indexOf(E);
          v >= 0 && this._rangeReaders.splice(v, 1);
        }
        getFullReader() {
          (0, w.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
          const E = this._queuedChunks;
          return this._queuedChunks = null, new G(this, E, this._progressiveDone, this._contentDispositionFilename);
        }
        getRangeReader(E, v) {
          if (v <= this._progressiveDataLength) return null;
          const r = new P(this, E, v);
          return this._pdfDataRangeTransport.requestDataRange(E, v), this._rangeReaders.push(r), r;
        }
        cancelAllRequests(E) {
          var _a;
          (_a = this._fullRequestReader) == null ? void 0 : _a.cancel(E);
          for (const v of this._rangeReaders.slice(0)) v.cancel(E);
          this._pdfDataRangeTransport.abort();
        }
      }
      class G {
        constructor(E, v, r = false, c = null) {
          this._stream = E, this._done = r || false, this._filename = (0, z.isPdfFile)(c) ? c : null, this._queuedChunks = v || [], this._loaded = 0;
          for (const l of this._queuedChunks) this._loaded += l.byteLength;
          this._requests = [], this._headersReady = Promise.resolve(), E._fullRequestReader = this, this.onProgress = null;
        }
        _enqueue(E) {
          this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
            value: E,
            done: false
          }) : this._queuedChunks.push(E), this._loaded += E.byteLength);
        }
        get headersReady() {
          return this._headersReady;
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._stream._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._stream._isStreamingSupported;
        }
        get contentLength() {
          return this._stream._contentLength;
        }
        async read() {
          if (this._queuedChunks.length > 0) return {
            value: this._queuedChunks.shift(),
            done: false
          };
          if (this._done) return {
            value: void 0,
            done: true
          };
          const E = Promise.withResolvers();
          return this._requests.push(E), E.promise;
        }
        cancel(E) {
          this._done = true;
          for (const v of this._requests) v.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0;
        }
        progressiveDone() {
          this._done || (this._done = true);
        }
      }
      class P {
        constructor(E, v, r) {
          this._stream = E, this._begin = v, this._end = r, this._queuedChunk = null, this._requests = [], this._done = false, this.onProgress = null;
        }
        _enqueue(E) {
          if (!this._done) {
            if (this._requests.length === 0) this._queuedChunk = E;
            else {
              this._requests.shift().resolve({
                value: E,
                done: false
              });
              for (const r of this._requests) r.resolve({
                value: void 0,
                done: true
              });
              this._requests.length = 0;
            }
            this._done = true, this._stream._removeRangeReader(this);
          }
        }
        get isStreamingSupported() {
          return false;
        }
        async read() {
          if (this._queuedChunk) {
            const v = this._queuedChunk;
            return this._queuedChunk = null, {
              value: v,
              done: false
            };
          }
          if (this._done) return {
            value: void 0,
            done: true
          };
          const E = Promise.withResolvers();
          return this._requests.push(E), E.promise;
        }
        cancel(E) {
          this._done = true;
          for (const v of this._requests) v.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0, this._stream._removeRangeReader(this);
        }
      }
    },
    164: (ct, st, $) => {
      var _t, _e2;
      $.d(st, {
        GlobalWorkerOptions: () => w
      });
      class w {
        static get workerPort() {
          return __privateGet(this, _t);
        }
        static set workerPort(_) {
          if (!(typeof Worker < "u" && _ instanceof Worker) && _ !== null) throw new Error("Invalid `workerPort` type.");
          __privateSet(this, _t, _);
        }
        static get workerSrc() {
          return __privateGet(this, _e2);
        }
        static set workerSrc(_) {
          if (typeof _ != "string") throw new Error("Invalid `workerSrc` type.");
          __privateSet(this, _e2, _);
        }
      }
      _t = new WeakMap();
      _e2 = new WeakMap();
      __privateAdd(w, _t, null);
      __privateAdd(w, _e2, "");
    },
    284: (ct, st, $) => {
      $.d(st, {
        XfaLayer: () => z
      });
      var w = $(50);
      class z {
        static setupStorage(G, P, C, E, v) {
          const r = E.getValue(P, {
            value: null
          });
          switch (C.name) {
            case "textarea":
              if (r.value !== null && (G.textContent = r.value), v === "print") break;
              G.addEventListener("input", (c) => {
                E.setValue(P, {
                  value: c.target.value
                });
              });
              break;
            case "input":
              if (C.attributes.type === "radio" || C.attributes.type === "checkbox") {
                if (r.value === C.attributes.xfaOn ? G.setAttribute("checked", true) : r.value === C.attributes.xfaOff && G.removeAttribute("checked"), v === "print") break;
                G.addEventListener("change", (c) => {
                  E.setValue(P, {
                    value: c.target.checked ? c.target.getAttribute("xfaOn") : c.target.getAttribute("xfaOff")
                  });
                });
              } else {
                if (r.value !== null && G.setAttribute("value", r.value), v === "print") break;
                G.addEventListener("input", (c) => {
                  E.setValue(P, {
                    value: c.target.value
                  });
                });
              }
              break;
            case "select":
              if (r.value !== null) {
                G.setAttribute("value", r.value);
                for (const c of C.children) c.attributes.value === r.value ? c.attributes.selected = true : c.attributes.hasOwnProperty("selected") && delete c.attributes.selected;
              }
              G.addEventListener("input", (c) => {
                const l = c.target.options, b = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
                E.setValue(P, {
                  value: b
                });
              });
              break;
          }
        }
        static setAttributes({ html: G, element: P, storage: C = null, intent: E, linkService: v }) {
          const { attributes: r } = P, c = G instanceof HTMLAnchorElement;
          r.type === "radio" && (r.name = `${r.name}-${E}`);
          for (const [l, b] of Object.entries(r)) if (b != null) switch (l) {
            case "class":
              b.length && G.setAttribute(l, b.join(" "));
              break;
            case "dataId":
              break;
            case "id":
              G.setAttribute("data-element-id", b);
              break;
            case "style":
              Object.assign(G.style, b);
              break;
            case "textContent":
              G.textContent = b;
              break;
            default:
              (!c || l !== "href" && l !== "newWindow") && G.setAttribute(l, b);
          }
          c && v.addLinkAttributes(G, r.href, r.newWindow), C && r.dataId && this.setupStorage(G, r.dataId, P, C);
        }
        static render(G) {
          var _a, _b;
          const P = G.annotationStorage, C = G.linkService, E = G.xfaHtml, v = G.intent || "display", r = document.createElement(E.name);
          E.attributes && this.setAttributes({
            html: r,
            element: E,
            intent: v,
            linkService: C
          });
          const c = v !== "richText", l = G.div;
          if (l.append(r), G.viewport) {
            const g = `matrix(${G.viewport.transform.join(",")})`;
            l.style.transform = g;
          }
          c && l.setAttribute("class", "xfaLayer xfaFont");
          const b = [];
          if (E.children.length === 0) {
            if (E.value) {
              const g = document.createTextNode(E.value);
              r.append(g), c && w.XfaText.shouldBuildText(E.name) && b.push(g);
            }
            return {
              textDivs: b
            };
          }
          const s = [
            [
              E,
              -1,
              r
            ]
          ];
          for (; s.length > 0; ) {
            const [g, t, i] = s.at(-1);
            if (t + 1 === g.children.length) {
              s.pop();
              continue;
            }
            const u = g.children[++s.at(-1)[1]];
            if (u === null) continue;
            const { name: p } = u;
            if (p === "#text") {
              const S = document.createTextNode(u.value);
              b.push(S), i.append(S);
              continue;
            }
            const y = ((_a = u == null ? void 0 : u.attributes) == null ? void 0 : _a.xmlns) ? document.createElementNS(u.attributes.xmlns, p) : document.createElement(p);
            if (i.append(y), u.attributes && this.setAttributes({
              html: y,
              element: u,
              storage: P,
              intent: v,
              linkService: C
            }), ((_b = u.children) == null ? void 0 : _b.length) > 0) s.push([
              u,
              -1,
              y
            ]);
            else if (u.value) {
              const S = document.createTextNode(u.value);
              c && w.XfaText.shouldBuildText(p) && b.push(S), y.append(S);
            }
          }
          for (const g of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) g.setAttribute("readOnly", true);
          return {
            textDivs: b
          };
        }
        static update(G) {
          const P = `matrix(${G.viewport.transform.join(",")})`;
          G.div.style.transform = P, G.div.hidden = false;
        }
      }
    },
    50: (ct, st, $) => {
      $.d(st, {
        XfaText: () => w
      });
      class w {
        static textContent(_) {
          const G = [], P = {
            items: G,
            styles: /* @__PURE__ */ Object.create(null)
          };
          function C(E) {
            var _a;
            if (!E) return;
            let v = null;
            const r = E.name;
            if (r === "#text") v = E.value;
            else if (w.shouldBuildText(r)) ((_a = E == null ? void 0 : E.attributes) == null ? void 0 : _a.textContent) ? v = E.attributes.textContent : E.value && (v = E.value);
            else return;
            if (v !== null && G.push({
              str: v
            }), !!E.children) for (const c of E.children) C(c);
          }
          return C(_), P;
        }
        static shouldBuildText(_) {
          return !(_ === "textarea" || _ === "input" || _ === "option" || _ === "select");
        }
      }
    },
    228: (ct, st, $) => {
      $.a(ct, async (w, z) => {
        try {
          $.d(st, {
            AbortException: () => _.AbortException,
            AnnotationEditorLayer: () => E.AnnotationEditorLayer,
            AnnotationEditorParamsType: () => _.AnnotationEditorParamsType,
            AnnotationEditorType: () => _.AnnotationEditorType,
            AnnotationEditorUIManager: () => v.AnnotationEditorUIManager,
            AnnotationLayer: () => r.AnnotationLayer,
            AnnotationMode: () => _.AnnotationMode,
            CMapCompressionType: () => _.CMapCompressionType,
            ColorPicker: () => c.ColorPicker,
            DOMSVGFactory: () => P.DOMSVGFactory,
            DrawLayer: () => l.DrawLayer,
            FeatureTest: () => _.FeatureTest,
            GlobalWorkerOptions: () => b.GlobalWorkerOptions,
            ImageKind: () => _.ImageKind,
            InvalidPDFException: () => _.InvalidPDFException,
            MissingPDFException: () => _.MissingPDFException,
            OPS: () => _.OPS,
            Outliner: () => s.Outliner,
            PDFDataRangeTransport: () => G.PDFDataRangeTransport,
            PDFDateString: () => P.PDFDateString,
            PDFWorker: () => G.PDFWorker,
            PasswordResponses: () => _.PasswordResponses,
            PermissionFlag: () => _.PermissionFlag,
            PixelsPerInch: () => P.PixelsPerInch,
            RenderingCancelledException: () => P.RenderingCancelledException,
            UnexpectedResponseException: () => _.UnexpectedResponseException,
            Util: () => _.Util,
            VerbosityLevel: () => _.VerbosityLevel,
            XfaLayer: () => g.XfaLayer,
            build: () => G.build,
            createValidAbsoluteUrl: () => _.createValidAbsoluteUrl,
            fetchData: () => P.fetchData,
            getDocument: () => G.getDocument,
            getFilenameFromUrl: () => P.getFilenameFromUrl,
            getPdfFilenameFromUrl: () => P.getPdfFilenameFromUrl,
            getXfaPageViewport: () => P.getXfaPageViewport,
            isDataScheme: () => P.isDataScheme,
            isPdfFile: () => P.isPdfFile,
            noContextMenu: () => P.noContextMenu,
            normalizeUnicode: () => _.normalizeUnicode,
            renderTextLayer: () => C.renderTextLayer,
            setLayerDimensions: () => P.setLayerDimensions,
            shadow: () => _.shadow,
            updateTextLayer: () => C.updateTextLayer,
            version: () => G.version
          });
          var _ = $(292), G = $(831), P = $(419), C = $(814), E = $(731), v = $(830), r = $(976), c = $(259), l = $(47), b = $(164), s = $(61), g = $(284), t = w([
            G
          ]);
          G = (t.then ? (await t)() : t)[0];
          const i = "4.2.67", u = "49b388101";
          z();
        } catch (i) {
          z(i);
        }
      });
    },
    178: (ct, st, $) => {
      var _P_instances, t_fn, e_fn, s_fn;
      $.d(st, {
        MessageHandler: () => P
      });
      var w = $(292);
      const z = {
        DATA: 1,
        ERROR: 2
      }, _ = {
        CANCEL: 1,
        CANCEL_COMPLETE: 2,
        CLOSE: 3,
        ENQUEUE: 4,
        ERROR: 5,
        PULL: 6,
        PULL_COMPLETE: 7,
        START_COMPLETE: 8
      };
      function G(C) {
        switch (C instanceof Error || typeof C == "object" && C !== null || (0, w.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), C.name) {
          case "AbortException":
            return new w.AbortException(C.message);
          case "MissingPDFException":
            return new w.MissingPDFException(C.message);
          case "PasswordException":
            return new w.PasswordException(C.message, C.code);
          case "UnexpectedResponseException":
            return new w.UnexpectedResponseException(C.message, C.status);
          case "UnknownErrorException":
            return new w.UnknownErrorException(C.message, C.details);
          default:
            return new w.UnknownErrorException(C.message, C.toString());
        }
      }
      class P {
        constructor(E, v, r) {
          __privateAdd(this, _P_instances);
          this.sourceName = E, this.targetName = v, this.comObj = r, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (c) => {
            const l = c.data;
            if (l.targetName !== this.sourceName) return;
            if (l.stream) {
              __privateMethod(this, _P_instances, e_fn).call(this, l);
              return;
            }
            if (l.callback) {
              const s = l.callbackId, g = this.callbackCapabilities[s];
              if (!g) throw new Error(`Cannot resolve callback ${s}`);
              if (delete this.callbackCapabilities[s], l.callback === z.DATA) g.resolve(l.data);
              else if (l.callback === z.ERROR) g.reject(G(l.reason));
              else throw new Error("Unexpected callback case");
              return;
            }
            const b = this.actionHandler[l.action];
            if (!b) throw new Error(`Unknown action from worker: ${l.action}`);
            if (l.callbackId) {
              const s = this.sourceName, g = l.sourceName;
              new Promise(function(t) {
                t(b(l.data));
              }).then(function(t) {
                r.postMessage({
                  sourceName: s,
                  targetName: g,
                  callback: z.DATA,
                  callbackId: l.callbackId,
                  data: t
                });
              }, function(t) {
                r.postMessage({
                  sourceName: s,
                  targetName: g,
                  callback: z.ERROR,
                  callbackId: l.callbackId,
                  reason: G(t)
                });
              });
              return;
            }
            if (l.streamId) {
              __privateMethod(this, _P_instances, t_fn).call(this, l);
              return;
            }
            b(l.data);
          }, r.addEventListener("message", this._onComObjOnMessage);
        }
        on(E, v) {
          const r = this.actionHandler;
          if (r[E]) throw new Error(`There is already an actionName called "${E}"`);
          r[E] = v;
        }
        send(E, v, r) {
          this.comObj.postMessage({
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: E,
            data: v
          }, r);
        }
        sendWithPromise(E, v, r) {
          const c = this.callbackId++, l = Promise.withResolvers();
          this.callbackCapabilities[c] = l;
          try {
            this.comObj.postMessage({
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: E,
              callbackId: c,
              data: v
            }, r);
          } catch (b) {
            l.reject(b);
          }
          return l.promise;
        }
        sendWithStream(E, v, r, c) {
          const l = this.streamId++, b = this.sourceName, s = this.targetName, g = this.comObj;
          return new ReadableStream({
            start: (t) => {
              const i = Promise.withResolvers();
              return this.streamControllers[l] = {
                controller: t,
                startCall: i,
                pullCall: null,
                cancelCall: null,
                isClosed: false
              }, g.postMessage({
                sourceName: b,
                targetName: s,
                action: E,
                streamId: l,
                data: v,
                desiredSize: t.desiredSize
              }, c), i.promise;
            },
            pull: (t) => {
              const i = Promise.withResolvers();
              return this.streamControllers[l].pullCall = i, g.postMessage({
                sourceName: b,
                targetName: s,
                stream: _.PULL,
                streamId: l,
                desiredSize: t.desiredSize
              }), i.promise;
            },
            cancel: (t) => {
              (0, w.assert)(t instanceof Error, "cancel must have a valid reason");
              const i = Promise.withResolvers();
              return this.streamControllers[l].cancelCall = i, this.streamControllers[l].isClosed = true, g.postMessage({
                sourceName: b,
                targetName: s,
                stream: _.CANCEL,
                streamId: l,
                reason: G(t)
              }), i.promise;
            }
          }, r);
        }
        destroy() {
          this.comObj.removeEventListener("message", this._onComObjOnMessage);
        }
      }
      _P_instances = new WeakSet();
      t_fn = function(E) {
        const v = E.streamId, r = this.sourceName, c = E.sourceName, l = this.comObj, b = this, s = this.actionHandler[E.action], g = {
          enqueue(t, i = 1, u) {
            if (this.isCancelled) return;
            const p = this.desiredSize;
            this.desiredSize -= i, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), l.postMessage({
              sourceName: r,
              targetName: c,
              stream: _.ENQUEUE,
              streamId: v,
              chunk: t
            }, u);
          },
          close() {
            this.isCancelled || (this.isCancelled = true, l.postMessage({
              sourceName: r,
              targetName: c,
              stream: _.CLOSE,
              streamId: v
            }), delete b.streamSinks[v]);
          },
          error(t) {
            (0, w.assert)(t instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = true, l.postMessage({
              sourceName: r,
              targetName: c,
              stream: _.ERROR,
              streamId: v,
              reason: G(t)
            }));
          },
          sinkCapability: Promise.withResolvers(),
          onPull: null,
          onCancel: null,
          isCancelled: false,
          desiredSize: E.desiredSize,
          ready: null
        };
        g.sinkCapability.resolve(), g.ready = g.sinkCapability.promise, this.streamSinks[v] = g, new Promise(function(t) {
          t(s(E.data, g));
        }).then(function() {
          l.postMessage({
            sourceName: r,
            targetName: c,
            stream: _.START_COMPLETE,
            streamId: v,
            success: true
          });
        }, function(t) {
          l.postMessage({
            sourceName: r,
            targetName: c,
            stream: _.START_COMPLETE,
            streamId: v,
            reason: G(t)
          });
        });
      };
      e_fn = function(E) {
        const v = E.streamId, r = this.sourceName, c = E.sourceName, l = this.comObj, b = this.streamControllers[v], s = this.streamSinks[v];
        switch (E.stream) {
          case _.START_COMPLETE:
            E.success ? b.startCall.resolve() : b.startCall.reject(G(E.reason));
            break;
          case _.PULL_COMPLETE:
            E.success ? b.pullCall.resolve() : b.pullCall.reject(G(E.reason));
            break;
          case _.PULL:
            if (!s) {
              l.postMessage({
                sourceName: r,
                targetName: c,
                stream: _.PULL_COMPLETE,
                streamId: v,
                success: true
              });
              break;
            }
            s.desiredSize <= 0 && E.desiredSize > 0 && s.sinkCapability.resolve(), s.desiredSize = E.desiredSize, new Promise(function(g) {
              var _a;
              g((_a = s.onPull) == null ? void 0 : _a.call(s));
            }).then(function() {
              l.postMessage({
                sourceName: r,
                targetName: c,
                stream: _.PULL_COMPLETE,
                streamId: v,
                success: true
              });
            }, function(g) {
              l.postMessage({
                sourceName: r,
                targetName: c,
                stream: _.PULL_COMPLETE,
                streamId: v,
                reason: G(g)
              });
            });
            break;
          case _.ENQUEUE:
            if ((0, w.assert)(b, "enqueue should have stream controller"), b.isClosed) break;
            b.controller.enqueue(E.chunk);
            break;
          case _.CLOSE:
            if ((0, w.assert)(b, "close should have stream controller"), b.isClosed) break;
            b.isClosed = true, b.controller.close(), __privateMethod(this, _P_instances, s_fn).call(this, b, v);
            break;
          case _.ERROR:
            (0, w.assert)(b, "error should have stream controller"), b.controller.error(G(E.reason)), __privateMethod(this, _P_instances, s_fn).call(this, b, v);
            break;
          case _.CANCEL_COMPLETE:
            E.success ? b.cancelCall.resolve() : b.cancelCall.reject(G(E.reason)), __privateMethod(this, _P_instances, s_fn).call(this, b, v);
            break;
          case _.CANCEL:
            if (!s) break;
            new Promise(function(g) {
              var _a;
              g((_a = s.onCancel) == null ? void 0 : _a.call(s, G(E.reason)));
            }).then(function() {
              l.postMessage({
                sourceName: r,
                targetName: c,
                stream: _.CANCEL_COMPLETE,
                streamId: v,
                success: true
              });
            }, function(g) {
              l.postMessage({
                sourceName: r,
                targetName: c,
                stream: _.CANCEL_COMPLETE,
                streamId: v,
                reason: G(g)
              });
            }), s.sinkCapability.reject(G(E.reason)), s.isCancelled = true, delete this.streamSinks[v];
            break;
          default:
            throw new Error("Unexpected stream case");
        }
      };
      s_fn = async function(E, v) {
        var _a, _b, _c;
        await Promise.allSettled([
          (_a = E.startCall) == null ? void 0 : _a.promise,
          (_b = E.pullCall) == null ? void 0 : _b.promise,
          (_c = E.cancelCall) == null ? void 0 : _c.promise
        ]), delete this.streamControllers[v];
      };
    },
    651: (ct, st, $) => {
      $.d(st, {
        MurmurHash3_64: () => G
      });
      const w = 3285377520, z = 4294901760, _ = 65535;
      class G {
        constructor(C) {
          this.h1 = C ? C & 4294967295 : w, this.h2 = C ? C & 4294967295 : w;
        }
        update(C) {
          let E, v;
          if (typeof C == "string") {
            E = new Uint8Array(C.length * 2), v = 0;
            for (let S = 0, L = C.length; S < L; S++) {
              const M = C.charCodeAt(S);
              M <= 255 ? E[v++] = M : (E[v++] = M >>> 8, E[v++] = M & 255);
            }
          } else if (ArrayBuffer.isView(C)) E = C.slice(), v = E.byteLength;
          else throw new Error("Invalid data format, must be a string or TypedArray.");
          const r = v >> 2, c = v - r * 4, l = new Uint32Array(E.buffer, 0, r);
          let b = 0, s = 0, g = this.h1, t = this.h2;
          const i = 3432918353, u = 461845907, p = i & _, y = u & _;
          for (let S = 0; S < r; S++) S & 1 ? (b = l[S], b = b * i & z | b * p & _, b = b << 15 | b >>> 17, b = b * u & z | b * y & _, g ^= b, g = g << 13 | g >>> 19, g = g * 5 + 3864292196) : (s = l[S], s = s * i & z | s * p & _, s = s << 15 | s >>> 17, s = s * u & z | s * y & _, t ^= s, t = t << 13 | t >>> 19, t = t * 5 + 3864292196);
          switch (b = 0, c) {
            case 3:
              b ^= E[r * 4 + 2] << 16;
            case 2:
              b ^= E[r * 4 + 1] << 8;
            case 1:
              b ^= E[r * 4], b = b * i & z | b * p & _, b = b << 15 | b >>> 17, b = b * u & z | b * y & _, r & 1 ? g ^= b : t ^= b;
          }
          this.h1 = g, this.h2 = t;
        }
        hexdigest() {
          let C = this.h1, E = this.h2;
          return C ^= E >>> 1, C = C * 3981806797 & z | C * 36045 & _, E = E * 4283543511 & z | ((E << 16 | C >>> 16) * 2950163797 & z) >>> 16, C ^= E >>> 1, C = C * 444984403 & z | C * 60499 & _, E = E * 3301882366 & z | ((E << 16 | C >>> 16) * 3120437893 & z) >>> 16, C ^= E >>> 1, (C >>> 0).toString(16).padStart(8, "0") + (E >>> 0).toString(16).padStart(8, "0");
        }
      }
    },
    292: (ct, st, $) => {
      var _o_static, t_fn, e_fn;
      $.d(st, {
        AbortException: () => dt,
        AnnotationBorderStyleType: () => t,
        AnnotationEditorParamsType: () => c,
        AnnotationEditorPrefix: () => v,
        AnnotationEditorType: () => r,
        AnnotationMode: () => E,
        AnnotationPrefix: () => R,
        AnnotationType: () => g,
        BaseException: () => V,
        CMapCompressionType: () => u,
        FONT_IDENTITY_MATRIX: () => _,
        FeatureTest: () => n,
        FontRenderOps: () => D,
        FormatError: () => pt,
        IDENTITY_MATRIX: () => z,
        ImageKind: () => s,
        InvalidPDFException: () => Z,
        LINE_FACTOR: () => P,
        MAX_IMAGE_SIZE_TO_CACHE: () => G,
        MissingPDFException: () => at,
        OPS: () => p,
        PasswordException: () => Y,
        PasswordResponses: () => y,
        PermissionFlag: () => l,
        RenderingIntentFlag: () => C,
        TextRenderingMode: () => b,
        UnexpectedResponseException: () => lt,
        UnknownErrorException: () => tt,
        Util: () => o,
        VerbosityLevel: () => i,
        assert: () => q,
        bytesToString: () => ot,
        createValidAbsoluteUrl: () => j,
        getUuid: () => k,
        getVerbosityLevel: () => M,
        info: () => N,
        isNodeJS: () => w,
        normalizeUnicode: () => x,
        objectFromMap: () => m,
        setVerbosityLevel: () => L,
        shadow: () => O,
        string32: () => et,
        stringToBytes: () => ut,
        unreachable: () => B,
        warn: () => H
      });
      const w = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), z = [
        1,
        0,
        0,
        1,
        0,
        0
      ], _ = [
        1e-3,
        0,
        0,
        1e-3,
        0,
        0
      ], G = 1e7, P = 1.35, C = {
        ANY: 1,
        DISPLAY: 2,
        PRINT: 4,
        SAVE: 8,
        ANNOTATIONS_FORMS: 16,
        ANNOTATIONS_STORAGE: 32,
        ANNOTATIONS_DISABLE: 64,
        OPLIST: 256
      }, E = {
        DISABLE: 0,
        ENABLE: 1,
        ENABLE_FORMS: 2,
        ENABLE_STORAGE: 3
      }, v = "pdfjs_internal_editor_", r = {
        DISABLE: -1,
        NONE: 0,
        FREETEXT: 3,
        HIGHLIGHT: 9,
        STAMP: 13,
        INK: 15
      }, c = {
        RESIZE: 1,
        CREATE: 2,
        FREETEXT_SIZE: 11,
        FREETEXT_COLOR: 12,
        FREETEXT_OPACITY: 13,
        INK_COLOR: 21,
        INK_THICKNESS: 22,
        INK_OPACITY: 23,
        HIGHLIGHT_COLOR: 31,
        HIGHLIGHT_DEFAULT_COLOR: 32,
        HIGHLIGHT_THICKNESS: 33,
        HIGHLIGHT_FREE: 34,
        HIGHLIGHT_SHOW_ALL: 35
      }, l = {
        PRINT: 4,
        MODIFY_CONTENTS: 8,
        COPY: 16,
        MODIFY_ANNOTATIONS: 32,
        FILL_INTERACTIVE_FORMS: 256,
        COPY_FOR_ACCESSIBILITY: 512,
        ASSEMBLE: 1024,
        PRINT_HIGH_QUALITY: 2048
      }, b = {
        FILL: 0,
        STROKE: 1,
        FILL_STROKE: 2,
        INVISIBLE: 3,
        FILL_ADD_TO_PATH: 4,
        STROKE_ADD_TO_PATH: 5,
        FILL_STROKE_ADD_TO_PATH: 6,
        ADD_TO_PATH: 7,
        FILL_STROKE_MASK: 3,
        ADD_TO_PATH_FLAG: 4
      }, s = {
        GRAYSCALE_1BPP: 1,
        RGB_24BPP: 2,
        RGBA_32BPP: 3
      }, g = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26
      }, t = {
        SOLID: 1,
        DASHED: 2,
        BEVELED: 3,
        INSET: 4,
        UNDERLINE: 5
      }, i = {
        ERRORS: 0,
        WARNINGS: 1,
        INFOS: 5
      }, u = {
        NONE: 0,
        BINARY: 1
      }, p = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91
      }, y = {
        NEED_PASSWORD: 1,
        INCORRECT_PASSWORD: 2
      };
      let S = i.WARNINGS;
      function L(I) {
        Number.isInteger(I) && (S = I);
      }
      function M() {
        return S;
      }
      function N(I) {
        S >= i.INFOS && console.log(`Info: ${I}`);
      }
      function H(I) {
        S >= i.WARNINGS && console.log(`Warning: ${I}`);
      }
      function B(I) {
        throw new Error(I);
      }
      function q(I, F) {
        I || B(F);
      }
      function nt(I) {
        switch (I == null ? void 0 : I.protocol) {
          case "http:":
          case "https:":
          case "ftp:":
          case "mailto:":
          case "tel:":
            return true;
          default:
            return false;
        }
      }
      function j(I, F = null, T = null) {
        var _a;
        if (!I) return null;
        try {
          if (T && typeof I == "string" && (T.addDefaultProtocol && I.startsWith("www.") && ((_a = I.match(/\./g)) == null ? void 0 : _a.length) >= 2 && (I = `http://${I}`), T.tryConvertEncoding)) try {
            I = a(I);
          } catch {
          }
          const U = F ? new URL(I, F) : new URL(I);
          if (nt(U)) return U;
        } catch {
        }
        return null;
      }
      function O(I, F, T, U = false) {
        return Object.defineProperty(I, F, {
          value: T,
          enumerable: !U,
          configurable: true,
          writable: false
        }), T;
      }
      const V = function() {
        function F(T, U) {
          this.constructor === F && B("Cannot initialize BaseException."), this.message = T, this.name = U;
        }
        return F.prototype = new Error(), F.constructor = F, F;
      }();
      class Y extends V {
        constructor(F, T) {
          super(F, "PasswordException"), this.code = T;
        }
      }
      class tt extends V {
        constructor(F, T) {
          super(F, "UnknownErrorException"), this.details = T;
        }
      }
      class Z extends V {
        constructor(F) {
          super(F, "InvalidPDFException");
        }
      }
      class at extends V {
        constructor(F) {
          super(F, "MissingPDFException");
        }
      }
      class lt extends V {
        constructor(F, T) {
          super(F, "UnexpectedResponseException"), this.status = T;
        }
      }
      class pt extends V {
        constructor(F) {
          super(F, "FormatError");
        }
      }
      class dt extends V {
        constructor(F) {
          super(F, "AbortException");
        }
      }
      function ot(I) {
        (typeof I != "object" || (I == null ? void 0 : I.length) === void 0) && B("Invalid argument for bytesToString");
        const F = I.length, T = 8192;
        if (F < T) return String.fromCharCode.apply(null, I);
        const U = [];
        for (let K = 0; K < F; K += T) {
          const X = Math.min(K + T, F), W = I.subarray(K, X);
          U.push(String.fromCharCode.apply(null, W));
        }
        return U.join("");
      }
      function ut(I) {
        typeof I != "string" && B("Invalid argument for stringToBytes");
        const F = I.length, T = new Uint8Array(F);
        for (let U = 0; U < F; ++U) T[U] = I.charCodeAt(U) & 255;
        return T;
      }
      function et(I) {
        return String.fromCharCode(I >> 24 & 255, I >> 16 & 255, I >> 8 & 255, I & 255);
      }
      function m(I) {
        const F = /* @__PURE__ */ Object.create(null);
        for (const [T, U] of I) F[T] = U;
        return F;
      }
      function h() {
        const I = new Uint8Array(4);
        return I[0] = 1, new Uint32Array(I.buffer, 0, 1)[0] === 1;
      }
      function e() {
        try {
          return new Function(""), true;
        } catch {
          return false;
        }
      }
      class n {
        static get isLittleEndian() {
          return O(this, "isLittleEndian", h());
        }
        static get isEvalSupported() {
          return O(this, "isEvalSupported", e());
        }
        static get isOffscreenCanvasSupported() {
          return O(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
        }
        static get platform() {
          return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? O(this, "platform", {
            isMac: navigator.platform.includes("Mac")
          }) : O(this, "platform", {
            isMac: false
          });
        }
        static get isCSSRoundSupported() {
          var _a, _b;
          return O(this, "isCSSRoundSupported", (_b = (_a = globalThis.CSS) == null ? void 0 : _a.supports) == null ? void 0 : _b.call(_a, "width: round(1.5px, 1px)"));
        }
      }
      const f = Array.from(Array(256).keys(), (I) => I.toString(16).padStart(2, "0"));
      class o {
        static makeHexColor(F, T, U) {
          return `#${f[F]}${f[T]}${f[U]}`;
        }
        static scaleMinMax(F, T) {
          let U;
          F[0] ? (F[0] < 0 && (U = T[0], T[0] = T[2], T[2] = U), T[0] *= F[0], T[2] *= F[0], F[3] < 0 && (U = T[1], T[1] = T[3], T[3] = U), T[1] *= F[3], T[3] *= F[3]) : (U = T[0], T[0] = T[1], T[1] = U, U = T[2], T[2] = T[3], T[3] = U, F[1] < 0 && (U = T[1], T[1] = T[3], T[3] = U), T[1] *= F[1], T[3] *= F[1], F[2] < 0 && (U = T[0], T[0] = T[2], T[2] = U), T[0] *= F[2], T[2] *= F[2]), T[0] += F[4], T[1] += F[5], T[2] += F[4], T[3] += F[5];
        }
        static transform(F, T) {
          return [
            F[0] * T[0] + F[2] * T[1],
            F[1] * T[0] + F[3] * T[1],
            F[0] * T[2] + F[2] * T[3],
            F[1] * T[2] + F[3] * T[3],
            F[0] * T[4] + F[2] * T[5] + F[4],
            F[1] * T[4] + F[3] * T[5] + F[5]
          ];
        }
        static applyTransform(F, T) {
          const U = F[0] * T[0] + F[1] * T[2] + T[4], K = F[0] * T[1] + F[1] * T[3] + T[5];
          return [
            U,
            K
          ];
        }
        static applyInverseTransform(F, T) {
          const U = T[0] * T[3] - T[1] * T[2], K = (F[0] * T[3] - F[1] * T[2] + T[2] * T[5] - T[4] * T[3]) / U, X = (-F[0] * T[1] + F[1] * T[0] + T[4] * T[1] - T[5] * T[0]) / U;
          return [
            K,
            X
          ];
        }
        static getAxialAlignedBoundingBox(F, T) {
          const U = this.applyTransform(F, T), K = this.applyTransform(F.slice(2, 4), T), X = this.applyTransform([
            F[0],
            F[3]
          ], T), W = this.applyTransform([
            F[2],
            F[1]
          ], T);
          return [
            Math.min(U[0], K[0], X[0], W[0]),
            Math.min(U[1], K[1], X[1], W[1]),
            Math.max(U[0], K[0], X[0], W[0]),
            Math.max(U[1], K[1], X[1], W[1])
          ];
        }
        static inverseTransform(F) {
          const T = F[0] * F[3] - F[1] * F[2];
          return [
            F[3] / T,
            -F[1] / T,
            -F[2] / T,
            F[0] / T,
            (F[2] * F[5] - F[4] * F[3]) / T,
            (F[4] * F[1] - F[5] * F[0]) / T
          ];
        }
        static singularValueDecompose2dScale(F) {
          const T = [
            F[0],
            F[2],
            F[1],
            F[3]
          ], U = F[0] * T[0] + F[1] * T[2], K = F[0] * T[1] + F[1] * T[3], X = F[2] * T[0] + F[3] * T[2], W = F[2] * T[1] + F[3] * T[3], rt = (U + W) / 2, J = Math.sqrt((U + W) ** 2 - 4 * (U * W - X * K)) / 2, Q = rt + J || 1, it = rt - J || 1;
          return [
            Math.sqrt(Q),
            Math.sqrt(it)
          ];
        }
        static normalizeRect(F) {
          const T = F.slice(0);
          return F[0] > F[2] && (T[0] = F[2], T[2] = F[0]), F[1] > F[3] && (T[1] = F[3], T[3] = F[1]), T;
        }
        static intersect(F, T) {
          const U = Math.max(Math.min(F[0], F[2]), Math.min(T[0], T[2])), K = Math.min(Math.max(F[0], F[2]), Math.max(T[0], T[2]));
          if (U > K) return null;
          const X = Math.max(Math.min(F[1], F[3]), Math.min(T[1], T[3])), W = Math.min(Math.max(F[1], F[3]), Math.max(T[1], T[3]));
          return X > W ? null : [
            U,
            X,
            K,
            W
          ];
        }
        static bezierBoundingBox(F, T, U, K, X, W, rt, J, Q) {
          return Q ? (Q[0] = Math.min(Q[0], F, rt), Q[1] = Math.min(Q[1], T, J), Q[2] = Math.max(Q[2], F, rt), Q[3] = Math.max(Q[3], T, J)) : Q = [
            Math.min(F, rt),
            Math.min(T, J),
            Math.max(F, rt),
            Math.max(T, J)
          ], __privateMethod(this, _o_static, e_fn).call(this, F, U, X, rt, T, K, W, J, 3 * (-F + 3 * (U - X) + rt), 6 * (F - 2 * U + X), 3 * (U - F), Q), __privateMethod(this, _o_static, e_fn).call(this, F, U, X, rt, T, K, W, J, 3 * (-T + 3 * (K - W) + J), 6 * (T - 2 * K + W), 3 * (K - T), Q), Q;
        }
      }
      _o_static = new WeakSet();
      t_fn = function(F, T, U, K, X, W, rt, J, Q, it) {
        if (Q <= 0 || Q >= 1) return;
        const ht = 1 - Q, gt = Q * Q, bt = gt * Q, At = ht * (ht * (ht * F + 3 * Q * T) + 3 * gt * U) + bt * K, mt = ht * (ht * (ht * X + 3 * Q * W) + 3 * gt * rt) + bt * J;
        it[0] = Math.min(it[0], At), it[1] = Math.min(it[1], mt), it[2] = Math.max(it[2], At), it[3] = Math.max(it[3], mt);
      };
      e_fn = function(F, T, U, K, X, W, rt, J, Q, it, ht, gt) {
        if (Math.abs(Q) < 1e-12) {
          Math.abs(it) >= 1e-12 && __privateMethod(this, _o_static, t_fn).call(this, F, T, U, K, X, W, rt, J, -ht / it, gt);
          return;
        }
        const bt = it ** 2 - 4 * ht * Q;
        if (bt < 0) return;
        const At = Math.sqrt(bt), mt = 2 * Q;
        __privateMethod(this, _o_static, t_fn).call(this, F, T, U, K, X, W, rt, J, (-it + At) / mt, gt), __privateMethod(this, _o_static, t_fn).call(this, F, T, U, K, X, W, rt, J, (-it - At) / mt, gt);
      };
      __privateAdd(o, _o_static);
      function a(I) {
        return decodeURIComponent(escape(I));
      }
      let d = null, A = null;
      function x(I) {
        return d || (d = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, A = /* @__PURE__ */ new Map([
          [
            "\uFB05",
            "\u017Ft"
          ]
        ])), I.replaceAll(d, (F, T, U) => T ? T.normalize("NFKC") : A.get(U));
      }
      function k() {
        if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function") return crypto.randomUUID();
        const I = new Uint8Array(32);
        if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function") crypto.getRandomValues(I);
        else for (let F = 0; F < 32; F++) I[F] = Math.floor(Math.random() * 255);
        return ot(I);
      }
      const R = "pdfjs_internal_id_", D = {
        BEZIER_CURVE_TO: 0,
        MOVE_TO: 1,
        LINE_TO: 2,
        QUADRATIC_CURVE_TO: 3,
        RESTORE: 4,
        SAVE: 5,
        SCALE: 6,
        TRANSFORM: 7,
        TRANSLATE: 8
      };
    }
  }, Ut = {};
  function Pt(ct) {
    var st = Ut[ct];
    if (st !== void 0) return st.exports;
    var $ = Ut[ct] = {
      exports: {}
    };
    return Xt[ct]($, $.exports, Pt), $.exports;
  }
  (() => {
    var ct = typeof Symbol == "function" ? Symbol("webpack queues") : "__webpack_queues__", st = typeof Symbol == "function" ? Symbol("webpack exports") : "__webpack_exports__", $ = typeof Symbol == "function" ? Symbol("webpack error") : "__webpack_error__", w = (_) => {
      _ && _.d < 1 && (_.d = 1, _.forEach((G) => G.r--), _.forEach((G) => G.r-- ? G.r++ : G()));
    }, z = (_) => _.map((G) => {
      if (G !== null && typeof G == "object") {
        if (G[ct]) return G;
        if (G.then) {
          var P = [];
          P.d = 0, G.then((v) => {
            C[st] = v, w(P);
          }, (v) => {
            C[$] = v, w(P);
          });
          var C = {};
          return C[ct] = (v) => v(P), C;
        }
      }
      var E = {};
      return E[ct] = (v) => {
      }, E[st] = G, E;
    });
    Pt.a = (_, G, P) => {
      var C;
      P && ((C = []).d = -1);
      var E = /* @__PURE__ */ new Set(), v = _.exports, r, c, l, b = new Promise((s, g) => {
        l = g, c = s;
      });
      b[st] = v, b[ct] = (s) => (C && s(C), E.forEach(s), b.catch((g) => {
      })), _.exports = b, G((s) => {
        r = z(s);
        var g, t = () => r.map((u) => {
          if (u[$]) throw u[$];
          return u[st];
        }), i = new Promise((u) => {
          g = () => u(t), g.r = 0;
          var p = (y) => y !== C && !E.has(y) && (E.add(y), y && !y.d && (g.r++, y.push(g)));
          r.map((y) => y[ct](p));
        });
        return g.r ? i : t();
      }, (s) => (s ? l(b[$] = s) : c(v), w(C))), C && C.d < 0 && (C.d = 0);
    };
  })();
  Pt.d = (ct, st) => {
    for (var $ in st) Pt.o(st, $) && !Pt.o(ct, $) && Object.defineProperty(ct, $, {
      enumerable: true,
      get: st[$]
    });
  };
  Pt.o = (ct, st) => Object.prototype.hasOwnProperty.call(ct, st);
  var ft = Pt(228);
  ft = globalThis.pdfjsLib = await (globalThis.pdfjsLibPromise = ft);
  qt = ft.AbortException;
  Kt = ft.AnnotationEditorLayer;
  Qt = ft.AnnotationEditorParamsType;
  Jt = ft.AnnotationEditorType;
  Zt = ft.AnnotationEditorUIManager;
  te = ft.AnnotationLayer;
  ee = ft.AnnotationMode;
  se = ft.CMapCompressionType;
  ie = ft.ColorPicker;
  ne = ft.DOMSVGFactory;
  re = ft.DrawLayer;
  ae = ft.FeatureTest;
  oe = ft.GlobalWorkerOptions;
  he = ft.ImageKind;
  le = ft.InvalidPDFException;
  ce = ft.MissingPDFException;
  de = ft.OPS;
  ue = ft.Outliner;
  fe = ft.PDFDataRangeTransport;
  pe = ft.PDFDateString;
  ge = ft.PDFWorker;
  me = ft.PasswordResponses;
  be = ft.PermissionFlag;
  Ae = ft.PixelsPerInch;
  ve = ft.RenderingCancelledException;
  ye = ft.UnexpectedResponseException;
  we = ft.Util;
  Se = ft.VerbosityLevel;
  xe = ft.XfaLayer;
  Ee = ft.build;
  Te = ft.createValidAbsoluteUrl;
  Ce = ft.fetchData;
  ke = ft.getDocument;
  Re = ft.getFilenameFromUrl;
  Fe = ft.getPdfFilenameFromUrl;
  Pe = ft.getXfaPageViewport;
  Le = ft.isDataScheme;
  Me = ft.isPdfFile;
  Ie = ft.noContextMenu;
  _e = ft.normalizeUnicode;
  De = ft.renderTextLayer;
  Ne = ft.setLayerDimensions;
  Oe = ft.shadow;
  He = ft.updateTextLayer;
  Be = ft.version;
});
export {
  qt as AbortException,
  Kt as AnnotationEditorLayer,
  Qt as AnnotationEditorParamsType,
  Jt as AnnotationEditorType,
  Zt as AnnotationEditorUIManager,
  te as AnnotationLayer,
  ee as AnnotationMode,
  se as CMapCompressionType,
  ie as ColorPicker,
  ne as DOMSVGFactory,
  re as DrawLayer,
  ae as FeatureTest,
  oe as GlobalWorkerOptions,
  he as ImageKind,
  le as InvalidPDFException,
  ce as MissingPDFException,
  de as OPS,
  ue as Outliner,
  fe as PDFDataRangeTransport,
  pe as PDFDateString,
  ge as PDFWorker,
  me as PasswordResponses,
  be as PermissionFlag,
  Ae as PixelsPerInch,
  ve as RenderingCancelledException,
  ye as UnexpectedResponseException,
  we as Util,
  Se as VerbosityLevel,
  xe as XfaLayer,
  __tla,
  Ee as build,
  Te as createValidAbsoluteUrl,
  Ce as fetchData,
  ke as getDocument,
  Re as getFilenameFromUrl,
  Fe as getPdfFilenameFromUrl,
  Pe as getXfaPageViewport,
  Le as isDataScheme,
  Me as isPdfFile,
  Ie as noContextMenu,
  _e as normalizeUnicode,
  De as renderTextLayer,
  Ne as setLayerDimensions,
  Oe as shadow,
  He as updateTextLayer,
  Be as version
};
