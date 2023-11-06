import React from 'react'
import '../Forms/proprietario.css'

export default function Aluguel() {
  return (
    <div className='Alcontainer'>
      <div className="Alheader">
        <h2>Cadastre sua residência</h2>
      </div>
        <form className="Alform">
          <div className="fields">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id='nome'/>
          </div>
          <div className="fields">
            <label htmlFor="email">Email:</label>
            <input type="text" id='email'/>
          </div>
          <div className="fields">
            <label htmlFor="telefone">Telefone:</label>
            <input type="text" id='telefone'/>
          </div>
          <div className="fields">
            <label htmlFor="cpf">Cpf:</label>
            <input type="text" id='cpf'/>
          </div>
          <button>Enviar</button>
        </form>
      </div>
  )
}
