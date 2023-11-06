import React from 'react'
import { Link } from 'react-router-dom'
import "../Home/style.css"

export default function Home() {
    return (
        
        <body>

            <div className='hcontainer' >

   <Link to="/Acomodacoes">  
    <button className='hacomodacoes' >Acomodações</button>
    </Link>

    </div>

   </body> 
    )
}
