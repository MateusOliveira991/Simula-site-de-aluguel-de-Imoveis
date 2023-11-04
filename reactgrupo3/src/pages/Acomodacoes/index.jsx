import React from 'react'
import '../Acomodacoes/style.css'

export default function Acomodacoes() {



  return (
    <div className="Acontainer">
      <div className='Aheader'>
        <h2>Acomodações</h2>
      </div>
      <div className="Acards">
        <div className="Acard">
          <img src="src\assets\images\casa.jpg" alt="imagem de casa" width={200}/>
          <h3>Título da casa</h3>
          <p>descrição da casa</p>
          <div className="aluguel">
            <button className='Abtn'>Alugar</button>
            <span className='Apreco'>R$ 325,00</span>
          </div>
        </div>
        <div className="Acard">
          <img src="src\assets\images\casa1.jpg" alt="imagem de casa" width={200}/>
          <h3>Título da casa</h3>
          <p>descrição da casa</p>
          <div className="aluguel">
            <button className='Abtn'>Alugar</button>
            <span className='Apreco'>R$ 325,00</span>
          </div>
        </div>
        <div className="Acard">
          <img src="src\assets\images\casa2.jpg" alt="imagem de casa" width={200}/>
          <h3>Título da casa</h3>
          <p>descrição da casa</p>
          <div className="aluguel">
            <button className='Abtn'>Alugar</button>
            <span className='Apreco'>R$ 325,00</span>
          </div>
        </div>
      </div>
    </div>
  )
}
