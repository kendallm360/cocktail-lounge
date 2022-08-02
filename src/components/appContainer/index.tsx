import "./styles.css";
import { FC } from "react";
import RandomContainer from "../randomContainer";
import SpecialtyContainer from "../specialtyContainer";
import { TypeState } from "../Types";
import Error from "../error";
import { Link } from "react-router-dom";

const AppContainer: FC<TypeState> = ({ drinkList, error }) => {
  return (
    <div className="app-wrapper">
      {error ? (
        <Link to={"/?/error"}>
          <Error />
        </Link>
      ) : (
        <>
          <RandomContainer drinkList={drinkList} error={error} />
          <SpecialtyContainer />
        </>
      )}
    </div>
  );
};

export default AppContainer;
