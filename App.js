
import React from 'react';

import { 
  AppWrapper, 
} from './App.styled';
import { FaceBookSignUp as  ContainerFaceBookSignUp } from './containers/FaceBook';


export default function App() {

  return (<>
    <AppWrapper>
      <ContainerFaceBookSignUp />
    </AppWrapper>
  </>);
}



