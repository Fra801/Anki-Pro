/* Applied Ballistics for Long Range Shooting (Bryan Litz, 3ª ed.) — Resumen de los elementos (Parte 1). */
(function () {
const { fm, pg, flujo, grupos, tabla } = window.ADM;
const T1 = "R · Prioridad de los elementos de la balística externa";

(window.DECKS = window.DECKS || []).push({
id: "abS", idp: "bS:", kind: "temas", theme: "admin",
group: "Balística aplicada al tiro de largo alcance (Bryan Litz)", groupId: "ab", groupSub: "Bryan Litz · 3ª ed., Applied Ballistics 2015",
title: "11b · Resumen de los elementos",
sub: "Parte 1 · Libro, pp. 191–194",
head: "Balística · Resumen de los elementos",
build(add){
add(T1,"Dato","¿En qué orden de importancia ubica Litz los elementos de la balística externa?",flujo(["Caída por gravedad","Miras","Deriva por viento","Coeficiente balístico","Atmósfera","Tiro en pendiente","Deriva giroscópica","Efecto Coriolis"]),"Es una lista subjetiva: el viento y el tiro en pendiente pueden subir o bajar según el día y la situación. Los efectos del transónico se suman sólo en el tiro ELR."+pg("191–193"));
add(T1,"Regla","¿Por qué la caída por gravedad encabeza la lista y qué implica corregirla?","Porque es el problema <strong>más fundamental</strong> del tirador de larga distancia; corregirla supone <strong>medir la distancia</strong>, calcular y aplicar la corrección vertical con un programa balístico.","No tendría sentido preocuparse por Coriolis sin resolver primero la caída."+pg(191));
add(T1,"Regla","¿Por qué las miras ocupan un lugar tan alto entre los elementos de la balística externa?","Porque son el <strong>puente</strong> entre la predicción y la corrección: de nada sirve predecir la caída con exactitud si no se verificó cuánto mueve realmente el retículo, ni pensar en deriva giroscópica sin un <strong>nivel de mira</strong> que evite el ladeo.","Es la idea central del capítulo 9."+pg(191));
add(T1,"Regla","¿Por qué el viento puede ser el elemento más o el menos importante según el día?","Porque es la <strong>variable no determinista más crítica</strong>: todo lo demás puede medirse y corregirse; el viento depende de cómo sople. Todo esfuerzo por mejorar su lectura rinde en cualquier disciplina.","Litz lo llama la última variable verdadera del tirador de larga distancia."+pg("191–192"));
add(T1,"Regla","Si no se pueden medir las condiciones atmosféricas en el lugar, ¿qué recomienda Litz?","Generar de antemano la tabla de caídas para la <strong>altitud</strong> y la <strong>temperatura esperada</strong> del lugar: la presión según la altitud es muy predecible y la temperatura puede estimarse por la estación.","Lo ideal es medir las condiciones y calcular una solución a medida con un dispositivo portátil."+pg(192));
add(T1,"Condición","¿Qué condiciones previas pone Litz para empezar a corregir la deriva giroscópica y el efecto Coriolis?","<strong>Deriva giroscópica</strong>: sólo si ya se resolvieron los elementos de mayor prioridad, se usa un <strong>nivel de mira</strong> y se verificaron los ajustes de la mira.<br><strong>Coriolis</strong>: sólo si además el viento no es extremo y la situación da <strong>tiempo</strong>.","El efecto Coriolis es siempre menor que la deriva giroscópica; en el hemisferio norte, un cañón de giro izquierdo los compensa en parte."+pg("192–193"));
add(T1,"Regla","¿A quiénes afectan los desafíos del tiro en el transónico (ELR)?","Sólo a la <strong>pequeña minoría</strong> que tira a distancias donde la bala se vuelve transónica; el 99% que trabaja en el rango supersónico no se ve afectado.","En el transónico hacen falta perfiles de arrastre personalizados, la estabilidad puede comprometer la trayectoria y el equipo habitual (miras de 70 MOA, telémetros de 1000 yardas) puede quedar corto."+pg(193));
}
});
})();
