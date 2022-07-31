import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import RandomContainer from "../RandomContainer/RandomContainer";
import SpecialtyContainer from "../SpecialtyContainer/SpecialtyContainer";
import { fetchAllCocktails } from "../../apiCalls";
import { Route } from "react-router-dom";
import MartiniDeck from "../MartiniDeck/MartiniDeck";
import { Drink, Props, TypeState } from "../Types";
import AmarettoDeck from "../AmarettoDeck";
import DetailCards from "../DetailCards";
import Error from "../Error/error";
import AppContainer from "../AppContainer/AppContainer";

class App extends React.Component<{}, TypeState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      drinkList: [],
      id: "",
      error: false,
    };
  }

  getRandomDrink = (drinkList: Drink[]) => {
    const shuffled = drinkList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  componentDidMount = () => {
    fetchAllCocktails()
      .then((data) => {
        this.setState({
          drinkList: this.getRandomDrink(data.drinks),
        });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        {/* {this.state.error && <Error />} */}

        <Route exact path="/">
          <div className="App">
            {/* <RandomContainer
              drinkList={this.state.drinkList}
              error={this.state.error}
            />
            <SpecialtyContainer
              error={this.state.error}
              idDrink={""}
              strDrink={""}
              strDrinkThumb={""}
            /> */}
            <AppContainer
              drinkList={this.state.drinkList}
              error={this.state.error}
            />
          </div>
        </Route>

        <Route exact path="/?/error">
          <Error />
        </Route>

        <Route exact path="/MartiniDeck">
          <MartiniDeck />
        </Route>

        <Route exact path="/AmarettoDeck">
          <AmarettoDeck />
        </Route>

        <Route
          exact
          path="/drinks/:id"
          render={({ match }) => {
            return <DetailCards id={match.params.id} />;
          }}
        />
      </div>
    );
  }
}

export default App;
