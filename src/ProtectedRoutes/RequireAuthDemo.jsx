import React, { Component } from 'react';
import {} from "react-router-dom";
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import RequireAuth from './RequireAuthHOC.jsx';


class RequireAuthDemo extends Component {

  constructor(props) {
    super(props);
    /* Initialize state to false */
    this.state = {
      authenticated : false,
    }
  }
  render() {
    const AuthContacts = withRouter(RequireAuth(Contacts));
    const {match} = this.props;
    console.log(match);
    return (

      <div>

          <ul className="nav navbar-nav">
            <li><Link to={`${match.url}/home/`}>Home</Link></li>
             <li><Link to={`${match.url}/contacts` }>Contacts(Protected Route)</Link></li>
          </ul>
       

        <Switch>
          <Route exact path={`${match.path}/home/`} component={Home}/>
          <Route path={`${match.path}/contacts`} render = { () =>  <AuthContacts authenticated = {this.state.authenticated} {...this.props} /> }/>
        </Switch>

      </div>

      
    );
  }
}

const Home = () => {
    return(<div> Navigating to the protected route gets redirected to /login </div>);
}

const Contacts = () => {
    return(<div> Contacts </div>);
    
}


export default RequireAuthDemo;
