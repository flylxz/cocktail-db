import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { RenderRow } from '../components/render-row';
import { RenderHeader } from '../components/render-header';
import { RenderFooter } from '../components/render-footer';
import { ShowToast } from '../components/show-toast';

import { MyContext } from '../components/base';


export const Drinks = () => {
    const {
        data,
        getData,
        queue,
        listIndex,
        setListIndex,
        isLoading,
        setIsLoading,
    } = useContext(MyContext);

    // const [listIndex, setListIndex] = useState(0);
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     console.log('mount');
    //     setIsLoading(true);
    //     getData(queue[listIndex]);
    //     return () => {
    //         console.log('stop')
    //     }
    // }, [queue])


    // const getData = async (filter) => {
    //     const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`
    //     fetch(apiUrl)
    //         .then(res => res.json())
    //         .then(resJson => setData([...data, ...resJson.drinks]))
    //         .then(setIsLoading(false));
    // }

    const handleLoadMore = () => {
        const nextListIndex = listIndex + 1
        if (nextListIndex <= queue.length) {
            setListIndex(nextListIndex)
            setIsLoading(true)
            getData(queue[nextListIndex])
        } else { ShowToast() }
    }

    if (data.length === 0) {
        return (
            <View style={styles.container}>
                <View style={styles.loader}>
                    <ActivityIndicator size='large' />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={RenderRow}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={() => RenderHeader(queue[listIndex])}
                stickyHeaderIndices={[0]}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => RenderFooter(isLoading)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
});