import React from "react";
import { dataBarCon } from "../Data/DataPage";

import "../Styles/AvgBar.css";
const ConBar = () => {
  return (
    <div>
      <div className="wrapperBar">
        <h3 className="overview-h3">Confident</h3>
        {/*confident */}
        <div className="BarChart">
          {dataBarCon &&
            dataBarCon.map((dataCon) => {
              return (
                <div
                  className="BarData"
                  style={{
                    background: `${dataCon.color}`,
                    width: `${dataCon.percent}%`,
                  }}
                >
                  <p className="PercentText">{dataCon.percent + "%"}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ConBar;
