import { createContext, useState } from 'react';
import { getToken, removeToken, setToken } from '../auth/token';
import { apiLogin } from '../service/Api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);
  const [user, setUser] = useState({
    login: '',
    password: '',
  });

  const [userLogged, setUserLogged] = useState({
    id: '',
    nome: '',
    email: '',
    login: '',
    role: '',
    cpf: '',
    dataNasc: '',
    telefone: '',
    ativo: '',
  });

  const login = async () => {
    const res = await apiLogin(user);

    console.log(res);
    const token = res.result;
    setToken(token);

    setUserLogged({
      ...userLogged,
      id: res.usuario.id,
      nome: res.usuario.nome,
      email: res.usuario.email,
      login: res.usuario.login,
      role: res.usuario.role,
      cpf: res.usuario.cpf,
      dataNasc: res.usuario.dataNasc,
      telefone: res.usuario.telefone,
      ativo: res.usuario.ativo,
    });
    if (res.status === 1) {
      setAutenticado(true);
    }
  };

  const logout = () => {
    removeToken();
    setUserLogged({
      ...userLogged,
      id: 0,
      nome: '',
      email: '',
      login: '',
      role: '',
      cpf: '',
      dataNasc: '',
      telefone: '',
      ativo: '',
    });
    setAutenticado(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, userLogged, logout, autenticado }}
    >
      {children}
    </AuthContext.Provider>
  );
};
