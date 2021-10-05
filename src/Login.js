import { useHistory } from "react-router-dom";
import React,{useState} from 'react';
import api from "./api/api";
import './styles/Login.css'

function Login(){
    let history = useHistory()

    const [data,setData] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) =>{
        event.preventDefault()
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = (event) =>{
        event.preventDefault();
        console.log(data.username)
        api.getAuth(data)
            .then((response =>{
                localStorage.setItem("token",response.token)
                history.push('/home')
            }))
            .catch(error =>{
                
            })
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
                </form>
            </div>
        </>
    )
}

export default Login;