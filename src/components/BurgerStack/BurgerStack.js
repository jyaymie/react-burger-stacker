import React from 'react';
import './BurgerStack.css';

function BurgerStack({ burgerStack }) {
	return (
		<div className='burger-stack'>
			{burgerStack.map((ingredient, index) => (
				<div
					className='burger-item'
					style={{ backgroundColor: ingredient.color }}
					key={index}>
					{ingredient.name}
				</div>
			))}
		</div>
	);
}

export default BurgerStack;
