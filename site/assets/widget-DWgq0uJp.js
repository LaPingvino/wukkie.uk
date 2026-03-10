import { r as u, l as ae, j as e, R as X, i as de } from "./index-OFY97cN7.js";
const he = { fields: [{ key: "title", type: "text", label: "Title", required: true }, { key: "status", type: "enum", label: "Status", values: ["Backlog", "To Do", "In Progress", "Done"], kanban_group: true }, { key: "priority", type: "enum", label: "Priority", values: ["Low", "Medium", "High", "Critical"] }, { key: "assignee", type: "user", label: "Assignee" }, { key: "due", type: "date", label: "Due Date" }, { key: "description", type: "text", label: "Description" }] }, t = { container: { display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, toolbar: { display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderBottom: "1px solid #e0e0e0", background: "#fafafa", flexShrink: 0, flexWrap: "wrap" }, content: { flex: 1, overflow: "auto", padding: "8px 0" }, muted: { fontSize: 13, color: "#666" }, btn: { padding: "4px 10px", borderRadius: 4, border: "1px solid #ccc", background: "#fff", cursor: "pointer", fontSize: 13, lineHeight: "20px" }, btnPrimary: { padding: "4px 10px", borderRadius: 4, border: "1px solid #1976d2", background: "#1976d2", color: "#fff", cursor: "pointer", fontSize: 13, lineHeight: "20px", fontWeight: 600 }, btnActive: { padding: "4px 10px", borderRadius: 4, border: "1px solid #1976d2", background: "#e3f0fd", color: "#1976d2", cursor: "pointer", fontSize: 13, lineHeight: "20px" }, btnDanger: { padding: "4px 10px", borderRadius: 4, border: "1px solid #d32f2f", background: "#fff", color: "#d32f2f", cursor: "pointer", fontSize: 13, lineHeight: "20px" }, centered: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#666" }, overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-start", justifyContent: "center", zIndex: 1e3, overflowY: "auto", padding: 24 }, dialog: { background: "#fff", borderRadius: 6, boxShadow: "0 4px 24px rgba(0,0,0,0.18)", width: "100%", maxWidth: 520, display: "flex", flexDirection: "column", maxHeight: "90vh" }, dialogHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid #e0e0e0", flexShrink: 0 }, dialogBody: { padding: 16, overflowY: "auto", flex: 1 }, dialogFooter: { display: "flex", alignItems: "center", padding: "10px 16px", borderTop: "1px solid #e0e0e0", flexShrink: 0, gap: 8 }, input: { width: "100%", padding: "6px 8px", border: "1px solid #ccc", borderRadius: 4, fontSize: 14, fontFamily: "inherit" }, label: { display: "block", fontWeight: 600, marginBottom: 4, fontSize: 13 }, fieldGroup: { marginBottom: 12 }, table: { width: "100%", borderCollapse: "collapse", fontSize: 13 }, th: { textAlign: "left", padding: "6px 12px", borderBottom: "1px solid #e0e0e0", color: "#555", fontWeight: 600, whiteSpace: "nowrap" }, td: { padding: "6px 12px", borderBottom: "1px solid #f0f0f0", verticalAlign: "top", wordBreak: "break-word" }, kanbanScroll: { display: "flex", gap: 12, padding: "0 12px 12px", overflowX: "auto", height: "100%", alignItems: "flex-start" }, kanbanCol: { flexShrink: 0, width: 220, background: "#f5f5f5", borderRadius: 6, display: "flex", flexDirection: "column", maxHeight: "100%" }, kanbanColHeader: { padding: "8px 12px", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #e0e0e0", display: "flex", alignItems: "center", justifyContent: "space-between" }, kanbanColBody: { padding: 8, overflowY: "auto", flex: 1, display: "flex", flexDirection: "column", gap: 6 }, kanbanCard: { background: "#fff", borderRadius: 4, padding: "8px 10px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", cursor: "pointer", border: "1px solid #e8e8e8", fontSize: 13 }, kanbanTitle: { fontWeight: 600, marginBottom: 4, wordBreak: "break-word" }, kanbanMeta: { color: "#777", fontSize: 12 } };
function ie(s, p) {
  if (p == null || p === "") return "";
  if (s.type === "date") {
    const a = new Date(String(p));
    return isNaN(a.getTime()) ? String(p) : a.toLocaleDateString();
  }
  return String(p);
}
function ce() {
  return `issue-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function Q(s) {
  return s.startsWith("@") ? s.slice(1).split(":")[0] : s;
}
function me(s) {
  return new Date(s).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function ge(s) {
  const p = s.match(/@[\w.-]+:[\w.:-]+/g) ?? [];
  return [...new Set(p)];
}
const be = ["\u{1F44D}", "\u{1F44E}", "\u2764\uFE0F", "\u{1F389}"];
function ve({ reactions: s, currentUserId: p, onReact: a, compact: m }) {
  if (s.size === 0 && !m) return null;
  const b = [...s.entries()].sort((o, v) => v[1].size - o[1].size);
  return e.jsxs("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: m ? 0 : 4 }, children: [b.map(([o, v]) => {
    const _ = v.has(p);
    return e.jsxs("button", { onClick: () => a(o), title: [...v].map(Q).join(", "), style: { fontSize: 12, padding: "1px 6px", borderRadius: 10, border: _ ? "1px solid #1976d2" : "1px solid #e0e0e0", background: _ ? "#e3f0fd" : "#fafafa", color: _ ? "#1976d2" : "inherit", cursor: "pointer", lineHeight: "18px", fontFamily: "inherit" }, children: [o, " ", v.size] }, o);
  }), !m && be.filter((o) => !s.has(o)).map((o) => e.jsx("button", { onClick: () => a(o), title: `React with ${o}`, style: { fontSize: 12, padding: "1px 6px", borderRadius: 10, border: "1px dashed #ccc", background: "transparent", color: "#999", cursor: "pointer", lineHeight: "18px", fontFamily: "inherit" }, children: o }, o))] });
}
function ue({ reactions: s, commentCount: p }) {
  const a = [], m = [...s.entries()].sort((b, o) => o[1].size - b[1].size).slice(0, 3);
  for (const [b, o] of m) a.push(`${b}${o.size}`);
  return p > 0 && a.push(`\u{1F4AC}${p}`), a.length === 0 ? null : e.jsx("span", { style: { fontSize: 11, color: "#666", whiteSpace: "nowrap" }, children: a.join(" ") });
}
function ke(s) {
  var _a;
  return { ...s, _enumRaw: ((_a = s.values) == null ? void 0 : _a.join(", ")) ?? "" };
}
function je(s) {
  const { _enumRaw: p, ...a } = s;
  return a.type === "enum" ? a.values = p.split(",").map((m) => m.trim()).filter(Boolean) : (delete a.values, delete a.kanban_group), a;
}
const Se = { text: "Text", enum: "Choice", user: "User", date: "Date", follow: "Follow" };
function le({ initial: s, onSave: p, onCancel: a, titleText: m }) {
  var _a;
  const [b, o] = X.useState(() => s.fields.map(ke)), [v, _] = X.useState(((_a = s.fields[0]) == null ? void 0 : _a.key) ?? null), [x, k] = X.useState(false), [z, I] = X.useState(null), i = b.find((r) => r.key === v) ?? null, d = (r, S) => o((K) => K.map((R) => R.key === r ? { ...R, ...S } : R)), C = (r) => {
    o((S) => {
      var _a2;
      const K = S.filter((R) => R.key !== r);
      return v === r && _(((_a2 = K[0]) == null ? void 0 : _a2.key) ?? null), K;
    });
  }, D = () => {
    const r = ce();
    o((S) => [...S, { key: r, type: "text", label: "", _enumRaw: "" }]), _(r);
  }, j = async (r) => {
    r.preventDefault(), k(true), I(null);
    try {
      await p({ fields: b.map(je) });
    } catch (S) {
      I(S instanceof Error ? S.message : "Failed to save"), k(false);
    }
  }, g = { width: 160, flexShrink: 0, borderRight: "1px solid #e0e0e0", display: "flex", flexDirection: "column", overflow: "hidden" }, T = { flex: 1, display: "flex", flexDirection: "column", overflow: "auto", padding: 16, gap: 12 }, P = (r) => ({ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2, padding: "6px 10px", border: "1px solid " + (r ? "#1976d2" : "transparent"), background: r ? "#e3f0fd" : "transparent", borderRadius: 4, cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "inherit", fontSize: 13, color: r ? "#1976d2" : "inherit" });
  return e.jsx("div", { style: t.overlay, role: "dialog", "aria-modal": "true", "aria-label": "Edit issue tracker schema", children: e.jsxs("div", { style: { ...t.dialog, maxWidth: 580 }, children: [e.jsxs("div", { style: t.dialogHeader, children: [e.jsx("strong", { children: m ?? "Configure Issue Tracker Schema" }), e.jsx("button", { onClick: a, style: { background: "none", border: "none", cursor: "pointer", fontSize: 18, lineHeight: 1 }, "aria-label": "Close", children: "\xD7" })] }), e.jsx("form", { onSubmit: j, id: "schema-editor-form", style: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }, children: e.jsxs("div", { style: { display: "flex", flex: 1, overflow: "hidden", minHeight: 280, maxHeight: "55vh" }, children: [e.jsxs("div", { style: g, children: [e.jsx("div", { style: { flex: 1, overflowY: "auto", padding: "8px 6px", display: "flex", flexDirection: "column", gap: 4 }, children: b.map((r, S) => e.jsxs("button", { type: "button", onClick: () => _(r.key), style: P(r.key === v), children: [e.jsx("span", { style: { fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }, children: r.label || `Field ${S + 1}` }), e.jsx("span", { style: { fontSize: 11, color: "#888" }, children: Se[r.type] ?? r.type })] }, r.key)) }), e.jsx("div", { style: { padding: "6px 8px", borderTop: "1px solid #e0e0e0" }, children: e.jsx("button", { type: "button", onClick: D, style: { ...t.btn, width: "100%", fontSize: 12 }, children: "+ Add Field" }) })] }), i ? e.jsxs("div", { style: T, children: [e.jsxs("div", { style: { display: "flex", gap: 10 }, children: [e.jsxs("div", { style: { flex: 1 }, children: [e.jsx("label", { style: t.label, htmlFor: `sf-label-${i.key}`, children: "Label" }), e.jsx("input", { id: `sf-label-${i.key}`, type: "text", required: true, style: t.input, value: i.label, placeholder: "e.g. Status", onChange: (r) => d(i.key, { label: r.target.value }) })] }), e.jsxs("div", { style: { width: 110, flexShrink: 0 }, children: [e.jsx("label", { style: t.label, htmlFor: `sf-type-${i.key}`, children: "Type" }), e.jsxs("select", { id: `sf-type-${i.key}`, style: t.input, value: i.type, onChange: (r) => d(i.key, { type: r.target.value }), children: [e.jsx("option", { value: "text", children: "Text" }), e.jsx("option", { value: "enum", children: "Choice" }), e.jsx("option", { value: "user", children: "User" }), e.jsx("option", { value: "date", children: "Date" }), e.jsx("option", { value: "follow", children: "Follow" })] })] })] }), e.jsxs("label", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 13 }, children: [e.jsx("input", { type: "checkbox", checked: !!i.required, onChange: (r) => d(i.key, { required: r.target.checked || void 0 }) }), "Required"] }), i.type === "enum" && e.jsxs("div", { children: [e.jsx("label", { style: t.label, htmlFor: `sf-vals-${i.key}`, children: "Choices (comma-separated)" }), e.jsx("input", { id: `sf-vals-${i.key}`, type: "text", style: t.input, value: i._enumRaw, placeholder: "e.g. To Do, In Progress, Done", onChange: (r) => d(i.key, { _enumRaw: r.target.value }) }), e.jsxs("label", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, marginTop: 8 }, children: [e.jsx("input", { type: "checkbox", checked: !!i.kanban_group, onChange: (r) => d(i.key, { kanban_group: r.target.checked || void 0 }) }), "Default kanban grouping field"] })] }), e.jsx("div", { style: { marginTop: "auto", paddingTop: 8 }, children: e.jsx("button", { type: "button", style: t.btnDanger, onClick: () => C(i.key), children: "Remove Field" }) })] }) : e.jsx("div", { style: { ...T, alignItems: "center", justifyContent: "center", color: "#999" }, children: "Add a field or select one to edit" })] }) }), e.jsxs("div", { style: t.dialogFooter, children: [z && e.jsx("span", { style: { color: "#d32f2f", flex: 1, fontSize: 13 }, children: z }), e.jsx("button", { type: "button", style: t.btn, onClick: a, children: "Cancel" }), e.jsx("button", { type: "submit", form: "schema-editor-form", style: t.btnPrimary, disabled: x, children: x ? "Saving\u2026" : "Save Schema" })] })] }) });
}
function we({ schema: s, initial: p, isNew: a, canDelete: m, issueKey: b, creatorId: o, lastChangedById: v, reactions: _, comments: x, currentUserId: k, onSave: z, onDelete: I, onCancel: i, onReact: d, onComment: C }) {
  const [D, j] = u.useState({ ...p }), [g, T] = u.useState(false), [P, r] = u.useState(""), [S, K] = u.useState(""), [R, U] = u.useState(false), B = u.useRef(null), A = u.useRef(null);
  u.useEffect(() => {
    var _a;
    (_a = B.current) == null ? void 0 : _a.focus();
  }, []), u.useEffect(() => {
    var _a;
    (_a = A.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [x.length]);
  const N = async () => {
    T(true), r("");
    try {
      await z(D);
    } catch (l) {
      r(String(l)), T(false);
    }
  }, Y = async () => {
    if (I) {
      T(true);
      try {
        await I();
      } catch (l) {
        r(String(l)), T(false);
      }
    }
  }, G = async () => {
    const l = S.trim();
    if (l) {
      U(true);
      try {
        await C(l), K("");
      } catch (L) {
        r(String(L));
      } finally {
        U(false);
      }
    }
  }, J = (l) => {
    l.key === "Escape" && i();
  }, Z = (l) => {
    l.key === "Enter" && (l.ctrlKey || l.metaKey) && (l.preventDefault(), G());
  };
  return e.jsx("div", { style: t.overlay, role: "dialog", "aria-modal": "true", "aria-label": a ? "New issue" : "Edit issue", onKeyDown: J, children: e.jsxs("div", { style: t.dialog, children: [e.jsxs("div", { style: t.dialogHeader, children: [e.jsx("strong", { style: { fontSize: 15 }, children: a ? "New Issue" : "Edit Issue" }), e.jsx("button", { onClick: i, style: { ...t.btn, border: "none", background: "none", fontSize: 18, padding: "0 4px" }, "aria-label": "Close", children: "\u2715" })] }), e.jsxs("div", { style: t.dialogBody, children: [!a && o && e.jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 8, fontSize: 12, color: "#777" }, children: [e.jsxs("span", { children: ["Created by ", e.jsx("strong", { children: Q(o) })] }), v && v !== o && e.jsxs("span", { children: ["Last changed by ", e.jsx("strong", { children: Q(v) })] })] }), s.fields.map((l, L) => {
    const ee = String(D[l.key] ?? ""), H = { id: `wf-${l.key}`, value: ee, onChange: ($) => j((te) => ({ ...te, [l.key]: $.target.value || void 0 })), style: t.input, ref: L === 0 ? B : void 0 };
    return e.jsxs("div", { style: t.fieldGroup, children: [e.jsxs("label", { htmlFor: `wf-${l.key}`, style: t.label, children: [l.label, l.required && e.jsx("span", { style: { color: "#d32f2f" }, children: " *" })] }), l.type === "enum" && l.values ? e.jsxs("select", { ...H, children: [e.jsx("option", { value: "", children: "\u2014" }), l.values.map(($) => e.jsx("option", { value: $, children: $ }, $))] }) : l.type === "date" ? e.jsx("input", { type: "date", ...H }) : l.key === "description" ? e.jsx("textarea", { ...H, rows: 4, style: { ...t.input, resize: "vertical", fontFamily: "inherit" } }) : e.jsx("input", { type: "text", ...H, placeholder: l.type === "user" ? "@user:server" : "" })] }, l.key);
  }), !a && e.jsx("div", { style: { marginBottom: 12 }, children: e.jsx(ve, { reactions: _, currentUserId: k, onReact: d }) }), !a && e.jsxs("div", { style: { borderTop: "1px solid #e0e0e0", paddingTop: 12 }, children: [e.jsxs("div", { style: { fontWeight: 600, fontSize: 13, marginBottom: 8, color: "#444" }, children: ["Comments", x.length > 0 ? ` (${x.length})` : ""] }), x.length === 0 && e.jsx("div", { style: { fontSize: 12, color: "#999", marginBottom: 8 }, children: "No comments yet." }), x.length > 0 && e.jsxs("div", { style: { maxHeight: 180, overflowY: "auto", marginBottom: 8, paddingRight: 4 }, children: [x.map((l) => {
    const L = String(l.content.body ?? "");
    return e.jsxs("div", { style: { marginBottom: 10 }, children: [e.jsxs("div", { style: { display: "flex", alignItems: "baseline", gap: 6, marginBottom: 2 }, children: [e.jsx("span", { style: { fontWeight: 600, fontSize: 12 }, children: Q(l.sender) }), e.jsx("span", { style: { color: "#aaa", fontSize: 11 }, children: me(l.origin_server_ts) })] }), e.jsx("div", { style: { fontSize: 13, whiteSpace: "pre-wrap", wordBreak: "break-word", lineHeight: 1.4 }, children: L })] }, l.event_id ?? l.origin_server_ts);
  }), e.jsx("div", { ref: A })] }), e.jsxs("div", { style: { display: "flex", gap: 6, alignItems: "flex-end" }, children: [e.jsx("div", { style: { flex: 1 }, children: e.jsx("textarea", { value: S, onChange: (l) => K(l.target.value), onKeyDown: Z, placeholder: "Add a comment\u2026 (@user:server for mentions, Ctrl+Enter to send)", "aria-label": "Add a comment", rows: 2, style: { ...t.input, resize: "none", fontFamily: "inherit" }, disabled: R }) }), e.jsx("button", { onClick: G, disabled: !S.trim() || R, style: { ...t.btnPrimary, flexShrink: 0, alignSelf: "flex-end" }, children: R ? "\u2026" : "Send" })] }), e.jsx("div", { style: { fontSize: 11, color: "#aaa", marginTop: 3 }, children: "Use @user:server.com to mention someone" })] }), P && e.jsx("div", { style: { color: "#d32f2f", marginTop: 8, fontSize: 13 }, children: P })] }), e.jsxs("div", { style: t.dialogFooter, children: [m && I && e.jsx("button", { onClick: Y, disabled: g, style: t.btnDanger, children: "Delete" }), e.jsxs("div", { style: { display: "flex", gap: 8, marginLeft: "auto" }, children: [e.jsx("button", { onClick: i, disabled: g, style: t.btn, children: "Cancel" }), e.jsx("button", { onClick: N, disabled: g, style: t.btnPrimary, children: g ? "Saving\u2026" : "Save" })] })] })] }) });
}
function Ce({ issues: s, schema: p, reactionsByIssue: a, commentCountByIssue: m, onEdit: b }) {
  const o = u.useMemo(() => {
    const x = p.fields.find((z) => z.key === "title") ?? p.fields[0], k = p.fields.filter((z) => z !== x).slice(0, 3);
    return x ? [x, ...k] : k;
  }, [p]), [v, _] = u.useState(null);
  return s.length === 0 ? e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 8 }, children: [e.jsx("span", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("span", { style: t.muted, children: "No issues yet" })] }) : e.jsxs("table", { style: t.table, children: [e.jsx("thead", { children: e.jsxs("tr", { children: [o.map((x) => e.jsx("th", { style: t.th, children: x.label }, x.key)), e.jsx("th", { style: { ...t.th, width: 1 }, "aria-label": "Activity" })] }) }), e.jsx("tbody", { children: s.map((x) => e.jsxs("tr", { onMouseEnter: () => _(x.stateKey), onMouseLeave: () => _(null), style: { background: v === x.stateKey ? "#f5f8ff" : void 0 }, children: [o.map((k, z) => e.jsx("td", { style: t.td, children: z === 0 && b ? e.jsx("button", { onClick: () => b(x), style: { background: "none", border: "none", padding: 0, cursor: "pointer", font: "inherit", color: "#1976d2", textDecoration: "underline", textAlign: "left" }, "aria-label": `Open issue: ${String(x.content[k.key] ?? "(untitled)")}`, children: ie(k, x.content[k.key]) || e.jsx("span", { style: { color: "#bbb" }, children: "\u2014" }) }) : ie(k, x.content[k.key]) || e.jsx("span", { style: { color: "#bbb" }, children: "\u2014" }) }, k.key)), e.jsx("td", { style: { ...t.td, whiteSpace: "nowrap", paddingLeft: 4 }, children: e.jsx(ue, { reactions: a.get(x.stateKey) ?? /* @__PURE__ */ new Map(), commentCount: m.get(x.stateKey) ?? 0 }) })] }, x.stateKey)) })] });
}
function _e({ issues: s, schema: p, kanbanField: a, reactionsByIssue: m, commentCountByIssue: b, onEdit: o, hiddenColumns: v, onHideColumn: _ }) {
  const x = p.fields.find((i) => i.key === "title") ?? p.fields[0], k = p.fields.filter((i) => i !== x && i !== a).slice(0, 2), I = u.useMemo(() => {
    const i = a.values ?? [], d = Object.fromEntries(i.map((j) => [j, []])), C = [];
    for (const j of s) {
      const g = String(j.content[a.key] ?? "");
      g && d[g] ? d[g].push(j) : C.push(j);
    }
    const D = i.map((j) => ({ label: j, issues: d[j] }));
    return C.length > 0 && D.push({ label: "(Unset)", issues: C }), D;
  }, [s, a]).filter((i) => !v.has(i.label));
  return s.length === 0 ? e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 8 }, children: [e.jsx("span", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("span", { style: t.muted, children: "No issues yet" })] }) : e.jsx("div", { style: t.kanbanScroll, children: I.map((i) => e.jsxs("div", { style: t.kanbanCol, children: [e.jsxs("div", { style: t.kanbanColHeader, children: [e.jsx("span", { children: i.label }), e.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [e.jsx("span", { style: { color: "#999", fontSize: 12 }, children: i.issues.length }), e.jsx("button", { type: "button", "aria-label": "Hide " + i.label + " column", onClick: () => _(i.label), style: { background: "transparent", border: "none", cursor: "pointer", padding: "0 2px", color: "inherit", opacity: 0.5, fontSize: "0.9em", lineHeight: 1 }, children: "\u2715" })] })] }), e.jsx("div", { style: t.kanbanColBody, children: i.issues.map((d) => {
    const C = x ? String(d.content[x.key] ?? "") || "(untitled)" : d.stateKey, D = m.get(d.stateKey) ?? /* @__PURE__ */ new Map(), j = b.get(d.stateKey) ?? 0;
    return e.jsxs("div", { style: t.kanbanCard, onClick: () => o == null ? void 0 : o(d), role: o ? "button" : void 0, tabIndex: o ? 0 : void 0, onKeyDown: o ? (g) => {
      (g.key === "Enter" || g.key === " ") && o(d);
    } : void 0, "aria-label": C, children: [e.jsx("div", { style: t.kanbanTitle, children: C }), k.map((g) => {
      const T = ie(g, d.content[g.key]);
      return T ? e.jsxs("div", { style: t.kanbanMeta, children: [g.label, ": ", T] }, g.key) : null;
    }), (D.size > 0 || j > 0) && e.jsx("div", { style: { marginTop: 6 }, children: e.jsx(ue, { reactions: D, commentCount: j }) })] }, d.stateKey);
  }) })] }, i.label)) });
}
function Ie({ widgetApi: s }) {
  const [p, a] = u.useState(null), [m, b] = u.useState([]), [o, v] = u.useState(false), [_, x] = u.useState(true), [k, z] = u.useState(null), [I, i] = u.useState("list"), [d, C] = u.useState(null), [D, j] = u.useState(false), [g, T] = u.useState(/* @__PURE__ */ new Set()), P = (n) => T((f) => /* @__PURE__ */ new Set([...f, n])), r = (n) => T((f) => {
    const y = new Set(f);
    return y.delete(n), y;
  }), [S, K] = u.useState([]), [R, U] = u.useState([]), B = u.useMemo(() => new URLSearchParams(window.location.search).get("userId") ?? "", []);
  u.useEffect(() => {
    let n = false;
    async function f() {
      var _a, _b, _c;
      try {
        const [y, c, h, F, W, oe] = await Promise.all([s.readStateEvents("eu.kiefte.issues.schema", 1), s.readStateEvents("eu.kiefte.issue", 1e4), s.readStateEvents("m.room.power_levels", 1), s.readRoomEvents("m.room.message", 2e3).catch(() => []), s.readRoomEvents("m.reaction", 5e3).catch(() => []), s.readRoomEvents("eu.kiefte.issue", 1e4).catch(() => [])]);
        if (n) return;
        const q = /* @__PURE__ */ new Map();
        for (const w of oe.sort((se, xe) => se.origin_server_ts - xe.origin_server_ts)) w.state_key && !q.has(w.state_key) && q.set(w.state_key, w.sender);
        const re = (_a = y[0]) == null ? void 0 : _a.content;
        a((re == null ? void 0 : re.fields) ? re : null), b(c.filter((w) => {
          var _a2;
          return w.state_key && !((_a2 = w.content) == null ? void 0 : _a2._deleted);
        }).map((w) => ({ stateKey: w.state_key, eventId: w.event_id ?? "", content: w.content, sender: w.sender, creatorId: q.get(w.state_key) ?? w.sender, ts: w.origin_server_ts })));
        const O = (_b = h[0]) == null ? void 0 : _b.content;
        if (O && B) {
          const w = ((_c = O.users) == null ? void 0 : _c[B]) ?? O.users_default ?? 0, se = O.state_default ?? 50;
          v(w >= se);
        } else v(true);
        K(F.filter((w) => w.content["eu.kiefte.issue_id"])), U(W);
      } catch (y) {
        n || z(String(y));
      } finally {
        n || x(false);
      }
    }
    return f(), () => {
      n = true;
    };
  }, [s, B]), u.useEffect(() => {
    const n = `action:${ae.WidgetApiToWidgetAction.SendEvent}`, f = (y) => {
      var _a;
      const c = ((_a = y == null ? void 0 : y.detail) == null ? void 0 : _a.data) ?? y;
      if (c == null ? void 0 : c.type) if (c.type === "eu.kiefte.issues.schema") {
        const h = c.content;
        (h == null ? void 0 : h.fields) && a(h);
      } else if (c.type === "eu.kiefte.issue" && c.state_key) {
        const h = c.content;
        (h == null ? void 0 : h._deleted) ? b((F) => F.filter((W) => W.stateKey !== c.state_key)) : b((F) => {
          const W = F.find((q) => q.stateKey === c.state_key);
          return [...F.filter((q) => q.stateKey !== c.state_key), { stateKey: c.state_key, eventId: c.event_id ?? "", content: h, sender: c.sender, creatorId: (W == null ? void 0 : W.creatorId) ?? c.sender, ts: c.origin_server_ts }];
        });
      } else c.type === "m.reaction" ? U((h) => [...c.event_id ? h.filter((W) => W.event_id !== c.event_id) : h, c]) : c.type === "m.room.message" && c.content["eu.kiefte.issue_id"] && K((h) => [...c.event_id ? h.filter((W) => W.event_id !== c.event_id) : h, c]);
    };
    return s.on(n, f), () => {
      s.off(n, f);
    };
  }, [s]);
  const A = u.useMemo(() => {
    const n = /* @__PURE__ */ new Map();
    for (const f of m) f.eventId && n.set(f.eventId, f.stateKey);
    return n;
  }, [m]), N = u.useMemo(() => {
    var _a;
    const n = /* @__PURE__ */ new Map();
    for (const f of R) {
      const y = (_a = f.content) == null ? void 0 : _a["m.relates_to"];
      if ((y == null ? void 0 : y.rel_type) !== "m.annotation" || !y.event_id || !y.key) continue;
      const c = A.get(y.event_id);
      if (!c) continue;
      n.has(c) || n.set(c, /* @__PURE__ */ new Map());
      const h = n.get(c);
      h.has(y.key) || h.set(y.key, /* @__PURE__ */ new Set()), h.get(y.key).add(f.sender);
    }
    return n;
  }, [R, A]), Y = u.useMemo(() => {
    const n = /* @__PURE__ */ new Map();
    for (const f of S) {
      const y = f.content["eu.kiefte.issue_id"];
      y && n.set(y, (n.get(y) ?? 0) + 1);
    }
    return n;
  }, [S]), G = u.useMemo(() => {
    const n = d !== null && d !== "new" ? d.stateKey : null;
    return n ? S.filter((f) => f.content["eu.kiefte.issue_id"] === n).sort((f, y) => f.origin_server_ts - y.origin_server_ts) : [];
  }, [S, d]), J = u.useCallback(async (n, f) => {
    b((y) => [...y.filter((h) => h.stateKey !== n), { stateKey: n, eventId: "", content: f, sender: B, ts: Date.now() }]), C(null), await s.sendStateEvent("eu.kiefte.issue", n, f);
  }, [s, B]), Z = u.useCallback(async (n) => {
    b((f) => f.filter((y) => y.stateKey !== n)), C(null), await s.sendStateEvent("eu.kiefte.issue", n, { _deleted: true });
  }, [s]), l = u.useCallback(async (n) => {
    a(n), j(false), await s.sendStateEvent("eu.kiefte.issues.schema", "", n);
  }, [s]), L = u.useCallback(async (n, f) => {
    const y = ge(f), c = { msgtype: "m.text", body: f, "eu.kiefte.issue_id": n };
    y.length > 0 && (c["m.mentions"] = { user_ids: y });
    const h = { event_id: `local-${Date.now()}`, type: "m.room.message", sender: B, origin_server_ts: Date.now(), content: c };
    K((F) => [...F, h]), await s.sendRoomEvent("m.room.message", c);
  }, [s, B]), ee = u.useCallback(async (n, f) => {
    const y = m.find((h) => h.stateKey === n);
    if (!(y == null ? void 0 : y.eventId)) return;
    const c = { "m.relates_to": { rel_type: "m.annotation", event_id: y.eventId, key: f } };
    await s.sendRoomEvent("m.reaction", c);
  }, [s, m]), H = u.useMemo(() => m.filter((n) => !n.content._deleted).sort((n, f) => f.ts - n.ts), [m]), $ = d !== null && d !== "new" ? d : null, te = ($ == null ? void 0 : $.content) ?? {}, M = ($ == null ? void 0 : $.stateKey) ?? null;
  if (_) return e.jsx("div", { style: t.centered, children: "Loading\u2026" });
  if (k) return e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 12, padding: 24, textAlign: "center" }, children: [e.jsx("div", { style: { color: "#d32f2f" }, children: "Failed to load issues" }), e.jsx("div", { style: { ...t.muted, fontSize: 12, maxWidth: 320, wordBreak: "break-all" }, children: k }), e.jsx("div", { style: t.muted, children: "Make sure this client supports MSC2762 widget state event capabilities." })] });
  if (!p) return o ? e.jsx(le, { initial: he, titleText: "Initialize Issue Tracker", onSave: l, onCancel: () => {
  } }) : e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 8, padding: 24, textAlign: "center" }, children: [e.jsx("span", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("div", { style: { fontWeight: 600 }, children: "Issue Tracker Not Set Up" }), e.jsx("div", { style: t.muted, children: "Ask a room admin to initialize the issue tracker." })] });
  const V = p, ne = V.fields.find((n) => n.kanban_group && n.type === "enum");
  return e.jsxs("div", { style: t.container, children: [e.jsxs("div", { style: t.toolbar, role: "toolbar", "aria-label": "Issue tracker controls", children: [e.jsxs("span", { style: t.muted, children: [H.length, " ", H.length === 1 ? "issue" : "issues"] }), e.jsxs("div", { style: { display: "flex", gap: 6, alignItems: "center", marginLeft: "auto", flexWrap: "wrap" }, children: [ne && e.jsxs(e.Fragment, { children: [e.jsx("button", { onClick: () => i("list"), style: I === "list" ? t.btnActive : t.btn, "aria-pressed": I === "list", children: "List" }), e.jsx("button", { onClick: () => i("kanban"), style: I === "kanban" ? t.btnActive : t.btn, "aria-pressed": I === "kanban", children: "Kanban" }), I === "kanban" && g.size > 0 && [...g].map((n) => e.jsx("button", { onClick: () => r(n), style: t.btn, "aria-label": "Show " + n + " column", children: n }, n))] }), o && e.jsx("button", { onClick: () => j(true), style: t.btn, "aria-label": "Edit issue tracker schema", children: "\u2699 Schema" }), o && e.jsx("button", { onClick: () => C("new"), style: t.btnPrimary, "aria-label": "New issue", "aria-keyshortcuts": "n", children: "+ New Issue" })] })] }), e.jsx("div", { style: t.content, children: I === "kanban" && ne ? e.jsx(_e, { issues: H, schema: V, kanbanField: ne, reactionsByIssue: N, commentCountByIssue: Y, onEdit: o ? C : void 0, hiddenColumns: g, onHideColumn: P }) : e.jsx(Ce, { issues: H, schema: V, reactionsByIssue: N, commentCountByIssue: Y, onEdit: o ? C : void 0 }) }), d !== null && e.jsx(we, { schema: V, initial: te, isNew: d === "new", canDelete: o && d !== "new", issueKey: M, creatorId: d !== "new" ? d.creatorId : void 0, lastChangedById: d !== "new" && d.sender !== d.creatorId ? d.sender : void 0, reactions: N.get(M ?? "") ?? /* @__PURE__ */ new Map(), comments: G, currentUserId: B, onSave: async (n) => {
    const f = M ?? ce();
    await J(f, n);
  }, onDelete: M ? () => Z(M) : void 0, onCancel: () => C(null), onReact: (n) => {
    M && ee(M, n);
  }, onComment: async (n) => {
    M && await L(M, n);
  } }), D && e.jsx(le, { initial: V, onSave: l, onCancel: () => j(false) })] });
}
const fe = new URLSearchParams(window.location.search), Ee = fe.get("widgetId") ?? void 0, pe = fe.get("parentUrl") ?? void 0, E = new ae.WidgetApi(Ee, pe);
E.requestCapabilityToReceiveState("eu.kiefte.issue");
E.requestCapabilityToReceiveState("eu.kiefte.issues.schema");
E.requestCapabilityToSendState("eu.kiefte.issue");
E.requestCapabilityToSendState("eu.kiefte.issues.schema");
E.requestCapabilityToReceiveState("m.room.power_levels");
E.requestCapabilityToReceiveEvent("eu.kiefte.issue");
E.requestCapabilityToReceiveEvent("m.room.message");
E.requestCapabilityToSendEvent("m.room.message");
E.requestCapabilityToReceiveEvent("m.reaction");
E.requestCapabilityToSendEvent("m.reaction");
E.start();
E.sendContentLoaded();
let ye = false;
E.once("ready", () => {
  ye = true, de(document.getElementById("widget-root")).render(e.jsx(Ie, { widgetApi: E }));
});
setTimeout(() => {
  if (ye) return;
  const s = window.parent !== window, p = !!pe;
  de(document.getElementById("widget-root")).render(e.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: 16, padding: 24, textAlign: "center", fontFamily: "system-ui, sans-serif", color: "#444" }, children: [e.jsx("div", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("div", { style: { fontWeight: 600, fontSize: 18 }, children: "Matrix Issue Tracker Widget" }), s && !p && e.jsx("div", { style: { maxWidth: 520, color: "#c62828", lineHeight: 1.6, fontSize: 14 }, children: "The widget API is not active. This widget was embedded as a plain iframe \u2014 it must be registered as a room state event to work (see below)." }), e.jsxs("div", { style: { maxWidth: 520, color: "#555", fontSize: 13, lineHeight: 1.7, textAlign: "left" }, children: [e.jsx("p", { style: { marginBottom: 8 }, children: "Send the following state event in the room where you want the widget. Any Matrix client with developer tools works (Gomuks, Element Web, etc.)." }), e.jsx("pre", { style: { background: "#f5f5f5", padding: "10px 14px", borderRadius: 4, fontSize: 12, overflowX: "auto", margin: 0 }, children: `Event type:  im.vector.modular.widgets
State key:   eu.kiefte.issue-tracker
Content:
{
  "type": "m.custom",
  "url": "${window.location.origin + window.location.pathname}?roomId=$matrix_room_id&userId=$matrix_user_id",
  "name": "Issue Tracker",
  "id": "eu.kiefte.issue-tracker"
}` }), e.jsxs("p", { style: { marginTop: 10, color: "#777" }, children: [e.jsx("strong", { children: "Gomuks:" }), ' open Developer Tools (\u22EE menu \u2192 Developer tools), go to "Send custom event", set type to ', e.jsx("code", { children: "im.vector.modular.widgets" }), ", state key to ", e.jsx("code", { children: "eu.kiefte.issue-tracker" }), ", paste the content above."] }), e.jsxs("p", { style: { marginTop: 6, color: "#777" }, children: [e.jsx("strong", { children: "Element Web:" }), " use the ", e.jsx("code", { children: "/addwidget" }), " slash command in the room chat:"] }), e.jsx("pre", { style: { background: "#f5f5f5", padding: "6px 14px", borderRadius: 4, fontSize: 12, overflowX: "auto", margin: "4px 0" }, children: `/addwidget ${window.location.origin + window.location.pathname}?roomId=$matrix_room_id&userId=$matrix_user_id` }), e.jsxs("p", { style: { marginTop: 4, color: "#999", fontSize: 12 }, children: ["Or use the", " ", e.jsx("a", { href: "https://codeberg.org/lapingvino/cinny", style: { color: "#1976d2" }, children: "cinny fork" }), `'s built-in "Enable widget" button in the issue board toolbar. Also see`, " ", e.jsx("a", { href: "https://github.com/lapingvino/matrix-issue-widget", style: { color: "#1976d2" }, children: "matrix-issue-widget on GitHub" }), "."] })] })] }));
}, 4e3);
