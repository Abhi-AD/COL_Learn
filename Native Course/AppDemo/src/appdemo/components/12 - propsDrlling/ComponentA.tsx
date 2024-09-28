import { View, Text } from "react-native";
import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = ({ username }: { username: string }) => {
  return (
    <View>
      <ComponentB username={username} />
    </View>
  );
};

export default ComponentA;
