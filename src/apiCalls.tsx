const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";

const fetchAllCocktails = () => {
  return fetch(`${baseURL}filter.php?g=Cocktail_glass`).then((response) =>
    response.json()
  );
};

const fetchSpecialtyCocktails = (specialtyDrink: string | undefined) => {
  return fetch(`${baseURL}${specialtyDrink}`).then((response) =>
    response.json()
  );
};

// const;
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

export { fetchAllCocktails, fetchSpecialtyCocktails };
