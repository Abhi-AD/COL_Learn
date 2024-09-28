import { View, Text } from "react-native";
import React from "react";

interface PasswordProps {
  isValid: boolean;
}
const ValidationPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>Invalid Password</Text>;

const Password = ({ isValid }: PasswordProps) => {
  if (isValid) {
    return <ValidationPassword />;
  } else {
    return <InvalidPassword />;
  }
};

const ConditionalStatement = () => {
  return (
    <View>
      <Password isValid={false} />
    </View>
  );
};

export default ConditionalStatement;
