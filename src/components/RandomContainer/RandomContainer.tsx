import { FC } from "react";
import RandomDrinkCards from "../RandomDrinkCards/RandomDrinkCards";
import { Drink, RandomDrinks } from "../typeScriptImports";
import "./RandomContainer.css";

const RandomContainer: FC<RandomDrinks> = ({ randomDrinks }) => {
  let allDrinks = randomDrinks.map((drink: Drink) => {
    return (
      <RandomDrinkCards
        idDrink={drink.idDrink}
        strDrink={drink.strDrink}
        strDrinkThumb={drink.strDrinkThumb}
        key={drink.idDrink}
      />
    );
  });

  return <div className="random-container">{allDrinks}</div>;
};

export default RandomContainer;
