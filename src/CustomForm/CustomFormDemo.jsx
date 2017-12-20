import React from 'react';
import CustomForm from './CustomFormHOC.jsx';

const Form = (props) => {

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit();
	}

	const handleChange = (e) => {
		const inputName = e.target.name;
		const inputValue = e.target.value;
	
		props.onChange(inputName,inputValue);
	}

	return(
		<div>
		  <form onSubmit  = {handleSubmit} onChange= {handleChange} >
			<input name = "name" type= "text" /><br />
			<input name ="email" type="text"/><br/>
			<button type="submit"> Submit </button>
		  </form>
		</div>

		)
}

const CustomFormDemo = (props) => {
	const FormWithCustom = CustomForm({ contact: {name: '', email: ''}})({propName:'contact', propListName: 'contactList'})(Form);
	return(
		<div>
			<FormWithCustom {...props} />
		</div>
		);
}

export default CustomFormDemo;
