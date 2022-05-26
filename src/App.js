import perrito from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import Grid from './componentes/Grid';
import Card from './componentes/Card';

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
				<Card />
			</div>
		</div>
	);
}

export default App;
