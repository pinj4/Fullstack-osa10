import { View, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import { styles } from '../style';

import SignOut from './SignOut';
import useSignOut from '../hooks/useSignOut';

import { ME } from '../graphql/queries';
import { useQuery } from '@apollo/client';




const SignInOut = () => {
  const me = useQuery(ME)
  const data = me.data ? me.data.me : null
  console.log('me: ', data)
  const signOut = useSignOut();

  return (
    data === null ? 
      <Link style={styles.signInBox} to="/signin">
        <Text fontWeight="bold" fontSize="subheading" color="textSecondary">Sign in</Text>
      </Link> 
    : 
      <Pressable style={styles.signInBox} onPress={() => SignOut({signOut})}>
        <Text fontWeight="bold" fontSize="subheading" color="textSecondary">Sign out</Text>
      </Pressable> 
  );
}

const AppBar = () => {
  return (
    <View style={styles.appBarContainer}>
      <ScrollView horizontal>
        <Link style={styles.repLink} to="/">
          <Text fontWeight="bold" fontSize="title" color="textSecondary">Repositories</Text>
        </Link>
        <SignInOut />
      </ScrollView>
    </View>
  );
};

export default AppBar;