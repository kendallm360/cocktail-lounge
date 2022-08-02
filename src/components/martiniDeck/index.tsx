import "./styles.css";
import Error from "../error";
import { FC, useState, useEffect } from "react";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink } from "../Types";
import { Link } from "react-router-dom";

const MartiniDeck: FC = () => {
  const [drinkList, setDrinkList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchSpecialtyCocktails("search.php?s=martini")
      .then((data) => {
        setDrinkList(data.drinks);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const formatMartinis = () => {
    return drinkList.map((martini: Drink) => {
      return (
        <div className="deckContainer">
          <Link to={`/drinks/${martini.idDrink}`}>
            <div className="martiniDrink" id={martini.idDrink}>
              <img className="drink-image" src={martini.strDrinkThumb} />
              <h2>{martini.strDrink}</h2>
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="martiniContainer">
      {error ? <Error /> : <>{formatMartinis()}</>}
    </div>
  );
};
export default MartiniDeck;
