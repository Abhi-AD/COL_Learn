import { View, Text, Button, Pressable } from "react-native";

const ButtonComponent = () => {
  return (
    <View>
      <Text>Let's explore button</Text>
      {/* <Button title="Click Me" color="#16b3b5" /> */}
      {/* <Button title="Click Me" color="#16b3b5" disabled></Button> */}
      {/* Events */}
      {/* <Button
        title="Click & Check"
        onPress={() => console.log("Pressed")}
      ></Button>
      <Button
        title="Click & Check"
        onPress={() => console.warn("Pressed")}
      ></Button>
      <Button title="Click & Check" onPress={() => alert("Pressed")}></Button> */}
      <Pressable onPress={() => console.log("Pressed")}>
        <Text style={{ color: "#16b3b5" }}>Press</Text>
      </Pressable>
      <Pressable onPressIn={() => console.log("PressedIn")}>
        <Text style={{ color: "#16b3b5" }}>Press</Text>
      </Pressable>
      <Pressable onPressOut={() => console.log("PressedOut")}>
        <Text style={{ color: "#16b3b5" }}>Press</Text>
      </Pressable>
      <Pressable onLongPress={() => console.log("LongPressed")}>
        <Text style={{ color: "#16b3b5" }}>Press</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
