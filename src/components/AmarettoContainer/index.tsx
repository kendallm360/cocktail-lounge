import React, { FC } from "react";
import "./styles.css";
import AmarettoImage from "../../images/amaretto.jpeg";
import { Link } from "react-router-dom";


const AmarettoContainer: FC = () => {

  return (
    <div className='amaretto-container'>
      <Link to="/AmarettoDeck">
        <div className="amarettoButton">
          <img className="amarettoImage" src={AmarettoImage} />
          <h3>13 Amaretto drinks that will satisfy your sweet tooth</h3>
        </div>
      </Link>
    </div>
  )
}

export default AmarettoContainer;
