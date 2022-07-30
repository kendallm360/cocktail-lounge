import { FC } from "react";
import { Link } from "react-router-dom";
import { Drink } from "../Types";
import "./RandomDrinkCards.css";

const RandomDrinkCards: FC<Drink> = ({ strDrink, strDrinkThumb, idDrink }) => {
  return (
    <Link to={`/drinks/${idDrink}`}>
      <div className="drink-card">
        <img
          className="drink-image"
          src={strDrinkThumb}
          alt={`Picture${idDrink} of a cocktail stirred to perfection`}/>
        <h2>{strDrink}</h2>
      </div>
    </Link>
  );
};

export default RandomDrinkCards;
