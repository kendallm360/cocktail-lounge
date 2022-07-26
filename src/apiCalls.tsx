const fetchAllCocktails = () => {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
  ).then((response) => response.json());
};

// https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

export { fetchAllCocktails };
