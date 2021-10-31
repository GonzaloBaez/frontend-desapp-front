import "./styles/Users.css"
import Dropdown from 'react-bootstrap/Dropdown'
import Collapse from 'react-bootstrap/Collapse'
import React,{useState} from 'react';

function User({name,surname,email,address,cvu,wallet,points,operations,reputation}){
    const [open,setOpen] = useState(false)
    return(
        <>
            <div className="users-list">
                <div className="user-dropdown-button">
                    <Dropdown 
                        className="btn btn-info dropdown-toggle"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}>
                           {'User: ' + email} 
                    </Dropdown>
                </div>    
                <Collapse in={open}>
                    <div className="user-information">
                        <p className="card-text-user">{"Name: " + name}</p>
                        <p className="card-text-user">{"Surname: " + surname}</p>
                        <p className="card-text-user">{"Address: " + address}</p>
                        <p className="card-text-user">{"Cvu: " + cvu}</p>
                        <p className="card-text-user">{"Wallet: " + wallet}</p>
                        <p className="card-text-user">{"Points: " + points}</p>
                        <p className="card-text-user">{"Operations: " + operations}</p>
                        <p className="card-text-user">{"Reputation: " + reputation}</p> 
                    </div>
                </Collapse>
            </div>    
        </>
    )
}


export default User
