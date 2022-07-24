import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import RandomContainer from "../RandomContainer/RandomContainer";
import { fetchRandomDrinks, fetchAllCocktails } from "../../apiCalls";

type IState = {
  // randomDrinks: RandomDrink{};
  // idDrink: string;
  // strDrink: string;
  // strDrinkThumb: string;
  drinkArray: object[];
  // strDrink1: string;
  // strDrinkThumb1: string;
};

// type RandomDrink = {
//   strDrink: string;
//   strDrinkThumb: string;
// };

// let printName: (name: string) => void;

// let setState: (randomDrinks: string) => string

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      // randomDrinks: {},
      // idDrink: "",
      // strDrink: "",
      // strDrinkThumb: "",
      drinkArray: [],
      // strDrink1: "",
      // strDrinkThumb1: "",
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
      // let test = data.drinks.map((e: object) => {
      //   console.log(e, "<<<<");
      //   return this.setState({
      //     idDrink: e.idDrink,
      //     strDrink: e.strDrink,
      //     strDrinkThumb: e.strDrinkThumb,
      //   });
      // });
      // console.log(test, "test");
      // return test;
      this.setState({
        drinkArray: data.drinks,
      });
    });
  };

  render() {
    console.log(this.state.drinkArray);
    return (
      <div className="App">
        <NavBar />
        <RandomContainer randomDrinks={this.state.drinkArray} />
      </div>
    );
  }
}

export default App;
