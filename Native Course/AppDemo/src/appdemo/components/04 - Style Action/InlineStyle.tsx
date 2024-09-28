import { Text, View } from "react-native";
import React from "react";

const InlineStyle = () => {
  return (
    <View>
      <View
        style={{ backgroundColor: "red", width: 100, height: 100, margin: 10 }}
      />
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          margin: 10,
        }}
      />
      <View
        style={{ backgroundColor: "blue", width: 100, height: 100, margin: 10 }}
      />
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
          margin: 10,
        }}
      />
    </View>
  );
};

export default InlineStyle;
