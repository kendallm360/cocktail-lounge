import { FC } from "react";
import RandomDrinkCards from "../RandomDrinkCards/RandomDrinkCards";
import { Drink, TypeState } from "../Types";
import "./RandomContainer.css";

const RandomContainer: FC<TypeState> = ({ drinkList }) => {
  let allDrinks = drinkList.map((drink: Drink) => {
    return (
      <RandomDrinkCards
        idDrink={drink.idDrink}
        strDrink={drink.strDrink}
        strDrinkThumb={drink.strDrinkThumb}
        key={drink.idDrink}
      />
    );
  });

  return <div className="random-container">{allDrinks}
    <button className="btn-shakeUp" onClick={() => window.location.reload()}><span>Shake it Up!</span></button>
    </div>;
};

export default RandomContainer;
