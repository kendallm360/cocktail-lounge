import { Component, FC } from "react";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import "./styles.css";
import { Props, TypeState } from "../Types";

class DetailCards extends Component<{ id: string }, TypeState> {
  constructor(props: { id: string; } | Readonly<{ id: string; }>) {
    super(props);
    this.state = {
      drinkList: [],
      error: false,
    };
  }

  componentDidMount = () => {
    fetchSpecialtyCocktails(`lookup.php?i=${this.props.id}`).then((data) => {
      this.setState({ drinkList: data.drinks });
    });
  };

  render() {
    return (
      <div className="detailCards">
        {this.state.drinkList.length && (
          <div className="drink-card">
            <h1 className="detailTitle">{this.state.drinkList[0].strDrink} </h1>
            <img
              className="drink-image"
              src={this.state.drinkList[0].strDrinkThumb}/>
            <p className="ingredients">
              <h2 className="ingredientsTitle">Ingredients</h2>
              <br />
              {this.state.drinkList[0].strIngredient1} <br />
              {this.state.drinkList[0].strIngredient2}
              <br />
              {this.state.drinkList[0].strIngredient3}
              <br />
              {this.state.drinkList[0].strIngredient4}
              <br />
              {this.state.drinkList[0].strIngredient5}
              <br />
              {this.state.drinkList[0].strIngredient6}
              <br />
              {this.state.drinkList[0].strIngredient7}
              <br />
              {this.state.drinkList[0].strIngredient8}
              <br />
              {this.state.drinkList[0].strIngredient9}
              <br />
              {this.state.drinkList[0].strIngredient10}
              <br />
              {this.state.drinkList[0].strIngredient11} <br />
            </p>
            <div className="instructions">
              <h3 className="preparationTitle">Preparation</h3>
              <br />
              {this.state.drinkList[0].strInstructions}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DetailCards;
