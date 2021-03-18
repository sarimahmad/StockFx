/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const ProfileStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${BLUE.app};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
  `,
  Scroll: styled.ScrollView`
    flex: 1;
  `,
  TopUserProfileWrapper: styled.TouchableHighlight`
    height: ${SCREEN.width - 160}px;
    width: ${SCREEN.width - 160}px;
    border-radius: ${(SCREEN.width - 160) / 2}px;
    align-self: center;
    marginVertical: 20px;
  `,
  TopUserInnerImage: styled.Image`
    height: ${SCREEN.width - 160}px;
    width: ${SCREEN.width - 160}px;
    align-self: center;
    resizeMode: contain;
  `,
  SimpleView: styled.View`
    width: ${SCREEN.width - 60}px;
    align-self: center;
    margin-top: 15px
  `,
  OpenSans12Bold: styled.Text`
    font-size: 12px;
    font-family: ${FONT.bold};
    color: ${WHITE.app};
    margin-bottom: 10px;
  `,
  ItemWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${BLUE.drawerLine};
    margin-top: 10px;
  `,
  ItemInnerLeft: styled.View`
    flex: 1;
    justify-content: center;
  `,
  ItemRightView: styled.View`
    flex: 0.3;
    justify-content: center;
    align-items: flex-end;
  `,
  OpenSans10Regular: styled.Text`
    font-family: ${FONT.regular};
    font-size: 10px;
    color: ${BLUE.light};
  `,
  TextInput: styled.TextInput`
    font-family: ${FONT.regular};
    font-size: 14px;
    color: ${WHITE.off};
    marginVertical: 10px;
    paddingHorizontal: 5px;
  `,
  SocialBtnImage: styled.Image`
    height: 70px;
    resizeMode: contain;
  `,
};

export default ProfileStyles;
