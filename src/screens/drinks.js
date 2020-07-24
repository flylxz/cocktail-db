import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Platform, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { MyContext } from '../components/base';
import { RenderRow } from '../components/render-row';
import { RenderHeader } from '../components/render-header';
import { RenderFooter } from '../components/render-footer';
import { ShowToast } from '../components/show-toast';

import { setDrinksList, setDrinksListQueue, setListIndex, setIsLoading } from '../redux/actions/drinks';


export const Drinks = () => {
    const dispatch = useDispatch();
    const { drinksList, drinksListQueue, listIndex, isLoading } = useSelector(({ drinks }) => drinks);
    // console.log(drinksList, drinksListQueue, listIndex, isLoading);

    const {
        //     // data,
        getData,
        //     // queue,
        //     // listIndex, setListIndex,
        //     // isLoading, setIsLoading,
    } = useContext(MyContext);

    const handleLoadMore = () => {
        dispatch(setIsLoading(false));
        const nextListIndex = listIndex + 1;
        if (nextListIndex > drinksListQueue.length) {
            return ShowToast();
        }
        dispatch(setIsLoading(true));
        dispatch(setListIndex(nextListIndex));
        getData(drinksListQueue[nextListIndex]);
    }

    if (drinksList.length === 0 && drinksListQueue.length === 0) {
        return (
            <View style={styles.container}>
                <View style={styles.loader}>
                    <Text style={styles.ordinaryText}>Choose drinks category</Text>
                </View>
            </View>
        )
    }

    if (drinksList.length === 0) {
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
                data={drinksList}
                renderItem={({ item }) => RenderRow(item)}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={() => RenderHeader(drinksListQueue[listIndex])}
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
