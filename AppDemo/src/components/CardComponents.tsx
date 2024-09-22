import { View, Image, Text, Button } from "react-native";
import React from "react";

const CardComponents = () => {
  return (
    <View>
      <Image
        source={require("../assests/me.jpg")}
        style={{ height: 200, width: 200 }}
      />
      <Text>Abhishek Dangi</Text>
      <Text>Something missing the this card design</Text>
      <Button title="Press Me" />
    </View>
  );
};

export default CardComponents;
