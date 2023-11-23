import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  apiDeleteAuth,
  apiGetAuth,
  apiGetByIdAuth,
  apiPostAuth,
  apiPutAuth,
} from '../Api';

export function useGetDentistasAuth() {
  return useQuery({
    queryKey: ['getDentistasAuth'],
    queryFn: async () => {
      return await apiGetAuth('dentista');
    },
  });
}

export function useGetDentistaByIdAuth(id) {
  return useQuery({
    queryKey: ['getDentistaByIdAuth', id],
    queryFn: async () => {
      return await apiGetByIdAuth('dentista', id);
    },
  });
}

export function usePostDentistaAuth() {
  return useMutation({
    mutationFn: async (dentista) => {
      return await apiPostAuth('dentista', dentista);
    },
  });
}

export function usePutDentistaAuth() {
  return useMutation({
    mutationFn: async (dentista, id) => {
      return await apiPutAuth('dentista', id, dentista);
    },
  });
}

export function useDeleteDentistaAuth() {
  return useMutation({
    mutationFn: async (id) => {
      return await apiDeleteAuth('dentista', id);
    },
  });
}
