import React from 'react';
import { ScrollView, Text } from 'react-native';

import * as styles from './Flower.styles';


const Flower = (props) => {
  const {
    style = '',
  } = props;
  
  console.log(props);

  return (
    <ScrollView style={[styles.wrapper, style]}>
      <Text>Flower</Text>
    </ScrollView>
  );
};

export default Flower;

