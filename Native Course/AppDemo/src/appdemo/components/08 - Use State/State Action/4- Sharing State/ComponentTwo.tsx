import { View, Text, Button } from "react-native";
import React from "react";

interface ComponentTwoProps {
  count: number;
  onClickHandler: () => void;
}

const ComponentTwo = ({ count, onClickHandler }: ComponentTwoProps) => {
  return (
    <View>
      <Text>Component Two</Text>
      <Text>{count}</Text>
      <Button title="Press Me" onPress={onClickHandler} />
    </View>
  );
};

export default ComponentTwo;
