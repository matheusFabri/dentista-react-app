import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import PrivateRoutes from './util/PrivateRoutes';
import Home from './components/Home';
import CadastroDentista from './components/CadastroDentista';
import ListaDentista from './components/ListaDentista';
import ListaConsulta from './components/ListaConsulta';
import AlteraDentista from './components/AlteraDentista';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />}>
            <Route path="/cadastroDentista" element={<CadastroDentista />} />
            <Route path="/listaDentista" element={<ListaDentista />} />
            <Route path="/alteraDentista/:item" element={<AlteraDentista />} />
            <Route path="/listaConsulta" element={<ListaConsulta />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
