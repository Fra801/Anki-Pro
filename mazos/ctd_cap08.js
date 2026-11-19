/* Ballistics: Theory and Design of Guns and Ammunition (Carlucci y Jacobson, 3ª ed.) — Capítulo 8: Repaso de dinámica. */
(function () {
const { fm, pg, flujo, grupos, tabla } = window.ADM;
const T1 = "8.1 · Vectores", T2 = "8.2 · Cinemática de una partícula", T3 = "8.3 · Cinemática del cuerpo rígido";

(window.DECKS = window.DECKS || []).push({
id: "ctd08", idp: "c8:", kind: "temas", theme: "admin",
group: "Balística: teoría y diseño de armas y municiones (Carlucci y Jacobson)", groupId: "ctd", groupSub: "Donald E. Carlucci y Sidney S. Jacobson · 3ª ed., CRC Press 2018 · Partes 1 a 3: balística interior, exterior y terminal",
title: "08 · Repaso de dinámica",
sub: "Capítulo 8 · Libro, pp. 221–236",
head: "Balística exterior · Cap. 8 · Repaso de dinámica",
build(add){
// 8.1
add(T1,"Regla","¿Por qué la balística exterior necesita un repaso de dinámica?","Porque la dinámica del proyectil influye mucho en su vuelo: por ejemplo, el <strong>efecto Coriolis</strong> en trayectorias largas o los cambios de arrastre por los movimientos de <strong>precesión y nutación</strong>.","El análisis se hace mejor con vectores, por eso el capítulo empieza por ellos."+pg(221));
add(T1,"Distinción","Vector y escalar: ¿qué diferencia hay y cuándo son iguales dos vectores?","<strong>Escalar</strong>: sólo una magnitud numérica.<br><strong>Vector</strong>: magnitud y dirección.<br>Dos vectores son <strong>iguales</strong> si tienen igual magnitud y dirección, aunque no partan del mismo punto: una traslación no los cambia.","Un escalar por un vector da un vector; todo vector puede escribirse como su magnitud por un vector unitario."+pg(221));
add(T1,"Distinción","Producto escalar y producto vectorial: ¿qué da cada uno y qué propiedades tienen?","<strong>Escalar</strong> (A · B = |A||B| cos θ): da un <strong>número</strong>; es conmutativo y vale cero entre vectores ortogonales.<br><strong>Vectorial</strong> (A × B = |A||B| sen θ eₙ): da un <strong>vector normal</strong> al plano de A y B; <strong>no es conmutativo</strong> (A × B = −B × A) pero sí distributivo.","Con vectores unitarios ortogonales: i × j = k, j × k = i, k × i = j."+pg("221–223"));
add(T1,"Regla","¿Qué pasa con la derivada temporal de un vector si el sistema de coordenadas se mueve?","No se pueden despreciar las <strong>derivadas de los vectores unitarios</strong>: aparecen términos adicionales, como los de <strong>Coriolis</strong> en una Tierra que rota.","En un sistema inercial (que no se mueve), sólo cambian las componentes."+pg(224));
// 8.2
add(T2,"Definición","¿Qué es la cinemática y qué supone la cinemática de una partícula?","El estudio del <strong>movimiento</strong> sin considerar las fuerzas que lo producen. La de una partícula representa el cuerpo con un <strong>punto</strong> y desprecia sus rotaciones: es un modelo de <strong>tres grados de libertad</strong>.","La velocidad es siempre tangente a la trayectoria y su magnitud es la rapidez sobre la curva."+pg(224));
add(T2,"Definición","¿Qué es una hodógrafa?","La curva que traza la <strong>punta del vector velocidad</strong> si en cada instante se coloca su origen en el origen de un sistema inercial; la velocidad de esa punta es la <strong>aceleración</strong>.","Es una forma de visualizar cómo cambia la velocidad."+pg(225));
add(T2,"Dato","En coordenadas polares (radial y tangencial), ¿qué cuatro términos componen la aceleración de una partícula?","<ul><li><strong>Aceleración radial</strong>: d²r/dt²</li><li><strong>Aceleración centrípeta</strong>: r (dθ/dt)²</li><li><strong>Aceleración angular</strong>: r d²θ/dt²</li><li><strong>Aceleración de Coriolis</strong>: 2 (dr/dt)(dθ/dt)</li></ul>",fm("a = [r̈ − r θ̇²] e r + [r θ̈ + 2 ṙ θ̇] e θ")+"La velocidad tiene componente radial dr/dt y tangencial r dθ/dt."+pg("227–228"));
// 8.3
add(T3,"Regla","En una traslación pura de un cuerpo rígido, ¿cómo se relacionan la velocidad y la aceleración de dos de sus puntos?","Son <strong>iguales</strong>: como el cuerpo no rota, la posición relativa entre los puntos no cambia.","Es el caso más simple de la cinemática del cuerpo rígido."+pg(229));
add(T3,"Regla","¿Cómo se calcula la velocidad de un punto de un cuerpo rígido que rota alrededor de un eje fijo?",fm("v = ω × r")+"Su aceleración tiene una componente <strong>normal</strong> (centrífuga, ω²r, hacia el eje) y otra <strong>tangencial</strong> (αr).","ω es la velocidad angular (derivada del ángulo) y α la aceleración angular."+pg("229–231"));
add(T3,"Regla","¿Cómo se describe el movimiento plano general de un cuerpo rígido?","Como una <strong>traslación</strong> de un punto de referencia más una <strong>rotación</strong> alrededor de ese punto.",fm("v B = v A + ω × r B/A")+"Si el sistema de referencia además rota, aparecen la velocidad relativa vista desde ese sistema y un término de Coriolis."+pg("231–234"));
add(T3,"Dato","Para un sistema de coordenadas que se traslada y rota, ¿qué términos componen la aceleración de un punto de un cuerpo rígido?","<ul><li>La aceleración del <strong>punto de referencia</strong></li><li>La aceleración <strong>relativa</strong> vista desde el sistema móvil</li><li>El término de <strong>Coriolis</strong>: 2 ω × v relativa</li><li>El término de <strong>aceleración angular</strong>: α × r</li><li>El término <strong>centrípeto</strong>: ω × (ω × r)</li></ul>","En tres dimensiones los principios son los mismos, pero las expresiones se complican mucho (tabla 8.1)."+pg(235));
}
});
})();
