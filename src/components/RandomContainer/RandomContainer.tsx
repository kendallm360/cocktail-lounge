import { FC } from "react";
import RandomDrinkCards from "../randomDrinkCards/RandomDrinkCards";
import "./RandomContainer.css";

type RandomDrinks = {
  randomDrinks: object[];
};

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

const RandomContainer: FC<RandomDrinks> = ({ randomDrinks }) => {
  console.log(randomDrinks);
  let allDrinks = randomDrinks.map((drink: object) => {
    return (
      <RandomDrinkCards
        idDrink={drink.idDrink}
        strDrink={drink.strDrink}
        strDrinkThumb={drink.strDrinkThumb}
      />
    );
  });
  return <div className="random-container">{allDrinks}</div>;
};

export default RandomContainer;
