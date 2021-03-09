/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, GREEN, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const StockStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLUE.dark};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
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
  ChartListWrapper: styled.View`
    height: 80px;
    width: 100%;
    justify-content: center;
  `,
  GraphItemWrapper: styled.TouchableHighlight`
    height: 80px;
    width: 110px;
    justify-content: center;
    border-left-width: 5px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-color: ${GREEN.app};
    background-color: ${BLUE.app};
    borderRadius: 10px;
  `,
  GraphInnerWrapper: styled.View`
     flex: 1;
    justify-content: center;
    padding-left: 5px;
  `,
  OpenSans12Regular: styled.Text`
    font-family: ${FONT.regular};
    color: ${BLUE.light};
    fontSize: 12px;
  `,
  OpenSans14Bold: styled.Text`
    font-family: ${FONT.bold};
    color: ${WHITE.app};
    fontSize: 14px;
  `,
  BottomRowView: styled.View`
    height: 26px;
    width: 100%;
    flexDirection: row;
  `,
  FollowedAssetsRowView: styled.View`
    flexDirection: row;
    width: ${SCREEN.width - 60}px;
    alignSelf: center;
    marginVertical: 20px;
    alignItems: center;
  `,
};

export default StockStyles;
