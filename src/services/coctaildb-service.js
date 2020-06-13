export default class CocktailDBService {
    _apiBase = 'https://www.thecocktaildb.com/api/json/v1/1/';
    // _apiKey = 'c';


    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await response.json();
    }

    getCocktailList = async () => {
        const response = await this.getResource(`list.php?c=list`);
        return response;
    }

}