/* Ayudantes para escribir tarjetas de administración (tema "admin"). Generan HTML con comillas simples. */
(function () {
  const fm = t => `<div class='fm'>${t}</div>`;
  const pg = p => `<br><span class='pg'>Libro, p. ${p}</span>`;
  // flujo(["A","B",["C","aclaración"]], true) — el segundo dato marca un ciclo
  const flujo = (pasos, ciclo) => `<div class='fl${ciclo ? " ciclo" : ""}'>` + pasos.map(p => Array.isArray(p)
    ? `<span class='fl-p'>${p[0]}<small>${p[1]}</small></span>` : `<span class='fl-p'>${p}</span>`).join("<span class='fl-a'>→</span>") + "</div>";
  // grupos([["Título","detalle"],…])
  const grupos = gs => "<div class='gr'>" + gs.map(([t, d]) => `<div class='gr-i'><b>${t}</b><span>${d}</span></div>`).join("") + "</div>";
  // tabla(["", "A", "B"], [["Criterio","…","…"],…])
  const tabla = (h, filas) => "<table class='cmp'><tr>" + h.map(x => `<th>${x}</th>`).join("") + "</tr>" +
    filas.map(f => "<tr>" + f.map(x => `<td>${x}</td>`).join("") + "</tr>").join("") + "</table>";
  // matriz("eje horizontal","eje vertical",[[t,d]×4]) en orden: arriba-izq, arriba-der, abajo-izq, abajo-der
  const matriz = (ejeX, ejeY, cs) => "<div class='mx'>" + cs.map(([t, d]) => `<div class='mx-c'><b>${t}</b>${d}</div>`).join("") +
    `</div><div class='mx-ej'><span>↕ ${ejeY}</span><span>${ejeX} ↔</span></div>`;
  window.ADM = { fm, pg, flujo, grupos, tabla, matriz };
})();
