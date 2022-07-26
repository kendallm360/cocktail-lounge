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
    // return Math.floor(Math.random() * drinkArray.length)
    // Shuffle array
  const shuffled = drinkArray.sort(() => 0.5 - Math.random());
  console.log('shuffled', shuffled);
  
  // Get sub-array of first n elements after shuffled
  return shuffled.slice(0, 4);
  }
  
  
  
  componentDidMount = () => {  
    fetchAllCocktails().then((data) => {
      // const newRandomDrink = data.drinks[getRandomDrink(data.drinks)]
      console.log('line 49', data.drinks);
      console.log('line 50', this.state.drinkArray);
      
      this.setState({
        drinkArray: this.getRandomDrink(data.drinks),
        // randomDrink: newRandomDrink
      })
      // console.log('56', this.getRandomDrink());
      
    });
  };
  
  render() {
    // console.log(this.state.drinkArray);
    return (
      <div className="App">
        {/* {console.log('4 randoms?', this.getRandomDrink())}; */}
        <NavBar />
        <RandomContainer 
        randomDrinks={this.state.drinkArray} 
        
        />
      </div>
    );
  }
}

export default App;
