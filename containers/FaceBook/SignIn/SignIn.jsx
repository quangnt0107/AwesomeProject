import React from 'react'
import { Dimensions, Image, Text, TextInput, View } from 'react-native';
import Button from '../../../components/Button';

import { 
  wrapper, 
  imageBannerFB, 
  textInputAccount, 
  formContainer, 
  textInputPassword, 
  textInputContainer, 
  buttonContainer, 
  buttonContainerTop, 
  buttonContainerBottom, 
  divider, 
  textDividerContainer,
  titleDiver, 
} from './SignIn.styles';



const SignIn = () => {
  // const { width, height } = Dimensions.get('screen');

  return (
    <View style={wrapper}>
      <Image
        source={require('./assets/banner-fb.png')}
        style={imageBannerFB}
      />
      <View style={formContainer}>
        <View style={textInputContainer}>
          <TextInput
            placeholder='Số điện thoại hoặc email'
            placeholderTextColor='#CDCDCF'
            style={textInputAccount}
          />
          <TextInput
            placeholder='Mật khẩu'
            placeholderTextColor='#CDCDCF'
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            style={textInputPassword}
          />
        </View>

        <View style={buttonContainer}>
           <View style={buttonContainerTop}>
            <Button style={{ marginBottom: 22 }}>Đăng nhập</Button>
            <Button style={{ marginBottom: 22 }} variant='link'>Quên mật khẩu?</Button>
            <Button variant='link'>Quay lại</Button>
          </View>

          <View style={buttonContainerBottom}>
             <View style={textDividerContainer}>
              <Text style={divider}></Text>
              <Text style={titleDiver}>HOẶC</Text>
              <Text style={divider}></Text>
            </View>

            <Button variant='secondary'>Tạo tài khoản mới</Button>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SignIn;
