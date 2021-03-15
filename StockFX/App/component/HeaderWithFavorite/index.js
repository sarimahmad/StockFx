/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { FONT, isIphoneXorAbove, SCREEN } from '../../helper/Constant';
import { BLUE, WHITE } from '../../helper/Color';

function HeaderWithFavorite({ leftPress, headerText, headerIcon, rightPress, detail }) {
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
        backgroundColor: BLUE.app,
      }}>
      <TouchableHighlight
        onPress={searchToggle ? () => setSearchToggle(false) : leftPress}
        style={{
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/back.png')}
          style={{ height: 20, width: 20, resizeMode: 'contain' }}
        />
      </TouchableHighlight>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center',
        }}>
          <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={headerIcon} />
          <Text style={{ fontSize: 18, fontFamily: FONT.bold, color: WHITE.app, marginLeft: 10 }}>{headerText}</Text>
        </View>
        <Text style={{fontFamily: FONT.regular, fontSize: 10, color: WHITE.app}}>
          {detail}
        </Text>
      </View>
      <TouchableHighlight
        onPress={rightPress}
        style={{
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/favorite.png')}
          style={{ height: 18, width: 18, resizeMode: 'contain' }}
        />
      </TouchableHighlight>
    </View>
  );
}

export default HeaderWithFavorite;
