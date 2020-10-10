import React, { useEffect, useRef } from 'react';
import { Animated, View, Button } from 'react-native';
import { screenNames } from 'src/constants/Navigation';
import styles from './LoadingScreen.styles';

const logo = require('assets/images/logo-main.png');

const LoadingScreen = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          opacity: fadeAnim,
          resizeMode: 'contain',
          width: 250,
          height: 250,
        }}
        source={logo}
      />
      <Button
        onPress={() => navigation.navigate(screenNames.home)}
        title="Home Page"
      />
    </View>
  );
};

export default LoadingScreen;
