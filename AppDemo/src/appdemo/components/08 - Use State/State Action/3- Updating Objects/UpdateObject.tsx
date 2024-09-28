import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const UpdateObject = () => {
  const [movie, setMovie] = useState({
    title: "Oppenheimer",
    ratings: 8.5,
  });
  const handleClick = () => {
    setMovie({ ...movie, title: "Bahubali", ratings: 8.0 });
  };
  return (
    <View>
      <Text>Name:{movie.title}</Text>
      <Text>Rating:{movie.ratings}</Text>
      <Button title="Change Movie" onPress={handleClick} />
    </View>
  );
};

export default UpdateObject;
