import React, { useState, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { Navigator } from '../routes/navigator';

import { CocktailDBService } from '../services/coctaildb-service';
import { Utils } from '../utils/utils';

// import { store } from '../redux/store';
import { setFiltersList } from '../redux/actions/filters';
import { setDrinksList, setDrinksListQueue, setListIndex, setIsLoading } from '../redux/actions/drinks';

export const MyContext = React.createContext()

export const Base = () => {
    const dispatch = useDispatch();
    const { drinksList, drinksListQueue, listIndex, isLoading } = useSelector(({ drinks }) => drinks);

    // const [filtersList, setFiltersList] = useState([])
    // const [data, setData] = useState([]);
    // const [queue, setQueue] = useState([])
    // const [listIndex, setListIndex] = useState(0);
    // const [isLoading, setIsLoading] = useState(false);

    const { getFiltersList, getDrinksList } = new CocktailDBService()
    const { extractFiltersName, addIsCheckedField } = new Utils()

    useEffect(() => {
        initialGetData();
    }, [])

    useEffect(() => {
        console.log('queue from useEffect: ', drinksListQueue)
        dispatch(setIsLoading(true));
        getData(drinksListQueue[listIndex]);
    }, [drinksListQueue])

    const initialGetData = async () => {
        getFiltersList()
            .then(resJson => addIsCheckedField(resJson))
            .then(res => {
                dispatch(setFiltersList(res))
                dispatch(setDrinksListQueue(extractFiltersName(res)))
            });
    }

    const getData = async (filter) => {
        console.log('filter from getData: ', filter)
        getDrinksList(filter)
            .then(res => {
                const newData = [...drinksList, ...res]
                dispatch(setDrinksList(newData))
                dispatch(setIsLoading(false))
            })
    }

    return (
        <MyContext.Provider
            value={{
                getData,
                // getDrinksList,
                // filtersList, setFiltersList,
                // data, setData,
                // queue, setQueue,
                // listIndex, setListIndex,
                // isLoading, setIsLoading,
                extractFiltersName
            }}>
            {/* <Provider store={store}> */}
            <Navigator />
            {/* </Provider> */}
        </MyContext.Provider>
    )
}
