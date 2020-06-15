import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ApplyBtn } from '../components/apply-button';
import { MyContext } from '../components/base';
import { useNavigation } from '@react-navigation/native';

export const Filters = () => {

    const { setQueue, setData, filtersList, setFiltersList, extractFiltersName } = useContext(MyContext);

    const renderFiltersList = [...filtersList];

    const navigation = useNavigation();

    const toggleCheck = (item) => {
        item.isChecked = !item.isChecked;
        setFiltersList([...renderFiltersList]);
    };

    const applyFilters = () => {
        setQueue(extractFiltersName(filtersList));
        setData([]);
        navigation.goBack();
    }

    const icon = <FontAwesome5
        name={'check'}
        size={18}
        color='#000'
        style={{
            alignItems: 'center',
        }}
    />

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={renderFiltersList}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => toggleCheck(item)}>
                        <View style={styles.listItem}>
                            <Text style={styles.listItemText}>{item.name}</Text>
                            <View>{item.isChecked && icon}</View>
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
        // fontFamily: Roboto,
        // fontStyle: normal,
        // fontWeight: normal,
        fontSize: 16,
        lineHeight: 19,
        color: '#7E7E7E',
    }
});