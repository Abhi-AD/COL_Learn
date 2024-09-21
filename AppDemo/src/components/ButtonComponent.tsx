import { View, Text, Button } from "react-native";

const ButtonComponent = () => {
  return (
    <View>
      <Text>Let's explore button</Text>
      {/* <Button title="Click Me" color="#16b3b5" /> */}
      {/* <Button title="Click Me" color="#16b3b5" disabled></Button> */}
      {/* Events */}
      <Button
        title="Click & Check"
        onPress={() => console.log("Pressed")}
      ></Button>
      <Button
        title="Click & Check"
        onPress={() => console.warn("Pressed")}
      ></Button>
      <Button title="Click & Check" onPress={() => alert("Pressed")}></Button>
    </View>
  );
};

export default ButtonComponent;
