import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import ErrorImage from "../../images/drunk404.png";

const Error: FC = () => {
  return (
    <Link to={"/error"}>
      <div className="errorDiv">
        <img
          className="errorImage"
          src={ErrorImage}
          alt="Picture of a drunk guy to show the site is down"
        />
        <h2 className="errorMessage">
          You didn't break the internet, but we can't find what you are looking
          for... Please try again later.
        </h2>
      </div>
    </Link>
  );
};

export default Error;
