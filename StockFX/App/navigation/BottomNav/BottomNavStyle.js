/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import {BLUE, WHITE} from '../../helper/Color';
import {SCREEN} from '../../helper/Constant';
const BottomNavStyle = {
  WrapperView: styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: ${BLUE.app};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top-width: 1px;
  `,

  LinkWrapper: styled.View`
    flex: 1;
  `,

  IconWrapperView: styled.View`
    width: ${SCREEN.width / 5.5}px;
    height: 100%;
    padding: 2px;
    align-items: center;
    justify-content: center;
    align-content: center;
  `,

  CreateView: styled.View`
    position: relative;
    align-items: center;
    justify-content: center;
  `,

  DotView: styled.View`
    position: absolute;
    align-self: center;
  `,
  IconText: styled.Text`
    alignSelf: center;
    textAlign: center;
    color: ${WHITE.dark};
    marginTop: 2px;
  `,
  EmptyView: styled.View`
    height: 1px;
    width: ${SCREEN.width}px;
  `,
  Icon: styled.Image`
    height: 20px
    width: 20px
    resizeMode: contain;
  `,
};

export default BottomNavStyle;
