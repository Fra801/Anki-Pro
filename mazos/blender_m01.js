/* Blender 5.3 · Arquitectura — Módulo 01: Interfaz general (ventana, Topbar, áreas y regiones).
   Mazo de vocabulario (kind "vocab"): add(tema, {t, p, es, fn, loc, arq, key, tip, tipo, say}).
   - t: término tal como aparece en Blender 5.3.0 (verificado contra el código fuente, tag v5.3.0).
   - p: pronunciación aproximada (tilde = sílaba fuerte; ver «Cómo leer la pronunciación» en la app).
   - loc: ruta con « › »; varias rutas con « | »; un tramo entre paréntesis es una aclaración.
   - key: atajo del mapa de teclas por defecto (en macOS, Ctrl suele ser Cmd); alternativas con « / ».
   Cada término aparece una sola vez en todo el diccionario (lo revisa tools/check_mazos.js).
   Quedan para sus propios módulos: los menús Edit, Render, Window y Help; los editores 3D Viewport,
   Outliner, Properties y Timeline; las herramientas de la Toolbar; Toggle Quad View (3D Viewport). */
(function () {
const T1 = "Topbar", T2 = "Topbar · Menú Blender", T3 = "Ventana, áreas y editores", T4 = "Regiones de un editor", T5 = "Operaciones con áreas";

(window.DECKS = window.DECKS || []).push({
id: "blender01", idp: "bl1:", kind: "vocab", theme: "blender",
group: "Blender 5.3 · Arquitectura", groupId: "blender", groupSub: "Diccionario visual inglés–español · Blender 5.3.0",
title: "01 · Interfaz general",
sub: "Topbar, menú Blender, áreas, editores y regiones",
head: "Blender 5.3 · 01 · Interfaz general",
mod: "01", modName: "Interfaz",
build(add){

// ───────── Topbar ─────────
add(T1,{t:"Topbar",p:"tópbar",es:"Barra superior",tipo:"Interfaz",
fn:"Franja fija en el borde superior de la ventana. A la izquierda tiene los menús principales (<strong>Blender, File, Edit, Render, Window, Help</strong>), en el centro las pestañas de los <strong>Workspaces</strong> y a la derecha los selectores de <strong>Scene</strong> y <strong>View Layer</strong>.",
loc:"(Borde superior de la ventana de Blender)",
arq:"Es el tablero de mando del proyecto: desde File guardás las versiones de la vivienda, desde Render lanzás la imagen de la fachada y con las pestañas pasás del espacio de modelado de muros al de materiales sin reacomodar la pantalla.",
tip:"Cuando maximizás un área, en la Topbar aparece el botón <strong>Back to Previous</strong> para volver a la distribución anterior."});

add(T1,{t:"Workspaces",p:"uérkspeisis",es:"Espacios de trabajo",tipo:"Interfaz",
fn:"Pestañas de la Topbar. Cada una es una <strong>distribución predefinida de áreas y editores</strong> pensada para una tarea: Layout, Modeling, Shading, Rendering, etc. Cambiar de pestaña cambia toda la pantalla, pero la escena es la misma.",
loc:"Topbar › (pestañas a la derecha de los menús)",
arq:"Modelás muros y losas en <strong>Modeling</strong>, asignás hormigón visto o madera en <strong>Shading</strong> y revisás la imagen final en <strong>Rendering</strong>, siempre sobre el mismo edificio.",
key:"Ctrl+PageUp / Ctrl+PageDown",
tip:"Podés crear tus propios espacios con el botón <strong>+</strong> al final de las pestañas; cada workspace se guarda dentro del archivo .blend."});

add(T1,{t:"Scene",p:"sin",es:"Escena",tipo:"Selector",
fn:"Selector de data-block en el extremo derecho de la Topbar. Muestra la <strong>escena activa</strong> y permite cambiarla, crear una nueva o borrarla. Un archivo .blend puede contener varias escenas con objetos y ajustes de render propios.",
loc:"Topbar › (selector Scene, a la derecha)",
arq:"Podés tener una escena para la <strong>Propuesta A</strong> y otra para la <strong>Propuesta B</strong> de una misma vivienda, o una escena aparte solo para las vistas de presentación.",
tip:"Al crear una escena nueva, Blender pregunta cómo hacerlo: vacía o copiando la actual. Una copia vinculada comparte los objetos; si modificás un muro en una, cambia en la otra."});

add(T1,{t:"View Layer",p:"viu léier",es:"Capa de vista",tipo:"Selector",
fn:"Selector junto a Scene. Cada View Layer define <strong>qué colecciones se ven y se renderizan</strong> dentro de la misma escena, sin borrar nada. Sirve para separar pasadas de render o variantes de visualización.",
loc:"Topbar › (selector View Layer, a la derecha de Scene)",
arq:"Una View Layer con el edificio completo y otra solo con la vegetación y el entorno, para retocarlas por separado en la composición final de la lámina.",
tip:"Las View Layers no duplican geometría: solo cambian qué colecciones participan. Para alternativas de diseño distintas conviene usar escenas."});

// ───────── Menú Blender ─────────
add(T2,{t:"Blender",p:"blénder",es:"Menú Blender (logo)",tipo:"Menú",say:"Blender menu",
fn:"Primer menú de la Topbar, con el <strong>logo de Blender</strong> como ícono. Reúne la pantalla de bienvenida, la información de la versión, la instalación de plantillas de aplicación y el submenú técnico <strong>System</strong>.",
loc:"Topbar › Blender (ícono del logo)",
arq:"Es el lugar al que vas cuando necesitás confirmar la versión instalada antes de compartir el modelo del edificio con otra persona del estudio.",
tip:"Si la ventana es angosta, los menús de la Topbar pueden colapsarse en un solo botón; el contenido es el mismo."});

add(T2,{t:"Splash Screen",p:"splash skrin",es:"Pantalla de bienvenida",tipo:"Comando",
fn:"Abre la ventana inicial de Blender: plantillas de <strong>New File</strong>, lista de <strong>archivos recientes</strong>, <strong>Open...</strong> y <strong>Recover Last Session</strong>. Aparece sola al iniciar el programa.",
loc:"Topbar › Blender › Splash Screen",
arq:"Al empezar el día retomás el archivo de la casa desde la lista de recientes con un clic, o recuperás la última sesión si Blender se cerró sin guardar.",
tip:"Se cierra haciendo clic fuera de ella. Si el proyecto usa Blender Projects, la lista puede mostrar primero los archivos de ese proyecto."});

add(T2,{t:"About Blender",p:"abáut blénder",es:"Acerca de Blender",tipo:"Comando",
fn:"Muestra la <strong>versión</strong>, la fecha de compilación y el identificador (hash) de la compilación, además de enlaces a las notas de la versión, créditos y licencia.",
loc:"Topbar › Blender › About Blender",
arq:"Antes de pasar el modelo de un edificio a un colega, comprobás que los dos usan <strong>5.3.0</strong>: un archivo guardado en una versión más nueva puede perder datos o no abrir bien en una anterior.",
tip:"Al informar un error, copiá el hash: identifica exactamente qué compilación usás."});

add(T2,{t:"Install Application Template...",p:"instól aplikéishon témpleit",es:"Instalar plantilla de aplicación…",tipo:"Comando",say:"Install Application Template",
fn:"Instala una <strong>plantilla de aplicación</strong> (archivo .zip) que trae su propio archivo de inicio y configuración. Después aparece como opción en <strong>File › New</strong>.",
loc:"Topbar › Blender › Install Application Template...",
arq:"Un estudio puede repartir una plantilla “Arquitectura” con unidades métricas, cámaras de presentación y colecciones Terreno, Estructura, Muros y Mobiliario ya armadas.",
tip:"No es lo mismo que <strong>Save Startup File</strong>: aquel solo reemplaza tu archivo de inicio General; una plantilla de aplicación es una opción aparte e intercambiable."});

add(T2,{t:"System",p:"sístem",es:"Sistema",tipo:"Submenú",
fn:"Submenú con <strong>operadores técnicos</strong> que no tienen otro acceso: recargar scripts, estadísticas de memoria, nivel de depuración, prueba de velocidad de dibujo y limpieza de datos de editores y de presets.",
loc:"Topbar › Blender › System",
arq:"Lo usás poco en el día a día; sirve cuando un archivo de un edificio muy pesado se comporta raro y necesitás diagnosticar o limpiar.",
tip:"Son herramientas avanzadas: ninguna modifica tu modelo, pero conviene saber qué hace cada una antes de usarla."});

add(T2,{t:"Reload Scripts",p:"rilóud skripts",es:"Recargar scripts",tipo:"Comando",
fn:"Vuelve a cargar todos los <strong>scripts de Python</strong> de la interfaz y de los complementos, sin cerrar Blender.",
loc:"Topbar › Blender › System › Reload Scripts",
arq:"Si estás probando un script propio que genera, por ejemplo, escaleras a partir de la altura entre pisos, lo recargás después de cada cambio sin reiniciar el programa.",
tip:"Útil para quien escribe o modifica complementos; para el uso normal no hace falta."});

add(T2,{t:"Memory Statistics",p:"mémori statístiks",es:"Estadísticas de memoria",tipo:"Comando",
fn:"Escribe en la <strong>consola del sistema</strong> un informe del uso de memoria de Blender.",
loc:"Topbar › Blender › System › Memory Statistics",
arq:"Ayuda a ver por qué un conjunto de viviendas con mucho mobiliario y vegetación consume tanta memoria.",
tip:"El informe no aparece en la interfaz sino en la consola (en Windows: Window › Toggle System Console)."});

add(T2,{t:"Debug Menu",p:"dibág ményu",es:"Menú de depuración",tipo:"Comando",
fn:"Abre una ventana emergente para fijar el <strong>nivel de depuración</strong> (debug value) de Blender, usado por desarrolladores para activar funciones de prueba.",
loc:"Topbar › Blender › System › Debug Menu",
arq:"No tiene uso directo en modelado arquitectónico.",
tip:"Dejalo en 0 salvo que un desarrollador te pida otro valor para diagnosticar un error."});

add(T2,{t:"Redraw Timer",p:"ridró táimer",es:"Temporizador de redibujo",tipo:"Submenú",
fn:"Prueba simple que mide cuánto tarda Blender en <strong>volver a dibujar la interfaz</strong>; ofrece varios tipos de prueba.",
loc:"Topbar › Blender › System › Redraw Timer",
arq:"Sirve para comparar el rendimiento del visor con un modelo de edificio liviano y con uno pesado, o entre dos computadoras.",
tip:"Es una herramienta de medición; durante la prueba la interfaz parece congelada unos segundos."});

add(T2,{t:"Clean Up Space Data",p:"klin ap speis déita",es:"Limpiar datos de editores",tipo:"Comando",
fn:"Elimina <strong>ajustes guardados de editores que no están visibles</strong> en las áreas del archivo.",
loc:"Topbar › Blender › System › Clean Up Space Data",
arq:"Achica levemente un archivo de proyecto que pasó por muchas configuraciones de pantalla distintas.",
tip:"No toca objetos ni materiales: solo datos de la interfaz."});

add(T2,{t:"Clean Up Operator Presets",p:"klin ap ópereitor prísets",es:"Limpiar presets de operadores",tipo:"Comando",
fn:"Quita de los <strong>presets de operadores</strong> las propiedades desactualizadas que pueden causar problemas tras actualizar Blender.",
loc:"Topbar › Blender › System › Clean Up Operator Presets",
arq:"Si guardaste presets de exportación (por ejemplo, un FBX configurado para pasar el edificio a otro programa) y fallan después de actualizar, esto los repara.",
tip:"Conviene usarlo después de pasar a una versión nueva si notás avisos con tus presets."});

// ───────── Ventana, áreas y editores ─────────
add(T3,{t:"Area",p:"éria",es:"Área",tipo:"Interfaz",
fn:"Cada uno de los <strong>rectángulos</strong> en que se divide la ventana de Blender. Cada área aloja un editor y se puede redimensionar, dividir, unir o intercambiar.",
loc:"(Toda la ventana, entre la Topbar y la Status Bar)",
arq:"Armás la pantalla con un área grande para el modelo en perspectiva, otra para ver la <strong>planta</strong> desde arriba y una angosta con la lista de colecciones del edificio.",
tip:"Muchos atajos dependen del área donde está el cursor: el mismo atajo hace cosas distintas sobre el visor 3D y sobre la lista de objetos."});

add(T3,{t:"Editor",p:"éditor",es:"Editor",tipo:"Interfaz",
fn:"Herramienta que ocupa un área y cumple una función concreta: <strong>3D Viewport</strong> para ver y modelar, <strong>Outliner</strong> para la lista de objetos, <strong>Properties</strong> para los ajustes, <strong>Timeline</strong> para el tiempo, entre otros.",
loc:"(Dentro de cada área)",
arq:"Mientras modelás una escalera en el 3D Viewport, en Properties ajustás su modificador y en el Outliner la ubicás dentro de la colección Circulación.",
tip:"Cualquier área puede mostrar cualquier editor: la distribución no es fija."});

add(T3,{t:"Editor Type",p:"éditor taip",es:"Tipo de editor",tipo:"Selector",
fn:"Botón con ícono en el <strong>extremo izquierdo del header</strong> de cada área. Despliega la lista de editores para cambiar qué muestra esa área.",
loc:"Header de cualquier área › (primer botón a la izquierda)",
arq:"Convertís temporalmente un área de la línea de tiempo en un segundo 3D Viewport para tener planta y perspectiva lado a lado mientras ubicás aberturas.",
tip:"Cambiar el tipo de editor no borra nada: el editor anterior conserva su configuración si volvés a él."});

add(T3,{t:"Status Bar",p:"stéitas bar",es:"Barra de estado",tipo:"Interfaz",
fn:"Franja en el <strong>borde inferior</strong> de la ventana. Muestra qué hace cada botón del mouse según el contexto, los mensajes y el progreso de tareas, y a la derecha información opcional como estadísticas de la escena o memoria.",
loc:"(Borde inferior de la ventana) | Window › Show Status Bar",
arq:"Activando <strong>Scene Statistics</strong> (clic derecho sobre la barra) controlás la cantidad de vértices y caras: útil para que un edificio con mucho mobiliario no se vuelva inmanejable.",
tip:"Mirala cuando aprendés una herramienta: indica en todo momento qué hace el clic izquierdo, el derecho y la rueda."});

// ───────── Regiones ─────────
add(T4,{t:"Region",p:"ríyon",es:"Región",tipo:"Interfaz",
fn:"Cada editor se divide en <strong>regiones</strong>: Header, Main Region, Toolbar, Sidebar, Tool Settings y Adjust Last Operation, entre otras. Las regiones se pueden mostrar, ocultar y redimensionar.",
loc:"(Dentro de cada editor)",
arq:"Ocultás las regiones laterales del 3D Viewport para tener más espacio al revisar una fachada completa, y las volvés a mostrar para cargar medidas.",
tip:"Una región oculta deja una pequeña flecha en el borde: clic en ella para que reaparezca."});

add(T4,{t:"Header",p:"jéder",es:"Encabezado",tipo:"Región",
fn:"Franja horizontal arriba o abajo del área con los <strong>menús y botones</strong> del editor. Su contenido cambia según el editor, el objeto seleccionado y el modo.",
loc:"(Borde superior o inferior de cada área)",
arq:"En el header del 3D Viewport están los menús View, Select, Add y Object con los que agregás y ordenás muros, losas y aberturas.",
tip:"Con clic derecho sobre el header podés ocultarlo o pasarlo al borde opuesto."});

add(T4,{t:"Main Region",p:"mein ríyon",es:"Región principal",tipo:"Región",
fn:"La región <strong>más grande</strong> del editor, siempre visible, donde está el contenido: en el 3D Viewport, la escena; en el Outliner, la lista de objetos.",
loc:"(Centro de cada editor)",
arq:"En la región principal del 3D Viewport ves y editás el edificio: seleccionás un muro, lo extruís o movés una ventana.",
tip:"Se desplaza con el botón central del mouse; donde no hay zoom, también con la rueda."});

add(T4,{t:"Toolbar",p:"túlbar",es:"Barra de herramientas",tipo:"Región",
fn:"Columna de íconos en el <strong>lado izquierdo</strong> del editor con las herramientas interactivas del modo actual (seleccionar, mover, rotar, escalar y otras).",
loc:"(Lado izquierdo del editor) | 3D Viewport › View › Toolbar",
arq:"En Edit Mode cambia y ofrece herramientas de modelado para abrir vanos, extruir muros o biselar aristas de una losa.",
key:"T",
tip:"Si la ves muy angosta, arrastrá su borde: muestra los nombres de las herramientas además de los íconos."});

add(T4,{t:"Sidebar",p:"sáidbar",es:"Barra lateral",tipo:"Región",
fn:"Región en el <strong>lado derecho</strong> del editor, organizada en pestañas (Item, Tool, View…) con paneles de ajustes del objeto y del propio editor.",
loc:"(Lado derecho del editor) | 3D Viewport › View › Sidebar",
arq:"En la pestaña <strong>Item</strong> escribís las medidas exactas de un muro en Dimensions, por ejemplo <strong>0,20 m</strong> de espesor y <strong>2,80 m</strong> de altura.",
key:"N",
tip:"Novedad de 5.3: con el cursor sobre la Sidebar, <strong>Ctrl+F</strong> busca un ajuste por nombre y <strong>Alt+F</strong> borra la búsqueda."});

add(T4,{t:"Tool Settings",p:"tul sétings",es:"Ajustes de la herramienta",tipo:"Región",
fn:"Franja parecida al header que muestra las <strong>opciones de la herramienta activa</strong> de la Toolbar.",
loc:"(Debajo o encima del header, según el editor) | 3D Viewport › View › Tool Settings",
arq:"Con la herramienta de selección por caja activa, aquí elegís si cada recuadro reemplaza, amplía o resta la selección: así tomás de una vez todos los tabiques de un piso.",
tip:"Como el header, se oculta o se mueve desde su menú contextual (clic derecho)."});

add(T4,{t:"Adjust Last Operation",p:"ayást last operéishon",es:"Ajustar la última operación",tipo:"Región",say:"Adjust Last Operation",
fn:"Panel que aparece abajo a la izquierda <strong>después de ejecutar una operación</strong>, para modificar sus parámetros a posteriori. También se abre como ventana emergente desde el menú Edit.",
loc:"(Esquina inferior izquierda del 3D Viewport) | Edit › Adjust Last Operation... | 3D Viewport › View › Adjust Last Operation",
arq:"Agregás un cubo para hacer una losa y, en este panel, le das el tamaño y la posición exactos antes de seguir.",
key:"F9",
tip:"Desaparece en cuanto hacés otra operación: ajustá los valores antes de seguir trabajando."});

add(T4,{t:"Panel",p:"pánel",es:"Panel",tipo:"Interfaz",
fn:"Bloque <strong>plegable</strong> con controles dentro de una región. Se abre o cierra con un clic en su título y se puede reordenar arrastrándolo.",
loc:"(Dentro de Sidebar, Properties y otras regiones)",
arq:"En Properties dejás abierto solo el panel de dimensiones o del modificador que estás usando para modelar la cubierta y plegás el resto.",
tip:"<strong>Ctrl+clic</strong> sobre el título de un panel lo abre y pliega todos los demás."});

// ───────── Operaciones con áreas ─────────
add(T5,{t:"Area Options",p:"éria ópshons",es:"Opciones de área",tipo:"Menú contextual",
fn:"Menú que aparece con <strong>clic derecho sobre el borde entre dos áreas</strong>. Ofrece dividir (Vertical Split, Horizontal Split), unir (Join…) e intercambiar áreas (Swap Areas).",
loc:"(Clic derecho en el borde entre dos áreas)",
arq:"Reorganizás rápido la pantalla para dibujar en planta: dividís el visor y en la nueva área ponés una vista superior.",
tip:"Las áreas también se dividen arrastrando desde una esquina hacia adentro, y se unen arrastrando hacia el área vecina."});

add(T5,{t:"Vertical Split",p:"vértikal split",es:"División vertical",tipo:"Comando",
fn:"Divide el área con una <strong>línea vertical</strong>: quedan dos áreas lado a lado. Muestra una línea guía para elegir dónde cortar; <strong>Tab</strong> alterna entre vertical y horizontal.",
loc:"View › Area › Vertical Split | (Clic derecho en un borde) › Vertical Split",
arq:"Ponés a la izquierda la perspectiva del edificio y a la derecha una vista frontal para alinear las ventanas de la fachada.",
tip:"El menú View › Area existe en el header de cada editor; la opción actúa sobre el área donde lo abriste."});

add(T5,{t:"Horizontal Split",p:"jorisóntal split",es:"División horizontal",tipo:"Comando",
fn:"Divide el área con una <strong>línea horizontal</strong>: quedan dos áreas una sobre otra.",
loc:"View › Area › Horizontal Split | (Clic derecho en un borde) › Horizontal Split",
arq:"Dejás arriba el 3D Viewport con la vivienda y abajo un área angosta para un segundo editor, por ejemplo el de materiales.",
tip:"Si te equivocás de dirección mientras elegís el corte, presioná <strong>Tab</strong> antes de confirmar."});

add(T5,{t:"Join Up",p:"yoin ap",es:"Unir hacia arriba",tipo:"Comando",
fn:"Une dos áreas vecinas en una sola. El texto cambia según el borde y la dirección: en un borde horizontal el menú ofrece <strong>Join Up</strong> y <strong>Join Down</strong>; en uno vertical, <strong>Join Left</strong> y <strong>Join Right</strong>. Muestra un indicador de la dirección de unión: qué área absorbe a cuál.",
loc:"(Clic derecho en el borde entre dos áreas) › Join Up",
arq:"Terminada la revisión en planta y vista frontal, unís las áreas para volver a tener un visor grande con el edificio entero.",
tip:"Arrastrar desde la esquina de un área hacia la vecina hace lo mismo; las áreas que se van a unir se ven más claras."});

add(T5,{t:"Swap Areas",p:"suóp érias",es:"Intercambiar áreas",tipo:"Comando",
fn:"<strong>Intercambia el contenido</strong> de dos áreas vecinas, sin cambiar sus tamaños.",
loc:"(Clic derecho en el borde entre dos áreas) › Swap Areas",
arq:"Pasás la lista de colecciones del edificio del lado derecho al izquierdo si te resulta más cómodo trabajar así.",
key:"Ctrl+clic en una esquina y arrastrar",
tip:"Con Ctrl y arrastre desde una esquina se pueden intercambiar áreas aunque no sean vecinas, siempre que estén en la misma ventana."});

add(T5,{t:"Maximize Area",p:"máksimais éria",es:"Maximizar área",tipo:"Comando",
fn:"Agranda el área para que ocupe <strong>toda la ventana</strong>, manteniendo visibles la Topbar, el header y la Status Bar. Al estar maximizada, la misma opción del menú pasa a llamarse <strong>Restore Areas</strong>.",
loc:"View › Area › Maximize Area",
key:"Ctrl+Space",
arq:"Maximizás el 3D Viewport para revisar en detalle el encuentro entre la losa y la carpintería de una ventana, y volvés con el mismo atajo.",
tip:"También se vuelve con el botón <strong>Back to Previous</strong> que aparece en la Topbar. El área que se maximiza es la que está bajo el cursor."});

add(T5,{t:"Focus Mode",p:"fóukas moud",es:"Modo enfoque",tipo:"Comando",
fn:"Agranda el área a toda la ventana y <strong>oculta además</strong> la Topbar, la Status Bar y las regiones secundarias del editor (Toolbar, Sidebar, header).",
loc:"View › Area › Focus Mode",
key:"Ctrl+Alt+Space",
arq:"Ideal para mostrarle a un cliente el recorrido por la casa en pantalla completa, sin menús a la vista.",
tip:"Para salir, repetí el atajo o usá el ícono de la esquina superior derecha del área."});

add(T5,{t:"Duplicate Area into New Window",p:"diúplikeit éria íntu niu uíndou",es:"Duplicar área en una ventana nueva",tipo:"Comando",
fn:"Abre una <strong>ventana flotante</strong> con una copia del editor actual, que podés llevar a otro monitor.",
loc:"View › Area › Duplicate Area into New Window",
key:"Shift+clic en una esquina y arrastrar",
arq:"Con dos monitores, dejás en uno el modelo del edificio y en el otro una cámara de presentación para ver el encuadre mientras ajustás la fachada.",
tip:"La ventana nueva muestra la misma escena: los cambios se ven en las dos."});

add(T5,{t:"Close Area",p:"klous éria",es:"Cerrar área",tipo:"Comando",
fn:"Cierra el área actual; el espacio lo ocupa un área vecina.",
loc:"View › Area › Close Area",
arq:"Cerrás un área que abriste para consultar una referencia y recuperás espacio para el visor principal.",
tip:"No borra datos: solo quita ese editor de la pantalla."});

}});
})();
