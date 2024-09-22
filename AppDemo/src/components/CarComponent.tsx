import { View, Text, Image, Button } from "react-native";
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
      <Image
        source={require("../assests/car.jpg")}
        style={{ width: imageWidht, height: imageHeight }}
      />
      <Text>{carName}</Text>
      <Text>{carRatings}</Text>
      <Text>{carDescriptions}</Text>
      <Text>{price}</Text>
      <Text>{carName}</Text>
      <Button title="Add to cart" />
    </View>
  );
};

export default CarComponent;
