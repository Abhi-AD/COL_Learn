import { Text, View } from "react-native";
import ToggleButton from "../components/ToggleButton";
import WeatherApp from "../components/WeatherApp";
import ColorPicker from "../components/ColorPicker";
import Todo from "../components/Todo";

const Index = () => {
  return (
    <View>
      <ToggleButton />
      <WeatherApp />
      <ColorPicker />
      <Todo />
    </View>
  );
};

export default Index;
