import React, { useState } from 'react'
import { Alert, Modal, Switch, Text, View } from 'react-native';
import InputGroup from '../../components/InputGroup/InputGroup';
import Button from '../../components/Button';
import { SwitchGender } from '../../components/Switch'

import { 
  body,
  form,
  header,
  headerText,
  wrapper, 
  inputGroup,
  buttonSubmit,
  switchGender,
  modalView,
  modal,
  centeredView,
} from './SignUp.styles';


const SignUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [gender, setGender] = useState(false); 
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: gender ? 'Male' : 'Female',
  });

  const handleInputChange = (value, field) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const handleOnSubmit = () => {
    if(
      (user.password.length && user.confirmPassword.length )
      && (user.password !== user.confirmPassword)
    ) {
      console.log('password & confirm password do not match!');
      Alert.alert('password & confirm password do not match!');
    }

    setModalVisible(true);
  };

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
            value={user.firstName}
            onChangeText={(value) => handleInputChange(value, 'firstName')}
          />
          <InputGroup
            label='Last Name'
            value={user.lastName}
            style={inputGroup}
            onChangeText={(value) => handleInputChange(value, 'lastName')}
          />
          <InputGroup
            label='Email Address'
            value={user.email}
            style={inputGroup}
            inputMode='email'
            keyboardType='email-address'
            textContentType='emailAddress'
            onChangeText={(value) => handleInputChange(value, 'email')}
          />
          <InputGroup
            label='Password'
            style={inputGroup}
            value={user.password}
            secureTextEntry={true}
            onChangeText={(value) => handleInputChange(value, 'password')}
          />
          <InputGroup
            label='Confirm Password'
            style={inputGroup}
            value={user.confirmPassword}
            secureTextEntry={true}
            onChangeText={(value) => handleInputChange(value, 'confirmPassword')}
          />

        <SwitchGender
          style={switchGender}
          value={gender}
          toggleSwitch={() => {
            setGender(!gender);
            setUser({...user, gender: !gender ? 'Male' : 'Female'})
          }}
        />

          <Button 
            style={buttonSubmit}
            onPress={handleOnSubmit}
          >SUBMIT</Button>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          style={modal}
          >
          <View style={centeredView}>
            <View style={modalView}>
              {
                Object.keys(user).map((u, idx) => <Text key={idx}>{u} : {user[u]}</Text>)
              }
            </View>
          </View>
      </Modal>
      </View>
    </View>
  )
}

export default SignUp;
