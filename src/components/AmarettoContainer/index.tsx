import React, { Component } from "react";
import "./styles.css";
import AmarettoImage from "../../images/amaretto.jpeg";
import { Link } from "react-router-dom";
import { Props, TypeState } from "../Types";

class AmarettoContainer extends Component<{}, TypeState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      drinkList: [],
    };
  }

  render() {
    return (
      <div>
        <Link to="/AmarettoDeck">
          <div className="amarettoButton">
            <img className="amarettoImage" src={AmarettoImage} />
            <h3>13 Amaretto drinks that will satisfy your sweet tooth</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default AmarettoContainer;
