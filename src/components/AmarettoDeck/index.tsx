import { Component } from "react";
import "./styles.css";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink, Props, TypeState } from "../Types";
import { Link } from "react-router-dom";

class AmarettoDeck extends Component<{}, TypeState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      drinkList: [],
      error: false,
    };
  }

  componentDidMount = () => {
    fetchSpecialtyCocktails("search.php?s=amaretto").then((data) => {
      this.setState({ drinkList: data.drinks });
    });
  };

  formatAmarettos = () => {
    return this.state.drinkList.map((amaretto: Drink) => {
      return (
        <div className="deckContainer">
        <Link to={`/drinks/${amaretto.idDrink}`}>
          <div className="amaretto-drink">
          <img className="drink-image" src={amaretto.strDrinkThumb} />
          <h2>{amaretto.strDrink}</h2>
          </div>
        </Link>
         </div >
      );
    });
  };

  render() {
    return <div className="AmarettoContainer">{this.formatAmarettos()}</div>;
  }
}
export default AmarettoDeck;
