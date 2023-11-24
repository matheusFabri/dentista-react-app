import { useQuery } from '@tanstack/react-query';
import { apiGetAuth, apiGetByIdAuth } from '../Api';

export function useGetDashboardAuth() {
  return useQuery({
    queryKey: ['getDashboardAuth'],
    queryFn: async () => {
      return await apiGetAuth('dashbord');
    },
  });
}

export function useGetDashboardByIdAuth(id) {
  return useQuery({
    queryKey: ['getDashboardByIdAuth', id],
    queryFn: async () => {
      return await apiGetByIdAuth('dashbord', id);
    },
  });
}
