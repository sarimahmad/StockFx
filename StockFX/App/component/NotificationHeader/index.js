/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {FONT, isIphoneXorAbove, SCREEN} from '../../helper/Constant';
import {BLUE, WHITE} from '../../helper/Color';

function NotificationHeader({
  leftPress,
  headerText,
  searchChange,
  searchValue,
  settingPress,
}) {
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
          source={
            searchToggle
              ? require('../../assets/back.png')
              : require('../../assets/menu_btn.png')
          }
          style={{height: 20, width: 20, resizeMode: 'contain'}}
        />
      </TouchableHighlight>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {searchToggle ? (
          <View
            style={{
              height: 40,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <TextInput
              style={{
                height: 40,
                width: SCREEN.width - 120,
                borderWidth: 1,
                borderColor: BLUE.light,
                borderRadius: 20,
                paddingHorizontal: 10,
                fontFamily: FONT.regular,
                fontSize: 15,
                color: WHITE.dark,
              }}
              placeholder={'Search here'}
              placeholderTextColor={WHITE.borderLight}
              value={searchValue}
              onChangeText={(text) => searchChange(text)}
            />
          </View>
        ) : (
          <Text
            style={{fontFamily: FONT.bold, fontSize: 18, color: WHITE.dark}}>
            {headerText}
          </Text>
        )}
      </View>
      {!searchToggle && (
        <View
          style={{alignItems: 'center', height: '100%', flexDirection: 'row'}}>
          <TouchableHighlight
            onPress={settingPress}
            underlayColor={BLUE.app}
            style={{
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/setting_header.png')}
              style={{height: 18, width: 18, resizeMode: 'contain'}}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => setSearchToggle(true)}
            underlayColor={BLUE.app}
            style={{
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Image
              source={require('../../assets/search_btn.png')}
              style={{height: 18, width: 18, resizeMode: 'contain'}}
            />
          </TouchableHighlight>
        </View>
      )}
    </View>
  );
}

export default NotificationHeader;
