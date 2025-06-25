import Constants from 'expo-constants';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight+20,
      padding: 20,
      backgroundColor: theme.colors.appBar,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    signInBox: {
      display: 'flex',
      flex: 0,
      padding: 3,
      backgroundColor: theme.colors.secondary,
      borderRadius: 5,
      overflow: 'hidden',
    },
    link: {
      paddingRight: 50
    }
  })


const onPressFunction = () => {
    return null;
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link style={styles.link} to="/">
          <Text fontWeight="bold" fontSize="title" color="textSecondary">Repositories</Text>
        </Link>
        <Link style={styles.signInBox} to="/signin">
          <Text fontWeight="bold" fontSize="subheading" color="textSecondary">Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;