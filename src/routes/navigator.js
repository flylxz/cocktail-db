import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Drinks } from '../screens/drinks';
import { Filters } from '../screens/filters';
import { FiltersBtn } from '../components/filters-button';

export const MyContext = React.createContext()

const Stack = createStackNavigator();

export const Navigator = () => {

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


    return (
        <NavigationContainer>
            <MyContext.Provider
                value={{ list, useNavigation }}
            >
                <Stack.Navigator>
                    <Stack.Screen
                        name="Drinks"
                        component={Drinks}
                        options={{
                            headerStyle: {
                                height: 70,
                            },
                            headerRight: () => (
                                <FiltersBtn onPress={(navigation) => navigation.navigate('Filters')} />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name="Filters"
                        component={Filters}
                        options={{
                            headerStyle: {
                                height: 70,
                            }
                        }} />
                    {/* {props => <Filters {...props} list={list} />}

                    </Stack.Screen> */}
                </Stack.Navigator>
            </MyContext.Provider>
        </NavigationContainer >
    );
};
