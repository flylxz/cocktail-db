import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const Drinks = ({ navigation }) => {
    return (
        <View style={styles.dummy} >
            <TouchableOpacity
                onPress={() => navigation.navigate('Filters')} >
                <Text style={styles.dummyText}>Drinks</Text>
            </TouchableOpacity>
        </View>
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