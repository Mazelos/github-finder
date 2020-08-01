import React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

import SafeScreen from './app/components/tools/SafeScreen';
import GithubFinderScreen from "./app/screens/GithubFinderScreen";

import colors from './app/config/colors';

export default function App() {
  return (
    <SafeScreen style={styles.container}>
      <GithubFinderScreen />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
});

// const styles = StyleSheet.create({
//   header: {
//     height: heightPercentageToDP('37%'),
//   },

//   title: {
//     textAlign: 'center',
//     fontSize: 40,
//     marginBottom: 30,
//     marginTop: 50
//   },

//   form: {
//     borderColor: '#ddd',
//     backgroundColor: '#fbfbf0',
//     padding: 15,
//     marginBottom: 20,
//     display: 'flex',
//     justifyContent: 'center'
//   },
//   formInput: {
//     marginBottom: 25,
//     fontSize: 20
//   },
//   submitButton: {
//     padding: 12,
//     backgroundColor: "#3399ff",
//     borderRadius: 5,
//   },
//   submitButtonText: {
//     textAlign: "center",
//     fontSize: 20,
//     color: 'white',
//   },

//   main: {
//     height: heightPercentageToDP('67%')
//   },

//   githubProfiles: {
//     marginTop: 15,
//     marginBottom: 30,
//     marginLeft: 20,
//     marginRight: 20,
//   },
//   githubProfile: {
//     flexDirection: "row",
//     marginBottom: 10
//   },
//   githubProfileInfo: {
//     marginLeft: 20,
//   },
// });
