import { s as e } from "./chunk-Dmt67uKV.js";
import { n as t, t as n } from "./lib-CcsPTYo7.js";
import { n as r, t as i } from "./jsx-runtime-CpwQBq6R.js";
import "./events-CLlx15qY.js";
var a = t(), o = e(r(), 1), s = n(), c = e(i(), 1);
const l = { fields: [{ key: `title`, type: `text`, label: `Title`, required: true }, { key: `status`, type: `enum`, label: `Status`, values: [`Backlog`, `To Do`, `In Progress`, `Done`], kanban_group: true }, { key: `priority`, type: `enum`, label: `Priority`, values: [`Low`, `Medium`, `High`, `Critical`] }, { key: `assignee`, type: `user`, label: `Assignee` }, { key: `due`, type: `date`, label: `Due Date` }, { key: `description`, type: `text`, label: `Description` }] };
var u = { container: { display: `flex`, flexDirection: `column`, height: `100%`, overflow: `hidden` }, toolbar: { display: `flex`, alignItems: `center`, gap: 8, padding: `8px 12px`, borderBottom: `1px solid #e0e0e0`, background: `#fafafa`, flexShrink: 0, flexWrap: `wrap` }, content: { flex: 1, overflow: `auto`, padding: `8px 0` }, muted: { fontSize: 13, color: `#666` }, btn: { padding: `4px 10px`, borderRadius: 4, border: `1px solid #ccc`, background: `#fff`, cursor: `pointer`, fontSize: 13, lineHeight: `20px` }, btnPrimary: { padding: `4px 10px`, borderRadius: 4, border: `1px solid #1976d2`, background: `#1976d2`, color: `#fff`, cursor: `pointer`, fontSize: 13, lineHeight: `20px`, fontWeight: 600 }, btnActive: { padding: `4px 10px`, borderRadius: 4, border: `1px solid #1976d2`, background: `#e3f0fd`, color: `#1976d2`, cursor: `pointer`, fontSize: 13, lineHeight: `20px` }, btnDanger: { padding: `4px 10px`, borderRadius: 4, border: `1px solid #d32f2f`, background: `#fff`, color: `#d32f2f`, cursor: `pointer`, fontSize: 13, lineHeight: `20px` }, centered: { display: `flex`, alignItems: `center`, justifyContent: `center`, height: `100%`, color: `#666` }, overlay: { position: `fixed`, inset: 0, background: `rgba(0,0,0,0.4)`, display: `flex`, alignItems: `flex-start`, justifyContent: `center`, zIndex: 1e3, overflowY: `auto`, padding: 24 }, dialog: { background: `#fff`, borderRadius: 6, boxShadow: `0 4px 24px rgba(0,0,0,0.18)`, width: `100%`, maxWidth: 520, display: `flex`, flexDirection: `column`, maxHeight: `90vh` }, dialogHeader: { display: `flex`, alignItems: `center`, justifyContent: `space-between`, padding: `12px 16px`, borderBottom: `1px solid #e0e0e0`, flexShrink: 0 }, dialogBody: { padding: 16, overflowY: `auto`, flex: 1 }, dialogFooter: { display: `flex`, alignItems: `center`, padding: `10px 16px`, borderTop: `1px solid #e0e0e0`, flexShrink: 0, gap: 8 }, input: { width: `100%`, padding: `6px 8px`, border: `1px solid #ccc`, borderRadius: 4, fontSize: 14, fontFamily: `inherit` }, label: { display: `block`, fontWeight: 600, marginBottom: 4, fontSize: 13 }, fieldGroup: { marginBottom: 12 }, table: { width: `100%`, borderCollapse: `collapse`, fontSize: 13 }, th: { textAlign: `left`, padding: `6px 12px`, borderBottom: `1px solid #e0e0e0`, color: `#555`, fontWeight: 600, whiteSpace: `nowrap` }, td: { padding: `6px 12px`, borderBottom: `1px solid #f0f0f0`, verticalAlign: `top`, wordBreak: `break-word` }, trHover: { cursor: `pointer` }, kanbanScroll: { display: `flex`, gap: 12, padding: `0 12px 12px`, overflowX: `auto`, height: `100%`, alignItems: `flex-start` }, kanbanCol: { flexShrink: 0, width: 220, background: `#f5f5f5`, borderRadius: 6, display: `flex`, flexDirection: `column`, maxHeight: `100%` }, kanbanColHeader: { padding: `8px 12px`, fontWeight: 600, fontSize: 13, borderBottom: `1px solid #e0e0e0`, display: `flex`, alignItems: `center`, justifyContent: `space-between` }, kanbanColBody: { padding: 8, overflowY: `auto`, flex: 1, display: `flex`, flexDirection: `column`, gap: 6 }, kanbanCard: { background: `#fff`, borderRadius: 4, padding: `8px 10px`, boxShadow: `0 1px 3px rgba(0,0,0,0.08)`, cursor: `pointer`, border: `1px solid #e8e8e8`, fontSize: 13 }, kanbanTitle: { fontWeight: 600, marginBottom: 4, wordBreak: `break-word` }, kanbanMeta: { color: `#777`, fontSize: 12 } };
function d(e2, t2) {
  if (t2 == null || t2 === ``) return ``;
  if (e2.type === `date`) {
    let e3 = new Date(String(t2));
    return isNaN(e3.getTime()) ? String(t2) : e3.toLocaleDateString();
  }
  return String(t2);
}
function f() {
  return `issue-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function p(e2) {
  return e2.startsWith(`@`) ? e2.slice(1).split(`:`)[0] : e2;
}
function m(e2) {
  return new Date(e2).toLocaleTimeString([], { hour: `2-digit`, minute: `2-digit` });
}
function h(e2) {
  let t2 = e2.match(/@[\w.-]+:[\w.:-]+/g) ?? [];
  return [...new Set(t2)];
}
var g = [`\u{1F44D}`, `\u{1F44E}`, `\u2764\uFE0F`, `\u{1F389}`];
function _({ reactions: e2, currentUserId: t2, onReact: n2, compact: r2 }) {
  if (e2.size === 0 && !r2) return null;
  let i2 = [...e2.entries()].sort((e3, t3) => t3[1].size - e3[1].size);
  return (0, c.jsxs)(`div`, { style: { display: `flex`, gap: 4, flexWrap: `wrap`, marginTop: r2 ? 0 : 4 }, children: [i2.map(([e3, r3]) => {
    let i3 = r3.has(t2);
    return (0, c.jsxs)(`button`, { onClick: () => n2(e3), title: [...r3].map(p).join(`, `), style: { fontSize: 12, padding: `1px 6px`, borderRadius: 10, border: i3 ? `1px solid #1976d2` : `1px solid #e0e0e0`, background: i3 ? `#e3f0fd` : `#fafafa`, color: i3 ? `#1976d2` : `inherit`, cursor: `pointer`, lineHeight: `18px`, fontFamily: `inherit` }, children: [e3, ` `, r3.size] }, e3);
  }), !r2 && g.filter((t3) => !e2.has(t3)).map((e3) => (0, c.jsx)(`button`, { onClick: () => n2(e3), title: `React with ${e3}`, style: { fontSize: 12, padding: `1px 6px`, borderRadius: 10, border: `1px dashed #ccc`, background: `transparent`, color: `#999`, cursor: `pointer`, lineHeight: `18px`, fontFamily: `inherit` }, children: e3 }, e3))] });
}
function v({ reactions: e2, commentCount: t2 }) {
  let n2 = [], r2 = [...e2.entries()].sort((e3, t3) => t3[1].size - e3[1].size).slice(0, 3);
  for (let [e3, t3] of r2) n2.push(`${e3}${t3.size}`);
  return t2 > 0 && n2.push(`\u{1F4AC}${t2}`), n2.length === 0 ? null : (0, c.jsx)(`span`, { style: { fontSize: 11, color: `#666`, whiteSpace: `nowrap` }, children: n2.join(` `) });
}
function y(e2) {
  return { ...e2, _enumRaw: e2.values?.join(`, `) ?? `` };
}
function b(e2) {
  let { _enumRaw: t2, ...n2 } = e2;
  return n2.type === `enum` ? n2.values = t2.split(`,`).map((e3) => e3.trim()).filter(Boolean) : (delete n2.values, delete n2.kanban_group), n2;
}
var x = { text: `Text`, enum: `Choice`, user: `User`, date: `Date`, follow: `Follow` };
function S({ initial: e2, onSave: t2, onCancel: n2, titleText: r2 }) {
  let [i2, a2] = o.useState(() => e2.fields.map(y)), [s2, l2] = o.useState(e2.fields[0]?.key ?? null), [d2, p2] = o.useState(false), [m2, h2] = o.useState(null), g2 = i2.find((e3) => e3.key === s2) ?? null, _2 = (e3, t3) => a2((n3) => n3.map((n4) => n4.key === e3 ? { ...n4, ...t3 } : n4)), v2 = (e3) => {
    a2((t3) => {
      let n3 = t3.filter((t4) => t4.key !== e3);
      return s2 === e3 && l2(n3[0]?.key ?? null), n3;
    });
  }, S2 = () => {
    let e3 = f();
    a2((t3) => [...t3, { key: e3, type: `text`, label: ``, _enumRaw: `` }]), l2(e3);
  }, C2 = async (e3) => {
    e3.preventDefault(), p2(true), h2(null);
    try {
      await t2({ fields: i2.map(b) });
    } catch (e4) {
      h2(e4 instanceof Error ? e4.message : `Failed to save`), p2(false);
    }
  }, w2 = { width: 160, flexShrink: 0, borderRight: `1px solid #e0e0e0`, display: `flex`, flexDirection: `column`, overflow: `hidden` }, T2 = { flex: 1, display: `flex`, flexDirection: `column`, overflow: `auto`, padding: 16, gap: 12 }, E2 = (e3) => ({ display: `flex`, flexDirection: `column`, alignItems: `flex-start`, gap: 2, padding: `6px 10px`, border: `1px solid ` + (e3 ? `#1976d2` : `transparent`), background: e3 ? `#e3f0fd` : `transparent`, borderRadius: 4, cursor: `pointer`, textAlign: `left`, width: `100%`, fontFamily: `inherit`, fontSize: 13, color: e3 ? `#1976d2` : `inherit` });
  return (0, c.jsx)(`div`, { style: u.overlay, role: `dialog`, "aria-modal": `true`, "aria-label": `Edit issue tracker schema`, children: (0, c.jsxs)(`div`, { style: { ...u.dialog, maxWidth: 580 }, children: [(0, c.jsxs)(`div`, { style: u.dialogHeader, children: [(0, c.jsx)(`strong`, { children: r2 ?? `Configure Issue Tracker Schema` }), (0, c.jsx)(`button`, { onClick: n2, style: { background: `none`, border: `none`, cursor: `pointer`, fontSize: 18, lineHeight: 1 }, "aria-label": `Close`, children: `\xD7` })] }), (0, c.jsx)(`form`, { onSubmit: C2, id: `schema-editor-form`, style: { flex: 1, display: `flex`, flexDirection: `column`, overflow: `hidden` }, children: (0, c.jsxs)(`div`, { style: { display: `flex`, flex: 1, overflow: `hidden`, minHeight: 280, maxHeight: `55vh` }, children: [(0, c.jsxs)(`div`, { style: w2, children: [(0, c.jsx)(`div`, { style: { flex: 1, overflowY: `auto`, padding: `8px 6px`, display: `flex`, flexDirection: `column`, gap: 4 }, children: i2.map((e3, t3) => (0, c.jsxs)(`button`, { type: `button`, onClick: () => l2(e3.key), style: E2(e3.key === s2), children: [(0, c.jsx)(`span`, { style: { fontWeight: 600, overflow: `hidden`, textOverflow: `ellipsis`, whiteSpace: `nowrap`, width: `100%` }, children: e3.label || `Field ${t3 + 1}` }), (0, c.jsx)(`span`, { style: { fontSize: 11, color: `#888` }, children: x[e3.type] ?? e3.type })] }, e3.key)) }), (0, c.jsx)(`div`, { style: { padding: `6px 8px`, borderTop: `1px solid #e0e0e0` }, children: (0, c.jsx)(`button`, { type: `button`, onClick: S2, style: { ...u.btn, width: `100%`, fontSize: 12 }, children: `+ Add Field` }) })] }), g2 ? (0, c.jsxs)(`div`, { style: T2, children: [(0, c.jsxs)(`div`, { style: { display: `flex`, gap: 10 }, children: [(0, c.jsxs)(`div`, { style: { flex: 1 }, children: [(0, c.jsx)(`label`, { style: u.label, htmlFor: `sf-label-${g2.key}`, children: `Label` }), (0, c.jsx)(`input`, { id: `sf-label-${g2.key}`, type: `text`, required: true, style: u.input, value: g2.label, placeholder: `e.g. Status`, onChange: (e3) => _2(g2.key, { label: e3.target.value }) })] }), (0, c.jsxs)(`div`, { style: { width: 110, flexShrink: 0 }, children: [(0, c.jsx)(`label`, { style: u.label, htmlFor: `sf-type-${g2.key}`, children: `Type` }), (0, c.jsxs)(`select`, { id: `sf-type-${g2.key}`, style: u.input, value: g2.type, onChange: (e3) => _2(g2.key, { type: e3.target.value }), children: [(0, c.jsx)(`option`, { value: `text`, children: `Text` }), (0, c.jsx)(`option`, { value: `enum`, children: `Choice` }), (0, c.jsx)(`option`, { value: `user`, children: `User` }), (0, c.jsx)(`option`, { value: `date`, children: `Date` }), (0, c.jsx)(`option`, { value: `follow`, children: `Follow` })] })] })] }), (0, c.jsxs)(`label`, { style: { display: `flex`, alignItems: `center`, gap: 6, fontSize: 13 }, children: [(0, c.jsx)(`input`, { type: `checkbox`, checked: !!g2.required, onChange: (e3) => _2(g2.key, { required: e3.target.checked || void 0 }) }), `Required`] }), g2.type === `enum` && (0, c.jsxs)(`div`, { children: [(0, c.jsx)(`label`, { style: u.label, htmlFor: `sf-vals-${g2.key}`, children: `Choices (comma-separated)` }), (0, c.jsx)(`input`, { id: `sf-vals-${g2.key}`, type: `text`, style: u.input, value: g2._enumRaw, placeholder: `e.g. To Do, In Progress, Done`, onChange: (e3) => _2(g2.key, { _enumRaw: e3.target.value }) }), (0, c.jsxs)(`label`, { style: { display: `flex`, alignItems: `center`, gap: 6, fontSize: 13, marginTop: 8 }, children: [(0, c.jsx)(`input`, { type: `checkbox`, checked: !!g2.kanban_group, onChange: (e3) => _2(g2.key, { kanban_group: e3.target.checked || void 0 }) }), `Default kanban grouping field`] })] }), (0, c.jsx)(`div`, { style: { marginTop: `auto`, paddingTop: 8 }, children: (0, c.jsx)(`button`, { type: `button`, style: u.btnDanger, onClick: () => v2(g2.key), children: `Remove Field` }) })] }) : (0, c.jsx)(`div`, { style: { ...T2, alignItems: `center`, justifyContent: `center`, color: `#999` }, children: `Add a field or select one to edit` })] }) }), (0, c.jsxs)(`div`, { style: u.dialogFooter, children: [m2 && (0, c.jsx)(`span`, { style: { color: `#d32f2f`, flex: 1, fontSize: 13 }, children: m2 }), (0, c.jsx)(`button`, { type: `button`, style: u.btn, onClick: n2, children: `Cancel` }), (0, c.jsx)(`button`, { type: `submit`, form: `schema-editor-form`, style: u.btnPrimary, disabled: d2, children: d2 ? `Saving\u2026` : `Save Schema` })] })] }) });
}
function C({ schema: e2, initial: t2, isNew: n2, canDelete: r2, issueKey: i2, creatorId: a2, lastChangedById: s2, reactions: l2, comments: d2, currentUserId: f2, onSave: h2, onDelete: g2, onCancel: v2, onReact: y2, onComment: b2 }) {
  let [x2, S2] = (0, o.useState)({ ...t2 }), [C2, w2] = (0, o.useState)(false), [T2, E2] = (0, o.useState)(``), [D2, O2] = (0, o.useState)(``), [k2, A2] = (0, o.useState)(false), j2 = (0, o.useRef)(null), M2 = (0, o.useRef)(null);
  (0, o.useEffect)(() => {
    j2.current?.focus();
  }, []), (0, o.useEffect)(() => {
    M2.current?.scrollIntoView({ behavior: `smooth` });
  }, [d2.length]);
  let N = async () => {
    w2(true), E2(``);
    try {
      await h2(x2);
    } catch (e3) {
      E2(String(e3)), w2(false);
    }
  }, P = async () => {
    if (g2) {
      w2(true);
      try {
        await g2();
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
    e3.key === `Escape` && v2();
  }, L = (e3) => {
    e3.key === `Enter` && (e3.ctrlKey || e3.metaKey) && (e3.preventDefault(), F());
  };
  return (0, c.jsx)(`div`, { style: u.overlay, role: `dialog`, "aria-modal": `true`, "aria-label": n2 ? `New issue` : `Edit issue`, onKeyDown: I, children: (0, c.jsxs)(`div`, { style: u.dialog, children: [(0, c.jsxs)(`div`, { style: u.dialogHeader, children: [(0, c.jsx)(`strong`, { style: { fontSize: 15 }, children: n2 ? `New Issue` : `Edit Issue` }), (0, c.jsx)(`button`, { onClick: v2, style: { ...u.btn, border: `none`, background: `none`, fontSize: 18, padding: `0 4px` }, "aria-label": `Close`, children: `\u2715` })] }), (0, c.jsxs)(`div`, { style: u.dialogBody, children: [!n2 && a2 && (0, c.jsxs)(`div`, { style: { display: `flex`, gap: 16, flexWrap: `wrap`, marginBottom: 8, fontSize: 12, color: `#777` }, children: [(0, c.jsxs)(`span`, { children: [`Created by `, (0, c.jsx)(`strong`, { children: p(a2) })] }), s2 && s2 !== a2 && (0, c.jsxs)(`span`, { children: [`Last changed by `, (0, c.jsx)(`strong`, { children: p(s2) })] })] }), e2.fields.map((e3, t3) => {
    let n3 = String(x2[e3.key] ?? ``), r3 = { id: `wf-${e3.key}`, value: n3, onChange: (t4) => S2((n4) => ({ ...n4, [e3.key]: t4.target.value || void 0 })), style: u.input, ref: t3 === 0 ? j2 : void 0 };
    return (0, c.jsxs)(`div`, { style: u.fieldGroup, children: [(0, c.jsxs)(`label`, { htmlFor: `wf-${e3.key}`, style: u.label, children: [e3.label, e3.required && (0, c.jsx)(`span`, { style: { color: `#d32f2f` }, children: ` *` })] }), e3.type === `enum` && e3.values ? (0, c.jsxs)(`select`, { ...r3, children: [(0, c.jsx)(`option`, { value: ``, children: `\u2014` }), e3.values.map((e4) => (0, c.jsx)(`option`, { value: e4, children: e4 }, e4))] }) : e3.type === `date` ? (0, c.jsx)(`input`, { type: `date`, ...r3 }) : e3.key === `description` ? (0, c.jsx)(`textarea`, { ...r3, rows: 4, style: { ...u.input, resize: `vertical`, fontFamily: `inherit` } }) : (0, c.jsx)(`input`, { type: `text`, ...r3, placeholder: e3.type === `user` ? `@user:server` : `` })] }, e3.key);
  }), !n2 && (0, c.jsx)(`div`, { style: { marginBottom: 12 }, children: (0, c.jsx)(_, { reactions: l2, currentUserId: f2, onReact: y2 }) }), !n2 && (0, c.jsxs)(`div`, { style: { borderTop: `1px solid #e0e0e0`, paddingTop: 12 }, children: [(0, c.jsxs)(`div`, { style: { fontWeight: 600, fontSize: 13, marginBottom: 8, color: `#444` }, children: [`Comments`, d2.length > 0 ? ` (${d2.length})` : ``] }), d2.length === 0 && (0, c.jsx)(`div`, { style: { fontSize: 12, color: `#999`, marginBottom: 8 }, children: `No comments yet.` }), d2.length > 0 && (0, c.jsxs)(`div`, { style: { maxHeight: 180, overflowY: `auto`, marginBottom: 8, paddingRight: 4 }, children: [d2.map((e3) => {
    let t3 = String(e3.content.body ?? ``);
    return (0, c.jsxs)(`div`, { style: { marginBottom: 10 }, children: [(0, c.jsxs)(`div`, { style: { display: `flex`, alignItems: `baseline`, gap: 6, marginBottom: 2 }, children: [(0, c.jsx)(`span`, { style: { fontWeight: 600, fontSize: 12 }, children: p(e3.sender) }), (0, c.jsx)(`span`, { style: { color: `#aaa`, fontSize: 11 }, children: m(e3.origin_server_ts) })] }), (0, c.jsx)(`div`, { style: { fontSize: 13, whiteSpace: `pre-wrap`, wordBreak: `break-word`, lineHeight: 1.4 }, children: t3 })] }, e3.event_id ?? e3.origin_server_ts);
  }), (0, c.jsx)(`div`, { ref: M2 })] }), (0, c.jsxs)(`div`, { style: { display: `flex`, gap: 6, alignItems: `flex-end` }, children: [(0, c.jsx)(`div`, { style: { flex: 1 }, children: (0, c.jsx)(`textarea`, { value: D2, onChange: (e3) => O2(e3.target.value), onKeyDown: L, placeholder: `Add a comment\u2026 (@user:server for mentions, Ctrl+Enter to send)`, "aria-label": `Add a comment`, rows: 2, style: { ...u.input, resize: `none`, fontFamily: `inherit` }, disabled: k2 }) }), (0, c.jsx)(`button`, { onClick: F, disabled: !D2.trim() || k2, style: { ...u.btnPrimary, flexShrink: 0, alignSelf: `flex-end` }, children: k2 ? `\u2026` : `Send` })] }), (0, c.jsx)(`div`, { style: { fontSize: 11, color: `#aaa`, marginTop: 3 }, children: `Use @user:server.com to mention someone` })] }), T2 && (0, c.jsx)(`div`, { style: { color: `#d32f2f`, marginTop: 8, fontSize: 13 }, children: T2 })] }), (0, c.jsxs)(`div`, { style: u.dialogFooter, children: [r2 && g2 && (0, c.jsx)(`button`, { onClick: P, disabled: C2, style: u.btnDanger, children: `Delete` }), (0, c.jsxs)(`div`, { style: { display: `flex`, gap: 8, marginLeft: `auto` }, children: [(0, c.jsx)(`button`, { onClick: v2, disabled: C2, style: u.btn, children: `Cancel` }), (0, c.jsx)(`button`, { onClick: N, disabled: C2, style: u.btnPrimary, children: C2 ? `Saving\u2026` : `Save` })] })] })] }) });
}
function w({ issues: e2, schema: t2, reactionsByIssue: n2, commentCountByIssue: r2, onEdit: i2 }) {
  let a2 = (0, o.useMemo)(() => {
    let e3 = t2.fields.find((e4) => e4.key === `title`) ?? t2.fields[0], n3 = t2.fields.filter((t3) => t3 !== e3).slice(0, 3);
    return e3 ? [e3, ...n3] : n3;
  }, [t2]), [s2, l2] = (0, o.useState)(null);
  return e2.length === 0 ? (0, c.jsxs)(`div`, { style: { ...u.centered, flexDirection: `column`, gap: 8 }, children: [(0, c.jsx)(`span`, { style: { fontSize: 32 }, children: `\u{1F4CB}` }), (0, c.jsx)(`span`, { style: u.muted, children: `No issues yet` })] }) : (0, c.jsxs)(`table`, { style: u.table, children: [(0, c.jsx)(`thead`, { children: (0, c.jsxs)(`tr`, { children: [a2.map((e3) => (0, c.jsx)(`th`, { style: u.th, children: e3.label }, e3.key)), (0, c.jsx)(`th`, { style: { ...u.th, width: 1 }, "aria-label": `Activity` })] }) }), (0, c.jsx)(`tbody`, { children: e2.map((e3) => (0, c.jsxs)(`tr`, { onMouseEnter: () => l2(e3.stateKey), onMouseLeave: () => l2(null), style: { background: s2 === e3.stateKey ? `#f5f8ff` : void 0 }, children: [a2.map((t3, n3) => (0, c.jsx)(`td`, { style: u.td, children: n3 === 0 && i2 ? (0, c.jsx)(`button`, { onClick: () => i2(e3), style: { background: `none`, border: `none`, padding: 0, cursor: `pointer`, font: `inherit`, color: `#1976d2`, textDecoration: `underline`, textAlign: `left` }, "aria-label": `Open issue: ${String(e3.content[t3.key] ?? `(untitled)`)}`, children: d(t3, e3.content[t3.key]) || (0, c.jsx)(`span`, { style: { color: `#bbb` }, children: `\u2014` }) }) : d(t3, e3.content[t3.key]) || (0, c.jsx)(`span`, { style: { color: `#bbb` }, children: `\u2014` }) }, t3.key)), (0, c.jsx)(`td`, { style: { ...u.td, whiteSpace: `nowrap`, paddingLeft: 4 }, children: (0, c.jsx)(v, { reactions: n2.get(e3.stateKey) ?? /* @__PURE__ */ new Map(), commentCount: r2.get(e3.stateKey) ?? 0 }) })] }, e3.stateKey)) })] });
}
function T({ issues: e2, schema: t2, kanbanField: n2, reactionsByIssue: r2, commentCountByIssue: i2, onEdit: a2, hiddenColumns: s2, onHideColumn: l2 }) {
  let f2 = t2.fields.find((e3) => e3.key === `title`) ?? t2.fields[0], p2 = t2.fields.filter((e3) => e3 !== f2 && e3 !== n2).slice(0, 2), m2 = (0, o.useMemo)(() => {
    let t3 = n2.values ?? [], r3 = Object.fromEntries(t3.map((e3) => [e3, []])), i3 = [];
    for (let t4 of e2) {
      let e3 = String(t4.content[n2.key] ?? ``);
      e3 && r3[e3] ? r3[e3].push(t4) : i3.push(t4);
    }
    let a3 = t3.map((e3) => ({ label: e3, issues: r3[e3] }));
    return i3.length > 0 && a3.push({ label: `(Unset)`, issues: i3 }), a3;
  }, [e2, n2]).filter((e3) => !s2.has(e3.label));
  return e2.length === 0 ? (0, c.jsxs)(`div`, { style: { ...u.centered, flexDirection: `column`, gap: 8 }, children: [(0, c.jsx)(`span`, { style: { fontSize: 32 }, children: `\u{1F4CB}` }), (0, c.jsx)(`span`, { style: u.muted, children: `No issues yet` })] }) : (0, c.jsx)(`div`, { style: u.kanbanScroll, children: m2.map((e3) => (0, c.jsxs)(`div`, { style: u.kanbanCol, children: [(0, c.jsxs)(`div`, { style: u.kanbanColHeader, children: [(0, c.jsx)(`span`, { children: e3.label }), (0, c.jsxs)(`span`, { style: { display: `flex`, alignItems: `center`, gap: 6 }, children: [(0, c.jsx)(`span`, { style: { color: `#999`, fontSize: 12 }, children: e3.issues.length }), (0, c.jsx)(`button`, { type: `button`, "aria-label": `Hide ` + e3.label + ` column`, onClick: () => l2(e3.label), style: { background: `transparent`, border: `none`, cursor: `pointer`, padding: `0 2px`, color: `inherit`, opacity: 0.5, fontSize: `0.9em`, lineHeight: 1 }, children: `\u2715` })] })] }), (0, c.jsx)(`div`, { style: u.kanbanColBody, children: e3.issues.map((e4) => {
    let t3 = f2 ? String(e4.content[f2.key] ?? ``) || `(untitled)` : e4.stateKey, n3 = r2.get(e4.stateKey) ?? /* @__PURE__ */ new Map(), o2 = i2.get(e4.stateKey) ?? 0;
    return (0, c.jsxs)(`div`, { style: u.kanbanCard, onClick: () => a2?.(e4), role: a2 ? `button` : void 0, tabIndex: a2 ? 0 : void 0, onKeyDown: a2 ? (t4) => {
      (t4.key === `Enter` || t4.key === ` `) && a2(e4);
    } : void 0, "aria-label": t3, children: [(0, c.jsx)(`div`, { style: u.kanbanTitle, children: t3 }), p2.map((t4) => {
      let n4 = d(t4, e4.content[t4.key]);
      return n4 ? (0, c.jsxs)(`div`, { style: u.kanbanMeta, children: [t4.label, `: `, n4] }, t4.key) : null;
    }), (n3.size > 0 || o2 > 0) && (0, c.jsx)(`div`, { style: { marginTop: 6 }, children: (0, c.jsx)(v, { reactions: n3, commentCount: o2 }) })] }, e4.stateKey);
  }) })] }, e3.label)) });
}
function E({ widgetApi: e2 }) {
  let [t2, n2] = (0, o.useState)(null), [r2, i2] = (0, o.useState)([]), [a2, d2] = (0, o.useState)(false), [p2, m2] = (0, o.useState)(true), [g2, _2] = (0, o.useState)(null), [v2, y2] = (0, o.useState)(`list`), [b2, x2] = (0, o.useState)(null), [E2, D2] = (0, o.useState)(false), [O2, k2] = (0, o.useState)(/* @__PURE__ */ new Set()), A2 = (e3) => k2((t3) => /* @__PURE__ */ new Set([...t3, e3])), j2 = (e3) => k2((t3) => {
    let n3 = new Set(t3);
    return n3.delete(e3), n3;
  }), [M2, N] = (0, o.useState)([]), [P, F] = (0, o.useState)([]), I = (0, o.useMemo)(() => new URLSearchParams(window.location.search).get(`userId`) ?? ``, []);
  (0, o.useEffect)(() => {
    let t3 = false;
    async function r3() {
      try {
        let [r4, a3, o2, s2, c2, l2] = await Promise.all([e2.readStateEvents(`eu.kiefte.issues.schema`, 1), e2.readStateEvents(`eu.kiefte.issue`, 1e4), e2.readStateEvents(`m.room.power_levels`, 1), e2.readRoomEvents(`m.room.message`, 2e3).catch(() => []), e2.readRoomEvents(`m.reaction`, 5e3).catch(() => []), e2.readRoomEvents(`eu.kiefte.issue`, 1e4).catch(() => [])]);
        if (t3) return;
        let u2 = /* @__PURE__ */ new Map();
        for (let e3 of l2.sort((e4, t4) => e4.origin_server_ts - t4.origin_server_ts)) e3.state_key && !u2.has(e3.state_key) && u2.set(e3.state_key, e3.sender);
        let f2 = r4[0]?.content;
        n2(f2?.fields ? f2 : null), i2(a3.filter((e3) => e3.state_key && !e3.content?._deleted).map((e3) => ({ stateKey: e3.state_key, eventId: e3.event_id ?? ``, content: e3.content, sender: e3.sender, creatorId: u2.get(e3.state_key) ?? e3.sender, ts: e3.origin_server_ts })));
        let p3 = o2[0]?.content;
        d2(p3 && I ? (p3.users?.[I] ?? p3.users_default ?? 0) >= (p3.state_default ?? 50) : true), N(s2.filter((e3) => e3.content[`eu.kiefte.issue_id`])), F(c2);
      } catch (e3) {
        t3 || _2(String(e3));
      } finally {
        t3 || m2(false);
      }
    }
    return r3(), () => {
      t3 = true;
    };
  }, [e2, I]), (0, o.useEffect)(() => {
    let t3 = `action:${s.WidgetApiToWidgetAction.SendEvent}`, r3 = (e3) => {
      let t4 = e3?.detail?.data ?? e3;
      if (t4?.type) if (t4.type === `eu.kiefte.issues.schema`) {
        let e4 = t4.content;
        e4?.fields && n2(e4);
      } else if (t4.type === `eu.kiefte.issue` && t4.state_key) {
        let e4 = t4.content;
        e4?._deleted ? i2((e5) => e5.filter((e6) => e6.stateKey !== t4.state_key)) : i2((n3) => {
          let r4 = n3.find((e5) => e5.stateKey === t4.state_key);
          return [...n3.filter((e5) => e5.stateKey !== t4.state_key), { stateKey: t4.state_key, eventId: t4.event_id ?? ``, content: e4, sender: t4.sender, creatorId: r4?.creatorId ?? t4.sender, ts: t4.origin_server_ts }];
        });
      } else t4.type === `m.reaction` ? F((e4) => [...t4.event_id ? e4.filter((e5) => e5.event_id !== t4.event_id) : e4, t4]) : t4.type === `m.room.message` && t4.content[`eu.kiefte.issue_id`] && N((e4) => [...t4.event_id ? e4.filter((e5) => e5.event_id !== t4.event_id) : e4, t4]);
    };
    return e2.on(t3, r3), () => {
      e2.off(t3, r3);
    };
  }, [e2]);
  let L = (0, o.useMemo)(() => {
    let e3 = /* @__PURE__ */ new Map();
    for (let t3 of r2) t3.eventId && e3.set(t3.eventId, t3.stateKey);
    return e3;
  }, [r2]), R = (0, o.useMemo)(() => {
    let e3 = /* @__PURE__ */ new Map();
    for (let t3 of P) {
      let n3 = t3.content?.[`m.relates_to`];
      if (n3?.rel_type !== `m.annotation` || !n3.event_id || !n3.key) continue;
      let r3 = L.get(n3.event_id);
      if (!r3) continue;
      e3.has(r3) || e3.set(r3, /* @__PURE__ */ new Map());
      let i3 = e3.get(r3);
      i3.has(n3.key) || i3.set(n3.key, /* @__PURE__ */ new Set()), i3.get(n3.key).add(t3.sender);
    }
    return e3;
  }, [P, L]), z = (0, o.useMemo)(() => {
    let e3 = /* @__PURE__ */ new Map();
    for (let t3 of M2) {
      let n3 = t3.content[`eu.kiefte.issue_id`];
      n3 && e3.set(n3, (e3.get(n3) ?? 0) + 1);
    }
    return e3;
  }, [M2]), B = (0, o.useMemo)(() => {
    let e3 = b2 !== null && b2 !== `new` ? b2.stateKey : null;
    return e3 ? M2.filter((t3) => t3.content[`eu.kiefte.issue_id`] === e3).sort((e4, t3) => e4.origin_server_ts - t3.origin_server_ts) : [];
  }, [M2, b2]), V = (0, o.useCallback)(async (t3, n3) => {
    i2((e3) => {
      let r3 = e3.find((e4) => e4.stateKey === t3);
      return [...e3.filter((e4) => e4.stateKey !== t3), { stateKey: t3, eventId: ``, content: n3, sender: I, creatorId: r3?.creatorId ?? I, ts: Date.now() }];
    }), x2(null), await e2.sendStateEvent(`eu.kiefte.issue`, t3, n3);
  }, [e2, I]), H = (0, o.useCallback)(async (t3) => {
    i2((e3) => e3.filter((e4) => e4.stateKey !== t3)), x2(null), await e2.sendStateEvent(`eu.kiefte.issue`, t3, { _deleted: true });
  }, [e2]), U = (0, o.useCallback)(async (t3) => {
    n2(t3), D2(false), await e2.sendStateEvent(`eu.kiefte.issues.schema`, ``, t3);
  }, [e2]), W = (0, o.useCallback)(async (t3, n3) => {
    let r3 = h(n3), i3 = { msgtype: `m.text`, body: n3, "eu.kiefte.issue_id": t3 };
    r3.length > 0 && (i3[`m.mentions`] = { user_ids: r3 });
    let a3 = { event_id: `local-${Date.now()}`, type: `m.room.message`, sender: I, origin_server_ts: Date.now(), content: i3, room_id: ``, unsigned: {} };
    N((e3) => [...e3, a3]), await e2.sendRoomEvent(`m.room.message`, i3);
  }, [e2, I]), G = (0, o.useCallback)(async (t3, n3) => {
    let i3 = r2.find((e3) => e3.stateKey === t3);
    if (!i3?.eventId) return;
    let a3 = { "m.relates_to": { rel_type: `m.annotation`, event_id: i3.eventId, key: n3 } };
    await e2.sendRoomEvent(`m.reaction`, a3);
  }, [e2, r2]), K = (0, o.useMemo)(() => r2.filter((e3) => !e3.content._deleted).sort((e3, t3) => t3.ts - e3.ts), [r2]), q = b2 !== null && b2 !== `new` ? b2 : null, J = q?.content ?? {}, Y = q?.stateKey ?? null;
  if (p2) return (0, c.jsx)(`div`, { style: u.centered, children: `Loading\u2026` });
  if (g2) return (0, c.jsxs)(`div`, { style: { ...u.centered, flexDirection: `column`, gap: 12, padding: 24, textAlign: `center` }, children: [(0, c.jsx)(`div`, { style: { color: `#d32f2f` }, children: `Failed to load issues` }), (0, c.jsx)(`div`, { style: { ...u.muted, fontSize: 12, maxWidth: 320, wordBreak: `break-all` }, children: g2 }), (0, c.jsx)(`div`, { style: u.muted, children: `Make sure this client supports MSC2762 widget state event capabilities.` })] });
  if (!t2) return a2 ? (0, c.jsx)(S, { initial: l, titleText: `Initialize Issue Tracker`, onSave: U, onCancel: () => {
  } }) : (0, c.jsxs)(`div`, { style: { ...u.centered, flexDirection: `column`, gap: 8, padding: 24, textAlign: `center` }, children: [(0, c.jsx)(`span`, { style: { fontSize: 32 }, children: `\u{1F4CB}` }), (0, c.jsx)(`div`, { style: { fontWeight: 600 }, children: `Issue Tracker Not Set Up` }), (0, c.jsx)(`div`, { style: u.muted, children: `Ask a room admin to initialize the issue tracker.` })] });
  let X = t2, Z = X.fields.find((e3) => e3.kanban_group && e3.type === `enum`);
  return (0, c.jsxs)(`div`, { style: u.container, children: [(0, c.jsxs)(`div`, { style: u.toolbar, role: `toolbar`, "aria-label": `Issue tracker controls`, children: [(0, c.jsxs)(`span`, { style: u.muted, children: [K.length, ` `, K.length === 1 ? `issue` : `issues`] }), (0, c.jsxs)(`div`, { style: { display: `flex`, gap: 6, alignItems: `center`, marginLeft: `auto`, flexWrap: `wrap` }, children: [Z && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(`button`, { onClick: () => y2(`list`), style: v2 === `list` ? u.btnActive : u.btn, "aria-pressed": v2 === `list`, children: `List` }), (0, c.jsx)(`button`, { onClick: () => y2(`kanban`), style: v2 === `kanban` ? u.btnActive : u.btn, "aria-pressed": v2 === `kanban`, children: `Kanban` }), v2 === `kanban` && O2.size > 0 && [...O2].map((e3) => (0, c.jsx)(`button`, { onClick: () => j2(e3), style: u.btn, "aria-label": `Show ` + e3 + ` column`, children: e3 }, e3))] }), a2 && (0, c.jsx)(`button`, { onClick: () => D2(true), style: u.btn, "aria-label": `Edit issue tracker schema`, children: `\u2699 Schema` }), a2 && (0, c.jsx)(`button`, { onClick: () => x2(`new`), style: u.btnPrimary, "aria-label": `New issue`, "aria-keyshortcuts": `n`, children: `+ New Issue` })] })] }), (0, c.jsx)(`div`, { style: u.content, children: v2 === `kanban` && Z ? (0, c.jsx)(T, { issues: K, schema: X, kanbanField: Z, reactionsByIssue: R, commentCountByIssue: z, onEdit: a2 ? x2 : void 0, hiddenColumns: O2, onHideColumn: A2 }) : (0, c.jsx)(w, { issues: K, schema: X, reactionsByIssue: R, commentCountByIssue: z, onEdit: a2 ? x2 : void 0 }) }), b2 !== null && (0, c.jsx)(C, { schema: X, initial: J, isNew: b2 === `new`, canDelete: a2 && b2 !== `new`, issueKey: Y, creatorId: b2 === `new` ? void 0 : b2.creatorId, lastChangedById: b2 !== `new` && b2.sender !== b2.creatorId ? b2.sender : void 0, reactions: R.get(Y ?? ``) ?? /* @__PURE__ */ new Map(), comments: B, currentUserId: I, onSave: async (e3) => {
    await V(Y ?? f(), e3);
  }, onDelete: Y ? () => H(Y) : void 0, onCancel: () => x2(null), onReact: (e3) => {
    Y && G(Y, e3);
  }, onComment: async (e3) => {
    Y && await W(Y, e3);
  } }), E2 && (0, c.jsx)(S, { initial: X, onSave: U, onCancel: () => D2(false) })] });
}
var D = n(), O = new URLSearchParams(window.location.search), k = O.get(`widgetId`) ?? void 0, A = O.get(`parentUrl`) ?? void 0, j = new D.WidgetApi(k, A);
j.requestCapabilityToReceiveState(`eu.kiefte.issue`), j.requestCapabilityToReceiveState(`eu.kiefte.issues.schema`), j.requestCapabilityToSendState(`eu.kiefte.issue`), j.requestCapabilityToSendState(`eu.kiefte.issues.schema`), j.requestCapabilityToReceiveState(`m.room.power_levels`), j.requestCapabilityToReceiveEvent(`eu.kiefte.issue`), j.requestCapabilityToReceiveEvent(`m.room.message`), j.requestCapabilityToSendEvent(`m.room.message`), j.requestCapabilityToReceiveEvent(`m.reaction`), j.requestCapabilityToSendEvent(`m.reaction`), j.start(), j.sendContentLoaded();
var M = false;
j.once(`ready`, () => {
  M = true, (0, a.createRoot)(document.getElementById(`widget-root`)).render((0, c.jsx)(E, { widgetApi: j }));
}), setTimeout(() => {
  if (M) return;
  let e2 = window.parent !== window, t2 = !!A;
  (0, a.createRoot)(document.getElementById(`widget-root`)).render((0, c.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, height: `100vh`, gap: 16, padding: 24, textAlign: `center`, fontFamily: `system-ui, sans-serif`, color: `#444` }, children: [(0, c.jsx)(`div`, { style: { fontSize: 32 }, children: `\u{1F4CB}` }), (0, c.jsx)(`div`, { style: { fontWeight: 600, fontSize: 18 }, children: `Matrix Issue Tracker Widget` }), e2 && !t2 && (0, c.jsx)(`div`, { style: { maxWidth: 520, color: `#c62828`, lineHeight: 1.6, fontSize: 14 }, children: `The widget API is not active. This widget was embedded as a plain iframe \u2014 it must be registered as a room state event to work (see below).` }), (0, c.jsxs)(`div`, { style: { maxWidth: 520, color: `#555`, fontSize: 13, lineHeight: 1.7, textAlign: `left` }, children: [(0, c.jsx)(`p`, { style: { marginBottom: 8 }, children: `Send the following state event in the room where you want the widget. Any Matrix client with developer tools works (Gomuks, Element Web, etc.).` }), (0, c.jsx)(`pre`, { style: { background: `#f5f5f5`, padding: `10px 14px`, borderRadius: 4, fontSize: 12, overflowX: `auto`, margin: 0 }, children: `Event type:  im.vector.modular.widgets
State key:   eu.kiefte.issue-tracker
Content:
{
  "type": "m.custom",
  "url": "${window.location.origin + window.location.pathname}?roomId=$matrix_room_id&userId=$matrix_user_id",
  "name": "Issue Tracker",
  "id": "eu.kiefte.issue-tracker"
}` }), (0, c.jsxs)(`p`, { style: { marginTop: 10, color: `#777` }, children: [(0, c.jsx)(`strong`, { children: `Gomuks:` }), ` open Developer Tools (\u22EE menu \u2192 Developer tools), go to "Send custom event", set type to `, (0, c.jsx)(`code`, { children: `im.vector.modular.widgets` }), `, state key to `, (0, c.jsx)(`code`, { children: `eu.kiefte.issue-tracker` }), `, paste the content above.`] }), (0, c.jsxs)(`p`, { style: { marginTop: 6, color: `#777` }, children: [(0, c.jsx)(`strong`, { children: `Element Web:` }), ` use the `, (0, c.jsx)(`code`, { children: `/addwidget` }), ` slash command in the room chat:`] }), (0, c.jsx)(`pre`, { style: { background: `#f5f5f5`, padding: `6px 14px`, borderRadius: 4, fontSize: 12, overflowX: `auto`, margin: `4px 0` }, children: `/addwidget ${window.location.origin + window.location.pathname}?roomId=$matrix_room_id&userId=$matrix_user_id` }), (0, c.jsxs)(`p`, { style: { marginTop: 4, color: `#999`, fontSize: 12 }, children: [`Or use the`, ` `, (0, c.jsx)(`a`, { href: `https://codeberg.org/lapingvino/cinny`, style: { color: `#1976d2` }, children: `Wally` }), `'s built-in "Enable widget" button in the issue board toolbar. Also see`, ` `, (0, c.jsx)(`a`, { href: `https://github.com/lapingvino/matrix-issue-widget`, style: { color: `#1976d2` }, children: `matrix-issue-widget on GitHub` }), `.`] })] })] }));
}, 4e3);
