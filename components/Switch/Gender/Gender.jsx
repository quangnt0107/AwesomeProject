import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { wrapper } from './Gender.styles';

const Gender = ( props ) => {
  const {
    style = {},
    value = false,
    toggleSwitch = () => {},

    ...otherProps
  } = props;
  
  return (
    <View style={[wrapper, style]}>
      <Text>Select gender: Female</Text>
      <Switch
        onValueChange={toggleSwitch}
        value={value}
      />
      <Text>Male</Text>
    </View>
  )
}

export default Gender