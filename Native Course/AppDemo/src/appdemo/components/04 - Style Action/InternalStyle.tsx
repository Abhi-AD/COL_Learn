import { View, Text, StyleSheet } from "react-native";
import React from "react";

const InternalStyle = () => {
  return (
    <View>
      <Text style={style.textStyle}>InternalStyle</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    padding: 10,
    backgroundColor: "blue",
  },
});

export default InternalStyle;
