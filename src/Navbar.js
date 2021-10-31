import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function NavBar(){

    let history = useHistory();
    const { t, i18n } = useTranslation();

    useEffect(()=>{
    },[])

    const logout = (event) =>{
      event.preventDefault()
      localStorage.removeItem("token");
      history.push("/")
    }

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    const goToHome = (event) =>{
      event.preventDefault()
      history.push("/home")
    }

    const goToTransactions = (event) =>{
      event.preventDefault()
      history.push("/activities")
    }

    const goToLoggedTransactions = (event) =>{
      event.preventDefault()
      history.push("/my-activities")
    }
      return(
        <>
        <nav className={"navbar navbar-sticky"}>
        <div className="bar">
          <img src="https://yt3.ggpht.com/bfP5JOmJYINOnJhwTFr1SVj4gHocn8U1TlRLNtdVMVmKB3S06z751pYEePhQQ8j-PDDeFU30tAU=s88-c-k-c0x00ffffff-no-rj" className=""alt="Logo criptoP2P" />
          <div className="input-group">
            <div className="input-group-prepend">
            <div>
              <img src="https://image.freepik.com/iconos-gratis/logout_318-10026.jpg" className="btn-logout" onClick={logout} width="40" height="40" alt="Logo logout"/></div>
            </div>
            <select onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="es">{t("language.es")}</option>
                    <option value="enUS">{t("language.enUS")}</option>
            </select>
            <button type="button" class="btn btn-dark" onClick={goToHome}>Inicio</button>
            <button type="button" class="btn btn-dark" onClick={goToTransactions}>{"Actividades"}</button>
            <button type="button" class="btn btn-dark" onClick={goToLoggedTransactions}>{"Mis Actividades"}</button>
          </div> 
        </div>
        </nav>
        </>
      )
    }

export default NavBar;