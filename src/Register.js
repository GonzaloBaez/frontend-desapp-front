import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import useMediaQuery from "./useMediaQuery";

function Register(){
    let history = useHistory()

    const [data,setData] = useState({name:'',surname:'',email:'',address:'',password:'',
                                             cvu:'', wallet:''})

    const handleInputChange = (event) =>{
        event.preventDefault();
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }
    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1223);
    const isDekstop = useMediaQuery(1330);

    let dispositive = isMobile ? "mobile" : isTablet ? "tablet" : "desktop"
    const [isInvalidRegister,setIsInvalidRegister] = useState(false)
    const [errorMessage,setErrorMessage] = useState("error")
    const { t, i18n } = useTranslation();
    const handleRegister = (event) =>{
        event.preventDefault();
        axios
           .post('http://localhost:8080/api/users/register',data)
            .then((response => {
                console.log(response.data)
                history.push('/')
            }))
            .catch((error) => {setErrorMessage(error.response.data); setIsInvalidRegister(true)})
    }

    const goToLogin = (event) =>{
        event.preventDefault()
        history.push('/')
    }

    return(
        <>
         <div className={dispositive}>
             <form className={"login-form-" + dispositive} onSubmit={handleRegister}>
                <div className="form-group">
                    <input required className="form-control" name= "name" type="text"  value = {data.name} onChange = {handleInputChange} placeholder={t("nombre")}/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "surname" type="text"  value = {data.surname} onChange = {handleInputChange} placeholder={t("apellido")}/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "email" type="text"  value = {data.email} onChange = {handleInputChange} placeholder={"Email"}/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "address" type="text"  value = {data.address} onChange = {handleInputChange} placeholder={t("direccion")}/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "password" type="password"  value = {data.password} onChange = {handleInputChange} placeholder={t("contraseña")}/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "cvu" type="text"  value = {data.cvu} onChange = {handleInputChange} placeholder="Cvu"/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "wallet" type="text"  value = {data.wallet} onChange = {handleInputChange} placeholder={t("billetera")}/>
                </div>
                <div className="form-group">  
                    <button required type="submit" className="btn btn-primary"> {t("registrar")} </button>
                </div>
                <div className="form-group">
                    <button variant="secondary" type="button" class="btn btn-warning" onClick={goToLogin}>{t("cancelar")}</button>
                </div>
                {isInvalidRegister &&
                        <div class="alert alert-warning" role="alert">
                            {errorMessage}
                        </div>
                    }
             </form>
         </div>
        </>
    )
}

export default Register;