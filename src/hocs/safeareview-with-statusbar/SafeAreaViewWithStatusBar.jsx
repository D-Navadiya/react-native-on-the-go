import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styles from './SafeAreaViewWithStatusBar.styles';

const SafeAreaViewWithStatusBar = ({ children, ...props }) => {
  const { viewStyle, statusBarProps } = props;

  return (
    <SafeAreaView style={[styles.safeAreaView, viewStyle]}>
      <StatusBar {...statusBarProps} />
      {children}
    </SafeAreaView>
  );
};

SafeAreaViewWithStatusBar.defaultProps = {
  children: null,
  viewStyle: {},
  statusBarProps: {
    hidden: false,
    // 'default'/'light-content'/'dark-content'
    barStyle: 'default',
  },
};

export default SafeAreaViewWithStatusBar;
