import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

export default function HeaderMain() {

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

    </div>
    </div>
   </header>

   </body>
   
  )
   
}



  
