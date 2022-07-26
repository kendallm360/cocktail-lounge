import { FC } from "react";
import RandomDrinkCards from "../randomDrinkCards/RandomDrinkCards";
import "./RandomContainer.css";

type RandomDrinks = {
  randomDrinks: Drink[];
};

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

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
  })

  return  <div className="random-container">
            {allDrinks}
          </div>;
};

export default RandomContainer;
