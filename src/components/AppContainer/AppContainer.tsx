import { FC } from "react";
import RandomContainer from "../RandomContainer/RandomContainer";
import SpecialtyContainer from "../SpecialtyContainer/SpecialtyContainer";
import { TypeState } from "../Types";
import "./AppContainer.css";
import Error from "../Error/error";
import { Link } from "react-router-dom";

const AppContainer: FC<TypeState> = ({ drinkList, error }) => {
  return (
    <div>
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
