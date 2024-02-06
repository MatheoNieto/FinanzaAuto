import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@shared/queryClient';
import { RootNavigator } from '@routes/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

export const Application = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};
