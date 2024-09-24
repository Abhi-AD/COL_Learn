import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const ToggleButton = () => {
  const [istoggle, setIstoggle] = useState(false);
  return (
    <View style={styles.container}>
      <Text>{istoggle ? "On" : "Off"}</Text>
      <Button title="toggle" onPress={() => setIstoggle(!istoggle)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
});

export default ToggleButton;
