/* Ballistics: Theory and Design of Guns and Ammunition (Carlucci y Jacobson, 3ª ed.) — Capítulo 11: Asimetrías de masa. */
(function () {
const { pg } = window.ADM;
const T1 = "11.1 · Desequilibrio estático y dinámico";

(window.DECKS = window.DECKS || []).push({
id: "ctd11", idp: "c11:", kind: "temas", theme: "admin",
group: "Balística: teoría y diseño de armas y municiones (Carlucci y Jacobson)", groupId: "ctd", groupSub: "Donald E. Carlucci y Sidney S. Jacobson · 3ª ed., CRC Press 2018 · Partes 1 a 3: balística interior, exterior y terminal",
part: "Sección II · Balística exterior", partId: "ctdII",
title: "11 · Asimetrías de masa",
sub: "Capítulo 11 · Libro, pp. 341–344",
head: "Balística exterior · Cap. 11 · Asimetrías de masa",
build(add){
add(T1,"Dato","¿De dónde suelen venir las asimetrías de masa de un proyectil?","<ul><li><strong>Tolerancias de fabricación</strong></li><li><strong>Daños</strong> por manipulación brusca</li><li><strong>Desplazamiento de la carga</strong> interna</li><li>Diseños que son <strong>asimétricos a propósito</strong></li></ul>","Hasta este capítulo se supuso un cuerpo con simetría axial, lo que simplificaba mucho las ecuaciones; en la práctica los proyectiles rara vez lo son."+pg(341));
add(T1,"Distinción","¿Qué diferencia hay entre un desequilibrio estático y uno dinámico de un proyectil?","<strong>Estático</strong>: el centro de gravedad está fuera del eje geométrico y el eje principal de inercia queda <strong>paralelo</strong> a ese eje.<br><strong>Dinámico</strong>: además del desplazamiento del centro de gravedad, el eje principal de inercia queda <strong>inclinado</strong> respecto del eje geométrico.","El eje geométrico se define imaginando un proyectil con la misma forma exterior pero de densidad uniforme (figuras 11.1 y 11.2)."+pg("341–342"));
add(T1,"Definición","Asimetría de masa: ¿qué indica el ángulo Φ?","El <strong>plano en que está el desplazamiento del centro de gravedad</strong>, medido respecto de un plano de referencia (el plano x–y), visto desde atrás del proyectil.","Se usa igual para desequilibrios estáticos y dinámicos (figura 11.3)."+pg(341));
add(T1,"Regla","¿Por qué una asimetría de masa afecta la precisión, sobre todo en el tiro directo?","Porque dentro del tubo el proyectil está <strong>obligado a girar alrededor del eje del tubo</strong> (idealmente, su eje geométrico) y no alrededor de su eje de inercia; al salir queda libre y la asimetría altera su vuelo.","Hay mucha bibliografía sobre la situación real, con tubo flexible y holguras."+pg(341));
// Ampliación: tarjetas agregadas para cubrir el capítulo completo
add(T1,"Definición","Asimetrías de masa: ¿cómo se define el eje geométrico de simetría de un proyectil desequilibrado?","Como el eje de un proyectil <strong>imaginario de las mismas dimensiones exteriores</strong> pero de <strong>densidad uniforme</strong>: queda en el centro del cuerpo de revolución.","En un proyectil con desequilibrio estático, el eje principal de inercia se desplaza para pasar por el centro de gravedad pero queda paralelo a ese eje geométrico."+pg(341));
add(T1,"Dato","Asimetrías de masa: ¿qué representan los símbolos ε y φ en las figuras del libro?","<strong>ε</strong> es el <strong>desplazamiento del centro de gravedad</strong> respecto del eje geométrico.<br><strong>φ</strong> es el <strong>ángulo del eje principal de inercia</strong> respecto del eje geométrico, que sólo aparece en el desequilibrio dinámico.","El tercer parámetro, Φ, indica en qué plano está el desplazamiento del centro de gravedad, visto desde atrás."+pg(342));
add(T1,"Regla","Proyectil desequilibrado dentro del tubo: ¿qué idealización hace el libro?","Supone un tubo <strong>perfectamente recto, inflexible</strong> y que <strong>ajusta exactamente</strong> al proyectil, de modo que éste gira alrededor de su propio <strong>eje geométrico</strong>.","El libro aclara que hay mucha literatura dedicada a la situación real del proyectil en el ánima, con holguras y movimientos del tubo."+pg(341));
add(T1,"Regla","¿Qué propósito tiene el capítulo de asimetrías de masa dentro de la parte de balística exterior?","Presentar la <strong>geometría</strong> de las asimetrías de masa, que después se incorpora en las <strong>ecuaciones del movimiento</strong> (desvío lateral y swerve).","Hasta este punto se había supuesto un proyectil con simetría axial, lo que simplificaba mucho las ecuaciones."+pg(341));
}
});
})();
