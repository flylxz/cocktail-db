import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { filterIcon } from "../icons/icons";

export const FiltersBtn = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Filters')}>
            {filterIcon}
        </TouchableOpacity>
    );
}