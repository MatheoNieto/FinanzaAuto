import React from 'react';
import BaseSpinner from '@components/BaseSpinner';
import { StackBottomNavigatorPrivate } from '@routes/BottomTabNavigator/BottomTabNavigator';

export const RootNavigator = () => {
  return (
    <React.Suspense fallback={<BaseSpinner />}>
      <StackBottomNavigatorPrivate />
    </React.Suspense>
  );
};
