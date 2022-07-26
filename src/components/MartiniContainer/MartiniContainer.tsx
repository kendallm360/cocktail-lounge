import {FC} from "react"
import "./MartiniContainer.css"
import MartiniImage from "../../../src/Martini.jpeg"
import SpecialtyContainer from "../SpecialtyContainer/SpecialtyContainer"

const MartiniContainer = () => {

    return(
        <div>
            <button className="martiniButton">
                <img className="martiniImage" src={MartiniImage} />
                <h3>10 Martinis that will impress your guests</h3>
            </button>
        </div>
    )
}
export default MartiniContainer