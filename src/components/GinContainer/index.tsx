import "./styles.css";
import { FC } from "react";
import ginImage from "../../images/ginSour.jpeg";
import { Link } from "react-router-dom";

const GinContainer: FC = () => {
  return (
    <div>
      <Link to="/GinDeck">
        <div className="ginButton">
          <img
            className="ginImage"
            src={ginImage}
            alt="Gin logo to act as a button for its category"
          />
          <h3>20 Gins that will get you loose</h3>
        </div>
      </Link>
    </div>
  );
};

export default GinContainer;
