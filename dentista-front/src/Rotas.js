import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import PrivateRoutes from './util/PrivateRoutes';
import Home from './components/Home';
import CadastroDentista from './components/CadastroDentista';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />}>
            <Route path="/cadastroDentista" element={<CadastroDentista />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
