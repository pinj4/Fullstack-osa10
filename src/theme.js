import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#f5f5f5',
    primary: '#d26586',
    appBar: '#202E2E',
    secondary: '#506355',
    background: '#e1e4e8',
  },
  fontSizes: {
    body: 18,
    subheading: 22,
    title: 28,
  },
  fonts: 
    Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  fontWeights: {
    normal: '400',
    bold: '700',
  }
};
  
export default theme;