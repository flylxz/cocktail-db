import { combineReducers } from 'redux';

import { filters } from './filters';
import { drinks } from './drinks';


export const rootReducer = combineReducers({ filters, drinks });