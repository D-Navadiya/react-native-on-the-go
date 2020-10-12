import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { screenNames } from 'src/constants/Navigation';
import CustomeDrawerContent from 'src/components/custom-drawer-content';
import HomeStackNavigator from '../sub-stack-navigators/home-stack-navigator';
import RemindersStackNavigator from '../sub-stack-navigators/reminders-stack-navigator';
import styles from './MainDrawerNavigator.styles';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = ({ combinedTheme }) => (
  <NavigationContainer theme={combinedTheme}>
    <Drawer.Navigator
      initialRouteName={screenNames.home}
      drawerContent={(props) => <CustomeDrawerContent {...props} />}
      drawerStyle={styles.drawer}
    >
      <Drawer.Screen name={screenNames.home} component={HomeStackNavigator} />
      <Drawer.Screen
        name={screenNames.reminders}
        component={RemindersStackNavigator}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default MainDrawerNavigator;
