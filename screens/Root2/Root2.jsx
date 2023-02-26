import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tab1 from '../../containers/Tab1';
import Tab2 from '../../containers/Tab2'

import * as styles from './Root2.styles';


const Tab = createBottomTabNavigator();



const Root2 = (props) => {
  const {
    style = '',
  } = props;

  return (
    <Tab.Navigator style={[styles.wrapper, style]} initialRouteName='Tab1'>
      <Tab.Screen name='Tab1' component={Tab1} />
      <Tab.Screen name='Tab2' component={Tab2} />
    </Tab.Navigator>
  );
};

export default Root2;

