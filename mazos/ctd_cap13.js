/* Ballistics: Theory and Design of Guns and Ammunition (Carlucci y Jacobson, 3ª ed.) — Capítulo 13: Movimiento de swerve. */
(function () {
const { pg, grupos } = window.ADM;
const T1 = "13.1 · Swerve y salto aerodinámico", T2 = "13.2 · Swerve epicíclico", T3 = "13.3 · Deriva por giro";

(window.DECKS = window.DECKS || []).push({
id: "ctd13", idp: "c13:", kind: "temas", theme: "admin",
group: "Balística: teoría y diseño de armas y municiones (Carlucci y Jacobson)", groupId: "ctd", groupSub: "Donald E. Carlucci y Sidney S. Jacobson · 3ª ed., CRC Press 2018 · Partes 1 a 3: balística interior, exterior y terminal",
part: "Sección II · Balística exterior", partId: "ctdII",
title: "13 · Movimiento de swerve",
sub: "Capítulo 13 · Libro, pp. 355–362",
head: "Balística exterior · Cap. 13 · Movimiento de swerve",
build(add){
// 13.1
add(T1,"Regla","¿Por qué un proyectil con asimetría de masa sufre fuerzas aerodinámicas considerables al desplazarse de costado?","Porque el movimiento lateral respecto de la trayectoria se traduce en un <strong>ángulo de ataque</strong>, y todos los coeficientes aerodinámicos (sobre todo la sustentación) <strong>dependen de ese ángulo</strong>.","Las figuras 13.1 y 13.2 muestran, muy exageradas, las trayectorias vistas desde arriba de proyectiles con desequilibrio estático y dinámico."+pg(355));
add(T1,"Regla","¿Qué asimetrías, además de las de masa, producen movimiento de swerve?","Las <strong>asimetrías de forma</strong> o de configuración, como <strong>aletas dobladas</strong> o formas dañadas; en mayor o menor grado, todo proyectil combina asimetrías de forma y de masa.","Producen un comportamiento parecido aun sin asimetría de masa."+pg(355));
add(T1,"Dato","¿Cuáles son los tres componentes del movimiento de swerve?",grupos([["Salto aerodinámico","Medida angular que depende de las condiciones iniciales"],["Swerve epicíclico","Movimiento del centro de masa ligado a la guiñada"],["Deriva","Desvío lateral constante por el giro"]]),"Salen de la solución de McCoy para la masa puntual más el swerve, en tiro tenso."+pg(358));
add(T1,"Regla","¿De qué depende el salto aerodinámico de un proyectil y qué tipo de magnitud es?","Depende <strong>por completo de las condiciones iniciales</strong> (guiñada y velocidad de guiñada al salir) y de cómo se acoplan con las frecuencias de los brazos rápido y lento.<br>Es una <strong>medida angular</strong>: en la ecuación aparece multiplicado por la distancia recorrida.","Conociendo las propiedades de masa y las condiciones de lanzamiento se puede calcular cuánto «salta» el proyectil."+pg(358));
add(T1,"Regla","¿Cuál es la física detrás del salto aerodinámico?","La <strong>sustentación aerodinámica</strong>: cuando el proyectil guiña (por giro o por una asimetría), cambia el ángulo de ataque y las fuerzas aerodinámicas desvían su trayectoria, mejorando o empeorando la situación.","Se representa con el ángulo de salto de la figura 13.3."+pg(358));
// 13.2
add(T2,"Regla","Swerve epicíclico de un proyectil sin giro (estabilizado por aletas): ¿cómo se relaciona con la guiñada?","El swerve queda <strong>trabado a la guiñada</strong> y actúa en el <strong>mismo plano fijo</strong>, porque la sustentación nunca rota: ambos se amortiguan juntos y <strong>a más guiñada, más swerve</strong>.","Se comporta igual que el salto aerodinámico."+pg(360));
add(T2,"Distinción","¿Cómo difiere el swerve epicíclico de un proyectil estabilizado por giro del de uno sin giro?","<strong>Con giro</strong>: el vector sustentación <strong>rota</strong>, así que el centro de masa describe una <strong>hélice</strong> alrededor de la trayectoria, ligada al giro del <strong>brazo lento</strong> y que crece o se amortigua con él.<br><strong>Sin giro</strong>: swerve y guiñada quedan en un plano fijo.","El caso con giro supone estabilidad giroscópica en la boca de al menos 1,5."+pg("359–360"));
// 13.3
add(T3,"Distinción","¿Hacia dónde deriva por giro un proyectil estabilizado por aletas y uno estabilizado por giro?","<strong>Aletas o arrastre</strong> (M &lt; 0): deriva <strong>en sentido opuesto al giro</strong> (giro a la izquierda, deriva a la derecha).<br><strong>Estabilizado por giro</strong> (M &gt; 0): deriva <strong>en el mismo sentido que el giro</strong>.<br>Sin giro (P = 0) <strong>no hay deriva</strong>.","Se ve en la expansión en serie de la ecuación de la deriva."+pg(361));
add(T3,"Caso","¿Cómo se ha medido la deriva por giro, tan chica comparada con el swerve y la deriva de Coriolis?","Disparando <strong>a la vez dos proyectiles</strong> desde cañones contiguos con estría <strong>derecha e izquierda</strong>, para cancelar la deriva de Coriolis y la del viento.","La deriva por giro es muy pequeña frente a los otros componentes del swerve y frente al efecto Coriolis."+pg(361));
// Ampliación: tarjetas agregadas para cubrir el capítulo completo
add(T1,"Regla","Movimiento de swerve: ¿sobre qué supuestos se escribe la posición del proyectil perpendicular a la trayectoria?","Sobre los de <strong>masa puntual en tiro tenso</strong>, a los que McCoy agrega los términos del swerve.","Sustituyendo la solución del movimiento angular del capítulo 10 en la integral doble, la expresión se separa en salto aerodinámico, swerve epicíclico y deriva."+pg("355–356"));
add(T1,"Regla","Salto aerodinámico: ¿qué datos permiten calcular su ángulo?","Las <strong>propiedades de masa</strong> del proyectil y sus <strong>condiciones de lanzamiento</strong>, usando las amplitudes iniciales aproximadas de los brazos rápido y lento.","Por eso el salto aerodinámico depende por completo de las condiciones iniciales y de cómo se acoplan con las frecuencias de giro de los brazos."+pg(358));
add(T2,"Dato","Swerve epicíclico: ¿qué dos casos particulares analiza el libro siguiendo a McCoy?","Un proyectil <strong>sin giro</strong> (estáticamente estable) y uno <strong>estabilizado por giro</strong> con buena estabilidad giroscópica en la boca, de <strong>al menos 1,5</strong>.","En el primero el swerve queda trabado a la guiñada en un plano fijo; en el segundo, el centro de masa describe una hélice alrededor de la trayectoria ligada al brazo lento."+pg("359–360"));
add(T3,"Regla","Deriva por giro: ¿qué ventaja tiene expandir la expresión de la deriva en serie de potencias?","Que permite ver de inmediato su <strong>sentido y sus casos</strong>: sin giro no hay deriva, con momento de vuelco negativo deriva en sentido opuesto al giro y con momento positivo, en el mismo sentido.","El libro remite al texto de McCoy para más detalles sobre la deriva."+pg(361));
}
});
})();
