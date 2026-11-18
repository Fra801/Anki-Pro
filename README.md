# Anki Pro

Tarjetas con repetición espaciada, al estilo Anki. El primer mazo cubre los **artículos 1 a 20 del Código de Edificación de Viedma (2018)**: 97 tarjetas, una por cada núcleo funcional de cada artículo (reglas, datos y medidas, condiciones, excepciones, facultades, prohibiciones, definiciones y casos prácticos).

Tocás **Mostrar respuesta**, y después elegís **Otra vez**, **Difícil**, **Bien** o **Fácil**. Cada botón muestra cuándo vuelve la tarjeta. Debajo de cada respuesta podés desplegar el texto completo del artículo.

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

## Agregar tarjetas

Las tarjetas están en `index.html`, en la sección `TARJETAS`. Cada una es una línea:

```js
add(11, "Dato", "¿Cuánto pueden sobresalir esas salientes?", "Hasta <strong>1,00 m</strong>.");
```

El primer dato es el número de artículo y el segundo el tipo de núcleo. El texto de cada artículo está en `ART`.
