import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { MyContext } from '../components/base';
import { ApplyBtn } from '../components/apply-button';
import { checkIcon } from '../icons/icons';

import { setFiltersList } from '../redux/actions/filters';
import { setDrinksList, setDrinksListQueue, setListIndex } from '../redux/actions/drinks';

export const Filters = () => {
    const dispatch = useDispatch();
    const { filtersList } = useSelector(({ filters }) => filters);

    const {
        // setQueue,
        // setData,
        // filtersList, setFiltersList,
        // setListIndex,
        extractFiltersName
    } = useContext(MyContext);


    const navigation = useNavigation();

    let renderFiltersList = [...filtersList];

    const toggleCheck = (item, index) => {
        const tempFiltersList = [...renderFiltersList];
        if (item.name === tempFiltersList[index].name) {
            item.isChecked = !item.isChecked;
        }
        dispatch(setFiltersList(tempFiltersList));
    };

    const applyFilters = () => {
        dispatch(setDrinksList([]));
        dispatch(setListIndex(0));
        dispatch(setDrinksListQueue(extractFiltersName(filtersList)));
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={renderFiltersList}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => toggleCheck(item, index)}>
                        <View style={styles.listItem}>
                            <Text style={styles.listItemText}>{item.name}</Text>
                            <View>{item.isChecked && checkIcon}</View>
                        </View>
                    </TouchableOpacity>
                )
                }
                keyExtractor={(item, index) => index.toString()}
            />
            <ApplyBtn applyFilters={applyFilters} />
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
        marginBottom: 25,
        width: '90%',
        backgroundColor: '#E5E5E5',
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
        padding: 10,
    },
    listItemText: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: '#7E7E7E',
    }
});
