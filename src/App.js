import React from 'react';
import './App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
import Activities from './Activities';
import LoggedActivities from './LoggedActivities';


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <PrivateRoute exact path="/home" component={Home}/>
        <PrivateRoute exact path="/activities" component={Activities}/>
        <PrivateRoute exact path="/my-activities" component={LoggedActivities}/>
        
      </Switch>
    </BrowserRouter>
    );
  }
}
export default App;
