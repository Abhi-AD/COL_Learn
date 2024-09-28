import { View, Text } from "react-native";
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <View>
      <Text>ParentComponent</Text>
      <ChildComponent
        name="Abhishek Dangi"
        age={"dhdhdd"}
        hobbies={["Coding", "Lisiting song", "Video Watching"]}
      />
    </View>
  );
};

export default ParentComponent;
