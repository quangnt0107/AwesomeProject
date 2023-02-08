
import React from 'react';
import { View } from 'react-native';

import { 
  wrapper, 
} from './App.styles';
import { FaceBookSignUp as  ContainerFaceBookSignUp } from './containers/FaceBook';


export default function App() {

  return (<>
    <View style={wrapper}>
      <ContainerFaceBookSignUp />
    </View>
  </>);
}



