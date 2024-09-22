import { View } from "react-native";
import NameComponents from "../components/NameComponents";
import AgeComponents from "../components/AgeComponents";
import XHandlerComponents from "../components/XHandlerComponents";
import FavSubjectCompoents from "../components/FavSubjectCompoents";
import CardComponents from "../components/CardComponents";
import CarComponent from "../components/CarCompoents";

const Index = () => {
  return (
    <View>
      <CarComponent />
      <CardComponents />
      <NameComponents />
      <AgeComponents />
      <XHandlerComponents />
      <FavSubjectCompoents />
    </View>
  );
};

export default Index;
