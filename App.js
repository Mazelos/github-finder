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
