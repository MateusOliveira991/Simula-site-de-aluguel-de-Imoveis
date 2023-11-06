import React from 'react'
import { Link } from 'react-router-dom'
import "../Home/style.css"

export default function Home() {
    return (
        
        <body>

         <div></div>
   <img className='hhomefoto' src="src\assets\images\homefoto.png" alt="homefoto" />

    {/* <p className='hinicialtext' >Bem-vindo ao LocaSim!</p> */}
   <Link to="/Acomodacoes">  
    <button className='hacomodacoes' > Acomodações</button>
    </Link>

   </body> 
    )
}
