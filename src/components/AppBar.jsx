import { View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import { styles } from '../style';

const AppBar = () => {
  return (
    <View style={styles.appBarContainer}>
      <ScrollView horizontal>
        <Link style={styles.repLink} to="/">
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