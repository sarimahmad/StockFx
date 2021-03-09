/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {FONT} from '../../helper/Constant';
import {RED, WHITE} from '../../helper/Color';

function StockListItem({item, itemPress}) {
  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <TouchableHighlight
      onPress={itemPress}
      style={{flexDirection: 'row', width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingVertical: 22,
          alignItems: 'center',
        }}>
        <Image
          style={{height: 40, width: 40, borderRadius: 20}}
          source={item.image}
        />
        <View style={{flex: 1, paddingLeft: 10}}>
          <View
            style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{fontFamily: FONT.bold, fontSize: 14, color: WHITE.app}}>
              {item.name}
            </Text>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontFamily: FONT.bold, fontSize: 14, color: WHITE.app}}>
                {item.amount}
              </Text>
            </View>
          </View>
          <View
            style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{fontFamily: FONT.bold, fontSize: 14, color: WHITE.light}}>
              {item.completeName}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <Text
                style={{
                  fontFamily: FONT.regular,
                  fontSize: 12,
                  color: item.color,
                }}>
                {item.changeValue}
              </Text>
              <View
                style={{
                  borderRadius: 15,
                  paddingHorizontal: 5,
                  marginLeft: 5,
                  backgroundColor: item.color,
                }}>
                <Text
                  style={{
                    fontFamily: FONT.bold,
                    fontSize: 12,
                    color: item.color === RED.default ? '#EFB1AE' : '#ABFFB8',
                  }}>
                  {item.proPer}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default StockListItem;
