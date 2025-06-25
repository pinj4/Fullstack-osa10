import Constants from 'expo-constants';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight+20,
    padding: 20,
    backgroundColor: theme.colors.background, 
    flexDirection: 'column',
    justifyContent: 'space-around',
    rowGap: 30,
  },
  inputBox: {
    backgroundColor: 'white', 
    fontSize: theme.fontSizes.subheading,
    padding: 20,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
  },
  signInBox: {
    display: 'flex',
    fontSize: theme.fontSizes.subheading,
    flex: 0,
    padding: 10,
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return (
    <View style= {styles.container}>
      <TextInput
        style= {styles.inputBox}
        placeholder="username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style= {styles.inputBox}
        secureTextEntry
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable style= {styles.signInBox} onPress={formik.handleSubmit}>
        <Text fontWeight='bold' color='textSecondary' >Sign in</Text>
      </Pressable>
    </View>
  );
};


const SignIn = () => {
  const onSubmit = values => {
    const username = parseFloat(values.username);
    const password  = parseFloat(values.password);
    console.log(values);
  
    if (!isNaN(username) && !isNaN(password)) {
      console.log(`Add username and/or password`);
    }
  };
  
  return <SignInForm onSubmit={onSubmit} />;
};
  

export default SignIn;