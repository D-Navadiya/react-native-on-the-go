import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import customTheme from 'src/theme';
import { themeMerger } from 'src/helpers';
import MainDrawerNavigator from 'src/navigators/main-drawer-navigator';
import LoadingScreen from 'src/screens/loading-screen';

const combinedTheme = themeMerger(
  PaperDefaultTheme,
  NavigationDefaultTheme,
  customTheme,
);
const combinedDarkTheme = themeMerger(PaperDarkTheme, NavigationDarkTheme);

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  if (loaded) {
    return (
      <PaperProvider theme={combinedTheme}>
        <MainDrawerNavigator combinedTheme={combinedTheme} />
      </PaperProvider>
    );
  }

  return <LoadingScreen />;
};

export default App;
