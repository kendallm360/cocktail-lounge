import React, { Component } from "react"
import"./SpecialtyContainer.css"
import MartiniContainer from "../MartiniContainer/MartiniContainer"



class SpecialtyContainer extends Component {
    constructor(props:any) {
        super(props)
        this.state = {}
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