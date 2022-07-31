import { Component, MouseEvent } from "react";
import "./MartiniDeck.css";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink, Props, TypeState } from "../Types";
import { Link } from "react-router-dom";

class MartiniDeck extends Component<{}, TypeState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      drinkList: [],
      id: "",
      error: false,
    };
  }

  componentDidMount = () => {
    fetchSpecialtyCocktails("search.php?s=martini").then((data) => {
      this.setState({ drinkList: data.drinks });
    });
  };

  formatMartinis = () => {
    return this.state.drinkList.map((martini: Drink) => {
      return (
        <div className="deckContainer">
        <Link to={`/drinks/${martini.idDrink}`}>
          <div
            className="martiniDrink"
            id={martini.idDrink}>
            <img className ="drink-image" src={martini.strDrinkThumb} />
            <h2>{martini.strDrink}</h2>
          </div>
        </Link>
        </div>
      );
    });
  };

  render() {
    return <div className="martiniContainer">{this.formatMartinis()}</div>;
  }
}
export default MartiniDeck;
