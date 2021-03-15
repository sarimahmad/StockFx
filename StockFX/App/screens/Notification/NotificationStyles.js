/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, GREEN, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const NotificationStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLUE.dark};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
  `,
  SimpleView: styled.View`
    width: ${SCREEN.width - 60}px;
    align-self: center;
    paddingVertical: 10px;
  `,
  OpenSans12Regular: styled.Text`
    fontFamily: ${FONT.regular};
    font-size: 12px;
    color: ${WHITE.light};
    marginVertical: 20px;
  `,
};

export default NotificationStyles;
