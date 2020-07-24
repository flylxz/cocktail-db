import {
    SET_DRINKS_LIST,
    SET_DRINKS_LIST_QUEUE,
    SET_LIST_INDEX,
    SET_IS_LOADING
} from '../types';

export const setDrinksList = (drinksList) => ({
    type: SET_DRINKS_LIST,
    payload: drinksList
});

export const setDrinksListQueue = (drinksListQueue) => ({
    type: SET_DRINKS_LIST_QUEUE,
    payload: drinksListQueue
});

export const setListIndex = (index) => ({
    type: SET_LIST_INDEX,
    payload: index
});

export const setIsLoading = (payload) => ({
    type: SET_IS_LOADING,
    payload
});