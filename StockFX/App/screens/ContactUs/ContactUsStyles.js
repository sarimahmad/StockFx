/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const ContactUsStyles = {
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
  `,OpenSans10Regular: styled.Text`
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
  TextInputMessage: styled.TextInput`
    font-family: ${FONT.regular};
    font-size: 14px;
    color: ${WHITE.off};
    marginVertical: 10px;
    borderWidth: 1px;
    borderColor: ${BLUE.light};
    borderRadius: 10px;
    padding: 10px;
    minHeight: 200px;
  `,
  SendBtn: styled.TouchableHighlight`
    height: 40px;
    width: ${SCREEN.width - 60}px;
    marginTop: 10px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${BLUE.light};
  `,
  SendBtnText: styled.Text`
    fontSize: 16px;
    fontFamily: ${FONT.bold};
    color: ${WHITE.off};
  `,
};

export default ContactUsStyles;
