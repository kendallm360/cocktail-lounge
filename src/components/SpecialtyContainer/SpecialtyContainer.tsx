import React, { Component } from "react"
import"./SpecialtyContainer.css"
import MartiniContainer from "../MartiniContainer/MartiniContainer"
import { fetchSpecialtyCocktails } from "../../apiCalls"

type SpecialtyState = {
    martiniDrinks: Drink[]
    // amarettoDrinks: Drink[]
    // bourbonDrinks: Drink[]
}
type Drink = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
};

class SpecialtyContainer extends Component<{}, SpecialtyState> {
    constructor(props:any) {
        super(props)
        this.state = {
            martiniDrinks:[],
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

    render() {
        return (
            <div className="specialtyContainer">
    
                <MartiniContainer />
            </div>
        )
    }
}
export default SpecialtyContainer