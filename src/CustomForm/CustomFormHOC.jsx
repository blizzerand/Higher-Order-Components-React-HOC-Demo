import React, { Component } from 'react';


const CustomForm = (propState) => ({propName, propListName}) => WrappedComponent => {
	return class CustomForm extends Component {


	constructor(props) {
		super(props);
		propState[propListName] = [];
		this.state = propState;
	
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit() {
      this.setState( prevState => { 
      	return ({
        [propListName]: [...prevState[propListName], this.state[propName] ]
      })}, () => console.log(this.state[propListName]) )}  
    

  handleChange(name, value) {
      
      this.setState( prevState => (
        {[propName]: {...prevState[propName], [name]:value} }) )
      }




		render() {
			return(
				<div>
					<WrappedComponent {...this.props} {...this.state} onChange = {this.handleChange} onSubmit = {this.handleSubmit} />
					The values are { JSON.stringify(this.state[propListName], null,2)}
				</div>

				)
		}
	}
}

export default CustomForm;