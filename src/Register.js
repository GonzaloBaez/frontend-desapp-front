import React,{userEffect,useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register(){
    let history = useHistory()

    const [data,setData] = useState({name:'',surname:'',email:'',address:'',password:'',
                                             cvu:'', wallet:''})

    const handleInputChange = (event) =>{
        event.preventDefault();
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }
    
    const handleRegister = (event) =>{
        event.preventDefault();
        axios
           .post('http://localhost:8080/register',data)
            .then((response => {
                history.push('/home')
            }))
    }

    return(
        <>
         <div className="register-main-div">
             <form className="register-form" onSubmit={handleRegister}>
                <div className="form-group">
                    <input required className="form-control" name= "name" type="text"  value = {data.name} onChange = {handleInputChange} placeholder="Name"/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "surname" type="text"  value = {data.surname} onChange = {handleInputChange} placeholder="Surname"/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "email" type="text"  value = {data.email} onChange = {handleInputChange} placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "address" type="text"  value = {data.address} onChange = {handleInputChange} placeholder="Address"/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "password" type="password"  value = {data.password} onChange = {handleInputChange} placeholder="Password"/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "cvu" type="text"  value = {data.cvu} onChange = {handleInputChange} placeholder="Cvu"/>
                </div>
                <div className="form-group">
                    <input required className="form-control" name= "wallet" type="text"  value = {data.wallet} onChange = {handleInputChange} placeholder="Wallet"/>
                </div>
                <div className="form-group">  
                    <button required type="submit" className="btn btn-primary"> Register </button>
                </div>
             </form>
         </div>
        </>
    )
}

export default Register;