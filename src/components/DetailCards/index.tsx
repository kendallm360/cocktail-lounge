import "./styles.css";
import { FC, useState, useEffect } from "react";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink, TypeState } from "../Types";

const DetailCards: FC<TypeState> = ({ id }) => {
  const [drinkList, setDrinkList] = useState<Drink[]>([]);

  useEffect(() => {
    fetchSpecialtyCocktails(`lookup.php?i=${id}`).then((data) => {
      setDrinkList(data.drinks);
    });
  }, []);

  return (
    <div className="detailCards">
      {drinkList.length && (
        <div className="detail-drink-card">
          <img
            className="detail-drink-image"
            src={drinkList[0].strDrinkThumb}
          />
          <div className="stats">
            <h3 className="detailTitle">{drinkList[0].strDrink} </h3>
            <div className="instructions">
              <h3 className="preparationTitle">Preparation</h3>
              <p>{drinkList[0].strInstructions}</p>
            </div>
            <div className="ingredient-wrapper">
              <h3 className="ingredientsTitle">Ingredients</h3>
              <div className="ingredients">
                <p>{drinkList[0].strIngredient1}</p>
                <p>{drinkList[0].strIngredient2}</p>
                <p>{drinkList[0].strIngredient3}</p>
                <p>{drinkList[0].strIngredient4}</p>
                <p>{drinkList[0].strIngredient5}</p>
                <p>{drinkList[0].strIngredient6}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCards;
