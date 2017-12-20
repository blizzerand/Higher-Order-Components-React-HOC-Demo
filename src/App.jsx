import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import LoaderDemo from './LoaderDemo/LoaderDemo.jsx';
import RequireAuthDemo from './ProtectedRoutes/RequireAuthDemo.jsx';
import RefsDemo from './RefsDemo/RefsDemo.jsx';
import GenericContainerDemo from './GenericContainer/GenericContainerDemo.jsx';
import CustomFormDemo from './CustomForm/CustomFormDemo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated : false,
    }
  }
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark ">
        
           <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><Link to="/">Home</Link></li>
            <li><Link to="/loaderdemo">Loader Demo</Link></li>
            <li><Link to="/genericcontainer">Generic Container/State abstraction</Link></li>
            <li><Link to="/customform">CustomForm</Link></li>
            <li><Link to="/refsdemo">Refs Demo</Link></li>
             <li><Link to="/requireauth">Protected Routes Demo</Link></li>
          </ul>
         
        </nav>

        <Switch>
          <Route exact path="/" component={Home}/>

          
           <Route path="/loaderdemo" component={LoaderDemo}/>
           <Route path="/genericcontainer" component={GenericContainerDemo}/>
           <Route path="/customform" component={CustomFormDemo}/>
           <Route path="/refsdemo" component={RefsDemo}/>
           <Route path="/requireauth" component = {RequireAuthDemo} />

        </Switch>


      
      </div>

      
    );
  }
}

const Home = () => {
  return(
    <div> You are at Home </div>)
}
export default App;
