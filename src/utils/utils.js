export class Utils {

    extractFiltersName = (filtersList) => {
        const checkedFilters = filtersList.filter((item) => item.isChecked);
        const queue = [];
        checkedFilters.forEach((item) => queue.push(item.name));
        return queue;
    };

    addIsCheckedField = (filtersList) => {
        return filtersList.drinks.map(item => {
            return {
                name: item.strCategory,
                isChecked: true
            }
        })
    };

};