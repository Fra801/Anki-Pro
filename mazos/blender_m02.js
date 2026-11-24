/* Blender 5.3 · Arquitectura — Módulo 02: menú File y todos sus submenús.
   Orden y nombres tomados de TOPBAR_MT_file (scripts/startup/bl_ui/space_topbar.py, tag v5.3.0).
   Formato: ver mazos/blender_m01.js. Los formatos que se importan y exportan tienen una sola ficha
   con las dos rutas; el módulo de Exportación tratará sus opciones, no los repetirá. */
(function () {
const T1 = "File · Abrir y recuperar", T2 = "File · Guardar", T3 = "File · Link, Append y vistas previas",
      T4 = "File · Project", T5 = "File · Import y Export", T6 = "File · External Data", T7 = "File · Clean Up, Defaults y Quit";

(window.DECKS = window.DECKS || []).push({
id: "blender02", idp: "bl2:", kind: "vocab", theme: "blender",
group: "Blender 5.3 · Arquitectura", groupId: "blender", groupSub: "Diccionario visual inglés–español · Blender 5.3.0",
title: "02 · Menú File",
sub: "Archivos, guardado, vínculos, proyectos, importación y datos externos",
head: "Blender 5.3 · 02 · Menú File",
mod: "02", modName: "File",
build(add){

// ───────── Abrir y recuperar ─────────
add(T1,{t:"File",p:"fáil",es:"Archivo",tipo:"Menú",say:"File menu",
fn:"Menú de la Topbar para todo lo que tiene que ver con <strong>archivos .blend</strong>: crear, abrir, guardar, vincular o traer datos de otros archivos, proyectos, importar y exportar formatos, datos externos, limpieza, archivo de inicio y salir.",
loc:"Topbar › File",
arq:"Todo el ciclo de un proyecto pasa por aquí: abrís el modelo de la vivienda, importás el relevamiento del terreno, traés el mobiliario de tu biblioteca y exportás el edificio para otro programa.",
tip:"Un archivo .blend guarda todo: geometría, materiales, cámaras, escenas y la propia distribución de la interfaz."});

add(T1,{t:"New",p:"niu",es:"Nuevo",tipo:"Submenú",
fn:"Crea un archivo nuevo a partir de una <strong>plantilla</strong>: General y las plantillas de aplicación instaladas (2D Animation, Sculpting, VFX, Video Editing…). La escena actual se cierra.",
loc:"File › New",
arq:"Para un proyecto arquitectónico usás <strong>General</strong>: trae una escena 3D con cámara, luz y un cubo, ideal para empezar a modelar.",
key:"Ctrl+N",
tip:"Si tenés cambios sin guardar, Blender te avisa antes de cerrar el archivo actual. El atajo abre la lista de plantillas, no crea el archivo directamente."});

add(T1,{t:"General",p:"yéneral",es:"General (plantilla)",tipo:"Plantilla",
fn:"Plantilla de archivo nuevo que carga tu <strong>archivo de inicio</strong> (startup file): de fábrica, una escena con cubo, cámara y luz; si guardaste uno propio con Save Startup File, ese.",
loc:"File › New › General | Splash Screen › New File › General",
arq:"Si guardaste un archivo de inicio con unidades métricas y colecciones Terreno, Estructura, Muros y Aberturas, cada proyecto nuevo arranca ya organizado.",
tip:"Ojo: en General la unidad por defecto es el metro y el cubo inicial mide 2 m de lado; borralo o usalo como base de una losa."});

add(T1,{t:"Open...",p:"óupen",es:"Abrir…",tipo:"Comando",say:"Open",
fn:"Abre el <strong>explorador de archivos</strong> de Blender para elegir y abrir un archivo .blend. Reemplaza al archivo actual.",
loc:"File › Open...",
key:"Ctrl+O",
arq:"Abrís el modelo del edificio guardado en la carpeta del proyecto, por ejemplo <strong>casa_lote12.blend</strong>.",
tip:"Para traer solo algunos objetos de otro archivo sin cerrar el actual, no uses Open...: usá <strong>Link...</strong> o <strong>Append...</strong>."});

add(T1,{t:"Open Recent",p:"óupen rísent",es:"Abrir reciente",tipo:"Submenú",
fn:"Lista de los <strong>últimos archivos abiertos</strong>. Al pasar el cursor muestra una vista previa e información del archivo.",
loc:"File › Open Recent",
key:"Shift+Ctrl+O",
arq:"Saltás entre <strong>terreno.blend</strong> y <strong>vivienda.blend</strong> del mismo proyecto sin navegar carpetas.",
tip:"Si un archivo se movió o se renombró, la entrada no abre: buscalo con Open... en su nueva ubicación. En 5.3, la pantalla de bienvenida muestra aparte los archivos recientes del proyecto activo."});

add(T1,{t:"Clear Recent Files List",p:"klíer rísent fails list",es:"Borrar la lista de archivos recientes",tipo:"Comando",
fn:"<strong>Vacía la lista</strong> de archivos recientes. No borra ningún archivo del disco.",
loc:"File › Open Recent › Clear Recent Files List",
arq:"Al terminar una entrega, limpiás la lista para que solo aparezcan los archivos del proyecto nuevo.",
tip:"Es solo una lista de accesos directos: los .blend siguen en sus carpetas."});

add(T1,{t:"Revert",p:"rivért",es:"Revertir",tipo:"Comando",
fn:"<strong>Vuelve a cargar el archivo tal como está guardado en el disco</strong>, descartando todos los cambios hechos desde el último guardado.",
loc:"File › Revert",
arq:"Probaste una variante de cubierta a dos aguas que no funcionó y querés volver a la versión guardada esta mañana, sin deshacer paso a paso.",
tip:"Los cambios descartados no se pueden recuperar con Ctrl+Z. Solo está disponible si el archivo ya fue guardado alguna vez."});

add(T1,{t:"Recover",p:"rikáver",es:"Recuperar",tipo:"Submenú",
fn:"Submenú para <strong>recuperar trabajo</strong> después de un cierre accidental o un fallo del programa: <strong>Last Session</strong> y <strong>Auto Save...</strong>.",
loc:"File › Recover",
arq:"Si Blender se cierra mientras renderizás la fachada o modelás la escalera, desde aquí recuperás lo hecho.",
tip:"Guardá a menudo de todos modos: la recuperación es una red de seguridad, no un sistema de versiones."});

add(T1,{t:"Last Session",p:"last séshon",es:"Última sesión",tipo:"Comando",
fn:"Abre <strong>quit.blend</strong>, la copia que Blender guarda automáticamente en la carpeta temporal <strong>cada vez que se cierra</strong> el programa.",
loc:"File › Recover › Last Session | Splash Screen › Recover Last Session",
arq:"Cerraste Blender y elegiste no guardar por error: Last Session te devuelve la vivienda tal como estaba al salir.",
tip:"Se sobrescribe en cada cierre: si abrís y cerrás Blender otra vez, la copia anterior se pierde. Recuperala cuanto antes y guardala con otro nombre."});

add(T1,{t:"Auto Save...",p:"ótou seiv",es:"Guardado automático…",tipo:"Comando",say:"Auto Save",
fn:"Abre el explorador en la carpeta temporal para elegir un <strong>archivo de guardado automático</strong> y recuperarlo. Blender los crea cada cierto tiempo mientras trabajás.",
loc:"File › Recover › Auto Save...",
arq:"Un corte de luz interrumpió el modelado del edificio: abrís el autoguardado más reciente y perdés, como mucho, unos minutos.",
tip:"El intervalo se ajusta en <strong>Edit › Preferences › Save &amp; Load › Auto Save</strong> (de fábrica, cada 2 minutos). Después de recuperar, guardá con Save As... en la carpeta del proyecto."});

// ───────── Guardar ─────────
add(T2,{t:"Save",p:"seiv",es:"Guardar",tipo:"Comando",
fn:"<strong>Guarda el archivo actual</strong>. Si todavía no tiene nombre, abre el explorador para elegir ubicación y nombre.",
loc:"File › Save",
key:"Ctrl+S",
arq:"Guardás cada vez que terminás una parte del edificio: los muros de planta baja, la losa, la escalera.",
tip:"Al guardar, Blender conserva la versión anterior como <strong>.blend1</strong> en la misma carpeta: si algo salió mal, renombrala a .blend y abrila. En macOS el atajo es Cmd+S."});

add(T2,{t:"Save As...",p:"seiv as",es:"Guardar como…",tipo:"Comando",say:"Save As",
fn:"Guarda el archivo con <strong>otro nombre o en otra carpeta</strong>, y a partir de ese momento seguís trabajando en el archivo nuevo.",
loc:"File › Save As...",
key:"Shift+Ctrl+S",
arq:"Antes de probar una fachada distinta, guardás <strong>vivienda_fachadaB.blend</strong> y seguís sobre esa copia sin tocar la original.",
tip:"No confundir con Save Copy...: con Save As... el archivo abierto pasa a ser el nuevo."});

add(T2,{t:"Save Copy...",p:"seiv kópi",es:"Guardar copia…",tipo:"Comando",say:"Save Copy",
fn:"Guarda una <strong>copia</strong> del estado actual con otro nombre, pero <strong>seguís trabajando en el archivo original</strong>.",
loc:"File › Save Copy...",
arq:"Le mandás al cliente una copia del modelo de hoy (<strong>entrega_2026-11-24.blend</strong>) mientras continuás modelando en tu archivo de trabajo.",
tip:"Ideal para respaldos puntuales: el título de la ventana sigue mostrando tu archivo original."});

add(T2,{t:"Save Incremental",p:"seiv inkreméntal",es:"Guardado incremental",tipo:"Comando",
fn:"Guarda con el <strong>número final del nombre aumentado en uno</strong>, sin sobrescribir nada: <strong>casa_v07.blend</strong> pasa a <strong>casa_v08.blend</strong>; un nombre sin número, como casa.blend, pasa a casa1.blend.",
loc:"File › Save Incremental",
key:"Ctrl+Alt+S",
arq:"Llevás un historial del proyecto: v01 terreno, v02 muros, v03 aberturas… y podés volver a cualquier etapa.",
tip:"Solo está disponible si el archivo ya fue guardado. Conviene nombrar el primero con número y ceros (v01) para que se ordene bien."});

// ───────── Link, Append y vistas previas ─────────
add(T3,{t:"Data-Block",p:"déita blok",es:"Bloque de datos",tipo:"Concepto",
fn:"Unidad básica de información de Blender: cada <strong>objeto, malla, material, colección, cámara, luz, imagen o escena</strong> es un data-block. Link, Append, Purge y las vistas previas trabajan con data-blocks.",
loc:"(Concepto general; se ve en el Outliner en el modo Blender File)",
arq:"Una silla de tu biblioteca es un objeto que usa una malla y un material: tres data-blocks. Al traerla a la vivienda, podés traer el objeto o la colección completa.",
tip:"Varios objetos pueden compartir la misma malla o material: si cambiás ese material, cambian todos los que lo usan."});

add(T3,{t:"Link...",p:"link",es:"Vincular…",tipo:"Comando",say:"Link",
fn:"Trae data-blocks de otro .blend <strong>como referencia</strong>: quedan vinculados al archivo de origen (biblioteca) y no se editan en el archivo actual. Si el origen cambia, al reabrir se actualizan.",
loc:"File › Link...",
arq:"Vinculás la colección <strong>Mobiliario</strong> de una biblioteca del estudio: si mejorás el modelo de una mesa en la biblioteca, se actualiza en todos los proyectos que la usan.",
tip:"Para modificar algo vinculado en el archivo actual hay que crear un <strong>Library Override</strong> o hacerlo local; si movés el archivo de origen, el vínculo se rompe (ver Find Missing Files)."});

add(T3,{t:"Append...",p:"apénd",es:"Anexar…",tipo:"Comando",say:"Append",
fn:"Trae data-blocks de otro .blend <strong>copiándolos</strong> al archivo actual, totalmente independientes del original.",
loc:"File › Append...",
arq:"Anexás una escalera ya modelada en otro proyecto y la adaptás a la altura entre pisos de la vivienda nueva.",
tip:"Diferencia clave: <strong>Link</strong> mantiene la conexión y no se edita; <strong>Append</strong> copia y se edita, pero ya no recibe cambios del original."});

add(T3,{t:"Data Previews",p:"déita prívius",es:"Vistas previas de datos",tipo:"Submenú",
fn:"Submenú para <strong>generar, actualizar o borrar las miniaturas</strong> de los data-blocks guardadas dentro de los .blend. Esas miniaturas se ven al usar Link y Append y en el Asset Browser.",
loc:"File › Data Previews",
arq:"En tu biblioteca de muebles, sanitarios y luminarias, las miniaturas permiten reconocer cada pieza a simple vista al traerla a un proyecto.",
tip:"Blender genera solo las miniaturas de materiales, imágenes, luces y mundos; las de objetos, colecciones y escenas hay que generarlas a mano."});

add(T3,{t:"Refresh Data-Block Previews",p:"rifrésh déita blok prívius",es:"Actualizar vistas previas de data-blocks",tipo:"Comando",
fn:"Actualiza todas las miniaturas que Blender puede generar automáticamente (las <strong>relacionadas con sombreado</strong>, como materiales) en el archivo actual.",
loc:"File › Data Previews › Refresh Data-Block Previews",
arq:"Después de ajustar los materiales de piso, revoque y carpintería, actualizás sus miniaturas para elegirlos sin confundirte.",
tip:"Hay que guardar el archivo para que las miniaturas queden escritas en el disco."});

add(T3,{t:"Batch-Generate Previews...",p:"batch yénereit prívius",es:"Generar vistas previas por lotes…",tipo:"Comando",say:"Batch Generate Previews",
fn:"Genera miniaturas de <strong>escenas, colecciones, objetos y materiales</strong> en uno o varios .blend del disco, eligiendo qué tipos incluir.",
loc:"File › Data Previews › Batch-Generate Previews...",
arq:"Procesás de una vez la carpeta de la biblioteca del estudio para que cada mueble y cada luminaria tenga su miniatura.",
tip:"No lo uses sobre el archivo que tenés abierto. Puede tardar, porque renderiza cada miniatura; tiene la opción de conservar una copia .blend1."});

add(T3,{t:"Clear Data-Block Previews...",p:"klíer déita blok prívius",es:"Borrar vistas previas de data-blocks…",tipo:"Comando",say:"Clear Data-Block Previews",
fn:"<strong>Borra las miniaturas</strong> del archivo actual: todas, las de un tipo genérico o las de un tipo concreto de data-block.",
loc:"File › Data Previews › Clear Data-Block Previews...",
arq:"Si cambiaste mucho los modelos de una biblioteca y las miniaturas quedaron viejas, las borrás para regenerarlas.",
tip:"Igual que al generarlas, hay que guardar para que el cambio llegue al disco."});

add(T3,{t:"Batch-Clear Previews...",p:"batch klíer prívius",es:"Borrar vistas previas por lotes…",tipo:"Comando",say:"Batch Clear Previews",
fn:"Borra miniaturas de los tipos elegidos en <strong>uno o varios .blend del disco</strong>.",
loc:"File › Data Previews › Batch-Clear Previews...",
arq:"Aligerás una carpeta de archivos de proyectos viejos que ya no necesitan miniaturas.",
tip:"Tampoco debe usarse sobre el archivo abierto."});

// ───────── Project ─────────
add(T4,{t:"Project",p:"próyekt",es:"Proyecto",tipo:"Submenú",
fn:"Submenú de <strong>Blender Projects</strong>, sistema opcional nuevo en 5.3: una carpeta raíz con una subcarpeta <strong>.blender_project</strong> agrupa varios .blend y comparte ajustes, bibliotecas de assets, variables de ruta como <strong>{project_root}</strong> y la configuración de color.",
loc:"File › Project",
arq:"La obra completa es un proyecto: terreno.blend, estructura.blend, vivienda.blend y render.blend comparten la misma biblioteca de materiales y rutas relativas a la carpeta de la obra.",
tip:"Es totalmente opcional: si no creás un proyecto, Blender trabaja con archivos sueltos como siempre. Al abrir un .blend que está dentro de un proyecto, el proyecto se carga solo."});

add(T4,{t:"New...",p:"niu",es:"Nuevo… (proyecto)",tipo:"Comando",say:"New project",
fn:"Crea un <strong>Blender Project</strong>: pide el nombre y la carpeta raíz, crea allí la subcarpeta .blender_project y abre los ajustes del proyecto.",
loc:"File › Project › New...",
arq:"Al empezar el encargo de un edificio, creás el proyecto en la carpeta <strong>Obra_Lote12</strong> y guardás dentro todos los archivos de la obra.",
tip:"No confundir con File › New, que crea un archivo .blend. Este comando crea la estructura del proyecto."});

add(T4,{t:"Open...",p:"óupen",es:"Abrir… (proyecto)",tipo:"Comando",say:"Open project",
fn:"Abre un proyecto existente eligiendo su <strong>carpeta raíz</strong>. Debajo, el submenú muestra la lista de proyectos recientes.",
loc:"File › Project › Open...",
arq:"Retomás el proyecto de la escuela pidiendo su carpeta raíz, con su biblioteca de materiales y rutas ya configuradas.",
tip:"Tiene el mismo nombre que File › Open..., pero dentro del submenú Project abre una carpeta de proyecto, no un .blend. Normalmente no hace falta: basta con abrir cualquier .blend del proyecto."});

add(T4,{t:"Close",p:"klous",es:"Cerrar (proyecto)",tipo:"Comando",say:"Close project",
fn:"<strong>Cierra el proyecto activo</strong>; Blender deja de aplicar sus ajustes y bibliotecas.",
loc:"File › Project › Close",
arq:"Terminado el trabajo en una obra, cerrás su proyecto antes de abrir archivos sueltos de otro encargo.",
tip:"No cierra ni borra archivos .blend: solo desactiva el contexto del proyecto."});

add(T4,{t:"Clear Recent Projects List...",p:"klíer rísent próyekts list",es:"Borrar la lista de proyectos recientes…",tipo:"Comando",say:"Clear Recent Projects List",
fn:"Vacía la <strong>lista de proyectos recientes</strong> del submenú Project. Si no hay ninguno, el submenú muestra No Recent Projects.",
loc:"File › Project › Clear Recent Projects List...",
arq:"Limpiás la lista cuando las obras terminadas ya no te sirven como acceso rápido.",
tip:"No borra proyectos ni carpetas del disco."});

add(T4,{t:"Settings...",p:"sétings",es:"Ajustes… (del proyecto)",tipo:"Comando",say:"Project settings",
fn:"Abre los <strong>ajustes del proyecto activo</strong>: nombre, imagen de bienvenida propia, variables de ruta, bibliotecas de assets y configuración de color (OpenColorIO).",
loc:"Topbar › Project › Settings...",
arq:"Definís una variable con la carpeta de texturas de la obra y la biblioteca de materiales del estudio, para que todos los archivos del edificio la usen.",
tip:"El menú <strong>Project</strong> aparece en la Topbar, entre Render y Window, solo cuando hay un proyecto cargado. Los ajustes del proyecto tienen prioridad sobre tus preferencias personales."});

// ───────── Import y Export ─────────
add(T5,{t:"Import",p:"impórt",es:"Importar",tipo:"Submenú",
fn:"Submenú para <strong>traer archivos de otros formatos</strong> (OBJ, FBX, glTF, USD, STL, PLY y otros) y convertirlos en objetos de la escena actual.",
loc:"File › Import",
arq:"Importás el relevamiento topográfico del terreno, un modelo de SketchUp o Revit exportado a FBX u OBJ, o el escaneo de una fachada existente.",
tip:"Algunos formatos aparecen solo si su complemento está habilitado en Preferences › Add-ons. Revisá siempre la escala al importar: no todos los programas usan metros."});

add(T5,{t:"Export",p:"ekspórt",es:"Exportar",tipo:"Submenú",
fn:"Submenú para <strong>guardar la escena o lo seleccionado en otros formatos</strong> que otros programas puedan leer. El archivo .blend no cambia.",
loc:"File › Export",
arq:"Exportás el edificio para un motor de render en tiempo real, un visor web, impresión 3D de una maqueta o realidad aumentada.",
tip:"Casi todos los exportadores tienen la opción de exportar solo lo seleccionado: así no mandás también el terreno, las luces o las cámaras."});

add(T5,{t:"Export All Collections",p:"ekspórt ol kolékshons",es:"Exportar todas las colecciones",tipo:"Comando",
fn:"Ejecuta de una vez <strong>todos los exportadores configurados en las colecciones</strong> de la capa de vista actual. Está desactivado si ninguna colección tiene exportadores.",
loc:"File › Export › Export All Collections",
arq:"Configurás en <strong>Properties › Collection › Exporters</strong> que la colección Edificio salga en FBX y la colección Mobiliario en glTF; después actualizás todos los archivos con un solo clic en cada entrega.",
tip:"Cada exportador guarda su ruta y sus opciones dentro de la colección, así que el resultado es siempre igual."});

add(T5,{t:"Wavefront OBJ (.obj)",p:"uéivfront ou bi yei",es:"Wavefront OBJ (.obj)",tipo:"Formato",say:"Wavefront O B J",
fn:"Formato de <strong>geometría</strong> muy difundido, con materiales básicos en un archivo .mtl aparte. Se importa y se exporta.",
loc:"File › Import › Wavefront OBJ (.obj) | File › Export › Wavefront OBJ (.obj)",
arq:"Intercambio rápido con <strong>SketchUp, Rhino o ArchiCAD</strong>: importás un volumen de entorno o exportás el edificio para otro programa de modelado.",
tip:"No guarda modificadores ni jerarquías complejas: el resultado es malla. Enviá siempre el .obj junto con su .mtl y las texturas."});

add(T5,{t:"FBX (.fbx)",p:"ef bi eks",es:"FBX (.fbx)",tipo:"Formato",say:"F B X",
fn:"Formato de intercambio con <strong>jerarquías, materiales, cámaras, luces y animación</strong>. En 5.3 la importación es nativa; la exportación la hace el complemento FBX incluido.",
loc:"File › Import › FBX (.fbx) | File › Export › FBX (.fbx)",
arq:"Pasás el edificio con su mobiliario a <strong>Twinmotion, Unreal Engine o 3ds Max</strong>, o importás modelos de equipamiento de fabricantes.",
tip:"FBX usa otra escala y otros ejes por defecto que algunos programas: si el edificio llega gigante o acostado, revisá las opciones de escala y orientación del exportador."});

add(T5,{t:"FBX (.fbx) (Legacy)",p:"ef bi eks légasi",es:"FBX (.fbx) (heredado)",tipo:"Formato",say:"F B X legacy",
fn:"Importador FBX <strong>anterior</strong>, hecho en Python por el complemento FBX, que se mantiene junto al importador nativo.",
loc:"File › Import › FBX (.fbx) (Legacy)",
arq:"Si un modelo de mobiliario de un fabricante se importa mal con el importador nuevo, probás con este.",
tip:"Usá primero el importador nativo, que es más rápido; el Legacy queda como alternativa de compatibilidad."});

add(T5,{t:"glTF 2.0 (.glb/.gltf)",p:"yi el ti ef tu póint ou",es:"glTF 2.0 (.glb/.gltf)",tipo:"Formato",say:"G L T F 2.0",
fn:"Formato abierto y liviano para <strong>web, realidad aumentada y motores en tiempo real</strong>, con materiales PBR. <strong>.glb</strong> empaqueta todo en un solo archivo; <strong>.gltf</strong> separa datos y texturas.",
loc:"File › Import › glTF 2.0 (.glb/.gltf) | File › Export › glTF 2.0 (.glb/.gltf)",
arq:"Publicás la maqueta de la vivienda en un visor web para que el cliente la recorra desde el celular.",
tip:"Los materiales se traducen mejor si usan el nodo Principled BSDF; los efectos complejos de nodos se pierden."});

add(T5,{t:"Universal Scene Description (.usd*)",p:"iunivérsal sin diskrípshon",es:"Descripción universal de escena (.usd*)",tipo:"Formato",say:"Universal Scene Description, U S D",
fn:"Formato para <strong>escenas completas</strong> entre programas de producción. El asterisco indica sus variantes: <strong>.usd, .usda, .usdc y .usdz</strong>.",
loc:"File › Import › Universal Scene Description (.usd*) | File › Export › Universal Scene Description (.usd*)",
arq:"Exportás la vivienda como <strong>.usdz</strong> para verla en realidad aumentada en un iPhone o iPad, apoyada sobre el terreno real.",
tip:".usda es texto legible, .usdc es binario y .usdz es un paquete comprimido con texturas, pensado para AR."});

add(T5,{t:"STL (.stl)",p:"es ti el",es:"STL (.stl)",tipo:"Formato",say:"S T L",
fn:"Formato de <strong>malla triangulada sin materiales ni colores</strong>, estándar para impresión 3D. Se importa y se exporta.",
loc:"File › Import › STL (.stl) | File › Export › STL (.stl)",
arq:"Exportás la maqueta del edificio a escala para <strong>imprimirla en 3D</strong> y presentarla en la entrega.",
tip:"Para imprimir, la malla debe ser cerrada (sin agujeros) y con espesores reales: un muro de una sola cara no se puede imprimir. Escalá el modelo a la escala de la maqueta."});

add(T5,{t:"Stanford PLY (.ply)",p:"stánford pi el uái",es:"Stanford PLY (.ply)",tipo:"Formato",say:"Stanford P L Y",
fn:"Formato de mallas y <strong>nubes de puntos</strong>, habitual en escaneos 3D. En 5.3 también reconoce archivos PLY de <strong>Gaussian Splats</strong> y los importa como nube de puntos.",
loc:"File › Import › Stanford PLY (.ply) | File › Export › Stanford PLY (.ply)",
arq:"Importás el escaneo láser o fotogramétrico de un edificio existente para modelar la ampliación sobre medidas reales.",
tip:"Las nubes de puntos muy densas pesan mucho: importá solo la zona que necesitás."});

add(T5,{t:"SPZ (.spz)",p:"es pi sed",es:"SPZ (.spz)",tipo:"Formato",say:"S P Z",
fn:"Formato comprimido de <strong>Gaussian Splats</strong> (escenas reconstruidas a partir de fotos o video). Novedad de 5.3: se importa y se renderiza en Workbench, EEVEE y Cycles.",
loc:"File › Import › SPZ (.spz)",
arq:"Capturás con el celular la calle y los edificios vecinos y los usás como <strong>contexto fotorrealista</strong> alrededor de tu proyecto.",
tip:"Solo se importa (no hay exportador). El soporte de splats en 5.3 es inicial: el rendimiento y la iluminación todavía tienen limitaciones."});

add(T5,{t:"Alembic (.abc)",p:"alémbik",es:"Alembic (.abc)",tipo:"Formato",say:"Alembic",
fn:"Formato de <strong>caché de geometría animada</strong>: guarda la forma de los objetos cuadro por cuadro. Se importa y se exporta.",
loc:"File › Import › Alembic (.abc) | File › Export › Alembic (.abc)",
arq:"Uso poco frecuente en arquitectura: por ejemplo, llevar a otro programa una simulación de telas de cortinas o vegetación movida por el viento.",
tip:"No es un formato para intercambiar materiales: se centra en geometría y animación."});

add(T5,{t:"SVG as Grease Pencil (.svg)",p:"es vi yi as gris pénsil",es:"SVG como Grease Pencil (.svg)",tipo:"Formato",say:"S V G as Grease Pencil",
fn:"Importa un dibujo vectorial <strong>SVG</strong> como trazos de <strong>Grease Pencil</strong> (el sistema de dibujo 2D en 3D de Blender).",
loc:"File › Import › SVG as Grease Pencil (.svg)",
arq:"Traés un logotipo o un esquema vectorial para usarlo como referencia o para anotar la planta con trazos.",
tip:"El resultado son trazos, no mallas: para extruir una planta en volumen hace falta convertirlos o redibujar."});

add(T5,{t:"Grease Pencil as SVG",p:"gris pénsil as es vi yi",es:"Grease Pencil como SVG",tipo:"Formato",say:"Grease Pencil as S V G",
fn:"Exporta trazos de <strong>Grease Pencil</strong> a un archivo vectorial <strong>SVG</strong>.",
loc:"File › Export › Grease Pencil as SVG",
arq:"Exportás croquis y diagramas dibujados sobre el modelo (circulaciones, asoleamiento) para terminarlos en un programa de diseño gráfico.",
tip:"Solo exporta objetos Grease Pencil, no muros ni otras mallas."});

add(T5,{t:"Grease Pencil as PDF",p:"gris pénsil as pi di ef",es:"Grease Pencil como PDF",tipo:"Formato",say:"Grease Pencil as P D F",
fn:"Exporta trazos de <strong>Grease Pencil</strong> a un archivo <strong>PDF</strong> vectorial.",
loc:"File › Export › Grease Pencil as PDF",
arq:"Generás en PDF un esquema de zonificación dibujado en Grease Pencil para sumarlo a la lámina de presentación.",
tip:"Igual que el SVG, solo incluye objetos Grease Pencil."});

add(T5,{t:"OpenTimelineIO (.otio)",p:"óupen táimlain ai ou",es:"OpenTimelineIO (.otio)",tipo:"Formato",say:"Open Timeline I O",
fn:"Formato de <strong>líneas de tiempo de edición de video</strong>. Novedad de 5.3: soporte inicial para importar y exportar la edición del Video Sequencer.",
loc:"File › Import › OpenTimelineIO (.otio) | File › Export › OpenTimelineIO (.otio)",
arq:"Armás en Blender el video del recorrido por la vivienda y pasás la edición a otro programa de video para el sonido y la gráfica final.",
tip:"Transfiere la estructura de la edición (cortes y clips), no los renders en sí."});

// ───────── External Data ─────────
add(T6,{t:"External Data",p:"ekstérnal déita",es:"Datos externos",tipo:"Submenú",
fn:"Submenú para gestionar los <strong>archivos externos</strong> que usa el .blend (texturas, imágenes HDRI, fuentes, sonidos, bibliotecas vinculadas): empaquetarlos, desempaquetarlos, cambiar sus rutas y encontrar los que faltan.",
loc:"File › External Data",
arq:"Las texturas de ladrillo, madera y hormigón del edificio suelen estar en una carpeta aparte: desde aquí controlás que el archivo las encuentre siempre.",
tip:"Si al abrir el proyecto en otra computadora los materiales aparecen en rosa, faltan texturas: este submenú es la solución."});

add(T6,{t:"Automatically Pack Resources",p:"otomátikli pak ríisorsis",es:"Empaquetar recursos automáticamente",tipo:"Opción",
fn:"Casilla que <strong>empaqueta dentro del .blend</strong> todos los archivos externos usados y, además, los que agregues después, cada vez que guardás.",
loc:"File › External Data › Automatically Pack Resources",
arq:"Mientras preparás el archivo de entrega para el cliente, lo activás para que cada textura nueva quede incluida sin acordarte.",
tip:"Desmarcarla solo detiene el empaquetado de archivos nuevos: no desempaqueta los existentes. Mientras está activa, Pack Resources y Unpack Resources se ven atenuados."});

add(T6,{t:"Pack Resources",p:"pak ríisorsis",es:"Empaquetar recursos",tipo:"Comando",
fn:"Guarda <strong>dentro del .blend</strong> una copia de todos los archivos externos que usa (imágenes, fuentes, sonidos).",
loc:"File › External Data › Pack Resources",
arq:"Antes de mandar el modelo de la casa a un colega, empaquetás las texturas para que le lleguen en un solo archivo.",
tip:"Después de empaquetar y guardar, los cambios en los archivos externos originales ya no se reflejan en el .blend. El archivo crece en tamaño."});

add(T6,{t:"Unpack Resources",p:"anpák ríisorsis",es:"Desempaquetar recursos",tipo:"Comando",
fn:"Vuelve a escribir como <strong>archivos externos</strong> los recursos empaquetados. Permite elegir si usar los archivos que ya existen o sobrescribirlos, en la carpeta actual o en la ubicación original.",
loc:"File › External Data › Unpack Resources",
arq:"Recibiste un .blend empaquetado y querés editar en otro programa la textura del revestimiento de fachada: la desempaquetás.",
tip:"Elegí con cuidado la opción de sobrescribir: podés reemplazar una versión más nueva de la textura que ya tenías en el disco."});

add(T6,{t:"Pack Linked Libraries",p:"pak linkt láibreris",es:"Empaquetar bibliotecas vinculadas",tipo:"Comando",
fn:"Guarda <strong>dentro del .blend actual</strong> todos los data-blocks vinculados desde otros .blend, conservando la referencia a la biblioteca para poder desempaquetarlos después.",
loc:"File › External Data › Pack Linked Libraries",
arq:"El proyecto vincula mobiliario y vegetación de la biblioteca del estudio; para enviarlo afuera, empaquetás esas bibliotecas y el archivo funciona solo.",
tip:"Los datos empaquetados siguen siendo vinculados (no editables), pero ya no dependen del archivo externo."});

add(T6,{t:"Unpack Linked Libraries",p:"anpák linkt láibreris",es:"Desempaquetar bibliotecas vinculadas",tipo:"Comando",
fn:"Restaura los data-blocks vinculados empaquetados a sus <strong>.blend de origen</strong>, en su ubicación original.",
loc:"File › External Data › Unpack Linked Libraries",
arq:"De vuelta en el estudio, desempaquetás las bibliotecas para que el proyecto vuelva a leer el mobiliario desde la biblioteca común.",
tip:"Puede sobrescribir archivos de biblioteca existentes: hacé una copia de seguridad antes."});

add(T6,{t:"Make Paths Relative",p:"meik paths rélativ",es:"Hacer relativas las rutas",tipo:"Comando",
fn:"Convierte todas las rutas a archivos externos en <strong>rutas relativas</strong> a la ubicación del .blend (empiezan con //).",
loc:"File › External Data › Make Paths Relative",
arq:"Si la carpeta de la obra tiene <strong>/texturas</strong> junto al .blend, con rutas relativas podés mover o copiar la carpeta entera a otro disco y todo sigue funcionando.",
tip:"Es la opción recomendada para proyectos que se comparten o se mueven entre computadoras."});

add(T6,{t:"Make Paths Absolute",p:"meik paths ábsolut",es:"Hacer absolutas las rutas",tipo:"Comando",
fn:"Convierte todas las rutas a archivos externos en <strong>rutas absolutas</strong>, completas desde la raíz del sistema.",
loc:"File › External Data › Make Paths Absolute",
arq:"Útil si las texturas del estudio están en un servidor fijo (por ejemplo, una unidad de red) y el .blend se guarda en distintas carpetas.",
tip:"Las rutas absolutas se rompen al llevar el proyecto a otra computadora con otra estructura de carpetas."});

add(T6,{t:"Report Missing Files",p:"ripórt mísing fails",es:"Informar archivos faltantes",tipo:"Comando",
fn:"Revisa los vínculos a archivos externos e <strong>informa los que no existen</strong>. El aviso aparece en la barra de estado y en el editor Info; si no hay aviso, no falta nada.",
loc:"File › External Data › Report Missing Files",
arq:"Antes de entregar las imágenes finales, comprobás que no falte ninguna textura de los pisos o del revestimiento.",
tip:"Solo informa; para repararlos usá Find Missing Files..."});

add(T6,{t:"Find Missing Files...",p:"faind mísing fails",es:"Buscar archivos faltantes…",tipo:"Comando",say:"Find Missing Files",
fn:"Pide una carpeta y la <strong>busca en forma recursiva</strong> (incluidas sus subcarpetas) para volver a encontrar los archivos externos faltantes por su nombre.",
loc:"File › External Data › Find Missing Files...",
arq:"Moviste la carpeta de texturas del proyecto y los materiales quedaron en rosa: le indicás la nueva carpeta y Blender reconecta todo.",
tip:"Las rutas encontradas se guardan como absolutas: después conviene usar Make Paths Relative."});

// ───────── Clean Up, Defaults y Quit ─────────
add(T7,{t:"Clean Up",p:"klin ap",es:"Limpieza",tipo:"Submenú",
fn:"Submenú para encontrar y eliminar <strong>datos sin usar</strong> (huérfanos) que ocupan lugar en el archivo: Purge Unused Data... y Manage Unused Data...",
loc:"File › Clean Up",
arq:"Tras importar varios modelos y probar muchos materiales para la fachada, el archivo acumula datos que ya nadie usa: aquí lo limpiás.",
tip:"Un data-block sin usuarios se descarta al guardar y volver a abrir, salvo que tenga protección (Fake User)."});

add(T7,{t:"Purge Unused Data...",p:"perch anyúsd déita",es:"Purgar datos sin usar…",tipo:"Comando",say:"Purge Unused Data",
fn:"Abre un diálogo para <strong>eliminar los data-blocks sin usar</strong> del archivo, con opciones para incluir datos locales o vinculados y borrar en forma recursiva.",
loc:"File › Clean Up › Purge Unused Data...",
arq:"Eliminás los materiales y mallas que quedaron sueltos al importar un modelo de Revit en FBX, y el archivo del edificio se aliviana.",
tip:"<strong>No se puede deshacer.</strong> Guardá antes, o guardá una copia, por si purgás algo que querías conservar."});

add(T7,{t:"Manage Unused Data...",p:"mánach anyúsd déita",es:"Gestionar datos sin usar…",tipo:"Comando",say:"Manage Unused Data",
fn:"Abre una ventana con el <strong>Outliner en modo Unused Data</strong>, para ver uno por uno los datos sin usar y decidir qué borrar o conservar.",
loc:"File › Clean Up › Manage Unused Data...",
arq:"Revisás qué materiales de prueba de piso quedaron sin usar y conservás los que podrían servir para otra alternativa.",
tip:"Más seguro que purgar todo: elegís qué borrar y qué proteger con Fake User."});

add(T7,{t:"Defaults",p:"difólts",es:"Valores por defecto",tipo:"Submenú",
fn:"Submenú para el <strong>archivo de inicio</strong>: guardar el estado actual como inicio o volver a la configuración de fábrica.",
loc:"File › Defaults",
arq:"Es donde dejás preparado un arranque “arquitectónico” para todos tus proyectos.",
tip:"Si estás usando una plantilla de aplicación, el submenú muestra su nombre y ofrece Load Factory Blender Settings y Load Factory (nombre de la plantilla) Settings."});

add(T7,{t:"Save Startup File",p:"seiv stárap fail",es:"Guardar archivo de inicio",tipo:"Comando",
fn:"Guarda el archivo actual como <strong>archivo de inicio</strong>: lo que se carga al abrir Blender y al elegir File › New › General.",
loc:"File › Defaults › Save Startup File",
arq:"Dejás configurado en <strong>Properties › Scene › Units</strong> el sistema métrico, borrás el cubo, creás las colecciones Terreno, Estructura, Muros, Aberturas y Mobiliario, y lo guardás como inicio.",
tip:"Guarda también la distribución de la pantalla y los workspaces. No guarda las preferencias (Edit › Preferences), que van aparte."});

add(T7,{t:"Load Factory Settings",p:"loud fáktori sétings",es:"Cargar configuración de fábrica",tipo:"Comando",
fn:"Carga el <strong>archivo de inicio y las preferencias de fábrica</strong>. Para que el cambio sea permanente hay que usar Save Startup File y guardar las preferencias.",
loc:"File › Defaults › Load Factory Settings",
arq:"Si tu archivo de inicio quedó desordenado o con ajustes raros, volvés al punto de partida y armás de nuevo tu plantilla arquitectónica.",
tip:"Antes de usarlo, anotá tus preferencias importantes: si las de fábrica terminan guardándose, las tuyas se pierden. Existe también Load Factory Preferences (en Preferences), que restablece solo las preferencias."});

add(T7,{t:"Quit",p:"kuít",es:"Salir",tipo:"Comando",
fn:"<strong>Cierra Blender.</strong> Si hay cambios sin guardar, pregunta antes. Al salir guarda automáticamente la escena en <strong>quit.blend</strong>, en la carpeta temporal.",
loc:"File › Quit",
key:"Ctrl+Q",
arq:"Al terminar la jornada guardás el modelo del edificio y salís; si cerraste sin guardar por error, File › Recover › Last Session lo recupera.",
tip:"quit.blend se reemplaza en cada cierre: no lo uses como respaldo permanente."});

}});
})();
