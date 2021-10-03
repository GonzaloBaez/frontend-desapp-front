import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import CriptoQuote from './CriptoQuote';

function Home(){

    const [criptos,setCriptos] = useState({});
    const [showCriptos,setShowCriptos] = useState(false)
    const [dollarQuote,setDollarQuote] = useState(0)

    useEffect(()=>{
        getCriptosQuoteInARS()
      },[])


      const getCriptosQuoteInARS = () =>{
        setDollarQuote(189)
        if(dollarQuote == 0){
            axios.get("http://localhost:8080/api/dollar/")
            .then((response) => {
                let dollarPrice = JSON.parse(JSON.stringify(response.data))
                setDollarQuote(dollarPrice)
            })
        }
        getCriptos()
      }
      const getCriptos = () =>{
        axios.get("http://localhost:8080/api/cryptos/quotes")
        .then((response) => {
            let responseCripto = JSON.parse(JSON.stringify(response.data))
            setCriptos(responseCripto)
            setShowCriptos(true)
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