import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

export default function HeaderMain() {

  return ( 

   <header>
    <div className='container' > 
    <div className='logo' > 
    <h1> LocaSim</h1>
    </div>
    <div className="menus"> 
    <Link to={"/"}> Home </Link>

    <Link to={"/sobre"}> Sobre </Link>

    <Link to={"/contato"}> Contato </Link>  

    <Link to={"/acomodacoes"}> Acomodações </Link>  

    </div>
    </div>
   </header>
  )
   
}

{/* <body>
   <img className='homefoto' src="src\assets\homefoto.png" alt="homefoto" />

    <p className='inicialtext' >Bem-vindo ao LocaSim!

O LocaSim é um site de aluguel de imóveis que oferece uma variedade de opções para atender às suas necessidades. Seja você procurando um apartamento, uma casa ou um imóvel comercial para alugar, temos o que você procura. Clique e LocaSim</p>
   <Link to="/Acomodacoes">  
    <button className='acomodacoes' > Acomodações</button>
    </Link>

   </body> */}

  
