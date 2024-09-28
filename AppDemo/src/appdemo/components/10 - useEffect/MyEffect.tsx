import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";

const MyEffect = () => {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);
  useEffect(() => {
    console.warn("UseEffect Called!");
  }, [value]);
  return (
    <View>
      <Text>MyEffect</Text>
      <Text>{value}</Text>
      <Button title="Increment" onPress={() => setValue(value + 1)} />
      <Text>{something}</Text>
      <Button title="Something " onPress={() => setSomething(something + 1)} />
    </View>
  );
};

export default MyEffect;
