import BurgerStack from '../BurgerStack/BurgerStack';
import './BurgerPane.css'

function BurgerPane({ burgerStack, setBurgerStack }) {
	return (
		<div className="burger-pane">
			<BurgerStack burgerStack={burgerStack} />
			<h3>Burger Stacking Area</h3>
			<button
				type='reset'
				onClick={() => {
					setBurgerStack([]);
				}}>
				Clear
			</button>
		</div>
	);
}

export default BurgerPane;
