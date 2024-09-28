import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text className="bg-teal-300 text-2xl text-red-400">Index Screen</Text>
      <Link href="/Home">Home Screen</Link>
      <Link href="/About">About Screen</Link>
      <Link href="/Contact">Contact Screen</Link>
    </View>
  );
};

export default index;
