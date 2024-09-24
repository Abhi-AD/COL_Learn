import { Text, View } from "react-native";
import WithoutState from "../components/1- Basic Counter/WithoutState";
import WithState from "../components/1- Basic Counter/WithState";
import UpdateArray from "../components/2-  Updating Arrays/UpdateArray";
import UpdateObject from "../components/3- Updating Objects/UpdateObject";
import SharingState from "../components/4- Sharing State/SharingState";

const Index = () => {
  return (
    <View>
      <View>
        <Text>Basic Counter</Text>
        <WithoutState />
        <WithState />
      </View>
      <View>
        <Text>UpdateArray</Text>
        <UpdateArray />
      </View>
      <View>
        <Text>Update Object</Text>
        <UpdateObject />
      </View>
      <View>
        <Text>Sharing State</Text>
        <SharingState />
      </View>
    </View>
  );
};

export default Index;
