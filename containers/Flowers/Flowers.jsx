import React from 'react';
import { Button, FlatList, View, Text } from 'react-native';

import sampleData from './data.json';

import * as styles from './Flowers.styles';


const Flowers = (props) => {
  const {
    style = '',
  } = props;

  const { loaihoas = [] } = sampleData;

  console.log(props);

  return (
    <View style={[styles.wrapper, style]}>
      <FlatList
        data={loaihoas}
        renderItem={({ item }) =>
          <Button
            key={item.maloai}
            title={item.tenloai}
            onPress={() =>
              props.navigation.navigate('Flower', { name: item.tenloai, data: [] })
            }
          />
        }
      />
    </View>
  );
};

export default Flowers;

