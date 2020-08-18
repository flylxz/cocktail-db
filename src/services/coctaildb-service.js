export class CocktailDBService {
  _apiBase = `https://www.thecocktaildb.com/api/json/v1/1/`;

  getResource = async (url) => {
    return fetch(`${this._apiBase}${url}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      });
  };

  getFiltersList = async () => {
    return this.getResource('list.php?c=list')
      .then((res) => this._addIsCheckedField(res))
      .catch((error) => {
        console.warn('Error from getFiltersList: ', error);
      });
  };

  getDrinksList = async (filter) => {
    return this.getResource(`filter.php?c=${filter}`)
      .then((res) => this._transformDataForSectionList(filter, res.drinks))
      .catch((error) => {
        console.warn('Error from getDrinksList: ', error);
      });
  };

  _addIsCheckedField = (filtersList) => {
    return filtersList.drinks.map((item) => {
      return {
        name: item.strCategory,
        isChecked: true,
      };
    });
  };

  _transformDataForSectionList = (drinksListHeader, drinksList) => {
    return [
      {
        title: drinksListHeader,
        data: drinksList,
      },
    ];
  };
}
