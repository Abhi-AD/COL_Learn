import { View, Text } from "react-native";
import React from "react";
import ComponentD from "./ComponentD";

const ComponentC = ({ username }: { username: string }) => {
  return (
    <View>
      <ComponentD username={username} />
    </View>
  );
};

export default ComponentC;
