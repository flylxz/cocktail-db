import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export const RenderFooter = (isLoading) => {
    return (
        isLoading
            ? (
                <View style={styles.loader}>
                    <ActivityIndicator size='large' />
                </View>
            )
            : null
    )
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 10,
        alignItems: 'center',
    },
})