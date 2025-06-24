import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      flexGrow: 1,
      flexShrink: 1,
    },
  });

const Main = () => {
  const Title = () => <Text>Rate Repository Application{'\n'}</Text>

  return (
    <View style={styles.container}>
      <Title />
      <RepositoryList />
    </View>
  );
};

export default Main;