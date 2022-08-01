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

  return (
    <div className="random">
      <br></br>
      <article className="blog">
        Imagine, you're out with friends at the newest bar in town and you are
        waiting in line for a drink. It's finally your turn to order- and you
        FREEZE . You can't think of a single fun cocktail to order. "Shake it
        Up" to see random cocktails, or browse our favorites below so you're
        never again stuck wondering, "What should I order?"
      </article>
      <br></br>
      <div className="random-container">{allDrinks}</div>
      <br></br>
      <button className="btn-shakeUp" onClick={() => window.location.reload()}>
        <span>Shake it Up!</span>
      </button>
    </div>
  );
};

export default RandomContainer;
