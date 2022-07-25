import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import RandomContainer from "../RandomContainer/RandomContainer";
import { fetchRandomDrinks, fetchAllCocktails } from "../../apiCalls";


type IState = {
  drinkArray: Drink[];
  // randomDrink: RandomDrink
};

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

// type RandomDrink = {
//   idDrink: string;
//   strDrink: string;
//   strDrinkThumb: string;
// };

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      drinkArray: [],
      // randomDrink: {},
    };
  }

  componentDidMount = () => {
    // const getRandomDrink = (drinkArray: Drink[]) => {
    //   return Math.floor(Math.random() * drinkArray.length)
    // }
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
      // console.log();
      
      // const newRandomDrink = data.drinkArray[getRandomDrink(data.drinkArray)]
      this.setState({
        drinkArray: data.drinks,
        // randomDrink: newRandomDrink
      })
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
