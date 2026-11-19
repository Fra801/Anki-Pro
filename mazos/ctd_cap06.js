/* Balística: teoría y diseño de armas y municiones (Carlucci y Jacobson) — Capítulo 6: Frenado del retroceso y cañones sin retroceso. Generado con tools/tabla_a_mazo.py. */
(function () {
const { fm, pg, flujo, grupos, tabla } = window.ADM;
const T1 = "6.1 · Arresto del retroceso", T2 = "6.2 · Frenos de boca", T3 = "6.4 · Cañones sin retroceso", T4 = "6.5 · Balística de cañones sin retroceso";

(window.DECKS = window.DECKS || []).push({
id: "ctd06", idp: "c6:", kind: "temas", theme: "admin",
group: "Balística: teoría y diseño de armas y municiones (Carlucci y Jacobson)", groupId: "ctd", groupSub: "Donald E. Carlucci y Sidney S. Jacobson · 3ª ed., CRC Press 2018 · Partes 1 y 2: balística interior y exterior",
title: "06 · Frenado del retroceso y cañones sin retroceso",
sub: "Capítulo 6 · Libro, pp. 195–202",
head: "Balística interior · Cap. 6 · Frenado del retroceso y cañones sin retroceso",
build(add){
add(T1,"Regla","Arresto del retroceso: si se disminuye la masa del conjunto en retroceso manteniendo constante la carrera, ¿qué sucede con la fuerza de frenado?","La fuerza de frenado requerida <strong>aumenta de forma inversamente proporcional</strong> a la masa móvil.","El impulso de retroceso se conserva durante el evento balístico. Una masa menor que retrocede adquiere mayor velocidad y energía cinética, requiriendo un sistema de freno hidráulico que aplique una fuerza sustancialmente más elevada para detenerla en la misma longitud."+pg("195–196"));
add(T2,"Regla","Frenos de boca: ¿de qué manera reduce un freno de boca el momento total de retroceso?","Redirigiendo parte del <strong>impulso frontal de los gases de escape</strong> hacia los lados o hacia atrás.","Los gases de combustión abandonan la boca del tubo a velocidades sensiblemente mayores a las del proyectil. Al chocar contra deflectores perpendiculares al eje, generan un empuje dinámico hacia adelante que anula entre un 30% y 50% del retroceso."+pg("196–197"));
add(T3,"Definición","Cañones sin retroceso: ¿cuál es el principio de funcionamiento de un cañón sin retroceso (<em>recoilless gun</em>)?","Expulsar una masa cuantificada de <strong>gas a alta velocidad hacia atrás</strong> por una tobera en la culata para equilibrar el retroceso del proyectil.","Al permitir que una fracción calculada de los gases de combustión escape por la tobera trasera del arma, la fuerza de reacción generada hacia adelante compensa exactamente el momento de disparo del proyectil hacia el frente."+pg("198–199"));
add(T4,"Excepción","Balística de cañones sin retroceso: ¿qué desventaja de rendimiento energético presentan las armas sin retroceso frente a los cañones cerrados?","Requieren entre <strong>dos y tres veces más propulsor</strong> y tienen una <strong>eficiencia balística reducida</strong> (cercana al 10%).","Debido a que una porción significativa del propulsor se quema únicamente para producir el chorro de gas posterior de compensación (<em>back blast</em>), la mayor parte de la energía química se desperdicia, obligando a emplear cargas de proyección de gran volumen."+pg("200–202"));
}
});
})();
