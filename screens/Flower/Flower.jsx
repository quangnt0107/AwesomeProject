import React from 'react';
import { View, Text } from 'react-native';

import Flowers from '../../containers/Flowers';

import { hoas } from './assets/hoa.json';

import * as styles from './Flower.styles';


const Flower = (props) => {
  const {
    style = '',
  } = props;

  const { maloai = '' } = props?.route?.params;

  const filterData = !maloai ? hoas : hoas.filter((i) => i.maloai === maloai);

  console.log(props);

  return (
    <View style={[styles.wrapper, style]}>
      <Flowers { ...props } data={filterData} />
    </View>
  );
};

export default Flower;

