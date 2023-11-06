import React from 'react'
import "./contato.css"
import email from "../../assets/contato/email-outline-removebg-preview.png";
import celular from "../../assets/contato/phone-outline.png";


export default function Contato() {
  return (
    <div className='cmain'>
      <div className="ccontainer">
        <div className="ccontato">
          <h2>Entre em contato conosco</h2>
          
          <div 
          className="ccontatoInfo">
            <div className="cicone">
              <img src={celular} alt="ccelular" />
              <p>
              0800 976 5801


              </p>
            </div>
           
            <div className = "cicone">
            <img src={email} alt="cemail" ></img>
            <p>
               LocaSim@gmail.com
            </p>
               </div>
            
          </div>
          <div className="csocial">
            <a href="#" target='_blank'>Instagram</a>

          </div>
        </div>
      </div>


    </div>
  )
}
