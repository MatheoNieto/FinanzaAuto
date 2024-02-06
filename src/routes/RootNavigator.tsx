import React from 'react';
import BaseSpinner from '@components/BaseSpinner';
import { PublicNavigator } from './PublicNavigator';

export const RootNavigator = () => {
  return (
    <React.Suspense fallback={<BaseSpinner />}>
      <PublicNavigator />
    </React.Suspense>
  );
};
