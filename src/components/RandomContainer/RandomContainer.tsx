import { FC } from "react";
import "./RandomContainer.css";

type RandomDrinks = {
  randomDrinks: object[];
  //Why do we have to sepearate the declarations
  //why cant we just declare it this way below?
  //   strDrink: string;
  //   strDrinkThumb: string;
};

// type Drink = {
//   idDrink: string;
//   strDrink: string;
//   strDrinkThumb: string;
//   strDrink1: string;
//   strDrinkThumb1: string;
// };

const RandomContainer: FC<RandomDrinks> = ({ randomDrinks }) => {
  console.log(randomDrinks);
  // let allDrinks = rando
  return (
    <div className="random-container">
      Random
      {/* <h2>{randomDrinks.strDrink}</h2>
      <img src={randomDrinks.strDrinkThumb} /> */}
      {/* <h2>{randomDrinks.strDrink1}</h2>
      <img src={randomDrinks.strDrinkThumb1} /> */}
    </div>
  );
};

export default RandomContainer;
