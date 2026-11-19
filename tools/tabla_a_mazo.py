#!/usr/bin/env python3
"""Convierte una tabla de tarjetas (por ejemplo, generada con NotebookLM) en submazos de Anki Pro.

Columnas esperadas: Capítulo | Tema | Tipo | Pregunta | Respuesta | Explicación | Página
Acepta .xlsx, .csv o .txt/.md con una tabla separada por « | ». En las tablas de texto, la
Respuesta puede contener « | » para separar elementos de una lista: se toman como Respuesta
todas las celdas entre la Pregunta y las dos últimas columnas.

Uso:
  python3 tools/tabla_a_mazo.py tabla.txt config.json
config.json:
  {"group": "...", "groupId": "carlucci", "groupSub": "...", "archivo": "carlucci",
   "idp": "c", "head": "Balística interior", "theme": "admin",
   "capitulos": {"1": "Conceptos introductorios", ...}}
Escribe mazos/<archivo>_capNN.js (uno por capítulo) y muestra la lista de archivos creados.
"""
import csv, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TIPOS = {"Regla", "Dato", "Condición", "Excepción", "Facultad", "Prohibición", "Definición", "Distinción", "Caso"}


def filas(path):
    ext = os.path.splitext(path)[1].lower()
    if ext == ".xlsx":
        import openpyxl
        ws = openpyxl.load_workbook(path, data_only=True).active
        rows = [[("" if c is None else str(c)).strip() for c in r] for r in ws.iter_rows(values_only=True)]
    elif ext == ".csv":
        with open(path, encoding="utf-8-sig") as f:
            rows = [[c.strip() for c in r] for r in csv.reader(f)]
    else:
        rows = []
        for line in open(path, encoding="utf-8-sig"):
            line = line.strip()
            if "|" not in line or re.fullmatch(r"[\s|:-]+", line):
                continue
            rows.append([c.strip() for c in line.strip("|").split("|")])
    out = []
    for r in rows:
        if not r or not r[0] or r[0].lower().startswith("cap"):
            continue
        if len(r) < 7:
            print("Fila incompleta, se omite:", r, file=sys.stderr); continue
        out.append({"cap": r[0], "tema": r[1], "tipo": r[2], "q": r[3],
                    "partes": [p for p in r[4:-2] if p], "expl": r[-2], "pag": r[-1]})
    return out


def html(t):
    t = t.replace('"', "«", 1).replace('"', "»", 1) if t.count('"') == 2 else t.replace('"', "”")
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\w*])\*([^*]+?)\*(?![\w*])", r"<em>\1</em>", t)
    return t


def respuesta(f):
    p = [html(x) for x in f["partes"]]
    if len(p) == 1:
        return p[0]
    if f["tipo"] == "Distinción" or len(p) == 2:
        return "<br>".join(p)
    return "<ul>" + "".join(f"<li>{x.rstrip('.')}</li>" for x in p) + "</ul>"


def pregunta(f):
    q = f["q"]
    tema_sin_num = re.sub(r"^[\w.]+\s*·\s*", "", f["tema"]).strip()
    m = re.match(r"^\s*[\w.]+\s*·\s*([^:]+):\s*(.*)$", q)  # prefijo «1.1 · Tema: …»
    if m:
        resto = m.group(2)
        # si ya empieza con «X e Y: ¿…», el prefijo sobra
        q = resto if re.match(r"^[^¿]{3,}:\s*¿", resto) else f"{m.group(1).strip()}: {resto}"
    if q[:1].islower():
        q = q[0].upper() + q[1:]
    return html(q)


def js(s):
    return json.dumps(s, ensure_ascii=False)


def main():
    path, cfg = sys.argv[1], json.load(open(sys.argv[2], encoding="utf-8"))
    por_cap = {}
    for f in filas(path):
        por_cap.setdefault(int(re.sub(r"\D", "", f["cap"])), []).append(f)
    creados = []
    for cap, fs in sorted(por_cap.items()):
        temas = []
        for f in fs:
            if f["tema"] not in temas:
                temas.append(f["tema"])
        nombre = cfg["capitulos"].get(str(cap), f"Capítulo {cap}")
        pags = [p for f in fs for p in re.findall(r"\d+", f["pag"])]
        rango = f"{min(map(int, pags))}–{max(map(int, pags))}" if pags else ""
        lineas = []
        for f in fs:
            tipo = f["tipo"] if f["tipo"] in TIPOS else "Dato"
            pag = f["pag"].replace("-", "–")
            pgv = pag if re.fullmatch(r"\d+", pag) else js(pag)
            lineas.append(f"add(T{temas.index(f['tema'])+1},{js(tipo)},{js(pregunta(f))},{js(respuesta(f))},{js(html(f['expl']))}+pg({pgv}));")
        tdecl = ", ".join(f"T{i+1} = {js(t)}" for i, t in enumerate(temas))
        fn = f"mazos/{cfg['archivo']}_cap{cap:02d}.js"
        src = f"""/* {cfg['group']} — Capítulo {cap}: {nombre}. Generado con tools/tabla_a_mazo.py. */
(function () {{
const {{ fm, pg, flujo, grupos, tabla }} = window.ADM;
const {tdecl};

(window.DECKS = window.DECKS || []).push({{
id: {js(cfg['groupId'] + f'{cap:02d}')}, idp: {js(cfg['idp'] + str(cap) + ':')}, kind: "temas", theme: {js(cfg.get('theme', 'admin'))},
group: {js(cfg['group'])}, groupId: {js(cfg['groupId'])}, groupSub: {js(cfg['groupSub'])},
title: {js(f'{cap:02d} · {nombre}')},
sub: {js(f'Capítulo {cap} · Libro, pp. {rango}')},
head: {js(f"{cfg['head']} · Cap. {cap} · {nombre}")},
build(add){{
{chr(10).join(lineas)}
}}
}});
}})();
"""
        open(os.path.join(ROOT, fn), "w", encoding="utf-8").write(src)
        creados.append((fn, len(fs)))
    for fn, n in creados:
        print(fn, n)


if __name__ == "__main__":
    main()
