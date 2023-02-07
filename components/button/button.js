import React from "react";
import { Title, TouchableOpacity } from './button.styled';


const ButtonCustom = ( props ) => {

  const { title, onPress, variant } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      variant={variant}
      {...props}
    >
      <Title variant={variant}>{title}</Title>
    </TouchableOpacity>
  );
};

export default ButtonCustom;