import React, { Component } from "react";
import "./MartiniContainer.css";
import MartiniImage from "../../images/martiniOlive.jpeg";
import { Link } from "react-router-dom";
import { Props, SpecialtyState } from "../typeScriptImports";

class MartiniContainer extends Component<{}, SpecialtyState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      martiniDrinks: [],
    };
  }

  render() {
    return (
      <div>
        <Link to="/MartiniDeck">
          <div className="martiniButton">
            <img className="martiniImage" src={MartiniImage} />
            <h3>10 Martinis that will impress your guests</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default MartiniContainer;
