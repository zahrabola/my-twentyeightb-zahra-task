import React from "react";
import { dataBarCom } from "../Data/DataPage";
import "../Styles/AvgBar.css";
const ComBar = () => {
  return (
    <div>
      <div className="wrapperBar">
        <h3 className="overview-h3">Complacent</h3>
        {/*complacent */}
        <div className="BarChart">
          {dataBarCom &&
            dataBarCom.map((dataCom) => {
              return (
                <div
                  className="BarData"
                  style={{
                    background: `${dataCom.color}`,
                    width: `${dataCom.percent}%`,
                  }}
                >
                  <p className="PercentText">{dataCom.percent + "%"}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ComBar;
