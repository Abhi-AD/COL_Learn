import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const About = () => {
  return (
    <View>
      <Text>About</Text>
      <Link href="/Index">Back</Link>
      <Link href="/users/10">Go to Users Screen</Link>
    </View>
  );
};

export default About;
