import React,{Component} from 'react';

const Card = (props) => {
	return (
		<div>
		{console.log(props)}
			<ul>
				<li>{`Nombre de la ciudad:${props.name}`}</li>
				<li>Temperatura de la ciudad : {props.temp}</li>
				
			</ul>
		</div>
	);
};

export default Card;

// export default class Card extends Component{
// 	constructor(props){
// 		super(props)
// 	}
	
// 	render(){
// 		return (
// 			 		<div>
// 						<ul>
// 			 				<li>{`Nombre de la ciudad:${this.props.name}`}</li>
// 			 				<li>Temperatura de la ciudad : {this.props.temp}</li>
							
// 			 			</ul>
// 			 		</div>
// 			 	);
// 	}
// }
