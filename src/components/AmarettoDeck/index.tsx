import { Component } from "react";
import "./styles.css";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { SpecialtyDrink, SpecialtyState } from "../Types";

class AmarettoDeck extends Component<{}, SpecialtyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      martiniDrinks: [],
    };
  }

  componentDidMount = () => {
    fetchSpecialtyCocktails("search.php?s=amaretto").then((data) => {
      this.setState({ martiniDrinks: data.drinks });
    });
  };

  formatAmarettos = () => {
    return this.state.martiniDrinks.map((amaretto: SpecialtyDrink) => {
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
