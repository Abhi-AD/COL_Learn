import { View, Text, FlatList } from "react-native";
import React from "react";

const ListData = () => {
  const member = ["typescript", "react", "reactnative"];
  return (
    <View>
      <FlatList
        data={member}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default ListData;
