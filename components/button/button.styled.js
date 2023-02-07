import styled, { css } from '@emotion/native'
import { View, Text } from 'react-native'

const renderBackgroundColorVariant = (variant = 'primary') => {
  switch (variant) {
    case 'primary':
      return '#1977F3';
    case 'link':
      return 'transparent';
    case 'secondary':
      return '#E7F3FF';
    default:
      return '#1977F3';
  }
}
const renderTextStylesVariant = (variant = 'primary') => {
  switch (variant) {
    case 'primary':
      return {
        color: '#B4CAFB',
        fontWeight: 400,
      };
    case 'link':
      return {
      color: '#1C6EDE',
      fontWeight: 600,
    };
    case 'secondary':
      return {
        color: '#1077F7',
        fontWeight: 600,
      };  
    default:
      return {
        color: '#B4CAFB',
        fontWeight: 400,
      };
  }
};

const StyledTouchableOpacity = props => {
  return css`
    background-color: ${renderBackgroundColorVariant(props.variant)};
    padding: 12px;
    border-radius: 5px;
    align-items: center;
  `;
};
export const TouchableOpacity = styled(View)`
  ${StyledTouchableOpacity}
`;

const StyledTitle = props => {
  return css(renderTextStylesVariant(props.variant));
};
export const Title = styled(Text)`
  ${StyledTitle}
`;

