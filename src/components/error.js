import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const Error = ({ text = 'Under Construction', setError }) => {
    return (
        <TouchableOpacity
            onPress={() => setError(false)} >
            <View style={styles.dummy}>
                <Text style={styles.dummyText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    dummy: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '-25deg' }],
    },
    dummyText: {
        padding: 10,
        fontSize: 36,
        color: 'red',
        borderWidth: 5,
        borderColor: 'red',
        borderStyle: 'dashed',
        borderRadius: 5,
    },
});