const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/__vite-browser-external-amx3bi7R.js","assets/__vite-browser-external-9QkxpycS.js","assets/chunk-Dmt67uKV.js"])))=>i.map(i=>d[i]);
import { o as e } from "./chunk-Dmt67uKV.js";
import { t } from "./preload-helper-DhKjosWM.js";
import { t as n } from "./buffer-g2WRRFjq.js";
let c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
let __tla = (async () => {
  var r = n(), i = {
    976: ((e2, t2, n2) => {
      n2.d(t2, {
        AnnotationLayer: () => B2,
        FreeTextAnnotationElement: () => E2,
        InkAnnotationElement: () => N2,
        StampAnnotationElement: () => R2
      });
      var r2 = n2(292), i2 = n2(419), a2 = n2(792);
      function o2(e3) {
        return Math.floor(Math.max(0, Math.min(1, e3)) * 255).toString(16).padStart(2, `0`);
      }
      function s2(e3) {
        return Math.max(0, Math.min(255, 255 * e3));
      }
      class c2 {
        static CMYK_G([e3, t3, n3, r3]) {
          return [
            `G`,
            1 - Math.min(1, 0.3 * e3 + 0.59 * n3 + 0.11 * t3 + r3)
          ];
        }
        static G_CMYK([e3]) {
          return [
            `CMYK`,
            0,
            0,
            0,
            1 - e3
          ];
        }
        static G_RGB([e3]) {
          return [
            `RGB`,
            e3,
            e3,
            e3
          ];
        }
        static G_rgb([e3]) {
          return e3 = s2(e3), [
            e3,
            e3,
            e3
          ];
        }
        static G_HTML([e3]) {
          let t3 = o2(e3);
          return `#${t3}${t3}${t3}`;
        }
        static RGB_G([e3, t3, n3]) {
          return [
            `G`,
            0.3 * e3 + 0.59 * t3 + 0.11 * n3
          ];
        }
        static RGB_rgb(e3) {
          return e3.map(s2);
        }
        static RGB_HTML(e3) {
          return `#${e3.map(o2).join(``)}`;
        }
        static T_HTML() {
          return `#00000000`;
        }
        static T_rgb() {
          return [
            null
          ];
        }
        static CMYK_RGB([e3, t3, n3, r3]) {
          return [
            `RGB`,
            1 - Math.min(1, e3 + r3),
            1 - Math.min(1, n3 + r3),
            1 - Math.min(1, t3 + r3)
          ];
        }
        static CMYK_rgb([e3, t3, n3, r3]) {
          return [
            s2(1 - Math.min(1, e3 + r3)),
            s2(1 - Math.min(1, n3 + r3)),
            s2(1 - Math.min(1, t3 + r3))
          ];
        }
        static CMYK_HTML(e3) {
          let t3 = this.CMYK_RGB(e3).slice(1);
          return this.RGB_HTML(t3);
        }
        static RGB_CMYK([e3, t3, n3]) {
          let r3 = 1 - e3, i3 = 1 - t3, a3 = 1 - n3;
          return [
            `CMYK`,
            r3,
            i3,
            a3,
            Math.min(r3, i3, a3)
          ];
        }
      }
      var l2 = n2(284);
      let u2 = 1e3, d2 = /* @__PURE__ */ new WeakSet();
      function f2(e3) {
        return {
          width: e3[2] - e3[0],
          height: e3[3] - e3[1]
        };
      }
      class p2 {
        static create(e3) {
          switch (e3.data.annotationType) {
            case r2.AnnotationType.LINK:
              return new h2(e3);
            case r2.AnnotationType.TEXT:
              return new g2(e3);
            case r2.AnnotationType.WIDGET:
              switch (e3.data.fieldType) {
                case `Tx`:
                  return new v2(e3);
                case `Btn`:
                  return e3.data.radioButton ? new x2(e3) : e3.data.checkBox ? new b2(e3) : new S2(e3);
                case `Ch`:
                  return new C2(e3);
                case `Sig`:
                  return new y2(e3);
              }
              return new _2(e3);
            case r2.AnnotationType.POPUP:
              return new w2(e3);
            case r2.AnnotationType.FREETEXT:
              return new E2(e3);
            case r2.AnnotationType.LINE:
              return new D2(e3);
            case r2.AnnotationType.SQUARE:
              return new O2(e3);
            case r2.AnnotationType.CIRCLE:
              return new k2(e3);
            case r2.AnnotationType.POLYLINE:
              return new A2(e3);
            case r2.AnnotationType.CARET:
              return new M2(e3);
            case r2.AnnotationType.INK:
              return new N2(e3);
            case r2.AnnotationType.POLYGON:
              return new j2(e3);
            case r2.AnnotationType.HIGHLIGHT:
              return new P2(e3);
            case r2.AnnotationType.UNDERLINE:
              return new F2(e3);
            case r2.AnnotationType.SQUIGGLY:
              return new I2(e3);
            case r2.AnnotationType.STRIKEOUT:
              return new L2(e3);
            case r2.AnnotationType.STAMP:
              return new R2(e3);
            case r2.AnnotationType.FILEATTACHMENT:
              return new z2(e3);
            default:
              return new m2(e3);
          }
        }
      }
      class m2 {
        #e = null;
        #t = false;
        constructor(e3, { isRenderable: t3 = false, ignoreBorder: n3 = false, createQuadrilaterals: r3 = false } = {}) {
          this.isRenderable = t3, this.data = e3.data, this.layer = e3.layer, this.linkService = e3.linkService, this.downloadManager = e3.downloadManager, this.imageResourcesPath = e3.imageResourcesPath, this.renderForms = e3.renderForms, this.svgFactory = e3.svgFactory, this.annotationStorage = e3.annotationStorage, this.enableScripting = e3.enableScripting, this.hasJSActions = e3.hasJSActions, this._fieldObjects = e3.fieldObjects, this.parent = e3.parent, t3 && (this.container = this._createContainer(n3)), r3 && this._createQuadrilaterals();
        }
        static _hasPopupData({ titleObj: e3, contentsObj: t3, richText: n3 }) {
          return !!(e3?.str || t3?.str || n3?.str);
        }
        get hasPopupData() {
          return m2._hasPopupData(this.data);
        }
        updateEdited(e3) {
          if (!this.container) return;
          this.#e ||= {
            rect: this.data.rect.slice(0)
          };
          let { rect: t3 } = e3;
          t3 && this.#n(t3);
        }
        resetEdited() {
          this.#e &&= (this.#n(this.#e.rect), null);
        }
        #n(e3) {
          let { container: { style: t3 }, data: { rect: n3, rotation: r3 }, parent: { viewport: { rawDims: { pageWidth: i3, pageHeight: a3, pageX: o3, pageY: s3 } } } } = this;
          n3?.splice(0, 4, ...e3);
          let { width: c3, height: l3 } = f2(e3);
          t3.left = `${100 * (e3[0] - o3) / i3}%`, t3.top = `${100 * (a3 - e3[3] + s3) / a3}%`, r3 === 0 ? (t3.width = `${100 * c3 / i3}%`, t3.height = `${100 * l3 / a3}%`) : this.setRotation(r3);
        }
        _createContainer(e3) {
          let { data: t3, parent: { page: n3, viewport: i3 } } = this, a3 = document.createElement(`section`);
          a3.setAttribute(`data-annotation-id`, t3.id), this instanceof _2 || (a3.tabIndex = u2);
          let { style: o3 } = a3;
          if (o3.zIndex = this.parent.zIndex++, t3.popupRef && a3.setAttribute(`aria-haspopup`, `dialog`), t3.alternativeText && (a3.title = t3.alternativeText), t3.noRotate && a3.classList.add(`norotate`), !t3.rect || this instanceof w2) {
            let { rotation: e4 } = t3;
            return !t3.hasOwnCanvas && e4 !== 0 && this.setRotation(e4, a3), a3;
          }
          let { width: s3, height: c3 } = f2(t3.rect);
          if (!e3 && t3.borderStyle.width > 0) {
            o3.borderWidth = `${t3.borderStyle.width}px`;
            let e4 = t3.borderStyle.horizontalCornerRadius, n4 = t3.borderStyle.verticalCornerRadius;
            switch (e4 > 0 || n4 > 0 ? o3.borderRadius = `calc(${e4}px * var(--scale-factor)) / calc(${n4}px * var(--scale-factor))` : this instanceof x2 && (o3.borderRadius = `calc(${s3}px * var(--scale-factor)) / calc(${c3}px * var(--scale-factor))`), t3.borderStyle.style) {
              case r2.AnnotationBorderStyleType.SOLID:
                o3.borderStyle = `solid`;
                break;
              case r2.AnnotationBorderStyleType.DASHED:
                o3.borderStyle = `dashed`;
                break;
              case r2.AnnotationBorderStyleType.BEVELED:
                (0, r2.warn)(`Unimplemented border style: beveled`);
                break;
              case r2.AnnotationBorderStyleType.INSET:
                (0, r2.warn)(`Unimplemented border style: inset`);
                break;
              case r2.AnnotationBorderStyleType.UNDERLINE:
                o3.borderBottomStyle = `solid`;
                break;
              default:
                break;
            }
            let i4 = t3.borderColor || null;
            i4 ? (this.#t = true, o3.borderColor = r2.Util.makeHexColor(i4[0] | 0, i4[1] | 0, i4[2] | 0)) : o3.borderWidth = 0;
          }
          let l3 = r2.Util.normalizeRect([
            t3.rect[0],
            n3.view[3] - t3.rect[1] + n3.view[1],
            t3.rect[2],
            n3.view[3] - t3.rect[3] + n3.view[1]
          ]), { pageWidth: d3, pageHeight: p3, pageX: m3, pageY: h3 } = i3.rawDims;
          o3.left = `${100 * (l3[0] - m3) / d3}%`, o3.top = `${100 * (l3[1] - h3) / p3}%`;
          let { rotation: g3 } = t3;
          return t3.hasOwnCanvas || g3 === 0 ? (o3.width = `${100 * s3 / d3}%`, o3.height = `${100 * c3 / p3}%`) : this.setRotation(g3, a3), a3;
        }
        setRotation(e3, t3 = this.container) {
          if (!this.data.rect) return;
          let { pageWidth: n3, pageHeight: r3 } = this.parent.viewport.rawDims, { width: i3, height: a3 } = f2(this.data.rect), o3, s3;
          e3 % 180 == 0 ? (o3 = 100 * i3 / n3, s3 = 100 * a3 / r3) : (o3 = 100 * a3 / n3, s3 = 100 * i3 / r3), t3.style.width = `${o3}%`, t3.style.height = `${s3}%`, t3.setAttribute(`data-main-rotation`, (360 - e3) % 360);
        }
        get _commonActions() {
          let e3 = (e4, t3, n3) => {
            let r3 = n3.detail[e4], i3 = r3[0], a3 = r3.slice(1);
            n3.target.style[t3] = c2[`${i3}_HTML`](a3), this.annotationStorage.setValue(this.data.id, {
              [t3]: c2[`${i3}_rgb`](a3)
            });
          };
          return (0, r2.shadow)(this, `_commonActions`, {
            display: (e4) => {
              let { display: t3 } = e4.detail, n3 = t3 % 2 == 1;
              this.container.style.visibility = n3 ? `hidden` : `visible`, this.annotationStorage.setValue(this.data.id, {
                noView: n3,
                noPrint: t3 === 1 || t3 === 2
              });
            },
            print: (e4) => {
              this.annotationStorage.setValue(this.data.id, {
                noPrint: !e4.detail.print
              });
            },
            hidden: (e4) => {
              let { hidden: t3 } = e4.detail;
              this.container.style.visibility = t3 ? `hidden` : `visible`, this.annotationStorage.setValue(this.data.id, {
                noPrint: t3,
                noView: t3
              });
            },
            focus: (e4) => {
              setTimeout(() => e4.target.focus({
                preventScroll: false
              }), 0);
            },
            userName: (e4) => {
              e4.target.title = e4.detail.userName;
            },
            readonly: (e4) => {
              e4.target.disabled = e4.detail.readonly;
            },
            required: (e4) => {
              this._setRequired(e4.target, e4.detail.required);
            },
            bgColor: (t3) => {
              e3(`bgColor`, `backgroundColor`, t3);
            },
            fillColor: (t3) => {
              e3(`fillColor`, `backgroundColor`, t3);
            },
            fgColor: (t3) => {
              e3(`fgColor`, `color`, t3);
            },
            textColor: (t3) => {
              e3(`textColor`, `color`, t3);
            },
            borderColor: (t3) => {
              e3(`borderColor`, `borderColor`, t3);
            },
            strokeColor: (t3) => {
              e3(`strokeColor`, `borderColor`, t3);
            },
            rotation: (e4) => {
              let t3 = e4.detail.rotation;
              this.setRotation(t3), this.annotationStorage.setValue(this.data.id, {
                rotation: t3
              });
            }
          });
        }
        _dispatchEventFromSandbox(e3, t3) {
          let n3 = this._commonActions;
          for (let r3 of Object.keys(t3.detail)) (e3[r3] || n3[r3])?.(t3);
        }
        _setDefaultPropertiesFromJS(e3) {
          if (!this.enableScripting) return;
          let t3 = this.annotationStorage.getRawValue(this.data.id);
          if (!t3) return;
          let n3 = this._commonActions;
          for (let [r3, i3] of Object.entries(t3)) {
            let a3 = n3[r3];
            a3 && (a3({
              detail: {
                [r3]: i3
              },
              target: e3
            }), delete t3[r3]);
          }
        }
        _createQuadrilaterals() {
          if (!this.container) return;
          let { quadPoints: e3 } = this.data;
          if (!e3) return;
          let [t3, n3, r3, i3] = this.data.rect;
          if (e3.length === 1) {
            let [, { x: a4, y: o4 }, { x: s4, y: c4 }] = e3[0];
            if (r3 === a4 && i3 === o4 && t3 === s4 && n3 === c4) return;
          }
          let { style: a3 } = this.container, o3;
          if (this.#t) {
            let { borderColor: e4, borderWidth: t4 } = a3;
            a3.borderWidth = 0, o3 = [
              `url('data:image/svg+xml;utf8,`,
              `<svg xmlns="http://www.w3.org/2000/svg"`,
              ` preserveAspectRatio="none" viewBox="0 0 1 1">`,
              `<g fill="transparent" stroke="${e4}" stroke-width="${t4}">`
            ], this.container.classList.add(`hasBorder`);
          }
          let s3 = r3 - t3, c3 = i3 - n3, { svgFactory: l3 } = this, u3 = l3.createElement(`svg`);
          u3.classList.add(`quadrilateralsContainer`), u3.setAttribute(`width`, 0), u3.setAttribute(`height`, 0);
          let d3 = l3.createElement(`defs`);
          u3.append(d3);
          let f3 = l3.createElement(`clipPath`), p3 = `clippath_${this.data.id}`;
          f3.setAttribute(`id`, p3), f3.setAttribute(`clipPathUnits`, `objectBoundingBox`), d3.append(f3);
          for (let [, { x: n4, y: r4 }, { x: a4, y: u4 }] of e3) {
            let e4 = l3.createElement(`rect`), d4 = (a4 - t3) / s3, p4 = (i3 - r4) / c3, m3 = (n4 - a4) / s3, h3 = (r4 - u4) / c3;
            e4.setAttribute(`x`, d4), e4.setAttribute(`y`, p4), e4.setAttribute(`width`, m3), e4.setAttribute(`height`, h3), f3.append(e4), o3?.push(`<rect vector-effect="non-scaling-stroke" x="${d4}" y="${p4}" width="${m3}" height="${h3}"/>`);
          }
          this.#t && (o3.push(`</g></svg>')`), a3.backgroundImage = o3.join(``)), this.container.append(u3), this.container.style.clipPath = `url(#${p3})`;
        }
        _createPopup() {
          let { container: e3, data: t3 } = this;
          e3.setAttribute(`aria-haspopup`, `dialog`);
          let n3 = new w2({
            data: {
              color: t3.color,
              titleObj: t3.titleObj,
              modificationDate: t3.modificationDate,
              contentsObj: t3.contentsObj,
              richText: t3.richText,
              parentRect: t3.rect,
              borderStyle: 0,
              id: `popup_${t3.id}`,
              rotation: t3.rotation
            },
            parent: this.parent,
            elements: [
              this
            ]
          });
          this.parent.div.append(n3.render());
        }
        render() {
          (0, r2.unreachable)("Abstract method `AnnotationElement.render` called");
        }
        _getElementsByName(e3, t3 = null) {
          let n3 = [];
          if (this._fieldObjects) {
            let i3 = this._fieldObjects[e3];
            if (i3) for (let { page: e4, id: a3, exportValues: o3 } of i3) {
              if (e4 === -1 || a3 === t3) continue;
              let i4 = typeof o3 == `string` ? o3 : null, s3 = document.querySelector(`[data-element-id="${a3}"]`);
              if (s3 && !d2.has(s3)) {
                (0, r2.warn)(`_getElementsByName - element not allowed: ${a3}`);
                continue;
              }
              n3.push({
                id: a3,
                exportValue: i4,
                domElement: s3
              });
            }
            return n3;
          }
          for (let r3 of document.getElementsByName(e3)) {
            let { exportValue: e4 } = r3, i3 = r3.getAttribute(`data-element-id`);
            i3 !== t3 && d2.has(r3) && n3.push({
              id: i3,
              exportValue: e4,
              domElement: r3
            });
          }
          return n3;
        }
        show() {
          this.container && (this.container.hidden = false), this.popup?.maybeShow();
        }
        hide() {
          this.container && (this.container.hidden = true), this.popup?.forceHide();
        }
        getElementsToTriggerPopup() {
          return this.container;
        }
        addHighlightArea() {
          let e3 = this.getElementsToTriggerPopup();
          if (Array.isArray(e3)) for (let t3 of e3) t3.classList.add(`highlightArea`);
          else e3.classList.add(`highlightArea`);
        }
        get _isEditable() {
          return false;
        }
        _editOnDoubleClick() {
          if (!this._isEditable) return;
          let { annotationEditorType: e3, data: { id: t3 } } = this;
          this.container.addEventListener(`dblclick`, () => {
            this.linkService.eventBus?.dispatch(`switchannotationeditormode`, {
              source: this,
              mode: e3,
              editId: t3
            });
          });
        }
      }
      class h2 extends m2 {
        constructor(e3, t3 = null) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: !!t3?.ignoreBorder,
            createQuadrilaterals: true
          }), this.isTooltipOnly = e3.data.isTooltipOnly;
        }
        render() {
          let { data: e3, linkService: t3 } = this, n3 = document.createElement(`a`);
          n3.setAttribute(`data-element-id`, e3.id);
          let r3 = false;
          return e3.url ? (t3.addLinkAttributes(n3, e3.url, e3.newWindow), r3 = true) : e3.action ? (this._bindNamedAction(n3, e3.action), r3 = true) : e3.attachment ? (this.#t(n3, e3.attachment, e3.attachmentDest), r3 = true) : e3.setOCGState ? (this.#n(n3, e3.setOCGState), r3 = true) : e3.dest ? (this._bindLink(n3, e3.dest), r3 = true) : (e3.actions && (e3.actions.Action || e3.actions[`Mouse Up`] || e3.actions[`Mouse Down`]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(n3, e3), r3 = true), e3.resetForm ? (this._bindResetFormAction(n3, e3.resetForm), r3 = true) : this.isTooltipOnly && !r3 && (this._bindLink(n3, ``), r3 = true)), this.container.classList.add(`linkAnnotation`), r3 && this.container.append(n3), this.container;
        }
        #e() {
          this.container.setAttribute(`data-internal-link`, ``);
        }
        _bindLink(e3, t3) {
          e3.href = this.linkService.getDestinationHash(t3), e3.onclick = () => (t3 && this.linkService.goToDestination(t3), false), (t3 || t3 === ``) && this.#e();
        }
        _bindNamedAction(e3, t3) {
          e3.href = this.linkService.getAnchorUrl(``), e3.onclick = () => (this.linkService.executeNamedAction(t3), false), this.#e();
        }
        #t(e3, t3, n3 = null) {
          e3.href = this.linkService.getAnchorUrl(``), e3.onclick = () => (this.downloadManager?.openOrDownloadData(t3.content, t3.filename, n3), false), this.#e();
        }
        #n(e3, t3) {
          e3.href = this.linkService.getAnchorUrl(``), e3.onclick = () => (this.linkService.executeSetOCGState(t3), false), this.#e();
        }
        _bindJSAction(e3, t3) {
          e3.href = this.linkService.getAnchorUrl(``);
          let n3 = /* @__PURE__ */ new Map([
            [
              `Action`,
              `onclick`
            ],
            [
              `Mouse Up`,
              `onmouseup`
            ],
            [
              `Mouse Down`,
              `onmousedown`
            ]
          ]);
          for (let r3 of Object.keys(t3.actions)) {
            let i3 = n3.get(r3);
            i3 && (e3[i3] = () => (this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
              source: this,
              detail: {
                id: t3.id,
                name: r3
              }
            }), false));
          }
          e3.onclick ||= () => false, this.#e();
        }
        _bindResetFormAction(e3, t3) {
          let n3 = e3.onclick;
          if (n3 || (e3.href = this.linkService.getAnchorUrl(``)), this.#e(), !this._fieldObjects) {
            (0, r2.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), n3 || (e3.onclick = () => false);
            return;
          }
          e3.onclick = () => {
            n3?.();
            let { fields: e4, refs: i3, include: a3 } = t3, o3 = [];
            if (e4.length !== 0 || i3.length !== 0) {
              let t4 = new Set(i3);
              for (let n4 of e4) {
                let e5 = this._fieldObjects[n4] || [];
                for (let { id: n5 } of e5) t4.add(n5);
              }
              for (let e5 of Object.values(this._fieldObjects)) for (let n4 of e5) t4.has(n4.id) === a3 && o3.push(n4);
            } else for (let e5 of Object.values(this._fieldObjects)) o3.push(...e5);
            let s3 = this.annotationStorage, c3 = [];
            for (let e5 of o3) {
              let { id: t4 } = e5;
              switch (c3.push(t4), e5.type) {
                case `text`: {
                  let n5 = e5.defaultValue || ``;
                  s3.setValue(t4, {
                    value: n5
                  });
                  break;
                }
                case `checkbox`:
                case `radiobutton`: {
                  let n5 = e5.defaultValue === e5.exportValues;
                  s3.setValue(t4, {
                    value: n5
                  });
                  break;
                }
                case `combobox`:
                case `listbox`: {
                  let n5 = e5.defaultValue || ``;
                  s3.setValue(t4, {
                    value: n5
                  });
                  break;
                }
                default:
                  continue;
              }
              let n4 = document.querySelector(`[data-element-id="${t4}"]`);
              if (n4) {
                if (!d2.has(n4)) {
                  (0, r2.warn)(`_bindResetFormAction - element not allowed: ${t4}`);
                  continue;
                }
              } else continue;
              n4.dispatchEvent(new Event(`resetform`));
            }
            return this.enableScripting && this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
              source: this,
              detail: {
                id: `app`,
                ids: c3,
                name: `ResetForm`
              }
            }), false;
          };
        }
      }
      class g2 extends m2 {
        constructor(e3) {
          super(e3, {
            isRenderable: true
          });
        }
        render() {
          this.container.classList.add(`textAnnotation`);
          let e3 = document.createElement(`img`);
          return e3.src = this.imageResourcesPath + `annotation-` + this.data.name.toLowerCase() + `.svg`, e3.setAttribute(`data-l10n-id`, `pdfjs-text-annotation-type`), e3.setAttribute(`data-l10n-args`, JSON.stringify({
            type: this.data.name
          })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(e3), this.container;
        }
      }
      class _2 extends m2 {
        render() {
          return this.container;
        }
        showElementAndHideCanvas(e3) {
          this.data.hasOwnCanvas && (e3.previousSibling?.nodeName === `CANVAS` && (e3.previousSibling.hidden = true), e3.hidden = false);
        }
        _getKeyModifier(e3) {
          return r2.FeatureTest.platform.isMac ? e3.metaKey : e3.ctrlKey;
        }
        _setEventListener(e3, t3, n3, r3, i3) {
          n3.includes(`mouse`) ? e3.addEventListener(n3, (e4) => {
            this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
              source: this,
              detail: {
                id: this.data.id,
                name: r3,
                value: i3(e4),
                shift: e4.shiftKey,
                modifier: this._getKeyModifier(e4)
              }
            });
          }) : e3.addEventListener(n3, (e4) => {
            if (n3 === `blur`) {
              if (!t3.focused || !e4.relatedTarget) return;
              t3.focused = false;
            } else if (n3 === `focus`) {
              if (t3.focused) return;
              t3.focused = true;
            }
            i3 && this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
              source: this,
              detail: {
                id: this.data.id,
                name: r3,
                value: i3(e4)
              }
            });
          });
        }
        _setEventListeners(e3, t3, n3, r3) {
          for (let [i3, a3] of n3) (a3 === `Action` || this.data.actions?.[a3]) && ((a3 === `Focus` || a3 === `Blur`) && (t3 ||= {
            focused: false
          }), this._setEventListener(e3, t3, i3, a3, r3), a3 === `Focus` && !this.data.actions?.Blur ? this._setEventListener(e3, t3, `blur`, `Blur`, null) : a3 === `Blur` && !this.data.actions?.Focus && this._setEventListener(e3, t3, `focus`, `Focus`, null));
        }
        _setBackgroundColor(e3) {
          let t3 = this.data.backgroundColor || null;
          e3.style.backgroundColor = t3 === null ? `transparent` : r2.Util.makeHexColor(t3[0], t3[1], t3[2]);
        }
        _setTextStyle(e3) {
          let t3 = [
            `left`,
            `center`,
            `right`
          ], { fontColor: n3 } = this.data.defaultAppearanceData, i3 = this.data.defaultAppearanceData.fontSize || 9, a3 = e3.style, o3, s3 = (e4) => Math.round(10 * e4) / 10;
          if (this.data.multiLine) {
            let e4 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), t4 = e4 / (Math.round(e4 / (r2.LINE_FACTOR * i3)) || 1);
            o3 = Math.min(i3, s3(t4 / r2.LINE_FACTOR));
          } else {
            let e4 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
            o3 = Math.min(i3, s3(e4 / r2.LINE_FACTOR));
          }
          a3.fontSize = `calc(${o3}px * var(--scale-factor))`, a3.color = r2.Util.makeHexColor(n3[0], n3[1], n3[2]), this.data.textAlignment !== null && (a3.textAlign = t3[this.data.textAlignment]);
        }
        _setRequired(e3, t3) {
          t3 ? e3.setAttribute(`required`, true) : e3.removeAttribute(`required`), e3.setAttribute(`aria-required`, t3);
        }
      }
      class v2 extends _2 {
        constructor(e3) {
          let t3 = e3.renderForms || e3.data.hasOwnCanvas || !e3.data.hasAppearance && !!e3.data.fieldValue;
          super(e3, {
            isRenderable: t3
          });
        }
        setPropertyOnSiblings(e3, t3, n3, r3) {
          let i3 = this.annotationStorage;
          for (let a3 of this._getElementsByName(e3.name, e3.id)) a3.domElement && (a3.domElement[t3] = n3), i3.setValue(a3.id, {
            [r3]: n3
          });
        }
        render() {
          let e3 = this.annotationStorage, t3 = this.data.id;
          this.container.classList.add(`textWidgetAnnotation`);
          let n3 = null;
          if (this.renderForms) {
            let r3 = e3.getValue(t3, {
              value: this.data.fieldValue
            }), i3 = r3.value || ``, a3 = e3.getValue(t3, {
              charLimit: this.data.maxLen
            }).charLimit;
            a3 && i3.length > a3 && (i3 = i3.slice(0, a3));
            let o3 = r3.formattedValue || this.data.textContent?.join(`
`) || null;
            o3 && this.data.comb && (o3 = o3.replaceAll(/\s+/g, ``));
            let s3 = {
              userValue: i3,
              formattedValue: o3,
              lastCommittedValue: null,
              commitKey: 1,
              focused: false
            };
            this.data.multiLine ? (n3 = document.createElement(`textarea`), n3.textContent = o3 ?? i3, this.data.doNotScroll && (n3.style.overflowY = `hidden`)) : (n3 = document.createElement(`input`), n3.type = `text`, n3.setAttribute(`value`, o3 ?? i3), this.data.doNotScroll && (n3.style.overflowX = `hidden`)), this.data.hasOwnCanvas && (n3.hidden = true), d2.add(n3), n3.setAttribute(`data-element-id`, t3), n3.disabled = this.data.readOnly, n3.name = this.data.fieldName, n3.tabIndex = u2, this._setRequired(n3, this.data.required), a3 && (n3.maxLength = a3), n3.addEventListener(`input`, (r4) => {
              e3.setValue(t3, {
                value: r4.target.value
              }), this.setPropertyOnSiblings(n3, `value`, r4.target.value, `value`), s3.formattedValue = null;
            }), n3.addEventListener(`resetform`, (e4) => {
              let t4 = this.data.defaultFieldValue ?? ``;
              n3.value = s3.userValue = t4, s3.formattedValue = null;
            });
            let c3 = (e4) => {
              let { formattedValue: t4 } = s3;
              t4 != null && (e4.target.value = t4), e4.target.scrollLeft = 0;
            };
            if (this.enableScripting && this.hasJSActions) {
              n3.addEventListener(`focus`, (e4) => {
                if (s3.focused) return;
                let { target: t4 } = e4;
                s3.userValue && (t4.value = s3.userValue), s3.lastCommittedValue = t4.value, s3.commitKey = 1, this.data.actions?.Focus || (s3.focused = true);
              }), n3.addEventListener(`updatefromsandbox`, (n4) => {
                this.showElementAndHideCanvas(n4.target), this._dispatchEventFromSandbox({
                  value(n5) {
                    s3.userValue = n5.detail.value ?? ``, e3.setValue(t3, {
                      value: s3.userValue.toString()
                    }), n5.target.value = s3.userValue;
                  },
                  formattedValue(n5) {
                    let { formattedValue: r5 } = n5.detail;
                    s3.formattedValue = r5, r5 != null && n5.target !== document.activeElement && (n5.target.value = r5), e3.setValue(t3, {
                      formattedValue: r5
                    });
                  },
                  selRange(e4) {
                    e4.target.setSelectionRange(...e4.detail.selRange);
                  },
                  charLimit: (n5) => {
                    let { charLimit: r5 } = n5.detail, { target: i4 } = n5;
                    if (r5 === 0) {
                      i4.removeAttribute(`maxLength`);
                      return;
                    }
                    i4.setAttribute(`maxLength`, r5);
                    let a4 = s3.userValue;
                    !a4 || a4.length <= r5 || (a4 = a4.slice(0, r5), i4.value = s3.userValue = a4, e3.setValue(t3, {
                      value: a4
                    }), this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
                      source: this,
                      detail: {
                        id: t3,
                        name: `Keystroke`,
                        value: a4,
                        willCommit: true,
                        commitKey: 1,
                        selStart: i4.selectionStart,
                        selEnd: i4.selectionEnd
                      }
                    }));
                  }
                }, n4);
              }), n3.addEventListener(`keydown`, (e4) => {
                s3.commitKey = 1;
                let n4 = -1;
                if (e4.key === `Escape` ? n4 = 0 : e4.key === `Enter` && !this.data.multiLine ? n4 = 2 : e4.key === `Tab` && (s3.commitKey = 3), n4 === -1) return;
                let { value: r5 } = e4.target;
                s3.lastCommittedValue !== r5 && (s3.lastCommittedValue = r5, s3.userValue = r5, this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
                  source: this,
                  detail: {
                    id: t3,
                    name: `Keystroke`,
                    value: r5,
                    willCommit: true,
                    commitKey: n4,
                    selStart: e4.target.selectionStart,
                    selEnd: e4.target.selectionEnd
                  }
                }));
              });
              let r4 = c3;
              c3 = null, n3.addEventListener(`blur`, (e4) => {
                if (!s3.focused || !e4.relatedTarget) return;
                this.data.actions?.Blur || (s3.focused = false);
                let { value: n4 } = e4.target;
                s3.userValue = n4, s3.lastCommittedValue !== n4 && this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
                  source: this,
                  detail: {
                    id: t3,
                    name: `Keystroke`,
                    value: n4,
                    willCommit: true,
                    commitKey: s3.commitKey,
                    selStart: e4.target.selectionStart,
                    selEnd: e4.target.selectionEnd
                  }
                }), r4(e4);
              }), this.data.actions?.Keystroke && n3.addEventListener(`beforeinput`, (e4) => {
                s3.lastCommittedValue = null;
                let { data: n4, target: r5 } = e4, { value: i4, selectionStart: a4, selectionEnd: o4 } = r5, c4 = a4, l3 = o4;
                switch (e4.inputType) {
                  case `deleteWordBackward`: {
                    let e5 = i4.substring(0, a4).match(/\w*[^\w]*$/);
                    e5 && (c4 -= e5[0].length);
                    break;
                  }
                  case `deleteWordForward`: {
                    let e5 = i4.substring(a4).match(/^[^\w]*\w*/);
                    e5 && (l3 += e5[0].length);
                    break;
                  }
                  case `deleteContentBackward`:
                    a4 === o4 && --c4;
                    break;
                  case `deleteContentForward`:
                    a4 === o4 && (l3 += 1);
                    break;
                }
                e4.preventDefault(), this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
                  source: this,
                  detail: {
                    id: t3,
                    name: `Keystroke`,
                    value: i4,
                    change: n4 || ``,
                    willCommit: false,
                    selStart: c4,
                    selEnd: l3
                  }
                });
              }), this._setEventListeners(n3, s3, [
                [
                  `focus`,
                  `Focus`
                ],
                [
                  `blur`,
                  `Blur`
                ],
                [
                  `mousedown`,
                  `Mouse Down`
                ],
                [
                  `mouseenter`,
                  `Mouse Enter`
                ],
                [
                  `mouseleave`,
                  `Mouse Exit`
                ],
                [
                  `mouseup`,
                  `Mouse Up`
                ]
              ], (e4) => e4.target.value);
            }
            if (c3 && n3.addEventListener(`blur`, c3), this.data.comb) {
              let e4 = (this.data.rect[2] - this.data.rect[0]) / a3;
              n3.classList.add(`comb`), n3.style.letterSpacing = `calc(${e4}px * var(--scale-factor) - 1ch)`;
            }
          } else n3 = document.createElement(`div`), n3.textContent = this.data.fieldValue, n3.style.verticalAlign = `middle`, n3.style.display = `table-cell`, this.data.hasOwnCanvas && (n3.hidden = true);
          return this._setTextStyle(n3), this._setBackgroundColor(n3), this._setDefaultPropertiesFromJS(n3), this.container.append(n3), this.container;
        }
      }
      class y2 extends _2 {
        constructor(e3) {
          super(e3, {
            isRenderable: !!e3.data.hasOwnCanvas
          });
        }
      }
      class b2 extends _2 {
        constructor(e3) {
          super(e3, {
            isRenderable: e3.renderForms
          });
        }
        render() {
          let e3 = this.annotationStorage, t3 = this.data, n3 = t3.id, r3 = e3.getValue(n3, {
            value: t3.exportValue === t3.fieldValue
          }).value;
          typeof r3 == `string` && (r3 = r3 !== `Off`, e3.setValue(n3, {
            value: r3
          })), this.container.classList.add(`buttonWidgetAnnotation`, `checkBox`);
          let i3 = document.createElement(`input`);
          return d2.add(i3), i3.setAttribute(`data-element-id`, n3), i3.disabled = t3.readOnly, this._setRequired(i3, this.data.required), i3.type = `checkbox`, i3.name = t3.fieldName, r3 && i3.setAttribute(`checked`, true), i3.setAttribute(`exportValue`, t3.exportValue), i3.tabIndex = u2, i3.addEventListener(`change`, (r4) => {
            let { name: i4, checked: a3 } = r4.target;
            for (let r5 of this._getElementsByName(i4, n3)) {
              let n4 = a3 && r5.exportValue === t3.exportValue;
              r5.domElement && (r5.domElement.checked = n4), e3.setValue(r5.id, {
                value: n4
              });
            }
            e3.setValue(n3, {
              value: a3
            });
          }), i3.addEventListener(`resetform`, (e4) => {
            let n4 = t3.defaultFieldValue || `Off`;
            e4.target.checked = n4 === t3.exportValue;
          }), this.enableScripting && this.hasJSActions && (i3.addEventListener(`updatefromsandbox`, (t4) => {
            this._dispatchEventFromSandbox({
              value(t5) {
                t5.target.checked = t5.detail.value !== `Off`, e3.setValue(n3, {
                  value: t5.target.checked
                });
              }
            }, t4);
          }), this._setEventListeners(i3, null, [
            [
              `change`,
              `Validate`
            ],
            [
              `change`,
              `Action`
            ],
            [
              `focus`,
              `Focus`
            ],
            [
              `blur`,
              `Blur`
            ],
            [
              `mousedown`,
              `Mouse Down`
            ],
            [
              `mouseenter`,
              `Mouse Enter`
            ],
            [
              `mouseleave`,
              `Mouse Exit`
            ],
            [
              `mouseup`,
              `Mouse Up`
            ]
          ], (e4) => e4.target.checked)), this._setBackgroundColor(i3), this._setDefaultPropertiesFromJS(i3), this.container.append(i3), this.container;
        }
      }
      class x2 extends _2 {
        constructor(e3) {
          super(e3, {
            isRenderable: e3.renderForms
          });
        }
        render() {
          this.container.classList.add(`buttonWidgetAnnotation`, `radioButton`);
          let e3 = this.annotationStorage, t3 = this.data, n3 = t3.id, r3 = e3.getValue(n3, {
            value: t3.fieldValue === t3.buttonValue
          }).value;
          if (typeof r3 == `string` && (r3 = r3 !== t3.buttonValue, e3.setValue(n3, {
            value: r3
          })), r3) for (let r4 of this._getElementsByName(t3.fieldName, n3)) e3.setValue(r4.id, {
            value: false
          });
          let i3 = document.createElement(`input`);
          if (d2.add(i3), i3.setAttribute(`data-element-id`, n3), i3.disabled = t3.readOnly, this._setRequired(i3, this.data.required), i3.type = `radio`, i3.name = t3.fieldName, r3 && i3.setAttribute(`checked`, true), i3.tabIndex = u2, i3.addEventListener(`change`, (t4) => {
            let { name: r4, checked: i4 } = t4.target;
            for (let t5 of this._getElementsByName(r4, n3)) e3.setValue(t5.id, {
              value: false
            });
            e3.setValue(n3, {
              value: i4
            });
          }), i3.addEventListener(`resetform`, (e4) => {
            let n4 = t3.defaultFieldValue;
            e4.target.checked = n4 != null && n4 === t3.buttonValue;
          }), this.enableScripting && this.hasJSActions) {
            let r4 = t3.buttonValue;
            i3.addEventListener(`updatefromsandbox`, (t4) => {
              this._dispatchEventFromSandbox({
                value: (t5) => {
                  let i4 = r4 === t5.detail.value;
                  for (let r5 of this._getElementsByName(t5.target.name)) {
                    let t6 = i4 && r5.id === n3;
                    r5.domElement && (r5.domElement.checked = t6), e3.setValue(r5.id, {
                      value: t6
                    });
                  }
                }
              }, t4);
            }), this._setEventListeners(i3, null, [
              [
                `change`,
                `Validate`
              ],
              [
                `change`,
                `Action`
              ],
              [
                `focus`,
                `Focus`
              ],
              [
                `blur`,
                `Blur`
              ],
              [
                `mousedown`,
                `Mouse Down`
              ],
              [
                `mouseenter`,
                `Mouse Enter`
              ],
              [
                `mouseleave`,
                `Mouse Exit`
              ],
              [
                `mouseup`,
                `Mouse Up`
              ]
            ], (e4) => e4.target.checked);
          }
          return this._setBackgroundColor(i3), this._setDefaultPropertiesFromJS(i3), this.container.append(i3), this.container;
        }
      }
      class S2 extends h2 {
        constructor(e3) {
          super(e3, {
            ignoreBorder: e3.data.hasAppearance
          });
        }
        render() {
          let e3 = super.render();
          e3.classList.add(`buttonWidgetAnnotation`, `pushButton`);
          let t3 = e3.lastChild;
          return this.enableScripting && this.hasJSActions && t3 && (this._setDefaultPropertiesFromJS(t3), t3.addEventListener(`updatefromsandbox`, (e4) => {
            this._dispatchEventFromSandbox({}, e4);
          })), e3;
        }
      }
      class C2 extends _2 {
        constructor(e3) {
          super(e3, {
            isRenderable: e3.renderForms
          });
        }
        render() {
          this.container.classList.add(`choiceWidgetAnnotation`);
          let e3 = this.annotationStorage, t3 = this.data.id, n3 = e3.getValue(t3, {
            value: this.data.fieldValue
          }), r3 = document.createElement(`select`);
          d2.add(r3), r3.setAttribute(`data-element-id`, t3), r3.disabled = this.data.readOnly, this._setRequired(r3, this.data.required), r3.name = this.data.fieldName, r3.tabIndex = u2;
          let i3 = this.data.combo && this.data.options.length > 0;
          this.data.combo || (r3.size = this.data.options.length, this.data.multiSelect && (r3.multiple = true)), r3.addEventListener(`resetform`, (e4) => {
            let t4 = this.data.defaultFieldValue;
            for (let e5 of r3.options) e5.selected = e5.value === t4;
          });
          for (let e4 of this.data.options) {
            let t4 = document.createElement(`option`);
            t4.textContent = e4.displayValue, t4.value = e4.exportValue, n3.value.includes(e4.exportValue) && (t4.setAttribute(`selected`, true), i3 = false), r3.append(t4);
          }
          let a3 = null;
          if (i3) {
            let e4 = document.createElement(`option`);
            e4.value = ` `, e4.setAttribute(`hidden`, true), e4.setAttribute(`selected`, true), r3.prepend(e4), a3 = () => {
              e4.remove(), r3.removeEventListener(`input`, a3), a3 = null;
            }, r3.addEventListener(`input`, a3);
          }
          let o3 = (e4) => {
            let t4 = e4 ? `value` : `textContent`, { options: n4, multiple: i4 } = r3;
            return i4 ? Array.prototype.filter.call(n4, (e5) => e5.selected).map((e5) => e5[t4]) : n4.selectedIndex === -1 ? null : n4[n4.selectedIndex][t4];
          }, s3 = o3(false), c3 = (e4) => {
            let t4 = e4.target.options;
            return Array.prototype.map.call(t4, (e5) => ({
              displayValue: e5.textContent,
              exportValue: e5.value
            }));
          };
          return this.enableScripting && this.hasJSActions ? (r3.addEventListener(`updatefromsandbox`, (n4) => {
            this._dispatchEventFromSandbox({
              value(n5) {
                a3?.();
                let i4 = n5.detail.value, c4 = new Set(Array.isArray(i4) ? i4 : [
                  i4
                ]);
                for (let e4 of r3.options) e4.selected = c4.has(e4.value);
                e3.setValue(t3, {
                  value: o3(true)
                }), s3 = o3(false);
              },
              multipleSelection(e4) {
                r3.multiple = true;
              },
              remove(n5) {
                let i4 = r3.options, a4 = n5.detail.remove;
                i4[a4].selected = false, r3.remove(a4), i4.length > 0 && Array.prototype.findIndex.call(i4, (e4) => e4.selected) === -1 && (i4[0].selected = true), e3.setValue(t3, {
                  value: o3(true),
                  items: c3(n5)
                }), s3 = o3(false);
              },
              clear(n5) {
                for (; r3.length !== 0; ) r3.remove(0);
                e3.setValue(t3, {
                  value: null,
                  items: []
                }), s3 = o3(false);
              },
              insert(n5) {
                let { index: i4, displayValue: a4, exportValue: l3 } = n5.detail.insert, u3 = r3.children[i4], d3 = document.createElement(`option`);
                d3.textContent = a4, d3.value = l3, u3 ? u3.before(d3) : r3.append(d3), e3.setValue(t3, {
                  value: o3(true),
                  items: c3(n5)
                }), s3 = o3(false);
              },
              items(n5) {
                let { items: i4 } = n5.detail;
                for (; r3.length !== 0; ) r3.remove(0);
                for (let e4 of i4) {
                  let { displayValue: t4, exportValue: n6 } = e4, i5 = document.createElement(`option`);
                  i5.textContent = t4, i5.value = n6, r3.append(i5);
                }
                r3.options.length > 0 && (r3.options[0].selected = true), e3.setValue(t3, {
                  value: o3(true),
                  items: c3(n5)
                }), s3 = o3(false);
              },
              indices(n5) {
                let r4 = new Set(n5.detail.indices);
                for (let e4 of n5.target.options) e4.selected = r4.has(e4.index);
                e3.setValue(t3, {
                  value: o3(true)
                }), s3 = o3(false);
              },
              editable(e4) {
                e4.target.disabled = !e4.detail.editable;
              }
            }, n4);
          }), r3.addEventListener(`input`, (n4) => {
            let r4 = o3(true), i4 = o3(false);
            e3.setValue(t3, {
              value: r4
            }), n4.preventDefault(), this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
              source: this,
              detail: {
                id: t3,
                name: `Keystroke`,
                value: s3,
                change: i4,
                changeEx: r4,
                willCommit: false,
                commitKey: 1,
                keyDown: false
              }
            });
          }), this._setEventListeners(r3, null, [
            [
              `focus`,
              `Focus`
            ],
            [
              `blur`,
              `Blur`
            ],
            [
              `mousedown`,
              `Mouse Down`
            ],
            [
              `mouseenter`,
              `Mouse Enter`
            ],
            [
              `mouseleave`,
              `Mouse Exit`
            ],
            [
              `mouseup`,
              `Mouse Up`
            ],
            [
              `input`,
              `Action`
            ],
            [
              `input`,
              `Validate`
            ]
          ], (e4) => e4.target.value)) : r3.addEventListener(`input`, function(n4) {
            e3.setValue(t3, {
              value: o3(true)
            });
          }), this.data.combo && this._setTextStyle(r3), this._setBackgroundColor(r3), this._setDefaultPropertiesFromJS(r3), this.container.append(r3), this.container;
        }
      }
      class w2 extends m2 {
        constructor(e3) {
          let { data: t3, elements: n3 } = e3;
          super(e3, {
            isRenderable: m2._hasPopupData(t3)
          }), this.elements = n3;
        }
        render() {
          this.container.classList.add(`popupAnnotation`);
          let e3 = new T2({
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
          }), t3 = [];
          for (let n3 of this.elements) n3.popup = e3, t3.push(n3.data.id), n3.addHighlightArea();
          return this.container.setAttribute(`aria-controls`, t3.map((e4) => `${r2.AnnotationPrefix}${e4}`).join(`,`)), this.container;
        }
      }
      class T2 {
        #e = this.#_.bind(this);
        #t = this.#b.bind(this);
        #n = this.#y.bind(this);
        #r = this.#v.bind(this);
        #i = null;
        #a = null;
        #o = null;
        #s = null;
        #c = null;
        #l = null;
        #u = null;
        #d = false;
        #f = null;
        #p = null;
        #m = null;
        #h = null;
        #g = false;
        constructor({ container: e3, color: t3, elements: n3, titleObj: r3, modificationDate: a3, contentsObj: o3, richText: s3, parent: c3, rect: l3, parentRect: u3, open: d3 }) {
          this.#a = e3, this.#h = r3, this.#o = o3, this.#m = s3, this.#l = c3, this.#i = t3, this.#p = l3, this.#u = u3, this.#c = n3, this.#s = i2.PDFDateString.toDateObject(a3), this.trigger = n3.flatMap((e4) => e4.getElementsToTriggerPopup());
          for (let e4 of this.trigger) e4.addEventListener(`click`, this.#r), e4.addEventListener(`mouseenter`, this.#n), e4.addEventListener(`mouseleave`, this.#t), e4.classList.add(`popupTriggerArea`);
          for (let e4 of n3) e4.container?.addEventListener(`keydown`, this.#e);
          this.#a.hidden = true, d3 && this.#v();
        }
        render() {
          if (this.#f) return;
          let { page: { view: e3 }, viewport: { rawDims: { pageWidth: t3, pageHeight: n3, pageX: i3, pageY: a3 } } } = this.#l, o3 = this.#f = document.createElement(`div`);
          if (o3.className = `popup`, this.#i) {
            let e4 = o3.style.outlineColor = r2.Util.makeHexColor(...this.#i);
            CSS.supports(`background-color`, `color-mix(in srgb, red 30%, white)`) ? o3.style.backgroundColor = `color-mix(in srgb, ${e4} 30%, white)` : o3.style.backgroundColor = r2.Util.makeHexColor(...this.#i.map((e5) => Math.floor(0.7 * (255 - e5) + e5)));
          }
          let s3 = document.createElement(`span`);
          s3.className = `header`;
          let c3 = document.createElement(`h1`);
          if (s3.append(c3), { dir: c3.dir, str: c3.textContent } = this.#h, o3.append(s3), this.#s) {
            let e4 = document.createElement(`span`);
            e4.classList.add(`popupDate`), e4.setAttribute(`data-l10n-id`, `pdfjs-annotation-date-string`), e4.setAttribute(`data-l10n-args`, JSON.stringify({
              date: this.#s.toLocaleDateString(),
              time: this.#s.toLocaleTimeString()
            })), s3.append(e4);
          }
          let u3 = this.#o, d3 = this.#m;
          if (d3?.str && (!u3?.str || u3.str === d3.str)) l2.XfaLayer.render({
            xfaHtml: d3.html,
            intent: `richText`,
            div: o3
          }), o3.lastChild.classList.add(`richText`, `popupContent`);
          else {
            let e4 = this._formatContents(u3);
            o3.append(e4);
          }
          let f3 = !!this.#u, p3 = f3 ? this.#u : this.#p;
          for (let e4 of this.#c) if (!p3 || r2.Util.intersect(e4.data.rect, p3) !== null) {
            p3 = e4.data.rect, f3 = true;
            break;
          }
          let m3 = r2.Util.normalizeRect([
            p3[0],
            e3[3] - p3[1] + e3[1],
            p3[2],
            e3[3] - p3[3] + e3[1]
          ]), h3 = f3 ? p3[2] - p3[0] + 5 : 0, g3 = m3[0] + h3, _3 = m3[1], { style: v3 } = this.#a;
          v3.left = `${100 * (g3 - i3) / t3}%`, v3.top = `${100 * (_3 - a3) / n3}%`, this.#a.append(o3);
        }
        _formatContents({ str: e3, dir: t3 }) {
          let n3 = document.createElement(`p`);
          n3.classList.add(`popupContent`), n3.dir = t3;
          let r3 = e3.split(/(?:\r\n?|\n)/);
          for (let e4 = 0, t4 = r3.length; e4 < t4; ++e4) {
            let i3 = r3[e4];
            n3.append(document.createTextNode(i3)), e4 < t4 - 1 && n3.append(document.createElement(`br`));
          }
          return n3;
        }
        #_(e3) {
          e3.altKey || e3.shiftKey || e3.ctrlKey || e3.metaKey || (e3.key === `Enter` || e3.key === `Escape` && this.#d) && this.#v();
        }
        #v() {
          this.#d = !this.#d, this.#d ? (this.#y(), this.#a.addEventListener(`click`, this.#r), this.#a.addEventListener(`keydown`, this.#e)) : (this.#b(), this.#a.removeEventListener(`click`, this.#r), this.#a.removeEventListener(`keydown`, this.#e));
        }
        #y() {
          this.#f || this.render(), this.isVisible ? this.#d && this.#a.classList.add(`focused`) : (this.#a.hidden = false, this.#a.style.zIndex = parseInt(this.#a.style.zIndex) + 1e3);
        }
        #b() {
          this.#a.classList.remove(`focused`), !(this.#d || !this.isVisible) && (this.#a.hidden = true, this.#a.style.zIndex = parseInt(this.#a.style.zIndex) - 1e3);
        }
        forceHide() {
          this.#g = this.isVisible, this.#g && (this.#a.hidden = true);
        }
        maybeShow() {
          this.#g && (this.#g = false, this.#a.hidden = false);
        }
        get isVisible() {
          return this.#a.hidden === false;
        }
      }
      class E2 extends m2 {
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true
          }), this.textContent = e3.data.textContent, this.textPosition = e3.data.textPosition, this.annotationEditorType = r2.AnnotationEditorType.FREETEXT;
        }
        render() {
          if (this.container.classList.add(`freeTextAnnotation`), this.textContent) {
            let e3 = document.createElement(`div`);
            e3.classList.add(`annotationTextContent`), e3.setAttribute(`role`, `comment`);
            for (let t3 of this.textContent) {
              let n3 = document.createElement(`span`);
              n3.textContent = t3, e3.append(n3);
            }
            this.container.append(e3);
          }
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
        }
        get _isEditable() {
          return this.data.hasOwnCanvas;
        }
      }
      class D2 extends m2 {
        #e = null;
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          this.container.classList.add(`lineAnnotation`);
          let e3 = this.data, { width: t3, height: n3 } = f2(e3.rect), r3 = this.svgFactory.create(t3, n3, true), i3 = this.#e = this.svgFactory.createElement(`svg:line`);
          return i3.setAttribute(`x1`, e3.rect[2] - e3.lineCoordinates[0]), i3.setAttribute(`y1`, e3.rect[3] - e3.lineCoordinates[1]), i3.setAttribute(`x2`, e3.rect[2] - e3.lineCoordinates[2]), i3.setAttribute(`y2`, e3.rect[3] - e3.lineCoordinates[3]), i3.setAttribute(`stroke-width`, e3.borderStyle.width || 1), i3.setAttribute(`stroke`, `transparent`), i3.setAttribute(`fill`, `transparent`), r3.append(i3), this.container.append(r3), !e3.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return this.#e;
        }
        addHighlightArea() {
          this.container.classList.add(`highlightArea`);
        }
      }
      class O2 extends m2 {
        #e = null;
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          this.container.classList.add(`squareAnnotation`);
          let e3 = this.data, { width: t3, height: n3 } = f2(e3.rect), r3 = this.svgFactory.create(t3, n3, true), i3 = e3.borderStyle.width, a3 = this.#e = this.svgFactory.createElement(`svg:rect`);
          return a3.setAttribute(`x`, i3 / 2), a3.setAttribute(`y`, i3 / 2), a3.setAttribute(`width`, t3 - i3), a3.setAttribute(`height`, n3 - i3), a3.setAttribute(`stroke-width`, i3 || 1), a3.setAttribute(`stroke`, `transparent`), a3.setAttribute(`fill`, `transparent`), r3.append(a3), this.container.append(r3), !e3.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return this.#e;
        }
        addHighlightArea() {
          this.container.classList.add(`highlightArea`);
        }
      }
      class k2 extends m2 {
        #e = null;
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          this.container.classList.add(`circleAnnotation`);
          let e3 = this.data, { width: t3, height: n3 } = f2(e3.rect), r3 = this.svgFactory.create(t3, n3, true), i3 = e3.borderStyle.width, a3 = this.#e = this.svgFactory.createElement(`svg:ellipse`);
          return a3.setAttribute(`cx`, t3 / 2), a3.setAttribute(`cy`, n3 / 2), a3.setAttribute(`rx`, t3 / 2 - i3 / 2), a3.setAttribute(`ry`, n3 / 2 - i3 / 2), a3.setAttribute(`stroke-width`, i3 || 1), a3.setAttribute(`stroke`, `transparent`), a3.setAttribute(`fill`, `transparent`), r3.append(a3), this.container.append(r3), !e3.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return this.#e;
        }
        addHighlightArea() {
          this.container.classList.add(`highlightArea`);
        }
      }
      class A2 extends m2 {
        #e = null;
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true
          }), this.containerClassName = `polylineAnnotation`, this.svgElementName = `svg:polyline`;
        }
        render() {
          this.container.classList.add(this.containerClassName);
          let e3 = this.data, { width: t3, height: n3 } = f2(e3.rect), r3 = this.svgFactory.create(t3, n3, true), i3 = [];
          for (let t4 of e3.vertices) {
            let n4 = t4.x - e3.rect[0], r4 = e3.rect[3] - t4.y;
            i3.push(n4 + `,` + r4);
          }
          i3 = i3.join(` `);
          let a3 = this.#e = this.svgFactory.createElement(this.svgElementName);
          return a3.setAttribute(`points`, i3), a3.setAttribute(`stroke-width`, e3.borderStyle.width || 1), a3.setAttribute(`stroke`, `transparent`), a3.setAttribute(`fill`, `transparent`), r3.append(a3), this.container.append(r3), !e3.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return this.#e;
        }
        addHighlightArea() {
          this.container.classList.add(`highlightArea`);
        }
      }
      class j2 extends A2 {
        constructor(e3) {
          super(e3), this.containerClassName = `polygonAnnotation`, this.svgElementName = `svg:polygon`;
        }
      }
      class M2 extends m2 {
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          return this.container.classList.add(`caretAnnotation`), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
      }
      class N2 extends m2 {
        #e = [];
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true
          }), this.containerClassName = `inkAnnotation`, this.svgElementName = `svg:polyline`, this.annotationEditorType = r2.AnnotationEditorType.INK;
        }
        render() {
          this.container.classList.add(this.containerClassName);
          let e3 = this.data, { width: t3, height: n3 } = f2(e3.rect), r3 = this.svgFactory.create(t3, n3, true);
          for (let t4 of e3.inkLists) {
            let n4 = [];
            for (let r4 of t4) {
              let t5 = r4.x - e3.rect[0], i4 = e3.rect[3] - r4.y;
              n4.push(`${t5},${i4}`);
            }
            n4 = n4.join(` `);
            let i3 = this.svgFactory.createElement(this.svgElementName);
            this.#e.push(i3), i3.setAttribute(`points`, n4), i3.setAttribute(`stroke-width`, e3.borderStyle.width || 1), i3.setAttribute(`stroke`, `transparent`), i3.setAttribute(`fill`, `transparent`), !e3.popupRef && this.hasPopupData && this._createPopup(), r3.append(i3);
          }
          return this.container.append(r3), this.container;
        }
        getElementsToTriggerPopup() {
          return this.#e;
        }
        addHighlightArea() {
          this.container.classList.add(`highlightArea`);
        }
      }
      class P2 extends m2 {
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add(`highlightAnnotation`), this.container;
        }
      }
      class F2 extends m2 {
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add(`underlineAnnotation`), this.container;
        }
      }
      class I2 extends m2 {
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add(`squigglyAnnotation`), this.container;
        }
      }
      class L2 extends m2 {
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add(`strikeoutAnnotation`), this.container;
        }
      }
      class R2 extends m2 {
        constructor(e3) {
          super(e3, {
            isRenderable: true,
            ignoreBorder: true
          });
        }
        render() {
          return this.container.classList.add(`stampAnnotation`), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
      }
      class z2 extends m2 {
        #e = null;
        constructor(e3) {
          super(e3, {
            isRenderable: true
          });
          let { filename: t3, content: n3 } = this.data.file;
          this.filename = (0, i2.getFilenameFromUrl)(t3, true), this.content = n3, this.linkService.eventBus?.dispatch(`fileattachmentannotation`, {
            source: this,
            filename: t3,
            content: n3
          });
        }
        render() {
          this.container.classList.add(`fileAttachmentAnnotation`);
          let { container: e3, data: t3 } = this, n3;
          t3.hasAppearance || t3.fillAlpha === 0 ? n3 = document.createElement(`div`) : (n3 = document.createElement(`img`), n3.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(t3.name) ? `paperclip` : `pushpin`}.svg`, t3.fillAlpha && t3.fillAlpha < 1 && (n3.style = `filter: opacity(${Math.round(t3.fillAlpha * 100)}%);`)), n3.addEventListener(`dblclick`, this.#t.bind(this)), this.#e = n3;
          let { isMac: i3 } = r2.FeatureTest.platform;
          return e3.addEventListener(`keydown`, (e4) => {
            e4.key === `Enter` && (i3 ? e4.metaKey : e4.ctrlKey) && this.#t();
          }), !t3.popupRef && this.hasPopupData ? this._createPopup() : n3.classList.add(`popupTriggerArea`), e3.append(n3), e3;
        }
        getElementsToTriggerPopup() {
          return this.#e;
        }
        addHighlightArea() {
          this.container.classList.add(`highlightArea`);
        }
        #t() {
          this.downloadManager?.openOrDownloadData(this.content, this.filename);
        }
      }
      class B2 {
        #e = null;
        #t = null;
        #n = /* @__PURE__ */ new Map();
        constructor({ div: e3, accessibilityManager: t3, annotationCanvasMap: n3, annotationEditorUIManager: r3, page: i3, viewport: a3 }) {
          this.div = e3, this.#e = t3, this.#t = n3, this.page = i3, this.viewport = a3, this.zIndex = 0, this._annotationEditorUIManager = r3;
        }
        #r(e3, t3) {
          let n3 = e3.firstChild || e3;
          n3.id = `${r2.AnnotationPrefix}${t3}`, this.div.append(e3), this.#e?.moveElementInDOM(this.div, e3, n3, false);
        }
        async render(e3) {
          let { annotations: t3 } = e3, n3 = this.div;
          (0, i2.setLayerDimensions)(n3, this.viewport);
          let o3 = /* @__PURE__ */ new Map(), s3 = {
            data: null,
            layer: n3,
            linkService: e3.linkService,
            downloadManager: e3.downloadManager,
            imageResourcesPath: e3.imageResourcesPath || ``,
            renderForms: e3.renderForms !== false,
            svgFactory: new i2.DOMSVGFactory(),
            annotationStorage: e3.annotationStorage || new a2.AnnotationStorage(),
            enableScripting: e3.enableScripting === true,
            hasJSActions: e3.hasJSActions,
            fieldObjects: e3.fieldObjects,
            parent: this,
            elements: null
          };
          for (let e4 of t3) {
            if (e4.noHTML) continue;
            let t4 = e4.annotationType === r2.AnnotationType.POPUP;
            if (t4) {
              let t5 = o3.get(e4.id);
              if (!t5) continue;
              s3.elements = t5;
            } else {
              let { width: t5, height: n5 } = f2(e4.rect);
              if (t5 <= 0 || n5 <= 0) continue;
            }
            s3.data = e4;
            let n4 = p2.create(s3);
            if (!n4.isRenderable) continue;
            if (!t4 && e4.popupRef) {
              let t5 = o3.get(e4.popupRef);
              t5 ? t5.push(n4) : o3.set(e4.popupRef, [
                n4
              ]);
            }
            let i3 = n4.render();
            e4.hidden && (i3.style.visibility = `hidden`), this.#r(i3, e4.id), n4.annotationEditorType > 0 && (this.#n.set(n4.data.id, n4), this._annotationEditorUIManager?.renderAnnotationElement(n4));
          }
          this.#i();
        }
        update({ viewport: e3 }) {
          let t3 = this.div;
          this.viewport = e3, (0, i2.setLayerDimensions)(t3, {
            rotation: e3.rotation
          }), this.#i(), t3.hidden = false;
        }
        #i() {
          if (!this.#t) return;
          let e3 = this.div;
          for (let [t3, n3] of this.#t) {
            let r3 = e3.querySelector(`[data-annotation-id="${t3}"]`);
            if (!r3) continue;
            n3.className = `annotationContent`;
            let { firstChild: i3 } = r3;
            i3 ? i3.nodeName === `CANVAS` ? i3.replaceWith(n3) : i3.classList.contains(`annotationContent`) ? i3.after(n3) : i3.before(n3) : r3.append(n3);
          }
          this.#t.clear();
        }
        getEditableAnnotations() {
          return Array.from(this.#n.values());
        }
        getEditableAnnotation(e3) {
          return this.#n.get(e3);
        }
      }
    }),
    792: ((e2, t2, n2) => {
      n2.d(t2, {
        AnnotationStorage: () => s2,
        PrintAnnotationStorage: () => c2,
        SerializableEmpty: () => o2
      });
      var r2 = n2(292), i2 = n2(310), a2 = n2(651);
      let o2 = Object.freeze({
        map: null,
        hash: ``,
        transfer: void 0
      });
      class s2 {
        #e = false;
        #t = /* @__PURE__ */ new Map();
        constructor() {
          this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
        }
        getValue(e3, t3) {
          let n3 = this.#t.get(e3);
          return n3 === void 0 ? t3 : Object.assign(t3, n3);
        }
        getRawValue(e3) {
          return this.#t.get(e3);
        }
        remove(e3) {
          if (this.#t.delete(e3), this.#t.size === 0 && this.resetModified(), typeof this.onAnnotationEditor == `function`) {
            for (let e4 of this.#t.values()) if (e4 instanceof i2.AnnotationEditor) return;
            this.onAnnotationEditor(null);
          }
        }
        setValue(e3, t3) {
          let n3 = this.#t.get(e3), r3 = false;
          if (n3 !== void 0) for (let [e4, i3] of Object.entries(t3)) n3[e4] !== i3 && (r3 = true, n3[e4] = i3);
          else r3 = true, this.#t.set(e3, t3);
          r3 && this.#n(), t3 instanceof i2.AnnotationEditor && typeof this.onAnnotationEditor == `function` && this.onAnnotationEditor(t3.constructor._type);
        }
        has(e3) {
          return this.#t.has(e3);
        }
        getAll() {
          return this.#t.size > 0 ? (0, r2.objectFromMap)(this.#t) : null;
        }
        setAll(e3) {
          for (let [t3, n3] of Object.entries(e3)) this.setValue(t3, n3);
        }
        get size() {
          return this.#t.size;
        }
        #n() {
          this.#e || (this.#e = true, typeof this.onSetModified == `function` && this.onSetModified());
        }
        resetModified() {
          this.#e && (this.#e = false, typeof this.onResetModified == `function` && this.onResetModified());
        }
        get print() {
          return new c2(this);
        }
        get serializable() {
          if (this.#t.size === 0) return o2;
          let e3 = /* @__PURE__ */ new Map(), t3 = new a2.MurmurHash3_64(), n3 = [], r3 = /* @__PURE__ */ Object.create(null), s3 = false;
          for (let [n4, a3] of this.#t) {
            let o3 = a3 instanceof i2.AnnotationEditor ? a3.serialize(false, r3) : a3;
            o3 && (e3.set(n4, o3), t3.update(`${n4}:${JSON.stringify(o3)}`), s3 ||= !!o3.bitmap);
          }
          if (s3) for (let t4 of e3.values()) t4.bitmap && n3.push(t4.bitmap);
          return e3.size > 0 ? {
            map: e3,
            hash: t3.hexdigest(),
            transfer: n3
          } : o2;
        }
        get editorStats() {
          let e3 = null, t3 = /* @__PURE__ */ new Map();
          for (let n3 of this.#t.values()) {
            if (!(n3 instanceof i2.AnnotationEditor)) continue;
            let r3 = n3.telemetryFinalData;
            if (!r3) continue;
            let { type: a3 } = r3;
            t3.has(a3) || t3.set(a3, Object.getPrototypeOf(n3).constructor), e3 ||= /* @__PURE__ */ Object.create(null);
            let o3 = e3[a3] ||= /* @__PURE__ */ new Map();
            for (let [e4, t4] of Object.entries(r3)) {
              if (e4 === `type`) continue;
              let n4 = o3.get(e4);
              n4 || (n4 = /* @__PURE__ */ new Map(), o3.set(e4, n4));
              let r4 = n4.get(t4) ?? 0;
              n4.set(t4, r4 + 1);
            }
          }
          for (let [n3, r3] of t3) e3[n3] = r3.computeTelemetryFinalData(e3[n3]);
          return e3;
        }
      }
      class c2 extends s2 {
        #e;
        constructor(e3) {
          super();
          let { map: t3, hash: n3, transfer: r3 } = e3.serializable;
          this.#e = {
            map: structuredClone(t3, r3 ? {
              transfer: r3
            } : null),
            hash: n3,
            transfer: r3
          };
        }
        get print() {
          (0, r2.unreachable)(`Should not call PrintAnnotationStorage.print`);
        }
        get serializable() {
          return this.#e;
        }
      }
    }),
    831: ((e2, n2, i2) => {
      i2.a(e2, async (e3, a2) => {
        try {
          let D2 = function(e4) {
            if (typeof e4 == `string` || e4 instanceof URL ? e4 = {
              url: e4
            } : (e4 instanceof ArrayBuffer || ArrayBuffer.isView(e4)) && (e4 = {
              data: e4
            }), typeof e4 != `object`) throw Error(`Invalid parameter in getDocument, need parameter object.`);
            if (!e4.url && !e4.data && !e4.range) throw Error(`Invalid parameter object: need either .data, .range or .url`);
            let t2 = new M2(), { docId: n3 } = t2, r2 = e4.url ? k2(e4.url) : null, i3 = e4.data ? A2(e4.data) : null, a3 = e4.httpHeaders || null, s3 = e4.withCredentials === true, l3 = e4.password ?? null, u3 = e4.range instanceof N2 ? e4.range : null, d3 = Number.isInteger(e4.rangeChunkSize) && e4.rangeChunkSize > 0 ? e4.rangeChunkSize : 65536, f3 = e4.worker instanceof R2 ? e4.worker : null, h3 = e4.verbosity, g3 = typeof e4.docBaseUrl == `string` && !(0, c2.isDataScheme)(e4.docBaseUrl) ? e4.docBaseUrl : null, x3 = typeof e4.cMapUrl == `string` ? e4.cMapUrl : null, S3 = e4.cMapPacked !== false, D3 = e4.CMapReaderFactory || w2, j3 = typeof e4.standardFontDataUrl == `string` ? e4.standardFontDataUrl : null, P3 = e4.StandardFontDataFactory || E2, F3 = e4.stopAtErrors !== true, I3 = Number.isInteger(e4.maxImageSize) && e4.maxImageSize > -1 ? e4.maxImageSize : -1, L3 = e4.isEvalSupported !== false, B3 = typeof e4.isOffscreenCanvasSupported == `boolean` ? e4.isOffscreenCanvasSupported : !o2.isNodeJS, V3 = Number.isInteger(e4.canvasMaxAreaInBytes) ? e4.canvasMaxAreaInBytes : -1, H3 = typeof e4.disableFontFace == `boolean` ? e4.disableFontFace : o2.isNodeJS, U3 = e4.fontExtraProperties === true, W3 = e4.enableXfa === true, G3 = e4.ownerDocument || globalThis.document, K2 = e4.disableRange === true, q2 = e4.disableStream === true, J2 = e4.disableAutoFetch === true, Y2 = e4.pdfBug === true, X2 = u3 ? u3.length : e4.length ?? NaN, Z2 = typeof e4.useSystemFonts == `boolean` ? e4.useSystemFonts : !o2.isNodeJS && !H3, Q2 = typeof e4.useWorkerFetch == `boolean` ? e4.useWorkerFetch : D3 === c2.DOMCMapReaderFactory && P3 === c2.DOMStandardFontDataFactory && x3 && j3 && (0, c2.isValidFetchUrl)(x3, document.baseURI) && (0, c2.isValidFetchUrl)(j3, document.baseURI), ee = e4.canvasFactory || new C2({
              ownerDocument: G3
            }), te = e4.filterFactory || new T2({
              docId: n3,
              ownerDocument: G3
            });
            (0, o2.setVerbosityLevel)(h3);
            let $ = {
              canvasFactory: ee,
              filterFactory: te
            };
            if (Q2 || ($.cMapReaderFactory = new D3({
              baseUrl: x3,
              isCompressed: S3
            }), $.standardFontDataFactory = new P3({
              baseUrl: j3
            })), !f3) {
              let e5 = {
                verbosity: h3,
                port: p2.GlobalWorkerOptions.workerPort
              };
              f3 = e5.port ? R2.fromPort(e5) : new R2(e5), t2._worker = f3;
            }
            let ne = {
              docId: n3,
              apiVersion: `4.2.67`,
              data: i3,
              password: l3,
              disableAutoFetch: J2,
              rangeChunkSize: d3,
              length: X2,
              docBaseUrl: g3,
              enableXfa: W3,
              evaluatorOptions: {
                maxImageSize: I3,
                disableFontFace: H3,
                ignoreErrors: F3,
                isEvalSupported: L3,
                isOffscreenCanvasSupported: B3,
                canvasMaxAreaInBytes: V3,
                fontExtraProperties: U3,
                useSystemFonts: Z2,
                cMapUrl: Q2 ? x3 : null,
                standardFontDataUrl: Q2 ? j3 : null
              }
            }, re = {
              ignoreErrors: F3,
              disableFontFace: H3,
              fontExtraProperties: U3,
              enableXfa: W3,
              ownerDocument: G3,
              disableAutoFetch: J2,
              pdfBug: Y2,
              styleElement: null
            };
            return f3.promise.then(function() {
              if (t2.destroyed) throw Error(`Loading aborted`);
              let e5 = O2(f3, ne), l4 = new Promise(function(e6) {
                let t3;
                u3 ? t3 = new _2.PDFDataTransportStream(u3, {
                  disableRange: K2,
                  disableStream: q2
                }) : i3 || (t3 = ((e7) => o2.isNodeJS ? (function() {
                  return typeof fetch < `u` && typeof Response < `u` && `body` in Response.prototype;
                })() && (0, c2.isValidFetchUrl)(e7.url) ? new v2.PDFFetchStream(e7) : new b2.PDFNodeStream(e7) : (0, c2.isValidFetchUrl)(e7.url) ? new v2.PDFFetchStream(e7) : new y2.PDFNetworkStream(e7))({
                  url: r2,
                  length: X2,
                  httpHeaders: a3,
                  withCredentials: s3,
                  rangeChunkSize: d3,
                  disableRange: K2,
                  disableStream: q2
                })), e6(t3);
              });
              return Promise.all([
                e5,
                l4
              ]).then(function([e6, r3]) {
                if (t2.destroyed) throw Error(`Loading aborted`);
                let i4 = new m2.MessageHandler(n3, e6, f3.port);
                t2._transport = new z2(i4, t2, r3, re, $), i4.send(`Ready`, null);
              });
            }).catch(t2._capability.reject), t2;
          }, k2 = function(e4) {
            if (e4 instanceof URL) return e4.href;
            try {
              return new URL(e4, window.location).href;
            } catch {
              if (o2.isNodeJS && typeof e4 == `string`) return e4;
            }
            throw Error(`Invalid PDF url data: either string or URL-object is expected in the url property.`);
          }, A2 = function(e4) {
            if (o2.isNodeJS && r.Buffer !== void 0 && e4 instanceof r.Buffer) throw Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
            if (e4 instanceof Uint8Array && e4.byteLength === e4.buffer.byteLength) return e4;
            if (typeof e4 == `string`) return (0, o2.stringToBytes)(e4);
            if (e4 instanceof ArrayBuffer || ArrayBuffer.isView(e4) || typeof e4 == `object` && !isNaN(e4?.length)) return new Uint8Array(e4);
            throw Error(`Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.`);
          }, j2 = function(e4) {
            return typeof e4 == `object` && Number.isInteger(e4?.num) && e4.num >= 0 && Number.isInteger(e4?.gen) && e4.gen >= 0;
          };
          i2.d(n2, {
            PDFDataRangeTransport: () => N2,
            PDFWorker: () => R2,
            build: () => G2,
            getDocument: () => D2,
            version: () => W2
          });
          var o2 = i2(292), s2 = i2(792), c2 = i2(419), l2 = i2(10), u2 = i2(573), d2 = i2(923), f2 = i2(814), p2 = i2(164), m2 = i2(178), h2 = i2(62), g2 = i2(626), _2 = i2(585), v2 = i2(94), y2 = i2(457), b2 = i2(786), x2 = i2(50), S2 = e3([
            u2,
            b2
          ]);
          [u2, b2] = S2.then ? (await S2)() : S2;
          let C2 = o2.isNodeJS ? u2.NodeCanvasFactory : c2.DOMCanvasFactory, w2 = o2.isNodeJS ? u2.NodeCMapReaderFactory : c2.DOMCMapReaderFactory, T2 = o2.isNodeJS ? u2.NodeFilterFactory : c2.DOMFilterFactory, E2 = o2.isNodeJS ? u2.NodeStandardFontDataFactory : c2.DOMStandardFontDataFactory;
          async function O2(e4, t2) {
            if (e4.destroyed) throw Error(`Worker was destroyed`);
            let n3 = await e4.messageHandler.sendWithPromise(`GetDocRequest`, t2, t2.data ? [
              t2.data.buffer
            ] : null);
            if (e4.destroyed) throw Error(`Worker was destroyed`);
            return n3;
          }
          class M2 {
            static #e = 0;
            constructor() {
              this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${M2.#e++}`, this.destroyed = false, this.onPassword = null, this.onProgress = null;
            }
            get promise() {
              return this._capability.promise;
            }
            async destroy() {
              this.destroyed = true;
              try {
                this._worker?.port && (this._worker._pendingDestroy = true), await this._transport?.destroy();
              } catch (e4) {
                throw this._worker?.port && delete this._worker._pendingDestroy, e4;
              }
              this._transport = null, this._worker &&= (this._worker.destroy(), null);
            }
          }
          class N2 {
            constructor(e4, t2, n3 = false, r2 = null) {
              this.length = e4, this.initialData = t2, this.progressiveDone = n3, this.contentDispositionFilename = r2, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
            }
            addRangeListener(e4) {
              this._rangeListeners.push(e4);
            }
            addProgressListener(e4) {
              this._progressListeners.push(e4);
            }
            addProgressiveReadListener(e4) {
              this._progressiveReadListeners.push(e4);
            }
            addProgressiveDoneListener(e4) {
              this._progressiveDoneListeners.push(e4);
            }
            onDataRange(e4, t2) {
              for (let n3 of this._rangeListeners) n3(e4, t2);
            }
            onDataProgress(e4, t2) {
              this._readyCapability.promise.then(() => {
                for (let n3 of this._progressListeners) n3(e4, t2);
              });
            }
            onDataProgressiveRead(e4) {
              this._readyCapability.promise.then(() => {
                for (let t2 of this._progressiveReadListeners) t2(e4);
              });
            }
            onDataProgressiveDone() {
              this._readyCapability.promise.then(() => {
                for (let e4 of this._progressiveDoneListeners) e4();
              });
            }
            transportReady() {
              this._readyCapability.resolve();
            }
            requestDataRange(e4, t2) {
              (0, o2.unreachable)(`Abstract method PDFDataRangeTransport.requestDataRange`);
            }
            abort() {
            }
          }
          class P2 {
            constructor(e4, t2) {
              this._pdfInfo = e4, this._transport = t2;
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
              return (0, o2.shadow)(this, `isPureXfa`, !!this._transport._htmlForXfa);
            }
            get allXfaHtml() {
              return this._transport._htmlForXfa;
            }
            getPage(e4) {
              return this._transport.getPage(e4);
            }
            getPageIndex(e4) {
              return this._transport.getPageIndex(e4);
            }
            getDestinations() {
              return this._transport.getDestinations();
            }
            getDestination(e4) {
              return this._transport.getDestination(e4);
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
            getOptionalContentConfig({ intent: e4 = `display` } = {}) {
              let { renderingIntent: t2 } = this._transport.getRenderingIntent(e4);
              return this._transport.getOptionalContentConfig(t2);
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
            cleanup(e4 = false) {
              return this._transport.startCleanup(e4 || this.isPureXfa);
            }
            destroy() {
              return this.loadingTask.destroy();
            }
            cachedPageNumber(e4) {
              return this._transport.cachedPageNumber(e4);
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
          class F2 {
            #e = null;
            #t = false;
            constructor(e4, t2, n3, r2 = false) {
              this._pageIndex = e4, this._pageInfo = t2, this._transport = n3, this._stats = r2 ? new c2.StatTimer() : null, this._pdfBug = r2, this.commonObjs = n3.commonObjs, this.objs = new V2(), this._maybeCleanupAfterRender = false, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = false;
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
            getViewport({ scale: e4, rotation: t2 = this.rotate, offsetX: n3 = 0, offsetY: r2 = 0, dontFlip: i3 = false } = {}) {
              return new c2.PageViewport({
                viewBox: this.view,
                scale: e4,
                rotation: t2,
                offsetX: n3,
                offsetY: r2,
                dontFlip: i3
              });
            }
            getAnnotations({ intent: e4 = `display` } = {}) {
              let { renderingIntent: t2 } = this._transport.getRenderingIntent(e4);
              return this._transport.getAnnotations(this._pageIndex, t2);
            }
            getJSActions() {
              return this._transport.getPageJSActions(this._pageIndex);
            }
            get filterFactory() {
              return this._transport.filterFactory;
            }
            get isPureXfa() {
              return (0, o2.shadow)(this, `isPureXfa`, !!this._transport._htmlForXfa);
            }
            async getXfa() {
              return this._transport._htmlForXfa?.children[this._pageIndex] || null;
            }
            render({ canvasContext: e4, viewport: t2, intent: n3 = `display`, annotationMode: r2 = o2.AnnotationMode.ENABLE, transform: i3 = null, background: a3 = null, optionalContentConfigPromise: s3 = null, annotationCanvasMap: c3 = null, pageColors: l3 = null, printAnnotationStorage: u3 = null }) {
              this._stats?.time(`Overall`);
              let d3 = this._transport.getRenderingIntent(n3, r2, u3), { renderingIntent: f3, cacheKey: p3 } = d3;
              this.#t = false, this.#r(), s3 ||= this._transport.getOptionalContentConfig(f3);
              let m3 = this._intentStates.get(p3);
              m3 || (m3 = /* @__PURE__ */ Object.create(null), this._intentStates.set(p3, m3)), m3.streamReaderCancelTimeout &&= (clearTimeout(m3.streamReaderCancelTimeout), null);
              let h3 = !!(f3 & o2.RenderingIntentFlag.PRINT);
              m3.displayReadyCapability || (m3.displayReadyCapability = Promise.withResolvers(), m3.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: false,
                separateAnnots: null
              }, this._stats?.time(`Page Request`), this._pumpOperatorList(d3));
              let g3 = (e5) => {
                m3.renderTasks.delete(_3), (this._maybeCleanupAfterRender || h3) && (this.#t = true), this.#n(!h3), e5 ? (_3.capability.reject(e5), this._abortOperatorList({
                  intentState: m3,
                  reason: e5 instanceof Error ? e5 : Error(e5)
                })) : _3.capability.resolve(), this._stats?.timeEnd(`Rendering`), this._stats?.timeEnd(`Overall`);
              }, _3 = new U2({
                callback: g3,
                params: {
                  canvasContext: e4,
                  viewport: t2,
                  transform: i3,
                  background: a3
                },
                objs: this.objs,
                commonObjs: this.commonObjs,
                annotationCanvasMap: c3,
                operatorList: m3.operatorList,
                pageIndex: this._pageIndex,
                canvasFactory: this._transport.canvasFactory,
                filterFactory: this._transport.filterFactory,
                useRequestAnimationFrame: !h3,
                pdfBug: this._pdfBug,
                pageColors: l3
              });
              (m3.renderTasks ||= /* @__PURE__ */ new Set()).add(_3);
              let v3 = _3.task;
              return Promise.all([
                m3.displayReadyCapability.promise,
                s3
              ]).then(([e5, t3]) => {
                if (this.destroyed) {
                  g3();
                  return;
                }
                if (this._stats?.time(`Rendering`), !(t3.renderingIntent & f3)) throw Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
                _3.initializeGraphics({
                  transparency: e5,
                  optionalContentConfig: t3
                }), _3.operatorListChanged();
              }).catch(g3), v3;
            }
            getOperatorList({ intent: e4 = `display`, annotationMode: t2 = o2.AnnotationMode.ENABLE, printAnnotationStorage: n3 = null } = {}) {
              function r2() {
                a3.operatorList.lastChunk && (a3.opListReadCapability.resolve(a3.operatorList), a3.renderTasks.delete(s3));
              }
              let i3 = this._transport.getRenderingIntent(e4, t2, n3, true), a3 = this._intentStates.get(i3.cacheKey);
              a3 || (a3 = /* @__PURE__ */ Object.create(null), this._intentStates.set(i3.cacheKey, a3));
              let s3;
              return a3.opListReadCapability || (s3 = /* @__PURE__ */ Object.create(null), s3.operatorListChanged = r2, a3.opListReadCapability = Promise.withResolvers(), (a3.renderTasks ||= /* @__PURE__ */ new Set()).add(s3), a3.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: false,
                separateAnnots: null
              }, this._stats?.time(`Page Request`), this._pumpOperatorList(i3)), a3.opListReadCapability.promise;
            }
            streamTextContent({ includeMarkedContent: e4 = false, disableNormalization: t2 = false } = {}) {
              return this._transport.messageHandler.sendWithStream(`GetTextContent`, {
                pageIndex: this._pageIndex,
                includeMarkedContent: e4 === true,
                disableNormalization: t2 === true
              }, {
                highWaterMark: 100,
                size(e5) {
                  return e5.items.length;
                }
              });
            }
            getTextContent(e4 = {}) {
              if (this._transport._htmlForXfa) return this.getXfa().then((e5) => x2.XfaText.textContent(e5));
              let t2 = this.streamTextContent(e4);
              return new Promise(function(e5, n3) {
                function r2() {
                  i3.read().then(function({ value: t3, done: n4 }) {
                    if (n4) {
                      e5(a3);
                      return;
                    }
                    Object.assign(a3.styles, t3.styles), a3.items.push(...t3.items), r2();
                  }, n3);
                }
                let i3 = t2.getReader(), a3 = {
                  items: [],
                  styles: /* @__PURE__ */ Object.create(null)
                };
                r2();
              });
            }
            getStructTree() {
              return this._transport.getStructTree(this._pageIndex);
            }
            _destroy() {
              this.destroyed = true;
              let e4 = [];
              for (let t2 of this._intentStates.values()) if (this._abortOperatorList({
                intentState: t2,
                reason: Error(`Page was destroyed.`),
                force: true
              }), !t2.opListReadCapability) for (let n3 of t2.renderTasks) e4.push(n3.completed), n3.cancel();
              return this.objs.clear(), this.#t = false, this.#r(), Promise.all(e4);
            }
            cleanup(e4 = false) {
              this.#t = true;
              let t2 = this.#n(false);
              return e4 && t2 && (this._stats &&= new c2.StatTimer()), t2;
            }
            #n(e4 = false) {
              if (this.#r(), !this.#t || this.destroyed) return false;
              if (e4) return this.#e = setTimeout(() => {
                this.#e = null, this.#n(false);
              }, 5e3), false;
              for (let { renderTasks: e5, operatorList: t2 } of this._intentStates.values()) if (e5.size > 0 || !t2.lastChunk) return false;
              return this._intentStates.clear(), this.objs.clear(), this.#t = false, true;
            }
            #r() {
              this.#e &&= (clearTimeout(this.#e), null);
            }
            _startRenderPage(e4, t2) {
              let n3 = this._intentStates.get(t2);
              n3 && (this._stats?.timeEnd(`Page Request`), n3.displayReadyCapability?.resolve(e4));
            }
            _renderPageChunk(e4, t2) {
              for (let n3 = 0, r2 = e4.length; n3 < r2; n3++) t2.operatorList.fnArray.push(e4.fnArray[n3]), t2.operatorList.argsArray.push(e4.argsArray[n3]);
              t2.operatorList.lastChunk = e4.lastChunk, t2.operatorList.separateAnnots = e4.separateAnnots;
              for (let e5 of t2.renderTasks) e5.operatorListChanged();
              e4.lastChunk && this.#n(true);
            }
            _pumpOperatorList({ renderingIntent: e4, cacheKey: t2, annotationStorageSerializable: n3 }) {
              let { map: r2, transfer: i3 } = n3, a3 = this._transport.messageHandler.sendWithStream(`GetOperatorList`, {
                pageIndex: this._pageIndex,
                intent: e4,
                cacheKey: t2,
                annotationStorage: r2
              }, i3).getReader(), o3 = this._intentStates.get(t2);
              o3.streamReader = a3;
              let s3 = () => {
                a3.read().then(({ value: e5, done: t3 }) => {
                  if (t3) {
                    o3.streamReader = null;
                    return;
                  }
                  this._transport.destroyed || (this._renderPageChunk(e5, o3), s3());
                }, (e5) => {
                  if (o3.streamReader = null, !this._transport.destroyed) {
                    if (o3.operatorList) {
                      o3.operatorList.lastChunk = true;
                      for (let e6 of o3.renderTasks) e6.operatorListChanged();
                      this.#n(true);
                    }
                    if (o3.displayReadyCapability) o3.displayReadyCapability.reject(e5);
                    else if (o3.opListReadCapability) o3.opListReadCapability.reject(e5);
                    else throw e5;
                  }
                });
              };
              s3();
            }
            _abortOperatorList({ intentState: e4, reason: t2, force: n3 = false }) {
              if (e4.streamReader) {
                if (e4.streamReaderCancelTimeout &&= (clearTimeout(e4.streamReaderCancelTimeout), null), !n3) {
                  if (e4.renderTasks.size > 0) return;
                  if (t2 instanceof c2.RenderingCancelledException) {
                    let n4 = 100;
                    t2.extraDelay > 0 && t2.extraDelay < 1e3 && (n4 += t2.extraDelay), e4.streamReaderCancelTimeout = setTimeout(() => {
                      e4.streamReaderCancelTimeout = null, this._abortOperatorList({
                        intentState: e4,
                        reason: t2,
                        force: true
                      });
                    }, n4);
                    return;
                  }
                }
                if (e4.streamReader.cancel(new o2.AbortException(t2.message)).catch(() => {
                }), e4.streamReader = null, !this._transport.destroyed) {
                  for (let [t3, n4] of this._intentStates) if (n4 === e4) {
                    this._intentStates.delete(t3);
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
          class I2 {
            #e = /* @__PURE__ */ new Set();
            #t = Promise.resolve();
            postMessage(e4, t2) {
              let n3 = {
                data: structuredClone(e4, t2 ? {
                  transfer: t2
                } : null)
              };
              this.#t.then(() => {
                for (let e5 of this.#e) e5.call(this, n3);
              });
            }
            addEventListener(e4, t2) {
              this.#e.add(t2);
            }
            removeEventListener(e4, t2) {
              this.#e.delete(t2);
            }
            terminate() {
              this.#e.clear();
            }
          }
          let L2 = {
            isWorkerDisabled: false,
            fakeWorkerId: 0
          };
          o2.isNodeJS && (L2.isWorkerDisabled = true, p2.GlobalWorkerOptions.workerSrc ||= `./pdf.worker.mjs`), L2.isSameOrigin = function(e4, t2) {
            let n3;
            try {
              if (n3 = new URL(e4), !n3.origin || n3.origin === `null`) return false;
            } catch {
              return false;
            }
            let r2 = new URL(t2, n3);
            return n3.origin === r2.origin;
          }, L2.createCDNWrapper = function(e4) {
            let t2 = `await import("${e4}");`;
            return URL.createObjectURL(new Blob([
              t2
            ], {
              type: `text/javascript`
            }));
          };
          class R2 {
            static #e;
            constructor({ name: e4 = null, port: t2 = null, verbosity: n3 = (0, o2.getVerbosityLevel)() } = {}) {
              if (this.name = e4, this.destroyed = false, this.verbosity = n3, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, t2) {
                if (R2.#e?.has(t2)) throw Error(`Cannot use more than one PDFWorker per port.`);
                (R2.#e ||= /* @__PURE__ */ new WeakMap()).set(t2, this), this._initializeFromPort(t2);
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
            _initializeFromPort(e4) {
              this._port = e4, this._messageHandler = new m2.MessageHandler(`main`, `worker`, e4), this._messageHandler.on(`ready`, function() {
              }), this._readyCapability.resolve(), this._messageHandler.send(`configure`, {
                verbosity: this.verbosity
              });
            }
            _initialize() {
              if (!L2.isWorkerDisabled && !R2.#t) {
                let { workerSrc: e4 } = R2;
                try {
                  L2.isSameOrigin(window.location.href, e4) || (e4 = L2.createCDNWrapper(new URL(e4, window.location).href));
                  let t2 = new Worker(e4, {
                    type: `module`
                  }), n3 = new m2.MessageHandler(`main`, `worker`, t2), r2 = () => {
                    t2.removeEventListener(`error`, i3), n3.destroy(), t2.terminate(), this.destroyed ? this._readyCapability.reject(Error(`Worker was destroyed`)) : this._setupFakeWorker();
                  }, i3 = () => {
                    this._webWorker || r2();
                  };
                  t2.addEventListener(`error`, i3), n3.on(`test`, (e5) => {
                    if (t2.removeEventListener(`error`, i3), this.destroyed) {
                      r2();
                      return;
                    }
                    e5 ? (this._messageHandler = n3, this._port = t2, this._webWorker = t2, this._readyCapability.resolve(), n3.send(`configure`, {
                      verbosity: this.verbosity
                    })) : (this._setupFakeWorker(), n3.destroy(), t2.terminate());
                  }), n3.on(`ready`, (e5) => {
                    if (t2.removeEventListener(`error`, i3), this.destroyed) {
                      r2();
                      return;
                    }
                    try {
                      a3();
                    } catch {
                      this._setupFakeWorker();
                    }
                  });
                  let a3 = () => {
                    let e5 = new Uint8Array();
                    n3.send(`test`, e5, [
                      e5.buffer
                    ]);
                  };
                  a3();
                  return;
                } catch {
                  (0, o2.info)(`The worker has been disabled.`);
                }
              }
              this._setupFakeWorker();
            }
            _setupFakeWorker() {
              L2.isWorkerDisabled ||= ((0, o2.warn)(`Setting up fake worker.`), true), R2._setupFakeWorkerGlobal.then((e4) => {
                if (this.destroyed) {
                  this._readyCapability.reject(Error(`Worker was destroyed`));
                  return;
                }
                let t2 = new I2();
                this._port = t2;
                let n3 = `fake${L2.fakeWorkerId++}`, r2 = new m2.MessageHandler(n3 + `_worker`, n3, t2);
                e4.setup(r2, t2);
                let i3 = new m2.MessageHandler(n3, n3 + `_worker`, t2);
                this._messageHandler = i3, this._readyCapability.resolve(), i3.send(`configure`, {
                  verbosity: this.verbosity
                });
              }).catch((e4) => {
                this._readyCapability.reject(Error(`Setting up fake worker failed: "${e4.message}".`));
              });
            }
            destroy() {
              this.destroyed = true, this._webWorker &&= (this._webWorker.terminate(), null), R2.#e?.delete(this._port), this._port = null, this._messageHandler &&= (this._messageHandler.destroy(), null);
            }
            static fromPort(e4) {
              if (!e4?.port) throw Error(`PDFWorker.fromPort - invalid method signature.`);
              let t2 = this.#e?.get(e4.port);
              if (t2) {
                if (t2._pendingDestroy) throw Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
                return t2;
              }
              return new R2(e4);
            }
            static get workerSrc() {
              if (p2.GlobalWorkerOptions.workerSrc) return p2.GlobalWorkerOptions.workerSrc;
              throw Error(`No "GlobalWorkerOptions.workerSrc" specified.`);
            }
            static get #t() {
              try {
                return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
              } catch {
                return null;
              }
            }
            static get _setupFakeWorkerGlobal() {
              return (0, o2.shadow)(this, `_setupFakeWorkerGlobal`, (async () => this.#t ? this.#t : (await t(() => import(this.workerSrc).then(async (m3) => {
                await m3.__tla;
                return m3;
              }), [])).WorkerMessageHandler)());
            }
          }
          class z2 {
            #e = /* @__PURE__ */ new Map();
            #t = /* @__PURE__ */ new Map();
            #n = /* @__PURE__ */ new Map();
            #r = /* @__PURE__ */ new Map();
            #i = null;
            constructor(e4, t2, n3, r2, i3) {
              this.messageHandler = e4, this.loadingTask = t2, this.commonObjs = new V2(), this.fontLoader = new l2.FontLoader({
                ownerDocument: r2.ownerDocument,
                styleElement: r2.styleElement
              }), this._params = r2, this.canvasFactory = i3.canvasFactory, this.filterFactory = i3.filterFactory, this.cMapReaderFactory = i3.cMapReaderFactory, this.standardFontDataFactory = i3.standardFontDataFactory, this.destroyed = false, this.destroyCapability = null, this._networkStream = n3, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
            }
            #a(e4, t2 = null) {
              let n3 = this.#e.get(e4);
              if (n3) return n3;
              let r2 = this.messageHandler.sendWithPromise(e4, t2);
              return this.#e.set(e4, r2), r2;
            }
            get annotationStorage() {
              return (0, o2.shadow)(this, `annotationStorage`, new s2.AnnotationStorage());
            }
            getRenderingIntent(e4, t2 = o2.AnnotationMode.ENABLE, n3 = null, r2 = false) {
              let i3 = o2.RenderingIntentFlag.DISPLAY, a3 = s2.SerializableEmpty;
              switch (e4) {
                case `any`:
                  i3 = o2.RenderingIntentFlag.ANY;
                  break;
                case `display`:
                  break;
                case `print`:
                  i3 = o2.RenderingIntentFlag.PRINT;
                  break;
                default:
                  (0, o2.warn)(`getRenderingIntent - invalid intent: ${e4}`);
              }
              switch (t2) {
                case o2.AnnotationMode.DISABLE:
                  i3 += o2.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                  break;
                case o2.AnnotationMode.ENABLE:
                  break;
                case o2.AnnotationMode.ENABLE_FORMS:
                  i3 += o2.RenderingIntentFlag.ANNOTATIONS_FORMS;
                  break;
                case o2.AnnotationMode.ENABLE_STORAGE:
                  i3 += o2.RenderingIntentFlag.ANNOTATIONS_STORAGE, a3 = (i3 & o2.RenderingIntentFlag.PRINT && n3 instanceof s2.PrintAnnotationStorage ? n3 : this.annotationStorage).serializable;
                  break;
                default:
                  (0, o2.warn)(`getRenderingIntent - invalid annotationMode: ${t2}`);
              }
              return r2 && (i3 += o2.RenderingIntentFlag.OPLIST), {
                renderingIntent: i3,
                cacheKey: `${i3}_${a3.hash}`,
                annotationStorageSerializable: a3
              };
            }
            destroy() {
              if (this.destroyCapability) return this.destroyCapability.promise;
              this.destroyed = true, this.destroyCapability = Promise.withResolvers(), this.#i?.reject(Error(`Worker was destroyed during onPassword callback`));
              let e4 = [];
              for (let t3 of this.#t.values()) e4.push(t3._destroy());
              this.#t.clear(), this.#n.clear(), this.#r.clear(), this.hasOwnProperty(`annotationStorage`) && this.annotationStorage.resetModified();
              let t2 = this.messageHandler.sendWithPromise(`Terminate`, null);
              return e4.push(t2), Promise.all(e4).then(() => {
                this.commonObjs.clear(), this.fontLoader.clear(), this.#e.clear(), this.filterFactory.destroy(), (0, f2.cleanupTextLayer)(), this._networkStream?.cancelAllRequests(new o2.AbortException(`Worker was terminated.`)), this.messageHandler &&= (this.messageHandler.destroy(), null), this.destroyCapability.resolve();
              }, this.destroyCapability.reject), this.destroyCapability.promise;
            }
            setupMessageHandler() {
              let { messageHandler: e4, loadingTask: t2 } = this;
              e4.on(`GetReader`, (e5, t3) => {
                (0, o2.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (e6) => {
                  this._lastProgress = {
                    loaded: e6.loaded,
                    total: e6.total
                  };
                }, t3.onPull = () => {
                  this._fullReader.read().then(function({ value: e6, done: n3 }) {
                    if (n3) {
                      t3.close();
                      return;
                    }
                    (0, o2.assert)(e6 instanceof ArrayBuffer, `GetReader - expected an ArrayBuffer.`), t3.enqueue(new Uint8Array(e6), 1, [
                      e6
                    ]);
                  }).catch((e6) => {
                    t3.error(e6);
                  });
                }, t3.onCancel = (e6) => {
                  this._fullReader.cancel(e6), t3.ready.catch((e7) => {
                    if (!this.destroyed) throw e7;
                  });
                };
              }), e4.on(`ReaderHeadersReady`, (e5) => {
                let n3 = Promise.withResolvers(), r2 = this._fullReader;
                return r2.headersReady.then(() => {
                  (!r2.isStreamingSupported || !r2.isRangeSupported) && (this._lastProgress && t2.onProgress?.(this._lastProgress), r2.onProgress = (e6) => {
                    t2.onProgress?.({
                      loaded: e6.loaded,
                      total: e6.total
                    });
                  }), n3.resolve({
                    isStreamingSupported: r2.isStreamingSupported,
                    isRangeSupported: r2.isRangeSupported,
                    contentLength: r2.contentLength
                  });
                }, n3.reject), n3.promise;
              }), e4.on(`GetRangeReader`, (e5, t3) => {
                (0, o2.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                let n3 = this._networkStream.getRangeReader(e5.begin, e5.end);
                if (!n3) {
                  t3.close();
                  return;
                }
                t3.onPull = () => {
                  n3.read().then(function({ value: e6, done: n4 }) {
                    if (n4) {
                      t3.close();
                      return;
                    }
                    (0, o2.assert)(e6 instanceof ArrayBuffer, `GetRangeReader - expected an ArrayBuffer.`), t3.enqueue(new Uint8Array(e6), 1, [
                      e6
                    ]);
                  }).catch((e6) => {
                    t3.error(e6);
                  });
                }, t3.onCancel = (e6) => {
                  n3.cancel(e6), t3.ready.catch((e7) => {
                    if (!this.destroyed) throw e7;
                  });
                };
              }), e4.on(`GetDoc`, ({ pdfInfo: e5 }) => {
                this._numPages = e5.numPages, this._htmlForXfa = e5.htmlForXfa, delete e5.htmlForXfa, t2._capability.resolve(new P2(e5, this));
              }), e4.on(`DocException`, function(e5) {
                let n3;
                switch (e5.name) {
                  case `PasswordException`:
                    n3 = new o2.PasswordException(e5.message, e5.code);
                    break;
                  case `InvalidPDFException`:
                    n3 = new o2.InvalidPDFException(e5.message);
                    break;
                  case `MissingPDFException`:
                    n3 = new o2.MissingPDFException(e5.message);
                    break;
                  case `UnexpectedResponseException`:
                    n3 = new o2.UnexpectedResponseException(e5.message, e5.status);
                    break;
                  case `UnknownErrorException`:
                    n3 = new o2.UnknownErrorException(e5.message, e5.details);
                    break;
                  default:
                    (0, o2.unreachable)(`DocException - expected a valid Error.`);
                }
                t2._capability.reject(n3);
              }), e4.on(`PasswordRequest`, (e5) => {
                if (this.#i = Promise.withResolvers(), t2.onPassword) {
                  let n3 = (e6) => {
                    e6 instanceof Error ? this.#i.reject(e6) : this.#i.resolve({
                      password: e6
                    });
                  };
                  try {
                    t2.onPassword(n3, e5.code);
                  } catch (e6) {
                    this.#i.reject(e6);
                  }
                } else this.#i.reject(new o2.PasswordException(e5.message, e5.code));
                return this.#i.promise;
              }), e4.on(`DataLoaded`, (e5) => {
                t2.onProgress?.({
                  loaded: e5.length,
                  total: e5.length
                }), this.downloadInfoCapability.resolve(e5);
              }), e4.on(`StartRenderPage`, (e5) => {
                this.destroyed || this.#t.get(e5.pageIndex)._startRenderPage(e5.transparency, e5.cacheKey);
              }), e4.on(`commonobj`, ([t3, n3, r2]) => {
                if (this.destroyed || this.commonObjs.has(t3)) return null;
                switch (n3) {
                  case `Font`:
                    let i3 = this._params;
                    if (`error` in r2) {
                      let e5 = r2.error;
                      (0, o2.warn)(`Error during font loading: ${e5}`), this.commonObjs.resolve(t3, e5);
                      break;
                    }
                    let a3 = i3.pdfBug && globalThis.FontInspector?.enabled ? (e5, t4) => globalThis.FontInspector.fontAdded(e5, t4) : null, s3 = new l2.FontFaceObject(r2, {
                      disableFontFace: i3.disableFontFace,
                      ignoreErrors: i3.ignoreErrors,
                      inspectFont: a3
                    });
                    this.fontLoader.bind(s3).catch(() => e4.sendWithPromise(`FontFallback`, {
                      id: t3
                    })).finally(() => {
                      !i3.fontExtraProperties && s3.data && (s3.data = null), this.commonObjs.resolve(t3, s3);
                    });
                    break;
                  case `CopyLocalImage`:
                    let { imageRef: c3 } = r2;
                    (0, o2.assert)(c3, `The imageRef must be defined.`);
                    for (let e5 of this.#t.values()) for (let [, n4] of e5.objs) if (n4.ref === c3) return n4.dataLen ? (this.commonObjs.resolve(t3, structuredClone(n4)), n4.dataLen) : null;
                    break;
                  case `FontPath`:
                  case `Image`:
                  case `Pattern`:
                    this.commonObjs.resolve(t3, r2);
                    break;
                  default:
                    throw Error(`Got unknown common object type ${n3}`);
                }
                return null;
              }), e4.on(`obj`, ([e5, t3, n3, r2]) => {
                if (this.destroyed) return;
                let i3 = this.#t.get(t3);
                if (!i3.objs.has(e5)) {
                  if (i3._intentStates.size === 0) {
                    r2?.bitmap?.close();
                    return;
                  }
                  switch (n3) {
                    case `Image`:
                      i3.objs.resolve(e5, r2), r2?.dataLen > o2.MAX_IMAGE_SIZE_TO_CACHE && (i3._maybeCleanupAfterRender = true);
                      break;
                    case `Pattern`:
                      i3.objs.resolve(e5, r2);
                      break;
                    default:
                      throw Error(`Got unknown object type ${n3}`);
                  }
                }
              }), e4.on(`DocProgress`, (e5) => {
                this.destroyed || t2.onProgress?.({
                  loaded: e5.loaded,
                  total: e5.total
                });
              }), e4.on(`FetchBuiltInCMap`, (e5) => this.destroyed ? Promise.reject(Error(`Worker was destroyed.`)) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(e5) : Promise.reject(Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), e4.on(`FetchStandardFontData`, (e5) => this.destroyed ? Promise.reject(Error(`Worker was destroyed.`)) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(e5) : Promise.reject(Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
            }
            getData() {
              return this.messageHandler.sendWithPromise(`GetData`, null);
            }
            saveDocument() {
              this.annotationStorage.size <= 0 && (0, o2.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
              let { map: e4, transfer: t2 } = this.annotationStorage.serializable;
              return this.messageHandler.sendWithPromise(`SaveDocument`, {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: e4,
                filename: this._fullReader?.filename ?? null
              }, t2).finally(() => {
                this.annotationStorage.resetModified();
              });
            }
            getPage(e4) {
              if (!Number.isInteger(e4) || e4 <= 0 || e4 > this._numPages) return Promise.reject(Error(`Invalid page request.`));
              let t2 = e4 - 1, n3 = this.#n.get(t2);
              if (n3) return n3;
              let r2 = this.messageHandler.sendWithPromise(`GetPage`, {
                pageIndex: t2
              }).then((n4) => {
                if (this.destroyed) throw Error(`Transport destroyed`);
                n4.refStr && this.#r.set(n4.refStr, e4);
                let r3 = new F2(t2, n4, this, this._params.pdfBug);
                return this.#t.set(t2, r3), r3;
              });
              return this.#n.set(t2, r2), r2;
            }
            getPageIndex(e4) {
              return j2(e4) ? this.messageHandler.sendWithPromise(`GetPageIndex`, {
                num: e4.num,
                gen: e4.gen
              }) : Promise.reject(Error(`Invalid pageIndex request.`));
            }
            getAnnotations(e4, t2) {
              return this.messageHandler.sendWithPromise(`GetAnnotations`, {
                pageIndex: e4,
                intent: t2
              });
            }
            getFieldObjects() {
              return this.#a(`GetFieldObjects`);
            }
            hasJSActions() {
              return this.#a(`HasJSActions`);
            }
            getCalculationOrderIds() {
              return this.messageHandler.sendWithPromise(`GetCalculationOrderIds`, null);
            }
            getDestinations() {
              return this.messageHandler.sendWithPromise(`GetDestinations`, null);
            }
            getDestination(e4) {
              return typeof e4 == `string` ? this.messageHandler.sendWithPromise(`GetDestination`, {
                id: e4
              }) : Promise.reject(Error(`Invalid destination request.`));
            }
            getPageLabels() {
              return this.messageHandler.sendWithPromise(`GetPageLabels`, null);
            }
            getPageLayout() {
              return this.messageHandler.sendWithPromise(`GetPageLayout`, null);
            }
            getPageMode() {
              return this.messageHandler.sendWithPromise(`GetPageMode`, null);
            }
            getViewerPreferences() {
              return this.messageHandler.sendWithPromise(`GetViewerPreferences`, null);
            }
            getOpenAction() {
              return this.messageHandler.sendWithPromise(`GetOpenAction`, null);
            }
            getAttachments() {
              return this.messageHandler.sendWithPromise(`GetAttachments`, null);
            }
            getDocJSActions() {
              return this.#a(`GetDocJSActions`);
            }
            getPageJSActions(e4) {
              return this.messageHandler.sendWithPromise(`GetPageJSActions`, {
                pageIndex: e4
              });
            }
            getStructTree(e4) {
              return this.messageHandler.sendWithPromise(`GetStructTree`, {
                pageIndex: e4
              });
            }
            getOutline() {
              return this.messageHandler.sendWithPromise(`GetOutline`, null);
            }
            getOptionalContentConfig(e4) {
              return this.#a(`GetOptionalContentConfig`).then((t2) => new g2.OptionalContentConfig(t2, e4));
            }
            getPermissions() {
              return this.messageHandler.sendWithPromise(`GetPermissions`, null);
            }
            getMetadata() {
              let e4 = `GetMetadata`, t2 = this.#e.get(e4);
              if (t2) return t2;
              let n3 = this.messageHandler.sendWithPromise(e4, null).then((e5) => ({
                info: e5[0],
                metadata: e5[1] ? new h2.Metadata(e5[1]) : null,
                contentDispositionFilename: this._fullReader?.filename ?? null,
                contentLength: this._fullReader?.contentLength ?? null
              }));
              return this.#e.set(e4, n3), n3;
            }
            getMarkInfo() {
              return this.messageHandler.sendWithPromise(`GetMarkInfo`, null);
            }
            async startCleanup(e4 = false) {
              if (!this.destroyed) {
                await this.messageHandler.sendWithPromise(`Cleanup`, null);
                for (let e5 of this.#t.values()) if (!e5.cleanup()) throw Error(`startCleanup: Page ${e5.pageNumber} is currently rendering.`);
                this.commonObjs.clear(), e4 || this.fontLoader.clear(), this.#e.clear(), this.filterFactory.destroy(true), (0, f2.cleanupTextLayer)();
              }
            }
            cachedPageNumber(e4) {
              if (!j2(e4)) return null;
              let t2 = e4.gen === 0 ? `${e4.num}R` : `${e4.num}R${e4.gen}`;
              return this.#r.get(t2) ?? null;
            }
            get loadingParams() {
              let { disableAutoFetch: e4, enableXfa: t2 } = this._params;
              return (0, o2.shadow)(this, `loadingParams`, {
                disableAutoFetch: e4,
                enableXfa: t2
              });
            }
          }
          let B2 = /* @__PURE__ */ Symbol(`INITIAL_DATA`);
          class V2 {
            #e = /* @__PURE__ */ Object.create(null);
            #t(e4) {
              return this.#e[e4] ||= {
                ...Promise.withResolvers(),
                data: B2
              };
            }
            get(e4, t2 = null) {
              if (t2) {
                let n4 = this.#t(e4);
                return n4.promise.then(() => t2(n4.data)), null;
              }
              let n3 = this.#e[e4];
              if (!n3 || n3.data === B2) throw Error(`Requesting object that isn't resolved yet ${e4}.`);
              return n3.data;
            }
            has(e4) {
              let t2 = this.#e[e4];
              return !!t2 && t2.data !== B2;
            }
            resolve(e4, t2 = null) {
              let n3 = this.#t(e4);
              n3.data = t2, n3.resolve();
            }
            clear() {
              for (let e4 in this.#e) {
                let { data: t2 } = this.#e[e4];
                t2?.bitmap?.close();
              }
              this.#e = /* @__PURE__ */ Object.create(null);
            }
            *[Symbol.iterator]() {
              for (let e4 in this.#e) {
                let { data: t2 } = this.#e[e4];
                t2 !== B2 && (yield [
                  e4,
                  t2
                ]);
              }
            }
          }
          class H2 {
            #e = null;
            constructor(e4) {
              this.#e = e4, this.onContinue = null;
            }
            get promise() {
              return this.#e.capability.promise;
            }
            cancel(e4 = 0) {
              this.#e.cancel(null, e4);
            }
            get separateAnnots() {
              let { separateAnnots: e4 } = this.#e.operatorList;
              if (!e4) return false;
              let { annotationCanvasMap: t2 } = this.#e;
              return e4.form || e4.canvas && t2?.size > 0;
            }
          }
          class U2 {
            static #e = /* @__PURE__ */ new WeakSet();
            constructor({ callback: e4, params: t2, objs: n3, commonObjs: r2, annotationCanvasMap: i3, operatorList: a3, pageIndex: o3, canvasFactory: s3, filterFactory: c3, useRequestAnimationFrame: l3 = false, pdfBug: u3 = false, pageColors: d3 = null }) {
              this.callback = e4, this.params = t2, this.objs = n3, this.commonObjs = r2, this.annotationCanvasMap = i3, this.operatorListIdx = null, this.operatorList = a3, this._pageIndex = o3, this.canvasFactory = s3, this.filterFactory = c3, this._pdfBug = u3, this.pageColors = d3, this.running = false, this.graphicsReadyCallback = null, this.graphicsReady = false, this._useRequestAnimationFrame = l3 === true && typeof window < `u`, this.cancelled = false, this.capability = Promise.withResolvers(), this.task = new H2(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = t2.canvasContext.canvas;
            }
            get completed() {
              return this.capability.promise.catch(function() {
              });
            }
            initializeGraphics({ transparency: e4 = false, optionalContentConfig: t2 }) {
              if (this.cancelled) return;
              if (this._canvas) {
                if (U2.#e.has(this._canvas)) throw Error(`Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.`);
                U2.#e.add(this._canvas);
              }
              this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
              let { canvasContext: n3, viewport: r2, transform: i3, background: a3 } = this.params;
              this.gfx = new d2.CanvasGraphics(n3, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: t2
              }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
                transform: i3,
                viewport: r2,
                transparency: e4,
                background: a3
              }), this.operatorListIdx = 0, this.graphicsReady = true, this.graphicsReadyCallback?.();
            }
            cancel(e4 = null, t2 = 0) {
              this.running = false, this.cancelled = true, this.gfx?.endDrawing(), U2.#e.delete(this._canvas), this.callback(e4 || new c2.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, t2));
            }
            operatorListChanged() {
              if (!this.graphicsReady) {
                this.graphicsReadyCallback ||= this._continueBound;
                return;
              }
              this.stepper?.updateOperatorList(this.operatorList), !this.running && this._continue();
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
              this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = false, this.operatorList.lastChunk && (this.gfx.endDrawing(), U2.#e.delete(this._canvas), this.callback())));
            }
          }
          let W2 = `4.2.67`, G2 = `49b388101`;
          a2();
        } catch (e4) {
          a2(e4);
        }
      });
    }),
    583: ((e2, t2, n2) => {
      n2.d(t2, {
        BaseCMapReaderFactory: () => o2,
        BaseCanvasFactory: () => a2,
        BaseFilterFactory: () => i2,
        BaseSVGFactory: () => c2,
        BaseStandardFontDataFactory: () => s2
      });
      var r2 = n2(292);
      class i2 {
        constructor() {
          this.constructor === i2 && (0, r2.unreachable)(`Cannot initialize BaseFilterFactory.`);
        }
        addFilter(e3) {
          return `none`;
        }
        addHCMFilter(e3, t3) {
          return `none`;
        }
        addHighlightHCMFilter(e3, t3, n3, r3, i3) {
          return `none`;
        }
        destroy(e3 = false) {
        }
      }
      class a2 {
        constructor() {
          this.constructor === a2 && (0, r2.unreachable)(`Cannot initialize BaseCanvasFactory.`);
        }
        create(e3, t3) {
          if (e3 <= 0 || t3 <= 0) throw Error(`Invalid canvas size`);
          let n3 = this._createCanvas(e3, t3);
          return {
            canvas: n3,
            context: n3.getContext(`2d`)
          };
        }
        reset(e3, t3, n3) {
          if (!e3.canvas) throw Error(`Canvas is not specified`);
          if (t3 <= 0 || n3 <= 0) throw Error(`Invalid canvas size`);
          e3.canvas.width = t3, e3.canvas.height = n3;
        }
        destroy(e3) {
          if (!e3.canvas) throw Error(`Canvas is not specified`);
          e3.canvas.width = 0, e3.canvas.height = 0, e3.canvas = null, e3.context = null;
        }
        _createCanvas(e3, t3) {
          (0, r2.unreachable)("Abstract method `_createCanvas` called.");
        }
      }
      class o2 {
        constructor({ baseUrl: e3 = null, isCompressed: t3 = true }) {
          this.constructor === o2 && (0, r2.unreachable)(`Cannot initialize BaseCMapReaderFactory.`), this.baseUrl = e3, this.isCompressed = t3;
        }
        async fetch({ name: e3 }) {
          if (!this.baseUrl) throw Error(`The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.`);
          if (!e3) throw Error(`CMap name must be specified.`);
          let t3 = this.baseUrl + e3 + (this.isCompressed ? `.bcmap` : ``), n3 = this.isCompressed ? r2.CMapCompressionType.BINARY : r2.CMapCompressionType.NONE;
          return this._fetchData(t3, n3).catch((e4) => {
            throw Error(`Unable to load ${this.isCompressed ? `binary ` : ``}CMap at: ${t3}`);
          });
        }
        _fetchData(e3, t3) {
          (0, r2.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      class s2 {
        constructor({ baseUrl: e3 = null }) {
          this.constructor === s2 && (0, r2.unreachable)(`Cannot initialize BaseStandardFontDataFactory.`), this.baseUrl = e3;
        }
        async fetch({ filename: e3 }) {
          if (!this.baseUrl) throw Error(`The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.`);
          if (!e3) throw Error(`Font filename must be specified.`);
          let t3 = `${this.baseUrl}${e3}`;
          return this._fetchData(t3).catch((e4) => {
            throw Error(`Unable to load font data at: ${t3}`);
          });
        }
        _fetchData(e3) {
          (0, r2.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      class c2 {
        constructor() {
          this.constructor === c2 && (0, r2.unreachable)(`Cannot initialize BaseSVGFactory.`);
        }
        create(e3, t3, n3 = false) {
          if (e3 <= 0 || t3 <= 0) throw Error(`Invalid SVG dimensions`);
          let r3 = this._createSVG(`svg:svg`);
          return r3.setAttribute(`version`, `1.1`), n3 || (r3.setAttribute(`width`, `${e3}px`), r3.setAttribute(`height`, `${t3}px`)), r3.setAttribute(`preserveAspectRatio`, `none`), r3.setAttribute(`viewBox`, `0 0 ${e3} ${t3}`), r3;
        }
        createElement(e3) {
          if (typeof e3 != `string`) throw Error(`Invalid SVG element type`);
          return this._createSVG(e3);
        }
        _createSVG(e3) {
          (0, r2.unreachable)("Abstract method `_createSVG` called.");
        }
      }
    }),
    923: ((e2, t2, n2) => {
      n2.d(t2, {
        CanvasGraphics: () => R2
      });
      var r2 = n2(292), i2 = n2(419);
      let a2 = {
        FILL: `Fill`,
        STROKE: `Stroke`,
        SHADING: `Shading`
      };
      function o2(e3, t3) {
        if (!t3) return;
        let n3 = t3[2] - t3[0], r3 = t3[3] - t3[1], i3 = new Path2D();
        i3.rect(t3[0], t3[1], n3, r3), e3.clip(i3);
      }
      class s2 {
        constructor() {
          this.constructor === s2 && (0, r2.unreachable)(`Cannot initialize BaseShadingPattern.`);
        }
        getPattern() {
          (0, r2.unreachable)("Abstract method `getPattern` called.");
        }
      }
      class c2 extends s2 {
        constructor(e3) {
          super(), this._type = e3[1], this._bbox = e3[2], this._colorStops = e3[3], this._p0 = e3[4], this._p1 = e3[5], this._r0 = e3[6], this._r1 = e3[7], this.matrix = null;
        }
        _createGradient(e3) {
          let t3;
          this._type === `axial` ? t3 = e3.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === `radial` && (t3 = e3.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
          for (let e4 of this._colorStops) t3.addColorStop(e4[0], e4[1]);
          return t3;
        }
        getPattern(e3, t3, n3, s3) {
          let c3;
          if (s3 === a2.STROKE || s3 === a2.FILL) {
            let a3 = t3.current.getClippedPathBoundingBox(s3, (0, i2.getCurrentTransform)(e3)) || [
              0,
              0,
              0,
              0
            ], l3 = Math.ceil(a3[2] - a3[0]) || 1, u3 = Math.ceil(a3[3] - a3[1]) || 1, d3 = t3.cachedCanvases.getCanvas(`pattern`, l3, u3, true), f3 = d3.context;
            f3.clearRect(0, 0, f3.canvas.width, f3.canvas.height), f3.beginPath(), f3.rect(0, 0, f3.canvas.width, f3.canvas.height), f3.translate(-a3[0], -a3[1]), n3 = r2.Util.transform(n3, [
              1,
              0,
              0,
              1,
              a3[0],
              a3[1]
            ]), f3.transform(...t3.baseTransform), this.matrix && f3.transform(...this.matrix), o2(f3, this._bbox), f3.fillStyle = this._createGradient(f3), f3.fill(), c3 = e3.createPattern(d3.canvas, `no-repeat`);
            let p3 = new DOMMatrix(n3);
            c3.setTransform(p3);
          } else o2(e3, this._bbox), c3 = this._createGradient(e3);
          return c3;
        }
      }
      function l2(e3, t3, n3, r3, i3, a3, o3, s3) {
        let c3 = t3.coords, l3 = t3.colors, u3 = e3.data, d3 = e3.width * 4, f3;
        c3[n3 + 1] > c3[r3 + 1] && (f3 = n3, n3 = r3, r3 = f3, f3 = a3, a3 = o3, o3 = f3), c3[r3 + 1] > c3[i3 + 1] && (f3 = r3, r3 = i3, i3 = f3, f3 = o3, o3 = s3, s3 = f3), c3[n3 + 1] > c3[r3 + 1] && (f3 = n3, n3 = r3, r3 = f3, f3 = a3, a3 = o3, o3 = f3);
        let p3 = (c3[n3] + t3.offsetX) * t3.scaleX, m3 = (c3[n3 + 1] + t3.offsetY) * t3.scaleY, h3 = (c3[r3] + t3.offsetX) * t3.scaleX, g3 = (c3[r3 + 1] + t3.offsetY) * t3.scaleY, _3 = (c3[i3] + t3.offsetX) * t3.scaleX, v3 = (c3[i3 + 1] + t3.offsetY) * t3.scaleY;
        if (m3 >= v3) return;
        let y3 = l3[a3], b3 = l3[a3 + 1], x3 = l3[a3 + 2], S3 = l3[o3], C3 = l3[o3 + 1], w3 = l3[o3 + 2], T3 = l3[s3], E3 = l3[s3 + 1], D3 = l3[s3 + 2], O3 = Math.round(m3), k3 = Math.round(v3), A3, j3, M3, N3, P3, F3, I3, L3;
        for (let e4 = O3; e4 <= k3; e4++) {
          if (e4 < g3) {
            let t5 = e4 < m3 ? 0 : (m3 - e4) / (m3 - g3);
            A3 = p3 - (p3 - h3) * t5, j3 = y3 - (y3 - S3) * t5, M3 = b3 - (b3 - C3) * t5, N3 = x3 - (x3 - w3) * t5;
          } else {
            let t5;
            t5 = e4 > v3 ? 1 : g3 === v3 ? 0 : (g3 - e4) / (g3 - v3), A3 = h3 - (h3 - _3) * t5, j3 = S3 - (S3 - T3) * t5, M3 = C3 - (C3 - E3) * t5, N3 = w3 - (w3 - D3) * t5;
          }
          let t4;
          t4 = e4 < m3 ? 0 : e4 > v3 ? 1 : (m3 - e4) / (m3 - v3), P3 = p3 - (p3 - _3) * t4, F3 = y3 - (y3 - T3) * t4, I3 = b3 - (b3 - E3) * t4, L3 = x3 - (x3 - D3) * t4;
          let n4 = Math.round(Math.min(A3, P3)), r4 = Math.round(Math.max(A3, P3)), i4 = d3 * e4 + n4 * 4;
          for (let e5 = n4; e5 <= r4; e5++) t4 = (A3 - e5) / (A3 - P3), t4 < 0 ? t4 = 0 : t4 > 1 && (t4 = 1), u3[i4++] = j3 - (j3 - F3) * t4 | 0, u3[i4++] = M3 - (M3 - I3) * t4 | 0, u3[i4++] = N3 - (N3 - L3) * t4 | 0, u3[i4++] = 255;
        }
      }
      function u2(e3, t3, n3) {
        let r3 = t3.coords, i3 = t3.colors, a3, o3;
        switch (t3.type) {
          case `lattice`:
            let s3 = t3.verticesPerRow, c3 = Math.floor(r3.length / s3) - 1, u3 = s3 - 1;
            for (a3 = 0; a3 < c3; a3++) {
              let t4 = a3 * s3;
              for (let a4 = 0; a4 < u3; a4++, t4++) l2(e3, n3, r3[t4], r3[t4 + 1], r3[t4 + s3], i3[t4], i3[t4 + 1], i3[t4 + s3]), l2(e3, n3, r3[t4 + s3 + 1], r3[t4 + 1], r3[t4 + s3], i3[t4 + s3 + 1], i3[t4 + 1], i3[t4 + s3]);
            }
            break;
          case `triangles`:
            for (a3 = 0, o3 = r3.length; a3 < o3; a3 += 3) l2(e3, n3, r3[a3], r3[a3 + 1], r3[a3 + 2], i3[a3], i3[a3 + 1], i3[a3 + 2]);
            break;
          default:
            throw Error(`illegal figure`);
        }
      }
      class d2 extends s2 {
        constructor(e3) {
          super(), this._coords = e3[2], this._colors = e3[3], this._figures = e3[4], this._bounds = e3[5], this._bbox = e3[7], this._background = e3[8], this.matrix = null;
        }
        _createMeshCanvas(e3, t3, n3) {
          let r3 = 1.1, i3 = 3e3, a3 = Math.floor(this._bounds[0]), o3 = Math.floor(this._bounds[1]), s3 = Math.ceil(this._bounds[2]) - a3, c3 = Math.ceil(this._bounds[3]) - o3, l3 = Math.min(Math.ceil(Math.abs(s3 * e3[0] * r3)), i3), d3 = Math.min(Math.ceil(Math.abs(c3 * e3[1] * r3)), i3), f3 = s3 / l3, p3 = c3 / d3, m3 = {
            coords: this._coords,
            colors: this._colors,
            offsetX: -a3,
            offsetY: -o3,
            scaleX: 1 / f3,
            scaleY: 1 / p3
          }, h3 = l3 + 4, g3 = d3 + 4, _3 = n3.getCanvas(`mesh`, h3, g3, false), v3 = _3.context, y3 = v3.createImageData(l3, d3);
          if (t3) {
            let e4 = y3.data;
            for (let n4 = 0, r4 = e4.length; n4 < r4; n4 += 4) e4[n4] = t3[0], e4[n4 + 1] = t3[1], e4[n4 + 2] = t3[2], e4[n4 + 3] = 255;
          }
          for (let e4 of this._figures) u2(y3, e4, m3);
          return v3.putImageData(y3, 2, 2), {
            canvas: _3.canvas,
            offsetX: a3 - 2 * f3,
            offsetY: o3 - 2 * p3,
            scaleX: f3,
            scaleY: p3
          };
        }
        getPattern(e3, t3, n3, s3) {
          o2(e3, this._bbox);
          let c3;
          if (s3 === a2.SHADING) c3 = r2.Util.singularValueDecompose2dScale((0, i2.getCurrentTransform)(e3));
          else if (c3 = r2.Util.singularValueDecompose2dScale(t3.baseTransform), this.matrix) {
            let e4 = r2.Util.singularValueDecompose2dScale(this.matrix);
            c3 = [
              c3[0] * e4[0],
              c3[1] * e4[1]
            ];
          }
          let l3 = this._createMeshCanvas(c3, s3 === a2.SHADING ? null : this._background, t3.cachedCanvases);
          return s3 !== a2.SHADING && (e3.setTransform(...t3.baseTransform), this.matrix && e3.transform(...this.matrix)), e3.translate(l3.offsetX, l3.offsetY), e3.scale(l3.scaleX, l3.scaleY), e3.createPattern(l3.canvas, `no-repeat`);
        }
      }
      class f2 extends s2 {
        getPattern() {
          return `hotpink`;
        }
      }
      function p2(e3) {
        switch (e3[0]) {
          case `RadialAxial`:
            return new c2(e3);
          case `Mesh`:
            return new d2(e3);
          case `Dummy`:
            return new f2();
        }
        throw Error(`Unknown IR type: ${e3[0]}`);
      }
      let m2 = {
        COLORED: 1,
        UNCOLORED: 2
      };
      class h2 {
        static MAX_PATTERN_SIZE = 3e3;
        constructor(e3, t3, n3, r3, i3) {
          this.operatorList = e3[2], this.matrix = e3[3] || [
            1,
            0,
            0,
            1,
            0,
            0
          ], this.bbox = e3[4], this.xstep = e3[5], this.ystep = e3[6], this.paintType = e3[7], this.tilingType = e3[8], this.color = t3, this.ctx = n3, this.canvasGraphicsFactory = r3, this.baseTransform = i3;
        }
        createPatternCanvas(e3) {
          let t3 = this.operatorList, n3 = this.bbox, a3 = this.xstep, o3 = this.ystep, s3 = this.paintType, c3 = this.tilingType, l3 = this.color, u3 = this.canvasGraphicsFactory;
          (0, r2.info)(`TilingType: ` + c3);
          let d3 = n3[0], f3 = n3[1], p3 = n3[2], m3 = n3[3], h3 = r2.Util.singularValueDecompose2dScale(this.matrix), g3 = r2.Util.singularValueDecompose2dScale(this.baseTransform), _3 = [
            h3[0] * g3[0],
            h3[1] * g3[1]
          ], v3 = this.getSizeAndScale(a3, this.ctx.canvas.width, _3[0]), y3 = this.getSizeAndScale(o3, this.ctx.canvas.height, _3[1]), b3 = e3.cachedCanvases.getCanvas(`pattern`, v3.size, y3.size, true), x3 = b3.context, S3 = u3.createCanvasGraphics(x3);
          S3.groupLevel = e3.groupLevel, this.setFillAndStrokeStyleToContext(S3, s3, l3);
          let C3 = d3, w3 = f3, T3 = p3, E3 = m3;
          return d3 < 0 && (C3 = 0, T3 += Math.abs(d3)), f3 < 0 && (w3 = 0, E3 += Math.abs(f3)), x3.translate(-(v3.scale * C3), -(y3.scale * w3)), S3.transform(v3.scale, 0, 0, y3.scale, 0, 0), x3.save(), this.clipBbox(S3, C3, w3, T3, E3), S3.baseTransform = (0, i2.getCurrentTransform)(S3.ctx), S3.executeOperatorList(t3), S3.endDrawing(), {
            canvas: b3.canvas,
            scaleX: v3.scale,
            scaleY: y3.scale,
            offsetX: C3,
            offsetY: w3
          };
        }
        getSizeAndScale(e3, t3, n3) {
          e3 = Math.abs(e3);
          let r3 = Math.max(h2.MAX_PATTERN_SIZE, t3), i3 = Math.ceil(e3 * n3);
          return i3 >= r3 ? i3 = r3 : n3 = i3 / e3, {
            scale: n3,
            size: i3
          };
        }
        clipBbox(e3, t3, n3, r3, a3) {
          let o3 = r3 - t3, s3 = a3 - n3;
          e3.ctx.rect(t3, n3, o3, s3), e3.current.updateRectMinMax((0, i2.getCurrentTransform)(e3.ctx), [
            t3,
            n3,
            r3,
            a3
          ]), e3.clip(), e3.endPath();
        }
        setFillAndStrokeStyleToContext(e3, t3, n3) {
          let i3 = e3.ctx, a3 = e3.current;
          switch (t3) {
            case m2.COLORED:
              let e4 = this.ctx;
              i3.fillStyle = e4.fillStyle, i3.strokeStyle = e4.strokeStyle, a3.fillColor = e4.fillStyle, a3.strokeColor = e4.strokeStyle;
              break;
            case m2.UNCOLORED:
              let o3 = r2.Util.makeHexColor(n3[0], n3[1], n3[2]);
              i3.fillStyle = o3, i3.strokeStyle = o3, a3.fillColor = o3, a3.strokeColor = o3;
              break;
            default:
              throw new r2.FormatError(`Unsupported paint type: ${t3}`);
          }
        }
        getPattern(e3, t3, n3, i3) {
          let o3 = n3;
          i3 !== a2.SHADING && (o3 = r2.Util.transform(o3, t3.baseTransform), this.matrix && (o3 = r2.Util.transform(o3, this.matrix)));
          let s3 = this.createPatternCanvas(t3), c3 = new DOMMatrix(o3);
          c3 = c3.translate(s3.offsetX, s3.offsetY), c3 = c3.scale(1 / s3.scaleX, 1 / s3.scaleY);
          let l3 = e3.createPattern(s3.canvas, `repeat`);
          return l3.setTransform(c3), l3;
        }
      }
      function g2({ src: e3, srcPos: t3 = 0, dest: n3, width: i3, height: a3, nonBlackColor: o3 = 4294967295, inverseDecode: s3 = false }) {
        let c3 = r2.FeatureTest.isLittleEndian ? 4278190080 : 255, [l3, u3] = s3 ? [
          o3,
          c3
        ] : [
          c3,
          o3
        ], d3 = i3 >> 3, f3 = i3 & 7, p3 = e3.length;
        n3 = new Uint32Array(n3.buffer);
        let m3 = 0;
        for (let r3 = 0; r3 < a3; r3++) {
          for (let r5 = t3 + d3; t3 < r5; t3++) {
            let r6 = t3 < p3 ? e3[t3] : 255;
            n3[m3++] = r6 & 128 ? u3 : l3, n3[m3++] = r6 & 64 ? u3 : l3, n3[m3++] = r6 & 32 ? u3 : l3, n3[m3++] = r6 & 16 ? u3 : l3, n3[m3++] = r6 & 8 ? u3 : l3, n3[m3++] = r6 & 4 ? u3 : l3, n3[m3++] = r6 & 2 ? u3 : l3, n3[m3++] = r6 & 1 ? u3 : l3;
          }
          if (f3 === 0) continue;
          let r4 = t3 < p3 ? e3[t3++] : 255;
          for (let e4 = 0; e4 < f3; e4++) n3[m3++] = r4 & 1 << 7 - e4 ? u3 : l3;
        }
        return {
          srcPos: t3,
          destPos: m3
        };
      }
      let _2 = 4096, v2 = 1e3;
      function y2(e3, t3) {
        if (e3._removeMirroring) throw Error(`Context is already forwarding operations.`);
        e3.__originalSave = e3.save, e3.__originalRestore = e3.restore, e3.__originalRotate = e3.rotate, e3.__originalScale = e3.scale, e3.__originalTranslate = e3.translate, e3.__originalTransform = e3.transform, e3.__originalSetTransform = e3.setTransform, e3.__originalResetTransform = e3.resetTransform, e3.__originalClip = e3.clip, e3.__originalMoveTo = e3.moveTo, e3.__originalLineTo = e3.lineTo, e3.__originalBezierCurveTo = e3.bezierCurveTo, e3.__originalRect = e3.rect, e3.__originalClosePath = e3.closePath, e3.__originalBeginPath = e3.beginPath, e3._removeMirroring = () => {
          e3.save = e3.__originalSave, e3.restore = e3.__originalRestore, e3.rotate = e3.__originalRotate, e3.scale = e3.__originalScale, e3.translate = e3.__originalTranslate, e3.transform = e3.__originalTransform, e3.setTransform = e3.__originalSetTransform, e3.resetTransform = e3.__originalResetTransform, e3.clip = e3.__originalClip, e3.moveTo = e3.__originalMoveTo, e3.lineTo = e3.__originalLineTo, e3.bezierCurveTo = e3.__originalBezierCurveTo, e3.rect = e3.__originalRect, e3.closePath = e3.__originalClosePath, e3.beginPath = e3.__originalBeginPath, delete e3._removeMirroring;
        }, e3.save = function() {
          t3.save(), this.__originalSave();
        }, e3.restore = function() {
          t3.restore(), this.__originalRestore();
        }, e3.translate = function(e4, n3) {
          t3.translate(e4, n3), this.__originalTranslate(e4, n3);
        }, e3.scale = function(e4, n3) {
          t3.scale(e4, n3), this.__originalScale(e4, n3);
        }, e3.transform = function(e4, n3, r3, i3, a3, o3) {
          t3.transform(e4, n3, r3, i3, a3, o3), this.__originalTransform(e4, n3, r3, i3, a3, o3);
        }, e3.setTransform = function(e4, n3, r3, i3, a3, o3) {
          t3.setTransform(e4, n3, r3, i3, a3, o3), this.__originalSetTransform(e4, n3, r3, i3, a3, o3);
        }, e3.resetTransform = function() {
          t3.resetTransform(), this.__originalResetTransform();
        }, e3.rotate = function(e4) {
          t3.rotate(e4), this.__originalRotate(e4);
        }, e3.clip = function(e4) {
          t3.clip(e4), this.__originalClip(e4);
        }, e3.moveTo = function(e4, n3) {
          t3.moveTo(e4, n3), this.__originalMoveTo(e4, n3);
        }, e3.lineTo = function(e4, n3) {
          t3.lineTo(e4, n3), this.__originalLineTo(e4, n3);
        }, e3.bezierCurveTo = function(e4, n3, r3, i3, a3, o3) {
          t3.bezierCurveTo(e4, n3, r3, i3, a3, o3), this.__originalBezierCurveTo(e4, n3, r3, i3, a3, o3);
        }, e3.rect = function(e4, n3, r3, i3) {
          t3.rect(e4, n3, r3, i3), this.__originalRect(e4, n3, r3, i3);
        }, e3.closePath = function() {
          t3.closePath(), this.__originalClosePath();
        }, e3.beginPath = function() {
          t3.beginPath(), this.__originalBeginPath();
        };
      }
      class b2 {
        constructor(e3) {
          this.canvasFactory = e3, this.cache = /* @__PURE__ */ Object.create(null);
        }
        getCanvas(e3, t3, n3) {
          let r3;
          return this.cache[e3] === void 0 ? (r3 = this.canvasFactory.create(t3, n3), this.cache[e3] = r3) : (r3 = this.cache[e3], this.canvasFactory.reset(r3, t3, n3)), r3;
        }
        delete(e3) {
          delete this.cache[e3];
        }
        clear() {
          for (let e3 in this.cache) {
            let t3 = this.cache[e3];
            this.canvasFactory.destroy(t3), delete this.cache[e3];
          }
        }
      }
      function x2(e3, t3, n3, r3, a3, o3, s3, c3, l3, u3) {
        let [d3, f3, p3, m3, h3, g3] = (0, i2.getCurrentTransform)(e3);
        if (f3 === 0 && p3 === 0) {
          let i3 = s3 * d3 + h3, _4 = Math.round(i3), v4 = c3 * m3 + g3, y3 = Math.round(v4), b3 = (s3 + l3) * d3 + h3, x3 = Math.abs(Math.round(b3) - _4) || 1, S3 = (c3 + u3) * m3 + g3, C3 = Math.abs(Math.round(S3) - y3) || 1;
          return e3.setTransform(Math.sign(d3), 0, 0, Math.sign(m3), _4, y3), e3.drawImage(t3, n3, r3, a3, o3, 0, 0, x3, C3), e3.setTransform(d3, f3, p3, m3, h3, g3), [
            x3,
            C3
          ];
        }
        if (d3 === 0 && m3 === 0) {
          let i3 = c3 * p3 + h3, _4 = Math.round(i3), v4 = s3 * f3 + g3, y3 = Math.round(v4), b3 = (c3 + u3) * p3 + h3, x3 = Math.abs(Math.round(b3) - _4) || 1, S3 = (s3 + l3) * f3 + g3, C3 = Math.abs(Math.round(S3) - y3) || 1;
          return e3.setTransform(0, Math.sign(f3), Math.sign(p3), 0, _4, y3), e3.drawImage(t3, n3, r3, a3, o3, 0, 0, C3, x3), e3.setTransform(d3, f3, p3, m3, h3, g3), [
            C3,
            x3
          ];
        }
        e3.drawImage(t3, n3, r3, a3, o3, s3, c3, l3, u3);
        let _3 = Math.hypot(d3, f3), v3 = Math.hypot(p3, m3);
        return [
          _3 * l3,
          v3 * u3
        ];
      }
      function S2(e3) {
        let { width: t3, height: n3 } = e3;
        if (t3 > v2 || n3 > v2) return null;
        let r3 = 1e3, i3 = new Uint8Array([
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
        ]), a3 = t3 + 1, o3 = new Uint8Array(a3 * (n3 + 1)), s3, c3, l3, u3 = t3 + 7 & -8, d3 = new Uint8Array(u3 * n3), f3 = 0;
        for (let t4 of e3.data) {
          let e4 = 128;
          for (; e4 > 0; ) d3[f3++] = t4 & e4 ? 0 : 255, e4 >>= 1;
        }
        let p3 = 0;
        for (f3 = 0, d3[f3] !== 0 && (o3[0] = 1, ++p3), c3 = 1; c3 < t3; c3++) d3[f3] !== d3[f3 + 1] && (o3[c3] = d3[f3] ? 2 : 1, ++p3), f3++;
        for (d3[f3] !== 0 && (o3[c3] = 2, ++p3), s3 = 1; s3 < n3; s3++) {
          f3 = s3 * u3, l3 = s3 * a3, d3[f3 - u3] !== d3[f3] && (o3[l3] = d3[f3] ? 1 : 8, ++p3);
          let e4 = (d3[f3] ? 4 : 0) + (d3[f3 - u3] ? 8 : 0);
          for (c3 = 1; c3 < t3; c3++) e4 = (e4 >> 2) + (d3[f3 + 1] ? 4 : 0) + (d3[f3 - u3 + 1] ? 8 : 0), i3[e4] && (o3[l3 + c3] = i3[e4], ++p3), f3++;
          if (d3[f3 - u3] !== d3[f3] && (o3[l3 + c3] = d3[f3] ? 2 : 4, ++p3), p3 > r3) return null;
        }
        for (f3 = u3 * (n3 - 1), l3 = s3 * a3, d3[f3] !== 0 && (o3[l3] = 8, ++p3), c3 = 1; c3 < t3; c3++) d3[f3] !== d3[f3 + 1] && (o3[l3 + c3] = d3[f3] ? 4 : 8, ++p3), f3++;
        if (d3[f3] !== 0 && (o3[l3 + c3] = 4, ++p3), p3 > r3) return null;
        let m3 = new Int32Array([
          0,
          a3,
          -1,
          0,
          -a3,
          0,
          0,
          0,
          1
        ]), h3 = new Path2D();
        for (s3 = 0; p3 && s3 <= n3; s3++) {
          let e4 = s3 * a3, n4 = e4 + t3;
          for (; e4 < n4 && !o3[e4]; ) e4++;
          if (e4 === n4) continue;
          h3.moveTo(e4 % a3, s3);
          let r4 = e4, i4 = o3[e4];
          do {
            let t4 = m3[i4];
            do
              e4 += t4;
            while (!o3[e4]);
            let n5 = o3[e4];
            n5 !== 5 && n5 !== 10 ? (i4 = n5, o3[e4] = 0) : (i4 = n5 & 51 * i4 >> 4, o3[e4] &= i4 >> 2 | i4 << 2), h3.lineTo(e4 % a3, e4 / a3 | 0), o3[e4] || --p3;
          } while (r4 !== e4);
          --s3;
        }
        return d3 = null, o3 = null, function(e4) {
          e4.save(), e4.scale(1 / t3, -1 / n3), e4.translate(0, -n3), e4.fill(h3), e4.beginPath(), e4.restore();
        };
      }
      class C2 {
        constructor(e3, t3) {
          this.alphaIsShape = false, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = r2.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = r2.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = r2.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = `#000000`, this.strokeColor = `#000000`, this.patternFill = false, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = `none`, this.startNewPathAndClipBox([
            0,
            0,
            e3,
            t3
          ]);
        }
        clone() {
          let e3 = Object.create(this);
          return e3.clipBox = this.clipBox.slice(), e3;
        }
        setCurrentPoint(e3, t3) {
          this.x = e3, this.y = t3;
        }
        updatePathMinMax(e3, t3, n3) {
          [t3, n3] = r2.Util.applyTransform([
            t3,
            n3
          ], e3), this.minX = Math.min(this.minX, t3), this.minY = Math.min(this.minY, n3), this.maxX = Math.max(this.maxX, t3), this.maxY = Math.max(this.maxY, n3);
        }
        updateRectMinMax(e3, t3) {
          let n3 = r2.Util.applyTransform(t3, e3), i3 = r2.Util.applyTransform(t3.slice(2), e3), a3 = r2.Util.applyTransform([
            t3[0],
            t3[3]
          ], e3), o3 = r2.Util.applyTransform([
            t3[2],
            t3[1]
          ], e3);
          this.minX = Math.min(this.minX, n3[0], i3[0], a3[0], o3[0]), this.minY = Math.min(this.minY, n3[1], i3[1], a3[1], o3[1]), this.maxX = Math.max(this.maxX, n3[0], i3[0], a3[0], o3[0]), this.maxY = Math.max(this.maxY, n3[1], i3[1], a3[1], o3[1]);
        }
        updateScalingPathMinMax(e3, t3) {
          r2.Util.scaleMinMax(e3, t3), this.minX = Math.min(this.minX, t3[0]), this.minY = Math.min(this.minY, t3[1]), this.maxX = Math.max(this.maxX, t3[2]), this.maxY = Math.max(this.maxY, t3[3]);
        }
        updateCurvePathMinMax(e3, t3, n3, i3, a3, o3, s3, c3, l3, u3) {
          let d3 = r2.Util.bezierBoundingBox(t3, n3, i3, a3, o3, s3, c3, l3, u3);
          u3 || this.updateRectMinMax(e3, d3);
        }
        getPathBoundingBox(e3 = a2.FILL, t3 = null) {
          let n3 = [
            this.minX,
            this.minY,
            this.maxX,
            this.maxY
          ];
          if (e3 === a2.STROKE) {
            t3 || (0, r2.unreachable)(`Stroke bounding box must include transform.`);
            let e4 = r2.Util.singularValueDecompose2dScale(t3), i3 = e4[0] * this.lineWidth / 2, a3 = e4[1] * this.lineWidth / 2;
            n3[0] -= i3, n3[1] -= a3, n3[2] += i3, n3[3] += a3;
          }
          return n3;
        }
        updateClipFromPath() {
          let e3 = r2.Util.intersect(this.clipBox, this.getPathBoundingBox());
          this.startNewPathAndClipBox(e3 || [
            0,
            0,
            0,
            0
          ]);
        }
        isEmptyClip() {
          return this.minX === 1 / 0;
        }
        startNewPathAndClipBox(e3) {
          this.clipBox = e3, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
        }
        getClippedPathBoundingBox(e3 = a2.FILL, t3 = null) {
          return r2.Util.intersect(this.clipBox, this.getPathBoundingBox(e3, t3));
        }
      }
      function w2(e3, t3) {
        if (typeof ImageData < `u` && t3 instanceof ImageData) {
          e3.putImageData(t3, 0, 0);
          return;
        }
        let n3 = t3.height, i3 = t3.width, a3 = n3 % 16, o3 = (n3 - a3) / 16, s3 = a3 === 0 ? o3 : o3 + 1, c3 = e3.createImageData(i3, 16), l3 = 0, u3, d3 = t3.data, f3 = c3.data, p3, m3, h3, g3;
        if (t3.kind === r2.ImageKind.GRAYSCALE_1BPP) {
          let t4 = d3.byteLength, n4 = new Uint32Array(f3.buffer, 0, f3.byteLength >> 2), g4 = n4.length, _3 = i3 + 7 >> 3, v3 = 4294967295, y3 = r2.FeatureTest.isLittleEndian ? 4278190080 : 255;
          for (p3 = 0; p3 < s3; p3++) {
            for (h3 = p3 < o3 ? 16 : a3, u3 = 0, m3 = 0; m3 < h3; m3++) {
              let e4 = t4 - l3, r3 = 0, a4 = e4 > _3 ? i3 : e4 * 8 - 7, o4 = a4 & -8, s4 = 0, c4 = 0;
              for (; r3 < o4; r3 += 8) c4 = d3[l3++], n4[u3++] = c4 & 128 ? v3 : y3, n4[u3++] = c4 & 64 ? v3 : y3, n4[u3++] = c4 & 32 ? v3 : y3, n4[u3++] = c4 & 16 ? v3 : y3, n4[u3++] = c4 & 8 ? v3 : y3, n4[u3++] = c4 & 4 ? v3 : y3, n4[u3++] = c4 & 2 ? v3 : y3, n4[u3++] = c4 & 1 ? v3 : y3;
              for (; r3 < a4; r3++) s4 === 0 && (c4 = d3[l3++], s4 = 128), n4[u3++] = c4 & s4 ? v3 : y3, s4 >>= 1;
            }
            for (; u3 < g4; ) n4[u3++] = 0;
            e3.putImageData(c3, 0, p3 * 16);
          }
        } else if (t3.kind === r2.ImageKind.RGBA_32BPP) {
          for (m3 = 0, g3 = i3 * 16 * 4, p3 = 0; p3 < o3; p3++) f3.set(d3.subarray(l3, l3 + g3)), l3 += g3, e3.putImageData(c3, 0, m3), m3 += 16;
          p3 < s3 && (g3 = i3 * a3 * 4, f3.set(d3.subarray(l3, l3 + g3)), e3.putImageData(c3, 0, m3));
        } else if (t3.kind === r2.ImageKind.RGB_24BPP) for (h3 = 16, g3 = i3 * h3, p3 = 0; p3 < s3; p3++) {
          for (p3 >= o3 && (h3 = a3, g3 = i3 * h3), u3 = 0, m3 = g3; m3--; ) f3[u3++] = d3[l3++], f3[u3++] = d3[l3++], f3[u3++] = d3[l3++], f3[u3++] = 255;
          e3.putImageData(c3, 0, p3 * 16);
        }
        else throw Error(`bad image kind: ${t3.kind}`);
      }
      function T2(e3, t3) {
        if (t3.bitmap) {
          e3.drawImage(t3.bitmap, 0, 0);
          return;
        }
        let n3 = t3.height, r3 = t3.width, i3 = n3 % 16, a3 = (n3 - i3) / 16, o3 = i3 === 0 ? a3 : a3 + 1, s3 = e3.createImageData(r3, 16), c3 = 0, l3 = t3.data, u3 = s3.data;
        for (let t4 = 0; t4 < o3; t4++) {
          let n4 = t4 < a3 ? 16 : i3;
          ({ srcPos: c3 } = g2({
            src: l3,
            srcPos: c3,
            dest: u3,
            width: r3,
            height: n4,
            nonBlackColor: 0
          })), e3.putImageData(s3, 0, t4 * 16);
        }
      }
      function E2(e3, t3) {
        for (let n3 of [
          `strokeStyle`,
          `fillStyle`,
          `fillRule`,
          `globalAlpha`,
          `lineWidth`,
          `lineCap`,
          `lineJoin`,
          `miterLimit`,
          `globalCompositeOperation`,
          `font`,
          `filter`
        ]) e3[n3] !== void 0 && (t3[n3] = e3[n3]);
        e3.setLineDash !== void 0 && (t3.setLineDash(e3.getLineDash()), t3.lineDashOffset = e3.lineDashOffset);
      }
      function D2(e3) {
        if (e3.strokeStyle = e3.fillStyle = `#000000`, e3.fillRule = `nonzero`, e3.globalAlpha = 1, e3.lineWidth = 1, e3.lineCap = `butt`, e3.lineJoin = `miter`, e3.miterLimit = 10, e3.globalCompositeOperation = `source-over`, e3.font = `10px sans-serif`, e3.setLineDash !== void 0 && (e3.setLineDash([]), e3.lineDashOffset = 0), !r2.isNodeJS) {
          let { filter: t3 } = e3;
          t3 !== `none` && t3 !== `` && (e3.filter = `none`);
        }
      }
      function O2(e3, t3, n3, r3) {
        let i3 = e3.length;
        for (let a3 = 3; a3 < i3; a3 += 4) {
          let i4 = e3[a3];
          if (i4 === 0) e3[a3 - 3] = t3, e3[a3 - 2] = n3, e3[a3 - 1] = r3;
          else if (i4 < 255) {
            let o3 = 255 - i4;
            e3[a3 - 3] = e3[a3 - 3] * i4 + t3 * o3 >> 8, e3[a3 - 2] = e3[a3 - 2] * i4 + n3 * o3 >> 8, e3[a3 - 1] = e3[a3 - 1] * i4 + r3 * o3 >> 8;
          }
        }
      }
      function k2(e3, t3, n3) {
        let r3 = e3.length;
        for (let i3 = 3; i3 < r3; i3 += 4) {
          let r4 = n3 ? n3[e3[i3]] : e3[i3];
          t3[i3] = t3[i3] * r4 * 0.00392156862745098 | 0;
        }
      }
      function A2(e3, t3, n3) {
        let r3 = e3.length;
        for (let i3 = 3; i3 < r3; i3 += 4) {
          let r4 = e3[i3 - 3] * 77 + e3[i3 - 2] * 152 + e3[i3 - 1] * 28;
          t3[i3] = n3 ? t3[i3] * n3[r4 >> 8] >> 8 : t3[i3] * r4 >> 16;
        }
      }
      function j2(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3) {
        let d3 = !!a3, f3 = d3 ? a3[0] : 0, p3 = d3 ? a3[1] : 0, m3 = d3 ? a3[2] : 0, h3 = i3 === `Luminosity` ? A2 : k2, g3 = Math.min(r3, Math.ceil(1048576 / n3));
        for (let i4 = 0; i4 < r3; i4 += g3) {
          let a4 = Math.min(g3, r3 - i4), _3 = e3.getImageData(s3 - l3, i4 + (c3 - u3), n3, a4), v3 = t3.getImageData(s3, i4 + c3, n3, a4);
          d3 && O2(_3.data, f3, p3, m3), h3(_3.data, v3.data, o3), t3.putImageData(v3, s3, i4 + c3);
        }
      }
      function M2(e3, t3, n3, r3) {
        let i3 = r3[0], a3 = r3[1], o3 = r3[2] - i3, s3 = r3[3] - a3;
        o3 === 0 || s3 === 0 || (j2(t3.context, n3, o3, s3, t3.subtype, t3.backdrop, t3.transferMap, i3, a3, t3.offsetX, t3.offsetY), e3.save(), e3.globalAlpha = 1, e3.globalCompositeOperation = `source-over`, e3.setTransform(1, 0, 0, 1, 0, 0), e3.drawImage(n3.canvas, 0, 0), e3.restore());
      }
      function N2(e3, t3) {
        if (t3) return true;
        let n3 = r2.Util.singularValueDecompose2dScale(e3);
        n3[0] = Math.fround(n3[0]), n3[1] = Math.fround(n3[1]);
        let a3 = Math.fround((globalThis.devicePixelRatio || 1) * i2.PixelsPerInch.PDF_TO_CSS_UNITS);
        return n3[0] <= a3 && n3[1] <= a3;
      }
      let P2 = [
        `butt`,
        `round`,
        `square`
      ], F2 = [
        `miter`,
        `round`,
        `bevel`
      ], I2 = {}, L2 = {};
      class R2 {
        constructor(e3, t3, n3, r3, i3, { optionalContentConfig: a3, markedContentStack: o3 = null }, s3, c3) {
          this.ctx = e3, this.current = new C2(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = false, this.res = null, this.xobjs = null, this.commonObjs = t3, this.objs = n3, this.canvasFactory = r3, this.filterFactory = i3, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = true, this.markedContentStack = o3 || [], this.optionalContentConfig = a3, this.cachedCanvases = new b2(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = s3, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = c3, this._cachedScaleForStroking = [
            -1,
            0
          ], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
        }
        getObject(e3, t3 = null) {
          return typeof e3 == `string` ? e3.startsWith(`g_`) ? this.commonObjs.get(e3) : this.objs.get(e3) : t3;
        }
        beginDrawing({ transform: e3, viewport: t3, transparency: n3 = false, background: r3 = null }) {
          let a3 = this.ctx.canvas.width, o3 = this.ctx.canvas.height, s3 = this.ctx.fillStyle;
          if (this.ctx.fillStyle = r3 || `#ffffff`, this.ctx.fillRect(0, 0, a3, o3), this.ctx.fillStyle = s3, n3) {
            let e4 = this.cachedCanvases.getCanvas(`transparent`, a3, o3);
            this.compositeCtx = this.ctx, this.transparentCanvas = e4.canvas, this.ctx = e4.context, this.ctx.save(), this.ctx.transform(...(0, i2.getCurrentTransform)(this.compositeCtx));
          }
          this.ctx.save(), D2(this.ctx), e3 && (this.ctx.transform(...e3), this.outputScaleX = e3[0], this.outputScaleY = e3[0]), this.ctx.transform(...t3.transform), this.viewportScale = t3.scale, this.baseTransform = (0, i2.getCurrentTransform)(this.ctx);
        }
        executeOperatorList(e3, t3, n3, i3) {
          let a3 = e3.argsArray, o3 = e3.fnArray, s3 = t3 || 0, c3 = a3.length;
          if (c3 === s3) return s3;
          let l3 = c3 - s3 > 10 && typeof n3 == `function`, u3 = l3 ? Date.now() + 15 : 0, d3 = 0, f3 = this.commonObjs, p3 = this.objs, m3;
          for (; ; ) {
            if (i3 !== void 0 && s3 === i3.nextBreakPoint) return i3.breakIt(s3, n3), s3;
            if (m3 = o3[s3], m3 !== r2.OPS.dependency) this[m3].apply(this, a3[s3]);
            else for (let e4 of a3[s3]) {
              let t4 = e4.startsWith(`g_`) ? f3 : p3;
              if (!t4.has(e4)) return t4.get(e4, n3), s3;
            }
            if (s3++, s3 === c3) return s3;
            if (l3 && ++d3 > 10) {
              if (Date.now() > u3) return n3(), s3;
              d3 = 0;
            }
          }
        }
        #e() {
          for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
          this.ctx.restore(), this.transparentCanvas &&= (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), null);
        }
        endDrawing() {
          this.#e(), this.cachedCanvases.clear(), this.cachedPatterns.clear();
          for (let e3 of this._cachedBitmapsMap.values()) {
            for (let t3 of e3.values()) typeof HTMLCanvasElement < `u` && t3 instanceof HTMLCanvasElement && (t3.width = t3.height = 0);
            e3.clear();
          }
          this._cachedBitmapsMap.clear(), this.#t();
        }
        #t() {
          if (this.pageColors) {
            let e3 = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
            if (e3 !== `none`) {
              let t3 = this.ctx.filter;
              this.ctx.filter = e3, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = t3;
            }
          }
        }
        _scaleImage(e3, t3) {
          let n3 = e3.width, r3 = e3.height, i3 = Math.max(Math.hypot(t3[0], t3[1]), 1), a3 = Math.max(Math.hypot(t3[2], t3[3]), 1), o3 = n3, s3 = r3, c3 = `prescale1`, l3, u3;
          for (; i3 > 2 && o3 > 1 || a3 > 2 && s3 > 1; ) {
            let t4 = o3, n4 = s3;
            i3 > 2 && o3 > 1 && (t4 = o3 >= 16384 ? Math.floor(o3 / 2) - 1 || 1 : Math.ceil(o3 / 2), i3 /= o3 / t4), a3 > 2 && s3 > 1 && (n4 = s3 >= 16384 ? Math.floor(s3 / 2) - 1 || 1 : Math.ceil(s3) / 2, a3 /= s3 / n4), l3 = this.cachedCanvases.getCanvas(c3, t4, n4), u3 = l3.context, u3.clearRect(0, 0, t4, n4), u3.drawImage(e3, 0, 0, o3, s3, 0, 0, t4, n4), e3 = l3.canvas, o3 = t4, s3 = n4, c3 = c3 === `prescale1` ? `prescale2` : `prescale1`;
          }
          return {
            img: e3,
            paintWidth: o3,
            paintHeight: s3
          };
        }
        _createMaskCanvas(e3) {
          let t3 = this.ctx, { width: n3, height: o3 } = e3, s3 = this.current.fillColor, c3 = this.current.patternFill, l3 = (0, i2.getCurrentTransform)(t3), u3, d3, f3, p3;
          if ((e3.bitmap || e3.data) && e3.count > 1) {
            let t4 = e3.bitmap || e3.data.buffer;
            d3 = JSON.stringify(c3 ? l3 : [
              l3.slice(0, 4),
              s3
            ]), u3 = this._cachedBitmapsMap.get(t4), u3 || (u3 = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(t4, u3));
            let n4 = u3.get(d3);
            if (n4 && !c3) return {
              canvas: n4,
              offsetX: Math.round(Math.min(l3[0], l3[2]) + l3[4]),
              offsetY: Math.round(Math.min(l3[1], l3[3]) + l3[5])
            };
            f3 = n4;
          }
          f3 || (p3 = this.cachedCanvases.getCanvas(`maskCanvas`, n3, o3), T2(p3.context, e3));
          let m3 = r2.Util.transform(l3, [
            1 / n3,
            0,
            0,
            -1 / o3,
            0,
            0
          ]);
          m3 = r2.Util.transform(m3, [
            1,
            0,
            0,
            1,
            0,
            -o3
          ]);
          let [h3, g3, _3, v3] = r2.Util.getAxialAlignedBoundingBox([
            0,
            0,
            n3,
            o3
          ], m3), y3 = Math.round(_3 - h3) || 1, b3 = Math.round(v3 - g3) || 1, S3 = this.cachedCanvases.getCanvas(`fillCanvas`, y3, b3), C3 = S3.context, w3 = h3, E3 = g3;
          C3.translate(-w3, -E3), C3.transform(...m3), f3 || (f3 = this._scaleImage(p3.canvas, (0, i2.getCurrentTransformInverse)(C3)), f3 = f3.img, u3 && c3 && u3.set(d3, f3)), C3.imageSmoothingEnabled = N2((0, i2.getCurrentTransform)(C3), e3.interpolate), x2(C3, f3, 0, 0, f3.width, f3.height, 0, 0, n3, o3), C3.globalCompositeOperation = `source-in`;
          let D3 = r2.Util.transform((0, i2.getCurrentTransformInverse)(C3), [
            1,
            0,
            0,
            1,
            -w3,
            -E3
          ]);
          return C3.fillStyle = c3 ? s3.getPattern(t3, this, D3, a2.FILL) : s3, C3.fillRect(0, 0, n3, o3), u3 && !c3 && (this.cachedCanvases.delete(`fillCanvas`), u3.set(d3, S3.canvas)), {
            canvas: S3.canvas,
            offsetX: Math.round(w3),
            offsetY: Math.round(E3)
          };
        }
        setLineWidth(e3) {
          e3 !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e3, this.ctx.lineWidth = e3;
        }
        setLineCap(e3) {
          this.ctx.lineCap = P2[e3];
        }
        setLineJoin(e3) {
          this.ctx.lineJoin = F2[e3];
        }
        setMiterLimit(e3) {
          this.ctx.miterLimit = e3;
        }
        setDash(e3, t3) {
          let n3 = this.ctx;
          n3.setLineDash !== void 0 && (n3.setLineDash(e3), n3.lineDashOffset = t3);
        }
        setRenderingIntent(e3) {
        }
        setFlatness(e3) {
        }
        setGState(e3) {
          for (let [t3, n3] of e3) switch (t3) {
            case `LW`:
              this.setLineWidth(n3);
              break;
            case `LC`:
              this.setLineCap(n3);
              break;
            case `LJ`:
              this.setLineJoin(n3);
              break;
            case `ML`:
              this.setMiterLimit(n3);
              break;
            case `D`:
              this.setDash(n3[0], n3[1]);
              break;
            case `RI`:
              this.setRenderingIntent(n3);
              break;
            case `FL`:
              this.setFlatness(n3);
              break;
            case `Font`:
              this.setFont(n3[0], n3[1]);
              break;
            case `CA`:
              this.current.strokeAlpha = n3;
              break;
            case `ca`:
              this.current.fillAlpha = n3, this.ctx.globalAlpha = n3;
              break;
            case `BM`:
              this.ctx.globalCompositeOperation = n3;
              break;
            case `SMask`:
              this.current.activeSMask = n3 ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
              break;
            case `TR`:
              this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(n3);
              break;
          }
        }
        get inSMaskMode() {
          return !!this.suspendedCtx;
        }
        checkSMaskState() {
          let e3 = this.inSMaskMode;
          this.current.activeSMask && !e3 ? this.beginSMaskMode() : !this.current.activeSMask && e3 && this.endSMaskMode();
        }
        beginSMaskMode() {
          if (this.inSMaskMode) throw Error(`beginSMaskMode called while already in smask mode`);
          let e3 = this.ctx.canvas.width, t3 = this.ctx.canvas.height, n3 = `smaskGroupAt` + this.groupLevel, r3 = this.cachedCanvases.getCanvas(n3, e3, t3);
          this.suspendedCtx = this.ctx, this.ctx = r3.context;
          let a3 = this.ctx;
          a3.setTransform(...(0, i2.getCurrentTransform)(this.suspendedCtx)), E2(this.suspendedCtx, a3), y2(a3, this.suspendedCtx), this.setGState([
            [
              `BM`,
              `source-over`
            ],
            [
              `ca`,
              1
            ],
            [
              `CA`,
              1
            ]
          ]);
        }
        endSMaskMode() {
          if (!this.inSMaskMode) throw Error(`endSMaskMode called while not in smask mode`);
          this.ctx._removeMirroring(), E2(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
        }
        compose(e3) {
          if (!this.current.activeSMask) return;
          e3 ? (e3[0] = Math.floor(e3[0]), e3[1] = Math.floor(e3[1]), e3[2] = Math.ceil(e3[2]), e3[3] = Math.ceil(e3[3])) : e3 = [
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
          ];
          let t3 = this.current.activeSMask, n3 = this.suspendedCtx;
          M2(n3, t3, this.ctx, e3), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
        }
        save() {
          this.inSMaskMode ? (E2(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
          let e3 = this.current;
          this.stateStack.push(e3), this.current = e3.clone();
        }
        restore() {
          this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), E2(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
        }
        transform(e3, t3, n3, r3, i3, a3) {
          this.ctx.transform(e3, t3, n3, r3, i3, a3), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
        }
        constructPath(e3, t3, n3) {
          let a3 = this.ctx, o3 = this.current, s3 = o3.x, c3 = o3.y, l3, u3, d3 = (0, i2.getCurrentTransform)(a3), f3 = d3[0] === 0 && d3[3] === 0 || d3[1] === 0 && d3[2] === 0, p3 = f3 ? n3.slice(0) : null;
          for (let n4 = 0, i3 = 0, m3 = e3.length; n4 < m3; n4++) switch (e3[n4] | 0) {
            case r2.OPS.rectangle:
              s3 = t3[i3++], c3 = t3[i3++];
              let e4 = t3[i3++], n5 = t3[i3++], m4 = s3 + e4, h3 = c3 + n5;
              a3.moveTo(s3, c3), e4 === 0 || n5 === 0 ? a3.lineTo(m4, h3) : (a3.lineTo(m4, c3), a3.lineTo(m4, h3), a3.lineTo(s3, h3)), f3 || o3.updateRectMinMax(d3, [
                s3,
                c3,
                m4,
                h3
              ]), a3.closePath();
              break;
            case r2.OPS.moveTo:
              s3 = t3[i3++], c3 = t3[i3++], a3.moveTo(s3, c3), f3 || o3.updatePathMinMax(d3, s3, c3);
              break;
            case r2.OPS.lineTo:
              s3 = t3[i3++], c3 = t3[i3++], a3.lineTo(s3, c3), f3 || o3.updatePathMinMax(d3, s3, c3);
              break;
            case r2.OPS.curveTo:
              l3 = s3, u3 = c3, s3 = t3[i3 + 4], c3 = t3[i3 + 5], a3.bezierCurveTo(t3[i3], t3[i3 + 1], t3[i3 + 2], t3[i3 + 3], s3, c3), o3.updateCurvePathMinMax(d3, l3, u3, t3[i3], t3[i3 + 1], t3[i3 + 2], t3[i3 + 3], s3, c3, p3), i3 += 6;
              break;
            case r2.OPS.curveTo2:
              l3 = s3, u3 = c3, a3.bezierCurveTo(s3, c3, t3[i3], t3[i3 + 1], t3[i3 + 2], t3[i3 + 3]), o3.updateCurvePathMinMax(d3, l3, u3, s3, c3, t3[i3], t3[i3 + 1], t3[i3 + 2], t3[i3 + 3], p3), s3 = t3[i3 + 2], c3 = t3[i3 + 3], i3 += 4;
              break;
            case r2.OPS.curveTo3:
              l3 = s3, u3 = c3, s3 = t3[i3 + 2], c3 = t3[i3 + 3], a3.bezierCurveTo(t3[i3], t3[i3 + 1], s3, c3, s3, c3), o3.updateCurvePathMinMax(d3, l3, u3, t3[i3], t3[i3 + 1], s3, c3, s3, c3, p3), i3 += 4;
              break;
            case r2.OPS.closePath:
              a3.closePath();
              break;
          }
          f3 && o3.updateScalingPathMinMax(d3, p3), o3.setCurrentPoint(s3, c3);
        }
        closePath() {
          this.ctx.closePath();
        }
        stroke(e3 = true) {
          let t3 = this.ctx, n3 = this.current.strokeColor;
          t3.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof n3 == `object` && n3?.getPattern ? (t3.save(), t3.strokeStyle = n3.getPattern(t3, this, (0, i2.getCurrentTransformInverse)(t3), a2.STROKE), this.rescaleAndStroke(false), t3.restore()) : this.rescaleAndStroke(true)), e3 && this.consumePath(this.current.getClippedPathBoundingBox()), t3.globalAlpha = this.current.fillAlpha;
        }
        closeStroke() {
          this.closePath(), this.stroke();
        }
        fill(e3 = true) {
          let t3 = this.ctx, n3 = this.current.fillColor, r3 = this.current.patternFill, o3 = false;
          r3 && (t3.save(), t3.fillStyle = n3.getPattern(t3, this, (0, i2.getCurrentTransformInverse)(t3), a2.FILL), o3 = true);
          let s3 = this.current.getClippedPathBoundingBox();
          this.contentVisible && s3 !== null && (this.pendingEOFill ? (t3.fill(`evenodd`), this.pendingEOFill = false) : t3.fill()), o3 && t3.restore(), e3 && this.consumePath(s3);
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
          this.pendingClip = I2;
        }
        eoClip() {
          this.pendingClip = L2;
        }
        beginText() {
          this.current.textMatrix = r2.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        endText() {
          let e3 = this.pendingTextPaths, t3 = this.ctx;
          if (e3 === void 0) {
            t3.beginPath();
            return;
          }
          t3.save(), t3.beginPath();
          for (let n3 of e3) t3.setTransform(...n3.transform), t3.translate(n3.x, n3.y), n3.addToPath(t3, n3.fontSize);
          t3.restore(), t3.clip(), t3.beginPath(), delete this.pendingTextPaths;
        }
        setCharSpacing(e3) {
          this.current.charSpacing = e3;
        }
        setWordSpacing(e3) {
          this.current.wordSpacing = e3;
        }
        setHScale(e3) {
          this.current.textHScale = e3 / 100;
        }
        setLeading(e3) {
          this.current.leading = -e3;
        }
        setFont(e3, t3) {
          let n3 = this.commonObjs.get(e3), i3 = this.current;
          if (!n3) throw Error(`Can't find font for ${e3}`);
          if (i3.fontMatrix = n3.fontMatrix || r2.FONT_IDENTITY_MATRIX, (i3.fontMatrix[0] === 0 || i3.fontMatrix[3] === 0) && (0, r2.warn)(`Invalid font matrix for font ` + e3), t3 < 0 ? (t3 = -t3, i3.fontDirection = -1) : i3.fontDirection = 1, this.current.font = n3, this.current.fontSize = t3, n3.isType3Font) return;
          let a3 = n3.loadedName || `sans-serif`, o3 = n3.systemFontInfo?.css || `"${a3}", ${n3.fallbackName}`, s3 = `normal`;
          n3.black ? s3 = `900` : n3.bold && (s3 = `bold`);
          let c3 = n3.italic ? `italic` : `normal`, l3 = t3;
          t3 < 16 ? l3 = 16 : t3 > 100 && (l3 = 100), this.current.fontSizeScale = t3 / l3, this.ctx.font = `${c3} ${s3} ${l3}px ${o3}`;
        }
        setTextRenderingMode(e3) {
          this.current.textRenderingMode = e3;
        }
        setTextRise(e3) {
          this.current.textRise = e3;
        }
        moveText(e3, t3) {
          this.current.x = this.current.lineX += e3, this.current.y = this.current.lineY += t3;
        }
        setLeadingMoveText(e3, t3) {
          this.setLeading(-t3), this.moveText(e3, t3);
        }
        setTextMatrix(e3, t3, n3, r3, i3, a3) {
          this.current.textMatrix = [
            e3,
            t3,
            n3,
            r3,
            i3,
            a3
          ], this.current.textMatrixScale = Math.hypot(e3, t3), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        nextLine() {
          this.moveText(0, this.current.leading);
        }
        paintChar(e3, t3, n3, a3) {
          let o3 = this.ctx, s3 = this.current, c3 = s3.font, l3 = s3.textRenderingMode, u3 = s3.fontSize / s3.fontSizeScale, d3 = l3 & r2.TextRenderingMode.FILL_STROKE_MASK, f3 = !!(l3 & r2.TextRenderingMode.ADD_TO_PATH_FLAG), p3 = s3.patternFill && !c3.missingFile, m3;
          (c3.disableFontFace || f3 || p3) && (m3 = c3.getPathGenerator(this.commonObjs, e3)), c3.disableFontFace || p3 ? (o3.save(), o3.translate(t3, n3), o3.beginPath(), m3(o3, u3), a3 && o3.setTransform(...a3), (d3 === r2.TextRenderingMode.FILL || d3 === r2.TextRenderingMode.FILL_STROKE) && o3.fill(), (d3 === r2.TextRenderingMode.STROKE || d3 === r2.TextRenderingMode.FILL_STROKE) && o3.stroke(), o3.restore()) : ((d3 === r2.TextRenderingMode.FILL || d3 === r2.TextRenderingMode.FILL_STROKE) && o3.fillText(e3, t3, n3), (d3 === r2.TextRenderingMode.STROKE || d3 === r2.TextRenderingMode.FILL_STROKE) && o3.strokeText(e3, t3, n3)), f3 && (this.pendingTextPaths ||= []).push({
            transform: (0, i2.getCurrentTransform)(o3),
            x: t3,
            y: n3,
            fontSize: u3,
            addToPath: m3
          });
        }
        get isFontSubpixelAAEnabled() {
          let { context: e3 } = this.cachedCanvases.getCanvas(`isFontSubpixelAAEnabled`, 10, 10);
          e3.scale(1.5, 1), e3.fillText(`I`, 0, 10);
          let t3 = e3.getImageData(0, 0, 10, 10).data, n3 = false;
          for (let e4 = 3; e4 < t3.length; e4 += 4) if (t3[e4] > 0 && t3[e4] < 255) {
            n3 = true;
            break;
          }
          return (0, r2.shadow)(this, `isFontSubpixelAAEnabled`, n3);
        }
        showText(e3) {
          let t3 = this.current, n3 = t3.font;
          if (n3.isType3Font) return this.showType3Text(e3);
          let o3 = t3.fontSize;
          if (o3 === 0) return;
          let s3 = this.ctx, c3 = t3.fontSizeScale, l3 = t3.charSpacing, u3 = t3.wordSpacing, d3 = t3.fontDirection, f3 = t3.textHScale * d3, p3 = e3.length, m3 = n3.vertical, h3 = m3 ? 1 : -1, g3 = n3.defaultVMetrics, _3 = o3 * t3.fontMatrix[0], v3 = t3.textRenderingMode === r2.TextRenderingMode.FILL && !n3.disableFontFace && !t3.patternFill;
          s3.save(), s3.transform(...t3.textMatrix), s3.translate(t3.x, t3.y + t3.textRise), d3 > 0 ? s3.scale(f3, -1) : s3.scale(f3, 1);
          let y3;
          if (t3.patternFill) {
            s3.save();
            let e4 = t3.fillColor.getPattern(s3, this, (0, i2.getCurrentTransformInverse)(s3), a2.FILL);
            y3 = (0, i2.getCurrentTransform)(s3), s3.restore(), s3.fillStyle = e4;
          }
          let b3 = t3.lineWidth, x3 = t3.textMatrixScale;
          if (x3 === 0 || b3 === 0) {
            let e4 = t3.textRenderingMode & r2.TextRenderingMode.FILL_STROKE_MASK;
            (e4 === r2.TextRenderingMode.STROKE || e4 === r2.TextRenderingMode.FILL_STROKE) && (b3 = this.getSinglePixelWidth());
          } else b3 /= x3;
          if (c3 !== 1 && (s3.scale(c3, c3), b3 /= c3), s3.lineWidth = b3, n3.isInvalidPDFjsFont) {
            let n4 = [], r3 = 0;
            for (let t4 of e3) n4.push(t4.unicode), r3 += t4.width;
            s3.fillText(n4.join(``), 0, 0), t3.x += r3 * _3 * f3, s3.restore(), this.compose();
            return;
          }
          let S3 = 0, C3;
          for (C3 = 0; C3 < p3; ++C3) {
            let t4 = e3[C3];
            if (typeof t4 == `number`) {
              S3 += h3 * t4 * o3 / 1e3;
              continue;
            }
            let r3 = false, i3 = (t4.isSpace ? u3 : 0) + l3, a3 = t4.fontChar, f4 = t4.accent, p4, b4, x4 = t4.width;
            if (m3) {
              let e4 = t4.vmetric || g3, n4 = -(t4.vmetric ? e4[1] : x4 * 0.5) * _3, r4 = e4[2] * _3;
              x4 = e4 ? -e4[0] : x4, p4 = n4 / c3, b4 = (S3 + r4) / c3;
            } else p4 = S3 / c3, b4 = 0;
            if (n3.remeasure && x4 > 0) {
              let e4 = s3.measureText(a3).width * 1e3 / o3 * c3;
              if (x4 < e4 && this.isFontSubpixelAAEnabled) {
                let t5 = x4 / e4;
                r3 = true, s3.save(), s3.scale(t5, 1), p4 /= t5;
              } else x4 !== e4 && (p4 += (x4 - e4) / 2e3 * o3 / c3);
            }
            if (this.contentVisible && (t4.isInFont || n3.missingFile)) {
              if (v3 && !f4) s3.fillText(a3, p4, b4);
              else if (this.paintChar(a3, p4, b4, y3), f4) {
                let e4 = p4 + o3 * f4.offset.x / c3, t5 = b4 - o3 * f4.offset.y / c3;
                this.paintChar(f4.fontChar, e4, t5, y3);
              }
            }
            let w3 = m3 ? x4 * _3 - i3 * d3 : x4 * _3 + i3 * d3;
            S3 += w3, r3 && s3.restore();
          }
          m3 ? t3.y -= S3 : t3.x += S3 * f3, s3.restore(), this.compose();
        }
        showType3Text(e3) {
          let t3 = this.ctx, n3 = this.current, i3 = n3.font, a3 = n3.fontSize, o3 = n3.fontDirection, s3 = i3.vertical ? 1 : -1, c3 = n3.charSpacing, l3 = n3.wordSpacing, u3 = n3.textHScale * o3, d3 = n3.fontMatrix || r2.FONT_IDENTITY_MATRIX, f3 = e3.length, p3 = n3.textRenderingMode === r2.TextRenderingMode.INVISIBLE, m3, h3, g3, _3;
          if (!(p3 || a3 === 0)) {
            for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, t3.save(), t3.transform(...n3.textMatrix), t3.translate(n3.x, n3.y), t3.scale(u3, o3), m3 = 0; m3 < f3; ++m3) {
              if (h3 = e3[m3], typeof h3 == `number`) {
                _3 = s3 * h3 * a3 / 1e3, this.ctx.translate(_3, 0), n3.x += _3 * u3;
                continue;
              }
              let o4 = (h3.isSpace ? l3 : 0) + c3, f4 = i3.charProcOperatorList[h3.operatorListId];
              if (!f4) {
                (0, r2.warn)(`Type3 character "${h3.operatorListId}" is not available.`);
                continue;
              }
              this.contentVisible && (this.processingType3 = h3, this.save(), t3.scale(a3, a3), t3.transform(...d3), this.executeOperatorList(f4), this.restore()), g3 = r2.Util.applyTransform([
                h3.width,
                0
              ], d3)[0] * a3 + o4, t3.translate(g3, 0), n3.x += g3 * u3;
            }
            t3.restore(), this.processingType3 = null;
          }
        }
        setCharWidth(e3, t3) {
        }
        setCharWidthAndBounds(e3, t3, n3, r3, i3, a3) {
          this.ctx.rect(n3, r3, i3 - n3, a3 - r3), this.ctx.clip(), this.endPath();
        }
        getColorN_Pattern(e3) {
          let t3;
          if (e3[0] === `TilingPattern`) {
            let n3 = e3[1], r3 = this.baseTransform || (0, i2.getCurrentTransform)(this.ctx);
            t3 = new h2(e3, n3, this.ctx, {
              createCanvasGraphics: (e4) => new R2(e4, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: this.optionalContentConfig,
                markedContentStack: this.markedContentStack
              })
            }, r3);
          } else t3 = this._getPattern(e3[1], e3[2]);
          return t3;
        }
        setStrokeColorN() {
          this.current.strokeColor = this.getColorN_Pattern(arguments);
        }
        setFillColorN() {
          this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = true;
        }
        setStrokeRGBColor(e3, t3, n3) {
          let i3 = r2.Util.makeHexColor(e3, t3, n3);
          this.ctx.strokeStyle = i3, this.current.strokeColor = i3;
        }
        setFillRGBColor(e3, t3, n3) {
          let i3 = r2.Util.makeHexColor(e3, t3, n3);
          this.ctx.fillStyle = i3, this.current.fillColor = i3, this.current.patternFill = false;
        }
        _getPattern(e3, t3 = null) {
          let n3;
          return this.cachedPatterns.has(e3) ? n3 = this.cachedPatterns.get(e3) : (n3 = p2(this.getObject(e3)), this.cachedPatterns.set(e3, n3)), t3 && (n3.matrix = t3), n3;
        }
        shadingFill(e3) {
          if (!this.contentVisible) return;
          let t3 = this.ctx;
          this.save(), t3.fillStyle = this._getPattern(e3).getPattern(t3, this, (0, i2.getCurrentTransformInverse)(t3), a2.SHADING);
          let n3 = (0, i2.getCurrentTransformInverse)(t3);
          if (n3) {
            let { width: e4, height: i3 } = t3.canvas, [a3, o3, s3, c3] = r2.Util.getAxialAlignedBoundingBox([
              0,
              0,
              e4,
              i3
            ], n3);
            this.ctx.fillRect(a3, o3, s3 - a3, c3 - o3);
          } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
          this.compose(this.current.getClippedPathBoundingBox()), this.restore();
        }
        beginInlineImage() {
          (0, r2.unreachable)(`Should not call beginInlineImage`);
        }
        beginImageData() {
          (0, r2.unreachable)(`Should not call beginImageData`);
        }
        paintFormXObjectBegin(e3, t3) {
          if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(e3) && e3.length === 6 && this.transform(...e3), this.baseTransform = (0, i2.getCurrentTransform)(this.ctx), t3)) {
            let e4 = t3[2] - t3[0], n3 = t3[3] - t3[1];
            this.ctx.rect(t3[0], t3[1], e4, n3), this.current.updateRectMinMax((0, i2.getCurrentTransform)(this.ctx), t3), this.clip(), this.endPath();
          }
        }
        paintFormXObjectEnd() {
          this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
        }
        beginGroup(e3) {
          if (!this.contentVisible) return;
          this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
          let t3 = this.ctx;
          e3.isolated || (0, r2.info)(`TODO: Support non-isolated groups.`), e3.knockout && (0, r2.warn)(`Knockout groups not supported.`);
          let n3 = (0, i2.getCurrentTransform)(t3);
          if (e3.matrix && t3.transform(...e3.matrix), !e3.bbox) throw Error(`Bounding box is required.`);
          let a3 = r2.Util.getAxialAlignedBoundingBox(e3.bbox, (0, i2.getCurrentTransform)(t3)), o3 = [
            0,
            0,
            t3.canvas.width,
            t3.canvas.height
          ];
          a3 = r2.Util.intersect(a3, o3) || [
            0,
            0,
            0,
            0
          ];
          let s3 = Math.floor(a3[0]), c3 = Math.floor(a3[1]), l3 = Math.max(Math.ceil(a3[2]) - s3, 1), u3 = Math.max(Math.ceil(a3[3]) - c3, 1), d3 = 1, f3 = 1;
          l3 > _2 && (d3 = l3 / _2, l3 = _2), u3 > _2 && (f3 = u3 / _2, u3 = _2), this.current.startNewPathAndClipBox([
            0,
            0,
            l3,
            u3
          ]);
          let p3 = `groupAt` + this.groupLevel;
          e3.smask && (p3 += `_smask_` + this.smaskCounter++ % 2);
          let m3 = this.cachedCanvases.getCanvas(p3, l3, u3), h3 = m3.context;
          h3.scale(1 / d3, 1 / f3), h3.translate(-s3, -c3), h3.transform(...n3), e3.smask ? this.smaskStack.push({
            canvas: m3.canvas,
            context: h3,
            offsetX: s3,
            offsetY: c3,
            scaleX: d3,
            scaleY: f3,
            subtype: e3.smask.subtype,
            backdrop: e3.smask.backdrop,
            transferMap: e3.smask.transferMap || null,
            startTransformInverse: null
          }) : (t3.setTransform(1, 0, 0, 1, 0, 0), t3.translate(s3, c3), t3.scale(d3, f3), t3.save()), E2(t3, h3), this.ctx = h3, this.setGState([
            [
              `BM`,
              `source-over`
            ],
            [
              `ca`,
              1
            ],
            [
              `CA`,
              1
            ]
          ]), this.groupStack.push(t3), this.groupLevel++;
        }
        endGroup(e3) {
          if (!this.contentVisible) return;
          this.groupLevel--;
          let t3 = this.ctx;
          if (this.ctx = this.groupStack.pop(), this.ctx.imageSmoothingEnabled = false, e3.smask) this.tempSMask = this.smaskStack.pop(), this.restore();
          else {
            this.ctx.restore();
            let e4 = (0, i2.getCurrentTransform)(this.ctx);
            this.restore(), this.ctx.save(), this.ctx.setTransform(...e4);
            let n3 = r2.Util.getAxialAlignedBoundingBox([
              0,
              0,
              t3.canvas.width,
              t3.canvas.height
            ], e4);
            this.ctx.drawImage(t3.canvas, 0, 0), this.ctx.restore(), this.compose(n3);
          }
        }
        beginAnnotation(e3, t3, n3, a3, o3) {
          if (this.#e(), D2(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(t3) && t3.length === 4) {
            let a4 = t3[2] - t3[0], s3 = t3[3] - t3[1];
            if (o3 && this.annotationCanvasMap) {
              n3 = n3.slice(), n3[4] -= t3[0], n3[5] -= t3[1], t3 = t3.slice(), t3[0] = t3[1] = 0, t3[2] = a4, t3[3] = s3;
              let [o4, c3] = r2.Util.singularValueDecompose2dScale((0, i2.getCurrentTransform)(this.ctx)), { viewportScale: l3 } = this, u3 = Math.ceil(a4 * this.outputScaleX * l3), d3 = Math.ceil(s3 * this.outputScaleY * l3);
              this.annotationCanvas = this.canvasFactory.create(u3, d3);
              let { canvas: f3, context: p3 } = this.annotationCanvas;
              this.annotationCanvasMap.set(e3, f3), this.annotationCanvas.savedCtx = this.ctx, this.ctx = p3, this.ctx.save(), this.ctx.setTransform(o4, 0, 0, -c3, 0, s3 * c3), D2(this.ctx);
            } else D2(this.ctx), this.ctx.rect(t3[0], t3[1], a4, s3), this.ctx.clip(), this.endPath();
          }
          this.current = new C2(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...n3), this.transform(...a3);
        }
        endAnnotation() {
          this.annotationCanvas && (this.ctx.restore(), this.#t(), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
        }
        paintImageMaskXObject(e3) {
          if (!this.contentVisible) return;
          let t3 = e3.count;
          e3 = this.getObject(e3.data, e3), e3.count = t3;
          let n3 = this.ctx, r3 = this.processingType3;
          if (r3 && (r3.compiled === void 0 && (r3.compiled = S2(e3)), r3.compiled)) {
            r3.compiled(n3);
            return;
          }
          let i3 = this._createMaskCanvas(e3), a3 = i3.canvas;
          n3.save(), n3.setTransform(1, 0, 0, 1, 0, 0), n3.drawImage(a3, i3.offsetX, i3.offsetY), n3.restore(), this.compose();
        }
        paintImageMaskXObjectRepeat(e3, t3, n3 = 0, a3 = 0, o3, s3) {
          if (!this.contentVisible) return;
          e3 = this.getObject(e3.data, e3);
          let c3 = this.ctx;
          c3.save();
          let l3 = (0, i2.getCurrentTransform)(c3);
          c3.transform(t3, n3, a3, o3, 0, 0);
          let u3 = this._createMaskCanvas(e3);
          c3.setTransform(1, 0, 0, 1, u3.offsetX - l3[4], u3.offsetY - l3[5]);
          for (let e4 = 0, i3 = s3.length; e4 < i3; e4 += 2) {
            let i4 = r2.Util.transform(l3, [
              t3,
              n3,
              a3,
              o3,
              s3[e4],
              s3[e4 + 1]
            ]), [d3, f3] = r2.Util.applyTransform([
              0,
              0
            ], i4);
            c3.drawImage(u3.canvas, d3, f3);
          }
          c3.restore(), this.compose();
        }
        paintImageMaskXObjectGroup(e3) {
          if (!this.contentVisible) return;
          let t3 = this.ctx, n3 = this.current.fillColor, r3 = this.current.patternFill;
          for (let o3 of e3) {
            let { data: e4, width: s3, height: c3, transform: l3 } = o3, u3 = this.cachedCanvases.getCanvas(`maskCanvas`, s3, c3), d3 = u3.context;
            d3.save(), T2(d3, this.getObject(e4, o3)), d3.globalCompositeOperation = `source-in`, d3.fillStyle = r3 ? n3.getPattern(d3, this, (0, i2.getCurrentTransformInverse)(t3), a2.FILL) : n3, d3.fillRect(0, 0, s3, c3), d3.restore(), t3.save(), t3.transform(...l3), t3.scale(1, -1), x2(t3, u3.canvas, 0, 0, s3, c3, 0, -1, 1, 1), t3.restore();
          }
          this.compose();
        }
        paintImageXObject(e3) {
          if (!this.contentVisible) return;
          let t3 = this.getObject(e3);
          if (!t3) {
            (0, r2.warn)(`Dependent image isn't ready yet`);
            return;
          }
          this.paintInlineImageXObject(t3);
        }
        paintImageXObjectRepeat(e3, t3, n3, i3) {
          if (!this.contentVisible) return;
          let a3 = this.getObject(e3);
          if (!a3) {
            (0, r2.warn)(`Dependent image isn't ready yet`);
            return;
          }
          let o3 = a3.width, s3 = a3.height, c3 = [];
          for (let e4 = 0, r3 = i3.length; e4 < r3; e4 += 2) c3.push({
            transform: [
              t3,
              0,
              0,
              n3,
              i3[e4],
              i3[e4 + 1]
            ],
            x: 0,
            y: 0,
            w: o3,
            h: s3
          });
          this.paintInlineImageXObjectGroup(a3, c3);
        }
        applyTransferMapsToCanvas(e3) {
          return this.current.transferMaps !== `none` && (e3.filter = this.current.transferMaps, e3.drawImage(e3.canvas, 0, 0), e3.filter = `none`), e3.canvas;
        }
        applyTransferMapsToBitmap(e3) {
          if (this.current.transferMaps === `none`) return e3.bitmap;
          let { bitmap: t3, width: n3, height: r3 } = e3, i3 = this.cachedCanvases.getCanvas(`inlineImage`, n3, r3), a3 = i3.context;
          return a3.filter = this.current.transferMaps, a3.drawImage(t3, 0, 0), a3.filter = `none`, i3.canvas;
        }
        paintInlineImageXObject(e3) {
          if (!this.contentVisible) return;
          let t3 = e3.width, n3 = e3.height, a3 = this.ctx;
          if (this.save(), !r2.isNodeJS) {
            let { filter: e4 } = a3;
            e4 !== `none` && e4 !== `` && (a3.filter = `none`);
          }
          a3.scale(1 / t3, -1 / n3);
          let o3;
          if (e3.bitmap) o3 = this.applyTransferMapsToBitmap(e3);
          else if (typeof HTMLElement == `function` && e3 instanceof HTMLElement || !e3.data) o3 = e3;
          else {
            let r3 = this.cachedCanvases.getCanvas(`inlineImage`, t3, n3).context;
            w2(r3, e3), o3 = this.applyTransferMapsToCanvas(r3);
          }
          let s3 = this._scaleImage(o3, (0, i2.getCurrentTransformInverse)(a3));
          a3.imageSmoothingEnabled = N2((0, i2.getCurrentTransform)(a3), e3.interpolate), x2(a3, s3.img, 0, 0, s3.paintWidth, s3.paintHeight, 0, -n3, t3, n3), this.compose(), this.restore();
        }
        paintInlineImageXObjectGroup(e3, t3) {
          if (!this.contentVisible) return;
          let n3 = this.ctx, r3;
          if (e3.bitmap) r3 = e3.bitmap;
          else {
            let t4 = e3.width, n4 = e3.height, i3 = this.cachedCanvases.getCanvas(`inlineImage`, t4, n4).context;
            w2(i3, e3), r3 = this.applyTransferMapsToCanvas(i3);
          }
          for (let e4 of t3) n3.save(), n3.transform(...e4.transform), n3.scale(1, -1), x2(n3, r3, e4.x, e4.y, e4.w, e4.h, 0, -1, 1, 1), n3.restore();
          this.compose();
        }
        paintSolidColorImageMask() {
          this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
        }
        markPoint(e3) {
        }
        markPointProps(e3, t3) {
        }
        beginMarkedContent(e3) {
          this.markedContentStack.push({
            visible: true
          });
        }
        beginMarkedContentProps(e3, t3) {
          e3 === `OC` ? this.markedContentStack.push({
            visible: this.optionalContentConfig.isVisible(t3)
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
        consumePath(e3) {
          let t3 = this.current.isEmptyClip();
          this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(e3);
          let n3 = this.ctx;
          this.pendingClip &&= (t3 || (this.pendingClip === L2 ? n3.clip(`evenodd`) : n3.clip()), null), this.current.startNewPathAndClipBox(this.current.clipBox), n3.beginPath();
        }
        getSinglePixelWidth() {
          if (!this._cachedGetSinglePixelWidth) {
            let e3 = (0, i2.getCurrentTransform)(this.ctx);
            if (e3[1] === 0 && e3[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(e3[0]), Math.abs(e3[3]));
            else {
              let t3 = Math.abs(e3[0] * e3[3] - e3[2] * e3[1]), n3 = Math.hypot(e3[0], e3[2]), r3 = Math.hypot(e3[1], e3[3]);
              this._cachedGetSinglePixelWidth = Math.max(n3, r3) / t3;
            }
          }
          return this._cachedGetSinglePixelWidth;
        }
        getScaleForStroking() {
          if (this._cachedScaleForStroking[0] === -1) {
            let { lineWidth: e3 } = this.current, { a: t3, b: n3, c: r3, d: i3 } = this.ctx.getTransform(), a3, o3;
            if (n3 === 0 && r3 === 0) {
              let n4 = Math.abs(t3), r4 = Math.abs(i3);
              if (n4 === r4) if (e3 === 0) a3 = o3 = 1 / n4;
              else {
                let t4 = n4 * e3;
                a3 = o3 = t4 < 1 ? 1 / t4 : 1;
              }
              else if (e3 === 0) a3 = 1 / n4, o3 = 1 / r4;
              else {
                let t4 = n4 * e3, i4 = r4 * e3;
                a3 = t4 < 1 ? 1 / t4 : 1, o3 = i4 < 1 ? 1 / i4 : 1;
              }
            } else {
              let s3 = Math.abs(t3 * i3 - n3 * r3), c3 = Math.hypot(t3, n3), l3 = Math.hypot(r3, i3);
              if (e3 === 0) a3 = l3 / s3, o3 = c3 / s3;
              else {
                let t4 = e3 * s3;
                a3 = l3 > t4 ? l3 / t4 : 1, o3 = c3 > t4 ? c3 / t4 : 1;
              }
            }
            this._cachedScaleForStroking[0] = a3, this._cachedScaleForStroking[1] = o3;
          }
          return this._cachedScaleForStroking;
        }
        rescaleAndStroke(e3) {
          let { ctx: t3 } = this, { lineWidth: n3 } = this.current, [r3, i3] = this.getScaleForStroking();
          if (t3.lineWidth = n3 || 1, r3 === 1 && i3 === 1) {
            t3.stroke();
            return;
          }
          let a3 = t3.getLineDash();
          if (e3 && t3.save(), t3.scale(r3, i3), a3.length > 0) {
            let e4 = Math.max(r3, i3);
            t3.setLineDash(a3.map((t4) => t4 / e4)), t3.lineDashOffset /= e4;
          }
          t3.stroke(), e3 && t3.restore();
        }
        isContentVisible() {
          for (let e3 = this.markedContentStack.length - 1; e3 >= 0; e3--) if (!this.markedContentStack[e3].visible) return false;
          return true;
        }
      }
      for (let e3 in r2.OPS) R2.prototype[e3] !== void 0 && (R2.prototype[r2.OPS[e3]] = R2.prototype[e3]);
    }),
    419: ((e2, t2, n2) => {
      n2.d(t2, {
        DOMCMapReaderFactory: () => u2,
        DOMCanvasFactory: () => c2,
        DOMFilterFactory: () => s2,
        DOMSVGFactory: () => f2,
        DOMStandardFontDataFactory: () => d2,
        PDFDateString: () => C2,
        PageViewport: () => p2,
        PixelsPerInch: () => o2,
        RenderingCancelledException: () => m2,
        StatTimer: () => y2,
        fetchData: () => l2,
        getColorValues: () => E2,
        getCurrentTransform: () => D2,
        getCurrentTransformInverse: () => O2,
        getFilenameFromUrl: () => _2,
        getPdfFilenameFromUrl: () => v2,
        getRGB: () => T2,
        getXfaPageViewport: () => w2,
        isDataScheme: () => h2,
        isPdfFile: () => g2,
        isValidFetchUrl: () => b2,
        noContextMenu: () => x2,
        setLayerDimensions: () => k2
      });
      var r2 = n2(583), i2 = n2(292);
      let a2 = `http://www.w3.org/2000/svg`;
      class o2 {
        static CSS = 96;
        static PDF = 72;
        static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
      }
      class s2 extends r2.BaseFilterFactory {
        #e;
        #t;
        #n;
        #r;
        #i;
        #a = 0;
        constructor({ docId: e3, ownerDocument: t3 = globalThis.document } = {}) {
          super(), this.#n = e3, this.#r = t3;
        }
        get #o() {
          return this.#e ||= /* @__PURE__ */ new Map();
        }
        get #s() {
          return this.#i ||= /* @__PURE__ */ new Map();
        }
        get #c() {
          if (!this.#t) {
            let e3 = this.#r.createElement(`div`), { style: t3 } = e3;
            t3.visibility = `hidden`, t3.contain = `strict`, t3.width = t3.height = 0, t3.position = `absolute`, t3.top = t3.left = 0, t3.zIndex = -1;
            let n3 = this.#r.createElementNS(a2, `svg`);
            n3.setAttribute(`width`, 0), n3.setAttribute(`height`, 0), this.#t = this.#r.createElementNS(a2, `defs`), e3.append(n3), n3.append(this.#t), this.#r.body.append(e3);
          }
          return this.#t;
        }
        addFilter(e3) {
          if (!e3) return `none`;
          let t3 = this.#o.get(e3);
          if (t3) return t3;
          let n3, r3, i3, a3;
          if (e3.length === 1) {
            let t4 = e3[0], o4 = Array(256);
            for (let e4 = 0; e4 < 256; e4++) o4[e4] = t4[e4] / 255;
            a3 = n3 = r3 = i3 = o4.join(`,`);
          } else {
            let [t4, o4, s4] = e3, c4 = Array(256), l3 = Array(256), u3 = Array(256);
            for (let e4 = 0; e4 < 256; e4++) c4[e4] = t4[e4] / 255, l3[e4] = o4[e4] / 255, u3[e4] = s4[e4] / 255;
            n3 = c4.join(`,`), r3 = l3.join(`,`), i3 = u3.join(`,`), a3 = `${n3}${r3}${i3}`;
          }
          if (t3 = this.#o.get(a3), t3) return this.#o.set(e3, t3), t3;
          let o3 = `g_${this.#n}_transfer_map_${this.#a++}`, s3 = `url(#${o3})`;
          this.#o.set(e3, s3), this.#o.set(a3, s3);
          let c3 = this.#u(o3);
          return this.#f(n3, r3, i3, c3), s3;
        }
        addHCMFilter(e3, t3) {
          let n3 = `${e3}-${t3}`, r3 = `base`, a3 = this.#s.get(r3);
          if (a3?.key === n3 || (a3 ? (a3.filter?.remove(), a3.key = n3, a3.url = `none`, a3.filter = null) : (a3 = {
            key: n3,
            url: `none`,
            filter: null
          }, this.#s.set(r3, a3)), !e3 || !t3)) return a3.url;
          let o3 = this.#p(e3);
          e3 = i2.Util.makeHexColor(...o3);
          let s3 = this.#p(t3);
          if (t3 = i2.Util.makeHexColor(...s3), this.#c.style.color = ``, e3 === `#000000` && t3 === `#ffffff` || e3 === t3) return a3.url;
          let c3 = Array(256);
          for (let e4 = 0; e4 <= 255; e4++) {
            let t4 = e4 / 255;
            c3[e4] = t4 <= 0.03928 ? t4 / 12.92 : ((t4 + 0.055) / 1.055) ** 2.4;
          }
          let l3 = c3.join(`,`), u3 = `g_${this.#n}_hcm_filter`, d3 = a3.filter = this.#u(u3);
          this.#f(l3, l3, l3, d3), this.#l(d3);
          let f3 = (e4, t4) => {
            let n4 = o3[e4] / 255, r4 = s3[e4] / 255, i3 = Array(t4 + 1);
            for (let e5 = 0; e5 <= t4; e5++) i3[e5] = n4 + e5 / t4 * (r4 - n4);
            return i3.join(`,`);
          };
          return this.#f(f3(0, 5), f3(1, 5), f3(2, 5), d3), a3.url = `url(#${u3})`, a3.url;
        }
        addHighlightHCMFilter(e3, t3, n3, r3, i3) {
          let a3 = `${t3}-${n3}-${r3}-${i3}`, o3 = this.#s.get(e3);
          if (o3?.key === a3 || (o3 ? (o3.filter?.remove(), o3.key = a3, o3.url = `none`, o3.filter = null) : (o3 = {
            key: a3,
            url: `none`,
            filter: null
          }, this.#s.set(e3, o3)), !t3 || !n3)) return o3.url;
          let [s3, c3] = [
            t3,
            n3
          ].map(this.#p.bind(this)), l3 = Math.round(0.2126 * s3[0] + 0.7152 * s3[1] + 0.0722 * s3[2]), u3 = Math.round(0.2126 * c3[0] + 0.7152 * c3[1] + 0.0722 * c3[2]), [d3, f3] = [
            r3,
            i3
          ].map(this.#p.bind(this));
          u3 < l3 && ([l3, u3, d3, f3] = [
            u3,
            l3,
            f3,
            d3
          ]), this.#c.style.color = ``;
          let p3 = (e4, t4, n4) => {
            let r4 = Array(256), i4 = (u3 - l3) / n4, a4 = e4 / 255, o4 = (t4 - e4) / (255 * n4), s4 = 0;
            for (let e5 = 0; e5 <= n4; e5++) {
              let t5 = Math.round(l3 + e5 * i4), n5 = a4 + e5 * o4;
              for (let e6 = s4; e6 <= t5; e6++) r4[e6] = n5;
              s4 = t5 + 1;
            }
            for (let e5 = s4; e5 < 256; e5++) r4[e5] = r4[s4 - 1];
            return r4.join(`,`);
          }, m3 = `g_${this.#n}_hcm_${e3}_filter`, h3 = o3.filter = this.#u(m3);
          return this.#l(h3), this.#f(p3(d3[0], f3[0], 5), p3(d3[1], f3[1], 5), p3(d3[2], f3[2], 5), h3), o3.url = `url(#${m3})`, o3.url;
        }
        destroy(e3 = false) {
          e3 && this.#s.size !== 0 || (this.#t &&= (this.#t.parentNode.parentNode.remove(), null), this.#e &&= (this.#e.clear(), null), this.#a = 0);
        }
        #l(e3) {
          let t3 = this.#r.createElementNS(a2, `feColorMatrix`);
          t3.setAttribute(`type`, `matrix`), t3.setAttribute(`values`, `0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0`), e3.append(t3);
        }
        #u(e3) {
          let t3 = this.#r.createElementNS(a2, `filter`);
          return t3.setAttribute(`color-interpolation-filters`, `sRGB`), t3.setAttribute(`id`, e3), this.#c.append(t3), t3;
        }
        #d(e3, t3, n3) {
          let r3 = this.#r.createElementNS(a2, t3);
          r3.setAttribute(`type`, `discrete`), r3.setAttribute(`tableValues`, n3), e3.append(r3);
        }
        #f(e3, t3, n3, r3) {
          let i3 = this.#r.createElementNS(a2, `feComponentTransfer`);
          r3.append(i3), this.#d(i3, `feFuncR`, e3), this.#d(i3, `feFuncG`, t3), this.#d(i3, `feFuncB`, n3);
        }
        #p(e3) {
          return this.#c.style.color = e3, T2(getComputedStyle(this.#c).getPropertyValue(`color`));
        }
      }
      class c2 extends r2.BaseCanvasFactory {
        constructor({ ownerDocument: e3 = globalThis.document } = {}) {
          super(), this._document = e3;
        }
        _createCanvas(e3, t3) {
          let n3 = this._document.createElement(`canvas`);
          return n3.width = e3, n3.height = t3, n3;
        }
      }
      async function l2(e3, t3 = `text`) {
        if (b2(e3, document.baseURI)) {
          let n3 = await fetch(e3);
          if (!n3.ok) throw Error(n3.statusText);
          switch (t3) {
            case `arraybuffer`:
              return n3.arrayBuffer();
            case `blob`:
              return n3.blob();
            case `json`:
              return n3.json();
          }
          return n3.text();
        }
        return new Promise((n3, r3) => {
          let i3 = new XMLHttpRequest();
          i3.open(`GET`, e3, true), i3.responseType = t3, i3.onreadystatechange = () => {
            if (i3.readyState === XMLHttpRequest.DONE) {
              if (i3.status === 200 || i3.status === 0) {
                switch (t3) {
                  case `arraybuffer`:
                  case `blob`:
                  case `json`:
                    n3(i3.response);
                    return;
                }
                n3(i3.responseText);
                return;
              }
              r3(Error(i3.statusText));
            }
          }, i3.send(null);
        });
      }
      class u2 extends r2.BaseCMapReaderFactory {
        _fetchData(e3, t3) {
          return l2(e3, this.isCompressed ? `arraybuffer` : `text`).then((e4) => ({
            cMapData: e4 instanceof ArrayBuffer ? new Uint8Array(e4) : (0, i2.stringToBytes)(e4),
            compressionType: t3
          }));
        }
      }
      class d2 extends r2.BaseStandardFontDataFactory {
        _fetchData(e3) {
          return l2(e3, `arraybuffer`).then((e4) => new Uint8Array(e4));
        }
      }
      class f2 extends r2.BaseSVGFactory {
        _createSVG(e3) {
          return document.createElementNS(a2, e3);
        }
      }
      class p2 {
        constructor({ viewBox: e3, scale: t3, rotation: n3, offsetX: r3 = 0, offsetY: i3 = 0, dontFlip: a3 = false }) {
          this.viewBox = e3, this.scale = t3, this.rotation = n3, this.offsetX = r3, this.offsetY = i3;
          let o3 = (e3[2] + e3[0]) / 2, s3 = (e3[3] + e3[1]) / 2, c3, l3, u3, d3;
          switch (n3 %= 360, n3 < 0 && (n3 += 360), n3) {
            case 180:
              c3 = -1, l3 = 0, u3 = 0, d3 = 1;
              break;
            case 90:
              c3 = 0, l3 = 1, u3 = 1, d3 = 0;
              break;
            case 270:
              c3 = 0, l3 = -1, u3 = -1, d3 = 0;
              break;
            case 0:
              c3 = 1, l3 = 0, u3 = 0, d3 = -1;
              break;
            default:
              throw Error(`PageViewport: Invalid rotation, must be a multiple of 90 degrees.`);
          }
          a3 && (u3 = -u3, d3 = -d3);
          let f3, p3, m3, h3;
          c3 === 0 ? (f3 = Math.abs(s3 - e3[1]) * t3 + r3, p3 = Math.abs(o3 - e3[0]) * t3 + i3, m3 = (e3[3] - e3[1]) * t3, h3 = (e3[2] - e3[0]) * t3) : (f3 = Math.abs(o3 - e3[0]) * t3 + r3, p3 = Math.abs(s3 - e3[1]) * t3 + i3, m3 = (e3[2] - e3[0]) * t3, h3 = (e3[3] - e3[1]) * t3), this.transform = [
            c3 * t3,
            l3 * t3,
            u3 * t3,
            d3 * t3,
            f3 - c3 * t3 * o3 - u3 * t3 * s3,
            p3 - l3 * t3 * o3 - d3 * t3 * s3
          ], this.width = m3, this.height = h3;
        }
        get rawDims() {
          let { viewBox: e3 } = this;
          return (0, i2.shadow)(this, `rawDims`, {
            pageWidth: e3[2] - e3[0],
            pageHeight: e3[3] - e3[1],
            pageX: e3[0],
            pageY: e3[1]
          });
        }
        clone({ scale: e3 = this.scale, rotation: t3 = this.rotation, offsetX: n3 = this.offsetX, offsetY: r3 = this.offsetY, dontFlip: i3 = false } = {}) {
          return new p2({
            viewBox: this.viewBox.slice(),
            scale: e3,
            rotation: t3,
            offsetX: n3,
            offsetY: r3,
            dontFlip: i3
          });
        }
        convertToViewportPoint(e3, t3) {
          return i2.Util.applyTransform([
            e3,
            t3
          ], this.transform);
        }
        convertToViewportRectangle(e3) {
          let t3 = i2.Util.applyTransform([
            e3[0],
            e3[1]
          ], this.transform), n3 = i2.Util.applyTransform([
            e3[2],
            e3[3]
          ], this.transform);
          return [
            t3[0],
            t3[1],
            n3[0],
            n3[1]
          ];
        }
        convertToPdfPoint(e3, t3) {
          return i2.Util.applyInverseTransform([
            e3,
            t3
          ], this.transform);
        }
      }
      class m2 extends i2.BaseException {
        constructor(e3, t3 = 0) {
          super(e3, `RenderingCancelledException`), this.extraDelay = t3;
        }
      }
      function h2(e3) {
        let t3 = e3.length, n3 = 0;
        for (; n3 < t3 && e3[n3].trim() === ``; ) n3++;
        return e3.substring(n3, n3 + 5).toLowerCase() === `data:`;
      }
      function g2(e3) {
        return typeof e3 == `string` && /\.pdf$/i.test(e3);
      }
      function _2(e3, t3 = false) {
        return t3 || ([e3] = e3.split(/[#?]/, 1)), e3.substring(e3.lastIndexOf(`/`) + 1);
      }
      function v2(e3, t3 = `document.pdf`) {
        if (typeof e3 != `string`) return t3;
        if (h2(e3)) return (0, i2.warn)(`getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.`), t3;
        let n3 = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, r3 = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, a3 = n3.exec(e3), o3 = r3.exec(a3[1]) || r3.exec(a3[2]) || r3.exec(a3[3]);
        if (o3 && (o3 = o3[0], o3.includes(`%`))) try {
          o3 = r3.exec(decodeURIComponent(o3))[0];
        } catch {
        }
        return o3 || t3;
      }
      class y2 {
        started = /* @__PURE__ */ Object.create(null);
        times = [];
        time(e3) {
          e3 in this.started && (0, i2.warn)(`Timer is already running for ${e3}`), this.started[e3] = Date.now();
        }
        timeEnd(e3) {
          e3 in this.started || (0, i2.warn)(`Timer has not been started for ${e3}`), this.times.push({
            name: e3,
            start: this.started[e3],
            end: Date.now()
          }), delete this.started[e3];
        }
        toString() {
          let e3 = [], t3 = 0;
          for (let { name: e4 } of this.times) t3 = Math.max(e4.length, t3);
          for (let { name: n3, start: r3, end: i3 } of this.times) e3.push(`${n3.padEnd(t3)} ${i3 - r3}ms
`);
          return e3.join(``);
        }
      }
      function b2(e3, t3) {
        try {
          let { protocol: n3 } = t3 ? new URL(e3, t3) : new URL(e3);
          return n3 === `http:` || n3 === `https:`;
        } catch {
          return false;
        }
      }
      function x2(e3) {
        e3.preventDefault();
      }
      let S2;
      class C2 {
        static toDateObject(e3) {
          if (!e3 || typeof e3 != `string`) return null;
          S2 ||= RegExp(`^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?`);
          let t3 = S2.exec(e3);
          if (!t3) return null;
          let n3 = parseInt(t3[1], 10), r3 = parseInt(t3[2], 10);
          r3 = r3 >= 1 && r3 <= 12 ? r3 - 1 : 0;
          let i3 = parseInt(t3[3], 10);
          i3 = i3 >= 1 && i3 <= 31 ? i3 : 1;
          let a3 = parseInt(t3[4], 10);
          a3 = a3 >= 0 && a3 <= 23 ? a3 : 0;
          let o3 = parseInt(t3[5], 10);
          o3 = o3 >= 0 && o3 <= 59 ? o3 : 0;
          let s3 = parseInt(t3[6], 10);
          s3 = s3 >= 0 && s3 <= 59 ? s3 : 0;
          let c3 = t3[7] || `Z`, l3 = parseInt(t3[8], 10);
          l3 = l3 >= 0 && l3 <= 23 ? l3 : 0;
          let u3 = parseInt(t3[9], 10) || 0;
          return u3 = u3 >= 0 && u3 <= 59 ? u3 : 0, c3 === `-` ? (a3 += l3, o3 += u3) : c3 === `+` && (a3 -= l3, o3 -= u3), new Date(Date.UTC(n3, r3, i3, a3, o3, s3));
        }
      }
      function w2(e3, { scale: t3 = 1, rotation: n3 = 0 }) {
        let { width: r3, height: i3 } = e3.attributes.style;
        return new p2({
          viewBox: [
            0,
            0,
            parseInt(r3),
            parseInt(i3)
          ],
          scale: t3,
          rotation: n3
        });
      }
      function T2(e3) {
        if (e3.startsWith(`#`)) {
          let t3 = parseInt(e3.slice(1), 16);
          return [
            (t3 & 16711680) >> 16,
            (t3 & 65280) >> 8,
            t3 & 255
          ];
        }
        return e3.startsWith(`rgb(`) ? e3.slice(4, -1).split(`,`).map((e4) => parseInt(e4)) : e3.startsWith(`rgba(`) ? e3.slice(5, -1).split(`,`).map((e4) => parseInt(e4)).slice(0, 3) : ((0, i2.warn)(`Not a valid color format: "${e3}"`), [
          0,
          0,
          0
        ]);
      }
      function E2(e3) {
        let t3 = document.createElement(`span`);
        t3.style.visibility = `hidden`, document.body.append(t3);
        for (let n3 of e3.keys()) {
          t3.style.color = n3;
          let r3 = window.getComputedStyle(t3).color;
          e3.set(n3, T2(r3));
        }
        t3.remove();
      }
      function D2(e3) {
        let { a: t3, b: n3, c: r3, d: i3, e: a3, f: o3 } = e3.getTransform();
        return [
          t3,
          n3,
          r3,
          i3,
          a3,
          o3
        ];
      }
      function O2(e3) {
        let { a: t3, b: n3, c: r3, d: i3, e: a3, f: o3 } = e3.getTransform().invertSelf();
        return [
          t3,
          n3,
          r3,
          i3,
          a3,
          o3
        ];
      }
      function k2(e3, t3, n3 = false, r3 = true) {
        if (t3 instanceof p2) {
          let { pageWidth: r4, pageHeight: a3 } = t3.rawDims, { style: o3 } = e3, s3 = i2.FeatureTest.isCSSRoundSupported, c3 = `var(--scale-factor) * ${r4}px`, l3 = `var(--scale-factor) * ${a3}px`, u3 = s3 ? `round(${c3}, 1px)` : `calc(${c3})`, d3 = s3 ? `round(${l3}, 1px)` : `calc(${l3})`;
          !n3 || t3.rotation % 180 == 0 ? (o3.width = u3, o3.height = d3) : (o3.width = d3, o3.height = u3);
        }
        r3 && e3.setAttribute(`data-main-rotation`, t3.rotation);
      }
    }),
    47: ((e2, t2, n2) => {
      n2.d(t2, {
        DrawLayer: () => a2
      });
      var r2 = n2(419), i2 = n2(292);
      class a2 {
        #e = null;
        #t = 0;
        #n = /* @__PURE__ */ new Map();
        #r = /* @__PURE__ */ new Map();
        constructor({ pageIndex: e3 }) {
          this.pageIndex = e3;
        }
        setParent(e3) {
          if (!this.#e) {
            this.#e = e3;
            return;
          }
          if (this.#e !== e3) {
            if (this.#n.size > 0) for (let t3 of this.#n.values()) t3.remove(), e3.append(t3);
            this.#e = e3;
          }
        }
        static get _svgFactory() {
          return (0, i2.shadow)(this, `_svgFactory`, new r2.DOMSVGFactory());
        }
        static #i(e3, { x: t3 = 0, y: n3 = 0, width: r3 = 1, height: i3 = 1 } = {}) {
          let { style: a3 } = e3;
          a3.top = `${100 * n3}%`, a3.left = `${100 * t3}%`, a3.width = `${100 * r3}%`, a3.height = `${100 * i3}%`;
        }
        #a(e3) {
          let t3 = a2._svgFactory.create(1, 1, true);
          return this.#e.append(t3), t3.setAttribute(`aria-hidden`, true), a2.#i(t3, e3), t3;
        }
        #o(e3, t3) {
          let n3 = a2._svgFactory.createElement(`clipPath`);
          e3.append(n3);
          let r3 = `clip_${t3}`;
          n3.setAttribute(`id`, r3), n3.setAttribute(`clipPathUnits`, `objectBoundingBox`);
          let i3 = a2._svgFactory.createElement(`use`);
          return n3.append(i3), i3.setAttribute(`href`, `#${t3}`), i3.classList.add(`clip`), r3;
        }
        highlight(e3, t3, n3, r3 = false) {
          let i3 = this.#t++, o2 = this.#a(e3.box);
          o2.classList.add(`highlight`), e3.free && o2.classList.add(`free`);
          let s2 = a2._svgFactory.createElement(`defs`);
          o2.append(s2);
          let c2 = a2._svgFactory.createElement(`path`);
          s2.append(c2);
          let l2 = `path_p${this.pageIndex}_${i3}`;
          c2.setAttribute(`id`, l2), c2.setAttribute(`d`, e3.toSVGPath()), r3 && this.#r.set(i3, c2);
          let u2 = this.#o(s2, l2), d2 = a2._svgFactory.createElement(`use`);
          return o2.append(d2), o2.setAttribute(`fill`, t3), o2.setAttribute(`fill-opacity`, n3), d2.setAttribute(`href`, `#${l2}`), this.#n.set(i3, o2), {
            id: i3,
            clipPathId: `url(#${u2})`
          };
        }
        highlightOutline(e3) {
          let t3 = this.#t++, n3 = this.#a(e3.box);
          n3.classList.add(`highlightOutline`);
          let r3 = a2._svgFactory.createElement(`defs`);
          n3.append(r3);
          let i3 = a2._svgFactory.createElement(`path`);
          r3.append(i3);
          let o2 = `path_p${this.pageIndex}_${t3}`;
          i3.setAttribute(`id`, o2), i3.setAttribute(`d`, e3.toSVGPath()), i3.setAttribute(`vector-effect`, `non-scaling-stroke`);
          let s2;
          if (e3.free) {
            n3.classList.add(`free`);
            let e4 = a2._svgFactory.createElement(`mask`);
            r3.append(e4), s2 = `mask_p${this.pageIndex}_${t3}`, e4.setAttribute(`id`, s2), e4.setAttribute(`maskUnits`, `objectBoundingBox`);
            let i4 = a2._svgFactory.createElement(`rect`);
            e4.append(i4), i4.setAttribute(`width`, `1`), i4.setAttribute(`height`, `1`), i4.setAttribute(`fill`, `white`);
            let c3 = a2._svgFactory.createElement(`use`);
            e4.append(c3), c3.setAttribute(`href`, `#${o2}`), c3.setAttribute(`stroke`, `none`), c3.setAttribute(`fill`, `black`), c3.setAttribute(`fill-rule`, `nonzero`), c3.classList.add(`mask`);
          }
          let c2 = a2._svgFactory.createElement(`use`);
          n3.append(c2), c2.setAttribute(`href`, `#${o2}`), s2 && c2.setAttribute(`mask`, `url(#${s2})`);
          let l2 = c2.cloneNode();
          return n3.append(l2), c2.classList.add(`mainOutline`), l2.classList.add(`secondaryOutline`), this.#n.set(t3, n3), t3;
        }
        finalizeLine(e3, t3) {
          let n3 = this.#r.get(e3);
          this.#r.delete(e3), this.updateBox(e3, t3.box), n3.setAttribute(`d`, t3.toSVGPath());
        }
        updateLine(e3, t3) {
          this.#n.get(e3).firstChild.firstChild.setAttribute(`d`, t3.toSVGPath());
        }
        removeFreeHighlight(e3) {
          this.remove(e3), this.#r.delete(e3);
        }
        updatePath(e3, t3) {
          this.#r.get(e3).setAttribute(`d`, t3.toSVGPath());
        }
        updateBox(e3, t3) {
          a2.#i(this.#n.get(e3), t3);
        }
        show(e3, t3) {
          this.#n.get(e3).classList.toggle(`hidden`, !t3);
        }
        rotate(e3, t3) {
          this.#n.get(e3).setAttribute(`data-main-rotation`, t3);
        }
        changeColor(e3, t3) {
          this.#n.get(e3).setAttribute(`fill`, t3);
        }
        changeOpacity(e3, t3) {
          this.#n.get(e3).setAttribute(`fill-opacity`, t3);
        }
        addClass(e3, t3) {
          this.#n.get(e3).classList.add(t3);
        }
        removeClass(e3, t3) {
          this.#n.get(e3).classList.remove(t3);
        }
        remove(e3) {
          this.#e !== null && (this.#n.get(e3).remove(), this.#n.delete(e3));
        }
        destroy() {
          this.#e = null;
          for (let e3 of this.#n.values()) e3.remove();
          this.#n.clear();
        }
      }
    }),
    731: ((e2, t2, n2) => {
      n2.d(t2, {
        AnnotationEditorLayer: () => h2
      });
      var r2 = n2(292), i2 = n2(310), a2 = n2(830), o2 = n2(976);
      let s2 = /\r\n?|\n/g;
      class c2 extends i2.AnnotationEditor {
        #e = this.editorDivBlur.bind(this);
        #t = this.editorDivFocus.bind(this);
        #n = this.editorDivInput.bind(this);
        #r = this.editorDivKeydown.bind(this);
        #i = this.editorDivPaste.bind(this);
        #a;
        #o = ``;
        #s = `${this.id}-editor`;
        #c;
        #l = null;
        static _freeTextDefaultContent = ``;
        static _internalPadding = 0;
        static _defaultColor = null;
        static _defaultFontSize = 10;
        static get _keyboardManager() {
          let e3 = c2.prototype, t3 = (e4) => e4.isEmpty(), n3 = a2.AnnotationEditorUIManager.TRANSLATE_SMALL, i3 = a2.AnnotationEditorUIManager.TRANSLATE_BIG;
          return (0, r2.shadow)(this, `_keyboardManager`, new a2.KeyboardManager([
            [
              [
                `ctrl+s`,
                `mac+meta+s`,
                `ctrl+p`,
                `mac+meta+p`
              ],
              e3.commitOrRemove,
              {
                bubbles: true
              }
            ],
            [
              [
                `ctrl+Enter`,
                `mac+meta+Enter`,
                `Escape`,
                `mac+Escape`
              ],
              e3.commitOrRemove
            ],
            [
              [
                `ArrowLeft`,
                `mac+ArrowLeft`
              ],
              e3._translateEmpty,
              {
                args: [
                  -n3,
                  0
                ],
                checker: t3
              }
            ],
            [
              [
                `ctrl+ArrowLeft`,
                `mac+shift+ArrowLeft`
              ],
              e3._translateEmpty,
              {
                args: [
                  -i3,
                  0
                ],
                checker: t3
              }
            ],
            [
              [
                `ArrowRight`,
                `mac+ArrowRight`
              ],
              e3._translateEmpty,
              {
                args: [
                  n3,
                  0
                ],
                checker: t3
              }
            ],
            [
              [
                `ctrl+ArrowRight`,
                `mac+shift+ArrowRight`
              ],
              e3._translateEmpty,
              {
                args: [
                  i3,
                  0
                ],
                checker: t3
              }
            ],
            [
              [
                `ArrowUp`,
                `mac+ArrowUp`
              ],
              e3._translateEmpty,
              {
                args: [
                  0,
                  -n3
                ],
                checker: t3
              }
            ],
            [
              [
                `ctrl+ArrowUp`,
                `mac+shift+ArrowUp`
              ],
              e3._translateEmpty,
              {
                args: [
                  0,
                  -i3
                ],
                checker: t3
              }
            ],
            [
              [
                `ArrowDown`,
                `mac+ArrowDown`
              ],
              e3._translateEmpty,
              {
                args: [
                  0,
                  n3
                ],
                checker: t3
              }
            ],
            [
              [
                `ctrl+ArrowDown`,
                `mac+shift+ArrowDown`
              ],
              e3._translateEmpty,
              {
                args: [
                  0,
                  i3
                ],
                checker: t3
              }
            ]
          ]));
        }
        static _type = `freetext`;
        static _editorType = r2.AnnotationEditorType.FREETEXT;
        constructor(e3) {
          super({
            ...e3,
            name: `freeTextEditor`
          }), this.#a = e3.color || c2._defaultColor || i2.AnnotationEditor._defaultLineColor, this.#c = e3.fontSize || c2._defaultFontSize;
        }
        static initialize(e3, t3) {
          i2.AnnotationEditor.initialize(e3, t3, {
            strings: [
              `pdfjs-free-text-default-content`
            ]
          });
          let n3 = getComputedStyle(document.documentElement);
          this._internalPadding = parseFloat(n3.getPropertyValue(`--freetext-padding`));
        }
        static updateDefaultParams(e3, t3) {
          switch (e3) {
            case r2.AnnotationEditorParamsType.FREETEXT_SIZE:
              c2._defaultFontSize = t3;
              break;
            case r2.AnnotationEditorParamsType.FREETEXT_COLOR:
              c2._defaultColor = t3;
              break;
          }
        }
        updateParams(e3, t3) {
          switch (e3) {
            case r2.AnnotationEditorParamsType.FREETEXT_SIZE:
              this.#u(t3);
              break;
            case r2.AnnotationEditorParamsType.FREETEXT_COLOR:
              this.#d(t3);
              break;
          }
        }
        static get defaultPropertiesToUpdate() {
          return [
            [
              r2.AnnotationEditorParamsType.FREETEXT_SIZE,
              c2._defaultFontSize
            ],
            [
              r2.AnnotationEditorParamsType.FREETEXT_COLOR,
              c2._defaultColor || i2.AnnotationEditor._defaultLineColor
            ]
          ];
        }
        get propertiesToUpdate() {
          return [
            [
              r2.AnnotationEditorParamsType.FREETEXT_SIZE,
              this.#c
            ],
            [
              r2.AnnotationEditorParamsType.FREETEXT_COLOR,
              this.#a
            ]
          ];
        }
        #u(e3) {
          let t3 = (e4) => {
            this.editorDiv.style.fontSize = `calc(${e4}px * var(--scale-factor))`, this.translate(0, -(e4 - this.#c) * this.parentScale), this.#c = e4, this.#p();
          }, n3 = this.#c;
          this.addCommands({
            cmd: t3.bind(this, e3),
            undo: t3.bind(this, n3),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: true,
            type: r2.AnnotationEditorParamsType.FREETEXT_SIZE,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        #d(e3) {
          let t3 = (e4) => {
            this.#a = this.editorDiv.style.color = e4;
          }, n3 = this.#a;
          this.addCommands({
            cmd: t3.bind(this, e3),
            undo: t3.bind(this, n3),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: true,
            type: r2.AnnotationEditorParamsType.FREETEXT_COLOR,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        _translateEmpty(e3, t3) {
          this._uiManager.translateSelectedEditors(e3, t3, true);
        }
        getInitialTranslation() {
          let e3 = this.parentScale;
          return [
            -c2._internalPadding * e3,
            -(c2._internalPadding + this.#c) * e3
          ];
        }
        rebuild() {
          this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
        }
        enableEditMode() {
          this.isInEditMode() || (this.parent.setEditingState(false), this.parent.updateToolbar(r2.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove(`enabled`), this.editorDiv.contentEditable = true, this._isDraggable = false, this.div.removeAttribute(`aria-activedescendant`), this.editorDiv.addEventListener(`keydown`, this.#r), this.editorDiv.addEventListener(`focus`, this.#t), this.editorDiv.addEventListener(`blur`, this.#e), this.editorDiv.addEventListener(`input`, this.#n), this.editorDiv.addEventListener(`paste`, this.#i));
        }
        disableEditMode() {
          this.isInEditMode() && (this.parent.setEditingState(true), super.disableEditMode(), this.overlayDiv.classList.add(`enabled`), this.editorDiv.contentEditable = false, this.div.setAttribute(`aria-activedescendant`, this.#s), this._isDraggable = true, this.editorDiv.removeEventListener(`keydown`, this.#r), this.editorDiv.removeEventListener(`focus`, this.#t), this.editorDiv.removeEventListener(`blur`, this.#e), this.editorDiv.removeEventListener(`input`, this.#n), this.editorDiv.removeEventListener(`paste`, this.#i), this.div.focus({
            preventScroll: true
          }), this.isEditing = false, this.parent.div.classList.add(`freetextEditing`));
        }
        focusin(e3) {
          this._focusEventsAllowed && (super.focusin(e3), e3.target !== this.editorDiv && this.editorDiv.focus());
        }
        onceAdded() {
          this.width || (this.enableEditMode(), this.editorDiv.focus(), this._initialOptions?.isCentered && this.center(), this._initialOptions = null);
        }
        isEmpty() {
          return !this.editorDiv || this.editorDiv.innerText.trim() === ``;
        }
        remove() {
          this.isEditing = false, this.parent && (this.parent.setEditingState(true), this.parent.div.classList.add(`freetextEditing`)), super.remove();
        }
        #f() {
          let e3 = [];
          this.editorDiv.normalize();
          for (let t3 of this.editorDiv.childNodes) e3.push(c2.#m(t3));
          return e3.join(`
`);
        }
        #p() {
          let [e3, t3] = this.parentDimensions, n3;
          if (this.isAttachedToDOM) n3 = this.div.getBoundingClientRect();
          else {
            let { currentLayer: e4, div: t4 } = this, r3 = t4.style.display, i3 = t4.classList.contains(`hidden`);
            t4.classList.remove(`hidden`), t4.style.display = `hidden`, e4.div.append(this.div), n3 = t4.getBoundingClientRect(), t4.remove(), t4.style.display = r3, t4.classList.toggle(`hidden`, i3);
          }
          this.rotation % 180 == this.parentRotation % 180 ? (this.width = n3.width / e3, this.height = n3.height / t3) : (this.width = n3.height / e3, this.height = n3.width / t3), this.fixAndSetPosition();
        }
        commit() {
          if (!this.isInEditMode()) return;
          super.commit(), this.disableEditMode();
          let e3 = this.#o, t3 = this.#o = this.#f().trimEnd();
          if (e3 === t3) return;
          let n3 = (e4) => {
            if (this.#o = e4, !e4) {
              this.remove();
              return;
            }
            this.#h(), this._uiManager.rebuild(this), this.#p();
          };
          this.addCommands({
            cmd: () => {
              n3(t3);
            },
            undo: () => {
              n3(e3);
            },
            mustExec: false
          }), this.#p();
        }
        shouldGetKeyboardEvents() {
          return this.isInEditMode();
        }
        enterInEditMode() {
          this.enableEditMode(), this.editorDiv.focus();
        }
        dblclick(e3) {
          this.enterInEditMode();
        }
        keydown(e3) {
          e3.target === this.div && e3.key === `Enter` && (this.enterInEditMode(), e3.preventDefault());
        }
        editorDivKeydown(e3) {
          c2._keyboardManager.exec(this, e3);
        }
        editorDivFocus(e3) {
          this.isEditing = true;
        }
        editorDivBlur(e3) {
          this.isEditing = false;
        }
        editorDivInput(e3) {
          this.parent.div.classList.toggle(`freetextEditing`, this.isEmpty());
        }
        disableEditing() {
          this.editorDiv.setAttribute(`role`, `comment`), this.editorDiv.removeAttribute(`aria-multiline`);
        }
        enableEditing() {
          this.editorDiv.setAttribute(`role`, `textbox`), this.editorDiv.setAttribute(`aria-multiline`, true);
        }
        render() {
          if (this.div) return this.div;
          let e3, t3;
          this.width && (e3 = this.x, t3 = this.y), super.render(), this.editorDiv = document.createElement(`div`), this.editorDiv.className = `internal`, this.editorDiv.setAttribute(`id`, this.#s), this.editorDiv.setAttribute(`data-l10n-id`, `pdfjs-free-text`), this.enableEditing(), i2.AnnotationEditor._l10nPromise.get(`pdfjs-free-text-default-content`).then((e4) => this.editorDiv?.setAttribute(`default-content`, e4)), this.editorDiv.contentEditable = true;
          let { style: n3 } = this.editorDiv;
          if (n3.fontSize = `calc(${this.#c}px * var(--scale-factor))`, n3.color = this.#a, this.div.append(this.editorDiv), this.overlayDiv = document.createElement(`div`), this.overlayDiv.classList.add(`overlay`, `enabled`), this.div.append(this.overlayDiv), (0, a2.bindEvents)(this, this.div, [
            `dblclick`,
            `keydown`
          ]), this.width) {
            let [n4, r3] = this.parentDimensions;
            if (this.annotationElementId) {
              let { position: i3 } = this.#l, [a3, o3] = this.getInitialTranslation();
              [a3, o3] = this.pageTranslationToScreen(a3, o3);
              let [s3, c3] = this.pageDimensions, [l3, u3] = this.pageTranslation, d3, f3;
              switch (this.rotation) {
                case 0:
                  d3 = e3 + (i3[0] - l3) / s3, f3 = t3 + this.height - (i3[1] - u3) / c3;
                  break;
                case 90:
                  d3 = e3 + (i3[0] - l3) / s3, f3 = t3 - (i3[1] - u3) / c3, [a3, o3] = [
                    o3,
                    -a3
                  ];
                  break;
                case 180:
                  d3 = e3 - this.width + (i3[0] - l3) / s3, f3 = t3 - (i3[1] - u3) / c3, [a3, o3] = [
                    -a3,
                    -o3
                  ];
                  break;
                case 270:
                  d3 = e3 + (i3[0] - l3 - this.height * c3) / s3, f3 = t3 + (i3[1] - u3 - this.width * s3) / c3, [a3, o3] = [
                    -o3,
                    a3
                  ];
                  break;
              }
              this.setAt(d3 * n4, f3 * r3, a3, o3);
            } else this.setAt(e3 * n4, t3 * r3, this.width * n4, this.height * r3);
            this.#h(), this._isDraggable = true, this.editorDiv.contentEditable = false;
          } else this._isDraggable = false, this.editorDiv.contentEditable = true;
          return this.div;
        }
        static #m(e3) {
          return (e3.nodeType === Node.TEXT_NODE ? e3.nodeValue : e3.innerText).replaceAll(s2, ``);
        }
        editorDivPaste(e3) {
          let t3 = e3.clipboardData || window.clipboardData, { types: n3 } = t3;
          if (n3.length === 1 && n3[0] === `text/plain`) return;
          e3.preventDefault();
          let r3 = c2.#_(t3.getData(`text`) || ``).replaceAll(s2, `
`);
          if (!r3) return;
          let i3 = window.getSelection();
          if (!i3.rangeCount) return;
          this.editorDiv.normalize(), i3.deleteFromDocument();
          let a3 = i3.getRangeAt(0);
          if (!r3.includes(`
`)) {
            a3.insertNode(document.createTextNode(r3)), this.editorDiv.normalize(), i3.collapseToStart();
            return;
          }
          let { startContainer: o3, startOffset: l3 } = a3, u3 = [], d3 = [];
          if (o3.nodeType === Node.TEXT_NODE) {
            let e4 = o3.parentElement;
            if (d3.push(o3.nodeValue.slice(l3).replaceAll(s2, ``)), e4 !== this.editorDiv) {
              let t4 = u3;
              for (let n4 of this.editorDiv.childNodes) {
                if (n4 === e4) {
                  t4 = d3;
                  continue;
                }
                t4.push(c2.#m(n4));
              }
            }
            u3.push(o3.nodeValue.slice(0, l3).replaceAll(s2, ``));
          } else if (o3 === this.editorDiv) {
            let e4 = u3, t4 = 0;
            for (let n4 of this.editorDiv.childNodes) t4++ === l3 && (e4 = d3), e4.push(c2.#m(n4));
          }
          this.#o = `${u3.join(`
`)}${r3}${d3.join(`
`)}`, this.#h();
          let f3 = new Range(), p3 = u3.reduce((e4, t4) => e4 + t4.length, 0);
          for (let { firstChild: e4 } of this.editorDiv.childNodes) if (e4.nodeType === Node.TEXT_NODE) {
            let t4 = e4.nodeValue.length;
            if (p3 <= t4) {
              f3.setStart(e4, p3), f3.setEnd(e4, p3);
              break;
            }
            p3 -= t4;
          }
          i3.removeAllRanges(), i3.addRange(f3);
        }
        #h() {
          if (this.editorDiv.replaceChildren(), this.#o) for (let e3 of this.#o.split(`
`)) {
            let t3 = document.createElement(`div`);
            t3.append(e3 ? document.createTextNode(e3) : document.createElement(`br`)), this.editorDiv.append(t3);
          }
        }
        #g() {
          return this.#o.replaceAll(`\xA0`, ` `);
        }
        static #_(e3) {
          return e3.replaceAll(` `, `\xA0`);
        }
        get contentDiv() {
          return this.editorDiv;
        }
        static deserialize(e3, t3, n3) {
          let i3 = null;
          if (e3 instanceof o2.FreeTextAnnotationElement) {
            let { data: { defaultAppearanceData: { fontSize: t4, fontColor: n4 }, rect: a4, rotation: o3, id: s3 }, textContent: c3, textPosition: l3, parent: { page: { pageNumber: u3 } } } = e3;
            if (!c3 || c3.length === 0) return null;
            i3 = e3 = {
              annotationType: r2.AnnotationEditorType.FREETEXT,
              color: Array.from(n4),
              fontSize: t4,
              value: c3.join(`
`),
              position: l3,
              pageIndex: u3 - 1,
              rect: a4.slice(0),
              rotation: o3,
              id: s3,
              deleted: false
            };
          }
          let a3 = super.deserialize(e3, t3, n3);
          return a3.#c = e3.fontSize, a3.#a = r2.Util.makeHexColor(...e3.color), a3.#o = c2.#_(e3.value), a3.annotationElementId = e3.id || null, a3.#l = i3, a3;
        }
        serialize(e3 = false) {
          if (this.isEmpty()) return null;
          if (this.deleted) return {
            pageIndex: this.pageIndex,
            id: this.annotationElementId,
            deleted: true
          };
          let t3 = c2._internalPadding * this.parentScale, n3 = this.getRect(t3, t3), a3 = i2.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.#a), o3 = {
            annotationType: r2.AnnotationEditorType.FREETEXT,
            color: a3,
            fontSize: this.#c,
            value: this.#g(),
            pageIndex: this.pageIndex,
            rect: n3,
            rotation: this.rotation,
            structTreeParentId: this._structTreeParentId
          };
          return e3 ? o3 : this.annotationElementId && !this.#v(o3) ? null : (o3.id = this.annotationElementId, o3);
        }
        #v(e3) {
          let { value: t3, fontSize: n3, color: r3, pageIndex: i3 } = this.#l;
          return this._hasBeenMoved || e3.value !== t3 || e3.fontSize !== n3 || e3.color.some((e4, t4) => e4 !== r3[t4]) || e3.pageIndex !== i3;
        }
        renderAnnotationElement(e3) {
          let t3 = super.renderAnnotationElement(e3);
          if (this.deleted) return t3;
          let { style: n3 } = t3;
          n3.fontSize = `calc(${this.#c}px * var(--scale-factor))`, n3.color = this.#a, t3.replaceChildren();
          for (let e4 of this.#o.split(`
`)) {
            let n4 = document.createElement(`div`);
            n4.append(e4 ? document.createTextNode(e4) : document.createElement(`br`)), t3.append(n4);
          }
          let r3 = c2._internalPadding * this.parentScale;
          return e3.updateEdited({
            rect: this.getRect(r3, r3)
          }), t3;
        }
        resetAnnotationElement(e3) {
          super.resetAnnotationElement(e3), e3.resetEdited();
        }
      }
      var l2 = n2(61), u2 = n2(259), d2 = n2(419);
      class f2 extends i2.AnnotationEditor {
        #e = null;
        #t = 0;
        #n;
        #r = null;
        #i = null;
        #a = null;
        #o = null;
        #s = 0;
        #c = null;
        #l = null;
        #u = null;
        #d = false;
        #f = this.#D.bind(this);
        #p = null;
        #m;
        #h = null;
        #g = ``;
        #_;
        #v = ``;
        static _defaultColor = null;
        static _defaultOpacity = 1;
        static _defaultThickness = 12;
        static _l10nPromise;
        static _type = `highlight`;
        static _editorType = r2.AnnotationEditorType.HIGHLIGHT;
        static _freeHighlightId = -1;
        static _freeHighlight = null;
        static _freeHighlightClipId = ``;
        static get _keyboardManager() {
          let e3 = f2.prototype;
          return (0, r2.shadow)(this, `_keyboardManager`, new a2.KeyboardManager([
            [
              [
                `ArrowLeft`,
                `mac+ArrowLeft`
              ],
              e3._moveCaret,
              {
                args: [
                  0
                ]
              }
            ],
            [
              [
                `ArrowRight`,
                `mac+ArrowRight`
              ],
              e3._moveCaret,
              {
                args: [
                  1
                ]
              }
            ],
            [
              [
                `ArrowUp`,
                `mac+ArrowUp`
              ],
              e3._moveCaret,
              {
                args: [
                  2
                ]
              }
            ],
            [
              [
                `ArrowDown`,
                `mac+ArrowDown`
              ],
              e3._moveCaret,
              {
                args: [
                  3
                ]
              }
            ]
          ]));
        }
        constructor(e3) {
          super({
            ...e3,
            name: `highlightEditor`
          }), this.color = e3.color || f2._defaultColor, this.#_ = e3.thickness || f2._defaultThickness, this.#m = e3.opacity || f2._defaultOpacity, this.#n = e3.boxes || null, this.#v = e3.methodOfCreation || ``, this.#g = e3.text || ``, this._isDraggable = false, e3.highlightId > -1 ? (this.#d = true, this.#b(e3), this.#T()) : (this.#e = e3.anchorNode, this.#t = e3.anchorOffset, this.#o = e3.focusNode, this.#s = e3.focusOffset, this.#y(), this.#T(), this.rotate(this.rotation));
        }
        get telemetryInitialData() {
          return {
            action: `added`,
            type: this.#d ? `free_highlight` : `highlight`,
            color: this._uiManager.highlightColorNames.get(this.color),
            thickness: this.#_,
            methodOfCreation: this.#v
          };
        }
        get telemetryFinalData() {
          return {
            type: `highlight`,
            color: this._uiManager.highlightColorNames.get(this.color)
          };
        }
        static computeTelemetryFinalData(e3) {
          return {
            numberOfColors: e3.get(`color`).size
          };
        }
        #y() {
          this.#l = new l2.Outliner(this.#n, 1e-3).getOutlines(), { x: this.x, y: this.y, width: this.width, height: this.height } = this.#l.box, this.#a = new l2.Outliner(this.#n, 25e-4, 1e-3, this._uiManager.direction === `ltr`).getOutlines();
          let { lastPoint: e3 } = this.#a.box;
          this.#p = [
            (e3[0] - this.x) / this.width,
            (e3[1] - this.y) / this.height
          ];
        }
        #b({ highlightOutlines: e3, highlightId: t3, clipPathId: n3 }) {
          if (this.#l = e3, this.#a = e3.getNewOutline(this.#_ / 2 + 1.5, 25e-4), t3 >= 0) this.#u = t3, this.#r = n3, this.parent.drawLayer.finalizeLine(t3, e3), this.#h = this.parent.drawLayer.highlightOutline(this.#a);
          else if (this.parent) {
            let t4 = this.parent.viewport.rotation;
            this.parent.drawLayer.updateLine(this.#u, e3), this.parent.drawLayer.updateBox(this.#u, f2.#E(this.#l.box, (t4 - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(this.#h, this.#a), this.parent.drawLayer.updateBox(this.#h, f2.#E(this.#a.box, t4));
          }
          let { x: r3, y: i3, width: a3, height: o3 } = e3.box;
          switch (this.rotation) {
            case 0:
              this.x = r3, this.y = i3, this.width = a3, this.height = o3;
              break;
            case 90: {
              let [e4, t4] = this.parentDimensions;
              this.x = i3, this.y = 1 - r3, this.width = a3 * t4 / e4, this.height = o3 * e4 / t4;
              break;
            }
            case 180:
              this.x = 1 - r3, this.y = 1 - i3, this.width = a3, this.height = o3;
              break;
            case 270: {
              let [e4, t4] = this.parentDimensions;
              this.x = 1 - i3, this.y = r3, this.width = a3 * t4 / e4, this.height = o3 * e4 / t4;
              break;
            }
          }
          let { lastPoint: s3 } = this.#a.box;
          this.#p = [
            (s3[0] - r3) / a3,
            (s3[1] - i3) / o3
          ];
        }
        static initialize(e3, t3) {
          i2.AnnotationEditor.initialize(e3, t3), f2._defaultColor ||= t3.highlightColors?.values().next().value || `#fff066`;
        }
        static updateDefaultParams(e3, t3) {
          switch (e3) {
            case r2.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
              f2._defaultColor = t3;
              break;
            case r2.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
              f2._defaultThickness = t3;
              break;
          }
        }
        translateInPage(e3, t3) {
        }
        get toolbarPosition() {
          return this.#p;
        }
        updateParams(e3, t3) {
          switch (e3) {
            case r2.AnnotationEditorParamsType.HIGHLIGHT_COLOR:
              this.#x(t3);
              break;
            case r2.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
              this.#S(t3);
              break;
          }
        }
        static get defaultPropertiesToUpdate() {
          return [
            [
              r2.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR,
              f2._defaultColor
            ],
            [
              r2.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS,
              f2._defaultThickness
            ]
          ];
        }
        get propertiesToUpdate() {
          return [
            [
              r2.AnnotationEditorParamsType.HIGHLIGHT_COLOR,
              this.color || f2._defaultColor
            ],
            [
              r2.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS,
              this.#_ || f2._defaultThickness
            ],
            [
              r2.AnnotationEditorParamsType.HIGHLIGHT_FREE,
              this.#d
            ]
          ];
        }
        #x(e3) {
          let t3 = (e4) => {
            this.color = e4, this.parent?.drawLayer.changeColor(this.#u, e4), this.#i?.updateColor(e4);
          }, n3 = this.color;
          this.addCommands({
            cmd: t3.bind(this, e3),
            undo: t3.bind(this, n3),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: true,
            type: r2.AnnotationEditorParamsType.HIGHLIGHT_COLOR,
            overwriteIfSameType: true,
            keepUndo: true
          }), this._reportTelemetry({
            action: `color_changed`,
            color: this._uiManager.highlightColorNames.get(e3)
          }, true);
        }
        #S(e3) {
          let t3 = this.#_, n3 = (e4) => {
            this.#_ = e4, this.#C(e4);
          };
          this.addCommands({
            cmd: n3.bind(this, e3),
            undo: n3.bind(this, t3),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: true,
            type: r2.AnnotationEditorParamsType.INK_THICKNESS,
            overwriteIfSameType: true,
            keepUndo: true
          }), this._reportTelemetry({
            action: `thickness_changed`,
            thickness: e3
          }, true);
        }
        async addEditToolbar() {
          let e3 = await super.addEditToolbar();
          return e3 ? (this._uiManager.highlightColors && (this.#i = new u2.ColorPicker({
            editor: this
          }), e3.addColorPicker(this.#i)), e3) : null;
        }
        disableEditing() {
          super.disableEditing(), this.div.classList.toggle(`disabled`, true);
        }
        enableEditing() {
          super.enableEditing(), this.div.classList.toggle(`disabled`, false);
        }
        fixAndSetPosition() {
          return super.fixAndSetPosition(this.#k());
        }
        getBaseTranslation() {
          return [
            0,
            0
          ];
        }
        getRect(e3, t3) {
          return super.getRect(e3, t3, this.#k());
        }
        onceAdded() {
          this.parent.addUndoableEditor(this), this.div.focus();
        }
        remove() {
          this.#w(), this._reportTelemetry({
            action: `deleted`
          }), super.remove();
        }
        rebuild() {
          this.parent && (super.rebuild(), this.div !== null && (this.#T(), this.isAttachedToDOM || this.parent.add(this)));
        }
        setParent(e3) {
          let t3 = false;
          this.parent && !e3 ? this.#w() : e3 && (this.#T(e3), t3 = !this.parent && this.div?.classList.contains(`selectedEditor`)), super.setParent(e3), this.show(this._isVisible), t3 && this.select();
        }
        #C(e3) {
          if (!this.#d) return;
          this.#b({
            highlightOutlines: this.#l.getNewOutline(e3 / 2)
          }), this.fixAndSetPosition();
          let [t3, n3] = this.parentDimensions;
          this.setDims(this.width * t3, this.height * n3);
        }
        #w() {
          this.#u === null || !this.parent || (this.parent.drawLayer.remove(this.#u), this.#u = null, this.parent.drawLayer.remove(this.#h), this.#h = null);
        }
        #T(e3 = this.parent) {
          this.#u === null && ({ id: this.#u, clipPathId: this.#r } = e3.drawLayer.highlight(this.#l, this.color, this.#m), this.#h = e3.drawLayer.highlightOutline(this.#a), this.#c && (this.#c.style.clipPath = this.#r));
        }
        static #E({ x: e3, y: t3, width: n3, height: r3 }, i3) {
          switch (i3) {
            case 90:
              return {
                x: 1 - t3 - r3,
                y: e3,
                width: r3,
                height: n3
              };
            case 180:
              return {
                x: 1 - e3 - n3,
                y: 1 - t3 - r3,
                width: n3,
                height: r3
              };
            case 270:
              return {
                x: t3,
                y: 1 - e3 - n3,
                width: r3,
                height: n3
              };
          }
          return {
            x: e3,
            y: t3,
            width: n3,
            height: r3
          };
        }
        rotate(e3) {
          let { drawLayer: t3 } = this.parent, n3;
          this.#d ? (e3 = (e3 - this.rotation + 360) % 360, n3 = f2.#E(this.#l.box, e3)) : n3 = f2.#E(this, e3), t3.rotate(this.#u, e3), t3.rotate(this.#h, e3), t3.updateBox(this.#u, n3), t3.updateBox(this.#h, f2.#E(this.#a.box, e3));
        }
        render() {
          if (this.div) return this.div;
          let e3 = super.render();
          this.#g && (e3.setAttribute(`aria-label`, this.#g), e3.setAttribute(`role`, `mark`)), this.#d ? e3.classList.add(`free`) : this.div.addEventListener(`keydown`, this.#f);
          let t3 = this.#c = document.createElement(`div`);
          e3.append(t3), t3.setAttribute(`aria-hidden`, `true`), t3.className = `internal`, t3.style.clipPath = this.#r;
          let [n3, r3] = this.parentDimensions;
          return this.setDims(this.width * n3, this.height * r3), (0, a2.bindEvents)(this, this.#c, [
            `pointerover`,
            `pointerleave`
          ]), this.enableEditing(), e3;
        }
        pointerover() {
          this.parent.drawLayer.addClass(this.#h, `hovered`);
        }
        pointerleave() {
          this.parent.drawLayer.removeClass(this.#h, `hovered`);
        }
        #D(e3) {
          f2._keyboardManager.exec(this, e3);
        }
        _moveCaret(e3) {
          switch (this.parent.unselect(this), e3) {
            case 0:
            case 2:
              this.#O(true);
              break;
            case 1:
            case 3:
              this.#O(false);
              break;
          }
        }
        #O(e3) {
          if (!this.#e) return;
          let t3 = window.getSelection();
          e3 ? t3.setPosition(this.#e, this.#t) : t3.setPosition(this.#o, this.#s);
        }
        select() {
          super.select(), this.#h && (this.parent?.drawLayer.removeClass(this.#h, `hovered`), this.parent?.drawLayer.addClass(this.#h, `selected`));
        }
        unselect() {
          super.unselect(), this.#h && (this.parent?.drawLayer.removeClass(this.#h, `selected`), this.#d || this.#O(false));
        }
        get _mustFixPosition() {
          return !this.#d;
        }
        show(e3 = this._isVisible) {
          super.show(e3), this.parent && (this.parent.drawLayer.show(this.#u, e3), this.parent.drawLayer.show(this.#h, e3));
        }
        #k() {
          return this.#d ? this.rotation : 0;
        }
        #A() {
          if (this.#d) return null;
          let [e3, t3] = this.pageDimensions, n3 = this.#n, r3 = Array(n3.length * 8), i3 = 0;
          for (let { x: a3, y: o3, width: s3, height: c3 } of n3) {
            let n4 = a3 * e3, l3 = (1 - o3 - c3) * t3;
            r3[i3] = r3[i3 + 4] = n4, r3[i3 + 1] = r3[i3 + 3] = l3, r3[i3 + 2] = r3[i3 + 6] = n4 + s3 * e3, r3[i3 + 5] = r3[i3 + 7] = l3 + c3 * t3, i3 += 8;
          }
          return r3;
        }
        #j(e3) {
          return this.#l.serialize(e3, this.#k());
        }
        static startHighlighting(e3, t3, { target: n3, x: r3, y: i3 }) {
          let { x: a3, y: o3, width: s3, height: c3 } = n3.getBoundingClientRect(), u3 = (t4) => {
            this.#M(e3, t4);
          }, f3 = {
            capture: true,
            passive: false
          }, p3 = (e4) => {
            e4.preventDefault(), e4.stopPropagation();
          }, m3 = (t4) => {
            n3.removeEventListener(`pointermove`, u3), window.removeEventListener(`blur`, m3), window.removeEventListener(`pointerup`, m3), window.removeEventListener(`pointerdown`, p3, f3), window.removeEventListener(`contextmenu`, d2.noContextMenu), this.#N(e3, t4);
          };
          window.addEventListener(`blur`, m3), window.addEventListener(`pointerup`, m3), window.addEventListener(`pointerdown`, p3, f3), window.addEventListener(`contextmenu`, d2.noContextMenu), n3.addEventListener(`pointermove`, u3), this._freeHighlight = new l2.FreeOutliner({
            x: r3,
            y: i3
          }, [
            a3,
            o3,
            s3,
            c3
          ], e3.scale, this._defaultThickness / 2, t3, 1e-3), { id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = e3.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, true);
        }
        static #M(e3, t3) {
          this._freeHighlight.add(t3) && e3.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
        }
        static #N(e3, t3) {
          this._freeHighlight.isEmpty() ? e3.drawLayer.removeFreeHighlight(this._freeHighlightId) : e3.createAndAddNewEditor(t3, false, {
            highlightId: this._freeHighlightId,
            highlightOutlines: this._freeHighlight.getOutlines(),
            clipPathId: this._freeHighlightClipId,
            methodOfCreation: `main_toolbar`
          }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = ``;
        }
        static deserialize(e3, t3, n3) {
          let i3 = super.deserialize(e3, t3, n3), { rect: [a3, o3, s3, c3], color: l3, quadPoints: u3 } = e3;
          i3.color = r2.Util.makeHexColor(...l3), i3.#m = e3.opacity;
          let [d3, f3] = i3.pageDimensions;
          i3.width = (s3 - a3) / d3, i3.height = (c3 - o3) / f3;
          let p3 = i3.#n = [];
          for (let e4 = 0; e4 < u3.length; e4 += 8) p3.push({
            x: (u3[4] - s3) / d3,
            y: (c3 - (1 - u3[e4 + 5])) / f3,
            width: (u3[e4 + 2] - u3[e4]) / d3,
            height: (u3[e4 + 5] - u3[e4 + 1]) / f3
          });
          return i3.#y(), i3;
        }
        serialize(e3 = false) {
          if (this.isEmpty() || e3) return null;
          let t3 = this.getRect(0, 0), n3 = i2.AnnotationEditor._colorManager.convert(this.color);
          return {
            annotationType: r2.AnnotationEditorType.HIGHLIGHT,
            color: n3,
            opacity: this.#m,
            thickness: this.#_,
            quadPoints: this.#A(),
            outlines: this.#j(t3),
            pageIndex: this.pageIndex,
            rect: t3,
            rotation: this.#k(),
            structTreeParentId: this._structTreeParentId
          };
        }
        static canCreateNewEmptyEditor() {
          return false;
        }
      }
      class p2 extends i2.AnnotationEditor {
        #e = 0;
        #t = 0;
        #n = this.canvasPointermove.bind(this);
        #r = this.canvasPointerleave.bind(this);
        #i = this.canvasPointerup.bind(this);
        #a = this.canvasPointerdown.bind(this);
        #o = null;
        #s = new Path2D();
        #c = false;
        #l = false;
        #u = false;
        #d = null;
        #f = 0;
        #p = 0;
        #m = null;
        static _defaultColor = null;
        static _defaultOpacity = 1;
        static _defaultThickness = 1;
        static _type = `ink`;
        static _editorType = r2.AnnotationEditorType.INK;
        constructor(e3) {
          super({
            ...e3,
            name: `inkEditor`
          }), this.color = e3.color || null, this.thickness = e3.thickness || null, this.opacity = e3.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = true;
        }
        static initialize(e3, t3) {
          i2.AnnotationEditor.initialize(e3, t3);
        }
        static updateDefaultParams(e3, t3) {
          switch (e3) {
            case r2.AnnotationEditorParamsType.INK_THICKNESS:
              p2._defaultThickness = t3;
              break;
            case r2.AnnotationEditorParamsType.INK_COLOR:
              p2._defaultColor = t3;
              break;
            case r2.AnnotationEditorParamsType.INK_OPACITY:
              p2._defaultOpacity = t3 / 100;
              break;
          }
        }
        updateParams(e3, t3) {
          switch (e3) {
            case r2.AnnotationEditorParamsType.INK_THICKNESS:
              this.#h(t3);
              break;
            case r2.AnnotationEditorParamsType.INK_COLOR:
              this.#g(t3);
              break;
            case r2.AnnotationEditorParamsType.INK_OPACITY:
              this.#_(t3);
              break;
          }
        }
        static get defaultPropertiesToUpdate() {
          return [
            [
              r2.AnnotationEditorParamsType.INK_THICKNESS,
              p2._defaultThickness
            ],
            [
              r2.AnnotationEditorParamsType.INK_COLOR,
              p2._defaultColor || i2.AnnotationEditor._defaultLineColor
            ],
            [
              r2.AnnotationEditorParamsType.INK_OPACITY,
              Math.round(p2._defaultOpacity * 100)
            ]
          ];
        }
        get propertiesToUpdate() {
          return [
            [
              r2.AnnotationEditorParamsType.INK_THICKNESS,
              this.thickness || p2._defaultThickness
            ],
            [
              r2.AnnotationEditorParamsType.INK_COLOR,
              this.color || p2._defaultColor || i2.AnnotationEditor._defaultLineColor
            ],
            [
              r2.AnnotationEditorParamsType.INK_OPACITY,
              Math.round(100 * (this.opacity ?? p2._defaultOpacity))
            ]
          ];
        }
        #h(e3) {
          let t3 = (e4) => {
            this.thickness = e4, this.#B();
          }, n3 = this.thickness;
          this.addCommands({
            cmd: t3.bind(this, e3),
            undo: t3.bind(this, n3),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: true,
            type: r2.AnnotationEditorParamsType.INK_THICKNESS,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        #g(e3) {
          let t3 = (e4) => {
            this.color = e4, this.#D();
          }, n3 = this.color;
          this.addCommands({
            cmd: t3.bind(this, e3),
            undo: t3.bind(this, n3),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: true,
            type: r2.AnnotationEditorParamsType.INK_COLOR,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        #_(e3) {
          let t3 = (e4) => {
            this.opacity = e4, this.#D();
          };
          e3 /= 100;
          let n3 = this.opacity;
          this.addCommands({
            cmd: t3.bind(this, e3),
            undo: t3.bind(this, n3),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: true,
            type: r2.AnnotationEditorParamsType.INK_OPACITY,
            overwriteIfSameType: true,
            keepUndo: true
          });
        }
        rebuild() {
          this.parent && (super.rebuild(), this.div !== null && (this.canvas || (this.#k(), this.#A()), this.isAttachedToDOM || (this.parent.add(this), this.#j()), this.#B()));
        }
        remove() {
          this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, this.#o &&= (clearTimeout(this.#o), null), this.#d.disconnect(), this.#d = null, super.remove());
        }
        setParent(e3) {
          !this.parent && e3 ? this._uiManager.removeShouldRescale(this) : this.parent && e3 === null && this._uiManager.addShouldRescale(this), super.setParent(e3);
        }
        onScaleChanging() {
          let [e3, t3] = this.parentDimensions, n3 = this.width * e3, r3 = this.height * t3;
          this.setDimensions(n3, r3);
        }
        enableEditMode() {
          this.#c || this.canvas === null || (super.enableEditMode(), this._isDraggable = false, this.canvas.addEventListener(`pointerdown`, this.#a));
        }
        disableEditMode() {
          !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove(`editing`), this.canvas.removeEventListener(`pointerdown`, this.#a));
        }
        onceAdded() {
          this._isDraggable = !this.isEmpty();
        }
        isEmpty() {
          return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
        }
        #v() {
          let { parentRotation: e3, parentDimensions: [t3, n3] } = this;
          switch (e3) {
            case 90:
              return [
                0,
                n3,
                n3,
                t3
              ];
            case 180:
              return [
                t3,
                n3,
                t3,
                n3
              ];
            case 270:
              return [
                t3,
                0,
                n3,
                t3
              ];
            default:
              return [
                0,
                0,
                t3,
                n3
              ];
          }
        }
        #y() {
          let { ctx: e3, color: t3, opacity: n3, thickness: r3, parentScale: i3, scaleFactor: o3 } = this;
          e3.lineWidth = r3 * i3 / o3, e3.lineCap = `round`, e3.lineJoin = `round`, e3.miterLimit = 10, e3.strokeStyle = `${t3}${(0, a2.opacityToHex)(n3)}`;
        }
        #b(e3, t3) {
          this.canvas.addEventListener(`contextmenu`, d2.noContextMenu), this.canvas.addEventListener(`pointerleave`, this.#r), this.canvas.addEventListener(`pointermove`, this.#n), this.canvas.addEventListener(`pointerup`, this.#i), this.canvas.removeEventListener(`pointerdown`, this.#a), this.isEditing = true, this.#u || (this.#u = true, this.#j(), this.thickness ||= p2._defaultThickness, this.color ||= p2._defaultColor || i2.AnnotationEditor._defaultLineColor, this.opacity ??= p2._defaultOpacity), this.currentPath.push([
            e3,
            t3
          ]), this.#l = false, this.#y(), this.#m = () => {
            this.#w(), this.#m && window.requestAnimationFrame(this.#m);
          }, window.requestAnimationFrame(this.#m);
        }
        #x(e3, t3) {
          let [n3, r3] = this.currentPath.at(-1);
          if (this.currentPath.length > 1 && e3 === n3 && t3 === r3) return;
          let i3 = this.currentPath, a3 = this.#s;
          if (i3.push([
            e3,
            t3
          ]), this.#l = true, i3.length <= 2) {
            a3.moveTo(...i3[0]), a3.lineTo(e3, t3);
            return;
          }
          i3.length === 3 && (this.#s = a3 = new Path2D(), a3.moveTo(...i3[0])), this.#T(a3, ...i3.at(-3), ...i3.at(-2), e3, t3);
        }
        #S() {
          if (this.currentPath.length === 0) return;
          let e3 = this.currentPath.at(-1);
          this.#s.lineTo(...e3);
        }
        #C(e3, t3) {
          this.#m = null, e3 = Math.min(Math.max(e3, 0), this.canvas.width), t3 = Math.min(Math.max(t3, 0), this.canvas.height), this.#x(e3, t3), this.#S();
          let n3;
          if (this.currentPath.length !== 1) n3 = this.#E();
          else {
            let r4 = [
              e3,
              t3
            ];
            n3 = [
              [
                r4,
                r4.slice(),
                r4.slice(),
                r4
              ]
            ];
          }
          let r3 = this.#s, i3 = this.currentPath;
          this.currentPath = [], this.#s = new Path2D(), this.addCommands({
            cmd: () => {
              this.allRawPaths.push(i3), this.paths.push(n3), this.bezierPath2D.push(r3), this._uiManager.rebuild(this);
            },
            undo: () => {
              this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (this.#k(), this.#A()), this.#B());
            },
            mustExec: true
          });
        }
        #w() {
          if (!this.#l) return;
          this.#l = false;
          let e3 = Math.ceil(this.thickness * this.parentScale), t3 = this.currentPath.slice(-3), n3 = t3.map((e4) => e4[0]), r3 = t3.map((e4) => e4[1]);
          Math.min(...n3) - e3, Math.max(...n3) + e3, Math.min(...r3) - e3, Math.max(...r3) + e3;
          let { ctx: i3 } = this;
          i3.save(), i3.clearRect(0, 0, this.canvas.width, this.canvas.height);
          for (let e4 of this.bezierPath2D) i3.stroke(e4);
          i3.stroke(this.#s), i3.restore();
        }
        #T(e3, t3, n3, r3, i3, a3, o3) {
          let s3 = (t3 + r3) / 2, c3 = (n3 + i3) / 2, l3 = (r3 + a3) / 2, u3 = (i3 + o3) / 2;
          e3.bezierCurveTo(s3 + 2 * (r3 - s3) / 3, c3 + 2 * (i3 - c3) / 3, l3 + 2 * (r3 - l3) / 3, u3 + 2 * (i3 - u3) / 3, l3, u3);
        }
        #E() {
          let e3 = this.currentPath;
          if (e3.length <= 2) return [
            [
              e3[0],
              e3[0],
              e3.at(-1),
              e3.at(-1)
            ]
          ];
          let t3 = [], n3, [r3, i3] = e3[0];
          for (n3 = 1; n3 < e3.length - 2; n3++) {
            let [a4, o4] = e3[n3], [s4, c4] = e3[n3 + 1], l4 = (a4 + s4) / 2, u4 = (o4 + c4) / 2, d3 = [
              r3 + 2 * (a4 - r3) / 3,
              i3 + 2 * (o4 - i3) / 3
            ], f3 = [
              l4 + 2 * (a4 - l4) / 3,
              u4 + 2 * (o4 - u4) / 3
            ];
            t3.push([
              [
                r3,
                i3
              ],
              d3,
              f3,
              [
                l4,
                u4
              ]
            ]), [r3, i3] = [
              l4,
              u4
            ];
          }
          let [a3, o3] = e3[n3], [s3, c3] = e3[n3 + 1], l3 = [
            r3 + 2 * (a3 - r3) / 3,
            i3 + 2 * (o3 - i3) / 3
          ], u3 = [
            s3 + 2 * (a3 - s3) / 3,
            c3 + 2 * (o3 - c3) / 3
          ];
          return t3.push([
            [
              r3,
              i3
            ],
            l3,
            u3,
            [
              s3,
              c3
            ]
          ]), t3;
        }
        #D() {
          if (this.isEmpty()) {
            this.#N();
            return;
          }
          this.#y();
          let { canvas: e3, ctx: t3 } = this;
          t3.setTransform(1, 0, 0, 1, 0, 0), t3.clearRect(0, 0, e3.width, e3.height), this.#N();
          for (let e4 of this.bezierPath2D) t3.stroke(e4);
        }
        commit() {
          this.#c || (super.commit(), this.isEditing = false, this.disableEditMode(), this.setInForeground(), this.#c = true, this.div.classList.add(`disabled`), this.#B(true), this.select(), this.parent.addInkEditorIfNeeded(true), this.moveInDOM(), this.div.focus({
            preventScroll: true
          }));
        }
        focusin(e3) {
          this._focusEventsAllowed && (super.focusin(e3), this.enableEditMode());
        }
        canvasPointerdown(e3) {
          e3.button !== 0 || !this.isInEditMode() || this.#c || (this.setInForeground(), e3.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
            preventScroll: true
          }), this.#b(e3.offsetX, e3.offsetY));
        }
        canvasPointermove(e3) {
          e3.preventDefault(), this.#x(e3.offsetX, e3.offsetY);
        }
        canvasPointerup(e3) {
          e3.preventDefault(), this.#O(e3);
        }
        canvasPointerleave(e3) {
          this.#O(e3);
        }
        #O(e3) {
          this.canvas.removeEventListener(`pointerleave`, this.#r), this.canvas.removeEventListener(`pointermove`, this.#n), this.canvas.removeEventListener(`pointerup`, this.#i), this.canvas.addEventListener(`pointerdown`, this.#a), this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => {
            this.#o = null, this.canvas.removeEventListener(`contextmenu`, d2.noContextMenu);
          }, 10), this.#C(e3.offsetX, e3.offsetY), this.addToAnnotationStorage(), this.setInBackground();
        }
        #k() {
          this.canvas = document.createElement(`canvas`), this.canvas.width = this.canvas.height = 0, this.canvas.className = `inkEditorCanvas`, this.canvas.setAttribute(`data-l10n-id`, `pdfjs-ink-canvas`), this.div.append(this.canvas), this.ctx = this.canvas.getContext(`2d`);
        }
        #A() {
          this.#d = new ResizeObserver((e3) => {
            let t3 = e3[0].contentRect;
            t3.width && t3.height && this.setDimensions(t3.width, t3.height);
          }), this.#d.observe(this.div);
        }
        get isResizable() {
          return !this.isEmpty() && this.#c;
        }
        render() {
          if (this.div) return this.div;
          let e3, t3;
          this.width && (e3 = this.x, t3 = this.y), super.render(), this.div.setAttribute(`data-l10n-id`, `pdfjs-ink`);
          let [n3, r3, i3, a3] = this.#v();
          if (this.setAt(n3, r3, 0, 0), this.setDims(i3, a3), this.#k(), this.width) {
            let [n4, r4] = this.parentDimensions;
            this.setAspectRatio(this.width * n4, this.height * r4), this.setAt(e3 * n4, t3 * r4, this.width * n4, this.height * r4), this.#u = true, this.#j(), this.setDims(this.width * n4, this.height * r4), this.#D(), this.div.classList.add(`disabled`);
          } else this.div.classList.add(`editing`), this.enableEditMode();
          return this.#A(), this.div;
        }
        #j() {
          if (!this.#u) return;
          let [e3, t3] = this.parentDimensions;
          this.canvas.width = Math.ceil(this.width * e3), this.canvas.height = Math.ceil(this.height * t3), this.#N();
        }
        setDimensions(e3, t3) {
          let n3 = Math.round(e3), r3 = Math.round(t3);
          if (this.#f === n3 && this.#p === r3) return;
          this.#f = n3, this.#p = r3, this.canvas.style.visibility = `hidden`;
          let [i3, a3] = this.parentDimensions;
          this.width = e3 / i3, this.height = t3 / a3, this.fixAndSetPosition(), this.#c && this.#M(e3, t3), this.#j(), this.#D(), this.canvas.style.visibility = `visible`, this.fixDims();
        }
        #M(e3, t3) {
          let n3 = this.#z(), r3 = (e3 - n3) / this.#t, i3 = (t3 - n3) / this.#e;
          this.scaleFactor = Math.min(r3, i3);
        }
        #N() {
          let e3 = this.#z() / 2;
          this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + e3, this.translationY * this.scaleFactor + e3);
        }
        static #P(e3) {
          let t3 = new Path2D();
          for (let n3 = 0, r3 = e3.length; n3 < r3; n3++) {
            let [r4, i3, a3, o3] = e3[n3];
            n3 === 0 && t3.moveTo(...r4), t3.bezierCurveTo(i3[0], i3[1], a3[0], a3[1], o3[0], o3[1]);
          }
          return t3;
        }
        static #F(e3, t3, n3) {
          let [r3, i3, a3, o3] = t3;
          switch (n3) {
            case 0:
              for (let t4 = 0, n4 = e3.length; t4 < n4; t4 += 2) e3[t4] += r3, e3[t4 + 1] = o3 - e3[t4 + 1];
              break;
            case 90:
              for (let t4 = 0, n4 = e3.length; t4 < n4; t4 += 2) {
                let n5 = e3[t4];
                e3[t4] = e3[t4 + 1] + r3, e3[t4 + 1] = n5 + i3;
              }
              break;
            case 180:
              for (let t4 = 0, n4 = e3.length; t4 < n4; t4 += 2) e3[t4] = a3 - e3[t4], e3[t4 + 1] += i3;
              break;
            case 270:
              for (let t4 = 0, n4 = e3.length; t4 < n4; t4 += 2) {
                let n5 = e3[t4];
                e3[t4] = a3 - e3[t4 + 1], e3[t4 + 1] = o3 - n5;
              }
              break;
            default:
              throw Error(`Invalid rotation`);
          }
          return e3;
        }
        static #I(e3, t3, n3) {
          let [r3, i3, a3, o3] = t3;
          switch (n3) {
            case 0:
              for (let t4 = 0, n4 = e3.length; t4 < n4; t4 += 2) e3[t4] -= r3, e3[t4 + 1] = o3 - e3[t4 + 1];
              break;
            case 90:
              for (let t4 = 0, n4 = e3.length; t4 < n4; t4 += 2) {
                let n5 = e3[t4];
                e3[t4] = e3[t4 + 1] - i3, e3[t4 + 1] = n5 - r3;
              }
              break;
            case 180:
              for (let t4 = 0, n4 = e3.length; t4 < n4; t4 += 2) e3[t4] = a3 - e3[t4], e3[t4 + 1] -= i3;
              break;
            case 270:
              for (let t4 = 0, n4 = e3.length; t4 < n4; t4 += 2) {
                let n5 = e3[t4];
                e3[t4] = o3 - e3[t4 + 1], e3[t4 + 1] = a3 - n5;
              }
              break;
            default:
              throw Error(`Invalid rotation`);
          }
          return e3;
        }
        #L(e3, t3, n3, r3) {
          let i3 = [], a3 = this.thickness / 2, o3 = e3 * t3 + a3, s3 = e3 * n3 + a3;
          for (let t4 of this.paths) {
            let n4 = [], a4 = [];
            for (let r4 = 0, i4 = t4.length; r4 < i4; r4++) {
              let [c3, l3, u3, d3] = t4[r4];
              if (c3[0] === d3[0] && c3[1] === d3[1] && i4 === 1) {
                let t5 = e3 * c3[0] + o3, r5 = e3 * c3[1] + s3;
                n4.push(t5, r5), a4.push(t5, r5);
                break;
              }
              let f3 = e3 * c3[0] + o3, p3 = e3 * c3[1] + s3, m3 = e3 * l3[0] + o3, h3 = e3 * l3[1] + s3, g2 = e3 * u3[0] + o3, _2 = e3 * u3[1] + s3, v2 = e3 * d3[0] + o3, y2 = e3 * d3[1] + s3;
              r4 === 0 && (n4.push(f3, p3), a4.push(f3, p3)), n4.push(m3, h3, g2, _2, v2, y2), a4.push(m3, h3), r4 === i4 - 1 && a4.push(v2, y2);
            }
            i3.push({
              bezier: p2.#F(n4, r3, this.rotation),
              points: p2.#F(a4, r3, this.rotation)
            });
          }
          return i3;
        }
        #R() {
          let e3 = 1 / 0, t3 = -1 / 0, n3 = 1 / 0, i3 = -1 / 0;
          for (let a3 of this.paths) for (let [o3, s3, c3, l3] of a3) {
            let a4 = r2.Util.bezierBoundingBox(...o3, ...s3, ...c3, ...l3);
            e3 = Math.min(e3, a4[0]), n3 = Math.min(n3, a4[1]), t3 = Math.max(t3, a4[2]), i3 = Math.max(i3, a4[3]);
          }
          return [
            e3,
            n3,
            t3,
            i3
          ];
        }
        #z() {
          return this.#c ? Math.ceil(this.thickness * this.parentScale) : 0;
        }
        #B(e3 = false) {
          if (this.isEmpty()) return;
          if (!this.#c) {
            this.#D();
            return;
          }
          let t3 = this.#R(), n3 = this.#z();
          this.#t = Math.max(i2.AnnotationEditor.MIN_SIZE, t3[2] - t3[0]), this.#e = Math.max(i2.AnnotationEditor.MIN_SIZE, t3[3] - t3[1]);
          let r3 = Math.ceil(n3 + this.#t * this.scaleFactor), a3 = Math.ceil(n3 + this.#e * this.scaleFactor), [o3, s3] = this.parentDimensions;
          this.width = r3 / o3, this.height = a3 / s3, this.setAspectRatio(r3, a3);
          let c3 = this.translationX, l3 = this.translationY;
          this.translationX = -t3[0], this.translationY = -t3[1], this.#j(), this.#D(), this.#f = r3, this.#p = a3, this.setDims(r3, a3);
          let u3 = e3 ? n3 / this.scaleFactor / 2 : 0;
          this.translate(c3 - this.translationX - u3, l3 - this.translationY - u3);
        }
        static deserialize(e3, t3, n3) {
          if (e3 instanceof o2.InkAnnotationElement) return null;
          let a3 = super.deserialize(e3, t3, n3);
          a3.thickness = e3.thickness, a3.color = r2.Util.makeHexColor(...e3.color), a3.opacity = e3.opacity;
          let [s3, c3] = a3.pageDimensions, l3 = a3.width * s3, u3 = a3.height * c3, d3 = a3.parentScale, f3 = e3.thickness / 2;
          a3.#c = true, a3.#f = Math.round(l3), a3.#p = Math.round(u3);
          let { paths: m3, rect: h3, rotation: g2 } = e3;
          for (let { bezier: e4 } of m3) {
            e4 = p2.#I(e4, h3, g2);
            let t4 = [];
            a3.paths.push(t4);
            let n4 = d3 * (e4[0] - f3), r3 = d3 * (e4[1] - f3);
            for (let i4 = 2, a4 = e4.length; i4 < a4; i4 += 6) {
              let a5 = d3 * (e4[i4] - f3), o3 = d3 * (e4[i4 + 1] - f3), s4 = d3 * (e4[i4 + 2] - f3), c4 = d3 * (e4[i4 + 3] - f3), l4 = d3 * (e4[i4 + 4] - f3), u4 = d3 * (e4[i4 + 5] - f3);
              t4.push([
                [
                  n4,
                  r3
                ],
                [
                  a5,
                  o3
                ],
                [
                  s4,
                  c4
                ],
                [
                  l4,
                  u4
                ]
              ]), n4 = l4, r3 = u4;
            }
            let i3 = this.#P(t4);
            a3.bezierPath2D.push(i3);
          }
          let _2 = a3.#R();
          return a3.#t = Math.max(i2.AnnotationEditor.MIN_SIZE, _2[2] - _2[0]), a3.#e = Math.max(i2.AnnotationEditor.MIN_SIZE, _2[3] - _2[1]), a3.#M(l3, u3), a3;
        }
        serialize() {
          if (this.isEmpty()) return null;
          let e3 = this.getRect(0, 0), t3 = i2.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
          return {
            annotationType: r2.AnnotationEditorType.INK,
            color: t3,
            thickness: this.thickness,
            opacity: this.opacity,
            paths: this.#L(this.scaleFactor / this.parentScale, this.translationX, this.translationY, e3),
            pageIndex: this.pageIndex,
            rect: e3,
            rotation: this.rotation,
            structTreeParentId: this._structTreeParentId
          };
        }
      }
      class m2 extends i2.AnnotationEditor {
        #e = null;
        #t = null;
        #n = null;
        #r = null;
        #i = null;
        #a = ``;
        #o = null;
        #s = null;
        #c = null;
        #l = false;
        #u = false;
        static _type = `stamp`;
        static _editorType = r2.AnnotationEditorType.STAMP;
        constructor(e3) {
          super({
            ...e3,
            name: `stampEditor`
          }), this.#r = e3.bitmapUrl, this.#i = e3.bitmapFile;
        }
        static initialize(e3, t3) {
          i2.AnnotationEditor.initialize(e3, t3);
        }
        static get supportedTypes() {
          return (0, r2.shadow)(this, `supportedTypes`, [
            `apng`,
            `avif`,
            `bmp`,
            `gif`,
            `jpeg`,
            `png`,
            `svg+xml`,
            `webp`,
            `x-icon`
          ].map((e3) => `image/${e3}`));
        }
        static get supportedTypesStr() {
          return (0, r2.shadow)(this, `supportedTypesStr`, this.supportedTypes.join(`,`));
        }
        static isHandlingMimeForPasting(e3) {
          return this.supportedTypes.includes(e3);
        }
        static paste(e3, t3) {
          t3.pasteEditor(r2.AnnotationEditorType.STAMP, {
            bitmapFile: e3.getAsFile()
          });
        }
        #d(e3, t3 = false) {
          if (!e3) {
            this.remove();
            return;
          }
          this.#e = e3.bitmap, t3 || (this.#t = e3.id, this.#l = e3.isSvg), e3.file && (this.#a = e3.file.name), this.#m();
        }
        #f() {
          this.#n = null, this._uiManager.enableWaiting(false), this.#o && this.div.focus();
        }
        #p() {
          if (this.#t) {
            this._uiManager.enableWaiting(true), this._uiManager.imageManager.getFromId(this.#t).then((e4) => this.#d(e4, true)).finally(() => this.#f());
            return;
          }
          if (this.#r) {
            let e4 = this.#r;
            this.#r = null, this._uiManager.enableWaiting(true), this.#n = this._uiManager.imageManager.getFromUrl(e4).then((e5) => this.#d(e5)).finally(() => this.#f());
            return;
          }
          if (this.#i) {
            let e4 = this.#i;
            this.#i = null, this._uiManager.enableWaiting(true), this.#n = this._uiManager.imageManager.getFromFile(e4).then((e5) => this.#d(e5)).finally(() => this.#f());
            return;
          }
          let e3 = document.createElement(`input`);
          e3.type = `file`, e3.accept = m2.supportedTypesStr, this.#n = new Promise((t3) => {
            e3.addEventListener(`change`, async () => {
              if (!e3.files || e3.files.length === 0) this.remove();
              else {
                this._uiManager.enableWaiting(true);
                let t4 = await this._uiManager.imageManager.getFromFile(e3.files[0]);
                this.#d(t4);
              }
              t3();
            }), e3.addEventListener(`cancel`, () => {
              this.remove(), t3();
            });
          }).finally(() => this.#f()), e3.click();
        }
        remove() {
          this.#t && (this.#e = null, this._uiManager.imageManager.deleteId(this.#t), this.#o?.remove(), this.#o = null, this.#s?.disconnect(), this.#s = null, this.#c &&= (clearTimeout(this.#c), null)), super.remove();
        }
        rebuild() {
          if (!this.parent) {
            this.#t && this.#p();
            return;
          }
          super.rebuild(), this.div !== null && (this.#t && this.#o === null && this.#p(), this.isAttachedToDOM || this.parent.add(this));
        }
        onceAdded() {
          this._isDraggable = true, this.div.focus();
        }
        isEmpty() {
          return !(this.#n || this.#e || this.#r || this.#i || this.#t);
        }
        get isResizable() {
          return true;
        }
        render() {
          if (this.div) return this.div;
          let e3, t3;
          if (this.width && (e3 = this.x, t3 = this.y), super.render(), this.div.hidden = true, this.addAltTextButton(), this.#e ? this.#m() : this.#p(), this.width) {
            let [n3, r3] = this.parentDimensions;
            this.setAt(e3 * n3, t3 * r3, this.width * n3, this.height * r3);
          }
          return this.div;
        }
        #m() {
          let { div: e3 } = this, { width: t3, height: n3 } = this.#e, [r3, i3] = this.pageDimensions, a3 = 0.75;
          if (this.width) t3 = this.width * r3, n3 = this.height * i3;
          else if (t3 > a3 * r3 || n3 > a3 * i3) {
            let e4 = Math.min(a3 * r3 / t3, a3 * i3 / n3);
            t3 *= e4, n3 *= e4;
          }
          let [o3, s3] = this.parentDimensions;
          this.setDims(t3 * o3 / r3, n3 * s3 / i3), this._uiManager.enableWaiting(false);
          let c3 = this.#o = document.createElement(`canvas`);
          e3.append(c3), e3.hidden = false, this.#_(t3, n3), this.#y(), this.#u ||= (this.parent.addUndoableEditor(this), true), this._reportTelemetry({
            action: `inserted_image`
          }), this.#a && c3.setAttribute(`aria-label`, this.#a);
        }
        #h(e3, t3) {
          let [n3, r3] = this.parentDimensions;
          this.width = e3 / n3, this.height = t3 / r3, this.setDims(e3, t3), this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, this.#c !== null && clearTimeout(this.#c), this.#c = setTimeout(() => {
            this.#c = null, this.#_(e3, t3);
          }, 200);
        }
        #g(e3, t3) {
          let { width: n3, height: r3 } = this.#e, i3 = n3, a3 = r3, o3 = this.#e;
          for (; i3 > 2 * e3 || a3 > 2 * t3; ) {
            let n4 = i3, r4 = a3;
            i3 > 2 * e3 && (i3 = i3 >= 16384 ? Math.floor(i3 / 2) - 1 : Math.ceil(i3 / 2)), a3 > 2 * t3 && (a3 = a3 >= 16384 ? Math.floor(a3 / 2) - 1 : Math.ceil(a3 / 2));
            let s3 = new OffscreenCanvas(i3, a3);
            s3.getContext(`2d`).drawImage(o3, 0, 0, n4, r4, 0, 0, i3, a3), o3 = s3.transferToImageBitmap();
          }
          return o3;
        }
        #_(e3, t3) {
          e3 = Math.ceil(e3), t3 = Math.ceil(t3);
          let n3 = this.#o;
          if (!n3 || n3.width === e3 && n3.height === t3) return;
          n3.width = e3, n3.height = t3;
          let r3 = this.#l ? this.#e : this.#g(e3, t3);
          if (this._uiManager.hasMLManager && !this.hasAltText()) {
            let n4 = new OffscreenCanvas(e3, t3);
            n4.getContext(`2d`).drawImage(r3, 0, 0, r3.width, r3.height, 0, 0, e3, t3), n4.convertToBlob().then((e4) => {
              let t4 = new FileReader();
              t4.onload = () => {
                let e5 = t4.result;
                this._uiManager.mlGuess({
                  service: `image-to-text`,
                  request: {
                    imageData: e5
                  }
                }).then((e6) => {
                  let t5 = e6?.output || ``;
                  this.parent && t5 && !this.hasAltText() && (this.altTextData = {
                    altText: t5,
                    decorative: false
                  });
                });
              }, t4.readAsDataURL(e4);
            });
          }
          let i3 = n3.getContext(`2d`);
          i3.filter = this._uiManager.hcmFilter, i3.drawImage(r3, 0, 0, r3.width, r3.height, 0, 0, e3, t3);
        }
        getImageForAltText() {
          return this.#o;
        }
        #v(e3) {
          if (e3) {
            if (this.#l) {
              let e5 = this._uiManager.imageManager.getSvgUrl(this.#t);
              if (e5) return e5;
            }
            let e4 = document.createElement(`canvas`);
            return { width: e4.width, height: e4.height } = this.#e, e4.getContext(`2d`).drawImage(this.#e, 0, 0), e4.toDataURL();
          }
          if (this.#l) {
            let [e4, t3] = this.pageDimensions, n3 = Math.round(this.width * e4 * d2.PixelsPerInch.PDF_TO_CSS_UNITS), r3 = Math.round(this.height * t3 * d2.PixelsPerInch.PDF_TO_CSS_UNITS), i3 = new OffscreenCanvas(n3, r3);
            return i3.getContext(`2d`).drawImage(this.#e, 0, 0, this.#e.width, this.#e.height, 0, 0, n3, r3), i3.transferToImageBitmap();
          }
          return structuredClone(this.#e);
        }
        #y() {
          this.#s = new ResizeObserver((e3) => {
            let t3 = e3[0].contentRect;
            t3.width && t3.height && this.#h(t3.width, t3.height);
          }), this.#s.observe(this.div);
        }
        static deserialize(e3, t3, n3) {
          if (e3 instanceof o2.StampAnnotationElement) return null;
          let r3 = super.deserialize(e3, t3, n3), { rect: i3, bitmapUrl: a3, bitmapId: s3, isSvg: c3, accessibilityData: l3 } = e3;
          s3 && n3.imageManager.isValidId(s3) ? r3.#t = s3 : r3.#r = a3, r3.#l = c3;
          let [u3, d3] = r3.pageDimensions;
          return r3.width = (i3[2] - i3[0]) / u3, r3.height = (i3[3] - i3[1]) / d3, l3 && (r3.altTextData = l3), r3;
        }
        serialize(e3 = false, t3 = null) {
          if (this.isEmpty()) return null;
          let n3 = {
            annotationType: r2.AnnotationEditorType.STAMP,
            bitmapId: this.#t,
            pageIndex: this.pageIndex,
            rect: this.getRect(0, 0),
            rotation: this.rotation,
            isSvg: this.#l,
            structTreeParentId: this._structTreeParentId
          };
          if (e3) return n3.bitmapUrl = this.#v(true), n3.accessibilityData = this.altTextData, n3;
          let { decorative: i3, altText: a3 } = this.altTextData;
          if (!i3 && a3 && (n3.accessibilityData = {
            type: `Figure`,
            alt: a3
          }), t3 === null) return n3;
          t3.stamps ||= /* @__PURE__ */ new Map();
          let o3 = this.#l ? (n3.rect[2] - n3.rect[0]) * (n3.rect[3] - n3.rect[1]) : null;
          if (!t3.stamps.has(this.#t)) t3.stamps.set(this.#t, {
            area: o3,
            serialized: n3
          }), n3.bitmap = this.#v(false);
          else if (this.#l) {
            let e4 = t3.stamps.get(this.#t);
            o3 > e4.area && (e4.area = o3, e4.serialized.bitmap.close(), e4.serialized.bitmap = this.#v(false));
          }
          return n3;
        }
      }
      class h2 {
        #e;
        #t = false;
        #n = null;
        #r = null;
        #i = null;
        #a = null;
        #o = null;
        #s = /* @__PURE__ */ new Map();
        #c = false;
        #l = false;
        #u = false;
        #d = null;
        #f;
        static _initialized = false;
        static #p = new Map([
          c2,
          p2,
          m2,
          f2
        ].map((e3) => [
          e3._editorType,
          e3
        ]));
        constructor({ uiManager: e3, pageIndex: t3, div: n3, accessibilityManager: r3, annotationLayer: i3, drawLayer: a3, textLayer: o3, viewport: s3, l10n: c3 }) {
          let l3 = [
            ...h2.#p.values()
          ];
          if (!h2._initialized) {
            h2._initialized = true;
            for (let t4 of l3) t4.initialize(c3, e3);
          }
          e3.registerEditorTypes(l3), this.#f = e3, this.pageIndex = t3, this.div = n3, this.#e = r3, this.#n = i3, this.viewport = s3, this.#d = o3, this.drawLayer = a3, this.#f.addLayer(this);
        }
        get isEmpty() {
          return this.#s.size === 0;
        }
        get isInvisible() {
          return this.isEmpty && this.#f.getMode() === r2.AnnotationEditorType.NONE;
        }
        updateToolbar(e3) {
          this.#f.updateToolbar(e3);
        }
        updateMode(e3 = this.#f.getMode()) {
          switch (this.#v(), e3) {
            case r2.AnnotationEditorType.NONE:
              this.disableTextSelection(), this.togglePointerEvents(false), this.toggleAnnotationLayerPointerEvents(true), this.disableClick();
              return;
            case r2.AnnotationEditorType.INK:
              this.addInkEditorIfNeeded(false), this.disableTextSelection(), this.togglePointerEvents(true), this.disableClick();
              break;
            case r2.AnnotationEditorType.HIGHLIGHT:
              this.enableTextSelection(), this.togglePointerEvents(false), this.disableClick();
              break;
            default:
              this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
          }
          this.toggleAnnotationLayerPointerEvents(false);
          let { classList: t3 } = this.div;
          for (let n3 of h2.#p.values()) t3.toggle(`${n3._type}Editing`, e3 === n3._editorType);
          this.div.hidden = false;
        }
        hasTextLayer(e3) {
          return e3 === this.#d?.div;
        }
        addInkEditorIfNeeded(e3) {
          if (this.#f.getMode() === r2.AnnotationEditorType.INK) {
            if (!e3) {
              for (let e4 of this.#s.values()) if (e4.isEmpty()) {
                e4.setInBackground();
                return;
              }
            }
            this.createAndAddNewEditor({
              offsetX: 0,
              offsetY: 0
            }, false).setInBackground();
          }
        }
        setEditingState(e3) {
          this.#f.setEditingState(e3);
        }
        addCommands(e3) {
          this.#f.addCommands(e3);
        }
        togglePointerEvents(e3 = false) {
          this.div.classList.toggle(`disabled`, !e3);
        }
        toggleAnnotationLayerPointerEvents(e3 = false) {
          this.#n?.div.classList.toggle(`disabled`, !e3);
        }
        enable() {
          this.div.tabIndex = 0, this.togglePointerEvents(true);
          let e3 = /* @__PURE__ */ new Set();
          for (let t4 of this.#s.values()) t4.enableEditing(), t4.show(true), t4.annotationElementId && (this.#f.removeChangedExistingAnnotation(t4), e3.add(t4.annotationElementId));
          if (!this.#n) return;
          let t3 = this.#n.getEditableAnnotations();
          for (let n3 of t3) {
            if (n3.hide(), this.#f.isDeletedAnnotationElement(n3.data.id) || e3.has(n3.data.id)) continue;
            let t4 = this.deserialize(n3);
            t4 && (this.addOrRebuild(t4), t4.enableEditing());
          }
        }
        disable() {
          this.#u = true, this.div.tabIndex = -1, this.togglePointerEvents(false);
          let e3 = /* @__PURE__ */ new Map(), t3 = /* @__PURE__ */ new Map();
          for (let n4 of this.#s.values()) if (n4.disableEditing(), n4.annotationElementId) {
            if (n4.serialize() !== null) {
              e3.set(n4.annotationElementId, n4);
              continue;
            } else t3.set(n4.annotationElementId, n4);
            this.getEditableAnnotation(n4.annotationElementId)?.show(), n4.remove();
          }
          if (this.#n) {
            let n4 = this.#n.getEditableAnnotations();
            for (let r3 of n4) {
              let { id: n5 } = r3.data;
              if (this.#f.isDeletedAnnotationElement(n5)) continue;
              let i3 = t3.get(n5);
              if (i3) {
                i3.resetAnnotationElement(r3), i3.show(false), r3.show();
                continue;
              }
              i3 = e3.get(n5), i3 && (this.#f.addChangedExistingAnnotation(i3), i3.renderAnnotationElement(r3), i3.show(false)), r3.show();
            }
          }
          this.#v(), this.isEmpty && (this.div.hidden = true);
          let { classList: n3 } = this.div;
          for (let e4 of h2.#p.values()) n3.remove(`${e4._type}Editing`);
          this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(true), this.#u = false;
        }
        getEditableAnnotation(e3) {
          return this.#n?.getEditableAnnotation(e3) || null;
        }
        setActiveEditor(e3) {
          this.#f.getActive() !== e3 && this.#f.setActiveEditor(e3);
        }
        enableTextSelection() {
          this.div.tabIndex = -1, this.#d?.div && !this.#a && (this.#a = this.#m.bind(this), this.#d.div.addEventListener(`pointerdown`, this.#a), this.#d.div.classList.add(`highlighting`));
        }
        disableTextSelection() {
          this.div.tabIndex = 0, this.#d?.div && this.#a && (this.#d.div.removeEventListener(`pointerdown`, this.#a), this.#a = null, this.#d.div.classList.remove(`highlighting`));
        }
        #m(e3) {
          if (this.#f.unselectAll(), e3.target === this.#d.div) {
            let { isMac: t3 } = r2.FeatureTest.platform;
            if (e3.button !== 0 || e3.ctrlKey && t3) return;
            this.#f.showAllEditors(`highlight`, true, true), this.#d.div.classList.add(`free`), f2.startHighlighting(this, this.#f.direction === `ltr`, e3), this.#d.div.addEventListener(`pointerup`, () => {
              this.#d.div.classList.remove(`free`);
            }, {
              once: true
            }), e3.preventDefault();
          }
        }
        enableClick() {
          this.#i || (this.#i = this.pointerdown.bind(this), this.#r = this.pointerup.bind(this), this.div.addEventListener(`pointerdown`, this.#i), this.div.addEventListener(`pointerup`, this.#r));
        }
        disableClick() {
          this.#i && (this.div.removeEventListener(`pointerdown`, this.#i), this.div.removeEventListener(`pointerup`, this.#r), this.#i = null, this.#r = null);
        }
        attach(e3) {
          this.#s.set(e3.id, e3);
          let { annotationElementId: t3 } = e3;
          t3 && this.#f.isDeletedAnnotationElement(t3) && this.#f.removeDeletedAnnotationElement(e3);
        }
        detach(e3) {
          this.#s.delete(e3.id), this.#e?.removePointerInTextLayer(e3.contentDiv), !this.#u && e3.annotationElementId && this.#f.addDeletedAnnotationElement(e3);
        }
        remove(e3) {
          this.detach(e3), this.#f.removeEditor(e3), e3.div.remove(), e3.isAttachedToDOM = false, this.#l || this.addInkEditorIfNeeded(false);
        }
        changeParent(e3) {
          e3.parent !== this && (e3.parent && e3.annotationElementId && (this.#f.addDeletedAnnotationElement(e3.annotationElementId), i2.AnnotationEditor.deleteAnnotationElement(e3), e3.annotationElementId = null), this.attach(e3), e3.parent?.detach(e3), e3.setParent(this), e3.div && e3.isAttachedToDOM && (e3.div.remove(), this.div.append(e3.div)));
        }
        add(e3) {
          if (!(e3.parent === this && e3.isAttachedToDOM)) {
            if (this.changeParent(e3), this.#f.addEditor(e3), this.attach(e3), !e3.isAttachedToDOM) {
              let t3 = e3.render();
              this.div.append(t3), e3.isAttachedToDOM = true;
            }
            e3.fixAndSetPosition(), e3.onceAdded(), this.#f.addToAnnotationStorage(e3), e3._reportTelemetry(e3.telemetryInitialData);
          }
        }
        moveEditorInDOM(e3) {
          if (!e3.isAttachedToDOM) return;
          let { activeElement: t3 } = document;
          e3.div.contains(t3) && !this.#o && (e3._focusEventsAllowed = false, this.#o = setTimeout(() => {
            this.#o = null, e3.div.contains(document.activeElement) ? e3._focusEventsAllowed = true : (e3.div.addEventListener(`focusin`, () => {
              e3._focusEventsAllowed = true;
            }, {
              once: true
            }), t3.focus());
          }, 0)), e3._structTreeParentId = this.#e?.moveElementInDOM(this.div, e3.div, e3.contentDiv, true);
        }
        addOrRebuild(e3) {
          e3.needsToBeRebuilt() ? (e3.parent ||= this, e3.rebuild(), e3.show()) : this.add(e3);
        }
        addUndoableEditor(e3) {
          this.addCommands({
            cmd: () => e3._uiManager.rebuild(e3),
            undo: () => {
              e3.remove();
            },
            mustExec: false
          });
        }
        getNextId() {
          return this.#f.getId();
        }
        get #h() {
          return h2.#p.get(this.#f.getMode());
        }
        #g(e3) {
          let t3 = this.#h;
          return t3 ? new t3.prototype.constructor(e3) : null;
        }
        canCreateNewEmptyEditor() {
          return this.#h?.canCreateNewEmptyEditor();
        }
        pasteEditor(e3, t3) {
          this.#f.updateToolbar(e3), this.#f.updateMode(e3);
          let { offsetX: n3, offsetY: r3 } = this.#_(), i3 = this.getNextId(), a3 = this.#g({
            parent: this,
            id: i3,
            x: n3,
            y: r3,
            uiManager: this.#f,
            isCentered: true,
            ...t3
          });
          a3 && this.add(a3);
        }
        deserialize(e3) {
          return h2.#p.get(e3.annotationType ?? e3.annotationEditorType)?.deserialize(e3, this, this.#f) || null;
        }
        createAndAddNewEditor(e3, t3, n3 = {}) {
          let r3 = this.getNextId(), i3 = this.#g({
            parent: this,
            id: r3,
            x: e3.offsetX,
            y: e3.offsetY,
            uiManager: this.#f,
            isCentered: t3,
            ...n3
          });
          return i3 && this.add(i3), i3;
        }
        #_() {
          let { x: e3, y: t3, width: n3, height: r3 } = this.div.getBoundingClientRect(), i3 = Math.max(0, e3), a3 = Math.max(0, t3), o3 = Math.min(window.innerWidth, e3 + n3), s3 = Math.min(window.innerHeight, t3 + r3), c3 = (i3 + o3) / 2 - e3, l3 = (a3 + s3) / 2 - t3, [u3, d3] = this.viewport.rotation % 180 == 0 ? [
            c3,
            l3
          ] : [
            l3,
            c3
          ];
          return {
            offsetX: u3,
            offsetY: d3
          };
        }
        addNewEditor() {
          this.createAndAddNewEditor(this.#_(), true);
        }
        setSelected(e3) {
          this.#f.setSelected(e3);
        }
        toggleSelected(e3) {
          this.#f.toggleSelected(e3);
        }
        isSelected(e3) {
          return this.#f.isSelected(e3);
        }
        unselect(e3) {
          this.#f.unselect(e3);
        }
        pointerup(e3) {
          let { isMac: t3 } = r2.FeatureTest.platform;
          if (!(e3.button !== 0 || e3.ctrlKey && t3) && e3.target === this.div && this.#c) {
            if (this.#c = false, !this.#t) {
              this.#t = true;
              return;
            }
            if (this.#f.getMode() === r2.AnnotationEditorType.STAMP) {
              this.#f.unselectAll();
              return;
            }
            this.createAndAddNewEditor(e3, false);
          }
        }
        pointerdown(e3) {
          if (this.#f.getMode() === r2.AnnotationEditorType.HIGHLIGHT && this.enableTextSelection(), this.#c) {
            this.#c = false;
            return;
          }
          let { isMac: t3 } = r2.FeatureTest.platform;
          if (e3.button !== 0 || e3.ctrlKey && t3 || e3.target !== this.div) return;
          this.#c = true;
          let n3 = this.#f.getActive();
          this.#t = !n3 || n3.isEmpty();
        }
        findNewParent(e3, t3, n3) {
          let r3 = this.#f.findParent(t3, n3);
          return r3 === null || r3 === this ? false : (r3.changeParent(e3), true);
        }
        destroy() {
          this.#f.getActive()?.parent === this && (this.#f.commitOrRemove(), this.#f.setActiveEditor(null)), this.#o &&= (clearTimeout(this.#o), null);
          for (let e3 of this.#s.values()) this.#e?.removePointerInTextLayer(e3.contentDiv), e3.setParent(null), e3.isAttachedToDOM = false, e3.div.remove();
          this.div = null, this.#s.clear(), this.#f.removeLayer(this);
        }
        #v() {
          this.#l = true;
          for (let e3 of this.#s.values()) e3.isEmpty() && e3.remove();
          this.#l = false;
        }
        render({ viewport: e3 }) {
          this.viewport = e3, (0, d2.setLayerDimensions)(this.div, e3);
          for (let e4 of this.#f.getEditors(this.pageIndex)) this.add(e4), e4.rebuild();
          this.updateMode();
        }
        update({ viewport: e3 }) {
          this.#f.commitOrRemove(), this.#v();
          let t3 = this.viewport.rotation, n3 = e3.rotation;
          if (this.viewport = e3, (0, d2.setLayerDimensions)(this.div, {
            rotation: n3
          }), t3 !== n3) for (let e4 of this.#s.values()) e4.rotate(n3);
          this.addInkEditorIfNeeded(false);
        }
        get pageDimensions() {
          let { pageWidth: e3, pageHeight: t3 } = this.viewport.rawDims;
          return [
            e3,
            t3
          ];
        }
        get scale() {
          return this.#f.viewParameters.realScale;
        }
      }
    }),
    259: ((e2, t2, n2) => {
      n2.d(t2, {
        ColorPicker: () => o2
      });
      var r2 = n2(292), i2 = n2(830), a2 = n2(419);
      class o2 {
        #e = this.#m.bind(this);
        #t = this.#g.bind(this);
        #n = null;
        #r = null;
        #i;
        #a = null;
        #o = false;
        #s = false;
        #c = null;
        #l;
        #u = null;
        #d;
        static get _keyboardManager() {
          return (0, r2.shadow)(this, `_keyboardManager`, new i2.KeyboardManager([
            [
              [
                `Escape`,
                `mac+Escape`
              ],
              o2.prototype._hideDropdownFromKeyboard
            ],
            [
              [
                ` `,
                `mac+ `
              ],
              o2.prototype._colorSelectFromKeyboard
            ],
            [
              [
                `ArrowDown`,
                `ArrowRight`,
                `mac+ArrowDown`,
                `mac+ArrowRight`
              ],
              o2.prototype._moveToNext
            ],
            [
              [
                `ArrowUp`,
                `ArrowLeft`,
                `mac+ArrowUp`,
                `mac+ArrowLeft`
              ],
              o2.prototype._moveToPrevious
            ],
            [
              [
                `Home`,
                `mac+Home`
              ],
              o2.prototype._moveToBeginning
            ],
            [
              [
                `End`,
                `mac+End`
              ],
              o2.prototype._moveToEnd
            ]
          ]));
        }
        constructor({ editor: e3 = null, uiManager: t3 = null }) {
          e3 ? (this.#s = false, this.#d = r2.AnnotationEditorParamsType.HIGHLIGHT_COLOR, this.#c = e3) : (this.#s = true, this.#d = r2.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR), this.#u = e3?._uiManager || t3, this.#l = this.#u._eventBus, this.#i = e3?.color || this.#u?.highlightColors.values().next().value || `#FFFF98`;
        }
        renderButton() {
          let e3 = this.#n = document.createElement(`button`);
          e3.className = `colorPicker`, e3.tabIndex = `0`, e3.setAttribute(`data-l10n-id`, `pdfjs-editor-colorpicker-button`), e3.setAttribute(`aria-haspopup`, true), e3.addEventListener(`click`, this.#h.bind(this)), e3.addEventListener(`keydown`, this.#e);
          let t3 = this.#r = document.createElement(`span`);
          return t3.className = `swatch`, t3.setAttribute(`aria-hidden`, true), t3.style.backgroundColor = this.#i, e3.append(t3), e3;
        }
        renderMainDropdown() {
          let e3 = this.#a = this.#f();
          return e3.setAttribute(`aria-orientation`, `horizontal`), e3.setAttribute(`aria-labelledby`, `highlightColorPickerLabel`), e3;
        }
        #f() {
          let e3 = document.createElement(`div`);
          e3.addEventListener(`contextmenu`, a2.noContextMenu), e3.className = `dropdown`, e3.role = `listbox`, e3.setAttribute(`aria-multiselectable`, false), e3.setAttribute(`aria-orientation`, `vertical`), e3.setAttribute(`data-l10n-id`, `pdfjs-editor-colorpicker-dropdown`);
          for (let [t3, n3] of this.#u.highlightColors) {
            let r3 = document.createElement(`button`);
            r3.tabIndex = `0`, r3.role = `option`, r3.setAttribute(`data-color`, n3), r3.title = t3, r3.setAttribute(`data-l10n-id`, `pdfjs-editor-colorpicker-${t3}`);
            let i3 = document.createElement(`span`);
            r3.append(i3), i3.className = `swatch`, i3.style.backgroundColor = n3, r3.setAttribute(`aria-selected`, n3 === this.#i), r3.addEventListener(`click`, this.#p.bind(this, n3)), e3.append(r3);
          }
          return e3.addEventListener(`keydown`, this.#e), e3;
        }
        #p(e3, t3) {
          t3.stopPropagation(), this.#l.dispatch(`switchannotationeditorparams`, {
            source: this,
            type: this.#d,
            value: e3
          });
        }
        _colorSelectFromKeyboard(e3) {
          if (e3.target === this.#n) {
            this.#h(e3);
            return;
          }
          let t3 = e3.target.getAttribute(`data-color`);
          t3 && this.#p(t3, e3);
        }
        _moveToNext(e3) {
          if (!this.#_) {
            this.#h(e3);
            return;
          }
          if (e3.target === this.#n) {
            this.#a.firstChild?.focus();
            return;
          }
          e3.target.nextSibling?.focus();
        }
        _moveToPrevious(e3) {
          if (e3.target === this.#a?.firstChild || e3.target === this.#n) {
            this.#_ && this._hideDropdownFromKeyboard();
            return;
          }
          this.#_ || this.#h(e3), e3.target.previousSibling?.focus();
        }
        _moveToBeginning(e3) {
          if (!this.#_) {
            this.#h(e3);
            return;
          }
          this.#a.firstChild?.focus();
        }
        _moveToEnd(e3) {
          if (!this.#_) {
            this.#h(e3);
            return;
          }
          this.#a.lastChild?.focus();
        }
        #m(e3) {
          o2._keyboardManager.exec(this, e3);
        }
        #h(e3) {
          if (this.#_) {
            this.hideDropdown();
            return;
          }
          if (this.#o = e3.detail === 0, window.addEventListener(`pointerdown`, this.#t), this.#a) {
            this.#a.classList.remove(`hidden`);
            return;
          }
          let t3 = this.#a = this.#f();
          this.#n.append(t3);
        }
        #g(e3) {
          this.#a?.contains(e3.target) || this.hideDropdown();
        }
        hideDropdown() {
          this.#a?.classList.add(`hidden`), window.removeEventListener(`pointerdown`, this.#t);
        }
        get #_() {
          return this.#a && !this.#a.classList.contains(`hidden`);
        }
        _hideDropdownFromKeyboard() {
          if (!this.#s) {
            if (!this.#_) {
              this.#c?.unselect();
              return;
            }
            this.hideDropdown(), this.#n.focus({
              preventScroll: true,
              focusVisible: this.#o
            });
          }
        }
        updateColor(e3) {
          if (this.#r && (this.#r.style.backgroundColor = e3), !this.#a) return;
          let t3 = this.#u.highlightColors.values();
          for (let n3 of this.#a.children) n3.setAttribute(`aria-selected`, t3.next().value === e3);
        }
        destroy() {
          this.#n?.remove(), this.#n = null, this.#r = null, this.#a?.remove(), this.#a = null;
        }
      }
    }),
    310: ((e2, t2, n2) => {
      n2.d(t2, {
        AnnotationEditor: () => c2
      });
      var r2 = n2(830), i2 = n2(292), a2 = n2(419);
      class o2 {
        #e = ``;
        #t = false;
        #n = null;
        #r = null;
        #i = null;
        #a = false;
        #o = null;
        static _l10nPromise = null;
        constructor(e3) {
          this.#o = e3;
        }
        static initialize(e3) {
          o2._l10nPromise ||= e3;
        }
        async render() {
          let e3 = this.#n = document.createElement(`button`);
          e3.className = `altText`;
          let t3 = await o2._l10nPromise.get(`pdfjs-editor-alt-text-button-label`);
          e3.textContent = t3, e3.setAttribute(`aria-label`, t3), e3.tabIndex = `0`, e3.addEventListener(`contextmenu`, a2.noContextMenu), e3.addEventListener(`pointerdown`, (e4) => e4.stopPropagation());
          let n3 = (e4) => {
            e4.preventDefault(), this.#o._uiManager.editAltText(this.#o);
          };
          return e3.addEventListener(`click`, n3, {
            capture: true
          }), e3.addEventListener(`keydown`, (t4) => {
            t4.target === e3 && t4.key === `Enter` && (this.#a = true, n3(t4));
          }), await this.#s(), e3;
        }
        finish() {
          this.#n && (this.#n.focus({
            focusVisible: this.#a
          }), this.#a = false);
        }
        isEmpty() {
          return !this.#e && !this.#t;
        }
        get data() {
          return {
            altText: this.#e,
            decorative: this.#t
          };
        }
        set data({ altText: e3, decorative: t3 }) {
          this.#e === e3 && this.#t === t3 || (this.#e = e3, this.#t = t3, this.#s());
        }
        toggle(e3 = false) {
          this.#n && (!e3 && this.#i && (clearTimeout(this.#i), this.#i = null), this.#n.disabled = !e3);
        }
        destroy() {
          this.#n?.remove(), this.#n = null, this.#r = null;
        }
        async #s() {
          let e3 = this.#n;
          if (!e3) return;
          if (!this.#e && !this.#t) {
            e3.classList.remove(`done`), this.#r?.remove();
            return;
          }
          e3.classList.add(`done`), o2._l10nPromise.get(`pdfjs-editor-alt-text-edit-button-label`).then((t4) => {
            e3.setAttribute(`aria-label`, t4);
          });
          let t3 = this.#r;
          if (!t3) {
            this.#r = t3 = document.createElement(`span`), t3.className = `tooltip`, t3.setAttribute(`role`, `tooltip`);
            let n3 = t3.id = `alt-text-tooltip-${this.#o.id}`;
            e3.setAttribute(`aria-describedby`, n3), e3.addEventListener(`mouseenter`, () => {
              this.#i = setTimeout(() => {
                this.#i = null, this.#r.classList.add(`show`), this.#o._reportTelemetry({
                  action: `alt_text_tooltip`
                });
              }, 100);
            }), e3.addEventListener(`mouseleave`, () => {
              this.#i &&= (clearTimeout(this.#i), null), this.#r?.classList.remove(`show`);
            });
          }
          t3.innerText = this.#t ? await o2._l10nPromise.get(`pdfjs-editor-alt-text-decorative-tooltip`) : this.#e, t3.parentNode || e3.append(t3), this.#o.getImageForAltText()?.setAttribute(`aria-describedby`, t3.id);
        }
      }
      var s2 = n2(362);
      class c2 {
        #e = null;
        #t = null;
        #n = false;
        #r = false;
        #i = null;
        #a = null;
        #o = this.focusin.bind(this);
        #s = this.focusout.bind(this);
        #c = null;
        #l = ``;
        #u = false;
        #d = null;
        #f = false;
        #p = false;
        #m = false;
        #h = null;
        #g = 0;
        #_ = 0;
        #v = null;
        _initialOptions = /* @__PURE__ */ Object.create(null);
        _isVisible = true;
        _uiManager = null;
        _focusEventsAllowed = true;
        _l10nPromise = null;
        #y = false;
        #b = c2._zIndex++;
        static _borderLineWidth = -1;
        static _colorManager = new r2.ColorManager();
        static _zIndex = 1;
        static _telemetryTimeout = 1e3;
        static get _resizerKeyboardManager() {
          let e3 = c2.prototype._resizeWithKeyboard, t3 = r2.AnnotationEditorUIManager.TRANSLATE_SMALL, n3 = r2.AnnotationEditorUIManager.TRANSLATE_BIG;
          return (0, i2.shadow)(this, `_resizerKeyboardManager`, new r2.KeyboardManager([
            [
              [
                `ArrowLeft`,
                `mac+ArrowLeft`
              ],
              e3,
              {
                args: [
                  -t3,
                  0
                ]
              }
            ],
            [
              [
                `ctrl+ArrowLeft`,
                `mac+shift+ArrowLeft`
              ],
              e3,
              {
                args: [
                  -n3,
                  0
                ]
              }
            ],
            [
              [
                `ArrowRight`,
                `mac+ArrowRight`
              ],
              e3,
              {
                args: [
                  t3,
                  0
                ]
              }
            ],
            [
              [
                `ctrl+ArrowRight`,
                `mac+shift+ArrowRight`
              ],
              e3,
              {
                args: [
                  n3,
                  0
                ]
              }
            ],
            [
              [
                `ArrowUp`,
                `mac+ArrowUp`
              ],
              e3,
              {
                args: [
                  0,
                  -t3
                ]
              }
            ],
            [
              [
                `ctrl+ArrowUp`,
                `mac+shift+ArrowUp`
              ],
              e3,
              {
                args: [
                  0,
                  -n3
                ]
              }
            ],
            [
              [
                `ArrowDown`,
                `mac+ArrowDown`
              ],
              e3,
              {
                args: [
                  0,
                  t3
                ]
              }
            ],
            [
              [
                `ctrl+ArrowDown`,
                `mac+shift+ArrowDown`
              ],
              e3,
              {
                args: [
                  0,
                  n3
                ]
              }
            ],
            [
              [
                `Escape`,
                `mac+Escape`
              ],
              c2.prototype._stopResizingWithKeyboard
            ]
          ]));
        }
        constructor(e3) {
          this.constructor === c2 && (0, i2.unreachable)(`Cannot initialize AnnotationEditor.`), this.parent = e3.parent, this.id = e3.id, this.width = this.height = null, this.pageIndex = e3.parent.pageIndex, this.name = e3.name, this.div = null, this._uiManager = e3.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = false, this._initialOptions.isCentered = e3.isCentered, this._structTreeParentId = null;
          let { rotation: t3, rawDims: { pageWidth: n3, pageHeight: r3, pageX: a3, pageY: o3 } } = this.parent.viewport;
          this.rotation = t3, this.pageRotation = (360 + t3 - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [
            n3,
            r3
          ], this.pageTranslation = [
            a3,
            o3
          ];
          let [s3, l3] = this.parentDimensions;
          this.x = e3.x / s3, this.y = e3.y / l3, this.isAttachedToDOM = false, this.deleted = false;
        }
        get editorType() {
          return Object.getPrototypeOf(this).constructor._type;
        }
        static get _defaultLineColor() {
          return (0, i2.shadow)(this, `_defaultLineColor`, this._colorManager.getHexCode(`CanvasText`));
        }
        static deleteAnnotationElement(e3) {
          let t3 = new l2({
            id: e3.parent.getNextId(),
            parent: e3.parent,
            uiManager: e3._uiManager
          });
          t3.annotationElementId = e3.annotationElementId, t3.deleted = true, t3._uiManager.addToAnnotationStorage(t3);
        }
        static initialize(e3, t3, n3) {
          if (c2._l10nPromise ||= new Map([
            `pdfjs-editor-alt-text-button-label`,
            `pdfjs-editor-alt-text-edit-button-label`,
            `pdfjs-editor-alt-text-decorative-tooltip`,
            `pdfjs-editor-resizer-label-topLeft`,
            `pdfjs-editor-resizer-label-topMiddle`,
            `pdfjs-editor-resizer-label-topRight`,
            `pdfjs-editor-resizer-label-middleRight`,
            `pdfjs-editor-resizer-label-bottomRight`,
            `pdfjs-editor-resizer-label-bottomMiddle`,
            `pdfjs-editor-resizer-label-bottomLeft`,
            `pdfjs-editor-resizer-label-middleLeft`
          ].map((t4) => [
            t4,
            e3.get(t4.replaceAll(/([A-Z])/g, (e4) => `-${e4.toLowerCase()}`))
          ])), n3?.strings) for (let t4 of n3.strings) c2._l10nPromise.set(t4, e3.get(t4));
          if (c2._borderLineWidth !== -1) return;
          let r3 = getComputedStyle(document.documentElement);
          c2._borderLineWidth = parseFloat(r3.getPropertyValue(`--outline-width`)) || 0;
        }
        static updateDefaultParams(e3, t3) {
        }
        static get defaultPropertiesToUpdate() {
          return [];
        }
        static isHandlingMimeForPasting(e3) {
          return false;
        }
        static paste(e3, t3) {
          (0, i2.unreachable)(`Not implemented`);
        }
        get propertiesToUpdate() {
          return [];
        }
        get _isDraggable() {
          return this.#y;
        }
        set _isDraggable(e3) {
          this.#y = e3, this.div?.classList.toggle(`draggable`, e3);
        }
        get isEnterHandled() {
          return true;
        }
        center() {
          let [e3, t3] = this.pageDimensions;
          switch (this.parentRotation) {
            case 90:
              this.x -= this.height * t3 / (e3 * 2), this.y += this.width * e3 / (t3 * 2);
              break;
            case 180:
              this.x += this.width / 2, this.y += this.height / 2;
              break;
            case 270:
              this.x += this.height * t3 / (e3 * 2), this.y -= this.width * e3 / (t3 * 2);
              break;
            default:
              this.x -= this.width / 2, this.y -= this.height / 2;
              break;
          }
          this.fixAndSetPosition();
        }
        addCommands(e3) {
          this._uiManager.addCommands(e3);
        }
        get currentLayer() {
          return this._uiManager.currentLayer;
        }
        setInBackground() {
          this.div.style.zIndex = 0;
        }
        setInForeground() {
          this.div.style.zIndex = this.#b;
        }
        setParent(e3) {
          e3 === null ? this.#P() : (this.pageIndex = e3.pageIndex, this.pageDimensions = e3.pageDimensions), this.parent = e3;
        }
        focusin(e3) {
          this._focusEventsAllowed && (this.#u ? this.#u = false : this.parent.setSelected(this));
        }
        focusout(e3) {
          this._focusEventsAllowed && this.isAttachedToDOM && (e3.relatedTarget?.closest(`#${this.id}`) || (e3.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove()));
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
        setAt(e3, t3, n3, r3) {
          let [i3, a3] = this.parentDimensions;
          [n3, r3] = this.screenToPageTranslation(n3, r3), this.x = (e3 + n3) / i3, this.y = (t3 + r3) / a3, this.fixAndSetPosition();
        }
        #x([e3, t3], n3, r3) {
          [n3, r3] = this.screenToPageTranslation(n3, r3), this.x += n3 / e3, this.y += r3 / t3, this.fixAndSetPosition();
        }
        translate(e3, t3) {
          this.#x(this.parentDimensions, e3, t3);
        }
        translateInPage(e3, t3) {
          this.#d ||= [
            this.x,
            this.y
          ], this.#x(this.pageDimensions, e3, t3), this.div.scrollIntoView({
            block: `nearest`
          });
        }
        drag(e3, t3) {
          this.#d ||= [
            this.x,
            this.y
          ];
          let [n3, r3] = this.parentDimensions;
          if (this.x += e3 / n3, this.y += t3 / r3, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
            let { x: e4, y: t4 } = this.div.getBoundingClientRect();
            this.parent.findNewParent(this, e4, t4) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
          }
          let { x: i3, y: a3 } = this, [o3, s3] = this.getBaseTranslation();
          i3 += o3, a3 += s3, this.div.style.left = `${(100 * i3).toFixed(2)}%`, this.div.style.top = `${(100 * a3).toFixed(2)}%`, this.div.scrollIntoView({
            block: `nearest`
          });
        }
        get _hasBeenMoved() {
          return !!this.#d && (this.#d[0] !== this.x || this.#d[1] !== this.y);
        }
        getBaseTranslation() {
          let [e3, t3] = this.parentDimensions, { _borderLineWidth: n3 } = c2, r3 = n3 / e3, i3 = n3 / t3;
          switch (this.rotation) {
            case 90:
              return [
                -r3,
                i3
              ];
            case 180:
              return [
                r3,
                i3
              ];
            case 270:
              return [
                r3,
                -i3
              ];
            default:
              return [
                -r3,
                -i3
              ];
          }
        }
        get _mustFixPosition() {
          return true;
        }
        fixAndSetPosition(e3 = this.rotation) {
          let [t3, n3] = this.pageDimensions, { x: r3, y: i3, width: a3, height: o3 } = this;
          if (a3 *= t3, o3 *= n3, r3 *= t3, i3 *= n3, this._mustFixPosition) switch (e3) {
            case 0:
              r3 = Math.max(0, Math.min(t3 - a3, r3)), i3 = Math.max(0, Math.min(n3 - o3, i3));
              break;
            case 90:
              r3 = Math.max(0, Math.min(t3 - o3, r3)), i3 = Math.min(n3, Math.max(a3, i3));
              break;
            case 180:
              r3 = Math.min(t3, Math.max(a3, r3)), i3 = Math.min(n3, Math.max(o3, i3));
              break;
            case 270:
              r3 = Math.min(t3, Math.max(o3, r3)), i3 = Math.max(0, Math.min(n3 - a3, i3));
              break;
          }
          this.x = r3 /= t3, this.y = i3 /= n3;
          let [s3, c3] = this.getBaseTranslation();
          r3 += s3, i3 += c3;
          let { style: l3 } = this.div;
          l3.left = `${(100 * r3).toFixed(2)}%`, l3.top = `${(100 * i3).toFixed(2)}%`, this.moveInDOM();
        }
        static #S(e3, t3, n3) {
          switch (n3) {
            case 90:
              return [
                t3,
                -e3
              ];
            case 180:
              return [
                -e3,
                -t3
              ];
            case 270:
              return [
                -t3,
                e3
              ];
            default:
              return [
                e3,
                t3
              ];
          }
        }
        screenToPageTranslation(e3, t3) {
          return c2.#S(e3, t3, this.parentRotation);
        }
        pageTranslationToScreen(e3, t3) {
          return c2.#S(e3, t3, 360 - this.parentRotation);
        }
        #C(e3) {
          switch (e3) {
            case 90: {
              let [e4, t3] = this.pageDimensions;
              return [
                0,
                -e4 / t3,
                t3 / e4,
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
              let [e4, t3] = this.pageDimensions;
              return [
                0,
                e4 / t3,
                -t3 / e4,
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
        }
        get parentScale() {
          return this._uiManager.viewParameters.realScale;
        }
        get parentRotation() {
          return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
        }
        get parentDimensions() {
          let { parentScale: e3, pageDimensions: [t3, n3] } = this, r3 = t3 * e3, a3 = n3 * e3;
          return i2.FeatureTest.isCSSRoundSupported ? [
            Math.round(r3),
            Math.round(a3)
          ] : [
            r3,
            a3
          ];
        }
        setDims(e3, t3) {
          let [n3, r3] = this.parentDimensions;
          this.div.style.width = `${(100 * e3 / n3).toFixed(2)}%`, this.#r || (this.div.style.height = `${(100 * t3 / r3).toFixed(2)}%`);
        }
        fixDims() {
          let { style: e3 } = this.div, { height: t3, width: n3 } = e3, r3 = n3.endsWith(`%`), i3 = !this.#r && t3.endsWith(`%`);
          if (r3 && i3) return;
          let [a3, o3] = this.parentDimensions;
          r3 || (e3.width = `${(100 * parseFloat(n3) / a3).toFixed(2)}%`), !this.#r && !i3 && (e3.height = `${(100 * parseFloat(t3) / o3).toFixed(2)}%`);
        }
        getInitialTranslation() {
          return [
            0,
            0
          ];
        }
        #w() {
          if (this.#i) return;
          this.#i = document.createElement(`div`), this.#i.classList.add(`resizers`);
          let e3 = this._willKeepAspectRatio ? [
            `topLeft`,
            `topRight`,
            `bottomRight`,
            `bottomLeft`
          ] : [
            `topLeft`,
            `topMiddle`,
            `topRight`,
            `middleRight`,
            `bottomRight`,
            `bottomMiddle`,
            `bottomLeft`,
            `middleLeft`
          ];
          for (let t3 of e3) {
            let e4 = document.createElement(`div`);
            this.#i.append(e4), e4.classList.add(`resizer`, t3), e4.setAttribute(`data-resizer-name`, t3), e4.addEventListener(`pointerdown`, this.#T.bind(this, t3)), e4.addEventListener(`contextmenu`, a2.noContextMenu), e4.tabIndex = -1;
          }
          this.div.prepend(this.#i);
        }
        #T(e3, t3) {
          t3.preventDefault();
          let { isMac: n3 } = i2.FeatureTest.platform;
          if (t3.button !== 0 || t3.ctrlKey && n3) return;
          this.#t?.toggle(false);
          let r3 = this.#D.bind(this, e3), o3 = this._isDraggable;
          this._isDraggable = false;
          let s3 = {
            passive: true,
            capture: true
          };
          this.parent.togglePointerEvents(false), window.addEventListener(`pointermove`, r3, s3), window.addEventListener(`contextmenu`, a2.noContextMenu);
          let c3 = this.x, l3 = this.y, u2 = this.width, d2 = this.height, f2 = this.parent.div.style.cursor, p2 = this.div.style.cursor;
          this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(t3.target).cursor;
          let m2 = () => {
            this.parent.togglePointerEvents(true), this.#t?.toggle(true), this._isDraggable = o3, window.removeEventListener(`pointerup`, m2), window.removeEventListener(`blur`, m2), window.removeEventListener(`pointermove`, r3, s3), window.removeEventListener(`contextmenu`, a2.noContextMenu), this.parent.div.style.cursor = f2, this.div.style.cursor = p2, this.#E(c3, l3, u2, d2);
          };
          window.addEventListener(`pointerup`, m2), window.addEventListener(`blur`, m2);
        }
        #E(e3, t3, n3, r3) {
          let i3 = this.x, a3 = this.y, o3 = this.width, s3 = this.height;
          i3 === e3 && a3 === t3 && o3 === n3 && s3 === r3 || this.addCommands({
            cmd: () => {
              this.width = o3, this.height = s3, this.x = i3, this.y = a3;
              let [e4, t4] = this.parentDimensions;
              this.setDims(e4 * o3, t4 * s3), this.fixAndSetPosition();
            },
            undo: () => {
              this.width = n3, this.height = r3, this.x = e3, this.y = t3;
              let [i4, a4] = this.parentDimensions;
              this.setDims(i4 * n3, a4 * r3), this.fixAndSetPosition();
            },
            mustExec: true
          });
        }
        #D(e3, t3) {
          let [n3, r3] = this.parentDimensions, i3 = this.x, a3 = this.y, o3 = this.width, s3 = this.height, l3 = c2.MIN_SIZE / n3, u2 = c2.MIN_SIZE / r3, d2 = (e4) => Math.round(e4 * 1e4) / 1e4, f2 = this.#C(this.rotation), p2 = (e4, t4) => [
            f2[0] * e4 + f2[2] * t4,
            f2[1] * e4 + f2[3] * t4
          ], m2 = this.#C(360 - this.rotation), h2 = (e4, t4) => [
            m2[0] * e4 + m2[2] * t4,
            m2[1] * e4 + m2[3] * t4
          ], g2, _2, v2 = false, y2 = false;
          switch (e3) {
            case `topLeft`:
              v2 = true, g2 = (e4, t4) => [
                0,
                0
              ], _2 = (e4, t4) => [
                e4,
                t4
              ];
              break;
            case `topMiddle`:
              g2 = (e4, t4) => [
                e4 / 2,
                0
              ], _2 = (e4, t4) => [
                e4 / 2,
                t4
              ];
              break;
            case `topRight`:
              v2 = true, g2 = (e4, t4) => [
                e4,
                0
              ], _2 = (e4, t4) => [
                0,
                t4
              ];
              break;
            case `middleRight`:
              y2 = true, g2 = (e4, t4) => [
                e4,
                t4 / 2
              ], _2 = (e4, t4) => [
                0,
                t4 / 2
              ];
              break;
            case `bottomRight`:
              v2 = true, g2 = (e4, t4) => [
                e4,
                t4
              ], _2 = (e4, t4) => [
                0,
                0
              ];
              break;
            case `bottomMiddle`:
              g2 = (e4, t4) => [
                e4 / 2,
                t4
              ], _2 = (e4, t4) => [
                e4 / 2,
                0
              ];
              break;
            case `bottomLeft`:
              v2 = true, g2 = (e4, t4) => [
                0,
                t4
              ], _2 = (e4, t4) => [
                e4,
                0
              ];
              break;
            case `middleLeft`:
              y2 = true, g2 = (e4, t4) => [
                0,
                t4 / 2
              ], _2 = (e4, t4) => [
                e4,
                t4 / 2
              ];
              break;
          }
          let b2 = g2(o3, s3), x2 = _2(o3, s3), S2 = p2(...x2), C2 = d2(i3 + S2[0]), w2 = d2(a3 + S2[1]), T2 = 1, E2 = 1, [D2, O2] = this.screenToPageTranslation(t3.movementX, t3.movementY);
          if ([D2, O2] = h2(D2 / n3, O2 / r3), v2) {
            let e4 = Math.hypot(o3, s3);
            T2 = E2 = Math.max(Math.min(Math.hypot(x2[0] - b2[0] - D2, x2[1] - b2[1] - O2) / e4, 1 / o3, 1 / s3), l3 / o3, u2 / s3);
          } else y2 ? T2 = Math.max(l3, Math.min(1, Math.abs(x2[0] - b2[0] - D2))) / o3 : E2 = Math.max(u2, Math.min(1, Math.abs(x2[1] - b2[1] - O2))) / s3;
          let k2 = d2(o3 * T2), A2 = d2(s3 * E2);
          S2 = p2(..._2(k2, A2));
          let j2 = C2 - S2[0], M2 = w2 - S2[1];
          this.width = k2, this.height = A2, this.x = j2, this.y = M2, this.setDims(n3 * k2, r3 * A2), this.fixAndSetPosition();
        }
        altTextFinish() {
          this.#t?.finish();
        }
        async addEditToolbar() {
          return this.#c || this.#p ? this.#c : (this.#c = new s2.EditorToolbar(this), this.div.append(this.#c.render()), this.#t && this.#c.addAltTextButton(await this.#t.render()), this.#c);
        }
        removeEditToolbar() {
          this.#c && (this.#c.remove(), this.#c = null, this.#t?.destroy());
        }
        getClientDimensions() {
          return this.div.getBoundingClientRect();
        }
        async addAltTextButton() {
          this.#t || (o2.initialize(c2._l10nPromise), this.#t = new o2(this), await this.addEditToolbar());
        }
        get altTextData() {
          return this.#t?.data;
        }
        set altTextData(e3) {
          this.#t && (this.#t.data = e3);
        }
        hasAltText() {
          return !this.#t?.isEmpty();
        }
        render() {
          this.div = document.createElement(`div`), this.div.setAttribute(`data-editor-rotation`, (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute(`id`, this.id), this.div.tabIndex = this.#n ? -1 : 0, this._isVisible || this.div.classList.add(`hidden`), this.setInForeground(), this.div.addEventListener(`focusin`, this.#o), this.div.addEventListener(`focusout`, this.#s);
          let [e3, t3] = this.parentDimensions;
          this.parentRotation % 180 != 0 && (this.div.style.maxWidth = `${(100 * t3 / e3).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * e3 / t3).toFixed(2)}%`);
          let [n3, i3] = this.getInitialTranslation();
          return this.translate(n3, i3), (0, r2.bindEvents)(this, this.div, [
            `pointerdown`
          ]), this.div;
        }
        pointerdown(e3) {
          let { isMac: t3 } = i2.FeatureTest.platform;
          if (e3.button !== 0 || e3.ctrlKey && t3) {
            e3.preventDefault();
            return;
          }
          if (this.#u = true, this._isDraggable) {
            this.#k(e3);
            return;
          }
          this.#O(e3);
        }
        #O(e3) {
          let { isMac: t3 } = i2.FeatureTest.platform;
          e3.ctrlKey && !t3 || e3.shiftKey || e3.metaKey && t3 ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
        }
        #k(e3) {
          let t3 = this._uiManager.isSelected(this);
          this._uiManager.setUpDragSession();
          let n3, r3;
          t3 && (this.div.classList.add(`moving`), n3 = {
            passive: true,
            capture: true
          }, this.#g = e3.clientX, this.#_ = e3.clientY, r3 = (e4) => {
            let { clientX: t4, clientY: n4 } = e4, [r4, i4] = this.screenToPageTranslation(t4 - this.#g, n4 - this.#_);
            this.#g = t4, this.#_ = n4, this._uiManager.dragSelectedEditors(r4, i4);
          }, window.addEventListener(`pointermove`, r3, n3));
          let i3 = () => {
            window.removeEventListener(`pointerup`, i3), window.removeEventListener(`blur`, i3), t3 && (this.div.classList.remove(`moving`), window.removeEventListener(`pointermove`, r3, n3)), this.#u = false, this._uiManager.endDragSession() || this.#O(e3);
          };
          window.addEventListener(`pointerup`, i3), window.addEventListener(`blur`, i3);
        }
        moveInDOM() {
          this.#h && clearTimeout(this.#h), this.#h = setTimeout(() => {
            this.#h = null, this.parent?.moveEditorInDOM(this);
          }, 0);
        }
        _setParentAndPosition(e3, t3, n3) {
          e3.changeParent(this), this.x = t3, this.y = n3, this.fixAndSetPosition();
        }
        getRect(e3, t3, n3 = this.rotation) {
          let r3 = this.parentScale, [i3, a3] = this.pageDimensions, [o3, s3] = this.pageTranslation, c3 = e3 / r3, l3 = t3 / r3, u2 = this.x * i3, d2 = this.y * a3, f2 = this.width * i3, p2 = this.height * a3;
          switch (n3) {
            case 0:
              return [
                u2 + c3 + o3,
                a3 - d2 - l3 - p2 + s3,
                u2 + c3 + f2 + o3,
                a3 - d2 - l3 + s3
              ];
            case 90:
              return [
                u2 + l3 + o3,
                a3 - d2 + c3 + s3,
                u2 + l3 + p2 + o3,
                a3 - d2 + c3 + f2 + s3
              ];
            case 180:
              return [
                u2 - c3 - f2 + o3,
                a3 - d2 + l3 + s3,
                u2 - c3 + o3,
                a3 - d2 + l3 + p2 + s3
              ];
            case 270:
              return [
                u2 - l3 - p2 + o3,
                a3 - d2 - c3 - f2 + s3,
                u2 - l3 + o3,
                a3 - d2 - c3 + s3
              ];
            default:
              throw Error(`Invalid rotation`);
          }
        }
        getRectInCurrentCoords(e3, t3) {
          let [n3, r3, i3, a3] = e3, o3 = i3 - n3, s3 = a3 - r3;
          switch (this.rotation) {
            case 0:
              return [
                n3,
                t3 - a3,
                o3,
                s3
              ];
            case 90:
              return [
                n3,
                t3 - r3,
                s3,
                o3
              ];
            case 180:
              return [
                i3,
                t3 - r3,
                o3,
                s3
              ];
            case 270:
              return [
                i3,
                t3 - a3,
                s3,
                o3
              ];
            default:
              throw Error(`Invalid rotation`);
          }
        }
        onceAdded() {
        }
        isEmpty() {
          return false;
        }
        enableEditMode() {
          this.#p = true;
        }
        disableEditMode() {
          this.#p = false;
        }
        isInEditMode() {
          return this.#p;
        }
        shouldGetKeyboardEvents() {
          return this.#m;
        }
        needsToBeRebuilt() {
          return this.div && !this.isAttachedToDOM;
        }
        rebuild() {
          this.div?.addEventListener(`focusin`, this.#o), this.div?.addEventListener(`focusout`, this.#s);
        }
        rotate(e3) {
        }
        serialize(e3 = false, t3 = null) {
          (0, i2.unreachable)(`An editor must be serializable`);
        }
        static deserialize(e3, t3, n3) {
          let r3 = new this.prototype.constructor({
            parent: t3,
            id: t3.getNextId(),
            uiManager: n3
          });
          r3.rotation = e3.rotation;
          let [i3, a3] = r3.pageDimensions, [o3, s3, c3, l3] = r3.getRectInCurrentCoords(e3.rect, a3);
          return r3.x = o3 / i3, r3.y = s3 / a3, r3.width = c3 / i3, r3.height = l3 / a3, r3;
        }
        get hasBeenModified() {
          return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
        }
        remove() {
          if (this.div.removeEventListener(`focusin`, this.#o), this.div.removeEventListener(`focusout`, this.#s), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), this.#h &&= (clearTimeout(this.#h), null), this.#P(), this.removeEditToolbar(), this.#v) {
            for (let e3 of this.#v.values()) clearTimeout(e3);
            this.#v = null;
          }
          this.parent = null;
        }
        get isResizable() {
          return false;
        }
        makeResizable() {
          this.isResizable && (this.#w(), this.#i.classList.remove(`hidden`), (0, r2.bindEvents)(this, this.div, [
            `keydown`
          ]));
        }
        get toolbarPosition() {
          return null;
        }
        keydown(e3) {
          if (!this.isResizable || e3.target !== this.div || e3.key !== `Enter`) return;
          this._uiManager.setSelected(this), this.#a = {
            savedX: this.x,
            savedY: this.y,
            savedWidth: this.width,
            savedHeight: this.height
          };
          let t3 = this.#i.children;
          if (!this.#e) {
            this.#e = Array.from(t3);
            let e4 = this.#A.bind(this), n4 = this.#j.bind(this);
            for (let t4 of this.#e) {
              let r4 = t4.getAttribute(`data-resizer-name`);
              t4.setAttribute(`role`, `spinbutton`), t4.addEventListener(`keydown`, e4), t4.addEventListener(`blur`, n4), t4.addEventListener(`focus`, this.#M.bind(this, r4)), c2._l10nPromise.get(`pdfjs-editor-resizer-label-${r4}`).then((e5) => t4.setAttribute(`aria-label`, e5));
            }
          }
          let n3 = this.#e[0], r3 = 0;
          for (let e4 of t3) {
            if (e4 === n3) break;
            r3++;
          }
          let i3 = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#e.length / 4);
          if (i3 !== r3) {
            if (i3 < r3) for (let e5 = 0; e5 < r3 - i3; e5++) this.#i.append(this.#i.firstChild);
            else if (i3 > r3) for (let e5 = 0; e5 < i3 - r3; e5++) this.#i.firstChild.before(this.#i.lastChild);
            let e4 = 0;
            for (let n4 of t3) {
              let t4 = this.#e[e4++].getAttribute(`data-resizer-name`);
              c2._l10nPromise.get(`pdfjs-editor-resizer-label-${t4}`).then((e5) => n4.setAttribute(`aria-label`, e5));
            }
          }
          this.#N(0), this.#m = true, this.#i.firstChild.focus({
            focusVisible: true
          }), e3.preventDefault(), e3.stopImmediatePropagation();
        }
        #A(e3) {
          c2._resizerKeyboardManager.exec(this, e3);
        }
        #j(e3) {
          this.#m && e3.relatedTarget?.parentNode !== this.#i && this.#P();
        }
        #M(e3) {
          this.#l = this.#m ? e3 : ``;
        }
        #N(e3) {
          if (this.#e) for (let t3 of this.#e) t3.tabIndex = e3;
        }
        _resizeWithKeyboard(e3, t3) {
          this.#m && this.#D(this.#l, {
            movementX: e3,
            movementY: t3
          });
        }
        #P() {
          if (this.#m = false, this.#N(-1), this.#a) {
            let { savedX: e3, savedY: t3, savedWidth: n3, savedHeight: r3 } = this.#a;
            this.#E(e3, t3, n3, r3), this.#a = null;
          }
        }
        _stopResizingWithKeyboard() {
          this.#P(), this.div.focus();
        }
        select() {
          if (this.makeResizable(), this.div?.classList.add(`selectedEditor`), !this.#c) {
            this.addEditToolbar().then(() => {
              this.div?.classList.contains(`selectedEditor`) && this.#c?.show();
            });
            return;
          }
          this.#c?.show();
        }
        unselect() {
          this.#i?.classList.add(`hidden`), this.div?.classList.remove(`selectedEditor`), this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
            preventScroll: true
          }), this.#c?.hide();
        }
        updateParams(e3, t3) {
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
          return this.#f;
        }
        set isEditing(e3) {
          this.#f = e3, this.parent && (e3 ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
        }
        setAspectRatio(e3, t3) {
          this.#r = true;
          let n3 = e3 / t3, { style: r3 } = this.div;
          r3.aspectRatio = n3, r3.height = `auto`;
        }
        static get MIN_SIZE() {
          return 16;
        }
        static canCreateNewEmptyEditor() {
          return true;
        }
        get telemetryInitialData() {
          return {
            action: `added`
          };
        }
        get telemetryFinalData() {
          return null;
        }
        _reportTelemetry(e3, t3 = false) {
          if (t3) {
            this.#v ||= /* @__PURE__ */ new Map();
            let { action: t4 } = e3, n3 = this.#v.get(t4);
            n3 && clearTimeout(n3), n3 = setTimeout(() => {
              this._reportTelemetry(e3), this.#v.delete(t4), this.#v.size === 0 && (this.#v = null);
            }, c2._telemetryTimeout), this.#v.set(t4, n3);
            return;
          }
          e3.type ||= this.editorType, this._uiManager._eventBus.dispatch(`reporttelemetry`, {
            source: this,
            details: {
              type: `editing`,
              data: e3
            }
          });
        }
        show(e3 = this._isVisible) {
          this.div.classList.toggle(`hidden`, !e3), this._isVisible = e3;
        }
        enable() {
          this.div && (this.div.tabIndex = 0), this.#n = false;
        }
        disable() {
          this.div && (this.div.tabIndex = -1), this.#n = true;
        }
        renderAnnotationElement(e3) {
          let t3 = e3.container.querySelector(`.annotationContent`);
          if (!t3) t3 = document.createElement(`div`), t3.classList.add(`annotationContent`, this.editorType), e3.container.prepend(t3);
          else if (t3.nodeName === `CANVAS`) {
            let e4 = t3;
            t3 = document.createElement(`div`), t3.classList.add(`annotationContent`, this.editorType), e4.before(t3);
          }
          return t3;
        }
        resetAnnotationElement(e3) {
          let { firstChild: t3 } = e3.container;
          t3.nodeName === `DIV` && t3.classList.contains(`annotationContent`) && t3.remove();
        }
      }
      class l2 extends c2 {
        constructor(e3) {
          super(e3), this.annotationElementId = e3.annotationElementId, this.deleted = true;
        }
        serialize() {
          return {
            id: this.annotationElementId,
            deleted: true,
            pageIndex: this.pageIndex
          };
        }
      }
    }),
    61: ((e2, t2, n2) => {
      n2.d(t2, {
        FreeOutliner: () => s2,
        Outliner: () => i2
      });
      var r2 = n2(292);
      class i2 {
        #e;
        #t = [];
        #n = [];
        constructor(e3, t3 = 0, n3 = 0, r3 = true) {
          let i3 = 1 / 0, a3 = -1 / 0, o3 = 1 / 0, s3 = -1 / 0, c3 = 10 ** -4;
          for (let { x: n4, y: r4, width: l3, height: u3 } of e3) {
            let e4 = Math.floor((n4 - t3) / c3) * c3, d3 = Math.ceil((n4 + l3 + t3) / c3) * c3, f3 = Math.floor((r4 - t3) / c3) * c3, p3 = Math.ceil((r4 + u3 + t3) / c3) * c3, m3 = [
              e4,
              f3,
              p3,
              true
            ], h2 = [
              d3,
              f3,
              p3,
              false
            ];
            this.#t.push(m3, h2), i3 = Math.min(i3, e4), a3 = Math.max(a3, d3), o3 = Math.min(o3, f3), s3 = Math.max(s3, p3);
          }
          let l2 = a3 - i3 + 2 * n3, u2 = s3 - o3 + 2 * n3, d2 = i3 - n3, f2 = o3 - n3, p2 = this.#t.at(r3 ? -1 : -2), m2 = [
            p2[0],
            p2[2]
          ];
          for (let e4 of this.#t) {
            let [t4, n4, r4] = e4;
            e4[0] = (t4 - d2) / l2, e4[1] = (n4 - f2) / u2, e4[2] = (r4 - f2) / u2;
          }
          this.#e = {
            x: d2,
            y: f2,
            width: l2,
            height: u2,
            lastPoint: m2
          };
        }
        getOutlines() {
          this.#t.sort((e4, t3) => e4[0] - t3[0] || e4[1] - t3[1] || e4[2] - t3[2]);
          let e3 = [];
          for (let t3 of this.#t) t3[3] ? (e3.push(...this.#s(t3)), this.#a(t3)) : (this.#o(t3), e3.push(...this.#s(t3)));
          return this.#r(e3);
        }
        #r(e3) {
          let t3 = [], n3 = /* @__PURE__ */ new Set();
          for (let n4 of e3) {
            let [e4, r4, i4] = n4;
            t3.push([
              e4,
              r4,
              n4
            ], [
              e4,
              i4,
              n4
            ]);
          }
          t3.sort((e4, t4) => e4[1] - t4[1] || e4[0] - t4[0]);
          for (let e4 = 0, r4 = t3.length; e4 < r4; e4 += 2) {
            let r5 = t3[e4][2], i4 = t3[e4 + 1][2];
            r5.push(i4), i4.push(r5), n3.add(r5), n3.add(i4);
          }
          let r3 = [], i3;
          for (; n3.size > 0; ) {
            let e4 = n3.values().next().value, [t4, a3, o3, s3, c3] = e4;
            n3.delete(e4);
            let l2 = t4, u2 = a3;
            for (i3 = [
              t4,
              o3
            ], r3.push(i3); ; ) {
              let e5;
              if (n3.has(s3)) e5 = s3;
              else if (n3.has(c3)) e5 = c3;
              else break;
              n3.delete(e5), [t4, a3, o3, s3, c3] = e5, l2 !== t4 && (i3.push(l2, u2, t4, u2 === a3 ? a3 : o3), l2 = t4), u2 = u2 === a3 ? o3 : a3;
            }
            i3.push(l2, u2);
          }
          return new o2(r3, this.#e);
        }
        #i(e3) {
          let t3 = this.#n, n3 = 0, r3 = t3.length - 1;
          for (; n3 <= r3; ) {
            let i3 = n3 + r3 >> 1, a3 = t3[i3][0];
            if (a3 === e3) return i3;
            a3 < e3 ? n3 = i3 + 1 : r3 = i3 - 1;
          }
          return r3 + 1;
        }
        #a([, e3, t3]) {
          let n3 = this.#i(e3);
          this.#n.splice(n3, 0, [
            e3,
            t3
          ]);
        }
        #o([, e3, t3]) {
          let n3 = this.#i(e3);
          for (let r3 = n3; r3 < this.#n.length; r3++) {
            let [n4, i3] = this.#n[r3];
            if (n4 !== e3) break;
            if (n4 === e3 && i3 === t3) {
              this.#n.splice(r3, 1);
              return;
            }
          }
          for (let r3 = n3 - 1; r3 >= 0; r3--) {
            let [n4, i3] = this.#n[r3];
            if (n4 !== e3) break;
            if (n4 === e3 && i3 === t3) {
              this.#n.splice(r3, 1);
              return;
            }
          }
        }
        #s(e3) {
          let [t3, n3, r3] = e3, i3 = [
            [
              t3,
              n3,
              r3
            ]
          ], a3 = this.#i(r3);
          for (let e4 = 0; e4 < a3; e4++) {
            let [n4, r4] = this.#n[e4];
            for (let e5 = 0, a4 = i3.length; e5 < a4; e5++) {
              let [, o3, s3] = i3[e5];
              if (!(r4 <= o3 || s3 <= n4)) {
                if (o3 >= n4) {
                  if (s3 > r4) i3[e5][1] = r4;
                  else {
                    if (a4 === 1) return [];
                    i3.splice(e5, 1), e5--, a4--;
                  }
                  continue;
                }
                i3[e5][2] = n4, s3 > r4 && i3.push([
                  t3,
                  r4,
                  s3
                ]);
              }
            }
          }
          return i3;
        }
      }
      class a2 {
        toSVGPath() {
          throw Error("Abstract method `toSVGPath` must be implemented.");
        }
        get box() {
          throw Error("Abstract getter `box` must be implemented.");
        }
        serialize(e3, t3) {
          throw Error("Abstract method `serialize` must be implemented.");
        }
        get free() {
          return this instanceof c2;
        }
      }
      class o2 extends a2 {
        #e;
        #t;
        constructor(e3, t3) {
          super(), this.#t = e3, this.#e = t3;
        }
        toSVGPath() {
          let e3 = [];
          for (let t3 of this.#t) {
            let [n3, r3] = t3;
            e3.push(`M${n3} ${r3}`);
            for (let i3 = 2; i3 < t3.length; i3 += 2) {
              let a3 = t3[i3], o3 = t3[i3 + 1];
              a3 === n3 ? (e3.push(`V${o3}`), r3 = o3) : o3 === r3 && (e3.push(`H${a3}`), n3 = a3);
            }
            e3.push(`Z`);
          }
          return e3.join(` `);
        }
        serialize([e3, t3, n3, r3], i3) {
          let a3 = [], o3 = n3 - e3, s3 = r3 - t3;
          for (let t4 of this.#t) {
            let n4 = Array(t4.length);
            for (let i4 = 0; i4 < t4.length; i4 += 2) n4[i4] = e3 + t4[i4] * o3, n4[i4 + 1] = r3 - t4[i4 + 1] * s3;
            a3.push(n4);
          }
          return a3;
        }
        get box() {
          return this.#e;
        }
      }
      class s2 {
        #e;
        #t = [];
        #n;
        #r;
        #i = [];
        #a = new Float64Array(18);
        #o;
        #s;
        #c;
        #l;
        #u;
        #d;
        #f = [];
        static #p = 8;
        static #m = 2;
        static #h = s2.#p + s2.#m;
        constructor({ x: e3, y: t3 }, n3, r3, i3, a3, o3 = 0) {
          this.#e = n3, this.#d = i3 * r3, this.#r = a3, this.#a.set([
            NaN,
            NaN,
            NaN,
            NaN,
            e3,
            t3
          ], 6), this.#n = o3, this.#l = s2.#p * r3, this.#c = s2.#h * r3, this.#u = r3, this.#f.push(e3, t3);
        }
        get free() {
          return true;
        }
        isEmpty() {
          return isNaN(this.#a[8]);
        }
        #g() {
          let e3 = this.#a.subarray(4, 6), t3 = this.#a.subarray(16, 18), [n3, r3, i3, a3] = this.#e;
          return [
            (this.#o + (e3[0] - t3[0]) / 2 - n3) / i3,
            (this.#s + (e3[1] - t3[1]) / 2 - r3) / a3,
            (this.#o + (t3[0] - e3[0]) / 2 - n3) / i3,
            (this.#s + (t3[1] - e3[1]) / 2 - r3) / a3
          ];
        }
        add({ x: e3, y: t3 }) {
          this.#o = e3, this.#s = t3;
          let [n3, r3, i3, a3] = this.#e, [o3, s3, c3, l2] = this.#a.subarray(8, 12), u2 = e3 - c3, d2 = t3 - l2, f2 = Math.hypot(u2, d2);
          if (f2 < this.#c) return false;
          let p2 = f2 - this.#l, m2 = p2 / f2, h2 = m2 * u2, g2 = m2 * d2, _2 = o3, v2 = s3;
          o3 = c3, s3 = l2, c3 += h2, l2 += g2, this.#f?.push(e3, t3);
          let y2 = -g2 / p2, b2 = h2 / p2, x2 = y2 * this.#d, S2 = b2 * this.#d;
          return this.#a.set(this.#a.subarray(2, 8), 0), this.#a.set([
            c3 + x2,
            l2 + S2
          ], 4), this.#a.set(this.#a.subarray(14, 18), 12), this.#a.set([
            c3 - x2,
            l2 - S2
          ], 16), isNaN(this.#a[6]) ? (this.#i.length === 0 && (this.#a.set([
            o3 + x2,
            s3 + S2
          ], 2), this.#i.push(NaN, NaN, NaN, NaN, (o3 + x2 - n3) / i3, (s3 + S2 - r3) / a3), this.#a.set([
            o3 - x2,
            s3 - S2
          ], 14), this.#t.push(NaN, NaN, NaN, NaN, (o3 - x2 - n3) / i3, (s3 - S2 - r3) / a3)), this.#a.set([
            _2,
            v2,
            o3,
            s3,
            c3,
            l2
          ], 6), !this.isEmpty()) : (this.#a.set([
            _2,
            v2,
            o3,
            s3,
            c3,
            l2
          ], 6), Math.abs(Math.atan2(v2 - s3, _2 - o3) - Math.atan2(g2, h2)) < Math.PI / 2 ? ([o3, s3, c3, l2] = this.#a.subarray(2, 6), this.#i.push(NaN, NaN, NaN, NaN, ((o3 + c3) / 2 - n3) / i3, ((s3 + l2) / 2 - r3) / a3), [o3, s3, _2, v2] = this.#a.subarray(14, 18), this.#t.push(NaN, NaN, NaN, NaN, ((_2 + o3) / 2 - n3) / i3, ((v2 + s3) / 2 - r3) / a3), true) : ([_2, v2, o3, s3, c3, l2] = this.#a.subarray(0, 6), this.#i.push(((_2 + 5 * o3) / 6 - n3) / i3, ((v2 + 5 * s3) / 6 - r3) / a3, ((5 * o3 + c3) / 6 - n3) / i3, ((5 * s3 + l2) / 6 - r3) / a3, ((o3 + c3) / 2 - n3) / i3, ((s3 + l2) / 2 - r3) / a3), [c3, l2, o3, s3, _2, v2] = this.#a.subarray(12, 18), this.#t.push(((_2 + 5 * o3) / 6 - n3) / i3, ((v2 + 5 * s3) / 6 - r3) / a3, ((5 * o3 + c3) / 6 - n3) / i3, ((5 * s3 + l2) / 6 - r3) / a3, ((o3 + c3) / 2 - n3) / i3, ((s3 + l2) / 2 - r3) / a3), true));
        }
        toSVGPath() {
          if (this.isEmpty()) return ``;
          let e3 = this.#i, t3 = this.#t, n3 = this.#a.subarray(4, 6), r3 = this.#a.subarray(16, 18), [i3, a3, o3, s3] = this.#e, [c3, l2, u2, d2] = this.#g();
          if (isNaN(this.#a[6]) && !this.isEmpty()) return `M${(this.#a[2] - i3) / o3} ${(this.#a[3] - a3) / s3} L${(this.#a[4] - i3) / o3} ${(this.#a[5] - a3) / s3} L${c3} ${l2} L${u2} ${d2} L${(this.#a[16] - i3) / o3} ${(this.#a[17] - a3) / s3} L${(this.#a[14] - i3) / o3} ${(this.#a[15] - a3) / s3} Z`;
          let f2 = [];
          f2.push(`M${e3[4]} ${e3[5]}`);
          for (let t4 = 6; t4 < e3.length; t4 += 6) isNaN(e3[t4]) ? f2.push(`L${e3[t4 + 4]} ${e3[t4 + 5]}`) : f2.push(`C${e3[t4]} ${e3[t4 + 1]} ${e3[t4 + 2]} ${e3[t4 + 3]} ${e3[t4 + 4]} ${e3[t4 + 5]}`);
          f2.push(`L${(n3[0] - i3) / o3} ${(n3[1] - a3) / s3} L${c3} ${l2} L${u2} ${d2} L${(r3[0] - i3) / o3} ${(r3[1] - a3) / s3}`);
          for (let e4 = t3.length - 6; e4 >= 6; e4 -= 6) isNaN(t3[e4]) ? f2.push(`L${t3[e4 + 4]} ${t3[e4 + 5]}`) : f2.push(`C${t3[e4]} ${t3[e4 + 1]} ${t3[e4 + 2]} ${t3[e4 + 3]} ${t3[e4 + 4]} ${t3[e4 + 5]}`);
          return f2.push(`L${t3[4]} ${t3[5]} Z`), f2.join(` `);
        }
        getOutlines() {
          let e3 = this.#i, t3 = this.#t, n3 = this.#a, r3 = n3.subarray(4, 6), i3 = n3.subarray(16, 18), [a3, o3, s3, l2] = this.#e, u2 = new Float64Array((this.#f?.length ?? 0) + 2);
          for (let e4 = 0, t4 = u2.length - 2; e4 < t4; e4 += 2) u2[e4] = (this.#f[e4] - a3) / s3, u2[e4 + 1] = (this.#f[e4 + 1] - o3) / l2;
          u2[u2.length - 2] = (this.#o - a3) / s3, u2[u2.length - 1] = (this.#s - o3) / l2;
          let [d2, f2, p2, m2] = this.#g();
          if (isNaN(n3[6]) && !this.isEmpty()) {
            let e4 = new Float64Array(36);
            return e4.set([
              NaN,
              NaN,
              NaN,
              NaN,
              (n3[2] - a3) / s3,
              (n3[3] - o3) / l2,
              NaN,
              NaN,
              NaN,
              NaN,
              (n3[4] - a3) / s3,
              (n3[5] - o3) / l2,
              NaN,
              NaN,
              NaN,
              NaN,
              d2,
              f2,
              NaN,
              NaN,
              NaN,
              NaN,
              p2,
              m2,
              NaN,
              NaN,
              NaN,
              NaN,
              (n3[16] - a3) / s3,
              (n3[17] - o3) / l2,
              NaN,
              NaN,
              NaN,
              NaN,
              (n3[14] - a3) / s3,
              (n3[15] - o3) / l2
            ], 0), new c2(e4, u2, this.#e, this.#u, this.#n, this.#r);
          }
          let h2 = new Float64Array(this.#i.length + 24 + this.#t.length), g2 = e3.length;
          for (let t4 = 0; t4 < g2; t4 += 2) {
            if (isNaN(e3[t4])) {
              h2[t4] = h2[t4 + 1] = NaN;
              continue;
            }
            h2[t4] = e3[t4], h2[t4 + 1] = e3[t4 + 1];
          }
          h2.set([
            NaN,
            NaN,
            NaN,
            NaN,
            (r3[0] - a3) / s3,
            (r3[1] - o3) / l2,
            NaN,
            NaN,
            NaN,
            NaN,
            d2,
            f2,
            NaN,
            NaN,
            NaN,
            NaN,
            p2,
            m2,
            NaN,
            NaN,
            NaN,
            NaN,
            (i3[0] - a3) / s3,
            (i3[1] - o3) / l2
          ], g2), g2 += 24;
          for (let e4 = t3.length - 6; e4 >= 6; e4 -= 6) for (let n4 = 0; n4 < 6; n4 += 2) {
            if (isNaN(t3[e4 + n4])) {
              h2[g2] = h2[g2 + 1] = NaN, g2 += 2;
              continue;
            }
            h2[g2] = t3[e4 + n4], h2[g2 + 1] = t3[e4 + n4 + 1], g2 += 2;
          }
          return h2.set([
            NaN,
            NaN,
            NaN,
            NaN,
            t3[4],
            t3[5]
          ], g2), new c2(h2, u2, this.#e, this.#u, this.#n, this.#r);
        }
      }
      class c2 extends a2 {
        #e;
        #t = null;
        #n;
        #r;
        #i;
        #a;
        #o;
        constructor(e3, t3, n3, r3, i3, a3) {
          super(), this.#o = e3, this.#i = t3, this.#e = n3, this.#a = r3, this.#n = i3, this.#r = a3, this.#l(a3);
          let { x: o3, y: s3, width: c3, height: l2 } = this.#t;
          for (let t4 = 0, n4 = e3.length; t4 < n4; t4 += 2) e3[t4] = (e3[t4] - o3) / c3, e3[t4 + 1] = (e3[t4 + 1] - s3) / l2;
          for (let e4 = 0, n4 = t3.length; e4 < n4; e4 += 2) t3[e4] = (t3[e4] - o3) / c3, t3[e4 + 1] = (t3[e4 + 1] - s3) / l2;
        }
        toSVGPath() {
          let e3 = [
            `M${this.#o[4]} ${this.#o[5]}`
          ];
          for (let t3 = 6, n3 = this.#o.length; t3 < n3; t3 += 6) {
            if (isNaN(this.#o[t3])) {
              e3.push(`L${this.#o[t3 + 4]} ${this.#o[t3 + 5]}`);
              continue;
            }
            e3.push(`C${this.#o[t3]} ${this.#o[t3 + 1]} ${this.#o[t3 + 2]} ${this.#o[t3 + 3]} ${this.#o[t3 + 4]} ${this.#o[t3 + 5]}`);
          }
          return e3.push(`Z`), e3.join(` `);
        }
        serialize([e3, t3, n3, r3], i3) {
          let a3 = n3 - e3, o3 = r3 - t3, s3, c3;
          switch (i3) {
            case 0:
              s3 = this.#s(this.#o, e3, r3, a3, -o3), c3 = this.#s(this.#i, e3, r3, a3, -o3);
              break;
            case 90:
              s3 = this.#c(this.#o, e3, t3, a3, o3), c3 = this.#c(this.#i, e3, t3, a3, o3);
              break;
            case 180:
              s3 = this.#s(this.#o, n3, t3, -a3, o3), c3 = this.#s(this.#i, n3, t3, -a3, o3);
              break;
            case 270:
              s3 = this.#c(this.#o, n3, r3, -a3, -o3), c3 = this.#c(this.#i, n3, r3, -a3, -o3);
              break;
          }
          return {
            outline: Array.from(s3),
            points: [
              Array.from(c3)
            ]
          };
        }
        #s(e3, t3, n3, r3, i3) {
          let a3 = new Float64Array(e3.length);
          for (let o3 = 0, s3 = e3.length; o3 < s3; o3 += 2) a3[o3] = t3 + e3[o3] * r3, a3[o3 + 1] = n3 + e3[o3 + 1] * i3;
          return a3;
        }
        #c(e3, t3, n3, r3, i3) {
          let a3 = new Float64Array(e3.length);
          for (let o3 = 0, s3 = e3.length; o3 < s3; o3 += 2) a3[o3] = t3 + e3[o3 + 1] * r3, a3[o3 + 1] = n3 + e3[o3] * i3;
          return a3;
        }
        #l(e3) {
          let t3 = this.#o, n3 = t3[4], i3 = t3[5], a3 = n3, o3 = i3, s3 = n3, c3 = i3, l2 = n3, u2 = i3, d2 = e3 ? Math.max : Math.min;
          for (let e4 = 6, f2 = t3.length; e4 < f2; e4 += 6) {
            if (isNaN(t3[e4])) a3 = Math.min(a3, t3[e4 + 4]), o3 = Math.min(o3, t3[e4 + 5]), s3 = Math.max(s3, t3[e4 + 4]), c3 = Math.max(c3, t3[e4 + 5]), u2 < t3[e4 + 5] ? (l2 = t3[e4 + 4], u2 = t3[e4 + 5]) : u2 === t3[e4 + 5] && (l2 = d2(l2, t3[e4 + 4]));
            else {
              let f3 = r2.Util.bezierBoundingBox(n3, i3, ...t3.slice(e4, e4 + 6));
              a3 = Math.min(a3, f3[0]), o3 = Math.min(o3, f3[1]), s3 = Math.max(s3, f3[2]), c3 = Math.max(c3, f3[3]), u2 < f3[3] ? (l2 = f3[2], u2 = f3[3]) : u2 === f3[3] && (l2 = d2(l2, f3[2]));
            }
            n3 = t3[e4 + 4], i3 = t3[e4 + 5];
          }
          this.#t = {
            x: a3 - this.#n,
            y: o3 - this.#n,
            width: s3 - a3 + 2 * this.#n,
            height: c3 - o3 + 2 * this.#n,
            lastPoint: [
              l2,
              u2
            ]
          };
        }
        get box() {
          return this.#t;
        }
        getNewOutline(e3, t3) {
          let { x: n3, y: r3, width: i3, height: a3 } = this.#t, [o3, c3, l2, u2] = this.#e, d2 = i3 * l2, f2 = a3 * u2, p2 = n3 * l2 + o3, m2 = r3 * u2 + c3, h2 = new s2({
            x: this.#i[0] * d2 + p2,
            y: this.#i[1] * f2 + m2
          }, this.#e, this.#a, e3, this.#r, t3 ?? this.#n);
          for (let e4 = 2; e4 < this.#i.length; e4 += 2) h2.add({
            x: this.#i[e4] * d2 + p2,
            y: this.#i[e4 + 1] * f2 + m2
          });
          return h2.getOutlines();
        }
      }
    }),
    362: ((e2, t2, n2) => {
      n2.d(t2, {
        EditorToolbar: () => i2,
        HighlightToolbar: () => a2
      });
      var r2 = n2(419);
      class i2 {
        #e = null;
        #t = null;
        #n;
        #r = null;
        constructor(e3) {
          this.#n = e3;
        }
        render() {
          let e3 = this.#e = document.createElement(`div`);
          e3.className = `editToolbar`, e3.setAttribute(`role`, `toolbar`), e3.addEventListener(`contextmenu`, r2.noContextMenu), e3.addEventListener(`pointerdown`, i2.#i);
          let t3 = this.#r = document.createElement(`div`);
          t3.className = `buttons`, e3.append(t3);
          let n3 = this.#n.toolbarPosition;
          if (n3) {
            let { style: t4 } = e3;
            t4.insetInlineEnd = `${100 * (this.#n._uiManager.direction === `ltr` ? 1 - n3[0] : n3[0])}%`, t4.top = `calc(${100 * n3[1]}% + var(--editor-toolbar-vert-offset))`;
          }
          return this.#c(), e3;
        }
        static #i(e3) {
          e3.stopPropagation();
        }
        #a(e3) {
          this.#n._focusEventsAllowed = false, e3.preventDefault(), e3.stopPropagation();
        }
        #o(e3) {
          this.#n._focusEventsAllowed = true, e3.preventDefault(), e3.stopPropagation();
        }
        #s(e3) {
          e3.addEventListener(`focusin`, this.#a.bind(this), {
            capture: true
          }), e3.addEventListener(`focusout`, this.#o.bind(this), {
            capture: true
          }), e3.addEventListener(`contextmenu`, r2.noContextMenu);
        }
        hide() {
          this.#e.classList.add(`hidden`), this.#t?.hideDropdown();
        }
        show() {
          this.#e.classList.remove(`hidden`);
        }
        #c() {
          let e3 = document.createElement(`button`);
          e3.className = `delete`, e3.tabIndex = 0, e3.setAttribute(`data-l10n-id`, `pdfjs-editor-remove-${this.#n.editorType}-button`), this.#s(e3), e3.addEventListener(`click`, (e4) => {
            this.#n._uiManager.delete();
          }), this.#r.append(e3);
        }
        get #l() {
          let e3 = document.createElement(`div`);
          return e3.className = `divider`, e3;
        }
        addAltTextButton(e3) {
          this.#s(e3), this.#r.prepend(e3, this.#l);
        }
        addColorPicker(e3) {
          this.#t = e3;
          let t3 = e3.renderButton();
          this.#s(t3), this.#r.prepend(t3, this.#l);
        }
        remove() {
          this.#e.remove(), this.#t?.destroy(), this.#t = null;
        }
      }
      class a2 {
        #e = null;
        #t = null;
        #n;
        constructor(e3) {
          this.#n = e3;
        }
        #r() {
          let e3 = this.#t = document.createElement(`div`);
          e3.className = `editToolbar`, e3.setAttribute(`role`, `toolbar`), e3.addEventListener(`contextmenu`, r2.noContextMenu);
          let t3 = this.#e = document.createElement(`div`);
          return t3.className = `buttons`, e3.append(t3), this.#a(), e3;
        }
        #i(e3, t3) {
          let n3 = 0, r3 = 0;
          for (let i3 of e3) {
            let e4 = i3.y + i3.height;
            if (e4 < n3) continue;
            let a3 = i3.x + (t3 ? i3.width : 0);
            if (e4 > n3) {
              r3 = a3, n3 = e4;
              continue;
            }
            t3 ? a3 > r3 && (r3 = a3) : a3 < r3 && (r3 = a3);
          }
          return [
            t3 ? 1 - r3 : r3,
            n3
          ];
        }
        show(e3, t3, n3) {
          let [r3, i3] = this.#i(t3, n3), { style: a3 } = this.#t ||= this.#r();
          e3.append(this.#t), a3.insetInlineEnd = `${100 * r3}%`, a3.top = `calc(${100 * i3}% + var(--editor-toolbar-vert-offset))`;
        }
        hide() {
          this.#t.remove();
        }
        #a() {
          let e3 = document.createElement(`button`);
          e3.className = `highlightButton`, e3.tabIndex = 0, e3.setAttribute(`data-l10n-id`, `pdfjs-highlight-floating-button1`);
          let t3 = document.createElement(`span`);
          e3.append(t3), t3.className = `visuallyHidden`, t3.setAttribute(`data-l10n-id`, `pdfjs-highlight-floating-button-label`), e3.addEventListener(`contextmenu`, r2.noContextMenu), e3.addEventListener(`click`, () => {
            this.#n.highlightSelection(`floating_button`);
          }), this.#e.append(e3);
        }
      }
    }),
    830: ((e2, t2, n2) => {
      n2.d(t2, {
        AnnotationEditorUIManager: () => p2,
        ColorManager: () => f2,
        KeyboardManager: () => d2,
        bindEvents: () => o2,
        opacityToHex: () => s2
      });
      var r2 = n2(292), i2 = n2(419), a2 = n2(362);
      function o2(e3, t3, n3) {
        for (let r3 of n3) t3.addEventListener(r3, e3[r3].bind(e3));
      }
      function s2(e3) {
        return Math.round(Math.min(255, Math.max(1, 255 * e3))).toString(16).padStart(2, `0`);
      }
      class c2 {
        #e = 0;
        constructor() {
        }
        get id() {
          return `${r2.AnnotationEditorPrefix}${this.#e++}`;
        }
      }
      class l2 {
        #e = (0, r2.getUuid)();
        #t = 0;
        #n = null;
        static get _isSVGFittingCanvas() {
          let e3 = new OffscreenCanvas(1, 3).getContext(`2d`), t3 = new Image();
          t3.src = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>`;
          let n3 = t3.decode().then(() => (e3.drawImage(t3, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(e3.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
          return (0, r2.shadow)(this, `_isSVGFittingCanvas`, n3);
        }
        async #r(e3, t3) {
          this.#n ||= /* @__PURE__ */ new Map();
          let n3 = this.#n.get(e3);
          if (n3 === null) return null;
          if (n3?.bitmap) return n3.refCounter += 1, n3;
          try {
            n3 ||= {
              bitmap: null,
              id: `image_${this.#e}_${this.#t++}`,
              refCounter: 0,
              isSvg: false
            };
            let e4;
            if (typeof t3 == `string` ? (n3.url = t3, e4 = await (0, i2.fetchData)(t3, `blob`)) : e4 = n3.file = t3, e4.type === `image/svg+xml`) {
              let t4 = l2._isSVGFittingCanvas, r3 = new FileReader(), i3 = new Image(), a3 = new Promise((e5, a4) => {
                i3.onload = () => {
                  n3.bitmap = i3, n3.isSvg = true, e5();
                }, r3.onload = async () => {
                  let e6 = n3.svgUrl = r3.result;
                  i3.src = await t4 ? `${e6}#svgView(preserveAspectRatio(none))` : e6;
                }, i3.onerror = r3.onerror = a4;
              });
              r3.readAsDataURL(e4), await a3;
            } else n3.bitmap = await createImageBitmap(e4);
            n3.refCounter = 1;
          } catch (e4) {
            console.error(e4), n3 = null;
          }
          return this.#n.set(e3, n3), n3 && this.#n.set(n3.id, n3), n3;
        }
        async getFromFile(e3) {
          let { lastModified: t3, name: n3, size: r3, type: i3 } = e3;
          return this.#r(`${t3}_${n3}_${r3}_${i3}`, e3);
        }
        async getFromUrl(e3) {
          return this.#r(e3, e3);
        }
        async getFromId(e3) {
          this.#n ||= /* @__PURE__ */ new Map();
          let t3 = this.#n.get(e3);
          return t3 ? t3.bitmap ? (t3.refCounter += 1, t3) : t3.file ? this.getFromFile(t3.file) : this.getFromUrl(t3.url) : null;
        }
        getSvgUrl(e3) {
          let t3 = this.#n.get(e3);
          return t3?.isSvg ? t3.svgUrl : null;
        }
        deleteId(e3) {
          this.#n ||= /* @__PURE__ */ new Map();
          let t3 = this.#n.get(e3);
          t3 && (--t3.refCounter, t3.refCounter === 0 && (t3.bitmap = null));
        }
        isValidId(e3) {
          return e3.startsWith(`image_${this.#e}_`);
        }
      }
      class u2 {
        #e = [];
        #t = false;
        #n;
        #r = -1;
        constructor(e3 = 128) {
          this.#n = e3;
        }
        add({ cmd: e3, undo: t3, post: n3, mustExec: r3, type: i3 = NaN, overwriteIfSameType: a3 = false, keepUndo: o3 = false }) {
          if (r3 && e3(), this.#t) return;
          let s3 = {
            cmd: e3,
            undo: t3,
            post: n3,
            type: i3
          };
          if (this.#r === -1) {
            this.#e.length > 0 && (this.#e.length = 0), this.#r = 0, this.#e.push(s3);
            return;
          }
          if (a3 && this.#e[this.#r].type === i3) {
            o3 && (s3.undo = this.#e[this.#r].undo), this.#e[this.#r] = s3;
            return;
          }
          let c3 = this.#r + 1;
          c3 === this.#n ? this.#e.splice(0, 1) : (this.#r = c3, c3 < this.#e.length && this.#e.splice(c3)), this.#e.push(s3);
        }
        undo() {
          if (this.#r === -1) return;
          this.#t = true;
          let { undo: e3, post: t3 } = this.#e[this.#r];
          e3(), t3?.(), this.#t = false, --this.#r;
        }
        redo() {
          if (this.#r < this.#e.length - 1) {
            this.#r += 1, this.#t = true;
            let { cmd: e3, post: t3 } = this.#e[this.#r];
            e3(), t3?.(), this.#t = false;
          }
        }
        hasSomethingToUndo() {
          return this.#r !== -1;
        }
        hasSomethingToRedo() {
          return this.#r < this.#e.length - 1;
        }
        destroy() {
          this.#e = null;
        }
      }
      class d2 {
        constructor(e3) {
          this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
          let { isMac: t3 } = r2.FeatureTest.platform;
          for (let [n3, r3, i3 = {}] of e3) for (let e4 of n3) {
            let n4 = e4.startsWith(`mac+`);
            t3 && n4 ? (this.callbacks.set(e4.slice(4), {
              callback: r3,
              options: i3
            }), this.allKeys.add(e4.split(`+`).at(-1))) : !t3 && !n4 && (this.callbacks.set(e4, {
              callback: r3,
              options: i3
            }), this.allKeys.add(e4.split(`+`).at(-1)));
          }
        }
        #e(e3) {
          e3.altKey && this.buffer.push(`alt`), e3.ctrlKey && this.buffer.push(`ctrl`), e3.metaKey && this.buffer.push(`meta`), e3.shiftKey && this.buffer.push(`shift`), this.buffer.push(e3.key);
          let t3 = this.buffer.join(`+`);
          return this.buffer.length = 0, t3;
        }
        exec(e3, t3) {
          if (!this.allKeys.has(t3.key)) return;
          let n3 = this.callbacks.get(this.#e(t3));
          if (!n3) return;
          let { callback: r3, options: { bubbles: i3 = false, args: a3 = [], checker: o3 = null } } = n3;
          o3 && !o3(e3, t3) || (r3.bind(e3, ...a3, t3)(), i3 || (t3.stopPropagation(), t3.preventDefault()));
        }
      }
      class f2 {
        static _colorsMapping = /* @__PURE__ */ new Map([
          [
            `CanvasText`,
            [
              0,
              0,
              0
            ]
          ],
          [
            `Canvas`,
            [
              255,
              255,
              255
            ]
          ]
        ]);
        get _colors() {
          let e3 = /* @__PURE__ */ new Map([
            [
              `CanvasText`,
              null
            ],
            [
              `Canvas`,
              null
            ]
          ]);
          return (0, i2.getColorValues)(e3), (0, r2.shadow)(this, `_colors`, e3);
        }
        convert(e3) {
          let t3 = (0, i2.getRGB)(e3);
          if (!window.matchMedia(`(forced-colors: active)`).matches) return t3;
          for (let [e4, n3] of this._colors) if (n3.every((e5, n4) => e5 === t3[n4])) return f2._colorsMapping.get(e4);
          return t3;
        }
        getHexCode(e3) {
          let t3 = this._colors.get(e3);
          return t3 ? r2.Util.makeHexColor(...t3) : e3;
        }
      }
      class p2 {
        #e = null;
        #t = /* @__PURE__ */ new Map();
        #n = /* @__PURE__ */ new Map();
        #r = null;
        #i = null;
        #a = null;
        #o = new u2();
        #s = 0;
        #c = /* @__PURE__ */ new Set();
        #l = null;
        #u = null;
        #d = /* @__PURE__ */ new Set();
        #f = false;
        #p = null;
        #m = null;
        #h = null;
        #g = false;
        #_ = null;
        #v = new c2();
        #y = false;
        #b = false;
        #x = null;
        #S = null;
        #C = null;
        #w = r2.AnnotationEditorType.NONE;
        #T = /* @__PURE__ */ new Set();
        #E = null;
        #D = null;
        #O = null;
        #k = this.blur.bind(this);
        #A = this.focus.bind(this);
        #j = this.copy.bind(this);
        #M = this.cut.bind(this);
        #N = this.paste.bind(this);
        #P = this.keydown.bind(this);
        #F = this.keyup.bind(this);
        #I = this.onEditingAction.bind(this);
        #L = this.onPageChanging.bind(this);
        #R = this.onScaleChanging.bind(this);
        #z = this.#J.bind(this);
        #B = this.onRotationChanging.bind(this);
        #V = {
          isEditing: false,
          isEmpty: true,
          hasSomethingToUndo: false,
          hasSomethingToRedo: false,
          hasSelectedEditor: false,
          hasSelectedText: false
        };
        #H = [
          0,
          0
        ];
        #U = null;
        #W = null;
        #G = null;
        static TRANSLATE_SMALL = 1;
        static TRANSLATE_BIG = 10;
        static get _keyboardManager() {
          let e3 = p2.prototype, t3 = (e4) => e4.#W.contains(document.activeElement) && document.activeElement.tagName !== `BUTTON` && e4.hasSomethingToControl(), n3 = (e4, { target: t4 }) => {
            if (t4 instanceof HTMLInputElement) {
              let { type: e5 } = t4;
              return e5 !== `text` && e5 !== `number`;
            }
            return true;
          }, i3 = this.TRANSLATE_SMALL, a3 = this.TRANSLATE_BIG;
          return (0, r2.shadow)(this, `_keyboardManager`, new d2([
            [
              [
                `ctrl+a`,
                `mac+meta+a`
              ],
              e3.selectAll,
              {
                checker: n3
              }
            ],
            [
              [
                `ctrl+z`,
                `mac+meta+z`
              ],
              e3.undo,
              {
                checker: n3
              }
            ],
            [
              [
                `ctrl+y`,
                `ctrl+shift+z`,
                `mac+meta+shift+z`,
                `ctrl+shift+Z`,
                `mac+meta+shift+Z`
              ],
              e3.redo,
              {
                checker: n3
              }
            ],
            [
              [
                `Backspace`,
                `alt+Backspace`,
                `ctrl+Backspace`,
                `shift+Backspace`,
                `mac+Backspace`,
                `mac+alt+Backspace`,
                `mac+ctrl+Backspace`,
                `Delete`,
                `ctrl+Delete`,
                `shift+Delete`,
                `mac+Delete`
              ],
              e3.delete,
              {
                checker: n3
              }
            ],
            [
              [
                `Enter`,
                `mac+Enter`
              ],
              e3.addNewEditorFromKeyboard,
              {
                checker: (e4, { target: t4 }) => !(t4 instanceof HTMLButtonElement) && e4.#W.contains(t4) && !e4.isEnterHandled
              }
            ],
            [
              [
                ` `,
                `mac+ `
              ],
              e3.addNewEditorFromKeyboard,
              {
                checker: (e4, { target: t4 }) => !(t4 instanceof HTMLButtonElement) && e4.#W.contains(document.activeElement)
              }
            ],
            [
              [
                `Escape`,
                `mac+Escape`
              ],
              e3.unselectAll
            ],
            [
              [
                `ArrowLeft`,
                `mac+ArrowLeft`
              ],
              e3.translateSelectedEditors,
              {
                args: [
                  -i3,
                  0
                ],
                checker: t3
              }
            ],
            [
              [
                `ctrl+ArrowLeft`,
                `mac+shift+ArrowLeft`
              ],
              e3.translateSelectedEditors,
              {
                args: [
                  -a3,
                  0
                ],
                checker: t3
              }
            ],
            [
              [
                `ArrowRight`,
                `mac+ArrowRight`
              ],
              e3.translateSelectedEditors,
              {
                args: [
                  i3,
                  0
                ],
                checker: t3
              }
            ],
            [
              [
                `ctrl+ArrowRight`,
                `mac+shift+ArrowRight`
              ],
              e3.translateSelectedEditors,
              {
                args: [
                  a3,
                  0
                ],
                checker: t3
              }
            ],
            [
              [
                `ArrowUp`,
                `mac+ArrowUp`
              ],
              e3.translateSelectedEditors,
              {
                args: [
                  0,
                  -i3
                ],
                checker: t3
              }
            ],
            [
              [
                `ctrl+ArrowUp`,
                `mac+shift+ArrowUp`
              ],
              e3.translateSelectedEditors,
              {
                args: [
                  0,
                  -a3
                ],
                checker: t3
              }
            ],
            [
              [
                `ArrowDown`,
                `mac+ArrowDown`
              ],
              e3.translateSelectedEditors,
              {
                args: [
                  0,
                  i3
                ],
                checker: t3
              }
            ],
            [
              [
                `ctrl+ArrowDown`,
                `mac+shift+ArrowDown`
              ],
              e3.translateSelectedEditors,
              {
                args: [
                  0,
                  a3
                ],
                checker: t3
              }
            ]
          ]));
        }
        constructor(e3, t3, n3, r3, a3, o3, s3, c3, l3) {
          this.#W = e3, this.#G = t3, this.#r = n3, this._eventBus = r3, this._eventBus._on(`editingaction`, this.#I), this._eventBus._on(`pagechanging`, this.#L), this._eventBus._on(`scalechanging`, this.#R), this._eventBus._on(`rotationchanging`, this.#B), this.#X(), this.#ee(), this.#i = a3.annotationStorage, this.#p = a3.filterFactory, this.#D = o3, this.#h = s3 || null, this.#f = c3, this.#C = l3 || null, this.viewParameters = {
            realScale: i2.PixelsPerInch.PDF_TO_CSS_UNITS,
            rotation: 0
          }, this.isShiftKeyDown = false;
        }
        destroy() {
          this.#te(), this.#$(), this._eventBus._off(`editingaction`, this.#I), this._eventBus._off(`pagechanging`, this.#L), this._eventBus._off(`scalechanging`, this.#R), this._eventBus._off(`rotationchanging`, this.#B);
          for (let e3 of this.#n.values()) e3.destroy();
          this.#n.clear(), this.#t.clear(), this.#d.clear(), this.#e = null, this.#T.clear(), this.#o.destroy(), this.#r?.destroy(), this.#_?.hide(), this.#_ = null, this.#m &&= (clearTimeout(this.#m), null), this.#U &&= (clearTimeout(this.#U), null), this.#Z();
        }
        async mlGuess(e3) {
          return this.#C?.guess(e3) || null;
        }
        get hasMLManager() {
          return !!this.#C;
        }
        get hcmFilter() {
          return (0, r2.shadow)(this, `hcmFilter`, this.#D ? this.#p.addHCMFilter(this.#D.foreground, this.#D.background) : `none`);
        }
        get direction() {
          return (0, r2.shadow)(this, `direction`, getComputedStyle(this.#W).direction);
        }
        get highlightColors() {
          return (0, r2.shadow)(this, `highlightColors`, this.#h ? new Map(this.#h.split(`,`).map((e3) => e3.split(`=`).map((e4) => e4.trim()))) : null);
        }
        get highlightColorNames() {
          return (0, r2.shadow)(this, `highlightColorNames`, this.highlightColors ? new Map(Array.from(this.highlightColors, (e3) => e3.reverse())) : null);
        }
        setMainHighlightColorPicker(e3) {
          this.#S = e3;
        }
        editAltText(e3) {
          this.#r?.editAltText(this, e3);
        }
        onPageChanging({ pageNumber: e3 }) {
          this.#s = e3 - 1;
        }
        focusMainContainer() {
          this.#W.focus();
        }
        findParent(e3, t3) {
          for (let n3 of this.#n.values()) {
            let { x: r3, y: i3, width: a3, height: o3 } = n3.div.getBoundingClientRect();
            if (e3 >= r3 && e3 <= r3 + a3 && t3 >= i3 && t3 <= i3 + o3) return n3;
          }
          return null;
        }
        disableUserSelect(e3 = false) {
          this.#G.classList.toggle(`noUserSelect`, e3);
        }
        addShouldRescale(e3) {
          this.#d.add(e3);
        }
        removeShouldRescale(e3) {
          this.#d.delete(e3);
        }
        onScaleChanging({ scale: e3 }) {
          this.commitOrRemove(), this.viewParameters.realScale = e3 * i2.PixelsPerInch.PDF_TO_CSS_UNITS;
          for (let e4 of this.#d) e4.onScaleChanging();
        }
        onRotationChanging({ pagesRotation: e3 }) {
          this.commitOrRemove(), this.viewParameters.rotation = e3;
        }
        #K({ anchorNode: e3 }) {
          return e3.nodeType === Node.TEXT_NODE ? e3.parentElement : e3;
        }
        highlightSelection(e3 = ``) {
          let t3 = document.getSelection();
          if (!t3 || t3.isCollapsed) return;
          let { anchorNode: n3, anchorOffset: i3, focusNode: a3, focusOffset: o3 } = t3, s3 = t3.toString(), c3 = this.#K(t3).closest(`.textLayer`), l3 = this.getSelectionBoxes(c3);
          if (l3) {
            t3.empty(), this.#w === r2.AnnotationEditorType.NONE && (this._eventBus.dispatch(`showannotationeditorui`, {
              source: this,
              mode: r2.AnnotationEditorType.HIGHLIGHT
            }), this.showAllEditors(`highlight`, true, true));
            for (let t4 of this.#n.values()) if (t4.hasTextLayer(c3)) {
              t4.createAndAddNewEditor({
                x: 0,
                y: 0
              }, false, {
                methodOfCreation: e3,
                boxes: l3,
                anchorNode: n3,
                anchorOffset: i3,
                focusNode: a3,
                focusOffset: o3,
                text: s3
              });
              break;
            }
          }
        }
        #q() {
          let e3 = document.getSelection();
          if (!e3 || e3.isCollapsed) return;
          let t3 = this.#K(e3).closest(`.textLayer`), n3 = this.getSelectionBoxes(t3);
          n3 && (this.#_ ||= new a2.HighlightToolbar(this), this.#_.show(t3, n3, this.direction === `ltr`));
        }
        addToAnnotationStorage(e3) {
          !e3.isEmpty() && this.#i && !this.#i.has(e3.id) && this.#i.setValue(e3.id, e3);
        }
        #J() {
          let e3 = document.getSelection();
          if (!e3 || e3.isCollapsed) {
            this.#E && (this.#_?.hide(), this.#E = null, this.#ie({
              hasSelectedText: false
            }));
            return;
          }
          let { anchorNode: t3 } = e3;
          if (t3 !== this.#E) {
            if (!this.#K(e3).closest(`.textLayer`)) {
              this.#E && (this.#_?.hide(), this.#E = null, this.#ie({
                hasSelectedText: false
              }));
              return;
            }
            if (this.#_?.hide(), this.#E = t3, this.#ie({
              hasSelectedText: true
            }), !(this.#w !== r2.AnnotationEditorType.HIGHLIGHT && this.#w !== r2.AnnotationEditorType.NONE) && (this.#w === r2.AnnotationEditorType.HIGHLIGHT && this.showAllEditors(`highlight`, true, true), this.#g = this.isShiftKeyDown, !this.isShiftKeyDown)) {
              let e4 = (t4) => {
                t4.type === `pointerup` && t4.button !== 0 || (window.removeEventListener(`pointerup`, e4), window.removeEventListener(`blur`, e4), t4.type === `pointerup` && this.#Y(`main_toolbar`));
              };
              window.addEventListener(`pointerup`, e4), window.addEventListener(`blur`, e4);
            }
          }
        }
        #Y(e3 = ``) {
          this.#w === r2.AnnotationEditorType.HIGHLIGHT ? this.highlightSelection(e3) : this.#f && this.#q();
        }
        #X() {
          document.addEventListener(`selectionchange`, this.#z);
        }
        #Z() {
          document.removeEventListener(`selectionchange`, this.#z);
        }
        #Q() {
          window.addEventListener(`focus`, this.#A), window.addEventListener(`blur`, this.#k);
        }
        #$() {
          window.removeEventListener(`focus`, this.#A), window.removeEventListener(`blur`, this.#k);
        }
        blur() {
          if (this.isShiftKeyDown = false, this.#g && (this.#g = false, this.#Y(`main_toolbar`)), !this.hasSelection) return;
          let { activeElement: e3 } = document;
          for (let t3 of this.#T) if (t3.div.contains(e3)) {
            this.#x = [
              t3,
              e3
            ], t3._focusEventsAllowed = false;
            break;
          }
        }
        focus() {
          if (!this.#x) return;
          let [e3, t3] = this.#x;
          this.#x = null, t3.addEventListener(`focusin`, () => {
            e3._focusEventsAllowed = true;
          }, {
            once: true
          }), t3.focus();
        }
        #ee() {
          window.addEventListener(`keydown`, this.#P), window.addEventListener(`keyup`, this.#F);
        }
        #te() {
          window.removeEventListener(`keydown`, this.#P), window.removeEventListener(`keyup`, this.#F);
        }
        #ne() {
          document.addEventListener(`copy`, this.#j), document.addEventListener(`cut`, this.#M), document.addEventListener(`paste`, this.#N);
        }
        #re() {
          document.removeEventListener(`copy`, this.#j), document.removeEventListener(`cut`, this.#M), document.removeEventListener(`paste`, this.#N);
        }
        addEditListeners() {
          this.#ee(), this.#ne();
        }
        removeEditListeners() {
          this.#te(), this.#re();
        }
        copy(e3) {
          if (e3.preventDefault(), this.#e?.commitOrRemove(), !this.hasSelection) return;
          let t3 = [];
          for (let e4 of this.#T) {
            let n3 = e4.serialize(true);
            n3 && t3.push(n3);
          }
          t3.length !== 0 && e3.clipboardData.setData(`application/pdfjs`, JSON.stringify(t3));
        }
        cut(e3) {
          this.copy(e3), this.delete();
        }
        paste(e3) {
          e3.preventDefault();
          let { clipboardData: t3 } = e3;
          for (let e4 of t3.items) for (let t4 of this.#u) if (t4.isHandlingMimeForPasting(e4.type)) {
            t4.paste(e4, this.currentLayer);
            return;
          }
          let n3 = t3.getData(`application/pdfjs`);
          if (!n3) return;
          try {
            n3 = JSON.parse(n3);
          } catch (e4) {
            (0, r2.warn)(`paste: "${e4.message}".`);
            return;
          }
          if (!Array.isArray(n3)) return;
          this.unselectAll();
          let i3 = this.currentLayer;
          try {
            let e4 = [];
            for (let t4 of n3) {
              let n4 = i3.deserialize(t4);
              if (!n4) return;
              e4.push(n4);
            }
            this.addCommands({
              cmd: () => {
                for (let t4 of e4) this.#ce(t4);
                this.#de(e4);
              },
              undo: () => {
                for (let t4 of e4) t4.remove();
              },
              mustExec: true
            });
          } catch (e4) {
            (0, r2.warn)(`paste: "${e4.message}".`);
          }
        }
        keydown(e3) {
          !this.isShiftKeyDown && e3.key === `Shift` && (this.isShiftKeyDown = true), this.#w !== r2.AnnotationEditorType.NONE && !this.isEditorHandlingKeyboard && p2._keyboardManager.exec(this, e3);
        }
        keyup(e3) {
          this.isShiftKeyDown && e3.key === `Shift` && (this.isShiftKeyDown = false, this.#g && (this.#g = false, this.#Y(`main_toolbar`)));
        }
        onEditingAction({ name: e3 }) {
          switch (e3) {
            case `undo`:
            case `redo`:
            case `delete`:
            case `selectAll`:
              this[e3]();
              break;
            case `highlightSelection`:
              this.highlightSelection(`context_menu`);
              break;
          }
        }
        #ie(e3) {
          Object.entries(e3).some(([e4, t3]) => this.#V[e4] !== t3) && (this._eventBus.dispatch(`annotationeditorstateschanged`, {
            source: this,
            details: Object.assign(this.#V, e3)
          }), this.#w === r2.AnnotationEditorType.HIGHLIGHT && e3.hasSelectedEditor === false && this.#ae([
            [
              r2.AnnotationEditorParamsType.HIGHLIGHT_FREE,
              true
            ]
          ]));
        }
        #ae(e3) {
          this._eventBus.dispatch(`annotationeditorparamschanged`, {
            source: this,
            details: e3
          });
        }
        setEditingState(e3) {
          e3 ? (this.#Q(), this.#ne(), this.#ie({
            isEditing: this.#w !== r2.AnnotationEditorType.NONE,
            isEmpty: this.#ue(),
            hasSomethingToUndo: this.#o.hasSomethingToUndo(),
            hasSomethingToRedo: this.#o.hasSomethingToRedo(),
            hasSelectedEditor: false
          })) : (this.#$(), this.#re(), this.#ie({
            isEditing: false
          }), this.disableUserSelect(false));
        }
        registerEditorTypes(e3) {
          if (!this.#u) {
            this.#u = e3;
            for (let e4 of this.#u) this.#ae(e4.defaultPropertiesToUpdate);
          }
        }
        getId() {
          return this.#v.id;
        }
        get currentLayer() {
          return this.#n.get(this.#s);
        }
        getLayer(e3) {
          return this.#n.get(e3);
        }
        get currentPageIndex() {
          return this.#s;
        }
        addLayer(e3) {
          this.#n.set(e3.pageIndex, e3), this.#y ? e3.enable() : e3.disable();
        }
        removeLayer(e3) {
          this.#n.delete(e3.pageIndex);
        }
        updateMode(e3, t3 = null, n3 = false) {
          if (this.#w !== e3) {
            if (this.#w = e3, e3 === r2.AnnotationEditorType.NONE) {
              this.setEditingState(false), this.#se();
              return;
            }
            this.setEditingState(true), this.#oe(), this.unselectAll();
            for (let t4 of this.#n.values()) t4.updateMode(e3);
            if (!t3 && n3) {
              this.addNewEditorFromKeyboard();
              return;
            }
            if (t3) {
              for (let e4 of this.#t.values()) if (e4.annotationElementId === t3) {
                this.setSelected(e4), e4.enterInEditMode();
                break;
              }
            }
          }
        }
        addNewEditorFromKeyboard() {
          this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
        }
        updateToolbar(e3) {
          e3 !== this.#w && this._eventBus.dispatch(`switchannotationeditormode`, {
            source: this,
            mode: e3
          });
        }
        updateParams(e3, t3) {
          if (this.#u) {
            switch (e3) {
              case r2.AnnotationEditorParamsType.CREATE:
                this.currentLayer.addNewEditor();
                return;
              case r2.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
                this.#S?.updateColor(t3);
                break;
              case r2.AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL:
                this._eventBus.dispatch(`reporttelemetry`, {
                  source: this,
                  details: {
                    type: `editing`,
                    data: {
                      type: `highlight`,
                      action: `toggle_visibility`
                    }
                  }
                }), (this.#O ||= /* @__PURE__ */ new Map()).set(e3, t3), this.showAllEditors(`highlight`, t3);
                break;
            }
            for (let n3 of this.#T) n3.updateParams(e3, t3);
            for (let n3 of this.#u) n3.updateDefaultParams(e3, t3);
          }
        }
        showAllEditors(e3, t3, n3 = false) {
          for (let n4 of this.#t.values()) n4.editorType === e3 && n4.show(t3);
          (this.#O?.get(r2.AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL) ?? true) !== t3 && this.#ae([
            [
              r2.AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL,
              t3
            ]
          ]);
        }
        enableWaiting(e3 = false) {
          if (this.#b !== e3) {
            this.#b = e3;
            for (let t3 of this.#n.values()) e3 ? t3.disableClick() : t3.enableClick(), t3.div.classList.toggle(`waiting`, e3);
          }
        }
        #oe() {
          if (!this.#y) {
            this.#y = true;
            for (let e3 of this.#n.values()) e3.enable();
            for (let e3 of this.#t.values()) e3.enable();
          }
        }
        #se() {
          if (this.unselectAll(), this.#y) {
            this.#y = false;
            for (let e3 of this.#n.values()) e3.disable();
            for (let e3 of this.#t.values()) e3.disable();
          }
        }
        getEditors(e3) {
          let t3 = [];
          for (let n3 of this.#t.values()) n3.pageIndex === e3 && t3.push(n3);
          return t3;
        }
        getEditor(e3) {
          return this.#t.get(e3);
        }
        addEditor(e3) {
          this.#t.set(e3.id, e3);
        }
        removeEditor(e3) {
          e3.div.contains(document.activeElement) && (this.#m && clearTimeout(this.#m), this.#m = setTimeout(() => {
            this.focusMainContainer(), this.#m = null;
          }, 0)), this.#t.delete(e3.id), this.unselect(e3), (!e3.annotationElementId || !this.#c.has(e3.annotationElementId)) && this.#i?.remove(e3.id);
        }
        addDeletedAnnotationElement(e3) {
          this.#c.add(e3.annotationElementId), this.addChangedExistingAnnotation(e3), e3.deleted = true;
        }
        isDeletedAnnotationElement(e3) {
          return this.#c.has(e3);
        }
        removeDeletedAnnotationElement(e3) {
          this.#c.delete(e3.annotationElementId), this.removeChangedExistingAnnotation(e3), e3.deleted = false;
        }
        #ce(e3) {
          let t3 = this.#n.get(e3.pageIndex);
          t3 ? t3.addOrRebuild(e3) : (this.addEditor(e3), this.addToAnnotationStorage(e3));
        }
        setActiveEditor(e3) {
          this.#e !== e3 && (this.#e = e3, e3 && this.#ae(e3.propertiesToUpdate));
        }
        get #le() {
          let e3 = null;
          for (e3 of this.#T) ;
          return e3;
        }
        updateUI(e3) {
          this.#le === e3 && this.#ae(e3.propertiesToUpdate);
        }
        toggleSelected(e3) {
          if (this.#T.has(e3)) {
            this.#T.delete(e3), e3.unselect(), this.#ie({
              hasSelectedEditor: this.hasSelection
            });
            return;
          }
          this.#T.add(e3), e3.select(), this.#ae(e3.propertiesToUpdate), this.#ie({
            hasSelectedEditor: true
          });
        }
        setSelected(e3) {
          for (let t3 of this.#T) t3 !== e3 && t3.unselect();
          this.#T.clear(), this.#T.add(e3), e3.select(), this.#ae(e3.propertiesToUpdate), this.#ie({
            hasSelectedEditor: true
          });
        }
        isSelected(e3) {
          return this.#T.has(e3);
        }
        get firstSelectedEditor() {
          return this.#T.values().next().value;
        }
        unselect(e3) {
          e3.unselect(), this.#T.delete(e3), this.#ie({
            hasSelectedEditor: this.hasSelection
          });
        }
        get hasSelection() {
          return this.#T.size !== 0;
        }
        get isEnterHandled() {
          return this.#T.size === 1 && this.firstSelectedEditor.isEnterHandled;
        }
        undo() {
          this.#o.undo(), this.#ie({
            hasSomethingToUndo: this.#o.hasSomethingToUndo(),
            hasSomethingToRedo: true,
            isEmpty: this.#ue()
          });
        }
        redo() {
          this.#o.redo(), this.#ie({
            hasSomethingToUndo: true,
            hasSomethingToRedo: this.#o.hasSomethingToRedo(),
            isEmpty: this.#ue()
          });
        }
        addCommands(e3) {
          this.#o.add(e3), this.#ie({
            hasSomethingToUndo: true,
            hasSomethingToRedo: false,
            isEmpty: this.#ue()
          });
        }
        #ue() {
          if (this.#t.size === 0) return true;
          if (this.#t.size === 1) for (let e3 of this.#t.values()) return e3.isEmpty();
          return false;
        }
        delete() {
          if (this.commitOrRemove(), !this.hasSelection) return;
          let e3 = [
            ...this.#T
          ];
          this.addCommands({
            cmd: () => {
              for (let t3 of e3) t3.remove();
            },
            undo: () => {
              for (let t3 of e3) this.#ce(t3);
            },
            mustExec: true
          });
        }
        commitOrRemove() {
          this.#e?.commitOrRemove();
        }
        hasSomethingToControl() {
          return this.#e || this.hasSelection;
        }
        #de(e3) {
          for (let e4 of this.#T) e4.unselect();
          this.#T.clear();
          for (let t3 of e3) t3.isEmpty() || (this.#T.add(t3), t3.select());
          this.#ie({
            hasSelectedEditor: this.hasSelection
          });
        }
        selectAll() {
          for (let e3 of this.#T) e3.commit();
          this.#de(this.#t.values());
        }
        unselectAll() {
          if (!(this.#e && (this.#e.commitOrRemove(), this.#w !== r2.AnnotationEditorType.NONE)) && this.hasSelection) {
            for (let e3 of this.#T) e3.unselect();
            this.#T.clear(), this.#ie({
              hasSelectedEditor: false
            });
          }
        }
        translateSelectedEditors(e3, t3, n3 = false) {
          if (n3 || this.commitOrRemove(), !this.hasSelection) return;
          this.#H[0] += e3, this.#H[1] += t3;
          let [r3, i3] = this.#H, a3 = [
            ...this.#T
          ];
          this.#U && clearTimeout(this.#U), this.#U = setTimeout(() => {
            this.#U = null, this.#H[0] = this.#H[1] = 0, this.addCommands({
              cmd: () => {
                for (let e4 of a3) this.#t.has(e4.id) && e4.translateInPage(r3, i3);
              },
              undo: () => {
                for (let e4 of a3) this.#t.has(e4.id) && e4.translateInPage(-r3, -i3);
              },
              mustExec: false
            });
          }, 1e3);
          for (let n4 of a3) n4.translateInPage(e3, t3);
        }
        setUpDragSession() {
          if (this.hasSelection) {
            this.disableUserSelect(true), this.#l = /* @__PURE__ */ new Map();
            for (let e3 of this.#T) this.#l.set(e3, {
              savedX: e3.x,
              savedY: e3.y,
              savedPageIndex: e3.pageIndex,
              newX: 0,
              newY: 0,
              newPageIndex: -1
            });
          }
        }
        endDragSession() {
          if (!this.#l) return false;
          this.disableUserSelect(false);
          let e3 = this.#l;
          this.#l = null;
          let t3 = false;
          for (let [{ x: n4, y: r3, pageIndex: i3 }, a3] of e3) a3.newX = n4, a3.newY = r3, a3.newPageIndex = i3, t3 ||= n4 !== a3.savedX || r3 !== a3.savedY || i3 !== a3.savedPageIndex;
          if (!t3) return false;
          let n3 = (e4, t4, n4, r3) => {
            if (this.#t.has(e4.id)) {
              let i3 = this.#n.get(r3);
              i3 ? e4._setParentAndPosition(i3, t4, n4) : (e4.pageIndex = r3, e4.x = t4, e4.y = n4);
            }
          };
          return this.addCommands({
            cmd: () => {
              for (let [t4, { newX: r3, newY: i3, newPageIndex: a3 }] of e3) n3(t4, r3, i3, a3);
            },
            undo: () => {
              for (let [t4, { savedX: r3, savedY: i3, savedPageIndex: a3 }] of e3) n3(t4, r3, i3, a3);
            },
            mustExec: true
          }), true;
        }
        dragSelectedEditors(e3, t3) {
          if (this.#l) for (let n3 of this.#l.keys()) n3.drag(e3, t3);
        }
        rebuild(e3) {
          if (e3.parent === null) {
            let t3 = this.getLayer(e3.pageIndex);
            t3 ? (t3.changeParent(e3), t3.addOrRebuild(e3)) : (this.addEditor(e3), this.addToAnnotationStorage(e3), e3.rebuild());
          } else e3.parent.addOrRebuild(e3);
        }
        get isEditorHandlingKeyboard() {
          return this.getActive()?.shouldGetKeyboardEvents() || this.#T.size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
        }
        isActive(e3) {
          return this.#e === e3;
        }
        getActive() {
          return this.#e;
        }
        getMode() {
          return this.#w;
        }
        get imageManager() {
          return (0, r2.shadow)(this, `imageManager`, new l2());
        }
        getSelectionBoxes(e3) {
          if (!e3) return null;
          let t3 = document.getSelection();
          for (let n4 = 0, r4 = t3.rangeCount; n4 < r4; n4++) if (!e3.contains(t3.getRangeAt(n4).commonAncestorContainer)) return null;
          let { x: n3, y: r3, width: i3, height: a3 } = e3.getBoundingClientRect(), o3;
          switch (e3.getAttribute(`data-main-rotation`)) {
            case `90`:
              o3 = (e4, t4, o4, s4) => ({
                x: (t4 - r3) / a3,
                y: 1 - (e4 + o4 - n3) / i3,
                width: s4 / a3,
                height: o4 / i3
              });
              break;
            case `180`:
              o3 = (e4, t4, o4, s4) => ({
                x: 1 - (e4 + o4 - n3) / i3,
                y: 1 - (t4 + s4 - r3) / a3,
                width: o4 / i3,
                height: s4 / a3
              });
              break;
            case `270`:
              o3 = (e4, t4, o4, s4) => ({
                x: 1 - (t4 + s4 - r3) / a3,
                y: (e4 - n3) / i3,
                width: s4 / a3,
                height: o4 / i3
              });
              break;
            default:
              o3 = (e4, t4, o4, s4) => ({
                x: (e4 - n3) / i3,
                y: (t4 - r3) / a3,
                width: o4 / i3,
                height: s4 / a3
              });
              break;
          }
          let s3 = [];
          for (let e4 = 0, n4 = t3.rangeCount; e4 < n4; e4++) {
            let n5 = t3.getRangeAt(e4);
            if (!n5.collapsed) for (let { x: e5, y: t4, width: r4, height: i4 } of n5.getClientRects()) r4 === 0 || i4 === 0 || s3.push(o3(e5, t4, r4, i4));
          }
          return s3.length === 0 ? null : s3;
        }
        addChangedExistingAnnotation({ annotationElementId: e3, id: t3 }) {
          (this.#a ||= /* @__PURE__ */ new Map()).set(e3, t3);
        }
        removeChangedExistingAnnotation({ annotationElementId: e3 }) {
          this.#a?.delete(e3);
        }
        renderAnnotationElement(e3) {
          let t3 = this.#a?.get(e3.data.id);
          if (!t3) return;
          let n3 = this.#i.getRawValue(t3);
          n3 && (this.#w === r2.AnnotationEditorType.NONE && !n3.hasBeenModified || n3.renderAnnotationElement(e3));
        }
      }
    }),
    94: ((e2, t2, n2) => {
      n2.d(t2, {
        PDFFetchStream: () => c2
      });
      var r2 = n2(292), i2 = n2(490);
      function a2(e3, t3, n3) {
        return {
          method: `GET`,
          headers: e3,
          signal: n3.signal,
          mode: `cors`,
          credentials: t3 ? `include` : `same-origin`,
          redirect: `follow`
        };
      }
      function o2(e3) {
        let t3 = new Headers();
        for (let n3 in e3) {
          let r3 = e3[n3];
          r3 !== void 0 && t3.append(n3, r3);
        }
        return t3;
      }
      function s2(e3) {
        return e3 instanceof Uint8Array ? e3.buffer : e3 instanceof ArrayBuffer ? e3 : ((0, r2.warn)(`getArrayBuffer - unexpected data format: ${e3}`), new Uint8Array(e3).buffer);
      }
      class c2 {
        constructor(e3) {
          this.source = e3, this.isHttp = /^https?:/i.test(e3.url), this.httpHeaders = this.isHttp && e3.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          return this._fullRequestReader?._loaded ?? 0;
        }
        getFullReader() {
          return (0, r2.assert)(!this._fullRequestReader, `PDFFetchStream.getFullReader can only be called once.`), this._fullRequestReader = new l2(this), this._fullRequestReader;
        }
        getRangeReader(e3, t3) {
          if (t3 <= this._progressiveDataLength) return null;
          let n3 = new u2(this, e3, t3);
          return this._rangeRequestReaders.push(n3), n3;
        }
        cancelAllRequests(e3) {
          this._fullRequestReader?.cancel(e3);
          for (let t3 of this._rangeRequestReaders.slice(0)) t3.cancel(e3);
        }
      }
      class l2 {
        constructor(e3) {
          this._stream = e3, this._reader = null, this._loaded = 0, this._filename = null;
          let t3 = e3.source;
          this._withCredentials = t3.withCredentials || false, this._contentLength = t3.length, this._headersCapability = Promise.withResolvers(), this._disableRange = t3.disableRange || false, this._rangeChunkSize = t3.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._abortController = new AbortController(), this._isStreamingSupported = !t3.disableStream, this._isRangeSupported = !t3.disableRange, this._headers = o2(this._stream.httpHeaders);
          let n3 = t3.url;
          fetch(n3, a2(this._headers, this._withCredentials, this._abortController)).then((e4) => {
            if (!(0, i2.validateResponseStatus)(e4.status)) throw (0, i2.createResponseStatusError)(e4.status, n3);
            this._reader = e4.body.getReader(), this._headersCapability.resolve();
            let t4 = (t5) => e4.headers.get(t5), { allowRangeRequests: a3, suggestedLength: o3 } = (0, i2.validateRangeRequestCapabilities)({
              getResponseHeader: t4,
              isHttp: this._stream.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            });
            this._isRangeSupported = a3, this._contentLength = o3 || this._contentLength, this._filename = (0, i2.extractFilenameFromHeader)(t4), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new r2.AbortException(`Streaming is disabled.`));
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
          await this._headersCapability.promise;
          let { value: e3, done: t3 } = await this._reader.read();
          return t3 ? {
            value: e3,
            done: t3
          } : (this._loaded += e3.byteLength, this.onProgress?.({
            loaded: this._loaded,
            total: this._contentLength
          }), {
            value: s2(e3),
            done: false
          });
        }
        cancel(e3) {
          this._reader?.cancel(e3), this._abortController.abort();
        }
      }
      class u2 {
        constructor(e3, t3, n3) {
          this._stream = e3, this._reader = null, this._loaded = 0;
          let r3 = e3.source;
          this._withCredentials = r3.withCredentials || false, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !r3.disableStream, this._abortController = new AbortController(), this._headers = o2(this._stream.httpHeaders), this._headers.append(`Range`, `bytes=${t3}-${n3 - 1}`);
          let s3 = r3.url;
          fetch(s3, a2(this._headers, this._withCredentials, this._abortController)).then((e4) => {
            if (!(0, i2.validateResponseStatus)(e4.status)) throw (0, i2.createResponseStatusError)(e4.status, s3);
            this._readCapability.resolve(), this._reader = e4.body.getReader();
          }).catch(this._readCapability.reject), this.onProgress = null;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          await this._readCapability.promise;
          let { value: e3, done: t3 } = await this._reader.read();
          return t3 ? {
            value: e3,
            done: t3
          } : (this._loaded += e3.byteLength, this.onProgress?.({
            loaded: this._loaded
          }), {
            value: s2(e3),
            done: false
          });
        }
        cancel(e3) {
          this._reader?.cancel(e3), this._abortController.abort();
        }
      }
    }),
    10: ((e2, t2, n2) => {
      n2.d(t2, {
        FontFaceObject: () => a2,
        FontLoader: () => i2
      });
      var r2 = n2(292);
      class i2 {
        #e = /* @__PURE__ */ new Set();
        constructor({ ownerDocument: e3 = globalThis.document, styleElement: t3 = null }) {
          this._document = e3, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
        }
        addNativeFontFace(e3) {
          this.nativeFontFaces.add(e3), this._document.fonts.add(e3);
        }
        removeNativeFontFace(e3) {
          this.nativeFontFaces.delete(e3), this._document.fonts.delete(e3);
        }
        insertRule(e3) {
          this.styleElement || (this.styleElement = this._document.createElement(`style`), this._document.documentElement.getElementsByTagName(`head`)[0].append(this.styleElement));
          let t3 = this.styleElement.sheet;
          t3.insertRule(e3, t3.cssRules.length);
        }
        clear() {
          for (let e3 of this.nativeFontFaces) this._document.fonts.delete(e3);
          this.nativeFontFaces.clear(), this.#e.clear(), this.styleElement &&= (this.styleElement.remove(), null);
        }
        async loadSystemFont({ systemFontInfo: e3, _inspectFont: t3 }) {
          if (!(!e3 || this.#e.has(e3.loadedName))) {
            if ((0, r2.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
              let { loadedName: n3, src: i3, style: a3 } = e3, o2 = new FontFace(n3, i3, a3);
              this.addNativeFontFace(o2);
              try {
                await o2.load(), this.#e.add(n3), t3?.(e3);
              } catch {
                (0, r2.warn)(`Cannot load system font: ${e3.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o2);
              }
              return;
            }
            (0, r2.unreachable)(`Not implemented: loadSystemFont without the Font Loading API.`);
          }
        }
        async bind(e3) {
          if (e3.attached || e3.missingFile && !e3.systemFontInfo) return;
          if (e3.attached = true, e3.systemFontInfo) {
            await this.loadSystemFont(e3);
            return;
          }
          if (this.isFontLoadingAPISupported) {
            let t4 = e3.createNativeFontFace();
            if (t4) {
              this.addNativeFontFace(t4);
              try {
                await t4.loaded;
              } catch (n3) {
                throw (0, r2.warn)(`Failed to load font '${t4.family}': '${n3}'.`), e3.disableFontFace = true, n3;
              }
            }
            return;
          }
          let t3 = e3.createFontFaceRule();
          if (t3) {
            if (this.insertRule(t3), this.isSyncFontLoadingSupported) return;
            await new Promise((t4) => {
              let n3 = this._queueLoadingCallback(t4);
              this._prepareFontLoadEvent(e3, n3);
            });
          }
        }
        get isFontLoadingAPISupported() {
          let e3 = !!this._document?.fonts;
          return (0, r2.shadow)(this, `isFontLoadingAPISupported`, e3);
        }
        get isSyncFontLoadingSupported() {
          let e3 = false;
          return (r2.isNodeJS || typeof navigator < `u` && typeof navigator?.userAgent == `string` && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (e3 = true), (0, r2.shadow)(this, `isSyncFontLoadingSupported`, e3);
        }
        _queueLoadingCallback(e3) {
          function t3() {
            for ((0, r2.assert)(!i3.done, `completeRequest() cannot be called twice.`), i3.done = true; n3.length > 0 && n3[0].done; ) {
              let e4 = n3.shift();
              setTimeout(e4.callback, 0);
            }
          }
          let { loadingRequests: n3 } = this, i3 = {
            done: false,
            complete: t3,
            callback: e3
          };
          return n3.push(i3), i3;
        }
        get _loadTestFont() {
          let e3 = atob(`T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==`);
          return (0, r2.shadow)(this, `_loadTestFont`, e3);
        }
        _prepareFontLoadEvent(e3, t3) {
          function n3(e4, t4) {
            return e4.charCodeAt(t4) << 24 | e4.charCodeAt(t4 + 1) << 16 | e4.charCodeAt(t4 + 2) << 8 | e4.charCodeAt(t4 + 3) & 255;
          }
          function i3(e4, t4, n4, r3) {
            let i4 = e4.substring(0, t4), a4 = e4.substring(t4 + n4);
            return i4 + r3 + a4;
          }
          let a3, o2, s2 = this._document.createElement(`canvas`);
          s2.width = 1, s2.height = 1;
          let c2 = s2.getContext(`2d`), l2 = 0;
          function u2(e4, t4) {
            if (++l2 > 30) {
              (0, r2.warn)(`Load test font never loaded.`), t4();
              return;
            }
            if (c2.font = `30px ` + e4, c2.fillText(`.`, 0, 20), c2.getImageData(0, 0, 1, 1).data[3] > 0) {
              t4();
              return;
            }
            setTimeout(u2.bind(null, e4, t4));
          }
          let d2 = `lt${Date.now()}${this.loadTestFontId++}`, f2 = this._loadTestFont;
          f2 = i3(f2, 976, d2.length, d2);
          let p2 = 1482184792, m2 = n3(f2, 16);
          for (a3 = 0, o2 = d2.length - 3; a3 < o2; a3 += 4) m2 = m2 - p2 + n3(d2, a3) | 0;
          a3 < d2.length && (m2 = m2 - p2 + n3(d2 + `XXX`, a3) | 0), f2 = i3(f2, 16, 4, (0, r2.string32)(m2));
          let h2 = `@font-face {font-family:"${d2}";src:${`url(data:font/opentype;base64,${btoa(f2)});`}}`;
          this.insertRule(h2);
          let g2 = this._document.createElement(`div`);
          g2.style.visibility = `hidden`, g2.style.width = g2.style.height = `10px`, g2.style.position = `absolute`, g2.style.top = g2.style.left = `0px`;
          for (let t4 of [
            e3.loadedName,
            d2
          ]) {
            let e4 = this._document.createElement(`span`);
            e4.textContent = `Hi`, e4.style.fontFamily = t4, g2.append(e4);
          }
          this._document.body.append(g2), u2(d2, () => {
            g2.remove(), t3.complete();
          });
        }
      }
      class a2 {
        constructor(e3, { disableFontFace: t3 = false, ignoreErrors: n3 = false, inspectFont: r3 = null }) {
          for (let t4 in this.compiledGlyphs = /* @__PURE__ */ Object.create(null), e3) this[t4] = e3[t4];
          this.disableFontFace = t3 === true, this.ignoreErrors = n3 === true, this._inspectFont = r3;
        }
        createNativeFontFace() {
          if (!this.data || this.disableFontFace) return null;
          let e3;
          if (!this.cssFontInfo) e3 = new FontFace(this.loadedName, this.data, {});
          else {
            let t3 = {
              weight: this.cssFontInfo.fontWeight
            };
            this.cssFontInfo.italicAngle && (t3.style = `oblique ${this.cssFontInfo.italicAngle}deg`), e3 = new FontFace(this.cssFontInfo.fontFamily, this.data, t3);
          }
          return this._inspectFont?.(this), e3;
        }
        createFontFaceRule() {
          if (!this.data || this.disableFontFace) return null;
          let e3 = (0, r2.bytesToString)(this.data), t3 = `url(data:${this.mimetype};base64,${btoa(e3)});`, n3;
          if (!this.cssFontInfo) n3 = `@font-face {font-family:"${this.loadedName}";src:${t3}}`;
          else {
            let e4 = `font-weight: ${this.cssFontInfo.fontWeight};`;
            this.cssFontInfo.italicAngle && (e4 += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), n3 = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${e4}src:${t3}}`;
          }
          return this._inspectFont?.(this, t3), n3;
        }
        getPathGenerator(e3, t3) {
          if (this.compiledGlyphs[t3] !== void 0) return this.compiledGlyphs[t3];
          let n3;
          try {
            n3 = e3.get(this.loadedName + `_path_` + t3);
          } catch (e4) {
            if (!this.ignoreErrors) throw e4;
            (0, r2.warn)(`getPathGenerator - ignoring character: "${e4}".`);
          }
          if (!Array.isArray(n3) || n3.length === 0) return this.compiledGlyphs[t3] = function(e4, t4) {
          };
          let i3 = [];
          for (let e4 = 0, t4 = n3.length; e4 < t4; ) switch (n3[e4++]) {
            case r2.FontRenderOps.BEZIER_CURVE_TO:
              {
                let [t5, r3, a3, o2, s2, c2] = n3.slice(e4, e4 + 6);
                i3.push((e5) => e5.bezierCurveTo(t5, r3, a3, o2, s2, c2)), e4 += 6;
              }
              break;
            case r2.FontRenderOps.MOVE_TO:
              {
                let [t5, r3] = n3.slice(e4, e4 + 2);
                i3.push((e5) => e5.moveTo(t5, r3)), e4 += 2;
              }
              break;
            case r2.FontRenderOps.LINE_TO:
              {
                let [t5, r3] = n3.slice(e4, e4 + 2);
                i3.push((e5) => e5.lineTo(t5, r3)), e4 += 2;
              }
              break;
            case r2.FontRenderOps.QUADRATIC_CURVE_TO:
              {
                let [t5, r3, a3, o2] = n3.slice(e4, e4 + 4);
                i3.push((e5) => e5.quadraticCurveTo(t5, r3, a3, o2)), e4 += 4;
              }
              break;
            case r2.FontRenderOps.RESTORE:
              i3.push((e5) => e5.restore());
              break;
            case r2.FontRenderOps.SAVE:
              i3.push((e5) => e5.save());
              break;
            case r2.FontRenderOps.SCALE:
              (0, r2.assert)(i3.length === 2, `Scale command is only valid at the third position.`);
              break;
            case r2.FontRenderOps.TRANSFORM:
              {
                let [t5, r3, a3, o2, s2, c2] = n3.slice(e4, e4 + 6);
                i3.push((e5) => e5.transform(t5, r3, a3, o2, s2, c2)), e4 += 6;
              }
              break;
            case r2.FontRenderOps.TRANSLATE:
              {
                let [t5, r3] = n3.slice(e4, e4 + 2);
                i3.push((e5) => e5.translate(t5, r3)), e4 += 2;
              }
              break;
          }
          return this.compiledGlyphs[t3] = function(e4, t4) {
            i3[0](e4), i3[1](e4), e4.scale(t4, -t4);
            for (let t5 = 2, n4 = i3.length; t5 < n4; t5++) i3[t5](e4);
          };
        }
      }
    }),
    62: ((e2, t2, n2) => {
      n2.d(t2, {
        Metadata: () => i2
      });
      var r2 = n2(292);
      class i2 {
        #e;
        #t;
        constructor({ parsedData: e3, rawData: t3 }) {
          this.#e = e3, this.#t = t3;
        }
        getRaw() {
          return this.#t;
        }
        get(e3) {
          return this.#e.get(e3) ?? null;
        }
        getAll() {
          return (0, r2.objectFromMap)(this.#e);
        }
        has(e3) {
          return this.#e.has(e3);
        }
      }
    }),
    457: ((e2, t2, n2) => {
      n2.d(t2, {
        PDFNetworkStream: () => s2
      });
      var r2 = n2(292), i2 = n2(490);
      function a2(e3) {
        let t3 = e3.response;
        return typeof t3 == `string` ? (0, r2.stringToBytes)(t3).buffer : t3;
      }
      class o2 {
        constructor(e3, t3 = {}) {
          this.url = e3, this.isHttp = /^https?:/i.test(e3), this.httpHeaders = this.isHttp && t3.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = t3.withCredentials || false, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
        }
        requestRange(e3, t3, n3) {
          let r3 = {
            begin: e3,
            end: t3
          };
          for (let e4 in n3) r3[e4] = n3[e4];
          return this.request(r3);
        }
        requestFull(e3) {
          return this.request(e3);
        }
        request(e3) {
          let t3 = new XMLHttpRequest(), n3 = this.currXhrId++, r3 = this.pendingRequests[n3] = {
            xhr: t3
          };
          for (let e4 in t3.open(`GET`, this.url), t3.withCredentials = this.withCredentials, this.httpHeaders) {
            let n4 = this.httpHeaders[e4];
            n4 !== void 0 && t3.setRequestHeader(e4, n4);
          }
          return this.isHttp && `begin` in e3 && `end` in e3 ? (t3.setRequestHeader(`Range`, `bytes=${e3.begin}-${e3.end - 1}`), r3.expectedStatus = 206) : r3.expectedStatus = 200, t3.responseType = `arraybuffer`, e3.onError && (t3.onerror = function(n4) {
            e3.onError(t3.status);
          }), t3.onreadystatechange = this.onStateChange.bind(this, n3), t3.onprogress = this.onProgress.bind(this, n3), r3.onHeadersReceived = e3.onHeadersReceived, r3.onDone = e3.onDone, r3.onError = e3.onError, r3.onProgress = e3.onProgress, t3.send(null), n3;
        }
        onProgress(e3, t3) {
          let n3 = this.pendingRequests[e3];
          n3 && n3.onProgress?.(t3);
        }
        onStateChange(e3, t3) {
          let n3 = this.pendingRequests[e3];
          if (!n3) return;
          let r3 = n3.xhr;
          if (r3.readyState >= 2 && n3.onHeadersReceived && (n3.onHeadersReceived(), delete n3.onHeadersReceived), r3.readyState !== 4 || !(e3 in this.pendingRequests)) return;
          if (delete this.pendingRequests[e3], r3.status === 0 && this.isHttp) {
            n3.onError?.(r3.status);
            return;
          }
          let i3 = r3.status || 200;
          if (!(i3 === 200 && n3.expectedStatus === 206) && i3 !== n3.expectedStatus) {
            n3.onError?.(r3.status);
            return;
          }
          let o3 = a2(r3);
          if (i3 === 206) {
            let e4 = r3.getResponseHeader(`Content-Range`), t4 = /bytes (\d+)-(\d+)\/(\d+)/.exec(e4);
            n3.onDone({
              begin: parseInt(t4[1], 10),
              chunk: o3
            });
          } else o3 ? n3.onDone({
            begin: 0,
            chunk: o3
          }) : n3.onError?.(r3.status);
        }
        getRequestXhr(e3) {
          return this.pendingRequests[e3].xhr;
        }
        isPendingRequest(e3) {
          return e3 in this.pendingRequests;
        }
        abortRequest(e3) {
          let t3 = this.pendingRequests[e3].xhr;
          delete this.pendingRequests[e3], t3.abort();
        }
      }
      class s2 {
        constructor(e3) {
          this._source = e3, this._manager = new o2(e3.url, {
            httpHeaders: e3.httpHeaders,
            withCredentials: e3.withCredentials
          }), this._rangeChunkSize = e3.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        _onRangeRequestReaderClosed(e3) {
          let t3 = this._rangeRequestReaders.indexOf(e3);
          t3 >= 0 && this._rangeRequestReaders.splice(t3, 1);
        }
        getFullReader() {
          return (0, r2.assert)(!this._fullRequestReader, `PDFNetworkStream.getFullReader can only be called once.`), this._fullRequestReader = new c2(this._manager, this._source), this._fullRequestReader;
        }
        getRangeReader(e3, t3) {
          let n3 = new l2(this._manager, e3, t3);
          return n3.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(n3), n3;
        }
        cancelAllRequests(e3) {
          this._fullRequestReader?.cancel(e3);
          for (let t3 of this._rangeRequestReaders.slice(0)) t3.cancel(e3);
        }
      }
      class c2 {
        constructor(e3, t3) {
          this._manager = e3;
          let n3 = {
            onHeadersReceived: this._onHeadersReceived.bind(this),
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._url = t3.url, this._fullRequestId = e3.requestFull(n3), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = t3.disableRange || false, this._contentLength = t3.length, this._rangeChunkSize = t3.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._isStreamingSupported = false, this._isRangeSupported = false, this._cachedChunks = [], this._requests = [], this._done = false, this._storedError = void 0, this._filename = null, this.onProgress = null;
        }
        _onHeadersReceived() {
          let e3 = this._fullRequestId, t3 = this._manager.getRequestXhr(e3), n3 = (e4) => t3.getResponseHeader(e4), { allowRangeRequests: r3, suggestedLength: a3 } = (0, i2.validateRangeRequestCapabilities)({
            getResponseHeader: n3,
            isHttp: this._manager.isHttp,
            rangeChunkSize: this._rangeChunkSize,
            disableRange: this._disableRange
          });
          r3 && (this._isRangeSupported = true), this._contentLength = a3 || this._contentLength, this._filename = (0, i2.extractFilenameFromHeader)(n3), this._isRangeSupported && this._manager.abortRequest(e3), this._headersReceivedCapability.resolve();
        }
        _onDone(e3) {
          if (e3 && (this._requests.length > 0 ? this._requests.shift().resolve({
            value: e3.chunk,
            done: false
          }) : this._cachedChunks.push(e3.chunk)), this._done = true, !(this._cachedChunks.length > 0)) {
            for (let e4 of this._requests) e4.resolve({
              value: void 0,
              done: true
            });
            this._requests.length = 0;
          }
        }
        _onError(e3) {
          this._storedError = (0, i2.createResponseStatusError)(e3, this._url), this._headersReceivedCapability.reject(this._storedError);
          for (let e4 of this._requests) e4.reject(this._storedError);
          this._requests.length = 0, this._cachedChunks.length = 0;
        }
        _onProgress(e3) {
          this.onProgress?.({
            loaded: e3.loaded,
            total: e3.lengthComputable ? e3.total : this._contentLength
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
          let e3 = Promise.withResolvers();
          return this._requests.push(e3), e3.promise;
        }
        cancel(e3) {
          this._done = true, this._headersReceivedCapability.reject(e3);
          for (let e4 of this._requests) e4.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
        }
      }
      class l2 {
        constructor(e3, t3, n3) {
          this._manager = e3;
          let r3 = {
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._url = e3.url, this._requestId = e3.requestRange(t3, n3, r3), this._requests = [], this._queuedChunk = null, this._done = false, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
        }
        _close() {
          this.onClosed?.(this);
        }
        _onDone(e3) {
          let t3 = e3.chunk;
          this._requests.length > 0 ? this._requests.shift().resolve({
            value: t3,
            done: false
          }) : this._queuedChunk = t3, this._done = true;
          for (let e4 of this._requests) e4.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0, this._close();
        }
        _onError(e3) {
          this._storedError = (0, i2.createResponseStatusError)(e3, this._url);
          for (let e4 of this._requests) e4.reject(this._storedError);
          this._requests.length = 0, this._queuedChunk = null;
        }
        _onProgress(e3) {
          this.isStreamingSupported || this.onProgress?.({
            loaded: e3.loaded
          });
        }
        get isStreamingSupported() {
          return false;
        }
        async read() {
          if (this._storedError) throw this._storedError;
          if (this._queuedChunk !== null) {
            let e4 = this._queuedChunk;
            return this._queuedChunk = null, {
              value: e4,
              done: false
            };
          }
          if (this._done) return {
            value: void 0,
            done: true
          };
          let e3 = Promise.withResolvers();
          return this._requests.push(e3), e3.promise;
        }
        cancel(e3) {
          this._done = true;
          for (let e4 of this._requests) e4.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
        }
      }
    }),
    490: ((e2, t2, n2) => {
      n2.d(t2, {
        createResponseStatusError: () => c2,
        extractFilenameFromHeader: () => s2,
        validateRangeRequestCapabilities: () => o2,
        validateResponseStatus: () => l2
      });
      var r2 = n2(292);
      function i2(e3) {
        let t3 = true, n3 = i3(`filename\\*`, `i`).exec(e3);
        if (n3) {
          n3 = n3[1];
          let e4 = c3(n3);
          return e4 = unescape(e4), e4 = l3(e4), e4 = u2(e4), o3(e4);
        }
        if (n3 = s3(e3), n3) return o3(u2(n3));
        if (n3 = i3(`filename`, `i`).exec(e3), n3) {
          n3 = n3[1];
          let e4 = c3(n3);
          return e4 = u2(e4), o3(e4);
        }
        function i3(e4, t4) {
          return RegExp(`(?:^|;)\\s*` + e4 + `\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)`, t4);
        }
        function a3(e4, n4) {
          if (e4) {
            if (!/^[\x00-\xFF]+$/.test(n4)) return n4;
            try {
              let i4 = new TextDecoder(e4, {
                fatal: true
              }), a4 = (0, r2.stringToBytes)(n4);
              n4 = i4.decode(a4), t3 = false;
            } catch {
            }
          }
          return n4;
        }
        function o3(e4) {
          return t3 && /[\x80-\xff]/.test(e4) && (e4 = a3(`utf-8`, e4), t3 && (e4 = a3(`iso-8859-1`, e4))), e4;
        }
        function s3(e4) {
          let t4 = [], n4, r3 = i3(`filename\\*((?!0\\d)\\d+)(\\*?)`, `ig`);
          for (; (n4 = r3.exec(e4)) !== null; ) {
            let [, e5, r4, i4] = n4;
            if (e5 = parseInt(e5, 10), e5 in t4) {
              if (e5 === 0) break;
              continue;
            }
            t4[e5] = [
              r4,
              i4
            ];
          }
          let a4 = [];
          for (let e5 = 0; e5 < t4.length && e5 in t4; ++e5) {
            let [n5, r4] = t4[e5];
            r4 = c3(r4), n5 && (r4 = unescape(r4), e5 === 0 && (r4 = l3(r4))), a4.push(r4);
          }
          return a4.join(``);
        }
        function c3(e4) {
          if (e4.startsWith(`"`)) {
            let t4 = e4.slice(1).split(`\\"`);
            for (let e5 = 0; e5 < t4.length; ++e5) {
              let n4 = t4[e5].indexOf(`"`);
              n4 !== -1 && (t4[e5] = t4[e5].slice(0, n4), t4.length = e5 + 1), t4[e5] = t4[e5].replaceAll(/\\(.)/g, `$1`);
            }
            e4 = t4.join(`"`);
          }
          return e4;
        }
        function l3(e4) {
          let t4 = e4.indexOf(`'`);
          return t4 === -1 ? e4 : a3(e4.slice(0, t4), e4.slice(t4 + 1).replace(/^[^']*'/, ``));
        }
        function u2(e4) {
          return !e4.startsWith(`=?`) || /[\x00-\x19\x80-\xff]/.test(e4) ? e4 : e4.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(e5, t4, n4, r3) {
            if (n4 === `q` || n4 === `Q`) return r3 = r3.replaceAll(`_`, ` `), r3 = r3.replaceAll(/=([0-9a-fA-F]{2})/g, function(e6, t5) {
              return String.fromCharCode(parseInt(t5, 16));
            }), a3(t4, r3);
            try {
              r3 = atob(r3);
            } catch {
            }
            return a3(t4, r3);
          });
        }
        return ``;
      }
      var a2 = n2(419);
      function o2({ getResponseHeader: e3, isHttp: t3, rangeChunkSize: n3, disableRange: r3 }) {
        let i3 = {
          allowRangeRequests: false,
          suggestedLength: void 0
        }, a3 = parseInt(e3(`Content-Length`), 10);
        return !Number.isInteger(a3) || (i3.suggestedLength = a3, a3 <= 2 * n3) || r3 || !t3 || e3(`Accept-Ranges`) !== `bytes` || (e3(`Content-Encoding`) || `identity`) !== `identity` || (i3.allowRangeRequests = true), i3;
      }
      function s2(e3) {
        let t3 = e3(`Content-Disposition`);
        if (t3) {
          let e4 = i2(t3);
          if (e4.includes(`%`)) try {
            e4 = decodeURIComponent(e4);
          } catch {
          }
          if ((0, a2.isPdfFile)(e4)) return e4;
        }
        return null;
      }
      function c2(e3, t3) {
        return e3 === 404 || e3 === 0 && t3.startsWith(`file:`) ? new r2.MissingPDFException(`Missing PDF "` + t3 + `".`) : new r2.UnexpectedResponseException(`Unexpected server response (${e3}) while retrieving PDF "${t3}".`, e3);
      }
      function l2(e3) {
        return e3 === 200 || e3 === 206;
      }
    }),
    786: ((n2, r2, i2) => {
      i2.a(n2, async (n3, a2) => {
        try {
          let f2 = function(e2) {
            let t2 = u2.parse(e2);
            return t2.protocol === `file:` || t2.host ? t2 : /^[a-z]:[/\\]/i.test(e2) ? u2.parse(`file:///${e2}`) : (t2.host || (t2.protocol = `file:`), t2);
          }, g2 = function(e2, t2) {
            return {
              protocol: e2.protocol,
              auth: e2.auth,
              host: e2.hostname,
              port: e2.port,
              path: e2.path,
              method: `GET`,
              headers: t2
            };
          };
          i2.d(r2, {
            PDFNodeStream: () => p2
          });
          var o2 = i2(292), s2 = i2(490);
          let n4, c2, l2, u2;
          o2.isNodeJS && (n4 = await t(() => import("./__vite-browser-external-amx3bi7R.js").then(async (m3) => {
            await m3.__tla;
            return m3;
          }).then(e(1)), __vite__mapDeps([0,1,2])), c2 = await t(() => import("./__vite-browser-external-amx3bi7R.js").then(async (m3) => {
            await m3.__tla;
            return m3;
          }).then(e(1)), __vite__mapDeps([0,1,2])), l2 = await t(() => import("./__vite-browser-external-amx3bi7R.js").then(async (m3) => {
            await m3.__tla;
            return m3;
          }).then(e(1)), __vite__mapDeps([0,1,2])), u2 = await t(() => import("./__vite-browser-external-amx3bi7R.js").then(async (m3) => {
            await m3.__tla;
            return m3;
          }).then(e(1)), __vite__mapDeps([0,1,2])));
          let d2 = /^file:\/\/\/[a-zA-Z]:\//;
          class p2 {
            constructor(e2) {
              this.source = e2, this.url = f2(e2.url), this.isHttp = this.url.protocol === `http:` || this.url.protocol === `https:`, this.isFsUrl = this.url.protocol === `file:`, this.httpHeaders = this.isHttp && e2.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              return this._fullRequestReader?._loaded ?? 0;
            }
            getFullReader() {
              return (0, o2.assert)(!this._fullRequestReader, `PDFNodeStream.getFullReader can only be called once.`), this._fullRequestReader = this.isFsUrl ? new y2(this) : new _2(this), this._fullRequestReader;
            }
            getRangeReader(e2, t2) {
              if (t2 <= this._progressiveDataLength) return null;
              let n5 = this.isFsUrl ? new b2(this, e2, t2) : new v2(this, e2, t2);
              return this._rangeRequestReaders.push(n5), n5;
            }
            cancelAllRequests(e2) {
              this._fullRequestReader?.cancel(e2);
              for (let t2 of this._rangeRequestReaders.slice(0)) t2.cancel(e2);
            }
          }
          class m2 {
            constructor(e2) {
              this._url = e2.url, this._done = false, this._storedError = null, this.onProgress = null;
              let t2 = e2.source;
              this._contentLength = t2.length, this._loaded = 0, this._filename = null, this._disableRange = t2.disableRange || false, this._rangeChunkSize = t2.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._isStreamingSupported = !t2.disableStream, this._isRangeSupported = !t2.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
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
              if (await this._readCapability.promise, this._done) return {
                value: void 0,
                done: true
              };
              if (this._storedError) throw this._storedError;
              let e2 = this._readableStream.read();
              return e2 === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += e2.length, this.onProgress?.({
                loaded: this._loaded,
                total: this._contentLength
              }), {
                value: new Uint8Array(e2).buffer,
                done: false
              });
            }
            cancel(e2) {
              if (!this._readableStream) {
                this._error(e2);
                return;
              }
              this._readableStream.destroy(e2);
            }
            _error(e2) {
              this._storedError = e2, this._readCapability.resolve();
            }
            _setReadableStream(e2) {
              this._readableStream = e2, e2.on(`readable`, () => {
                this._readCapability.resolve();
              }), e2.on(`end`, () => {
                e2.destroy(), this._done = true, this._readCapability.resolve();
              }), e2.on(`error`, (e3) => {
                this._error(e3);
              }), !this._isStreamingSupported && this._isRangeSupported && this._error(new o2.AbortException(`streaming is disabled`)), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          class h2 {
            constructor(e2) {
              this._url = e2.url, this._done = false, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !e2.source.disableStream;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              if (await this._readCapability.promise, this._done) return {
                value: void 0,
                done: true
              };
              if (this._storedError) throw this._storedError;
              let e2 = this._readableStream.read();
              return e2 === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += e2.length, this.onProgress?.({
                loaded: this._loaded
              }), {
                value: new Uint8Array(e2).buffer,
                done: false
              });
            }
            cancel(e2) {
              if (!this._readableStream) {
                this._error(e2);
                return;
              }
              this._readableStream.destroy(e2);
            }
            _error(e2) {
              this._storedError = e2, this._readCapability.resolve();
            }
            _setReadableStream(e2) {
              this._readableStream = e2, e2.on(`readable`, () => {
                this._readCapability.resolve();
              }), e2.on(`end`, () => {
                e2.destroy(), this._done = true, this._readCapability.resolve();
              }), e2.on(`error`, (e3) => {
                this._error(e3);
              }), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          class _2 extends m2 {
            constructor(e2) {
              super(e2);
              let t2 = (t3) => {
                if (t3.statusCode === 404) {
                  let e3 = new o2.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = e3, this._headersCapability.reject(e3);
                  return;
                }
                this._headersCapability.resolve(), this._setReadableStream(t3);
                let n5 = (e3) => this._readableStream.headers[e3.toLowerCase()], { allowRangeRequests: r3, suggestedLength: i3 } = (0, s2.validateRangeRequestCapabilities)({
                  getResponseHeader: n5,
                  isHttp: e2.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = r3, this._contentLength = i3 || this._contentLength, this._filename = (0, s2.extractFilenameFromHeader)(n5);
              };
              this._request = null, this._url.protocol === `http:` ? this._request = c2.request(g2(this._url, e2.httpHeaders), t2) : this._request = l2.request(g2(this._url, e2.httpHeaders), t2), this._request.on(`error`, (e3) => {
                this._storedError = e3, this._headersCapability.reject(e3);
              }), this._request.end();
            }
          }
          class v2 extends h2 {
            constructor(e2, t2, n5) {
              for (let t3 in super(e2), this._httpHeaders = {}, e2.httpHeaders) {
                let n6 = e2.httpHeaders[t3];
                n6 !== void 0 && (this._httpHeaders[t3] = n6);
              }
              this._httpHeaders.Range = `bytes=${t2}-${n5 - 1}`;
              let r3 = (e3) => {
                if (e3.statusCode === 404) {
                  this._storedError = new o2.MissingPDFException(`Missing PDF "${this._url}".`);
                  return;
                }
                this._setReadableStream(e3);
              };
              this._request = null, this._url.protocol === `http:` ? this._request = c2.request(g2(this._url, this._httpHeaders), r3) : this._request = l2.request(g2(this._url, this._httpHeaders), r3), this._request.on(`error`, (e3) => {
                this._storedError = e3;
              }), this._request.end();
            }
          }
          class y2 extends m2 {
            constructor(e2) {
              super(e2);
              let t2 = decodeURIComponent(this._url.path);
              d2.test(this._url.href) && (t2 = t2.replace(/^\//, ``)), n4.promises.lstat(t2).then((e3) => {
                this._contentLength = e3.size, this._setReadableStream(n4.createReadStream(t2)), this._headersCapability.resolve();
              }, (e3) => {
                e3.code === `ENOENT` && (e3 = new o2.MissingPDFException(`Missing PDF "${t2}".`)), this._storedError = e3, this._headersCapability.reject(e3);
              });
            }
          }
          class b2 extends h2 {
            constructor(e2, t2, r3) {
              super(e2);
              let i3 = decodeURIComponent(this._url.path);
              d2.test(this._url.href) && (i3 = i3.replace(/^\//, ``)), this._setReadableStream(n4.createReadStream(i3, {
                start: t2,
                end: r3 - 1
              }));
            }
          }
          a2();
        } catch (e2) {
          a2(e2);
        }
      }, 1);
    }),
    573: ((n2, r2, i2) => {
      i2.a(n2, async (n3, a2) => {
        try {
          i2.d(r2, {
            NodeCMapReaderFactory: () => f2,
            NodeCanvasFactory: () => d2,
            NodeFilterFactory: () => u2,
            NodeStandardFontDataFactory: () => p2
          });
          var o2 = i2(583), s2 = i2(292);
          let n4, c2;
          if (s2.isNodeJS) {
            n4 = await t(() => import("./__vite-browser-external-amx3bi7R.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }).then(e(1)), __vite__mapDeps([0,1,2]));
            try {
              c2 = await t(() => import("./__vite-browser-external-amx3bi7R.js").then(async (m2) => {
                await m2.__tla;
                return m2;
              }).then(e(1)), __vite__mapDeps([0,1,2]));
            } catch {
            }
            try {
              await t(() => import("./dist-B5ZDr43H.js").then(async (m2) => {
                await m2.__tla;
                return m2;
              }), []);
            } catch {
            }
          }
          let l2 = function(e2) {
            return n4.promises.readFile(e2).then((e3) => new Uint8Array(e3));
          };
          class u2 extends o2.BaseFilterFactory {
          }
          class d2 extends o2.BaseCanvasFactory {
            _createCanvas(e2, t2) {
              return c2.createCanvas(e2, t2);
            }
          }
          class f2 extends o2.BaseCMapReaderFactory {
            _fetchData(e2, t2) {
              return l2(e2).then((e3) => ({
                cMapData: e3,
                compressionType: t2
              }));
            }
          }
          class p2 extends o2.BaseStandardFontDataFactory {
            _fetchData(e2) {
              return l2(e2);
            }
          }
          a2();
        } catch (e2) {
          a2(e2);
        }
      }, 1);
    }),
    626: ((e2, t2, n2) => {
      n2.d(t2, {
        OptionalContentConfig: () => s2
      });
      var r2 = n2(292), i2 = n2(651);
      let a2 = /* @__PURE__ */ Symbol(`INTERNAL`);
      class o2 {
        #e = false;
        #t = false;
        #n = false;
        #r = true;
        constructor(e3, { name: t3, intent: n3, usage: i3 }) {
          this.#e = !!(e3 & r2.RenderingIntentFlag.DISPLAY), this.#t = !!(e3 & r2.RenderingIntentFlag.PRINT), this.name = t3, this.intent = n3, this.usage = i3;
        }
        get visible() {
          if (this.#n) return this.#r;
          if (!this.#r) return false;
          let { print: e3, view: t3 } = this.usage;
          return this.#e ? t3?.viewState !== `OFF` : this.#t ? e3?.printState !== `OFF` : true;
        }
        _setVisible(e3, t3, n3 = false) {
          e3 !== a2 && (0, r2.unreachable)("Internal method `_setVisible` called."), this.#n = n3, this.#r = t3;
        }
      }
      class s2 {
        #e = null;
        #t = /* @__PURE__ */ new Map();
        #n = null;
        #r = null;
        constructor(e3, t3 = r2.RenderingIntentFlag.DISPLAY) {
          if (this.renderingIntent = t3, this.name = null, this.creator = null, e3 !== null) {
            this.name = e3.name, this.creator = e3.creator, this.#r = e3.order;
            for (let n3 of e3.groups) this.#t.set(n3.id, new o2(t3, n3));
            if (e3.baseState === `OFF`) for (let e4 of this.#t.values()) e4._setVisible(a2, false);
            for (let t4 of e3.on) this.#t.get(t4)._setVisible(a2, true);
            for (let t4 of e3.off) this.#t.get(t4)._setVisible(a2, false);
            this.#n = this.getHash();
          }
        }
        #i(e3) {
          let t3 = e3.length;
          if (t3 < 2) return true;
          let n3 = e3[0];
          for (let i3 = 1; i3 < t3; i3++) {
            let t4 = e3[i3], a3;
            if (Array.isArray(t4)) a3 = this.#i(t4);
            else if (this.#t.has(t4)) a3 = this.#t.get(t4).visible;
            else return (0, r2.warn)(`Optional content group not found: ${t4}`), true;
            switch (n3) {
              case `And`:
                if (!a3) return false;
                break;
              case `Or`:
                if (a3) return true;
                break;
              case `Not`:
                return !a3;
              default:
                return true;
            }
          }
          return n3 === `And`;
        }
        isVisible(e3) {
          if (this.#t.size === 0) return true;
          if (!e3) return (0, r2.info)(`Optional content group not defined.`), true;
          if (e3.type === `OCG`) return this.#t.has(e3.id) ? this.#t.get(e3.id).visible : ((0, r2.warn)(`Optional content group not found: ${e3.id}`), true);
          if (e3.type === `OCMD`) {
            if (e3.expression) return this.#i(e3.expression);
            if (!e3.policy || e3.policy === `AnyOn`) {
              for (let t3 of e3.ids) {
                if (!this.#t.has(t3)) return (0, r2.warn)(`Optional content group not found: ${t3}`), true;
                if (this.#t.get(t3).visible) return true;
              }
              return false;
            } else if (e3.policy === `AllOn`) {
              for (let t3 of e3.ids) {
                if (!this.#t.has(t3)) return (0, r2.warn)(`Optional content group not found: ${t3}`), true;
                if (!this.#t.get(t3).visible) return false;
              }
              return true;
            } else if (e3.policy === `AnyOff`) {
              for (let t3 of e3.ids) {
                if (!this.#t.has(t3)) return (0, r2.warn)(`Optional content group not found: ${t3}`), true;
                if (!this.#t.get(t3).visible) return true;
              }
              return false;
            } else if (e3.policy === `AllOff`) {
              for (let t3 of e3.ids) {
                if (!this.#t.has(t3)) return (0, r2.warn)(`Optional content group not found: ${t3}`), true;
                if (this.#t.get(t3).visible) return false;
              }
              return true;
            }
            return (0, r2.warn)(`Unknown optional content policy ${e3.policy}.`), true;
          }
          return (0, r2.warn)(`Unknown group type ${e3.type}.`), true;
        }
        setVisibility(e3, t3 = true) {
          let n3 = this.#t.get(e3);
          if (!n3) {
            (0, r2.warn)(`Optional content group not found: ${e3}`);
            return;
          }
          n3._setVisible(a2, !!t3, true), this.#e = null;
        }
        setOCGState({ state: e3, preserveRB: t3 }) {
          let n3;
          for (let t4 of e3) {
            switch (t4) {
              case `ON`:
              case `OFF`:
              case `Toggle`:
                n3 = t4;
                continue;
            }
            let e4 = this.#t.get(t4);
            if (e4) switch (n3) {
              case `ON`:
                e4._setVisible(a2, true);
                break;
              case `OFF`:
                e4._setVisible(a2, false);
                break;
              case `Toggle`:
                e4._setVisible(a2, !e4.visible);
                break;
            }
          }
          this.#e = null;
        }
        get hasInitialVisibility() {
          return this.#n === null || this.getHash() === this.#n;
        }
        getOrder() {
          return this.#t.size ? this.#r ? this.#r.slice() : [
            ...this.#t.keys()
          ] : null;
        }
        getGroups() {
          return this.#t.size > 0 ? (0, r2.objectFromMap)(this.#t) : null;
        }
        getGroup(e3) {
          return this.#t.get(e3) || null;
        }
        getHash() {
          if (this.#e !== null) return this.#e;
          let e3 = new i2.MurmurHash3_64();
          for (let [t3, n3] of this.#t) e3.update(`${t3}:${n3.visible}`);
          return this.#e = e3.hexdigest();
        }
      }
    }),
    814: ((e2, t2, n2) => {
      n2.d(t2, {
        cleanupTextLayer: () => l2,
        renderTextLayer: () => h2,
        updateTextLayer: () => g2
      });
      var r2 = n2(292), i2 = n2(419);
      let a2 = 0.8, o2 = /* @__PURE__ */ new Map(), s2 = null;
      function c2() {
        if (!s2) {
          let e3 = document.createElement(`canvas`);
          e3.className = `hiddenCanvasElement`, document.body.append(e3), s2 = e3.getContext(`2d`, {
            alpha: false
          });
        }
        return s2;
      }
      function l2() {
        s2?.canvas.remove(), s2 = null;
      }
      function u2(e3) {
        let t3 = o2.get(e3);
        if (t3) return t3;
        let n3 = c2(), r3 = n3.font;
        n3.canvas.width = n3.canvas.height = 30, n3.font = `30px ${e3}`;
        let i3 = n3.measureText(``), s3 = i3.fontBoundingBoxAscent, l3 = Math.abs(i3.fontBoundingBoxDescent);
        if (s3) {
          let t4 = s3 / (s3 + l3);
          return o2.set(e3, t4), n3.canvas.width = n3.canvas.height = 0, n3.font = r3, t4;
        }
        n3.strokeStyle = `red`, n3.clearRect(0, 0, 30, 30), n3.strokeText(`g`, 0, 0);
        let u3 = n3.getImageData(0, 0, 30, 30).data;
        l3 = 0;
        for (let e4 = u3.length - 1 - 3; e4 >= 0; e4 -= 4) if (u3[e4] > 0) {
          l3 = Math.ceil(e4 / 4 / 30);
          break;
        }
        n3.clearRect(0, 0, 30, 30), n3.strokeText(`A`, 0, 30), u3 = n3.getImageData(0, 0, 30, 30).data, s3 = 0;
        for (let e4 = 0, t4 = u3.length; e4 < t4; e4 += 4) if (u3[e4] > 0) {
          s3 = 30 - Math.floor(e4 / 4 / 30);
          break;
        }
        if (n3.canvas.width = n3.canvas.height = 0, n3.font = r3, s3) {
          let t4 = s3 / (s3 + l3);
          return o2.set(e3, t4), t4;
        }
        return o2.set(e3, a2), a2;
      }
      function d2(e3, t3, n3) {
        let i3 = document.createElement(`span`), a3 = {
          angle: 0,
          canvasWidth: 0,
          hasText: t3.str !== ``,
          hasEOL: t3.hasEOL,
          fontSize: 0
        };
        e3._textDivs.push(i3);
        let o3 = r2.Util.transform(e3._transform, t3.transform), s3 = Math.atan2(o3[1], o3[0]), c3 = n3[t3.fontName];
        c3.vertical && (s3 += Math.PI / 2);
        let l3 = e3._fontInspectorEnabled && c3.fontSubstitution || c3.fontFamily, d3 = Math.hypot(o3[2], o3[3]), f3 = d3 * u2(l3), p3, m3;
        s3 === 0 ? (p3 = o3[4], m3 = o3[5] - f3) : (p3 = o3[4] + f3 * Math.sin(s3), m3 = o3[5] - f3 * Math.cos(s3));
        let h3 = `calc(var(--scale-factor)*`, g3 = i3.style;
        e3._container === e3._rootContainer ? (g3.left = `${(100 * p3 / e3._pageWidth).toFixed(2)}%`, g3.top = `${(100 * m3 / e3._pageHeight).toFixed(2)}%`) : (g3.left = `${h3}${p3.toFixed(2)}px)`, g3.top = `${h3}${m3.toFixed(2)}px)`), g3.fontSize = `${h3}${d3.toFixed(2)}px)`, g3.fontFamily = l3, a3.fontSize = d3, i3.setAttribute(`role`, `presentation`), i3.textContent = t3.str, i3.dir = t3.dir, e3._fontInspectorEnabled && (i3.dataset.fontName = c3.fontSubstitutionLoadedName || t3.fontName), s3 !== 0 && (a3.angle = s3 * (180 / Math.PI));
        let _2 = false;
        if (t3.str.length > 1) _2 = true;
        else if (t3.str !== ` ` && t3.transform[0] !== t3.transform[3]) {
          let e4 = Math.abs(t3.transform[0]), n4 = Math.abs(t3.transform[3]);
          e4 !== n4 && Math.max(e4, n4) / Math.min(e4, n4) > 1.5 && (_2 = true);
        }
        _2 && (a3.canvasWidth = c3.vertical ? t3.height : t3.width), e3._textDivProperties.set(i3, a3), e3._isReadableStream && e3._layoutText(i3);
      }
      function f2(e3) {
        let { div: t3, scale: n3, properties: r3, ctx: i3, prevFontSize: a3, prevFontFamily: o3 } = e3, { style: s3 } = t3, c3 = ``;
        if (r3.canvasWidth !== 0 && r3.hasText) {
          let { fontFamily: l3 } = s3, { canvasWidth: u3, fontSize: d3 } = r3;
          (a3 !== d3 || o3 !== l3) && (i3.font = `${d3 * n3}px ${l3}`, e3.prevFontSize = d3, e3.prevFontFamily = l3);
          let { width: f3 } = i3.measureText(t3.textContent);
          f3 > 0 && (c3 = `scaleX(${u3 * n3 / f3})`);
        }
        r3.angle !== 0 && (c3 = `rotate(${r3.angle}deg) ${c3}`), c3.length > 0 && (s3.transform = c3);
      }
      function p2(e3) {
        if (e3._canceled) return;
        let t3 = e3._textDivs, n3 = e3._capability;
        if (t3.length > 1e5) {
          n3.resolve();
          return;
        }
        if (!e3._isReadableStream) for (let n4 of t3) e3._layoutText(n4);
        n3.resolve();
      }
      class m2 {
        constructor({ textContentSource: e3, container: t3, viewport: n3, textDivs: r3, textDivProperties: a3, textContentItemsStr: o3 }) {
          this._textContentSource = e3, this._isReadableStream = e3 instanceof ReadableStream, this._container = this._rootContainer = t3, this._textDivs = r3 || [], this._textContentItemsStr = o3 || [], this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled, this._reader = null, this._textDivProperties = a3 || /* @__PURE__ */ new WeakMap(), this._canceled = false, this._capability = Promise.withResolvers(), this._layoutTextParams = {
            prevFontSize: null,
            prevFontFamily: null,
            div: null,
            scale: n3.scale * (globalThis.devicePixelRatio || 1),
            properties: null,
            ctx: c2()
          };
          let { pageWidth: s3, pageHeight: l3, pageX: u3, pageY: d3 } = n3.rawDims;
          this._transform = [
            1,
            0,
            0,
            -1,
            -u3,
            d3 + l3
          ], this._pageWidth = s3, this._pageHeight = l3, (0, i2.setLayerDimensions)(t3, n3), this._capability.promise.finally(() => {
            this._layoutTextParams = null;
          }).catch(() => {
          });
        }
        get promise() {
          return this._capability.promise;
        }
        cancel() {
          this._canceled = true, this._reader &&= (this._reader.cancel(new r2.AbortException(`TextLayer task cancelled.`)).catch(() => {
          }), null), this._capability.reject(new r2.AbortException(`TextLayer task cancelled.`));
        }
        _processItems(e3, t3) {
          for (let n3 of e3) {
            if (n3.str === void 0) {
              if (n3.type === `beginMarkedContentProps` || n3.type === `beginMarkedContent`) {
                let e4 = this._container;
                this._container = document.createElement(`span`), this._container.classList.add(`markedContent`), n3.id !== null && this._container.setAttribute(`id`, `${n3.id}`), e4.append(this._container);
              } else n3.type === `endMarkedContent` && (this._container = this._container.parentNode);
              continue;
            }
            this._textContentItemsStr.push(n3.str), d2(this, n3, t3);
          }
        }
        _layoutText(e3) {
          let t3 = this._layoutTextParams.properties = this._textDivProperties.get(e3);
          if (this._layoutTextParams.div = e3, f2(this._layoutTextParams), t3.hasText && this._container.append(e3), t3.hasEOL) {
            let e4 = document.createElement(`br`);
            e4.setAttribute(`role`, `presentation`), this._container.append(e4);
          }
        }
        _render() {
          let { promise: e3, resolve: t3, reject: n3 } = Promise.withResolvers(), r3 = /* @__PURE__ */ Object.create(null);
          if (this._isReadableStream) {
            let e4 = () => {
              this._reader.read().then(({ value: n4, done: i3 }) => {
                if (i3) {
                  t3();
                  return;
                }
                Object.assign(r3, n4.styles), this._processItems(n4.items, r3), e4();
              }, n3);
            };
            this._reader = this._textContentSource.getReader(), e4();
          } else if (this._textContentSource) {
            let { items: e4, styles: n4 } = this._textContentSource;
            this._processItems(e4, n4), t3();
          } else throw Error(`No "textContentSource" parameter specified.`);
          e3.then(() => {
            r3 = null, p2(this);
          }, this._capability.reject);
        }
      }
      function h2(e3) {
        let t3 = new m2(e3);
        return t3._render(), t3;
      }
      function g2({ container: e3, viewport: t3, textDivs: n3, textDivProperties: r3, mustRotate: a3 = true, mustRescale: o3 = true }) {
        if (a3 && (0, i2.setLayerDimensions)(e3, {
          rotation: t3.rotation
        }), o3) {
          let e4 = c2(), i3 = {
            prevFontSize: null,
            prevFontFamily: null,
            div: null,
            scale: t3.scale * (globalThis.devicePixelRatio || 1),
            properties: null,
            ctx: e4
          };
          for (let e5 of n3) i3.properties = r3.get(e5), i3.div = e5, f2(i3);
        }
      }
    }),
    585: ((e2, t2, n2) => {
      n2.d(t2, {
        PDFDataTransportStream: () => a2
      });
      var r2 = n2(292), i2 = n2(419);
      class a2 {
        constructor(e3, { disableRange: t3 = false, disableStream: n3 = false }) {
          (0, r2.assert)(e3, `PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.`);
          let { length: i3, initialData: a3, progressiveDone: o3, contentDispositionFilename: s3 } = e3;
          if (this._queuedChunks = [], this._progressiveDone = o3, this._contentDispositionFilename = s3, a3?.length > 0) {
            let e4 = a3 instanceof Uint8Array && a3.byteLength === a3.buffer.byteLength ? a3.buffer : new Uint8Array(a3).buffer;
            this._queuedChunks.push(e4);
          }
          this._pdfDataRangeTransport = e3, this._isStreamingSupported = !n3, this._isRangeSupported = !t3, this._contentLength = i3, this._fullRequestReader = null, this._rangeReaders = [], e3.addRangeListener((e4, t4) => {
            this._onReceiveData({
              begin: e4,
              chunk: t4
            });
          }), e3.addProgressListener((e4, t4) => {
            this._onProgress({
              loaded: e4,
              total: t4
            });
          }), e3.addProgressiveReadListener((e4) => {
            this._onReceiveData({
              chunk: e4
            });
          }), e3.addProgressiveDoneListener(() => {
            this._onProgressiveDone();
          }), e3.transportReady();
        }
        _onReceiveData({ begin: e3, chunk: t3 }) {
          let n3 = t3 instanceof Uint8Array && t3.byteLength === t3.buffer.byteLength ? t3.buffer : new Uint8Array(t3).buffer;
          if (e3 === void 0) this._fullRequestReader ? this._fullRequestReader._enqueue(n3) : this._queuedChunks.push(n3);
          else {
            let t4 = this._rangeReaders.some(function(t5) {
              return t5._begin === e3 ? (t5._enqueue(n3), true) : false;
            });
            (0, r2.assert)(t4, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
          }
        }
        get _progressiveDataLength() {
          return this._fullRequestReader?._loaded ?? 0;
        }
        _onProgress(e3) {
          e3.total === void 0 ? this._rangeReaders[0]?.onProgress?.({
            loaded: e3.loaded
          }) : this._fullRequestReader?.onProgress?.({
            loaded: e3.loaded,
            total: e3.total
          });
        }
        _onProgressiveDone() {
          this._fullRequestReader?.progressiveDone(), this._progressiveDone = true;
        }
        _removeRangeReader(e3) {
          let t3 = this._rangeReaders.indexOf(e3);
          t3 >= 0 && this._rangeReaders.splice(t3, 1);
        }
        getFullReader() {
          (0, r2.assert)(!this._fullRequestReader, `PDFDataTransportStream.getFullReader can only be called once.`);
          let e3 = this._queuedChunks;
          return this._queuedChunks = null, new o2(this, e3, this._progressiveDone, this._contentDispositionFilename);
        }
        getRangeReader(e3, t3) {
          if (t3 <= this._progressiveDataLength) return null;
          let n3 = new s2(this, e3, t3);
          return this._pdfDataRangeTransport.requestDataRange(e3, t3), this._rangeReaders.push(n3), n3;
        }
        cancelAllRequests(e3) {
          this._fullRequestReader?.cancel(e3);
          for (let t3 of this._rangeReaders.slice(0)) t3.cancel(e3);
          this._pdfDataRangeTransport.abort();
        }
      }
      class o2 {
        constructor(e3, t3, n3 = false, r3 = null) {
          this._stream = e3, this._done = n3 || false, this._filename = (0, i2.isPdfFile)(r3) ? r3 : null, this._queuedChunks = t3 || [], this._loaded = 0;
          for (let e4 of this._queuedChunks) this._loaded += e4.byteLength;
          this._requests = [], this._headersReady = Promise.resolve(), e3._fullRequestReader = this, this.onProgress = null;
        }
        _enqueue(e3) {
          this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
            value: e3,
            done: false
          }) : this._queuedChunks.push(e3), this._loaded += e3.byteLength);
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
          let e3 = Promise.withResolvers();
          return this._requests.push(e3), e3.promise;
        }
        cancel(e3) {
          this._done = true;
          for (let e4 of this._requests) e4.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0;
        }
        progressiveDone() {
          this._done ||= true;
        }
      }
      class s2 {
        constructor(e3, t3, n3) {
          this._stream = e3, this._begin = t3, this._end = n3, this._queuedChunk = null, this._requests = [], this._done = false, this.onProgress = null;
        }
        _enqueue(e3) {
          if (!this._done) {
            if (this._requests.length === 0) this._queuedChunk = e3;
            else {
              this._requests.shift().resolve({
                value: e3,
                done: false
              });
              for (let e4 of this._requests) e4.resolve({
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
            let e4 = this._queuedChunk;
            return this._queuedChunk = null, {
              value: e4,
              done: false
            };
          }
          if (this._done) return {
            value: void 0,
            done: true
          };
          let e3 = Promise.withResolvers();
          return this._requests.push(e3), e3.promise;
        }
        cancel(e3) {
          this._done = true;
          for (let e4 of this._requests) e4.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0, this._stream._removeRangeReader(this);
        }
      }
    }),
    164: ((e2, t2, n2) => {
      n2.d(t2, {
        GlobalWorkerOptions: () => r2
      });
      class r2 {
        static #e = null;
        static #t = ``;
        static get workerPort() {
          return this.#e;
        }
        static set workerPort(e3) {
          if (!(typeof Worker < `u` && e3 instanceof Worker) && e3 !== null) throw Error("Invalid `workerPort` type.");
          this.#e = e3;
        }
        static get workerSrc() {
          return this.#t;
        }
        static set workerSrc(e3) {
          if (typeof e3 != `string`) throw Error("Invalid `workerSrc` type.");
          this.#t = e3;
        }
      }
    }),
    284: ((e2, t2, n2) => {
      n2.d(t2, {
        XfaLayer: () => i2
      });
      var r2 = n2(50);
      class i2 {
        static setupStorage(e3, t3, n3, r3, i3) {
          let a2 = r3.getValue(t3, {
            value: null
          });
          switch (n3.name) {
            case `textarea`:
              if (a2.value !== null && (e3.textContent = a2.value), i3 === `print`) break;
              e3.addEventListener(`input`, (e4) => {
                r3.setValue(t3, {
                  value: e4.target.value
                });
              });
              break;
            case `input`:
              if (n3.attributes.type === `radio` || n3.attributes.type === `checkbox`) {
                if (a2.value === n3.attributes.xfaOn ? e3.setAttribute(`checked`, true) : a2.value === n3.attributes.xfaOff && e3.removeAttribute(`checked`), i3 === `print`) break;
                e3.addEventListener(`change`, (e4) => {
                  r3.setValue(t3, {
                    value: e4.target.checked ? e4.target.getAttribute(`xfaOn`) : e4.target.getAttribute(`xfaOff`)
                  });
                });
              } else {
                if (a2.value !== null && e3.setAttribute(`value`, a2.value), i3 === `print`) break;
                e3.addEventListener(`input`, (e4) => {
                  r3.setValue(t3, {
                    value: e4.target.value
                  });
                });
              }
              break;
            case `select`:
              if (a2.value !== null) {
                e3.setAttribute(`value`, a2.value);
                for (let e4 of n3.children) e4.attributes.value === a2.value ? e4.attributes.selected = true : e4.attributes.hasOwnProperty(`selected`) && delete e4.attributes.selected;
              }
              e3.addEventListener(`input`, (e4) => {
                let n4 = e4.target.options, i4 = n4.selectedIndex === -1 ? `` : n4[n4.selectedIndex].value;
                r3.setValue(t3, {
                  value: i4
                });
              });
              break;
          }
        }
        static setAttributes({ html: e3, element: t3, storage: n3 = null, intent: r3, linkService: i3 }) {
          let { attributes: a2 } = t3, o2 = e3 instanceof HTMLAnchorElement;
          a2.type === `radio` && (a2.name = `${a2.name}-${r3}`);
          for (let [t4, n4] of Object.entries(a2)) if (n4 != null) switch (t4) {
            case `class`:
              n4.length && e3.setAttribute(t4, n4.join(` `));
              break;
            case `dataId`:
              break;
            case `id`:
              e3.setAttribute(`data-element-id`, n4);
              break;
            case `style`:
              Object.assign(e3.style, n4);
              break;
            case `textContent`:
              e3.textContent = n4;
              break;
            default:
              (!o2 || t4 !== `href` && t4 !== `newWindow`) && e3.setAttribute(t4, n4);
          }
          o2 && i3.addLinkAttributes(e3, a2.href, a2.newWindow), n3 && a2.dataId && this.setupStorage(e3, a2.dataId, t3, n3);
        }
        static render(e3) {
          let t3 = e3.annotationStorage, n3 = e3.linkService, i3 = e3.xfaHtml, a2 = e3.intent || `display`, o2 = document.createElement(i3.name);
          i3.attributes && this.setAttributes({
            html: o2,
            element: i3,
            intent: a2,
            linkService: n3
          });
          let s2 = a2 !== `richText`, c2 = e3.div;
          if (c2.append(o2), e3.viewport) {
            let t4 = `matrix(${e3.viewport.transform.join(`,`)})`;
            c2.style.transform = t4;
          }
          s2 && c2.setAttribute(`class`, `xfaLayer xfaFont`);
          let l2 = [];
          if (i3.children.length === 0) {
            if (i3.value) {
              let e4 = document.createTextNode(i3.value);
              o2.append(e4), s2 && r2.XfaText.shouldBuildText(i3.name) && l2.push(e4);
            }
            return {
              textDivs: l2
            };
          }
          let u2 = [
            [
              i3,
              -1,
              o2
            ]
          ];
          for (; u2.length > 0; ) {
            let [e4, i4, o3] = u2.at(-1);
            if (i4 + 1 === e4.children.length) {
              u2.pop();
              continue;
            }
            let c3 = e4.children[++u2.at(-1)[1]];
            if (c3 === null) continue;
            let { name: d2 } = c3;
            if (d2 === `#text`) {
              let e5 = document.createTextNode(c3.value);
              l2.push(e5), o3.append(e5);
              continue;
            }
            let f2 = c3?.attributes?.xmlns ? document.createElementNS(c3.attributes.xmlns, d2) : document.createElement(d2);
            if (o3.append(f2), c3.attributes && this.setAttributes({
              html: f2,
              element: c3,
              storage: t3,
              intent: a2,
              linkService: n3
            }), c3.children?.length > 0) u2.push([
              c3,
              -1,
              f2
            ]);
            else if (c3.value) {
              let e5 = document.createTextNode(c3.value);
              s2 && r2.XfaText.shouldBuildText(d2) && l2.push(e5), f2.append(e5);
            }
          }
          for (let e4 of c2.querySelectorAll(`.xfaNonInteractive input, .xfaNonInteractive textarea`)) e4.setAttribute(`readOnly`, true);
          return {
            textDivs: l2
          };
        }
        static update(e3) {
          let t3 = `matrix(${e3.viewport.transform.join(`,`)})`;
          e3.div.style.transform = t3, e3.div.hidden = false;
        }
      }
    }),
    50: ((e2, t2, n2) => {
      n2.d(t2, {
        XfaText: () => r2
      });
      class r2 {
        static textContent(e3) {
          let t3 = [], n3 = {
            items: t3,
            styles: /* @__PURE__ */ Object.create(null)
          };
          function i2(e4) {
            if (!e4) return;
            let n4 = null, a2 = e4.name;
            if (a2 === `#text`) n4 = e4.value;
            else if (r2.shouldBuildText(a2)) e4?.attributes?.textContent ? n4 = e4.attributes.textContent : e4.value && (n4 = e4.value);
            else return;
            if (n4 !== null && t3.push({
              str: n4
            }), e4.children) for (let t4 of e4.children) i2(t4);
          }
          return i2(e3), n3;
        }
        static shouldBuildText(e3) {
          return !(e3 === `textarea` || e3 === `input` || e3 === `option` || e3 === `select`);
        }
      }
    }),
    228: ((e2, t2, n2) => {
      n2.a(e2, async (e3, r2) => {
        try {
          n2.d(t2, {
            AbortException: () => i2.AbortException,
            AnnotationEditorLayer: () => c2.AnnotationEditorLayer,
            AnnotationEditorParamsType: () => i2.AnnotationEditorParamsType,
            AnnotationEditorType: () => i2.AnnotationEditorType,
            AnnotationEditorUIManager: () => l2.AnnotationEditorUIManager,
            AnnotationLayer: () => u2.AnnotationLayer,
            AnnotationMode: () => i2.AnnotationMode,
            CMapCompressionType: () => i2.CMapCompressionType,
            ColorPicker: () => d2.ColorPicker,
            DOMSVGFactory: () => o2.DOMSVGFactory,
            DrawLayer: () => f2.DrawLayer,
            FeatureTest: () => i2.FeatureTest,
            GlobalWorkerOptions: () => p2.GlobalWorkerOptions,
            ImageKind: () => i2.ImageKind,
            InvalidPDFException: () => i2.InvalidPDFException,
            MissingPDFException: () => i2.MissingPDFException,
            OPS: () => i2.OPS,
            Outliner: () => m2.Outliner,
            PDFDataRangeTransport: () => a2.PDFDataRangeTransport,
            PDFDateString: () => o2.PDFDateString,
            PDFWorker: () => a2.PDFWorker,
            PasswordResponses: () => i2.PasswordResponses,
            PermissionFlag: () => i2.PermissionFlag,
            PixelsPerInch: () => o2.PixelsPerInch,
            RenderingCancelledException: () => o2.RenderingCancelledException,
            UnexpectedResponseException: () => i2.UnexpectedResponseException,
            Util: () => i2.Util,
            VerbosityLevel: () => i2.VerbosityLevel,
            XfaLayer: () => h2.XfaLayer,
            build: () => a2.build,
            createValidAbsoluteUrl: () => i2.createValidAbsoluteUrl,
            fetchData: () => o2.fetchData,
            getDocument: () => a2.getDocument,
            getFilenameFromUrl: () => o2.getFilenameFromUrl,
            getPdfFilenameFromUrl: () => o2.getPdfFilenameFromUrl,
            getXfaPageViewport: () => o2.getXfaPageViewport,
            isDataScheme: () => o2.isDataScheme,
            isPdfFile: () => o2.isPdfFile,
            noContextMenu: () => o2.noContextMenu,
            normalizeUnicode: () => i2.normalizeUnicode,
            renderTextLayer: () => s2.renderTextLayer,
            setLayerDimensions: () => o2.setLayerDimensions,
            shadow: () => i2.shadow,
            updateTextLayer: () => s2.updateTextLayer,
            version: () => a2.version
          });
          var i2 = n2(292), a2 = n2(831), o2 = n2(419), s2 = n2(814), c2 = n2(731), l2 = n2(830), u2 = n2(976), d2 = n2(259), f2 = n2(47), p2 = n2(164), m2 = n2(61), h2 = n2(284), g2 = e3([
            a2
          ]);
          a2 = (g2.then ? (await g2)() : g2)[0], r2();
        } catch (e4) {
          r2(e4);
        }
      });
    }),
    178: ((e2, t2, n2) => {
      n2.d(t2, {
        MessageHandler: () => s2
      });
      var r2 = n2(292);
      let i2 = {
        UNKNOWN: 0,
        DATA: 1,
        ERROR: 2
      }, a2 = {
        UNKNOWN: 0,
        CANCEL: 1,
        CANCEL_COMPLETE: 2,
        CLOSE: 3,
        ENQUEUE: 4,
        ERROR: 5,
        PULL: 6,
        PULL_COMPLETE: 7,
        START_COMPLETE: 8
      };
      function o2(e3) {
        switch (e3 instanceof Error || typeof e3 == `object` && e3 || (0, r2.unreachable)(`wrapReason: Expected "reason" to be a (possibly cloned) Error.`), e3.name) {
          case `AbortException`:
            return new r2.AbortException(e3.message);
          case `MissingPDFException`:
            return new r2.MissingPDFException(e3.message);
          case `PasswordException`:
            return new r2.PasswordException(e3.message, e3.code);
          case `UnexpectedResponseException`:
            return new r2.UnexpectedResponseException(e3.message, e3.status);
          case `UnknownErrorException`:
            return new r2.UnknownErrorException(e3.message, e3.details);
          default:
            return new r2.UnknownErrorException(e3.message, e3.toString());
        }
      }
      class s2 {
        constructor(e3, t3, n3) {
          this.sourceName = e3, this.targetName = t3, this.comObj = n3, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (e4) => {
            let t4 = e4.data;
            if (t4.targetName !== this.sourceName) return;
            if (t4.stream) {
              this.#t(t4);
              return;
            }
            if (t4.callback) {
              let e5 = t4.callbackId, n4 = this.callbackCapabilities[e5];
              if (!n4) throw Error(`Cannot resolve callback ${e5}`);
              if (delete this.callbackCapabilities[e5], t4.callback === i2.DATA) n4.resolve(t4.data);
              else if (t4.callback === i2.ERROR) n4.reject(o2(t4.reason));
              else throw Error(`Unexpected callback case`);
              return;
            }
            let r3 = this.actionHandler[t4.action];
            if (!r3) throw Error(`Unknown action from worker: ${t4.action}`);
            if (t4.callbackId) {
              let e5 = this.sourceName, a3 = t4.sourceName;
              new Promise(function(e6) {
                e6(r3(t4.data));
              }).then(function(r4) {
                n3.postMessage({
                  sourceName: e5,
                  targetName: a3,
                  callback: i2.DATA,
                  callbackId: t4.callbackId,
                  data: r4
                });
              }, function(r4) {
                n3.postMessage({
                  sourceName: e5,
                  targetName: a3,
                  callback: i2.ERROR,
                  callbackId: t4.callbackId,
                  reason: o2(r4)
                });
              });
              return;
            }
            if (t4.streamId) {
              this.#e(t4);
              return;
            }
            r3(t4.data);
          }, n3.addEventListener(`message`, this._onComObjOnMessage);
        }
        on(e3, t3) {
          let n3 = this.actionHandler;
          if (n3[e3]) throw Error(`There is already an actionName called "${e3}"`);
          n3[e3] = t3;
        }
        send(e3, t3, n3) {
          this.comObj.postMessage({
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: e3,
            data: t3
          }, n3);
        }
        sendWithPromise(e3, t3, n3) {
          let r3 = this.callbackId++, i3 = Promise.withResolvers();
          this.callbackCapabilities[r3] = i3;
          try {
            this.comObj.postMessage({
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: e3,
              callbackId: r3,
              data: t3
            }, n3);
          } catch (e4) {
            i3.reject(e4);
          }
          return i3.promise;
        }
        sendWithStream(e3, t3, n3, i3) {
          let s3 = this.streamId++, c2 = this.sourceName, l2 = this.targetName, u2 = this.comObj;
          return new ReadableStream({
            start: (n4) => {
              let r3 = Promise.withResolvers();
              return this.streamControllers[s3] = {
                controller: n4,
                startCall: r3,
                pullCall: null,
                cancelCall: null,
                isClosed: false
              }, u2.postMessage({
                sourceName: c2,
                targetName: l2,
                action: e3,
                streamId: s3,
                data: t3,
                desiredSize: n4.desiredSize
              }, i3), r3.promise;
            },
            pull: (e4) => {
              let t4 = Promise.withResolvers();
              return this.streamControllers[s3].pullCall = t4, u2.postMessage({
                sourceName: c2,
                targetName: l2,
                stream: a2.PULL,
                streamId: s3,
                desiredSize: e4.desiredSize
              }), t4.promise;
            },
            cancel: (e4) => {
              (0, r2.assert)(e4 instanceof Error, `cancel must have a valid reason`);
              let t4 = Promise.withResolvers();
              return this.streamControllers[s3].cancelCall = t4, this.streamControllers[s3].isClosed = true, u2.postMessage({
                sourceName: c2,
                targetName: l2,
                stream: a2.CANCEL,
                streamId: s3,
                reason: o2(e4)
              }), t4.promise;
            }
          }, n3);
        }
        #e(e3) {
          let t3 = e3.streamId, n3 = this.sourceName, i3 = e3.sourceName, s3 = this.comObj, c2 = this, l2 = this.actionHandler[e3.action], u2 = {
            enqueue(e4, r3 = 1, o3) {
              if (this.isCancelled) return;
              let c3 = this.desiredSize;
              this.desiredSize -= r3, c3 > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), s3.postMessage({
                sourceName: n3,
                targetName: i3,
                stream: a2.ENQUEUE,
                streamId: t3,
                chunk: e4
              }, o3);
            },
            close() {
              this.isCancelled || (this.isCancelled = true, s3.postMessage({
                sourceName: n3,
                targetName: i3,
                stream: a2.CLOSE,
                streamId: t3
              }), delete c2.streamSinks[t3]);
            },
            error(e4) {
              (0, r2.assert)(e4 instanceof Error, `error must have a valid reason`), !this.isCancelled && (this.isCancelled = true, s3.postMessage({
                sourceName: n3,
                targetName: i3,
                stream: a2.ERROR,
                streamId: t3,
                reason: o2(e4)
              }));
            },
            sinkCapability: Promise.withResolvers(),
            onPull: null,
            onCancel: null,
            isCancelled: false,
            desiredSize: e3.desiredSize,
            ready: null
          };
          u2.sinkCapability.resolve(), u2.ready = u2.sinkCapability.promise, this.streamSinks[t3] = u2, new Promise(function(t4) {
            t4(l2(e3.data, u2));
          }).then(function() {
            s3.postMessage({
              sourceName: n3,
              targetName: i3,
              stream: a2.START_COMPLETE,
              streamId: t3,
              success: true
            });
          }, function(e4) {
            s3.postMessage({
              sourceName: n3,
              targetName: i3,
              stream: a2.START_COMPLETE,
              streamId: t3,
              reason: o2(e4)
            });
          });
        }
        #t(e3) {
          let t3 = e3.streamId, n3 = this.sourceName, i3 = e3.sourceName, s3 = this.comObj, c2 = this.streamControllers[t3], l2 = this.streamSinks[t3];
          switch (e3.stream) {
            case a2.START_COMPLETE:
              e3.success ? c2.startCall.resolve() : c2.startCall.reject(o2(e3.reason));
              break;
            case a2.PULL_COMPLETE:
              e3.success ? c2.pullCall.resolve() : c2.pullCall.reject(o2(e3.reason));
              break;
            case a2.PULL:
              if (!l2) {
                s3.postMessage({
                  sourceName: n3,
                  targetName: i3,
                  stream: a2.PULL_COMPLETE,
                  streamId: t3,
                  success: true
                });
                break;
              }
              l2.desiredSize <= 0 && e3.desiredSize > 0 && l2.sinkCapability.resolve(), l2.desiredSize = e3.desiredSize, new Promise(function(e4) {
                e4(l2.onPull?.());
              }).then(function() {
                s3.postMessage({
                  sourceName: n3,
                  targetName: i3,
                  stream: a2.PULL_COMPLETE,
                  streamId: t3,
                  success: true
                });
              }, function(e4) {
                s3.postMessage({
                  sourceName: n3,
                  targetName: i3,
                  stream: a2.PULL_COMPLETE,
                  streamId: t3,
                  reason: o2(e4)
                });
              });
              break;
            case a2.ENQUEUE:
              if ((0, r2.assert)(c2, `enqueue should have stream controller`), c2.isClosed) break;
              c2.controller.enqueue(e3.chunk);
              break;
            case a2.CLOSE:
              if ((0, r2.assert)(c2, `close should have stream controller`), c2.isClosed) break;
              c2.isClosed = true, c2.controller.close(), this.#n(c2, t3);
              break;
            case a2.ERROR:
              (0, r2.assert)(c2, `error should have stream controller`), c2.controller.error(o2(e3.reason)), this.#n(c2, t3);
              break;
            case a2.CANCEL_COMPLETE:
              e3.success ? c2.cancelCall.resolve() : c2.cancelCall.reject(o2(e3.reason)), this.#n(c2, t3);
              break;
            case a2.CANCEL:
              if (!l2) break;
              new Promise(function(t4) {
                t4(l2.onCancel?.(o2(e3.reason)));
              }).then(function() {
                s3.postMessage({
                  sourceName: n3,
                  targetName: i3,
                  stream: a2.CANCEL_COMPLETE,
                  streamId: t3,
                  success: true
                });
              }, function(e4) {
                s3.postMessage({
                  sourceName: n3,
                  targetName: i3,
                  stream: a2.CANCEL_COMPLETE,
                  streamId: t3,
                  reason: o2(e4)
                });
              }), l2.sinkCapability.reject(o2(e3.reason)), l2.isCancelled = true, delete this.streamSinks[t3];
              break;
            default:
              throw Error(`Unexpected stream case`);
          }
        }
        async #n(e3, t3) {
          await Promise.allSettled([
            e3.startCall?.promise,
            e3.pullCall?.promise,
            e3.cancelCall?.promise
          ]), delete this.streamControllers[t3];
        }
        destroy() {
          this.comObj.removeEventListener(`message`, this._onComObjOnMessage);
        }
      }
    }),
    651: ((e2, t2, n2) => {
      n2.d(t2, {
        MurmurHash3_64: () => o2
      });
      let r2 = 3285377520, i2 = 4294901760, a2 = 65535;
      class o2 {
        constructor(e3) {
          this.h1 = e3 ? e3 & 4294967295 : r2, this.h2 = e3 ? e3 & 4294967295 : r2;
        }
        update(e3) {
          let t3, n3;
          if (typeof e3 == `string`) {
            t3 = new Uint8Array(e3.length * 2), n3 = 0;
            for (let r4 = 0, i3 = e3.length; r4 < i3; r4++) {
              let i4 = e3.charCodeAt(r4);
              i4 <= 255 ? t3[n3++] = i4 : (t3[n3++] = i4 >>> 8, t3[n3++] = i4 & 255);
            }
          } else if (ArrayBuffer.isView(e3)) t3 = e3.slice(), n3 = t3.byteLength;
          else throw Error(`Invalid data format, must be a string or TypedArray.`);
          let r3 = n3 >> 2, o3 = n3 - r3 * 4, s2 = new Uint32Array(t3.buffer, 0, r3), c2 = 0, l2 = 0, u2 = this.h1, d2 = this.h2, f2 = 3432918353, p2 = 461845907, m2 = f2 & a2, h2 = p2 & a2;
          for (let e4 = 0; e4 < r3; e4++) e4 & 1 ? (c2 = s2[e4], c2 = c2 * f2 & i2 | c2 * m2 & a2, c2 = c2 << 15 | c2 >>> 17, c2 = c2 * p2 & i2 | c2 * h2 & a2, u2 ^= c2, u2 = u2 << 13 | u2 >>> 19, u2 = u2 * 5 + 3864292196) : (l2 = s2[e4], l2 = l2 * f2 & i2 | l2 * m2 & a2, l2 = l2 << 15 | l2 >>> 17, l2 = l2 * p2 & i2 | l2 * h2 & a2, d2 ^= l2, d2 = d2 << 13 | d2 >>> 19, d2 = d2 * 5 + 3864292196);
          switch (c2 = 0, o3) {
            case 3:
              c2 ^= t3[r3 * 4 + 2] << 16;
            case 2:
              c2 ^= t3[r3 * 4 + 1] << 8;
            case 1:
              c2 ^= t3[r3 * 4], c2 = c2 * f2 & i2 | c2 * m2 & a2, c2 = c2 << 15 | c2 >>> 17, c2 = c2 * p2 & i2 | c2 * h2 & a2, r3 & 1 ? u2 ^= c2 : d2 ^= c2;
          }
          this.h1 = u2, this.h2 = d2;
        }
        hexdigest() {
          let e3 = this.h1, t3 = this.h2;
          return e3 ^= t3 >>> 1, e3 = e3 * 3981806797 & i2 | e3 * 36045 & a2, t3 = t3 * 4283543511 & i2 | ((t3 << 16 | e3 >>> 16) * 2950163797 & i2) >>> 16, e3 ^= t3 >>> 1, e3 = e3 * 444984403 & i2 | e3 * 60499 & a2, t3 = t3 * 3301882366 & i2 | ((t3 << 16 | e3 >>> 16) * 3120437893 & i2) >>> 16, e3 ^= t3 >>> 1, (e3 >>> 0).toString(16).padStart(8, `0`) + (t3 >>> 0).toString(16).padStart(8, `0`);
        }
      }
    }),
    292: ((e2, t2, n2) => {
      n2.d(t2, {
        AbortException: () => z2,
        AnnotationBorderStyleType: () => _2,
        AnnotationEditorParamsType: () => f2,
        AnnotationEditorPrefix: () => u2,
        AnnotationEditorType: () => d2,
        AnnotationMode: () => l2,
        AnnotationPrefix: () => te,
        AnnotationType: () => g2,
        BaseException: () => M2,
        CMapCompressionType: () => y2,
        FONT_IDENTITY_MATRIX: () => a2,
        FeatureTest: () => K2,
        FontRenderOps: () => $,
        FormatError: () => R2,
        IDENTITY_MATRIX: () => i2,
        ImageKind: () => h2,
        InvalidPDFException: () => F2,
        LINE_FACTOR: () => s2,
        MAX_IMAGE_SIZE_TO_CACHE: () => o2,
        MissingPDFException: () => I2,
        OPS: () => b2,
        PasswordException: () => N2,
        PasswordResponses: () => x2,
        PermissionFlag: () => p2,
        RenderingIntentFlag: () => c2,
        TextRenderingMode: () => m2,
        UnexpectedResponseException: () => L2,
        UnknownErrorException: () => P2,
        Util: () => J2,
        VerbosityLevel: () => v2,
        assert: () => O2,
        bytesToString: () => B2,
        createValidAbsoluteUrl: () => A2,
        getUuid: () => ee,
        getVerbosityLevel: () => w2,
        info: () => T2,
        isNodeJS: () => r2,
        normalizeUnicode: () => Q2,
        objectFromMap: () => U2,
        setVerbosityLevel: () => C2,
        shadow: () => j2,
        string32: () => H2,
        stringToBytes: () => V2,
        unreachable: () => D2,
        warn: () => E2
      });
      let r2 = typeof process == `object` && process + `` == `[object process]` && !process.versions.nw && !(process.versions.electron && process.type && process.type !== `browser`), i2 = [
        1,
        0,
        0,
        1,
        0,
        0
      ], a2 = [
        1e-3,
        0,
        0,
        1e-3,
        0,
        0
      ], o2 = 1e7, s2 = 1.35;
      0.35 / s2;
      let c2 = {
        ANY: 1,
        DISPLAY: 2,
        PRINT: 4,
        SAVE: 8,
        ANNOTATIONS_FORMS: 16,
        ANNOTATIONS_STORAGE: 32,
        ANNOTATIONS_DISABLE: 64,
        OPLIST: 256
      }, l2 = {
        DISABLE: 0,
        ENABLE: 1,
        ENABLE_FORMS: 2,
        ENABLE_STORAGE: 3
      }, u2 = `pdfjs_internal_editor_`, d2 = {
        DISABLE: -1,
        NONE: 0,
        FREETEXT: 3,
        HIGHLIGHT: 9,
        STAMP: 13,
        INK: 15
      }, f2 = {
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
      }, p2 = {
        PRINT: 4,
        MODIFY_CONTENTS: 8,
        COPY: 16,
        MODIFY_ANNOTATIONS: 32,
        FILL_INTERACTIVE_FORMS: 256,
        COPY_FOR_ACCESSIBILITY: 512,
        ASSEMBLE: 1024,
        PRINT_HIGH_QUALITY: 2048
      }, m2 = {
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
      }, h2 = {
        GRAYSCALE_1BPP: 1,
        RGB_24BPP: 2,
        RGBA_32BPP: 3
      }, g2 = {
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
      }, _2 = {
        SOLID: 1,
        DASHED: 2,
        BEVELED: 3,
        INSET: 4,
        UNDERLINE: 5
      }, v2 = {
        ERRORS: 0,
        WARNINGS: 1,
        INFOS: 5
      }, y2 = {
        NONE: 0,
        BINARY: 1
      }, b2 = {
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
      }, x2 = {
        NEED_PASSWORD: 1,
        INCORRECT_PASSWORD: 2
      }, S2 = v2.WARNINGS;
      function C2(e3) {
        Number.isInteger(e3) && (S2 = e3);
      }
      function w2() {
        return S2;
      }
      function T2(e3) {
        S2 >= v2.INFOS && console.log(`Info: ${e3}`);
      }
      function E2(e3) {
        S2 >= v2.WARNINGS && console.log(`Warning: ${e3}`);
      }
      function D2(e3) {
        throw Error(e3);
      }
      function O2(e3, t3) {
        e3 || D2(t3);
      }
      function k2(e3) {
        switch (e3?.protocol) {
          case `http:`:
          case `https:`:
          case `ftp:`:
          case `mailto:`:
          case `tel:`:
            return true;
          default:
            return false;
        }
      }
      function A2(e3, t3 = null, n3 = null) {
        if (!e3) return null;
        try {
          if (n3 && typeof e3 == `string` && (n3.addDefaultProtocol && e3.startsWith(`www.`) && e3.match(/\./g)?.length >= 2 && (e3 = `http://${e3}`), n3.tryConvertEncoding)) try {
            e3 = Y2(e3);
          } catch {
          }
          let r3 = t3 ? new URL(e3, t3) : new URL(e3);
          if (k2(r3)) return r3;
        } catch {
        }
        return null;
      }
      function j2(e3, t3, n3, r3 = false) {
        return Object.defineProperty(e3, t3, {
          value: n3,
          enumerable: !r3,
          configurable: true,
          writable: false
        }), n3;
      }
      let M2 = (function() {
        function e3(t3, n3) {
          this.constructor === e3 && D2(`Cannot initialize BaseException.`), this.message = t3, this.name = n3;
        }
        return e3.prototype = Error(), e3.constructor = e3, e3;
      })();
      class N2 extends M2 {
        constructor(e3, t3) {
          super(e3, `PasswordException`), this.code = t3;
        }
      }
      class P2 extends M2 {
        constructor(e3, t3) {
          super(e3, `UnknownErrorException`), this.details = t3;
        }
      }
      class F2 extends M2 {
        constructor(e3) {
          super(e3, `InvalidPDFException`);
        }
      }
      class I2 extends M2 {
        constructor(e3) {
          super(e3, `MissingPDFException`);
        }
      }
      class L2 extends M2 {
        constructor(e3, t3) {
          super(e3, `UnexpectedResponseException`), this.status = t3;
        }
      }
      class R2 extends M2 {
        constructor(e3) {
          super(e3, `FormatError`);
        }
      }
      class z2 extends M2 {
        constructor(e3) {
          super(e3, `AbortException`);
        }
      }
      function B2(e3) {
        (typeof e3 != `object` || e3?.length === void 0) && D2(`Invalid argument for bytesToString`);
        let t3 = e3.length, n3 = 8192;
        if (t3 < n3) return String.fromCharCode.apply(null, e3);
        let r3 = [];
        for (let i3 = 0; i3 < t3; i3 += n3) {
          let a3 = Math.min(i3 + n3, t3), o3 = e3.subarray(i3, a3);
          r3.push(String.fromCharCode.apply(null, o3));
        }
        return r3.join(``);
      }
      function V2(e3) {
        typeof e3 != `string` && D2(`Invalid argument for stringToBytes`);
        let t3 = e3.length, n3 = new Uint8Array(t3);
        for (let r3 = 0; r3 < t3; ++r3) n3[r3] = e3.charCodeAt(r3) & 255;
        return n3;
      }
      function H2(e3) {
        return String.fromCharCode(e3 >> 24 & 255, e3 >> 16 & 255, e3 >> 8 & 255, e3 & 255);
      }
      function U2(e3) {
        let t3 = /* @__PURE__ */ Object.create(null);
        for (let [n3, r3] of e3) t3[n3] = r3;
        return t3;
      }
      function W2() {
        let e3 = new Uint8Array(4);
        return e3[0] = 1, new Uint32Array(e3.buffer, 0, 1)[0] === 1;
      }
      function G2() {
        try {
          return Function(``), true;
        } catch {
          return false;
        }
      }
      class K2 {
        static get isLittleEndian() {
          return j2(this, `isLittleEndian`, W2());
        }
        static get isEvalSupported() {
          return j2(this, `isEvalSupported`, G2());
        }
        static get isOffscreenCanvasSupported() {
          return j2(this, `isOffscreenCanvasSupported`, typeof OffscreenCanvas < `u`);
        }
        static get platform() {
          return typeof navigator < `u` && typeof navigator?.platform == `string` ? j2(this, `platform`, {
            isMac: navigator.platform.includes(`Mac`)
          }) : j2(this, `platform`, {
            isMac: false
          });
        }
        static get isCSSRoundSupported() {
          return j2(this, `isCSSRoundSupported`, globalThis.CSS?.supports?.(`width: round(1.5px, 1px)`));
        }
      }
      let q2 = Array.from(Array(256).keys(), (e3) => e3.toString(16).padStart(2, `0`));
      class J2 {
        static makeHexColor(e3, t3, n3) {
          return `#${q2[e3]}${q2[t3]}${q2[n3]}`;
        }
        static scaleMinMax(e3, t3) {
          let n3;
          e3[0] ? (e3[0] < 0 && (n3 = t3[0], t3[0] = t3[2], t3[2] = n3), t3[0] *= e3[0], t3[2] *= e3[0], e3[3] < 0 && (n3 = t3[1], t3[1] = t3[3], t3[3] = n3), t3[1] *= e3[3], t3[3] *= e3[3]) : (n3 = t3[0], t3[0] = t3[1], t3[1] = n3, n3 = t3[2], t3[2] = t3[3], t3[3] = n3, e3[1] < 0 && (n3 = t3[1], t3[1] = t3[3], t3[3] = n3), t3[1] *= e3[1], t3[3] *= e3[1], e3[2] < 0 && (n3 = t3[0], t3[0] = t3[2], t3[2] = n3), t3[0] *= e3[2], t3[2] *= e3[2]), t3[0] += e3[4], t3[1] += e3[5], t3[2] += e3[4], t3[3] += e3[5];
        }
        static transform(e3, t3) {
          return [
            e3[0] * t3[0] + e3[2] * t3[1],
            e3[1] * t3[0] + e3[3] * t3[1],
            e3[0] * t3[2] + e3[2] * t3[3],
            e3[1] * t3[2] + e3[3] * t3[3],
            e3[0] * t3[4] + e3[2] * t3[5] + e3[4],
            e3[1] * t3[4] + e3[3] * t3[5] + e3[5]
          ];
        }
        static applyTransform(e3, t3) {
          return [
            e3[0] * t3[0] + e3[1] * t3[2] + t3[4],
            e3[0] * t3[1] + e3[1] * t3[3] + t3[5]
          ];
        }
        static applyInverseTransform(e3, t3) {
          let n3 = t3[0] * t3[3] - t3[1] * t3[2];
          return [
            (e3[0] * t3[3] - e3[1] * t3[2] + t3[2] * t3[5] - t3[4] * t3[3]) / n3,
            (-e3[0] * t3[1] + e3[1] * t3[0] + t3[4] * t3[1] - t3[5] * t3[0]) / n3
          ];
        }
        static getAxialAlignedBoundingBox(e3, t3) {
          let n3 = this.applyTransform(e3, t3), r3 = this.applyTransform(e3.slice(2, 4), t3), i3 = this.applyTransform([
            e3[0],
            e3[3]
          ], t3), a3 = this.applyTransform([
            e3[2],
            e3[1]
          ], t3);
          return [
            Math.min(n3[0], r3[0], i3[0], a3[0]),
            Math.min(n3[1], r3[1], i3[1], a3[1]),
            Math.max(n3[0], r3[0], i3[0], a3[0]),
            Math.max(n3[1], r3[1], i3[1], a3[1])
          ];
        }
        static inverseTransform(e3) {
          let t3 = e3[0] * e3[3] - e3[1] * e3[2];
          return [
            e3[3] / t3,
            -e3[1] / t3,
            -e3[2] / t3,
            e3[0] / t3,
            (e3[2] * e3[5] - e3[4] * e3[3]) / t3,
            (e3[4] * e3[1] - e3[5] * e3[0]) / t3
          ];
        }
        static singularValueDecompose2dScale(e3) {
          let t3 = [
            e3[0],
            e3[2],
            e3[1],
            e3[3]
          ], n3 = e3[0] * t3[0] + e3[1] * t3[2], r3 = e3[0] * t3[1] + e3[1] * t3[3], i3 = e3[2] * t3[0] + e3[3] * t3[2], a3 = e3[2] * t3[1] + e3[3] * t3[3], o3 = (n3 + a3) / 2, s3 = Math.sqrt((n3 + a3) ** 2 - 4 * (n3 * a3 - i3 * r3)) / 2, c3 = o3 + s3 || 1, l3 = o3 - s3 || 1;
          return [
            Math.sqrt(c3),
            Math.sqrt(l3)
          ];
        }
        static normalizeRect(e3) {
          let t3 = e3.slice(0);
          return e3[0] > e3[2] && (t3[0] = e3[2], t3[2] = e3[0]), e3[1] > e3[3] && (t3[1] = e3[3], t3[3] = e3[1]), t3;
        }
        static intersect(e3, t3) {
          let n3 = Math.max(Math.min(e3[0], e3[2]), Math.min(t3[0], t3[2])), r3 = Math.min(Math.max(e3[0], e3[2]), Math.max(t3[0], t3[2]));
          if (n3 > r3) return null;
          let i3 = Math.max(Math.min(e3[1], e3[3]), Math.min(t3[1], t3[3])), a3 = Math.min(Math.max(e3[1], e3[3]), Math.max(t3[1], t3[3]));
          return i3 > a3 ? null : [
            n3,
            i3,
            r3,
            a3
          ];
        }
        static #e(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3) {
          if (c3 <= 0 || c3 >= 1) return;
          let u3 = 1 - c3, d3 = c3 * c3, f3 = d3 * c3, p3 = u3 * (u3 * (u3 * e3 + 3 * c3 * t3) + 3 * d3 * n3) + f3 * r3, m3 = u3 * (u3 * (u3 * i3 + 3 * c3 * a3) + 3 * d3 * o3) + f3 * s3;
          l3[0] = Math.min(l3[0], p3), l3[1] = Math.min(l3[1], m3), l3[2] = Math.max(l3[2], p3), l3[3] = Math.max(l3[3], m3);
        }
        static #t(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3) {
          if (Math.abs(c3) < 1e-12) {
            Math.abs(l3) >= 1e-12 && this.#e(e3, t3, n3, r3, i3, a3, o3, s3, -u3 / l3, d3);
            return;
          }
          let f3 = l3 ** 2 - 4 * u3 * c3;
          if (f3 < 0) return;
          let p3 = Math.sqrt(f3), m3 = 2 * c3;
          this.#e(e3, t3, n3, r3, i3, a3, o3, s3, (-l3 + p3) / m3, d3), this.#e(e3, t3, n3, r3, i3, a3, o3, s3, (-l3 - p3) / m3, d3);
        }
        static bezierBoundingBox(e3, t3, n3, r3, i3, a3, o3, s3, c3) {
          return c3 ? (c3[0] = Math.min(c3[0], e3, o3), c3[1] = Math.min(c3[1], t3, s3), c3[2] = Math.max(c3[2], e3, o3), c3[3] = Math.max(c3[3], t3, s3)) : c3 = [
            Math.min(e3, o3),
            Math.min(t3, s3),
            Math.max(e3, o3),
            Math.max(t3, s3)
          ], this.#t(e3, n3, i3, o3, t3, r3, a3, s3, 3 * (-e3 + 3 * (n3 - i3) + o3), 6 * (e3 - 2 * n3 + i3), 3 * (n3 - e3), c3), this.#t(e3, n3, i3, o3, t3, r3, a3, s3, 3 * (-t3 + 3 * (r3 - a3) + s3), 6 * (t3 - 2 * r3 + a3), 3 * (r3 - t3), c3), c3;
        }
      }
      function Y2(e3) {
        return decodeURIComponent(escape(e3));
      }
      let X2 = null, Z2 = null;
      function Q2(e3) {
        return X2 || (X2 = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Z2 = /* @__PURE__ */ new Map([
          [
            `\uFB05`,
            `\u017Ft`
          ]
        ])), e3.replaceAll(X2, (e4, t3, n3) => t3 ? t3.normalize(`NFKC`) : Z2.get(n3));
      }
      function ee() {
        if (typeof crypto < `u` && typeof crypto?.randomUUID == `function`) return crypto.randomUUID();
        let e3 = new Uint8Array(32);
        if (typeof crypto < `u` && typeof crypto?.getRandomValues == `function`) crypto.getRandomValues(e3);
        else for (let t3 = 0; t3 < 32; t3++) e3[t3] = Math.floor(Math.random() * 255);
        return B2(e3);
      }
      let te = `pdfjs_internal_id_`, $ = {
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
    })
  }, a = {};
  function o(e2) {
    var t2 = a[e2];
    if (t2 !== void 0) return t2.exports;
    var n2 = a[e2] = {
      exports: {}
    };
    return i[e2](n2, n2.exports, o), n2.exports;
  }
  (() => {
    var e2 = typeof Symbol == `function` ? /* @__PURE__ */ Symbol(`webpack queues`) : `__webpack_queues__`, t2 = typeof Symbol == `function` ? /* @__PURE__ */ Symbol(`webpack exports`) : `__webpack_exports__`, n2 = typeof Symbol == `function` ? /* @__PURE__ */ Symbol(`webpack error`) : `__webpack_error__`, r2 = (e3) => {
      e3 && e3.d < 1 && (e3.d = 1, e3.forEach((e4) => e4.r--), e3.forEach((e4) => e4.r-- ? e4.r++ : e4()));
    }, i2 = (i3) => i3.map((i4) => {
      if (typeof i4 == `object` && i4) {
        if (i4[e2]) return i4;
        if (i4.then) {
          var a2 = [];
          a2.d = 0, i4.then((e3) => {
            o2[t2] = e3, r2(a2);
          }, (e3) => {
            o2[n2] = e3, r2(a2);
          });
          var o2 = {};
          return o2[e2] = (e3) => e3(a2), o2;
        }
      }
      var s2 = {};
      return s2[e2] = (e3) => {
      }, s2[t2] = i4, s2;
    });
    o.a = (a2, o2, s2) => {
      var c2;
      s2 && ((c2 = []).d = -1);
      var l2 = /* @__PURE__ */ new Set(), u2 = a2.exports, d2, f2, p2, m2 = new Promise((e3, t3) => {
        p2 = t3, f2 = e3;
      });
      m2[t2] = u2, m2[e2] = (e3) => (c2 && e3(c2), l2.forEach(e3), m2.catch((e4) => {
      })), a2.exports = m2, o2((r3) => {
        d2 = i2(r3);
        var a3, o3 = () => d2.map((e3) => {
          if (e3[n2]) throw e3[n2];
          return e3[t2];
        }), s3 = new Promise((t3) => {
          a3 = () => t3(o3), a3.r = 0;
          var n3 = (e3) => e3 !== c2 && !l2.has(e3) && (l2.add(e3), e3 && !e3.d && (a3.r++, e3.push(a3)));
          d2.map((t4) => t4[e2](n3));
        });
        return a3.r ? s3 : o3();
      }, (e3) => (e3 ? p2(m2[n2] = e3) : f2(u2), r2(c2))), c2 && c2.d < 0 && (c2.d = 0);
    };
  })(), o.d = (e2, t2) => {
    for (var n2 in t2) o.o(t2, n2) && !o.o(e2, n2) && Object.defineProperty(e2, n2, {
      enumerable: true,
      get: t2[n2]
    });
  }, o.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
  var s = o(228);
  s = globalThis.pdfjsLib = await (globalThis.pdfjsLibPromise = s);
  c = s.AbortException;
  l = s.AnnotationEditorLayer;
  u = s.AnnotationEditorParamsType;
  d = s.AnnotationEditorType;
  f = s.AnnotationEditorUIManager;
  p = s.AnnotationLayer;
  m = s.AnnotationMode;
  h = s.CMapCompressionType;
  g = s.ColorPicker;
  _ = s.DOMSVGFactory;
  v = s.DrawLayer;
  y = s.FeatureTest;
  b = s.GlobalWorkerOptions;
  x = s.ImageKind;
  S = s.InvalidPDFException;
  C = s.MissingPDFException;
  w = s.OPS;
  T = s.Outliner;
  E = s.PDFDataRangeTransport;
  D = s.PDFDateString;
  O = s.PDFWorker;
  k = s.PasswordResponses;
  A = s.PermissionFlag;
  j = s.PixelsPerInch;
  M = s.RenderingCancelledException;
  N = s.UnexpectedResponseException;
  P = s.Util;
  F = s.VerbosityLevel;
  I = s.XfaLayer;
  L = s.build;
  R = s.createValidAbsoluteUrl;
  z = s.fetchData;
  B = s.getDocument;
  V = s.getFilenameFromUrl;
  H = s.getPdfFilenameFromUrl;
  U = s.getXfaPageViewport;
  W = s.isDataScheme;
  G = s.isPdfFile;
  K = s.noContextMenu;
  q = s.normalizeUnicode;
  J = s.renderTextLayer;
  Y = s.setLayerDimensions;
  X = s.shadow;
  Z = s.updateTextLayer;
  Q = s.version;
})();
export {
  c as AbortException,
  l as AnnotationEditorLayer,
  u as AnnotationEditorParamsType,
  d as AnnotationEditorType,
  f as AnnotationEditorUIManager,
  p as AnnotationLayer,
  m as AnnotationMode,
  h as CMapCompressionType,
  g as ColorPicker,
  _ as DOMSVGFactory,
  v as DrawLayer,
  y as FeatureTest,
  b as GlobalWorkerOptions,
  x as ImageKind,
  S as InvalidPDFException,
  C as MissingPDFException,
  w as OPS,
  T as Outliner,
  E as PDFDataRangeTransport,
  D as PDFDateString,
  O as PDFWorker,
  k as PasswordResponses,
  A as PermissionFlag,
  j as PixelsPerInch,
  M as RenderingCancelledException,
  N as UnexpectedResponseException,
  P as Util,
  F as VerbosityLevel,
  I as XfaLayer,
  __tla,
  L as build,
  R as createValidAbsoluteUrl,
  z as fetchData,
  B as getDocument,
  V as getFilenameFromUrl,
  H as getPdfFilenameFromUrl,
  U as getXfaPageViewport,
  W as isDataScheme,
  G as isPdfFile,
  K as noContextMenu,
  q as normalizeUnicode,
  J as renderTextLayer,
  Y as setLayerDimensions,
  X as shadow,
  Z as updateTextLayer,
  Q as version
};
