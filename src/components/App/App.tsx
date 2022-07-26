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

  getRandomDrink = (drinkArray: Drink[]) => {
    return Math.floor(Math.random() * drinkArray.length)
  }
  
  componentDidMount = () => {  
    fetchAllCocktails().then((data) => {
      // const newRandomDrink = data.drinks[getRandomDrink(data.drinks)]
      console.log('line 41', data.drinks);
      console.log('line 42', this.state.drinkArray);
      
      this.setState({
        drinkArray: data.drinks[this.getRandomDrink(data.drinks)],
        // randomDrink: newRandomDrink
      })
    });
  };

  render() {
    // console.log(this.state.drinkArray);
    return (
      <div className="App">
        <NavBar />
        <RandomContainer 
        randomDrinks={this.state.drinkArray} 
        
        />
      </div>
    );
  }
}

export default App;
