/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, RED, WHITE} from '../../helper/Color';
import {FONT, isIphoneXorAbove, SCREEN} from '../../helper/Constant';

const NewsAndFeedStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLUE.background};
    paddingBottom: ${isIphoneXorAbove ? 80 : 60}px;
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
  `,
  CardWrapper: styled.View`
    height: 230px;
    width: ${SCREEN.width}px;
    justifyContent: center;
    alignItems: center;
    marginVertical: 10px;
  `,
  CardInnerWrapper: styled.View`
    height: 100%;
    width: ${SCREEN.width - 60}px;
    align-self: center;
    background-color: ${BLUE.app_light};
    borderRadius: 10px;
    paddingLeft: 20px;
    paddingTop: 22px;
  `,
  AbsoluteImage: styled.Image`
    height: 120px;
    width: 120px;
    resizeMode: contain;
    position: absolute;
    bottom: 0;
    right: 10px;
  `,
  ItemImage: styled.Image`
    height: 40px;
    width: 40px;
    resizeMode: contain;
  `,
  OpenSane14bold: styled.Text`
    fontSize: 14px;
    fontFamily: ${FONT.bold};
    color: ${WHITE.app};
  `,
  OpenSane12bold: styled.Text`
    fontSize: 12px;
    fontFamily: ${FONT.bold};
    color: ${WHITE.app};
  `,
  BottomView: styled.View`
    flex: 1;
    paddingBottom: 21px;
    justify-content: flex-end;
  `,
  RowView: styled.View`
    flexDirection: row;
    align-items: center;
  `,
  BottomOption: styled.View`
    paddingHorizontal: 5px;
    borderRadius: 10px;
    background-color: ${WHITE.off};
    justify-content: center;
    align-items: center;
    marginRight: 5px;
  `,
  OpenSans18Bold: styled.Text`
    fontFamily: ${FONT.bold};
    color: ${WHITE.dark};
    fontSize: 18px;
    marginBottom: 23px;
  `,
  SimpleViewCenter: styled.View`
  `,
  WeeklyAnalyticsWrapper: styled.View`
    width: ${SCREEN.width}px;
  `,
  WeeklyAnalyticsInnerWrapper: styled.View`
    width: ${SCREEN.width - 60}px;
    align-self: center;
    borderRadius: 10px;
    background-color: ${BLUE.app};
    flexDirection: row;
  `,
  LeftView: styled.View`
    paddingHorizontal: 10px;
    background-color: ${BLUE.drawerLine};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    paddingVertical: 10px;
    width: 70px;
    alignItems: center;
  `,
  OpenSans10Regular: styled.Text`
    font-size: 10px;
    fontFamily: ${FONT.regular};
    color: ${BLUE.light};
  `,
  OpenSans18BoldRed: styled.Text`
    font-family: ${FONT.bold};
    color: ${RED.app};
    fontSize: 18px;
  `,
  OpenSans10regularDot: styled.Text`
    marginVertical: 9px;
    fontSize: 10px;
    color: ${WHITE.dark};
  `,
  OpenSans12Regular: styled.Text`
    fontFamily: ${FONT.regular};
    color: ${BLUE.light};
    fontSize: 12px;
    marginTop: 5px;
    lineHeight: 18px;
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
    paddingHorizontal: 10px;
    borderRadius: 15px;
  `,
  OpenSans12Bold: styled.Text`
    fontFamily: ${FONT.bold};
    fontSize: 12px;
  `,
  NewsList: styled.FlatList`
  
  `,
};

export default NewsAndFeedStyles;
