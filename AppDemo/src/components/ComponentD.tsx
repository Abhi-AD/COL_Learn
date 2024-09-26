import { View, Text } from "react-native";
import React from "react";

const ComponentD = ({ username }: { username: string }) => {
  return (
    <View>
      <Text>Hello {username}</Text>
    </View>
  );
};

export default ComponentD;
