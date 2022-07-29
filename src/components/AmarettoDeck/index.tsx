import { Component } from "react";
import "./styles.css";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink, TypeState } from "../Types";

class AmarettoDeck extends Component<{}, TypeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      drinkList: [],
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
        <div>
          <h1>{amaretto.strDrink}</h1>
          <img src={amaretto.strDrinkThumb} />
        </div>
      );
    });
  };

  render() {
    return <div className="AmarettoContainer">{this.formatAmarettos()}</div>;
  }
}
export default AmarettoDeck;
