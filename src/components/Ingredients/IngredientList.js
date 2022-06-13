import './IngredientList.css';

function IngredientList({ ingredients, onIngredientAdd }) {
	return (
		<div className='ingredients-container'>
			<ul className='ingredients-list'>
				{ingredients.map((ingredient) => {
					return (
						<li className='ingredient' key={ingredient.name}>
							{ingredient.name}{' '}
							<button
								onClick={() => {
									onIngredientAdd(ingredient);
								}}>
								{'>'}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default IngredientList;
