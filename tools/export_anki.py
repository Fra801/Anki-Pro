"""Genera un mazo de Anki (.apkg) por cada mazo de Anki Pro, con el mismo diseño de la app.

Uso (desde la raíz del repositorio):
    pip install genanki
    python3 tools/export_anki.py

Deja los archivos en anki/<id>.apkg. Hay que volver a correrlo cada vez que se agregan
o corrigen tarjetas. Los identificadores de las notas son estables: si el usuario importa
de nuevo un .apkg actualizado, Anki actualiza el texto y conserva lo estudiado.
"""
import functools, json, os, re, subprocess, sys, zlib
import genanki

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONTS = os.path.join(ROOT, "tools", "anki_fuentes")
OUT = os.path.join(ROOT, "anki")

# Identificador fijo del modelo de nota: no cambiarlo, o Anki duplicaría las notas.
MODEL_ID = 1731940000
FONT_FILES = {
    "_ap-fraunces-500.woff2": "fraunces-latin-500-normal.woff2",
    "_ap-fraunces-700.woff2": "fraunces-latin-700-normal.woff2",
    "_ap-inter-400.woff2": "inter-latin-400-normal.woff2",
    "_ap-inter-500.woff2": "inter-latin-500-normal.woff2",
    "_ap-inter-600.woff2": "inter-latin-600-normal.woff2",
}

# Mismos colores, tipografías y medidas que index.html
CSS = """
@font-face{font-family:"AP Fraunces";font-weight:500;src:url("_ap-fraunces-500.woff2") format("woff2")}
@font-face{font-family:"AP Fraunces";font-weight:700;src:url("_ap-fraunces-700.woff2") format("woff2")}
@font-face{font-family:"AP Inter";font-weight:400;src:url("_ap-inter-400.woff2") format("woff2")}
@font-face{font-family:"AP Inter";font-weight:500;src:url("_ap-inter-500.woff2") format("woff2")}
@font-face{font-family:"AP Inter";font-weight:600;src:url("_ap-inter-600.woff2") format("woff2")}
.card{
  --bg:#f5f1ea;--card:#fffdf9;--ink:#1e1b16;--mute:#6f675b;--line:#e3dbcd;--accent:#b4552d;
  background:var(--bg);color:var(--ink);text-align:left;margin:0;padding:0;
  font-family:"AP Inter",Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  font-size:16px;line-height:1.5;-webkit-font-smoothing:antialiased;
}
.card.nightMode,.nightMode .card,.card.night_mode,.night_mode .card{
  --bg:#16140f;--card:#211e18;--ink:#f1ebe0;--mute:#a59c8c;--line:#38332a;--accent:#e07a4b;
}
.ap{max-width:640px;margin:0 auto;padding:18px 16px 28px}
.ap-head{font-weight:500;font-size:.8rem;color:var(--mute);letter-spacing:.06em;text-transform:uppercase;line-height:1.3;margin:0 0 14px}
.ap-card{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:22px 20px;box-shadow:0 1px 0 rgba(0,0,0,.03),0 8px 24px -16px rgba(0,0,0,.25)}
.q{font-family:"AP Fraunces",Fraunces,Georgia,serif;font-weight:500;font-size:1.3rem;line-height:1.35;margin:0 0 4px;color:var(--ink)}
.a{border-top:1px dashed var(--line);margin-top:18px;padding-top:16px;font-size:1.02rem}
.a strong,.a b{color:var(--accent);font-weight:600}
.a ul{margin:6px 0;padding-left:20px}
details{margin-top:14px;font-size:.88rem;color:var(--mute)}
details summary{cursor:pointer;font-weight:500}
details .det{background:var(--bg);border-radius:10px;padding:10px 12px;margin:8px 0 0}
details .det > b:first-child{color:var(--mute);font-weight:600}
"""

FRONT = """<div class="ap"><div class="ap-head">{{Encabezado}}</div>
<div class="ap-card"><p class="q">{{Pregunta}}</p></div></div>"""

