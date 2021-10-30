import Modal from 'react-bootstrap/Modal'
import React,{useState} from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

function CriptoQuote({symbol,price,dollarQuote,date,hour}){
    
    const [show, setShow] = useState(false);
    const { t, i18n } = useTranslation();
    const [tipoTransaccion,setTipotransaccion] = useState("")
    const currency = (price * (dollarQuote || 185)).toFixed(2)
    const [amount,setAmount] = useState(0)
    const config = {
        headers:{'Authorization': 'Bearer '+localStorage.getItem("token"),
                'Access-Control-Allow-Origin': 'http://localhost:3000'}
    };
    const transaction = {
        user: "",
        cryptoName: "",
        unitValue: "",
        quote: "",
        totalPrice: "",
        amount: ""
    }

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        event.preventDefault()
        setTipotransaccion(event.target.name)
        setShow(true);
    }

    const handleTransactionCreation = (event)=>{
        event.preventDefault()
        let email = localStorage.getItem("usuario")
        
        transaction.user= email
        transaction.cryptoName=symbol
        transaction.unitValue= price
        transaction.quote = currency
        transaction.totalPrice = currency * amount
        transaction.amount = amount
        
        axios
           .post('http://localhost:8080/api/transaction/create',transaction,config)
            .then((response => {
                handleClose()
                setAmount(0)
                
            }))

    }
    
    const handleAmountChange = (event) =>{
        event.preventDefault()
        setAmount(event.target.value)
    }

    return(
        <>
            <div class="card w-50">
                <div class="card-body">
                    <h5 class="card-title">{symbol}</h5>
                    <p className="card-text">{"Price: " + t('currency',{ currency })}</p>
                    <p className="card-text">{"Date: " + t('dates',{ date })}</p>
                    <p className="card-text">{"Hour: " + hour}</p>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" onClick={handleShow} name="Compra">Compra</button>
                        <button type="button" class="btn btn-primary" onClick={handleShow} name="Venta">Venta</button>
                    </div>
                    <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>{"Creando transacción de " + tipoTransaccion} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {"Ingrese una cantidad a operar de " + symbol}
                        <input required className="form-control" name= "username" type="text" value={amount} onChange={handleAmountChange} placeholder={"Cantidad de " + symbol}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" type="button" class="btn btn-warning" onClick={handleClose}>Cancelar</button>
                        <button variant="primary" type="button" class="btn btn-success" onClick={handleTransactionCreation}>Crear transacción</button>
                    </Modal.Footer>
                    </Modal>
                </div>  
            </div>
        </>
    )
}

export default CriptoQuote