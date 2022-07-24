import { FC } from "react";
import "./RandomDrinkCards.css";

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

const RandomDrinkCards: FC<Drink> = () => {
  return (
    <div className="drink-card">
      <h2>Stuff will be here</h2>
      {/* <img/> */}
    </div>
  );
};

export default RandomDrinkCards;
