import { Text, View } from "react-native";
import ComponentA from "../components/ComponentA";

const Index = () => {
  const name = "Abhishek";
  return (
    <View>
      <ComponentA username={name} />
    </View>
  );
};

export default Index;
