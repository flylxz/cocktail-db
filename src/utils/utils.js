export class Utils {

    extractFiltersName = (filtersList) => {
        const checkedFilters = filtersList.filter((item) => item.isChecked);
        const queue = [];
        checkedFilters.forEach((item) => queue.push(item.name));
        return queue;
    };

};