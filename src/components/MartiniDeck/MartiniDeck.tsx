import { Component, MouseEvent } from "react";
import "./MartiniDeck.css";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink, TypeState } from "../Types";
import { Link } from "react-router-dom";
// import DetailCards from "../DetailCards";

class MartiniDeck extends Component<{}, TypeState> {
  constructor(props: any) {
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

  //   handleClick = (event: MouseEvent<HTMLDivElement, MouseEvent>) => {
  //     <DetailCards id={this.state.id} drinks={this.state.drinkList} />;
  //     console.log(event);
  //   };

  formatMartinis = () => {
    return this.state.drinkList.map((martini: Drink) => {
      //   console.log(martini);
      return (
        <Link to={`/drinks/${martini.idDrink}`}>
          <div
            className="martiniDrink"
            id={martini.idDrink}
            // onClick={(event) => this.handleClick(event.target.id)}
          >
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
