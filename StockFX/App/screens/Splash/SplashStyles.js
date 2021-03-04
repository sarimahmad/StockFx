/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, GREEN} from '../../helper/Color';

const SplashStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    justifyContent: center;
    backgroundColor: ${BLUE.app};
  `,
  SplashIcon: styled.Image`
    height: 165px;
    width: 179px;
    alignSelf: center;
    resizeMode: contain;
  `,
};

export default SplashStyles;
