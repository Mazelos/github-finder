import React from 'react';
import { View, TouchableWithoutFeedback } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import colors from '../../config/colors';

const ItemDelete = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{
        width: 70,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <MaterialCommunityIcons
          name="trash-can"
          size={40}
          color={colors.red}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ItemDelete;