import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css';
import GoogleLogin from 'react-google-login';

export default function HeaderMain() {

  const[profilePic, setProfilePic] = useState()
  
  const responseGoogle = (response)=>{
    //  const{profileObj:{imgUrl}} = response
    //  setProfilePic(imgUrl)
    console.log(response)
  }

  return ( 

    
      <body>
        
      
    
   <header>
   <div className='hchaves' >
        <link rel="stylesheet" href="src\assets\images\homefoto.png" />

    </div>
    <div className='mcontainer' > 
    <div className='logo' > 
    <h1> LocaSim</h1>
    </div>
    <div className="mmenus"> 
    <Link to={"/"}> Home </Link>

    <Link to={"/sobre"}> Sobre </Link>

    <Link to={"/contato"}> Contato </Link>  

    <Link to={"/acomodacoes"}> Acomodações </Link>  
    <div className="container">
    <div className='profilePic'>
      <img src={profilePic} alt="" />
    </div>
    <div className="container">
      <GoogleLogin
      clientId='338813839374-ij4r5ot709q6q7h3cgdfrdsuq797o582.apps.googleusercontent.com'
      buttonText='Logar'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}/>
    </div>
    
    </div>
    

    </div>
    </div>
   </header>

   </body>
   
  )
   
}



  
