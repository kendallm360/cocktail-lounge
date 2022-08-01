import { FC } from "react";
import React, { useState, useEffect } from "react"
import "./MartiniDeck.css";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink, Props, TypeState } from "../Types";
import { Link } from "react-router-dom";
import Error from "../Error/error";

const MartiniDeck: FC = () => {
    const [drinkList, setDrinkList] = useState([]);
    const [id, setId] = useState("");
    const [error, setError] = useState(false)


// class MartiniDeck extends Component<{}, TypeState> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       drinkList: [],
//       id: "",
//       error: false,
//     };
//   }

  // const componentDidMount = () => {
  //   fetchSpecialtyCocktails("search.php?s=martini")
  //     .then((data) => {
  //       setDrinkList( data.drinks );
  //     })
  //     .catch((error) => {
  //       setError( true );
  //     });
  // };


  useEffect(() => {
    fetchSpecialtyCocktails("search.php?s=martini")
      .then((data) => {
        setDrinkList(data.drinks);
      })
      .catch(() => {
        setError(true);
      });
  }, [])

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
}
export default MartiniDeck;
