import { FC } from "react";
import "./SpecialtyContainer.css";
import MartiniContainer from "../MartiniContainer/MartiniContainer";
import AmarettoContainer from "../AmarettoContainer";

const SpecialtyContainer: FC = () => {
  return (
    <div className="specialtyContainer">
      <MartiniContainer />
      <AmarettoContainer />
    </div>
  );
};

export default SpecialtyContainer;
