import { useState } from 'react'
import './App.css'

function App() {
  const [contra, setContra] = useState("")

  function generar(longitud) {
    var contraFinal = "";
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let index = 0; index < longitud; index++) {
      contraFinal += chars.charAt(Math.floor(Math.random() * chars.length - 1))
    }
    setContra(contraFinal);
  }

  return (
    <>
      <div className="container">
        <div className="generador">
          <button onClick={() => generar(document.getElementById("longitudLabel").value)}>GENERAR</button>
          <label htmlFor="longitud">Longitud</label>
          <input type="text" name='longitud' id='longitudLabel' />
          <div>{contra}</div>
        </div>
      </div>
    </>
  )
}

export default App
