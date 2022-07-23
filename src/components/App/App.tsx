import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import RandomContainer from "../RandomContainer/RandomContainer";
import { fetchRandomDrinks } from "../../apiCalls";

type IState = {
  // randomDrinks: RandomDrink{};
  strDrink: string;
  strDrinkThumb: string;
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
      strDrink: "",
      strDrinkThumb: "",
    };
  }

  componentDidMount = () => {
    fetchRandomDrinks().then((data) => {
      this.setState({
        strDrink: data.drinks[0].strDrink,
        strDrinkThumb: data.drinks[0].strDrinkThumb,
      });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar />
        <RandomContainer randomDrinks={this.state} />
      </div>
    );
  }
}

export default App;
