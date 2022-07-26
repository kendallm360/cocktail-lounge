const fetchAllCocktails = () => {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
  ).then((response) => response.json());
};

const fetchSpecialtyCocktails = () => {
  let martini = "search.php?s=martini"
  let amaretto = "search.php?s=amaretto"
  let bourbon = "filter.php?i=Bourbon"
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/${bourbon}`
  ).then((response) => response.json());
};

// const getSpecialEndpoint = () => {
//   const martini = "search.php?s=martini"
//   const amaretto = "search.php?s=amaretto"
//   const bourbon = "filter.php?i=Bourbon"
// }


export { fetchAllCocktails, fetchSpecialtyCocktails };
