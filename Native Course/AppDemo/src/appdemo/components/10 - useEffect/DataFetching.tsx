import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

interface dataFetching {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const DataFetching = () => {
  const [data, setData] = useState<dataFetching[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      setData(result);
    };
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default DataFetching;
