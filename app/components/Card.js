import React, { useState } from "react";
import { View, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../components/tools/AppText";
import colors from "../config/colors";

// access the information we need from each profile passed
const Card = (props) => {
  const handleOnPressCard = () => props.onShowUserInfo(props.id);

  return (
      <Swipeable renderRightActions={props.renderRightActions && props.renderRightActions}>
        <TouchableOpacity
          onPress={handleOnPressCard}
          style={styles.cardContainer}
        >
          <Image source={{ uri: props.avatar_url }} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <AppText fontSize={25}>{props.login}</AppText>
            {props.name && <AppText>{props.name}</AppText>}
          </View>
        </TouchableOpacity>
      </Swipeable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.cardBackground,
    flexDirection: "row",
    height: 120,
    borderRadius: 20,
    overflow: "hidden",
  },

  profileImage: {
    width: 120,
    height: 120,
  },
  profileInfo: {
    alignSelf: "center",
    marginLeft: 15,
    width: 200,
  },
});

export default Card;
