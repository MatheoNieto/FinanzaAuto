import { UserStack } from '@features/users';

export enum StackPublicDefinitions {
  USERS = 'USERS',
}

export const routes = {
  [StackPublicDefinitions.USERS]: {
    name: StackPublicDefinitions.USERS,
    component: UserStack,
  },
};
