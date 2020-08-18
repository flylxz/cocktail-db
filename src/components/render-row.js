import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export const RenderRow = (item) => {
  return (
    <View style={styles.itemRow}>
      <Image source={{uri: item.strDrinkThumb}} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.strDrink}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  itemText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    margin: 20,
    color: '#7E7E7E',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
});
