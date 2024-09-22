import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";
import React from "react";

const CarComponent = () => {
  const price = 10800000;
  const imageWidht = 300;
  const imageHeight = 300;
  const carName = "Tesla Cars: A Blend of Innovation and Performance";
  const carRatings = 3.5;
  const carDescriptions =
    "Tesla cars are electric vehicles known for their cutting-edge technology, impressive performance, and advanced features like Autopilot, offering a sustainable yet high-quality driving experience.";
  return (
    <View>
      <Text style={style.pill}>{price}</Text>
      <Image
        source={require("../assests/car.jpg")}
        style={{ width: imageWidht, height: imageHeight }}
      />
      <Text style={style.heading}>{carName}</Text>
      <Text>{carRatings}</Text>
      <Text>{carDescriptions}</Text>
      <Text>{carName}</Text>
      <Pressable style={style.button}>
        <Text style={style.buttonText}>Press me</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  pill: {
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    width: 80,
    marginTop: 20,
    textAlign: "center",
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 2,
    paddingVertical: 2,
    textAlign: "center",
    width: 120,
  },
  buttonText: {
    color: "white",
    padding: 10,
  },
});

export default CarComponent;
