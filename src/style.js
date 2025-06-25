import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

import theme from "./theme"

// appBar
export const styles = StyleSheet.create({
  // STYLES FOR APPBAR
  appBarContainer: {
    paddingTop: Constants.statusBarHeight+20,
    padding: 20,
    backgroundColor: theme.colors.appBar,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, // appBar container
  signInBox: {
    display: 'flex',
    flex: 1,
    padding: 3,
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    overflow: 'hidden',
  }, // appBar link to sign in
  repLink: {
    paddingRight: 50
  }, // appBar link back to repositories page
  
  // STYLES FOR MAIN
  mainContainer: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,
  }, // container for main block

  // STYLES FOR REPOSITORY ITEM 
  flexContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10, 
    backgroundColor: "white",
    justifyContent: 'space-around',
  }, // container for repo
  mainInfo: {
    flexGrow: 1,
    columnGap: 10, 
    flexDirection:'row',
    justifyContent: 'space-around',
  }, // a box for picture's, name's, description's and language's boxes
  infoRow: {
    paddingLeft: 10,
    flexGrow: 1,
    flexShrink: 1,
    rowGap: 10,
    flexDirection:'column',
    justifyContent: 'space-around',
  }, // individual boxes for picture, name and descriptions
  languageBox: {
    flex: 1,
    padding: 3,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 5,
    overflow: 'hidden',
  }, // a box for language
  infoColumn: {
    flexGrow: 1,
    flexDirection: 'column',
  }, //individual boxes for reviews, forks, rating and stars
  engagementInfo: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }, // a box for reviews', forks', rating's and stars' boxes
  profilePic: {
    borderRadius: 5,
    overflow: 'hidden',
    padding: 10,
    width: 70,
    height: 70,
  }, // for author's profile picture

  // STYLES FOR SIGN IN PAGE
  signInContainer: {
    paddingTop: Constants.statusBarHeight+20,
    padding: 20,
    backgroundColor: theme.colors.background, 
    flexDirection: 'column',
    justifyContent: 'space-around',
    rowGap: 30,
  },
  inputBox: {
    backgroundColor: 'white', 
    fontSize: theme.fontSizes.subheading,
    padding: 20,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
  },
  signInSubmit: {
    display: 'flex',
    fontSize: theme.fontSizes.subheading,
    flexGrow: 1,
    padding: 10,
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    overflow: 'hidden',
  },
});
