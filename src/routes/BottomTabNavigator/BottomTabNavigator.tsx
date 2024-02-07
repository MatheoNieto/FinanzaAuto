import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { BottomTabNavigator } from '@navigators/index';
import {
  StackBottomDefinitions,
  stackRoutes,
} from '@routes/BottomTabNavigator/routes';

let config = {
  routes: stackRoutes,
  initialRouteName: StackBottomDefinitions.HOME,
};

export const StackBottomNavigatorPrivate = () => {
  const routes = Object.entries(config.routes).map(([name, value]) => ({
    ...value,
    name,
  }));

  return (
    <BottomTabNavigator
      initialRouteName={config.initialRouteName}
      screenOptions={{ headerShown: false }}
      routes={routes}
      backBehavior="history"
    />
  );
};
