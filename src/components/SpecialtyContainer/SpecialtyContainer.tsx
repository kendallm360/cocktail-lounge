import { FC } from "react"
import"./SpecialtyContainer.css"
import MartiniContainer from "../MartiniContainer/MartiniContainer"
import { fetchSpecialtyCocktails } from "../../apiCalls"
import MartiniImage from "../../../src/Martini.jpeg"

// type SpecialtyState = {
//     martiniDrinks: Drink[]
//     // amarettoDrinks: Drink[]
//     // bourbonDrinks: Drink[]
// }
// type Drink = {
//     idDrink: string;
//     strDrink: string;
//     strDrinkThumb: string;
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
//};

const SpecialtyContainer: FC = () => {

    return(
        <div className="specialtyContainer">
            <MartiniContainer />
        </div>
    )
}

export default SpecialtyContainer








// class SpecialtyContainer extends Component<{}, SpecialtyState> {
//     constructor(props:any) {
//         super(props)
//         this.state = {
//             martiniDrinks:[],
            // amarettoDrinks:[],
            // bourbonDrinks:[]
    //     }
    // }

    // componentDidMount = () => {
    //     fetchSpecialtyCocktails()
    //     .then(data => {
    //         this.setState({ martiniDrinks: data.drinks})
    //         console.log("martini data array", data.drinks);
    //     })
    // }

    // render() {
    //     return (
            // <div className="specialtyContainer">
            //     <MartiniContainer martiniDrinks={this.state.martiniDrinks}/>
            // </div>
    //     )
    // }
