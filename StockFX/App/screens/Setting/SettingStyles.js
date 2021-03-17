/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, GREEN, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const SettingStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLUE.background};
  `,
  SafeArea: styled.SafeAreaView`
    flex: 1;
  `,
  SimpleView: styled.View`
    width: ${SCREEN.width - 60}px;
    align-self: center;
    marginTop: 15px
  `,
  OpenSans12Bold: styled.Text`
    fontSize: 12px;
    fontFamily: ${FONT.bold};
    color: ${WHITE.app};
    marginBottom: 10px;
  `,
  ItemWrapper: styled.View`
    flexDirection: row;
    align-items: center;
    borderBottomWidth: 1px;
    border-bottom-color: ${BLUE.drawerLine};
    marginTop: 10px;
  `,
  ItemInnerLeft: styled.View`
    flex: 0.7;
    justify-content: center;
  `,
  ItemRightView: styled.View`
    flex: 0.3;
    justify-content: center;
    alignItems: flex-end;
  `,
  OpenSans10Regular: styled.Text`
    fontFamily: ${FONT.regular};
    fontSize: 10px;
    color: ${BLUE.light};
  `,
  OpenSans14Regular: styled.Text`
    fontFamily: ${FONT.regular};
    fontSize: 14px;
    color: ${WHITE.off};
    marginVertical: 10px;
  `,
  RightIcon: styled.Image`
    height: 14px;
    width: 14px;
    resizeMode: contain;
  `,
};

export default SettingStyles;
