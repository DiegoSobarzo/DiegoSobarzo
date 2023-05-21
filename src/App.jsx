import { useState } from 'react'
import './css/App.css'

function App() {
  const [cont,setCont] = useState(1)

  //Función para añadir un numero
  const addNumber = () =>{
    setCont(cont+1)
  }

  const restNumber = () =>{
    setCont(cont-1)
  }

  return (
    <>
      <h1 class="text-5xl font-bold underline">Diego Sobarzo</h1>

      <button class="btn btn--primary" onClick={addNumber}>Añade un Numero</button>
      <button onClick={restNumber}>Borra un numero</button>
      <p>{cont}</p>
    </>
  )
}

export default App
