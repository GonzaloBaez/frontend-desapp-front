import Modal from 'react-bootstrap/Modal'
import React,{useState} from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "./styles/CriptoQuote.css"

function CriptoQuote({symbol,price,dollarQuote,date,hour}){
    
    const [showModelAmount, setShowModelAmount] = useState(false);
    const [showModelCreationOk, setShowModelCreationOk] = useState(false);
    const [showModelCreationFailed, setShowModelCreationFailed] = useState(false);
    let isInvalidAmount = false
    const [showMessageInvalidValue,setShowMessageInvalidValue] = useState(false)
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
        amount: "",
        type:""
    }

    const handleCloseModelAmount = () => {
        setShowModelAmount(false)
        resetAmountAndSignals()
    }
    const handleCloseModelCreationOk = () => {
        setShowModelCreationOk(false)
        resetAmountAndSignals()
    }
    const handleCloseModelCreationFailed = () => {
        setShowModelCreationFailed(false)
        resetAmountAndSignals()
    }

    const handleShowModelAmount = (event) => {
        event.preventDefault()
        setTipotransaccion(event.target.name)
        setShowModelAmount(true);
    }

    const handleShowModelCreationOk = () => setShowModelCreationOk(true)
    const handleShowModelCreationFailed = () => setShowModelCreationFailed(true)

    const handleTransactionCreation = (event)=>{
        event.preventDefault()
        isInvalidAmount = amount <= 0
        if (!isInvalidAmount){
        postTransaction();
        }else{
            console.log("logue mensaje")
            setShowMessageInvalidValue(true)
        }
    }

    const postTransaction = () => {
        let email = localStorage.getItem("usuario");
        transaction.user = email;
        transaction.cryptoName = symbol;
        transaction.unitValue = price;
        transaction.quote = currency;
        transaction.totalPrice = currency * amount;
        transaction.amount = amount;
        transaction.type = tipoTransaccion

        axios
            .post('http://localhost:8080/api/transaction/create', transaction, config)
            .then((response => {
                handleCloseModelAmount();
                handleShowModelCreationOk();
                setAmount(0);
            })).catch((error) => {
                handleCloseModelAmount();
                handleShowModelCreationFailed();
            });
    }
    
    const handleAmountChange = (event) =>{
        event.preventDefault()
        setAmount(event.target.value)
    }

    const resetAmountAndSignals = () =>{
        setAmount(0)
        setShowMessageInvalidValue(false)
    }

    return(
        <>
            <div class="card w-50 cardCriptoQuote">
                <div class="card-body">
                    <h5 class="card-title">{symbol}</h5>
                    <p className="card-text">{t("price") + ": " + t('currency',{ currency })}</p>
                    <p className="card-text">{t("date")+": " + t('dates',{ date })}</p>
                    <p className="card-text">{t("hour")+": " + hour}</p>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" onClick={handleShowModelAmount} name="Compra">Compra</button>
                        <button type="button" class="btn btn-primary" onClick={handleShowModelAmount} name="Venta">Venta</button>
                    </div>
                    <Modal
                    show={showModelAmount}
                    onHide={handleCloseModelAmount}
                    backdrop="static"
                    keyboard={false}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>{"Creando transacción de " + tipoTransaccion} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {"Ingrese una cantidad a operar de " + symbol}
                        <input required className="form-control" required name= "username" type="number" value={amount} onChange={handleAmountChange} placeholder={"Cantidad de " + symbol}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" type="button" class="btn btn-warning" onClick={handleCloseModelAmount}>Cancelar</button>
                        <button variant="primary" type="button" class="btn btn-success" onClick={handleTransactionCreation}>Crear transacción</button>
                        {showMessageInvalidValue &&
                        <div class="alert alert-warning invalidAmount" role="alert">
                            Cantidad ingresada incorrecta
                        </div>
                    }
                    </Modal.Footer>
                    </Modal>

                    <Modal
                    show={showModelCreationOk}
                    onHide={handleCloseModelCreationOk}
                    backdrop="static"
                    keyboard={false}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>{"La transaccion fue creada correctamente"} </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <button variant="secondary" type="button" class="btn btn-success" onClick={handleCloseModelCreationOk}>Aceptar</button>
                    </Modal.Footer>
                    </Modal>

                    <Modal
                    show={showModelCreationFailed}
                    onHide={handleCloseModelCreationFailed}
                    backdrop="static"
                    keyboard={false}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>{"La transaccion no fue creada debido a un error"} </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <button variant="secondary" type="button" class="btn btn-warning" onClick={handleCloseModelCreationFailed}>Aceptar</button>
                    </Modal.Footer>
                    </Modal>
                </div>  
            </div>
        </>
    )
}

export default CriptoQuote