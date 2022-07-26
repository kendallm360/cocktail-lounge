import React, { Component } from "react"
import"./SpecialtyContainer.css"
import MartiniContainer from "../MartiniContainer/MartiniContainer"
import { fetchSpecialtyCocktails } from "../../apiCalls"



class SpecialtyContainer extends Component {
    constructor(props:any) {
        super(props)
        this.state = {}
    }

    componentDidMount = () => {
        fetchSpecialtyCocktails()
        .then(data => {
            console.log("martini data", data);
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