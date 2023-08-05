import React from "react";

export default function TemperatureConversion(props) {


    return (
      <span id="conversion">
        <span className="main-temperature">{Math.round(props.celcius)}</span>
        <span className="unit-celcius units">°C</span>
       
      </span>
    );
  
}
