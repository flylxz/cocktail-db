export class CocktailDBService {
    _apiBase = `https://www.thecocktaildb.com/api/json/v1/1/`;

    getResource = async (url) => {

        return fetch(`${this._apiBase}${url}`)
            .then(response => response.json())
            .then(responseJson => {
                return responseJson
            })
            .catch((error) => {
                console.warn('Error from service: ', error.message)
            })
    };

    getFiltersList = async () => {
        const res = this.getResource('list.php?c=list')
        return res
    };

    getDrinksList = async (filter) => {
        const res = this.getResource(`filter.php?c=${filter}`)
        return res
    };
}