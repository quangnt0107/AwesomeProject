import React from 'react'
import { Text, TextInput } from 'react-native';
import { wrapper } from './Input.styles';

const InputCustom = ( props ) => {
  const {
    style  = {},

    ...ortherProps
  } = props;
  
  return (
    <TextInput 
      style={[wrapper, style]} 
      {...ortherProps}
    />
  )
}

export default InputCustom;
