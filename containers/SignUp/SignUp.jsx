import React from 'react'
import { Text, View } from 'react-native';
import InputGroup from '../../components/InputGroup/InputGroup';
import Button from '../../components/Button';

import { 
  body,
  form,
  header,
  headerText,
  wrapper, 
  inputGroup,
  buttonSubmit,
} from './SignUp.styles';


const SignUp = () => {
  return (
    <View style={wrapper}>
      <View style={header}>
        <Text style={headerText}>Register</Text>
      </View>
      <View style={body}>
        <View style={form}>
          <InputGroup
            label='First Name'
            style={inputGroup}
          />
          <InputGroup
            label='Last Name'
            style={inputGroup}
          />
          <InputGroup
            label='Email Address'
            style={inputGroup}
          />
          <InputGroup
            label='Password'
            style={inputGroup}
          />
          <InputGroup
            label='Confirm Password'
            style={{ ...inputGroup, marginBottom: 30 }}
          />

          <Button style={buttonSubmit}>SUBMIT</Button>
        </View>
      </View>
    </View>
  )
}

export default SignUp;
