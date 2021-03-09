/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Text, FlatList, TouchableHighlight, View} from 'react-native';
import {FONT, isIphoneXorAbove, SCREEN} from '../../helper/Constant';
import {BLUE, WHITE} from '../../helper/Color';
import StockListItem from '../StockListItem';

function VerticalListWithTitle({title, data, itemPress, searchValue}) {
  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <View
      style={{
        width: SCREEN.width,
        paddingHorizontal: 30,
        alignSelf: 'center',
        marginBottom: 20,
      }}>
      <Text style={{fontFamily: FONT.bold, color: WHITE.app, fontSize: 14}}>
        {title}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item, index) => <StockListItem item={item.item} itemPress={() =>itemPress(item.item)} />}
      />
    </View>
  );
}

export default VerticalListWithTitle;
