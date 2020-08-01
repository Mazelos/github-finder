import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Costants from "expo-constants";
import colors from '../../config/colors';

const SafeScreen = ({ children, style, backgroundColor=colors.background }) => {
  return (
    <SafeAreaView style={[styles.screen, style, {backgroundColor: backgroundColor} ]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Costants.statusBarHeight,
    flex: 1,
  },
});

export default SafeScreen;
