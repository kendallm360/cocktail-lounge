import { FC } from "react";
import "./SpecialtyContainer.css";
import MartiniContainer from "../MartiniContainer/MartiniContainer";
import AmarettoContainer from "../AmarettoContainer";
import { TypeState } from "../Types";

const SpecialtyContainer: FC = () => {
  return (
    <div className="specialtyContainer">
      <MartiniContainer />
      <AmarettoContainer />
    </div>
  );
};

export default SpecialtyContainer;





