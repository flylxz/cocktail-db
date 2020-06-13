import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Drinks } from '../screens/drinks';
import { Filters } from '../screens/filters';
import { FiltersButton } from '../components/filters-button';
import { Button, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Drinks"
                    component={Drinks}
                    options={{
                        headerRight: () => (
                            <FiltersButton props={navigator} />
                        ),
                    }}
                />
                <Stack.Screen name="Filters" component={Filters} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
