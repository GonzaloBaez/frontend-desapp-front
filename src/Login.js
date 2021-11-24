import { useHistory } from "react-router-dom";
import React,{useState} from 'react';
import axios from 'axios';
import styles from './styles/Login.css'
import { useTranslation } from "react-i18next";
import useMediaQuery from "./useMediaQuery";

function Login(){
    let history = useHistory()

    const [data,setData] = useState({
        username: '',
        password: ''
    })

    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1223);
    const isDekstop = useMediaQuery(1330);

    let dispositive = isMobile ? "mobile" : isTablet ? "tablet" : "desktop"

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
                localStorage.setItem("usuario",data.username)
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
    const { t, i18n } = useTranslation();

    return(
        <>
            <div className={dispositive}>
                <form className={"login-form-" + dispositive} onSubmit={handleLogin}>
                    <div className="form-group">
                        <input required className="form-control" name= "username" type="text"  value = {data.username} onChange = {handleInputChange} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input required className="form-control" name= "password" type="password"  value = {data.password} onChange = {handleInputChange} placeholder={t("contraseña")}/>
                    </div>
                    <div className="form-group">  
                        <button required type="submit" className="btn btn-primary"> {t("ingresar")} </button>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-secondary" onClick={handleRegister}> {t("registrar")}</button>
                    </div>
                    {isInvalidLogin &&
                        <div class="alert alert-warning" role="alert">
                            {t("correoOContraseñaInvalidos")}
                        </div>
                    }
                </form>
            </div>
        </>
    )
}

export default Login;