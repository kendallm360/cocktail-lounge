import React, {FC} from "react";
import "./MartiniContainer.css";
import MartiniImage from "../../images/martiniOlive.jpeg";
import { Link } from "react-router-dom";

const MartiniContainer: FC = () => {

  return (
    <div>
      <Link to="/MartiniDeck">
        <div className="martiniButton">
          <img className="martiniImage" src={MartiniImage} />
          <h3>14 Martinis that will impress your guests</h3>
        </div>
      </Link>
    </div>
  )
}

export default MartiniContainer;