BACK = """<div class="ap"><div class="ap-head">{{Encabezado}}</div>
<div class="ap-card"><p class="q">{{Pregunta}}</p>
<div class="a" id="answer">{{Respuesta}}</div>
{{#Detalle}}<details><summary>{{Rotulo}}</summary><div class="det">{{Detalle}}</div></details>{{/Detalle}}
</div></div>"""

FIELDS = [{"name": n} for n in ["Pregunta", "Respuesta", "Detalle", "Rotulo", "Encabezado", "Grupo", "Tipo", "ID"]]
MODEL = genanki.Model(
    MODEL_ID, "Anki Pro",
    fields=FIELDS,
    templates=[{"name": "Tarjeta", "qfmt": FRONT, "afmt": BACK}],
    css=CSS, sort_field_index=0,
)

# Mazos con tema visual propio (por ejemplo "contable"): misma plantilla dentro de un contenedor
# con la clase del tema, y el CSS de estilos/<tema>.css. Cada tema tiene su propio tipo de nota,
# con un identificador fijo que no debe cambiarse.
THEME_IDS = {"contable": 1731940101}


@functools.lru_cache(maxsize=None)
def theme_model(theme):
    with open(os.path.join(ROOT, "estilos", theme + ".css"), encoding="utf-8") as f:
        extra = f.read()
    wrap = lambda t: t.replace('<div class="ap">', f'<div class="ap th-{theme}">')
    return genanki.Model(
        THEME_IDS[theme], f"Anki Pro · {theme.capitalize()}",
        fields=FIELDS,
        templates=[{"name": "Tarjeta", "qfmt": wrap(FRONT), "afmt": wrap(BACK)}],
        css=CSS + "\n" + extra, sort_field_index=0,
    )


class Nota(genanki.Note):
    @property
    def guid(self):
        return genanki.guid_for(self.fields[7])  # el ID de la tarjeta en Anki Pro


def tag(s):
    return re.sub(r"[^\w-]+", "_", s, flags=re.UNICODE).strip("_")


def main():
    data = json.loads(subprocess.check_output(["node", os.path.join(ROOT, "tools", "dump_cards.js")]))
    os.makedirs(OUT, exist_ok=True)
    media = []
    for dst, src in FONT_FILES.items():
        p = os.path.join(OUT, dst)
        with open(os.path.join(FONTS, src), "rb") as fi, open(p, "wb") as fo:
            fo.write(fi.read())
        media.append(p)
    groups = {}
    for d in data:
        name = "Anki Pro::" + (d["group"] + "::" if d["group"] else "") + d["title"]
        deck = genanki.Deck(zlib.crc32(("anki-pro:" + d["id"]).encode()) & 0x7FFFFFFF, name)
        for c in d["cards"]:
            deck.add_note(Nota(model=theme_model(d["theme"]) if d["theme"] else MODEL, fields=[
                c["pregunta"], c["respuesta"], c["detalle"], c["rotulo"], d["head"], c["grupo"], c["tipo"], c["id"],
            ], tags=[tag(c["grupo"]), tag(c["tipo"])]))
        pkg = genanki.Package(deck)
        pkg.media_files = media
        dest = os.path.join(OUT, d["id"] + ".apkg")
        pkg.write_to_file(dest)
        print(f"{dest}: {len(d['cards'])} tarjetas")
        if d["groupId"]:
            groups.setdefault(d["groupId"], []).append(deck)
    # Un archivo por mazo con submazos (por ejemplo, el libro completo), con los submazos anidados
    for gid, decks in groups.items():
        pkg = genanki.Package(decks)
        pkg.media_files = media
        dest = os.path.join(OUT, gid + ".apkg")
        pkg.write_to_file(dest)
        print(f"{dest}: {sum(len(x.notes) for x in decks)} tarjetas en {len(decks)} submazos")
    for p in media:
        os.remove(p)


if __name__ == "__main__":
    sys.exit(main())
