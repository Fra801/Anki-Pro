// Revisa los mazos contra las reglas de CLAUDE.md.
// Uso: node tools/check_mazos.js            (todos los mazos)
//      node tools/check_mazos.js rensa      (sólo uno, por nombre de archivo)
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
const ids = new Set();
for (const d of window.DECKS) {
  const cards = [], per = {};
  d.build((a, k, q, ans, inc) => { per[a] = (per[a] || 0) + 1; cards.push({ a, k, q, ans, inc, id: d.idp + a + "-" + per[a] }); });
  const warn = (c, msg) => { problems++; console.log(`  [${d.id}] Art. ${c.a} — ${msg}\n      ${strip(c.q)}`); };
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
