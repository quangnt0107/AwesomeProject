import { css } from '@emotion/native'


const baseWrapper = css({
  backgroundColor: '#1977F3',
  padding: 12,
  borderRadius: 4,
});
const baseText = css({
  color: '#B4CAFB',
  fontWeight: '400',
  textAlign: 'center',
});

export const styleVariants = {
  primary: {
    wrapper : baseWrapper,
    text:     baseText,
  },
  link: {
    wrapper: css({
      ...baseWrapper,
      backgroundColor: 'transparent',
    }),
    text: css({
      ...baseText,
      color: '#1C6EDE',
      fontWeight: '500',
    }),
  },
  secondary: {
    wrapper: {
      ...baseWrapper,
      backgroundColor: '#E7F3FF',
    },
    text: {
      ...baseText,
      color: '#1077F7',
    },
  }
};

