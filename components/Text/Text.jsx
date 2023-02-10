import React from 'react'
import { Text } from 'react-native';
import { text } from './Text.styles';

const TextCustom = ( props ) => {
  const { 
    style = {},
    children = null,
    // title = '',
  } = props;

  return (
    <Text style={[text, style]}>
      {children}
    </Text>
  )
}

export default TextCustom;
