import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

function NavBar(){

    let history = useHistory();
    const [searchData,setSearchData] = useState('');
    const handleInputChange = (event) =>{
      event.preventDefault();
      setSearchData(event.target.value);
     
    }

    const handleSearchClick = (event) =>{
      history.push("/search?q=" + searchData.toString().replace('#', "%23"))
    }

    const [user,setUser] = useState({id: "",image: ""});

    useEffect(()=>{
      getUser()
    },[])

    const getUser = () =>{
      let token = localStorage.getItem("token")
      
      axios.get("http://localhost:7000/user",{headers:{'Authorization': token}})
      .then((response)=>{
        let responsePosts = JSON.parse(JSON.stringify(response.data))
        setUser(responsePosts)
      })
      .catch((error)=> console.log("Error: ", error));
    }
    const logout = (event) =>{
      event.preventDefault()
      localStorage.removeItem("token");
      history.push("/")
    }
  
    const goToTimeline = (event) =>{
      event.preventDefault()
      history.push("/home")
    }

    const handleClick = (event) => {
      history.push("/profile/" + user.id);
    }
      return(
        <>
        <nav className={"navbar navbar-sticky"}>
        <div className="bar">
          <img src="https://yt3.ggpht.com/bfP5JOmJYINOnJhwTFr1SVj4gHocn8U1TlRLNtdVMVmKB3S06z751pYEePhQQ8j-PDDeFU30tAU=s88-c-k-c0x00ffffff-no-rj" className=""alt="Logo criptoP2P" />
          <div className="input-group">
            <div className="input-group-prepend">
            <div>
              <img src="https://image.freepik.com/iconos-gratis/logout_318-10026.jpg" className="btn-logout" onClick={logout} width="40" height="40" alt="Logo logout"/></div>
            </div>
          </div> 
        </div>
        </nav>
        </>
      )
    }

export default NavBar;