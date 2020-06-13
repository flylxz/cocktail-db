import React from 'react';
import { Button } from 'react-native';

export const FiltersButton = (props) => {
    return (
        <Button
            // onPress={() => navigation.navigate('Filters')}
            onPress={() => console.log(this.props)}
            title="Filter"
            color="#f00"
        />
    )
}