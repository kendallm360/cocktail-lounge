import { FC } from "react"
import "./MartiniCard.css"


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
const MartiniCard: FC<SpecialtyDrink> = ({
    idDrink,
    strDrink,
    strDrinkThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11}) => {


    return(
        <div>
            <h1>{strDrink}</h1>
            <img src={strDrinkThumb}/>
            <div>{strInstructions}</div>
            <div>
                <p>
                    {strIngredient1}
                    {strIngredient2}
                    {strIngredient3}
                    {strIngredient4}
                    {strIngredient5}
                    {strIngredient6}
                    {strIngredient7}
                    {strIngredient8}
                    {strIngredient9}
                    {strIngredient10}
                    {strIngredient11}  
                </p>
                </div>
        </div>
    )
}
export default MartiniCard