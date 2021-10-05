import { useHistory } from "react-router-dom";
import React,{useState} from 'react';
import axios from 'axios';
import './styles/Login.css'

function Login(){
    let history = useHistory()

    const [data,setData] = useState({
        username: '',
        password: ''
    })

    const [isInvalidLogin,setIsInvalidLogin] = useState(false)

    const handleInputChange = (event) =>{
        event.preventDefault()
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = (event) =>{
        event.preventDefault();
        axios
            .post('http://localhost:8080/authenticate',data)
            .then((response) =>{
                localStorage.setItem("token",response.data.token)
                let token = localStorage.getItem("token")
                console.log(token)
                history.push('/home')
            })
            .catch((error) => setIsInvalidLogin(true))
    }

    const handleRegister = (event) =>{
        event.preventDefault()
        history.push('/register')
    }

    return(
        <>
            <div className="login-main-div">
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <input required className="form-control" name= "username" type="text"  value = {data.username} onChange = {handleInputChange} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input required className="form-control" name= "password" type="password"  value = {data.password} onChange = {handleInputChange} placeholder="Password"/>
                    </div>
                    <div className="form-group">  
                        <button required type="submit" className="btn btn-primary"> Login </button>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-secondary" onClick={handleRegister}> Register</button>
                    </div>
                    {isInvalidLogin &&
                        <div class="alert alert-warning" role="alert">
                            Correo o contraseña invalidos
                        </div>
                    }
                </form>
            </div>
        </>
    )
}

export default Login;