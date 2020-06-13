import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator, ToastAndroid } from 'react-native';

export const Drinks = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [list, setList] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const queue = [/*"Ordinary Drink", "Cocktail", "Milk \/ Float \/ Shake", "Other\/Unknown", "Cocoa", "Shot", "Coffee \/ Tea", "Homemade Liqueur", "Punch \/ Party Drink",*/ "Beer", "Soft Drink \/ Soda"]


    useEffect(() => {
        console.log('mount');
        setIsLoading(true);
        getData(queue[list]);
        return () => {
            console.log('stop')
        }
    }, [])

    const getData = async (filter) => {
        const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`
        fetch(apiUrl)
            .then(res => res.json())
            .then(resJson => setData([...data, ...resJson.drinks]))
            .then(setIsLoading(false));
    }


    const renderRow = ({ item }) => {
        return (
            <View style={styles.itemRow}>
                <Image source={{ uri: item.strDrinkThumb }} style={styles.itemImage} />
                <Text style={styles.itemText}>{item.strDrink}</Text>
            </View>
        )
    }

    const renderHeader = () => {
        return (
            <View>
                <Text style={styles.itemHeader}>{queue[list]}</Text>
            </View>
        )
    }

    const renderFooter = () => {
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

    const showToast = () => {
        ToastAndroid.show("End of list!", ToastAndroid.LONG);
    };


    const handleLoadMore = () => {
        const listIndex = list + 1
        if (listIndex <= queue.length) {
            setList(listIndex)
            setIsLoading(true)
            getData(queue[listIndex])
        } else { showToast() }
    }

    return (
        <View>

            <Button onPress={() => navigation.navigate('Filters')} title='filter' />

            <FlatList
                style={styles.container}
                data={data}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={1}
                ListFooterComponent={renderFooter}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
        borderColor: '#E5E5E5',
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    itemHeader: {
        fontSize: 14,
        lineHeight: 16,
        color: '#7E7E7E',
    },
    itemText: {
        fontSize: 16,
        lineHeight: 19,
        margin: 20,
        color: '#7E7E7E',
    },
    itemImage: {
        width: 100,
        height: 100,
        // resizeMode: 'cover',
    },
    loader: {
        marginTop: 10,
        alignItems: 'center',
    },
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