import React,{Component} from 'react';
import "./NavBar.css"

function NavBar() {
	return (
		<nav className="nav">
			<button className="buttonHome">Home</button>
			<button className="buttonSearch">Search</button>
			<input placeholder="Buscar Ciudad..." ></input>
		</nav>
	);
}

export default NavBar;

// export default class NavBar extends Component{
// 	render(){
// 		return (
// 			 		<div>
// 			 			<h1>Soy el NavBar prueba2</h1>
// 			 		</div>
// 			 	);
// 	}
// }

