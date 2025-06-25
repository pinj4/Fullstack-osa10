import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import { styles } from '../style';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('username is required'),
    password: yup
      .string()
      .required('password is required'),
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
});

  return (
    <View style= {styles.signInContainer}>
      <TextInput
        style={
          formik.touched.username && formik.errors.username ? 
          styles.inputBoxError : styles.inputBox
        }
        placeholder="username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={
          formik.touched.password && formik.errors.password ? 
          styles.inputBoxError : styles.inputBox
        }
        secureTextEntry
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}
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