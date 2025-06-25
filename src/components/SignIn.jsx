import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';

import Text from './Text';
import { styles } from '../style';

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
    <View style= {styles.signInContainer}>
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
      <Pressable style= {styles.signInSubmit} onPress={formik.handleSubmit}>
        <Text fontWeight='bold' color='textSecondary' >Sign in</Text>
      </Pressable>
    </View>
  );
};


const SignIn = () => {
  const onSubmit = values => {
    parseFloat(values.username);
    parseFloat(values.password);
    console.log(values);
  
    if (values.username === '' | values.password === '') {
      console.log(`Add username and/or password`);
    }
  };
  
  return <SignInForm onSubmit={onSubmit} />;
};
  

export default SignIn;