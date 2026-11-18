# Anki Pro

Tarjetas con repetición espaciada, al estilo Anki, para estudiar leyes, decretos y reglamentos. En **Mazos** elegís qué norma estudiar. Cada tarjeta apunta a un núcleo funcional de un artículo (reglas, datos y medidas, condiciones, excepciones, facultades, prohibiciones, definiciones, distinciones y casos prácticos).

Mazos incluidos:

| Mazo | Artículos | Tarjetas |
|---|---|---|
| Código de Edificación de Viedma (2018) | 1 a 106 | 380 |
| Reglamento del Régimen de Promociones Policiales (Anexo I, Decreto 1646/87) | 1 a 18 | 71 |
| RENSA: Reglamento de Normas para los Sumarios Administrativos (Anexo I, Decreto 32/94) | 1 a 128 | 237 |

Las tarjetas salen en orden aleatorio (el mismo en todos tus dispositivos). Tocás **Mostrar respuesta**, y después elegís **Otra vez**, **Difícil**, **Bien** o **Fácil**. Cada botón muestra cuándo vuelve la tarjeta. Debajo de cada respuesta podés desplegar el texto completo del artículo.

## Usarla como app

La app es una página estática. Con GitHub Pages queda en `https://fra801.github.io/Anki-Pro/`.
Desde el celular, abrí esa dirección y elegí **Agregar a pantalla de inicio**.

## Guardar el progreso con tu cuenta

En **Progreso → Cuenta y copia de seguridad** pegás un token de GitHub con el permiso `gist`. La app crea un gist privado llamado `anki-pro.json` y lo mantiene sincronizado entre dispositivos. El token se guarda solo en el navegador. También podés descargar y cargar una copia en un archivo.

Sin iniciar sesión, el progreso igual queda guardado en el navegador del dispositivo.

## Ajustes

- Cantidad de tarjetas nuevas por día (20 de entrada).
- Estudiar solo algunos artículos.
- Reiniciar el progreso.

## Agregar un mazo

Cada mazo es un archivo en `mazos/`. Para sumar uno:

1. Copiá `mazos/promociones.js` con otro nombre y cambiá `id`, `idp` (un prefijo corto y único, por ejemplo `"lt:"`), `title`, `sub` y `head`.
2. En `arts` va el texto de cada artículo; en `build` van las tarjetas, una por línea:

```js
add(8, "Dato", "Inc. e): ¿cuándo inhabilita la licencia por asuntos personales?", "Por más de <strong>10 días continuos</strong>.");
```

3. Agregá `<script src="mazos/nuevo.js"></script>` en `index.html` (junto a los otros mazos) y el archivo a la lista de `sw.js`.

No cambies el `idp` ni el orden de las tarjetas de un mazo ya estudiado: los identificadores salen de ahí y se perdería el progreso. Las tarjetas nuevas conviene agregarlas al final del artículo.
