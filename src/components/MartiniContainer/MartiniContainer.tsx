import React, { Component } from "react";
import "./MartiniContainer.css";
import MartiniImage from "../../images/martiniOlive.jpeg";
import { Link } from "react-router-dom";
import { Props, TypeState } from "../Types";

class MartiniContainer extends Component<{}, TypeState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      drinkList: [],
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
