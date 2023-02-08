import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

import {
  styleVariants
} from './Button.styles';

const Button = (props) => {
  const { 
    children = '',
    variant = 'primary', 
    style = {},
  } = props;

  const { 
    wrapper:  styleWrapper = {},
    text:     styleText = {}, 
  } = styleVariants[variant];

  return (
    <TouchableOpacity style={[styleWrapper, style]}>
      <Text style={styleText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

