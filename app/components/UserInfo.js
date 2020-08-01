import React from 'react';
import { View, TouchableWithoutFeedback, ScrollView, Image, StyleSheet } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

import SafeScreen from './tools/SafeScreen';
import AppText from './tools/AppText';
import colors from '../config/colors';
import urlFormatter from '../utils/urlFormatter';

const UserInfo = ({
  avatar_url,
  login,
  html_url,
  bio,
  followers,
  following,
  name,
  location,
  company,
  email,
  blog,
  organizations_url,
  onPressCloseButton
}) => {
  console.log(urlFormatter(blog), urlFormatter(html_url))
  return (
    <SafeScreen>
      {/* CLose Icon (absolute position) */}
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPressCloseButton}>
          <View style={styles.closeIcon}>
            <MaterialCommunityIcons
              name="close"
              size={30}
              color={colors.buttonColor}
            />
          </View>
        </TouchableWithoutFeedback>

        <ScrollView>
          <Image source={{ uri: avatar_url }} style={styles.image} resizeMethod="scale"/>

          {/* header content */}
          <View style={styles.contentContainer}>
            <View style={styles.nameContainer}>
              <AppText fontSize={40} textTransform="capitalize" style={styles.nameText}>
                {login}
              </AppText>
              <TouchableWithoutFeedback onPress={() => WebBrowser.openBrowserAsync(html_url)}>
                <View>
                  <AppText color={colors.buttonColor}>Open in Github</AppText>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.bioContainer}>
              {bio && <AppText style={styles.text}>{bio}</AppText>}
              <View>
                <View style={styles.detailsContainer}>
                  <AppText textTransform="capitalize" fontSize={21} style={styles.detailsText}>followers</AppText>
                  <AppText>{followers}</AppText>
                </View>
                <View style={styles.detailsContainer}>
                  <AppText textTransform="capitalize" fontSize={21} style={styles.detailsText}>following</AppText>
                  <AppText>{following}</AppText>
                </View>
              </View>
            </View>
          </View>
          
          {/* main content */}
          <View style={styles.contentContainer}>
            {name && (
              <View style={styles.detailsContainer}>
                <AppText fontSize={22} style={styles.detailsText}>name</AppText>
                <AppText style={styles.text}>{name}</AppText>
              </View>
            )}
            {location && (
              <View style={styles.detailsContainer}>
                <AppText fontSize={22} style={styles.detailsText}>location</AppText>
                <AppText style={styles.text}>{location}</AppText>
              </View>
            )}
            {company && (
              <View style={styles.detailsContainer}>
                <AppText fontSize={22} style={styles.detailsText}>company</AppText>
                <AppText style={styles.text}>{company}</AppText>
              </View>
            )}
            {email && (
              <View style={styles.detailsContainer}>
                <AppText fontSize={22} style={styles.detailsText}>email</AppText>
                <AppText style={styles.text}>{email}</AppText>
              </View>
            )}
          </View>
          
          {/* footer content */}
          <View style={styles.contentContainer}>
            {blog !== "" && (
              <TouchableWithoutFeedback onPress={() => WebBrowser.openBrowserAsync(urlFormatter(blog))}>
                <View style={styles.footerText}>
                  <AppText color={colors.buttonColor}>Open Blog</AppText>
                </View>
              </TouchableWithoutFeedback>
            )}
            {organizations_url && (
              <TouchableWithoutFeedback onPress={() => WebBrowser.openBrowserAsync(organizations_url)}>
                <View>
                  <AppText color={colors.buttonColor}>Open Organizations</AppText>
                </View>
              </TouchableWithoutFeedback>
            )}
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