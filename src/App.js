import React,{Component} from 'react';
import RegisterPage from './component/RegisterPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      user: undefined
    }
  }

  getUserFromChild = (user) =>{
    this.setState({user:user})
  }

  render(){
    return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={props => <RegisterPage assignUserInParent={this.getUserFromChild} />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
