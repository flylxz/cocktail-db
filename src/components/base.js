import React, { useState, useEffect } from 'react';
import { Navigator } from '../routes/navigator';
// import { CocktailDBService } from '../services/coctaildb-service';
import { Utils } from '../utils/utils';

export const MyContext = React.createContext()

export const Base = () => {

    const [filtersList, setFiltersList] = useState([])
    const [data, setData] = useState([]);
    const [queue, setQueue] = useState([])
    const [listIndex, setListIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const { extractFiltersName } = new Utils()

    useEffect(() => {
        initialGetData();
    }, [])

    useEffect(() => {
        extractFiltersName(filtersList)
    }, [queue])

    useEffect(() => {
        setIsLoading(true);
        getData(queue[listIndex]);
    }, [queue])


    const getData = async (filter) => {
        const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`
        fetch(apiUrl)
            .then(res => res.json())
            .then(resJson => setData([...data, ...resJson.drinks]))
            .then(setIsLoading(false));
    }


    const initialGetData = async () => {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const data = await response.json();
        const transformData = data.drinks.map(item => {
            return {
                name: item.strCategory,
                isChecked: true
            }
        });
        setFiltersList(transformData);
        setQueue(extractFiltersName(transformData))


    }


    return (
        <MyContext.Provider
            value={{
                getData,
                filtersList,
                setFiltersList,
                data,
                setData,
                queue,
                setQueue,
                listIndex,
                setListIndex,
                isLoading,
                setIsLoading,
                extractFiltersName
            }}>
            <Navigator />
        </MyContext.Provider>
    )
}
