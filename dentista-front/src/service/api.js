import axios from 'axios';
import { getToken } from '../auth/token';

const urlBase = 'http://localhost:5216';

export async function apiGetAuth(url) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + getToken() },
  });

  try {
    const response = await instance.get(`/v1/${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function apiGetByIdAuth(url, id) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + getToken() },
  });

  try {
    const response = await instance.get(`/v1/${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function apiPostAuth(url, objeto) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + getToken() },
  });

  try {
    instance.post(`/v1/${url}`, objeto);
  } catch (error) {
    console.error(error);
  }
}

export async function apiPutAuth(url, id, objeto) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + getToken() },
  });

  try {
    instance.put(`/v1/${url}/${id}`, objeto);
  } catch (error) {
    console.error(error);
  }
}

export async function apiDeleteAuth(url, id) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + getToken() },
  });

  try {
    instance.delete(`/v1/${url}/${id}`);
  } catch (error) {
    console.error(error);
  }
}

export async function apiGetById(id) {
  try {
    const response = await axios.get(`${urlBase}/v1/home/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export function apiPost(url, obj) {
  try {
    axios.post(`${urlBase}/v1/home/${url}`, obj);
  } catch (error) {
    console.error(error);
  }
}

export async function apiLogin(obj) {
  try {
    const response = await axios.post(`${urlBase}/v1/home/login`, obj);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
