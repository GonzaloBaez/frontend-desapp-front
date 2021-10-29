import React,{} from 'react';
import { useTranslation } from "react-i18next";

function CriptoQuote({symbol,price,dollarQuote,date,hour}){
    const { t, i18n } = useTranslation();

    const currency = (price * (dollarQuote || 185)).toFixed(2)

    
    return(
        <>
            <div className="card w-50">
                <div className="card-body">
                
                <hr />
                    <h5 className="card-title">{symbol}</h5>
                    <p className="card-text">{"Price: " + t('currency',{ currency })}</p>
                    <p className="card-text">{"Date: " + t('dates',{ date })}</p>
                    <p className="card-text">{"Hour: " + hour}</p>
                </div>
            </div>
        </>
    )
}

export default CriptoQuote