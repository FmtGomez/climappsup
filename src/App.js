import perrito from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Grid from './componentes/Grid/Grid';
import Card from './componentes/Card/Card';
import Saludo from './componentes/Saludo/Saludo';

function App() {
	return (
		<div>
			<nav>
				<NavBar />
			</nav>
			<div>
				<Grid />
			</div>
			
			<div>
				<Saludo/>
			</div>
		</div>
	);
}

export default App;
