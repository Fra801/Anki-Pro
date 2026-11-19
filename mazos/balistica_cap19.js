/* Applied Ballistics for Long Range Shooting (Bryan Litz, 3ª ed.) — Capítulo 19: Rendimiento balístico de las balas de rifle. */
(function () {
const { fm, pg, flujo, grupos, tabla } = window.ADM;
const T1 = "19.1 · La biblioteca de datos de balas", T2 = "19.2 · Cómo leer la ficha de una bala";

(window.DECKS = window.DECKS || []).push({
id: "ab19", idp: "b19:", kind: "temas", theme: "admin",
group: "Balística aplicada al tiro de largo alcance (Bryan Litz)", groupId: "ab", groupSub: "Bryan Litz · 3ª ed., Applied Ballistics 2015",
title: "19 · Rendimiento balístico de las balas de rifle",
sub: "Capítulo 19 · Libro, pp. 357–372",
head: "Balística · Cap. 19 · Datos de balas",
build(add){
// 19.1
add(T1,"Dato","¿Dónde publica Litz su biblioteca de datos de balas medidos y por qué salió de este libro?","En el libro <strong>Ballistic Performance of Rifle Bullets</strong> y en el software de Applied Ballistics (aplicaciones móviles, Kestrel y otros equipos); salió del libro porque la biblioteca pasó de unas 150 balas a <strong>más de 400</strong> y ya no cabía como apéndice.","Esta tercera edición sólo incluye las métricas básicas (densidad seccional, BC y factor de forma G7) de 533 balas."+pg(357));
add(T1,"Regla","¿Por qué importa una biblioteca de datos de balas medidos en disparos reales?","Porque todo cálculo balístico está <strong>limitado por la exactitud de sus datos de entrada</strong>, y los datos de la bala son muy importantes y difíciles de conocer.","La biblioteca surge de las pruebas continuas del Applied Ballistics Laboratory."+pg("357–358"));
add(T1,"Dato","¿Para qué sirven principalmente los datos de balas del libro de rendimiento balístico?","<ol><li><strong>Comparar</strong> las balas disponibles y elegir la mejor para el rifle y la aplicación</li><li>Modelar con <strong>alta exactitud</strong> la trayectoria de la bala elegida</li></ol>","También sirven para diseñar recámaras a medida, comparar requisitos de estabilidad y ver cómo varían los BC G1 y G7 con la velocidad."+pg(358));
// 19.2
add(T2,"Dato","¿Para qué sirven los dibujos acotados de cada bala?","<ul><li>Ver cómo debe <strong>asentarse</strong> para entrar en el cargador</li><li>Ayudar a diseñar una <strong>recámara a medida</strong></li><li>Ver cuán agresiva es la ojiva, indicio de su <strong>sensibilidad a la profundidad de asiento</strong></li><li>Hacer modelos <strong>aerodinámicos o de masa</strong></li></ul>","Indican también el diámetro de la estría sobre la superficie de apoyo y el punto de la nariz que coincide con el diámetro del ánima."+pg("358–359"));
add(T2,"Regla","¿Qué dimensión de la bala es la más variable entre lotes y con qué tolerancia se miden el largo y el ángulo del culote?","El <strong>diámetro del meplat</strong> es lo que más varía entre lotes. El largo puede variar unas <strong>±0,010 pulgadas</strong> dentro de un lote (más en puntas huecas) y el ángulo del culote se mide con unos <strong>±0,5 grados</strong>.","El radio de la ojiva se repite dentro de unos ±0,15 calibres. Por eso las cotas deben tomarse como guía."+pg(359));
add(T2,"Caso","Una bala .243 tiene una ojiva de radio 3,627 pulgadas. ¿Cuánto mide ese radio en calibres?","Unos <strong>14,9 calibres</strong>.",fm("3,627 ÷ 0,243 ≈ 14,9")+"Un radio largo para el calibre suele indicar menor arrastre."+pg(360));
add(T2,"Distinción","Relación Rt/R cercana a 1,0 y cercana a 0,5: ¿qué indica cada una sobre la bala?","<strong>Cerca de 1,0</strong> (tangente): precisión <strong>fácil</strong>, poco sensible a cómo se carga, pero no necesariamente alto BC.<br><strong>Cerca de 0,5</strong> (secante, tipo VLD): <strong>menor arrastre y alto BC</strong>, pero más <strong>sensible a la profundidad de asiento</strong>.","La ojiva híbrida de Berger es tangente donde toca las estrías y secante más adelante, para combinar lo mejor de ambas."+pg(360));
}
});
})();
