import { SET_FILTERS_LIST } from '../types';

export const setFiltersList = (filtersList) => ({
    type: SET_FILTERS_LIST,
    payload: filtersList
});