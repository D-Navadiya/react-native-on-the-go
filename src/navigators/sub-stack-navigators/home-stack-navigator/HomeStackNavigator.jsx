import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'src/screens/home-screen';
import AppHeader from 'src/components/app-header';
import { screenNames } from 'src/constants/Navigation';

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name={screenNames.home}
      component={HomeScreen}
      options={{ header: AppHeader }}
    />
  </Stack.Navigator>
);

export default HomeStackNavigator;
