import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const ApplyBtn = ({applyFilters}) => {
  return (
    <TouchableOpacity style={styles.customBtn} onPress={applyFilters}>
      <View>
        <Text style={styles.btnText}>APPLY</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customBtn: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#272727',
  },
  btnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
