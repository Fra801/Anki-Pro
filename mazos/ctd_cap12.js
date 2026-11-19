/* Ballistics: Theory and Design of Guns and Ammunition (Carlucci y Jacobson, 3ª ed.) — Capítulo 12: Desvío lateral (lateral throwoff). */
(function () {
const { fm, pg } = window.ADM;
const T1 = "12.1 · Desvío lateral: el fenómeno", T2 = "12.2 · Desequilibrio estático", T3 = "12.3 · Desequilibrio dinámico y brazo de equilibrio";

(window.DECKS = window.DECKS || []).push({
id: "ctd12", idp: "c12:", kind: "temas", theme: "admin",
group: "Balística: teoría y diseño de armas y municiones (Carlucci y Jacobson)", groupId: "ctd", groupSub: "Donald E. Carlucci y Sidney S. Jacobson · 3ª ed., CRC Press 2018 · Parte 2: balística exterior",
title: "12 · Desvío lateral",
sub: "Capítulo 12 · Libro, pp. 345–354",
head: "Balística exterior · Cap. 12 · Desvío lateral",
build(add){
// 12.1
add(T1,"Definición","¿Qué es el desvío lateral (lateral throwoff) de un proyectil?","La <strong>respuesta dinámica</strong> de un proyectil con desequilibrio estático o dinámico al quedar libre del tubo: la carga centrífuga por el giro lo <strong>lanza fuera del eje del tubo</strong>.","Mientras gira dentro del tubo, las paredes impiden ese bamboleo (hasta donde lo permiten las holguras); al salir, ya nada lo contiene."+pg(345));
add(T1,"Regla","¿Por qué interesa al balístico el desvío lateral y qué se busca hacer con él?","Porque produce <strong>imprecisión del arma</strong>; no es práctico eliminarlo del todo, así que se busca <strong>reducirlo a niveles aceptables</strong>.","Es el primer componente de por qué el vector velocidad no sale alineado con el eje del tubo; el otro es el swerve del capítulo 13."+pg(345));
add(T1,"Regla","Modelo de vacío del desvío lateral: ¿cómo es la fuerza sobre el centro de gravedad desplazado?","Es la <strong>fuerza centrífuga</strong> del giro: de <strong>magnitud constante</strong> (no hay aceleración angular) pero de <strong>dirección que rota</strong> con el proyectil.","Se ignoran gravedad y arrastre y se trabaja en el plano complejo, con radio e (desplazamiento del centro de gravedad) y ángulo pt."+pg("345–346"));
add(T1,"Caso","Con estría derecha y el desplazamiento del centro de gravedad saliendo a las 12, ¿hacia dónde tiende a moverse el proyectil por el desvío lateral?","Hacia la <strong>derecha</strong>: es la llamada <strong>deriva</strong>.","Ejemplo del libro: proyectil de 100 lbm, 270 Hz de giro y 0,25 in de desplazamiento; la velocidad inicial correspondiente es de unos 2750 ft/s."+pg(347));
// 12.2
add(T2,"Regla","Desequilibrio estático: ¿qué trayectoria describe el centro de gravedad mientras el proyectil avanza por el tubo?","Una <strong>hélice</strong>, como la rosca de un tornillo, pero con <strong>paso creciente</strong> porque la velocidad axial aumenta.","El libro lo expresa en coordenadas cilíndricas: distancia axial, radio e del centro de gravedad y ángulo Φ."+pg(348));
add(T2,"Regla","¿Cómo se calcula el desvío lateral en la boca por un desequilibrio estático?",fm("T L ≈ e·p ÷ V")+"Es la <strong>tangente</strong> del ángulo entre la velocidad del centro de gravedad y el eje: velocidad tangencial e·p sobre velocidad axial V. Para ángulos chicos, es el ángulo en radianes.","Su dirección la fija la orientación Φ₀ del desplazamiento al salir; con banda de forzamiento también puede escribirse con el calibre y el paso de estría."+pg(349));
add(T2,"Caso","Desequilibrio estático: si se duplica el giro del proyectil sin cambiar la velocidad ni el desplazamiento del centro de gravedad, ¿qué pasa con el desvío lateral en la boca?","Se <strong>duplica</strong>, porque es proporcional a <strong>e·p ÷ V</strong>.","El desvío crece con el desplazamiento e y con el giro p, y disminuye con la velocidad de salida V."+pg(349));
add(T2,"Distinción","¿Cuál de los dos desequilibrios de masa es más común en producción y qué efectos produce?","El <strong>dinámico</strong> es el caso más común: produce <strong>desvío lateral</strong> en la boca y además <strong>efectos dinámicos</strong> importantes en el vuelo.<br>El <strong>estático</strong> rara vez ocurre en producción.","El desequilibrio dinámico se modela como una pequeña masa quitada del proyectil en un punto fuera del centro de gravedad (método de McCoy)."+pg("348–349"));
// 12.3
add(T3,"Regla","Desequilibrio dinámico: ¿qué nuevo término aparece en la ecuación del movimiento angular y qué produce?","Un <strong>término forzante</strong> que depende del <strong>giro</strong> y de la <strong>asimetría de masa</strong>; produce un <strong>brazo de equilibrio</strong> adicional que gira con el proyectil.","La solución suma a los brazos rápido y lento un tercer término de fase Φ; en general este brazo de equilibrio es pequeño."+pg("352–353"));
add(T3,"Regla","Desequilibrio dinámico: ¿qué simplificaciones usa el libro para obtener el brazo de equilibrio?","<ul><li>Masa quitada <strong>mucho menor</strong> que la del proyectil</li><li>Guiñada chica y velocidad de guiñada mucho menor que el giro</li><li>Sólo el <strong>momento de vuelco</strong> en un tramo corto de vuelo</li><li>Momentos de inercia de un cuerpo <strong>simétrico</strong></li></ul>","En sentido estricto la asimetría rompe la simetría axial, pero en la mayoría de los casos alcanza con usar I P e I T del cuerpo simétrico."+pg("349–353"));
}
});
})();
