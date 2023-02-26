import React from 'react';
import { View, Text } from 'react-native';

import * as styles from './Drawer2.styles';


const Drawer2 = (props) => {
  const {
    style = '',
  } = props;

  return (
    <View style={[styles.wrapper, style]}>
      <Text>Drawer2</Text>
    </View>
  );
};

export default Drawer2;

