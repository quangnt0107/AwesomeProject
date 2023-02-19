
import React from 'react';
import { View } from 'react-native';

import { 
  wrapper, 
} from './App.styles';
import KetQuaHocTap from './containers/KetQuaHocTap';
// import { FaceBookSignIn as  ContainerFaceBookSignIn } from './containers/FaceBook';
import ContainerSignUp from './containers/SignUp';
import YearTransformation from './containers/YearTransformation';


export default function App() {

  return (<>
    <View style={wrapper}>
      {/* <ContainerFaceBookSignIn /> */}
      {/* <ContainerSignUp /> */}
      {/* <KetQuaHocTap /> */}
      <YearTransformation />
    </View>
  </>);
}



