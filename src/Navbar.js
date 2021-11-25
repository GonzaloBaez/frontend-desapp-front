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

    const handleUsers = (event) =>{
      event.preventDefault()
      history.push("/users")
    }

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

    const goToPendingActivities = (event) =>{
      event.preventDefault()
      history.push("/pending-activities")
    }
      return(
        <>
        <nav className={"navbar navbar-sticky"}>
        <div className="bar">
          
          <div className="input-group">
            <div className="input-group-prepend">
            <div>
              <img src="https://image.freepik.com/iconos-gratis/logout_318-10026.jpg" className="btn-logout" onClick={logout} width="40" height="40" alt="Logo logout"/>
            </div>
            </div>
            <button type="button" class="btn btn-dark" onClick={goToHome}>{t("inicio")}</button>
            <button type="button" class="btn btn-dark" onClick={goToTransactions}>{t("actividades")}</button>
            <button type="button" class="btn btn-dark" onClick={goToLoggedTransactions}>{t("misActividades")}</button>
            <button type="button" class="btn btn-dark" onClick={goToPendingActivities}>{t("actividadesPendientes")}</button>
            <button type="button" class="btn btn-dark" onClick={handleUsers}>{t("usuarios")}</button>
          </div> 
        </div>
        </nav>
        </>
      )
    }

export default NavBar;