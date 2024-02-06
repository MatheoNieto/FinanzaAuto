import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getDataUsers, queryKey } from './users.services';
import { RESPONSE_DATA_USER } from '@core/models/user';

export const useGetUsers = (): UseQueryResult<RESPONSE_DATA_USER[], any> =>
  useQuery({
    queryFn: () => getDataUsers(),
    queryKey: [queryKey.get_users],
  });

export const useGetUser = (
  userId: string,
): UseQueryResult<RESPONSE_DATA_USER, any> =>
  useQuery({
    queryFn: () => getDataUsers(userId),
    queryKey: [queryKey.get_users],
  });
