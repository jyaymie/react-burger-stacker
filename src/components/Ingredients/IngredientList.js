import './IngredientList.css';

function IngredientList({ ingredients, onIngredientAdd }) {
	return (
		<ul>
			{ingredients.map((ingredient) => {
				return (
					<li className='ingredient' key={ingredient.name}>
						{ingredient.name}
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
	);
}

export default IngredientList;
