import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

export const RenderHeader = (title) => {
    return (
        <View>
            <Text style={styles.itemHeader}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemHeader: {
        textAlignVertical: 'center',
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        lineHeight: 16,
        color: '#7E7E7E',
        backgroundColor: '#E5E5E5',
        height: 40
    },
})