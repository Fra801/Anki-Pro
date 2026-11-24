// Revisa los mazos contra las reglas de CLAUDE.md.
// Uso: node tools/check_mazos.js            (todos los mazos)
//      node tools/check_mazos.js rnsa       (sólo uno, por nombre de archivo)
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "..", "mazos");
const only = process.argv[2];
global.window = {};
for (const f of fs.readdirSync(dir).filter(f => f.endsWith(".js"))) {
  if (!only || f === only + ".js") require(path.join(dir, f));
}

const INC_START = /^\s*([a-z]\)|\d+\s*[-)])/;
function incisoOk(text, key) {
  const mk = new RegExp("^\\s*" + key + "\\s*[-)]");
  return text.split("\n").some(l => INC_START.test(l) && mk.test(l));
}
const strip = s => s.replace(/<[^>]+>/g, "");
const REF = /\b(es[ea]s?|dich[oa]s?|aquél|aquel)\s+(actuaci|prórroga|plazo|recurso|solicitud|comunicaci|elevaci|reserva|diligencia|salientes?|balcones|cerramiento|locales|informaciones|trámites|inspecci|demolici|caño|licencia|obra|funcionarios|parientes)/i;

let total = 0, problems = 0;
const ids = new Set(), vocabSeen = new Map();
for (const d of window.DECKS) {
  const cards = [], per = {};
  if (d.kind === "vocab") {
    // Diccionario: cada término (mismo nombre y misma ubicación) aparece una sola vez en todos los mazos de vocabulario.
    const vw = (tema, msg, t) => { problems++; console.log(`  [${d.id}] ${tema} — ${msg}\n      ${t}`); };
    const vcards = [];
    d.build((a, v) => { per[a] = (per[a] || 0) + 1; vcards.push({ a, v, id: d.idp + a + "-" + per[a] }); });
    console.log(`${d.title}: ${vcards.length} términos, ${Object.keys(per).length} temas`);
    for (const { a, v, id } of vcards) {
      if (ids.has(id)) vw(a, "identificador repetido (revisar idp)", v.t);
      ids.add(id);
      for (const f of ["t", "p", "es", "fn", "loc", "arq"]) if (!v[f] || !String(v[f]).trim()) vw(a, `falta el campo «${f}»`, v.t || "?");
      for (const f of Object.keys(v)) if (!["t", "p", "es", "fn", "loc", "arq", "key", "tip", "tipo", "say"].includes(f)) vw(a, `campo desconocido «${f}»`, v.t);
      if (/"/.test(Object.values(v).join(" "))) vw(a, "tiene comillas dobles; usar “ ”", v.t);
      if (/[<>]/.test(v.t + v.p + (v.key || "") + v.loc)) vw(a, "el término, la pronunciación, el atajo o la ubicación no llevan HTML", v.t);
      if (v.key && !/^[^+]+(\+[^+]+)*( \/ [^+]+(\+[^+]+)*)*$/.test(v.key)) vw(a, "atajo mal escrito (usar Ctrl+S, alternativas con « / »)", v.t);
      if (v.loc.split(" | ").some(r => /›\S|\S›/.test(r))) vw(a, "la ubicación separa los tramos con « › »", v.t);
      // Una misma ruta de menú no puede tener dos fichas (las rutas que son solo una aclaración entre paréntesis no cuentan).
      for (const r of v.loc.split(" | ")) {
        if (r.startsWith("(")) continue;
        const k = r.replace(/\.\.\.|…/g, "").trim().toLowerCase();
        if (vocabSeen.has(k)) vw(a, `ruta repetida: ${r} (ya tiene ficha en ${vocabSeen.get(k)})`, v.t);
        vocabSeen.set(k, d.id + " · " + v.t);
      }
      if (strip(v.fn).length < 40) vw(a, "la función es demasiado corta", v.t);
      if (strip(v.arq).length < 40) vw(a, "el uso arquitectónico es demasiado corto", v.t);
    }
    total += vcards.length;
    continue;
  }
  const temas = d.kind === "temas";
  d.build((a, k, q, ans, x) => { per[a] = (per[a] || 0) + 1; cards.push({ a, k, q, ans, inc: temas ? "" : x, expl: temas ? x : "", id: d.idp + a + "-" + per[a] }); });
  const warn = (c, msg) => { problems++; console.log(`  [${d.id}] Art. ${c.a} — ${msg}\n      ${strip(c.q)}`); };
  const warnT = (c, msg) => { problems++; console.log(`  [${d.id}] ${c.a} — ${msg}\n      ${strip(c.q)}`); };
  if (temas) {
    console.log(`${d.title}: ${cards.length} tarjetas, ${Object.keys(per).length} temas`);
    for (const c of cards) {
      if (ids.has(c.id)) warnT(c, "identificador repetido (revisar idp)");
      ids.add(c.id);
      if (!c.expl || strip(c.expl).length < 20) warnT(c, "falta la explicación (quinto dato)");
      if (/^\s*(sí|no)\s*([.,:;!]|$)|^\s*sí\s/i.test(strip(c.ans))) warnT(c, "respuesta de sí o no");
      if (/^(¿)?\s*(es|son|está|están|puede|pueden|corresponde|cumple|hay|se admite)\b/i.test(strip(c.q))) warnT(c, "pregunta cerrada (se responde con sí o no)");
      if (REF.test(strip(c.q))) warnT(c, "parece depender de otra tarjeta (esa/ese/dicho…)");
      if (/"/.test(c.q + c.ans + c.expl)) warnT(c, "tiene comillas dobles; usar “ ”");
    }
    total += cards.length;
    continue;
  }
  console.log(`${d.title}: ${cards.length} tarjetas, ${Object.keys(d.arts).length} artículos`);
  for (const n of Object.keys(d.arts)) if (!per[n]) { problems++; console.log(`  [${d.id}] Art. ${n} — sin tarjetas`); }
  for (const c of cards) {
    if (ids.has(c.id)) warn(c, "identificador repetido (revisar idp)");
    ids.add(c.id);
    if (!d.arts[c.a]) warn(c, "la tarjeta apunta a un artículo sin texto");
    if (/^\s*(sí|no)\s*([.,:;!]|$)|^\s*sí\s/i.test(strip(c.ans))) warn(c, "respuesta de sí o no");
    if (/^(¿)?\s*(es|son|está|están|puede|pueden|corresponde|cumple|hay|se admite)\b/i.test(strip(c.q))) warn(c, "pregunta cerrada (se responde con sí o no)");
    if (/\binc(iso)?s?\.?\s*[a-z0-9]\)?\s*[:)]/i.test(strip(c.q).slice(0, 12)) || /\(inc\.\s*[a-z0-9]\)?\)/i.test(c.ans)) warn(c, "nombra el inciso; va como quinto dato");
    if (/\b(según|del|el|en el) Art\. ?\d+\??$|^¿Qué (exige|dispone|establece|prohíbe) el Art\./i.test(strip(c.q))) warn(c, "usa el número de artículo en lugar del tema");
    if (REF.test(strip(c.q))) warn(c, "parece depender de otra tarjeta (esa/ese/dicho…)");
    if (c.inc) for (const key of c.inc.split(",")) if (!incisoOk(d.arts[c.a] || "", key)) warn(c, `no encuentra el inciso «${key}» en el texto del artículo`);
  }
  total += cards.length;
}
console.log(`\n${total} tarjetas revisadas · ${problems ? problems + " posibles problemas" : "sin problemas"}`);
process.exitCode = problems ? 1 : 0;
