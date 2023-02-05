import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, Text } from 'react-native';

import { AppWrapper, ImageBannerFB, TextInputAccount, FormContainer, TextInputPassword, TextInputContainer, ButtonContainer, ButtonContainerTop, ButtonContainerBottom, Divider, TextDividerContainer, TitleDiver } from './App.styled';
import Button from './components/button';


export default function App() {
  const { width, height } = Dimensions.get('screen');

  return (<>
    <AppWrapper width={width}>
      <ImageBannerFB 
        screenWidth={width}
        source={require('./assets/banner-fb.png')}
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
          />
        </TextInputContainer>

        <ButtonContainer>
          <ButtonContainerTop>
            <Button title={'Đăng nhập'}/>
            <Button title={'Quên mật khẩu?'} variant='link'/>
            <Button title={'Quay lại'} variant='link'/>
          </ButtonContainerTop>
          <ButtonContainerBottom>
            <TextDividerContainer>
              <Divider></Divider>
              <TitleDiver>HOẶC</TitleDiver>
              <Divider></Divider>
            </TextDividerContainer>

            <Button title={'Tạo tài khoản mới'} variant='secondary'/>
          </ButtonContainerBottom>
        </ButtonContainer>
      </FormContainer>
    </AppWrapper>
  </>);
}

