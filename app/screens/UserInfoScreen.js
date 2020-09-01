import React from 'react';
import { View, TouchableWithoutFeedback, ScrollView, Image, StyleSheet } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

import SafeScreen from '../components/tools/SafeScreen';
import AppText from '../components/tools/AppText';
import colors from '../config/colors';
import urlFormatter from '../utils/urlFormatter';

const UserInfo = ({route: {params: {mainInfo, otherInfo, links}}, navigation}) => {
  const onCloseUserInfo = () => navigation.navigate('home');

  return (
    <SafeScreen>
      {/* CLose Icon (absolute position) */}
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onCloseUserInfo}>
          <View style={styles.closeIcon}>
            <MaterialCommunityIcons
              name="close"
              size={30}
              color={colors.buttonColor}
            />
          </View>
        </TouchableWithoutFeedback>

        <ScrollView>
          <Image source={{ uri: mainInfo.imageSource }} style={styles.image} resizeMethod="scale"/>

          {/* header content */}
          <View style={styles.contentContainer}>
            <View style={styles.nameContainer}>
              <AppText fontSize={40} textTransform="capitalize" style={styles.nameText}>
                {mainInfo.loginName}
              </AppText>
              <TouchableWithoutFeedback onPress={() => WebBrowser.openBrowserAsync(mainInfo.githubLink)}>
                <View>
                  <AppText color={colors.buttonColor}>Open in Github</AppText>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.bioContainer}>
              {mainInfo.bio && <AppText style={styles.text}>{mainInfo.bio}</AppText>}
              <View>
                <View style={styles.detailsContainer}>
                  <AppText textTransform="capitalize" fontSize={21} style={styles.detailsText}>followers</AppText>
                  <AppText>{mainInfo.followers}</AppText>
                </View>
                <View style={styles.detailsContainer}>
                  <AppText textTransform="capitalize" fontSize={21} style={styles.detailsText}>following</AppText>
                  <AppText>{mainInfo.following}</AppText>
                </View>
              </View>
            </View>
          </View>
          
          {/* main content */}
          <View style={styles.contentContainer}>
            {otherInfo.map(info => (
              <View style={styles.detailsContainer} key={info}>
                <AppText fontSize={22} style={styles.detailsText}>{info}</AppText>
                {/* <AppText style={styles.text}>{name}</AppText> */}
              </View>
            ))}
          </View>
          
          {/* footer content */}
          <View style={styles.contentContainer}>
            {links.map(link => (
              <TouchableWithoutFeedback key={link} onPress={() => WebBrowser.openBrowserAsync(urlFormatter({link}))}>
                <View style={styles.footerText}>
                  <AppText color={colors.buttonColor}>{link}</AppText>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  // outer container
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  // header image
  image: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginBottom: 10,
  },

  // close icon - in absolute position 
  closeIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: colors.cardBackground,
    zIndex: 1,
    right: 5,
    top: 10,
    borderRadius: 10,
    // SHADOWS
    elevation: 35, // Android
    shadowColor: "black", // Ios
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  // content 
  contentContainer: {
    backgroundColor: colors.cardBackground,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 10,
  },
  text: {
    maxWidth: '60%',
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  nameText: {
    marginRight: 10,
  },
  bioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  detailsText: {
    marginBottom: 5,
    marginRight: 15,
  },

  footerText: {
    paddingVertical: 8,
  }
});

export default UserInfo;