import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

export const Filters = ({ text = 'Filters' }) => {

    const [filtersList, setFiltersList] = useState([
        {
            "strCategory": "Ordinary Drink"
        },
        {
            "strCategory": "Cocktail"
        },
        {
            "strCategory": "Milk \/ Float \/ Shake"
        },
        {
            "strCategory": "Other\/Unknown"
        },
        {
            "strCategory": "Cocoa"
        },
        {
            "strCategory": "Shot"
        },
        {
            "strCategory": "Coffee \/ Tea"
        },
        {
            "strCategory": "Homemade Liqueur"
        },
        {
            "strCategory": "Punch \/ Party Drink"
        },
        {
            "strCategory": "Beer"
        },
        {
            "strCategory": "Soft Drink \/ Soda"
        }
    ]
    )

    // useEffect(() => {
    //     console.log('mount', filtersList);
    //     updateFilters();
    //     return () => {
    //         console.log('stop', filtersList)
    //     }
    // }, [])

    // const updateFilters = async () => {
    //     const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    //     const data = await response.json();
    //     setFiltersList(data.drinks);
    //     console.log(data.drinks)
    // }

    return (
        <FlatList
            data={filtersList}
            renderItem={({ item }) => {
                // { console.log('flatlist', item) }
                <View style={styles.listItem}>
                    <Text>{item.strCategory}</Text>
                </View>
            }}
            keyExtractor={item => item.strCategory}
        />
    );
};

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f222',
        borderRadius: 10,
        marginVertical: 5,
        padding: 10,
    }
});