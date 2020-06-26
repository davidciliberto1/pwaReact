import React, { useState, Component } from "react";
import Hols from "./componentes/saludos";
import Contador from "./componentes/contador";

const App = () => {
  const saludo = "holaaaa lali te amoooooo";
  const [monto, setMonto] = useState(2);
  const [cuenta, setCuenta] = useState(4);

  function decreaseCuenta() {
    setCuenta(cuenta - 1);
  }

  function aumentaCuenta() {
    setCuenta(cuenta + 1);
  }
  function cambiaState() {
         setMonto()
  }
  return (
    <div>
      <button onClick={decreaseCuenta}>-</button>
      {cuenta}
      <button onClick={aumentaCuenta}>+</button>
      <br />
      <input type='text' placeholder="ingrese nuevo monto..." onChange={cambiaState}></input>
      <button>Añade monto</button>

       <ul>
              <li>
                     {monto}
              </li>
       </ul>

      <Hols />
      {saludo}
      <br />
      Holiiis
    </div>
  );
};

export default App;
