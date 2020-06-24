import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator } from 'react-native';

import { MyContext } from '../components/base';
import { RenderRow } from '../components/render-row';
import { RenderHeader } from '../components/render-header';
import { RenderFooter } from '../components/render-footer';
import { ShowToast } from '../components/show-toast';


export const Drinks = () => {
    const {
        data,
        getData,
        queue,
        listIndex,
        setListIndex,
        isLoading, setIsLoading,
    } = useContext(MyContext);

    const handleLoadMore = () => {
        setIsLoading(false);
        const nextListIndex = listIndex + 1;
        if (nextListIndex > queue.length) {
            return ShowToast();
        }
        setIsLoading(true);
        setListIndex(nextListIndex);
        getData(queue[nextListIndex]);
    }

    if (data.length === 0 && queue.length === 0) {
        return (
            <View style={styles.container}>
                <View style={styles.loader}>
                    <Text style={styles.ordinaryText}>Choose drinks category</Text>
                </View>
            </View>
        )
    }

    if (data.length === 0) {
        return (
            <View style={styles.container}>
                <View style={styles.loader}>
                    <ActivityIndicator size='large' animating />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={({ item }) => RenderRow(item)}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={() => RenderHeader(queue[listIndex])}
                stickyHeaderIndices={[0]}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={RenderFooter(isLoading)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#E5E5E5',
    },
    flatList: {
        marginHorizontal: 20,
        width: '90%',
        backgroundColor: '#E5E5E5',
    },
    loader: {
        marginTop: 10,
        alignItems: 'center',
    },
    ordinaryText: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 19,
        color: '#7E7E7E',
    }
});