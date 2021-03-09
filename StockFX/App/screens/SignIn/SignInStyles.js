/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, GREEN, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const SignInStyles = {
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
  SocialBtnWrapper: styled.View`
    height: ${SCREEN.width / 4}px;
    width: ${SCREEN.width - 60}px;
    align-self: center;
    flexDirection: row;
    marginTop: 30px;
    marginBottom: 20px;
  `,
  SocialInnerWrapper: styled.View`
    flex: 1;
  `,
  SocialBtn: styled.TouchableHighlight`
    height: 100%;
    width: 100%;
  `,
  SocialBtnImage: styled.Image`
    height: 100%;
    width: 100%;
    resizeMode: contain;
  `,
  OpenSans14Bold: styled.Text`
    textAlign: center;
    alignSelf: center;
    fontFamily: ${FONT.bold};
    color: ${WHITE.app};
    fontSize: 14px;
  `,
  TextInputWrapper: styled.View`
    minHeight: 50px;
    width: ${SCREEN.width - 30}px;
    align-self: center;
    justify-content: center;
  `,
  TextInput: styled.TextInput`
    height: 50px;
    width: ${SCREEN.width - 60}px;
    align-self: center;
    fontFamily: ${FONT.regular};
    color: ${WHITE.dark};
    fontSize: 14px;
    paddingHorizontal: 5px;
    border-bottom-width: 1px;
    borderBottomColor: ${WHITE.light};
  `,
  TextInputTitle: styled.Text`
    fontFamily: ${FONT.regular};
    color: ${WHITE.dark};
    fontSize: 14px;
    marginVertical: 5px;
  `,
  ForgotPassText:styled.Text`
    fontSize: 12px;
    fontFamily: ${FONT.bold};
    color: ${BLUE.light};
    marginTop: 33px;
    marginBottom: 10px;
    marginLeft: 30px;
  `,
  BottomBtnWrapper: styled.TouchableHighlight`
    height: 40px;
    width: ${SCREEN.width - 60}px;
    align-self: center;
    marginTop: 20px;
    borderRadius: 10px;
    justify-content: center;
    align-items: center;
  `,
  BtnText: styled.Text`
    fontSize: 14px;
    fontFamily: ${FONT.bold};
    color: ${BLUE.app};
  `,
};

export default SignInStyles;
