import React,{useState} from 'react';
import './App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
    );
  }
}
export default App;
