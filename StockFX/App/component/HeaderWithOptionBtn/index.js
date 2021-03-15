/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { FONT, isIphoneXorAbove, SCREEN } from '../../helper/Constant';
import { BLUE, WHITE } from '../../helper/Color';

function HeaderWithOptionBtn({ leftPress, headerText, leftIcon, rightPress, rightIcon, backColor }) {
  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: isIphoneXorAbove ? 100 : 80,
        alignItems: 'center',
        width: SCREEN.width,
        paddingHorizontal: 30,
        alignSelf: 'center',
        backgroundColor: backColor,
      }}>
      {leftIcon && <TouchableHighlight
        onPress={searchToggle ? () => setSearchToggle(false) : leftPress}
        style={{
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/back.png')}
          style={{height: 20, width: 20, resizeMode: 'contain'}}
        />
      </TouchableHighlight>}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center',
        }}>
          <Text style={{ fontSize: 18, fontFamily: FONT.bold, color: WHITE.app, marginLeft: 10 }}>{headerText}</Text>
        </View>
      </View>
      {rightIcon && <TouchableHighlight
        onPress={rightPress}
        style={{
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={rightIcon}
          style={{height: 18, width: 18, resizeMode: 'contain'}}
        />
      </TouchableHighlight>}
    </View>
  );
}

export default HeaderWithOptionBtn;
