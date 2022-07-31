import { FC } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar: FC = () => {
  return (
    <div className="nav-bar">
      <article>
        <Link to="/">
          <h1>The CockTail Lounge 〄</h1>
        </Link>
      </article>
    </div>
  );
};

export default NavBar;
