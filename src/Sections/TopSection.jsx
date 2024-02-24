import React from "react";
import Overview from "../Components/Overview";
import Circle from "../Components/Circle";

const TopSection = () => {
  return (
    <div>
      <div className="row">
        <h1 className=" overview-h1">Overview</h1>
      </div>
      <div className="row">
          <div className="col-2">
      <Overview />
      </div>
      <div class="col-2">
            {/* <CircleProg /> */}
           <Circle/>
          </div>
      </div>
    </div>
  );
};

export default TopSection;
