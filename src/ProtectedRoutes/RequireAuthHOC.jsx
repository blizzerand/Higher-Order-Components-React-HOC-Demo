import React, { Component } from 'react';


const RequireAuth = ComposedComponent =>  {
	return class Authentication extends Component {
		

		componentWillMount() {
			console.log(this.props);
			if(!this.props.authenticated) {
				this.props.history.push('/login');			
			}
		}

		render() {

			return(
				<div>
					<ComposedComponent {...this.props} />
				</div>
			)
		}
	}
}

export default RequireAuth;