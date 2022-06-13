import BurgerStack from '../BurgerStack/BurgerStack';

function BurgerPane({ burgerStack, setBurgerStack }) {
	return (
		<div>
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
