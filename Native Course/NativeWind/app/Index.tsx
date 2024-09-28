import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useCounterStore } from "@/store/store";
import ChangeUI from "@/components/ChangeUI";

const Index = () => {
  const count = useCounterStore((state) => state.count);
  return (
    <View className="p-4">
      <Text className="text-2xl text-red-400 bg-teal-300">Index Screen</Text>
      <Text className="text-2xl">Count: {count}</Text>
      <ChangeUI />
      <Link href="/Home">Home Screen</Link>
      <Link href="/About">About Screen</Link>
      <Link href="/Contact">Contact Screen</Link>
    </View>
  );
};

export default Index;
