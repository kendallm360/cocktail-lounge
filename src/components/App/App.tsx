import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import RandomContainer from "../RandomContainer/RandomContainer";
import { fetchRandomDrinks, fetchAllCocktails } from "../../apiCalls";

type IState = {
  drinkArray: object[];
};

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      drinkArray: [],
    };
  }

  componentDidMount = () => {
    // fetchRandomDrinks().then((data) => {
    //   this.setState({
    //     strDrink: data.drinks[0].strDrink,
    //     strDrinkThumb: data.drinks[0].strDrinkThumb,
    //   });
    // });
    // fetchRandomDrinks().then((data) => {
    //   this.setState({
    //     strDrink1: data.drinks[0].strDrink,
    //     strDrinkThumb1: data.drinks[0].strDrinkThumb,
    //   });
    // });
    fetchAllCocktails().then((data) => {
      this.setState({
        drinkArray: data.drinks,
      });
    });
  };

  render() {
    // console.log(this.state.drinkArray);
    return (
      <div className="App">
        <NavBar />
        <RandomContainer randomDrinks={this.state.drinkArray} />
      </div>
    );
  }
}

export default App;
