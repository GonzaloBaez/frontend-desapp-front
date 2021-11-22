import React,{useState} from 'react';
import "./styles/CriptoQuote.css"
import { useTranslation } from "react-i18next";

function LoggedActivity({id,user, hour ,
    cryptoName, unitValue, quote ,totalPrice, 
    amount, type, cvu, wallet, reputation, state,counterPart}){

        const config = {
            headers:{'Authorization': 'Bearer '+localStorage.getItem("token"),
                    'Access-Control-Allow-Origin': 'http://localhost:3000'}
        };
        const { t, i18n } = useTranslation();

    return(
        <>
            <div class="card w-50 cardCriptoQuote">
                <div class="card-body">
                    <h5 class="card-title">{t("transaccionDe"+type)}</h5>
                    <p className="card-text">{"Cripto: " + cryptoName}</p>
                    <p className="card-text">{t("usuario")+": " + user}</p>
                    <p className="card-text">{t("contraparte")+": "+ (counterPart != null? counterPart: "Sin contraparte")}</p>
                    <p className="card-text">{t("hora")+": "+ hour}</p>
                    <p className="card-text">{t("valorUnitario")+": USD "+ unitValue}</p>
                    <p className="card-text">{t("cotizacion")+": ARS "+ quote}</p>
                    <p className="card-text">{t("precioTotal")+": ARS "+ totalPrice}</p>
                    <p className="card-text">{t("cantidadDeCripto")+": "+ amount}</p>
                    <p className="card-text">{t("reputacion")+": "+ reputation}</p>
                    <p className="card-text">{t("estado")+": "+ t(""+state)}</p>
                </div>  
            </div>
        </>
    )
}

export default LoggedActivity