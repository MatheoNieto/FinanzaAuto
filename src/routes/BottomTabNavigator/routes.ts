import { UserStack } from '@features/users';
import BuildingModule from '@components/BuildingModule';

export enum StackBottomDefinitions {
  HOME = 'HOME',
  SEARCH = 'SEARCH',
  NOTIFICATIONS = 'NOTIFICATIONS',
  SETTINGS = 'SETTINGS',
}

export const stackRoutes = {
  [StackBottomDefinitions.HOME]: {
    name: StackBottomDefinitions.HOME,
    component: UserStack,
    icon: 'home',
  },
  [StackBottomDefinitions.SEARCH]: {
    name: StackBottomDefinitions.SEARCH,
    component: BuildingModule,
    icon: 'search-outline',
  },
  [StackBottomDefinitions.NOTIFICATIONS]: {
    name: StackBottomDefinitions.NOTIFICATIONS,
    component: BuildingModule,
    icon: 'notifications',
  },
  [StackBottomDefinitions.SETTINGS]: {
    name: StackBottomDefinitions.SETTINGS,
    component: BuildingModule,
    icon: 'settings-sharp',
  },
};
