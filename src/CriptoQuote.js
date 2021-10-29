import Modal from 'react-bootstrap/Modal'
import React,{useState} from 'react';

function CriptoQuote({symbol,price,dollarQuote,date,hour}){
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <div class="card w-50">
                <div class="card-body">
                    <h5 class="card-title">{symbol}</h5>
                    <p class="card-text">{"Price: " + (price * dollarQuote).toFixed(2) + " ARS"}</p>
                    <p class="card-text">{"Date: " + date}</p>
                    <p class="card-text">{"Hour: " + hour}</p>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" onClick={handleShow}>Compra</button>
                        <button type="button" class="btn btn-primary">Venta</button>
                    </div>
                    <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>Creando transaccion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {"Ingrese un monto para la cripto " + symbol}
                        <input required className="form-control" name= "username" type="text" placeholder="Monto de la transaccion"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" type="button" class="btn btn-primary" onClick={handleClose}>Cancelar</button>
                        <button variant="primary" type="button" class="btn btn-primary">Crear transacción</button>
                    </Modal.Footer>
                    </Modal>
                </div>  
            </div>
        </>
    )
}

export default CriptoQuote