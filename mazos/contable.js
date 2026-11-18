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
  // Cuenta T: cuentaT("Efectivo", [["1/10","10.000"],["2/10","1.200"]], [["3/10","900"]], ["Saldo","10.300","D"])
  function cuentaT(titulo, debe, haber, saldo) {
    const col = xs => xs.map(([f, v]) => `<div class='tac-l'><span>${f}</span><span>${v}</span></div>`).join("");
    const s = saldo ? `<div class='tac-l tac-s'><span>${saldo[0]}</span><span>${saldo[1]}</span></div>` : "";
    return `<div class='tac'><div class='tac-h'>${titulo}</div><div class='tac-b'><div>${col(debe)}${saldo && saldo[2] !== "H" ? s : ""}</div><div>${col(haber)}${saldo && saldo[2] === "H" ? s : ""}</div></div><div class='tac-cap'><span>Debe</span><span>Haber</span></div></div>`;
  }
  // Reglas: reglas([["Activos","D","H","Deudor"],...]) — D = se registra en el Debe, H = en el Haber
  function reglas(filas) {
    const c = x => x === "D" ? "<span class='d'>Debe</span>" : "<span class='h'>Haber</span>";
    return "<table class='rg'><tr><th>Cuenta</th><th>Aumenta</th><th>Disminuye</th><th>Saldo normal</th></tr>" +
      filas.map(([n, a, d, s]) => `<tr><td>${n}</td><td>${c(a)}</td><td>${c(d)}</td><td>${s}</td></tr>`).join("") + "</table>";
  }
  const fm = t => `<div class='fm'>${t}</div>`;
  const pg = p => `<br><span class='pg'>Libro, p. ${p}</span>`;
  return { eq, EQ, fx, est, asiento, cuentaT, reglas, fm, pg };
})();
