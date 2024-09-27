import { Text, View } from "react-native";
import WithoutCustomHook from "../components/WithoutCustomHook";
import WithCustomHook from "../components/WithCustomHook";

const Index = () => {
  return (
    <View>
      <WithoutCustomHook />
      <WithCustomHook />
    </View>
  );
};

export default Index;
