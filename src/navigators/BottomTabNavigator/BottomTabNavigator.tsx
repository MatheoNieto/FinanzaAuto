import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { palette } from '@theme/palette';
const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = ({
  routes,
  screenOptions,
  initialRouteName,
  backBehavior,
  optionsTabScreen = undefined,
  ...props
}) => {
  return (
    <BottomTab.Navigator
      initialRouteName={initialRouteName}
      backBehavior={backBehavior}
      screenOptions={screenOptions}
      {...props}>
      {routes?.map((item, key) => (
        <BottomTab.Screen
          key={key}
          name={item.name}
          component={item.component}
          options={
            optionsTabScreen ?? {
              tabBarLabel: '',
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                  name={item.icon}
                  size={25}
                  color={focused ? palette.primary : palette.grey}
                />
              ),
            }
          }
        />
      ))}
    </BottomTab.Navigator>
  );
};
