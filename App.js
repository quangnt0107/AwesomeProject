
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';

import { 
  wrapper, 
} from './App.styles';
import AboutContainer from './containers/About/About';
import HomeContainer from './containers/Home';
import KetQuaHocTap from './containers/KetQuaHocTap';
// import { FaceBookSignIn as  ContainerFaceBookSignIn } from './containers/FaceBook';
import ContainerSignUp from './containers/SignUp';
import YearTransformation from './containers/YearTransformation';



const Stack = createNativeStackNavigator();



export default function App() {

  console.log(Platform);

  return (<>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeContainer}
        />
        <Stack.Screen name="About" component={AboutContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  </>);
}



