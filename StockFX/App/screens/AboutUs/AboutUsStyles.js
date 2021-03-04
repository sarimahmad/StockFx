/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, GREEN, WHITE} from '../../helper/Color';

const AboutUsStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    justifyContent: center;
    backgroundColor: ${BLUE.app};
  `,
  TextScreenTextScreen: styled.Text`
    fontSize: 16px;
    color: ${WHITE.dark};
    alignSelf: center;
  `,
};

export default AboutUsStyles;
