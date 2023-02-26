import React from 'react';
import { View, Text } from 'react-native';

import * as styles from './Details.styles';


const Details = (props) => {
  const {
    style = '',
  } = props;

  return (
    <View style={[styles.wrapper, style]}>
      <Text>Details</Text>
    </View>
  );
};

export default Details;

