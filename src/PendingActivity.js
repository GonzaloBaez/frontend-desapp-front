import React,{useState} from 'react';
import "./styles/CriptoQuote.css"
import axios from 'axios';
import { useHistory } from 'react-router';


function PendingActivity({id,user, hour ,
    cryptoName, unitValue, quote ,totalPrice, 
    amount, type, cvu, wallet, reputation, state,counterPart}){

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
        

    return(
        <>
            <div class="card w-50 cardCriptoQuote">
                <div class="card-body">
                    <h5 class="card-title">{"Transaccion de " + type}</h5>
                    <p className="card-text">{"Cripto: " + cryptoName}</p>
                    <p className="card-text">{"Usuario: " + user}</p>
                    <p className="card-text">{"Reputación: "+ reputation}</p>
                    <p className="card-text">{"Hora: "+ hour}</p>
                    <p className="card-text">{"Valor unitario: USD "+ unitValue}</p>
                    <p className="card-text">{"Cotizacion: ARS "+ quote}</p>
                    <p className="card-text">{"Precio total: ARS "+ totalPrice}</p>
                    <p className="card-text">{"Cantidad de Cripto: "+ amount}</p>
                    <p className="card-text">{"Dirección de envio: "+ (type == 'Compra'? ("Billetera " +wallet):("CBU/CVU " +cvu))}</p>
                    {(state != 'Cerrada') && 
                        <div>
                            <button className="confirm-button" onClick={handleAction}>{type == 'Compra' ? ("Confirmar recepción"):("Realice la transferencia")}</button>
                            <button className="cancel-button" onClick={handleCancel}>Cancelar transacción</button>
                        </div>    
                    }

                    
                </div>  
            </div>
        </>
    )
}

export default PendingActivity