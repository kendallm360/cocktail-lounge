import React, { Component } from "react"
import "./MartiniContainer.css"
import MartiniImage from "../../../src/Martini.jpeg"
import MartiniDeck from "../MartiniDeck/MartiniDeck"
import { fetchSpecialtyCocktails } from "../../apiCalls"
// import { Route } from "react-router-dom"


type SpecialtyState = {
    martiniDrinks: SpecialtyDrink[];
    isClicked:boolean;
    // amarettoDrinks: Drink[]
    // bourbonDrinks: Drink[]
}

type Props = {
    props:any
}

type SpecialtyDrink = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    // strInstructions?: string | null;
    // strIngredient1?: string | null;
    // strIngredient2?: string | null;
    // strIngredient3?: string | null;
    // strIngredient4?: string | null;
    // strIngredient5?: string | null;
    // strIngredient6?: string | null;
    // strIngredient7?: string | null;
    // strIngredient8?: string | null;
    // strIngredient9?: string | null;
    // strIngredient10?: string | null;
    // strIngredient11?: string | null;
};

class MartiniContainer extends Component<{}, SpecialtyState> {
    constructor(props: Props) {
         super(props)
         this.state = {
             martiniDrinks:[],
             isClicked:false,
            // amarettoDrinks:[],
            // bourbonDrinks:[]
         }
     }

  componentDidMount = () => {
        fetchSpecialtyCocktails()
        .then(data => {
            this.setState({ martiniDrinks: data.drinks})
            console.log("martini data array", data.drinks);
        })
    }

    handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(event);
        this.setState({isClicked:true})

    }

    //  getMartinis = () => {
    //      let allMartinis = this.state.martiniDrinks.map((martini: SpecialtyDrink) => {
    //          return (
    //              <MartiniDeck
    //                  idDrink={martini.idDrink}
    //                  strDrink={martini.strDrink}
    //                  strDrinkThumb={martini.strDrinkThumb}
                 // strInstructions={martini.strInstructions}
                 // strIngredient1={martini.strIngredient1}
                 // strIngredient2={martini.strIngredient2}
                 // strIngredient3={martini.strIngredient3}
                 // strIngredient4={martini.strIngredient4}
                 // strIngredient5={martini.strIngredient5}
                 // strIngredient6={martini.strIngredient6}
                 // strIngredient7={martini.strIngredient7}
                 // strIngredient8={martini.strIngredient8}
                 // strIngredient9={martini.strIngredient9}
                 // strIngredient10={martini.strIngredient10}
                 // strIngredient11={martini.strIngredient11}
    //              />);
    //      })
    //  }

    //  let allMartinis = this.state.martiniDrinks.map((martini: SpecialtyDrink) => {
    //      return (
    //          <MartiniDeck
    //              idDrink={martini.idDrink}
    //              strDrink={martini.strDrink}
    //              strDrinkThumb={martini.strDrinkThumb}
    //          // strInstructions={martini.strInstructions}
    //          // strIngredient1={martini.strIngredient1}
    //          // strIngredient2={martini.strIngredient2}
    //          // strIngredient3={martini.strIngredient3}
    //          // strIngredient4={martini.strIngredient4}
    //          // strIngredient5={martini.strIngredient5}
    //          // strIngredient6={martini.strIngredient6}
    //          // strIngredient7={martini.strIngredient7}
    //          // strIngredient8={martini.strIngredient8}
    //          // strIngredient9={martini.strIngredient9}
    //          // strIngredient10={martini.strIngredient10}
    //          // strIngredient11={martini.strIngredient11}
    //           />);
    //   })


    render( ) {
        return(
            <div>
           {this.state.isClicked?
                    <MartiniDeck martiniDrinks={this.state.martiniDrinks} />:
            <div className="martiniButton" onClick={(event) => this.handleClick(event)}>
                {/* {allMartinis} */}
                <img className="martiniImage" src={MartiniImage} />
                <h3>10 Martinis that will impress your guests</h3>
            </div>}
        </div>
           
            )
    }
}
export default MartiniContainer