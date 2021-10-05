import React,{useEffect, useState} from 'react';
import CriptoQuote from './CriptoQuote';
import axios from 'axios';
import './styles/Home.css'
import NavBar from './Navbar';
function Home(){

    const [criptos,setCriptos] = useState({});
    const [showCriptos,setShowCriptos] = useState(false)
    const [dollarQuote,setDollarQuote] = useState(0)
    const config = {
        headers:{'Authorization': 'Bearer '+localStorage.getItem("token"),
                'Access-Control-Allow-Origin': 'http://localhost:3000'}
    };

    useEffect(()=>{
        getCriptos()
        getCriptosQuoteInARS()
      },[])


      const getCriptosQuoteInARS = () =>{

        axios.get("http://localhost:8080/api/dollar/",config)
        .then((response) => {
            let dollarPrice = JSON.parse(JSON.stringify(response.data))
            setDollarQuote(dollarPrice)
            console.log("dollar "+ dollarQuote)

        }).catch(error =>{
            console.log("Error 1234: " + error)
        })
      }

      const getCriptos = () =>{
        axios.get("http://localhost:8080/api/cryptos/quotes",config)
        .then((response) => {
            
            let responseCripto = JSON.parse(JSON.stringify(response.data))
            setCriptos(responseCripto)
            setShowCriptos(true)
        })
      }
    
    return(
        <>
        <NavBar/>
            {
                showCriptos && criptos.map(cripto => <CriptoQuote symbol={cripto.symbol} price={cripto.price} dollarQuote={dollarQuote.v} date={cripto.date} hour={cripto.hour}/>)
            }
            {!showCriptos &&
                        <div class="alert alert-info" role="alert">
                            Cargando cotizaciones
                        </div>
            }
            
        </>
    )
}

export default Home;