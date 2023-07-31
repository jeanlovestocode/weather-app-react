import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celcius");
  function FarenheitConversion(event) {
    event.preventDefault();
    setUnit("Farenheit");
  }
  function CelciusConversion(event){
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span id="conversion">
        <span className="main-temperature">{Math.round(props.celcius)}</span>
        <span className="unit-celcius units">°C</span>
        <span className="unit-farenheit units">
          {" "}
          |
          <a href="/" onClick={FarenheitConversion}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let farenheit =(props.celcius * 9/5) + 32;
    return (
      <span id="conversion">
        <span className="main-temperature">{Math.round(farenheit)}</span>
        <span className="unit-celcius units">
          <a href="/" onClick={CelciusConversion}>
            °C
          </a>
        </span>
        <span className="unit-farenheit units"> |°F</span>
      </span>
    );
  }
}
