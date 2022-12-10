import { FC } from "react";
import "./styles.css";
import MartiniContainer from "../martiniContainer";
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
