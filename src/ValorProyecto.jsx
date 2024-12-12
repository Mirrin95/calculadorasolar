import React from "react";

function ValorProyecto({ paneles }) {
  const precioPorPanel = 1500000; // Precio en COP por panel
  const costoTotal = paneles * precioPorPanel;

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "20px auto" }}>
      <h2>Valor del Proyecto</h2>
      <p>
        <strong>Costo Total:</strong> {costoTotal.toLocaleString()} COP
      </p>
      <p style={{ color: "red", fontWeight: "bold" }}>
        * Este valor no incluye costos de traslado ni instalación.
      </p>
    </div>
  );
}

export default ValorProyecto;
