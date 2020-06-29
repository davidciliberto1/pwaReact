import React, { useState, Component } from "react";
import Hols from "./componentes/saludos";
import Contador from "./componentes/contador";
// function conteoInicial() {
//   console.log('corre funcion')
  
//   return 0  
// }
const App = () => {
  const saludo = "holaaaa lali te amoooooo";
  const [state, setState] = useState({
    monto: '', 
    theme: 'blue'
    })
    const monto = state.monto
    const theme = state.theme
  const [cuenta, setCuenta] = useState(0);

  function decreaseCuenta() {
    setCuenta(cuenta - 1);
  }

  function aumentaCuenta() {
    setCuenta(prevCuenta => prevCuenta + 1);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const cambiaState = (event) => {
      event.preventDefault()
         setState(prevState => {
           return {
             ...prevState,
             monto: state.monto
           }
         });
  }
  console.log(cuenta)
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
