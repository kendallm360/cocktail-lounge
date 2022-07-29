import { Component, FC } from "react";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import "./styles.css";
import { TypeState } from "../Types";

//Try changing to Fc with hooks
//also try implementing conditional rendering that only returns the display when
//error is isAvailable is falsey
class DetailCards extends Component<{ id: string }, TypeState> {
  //   constructor({ id }: { id: string }) {
  //     super({ id });
  //     this.state = {
  //       drinkList: [],
  //     };
  //   }
  constructor(props: any) {
    super(props);
    this.state = {
      drinkList: [],
    };
  }

  componentDidMount = () => {
    // console.log(this.props.id);
    //   https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11005
    //   https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini"consol
    console.log(this.props.id);
    fetchSpecialtyCocktails(`lookup.php?i=${this.props.id}`).then((data) => {
      this.setState({ drinkList: data.drinks });
    });
  };

  render() {
    console.log(this.state.drinkList, "<<<<");
    ///wrap the entire return in a function and
    return (
      <div className="detailCards">
        <h1>hey</h1>
        {/* <h1>
          {this.state.drinkList[0].strDrink && this.state.drinkList[0].strDrink}
        </h1> */}
        {/* <div className="drink-card">
              <h1>{strDrink}</h1>
              <img className="drink-image" src={strDrinkThumb} />
              <p className="ingredients">
                {strIngredient1} <br />
                {strIngredient2}
                <br />
                {strIngredient3}
                <br />
                {strIngredient4}
                <br />
                {strIngredient5}
                <br />
                {strIngredient6}
                <br />
                {strIngredient7}
                <br />
                {strIngredient8}
                <br />
                {strIngredient9}
                <br />
                {strIngredient10}
                <br />
                {strIngredient11} <br />
              </p>
              <div className="instructions">{strInstructions}</div>
            </div> */}
      </div>
    );
  }
}

export default DetailCards;
function Props(Props: any) {
  throw new Error("Function not implemented.");
}
