import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UsersScreen, UserScreen } from '../screens';
import { Routes, UsersStackParamsList } from './Stack.types';

const Stack = () => {
  const { Navigator, Screen } = createStackNavigator<UsersStackParamsList>();

  return (
    <Navigator initialRouteName={Routes.ALL_USERS}>
      <Screen
        key={Routes.ALL_USERS}
        name={Routes.ALL_USERS}
        component={UsersScreen}
        options={{
          header: () => null,
        }}
      />

      <Screen
        key={Routes.USER_DETAIL}
        name={Routes.USER_DETAIL}
        component={UserScreen}
        options={{
          header: () => null,
        }}
      />
    </Navigator>
  );
};
export default Stack;
