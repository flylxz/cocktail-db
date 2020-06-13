import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export const FiltersButton = ({ navigation }) => {
    const icon = <FontAwesome5
        name={'filter'}
        size={24}
        color='#000'
        // onPress={() => console.log('filter')}
        onPress={() => navigation.navigate('Filters')}
        style={{
            margin: 20,
            transform: [{ rotateY: '180deg' }]
        }}
    />

    return icon;
}