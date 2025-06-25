import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';


const App = () => {
  return (
    <>
      <NativeRouter 
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true 
        }}>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
};

export default App;
