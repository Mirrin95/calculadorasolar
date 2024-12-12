import React, { useState } from "react";
import SolarCalculator from "./SolarCalculator";
import ValorProyecto from "./ValorProyecto";

function App() {
  const [paneles, setPaneles] = useState(0);

  return (
    <div>
      <SolarCalculator setPaneles={setPaneles} />
      <ValorProyecto paneles={paneles} />
    </div>
  );
}

export default App;
