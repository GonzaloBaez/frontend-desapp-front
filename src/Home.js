import React,{useEffect, useState} from 'react';
import CriptoQuote from './CriptoQuote';
import api from './api/api';
import './styles/Home.css'
function Home(){

    const [criptos,setCriptos] = useState({});
    const [showCriptos,setShowCriptos] = useState(false)
    const [dollarQuote,setDollarQuote] = useState(0)
    

    useEffect(()=>{
        getCriptosQuoteInARS()
        getCriptos()

      },[])


      const getCriptosQuoteInARS = () =>{
        api.getDollar()
        .then((response) => {
            let dollarPrice = JSON.parse(JSON.stringify(response))
            setDollarQuote(dollarPrice)
        }).catch(error =>{
            console.log("Error 1234: " + error)
        })
      }

      const getCriptos = () =>{

        api.getCryptos().then((data) => {
            let responseCripto = JSON.parse(JSON.stringify(data))
            setCriptos(responseCripto)
            setShowCriptos(true)
        }).catch(error =>{
            console.log(error)
        })

      }
    
    return(
        <>
            {
                showCriptos && criptos.map(cripto => <CriptoQuote symbol={cripto.symbol} price={cripto.price} dollarQuote={dollarQuote.v} date={cripto.date} hour={cripto.hour}/>)
            }
            
        </>
    )
}

export default Home;