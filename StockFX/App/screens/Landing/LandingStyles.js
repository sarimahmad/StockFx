/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, GREEN, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const LandingStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    justifyContent: center;
    backgroundColor: ${BLUE.app};
  `,
  BackgroundAbsoluteView: styled.Image`
    position: absolute;
    height: 100%;
    width: 100%;
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
  `,
  TopView: styled.View`
    flex: 0.6;
  `,
  BottomView: styled.View`
    flex: 0.4;
    justify-content: flex-end;
  `,
  TopAppImage: styled.Image`
    height: 121px;
    width: 130px;
    marginTop: 80px;
    alignSelf: center;
    resizeMode: contain;
  `,
  OpenSans14Regular: styled.Text`
    fontFamily: ${FONT.regular};
    fontSize: 14px;
    color: ${WHITE.app};
    marginTop: 17px;
    alignSelf: center;
    text-align: center;
  `,
  TopInnerBottomWrapper: styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  `,
  OpenSans18Bold: styled.Text`
    fontSize: 18px;
    fontFamily: ${FONT.bold};
    color: ${WHITE.dark};
    textAlign: center;
   `,
  BottomBtn: styled.TouchableHighlight`
    height: 40px;
    width: ${SCREEN.width - 60}px;
    align-self: center;
    borderRadius: 10px;
    justify-content: center;
    align-items: center;
    marginBottom: 20px;
  `,
  BtnText: styled.Text`
    fontSize: 14px;
    fontFamily: ${FONT.bold};
    color: ${BLUE.app};
  `,
  OpenSans9Regular: styled.Text`
    fontFamily: ${FONT.regular};
    color: ${WHITE.light};
    marginBottom: 35px;
    marginTop: 13px;
    fontSize: 9px;
    alignSelf: center;
    text-align: center;
  `,
  OpenSans9Bold: styled.Text`
    fontSize: 9px;
    fontFamily: ${FONT.bold};
    color: ${WHITE.light};
  `,
};

export default LandingStyles;
