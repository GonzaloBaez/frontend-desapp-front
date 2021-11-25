import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Activity from './Activity';
import { useTranslation } from "react-i18next";
import NavBar from './Navbar';

function Activities(){

    const [showActivities,setShowActivities] = useState(false)
    const [activities,setActivities] = useState([])
    const config = {
        headers:{'Authorization': 'Bearer '+localStorage.getItem("token"),
                'Access-Control-Allow-Origin': 'http://localhost:3000'}
    };
    const { t, i18n } = useTranslation();

    useEffect(()=>{
        getTransactions()
      },[])

    const getTransactions = () =>{
        axios.get("http://localhost:8080/api/transaction/activities",config)
        .then((response) => {
            let responseTransactions = JSON.parse(JSON.stringify(response.data))
            setActivities(responseTransactions)
            console.log('activity: ',responseTransactions)
            setShowActivities(true)
        })
    }
    
    return(
        <>
            <NavBar/>
            <div className="transactions">
                {
                    activities.length
                    !=0 && showActivities && activities.map(activity => <Activity id={activity.id} user={activity.user} hour={activity.hour} 
                        cryptoName={activity.cryptoName} unitValue={activity.unitValue} quote={activity.quote} totalPrice={activity.totalPrice} 
                        amount={activity.amount} type={activity.type} cvu={activity.cvu} wallet={activity.wallet} reputation={activity.reputation} state={activity.state}/>)
                }
                {!showActivities &&
                            <div className="alert alert-info" role="alert">
                                {t("cargandoTransacciones")}
                            </div>
                }
                {showActivities && activities.length==0 &&
                            <div className="alert alert-success" role="alert">
                                {t("noExistenTransacciones")}
                            </div>
                }
            </div>
        </>
    )
}

export default Activities;