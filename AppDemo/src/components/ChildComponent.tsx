import { View, Text } from "react-native";
import React from "react";

interface ChildProps {
  name: string;
  age: string;
  hobbies: string[];
}

const ChildComponent = ({ name, age, hobbies }: ChildProps) => {
  return (
    <View>
      <Text>Name:{name}</Text>
      <Text>Age:{age}</Text>
      <Text>Hobbies:{hobbies}</Text>
    </View>
  );
};

export default ChildComponent;
