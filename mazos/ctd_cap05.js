/* Balística: teoría y diseño de armas y municiones (Carlucci y Jacobson) — Capítulo 5: Práctica de diseño de armas. Generado con tools/tabla_a_mazo.py. */
(function () {
const { fm, pg, flujo, grupos, tabla } = window.ADM;
const T1 = "5.2 · Diseño del tubo del cañón", T2 = "5.2 · Proceso de autofretaje", T3 = "5.4 · Dispositivos de boca", T4 = "5.5 · Armas operadas por gas";

(window.DECKS = window.DECKS || []).push({
id: "ctd05", idp: "c5:", kind: "temas", theme: "admin",
group: "Balística: teoría y diseño de armas y municiones (Carlucci y Jacobson)", groupId: "ctd", groupSub: "Donald E. Carlucci y Sidney S. Jacobson · 3ª ed., CRC Press 2018 · Partes 1 y 2: balística interior y exterior",
title: "05 · Práctica de diseño de armas",
sub: "Capítulo 5 · Libro, pp. 164–185",
head: "Balística interior · Cap. 5 · Práctica de diseño de armas",
build(add){
add(T1,"Regla","Diseño del tubo del cañón: ¿qué límite de presión interna pi exige la ecuación de Lamé para evitar la fluencia Y en un tubo monobloque?","pi debe mantenerse estrictamente menor a <strong>0.58 Y</strong>.","Para un tubo cilíndrico de pared simple sin preesfuerzos, la relación de espesor de pared tiende asintóticamente al infinito cuando la presión bordea el 57.7% del límite elástico del material. Presiones superiores requieren técnicas avanzadas de manufactura."+pg("164–165"));
add(T2,"Definición","Proceso de autofretaje: ¿en qué consiste la técnica de autofretaje (<em>autofrettage</em>) en la fabricación de cañones?","En aplicar una <strong>presión hidráulica extrema</strong> que plastifica la capa interna del tubo, dejando tensiones residuales de compresión.","Al inducir deformación plástica en las capas internas del ánima, la estructura externa elástica comprime permanentemente el interior al liberar la presión. Esto compensa las presiones de disparo futuras y prolonga la vida útil a la fatiga."+pg("164–165"));
add(T3,"Dato","Dispositivos de boca: ¿cuáles son los tres objetivos funcionales para instalar dispositivos de boca en el arma?","<ul><li><strong>Reducir el retroceso</strong></li><li><strong>Mitigar el fogonazo</strong></li><li><strong>Disminuir el estampido</strong> (<em>report</em>)</li></ul>","Los frenos de boca redirigen los gases de salida lateralmente para contrarrestar la fuerza de retroceso. Los apagafuegos dispersan o enfrían la mezcla de gas no combustionado para evitar destellos perceptibles durante operaciones nocturnas."+pg("175–176"));
add(T4,"Regla","Armas operadas por gas: ¿cuándo se inicia la toma de gas (<em>gas port</em>) para activar el mecanismo de recarga automática?","En el momento exacto en que la <strong>base del proyectil sobrepasa el orificio de toma de gas</strong> en el ánima.","El puerto lateral en el tubo conecta la cavidad a alta presión detrás del proyectil con el cilindro del pistón. La entrada de gases impulsa el vástago hacia atrás, desbloqueando el cierre y expulsando el casquillo percutido."+pg("183–185"));
}
});
})();
