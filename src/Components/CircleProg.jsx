import React, { useEffect, useState } from 'react';
import {
    CircularProgressbarWithChildren,
   //CircularProgressbar,
    buildStyles,
  } from 'react-circular-progressbar';
  import "../Styles/Circle.css";
  import 'react-circular-progressbar/dist/styles.css';

const CircleProg = () => {

    const [load, setLoad] = useState(false);
    const [percentage, setPercentage] = useState(60);
    const [bgColor, setBgColor] = useState('#dddddd');
  
    const handleChange = () => {
      setLoad(!load);
    };
  
    useEffect(() => {
      load ? setPercentage(74) : setPercentage(60);
      load
        ? setBgColor('#F68B15')
        : setBgColor('#F68B15');
    }, [load]);

    
    return (


        <div className="">
        <div className="wrapperDonut">
          <CircularProgressbarWithChildren
          counterClockwise
          text={`${percentage}%`}
            value={percentage}
            styles={buildStyles({
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathColor: bgColor,
              strokeLinecap: "butt",
              textColor:"#333333"
        
              
            })}
            strokeWidth={3}
          />

          <div className="">
            <button className="btn btn-primary" onClick={handleChange}>
              Change Velocity
            </button>
            <p className="fw-bold m-0 h3">{`${percentage}%`}</p>
          </div>


          <div>
        {   /*  
             <CircularProgressbar
               value={percentage}
               text={`${percentage}%`}
               counterClockwise
               
        /> */}
          
               </div>
            
        </div>
      </div>
       
    );
}

export default CircleProg;
