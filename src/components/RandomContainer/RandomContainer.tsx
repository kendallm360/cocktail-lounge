import { FC } from "react";
import "./RandomContainer.css";

type RandomDrinks = {
  randomDrinks: Drink;
  //   strDrink: string;
  //   strDrinkThumb: string;
};

type Drink = {
  strDrink: string;
  strDrinkThumb: string;
};

const RandomContainer: FC<RandomDrinks> = ({ randomDrinks }) => {
  return (
    <div className="random-container">
      Random
      {/* <h2>{randomDrinks}</h2> */}
    </div>
  );
};

export default RandomContainer;
