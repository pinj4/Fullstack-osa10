import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  if (!authStorage.getAccessToken()) {
    console.log("NO TOKEN")
  }

  
  const signOut = async() => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return signOut;
};


export default useSignOut;