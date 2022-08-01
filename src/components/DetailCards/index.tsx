import "./styles.css";
import { FC, useState, useEffect } from "react";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink, TypeState } from "../Types";


const DetailCards: FC <TypeState> = ({id}) => {
  const [drinkList, setDrinkList] = useState <Drink[]> ([]);

useEffect(() => {
  fetchSpecialtyCocktails(`lookup.php?i=${id}`)
  .then((data) => {setDrinkList(data.drinks)})
}, [])

    return (
      <div className="detailCards">
        {drinkList.length && (
          <div className="detail-drink-card">
            <img
              className="detail-drink-image"
              src={drinkList[0].strDrinkThumb}/>
              <div className="stats">
            <h3 className="detailTitle">{drinkList[0].strDrink} </h3>
            <div className="instructions">
              <h3 className="preparationTitle">Preparation</h3>
              <br />
              {drinkList[0].strInstructions}
            </div>
            <p className="ingredients">
              <h3 className="ingredientsTitle">Ingredients</h3>
              <br />
              {drinkList[0].strIngredient1} <br />
              {drinkList[0].strIngredient2}
              <br />
              {drinkList[0].strIngredient3}
              <br />
              {drinkList[0].strIngredient4}
              <br />
              {drinkList[0].strIngredient5}
              {drinkList[0].strIngredient6}
              {drinkList[0].strIngredient7}
              {drinkList[0].strIngredient8}
              {drinkList[0].strIngredient9}
              {drinkList[0].strIngredient10}
              {drinkList[0].strIngredient11} <br />
            </p>
            </div>
          </div>
        )}
      </div>
    );
}

export default DetailCards;
