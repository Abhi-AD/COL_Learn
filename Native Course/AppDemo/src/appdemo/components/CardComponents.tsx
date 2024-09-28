import { View, Image, Text, Button, StyleSheet } from "react-native";
import React from "react";

const CardComponents = () => {
  return (
    <View style={style.container}>
      <Image source={require("../assests/me.jpg")} style={style.imagesStyle} />
      <Text style={style.heading}>Abhishek Dangi</Text>
      <Text style={style.text}>Something missing the this card design</Text>
      <Button title="Press Me" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    paddingBottom: 40,
    margin: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imagesStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    color: "gray",
    marginBottom: 10,
  },
});
export default CardComponents;
