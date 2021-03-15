/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE, GREEN, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const FavouriteStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLUE.background};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
  `,
  FilterFollowingInputWrapper: styled.View`
    height: 40px;
    width: ${SCREEN.width - 60}px;
    align-self: center;
    border-radius: 10px;
    background-color: ${BLUE.light};
    flexDirection: row;
    alignItems: center;
    marginBottom: 30px;
  `,
  FilterSearchImage: styled.Image`
    height: 20px;
    width: 20px;
    marginHorizontal: 5px;
    resizeMode: contain;
  `,
  FilterFollowingInput: styled.TextInput`
    height: 40px;
    width: ${SCREEN.width - 90}px;
    border-radius: 10px;
    fontFamily: ${FONT.regular};
    fontSize: 14px;
  `,
  RowView: styled.View`
    flexDirection: row;
  `,
  RightView: styled.View`
    flex: 1;
    flexDirection: row-reverse;
  `,
  OpenSans14Bold: styled.Text`
    fontFamily: ${FONT.bold};
    fontSize: 14px;
    color: ${WHITE.app};
  `,
  SimpleView: styled.View`
    width: ${SCREEN.width - 60}px;
    align-self: center;
  `,
  AbsoluteTopView: styled.View`
    height: 20px;
    width: ${SCREEN.width}px;
    background-color: ${BLUE.app};
    position: absolute;
    top: 0px;
  `,
  HorizontalCategoriesList: styled.FlatList`
  `,
  CategoryItemWrapper: styled.TouchableHighlight`
    height: 30px;
    justifyContent: center;
    alignItems: center;
    borderRadius: 15px;
    marginLeft: 2px;
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
    fontSize: 14px;
  `,
  OpenSans10Regular: styled.Text`
    fontFamily: ${FONT.regular};
    fontSize: 10px;
    color: ${WHITE.light};
  `,
};

export default FavouriteStyles;
