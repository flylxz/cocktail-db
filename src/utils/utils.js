export const extractFiltersName = (filtersList) => {
  const checkedFilters = filtersList.filter((item) => item.isChecked);
  const queue = [];
  checkedFilters.forEach((item) => queue.push(item.name));
  return queue;
};

// export const addIsCheckedField = (filtersList) => {
//   return filtersList.drinks.map((item) => {
//     return {
//       name: item.strCategory,
//       isChecked: true,
//     };
//   });
// };

// export const transformDataForSectionList = (drinksListHeader, drinksList) => {
//   return [
//     {
//       title: drinksListHeader,
//       data: drinksList,
//     },
//   ];
// };
