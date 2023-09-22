import './App.css';
import Boton from './Componentes/boton';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Contador from './Componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumclics] = useState(0)

  const manejarClic = () => {
    setNumclics (numClics + 1)
  };

  const reiniciarContador = () => {
    setNumclics (0)
  };



  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img
        className='logo'
        src={freeCodeCampLogo}
        alt='Logo de FreecodeCamp'/>
      </div>

      <div className='contenedor-principal'>
        <Contador
        numClics= { numClics } />
        <Boton
          texto='Clic'
          esBotonClic={true}
          manejarClic={manejarClic}/>
          
        <Boton
          texto='Reinciar'
          esBotonClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
