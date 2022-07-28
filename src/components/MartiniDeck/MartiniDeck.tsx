import { Component } from "react"
import "./MartiniDeck.css"
import { fetchSpecialtyCocktails } from "../../apiCalls"


type SpecialtyState = {
    martiniDrinks: SpecialtyDrink[];
}

type SpecialtyDrink = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
};

class MartiniDeck extends Component<{}, SpecialtyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            martiniDrinks: [],
        };
    }

    componentDidMount = () => {
        fetchSpecialtyCocktails()
            .then(data => {
                this.setState({ martiniDrinks: data.drinks })
            })
    }
    
    formatMartinis = () => {
        return this.state.martiniDrinks.map((martini: SpecialtyDrink) => {
         return (
                <div>
                    <h1>{martini.strDrink}</h1>
                    <img src={martini.strDrinkThumb}/>
                </div>
            )})
         }

    render() {
        return(
        <div className="martiniContainer">
           {this.formatMartinis()}
        </div>
    )
}
}
export default MartiniDeck