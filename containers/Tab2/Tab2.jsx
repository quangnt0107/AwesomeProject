import React from 'react';
import { View, Text } from 'react-native';

import * as styles from './Tab2.styles';


const Tab2 = (props) => {
  const {
    style = '',
  } = props;

  return (
    <View style={[styles.wrapper, style]}>
      <Text>Tab2</Text>
    </View>
  );
};

export default Tab2;

