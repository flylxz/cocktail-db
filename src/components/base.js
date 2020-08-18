import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Navigator} from '../routes/navigator';

import {extractFiltersName} from '../utils/utils';
import {setFiltersList} from '../redux/actions/filters';
import {
  setDrinksList,
  setDrinksListQueue,
  setIsLoading,
} from '../redux/actions/drinks';

import {CocktailDBService} from '../services/coctaildb-service';

export const MyContext = React.createContext();

export const Base = () => {
  const dispatch = useDispatch();
  const {drinksList, drinksListQueue, listIndex} = useSelector(
    ({drinks}) => drinks,
  );

  const {getFiltersList, getDrinksList} = new CocktailDBService();

  useEffect(() => {
    initialGetData();
  }, []);

  useEffect(() => {
    if (drinksListQueue.length) {
      dispatch(setIsLoading(true));
      getData(drinksListQueue[listIndex]);
    }
  }, [drinksListQueue]);

  const initialGetData = async () => {
    getFiltersList().then((res) => {
      dispatch(setFiltersList(res));
      dispatch(setDrinksListQueue(extractFiltersName(res)));
    });
  };

  const getData = async (filter) => {
    getDrinksList(filter).then((res) => {
      const newData = [...drinksList, ...res];
      dispatch(setDrinksList(newData));
      dispatch(setIsLoading(false));
    });
  };

  return (
    <MyContext.Provider
      value={{
        getData,
      }}>
      <Navigator />
    </MyContext.Provider>
  );
};
