/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {FONT} from '../../helper/Constant';
import {BLUE, GREEN, WHITE} from '../../helper/Color';

function NotificationItem({item, itemPress}) {
  return (
    <TouchableHighlight
      underlayColor={BLUE.background}
      onPress={itemPress}
      style={{
        width: '100%',
        marginBottom: 10,
      }}>
      <View style={{flex: 1, flexDirection: 'row', minHeight: 40}}>
        <Image
          style={{height: 20, width: 20, resizeMode: 'contain'}}
          source={require('../../assets/green_up_arrow.png')}
        />
        <View style={{flex: 1, paddingLeft: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: BLUE.light,
                fontSize: 10,
                fontFamily: FONT.regular,
              }}>
              {item.name}
            </Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text
                style={{
                  color: BLUE.light,
                  fontSize: 10,
                  fontFamily: FONT.regular,
                }}>
                {item.dateTime}
              </Text>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 3, alignItems: 'center'}}>
            <Text
              style={{fontFamily: FONT.bold, fontSize: 14, color: WHITE.app}}>
              {item.detail}
            </Text>
            <View
              style={{
                position: 'absolute',
                right: 0,
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: GREEN.btn,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default NotificationItem;
