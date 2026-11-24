// Vuelca todas las tarjetas de los mazos a JSON, con el desplegable ya armado
// usando la misma función artDetail de la app (index.html), para que en Anki
// se vea exactamente lo mismo.
// Uso: node tools/dump_cards.js > cartas.json
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

// Mazos en el mismo orden en que los carga la app
global.window = {};
const scripts = [...html.matchAll(/<script src="(mazos\/[^"]+\.js)"><\/script>/g)].map(m => m[1]);
for (const s of scripts) require(path.join(root, s));

// Funciones del desplegable, tomadas de la app
const main = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const start = main.indexOf("const INC_START"), end = main.indexOf("/* =====", start);
const fnSrc = main.slice(start, end).replace(/\bconst\b/g, "var");
const lib = new Function(fnSrc + "; return { artDetail, vocabCard };")();

const out = [];
for (const d of window.DECKS) {
  if (d.kind === "vocab") {
    // Tarjetas de vocabulario: el frente y el dorso se arman con la misma función de la app (vocabCard).
    const per = {}, raw = [], cards = [];
    d.build((a, v) => { per[a] = (per[a] || 0) + 1; raw.push({ id: d.idp + a + "-" + per[a], a, v }); });
    raw.forEach((c, i) => {
      c.no = i + 1; c.total = raw.length;
      cards.push({
        id: c.id, grupo: String(c.a), tipo: c.v.tipo || "Término", termino: c.v.t, traduccion: c.v.es,
        decir: c.v.say || c.v.t.replace(/…|\.\.\./g, ""),
        frente: lib.vocabCard(d, c, { anki: true }), dorso: lib.vocabCard(d, c, { anki: true, back: true }),
      });
    });
    out.push({ id: d.id, title: d.title, head: d.head || d.title, kind: "vocab", group: d.group || "", groupId: d.groupId || "", part: d.part || "", partId: d.partId || "", theme: d.theme || "", cards });
    continue;
  }
  const temas = d.kind === "temas", per = {}, cards = [];
  d.build((a, k, q, ans, x) => {
    per[a] = (per[a] || 0) + 1;
    const c = { id: d.idp + a + "-" + per[a], a, k, q, ans, inc: temas ? "" : (x || ""), expl: temas ? (x || "") : "" };
    const detail = lib.artDetail(d, c) || "";
    cards.push({
      id: c.id, grupo: temas ? String(a) : "Art. " + a, tipo: k, pregunta: q, respuesta: ans,
      rotulo: temas ? "Explicación" : "Ver texto del artículo",
      detalle: detail.replace(/\n/g, "<br>"),
    });
  });
  out.push({ id: d.id, title: d.title, head: d.head || d.title, kind: d.kind || "normas", group: d.group || "", groupId: d.groupId || "", part: d.part || "", partId: d.partId || "", theme: d.theme || "", cards });
}
process.stdout.write(JSON.stringify(out));
