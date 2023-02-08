
import React from 'react';
import { View } from 'react-native';

import { 
  wrapper, 
} from './App.styles';
import { FaceBookSignIn as  ContainerFaceBookSignIn } from './containers/FaceBook';


export default function App() {

  return (<>
    <View style={wrapper}>
      <ContainerFaceBookSignIn />
    </View>
  </>);
}



