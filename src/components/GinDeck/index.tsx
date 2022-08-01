import "./styles.css";
import Error from "../Error/error";
import { FC, useState, useEffect } from "react";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink } from "../Types";
import { Link } from "react-router-dom";

const GinDeck: FC = () => {
  const [drinkList, setDrinkList] = useState([]);
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchSpecialtyCocktails("search.php?s=gin")
      .then((data) => {setDrinkList(data.drinks)})
      .catch(() => {setError( true )});
  }, []);

  const formatGins = () => {
    return drinkList.map((gin: Drink) => {
      return (
        <div className="deckContainer">
          <Link to={`/drinks/${gin.idDrink}`}>
            <div className="ginDrink" id={gin.idDrink}>
              <img className="drink-image" src={gin.strDrinkThumb} />
              <h2>{gin.strDrink}</h2>
            </div>
          </Link>
        </div>
      );
    });
  };
  
    return (
      <div className="ginContainer">
        {error ? <Error /> : <>{formatGins()}</>}
      </div>
    );
}
export default GinDeck;
