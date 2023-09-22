import React from "react";
import '../hojas-de-estilos/boton.css'

function Boton ({ texto, esBotonClic, manejarClic }) {
	return (
		<button
			className= { esBotonClic ? 'boton-clic' : 'boton-reiniciar' }
			onClick={manejarClic}>
			{texto}
		</button>
	)
}

export default Boton;