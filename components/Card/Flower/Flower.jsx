import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import * as styles from './Flower.styles';


const Flower = (props) => {
  const {
    style = '',
    vertical = false,
    tenloai = '',
    maloai = '',
    tenhoa = '',
    mahoa = '',
  } = props;

  console.log(props);

  const handleNavigation = (e) => {
    if(props?.route?.name === 'ScreenFlower') {
      props.navigation.navigate('ScreenFlowerDetails', { tenhoa, mahoa })
    }else if(props?.route?.name === 'ScreenFlowerTypes') {
      props.navigation.navigate('ScreenFlower', { tenloai, maloai })
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.wrapper, style]}
      onPress={handleNavigation}
    >
      <Text>{tenloai || tenhoa}</Text>
    </TouchableOpacity>
  );
};

export default Flower;

