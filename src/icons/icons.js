import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const filterIcon = <FontAwesome5
    name={'filter'}
    size={24}
    color='#000'
    style={{
        margin: 20,
        transform: [{ rotateY: '180deg' }]
    }}
/>

export const checkIcon = <FontAwesome5
    name={'check'}
    size={18}
    color='#000'
    style={{
        alignItems: 'center',
    }}
/>