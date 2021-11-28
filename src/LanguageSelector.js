import React,{useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";

function LanguageSelector(){

    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };
      return(
        <>
            <select onChange={(e) => changeLanguage(e.target.value)} className="languageSelector form-select">
                <option value="es">{t("language.es")}</option>
                <option value="enUS">{t("language.enUS")}</option>
            </select>
        </>
      )
    }

export default LanguageSelector;