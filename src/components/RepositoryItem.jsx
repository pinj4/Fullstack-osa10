import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  flexContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10, 
    backgroundColor: "white",
    justifyContent: 'space-around',
  }, // container for repo
  mainInfo: {
    display: 'flex',
    flexGrow: 1,
    columnGap: 10, 
    flexDirection:'row',
    justifyContent: 'space-around',
  }, // a box for picture's, name's, description's and language's boxes
  infoRow: {
    display: 'flex',
    paddingLeft: 10,
    flexGrow: 1,
    flexShrink: 1,
    rowGap: 10,
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around',
  }, // individual boxes for picture, name and descriptions
  languageBox: {
    display: 'flex',
    flex: 1,
    padding: 3,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 5,
    overflow: 'hidden',
  }, // a box for language
  infoColumn: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  }, //individual boxes for reviews, forks, rating and stars
  engagementInfo: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }, // a box for reviews', forks', rating's and stars' boxes
  tinyLogo: {
    borderRadius: 5,
    overflow: 'hidden',
    padding: 10,
    width: 70,
    height: 70,
  },
});


const Item = ({item, fullName, description, language, stars, forks, reviews, rating}) => (
  <View style={styles.flexContainer}>
    <View style={styles.mainInfo}>
      <Image
        style={styles.tinyLogo}
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
  
export const itemRender = ({ item }) => {
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
