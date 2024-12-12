import React, { useState } from "react";

function SolarCalculator({ setPaneles }) {
  const [consumo, setConsumo] = useState("");
  const [paneles, setPanelesLocal] = useState(0);
  const [area, setArea] = useState(0);

  const calcularPaneles = () => {
    const eficiencia = 0.2; // 20%
    const potencia = 400; // Wp
    const horasSol = 5; // Horas promedio
    const areaPorPanel = 2; // m²

    const energiaPorPanelDia = (potencia / 1000) * horasSol * eficiencia; // kWh/día
    const energiaPorPanelMes = energiaPorPanelDia * 30; // kWh/mes
    const numPaneles = Math.ceil(consumo / energiaPorPanelMes);
    const areaTotal = numPaneles * areaPorPanel;

    setPanelesLocal(numPaneles);
    setArea(areaTotal);
    setPaneles(numPaneles); // Pasar el valor de paneles al componente padre
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Calculadora Solar</h1>
      <label>
        Consumo Mensual (kWh):
        <input
          type="number"
          value={consumo}
          onChange={(e) => setConsumo(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </label>
      <button onClick={calcularPaneles} style={{ padding: "10px 20px" }}>
        Calcular
      </button>
      {paneles > 0 && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Paneles Requeridos:</strong> {paneles}
          </p>
          <p>
            <strong>Área Necesaria:</strong> {area} m²
          </p>
        </div>
      )}
    </div>
  );
}

export default SolarCalculator;
