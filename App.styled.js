import { Image, Text, TextInput, View } from 'react-native';
import styled from '@emotion/native'


export const AppWrapper = styled(View)`
  flex-grow: 1;
  max-width: 575px;
  width: 100%;
  margin: auto;
`;

export const ImageBannerFB = styled(Image)`
  width: 100%;
  height: ${props => props.screenWidth > 575 ? '350px' : '54vw'};
`;

export const StyledTextInput = styled(TextInput)`
  border: 1px solid #CDCDCF;
  padding: 16px;
  /* outline-color: transparent !important; */
  `;

export const FormContainer = styled(View)`
  padding: 22px;
  flex-grow: 1;
  `;
export const TextInputContainer = styled(View)`
  border-radius: 4px;
  /* overflow: hidden; */
  background-color: #fff;
  margin-bottom: 16px;
`;
export const TextInputAccount = styled(StyledTextInput)`
  border-bottom-width: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  `;
export const TextInputPassword = styled(StyledTextInput)`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const TextDividerContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 26px;
`;
export const TitleDiver = styled(Text)`
  text-transform: uppercase;
  margin: 0 8px;
`;
export const Divider = styled(Text)`
  /* text-transform: uppercase;
  text-align: center;
  position: relative;

  &::before {
    position: absolute;
    display: block;
    content: '';
    background-color: #CBCCD0;
    width: 90px;
    height: 1px;
  } */
  background-color: #CBCCD0;
  width: 90px;
  height: 1px;
`;


export const ButtonContainer = styled(View)`
  flex-grow: 1;
  justify-content: space-between;
`;
export const ButtonContainerTop = styled(View)``;
export const ButtonContainerBottom = styled(View)`
  padding-bottom: 36px;
`;

