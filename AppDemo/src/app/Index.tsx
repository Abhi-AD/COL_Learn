import { Text, View } from "react-native";
import ComponentA from "../components/ComponentA";
import { UserProvider } from "../context/UserContext";

const Index = () => {
  return (
    <View>
      <UserProvider>
        <ComponentA />
      </UserProvider>
    </View>
  );
};

export default Index;
