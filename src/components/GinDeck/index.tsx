import { Component, MouseEvent } from "react";
import "./styles.css";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink, Props, TypeState } from "../Types";
import { Link } from "react-router-dom";
import Error from "../Error/error";

class GinDeck extends Component<{}, TypeState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      drinkList: [],
      id: "",
      error: false,
    };
  }

  componentDidMount = () => {
    fetchSpecialtyCocktails("search.php?s=gin")
      .then((data) => {
        this.setState({ drinkList: data.drinks });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  formatGins = () => {
    return this.state.drinkList.map((gin: Drink) => {
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

  render() {
    return (
      <div className="ginContainer">
        {this.state.error ? <Error /> : <>{this.formatGins()}</>}
      </div>
    );
  }
}
export default GinDeck;
