import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import PendingActivity from './PendingActivity';
import NavBar from './Navbar';
function PendingActivities(){

    const [showActivities,setShowActivities] = useState(false)
    const [activities,setActivities] = useState([])
    const config = {
        headers:{'Authorization': 'Bearer '+localStorage.getItem("token"),
                'Access-Control-Allow-Origin': 'http://localhost:3000'}
    };
    let loggedUser = localStorage.getItem("usuario");

    useEffect(()=>{
        getTransactions()
      },[])
    const { t, i18n } = useTranslation();
    const getTransactions = () =>{
        axios.get("http://localhost:8080/api/transaction/pending-activities/"+loggedUser,config)
        .then((response) => {
            let responseTransactions = JSON.parse(JSON.stringify(response.data))
            setActivities(responseTransactions)
            setShowActivities(true)
        })
    }
    
    return(
        <>
        <NavBar/>
        <div className="pending-activities">
            {
                activities.length
                !=0 && showActivities && activities.map(activity => <PendingActivity id={activity.id} user={activity.user} hour={activity.hour} 
                    cryptoName={activity.cryptoName} unitValue={activity.unitValue} quote={activity.quote} totalPrice={activity.totalPrice} 
                    amount={activity.amount} type={activity.type} cvu={activity.cvu} wallet={activity.wallet} reputation={activity.reputation} state={activity.state} counterPart={loggedUser}/>)
            }
            {!showActivities &&
                        <div className="alert alert-info" role="alert">
                            {t("cargandoActividadesPendientes")}
                        </div>
            }
            {showActivities && activities.length==0 &&
                        <div className="alert alert-success" role="alert">
                            {t("noTienesActividadesPendientes")}
                        </div>
            }
        </div>
        </>
    )
}
export default PendingActivities