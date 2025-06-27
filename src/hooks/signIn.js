import { useMutation } from '@apollo/client';

import { SIGNIN } from "../graphql/mutations";

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGNIN);
  
    const signIn = async ({ username, password }) => {
      const credentials = { username, password }
      return mutate({variables: credentials})
    };
    
    return [signIn, result];
  };


export default useSignIn;