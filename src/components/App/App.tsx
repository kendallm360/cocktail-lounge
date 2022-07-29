import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import RandomContainer from "../RandomContainer/RandomContainer";
import SpecialtyContainer from "../SpecialtyContainer/SpecialtyContainer";
import { fetchAllCocktails } from "../../apiCalls";
import { Route } from "react-router-dom";
import MartiniDeck from "../MartiniDeck/MartiniDeck";
import { Drink, TypeState } from "../Types";
import AmarettoDeck from "../AmarettoDeck";
import DetailCards from "../DetailCards";

class App extends React.Component<{}, TypeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      drinkList: [],
      id: "",
    };
  }

  getRandomDrink = (drinkList: Drink[]) => {
    const shuffled = drinkList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  componentDidMount = () => {
    fetchAllCocktails().then((data) => {
      this.setState({
        drinkList: this.getRandomDrink(data.drinks),
      });
    });
  };

  render() {
    return (
      <div>
        <NavBar />

        <Route exact path="/">
          <div className="App">
            <RandomContainer drinkList={this.state.drinkList} />
            <SpecialtyContainer />
          </div>
        </Route>

        <Route exact path="/MartiniDeck">
          <MartiniDeck />
        </Route>

        <Route exact path="/AmarettoDeck">
          <AmarettoDeck />
        </Route>

        {/* <Route exact path="/:id">
          <DetailCards />
        </Route> */}
        <Route
          exact
          path="/:id"
          render={({ match }) => {
            return <DetailCards id={match.params.id} />;
          }}
        />
      </div>
    );
  }
}

export default App;
