import React, { FC } from "react";
import "./styles.css";
import ginImage from "../../images/ginSour.jpeg";
import { Link } from "react-router-dom";

const GinContainer: FC = () => {
  return (
    <div>
      <Link to="/GinDeck">
        <div className="ginButton">
          <img className="ginImage" src={ginImage} />
          <h3>20 Gins that will get you loose</h3>
        </div>
      </Link>
    </div>
  );
};

export default GinContainer;
