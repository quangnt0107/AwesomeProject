
import 'react-native-gesture-handler';
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
import Flower from './screens/Flower';
import Root from './screens/Root';
import Root2 from './screens/Root2';



const Stack = createNativeStackNavigator();



export default function App() {

  console.log(Platform);

  return (<>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Group>
          <Stack.Screen
            name='Home'
            component={HomeContainer}
            options={{ title: 'Home' }}
          />
          <Stack.Screen name="About">
            {(props) => <AboutContainer {...props} data={[]} />}
          </Stack.Screen>
          <Stack.Screen name="Flower" component={Flower} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} /> 
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Root2" component={Root2} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  </>);
}



