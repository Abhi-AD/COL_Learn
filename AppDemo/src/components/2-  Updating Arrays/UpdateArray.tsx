import { View, Text, FlatList, Button } from "react-native";
import React, { useState } from "react";

const UpdateArray = () => {
  const [friends, setFriends] = useState(["Ashmita", "Dipa", "Samikshya"]);
  const addOne = () => setFriends([...friends, "Abhishek"]);
  const removeOne = () => setFriends(friends.filter((f) => f !== "Samikshya"));
  const updateOne = () =>
    setFriends(friends.map((f) => (f === "Dipa" ? "Dipa Khadka" : f)));
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(friend) => friend}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Button title="Add One" onPress={addOne} />
      <Button title="Remove One" onPress={removeOne} />
      <Button title="Update One" onPress={updateOne} />
    </View>
  );
};

export default UpdateArray;
