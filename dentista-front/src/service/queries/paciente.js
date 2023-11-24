import { useQuery, useMutation } from '@tanstack/react-query';
import {
  apiDeleteAuth,
  apiGetAuth,
  apiGetByIdAuth,
  apiPost,
  apiPutAuth,
} from '../Api';

export function useGetPacientesAuth() {
  return useQuery({
    queryKey: ['getPacientesAuth'],
    queryFn: async () => {
      return await apiGetAuth('paciente');
    },
  });
}

export function useGetPacienteByIdAuth(id) {
  return useQuery({
    queryKey: ['getPacienteByIdAuth', id],
    queryFn: async () => {
      return await apiGetByIdAuth('paciente', id);
    },
  });
}
export function usePostPaciente() {
  return useMutation({
    mutationFn: (paciente) => {
      return apiPost('paciente', paciente);
    },
  });
}

export function useGetConsultaByPacienteIdAuth(id) {
  return useQuery({
    queryKey: ['getConsultaByPacienteIdAuth', id],
    queryFn: async () => {
      return await apiGetByIdAuth('paciente/consultas', id);
    },
  });
}

export function usePutPacienteAuth() {
  return useMutation({
    mutationFn: async (data) => {
      return await apiPutAuth('paciente', data.id, data.paciente);
    },
  });
}

export function useDeletePacienteAuth() {
  return useMutation({
    mutationFn: async (id) => {
      return await apiDeleteAuth('paciente', id);
    },
  });
}
