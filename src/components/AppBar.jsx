import Constants from 'expo-constants';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight+20,
      padding: 20,
      backgroundColor: theme.colors.appBar,
    },
  })


const onPressFunction = () => {
    return null;
};

const AppBar = () => {
  return <View style={styles.container}>{
    <Pressable onPress={onPressFunction}>
      <Text fontWeight="bold" fontSize="title" color="textSecondary">Repositories</Text>
    </Pressable>
  }</View>;
};

export default AppBar;