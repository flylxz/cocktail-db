import { SET_FILTERS_LIST } from '../types';

const initialState = {
    filtersList: []
};

export const filters = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERS_LIST:
            return {
                ...state,
                filtersList: action.payload
            }
        default:
            return state;
    };
};