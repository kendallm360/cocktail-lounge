import { FC } from "react";
import RandomDrinkCards from "../randomDrinkCards/RandomDrinkCards";
import "./RandomContainer.css";

type RandomDrinks = {
  randomDrinks: object[];
  //Why do we have to sepearate the declarations
  //why cant we just declare it this way below?
  //   strDrink: string;
  //   strDrinkThumb: string;
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
  // let allDrinks = rando
  return (
    <div className="random-container">
      Random
      {/* <h2>{randomDrinks.strDrink}</h2>
      <img src={randomDrinks.strDrinkThumb} /> */}
      {/* <h2>{randomDrinks.strDrink1}</h2>
      <img src={randomDrinks.strDrinkThumb1} /> */}
      {allDrinks}
    </div>
  );
};

export default RandomContainer;
