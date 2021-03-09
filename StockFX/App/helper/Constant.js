// @flow

import {Dimensions} from 'react-native';
import {GREEN, RED} from './Color';

export const SCREEN = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};

export const isIphoneXorAbove =
  SCREEN.height === 812 ||
  SCREEN.width === 812 ||
  SCREEN.height === 896 ||
  SCREEN.width === 896;

export const FONT = {
  bold: 'OpenSans-Bold',
  boldItalic: 'OpenSans-BoldItalic',
  extraBold: 'OpenSans-ExtraBold',
  extraBoldItalic: 'OpenSans-ExtraBoldItalic',
  italic: 'OpenSans-Italic',
  light: 'OpenSans-Light',
  lightItalic: 'OpenSans-LightItalic',
  regular: 'OpenSans-Regular',
  semiBold: 'OpenSans-SemiBold',
  semiBoldItalic: 'OpenSans-SemiBoldItalic',
};

export const GraphData = [
  {
    name: 'SPX',
    amount: '3,829.34',
    avg: '0.00',
    value: {
      data: [
        {x: -2, y: 0},
        {x: -1, y: 2},
        {x: 0, y: 4},
        {x: 1, y: 2},
        {x: 2, y: 12},
      ],
      color: '#ABDDB3',
      revertValue: 1,
    },
    color: GREEN.app,
  },
  {
    name: 'N225',
    amount: '3,829.34',
    avg: '-3.17',
    value: {
      data: [
        {x: -2, y: 10},
        {x: -1, y: 6},
        {x: 0, y: 7},
        {x: 1, y: 8},
        {x: 2, y: 12},
      ],
      color: '#EFB1AE',
      revertValue: -1,
    },
    color: RED.app,
  },
  {
    name: 'VIX',
    amount: '3,829.34',
    avg: '0.00',
    value: {
      data: [
        {x: -2, y: 0},
        {x: -1, y: 2},
        {x: 0, y: 4},
        {x: 1, y: 2},
        {x: 2, y: 12},
      ],
      color: '#EFB1AE',
      revertValue: -1,
    },
    color: GREEN.app,
  },
];

export const StockList = [
  {
    name: 'BST',
    completeName: 'Bootstrap',
    amount: '382.37',
    changeValue: '-9.24',
    proPer: '-2.42',
    image: require('../assets/bst.png'),
    color: RED.app,
  },
  {
    name: 'FBC',
    completeName: 'Facebook Inc',
    amount: '46,250.17',
    changeValue: '-9.24',
    proPer: '-2.42',
    image: require('../assets/fbc.png'),
    color: RED.app,
  },
  {
    name: 'GOOGLE',
    completeName: 'Google Inc.',
    amount: '382.37',
    changeValue: '+9.24',
    proPer: '+2.42',
    image: require('../assets/google.png'),
    color: GREEN.default,
  },
  {
    name: 'TESLA',
    completeName: 'Tesla Inc',
    amount: '382.37',
    changeValue: '-9.24',
    proPer: '-2.42',
    image: require('../assets/tesla.png'),
    color: RED.app,
  },
  {
    name: 'SPY',
    completeName: 'SPDR S&P 500 ETF Trust',
    amount: '382.37',
    changeValue: '+9.24',
    proPer: '+2.42',
    image: require('../assets/spy.png'),
    color: GREEN.default,
  },
];
