import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Drinks} from '../screens/drinks';
import {Filters} from '../screens/filters';
import {FiltersBtn} from '../components/filters-button';

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
              <FiltersBtn
                onPress={(navigation) => navigation.navigate('Filters')}
              />
            ),
          }}
        />
        <Stack.Screen name="Filters" component={Filters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
