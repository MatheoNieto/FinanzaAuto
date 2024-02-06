import React from 'react';
import { StackNavigator } from '@navigators/index';
import { routes as stackRoutes, StackPublicDefinitions } from './routes';

const config = {
  routes: stackRoutes,
  initialRouteName: StackPublicDefinitions.USERS,
};

export const PublicNavigator = () => {
  const routes = Object.entries(config.routes).map(([name, value]) => ({
    ...value,
    name,
  }));

  return (
    <StackNavigator
      initialRouteName={config.initialRouteName}
      screenOptions={{ headerShown: false }}
      routes={routes}
    />
  );
};
