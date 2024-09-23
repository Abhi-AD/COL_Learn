import { View, Text, FlatList } from "react-native";
import React from "react";

const ArrayOfobject = () => {
  const countries = [
    { id: 1, name: "United States" },
    { id: 2, name: "China" },
    { id: 3, name: "India" },
    { id: 4, name: "Japan" },
    { id: 5, name: "Germany" },
    { id: 6, name: "United Kingdom" },
    { id: 7, name: "France" },
    { id: 8, name: "Canada" },
    { id: 9, name: "Australia" },
    { id: 10, name: "Brazil" },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={countries}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ArrayOfobject;
