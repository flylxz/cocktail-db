import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export const RenderFooter = (isLoading) => {
    if (isLoading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size='large' animating />
            </View>
        )

    } else { return null }
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 10,
        alignItems: 'center',
    },
})