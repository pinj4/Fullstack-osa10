import { Text } from 'react-native';


const Item = ({item}) => (
    <Text>
      Full name: {item.fullName}{'\n'}
      Description: {item.description}{'\n'}
      Language: {item.language}{'\n'}
      Stars: {item.stargazersCount}{'\n'}
      Forks: {item.forksCount}{'\n'}
      Reviews: {item.reviewCount}{'\n'}
      Rating: {item.ratingAverage}{'\n'}
    </Text>
);

export const itemRender = ({ item }) => {
  return (
    <Item
      item = {item}
    />
  );
};
