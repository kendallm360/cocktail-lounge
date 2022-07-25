import { FC } from "react";
import "./RandomDrinkCards.css";

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

const RandomDrinkCards: FC<Drink> = ({ strDrink, strDrinkThumb, idDrink }) => {
  return (
    <div className="drink-card">
      <h2>{strDrink}</h2>
      <img
        src={strDrinkThumb}
        alt={`Picture${idDrink} of a cocktail stirred to perfection`}
      />
    </div>
  );
};

export default RandomDrinkCards;