# Anki Pro — instrucciones para armar mazos

App de tarjetas con repetición espaciada para estudiar leyes, decretos y reglamentos. Cada norma es un mazo en `mazos/<nombre>.js`. Estas reglas salen de las correcciones del usuario: aplicarlas siempre, sin que haga falta repetirlas.

## Cómo pide un mazo nuevo el usuario

Adjunta el PDF y dice algo como: «Agregá a Anki Pro esta ley. Artículos 1 a 30 (o "toda"). Nombre del mazo: …». Para el nombre visible del mazo y las siglas, usar las que da el usuario o la norma (por ejemplo, **R.N.S.A.** = Reglamento de Normas para los Sumarios Administrativos); no inventar siglas. Si no aclara artículos, se toma desde el Art. 1 del articulado hasta el final (sin los artículos del decreto aprobatorio ni el «Regístrese, comuníquese…»).

## Texto de los artículos (`arts`)

- Fiel al PDF, **con sus errores de tipeo incluidos**. No corregir ni completar.
- Extraerlo con un script desde `pdftotext -layout` (no copiarlo a mano): quitar encabezados y pies de página, unir las líneas cortadas y dejar cada inciso en su propia línea (`a) …`, `1) …`, `1- …`, `1 - …`).
- Si el texto tiene una contradicción interna o un error evidente, se deja como está y se le avisa al usuario en el mensaje final.

## Tarjetas (`build`)

Formato: `add(artículo, "Tipo", "Pregunta", "Respuesta", "inciso")`. El quinto dato es opcional.

1. **Una tarjeta por núcleo funcional.** Tantas tarjetas como núcleos tenga el artículo: regla, dato o medida, condición, excepción, facultad, prohibición, definición. Todos los artículos con contenido deben tener al menos una.
2. **Las excepciones y los «salvo que» van en tarjetas propias.**
3. **Casos prácticos** donde haya números, plazos, topes o fórmulas (por ejemplo, «45 días fraccionados: ¿qué tope se aplica y qué consecuencia tiene?»). También tarjetas de **distinción** entre conceptos que se confunden (grave/gravísima, sumario/información, plazos parecidos).
4. **Nunca respuestas de sí o no.** La pregunta tiene que ser abierta (qué, cuál, cuándo, quién, cuánto, por qué, qué efecto tiene, qué le falta, qué regla incumple). La respuesta no contesta con un «Sí» o un «No» (sí puede empezar con «Si…» condicional o con una frase como «No se computa…»).
5. **Cada pregunta se entiende sola.** Las tarjetas salen en orden aleatorio, así que la pregunta no puede depender de otra:
   - nada de «esa prórroga», «esas actuaciones», «el mismo», «además de lo anterior»;
   - no usar el número de artículo en lugar del tema («¿Qué exige el Art. 16?» está mal; «¿Qué se exige en toda nueva edificación respecto de sus fachadas?» está bien);
   - si el tema no queda claro, se agrega como prefijo («Actuación sumarísima: …», «Edificio público, comercial o industrial: …», «Recurso ante el Poder Ejecutivo: …»).
6. **Incisos:** si la tarjeta apunta a un inciso, **no se nombra el inciso** ni en la pregunta ni en la respuesta (nada de «Inc. b):» ni «(inc. j)»). El inciso va como quinto dato: `"b"`, o `"7,8"` si son varios. Las citas que el propio artículo hace a incisos de otro artículo o de otra ley sí se mantienen, porque son contenido.
7. En las respuestas, lo clave va en `<strong>`; para listas se usa `<ul><li>`; para varias partes, `<br>`. No usar comillas dobles `"` dentro de preguntas ni respuestas (usar “ ”).
8. Tipos usados: Regla, Dato, Condición, Excepción, Facultad, Prohibición, Definición, Distinción, Caso.

## Desplegable «Ver texto del artículo»

Lo arma la app sola (`artDetail` en `index.html`), no hay que escribirlo:
- tarjeta sin inciso: «**Artículo 8º:**» y el artículo completo;
- tarjeta con inciso: «**Artículo 8º, inciso b):**», primero la frase inicial del artículo (lo que va antes del primer inciso) y después sólo ese inciso o esos incisos.

Para que funcione, cada inciso tiene que empezar en una línea nueva dentro de `arts`.

## Mazos por temas (historia u otra materia sin articulado)

Para temas que no son normas (historia, geografía, biología, etc.) el mazo lleva `kind: "temas"` y no tiene `arts`. Ejemplo: `mazos/historia_argentina.js`.

- Formato: `add("Tema", "Tipo", "Pregunta", "Respuesta", "Explicación")`. El primer dato es el nombre del tema (agrupa las tarjetas en Progreso, Tarjetas y Ajustes); el quinto es la **explicación**, obligatoria.
- En vez de «Ver texto del artículo», el desplegable dice **«Explicación»** y muestra ese texto.
- La explicación da el contexto y el porqué en 2 a 4 oraciones, sin repetir la respuesta palabra por palabra. Datos verificados: si una fecha o un dato no es seguro, no se incluye.
- Valen las mismas reglas de las tarjetas: una idea por tarjeta, preguntas abiertas que se entiendan solas, nada de sí o no, casos y distinciones donde ayuden (por ejemplo, ordenar hechos cronológicamente o comparar dos batallas del mismo nombre).

## Agregar el mazo a la app

1. Crear `mazos/<nombre>.js` copiando la estructura de uno existente: `id` y `idp` (prefijo corto y único, por ejemplo `"lt:"`), `title`, `sub`, `head`, `arts`, `build`.
2. Agregar `<script src="mazos/<nombre>.js"></script>` en `index.html`, junto a los otros mazos.
3. Agregar el archivo a la lista de `sw.js` y subir la versión de caché (`anki-pro-vN`).
4. Sumar la fila a la tabla de mazos del `README.md`.
5. Correr `node tools/check_mazos.js` y corregir hasta que no marque problemas.
6. Regenerar los archivos para Anki: `python3 tools/export_anki.py` (requiere `pip install genanki`). Deja `anki/<id>.apkg`, que se descarga desde **Progreso → Llevar a Anki**. Hay que correrlo cada vez que se agregan o corrigen tarjetas.
7. Abrir la app (por ejemplo con Playwright) y revisar una tarjeta con inciso y el desplegable.
8. Commit y push a `main`.

**No cambiar el `idp` ni el orden de las tarjetas de un mazo ya estudiado**: los identificadores salen del artículo y del orden dentro de él, y se perdería el progreso. Las tarjetas nuevas van al final de su artículo. Se puede reescribir el texto de una tarjeta sin perder el progreso.

## Exportación a Anki

`tools/dump_cards.js` vuelca las tarjetas usando la misma función del desplegable de la app (`artDetail`), y `tools/export_anki.py` arma un `.apkg` por mazo con una plantilla que copia el diseño de Anki Pro: fuentes Fraunces e Inter (incluidas en `tools/anki_fuentes/`, licencia OFL), colores en modo claro y oscuro, tarjeta con bordes redondeados y desplegable. Si se cambia el estilo de la tarjeta en `index.html`, hay que cambiarlo también en el CSS de `export_anki.py`. No cambiar `MODEL_ID` ni el campo `ID` de las notas: de ellos depende que Anki actualice las notas en vez de duplicarlas.

## Mensaje final al usuario

En español, corto: cuántas tarjetas y artículos tiene el mazo, ejemplos de casos y distinciones agregados, y cualquier error o contradicción del texto original que convenga saber.
