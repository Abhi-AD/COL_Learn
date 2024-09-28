import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, Link } from "expo-router";

const Users = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Users -{id}</Text>
      <Link href="/About">Back</Link>
    </View>
  );
};

export default Users;
