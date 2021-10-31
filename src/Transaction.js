import React,{useState} from 'react';
import "./styles/CriptoQuote.css"

function Transaction({user, hour ,
    cryptoName, unitValue, quote ,totalPrice, 
    amount, type, cvu, wallet}){

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
                    <p className="card-text">{"CVU: "+ cvu}</p>
                    <p className="card-text">{"Billetera: "+ wallet}</p>

                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" name="Compra">Compra</button>
                        <button type="button" class="btn btn-primary" name="Venta">Venta</button>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Transaction