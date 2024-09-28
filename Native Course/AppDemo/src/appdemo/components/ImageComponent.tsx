import { View, Text, Image } from "react-native";

const ImageComponent = () => {
  return (
    <View>
      <Text>Let's explore images</Text>
      <Image
        source={require("../assests/lover.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: "https://images.pexels.com/photos/2531611/pexels-photo-2531611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default ImageComponent;
