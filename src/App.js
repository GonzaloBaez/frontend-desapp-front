import React from 'react';
import './App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <PrivateRoute exact path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
    );
  }
}
export default App;
