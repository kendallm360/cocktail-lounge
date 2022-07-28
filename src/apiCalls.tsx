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
    `https://www.thecocktaildb.com/api/json/v1/1/${martini}`
  ).then((response) => response.json());
};


export { fetchAllCocktails, fetchSpecialtyCocktails };
