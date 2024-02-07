import { RESPONSE_DATA_USER } from '../../models/user';
import generalRequest from '@services/api';
import { endPoints } from '@shared/endPoints';

export const getDataUsers = async (userId?: string) => {
  try {
    let url = endPoints.getUsers;
    if (userId) {
      url = endPoints.getUser.replace(':id', userId);
    }
    const response = await generalRequest.get<{ data: RESPONSE_DATA_USER[] }>(
      url,
      {
        'axios-retry': {
          retries: 3,
        },
      },
    );

    return response.data.data;
  } catch (err) {
    console.log('error: getting users', err);
  }
};

export const queryKey = {
  get_users: 'get_users',
  get_user: 'get_user',
};
