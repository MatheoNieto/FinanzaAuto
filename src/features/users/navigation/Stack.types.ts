import { StackNavigationProp } from '@react-navigation/stack';
export enum Routes {
  ALL_USERS = 'ALL_USERS',
  USER_DETAIL = 'USER_DETAIL',
}

export type UsersStackParamsList = {
  [Routes.USER_DETAIL]: {
    userId?: string;
  };
  [Routes.ALL_USERS]: undefined;
};

export type UsersStackProps = StackNavigationProp<UsersStackParamsList>;
