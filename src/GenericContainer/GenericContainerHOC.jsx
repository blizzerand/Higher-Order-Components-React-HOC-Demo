import React, { Component } from 'react';

const GenericContainer = ({reqUrl, reqMethod, resName}) => WrappedComponent => {
	return class GenericContainer extends Component {

		constructor(props) {
			super(props);
		this.state = {
			[resName]: [],
		
		}
	}
		componentWillMount() {

				let init = {
					   method: reqMethod,
		               headers: new Headers(),
		               mode: 'cors',
		               cache: 'default' 
		           };


		        fetch(reqUrl, init)
		        	.then( (response) => (response.json()))
		        	.then( 
		        		(data) =>  {this.setState( 
        			prevState => ({
     					[resName]: [...data.contacts]
		        	}) 
		        )}
				    ).then(console.log(this.state))
			

		    
		    }

		render() {
			return(
				<WrappedComponent {...this.props} {...this.state} />)
		}

	}
}

export default GenericContainer;