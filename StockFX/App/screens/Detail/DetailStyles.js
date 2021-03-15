/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, GREEN, WHITE, YELLOW} from '../../helper/Color';
import { FONT, SCREEN } from '../../helper/Constant';

const ProfileStyles = {
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
  TopTabWrapper: styled.View`
    width: ${SCREEN.width}px;
    height: 40px;
    flexDirection: row;
    backgroundColor: ${BLUE.app};
  `,
  TopTabInnerWrapper: styled.TouchableHighlight`
    flex: 1;
    justify-content: center;
    align-items: center;
    borderBottomColor: ${YELLOW.app};
  `,
  OpenSans14Bold: styled.Text`
    fontFamily: ${FONT.bold};
    fontSize: 14px;
  `,
  SimpleRowView: styled.View`
    flexDirection: row;
    width: 100%;
    marginVertical: 13px;
  `,
  OpenSans26Bold: styled.Text`
    fontFamily: ${FONT.bold};
    fontSize: 26px;
    color: ${WHITE.app};
  `,
  OpenSans12Regular: styled.Text`
    fontSize: 12px;
    fontFamily: ${FONT.regular};
    color: ${WHITE.light};
    marginTop: 6px;
  `,
  AverageRowWrapper: styled.View`
    flexDirection: row;
    alignItems: center;
    marginTop: 9px;
  `,
  AverageInnerView: styled.View`
    height: 20px;
    paddingHorizontal: 5px;
    borderRadius: 10px;
    marginLeft: 6px;
  `,
  OpenSans14Regular: styled.Text`
    color: ${GREEN.default};
    fontSize: 14px;
    fontFamily: ${FONT.regular};
  `,
  TopCategoriesList: styled.View`
    height: 30px;
    width: ${SCREEN.width - 60}px;
    align-self: center;
    justify-content: center;
    background-color: ${BLUE.app};
    borderRadius: 15px;
    marginVertical: 20px;
  `,
  HorizontalCategoriesList: styled.FlatList`
  `,
  CategoryItemWrapper: styled.TouchableHighlight`
    height: 30px;
    justifyContent: center;
    alignItems: center;
    borderRadius: 15px;
  `,
  CategorySelected: styled.View`
    height: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    paddingHorizontal: 20px;
    borderRadius: 15px;
  `,
  OpenSans12Bold: styled.Text`
    fontFamily: ${FONT.bold};
    fontSize: 12px;
  `,
  ChartWrapper: styled.View`
    borderWidth: 2px;
    borderColor: ${BLUE.light};
    borderRadius: 10px;
    width: ${SCREEN.width - 60}px;
    align-self: center;
    paddingVertical: 2px;
  `,
  ChartIconBtn: styled.TouchableHighlight`
    height: 20px;
    width: 20px;
    justifyContent: center;
    alignItems: center;
  `,
  ChartIcon: styled.Image`
    height: 20px;
    width: 20px;
    resizeMode: contain;
  `,
  Divider: styled.View`
    height: 1px;
    width: ${SCREEN.width - 60}px;
    alignSelf: center;
    backgroundColor: ${BLUE.drawerLine};
    marginVertical: 35px;
  `,
  OpenSans18Bold: styled.Text`
    fontFamily: ${FONT.bold};
    color: ${WHITE.dark};
    fontSize: 18px;
  `,
  SimpleView: styled.View`
    width: ${SCREEN.width - 60}px;
    align-self: center;
  `,
  BlueBtn: styled.TouchableHighlight`
    height: 40px;
    width: ${SCREEN.width - 60}px;
    align-self: center;
    background-color: ${BLUE.app};
    borderRadius: 10px;
    justify-content: center;
    alignItems: center;
    marginVertical: 20px;
  `,
};

export default ProfileStyles;
