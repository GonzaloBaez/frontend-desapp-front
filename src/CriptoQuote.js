import React,{} from 'react';
import { useTranslation } from "react-i18next";

function CriptoQuote({symbol,price,dollarQuote,date,hour}){
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
    return(
        <>
            <div className="card w-50">
                <div className="card-body">
                <select onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="es">{t("language.es")}</option>
                    <option value="enUS">{t("language.enUS")}</option>
                </select>
                <hr />
                    <h5 className="card-title">{symbol}</h5>
                    <p className="card-text">{"Price: " + (price * (dollarQuote || 185)).toFixed(2) + " ARS"}</p>
                    <p className="card-text">{"Date: " + t('dates',{ date })}</p>
                    <p className="card-text">{"Hour: " + hour}</p>
                </div>
            </div>
        </>
    )
}

export default CriptoQuote