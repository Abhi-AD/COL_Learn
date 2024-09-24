import { View, Text } from "react-native";
import React from "react";

interface PasswordProps {
  isValid: boolean;
}
const ValidationPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>Invalid Password</Text>;

const Password = ({ isValid }: PasswordProps) => {
  return isValid ? <ValidationPassword /> : <InvalidPassword />;
};

const TernaryOperator = () => {
  return (
    <View>
      <Password isValid={true} />
    </View>
  );
};

export default TernaryOperator;
