import React from 'react';
import { View, Text } from 'react-native';

import * as styles from './{{pascalCase name}}.styles';


const {{pascalCase name}} = (props) => {
  const {
    style = '',
  } = props;

  return (
    <View style={[styles.wrapper, style]}>
      <Text>{{pascalCase name}}</Text>
    </View>
  );
};

export default {{pascalCase name}};

