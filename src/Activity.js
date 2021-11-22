import React,{useState} from 'react';
import "./styles/CriptoQuote.css"
import axios from 'axios';
import { useHistory } from 'react-router';
import { useTranslation } from "react-i18next";
function Activity({id,user, hour ,
    cryptoName, unitValue, quote ,totalPrice, 
    amount, type, cvu, wallet, reputation, state}){

        const config = {
            headers:{'Authorization': 'Bearer '+localStorage.getItem("token"),
                    'Access-Control-Allow-Origin': 'http://localhost:3000'}
        };
        
        let loggedUser = localStorage.getItem("usuario");
        let history = useHistory()
        const { t, i18n } = useTranslation();
        const updateTransactionToInProgress =(event)=>{
            event.preventDefault()
            axios
                .put('http://localhost:8080/api/transaction/activity-'+id+'-'+loggedUser+ '/update',null,config)
                .then((response => {
                    console.log(response.data)
                goToPendingActivities()
                })).catch((error) => {
                   
                });
        }

        const goToPendingActivities = (event) =>{
            history.push("/pending-activities")
          }

    return(
        <>
            <div class="card w-50 cardCriptoQuote">
                <div class="card-body">
                    <h5 class="card-title">{t("transaccionDe"+type)}</h5>
                    <p className="card-text">{"Cripto: " + cryptoName}</p>
                    <p className="card-text">{t("usuario")+": " + user}</p>
                    <p className="card-text">{t("hora")+": "+ hour}</p>
                    <p className="card-text">{t("valorUnitario")+": USD "+ unitValue}</p>
                    <p className="card-text">{t("cotizacion")+": ARS "+ quote}</p>
                    <p className="card-text">{t("precioTotal")+": ARS "+ totalPrice}</p>
                    <p className="card-text">{t("cantidadDeCripto")+": "+ amount}</p>
                    <p className="card-text">{t("reputacion")+": "+ reputation}</p>
                    { (loggedUser != user) &&
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" name="Compra" onClick={updateTransactionToInProgress}>{t("comenzarTransaccion")}</button>
                    </div>
                    }
                </div>  
            </div>
        </>
    )
}

export default Activity