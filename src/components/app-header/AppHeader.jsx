import React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './AppHeader.styles';
import constants from './AppHeader.constants';

const AppHeader = ({ scene, navigation }) => {
  const { options } = scene.descriptor;
  const headerTitle = options.title || '';
  const openDrawer = () => navigation.openDrawer();

  return (
    <Appbar.Header>
      <Appbar.Action
        icon={constants.menuIcon}
        onPress={openDrawer}
        size={constants.iconSize}
      />

      <Appbar.Content title={headerTitle} titleStyle={styles.headerTitle} />
      <Appbar.Action
        icon={constants.homeOutlineIcon}
        size={constants.iconSize}
      />
    </Appbar.Header>
  );
};

export default AppHeader;
