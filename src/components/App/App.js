import { useState } from 'react';
import './App.css';
import IngredientList from '../Ingredients/IngredientList';
import BurgerPane from '../BurgerPane/BurgerPane';

const initialIngredients = [
	{ name: 'Kaiser Bun', color: 'saddlebrown' },
	{ name: 'Sesame Bun', color: 'sandybrown' },
	{ name: 'Gluten Free Bun', color: 'peru' },
	{ name: 'Lettuce Wrap', color: 'olivedrab' },
	{ name: 'Beef Patty', color: '#3F250B' },
	{ name: 'Soy Patty', color: '#3F250B' },
	{ name: 'Black Bean Patty', color: '#3F250B' },
	{ name: 'Chicken Patty', color: 'burlywood' },
	{ name: 'Lettuce', color: 'lawngreen' },
	{ name: 'Tomato', color: 'tomato' },
	{ name: 'Bacon', color: 'maroon' },
	{ name: 'Onion', color: 'lightyellow' },
];

function App() {
	const [ingredients, setIngredients] = useState(initialIngredients);
	const [burgerStack, setBurgerStack] = useState([]);

	function onIngredientAdd(ingredient) {
		setBurgerStack([ingredient, ...burgerStack]);
	}
	return (
		<div className='App'>
			<IngredientList
				ingredients={ingredients}
				onIngredientAdd={onIngredientAdd}
			/>
			<BurgerPane burgerStack={burgerStack} setBurgerStack={setBurgerStack}/>
		</div>
	);
}

export default App;
