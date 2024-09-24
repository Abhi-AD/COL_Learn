import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const colors = ["#1ABC9C", "#3498DB", "#9B59B6", "#E74C3C"];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const textColor = colors.includes(selectedColor) ? "#FFFFFF" : "#000000";
  return (
    <View style={[styles.container, { backgroundColor: selectedColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Pick a Color</Text>
      <View style={styles.colorsContainer}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[styles.colorBox, { backgroundColor: color }]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  colorsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  colorBox: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
  },
});

export default ColorPicker;
