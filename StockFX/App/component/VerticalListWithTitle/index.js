/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, FlatList, View} from 'react-native';
import {FONT, SCREEN} from '../../helper/Constant';
import {WHITE} from '../../helper/Color';
import StockListItem from '../StockListItem';

function VerticalListWithTitle({title, data, itemPress}) {
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
        renderItem={(item) => (
          <StockListItem
            item={item.item}
            itemPress={() => itemPress(item.item)}
          />
        )}
      />
    </View>
  );
}

export default VerticalListWithTitle;
