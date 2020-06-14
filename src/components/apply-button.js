import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ApplyBtn = () => {
    return (
        <TouchableOpacity
            style={styles.customBtn}
            onPress={() => console.log('apply')}>
            <View>
                <Text style={styles.btnText}>APPLY</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    customBtn: {
        position: 'absolute',
        bottom: 80,
        left: 25,
        right: 25,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#272727'
    },
    btnText: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
    ,
})