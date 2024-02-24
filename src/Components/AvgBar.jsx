import React from "react";
import { dataBarAvg } from "../Data/DataPage";
import "../Styles/AvgBar.css";
const AvgBar = () => {
  return (
    <div className="">
      <div className="wrapperBar">
        {/*Avg. all */}
        <h3 className="overview-h3">Avg. all</h3>

        <div className="BarChart ">
          {dataBarAvg &&
            dataBarAvg.map((dataAvg) => {
              return (
                <div
                  className="BarData"
                  style={{
                    background: `${dataAvg.color}`,
                    width: `${dataAvg.percent}%`,
                  }}
                >
                  <p className="PercentText">{dataAvg.percent + "%"}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AvgBar;
