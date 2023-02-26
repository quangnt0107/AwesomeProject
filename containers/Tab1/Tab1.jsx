import React from 'react';
import { View, Text } from 'react-native';

import * as styles from './Tab1.styles';


const Tab1 = (props) => {
  const {
    style = '',
  } = props;

  return (
    <View style={[styles.wrapper, style]}>
      <Text>Tab1</Text>
    </View>
  );
};

export default Tab1;

