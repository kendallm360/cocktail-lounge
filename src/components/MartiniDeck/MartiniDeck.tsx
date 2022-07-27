import { FC } from "react"
import "./MartiniDeck.css"


type SpecialtyState = {
    martiniDrinks: SpecialtyDrink[]
    // amarettoDrinks: Drink[]
    // bourbonDrinks: Drink[]
}

type SpecialtyDrink = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions?: string | null;
    strIngredient1?: string | null;
    strIngredient2?: string | null;
    strIngredient3?: string | null;
    strIngredient4?: string | null;
    strIngredient5?: string | null;
    strIngredient6?: string | null;
    strIngredient7?: string | null;
    strIngredient8?: string | null;
    strIngredient9?: string | null;
    strIngredient10?: string | null;
    strIngredient11?: string | null;
};
const MartiniDeck: FC<SpecialtyDrink> = ({ martiniDrink: SpecialtyDrink
    // idDrink,
    // strDrink,
    // strDrinkThumb,
    // strInstructions,
    // strIngredient1,
    // strIngredient2,
    // strIngredient3,
    // strIngredient4,
    // strIngredient5,
    // strIngredient6,
    // strIngredient7,
    // strIngredient8,
    // strIngredient9,
    // strIngredient10,
    // strIngredient11
}) => {

//START HERE!!!!!! map over and use martiniDeck
    return(
        <div className="martiniContainer"> YAY DECKK
            <div className="drink-card">
            <h1>{strDrink}</h1>
            <img className="drink-image" src={strDrinkThumb}/>
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
        </div>
    </div>
    )
}
export default MartiniDeck