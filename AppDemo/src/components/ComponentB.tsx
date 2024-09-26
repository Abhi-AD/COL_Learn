import { View, Text } from "react-native";
import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ username }: { username: string }) => {
  return (
    <View>
      <ComponentC username={username} />
    </View>
  );
};

export default ComponentB;
