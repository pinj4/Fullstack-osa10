import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';

import Main from './src/components/Main';
// import { StatusBar } from 'expo-status-bar';

const apolloClient = createApolloClient();

const App = () => {
  console.log(Constants.expoConfig);
  return (
    <NativeRouter 
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true }}>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
