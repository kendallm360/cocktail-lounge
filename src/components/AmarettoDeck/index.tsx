import "./styles.css";
import Error from "../Error/error";
import { FC, useState, useEffect } from "react";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink } from "../Types";
import { Link } from "react-router-dom";

const AmarettoDeck: FC = () => {

  const [drinkList, setDrinkList] = useState([]);
  const [error, setError] = useState(false);

 useEffect(() => {
    fetchSpecialtyCocktails("search.php?s=amaretto")
      .then((data) => {setDrinkList(data.drinks)})
      .catch(() => {setError(true)});
  }, []);

  const formatAmarettos = () => {
    return drinkList.map((amaretto: Drink) => {
      return (
        <div className="deckContainer">
          <Link to={`/drinks/${amaretto.idDrink}`}>
            <div className="amaretto-drink">
              <img className="drink-image" src={amaretto.strDrinkThumb} />
              <h2>{amaretto.strDrink}</h2>
            </div>
          </Link>
        </div>
      );
    });
  };

    return (
      <div className="AmarettoContainer">
        {error ? <Error /> : <>{formatAmarettos()}</>}
      </div>
    );
}
export default AmarettoDeck;
