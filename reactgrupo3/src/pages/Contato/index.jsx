
import './contato.css';
import email from '../../assets/contato/email-outline-removebg-preview.png';
import celular from '../../assets/contato/phone-outline.png';
import { useState } from 'react';

export default function Contato() {
  const [formulario, setFormulario] = useState ({
    nome: '',
  email: '',
  mensagem: '',
})
  const handleSubmit = async (event) => { 
    event.preventDefault(); // Evita o comportamento padrão de enviar o formulário
  
    // const formulario = document.getElementById('formularioContato');
    // const formData = new FormData(formulario);
  
    try {
      const response = await fetch('https://65498611e182221f8d51a3fc.mockapi.io/formularioContato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formulario),
      });
  
      if (response.ok) {
        // Requisição bem-sucedida, faça algo com a resposta, se necessário
        alert('Formulário enviado com sucesso!');
      } else {
        // Lidar com erros, se houver
        alert('Erro ao enviar o formulário.');
      }
    } catch (error) {
      // Lidar com erros de rede ou outros erros
      console.error('Erro ao enviar o formulário:', error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormulario (prevState =>({...prevState, [name]: value}));
  };
  return (
    <div className="cmain">
      <div className="ccontainer">
        <div className="ccontato">
          <h2>Entre em contato conosco</h2>

          <div className="ccontatoInfo">
            <div className="cicone">
              <img src={celular} alt="ccelular" />
              <p>0800 976 5801</p>
            </div>

            <div className="cicone">
              <img src={email} alt="cemail" />
              <p>LocaSim@gmail.com</p>
            </div>
          </div>

          <div className="csocial">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="box-formulario">
        <div className="formulario">
          

          <form 
          id = "formularioContato"
          onSubmit = {handleSubmit}
          action="#" method="post">
            <div className="input-container">
              <input
                type="text"
                className="input"
                id="nome"
                name="nome"
                placeholder="Nome"
                autoComplete="off"
                required
              />
              <label htmlFor="nome" value = {formulario.nome} onChange={handleInputChange}>
                <i className="icon icon-user-1"></i>
              </label>
            </div>

            <div className="input-container">
              <input
      
                type="text"
                className="input"
                id="email"
                name="email"
                placeholder="E-mail"
                autoComplete="off"
                required
              />
              <label htmlFor="email" value = {formulario.email} onChange={handleInputChange}>
                
                <i className="icon icon-mail-1"></i>
              </label>
            </div>

            <div className="input-container">
              <input
                type="text"
                className="input"
                id="assunto"
                name="assunto"
                placeholder="Assunto"
                autoComplete="off"
                required
              />
              <label htmlFor="assunto">
                <i className="icon icon-info"></i>
              </label>
            </div>

            <div className="input-container">
              <textarea
                className="textarea"
                id="mensagem"
                name="mensagem"
                rows="3"
                placeholder="Mensagem"
                autoComplete="off"
                required
              ></textarea>
              <label htmlFor="mensagem"value = {formulario.mensagem} onChange={handleInputChange}>
                <i className="icon icon-comment"></i>
              </label>
            </div>

            <div className="box-pulse">
              <button type="submit" className="botao-pulse"
              onClick={handleSubmit}>
            
                <i className="icon icon-heart-3"></i> Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
