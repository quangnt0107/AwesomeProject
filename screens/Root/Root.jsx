import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Drawer1 from '../../containers/Drawer1';
import Drawer2 from '../../containers/Drawer2';


import * as styles from './Root.styles';
import Home from '../../containers/Home/Home';
import Root2 from '../Root2/Root2';


const Drawer = createDrawerNavigator();



const Root = (props) => {
  const {
    style = '',
  } = props;

  console.log(props);

  return (
    <Drawer.Navigator 
      style={[styles.wrapper, style]} 
      initialRouteName={'Home'} 
      drawerStyle={{ width: '100%', backgrounColor: 'red' }}
    >

      <Drawer.Screen
        name='Drawer1'
        component={Drawer1}
      />

      <Drawer.Screen name='Drawer2' component={Drawer2}/>
      <Drawer.Screen name='Home' component={Home}/>
      <Drawer.Screen name='Root2' component={Root2}/>
    </Drawer.Navigator>

  );
};

export default Root;

