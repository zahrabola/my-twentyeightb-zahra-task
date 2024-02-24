import React from "react";
import AvgBar from "../Components/AvgBar";
import CautBar from "../Components/CautBar";
import ComBar from "../Components/ComBar";
import ConBar from "../Components/ConBar";
import Titles from "../Components/Titles";

const BottomSection = () => {
  return (
    <div>
      <Titles />
      <AvgBar />
      <CautBar />
      <ComBar />
      <ConBar /> 
      
      
    </div>
  );
};

export default BottomSection;
