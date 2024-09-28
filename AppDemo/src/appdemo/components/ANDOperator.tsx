import { View, Text, FlatList } from "react-native";
import React from "react";

const ANDOperator = () => {
  const groceries = ["milk", "bread", " eggs", "cheese"];
  return (
    <View>
      <Text>Cart 🛒</Text>
      {groceries.length > 0 && (
        <Text>You have {groceries.length} items in your Cart</Text>
      )}
      <FlatList
        data={groceries}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default ANDOperator;
