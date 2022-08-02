import "./styles.css";
import { FC } from "react";
import MartiniImage from "../../images/martiniOlive.jpeg";
import { Link } from "react-router-dom";

const MartiniContainer: FC = () => {
  return (
    <div>
      <Link to="/MartiniDeck">
        <div className="martiniButton">
          <img
            className="martiniImage"
            src={MartiniImage}
            alt="Martini logo to act as a button for its category"
          />
          <h3>14 Martinis that will impress your guests</h3>
        </div>
      </Link>
    </div>
  );
};

export default MartiniContainer;
