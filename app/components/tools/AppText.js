import React from "react";
import { Text } from "react-native";

import colors from "../../config/colors";
import defaultStyle from "../../config/defaultStyle";

export default function AppText({
  children,
  fontSize,
  textTransform,
  color,
  style,
}) {
  return (
    <Text
      style={[
        {
          fontSize: fontSize ? fontSize : defaultStyle.fontSize,
          fontFamily: defaultStyle.fontFamily,
          textTransform: textTransform ? textTransform : "none",
          color: color ? color : colors.blackDefault,
        },
        style && style,
      ]}
    >
      {children}
    </Text>
  );
}
