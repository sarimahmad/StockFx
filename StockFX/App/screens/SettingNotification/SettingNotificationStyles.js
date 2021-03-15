/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const SettingNotificationStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLUE.dark};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
  `,
  Scroll: styled.ScrollView`
    flex: 1;
  `,
  OpenSans14Regular: styled.Text`
    fontSize: 14px;
    color: ${WHITE.dark};
    alignSelf: center;
  `,
  OpenSans14RegularOff: styled.Text`
    fontSize: 14px;
    color: ${WHITE.off};
    alignSelf: center;
  `,
  RowView: styled.View`
    flexDirection: row;
    marginTop: 21px;
    width: ${SCREEN.width - 60}px;
    align-self: center;
    alignItems: center;
  `,
  RightView: styled.View`
    flex: 1;
    alignItems: flex-end;
    justifyContent: center;
  `,
  RightIcon: styled.Image`
    height: 14px;
    width: 14px;
    resizeMode: contain;
  `,
  SwitchWrapper: styled.View`
    borderRadius: 20px;
    borderWidth: 2px;
    borderColor: ${BLUE.light};
  `,
  Divider: styled.View`
    height: 2px;
    width: ${SCREEN.width - 60}px;
    align-self: center;
    marginVertical: 25px;
    backgroundColor: ${BLUE.drawerLine};
  `,
  OpenSans10Regular: styled.Text`
    fontFamily: ${FONT.regular};
    fontSize: 10px;
    color: ${BLUE.light};
  `,
  SimpleView: styled.View`
    width: ${SCREEN.width - 60}px;
    align-self: center;
  `,
};

export default SettingNotificationStyles;
