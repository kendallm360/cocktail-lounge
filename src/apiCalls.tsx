const fetchRandomDrinks = () => {
  return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
    (response) => response.json()
  );
};

export { fetchRandomDrinks };
