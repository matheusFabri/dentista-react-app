import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = () => {
  const token = cookies.get('jwt_auth');
  return token;
};

export const setToken = (token) => {
  cookies.set('jwt_auth', token);
};
