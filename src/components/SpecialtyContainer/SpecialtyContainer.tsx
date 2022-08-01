import { FC } from "react";
import "./SpecialtyContainer.css";
import MartiniContainer from "../MartiniContainer/MartiniContainer";
import AmarettoContainer from "../AmarettoContainer";
import GinContainer from "../GinContainer";

const SpecialtyContainer: FC = () => {
  return (
    <div className="specialtyContainer">
      <MartiniContainer />
      <AmarettoContainer />
      <GinContainer />
    </div>
  );
};

export default SpecialtyContainer;
