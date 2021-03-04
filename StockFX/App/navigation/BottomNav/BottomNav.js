/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import BottomNavStyle from './BottomNavStyle';

const BottomNav = ({
  navigation,
  checkPreviewState,
  index,
  isIphoneXorAbove,
  opacityActually,
}) => (
  <BottomNavStyle.WrapperView
    style={{height: isIphoneXorAbove ? 80 : 60, opacity: opacityActually}}>
    <BottomNavStyle.LinkWrapper
      style={{marginBottom: isIphoneXorAbove ? 15 : 0}}>
      <TouchableOpacity
        style={{minWidth: 40, alignSelf: 'center'}}
        onPress={() => {
          if (opacityActually === 1) {
            navigation('Stock', 0);
          }
        }}>
        <BottomNavStyle.IconWrapperView>
          {index === 0 ? (
            <BottomNavStyle.Icon
              source={require('../../assets/bottomTabIcon/stock_select.png')}
            />
          ) : (
            <BottomNavStyle.Icon
              source={require('../../assets/bottomTabIcon/stock_un_active.png')}
            />
          )}
        </BottomNavStyle.IconWrapperView>
      </TouchableOpacity>
    </BottomNavStyle.LinkWrapper>
    <BottomNavStyle.LinkWrapper
      style={{marginBottom: isIphoneXorAbove ? 15 : 0}}>
      <TouchableOpacity
        style={{minWidth: 40, alignSelf: 'center'}}
        onPress={() => {
          if (opacityActually === 1) {
            navigation('Favourite', 1);
          }
        }}>
        <BottomNavStyle.IconWrapperView>
          {index === 1 ? (
            <BottomNavStyle.Icon
              source={require('../../assets/bottomTabIcon/favourite_select.png')}
            />
          ) : (
            <BottomNavStyle.Icon
              source={require('../../assets/bottomTabIcon/favourite_un_active.png')}
            />
          )}
        </BottomNavStyle.IconWrapperView>
      </TouchableOpacity>
    </BottomNavStyle.LinkWrapper>
    <BottomNavStyle.LinkWrapper
      style={{marginBottom: isIphoneXorAbove ? 15 : 0}}>
      <TouchableOpacity
        style={{minWidth: 40, alignSelf: 'center'}}
        onPress={() => {
          if (opacityActually === 1) {
            navigation('NewsAndFeed', 2);
          }
        }}>
        <BottomNavStyle.IconWrapperView>
          {index === 2 ? (
            <BottomNavStyle.Icon
              source={require('../../assets/bottomTabIcon/news_and_feed_select.png')}
            />
          ) : (
            <BottomNavStyle.Icon
              source={require('../../assets/bottomTabIcon/news_and_feed.png')}
            />
          )}
        </BottomNavStyle.IconWrapperView>
      </TouchableOpacity>
    </BottomNavStyle.LinkWrapper>
    <BottomNavStyle.LinkWrapper
      style={{marginBottom: isIphoneXorAbove ? 15 : 0}}>
      <TouchableOpacity
        style={{minWidth: 40, alignSelf: 'center'}}
        onPress={() => {
          if (opacityActually === 1) {
            navigation('Notification', 3);
          }
        }}>
        <BottomNavStyle.IconWrapperView>
          {index === 3 ? (
            <BottomNavStyle.Icon
              source={require('../../assets/bottomTabIcon/notification_select.png')}
            />
          ) : (
            <BottomNavStyle.Icon
              source={require('../../assets/bottomTabIcon/notification_un_active.png')}
            />
          )}
        </BottomNavStyle.IconWrapperView>
      </TouchableOpacity>
    </BottomNavStyle.LinkWrapper>
  </BottomNavStyle.WrapperView>
);

export default BottomNav;
