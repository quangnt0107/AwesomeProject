import React from 'react';
import { View } from 'react-native';
import { Text } from '../Text';
import { Input } from '../Input';
import RenderIf from '../RenderIf';

import { wrapper } from './InputGroup.styles';


const InputGroup = ( props ) => {
  const {
    style = {},
    label = '',
    editabe = true,

    ...otherProps
  } = props;
 
  return (
    <View style={[wrapper, style]}>
      <RenderIf condition={label.length}>
        <Text>{label}</Text>
      </RenderIf>

      <Input 
        {...otherProps}
        editable={editabe}
        selectTextOnFocus={editabe}
      />
    </View>
  )
}

export default InputGroup;
