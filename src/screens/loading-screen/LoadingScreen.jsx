import React, { useEffect, useRef } from 'react';
import { Animated, ImageBackground } from 'react-native';
import SafeAreaViewWithStatusBar from 'src/hocs/safeareview-with-statusbar';
import styles from './LoadingScreen.styles';

const logo = require('assets/images/logo-main.png');
const backgroundImage = require('assets/images/water-art.jpg');

const LoadingScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    startAnimation();
  }, [fadeAnim]);
  const animation = Animated.sequence([
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }),
    Animated.timing(fadeAnim, {
      toValue: 0.1,
      duration: 1500,
      useNativeDriver: true,
    }),
  ]);

  const startAnimation = () => {
    Animated.loop(animation).start();
  };
  const statusBarProps = {
    hidden: true,
  };
  return (
    <SafeAreaViewWithStatusBar
      viewStyle={styles.container}
      statusBarProps={statusBarProps}
    >
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Animated.Image
          style={{
            opacity: fadeAnim,
            resizeMode: 'contain',
            width: 250,
            height: 250,
          }}
          source={logo}
        />
      </ImageBackground>
    </SafeAreaViewWithStatusBar>
  );
};

export default LoadingScreen;
