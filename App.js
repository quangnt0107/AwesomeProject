
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { 
  wrapper, 
} from './App.styles';
import KetQuaHocTap from './containers/KetQuaHocTap';
// import { FaceBookSignIn as  ContainerFaceBookSignIn } from './containers/FaceBook';
import ContainerSignUp from './containers/SignUp';
import YearTransformation from './containers/YearTransformation';
import { ScreenFlower, ScreenFlowerDetails, ScreenFlowerTypes } from './screens/Flower';


const Stack = createNativeStackNavigator();



export default function App() {

  return (<>
    <NavigationContainer style={wrapper}>
      {/* <ContainerFaceBookSignIn /> */}
      {/* <ContainerSignUp /> */}
      {/* <KetQuaHocTap /> */}
      {/* <YearTransformation /> */}
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="ScreenFlowerTypes" component={ScreenFlowerTypes} />
          <Stack.Screen name="ScreenFlower" component={ScreenFlower} />
          <Stack.Screen name="ScreenFlowerDetails" component={ScreenFlowerDetails} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  </>);
}



