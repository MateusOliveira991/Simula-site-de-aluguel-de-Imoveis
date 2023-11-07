import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import '../Conta/style.css'
export default function Conta() {
  const [conta, setConta] = useState({})
  const { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://6542e08c01b5e279de1fad8b.mockapi.io/inquilino/${id}`)
      .then((response) => {
        setConta(response.data);
      })
      .catch(() => {
        console.log("Deu errado !");
      });
  }, []);

  function encerrarConta(id){
    axios.delete(`https://6542e08c01b5e279de1fad8b.mockapi.io/inquilino/${id}`)
    navigate("/acomodacoes")
  }

    return (
    <div className="dados" >
      <h2>Informações do Usuário</h2>
      <h2>Nome: {conta.nome}</h2>
      <h2>CPF: {conta.cpf}</h2>
      <h2>Telefone: {conta.telefone}</h2>
      <h2>Email: {conta.email}</h2>
      <Link to = {`/update/${conta.id}`}>
                      <button className="conta-btn">Editar</button>
                    </Link>
      <button className="conta-btn encerrar" onClick={()=>encerrarConta(conta.id)}>Encerrar Conta</button>
    </div>
  )
}
