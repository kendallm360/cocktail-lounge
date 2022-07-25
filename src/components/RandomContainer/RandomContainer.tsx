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
  console.log(randomDrinks);

    const getRandomDrink = () => {
      return Math.floor(Math.random() * randomDrinks.length)
    }
    console.log('21', getRandomDrink());
    
  let allDrinks = randomDrinks.map((drink: Drink) => {
    return (
      <RandomDrinkCards
        idDrink={drink.idDrink}
        strDrink={drink.strDrink}
        strDrinkThumb={drink.strDrinkThumb}
      />
    );
  }).splice(getRandomDrink(), 4)
  return <div className="random-container">{allDrinks}</div>;
};

export default RandomContainer;
