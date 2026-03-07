import { r as d, l as ee, j as e, R as Y, i as te } from "./index-OFY97cN7.js";
const de = { fields: [{ key: "title", type: "text", label: "Title", required: true }, { key: "status", type: "enum", label: "Status", values: ["Backlog", "To Do", "In Progress", "Done"], kanban_group: true }, { key: "priority", type: "enum", label: "Priority", values: ["Low", "Medium", "High", "Critical"] }, { key: "assignee", type: "user", label: "Assignee" }, { key: "due", type: "date", label: "Due Date" }, { key: "description", type: "text", label: "Description" }] }, t = { container: { display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, toolbar: { display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderBottom: "1px solid #e0e0e0", background: "#fafafa", flexShrink: 0, flexWrap: "wrap" }, content: { flex: 1, overflow: "auto", padding: "8px 0" }, muted: { fontSize: 13, color: "#666" }, btn: { padding: "4px 10px", borderRadius: 4, border: "1px solid #ccc", background: "#fff", cursor: "pointer", fontSize: 13, lineHeight: "20px" }, btnPrimary: { padding: "4px 10px", borderRadius: 4, border: "1px solid #1976d2", background: "#1976d2", color: "#fff", cursor: "pointer", fontSize: 13, lineHeight: "20px", fontWeight: 600 }, btnActive: { padding: "4px 10px", borderRadius: 4, border: "1px solid #1976d2", background: "#e3f0fd", color: "#1976d2", cursor: "pointer", fontSize: 13, lineHeight: "20px" }, btnDanger: { padding: "4px 10px", borderRadius: 4, border: "1px solid #d32f2f", background: "#fff", color: "#d32f2f", cursor: "pointer", fontSize: 13, lineHeight: "20px" }, centered: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#666" }, overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-start", justifyContent: "center", zIndex: 1e3, overflowY: "auto", padding: 24 }, dialog: { background: "#fff", borderRadius: 6, boxShadow: "0 4px 24px rgba(0,0,0,0.18)", width: "100%", maxWidth: 520, display: "flex", flexDirection: "column", maxHeight: "90vh" }, dialogHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid #e0e0e0", flexShrink: 0 }, dialogBody: { padding: 16, overflowY: "auto", flex: 1 }, dialogFooter: { display: "flex", alignItems: "center", padding: "10px 16px", borderTop: "1px solid #e0e0e0", flexShrink: 0, gap: 8 }, input: { width: "100%", padding: "6px 8px", border: "1px solid #ccc", borderRadius: 4, fontSize: 14, fontFamily: "inherit" }, label: { display: "block", fontWeight: 600, marginBottom: 4, fontSize: 13 }, fieldGroup: { marginBottom: 12 }, table: { width: "100%", borderCollapse: "collapse", fontSize: 13 }, th: { textAlign: "left", padding: "6px 12px", borderBottom: "1px solid #e0e0e0", color: "#555", fontWeight: 600, whiteSpace: "nowrap" }, td: { padding: "6px 12px", borderBottom: "1px solid #f0f0f0", verticalAlign: "top" }, kanbanScroll: { display: "flex", gap: 12, padding: "0 12px 12px", overflowX: "auto", height: "100%", alignItems: "flex-start" }, kanbanCol: { flexShrink: 0, width: 220, background: "#f5f5f5", borderRadius: 6, display: "flex", flexDirection: "column", maxHeight: "100%" }, kanbanColHeader: { padding: "8px 12px", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #e0e0e0", display: "flex", alignItems: "center", justifyContent: "space-between" }, kanbanColBody: { padding: 8, overflowY: "auto", flex: 1, display: "flex", flexDirection: "column", gap: 6 }, kanbanCard: { background: "#fff", borderRadius: 4, padding: "8px 10px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", cursor: "pointer", border: "1px solid #e8e8e8", fontSize: 13 }, kanbanTitle: { fontWeight: 600, marginBottom: 4, wordBreak: "break-word" }, kanbanMeta: { color: "#777", fontSize: 12 } };
function J(n, c) {
  if (c == null || c === "") return "";
  if (n.type === "date") {
    const l = new Date(String(c));
    return isNaN(l.getTime()) ? String(c) : l.toLocaleDateString();
  }
  return String(c);
}
function ne() {
  return `issue-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function se(n) {
  return n.startsWith("@") ? n.slice(1).split(":")[0] : n;
}
function ce(n) {
  return new Date(n).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function ue(n) {
  const c = n.match(/@[\w.-]+:[\w.:-]+/g) ?? [];
  return [...new Set(c)];
}
const fe = ["\u{1F44D}", "\u{1F44E}", "\u2764\uFE0F", "\u{1F389}"];
function pe({ reactions: n, currentUserId: c, onReact: l, compact: k }) {
  if (n.size === 0 && !k) return null;
  const S = [...n.entries()].sort((i, m) => m[1].size - i[1].size);
  return e.jsxs("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: k ? 0 : 4 }, children: [S.map(([i, m]) => {
    const C = m.has(c);
    return e.jsxs("button", { onClick: () => l(i), title: [...m].map(se).join(", "), style: { fontSize: 12, padding: "1px 6px", borderRadius: 10, border: C ? "1px solid #1976d2" : "1px solid #e0e0e0", background: C ? "#e3f0fd" : "#fafafa", color: C ? "#1976d2" : "inherit", cursor: "pointer", lineHeight: "18px", fontFamily: "inherit" }, children: [i, " ", m.size] }, i);
  }), !k && fe.filter((i) => !n.has(i)).map((i) => e.jsx("button", { onClick: () => l(i), title: `React with ${i}`, style: { fontSize: 12, padding: "1px 6px", borderRadius: 10, border: "1px dashed #ccc", background: "transparent", color: "#999", cursor: "pointer", lineHeight: "18px", fontFamily: "inherit" }, children: i }, i))] });
}
function ie({ reactions: n, commentCount: c }) {
  const l = [], k = [...n.entries()].sort((S, i) => i[1].size - S[1].size).slice(0, 3);
  for (const [S, i] of k) l.push(`${S}${i.size}`);
  return c > 0 && l.push(`\u{1F4AC}${c}`), l.length === 0 ? null : e.jsx("span", { style: { fontSize: 11, color: "#666", whiteSpace: "nowrap" }, children: l.join(" ") });
}
function ye(n) {
  var _a;
  return { ...n, _enumRaw: ((_a = n.values) == null ? void 0 : _a.join(", ")) ?? "" };
}
function xe(n) {
  const { _enumRaw: c, ...l } = n;
  return l.type === "enum" ? l.values = c.split(",").map((k) => k.trim()).filter(Boolean) : (delete l.values, delete l.kanban_group), l;
}
const he = { text: "Text", enum: "Choice", user: "User", date: "Date", follow: "Follow" };
function Z({ initial: n, onSave: c, onCancel: l, titleText: k }) {
  var _a;
  const [S, i] = Y.useState(() => n.fields.map(ye)), [m, C] = Y.useState(((_a = n.fields[0]) == null ? void 0 : _a.key) ?? null), [g, u] = Y.useState(false), [h, w] = Y.useState(null), y = S.find((o) => o.key === m) ?? null, f = (o, b) => i((K) => K.map((E) => E.key === o ? { ...E, ...b } : E)), j = (o) => {
    i((b) => {
      var _a2;
      const K = b.filter((E) => E.key !== o);
      return m === o && C(((_a2 = K[0]) == null ? void 0 : _a2.key) ?? null), K;
    });
  }, T = () => {
    const o = ne();
    i((b) => [...b, { key: o, type: "text", label: "", _enumRaw: "" }]), C(o);
  }, R = async (o) => {
    o.preventDefault(), u(true), w(null);
    try {
      await c({ fields: S.map(xe) });
    } catch (b) {
      w(b instanceof Error ? b.message : "Failed to save"), u(false);
    }
  }, F = { width: 160, flexShrink: 0, borderRight: "1px solid #e0e0e0", display: "flex", flexDirection: "column", overflow: "hidden" }, D = { flex: 1, display: "flex", flexDirection: "column", overflow: "auto", padding: 16, gap: 12 }, M = (o) => ({ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2, padding: "6px 10px", border: "1px solid " + (o ? "#1976d2" : "transparent"), background: o ? "#e3f0fd" : "transparent", borderRadius: 4, cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "inherit", fontSize: 13, color: o ? "#1976d2" : "inherit" });
  return e.jsx("div", { style: t.overlay, role: "dialog", "aria-modal": "true", "aria-label": "Edit issue tracker schema", children: e.jsxs("div", { style: { ...t.dialog, maxWidth: 580 }, children: [e.jsxs("div", { style: t.dialogHeader, children: [e.jsx("strong", { children: k ?? "Configure Issue Tracker Schema" }), e.jsx("button", { onClick: l, style: { background: "none", border: "none", cursor: "pointer", fontSize: 18, lineHeight: 1 }, "aria-label": "Close", children: "\xD7" })] }), e.jsx("form", { onSubmit: R, id: "schema-editor-form", style: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }, children: e.jsxs("div", { style: { display: "flex", flex: 1, overflow: "hidden", minHeight: 280, maxHeight: "55vh" }, children: [e.jsxs("div", { style: F, children: [e.jsx("div", { style: { flex: 1, overflowY: "auto", padding: "8px 6px", display: "flex", flexDirection: "column", gap: 4 }, children: S.map((o, b) => e.jsxs("button", { type: "button", onClick: () => C(o.key), style: M(o.key === m), children: [e.jsx("span", { style: { fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }, children: o.label || `Field ${b + 1}` }), e.jsx("span", { style: { fontSize: 11, color: "#888" }, children: he[o.type] ?? o.type })] }, o.key)) }), e.jsx("div", { style: { padding: "6px 8px", borderTop: "1px solid #e0e0e0" }, children: e.jsx("button", { type: "button", onClick: T, style: { ...t.btn, width: "100%", fontSize: 12 }, children: "+ Add Field" }) })] }), y ? e.jsxs("div", { style: D, children: [e.jsxs("div", { style: { display: "flex", gap: 10 }, children: [e.jsxs("div", { style: { flex: 1 }, children: [e.jsx("label", { style: t.label, htmlFor: `sf-label-${y.key}`, children: "Label" }), e.jsx("input", { id: `sf-label-${y.key}`, type: "text", required: true, style: t.input, value: y.label, placeholder: "e.g. Status", onChange: (o) => f(y.key, { label: o.target.value }) })] }), e.jsxs("div", { style: { width: 110, flexShrink: 0 }, children: [e.jsx("label", { style: t.label, htmlFor: `sf-type-${y.key}`, children: "Type" }), e.jsxs("select", { id: `sf-type-${y.key}`, style: t.input, value: y.type, onChange: (o) => f(y.key, { type: o.target.value }), children: [e.jsx("option", { value: "text", children: "Text" }), e.jsx("option", { value: "enum", children: "Choice" }), e.jsx("option", { value: "user", children: "User" }), e.jsx("option", { value: "date", children: "Date" }), e.jsx("option", { value: "follow", children: "Follow" })] })] })] }), e.jsxs("label", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 13 }, children: [e.jsx("input", { type: "checkbox", checked: !!y.required, onChange: (o) => f(y.key, { required: o.target.checked || void 0 }) }), "Required"] }), y.type === "enum" && e.jsxs("div", { children: [e.jsx("label", { style: t.label, htmlFor: `sf-vals-${y.key}`, children: "Choices (comma-separated)" }), e.jsx("input", { id: `sf-vals-${y.key}`, type: "text", style: t.input, value: y._enumRaw, placeholder: "e.g. To Do, In Progress, Done", onChange: (o) => f(y.key, { _enumRaw: o.target.value }) }), e.jsxs("label", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, marginTop: 8 }, children: [e.jsx("input", { type: "checkbox", checked: !!y.kanban_group, onChange: (o) => f(y.key, { kanban_group: o.target.checked || void 0 }) }), "Default kanban grouping field"] })] }), e.jsx("div", { style: { marginTop: "auto", paddingTop: 8 }, children: e.jsx("button", { type: "button", style: t.btnDanger, onClick: () => j(y.key), children: "Remove Field" }) })] }) : e.jsx("div", { style: { ...D, alignItems: "center", justifyContent: "center", color: "#999" }, children: "Add a field or select one to edit" })] }) }), e.jsxs("div", { style: t.dialogFooter, children: [h && e.jsx("span", { style: { color: "#d32f2f", flex: 1, fontSize: 13 }, children: h }), e.jsx("button", { type: "button", style: t.btn, onClick: l, children: "Cancel" }), e.jsx("button", { type: "submit", form: "schema-editor-form", style: t.btnPrimary, disabled: g, children: g ? "Saving\u2026" : "Save Schema" })] })] }) });
}
function me({ schema: n, initial: c, isNew: l, canDelete: k, issueKey: S, reactions: i, comments: m, currentUserId: C, onSave: g, onDelete: u, onCancel: h, onReact: w, onComment: y }) {
  const [f, j] = d.useState({ ...c }), [T, R] = d.useState(false), [F, D] = d.useState(""), [M, o] = d.useState(""), [b, K] = d.useState(false), E = d.useRef(null), P = d.useRef(null);
  d.useEffect(() => {
    var _a;
    (_a = E.current) == null ? void 0 : _a.focus();
  }, []), d.useEffect(() => {
    var _a;
    (_a = P.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [m.length]);
  const G = async () => {
    R(true), D("");
    try {
      await g(f);
    } catch (r) {
      D(String(r)), R(false);
    }
  }, O = async () => {
    if (u) {
      R(true);
      try {
        await u();
      } catch (r) {
        D(String(r)), R(false);
      }
    }
  }, q = async () => {
    const r = M.trim();
    if (r) {
      K(true);
      try {
        await y(r), o("");
      } catch (B) {
        D(String(B));
      } finally {
        K(false);
      }
    }
  }, U = (r) => {
    r.key === "Escape" && h();
  }, X = (r) => {
    r.key === "Enter" && (r.ctrlKey || r.metaKey) && (r.preventDefault(), q());
  };
  return e.jsx("div", { style: t.overlay, role: "dialog", "aria-modal": "true", "aria-label": l ? "New issue" : "Edit issue", onKeyDown: U, children: e.jsxs("div", { style: t.dialog, children: [e.jsxs("div", { style: t.dialogHeader, children: [e.jsx("strong", { style: { fontSize: 15 }, children: l ? "New Issue" : "Edit Issue" }), e.jsx("button", { onClick: h, style: { ...t.btn, border: "none", background: "none", fontSize: 18, padding: "0 4px" }, "aria-label": "Close", children: "\u2715" })] }), e.jsxs("div", { style: t.dialogBody, children: [n.fields.map((r, B) => {
    const A = String(f[r.key] ?? ""), L = { id: `wf-${r.key}`, value: A, onChange: (_) => j((H) => ({ ...H, [r.key]: _.target.value || void 0 })), style: t.input, ref: B === 0 ? E : void 0 };
    return e.jsxs("div", { style: t.fieldGroup, children: [e.jsxs("label", { htmlFor: `wf-${r.key}`, style: t.label, children: [r.label, r.required && e.jsx("span", { style: { color: "#d32f2f" }, children: " *" })] }), r.type === "enum" && r.values ? e.jsxs("select", { ...L, children: [e.jsx("option", { value: "", children: "\u2014" }), r.values.map((_) => e.jsx("option", { value: _, children: _ }, _))] }) : r.type === "date" ? e.jsx("input", { type: "date", ...L }) : r.key === "description" ? e.jsx("textarea", { ...L, rows: 4, style: { ...t.input, resize: "vertical", fontFamily: "inherit" } }) : e.jsx("input", { type: "text", ...L, placeholder: r.type === "user" ? "@user:server" : "" })] }, r.key);
  }), !l && e.jsx("div", { style: { marginBottom: 12 }, children: e.jsx(pe, { reactions: i, currentUserId: C, onReact: w }) }), !l && e.jsxs("div", { style: { borderTop: "1px solid #e0e0e0", paddingTop: 12 }, children: [e.jsxs("div", { style: { fontWeight: 600, fontSize: 13, marginBottom: 8, color: "#444" }, children: ["Comments", m.length > 0 ? ` (${m.length})` : ""] }), m.length === 0 && e.jsx("div", { style: { fontSize: 12, color: "#999", marginBottom: 8 }, children: "No comments yet." }), m.length > 0 && e.jsxs("div", { style: { maxHeight: 180, overflowY: "auto", marginBottom: 8, paddingRight: 4 }, children: [m.map((r) => {
    const B = String(r.content.body ?? "");
    return e.jsxs("div", { style: { marginBottom: 10 }, children: [e.jsxs("div", { style: { display: "flex", alignItems: "baseline", gap: 6, marginBottom: 2 }, children: [e.jsx("span", { style: { fontWeight: 600, fontSize: 12 }, children: se(r.sender) }), e.jsx("span", { style: { color: "#aaa", fontSize: 11 }, children: ce(r.origin_server_ts) })] }), e.jsx("div", { style: { fontSize: 13, whiteSpace: "pre-wrap", wordBreak: "break-word", lineHeight: 1.4 }, children: B })] }, r.event_id ?? r.origin_server_ts);
  }), e.jsx("div", { ref: P })] }), e.jsxs("div", { style: { display: "flex", gap: 6, alignItems: "flex-end" }, children: [e.jsx("div", { style: { flex: 1 }, children: e.jsx("textarea", { value: M, onChange: (r) => o(r.target.value), onKeyDown: X, placeholder: "Add a comment\u2026 (@user:server for mentions, Ctrl+Enter to send)", "aria-label": "Add a comment", rows: 2, style: { ...t.input, resize: "none", fontFamily: "inherit" }, disabled: b }) }), e.jsx("button", { onClick: q, disabled: !M.trim() || b, style: { ...t.btnPrimary, flexShrink: 0, alignSelf: "flex-end" }, children: b ? "\u2026" : "Send" })] }), e.jsx("div", { style: { fontSize: 11, color: "#aaa", marginTop: 3 }, children: "Use @user:server.com to mention someone" })] }), F && e.jsx("div", { style: { color: "#d32f2f", marginTop: 8, fontSize: 13 }, children: F })] }), e.jsxs("div", { style: t.dialogFooter, children: [k && u && e.jsx("button", { onClick: O, disabled: T, style: t.btnDanger, children: "Delete" }), e.jsxs("div", { style: { display: "flex", gap: 8, marginLeft: "auto" }, children: [e.jsx("button", { onClick: h, disabled: T, style: t.btn, children: "Cancel" }), e.jsx("button", { onClick: G, disabled: T, style: t.btnPrimary, children: T ? "Saving\u2026" : "Save" })] })] })] }) });
}
function ge({ issues: n, schema: c, reactionsByIssue: l, commentCountByIssue: k, onEdit: S }) {
  const i = d.useMemo(() => {
    const g = c.fields.find((h) => h.key === "title") ?? c.fields[0], u = c.fields.filter((h) => h !== g).slice(0, 3);
    return g ? [g, ...u] : u;
  }, [c]), [m, C] = d.useState(null);
  return n.length === 0 ? e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 8 }, children: [e.jsx("span", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("span", { style: t.muted, children: "No issues yet" })] }) : e.jsxs("table", { style: t.table, children: [e.jsx("thead", { children: e.jsxs("tr", { children: [i.map((g) => e.jsx("th", { style: t.th, children: g.label }, g.key)), e.jsx("th", { style: { ...t.th, width: 1 }, "aria-label": "Activity" })] }) }), e.jsx("tbody", { children: n.map((g) => e.jsxs("tr", { onMouseEnter: () => C(g.stateKey), onMouseLeave: () => C(null), style: { background: m === g.stateKey ? "#f5f8ff" : void 0 }, children: [i.map((u, h) => e.jsx("td", { style: t.td, children: h === 0 && S ? e.jsx("button", { onClick: () => S(g), style: { background: "none", border: "none", padding: 0, cursor: "pointer", font: "inherit", color: "#1976d2", textDecoration: "underline", textAlign: "left" }, "aria-label": `Open issue: ${String(g.content[u.key] ?? "(untitled)")}`, children: J(u, g.content[u.key]) || e.jsx("span", { style: { color: "#bbb" }, children: "\u2014" }) }) : J(u, g.content[u.key]) || e.jsx("span", { style: { color: "#bbb" }, children: "\u2014" }) }, u.key)), e.jsx("td", { style: { ...t.td, whiteSpace: "nowrap", paddingLeft: 4 }, children: e.jsx(ie, { reactions: l.get(g.stateKey) ?? /* @__PURE__ */ new Map(), commentCount: k.get(g.stateKey) ?? 0 }) })] }, g.stateKey)) })] });
}
function be({ issues: n, schema: c, kanbanField: l, reactionsByIssue: k, commentCountByIssue: S, onEdit: i }) {
  const m = c.fields.find((u) => u.key === "title") ?? c.fields[0], C = c.fields.filter((u) => u !== m && u !== l).slice(0, 2), g = d.useMemo(() => {
    const u = l.values ?? [], h = Object.fromEntries(u.map((f) => [f, []])), w = [];
    for (const f of n) {
      const j = String(f.content[l.key] ?? "");
      j && h[j] ? h[j].push(f) : w.push(f);
    }
    const y = u.map((f) => ({ label: f, issues: h[f] }));
    return w.length > 0 && y.push({ label: "(Unset)", issues: w }), y;
  }, [n, l]);
  return n.length === 0 ? e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 8 }, children: [e.jsx("span", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("span", { style: t.muted, children: "No issues yet" })] }) : e.jsx("div", { style: t.kanbanScroll, children: g.map((u) => e.jsxs("div", { style: t.kanbanCol, children: [e.jsxs("div", { style: t.kanbanColHeader, children: [e.jsx("span", { children: u.label }), e.jsx("span", { style: { color: "#999", fontSize: 12 }, children: u.issues.length })] }), e.jsx("div", { style: t.kanbanColBody, children: u.issues.map((h) => {
    const w = m ? String(h.content[m.key] ?? "") || "(untitled)" : h.stateKey, y = k.get(h.stateKey) ?? /* @__PURE__ */ new Map(), f = S.get(h.stateKey) ?? 0;
    return e.jsxs("div", { style: t.kanbanCard, onClick: () => i == null ? void 0 : i(h), role: i ? "button" : void 0, tabIndex: i ? 0 : void 0, onKeyDown: i ? (j) => {
      (j.key === "Enter" || j.key === " ") && i(h);
    } : void 0, "aria-label": w, children: [e.jsx("div", { style: t.kanbanTitle, children: w }), C.map((j) => {
      const T = J(j, h.content[j.key]);
      return T ? e.jsxs("div", { style: t.kanbanMeta, children: [j.label, ": ", T] }, j.key) : null;
    }), (y.size > 0 || f > 0) && e.jsx("div", { style: { marginTop: 6 }, children: e.jsx(ie, { reactions: y, commentCount: f }) })] }, h.stateKey);
  }) })] }, u.label)) });
}
function ve({ widgetApi: n }) {
  const [c, l] = d.useState(null), [k, S] = d.useState([]), [i, m] = d.useState(false), [C, g] = d.useState(true), [u, h] = d.useState(null), [w, y] = d.useState("list"), [f, j] = d.useState(null), [T, R] = d.useState(false), [F, D] = d.useState([]), [M, o] = d.useState([]), b = d.useMemo(() => new URLSearchParams(window.location.search).get("userId") ?? "", []);
  d.useEffect(() => {
    let s = false;
    async function p() {
      var _a, _b, _c;
      try {
        const [x, a, v, W, $] = await Promise.all([n.readStateEvents("eu.kiefte.issues.schema", 1), n.readStateEvents("eu.kiefte.issue", 1e4), n.readStateEvents("m.room.power_levels", 1), n.readRoomEvents("m.room.message", 2e3).catch(() => []), n.readRoomEvents("m.reaction", 5e3).catch(() => [])]);
        if (s) return;
        const N = (_a = x[0]) == null ? void 0 : _a.content;
        l((N == null ? void 0 : N.fields) ? N : null), S(a.filter((z) => {
          var _a2;
          return z.state_key && !((_a2 = z.content) == null ? void 0 : _a2._deleted);
        }).map((z) => ({ stateKey: z.state_key, eventId: z.event_id ?? "", content: z.content, sender: z.sender, ts: z.origin_server_ts })));
        const V = (_b = v[0]) == null ? void 0 : _b.content;
        if (V && b) {
          const z = ((_c = V.users) == null ? void 0 : _c[b]) ?? V.users_default ?? 0, ae = V.state_default ?? 50;
          m(z >= ae);
        } else m(true);
        D(W.filter((z) => z.content["eu.kiefte.issue_id"])), o($);
      } catch (x) {
        s || h(String(x));
      } finally {
        s || g(false);
      }
    }
    return p(), () => {
      s = true;
    };
  }, [n, b]), d.useEffect(() => {
    const s = `action:${ee.WidgetApiToWidgetAction.SendEvent}`, p = (x) => {
      var _a;
      const a = ((_a = x == null ? void 0 : x.detail) == null ? void 0 : _a.data) ?? x;
      if (a == null ? void 0 : a.type) if (a.type === "eu.kiefte.issues.schema") {
        const v = a.content;
        (v == null ? void 0 : v.fields) && l(v);
      } else if (a.type === "eu.kiefte.issue" && a.state_key) {
        const v = a.content;
        (v == null ? void 0 : v._deleted) ? S((W) => W.filter(($) => $.stateKey !== a.state_key)) : S((W) => [...W.filter((N) => N.stateKey !== a.state_key), { stateKey: a.state_key, eventId: a.event_id ?? "", content: v, sender: a.sender, ts: a.origin_server_ts }]);
      } else a.type === "m.reaction" ? o((v) => [...a.event_id ? v.filter(($) => $.event_id !== a.event_id) : v, a]) : a.type === "m.room.message" && a.content["eu.kiefte.issue_id"] && D((v) => [...a.event_id ? v.filter(($) => $.event_id !== a.event_id) : v, a]);
    };
    return n.on(s, p), () => {
      n.off(s, p);
    };
  }, [n]);
  const K = d.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const p of k) p.eventId && s.set(p.eventId, p.stateKey);
    return s;
  }, [k]), E = d.useMemo(() => {
    var _a;
    const s = /* @__PURE__ */ new Map();
    for (const p of M) {
      const x = (_a = p.content) == null ? void 0 : _a["m.relates_to"];
      if ((x == null ? void 0 : x.rel_type) !== "m.annotation" || !x.event_id || !x.key) continue;
      const a = K.get(x.event_id);
      if (!a) continue;
      s.has(a) || s.set(a, /* @__PURE__ */ new Map());
      const v = s.get(a);
      v.has(x.key) || v.set(x.key, /* @__PURE__ */ new Set()), v.get(x.key).add(p.sender);
    }
    return s;
  }, [M, K]), P = d.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const p of F) {
      const x = p.content["eu.kiefte.issue_id"];
      x && s.set(x, (s.get(x) ?? 0) + 1);
    }
    return s;
  }, [F]), G = d.useMemo(() => {
    const s = f !== null && f !== "new" ? f.stateKey : null;
    return s ? F.filter((p) => p.content["eu.kiefte.issue_id"] === s).sort((p, x) => p.origin_server_ts - x.origin_server_ts) : [];
  }, [F, f]), O = d.useCallback(async (s, p) => {
    S((x) => [...x.filter((v) => v.stateKey !== s), { stateKey: s, eventId: "", content: p, sender: b, ts: Date.now() }]), j(null), await n.sendStateEvent("eu.kiefte.issue", s, p);
  }, [n, b]), q = d.useCallback(async (s) => {
    S((p) => p.filter((x) => x.stateKey !== s)), j(null), await n.sendStateEvent("eu.kiefte.issue", s, { _deleted: true });
  }, [n]), U = d.useCallback(async (s) => {
    l(s), R(false), await n.sendStateEvent("eu.kiefte.issues.schema", "", s);
  }, [n]), X = d.useCallback(async (s, p) => {
    const x = ue(p), a = { msgtype: "m.text", body: p, "eu.kiefte.issue_id": s };
    x.length > 0 && (a["m.mentions"] = { user_ids: x });
    const v = { event_id: `local-${Date.now()}`, type: "m.room.message", sender: b, origin_server_ts: Date.now(), content: a };
    D((W) => [...W, v]), await n.sendRoomEvent("m.room.message", a);
  }, [n, b]), r = d.useCallback(async (s, p) => {
    const x = k.find((v) => v.stateKey === s);
    if (!(x == null ? void 0 : x.eventId)) return;
    const a = { "m.relates_to": { rel_type: "m.annotation", event_id: x.eventId, key: p } };
    await n.sendRoomEvent("m.reaction", a);
  }, [n, k]), B = d.useMemo(() => k.filter((s) => !s.content._deleted).sort((s, p) => p.ts - s.ts), [k]), A = f !== null && f !== "new" ? f : null, L = (A == null ? void 0 : A.content) ?? {}, _ = (A == null ? void 0 : A.stateKey) ?? null;
  if (C) return e.jsx("div", { style: t.centered, children: "Loading\u2026" });
  if (u) return e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 12, padding: 24, textAlign: "center" }, children: [e.jsx("div", { style: { color: "#d32f2f" }, children: "Failed to load issues" }), e.jsx("div", { style: { ...t.muted, fontSize: 12, maxWidth: 320, wordBreak: "break-all" }, children: u }), e.jsx("div", { style: t.muted, children: "Make sure this client supports MSC2762 widget state event capabilities." })] });
  if (!c) return i ? e.jsx(Z, { initial: de, titleText: "Initialize Issue Tracker", onSave: U, onCancel: () => {
  } }) : e.jsxs("div", { style: { ...t.centered, flexDirection: "column", gap: 8, padding: 24, textAlign: "center" }, children: [e.jsx("span", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("div", { style: { fontWeight: 600 }, children: "Issue Tracker Not Set Up" }), e.jsx("div", { style: t.muted, children: "Ask a room admin to initialize the issue tracker." })] });
  const H = c, Q = H.fields.find((s) => s.kanban_group && s.type === "enum");
  return e.jsxs("div", { style: t.container, children: [e.jsxs("div", { style: t.toolbar, role: "toolbar", "aria-label": "Issue tracker controls", children: [e.jsxs("span", { style: t.muted, children: [B.length, " ", B.length === 1 ? "issue" : "issues"] }), e.jsxs("div", { style: { display: "flex", gap: 6, alignItems: "center", marginLeft: "auto", flexWrap: "wrap" }, children: [Q && e.jsxs(e.Fragment, { children: [e.jsx("button", { onClick: () => y("list"), style: w === "list" ? t.btnActive : t.btn, "aria-pressed": w === "list", children: "List" }), e.jsx("button", { onClick: () => y("kanban"), style: w === "kanban" ? t.btnActive : t.btn, "aria-pressed": w === "kanban", children: "Kanban" })] }), i && e.jsx("button", { onClick: () => R(true), style: t.btn, "aria-label": "Edit issue tracker schema", children: "\u2699 Schema" }), i && e.jsx("button", { onClick: () => j("new"), style: t.btnPrimary, "aria-label": "New issue", "aria-keyshortcuts": "n", children: "+ New Issue" })] })] }), e.jsx("div", { style: t.content, children: w === "kanban" && Q ? e.jsx(be, { issues: B, schema: H, kanbanField: Q, reactionsByIssue: E, commentCountByIssue: P, onEdit: i ? j : void 0 }) : e.jsx(ge, { issues: B, schema: H, reactionsByIssue: E, commentCountByIssue: P, onEdit: i ? j : void 0 }) }), f !== null && e.jsx(me, { schema: H, initial: L, isNew: f === "new", canDelete: i && f !== "new", issueKey: _, reactions: E.get(_ ?? "") ?? /* @__PURE__ */ new Map(), comments: G, currentUserId: b, onSave: async (s) => {
    const p = _ ?? ne();
    await O(p, s);
  }, onDelete: _ ? () => q(_) : void 0, onCancel: () => j(null), onReact: (s) => {
    _ && r(_, s);
  }, onComment: async (s) => {
    _ && await X(_, s);
  } }), T && e.jsx(Z, { initial: H, onSave: U, onCancel: () => R(false) })] });
}
const oe = new URLSearchParams(window.location.search), ke = oe.get("widgetId") ?? void 0, re = oe.get("parentUrl") ?? void 0, I = new ee.WidgetApi(ke, re);
I.requestCapabilityToReceiveState("eu.kiefte.issue");
I.requestCapabilityToReceiveState("eu.kiefte.issues.schema");
I.requestCapabilityToSendState("eu.kiefte.issue");
I.requestCapabilityToSendState("eu.kiefte.issues.schema");
I.requestCapabilityToReceiveState("m.room.power_levels");
I.requestCapabilityToReceiveEvent("m.room.message");
I.requestCapabilityToSendEvent("m.room.message");
I.requestCapabilityToReceiveEvent("m.reaction");
I.requestCapabilityToSendEvent("m.reaction");
I.start();
I.sendContentLoaded();
let le = false;
I.once("ready", () => {
  le = true, te(document.getElementById("widget-root")).render(e.jsx(ve, { widgetApi: I }));
});
setTimeout(() => {
  if (le) return;
  const n = window.parent !== window, c = !!re;
  te(document.getElementById("widget-root")).render(e.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: 16, padding: 24, textAlign: "center", fontFamily: "system-ui, sans-serif", color: "#444" }, children: [e.jsx("div", { style: { fontSize: 32 }, children: "\u{1F4CB}" }), e.jsx("div", { style: { fontWeight: 600, fontSize: 18 }, children: "Matrix Issue Tracker Widget" }), n && !c && e.jsx("div", { style: { maxWidth: 520, color: "#c62828", lineHeight: 1.6, fontSize: 14 }, children: "The widget API is not active. This widget was embedded as a plain iframe \u2014 it must be registered as a room state event to work (see below)." }), e.jsxs("div", { style: { maxWidth: 520, color: "#555", fontSize: 13, lineHeight: 1.7, textAlign: "left" }, children: [e.jsx("p", { style: { marginBottom: 8 }, children: "Send the following state event in the room where you want the widget. Any Matrix client with developer tools works (Gomuks, Element Web, etc.)." }), e.jsx("pre", { style: { background: "#f5f5f5", padding: "10px 14px", borderRadius: 4, fontSize: 12, overflowX: "auto", margin: 0 }, children: `Event type:  im.vector.modular.widgets
State key:   eu.kiefte.issue-tracker
Content:
{
  "type": "m.custom",
  "url": "${window.location.origin + window.location.pathname}?roomId=$matrix_room_id&userId=$matrix_user_id",
  "name": "Issue Tracker",
  "id": "eu.kiefte.issue-tracker"
}` }), e.jsxs("p", { style: { marginTop: 10, color: "#777" }, children: [e.jsx("strong", { children: "Gomuks:" }), ' open Developer Tools (\u22EE menu \u2192 Developer tools), go to "Send custom event", set type to ', e.jsx("code", { children: "im.vector.modular.widgets" }), ", state key to ", e.jsx("code", { children: "eu.kiefte.issue-tracker" }), ", paste the content above."] }), e.jsxs("p", { style: { marginTop: 6, color: "#777" }, children: [e.jsx("strong", { children: "Element Web:" }), " use the ", e.jsx("code", { children: "/addwidget" }), " slash command in the room chat:"] }), e.jsx("pre", { style: { background: "#f5f5f5", padding: "6px 14px", borderRadius: 4, fontSize: 12, overflowX: "auto", margin: "4px 0" }, children: `/addwidget ${window.location.origin + window.location.pathname}?roomId=$matrix_room_id&userId=$matrix_user_id` }), e.jsxs("p", { style: { marginTop: 4, color: "#999", fontSize: 12 }, children: ["Or use the", " ", e.jsx("a", { href: "https://codeberg.org/lapingvino/cinny", style: { color: "#1976d2" }, children: "cinny fork" }), `'s built-in "Enable widget" button in the issue board toolbar. Also see`, " ", e.jsx("a", { href: "https://github.com/lapingvino/matrix-issue-widget", style: { color: "#1976d2" }, children: "matrix-issue-widget on GitHub" }), "."] })] })] }));
}, 4e3);
