import React from "react";
import "../Styles/Circle.css";

const Circle = () => {
  return (
    <div>
      <div className="wrapper">
    
        <div className="circle-wrapper">
          <div class="svg-item">
         
          <div className="row">
              {" "}
              <h3 className=" overview-h3 circle ">Call this month</h3>
            </div>
            {/* toggle between */}
            <svg width="60%" height="60%" viewBox="0 0 40 40" class="donut">
              <circle
                className="donut-hole"
                cx="20"
                cy="20"
                r="15.91549430918954"
                fill="#fff"
              ></circle>
              <circle
                className="donut-ring"
                cx="20"
                cy="20"
                r="15.91549430918954"
                fill="transparent"
                stroke-width="1"
              ></circle>
              <circle
                className="donut-segment donut-segment-3"
                cx="20"
                cy="20"
                r="15.91549430918954"
                fill="transparent"
                stroke-width="1"
                stroke-dasharray="30 70"
                stroke-dashoffset="25"
              ></circle>
              <g className="donut-text donut-text-2">
                <text y="50%" transform="translate(0, 2)">
                  <tspan
                    x="50%"
                    text-anchor="middle"
                    class="donut-percent"
                  >
                    21/ 28
                  </tspan>
                </text>
              </g>
            </svg>



          </div>
        </div>
      </div>


    </div>
  );
};

export default Circle;
