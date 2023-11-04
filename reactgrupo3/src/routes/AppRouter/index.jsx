import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';
import Contato from '../../pages/Contato';
import Acomodacoes from '../../pages/Acomodacoes';
import Erro from '../../pages/Erro';
import Aluguel from '../../pages/Forms/Aluguel';

export default function AppRouter() {
  return (
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/sobre' element={<Sobre/>} ></Route>
    <Route path='/contato' element={<Contato/>} ></Route>
    <Route path='/acomodacoes' element={<Acomodacoes/>} ></Route>
    <Route path='/aluguel' element={<Aluguel/>} ></Route>
    <Route path='*' element={<Erro/>} ></Route>
    </Routes>
  )
}
