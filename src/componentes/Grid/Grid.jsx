import React from 'react';
import Card from '../Card/Card';


export default function Grid() {
	return (
		<div>
			<h4> Hola soy la grilla.</h4>
			<div>
				<Card name ={"Buenos Aires"} temp={18}  />
				<Card name ={"Cordoba"} temp={20}  />
				<Card name ={"San Juan"} temp={10}  />
				<Card name ={"Salta"} temp={15} humedad={100}  />
			</div>
			
		</div>
	);
}
