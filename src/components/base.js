import React, { useState, useEffect } from 'react';

import { Navigator } from '../routes/navigator';

import { CocktailDBService } from '../services/coctaildb-service';
import { Utils } from '../utils/utils';

export const MyContext = React.createContext()

export const Base = () => {

    const [filtersList, setFiltersList] = useState([])
    const [data, setData] = useState([]);
    const [queue, setQueue] = useState([])
    const [listIndex, setListIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const { getFiltersList, getDrinksList } = new CocktailDBService()
    const { extractFiltersName, addIsCheckedField } = new Utils()

    useEffect(() => {
        initialGetData();
    }, [])

    useEffect(() => {
        console.log('from useEffect: ', queue)
        setIsLoading(true);
        getData(queue[listIndex]);
    }, [queue])

    const initialGetData = async () => {
        getFiltersList()
            .then(resJson => addIsCheckedField(resJson))
            .then(res => {
                setFiltersList(res)
                setQueue(extractFiltersName(res))
            });
    }

    const getData = async (filter) => {
        console.log('getData: ', filter)
        getDrinksList(filter)
            .then(res => {
                const newData = [...data, ...res]
                setData(newData)
                setIsLoading(false)
            })
    }

    return (
        <MyContext.Provider
            value={{
                getData,
                getDrinksList,
                filtersList, setFiltersList,
                data, setData,
                queue, setQueue,
                listIndex, setListIndex,
                isLoading, setIsLoading,
                extractFiltersName
            }}>
            <Navigator />
        </MyContext.Provider>
    )
}
