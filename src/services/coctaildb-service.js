export class CocktailDBService {
    _apiBase = `https://www.thecocktaildb.com/api/json/v1/1/`;

    getResource = async (url) => {

        return fetch(`${this._apiBase}${url}`)
            .then(response => response.json())
            .then(responseJson => {
                return responseJson
            })
    };

    getFiltersList = async () => {
        return this.getResource('list.php?c=list')
            .catch((error) => {
                console.warn('Error from getFiltersList: ', error)
            })
    };

    getDrinksList = async (filter) => {
        return this.getResource(`filter.php?c=${filter}`)
            .then(res => res.drinks)
            .catch((error) => {
                console.warn('Error from getDrinksList: ', error)
            });
    }
}