import { r as d, l as se, j as e, R as Q, i as ie } from "./index-OFY97cN7.js";
const pe = { fields: [{ key: "title", type: "text", label: "Title", required: true }, { key: "status", type: "enum", label: "Status", values: ["Backlog", "To Do", "In Progress", "Done"], kanban_group: true }, { key: "priority", type: "enum", label: "Priority", values: ["Low", "Medium", "High", "Critical"] }, { key: "assignee", type: "user", label: "Assignee" }, { key: "due", type: "date", label: "Due Date" }, { key: "description", type: "text", label: "Description" }] }, t = { container: { display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, toolbar: { display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderBottom: "1px solid #e0e0e0", background: "#fafafa", flexShrink: 0, flexWrap: "wrap" }, content: { flex: 1, overflow: "auto", padding: "8px 0" }, muted: { fontSize: 13, color: "#666" }, btn: { padding: "4px 10px", borderRadius: 4, border: "1px solid #ccc", background: "#fff", cursor: "pointer", fontSize: 13, lineHeight: "20px" }, btnPrimary: { padding: "4px 10px", borderRadius: 4, border: "1px solid #1976d2", background: "#1976d2", color: "#fff", cursor: "pointer", fontSize: 13, lineHeight: "20px", fontWeight: 600 }, btnActive: { padding: "4px 10px", borderRadius: 4, border: "1px solid #1976d2", background: "#e3f0fd", color: "#1976d2", cursor: "pointer", fontSize: 13, lineHeight: "20px" }, btnDanger: { padding: "4px 10px", borderRadius: 4, border: "1px solid #d32f2f", background: "#fff", color: "#d32f2f", cursor: "pointer", fontSize: 13, lineHeight: "20px" }, centered: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#666" }, overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-start", justifyContent: "center", zIndex: 1e3, overflowY: "auto", padding: 24 }, dialog: { background: "#fff", borderRadius: 6, boxShadow: "0 4px 24px rgba(0,0,0,0.18)", width: "100%", maxWidth: 520, display: "flex", flexDirection: "column", maxHeight: "90vh" }, dialogHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid #e0e0e0", flexShrink: 0 }, dialogBody: { padding: 16, overflowY: "auto", flex: 1 }, dialogFooter: { display: "flex", alignItems: "center", padding: "10px 16px", borderTop: "1px solid #e0e0e0", flexShrink: 0, gap: 8 }, input: { width: "100%", padding: "6px 8px", border: "1px solid #ccc", borderRadius: 4, fontSize: 14, fontFamily: "inherit" }, label: { display: "block", fontWeight: 600, marginBottom: 4, fontSize: 13 }, fieldGroup: { marginBottom: 12 }, table: { width: "100%", borderCollapse: "collapse", fontSize: 13 }, th: { textAlign: "left", padding: "6px 12px", borderBottom: "1px solid #e0e0e0", color: "#555", fontWeight: 600, whiteSpace: "nowrap" }, td: { padding: "6px 12px", borderBottom: "1px solid #f0f0f0", verticalAlign: "top", wordBreak: "break-word" }, kanbanScroll: { display: "flex", gap: 12, padding: "0 12px 12px", overflowX: "auto", height: "100%", alignItems: "flex-start" }, kanbanCol: { flexShrink: 0, width: 220, background: "#f5f5f5", borderRadius: 6, display: "flex", flexDirection: "column", maxHeight: "100%" }, kanbanColHeader: { padding: "8px 12px", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #e0e0e0", display: "flex", alignItems: "center", justifyContent: "space-between" }, kanbanColBody: { padding: 8, overflowY: "auto", flex: 1, display: "flex", flexDirection: "column", gap: 6 }, kanbanCard: { background: "#fff", borderRadius: 4, padding: "8px 10px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", cursor: "pointer", border: "1px solid #e8e8e8", fontSize: 13 }, kanbanTitle: { fontWeight: 600, marginBottom: 4, wordBreak: "break-word" }, kanbanMeta: { color: "#777", fontSize: 12 } };
function ee(s, f) {
  if (f == null || f === "") return "";
  if (s.type === "date") {
    const a = new Date(String(f));
    return isNaN(a.getTime()) ? String(f) : a.toLocaleDateString();
  }
  return String(f);
}
function oe() {
  return `issue-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function re(s) {
  return s.startsWith("@") ? s.slice(1).split(":")[0] : s;
}
function ye(s) {
  return new Date(s).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function xe(s) {
  const f = s.match(/@[\w.-]+:[\w.:-]+/g) ?? [];
  return [...new Set(f)];
}
const he = ["\u{1F44D}", "\u{1F44E}", "\u2764\uFE0F", "\u{1F389}"];
function me({ reactions: s, currentUserId: f, onReact: a, compact: g }) {
  if (s.size === 0 && !g) return null;
  const v = [...s.entries()].sort((o, h) => h[1].size - o[1].size);
  return e.jsxs("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: g ? 0 : 4 }, children: [v.map(([o, h]) => {
    const C = h.has(f);
    return e.jsxs("button", { onClick: () => a(o), title: [...h].map(re).join(", "), style: { fontSize: 12, padding: "1px 6px", borderRadius: 10, border: C ? "1px solid #1976d2" : "1px solid #e0e0e0", background: C ? "#e3f0fd" : "#fafafa", color: C ? "#1976d2" : "inherit", cursor: "pointer", lineHeight: "18px", fontFamily: "inherit" }, children: [o, " ", h.size] }, o);
  }), !g && he.filter((o) => !s.has(o)).map((o) => e.jsx("button", { onClick: () => a(o), title: `React with ${o}`, style: { fontSize: 12, padding: "1px 6px", borderRadius: 10, border: "1px dashed #ccc", background: "transparent", color: "#999", cursor: "pointer", lineHeight: "18px", fontFamily: "inherit" }, children: o }, o))] });
}
function le({ reactions: s, commentCount: f }) {
  const a = [], g = [...s.entries()].sort((v, o) => o[1].size - v[1].size).slice(0, 3);
  for (const [v, o] of g) a.push(`${v}${o.size}`);
  return f > 0 && a.push(`\u{1F4AC}${f}`), a.length === 0 ? null : e.jsx("span", { style: { fontSize: 11, color: "#666", whiteSpace: "nowrap" }, children: a.join(" ") });
}
function ge(s) {
  var _a;
  return { ...s, _enumRaw: ((_a = s.values) == null ? void 0 : _a.join(", ")) ?? "" };
}
function be(s) {
  const { _enumRaw: f, ...a } = s;
  return a.type === "enum" ? a.values = f.split(",").map((g) => g.trim()).filter(Boolean) : (delete a.values, delete a.kanban_group), a;
}
const ve = { text: "Text", enum: "Choice", user: "User", date: "Date", follow: "Follow" };
function ne({ initial: s, onSave: f, onCancel: a, titleText: g }) {
  var _a;
  const [v, o] = Q.useState(() => s.fields.map(ge)), [h, C] = Q.useState(((_a = s.fields[0]) == null ? void 0 : _a.key) ?? null), [x, k] = Q.useState(false), [_, z] = Q.useState(null), i = v.find((r) => r.key === h) ?? null, y = (r, S) => o((R) => R.map((B) => B.key === r ? { ...B, ...S } : B)), w = (r) => {
    o((S) => {
      var _a2;
      const R = S.filter((B) => B.key !== r);
      return h === r && C(((_a2 = R[0]) == null ? void 0 : _a2.key) ?? null), R;
    });
  }, I = () => {
    const r = oe();
    o((S) => [...S, { key: r, type: "text", label: "", _enumRaw: "" }]), C(r);
  }, b = async (r) => {
    r.preventDefault(), k(true), z(null);
    try {
      await f({ fields: v.map(be) });
    } catch (S) {
      z(S instanceof Error ? S.message : "Failed to save"), k(false);
    }
  }, j = { width: 160, flexShrink: 0, borderRight: "1px solid #e0e0e0", display: "flex", flexDirection: "column", overflow: "hidden" }, E = { flex: 1, display: "flex", flexDirection: "column", overflow: "auto", padding: 16, gap: 12 }, M = (r) => ({ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2, padding: "6px 10px", border: "1px solid " + (r ? "#1976d2" : "transparent"), background: r ? "#e3f0fd" : "transparent", borderRadius: 4, cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "inherit", fontSize: 13, color: r ? "#1976d2" : "inherit" });
  return e.jsx("div", { style: t.overlay, role: "dialog", "aria-modal": "true", "aria-label": "Edit issue tracker schema", children: e.jsxs("div", { style: { ...t.dialog, maxWidth: 580 }, children: [e.jsxs("div", { style: t.dialogHeader, children: [e.jsx("strong", { children: g ?? "Configure Issue Tracker Schema" }), e.jsx("button", { onClick: a, style: { background: "none", border: "none", cursor: "pointer", fontSize: 18, lineHeight: 1 }, "aria-label": "Close", children: "\xD7" })] }), e.jsx("form", { onSubmit: b, id: "schema-editor-form", style: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }, children: e.jsxs("div", { style: { display: "flex", flex: 1, overflow: "hidden", minHeight: 280, maxHeight: "55vh" }, children: [e.jsxs("div", { style: j, children: [e.jsx("div", { style: { flex: 1, overflowY: "auto", padding: "8px 6px", display: "flex", flexDirection: "column", gap: 4 }, children: v.map((r, S) => e.jsxs("button", { type: "button", onClick: () => C(r.key), style: M(r.key === h), children: [e.jsx("span", { style: { fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }, children: r.label || `Field ${S + 1}` }), e.jsx("span", { style: { fontSize: 11, color: "#888" }, children: ve[r.type] ?? r.type })] }, r.key)) }), e.jsx("div", { style: { padding: "6px 8px", borderTop: "1px solid #e0e0e0" }, children: e.jsx("button", { type: "button", onClick: I, style: { ...t.btn, width: "100%", fontSize: 12 }, children: "+ Add Field" }) })] }), i ? e.jsxs("div", { style: E, children: [e.jsxs("div", { style: { display: "flex", gap: 10 }, children: [e.jsxs("div", { style: { flex: 1 }, children: [e.jsx("label", { style: t.label, htmlFor: `sf-label-${i.key}`, children: "Label" }), e.jsx("input", { id: `sf-label-${i.key}`, type: "text", required: true, style: t.input, value: i.label, placeholder: "e.g. Status", onChange: (r) => y(i.key, { label: r.target.value }) })] }), e.jsxs("div", { style: { width: 110, flexShrink: 0 }, children: [e.jsx("label", { style: t.label, htmlFor: `sf-type-${i.key}`, children: "Type" }), e.jsxs("select", { id: `sf-type-${i.key}`, style: t.input, value: i.type, onChange: (r) => y(i.key, { type: r.target.value }), children: [e.jsx("option", { value: "text", children: "Text" }), e.jsx("option", { value: "enum", children: "Choice" }), e.jsx("option", { value: "user", children: "User" }), e.jsx("option", { value: "date", children: "Date" }), e.jsx("option", { value: "follow", children: "Follow" })] })] })] }), e.jsxs("label", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 13 }, children: [e.jsx("input", { type: "checkbox", checked: !!i.required, onChange: (r) => y(i.key, { required: r.target.checked || void 0 }) }), "Required"] }), i.type === "enum" && e.jsxs("div", { children: [e.jsx("label", { style: t.label, htmlFor: `sf-vals-${i.key}`, children: "Choices (comma-separated)" }), e.jsx("input", { id: `sf-vals-${i.key}`, type: "text", style: t.input, value: i._enumRaw, placeholder: "e.g. To Do, In Progress, Done", onChange: (r) => y(i.key, { _enumRaw: r.target.value }) }), e.jsxs("label", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, marginTop: 8 }, children: [e.jsx("input", { type: "checkbox", checked: !!i.kanban_group, onChange: (r) => y(i.key, { kanban_group: r.target.checked || void 0 }) }), "Default kanban grouping field"] })] }), e.jsx("div", { style: { marginTop: "auto", paddingTop: 8 }, children: e.jsx("button", { type: "button", style: t.btnDanger, onClick: () => w(i.key), children: "Remove Field" }) })] }) : e.jsx("div", { style: { ...E, alignItems: "center", justifyContent: "center", color: "#999" }, children: "Add a field or select one to edit" })] }) }), e.jsxs("div", { style: t.dialogFooter, children: [_ && e.jsx("span", { style: { color: "#d32f2f", flex: 1, fontSize: 13 }, children: _ }), e.jsx("button", { type: "button", style: t.btn, onClick: a, children: "Cancel" }), e.jsx("button", { type: "submit", form: "schema-editor-form", style: t.btnPrimary, disabled: x, children: x ? "Saving\u2026" : "Save Schema" })] })] }) });
}
function ke({ schema: s, initial: f, isNew: a, canDelete: g, issueKey: v, reactions: o, comments: h, currentUserId: C, onSave: x, onDelete: k, onCancel: _, onReact: z, onComment: i }) {
  const [y, w] = d.useState({ ...f }), [I, b] = d.useState(false), [j, E] = d.useState(""), [M, r] = d.useState(""), [S, R] = d.useState(false), B = d.useRef(null), A = d.useRef(null);
  d.useEffect(() => {
    var _a;
    (_a = B.current) == null ? void 0 : _a.focus();
  }, []), d.useEffect(() => {
    var _a;
    (_a = A.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [h.length]);
  const K = async () => {
    b(true), E("");
    try {
      await x(y);
    } catch (l) {
      E(String(l)), b(false);
    }
  }, V = async () => {
    if (k) {
      b(true);
      try {
        await k();
      } catch (l) {
        E(String(l)), b(false);
      }
    }
  }, P = async () => {
    const l = M.trim();
    if (l) {
      R(true);
      try {
        await i(l), r("");
      } catch ($) {
        E(String($));
      } finally {
        R(false);
      }
    }
  }, Y = (l) => {
    l.key === "Escape" && _();
  }, J = (l) => {
    l.key === "Enter" && (l.ctrlKey || l.metaKey) && (l.preventDefault(), P());
  };
  return e.jsx("div", { style: t.overlay, role: "dialog", "aria-modal": "true", "aria-label": a ? "New issue" : "Edit issue", onKeyDown: Y, children: e.jsxs("div", { style: t.dialog, children: [e.jsxs("div", { style: t.dialogHeader, children: [e.jsx("strong", { style: { fontSize: 15 }, children: a ? "New Issue" : "Edit Issue" }), e.jsx("button", { onClick: _, style: { ...t.btn, border: "none", background: "none", fontSize: 18, padding: "0 4px" }, "aria-label": "Close", children: "\u2715" })] }), e.jsxs("div", { style: t.dialogBody, children: [s.fields.map((l, $) => {
    const G = String(y[l.key] ?? ""), q = { id: `wf-${l.key}`, value: G, onChange: (L) => w((U) => ({ ...U, [l.key]: L.target.value || void 0 })), style: t.input, ref: $ === 0 ? B : void 0 };
    return e.jsxs("div", { style: t.fieldGroup, children: [e.jsxs("label", { htmlFor: `wf-${l.key}`, style: t.label, children: [l.label, l.required && e.jsx("span", { style: { color: "#d32f2f" }, children: " *" })] }), l.type === "enum" && l.values ? e.jsxs("select", { ...q, children: [e.jsx("option", { value: "", children: "\u2014" }), l.values.map((L) => e.jsx("option", { value: L, children: L }, L))] }) : l.type === "date" ? e.jsx("input", { type: "date", ...q }) : l.key === "description" ? e.jsx("textarea", { ...q, rows: 4, style: { ...t.input, resize: "vertical", fontFamily: "inherit" } }) : e.jsx("input", { type: "text", ...q, placeholder: l.type === "user" ? "@user:server" : "" })] }, l.key);
  }), !a && e.jsx("div", { style: { marginBottom: 12 }, children: e.jsx(me, { reactions: o, currentUserId: C, onReact: z }) }), !a && e.jsxs("div", { style: { borderTop: "1px solid #e0e0e0", paddingTop: 12 }, children: [e.jsxs("div", { style: { fontWeight: 600, fontSize: 13, marginBottom: 8, color: "#444" }, children: ["Comments", h.length > 0 ? ` (${h.length})` : ""] }), h.length === 0 && e.jsx("div", { style: { fontSize: 12, color: "#999", marginBottom: 8 }, children: "No comments yet." }), h.length > 0 && e.jsxs("div", { style: { maxHeight: 180, overflowY: "auto", marginBottom: 8, paddingRight: 4 }, children: [h.map((l) => {
    const $ = String(l.content.body ?? "");
    return e.jsxs("div", { style: { marginBottom: 10 }, children: [e.jsxs("div", { style: { display: "flex", alignItems: "baseline", gap: 6, marginBottom: 2 }, children: [e.jsx("span", { style: { fontWeight: 600, fontSize: 12 }, children: re(l.sender) }), e.jsx("span", { style: { color: "#aaa", fontSize: 11 }, children: ye(l.origin_server_ts) })] }), e.jsx("div", { style: { fontSize: 13, whiteSpace: "pre-wrap", wordBreak: "break-word", lineHeight: 1.4 }, children: $ })] }, l.event_id ?? l.origin_server_ts);
  }), e.jsx("div", { ref: A })] }), e.jsxs("div", { style: { display: "flex", gap: 6, alignItems: "flex-end" }, children: [e.jsx("div", { style: { flex: 1 }, children: e.jsx("textarea", { value: M, onChange: (l) => r(l.target.value), onKeyDown: J, placeholder: "Add a comment\u2026 (@user:server for mentions, Ctrl+Enter to send)", "aria-label": "Add a comment", rows: 2, style: { ...t.input, resize: "none", fontFamily: "inherit" }, disabled: S }) }), e.jsx("button", { onClick: P, disabled: !M.trim() || S, style: { ...t.btnPrimary, flexShrink: 0, alignSelf: "flex-end" }, children: S ? "\u2026" : "Send" })] }), e.jsx("div", { style: { fontSize: 11, color: "#aaa", marginTop: 3 }, children: "Use @user:server.com to mention someone" })] }), j && e.jsx("div", { style: { color: "#d32f2f", marginTop: 8, fontSize: 13 }, children: j })] }), e.jsxs("div", { style: t.dialogFooter, children: [g && k && e.jsx("button", { onClick: V, disabled: I, style: t.btnDanger, children: "Delete" }), e.jsxs("div", { style: { display: "flex", gap: 8, marginLeft: "auto" }, children: [e.jsx("button", { onClick: _, disabled: I, style: t.btn, children: "Cancel" }), e.jsx("button", { onClick: K, disabled: I, style: t.btnPrimary, children: I ? "Saving\u2026" : "Save" })] })] })] }) });
}
function je({ issues: s, schema: f, reactionsByIssue: a, commentCountByIssue: g, onEdit: v }) {
  const o = d.useMemo(() => {
    const x = f.fields.find((_) => _.key === "title") ?? f.fields[0], k = f.fields.filter((_) => _ !== x).slice(0, 3);
    return x ? [x, ...k] : k;
  }, [f]), [h, C] = d.useState(null);
  return s.length === 0 ? e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 8 }, children: [e.jsx("span", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("span", { style: t.muted, children: "No issues yet" })] }) : e.jsxs("table", { style: t.table, children: [e.jsx("thead", { children: e.jsxs("tr", { children: [o.map((x) => e.jsx("th", { style: t.th, children: x.label }, x.key)), e.jsx("th", { style: { ...t.th, width: 1 }, "aria-label": "Activity" })] }) }), e.jsx("tbody", { children: s.map((x) => e.jsxs("tr", { onMouseEnter: () => C(x.stateKey), onMouseLeave: () => C(null), style: { background: h === x.stateKey ? "#f5f8ff" : void 0 }, children: [o.map((k, _) => e.jsx("td", { style: t.td, children: _ === 0 && v ? e.jsx("button", { onClick: () => v(x), style: { background: "none", border: "none", padding: 0, cursor: "pointer", font: "inherit", color: "#1976d2", textDecoration: "underline", textAlign: "left" }, "aria-label": `Open issue: ${String(x.content[k.key] ?? "(untitled)")}`, children: ee(k, x.content[k.key]) || e.jsx("span", { style: { color: "#bbb" }, children: "\u2014" }) }) : ee(k, x.content[k.key]) || e.jsx("span", { style: { color: "#bbb" }, children: "\u2014" }) }, k.key)), e.jsx("td", { style: { ...t.td, whiteSpace: "nowrap", paddingLeft: 4 }, children: e.jsx(le, { reactions: a.get(x.stateKey) ?? /* @__PURE__ */ new Map(), commentCount: g.get(x.stateKey) ?? 0 }) })] }, x.stateKey)) })] });
}
function Se({ issues: s, schema: f, kanbanField: a, reactionsByIssue: g, commentCountByIssue: v, onEdit: o, hiddenColumns: h, onHideColumn: C }) {
  const x = f.fields.find((i) => i.key === "title") ?? f.fields[0], k = f.fields.filter((i) => i !== x && i !== a).slice(0, 2), z = d.useMemo(() => {
    const i = a.values ?? [], y = Object.fromEntries(i.map((b) => [b, []])), w = [];
    for (const b of s) {
      const j = String(b.content[a.key] ?? "");
      j && y[j] ? y[j].push(b) : w.push(b);
    }
    const I = i.map((b) => ({ label: b, issues: y[b] }));
    return w.length > 0 && I.push({ label: "(Unset)", issues: w }), I;
  }, [s, a]).filter((i) => !h.has(i.label));
  return s.length === 0 ? e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 8 }, children: [e.jsx("span", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("span", { style: t.muted, children: "No issues yet" })] }) : e.jsx("div", { style: t.kanbanScroll, children: z.map((i) => e.jsxs("div", { style: t.kanbanCol, children: [e.jsxs("div", { style: t.kanbanColHeader, children: [e.jsx("span", { children: i.label }), e.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [e.jsx("span", { style: { color: "#999", fontSize: 12 }, children: i.issues.length }), e.jsx("button", { type: "button", "aria-label": "Hide " + i.label + " column", onClick: () => C(i.label), style: { background: "transparent", border: "none", cursor: "pointer", padding: "0 2px", color: "inherit", opacity: 0.5, fontSize: "0.9em", lineHeight: 1 }, children: "\u2715" })] })] }), e.jsx("div", { style: t.kanbanColBody, children: i.issues.map((y) => {
    const w = x ? String(y.content[x.key] ?? "") || "(untitled)" : y.stateKey, I = g.get(y.stateKey) ?? /* @__PURE__ */ new Map(), b = v.get(y.stateKey) ?? 0;
    return e.jsxs("div", { style: t.kanbanCard, onClick: () => o == null ? void 0 : o(y), role: o ? "button" : void 0, tabIndex: o ? 0 : void 0, onKeyDown: o ? (j) => {
      (j.key === "Enter" || j.key === " ") && o(y);
    } : void 0, "aria-label": w, children: [e.jsx("div", { style: t.kanbanTitle, children: w }), k.map((j) => {
      const E = ee(j, y.content[j.key]);
      return E ? e.jsxs("div", { style: t.kanbanMeta, children: [j.label, ": ", E] }, j.key) : null;
    }), (I.size > 0 || b > 0) && e.jsx("div", { style: { marginTop: 6 }, children: e.jsx(le, { reactions: I, commentCount: b }) })] }, y.stateKey);
  }) })] }, i.label)) });
}
function we({ widgetApi: s }) {
  const [f, a] = d.useState(null), [g, v] = d.useState([]), [o, h] = d.useState(false), [C, x] = d.useState(true), [k, _] = d.useState(null), [z, i] = d.useState("list"), [y, w] = d.useState(null), [I, b] = d.useState(false), [j, E] = d.useState(/* @__PURE__ */ new Set()), M = (n) => E((c) => /* @__PURE__ */ new Set([...c, n])), r = (n) => E((c) => {
    const p = new Set(c);
    return p.delete(n), p;
  }), [S, R] = d.useState([]), [B, A] = d.useState([]), K = d.useMemo(() => new URLSearchParams(window.location.search).get("userId") ?? "", []);
  d.useEffect(() => {
    let n = false;
    async function c() {
      var _a, _b, _c;
      try {
        const [p, u, m, H, W] = await Promise.all([s.readStateEvents("eu.kiefte.issues.schema", 1), s.readStateEvents("eu.kiefte.issue", 1e4), s.readStateEvents("m.room.power_levels", 1), s.readRoomEvents("m.room.message", 2e3).catch(() => []), s.readRoomEvents("m.reaction", 5e3).catch(() => [])]);
        if (n) return;
        const O = (_a = p[0]) == null ? void 0 : _a.content;
        a((O == null ? void 0 : O.fields) ? O : null), v(u.filter((D) => {
          var _a2;
          return D.state_key && !((_a2 = D.content) == null ? void 0 : _a2._deleted);
        }).map((D) => ({ stateKey: D.state_key, eventId: D.event_id ?? "", content: D.content, sender: D.sender, ts: D.origin_server_ts })));
        const X = (_b = m[0]) == null ? void 0 : _b.content;
        if (X && K) {
          const D = ((_c = X.users) == null ? void 0 : _c[K]) ?? X.users_default ?? 0, fe = X.state_default ?? 50;
          h(D >= fe);
        } else h(true);
        R(H.filter((D) => D.content["eu.kiefte.issue_id"])), A(W);
      } catch (p) {
        n || _(String(p));
      } finally {
        n || x(false);
      }
    }
    return c(), () => {
      n = true;
    };
  }, [s, K]), d.useEffect(() => {
    const n = `action:${se.WidgetApiToWidgetAction.SendEvent}`, c = (p) => {
      var _a;
      const u = ((_a = p == null ? void 0 : p.detail) == null ? void 0 : _a.data) ?? p;
      if (u == null ? void 0 : u.type) if (u.type === "eu.kiefte.issues.schema") {
        const m = u.content;
        (m == null ? void 0 : m.fields) && a(m);
      } else if (u.type === "eu.kiefte.issue" && u.state_key) {
        const m = u.content;
        (m == null ? void 0 : m._deleted) ? v((H) => H.filter((W) => W.stateKey !== u.state_key)) : v((H) => [...H.filter((O) => O.stateKey !== u.state_key), { stateKey: u.state_key, eventId: u.event_id ?? "", content: m, sender: u.sender, ts: u.origin_server_ts }]);
      } else u.type === "m.reaction" ? A((m) => [...u.event_id ? m.filter((W) => W.event_id !== u.event_id) : m, u]) : u.type === "m.room.message" && u.content["eu.kiefte.issue_id"] && R((m) => [...u.event_id ? m.filter((W) => W.event_id !== u.event_id) : m, u]);
    };
    return s.on(n, c), () => {
      s.off(n, c);
    };
  }, [s]);
  const V = d.useMemo(() => {
    const n = /* @__PURE__ */ new Map();
    for (const c of g) c.eventId && n.set(c.eventId, c.stateKey);
    return n;
  }, [g]), P = d.useMemo(() => {
    var _a;
    const n = /* @__PURE__ */ new Map();
    for (const c of B) {
      const p = (_a = c.content) == null ? void 0 : _a["m.relates_to"];
      if ((p == null ? void 0 : p.rel_type) !== "m.annotation" || !p.event_id || !p.key) continue;
      const u = V.get(p.event_id);
      if (!u) continue;
      n.has(u) || n.set(u, /* @__PURE__ */ new Map());
      const m = n.get(u);
      m.has(p.key) || m.set(p.key, /* @__PURE__ */ new Set()), m.get(p.key).add(c.sender);
    }
    return n;
  }, [B, V]), Y = d.useMemo(() => {
    const n = /* @__PURE__ */ new Map();
    for (const c of S) {
      const p = c.content["eu.kiefte.issue_id"];
      p && n.set(p, (n.get(p) ?? 0) + 1);
    }
    return n;
  }, [S]), J = d.useMemo(() => {
    const n = y !== null && y !== "new" ? y.stateKey : null;
    return n ? S.filter((c) => c.content["eu.kiefte.issue_id"] === n).sort((c, p) => c.origin_server_ts - p.origin_server_ts) : [];
  }, [S, y]), l = d.useCallback(async (n, c) => {
    v((p) => [...p.filter((m) => m.stateKey !== n), { stateKey: n, eventId: "", content: c, sender: K, ts: Date.now() }]), w(null), await s.sendStateEvent("eu.kiefte.issue", n, c);
  }, [s, K]), $ = d.useCallback(async (n) => {
    v((c) => c.filter((p) => p.stateKey !== n)), w(null), await s.sendStateEvent("eu.kiefte.issue", n, { _deleted: true });
  }, [s]), G = d.useCallback(async (n) => {
    a(n), b(false), await s.sendStateEvent("eu.kiefte.issues.schema", "", n);
  }, [s]), q = d.useCallback(async (n, c) => {
    const p = xe(c), u = { msgtype: "m.text", body: c, "eu.kiefte.issue_id": n };
    p.length > 0 && (u["m.mentions"] = { user_ids: p });
    const m = { event_id: `local-${Date.now()}`, type: "m.room.message", sender: K, origin_server_ts: Date.now(), content: u };
    R((H) => [...H, m]), await s.sendRoomEvent("m.room.message", u);
  }, [s, K]), L = d.useCallback(async (n, c) => {
    const p = g.find((m) => m.stateKey === n);
    if (!(p == null ? void 0 : p.eventId)) return;
    const u = { "m.relates_to": { rel_type: "m.annotation", event_id: p.eventId, key: c } };
    await s.sendRoomEvent("m.reaction", u);
  }, [s, g]), U = d.useMemo(() => g.filter((n) => !n.content._deleted).sort((n, c) => c.ts - n.ts), [g]), te = y !== null && y !== "new" ? y : null, ue = (te == null ? void 0 : te.content) ?? {}, F = (te == null ? void 0 : te.stateKey) ?? null;
  if (C) return e.jsx("div", { style: t.centered, children: "Loading\u2026" });
  if (k) return e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 12, padding: 24, textAlign: "center" }, children: [e.jsx("div", { style: { color: "#d32f2f" }, children: "Failed to load issues" }), e.jsx("div", { style: { ...t.muted, fontSize: 12, maxWidth: 320, wordBreak: "break-all" }, children: k }), e.jsx("div", { style: t.muted, children: "Make sure this client supports MSC2762 widget state event capabilities." })] });
  if (!f) return o ? e.jsx(ne, { initial: pe, titleText: "Initialize Issue Tracker", onSave: G, onCancel: () => {
  } }) : e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 8, padding: 24, textAlign: "center" }, children: [e.jsx("span", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("div", { style: { fontWeight: 600 }, children: "Issue Tracker Not Set Up" }), e.jsx("div", { style: t.muted, children: "Ask a room admin to initialize the issue tracker." })] });
  const N = f, Z = N.fields.find((n) => n.kanban_group && n.type === "enum");
  return e.jsxs("div", { style: t.container, children: [e.jsxs("div", { style: t.toolbar, role: "toolbar", "aria-label": "Issue tracker controls", children: [e.jsxs("span", { style: t.muted, children: [U.length, " ", U.length === 1 ? "issue" : "issues"] }), e.jsxs("div", { style: { display: "flex", gap: 6, alignItems: "center", marginLeft: "auto", flexWrap: "wrap" }, children: [Z && e.jsxs(e.Fragment, { children: [e.jsx("button", { onClick: () => i("list"), style: z === "list" ? t.btnActive : t.btn, "aria-pressed": z === "list", children: "List" }), e.jsx("button", { onClick: () => i("kanban"), style: z === "kanban" ? t.btnActive : t.btn, "aria-pressed": z === "kanban", children: "Kanban" }), z === "kanban" && j.size > 0 && [...j].map((n) => e.jsx("button", { onClick: () => r(n), style: t.btn, "aria-label": "Show " + n + " column", children: n }, n))] }), o && e.jsx("button", { onClick: () => b(true), style: t.btn, "aria-label": "Edit issue tracker schema", children: "\u2699 Schema" }), o && e.jsx("button", { onClick: () => w("new"), style: t.btnPrimary, "aria-label": "New issue", "aria-keyshortcuts": "n", children: "+ New Issue" })] })] }), e.jsx("div", { style: t.content, children: z === "kanban" && Z ? e.jsx(Se, { issues: U, schema: N, kanbanField: Z, reactionsByIssue: P, commentCountByIssue: Y, onEdit: o ? w : void 0, hiddenColumns: j, onHideColumn: M }) : e.jsx(je, { issues: U, schema: N, reactionsByIssue: P, commentCountByIssue: Y, onEdit: o ? w : void 0 }) }), y !== null && e.jsx(ke, { schema: N, initial: ue, isNew: y === "new", canDelete: o && y !== "new", issueKey: F, reactions: P.get(F ?? "") ?? /* @__PURE__ */ new Map(), comments: J, currentUserId: K, onSave: async (n) => {
    const c = F ?? oe();
    await l(c, n);
  }, onDelete: F ? () => $(F) : void 0, onCancel: () => w(null), onReact: (n) => {
    F && L(F, n);
  }, onComment: async (n) => {
    F && await q(F, n);
  } }), I && e.jsx(ne, { initial: N, onSave: G, onCancel: () => b(false) })] });
}
const ae = new URLSearchParams(window.location.search), Ce = ae.get("widgetId") ?? void 0, de = ae.get("parentUrl") ?? void 0, T = new se.WidgetApi(Ce, de);
T.requestCapabilityToReceiveState("eu.kiefte.issue");
T.requestCapabilityToReceiveState("eu.kiefte.issues.schema");
T.requestCapabilityToSendState("eu.kiefte.issue");
T.requestCapabilityToSendState("eu.kiefte.issues.schema");
T.requestCapabilityToReceiveState("m.room.power_levels");
T.requestCapabilityToReceiveEvent("m.room.message");
T.requestCapabilityToSendEvent("m.room.message");
T.requestCapabilityToReceiveEvent("m.reaction");
T.requestCapabilityToSendEvent("m.reaction");
T.start();
T.sendContentLoaded();
let ce = false;
T.once("ready", () => {
  ce = true, ie(document.getElementById("widget-root")).render(e.jsx(we, { widgetApi: T }));
});
setTimeout(() => {
  if (ce) return;
  const s = window.parent !== window, f = !!de;
  ie(document.getElementById("widget-root")).render(e.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: 16, padding: 24, textAlign: "center", fontFamily: "system-ui, sans-serif", color: "#444" }, children: [e.jsx("div", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("div", { style: { fontWeight: 600, fontSize: 18 }, children: "Matrix Issue Tracker Widget" }), s && !f && e.jsx("div", { style: { maxWidth: 520, color: "#c62828", lineHeight: 1.6, fontSize: 14 }, children: "The widget API is not active. This widget was embedded as a plain iframe \u2014 it must be registered as a room state event to work (see below)." }), e.jsxs("div", { style: { maxWidth: 520, color: "#555", fontSize: 13, lineHeight: 1.7, textAlign: "left" }, children: [e.jsx("p", { style: { marginBottom: 8 }, children: "Send the following state event in the room where you want the widget. Any Matrix client with developer tools works (Gomuks, Element Web, etc.)." }), e.jsx("pre", { style: { background: "#f5f5f5", padding: "10px 14px", borderRadius: 4, fontSize: 12, overflowX: "auto", margin: 0 }, children: `Event type:  im.vector.modular.widgets
State key:   eu.kiefte.issue-tracker
Content:
{
  "type": "m.custom",
  "url": "${window.location.origin + window.location.pathname}?roomId=$matrix_room_id&userId=$matrix_user_id",
  "name": "Issue Tracker",
  "id": "eu.kiefte.issue-tracker"
}` }), e.jsxs("p", { style: { marginTop: 10, color: "#777" }, children: [e.jsx("strong", { children: "Gomuks:" }), ' open Developer Tools (\u22EE menu \u2192 Developer tools), go to "Send custom event", set type to ', e.jsx("code", { children: "im.vector.modular.widgets" }), ", state key to ", e.jsx("code", { children: "eu.kiefte.issue-tracker" }), ", paste the content above."] }), e.jsxs("p", { style: { marginTop: 6, color: "#777" }, children: [e.jsx("strong", { children: "Element Web:" }), " use the ", e.jsx("code", { children: "/addwidget" }), " slash command in the room chat:"] }), e.jsx("pre", { style: { background: "#f5f5f5", padding: "6px 14px", borderRadius: 4, fontSize: 12, overflowX: "auto", margin: "4px 0" }, children: `/addwidget ${window.location.origin + window.location.pathname}?roomId=$matrix_room_id&userId=$matrix_user_id` }), e.jsxs("p", { style: { marginTop: 4, color: "#999", fontSize: 12 }, children: ["Or use the", " ", e.jsx("a", { href: "https://codeberg.org/lapingvino/cinny", style: { color: "#1976d2" }, children: "cinny fork" }), `'s built-in "Enable widget" button in the issue board toolbar. Also see`, " ", e.jsx("a", { href: "https://github.com/lapingvino/matrix-issue-widget", style: { color: "#1976d2" }, children: "matrix-issue-widget on GitHub" }), "."] })] })] }));
}, 4e3);
