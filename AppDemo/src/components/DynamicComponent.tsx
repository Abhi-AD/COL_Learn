import { View, Text } from "react-native";
import React from "react";

const DynamicComponent = () => {
  const username = "Abhishek Dangi";
  const multiply = (a: number, b: number) => a * b;
  const plus = (a: number, b: number) => a + b;
  const minus = (a: number, b: number) => a - b;
  const div = (a: number, b: number) => a / b;
  let myself = { name: "Abhishek Dangi", age: 19 };

  return (
    <View>
      <Text>Hello {username}!</Text>
      <Text>10-10 = {multiply(10, 10)}</Text>
      <Text>10+10 = {plus(10, 10)}</Text>
      <Text>10*10 = {minus(10, 10)}</Text>
      <Text>100/10 = {div(100, 10)}</Text>
      <Text>{100 - 89}</Text>
      <Text>{100 + 89}</Text>
      <Text>{100 * 89}</Text>
      <Text>{100 / 10}</Text>
      <Text>My name is{myself.name}!</Text>
      <Text>{myself.age}</Text>
    </View>
  );
};

export default DynamicComponent;
