// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import Cabecera from './components/Cabecera'
import Listado from './components/Listado'
import React from 'react'
import { useState } from 'react'
import './index.css'


function App() {

  const [total, setTotal] = useState(
    {
      stock: 0,
      quantity: 0
    }
  );

  

  return (
    <div className="App">
      <Cabecera total={total} />
     <Listado total={total} setTotal={setTotal} /> 
    </div>
  );
}

export default App;
