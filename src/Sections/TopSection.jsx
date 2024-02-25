import React from "react";
import Overview from "../Components/Overview";
import Circle from "../Components/Circle";
import Titles from "../Components/Titles"

const TopSection = () => {
  return (
    <div className="wrapper">
      <div className="row">
        <h1 className=" overview-h1">Overview</h1>
      </div>
      <div className="row">
          <div className="col-2">
            <Overview />
          </div>
          <div class="col-2">
            {/* <CircleProg /> */}
            <Circle />
          </div>
        </div>
        <Titles />
    
      
   
      
  
    </div>
  );
};

export default TopSection;
