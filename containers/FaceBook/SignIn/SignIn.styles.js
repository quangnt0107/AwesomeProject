import { css } from '@emotion/native'


export const wrapper = css`
  flex-grow: 1;
  max-width: 575px;
  width: 100%;
  margin: auto;
  background-color: white;
`;

export const imageBannerFB = css`
  width: 100%;
  height: 220px;
`;

export const textInput = css`
  border: 1px solid #CDCDCF;
  padding: 14px 16px;
`;

export const formContainer = css`
  padding: 22px;
  flex-grow: 1;
  `;
export const textInputContainer = css`
  border-radius: 4px;
  /* overflow: hidden; */
  margin-bottom: 16px;
`;
export const textInputAccount = css`
  ${textInput}
  border-bottom-width: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  `;
export const textInputPassword = css`
  ${textInput}
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const textDividerContainer = css`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 26px;
`;
export const titleDiver = css`
  text-transform: uppercase;
  margin: 0 8px;
`;
export const divider = css`
  background-color: #CBCCD0;
  width: 90px;
  height: 1px;
`;


export const buttonContainer = css`
  flex-grow: 1;
  justify-content: space-between;
`;
export const buttonContainerTop = css`
  display: flex;
  flex-direction: column;
`;
export const buttonContainerBottom = css`
  padding-bottom: 36px;
`;
