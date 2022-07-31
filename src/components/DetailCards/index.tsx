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
          <div className="detail-drink-card">
            <img
              className="detail-drink-image"
              src={this.state.drinkList[0].strDrinkThumb}/>
              <div className="stats">

            <h3 className="detailTitle">{this.state.drinkList[0].strDrink} </h3>
            <div className="instructions">
              <h3 className="preparationTitle">Preparation</h3>
              <br />
              {this.state.drinkList[0].strInstructions}
            </div>
            <p className="ingredients">
              <h3 className="ingredientsTitle">Ingredients</h3>
              <br />
              {this.state.drinkList[0].strIngredient1} <br />
              {this.state.drinkList[0].strIngredient2}
              <br />
              {this.state.drinkList[0].strIngredient3}
              <br />
              {this.state.drinkList[0].strIngredient4}
              <br />
              {this.state.drinkList[0].strIngredient5}
              {this.state.drinkList[0].strIngredient6}
              {this.state.drinkList[0].strIngredient7}
              {this.state.drinkList[0].strIngredient8}
              {this.state.drinkList[0].strIngredient9}
              {this.state.drinkList[0].strIngredient10}
              {this.state.drinkList[0].strIngredient11} <br />
            </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DetailCards;
