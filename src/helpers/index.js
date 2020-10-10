import { StyleSheet } from 'react-native';
import merge from 'lodash/merge';

export const styleCreator = (styles) => StyleSheet.create(styles);

// to merge react-native-paper and react-navigation themes
// and include/overwrite custom theme
export const themeMerger = (
  paperThemeObj,
  navigationThemeObj,
  customThemeObj,
) => merge(paperThemeObj, navigationThemeObj, customThemeObj);

export default { styleCreator, themeMerger };
