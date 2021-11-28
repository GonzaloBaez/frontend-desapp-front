import "./styles/Users.css"
import Dropdown from 'react-bootstrap/Dropdown'
import Collapse from 'react-bootstrap/Collapse'
import React,{useState} from 'react';
import { useTranslation } from "react-i18next";
function User({name,surname,email,address,cvu,wallet,points,operations,reputation}){
    const [open,setOpen] = useState(false)
    const { t, i18n } = useTranslation();
    return(
        <>
            <div className="users-list">
                <div className="user-dropdown-button">
                    <Dropdown 
                        className="btn btn-info asd dropdownColorStyle"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}>
                           {t("usuario")+": "+ email} 
                    </Dropdown>
                    <Collapse in={open}>
                    <div className="user-information">
                        <p className="card-text-user">{t("nombre")+": " + name}</p>
                        <p className="card-text-user">{t("apellido")+": " + surname}</p>
                        <p className="card-text-user">{t("direccion")+": " + address}</p>
                        <p className="card-text-user">{"Cvu: " + cvu}</p>
                        <p className="card-text-user">{t("billetera")+": "+ wallet}</p>
                        <p className="card-text-user">{t("puntos")+": " + points}</p>
                        <p className="card-text-user">{t("operaciones")+": " + operations}</p>
                        <p className="card-text-user">{t("reputacion")+": " + reputation}</p> 
                    </div>
                </Collapse>
                </div>    
                
            </div>    
        </>
    )
}


export default User
