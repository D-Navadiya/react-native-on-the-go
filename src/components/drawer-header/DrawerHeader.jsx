import React from 'react';
import { View, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from './DrawerHeader.styles';
import constants from './DrawerHeader.constants';

const headerLogo = require('assets/images/logo-main.png');

const DrawerHeader = (props) => {
  const { navigation } = props;
  const closeDrawer = () => {
    navigation.closeDrawer();
  };
  return (
    <View>
      <IconButton icon={constants.closeIcon} size={20} onPress={closeDrawer} />
      <Image
        source={headerLogo}
        style={styles.headerImage}
        resizeMode="contain"
      />
    </View>
  );
};

export default DrawerHeader;
