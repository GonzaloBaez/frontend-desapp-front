import React,{useState} from 'react';
import "./styles/CriptoQuote.css"
import axios from 'axios';
import { useHistory } from 'react-router';
import { useTranslation } from "react-i18next";

function PendingActivity({id,user, hour ,
    cryptoName, unitValue, quote ,totalPrice, 
    amount, type, cvu, wallet, reputation, state,counterPart}){

        const { t, i18n } = useTranslation();
        const config = {
            headers:{'Authorization': 'Bearer '+localStorage.getItem("token"),
                    'Access-Control-Allow-Origin': 'http://localhost:3000'}
        };

        const history = useHistory()
        let loggedUser = localStorage.getItem("usuario");

        const handleAction = (event) =>{
            event.preventDefault()
            axios
                .put('http://localhost:8080/api/transaction/close/'+id+'/'+counterPart,null,config)
                .then((response) =>{
                    history.push('/home')
                })
                .catch((error) =>{
                    console.log(error)
                })
        }

        const handleCancel = (event) =>{
            event.preventDefault()
            axios
                .put('http://localhost:8080/api/transaction/activity-'+id+'-'+loggedUser+'/delete',null,config)
                .then((response) =>{
                    history.push('/home')
                })
                .catch((error) =>{
                    console.log(error)
                })
        }
        const totalPriceFixed = String(totalPrice)
        const quoteFixed = String(quote)

    return(
        <>
            <div class="card w-50 cardCriptoQuote">
                <div class="card-body">
                    <h5 class="card-title">{t("transaccionDe"+type)}</h5>
                    <p className="card-text">{"Cripto: " + cryptoName}</p>
                    <p className="card-text">{t("usuario")+": " + user}</p>
                    <p className="card-text">{"Reputación: "+ reputation}</p>
                    <p className="card-text">{t("hora")+": "+ hour}</p>
                    <p className="card-text">{t("valorUnitario")+": USD "+ unitValue}</p>
                    <p className="card-text">{t("cotizacion")+": "+ t('quoteFixed',{quoteFixed})}</p>
                    <p className="card-text">{t("precioTotal")+": "+ t('totalPrice',{ totalPriceFixed })}</p>
                    <p className="card-text">{t("cantidadDeCripto")+": "+ amount}</p>
                    <p className="card-text">{t("direccionDeEnvio")+": "+ (type == 'Compra'? (t("billetera")+" " +wallet):("CBU/CVU " +cvu))}</p>
                    {(state != 'Cerrada') && 
                        <div>
                            <button className="btn btn-success" onClick={handleAction}>{type == 'Compra' ? (t("confirmarRecepcion")):(t("realiceLaTransferencia"))}</button>
                            <button className="btn btn-warning" onClick={handleCancel}>{t("cancelarTransaccion")}</button>
                        </div>    
                    }

                    
                </div>  
            </div>
        </>
    )
}

export default PendingActivity