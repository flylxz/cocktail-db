import React from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export const FiltersBtn = () => {

    const navigation = useNavigation();

    const icon = <FontAwesome5
        name={'filter'}
        size={24}
        color='#000'
        onPress={() => navigation.navigate('Filters')}
        style={{
            margin: 20,
            transform: [{ rotateY: '180deg' }]
        }}
    />

    return (
        <TouchableOpacity>
            {icon}
        </TouchableOpacity>
    );
}