import React from 'react';
import { View, Text, Button } from 'react-native';

import * as styles from './Drawer1.styles';


const Drawer1 = (props) => {
  const {
    style = '',
  } = props;

  console.log(props);

  return (
    <View style={[styles.wrapper, style]}>
      <Text>Drawer1</Text>
      <Button title="Open drawer" onPress={() => props.navigation.toggleDrawer()} />
    </View>
  );
};

export default Drawer1;

