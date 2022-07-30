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
        <Link to={`/drinks/${martini.idDrink}`}>
          <div
            className="martiniDrink"
            id={martini.idDrink}>
            <h1>{martini.strDrink}</h1>
            <img src={martini.strDrinkThumb} />
          </div>
        </Link>
      );
    });
  };

  render() {
    return <div className="martiniContainer">{this.formatMartinis()}</div>;
  }
}
export default MartiniDeck;
