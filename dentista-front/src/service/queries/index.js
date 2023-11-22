import { useQuery, useMutation } from '@tanstack/react-query';
import { apiGetById, apiLogin } from '../Api';

export function useGetByIdPublic(id) {
  return useQuery({
    queryKey: ['getByIdPublic', id],
    queryFn: async () => {
      return await apiGetById(id);
    },
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: (usuario) => {
      return apiLogin('login', usuario);
    },
  });
}
