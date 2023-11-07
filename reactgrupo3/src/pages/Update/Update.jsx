import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../Forms/aluguel.css'

const validationPost = yup.object().shape({
  nome: yup.string().required("Preencha com o seu nome").max(40, "Até 40 caract."),
  email: yup
    .string()
    .required("Preencha com o seu email")
    .max(50, "Até 30 caract."),
  telefone: yup
    .string()
    .required("Preencha o seu telefone")
    .max(50, "Até 11 caract."),
    cpf: yup
    .string()
    .required("Preencha o seu cpf")
    .max(50, "Até 11 caract."),
});

export default function Update() {
    const [conta, setConta] = useState({})
    const { id } = useParams()
    let navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }} = useForm({ resolver: yupResolver(validationPost) });

  useEffect(() => {
    axios
      .get(`https://6542e08c01b5e279de1fad8b.mockapi.io/inquilino/${id}`)
      .then((response) => {
        reset(response.data);
      })
      .catch(() => {
        console.log("Deu errado !");
      });
  }, []);
  

  const updateConta = (data)=> axios.put(`https://6542e08c01b5e279de1fad8b.mockapi.io/inquilino/${id}`, data)
  .then(()=>{
    console.log("Update deu certo!")
    navigate(`/conta/${id}`)
  })
  .catch(()=>{
    console.log("Update deu certo!")
  })

  return (
    <div className='Alcontainer'>
      <div className="Alheader">
        <h2>Atualizar Informações</h2>
      </div>
        <form className="Alform" action="#" onSubmit={handleSubmit(updateConta)}>
          <div className="fields">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id='nome' {...register("nome")}/>
            {/* <p className="error-message">{errors.nome?.message}</p> */}
          </div>
          <div className="fields">
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' {...register("email")}/>
            {/* <p className="error-message">{errors.email?.message}</p> */}
          </div>
          <div className="fields">
            <label htmlFor="telefone">Telefone:</label>
            <input type="text" id='telefone' {...register("telefone")}/>
            {/* <p className="error-message">{errors.telefone?.message}</p> */}
          </div>
          <div className="fields">
            <label htmlFor="cpf">Cpf:</label>
            <input type="text" id='cpf' {...register("cpf")}/>
            {/* <p className="error-message">{errors.cpf?.message}</p> */}
          </div>
          <button >Atualizar</button>
        </form>
      </div>
  )
}
