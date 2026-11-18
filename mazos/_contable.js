/* Ayudantes para escribir tarjetas de contabilidad con los componentes de estilos/contable.css.
   Generan HTML con comillas simples (las dobles no se usan dentro de las tarjetas). */
window.CONT = (function () {
  const K = { A: ["ac", "Activo"], P: ["pa", "Pasivo"], PN: ["pn", "Patrimonio"], R: ["in", "Resultado"] };
  // Ecuación en bloques: eq(["ac","Activos"],"=",["pa","Pasivos"],"+",["pn","Patrimonio"])
  function eq(...parts) {
    return "<div class='eq'>" + parts.map(p => Array.isArray(p)
      ? `<span class='eq-t ${p[0]}'>${p[1]}${p[2] ? `<small>${p[2]}</small>` : ""}</span>`
      : `<span class='eq-o'>${p}</span>`).join("") + "</div>";
  }
  const EQ = eq(["ac", "Activos"], "=", ["pa", "Pasivos"], "+", ["pn", "Patrimonio"]);
  // Efectos de una transacción: fx([["A","Efectivo","+€15.000"],["PN","Capital social","+€15.000"]], "nota opcional")
  function fx(rows, nota) {
    return "<div class='fx'>" + rows.map(([k, cta, v]) => {
      const [cls, lbl] = K[k];
      const dir = /^\+/.test(v) ? "up" : /^[−-]/.test(v) ? "dn" : "eq0";
      return `<div class='fx-r'><span class='fx-k ${cls}'>${lbl}</span><span>${cta}</span><span class='fx-v ${dir}'>${v}</span></div>`;
    }).join("") + (nota ? `<div class='fx-n'>${nota}</div>` : "") + "</div>";
  }
  // Estado financiero: est("Softbyte SA","Estado de resultados","Mes terminado…",[["s","Ingresos"],["","Ingresos por servicios","€4.700"],["ind","Sueldos","€900"],["sub","Total gastos","1.950"],["tot","Utilidad neta","€2.750"]])
  function est(emp, nombre, periodo, filas) {
    return `<div class='est'><div class='est-h'><b>${emp}</b><span>${nombre}</span><span>${periodo}</span></div>` +
      filas.map(([t, a, b]) => t === "s" ? `<div class='est-s'>${a}</div>`
        : `<div class='est-r ${t}'><span>${a}</span><span>${b || ""}</span></div>`).join("") + "</div>";
  }
  // Asiento: asiento([["Efectivo","15.000",""],["Capital social","","15.000"]],"glosa")
  function asiento(lineas, glosa) {
    return "<table class='as'><tr><th>Cuenta</th><th>Debe</th><th>Haber</th></tr>" +
      lineas.map(([c, d, h]) => `<tr class='${h && !d ? "cr" : ""}'><td>${c}</td><td class='m'>${d}</td><td class='m'>${h}</td></tr>`).join("") +
      (glosa ? `<tr class='gl'><td colspan='3'>${glosa}</td></tr>` : "") + "</table>";
  }
  const fm = t => `<div class='fm'>${t}</div>`;
  const pg = p => `<br><span class='pg'>Libro, p. ${p}</span>`;
  return { eq, EQ, fx, est, asiento, fm, pg };
})();
