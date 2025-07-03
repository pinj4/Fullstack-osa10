import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import { styles } from '../style';

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <AppBar />
      <Routes>
        <Route path="/">
          <Route index element={<RepositoryList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;