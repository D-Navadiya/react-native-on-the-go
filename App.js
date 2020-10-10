import 'react-native-gesture-handler';
import React from 'react';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import AppHeader from 'src/components/app-header';
import customTheme from 'src/theme';
import { themeMerger } from 'src/helpers';
import LoadingScreen from 'src/screens/loading-screen';
import { screenNames, screenTitles } from 'src/constants/Navigation';

const combinedTheme = themeMerger(
  PaperDefaultTheme,
  NavigationDefaultTheme,
  customTheme,
);
const combinedDarkTheme = themeMerger(PaperDarkTheme, NavigationDarkTheme);

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => (
  <PaperProvider theme={combinedTheme}>
    {/* <NavigationContainer theme={combinedTheme}>
      <Drawer.Navigator initialRouteName={screenNames.loading}>
        <Drawer.Screen
          name={screenNames.home}
          component={HomeScreen}
          options={{
            header: AppHeader,
          }}
        />
        <Drawer.Screen name={screenNames.loading} component={LoadingScreen} />
      </Drawer.Navigator>
    </NavigationContainer> */}
    <NavigationContainer theme={combinedTheme}>
      <Stack.Navigator
        screenOptions={{
          header: AppHeader,
        }}
        initialRouteName={screenNames.loading}
      >
        <Stack.Screen
          name={screenNames.loading}
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenNames.home}
          component={HomeScreen}
          options={{ title: screenTitles.home }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
);

export default App;
