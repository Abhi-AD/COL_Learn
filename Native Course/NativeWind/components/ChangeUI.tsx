import { View, Text, Button } from "react-native";
import React from "react";
import { useCounterStore } from "@/store/store";

const ChangeUI = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  return (
    <View className="flex flex-row gap-10">
      <Button title="Increment" onPress={increment} />
      <Button title="Reset" onPress={reset} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default ChangeUI;
