import React from 'react';
import './Form.css';

function Form({handleFormSubmit}) {
	return (
		<form className='form' onSubmit={handleFormSubmit}>
			<p>
				<strong>Add an ingredient!</strong>
			</p>
			<div>
				<label htmlFor='ingredient_name'>Ingredient: </label>
				<input type='text' id='ingredient_name'/>
			</div>
			<div>
				<label htmlFor='ingredient_color'>Color: </label>
				<input type='text' id='ingredient_color'/>
			</div>
			<button type='submit' >Submit</button>
		</form>
	);
}

export default Form;
