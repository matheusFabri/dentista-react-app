import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

function PrivateRoutes({ children, ...rest }) {
  const { autenticado } = useContext(AuthContext);

  return autenticado ? <Outlet /> : <Navigate to={'/login'} />;
}

export default PrivateRoutes;
