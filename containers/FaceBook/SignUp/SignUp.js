import React from 'react'
import { Dimensions } from 'react-native';
import Button from '../../../components/button';

import { 
  Wrapper, 
  ImageBannerFB, 
  TextInputAccount, 
  FormContainer, 
  TextInputPassword, 
  TextInputContainer, 
  ButtonContainer, 
  ButtonContainerTop, 
  ButtonContainerBottom, 
  Divider, 
  TextDividerContainer,
  TitleDiver, 
  ButtonLogin 
} from './SignUp.styled';



const SignUp = () => {
  const { width, height } = Dimensions.get('screen');

  return (
    <Wrapper>
      <ImageBannerFB
        screenWidth={width}
        source={require('../../../assets/banner-fb.png')}
      />
      <FormContainer>
        <TextInputContainer>
          <TextInputAccount
            placeholder='Số điện thoại hoặc email'
            placeholderTextColor='#CDCDCF'
          />
          <TextInputPassword
            placeholder='Mật khẩu'
            placeholderTextColor='#CDCDCF'
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
        </TextInputContainer>

        <ButtonContainer>
          <ButtonContainerTop>
            <ButtonLogin title={'Đăng nhập'} />
            <Button title={'Quên mật khẩu?'} variant='link'/>
            <Button title={'Quay lại'} variant='link'/>
          </ButtonContainerTop>

          <ButtonContainerBottom>
            <TextDividerContainer>
              <Divider></Divider>
              <TitleDiver>HOẶC</TitleDiver>
              <Divider></Divider>
            </TextDividerContainer>

            <Button title={'Tạo tài khoản mới'} variant='secondary' />
          </ButtonContainerBottom>
        </ButtonContainer>
      </FormContainer>
    </Wrapper>
  )
}

export default SignUp;
