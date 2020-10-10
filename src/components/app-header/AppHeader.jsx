import React from 'react';
import { Appbar } from 'react-native-paper';
import { Alert } from 'react-native';
import styles from './AppHeader.styles';
import constants from './AppHeader.constants';

const AppHeader = ({ scene }) => {
  const { options } = scene.descriptor;
  const headerTitle = options.title || '';
  const handleMore = () => Alert.alert('Shown more');

  return (
    <Appbar.Header>
      <Appbar.Action
        icon="menu"
        onPress={handleMore}
        size={constants.iconSize}
      />

      <Appbar.Content title={headerTitle} titleStyle={styles.headerTitle} />
      <Appbar.Action icon="home-outline" size={constants.iconSize} />
    </Appbar.Header>
  );
};

AppHeader.propTypes = {
  // bla: PropTypes.string,
};

AppHeader.defaultProps = {
  // bla: 'test',
};

export default AppHeader;
