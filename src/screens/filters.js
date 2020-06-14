import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ApplyBtn } from '../components/apply-button';
import { MyContext } from '../routes/navigator';

export const Filters = () => {

    const { list } = useContext(MyContext)

    // useEffect(() => {
    //     console.log('mount');
    //     // updateFilters();
    //     return () => {
    //         console.log('stop')
    //     }
    // }, [list])

    const checkedFilters = list.filter((item) => item.isChecked)

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