import { FC } from "react";
import "./NavBar.css";

const NavBar: FC = () => {
  return (
    <div className="nav-bar">
      <h1>CockTail Lounge</h1>
      <button className="favorite-button">Favorite Draaanks</button>
    </div>
  );
};

export default NavBar;
