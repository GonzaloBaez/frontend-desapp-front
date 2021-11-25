import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import User from './User'
import './styles/Users.css'
import NavBar from './Navbar';

function Users(){
    const [users,setUsers] = useState({})
    const [showUsers,setShowUsers] = useState(false)

    useEffect(()=>{
        getUsers()
      },[])
    
    const { t, i18n } = useTranslation();
    const getUsers = () =>{
        axios.get('http://localhost:8080/api/users')
         .then((response) => {
             let usersDetails = JSON.parse(JSON.stringify(response.data))
             console.log('users : ',usersDetails)
             setUsers(usersDetails)
             setShowUsers(true)
         })
    }

    return(
        <>
            <NavBar/>
            <div className="usersDetails">
                {
                    showUsers && users.map(user => <User name={user.name} surname={user.surname} email={user.email} address={user.address} cvu={user.cvu}
                                                   wallet={user.wallet} points={user.points} operations={user.operations} reputation={user.reputation}/>)
                }
                {!showUsers &&
                        <div className="alert alert-info" role="alert">
                            {t("cargandoUsuarios")}
                        </div>
                }
            </div>
        </>
    )
}

export default Users