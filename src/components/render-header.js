import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const RenderHeader = (title) => {
  return (
    <View>
      <Text style={styles.itemHeaderText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemHeaderText: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 16,
    color: '#7E7E7E',
    backgroundColor: '#d9d9d9',
    height: 40,
  },
});
