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
  `,
  ItemWrapper: styled.View`
  
  `,
};

export default SettingStyles;
