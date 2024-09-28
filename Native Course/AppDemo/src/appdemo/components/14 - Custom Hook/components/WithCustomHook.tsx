import { View, Text, FlatList } from "react-native";
import React from "react";
import useFetch from "../hook/useFetch";

const WithCustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <View>
      <Text>WithCustomHook</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default WithCustomHook;
