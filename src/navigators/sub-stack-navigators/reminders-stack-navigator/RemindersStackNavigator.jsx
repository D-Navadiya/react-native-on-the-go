import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppHeader from 'src/components/app-header';
import RemindersScreen from 'src/screens/reminders-screen';
import { screenNames, screenTitles } from 'src/constants/Navigation';

const Stack = createStackNavigator();

const RemindersStackNavigator = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name={screenNames.reminders}
      component={RemindersScreen}
      options={{ header: AppHeader, title: screenTitles.reminders }}
    />
  </Stack.Navigator>
);

RemindersStackNavigator.propTypes = {
  // bla: PropTypes.string,
};

RemindersStackNavigator.defaultProps = {
  // bla: 'test',
};

export default RemindersStackNavigator;
