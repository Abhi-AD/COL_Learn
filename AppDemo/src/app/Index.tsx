import { SafeAreaView, Text, View } from "react-native";
import AddRandomNumber from "../components/AddRandomNumber";
import { NumberProvider } from "../context/RandomNumberContext";
import RandomNumber from "../components/RandomNumber";

const Index = () => {
  return (
    <View>
      <NumberProvider>
        <SafeAreaView>
          <RandomNumber />
          <AddRandomNumber />
        </SafeAreaView>
      </NumberProvider>
    </View>
  );
};

export default Index;
