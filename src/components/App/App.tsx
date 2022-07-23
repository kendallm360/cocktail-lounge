import React, { Component } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import RandomContainer from "../RandomContainer/RandomContainer";
import { fetchRandomDrinks } from "../../apiCalls";

interface IState {
  randomDrinks: object;
}

// let printName: (name: string) => void;

// let setState: (randomDrinks: string) => string

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      randomDrinks: {},
    };
  }

  componentDidMount = () => {
    fetchRandomDrinks().then((data) => {
      // console.log(typeof data.drinks[0]);
      this.setState({
        randomDrinks: data.drinks[0],
      });
    });
  };

  render() {
    // console.log(this.state.randomDrinks);
    return (
      <div className="App">
        <NavBar />
        <RandomContainer />
      </div>
    );
  }
}

export default App;
