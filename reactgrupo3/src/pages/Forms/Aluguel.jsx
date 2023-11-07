import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from 'react'
import '../Forms/aluguel.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";


const validationPost = yup.object().shape({
  nome: yup.string().required("Preencha com o seu nome").max(40, "Até 40 caract."),
  email: yup
    .string()
    .required("Preencha com o seu email")
    .max(30, "Até 30 caract."),
  telefone: yup
    .string()
    .required("Preencha o seu telefone")
    .max(11, "Até 11 caract."),
    cpf: yup
    .string()
    .required("Preencha o seu cpf")
    .max(11, "Até 11 caract."),
});

export default function Aluguel() {

  let navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }} = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data)=> axios.post("https://6542e08c01b5e279de1fad8b.mockapi.io/inquilino", data)
  .then(()=>{
    console.log("Post deu certo!")
    navigate("/acomodacoes")
  })
  .catch(()=>{
    console.log("Post deu certo!")
  })

  return (
    <div className='Alcontainer'>
      <div className="Alheader">
        <h2>Preencha o formulário</h2>
      </div>
        <form className="Alform" onSubmit={handleSubmit(addPost)}>
          <div className="fields">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id='nome' {...register("nome")}/>
          </div>
          <div className="fields">
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' {...register("email")}/>
          </div>
          <div className="fields">
            <label htmlFor="telefone">Telefone:</label>
            <input type="text" id='telefone' {...register("telefone")}/>
          </div>
          <div className="fields">
            <label htmlFor="cpf">Cpf:</label>
            <input type="text" id='cpf' {...register("cpf")}/>
          </div>
          <button >Enviar</button>
        </form>
      </div>
  )
}
