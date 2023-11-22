import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './components/Root';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Root}>
          <Route path="login" element={Login}></Route>
          <Route path="cadastrar" element={Cadastro}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
