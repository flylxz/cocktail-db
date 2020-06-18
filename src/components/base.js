import React, { useState, useEffect } from 'react';
import { Navigator } from '../routes/navigator';
import { CocktailDBService } from '../services/coctaildb-service';
import { Utils } from '../utils/utils';
// import { Error } from '../components/error';

export const MyContext = React.createContext()

export const Base = () => {

    const [filtersList, setFiltersList] = useState([])
    const [data, setData] = useState([]);
    const [queue, setQueue] = useState([])
    const [listIndex, setListIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(false)

    const { getFiltersList, getDrinksList } = new CocktailDBService()
    const { extractFiltersName, addIsCheckedField } = new Utils()

    useEffect(() => {
        initialGetData();
    }, [])

    useEffect(() => {
        setIsLoading(true);
        getData(queue[listIndex]);
    }, [queue])


    const getData = async (filter) => {
        getDrinksList(filter)
            .then(res => {
                const newData = [...data, ...res.drinks]
                setData(newData)
            })
            .then(() => setIsLoading(false))
        // .catch(setError(true))
    }

    const initialGetData = async () => {
        getFiltersList()
            .then(resJson => addIsCheckedField(resJson))
            .then(res => setFiltersList(res))
            .then(res => setQueue(extractFiltersName(res)))
        // .catch(setError(true))
    }

    return (
        <MyContext.Provider
            value={{
                getData,
                filtersList, setFiltersList,
                data, setData,
                queue, setQueue,
                listIndex, setListIndex,
                isLoading, setIsLoading,
                extractFiltersName,
                // error, setError
            }}>
            <Navigator />
        </MyContext.Provider>
    )
}
