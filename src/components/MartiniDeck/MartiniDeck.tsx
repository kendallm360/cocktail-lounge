import { FC } from "react"
import "./MartiniDeck.css"
import MartiniContainer from "../MartiniContainer/MartiniContainer"


type SpecialtyState = {
    martiniDrinks: SpecialtyDrink[]
    // amarettoDrinks: Drink[]
    // bourbonDrinks: Drink[]
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

const MartiniDeck: FC<SpecialtyState> = ({ martiniDrinks }) => {
  
    let allMartinis = martiniDrinks.map((martini: SpecialtyDrink) => {
         return (
                <div>
                    <h1>{martini.strDrink}</h1>
                    <img src={martini.strDrinkThumb}/>
                </div>
    )})

    return(
        <div className="martiniContainer">
            {allMartinis}
            {/* <div className="drink-card">
            <h1>{strDrink}</h1>
            <img className="drink-image" src={strDrinkThumb}/> */}
            {/* <div className="details">
                <p className="ingredients">
                    {strIngredient1} <br/>
                        {strIngredient2}<br/>
                            {strIngredient3}<br/>
                                {strIngredient4}<br/>
                                    {strIngredient5}<br/>
                                        {strIngredient6}<br/>
                                            {strIngredient7}<br/>
                                                {strIngredient8}<br/>
                                                    {strIngredient9}<br/>
                                                        {strIngredient10}<br/>
                                                            {strIngredient11}  <br/>
                </p> */}
                {/* <div className="instructions">{strInstructions}</div>
            </div> */}
        {/* </div> */}
    </div>
    )
}
export default MartiniDeck