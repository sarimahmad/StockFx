/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, WHITE, YELLOW} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const AboutUsStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLUE.background};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
  `,
  Scroll: styled.ScrollView`
    flex: 1;
  `,
  SimpleView: styled.View`
    width: ${SCREEN.width - 60}px;
    align-self: center;
    marginVertical: 10px;
  `,
  OpenSans13Regular: styled.Text`
    color: ${WHITE.off};
    fontFamily: ${FONT.regular};
    fontSize: 13px;
  `,
  OpenSans13Bold: styled.Text`
    color: ${YELLOW.app};
    fontFamily: ${FONT.bold};
    fontSize: 13px;
  `,
  TopImage: styled.Image`
    marginVertical: 10px;
    resizeMode: contain;
    width: ${SCREEN.width / 3}px;
    height: ${SCREEN.width / 3}px;
    alignSelf: center;
  `,
};

export default AboutUsStyles;
