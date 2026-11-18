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
const lib = new Function(fnSrc + "; return { artDetail };")();

const out = [];
for (const d of window.DECKS) {
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
  out.push({ id: d.id, title: d.title, head: d.head || d.title, kind: d.kind || "normas", group: d.group || "", groupId: d.groupId || "", theme: d.theme || "", cards });
}
process.stdout.write(JSON.stringify(out));
