import { FC } from "react";
import "./styles.css";
import AmarettoImage from "../../images/amaretto.jpeg";
import { Link } from "react-router-dom";

const AmarettoContainer: FC = () => {
  return (
    <div className="amaretto-container">
      <Link to="/AmarettoDeck">
        <div className="amarettoButton">
          <img
            className="amarettoImage"
            src={AmarettoImage}
            alt="Amaretto logo to act as a button for its category"
          />
          <h3>15 Amaretto drinks to satisfy your sweet tooth</h3>
        </div>
      </Link>
    </div>
  );
};

export default AmarettoContainer;
