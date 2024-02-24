import { dataNextCalls } from "../Data/DataPage";
import React, { useState } from "react";


const getRandomIdx = () => Math.floor(Math.random() * dataNextCalls.length);


const Overview = () => {

    const [randomIdx, setRandomIdx] = useState(getRandomIdx());
    return (
        <div>
          <div className=" ">
        <button className=" overview-h3 btn-overview" onClick={() => setRandomIdx(getRandomIdx())}>Next Call</button>
        <div class="row">
          <div class="col-2">
            <h3 className=" overview-h3">Date:</h3>
          </div>
          <div class="col-2">
            <p className="overview-p">{dataNextCalls[randomIdx].day}</p>
            <p className="overview-p">{dataNextCalls[randomIdx].date}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <h3 className=" overview-h3">Account:</h3>
          </div>
          <div class="col-2">
            <p className="overview-p">{dataNextCalls[randomIdx].account}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <h3 className=" overview-h3">Specality:</h3>
          </div>
          <div class="col-2">
            <p className="overview-p">{dataNextCalls[randomIdx].speciality}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <h3 className=" overview-h3">Profiling:</h3>
          </div>
          <div class="col-2">
            <p className="overview-p">{dataNextCalls[randomIdx].profiling}</p>
          </div>
        </div>
      </div>
       {/*<p>Idx : {randomIdx}</p>*/}
        </div>
    );
}

export default Overview;
