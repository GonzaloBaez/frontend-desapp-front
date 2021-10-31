import React,{useState} from 'react';
import "./styles/CriptoQuote.css"
import axios from 'axios';

function Activity({id,user, hour ,
    cryptoName, unitValue, quote ,totalPrice, 
    amount, type, cvu, wallet, reputation, state}){

        const config = {
            headers:{'Authorization': 'Bearer '+localStorage.getItem("token"),
                    'Access-Control-Allow-Origin': 'http://localhost:3000'}
        };
        
        let loggedUser = localStorage.getItem("usuario");

        const updatedTransaction = {
            id:"",
            user: "",
            cryptoName: "",
            unitValue: "",
            quote: "",
            totalPrice: "",
            amount: "",
            type:"",
            state:"En progreso",
            reputation:"",
            cvu:"",
            wallet:""
        }

        const updateTransactionToInProgress =(event)=>{
            event.preventDefault()
            updatedTransaction.id=id
            updatedTransaction.user = user;
            updatedTransaction.cryptoName = cryptoName;
            updatedTransaction.unitValue = unitValue;
            updatedTransaction.quote = quote;
            updatedTransaction.totalPrice = totalPrice;
            updatedTransaction.amount = amount;
            updatedTransaction.type = type;
            updatedTransaction.cvu = cvu;
            updatedTransaction.wallet = wallet

            axios
                .put('http://localhost:8080/api/transaction/activity-'+id+'/update',null,config)
                .then((response => {
                    console.log(updatedTransaction)
                })).catch((error) => {
                    console.log(error)
                });
        }

    return(
        <>
            <div class="card w-50 cardCriptoQuote">
                <div class="card-body">
                    <h5 class="card-title">{"Transaccion de " + type}</h5>
                    <p className="card-text">{"Cripto: " + cryptoName}</p>
                    <p className="card-text">{"Usuario: " + user}</p>
                    <p className="card-text">{"Hora: "+ hour}</p>
                    <p className="card-text">{"Valor unitario: USD "+ unitValue}</p>
                    <p className="card-text">{"Cotizacion: ARS "+ quote}</p>
                    <p className="card-text">{"Precio total: ARS "+ totalPrice}</p>
                    <p className="card-text">{"Cantidad de Cripto: "+ amount}</p>
                    <p className="card-text">{"Reputación: "+ reputation}</p>
                    { (loggedUser != user) &&
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" name="Compra" onClick={updateTransactionToInProgress}>{"Comenzar transacción"}</button>
                    </div>
                    }
                </div>  
            </div>
        </>
    )
}

export default Activity