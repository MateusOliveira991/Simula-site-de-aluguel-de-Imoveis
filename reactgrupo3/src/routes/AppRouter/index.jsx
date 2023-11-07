import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';
import Contato from '../../pages/Contato';
import Acomodacoes from '../../pages/Acomodacoes';
import Erro from '../../pages/Erro';
import Aluguel from '../../pages/Forms/Aluguel';
import Conta from '../../pages/Conta/Conta';
import Update from '../../pages/Update/Update';

export default function AppRouter() {
  return (
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/sobre' element={<Sobre/>} ></Route>
    <Route path='/contato' element={<Contato/>} ></Route>
    <Route path='/acomodacoes' element={<Acomodacoes/>} ></Route>
    <Route path='/aluguel' element={<Aluguel/>} ></Route>
    <Route path='*' element={<Erro/>} ></Route>
    <Route path='/conta/:id' element={<Conta/>} ></Route>
    <Route path='/update/:id' element={<Update/>} ></Route>
    </Routes>
  )
}
