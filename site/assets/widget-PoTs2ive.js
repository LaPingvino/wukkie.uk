import { s as e } from "./chunk-Dmt67uKV.js";
import { i as t, n, r, t as i } from "./mergeIssueEdit-D-ArKKMg.js";
import { n as a, t as o } from "./jsx-runtime-CpwQBq6R.js";
import "./events-CLlx15qY.js";
var s = t(), c = e(a(), 1), l = r(), u = e(o(), 1);
const d = { fields: [{ key: `title`, type: `text`, label: `Title`, required: true }, { key: `status`, type: `enum`, label: `Status`, values: [`Backlog`, `To Do`, `In Progress`, `Done`], kanban_group: true }, { key: `priority`, type: `enum`, label: `Priority`, values: [`Low`, `Medium`, `High`, `Critical`] }, { key: `assignee`, type: `user`, label: `Assignee` }, { key: `due`, type: `date`, label: `Due Date` }, { key: `description`, type: `text`, label: `Description` }] };
var f = { container: { display: `flex`, flexDirection: `column`, height: `100%`, overflow: `hidden` }, toolbar: { display: `flex`, alignItems: `center`, gap: 8, padding: `8px 12px`, borderBottom: `1px solid #e0e0e0`, background: `#fafafa`, flexShrink: 0, flexWrap: `wrap` }, content: { flex: 1, overflow: `auto`, padding: `8px 0` }, muted: { fontSize: 13, color: `#666` }, btn: { padding: `4px 10px`, borderRadius: 4, border: `1px solid #ccc`, background: `#fff`, cursor: `pointer`, fontSize: 13, lineHeight: `20px` }, btnPrimary: { padding: `4px 10px`, borderRadius: 4, border: `1px solid #1976d2`, background: `#1976d2`, color: `#fff`, cursor: `pointer`, fontSize: 13, lineHeight: `20px`, fontWeight: 600 }, btnActive: { padding: `4px 10px`, borderRadius: 4, border: `1px solid #1976d2`, background: `#e3f0fd`, color: `#1976d2`, cursor: `pointer`, fontSize: 13, lineHeight: `20px` }, btnDanger: { padding: `4px 10px`, borderRadius: 4, border: `1px solid #d32f2f`, background: `#fff`, color: `#d32f2f`, cursor: `pointer`, fontSize: 13, lineHeight: `20px` }, centered: { display: `flex`, alignItems: `center`, justifyContent: `center`, height: `100%`, color: `#666` }, overlay: { position: `fixed`, inset: 0, background: `rgba(0,0,0,0.4)`, display: `flex`, alignItems: `flex-start`, justifyContent: `center`, zIndex: 1e3, overflowY: `auto`, padding: 24 }, dialog: { background: `#fff`, borderRadius: 6, boxShadow: `0 4px 24px rgba(0,0,0,0.18)`, width: `100%`, maxWidth: 520, display: `flex`, flexDirection: `column`, maxHeight: `90vh` }, dialogHeader: { display: `flex`, alignItems: `center`, justifyContent: `space-between`, padding: `12px 16px`, borderBottom: `1px solid #e0e0e0`, flexShrink: 0 }, dialogBody: { padding: 16, overflowY: `auto`, flex: 1 }, dialogFooter: { display: `flex`, alignItems: `center`, padding: `10px 16px`, borderTop: `1px solid #e0e0e0`, flexShrink: 0, gap: 8 }, input: { width: `100%`, padding: `6px 8px`, border: `1px solid #ccc`, borderRadius: 4, fontSize: 14, fontFamily: `inherit` }, label: { display: `block`, fontWeight: 600, marginBottom: 4, fontSize: 13 }, fieldGroup: { marginBottom: 12 }, table: { width: `100%`, borderCollapse: `collapse`, fontSize: 13 }, th: { textAlign: `left`, padding: `6px 12px`, borderBottom: `1px solid #e0e0e0`, color: `#555`, fontWeight: 600, whiteSpace: `nowrap` }, td: { padding: `6px 12px`, borderBottom: `1px solid #f0f0f0`, verticalAlign: `top`, wordBreak: `break-word` }, trHover: { cursor: `pointer` }, kanbanScroll: { display: `flex`, gap: 12, padding: `0 12px 12px`, overflowX: `auto`, height: `100%`, alignItems: `flex-start` }, kanbanCol: { flexShrink: 0, width: 220, background: `#f5f5f5`, borderRadius: 6, display: `flex`, flexDirection: `column`, maxHeight: `100%` }, kanbanColHeader: { padding: `8px 12px`, fontWeight: 600, fontSize: 13, borderBottom: `1px solid #e0e0e0`, display: `flex`, alignItems: `center`, justifyContent: `space-between` }, kanbanColBody: { padding: 8, overflowY: `auto`, flex: 1, display: `flex`, flexDirection: `column`, gap: 6 }, kanbanCard: { background: `#fff`, borderRadius: 4, padding: `8px 10px`, boxShadow: `0 1px 3px rgba(0,0,0,0.08)`, cursor: `pointer`, border: `1px solid #e8e8e8`, fontSize: 13 }, kanbanTitle: { fontWeight: 600, marginBottom: 4, wordBreak: `break-word` }, kanbanMeta: { color: `#777`, fontSize: 12 } };
function p(e2, t2) {
  if (t2 == null || t2 === ``) return ``;
  if (e2.type === `date`) {
    let e3 = new Date(String(t2));
    return isNaN(e3.getTime()) ? String(t2) : e3.toLocaleDateString();
  }
  return String(t2);
}
function m() {
  return `issue-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function h(e2) {
  return e2.startsWith(`@`) ? e2.slice(1).split(`:`)[0] : e2;
}
function g(e2) {
  return new Date(e2).toLocaleTimeString([], { hour: `2-digit`, minute: `2-digit` });
}
function _(e2) {
  let t2 = e2.match(/@[\w.-]+:[\w.:-]+/g) ?? [];
  return [...new Set(t2)];
}
var v = [`\u{1F44D}`, `\u{1F44E}`, `\u2764\uFE0F`, `\u{1F389}`];
function y({ reactions: e2, currentUserId: t2, onReact: n2, compact: r2 }) {
  if (e2.size === 0 && !r2) return null;
  let i2 = [...e2.entries()].sort((e3, t3) => t3[1].size - e3[1].size);
  return (0, u.jsxs)(`div`, { style: { display: `flex`, gap: 4, flexWrap: `wrap`, marginTop: r2 ? 0 : 4 }, children: [i2.map(([e3, r3]) => {
    let i3 = r3.has(t2);
    return (0, u.jsxs)(`button`, { onClick: () => n2(e3), title: [...r3].map(h).join(`, `), style: { fontSize: 12, padding: `1px 6px`, borderRadius: 10, border: i3 ? `1px solid #1976d2` : `1px solid #e0e0e0`, background: i3 ? `#e3f0fd` : `#fafafa`, color: i3 ? `#1976d2` : `inherit`, cursor: `pointer`, lineHeight: `18px`, fontFamily: `inherit` }, children: [e3, ` `, r3.size] }, e3);
  }), !r2 && v.filter((t3) => !e2.has(t3)).map((e3) => (0, u.jsx)(`button`, { onClick: () => n2(e3), title: `React with ${e3}`, style: { fontSize: 12, padding: `1px 6px`, borderRadius: 10, border: `1px dashed #ccc`, background: `transparent`, color: `#999`, cursor: `pointer`, lineHeight: `18px`, fontFamily: `inherit` }, children: e3 }, e3))] });
}
function b({ reactions: e2, commentCount: t2 }) {
  let n2 = [], r2 = [...e2.entries()].sort((e3, t3) => t3[1].size - e3[1].size).slice(0, 3);
  for (let [e3, t3] of r2) n2.push(`${e3}${t3.size}`);
  return t2 > 0 && n2.push(`\u{1F4AC}${t2}`), n2.length === 0 ? null : (0, u.jsx)(`span`, { style: { fontSize: 11, color: `#666`, whiteSpace: `nowrap` }, children: n2.join(` `) });
}
function x(e2) {
  return { ...e2, _enumRaw: e2.values?.join(`, `) ?? `` };
}
function S(e2) {
  let { _enumRaw: t2, ...n2 } = e2;
  return n2.type === `enum` ? n2.values = t2.split(`,`).map((e3) => e3.trim()).filter(Boolean) : (delete n2.values, delete n2.kanban_group), n2;
}
var C = { text: `Text`, enum: `Choice`, user: `User`, date: `Date`, follow: `Follow` };
function w({ initial: e2, onSave: t2, onCancel: n2, titleText: r2 }) {
  let [i2, a2] = c.useState(() => e2.fields.map(x)), [o2, s2] = c.useState(e2.fields[0]?.key ?? null), [l2, d2] = c.useState(false), [p2, h2] = c.useState(null), g2 = i2.find((e3) => e3.key === o2) ?? null, _2 = (e3, t3) => a2((n3) => n3.map((n4) => n4.key === e3 ? { ...n4, ...t3 } : n4)), v2 = (e3) => {
    a2((t3) => {
      let n3 = t3.filter((t4) => t4.key !== e3);
      return o2 === e3 && s2(n3[0]?.key ?? null), n3;
    });
  }, y2 = () => {
    let e3 = m();
    a2((t3) => [...t3, { key: e3, type: `text`, label: ``, _enumRaw: `` }]), s2(e3);
  }, b2 = async (e3) => {
    e3.preventDefault(), d2(true), h2(null);
    try {
      await t2({ fields: i2.map(S) });
    } catch (e4) {
      h2(e4 instanceof Error ? e4.message : `Failed to save`), d2(false);
    }
  }, w2 = { width: 160, flexShrink: 0, borderRight: `1px solid #e0e0e0`, display: `flex`, flexDirection: `column`, overflow: `hidden` }, T2 = { flex: 1, display: `flex`, flexDirection: `column`, overflow: `auto`, padding: 16, gap: 12 }, E2 = (e3) => ({ display: `flex`, flexDirection: `column`, alignItems: `flex-start`, gap: 2, padding: `6px 10px`, border: `1px solid ` + (e3 ? `#1976d2` : `transparent`), background: e3 ? `#e3f0fd` : `transparent`, borderRadius: 4, cursor: `pointer`, textAlign: `left`, width: `100%`, fontFamily: `inherit`, fontSize: 13, color: e3 ? `#1976d2` : `inherit` });
  return (0, u.jsx)(`div`, { style: f.overlay, role: `dialog`, "aria-modal": `true`, "aria-label": `Edit issue tracker schema`, children: (0, u.jsxs)(`div`, { style: { ...f.dialog, maxWidth: 580 }, children: [(0, u.jsxs)(`div`, { style: f.dialogHeader, children: [(0, u.jsx)(`strong`, { children: r2 ?? `Configure Issue Tracker Schema` }), (0, u.jsx)(`button`, { onClick: n2, style: { background: `none`, border: `none`, cursor: `pointer`, fontSize: 18, lineHeight: 1 }, "aria-label": `Close`, children: `\xD7` })] }), (0, u.jsx)(`form`, { onSubmit: b2, id: `schema-editor-form`, style: { flex: 1, display: `flex`, flexDirection: `column`, overflow: `hidden` }, children: (0, u.jsxs)(`div`, { style: { display: `flex`, flex: 1, overflow: `hidden`, minHeight: 280, maxHeight: `55vh` }, children: [(0, u.jsxs)(`div`, { style: w2, children: [(0, u.jsx)(`div`, { style: { flex: 1, overflowY: `auto`, padding: `8px 6px`, display: `flex`, flexDirection: `column`, gap: 4 }, children: i2.map((e3, t3) => (0, u.jsxs)(`button`, { type: `button`, onClick: () => s2(e3.key), style: E2(e3.key === o2), children: [(0, u.jsx)(`span`, { style: { fontWeight: 600, overflow: `hidden`, textOverflow: `ellipsis`, whiteSpace: `nowrap`, width: `100%` }, children: e3.label || `Field ${t3 + 1}` }), (0, u.jsx)(`span`, { style: { fontSize: 11, color: `#888` }, children: C[e3.type] ?? e3.type })] }, e3.key)) }), (0, u.jsx)(`div`, { style: { padding: `6px 8px`, borderTop: `1px solid #e0e0e0` }, children: (0, u.jsx)(`button`, { type: `button`, onClick: y2, style: { ...f.btn, width: `100%`, fontSize: 12 }, children: `+ Add Field` }) })] }), g2 ? (0, u.jsxs)(`div`, { style: T2, children: [(0, u.jsxs)(`div`, { style: { display: `flex`, gap: 10 }, children: [(0, u.jsxs)(`div`, { style: { flex: 1 }, children: [(0, u.jsx)(`label`, { style: f.label, htmlFor: `sf-label-${g2.key}`, children: `Label` }), (0, u.jsx)(`input`, { id: `sf-label-${g2.key}`, type: `text`, required: true, style: f.input, value: g2.label, placeholder: `e.g. Status`, onChange: (e3) => _2(g2.key, { label: e3.target.value }) })] }), (0, u.jsxs)(`div`, { style: { width: 110, flexShrink: 0 }, children: [(0, u.jsx)(`label`, { style: f.label, htmlFor: `sf-type-${g2.key}`, children: `Type` }), (0, u.jsxs)(`select`, { id: `sf-type-${g2.key}`, style: f.input, value: g2.type, onChange: (e3) => _2(g2.key, { type: e3.target.value }), children: [(0, u.jsx)(`option`, { value: `text`, children: `Text` }), (0, u.jsx)(`option`, { value: `enum`, children: `Choice` }), (0, u.jsx)(`option`, { value: `user`, children: `User` }), (0, u.jsx)(`option`, { value: `date`, children: `Date` }), (0, u.jsx)(`option`, { value: `follow`, children: `Follow` })] })] })] }), (0, u.jsxs)(`label`, { style: { display: `flex`, alignItems: `center`, gap: 6, fontSize: 13 }, children: [(0, u.jsx)(`input`, { type: `checkbox`, checked: !!g2.required, onChange: (e3) => _2(g2.key, { required: e3.target.checked || void 0 }) }), `Required`] }), g2.type === `enum` && (0, u.jsxs)(`div`, { children: [(0, u.jsx)(`label`, { style: f.label, htmlFor: `sf-vals-${g2.key}`, children: `Choices (comma-separated)` }), (0, u.jsx)(`input`, { id: `sf-vals-${g2.key}`, type: `text`, style: f.input, value: g2._enumRaw, placeholder: `e.g. To Do, In Progress, Done`, onChange: (e3) => _2(g2.key, { _enumRaw: e3.target.value }) }), (0, u.jsxs)(`label`, { style: { display: `flex`, alignItems: `center`, gap: 6, fontSize: 13, marginTop: 8 }, children: [(0, u.jsx)(`input`, { type: `checkbox`, checked: !!g2.kanban_group, onChange: (e3) => _2(g2.key, { kanban_group: e3.target.checked || void 0 }) }), `Default kanban grouping field`] })] }), (0, u.jsx)(`div`, { style: { marginTop: `auto`, paddingTop: 8 }, children: (0, u.jsx)(`button`, { type: `button`, style: f.btnDanger, onClick: () => v2(g2.key), children: `Remove Field` }) })] }) : (0, u.jsx)(`div`, { style: { ...T2, alignItems: `center`, justifyContent: `center`, color: `#999` }, children: `Add a field or select one to edit` })] }) }), (0, u.jsxs)(`div`, { style: f.dialogFooter, children: [p2 && (0, u.jsx)(`span`, { style: { color: `#d32f2f`, flex: 1, fontSize: 13 }, children: p2 }), (0, u.jsx)(`button`, { type: `button`, style: f.btn, onClick: n2, children: `Cancel` }), (0, u.jsx)(`button`, { type: `submit`, form: `schema-editor-form`, style: f.btnPrimary, disabled: l2, children: l2 ? `Saving\u2026` : `Save Schema` })] })] }) });
}
function T({ schema: e2, initial: t2, isNew: n2, canDelete: r2, issueKey: i2, creatorId: a2, lastChangedById: o2, reactions: s2, comments: l2, currentUserId: d2, onSave: p2, onDelete: m2, onCancel: _2, onReact: v2, onComment: b2 }) {
  let [x2, S2] = (0, c.useState)({ ...t2 }), [C2, w2] = (0, c.useState)(false), [T2, E2] = (0, c.useState)(``), [D2, O2] = (0, c.useState)(``), [k2, A2] = (0, c.useState)(false), j2 = (0, c.useRef)(null), M2 = (0, c.useRef)(null);
  (0, c.useEffect)(() => {
    j2.current?.focus();
  }, []), (0, c.useEffect)(() => {
    M2.current?.scrollIntoView({ behavior: `smooth` });
  }, [l2.length]);
  let N2 = async () => {
    w2(true), E2(``);
    try {
      await p2(x2);
    } catch (e3) {
      E2(String(e3)), w2(false);
    }
  }, P2 = async () => {
    if (m2) {
      w2(true);
      try {
        await m2();
      } catch (e3) {
        E2(String(e3)), w2(false);
      }
    }
  }, F = async () => {
    let e3 = D2.trim();
    if (e3) {
      A2(true);
      try {
        await b2(e3), O2(``);
      } catch (e4) {
        E2(String(e4));
      } finally {
        A2(false);
      }
    }
  }, I = (e3) => {
    e3.key === `Escape` && _2();
  }, L = (e3) => {
    e3.key === `Enter` && (e3.ctrlKey || e3.metaKey) && (e3.preventDefault(), F());
  };
  return (0, u.jsx)(`div`, { style: f.overlay, role: `dialog`, "aria-modal": `true`, "aria-label": n2 ? `New issue` : `Edit issue`, onKeyDown: I, children: (0, u.jsxs)(`div`, { style: f.dialog, children: [(0, u.jsxs)(`div`, { style: f.dialogHeader, children: [(0, u.jsx)(`strong`, { style: { fontSize: 15 }, children: n2 ? `New Issue` : `Edit Issue` }), (0, u.jsx)(`button`, { onClick: _2, style: { ...f.btn, border: `none`, background: `none`, fontSize: 18, padding: `0 4px` }, "aria-label": `Close`, children: `\u2715` })] }), (0, u.jsxs)(`div`, { style: f.dialogBody, children: [!n2 && a2 && (0, u.jsxs)(`div`, { style: { display: `flex`, gap: 16, flexWrap: `wrap`, marginBottom: 8, fontSize: 12, color: `#777` }, children: [(0, u.jsxs)(`span`, { children: [`Created by `, (0, u.jsx)(`strong`, { children: h(a2) })] }), o2 && o2 !== a2 && (0, u.jsxs)(`span`, { children: [`Last changed by `, (0, u.jsx)(`strong`, { children: h(o2) })] })] }), e2.fields.map((e3, t3) => {
    let n3 = String(x2[e3.key] ?? ``), r3 = { id: `wf-${e3.key}`, value: n3, onChange: (t4) => S2((n4) => ({ ...n4, [e3.key]: t4.target.value || void 0 })), style: f.input, ref: t3 === 0 ? j2 : void 0 };
    return (0, u.jsxs)(`div`, { style: f.fieldGroup, children: [(0, u.jsxs)(`label`, { htmlFor: `wf-${e3.key}`, style: f.label, children: [e3.label, e3.required && (0, u.jsx)(`span`, { style: { color: `#d32f2f` }, children: ` *` })] }), e3.type === `enum` && e3.values ? (0, u.jsxs)(`select`, { ...r3, children: [(0, u.jsx)(`option`, { value: ``, children: `\u2014` }), e3.values.map((e4) => (0, u.jsx)(`option`, { value: e4, children: e4 }, e4))] }) : e3.type === `date` ? (0, u.jsx)(`input`, { type: `date`, ...r3 }) : e3.key === `description` ? (0, u.jsx)(`textarea`, { ...r3, rows: 4, style: { ...f.input, resize: `vertical`, fontFamily: `inherit` } }) : (0, u.jsx)(`input`, { type: `text`, ...r3, placeholder: e3.type === `user` ? `@user:server` : `` })] }, e3.key);
  }), !n2 && (0, u.jsx)(`div`, { style: { marginBottom: 12 }, children: (0, u.jsx)(y, { reactions: s2, currentUserId: d2, onReact: v2 }) }), !n2 && (0, u.jsxs)(`div`, { style: { borderTop: `1px solid #e0e0e0`, paddingTop: 12 }, children: [(0, u.jsxs)(`div`, { style: { fontWeight: 600, fontSize: 13, marginBottom: 8, color: `#444` }, children: [`Comments`, l2.length > 0 ? ` (${l2.length})` : ``] }), l2.length === 0 && (0, u.jsx)(`div`, { style: { fontSize: 12, color: `#999`, marginBottom: 8 }, children: `No comments yet.` }), l2.length > 0 && (0, u.jsxs)(`div`, { style: { maxHeight: 180, overflowY: `auto`, marginBottom: 8, paddingRight: 4 }, children: [l2.map((e3) => {
    let t3 = String(e3.content.body ?? ``);
    return (0, u.jsxs)(`div`, { style: { marginBottom: 10 }, children: [(0, u.jsxs)(`div`, { style: { display: `flex`, alignItems: `baseline`, gap: 6, marginBottom: 2 }, children: [(0, u.jsx)(`span`, { style: { fontWeight: 600, fontSize: 12 }, children: h(e3.sender) }), (0, u.jsx)(`span`, { style: { color: `#aaa`, fontSize: 11 }, children: g(e3.origin_server_ts) })] }), (0, u.jsx)(`div`, { style: { fontSize: 13, whiteSpace: `pre-wrap`, wordBreak: `break-word`, lineHeight: 1.4 }, children: t3 })] }, e3.event_id ?? e3.origin_server_ts);
  }), (0, u.jsx)(`div`, { ref: M2 })] }), (0, u.jsxs)(`div`, { style: { display: `flex`, gap: 6, alignItems: `flex-end` }, children: [(0, u.jsx)(`div`, { style: { flex: 1 }, children: (0, u.jsx)(`textarea`, { value: D2, onChange: (e3) => O2(e3.target.value), onKeyDown: L, placeholder: `Add a comment\u2026 (@user:server for mentions, Ctrl+Enter to send)`, "aria-label": `Add a comment`, rows: 2, style: { ...f.input, resize: `none`, fontFamily: `inherit` }, disabled: k2 }) }), (0, u.jsx)(`button`, { onClick: F, disabled: !D2.trim() || k2, style: { ...f.btnPrimary, flexShrink: 0, alignSelf: `flex-end` }, children: k2 ? `\u2026` : `Send` })] }), (0, u.jsx)(`div`, { style: { fontSize: 11, color: `#aaa`, marginTop: 3 }, children: `Use @user:server.com to mention someone` })] }), T2 && (0, u.jsx)(`div`, { style: { color: `#d32f2f`, marginTop: 8, fontSize: 13 }, children: T2 })] }), (0, u.jsxs)(`div`, { style: f.dialogFooter, children: [r2 && m2 && (0, u.jsx)(`button`, { onClick: P2, disabled: C2, style: f.btnDanger, children: `Delete` }), (0, u.jsxs)(`div`, { style: { display: `flex`, gap: 8, marginLeft: `auto` }, children: [(0, u.jsx)(`button`, { onClick: _2, disabled: C2, style: f.btn, children: `Cancel` }), (0, u.jsx)(`button`, { onClick: N2, disabled: C2, style: f.btnPrimary, children: C2 ? `Saving\u2026` : `Save` })] })] })] }) });
}
function E({ issues: e2, schema: t2, reactionsByIssue: n2, commentCountByIssue: r2, onEdit: i2 }) {
  let a2 = (0, c.useMemo)(() => {
    let e3 = t2.fields.find((e4) => e4.key === `title`) ?? t2.fields[0], n3 = t2.fields.filter((t3) => t3 !== e3).slice(0, 3);
    return e3 ? [e3, ...n3] : n3;
  }, [t2]), [o2, s2] = (0, c.useState)(null);
  return e2.length === 0 ? (0, u.jsxs)(`div`, { style: { ...f.centered, flexDirection: `column`, gap: 8 }, children: [(0, u.jsx)(`span`, { style: { fontSize: 32 }, children: `\u{1F4CB}` }), (0, u.jsx)(`span`, { style: f.muted, children: `No issues yet` })] }) : (0, u.jsxs)(`table`, { style: f.table, children: [(0, u.jsx)(`thead`, { children: (0, u.jsxs)(`tr`, { children: [a2.map((e3) => (0, u.jsx)(`th`, { style: f.th, children: e3.label }, e3.key)), (0, u.jsx)(`th`, { style: { ...f.th, width: 1 }, "aria-label": `Activity` })] }) }), (0, u.jsx)(`tbody`, { children: e2.map((e3) => (0, u.jsxs)(`tr`, { onMouseEnter: () => s2(e3.stateKey), onMouseLeave: () => s2(null), style: { background: o2 === e3.stateKey ? `#f5f8ff` : void 0 }, children: [a2.map((t3, n3) => (0, u.jsx)(`td`, { style: f.td, children: n3 === 0 && i2 ? (0, u.jsx)(`button`, { onClick: () => i2(e3), style: { background: `none`, border: `none`, padding: 0, cursor: `pointer`, font: `inherit`, color: `#1976d2`, textDecoration: `underline`, textAlign: `left` }, "aria-label": `Open issue: ${String(e3.content[t3.key] ?? `(untitled)`)}`, children: p(t3, e3.content[t3.key]) || (0, u.jsx)(`span`, { style: { color: `#bbb` }, children: `\u2014` }) }) : p(t3, e3.content[t3.key]) || (0, u.jsx)(`span`, { style: { color: `#bbb` }, children: `\u2014` }) }, t3.key)), (0, u.jsx)(`td`, { style: { ...f.td, whiteSpace: `nowrap`, paddingLeft: 4 }, children: (0, u.jsx)(b, { reactions: n2.get(e3.stateKey) ?? /* @__PURE__ */ new Map(), commentCount: r2.get(e3.stateKey) ?? 0 }) })] }, e3.stateKey)) })] });
}
function D({ issues: e2, schema: t2, kanbanField: n2, reactionsByIssue: r2, commentCountByIssue: i2, onEdit: a2, hiddenColumns: o2, onHideColumn: s2 }) {
  let l2 = t2.fields.find((e3) => e3.key === `title`) ?? t2.fields[0], d2 = t2.fields.filter((e3) => e3 !== l2 && e3 !== n2).slice(0, 2), m2 = (0, c.useMemo)(() => {
    let t3 = n2.values ?? [], r3 = Object.fromEntries(t3.map((e3) => [e3, []])), i3 = [];
    for (let t4 of e2) {
      let e3 = String(t4.content[n2.key] ?? ``);
      e3 && r3[e3] ? r3[e3].push(t4) : i3.push(t4);
    }
    let a3 = t3.map((e3) => ({ label: e3, issues: r3[e3] }));
    return i3.length > 0 && a3.push({ label: `(Unset)`, issues: i3 }), a3;
  }, [e2, n2]).filter((e3) => !o2.has(e3.label));
  return e2.length === 0 ? (0, u.jsxs)(`div`, { style: { ...f.centered, flexDirection: `column`, gap: 8 }, children: [(0, u.jsx)(`span`, { style: { fontSize: 32 }, children: `\u{1F4CB}` }), (0, u.jsx)(`span`, { style: f.muted, children: `No issues yet` })] }) : (0, u.jsx)(`div`, { style: f.kanbanScroll, children: m2.map((e3) => (0, u.jsxs)(`div`, { style: f.kanbanCol, children: [(0, u.jsxs)(`div`, { style: f.kanbanColHeader, children: [(0, u.jsx)(`span`, { children: e3.label }), (0, u.jsxs)(`span`, { style: { display: `flex`, alignItems: `center`, gap: 6 }, children: [(0, u.jsx)(`span`, { style: { color: `#999`, fontSize: 12 }, children: e3.issues.length }), (0, u.jsx)(`button`, { type: `button`, "aria-label": `Hide ` + e3.label + ` column`, onClick: () => s2(e3.label), style: { background: `transparent`, border: `none`, cursor: `pointer`, padding: `0 2px`, color: `inherit`, opacity: 0.5, fontSize: `0.9em`, lineHeight: 1 }, children: `\u2715` })] })] }), (0, u.jsx)(`div`, { style: f.kanbanColBody, children: e3.issues.map((e4) => {
    let t3 = l2 ? String(e4.content[l2.key] ?? ``) || `(untitled)` : e4.stateKey, n3 = r2.get(e4.stateKey) ?? /* @__PURE__ */ new Map(), o3 = i2.get(e4.stateKey) ?? 0;
    return (0, u.jsxs)(`div`, { style: f.kanbanCard, onClick: () => a2?.(e4), role: a2 ? `button` : void 0, tabIndex: a2 ? 0 : void 0, onKeyDown: a2 ? (t4) => {
      (t4.key === `Enter` || t4.key === ` `) && a2(e4);
    } : void 0, "aria-label": t3, children: [(0, u.jsx)(`div`, { style: f.kanbanTitle, children: t3 }), d2.map((t4) => {
      let n4 = p(t4, e4.content[t4.key]);
      return n4 ? (0, u.jsxs)(`div`, { style: f.kanbanMeta, children: [t4.label, `: `, n4] }, t4.key) : null;
    }), (n3.size > 0 || o3 > 0) && (0, u.jsx)(`div`, { style: { marginTop: 6 }, children: (0, u.jsx)(b, { reactions: n3, commentCount: o3 }) })] }, e4.stateKey);
  }) })] }, e3.label)) });
}
function O({ widgetApi: e2 }) {
  let [t2, r2] = (0, c.useState)(null), [a2, o2] = (0, c.useState)([]), [s2, p2] = (0, c.useState)(false), [h2, g2] = (0, c.useState)(true), [v2, y2] = (0, c.useState)(null), [b2, x2] = (0, c.useState)(`list`), [S2, C2] = (0, c.useState)(null), O2 = (0, c.useRef)(a2);
  O2.current = a2;
  let [k2, A2] = (0, c.useState)(false), [j2, M2] = (0, c.useState)(/* @__PURE__ */ new Set()), N2 = (e3) => M2((t3) => /* @__PURE__ */ new Set([...t3, e3])), P2 = (e3) => M2((t3) => {
    let n2 = new Set(t3);
    return n2.delete(e3), n2;
  }), [F, I] = (0, c.useState)([]), [L, R] = (0, c.useState)([]), z = (0, c.useMemo)(() => new URLSearchParams(window.location.search).get(`userId`) ?? ``, []);
  (0, c.useEffect)(() => {
    let t3 = false;
    async function n2() {
      try {
        let [n3, i2, a3, s3, c2, l2] = await Promise.all([e2.readStateEvents(`eu.kiefte.issues.schema`, 1), e2.readStateEvents(`eu.kiefte.issue`, 1e4), e2.readStateEvents(`m.room.power_levels`, 1), e2.readRoomEvents(`m.room.message`, 2e3).catch(() => []), e2.readRoomEvents(`m.reaction`, 5e3).catch(() => []), e2.readRoomEvents(`eu.kiefte.issue`, 1e4).catch(() => [])]);
        if (t3) return;
        let u2 = /* @__PURE__ */ new Map();
        for (let e3 of l2.sort((e4, t4) => e4.origin_server_ts - t4.origin_server_ts)) e3.state_key && !u2.has(e3.state_key) && u2.set(e3.state_key, e3.sender);
        let d2 = n3[0]?.content;
        r2(d2?.fields ? d2 : null), o2(i2.filter((e3) => e3.state_key && !e3.content?._deleted).map((e3) => ({ stateKey: e3.state_key, eventId: e3.event_id ?? ``, content: e3.content, sender: e3.sender, creatorId: u2.get(e3.state_key) ?? e3.sender, ts: e3.origin_server_ts })));
        let f2 = a3[0]?.content;
        p2(f2 && z ? (f2.users?.[z] ?? f2.users_default ?? 0) >= (f2.state_default ?? 50) : true), I(s3.filter((e3) => e3.content[`eu.kiefte.issue_id`])), R(c2);
      } catch (e3) {
        t3 || y2(String(e3));
      } finally {
        t3 || g2(false);
      }
    }
    return n2(), () => {
      t3 = true;
    };
  }, [e2, z]), (0, c.useEffect)(() => {
    let t3 = `action:${l.WidgetApiToWidgetAction.SendEvent}`, n2 = (e3) => {
      let t4 = e3?.detail?.data ?? e3;
      if (t4?.type) if (t4.type === `eu.kiefte.issues.schema`) {
        let e4 = t4.content;
        e4?.fields && r2(e4);
      } else if (t4.type === `eu.kiefte.issue` && t4.state_key) {
        let e4 = t4.content;
        e4?._deleted ? o2((e5) => e5.filter((e6) => e6.stateKey !== t4.state_key)) : o2((n3) => {
          let r3 = n3.find((e5) => e5.stateKey === t4.state_key);
          return [...n3.filter((e5) => e5.stateKey !== t4.state_key), { stateKey: t4.state_key, eventId: t4.event_id ?? ``, content: e4, sender: t4.sender, creatorId: r3?.creatorId ?? t4.sender, ts: t4.origin_server_ts }];
        });
      } else t4.type === `m.reaction` ? R((e4) => [...t4.event_id ? e4.filter((e5) => e5.event_id !== t4.event_id) : e4, t4]) : t4.type === `m.room.message` && t4.content[`eu.kiefte.issue_id`] && I((e4) => [...t4.event_id ? e4.filter((e5) => e5.event_id !== t4.event_id) : e4, t4]);
    };
    return e2.on(t3, n2), () => {
      e2.off(t3, n2);
    };
  }, [e2]);
  let B = (0, c.useMemo)(() => {
    let e3 = /* @__PURE__ */ new Map();
    for (let t3 of a2) t3.eventId && e3.set(t3.eventId, t3.stateKey);
    return e3;
  }, [a2]), V = (0, c.useMemo)(() => {
    let e3 = /* @__PURE__ */ new Map();
    for (let t3 of L) {
      let n2 = t3.content?.[`m.relates_to`];
      if (n2?.rel_type !== `m.annotation` || !n2.event_id || !n2.key) continue;
      let r3 = B.get(n2.event_id);
      if (!r3) continue;
      e3.has(r3) || e3.set(r3, /* @__PURE__ */ new Map());
      let i2 = e3.get(r3);
      i2.has(n2.key) || i2.set(n2.key, /* @__PURE__ */ new Set()), i2.get(n2.key).add(t3.sender);
    }
    return e3;
  }, [L, B]), H = (0, c.useMemo)(() => {
    let e3 = /* @__PURE__ */ new Map();
    for (let t3 of F) {
      let n2 = t3.content[`eu.kiefte.issue_id`];
      n2 && e3.set(n2, (e3.get(n2) ?? 0) + 1);
    }
    return e3;
  }, [F]), U = (0, c.useMemo)(() => {
    let e3 = S2 !== null && S2 !== `new` ? S2.stateKey : null;
    return e3 ? F.filter((t3) => t3.content[`eu.kiefte.issue_id`] === e3).sort((e4, t3) => e4.origin_server_ts - t3.origin_server_ts) : [];
  }, [F, S2]), W = (0, c.useCallback)(async (r3, a3, s3) => {
    let c2 = a3;
    if (s3) {
      let e3 = O2.current.find((e4) => e4.stateKey === r3), o3 = e3 ? e3.content : { _deleted: true }, { merged: l2, conflicts: u2 } = n(s3.content, a3, o3);
      i(t2, u2, o3, l2), c2 = l2;
    }
    await e2.sendStateEvent(`eu.kiefte.issue`, r3, c2), o2((e3) => {
      let t3 = e3.find((e4) => e4.stateKey === r3);
      return [...e3.filter((e4) => e4.stateKey !== r3), { stateKey: r3, eventId: ``, content: c2, sender: z, creatorId: t3?.creatorId ?? z, ts: Date.now() }];
    }), C2(null);
  }, [e2, z, t2]), G = (0, c.useCallback)(async (t3) => {
    await e2.sendStateEvent(`eu.kiefte.issue`, t3, { _deleted: true }), o2((e3) => e3.filter((e4) => e4.stateKey !== t3)), C2(null);
  }, [e2]), K = (0, c.useCallback)(async (t3) => {
    r2(t3), A2(false), await e2.sendStateEvent(`eu.kiefte.issues.schema`, ``, t3);
  }, [e2]), q = (0, c.useCallback)(async (t3, n2) => {
    let r3 = _(n2), i2 = { msgtype: `m.text`, body: n2, "eu.kiefte.issue_id": t3 };
    r3.length > 0 && (i2[`m.mentions`] = { user_ids: r3 });
    let a3 = { event_id: `local-${Date.now()}`, type: `m.room.message`, sender: z, origin_server_ts: Date.now(), content: i2, room_id: ``, unsigned: {} };
    I((e3) => [...e3, a3]), await e2.sendRoomEvent(`m.room.message`, i2);
  }, [e2, z]), J = (0, c.useCallback)(async (t3, n2) => {
    let r3 = a2.find((e3) => e3.stateKey === t3);
    if (!r3?.eventId) return;
    let i2 = { "m.relates_to": { rel_type: `m.annotation`, event_id: r3.eventId, key: n2 } };
    await e2.sendRoomEvent(`m.reaction`, i2);
  }, [e2, a2]), Y = (0, c.useMemo)(() => a2.filter((e3) => !e3.content._deleted).sort((e3, t3) => t3.ts - e3.ts), [a2]), X = S2 !== null && S2 !== `new` ? S2 : null, ee = X?.content ?? {}, Z = X?.stateKey ?? null;
  if (h2) return (0, u.jsx)(`div`, { style: f.centered, children: `Loading\u2026` });
  if (v2) return (0, u.jsxs)(`div`, { style: { ...f.centered, flexDirection: `column`, gap: 12, padding: 24, textAlign: `center` }, children: [(0, u.jsx)(`div`, { style: { color: `#d32f2f` }, children: `Failed to load issues` }), (0, u.jsx)(`div`, { style: { ...f.muted, fontSize: 12, maxWidth: 320, wordBreak: `break-all` }, children: v2 }), (0, u.jsx)(`div`, { style: f.muted, children: `Make sure this client supports MSC2762 widget state event capabilities.` })] });
  if (!t2) return s2 ? (0, u.jsx)(w, { initial: d, titleText: `Initialize Issue Tracker`, onSave: K, onCancel: () => {
  } }) : (0, u.jsxs)(`div`, { style: { ...f.centered, flexDirection: `column`, gap: 8, padding: 24, textAlign: `center` }, children: [(0, u.jsx)(`span`, { style: { fontSize: 32 }, children: `\u{1F4CB}` }), (0, u.jsx)(`div`, { style: { fontWeight: 600 }, children: `Issue Tracker Not Set Up` }), (0, u.jsx)(`div`, { style: f.muted, children: `Ask a room admin to initialize the issue tracker.` })] });
  let Q = t2, $ = Q.fields.find((e3) => e3.kanban_group && e3.type === `enum`);
  return (0, u.jsxs)(`div`, { style: f.container, children: [(0, u.jsxs)(`div`, { style: f.toolbar, role: `toolbar`, "aria-label": `Issue tracker controls`, children: [(0, u.jsxs)(`span`, { style: f.muted, children: [Y.length, ` `, Y.length === 1 ? `issue` : `issues`] }), (0, u.jsxs)(`div`, { style: { display: `flex`, gap: 6, alignItems: `center`, marginLeft: `auto`, flexWrap: `wrap` }, children: [$ && (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(`button`, { onClick: () => x2(`list`), style: b2 === `list` ? f.btnActive : f.btn, "aria-pressed": b2 === `list`, children: `List` }), (0, u.jsx)(`button`, { onClick: () => x2(`kanban`), style: b2 === `kanban` ? f.btnActive : f.btn, "aria-pressed": b2 === `kanban`, children: `Kanban` }), b2 === `kanban` && j2.size > 0 && [...j2].map((e3) => (0, u.jsx)(`button`, { onClick: () => P2(e3), style: f.btn, "aria-label": `Show ` + e3 + ` column`, children: e3 }, e3))] }), s2 && (0, u.jsx)(`button`, { onClick: () => A2(true), style: f.btn, "aria-label": `Edit issue tracker schema`, children: `\u2699 Schema` }), s2 && (0, u.jsx)(`button`, { onClick: () => C2(`new`), style: f.btnPrimary, "aria-label": `New issue`, "aria-keyshortcuts": `n`, children: `+ New Issue` })] })] }), (0, u.jsx)(`div`, { style: f.content, children: b2 === `kanban` && $ ? (0, u.jsx)(D, { issues: Y, schema: Q, kanbanField: $, reactionsByIssue: V, commentCountByIssue: H, onEdit: s2 ? C2 : void 0, hiddenColumns: j2, onHideColumn: N2 }) : (0, u.jsx)(E, { issues: Y, schema: Q, reactionsByIssue: V, commentCountByIssue: H, onEdit: s2 ? C2 : void 0 }) }), S2 !== null && (0, u.jsx)(T, { schema: Q, initial: ee, isNew: S2 === `new`, canDelete: s2 && S2 !== `new`, issueKey: Z, creatorId: S2 === `new` ? void 0 : S2.creatorId, lastChangedById: S2 !== `new` && S2.sender !== S2.creatorId ? S2.sender : void 0, reactions: V.get(Z ?? ``) ?? /* @__PURE__ */ new Map(), comments: U, currentUserId: z, onSave: async (e3) => {
    await W(Z ?? m(), e3, S2 !== `new` && S2 !== null ? S2 : void 0);
  }, onDelete: Z ? () => G(Z) : void 0, onCancel: () => C2(null), onReact: (e3) => {
    Z && J(Z, e3);
  }, onComment: async (e3) => {
    Z && await q(Z, e3);
  } }), k2 && (0, u.jsx)(w, { initial: Q, onSave: K, onCancel: () => A2(false) })] });
}
var k = r(), A = new URLSearchParams(window.location.search), j = A.get(`widgetId`) ?? void 0, M = A.get(`parentUrl`) ?? void 0, N = new k.WidgetApi(j, M);
N.requestCapabilityToReceiveState(`eu.kiefte.issue`), N.requestCapabilityToReceiveState(`eu.kiefte.issues.schema`), N.requestCapabilityToSendState(`eu.kiefte.issue`), N.requestCapabilityToSendState(`eu.kiefte.issues.schema`), N.requestCapabilityToReceiveState(`m.room.power_levels`), N.requestCapabilityToReceiveEvent(`eu.kiefte.issue`), N.requestCapabilityToReceiveEvent(`m.room.message`), N.requestCapabilityToSendEvent(`m.room.message`), N.requestCapabilityToReceiveEvent(`m.reaction`), N.requestCapabilityToSendEvent(`m.reaction`), N.start(), N.sendContentLoaded();
var P = false;
N.once(`ready`, () => {
  P = true, (0, s.createRoot)(document.getElementById(`widget-root`)).render((0, u.jsx)(O, { widgetApi: N }));
}), setTimeout(() => {
  if (P) return;
  let e2 = window.parent !== window, t2 = !!M;
  (0, s.createRoot)(document.getElementById(`widget-root`)).render((0, u.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, height: `100vh`, gap: 16, padding: 24, textAlign: `center`, fontFamily: `system-ui, sans-serif`, color: `#444` }, children: [(0, u.jsx)(`div`, { style: { fontSize: 32 }, children: `\u{1F4CB}` }), (0, u.jsx)(`div`, { style: { fontWeight: 600, fontSize: 18 }, children: `Matrix Issue Tracker Widget` }), e2 && !t2 && (0, u.jsx)(`div`, { style: { maxWidth: 520, color: `#c62828`, lineHeight: 1.6, fontSize: 14 }, children: `The widget API is not active. This widget was embedded as a plain iframe \u2014 it must be registered as a room state event to work (see below).` }), (0, u.jsxs)(`div`, { style: { maxWidth: 520, color: `#555`, fontSize: 13, lineHeight: 1.7, textAlign: `left` }, children: [(0, u.jsx)(`p`, { style: { marginBottom: 8 }, children: `Send the following state event in the room where you want the widget. Any Matrix client with developer tools works (Gomuks, Element Web, etc.).` }), (0, u.jsx)(`pre`, { style: { background: `#f5f5f5`, padding: `10px 14px`, borderRadius: 4, fontSize: 12, overflowX: `auto`, margin: 0 }, children: `Event type:  im.vector.modular.widgets
State key:   eu.kiefte.issue-tracker
Content:
{
  "type": "m.custom",
  "url": "${window.location.origin + window.location.pathname}?roomId=$matrix_room_id&userId=$matrix_user_id",
  "name": "Issue Tracker",
  "id": "eu.kiefte.issue-tracker"
}` }), (0, u.jsxs)(`p`, { style: { marginTop: 10, color: `#777` }, children: [(0, u.jsx)(`strong`, { children: `Gomuks:` }), ` open Developer Tools (\u22EE menu \u2192 Developer tools), go to "Send custom event", set type to `, (0, u.jsx)(`code`, { children: `im.vector.modular.widgets` }), `, state key to `, (0, u.jsx)(`code`, { children: `eu.kiefte.issue-tracker` }), `, paste the content above.`] }), (0, u.jsxs)(`p`, { style: { marginTop: 6, color: `#777` }, children: [(0, u.jsx)(`strong`, { children: `Element Web:` }), ` use the `, (0, u.jsx)(`code`, { children: `/addwidget` }), ` slash command in the room chat:`] }), (0, u.jsx)(`pre`, { style: { background: `#f5f5f5`, padding: `6px 14px`, borderRadius: 4, fontSize: 12, overflowX: `auto`, margin: `4px 0` }, children: `/addwidget ${window.location.origin + window.location.pathname}?roomId=$matrix_room_id&userId=$matrix_user_id` }), (0, u.jsxs)(`p`, { style: { marginTop: 4, color: `#999`, fontSize: 12 }, children: [`Or use the`, ` `, (0, u.jsx)(`a`, { href: `https://github.com/LaPingvino/wally`, style: { color: `#1976d2` }, children: `Wally` }), `'s built-in "Enable widget" button in the issue board toolbar. Also see`, ` `, (0, u.jsx)(`a`, { href: `https://github.com/lapingvino/matrix-issue-widget`, style: { color: `#1976d2` }, children: `matrix-issue-widget on GitHub` }), `.`] })] })] }));
}, 4e3);
