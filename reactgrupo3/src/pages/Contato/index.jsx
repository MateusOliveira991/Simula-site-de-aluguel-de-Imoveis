import React from 'react'
import "./contato.css"
import email from "../../assets/contato/email-outline-removebg-preview.png";
import celular from "../../assets/contato/phone-outline.png";


export default function Contato() {
  return (
    <div className='main'>
      <div className="container">
        <div className="contato">
          <h1>Entre em contato conosco</h1>
          
          <div 
          className="contatoInfo">
            <div className="icone">
              <img src={celular} alt="celular" />
              <p>
              0800 976 5801


              </p>
            </div>
           
            <div className = "icone">
            <img src={email} alt="email" ></img>
            <p>
               LocaSim@gmail.com
            </p>
               </div>
            
          </div>
          <div className="social">
            <a href="#" target='_blank'>Instagram</a>

          </div>
        </div>
      </
      div>


    </div>
  )
}
