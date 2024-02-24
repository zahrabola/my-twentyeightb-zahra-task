import React from "react";
import { dataBarCaut } from "../Data/DataPage";
import "../Styles/AvgBar.css";

const CautBar = () => {
  return (
    <div className="">
      <div className="wrapperBar">
        <h3 className="overview-h3">Caution</h3>
        {/*caution */}
        <div className="BarChart">
          {dataBarCaut &&
            dataBarCaut.map((dataCaut) => {
              return (
                <div
                  className="BarData"
                  style={{
                    background: `${dataCaut.color}`,
                    width: `${dataCaut.percent}%`,
                  }}
                >
                  <p className="PercentText">{dataCaut.percent + "%"}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CautBar;
