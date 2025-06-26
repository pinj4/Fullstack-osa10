import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false);

  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (result.data) {
      const repos = result.data.repositories
      setRepositories(repos)
    }
  }, [result.data]);

  return { repositories }
};

export default useRepositories;