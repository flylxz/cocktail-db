import {
    SET_DRINKS_LIST,
    SET_DRINKS_LIST_QUEUE,
    SET_LIST_INDEX,
    SET_IS_LOADING
} from '../types';

const initialState = {
    drinksList: [],
    drinksListQueue: [],
    listIndex: 0,
    isLoading: true
};

export const drinks = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRINKS_LIST:
            return {
                ...state,
                drinksList: action.payload
            };
        case SET_DRINKS_LIST_QUEUE:
            return {
                ...state,
                drinksListQueue: action.payload
            };
        case SET_LIST_INDEX:
            return {
                ...state,
                listIndex: action.payload
            };
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    };
};