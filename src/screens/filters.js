import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ApplyBtn } from '../components/apply-button';

export const Filters = ({ text = 'Filters' }) => {

    const [filtersList, setFiltersList] = useState(
    )

    const list = [
        {
            "strCategory": "Ordinary Drink", "isChecked": false
        },
        {
            "strCategory": "Cocktail", "isChecked": false
        },
        {
            "strCategory": "Milk \/ Float \/ Shake", "isChecked": false
        },
        {
            "strCategory": "Other\/Unknown", "isChecked": false
        },
        {
            "strCategory": "Cocoa", "isChecked": false
        },
        {
            "strCategory": "Shot", "isChecked": false
        },
        {
            "strCategory": "Coffee \/ Tea", "isChecked": false
        },
        {
            "strCategory": "Homemade Liqueur", "isChecked": true
        },
        {
            "strCategory": "Punch \/ Party Drink", "isChecked": false
        },
        {
            "strCategory": "Beer", "isChecked": true
        },
        {
            "strCategory": "Soft Drink \/ Soda", "isChecked": true
        }
    ]

    useEffect(() => {
        console.log('mount');
        // updateFilters();
        return () => {
            console.log('stop')
        }
    }, [list])

    // const updateFilters = async () => {
    //     const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    //     const data = await response.json();
    //     setFiltersList(data.drinks);
    // }

    const icon = <FontAwesome5
        name={'check'}
        size={18}
        color='#000'
        style={{
            alignItems: 'center',
        }}
    />




    return (
        <View>
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            item.isChecked = !item.isChecked
                            console.log(item)
                        }}>
                        <View style={styles.listItem}>
                            <Text style={styles.listItemText}>{item.strCategory}</Text>
                            <View>{item.isChecked && icon}</View>
                        </View>
                    </TouchableOpacity>
                )
                }
                keyExtractor={(item, index) => index.toString()}
            />
            <ApplyBtn />
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
        padding: 10,
    },
    listItemText: {
        // fontFamily: Roboto,
        // fontStyle: normal,
        // fontWeight: normal,
        fontSize: 16,
        lineHeight: 19,
        color: '#7E7E7E',
    }
});