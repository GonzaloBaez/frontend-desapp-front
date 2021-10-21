import React,{useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";

function CriptoQuote({symbol,price,dollarQuote,date,hour}){
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
    return(
        <>
            <div class="card w-50">
                <div class="card-body">
                <select onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="es">{t("language.es")}</option>
                    <option value="enUS">{t("language.enUS")}</option>
                </select>
                <hr />
                    <h5 class="card-title">{symbol}</h5>
                    <p class="card-text">{"Price: " + (price * dollarQuote).toFixed(2) + " ARS"}</p>
                    <p class="card-text">{"Date: " + t('dates',{ date })}</p>
                    <p class="card-text">{"Hour: " + hour}</p>
                </div>
            </div>
        </>
    )
}

export default CriptoQuote