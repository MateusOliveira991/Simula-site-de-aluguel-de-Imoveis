import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderMain() {
  return (

   <header>
    <div className='container' > 
    <div className='logo' > 
    <h1> LocaSim</h1>
    </div>
    <div className="menus"> 
    <Link to="/">  
    <button> Home</button>
    </Link>

    <Link to="/Sobre">  
    <button> Sobre</button>
    </Link>

    <Link to="/Contato">  
    <button> Contato</button>
    </Link>
    

    </div>

    </div>

   </header>
  )
}
