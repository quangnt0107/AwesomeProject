import React from "react";
import { Text } from "react-native";
import { Title, TouchableOpacity } from './button.styled';


const CustomButton = ({ title, onPress, variant, }) => {
  return (
    // <TouchableOpacity
    //   style={Wrapper}
    //   onPress={onPress}
    // >
    //   <Text style={{ color: "white" }}>{title}</Text>
    // </TouchableOpacity>
    <TouchableOpacity
      onPress={onPress}
      variant={variant}
    >
      <Title variant={variant}>{title}</Title>
    </TouchableOpacity>
  );
};

export default CustomButton;