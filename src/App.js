import React, { useState, Component } from "react";
import Hols from "./componentes/saludos";
import Contador from "./componentes/contador";
function conteoInicial() {
  console.log('corre funcion')
  return 4  
}
const App = () => {
  const saludo = "holaaaa lali te amoooooo";
  const [monto, setMonto] = useState(() => (4));
  const [cuenta, setCuenta] = useState(() => conteoInicial());

  function decreaseCuenta() {
    setCuenta(cuenta - 1);
  }

  function aumentaCuenta() {
    setCuenta(cuenta + 1);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const cambiaState = (event) => {
         setMonto(event.target.monto);
  }
  
  return (
    <div>
      <button onClick={decreaseCuenta}>-</button>
      {cuenta}
      <button onClick={aumentaCuenta}>+</button>
      <br />
      <form onSubmit={handleSubmit} >
      <input type='text' placeholder="ingrese nuevo monto..." value={monto} onChange={cambiaState} />
      <input type='submit' value='Submit' />
      <button>Añade monto</button>
      </form>
       <ul>
              <li>
  
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
