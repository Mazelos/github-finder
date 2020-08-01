import {Platform} from 'react-native';

export default {
  fontFamily: Platform.OS === "android" ? "sans-serif-light" : "Avenir",
  fontSize: 18,
}