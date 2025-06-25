import { View, Image } from 'react-native';
import Text from './Text';
import { styles } from '../style';

const Item = ({item, fullName, description, language, stars, forks, reviews, rating}) => (
  <View style={styles.flexContainer}>
    <View style={styles.mainInfo}>
      <Image
        style={styles.profilePic}
        source={{
          uri: item.ownerAvatarUrl,
        }}
      />
      <View style={styles.infoRow}>
        <Text fontWeight="bold" color="textPrimary">
          {fullName}
        </Text>
        <Text fontSize="subheading">
          {description}
        </Text>
        <View style={styles.languageBox}>
          <Text color="textSecondary">
            {language}
          </Text>
        </View>
      </View> 
    </View> 
    
    <View style={styles.engagementInfo}>
      <View style={styles.infoColumn}>
        <Text fontWeight="bold">
          {stars}
        </Text>
        <Text>
          Stars
        </Text>
      </View>
      <View style={styles.infoColumn}>
        <Text fontWeight="bold">
          {forks}
        </Text>
        <Text>
          Forks
        </Text>
      </View>
      <View style={styles.infoColumn}>
        <Text fontWeight="bold">
          {reviews}
        </Text>
        <Text>
          Reviews
        </Text>
      </View>
      <View style={styles.infoColumn}>
        <Text fontWeight="bold">
          {rating}
        </Text>
        <Text>
          Rating
        </Text>
      </View>
    </View>
  </View>
);

const thousandsToK = ( number ) => (
  number < 1000 ? number : Math.round(number/1000) + 'K'
);
  
const itemRender = ({ item }) => {
  const fullName = item.fullName
  const description = item.description
  const language = item.language
  const stars = thousandsToK(item.stargazersCount)
  const forks = thousandsToK(item.forksCount)
  const reviews = item.reviewCount
  const rating = item.ratingAverage


  return (
    <Item
      item = {item}
      fullName = {fullName}
      description = {description}
      language = {language}
      stars = {stars}
      forks = {forks}
      reviews = {reviews}
      rating = {rating}
    />
  );
};

export default itemRender;