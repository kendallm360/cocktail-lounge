import "./App.css";
import NavBar from "../NavBar/NavBar";
import GinDeck from "../GinDeck";
import MartiniDeck from "../MartiniDeck/MartiniDeck";
import AmarettoDeck from "../AmarettoDeck";
import DetailCards from "../DetailCards";
import AppContainer from "../AppContainer/AppContainer";
import Error from "../Error/error";
import {FC, useState, useEffect} from "react"
import { fetchAllCocktails } from "../../apiCalls";
import { Route } from "react-router-dom";
import { Drink } from "../Types";

const App: FC = () => {

  const [drinkList, setDrinkList] = useState <Drink[]> ([]);
  const [id, setId] = useState ("");
  const [error, setError] = useState(false)


  const getRandomDrink = (drinkList: Drink[]) => {
    const shuffled = drinkList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  useEffect(() => {
    fetchAllCocktails()
      .then((data) => { setDrinkList(getRandomDrink(data.drinks)) })
      .catch(() => { setError( true ) });
  }, [])

    return (
      <div>
        <NavBar />
        
        <Route exact path="/">
          <div className="App">
            <AppContainer
              drinkList={drinkList}
              error={error}/>
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

        <Route exact path="/GinDeck">
          <GinDeck />
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

export default App;
