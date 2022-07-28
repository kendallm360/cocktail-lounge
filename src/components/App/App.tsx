import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import RandomContainer from "../RandomContainer/RandomContainer";
import SpecialtyContainer from "../SpecialtyContainer/SpecialtyContainer";
import { fetchAllCocktails } from "../../apiCalls";
import { Route } from "react-router-dom";
import MartiniDeck from "../MartiniDeck/MartiniDeck";
import { Drink, IState } from "../Types";
import AmarettoDeck from "../AmarettoDeck";

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      drinkArray: [],
    };
  }

  getRandomDrink = (drinkArray: Drink[]) => {
    const shuffled = drinkArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  componentDidMount = () => {
    fetchAllCocktails().then((data) => {
      this.setState({
        drinkArray: this.getRandomDrink(data.drinks),
      });
    });
  };

  render() {
    return (
      <div>
        <NavBar />

        <Route exact path="/">
          <div className="App">
            <RandomContainer randomDrinks={this.state.drinkArray} />
            <SpecialtyContainer />
          </div>
        </Route>

        <Route exact path="/MartiniDeck">
          <MartiniDeck />
        </Route>

        <Route exact path="/AmarettoDeck">
          <AmarettoDeck />
        </Route>
      </div>
    );
  }
}

export default App;
