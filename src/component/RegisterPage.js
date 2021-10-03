import React,{Component} from 'react'
import {Button,Form} from 'react-bootstrap'
import logo from '../images/criptoP2P.png'
import api from '../api/api'
import { withRouter } from 'react-router'
import '../styles/Register.css'

class RegisterPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            surname: '',
            email: '',
            address: '',
            password: '',
            cvu: '',
            wallet: ''
        }

        this.handleName = this.handleName.bind(this)
        this.handleSurname = this.handleSurname.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleCvu = this.handleCvu.bind(this)
        this.handleWallet = this.handleWallet.bind(this)

    }

    handleName = (event) =>{
        this.setState({name:event.target.value.trim()})
    }

    handleSurname = (event) =>{
        this.setState({surname:event.target.value.trim()})
    }

    handleEmail = (event) =>{
        this.setState({email:event.target.value.trim()})
    }

    handleAddress = (event) =>{
        this.setState({address:event.target.value.trim()})
    }

    handlePassword = (event) =>{
        this.setState({password:event.target.value.trim()})
    }

    handleCvu = (event) =>{
        this.setState({cvu:event.target.value.trim()})
    }

    handleWallet = (event) =>{
        this.setState({wallet:event.target.value.trim()})
    }

    handleRegister = () =>{
        let user = this.state
        let body = {name:user.name,surname:user.surname,email:user.email,address:user.address,password:user.password,cvu:user.cvu,wallet:user.wallet}

        api.registerUser(body)
           .then(data =>{
               this.props.assignUserInParent(data)
               this.props.history.push(`home/${data.wallet}`)
           })
    }

    render(){
        return (
            <div className="register-main-div">
                
                <div>
                    <img className="register-image" src={logo} alt="cryptop2p img"></img>
                    <div className="register-container">
                        <Form className="register-form">
                            <div>
                                <Form.Group>
                                    <Form.Label> Name </Form.Label>
                                    <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={this.handleName}/>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <Form.Label> Surname </Form.Label>
                                    <Form.Control type="text" placeholder="Surname" value={this.state.surname} onChange={this.handleSurname}/>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <Form.Label> Email </Form.Label>
                                    <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <Form.Label> Address </Form.Label>
                                    <Form.Control type="text" placeholder="Address" value={this.state.address} onChange={this.handleAddress}/>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <Form.Label> Password </Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <Form.Label> Cvu </Form.Label>
                                    <Form.Control type="tel" placeholder="Cvu" value={this.state.cvu} onChange={this.handleCvu}/>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <Form.Label> Wallet </Form.Label>
                                    <Form.Control type="text" placeholder="Wallet" value={this.state.wallet} onChange={this.handleWallet}/>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <Button className="register-button" variant="primary" onClick={this.handleRegister}> Register </Button>
                                </Form.Group>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(RegisterPage)