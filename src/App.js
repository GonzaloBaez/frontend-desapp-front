import React from 'react';
import './App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Users from './Users'
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
import Activities from './Activities';
import LoggedActivities from './LoggedActivities';
import PendingActivities from './PendingActivities';
import NavBar from './Navbar.js';
import LanguageSelector from './LanguageSelector';


class App extends React.Component{
  render(){
    return(
      <>
        <BrowserRouter>
        <img src="https://yt3.ggpht.com/bfP5JOmJYINOnJhwTFr1SVj4gHocn8U1TlRLNtdVMVmKB3S06z751pYEePhQQ8j-PDDeFU30tAU=s88-c-k-c0x00ffffff-no-rj" className="logo" alt="Logo criptoP2P" />
        <br/>
        <LanguageSelector/>
          <Switch>
            <PublicRoute exact path="/" component={Login} />
            <PublicRoute exact path="/register" component={Register} />
            <PrivateRoute exact path="/home" component={Home}/>
            <PrivateRoute exact path="/activities" component={Activities}/>
            <PrivateRoute exact path="/my-activities" component={LoggedActivities}/>
            <PrivateRoute exact path="/pending-activities" component = {PendingActivities}/>
            <PrivateRoute exact path="/users" component={Users}/>
          </Switch>
      </BrowserRouter>
    </>
    );
  }
}
export default App;
