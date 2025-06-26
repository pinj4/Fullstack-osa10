import { FlatList, View } from 'react-native';
import itemRender from './RepositoryItem';

import useRepositories from '../hooks/useRepositories';
import { styles } from '../style';

export const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const { repositories } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      renderItem={itemRender}
    />
  );
};

export default RepositoryList;