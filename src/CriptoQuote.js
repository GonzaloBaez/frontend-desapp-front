import React,{useEffect, useState} from 'react';

function CriptoQuote({symbol,price,dollarQuote,date,hour}){
    return(
        <>
            <div class="card w-50">
                <div class="card-body">
                    <h5 class="card-title">{symbol}</h5>
                    <p class="card-text">{"Price: " + (price * dollarQuote).toFixed(2) + " ARS"}</p>
                    <p class="card-text">{"Date: " + date}</p>
                    <p class="card-text">{"Hour: " + hour}</p>
                </div>
            </div>
        </>
    )
}

export default CriptoQuote