/* Balística: teoría y diseño de armas y municiones (Carlucci y Jacobson) — Capítulo 1: Conceptos introductorios. Generado con tools/tabla_a_mazo.py. */
(function () {
const { fm, pg, flujo, grupos, tabla } = window.ADM;
const T1 = "1.1 · Disciplinas balísticas", T2 = "1.2 · Terminología fundamental", T3 = "1.2 · Clasificación de armas";

(window.DECKS = window.DECKS || []).push({
id: "ctd01", idp: "c1:", kind: "temas", theme: "admin",
group: "Balística: teoría y diseño de armas y municiones (Carlucci y Jacobson)", groupId: "ctd", groupSub: "Donald E. Carlucci y Sidney S. Jacobson · 3ª ed., CRC Press 2018 · Partes 1 y 2: balística interior y exterior",
title: "01 · Conceptos introductorios",
sub: "Capítulo 1 · Libro, pp. 4–5",
head: "Balística interior · Cap. 1 · Conceptos introductorios",
build(add){
add(T1,"Definición","Disciplinas balísticas: ¿qué estudia la balística interior?","La interacción del <strong>arma</strong>, el <strong>proyectil</strong> y la <strong>carga propulsora</strong> antes de que el proyectil salga de la boca del cañón.","La balística se clasifica habitualmente en tres disciplinas principales que abordan las distintas fases del disparo. La balística interior analiza los procesos termoquímicos de combustión del propulsor, el incremento de presión en la recámara y el movimiento in-bore del proyectil."+pg(4));
add(T1,"Distinción","Balística interior y balística exterior: ¿qué diferencia hay?","La balística interior analiza los fenómenos <strong>dentro del cañón</strong><br>La balística exterior estudia el vuelo del proyectil <strong>en la atmósfera</strong> hacia el objetivo.","La balística interior concluye en el instante en que la base del proyectil abandona la boca del tubo. A partir de ese momento, la balística exterior estudia la trayectoria influenciada por las fuerzas aerodinámicas y la gravedad."+pg(4));
add(T2,"Definición","Terminología fundamental: ¿cómo define térmicamente el libro a un arma de fuego en sentido genérico?","Un motor de combustión interna de <strong>un solo tiempo</strong> (<em>one-stroke internal combustion engine</em>).","En esta analogía termodinámica, el tubo del arma representa el cilindro del motor y la carga propulsora actúa como la mezcla de aire y combustible. El proyectil cumple la función del pistón que es impulsado por la expansión de los gases."+pg(4));
add(T3,"Dato","Clasificación de armas: ¿cuáles son las cuatro categorías principales de armas descritas en la balística interior?","<ul><li><strong>Arma de tiro directo</strong> (<em>true gun</em>)</li><li><strong>Obús</strong> (<em>howitzer</em>)</li><li><strong>Mortero</strong> (<em>mortar</em>)</li><li><strong>Cañón sin retroceso</strong> (<em>recoilless rifle</em>)</li></ul>","Estas categorías se diferencian según el ángulo de tiro empleado, la longitud del tubo y el mecanismo de absorción o mitigación del retroceso. Los morteros operan en ángulos de elevación muy altos, mientras que las armas directas tiran a baja elevación."+pg("4–5"));
}
});
})();
